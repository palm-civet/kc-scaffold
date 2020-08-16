export default {
	"props": {
		"title": {
			"type": "ReactNode",
			"default": "-",
			"desc": "自定义标题文字",
			"version": "4.5.1"
		},
		"subTitle": {
			"type": "ReactNode",
			"default": "-",
			"desc": "自定义的二级标题文字",
			"version": "4.5.1"
		},
		"ghost": {
			"type": "boolean",
			"default": "true",
			"desc": "pageHeader 的类型，将会改变背景颜色",
			"version": "4.5.1"
		},
		"avatar": {
			"type": "[AvatarProps](/components/avatar/)",
			"default": "-",
			"desc": "标题栏旁的头像",
			"version": "4.5.1"
		},
		"backIcon": {
			"type": "ReactNode \\| boolean",
			"default": "&lt;ArrowLeft />",
			"desc": "自定义 back icon ，如果为 false 不渲染 back icon",
			"version": "4.5.1"
		},
		"tags": {
			"type": "[Tag](/components/tag/)[] \\| [Tag](/components/tag/)",
			"default": "-",
			"desc": "title 旁的 tag 列表",
			"version": "4.5.1"
		},
		"extra": {
			"type": "ReactNode",
			"default": "-",
			"desc": "操作区，位于 title 行的行尾",
			"version": "4.5.1"
		},
		"breadcrumb": {
			"type": "[Breadcrumb](/components/breadcrumb/)",
			"default": "-",
			"desc": "面包屑的配置",
			"version": "4.5.1"
		},
		"footer": {
			"type": "ReactNode",
			"default": "-",
			"desc": "PageHeader 的页脚，一般用于渲染 TabBar",
			"version": "4.5.1"
		}
	},
	"events": {
		"onBack": {
			"type": "()=>void",
			"default": "()=>history.back()",
			"desc": "返回按钮的点击事件",
			"version": "4.5.1"
		}
	},
	"name": "PageHeader",
	"title": "页头",
	"deprecated": true,
	"degrade": false
}