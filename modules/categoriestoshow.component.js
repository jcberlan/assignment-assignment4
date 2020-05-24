(function() {
    'use strict';

    angular.module('MenuApp')
        .component('categories', {
           templateUrl: 'modules/htmltemplates/categoriestoshow.component.html',
            bindings: {
                categories: '<'
            }
        });
})();
