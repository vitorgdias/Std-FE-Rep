const mongoose = require("mongoose")

require("dotenv").config()

mongoose.set("strictQuery", true)

async function main() {
    await mongoose.connect(`mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@cluster0.9b48qnk.mongodb.net/`)

    console.log("Conectado com sucesso")
}

main().catch((error) => console.log(error))

module.exports = main