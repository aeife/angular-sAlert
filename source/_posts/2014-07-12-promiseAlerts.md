---
title: Alerts With Promises
subtitle: close an alert once a promise is finished
template: promiseAlerts/promiseAlerts.html
jsfiddle: promiseAlerts/fiddle.html
type: examplePost.html
order: 50
layout: post
---

Alerts can also be connected to a promise. Once the promise is resolved or rejected the alert will be removed. This way loading indicators can be realized as an example use case.

To specify a promise for an alert append the following function to the alert definition:

    {% highlight js %}
    .removeOnResolve(<promise>);
    {% endhighlight %}

The full definition for an alert might be something like that:

    {% highlight js %}
    sAlert.info('loading data...').removeOnResolve(myPromise);
    {% endhighlight %}

Like *autoRemove* this works for all types of alerts. In Angular you can use the *$q* module for manual promises or you can even use the promise returned by the $http module to indicate the status of a request as an example.