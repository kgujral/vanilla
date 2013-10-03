define(['text!./product_listing.tmpl.dust', 'myClass'], function(template, My) {

  var ProductListing = My.Class({

		STATIC: {
      TEMPLATE_NAME: 'productListing',
      $el: document.getElementById('content')
    },

    constructor: function() {
      var productListingTmpl = dust.compile(template, ProductListing.TEMPLATE_NAME);
      dust.loadSource(productListingTmpl);
    },

  	render: function() {
      dust.render(ProductListing.TEMPLATE_NAME, {}, function(err, res) {
        ProductListing.$el.innerHTML = res;
      });
  	}
  
  });
	
  return ProductListing;

});