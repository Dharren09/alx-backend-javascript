/**
 * using db, fn accepts a path in argument
 * script attempts to read the db async
 * fn returns a promise
 * if db not available, throw error
 * if db is available, it logs msg to console
 * logs the no of students in @ field and list
 * CSV file can contain empty lines
 */


const fs = require('fs');

function countStudents(path) {
  const csList = [];
  const sweList = [];
  const httpResponse = [];

  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
        return;
      }
      const lines = data.split(/\r?\n/);
      lines.forEach((line) => {
        if (line.includes('CS')) {
          csList.push(line.split(',')[0]);
        } else if (line.includes('SWE')) {
          sweList.push(line.split(',')[0]);
        }
      });
      const studentsCount = csList.length + sweList.length;
      console.log(`Number of students: ${studentsCount}`);
      console.log(`Number of students in CS: ${csList.length}. List: ${csList.join(', ')}`);
      console.log(`Number of students in SWE: ${sweList.length}. List: ${sweList.join(', ')}`);
      httpResponse.push(`Number of students: ${studentsCount}`);
      httpResponse.push(`Number of students in CS: ${csList.length}. List: ${csList.join(', ')}`);
      httpResponse.push(`Number of students in SWE: ${sweList.length}. List: ${sweList.join(', ')}`);
      resolve({
        httpResponse,
      });
    });
  });
}

module.exports = countStudents;
