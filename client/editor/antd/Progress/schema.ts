export default {
	"props": {
		"type": {
			"type": "string",
			"default": "`line`",
			"desc": "类型，可选 `line` `circle` `dashboard`",
			"version": "4.5.1"
		},
		"format": {
			"type": "function(percent, successPercent)",
			"default": "(percent) => percent + `%`",
			"desc": "内容的模板函数",
			"version": "4.5.1"
		},
		"percent": {
			"type": "number",
			"default": "0",
			"desc": "百分比",
			"version": "4.5.1"
		},
		"showInfo": {
			"type": "boolean",
			"default": "true",
			"desc": "是否显示进度数值或状态图标",
			"version": "4.5.1"
		},
		"status": {
			"type": "string",
			"default": "-",
			"desc": "状态，可选：`success` `exception` `normal` `active`(仅限 line)",
			"version": "4.5.1"
		},
		"strokeLinecap": {
			"type": "`round` \\| `square`",
			"default": "`round`",
			"desc": "进度条的样式",
			"version": "4.5.1"
		},
		"strokeColor": {
			"type": "string",
			"default": "-",
			"desc": "进度条的色彩",
			"version": "4.5.1"
		},
		"trailColor": {
			"type": "string",
			"default": "-",
			"desc": "未完成的分段的颜色",
			"version": "4.5.1"
		},
		"success": {
			"type": "{ percent: number, strokeColor: string }",
			"default": "-",
			"desc": "成功进度条相关配置",
			"version": "4.5.1"
		}
	},
	"events": {},
	"name": "Progress",
	"title": "进度条",
	"deprecated": false,
	"degrade": false
}