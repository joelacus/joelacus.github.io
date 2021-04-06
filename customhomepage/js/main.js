//Main JS


	// Save function
	function funcSave(){
      	var s = gridster.serialize();
        var saveLayout = JSON.stringify(s)
        $.localStorage.setItem('saveLayout', saveLayout);
        $.localStorage.setItem('saveRadius', widget_radius);
        $.localStorage.setItem('saveIs3D', styleIs3D);
        $.localStorage.setItem('saveHasGradient', styleHasGradient);
        $.localStorage.setItem('saveEditJiggle', styleEditJiggle);
        //console.log(backgroundColour)
        if (isPhotoBackground === true){
        	$.localStorage.setItem('savePhotoBackground', photoBackground);
        	$.localStorage.removeItem('saveBackground');
        } else {
        	$.localStorage.removeItem('savePhotoBackground');
        	$.localStorage.setItem('saveBackground', backgroundColour);
        }
    }



    // Save Notes
        function funcSaveNotes(){
        	var s = gridster.serialize();
            var saveLayout = JSON.stringify(s)
            $.localStorage.setItem('saveLayout', saveLayout);
        }



    // Set widget photo
	$(document).on( "click", ".btn-edit-photo-submit", function(e) {
		get_photo_url = $("#edit-photo-url").val();
		//console.log(get_photo_url);
        $(get_edit_photo).parent().parent().css("background", "url('"+get_photo_url+"')");
        $(get_edit_photo).parent().parent().css("background-size", "cover");
        $(get_edit_photo).parent().parent().css("background-repeat", "no-repeat");
        $(".edit-photo-dialogue").toggle();
    });



    // Set new notes with a unique id
		$(document).on("click", ":focus", function() {
		    if ($(this).attr("id") == "#noteNew") {
		    	var newID = $.now();
		    	$(this).attr('id', "note-"+newID);
		    	funcSaveNotes();
		    }
		    // Save notes content
		    $(this).keyup(function(){
				var note = $.trim($(this).val());
				$.localStorage.setItem(this.id, note);
				if (!$(this).val()){
			    	$.localStorage.removeItem(this.id);
			    }
			});
		})



	// Generate lighter and darker values of background colour for neumorphic effect
	    window.lightenDarkenColour = function(col, amt) {  
		    var usePound = false;			  
		    if (col[0] == "#") {
		        col = col.slice(1);
		        usePound = true;
		    }			 
		    var num = parseInt(col,16);			 
		    var r = (num >> 16) + amt;			 
		    if (r > 255) r = 255;
		    else if  (r < 0) r = 0;			 
		    var b = ((num >> 8) & 0x00FF) + amt;			 
		    if (b > 255) b = 255;
		    else if  (b < 0) b = 0;			 
		    var g = (num & 0x0000FF) + amt;			 
		    if (g > 255) g = 255;
		    else if (g < 0) g = 0;			 
		    return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
		}
		window.lightenDarken = function(col) {
			var lighten = lightenDarkenColour(col,40)
			var darken = lightenDarkenColour(col,-50)
    		$('.gs-w').attr('style', 'box-shadow: 5px 5px 13px ' +darken+', -5px -5px 13px ' +lighten+';');
    		$('.btn-edit-save').attr('style', 'box-shadow: 5px 5px 13px ' +darken+', -5px -5px 13px ' +lighten+';');
    		$('.btn-add-new-widget').attr('style', 'box-shadow: 5px 5px 13px ' +darken+', -5px -5px 13px ' +lighten+';');
    		$('.btn-background-dialogue').attr('style', 'box-shadow: 5px 5px 13px ' +darken+', -5px -5px 13px ' +lighten+';');
    		$('.btn-default-layout').attr('style', 'box-shadow: 5px 5px 13px ' +darken+', -5px -5px 13px ' +lighten+';');
    		$('.btn-export-save').attr('style', 'box-shadow: 5px 5px 13px ' +darken+', -5px -5px 13px ' +lighten+';');
    		$('.btn-import-save').attr('style', 'box-shadow: 5px 5px 13px ' +darken+', -5px -5px 13px ' +lighten+';');
		}
		window.lightenDarkenOnLoad = function(col) {
			var restoreIs3D = JSON.parse(localStorage.getItem('saveIs3D'));
			if (restoreIs3D === false){
	        	$('#checkbox-shadow').prop('checked', false);
	        	$('.gs-w').attr('style', 'box-shadow: none;');
                $('.btn-edit-save').attr('style', 'box-shadow: none;');
	    		$('.btn-add-new-widget').attr('style', 'box-shadow: none;');
	    		$('.btn-background-dialogue').attr('style', 'box-shadow: none;');
	    		$('.btn-default-layout').attr('style', 'box-shadow: none;');
	    		$('.btn-export-save').attr('style', 'box-shadow: none;');
	    		$('.btn-import-save').attr('style', 'box-shadow: none;');
	        } else if (restoreIs3D === true){
	        	$('#checkbox-shadow').prop('checked', true);
	        	var lighten = lightenDarkenColour(col,40)
	    		var darken = lightenDarkenColour(col,-50)
	    		$('.gs-w').attr('style', 'box-shadow: 5px 5px 13px ' +darken+', -5px -5px 13px ' +lighten+';');
	    		$('.btn-edit-save').attr('style', 'box-shadow: 5px 5px 13px ' +darken+', -5px -5px 13px ' +lighten+';');
	    		$('.btn-add-new-widget').attr('style', 'box-shadow: 5px 5px 13px ' +darken+', -5px -5px 13px ' +lighten+';');
	    		$('.btn-background-dialogue').attr('style', 'box-shadow: 5px 5px 13px ' +darken+', -5px -5px 13px ' +lighten+';');
	    		$('.btn-default-layout').attr('style', 'box-shadow: 5px 5px 13px ' +darken+', -5px -5px 13px ' +lighten+';');
	    		$('.btn-export-save').attr('style', 'box-shadow: 5px 5px 13px ' +darken+', -5px -5px 13px ' +lighten+';');
	    		$('.btn-import-save').attr('style', 'box-shadow: 5px 5px 13px ' +darken+', -5px -5px 13px ' +lighten+';');
	        }
		}



	// Custom colour preview
		$(document).ready(function() {
	        $('#colour-input-box').val('');
		    $('#colour-input-box').on('keyup change', function() {
		        $('.colour-preview').attr('style', 'background: '+$(this).val());
		    });
		});
		$('#colour-input-box:text').focus(
		    function(){
			$('#colour-input-box').attr('placeholder', 'HEX '+colourPreview);
		});



	// Set custom background colour
    	$(document).on( "click", ".set-bg-colour", function(e) {
			if ($("#colour-input-box").val().length === 0){
				var colour = colourPreview;
				$('body').attr('style', 'background: '+colour);
				$('html').css('background', colour);
				window.backgroundColour = colourPreview
				is3DColour();
				window.isPhotoBackground = false
			} else {
				var colour = $("#colour-input-box").val();
				$('body').attr('style', 'background: '+colour);
				$('html').css('background', colour);
				window.backgroundColour = colour
				is3DColour();
				window.isPhotoBackground = false
			}									
		});



	// Set custom background photo
		var count = 0;
    	$(document).on( "click", ".set-bg-photo", function(e) {
    		varphoto = $("#photo-input-box").val();
    		if (varphoto === ''){    			
    			if (count === 0) {
		            $("#photo-input-box").attr("placeholder", "I need the link first :/");
		        } else if (count === 1) {
		            $("#photo-input-box").attr("placeholder", "Please can I have the link?");
		        } else if (count === 2) {
		            $("#photo-input-box").attr("placeholder", "Paste it here, in this box");
		        } else if (count === 3) {
		            $("#photo-input-box").attr("placeholder", "Why aren't you giving it?");
		        } else if (count === 4) {
		            $("#photo-input-box").attr("placeholder", "I have one job. Please :(");
		        } else if (count === 5) {
		            $("#photo-input-box").attr("placeholder", "Let me fulfill my purpose");
		        } else if (count === 6) {
		            $("#photo-input-box").attr("placeholder", "Stop it, if I can't help...");
		        } else if (count === 7) {
		            $("#photo-input-box").attr("placeholder", "I'm sad now :'(");
		        } else if (count === 8) {
		            $("#photo-input-box").attr("placeholder", "Please...");
		        } 
		        count += 1;
    		} else {    			
				if (count >= 1){
					$(".custom-photo-happy").css("display", "block");
					count = 0;
					$("#photo-input-box").attr("placeholder", "IMAGE LINK");
					setTimeout(function () {      
				        $(".custom-photo-happy").css("display", "none");
					}, 5000);						
				}    			
				window.photoBackground = varphoto
				window.isPhotoBackground = true
				$('html').attr('style', 'background: none;');
				$('body').css("background", "url("+photoBackground+") top center no-repeat");
				$('body').css("background-size", "cover");
				var restoreIs3D = JSON.parse(localStorage.getItem('saveIs3D'));
				if (restoreIs3D === true){
					lightenDarken("#1c1c1c");
					backgroundColour = "1c1c1c"
				}				
			}
		});



	// Set widget colour to background colour
	$(document).on( "click", ".btn-colour-bg", function(e) {
		var widgetBackgroundColour = backgroundColour
		$(this).parent().parent().parent().parent().parent().css("background-color", widgetBackgroundColour).css("border", "solid 1px "+widgetBackgroundColour);
	});



	// Set widget radius
	$(document).on( "click", "#btn-set-radius-2", function(e) {
		$('[id^=btn-set-radius-]').removeClass("btn-neumorphic-pressed");
		$(this).addClass("btn-neumorphic-pressed");
		window.widget_radius = "2px"
		document.documentElement.style.setProperty('--theme-br', "2px");
	});
	$(document).on( "click", "#btn-set-radius-5", function(e) {
		$('[id^=btn-set-radius-]').removeClass("btn-neumorphic-pressed");
		$(this).addClass("btn-neumorphic-pressed");
		window.widget_radius = "5px"
		document.documentElement.style.setProperty('--theme-br', "5px");
	});
	$(document).on( "click", "#btn-set-radius-10", function(e) {
		$('[id^=btn-set-radius-]').removeClass("btn-neumorphic-pressed");
		$(this).addClass("btn-neumorphic-pressed");
		window.widget_radius = "10px"
		document.documentElement.style.setProperty('--theme-br', "10px");
	});
	$(document).on( "click", "#btn-set-radius-15", function(e) {
		$('[id^=btn-set-radius-]').removeClass("btn-neumorphic-pressed");
		$(this).addClass("btn-neumorphic-pressed");
		window.widget_radius = "15px"
		document.documentElement.style.setProperty('--theme-br', "15px");
	});
	$(document).on( "click", "#btn-set-radius-22", function(e) {
		$('[id^=btn-set-radius-]').removeClass("btn-neumorphic-pressed");
		$(this).addClass("btn-neumorphic-pressed");
		window.widget_radius = "22px"
		document.documentElement.style.setProperty('--theme-br', "22px");
	});



	// Open add-new-widget-dialogue 
		$(document).on( "click", ".btn-add-new-widget", function(e) {
			$(".add-new-widget-dialogue").toggle();
		});



	// Close add-new-widget-dialogue 
		$(document).on( "click", ".btn-add-new-widget-dialogue-close", function(e) {
			$(".btn-add-new-widget").click();
		});



	// Close add-widget-dialogue when clicked outside
	$(document).mouseup(function(e){
	    var container = $(".add-new-widget-dialogue");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	    	if ($(".add-new-widget-dialogue").is(":visible")){
	    		$(".btn-add-new-widget").click();
	    	}
	    }
	});



	// Open add-bookmark-dialogue 
	$(document).on( "click", ".btn-add-bookmark", function(e) {
		$(".btn-add-new-widget").click();
		$('#link-name').val('');
		$('#link-url').val('');
		$(".add-bookmark-dialogue").css("display","block");
		$("#link-name").focus();
	});



	// Close add-bookmark-dialogue 
	$(document).on( "click", ".btn-add-bookmark-close", function(e) {
		$(".add-bookmark-dialogue").toggle();
	});



	// Open edit-bookmark-dialogue 
	$(document).on( "click", ".btn-edit-bookmark", function(e) {
		window.get_edit_bookmark = this
		get_linkname = $(this).prev("a").text();
		get_linkurl = $(this).prev("a").attr("href");
		$('#edit-link-name').val(get_linkname);
		$('#edit-link-url').val(get_linkurl);
		$(".edit-bookmark-dialogue").css("display","block");
		$("#edit-link-name").focus();
	});



	// Close edit-bookmark-dialogue 
	$(document).on( "click", ".btn-edit-bookmark-close", function(e) {
		$(".edit-bookmark-dialogue").toggle();
	});



	// Open edit-photo-dialogue 
	$(document).on( "click", ".btn-edit-photo", function(e) {
		window.get_edit_photo = this
		$('#edit-photo-url').val("");
		$(".edit-photo-dialogue").css("display","block");
		$("#edit-photo-url").focus();
	});



	// Close edit-photo-dialogue 
	$(document).on( "click", ".btn-edit-photo-close", function(e) {
		$(".edit-photo-dialogue").toggle();
	});



	// Escape pressed
	$(document).keyup(function(e) {
	     if (e.key === "Escape") {
			if($('.btn-add-new-widget').is(':visible')) {
					location.reload();
				} else {
					//
				}		
	    }
	});



	// Export Button
	$(document).on( "click", ".btn-export-save", function(e) {
			value = JSON.stringify(localStorage)	 
			var $temp = $("<input>");
			$("body").append($temp);
			$temp.val(value).select();
			document.execCommand("copy");
			$temp.remove();
    });



	// Open export-save-dialogue 
	$(document).on( "click", ".btn-export-save", function(e) {
		$(".export-save-dialogue").css("display","block");
	});



	// Close export-save-dialogue 
	$(document).on( "click", ".btn-export-save-dialogue-close", function(e) {
		$(".export-save-dialogue").css("display","none");
	});



	// Close export-save-dialogue when clicked outside
	$(document).mouseup(function(e){
	    var container = $(".export-save-dialogue");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	    	if ($(".export-save-dialogue").is(":visible")){
	    		$(".export-save-dialogue").css("display","none");
	    	}
	    }
	});




	// Open import-save-dialogue 
	$(document).on( "click", ".btn-import-save", function(e) {
		$(".import-save-dialogue").css("display","block");
	});



	// Close import-save-dialogue 
	$(document).on( "click", ".btn-import-save-dialogue-close", function(e) {
		$(".btn-import-save").click();
	    $(".import-save-dialogue").css("display","none");
	});



	// Close import-save-dialogue when clicked outside
	$(document).mouseup(function(e){
	    var container = $(".import-save-dialogue");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	    	if ($(".import-save-dialogue").is(":visible")){		    		
	    		$(".btn-import-save").click();
	    		$(".import-save-dialogue").css("display","none");
	    	}
	    }
	});



	// Focus colour input
	$(document).on( "click", "#btn-custom-colour", function(e) {
		$("#colour-input-box").focus();
	});



	// Focus photo input
	$(document).on( "click", "#btn-custom-photo", function(e) {
		$("#photo-input-box").focus();
	});



	// Open restore default layout dialogue
	$(document).on( "click", ".btn-default-layout", function(e) {
		$(".reset-confirm-dialogue").css("display", "block");
	});



    // Close restore default layout dialogue
    $(document).on( "click", ".btn-reset-confirm-dialogue-close", function(e) {
		$(".reset-confirm-dialogue").css("display", "none");
	});



    // Close restore default layout dialogue when clicked outside
	$(document).mouseup(function(e){
	    var container = $(".reset-confirm-dialogue");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	    	if ($(".reset-confirm-dialogue").is(":visible")){		    		
	    		$(".reset-confirm-dialogue").css("display", "none");
	    	}
	    }
	});



	// Reset Layout Buttons - Yes, Reset
	$(document).on( "click", ".btn-reset-confirm-yes", function(e) {
		localStorage.clear();
        location.reload();
	});



    // Reset Layout Buttons - No, Go Back
    $(document).on( "click", ".btn-reset-confirm-no", function(e) {
		$(".reset-confirm-dialogue").css("display", "none");
	});



    // Set selected radius btn and root variable
	function restore_radius() {
		var restoreRadius = (localStorage.getItem('saveRadius'));
		if(restoreRadius === '2px') {
				$("#btn-set-radius-2").addClass("btn-neumorphic-pressed");
		} else if(restoreRadius === '5px') {
			$("#btn-set-radius-5").addClass("btn-neumorphic-pressed");
		} else if(restoreRadius === '10px') {
			$("#btn-set-radius-10").addClass("btn-neumorphic-pressed");
		} else if(restoreRadius === '15px') {
			$("#btn-set-radius-15").addClass("btn-neumorphic-pressed");
		} else if(restoreRadius === '22px') {
			$("#btn-set-radius-22").addClass("btn-neumorphic-pressed");
		} else {
			$("#btn-set-radius-22").addClass("btn-neumorphic-pressed");
		}
		document.documentElement.style.setProperty('--theme-br', restoreRadius);
		window.widget_radius = restoreRadius
	};



	// Restore background
	function restore_background() {
		var restoreBackground = (localStorage.getItem('saveBackground'));
		if("savePhotoBackground" in localStorage){  			
			var restorePhotoBackground = (localStorage.getItem('savePhotoBackground'));
			$('body').css("background", "url("+restorePhotoBackground+") top center no-repeat");
			$('body').css("background-size", "cover");
			lightenDarkenOnLoad("#1c1c1c");
			window.photoBackground = restorePhotoBackground
			window.isPhotoBackground = true
		} else {
			$('body').css("background", restoreBackground);
			if (restoreBackground === null) {
				var restoreBackground = "#21242c"
			}
			lightenDarkenOnLoad(restoreBackground);
			window.isPhotoBackground = false
			backgroundColour = restoreBackground
		}
	};



	// Restore widget layout
	function restore_layout() {
		var restoreLayout = JSON.parse(localStorage.getItem('saveLayout'));
    	$.each(restoreLayout, function (index, value) {
			gridster.add_widget('<li ' + 'data-min-sizex="'+value.min_size_x+'"' + 'data-min-sizey="'+value.min_size_y+'"' + 'data-max-sizex="'+value.max_size_x+'"' + 'data-max-sizey="'+value.max_size_y+'"' + 'class="'+value.colour+'"' + '/>' + value.htmlContent, this.size_x, this.size_y, this.col, this.row); 			
    	});
	};



	// Restore Notes
	function restore_notes() {
        for (var key in localStorage){
        	if (key.match("^note-")){
        		var note = (localStorage.getItem(key));
        		$("#"+key).val(note);
        	}			   
		}
	};



	// Restore style gradient
	function restore_gradient() {
		var restoreHasGradient = JSON.parse(localStorage.getItem('saveHasGradient'));
			if (restoreHasGradient === false){
	        	$('#checkbox-gradient').prop('checked', false);
	        	$('.convex').removeClass("convex").addClass("flat");
	        	window.styleHasGradient = false
	        } else if (restoreHasGradient === true){
	        	$('#checkbox-gradient').prop('checked', true);
	        	window.styleHasGradient = true
	        }
	}



	// Restore style is 3d
	function restore_is_3d() {
		var restoreIs3D = JSON.parse(localStorage.getItem('saveIs3D'));
			if (restoreIs3D === false){
	        	$('#checkbox-shadow').prop('checked', false);
	        	window.styleIs3D = false
	        } else if (restoreIs3D === true){
	        	$('#checkbox-shadow').prop('checked', true);
	        	window.styleIs3D = true
	        }
	}



	// Restore edit jiggle
	function restore_edit_jiggle() {
		var restoreEditJiggle = JSON.parse(localStorage.getItem('saveEditJiggle'));
			if (restoreEditJiggle === false){
	        	$('#checkbox-jiggle').prop('checked', false);
	        	window.styleEditJiggle = false
	        } else if (restoreEditJiggle === true){
	        	$('#checkbox-jiggle').prop('checked', true);
	        	window.styleEditJiggle = true
	        }
	}



	// Photo Position
	$(document).on('input', '.slider-photo-pos-y', function() {
		var slider = this
		slider.oninput = function() {
		  	//var y = $(this).parent().parent().parent().css('background-position-y', slider.value+'%');
		  	$(this).parent().parent().parent().css('background-position-y', slider.value+'%');
		}
	});
	$(document).on('input', '.slider-photo-pos-x', function() {
		var slider = this
		slider.oninput = function() {
		  	//var x = $(this).parent().parent().parent().css('background-position-x', slider.value+'%');
		  	$(this).parent().parent().parent().css('background-position-x', slider.value+'%');
		}
	});



	// Edit bookmark widget
	$(document).on( "click", ".btn-edit-bookmark-submit", function(e) {
		var linkname = $("#edit-link-name").val();
		var linkurl = $("#edit-link-url").val();
		$(get_edit_bookmark).prev("a").text(linkname);
		$(get_edit_bookmark).prev("a").attr("href", linkurl);
		$(".edit-bookmark-dialogue").toggle();
	});



	// DuckDuckGo search
		$(document).on( "click", ".btn-search-d", function(e) {
			var search = $(this).siblings(".search-input")[0].value;
			var search2 = search.replace(/ /g, "+");
			var base = "https://duckduckgo.com/?q="
			if (search.length > 0){
				window.location.href = base+search;
			}
		});



	// Google search
	$(document).on( "click", ".btn-search-g", function(e) {
		var search = $(this).siblings(".search-input")[0].value;
		var search2 = search.replace(/ /g, "+");
		var base = "http://www.google.com/search?q="
		if (search.length > 0){
			window.location.href = base+search;
		}
	});



	// Search on entre
	$(document).on("keypress", "input", function(e){
        if(e.which == 13){
        	if ($(this).hasClass("duckduckgo")){
        		var search = $(this).val();
				var search2 = search.replace(/ /g, "+");
				var base = "https://duckduckgo.com/?q="
				if (search.length > 0){
					window.location.href = base+search;
				}
        	} else if ($(this).hasClass("google")){
	            var search = $(this).val();
				var search2 = search.replace(/ /g, "+");
				var base = "http://www.google.com/search?q="
				if (search.length > 0){
					window.location.href = base+search;
				}			        
        	}
            
        }
    });