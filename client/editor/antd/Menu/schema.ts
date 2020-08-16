export default {
	"props": {
		"defaultOpenKeys": {
			"type": "string\\[]",
			"default": "-",
			"desc": "初始展开的 SubMenu 菜单项 key 数组",
			"version": "4.5.1"
		},
		"defaultSelectedKeys": {
			"type": "string\\[]",
			"default": "-",
			"desc": "初始选中的菜单项 key 数组",
			"version": "4.5.1"
		},
		"forceSubMenuRender": {
			"type": "boolean",
			"default": "false",
			"desc": "在子菜单展示之前就渲染进 DOM",
			"version": "4.5.1"
		},
		"inlineCollapsed": {
			"type": "boolean",
			"default": "-",
			"desc": "inline 时菜单是否收起状态",
			"version": "4.5.1"
		},
		"inlineIndent": {
			"type": "number",
			"default": "24",
			"desc": "inline 模式的菜单缩进宽度",
			"version": "4.5.1"
		},
		"mode": {
			"type": "`vertical` \\| `horizontal` \\| `inline`",
			"default": "`vertical`",
			"desc": "菜单类型，现在支持垂直、水平、和内嵌模式三种",
			"version": "4.5.1"
		},
		"multiple": {
			"type": "boolean",
			"default": "false",
			"desc": "是否允许多选",
			"version": "4.5.1"
		},
		"openKeys": {
			"type": "string\\[]",
			"default": "-",
			"desc": "当前展开的 SubMenu 菜单项 key 数组",
			"version": "4.5.1"
		},
		"selectable": {
			"type": "boolean",
			"default": "true",
			"desc": "是否允许选中",
			"version": "4.5.1"
		},
		"selectedKeys": {
			"type": "string\\[]",
			"default": "-",
			"desc": "当前选中的菜单项 key 数组",
			"version": "4.5.1"
		},
		"style": {
			"type": "CSSProperties",
			"default": "-",
			"desc": "根节点样式",
			"version": "4.5.1"
		},
		"subMenuCloseDelay": {
			"type": "number",
			"default": "0.1",
			"desc": "用户鼠标离开子菜单后关闭延时，单位：秒",
			"version": "4.5.1"
		},
		"subMenuOpenDelay": {
			"type": "number",
			"default": "0",
			"desc": "用户鼠标进入子菜单后开启延时，单位：秒",
			"version": "4.5.1"
		},
		"theme": {
			"type": "`light` \\| `dark`",
			"default": "`light`",
			"desc": "主题颜色",
			"version": "4.5.1"
		},
		"triggerSubMenuAction": {
			"type": "`hover` \\| `click`",
			"default": "`hover`",
			"desc": "SubMenu 展开/关闭的触发行为",
			"version": "4.5.1"
		},
		"overflowedIndicator": {
			"type": "ReactNode",
			"default": "-",
			"desc": "自定义 Menu 折叠时的图标",
			"version": "4.5.1"
		}
	},
	"events": {
		"onClick": {
			"type": "function({ item, key, keyPath, domEvent })",
			"default": "-",
			"desc": "点击 MenuItem 调用此函数",
			"version": "4.5.1"
		},
		"onDeselect": {
			"type": "function({ item, key, keyPath, selectedKeys, domEvent })",
			"default": "-",
			"desc": "取消选中时调用，仅在 multiple 生效",
			"version": "4.5.1"
		},
		"onOpenChange": {
			"type": "function(openKeys: string\\[])",
			"default": "-",
			"desc": "SubMenu 展开/关闭的回调",
			"version": "4.5.1"
		},
		"onSelect": {
			"type": "function({ item, key, keyPath, selectedKeys, domEvent })",
			"default": "-",
			"desc": "被选中时调用",
			"version": "4.5.1"
		}
	},
	"name": "Menu",
	"title": "导航菜单",
	"deprecated": true,
	"degrade": false
}