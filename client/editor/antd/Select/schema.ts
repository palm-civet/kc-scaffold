export default {
	"props": {
		"allowClear": {
			"type": "boolean",
			"default": "false",
			"desc": "支持清除",
			"version": "4.5.1"
		},
		"autoClearSearchValue": {
			"type": "boolean",
			"default": "true",
			"desc": "是否在选中项后清空搜索框，只在 `mode` 为 `multiple` 或 `tags` 时有效",
			"version": "4.5.1"
		},
		"autoFocus": {
			"type": "boolean",
			"default": "false",
			"desc": "默认获取焦点",
			"version": "4.5.1"
		},
		"defaultActiveFirstOption": {
			"type": "boolean",
			"default": "true",
			"desc": "是否默认高亮第一个选项",
			"version": "4.5.1"
		},
		"defaultValue": {
			"type": "string \\| string\\[]<br />number \\| number\\[]<br />LabeledValue \\| LabeledValue[]",
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
		"dropdownClassName": {
			"type": "string",
			"default": "-",
			"desc": "下拉菜单的 className 属性",
			"version": "4.5.1"
		},
		"dropdownMatchSelectWidth": {
			"type": "boolean \\| number",
			"default": "true",
			"desc": "下拉菜单和选择器同宽。默认将设置 `min-width`，当值小于选择框宽度时会被忽略。false 时会关闭虚拟滚动",
			"version": "4.5.1"
		},
		"dropdownRender": {
			"type": "(originNode: ReactNode) => ReactNode",
			"default": "-",
			"desc": "自定义下拉框内容",
			"version": "4.5.1"
		},
		"dropdownStyle": {
			"type": "CSSProperties",
			"default": "-",
			"desc": "下拉菜单的 style 属性",
			"version": "4.5.1"
		},
		"filterOption": {
			"type": "boolean \\| function(inputValue, option)",
			"default": "true",
			"desc": "是否根据输入项进行筛选。当其为一个函数时，会接收 `inputValue` `option` 两个参数，当 `option` 符合筛选条件时，应返回 true，反之则返回 false",
			"version": "4.5.1"
		},
		"getPopupContainer": {
			"type": "function(triggerNode)",
			"default": "() => document.body",
			"desc": "菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。[示例](https://codesandbox.io/s/4j168r7jw0)",
			"version": "4.5.1"
		},
		"labelInValue": {
			"type": "boolean",
			"default": "false",
			"desc": "是否把每个选项的 label 包装到 value 中，会把 Select 的 value 类型从 `string` 变为 `{ value: string, label: ReactNode }` 的格式",
			"version": "4.5.1"
		},
		"listHeight": {
			"type": "number",
			"default": "256",
			"desc": "设置弹窗滚动高度",
			"version": "4.5.1"
		},
		"maxTagCount": {
			"type": "number",
			"default": "-",
			"desc": "最多显示多少个 tag",
			"version": "4.5.1"
		},
		"maxTagTextLength": {
			"type": "number",
			"default": "-",
			"desc": "最大显示的 tag 文本长度",
			"version": "4.5.1"
		},
		"maxTagPlaceholder": {
			"type": "ReactNode \\| function(omittedValues)",
			"default": "-",
			"desc": "隐藏 tag 时显示的内容",
			"version": "4.5.1"
		},
		"tagRender": {
			"type": "(props) => ReactNode",
			"default": "-",
			"desc": "自定义 tag 内容 render",
			"version": "4.5.1"
		},
		"mode": {
			"type": "`multiple` \\| `tags`",
			"default": "-",
			"desc": "设置 Select 的模式为多选或标签",
			"version": "4.5.1"
		},
		"notFoundContent": {
			"type": "ReactNode",
			"default": "`Not Found`",
			"desc": "当下拉列表为空时显示的内容",
			"version": "4.5.1"
		},
		"options": {
			"type": "{ label, value }[]",
			"default": "-",
			"desc": "数据化配置选项内容，相比 jsx 定义会获得更好的渲染性能",
			"version": "4.5.1"
		},
		"optionFilterProp": {
			"type": "string",
			"default": "`value`",
			"desc": "搜索时过滤对应的 option 属性，如设置为 children 表示对内嵌内容进行搜索。[示例](https://codesandbox.io/s/antd-reproduction-template-tk678)",
			"version": "4.5.1"
		},
		"optionLabelProp": {
			"type": "string",
			"default": "`children`",
			"desc": "回填到选择框的 Option 的属性值，默认是 Option 的子元素。比如在子元素需要高亮效果时，此值可以设为 `value`",
			"version": "4.5.1"
		},
		"placeholder": {
			"type": "string",
			"default": "-",
			"desc": "选择框默认文字",
			"version": "4.5.1"
		},
		"showArrow": {
			"type": "boolean",
			"default": "单选为 true，多选为 false",
			"desc": "是否显示下拉小箭头",
			"version": "4.5.1"
		},
		"showSearch": {
			"type": "boolean",
			"default": "false",
			"desc": "使单选模式可搜索",
			"version": "4.5.1"
		},
		"size": {
			"type": "`large` \\| `middle` \\| `small`",
			"default": "-",
			"desc": "选择框大小",
			"version": "4.5.1"
		},
		"suffixIcon": {
			"type": "ReactNode",
			"default": "-",
			"desc": "自定义的选择框后缀图标",
			"version": "4.5.1"
		},
		"removeIcon": {
			"type": "ReactNode",
			"default": "-",
			"desc": "自定义的多选框清除图标",
			"version": "4.5.1"
		},
		"clearIcon": {
			"type": "ReactNode",
			"default": "-",
			"desc": "自定义的多选框清空图标",
			"version": "4.5.1"
		},
		"menuItemSelectedIcon": {
			"type": "ReactNode",
			"default": "-",
			"desc": "自定义多选时当前选中的条目图标",
			"version": "4.5.1"
		},
		"tokenSeparators": {
			"type": "string\\[]",
			"default": "-",
			"desc": "在 tags 和 multiple 模式下自动分词的分隔符",
			"version": "4.5.1"
		},
		"value": {
			"type": "string \\| string\\[]<br />number \\| number\\[]<br />LabeledValue \\| LabeledValue[]",
			"default": "-",
			"desc": "指定当前选中的条目",
			"version": "4.5.1"
		},
		"virtual": {
			"type": "boolean",
			"default": "true",
			"desc": "设置 false 时关闭虚拟滚动",
			"version": "4.1.0"
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
		"loading": {
			"type": "boolean",
			"default": "false",
			"desc": "加载中状态",
			"version": "4.5.1"
		},
		"bordered": {
			"type": "boolean",
			"default": "true",
			"desc": "是否有边框",
			"version": "4.5.1"
		}
	},
	"events": {
		"onBlur": {
			"type": "function",
			"default": "-",
			"desc": "失去焦点时回调",
			"version": "4.5.1"
		},
		"onChange": {
			"type": "function(value, option:Option \\| Array&lt;Option>)",
			"default": "-",
			"desc": "选中 option，或 input 的 value 变化时，调用此函数",
			"version": "4.5.1"
		},
		"onDeselect": {
			"type": "function(string \\| number \\| LabeledValue)",
			"default": "-",
			"desc": "取消选中时调用，参数为选中项的 value (或 key) 值，仅在 multiple 或 tags 模式下生效",
			"version": "4.5.1"
		},
		"onFocus": {
			"type": "function",
			"default": "-",
			"desc": "获得焦点时回调",
			"version": "4.5.1"
		},
		"onInputKeyDown": {
			"type": "function",
			"default": "-",
			"desc": "按键按下时回调",
			"version": "4.5.1"
		},
		"onMouseEnter": {
			"type": "function",
			"default": "-",
			"desc": "鼠标移入时回调",
			"version": "4.5.1"
		},
		"onMouseLeave": {
			"type": "function",
			"default": "-",
			"desc": "鼠标移出时回调",
			"version": "4.5.1"
		},
		"onPopupScroll": {
			"type": "function",
			"default": "-",
			"desc": "下拉列表滚动时的回调",
			"version": "4.5.1"
		},
		"onSearch": {
			"type": "function(value: string)",
			"default": "-",
			"desc": "文本框值变化时回调",
			"version": "4.5.1"
		},
		"onSelect": {
			"type": "function(string \\| number \\| LabeledValue, option: Option)",
			"default": "-",
			"desc": "被选中时调用，参数为选中项的 value (或 key) 值",
			"version": "4.5.1"
		},
		"onDropdownVisibleChange": {
			"type": "function(open)",
			"default": "-",
			"desc": "展开下拉菜单的回调",
			"version": "4.5.1"
		}
	},
	"name": "Select",
	"title": "选择器",
	"categroy": "Output",
	"deprecated": false,
	"degrade": false
}