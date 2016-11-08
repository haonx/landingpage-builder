//TEXT
app.config(function ($originObjectsProvider, TINYMCE_DEFAULT_OPTIONS) {
    var tinymceOptions = angular.copy(TINYMCE_DEFAULT_OPTIONS);
    tinymceOptions.inline = true;
    tinymceOptions.menubar = false;
    $originObjectsProvider.registerObject('text', {
        tinymceOptions: tinymceOptions,
        value: 'Click to edit this text'
    });
});
//IMAGE
app.config(function ($originObjectsProvider, TINYMCE_DEFAULT_OPTIONS) {
    var tinymceOptions = angular.copy(TINYMCE_DEFAULT_OPTIONS);
    tinymceOptions.inline = true;
    tinymceOptions.menubar = false;
    tinymceOptions.toolbar = false;
    $originObjectsProvider.registerObject('image', {
        tinymceOptions: tinymceOptions,
        value: '<img src="http://i.imgur.com/RFtIbdU.png"/>'
    });
});
//BUTTON
app.config(function ($originObjectsProvider, TINYMCE_DEFAULT_OPTIONS) {
    var tinymceOptions = angular.copy(TINYMCE_DEFAULT_OPTIONS);
    tinymceOptions.inline = true;
    tinymceOptions.menubar = false;
    tinymceOptions.toolbar = false;
    $originObjectsProvider.registerObject('button', {
        tinymceOptions: tinymceOptions,
        value: 'Click to edit this text'
    });
});
//HORIZONTAL LINE
app.config(function ($originObjectsProvider) {
    $originObjectsProvider.registerObject('hr');
}).run(function ($templateCache) {
    $templateCache.put('app/tpls/originObjects/hr.html','<hr>');
});

//FORM
app.config(function ($originObjectsProvider, TINYMCE_DEFAULT_OPTIONS) {
    var tinymceOptions = angular.copy(TINYMCE_DEFAULT_OPTIONS);
    tinymceOptions.inline = true;
    tinymceOptions.menubar = false;
    tinymceOptions.toolbar = false;
    $originObjectsProvider.registerObject('form', {
        tinymceOptions: tinymceOptions,
        childrenObjects: [
            $originObjectsProvider.create('text'),
            $originObjectsProvider.create('button')
        ]
    });
});
