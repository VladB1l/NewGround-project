/*jslint browser: true*/
/*global $, window, location */


function handlePageLoaded() {
    'use strict';
    $(window).on("load", function () {
        $('#status').fadeOut();
        $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
        $('body').delay(350).css({
            'overflow': 'visible'
        });
        // setScrollBehavior();
    });
}

function setScrollBehavior() {
    'use strict';
    $("html").niceScroll({
        cursorcolor: "#f74d65",
        scrollspeed: "100",
        cursorborder: "1px solid #f74d65",
        horizrailenabled: "false",
        cursorborderradius: "0px"
    });
}

function handleLinkClick() {
    'use strict';
    $('a[href*="#"]:not([href="#"])').on("click", function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
}


// Used by includes to keep placeholder
function unWrapPlaceholder() {
    'use strict';
    $(window).contents().unwrap();
}

// Closes responsive menu when a scroll trigger link is clicked
$('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
});

function init() {
    'use strict';
    handlePageLoaded();
    handleLinkClick();
}

var pathname = window.location.pathname.split('/');
var filename = pathname[pathname.length - 1];

function ChangeToGer() {
    var foldername = "../views_de/";

    if (filename == "index.html" || filename == "") {
        foldername = '';
        filename = "index.de.html";
    }
    location.href = foldername + filename;
}
function ChangeToEng() {
    var foldername = "../views/";

    if (filename == "index.de.html") {
        foldername = '';
        filename = "index.html";
    }
    location.href = foldername + filename;
}


var CntStorage = parseInt(sessionStorage.getItem("counter"));
if (isNaN(CntStorage)) {
    CntStorage = 0;
    sessionStorage.setItem("counter", CntStorage);
}
sessionStorage.setItem('myLng', window.navigator.language);
var LngStorage = sessionStorage.getItem("myLng");

function LoadPageGer() {
    if (LngStorage != 'de' && CntStorage == 0) {
        ChangeToEng()
    }
    CntStorage = 1;
    sessionStorage.setItem("counter", CntStorage);
}

function LoadPageEng() {
    if (LngStorage == 'de' && CntStorage == 0) {
        ChangeToGer();
    }
    CntStorage = 1;
    sessionStorage.setItem("counter", CntStorage);
}


// let languageFistTwo = language.substr(0,2); // To only keep the first 2 characters.
// let currentLocation = document.getElementsByTagName('html')[0].getAttribute('lang-js')




init();