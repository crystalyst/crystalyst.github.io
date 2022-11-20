---
title: "Week I Learned (11/14/22 - 11/20/22)"
layout: post
---

Worked on a toy project (11/14 - 11/20) to build an website that provides information on tourist attractions for some cities.


### Agenda
[1. Things I did and learned](#things-i-did-and-learned)

[2. Things to improve](#things-to-improve)

#### Things I did and learned

During the couple days of the project period, my three teammates and I worked on an website providing tourist information on some cities. On this project, I particularly focused on establishing a sound understanding on the communcation between client and server.

First, I built two POST API to create User Authentication Flow using Flask and Ajax. Since Ajax passes key/values to Flask API in the form of request, I programmed User Sign in and Sign up logic using the field values (email, password) I can refer from request object.

Learning about publishing JWT Token and debugging JSON Serializable error during the JWT token generating process was a good experience; I feel like I would like to take a deeper look into these to understand the flow better.

#### Things to improve

In POST request, since the server needs to respond to the client's request with data, I was not able to use render_template() method to render a certain page (Instead, I needed to return json files to handle the response data in ajax - client). So, I ended up creating separate GET APIs to render each page (so, I had so many APIs). I would like to review and figure out if there is a better way to tackle this issue.

Given the restricted amount of time, I was not able to complete all features as planned initially. I would like to find a way to collaborate and work more efficiently in future projects.
