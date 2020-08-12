export default {
	"props": {
		"component": {
			"type": "ComponentType \\| false",
			"default": "form",
			"desc": "设置 Form 渲染元素，为 `false` 则不创建 DOM 节点",
			"version": "4.5.1"
		},
		"colon": {
			"type": "boolean",
			"default": "true",
			"desc": "配置 Form.Item 的 `colon` 的默认值。表示是否显示 label 后面的冒号 (只有在属性 layout 为 horizontal 时有效)",
			"version": "4.5.1"
		},
		"fields": {
			"type": "[FieldData](#FieldData)\\[]",
			"default": "-",
			"desc": "通过状态管理（如 redux）控制表单字段，如非强需求不推荐使用。查看[示例](#components-form-demo-global-state)",
			"version": "4.5.1"
		},
		"form": {
			"type": "[FormInstance](#FormInstance)",
			"default": "-",
			"desc": "经 `Form.useForm()` 创建的 form 控制实例，不提供时会自动创建",
			"version": "4.5.1"
		},
		"hideRequiredMark": {
			"type": "boolean",
			"default": "false",
			"desc": "隐藏所有表单项的必选标记",
			"version": "4.5.1"
		},
		"initialValues": {
			"type": "object",
			"default": "-",
			"desc": "表单默认值，只有初始化以及重置时生效",
			"version": "4.5.1"
		},
		"labelAlign": {
			"type": "`left` \\| `right`",
			"default": "`right`",
			"desc": "label 标签的文本对齐方式",
			"version": "4.5.1"
		},
		"labelCol": {
			"type": "[object](/components/grid/#Col)",
			"default": "-",
			"desc": "label 标签布局，同 `<Col>` 组件，设置 `span` `offset` 值，如 `{span: 3, offset: 12}` 或 `sm: {span: 3, offset: 12}`",
			"version": "4.5.1"
		},
		"layout": {
			"type": "`horizontal` \\| `vertical` \\| `inline`",
			"default": "`horizontal`",
			"desc": "表单布局",
			"version": "4.5.1"
		},
		"name": {
			"type": "string",
			"default": "-",
			"desc": "表单名称，会作为表单字段 `id` 前缀使用",
			"version": "4.5.1"
		},
		"preserve": {
			"type": "boolean",
			"default": "true",
			"desc": "当字段被删除时保留字段值",
			"version": "4.4.0"
		},
		"scrollToFirstError": {
			"type": "boolean",
			"default": "false",
			"desc": "提交失败自动滚动到第一个错误字段",
			"version": "4.5.1"
		},
		"size": {
			"type": "`small` \\| `middle` \\| `large`",
			"default": "-",
			"desc": "设置字段组件的尺寸（仅限 antd 组件）",
			"version": "4.5.1"
		},
		"validateMessages": {
			"type": "[ValidateMessages](https://github.com/react-component/field-form/blob/master/src/utils/messages.ts)",
			"default": "-",
			"desc": "验证提示模板，说明[见下](#validateMessages)",
			"version": "4.5.1"
		},
		"validateTrigger": {
			"type": "string \\| string[]",
			"default": "`onChange`",
			"desc": "统一设置字段校验规则",
			"version": "4.3.0"
		},
		"wrapperCol": {
			"type": "[object](/components/grid/#Col)",
			"default": "-",
			"desc": "需要为输入控件设置布局样式时，使用该属性，用法同 labelCol",
			"version": "4.5.1"
		}
	},
	"events": {
		"onFinish": {
			"type": "Function(values)",
			"default": "-",
			"desc": "提交表单且数据验证成功后回调事件",
			"version": "4.5.1"
		},
		"onFinishFailed": {
			"type": "Function({ values, errorFields, outOfDate })",
			"default": "-",
			"desc": "提交表单且数据验证失败后回调事件",
			"version": "4.5.1"
		},
		"onFieldsChange": {
			"type": "Function(changedFields, allFields)",
			"default": "-",
			"desc": "字段更新时触发回调事件",
			"version": "4.5.1"
		},
		"onValuesChange": {
			"type": "Function(changedValues, allValues)",
			"default": "-",
			"desc": "字段值更新时触发回调事件",
			"version": "4.5.1"
		}
	},
	"name": "Form",
	"categroy": "Composite",
	"deprecated": false,
	"degrade": false
}