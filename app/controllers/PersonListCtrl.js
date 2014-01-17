/**
 * Created with JetBrains WebStorm.
 * User: Richard
 * Date: 17/01/14
 * Time: 09:26 AM
 * To change this template use File | Settings | File Templates.
 */
'use strict';

personApp.controller('PersonListCtrl',['$scope', 'Person',
    function($scope, Person) {
        $scope.persons = Person.query();
        $scope.orderProp = 'age';
    }
]);