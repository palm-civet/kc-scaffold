export default {
	"props": {
		"color": {
			"type": "string",
			"default": "-",
			"desc": "自定义小圆点的颜色",
			"version": "4.5.1"
		},
		"count": {
			"type": "ReactNode",
			"default": "-",
			"desc": "展示的数字，大于 overflowCount 时显示为 `${overflowCount}+`，为 0 时隐藏",
			"version": "4.5.1"
		},
		"dot": {
			"type": "boolean",
			"default": "false",
			"desc": "不展示数字，只有一个小红点",
			"version": "4.5.1"
		},
		"offset": {
			"type": "\\[number, number]",
			"default": "-",
			"desc": "设置状态点的位置偏移",
			"version": "4.5.1"
		},
		"overflowCount": {
			"type": "number",
			"default": "99",
			"desc": "展示封顶的数字值",
			"version": "4.5.1"
		},
		"showZero": {
			"type": "boolean",
			"default": "false",
			"desc": "当数值为 0 时，是否展示 Badge",
			"version": "4.5.1"
		},
		"status": {
			"type": "`success` \\| `processing` \\| `default` \\| `error` \\| `warning`",
			"default": "-",
			"desc": "设置 Badge 为状态点",
			"version": "4.5.1"
		},
		"text": {
			"type": "ReactNode",
			"default": "-",
			"desc": "在设置了 `status` 的前提下有效，设置状态点的文本",
			"version": "4.5.1"
		},
		"title": {
			"type": "string",
			"default": "-",
			"desc": "设置鼠标放在状态点上时显示的文字",
			"version": "4.5.1"
		}
	},
	"events": {},
	"name": "Badge",
	"categroy": "Decoration",
	"deprecated": false,
	"degrade": false
}