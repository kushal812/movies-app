window.name = "NG_DEFER_BOOTSTRAP!";

window.$ = window.jQuery = require('./app/bower_components/jquery/dist/jquery.min.js');

var app = angular.module('app', [
    "ui.router",
    "ui.bootstrap",
]);

app.config(config);

app.run(run);

function run($rootScope) {

}

function config() {

}


$(document).ready(function() {
    angular.bootstrap(document, ["app"]);
    angular.resumeBootstrap();
})
