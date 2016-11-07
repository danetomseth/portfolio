app.directive('clientsSection', function() {
    return {
        restrict: 'E',
        templateUrl: 'js/sections/clients/clients.html',
        link: (scope, elem, attr) => {
            let itemA = {
                photo: '/assets/photos/img-2.jpg',
                title: 'Bees & Beans'
            }

            let itemB = {
                photo: '/assets/photos/img-3.jpg',
                title: 'Pastry'
            }

            let itemC = {
                photo: '/assets/photos/coco-1.jpg',
                title: 'Chocolate'
            }

            scope.items = [itemA, itemB, itemC]


            $(".clients-carousel").owlCarousel({
                items: 3,
                navigation: true,
                pagination: false,
                navigationText: [
                    "<i class='fa fa-angle-left'></i>",
                    "<i class='fa fa-angle-right'></i>"
                ]
            });

            // $(".clients-carousel").owlCarousel({
            //     autoPlay: 3000,
            //     navigation: true,
            //     pagination: false,
            //     goToFirstSpeed: 2000,
            //     singleItem: true,
            //     autoHeight: true,
            //     transitionStyle: "fade",
            //          navigationText: [
            //         "<i class='fa fa-angle-left'></i>",
            //         "<i class='fa fa-angle-right'></i>"
            //     ]
            // });

        }
    }
});