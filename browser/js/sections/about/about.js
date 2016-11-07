app.directive('aboutSection', function() {
    return {
        restrict: 'E',
        templateUrl: 'js/sections/about/about.html',
        link: (scope, elem, attr) => {
            // $(".testimonials-carousel, .mockup-carousel").owlCarousel({
            //     singleItem: true,
            //     navigation: true,
            //     pagination: true,
            //     autoHeight: true,
            //     navigationText: [
            //         "<i class='fa fa-angle-left'></i>",
            //         "<i class='fa fa-angle-right'></i>"
            //     ],
            //     transitionStyle: "backSlide"
            // });


            $(".testimonials-carousel").owlCarousel({
                items: 1,
                navigation: true,
                pagination: false,
                navigationText: [
                    "<i class='fa fa-angle-left'></i>",
                    "<i class='fa fa-angle-right'></i>"
                ],
            });



        }
    }
});