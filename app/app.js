app = angular.module('landingPageBuilderApp', ['dndLists', 'ui.tinymce']);
app
    .controller('landingPageBuilderMainController', function ($scope, $originObjects) {
        var scope = $scope;
        scope.toolbar = {};
        scope.toolbar.originObjects = $originObjects.getAll();
        scope.dropzones = [
            {
                'name': 'Image only, please',
                instanceObjects: [],
                allowedTypes: ['image']
            },
            {
                'name': 'B',
                instanceObjects: [
                    scope.toolbar.originObjects[0],
                    scope.toolbar.originObjects[1],
                    scope.toolbar.originObjects[2]
                ],
                allowedTypes: $originObjects.getALlObjectTypes()
            }
        ];
        scope.dnd={};
        scope.dnd.objectTypeDragging='';
    })
;
app.filter('stripTags', function () {
    return function (text) {
        return text ? String(text).replace(/<[^>]+>/gm, '') : '';
    };
});
