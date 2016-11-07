app = angular.module('landingPageBuilderApp', ['dndLists', 'ui.tinymce']);
app
    .controller('landingPageBuilderMainController', function ($scope, $originObjects) {
        var scope = $scope;
        scope.dnd = {};
        scope.dnd.originObjects = $originObjects.getAll();
        scope.dnd.dropzones = [
            {
                'name': 'Image only, please',
                instanceObjects: [],
                allowedTypes: ['image']
            },
            {
                'name': 'B',
                instanceObjects: [
                    scope.dnd.originObjects[0],
                    scope.dnd.originObjects[1],
                    scope.dnd.originObjects[2]
                ],
                allowedTypes: $originObjects.getAllObjectTypes()
            }
        ];
        scope.dnd.objectTypeDragging='';
    })
;
app.filter('stripTags', function () {
    return function (text) {
        return text ? String(text).replace(/<[^>]+>/gm, '') : '';
    };
});
