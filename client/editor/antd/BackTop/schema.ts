export default {
	"props": {
		"target": {
			"type": "() => HTMLElement",
			"default": "() => window",
			"desc": "设置需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数",
			"version": "4.5.1"
		},
		"visibilityHeight": {
			"type": "number",
			"default": "400",
			"desc": "滚动高度达到此参数值才出现 BackTop",
			"version": "4.5.1"
		},
		"duration": {
			"type": "number",
			"default": "450",
			"desc": "回到顶部所需时间（ms）",
			"version": "4.4.0"
		}
	},
	"events": {
		"onClick": {
			"type": "function",
			"default": "-",
			"desc": "点击按钮的回调函数",
			"version": "4.5.1"
		}
	},
	"name": "BackTop",
	"categroy": "全局元组件",
	"deprecated": false,
	"degrade": false
}