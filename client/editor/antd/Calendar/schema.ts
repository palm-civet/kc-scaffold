export default {
	"props": {
		"dateCellRender": {
			"type": "function(date: moment): ReactNode",
			"default": "-",
			"desc": "自定义渲染日期单元格，返回内容会被追加到单元格",
			"version": "4.5.1"
		},
		"dateFullCellRender": {
			"type": "function(date: moment): ReactNode",
			"default": "-",
			"desc": "自定义渲染日期单元格，返回内容覆盖单元格",
			"version": "4.5.1"
		},
		"defaultValue": {
			"type": "[moment](http://momentjs.com/)",
			"default": "-",
			"desc": "默认展示的日期",
			"version": "4.5.1"
		},
		"disabledDate": {
			"type": "(currentDate: moment) => boolean",
			"default": "-",
			"desc": "不可选择的日期",
			"version": "4.5.1"
		},
		"fullscreen": {
			"type": "boolean",
			"default": "true",
			"desc": "是否全屏显示",
			"version": "4.5.1"
		},
		"locale": {
			"type": "object",
			"default": "[(默认配置)](https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json)",
			"desc": "国际化配置",
			"version": "4.5.1"
		},
		"mode": {
			"type": "`month` \\| `year`",
			"default": "`month`",
			"desc": "初始模式",
			"version": "4.5.1"
		},
		"monthCellRender": {
			"type": "function(date: moment): ReactNode",
			"default": "-",
			"desc": "自定义渲染月单元格，返回内容会被追加到单元格",
			"version": "4.5.1"
		},
		"monthFullCellRender": {
			"type": "function(date: moment): ReactNode",
			"default": "-",
			"desc": "自定义渲染月单元格，返回内容覆盖单元格",
			"version": "4.5.1"
		},
		"validRange": {
			"type": "\\[[moment](http://momentjs.com/), [moment](http://momentjs.com/)]",
			"default": "-",
			"desc": "设置可以显示的日期",
			"version": "4.5.1"
		},
		"value": {
			"type": "[moment](http://momentjs.com/)",
			"default": "-",
			"desc": "展示日期",
			"version": "4.5.1"
		},
		"headerRender": {
			"type": "function(object:{value: moment, type: string, onChange: f(), onTypeChange: f()})",
			"default": "-",
			"desc": "自定义头部内容",
			"version": "4.5.1"
		}
	},
	"events": {
		"onPanelChange": {
			"type": "function(date: moment, mode: string)",
			"default": "-",
			"desc": "日期面板变化回调",
			"version": "4.5.1"
		},
		"onSelect": {
			"type": "function(date: moment）",
			"default": "-",
			"desc": "点击选择日期回调",
			"version": "4.5.1"
		},
		"onChange": {
			"type": "function(date: moment）",
			"default": "-",
			"desc": "日期变化回调",
			"version": "4.5.1"
		}
	},
	"name": "Calendar",
	"categroy": "Composite",
	"deprecated": false,
	"degrade": false
}