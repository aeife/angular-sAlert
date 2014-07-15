---
title: Getting Started
subtitle: Installation and Setup
type: contentPost.html
order: 10
navbarPlacement: left
layout: post
---

## Dependencies
The distribution already contains a very small subset of needed bootstrap styles. So the only dependency is [AngularJS](http://angularjs.org/).

<!-- ## Required files
All required files are present in the dist folder in the repository. The following files are required for *angular-sAlert* to work:

  * [sAlert.js](https://github.com/aeife/angular-sAlert/blob/master/dist/sAlert.js) (contains the angular module, logic and templates)
  * [sAlert.css](https://github.com/aeife/angular-sAlert/blob/master/dist/sAlert.css) (contains the styling)
 -->
## Bower
The easiest way to install *{{site.name}}* locally is with [bower](http://bower.io/):

    bower install angular-sAlert

You can add the flag `-S` to save the dependency in your *bower.json* file.

### Manual download
Alternatively you can [download](https://github.com/aeife/angular-sAlert/releases) a release and copy the files located in the *dist* folder to your project.

## Include files in your project
In order for *{{site.name}}* to work you need to include the following files in your project.

JavaScript:

    {% highlight html %}
    <script type="text/javascript" src="angular-sAlert/dist/sAlert.js"></script>
    {% endhighlight %}

CSS:

    {% highlight html %}
    <link href="angular-sAlert/dist/sAlert.css" rel="stylesheet">
    {% endhighlight %}

## Installation
To use *{{site.name}}* you need to integrate it in your angular application.

Define the sAlert angular module as a dependency:

    {% highlight js %}
    angular.module('myApp', ['sAlert']);
    {% endhighlight %}

To display the alerts you need to include the sAlert directive in your html:

    {% highlight html %}
    <s-alert></s-alert>
    {% endhighlight %}