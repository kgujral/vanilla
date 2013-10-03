define(['myClass'], function(My) {

  var Home = My.Class({

		STATIC: {
      $el: document.getElementById('content')
    },

  	render: function() {
  		Home.$el.innerHTML = '<h2>Home</h2>';
  	}
  
  });
	
  return Home;

});