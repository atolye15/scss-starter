---
id: customizing
title: Customizing
---

Although SCSS Starter provides a pretty extensive set of utility classes out of the box, you may run into some use cases where you need to add a few of your own utility classes, delete or edit existing ones.

SCSS Starter uses `generate-utility` Sass mixin to generate utilities from the `$g-utilities` Sass map in `base/_utilities.scss`. If you want to customize the utility classes, we encourage you to edit the `$g-utilities` Sass map.

## Config Format

`$g-utilities` Sass map has a special structure, if you want to customize it you need to use the established rules.

Because `$g-utilities` has a bit complex structure, we use a TypeScript-like syntax to explain it clearly as follows:

```ts
type Breakpoint = xs | sm | md | lg | xl;

type BasicUtilityValue = Number | String | Color;

type NamedUtilityValue = (
  [name: string]: BasicUtilityValue
);

type ResponsiveValueMap = (
  [breakpoint: Breakpoint]: up | down | all,
);

type UtilityValueMap = (
  value: BasicUtilityValue,
  responsive?:
    | true
    | false
    | Breakpoint
    | ResponsiveValueMap
    | List<Breakpoint | ResponsiveValueMap>
);

type Utilities =  (
  [name: String]: (
    property: String | List<String>,
    values:
      | BasicUtilityValue
      | NamedUtilityValue
      | List<BasicUtilityValue | UtilityValueMap>,
  ),
);

```

## Example Config

```scss
$g-utilities: (
  'float': (
    property: float,
    values: left right none,
  ),
  'color': (
    'display': (
      property: display,
      values: block
        (
          value: none,
          responsive: (
            md: up,
            sm: all,
          ),
        )
        inline inline-block table table-row table-cell
        (
          value: flex,
          responsive: true,
        )
        (
          value: inline-flex,
          responsive: (
            md: up,
          )
          sm,
        ),
    ),
    'font-size': (
      property: font-size,
      values: (
        'small': (
          value: $g-font-size-small,
          responsive: true,
        ),
        'base': (
          value: $g-font-size-base,
          responsive: (
            md: up,
            xs: all,
          ),
        ),
        'medium': $g-font-size-medium,
      ),
    ),
    'border-right': (
      property: border-right,
      values: (
        '': (
          value: 1px solid $g-border-color,
          responsive: (
            md: down,
          ),
        ),
      ),
    ),
  ),
);
```
