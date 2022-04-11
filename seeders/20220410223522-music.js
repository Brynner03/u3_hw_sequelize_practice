'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'music',
      [
        {
            songname: 'Todo de Ti',
            release_date: 'May 20th, 2020',
            totalviews:'501,254,661',
            singer: 'Rauw Alejandro',
        },
        {
            songname: '2/Catorce',
            release_date: 'February 13th, 2021',
            totalviews: '359,098,610',
            singer: 'Rauw Alejandro',
        },
        {
            songname: 'Desesperados',
            release_date: 'December 9th, 2021',
            totalviews: '174,317,359',
            singer: 'Rauw Alejandro',
        },
        {
            songname: 'Gasolina',
            release_date: 'November 2005',
            totalviews: '900,000,000',
            singer: 'Daddy Yankee',
        },
        {
            songname: 'Rompe',
            release_date: 'September 30th, 2005',
            totalviews: '300,000,000',
            singer: 'Daddy Yankee',
        },
        {
            songname: 'Despacito',
            release_date: 'January 13th, 2017',
            totalviews: '7,809,958,454',
            singer: 'Daddy Yankee',
        },
        {
            songname: 'No Me Conoce (Remix)',
            release_date: 'May 17th, 2019',
            totalviews: '1,783,697,934',
            singer: 'Bad Bunny',
        },
        {
            songname: 'Dakiti',
            release_date: 'October 30th, 2020',
            totalviews: '1,069,145,573',
            singer: 'Bad Bunny',
        },
        {
            songname: 'Callaita',
            release_date: 'May 31st, 2019',
            totalviews: '890,514,724',
            singer: 'Bad Bunny',
        }
        
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('music', null, {})
  }
}

