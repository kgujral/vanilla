define(['dust', 'text!./header-tmpl.dust', 'myClass'], function(dust, template, My) {

	var Header = My.Class({

    STATIC: {
      TEMPLATE_NAME: 'headerTmpl',
      $el: document.getElementById('header')
    },

    constructor: function() {
      var headerTmpl = dust.compile(template, Header.TEMPLATE_NAME);
			dust.loadSource(headerTmpl);
    },

    render: function(data) {
  		dust.render(Header.TEMPLATE_NAME, data, function(err, res) {
				Header.$el.innerHTML = res;
			});
  	}

  });

  return Header;

});