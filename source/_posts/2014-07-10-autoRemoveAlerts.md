---
title: Auto Removing Alerts
subtitle: open alerts that will remove themself after a while
template: autoRemoveAlerts/autoRemoveAlerts.html
jsfiddle: autoRemoveAlerts/fiddle.html
type: examplePost.html
order: 40
layout: post
---

The standard alerts need to be closed manually one by one by clicking the close icon on the right. But you can specify that an alert should close itself automatically after a while. The default timeout for the close is two seconds.

In order to add the auto removing behavior to an alert just append the following function to the declaration:

    {% highlight js %}
    .autoRemove()
    {% endhighlight %}

As an example, here is the definition of an auto removing success alert:

    {% highlight js %}
    sAlert.success('i will remove myself soon').autoRemove();
    {% endhighlight %}

This works with all types of alerts.