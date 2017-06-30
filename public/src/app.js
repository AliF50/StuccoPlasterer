var app = angular.module('app', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('root', {
            url: '',
            abstract: true,
            views: {
                'header': {
                    templateUrl: 'public/views/nav.html'
                },
                'content': {
                    template: '<div ui-view></div>'
                },
                'footer': {
                    templateUrl: 'public/views/footer.html'
                }
            }
        })
        .state('root.home', {
            url: '/home',
            templateUrl: 'public/views/home.html',
        })
        .state('root.contact', {
            url: '/contact',
            templateUrl: 'public/views/contactus.html',
            controller: 'ContactController',
        })
        .state('root.testimonials', {
            url: '/testimonials',
            templateUrl: 'public/views/testimonials.html',
            controller: 'TestimonialsController'
        })
        .state('root.gallery', {
            url: '/gallery',
            templateUrl: 'public/views/gallery.html',
            controller: 'GalleryController'
        })
});
