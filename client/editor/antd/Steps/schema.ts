export default {
	"props": {
		"className": {
			"type": "string",
			"default": "-",
			"desc": "步骤条类名",
			"version": "4.5.1"
		},
		"type": {
			"type": "string",
			"default": "`default`",
			"desc": "步骤条类型，有 `default` 和 `navigation` 两种",
			"version": "4.5.1"
		},
		"current": {
			"type": "number",
			"default": "0",
			"desc": "指定当前步骤，从 0 开始记数。在子 Step 元素中，可以通过 `status` 属性覆盖状态",
			"version": "4.5.1"
		},
		"direction": {
			"type": "string",
			"default": "`horizontal`",
			"desc": "指定步骤条方向。目前支持水平（`horizontal`）和竖直（`vertical`）两种方向",
			"version": "4.5.1"
		},
		"labelPlacement": {
			"type": "string",
			"default": "`horizontal`",
			"desc": "指定标签放置位置，默认水平放图标右侧，可选 `vertical` 放图标下方",
			"version": "4.5.1"
		},
		"progressDot": {
			"type": "boolean \\| (iconDot, {index, status, title, description}) => ReactNode",
			"default": "false",
			"desc": "点状步骤条，可以设置为一个 function，labelPlacement 将强制为 `vertical`",
			"version": "4.5.1"
		},
		"size": {
			"type": "string",
			"default": "`default`",
			"desc": "指定大小，目前支持普通（`default`）和迷你（`small`）",
			"version": "4.5.1"
		},
		"status": {
			"type": "string",
			"default": "`process`",
			"desc": "指定当前步骤的状态，可选 `wait` `process` `finish` `error`",
			"version": "4.5.1"
		},
		"initial": {
			"type": "number",
			"default": "0",
			"desc": "起始序号，从 0 开始记数",
			"version": "4.5.1"
		},
		"percent": {
			"type": "number",
			"default": "-",
			"desc": "当前 `process` 步骤显示的进度条进度（只对基本类型的 Steps 生效）",
			"version": "4.5.0"
		}
	},
	"events": {
		"onChange": {
			"type": "(current) => void",
			"default": "-",
			"desc": "点击切换步骤时触发",
			"version": "4.5.1"
		}
	},
	"name": "Steps",
	"categroy": "Page",
	"deprecated": false,
	"degrade": false
}