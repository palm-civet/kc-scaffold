export default {
	"props": {
		"afterClose": {
			"type": "function",
			"default": "-",
			"desc": "Modal 完全关闭后的回调",
			"version": "4.5.1"
		},
		"bodyStyle": {
			"type": "object",
			"default": "{}",
			"desc": "Modal body 样式",
			"version": "4.5.1"
		},
		"cancelText": {
			"type": "string \\| ReactNode",
			"default": "`取消`",
			"desc": "取消按钮文字",
			"version": "4.5.1"
		},
		"centered": {
			"type": "boolean",
			"default": "false",
			"desc": "垂直居中展示 Modal",
			"version": "4.5.1"
		},
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
		"confirmLoading": {
			"type": "boolean",
			"default": "false",
			"desc": "确定按钮 loading",
			"version": "4.5.1"
		},
		"destroyOnClose": {
			"type": "boolean",
			"default": "false",
			"desc": "关闭时销毁 Modal 里的子元素",
			"version": "4.5.1"
		},
		"footer": {
			"type": "string \\| ReactNode",
			"default": "(确定取消按钮)",
			"desc": "底部内容，当不需要默认底部按钮时，可以设为 `footer={null}`",
			"version": "4.5.1"
		},
		"forceRender": {
			"type": "boolean",
			"default": "false",
			"desc": "强制渲染 Modal",
			"version": "4.5.1"
		},
		"getContainer": {
			"type": "HTMLElement \\| () => HTMLElement \\| Selectors \\| false",
			"default": "document.body",
			"desc": "指定 Modal 挂载的 HTML 节点, false 为挂载在当前 dom",
			"version": "4.5.1"
		},
		"keyboard": {
			"type": "boolean",
			"default": "true",
			"desc": "是否支持键盘 esc 关闭",
			"version": "4.5.1"
		},
		"mask": {
			"type": "boolean",
			"default": "true",
			"desc": "是否展示遮罩",
			"version": "4.5.1"
		},
		"maskClosable": {
			"type": "boolean",
			"default": "true",
			"desc": "点击蒙层是否允许关闭",
			"version": "4.5.1"
		},
		"maskStyle": {
			"type": "object",
			"default": "{}",
			"desc": "遮罩样式",
			"version": "4.5.1"
		},
		"okText": {
			"type": "string \\| ReactNode",
			"default": "`确定`",
			"desc": "确认按钮文字",
			"version": "4.5.1"
		},
		"okType": {
			"type": "string",
			"default": "`primary`",
			"desc": "确认按钮类型",
			"version": "4.5.1"
		},
		"okButtonProps": {
			"type": "[ButtonProps](/components/button/#API)",
			"default": "-",
			"desc": "ok 按钮 props",
			"version": "4.5.1"
		},
		"cancelButtonProps": {
			"type": "[ButtonProps](/components/button/#API)",
			"default": "-",
			"desc": "cancel 按钮 props",
			"version": "4.5.1"
		},
		"style": {
			"type": "CSSProperties",
			"default": "-",
			"desc": "可用于设置浮层的样式，调整浮层位置等",
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
			"desc": "对话框是否可见",
			"version": "4.5.1"
		},
		"width": {
			"type": "string \\| number",
			"default": "520",
			"desc": "宽度",
			"version": "4.5.1"
		},
		"wrapClassName": {
			"type": "string",
			"default": "-",
			"desc": "对话框外层容器的类名",
			"version": "4.5.1"
		},
		"zIndex": {
			"type": "number",
			"default": "1000",
			"desc": "设置 Modal 的 `z-index`",
			"version": "4.5.1"
		}
	},
	"events": {
		"onCancel": {
			"type": "function(e)",
			"default": "-",
			"desc": "点击遮罩层或右上角叉或取消按钮的回调",
			"version": "4.5.1"
		},
		"onOk": {
			"type": "function(e)",
			"default": "-",
			"desc": "点击确定回调",
			"version": "4.5.1"
		}
	},
	"name": "Modal",
	"categroy": "页面组件",
	"deprecated": false,
	"degrade": true
}