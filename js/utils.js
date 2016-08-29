var color = ""

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    color = getCookie("color");
    if (color == "") {
        if (Math.random() >= 0.5) {
            color = "color";
        } else {
            color = "blackandwhite";
        }
        setCookie("color", color, 30);
    }
}

function goToColorVersion() {
    setCookie("color", "color", 30);
    window.location.href = "gallery.html";
}

function goToBlackAndWhiteVersion() {
    setCookie("color", "blackandwhite", 30);
    window.location.href = "gallery.html";
}

function displayRedirectIcon(elementId) {
    var buffer = '';
    if (color == "color") {
        buffer += '<a href="#" onclick="goToBlackAndWhiteVersion();" class="icon-ref" title="Go to black and white version"><img src="icons/bw.png" class="icon" /></a>';
    } else {
        buffer += '<a href="#" onclick="goToColorVersion();" class="icon-ref" title="Go to color version"><img src="icons/color.png" class="icon" /></a>';
    }
    $(elementId).html(buffer);
}

function populateGallery(elementId, start, end) {
    $(function() {
        var buffer = '<div class="grid-sizer"></div>';
        for (var j = start; j <= end; j++) {
            buffer += "<div class='grid-item'><a href='./" + color + "/" + j + ".jpg'><img src='./" + color + "/cmonge_tumbnail_" + j + ".jpg' title=''></a></div>";
        }
        $(elementId).html(buffer);
    });
}

function populateParallax(elementId, colorUrl, bwUrl, quote, author) {
    var url = (color == 'color') ? colorUrl : bwUrl;
    var buffer = '<div style="background-image: url(' + url + ');">';

    if (quote) {
        buffer += '<p class="quote2">' + quote + '</p>';
        if (author) {
            buffer += '<p class="quote2">' + author + '</p>';
        }
    }

    buffer += "</div>";
    $(elementId).html(buffer);
}

function init() {
    displayRedirectIcon("#siteVersion");
    populateGallery("#gallery", 1, 18);
    populateGallery("#gallery2", 19, 36);
    populateParallax("#parallax1", './color/12.jpg', './blackandwhite/24.jpg');
    populateParallax("#parallax2", './color/28.jpg', './blackandwhite/15.jpg', 'Photography is a love affair with life.', 'Burk Uzzle');
    populateParallax("#parallax3", './color/20.jpg', './blackandwhite/26.jpg', 'About me', 'Software developer since ancient times, a believer in the philosophy of teamwork through open to ideas and creative work. Proud father of twins, amateur photographer, music lover and Legos... Yup, I still play with Legos.');
}
