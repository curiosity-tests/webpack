"use strict";

const { minify_sync } = require("terser");
const SampleEmbeddedMinifyPlugin = require("../../../helpers/SampleEmbeddedMinifyPlugin");

// Terser over every script this document embeds, as `minimizer-webpack-plugin`
// wires it up. Synchronous because the sample plugin prints synchronously.
/** @type {import("../../../../lib/html/syntax").EmbeddedSourceRenderer} */
const renderEmbeddedSource = (source, { type }) =>
	type === "javascript"
		? /** @type {string} */ (minify_sync(source).code)
		: undefined;

/** @type {import("../../../../").Configuration} */
module.exports = {
	target: "web",
	experiments: { html: true },
	plugins: [new SampleEmbeddedMinifyPlugin({ renderEmbeddedSource })]
};
