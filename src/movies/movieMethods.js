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

// UPDATE FILMS BY FILTER 
exports.updateFilm = async () => {
    try {
        if (argv.newname) {
            const updateResult = await Film.update(
                { name: argv.newname }, {
                where: {
                    name: argv.name
                }
            })
            console.log(`${updateResult} movie/s updated to name "${argv.newname}"`)
        }
        else if (argv.newgenre) {
            const updateResult = await Film.update(
                { genre: argv.newgenre }, {
                where: {
                    name: argv.name
                }
            })
            console.log(`${updateResult} movie/s updated to genre "${argv.newgenre}"`)
        }
        else if (argv.newactor) {
            const updateResult = await Film.update(
                { actor: argv.newactor }, {
                where: {
                    name: argv.name
                }
            })
            console.log(`${updateResult} movie/s updated to actor "${argv.newactor}"`)
        }
        else if (argv.newrating) {
            const updateResult = await Film.update(
                { rating: argv.newrating }, {
                where: {
                    name: argv.name
                }
            })
            console.log(`${updateResult} movie/s updated to rating "${argv.newrating}"`)
        }
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