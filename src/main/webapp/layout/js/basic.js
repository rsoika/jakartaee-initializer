// Imixs-Process Manager Core API
// V 1.1

	var imixs = IMIXS.org.imixs.core, 
				imixsXML = IMIXS.org.imixs.xml;
					
	// INIT 
	$(document).ready(function() {	
		
	});
	
	var toggleState = false;
	togglemenu = function() {
		if (!toggleState) {
			$('.nav-sidebar label').hide();
			$('.content').css('margin-left', '60px');
			$('.nav-sidebar').css('width', '60px');
		} else {
			$('.content').css('margin-left', '220px');
			$('.nav-sidebar').css('width', '220px');
			$('.nav-sidebar label').show();
		}
		toggleState = !toggleState;
	};
	
	


	