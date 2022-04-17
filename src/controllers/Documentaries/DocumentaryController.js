import { documentaries } from "../../models";
const Service = require("../../Services/Documentaries");

export const create = async (request, response) => {
	try {
		const resp = await Service.create(request.body);
		if (resp.success) {
			response.status(200).json({
				message: "documentaries created Successfully",
				success: true,
				data: resp
			});
		} else {
			console.log("contro resp", resp);
			response.status(200).json({
				message: "Failed to create documentaries",
				success: false,
				data: resp
			});
		}
	} catch (e) {
		response.status(400).json({
			...e
		});
	}
};

export const allDocumentaries = async (request, response) => {
	try {
		const resp = await Service.getAllDocumentaries(request.body);
		if (resp.success) {
			response.status(200).json({
				message: "Successfully get documentary",
				success: true,
				data: resp
			});
		} else {
			console.log("contro resp", resp);
			response.status(200).json({
				message: "documentaries listing failed",
				success: false,
				data: resp
			});
		}
	} catch (e) {
		response.status(400).json({
			...e
		});
	}
};

export const remove = async (request, response) => {
	try {
		const resp = await Service.remove(request.body);
		if (resp.success) {
			response.status(200).json({
				message: "documentaries Deleted Successfully",
				success: true,
				data: resp
			});
		} else {
			console.log("Error resp", resp);
			response.status(200).json({
				message: "Failed to delete documentaries",
				success: false,
				data: resp
			});
		}
	} catch (e) {
		response.status(400).json({
			...e
		});
	}
};
export const update = async (request, response) => {
	try {
		const resp = await Service.update(request.body);
		if (resp.success) {
			response.status(200).json({
				message: "documentaries updated Successfully",
				success: true,
				data: resp
			});
		} else {
			console.log("Error resp", resp);
			response.status(200).json({
				message: "Failed to update documentaries",
				success: false,
				data: resp
			});
		}
	} catch (e) {
		console.log(e);
		response.status(400).json({
			...e
		});
	}
};
