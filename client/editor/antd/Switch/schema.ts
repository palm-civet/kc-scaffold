export default {
	"props": {
		"autoFocus": {
			"type": "boolean",
			"default": "false",
			"desc": "组件自动获取焦点",
			"version": "4.5.1"
		},
		"checked": {
			"type": "boolean",
			"default": "false",
			"desc": "指定当前是否选中",
			"version": "4.5.1"
		},
		"checkedChildren": {
			"type": "string \\| ReactNode",
			"default": "-",
			"desc": "选中时的内容",
			"version": "4.5.1"
		},
		"defaultChecked": {
			"type": "boolean",
			"default": "false",
			"desc": "初始是否选中",
			"version": "4.5.1"
		},
		"disabled": {
			"type": "boolean",
			"default": "false",
			"desc": "是否禁用",
			"version": "4.5.1"
		},
		"loading": {
			"type": "boolean",
			"default": "false",
			"desc": "加载中的开关",
			"version": "4.5.1"
		},
		"size": {
			"type": "string",
			"default": "`default`",
			"desc": "开关大小，可选值：`default` `small`",
			"version": "4.5.1"
		},
		"unCheckedChildren": {
			"type": "string \\| ReactNode",
			"default": "-",
			"desc": "非选中时的内容",
			"version": "4.5.1"
		},
		"className": {
			"type": "string",
			"default": "-",
			"desc": "Switch 器类名",
			"version": "4.5.1"
		}
	},
	"events": {
		"onChange": {
			"type": "function(checked: boolean, event: Event)",
			"default": "-",
			"desc": "变化时回调函数",
			"version": "4.5.1"
		},
		"onClick": {
			"type": "function(checked: boolean, event: Event)",
			"default": "-",
			"desc": "点击时回调函数",
			"version": "4.5.1"
		}
	},
	"name": "Switch",
	"categroy": "Output",
	"deprecated": false,
	"degrade": false
}