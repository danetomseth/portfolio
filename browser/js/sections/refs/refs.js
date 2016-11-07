app.directive('refsSection', function() {
    return {
        restrict: 'E',
        templateUrl: 'js/sections/refs/refs.html',
        link: (scope, elem, attr) => {
            $(".clients-carousel").owlCarousel({
                items: 3,
                navigation: true,
                pagination: false,
                navigationText: [
                    "<i class='fa fa-angle-left'></i>",
                    "<i class='fa fa-angle-right'></i>"
                ]
            });

        }
    }
});