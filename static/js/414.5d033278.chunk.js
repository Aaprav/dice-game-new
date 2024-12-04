"use strict";(self.webpackChunkarcade_game=self.webpackChunkarcade_game||[]).push([[414],{206:(e,t,i)=>{i.d(t,{OH:()=>w,lv:()=>s,eK:()=>P,Cq:()=>n});var o={};i.r(o),i.d(o,{grooveStrip:()=>d,grooveStrip2:()=>h,grooveStrip3:()=>c,outwardStrip:()=>v});var s={};i.r(s),i.d(s,{w:()=>o});var n={};i.r(n),i.d(n,{Z:()=>O});var l=i(408),a=i(748);const r=(e,t)=>{let{radius:i,position:o,height:s,stepSize:n,stripColor:r,options:d,padLeft:h,stripWidth:c,stripDepth:u}=e,{cylinderMaterial:v,stripShadowMaterial:m}=t,p=new l.YJl,w=new l.uSd({toneMapped:!1,color:0,emissive:r,emissiveIntensity:1.2}),g=new l.eaF(a.V2.hollowCylinder(i,h,s),v);g.rotation.x=-Math.PI/2,g.position.set(0,o,0),p.add(g);let f=new l.eaF(new l.rKP(i-h-c,i-h,64),w);f.rotation.x=-Math.PI/2,f.position.set(0,o-u+s/2,0),f.layers.enable(1),p.add(f);let b=new l.eaF(new l.Ho_(i-h-.01,i-h-.01,u,64,1,!0),m);b.position.set(0,o+(s-u)/2,0),p.add(b);let T=new l.eaF(new l.Ho_(i-h-c,i-h-c,u,64),v);if(T.position.set(0,o-(u-s)/2,0),p.add(T),g.castShadow=!0,g.receiveShadow=!0,T.castShadow=!0,T.receiveShadow=!0,e.backFill){let e=new l.eaF(new l.rKP(0,i,64),v);e.rotation.x=Math.PI/2,e.position.set(0,o-s/2,0),p.add(e)}return p},d=e=>{var t,i,o,s,n,d,h,c,u,v,m,p,w,g,f,b;let T=null===(t=null===e||void 0===e?void 0:e.animated)||void 0===t||t,S=null!==(i=null===e||void 0===e?void 0:e.lightOn)&&void 0!==i&&i,C=new l.YJl,x={base:new l.Q1f(null!==(o=null===e||void 0===e||null===(s=e.colors)||void 0===s?void 0:s.base)&&void 0!==o?o:3497055),top:new l.Q1f(null!==(n=null===e||void 0===e||null===(d=e.colors)||void 0===d?void 0:d.top)&&void 0!==n?n:15556709),middle:new l.Q1f(null!==(h=null===e||void 0===e||null===(c=e.colors)||void 0===c?void 0:c.middle)&&void 0!==h?h:9624744),bottom:new l.Q1f(null!==(u=null===e||void 0===e||null===(v=e.colors)||void 0===v?void 0:v.bottom)&&void 0!==u?u:16637309),strip:new l.Q1f(null!==(m=null===e||void 0===e||null===(p=e.colors)||void 0===p?void 0:p.strip)&&void 0!==m?m:1052688)},y={radius:null!==(w=null===e||void 0===e?void 0:e.radius)&&void 0!==w?w:15,position:null!==(g=null===e||void 0===e?void 0:e.position)&&void 0!==g?g:-14,height:null!==(f=null===e||void 0===e?void 0:e.height)&&void 0!==f?f:2,stepSize:null!==(b=null===e||void 0===e?void 0:e.stepSize)&&void 0!==b?b:3,stripColor:x.strip,padLeft:.8,stripWidth:1.2,stripDepth:.5},M=new l.uSd({color:x.base,metalness:0,roughness:0,clearcoat:1,clearcoatRoughness:0,reflectivity:1}),P=M.clone();function F(e,t){C.children[t].children[1].material.emissive=e;let i=a.im.linearGradient(x.base,e,1);i.side=l.hsX,setTimeout((()=>{C.children[t].children[3].material=[a.im.linearGradient(x.base,e,1),M],C.children[t].children[2].material=i}),20)}function O(e,t){setTimeout((()=>{C.children[t].children[0].material=[M,a.im.linearGradient(e,x.base,3)]}),20)}function k(){setTimeout((()=>{F(x.bottom,2),O(x.bottom,1),setTimeout((()=>{F(x.middle,1),O(x.middle,0),setTimeout((()=>{F(x.top,0),T&&I()}),1e3)}),1e3)}),1e3)}function I(){setTimeout((()=>{C.children.forEach(((e,t)=>{e.children.forEach(((e,i)=>{1===i?C.children[t].children[i].material.emissive=x.strip:C.children[t].children[i].material=2===i?P:M}))})),T&&k()}),1e3)}return P.side=l.hsX,C.add(r(y,{cylinderMaterial:M,stripShadowMaterial:P})),y.radius+=y.stepSize,y.position-=y.height,C.add(r(y,{cylinderMaterial:M,stripShadowMaterial:P})),y.radius+=y.stepSize,y.position-=y.height,y.backFill=!0,C.add(r(y,{cylinderMaterial:M,stripShadowMaterial:P})),S?(F(x.bottom,2),O(x.bottom,1),F(x.middle,1),O(x.middle,0),F(x.top,0),T&&I()):T&&k(),C};const h=class{constructor(e){var t,i,o,s,n,r,d,h,c,u,v,m,p,w,g,f=this;this.renderStep=()=>{let{radius:e,position:t,height:i,stepSize:o,stripColor:s,options:n,padLeft:r,stripWidth:d,stripDepth:h,corners:c}=this.settings,u=new l.YJl,v=new l.eaF(a.V2.hollowCylinder(e,r,i,c/2),[this.materials[0],this.materials[2].clone(),this.materials[0]]);v.rotation.x=-Math.PI/2,v.position.set(0,t,0),u.add(v);let m=new l.eaF(new l.rKP(e-r-d,e-r,c),this.materials[1].clone());m.rotation.x=-Math.PI/2,m.position.set(0,t-h+i/2,0),m.layers.enable(1),u.add(m);let p=new l.eaF(new l.Ho_(e-r-.01,e-r-.01,h,c,1,!0),this.materials[3].clone());p.position.set(0,t+(i-h)/2,0),u.add(p);let w=new l.eaF(new l.Ho_(e-r-d,e-r-d,h,c),[this.materials[2].clone(),this.materials[0],this.materials[0]]);if(w.position.set(0,t-(h-i)/2,0),u.add(w),v.castShadow=!0,v.receiveShadow=!0,w.castShadow=!0,w.receiveShadow=!0,this.settings.backFill){let o=new l.eaF(new l.rKP(0,e,c),this.materials[0]);o.rotation.x=Math.PI/2,o.position.set(0,t-i/2,0),u.add(o)}6===c&&(v.rotation.z=Math.PI/6,m.rotation.z=Math.PI/6),this.pivot.add(u)},this.loadMaterials=()=>{this.textures.push(a.D7.gradientColor(this.colors.base,this.colors.base,0)),this.textures.push(a.D7.gradientColor(this.colors.top,this.colors.base,0)),this.textures.push(a.D7.gradientColor(this.colors.middle,this.colors.base,0)),this.textures.push(a.D7.gradientColor(this.colors.bottom,this.colors.base,0)),this.textures.push(a.D7.gradientColor(this.colors.base,this.colors.middle,0)),this.textures.push(a.D7.gradientColor(this.colors.base,this.colors.bottom,0));let e=new l.tXL({color:this.colors.base,metalness:0,roughness:0,clearcoat:1,clearcoatRoughness:0,reflectivity:1,shininess:30,specular:this.colors.base});this.materials.push(e);let t=new l.uSd({toneMapped:!1,color:0,emissive:this.colors.strip,emissiveIntensity:1.2,shininess:300});this.materials.push(t);let i=e.clone();i.color.set(16777215),i.map=this.textures[0],this.materials.push(i);let o=i.clone();o.side=l.hsX,this.materials.push(o)},this.renderBase=()=>{this.renderStep(),this.settings.radius+=this.settings.stepSize,this.settings.position-=this.settings.height,this.renderStep(),this.settings.radius+=this.settings.stepSize,this.settings.position-=this.settings.height,this.settings.backFill=!0,this.renderStep()},this.animationOn=()=>{this.timeout=setTimeout((()=>{this.turnOnLight(this.colors.bottom,2),this.turnOnShadow(this.colors.bottom,1),this.timeout=setTimeout((()=>{this.turnOnLight(this.colors.middle,1),this.turnOnShadow(this.colors.middle,0),this.timeout=setTimeout((()=>{this.turnOnLight(this.colors.top,0),this.animated&&(this.timeout=setTimeout((()=>{this.animationOff(),this.timeout=setTimeout((()=>{this.animationOn()}),1e3)}),1e3))}),1e3)}),1e3)}),1e3)},this.animationOff=()=>{this.pivot.children.forEach(((e,t)=>{e.children.forEach(((e,t)=>{0===t?e.material[1].map=this.textures[0]:1===t?e.material.emissive.set(this.colors.strip):2===t?e.material.map=this.textures[0]:3===t&&(e.material[0].map=this.textures[0])}))}))},this.setup=function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!f.materials.length)return f.loadMaterials(),f.renderBase(),e?(f.turnOnLight(f.colors.bottom,2),f.turnOnShadow(f.colors.bottom,1),f.turnOnLight(f.colors.middle,1),f.turnOnShadow(f.colors.middle,0),f.turnOnLight(f.colors.top,0),t&&(f.animated=!0,f.timeout=setTimeout((()=>{f.animationOff(),f.timeout=setTimeout((()=>{f.animationOn()}),1e3)}),1e3))):t&&(f.animated=!0,f.timeout=setTimeout((()=>{f.animationOn()}),1e3)),f.pivot},this.start=()=>{this.animated?(this.stop(),this.animationOn()):(this.animated=!0,this.animationOn())},this.stop=()=>{this.animated&&(this.animated=!1,clearTimeout(this.timeout),this.animationOff())},this.dispose=()=>{this.stop(),this.pivot.traverse((e=>{e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach((e=>e.dispose())):e.material.dispose()),e.texture&&e.texture.dispose()})),this.pivot.parent&&this.pivot.parent.remove(this.pivot)},this.animated=!1,this.pivot=new l.YJl,this.colors={base:new l.Q1f(null!==(t=null===e||void 0===e||null===(i=e.colors)||void 0===i?void 0:i.base)&&void 0!==t?t:3497055),top:new l.Q1f(null!==(o=null===e||void 0===e||null===(s=e.colors)||void 0===s?void 0:s.top)&&void 0!==o?o:15556709),middle:new l.Q1f(null!==(n=null===e||void 0===e||null===(r=e.colors)||void 0===r?void 0:r.middle)&&void 0!==n?n:9624744),bottom:new l.Q1f(null!==(d=null===e||void 0===e||null===(h=e.colors)||void 0===h?void 0:h.bottom)&&void 0!==d?d:16637309),strip:new l.Q1f(null!==(c=null===e||void 0===e||null===(u=e.colors)||void 0===u?void 0:u.strip)&&void 0!==c?c:1052688)},this.settings={radius:null!==(v=null===e||void 0===e?void 0:e.radius)&&void 0!==v?v:15,position:null!==(m=null===e||void 0===e?void 0:e.position)&&void 0!==m?m:-14,height:null!==(p=null===e||void 0===e?void 0:e.height)&&void 0!==p?p:2,stepSize:null!==(w=null===e||void 0===e?void 0:e.stepSize)&&void 0!==w?w:3,padLeft:.8,stripWidth:1.2,stripDepth:.5,corners:null!==(g=null===e||void 0===e?void 0:e.corners)&&void 0!==g?g:64},this.materials=[],this.textures=[],this.timeout=""}turnOnLight(e,t){this.pivot.children[t].children[1].material.emissive.set(e),this.pivot.children[t].children[2].material.map=this.textures[t+1],this.pivot.children[t].children[3].material[0].map=this.textures[t+1]}turnOnShadow(e,t){this.pivot.children[t].children[0].material[1].map=this.textures[t+4]}};const c=class{constructor(e){var t,i,o,s,n,r,d,h,c,u,v,m,p,w,g,f=this;this.renderStep=()=>{let{radius:e,position:t,height:i,stepSize:o,stripColor:s,options:n,padLeft:r,stripWidth:d,stripDepth:h,corners:c}=this.settings,u=new l.YJl,v=new l.eaF(a.V2.hollowCylinder(e,r,i,c/2),this.materials[0]);v.rotation.x=-Math.PI/2,v.position.set(0,t,0),u.add(v);let m=new l.eaF(new l.rKP(e-r-d,e-r,c),this.materials[1].clone());m.rotation.x=-Math.PI/2,m.position.set(0,t-h+i/2,0),m.layers.enable(1),u.add(m);let p=new l.eaF(new l.Ho_(e-r-.01,e-r-.01,h,c,1,!0),this.materials[3]);p.position.set(0,t+(i-h)/2,0),u.add(p);let w=new l.eaF(new l.Ho_(e-r-d,e-r-d,h,c),this.materials[0]);if(w.position.set(0,t-(h-i)/2,0),u.add(w),v.castShadow=!0,v.receiveShadow=!0,w.castShadow=!0,w.receiveShadow=!0,this.settings.backFill){let o=new l.eaF(new l.rKP(0,e,c),this.materials[0]);o.rotation.x=Math.PI/2,o.position.set(0,t-i/2,0),u.add(o)}6===c&&(v.rotation.z=Math.PI/6,m.rotation.z=Math.PI/6),this.pivot.add(u)},this.loadMaterials=()=>{let e=new l.tXL({color:this.colors.base,metalness:0,roughness:0,clearcoat:1,clearcoatRoughness:0,reflectivity:1,shininess:30,specular:this.colors.base});this.materials.push(e);let t=new l.uSd({toneMapped:!1,color:0,emissive:this.colors.strip,emissiveIntensity:1.2,shininess:300});this.materials.push(t);let i=a.im.linearGradient(this.colors.base,this.colors.base,1);this.materials.push(i);let o=e.clone();o.side=l.$EB,this.materials.push(o);let s=a.im.linearGradient(this.colors.base,this.colors.top,1);s.side=l.$EB,this.materials.push(s.clone()),s.uniforms.color2.value=this.colors.middle,this.materials.push(s.clone()),s.uniforms.color2.value=this.colors.bottom,this.materials.push(s.clone());let n=a.im.linearGradient3(this.colors.middle,this.colors.base);this.materials.push(n.clone()),n.uniforms.color1.value=this.colors.bottom,this.materials.push(n.clone())},this.renderBase=()=>{this.renderStep(),this.settings.radius+=this.settings.stepSize,this.settings.position-=this.settings.height,this.renderStep(),this.settings.radius+=this.settings.stepSize,this.settings.position-=this.settings.height,this.settings.backFill=!0,this.renderStep()},this.animationOn=()=>{this.timeout=setTimeout((()=>{this.turnOnLight(this.colors.bottom,2),this.turnOnShadow(this.colors.bottom,1),this.timeout=setTimeout((()=>{this.turnOnLight(this.colors.middle,1),this.turnOnShadow(this.colors.middle,0),this.timeout=setTimeout((()=>{this.turnOnLight(this.colors.top,0),this.animated&&(this.timeout=setTimeout((()=>{this.animationOff(),this.timeout=setTimeout((()=>{this.animationOn()}),1e3)}),1e3))}),1e3)}),1e3)}),1e3)},this.animationOff=()=>{this.pivot.children.forEach(((e,t)=>{e.children.forEach(((e,t)=>{0===t?e.material=this.materials[0]:1===t?e.material.emissive.set(this.colors.strip):2===t?e.material=this.materials[3]:3===t&&(e.material=this.materials[0])}))}))},this.setup=function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!f.materials.length)return f.loadMaterials(),f.renderBase(),e?(f.turnOnLight(f.colors.bottom,2),f.turnOnShadow(f.colors.bottom,1),f.turnOnLight(f.colors.middle,1),f.turnOnShadow(f.colors.middle,0),f.turnOnLight(f.colors.top,0),t&&(f.animated=!0,f.timeout=setTimeout((()=>{f.animationOff(),f.timeout=setTimeout((()=>{f.animationOn()}),1e3)}),1e3))):t&&(f.animated=!0,f.timeout=setTimeout((()=>{f.animationOn()}),1e3)),f.pivot},this.start=()=>{this.animated?(this.stop(),this.animationOn()):(this.animated=!0,this.animationOn())},this.stop=()=>{this.animated&&(this.animated=!1,clearTimeout(this.timeout),this.animationOff())},this.dispose=()=>{this.stop(),this.pivot.traverse((e=>{e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach((e=>e.dispose())):e.material.dispose()),e.texture&&e.texture.dispose()})),this.pivot.parent&&this.pivot.parent.remove(this.pivot)},this.animated=!1,this.pivot=new l.YJl,this.colors={base:new l.Q1f(null!==(t=null===e||void 0===e||null===(i=e.colors)||void 0===i?void 0:i.base)&&void 0!==t?t:3497055),top:new l.Q1f(null!==(o=null===e||void 0===e||null===(s=e.colors)||void 0===s?void 0:s.top)&&void 0!==o?o:15556709),middle:new l.Q1f(null!==(n=null===e||void 0===e||null===(r=e.colors)||void 0===r?void 0:r.middle)&&void 0!==n?n:9624744),bottom:new l.Q1f(null!==(d=null===e||void 0===e||null===(h=e.colors)||void 0===h?void 0:h.bottom)&&void 0!==d?d:16637309),strip:new l.Q1f(null!==(c=null===e||void 0===e||null===(u=e.colors)||void 0===u?void 0:u.strip)&&void 0!==c?c:1052688)},this.settings={radius:null!==(v=null===e||void 0===e?void 0:e.radius)&&void 0!==v?v:15,position:null!==(m=null===e||void 0===e?void 0:e.position)&&void 0!==m?m:-14,height:null!==(p=null===e||void 0===e?void 0:e.height)&&void 0!==p?p:2,stepSize:null!==(w=null===e||void 0===e?void 0:e.stepSize)&&void 0!==w?w:3,padLeft:.8,stripWidth:1.2,stripDepth:.5,corners:null!==(g=null===e||void 0===e?void 0:e.corners)&&void 0!==g?g:64},this.materials=[],this.timeout=""}turnOnLight(e,t){this.pivot.children[t].children[1].material.emissive.set(e),this.pivot.children[t].children[2].material=this.materials[4+t],this.pivot.children[t].children[3].material=[this.materials[4+t],this.materials[0],this.materials[0]]}turnOnShadow(e,t){this.pivot.children[t].children[0].material=[this.materials[0],this.materials[7+t],this.materials[0]]}},u=(e,t)=>{let{radius:i,position:o,height:s,stepSize:n,stripColor:r,baseColor:d,options:h,padLeft:c,stripWidth:u,stripDepth:v}=e,{cylinderMaterial:m,stripShadowMaterial:p}=t,w=new l.YJl,g=new l.uSd({color:0,emissive:r,emissiveIntensity:1}),f=new l.uSd({color:0,emissive:d,emissiveIntensity:1}),b=new l.eaF(a.V2.hollowCylinder(i,c,s),m);b.rotation.x=-Math.PI/2,b.position.set(0,o,0),w.add(b);let T=new l.eaF(a.V2.hollowCylinder(i-c,u,v),[g,f]);T.rotation.x=-Math.PI/2,T.position.set(0,o+(v+s)/2,0),w.add(T);let S=new l.eaF(new l.Ho_(i-c-u,i-c-u,v,64),m);if(S.position.set(0,o-(v-s)/2,0),w.add(S),b.castShadow=!0,b.receiveShadow=!0,T.castShadow=!0,e.backFill){let e=new l.eaF(new l.rKP(0,i,64),m);e.rotation.x=Math.PI/2,e.position.set(0,o-s/2,0),w.add(e)}return w},v=e=>{var t,i,o,s,n,r,d,h,c,v,m,p,w,g,f,b;let T=null===(t=null===e||void 0===e?void 0:e.animated)||void 0===t||t,S=null!==(i=null===e||void 0===e?void 0:e.lightOn)&&void 0!==i&&i,C=new l.YJl,x={base:new l.Q1f(null!==(o=null===e||void 0===e||null===(s=e.colors)||void 0===s?void 0:s.base)&&void 0!==o?o:3497055),top:new l.Q1f(null!==(n=null===e||void 0===e||null===(r=e.colors)||void 0===r?void 0:r.top)&&void 0!==n?n:15556709),middle:new l.Q1f(null!==(d=null===e||void 0===e||null===(h=e.colors)||void 0===h?void 0:h.middle)&&void 0!==d?d:9624744),bottom:new l.Q1f(null!==(c=null===e||void 0===e||null===(v=e.colors)||void 0===v?void 0:v.bottom)&&void 0!==c?c:16637309),strip:new l.Q1f(null!==(m=null===e||void 0===e||null===(p=e.colors)||void 0===p?void 0:p.bottom)&&void 0!==m?m:1052688)},y={radius:null!==(w=null===e||void 0===e?void 0:e.radius)&&void 0!==w?w:15,position:null!==(g=null===e||void 0===e?void 0:e.position)&&void 0!==g?g:-14,height:null!==(f=null===e||void 0===e?void 0:e.height)&&void 0!==f?f:2,stepSize:null!==(b=null===e||void 0===e?void 0:e.stepSize)&&void 0!==b?b:3,baseColor:x.base,stripColor:x.strip,padLeft:1,stripWidth:1,stripDepth:.3},M=new l.uSd({color:x.base,metalness:0,roughness:0,clearcoat:1,clearcoatRoughness:0,reflectivity:1}),P=M.clone();function F(e,t){C.children[t].children[1].material[0].emissive=e,C.children[t].children[1].material[1].color=x.base,C.children[t].children[1].material[1].emissiveIntensity=3}function O(e,t){setTimeout((()=>{C.children[t].children[0].material=[M,a.im.linearGradient(e,x.base,3)]}),20)}function k(){setTimeout((()=>{F(x.bottom,2),O(x.bottom,1),setTimeout((()=>{F(x.middle,1),O(x.middle,0),setTimeout((()=>{F(x.top,0),T&&I()}),1e3)}),1e3)}),1e3)}function I(){setTimeout((()=>{C.children.forEach(((e,t)=>{e.children.forEach(((e,i)=>{i?1===i&&(C.children[t].children[i].material[0].emissive=x.strip,C.children[t].children[i].material[1].emissiveIntensity=1):C.children[t].children[i].material=M}))})),T&&k()}),1e3)}return P.side=l.hsX,C.add(u(y,{cylinderMaterial:M,stripShadowMaterial:P})),y.radius+=y.stepSize,y.position-=y.height,C.add(u(y,{cylinderMaterial:M,stripShadowMaterial:P})),y.radius+=y.stepSize,y.position-=y.height,y.backFill=!0,C.add(u(y,{cylinderMaterial:M,stripShadowMaterial:P})),S?(F(x.bottom,2),O(x.bottom,1),F(x.middle,1),O(x.middle,0),F(x.top,0),T&&I()):T&&k(),C};var m=i(381),p=i(641);const w=e=>{let t=new l.G_z({color:2764092,side:l.$EB}),i=new l.G_z({color:2894892,side:l.$EB}),o=new l.eaF(new l.bdM(150,90),t);o.position.set(0,25.99,-45),e.add(o);let s=new l.eaF(new l.bdM(150,70),i);s.position.set(0,-19.01,-10),s.rotation.x=-Math.PI/2,e.add(s),o.receiveShadow=!0,s.receiveShadow=!0,m.g.init();let n=new l.$p8(16777215,.9);e.add(n);let a=new l.dth(16777215,0,1);a.position.set(0,50,0),e.add(a);let r=new l.R1W(a,1);e.add(r);let d=new l.ure(16777215,10,50,50);d.position.set(0,70,0),d.lookAt(0,0,0),d.matrixAutoUpdate=!0,e.add(d);let h=new p.g(d);e.add(h);const c=new l.ZyN(16777215,.5);c.position.set(100,200,100),c.castShadow=!0;const u=new l.nCl(16777215,.8);u.position.set(0,100,100),u.castShadow=!0;const v=new l.nCl(16777215,.8);v.position.set(0,300,-150),v.castShadow=!0;const w=new l.HiM(65535,1,2e3);w.position.set(50,100,50);const g=new l.HiM(16711935,1,2e3);g.position.set(-50,100,-50);const f=new l.HiM(16777215,1,2e3);f.position.set(0,0,50);new l.PFK(c,20),new l.Fpm(u),new l.Fpm(v),new l.F1l(w,10),new l.F1l(g,10),new l.F1l(f,10)};var g=i(873),f=i(53),b=i(688),T=i(940),S=i(217),C=i(558),x=i(583),y=i(322);const M=new l.BKk({uniforms:{baseTexture:{value:null},bloomTexture:{value:null}},vertexShader:"\n    varying vec2 vUv;\n    void main() {\n      vUv = uv;\n      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n    }",fragmentShader:"\n    uniform sampler2D baseTexture;\n    uniform sampler2D bloomTexture;\n    varying vec2 vUv;\n    void main() {\n      vec4 color = texture2D(baseTexture, vUv);\n      vec4 add = texture2D(bloomTexture, vUv);\n      gl_FragColor = color + vec4( 1.0 ) * add;\n    }",defines:{}});const P=class{constructor(e){this.setupRenderer=()=>{this.renderer=new l.JeP({canvas:this.canvas,antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),this.renderer.setSize(this.width,this.height),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setClearColor(0),this.renderer.toneMapping=l.Mjd,this.renderer.toneMappingExposure=1,this.params.shadow&&(this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=l.Wk7)},this.setupCamera=()=>{this.camera=new l.ubm(75,this.width/this.height,.1,1e3),this.camera.position.set(0,2,50),this.camera.lookAt(new l.Pq0(0,-6,0))},this.setupScene=()=>{this.scene=new l.Z58,this.scene.add(new l.IzY(10))},this.setupControls=()=>{this.controls=new x.N(this.camera,this.canvas),this.controls.target=new l.Pq0(0,0,0),this.controls.enableDamping=!0,this.controls.dampingFactor=.25,this.controls.screenSpacePanning=!1,this.controls.maxDistance=100,this.controls.minDistance=2,this.controls.enableZoom=!0,this.controls.enableKeys=!0,this.controls.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.controls.mouseButtons={LEFT:l.kBv.ROTATE,RIGHT:l.kBv.PAN},this.controls.touches={ONE:l.wtR.ROTATE,TWO:l.wtR.DOLLY_PAN},this.controls.update()},this.setupComposer=()=>{let e=new f.A(this.scene,this.camera);if(this.bloomparams.enabled){this.bloomLayer=new l.zgK,this.bloomLayer.set(1),this.bloomPass=new b.C(new l.I9Y(this.width,this.height),1.5,.4,.85),this.bloomPass.strength=this.bloomparams.strength,this.bloomPass.radius=this.bloomparams.radius,this.bloomPass.threshold=this.bloomparams.threshold,this.bloomComposer=new g.s(this.renderer),this.bloomComposer.renderToScreen=!1,this.bloomComposer.addPass(e),this.bloomComposer.addPass(this.bloomPass);let t=new S.X;this.composer=new g.s(this.renderer),this.composer.addPass(e);let i=new T.p(M,"baseTexture");i.uniforms.bloomTexture.value=this.bloomComposer.renderTarget2.texture,i.needsSwap=!0,this.composer.addPass(i),this.composer.addPass(t),this.fxaaPass=new T.p(C.o);let o=this.renderer.getPixelRatio();this.fxaaPass.material.uniforms.resolution.value.set(1/(this.width*o),1/(this.height*o)),this.composer.addPass(this.fxaaPass)}else this.composer=new g.s(this.renderer),this.composer.addPass(e)},this.disposeComposer=()=>{this.bloomComposer&&(this.bloomLayer=null,this.bloomPass.dispose(),this.bloomPass=null,this.fxaaPass.dispose(),this.fxaaPass=null,this.bloomComposer.dispose(),this.bloomComposer=null),this.composer.dispose(),this.composer=null},this.getScene=()=>this.scene,this.render=()=>{if(this.bloomComposer){let e={},t=new l.uSd({color:"black",emissiveIntensity:0});this.scene.traverse((i=>{i.isMesh&&!1===this.bloomLayer.test(i.layers)&&(e[i.uuid]=i.material,i.material=t)})),this.bloomComposer.render(),this.scene.traverse((t=>{e[t.uuid]&&(t.material=e[t.uuid],delete e[t.uuid])}))}this.composer.render()},this.handleResize=()=>{let e=this.sceneRef.current.offsetWidth,t=window.innerHeight-80;if(this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.bloomComposer){let i=this.renderer.getPixelRatio();this.fxaaPass.material.uniforms.resolution.value.set(1/(e*i),1/(t*i)),this.bloomComposer.setSize(e,t)}this.composer.setSize(e,t)},this.dispose=()=>{this.renderer&&this.renderer.dispose()},this.guiInputs=e=>{let t=(new y.cL).addFolder("bloom"),i=this;t.add(this.bloomparams,"enabled",0,3).listen().onChange((function(e){i.disposeComposer(),i.setupComposer()})),t.add(this.bloomparams,"strength",0,3).onChange((function(e){i.bloomPass.strength=Number(e)})),t.add(this.bloomparams,"radius",0,1).step(.01).onChange((function(e){i.bloomPass.radius=Number(e)})),t.add(this.bloomparams,"exposure",0,1).onChange((function(e){i.bloomPass.exposure=Number(e)}))},this.sceneRef=e,this.canvas=e.current.children[0],this.width=e.current.offsetWidth,this.height=window.innerHeight-80,this.renderer=null,this.scene=null,this.camera=null,this.controls=null,this.fxaaPass=null,this.bloomLayer=null,this.bloomPass=null,this.bloomComposer=null,this.composer=null,this.params={shadow:!0},this.bloomparams={enabled:!1,strength:.2,radius:.1,exposure:.85}}init(){this.setupRenderer(),this.setupCamera(),this.setupScene(),this.setupControls(),this.setupComposer(),this.guiInputs()}};var F=i(718);const O=class{constructor(e){var t,o,s,n,r,d,h,c,u,v,p,w,g;this.loadMaterials=()=>{let e=new l.o6l(256,{format:l.GWd,generateMipmaps:!0,minFilter:l.$_I});this.cubeCamera=new l.F1T(.1,1e3,e);let t=new l.tXL({reflectivity:.9,color:9419919,shininess:30,specular:16777215});this.materials.push(t);const i=new l.uSd({metalness:0,roughness:.05,transmission:1,transparent:!0,reflectivity:.9,opacity:1,ior:1.5,thickness:0,clearcoat:1,clearcoatRoughness:0,envMapIntensity:1,depthWrite:!1,side:l.$EB});this.materials.push(i.clone()),this.materials.push(i);let o=new l.uSd({toneMapped:!1,color:0,emissive:16777215,emissiveIntensity:1});this.materials.push(o)},this.renderPacket=()=>{let{width:e,height:t,depth:i,fR1:o,sR1:s,fR2:n,sR2:r,pD1:d,pD2:h}=this.settings,c=new l.eaF(a.V2.solidBox3(e+8,t+10,d,o,s,32),this.materials[0]);c.position.set(0,0,d/2+o),c.castShadow=!0,this.pivot.add(c);let u=new l.eaF(a.V2.hollowBox2(e-1,t-1,h,1,.2,r),[this.materials[3],this.materials[0],this.materials[0]]);u.position.set(0,0,d+2*o+.2+h/2),this.pivot.add(u),this.glassLayer=new l.eaF(a.V2.solidBox2(e,t,i,n,r,8),this.materials[2]),this.glassLayer.position.set(0,0,d+2*o+n+i/2),this.pivot.add(this.glassLayer);let v=a.V2.hollowBox3Face2(e+2*n,4,i+2*n,.2,n);v.material=this.materials[0].clone(),v.position.set(0,-10,d+2*o+n+.1+i/2),this.pivot.add(v),this.renderModel(),this.addLights()},this.renderModel=async()=>{try{let{width:e,height:t,depth:o,fR1:s,sR1:n,fR2:a,sR2:r,pD1:d}=this.settings,h=await(async()=>{try{let e=new F.B,t=await e.loadAsync(i(146));return t=t.scene,t.rotation.x=-Math.PI/2,t.rotation.z=Math.PI,t}catch(e){return null}})(),c=(new l.NRn).setFromObject(h).getSize(new l.Pq0),u=Math.min(e/c.x,t/c.y,o/c.z);h.position.setZ(d+s+a+o/2);let v=this.materials[1].clone();v.color.set(16777215);let m=h.clone();m.scale.set(u,u,u),m.traverse((e=>{e.isMesh&&(e.material=v)})),this.pivot.add(m);let p=h.children[0].children[0].material;p.metalness=.5,p.roughness=.2,p.clearcoat=1,p.clearcoatRoughness=0,p.reflectivity=.5,h.scale.set(.95*u,.95*u,.95*u),this.pivot.add(h)}catch(e){console.log(e)}},this.addLights=()=>{let{width:e,height:t,depth:i,fR1:o,sR1:s,fR2:n,sR2:a,pD1:r}=this.settings;m.g.init();let d=new l.ure(16777215,1,i+2*n,t+2*n);d.position.set(e/2+n-.5,0,i/2+r+2*o+n),d.lookAt(0,0,i/2+r+2*o+n),d.matrixAutoUpdate=!0,this.pivot.add(d),d=d.clone(),d.position.x*=-1,d.lookAt(0,0,i/2+r+2*o+n),this.pivot.add(d),d=d.clone(),d.height=e+2*n,d.position.set(0,t/2+n-.5,i/2+r+2*o+n),d.lookAt(0,0,i/2+r+2*o+n),d.rotation.z=Math.PI/2,this.pivot.add(d),d=d.clone(),d.position.y*=-1,d.lookAt(0,0,i/2+r+2*o+n),d.rotation.z=Math.PI/2,this.pivot.add(d)},this.setup=()=>(this.loadMaterials(),this.pivot.rotation.y=-Math.PI/6,this.pivot.position.set(0,10,0),this.pivot.rotation.z=0,this.pivot.add(new l.IzY(15)),this.renderPacket(),this.pivot),this.animate=(e,t)=>{this.cubeCamera&&(this.glassLayer.visible=!1,this.cubeCamera.position.copy(this.glassLayer.position),this.cubeCamera.update(e,t),this.glassLayer.visible=!0)},this.pivot=new l.YJl,this.timeout="",this.colors={base:new l.Q1f(null!==(t=null===e||void 0===e||null===(o=e.colors)||void 0===o?void 0:o.base)&&void 0!==t?t:3497055),top:new l.Q1f(null!==(s=null===e||void 0===e||null===(n=e.colors)||void 0===n?void 0:n.top)&&void 0!==s?s:15556709),middle:new l.Q1f(null!==(r=null===e||void 0===e||null===(d=e.colors)||void 0===d?void 0:d.middle)&&void 0!==r?r:9624744),bottom:new l.Q1f(null!==(h=null===e||void 0===e||null===(c=e.colors)||void 0===c?void 0:c.bottom)&&void 0!==h?h:16637309),strip:new l.Q1f(null!==(u=null===e||void 0===e||null===(v=e.colors)||void 0===v?void 0:v.strip)&&void 0!==u?u:1052688)},this.settings={width:null!==(p=null===e||void 0===e?void 0:e.width)&&void 0!==p?p:20,height:null!==(w=null===e||void 0===e?void 0:e.height)&&void 0!==w?w:30,depth:null!==(g=null===e||void 0===e?void 0:e.depth)&&void 0!==g?g:5,fR1:.2,sR1:2,pD1:.1,fR2:.5,sR2:.5,pD2:.1},this.materials=[]}}},748:(e,t,i)=>{i.d(t,{V2:()=>O,im:()=>s,D7:()=>o});var o={};i.r(o),i.d(o,{cubeTexture:()=>h,gradientColor:()=>v,sphereTexture:()=>c});var s={};i.r(s),i.d(s,{linearGradient:()=>m,linearGradient2:()=>p,linearGradient3:()=>w,radialGradient:()=>g});var n={};i.r(n),i.d(n,{hollowBox:()=>C,hollowBox2:()=>x,hollowBox3:()=>y,hollowCylinder:()=>f,solidBox:()=>b,solidBox2:()=>T,solidBox3:()=>S});var l={};i.r(l),i.d(l,{hollowBox3Face:()=>P,hollowBox3Face2:()=>F});var a=i(408),r=i(944);const d=i.p+"static/media/granite_tile.06dda011f580cd49d125.jpg",h=()=>(new a.ScU).load([d,d,d,d,d,d]),c=()=>(new a.Tap).load(i(900)),u=e=>e instanceof a.Q1f?"#".concat(e.getHexString()):"#"===e[0]?e:"number"===typeof e||e.startsWith("0x")?"#".concat(e.toString(16)):e,v=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:16777215,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1;e=u(e),t=u(t);let n=256,l=(0,r.Nw)(256,n),d=l.getContext("2d");d.clearRect(0,0,256,n);let h=d.createLinearGradient(0,0,0,n*s);h.addColorStop(i,e),h.addColorStop(o,t),d.fillStyle=h,d.fillRect(0,0,256,n),d.globalAlpha=1,d.globalCompositeOperation="overlay",d.drawImage(l,0,0);const c=new a.GOR(l);return c.colorSpace=a.er$,c.minFilter=a.k6q,c.magFilter=a.k6q,c.wrapS=a.ghU,c.wrapT=a.ghU,c.needsUpdate=!0,c},m=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:16777215,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2;return new a.BKk({uniforms:{color1:{value:new a.Q1f(e)},color2:{value:new a.Q1f(t)},height:{value:i}},vertexShader:"\n    varying vec2 vUv;\n    void main() {\n      vUv = uv;\n      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n    }",fragmentShader:"\n    varying vec2 vUv;\n    uniform vec3 color1;\n    uniform vec3 color2;\n    uniform float height;\n\n    void main() {\n      float adjustedDist = (vUv.y + height / 2.0) / height; // Normalized value;\n      gl_FragColor = vec4(mix(color1, color2, adjustedDist), 1.0);\n    }"})},p=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:16777215,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return new a.BKk({uniforms:{color1:{value:new a.Q1f(e)},color2:{value:new a.Q1f(t)},height:{value:i}},vertexShader:"\n    varying vec2 vUv;\n    void main() {\n      vUv = uv;\n      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n    }",fragmentShader:"\n    uniform vec3 color1;\n    uniform vec3 color2;\n    varying vec2 vUv;\n    uniform float height; // Controls the skew toward one color\n\n    void main() {\n      float gradientFactor = smoothstep(0.0, 1.0, vUv.y + height);\n      vec3 color = mix(color1, color2, gradientFactor);\n      gl_FragColor = vec4(color, 1.0);\n    }"})},w=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:16777215,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:2;return new a.BKk({uniforms:{color1:{value:new a.Q1f(e)},color2:{value:new a.Q1f(t)},intensity:{value:i},gradientPower:{value:o},height:{value:s}},vertexShader:"\n    varying vec2 vUv;\n    void main() {\n      vUv = uv;\n      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n    }",fragmentShader:"\n    uniform vec3 color1;\n    uniform vec3 color2;\n    uniform float intensity;     // Controls gradient strength\n    uniform float offset;        // Adjusts the starting point of the gradient\n    uniform float gradientPower; // Controls the rate of blending between colors\n    varying vec2 vUv;\n\n    void main() {\n      float gradientFactor = pow(smoothstep(offset, 1.0, vUv.y), gradientPower) * intensity;\n      vec3 color = mix(color1, color2, gradientFactor);\n      gl_FragColor = vec4(color, 1.0);\n    }"})},g=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:16777215,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return new a.BKk({uniforms:{color1:{value:new a.Q1f(e)},color2:{value:new a.Q1f(t)},exponent:{value:i}},vertexShader:"\n    varying vec2 vUv;\n    void main() {\n      vUv = uv;\n      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n    }",fragmentShader:"\n    varying vec2 vUv;\n    uniform vec3 color1;\n    uniform vec3 color2;\n    uniform float exponent;\n    void main() {\n      vec2 center = vec2(0.5, 0.5);\n      float dist = distance(vUv, center);\n      float adjustedDist = pow(dist, exponent);\n      gl_FragColor = vec4(mix(color1, color2, adjustedDist), 1.0);\n    }"})};const f=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:64,s=new a.ypk;s.moveTo(e,0),s.absarc(0,0,e,0,2*Math.PI,!1);let n=new a.wAk;n.moveTo(e-t,0),n.absarc(0,0,e-t,0,2*Math.PI,!0),s.holes.push(n);let l=new a.QCA(s,{depth:i,steps:32,curveSegments:o,bevelEnabled:!1});return l.center(),l};function b(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:15,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:25,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.2,s=arguments.length>4?arguments[4]:void 0;const n=new a.ypk;n.moveTo(-e/2+o,-t/2),n.lineTo(e/2-o,-t/2),n.quadraticCurveTo(e/2,-t/2,e/2,-t/2+o),n.lineTo(e/2,t/2-o),n.quadraticCurveTo(e/2,t/2,e/2-o,t/2),n.lineTo(-e/2+o,t/2),n.quadraticCurveTo(-e/2,t/2,-e/2,t/2-o),n.lineTo(-e/2,-t/2+o),n.quadraticCurveTo(-e/2,-t/2,-e/2+o,-t/2);const l={depth:i,bevelEnabled:!0,bevelThickness:o,bevelSize:o,bevelSegments:s},r=new a.QCA(n,l);return r.center(),r}function T(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:15,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:25,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.2,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,n=arguments.length>5?arguments[5]:void 0;const l=new a.ypk;l.moveTo(-e/2+s,-t/2),l.lineTo(e/2-s,-t/2),l.quadraticCurveTo(e/2,-t/2,e/2,-t/2+s),l.lineTo(e/2,t/2-s),l.quadraticCurveTo(e/2,t/2,e/2-s,t/2),l.lineTo(-e/2+s,t/2),l.quadraticCurveTo(-e/2,t/2,-e/2,t/2-s),l.lineTo(-e/2,-t/2+s),l.quadraticCurveTo(-e/2,-t/2,-e/2+s,-t/2);const r={depth:i,bevelEnabled:!0,bevelThickness:o,bevelSize:o,bevelSegments:n,bevelOffset:0},d=new a.QCA(l,r);return d.center(),d}function S(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:15,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:25,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.2,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,n=arguments.length>5?arguments[5]:void 0;const l=new a.ypk;l.moveTo(-e/2+s,-t/2),l.lineTo(e/2-s,-t/2),l.quadraticCurveTo(e/2,-t/2,e/2,-t/2+s),l.lineTo(e/2,t/2-s),l.quadraticCurveTo(e/2,t/2,e/2-s,t/2),l.lineTo(-e/2+s,t/2),l.quadraticCurveTo(-e/2,t/2,-e/2,t/2-s),l.lineTo(-e/2,-t/2+s),l.quadraticCurveTo(-e/2,-t/2,-e/2+s,-t/2);let r=t/2-1,d=new a.wAk;d.moveTo(-2,r),d.absarc(0,r-.5,1,5*Math.PI/6,Math.PI/6,!0),d.lineTo(2,r),d.arc(0,-1,1,Math.PI/2,-Math.PI/2,!0),d.lineTo(-2,r-2),d.arc(0,1,1,-Math.PI/2,Math.PI/2,!0),d.closePath(),l.holes.push(d);const h={depth:i,bevelEnabled:!0,bevelThickness:o,bevelSize:o,bevelSegments:n,bevelOffset:0},c=new a.QCA(l,h);return c.center(),c}function C(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:15,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:25,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,n=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;const l=new a.ypk;l.moveTo(-e/2+n,-t/2),l.lineTo(e/2-n,-t/2),l.quadraticCurveTo(e/2,-t/2,e/2,-t/2+n),l.lineTo(e/2,t/2-n),l.quadraticCurveTo(e/2,t/2,e/2-n,t/2),l.lineTo(-e/2+n,t/2),l.quadraticCurveTo(-e/2,t/2,-e/2,t/2-n),l.lineTo(-e/2,-t/2+n),l.quadraticCurveTo(-e/2,-t/2,-e/2+n,-t/2),l.closePath();let r=e-2*o,d=t-2*o;const h=new a.wAk;h.moveTo(-r/2,-d/2),h.lineTo(r/2,-d/2),h.lineTo(r/2,d/2),h.lineTo(-r/2,d/2),h.lineTo(-r/2,-d/2),l.holes.push(h);const c={depth:i,bevelEnabled:!0,bevelThickness:s,bevelSize:s,bevelSegments:8},u=new a.QCA(l,c);return u.center(),u}function x(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:15,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:25,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,n=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;const l=new a.ypk;l.moveTo(-e/2+n,-t/2),l.lineTo(e/2-n,-t/2),l.quadraticCurveTo(e/2,-t/2,e/2,-t/2+n),l.lineTo(e/2,t/2-n),l.quadraticCurveTo(e/2,t/2,e/2-n,t/2),l.lineTo(-e/2+n,t/2),l.quadraticCurveTo(-e/2,t/2,-e/2,t/2-n),l.lineTo(-e/2,-t/2+n),l.quadraticCurveTo(-e/2,-t/2,-e/2+n,-t/2),l.closePath();let r=e-2*o,d=t-2*o;const h=new a.wAk;h.moveTo(-r/2+n,-d/2),h.lineTo(r/2-n,-d/2),h.quadraticCurveTo(r/2,-d/2,r/2,-d/2+n),h.lineTo(r/2,d/2-n),h.quadraticCurveTo(r/2,d/2,r/2-n,d/2),h.lineTo(-r/2+n,d/2),h.quadraticCurveTo(-r/2,d/2,-r/2,d/2-n),h.lineTo(-r/2,-d/2+n),h.quadraticCurveTo(-r/2,-d/2,-r/2+n,-d/2),h.closePath(),l.holes.push(h);const c={depth:i,bevelEnabled:!0,bevelThickness:s,bevelSize:s,bevelSegments:8},u=new a.QCA(l,c);return u.center(),u}function y(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:15,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:25,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;const s=new a.ypk;s.moveTo(-e/2+o,-t/2),s.lineTo(e/2-o,-t/2),s.quadraticCurveTo(e/2,-t/2,e/2,-t/2+o),s.lineTo(e/2,t/2-o),s.quadraticCurveTo(e/2,t/2,e/2-o,t/2),s.lineTo(-e/2+o,t/2),s.quadraticCurveTo(-e/2,t/2,-e/2,t/2-o),s.lineTo(-e/2,-t/2+o),s.quadraticCurveTo(-e/2,-t/2,-e/2+o,-t/2),s.closePath();let n=e-2*i,l=t-2*i;const r=new a.wAk;r.moveTo(-n/2+o,-l/2),r.lineTo(n/2-o,-l/2),r.quadraticCurveTo(n/2,-l/2,n/2,-l/2+o),r.lineTo(n/2,l/2-o),r.quadraticCurveTo(n/2,l/2,n/2-o,l/2),r.lineTo(-n/2+o,l/2),r.quadraticCurveTo(-n/2,l/2,-n/2,l/2-o),r.lineTo(-n/2,-l/2+o),r.quadraticCurveTo(-n/2,-l/2,-n/2+o,-l/2),r.closePath(),s.holes.push(r);new a.QCA(s,{steps:1,depth:0,bevelEnabled:!1});new a.QCA(r,{steps:1,depth:2,bevelEnabled:!1}).translate(0,0,0)}var M=i(964);function P(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:15,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:25,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,s=new a.eaF(new a.iNn(e+2*o,t+2*o,i+o)),n=new a.eaF(new a.iNn(e,t,i));s.position.z=o/2,s.updateMatrix(),n.updateMatrix();const l=M.w.subtract(s,n);return l.geometry.center(),l}function F(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:15,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:25,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:.2,n=new a.eaF(new a.iNn(e+2*o,t,o)),l=new a.eaF(new a.iNn(o,t,i)),r=new a.eaF(new a.iNn(o,t,i));new a.Ho_(s,s,t,8);l.position.set(-e/2-o/2,0,-i/2-o/2),r.position.set(e/2+o/2,0,-i/2-o/2),n.updateMatrix(),l.updateMatrix(),r.updateMatrix();let d=M.w.fromMesh(n).union(M.w.fromMesh(r)).union(M.w.fromMesh(l));return d=M.w.toMesh(d,new a.kn4),d.geometry.center(),d}const O={...n,...l}},418:()=>{},342:()=>{},146:(e,t,i)=>{e.exports=i.p+"static/media/space-ship1.dc0ee38a50c464bb7d8d.glb"},900:(e,t,i)=>{e.exports=i.p+"static/media/metal_plate.62931c04528b08cc0d8b.jpg"}}]);
//# sourceMappingURL=414.5d033278.chunk.js.map