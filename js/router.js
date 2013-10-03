define(['path', 'home/home'], function(Path, Home) {

	Path.map("#!/home").to(function() {
		new Home().render();
	});
	
	Path.map("#!/search").to(function() {

		require(['product_listing/product_listing'], function(ProductListing) {
			new ProductListing().render();
    });

	});

	Path.root("#!/home");

	return {
		listen: Path.listen
	};

});