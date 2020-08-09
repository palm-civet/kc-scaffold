export default {
	"props": {
		"btn": {
			"type": "ReactNode",
			"default": "-",
			"desc": "自定义关闭按钮",
			"version": "4.5.1"
		},
		"bottom": {
			"type": "number",
			"default": "24",
			"desc": "消息从底部弹出时，距离底部的位置，单位像素",
			"version": "4.5.1"
		},
		"className": {
			"type": "string",
			"default": "-",
			"desc": "自定义 CSS class",
			"version": "4.5.1"
		},
		"closeIcon": {
			"type": "ReactNode",
			"default": "-",
			"desc": "自定义关闭图标",
			"version": "4.5.1"
		},
		"description": {
			"type": "string \\| ReactNode",
			"default": "-",
			"desc": "通知提醒内容，必选",
			"version": "4.5.1"
		},
		"duration": {
			"type": "number",
			"default": "4.5",
			"desc": "默认 4.5 秒后自动关闭，配置为 null 则不自动关闭",
			"version": "4.5.1"
		},
		"getContainer": {
			"type": "() => HTMLNode",
			"default": "() => document.body",
			"desc": "配置渲染节点的输出位置",
			"version": "4.5.1"
		},
		"icon": {
			"type": "ReactNode",
			"default": "-",
			"desc": "自定义图标",
			"version": "4.5.1"
		},
		"key": {
			"type": "string",
			"default": "-",
			"desc": "当前通知唯一标志",
			"version": "4.5.1"
		},
		"message": {
			"type": "string \\| ReactNode",
			"default": "-",
			"desc": "通知提醒标题，必选",
			"version": "4.5.1"
		},
		"placement": {
			"type": "string",
			"default": "`topRight`",
			"desc": "弹出位置，可选 `topLeft` `topRight` `bottomLeft` `bottomRight`",
			"version": "4.5.1"
		},
		"style": {
			"type": "[CSSProperties](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/e434515761b36830c3e58a970abf5186f005adac/types/react/index.d.ts#L794)",
			"default": "-",
			"desc": "自定义内联样式",
			"version": "4.5.1"
		},
		"top": {
			"type": "number",
			"default": "24",
			"desc": "消息从顶部弹出时，距离顶部的位置，单位像素",
			"version": "4.5.1"
		}
	},
	"events": {
		"onClose": {
			"type": "function",
			"default": "-",
			"desc": "当通知关闭时触发",
			"version": "4.5.1"
		},
		"onClick": {
			"type": "function",
			"default": "-",
			"desc": "点击通知时触发的回调函数",
			"version": "4.5.1"
		}
	},
	"name": "Notification",
	"categroy": "Meta",
	"deprecated": false,
	"degrade": true
}