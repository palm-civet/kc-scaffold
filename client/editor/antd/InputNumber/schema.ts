export default {
	"props": {
		"autoFocus": {
			"type": "boolean",
			"default": "false",
			"desc": "自动获取焦点",
			"version": "4.5.1"
		},
		"defaultValue": {
			"type": "number",
			"default": "-",
			"desc": "初始值",
			"version": "4.5.1"
		},
		"disabled": {
			"type": "boolean",
			"default": "false",
			"desc": "禁用",
			"version": "4.5.1"
		},
		"formatter": {
			"type": "function(value: number \\| string): string",
			"default": "-",
			"desc": "指定输入框展示值的格式",
			"version": "4.5.1"
		},
		"max": {
			"type": "number",
			"default": "[Number.MAX_SAFE_INTEGER](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER)",
			"desc": "最大值",
			"version": "4.5.1"
		},
		"min": {
			"type": "number",
			"default": "[Number.MIN_SAFE_INTEGER](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER)",
			"desc": "最小值",
			"version": "4.5.1"
		},
		"parser": {
			"type": "function(string): number",
			"default": "-",
			"desc": "指定从 `formatter` 里转换回数字的方式，和 `formatter` 搭配使用",
			"version": "4.5.1"
		},
		"precision": {
			"type": "number",
			"default": "-",
			"desc": "数值精度",
			"version": "4.5.1"
		},
		"decimalSeparator": {
			"type": "string",
			"default": "-",
			"desc": "小数点",
			"version": "4.5.1"
		},
		"size": {
			"type": "`large` \\| `middle` \\| `small`",
			"default": "-",
			"desc": "输入框大小",
			"version": "4.5.1"
		},
		"step": {
			"type": "number \\| string",
			"default": "1",
			"desc": "每次改变步数，可以为小数",
			"version": "4.5.1"
		},
		"value": {
			"type": "number",
			"default": "-",
			"desc": "当前值",
			"version": "4.5.1"
		}
	},
	"events": {
		"onChange": {
			"type": "Function(value: number \\| string)",
			"default": "-",
			"desc": "变化回调",
			"version": "4.5.1"
		},
		"onPressEnter": {
			"type": "function(e)",
			"default": "-",
			"desc": "按下回车的回调",
			"version": "4.5.1"
		}
	},
	"name": "InputNumber",
	"categroy": "输出组件",
	"deprecated": false,
	"degrade": false
}