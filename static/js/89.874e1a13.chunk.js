"use strict";(self.webpackChunkarcade_game=self.webpackChunkarcade_game||[]).push([[89],{89:(t,e,n)=>{n.r(e),n.d(e,{default:()=>y});var o=n(43);class l{constructor(t){const e=t.toString(),n=new Blob(["("+e+")()"]);return new Worker(URL.createObjectURL(n))}}const a=()=>{const t=t=>{let e=[],n=360/t,o=360*Math.random(),l=t=>Math.round(255*t).toString(16).padStart(2,"0");const a=(t,e,n)=>{let o,a,r;if(0==e)o=a=r=n;else{const l=(t,e,n)=>(n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+6*(e-t)*n:n<.5?e:n<2/3?t+(e-t)*(2/3-n)*6:t);let i=n<.5?n*(1+e):n+e-n*e,c=2*n-i;o=l(c,i,t+1/3),a=l(c,i,t),r=l(c,i,t-1/3)}return"#".concat(l(o)).concat(l(a)).concat(l(r))};for(let r=0;r<t;r++){let t=a((o+r*n)%360/360,(50+20*Math.random())/100,(50+20*Math.random())/100);e.push(t)}return e};self.addEventListener("message",(e=>{if(!e)return;let{index:n,width:o,height:l}=e.data;return 1===n?postMessage(((t,e)=>{let n=Math.round(160*Math.random())+80,o=Math.round(10*Math.random())+90,l=Math.round(10*Math.random())+45;function a(t,e){let n=0,o=0,l=0;for(;n*n+o*o<=4&&l<100;){let a=n*n-o*o+t;o=2*n*o+e,n=a,l++}return l/100}let r=new Array(t*e);for(let i=0;i<t;i++)for(let c=0;c<e;c++){let s=a((i-t/2)/(t/3)-.65,0+(c-e/2)/(e/3));r[c*t+i]="hsla(".concat(n*s,", ").concat(o,"%, ").concat(l,"%,").concat(1!=s?1:0,")")}return r})(o,l)):2===n?postMessage(((e,n)=>{let o=[],l=4+Math.round(2*Math.random()),a=t(l+1);return function t(e,n,l,r,i,c,s){if(0===s)o.push([{x:e,y:n},{x:l,y:r},{x:i,y:c},{color:a[s]}]);else{let h=(e+l)/2,d=(n+r)/2,f=(l+i)/2,u=(r+c)/2,m=(e+i)/2,y=(n+c)/2;t(e,n,h,d,m,y,s-1),t(h,d,l,r,f,u,s-1),t(m,y,f,u,i,c,s-1),o.push([{x:h,y:d},{x:f,y:u},{x:m,y:y},{color:a[s]}])}}(50,n-50,e-50,n-50,e/2,50,l),o})(o,l)):3===n?postMessage(function(t,e){let n=[],o=0,l=0;for(let a=0;a<2e5;a++){let a,r,i=Math.random();i<.01?(a=0,r=.16*l):i<.86?(a=.85*o+.04*l,r=-.04*o+.85*l+1.6):i<.93?(a=.2*o-.26*l,r=.23*o+.22*l+1.6):(a=-.15*o+.28*l,r=.26*o+.24*l+.44),o=a,l=r;let c=Math.floor((o+3)*t/6),s=Math.floor(e-l*e/11);n.push({x:c,y:s})}return n}(o,l)):4===n?postMessage(function(t,e){let n=[],o=3+Math.round(2*Math.random());function l(t,e,o,a,r){if(0===r)n.push({x:t,y:e}),n.push({x:o,y:a});else{let n=o-t,i=a-e,c=t+n/3,s=e+i/3,h=.5*(t+o)+Math.sqrt(3)*(e-a)/6,d=.5*(e+a)+Math.sqrt(3)*(o-t)/6,f=t+2*n/3,u=e+2*i/3;l(t,e,c,s,r-1),l(c,s,h,d,r-1),l(h,d,f,u,r-1),l(f,u,o,a,r-1)}}let a=t/2,r=e/2,i=Math.min(t,e)/2-50,c=a,s=r-i,h=a-Math.sqrt(3)/2*i,d=r+i/2,f=a+Math.sqrt(3)/2*i,u=r+i/2;return l(c,s,h,d,o),l(h,d,f,u,o),l(f,u,c,s,o),n}(o,l)):5===n?postMessage(function(e,n){let o=[],l=9+Math.round(2*Math.random()),a=t(l);function r(t,l,i,c,s){if(0===s)return;let h=t+c*Math.cos(i),d=l+c*Math.sin(i);if(h>=20&&h<=e-20&&d>=20&&d<=n-20){o.push([{x:t,y:l},{x:h,y:d},{color:a[s-1]}]);let e=.77*c,n=i-Math.PI/6,f=i+Math.PI/6;r(h,d,n,e,s-1),r(h,d,f,e,s-1)}}let i=e/2,c=n-20,s=.38*Math.min(e,n);return o.push([{x:i,y:c},{x:i,y:c-s},{color:a[l-1]}]),r(o[0][1].x,o[0][1].y,2*-Math.PI/3,.36*s,l-1),r(o[0][1].x,o[0][1].y,1*-Math.PI/3,.36*s,l-1),o}(o,l)):6===n?postMessage(function(e,n){let o=[],l=e/2,a=n/2,r=Math.min(e,n)/2-50,i=4+Math.round(2*Math.random()),c=t(i);return function t(e,n,l,a){if(0===a)return;o.push({x:e,y:n,r:l,color:c[a-1]});let r=.4645*l,i=e-r,s=e+r,h=n-r/Math.sqrt(3),d=n+2*r/Math.sqrt(3);t(i,h,r,a-1),t(s,h,r,a-1),t(e,d,r,a-1)}(l,a,r,i),o}(o,l)):void postMessage([])}))};let r;const i=()=>{r&&r.terminate()};let c;const s=t=>{let e=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;c=e(t)},h=()=>"#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,"0")),d=()=>"rgb(".concat(Math.floor(200*Math.random())+56,",").concat(Math.floor(200*Math.random())+56,",").concat(Math.floor(200*Math.random())+56,")");const f={drawFract:async(t,e)=>{try{c&&(window.cancelAnimationFrame||window.mozCancelAnimationFrame)(c);let n=t.width,o=t.height;const f=t.getContext("2d");((t,e,n)=>{t.clearRect(0,0,t.canvas.width,t.canvas.height),t.fillStyle="#222227",t.fillRect(0,0,t.canvas.width,t.canvas.height)})(f);let u=await(async t=>{try{return i(),r=new l(a),r.postMessage(t),await new Promise((t=>{r.onmessage=function(e){i();let n=e.data;t(n)}}))}catch(e){return i(),[]}})({index:e,width:n,height:o});if(!u||!u.length)return;let m=!0;if(1===e)!function(t,e){let n=arguments.length>3?arguments[3]:void 0,o=arguments.length>4?arguments[4]:void 0;if(arguments.length>2&&void 0!==arguments[2]&&arguments[2]){let l=0;function a(){if(l!==o){for(let o=0;o<n;o++)t.fillStyle=e[l*n+o],t.fillRect(o,l,1,1);l+=1,s(a)}}s(a)}else for(let r=0;r<e.length;r++){let i=r%n,c=Math.floor(r/n);t.fillStyle=e[r],t.fillRect(i,c,1,1)}}(f,u,m,n,o);else if(2===e){!function(t,e){var n,o;let l=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]&&arguments[3],r=null!==(n=!(null===(o=e[0][3])||void 0===o||!o.color))&&void 0!==n&&n;if(l&&r?t.fillStyle=h():(t.strokeStyle=d(),t.lineWidth=2),a){let i=0;function c(){if(i===e.length)return;let n=e[i];t.beginPath(),t.moveTo(n[0].x,n[0].y),t.lineTo(n[1].x,n[1].y),t.lineTo(n[2].x,n[2].y),t.closePath(),r&&(l?t.fillStyle=n[3].color:t.strokeStyle=n[3].color),l?t.fill():t.stroke(),i+=1,s(c)}s(c)}else e.forEach(((e,n)=>{t.beginPath(),t.moveTo(e[0].x,e[0].y),t.lineTo(e[1].x,e[1].y),t.lineTo(e[2].x,e[2].y),t.closePath(),r&&(l?t.fillStyle=e[3].color:t.strokeStyle=e[3].color),l?t.fill():t.stroke()}))}(f,u,Math.random()>=.5,m)}else if(3===e)!function(t,e){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(t.fillStyle=d(),n){let o=400,l=e.length/o,a=0;function r(){if(l!==a){for(let n=0;n<o;n++){let l=e[a*o+n];t.fillRect(l.x,l.y,1,1)}a+=1,s(r)}}s(r)}else e.forEach(((e,n)=>{t.fillRect(e.x,e.y,1,1)}))}(f,u,m);else if(4===e){!function(t,e){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(n?t.fillStyle=h():(t.strokeStyle=d(),t.lineWidth=1),t.beginPath(),o){let l=0,a=384,r=e.length/a;function i(){if(l===a)return t.closePath(),void t.stroke();for(let n=0;n<r;n++)l||n?t.lineTo(e[l*r+n].x,e[l*r+n].y):t.moveTo(e[0].x,e[0].y);t.stroke(),l+=1,s(i)}s(i)}else t.moveTo(e[0].x,e[0].y),e.slice(1).forEach((e=>{t.lineTo(e.x,e.y)})),t.closePath(),n?t.fill():t.stroke()}(f,u,Math.random()>=.5&&!m,m)}else 5===e?function(t,e){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(t.strokeStyle=d(),t.lineWidth=2,n){function o(e){t.beginPath(),t.moveTo(e[0].x,e[0].y),t.lineTo(e[1].x,e[1].y),e.length>=3&&e[2].color&&(t.strokeStyle=e[2].color),t.stroke(),t.closePath()}o(e[0]),e=e.slice(1);let l=0,a=512,r=(e.length+2)/a;function i(){if(l!==a){for(let t=0;t<r;t++)l*r+t<e.length&&o(e[l*r+t]);l+=1,s(i)}}s(i)}else e.forEach((e=>{t.beginPath(),t.moveTo(e[0].x,e[0].y),t.lineTo(e[1].x,e[1].y),e.length>=3&&e[2].color&&(t.strokeStyle=e[2].color),t.stroke(),t.closePath()}))}(f,u,m):6===e&&function(t,e){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(t.strokeStyle=d(),t.lineWidth=2,n){let o=0;function l(){if(o===e.length)return;let n=e[o];t.beginPath(),n.color&&(t.strokeStyle=n.color),t.arc(n.x,n.y,n.r,0,2*Math.PI),t.stroke(),o+=1,s(l)}s(l)}else e.forEach((e=>{t.beginPath(),e.color&&(t.strokeStyle=e.color),t.arc(e.x,e.y,e.r,0,2*Math.PI),t.stroke()}))}(f,u,m)}catch(n){console.log(n)}},terminateWorker:i};n(342);var u=n(579);class m extends o.Component{constructor(t){var e;super(t),e=this,this.drawFractal=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,{width:n,height:o}=e.state,l=e.canvasRef.current;f.drawFract(l,t)},this.state={},this.canvasRef=o.createRef()}componentDidMount(){document.title="Fractals || canvas";let t=this.canvasRef.current;const e=t.getContext("2d");t.width=1080,t.height=1080,e.fillStyle="#222227",e.fillRect(0,0,e.canvas.width,e.canvas.height),this.drawFractal(2)}componentWillUnmount(){document.title="Canvas Generative",f.terminateWorker()}render(){return(0,u.jsx)("div",{className:"section__model main__margin",children:(0,u.jsxs)("div",{className:"main__panel",children:[(0,u.jsx)("div",{className:"canvas__panel",children:(0,u.jsx)("canvas",{ref:this.canvasRef})}),(0,u.jsxs)("div",{className:"canvas__btns",children:[(0,u.jsx)("button",{onClick:()=>this.drawFractal(1),children:"1"}),(0,u.jsx)("button",{onClick:()=>this.drawFractal(2),children:"2"}),(0,u.jsx)("button",{onClick:()=>this.drawFractal(3),children:"3"}),(0,u.jsx)("button",{onClick:()=>this.drawFractal(4),children:"4"}),(0,u.jsx)("button",{onClick:()=>this.drawFractal(5),children:"5"}),(0,u.jsx)("button",{onClick:()=>this.drawFractal(6),children:"6"})]})]})})}}const y=m},342:()=>{}}]);
//# sourceMappingURL=89.874e1a13.chunk.js.map