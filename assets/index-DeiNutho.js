(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const a="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='31.88'%20height='32'%20aria-hidden='true'%20class='iconify%20iconify--logos'%20viewBox='0%200%20256%20257'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='-.828%25'%20x2='57.636%25'%20y1='7.652%25'%20y2='78.411%25'%3e%3cstop%20offset='0%25'%20stop-color='%2341D1FF'/%3e%3cstop%20offset='100%25'%20stop-color='%23BD34FE'/%3e%3c/linearGradient%3e%3clinearGradient%20id='b'%20x1='43.376%25'%20x2='50.316%25'%20y1='2.242%25'%20y2='89.03%25'%3e%3cstop%20offset='0%25'%20stop-color='%23FFEA83'/%3e%3cstop%20offset='8.333%25'%20stop-color='%23FFDD35'/%3e%3cstop%20offset='100%25'%20stop-color='%23FFA800'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20fill='url(%23a)'%20d='M255.153%2037.938%20134.897%20252.976c-2.483%204.44-8.862%204.466-11.382.048L.875%2037.958c-2.746-4.814%201.371-10.646%206.827-9.67l120.385%2021.517a6.5%206.5%200%200%200%202.322-.004l117.867-21.483c5.438-.991%209.574%204.796%206.877%209.62'/%3e%3cpath%20fill='url(%23b)'%20d='M185.432.063%2096.44%2017.501a3.27%203.27%200%200%200-2.634%203.014l-5.474%2092.456a3.268%203.268%200%200%200%203.997%203.378l24.777-5.718c2.318-.535%204.413%201.507%203.936%203.838l-7.361%2036.047c-.495%202.426%201.782%204.5%204.151%203.78l15.304-4.649c2.372-.72%204.652%201.36%204.15%203.788l-11.698%2056.621c-.732%203.542%203.979%205.473%205.943%202.437l1.313-2.028%2072.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505%204.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z'/%3e%3c/svg%3e",r="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='32'%20height='32'%20aria-hidden='true'%20class='iconify%20iconify--logos'%20viewBox='0%200%20256%20256'%3e%3cpath%20fill='%23F7DF1E'%20d='M0%200h256v256H0z'/%3e%3cpath%20d='m67.312%20213.932%2019.59-11.856c3.78%206.701%207.218%2012.371%2015.465%2012.371%207.905%200%2012.89-3.092%2012.89-15.12v-81.798h24.057v82.138c0%2024.917-14.606%2036.259-35.916%2036.259-19.245%200-30.416-9.967-36.087-21.996m85.07-2.576%2019.588-11.341c5.157%208.421%2011.859%2014.607%2023.715%2014.607%209.969%200%2016.325-4.984%2016.325-11.858%200-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257%200-18.044%2013.747-31.792%2035.228-31.792%2015.294%200%2026.292%205.328%2034.196%2019.247l-18.732%2012.03c-4.125-7.389-8.591-10.31-15.465-10.31-7.046%200-11.514%204.468-11.514%2010.31%200%207.217%204.468%2010.14%2014.778%2014.608l6.014%202.577c20.45%208.765%2031.963%2017.7%2031.963%2037.804%200%2021.654-17.012%2033.51-39.867%2033.51-22.339%200-36.774-10.654-43.819-24.574'/%3e%3c/svg%3e",l="/assets/ma-D4JYqHLf.svg",d="/assets/icon-sprite-BQjtcxnw.svg";function u(n){let e=0;const o=i=>{e=i,n.innerHTML=`count is ${e}`};n.addEventListener("click",()=>o(e+1)),o(0)}function p(n){const e=document.createElement("article"),o=document.createElement("h2"),i=document.createElement("p");return e.classList.add("card"),o.classList.add("h4","text-center"),o.innerHTML=n.title,i.innerHTML=n.text,e.appendChild(o),e.appendChild(i),e}function h(n,e){const o=document.createElement("a"),i=document.createElement("span"),t=document.createElementNS("http://www.w3.org/2000/svg","svg"),s=document.createElementNS("http://www.w3.org/2000/svg","use");let c=e==="codepen"?"io":"com";return i.classList.add("visually-hidden"),i.innerHTML=`Visit ${e}.${c}`,t.classList.add("icon"),t.setAttribute("aria-hidden",!0),s.setAttributeNS("http://www.w3.org/1999/xlink","href",`${n}#${e}`),o.href=`https://www.${e}.${c}`,o.target="_blank",o.rel="noopener noreferrer",t.appendChild(s),o.appendChild(i),o.appendChild(t),o}const f=[{title:"Sass",desc:'The template uses Sass for styling. It includes variables, mixins, and partials to speed up development and keep styles consistent. For font it uses <a href="https://utopia.fyi/" target="_blank">Utopia - Clamp Calculator</a>. The setup is easy to customize, making it simple to adapt the look to any project. For full description check the github repo, for the included reset file see the repo also on GitHub.'},{title:"Vite",desc:" This template is the customized version of the basic Vite preset. Vite provides lightning-fast hot module replacement (HMR) and near-instant startup. Vite also optimizes your code for production with minimal configuration. Supports many framework, including React, Vue, Svelte and many more."},{title:"Javascript",desc:" The template uses modern ES6 JavaScript without relying on a framework. This keeps the bundle light and the learning curve low for those who know vanilla JS. It gives full control over behavior without extra abstraction or dependencies.  "}],m=["youtube","x","vimeo","spotify","soundcloud","pinterest","patreon","linkedin","instagram","github","facebook","dribbble","codepen"];document.querySelector("#app").innerHTML=`
  <header class="flex-center full-bleed">
    <div class="container-header-logo">
      <a href="https://vite.dev" target="_blank">
        <img src="${a}" class="logo" alt="Vite logo" width="80" height="80"/>
      </a>
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
        <img src="${r}" class="logo" alt="JavaScript logo" width="80" height="80"/>
      </a>
    </div>

    <h1 class="center-text">Vite + Javascript</h1>
    <button  id="counter" type="button" class="btn"></button>

    <p class="center-text">
      Click on the Vite logo to learn more
    </p>
  </header>

  <main>
    <section class="cards">
    </section>
    <blockquote class="flex-center">
      <p>"There is always one more bug to fix ... Society may want to put its trust in computers, but it should know the facts: a bug, fix it. Another bug, fix it. The 'fix' itself may introduce a new bug. And so on."</p>
      <cite class="center-text">Ellen Ullman, <i>Close to the Machine: Technophilia and Its Discontents</i>.</cite>
    </blockquote>
  </main>

  <footer class="full-bleed">
    <section class="button-container flex-center">

      <button type="button" class="btn-dark">Button</button>      <div class="btn-light-wrapper">
        <button type="button" class="btn-light">Button</button>
        <button type="button" class="btn-ghost-dark">Button</button>
      </div>
      <button type="button" class="btn-ghost-light">
        <span class="icon-mask"></span>
        Button
      </button>

    </section>

    <div class="social-icons">
    </div>

    <p>
      Template made by
      <a href="https://github.com/mihaly-ale">
        <img src="${l}" class="dev-logo" width="32" height="32"/>
      </a>
    </p>


  </footer>
`;u(document.querySelector("#counter"));const g=document.querySelector(".cards");f.forEach(n=>{const e=p({title:n.title,text:n.desc});g.appendChild(e)});const b=document.querySelector(".social-icons");m.forEach(n=>{const e=h(d,n);b.appendChild(e)});
