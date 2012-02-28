(function($){

	console.log($(document).jquery);

	// Declare pluging
	$.fn.tagcloud = function(options){  
 		
 		// Set Default settings
 		var defaults = {
 			fontsize: '10',
 			hiddentext: 'This is a keyword Tag Cloud. Tab though from Relevant to not so relevent.',
 		};
 		
 		// Merge settings and defaults
 		var options = $.extend({},defaults, options);
 		
		// Cache this
		var $this = $(this);
		
		$this.each(function(){
			var ol = $this;
			var olLi = ol.children('li');
			var olLiCount =  olLi.length;

			// Add title text to list parent
			ol.attr({
				title: options.hiddentext
			});

			console.log(olLiCount);
			//Loop over each element in the set and 
	 		//return them to keep the chain alive.
	 		$('li').each(function(index) { 
				
				var $this = $(this);
				var index = index + 1;

				$this.addClass("keyword-tag" + index)
					.children('a').attr({
						title: 	titleAttr,
						rel: 	'tag',
						tabindex: index,
						style: 'font-size:' + index +'rem;' + 'line-height:' + index +'rem;', 
					});
				var titleAttr = $this.text();

			});
			
			// Sort Randomly
			olLi.sort(function(a,b){
				console.log(olLi);
				// Get a random number between 0 and number of items
                 var list = Math.floor(Math.random() * olLiCount);
                 return( list);
			})

			.appendTo(ol);

		});
	};

})(jQuery);