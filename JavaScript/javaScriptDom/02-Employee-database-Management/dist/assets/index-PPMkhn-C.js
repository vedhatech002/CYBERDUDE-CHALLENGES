(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function i(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function t(s){if(s.ep)return;s.ep=!0;const l=i(s);fetch(s.href,l)}})();var G=Object.defineProperty,q=(r,e,i)=>e in r?G(r,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[e]=i,h=(r,e,i)=>(q(r,typeof e!="symbol"?e+"":e,i),i);const D=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,z=/^-?[0-9]\d*$/,B=/^(?=.*[A-Za-z])(?=.*\d).{8,}$/,H=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,K=r=>{let e=r;return typeof r=="string"&&(e=r.trim()),!e},U=r=>D.test(r),X=(r,e)=>r.length>e,Z=(r,e)=>r.length<e,J=r=>typeof r!="string"?!1:!isNaN(+r)&&!isNaN(parseFloat(r)),W=r=>z.test(r),Y=r=>B.test(r),Q=r=>H.test(r),R=(r,e)=>r>e,ee=(r,e)=>r<e,p=r=>typeof r!="string"||r==="";var u=(r=>(r.Required="required",r.Email="email",r.MinLength="minLength",r.MaxLength="maxLength",r.Password="password",r.Number="number",r.Integer="integer",r.MaxNumber="maxNumber",r.MinNumber="minNumber",r.StrongPassword="strongPassword",r.CustomRegexp="customRegexp",r.MinFilesCount="minFilesCount",r.MaxFilesCount="maxFilesCount",r.Files="files",r))(u||{}),w=(r=>(r.Required="required",r))(w||{}),k=(r=>(r.Label="label",r.LabelArrow="labelArrow",r))(k||{});const P=[{key:u.Required,dict:{en:"The field is required"}},{key:u.Email,dict:{en:"Email has invalid format"}},{key:u.MaxLength,dict:{en:"The field must contain a maximum of :value characters"}},{key:u.MinLength,dict:{en:"The field must contain a minimum of :value characters"}},{key:u.Password,dict:{en:"Password must contain minimum eight characters, at least one letter and one number"}},{key:u.StrongPassword,dict:{en:"Password should contain minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"}},{key:u.Number,dict:{en:"Value should be a number"}},{key:u.MaxNumber,dict:{en:"Number should be less or equal than :value"}},{key:u.MinNumber,dict:{en:"Number should be more or equal than :value"}},{key:u.MinFilesCount,dict:{en:"Files count should be more or equal than :value"}},{key:u.MaxFilesCount,dict:{en:"Files count should be less or equal than :value"}},{key:u.Files,dict:{en:"Uploaded files have one or several invalid properties (extension/size/type etc)."}}],te="Value is incorrect",v=r=>typeof r=="object"&&r!==null&&"then"in r&&typeof r.then=="function",ie=r=>{let e=r;const i=[];for(;e;)i.unshift(e),e=e.parentNode;return i},se=(r,e)=>{const i=[...e].reverse();for(let t=0,s=i.length;t<s;++t){const l=i[t];for(const o in r){const a=r[o];if(a.groupElem===l)return[o,a]}}return null},m=r=>Array.isArray(r)?r.filter(e=>e.length>0):typeof r=="string"&&r.trim()?[...r.split(" ").filter(e=>e.length>0)]:[],F=r=>r instanceof Element||r instanceof HTMLDocument,re=".just-validate-error-label[data-tooltip=true]{position:fixed;padding:4px 8px;background:#423f3f;color:#fff;white-space:nowrap;z-index:10;border-radius:4px;transform:translateY(-5px)}.just-validate-error-label[data-tooltip=true]:before{content:'';width:0;height:0;border-left:solid 5px transparent;border-right:solid 5px transparent;border-bottom:solid 5px #423f3f;position:absolute;z-index:3;display:block;bottom:-5px;transform:rotate(180deg);left:calc(50% - 5px)}.just-validate-error-label[data-tooltip=true][data-direction=left]{transform:translateX(-5px)}.just-validate-error-label[data-tooltip=true][data-direction=left]:before{right:-7px;bottom:auto;left:auto;top:calc(50% - 2px);transform:rotate(90deg)}.just-validate-error-label[data-tooltip=true][data-direction=right]{transform:translateX(5px)}.just-validate-error-label[data-tooltip=true][data-direction=right]:before{right:auto;bottom:auto;left:-7px;top:calc(50% - 2px);transform:rotate(-90deg)}.just-validate-error-label[data-tooltip=true][data-direction=bottom]{transform:translateY(5px)}.just-validate-error-label[data-tooltip=true][data-direction=bottom]:before{right:auto;bottom:auto;left:calc(50% - 5px);top:-5px;transform:rotate(0)}",C=5,S={errorFieldStyle:{color:"#b81111",border:"1px solid #B81111"},errorFieldCssClass:"just-validate-error-field",successFieldCssClass:"just-validate-success-field",errorLabelStyle:{color:"#b81111"},errorLabelCssClass:"just-validate-error-label",successLabelCssClass:"just-validate-success-label",focusInvalidField:!0,lockForm:!0,testingMode:!1,validateBeforeSubmitting:!1,submitFormAutomatically:!1};class le{constructor(e,i,t){h(this,"form",null),h(this,"fields",{}),h(this,"groupFields",{}),h(this,"errors",{}),h(this,"isValid",!1),h(this,"isSubmitted",!1),h(this,"globalConfig",S),h(this,"errorLabels",{}),h(this,"successLabels",{}),h(this,"eventListeners",[]),h(this,"dictLocale",P),h(this,"currentLocale","en"),h(this,"customStyleTags",{}),h(this,"onSuccessCallback"),h(this,"onFailCallback"),h(this,"onValidateCallback"),h(this,"tooltips",[]),h(this,"lastScrollPosition"),h(this,"isScrollTick"),h(this,"fieldIds",new Map),h(this,"getKeyByFieldSelector",s=>this.fieldIds.get(s)),h(this,"getFieldSelectorByKey",s=>{for(const[l,o]of this.fieldIds)if(s===o)return l}),h(this,"getCompatibleFields",()=>{const s={};return Object.keys(this.fields).forEach(l=>{let o=l;const a=this.getFieldSelectorByKey(l);typeof a=="string"&&(o=a),s[o]={...this.fields[l]}}),s}),h(this,"setKeyByFieldSelector",s=>{if(this.fieldIds.has(s))return this.fieldIds.get(s);const l=String(this.fieldIds.size+1);return this.fieldIds.set(s,l),l}),h(this,"refreshAllTooltips",()=>{this.tooltips.forEach(s=>{s.refresh()})}),h(this,"handleDocumentScroll",()=>{this.lastScrollPosition=window.scrollY,this.isScrollTick||(window.requestAnimationFrame(()=>{this.refreshAllTooltips(),this.isScrollTick=!1}),this.isScrollTick=!0)}),h(this,"formSubmitHandler",s=>{s.preventDefault(),this.isSubmitted=!0,this.validateHandler(s)}),h(this,"handleFieldChange",s=>{let l;for(const o in this.fields)if(this.fields[o].elem===s){l=o;break}l&&(this.fields[l].touched=!0,this.validateField(l,!0))}),h(this,"handleGroupChange",s=>{let l;for(const o in this.groupFields)if(this.groupFields[o].elems.find(c=>c===s)){l=o;break}l&&(this.groupFields[l].touched=!0,this.validateGroup(l,!0))}),h(this,"handlerChange",s=>{s.target&&(this.handleFieldChange(s.target),this.handleGroupChange(s.target),this.renderErrors())}),this.initialize(e,i,t)}initialize(e,i,t){if(this.form=null,this.errors={},this.isValid=!1,this.isSubmitted=!1,this.globalConfig=S,this.errorLabels={},this.successLabels={},this.eventListeners=[],this.customStyleTags={},this.tooltips=[],this.currentLocale="en",typeof e=="string"){const s=document.querySelector(e);if(!s)throw Error(`Form with ${e} selector not found! Please check the form selector`);this.setForm(s)}else if(e instanceof HTMLFormElement)this.setForm(e);else throw Error("Form selector is not valid. Please specify a string selector or a DOM element.");if(this.globalConfig={...S,...i},t&&(this.dictLocale=[...t,...P]),this.isTooltip()){const s=document.createElement("style");s.textContent=re,this.customStyleTags[k.Label]=document.head.appendChild(s),this.addListener("scroll",document,this.handleDocumentScroll)}}getLocalisedString(e,i,t){var s;const l=t??e;let o=(s=this.dictLocale.find(a=>a.key===l))==null?void 0:s.dict[this.currentLocale];if(o||t&&(o=t),o&&i!==void 0)switch(e){case u.MaxLength:case u.MinLength:case u.MaxNumber:case u.MinNumber:case u.MinFilesCount:case u.MaxFilesCount:o=o.replace(":value",String(i))}return o||t||te}getFieldErrorMessage(e,i){const t=typeof e.errorMessage=="function"?e.errorMessage(this.getElemValue(i),this.fields):e.errorMessage;return this.getLocalisedString(e.rule,e.value,t)}getFieldSuccessMessage(e,i){const t=typeof e=="function"?e(this.getElemValue(i),this.fields):e;return this.getLocalisedString(void 0,void 0,t)}getGroupErrorMessage(e){return this.getLocalisedString(e.rule,void 0,e.errorMessage)}getGroupSuccessMessage(e){if(e.successMessage)return this.getLocalisedString(void 0,void 0,e.successMessage)}setFieldInvalid(e,i){this.fields[e].isValid=!1,this.fields[e].errorMessage=this.getFieldErrorMessage(i,this.fields[e].elem)}setFieldValid(e,i){this.fields[e].isValid=!0,i!==void 0&&(this.fields[e].successMessage=this.getFieldSuccessMessage(i,this.fields[e].elem))}setGroupInvalid(e,i){this.groupFields[e].isValid=!1,this.groupFields[e].errorMessage=this.getGroupErrorMessage(i)}setGroupValid(e,i){this.groupFields[e].isValid=!0,this.groupFields[e].successMessage=this.getGroupSuccessMessage(i)}getElemValue(e){switch(e.type){case"checkbox":return e.checked;case"file":return e.files;default:return e.value}}validateGroupRule(e,i,t){switch(t.rule){case w.Required:i.every(s=>!s.checked)?this.setGroupInvalid(e,t):this.setGroupValid(e,t)}}validateFieldRule(e,i,t,s=!1){const l=t.value,o=this.getElemValue(i);if(t.plugin){t.plugin(o,this.getCompatibleFields())||this.setFieldInvalid(e,t);return}switch(t.rule){case u.Required:{K(o)&&this.setFieldInvalid(e,t);break}case u.Email:{if(p(o))break;U(o)||this.setFieldInvalid(e,t);break}case u.MaxLength:{if(l===void 0){console.error(`Value for ${t.rule} rule for [${e}] field is not defined. The field will be always invalid.`),this.setFieldInvalid(e,t);break}if(typeof l!="number"){console.error(`Value for ${t.rule} rule for [${e}] should be a number. The field will be always invalid.`),this.setFieldInvalid(e,t);break}if(p(o))break;X(o,l)&&this.setFieldInvalid(e,t);break}case u.MinLength:{if(l===void 0){console.error(`Value for ${t.rule} rule for [${e}] field is not defined. The field will be always invalid.`),this.setFieldInvalid(e,t);break}if(typeof l!="number"){console.error(`Value for ${t.rule} rule for [${e}] should be a number. The field will be always invalid.`),this.setFieldInvalid(e,t);break}if(p(o))break;Z(o,l)&&this.setFieldInvalid(e,t);break}case u.Password:{if(p(o))break;Y(o)||this.setFieldInvalid(e,t);break}case u.StrongPassword:{if(p(o))break;Q(o)||this.setFieldInvalid(e,t);break}case u.Number:{if(p(o))break;J(o)||this.setFieldInvalid(e,t);break}case u.Integer:{if(p(o))break;W(o)||this.setFieldInvalid(e,t);break}case u.MaxNumber:{if(l===void 0){console.error(`Value for ${t.rule} rule for [${e}] field is not defined. The field will be always invalid.`),this.setFieldInvalid(e,t);break}if(typeof l!="number"){console.error(`Value for ${t.rule} rule for [${e}] field should be a number. The field will be always invalid.`),this.setFieldInvalid(e,t);break}if(p(o))break;const a=+o;(Number.isNaN(a)||R(a,l))&&this.setFieldInvalid(e,t);break}case u.MinNumber:{if(l===void 0){console.error(`Value for ${t.rule} rule for [${e}] field is not defined. The field will be always invalid.`),this.setFieldInvalid(e,t);break}if(typeof l!="number"){console.error(`Value for ${t.rule} rule for [${e}] field should be a number. The field will be always invalid.`),this.setFieldInvalid(e,t);break}if(p(o))break;const a=+o;(Number.isNaN(a)||ee(a,l))&&this.setFieldInvalid(e,t);break}case u.CustomRegexp:{if(l===void 0){console.error(`Value for ${t.rule} rule for [${e}] field is not defined. This field will be always invalid.`),this.setFieldInvalid(e,t);return}let a;try{a=new RegExp(l)}catch{console.error(`Value for ${t.rule} rule for [${e}] should be a valid regexp. This field will be always invalid.`),this.setFieldInvalid(e,t);break}const c=String(o);c!==""&&!a.test(c)&&this.setFieldInvalid(e,t);break}case u.MinFilesCount:{if(l===void 0){console.error(`Value for ${t.rule} rule for [${e}] field is not defined. This field will be always invalid.`),this.setFieldInvalid(e,t);break}if(typeof l!="number"){console.error(`Value for ${t.rule} rule for [${e}] field should be a number. The field will be always invalid.`),this.setFieldInvalid(e,t);break}if(Number.isFinite(o==null?void 0:o.length)&&o.length<l){this.setFieldInvalid(e,t);break}break}case u.MaxFilesCount:{if(l===void 0){console.error(`Value for ${t.rule} rule for [${e}] field is not defined. This field will be always invalid.`),this.setFieldInvalid(e,t);break}if(typeof l!="number"){console.error(`Value for ${t.rule} rule for [${e}] field should be a number. The field will be always invalid.`),this.setFieldInvalid(e,t);break}if(Number.isFinite(o==null?void 0:o.length)&&o.length>l){this.setFieldInvalid(e,t);break}break}case u.Files:{if(l===void 0){console.error(`Value for ${t.rule} rule for [${e}] field is not defined. This field will be always invalid.`),this.setFieldInvalid(e,t);return}if(typeof l!="object"){console.error(`Value for ${t.rule} rule for [${e}] field should be an object. This field will be always invalid.`),this.setFieldInvalid(e,t);return}const a=l.files;if(typeof a!="object"){console.error(`Value for ${t.rule} rule for [${e}] field should be an object with files array. This field will be always invalid.`),this.setFieldInvalid(e,t);return}const c=(n,d)=>{const f=Number.isFinite(d.minSize)&&n.size<d.minSize,b=Number.isFinite(d.maxSize)&&n.size>d.maxSize,$=Array.isArray(d.names)&&!d.names.includes(n.name),A=Array.isArray(d.extensions)&&!d.extensions.includes(n.name.split(".")[n.name.split(".").length-1]),N=Array.isArray(d.types)&&!d.types.includes(n.type);return f||b||$||A||N};if(typeof o=="object"&&o!==null)for(let n=0,d=o.length;n<d;++n){const f=o.item(n);if(!f){this.setFieldInvalid(e,t);break}if(c(f,a)){this.setFieldInvalid(e,t);break}}break}default:{if(typeof t.validator!="function"){console.error(`Validator for custom rule for [${e}] field should be a function. This field will be always invalid.`),this.setFieldInvalid(e,t);return}const a=t.validator(o,this.getCompatibleFields());if(typeof a!="boolean"&&typeof a!="function"&&console.error(`Validator return value for [${e}] field should be boolean or function. It will be cast to boolean.`),typeof a=="function")if(s)this.fields[e].asyncCheckPending=!0;else{this.fields[e].asyncCheckPending=!1;const c=a();if(!v(c)){console.error(`Validator function for custom rule for [${e}] field should return a Promise. This field will be always invalid.`),this.setFieldInvalid(e,t);return}return c.then(n=>{n||this.setFieldInvalid(e,t)}).catch(()=>{this.setFieldInvalid(e,t)})}a||this.setFieldInvalid(e,t)}}}isFormValid(){let e=!0;for(let i=0,t=Object.values(this.fields).length;i<t;++i){const s=Object.values(this.fields)[i];if(s.isValid===void 0){e=void 0;break}if(s.isValid===!1){e=!1;break}}for(let i=0,t=Object.values(this.groupFields).length;i<t;++i){const s=Object.values(this.groupFields)[i];if(s.isValid===void 0){e=void 0;break}if(s.isValid===!1){e=!1;break}}return e}validateField(e,i=!1){var t;const s=this.fields[e];s.isValid=!0;const l=[];return[...s.rules].reverse().forEach(o=>{const a=this.validateFieldRule(e,s.elem,o,i);v(a)&&l.push(a)}),s.isValid&&this.setFieldValid(e,(t=s.config)==null?void 0:t.successMessage),Promise.allSettled(l).finally(()=>{var o;i&&((o=this.onValidateCallback)==null||o.call(this,{isValid:this.isFormValid(),isSubmitted:this.isSubmitted,fields:this.getCompatibleFields(),groups:{...this.groupFields}}))})}revalidateField(e){if(typeof e!="string"&&!F(e))throw Error("Field selector is not valid. Please specify a string selector or a valid DOM element.");const i=this.getKeyByFieldSelector(e);return!i||!this.fields[i]?(console.error("Field not found. Check the field selector."),Promise.reject()):new Promise(t=>{this.validateField(i,!0).finally(()=>{this.clearFieldStyle(i),this.clearFieldLabel(i),this.renderFieldError(i,!0),t(!!this.fields[i].isValid)})})}revalidateGroup(e){if(typeof e!="string"&&!F(e))throw Error("Group selector is not valid. Please specify a string selector or a valid DOM element.");const i=this.getKeyByFieldSelector(e);return!i||!this.groupFields[i]?(console.error("Group not found. Check the group selector."),Promise.reject()):new Promise(t=>{this.validateGroup(i).finally(()=>{this.clearFieldLabel(i),this.renderGroupError(i,!0),t(!!this.groupFields[i].isValid)})})}validateGroup(e,i=!1){const t=this.groupFields[e],s=[];return[...t.rules].reverse().forEach(l=>{const o=this.validateGroupRule(e,t.elems,l);v(o)&&s.push(o)}),Promise.allSettled(s).finally(()=>{var l;i&&((l=this.onValidateCallback)==null||l.call(this,{isValid:this.isFormValid(),isSubmitted:this.isSubmitted,fields:this.getCompatibleFields(),groups:{...this.groupFields}}))})}focusInvalidField(){for(const e in this.fields){const i=this.fields[e];if(!i.isValid){setTimeout(()=>i.elem.focus(),0);break}}}afterSubmitValidation(e=!1){this.renderErrors(e),this.globalConfig.focusInvalidField&&this.focusInvalidField()}validate(e=!1){return new Promise(i=>{const t=[];Object.keys(this.fields).forEach(s=>{const l=this.validateField(s);v(l)&&t.push(l)}),Object.keys(this.groupFields).forEach(s=>{const l=this.validateGroup(s);v(l)&&t.push(l)}),Promise.allSettled(t).then(()=>{var s;this.afterSubmitValidation(e),(s=this.onValidateCallback)==null||s.call(this,{isValid:this.isFormValid(),isSubmitted:this.isSubmitted,fields:this.getCompatibleFields(),groups:{...this.groupFields}}),i(!!t.length)})})}revalidate(){return new Promise(e=>{this.validateHandler(void 0,!0).finally(()=>{this.globalConfig.focusInvalidField&&this.focusInvalidField(),e(this.isValid)})})}validateHandler(e,i=!1){return this.globalConfig.lockForm&&this.lockForm(),this.validate(i).finally(()=>{var t,s,l;this.globalConfig.lockForm&&this.unlockForm(),this.isValid?((t=this.onSuccessCallback)==null||t.call(this,e),this.globalConfig.submitFormAutomatically&&((s=e==null?void 0:e.currentTarget)==null||s.submit())):(l=this.onFailCallback)==null||l.call(this,this.getCompatibleFields(),this.groupFields)})}setForm(e){this.form=e,this.form.setAttribute("novalidate","novalidate"),this.removeListener("submit",this.form,this.formSubmitHandler),this.addListener("submit",this.form,this.formSubmitHandler)}addListener(e,i,t){i.addEventListener(e,t),this.eventListeners.push({type:e,elem:i,func:t})}removeListener(e,i,t){i.removeEventListener(e,t),this.eventListeners=this.eventListeners.filter(s=>s.type!==e||s.elem!==i)}addField(e,i,t){if(typeof e!="string"&&!F(e))throw Error("Field selector is not valid. Please specify a string selector or a valid DOM element.");let s;if(typeof e=="string"?s=this.form.querySelector(e):s=e,!s)throw Error("Field doesn't exist in the DOM! Please check the field selector.");if(!Array.isArray(i)||!i.length)throw Error("Rules argument should be an array and should contain at least 1 element.");i.forEach(o=>{if(!("rule"in o||"validator"in o||"plugin"in o))throw Error("Rules argument must contain at least one rule or validator property.");if(!o.validator&&!o.plugin&&(!o.rule||!Object.values(u).includes(o.rule)))throw Error(`Rule should be one of these types: ${Object.values(u).join(", ")}. Provided value: ${o.rule}`)});const l=this.setKeyByFieldSelector(e);return this.fields[l]={elem:s,rules:i,isValid:void 0,touched:!1,config:t},this.setListeners(s),(this.isSubmitted||this.globalConfig.validateBeforeSubmitting)&&this.validateField(l),this}removeField(e){if(typeof e!="string"&&!F(e))throw Error("Field selector is not valid. Please specify a string selector or a valid DOM element.");const i=this.getKeyByFieldSelector(e);if(!i||!this.fields[i])return console.error("Field not found. Check the field selector."),this;const t=this.getListenerType(this.fields[i].elem.type);return this.removeListener(t,this.fields[i].elem,this.handlerChange),this.clearErrors(),delete this.fields[i],this}removeGroup(e){if(typeof e!="string")throw Error("Group selector is not valid. Please specify a string selector.");const i=this.getKeyByFieldSelector(e);return!i||!this.groupFields[i]?(console.error("Group not found. Check the group selector."),this):(this.groupFields[i].elems.forEach(t=>{const s=this.getListenerType(t.type);this.removeListener(s,t,this.handlerChange)}),this.clearErrors(),delete this.groupFields[i],this)}addRequiredGroup(e,i,t,s){if(typeof e!="string"&&!F(e))throw Error("Group selector is not valid. Please specify a string selector or a valid DOM element.");let l;if(typeof e=="string"?l=this.form.querySelector(e):l=e,!l)throw Error("Group selector not found! Please check the group selector.");const o=l.querySelectorAll("input"),a=Array.from(o).filter(n=>{const d=se(this.groupFields,ie(n));return d?d[1].elems.find(f=>f!==n):!0}),c=this.setKeyByFieldSelector(e);return this.groupFields[c]={rules:[{rule:w.Required,errorMessage:i,successMessage:s}],groupElem:l,elems:a,touched:!1,isValid:void 0,config:t},o.forEach(n=>{this.setListeners(n)}),this}getListenerType(e){switch(e){case"checkbox":case"select-one":case"file":case"radio":return"change";default:return"input"}}setListeners(e){const i=this.getListenerType(e.type);this.removeListener(i,e,this.handlerChange),this.addListener(i,e,this.handlerChange)}clearFieldLabel(e){var i,t;(i=this.errorLabels[e])==null||i.remove(),(t=this.successLabels[e])==null||t.remove()}clearFieldStyle(e){var i,t,s,l;const o=this.fields[e],a=((i=o.config)==null?void 0:i.errorFieldStyle)||this.globalConfig.errorFieldStyle;Object.keys(a).forEach(n=>{o.elem.style[n]=""});const c=((t=o.config)==null?void 0:t.successFieldStyle)||this.globalConfig.successFieldStyle||{};Object.keys(c).forEach(n=>{o.elem.style[n]=""}),o.elem.classList.remove(...m(((s=o.config)==null?void 0:s.errorFieldCssClass)||this.globalConfig.errorFieldCssClass),...m(((l=o.config)==null?void 0:l.successFieldCssClass)||this.globalConfig.successFieldCssClass))}clearErrors(){var e,i;Object.keys(this.errorLabels).forEach(t=>this.errorLabels[t].remove()),Object.keys(this.successLabels).forEach(t=>this.successLabels[t].remove());for(const t in this.fields)this.clearFieldStyle(t);for(const t in this.groupFields){const s=this.groupFields[t],l=((e=s.config)==null?void 0:e.errorFieldStyle)||this.globalConfig.errorFieldStyle;Object.keys(l).forEach(a=>{s.elems.forEach(c=>{var n;c.style[a]="",c.classList.remove(...m(((n=s.config)==null?void 0:n.errorFieldCssClass)||this.globalConfig.errorFieldCssClass))})});const o=((i=s.config)==null?void 0:i.successFieldStyle)||this.globalConfig.successFieldStyle||{};Object.keys(o).forEach(a=>{s.elems.forEach(c=>{var n;c.style[a]="",c.classList.remove(...m(((n=s.config)==null?void 0:n.successFieldCssClass)||this.globalConfig.successFieldCssClass))})})}this.tooltips=[]}isTooltip(){return!!this.globalConfig.tooltip}lockForm(){const e=this.form.querySelectorAll("input, textarea, button, select");for(let i=0,t=e.length;i<t;++i)e[i].setAttribute("data-just-validate-fallback-disabled",e[i].disabled?"true":"false"),e[i].setAttribute("disabled","disabled"),e[i].style.pointerEvents="none",e[i].style.webkitFilter="grayscale(100%)",e[i].style.filter="grayscale(100%)"}unlockForm(){const e=this.form.querySelectorAll("input, textarea, button, select");for(let i=0,t=e.length;i<t;++i)e[i].getAttribute("data-just-validate-fallback-disabled")!=="true"&&e[i].removeAttribute("disabled"),e[i].style.pointerEvents="",e[i].style.webkitFilter="",e[i].style.filter=""}renderTooltip(e,i,t){var s;const{top:l,left:o,width:a,height:c}=e.getBoundingClientRect(),n=i.getBoundingClientRect(),d=t||((s=this.globalConfig.tooltip)==null?void 0:s.position);switch(d){case"left":{i.style.top=`${l+c/2-n.height/2}px`,i.style.left=`${o-n.width-C}px`;break}case"top":{i.style.top=`${l-n.height-C}px`,i.style.left=`${o+a/2-n.width/2}px`;break}case"right":{i.style.top=`${l+c/2-n.height/2}px`,i.style.left=`${o+a+C}px`;break}case"bottom":{i.style.top=`${l+c+C}px`,i.style.left=`${o+a/2-n.width/2}px`;break}}return i.dataset.direction=d,{refresh:()=>{this.renderTooltip(e,i,t)}}}createErrorLabelElem(e,i,t){const s=document.createElement("div");s.innerHTML=i;const l=this.isTooltip()?t==null?void 0:t.errorLabelStyle:(t==null?void 0:t.errorLabelStyle)||this.globalConfig.errorLabelStyle;return Object.assign(s.style,l),s.classList.add(...m((t==null?void 0:t.errorLabelCssClass)||this.globalConfig.errorLabelCssClass),"just-validate-error-label"),this.isTooltip()&&(s.dataset.tooltip="true"),this.globalConfig.testingMode&&(s.dataset.testId=`error-label-${e}`),this.errorLabels[e]=s,s}createSuccessLabelElem(e,i,t){if(i===void 0)return null;const s=document.createElement("div");s.innerHTML=i;const l=(t==null?void 0:t.successLabelStyle)||this.globalConfig.successLabelStyle;return Object.assign(s.style,l),s.classList.add(...m((t==null?void 0:t.successLabelCssClass)||this.globalConfig.successLabelCssClass),"just-validate-success-label"),this.globalConfig.testingMode&&(s.dataset.testId=`success-label-${e}`),this.successLabels[e]=s,s}renderErrorsContainer(e,i){const t=i||this.globalConfig.errorsContainer;if(typeof t=="string"){const s=this.form.querySelector(t);if(s)return s.appendChild(e),!0;console.error(`Error container with ${t} selector not found. Errors will be rendered as usual`)}return t instanceof Element?(t.appendChild(e),!0):(t!==void 0&&console.error("Error container not found. It should be a string or existing Element. Errors will be rendered as usual"),!1)}renderGroupLabel(e,i,t,s){!s&&this.renderErrorsContainer(i,t)||e.appendChild(i)}renderFieldLabel(e,i,t,s){var l,o,a,c,n,d,f;if(!(!s&&this.renderErrorsContainer(i,t)))if(e.type==="checkbox"||e.type==="radio"){const b=document.querySelector(`label[for="${e.getAttribute("id")}"]`);((o=(l=e.parentElement)==null?void 0:l.tagName)==null?void 0:o.toLowerCase())==="label"?(c=(a=e.parentElement)==null?void 0:a.parentElement)==null||c.appendChild(i):b?(n=b.parentElement)==null||n.appendChild(i):(d=e.parentElement)==null||d.appendChild(i)}else(f=e.parentElement)==null||f.appendChild(i)}showLabels(e,i){Object.keys(e).forEach((t,s)=>{const l=e[t],o=this.getKeyByFieldSelector(t);if(!o||!this.fields[o]){console.error("Field not found. Check the field selector.");return}const a=this.fields[o];a.isValid=!i,this.clearFieldStyle(o),this.clearFieldLabel(o),this.renderFieldError(o,!1,l),s===0&&this.globalConfig.focusInvalidField&&setTimeout(()=>a.elem.focus(),0)})}showErrors(e){if(typeof e!="object")throw Error("[showErrors]: Errors should be an object with key: value format");this.showLabels(e,!0)}showSuccessLabels(e){if(typeof e!="object")throw Error("[showSuccessLabels]: Labels should be an object with key: value format");this.showLabels(e,!1)}renderFieldError(e,i=!1,t){var s,l,o,a,c,n;const d=this.fields[e];if(d.isValid===!1&&(this.isValid=!1),d.isValid===void 0||!i&&!this.isSubmitted&&!d.touched&&t===void 0)return;if(d.isValid){if(!d.asyncCheckPending){const b=this.createSuccessLabelElem(e,t!==void 0?t:d.successMessage,d.config);b&&this.renderFieldLabel(d.elem,b,(s=d.config)==null?void 0:s.errorsContainer,!0),d.elem.classList.add(...m(((l=d.config)==null?void 0:l.successFieldCssClass)||this.globalConfig.successFieldCssClass))}return}d.elem.classList.add(...m(((o=d.config)==null?void 0:o.errorFieldCssClass)||this.globalConfig.errorFieldCssClass));const f=this.createErrorLabelElem(e,t!==void 0?t:d.errorMessage,d.config);this.renderFieldLabel(d.elem,f,(a=d.config)==null?void 0:a.errorsContainer),this.isTooltip()&&this.tooltips.push(this.renderTooltip(d.elem,f,(n=(c=d.config)==null?void 0:c.tooltip)==null?void 0:n.position))}renderGroupError(e,i=!0){var t,s,l,o;const a=this.groupFields[e];if(a.isValid===!1&&(this.isValid=!1),a.isValid===void 0||!i&&!this.isSubmitted&&!a.touched)return;if(a.isValid){a.elems.forEach(d=>{var f,b;Object.assign(d.style,((f=a.config)==null?void 0:f.successFieldStyle)||this.globalConfig.successFieldStyle),d.classList.add(...m(((b=a.config)==null?void 0:b.successFieldCssClass)||this.globalConfig.successFieldCssClass))});const n=this.createSuccessLabelElem(e,a.successMessage,a.config);n&&this.renderGroupLabel(a.groupElem,n,(t=a.config)==null?void 0:t.errorsContainer,!0);return}this.isValid=!1,a.elems.forEach(n=>{var d,f;Object.assign(n.style,((d=a.config)==null?void 0:d.errorFieldStyle)||this.globalConfig.errorFieldStyle),n.classList.add(...m(((f=a.config)==null?void 0:f.errorFieldCssClass)||this.globalConfig.errorFieldCssClass))});const c=this.createErrorLabelElem(e,a.errorMessage,a.config);this.renderGroupLabel(a.groupElem,c,(s=a.config)==null?void 0:s.errorsContainer),this.isTooltip()&&this.tooltips.push(this.renderTooltip(a.groupElem,c,(o=(l=a.config)==null?void 0:l.tooltip)==null?void 0:o.position))}renderErrors(e=!1){if(!(!this.isSubmitted&&!e&&!this.globalConfig.validateBeforeSubmitting)){this.clearErrors(),this.isValid=!0;for(const i in this.groupFields)this.renderGroupError(i);for(const i in this.fields)this.renderFieldError(i)}}destroy(){this.eventListeners.forEach(e=>{this.removeListener(e.type,e.elem,e.func)}),Object.keys(this.customStyleTags).forEach(e=>{this.customStyleTags[e].remove()}),this.clearErrors(),this.globalConfig.lockForm&&this.unlockForm()}refresh(){this.destroy(),this.form?(this.initialize(this.form,this.globalConfig),Object.keys(this.fields).forEach(e=>{const i=this.getFieldSelectorByKey(e);i&&this.addField(i,[...this.fields[e].rules],this.fields[e].config)})):console.error("Cannot initialize the library! Form is not defined")}setCurrentLocale(e){if(typeof e!="string"&&e!==void 0){console.error("Current locale should be a string");return}this.currentLocale=e,this.isSubmitted&&this.validate()}onSuccess(e){return this.onSuccessCallback=e,this}onFail(e){return this.onFailCallback=e,this}onValidate(e){return this.onValidateCallback=e,this}}let E;const oe=new Uint8Array(16);function ae(){if(!E&&(E=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!E))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return E(oe)}const g=[];for(let r=0;r<256;++r)g.push((r+256).toString(16).slice(1));function ne(r,e=0){return g[r[e+0]]+g[r[e+1]]+g[r[e+2]]+g[r[e+3]]+"-"+g[r[e+4]]+g[r[e+5]]+"-"+g[r[e+6]]+g[r[e+7]]+"-"+g[r[e+8]]+g[r[e+9]]+"-"+g[r[e+10]]+g[r[e+11]]+g[r[e+12]]+g[r[e+13]]+g[r[e+14]]+g[r[e+15]]}const de=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),_={randomUUID:de};function ce(r,e,i){if(_.randomUUID&&!e&&!r)return _.randomUUID();r=r||{};const t=r.random||(r.rng||ae)();if(t[6]=t[6]&15|64,t[8]=t[8]&63|128,e){i=i||0;for(let s=0;s<16;++s)e[i+s]=t[s];return e}return ne(t)}function ue(r){r.addField("#name",[{rule:"required"},{rule:"minLength",value:3},{rule:"maxLength",value:20}],{errorFieldCssClass:["error-field"]}),r.addField("#email",[{rule:"required"},{rule:"email"}],{errorFieldCssClass:["error-field"]}),r.addField("#phone",[{rule:"required"},{rule:"required"},{rule:"number"},{rule:"minLength",value:10,errorMessage:"The phone number must be 10 characters"},{rule:"maxLength",value:10}],{errorFieldCssClass:["error-field"]}),r.addField("#dob",[{rule:"required"}],{errorFieldCssClass:["error-field"]}),r.addField("#role",[{rule:"required"}],{errorFieldCssClass:["error-field"]}),r.addRequiredGroup("#genderRadio")}function he(){let r;return localStorage.getItem("employeeDatas")===null?r=[]:r=JSON.parse(localStorage.getItem("employeeDatas")),r}function j(r){localStorage.setItem("employeeDatas",JSON.stringify(r))}function I(r,e){r.classList.add("hidden"),e.classList.remove("hidden")}const x=document.forms.EzEmregistration,V=document.querySelector("#registartion-area"),M=document.querySelector("#employees-details"),fe=document.querySelector("#nav"),L=document.querySelector("#emp-datas-list"),y=he();document.addEventListener("DOMContentLoaded",r=>{T(y)});const O=new le(x,{validateBeforeSubmitting:!0});ue(O);O.onSuccess(r=>{r.preventDefault();const e=new FormData(x);e.append("id",ce());const i=Object.fromEntries(e);console.log(i),y.push(i),j(y),I(V,M),x.reset,L.innerHTML="",T(y)});function T(r){if(r.length>0){const e=[];r.map((i,t)=>{const s=document.createElement("tr"),l=document.createElement("td"),o=document.createElement("th"),a=document.createElement("td"),c=document.createElement("td"),n=document.createElement("td"),d=document.createElement("td"),f=document.createElement("td"),b=document.createElement("span");l.classList.add("table-col-data"),l.textContent=t+1,o.classList.add("text-left","table-col-data"),o.textContent=i.name,a.classList.add("table-col-data"),a.textContent=i.role,c.classList.add("table-col-data"),c.textContent=i.gender,n.classList.add("table-col-data"),n.textContent=i.email,d.classList.add("table-col-data"),d.textContent=i.phone,f.classList.add("table-col-data"),b.classList.add("cursor-pointer"),b.setAttribute("title","delete"),b.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg"  width="24" height="24" viewBox="0 0 24 24">
               <path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2zM18 4h-2.5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1"/>
            </svg>`,b.addEventListener("click",$=>{be(i)}),f.append(b),s.append(l,o,a,c,n,d,f),e.push(s)}),e.forEach(i=>L.append(i))}else L.innerHTML="no Data found please add "}fe.addEventListener("click",r=>{const e=r.target;e.id==="regEmp"?I(M,V):e.id==="empDet"&&I(V,M)});function be(r){let e=y.filter(i=>i.id!==r.id);j(e),L.innerHTML="",T(e)}