export default {
	"props": {
		"itemRender": {
			"type": "(route, params, routes, paths) => ReactNode",
			"default": "-",
			"desc": "自定义链接函数，和 react-router 配置使用",
			"version": "4.5.1"
		},
		"params": {
			"type": "object",
			"default": "-",
			"desc": "路由的参数",
			"version": "4.5.1"
		},
		"routes": {
			"type": "[routes\\[\\]](#routes)",
			"default": "-",
			"desc": "router 的路由栈信息",
			"version": "4.5.1"
		},
		"separator": {
			"type": "string \\| ReactNode",
			"default": "`/`",
			"desc": "分隔符自定义",
			"version": "4.5.1"
		}
	},
	"events": {},
	"name": "Breadcrumb",
	"title": "面包屑",
	"deprecated": true,
	"degrade": false
}