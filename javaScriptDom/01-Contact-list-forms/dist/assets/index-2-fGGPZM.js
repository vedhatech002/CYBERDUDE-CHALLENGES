(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&d(a)}).observe(document,{childList:!0,subtree:!0});function c(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function d(e){if(e.ep)return;e.ep=!0;const n=c(e);fetch(e.href,n)}})();const m=document.querySelector("#add-contact"),i=document.querySelector("#modal"),p=document.querySelector("#modal-close-btn"),s=document.forms.inputForm,l=document.querySelector("#contact-list");let r;function u(){localStorage.getItem("contactList")==null?r=[]:(r=JSON.parse(localStorage.getItem("contactList")),r.forEach(t=>h(t)))}document.addEventListener("DOMContentLoaded",u);const g=t=>{t.preventDefault();const o=new FormData(s),c=Object.fromEntries(o);y(c),l.innerHTML="",u(),s.reset(),f()},L=t=>{t.formData.append("id",r.length+1)};s.addEventListener("submit",g);s.addEventListener("formdata",L);function y(t){r.push(t),localStorage.setItem("contactList",JSON.stringify(r))}function h(t){const o=document.createElement("tr");o.classList.add("hover:bg-orange-400","cursor-pointer"),o.setAttribute("data-id",t.id),o.innerHTML=`
    
    <td class="py-4">${t.id}</td>
    <td class="font-semibold text-gray-700">${t.firstname}</td>
    <td class="text-center">${t.streetAdr}</td>
    <td>
      <span class="bg-slate-200 px-2 py-1 rounded text-gray-700"
        >${t.label}</span
      >
    </td>
    <td>${t.email}
    </td>
    <td>${t.phone}</td>
  `,l.appendChild(o)}function b(){i.classList.remove("hidden")}function f(){i.classList.add("hidden")}m.addEventListener("click",b);p.addEventListener("click",f);
