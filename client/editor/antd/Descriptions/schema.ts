export default {
	"props": {
		"title": {
			"type": "ReactNode",
			"default": "-",
			"desc": "描述列表的标题，显示在最顶部",
			"version": "4.5.1"
		},
		"extra": {
			"type": "string \\| ReactNode",
			"default": "-",
			"desc": "描述列表的操作区域，显示在右上方",
			"version": "4.5.0"
		},
		"bordered": {
			"type": "boolean",
			"default": "false",
			"desc": "是否展示边框",
			"version": "4.5.1"
		},
		"column": {
			"type": "number",
			"default": "3",
			"desc": "一行的 `DescriptionItems` 数量，可以写成像素值或支持响应式的对象写法 `{ xs: 8, sm: 16, md: 24}`",
			"version": "4.5.1"
		},
		"size": {
			"type": "`default` \\| `middle` \\| `small`",
			"default": "-",
			"desc": "设置列表的大小。可以设置为 `middle` 、`small`, 或不填（只有设置 `bordered={true}` 生效）",
			"version": "4.5.1"
		},
		"layout": {
			"type": "`horizontal` \\| `vertical`",
			"default": "`horizontal`",
			"desc": "描述布局",
			"version": "4.5.1"
		},
		"colon": {
			"type": "boolean",
			"default": "true",
			"desc": "配置 `Descriptions.Item` 的 `colon` 的默认值",
			"version": "4.5.1"
		}
	},
	"events": {},
	"name": "Descriptions",
	"categroy": "复合组件",
	"deprecated": false,
	"degrade": false
}