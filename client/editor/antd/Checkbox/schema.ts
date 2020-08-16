export default {
	"props": {
		"autoFocus": {
			"type": "boolean",
			"default": "false",
			"desc": "自动获取焦点",
			"version": "4.5.1"
		},
		"checked": {
			"type": "boolean",
			"default": "false",
			"desc": "指定当前是否选中",
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
			"desc": "失效状态",
			"version": "4.5.1"
		},
		"indeterminate": {
			"type": "boolean",
			"default": "false",
			"desc": "设置 indeterminate 状态，只负责样式控制",
			"version": "4.5.1"
		}
	},
	"events": {
		"onChange": {
			"type": "function(e:Event)",
			"default": "-",
			"desc": "变化时回调函数",
			"version": "4.5.1"
		}
	},
	"name": "Checkbox",
	"title": "多选框",
	"categroy": "Output",
	"deprecated": false,
	"degrade": false
}