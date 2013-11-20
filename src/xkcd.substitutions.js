/* http://xkcd.com/1288/ */
/*globals define, document, module, window*/

(function (document, window, undefined) {
	"use strict";

	var Substitutions = {
		vars: {
			nodes: [],
			phrases: [
				{
					search: "witnesses",
					replace: "these dudes I know"
				},
				{
					search: "allegedly",
					replace: "kinda probably"
				},
				{
					search: "new study",
					replace: "Tumblr post"
				},
				{
					search: "rebuild",
					replace: "avenge"
				},
				{
					search: "space",
					replace: "spaaace"
				},
				{
					search: "google glass",
					replace: "Virtual Boy"
				},
				{
					search: "smartphone",
					replace: "Pokédex"
				},
				{
					search: "electric",
					replace: "atomic"
				},
				{
					search: "senator",
					replace: "Elf-lord"
				},
				{
					search: "car",
					replace: "cat"
				},
				{
					search: "election",
					replace: "eating contest"
				},
				{
					search: "congressional leaders",
					replace: "river spirits"
				},
				{
					search: "homeland security",
					replace: "Homestar Runner"
				},
				{
					search: "could not be reached for comment",
					replace: "is guilty and everyone knows it"
				}
			]
		},
		setup: function () {
			var all = document.getElementsByTagName("*"),
				children = [],
				nodes = [],
				i = 0,
				j = 0,
				k = 0,
				l = 0;

			for (i = 0, j = all.length; i < j; i += 1) {
				children = (all[i].hasChildNodes) ? all[i].childNodes : [];

				for (k = 0, l = children.length; k < l; k += 1) {
					if (children[k].nodeType === 3) {
						nodes.push(children[k]);
					}
				}
			}

			this.vars.nodes = nodes;

			return this;
		},
		replace: function () {
			var nodes = this.vars.nodes,
				phrases = this.vars.phrases,
				content = "",
				regex = {},
				i = 0,
				j = 0,
				k = 0,
				l = 0;

			for (i = 0, j = nodes.length; i < j; i += 1) {
				for (k = 0, l = phrases.length; k < l; k += 1) {
					content = nodes[i].textContent;
					regex = new RegExp(phrases[k].search, "i");
					if (content) {
						nodes[i].textContent = content.replace(regex, phrases[k].replace);
					}
				}
			}
		},
		init: function () {
			this.setup().replace();

			return true;
		}
	};

	if (typeof module === "object" && module && typeof module.exports === "object") {
		module.exports = Substitutions;
	} else {
		window.Substitutions = Substitutions;
		
		if (typeof define === "function" && define.amd) {
			define("substitutions", [], function () {
				return Substitutions;
			});
		}
	}
}(document, window));