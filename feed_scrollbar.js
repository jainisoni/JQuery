var Mobilewidth = 500;
var feedBlockLength = 4;
var scrollFeed = {

    'scrollLeft': function() {
        $('#scrollleft').on('click', function() {
            $('.scroll-feed-outer').animate({
                scrollLeft: '+=' + $('.scroll-feed-outer .owl-item').width()
            }, 800);
            return false;

        });
    },
    'scrollRight': function() {
        $('#scrollright').on('click', function() {
            $('.scroll-feed-outer').animate({
                scrollLeft: '-=' + $('.scroll-feed-outer .owl-item').width()
            }, 800);
            return false;

        });
    },
    'resize': function() {

        $(window).resize(function() {
            scrollFeed.resizeCallback(function() {
                scrollFeed.functions.resize();
            }, 200);
        });
        $(window).trigger('resize');

    },
    'resizeCallback': function() {
        var timer = 0;
        return function(callback, ms) {
            clearTimeout(timer);
            timer = setTimeout(callback, ms);
        };
    }(),
    'readMoreVidio': function() {
        $('.readmorevidio a').on('click', function() {
            var vidioID = $(this).data('youtube-videoid');
            var displayvidio = vidioID;
            $('#feedModalLong1 .modal-dialog .modal-content .modal-body iframe').attr('src', displayvidio)

        });
    },
    'scrollFeed': function() {
        if ($('.scroll-feed-outer .owl-item').length >= feedBlockLength) {
            console.log(" In side condition");
            $('.owl-outer').css({
                'overflow-x': 'scroll',
                'overflow-y': 'hidden'
            });
            $('.setdirection').css({
                'display': 'block'
            });
        } else {
            $('.setdirection').css({
                'display': 'none'
            });

        }
    },
    'scrollFeedMobile': function() {
        var windowWidth = $(window).width();

        if (windowWidth < Mobilewidth) {
            $('.scroll-feed-outer').css({
                'overflow-x': 'scroll',
                'overflow-y': 'hidden'
            });
            $('.scroll-feed-outer .owl-item').css({
                'width': windowWidth
            });
            $('.setdirection').css({
                'display': 'block'
            });
        }
    },
    'functions': {
        'doReady': function() {
            scrollFeed.scrollLeft();
            scrollFeed.scrollRight();
            scrollFeed.readMoreVidio();
            scrollFeed.scrollFeed();
            scrollFeed.resize();
            scrollFeed.scrollFeedMobile();
        },
        'resize': function() {
            $('.scroll-feed-outer').css({
                'overflow-x': 'scroll',
                'overflow-y': 'hidden'
            });
            var windowWidth = $(window).width();
            if (windowWidth < Mobilewidth) {
                $('.scroll-feed-outer .owl-item').css({
                    'width': windowWidth
                });
                $('.setdirection').css({
                    'display': 'block'
                });
            } else {
                $('.scroll-feed-outer .owl-item').removeAttr('style');
                scrollFeed.scrollFeed();
            }
        }
    }

}


setTimeout(function() {
    $(function() {
         scrollFeed.functions.doReady();
    });
}, 1000);