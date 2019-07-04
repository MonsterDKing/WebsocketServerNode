"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.desconectar = function (cliente) {
    cliente.on('disconnect', function () {
        console.log('Cliente desconectado');
    });
};
//escuchar mensaje
exports.mensaje = function (cliente, io) {
    cliente.on('mensaje', function (payload) {
        console.log('mensaje recivido', payload);
        io.emit('mensaje-nuevo', payload);
    });
};
