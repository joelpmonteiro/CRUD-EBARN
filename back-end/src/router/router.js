const express = require('express');
const router = express.Router();
const ebarnController = require('../Controller/ebarnController');
//insert
router.post('/createTractors', ebarnController.insertCreateTractorsController)
//delete
router.delete('/deleteTractors/:id/:nameTractors', ebarnController.deleteTractors);
//update
router.put('/updateTractors', ebarnController.updateTractors)
//selectedAllTractors
router.get('/selectedAllTractors', ebarnController.selectedAllTractors)
//deleteAll
router.delete('/deleteAllTractors', ebarnController.deleteAllTractors);

module.exports = router;