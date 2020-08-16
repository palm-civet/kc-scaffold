export default {
	"props": {
		"content": {
			"type": "string \\| ReactNode \\| config",
			"default": "-",
			"desc": "提示内容",
			"version": "4.5.1"
		},
		"duration": {
			"type": "number",
			"default": "3",
			"desc": "自动关闭的延时，单位秒。设为 0 时不自动关闭",
			"version": "4.5.1"
		}
	},
	"events": {
		"onClose": {
			"type": "function",
			"default": "-",
			"desc": "关闭时触发的回调函数",
			"version": "4.5.1"
		}
	},
	"name": "Message",
	"title": "全局提示",
	"categroy": "Meta",
	"deprecated": false,
	"degrade": true
}