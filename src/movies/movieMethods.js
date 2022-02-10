const Film = require("./movieModel");
const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;

// ADD FILM 
exports.addFilm = async (filmObj) => {
    try {
        // Check first if database exists, then add data
        await Film.sync()
        await Film.create(filmObj)
    }
    catch (error) {
        console.log(error)
    }
};

exports.listAll = async () => {
    try {
        const listResult = await Film.findAll()
        console.log(listResult)
    }
    catch (error) {
        console.log(error)
    }
};