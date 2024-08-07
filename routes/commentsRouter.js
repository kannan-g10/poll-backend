const express = require('express');
const {
  postComments,
  getAllComments,
} = require('../controllers/commentsController');

const router = express.Router();

router.post('/:id', postComments);
router.get('/:id', getAllComments);
module.exports = router;
