const mongoose = require('mongoose');

const dbConnection = async() => {
    const uri = process.env.DB_CNN;
    const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

    try {
        // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
        await mongoose.connect(uri, clientOptions);
        await mongoose.connection.db.admin().command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } catch (error) {
        console.log(error);
        throw new Error('Error de conexión a la Base de Datos...');    
    } finally {
        // Ensures that the client will close when you finish/error
        await mongoose.disconnect();
    }
}

module.exports = {
    dbConnection: dbConnection,
}