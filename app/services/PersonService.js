/**
 * Created with JetBrains WebStorm.
 * User: Richard
 * Date: 17/01/14
 * Time: 10:32 AM
 * To change this template use File | Settings | File Templates.
 */
'use strict'

var personServices = angular.module('personServices', ['ngResource']);

personServices.factory('Person', ['$resource',
    function($resource){
        return $resource('persons/:personName.json', {}, {
            query: {method:'GET', params:{personName:'persons'}, isArray:true}
        });
    }]);