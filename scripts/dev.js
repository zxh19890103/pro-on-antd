const path = require("path")
const webpack = require("webpack")
const webpackDevMidware = require("webpack-dev-middleware")
const webpackHotMidware = require("webpack-hot-middleware")
const express = require("express")
const webpackConfig = require("./webpack.config")

const PORT = 9001

webpackConfig.entry.app.push('./src/__client__.js')
const compiler = webpack(webpackConfig)
const devMiddleware = webpackDevMidware(compiler, {
	// publicPath: webpackConfig.output.publicPath,
	quiet: true
})
const hotMiddleware = webpackHotMidware(compiler, {
	log: () => { }
})
const app = express()

app.use(devMiddleware)
app.use(hotMiddleware)

app.get("/", (req, res) => {
	res.sendFile(path.resolve(webpackConfig.output.path, "./index.html"))
})

devMiddleware.waitUntilValid(() => {
  console.log(`> Listening at http://localhost:${PORT} \n`)
  // reload
  // hotMiddleware.publish({ action: 'reload' })
})

app.listen(PORT, () => {
  console.log('listened')
})
