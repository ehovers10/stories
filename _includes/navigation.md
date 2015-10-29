{% assign tales = site.pages | where: "layout", "story" | sort: "date" | group_by: "type" %}

{% if page.title != "A few simple stories" %}
  {:navie: style="display:inline-block;"}

  + [Home]({{ site.baseurl }}/)
  {: navie}

{% for thing in tales %}
  + [{{ thing.name | capitalize }}](#)
  {: onClick="return false;" navie .info #{{ thing.name | slugify }}}
{% endfor %}

{% for thing in tales %}
<div id="{{ thing.name | slugify }}-things" class="hid" markdown="1" style="margin-left:30px;">
  {% for bit in thing.items %}
  + [{{ bit.title }}]({{ site.baseurl }}/{{ bit.title | slugify }})
  {: navie}
  {% endfor %}
</div>
{% endfor %}

{% else %}

{% for thing in tales %}
### {{ thing.name | capitalize }}
  {% for bit in thing.items %}
  + [{{ bit.title }}]({{ site.baseurl }}/{{ bit.title | slugify }})
  {% endfor %}
{% endfor %}

{% endif %}
