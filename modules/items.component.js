(function() {
    'use strict';

    angular.module('MenuApp')
        .component('items', {
            templateUrl: 'modules/htmltemplates/itemslist.component.html',
            bindings: {
                items: '<'
            }
        });
})();
