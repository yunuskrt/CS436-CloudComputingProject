const Comment = require("../Models/commentModel");
const Article = require("../Models/articleModel");

const addComment = async (req, res) => {
  try {
    const { articleId, ...comment } = req.body;
    comment.user = req.user._id;
    const commenttosave = new Comment(comment);
    const savedcomment = await commenttosave.save();
    await Article.findOneAndUpdate(
      { _id: articleId },
      { $push: { comment: savedcomment._id } }
    );
    res.status(200).send({
      status: "success",
      message: "Comment has been created",
    });
  } catch (e) {
    res.status(500).send({
      status: "failure",
      message: e.message,
    });
  }
};
const getbyPostId = async (req, res) => {
  const ArticleId = req.params.ArticleId;
  try {
    const article = await Article.findOne({ _id: ArticleId }).populate(
      "comment"
    );
    const _comment = article.comment;
    let _comments = [];
    for(c of _comment){
      _comments.push(c);
    }
    const censored_comments = await axios.post('https://comment-censorship-y7qorp3gha-uc.a.run.app/CensorComment', {"comments": _comments });
    res.status(200).send({
      status: "success",
      comments: censored_comments,
    });
  } catch (error) {
    res.status(500).send({
      status: "failure",
      message: e.message,
    });
  }
};

module.exports = { addComment, getbyPostId };
