var htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	 entry:{
	 	main:'./src/script/main.js',
	 	a:'./src/script/a.js',
	 	b:'./src/script/b.js',
	 	c:'./src/script/c.js'
	 },
	 output:{
	 	path:__dirname + '/dist',
	 	filename:'js/[name]-[chunkhash].js',
	 	publicPath:'http://cdn.com/'
	 },
	 plugins:[
	 	// new htmlWebpackPlugin({
	 	// 	template:'index.html',
	 	// 	// inject:'head',
	 	// 	inject:false,
	 	// 	// filename:'index-[hash].html',
	 	// 	title:'webpack is good',
	 	// 	minify:{
	 	// 		removeComments:true,
	 	// 		collapseWhitespace:true,
	 	// 	}
	 	// }),
	 	new htmlWebpackPlugin({
	 		template:'index.html',
	 		// inject:'body',
	 		inject:false,
	 		filename:'a.html',
	 		title:'this is a.html',
	 		// chunks:["main","a"],
	 		excludeChunks:["b","c"]
	 	}),
	 	new htmlWebpackPlugin({
	 		template:'index.html',
	 		// inject:"body",
	 		inject:false,
	 		filename:'b.html',
	 		title:'this is b.html',
	 		// chunks:["b"],
	 		excludeChunks:["a","c"]
	 	}),
	 	new htmlWebpackPlugin({
	 		template:'index.html',
	 		// inject:'body',
	 		inject:false,
	 		filename:'c.html',
	 		title:'this is c.html',
	 		// chunks:["c"],
	 		excludeChunks:["b","a"]
	 	})
	 ]
}