---
title: 'Understanding javascript promises'
excerpt: 'Promises are an essential concept of JavaScript. They are present in virtually the entire language ecosystem.
Promises are a development pattern that aim to represent the completion of asynchronous operations. They were not native to JavaScript until ES6, when there was an official implementation in the language, before them, most functions used callbacks.'
coverImage: '/landing.jpg'
date: '2021-03-01T05:35:07.322Z'
author:
  name: Lucas Masayuki Tamaribuchi
  picture: '/author/lucas-tamaribuchi.jpg'
ogImage:
  url: '/public/landing.png'
---

Promises are an essential concept of JavaScript. They are present in virtually the entire language ecosystem.

Promises are a development pattern that aim to represent the completion of asynchronous operations. They were not native to JavaScript until ES6, when there was an official implementation in the language, before them, most functions used callbacks.

### What is a Promise?

It is an object used to perform asynchronous processing, this object holds a value that may be available now, in the future, or never. This allows the handling of events or actions that happen asynchronously in cases of successes or failures.

A Promise also has different states, some of which:

1. Pending.
2. Resolved (not in the documentation, but I like to set this state as well).
3. Rejected.
4. Performed (Fulfilled).
5. Settled.

Generally the most used states are two (2), being them: Resolved and Rejected.
