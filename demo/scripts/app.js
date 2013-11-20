/*globals document, require, requirejs, window*/

(function (document, window, undefined) {
	"use strict";

	requirejs.config({
		"baseUrl": ".",
		"paths": {
			"substitutions": "../src/xkcd.substitutions"
		}
	});

	require(["substitutions"], function (Substitutions) {
		Substitutions.init();
	});
}(document, window));