app.controller('ContactController', ['$scope', function($scope) {
    $scope.openingHours = [{
        'number': 0,
        'day': 'Sunday',
        'time': 'Closed'
    }, {
        'number': 1,
        'day': 'Monday',
        'time': '9:00-22:00'
    }, {
        'number': 2,
        'day': 'Tuesday',
        'time': '9:00-22:00'
    }, {
        'number': 3,
        'day': 'Wednesday',
        'time': '9:00-22:00'
    }, {
        'number': 4,
        'day': 'Thursday',
        'time': '9:00-22:00'
    }, {
        'number': 5,
        'day': 'Friday',
        'time': '9:00-22:00'
    }, {
        'number': 6,
        'day': 'Saturday',
        'time': '9:00-17:00'
    }];

    $scope.today = new Date().getDay();

    $scope.contact = {
        'address': '123 Anywhere St.',
        'city': 'Ottawa',
        'phone': '613-123-4567',
        'email': 'whatever@email.com'
    }

}]);
