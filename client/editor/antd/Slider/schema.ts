export default {
	"props": {
		"allowClear": {
			"type": "boolean",
			"default": "false",
			"desc": "支持清除, 单选模式有效",
			"version": "4.5.1"
		},
		"defaultValue": {
			"type": "number \\| \\[number, number]",
			"default": "0 \\| \\[0, 0]",
			"desc": "设置初始取值。当 `range` 为 false 时，使用 number，否则用 \\[number, number]",
			"version": "4.5.1"
		},
		"disabled": {
			"type": "boolean",
			"default": "false",
			"desc": "值为 true 时，滑块为禁用状态",
			"version": "4.5.1"
		},
		"dots": {
			"type": "boolean",
			"default": "false",
			"desc": "是否只能拖拽到刻度上",
			"version": "4.5.1"
		},
		"included": {
			"type": "boolean",
			"default": "true",
			"desc": "`marks` 不为空对象时有效，值为 true 时表示值为包含关系，false 表示并列",
			"version": "4.5.1"
		},
		"marks": {
			"type": "object",
			"default": "{ number: string \\| ReactNode } or { number: { style: object, label: string \\| ReactNode } }",
			"desc": "刻度标记，key 的类型必须为 `number` 且取值在闭区间 \\[min, max] 内，每个标签可以单独设置样式",
			"version": "4.5.1"
		},
		"max": {
			"type": "number",
			"default": "100",
			"desc": "最大值",
			"version": "4.5.1"
		},
		"min": {
			"type": "number",
			"default": "0",
			"desc": "最小值",
			"version": "4.5.1"
		},
		"range": {
			"type": "boolean",
			"default": "false",
			"desc": "双滑块模式",
			"version": "4.5.1"
		},
		"reverse": {
			"type": "boolean",
			"default": "false",
			"desc": "反向坐标轴",
			"version": "4.5.1"
		},
		"step": {
			"type": "number \\| null",
			"default": "1",
			"desc": "步长，取值必须大于 0，并且可被 (max - min) 整除。当 `marks` 不为空对象时，可以设置 `step` 为 null，此时 Slider 的可选值仅有 marks 标出来的部分",
			"version": "4.5.1"
		},
		"tipFormatter": {
			"type": "value => ReactNode \\| null",
			"default": "IDENTITY",
			"desc": "Slider 会把当前值传给 `tipFormatter`，并在 Tooltip 中显示 `tipFormatter` 的返回值，若为 null，则隐藏 Tooltip",
			"version": "4.5.1"
		},
		"value": {
			"type": "number \\| \\[number, number]",
			"default": "-",
			"desc": "设置当前取值。当 `range` 为 false 时，使用 number，否则用 \\[number, number]",
			"version": "4.5.1"
		},
		"vertical": {
			"type": "boolean",
			"default": "false",
			"desc": "值为 true 时，Slider 为垂直方向",
			"version": "4.5.1"
		},
		"tooltipPlacement": {
			"type": "string",
			"default": "-",
			"desc": "设置 Tooltip 展示位置。参考 [Tooltip](/components/tooltip/)",
			"version": "4.5.1"
		},
		"tooltipVisible": {
			"type": "boolean",
			"default": "-",
			"desc": "值为 true 时，Tooltip 将会始终显示；否则始终不显示，哪怕在拖拽及移入时",
			"version": "4.5.1"
		},
		"getTooltipPopupContainer": {
			"type": "(triggerNode) => HTMLElement",
			"default": "() => document.body",
			"desc": "Tooltip 渲染父节点，默认渲染到 body 上",
			"version": "4.5.1"
		}
	},
	"events": {
		"onAfterChange": {
			"type": "(value) => void",
			"default": "-",
			"desc": "与 `onmouseup` 触发时机一致，把当前值作为参数传入",
			"version": "4.5.1"
		},
		"onChange": {
			"type": "(value) => void",
			"default": "-",
			"desc": "当 Slider 的值发生改变时，会触发 onChange 事件，并把改变后的值作为参数传入",
			"version": "4.5.1"
		}
	},
	"name": "Slider",
	"categroy": "Output",
	"deprecated": false,
	"degrade": false
}