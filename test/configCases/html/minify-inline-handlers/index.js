import page from "./page.html";

it("should minify the script an event handler attribute holds", () => {
	expect(page).toMatchSnapshot();
});

it("should keep the handlers a minifier cannot be handed", () => {
	// A function body (`return` at its top level) is not a script, and `onunload`
	// is a handler on `<body>` rather than on a `<div>`.
	expect(page).toContain('onsubmit="return  false"');
	expect(page).toContain("not( 'a handler here' )");
});
