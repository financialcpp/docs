---
title: Overview
description: ''
position: 2
category: Components
---

**financialcpp** is designed to be as modular as possible. The following diagram shows a simplified overview of the entire system.

<img src="/fpp-diagram.png" class="light-img" alt=""/>
<img src="/fpp-diagram-dark.png" class="dark-img" alt=""/>

We recognize that there are different ways to backtest, store data, send trades, display charts, benchmark a strategy, compare backtests to live, etc...

The goal of financialcpp is to provide a cohesive interface between all these parts while still providing an easy way to swap out or modify a component.

## UI-framework
The **Quick Start** template provides a default UI used internally at **financialcpp**. The UI is written in VueJS/Nuxt. 

The UI is simple to swap out since the glue between the UI and backend is written in GraphQL.

## GraphQL
GraphQL is used as a language agnostic boundary between the server and the frontend.

This allows us to swap the frontend with any type of UI, CLI, TUI, etc.

## Node Addon Bindings
The glue code between the high performance C++ financialcpp library and node.js.

## financialcpp (c++)
Pure, high performance c++ code. This is where all the heavy lifting is done.
