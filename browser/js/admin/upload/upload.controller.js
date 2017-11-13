app.controller('UploadCtrl', function($scope) {
	var galleryUploader = new qq.FineUploader({
            element: document.getElementById("fine-uploader-gallery"),
            template: 'qq-template-gallery',
            request: {
                endpoint: '/api/photos/upload'
            },
            thumbnails: {
                placeholders: {
                    waitingPath: '/assets/placeholders/waiting-generic.png',
                    notAvailablePath: '/assets/placeholders/not_available-generic.png'
                }
            },
            validation: {
                allowedExtensions: ['jpeg', 'jpg', 'gif', 'png']
            }
        });
});