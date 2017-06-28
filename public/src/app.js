var app = angular.module('app', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'public/views/home.html',
        })
        .state('contact', {
            url: '/contact',
            templateUrl: 'public/views/contactus.html',
            controller: 'ContactController',
        })
        .state('testimonials', {
            url: '/testimonials',
            templateUrl: 'public/views/testimonials.html',
            controller: 'TestimonialsController'
        })
        .state('gallery', {
            url: '/gallery',
            templateUrl: 'public/views/gallery.html',
            controller: 'GalleryController'
        })
});
