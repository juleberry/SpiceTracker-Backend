const express = require('express');
const router  = express.Router(); 
const spiceController = require('../../controllers/api/spices');

router.get('/', spiceController.getAllSpice);
// upload.none() allows newSpice to read form data
router.post('/', spiceController.newSpice);

router.delete('/', spiceController.deleteAllSpice);

// router.post('/spice/:name', spiceController.newComment);
router.delete('/:id', spiceController.deleteOneSpice);

router.put('/:id/edit', spiceController.editSpice)

router.get('/:id', spiceController.getOneSpice);

module.exports = router;