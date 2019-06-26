const path = require("path")

module.exports = {
	resolve: (...segments) => {
		return path.resolve(__dirname, ...segments)
	}
}
