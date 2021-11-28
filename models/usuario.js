const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
    nombre: {
        type: String,
        reuired: true
    },
    email: {
        type: String,
        reuired: true,
        unique: true
    },
    password: {
        type: String,
        reuired: true
    },
    online: {
        type: Boolean,
        default: false
    }
});

UsuarioSchema.method('toJSON', function(){
    const {__v, _id, password, ...object} = this.toObject();
    object.uId = _id;
    return object;
});

module.exports = model('Usuario', UsuarioSchema);