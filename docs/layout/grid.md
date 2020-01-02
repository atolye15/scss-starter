---
id: grid
title: Grid
---

_Based on the [Bootstrap](https://getbootstrap.com/)'s grid system._

Use our powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks to a twelve column system, five default responsive tiers, Sass variables and mixins, and dozens of predefined classes.

## How it works

SCSS Starter&rsquor;s grid system uses a series of containers, rows, and columns to layout and align content. It’s built with flexbox and is fully responsive. Below is an example and an in-depth look at how the grid comes together.

<div class="grid-example">
  <div class="container">
    <div class="row">
      <div class="col col--sm">
        One of three columns
      </div>
      <div class="col col--sm">
        One of three columns
      </div>
      <div class="col col--sm">
        One of three columns
      </div>
    </div>
  </div>
</div>

```html
<div class="container">
  <div class="row">
    <div class="col col--sm">
      One of three columns
    </div>
    <div class="col col--sm">
      One of three columns
    </div>
    <div class="col col--sm">
      One of three columns
    </div>
  </div>
</div>
```

The above example creates three equal-width columns on small, medium, large, and extra large devices using our predefined grid classes. Those columns are centered in the page with the parent `.container`.

Breaking it down, here’s how it works:

- Containers provide a means to center and horizontally pad your site’s contents. Use .container for a responsive pixel width or `.container-fluid` for `width: 100%` across all viewport and device sizes.
- Rows are wrappers for columns. Each column has horizontal `padding` (called a gutter) for controlling the space between them. This `padding` is then counteracted on the rows with negative margins. This way, all the content in your columns is visually aligned down the left side.
- In a grid layout, content must be placed within columns and only columns may be immediate children of rows.
- Thanks to flexbox, grid columns without a specified `width` will automatically layout as equal width columns. For example, four instances of `.col--sm` will each automatically be 25% wide from the small breakpoint and up. See the [auto-layout columns]() section for more examples.
- Column classes indicate the number of columns you’d like to use out of the possible 12 per row. So, if you want three equal-width columns across, you can use `.col--xs-4`.
- Column `width`s are set in percentages, so they’re always fluid and sized relative to their parent element.
- Columns have horizontal `padding` to create the gutters between individual columns, however, you can remove the `margin` from rows and `padding` from columns with `.row--no-gutters` on the `.row`.
- To make the grid responsive, there are five grid breakpoints, one for each [responsive breakpoint](): all breakpoints (extra small), small, medium, large, and extra large.
- Grid breakpoints are based on minimum width media queries, meaning they apply to that one breakpoint and all those above it (e.g., `.col--sm-4` applies to small, medium, large, and extra large devices, but not the first xs breakpoint).
- You can use predefined grid classes (like `.col--xs-4`) or [Sass mixins]() for more semantic markup.

Be aware of the limitations and bugs around flexbox, like the inability to use some HTML elements as flex containers.

## Grid options

While SCSS Starter uses `em`s or `rem`s for defining most sizes, `px`s are used for grid breakpoints and container widths. This is because the viewport width is in pixels and does not change with the [font size](https://drafts.csswg.org/mediaqueries-3/#units).

See how aspects of the SCSS Starter grid system work across multiple devices with a handy table.

<table>
  <thead>
    <tr class="u-text-align-center">
      <th></th>
      <th>Extra small <span class="table-subhead">&lt;576px</span></th>
      <th>Small <span class="table-subhead">&GreaterEqual;576px</span></th>
      <th>Medium <span class="table-subhead">&GreaterEqual;768px</span></th>
      <th>Large <span class="table-subhead">&GreaterEqual;992px</span></th>
      <th>Extra large <span class="table-subhead">&GreaterEqual;1200px</span></th>
    <tr>
  </thead>
  <tbody>
    <tr class="u-white-space-nowrap">
      <td>Max container width</td>
      <td>None (auto)</td>
      <td>540px</td>
      <td>720px</td>
      <td>960px</td>
      <td>1140px</td>
    </tr>
    <tr class="u-white-space-nowrap">
      <td>Class prefix</td>
      <td><code>.col--xs-</code></td>
      <td><code>.col--sm-</code></td>
      <td><code>.col--md-</code></td>
      <td><code>.col--lg-</code></td>
      <td><code>.col--xl-</code></td>
    </tr>
    <tr>
      <td># of columns</td>
      <td colspan="5">12</td>
    </tr>
    <tr>
      <td>Gutter width</td>
      <td colspan="5">32px (16px on each side of a column)</td>
    </tr>
    <tr>
      <td>Nestable</td>
      <td colspan="5">Yes</td>
    </tr>
    <tr>
      <td>Column ordering</td>
      <td colspan="5">Yes (with the utility classes)</td>
    </tr>
  </tbody>
</table>

## Auto-layout columns

Utilize breakpoint-specific column classes for easy column sizing without an explicit numbered class like `.col--sm-6`.

### Equal-width

For example, here are two grid layouts that apply to every device and viewport, from `xs` to `xl`. Add any number of unit-less classes for each breakpoint you need and every column will be the same width

<div class="grid-example">
  <div class="container">
    <div class="row">
      <div class="col col--xs">
        1 of 2
      </div>
      <div class="col col--xs">
        2 of 2
      </div>
    </div>
    <div class="row">
      <div class="col col--xs">
        1 of 3
      </div>
      <div class="col col--xs">
        2 of 3
      </div>
      <div class="col col--xs">
        3 of 3
      </div>
    </div>
  </div>
</div>

```html
<div class="container">
  <div class="row">
    <div class="col col--xs">
      1 of 2
    </div>
    <div class="col col--xs">
      2 of 2
    </div>
  </div>
  <div class="row">
    <div class="col col--xs">
      1 of 3
    </div>
    <div class="col col--xs">
      2 of 3
    </div>
    <div class="col col--xs">
      3 of 3
    </div>
  </div>
</div>
```

### Setting one column width

Auto-layout for flexbox grid columns also means you can set the width of one column and have the sibling columns automatically resize around it. You may use predefined utility classes (as shown below), grid mixins, or inline widths. Note that the other columns will resize no matter the width of the center column.

<div class="grid-example">
  <div class="container">
    <div class="row">
      <div class="col col--xs">
        1 of 3
      </div>
      <div class="col col--xs-6">
        2 of 3 (wider)
      </div>
      <div class="col col--xs">
        3 of 3
      </div>
    </div>
    <div class="row">
      <div class="col col--xs">
        1 of 3
      </div>
      <div class="col col--xs-5">
        2 of 3 (wider)
      </div>
      <div class="col col--xs">
        3 of 3
      </div>
    </div>
  </div>
</div>

```html
<div class="container">
  <div class="row">
    <div class="col col--xs">
      1 of 3
    </div>
    <div class="col col--xs-6">
      2 of 3 (wider)
    </div>
    <div class="col col--xs">
      3 of 3
    </div>
  </div>
  <div class="row">
    <div class="col col--xs">
      1 of 3
    </div>
    <div class="col col--xs-5">
      2 of 3 (wider)
    </div>
    <div class="col col--xs">
      3 of 3
    </div>
  </div>
</div>
```

### Variable width content

Use `u-width-auto@{breakpoint}-{down|up}` utility classes to size columns based on the natural width of their content.

<div class="grid-example">
  <div class="container">
    <div class="row u-justify-content-center">
      <div class="col col--lg-2">
        1 of 3
      </div>
      <div class="col u-width-auto@md-up">
        Variable width content
      </div>
      <div class="col col--lg-2">
        3 of 3
      </div>
    </div>
    <div class="row">
      <div class="col col--xs">
        1 of 3
      </div>
      <div class="col u-width-auto@md-up">
        Variable width content
      </div>
      <div class="col col--lg-2">
        3 of 3
      </div>
    </div>
  </div>
</div>

```html
<div class="container">
  <div class="row u-justify-content-center">
    <div class="col col--lg-2">
      1 of 3
    </div>
    <div class="col u-width-auto@md-up">
      Variable width content
    </div>
    <div class="col col--lg-2">
      3 of 3
    </div>
  </div>
  <div class="row">
    <div class="col col--xs">
      1 of 3
    </div>
    <div class="col u-width-auto@md-up">
      Variable width content
    </div>
    <div class="col col--lg-2">
      3 of 3
    </div>
  </div>
</div>
```

## Responsive classes

SCSS Starter’s grid includes five tiers of predefined classes for building complex responsive layouts. Customize the size of your columns on extra small, small, medium, large, or extra large devices however you see fit.

### All breakpoints

For grids that are the same from the smallest of devices to the largest, use the `.col--xs` and `.col--xs-*` classes. Specify a numbered class when you need a particularly sized column; otherwise, feel free to stick to `.col--xs`.

<div class="grid-example">
  <div class="container">
    <div class="row">
      <div class="col col--xs">col--xs</div>
      <div class="col col--xs">col--xs</div>
      <div class="col col--xs">col--xs</div>
      <div class="col col--xs">col--xs</div>
    </div>
    <div class="row">
      <div class="col col--xs-8">col--xs-8</div>
      <div class="col col--xs-4">col--xs-4</div>
    </div>
  </div>
</div>

```html
<div class="container">
  <div class="row">
    <div class="col col--xs">col--xs</div>
    <div class="col col--xs">col--xs</div>
    <div class="col col--xs">col--xs</div>
    <div class="col col--xs">col--xs</div>
  </div>
  <div class="row">
    <div class="col col--xs-8">col--xs-8</div>
    <div class="col col--xs-4">col--xs-4</div>
  </div>
</div>
```

### Stacked to horizontal

Using a single set of `.col--sm-*` classes, you can create a basic grid system that starts out stacked and becomes horizontal at the small breakpoint (`sm`).

<div class="grid-example">
  <div class="container">
    <div class="row">
      <div class="col col--sm-8">col--sm-8</div>
      <div class="col col--sm-4">col--sm-4</div>
    </div>
    <div class="row">
      <div class="col col--sm">col--sm</div>
      <div class="col col--sm">col--sm</div>
      <div class="col col--sm">col--sm</div>
    </div>
  </div>
</div>

```html
<div class="container">
  <div class="row">
    <div class="col col--sm-8">col--sm-8</div>
    <div class="col col--sm-4">col--sm-4</div>
  </div>
  <div class="row">
    <div class="col col--sm">col--sm</div>
    <div class="col col--sm">col--sm</div>
    <div class="col col--sm">col--sm</div>
  </div>
</div>
```

### Mix and match

Don’t want your columns to simply stack in some grid tiers? Use a combination of different classes for each tier as needed. See the example below for a better idea of how it all works.

<div class="grid-example">
  <div class="container">
    <div class="row">
      <div class="col col--md-8">.col--md-8</div>
      <div class="col col--xs-6 col--md-4">.col--xs-6 .col--md-4</div>
    </div>
    <div class="row">
      <div class="col col--xs-6 col--md-4">.col--xs-6 .col--md-4</div>
      <div class="col col--xs-6 col--md-4">.col--xs-6 .col--md-4</div>
      <div class="col col--xs-6 col--md-4">.col--xs-6 .col--md-4</div>
    </div>
    <div class="row">
      <div class="col col--xs-6">.col--xs-6</div>
      <div class="col col--xs-6">.col--xs-6</div>
    </div>
  </div>
</div>

```html
<div class="container">
  <!-- Stack the columns on mobile by making one full-width and the other half-width -->
  <div class="row">
    <div class="col col--md-8">.col--md-8</div>
    <div class="col col--xs-6 col--md-4">.col--xs-6 .col--md-4</div>
  </div>

  <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
  <div class="row">
    <div class="col--xs-6 col--md-4">.col--xs-6 .col--md-4</div>
    <div class="col--xs-6 col--md-4">.col--xs-6 .col--md-4</div>
    <div class="col--xs-6 col--md-4">.col--xs-6 .col--md-4</div>
  </div>

  <!-- Columns are always 50% wide, on mobile and desktop -->
  <div class="row">
    <div class="col--xs-6">.col--xs-6</div>
    <div class="col--xs-6">.col--xs-6</div>
  </div>
</div>
```

## Alignment

Use flexbox alignment utilities to vertically and horizontally align columns.

### Vertical alignment

<div class="grid-example grid-example--vertical-alignment">
  <div class="container">
    <div class="row u-align-items-flex-start">
      <div class="col col--xs">
        One of three columns
      </div>
      <div class="col col--xs">
        One of three columns
      </div>
      <div class="col col--xs">
        One of three columns
      </div>
    </div>
    <div class="row u-align-items-center">
      <div class="col col--xs">
        One of three columns
      </div>
      <div class="col col--xs">
        One of three columns
      </div>
      <div class="col col--xs">
        One of three columns
      </div>
    </div>
    <div class="row u-align-items-flex-end">
      <div class="col col--xs">
        One of three columns
      </div>
      <div class="col col--xs">
        One of three columns
      </div>
      <div class="col col--xs">
        One of three columns
      </div>
    </div>
  </div>
</div>

```html
<div class="container">
  <div class="row u-align-items-flex-start">
    <div class="col col--xs">
      One of three columns
    </div>
    <div class="col col--xs">
      One of three columns
    </div>
    <div class="col col--xs">
      One of three columns
    </div>
  </div>
  <div class="row u-align-items-center">
    <div class="col col--xs">
      One of three columns
    </div>
    <div class="col col--xs">
      One of three columns
    </div>
    <div class="col col--xs">
      One of three columns
    </div>
  </div>
  <div class="row u-align-items-flex-end">
    <div class="col col--xs">
      One of three columns
    </div>
    <div class="col col--xs">
      One of three columns
    </div>
    <div class="col col--xs">
      One of three columns
    </div>
  </div>
</div>
```

<div class="grid-example grid-example--vertical-alignment">
  <div class="container">
    <div class="row">
      <div class="col col--xs u-align-self-flex-start">
        One of three columns
      </div>
      <div class="col col--xs u-align-self-center">
        One of three columns
      </div>
      <div class="col col--xs u-align-self-flex-end">
        One of three columns
      </div>
    </div>
  </div>
</div>

```html
<div class="container">
  <div class="row">
    <div class="col col--xs u-align-self-flex-start">
      One of three columns
    </div>
    <div class="col col--xs u-align-self-center">
      One of three columns
    </div>
    <div class="col col--xs u-align-self-flex-end">
      One of three columns
    </div>
  </div>
</div>
```

### Horizontal alignment

<div class="grid-example">
  <div class="container">
    <div class="row u-justify-content-flex-start">
      <div class="col col--xs-4">
        One of two columns
      </div>
      <div class="col col--xs-4">
        One of two columns
      </div>
    </div>
    <div class="row u-justify-content-center">
      <div class="col col--xs-4">
        One of two columns
      </div>
      <div class="col col--xs-4">
        One of two columns
      </div>
    </div>
    <div class="row u-justify-content-flex-end">
      <div class="col col--xs-4">
        One of two columns
      </div>
      <div class="col col--xs-4">
        One of two columns
      </div>
    </div>
    <div class="row u-justify-content-space-around">
      <div class="col col--xs-4">
        One of two columns
      </div>
      <div class="col col--xs-4">
        One of two columns
      </div>
    </div>
    <div class="row u-justify-content-space-between">
      <div class="col col--xs-4">
        One of two columns
      </div>
      <div class="col col--xs-4">
        One of two columns
      </div>
    </div>
  </div>
</div>

```html
<div class="container">
  <div class="row u-justify-content-flex-start">
    <div class="col col--xs-4">
      One of two columns
    </div>
    <div class="col col--xs-4">
      One of two columns
    </div>
  </div>
  <div class="row u-justify-content-center">
    <div class="col col--xs-4">
      One of two columns
    </div>
    <div class="col col--xs-4">
      One of two columns
    </div>
  </div>
  <div class="row u-justify-content-flex-end">
    <div class="col col--xs-4">
      One of two columns
    </div>
    <div class="col col--xs-4">
      One of two columns
    </div>
  </div>
  <div class="row u-justify-content-space-around">
    <div class="col col--xs-4">
      One of two columns
    </div>
    <div class="col col--xs-4">
      One of two columns
    </div>
  </div>
  <div class="row u-justify-content-space-between">
    <div class="col col--xs-4">
      One of two columns
    </div>
    <div class="col col--xs-4">
      One of two columns
    </div>
  </div>
</div>
```

### No gutters

The gutters between columns in our predefined grid classes can be removed with `.row--no-gutters`. This removes the negative margins from `.row` and the horizontal padding from all immediate children columns.

Here’s the source code for creating these styles. Note that column overrides are scoped to only the first children columns. While this generates a more specific selector, column padding can still be further customized with [spacing utilities](utilities/predefined-classes.md#spacing).

Need an edge-to-edge design? Drop the parent `.container` or `.container-fluid`.

```scss
.row--no-gutters {
  margin-right: 0;
  margin-left: 0;

  > .col {
    padding-right: 0;
    padding-left: 0;
  }
}
```

In practice, here’s how it looks. Note you can continue to use this with all other predefined grid classes (including column widths, responsive tiers, reorders, and more).

<div class="grid-example">
  <div class="row row--no-gutters">
    <div class="col col--sm-6 col--md-8">.col--sm-6 .col--md-8</div>
    <div class="col col--xs-6 col--md-4">.col--xs-6 .col--md-4</div>
  </div>
</div>

```html
<div class="row row--no-gutters">
  <div class="col col--sm-6 col--md-8">.col--sm-6 .col--md-8</div>
  <div class="col col--xs-6 col--md-4">.col--xs-6 .col--md-4</div>
</div>
```

### Column wrapping

If more than 12 columns are placed within a single row, each group of extra columns will, as one unit, wrap onto a new line.

<div class="grid-example">
  <div class="container">
    <div class="row">
      <div class="col col--xs-9">.col--xs-9</div>
      <div class="col col--xs-4">.col--xs-4<br>Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.</div>
      <div class="col col--xs-6">.col--xs-6<br>Subsequent columns continue along the new line.</div>
    </div>
  </div>
</div>

```html
<div class="container">
  <div class="row">
    <div class="col col--xs-9">.col--xs-9</div>
    <div class="col col--xs-4">
      .col--xs-4<br />Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new line
      as one contiguous unit.
    </div>
    <div class="col col--xs-6">.col--xs-6<br />Subsequent columns continue along the new line.</div>
  </div>
</div>
```

### Column breaks

Breaking columns to a new line in flexbox requires a small hack: add an element with `width: 100%` wherever you want to wrap your columns to a new line. Normally this is accomplished with multiple `.row`s, but not every implementation method can account for this.

<div class="grid-example">
  <div class="container">
    <div class="row">
      <div class="col col--xs-6 col--sm-3">.col--xs-6 .col--sm-3</div>
      <div class="col col--xs-6 col--sm-3">.col--xs-6 .col--sm-3</div>
      <div class="u-width-100%"></div>
      <div class="col col--xs-6 col--sm-3">.col--xs-6 .col--sm-3</div>
      <div class="col col--xs-6 col--sm-3">.col--xs-6 .col--sm-3</div>
    </div>
  </div>
</div>

```html
<div class="container">
  <div class="row">
    <div class="col col--xs-6 col--sm-3">.col--xs-6 .col--sm-3</div>
    <div class="col col--xs-6 col--sm-3">.col--xs-6 .col--sm-3</div>

    <!-- Force next columns to break to new line -->
    <div class="u-width-100%"></div>

    <div class="col col--xs-6 col--sm-3">.col--xs-6 .col--sm-3</div>
    <div class="col col--xs-6 col--sm-3">.col--xs-6 .col--sm-3</div>
  </div>
</div>
```

You may also apply this break at specific breakpoints with our responsive display utilities.

<div class="grid-example">
  <div class="container">
    <div class="row">
      <div class="col col--xs-6 col--sm-4">.col--xs-6 .col--sm-4</div>
      <div class="col col--xs-6 col--sm-4">.col--xs-6 .col--sm-4</div>
      <div class="u-width-100% u-display-none@sm-down"></div>
      <div class="col col--xs-6 col--sm-4">.col--xs-6 .col--sm-4</div>
      <div class="col col--xs-6 col--sm-4">.col--xs-6 .col--sm-4</div>
    </div>
  </div>
</div>

```html
<div class="container">
  <div class="row">
    <div class="col col--xs-6 col--sm-4">.col--xs-6 .col--sm-4</div>
    <div class="col col--xs-6 col--sm-4">.col--xs-6 .col--sm-4</div>

    <!-- Force next columns to break to new line at md breakpoint and up -->
    <div class="u-width-100% u-display-none@sm-down"></div>

    <div class="col col--xs-6 col--sm-4">.col--xs-6 .col--sm-4</div>
    <div class="col col--xs-6 col--sm-4">.col--xs-6 .col--sm-4</div>
  </div>
</div>
```

## Offsetting columns

You can offset grid columns in two ways: our responsive `.col--offset-` grid classes and our [margin utilities](utilities/predefined-classes.md#spacing). Grid classes are sized to match columns while margins are more useful for quick layouts where the width of the offset is variable.

### Offset classes

Move columns to the right using `.col--offset-md-*` classes. These classes increase the left margin of a column by `*` columns. For example, `.col--offset-md-4` moves `.col--md-4` over four columns.

<div class="grid-example">
  <div class="container">
    <div class="row">
      <div class="col col--md-4">.col--md-4</div>
      <div class="col col--md-4 col--offset-md-4">.col--md-4 .col--offset-md-4</div>
    </div>
    <div class="row">
      <div class="col col--md-3 col--offset-md-3">.col--md-3 .col--offset-md-3</div>
      <div class="col col--md-3 col--offset-md-3">.col--md-3 .col--offset-md-3</div>
    </div>
    <div class="row">
      <div class="col col--md-6 col--offset-md-3">.col-md-6 .col--offset-md-3</div>
    </div>
  </div>
</div>

```html
<div class="container">
  <div class="row">
    <div class="col col--md-4">.col--md-4</div>
    <div class="col col--md-4 col--offset-md-4">.col--md-4 .col--offset-md-4</div>
  </div>
  <div class="row">
    <div class="col col--md-3 col--offset-md-3">.col--md-3 .col--offset-md-3</div>
    <div class="col col--md-3 col--offset-md-3">.col--md-3 .col--offset-md-3</div>
  </div>
  <div class="row">
    <div class="col col--md-6 col--offset-md-3">.col-md-6 .col--offset-md-3</div>
  </div>
</div>
```

In addition to column clearing at responsive breakpoints, you may need to reset offsets.

<div class="grid-example">
  <div class="container">
    <div class="row">
      <div class="col col--sm-5 col--md-6">.col--sm-5 .col--md-6</div>
      <div class="col col--sm-5 col--offset-sm-2 col--md-6 col--offset-md-0">
        .col--sm-5 .col--offset-sm-2 .col--md-6 .col--offset-md-0
      </div>
    </div>
    <div class="row">
      <div class="col col--sm-6 col--md-5 col--lg-6">.col--sm-6 .col--md-5 .col--lg-6</div>
      <div class="col col--sm-6 col--md-5 col--offset-md-2 col--lg-6 col--offset-lg-0">
        .col--sm-6 .col--md-5 .col--offset-md-2 .col--lg-6 .col--offset-lg-0
      </div>
    </div>
  </div>
</div>

```html
<div class="container">
  <div class="row">
    <div class="col col--sm-5 col--md-6">.col--sm-5 .col--md-6</div>
    <div class="col col--sm-5 col--offset-sm-2 col--md-6 col--offset-md-0">
      .col--sm-5 .col--offset-sm-2 .col--md-6 .col--offset-md-0
    </div>
  </div>
  <div class="row">
    <div class="col col--sm-6 col--md-5 col--lg-6">.col--sm-6 .col--md-5 .col--lg-6</div>
    <div class="col col--sm-6 col--md-5 col--offset-md-2 col--lg-6 col--offset-lg-0">
      .col--sm-6 .col--md-5 .col--offset-md-2 .col--lg-6 .col--offset-lg-0
    </div>
  </div>
</div>
```

### Margin utilities

You can use [margin utilities](utilities/predefined-classes.md#spacing) like `.u-margin-right-auto` to force sibling columns away from one another.

<div class="grid-example">
  <div class="container">
    <div class="row">
      <div class="col col--md-4">.col--md-4</div>
      <div class="col col--md-4 u-margin-left-auto">.col--md-4 .u-margin-left-auto</div>
    </div>
    <div class="row">
      <div class="col col--md-3 u-margin-left-auto@md-up">.col--md-3 .u-margin-left-auto@md-up</div>
      <div class="col col--md-3 u-margin-left-auto@md-up">.col--md-3 .u-margin-left-auto@md-up</div>
    </div>
    <div class="row">
      <div class="col u-width-auto u-margin-right-auto">.u-width-auto .u-margin-right-auto</div>
      <div class="col u-width-auto">.u-width-auto</div>
    </div>
  </div>
</div>

```html
<div class="container">
  <div class="row">
    <div class="col col--md-4">.col--md-4</div>
    <div class="col col--md-4 u-margin-left-auto">.col--md-4 .u-margin-left-auto</div>
  </div>
  <div class="row">
    <div class="col col--md-3 u-margin-left-auto@md-up">.col--md-3 .u-margin-left-auto@md-up</div>
    <div class="col col--md-3 u-margin-left-auto@md-up">.col--md-3 .u-margin-left-auto@md-up</div>
  </div>
  <div class="row">
    <div class="col u-width-auto u-margin-right-auto">.u-width-auto .u-margin-right-auto</div>
    <div class="col u-width-auto">.u-width-auto</div>
  </div>
</div>
```

## Nesting

To nest your content with the default grid, add a new `.row` and set of `.col--sm-*` columns within an existing `.col--sm-*` column. Nested rows should include a set of columns that add up to 12 or fewer (it is not required that you use all 12 available columns).

<div class="grid-example">
  <div class="container">
    <div class="row">
      <div class="col col--sm-9">
        Level 1: .col--sm-9
        <div class="row">
          <div class="col col--xs-8 col--sm-6">
            Level 2: .col--xs-8 .col--sm-6
          </div>
          <div class="col col--xs-4 col--sm-6">
            Level 2: .col--xs-4 .col--sm-6
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

```html
<div class="container">
  <div class="row">
    <div class="col col--sm-9">
      Level 1: .col--sm-9
      <div class="row">
        <div class="col col--xs-8 col--sm-6">
          Level 2: .col--xs-8 .col--sm-6
        </div>
        <div class="col col--xs-4 col--sm-6">
          Level 2: .col--xs-4 .col--sm-6
        </div>
      </div>
    </div>
  </div>
</div>
```

## Sass mixins

When using SCSS Starter’s source Sass files, you have the option of using Sass variables and mixins to create custom, semantic, and responsive page layouts. Our predefined grid classes use these same variables and mixins to provide a whole suite of ready-to-use classes for fast responsive layouts.

### Variables

Variables and maps determine the number of columns, the gutter width, and the media query point at which to begin floating columns. We use these to generate the predefined grid classes documented above, as well as for the custom mixins listed below. See the [customizing the grid](#customizing-the-grid) section for customizing these variables.

#### `$grid-breakpoints`

The grid breakpoints.

- `xs`: Extra small screen / phone
- `sm`: Small screen / phone
- `md`: Medium screen / tablet
- `lg`: Large screen / desktop
- `xl`: Extra large screen / wide desktop

The breakpoint values are used to determine breakpoint ranges. A range starts from the breakpoint value inclusive, to the next breakpoint value exclusive:

```text
value         |0px     544px    768px    992px    1200px
key           |xs      sm       md       lg       xl
screen width  |--------|--------|--------|--------|-------->
range         |   xs   |   sm   |   md   |   lg   |   xl
```

```scss
// abstracts/_variables.scss

$grid-breakpoints: (
  xs: 0,
  sm: 544px,
  md: 768px,
  lg: 992px,
  xl: 1200px,
) !default;
```

#### `$container-max-widths`

The maximum width of a grid container.

```scss
// abstracts/_variables.scss

$container-max-widths: (
  sm: 576px,
  md: 720px,
  lg: 940px,
  xl: 1140px,
) !default;
```

#### `$grid-columns`

The number of columns used in the grid.

```scss
// abstracts/_variables.scss

$grid-columns: 12 !default;
```

#### `$grid-gutter-width`

The amount of gap between cells at different screen sizes.

```scss
// abstracts/_variables.scss

$grid-gutter-width: px-to-rem(32px) !default;
```

### Mixins

Mixins are used in conjunction with the grid variables to generate semantic CSS for individual grid columns.

#### `make-grid-container`

```scss
@include make-grid-container($gutter);
```

Applies the container styles.

| Parameter | Type   | Default value        | Description  |
| --------- | ------ | -------------------- | ------------ |
| `$gutter` | Number | `$grid-gutter-width` | Gutter width |

#### `make-grid-container-max-widths`

```scss
@include make-grid-container-max-widths($max-widths, $breakpoints);
```

Applies the container `max-width` styles.

| Parameter      | Type | Default value           | Description          |
| -------------- | ---- | ----------------------- | -------------------- |
| `$max-widths`  | Map  | `$container-max-widths` | Container max widths |
| `$breakpoints` | Map  | `$grid-breakpoints`     | Grid breakpoints     |

#### `make-grid-row`

```scss
@include make-grid-row($gutter);
```

Applies the row styles.

| Parameter | Type   | Default value        | Description  |
| --------- | ------ | -------------------- | ------------ |
| `$gutter` | Number | `$grid-gutter-width` | Gutter width |

#### `make-grid-col-ready`

```scss
@include make-grid-col-ready($gutter);
```

Applies the common column styles.

| Parameter | Type   | Default value        | Description  |
| --------- | ------ | -------------------- | ------------ |
| `$gutter` | Number | `$grid-gutter-width` | Gutter width |

#### `make-grid-col`

```scss
@include make-grid-col($size, $columns: $grid-columns, $gutter);
```

Applies the column styles.

| Parameter  | Type   | Default value        | Description           |
| ---------- | ------ | -------------------- | --------------------- |
| `$size`    | Number | -                    | Column size           |
| `$columns` | Number | `$grid-columns`      | Number of the columns |
| `$gutter`  | Number | `$grid-gutter-width` | Gutter width          |

#### `make-grid-col-offset`

```scss
@include make-grid-col-offset($size, $columns);
```

Applies the column offset styles.

| Parameter  | Type   | Default value   | Description           |
| ---------- | ------ | --------------- | --------------------- |
| `$size`    | Number | -               | Column size           |
| `$columns` | Number | `$grid-columns` | Number of the columns |

### Example usage

You can modify the variables to your own custom values, or just use the mixins with their default values. Here’s an example of using the default settings to create a two-column layout with a gap between.

```scss
.example-container {
  @include make-grid-container();
  max-width: 800px;
}

.example-row {
  @include make-grid-row();
}

.example-content-main {
  @include make-grid-col-ready();

  @include media-breakpoint-up(sm) {
    @include make-grid-col(6);
  }

  @include media-breakpoint-up(lg) {
    @include make-grid-col(8);
  }
}

.example-content-secondary {
  @include make-grid-col-ready();

  @include media-breakpoint-up(sm) {
    @include make-grid-col(6);
  }

  @include media-breakpoint-up(lg) {
    @include make-grid-col(4);
  }
}
```

<div class="grid-example">
  <div class="example-container">
    <div class="example-row">
      <div class="example-content-main">Main content</div>
      <div class="example-content-secondary">Secondary content</div>
    </div>
  </div>
</div>

```html
<div class="example-container">
  <div class="example-row">
    <div class="example-content-main">Main content</div>
    <div class="example-content-secondary">Secondary content</div>
  </div>
</div>
```

## Customizing the grid

Using our built-in grid Sass variables and maps, it’s possible to completely customize the predefined grid classes. You are free to change the number of tiers, the media query dimensions, and the container widths. You can find the Sass variables in `abstracts/_variables.scss`.

### Columns and gutters

The number of grid columns can be modified via Sass variables. `$grid-columns` is used to generate the widths (in percent) of each individual column while `$grid-gutter-width` sets the width for the column gutters.

### Grid tiers

Moving beyond the columns themselves, you may also customize the number of grid tiers. If you wanted just four grid tiers, you’d update the `$grid-breakpoints` and `$container-max-widths` to something like this:

```scss
$grid-breakpoints: (
  xs: 0,
  sm: 480px,
  md: 768px,
  lg: 1024px,
);

$container-max-widths: (
  sm: 420px,
  md: 720px,
  lg: 960px,
);
```

Responsive visibility utilities will also be updated to use the custom breakpoints. Make sure to set grid values in `px` (not `rem`, `em`, or `%`).
