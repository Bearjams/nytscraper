var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({

  title: {
    type: String,
    required: true,
    unique: true
  },
  // link is a required string
  link: {
    type: String,
    required: true
  },
  summary: {
    type: String,
    required: true
  },
  isSaved: {
    type: Boolean,
    default: false
  },
  // This only saves one note's ObjectId, ref refers to the Note model
  notes: [{
    type: Schema.Types.ObjectId,
    ref: "Note"
  }]
});

var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article; //exporting Article