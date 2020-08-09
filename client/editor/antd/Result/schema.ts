export default {
	"props": {
		"title": {
			"type": "ReactNode",
			"default": "-",
			"desc": "title 文字",
			"version": "4.5.1"
		},
		"subTitle": {
			"type": "ReactNode",
			"default": "-",
			"desc": "subTitle 文字",
			"version": "4.5.1"
		},
		"status": {
			"type": "`success` \\| `error` \\| `info` \\| `warning` \\| `404` \\| `403` \\| `500`",
			"default": "`info`",
			"desc": "结果的状态，决定图标和颜色",
			"version": "4.5.1"
		},
		"icon": {
			"type": "ReactNode",
			"default": "-",
			"desc": "自定义 icon",
			"version": "4.5.1"
		},
		"extra": {
			"type": "ReactNode",
			"default": "-",
			"desc": "操作区",
			"version": "4.5.1"
		}
	},
	"events": {},
	"name": "Result",
	"categroy": "元组件",
	"deprecated": false,
	"degrade": false
}