---
title: Node Addon 
description: ''
position: 6
category: Components
---

Node addons are commonly used to wrap native C++ code and make that code available to javascript. Think of it as the glue between c++ and node.js.

One way to extend **financialcpp** is to write your own modules in C++ and compile your own extended version of **financialcpp**. In addition to compiling the C++ library, you'll also have to recompile the Node Addon bindings to expose this new functionality to javascript (you'll also probably need to extend graphql and UI code as well). 

It sounds overwhelming, but don't worry, we have a pretty [good guide here](../guide/plugin) on how to extend **financialcpp**. We also would welcome any extensions into the official repo!