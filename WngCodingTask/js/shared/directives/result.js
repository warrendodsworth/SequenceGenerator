﻿/*
 * Vaidation Summary
 */

( function () {
    'use strict';

    angular.module( 'WngCodingTask' )
           .directive( 'result', function () {
               return {
                   restrict: 'E',
                   replace: true,
                   templateUrl: '/js/shared/directives/result.html',
                   scope: {
                       message: '='
                   }
               };
           } )

} )();
