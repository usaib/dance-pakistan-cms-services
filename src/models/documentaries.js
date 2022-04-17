"use strict";

module.exports = (sequelize, DataTypes) => {
	const documentaries = sequelize.define(
		"documentaries",
		{
			imageUrl: DataTypes.STRING,
			videoId: DataTypes.STRING,
			title: DataTypes.STRING,
			description: DataTypes.STRING
		},
		{}
	);
	documentaries.associate = function (models) {
		// associations can be defined here
	};
	return documentaries;
};
