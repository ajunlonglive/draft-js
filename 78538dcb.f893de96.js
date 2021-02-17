/*! For license information please see 78538dcb.f893de96.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{165:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return s}));var r=t(2),o=t(9),i=(t(191),t(190)),a={id:"advanced-topics-key-bindings",title:"Key Bindings"},c={id:"advanced-topics-key-bindings",title:"Key Bindings",description:"The Editor component offers flexibility to define custom key bindings",source:"@site/../docs/Advanced-Topics-Key-Bindings.md",permalink:"/docs/advanced-topics-key-bindings",editUrl:"https://github.com/facebook/draft-js/edit/master/docs/../docs/Advanced-Topics-Key-Bindings.md",lastUpdatedBy:"Ryan Goldstein",lastUpdatedAt:1602185719,sidebar:"docs",previous:{title:"Decorators",permalink:"/docs/advanced-topics-decorators"},next:{title:"Managing Focus",permalink:"/docs/advanced-topics-managing-focus"}},u=[{value:"Defaults",id:"defaults",children:[]},{value:"Customization",id:"customization",children:[]},{value:"Example",id:"example",children:[]}],l={rightToc:u};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"Editor")," component offers flexibility to define custom key bindings\nfor your editor, via the ",Object(i.b)("inlineCode",{parentName:"p"},"keyBindingFn")," prop. This allows you to match key\ncommands to behaviors in your editor component."),Object(i.b)("h2",{id:"defaults"},"Defaults"),Object(i.b)("p",null,"The default key binding function is ",Object(i.b)("inlineCode",{parentName:"p"},"getDefaultKeyBinding"),"."),Object(i.b)("p",null,"Since the Draft framework maintains tight control over DOM rendering and\nbehavior, basic editing commands must be captured and routed through the key\nbinding system."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"getDefaultKeyBinding")," maps known OS-level editor commands to ",Object(i.b)("inlineCode",{parentName:"p"},"DraftEditorCommand"),"\nstrings, which then correspond to behaviors within component handlers."),Object(i.b)("p",null,"For instance, ",Object(i.b)("inlineCode",{parentName:"p"},"Ctrl+Z")," (Win) and ",Object(i.b)("inlineCode",{parentName:"p"},"Cmd+Z")," (OSX) map to the ",Object(i.b)("inlineCode",{parentName:"p"},"'undo'")," command,\nwhich then routes our handler to perform an ",Object(i.b)("inlineCode",{parentName:"p"},"EditorState.undo()"),"."),Object(i.b)("h2",{id:"customization"},"Customization"),Object(i.b)("p",null,"You may provide your own key binding function to supply custom command strings."),Object(i.b)("p",null,"It is recommended that your function use ",Object(i.b)("inlineCode",{parentName:"p"},"getDefaultKeyBinding")," as a\nfall-through case, so that your editor may benefit from default commands."),Object(i.b)("p",null,"With your custom command string, you may then implement the ",Object(i.b)("inlineCode",{parentName:"p"},"handleKeyCommand"),"\nprop function, which allows you to map that command string to your desired\nbehavior. If ",Object(i.b)("inlineCode",{parentName:"p"},"handleKeyCommand")," returns ",Object(i.b)("inlineCode",{parentName:"p"},"'handled'"),", the command is considered\nhandled. If it returns ",Object(i.b)("inlineCode",{parentName:"p"},"'not-handled'"),", the command will fall through."),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("p",null,'Let\'s say we have an editor that should have a "Save" mechanism to periodically\nwrite your contents to the server as a draft copy.'),Object(i.b)("p",null,"First, let's define our key binding function:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import {getDefaultKeyBinding, KeyBindingUtil} from 'draft-js';\nconst {hasCommandModifier} = KeyBindingUtil;\n\nfunction myKeyBindingFn(e: SyntheticKeyboardEvent): string | null {\n  if (e.keyCode === 83 /* `S` key */ && hasCommandModifier(e)) {\n    return 'myeditor-save';\n  }\n  return getDefaultKeyBinding(e);\n}\n")),Object(i.b)("p",null,"Our function receives a key event, and we check whether it matches our criteria:\nit must be an ",Object(i.b)("inlineCode",{parentName:"p"},"S")," key, and it must have a command modifier, i.e. the command\nkey for OSX, or the control key otherwise."),Object(i.b)("p",null,"If the command is a match, return a string that names the command. Otherwise,\nfall through to the default key bindings."),Object(i.b)("p",null,"In our editor component, we can then make use of the command via the\n",Object(i.b)("inlineCode",{parentName:"p"},"handleKeyCommand")," prop:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import {Editor} from 'draft-js';\nclass MyEditor extends React.Component {\n\n  constructor(props) {\n    super(props);\n    this.handleKeyCommand = this.handleKeyCommand.bind(this);\n  }\n  // ...\n\n  handleKeyCommand(command: string): DraftHandleValue {\n    if (command === 'myeditor-save') {\n      // Perform a request to save your contents, set\n      // a new `editorState`, etc.\n      return 'handled';\n    }\n    return 'not-handled';\n  }\n\n  render() {\n    return (\n      <Editor\n        editorState={this.state.editorState}\n        handleKeyCommand={this.handleKeyCommand}\n        keyBindingFn={myKeyBindingFn}\n        ...\n      />\n    );\n  }\n}\n")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"'myeditor-save'")," command can be used for our custom behavior, and returning\n",Object(i.b)("inlineCode",{parentName:"p"},"'handled'")," instructs the editor that the command has been handled and no more work\nis required."),Object(i.b)("p",null,"By returning ",Object(i.b)("inlineCode",{parentName:"p"},"'not-handled'")," in all other cases, default commands are able to fall\nthrough to default handler behavior."))}s.isMDXComponent=!0},190:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),s=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=s(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},p=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=s(t),p=r,m=d["".concat(a,".").concat(p)]||d[p]||f[p]||i;return t?o.a.createElement(m,c(c({ref:n},l),{},{components:t})):o.a.createElement(m,c({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=p;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},191:function(e,n,t){"use strict";e.exports=t(192)},192:function(e,n,t){"use strict";var r=t(193),o="function"==typeof Symbol&&Symbol.for,i=o?Symbol.for("react.element"):60103,a=o?Symbol.for("react.portal"):60106,c=o?Symbol.for("react.fragment"):60107,u=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,s=o?Symbol.for("react.provider"):60109,d=o?Symbol.for("react.context"):60110,f=o?Symbol.for("react.forward_ref"):60112,p=o?Symbol.for("react.suspense"):60113,m=o?Symbol.for("react.memo"):60115,y=o?Symbol.for("react.lazy"):60116,b="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v={};function O(e,n,t){this.props=e,this.context=n,this.refs=v,this.updater=t||g}function j(){}function w(e,n,t){this.props=e,this.context=n,this.refs=v,this.updater=t||g}O.prototype.isReactComponent={},O.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,n,"setState")},O.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=O.prototype;var C=w.prototype=new j;C.constructor=w,r(C,O.prototype),C.isPureReactComponent=!0;var k={current:null},S=Object.prototype.hasOwnProperty,E={key:!0,ref:!0,__self:!0,__source:!0};function x(e,n,t){var r,o={},a=null,c=null;if(null!=n)for(r in void 0!==n.ref&&(c=n.ref),void 0!==n.key&&(a=""+n.key),n)S.call(n,r)&&!E.hasOwnProperty(r)&&(o[r]=n[r]);var u=arguments.length-2;if(1===u)o.children=t;else if(1<u){for(var l=Array(u),s=0;s<u;s++)l[s]=arguments[s+2];o.children=l}if(e&&e.defaultProps)for(r in u=e.defaultProps)void 0===o[r]&&(o[r]=u[r]);return{$$typeof:i,type:e,key:a,ref:c,props:o,_owner:k.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var N=/\/+/g,_=[];function D(e,n,t,r){if(_.length){var o=_.pop();return o.result=e,o.keyPrefix=n,o.func=t,o.context=r,o.count=0,o}return{result:e,keyPrefix:n,func:t,context:r,count:0}}function $(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>_.length&&_.push(e)}function K(e,n,t){return null==e?0:function e(n,t,r,o){var c=typeof n;"undefined"!==c&&"boolean"!==c||(n=null);var u=!1;if(null===n)u=!0;else switch(c){case"string":case"number":u=!0;break;case"object":switch(n.$$typeof){case i:case a:u=!0}}if(u)return r(o,n,""===t?"."+R(n,0):t),1;if(u=0,t=""===t?".":t+":",Array.isArray(n))for(var l=0;l<n.length;l++){var s=t+R(c=n[l],l);u+=e(c,s,r,o)}else if(null===n||"object"!=typeof n?s=null:s="function"==typeof(s=b&&n[b]||n["@@iterator"])?s:null,"function"==typeof s)for(n=s.call(n),l=0;!(c=n.next()).done;)u+=e(c=c.value,s=t+R(c,l++),r,o);else if("object"===c)throw r=""+n,Error(h(31,"[object Object]"===r?"object with keys {"+Object.keys(n).join(", ")+"}":r,""));return u}(e,"",n,t)}function R(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return n[e]}))}(e.key):n.toString(36)}function T(e,n){e.func.call(e.context,n,e.count++)}function B(e,n,t){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,n,e.count++),Array.isArray(e)?I(e,r,t,(function(e){return e})):null!=e&&(P(e)&&(e=function(e,n){return{$$typeof:i,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||n&&n.key===e.key?"":(""+e.key).replace(N,"$&/")+"/")+t)),r.push(e))}function I(e,n,t,r,o){var i="";null!=t&&(i=(""+t).replace(N,"$&/")+"/"),K(e,B,n=D(n,i,r,o)),$(n)}var M={current:null};function A(){var e=M.current;if(null===e)throw Error(h(321));return e}var F={ReactCurrentDispatcher:M,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:k,IsSomeRendererActing:{current:!1},assign:r};n.Children={map:function(e,n,t){if(null==e)return e;var r=[];return I(e,r,null,n,t),r},forEach:function(e,n,t){if(null==e)return e;K(e,T,n=D(null,null,n,t)),$(n)},count:function(e){return K(e,(function(){return null}),null)},toArray:function(e){var n=[];return I(e,n,null,(function(e){return e})),n},only:function(e){if(!P(e))throw Error(h(143));return e}},n.Component=O,n.Fragment=c,n.Profiler=l,n.PureComponent=w,n.StrictMode=u,n.Suspense=p,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,n.cloneElement=function(e,n,t){if(null==e)throw Error(h(267,e));var o=r({},e.props),a=e.key,c=e.ref,u=e._owner;if(null!=n){if(void 0!==n.ref&&(c=n.ref,u=k.current),void 0!==n.key&&(a=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in n)S.call(n,s)&&!E.hasOwnProperty(s)&&(o[s]=void 0===n[s]&&void 0!==l?l[s]:n[s])}var s=arguments.length-2;if(1===s)o.children=t;else if(1<s){l=Array(s);for(var d=0;d<s;d++)l[d]=arguments[d+2];o.children=l}return{$$typeof:i,type:e.type,key:a,ref:c,props:o,_owner:u}},n.createContext=function(e,n){return void 0===n&&(n=null),(e={$$typeof:d,_calculateChangedBits:n,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},n.createElement=x,n.createFactory=function(e){var n=x.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:f,render:e}},n.isValidElement=P,n.lazy=function(e){return{$$typeof:y,_ctor:e,_status:-1,_result:null}},n.memo=function(e,n){return{$$typeof:m,type:e,compare:void 0===n?null:n}},n.useCallback=function(e,n){return A().useCallback(e,n)},n.useContext=function(e,n){return A().useContext(e,n)},n.useDebugValue=function(){},n.useEffect=function(e,n){return A().useEffect(e,n)},n.useImperativeHandle=function(e,n,t){return A().useImperativeHandle(e,n,t)},n.useLayoutEffect=function(e,n){return A().useLayoutEffect(e,n)},n.useMemo=function(e,n){return A().useMemo(e,n)},n.useReducer=function(e,n,t){return A().useReducer(e,n,t)},n.useRef=function(e){return A().useRef(e)},n.useState=function(e){return A().useState(e)},n.version="16.13.1"},193:function(e,n,t){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},t=0;t<10;t++)n["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(e){return n[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,n){for(var t,c,u=a(e),l=1;l<arguments.length;l++){for(var s in t=Object(arguments[l]))o.call(t,s)&&(u[s]=t[s]);if(r){c=r(t);for(var d=0;d<c.length;d++)i.call(t,c[d])&&(u[c[d]]=t[c[d]])}}return u}}}]);