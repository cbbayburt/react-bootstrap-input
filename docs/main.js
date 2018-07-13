!function(e){function t(t){for(var n,l,i=t[0],s=t[1],u=t[2],p=0,f=[];p<i.length;p++)l=i[p],a[l]&&f.push(a[l][0]),a[l]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(c&&c(t);f.length;)f.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,i=1;i<r.length;i++){var s=r[i];0!==a[s]&&(n=!1)}n&&(o.splice(t--,1),e=l(l.s=r[0]))}return e}var n={},a={1:0},o=[];function l(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=e,l.c=n,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(r,n,function(t){return e[t]}.bind(null,n));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="./";var i=window.webpackJsonp=window.webpackJsonp||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var c=s;o.push([42,0]),r()}({24:function(e,t,r){},31:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=i(r(2)),l=i(r(4));function i(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={model:e.model,isValid:!0},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),a(t,[{key:"componentWillMount",value:function(){this.inputs={}}},{key:"componentWillReceiveProps",value:function(e){this.setState({model:e.model})}},{key:"registerInput",value:function(e){if(e.props&&e.props.name){this.inputs[e.props.name]=e;var t=this.state.model;t[e.props.name]=e.props.value,this.setState({model:t}),this.validate(e)}}},{key:"unregisterInput",value:function(e){if(e.props&&e.props.name){delete this.inputs[e.props.name];var t=this.state.model;delete t[e.props.name],this.setState({model:t})}}},{key:"renderChildren",value:function(e){var t=this;if("object"!==(void 0===e?"undefined":n(e))||null==e)return e;var r=o.default.Children.count(e);return r>1?o.default.Children.map(e,function(e){return t.renderChild(e)}):1===r?this.renderChild(Array.isArray(e)?e[0]:e):void 0}},{key:"renderChild",value:function(e){if("object"!==(void 0===e?"undefined":n(e))||null===e)return e;if(e.type&&null!==e.type.prototype&&e.type.prototype instanceof l.default){var t=e.props&&e.props.name;if(!t)throw new Error('Can not add input without "name" attribute');var r={registerInput:this.registerInput.bind(this),unregisterInput:this.unregisterInput.bind(this),validate:this.validate.bind(this),onFormChange:this.onFieldChange.bind(this),invalidHint:e.props.invalidHint||e.props.required&&e.props.label+" is required."};return r.value=this.state.model[t]||"",o.default.cloneElement(e,r)}return o.default.cloneElement(e,{},this.renderChildren(e.props&&e.props.children))}},{key:"validate",value:function(e,t){var r=this,n=t||e.props,a=n.name,o=[],l=!0;if(!n.disabled&&(this.state.model[a]||n.required))if(n.required&&!this.state.model[a])l=!1;else if(n.validators){(Array.isArray(n.validators)?n.validators:[n.validators]).forEach(function(e){o.push(Promise.resolve(e(""+(r.state.model[a]||""))))})}Promise.all(o).then(function(t){t.forEach(function(e){return l&=e}),e.setState({isValid:l},r.validateForm.bind(r))})}},{key:"validateForm",value:function(){var e=!0,t=this.inputs;Object.keys(t).forEach(function(r){t[r].state.isValid||(e=!1)}),this.setState({isValid:e}),this.props.onValidate&&this.props.onValidate(e)}},{key:"onFieldChange",value:function(e){var t=this.state.model;t[e.name]=e.value,this.setState({model:t}),this.props.onChange&&this.props.onChange(this.state.model,this.state.isValid)}},{key:"submit",value:function(e){e.preventDefault(),this.state.isValid&&this.props.onSubmit?this.props.onSubmit(this.state.model,e):this.props.onSubmitInvalid&&this.props.onSubmitInvalid(this.state.model,e)}},{key:"render",value:function(){return o.default.createElement("form",{onSubmit:this.submit.bind(this),className:this.props.className},o.default.createElement("div",{className:this.props.divClass},this.renderChildren(this.props.children)))}}]),t}();t.default=s},32:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Form=t.FormGroup=t.Label=t.Select=t.Check=t.Password=t.Text=void 0;var n=r(5),a=function(e){return e&&e.__esModule?e:{default:e}}(r(31));t.default={Text:n.Text,Password:n.Password,Check:n.Check,Select:n.Select,Label:n.Label,FormGroup:n.FormGroup,Form:a.default},t.Text=n.Text,t.Password=n.Password,t.Check=n.Check,t.Select=n.Select,t.Label=n.Label,t.FormGroup=n.FormGroup,t.Form=a.default},4:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=function(e){return e&&e.__esModule?e:{default:e}}(r(2)),o=r(5);var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={isValid:!0,showErrors:!1},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),n(t,[{key:"componentWillReceiveProps",value:function(e){e.value===this.props.value&&e.disabled===this.props.disabled&&e.required===this.props.required||(this.props.validate(this,e),this.setState({showErrors:!1}))}},{key:"componentWillMount",value:function(){this.props.registerInput(this)}},{key:"componentWillUnmount",value:function(){this.props.unregisterInput(this)}},{key:"setValue",value:function(e){var t=e.target.name,r=e.target.value;this.props.onFormChange({name:t,value:r}),this.props.onChange&&this.props.onChange(e)}},{key:"onBlur",value:function(){this.setState({showErrors:!0})}},{key:"render",value:function(){var e=this.state.showErrors&&!this.state.isValid,t=e&&this.props.invalidHint,r=[this.props.hint,t&&this.props.hint&&a.default.createElement("br",null),t];return a.default.createElement(o.FormGroup,{isError:e},this.props.label&&a.default.createElement(o.Label,{name:this.props.label,className:this.props.labelClass,required:this.props.required}),a.default.createElement("div",{className:this.props.divClass},a.default.createElement("input",{className:"form-control"+(this.props.inputClass?" "+this.props.inputClass:""),type:this.type,name:this.props.name,value:this.props.value,onChange:this.setValue.bind(this),disabled:this.props.disabled,onBlur:this.onBlur.bind(this),placeholder:this.props.placeholder}),r&&a.default.createElement(o.Hint,{text:r})))}}]),t}();t.default=l},42:function(e,t,r){"use strict";(function(e){var t=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),n=u(r(2)),a=u(r(40)),o=u(r(32)),l=r(30),i=u(r(26)),s=r(25);function u(e){return e&&e.__esModule?e:{default:e}}r(24),r(22);var c=function(e){function r(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,e));return t.state={model:{username:"try_me"}},t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(r,n.default.Component),t(r,[{key:"handleFormChange",value:function(e,t){this.setState({model:e})}},{key:"render",value:function(){return n.default.createElement("div",null,n.default.createElement("div",{className:"masthead clearfix"},n.default.createElement("div",{className:"inner"},n.default.createElement("h3",{className:"masthead-brand"},"react-bootstrap-input"),n.default.createElement("nav",null,n.default.createElement("ul",{className:"nav masthead-nav"},n.default.createElement("li",null,n.default.createElement("a",{href:"https://github.com/cbbayburt/react-bootstrap-input",target:"_blank"},n.default.createElement(l.FontAwesomeIcon,{icon:s.faGithub,size:"lg"})," View on GitHub")),n.default.createElement("li",null,n.default.createElement("a",{className:"github-button",href:"https://github.com/cbbayburt/react-bootstrap-input","data-icon":"octicon-star","data-show-count":"true","aria-label":"Star cbbayburt/react-bootstrap-input on GitHub"},"Star")))))),n.default.createElement("div",{className:"inner cover"},n.default.createElement("div",{className:"row"},n.default.createElement("div",{className:"col-md-6"},n.default.createElement("h1",{className:"cover-heading"},"Bootstrap form elements as React components"),n.default.createElement("br",null),n.default.createElement("p",{className:"lead"},"A collection of React components which render form elements, with data model handling and optional validation."),n.default.createElement("p",{className:"lead"},n.default.createElement("a",{href:"#",className:"btn btn-lg btn-default"},"Learn more"))),n.default.createElement("div",{className:"col-md-offset-1 col-md-5"},n.default.createElement(o.default.Form,{model:this.state.model,onChange:this.handleFormChange.bind(this)},n.default.createElement(o.default.Text,{key:"username",name:"username",label:"Username",required:!0}),n.default.createElement(o.default.Password,{key:"password",name:"password",label:"Password",required:!0})),n.default.createElement("p",null,n.default.createElement(l.FontAwesomeIcon,{icon:i.default})," ",n.default.createElement("em",null,"Start typing into the form to see the relevant code snippets."))))),n.default.createElement("div",{className:"mastfoot"},n.default.createElement("div",{className:"inner"},n.default.createElement("p",null,"Cover template for ",n.default.createElement("a",{href:"http://getbootstrap.com"},"Bootstrap"),", by ",n.default.createElement("a",{href:"https://twitter.com/mdo"},"@mdo"),"."))))}}]),r}();a.default.render(n.default.createElement(c,null),document.getElementById("root")),e(window).scroll(function(){e(".navbar").offset().top>50?e(".navbar-fixed-top").addClass("top-nav-collapse"):e(".navbar-fixed-top").removeClass("top-nav-collapse")})}).call(this,r(1))},5:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FormGroup=t.Hint=t.Label=t.Select=t.Check=t.Password=t.Text=void 0;var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=l(r(2)),o=l(r(4));function l(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.Text=function(e){function t(e){i(this,t);var r=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.type=r.props.type||"text",r}return u(t,o.default),t}(),t.Password=function(e){function t(e){i(this,t);var r=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.type="password",r}return u(t,o.default),t}(),t.Check=function(e){function t(e){return i(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return u(t,o.default),n(t,[{key:"setChecked",value:function(e){var t=e.target.name,r=e.target.checked;this.props.onFormChange({name:t,value:r}),this.props.onChange&&this.props.onChange(e)}},{key:"render",value:function(){var e=this.state.showErrors&&!this.state.isValid,t=e&&this.props.invalidHint,r=[this.props.hint,t&&this.props.hint&&a.default.createElement("br",null),t];return a.default.createElement(f,{isError:e},a.default.createElement("div",{className:this.props.divClass},a.default.createElement("div",{className:"checkbox"},a.default.createElement("label",null,a.default.createElement("input",{className:this.props.inputClass,name:this.props.name,type:"checkbox",checked:this.props.value,onChange:this.setChecked.bind(this),onBlur:this.onBlur.bind(this),disabled:this.props.disabled}),a.default.createElement("span",null,this.props.label))),r&&a.default.createElement(p,{text:r})))}}]),t}(),t.Select=function(e){function t(e){return i(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return u(t,o.default),n(t,[{key:"render",value:function(){var e=this.state.showErrors&&!this.state.isValid,t=e&&this.props.invalidHint,r=this.props.hint||t,n=[this.props.hint,t&&this.props.hint&&a.default.createElement("br",null),t];return a.default.createElement(f,{isError:e},this.props.label&&a.default.createElement(c,{name:this.props.label,className:this.props.labelClass,required:this.props.required}),a.default.createElement("div",{className:this.props.divClass},a.default.createElement("select",{className:"form-control"+(this.props.inputClass?" "+this.props.inputClass:""),name:this.props.name,disabled:this.props.disabled,value:this.props.value,onBlur:this.onBlur.bind(this),onChange:this.setValue.bind(this)},this.props.children),r&&a.default.createElement(p,{text:n})))}}]),t}();var c=t.Label=function(e){return a.default.createElement("label",{className:"control-label"+(e.className?" "+e.className:"")},e.name,e.required?a.default.createElement("span",{className:"required-form-field"}," *"):void 0)},p=t.Hint=function(e){return a.default.createElement("div",{className:"help-block"},e.text)},f=t.FormGroup=function(e){return a.default.createElement("div",{className:"form-group"+(e.isError?" has-error":"")},e.children)}}});