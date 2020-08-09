export default {
	"props": {
		"allowClear": {
			"type": "boolean",
			"default": "false",
			"desc": "支持清除, 单选模式有效",
			"version": "4.5.1"
		},
		"autoFocus": {
			"type": "boolean",
			"default": "false",
			"desc": "自动获取焦点",
			"version": "4.5.1"
		},
		"backfill": {
			"type": "boolean",
			"default": "false",
			"desc": "使用键盘选择选项的时候把选中项回填到输入框中",
			"version": "4.5.1"
		},
		"children (自定义输入框)": {
			"type": "HTMLInputElement \\| HTMLTextAreaElement \\| React.ReactElement&lt;InputProps>",
			"default": "&lt;Input />",
			"desc": "自定义输入框",
			"version": "4.5.1"
		},
		"children (自动完成的数据源)": {
			"type": "React.ReactElement&lt;OptionProps> \\| Array&lt;React.ReactElement&lt;OptionProps>>",
			"default": "-",
			"desc": "自动完成的数据源",
			"version": "4.5.1"
		},
		"defaultActiveFirstOption": {
			"type": "boolean",
			"default": "true",
			"desc": "是否默认高亮第一个选项",
			"version": "4.5.1"
		},
		"defaultValue": {
			"type": "string",
			"default": "-",
			"desc": "指定默认选中的条目",
			"version": "4.5.1"
		},
		"disabled": {
			"type": "boolean",
			"default": "false",
			"desc": "是否禁用",
			"version": "4.5.1"
		},
		"filterOption": {
			"type": "boolean \\| function(inputValue, option)",
			"default": "true",
			"desc": "是否根据输入项进行筛选。当其为一个函数时，会接收 `inputValue` `option` 两个参数，当 `option` 符合筛选条件时，应返回 `true`，反之则返回 `false`",
			"version": "4.5.1"
		},
		"getPopupContainer": {
			"type": "function(triggerNode)",
			"default": "() => document.body",
			"desc": "菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。[示例](https://codesandbox.io/s/4j168r7jw0)",
			"version": "4.5.1"
		},
		"placeholder": {
			"type": "string",
			"default": "-",
			"desc": "输入框提示",
			"version": "4.5.1"
		},
		"value": {
			"type": "string",
			"default": "-",
			"desc": "指定当前选中的条目",
			"version": "4.5.1"
		},
		"defaultOpen": {
			"type": "boolean",
			"default": "-",
			"desc": "是否默认展开下拉菜单",
			"version": "4.5.1"
		},
		"open": {
			"type": "boolean",
			"default": "-",
			"desc": "是否展开下拉菜单",
			"version": "4.5.1"
		},
		"notFoundContent": {
			"type": "ReactNode",
			"default": "-",
			"desc": "当下拉列表为空时显示的内容",
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
			"type": "function(value)",
			"default": "-",
			"desc": "选中 option，或 input 的 value 变化时，调用此函数",
			"version": "4.5.1"
		},
		"onFocus": {
			"type": "function()",
			"default": "-",
			"desc": "获得焦点时的回调",
			"version": "4.5.1"
		},
		"onSearch": {
			"type": "function(value)",
			"default": "-",
			"desc": "搜索补全项的时候调用",
			"version": "4.5.1"
		},
		"onSelect": {
			"type": "function(value, option)",
			"default": "-",
			"desc": "被选中时调用，参数为选中项的 value 值",
			"version": "4.5.1"
		},
		"onDropdownVisibleChange": {
			"type": "function(open)",
			"default": "-",
			"desc": "展开下拉菜单的回调",
			"version": "4.5.1"
		}
	},
	"name": "AutoComplete",
	"categroy": "Output",
	"deprecated": false,
	"degrade": false
}