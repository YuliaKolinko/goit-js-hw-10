import{f as y,i as f}from"./vendor-BZoxUzx5.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function d(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=d(e);fetch(e.href,t)}})();const c=document.querySelector("#datetime-picker"),s=document.querySelector("#start-button"),m=document.querySelector(".timer");s.disabled=!0;let l,a;const g={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(o){const r=o[0];r<=new Date?(f.error({title:"Error",message:"Please choose a date in the future"}),s.disabled=!0):(l=r,s.disabled=!1),clearInterval(a),m.textContent="00:00:00"}};y(c,g);s.addEventListener("click",()=>{l&&(s.disabled=!0,c.disabled=!0,a=setInterval(()=>{if(l-new Date<=0){clearInterval(a),m.textContent="00:00:00",f.success({title:"Done",message:"Countdown finished!"}),c.disabled=!1;return}}))});function u(o){const t=Math.floor(o/864e5),n=Math.floor(o%864e5/36e5),h=Math.floor(o%864e5%36e5/6e4),p=Math.floor(o%864e5%36e5%6e4/1e3);return{days:t,hours:n,minutes:h,seconds:p}}console.log(u(2e3));console.log(u(14e4));console.log(u(2414e4));
//# sourceMappingURL=1-timer-D9u08v_7.js.map
