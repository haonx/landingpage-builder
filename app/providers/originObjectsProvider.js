app.provider('$originObjects', function () {
    this.originObjects = [];
    this.$get = function () {
        var originObjects = this.originObjects;
        return {
            getAll: function () {
                return originObjects
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
});
