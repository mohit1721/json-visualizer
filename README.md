# JSON Tree Visualizer

An interactive web application to visualize any JSON data as a hierarchical tree, featuring real-time search, highlighting, and theme toggle. Built for APIWIZ Frontend SDE Role Assignment (SDE-I).

---

## Objective

Visualize, inspect, and search through any JSON data interactively. See nested objects, arrays, and primitive values as a connected node tree, instantly search by path, and explore with fluid UX.

---

## Features

- **JSON Input & Parsing**  
  - Paste/write JSON in a text area  
  - Live validation & error feedback  
  - Sample JSON placeholder

- **Tree Visualization with React Flow**  
  - Hierarchy using connected nodes  
  - Visual distinction for Objects, Arrays, Primitives  
  - Colors for fast recognition  
  - Parent-child relationships via edges

- **Advanced Search**  
  - Search via JSON path (`$.user.address.city`, `items[0].name`, etc.)  
  - Instant highlighting and centering on match  
  - Match found / not found feedback

- **Basic Interactivity**  
  - Zoom In/Out/Fit View  
  - Pan canvas  
  - Node info tooltip (path/value) on hover

- **Bonus**  
  - Dark/Light mode toggle  
  - Clear/Reset button  
  - Copy node path by clicking  
  - Download tree as an image

---

## Demo Screenshot

![alt text](image.png)
![alt text](image-1.png)
---

## Tech Stack

- React
- [React Flow](https://reactflow.dev/) for node-based tree visualization
- CSS variables for theming

---

