$(function () {
    $(window).resize(function () {
        var parallaxHeight = Math.max($(window).height() * 0.9, 200) | 0;
        $('.parallax-container').height(parallaxHeight);
    }).trigger('resize');

    // finally, initialize photobox on all retrieved images
    $('#gallery').photobox('a', {
        thumbs: false,
        captionTmpl: '',
        autoplay: true
    }, callback);
    // using setTimeout to make sure all images were in the DOM, before the history.load() function is looking them up to match the url hash
    setTimeout(window._photobox.history.load, 2000);

    function callback() {
        console.log('callback for loaded content:', this);
    };

    // external js: masonry.pkgd.js, imagesloaded.pkgd.js
    // init Masonry
    var $grid = $('.grid').masonry({
        itemSelector: '.grid-item',
        percentPosition: true,
        columnWidth: '.grid-sizer'
    });
    // layout Isotope after each image loads
    $grid.imagesLoaded().progress(function () {
        $grid.masonry();
    });
});
