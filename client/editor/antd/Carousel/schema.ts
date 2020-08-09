export default {
	"props": {
		"afterChange": {
			"type": "function(current)",
			"default": "-",
			"desc": "切换面板的回调",
			"version": "4.5.1"
		},
		"autoplay": {
			"type": "boolean",
			"default": "false",
			"desc": "是否自动切换",
			"version": "4.5.1"
		},
		"beforeChange": {
			"type": "function(from, to)",
			"default": "-",
			"desc": "切换面板的回调",
			"version": "4.5.1"
		},
		"dotPosition": {
			"type": "string",
			"default": "`bottom`",
			"desc": "面板指示点位置，可选 `top` `bottom` `left` `right`",
			"version": "4.5.1"
		},
		"dots": {
			"type": "boolean \\| { className?: string }",
			"default": "true",
			"desc": "是否显示面板指示点，如果为 `object` 则同时可以指定 `dotsClass` 或者",
			"version": "4.5.1"
		},
		"easing": {
			"type": "string",
			"default": "`linear`",
			"desc": "动画效果",
			"version": "4.5.1"
		},
		"effect": {
			"type": "`scrollx` \\| `fade`",
			"default": "`scrollx`",
			"desc": "动画效果函数",
			"version": "4.5.1"
		}
	},
	"events": {},
	"name": "Carousel",
	"categroy": "元组件",
	"deprecated": false,
	"degrade": false
}