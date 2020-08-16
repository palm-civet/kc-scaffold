export default {
	"props": {
		"allowClear": {
			"type": "boolean",
			"default": "true",
			"desc": "是否支持清除",
			"version": "4.5.1"
		},
		"autoFocus": {
			"type": "boolean",
			"default": "false",
			"desc": "自动获取焦点",
			"version": "4.5.1"
		},
		"bordered": {
			"type": "boolean",
			"default": "true",
			"desc": "是否有边框",
			"version": "4.5.1"
		},
		"changeOnSelect": {
			"type": "boolean",
			"default": "false",
			"desc": "当此项为 true 时，点选每级菜单选项值都会发生变化，具体见上面的演示",
			"version": "4.5.1"
		},
		"className": {
			"type": "string",
			"default": "-",
			"desc": "自定义类名",
			"version": "4.5.1"
		},
		"defaultValue": {
			"type": "string\\[] \\| number\\[]",
			"default": "\\[]",
			"desc": "默认的选中项",
			"version": "4.5.1"
		},
		"disabled": {
			"type": "boolean",
			"default": "false",
			"desc": "禁用",
			"version": "4.5.1"
		},
		"displayRender": {
			"type": "(label, selectedOptions) => ReactNode",
			"default": "label => label.join(`/`)",
			"desc": "选择后展示的渲染函数",
			"version": "4.5.1"
		},
		"expandTrigger": {
			"type": "string",
			"default": "`click`",
			"desc": "次级菜单的展开方式，可选 'click' 和 'hover'",
			"version": "4.5.1"
		},
		"expandIcon": {
			"type": "ReactNode",
			"default": "-",
			"desc": "自定义次级菜单展开图标",
			"version": "4.4.0"
		},
		"fieldNames": {
			"type": "object",
			"default": "{ label: `label`, value: `value`, children: `children` }",
			"desc": "自定义 options 中 label name children 的字段",
			"version": "4.5.1"
		},
		"getPopupContainer": {
			"type": "function(triggerNode)",
			"default": "() => document.body",
			"desc": "菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。[示例](https://codepen.io/afc163/pen/zEjNOy?editors=0010)",
			"version": "4.5.1"
		},
		"loadData": {
			"type": "(selectedOptions) => void",
			"default": "-",
			"desc": "用于动态加载选项，无法与 `showSearch` 一起使用",
			"version": "4.5.1"
		},
		"notFoundContent": {
			"type": "string",
			"default": "`Not Found`",
			"desc": "当下拉列表为空时显示的内容",
			"version": "4.5.1"
		},
		"options": {
			"type": "[Option](#Option)[]",
			"default": "-",
			"desc": "可选项数据源",
			"version": "4.5.1"
		},
		"placeholder": {
			"type": "string",
			"default": "`请选择`",
			"desc": "输入框占位文本",
			"version": "4.5.1"
		},
		"popupClassName": {
			"type": "string",
			"default": "-",
			"desc": "自定义浮层类名",
			"version": "4.5.1"
		},
		"popupPlacement": {
			"type": "string",
			"default": "`bottomLeft`",
			"desc": "浮层预设位置：`bottomLeft` `bottomRight` `topLeft` `topRight`",
			"version": "4.5.1"
		},
		"popupVisible": {
			"type": "boolean",
			"default": "-",
			"desc": "控制浮层显隐",
			"version": "4.5.1"
		},
		"showSearch": {
			"type": "boolean",
			"default": "false",
			"desc": "在选择框中显示搜索框",
			"version": "4.5.1"
		},
		"size": {
			"type": "`large` \\| `middle` \\| `small`",
			"default": "-",
			"desc": "输入框大小",
			"version": "4.5.1"
		},
		"style": {
			"type": "CSSProperties",
			"default": "-",
			"desc": "自定义样式",
			"version": "4.5.1"
		},
		"suffixIcon": {
			"type": "ReactNode",
			"default": "-",
			"desc": "自定义的选择框后缀图标",
			"version": "4.5.1"
		},
		"value": {
			"type": "string\\[] \\| number\\[]",
			"default": "-",
			"desc": "指定选中项",
			"version": "4.5.1"
		},
		"dropdownRender": {
			"type": "(menus: ReactNode) => ReactNode",
			"default": "-",
			"desc": "自定义下拉框内容",
			"version": "4.4.0"
		}
	},
	"events": {
		"onChange": {
			"type": "(value, selectedOptions) => void",
			"default": "-",
			"desc": "选择完成后的回调",
			"version": "4.5.1"
		},
		"onPopupVisibleChange": {
			"type": "(value) => void",
			"default": "-",
			"desc": "显示/隐藏浮层的回调",
			"version": "4.5.1"
		}
	},
	"name": "Cascader",
	"title": "级联选择",
	"categroy": "Output",
	"deprecated": false,
	"degrade": false
}