export default {
	"props": {
		"align": {
			"type": "`top` \\| `middle` \\| `bottom`",
			"default": "`top`",
			"desc": "垂直对齐方式",
			"version": "4.5.1"
		},
		"gutter": {
			"type": "number \\| object \\| array",
			"default": "0",
			"desc": "栅格间隔，可以写成像素值或支持响应式的对象写法来设置水平间隔 `{ xs: 8, sm: 16, md: 24}`。或者使用数组形式同时设置 `[水平间距, 垂直间距]`。",
			"version": "4.5.1"
		},
		"justify": {
			"type": "`start` \\| `end` \\| `center` \\| `space-around` \\| `space-between`",
			"default": "`start`",
			"desc": "水平排列方式",
			"version": "4.5.1"
		}
	},
	"events": {},
	"name": "Grid",
	"deprecated": false,
	"degrade": true
}