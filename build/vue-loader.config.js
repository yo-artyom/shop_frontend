module.exports = {
  preserveWhitespace: false,
	loaders: {
		'scss': 'vue-style-loader!css-loader!sass-loader',
		'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
	},
  postcss: [
    require('autoprefixer')({
      browsers: ['last 3 versions']
    })
  ]
}
