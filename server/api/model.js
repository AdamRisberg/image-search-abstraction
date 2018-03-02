var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var RecentSearchSchema = new Schema({
  search_term: {
    type: String,
    require: true
  },
  when: {
    type: Date,
    require: true
  }
});

module.exports = mongoose.model("recent_search", RecentSearchSchema);