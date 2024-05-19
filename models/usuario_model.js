const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    email: {
        type:String,
        required: true
    },
    nombre: {
        type:String,
        required:true
    },
    password: {
        type:String,
        required: true
    },
    estado: {
        type: Boolean,
        default: true
    },
    imagen: {
        type: String,
        required: false        
    }
});
console.log('Hola Yana');
console.log('Hola Santi');
module.exports = mongoose.model('Usuario', usuarioSchema);

