export default {
	"props": {
		"allowClear": {
			"type": "boolean",
			"default": "false",
			"desc": "显示清除按钮",
			"version": "4.5.1"
		},
		"autoClearSearchValue": {
			"type": "boolean",
			"default": "true",
			"desc": "当多选模式下值被选择，自动清空搜索框",
			"version": "4.5.1"
		},
		"bordered": {
			"type": "boolean",
			"default": "true",
			"desc": "是否显示边框",
			"version": "4.5.1"
		},
		"defaultValue": {
			"type": "string \\| string\\[]",
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
			"type": "(originNode: ReactNode, props) => ReactNode",
			"default": "-",
			"desc": "自定义下拉框内容",
			"version": "4.5.1"
		},
		"dropdownStyle": {
			"type": "object",
			"default": "-",
			"desc": "下拉菜单的样式",
			"version": "4.5.1"
		},
		"filterTreeNode": {
			"type": "boolean \\| function(inputValue: string, treeNode: TreeNode) (函数需要返回 bool 值)",
			"default": "function",
			"desc": "是否根据输入项进行筛选，默认用 treeNodeFilterProp 的值作为要筛选的 TreeNode 的属性值",
			"version": "4.5.1"
		},
		"getPopupContainer": {
			"type": "function(triggerNode)",
			"default": "() => document.body",
			"desc": "菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。[示例](https://codepen.io/afc163/pen/zEjNOy?editors=0010)",
			"version": "4.5.1"
		},
		"labelInValue": {
			"type": "boolean",
			"default": "false",
			"desc": "是否把每个选项的 label 包装到 value 中，会把 value 类型从 `string` 变为 {value: string, label: ReactNode, halfChecked(treeCheckStrictly 时有效): string[] } 的格式",
			"version": "4.5.1"
		},
		"listHeight": {
			"type": "number",
			"default": "256",
			"desc": "设置弹窗滚动高度",
			"version": "4.5.1"
		},
		"loadData": {
			"type": "function(node)",
			"default": "-",
			"desc": "异步加载数据",
			"version": "4.5.1"
		},
		"maxTagCount": {
			"type": "number",
			"default": "-",
			"desc": "最多显示多少个 tag",
			"version": "4.5.1"
		},
		"maxTagPlaceholder": {
			"type": "ReactNode \\| function(omittedValues)",
			"default": "-",
			"desc": "隐藏 tag 时显示的内容",
			"version": "4.5.1"
		},
		"multiple": {
			"type": "boolean",
			"default": "false",
			"desc": "支持多选（当设置 treeCheckable 时自动变为 true）",
			"version": "4.5.1"
		},
		"placeholder": {
			"type": "string",
			"default": "-",
			"desc": "选择框默认文字",
			"version": "4.5.1"
		},
		"searchValue": {
			"type": "string",
			"default": "-",
			"desc": "搜索框的值，可以通过 `onSearch` 获取用户输入",
			"version": "4.5.1"
		},
		"treeIcon": {
			"type": "boolean",
			"default": "false",
			"desc": "是否展示 TreeNode title 前的图标，没有默认样式，如设置为 true，需要自行定义图标相关样式",
			"version": "4.5.1"
		},
		"switcherIcon": {
			"type": "ReactNode",
			"default": "-",
			"desc": "自定义树节点的展开/折叠图标",
			"version": "4.5.1"
		},
		"showCheckedStrategy": {
			"type": "`TreeSelect.SHOW_ALL` \\| `TreeSelect.SHOW_PARENT` \\| `TreeSelect.SHOW_CHILD`",
			"default": "`TreeSelect.SHOW_CHILD`",
			"desc": "定义选中项回填的方式。`TreeSelect.SHOW_ALL`: 显示所有选中节点(包括父节点)。`TreeSelect.SHOW_PARENT`: 只显示父节点(当父节点下所有子节点都选中时)。 默认只显示子节点",
			"version": "4.5.1"
		},
		"showSearch": {
			"type": "boolean",
			"default": "单选：false \\| 多选：true",
			"desc": "是否支持搜索框",
			"version": "4.5.1"
		},
		"size": {
			"type": "`large` \\| `middle` \\| `small`",
			"default": "-",
			"desc": "选择框大小",
			"version": "4.5.1"
		},
		"showArrow": {
			"type": "boolean",
			"default": "-",
			"desc": "是否显示 `suffixIcon`，单选模式下默认 `true`",
			"version": "4.5.1"
		},
		"suffixIcon": {
			"type": "ReactNode",
			"default": "-",
			"desc": "自定义的选择框后缀图标, 多选模式下必须同时设置 `showArrow` 为 true",
			"version": "4.5.1"
		},
		"treeCheckable": {
			"type": "boolean",
			"default": "false",
			"desc": "显示 Checkbox",
			"version": "4.5.1"
		},
		"treeCheckStrictly": {
			"type": "boolean",
			"default": "false",
			"desc": "`checkable` 状态下节点选择完全受控（父子节点选中状态不再关联），会使得 `labelInValue` 强制为 true",
			"version": "4.5.1"
		},
		"treeData": {
			"type": "array&lt;{value, title, children, \\[disabled, disableCheckbox, selectable, checkable]}>",
			"default": "\\[]",
			"desc": "treeNodes 数据，如果设置则不需要手动构造 TreeNode 节点（value 在整个树范围内唯一）",
			"version": "4.5.1"
		},
		"treeDataSimpleMode": {
			"type": "false \\| object&lt;{ id: string, pId: string, rootPId: string }>",
			"default": "false",
			"desc": "使用简单格式的 treeData，具体设置参考可设置的类型 (此时 treeData 应变为这样的数据结构: \\[{id:1, pId:0, value:'1', title:\"test1\",...},...]， `pId` 是父节点的 id)",
			"version": "4.5.1"
		},
		"treeDefaultExpandAll": {
			"type": "boolean",
			"default": "false",
			"desc": "默认展开所有树节点",
			"version": "4.5.1"
		},
		"treeDefaultExpandedKeys": {
			"type": "string\\[]",
			"default": "-",
			"desc": "默认展开的树节点",
			"version": "4.5.1"
		},
		"treeExpandedKeys": {
			"type": "string\\[]",
			"default": "-",
			"desc": "设置展开的树节点",
			"version": "4.5.1"
		},
		"treeNodeFilterProp": {
			"type": "string",
			"default": "`value`",
			"desc": "输入项过滤对应的 treeNode 属性",
			"version": "4.5.1"
		},
		"treeNodeLabelProp": {
			"type": "string",
			"default": "`title`",
			"desc": "作为显示的 prop 设置",
			"version": "4.5.1"
		},
		"value": {
			"type": "string \\| string\\[]",
			"default": "-",
			"desc": "指定当前选中的条目",
			"version": "4.5.1"
		},
		"virtual": {
			"type": "boolean",
			"default": "true",
			"desc": "设置 false 时关闭虚拟滚动",
			"version": "4.1.0"
		}
	},
	"events": {
		"onChange": {
			"type": "function(value, label, extra)",
			"default": "-",
			"desc": "选中树节点时调用此函数",
			"version": "4.5.1"
		},
		"onSearch": {
			"type": "function(value: string)",
			"default": "-",
			"desc": "文本框值变化时回调",
			"version": "4.5.1"
		},
		"onSelect": {
			"type": "function(value, node, extra)",
			"default": "-",
			"desc": "被选中时调用",
			"version": "4.5.1"
		},
		"onTreeExpand": {
			"type": "function(expandedKeys)",
			"default": "-",
			"desc": "展示节点时调用",
			"version": "4.5.1"
		}
	},
	"name": "TreeSelect",
	"title": "树选择",
	"categroy": "Output",
	"deprecated": false,
	"degrade": false
}