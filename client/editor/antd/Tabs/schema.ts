export default {
	"props": {
		"addIcon": {
			"type": "ReactNode",
			"default": "-",
			"desc": "自定义添加按钮",
			"version": "4.4.0"
		},
		"activeKey": {
			"type": "string",
			"default": "-",
			"desc": "当前激活 tab 面板的 key",
			"version": "4.5.1"
		},
		"animated": {
			"type": "boolean \\| {inkBar: boolean, tabPane: boolean}",
			"default": "false",
			"desc": "是否使用动画切换 Tabs，在 `tabPosition=\"top\" | \"bottom\"` 时有效",
			"version": "4.5.1"
		},
		"renderTabBar": {
			"type": "(props: DefaultTabBarProps, DefaultTabBar: React.ComponentClass) => React.ReactElement",
			"default": "-",
			"desc": "替换 TabBar，用于二次封装标签头",
			"version": "4.5.1"
		},
		"defaultActiveKey": {
			"type": "string",
			"default": "`第一个面板`",
			"desc": "初始化选中面板的 key，如果没有设置 activeKey",
			"version": "4.5.1"
		},
		"hideAdd": {
			"type": "boolean",
			"default": "false",
			"desc": "是否隐藏加号图标，在 `type=\"editable-card\"` 时有效",
			"version": "4.5.1"
		},
		"size": {
			"type": "string",
			"default": "`default`",
			"desc": "大小，提供 `large` `default` 和 `small` 三种大小",
			"version": "4.5.1"
		},
		"centered": {
			"type": "boolean",
			"default": "false",
			"desc": "标签居中展示",
			"version": "4.4.0"
		},
		"tabBarExtraContent": {
			"type": "ReactNode",
			"default": "-",
			"desc": "tab bar 上额外的元素",
			"version": "4.5.1"
		},
		"tabBarGutter": {
			"type": "number",
			"default": "-",
			"desc": "tabs 之间的间隙",
			"version": "4.5.1"
		},
		"tabBarStyle": {
			"type": "object",
			"default": "-",
			"desc": "tab bar 的样式对象",
			"version": "4.5.1"
		},
		"tabPosition": {
			"type": "string",
			"default": "`top`",
			"desc": "页签位置，可选值有 `top` `right` `bottom` `left`",
			"version": "4.5.1"
		},
		"type": {
			"type": "string",
			"default": "`line`",
			"desc": "页签的基本样式，可选 `line`、`card` `editable-card` 类型",
			"version": "4.5.1"
		},
		"keyboard": {
			"type": "boolean",
			"default": "true",
			"desc": "开启键盘切换功能",
			"version": "4.5.1"
		}
	},
	"events": {
		"onChange": {
			"type": "function(activeKey) {}",
			"default": "-",
			"desc": "切换面板的回调",
			"version": "4.5.1"
		},
		"onEdit": {
			"type": "(targetKey, action): void",
			"default": "-",
			"desc": "新增和删除页签的回调，在 `type=\"editable-card\"` 时有效",
			"version": "4.5.1"
		},
		"onTabClick": {
			"type": "function(key: string, event: MouseEvent)",
			"default": "-",
			"desc": "tab 被点击的回调",
			"version": "4.5.1"
		},
		"onTabScroll": {
			"type": "function({ direction: `left` \\| `right` \\| `top` \\| `bottom` })",
			"default": "-",
			"desc": "tab 滚动时触发",
			"version": "4.3.0"
		}
	},
	"name": "Tabs",
	"categroy": "页面组件",
	"deprecated": false,
	"degrade": false
}