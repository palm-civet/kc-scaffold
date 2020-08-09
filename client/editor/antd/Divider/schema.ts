export default {
	"props": {
		"className": {
			"type": "string",
			"default": "-",
			"desc": "分割线样式类",
			"version": "4.5.1"
		},
		"dashed": {
			"type": "boolean",
			"default": "false",
			"desc": "是否虚线",
			"version": "4.5.1"
		},
		"orientation": {
			"type": "`left` \\| `right` \\| `center`",
			"default": "`center`",
			"desc": "分割线标题的位置",
			"version": "4.5.1"
		},
		"style": {
			"type": "CSSProperties",
			"default": "-",
			"desc": "分割线样式对象",
			"version": "4.5.1"
		},
		"type": {
			"type": "`horizontal` \\| `vertical`",
			"default": "`horizontal`",
			"desc": "水平还是垂直类型",
			"version": "4.5.1"
		},
		"plain": {
			"type": "boolean",
			"default": "false",
			"desc": "文字是否显示为普通正文样式",
			"version": "4.2.0"
		}
	},
	"events": {},
	"name": "Divider",
	"categroy": "文本组件",
	"deprecated": false,
	"degrade": false
}