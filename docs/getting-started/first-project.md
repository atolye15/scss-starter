---
id: first-project
title: Your First Project
---

Welcome to SCSS Starter.

This tutorial introduces you to the essentials of SCSS Starter by walking you through building a simple card.

> New To Web Development?<br><br>
> There are many resources to complement the SCSS Starter docs. Mozilla's MDN docs includes comprehensive [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) documentation and Get BEM docs includes an introduction to [BEM](http://getbem.com/introduction/).

## Setup

To get started with SCSS Starter please read the [download](download.md) documentation. In order to start, please copy the `scss` folder into your own development environment.

> The methods we mention in this documentation are based on [Atölye15](https://www.atolye15.com/)'s own experiences over the years. These methods are rather obligations but more of suggestions. You may follow your own ways.

## Setting Up Global Variables

You need to set up your global variables prior to starting the project based on your design's needs.

### Colors

> Please refer to [colors](core/colors.md) page for further explanation.

In order to create your card component, you should start by adding the colors to your `abstracts/_colors.scss` file.

1. Set the primary color variable.

```scss
$color-palette-primary: (
  50: #e8eaf6,
  100: #c5cae9,
  200: #9fa8da,
  300: #7986cb,
  400: #5c6bc0,
  500: #3f51b5,
  600: #3949ab,
  700: #303f9f,
  800: #283593,
  900: #1a237e,
);
```

2. To make the newly set color palette avaiable you need to use `color-palette` function. For that add `$color-palette-primary` map variable into `$g-color-palettes` map variable.

```scss
$g-color-palettes: (
  'gray': $color-palette-gray,
  'primary': $color-palette-primary,
);
```

3. You can now set the global color settings based on the project's needs.

```scss
$g-body-bg: color-palette('gray', 50) !default;
```

### Typography

#### Adding Fonts

To add a different font file to your project you should use `font-face` mixin in `base/_fonts.scss` file.

```scss
@include font-face('Roboto', 'Roboto', 'Roboto-Medium', 500);
@include font-face('Roboto', 'Roboto', 'Roboto-MediumItalic', 500, italic);
```

#### Setting Variables

1. Set your font family variable by equaling your font name to `$g-font-family-primary` variable. Then add `$g-font-family-primary` variable to `$g-font-family-sans-serif` as the first value.

```scss
$g-font-family-primary: 'Roboto';
$g-font-family-sans-serif: $g-font-family-primary, 'Helvetica Neue', Helvetica, Arial, sans-serif !default;
```

> The `$g-font-family-sans-serif` variable sets body's font family.

2. Font sizes are customizable but for the sake of example, we are choosing not to.

```scss
$g-font-size-h1: px-to-rem(36px) !default;
$g-font-size-h2: px-to-rem(30px) !default;
$g-font-size-h3: px-to-rem(24px) !default;
$g-font-size-h4: px-to-rem(18px) !default;
$g-font-size-h5: 1rem !default;
$g-font-size-h6: px-to-rem(14px) !default;
```

3. Other heading variables are also customizable.

```scss
$g-headings-font-family: inherit !default;
$g-headings-font-weight: 500 !default;
$g-headings-line-height: 1.1 !default;
$g-headings-margin-bottom: 1rem !default;
```

> Headings and other HTML elements can be customized on `base/_base.scss` file. (For example: You can use customization as shown here to set different line-height values for each heading tags. )

4. Global margin(`$g-gaps`) and padding(`$g-pads`) variables can be customized or increased based on the design's needs. (2xlarge value is added to the map.)

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
  2xlarge: (
    $g-base-gap * 4,
  ),
);
```

> When adding a new margin or padding value, please ensure that it's a children of `$g-base-gap` variable.

## Creating A Component

Start developing components after setting the global variables.

> The following steps use predefined card component from the `c-card.scss` file.

1. Create a folder `c-card` in the components folder and open the scss file `c-card.scss`.
2. Develop the card component as shown below.

```html
<div class="c-card">
  <div class="c-card__header">
    This is a header
  </div>
  <img src="https://via.placeholder.com/150" alt="Placeholder" class="c-card__image" />
  <div class="c-card__content">
    <h4 class="u-margin-top-0 u-margin-bottom-xsmall">This is a card.</h4>
    <p class="u-margin-bottom-0">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum eveniet illum aut harum ullam
      dolore repudiandae pariatur optio exercitationem.
    </p>
  </div>
</div>
```

> Since we don't want the tags on **card content** element to be dependent to **the card component**, we have cleared default margins of `h4` and `p` tags by using utility classes. On the case of not using utility classes; we would need to add `c-card__title` class to `h4` element and `c-card__text` class to `p` element.

> By using utility classes there would be no need of creating new class names and it helps the construction to be more flexible.

```scss
.c-card {
  background-color: $color-white;
  border-radius: px-to-rem(4px);
  box-shadow: px-to-rem(2px) px-to-rem(2px) px-to-rem(16px) rgba($color-black, 0.4);

  &__header {
    padding: pad(xsmall);
    border-bottom: 1px solid color-palette('gray', 100);
  }

  &__image {
    width: 100%;
    height: auto;
  }

  &__content {
    padding: pad(xsmall);
  }
}
```

Result:

<div class="layout">
  <div class="c-example-card">
    <div class="c-example-card__header">
      This is a header 
    </div>
    <img src="https://via.placeholder.com/150" alt="" class="c-example-card__image">
    <div class="c-example-card__content">
      <h4 class="u-margin-top-0 u-margin-bottom-xsmall">This is a card.</h4>
      <p class="u-margin-bottom-0">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum eveniet illum aut harum ullam dolore repudiandae pariatur optio exercitationem.</p>
    </div>
  </div>
</div>

## Grid Layout In Action

The developed component can be used on the page along with the grid layout.

```html
<div class="u-padding-bottom-small">
  <div class="container">
    <div class="row">
      <div class="col col--lg-4 u-margin-top@md-up u-margin-top-xsmall@sm-down">
        <div class="c-card">...</div>
      </div>
      <div class="col col--lg-4 u-margin-top@md-up u-margin-top-xsmall@sm-down">
        <div class="c-card">...</div>
      </div>
      <div class="col col--lg-4 u-margin-top@md-up u-margin-top-xsmall@sm-down">
        <div class="c-card">...</div>
      </div>
    </div>
  </div>
</div>
```

<div class="u-padding-bottom-small">
  <div class="container">
    <div class="row">
      <div class="col col--lg-4">
        <div class="c-example-card">
          <div class="c-example-card__header">
            This is a header
          </div>
          <img src="https://via.placeholder.com/150" alt="" class="c-example-card__image" />
          <div class="c-example-card__content">
            <h4 class="u-margin-top-0 u-margin-bottom-xsmall">This is a card.</h4>
            <p class="u-margin-bottom-0">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum eveniet illum aut
              harum ullam dolore repudiandae pariatur optio exercitationem.
            </p>
          </div>
        </div>
      </div>
      <div class="col col--lg-4">
        <div class="c-example-card">
          <div class="c-example-card__header">
            This is a header
          </div>
          <img src="https://via.placeholder.com/150" alt="" class="c-example-card__image" />
          <div class="c-example-card__content">
            <h4 class="u-margin-top-0 u-margin-bottom-xsmall">This is a card.</h4>
            <p class="u-margin-bottom-0">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum eveniet illum aut
              harum ullam dolore repudiandae pariatur optio exercitationem.
            </p>
          </div>
        </div>
      </div>
      <div class="col col--lg-4">
        <div class="c-example-card">
          <div class="c-example-card__header">
            This is a header
          </div>
          <img src="https://via.placeholder.com/150" alt="" class="c-example-card__image" />
          <div class="c-example-card__content">
            <h4 class="u-margin-top-0 u-margin-bottom-xsmall">This is a card.</h4>
            <p class="u-margin-bottom-0">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum eveniet illum aut
              harum ullam dolore repudiandae pariatur optio exercitationem.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

> Please refer to [responsive utilities](utilities/responsive.md) page for learning more about responsive utilities. And refer to [grid](layout/grid.md) page for the grid system usage.

## Making A Component Responsive

The component has been made responsive by adding responsive functions to the component layer.

```scss
.c-card {
  background-color: $color-white;
  border-radius: px-to-rem(4px);
  box-shadow: px-to-rem(2px) px-to-rem(2px) px-to-rem(16px) rgba($color-black, 0.4);

  @include media-brekpoint-down(md) {
    display: flex;
    flex-direction: row;
  }

  &__header {
    padding: pad(xsmall);
    border-bottom: 1px solid color-palette('gray', 100);

    @include media-breakpoint-down(md) {
      display: none;
    }
  }

  &__image {
    width: 100%;
    height: auto;
  }

  &__content {
    padding: pad(xsmall);
  }
}
```

<div class="c-example-card c-example-card--mobile">
  <div class="c-example-card__header">
    This is a header
  </div>
  <img src="https://via.placeholder.com/150" alt="" class="c-example-card__image" />
  <div class="c-example-card__content">
    <h4 class="u-margin-top-0 u-margin-bottom-xsmall">This is a card.</h4>
    <p class="u-margin-bottom-0">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum eveniet illum aut
      harum ullam dolore repudiandae pariatur optio exercitationem.
    </p>
  </div>
</div>

> Please refer to [breakpoint](core/mixins.md#breakpoint) section on the mixins page for learning more about responsive mixins.
