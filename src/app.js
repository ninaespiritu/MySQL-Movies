const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;

const { addFilm, listAll, deleteFilm, deleteAll } = require("./movies/movieMethods");

const App = async () => {
    if (argv.add) {
        const filmObj = {
            name: argv.title,
            genre: argv.genre,
            actor: argv.actor,
            rating: argv.rating,
        }
        await addFilm(filmObj)
    }
    else if (argv.list) {
        await listAll()
    }
    else if (argv.delete) {
        await deleteFilm()
    }
    else if (argv.deleteAll) {
        await deleteAll()
    }
    else {
        console.log("Wrong command")
    }
};

App();