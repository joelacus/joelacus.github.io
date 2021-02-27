// Colours
var grey3 = "#1c1c1c"
var red = "#F94144"
var grey2 = "#333333"
var green = "#83E377"
var blue = "#79beff"
var blue2 = "#577590"
var white2 = "#d5deef"
var yellow = "#F9C74F"
var purple = "#54478C"
var teal = "#0DB39E"
var orange = "#F29E4C"
var pink = "#ff92c2"
var green2 = "#6ae1b7"
var green3 = "#c3dac3"
var purple2 = "#ac92a6"
var white = "#e8eef2"
var grey = "#7f7979"
var cyan = "#4adee8"
var grey4 = "#21242c"

// Change background colour button
$(document).on( "click", ".btn-bg-colour-grey3", function(e) {
	$('body').attr('style', 'background: '+grey3);
	lightenDarken(grey3);funcBgSaveTemp(grey3);
});
$(document).on( "click", ".btn-bg-colour-grey2", function(e) {
	$('body').attr('style', 'background: '+grey2);
	lightenDarken(grey2);funcBgSaveTemp(grey2);
});        	
$(document).on( "click", ".btn-bg-colour-red", function(e) {
	$('body').attr('style', 'background: '+red);       		
	lightenDarken(red);funcBgSaveTemp(red);
});
$(document).on( "click", ".btn-bg-colour-green", function(e) {
	$('body').attr('style', 'background: '+green); 
	lightenDarken(green);funcBgSaveTemp(green);
});
$(document).on( "click", ".btn-bg-colour-blue", function(e) {
	$('body').attr('style', 'background: '+blue); 
	lightenDarken(blue);funcBgSaveTemp(blue);
});
$(document).on( "click", ".btn-bg-colour-blue2", function(e) {
	$('body').attr('style', 'background: '+blue2); 
	lightenDarken(blue2);funcBgSaveTemp(blue2);
});
$(document).on( "click", ".btn-bg-colour-white2", function(e) {
	$('body').attr('style', 'background: '+white2); 
	lightenDarken(white2);funcBgSaveTemp(white2);
});
$(document).on( "click", ".btn-bg-colour-yellow", function(e) {
	$('body').attr('style', 'background: '+yellow); 
	lightenDarken(yellow);funcBgSaveTemp(yellow);
});
$(document).on( "click", ".btn-bg-colour-purple", function(e) {
	$('body').attr('style', 'background: '+purple);
	lightenDarken(purple);funcBgSaveTemp(purple);
});
$(document).on( "click", ".btn-bg-colour-teal", function(e) {
	$('body').attr('style', 'background: '+teal); 
	lightenDarken(teal);funcBgSaveTemp(teal);
});
$(document).on( "click", ".btn-bg-colour-orange", function(e) {
	$('body').attr('style', 'background: '+orange); 
	lightenDarken(orange);funcBgSaveTemp(orange);
});
$(document).on( "click", ".btn-bg-colour-pink", function(e) {
	$('body').attr('style', 'background: '+pink); 
	lightenDarken(pink);funcBgSaveTemp(pink);
});
$(document).on( "click", ".btn-bg-colour-green2", function(e) {
	$('body').attr('style', 'background: '+green2); 
	lightenDarken(green2);funcBgSaveTemp(green2);
});
$(document).on( "click", ".btn-bg-colour-green3", function(e) {
	$('body').attr('style', 'background: '+green3); 
	lightenDarken(green3);funcBgSaveTemp(green3);
});
$(document).on( "click", ".btn-bg-colour-purple2", function(e) {
	$('body').attr('style', 'background: '+purple2); 
	lightenDarken(purple2);funcBgSaveTemp(purple2);
});
$(document).on( "click", ".btn-bg-colour-white", function(e) {
	$('body').attr('style', 'background: '+white); 
	lightenDarken(white);funcBgSaveTemp(white);
});
$(document).on( "click", ".btn-bg-colour-grey", function(e) {
	$('body').attr('style', 'background: '+grey); 
	lightenDarken(grey);funcBgSaveTemp(grey);
});
$(document).on( "click", ".btn-bg-colour-cyan", function(e) {
	$('body').attr('style', 'background: '+cyan); 
	lightenDarken(cyan);funcBgSaveTemp(cyan);
});
$(document).on( "click", ".btn-bg-colour-grey4", function(e) {
	$('body').attr('style', 'background: '+grey4); 
	lightenDarken(grey4);funcBgSaveTemp(grey4);
});

// Change widget colour button
$(document).on( "click", ".btn-colour-grey3", function(e) {
    $(this).parent().parent().parent().parent().parent().css("background-color", grey3);
});
$(document).on( "click", ".btn-colour-grey2", function(e) {
    $(this).parent().parent().parent().parent().parent().css("background-color", grey2);
});         
$(document).on( "click", ".btn-colour-red", function(e) {
    $(this).parent().parent().parent().parent().parent().css("background-color", red);
});
$(document).on( "click", ".btn-colour-green", function(e) {
    $(this).parent().parent().parent().parent().parent().css("background-color", green);
});
$(document).on( "click", ".btn-colour-blue", function(e) {
    $(this).parent().parent().parent().parent().parent().css("background-color", blue);
});
$(document).on( "click", ".btn-colour-blue2", function(e) {
    $(this).parent().parent().parent().parent().parent().css("background-color", blue2);
});
$(document).on( "click", ".btn-colour-white2", function(e) {
    $(this).parent().parent().parent().parent().parent().css("background-color", white2);
});
$(document).on( "click", ".btn-colour-yellow", function(e) {
    $(this).parent().parent().parent().parent().parent().css("background-color", yellow);
});
$(document).on( "click", ".btn-colour-purple", function(e) {
    $(this).parent().parent().parent().parent().parent().css("background-color", purple);
});
$(document).on( "click", ".btn-colour-teal", function(e) {
    $(this).parent().parent().parent().parent().parent().css("background-color", teal);
});
$(document).on( "click", ".btn-colour-orange", function(e) {
    $(this).parent().parent().parent().parent().parent().css("background-color", orange);
});
$(document).on( "click", ".btn-colour-pink", function(e) {
    $(this).parent().parent().parent().parent().parent().css("background-color", pink);
});
$(document).on( "click", ".btn-colour-green2", function(e) {
    $(this).parent().parent().parent().parent().parent().css("background-color", green2);
});
$(document).on( "click", ".btn-colour-green3", function(e) {
    $(this).parent().parent().parent().parent().parent().css("background-color", green3);
});
$(document).on( "click", ".btn-colour-purple2", function(e) {
    $(this).parent().parent().parent().parent().parent().css("background-color", purple2);
});
$(document).on( "click", ".btn-colour-white", function(e) {
    $(this).parent().parent().parent().parent().parent().css("background-color", white);
});
$(document).on( "click", ".btn-colour-grey", function(e) {
    $(this).parent().parent().parent().parent().parent().css("background-color", grey);
});
$(document).on( "click", ".btn-colour-cyan", function(e) {
    $(this).parent().parent().parent().parent().parent().css("background-color", cyan);
});
$(document).on( "click", ".btn-colour-grey4", function(e) {
    $(this).parent().parent().parent().parent().parent().css("background-color", grey4);
});