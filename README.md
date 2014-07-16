ngAlert [![Build Status](https://travis-ci.org/aeife/angular-sAlert.svg?branch=master)](https://travis-ci.org/aeife/angular-sAlert)
=======

# Demo And Guide
Want to see and try angular-sAlert in action? Visit http://aeife.github.io/angular-sAlert/ for demos and guides. There you can see explanations for all the possibilites and configurations for angular-sAlert.


# Getting Started

## Dependencies
The distribution already contains a very small subset of needed bootstrap styles. So the only dependency is [AngularJS](http://angularjs.org/).

## Bower
The easiest way to install angular-sAlert locally is with [bower](http://bower.io/):

    bower install angular-sAlert

You can add the flag `-S` to save the dependency in your *bower.json* file.

### Manual download
Alternatively you can [download](https://github.com/aeife/angular-sAlert/releases) a release and copy the files located in the *dist* folder to your project.

## Include files in your project
In order for angular-sAlert to work you need to include the following files in your project.

JavaScript:

    <script type="text/javascript" src="angular-sAlert/dist/sAlert.js"></script>

CSS:

    <link href="angular-sAlert/dist/sAlert.css" rel="stylesheet">

## Installation
To use *{{site.name}}* you need to integrate it in your angular application.

Define the sAlert angular module as a dependency:

    angular.module('myApp', ['sAlert']);

To display the alerts you need to include the sAlert directive in your html:

    <s-alert></s-alert>


# Usage

After the setup you can use angular-sAlert via the *sAlert* service. Just inject the service into a component of your AngularJS application:

    .controller(function ($scope, sAlert) {
        sAlert.success('my success message');
    });

For all possibilites and live demos visit http://aeife.github.io/angular-sAlert/. 


# Contribution

## Install development dependencies

For the client side dependencies run bower:

    bower install

The development workflow requires additional npm dependencies:

    npm install

## Unit tests

[Karma](http://karma-runner.github.io/) is used as a unit test runner for AngularJS. The configs for the test runner are specified in *karma.conf.js*.

Run the unit tests:

    karma start

A coverage report is generated in the folder *coverage*.

## Automatic workflow

For automation angular-sAlert uses the task runner [grunt](http://gruntjs.com/). All tasks are defined in *Gruntfile.js*.

The default task runs unit tests, jshint, packages all files and copies them to the *dist* folder. To execute it run:

    grunt

While developing you can let grunt watch for file changes and automatically run the default task on a change:

    grunt watch

## Versioning

Releases are versioned as follows:

    <major>.<minor>.<patch>

## Branching

The project uses git flow. New code is first implemented in feature branches and once stable merged to *develop*. The *master* branch contains stable releases each tagged with their version number.

## GitHub

If you have any ideas, suggestions or found a bug you can open an [issue](https://github.com/aeife/angular-sAlert/issues). Feel free to contribute to angular-sAlert and open pull requests.
