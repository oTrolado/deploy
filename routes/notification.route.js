const express = require('express');
const router = express.Router();
const notification = require('../controllers/notifications.controller');

router.get('/:id', notification.get);
router.put('/', notification.read);
router.delete('/:id', notification.delete);

module.exports = router;