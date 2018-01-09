---
title: "A Blog"
layout: default
permalink: /blog/
author_profile: true
# date: 2018-01-01
---

<h1>{{ page.title }}</h1>
<ul class="posts">
    {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> » <a href="{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a>
    {{ post.excerpt }}
    </li>
    {% endfor %}

</ul>