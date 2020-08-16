export default {
	"props": {
		"className": {
			"type": "string",
			"default": "-",
			"desc": "容器 className",
			"version": "4.5.1"
		},
		"hasSider": {
			"type": "boolean",
			"default": "-",
			"desc": "表示子元素里有 Sider，一般不用指定。可用于服务端渲染时避免样式闪动",
			"version": "4.5.1"
		},
		"style": {
			"type": "CSSProperties",
			"default": "-",
			"desc": "指定样式",
			"version": "4.5.1"
		}
	},
	"events": {},
	"name": "Layout",
	"title": "布局",
	"categroy": "Layout",
	"deprecated": false,
	"degrade": false
}