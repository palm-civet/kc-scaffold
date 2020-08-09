export default {
	"props": {
		"afterClose": {
			"type": "() => void",
			"default": "-",
			"desc": "关闭动画结束后触发的回调函数",
			"version": "4.5.1"
		},
		"banner": {
			"type": "boolean",
			"default": "false",
			"desc": "是否用作顶部公告",
			"version": "4.5.1"
		},
		"closable": {
			"type": "boolean",
			"default": "-",
			"desc": "默认不显示关闭按钮",
			"version": "4.5.1"
		},
		"closeText": {
			"type": "string \\| ReactNode",
			"default": "-",
			"desc": "自定义关闭按钮",
			"version": "4.5.1"
		},
		"description": {
			"type": "string \\| ReactNode",
			"default": "-",
			"desc": "警告提示的辅助性文字介绍",
			"version": "4.5.1"
		},
		"icon": {
			"type": "ReactNode",
			"default": "-",
			"desc": "自定义图标，`showIcon` 为 true 时有效",
			"version": "4.5.1"
		},
		"message": {
			"type": "string \\| ReactNode",
			"default": "-",
			"desc": "警告提示内容",
			"version": "4.5.1"
		},
		"showIcon": {
			"type": "boolean",
			"default": "false，`banner` 模式下默认值为 true",
			"desc": "是否显示辅助图标",
			"version": "4.5.1"
		},
		"type": {
			"type": "string",
			"default": "`info`，`banner` 模式下默认值为 `warning`",
			"desc": "指定警告提示的样式，有四种选择 `success`、`info`、`warning`、`error`",
			"version": "4.5.1"
		}
	},
	"events": {
		"onClose": {
			"type": "(e: MouseEvent) => void",
			"default": "-",
			"desc": "关闭时触发的回调函数",
			"version": "4.5.1"
		}
	},
	"name": "Alert",
	"categroy": "元组件",
	"deprecated": false,
	"degrade": false
}