const express = require('express');
const router = express.Router();
const usersController = require('../../controllers/api/users');

router.post('/', usersController.create);

router.post('/login', usersController.login);

router.put(':id/settings/updateName', usersController.updateName);

module.exports = router;