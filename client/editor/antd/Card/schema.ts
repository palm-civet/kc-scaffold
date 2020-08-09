export default {
	"props": {
		"actions": {
			"type": "Array&lt;ReactNode>",
			"default": "-",
			"desc": "卡片操作组，位置在卡片底部",
			"version": "4.5.1"
		},
		"activeTabKey": {
			"type": "string",
			"default": "-",
			"desc": "当前激活页签的 key",
			"version": "4.5.1"
		},
		"headStyle": {
			"type": "CSSProperties",
			"default": "-",
			"desc": "自定义标题区域样式",
			"version": "4.5.1"
		},
		"bodyStyle": {
			"type": "CSSProperties",
			"default": "-",
			"desc": "内容区域自定义样式",
			"version": "4.5.1"
		},
		"bordered": {
			"type": "boolean",
			"default": "true",
			"desc": "是否有边框",
			"version": "4.5.1"
		},
		"cover": {
			"type": "ReactNode",
			"default": "-",
			"desc": "卡片封面",
			"version": "4.5.1"
		},
		"defaultActiveTabKey": {
			"type": "string",
			"default": "`第一个页签`",
			"desc": "初始化选中页签的 key，如果没有设置 activeTabKey",
			"version": "4.5.1"
		},
		"extra": {
			"type": "string \\| ReactNode",
			"default": "-",
			"desc": "卡片右上角的操作区域",
			"version": "4.5.1"
		},
		"hoverable": {
			"type": "boolean",
			"default": "false",
			"desc": "鼠标移过时可浮起",
			"version": "4.5.1"
		},
		"loading": {
			"type": "boolean",
			"default": "false",
			"desc": "当卡片内容还在加载中时，可以用 loading 展示一个占位",
			"version": "4.5.1"
		},
		"tabList": {
			"type": "Array&lt;{key: string, tab: ReactNode}>",
			"default": "-",
			"desc": "页签标题列表",
			"version": "4.5.1"
		},
		"tabBarExtraContent": {
			"type": "ReactNode",
			"default": "-",
			"desc": "tab bar 上额外的元素",
			"version": "4.5.1"
		},
		"size": {
			"type": "`default` \\| `small`",
			"default": "`default`",
			"desc": "card 的尺寸",
			"version": "4.5.1"
		},
		"title": {
			"type": "string \\| ReactNode",
			"default": "-",
			"desc": "卡片标题",
			"version": "4.5.1"
		},
		"type": {
			"type": "string",
			"default": "-",
			"desc": "卡片类型，可设置为 `inner` 或 不设置",
			"version": "4.5.1"
		},
		"tabProps": {
			"type": "-",
			"default": "-",
			"desc": "[Tabs](/components/tabs/#Tabs)",
			"version": "4.5.1"
		}
	},
	"events": {
		"onTabChange": {
			"type": "(key) => void",
			"default": "-",
			"desc": "页签切换的回调",
			"version": "4.5.1"
		}
	},
	"name": "Card",
	"categroy": "Container",
	"deprecated": false,
	"degrade": false
}