var config = require('../config/config.json');
var googleTranslate = require('google-translate')(config.apiKey);
var languages = require('../models/languages.json');


var indexController = {
	index: function(req, res) {
		// console.log(languages)
		res.render('index', {languages: languages});
	},

	translate: function(req, res){
		// console.log(req.query);
		googleTranslate.translate(req.query.textToTranslate, req.query.fromLanguage, req.query.toLanguage, function(err, translation) {
  			// console.log(translation)
  			res.send(translation);
		})
	}
};


module.exports = indexController;