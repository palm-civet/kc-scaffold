export default {
	"props": {
		"allowClear": {
			"type": "boolean",
			"default": "true",
			"desc": "是否展示清除按钮",
			"version": "4.5.1"
		},
		"autoFocus": {
			"type": "boolean",
			"default": "false",
			"desc": "自动获取焦点",
			"version": "4.5.1"
		},
		"bordered": {
			"type": "boolean",
			"default": "true",
			"desc": "是否有边框",
			"version": "4.5.1"
		},
		"className": {
			"type": "string",
			"default": "-",
			"desc": "选择器类名",
			"version": "4.5.1"
		},
		"clearText": {
			"type": "string",
			"default": "clear",
			"desc": "清除按钮的提示文案",
			"version": "4.5.1"
		},
		"defaultValue": {
			"type": "[moment](http://momentjs.com/)",
			"default": "-",
			"desc": "默认时间",
			"version": "4.5.1"
		},
		"disabled": {
			"type": "boolean",
			"default": "false",
			"desc": "禁用全部操作",
			"version": "4.5.1"
		},
		"disabledHours": {
			"type": "function()",
			"default": "-",
			"desc": "禁止选择部分小时选项",
			"version": "4.5.1"
		},
		"disabledMinutes": {
			"type": "function(selectedHour)",
			"default": "-",
			"desc": "禁止选择部分分钟选项",
			"version": "4.5.1"
		},
		"disabledSeconds": {
			"type": "function(selectedHour, selectedMinute)",
			"default": "-",
			"desc": "禁止选择部分秒选项",
			"version": "4.5.1"
		},
		"format": {
			"type": "string",
			"default": "`HH:mm:ss`",
			"desc": "展示的时间格式",
			"version": "4.5.1"
		},
		"getPopupContainer": {
			"type": "function(trigger)",
			"default": "-",
			"desc": "定义浮层的容器，默认为 body 上新建 div",
			"version": "4.5.1"
		},
		"hideDisabledOptions": {
			"type": "boolean",
			"default": "false",
			"desc": "隐藏禁止选择的选项",
			"version": "4.5.1"
		},
		"hourStep": {
			"type": "number",
			"default": "1",
			"desc": "小时选项间隔",
			"version": "4.5.1"
		},
		"inputReadOnly": {
			"type": "boolean",
			"default": "false",
			"desc": "设置输入框为只读（避免在移动设备上打开虚拟键盘）",
			"version": "4.5.1"
		},
		"minuteStep": {
			"type": "number",
			"default": "1",
			"desc": "分钟选项间隔",
			"version": "4.5.1"
		},
		"open": {
			"type": "boolean",
			"default": "false",
			"desc": "面板是否打开",
			"version": "4.5.1"
		},
		"placeholder": {
			"type": "string \\| \\[string, string]",
			"default": "`请选择时间`",
			"desc": "没有值的时候显示的内容",
			"version": "4.5.1"
		},
		"popupClassName": {
			"type": "string",
			"default": "-",
			"desc": "弹出层类名",
			"version": "4.5.1"
		},
		"popupStyle": {
			"type": "object",
			"default": "-",
			"desc": "弹出层样式对象",
			"version": "4.5.1"
		},
		"secondStep": {
			"type": "number",
			"default": "1",
			"desc": "秒选项间隔",
			"version": "4.5.1"
		},
		"suffixIcon": {
			"type": "ReactNode",
			"default": "-",
			"desc": "自定义的选择框后缀图标",
			"version": "4.5.1"
		},
		"clearIcon": {
			"type": "ReactNode",
			"default": "-",
			"desc": "自定义的清除图标",
			"version": "4.5.1"
		},
		"renderExtraFooter": {
			"type": "() => ReactNode",
			"default": "-",
			"desc": "选择框底部显示自定义的内容",
			"version": "4.5.1"
		},
		"use12Hours": {
			"type": "boolean",
			"default": "false",
			"desc": "使用 12 小时制，为 true 时 `format` 默认为 `h:mm:ss a`",
			"version": "4.5.1"
		},
		"value": {
			"type": "[moment](http://momentjs.com/)",
			"default": "-",
			"desc": "当前时间",
			"version": "4.5.1"
		},
		"showNow": {
			"type": "boolean",
			"default": "-",
			"desc": "面板是否显示“此刻”按钮",
			"version": "4.4.0"
		}
	},
	"events": {
		"onChange": {
			"type": "function(time: moment, timeString: string): void",
			"default": "-",
			"desc": "时间发生变化的回调",
			"version": "4.5.1"
		},
		"onOpenChange": {
			"type": "(open: boolean) => void",
			"default": "-",
			"desc": "面板打开/关闭时的回调",
			"version": "4.5.1"
		}
	},
	"name": "TimePicker",
	"categroy": "输出组件",
	"deprecated": false,
	"degrade": false
}