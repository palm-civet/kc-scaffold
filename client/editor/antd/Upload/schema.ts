export default {
	"props": {
		"accept": {
			"type": "string",
			"default": "-",
			"desc": "接受上传的文件类型, 详见 [input accept Attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept)",
			"version": "4.5.1"
		},
		"action": {
			"type": "string \\| (file) => Promise",
			"default": "-",
			"desc": "上传的地址",
			"version": "4.5.1"
		},
		"method": {
			"type": "string",
			"default": "`post`",
			"desc": "上传请求的 http method",
			"version": "4.5.1"
		},
		"directory": {
			"type": "boolean",
			"default": "false",
			"desc": "支持上传文件夹（[caniuse](https://caniuse.com/#feat=input-file-directory)）",
			"version": "4.5.1"
		},
		"beforeUpload": {
			"type": "(file, fileList) => boolean \\| Promise",
			"default": "-",
			"desc": "上传文件之前的钩子，参数为上传的文件，若返回 `false` 则停止上传。支持返回一个 Promise 对象，Promise 对象 reject 时则停止上传，resolve 时开始上传（ resolve 传入 `File` 或 `Blob` 对象则上传 resolve 传入对象）。**注意：IE9 不支持该方法**",
			"version": "4.5.1"
		},
		"customRequest": {
			"type": "function",
			"default": "-",
			"desc": "通过覆盖默认的上传行为，可以自定义自己的上传实现",
			"version": "4.5.1"
		},
		"data": {
			"type": "object\\|(file) => object \\| Promise&lt;object>",
			"default": "-",
			"desc": "上传所需额外参数或返回上传额外参数的方法",
			"version": "4.5.1"
		},
		"defaultFileList": {
			"type": "object\\[]",
			"default": "-",
			"desc": "默认已经上传的文件列表",
			"version": "4.5.1"
		},
		"disabled": {
			"type": "boolean",
			"default": "false",
			"desc": "是否禁用",
			"version": "4.5.1"
		},
		"fileList": {
			"type": "object\\[]",
			"default": "-",
			"desc": "已经上传的文件列表（受控），使用此参数时，如果遇到 `onChange` 只调用一次的问题，请参考 [#2423](https://github.com/ant-design/ant-design/issues/2423)",
			"version": "4.5.1"
		},
		"headers": {
			"type": "object",
			"default": "-",
			"desc": "设置上传的请求头部，IE10 以上有效",
			"version": "4.5.1"
		},
		"listType": {
			"type": "string",
			"default": "`text`",
			"desc": "上传列表的内建样式，支持三种基本样式 `text`, `picture` 和 `picture-card`",
			"version": "4.5.1"
		},
		"multiple": {
			"type": "boolean",
			"default": "false",
			"desc": "是否支持多选文件，`ie10+` 支持。开启后按住 ctrl 可选择多个文件",
			"version": "4.5.1"
		},
		"name": {
			"type": "string",
			"default": "`file`",
			"desc": "发到后台的文件参数名",
			"version": "4.5.1"
		},
		"previewFile": {
			"type": "(file: File \\| Blob) => Promise<dataURL: string>",
			"default": "-",
			"desc": "自定义文件预览逻辑",
			"version": "4.5.1"
		},
		"isImageUrl": {
			"type": "(file: UploadFile) => boolean",
			"default": "[(内部实现)](https://github.com/ant-design/ant-design/blob/4ad5830eecfb87471cd8ac588c5d992862b70770/components/upload/utils.tsx#L47-L68)",
			"desc": "自定义缩略图是否使用 &lt;img /> 标签进行显示",
			"version": "4.5.1"
		},
		"showUploadList": {
			"type": "boolean \\| { showPreviewIcon?: boolean, showRemoveIcon?: boolean, showDownloadIcon?: boolean, removeIcon?: React.ReactNode, downloadIcon?: React.ReactNode }",
			"default": "true",
			"desc": "是否展示文件列表, 可设为一个对象，用于单独设定 `showPreviewIcon`, `showRemoveIcon`, `showDownloadIcon`, `removeIcon` 和 `downloadIcon`",
			"version": "4.5.1"
		},
		"withCredentials": {
			"type": "boolean",
			"default": "false",
			"desc": "上传请求时是否携带 cookie",
			"version": "4.5.1"
		},
		"openFileDialogOnClick": {
			"type": "boolean",
			"default": "true",
			"desc": "点击打开文件对话框",
			"version": "4.5.1"
		},
		"transformFile": {
			"type": "function(file): string \\| Blob \\| File \\| Promise&lt;string \\| Blob \\| File>",
			"default": "-",
			"desc": "在上传之前转换文件。支持返回一个 Promise 对象",
			"version": "4.5.1"
		},
		"iconRender": {
			"type": "(file: UploadFile, listType?: UploadListType) => React.ReactNode",
			"default": "-",
			"desc": "自定义显示 icon",
			"version": "4.5.1"
		},
		"progress": {
			"type": "[ProgressProps](/components/progress/#API) ( 仅支持 `type=\"line\"` )",
			"default": "{ strokeWidth: 2, showInfo: false }",
			"desc": "自定义进度条样式",
			"version": "4.3.0"
		}
	},
	"events": {
		"onChange": {
			"type": "function",
			"default": "-",
			"desc": "上传文件改变时的状态，详见 [onChange](#onChange)",
			"version": "4.5.1"
		},
		"onPreview": {
			"type": "function(file)",
			"default": "-",
			"desc": "点击文件链接或预览图标时的回调",
			"version": "4.5.1"
		},
		"onRemove": {
			"type": "function(file): boolean \\| Promise",
			"default": "-",
			"desc": "点击移除文件时的回调，返回值为 false 时不移除。支持返回一个 Promise 对象，Promise 对象 resolve(false) 或 reject 时不移除",
			"version": "4.5.1"
		},
		"onDownload": {
			"type": "function(file): void",
			"default": "(跳转新标签页)",
			"desc": "点击下载文件时的回调，如果没有指定，则默认跳转到文件 url 对应的标签页",
			"version": "4.5.1"
		}
	},
	"name": "Upload",
	"title": "上传",
	"categroy": "Output",
	"deprecated": false,
	"degrade": false
}