---
title: Configuration
subtitle: customize the display of alerts with various options
template: configuration/configuration.html
jsfiddle: configuration/fiddle.html
type: examplePost.html
order: 60
layout: post
---

You can configure various display options via the *sAlert* directive. Just put an object in the *options* param.

    {% highlight html %}
    <s-alert options="{container: true}"></s-alert>
    {% endhighlight %}

Alernativly you can directly add a scope object to the param. Be aware that the directive uses one-way-binding like ng-class, so you need to put your scope variable in double curly braces:

    {% highlight html %}
    <s-alert options="{{ "{{myAlertOption"}}}}"></s-alert>
    {% endhighlight %}

Available options:

  * **container** `(default: false)`: specify if alerts should be wrapped into a bootstrap container, making them smaller in width
  * **fixedOnTop** `(default: true)`: specify if alerts should be positioned fixed on top of the page so that they are always visible

**Custom Styles**

The style of the alert messages is easily adjustable via css. All classes are prefixed with the class *sAlert*. Here are the most useful classes for custom styling:

  * `.sAlert .fixed-on-top`: only included when fixedOnTop is true, useful for defining a margin of the first fixed alert on top of your page
  * `.sAlert .alert`: define the style of the content for each alert
  * `.sAlert .alert-success | .alert-info | .alert-error`: different alert types

If you want to style separate *sAlert* instances differently just assign classes to the directives.