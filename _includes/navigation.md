{% assign tales = site.pages | where: "layout", "story" | group_by: "type" %}

+ [Home]({{ site.baseurl }}/)
{: style="list-style-type:none;display:inline-block;"}
{% for thing in tales %}
  + [{{ thing.name | capitalize }}](#)
  {: onClick="return false;" style="list-style-type:none;display:inline-block;" .info #{{ thing.name | slugify }}}
{% endfor %}

{% for thing in tales %}
<div id="{{ thing.name | slugify }}-things" class="hid" markdown="1" style="margin-left:30px;">
  {% for bit in thing.items %}
  + [{{ bit.title }}]({{ site.baseurl }}/{{ bit.title | slugify }})
  {: style="list-style-type:none;display:inline-block;"}
  {% endfor %}
</div>
{% endfor %}


