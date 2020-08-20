module.exports = {
	presets: ["@babel/preset-env", "@babel/preset-react"],
	sourceType: "unambiguous",
	plugins: [
		"@babel/plugin-syntax-dynamic-import",
		"@babel/plugin-proposal-optional-chaining",
		[
			"@babel/plugin-proposal-class-properties",
			{
				loose: true
			}
		]
	]
};
