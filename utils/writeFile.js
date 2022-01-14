const fs = require('fs');

function writeFile(fileName, data) {
    fs.writeFile(
        fs.writeFile(
            fileName,
            data,
            (err) => 
            err ? console.error(err) : console.log('----------Team Profile Generated----------')
        )
    )
}

module.exports = writeFile;