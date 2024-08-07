const express = require('express');
const { getAllPolls, postPolls } = require('../controllers/pollController');

const router = express.Router();

router.get('/', getAllPolls);
router.post('/', postPolls);

module.exports = router;
