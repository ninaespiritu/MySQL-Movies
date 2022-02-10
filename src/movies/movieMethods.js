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

// LIST ALL FILMS
exports.listAll = async () => {
    try {
        const listResult = await Film.findAll()
        console.log(listResult)
    }
    catch (error) {
        console.log(error)
    }
};

// DELETE FILMS BY FILTER
exports.deleteFilm = async () => {
    try {
        if (argv.name) {
            const deleteResult = await Film.destroy({
                where: {
                    name: argv.name
                }
            })
            console.log(`${deleteResult} movie/s deleted named "${argv.name}"`)
        }
        else if (argv.genre) {
            const deleteResult = await Film.destroy({
                where: {
                    genre: argv.genre
                }
            })
            console.log(`${deleteResult} movie/s deleted with genre "${argv.genre}"`)
        }
        else if (argv.actor) {
            const deleteResult = await Film.destroy({
                where: {
                    actor: argv.actor
                }
            })
            console.log(`${deleteResult} movie/s deleted with actor ${argv.actor}`)
        }
        else if (argv.rating) {
            const deleteResult = await Film.destroy({
                where: {
                    rating: argv.rating
                }
            })
            console.log(`${deleteResult} movie/s deleted with rating "${argv.rating}"`)
        }
    }
    catch (error) {
        console.log(error)
    }
};

// DELETE ALL FILMS
exports.deleteAll = async () => {
    try {
        const deleteResult = await Film.destroy({
            truncate: true
        })
        console.log(deleteResult)
        console.log("All movies deleted")
    }
    catch (error) {
        console.log(error)
    }
};