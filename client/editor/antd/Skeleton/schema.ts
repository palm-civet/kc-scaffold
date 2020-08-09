export default {
	"props": {
		"active": {
			"type": "boolean",
			"default": "false",
			"desc": "是否展示动画效果",
			"version": "4.5.1"
		},
		"avatar": {
			"type": "boolean \\| [SkeletonAvatarProps](#SkeletonAvatarProps)",
			"default": "false",
			"desc": "是否显示头像占位图",
			"version": "4.5.1"
		},
		"loading": {
			"type": "boolean",
			"default": "-",
			"desc": "为 true 时，显示占位图。反之则直接展示子组件",
			"version": "4.5.1"
		},
		"paragraph": {
			"type": "boolean \\| [SkeletonParagraphProps](#SkeletonParagraphProps)",
			"default": "true",
			"desc": "是否显示段落占位图",
			"version": "4.5.1"
		},
		"title": {
			"type": "boolean \\| [SkeletonTitleProps](#SkeletonTitleProps)",
			"default": "true",
			"desc": "是否显示标题占位图",
			"version": "4.5.1"
		},
		"round": {
			"type": "boolean",
			"default": "false",
			"desc": "为 true 时，段落和标题显示圆角",
			"version": "4.5.1"
		}
	},
	"events": {},
	"name": "Skeleton",
	"categroy": "Text",
	"deprecated": false,
	"degrade": false
}