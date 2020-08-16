export default {
	"props": {
		"affix": {
			"type": "boolean",
			"default": "true",
			"desc": "固定模式",
			"version": "4.5.1"
		},
		"bounds": {
			"type": "number",
			"default": "5",
			"desc": "锚点区域边界",
			"version": "4.5.1"
		},
		"getContainer": {
			"type": "() => HTMLElement",
			"default": "() => window",
			"desc": "指定滚动的容器",
			"version": "4.5.1"
		},
		"offsetBottom": {
			"type": "number",
			"default": "",
			"desc": "距离窗口底部达到指定偏移量后触发",
			"version": "4.5.1"
		},
		"offsetTop": {
			"type": "number",
			"default": "",
			"desc": "距离窗口顶部达到指定偏移量后触发",
			"version": "4.5.1"
		},
		"showInkInFixed": {
			"type": "boolean",
			"default": "false",
			"desc": "固定模式是否显示小圆点",
			"version": "4.5.1"
		},
		"getCurrentAnchor": {
			"type": "() => string",
			"default": "-",
			"desc": "自定义高亮的锚点",
			"version": "4.5.1"
		},
		"targetOffset": {
			"type": "number",
			"default": "-",
			"desc": "锚点滚动偏移量，默认与 offsetTop 相同，[例子](#components-anchor-demo-targetOffset)",
			"version": "4.5.1"
		}
	},
	"events": {
		"onClick": {
			"type": "function(e: Event, link: Object)",
			"default": "-",
			"desc": "`click` 事件的 handler",
			"version": "4.5.1"
		},
		"onChange": {
			"type": "(currentActiveLink: string) => void",
			"default": "-",
			"desc": "监听锚点链接改变",
			"version": "4.5.1"
		}
	},
	"name": "Anchor",
	"title": "锚点",
	"deprecated": true,
	"degrade": false
}