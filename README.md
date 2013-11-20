#xkcd-substitutions

Substitutions that make reading the news more fun (http://xkcd.com/1288/)

##Usage

Include the following in the `<head>` of your document:

```html
<script src="dist/xkcd.substitutions.min.js"></script>
```

OR if you are using a module loader like [RequireJS](http://requirejs.org), including the following in your main JS file:

```js
require(["substitutions"], function (Substitutions) {
	
});
```

To initialize the plugin, call:

```js
Substitutions.init();
```

##Customization

This plugin is only meant to reflect the phrases included in the [xkcd comic](http://xkcd.com/1288/). If you want to add more, add them directly to the `Substitutions.vars.phrases` array:

```js
Substitutions.vars.phrases.push({
	search: "foo",
	replace: "bar"
});
```

##Extension

A Chrome extension implementation of the plugin is also included. To package on your own, follow the instructions [here](http://developer.chrome.com/extensions/packaging.html).