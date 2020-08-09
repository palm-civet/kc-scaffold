export default {
	"props": {
		"description": {
			"type": "string \\| ReactNode",
			"default": "-",
			"desc": "自定义描述内容",
			"version": "4.5.1"
		},
		"imageStyle": {
			"type": "CSSProperties",
			"default": "-",
			"desc": "图片样式",
			"version": "4.5.1"
		},
		"image": {
			"type": "string \\| ReactNode",
			"default": "`Empty.PRESENTED_IMAGE_DEFAULT`",
			"desc": "设置显示图片，为 string 时表示自定义图片地址。",
			"version": "4.5.1"
		}
	},
	"events": {},
	"name": "Empty",
	"categroy": "文本组件",
	"deprecated": false,
	"degrade": false
}