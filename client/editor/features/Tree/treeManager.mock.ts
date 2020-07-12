export const treeData = {
  "name": "div", // 组件名称
  "categroy": "Mate", // 组件类型
  "props": { // 组件支持的属性
		"prop_key": {
    	"type": "string", // 属性类型
      "default": null, // 默认值
      "desc": "属性描述"
    },
    "className": {
      default: "myclass"
    }
  },
  "methods": { // 组件支持的动作
    "method_name": [{
      "param": "param1", // 参数名
      "desc": "参数描述"
    }]
  },
  "value": { // 组件值，只有输出组件有
    "type": "string", // 值类型
    "default": null,
    "desc": "值描述"
  },
  "childrenType": [
    "all"
  ],// 支持的子元素类型
  "children": [ // 子元素
  	{
      "name": "span", // 组件名称
      "categroy": "Mate1", // 组件类型
      "props": { // 组件支持的属性
        "prop_key": {
          "type": "string", // 属性类型
          "default": null, // 默认值
          "desc": "属性描述"
        }
      },
      "methods": { // 组件支持的动作
        "method_name": [{
          "param": "param1", // 参数名
          "desc": "参数描述"
        }]
      },
      "value": { // 组件值，只有输出组件有
        "type": "string", // 值类型
        "default": null,
        "desc": "值描述"
      },
      "childrenType": [
        'input',
        'image'
      ],
      "children": [ // 子元素
        {
          "name": "input", // 组件名称
          "categroy": "Mate2", // 组件类型
          "props": { // 组件支持的属性
            "prop_key": {
              "type": "string", // 属性类型
              "default": null, // 默认值
              "desc": "属性描述"
            }
          },
          "methods": { // 组件支持的动作
            "method_name": [{
              "param": "param1", // 参数名
              "desc": "参数描述"
            }]
          },
          "value": { // 组件值，只有输出组件有
            "type": "string", // 值类型
            "default": null,
            "desc": "值描述"
          },
          "childrenType": []
        }
      ]
    },
    {
      "name": "input", // 组件名称
      "categroy": "input", // 组件类型
      "props": { // 组件支持的属性
        "prop_key": {
          "type": "string", // 属性类型
          "default": null, // 默认值
          "desc": "属性描述"
        }
      },
      "methods": { // 组件支持的动作
        "method_name": [{
          "param": "param1", // 参数名
          "desc": "参数描述"
        }]
      },
      "value": { // 组件值，只有输出组件有
        "type": "string", // 值类型
        "default": 12345,
        "desc": "值描述"
      },
      "childrenType": [],
      "children": []
    }
  ],
  "options": [{ // 复合功能（复合功能支持需要组件本身有对应的function支持）
  	"name": "**功能",
    "desc": "描述",
    "method": "fn_name", // 组件对应的复合功能方法名
    "element": [ // element获取的值将以{key: value}的形式传递给组件方法
      {
        "key": "option",
		    "desc": "描述",
      	"type": "input", // 可选值类型input、select、checkbox、radio
        "options": [ {"label": "文本", "value": "值"} ] // 除input外配置可选项
      }
    ],
  }],
  // 融合到options，options多一项scope和target配置项
  "scopeOptions": [{ // 区域配置 —— 该项配置设置后，会给所有子组件的配置新增一项配置
  	"name": "开启验证",
    "target": ["component"], // 触发配置的子组件类型
    "desc": "描述",
    "method": "fn_name1", // 组件函数接收配置项处理后，返回值将传递给scope method，若不定义，则传递配置给scope method
    "element": [{ /*同上...*/ }],
    "scope": {
      "name": "开启验证",
	    "desc": "描述",
      "method": "fn_name2", // schema定义组件的处理method
      "element": [{ /*同上...*/ }]
    }
  }],
  "template": [{
    "name": "动态删减",
    "desc": "描述",
    "render": "render_name", // 渲染模板块，可以考虑用struct
    "struct": "struct_name" // 模板结构体，用于描述模板内容以及交互信息
  }]
}
