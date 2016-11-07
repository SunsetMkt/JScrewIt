function createButton(e){"use strict";function t(){p.className="button",f("off")}function n(e){l()&&e.stopPropagation()}function r(e){13===e.keyCode&&(p.click(),e.preventDefault())}function a(e){32===e.keyCode&&(p.click(),e.preventDefault())}function o(e){1!==e.which||l()||s()||(p.setCapture(),p.className="active button",f("on"))}function i(e){e.target!==p&&s()&&t()}function u(e){!e.relatedTarget&&s()&&t()}function c(e){1===e.which&&s()&&(document.releaseCapture(),t())}function s(){return/\bactive\b/.test(p.className)}function l(){return!p.hasAttribute("tabindex")}function d(e){e.firstChild.setAttribute("unselectable","on")}function f(e){var t=art[e];art(document,t("mousemove",i),t("mouseout",u))}function b(){p.setAttribute("tabindex",0)}var p=art("SPAN",{className:"button"},art.on("click",n,!0),art.on("keydown",r),art.on("keyup",a),art.on("mouseup",c),art("SPAN",e),art("SPAN"));return b(),p.msMatchesSelector&&art(p,d,art.on("mousedown",o)),Object.defineProperty(p,"disabled",{configurable:!0,get:function(){return l()},set:function(e){e=!!e,e!==l()&&(e?(p.removeAttribute("tabindex"),s()&&(document.releaseCapture(),f("off")),p.blur()):b(),p.className="",p.className="button")}}),p}function createEngineSelectionBox(){"use strict";function e(e,t){return art("LABEL",art("INPUT",{style:{margin:"0 .25em 0 0"},type:"checkbox"},t),e||null)}function t(){var e=document.createEvent("Event");e.initEvent("input",!0,!1),c.dispatchEvent(e)}function n(){var e=u.checked;Array.prototype.forEach.call(l,function(t){t.checked=e})}function r(){setTimeout(function(){u.indeterminate||n()})}function a(){var t=art(e("Select/deselect all"),{style:{display:"inline-block",margin:"0 0 .5em"}},art.on("change",n),art.on(["keyup","mouseup"],r)),a=art("TABLE",{style:{borderSpacing:"0",width:"100%"}}),b=e("Support web workers");c=art("FIELDSET",art("DIV",art("P",{style:{margin:".25em 0 .75em"}},"Select the engines you want your code to support."),t,a,art("HR"),b,art.on("change",i)),{get featureObj(){return s}}),f.forEach(function(t,n){var r,o,i,u,c=t.versions,s=1&n?{className:"engineFieldEven"}:null,l=(c.length+2)/3^0,d=3*l;for(o=0;o<d;++o)i=c[o],o%3||(r=art("TR",s),o||art(r,art("TD",{rowSpan:l,style:{padding:"0 .5em 0 0"}},t.name)),art(a,r)),u=i?e(i.number,{checked:!0,feature:i.feature}):null,art(r,art("TD",{style:{padding:"0 0 0 .5em",width:"6em"}},u))}),u=t.querySelector("INPUT"),l=a.querySelectorAll("INPUT"),d=b.querySelector("INPUT"),o()}function o(){var e=JScrewIt.Feature,t=Array.prototype.filter.call(l,function(e){return e.checked}).map(function(t){return++n,e[t.feature]}),n=t.length;u.checked=n,u.indeterminate=n&&n<l.length,s=e.commonOf.apply(null,t)||e.DEFAULT,d.checked&&(s=s.restrict("web-worker",t))}function i(){o(),t()}var u,c,s,l,d,f=[{name:"Chrome",versions:[{feature:"CHROME52",number:"52+"}]},{name:"Edge",versions:[{feature:"EDGE"}]},{name:"Firefox",versions:[{feature:"FF31",number:"31+"}]},{name:"Internet Explorer",versions:[{feature:"IE9",number:"9"},{feature:"IE10",number:"10"},{feature:"IE11",number:"11"},{feature:"IE11_WIN10",number:"11 (W10)"}]},{name:"Safari",versions:[{feature:"SAFARI70",number:"7.0"},{feature:"SAFARI71",number:"7.1–8.0"},{feature:"SAFARI90",number:"9.0"},{feature:"SAFARI100",number:"10.0"}]},{name:"Opera",versions:[{feature:"CHROME52",number:"39+"}]},{name:"Android Browser",versions:[{feature:"ANDRO40",number:"4.0"},{feature:"ANDRO41",number:"4.1–4.3"},{feature:"ANDRO44",number:"4.4"}]},{name:"Node.js",versions:[{feature:"NODE010",number:"0.10"},{feature:"NODE012",number:"0.12"},{feature:"NODE40",number:"4+"}]}];return a(),c}function showModalBox(e,t){"use strict";function n(){var e=document.body;e.removeChild(s),art(e,art.off("keydown",o),art.off("focus",a,!0)),void 0!==t&&t()}function r(){c.focus()}function a(e){c.contains(e.target)||r()}function o(e){var t,r=e.keyCode;13!==r&&27!==r||(t=document.activeElement,!t.contains(c)&&t.contains(e.target)||(n(),e.preventDefault()))}var i=22,u=3,c=art("DIV",{style:{borderRadius:i+u+"px",display:"inline-block",maxWidth:"500px",outline:"none",width:"100%"},tabIndex:0},art("DIV",{id:"modal-box",style:{background:"whitesmoke",border:"10px solid blue",borderRadius:i+"px",margin:u+"px"}},art("DIV",{style:{margin:"1.5em 1.5em .25em",overflow:"hidden"}},e,art("DIV",{style:{margin:"1.25em 0"}},art(createButton("OK"),{style:{maxWidth:"5em",width:"100%"}},art.on("click",n)))))),s=art("DIV",{style:{background:"rgba(0, 0, 0, .25)",overflow:"auto",position:"fixed",textAlign:"center",left:"0",top:"0",bottom:"0",width:"100%"}},art("DIV",{style:{display:"table",tableLayout:"fixed",width:"100%",height:"100%"}},art("DIV",{style:{display:"table-cell",verticalAlign:"middle"}},c)));art(document.body,s,art.on("focus",a,!0),art.on("keydown",o)),setTimeout(r)}function createRoll(){"use strict";function e(){var e=art("DIV");i=e.style,i.display="none",a=art("DIV",e),a.container=e,Object.defineProperty(a,"rollTo",{configurable:!0,value:n,writable:!0}),o=a.style,o.height="0",o.overflowY="hidden"}function t(){f=s+(+new Date-l)*d/250,(f-u)*d>=0&&(f=u,r()),o.height=1===f?"":a.scrollHeight*f+"px",i.display=0===f?"none":""}function n(e){if(e===f)r();else{var n=e>f?1:-1;n!==d&&(s=f,l=+new Date,d=n),u=e,c||(c=setInterval(t,0))}}function r(){clearInterval(c),c=null,d=0}var a,o,i,u,c,s,l,d=0,f=0;return e(),a}!function(){"use strict";function e(t,n){Object.keys(n).forEach(function(r){var a,o=Object.getOwnPropertyDescriptor(n,r);"value"in o?(a=o.value,r in t&&"object"==typeof a?e(t[r],a):t[r]=a):Object.defineProperty(t,r,o)})}function t(e,t,n,r){function a(a){function o(e){a[r](e,t,n)}Array.isArray(e)?e.forEach(o):o(e)}return a}function n(e){if(!o){var t=art("STYLE");art(document.head,t),o=t.sheet}o.insertRule(e,o.cssRules.length)}function r(e,t){return Object.keys(e).map(function(n){return t(n,e[n])})}function a(e,t){return e+"{"+r(t,function(e,t){return e+":"+t}).join(";")+"}"}var o;window.art=function(t){var n,r,a,o,i;for(n=t instanceof Node?t:"function"==typeof t?t.call(art):document.createElement(t),r=arguments.length,a=0;++a<r;)o=arguments[a],o instanceof Node?n.appendChild(o):null!=o&&(i=typeof o,"object"===i?e(n,o):"function"===i?o.call(art,n):n.appendChild(document.createTextNode(o)));return n},art.off=function(e,n,r){return t(e,n,r,"removeEventListener")},art.on=function(e,n,r){return t(e,n,r,"addEventListener")},art.css=function(e,t){n(a(e,t))}}(),art.css(".button",{background:"#e0e0e0",color:"#212121",cursor:"default",display:"inline-block",outline:"none",position:"relative"}),art.css(".button, .button>:last-child",{"border-radius":".1em"}),art.css(".button.active, .button[tabindex]:active",{background:"#29b3e5"}),art.css(".button.active>:first-child, .button[tabindex]:active>:first-child",{left:".1em",top:".1em"}),art.css(".button.active>:last-child, .button[tabindex]:active>:last-child",{"border-color":"#0088b6"}),art.css(".button:focus",{"box-shadow":"0 0 2px 2px rgba(0, 127, 255, .75)"}),art.css(".button:not([tabindex])",{background:"#e9e9e9",color:"#707070"}),art.css(".button:not([tabindex])>:last-child",{"border-color":"#bababa"}),art.css(".button>:first-child",{display:"inline-block",margin:".15em .5em",position:"relative","user-select":"none","-moz-user-select":"none","-ms-user-select":"none","-webkit-user-select":"none"}),art.css(".button>:last-child",{"border-color":"#707070","border-style":"solid","border-width":"1px",display:"inline-block",position:"absolute",left:"0",right:"0",top:"0",bottom:"0"}),art.css(".button[tabindex]:hover:not(.active):not(:active)",{background:"#a3f4ff"}),art.css(".button[tabindex]:hover:not(.active):not(:active)>:last-child",{"border-color":"#189fdd"}),art.css("#modal-box p:first-child",{"margin-top":"0"}),art.css("#modal-box p:last-child",{"margin-bottom":"0"}),art.css(":focus>#modal-box",{"box-shadow":"0 0 3px 3px rgba(255, 255, 255, .75)"}),function(){"use strict";function e(){if("undefined"!=typeof Worker)try{N=new Worker("html/worker.js")}catch(e){}}function t(){var e,t=i();try{e=JScrewIt.encode(inputArea.value,t)}catch(e){return m(),void y(e+"")}h(e)}function n(){var e=i(),t={input:inputArea.value,options:e};D?I=t:(N.postMessage(t),m(),v(!0)),inputArea.onkeyup=null}function r(e){var t;if("string"==typeof e)t='"'+e+'"';else if(0===e&&1/e<0)t="-0";else if(Array.isArray(e))try{t=e.length?"[…]":"[]"}catch(e){}else try{t=String(e)}catch(e){}return t}function a(e){var t;if(Array.isArray(e))try{t="["+e.map(r).join(", ")+"]"}catch(e){}else t=r(e);return t}function o(e){var t,n,r;switch(typeof e){case"function":t="a function";break;case"object":switch(n=/(\w+).$/.exec(Object.prototype.toString.call(e)),r=n?n[1]:void 0){case"Array":switch(e.length){case 0:t="an empty array";break;case 1:t="a one element array";break;default:t="an array"}break;case"Date":t="a date";break;case"RegExp":t="a regular expression";break;default:t="an object"}}return t}function i(){return{features:A.canonicalNames}}function u(){var e,t,n=compMenu.selectedIndex;n!==compMenu.previousIndex&&(compMenu.previousIndex=n,e=compMenu.options[n].value,t=e?T[e]:x.featureObj,!w&&T.areEqual(t,A)||(A=t,this()),S.rollTo(+!e))}function c(e){9!==e.keyCode&&n()}function s(){k.disabled=!1;var e=this.result;null!=e&&(inputArea.value=e),inputArea.oninput(),inputArea.disabled=!1}function l(){var e,t,n,r,i,u;try{t=(0,eval)(outputArea.value)}catch(t){e=art("P",String(t))}void 0!==t&&(n=a(t),r=o(t),n?(i=r?"Evaluation result is "+r+":":"Evaluation result is",e=art("DIV",art("P",i),art("P",{style:{overflowX:"auto"}},art("DIV",{style:{display:"inline-block",textAlign:"left",whiteSpace:"pre"}},n)))):e=art("DIV",art("P","Evaluation result is "+r+"."))),null!=e&&(u=this,showModalBox(e,function(){u.focus()}))}function d(e){var t,n;I?(N.postMessage(I),I=null):(t=e.data,n=t.error,n?y(t.error):h(t.output),v(!1))}function f(){var e,r,a,o,i,c;document.querySelector("body>*>div").style.display="block",inputArea.value=inputArea.defaultValue,outputArea.oninput=g,art(stats.parentNode,art(createButton("Run this"),{style:{bottom:"0",fontSize:"10pt",position:"absolute",right:"0"}},art.on("click",l))),function(){var e,t=T.COMPACT;T.AUTO.includes(t)?(A=t,e=1):(A=T.DEFAULT,e=0),compMenu.selectedIndex=compMenu.previousIndex=e}(),N?(e=n,N.onmessage=d,n()):(r=art(createButton("Encode"),art.on("click",t)),art(controls,r),e=p,outputArea.value=""),"undefined"!=typeof File&&(a=art("INPUT",{accept:".js",style:{display:"none"},type:"file"},art.on("change",b)),o=HTMLElement.prototype.click.bind(a),k=art(createButton("Load file…"),art.on("click",o)),art(controls,k,a)),inputArea.oninput=e,i=u.bind(e),compMenu.onchange=i,compMenu.onkeydown=setTimeout.bind(null,i),x=art(createEngineSelectionBox(),{className:"engineSelectionBox"},art.on("input",i)),S=createRoll(),art(S.container,art("DIV",{className:"frame"},art("SPAN","Custom Compatibility Selection"),x)),art(controls.parentNode,S),inputArea.createTextRange?(c=inputArea.createTextRange(),c.move("textedit",1),c.select()):inputArea.setSelectionRange(2147483647,2147483647),inputArea.focus()}function b(){var e,t=this.files[0];t&&(inputArea.disabled=!0,inputArea.value="",k.disabled=!0,e=new FileReader,e.addEventListener("loadend",s),e.readAsText(t))}function p(){E&&g(!0)}function m(){E=!1,outputArea.value="",stats.textContent="…"}function v(e){D=e,outputArea.disabled=e}function y(e){showModalBox(art("P",String(e)))}function h(e){outputArea.value=e,g()}function g(e){var t=outputArea.value.length,n=1===t?"1 char":t+" chars";w=!!e,e&&(N&&(inputArea.onkeyup=c),n+=" – <i>out of sync</i>"),E=!0,stats.innerHTML=n}var A,x,k,w,E,I,S,D,N,T=JScrewIt.Feature;document.addEventListener("DOMContentLoaded",f),e()}();