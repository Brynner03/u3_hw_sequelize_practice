'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'concert',
      [
        {
          date: 'April 14th, 2022',
          location: 'Pechanga Arena San Diego, San Diego, CA, USA',
          venuecap: '16,100',
          singer: 'Rauw Alejandro'
        },
        {
            date: 'April 15th, 2022',
            location: 'Save Mart Center, Fresno, CA, USA',
            venuecap: '16,182',
            singer: 'Rauw Alejandro'
          },
          {
            date: 'April 16th, 2022',
            location: 'The Kia Forum, Inglewood, CA, USA',
            venuecap: '17,505',
            singer: 'Rauw Alejandro'
          },
          {
            date: 'June 25th, 2022',
            location: 'Dodger Stadium, Los Angeles, California, USA',
            venuecap: '56,000',
            singer: 'Daddy Yankee'
          },
          {
            date: 'July 27th, 2022',
            location: 'The Kia Forum, Inglewood, CA, USA',
            venuecap: '17,505',
            singer: 'Daddy Yankee'
          },
          {
            date: 'July 18th, 2022',
            location: 'The Kia Forum, Inglewood, CA, USA',
            venuecap: '17,505',
            singer: 'Daddy Yankee'
          },
          {
            date: 'August 5th, 2022',
            location: 'Camping World Stadium "Former Orlando Citrus Bowl", Orlando, FL, USA',
            venuecap: '65,000',
            singer: 'Bad Bunny'
          },
          {
            date: 'August 9th, 2022',
            location: 'Truist Park (Formerly SunTrust Park),Atlanta, GA, USA',
            venuecap: '41,500',
            singer: 'Bad Bunny'
          },
          {
            date: 'August 12th, 2022',
            location: 'Hard Rock Stadium, Miami, FL, USA',
            venuecap: '76,100',
            singer: 'Bad Bunny'
          }

        
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('concert', null, {})
  }
}

