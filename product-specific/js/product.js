var title= ['We’re making Rogers.com even better','Nous améliorons le site Rogers.com.'];
// var headerTitle = ['We’re making Rogers.com even better','Nous am&eacute;liorons le site Rogers.com'];
var headerSubTitle = ['We’ll be back soon! We’re making some fixes, which means some pages will be temporarily unavailable. Please check back soon so we can help you out!','Nous améliorons le site Rogers.com. Certaines pages seront temporairement inaccessibles en raison des quelques correctifs que nous apportons au site. Revenez bientôt pour obtenir notre aide!'];
var contactUsTitle = ['Contact Us:','Nous joindre:'];
var call = ['Call Us','Appelez-nous'];
var livechat = ['Live Chat','Clavardage en direct'];
var store = ['Find a Store','Trouver un magasin'];

$(document).ready(function() {
    var i = 0;
    $('.langBtn').bind('click', function () {
        if(i++ % 2 == 0){
            $(this).text('EN');
            $('#title').text(title[1]);
            $('#headerTitle').text(title[1]);
            $('#headerSubtitle').text(headerSubTitle[1]);
            $('#contactUsTitle').text(contactUsTitle[1]);
            $('#call').text(call[1]);
            $('#livechat').text(livechat[1]);
            $('#store').text(store[1]);
        } else{
            $(this).text('FR');
            $('#title').text(title[0]);
            $('#headerTitle').text(title[0]);
            $('#headerSubtitle').text(headerSubTitle[0]);
            $('#contactUsTitle').text(contactUsTitle[0]);
            $('#call').text(call[0]);
            $('#livechat').text(livechat[0]);
            $('#store').text(store[0]);
        }
    });
});