const express = require('express');

const router = express.Router();

//RAKING
router.get('/', (req, res) => {
	res.send('INDEX');
});

//DELETE raking
// NO ESTOY SEGURA DE PODER BORRARLO, PERO COMO SE MIDE POR REACCIONES, 
// ¿SI LA REACCIÒN SE QUITA, EL RAKING BAJA DE NUEVO?
router.delete('/:rakingId', (req, res) => {
	res.send('DELETE');
});

// SHOW raking
router.get('/:rakingId', (req, res) => {
	res.send('SHOW');
});

// UPDATE raking
router.put('/:rakingId', (req, res) => {
	res.send('UPDATE');
});

module.exports = router;