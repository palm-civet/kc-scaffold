export default {
	"props": {
		"cancelText": {
			"type": "string",
			"default": "`取消`",
			"desc": "取消按钮文字",
			"version": "4.5.1"
		},
		"okText": {
			"type": "string",
			"default": "`确定`",
			"desc": "确认按钮文字",
			"version": "4.5.1"
		},
		"okType": {
			"type": "string",
			"default": "`primary`",
			"desc": "确认按钮类型",
			"version": "4.5.1"
		},
		"okButtonProps": {
			"type": "[ButtonProps](/components/button/#API)",
			"default": "-",
			"desc": "ok 按钮 props",
			"version": "4.5.1"
		},
		"cancelButtonProps": {
			"type": "[ButtonProps](/components/button/#API)",
			"default": "-",
			"desc": "cancel 按钮 props",
			"version": "4.5.1"
		},
		"title": {
			"type": "string \\| ReactNode \\| () => ReactNode",
			"default": "-",
			"desc": "确认框的描述",
			"version": "4.5.1"
		},
		"icon": {
			"type": "ReactNode",
			"default": "&lt;ExclamationCircle />",
			"desc": "自定义弹出气泡 Icon 图标",
			"version": "4.5.1"
		},
		"disabled": {
			"type": "boolean",
			"default": "false",
			"desc": "点击 Popconfirm 子元素是否弹出气泡确认框",
			"version": "4.5.1"
		}
	},
	"events": {
		"onCancel": {
			"type": "function(e)",
			"default": "-",
			"desc": "点击取消的回调",
			"version": "4.5.1"
		},
		"onConfirm": {
			"type": "function(e)",
			"default": "-",
			"desc": "点击确认的回调",
			"version": "4.5.1"
		}
	},
	"name": "Popconfirm",
	"title": "气泡确认框",
	"deprecated": true,
	"degrade": false
}