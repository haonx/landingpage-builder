app.provider('$originObjects', function () {
    this.originObjects = [];
    this.$get = function () {
        var originObjects = this.originObjects;
        return {
            getAll: function () {
                return originObjects
            },
            getALlObjectTypes: function () {
                return originObjects.map(function (originObject) {
                    return originObject.type;
                })
            }
        }
    };

    this.registerObject = function (type, options) {
        this.originObjects.push({
            type: type,
            templateUrl: 'app/tpls/originObjects/' + type + '.html',
            options: options
        });
    };
    this.getObject = function (object_type) {
        for (var i = 0; i < this.originObjects.length; i++) {
            if (this.originObjects[i].type == object_type) {
                return this.originObjects[i];
            }
        }
        return false;
    };
});
