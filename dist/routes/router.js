"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
router.get('/mensajes', function (req, res) {
    res.json({
        ok: true,
        mensaje: 'Listo'
    });
});
router.post('/mensajes', function (req, res) {
    var cuerpo = req.body;
    res.json({
        ok: true,
        cuerpo: cuerpo
    });
});
router.post('/mensajes/:id', function (req, res) {
    var id = req.params.id;
    console.log(req.query);
    res.json({
        ok: true,
        id: id
    });
});
exports.default = router;
