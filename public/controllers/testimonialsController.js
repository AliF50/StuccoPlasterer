app.controller('TestimonialsController', ['$scope', function($scope) {
    $scope.testimonials = [{
        'testimonial': 'The best! Very professional and a delight to work with!',
        'author': 'Ali'
    }, {
        'testimonial': 'Had the work done in no time!',
        'author': 'Igor'
    }, {
        'testimonial': 'Affordable rates and professional service. Recommended!',
        'author': 'Jungtae'
    }, {
        'testimonial': 'These people simply know what they are doing!',
        'author': 'Mike'
    }, ];
    $scope.message = "hello";
}]);
