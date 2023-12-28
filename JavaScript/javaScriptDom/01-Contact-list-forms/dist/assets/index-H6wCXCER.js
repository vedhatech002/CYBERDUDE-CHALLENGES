(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function r(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(s){if(s.ep)return;s.ep=!0;const l=r(s);fetch(s.href,l)}})();const O=document.querySelector("#add-contact"),N=document.querySelector("#modal"),w=document.querySelector("#modal-close-btn"),c=document.forms.inputForm,E=document.querySelector("#contact-list");let i;function S(){localStorage.getItem("contactList")==null?i=[]:(i=JSON.parse(localStorage.getItem("contactList")),i.forEach(e=>T(e)))}document.addEventListener("DOMContentLoaded",S);const M=e=>{e.preventDefault(),new FormData(c)},q=e=>{const t=e.formData;let r=Z(),a=B(),s=H(),l=J(),d=R(),$=j(),k=K(),D=U(),V=G();if(r&&a&&s&&l&&d&&$&&k&&D&&V){t.append("id",i.length+1);const F=Object.fromEntries(t);C(F),E.innerHTML="",S(),c.reset(),x()}};c.addEventListener("submit",M);c.addEventListener("formdata",q);function C(e){i.push(e),localStorage.setItem("contactList",JSON.stringify(i))}function T(e){const t=document.createElement("tr");t.classList.add("hover:bg-orange-400","cursor-pointer"),t.setAttribute("data-id",e.id),t.innerHTML=`
    
    <td class="py-4">${e.id}</td>
    <td class="font-semibold text-gray-700">${e.firstname}</td>
    <td class="text-center">${e.streetAdr}</td>
    <td>
      <span class="bg-slate-200 px-2 py-1 rounded text-gray-700"
        >${e.label}</span
      >
    </td>
    <td>${e.email}
    </td>
    <td>${e.phone}</td>
  `,E.appendChild(t)}function P(){N.classList.remove("hidden")}function x(){N.classList.add("hidden")}O.addEventListener("click",P);w.addEventListener("click",x);const o=e=>e!=="",A=(e,t,r)=>!(e<t||e>r),I=e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),L=e=>/^[A-Za-z]+$/.test(e),z=e=>/^\d{10}$/.test(e);function n(e,t){const r=e.nextElementSibling;r.innerText=" ",r.innerText=t}console.log(c.elements);const{firstname:u,lastname:m,email:f,phone:p,streetAdr:h,city:b,district:g,state:v,label:y}=c.elements,Z=()=>{let e=!1;const t=3,r=20,a=u.value.trim();return o(a)?A(a.length,t,r)?L(a)?(n(u,""),e=!0):n(u,"enter only alphabets"):n(u,`enter between ${t} and ${r} characters.`):n(u,"FirstName cannot be blank"),e},B=()=>{let e=!1;const t=m.value.trim();return o(t)?L(t)?(n(m,""),e=!0):n(m,"enter only alphabets"):n(m,"FirstName cannot be blank"),e},H=()=>{let e=!1;const t=f.value.trim();return o(t)?I(t)?(n(f,""),e=!0):n(f,"email is not valid"):n(f,"email cannot be blank"),e},J=()=>{let e=!1;const t=p.value.trim();return o(t)?z(t)?(n(p,""),e=!0):n(p,"phone num is not valid"):n(p,"phone num cannot be blank"),e},R=()=>{let e=!1;const t=5,r=30,a=h.value.trim();return o(a)?A(a.length,t,r)?(n(h,""),e=!0):n(h,`enter between ${t} and ${r} characters.`):n(h,"streetAdress cannot be blank"),e},j=()=>{let e=!1;const t=b.value.trim();return o(t)?L(t)?(n(b,""),e=!0):n(b,"enter only alphabets"):n(b,"streetAdress cannot be blank"),e},K=()=>{let e=!1;const t=g.value.trim();return o(t)?(n(g,""),e=!0):n(g,"pls select District"),e},U=()=>{let e=!1;const t=v.value.trim();return o(t)?(n(v,""),e=!0):n(v,"pls select State"),e},G=()=>{let e=!1;const t=y.value.trim();return o(t)?(n(y,""),e=!0):n(y,"pls select Label"),e};