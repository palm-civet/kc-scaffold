export default {
	"props": {
		"flex":	{
			"type": "string | number",
			"desc": "flex 布局属性",
			"default":"-",
			"version": "4.5.1"
		},
		"offset":	{
			"type": "number",
			"desc": "栅格左侧的间隔格数，间隔内不可以有栅格",
			"default":"0",
			"version": "4.5.1"
		},
		"order":	{
			"type": "number",
			"desc": "栅格顺序"	,
			"default":"0",
			"version": "4.5.1"
		},
		"pull":	{
			"type": "number",
			"desc": "栅格向左移动格数",
			"default":"0",
			"version": "4.5.1"
		},
		"push":	{
			"type": "number",
			"desc": "栅格向右移动格数",
			"default":"0",
			"version": "4.5.1"
		},
		"span":	{
			"type": "number",
			"desc": "栅格占位格数，为 0 时相当于 display: none",
			"default":"-",
			"version": "4.5.1"
		},
		"xs":	{
			"type": "number | object",
			"desc": "屏幕 < 576px 响应式栅格，可为栅格数或一个包含其他属性的对象",
			"default":"-",
			"version": "4.5.1"
		},
		"sm":	{
			"type": "number | object",
			"desc": "屏幕 ≥ 576px 响应式栅格，可为栅格数或一个包含其他属性的对象",
			"default":"-",
			"version": "4.5.1"
		},
		"md":	{
			"type": "number | object",
			"desc": "屏幕 ≥ 768px 响应式栅格，可为栅格数或一个包含其他属性的对象",
			"default":"-",
			"version": "4.5.1"
		},
		"lg":	{
			"type": "number | object",
			"desc": "屏幕 ≥ 992px 响应式栅格，可为栅格数或一个包含其他属性的对象",
			"default":"-",
			"version": "4.5.1"
		},
		"xl":	{
			"type": "number | object",
			"desc": "屏幕 ≥ 1200px 响应式栅格，可为栅格数或一个包含其他属性的对象",
			"default":"-",
			"version": "4.5.1"
		},
		"xxl":	{
			"type": "number | object",
			"desc": "屏幕 ≥ 1600px 响应式栅格，可为栅格数或一个包含其他属性的对象",
			"default":"-",
			"version": "4.5.1"
		}
	},
	"events": {},
	"name": "Col",
	"title": "列容器",
	"categroy": "Container",
	"deprecated": false,
	"degrade": false
}