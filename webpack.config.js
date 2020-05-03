const path = require('path'); //must import path from node modules to specify absolute path

const postCSSPlugins = [
	require('postcss-import'),
	require('postcss-mixins'),
	require('postcss-simple-vars'),
	require('postcss-nested'),
	require('autoprefixer')
]

module.exports = { //exports the following file to use in webpack
	entry: './app/assets/scripts/App.js', //which file to export and where
	output: {
		filename: 'bundled.js', //name of the bundled file
		path: path.resolve(__dirname, 'app') //where the file will be located, absolute path needed
	},
	devServer: {
		before: function(app, server) {
			server._watch('./app/**/*.html') //check for any changes happening to a html file * means anything
		},
		contentBase: path.join(__dirname, 'app'),//point towards folder or directory that we want webpack to serve up
		hot: true, //allows webpack to inject new css and javascript into the browser's memory on the fly without reload
		port: 3000, //8080 by default but 3000 is easier to remember
		host: '0.0.0.0' //devices on the same network will be allowed to access webpack dev server
	},
	mode: 'development', //mode option to development or production behaviour
	//watch: true, //watches webpage to check for any changes devServer is watching for changes so we dont need this
	module: { //we can tell webpack what to do when it runs into certain files
		rules: [
			{
				test: /\.css$/i, //only interested in files that pass the following test which is file names has .css
				use: ['style-loader', 'css-loader?url=false', {loader: 'postcss-loader', options: {plugins: postCSSPlugins}}] // css loader lets weback understand or bundle and style loader actually applies and uses it in the browser, postcss-loader needs a few options or plugins
				
			}]
	}
}