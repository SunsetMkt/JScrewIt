function createEngineSelectionBox(){"use strict";function a(a,b){var c,d,e=a.length;if(e!==b.length)return!1;for(;e--;)if(c=a[e],d=b[e],c!==d)return!1;return!0}function b(a,b){var c=art("LABEL",art("INPUT",{style:{marginLeft:"0"},type:"checkbox"},b),a||null);return c}function c(){var a=document.createEvent("Event");a.initEvent("change",!0,!1),h.dispatchEvent(a)}function d(a,b){function c(a){e[a]=!0,JScrewIt.FEATURE_INFOS[a].includes.forEach(c)}var d,e={};return a.forEach(c),b.forEach(function(a){delete e[a]}),d=JScrewIt.commonFeaturesOf.call(null,Object.keys(e))}function e(){var a,b=[],c=["DOMWINDOW","SELF","WINDOW"];return Array.prototype.forEach.call(j,function(a){var d,e;a.checked&&(d=a.feature,b.push(d),e=a.notForWebWorker,Array.prototype.push.apply(c,e))}),a=JScrewIt.commonFeaturesOf.apply(null,b)||[],k.checked&&(a=d(a,c)),a}function f(){var a=art("DIV",{style:{display:"table"}}),c=b("Support web workers"),d=art("DIV",art("P",{style:{margin:".25em 0 .75em"}},"Select the engines you want your code to support."),a,art("HR"),c,art.on("change",g));h=art("FIELDSET",d),Object.defineProperty(h,"features",{configurable:!0,get:function(){return i}}),l.forEach(function(c){var d=art("DIV",{style:{display:"table-row"}},art("DIV",{style:{display:"table-cell",paddingRight:".5em"}},c.name));art(a,d),c.versions.forEach(function(a){var c=b(a.number,{checked:!0,feature:a.feature,notForWebWorker:a.notForWebWorker}),e=c.style;e.display="table-cell",e.paddingLeft=".5em",e.width="7.5em",art(d,c)})}),j=a.querySelectorAll("INPUT"),k=c.querySelector("INPUT"),i=e()}function g(b){var d=e();a(i,d)||(i=d,c()),b.stopPropagation()}var h,i,j,k,l=[{name:"Firefox",versions:[{feature:"FF30",number:"30"},{feature:"FF31",number:"31+"}]},{name:"Chrome",versions:[{feature:"CHROME35",number:"35–37"},{feature:"CHROME38",number:"38+"}]},{name:"Internet Explorer",versions:[{feature:"IE9",number:"9"},{feature:"IE10",number:"10"},{feature:"IE11",number:"11"}]},{name:"Safari",versions:[{feature:"SAFARI70",number:"7.0"},{feature:"SAFARI71",number:"7.1"},{feature:"SAFARI71",number:"8.0",notForWebWorker:["SELF_OBJECT"]}]},{name:"Opera",versions:[{feature:"CHROME35",number:"22–24"},{feature:"CHROME38",number:"25+"}]},{name:"Microsoft Edge",versions:[{feature:"EDGE"}]},{name:"Android Browser",versions:[{feature:"ANDRO400",number:"4.0.x"},{feature:"ANDRO412",number:"4.1.x–4.3.x"},{feature:"ANDRO442",number:"4.4.x"}]},{name:"Node.js",versions:[{feature:"NODE010",number:"0.10.x"},{feature:"NODE012",number:"0.12.x"}]}];return f(),h}function createRoll(){"use strict";function a(){var a=+new Date,b=a-i;e=g+b*f/250,(e-h)*f>=0&&(e=h,c()),d.height=1===e?"":k.scrollHeight*e+"px"}function b(b){if(b===e)c();else{var d=b>e?1:-1;d!==f&&(g=e,i=+new Date,f=d),h=b,j||(j=setInterval(a,0))}}function c(){clearInterval(j),j=null,f=0}var d,e,f,g,h,i,j,k=art("DIV");return Object.defineProperty(k,"rollTo",{configurable:!0,value:b,writable:!0}),d=k.style,d.height="0",d.overflowY="hidden",e=0,f=0,k}!function(){"use strict";function a(c){var d,e,f,g,h;for(d=c instanceof Node?c:"function"==typeof c?c.call(a):document.createElement(c),e=arguments.length,f=1;e>f;++f)g=arguments[f],g instanceof Node?d.appendChild(g):null!=g&&(h=typeof g,"object"===h?b(d,g):"function"===h?g.call(a,d):d.appendChild(document.createTextNode(g)));return d}function b(a,c){var d,e;for(d in c)e=c[d],d in a&&"object"==typeof e?b(a[d],e):a[d]=e}a.on=function(a,b,c){function d(d){d.addEventListener(a,b,c)}return d},window.art=a}(),function(){"use strict";function createWorker(){if("undefined"!=typeof Worker)try{worker=new Worker("html/worker.js")}catch(a){}}function encode(){var a,b=getOptions();try{a=JScrewIt.encode(inputArea.value,b)}catch(c){return resetOutput(),void updateError(c+"")}updateOutput(a)}function encodeAsync(){var a=getOptions(),b={input:inputArea.value,options:a};waitingForWorker?queuedData=b:(worker.postMessage(b),resetOutput(),setWaitingForWorker(!0)),inputArea.onkeyup=null}function getOptions(){var a=compMenu.options[compMenu.selectedIndex].value,b=a?JScrewIt.commonFeaturesOf(a):engineSelectionBox.features,c=wrapWithCallBox.checked?"call":"none",d={features:b,wrapWith:c};return d}function handleInputAreaKeyUp(a){"Tab"!==a.key&&encodeAsync()}function handleRun(){var value;try{value=eval(outputArea.value)}catch(error){alert(error)}"string"==typeof value&&alert('"'+value+'"')}function handleWorkerMessage(a){var b,c;queuedData?(worker.postMessage(queuedData),queuedData=null):(b=a.data,c=b.error,c?updateError(b.error):updateOutput(b.output),setWaitingForWorker(!1))}function init(){var a,b,c;inputArea.value=inputArea.defaultValue,wrapWithCallBox.checked=wrapWithCallBox.defaultChecked,outputArea.oninput=updateStats,runButton.onclick=handleRun,engineSelectionBox=art(createEngineSelectionBox(),{className:"engineSelectionBox"}),roll=art(createRoll(),art("DIV",{className:"frame"},art("SPAN","Custom Compatibility Selection"),engineSelectionBox)),art(controls,roll),worker?(encodeButton.parentNode.removeChild(encodeButton),a=encodeAsync,worker.onmessage=handleWorkerMessage,encodeAsync()):(encodeButton.onclick=encode,a=noEncode,outputArea.value=""),inputArea.oninput=a,wrapWithCallBox.onchange=a,compMenu.selectedIndex=compMenu.previousIndex=0,b=function(){var b,c=compMenu.selectedIndex;c!==compMenu.previousIndex&&(compMenu.previousIndex=c,a(),b=compMenu.options[compMenu.selectedIndex].value,roll.rollTo(b?0:1))},compMenu.onchange=b,compMenu.onkeydown=setTimeout.bind(null,b),engineSelectionBox.addEventListener("change",a),inputArea.createTextRange?(c=inputArea.createTextRange(),c.move("textedit",1),c.select()):inputArea.setSelectionRange(2147483647,2147483647),inputArea.focus()}function noEncode(){outputSet&&updateStats(!0)}function resetOutput(){outputSet=!1,outputArea.value="",stats.textContent="…"}function setWaitingForWorker(a){waitingForWorker=a,outputArea.disabled=a}function updateError(a){alert(a)}function updateOutput(a){outputArea.value=a,updateStats()}function updateStats(a){var b=outputArea.value.length,c=1===b?"1 char":b+" chars";a&&(worker&&(inputArea.onkeyup=handleInputAreaKeyUp),c+=" – <i>out of sync</i>"),outputSet=!0,stats.innerHTML=c}var engineSelectionBox,outputSet,queuedData,roll,waitingForWorker,worker;window.onload=init,createWorker()}();