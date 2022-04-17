"use strict";

module.exports = {
	up: (queryInterface, Sequelize) => {
		/*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
		return queryInterface.bulkInsert(
			"podcasts",
			[
				{
					title: "XYZ",
					description: "ABC",
					videoId: "12345",
					imageUrl: "https://images.app.goo.gl/oxSEtpttAETPUkSY8",
					createdAt: new Date(),
					updatedAt: new Date()
				}
			],
			{}
		);
	},

	down: (queryInterface, Sequelize) => {
		/*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
      
    */
		return queryInterface.dropTable("mail_recipients");
	}
};
