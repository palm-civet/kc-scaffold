export default {
	"props": {
		"dataSource": {
			"type": "[TransferItem](https://git.io/vMM64)\\[]",
			"default": "\\[]",
			"desc": "数据源，其中的数据将会被渲染到左边一栏中，`targetKeys` 中指定的除外",
			"version": "4.5.1"
		},
		"disabled": {
			"type": "boolean",
			"default": "false",
			"desc": "是否禁用",
			"version": "4.5.1"
		},
		"filterOption": {
			"type": "(inputValue, option): boolean",
			"default": "-",
			"desc": "接收 `inputValue` `option` 两个参数，当 `option` 符合筛选条件时，应返回 true，反之则返回 false",
			"version": "4.5.1"
		},
		"footer": {
			"type": "(props) => ReactNode",
			"default": "-",
			"desc": "底部渲染函数",
			"version": "4.5.1"
		},
		"listStyle": {
			"type": "object\\|({direction: `left` \\| `right`}) => object",
			"default": "-",
			"desc": "两个穿梭框的自定义样式",
			"version": "4.5.1"
		},
		"locale": {
			"type": "{ itemUnit: string; itemsUnit: string; searchPlaceholder: string; notFoundContent: ReactNode; }",
			"default": "{ itemUnit: `项`, itemsUnit: `项`, searchPlaceholder: `请输入搜索内容` }",
			"desc": "各种语言",
			"version": "4.5.1"
		},
		"oneWay": {
			"type": "boolean",
			"default": "false",
			"desc": "展示为单向样式",
			"version": "4.3.0"
		},
		"operations": {
			"type": "string\\[]",
			"default": "\\[`>`, `<`]",
			"desc": "操作文案集合，顺序从上至下",
			"version": "4.5.1"
		},
		"pagination": {
			"type": "boolean \\| { pageSize: number }",
			"default": "false",
			"desc": "使用分页样式，自定义渲染列表下无效",
			"version": "4.3.0"
		},
		"render": {
			"type": "(record) => ReactNode",
			"default": "-",
			"desc": "每行数据渲染函数，该函数的入参为 `dataSource` 中的项，返回值为 ReactElement。或者返回一个普通对象，其中 `label` 字段为 ReactElement，`value` 字段为 title",
			"version": "4.5.1"
		},
		"selectedKeys": {
			"type": "string\\[]",
			"default": "\\[]",
			"desc": "设置哪些项应该被选中",
			"version": "4.5.1"
		},
		"showSearch": {
			"type": "boolean",
			"default": "false",
			"desc": "是否显示搜索框",
			"version": "4.5.1"
		},
		"showSelectAll": {
			"type": "boolean",
			"default": "true",
			"desc": "是否展示全选勾选框",
			"version": "4.5.1"
		},
		"targetKeys": {
			"type": "string\\[]",
			"default": "\\[]",
			"desc": "显示在右侧框数据的 key 集合",
			"version": "4.5.1"
		},
		"titles": {
			"type": "ReactNode\\[]",
			"default": "-",
			"desc": "标题集合，顺序从左至右",
			"version": "4.5.1"
		},
		"selectAllLabels": {
			"type": "(ReactNode \\| (info: { selectedCount: number, totalCount: number }) => ReactNode)[]",
			"default": "-",
			"desc": "自定义顶部多选框标题的集合",
			"version": "4.5.1"
		}
	},
	"events": {
		"onChange": {
			"type": "(targetKeys, direction, moveKeys): void",
			"default": "-",
			"desc": "选项在两栏之间转移时的回调函数",
			"version": "4.5.1"
		},
		"onScroll": {
			"type": "(direction, event): void",
			"default": "-",
			"desc": "选项列表滚动时的回调函数",
			"version": "4.5.1"
		},
		"onSearch": {
			"type": "(direction: `left` \\| `right`, value: string): void",
			"default": "-",
			"desc": "搜索框内容时改变时的回调函数",
			"version": "4.5.1"
		},
		"onSelectChange": {
			"type": "(sourceSelectedKeys, targetSelectedKeys): void",
			"default": "-",
			"desc": "选中项发生改变时的回调函数",
			"version": "4.5.1"
		}
	},
	"name": "Transfer",
	"categroy": "输出组件",
	"deprecated": false,
	"degrade": false
}