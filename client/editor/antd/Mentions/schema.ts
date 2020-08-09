export default {
	"props": {
		"autoFocus": {
			"type": "boolean",
			"default": "false",
			"desc": "自动获得焦点",
			"version": "4.5.1"
		},
		"defaultValue": {
			"type": "string",
			"default": "-",
			"desc": "默认值",
			"version": "4.5.1"
		},
		"filterOption": {
			"type": "false \\| (input: string, option: OptionProps) => boolean",
			"default": "-",
			"desc": "自定义过滤逻辑",
			"version": "4.5.1"
		},
		"notFoundContent": {
			"type": "ReactNode",
			"default": "`Not Found`",
			"desc": "当下拉列表为空时显示的内容",
			"version": "4.5.1"
		},
		"placement": {
			"type": "`top` \\| `bottom`",
			"default": "`bottom`",
			"desc": "弹出层展示位置",
			"version": "4.5.1"
		},
		"prefix": {
			"type": "string \\| string[]",
			"default": "`@`",
			"desc": "设置触发关键字",
			"version": "4.5.1"
		},
		"split": {
			"type": "string",
			"default": "``",
			"desc": "设置选中项前后分隔符",
			"version": "4.5.1"
		},
		"validateSearch": {
			"type": "(text: string, props: MentionsProps) => void",
			"default": "-",
			"desc": "自定义触发验证逻辑",
			"version": "4.5.1"
		},
		"value": {
			"type": "string",
			"default": "-",
			"desc": "设置值",
			"version": "4.5.1"
		},
		"getPopupContainer": {
			"type": "() => HTMLElement",
			"default": "-",
			"desc": "指定建议框挂载的 HTML 节点",
			"version": "4.5.1"
		},
		"autoSize": {
			"type": "boolean \\| object",
			"default": "false",
			"desc": "自适应内容高度，可设置为 true \\| false 或对象：{ minRows: 2, maxRows: 6 }",
			"version": "4.5.1"
		}
	},
	"events": {
		"onChange": {
			"type": "(text: string) => void",
			"default": "-",
			"desc": "值改变时触发",
			"version": "4.5.1"
		},
		"onSelect": {
			"type": "(option: OptionProps, prefix: string) => void",
			"default": "-",
			"desc": "选择选项时触发",
			"version": "4.5.1"
		},
		"onSearch": {
			"type": "(text: string, prefix: string) => void",
			"default": "-",
			"desc": "搜索时触发",
			"version": "4.5.1"
		},
		"onFocus": {
			"type": "() => void",
			"default": "-",
			"desc": "获得焦点时触发",
			"version": "4.5.1"
		},
		"onBlur": {
			"type": "() => void",
			"default": "-",
			"desc": "失去焦点时触发",
			"version": "4.5.1"
		},
		"onResize": {
			"type": "function({ width, height })",
			"default": "-",
			"desc": "resize 回调",
			"version": "4.5.1"
		}
	},
	"name": "Mentions",
	"deprecated": true,
	"degrade": false
}