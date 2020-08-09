export default {
	"props": {
		"pending": {
			"type": "boolean \\| string \\| ReactNode",
			"default": "false",
			"desc": "指定最后一个幽灵节点是否存在或内容",
			"version": "4.5.1"
		},
		"pendingDot": {
			"type": "string \\| ReactNode",
			"default": "&lt;LoadingOutlined />",
			"desc": "当最后一个幽灵节点存在時，指定其时间图点",
			"version": "4.5.1"
		},
		"reverse": {
			"type": "boolean",
			"default": "false",
			"desc": "节点排序",
			"version": "4.5.1"
		},
		"mode": {
			"type": "`left` \\| `alternate` \\| `right`",
			"default": "-",
			"desc": "通过设置 `mode` 可以改变时间轴和内容的相对位置",
			"version": "4.5.1"
		}
	},
	"events": {},
	"name": "Timeline",
	"categroy": "元组件",
	"deprecated": false,
	"degrade": false
}