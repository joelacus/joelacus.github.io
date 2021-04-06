// Colours
var grey3 = "#1c1c1c"
var red = "#703232"
var grey2 = "#333333"
var green = "#83E377"
var blue = "#79beff"
var blue2 = "#577590"
var white2 = "#d5deef"
var yellow = "#d5bb44"
var purple = "#54478C"
var teal = "#0DB39E"
var orange = "#f29e4c"
var pink = "#ff92c2"
var green2 = "#6ae1b7"
var green3 = "#c3dac3"
var purple2 = "#ac92a6"
var white = "#e8eef2"
var grey = "#7f7979"
var cyan = "#64acb3"
var grey4 = "#21242c"
var purple3 ="#675278"

function is3DColour(){
	if (styleIs3D === true){
		lightenDarken(backgroundColour);
	}
}

// Change background colour button
$(document).on( "click", ".btn-bg-colour-grey3", function(e) {
	$('body').attr('style', 'background: '+grey3);
	window.backgroundColour = grey3
	is3DColour();
	window.isPhotoBackground = false
});
$(document).on( "click", ".btn-bg-colour-grey2", function(e) {
	$('body').attr('style', 'background: '+grey2);
	window.backgroundColour = grey2
	is3DColour();
	window.isPhotoBackground = false
});        	
$(document).on( "click", ".btn-bg-colour-red", function(e) {
	$('body').attr('style', 'background: '+red);       		
	window.backgroundColour = red
	is3DColour();
	window.isPhotoBackground = false
});
$(document).on( "click", ".btn-bg-colour-green", function(e) {
	$('body').attr('style', 'background: '+green); 
	window.backgroundColour = green
	is3DColour();
	window.isPhotoBackground = false
});
$(document).on( "click", ".btn-bg-colour-blue", function(e) {
	$('body').attr('style', 'background: '+blue); 
	window.backgroundColour = blue
	is3DColour();
	window.isPhotoBackground = false
});
$(document).on( "click", ".btn-bg-colour-blue2", function(e) {
	$('body').attr('style', 'background: '+blue2); 
	window.backgroundColour = blue2
	is3DColour();
	window.isPhotoBackground = false
});
$(document).on( "click", ".btn-bg-colour-white2", function(e) {
	$('body').attr('style', 'background: '+white2); 
	window.backgroundColour = white2
	is3DColour();
	window.isPhotoBackground = false
});
$(document).on( "click", ".btn-bg-colour-yellow", function(e) {
	$('body').attr('style', 'background: '+yellow); 
	window.backgroundColour = yellow
	is3DColour();
	window.isPhotoBackground = false
});
$(document).on( "click", ".btn-bg-colour-purple", function(e) {
	$('body').attr('style', 'background: '+purple);
	window.backgroundColour = purple
	is3DColour();
	window.isPhotoBackground = false
});
$(document).on( "click", ".btn-bg-colour-teal", function(e) {
	$('body').attr('style', 'background: '+teal); 
	window.backgroundColour = teal
	is3DColour();
	window.isPhotoBackground = false
});
$(document).on( "click", ".btn-bg-colour-orange", function(e) {
	$('body').attr('style', 'background: '+orange); 
	window.backgroundColour = orange
	is3DColour();
	window.isPhotoBackground = false
});
$(document).on( "click", ".btn-bg-colour-pink", function(e) {
	$('body').attr('style', 'background: '+pink); 
	window.backgroundColour = pink
	is3DColour();
	window.isPhotoBackground = false
});
$(document).on( "click", ".btn-bg-colour-green2", function(e) {
	$('body').attr('style', 'background: '+green2); 
	window.backgroundColour = green2
	is3DColour();
	window.isPhotoBackground = false
});
$(document).on( "click", ".btn-bg-colour-green3", function(e) {
	$('body').attr('style', 'background: '+green3); 
	window.backgroundColour = green3
	is3DColour();
	window.isPhotoBackground = false
});
$(document).on( "click", ".btn-bg-colour-purple2", function(e) {
	$('body').attr('style', 'background: '+purple2); 
	window.backgroundColour = purple2
	is3DColour();
	window.isPhotoBackground = false
});
$(document).on( "click", ".btn-bg-colour-white", function(e) {
	$('body').attr('style', 'background: '+white); 
	window.backgroundColour = white
	is3DColour();
	window.isPhotoBackground = false
});
$(document).on( "click", ".btn-bg-colour-grey", function(e) {
	$('body').attr('style', 'background: '+grey); 
	window.backgroundColour = grey
	is3DColour();
	window.isPhotoBackground = false
});
$(document).on( "click", ".btn-bg-colour-cyan", function(e) {
	$('body').attr('style', 'background: '+cyan); 
	window.backgroundColour = cyan
	is3DColour();
	window.isPhotoBackground = false
});
$(document).on( "click", ".btn-bg-colour-grey4", function(e) {
	$('body').attr('style', 'background: '+grey4); 
	window.backgroundColour = grey4
	is3DColour();
	window.isPhotoBackground = false
});
$(document).on( "click", ".btn-bg-colour-purple3", function(e) {
	$('body').attr('style', 'background: '+purple3); 
	window.backgroundColour = purple3
	is3DColour();
	window.isPhotoBackground = false
});

// Change widget colour button
$(document).on( "click", ".btn-colour-grey3", function(e) {
    $(this).parent().parent().parent().parent().parent().css("background-color", grey3).css("border", "solid 1px "+grey3);
});
$(document).on( "click", ".btn-colour-grey2", function(e) {
    $(this).parent().parent().parent().parent().parent().css("background-color", grey2).css("border", "solid 1px "+grey2);
});         
$(document).on( "click", ".btn-colour-red", function(e) {
    $(this).parent().parent().parent().parent().parent().css("background-color", red).css("border", "solid 1px "+red);
});
$(document).on( "click", ".btn-colour-green", function(e) {
    $(this).parent().parent().parent().parent().parent().css("background-color", green).css("border", "solid 1px "+green);
});
$(document).on( "click", ".btn-colour-blue", function(e) {
    $(this).parent().parent().parent().parent().parent().css("background-color", blue).css("border", "solid 1px "+blue);
});
$(document).on( "click", ".btn-colour-blue2", function(e) {
    $(this).parent().parent().parent().parent().parent().css("background-color", blue2).css("border", "solid 1px "+blue2);
});
$(document).on( "click", ".btn-colour-white2", function(e) {
    $(this).parent().parent().parent().parent().parent().css("background-color", white2).css("border", "solid 1px "+white2);
});
$(document).on( "click", ".btn-colour-yellow", function(e) {
    $(this).parent().parent().parent().parent().parent().css("background-color", yellow).css("border", "solid 1px "+yellow);
});
$(document).on( "click", ".btn-colour-purple", function(e) {
    $(this).parent().parent().parent().parent().parent().css("background-color", purple).css("border", "solid 1px "+purple);
});
$(document).on( "click", ".btn-colour-teal", function(e) {
    $(this).parent().parent().parent().parent().parent().css("background-color", teal).css("border", "solid 1px "+teal);
});
$(document).on( "click", ".btn-colour-orange", function(e) {
    $(this).parent().parent().parent().parent().parent().css("background-color", orange).css("border", "solid 1px "+orange);
});
$(document).on( "click", ".btn-colour-pink", function(e) {
    $(this).parent().parent().parent().parent().parent().css("background-color", pink).css("border", "solid 1px "+pink);
});
$(document).on( "click", ".btn-colour-green2", function(e) {
    $(this).parent().parent().parent().parent().parent().css("background-color", green2).css("border", "solid 1px "+green2);
});
$(document).on( "click", ".btn-colour-green3", function(e) {
    $(this).parent().parent().parent().parent().parent().css("background-color", green3).css("border", "solid 1px "+green3);
});
$(document).on( "click", ".btn-colour-purple2", function(e) {
    $(this).parent().parent().parent().parent().parent().css("background-color", purple2).css("border", "solid 1px "+purple2);
});
$(document).on( "click", ".btn-colour-white", function(e) {
    $(this).parent().parent().parent().parent().parent().css("background-color", white).css("border", "solid 1px "+white);
});
$(document).on( "click", ".btn-colour-grey", function(e) {
    $(this).parent().parent().parent().parent().parent().css("background-color", grey).css("border", "solid 1px "+grey);
});
$(document).on( "click", ".btn-colour-cyan", function(e) {
    $(this).parent().parent().parent().parent().parent().css("background-color", cyan).css("border", "solid 1px "+cyan);
});
$(document).on( "click", ".btn-colour-grey4", function(e) {
    $(this).parent().parent().parent().parent().parent().css("background-color", grey4).css("border", "solid 1px "+grey4);
});
$(document).on( "click", ".btn-colour-purple3", function(e) {
    $(this).parent().parent().parent().parent().parent().css("background-color", purple3).css("border", "solid 1px "+purple3);
});