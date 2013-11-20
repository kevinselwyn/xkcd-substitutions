/*globals module */

module.exports = function (grunt) {
	"use strict";

	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		uglify: {
			options: {
				banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
					'<%= grunt.template.today("yyyy-mm-dd") %>\n' +
					'* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>;' +
					' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n'
			},
			build: {
				files: {
					"dist/xkcd.substitutions.min.js": ["src/xkcd.substitutions.js"]
				}
			}
		},
		copy: {
			build: {
				expand: true,
				cwd: "dist/",
				src: "*.js",
				dest: "extension/js/",
				flatten: true,
				filter: "isFile"
			}
		}
	});

	grunt.registerTask("default", ["uglify", "copy"]);
};