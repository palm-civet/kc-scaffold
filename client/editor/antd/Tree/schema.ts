export default {
	"props": {
		"autoExpandParent": {
			"type": "boolean",
			"default": "true",
			"desc": "是否自动展开父节点",
			"version": "4.5.1"
		},
		"blockNode": {
			"type": "boolean",
			"default": "false",
			"desc": "是否节点占据一行",
			"version": "4.5.1"
		},
		"checkable": {
			"type": "boolean",
			"default": "false",
			"desc": "节点前添加 Checkbox 复选框",
			"version": "4.5.1"
		},
		"checkedKeys": {
			"type": "string\\[] \\| {checked: string\\[], halfChecked: string\\[]}",
			"default": "\\[]",
			"desc": "（受控）选中复选框的树节点（注意：父子节点有关联，如果传入父节点 key，则子节点自动选中；相应当子节点 key 都传入，父节点也自动选中。当设置`checkable`和`checkStrictly`，它是一个有`checked`和`halfChecked`属性的对象，并且父子节点的选中与否不再关联",
			"version": "4.5.1"
		},
		"checkStrictly": {
			"type": "boolean",
			"default": "false",
			"desc": "checkable 状态下节点选择完全受控（父子节点选中状态不再关联）",
			"version": "4.5.1"
		},
		"defaultCheckedKeys": {
			"type": "string\\[]",
			"default": "\\[]",
			"desc": "默认选中复选框的树节点",
			"version": "4.5.1"
		},
		"defaultExpandAll": {
			"type": "boolean",
			"default": "false",
			"desc": "默认展开所有树节点",
			"version": "4.5.1"
		},
		"defaultExpandedKeys": {
			"type": "string\\[]",
			"default": "\\[]",
			"desc": "默认展开指定的树节点",
			"version": "4.5.1"
		},
		"defaultExpandParent": {
			"type": "boolean",
			"default": "true",
			"desc": "默认展开父节点",
			"version": "4.5.1"
		},
		"defaultSelectedKeys": {
			"type": "string\\[]",
			"default": "\\[]",
			"desc": "默认选中的树节点",
			"version": "4.5.1"
		},
		"disabled": {
			"type": "boolean",
			"default": "false",
			"desc": "将树禁用",
			"version": "4.5.1"
		},
		"draggable": {
			"type": "boolean",
			"default": "false",
			"desc": "设置节点可拖拽（IE>8）",
			"version": "4.5.1"
		},
		"expandedKeys": {
			"type": "string\\[]",
			"default": "\\[]",
			"desc": "（受控）展开指定的树节点",
			"version": "4.5.1"
		},
		"filterTreeNode": {
			"type": "function(node)",
			"default": "-",
			"desc": "按需筛选树节点（高亮），返回 true",
			"version": "4.5.1"
		},
		"loadData": {
			"type": "function(node)",
			"default": "-",
			"desc": "异步加载数据",
			"version": "4.5.1"
		},
		"loadedKeys": {
			"type": "string\\[]",
			"default": "\\[]",
			"desc": "（受控）已经加载的节点，需要配合 `loadData` 使用",
			"version": "4.5.1"
		},
		"multiple": {
			"type": "boolean",
			"default": "false",
			"desc": "支持点选多个节点（节点本身）",
			"version": "4.5.1"
		},
		"selectable": {
			"type": "boolean",
			"default": "true",
			"desc": "是否可选中",
			"version": "4.5.1"
		},
		"selectedKeys": {
			"type": "string\\[]",
			"default": "-",
			"desc": "（受控）设置选中的树节点",
			"version": "4.5.1"
		},
		"showIcon": {
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
		"showLine": {
			"type": "boolean \\| {showLeafIcon: boolean}",
			"default": "false",
			"desc": "是否展示连接线",
			"version": "4.5.1"
		},
		"titleRender": {
			"type": "(nodeData) => ReactNode",
			"default": "-",
			"desc": "自定义渲染节点",
			"version": "4.5.0"
		},
		"treeData": {
			"type": "array&lt;{key, title, children, \\[disabled, selectable]}>",
			"default": "-",
			"desc": "treeNodes 数据，如果设置则不需要手动构造 TreeNode 节点（key 在整个树范围内唯一）",
			"version": "4.5.1"
		},
		"virtual": {
			"type": "boolean",
			"default": "true",
			"desc": "设置 false 时关闭虚拟滚动",
			"version": "4.1.0"
		},
		"icon": {
			"type": "ReactNode \\| (props) => ReactNode",
			"default": "-",
			"desc": "自定义树节点图标。",
			"version": "4.5.1"
		}
	},
	"events": {
		"onCheck": {
			"type": "function(checkedKeys, e:{checked: bool, checkedNodes, node, event, halfCheckedKeys})",
			"default": "-",
			"desc": "点击复选框触发",
			"version": "4.5.1"
		},
		"onDragEnd": {
			"type": "function({event, node})",
			"default": "-",
			"desc": "dragend 触发时调用",
			"version": "4.5.1"
		},
		"onDragEnter": {
			"type": "function({event, node, expandedKeys})",
			"default": "-",
			"desc": "dragenter 触发时调用",
			"version": "4.5.1"
		},
		"onDragLeave": {
			"type": "function({event, node})",
			"default": "-",
			"desc": "dragleave 触发时调用",
			"version": "4.5.1"
		},
		"onDragOver": {
			"type": "function({event, node})",
			"default": "-",
			"desc": "dragover 触发时调用",
			"version": "4.5.1"
		},
		"onDragStart": {
			"type": "function({event, node})",
			"default": "-",
			"desc": "开始拖拽时调用",
			"version": "4.5.1"
		},
		"onDrop": {
			"type": "function({event, node, dragNode, dragNodesKeys})",
			"default": "-",
			"desc": "drop 触发时调用",
			"version": "4.5.1"
		},
		"onExpand": {
			"type": "function(expandedKeys, {expanded: bool, node})",
			"default": "-",
			"desc": "展开/收起节点时触发",
			"version": "4.5.1"
		},
		"onLoad": {
			"type": "function(loadedKeys, {event, node})",
			"default": "-",
			"desc": "节点加载完毕时触发",
			"version": "4.5.1"
		},
		"onRightClick": {
			"type": "function({event, node})",
			"default": "-",
			"desc": "响应右键点击",
			"version": "4.5.1"
		},
		"onSelect": {
			"type": "function(selectedKeys, e:{selected: bool, selectedNodes, node, event})",
			"default": "-",
			"desc": "点击树节点触发",
			"version": "4.5.1"
		}
	},
	"name": "Tree",
	"categroy": "Output",
	"deprecated": false,
	"degrade": false
}