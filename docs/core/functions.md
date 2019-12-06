---
id: functions
title: Functions
---

## `gap`

```scss
gap($size)
```

Returns the value in the `$g-gaps` map corresponding to the requested size.

| Parameter | Type   | Default value | Description                               |
| --------- | ------ | ------------- | ----------------------------------------- |
| `$size`   | String | normal        | The gap size defined in the `$g-gaps` map |

## `pad`

```scss
pad($size)
```

Returns the value in the `$g-pads` map corresponding to the requested size.

| Parameter | Type   | Default value | Description                               |
| --------- | ------ | ------------- | ----------------------------------------- |
| `$size`   | String | normal        | The gap size defined in the `$g-pads` map |

## `px-to-rem`

```scss
px-to-rem($value, $base-value)
```

Converts `px` units to `rem` units

| Parameter     | Type   | Default value       | Description               |
| ------------- | ------ | ------------------- | ------------------------- |
| `$value`      | number | -                   | The value to be converted |
| `$base-value` | number | `$g-font-size-root` | The base value            |

## `rem-to-px`

```scss
rem-to-px($value, $base-value)
```

Converts `rem` units to `px` units

| Parameter     | Type   | Default value       | Description               |
| ------------- | ------ | ------------------- | ------------------------- |
| `$value`      | number | -                   | The value to be converted |
| `$base-value` | number | `$g-font-size-root` | The base value            |

## `px-to-em`

```scss
px-to-em($value, $base-value)
```

Converts `px` units to `em` units

| Parameter     | Type   | Default value       | Description               |
| ------------- | ------ | ------------------- | ------------------------- |
| `$value`      | number | -                   | The value to be converted |
| `$base-value` | number | `$g-font-size-base` | The base value            |

## `color-palette`

```scss
color-palette($palette, $weight)
```

Returns the corresponding color from the color palette

| Parameter  | Type   | Default value | Description                  |
| ---------- | ------ | ------------- | ---------------------------- |
| `$palette` | string | gray          | Color palette name           |
| `$weight`  | number | 100           | Color weight in the pallette |

## `strip-unit`

```scss
strip-unit($number)
```

Removes the unit (e.g. `px`, `em`, `rem`) from a value, returning the number only.

| Parameter | Type   | Default value | Description               |
| --------- | ------ | ------------- | ------------------------- |
| `$number` | number | -             | Number to strip unit from |
