import { podcasts } from "../../models";
const Service = require("../../Services/Podcasts");

export const create = async (request, response) => {
	try {
		const resp = await Service.create(request.body);
		if (resp.success) {
			response.status(200).json({
				message: "podcasts created Successfully",
				success: true,
				data: resp
			});
		} else {
			console.log("contro resp", resp);
			response.status(200).json({
				message: "Failed to create podcasts",
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

export const allPodcasts = async (request, response) => {
	try {
		const resp = await Service.getAllPodcasts(request.body);
		if (resp.success) {
			response.status(200).json({
				message: "Successfully get podcast",
				success: true,
				data: resp
			});
		} else {
			console.log("contro resp", resp);
			response.status(200).json({
				message: "podcasts listing failed",
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
				message: "podcasts Deleted Successfully",
				success: true,
				data: resp
			});
		} else {
			console.log("Error resp", resp);
			response.status(200).json({
				message: "Failed to delete podcasts",
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
				message: "podcasts updated Successfully",
				success: true,
				data: resp
			});
		} else {
			console.log("Error resp", resp);
			response.status(200).json({
				message: "Failed to update podcasts",
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
