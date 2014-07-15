---
title: Instances
subtitle: manage multiple separate alert views
template: instances/instances.html
jsfiddle: instances/fiddle.html
type: examplePost.html
order: 70
layout: post
---

The *fixedOnTop* option allows you to display alerts locally on a page and by using multiple *sAlert* directives you can display alerts in multiple locations in your app. But by default all directives will display the same alerts. To have complete separate alerts you can connect a *sAlert* directive to an instance:

    {% highlight html %}
    <s-alert options="{fixedOnTop: false}" instance="myAlertInstance"></s-alert>
    {% endhighlight %}

Set the option *fixedOnTop* to false to let the alerts be displayed in different locations.

Each alert definition can now be bound to an instance making it only visible in this location. Just add the name of the instance as a second parameter when declaring an alert:

    {% highlight js %}
    sAlert.success('my success message', 'myAlertInstance');
    {% endhighlight %}