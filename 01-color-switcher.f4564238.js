!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");t.classList.add("active");var a=null;t.addEventListener("click",(function(e){if(t.classList.contains("active")){var c=document.querySelector("body");a=setInterval((function(){c.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),t.classList.remove("active")}})),e.addEventListener("click",(function(e){clearInterval(a),t.classList.add("active")}))}();
//# sourceMappingURL=01-color-switcher.f4564238.js.map
