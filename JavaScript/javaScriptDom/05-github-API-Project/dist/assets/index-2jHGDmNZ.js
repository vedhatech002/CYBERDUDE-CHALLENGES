(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const m=document.getElementById("main"),u=["esakki2104prsnl","vk2401","suriyamassmsd","riyaz1000","hema-venkat3","yrd369","mushkir","bearcin46","dineshdevelope","jeya-rosini","swethadsalvatore","mshajid","muthuakalya","vedhatech002","danielace1","sharif-22","gayathrihg","kishorekumar-kp","muthukumarimoorthi"];function p(n){var r=new XMLHttpRequest;r.onreadystatechange=function(){if(this.readyState==4&&this.status==200){let s=JSON.parse(this.response);return h(s),s}},r.open("GET",`https://api.github.com/users/${n}`,!0),r.send()}u.forEach(n=>p(n));function h(n){console.log(n);const r=document.createElement("section");r.className="bg-white shadow-md p-4 rounded-md";const s=document.createElement("div");s.className="flex justify-center";const o=document.createElement("img");o.className="rounded-full object-cover size-28 border-4 border-[#0dba4b]",o.src=n.avatar_url,o.alt=n.name,s.appendChild(o),r.appendChild(s);const e=document.createElement("div");e.className="flex flex-col items-center justify-center gap-4 mt-2";const t=document.createElement("div");t.className="flex flex-col items-center gap-1";const a=document.createElement("h3");a.className="text-lg font-semibold",a.textContent=n.name;const c=document.createElement("p");c.className="text-xs font-normal text-center",c.textContent=n.bio&&n.bio.length<80?n.bio:"Intern",t.appendChild(a),t.appendChild(c),e.appendChild(t);const i=document.createElement("div");i.className="flex items-center gap-3";const d=document.createElement("button");d.className="border-[#0dba4b] border-2 font-inter text-black text-sm font-semibold px-4 py-1 rounded-md ",d.innerHTML=`
 <a class="flex items-center gap-1" target="_blank" href="https://github.com/${n.login}">
 <span>
 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" id="github">
   <path d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z"></path>
 </svg>
</span>

  Profile
  </a>
`;const l=document.createElement("button");l.className="bg-[#0dba4b] border-[#0dba4b] border-2 font-inter text-white text-sm font-semibold px-5 py-1 rounded-md flex items-center gap-1",l.innerHTML=`
  <a class="flex items-center gap-1" target="_blank" href="https://github.com/${n.login}?tab=repositories">
  <span>
  <svg
  width="20"
  height="20"
  viewBox="0 0 92 114"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M76 67C61.1667 67 31.1 67 27.5 67C23 67 16 68 15 75.5"
    stroke="currentcolor"
    stroke-width="10"
  />
  <path
    d="M29 82C29 80.8954 29.8954 80 31 80H49C50.1046 80 51 80.8954 51 82V101.89C51 102.733 50.0197 103.198 49.3668 102.664L41.2665 96.0362C40.5298 95.4334 39.4703 95.4334 38.7335 96.0362L30.6332 102.664C29.9803 103.198 29 102.733 29 101.89V82Z"
    fill="currentcolor"
  />
  <path
    d="M62 87L75 87C75.5523 87 76 86.5523 76 86L76 17C76 16.4477 75.5523 16 75 16L28 16C18.5 16 15 23 15 28C15 43.8334 15 59.6667 15 75.5C15 78.6619 16.3997 82.6236 19.8312 85.1091"
    stroke="currentcolor"
    stroke-width="10"
    stroke-linecap="round"
  />
</svg>
  </span>
  repos
  </a>
`,i.appendChild(d),i.appendChild(l),e.appendChild(i),r.appendChild(e),m.append(r)}
