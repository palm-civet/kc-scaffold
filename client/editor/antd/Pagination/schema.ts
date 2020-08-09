export default {
	"props": {
		"current": {
			"type": "number",
			"default": "-",
			"desc": "当前页数",
			"version": "4.5.1"
		},
		"defaultCurrent": {
			"type": "number",
			"default": "1",
			"desc": "默认的当前页数",
			"version": "4.5.1"
		},
		"defaultPageSize": {
			"type": "number",
			"default": "10",
			"desc": "默认的每页条数",
			"version": "4.5.1"
		},
		"disabled": {
			"type": "boolean",
			"default": "-",
			"desc": "禁用分页",
			"version": "4.5.1"
		},
		"hideOnSinglePage": {
			"type": "boolean",
			"default": "false",
			"desc": "只有一页时是否隐藏分页器",
			"version": "4.5.1"
		},
		"itemRender": {
			"type": "(page, type: 'page' \\| 'prev' \\| 'next', originalElement) => React.ReactNode",
			"default": "-",
			"desc": "用于自定义页码的结构，可用于优化 SEO",
			"version": "4.5.1"
		},
		"pageSize": {
			"type": "number",
			"default": "-",
			"desc": "每页条数",
			"version": "4.5.1"
		},
		"pageSizeOptions": {
			"type": "string\\[]",
			"default": "\\[`10`, `20`, `50`, `100`]",
			"desc": "指定每页可以显示多少条",
			"version": "4.5.1"
		},
		"showLessItems": {
			"type": "boolean",
			"default": "false",
			"desc": "是否显示较少页面内容",
			"version": "4.5.1"
		},
		"showQuickJumper": {
			"type": "boolean \\| { goButton: ReactNode }",
			"default": "false",
			"desc": "是否可以快速跳转至某页",
			"version": "4.5.1"
		},
		"showSizeChanger": {
			"type": "boolean",
			"default": "-",
			"desc": "是否展示 `pageSize` 切换器，当 `total` 大于 50 时默认为 true",
			"version": "4.5.1"
		},
		"showTitle": {
			"type": "boolean",
			"default": "true",
			"desc": "是否显示原生 tooltip 页码提示",
			"version": "4.5.1"
		},
		"showTotal": {
			"type": "function(total, range)",
			"default": "-",
			"desc": "用于显示数据总量和当前数据顺序",
			"version": "4.5.1"
		},
		"simple": {
			"type": "boolean",
			"default": "-",
			"desc": "当添加该属性时，显示为简单分页",
			"version": "4.5.1"
		},
		"size": {
			"type": "`default` \\| `small`",
			"default": "`default`",
			"desc": "当为 `small` 时，是小尺寸分页",
			"version": "4.5.1"
		},
		"responsive": {
			"type": "boolean",
			"default": "-",
			"desc": "当 size 未指定时，根据屏幕宽度自动调整尺寸",
			"version": "4.5.1"
		},
		"total": {
			"type": "number",
			"default": "0",
			"desc": "数据总数",
			"version": "4.5.1"
		}
	},
	"events": {
		"onChange": {
			"type": "function(page, pageSize)",
			"default": "-",
			"desc": "页码改变的回调，参数是改变后的页码及每页条数",
			"version": "4.5.1"
		},
		"onShowSizeChange": {
			"type": "function(current, size)",
			"default": "-",
			"desc": "pageSize 变化的回调",
			"version": "4.5.1"
		}
	},
	"name": "Pagination",
	"deprecated": true,
	"degrade": false
}