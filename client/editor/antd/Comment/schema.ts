export default {
	"props": {
		"actions": {
			"type": "Array&lt;ReactNode>",
			"default": "-",
			"desc": "在评论内容下面呈现的操作项列表",
			"version": "4.5.1"
		},
		"author": {
			"type": "string \\| ReactNode",
			"default": "-",
			"desc": "要显示为注释作者的元素",
			"version": "4.5.1"
		},
		"avatar": {
			"type": "string \\| ReactNode",
			"default": "-",
			"desc": "要显示为评论头像的元素 - 通常是 antd Avatar 或者 src",
			"version": "4.5.1"
		},
		"children": {
			"type": "ReactNode",
			"default": "-",
			"desc": "嵌套注释应作为注释的子项提供",
			"version": "4.5.1"
		},
		"content": {
			"type": "string \\| ReactNode",
			"default": "-",
			"desc": "评论的主要内容",
			"version": "4.5.1"
		},
		"datetime": {
			"type": "string \\| ReactNode",
			"default": "-",
			"desc": "展示时间描述",
			"version": "4.5.1"
		}
	},
	"events": {},
	"name": "Comment",
	"deprecated": true,
	"degrade": false
}