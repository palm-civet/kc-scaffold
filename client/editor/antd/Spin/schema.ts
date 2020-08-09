export default {
	"props": {
		"delay": {
			"type": "number (毫秒)",
			"default": "-",
			"desc": "延迟显示加载效果的时间（防止闪烁）",
			"version": "4.5.1"
		},
		"indicator": {
			"type": "ReactNode",
			"default": "-",
			"desc": "加载指示符",
			"version": "4.5.1"
		},
		"size": {
			"type": "string",
			"default": "`default`",
			"desc": "组件大小，可选值为 `small` `default` `large`",
			"version": "4.5.1"
		},
		"spinning": {
			"type": "boolean",
			"default": "true",
			"desc": "是否为加载中状态",
			"version": "4.5.1"
		},
		"tip": {
			"type": "string",
			"default": "-",
			"desc": "当作为包裹元素时，可以自定义描述文案",
			"version": "4.5.1"
		},
		"wrapperClassName": {
			"type": "string",
			"default": "-",
			"desc": "包装器的类属性",
			"version": "4.5.1"
		}
	},
	"events": {},
	"name": "Spin",
	"categroy": "Text",
	"deprecated": false,
	"degrade": false
}