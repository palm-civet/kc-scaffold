export default {
	"props": {
		"code": {
			"type": "boolean",
			"default": "false",
			"desc": "添加代码样式",
			"version": "4.5.1"
		},
		"copyable": {
			"type": "boolean \\| { text: string, onCopy: function, icon: ReactNode, tooltips: \\[ReactNode, ReactNode\\] }",
			"default": "false",
			"desc": "是否可拷贝，为对象时可进行各种自定义",
			"version": "`icon` 和 `tooltips` 在 `4.4.0` 支持"
		},
		"delete": {
			"type": "boolean",
			"default": "false",
			"desc": "添加删除线样式",
			"version": "4.5.1"
		},
		"disabled": {
			"type": "boolean",
			"default": "false",
			"desc": "禁用文本",
			"version": "4.5.1"
		},
		"editable": {
			"type": "boolean \\| { editing: boolean, onStart: function, onChange: function(string) }",
			"default": "false",
			"desc": "是否可编辑，为对象时可对编辑进行控制",
			"version": "4.5.1"
		},
		"ellipsis": {
			"type": "boolean",
			"default": "false",
			"desc": "设置自动溢出省略，需要设置元素宽度",
			"version": "4.5.1"
		},
		"mark": {
			"type": "boolean",
			"default": "false",
			"desc": "添加标记样式",
			"version": "4.5.1"
		},
		"keyboard": {
			"type": "boolean",
			"default": "false",
			"desc": "添加键盘样式",
			"version": "4.3.0"
		},
		"underline": {
			"type": "boolean",
			"default": "false",
			"desc": "添加下划线样式",
			"version": "4.5.1"
		},
		"strong": {
			"type": "boolean",
			"default": "false",
			"desc": "是否加粗",
			"version": "4.5.1"
		},
		"type": {
			"type": "`secondary` \\| `warning` \\| `danger`",
			"default": "-",
			"desc": "文本类型",
			"version": "4.5.1"
		}
	},
	"events": {},
	"name": "Typography",
	"categroy": "文本组件",
	"deprecated": false,
	"degrade": false
}