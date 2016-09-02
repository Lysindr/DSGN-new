//Google Map


var initMap = function() {

    var map = new google.maps.Map(document.getElementById('map'), {
        disableDefaultUI: true,
        center: {
            lat: 33.768556,
            lng: -118.191619
        },
        styles: [{
            "stylers": [{
                "saturation": -100
            }, {
                "gamma": 0.8
            }, {
                "lightness": 4
            }, {
                "visibility": "on"
            }]
        }, {
            "featureType": "landscape.natural",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#5dff00"
            }, {
                "gamma": 4.97
            }, {
                "lightness": -5
            }, {
                "saturation": 100
            }]
        }],
        zoom: 12
    });



    var marker = new google.maps.Marker({
        position: {
            lat: 33.768556,
            lng: -118.191619
        },
        map: map,
        title: 'Наш маркер: Большой театр',
        icon: 'images/g-marker.png'
    });

    // Создаем наполнение для информационного окна
    var contentString = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeading" class="firstHeading">DSGN</h1>' +
        '<div id="bodyContent">' +
        '<p>90802 California</p>' +
        '<p>Long beach</p>' +
        '<p>PO Box 68789</p>' +
        '<p>300 East Ocean </p>' +
        '<p>Boulevard</p>' +
        '<p>+64 9 345 6758</p>' +
        '<p>nfo@dsgn-studio.com</p>' +
        '</div>' +
        '</div>';

    // Создаем информационное окно
    var infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 350
    });

    // Создаем прослушивание, по клику на маркер - открыть инфо-окно infowindow
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
}

//Load Google map 
$(window).on('load', function() {
    initMap();
})
//Google-Map END


//Menu

$(document).ready(function() {

    var touch = $('#menu-button');
    var menu = $('.navmenu');
    var project_button = $('#project-button');
    var menu_project = $('.project-links');

    $(touch).on('click', function(e) {
        e.preventDefault();
        menu.toggleClass('opened');
    });
    //2
    $(project_button).on('click', function(e) {
        e.preventDefault();
        menu_project.toggleClass('opened');
    });

    $('#menu-button').click(function() {
        $(this).toggleClass('open');
    });

    //2
    $('#project-button').click(function() {
        $(this).toggleClass('open');
    });

    //2
    $(document).click(function(event) {
        if ($(event.target).closest(project_button).get(0) == null) {
            menu_project.removeClass('opened');
            if (project_button.hasClass('open')) {

                project_button.toggleClass('open');
            }
        }
    });

    $(document).click(function(event) {
        if ($(event.target).closest(touch).get(0) == null) {
            menu.removeClass('opened');
            if (touch.hasClass('open')) {

                touch.toggleClass('open');
            }
        }
    });

    //project menu
    // var touch_project = $('#project-button');
    // var menu_project = $('.project-links');

    // $(touch).on('click', function(e) {
    //     e.preventDefault();
    //     menu_project.toggleClass('opened');
    // });

    // $('#project-button').click(function() {
    //     $(this).toggleClass('open');
    // });

    // $(document).click(function(event_project) {
    //     if ($(event_project.target).closest(touch).get(0) == null) {
    //         menu_project.removeClass('opened');
    //         if (touch.hasClass('open')) {

    //             touch.toggleClass('open');
    //         }
    //     }
    // });



    //Magnific PopUp
    $('.popup-with-zoom-anim').magnificPopup({
        type: 'inline',

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: 'auto',

        closeBtnInside: true,
        preloader: false,

        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in'
    });

    $('.popup-with-move-anim').magnificPopup({
        type: 'inline',

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: 'auto',

        closeBtnInside: true,
        preloader: false,

        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-slide-bottom'
    });


    //Slick Slider
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 800,
        fade: true,
        asNavFor: '.slider-nav',
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: true,
                autoplay: true,
                speed: 1000,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
    $('.slider-nav').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: false,
        focusOnSelect: true
    });



    //ReadMore
    // $('.studio-info').readmore({
    // speed: 75,
    // maxHeight: 320,
    // collapsedHeight: 320,
    // startOpen: true,
    // moreLink: '<a href="#">Read more</a>',
    // lessLink: '<a href="#">Close</a>'
    // });


    //Read More 2
    jQuery(".text-review").each(function() {
        var review_full = jQuery(this).html();
        var review = review_full;

        if (review.length > 800) {
            review = review.substring(0, 800);
            jQuery(this).html(review + '<a href="#" class="read_more"> Read More;</a>');
        }
        jQuery(this).append('<div class="full_text" style="display: none;">' + review_full + '</div>');
    });

    //use this for open block with text =>
    // jQuery(".read_more").click(function() {
    //     jQuery(this).parent().html(jQuery(this).parent().find(".full_text").html());
    // });

    //
});