---
id: colors
title: Colors
---

You can find and customize these variables in our `abstracts/_colors.scss` file.

## Color Palettes

### `$color-palette-gray`

Gray color palette.

```scss
$color-palette-gray: (
  50: #fafafa,
  100: #f5f5f5,
  200: #eee,
  300: #e0e0e0,
  400: #bdbdbd,
  500: #9e9e9e,
  600: #757575,
  700: #616161,
  800: #424242,
  900: #212121,
);
```

### `$g-color-palettes`

Collection of the color palettes. You can use these values with [color-palette](functions#color-palette) function as well.

```scss
$g-color-palettes: (
  'gray': $color-palette-gray,
);
```

## Default Colors

### `$color-white`

```scss
$color-white: #fff;
```

### `$color-black`

```scss
$color-black: #000;
```

## Project Colors

### `$color-primary`

Global primary color. This is the value used in the `u-color-primary` and `u-background-color-primary` utility classes.

```scss
$color-primary: #008cba;
```

### `$color-secondary`

Global secondary color.

```scss
$color-secondary: #e7e7e7;
```

### `$color-danger`

Global alert color. This is the value used in the `u-color-danger` and `u-background-color-danger` utility classes.

```scss
$color-danger: #f04124;
```

### `$color-success`

Global success color. This is the value used in the `u-color-success` and `u-background-color-success` utility classes.

```scss
$color-success: #43ac6a;
```

### `$color-warning`

Global warning color. This is the value used in the `u-color-warning` and `u-background-color-warning` utility classes.

```scss
$color-warning: #f08a24;
```

### `$color-info`

Global info color.

```scss
$color-info: #a0d3e8;
```

## Project Color Configs

### `$g-body-background-color`

Background color of the `body` element.

```scss
$g-body-background-color: $color-white !default;
```

### `$g-text-color`

Text color of the `body` element.

```scss
$g-text-color: color-palette('gray', 900) !default;
```

### `$g-link-color`

Color of the `a` element.

```scss
$g-link-color: $color-primary !default;
```

### `$g-link-hover-color`

Color of the `a` element in hover state.

```scss
$g-link-hover-color: darken($g-link-color, 15%) !default;
```

### `$g-border-color`

Global border color.

```scss
$g-border-color: color-palette('gray', 100) !default;
```

### `$g-text-muted-color`

Global text muted color, this is the value used in the `u-color-muted` utility class.

```scss
$g-text-muted-color: color-palette('gray', 600) !default;
```

### `$g-hr-border-color`

Border color of the `hr` element.

```scss
$g-hr-border-color: $g-border-color !default;
```
