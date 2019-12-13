---
id: mixins
title: Mixins
---

Mixins allow us to reuse code in various parts of the project.

## Breakpoint

Inspired by [Bootstrap](https://getbootstrap.com/).

### `media-breakpoint-up`

```scss
@include media-breakpoint-up($name, $breakpoints);
```

Media of at least the minimum breakpoint width. No query for the smallest breakpoint. Makes the `@content` apply to the given breakpoint and wider.

| Parameter     | Type   | Default value       | Description      |
| ------------- | ------ | ------------------- | ---------------- |
| `$name`       | String | -                   | Breakpoint name  |
| `breakpoints` | Map    | `$grid-breakpoints` | Grid breakpoints |

### `media-breakpoint-down`

```scss
@include media-breakpoint-down($name, $breakpoints);
```

Media of at most the maximum breakpoint width. No query for the largest breakpoint. Makes the `@content` apply to the given breakpoint and narrower.

| Parameter     | Type   | Default value       | Description      |
| ------------- | ------ | ------------------- | ---------------- |
| `$name`       | String | -                   | Breakpoint name  |
| `breakpoints` | Map    | `$grid-breakpoints` | Grid breakpoints |

### `media-breakpoint-between`

```scss
@include media-breakpoint-between($lower, $upper, $breakpoints);
```

Media that spans multiple breakpoint widths. Makes the `@content` apply between the min and max breakpoints

| Parameter     | Type   | Default value       | Description           |
| ------------- | ------ | ------------------- | --------------------- |
| `$lower`      | String | -                   | Lower breakpoint name |
| `$upper`      | String | -                   | Upper breakpoint name |
| `breakpoints` | Map    | `$grid-breakpoints` | Grid breakpoints      |

### `media-breakpoint-only`

```scss
@include media-breakpoint-only($name, $breakpoints);
```

Media between the breakpoint's minimum and maximum widths. No minimum for the smallest breakpoint, and no maximum for the largest one. Makes the `@content` apply only to the given breakpoint, not viewports any wider or narrower.

| Parameter     | Type   | Default value       | Description      |
| ------------- | ------ | ------------------- | ---------------- |
| `$name`       | String | -                   | Breakpoint name  |
| `breakpoints` | Map    | `$grid-breakpoints` | Grid breakpoints |

## `clearfix`

```scss
@include clearfix;
```

Applies the micro clearfix hack popularized by Nicolas Gallagher. Include this mixin on a container if its children are all floated, to give the container a proper height. The clearfix is augmented with specific styles to prevent borders in flexbox
environments

## `css-triangle`

```scss
@include css-triangle($triangle-size, $triangle-color, $triangle-direction);
```

Create isosceles triangles.

| Parameter             | Type   | Default value | Description                                                             |
| --------------------- | ------ | ------------- | ----------------------------------------------------------------------- |
| `$triangle-size`      | Number | -             | Width of the triangle.                                                  |
| `$triangle-color`     | Color  | -             | Color of the triangle.                                                  |
| `$triangle-direction` | String | -             | Direction the triangle points. Can be `up`, `right`, `down`, or `left`. |

## `font-face`

```scss
@include font-face($font-name, $font-folder, $font-file-name, $font-weight, $font-style);
```

Writes `@font-face` rules. WOFF2, WOFF and TrueType files are automatically sourced.

| Parameter         | Type   | Default value | Description                                 |
| ----------------- | ------ | ------------- | ------------------------------------------- |
| `$font-name`      | String | -             | Name of the font e.g. Helvetica             |
| `$font-folder`    | String | -             | Font folder name.                           |
| `$font-file-name` | String | -             | Font file name, without the file extensions |
| `$font-weight`    | String | normal        | Font weight                                 |
| `$font-style`     | String | normal        | Font Style                                  |

## `heading-styles`

```scss
@include heading-styles($color, $font-family, $font-weight, $line-height);
```

Applies the heading styles.

| Parameter      | Type   | Default value             | Description         |
| -------------- | ------ | ------------------------- | ------------------- |
| `$color`       | Color  | `$g-headings-color`       | Heading color       |
| `$font-family` | String | `$g-headings-font-family` | Heading font family |
| `$font-weight` | Number | `$g-headings-font-weight` | Heading font weight |
| `$line-height` | Number | `$g-headings-line-height` | Heading line height |

## `img-fluid`

```scss
@include img-fluid;
```

Responsive image. Keep images from scaling beyond the width of their parents.

## `img-retina`

```scss
@include img-retina($image2x, $width2x, $height2x);
```

Retina image. Short retina mixin for setting background-image and -size.

| Parameter  | Type   | Default value | Description                               |
| ---------- | ------ | ------------- | ----------------------------------------- |
| `$file-2x` | String | -             | 2x Image url e.g 'img/logo-retina@2x.png' |
| `$width`   | Number | -             | Image 1x width                            |
| `$height`  | Number | -             | Image 1x height                           |

## `list-unstyled`

```scss
@include list-unstyled($padding-left, $margin-bottom);
```

Unstyled keeps list items block level, just removes default browser padding and list-style.

| Parameter        | Type   | Default value | Description         |
| ---------------- | ------ | ------------- | ------------------- |
| `$padding-left`  | Number | 0             | Padding left value  |
| `$margin-bottom` | Number | null          | Margin bottom value |

## `text-truncate`

```scss
@include text-truncate();
```

Text truncate. Requires inline-block or block for proper styling.

## `visually-hidden`

```scss
@include visually-hidden();
```

Hides content visually, but it will remain available to assistive technologies.

See:

- <https://a11yproject.com/posts/how-to-hide-content/>
- <https://hugogiraudel.com/2016/10/13/css-hide-and-seek/>
