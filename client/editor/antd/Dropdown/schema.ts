export default {
	"props": {
		"arrow": {
			"type": "boolean",
			"default": "false",
			"desc": "下拉框箭头是否显示",
			"version": "4.5.1"
		},
		"disabled": {
			"type": "boolean",
			"default": "-",
			"desc": "菜单是否禁用",
			"version": "4.5.1"
		},
		"getPopupContainer": {
			"type": "function(triggerNode)",
			"default": "() => document.body",
			"desc": "菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。[示例](https://codepen.io/afc163/pen/zEjNOy?editors=0010)",
			"version": "4.5.1"
		},
		"overlay": {
			"type": "[Menu](/components/menu) \\| () => Menu",
			"default": "-",
			"desc": "菜单",
			"version": "4.5.1"
		},
		"overlayClassName": {
			"type": "string",
			"default": "-",
			"desc": "下拉根元素的类名称",
			"version": "4.5.1"
		},
		"overlayStyle": {
			"type": "object",
			"default": "-",
			"desc": "下拉根元素的样式",
			"version": "4.5.1"
		},
		"placement": {
			"type": "string",
			"default": "`bottomLeft`",
			"desc": "菜单弹出位置：`bottomLeft` `bottomCenter` `bottomRight` `topLeft` `topCenter` `topRight`",
			"version": "4.5.1"
		},
		"trigger": {
			"type": "Array&lt;`click`\\|`hover`\\|`contextMenu`>",
			"default": "\\[`hover`]",
			"desc": "触发下拉的行为, 移动端不支持 hover",
			"version": "4.5.1"
		},
		"visible": {
			"type": "boolean",
			"default": "-",
			"desc": "菜单是否显示",
			"version": "4.5.1"
		}
	},
	"events": {
		"onVisibleChange": {
			"type": "function(visible)",
			"default": "-",
			"desc": "菜单显示状态改变时调用，参数为 `visible`",
			"version": "4.5.1"
		}
	},
	"name": "Dropdown",
	"deprecated": false,
	"degrade": false
}