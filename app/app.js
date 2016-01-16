window.name = "NG_DEFER_BOOTSTRAP!";

window.$ = window.jQuery = require('./app/bower_components/jquery/dist/jquery.min.js');

var app = angular.module('app', [
    "ui.router"
]);

app.config(config);

app.run(run);

function run($rootScope) {
    // $rootScope.$state = $state;
    // $rootScope.$stateParams = $stateParams;
}

function config() {

}


$(document).ready(function() {
    angular.bootstrap(document, ["app"]);
    angular.resumeBootstrap();
})
