export default {
	"props": {
		"decimalSeparator": {
			"type": "string",
			"default": "`.`",
			"desc": "设置小数点",
			"version": "4.5.1"
		},
		"formatter": {
			"type": "(value) => ReactNode",
			"default": "-",
			"desc": "自定义数值展示",
			"version": "4.5.1"
		},
		"groupSeparator": {
			"type": "string",
			"default": "`,`",
			"desc": "设置千分位标识符",
			"version": "4.5.1"
		},
		"precision": {
			"type": "number",
			"default": "-",
			"desc": "数值精度",
			"version": "4.5.1"
		},
		"prefix": {
			"type": "string \\| ReactNode",
			"default": "-",
			"desc": "设置数值的前缀",
			"version": "4.5.1"
		},
		"suffix": {
			"type": "string \\| ReactNode",
			"default": "-",
			"desc": "设置数值的后缀",
			"version": "4.5.1"
		},
		"title": {
			"type": "string \\| ReactNode",
			"default": "-",
			"desc": "数值的标题",
			"version": "4.5.1"
		},
		"value": {
			"type": "string \\| number",
			"default": "-",
			"desc": "数值内容",
			"version": "4.5.1"
		},
		"valueStyle": {
			"type": "CSSProperties",
			"default": "-",
			"desc": "设置数值的样式",
			"version": "4.5.1"
		}
	},
	"events": {},
	"name": "Statistic",
	"categroy": "Meta",
	"deprecated": false,
	"degrade": false
}