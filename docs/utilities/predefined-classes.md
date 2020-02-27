---
id: predefined-classes
title: Predefined Classes
---

These are helper classes that can speed up your development and reduce CSS property declarations.

> Utility classes use `!important` declarations to override any other styles, so exercise caution when using them.

## Declarative Classes

Most of the utility classes are named declaratively. Namely, the format of the utility class names are like this `.u-{property}-{value}`.

### Common

- `.u-table-layout-fixed`
- `.u-overflow-hidden`
- `.u-border-radius-50%`
- `.u-position-static`
- `.u-position-relative`

### Float

- `.u-float-right`
- `.u-float-left`
- `.u-float-none`

### Interactivity

- `.u-pointer-events-none`
- `.u-cursor-pointer`
- `.u-user-select-none`

### Colors

The color utility classes are named using the format `.u-{property}-{color-variable}`. The color variables stored in `abstracts/_colors.scss`.

#### Text Colors

- `.u-color-muted`
- `.u-color-primary`
- `.u-color-success`
- `.u-color-danger`
- `.u-color-warning`

#### Background Colors

- `.u-background-color-primary`
- `.u-background-color-success`
- `.u-background-color-danger`
- `.u-background-color-warning`

### Display

Responsive variations also exist for `.u-display-block`, `.u-display-flex` and `.u-display-none`.

- `.u-display-block`
- `.u-display-inline-block`
- `.u-display-inline`
- `.u-display-table`
- `.u-display-table-row`
- `.u-display-table-cell`
- `.u-display-flex`
- `.u-display-inline-flex`
- `.u-display-none`

### Flexbox

#### Flex

- `.u-flex-1`
- `.u-flex-none`
- `.u-flex-grow-1`
- `.u-flex-shrink-0`

#### Direction

- `.u-flex-direction-row`
- `.u-flex-direction-row-reverse`
- `.u-flex-direction-column`
- `.u-flex-direction-column-reverse`

#### Wrap

- `.u-flex-wrap-no-wrap`
- `.u-flex-wrap-wrap`
- `.u-flex-wrap-wrap-reverse`

#### Justify Content

- `.u-justify-content-flex-start`
- `.u-justify-content-center`
- `.u-justify-content-flex-end`
- `.u-justify-content-space-between`
- `.u-justify-content-space-around`

#### Align Items

- `.u-align-items-stretch`
- `.u-align-items-flex-start`
- `.u-align-items-center`
- `.u-align-items-flex-end`
- `.u-align-items-baseline`

#### Align Content

- `.u-align-content-stretch`
- `.u-align-content-flex-start`
- `.u-align-content-center`
- `.u-align-content-flex-end`
- `.u-align-content-space-between`
- `.u-align-content-space-around`

#### Align Self

- `.u-align-self-auto`
- `.u-align-self-flex-start`
- `.u-align-self-center`
- `.u-align-self-flex-end`
- `.u-align-self-stretch`

### Sizing

Responsive variations also exist for `.u-width-100%` and `.u-width-auto`.

- `.u-max-width-100%`
- `.u-min-width-0`
- `.u-min-width-100%`
- `.u-width-100%`
- `.u-width-auto`
- `.u-width-50%`
- `.u-height-100%`
- `.u-height-100vh`

### Font Sizing

The font size utility classes are named using the format `.u-{property}-{font-size-variable}`. The font size variables stored in `abstracts/_variables.scss`.

- `.u-font-size-2xsmall`
- `.u-font-size-xsmall`
- `.u-font-size-small`
- `.u-font-size-base`
- `.u-font-size-medium`
- `.u-font-size-large`
- `.u-font-size-xlarge`

### Text

#### Alignment

- `.u-text-align-left`
- `.u-text-align-right`
- `.u-text-align-center`
- `.u-text-align-justify`

#### Transformation

- `.u-text-transform-lowercase`
- `.u-text-transform-uppercase`
- `.u-text-transform-capitalize`

#### Font Weights

- `.u-font-weight-300`
- `.u-font-weight-400`
- `.u-font-weight-500`
- `.u-font-weight-600`
- `.u-font-weight-700`

#### Vertical Align

- `.u-vertical-align-top`
- `.u-vertical-align-bottom`
- `.u-vertical-align-middle`
- `.u-vertical-align-baseline`
- `.u-vertical-align-text-bottom`

#### Decoration

- `.u-text-decoration-underline`
- `.u-text-decoration-none`
- `.u-text-decoration-none:hover`

#### Text wrapping and word break

- `.u-white-space-nowrap`
- `.u-word-break-break-all`

### Spacing

The space utility classes are named using the format `.u-{margin|padding}-{?side}-{?size}`. These utilities are generated from the `$g-gaps` and `$g-pads` Sass maps in `abstracts/_variables.scss`.

For example; `.u-margin-top` would add margin to the top of the element.

Responsive variations also exist for space utilities.

#### Sides

- `top` - for classes that set `margin-top` or `padding-top`
- `bottom` - for classes that set `margin-bottom` or `padding-bottom`
- `left` - for classes that set `margin-left` or `padding-left`
- `right` - for classes that set `margin-right` or `padding-right`
- `sides` - for classes that set both `*-left` and `*-right`
- `ends` - for classes that set both `*-top` and `*-bottom`
- blank - for classes that set a margin or padding on all 4 sides of the element

#### Sizes

- `auto` - for classes that set the margin `auto` (exist only for margins!)
- `0` - for classes that set the margin `0` (exist only for margins!)
- `small` - (by default) for classes that set the margin `$g-gaps[small]` or padding to `$g-pads[small]`
- `xsmall` - (by default) for classes that set the margin `$g-gaps[xsmall]` or padding to `$g-pads[xsmall]`
- `2xsmall` - (by default) for classes that set the margin `$g-gaps[2xsmall]` or padding to `$g-pads[2xsmall]`
- `medium` - (by default) for classes that set the margin `$g-gaps[medium]` or padding to `$g-pads[medium]`
- `large` - (by default) for classes that set the margin `$g-gaps[large]` or padding to `$g-pads[large]`
- `xlarge` - (by default) for classes that set the margin `$g-gaps[xlarge]` or padding to `$g-pads[xlarge]`
- `2xlarge` - (by default) for classes that set the padding to `$g-pads[xlarge]` (not available for margin!)
- blank - (by default) for classes that set the margin to `$g-gaps[normal]` or padding to `$g-pads[normal]`

#### Examples

Here are some representative examples of these classes:

```scss
.u-margin-top {
  margin-top: gap(); // ~24px  by default
}

.u-margin-left-small {
  margin-left: gap(small); // ~16px by default
}

.u-padding-sides-medium {
  padding-left: pad(medium); // ~40px by default
  padding-right: pad(medium);
}

.u-padding {
  padding: pad(); // ~32px by default
}
```

## Nondeclarative Classes

- `.u-clearfix` - Clear any floats within an element. Can also be used as a mixin. `@include clearfix`
- `.u-img-fluid` - Responsive images (ensure images don't scale beyond their parents)
- `.u-text-truncate` - For longer content, you can add this class to truncate the text with an ellipsis. Requires `display: inline-block` or `display: block`. Can also be used as a mixin. `@include text-truncate`
