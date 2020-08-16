export default {
	"props": {
		"allowClear": {
			"type": "boolean",
			"default": "true",
			"desc": "是否显示清除按钮",
			"version": "4.5.1"
		},
		"autoFocus": {
			"type": "boolean",
			"default": "false",
			"desc": "自动获取焦点",
			"version": "4.5.1"
		},
		"className": {
			"type": "string",
			"default": "-",
			"desc": "选择器 className",
			"version": "4.5.1"
		},
		"dateRender": {
			"type": "function(currentDate: moment, today: moment) => React.ReactNode",
			"default": "-",
			"desc": "自定义日期单元格的内容",
			"version": "4.5.1"
		},
		"disabled": {
			"type": "boolean",
			"default": "false",
			"desc": "禁用",
			"version": "4.5.1"
		},
		"disabledDate": {
			"type": "(currentDate: moment) => boolean",
			"default": "-",
			"desc": "不可选择的日期",
			"version": "4.5.1"
		},
		"dropdownClassName": {
			"type": "string",
			"default": "-",
			"desc": "额外的弹出日历 className",
			"version": "4.5.1"
		},
		"getPopupContainer": {
			"type": "function(trigger)",
			"default": "-",
			"desc": "定义浮层的容器，默认为 body 上新建 div",
			"version": "4.5.1"
		},
		"locale": {
			"type": "object",
			"default": "[默认配置](https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json)",
			"desc": "国际化配置",
			"version": "4.5.1"
		},
		"mode": {
			"type": "`time` \\| `date` \\| `month` \\| `year` \\| `decade`",
			"default": "-",
			"desc": "日期面板的状态（[设置后无法选择年份/月份？](/docs/react/faq#当我指定了-DatePicker/RangePicker-的-mode-属性后，点击后无法选择年份/月份？)）",
			"version": "4.5.1"
		},
		"open": {
			"type": "boolean",
			"default": "-",
			"desc": "控制弹层是否展开",
			"version": "4.5.1"
		},
		"panelRender": {
			"type": "(panelNode) => ReactNode",
			"default": "-",
			"desc": "自定义渲染面板",
			"version": "4.5.0"
		},
		"picker": {
			"type": "`date` \\| `week` \\| `month` \\| `quarter` \\| `year`",
			"default": "`date`",
			"desc": "设置选择器类型",
			"version": "`quarter`: 4.1.0"
		},
		"placeholder": {
			"type": "string \\| \\[string, string]",
			"default": "-",
			"desc": "输入框提示文字",
			"version": "4.5.1"
		},
		"popupStyle": {
			"type": "CSSProperties",
			"default": "{}",
			"desc": "额外的弹出日历样式",
			"version": "4.5.1"
		},
		"size": {
			"type": "`large` \\| `middle` \\| `small`",
			"default": "-",
			"desc": "输入框大小，`large` 高度为 40px，`small` 为 24px，默认是 32px",
			"version": "4.5.1"
		},
		"bordered": {
			"type": "boolean",
			"default": "true",
			"desc": "是否有边框",
			"version": "4.5.1"
		},
		"suffixIcon": {
			"type": "ReactNode",
			"default": "-",
			"desc": "自定义的选择框后缀图标",
			"version": "4.5.1"
		},
		"style": {
			"type": "CSSProperties",
			"default": "{}",
			"desc": "自定义输入框样式",
			"version": "4.5.1"
		},
		"inputReadOnly": {
			"type": "boolean",
			"default": "false",
			"desc": "设置输入框为只读（避免在移动设备上打开虚拟键盘）",
			"version": "4.5.1"
		}
	},
	"events": {
		"onOpenChange": {
			"type": "function(open)",
			"default": "-",
			"desc": "弹出日历和关闭日历的回调",
			"version": "4.5.1"
		},
		"onPanelChange": {
			"type": "function(value, mode)",
			"default": "-",
			"desc": "日历面板切换的回调",
			"version": "4.5.1"
		}
	},
	"name": "DatePicker",
	"title": "日期选择框",
	"categroy": "Output",
	"deprecated": false,
	"degrade": false
}