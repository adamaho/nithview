# nv-tab-item



<!-- Auto Generated Below -->


## Properties

| Property           | Attribute | Description                                                         | Type     | Default     |
| ------------------ | --------- | ------------------------------------------------------------------- | -------- | ----------- |
| `tab` _(required)_ | `tab`     | Name of the tab. Used to determine which tab is currently selected. | `string` | `undefined` |


## Events

| Event      | Description                                        | Type                       |
| ---------- | -------------------------------------------------- | -------------------------- |
| `tabClick` | Event that is emitted when the tab item is clicked | `CustomEvent<SelectedTab>` |


## Slots

| Slot            | Description                                                        |
| --------------- | ------------------------------------------------------------------ |
|                 | Content that is placed in the in the tab item. Must be a `string`. |
| `"nv-tab-icon"` | Icon to show to the left of the tab item.                          |


## CSS Custom Properties

| Name                          | Description                   |
| ----------------------------- | ----------------------------- |
| `--nv-tab-item-border-radius` | Border radius of the tab-item |
| `--nv-tab-item-height`        | Background of the tab-item    |
| `--nv-tab-item-margin`        | Margin of the tab-item        |
| `--nv-tab-item-padding`       | Padding of the tab-item       |


----------------------------------------------

* NithView *
