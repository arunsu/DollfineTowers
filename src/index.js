'use strict';

var bootstrap = require('bootstrap'),
    d3 = require('d3');

var App = require('./app.jsx');

var bootstrapCSS = require('bootstrap/dist/css/bootstrap.min.css');
var bootstrapJS = require('bootstrap/dist/js/bootstrap.min.js');
// var bootstrapVendorJS = require('./vendor/bootstrap/js/bootstrap.bundle.min.js');
// var bootstrapVendorCSS = require('./vendor/bootstrap/css/bootstrap.min.css');
var styleCSS = require('./stylesheets/style.css');
var marketingBodyJS = require('./vendor/lib/body.min.js');
var marketingHeadJS = require('./vendor/lib/head.min.js');
var marketingHeaderSASS = require('./vendor/sass/screen.sass');

function component() {
    var element = document.createElement('div');

    element.innerHTML = ['Hello', 'webpack'].join(' ');

    return element;
}

// document.body.appendChild(component());