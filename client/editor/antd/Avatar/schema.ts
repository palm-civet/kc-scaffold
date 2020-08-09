export default {
	"props": {
		"icon": {
			"type": "ReactNode",
			"default": "-",
			"desc": "设置头像的自定义图标",
			"version": "4.5.1"
		},
		"shape": {
			"type": "`circle` \\| `square`",
			"default": "`circle`",
			"desc": "指定头像的形状",
			"version": "4.5.1"
		},
		"size": {
			"type": "number \\| `large` \\| `small` \\| `default`",
			"default": "`default`",
			"desc": "设置头像的大小",
			"version": "4.5.1"
		},
		"src": {
			"type": "string",
			"default": "-",
			"desc": "图片类头像的资源地址",
			"version": "4.5.1"
		},
		"srcSet": {
			"type": "string",
			"default": "-",
			"desc": "设置图片类头像响应式资源地址",
			"version": "4.5.1"
		},
		"alt": {
			"type": "string",
			"default": "-",
			"desc": "图像无法显示时的替代文本",
			"version": "4.5.1"
		},
		"gap": {
			"type": "number",
			"default": "4",
			"desc": "字符类型距离左右两侧边界单位像素",
			"version": "4.3.0"
		}
	},
	"events": {
		"onError": {
			"type": "() => boolean",
			"default": "-",
			"desc": "图片加载失败的事件，返回 false 会关闭组件默认的 fallback 行为",
			"version": "4.5.1"
		}
	},
	"name": "Avatar",
	"categroy": "元组件",
	"deprecated": false,
	"degrade": false
}