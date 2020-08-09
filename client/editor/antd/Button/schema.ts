export default {
	"props": {
		"disabled": {
			"type": "boolean",
			"default": "false",
			"desc": "按钮失效状态",
			"version": "4.5.1"
		},
		"ghost": {
			"type": "boolean",
			"default": "false",
			"desc": "幽灵属性，使按钮背景透明",
			"version": "4.5.1"
		},
		"href": {
			"type": "string",
			"default": "-",
			"desc": "点击跳转的地址，指定此属性 button 的行为和 a 链接一致",
			"version": "4.5.1"
		},
		"htmlType": {
			"type": "string",
			"default": "`button`",
			"desc": "设置 `button` 原生的 `type` 值，可选值请参考 [HTML 标准](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type)",
			"version": "4.5.1"
		},
		"icon": {
			"type": "ReactNode",
			"default": "-",
			"desc": "设置按钮的图标组件",
			"version": "4.5.1"
		},
		"loading": {
			"type": "boolean \\| { delay: number }",
			"default": "false",
			"desc": "设置按钮载入状态",
			"version": "4.5.1"
		},
		"shape": {
			"type": "string",
			"default": "-",
			"desc": "设置按钮形状，可选值为 `circle`、 `round` 或者不设",
			"version": "4.5.1"
		},
		"size": {
			"type": "`large` \\| `middle` \\| `small`",
			"default": "-",
			"desc": "设置按钮大小",
			"version": "4.5.1"
		},
		"target": {
			"type": "string",
			"default": "-",
			"desc": "相当于 a 链接的 target 属性，href 存在时生效",
			"version": "4.5.1"
		},
		"type": {
			"type": "`primary` \\| `ghost` \\| `dashed` \\| `danger` \\| `link` \\| `text` \\| `default`",
			"default": "`default`",
			"desc": "设置按钮类型",
			"version": "4.5.1"
		},
		"block": {
			"type": "boolean",
			"default": "false",
			"desc": "将按钮宽度调整为其父宽度的选项",
			"version": "4.5.1"
		},
		"danger": {
			"type": "boolean",
			"default": "false",
			"desc": "设置危险按钮",
			"version": "4.5.1"
		}
	},
	"events": {
		"onClick": {
			"type": "(event) => void",
			"default": "-",
			"desc": "点击按钮时的回调",
			"version": "4.5.1"
		}
	},
	"name": "Button",
	"categroy": "Meta",
	"deprecated": false,
	"degrade": false
}