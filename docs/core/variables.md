---
id: variables
title: Variables
---

You can find and customize these variables in our `abstracts/_variables.scss` file.

## Transition

### `$g-transition-duration`

Global transition duration.

```scss
$g-transition-duration: 0.4s !default;
```

## Links

Anchor element styles. More variables for anchors can be found in the [Colors](core/colors.md) section.

### `$g-link-transition`

The transition value for the global anchor elements.

```scss
$g-link-transition: null !default;
```

### `$g-link-hover-decoration`

The `text-decoration` value for the global anchor elements in `:hover` state.

```scss
$g-link-hover-decoration: underline !default;
```

## Typography

### `$g-font-size-root`

Font size of the `:root` element. `$g-font-size-root` effects the value of `rem`, which is used for as well font sizes, paddings and margins.

```scss
$g-font-size-root: null !default;
```

### `$g-font-size-base`

Font size of the body element.

```scss
$g-font-size-base: 1rem !default;
```

### `$g-line-height-base`

Line height of the body element.

```scss
$g-line-height-base: 1.5 !default;
```

### `$g-font-size-h1`

Font size of the h1 element.

```scss
$g-font-size-h1: px-to-rem(36px) !default;
```

### `$g-font-size-h2`

Font size of the h2 element.

```scss
$g-font-size-h2: px-to-rem(30px) !default;
```

### `$g-font-size-h3`

Font size of the h3 element.

```scss
$g-font-size-h3: px-to-rem(24px) !default;
```

### `$g-font-size-h4`

Font size of the h4 element.

```scss
$g-font-size-h4: px-to-rem(18px) !default;
```

### `$g-font-size-h5`

Font size of the h5 element.

```scss
$g-font-size-h5: 1rem !default;
```

### `$g-font-size-h6`

Font size of the h6 element.

```scss
$g-font-size-h6: px-to-rem(14px) !default;
```

### `$g-headings-font-family`

Font family of the headings.

```scss
$g-headings-font-family: inherit !default;
```

### `$g-headings-font-weight`

Font weight of the headings.

```scss
$g-headings-font-weight: 500 !default;
```

### `$g-headings-line-height`

Line height of the headings.

```scss
$g-headings-line-height: 1.1 !default;
```

### `$g-headings-margin-bottom`

Margin bottom of the headings.

```scss
$g-headings-margin-bottom: 1rem !default;
```

### `$g-font-size-small`

Global small font size, this is the value used in the `u-font-size-small` utility class.

```scss
$g-font-size-small: $g-font-size-base - px-to-rem(2px) !default;
```

### `$g-font-size-xsmall`

Global xsmall font size, this is the value used in the `u-font-size-xsmall` utility class.

```scss
$g-font-size-xsmall: $g-font-size-base - px-to-rem(4px) !default;
```

### `$g-font-size-2xsmall`

Global 2xsmall font size, this is the value used in the `u-font-size-2xsmall` utility class.

```scss
$g-font-size-2xsmall: $g-font-size-base - px-to-rem(6px) !default;
```

### `$g-font-size-medium`

Global medium font size, this is the value used in the `u-font-size-medium` utility class.

```scss
$g-font-size-medium: $g-font-size-base + px-to-rem(2px) !default;
```

### `$g-font-size-large`

Global large font size, this is the value used in the `u-font-size-large` utility class.

```scss
$g-font-size-large: $g-font-size-base + px-to-rem(4px) !default;
```

### `$g-font-size-xlarge`

Global xlarge font size, this is the value used in the `u-font-size-xlarge` utility class.

```scss
$g-font-size-xlarge: $g-font-size-base + px-to-rem(8px) !default;
```

### `$g-hr-margin-ends`

Top and bottom margin value of the `hr` element.

```scss
$g-hr-margin-ends: 1.5rem !default;
```

## Paragraphs

### `$g-paragraph-margin-top`

Margin top of the `p` element

```scss
$g-paragraph-margin-top: 1rem !default;
```

## Spacing

### `$g-base-gap`

The base value for the gaps.

```scss
$g-base-gap: 1.5rem !default;
```

### `$g-gaps`

Gap values. These values are generally used for margins, also, the margin utilities are generated using this Sass map. You can use these values with [gap](core/functions.md#gap) function as well.

```scss
$g-gaps: (
  normal: $g-base-gap,
  small: (
    $g-base-gap / 1.5,
  ),
  xsmall: (
    $g-base-gap / 3,
  ),
  2xsmall: (
    $g-base-gap / 6,
  ),
  medium: (
    $g-base-gap * (4 / 3),
  ),
  large: (
    $g-base-gap * (5 / 3),
  ),
  xlarge: (
    $g-base-gap * 2,
  ),
);
```

### `$g-base-padding`

The base value for the gaps.

```scss
$g-base-padding: 2rem !default;
```

### `$g-pads`

Padding values. These values are generally used for padding, also, the padding utilities are generated using this Sass map. You can use these values with [pad](core/functions.md#pad) function as well.

```scss
$g-pads: (
  normal: $g-base-padding,
  small: (
    $g-base-padding * 0.75,
  ),
  xsmall: (
    $g-base-padding / 2,
  ),
  2xsmall: (
    $g-base-padding / 4,
  ),
  medium: (
    $g-base-padding * 1.25,
  ),
  large: (
    $g-base-padding * 1.5,
  ),
  xlarge: (
    $g-base-padding * 2,
  ),
  2xlarge: (
    $g-base-padding * 3,
  ),
);
```
