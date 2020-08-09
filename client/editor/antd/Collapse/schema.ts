export default {
	"props": {
		"activeKey": {
			"type": "string\\[] \\| string <br/> number\\[] \\| number",
			"default": "默认无，accordion 模式下默认第一个元素",
			"desc": "当前激活 tab 面板的 key",
			"version": "4.5.1"
		},
		"defaultActiveKey": {
			"type": "string\\[] \\| string<br/> number\\[] \\| number",
			"default": "-",
			"desc": "初始化选中面板的 key",
			"version": "4.5.1"
		},
		"bordered": {
			"type": "boolean",
			"default": "true",
			"desc": "带边框风格的折叠面板",
			"version": "4.5.1"
		},
		"accordion": {
			"type": "boolean",
			"default": "false",
			"desc": "手风琴模式",
			"version": "4.5.1"
		},
		"expandIcon": {
			"type": "(panelProps) => ReactNode",
			"default": "-",
			"desc": "自定义切换图标",
			"version": "4.5.1"
		},
		"expandIconPosition": {
			"type": "`left` \\| `right`",
			"default": "-",
			"desc": "设置图标位置",
			"version": "4.5.1"
		},
		"destroyInactivePanel": {
			"type": "boolean",
			"default": "false",
			"desc": "销毁折叠隐藏的面板",
			"version": "4.5.1"
		},
		"ghost": {
			"type": "boolean",
			"default": "false",
			"desc": "使折叠面板透明且无边框",
			"version": "4.4.0"
		}
	},
	"events": {
		"onChange": {
			"type": "function",
			"default": "-",
			"desc": "切换面板的回调",
			"version": "4.5.1"
		}
	},
	"name": "Collapse",
	"categroy": "复合组件",
	"deprecated": false,
	"degrade": false
}