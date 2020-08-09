export default {
	"props": {
		"closable": {
			"type": "boolean",
			"default": "false",
			"desc": "标签是否可以关闭",
			"version": "4.5.1"
		},
		"color": {
			"type": "string",
			"default": "-",
			"desc": "标签色",
			"version": "4.5.1"
		},
		"closeIcon": {
			"type": "ReactNode",
			"default": "-",
			"desc": "自定义关闭按钮",
			"version": "4.4.0"
		},
		"visible": {
			"type": "boolean",
			"default": "true",
			"desc": "是否显示标签",
			"version": "4.5.1"
		},
		"icon": {
			"type": "ReactNode",
			"default": "-",
			"desc": "设置图标",
			"version": "4.5.1"
		}
	},
	"events": {
		"onClose": {
			"type": "(e) => void",
			"default": "-",
			"desc": "关闭时的回调",
			"version": "4.5.1"
		}
	},
	"name": "Tag",
	"categroy": "元组件",
	"deprecated": false,
	"degrade": false
}