module.exports.types = {
  Text: {
    name: '文本组件',
    type: 'Text',
    components: ['Icon','Typography','Image','Empty','Spin','Skeleton','Divider'],
    desc: '该类组件用作信息展示，类似于文字'
  },

  Meta: {
    name: '元组件',
    type: 'Meta',
    components: ['Button','Affix','DropDown','Avatar','Carousel','Statistic','Timeline','Tag','Alert','Message','Notification','Result'],
    desc: '该类组件大多用作展示，内部不支持其他元组件，只支持文本组件,其中复杂结构组件引入后，内部支持组件格式需要扩充'
  },

  Global: {
    name: '全局元组件',
    type: 'Global Meta',
    components: ['Affix','BackTop',],
    desc: ''
  },

  Decoration: {
    name: '装饰组件',
    type: 'Decoration',
    components: ['Badge','ToolTip'],
    desc: '该类组件和元组件类似，但是其可用于装饰其他组件'
  },

  Layout: {
    name: '布局组件',
    type: 'Layout',
    components: ['Layout'],
    desc: '该类组件作为页面根节点存在，也可作为其他组件子组件的根节点，用作组件布局基础，该类组件具有强制父区域类型，除Layout本身以外，其他布局组件父组件，都需要是Layout'
  },

  Container: {
    name: '容器组件',
    type: 'Container',
    components: ['Space','Row','Col','Card'],
    desc: '该类组件作为行、列展示组件使用，Col具有强制父区域类型，Row具有强制子区域类型，Col必须在Row内部，Row内部只有Col'
  },

  Page: {
    name: '页面组件',
    type: 'Page',
    components: ['Steps','Tabs','Modal'],
    desc: '该类组件作为页面展示，其属性、事件、接口、值在当前子页配置，其展示的子页面都需要从小页管理界面进入编辑'
  },

  Output: {
    name: '输出组件',
    type: 'Output',
    components: ['AutoComplete','Checkbox', 'Cascader','DatePicker','InputNumber','Input','Rate','Radio','Switch','Slider','Select','TreeSelect','Transfer','TimePicker','Upload','Tree','Process'],
    desc: '该类组件拥有对外绑定输出值的功能，需要一个key，且具备验证输出值功能'
  },

  Composite: {
    name: '复合组件',
    type: 'Composite',
    components: ['Form','Table','Collapse','Calendar','Descriptions','List'],
    desc: '该类组件集成了组件本身以外的功能或组件，需要更为详细的设计'
  }
}

module.exports.deprecated = [
  'Breadcrumb',
  'Menu',
  'Pagination',
  'PageHeader',
  'Mentions',
  'Comment',
  'Popover',
  'Drawer',
  'Popconfirm',
  'Anchor',
  'ConfigProvider'
]

module.exports.degrade = [
  'Message',
  'Modal',
  'Notification',
  'Form.Item',
  'List',
  'Provider'
]

module.exports.findInTypes = component => {
  for (let key in this.types) {
    let type = this.types[key]
    if (type.components.includes(component)) return type
  }
}