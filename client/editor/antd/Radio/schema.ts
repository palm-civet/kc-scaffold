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
			"desc": "禁用 Radio",
			"version": "4.5.1"
		},
		"value": {
			"type": "any",
			"default": "-",
			"desc": "根据 value 进行比较，判断是否选中",
			"version": "4.5.1"
		}
	},
	"events": {},
	"name": "Radio",
	"title": "单选框",
	"categroy": "Output",
	"deprecated": false,
	"degrade": false
}