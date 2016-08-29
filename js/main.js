$(function() {
    // finally, initialize photobox on all retrieved images
    $('#gallery').photobox('a', {
        thumbs: false,
        captionTmpl: '',
        autoplay: true
    }, callback);

    // finally, initialize photobox on all retrieved images
    $('#gallery2').photobox('a', {
        thumbs: false,
        captionTmpl: '',
        autoplay: true
    }, callback);
    // using setTimeout to make sure all images were in the DOM, before the history.load() function is looking them up to match the url hash
    setTimeout(window._photobox.history.load, 2000);

    function callback() {

    };

    // external js: masonry.pkgd.js, imagesloaded.pkgd.js
    // init Masonry
    var $grid = $('.grid').masonry({
        itemSelector: '.grid-item',
        percentPosition: true,
        columnWidth: '.grid-sizer'
    });
    // layout Isotope after each image loads
    $grid.imagesLoaded().progress(function() {
        $grid.masonry();
    });

    // init controllers
    // Single Controller
    var controller = new ScrollMagic.Controller();

    // Parallax controller
    var parallaxController = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: "onEnter",
            duration: "200%"
        }
    });

    // build scene for title
    new ScrollMagic.Scene({triggerElement: "#triggerTittle"})
        .setTween(".titleContainer", 1, {scale: 0.5,autoAlpha: 0}) // trigger a TweenMax.to tween
        .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
        .addTo(controller);

    // build scene for footer
    new ScrollMagic.Scene({triggerElement: "#triggerFooter", duration: 100})
        .setTween(TweenMax.staggerFromTo(".icon-ref", 2, {left: 1000}, {left: 0,ease: Back.easeOut}, 0.15))
        .addIndicators({name: "staggering"})
        .addTo(controller);

    // build scenes for parallax
    new ScrollMagic.Scene({triggerElement: "#parallax1"})
        .setTween("#parallax1 > div", {y: "80%",ease: Linear.easeNone})
        .addIndicators()
        .addTo(parallaxController);

    // build scenes for parallax
    new ScrollMagic.Scene({triggerElement: "#parallax2"})
        .setTween("#parallax2 > div", {y: "80%",ease: Linear.easeNone})
        .addIndicators()
        .addTo(parallaxController);

      // build scenes for parallax
      new ScrollMagic.Scene({triggerElement: "#parallax3"})
          .setTween("#parallax3 > div", {y: "80%",ease: Linear.easeNone})
          .addIndicators()
          .addTo(parallaxController);
});
