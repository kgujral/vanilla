define(['dust', 'text!./footer-tmpl.dust', 'myClass'], function(dust, template, My) {

	var Footer = My.Class({

    STATIC: {
      TEMPLATE_NAME: 'footerTmpl',
      $el: document.getElementById('footer')
    },

    constructor: function() {
      var footerTmpl = dust.compile(template, Footer.TEMPLATE_NAME);
			dust.loadSource(footerTmpl);
    },

    render: function(element, data) {
  		dust.render(Footer.TEMPLATE_NAME, data, function(err, res) {
				Footer.$el.innerHTML = res;
			});
  	}

  });

  return Footer;

});