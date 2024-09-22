(()=>{var k={calculateEventPosition:(c,t)=>{if(t==="viewport")return c.target.getBoundingClientRect();if(t==="body"){let e=function(r,i){var a=0;do isNaN(r?.["offset"+i])||(a+=r?.["offset"+i]);while(r=r?.offsetParent);return a};return{top:e(c.target,"Top"),left:e(c.target,"Left"),right:e(c.target,"Right"),bottom:e(c.target,"Bottom"),width:c.target.getBoundingClientRect().width,height:c.target.getBoundingClientRect().height}}},insertContextMenu:c=>{let t=!wp.data.select("getgenie").contextMenu().open;wp.data.dispatch("getgenie").setContextMenu({open:t,buttonEvent:c})},showSidebar:c=>{let t=wp.data.select("getgenie").sidebar().existingInputValue||"",e="WriteTemplatesScreen",n=c.slug;n==="list"&&(e="TemplateListScreen"),wp.data.dispatch("getgenie").setContextMenu({open:!1}),wp.data.dispatch("getgenie").setSidebar({open:!0,currentWritingMode:c?.mode,component:e,currentTemplate:n,existingInputValue:t.replace(/<br\s*[\/]?>/g,"")})}},f=k;var S=`${window.getGenie.config.assetsUrl}dist/admin/images/genie-dark.svg`,p=class{getUpperSiblingsWithInnerText=t=>{let e=[],n=t.previousSibling;for(;n;)n.nodeType===Node.ELEMENT_NODE&&!n.classList.contains("blog-title")&&e.unshift(n.innerText+" "),n=n.previousSibling;return e.join("")};triggerBtnHtml=(t,e)=>{let n=document.createElement("button"),r=window.getComputedStyle(e),i=parseInt(r.paddingBottom)||0,a=parseInt(r.marginBottom)||0,s=parseInt(r.borderBottomWidth)||0;return t?.includes("bricks")&&(n.style.top=`-${a+s+i+38}px`),(t?.includes("oxygen")||t?.includes("cpt"))&&(n.style.top=`-${a+s+i+25}px`),t?.includes("elementor")&&elementor.settings.editorPreferences.model.get("ui_theme")==="auto"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&n.classList.add("dark"),n.classList.add("getgenie-trigger-btn",t),n.innerHTML=`<img src=${S} alt="GetGenie" />`,n};checkVisibility=t=>{let e=window.getComputedStyle(t),n=e.display,r=e.visibility;return!(n==="none"||r==="hidden")};addGetGenieTriggerBtn=(t,e,n=!0)=>{if(!t)return;setTimeout(()=>{let i=jQuery(t).find(".mce-container");if(i?.length){if(this.checkVisibility(i[0])){i.parent().find(`.${e}`).length&&i.parent().find(`.${e}`).remove();let s=i.find("iframe");s[0].insertAdjacentElement("afterend",this.triggerBtnHtml(`${e}`,s[0]))}let a=i.parent().find("textarea");if(!a?.length||!this.checkVisibility(a[0]))return;a.parent().find(`.${e}`).length&&(a.parent().find(`.${e}`).remove(),a[0].insertAdjacentElement("afterend",this.triggerBtnHtml(`${e}`,a[0])))}},500);let r=n?jQuery(t).find("textarea"):jQuery(t);!r?.length||r.parent().find(`.${e}`).length||r.each((i,a)=>{!this.checkVisibility(a)||a.insertAdjacentElement("afterend",this.triggerBtnHtml(`${e}`,a))})};addGetGenieTriggerBtnForOxygen=t=>{if(!t)return;let e=jQuery(t).find(".textarea");if(!e.length&&jQuery(t).find("#wp-oxygen_vsb_tinymce-wrap").length){let n=jQuery(t).find("textarea.wp-editor-area"),r=jQuery(t).find(".mce-container");if(r?.length&&this.checkVisibility(r[0])){let i=r.find("iframe");r.parent().find(".getGenie-oxygen-iframe").length&&r.parent().find(".getGenie-oxygen-iframe").remove(),i[0].insertAdjacentElement("beforeBegin",this.triggerBtnHtml("getGenie-oxygen-iframe",i[0]))}n?.length&&this.checkVisibility(n[0])&&(n.parent().find(".getGenie-oxygen-iframe").length&&n.parent().find(".getGenie-oxygen-iframe").remove(),n[0].insertAdjacentElement("beforeBegin",this.triggerBtnHtml("getGenie-oxygen-iframe",n[0])))}!e?.length||e.parent().find(".getGenie-oxygen-textarea").length||e.each((n,r)=>{!this.checkVisibility(r)||r.insertAdjacentElement("afterend",this.triggerBtnHtml("getGenie-oxygen-textarea",r))})};addGetGenieTriggerBtnForFluentCRM=(t,e)=>{if(!t)return;if(t.querySelector(".getGenie-fluent-editorField")||t.appendChild(this.triggerBtnHtml(`${e}`,t)),t.className==="wp-editor-container"){let r=jQuery(t).find(".mce-container");if(r?.length&&this.checkVisibility(r[0])){let i=r.find("iframe");r.parent().find(".getGenie-fluent-iframe").length&&r.parent().find(".getGenie-fluent-iframe").remove(),i[0].insertAdjacentElement("beforeBegin",this.triggerBtnHtml("getGenie-fluent-iframe",i[0]))}}};insertTextToInputs=(t,e)=>{let n=t.replace(/<br\s*[\/]?>/g,`
`),r=new KeyboardEvent("keydown",{key:"Shift",bubbles:!0,cancelable:!0});if(wp.data.select("getgenie").sidebar().currentTemplate==="expandOutline")if(e?.tagName==="TEXTAREA"||e?.tagName==="DIV")e.value=n,r=new Event("input",{bubbles:!0,cancelable:!0});else{let a=t.replace(/(\<br[\s]*\/?\>[\s]*)+/g,"<br>").split("<br>");for(let s of a){let o=document.createElement("p");o.textContent=s,e.insertAdjacentElement("afterend",o),e=e.nextElementSibling}}else["INPUT","TEXTAREA"].includes(e?.tagName)?(e.value=n,r=new Event("input",{bubbles:!0,cancelable:!0})):e?.tagName==="DIV"?(e.innerText=n,r=new Event("input",{bubbles:!0,cancelable:!0})):e.innerText=n;e.dispatchEvent(r)};contextMenuCallback={continueWriting:(t,e,{beforeCaret:n,selectedText:r,afterCaret:i})=>{let a=this.getUpperSiblingsWithInnerText(e);a?.length&&(n=a+n);let s=t;r[r?.length-1]!==" "&&(s=" "+s),this.insertTextToInputs(n+r+s+i,e)},expandOutline:(t,e,{beforeCaret:n,selectedText:r,afterCaret:i})=>{let a;e?.tagName==="DIV"||e?.tagName==="TEXTAREA"?a=n+r+" "+t+`
`+i:a=t,this.insertTextToInputs(a,e)},rewrite:(t,e,{beforeCaret:n,afterCaret:r})=>{let i=n;n&&(i+=" "),i+=t+" "+r,this.insertTextToInputs(i,e)}};genieHeadClickHandler=(t,e,n=null)=>{jQuery(document).on("click",".getgenie-trigger-btn",function(r){r.preventDefault();let i=jQuery(this).siblings("textarea").length?jQuery(this).siblings("textarea"):jQuery(this).siblings("iframe");if(n=="oxygen"&&(i=jQuery(this).siblings(".textarea")?.find('[contenteditable="true"]'),!i?.length&&jQuery(this).parents(".oxygen-tinymce-dialog-wrap").length&&(i=jQuery(this).siblings("textarea").length?jQuery(this).siblings("textarea"):jQuery(this).siblings("iframe"))),n=="cpt"&&(i=jQuery(this).siblings("textarea,  input[type=text]").length?jQuery(this).siblings("textarea,  input[type=text]"):jQuery(this).siblings("iframe")),jQuery(this)?.[0]?.id==="genie-head-cpt"&&(i=jQuery(this).closest("#wp-content-editor-tools").siblings("#wp-content-editor-container")),n=="fluent-crm"&&(i=jQuery(this).children(".is-root-container")),i.length==0)return;let a=i[0]?.value;i=i?.[0];let s=(a||"").substring(0,i?.selectionStart),o=(a||"").substring(i?.selectionEnd),u,d,l=window.getSelection(),g=l.toString(),m=i.tagName.toLowerCase();if(i?.id==="wp-content-editor-container")if(jQuery(i).find("textarea").css("display")==="none"){let b=document.querySelector("#content_ifr").contentWindow,H=b.document.querySelector("body :first-child");l=b.document.getSelection(),g=l.toString(),l?.focusNode&&(i=l.focusNode.parentNode,a=i.innerText,u=Math.min(l?.focusOffset,l?.baseOffset),d=Math.max(l?.focusOffset,l?.baseOffset),s=a.substring(0,u),o=a.substring(d))}else i=jQuery(i).find("textarea")[0],a=i.value,g=l.toString(),s=(a||"").substring(0,i?.selectionStart),o=(a||"").substring(i?.selectionEnd);else if(m==="div"||m==="iframe"){if(m==="iframe"){let y=i.contentWindow,b=y.document;jQuery(b).on("click",function(w){w.preventDefault(),wp.data.select("getgenie").contextMenu()?.open&&wp.data.dispatch("getgenie").setContextMenu({open:!1})}),l=y.getSelection()}g=l?.toString(),l?.focusNode&&(i=l.focusNode.parentNode,a=i.innerText,u=Math.min(l?.focusOffset,l?.baseOffset),d=Math.max(l?.focusOffset,l?.baseOffset),s=a?.substring(0,u),o=a?.substring(d))}else m=="textarea"&&(a=i?.value,s=(a||"").substring(0,i?.selectionStart),o=(a||"").substring(i?.selectionEnd),g=l.toString());let C=f.calculateEventPosition(r,"viewport");f.insertContextMenu(C),l?.focusNode&&(wp.data.dispatch("getgenie").setSidebar({insertTextCallback:e,insertTextField:i,existingInputValue:g}),wp.data.dispatch("getgenie").setContextMenu({inputContent:{beforeCaret:s,selectedText:g,afterCaret:o},insertionField:i,contextMenuCallback:t}))})};genieHeadClickHandlerForWebview=(t,e)=>{setTimeout(()=>{let n=document.querySelector(".ql-editor");n&&(wp.data.dispatch("getgenie").setContextMenu({insertionField:n.firstChild,contextMenuCallback:t}),this.webviewScriptHandler.searchCallback(n.firstChild))},2e3),jQuery(document).on("click",".getgenie-trigger-btn",function(n){n.preventDefault();let r,i=f.calculateEventPosition(n,"viewport");f.insertContextMenu(i);let a,s,o=window.getSelection();o?.focusNode?r=o.focusNode?.nodeName==="#text"?o.focusNode.parentNode:o.focusNode:r=document.querySelector(".ql-editor").lastChild;let u=r.textContent,d="",l="",g="";o?.focusNode&&(d=o.toString(),a=Math.min(o?.focusOffset,o?.baseOffset),s=Math.max(o?.focusOffset,o?.baseOffset),l=u.substring(0,a),g=u.substring(s)),wp.data.dispatch("getgenie").setSidebar({insertTextCallback:e,insertTextField:r,existingInputValue:d}),wp.data.dispatch("getgenie").setContextMenu({inputContent:{beforeCaret:l,selectedText:d,afterCaret:g},insertionField:r,contextMenuCallback:t})})};webviewSearchCallback=(t,e)=>{wp.data.dispatch("getgenie").setSidebar({insertTextCallback:e,insertTextField:t,existingInputValue:""})};bricksScriptHandler={init:(t,e)=>{this.addGetGenieTriggerBtn(t,e)},clickHandler:()=>this.genieHeadClickHandler(this.contextMenuCallback,this.insertTextToInputs)};oxygenScriptHandler={init:t=>{this.addGetGenieTriggerBtnForOxygen(t)},clickHandler:()=>this.genieHeadClickHandler(this.contextMenuCallback,this.insertTextToInputs,"oxygen")};elementorScriptHandler={init:(t,e)=>{this.addGetGenieTriggerBtn(t,e)},clickHandler:()=>this.genieHeadClickHandler(this.contextMenuCallback,this.insertTextToInputs)};tmceBtnClickHandler=(t,e,n)=>{document.querySelector("#content-tmce")&&(document.querySelector("#content-tmce").addEventListener("click",function(){t(e,n)}),document.querySelector("#content-html").addEventListener("click",function(){t(e,n)}))};cptScriptHandler={init:(t,e,n=!0)=>{this.addGetGenieTriggerBtn(t,e,n),this.tmceBtnClickHandler(this.addGetGenieTriggerBtn,t,e)},clickHandler:()=>this.genieHeadClickHandler(this.contextMenuCallback,this.insertTextToInputs,"cpt")};webviewScriptHandler={clickHandler:()=>this.genieHeadClickHandlerForWebview(this.contextMenuCallback,this.insertTextToInputs),searchCallback:t=>this.webviewSearchCallback(t,this.insertTextToInputs)};fluentcrmScriptHandler={init:(t,e)=>{this.addGetGenieTriggerBtnForFluentCRM(t,e)},clickHandler:()=>this.genieHeadClickHandler(this.contextMenuCallback,this.insertTextToInputs,"fluent-crm")}};var h,x=new p;jQuery(document).ready(function(c){if(window.getGenie.config.isBlockEditor)return;document.getElementById("post-body")?(x.cptScriptHandler.init(document.getElementById("post-body"),"getGenie-cpt-textarea"),x.cptScriptHandler.init(document.getElementById("title"),"getGenie-cpt-textarea",!1)):x.cptScriptHandler.init(document,"getGenie-cpt-textarea"),x.cptScriptHandler.clickHandler();let t=document.getElementById("wp-content-editor-container");if(!t)return;let e=(a,s)=>{let o;return function(){let u=this,d=arguments;clearTimeout(o),o=setTimeout(()=>a.apply(u,d),s)}},n=!1,r=new MutationObserver(function(a){a.forEach(function(s){h=document.getElementById("content_ifr");let u=h?.contentWindow?.document;jQuery(u).on("click",function(d){d.preventDefault(),wp.data.select("getgenie").contextMenu()?.open&&wp.data.dispatch("getgenie").setContextMenu({open:!1})}),!(!h||n)&&(T(),wp.data.dispatch("getgenie").setContextMenu({open:!1}),n=!0,h.contentDocument.addEventListener("keydown",e(function(){T()},2e3)))})}),i={childList:!0,subtree:!0};r.observe(t,i)});function T(){wp.data.dispatch("getgenie").setSidebar({currentPostContent:h?.contentDocument?.body?.innerHTML||""})}})();
