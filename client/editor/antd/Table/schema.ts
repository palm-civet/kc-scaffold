export default {
	"props": {
		"tableLayout": {
			"type": "- \\| `auto` \\| `fixed`",
			"default": "无<hr />固定表头/列或使用了 `column.ellipsis` 时，默认值为 `fixed`",
			"desc": "表格元素的 [table-layout](https://developer.mozilla.org/zh-CN/docs/Web/CSS/table-layout) 属性，设为 `fixed` 表示内容不会影响列的布局",
			"version": "4.5.1"
		},
		"bordered": {
			"type": "boolean",
			"default": "false",
			"desc": "是否展示外边框和列边框",
			"version": "4.5.1"
		},
		"columns": {
			"type": "[ColumnsType](#Column)\\[]",
			"default": "-",
			"desc": "表格列的配置描述，具体项见下表",
			"version": "4.5.1"
		},
		"components": {
			"type": "[TableComponents](https://git.io/fANxz)",
			"default": "-",
			"desc": "覆盖默认的 table 元素",
			"version": "4.5.1"
		},
		"dataSource": {
			"type": "object\\[]",
			"default": "-",
			"desc": "数据数组",
			"version": "4.5.1"
		},
		"expandable": {
			"type": "[expandable](#expandable)",
			"default": "-",
			"desc": "配置展开属性",
			"version": "4.5.1"
		},
		"footer": {
			"type": "function(currentPageData)",
			"default": "-",
			"desc": "表格尾部",
			"version": "4.5.1"
		},
		"loading": {
			"type": "boolean \\| [object](/components/spin/#API) ([更多](https://github.com/ant-design/ant-design/issues/4544#issuecomment-271533135))",
			"default": "false",
			"desc": "页面是否加载中",
			"version": "4.5.1"
		},
		"locale": {
			"type": "object",
			"default": "filterConfirm: `确定` <br> filterReset: `重置` <br> emptyText: `暂无数据` <br> [默认值](https://github.com/ant-design/ant-design/blob/4ad1ccac277782d7ed14f7e5d02d6346aae0db67/components/locale/default.tsx#L19)",
			"desc": "默认文案设置，目前包括排序、过滤、空数据文案",
			"version": "4.5.1"
		},
		"pagination": {
			"type": "object",
			"default": "-",
			"desc": "分页器，参考[配置项](#pagination)或 [pagination](/components/pagination/) 文档，设为 false 时不展示和进行分页",
			"version": "4.5.1"
		},
		"rowClassName": {
			"type": "function(record, index): string",
			"default": "-",
			"desc": "表格行的类名",
			"version": "4.5.1"
		},
		"rowKey": {
			"type": "string \\| function(record): string",
			"default": "`key`",
			"desc": "表格行 key 的取值，可以是字符串或一个函数",
			"version": "4.5.1"
		},
		"rowSelection": {
			"type": "object",
			"default": "-",
			"desc": "表格行是否可选择，[配置项](#rowSelection)",
			"version": "4.5.1"
		},
		"scroll": {
			"type": "object",
			"default": "-",
			"desc": "表格是否可滚动，也可以指定滚动区域的宽、高，[配置项](#scroll)",
			"version": "4.5.1"
		},
		"showHeader": {
			"type": "boolean",
			"default": "true",
			"desc": "是否显示表头",
			"version": "4.5.1"
		},
		"size": {
			"type": "`default` \\| `middle` \\| `small`",
			"default": "default",
			"desc": "表格大小",
			"version": "4.5.1"
		},
		"summary": {
			"type": "(currentData) => ReactNode",
			"default": "-",
			"desc": "总结栏",
			"version": "4.5.1"
		},
		"title": {
			"type": "function(currentPageData)",
			"default": "-",
			"desc": "表格标题",
			"version": "4.5.1"
		},
		"getPopupContainer": {
			"type": "(triggerNode) => HTMLElement",
			"default": "() => TableHtmlElement",
			"desc": "设置表格内各类浮层的渲染节点，如筛选菜单",
			"version": "4.5.1"
		},
		"sortDirections": {
			"type": "Array",
			"default": "\\[`ascend`, `descend`]",
			"desc": "支持的排序方式，取值为 `ascend` `descend`",
			"version": "4.5.1"
		},
		"showSorterTooltip": {
			"type": "boolean",
			"default": "true",
			"desc": "表头是否显示下一次排序的 tooltip 提示",
			"version": "4.5.1"
		}
	},
	"events": {
		"onChange": {
			"type": "function(pagination, filters, sorter, extra: { currentDataSource: [], action: `paginate` \\| `sort` \\| `filter` })",
			"default": "-",
			"desc": "分页、排序、筛选变化时触发",
			"version": "4.5.1"
		},
		"onHeaderRow": {
			"type": "function(column, index)",
			"default": "-",
			"desc": "设置头部行属性",
			"version": "4.5.1"
		},
		"onRow": {
			"type": "function(record, index)",
			"default": "-",
			"desc": "设置行属性",
			"version": "4.5.1"
		}
	},
	"name": "Table",
	"title": "表格",
	"categroy": "Composite",
	"deprecated": false,
	"degrade": false
}