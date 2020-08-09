export default {
	"props": {
		"className": {
			"type": "string",
			"default": "-",
			"desc": "设置图标的样式名",
			"version": "4.5.1"
		},
		"style": {
			"type": "CSSProperties",
			"default": "-",
			"desc": "设置图标的样式，例如 `fontSize` 和 `color`",
			"version": "4.5.1"
		},
		"spin": {
			"type": "boolean",
			"default": "false",
			"desc": "是否有旋转动画",
			"version": "4.5.1"
		},
		"rotate": {
			"type": "number",
			"default": "-",
			"desc": "图标旋转角度（IE9 无效）",
			"version": "4.5.1"
		},
		"twoToneColor": {
			"type": "string (十六进制颜色)",
			"default": "-",
			"desc": "仅适用双色图标。设置双色图标的主要颜色",
			"version": "4.5.1"
		}
	},
	"events": {},
	"name": "Icon",
	"categroy": "文本组件",
	"deprecated": false,
	"degrade": false
}