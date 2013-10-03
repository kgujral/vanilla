require.config({
	urlArgs: "ver=" + (new Date()).getTime(),       //just for dev purposes to eliminate caching of files.

	paths: {
		dust: 'vendor/dust-full',
		myClass: 'vendor/my.class.min',
		path: 'vendor/pathjs'
	},
	shim: {
		'dust': {
			exports: 'dust'
		}
	}

});

require(['header/header', 'footer/footer', 'router'], function(Header, Footer, Router) {
	new Header().render();
	new Footer().render();

	Router.listen();

});
