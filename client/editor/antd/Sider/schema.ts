export default {
	"props": {
		"breakpoint": {
			"desc": "触发响应式布局的[断点](/components/grid/#Col)",
			"type": "`xs` \| `sm` \| `md` \| `lg` \| `xl` \| `xxl`",
			"default": "-"
		},
		"className": {
			"desc": "容器 className",
			"type": "string",
			"default": "-"
		},
		"collapsed": {
			"desc": "当前收起状态",
			"type": "boolean",
			"default": "-"
		},
		"collapsedWidth": {
			"desc": "收缩宽度，设置为 0 会出现特殊 trigger",
			"type": "number",
			"default": "80"
		},
		"collapsible": {
			"desc": "是否可收起",
			"type": "boolean",
			"default": "false"
		},
		"defaultCollapsed": {
			"desc": "是否默认收起",
			"type": "boolean",
			"default": "false"
		},
		"reverseArrow": {
			"desc": "翻转折叠提示箭头的方向，当 Sider 在右边时可以使用",
			"type": "boolean",
			"default": "false"
		},
		"style": {
			"desc": "指定样式",
			"type": "CSSProperties",
			"default": "-"
		},
		"theme": {
			"desc": "主题颜色",
			"type": "`light` \| `dark` | `dark`",
			"default": "-"
		},
		"trigger": {
			"desc": "自定义 trigger，设置为 null 时隐藏 trigger",
			"type": "string \| ReactNode",
			"default": "-"
		},
		"width": {
			"desc": "宽度",
			"type": "number \| string",
			"default": "200"
		},
		"onCollapse": {
			"desc": "展开-收起时的回调函数，有点击 trigger 以及响应式反馈两种方式可以触发",
			"type": "(collapsed, type) => {}",
			"default": "-"
		},
		"onBreakpoint": {
			"desc": "触发响应式布局[断点](/components/grid/#API)时的回调",
			"type": "(broken) => {}",
			"default": "-"
		},
		"zeroWidthTriggerStyle": {
			"desc": "指定当 `collapsedWidth` 为 0 时出现的特殊 trigger 的样式",
			"type": "object",
			"default": "-"
		},
	},
	"events": {},
	"name": "Sider",
	"categroy": "Layout",
	"deprecated": false,
	"degrade": false
}