const Poll = require('../models/PollModel');

exports.getAllPolls = async (req, res, next) => {
  try {
    const polls = await Poll.find();

    console.log();
    res.status(200).json({ status: 'success', data: { polls } });
  } catch (err) {
    res.status(400).json({ status: 'fail', message: err.message });
  }
};

exports.postPolls = async (req, res, next) => {
  try {
    const newPoll = req.body;
    const poll = await Poll.create(newPoll);
    res.status(201).json({ status: 'success', data: { poll } });
  } catch (err) {
    res.status(400).json({ status: 'fail', message: err.message });
  }
};
