'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'artists',
      [
        {
          stagename: 'Rauw Alejandro',
          singles: 80,
          industryyears: '8',
          followings: '13.8 Million',
        },
         {
            stagename: 'Daddy Yankee',
            singles: 67,
            industryyears: '32',
            followings: '45.1 Million',
          }, 
          {
            stagename: 'Bad Bunny',
            singles: 93,
            industryyears: '9',
            followings: '38.6 Million',
          },
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('artists', null, {})
  }
}

