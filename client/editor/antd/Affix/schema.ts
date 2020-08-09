export default {
	"props": {
		"offsetBottom": {
			"type": "number",
			"default": "-",
			"desc": "距离窗口底部达到指定偏移量后触发",
			"version": "4.5.1"
		},
		"offsetTop": {
			"type": "number",
			"default": "-",
			"desc": "距离窗口顶部达到指定偏移量后触发",
			"version": "4.5.1"
		},
		"target": {
			"type": "() => HTMLElement",
			"default": "() => window",
			"desc": "设置 `Affix` 需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数",
			"version": "4.5.1"
		}
	},
	"events": {
		"onChange": {
			"type": "Function(affixed)",
			"default": "-",
			"desc": "固定状态改变时触发的回调函数",
			"version": "4.5.1"
		}
	},
	"name": "Affix",
	"categroy": "Meta",
	"deprecated": false,
	"degrade": false
}