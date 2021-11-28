const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
       mongoose.connect(process.env.DBCNN, {
           useNewUrlParser: true,
           useUnifiedTopology: true,
       });
       console.log('db online!!!'); 
    } catch (error) {
        console.log(error);
        throw new Error('Error en la base de datos. Contacte con el administrador');
    }
}

module.exports = {
    dbConnection
}