(()=>{function l(e){for(var o=e+"=",c=document.cookie.split(";"),t=0;t<c.length;t++){for(var a=c[t];a.charAt(0)===" ";)a=a.substring(1);if(a.indexOf(o)===0)return a.substring(o.length,a.length)}return""}function s(e,o,c){var t=new Date;t.setTime(t.getTime()+c*24*60*60*1e3);var a="expires="+t.toUTCString();document.cookie=e+"="+o+";"+a+";path=/"}if(l("cookies-state")!=="accepted"){let e='<div id="cookie-bar" class="cookie-bar"><span class="cookie-message">We use cookies to provide our services and enhance your experience. By using this website, you agree with this.</span><button type="button" class="accept-cookies">OK</button></div>';document.body.insertAdjacentHTML("beforeend",e),document.querySelector("#cookie-bar .accept-cookies").addEventListener("click",()=>{s("cookies-state","accepted",365),document.querySelector("#cookie-bar").style.bottom="-100%"})}if(!l("sitevisitor")){let e=new Object,o=new Date;e.referer=document.referrer,e.request=location.pathname.substring(1),e.time=o.getFullYear()+"-"+(o.getMonth()+1)+"-"+o.getDate()+" "+o.getHours()+":"+o.getMinutes()+":"+o.getSeconds(),s("sitevisitor",btoa(JSON.stringify(e)),365)}function p(e){document.querySelector(e).innerHTML='<div class="loading mb-2" style="display: block;"></div>'}function b(e){e.forEach(function(o){o.addEventListener("click",function(c){c.preventDefault();let t=this.getAttribute("data-append");this.getAttribute("data-silent")||p(t);let a=new FormData;a.append("ajax","true"),window.fetch(this.href,{method:"POST",headers:{"X-Requested-With":"XMLHttpRequest"},body:a}).then(r=>{if(r.ok)return r.text();throw new Error(`${r.status} ${r.statusText}`)}).then(r=>{let n=document.querySelector(t);n.innerHTML=r,h(n)}).catch(r=>{console.log(r)})})})}function g(e){e.forEach(function(o){o.addEventListener("submit",function(c){c.preventDefault();let t=this.getAttribute("data-append");this.getAttribute("data-silent")||p(t);let a=new FormData(this);a.append("ajax","true"),fetch(this.getAttribute("action"),{method:"POST",headers:{"X-Requested-With":"XMLHttpRequest"},body:a}).then(r=>{if(r.ok)return r.text();throw new Error(`${r.status} ${r.statusText}`)}).then(r=>{let n=document.querySelector(t);n.innerHTML=r,h(n)}).catch(r=>{console.log(r)})})})}function h(e){b(e.querySelectorAll(".ajaxlink")),g(e.querySelectorAll(".ajaxform"))}h(document);var d=document.querySelector(".scroll-top");if(d){let e=function(){window.scrollY>100?d.classList.add("active"):d.classList.remove("active")};window.addEventListener("load",e),document.addEventListener("scroll",e),d.addEventListener("click",window.scrollTo({top:0,behavior:"smooth"}))}var w=document.querySelector(".search-bar-toggle");w.addEventListener("click",()=>{document.querySelector(".search-bar").classList.toggle("d-none")});function q(){document.body.classList.add("mobile-nav-active"),document.querySelector(".nav-menu").style.display="block",document.querySelector(".mobile-nav-show").style.display="none",document.querySelector(".mobile-nav-hide").style.display="block"}var S=document.querySelector(".mobile-nav-show");S.addEventListener("click",e=>{e.preventDefault(),q()});function L(){document.body.classList.remove("mobile-nav-active"),document.querySelector(".nav-menu").style.display="none",document.querySelector(".mobile-nav-show").style.display="block",document.querySelector(".mobile-nav-hide").style.display="none"}var k=document.querySelector(".mobile-nav-hide");k.addEventListener("click",e=>{e.preventDefault(),L()});var T=document.querySelector(".nav-categories > a");T.addEventListener("click",e=>{e.preventDefault(),document.body.classList.contains("mobile-nav-active")&&document.querySelector(".nav-categories ul").classList.toggle("d-flex")});function v(e){window.scrollTo({top:document.querySelector(e).offsetTop-document.querySelector("#header").offsetHeight,behavior:"smooth"})}document.querySelectorAll(".scrollto").forEach(e=>e.addEventListener("click",function(o){document.querySelector(this.hash)&&(o.preventDefault(),v(this.hash))}));window.addEventListener("load",()=>{window.location.hash=="#download"&&document.querySelector("#download-template")&&v("#download-template")});function y(){let e=document.querySelector("#loadmore");if(e&&e.offsetTop-window.scrollY-2200<0){let c=e.getAttribute("data-url");e.remove(),fetch(c,{method:"POST",headers:{"X-Requested-With":"XMLHttpRequest"}}).then(t=>{if(t.ok)return t.text();throw new Error(`${t.status} ${t.statusText}`)}).then(t=>{document.querySelector(".loadmore").insertAdjacentHTML("beforeend",t)}).catch(t=>{console.log(t)})}}y();window.addEventListener("scroll",y);var i=document.querySelector("#confirm-newsletter");if(i){document.querySelector("#confirm-newsletter .loading").classList.add("d-block");let e=new FormData;e.append("key",i.getAttribute("data-key")),e.append("confirm",i.getAttribute("data-confirm")),window.fetch(i.getAttribute("data-url"),{method:"POST",headers:{"X-Requested-With":"XMLHttpRequest"},body:e}).then(o=>{if(o.ok)return o.text();throw new Error(`${o.status} ${o.statusText}`)}).then(o=>{i.innerHTML=o}).catch(o=>{console.log(o)})}document.addEventListener("DOMContentLoaded",()=>{"use strict";document.querySelectorAll(".php-email-form").forEach(function(t){t.addEventListener("submit",function(a){a.preventDefault();let r=this,n=r.getAttribute("action"),f=r.getAttribute("data-recaptcha-site-key");if(!n){c(r,"The form action property is not set!");return}r.querySelector(".loading").classList.add("d-block"),r.querySelector(".error-message").classList.remove("d-block"),r.querySelector(".sent-message").classList.remove("d-block");let u=new FormData(r);f?typeof grecaptcha!="undefined"?grecaptcha.ready(function(){try{grecaptcha.execute(f,{action:"php_email_form_submit"}).then(m=>{u.set("recaptcha-response",m),o(r,n,u)})}catch(m){c(r,m)}}):c(r,"The reCaptcha javascript API url is not loaded!"):o(r,n,u)})});function o(t,a,r){fetch(a,{method:"POST",body:r,headers:{"X-Requested-With":"XMLHttpRequest"}}).then(n=>{if(n.ok)return n.text();throw new Error(`${n.status} ${n.statusText} ${n.url}`)}).then(n=>{if(t.querySelector(".loading").classList.remove("d-block"),n.trim()=="OK")t.querySelector(".sent-message").classList.add("d-block"),t.reset();else throw new Error(n||"Form submission failed and no error message returned from: "+a)}).catch(n=>{c(t,n)})}function c(t,a){t.querySelector(".loading").classList.remove("d-block"),t.querySelector(".error-message").innerHTML=a,t.querySelector(".error-message").classList.add("d-block")}});document.querySelectorAll(".members-nav a").forEach(function(e){e.addEventListener("click",function(o){document.querySelector(".members-nav a.active").classList.remove("active"),this.classList.add("active")})});})();
