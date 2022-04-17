import { podcasts } from "../models";

export const getAllPodcasts = async (params) => {
	try {
		const podcast = await podcasts.findAndCountAll({
			order: [["createdAt", "DESC"]],
			offset: params.offset,
			limit: params.limit
		});
		return {
			success: true,
			data: podcast
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

		const Podcasts = await podcasts.create({
			...params
		});

		return {
			success: true,
			data: Podcasts.id
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
		const podcast = await podcasts.destroy({
			where: {
				id: params.id
			}
		});
		return {
			success: true,
			data: podcast
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
		const Podcasts = await podcasts.update(
			{ ...params },
			{
				where: {
					id: params.id
				}
			}
		);

		return {
			success: true,
			data: Podcasts
		};
	} catch (error) {
		return {
			success: false,
			data: error
		};
	}
};
