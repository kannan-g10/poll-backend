const { Schema, model } = require('mongoose');

const commentSchema = new Schema(
  {
    comment: {
      type: String,
      required: true,
    },
    pollId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Poll',
    },
  },
  { timestamps: true }
);

const Comments = model('Comments', commentSchema);

module.exports = Comments;
