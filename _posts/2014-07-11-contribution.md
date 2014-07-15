---
title: Contribution
subtitle: development of the project
type: contentPost.html
order: 100
navbarPlacement: right
layout: post
---

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

For automation *{{site.name}}* uses the task runner [grunt](http://gruntjs.com/). All tasks are defined in *Gruntfile.js*.

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

If you have any ideas, suggestions or found a bug you can open an [issue](https://github.com/aeife/angular-sAlert/issues). Feel free to contribute to *{{site.name}}* and open pull requests.