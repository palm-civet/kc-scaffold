export const treeData: object = {
  'type': 'input',
  'props': {
    "value": {
      "type": "string",
      "default": '1111',
      "desc": "值"
    },
    "type": {
      "type": "string",
      "default": 'text',
      "desc": "类型"
    },
    "onChange": {
      "type": "function",
      "default": function(res) {
        console.log(res)
      },
      "desc": "change事件"
    }
  },
  children: null
};
