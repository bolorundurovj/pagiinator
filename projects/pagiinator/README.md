# Pagiinator

[![NPM](https://nodei.co/npm/pagiinator.png?downloads=true)](https://nodei.co/npm/pagiinator/)
[![downloads](https://badgen.net/npm/dt/pagiinator)](https://badgen.net/npm/dt/pagiinator)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Current Version](https://img.shields.io/npm/v/pagiinator?style=flat-square)](https://img.shields.io/npm/v/pagiinator?style=flat-square)
[![Hits](https://hitcounter.pythonanywhere.com/count/tag.svg?url=https%3A%2F%2Fgithub.com%2Fbolorundurovj%2Fpagiinator)](https://hitcounter.pythonanywhere.com/count/tag.svg?url=https%3A%2F%2Fgithub.com%2Fbolorundurovj%2Fpagiinator)
<a href="https://www.npmjs.com/package/pagiinator">
</a>
<a href="https://www.npmjs.com/package/pagiinator">
<img src="https://img.shields.io/npm/dw/pagiinator?style=flat-square" alt="npm downloads" />
</a>
<img src="https://img.shields.io/bundlephobia/min/pagiinator?style=flat-square" alt="size" />
<a href="https://www.jsdelivr.com/package/npm/pagiinator">
<img src="https://data.jsdelivr.com/v1/package/npm/pagiinator/badge" alt="jsdelivr" />
</a>

**A highly customizable pagination component library.**

By installing this component and writing only a little bit of CSS you can obtain this:

<img src="./src/assets/1.png" alt="Pagination demo 1" />

or

<img src="./src/assets/2.png" alt="Pagination demo 2" />

## Installation

Install `pagiinator` with [npm](https://www.npmjs.com/):

```
npm install pagiinator --save
```

In your App Module add:

```javascript
import { PagiinatorModule } from "pagiinator";
```

## Demo

<img src="./src/assets/demo.gif" alt="Pagination demo" />

## Props

| Name         | Type       | Description                                                                                |
| ------------ | ---------- | ------------------------------------------------------------------------------------------ |
| `items`      | `Number`   | **Required.** Array of data to be paginated                                                |
| `maxPages`   | `Number`   | **Required.** The range of pages displayed.                                                |
| `pageSize`   | `Number`   | **Required.** The number of items to display per page.                                     |
| `textColor`  | `String`   | Color of the text.                                                                         |
| `bgColor`    | `String`   | Background color for active page.                                                          |
| `position`   | `Node`     | Position on page ('left', 'center', 'right').                                              |
| `changePage` | `Function` | The method to call when a page is clicked. Exposes the current page object as an argument. |
