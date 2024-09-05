
# React Rating Tool

React Rating Tool is a [React](https://github.com/facebook/react) rating component that supports fractional ratings with customizable symbols and styles. The component is designed to be flexible and easy to use, with support for various customization options.

## Demo

See [react-rating-tool](http://your-demo-link-here) in action.

## Installation

You can install `react-rating-tool` using the *npm* package manager:

```bash
npm install --save react-rating-tool

```

### Dependencies

The `react-rating-tool` component [peer depends](https://docs.npmjs.com/cli/v10/configuring-npm/package-json) on the [React](https://react.dev/) library.

You can install React using *npm* too:

```bash
npm install --save react react-dom

```

## Upgrade Warning

If you are using a version of React Rating Tool < v1.0, be aware that there are API changes in v1.0 and later versions. Please refer to the Properties and Deprecated Properties sections below for documentation of the current API.

## Usage

1.Import the Rating Component

import Rating from 'react-rating-tool';

2.Start using it

With JSX:

<Rating count={5} defaultValue={2.5} onChange={(value) => console.log(value)} />

## Properties

## Properties

| Property      | Type           | Default     | Description                                             |
|---------------|----------------|-------------|---------------------------------------------------------|
| `count`       | number         | 5           | Number of stars to display.                             |
| `defaultValue`| number         | 0           | The default rating value.                               |
| `onChange`    | function       | undefined   | Callback function that gets called when the rating value changes. |
| `style`       | CSSProperties  | undefined   | Custom styles for the rating container.                 |
| `className`   | string         | undefined   | Custom CSS class for the rating container.              |
| `inactiveColor`| string        | '#dcdcdc'   | Color for inactive stars.                               |
| `activeColor` | string         | '#ffd700'   | Color for active stars.                                 |
| `size`        | string         | '24px'      | Size of the stars.                                      |


## Callbacks

Callback      | Type                           | Description
---           | ---                            | ---
`onChange`    | function (value) {}            | Gets called with the `value` when a different value than the currently set is selected.
`onClick`     | function (value) {}            | Gets called with the `value` when a symbol is clicked. The value is equal to the value that corresponds to that part of the symbol.
`onHover`     | function (value) {}            | Gets called with the `value` when you hover over a symbol. The value is equal to the value that corresponds to that part of the symbol. Gets called in `quiet` mode too. When hover ends, gets called with no `value` (i.e. `undefined` as the value).

## Deprecated Properties and Callbacks

This is a list of deprecated properties and callbacks from versions older than v1.0

* `onRate`
* `initialRate`
* `placeholderRate`
* `empty`
* `full`
* `placeholder`

## License

[MIT License](https://github.com/dreyescat/react-rating/blob/master/LICENSE.md)
