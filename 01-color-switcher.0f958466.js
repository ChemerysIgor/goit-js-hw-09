const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");t.classList.add("active");let a=null;t.addEventListener("click",(function(e){if(t.classList.contains("active")){const e=document.querySelector("body"),c=()=>`#${Math.floor(16777215*Math.random()).toString(16)}`;a=setInterval((()=>{e.style.backgroundColor=c()}),1e3),t.classList.remove("active")}})),e.addEventListener("click",(function(e){clearInterval(a),t.classList.add("active")}));
//# sourceMappingURL=01-color-switcher.0f958466.js.map
