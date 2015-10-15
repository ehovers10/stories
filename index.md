---
layout: basic
title: Some stories written by erik
date: 2015-10-10
---

{% assign tales = site.pages | where: "layout", "story" | group_by: "type" %}

{% for thing in tales %}
**{{ thing.name | capitalize }}**
  {% for bit in thing.items %}
  + [{{ bit.title }}]({{ bit.title | slugify }})
  {: style="list-style-type:none;"}
  {% endfor %}
{% endfor %}
