const Comments = require('../models/CommentsModel');
const Poll = require('../models/PollModel');

exports.postComments = async (req, res) => {
  try {
    const { id } = req.params;
    const { comment } = req.body;

    if (!comment || !id)
      return res
        .status(201)
        .json({ status: 'fail', message: 'Comment and id are required.' });

    const poll = await Poll.findById(id);

    if (!poll) {
      return res.status(404).json({
        status: 'fail',
        message: 'Poll not found.',
      });
    }

    const newComment = await Comments.create({ comment, pollId: id });

    poll.comments.push(newComment._id);
    await poll.save();

    res.status(201).json({ status: 'success', data: { newComment } });
  } catch (err) {
    res.status(500).json({ status: 'fail', message: err.message });
  }
};

exports.getAllComments = async (req, res) => {
  try {
    const { id } = req.params;
    const comments = await Comments.find({ pollId: id });
    res
      .status(200)
      .json({ status: 'success', count: comments.length, data: { comments } });
  } catch (err) {
    res.status(500).json({ status: 'fail', message: err.message });
  }
};
