var mongoose = require('mongoose');

var SampleSchema = new mongoose.Schema({
  album: String,
  year: Number,
  US_peak_chart_post: Number
},
{
    collection: 'white_stripes_collection'
});
mongoose.model('Sample', SampleSchema);

/*
    "album": "White Blood Cells",
    "year": 2001,
    "US_peak_chart_post": 61
*/