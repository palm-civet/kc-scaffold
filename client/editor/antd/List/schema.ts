export default {
	"props": {
		"bordered": {
			"type": "boolean",
			"default": "false",
			"desc": "是否展示边框",
			"version": "4.5.1"
		},
		"footer": {
			"type": "string \\| ReactNode",
			"default": "-",
			"desc": "列表底部",
			"version": "4.5.1"
		},
		"grid": {
			"type": "[object](#List-grid-props)",
			"default": "-",
			"desc": "列表栅格配置",
			"version": "4.5.1"
		},
		"header": {
			"type": "string \\| ReactNode",
			"default": "-",
			"desc": "列表头部",
			"version": "4.5.1"
		},
		"itemLayout": {
			"type": "string",
			"default": "-",
			"desc": "设置 `List.Item` 布局, 设置成 `vertical` 则竖直样式显示, 默认横排",
			"version": "4.5.1"
		},
		"loading": {
			"type": "boolean \\| [object](/components/spin/#API) ([更多](https://github.com/ant-design/ant-design/issues/8659))",
			"default": "false",
			"desc": "当卡片内容还在加载中时，可以用 `loading` 展示一个占位",
			"version": "4.5.1"
		},
		"loadMore": {
			"type": "string \\| ReactNode",
			"default": "-",
			"desc": "加载更多",
			"version": "4.5.1"
		},
		"locale": {
			"type": "object",
			"default": "{emptyText: `暂无数据`}",
			"desc": "默认文案设置，目前包括空数据文案",
			"version": "4.5.1"
		},
		"pagination": {
			"type": "boolean \\| object",
			"default": "false",
			"desc": "对应的 `pagination` 配置, 设置 false 不显示",
			"version": "4.5.1"
		},
		"size": {
			"type": "`default` \\| `large` \\| `small`",
			"default": "`default`",
			"desc": "list 的尺寸",
			"version": "4.5.1"
		},
		"split": {
			"type": "boolean",
			"default": "true",
			"desc": "是否展示分割线",
			"version": "4.5.1"
		},
		"dataSource": {
			"type": "any[]",
			"default": "-",
			"desc": "列表数据源",
			"version": "4.5.1"
		},
		"renderItem": {
			"type": "(item) => ReactNode",
			"default": "-",
			"desc": "当使用 dataSource 时，可以用 `renderItem` 自定义渲染列表项",
			"version": "4.5.1"
		}
	},
	"events": {},
	"name": "List",
	"categroy": "Composite",
	"deprecated": false,
	"degrade": true
}