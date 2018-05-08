var htmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')

module.exports = {
	 entry:'./src/app.js',
	 output:{
	 	path:__dirname + '/dist',
	 	filename:'js/[name].bundle.js',
	 },
	 module:{
	 	rules:[
		 	{
		 		test:/\.js$/,
		 		loader:'babel-loader',
		 		//‘/src’比'src'快
		 		include:path.resolve(__dirname, "/src"),
		 		exclude:__dirname+'/node_modules',
		 		
		 		// query:{
		 		// 	presets:["latest"]
		 		// }
		 	},{
	        test: /\.css$/,
	        use: ['style-loader',
	             {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        }
                    },
	      		{ loader: 'postcss-loader',
	        	options: {
	        		plugins: (loader) => [
	        			require('autoprefixer')({broswers: ['last 5 versions']})
	          ]}}]
	        },{
	        	test:/\.less$/,
	        	use:[ 'style-loader', 'css-loader','postcss-loader','less-loader' ]
	        },{
	        	test:/\.scss$/,
	        	use:[ 'style-loader', 'css-loader','postcss-loader','sass-loader' ]
	        },{
	        	test:/\.html$/,
	        	loader:'html-loader'
	        },{
	        	test:/\.tpl$/,//可以是tpl也可以是ejs结尾
	        	loader:'ejs-loader'
	        },{
	        	test:/\.(png|jpg|gif|svg)$/,
	        	use: [
		          {
		            loader: 'file-loader',
		            options: {
		            	// limit:10000,
		            	name: 'assets/[name]-[hash:5].[ext]'
		            }  
		          },
		          'image-webpack-loader'
		        ]
      		}
		]
	},
	 plugins:[
	 	new htmlWebpackPlugin({
	 		template:'index.html',
	 		inject:'body',
	 		filename:'index.html',
	 		title:'this is c.html',
	 	})
	 ]
}