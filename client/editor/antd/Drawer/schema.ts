export default {
	"props": {
		"closable": {
			"type": "boolean",
			"default": "true",
			"desc": "是否显示右上角的关闭按钮",
			"version": "4.5.1"
		},
		"closeIcon": {
			"type": "ReactNode",
			"default": "&lt;CloseOutlined />",
			"desc": "自定义关闭图标",
			"version": "4.5.1"
		},
		"destroyOnClose": {
			"type": "boolean",
			"default": "false",
			"desc": "关闭时销毁 Drawer 里的子元素",
			"version": "4.5.1"
		},
		"forceRender": {
			"type": "boolean",
			"default": "false",
			"desc": "预渲染 Drawer 内元素",
			"version": "4.5.1"
		},
		"getContainer": {
			"type": "HTMLElement \\| () => HTMLElement \\| Selectors \\| false",
			"default": "body",
			"desc": "指定 Drawer 挂载的 HTML 节点, false 为挂载在当前 dom",
			"version": "4.5.1"
		},
		"maskClosable": {
			"type": "boolean",
			"default": "true",
			"desc": "点击蒙层是否允许关闭",
			"version": "4.5.1"
		},
		"mask": {
			"type": "boolean",
			"default": "true",
			"desc": "是否展示遮罩",
			"version": "4.5.1"
		},
		"maskStyle": {
			"type": "CSSProperties",
			"default": "{}",
			"desc": "遮罩样式",
			"version": "4.5.1"
		},
		"style": {
			"type": "CSSProperties",
			"default": "-",
			"desc": "可用于设置 Drawer 最外层容器的样式，和 `drawerStyle` 的区别是作用节点包括 `mask`",
			"version": "4.5.1"
		},
		"drawerStyle": {
			"type": "CSSProperties",
			"default": "-",
			"desc": "用于设置 Drawer 弹出层的样式",
			"version": "4.5.1"
		},
		"headerStyle": {
			"type": "CSSProperties",
			"default": "-",
			"desc": "用于设置 Drawer 头部的样式",
			"version": "4.5.1"
		},
		"bodyStyle": {
			"type": "CSSProperties",
			"default": "-",
			"desc": "可用于设置 Drawer 内容部分的样式",
			"version": "4.5.1"
		},
		"title": {
			"type": "string \\| ReactNode",
			"default": "-",
			"desc": "标题",
			"version": "4.5.1"
		},
		"visible": {
			"type": "boolean",
			"default": "-",
			"desc": "Drawer 是否可见",
			"version": "4.5.1"
		},
		"width": {
			"type": "string \\| number",
			"default": "256",
			"desc": "宽度",
			"version": "4.5.1"
		},
		"height": {
			"type": "string \\| number",
			"default": "256",
			"desc": "高度, 在 `placement` 为 `top` 或 `bottom` 时使用",
			"version": "4.5.1"
		},
		"className": {
			"type": "string",
			"default": "-",
			"desc": "对话框外层容器的类名",
			"version": "4.5.1"
		},
		"zIndex": {
			"type": "number",
			"default": "1000",
			"desc": "设置 Drawer 的 `z-index`",
			"version": "4.5.1"
		},
		"placement": {
			"type": "`top` \\| `right` \\| `bottom` \\| `left`",
			"default": "`right`",
			"desc": "抽屉的方向",
			"version": "4.5.1"
		},
		"afterVisibleChange": {
			"type": "function(visible)",
			"default": "-",
			"desc": "切换抽屉时动画结束后的回调",
			"version": "4.5.1"
		},
		"keyboard": {
			"type": "boolean",
			"default": "true",
			"desc": "是否支持键盘 esc 关闭",
			"version": "4.5.1"
		},
		"footer": {
			"type": "ReactNode",
			"default": "-",
			"desc": "抽屉的页脚",
			"version": "4.5.1"
		},
		"footerStyle": {
			"type": "CSSProperties",
			"default": "-",
			"desc": "抽屉页脚部件的样式",
			"version": "4.5.1"
		},
		"push": {
			"type": "boolean \\| { distance: string \\| number }",
			"default": "{ distance: 180 }",
			"desc": "用于设置多层 Drawer 的推动行为",
			"version": "4.5.0+"
		}
	},
	"events": {
		"onClose": {
			"type": "function(e)",
			"default": "-",
			"desc": "点击遮罩层或右上角叉或取消按钮的回调",
			"version": "4.5.1"
		}
	},
	"name": "Drawer",
	"deprecated": true,
	"degrade": false
}