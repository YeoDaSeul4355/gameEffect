(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))u(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&u(l)}).observe(document,{childList:!0,subtree:!0});function p(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function u(s){if(s.ep)return;s.ep=!0;const o=p(s);fetch(s.href,o)}})();function V(){const i=()=>{let u=navigator.userAgent.toLowerCase(),s=screen.width,o=screen.height,l=document.querySelector(".info");u.indexOf("windows")>=0?l.innerHTML="현재 윈도우를 사용하고 있으며, 화면 크기는 "+s+"x"+o+" 입니다.":u.indexOf("macintosh")>=0?l.innerHTML="현재 맥을 사용하고 있으며, 화면 크기는 "+s+"x"+o+" 입니다.":u.indexOf("iphone")>=0?l.innerHTML="현재 아이폰을 사용하고 있으며, 화면 크기는 "+s+"x"+o+" 입니다.":u.indexOf("android")>=0&&(l.innerHTML="현재 안드로이드 폰을 사용하고 있으며, 화면 크기는 "+s+"x"+o+" 입니다.")};i();const t=()=>{$("#header").removeClass("red blue green yellow")};$(".icon1").draggable({containment:".icon__box",scroll:!1,start:function(){$(".cursor img").attr("src","images/game_mouse01.png")},drag:function(){$(".info").html("지금은 <span style='color:hotpink'>MUSIC</span> 폴더를 드래그하고 있습니다."),$("#header").addClass("red")},stop:function(){$(".info").html("드래그가 끝났습니다."),setTimeout(i,3e3),setTimeout(t,3e3)}}),$(".icon2").draggable({containment:".icon__box",scroll:!1,start:function(){$(".cursor img").attr("src","images/game_mouse02.png")},drag:function(){$(".info").html("지금은 <span style='color:purple'>TETRIS</span> 폴더를 드래그하고 있습니다."),$("#header").addClass("blue")},stop:function(){$(".info").html("드래그가 끝났습니다."),setTimeout(i,3e3),setTimeout(t,3e3)}}),$(".icon3").draggable({containment:".icon__box",scroll:!1,start:function(){$(".cursor img").attr("src","images/game_mouse03.png")},drag:function(){$(".info").html("지금은 <span style='color:green'>초록색</span> 폴더를 드래그하고 있습니다."),$("#header").addClass("green")},stop:function(){$(".info").html("드래그가 끝났습니다."),setTimeout(i,3e3),setTimeout(t,3e3)}}),$(".icon4").draggable({containment:".icon__box",scroll:!1,start:function(){$(".cursor img").attr("src","images/game_mouse04.png")},drag:function(){$(".info").html("지금은 <span style='color:yellow'>노란색</span> 폴더를 드래그하고 있습니다."),$("#header").addClass("yellow")},stop:function(){$(".info").html("드래그가 끝났습니다."),setTimeout(i,3e3),setTimeout(t,3e3)}}),$(".music__wrap").draggable({scroll:!1,start:function(){$(".cursor img").attr("src","images/game_mouse04.png")},drag:function(){$(".info").html("지금은 <span style='color:yellow'>노란색</span> 폴더를 드래그하고 있습니다."),$("#header").addClass("yellow")},stop:function(){$(".info").html("드래그가 끝났습니다."),setTimeout(i,3e3),setTimeout(t,3e3)}}),$(".icon1").on("click",function(){$(".music").removeClass("hide")}),$(".icon2").on("click",function(){$(".music").addClass("hide")}),$(".icon3").on("click",function(){$(".music").addClass("hide")}),$(".icon4").on("click",function(){$(".music").addClass("hide")}),$("#header").on("click",function(){$(".music").addClass("hide")}),window.onload=function(){window.addEventListener("mousemove",u=>{gsap.to(".cursor",{duration:0,left:u.pageX-5,top:u.pageY-10})})};function p(){const u=document.querySelector(".time"),s=new Date,o=s.getFullYear(),l=s.getMonth()+1,C=s.getDate(),v=s.getHours(),b=s.getMinutes();s.getSeconds(),u.innerHTML=o+"년 "+l+"월 "+C+"일 "+v+"시"+b+"분"}p(),setInterval(p,1e3)}function X(){const i=[{name:"1. 2 Baddies",artist:"NCT 127",img:"music__view01",audio:"music_audio01"},{name:"2. Child",artist:"MARK",img:"music__view02",audio:"music_audio02"},{name:"3. Roller Coaster",artist:"Red Velvet",img:"music__view03",audio:"music_audio03"},{name:"4. Love Song",artist:"NCT 127",img:"music__view04",audio:"music_audio04"},{name:"5. I'll Make You Cry",artist:"aespa",img:"music__view05",audio:"music_audio05"},{name:"6. Obbsession",artist:"EXO",img:"music__view06",audio:"music_audio06"},{name:"7. Privacy",artist:"Baekhyun",img:"music__view07",audio:"music_audio07"},{name:"8. Glitch Mode",artist:"NCT DREAM",img:"music__view08",audio:"music_audio08"},{name:"9. Ditto",artist:"New Jeans",img:"music__view09",audio:"music_audio09"},{name:"10. kitsch",artist:"IVE",img:"music__view10",audio:"music_audio10"}],t=document.querySelector(".music__wrap"),p=t.querySelector(".music__control .title h3"),u=t.querySelector(".music__control .title p"),s=t.querySelector(".music__view .image img"),o=t.querySelector("#main-audio"),l=t.querySelector("#control-play"),C=t.querySelector("#control-prev"),v=t.querySelector("#control-next"),b=t.querySelector(".progress"),E=t.querySelector(".progress .bar"),O=t.querySelector(".progress .timer .current"),N=t.querySelector(".progress .timer .duration"),d=t.querySelector("#control-repeat"),k=t.querySelector("#control-list"),T=t.querySelector(".music__list"),f=t.querySelector(".music__list ul"),L=t.querySelector(".music__list h3 .close");let r=1;document.querySelector(".icon1").addEventListener("click",()=>{document.querySelector(".music__inner").classList.remove("hide")}),document.querySelector(".music__close").addEventListener("click",()=>{document.querySelector(".music__inner").classList.add("hide"),M()});const q=e=>{p.innerText=i[e-1].name,u.innerText=i[e-1].artist,s.src=`assets/images/${i[e-1].img}.png`,s.alt=i[e-1].name,o.src=`assets/audio/${i[e-1].audio}.mp3`},w=()=>{t.classList.add("paused"),l.setAttribute("title","정지"),l.setAttribute("class","stop"),o.play()},M=()=>{t.classList.remove("paused"),l.setAttribute("title","재생"),l.setAttribute("class","play"),o.pause()},P=()=>{r==1?r=i.length:r--,q(r),w(),h()},B=()=>{r==i.length?r=1:r++,q(r),w(),h()};o.addEventListener("timeupdate",e=>{const c=e.target.currentTime,g=e.target.duration;let _=c/g*100;E.style.width=`${_}%`,o.addEventListener("loadeddata",()=>{let n=o.duration,a=Math.floor(n/60),m=Math.floor(n%60);m<10&&(m=`0${m}`),N.innerText=`${a}:${m}`});let A=Math.floor(c/60),S=Math.floor(c%60);S<10&&(S=`0${S}`),O.innerText=`${A}:${S}`}),b.addEventListener("click",e=>{let c=b.clientWidth,g=e.offsetX,_=o.duration;o.currentTime=g/c*_}),d.addEventListener("click",()=>{switch(d.getAttribute("class")){case"repeat":d.setAttribute("class","repeat-one"),d.setAttribute("title","한곡 반복");break;case"repeat-one":d.setAttribute("class","shuffle"),d.setAttribute("title","랜덤 반복");break;case"shuffle":d.setAttribute("class","repeat"),d.setAttribute("title","전체 반복");break}}),o.addEventListener("ended",()=>{switch(d.getAttribute("class")){case"repeat":B();break;case"repeat-one":w();break;case"shuffle":let c=Math.floor(Math.random()*i.length+1);do c=Math.floor(Math.random()*i.length+1);while(r==c);r=c,q(c),w();break}h()}),l.addEventListener("click",()=>{t.classList.contains("paused")?M():w()}),C.addEventListener("click",()=>{P()}),v.addEventListener("click",()=>{B()}),k.addEventListener("click",()=>{T.classList.add("show")}),L.addEventListener("click",()=>{T.classList.remove("show")});for(let e=0;e<i.length;e++){let c=`
        <li data-index="${e+1}">
            <img class="img" src="images/${i[e].img}.png" alt="${i[e].name}">
            <span class="title">
                <strong>${i[e].name}</strong>
                <em>${i[e].artist}</em>
                <audio class="${i[e].audio}" src="audio/${i[e].audio}.mp3"></audio>
            </span>
            <span class="audio-duration" id="${i[e].audio}">3:04</span>
        </li>
    `;f.insertAdjacentHTML("beforeend",c);let g=f.querySelector(`#${i[e].audio}`),_=f.querySelector(`.${i[e].audio}`);_.addEventListener("loadeddata",()=>{let A=_.duration,S=Math.floor(A/60),n=Math.floor(A%60);n<10&&(n=`0${n}`),g.innerText=`${S}:${n}`,g.setAttribute("data-duration",`${S}:${n}`)})}function h(){const e=f.querySelectorAll("li");for(let c=0;c<e.length;c++){let g=e[c].querySelector(".audio-duration");if(e[c].addEventListener("click",function(){R(this)}),e[c].classList.contains("playing")){e[c].classList.remove("playing");let _=g.getAttribute("data-duration");g.innerText=_}e[c].getAttribute("data-index")==r&&(e[c].classList.add("playing"),g.innerText="재생중")}}h();function R(e){r=e.getAttribute("data-index"),q(r),w(),h()}window.addEventListener("load",()=>{q(r),h()})}function j(){const i=document.querySelector(".tetris__wrap"),t=i.querySelector(".tetris__play .view ul"),p=i.querySelector(".tetris__start"),u=i.querySelector(".tetris__close"),s=i.querySelector(".tetris__over");let o=i.querySelector(".user__score"),l=i.querySelector(".speed__score"),C=i.querySelector(".t_score"),v=new Audio("../audio/tetris_bg.mp3"),b=new Audio("../audio/tetris_over.mp3");const E=20,O=16,N={Tmino:[[[2,1],[0,1],[1,0],[1,1]],[[1,2],[0,1],[1,0],[1,1]],[[1,2],[0,1],[2,1],[1,1]],[[2,1],[1,2],[1,0],[1,1]]],Imino:[[[0,0],[0,1],[0,2],[0,3]],[[0,0],[1,0],[2,0],[3,0]],[[0,0],[0,1],[0,2],[0,3]],[[0,0],[1,0],[2,0],[3,0]]],Omino:[[[0,0],[0,1],[1,0],[1,1]],[[0,0],[0,1],[1,0],[1,1]],[[0,0],[0,1],[1,0],[1,1]],[[0,0],[0,1],[1,0],[1,1]]],Zmino:[[[0,0],[1,0],[1,1],[2,1]],[[1,0],[0,1],[1,1],[0,2]],[[0,0],[1,0],[1,1],[2,1]],[[1,0],[0,1],[1,1],[0,2]]],Smino:[[[1,0],[2,0],[0,1],[1,1]],[[0,0],[0,1],[1,1],[1,2]],[[1,0],[2,0],[0,1],[1,1]],[[0,0],[0,1],[1,1],[1,2]]],Jmino:[[[0,2],[1,0],[1,1],[1,2]],[[0,0],[0,1],[1,1],[2,1]],[[0,0],[1,0],[0,1],[0,2]],[[0,0],[1,0],[2,0],[2,1]]],Lmino:[[[0,0],[0,1],[0,2],[1,2]],[[0,0],[1,0],[2,0],[0,1]],[[0,0],[1,0],[1,1],[1,2]],[[0,1],[1,1],[2,0],[2,1]]]};document.querySelector(".tetris__close").addEventListener("click",()=>{document.querySelector(".tetris__wrap").classList.add("hide")}),document.querySelector(".icon2").addEventListener("click",()=>{document.querySelector(".tetris__wrap").classList.remove("hide")});let d=0,k=500,T,f,L=1;const r={type:"",direction:0,top:0,left:4};function q(){f={...r},w()}function w(){const a=t.childNodes.length;if(a<E){const m=E-a;for(let y=0;y<m;y++){const I=document.createElement("li"),D=document.createElement("ul");for(let x=0;x<O;x++){const H=document.createElement("li");D.prepend(H)}I.prepend(D),t.prepend(I)}}else if(a>E){const m=a-E;for(let y=0;y<m;y++)t.lastChild.remove()}}function M(n=""){const{type:a,direction:m,top:y,left:I}=f;document.querySelectorAll(".moving").forEach(x=>{x.classList.remove(a,"moving")}),N[a][m].some(x=>{const H=x[0]+I,z=x[1]+y,W=t.childNodes[z]?t.childNodes[z].childNodes[0].childNodes[H]:null;if(R(W))W.classList.add(a,"moving");else return f={...r},setTimeout(()=>{M(),n==="top"&&P()}),!0}),r.left=I,r.top=y,r.direction=m}function P(){document.querySelectorAll(".moving").forEach(a=>{a.classList.remove("moving"),a.classList.add("seized")}),B()}function B(){const n=t.childNodes;n[0].children[0].childNodes.forEach(a=>{a.classList.contains("seized")&&(b.play(),A())}),n.forEach(a=>{let m=!0;if(a.children[0].childNodes.forEach(y=>{y.classList.contains("seized")||(m=!1)}),m)switch(a.remove(),w(),d++,o.innerText=d,d){case 5:k=250,L++,l.innerText=L;break;case 10:k=150,L++,l.innerText=L;break;case 15:k=50,L++,l.innerText=L;break}}),h()}function h(){clearInterval(T),T=setInterval(()=>{e("top",1)},k);const n=Object.entries(N),a=Math.floor(Math.random()*n.length);r.type=n[a][0],r.top=0,r.left=4,r.direction=0,f={...r},M()}function R(n){return!(!n||n.classList.contains("seized"))}function e(n,a){f[n]+=a,M(n)}function c(){f.direction===3?f.direction=0:f.direction+=1,M()}function g(){clearInterval(T),T=setInterval(()=>{e("top",1)},10)}function _(){p.classList.add("hide"),h(),v.play(),v.loop=!0,setInterval(timeTetris,1e3)}function A(){s.classList.add("show"),C.innerHTML=`당신의 점수는 ${d}점 입니다!`,v.pause(),v.currentTime=0,tetrisTime=0}function S(){t.querySelectorAll("li > ul > li").forEach(a=>{a.className=""}),h(),v.play(),d=0,o.innerText=0,k=500,L=1,l.innerText=1,b.currentTime=0}document.addEventListener("keydown",n=>{switch(n.keyCode){case 39:e("left",1);break;case 37:e("left",-1);break;case 40:e("top",1);break;case 32:g();break;case 38:c();break}}),p.addEventListener("click",()=>{_()}),document.querySelector(".t_replay_btn").addEventListener("click",()=>{S(),s.classList.remove("show"),b.pause()}),u.addEventListener("click",()=>{document.querySelector(".tetris__wrap").classList.add("hide"),A(),p.classList.add("hide")}),q()}X();V();j();