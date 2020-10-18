'use strict';
const fsPromises = require('fs').promises

module.exports = {
  up: (queryInterface, Sequelize) => {
    return fsPromises.readFile('./students.json', { encoding: 'utf-8' })
      .then( data => {
        data = JSON.parse(data)
        data.forEach( student => {
          student.createdAt = new Date()
          student.updatedAt = new Date()
        })
        return queryInterface.bulkInsert('Students', data)
      })
      .catch( err => {
        throw err
      })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Students', null, {})
  }
};
