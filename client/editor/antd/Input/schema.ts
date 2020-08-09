export default {
	"props": {
		"addonAfter": {
			"type": "string \\| ReactNode",
			"default": "-",
			"desc": "带标签的 input，设置后置标签",
			"version": "4.5.1"
		},
		"addonBefore": {
			"type": "string \\| ReactNode",
			"default": "-",
			"desc": "带标签的 input，设置前置标签",
			"version": "4.5.1"
		},
		"defaultValue": {
			"type": "string",
			"default": "-",
			"desc": "输入框默认内容",
			"version": "4.5.1"
		},
		"disabled": {
			"type": "boolean",
			"default": "false",
			"desc": "是否禁用状态，默认为 false",
			"version": "4.5.1"
		},
		"id": {
			"type": "string",
			"default": "-",
			"desc": "输入框的 id",
			"version": "4.5.1"
		},
		"maxLength": {
			"type": "number",
			"default": "-",
			"desc": "最大长度",
			"version": "4.5.1"
		},
		"prefix": {
			"type": "string \\| ReactNode",
			"default": "-",
			"desc": "带有前缀图标的 input",
			"version": "4.5.1"
		},
		"size": {
			"type": "`large` \\| `middle` \\| `small`",
			"default": "-",
			"desc": "控件大小。注：标准表单内的输入框大小限制为 `large`",
			"version": "4.5.1"
		},
		"suffix": {
			"type": "string \\| ReactNode",
			"default": "-",
			"desc": "带有后缀图标的 input",
			"version": "4.5.1"
		},
		"type": {
			"type": "string",
			"default": "`text`",
			"desc": "声明 input 类型，同原生 input 标签的 type 属性，见：[MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input#属性)(请直接使用 `Input.TextArea` 代替 `type=\"textarea\"`)",
			"version": "4.5.1"
		},
		"value": {
			"type": "string",
			"default": "-",
			"desc": "输入框内容",
			"version": "4.5.1"
		},
		"allowClear": {
			"type": "boolean",
			"default": "-",
			"desc": "可以点击清除图标删除内容",
			"version": "4.5.1"
		},
		"bordered": {
			"type": "boolean",
			"default": "true",
			"desc": "是否有边框",
			"version": "4.5.0"
		}
	},
	"events": {
		"onChange": {
			"type": "function(e)",
			"default": "-",
			"desc": "输入框内容变化时的回调",
			"version": "4.5.1"
		},
		"onPressEnter": {
			"type": "function(e)",
			"default": "-",
			"desc": "按下回车的回调",
			"version": "4.5.1"
		}
	},
	"name": "Input",
	"categroy": "Output",
	"deprecated": false,
	"degrade": false
}