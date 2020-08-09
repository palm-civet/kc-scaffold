export default {
	"props": {
		"allowClear": {
			"type": "boolean",
			"default": "true",
			"desc": "是否允许再次点击后清除",
			"version": "4.5.1"
		},
		"allowHalf": {
			"type": "boolean",
			"default": "false",
			"desc": "是否允许半选",
			"version": "4.5.1"
		},
		"autoFocus": {
			"type": "boolean",
			"default": "false",
			"desc": "自动获取焦点",
			"version": "4.5.1"
		},
		"character": {
			"type": "ReactNode \\| (RateProps) => ReactNode",
			"default": "&lt;StarFilled />",
			"desc": "自定义字符",
			"version": "function(): 4.4.0"
		},
		"className": {
			"type": "string",
			"default": "-",
			"desc": "自定义样式类名",
			"version": "4.5.1"
		},
		"count": {
			"type": "number",
			"default": "5",
			"desc": "star 总数",
			"version": "4.5.1"
		},
		"defaultValue": {
			"type": "number",
			"default": "0",
			"desc": "默认值",
			"version": "4.5.1"
		},
		"disabled": {
			"type": "boolean",
			"default": "false",
			"desc": "只读，无法进行交互",
			"version": "4.5.1"
		},
		"style": {
			"type": "CSSProperties",
			"default": "-",
			"desc": "自定义样式对象",
			"version": "4.5.1"
		},
		"tooltips": {
			"type": "string\\[]",
			"default": "-",
			"desc": "自定义每项的提示信息",
			"version": "4.5.1"
		},
		"value": {
			"type": "number",
			"default": "-",
			"desc": "当前数，受控值",
			"version": "4.5.1"
		}
	},
	"events": {
		"onBlur": {
			"type": "function()",
			"default": "-",
			"desc": "失去焦点时的回调",
			"version": "4.5.1"
		},
		"onChange": {
			"type": "function(value: number)",
			"default": "-",
			"desc": "选择时的回调",
			"version": "4.5.1"
		},
		"onFocus": {
			"type": "function()",
			"default": "-",
			"desc": "获取焦点时的回调",
			"version": "4.5.1"
		},
		"onHoverChange": {
			"type": "function(value: number)",
			"default": "-",
			"desc": "鼠标经过时数值变化的回调",
			"version": "4.5.1"
		},
		"onKeyDown": {
			"type": "function(event)",
			"default": "-",
			"desc": "按键回调",
			"version": "4.5.1"
		}
	},
	"name": "Rate",
	"categroy": "输出组件",
	"deprecated": false,
	"degrade": false
}