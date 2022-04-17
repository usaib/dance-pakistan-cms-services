import { documentaries } from "../models";

export const getAllDocumentaries = async (params) => {
	try {
		const documentary = await documentaries.findAndCountAll({
			order: [["createdAt", "DESC"]],
			offset: params.offset,
			limit: params.limit
		});
		return {
			success: true,
			data: documentary
		};
	} catch (error) {
		return {
			success: false,
			data: error
		};
	}
};

export const create = async (params) => {
	try {
		console.log(params);

		const Documentaries = await documentaries.create({
			...params
		});

		return {
			success: true,
			data: Documentaries.id
		};
	} catch (error) {
		return {
			success: false,
			data: error
		};
	}
};

export const remove = async (params) => {
	try {
		const documentary = await documentaries.destroy({
			where: {
				id: params.id
			}
		});
		return {
			success: true,
			data: documentary
		};
	} catch (error) {
		return {
			success: false,
			data: error
		};
	}
};

export const update = async (params) => {
	try {
		console.log(params);
		const Documentaries = await documentaries.update(
			{ ...params },
			{
				where: {
					id: params.id
				}
			}
		);

		return {
			success: true,
			data: Documentaries
		};
	} catch (error) {
		return {
			success: false,
			data: error
		};
	}
};
