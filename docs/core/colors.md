---
id: colors
title: Colors
---

You can find and customize these variables in our `abstracts/_colors.scss` file.

## Color Palettes

### `$color-palette-gray`

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

### `$color-black`

```scss
$color-black: #000;
```

## Project Colors

### `$primary-color`

Global primary color. This is the value used in the `u-color-primary` and `u-background-color-primary` utility classes.

```scss
$primary-color: #008cba;
```

### `$secondary-color`

Global secondary color, this is the value used in the `u-background-color-secondary` utility class.

```scss
$secondary-color: #e7e7e7;
```

### `$alert-color`

Global alert color. This is the value used in the `u-color-alert` and `u-background-color-alert` utility class.

```scss
$alert-color: #f04124;
```

### `$success-color`

Global success color. This is the value used in the `u-color-success` and `u-background-color-success` utility class.

```scss
$success-color: #43ac6a;
```

### `$warning-color`

Global warning color. This is the value used in the `u-color-warning` and `u-background-color-warning` utility class.

```scss
$warning-color: #f08a24;
```

### `$info-color`

Global info color.

```scss
$info-color: #a0d3e8;
```

## Project Color Configs

### `$g-body-bg`

Background color of the `body` element.

```scss
$g-body-bg: $color-white !default;
```

### `$g-text-color`

Text color of the `body` element.

```scss
$g-text-color: color-palette('gray', 900) !default;
```

### `$g-link-color`

Color of the `a` element.

```scss
$g-link-color: $primary-color !default;
```

### `$g-link-hover-color`

Color of the `a` element in hover state.

```scss
$g-link-hover-color: darken($g-link-color, 15%) !default;
```

### `$g-border-color`

Global border color.

```scss
$g-border-color: color-palette('gray', 100) !default;
```

### `$g-text-muted-color`

Global text muted color, this is the value used in `u-color-muted`.

```scss
$g-text-muted-color: color-palette('gray', 600) !default;
```

### `$g-hr-border-color`

Border color of the `hr` element.

```scss
$g-hr-border-color: $g-border-color !default;
```
