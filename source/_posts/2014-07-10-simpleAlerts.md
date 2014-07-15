---
title: Simple Alerts
subtitle: open alerts of different types
template: simpleAlerts/simpleAlerts.html
jsfiddle: simpleAlerts/fiddle.html
type: examplePost.html
order: 30
layout: post
---

To use *{{site.name}}* you need to inject the *sAlert* service via the angular dependency injection.

Use the service to declare and display new alerts. The *sAlert* service provides a function for each alert type. Call the function of the alert type you want to be displayed and pass the alert message as a parameter.

There are three supported types of alert messages:

**success**

    {% highlight js %}
    sAlert.success('my success message');
    {% endhighlight %}

**info**

    {% highlight js %}
    sAlert.info('my info message');
    {% endhighlight %}

**error**

    {% highlight js %}
    sAlert.error('my error message');
    {% endhighlight %}