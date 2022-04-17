"use strict";
module.exports = (sequelize, DataTypes) => {
	const podcasts = sequelize.define(
		"podcasts",
		{
			imageUrl: DataTypes.STRING,
			videoId: DataTypes.STRING,
			title: DataTypes.STRING,
			description: DataTypes.STRING
		},
		{}
	);
	podcasts.associate = function (models) {
		// associations can be defined here
	};
	return podcasts;
};
