---
title: Overview
description: Component overview
position: 3
category: Components
providers:
  - activetick.com
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
GraphQL is used as the language agnostic boundary between the server and frontend.

By designing it this way, we can swap the frontend with any type of UI, CLI, TUI that talks graphQL.

## Node Addon Bindings
The glue code between the high performance C++ financialcpp library and node.js.

## financialcpp (c++)
Pure, high performance c++ code. This is where all the heavy lifting is done.

## 💾 Tick storage
Stock data can take up a lot of space. For our current use case, we decided to store raw trade and quote data as binary files on the file system.

In the future, we plan to add seamless S3 support. The storage interface is abstracted into its own module. This makes it easy to write new storage modules.

## 📈 Data Provider
Out of the box, the following data providers are supported:

<list :items="providers"></list>

We personally use [activetick.com](activetick.com) (not affiliated at all) and are happy with it. Therefore we won't implement Interactive Brokers as a provider unless someone steps up to take ownership of that module.

## 💸 Live/Paper Trading
Of course, what's the point of all this if you can't trade with a broker?

We offer first class support for Interactive Brokers. Other brokers are welcome. In theory, brokers could be swapped out too but it's not supported at all.