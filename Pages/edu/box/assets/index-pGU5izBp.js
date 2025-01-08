(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const f of o.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&n(f)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fo="163",tr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},nr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Tu=0,Lo=1,bu=2,cl=1,Au=2,ni=3,Si=0,pn=1,fn=2,xi=0,Sr=1,Do=2,Uo=3,No=4,wu=5,Hi=100,Cu=101,Ru=102,Pu=103,Lu=104,Du=200,Uu=201,Nu=202,Iu=203,io=204,ro=205,Ou=206,Fu=207,Bu=208,zu=209,Hu=210,ku=211,Vu=212,Gu=213,Wu=214,Xu=0,qu=1,ju=2,Ws=3,Yu=4,$u=5,Ku=6,Zu=7,ll=0,Ju=1,Qu=2,Mi=0,ef=1,tf=2,nf=3,rf=4,sf=5,af=6,of=7,ul=300,Cr=301,Rr=302,so=303,ao=304,Zs=306,oo=1e3,Vi=1001,co=1002,Tn=1003,cf=1004,ms=1005,Ln=1006,Ea=1007,Gi=1008,yi=1009,lf=1010,uf=1011,fl=1012,hl=1013,Pr=1014,vi=1015,Xs=1016,dl=1017,pl=1018,ts=1020,ff=35902,hf=1021,df=1022,Xn=1023,pf=1024,mf=1025,Er=1026,Qr=1027,gf=1028,ml=1029,_f=1030,gl=1031,_l=1033,Ta=33776,ba=33777,Aa=33778,wa=33779,Io=35840,Oo=35841,Fo=35842,Bo=35843,vl=36196,zo=37492,Ho=37496,ko=37808,Vo=37809,Go=37810,Wo=37811,Xo=37812,qo=37813,jo=37814,Yo=37815,$o=37816,Ko=37817,Zo=37818,Jo=37819,Qo=37820,ec=37821,Ca=36492,tc=36494,nc=36495,vf=36283,ic=36284,rc=36285,sc=36286,xf=3200,Mf=3201,yf=0,Sf=1,_i="",Gn="srgb",Ti="srgb-linear",ho="display-p3",Js="display-p3-linear",qs="linear",Ut="srgb",js="rec709",Ys="p3",ir=7680,ac=519,Ef=512,Tf=513,bf=514,xl=515,Af=516,wf=517,Cf=518,Rf=519,oc=35044,cc="300 es",ii=2e3,$s=2001;class $i{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const o=s.indexOf(t);o!==-1&&s.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let o=0,f=s.length;o<f;o++)s[o].call(this,e);e.target=null}}}const en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let lc=1234567;const Tr=Math.PI/180,es=180/Math.PI;function Nr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]+"-"+en[e&255]+en[e>>8&255]+"-"+en[e>>16&15|64]+en[e>>24&255]+"-"+en[t&63|128]+en[t>>8&255]+"-"+en[t>>16&255]+en[t>>24&255]+en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]).toLowerCase()}function rn(i,e,t){return Math.max(e,Math.min(t,i))}function po(i,e){return(i%e+e)%e}function Pf(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Lf(i,e,t){return i!==e?(t-i)/(e-i):0}function Kr(i,e,t){return(1-t)*i+t*e}function Df(i,e,t,n){return Kr(i,e,1-Math.exp(-t*n))}function Uf(i,e=1){return e-Math.abs(po(i,e*2)-e)}function Nf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function If(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Of(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Ff(i,e){return i+Math.random()*(e-i)}function Bf(i){return i*(.5-Math.random())}function zf(i){i!==void 0&&(lc=i);let e=lc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Hf(i){return i*Tr}function kf(i){return i*es}function Vf(i){return(i&i-1)===0&&i!==0}function Gf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Wf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Xf(i,e,t,n,s){const o=Math.cos,f=Math.sin,u=o(t/2),d=f(t/2),p=o((e+n)/2),g=f((e+n)/2),y=o((e-n)/2),M=f((e-n)/2),E=o((n-e)/2),A=f((n-e)/2);switch(s){case"XYX":i.set(u*g,d*y,d*M,u*p);break;case"YZY":i.set(d*M,u*g,d*y,u*p);break;case"ZXZ":i.set(d*y,d*M,u*g,u*p);break;case"XZX":i.set(u*g,d*A,d*E,u*p);break;case"YXY":i.set(d*E,u*g,d*A,u*p);break;case"ZYZ":i.set(d*A,d*E,u*g,u*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Mr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ln(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const qf={DEG2RAD:Tr,RAD2DEG:es,generateUUID:Nr,clamp:rn,euclideanModulo:po,mapLinear:Pf,inverseLerp:Lf,lerp:Kr,damp:Df,pingpong:Uf,smoothstep:Nf,smootherstep:If,randInt:Of,randFloat:Ff,randFloatSpread:Bf,seededRandom:zf,degToRad:Hf,radToDeg:kf,isPowerOfTwo:Vf,ceilPowerOfTwo:Gf,floorPowerOfTwo:Wf,setQuaternionFromProperEuler:Xf,normalize:ln,denormalize:Mr};class st{constructor(e=0,t=0){st.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(rn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),o=this.x-e.x,f=this.y-e.y;return this.x=o*n-f*s+e.x,this.y=o*s+f*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ht{constructor(e,t,n,s,o,f,u,d,p){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,o,f,u,d,p)}set(e,t,n,s,o,f,u,d,p){const g=this.elements;return g[0]=e,g[1]=s,g[2]=u,g[3]=t,g[4]=o,g[5]=d,g[6]=n,g[7]=f,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,o=this.elements,f=n[0],u=n[3],d=n[6],p=n[1],g=n[4],y=n[7],M=n[2],E=n[5],A=n[8],w=s[0],_=s[3],m=s[6],O=s[1],R=s[4],B=s[7],$=s[2],H=s[5],c=s[8];return o[0]=f*w+u*O+d*$,o[3]=f*_+u*R+d*H,o[6]=f*m+u*B+d*c,o[1]=p*w+g*O+y*$,o[4]=p*_+g*R+y*H,o[7]=p*m+g*B+y*c,o[2]=M*w+E*O+A*$,o[5]=M*_+E*R+A*H,o[8]=M*m+E*B+A*c,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],f=e[4],u=e[5],d=e[6],p=e[7],g=e[8];return t*f*g-t*u*p-n*o*g+n*u*d+s*o*p-s*f*d}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],f=e[4],u=e[5],d=e[6],p=e[7],g=e[8],y=g*f-u*p,M=u*d-g*o,E=p*o-f*d,A=t*y+n*M+s*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=y*w,e[1]=(s*p-g*n)*w,e[2]=(u*n-s*f)*w,e[3]=M*w,e[4]=(g*t-s*d)*w,e[5]=(s*o-u*t)*w,e[6]=E*w,e[7]=(n*d-p*t)*w,e[8]=(f*t-n*o)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,o,f,u){const d=Math.cos(o),p=Math.sin(o);return this.set(n*d,n*p,-n*(d*f+p*u)+f+e,-s*p,s*d,-s*(-p*f+d*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(Ra.makeScale(e,t)),this}rotate(e){return this.premultiply(Ra.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ra.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ra=new ht;function Ml(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ks(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function jf(){const i=Ks("canvas");return i.style.display="block",i}const uc={};function Yf(i){i in uc||(uc[i]=!0,console.warn(i))}const fc=new ht().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),hc=new ht().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),gs={[Ti]:{transfer:qs,primaries:js,toReference:i=>i,fromReference:i=>i},[Gn]:{transfer:Ut,primaries:js,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Js]:{transfer:qs,primaries:Ys,toReference:i=>i.applyMatrix3(hc),fromReference:i=>i.applyMatrix3(fc)},[ho]:{transfer:Ut,primaries:Ys,toReference:i=>i.convertSRGBToLinear().applyMatrix3(hc),fromReference:i=>i.applyMatrix3(fc).convertLinearToSRGB()}},$f=new Set([Ti,Js]),Rt={enabled:!0,_workingColorSpace:Ti,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!$f.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=gs[e].toReference,s=gs[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return gs[i].primaries},getTransfer:function(i){return i===_i?qs:gs[i].transfer}};function br(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Pa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let rr;class Kf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{rr===void 0&&(rr=Ks("canvas")),rr.width=e.width,rr.height=e.height;const n=rr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=rr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ks("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),o=s.data;for(let f=0;f<o.length;f++)o[f]=br(o[f]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(br(t[n]/255)*255):t[n]=br(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Zf=0;class yl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zf++}),this.uuid=Nr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let f=0,u=s.length;f<u;f++)s[f].isDataTexture?o.push(La(s[f].image)):o.push(La(s[f]))}else o=La(s);n.url=o}return t||(e.images[this.uuid]=n),n}}function La(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Kf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Jf=0;class mn extends $i{constructor(e=mn.DEFAULT_IMAGE,t=mn.DEFAULT_MAPPING,n=Vi,s=Vi,o=Ln,f=Gi,u=Xn,d=yi,p=mn.DEFAULT_ANISOTROPY,g=_i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jf++}),this.uuid=Nr(),this.name="",this.source=new yl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=f,this.anisotropy=p,this.format=u,this.internalFormat=null,this.type=d,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ul)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case oo:e.x=e.x-Math.floor(e.x);break;case Vi:e.x=e.x<0?0:1;break;case co:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case oo:e.y=e.y-Math.floor(e.y);break;case Vi:e.y=e.y<0?0:1;break;case co:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=ul;mn.DEFAULT_ANISOTROPY=1;class Zt{constructor(e=0,t=0,n=0,s=1){Zt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,o=this.w,f=e.elements;return this.x=f[0]*t+f[4]*n+f[8]*s+f[12]*o,this.y=f[1]*t+f[5]*n+f[9]*s+f[13]*o,this.z=f[2]*t+f[6]*n+f[10]*s+f[14]*o,this.w=f[3]*t+f[7]*n+f[11]*s+f[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,o;const d=e.elements,p=d[0],g=d[4],y=d[8],M=d[1],E=d[5],A=d[9],w=d[2],_=d[6],m=d[10];if(Math.abs(g-M)<.01&&Math.abs(y-w)<.01&&Math.abs(A-_)<.01){if(Math.abs(g+M)<.1&&Math.abs(y+w)<.1&&Math.abs(A+_)<.1&&Math.abs(p+E+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(p+1)/2,B=(E+1)/2,$=(m+1)/2,H=(g+M)/4,c=(y+w)/4,ee=(A+_)/4;return R>B&&R>$?R<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(R),s=H/n,o=c/n):B>$?B<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(B),n=H/s,o=ee/s):$<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt($),n=c/o,s=ee/o),this.set(n,s,o,t),this}let O=Math.sqrt((_-A)*(_-A)+(y-w)*(y-w)+(M-g)*(M-g));return Math.abs(O)<.001&&(O=1),this.x=(_-A)/O,this.y=(y-w)/O,this.z=(M-g)/O,this.w=Math.acos((p+E+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Qf extends $i{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Zt(0,0,e,t),this.scissorTest=!1,this.viewport=new Zt(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ln,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const o=new mn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const f=n.count;for(let u=0;u<f;u++)this.textures[u]=o.clone(),this.textures[u].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new yl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qi extends Qf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Sl extends mn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class eh extends mn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ji{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,o,f,u){let d=n[s+0],p=n[s+1],g=n[s+2],y=n[s+3];const M=o[f+0],E=o[f+1],A=o[f+2],w=o[f+3];if(u===0){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=y;return}if(u===1){e[t+0]=M,e[t+1]=E,e[t+2]=A,e[t+3]=w;return}if(y!==w||d!==M||p!==E||g!==A){let _=1-u;const m=d*M+p*E+g*A+y*w,O=m>=0?1:-1,R=1-m*m;if(R>Number.EPSILON){const $=Math.sqrt(R),H=Math.atan2($,m*O);_=Math.sin(_*H)/$,u=Math.sin(u*H)/$}const B=u*O;if(d=d*_+M*B,p=p*_+E*B,g=g*_+A*B,y=y*_+w*B,_===1-u){const $=1/Math.sqrt(d*d+p*p+g*g+y*y);d*=$,p*=$,g*=$,y*=$}}e[t]=d,e[t+1]=p,e[t+2]=g,e[t+3]=y}static multiplyQuaternionsFlat(e,t,n,s,o,f){const u=n[s],d=n[s+1],p=n[s+2],g=n[s+3],y=o[f],M=o[f+1],E=o[f+2],A=o[f+3];return e[t]=u*A+g*y+d*E-p*M,e[t+1]=d*A+g*M+p*y-u*E,e[t+2]=p*A+g*E+u*M-d*y,e[t+3]=g*A-u*y-d*M-p*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,o=e._z,f=e._order,u=Math.cos,d=Math.sin,p=u(n/2),g=u(s/2),y=u(o/2),M=d(n/2),E=d(s/2),A=d(o/2);switch(f){case"XYZ":this._x=M*g*y+p*E*A,this._y=p*E*y-M*g*A,this._z=p*g*A+M*E*y,this._w=p*g*y-M*E*A;break;case"YXZ":this._x=M*g*y+p*E*A,this._y=p*E*y-M*g*A,this._z=p*g*A-M*E*y,this._w=p*g*y+M*E*A;break;case"ZXY":this._x=M*g*y-p*E*A,this._y=p*E*y+M*g*A,this._z=p*g*A+M*E*y,this._w=p*g*y-M*E*A;break;case"ZYX":this._x=M*g*y-p*E*A,this._y=p*E*y+M*g*A,this._z=p*g*A-M*E*y,this._w=p*g*y+M*E*A;break;case"YZX":this._x=M*g*y+p*E*A,this._y=p*E*y+M*g*A,this._z=p*g*A-M*E*y,this._w=p*g*y-M*E*A;break;case"XZY":this._x=M*g*y-p*E*A,this._y=p*E*y-M*g*A,this._z=p*g*A+M*E*y,this._w=p*g*y+M*E*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],o=t[8],f=t[1],u=t[5],d=t[9],p=t[2],g=t[6],y=t[10],M=n+u+y;if(M>0){const E=.5/Math.sqrt(M+1);this._w=.25/E,this._x=(g-d)*E,this._y=(o-p)*E,this._z=(f-s)*E}else if(n>u&&n>y){const E=2*Math.sqrt(1+n-u-y);this._w=(g-d)/E,this._x=.25*E,this._y=(s+f)/E,this._z=(o+p)/E}else if(u>y){const E=2*Math.sqrt(1+u-n-y);this._w=(o-p)/E,this._x=(s+f)/E,this._y=.25*E,this._z=(d+g)/E}else{const E=2*Math.sqrt(1+y-n-u);this._w=(f-s)/E,this._x=(o+p)/E,this._y=(d+g)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,o=e._z,f=e._w,u=t._x,d=t._y,p=t._z,g=t._w;return this._x=n*g+f*u+s*p-o*d,this._y=s*g+f*d+o*u-n*p,this._z=o*g+f*p+n*d-s*u,this._w=f*g-n*u-s*d-o*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,o=this._z,f=this._w;let u=f*e._w+n*e._x+s*e._y+o*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=f,this._x=n,this._y=s,this._z=o,this;const d=1-u*u;if(d<=Number.EPSILON){const E=1-t;return this._w=E*f+t*this._w,this._x=E*n+t*this._x,this._y=E*s+t*this._y,this._z=E*o+t*this._z,this.normalize(),this}const p=Math.sqrt(d),g=Math.atan2(p,u),y=Math.sin((1-t)*g)/p,M=Math.sin(t*g)/p;return this._w=f*y+this._w*M,this._x=n*y+this._x*M,this._y=s*y+this._y*M,this._z=o*y+this._z*M,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,t=0,n=0){G.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(dc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(dc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*s,this.y=o[1]*t+o[4]*n+o[7]*s,this.z=o[2]*t+o[5]*n+o[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,o=e.elements,f=1/(o[3]*t+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*s+o[12])*f,this.y=(o[1]*t+o[5]*n+o[9]*s+o[13])*f,this.z=(o[2]*t+o[6]*n+o[10]*s+o[14])*f,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,o=e.x,f=e.y,u=e.z,d=e.w,p=2*(f*s-u*n),g=2*(u*t-o*s),y=2*(o*n-f*t);return this.x=t+d*p+f*y-u*g,this.y=n+d*g+u*p-o*y,this.z=s+d*y+o*g-f*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s,this.y=o[1]*t+o[5]*n+o[9]*s,this.z=o[2]*t+o[6]*n+o[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,o=e.z,f=t.x,u=t.y,d=t.z;return this.x=s*d-o*u,this.y=o*f-n*d,this.z=n*u-s*f,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Da.copy(this).projectOnVector(e),this.sub(Da)}reflect(e){return this.sub(Da.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(rn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Da=new G,dc=new ji;class ns{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let f=0,u=o.count;f<u;f++)e.isMesh===!0?e.getVertexPosition(f,Cn):Cn.fromBufferAttribute(o,f),Cn.applyMatrix4(e.matrixWorld),this.expandByPoint(Cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_s.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_s.copy(n.boundingBox)),_s.applyMatrix4(e.matrixWorld),this.union(_s)}const s=e.children;for(let o=0,f=s.length;o<f;o++)this.expandByObject(s[o],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Cn),Cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xr),vs.subVectors(this.max,Xr),sr.subVectors(e.a,Xr),ar.subVectors(e.b,Xr),or.subVectors(e.c,Xr),ui.subVectors(ar,sr),fi.subVectors(or,ar),Li.subVectors(sr,or);let t=[0,-ui.z,ui.y,0,-fi.z,fi.y,0,-Li.z,Li.y,ui.z,0,-ui.x,fi.z,0,-fi.x,Li.z,0,-Li.x,-ui.y,ui.x,0,-fi.y,fi.x,0,-Li.y,Li.x,0];return!Ua(t,sr,ar,or,vs)||(t=[1,0,0,0,1,0,0,0,1],!Ua(t,sr,ar,or,vs))?!1:(xs.crossVectors(ui,fi),t=[xs.x,xs.y,xs.z],Ua(t,sr,ar,or,vs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Zn=[new G,new G,new G,new G,new G,new G,new G,new G],Cn=new G,_s=new ns,sr=new G,ar=new G,or=new G,ui=new G,fi=new G,Li=new G,Xr=new G,vs=new G,xs=new G,Di=new G;function Ua(i,e,t,n,s){for(let o=0,f=i.length-3;o<=f;o+=3){Di.fromArray(i,o);const u=s.x*Math.abs(Di.x)+s.y*Math.abs(Di.y)+s.z*Math.abs(Di.z),d=e.dot(Di),p=t.dot(Di),g=n.dot(Di);if(Math.max(-Math.max(d,p,g),Math.min(d,p,g))>u)return!1}return!0}const th=new ns,qr=new G,Na=new G;class Qs{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):th.setFromPoints(e).getCenter(n);let s=0;for(let o=0,f=e.length;o<f;o++)s=Math.max(s,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qr.subVectors(e,this.center);const t=qr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(qr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Na.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qr.copy(e.center).add(Na)),this.expandByPoint(qr.copy(e.center).sub(Na))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Jn=new G,Ia=new G,Ms=new G,hi=new G,Oa=new G,ys=new G,Fa=new G;class ea{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Jn.copy(this.origin).addScaledVector(this.direction,t),Jn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ia.copy(e).add(t).multiplyScalar(.5),Ms.copy(t).sub(e).normalize(),hi.copy(this.origin).sub(Ia);const o=e.distanceTo(t)*.5,f=-this.direction.dot(Ms),u=hi.dot(this.direction),d=-hi.dot(Ms),p=hi.lengthSq(),g=Math.abs(1-f*f);let y,M,E,A;if(g>0)if(y=f*d-u,M=f*u-d,A=o*g,y>=0)if(M>=-A)if(M<=A){const w=1/g;y*=w,M*=w,E=y*(y+f*M+2*u)+M*(f*y+M+2*d)+p}else M=o,y=Math.max(0,-(f*M+u)),E=-y*y+M*(M+2*d)+p;else M=-o,y=Math.max(0,-(f*M+u)),E=-y*y+M*(M+2*d)+p;else M<=-A?(y=Math.max(0,-(-f*o+u)),M=y>0?-o:Math.min(Math.max(-o,-d),o),E=-y*y+M*(M+2*d)+p):M<=A?(y=0,M=Math.min(Math.max(-o,-d),o),E=M*(M+2*d)+p):(y=Math.max(0,-(f*o+u)),M=y>0?o:Math.min(Math.max(-o,-d),o),E=-y*y+M*(M+2*d)+p);else M=f>0?-o:o,y=Math.max(0,-(f*M+u)),E=-y*y+M*(M+2*d)+p;return n&&n.copy(this.origin).addScaledVector(this.direction,y),s&&s.copy(Ia).addScaledVector(Ms,M),E}intersectSphere(e,t){Jn.subVectors(e.center,this.origin);const n=Jn.dot(this.direction),s=Jn.dot(Jn)-n*n,o=e.radius*e.radius;if(s>o)return null;const f=Math.sqrt(o-s),u=n-f,d=n+f;return d<0?null:u<0?this.at(d,t):this.at(u,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,o,f,u,d;const p=1/this.direction.x,g=1/this.direction.y,y=1/this.direction.z,M=this.origin;return p>=0?(n=(e.min.x-M.x)*p,s=(e.max.x-M.x)*p):(n=(e.max.x-M.x)*p,s=(e.min.x-M.x)*p),g>=0?(o=(e.min.y-M.y)*g,f=(e.max.y-M.y)*g):(o=(e.max.y-M.y)*g,f=(e.min.y-M.y)*g),n>f||o>s||((o>n||isNaN(n))&&(n=o),(f<s||isNaN(s))&&(s=f),y>=0?(u=(e.min.z-M.z)*y,d=(e.max.z-M.z)*y):(u=(e.max.z-M.z)*y,d=(e.min.z-M.z)*y),n>d||u>s)||((u>n||n!==n)&&(n=u),(d<s||s!==s)&&(s=d),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Jn)!==null}intersectTriangle(e,t,n,s,o){Oa.subVectors(t,e),ys.subVectors(n,e),Fa.crossVectors(Oa,ys);let f=this.direction.dot(Fa),u;if(f>0){if(s)return null;u=1}else if(f<0)u=-1,f=-f;else return null;hi.subVectors(this.origin,e);const d=u*this.direction.dot(ys.crossVectors(hi,ys));if(d<0)return null;const p=u*this.direction.dot(Oa.cross(hi));if(p<0||d+p>f)return null;const g=-u*hi.dot(Fa);return g<0?null:this.at(g/f,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class zt{constructor(e,t,n,s,o,f,u,d,p,g,y,M,E,A,w,_){zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,o,f,u,d,p,g,y,M,E,A,w,_)}set(e,t,n,s,o,f,u,d,p,g,y,M,E,A,w,_){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=o,m[5]=f,m[9]=u,m[13]=d,m[2]=p,m[6]=g,m[10]=y,m[14]=M,m[3]=E,m[7]=A,m[11]=w,m[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new zt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/cr.setFromMatrixColumn(e,0).length(),o=1/cr.setFromMatrixColumn(e,1).length(),f=1/cr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*f,t[9]=n[9]*f,t[10]=n[10]*f,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,o=e.z,f=Math.cos(n),u=Math.sin(n),d=Math.cos(s),p=Math.sin(s),g=Math.cos(o),y=Math.sin(o);if(e.order==="XYZ"){const M=f*g,E=f*y,A=u*g,w=u*y;t[0]=d*g,t[4]=-d*y,t[8]=p,t[1]=E+A*p,t[5]=M-w*p,t[9]=-u*d,t[2]=w-M*p,t[6]=A+E*p,t[10]=f*d}else if(e.order==="YXZ"){const M=d*g,E=d*y,A=p*g,w=p*y;t[0]=M+w*u,t[4]=A*u-E,t[8]=f*p,t[1]=f*y,t[5]=f*g,t[9]=-u,t[2]=E*u-A,t[6]=w+M*u,t[10]=f*d}else if(e.order==="ZXY"){const M=d*g,E=d*y,A=p*g,w=p*y;t[0]=M-w*u,t[4]=-f*y,t[8]=A+E*u,t[1]=E+A*u,t[5]=f*g,t[9]=w-M*u,t[2]=-f*p,t[6]=u,t[10]=f*d}else if(e.order==="ZYX"){const M=f*g,E=f*y,A=u*g,w=u*y;t[0]=d*g,t[4]=A*p-E,t[8]=M*p+w,t[1]=d*y,t[5]=w*p+M,t[9]=E*p-A,t[2]=-p,t[6]=u*d,t[10]=f*d}else if(e.order==="YZX"){const M=f*d,E=f*p,A=u*d,w=u*p;t[0]=d*g,t[4]=w-M*y,t[8]=A*y+E,t[1]=y,t[5]=f*g,t[9]=-u*g,t[2]=-p*g,t[6]=E*y+A,t[10]=M-w*y}else if(e.order==="XZY"){const M=f*d,E=f*p,A=u*d,w=u*p;t[0]=d*g,t[4]=-y,t[8]=p*g,t[1]=M*y+w,t[5]=f*g,t[9]=E*y-A,t[2]=A*y-E,t[6]=u*g,t[10]=w*y+M}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nh,e,ih)}lookAt(e,t,n){const s=this.elements;return gn.subVectors(e,t),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),di.crossVectors(n,gn),di.lengthSq()===0&&(Math.abs(n.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),di.crossVectors(n,gn)),di.normalize(),Ss.crossVectors(gn,di),s[0]=di.x,s[4]=Ss.x,s[8]=gn.x,s[1]=di.y,s[5]=Ss.y,s[9]=gn.y,s[2]=di.z,s[6]=Ss.z,s[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,o=this.elements,f=n[0],u=n[4],d=n[8],p=n[12],g=n[1],y=n[5],M=n[9],E=n[13],A=n[2],w=n[6],_=n[10],m=n[14],O=n[3],R=n[7],B=n[11],$=n[15],H=s[0],c=s[4],ee=s[8],P=s[12],C=s[1],j=s[5],ce=s[9],F=s[13],le=s[2],ue=s[6],xe=s[10],me=s[14],ie=s[3],ve=s[7],Me=s[11],Oe=s[15];return o[0]=f*H+u*C+d*le+p*ie,o[4]=f*c+u*j+d*ue+p*ve,o[8]=f*ee+u*ce+d*xe+p*Me,o[12]=f*P+u*F+d*me+p*Oe,o[1]=g*H+y*C+M*le+E*ie,o[5]=g*c+y*j+M*ue+E*ve,o[9]=g*ee+y*ce+M*xe+E*Me,o[13]=g*P+y*F+M*me+E*Oe,o[2]=A*H+w*C+_*le+m*ie,o[6]=A*c+w*j+_*ue+m*ve,o[10]=A*ee+w*ce+_*xe+m*Me,o[14]=A*P+w*F+_*me+m*Oe,o[3]=O*H+R*C+B*le+$*ie,o[7]=O*c+R*j+B*ue+$*ve,o[11]=O*ee+R*ce+B*xe+$*Me,o[15]=O*P+R*F+B*me+$*Oe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],o=e[12],f=e[1],u=e[5],d=e[9],p=e[13],g=e[2],y=e[6],M=e[10],E=e[14],A=e[3],w=e[7],_=e[11],m=e[15];return A*(+o*d*y-s*p*y-o*u*M+n*p*M+s*u*E-n*d*E)+w*(+t*d*E-t*p*M+o*f*M-s*f*E+s*p*g-o*d*g)+_*(+t*p*y-t*u*E-o*f*y+n*f*E+o*u*g-n*p*g)+m*(-s*u*g-t*d*y+t*u*M+s*f*y-n*f*M+n*d*g)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],f=e[4],u=e[5],d=e[6],p=e[7],g=e[8],y=e[9],M=e[10],E=e[11],A=e[12],w=e[13],_=e[14],m=e[15],O=y*_*p-w*M*p+w*d*E-u*_*E-y*d*m+u*M*m,R=A*M*p-g*_*p-A*d*E+f*_*E+g*d*m-f*M*m,B=g*w*p-A*y*p+A*u*E-f*w*E-g*u*m+f*y*m,$=A*y*d-g*w*d-A*u*M+f*w*M+g*u*_-f*y*_,H=t*O+n*R+s*B+o*$;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const c=1/H;return e[0]=O*c,e[1]=(w*M*o-y*_*o-w*s*E+n*_*E+y*s*m-n*M*m)*c,e[2]=(u*_*o-w*d*o+w*s*p-n*_*p-u*s*m+n*d*m)*c,e[3]=(y*d*o-u*M*o-y*s*p+n*M*p+u*s*E-n*d*E)*c,e[4]=R*c,e[5]=(g*_*o-A*M*o+A*s*E-t*_*E-g*s*m+t*M*m)*c,e[6]=(A*d*o-f*_*o-A*s*p+t*_*p+f*s*m-t*d*m)*c,e[7]=(f*M*o-g*d*o+g*s*p-t*M*p-f*s*E+t*d*E)*c,e[8]=B*c,e[9]=(A*y*o-g*w*o-A*n*E+t*w*E+g*n*m-t*y*m)*c,e[10]=(f*w*o-A*u*o+A*n*p-t*w*p-f*n*m+t*u*m)*c,e[11]=(g*u*o-f*y*o-g*n*p+t*y*p+f*n*E-t*u*E)*c,e[12]=$*c,e[13]=(g*w*s-A*y*s+A*n*M-t*w*M-g*n*_+t*y*_)*c,e[14]=(A*u*s-f*w*s-A*n*d+t*w*d+f*n*_-t*u*_)*c,e[15]=(f*y*s-g*u*s+g*n*d-t*y*d-f*n*M+t*u*M)*c,this}scale(e){const t=this.elements,n=e.x,s=e.y,o=e.z;return t[0]*=n,t[4]*=s,t[8]*=o,t[1]*=n,t[5]*=s,t[9]*=o,t[2]*=n,t[6]*=s,t[10]*=o,t[3]*=n,t[7]*=s,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),o=1-n,f=e.x,u=e.y,d=e.z,p=o*f,g=o*u;return this.set(p*f+n,p*u-s*d,p*d+s*u,0,p*u+s*d,g*u+n,g*d-s*f,0,p*d-s*u,g*d+s*f,o*d*d+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,o,f){return this.set(1,n,o,0,e,1,f,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,o=t._x,f=t._y,u=t._z,d=t._w,p=o+o,g=f+f,y=u+u,M=o*p,E=o*g,A=o*y,w=f*g,_=f*y,m=u*y,O=d*p,R=d*g,B=d*y,$=n.x,H=n.y,c=n.z;return s[0]=(1-(w+m))*$,s[1]=(E+B)*$,s[2]=(A-R)*$,s[3]=0,s[4]=(E-B)*H,s[5]=(1-(M+m))*H,s[6]=(_+O)*H,s[7]=0,s[8]=(A+R)*c,s[9]=(_-O)*c,s[10]=(1-(M+w))*c,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let o=cr.set(s[0],s[1],s[2]).length();const f=cr.set(s[4],s[5],s[6]).length(),u=cr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),e.x=s[12],e.y=s[13],e.z=s[14],Rn.copy(this);const p=1/o,g=1/f,y=1/u;return Rn.elements[0]*=p,Rn.elements[1]*=p,Rn.elements[2]*=p,Rn.elements[4]*=g,Rn.elements[5]*=g,Rn.elements[6]*=g,Rn.elements[8]*=y,Rn.elements[9]*=y,Rn.elements[10]*=y,t.setFromRotationMatrix(Rn),n.x=o,n.y=f,n.z=u,this}makePerspective(e,t,n,s,o,f,u=ii){const d=this.elements,p=2*o/(t-e),g=2*o/(n-s),y=(t+e)/(t-e),M=(n+s)/(n-s);let E,A;if(u===ii)E=-(f+o)/(f-o),A=-2*f*o/(f-o);else if(u===$s)E=-f/(f-o),A=-f*o/(f-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return d[0]=p,d[4]=0,d[8]=y,d[12]=0,d[1]=0,d[5]=g,d[9]=M,d[13]=0,d[2]=0,d[6]=0,d[10]=E,d[14]=A,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,n,s,o,f,u=ii){const d=this.elements,p=1/(t-e),g=1/(n-s),y=1/(f-o),M=(t+e)*p,E=(n+s)*g;let A,w;if(u===ii)A=(f+o)*y,w=-2*y;else if(u===$s)A=o*y,w=-1*y;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return d[0]=2*p,d[4]=0,d[8]=0,d[12]=-M,d[1]=0,d[5]=2*g,d[9]=0,d[13]=-E,d[2]=0,d[6]=0,d[10]=w,d[14]=-A,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const cr=new G,Rn=new zt,nh=new G(0,0,0),ih=new G(1,1,1),di=new G,Ss=new G,gn=new G,pc=new zt,mc=new ji;class Nn{constructor(e=0,t=0,n=0,s=Nn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,o=s[0],f=s[4],u=s[8],d=s[1],p=s[5],g=s[9],y=s[2],M=s[6],E=s[10];switch(t){case"XYZ":this._y=Math.asin(rn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-g,E),this._z=Math.atan2(-f,o)):(this._x=Math.atan2(M,p),this._z=0);break;case"YXZ":this._x=Math.asin(-rn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(u,E),this._z=Math.atan2(d,p)):(this._y=Math.atan2(-y,o),this._z=0);break;case"ZXY":this._x=Math.asin(rn(M,-1,1)),Math.abs(M)<.9999999?(this._y=Math.atan2(-y,E),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(d,o));break;case"ZYX":this._y=Math.asin(-rn(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(M,E),this._z=Math.atan2(d,o)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(rn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-y,o)):(this._x=0,this._y=Math.atan2(u,E));break;case"XZY":this._z=Math.asin(-rn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(M,p),this._y=Math.atan2(u,o)):(this._x=Math.atan2(-g,E),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return pc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return mc.setFromEuler(this),this.setFromQuaternion(mc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Nn.DEFAULT_ORDER="XYZ";class mo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let rh=0;const gc=new G,lr=new ji,Qn=new zt,Es=new G,jr=new G,sh=new G,ah=new ji,_c=new G(1,0,0),vc=new G(0,1,0),xc=new G(0,0,1),Mc={type:"added"},oh={type:"removed"},ur={type:"childadded",child:null},Ba={type:"childremoved",child:null};class Wt extends $i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rh++}),this.uuid=Nr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wt.DEFAULT_UP.clone();const e=new G,t=new Nn,n=new ji,s=new G(1,1,1);function o(){n.setFromEuler(t,!1)}function f(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new zt},normalMatrix:{value:new ht}}),this.matrix=new zt,this.matrixWorld=new zt,this.matrixAutoUpdate=Wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return lr.setFromAxisAngle(e,t),this.quaternion.multiply(lr),this}rotateOnWorldAxis(e,t){return lr.setFromAxisAngle(e,t),this.quaternion.premultiply(lr),this}rotateX(e){return this.rotateOnAxis(_c,e)}rotateY(e){return this.rotateOnAxis(vc,e)}rotateZ(e){return this.rotateOnAxis(xc,e)}translateOnAxis(e,t){return gc.copy(e).applyQuaternion(this.quaternion),this.position.add(gc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_c,e)}translateY(e){return this.translateOnAxis(vc,e)}translateZ(e){return this.translateOnAxis(xc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Es.copy(e):Es.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),jr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt(jr,Es,this.up):Qn.lookAt(Es,jr,this.up),this.quaternion.setFromRotationMatrix(Qn),s&&(Qn.extractRotation(s.matrixWorld),lr.setFromRotationMatrix(Qn),this.quaternion.premultiply(lr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Mc),ur.child=e,this.dispatchEvent(ur),ur.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(oh),Ba.child=e,this.dispatchEvent(Ba),Ba.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Mc),ur.child=e,this.dispatchEvent(ur),ur.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const f=this.children[n].getObjectByProperty(e,t);if(f!==void 0)return f}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let o=0,f=s.length;o<f;o++)s[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jr,e,sh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jr,ah,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++){const o=t[n];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let o=0,f=s.length;o<f;o++){const u=s[o];u.matrixWorldAutoUpdate===!0&&u.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(u=>({boxInitialized:u.boxInitialized,boxMin:u.box.min.toArray(),boxMax:u.box.max.toArray(),sphereInitialized:u.sphereInitialized,sphereRadius:u.sphere.radius,sphereCenter:u.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(u,d){return u[d.uuid]===void 0&&(u[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const d=u.shapes;if(Array.isArray(d))for(let p=0,g=d.length;p<g;p++){const y=d[p];o(e.shapes,y)}else o(e.shapes,d)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let d=0,p=this.material.length;d<p;d++)u.push(o(e.materials,this.material[d]));s.material=u}else s.material=o(e.materials,this.material);if(this.children.length>0){s.children=[];for(let u=0;u<this.children.length;u++)s.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let u=0;u<this.animations.length;u++){const d=this.animations[u];s.animations.push(o(e.animations,d))}}if(t){const u=f(e.geometries),d=f(e.materials),p=f(e.textures),g=f(e.images),y=f(e.shapes),M=f(e.skeletons),E=f(e.animations),A=f(e.nodes);u.length>0&&(n.geometries=u),d.length>0&&(n.materials=d),p.length>0&&(n.textures=p),g.length>0&&(n.images=g),y.length>0&&(n.shapes=y),M.length>0&&(n.skeletons=M),E.length>0&&(n.animations=E),A.length>0&&(n.nodes=A)}return n.object=s,n;function f(u){const d=[];for(const p in u){const g=u[p];delete g.metadata,d.push(g)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Wt.DEFAULT_UP=new G(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pn=new G,ei=new G,za=new G,ti=new G,fr=new G,hr=new G,yc=new G,Ha=new G,ka=new G,Va=new G;class Dn{constructor(e=new G,t=new G,n=new G){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Pn.subVectors(e,t),s.cross(Pn);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(e,t,n,s,o){Pn.subVectors(s,t),ei.subVectors(n,t),za.subVectors(e,t);const f=Pn.dot(Pn),u=Pn.dot(ei),d=Pn.dot(za),p=ei.dot(ei),g=ei.dot(za),y=f*p-u*u;if(y===0)return o.set(0,0,0),null;const M=1/y,E=(p*d-u*g)*M,A=(f*g-u*d)*M;return o.set(1-E-A,A,E)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getInterpolation(e,t,n,s,o,f,u,d){return this.getBarycoord(e,t,n,s,ti)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(o,ti.x),d.addScaledVector(f,ti.y),d.addScaledVector(u,ti.z),d)}static isFrontFacing(e,t,n,s){return Pn.subVectors(n,t),ei.subVectors(e,t),Pn.cross(ei).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),Pn.cross(ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Dn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,o){return Dn.getInterpolation(e,this.a,this.b,this.c,t,n,s,o)}containsPoint(e){return Dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,o=this.c;let f,u;fr.subVectors(s,n),hr.subVectors(o,n),Ha.subVectors(e,n);const d=fr.dot(Ha),p=hr.dot(Ha);if(d<=0&&p<=0)return t.copy(n);ka.subVectors(e,s);const g=fr.dot(ka),y=hr.dot(ka);if(g>=0&&y<=g)return t.copy(s);const M=d*y-g*p;if(M<=0&&d>=0&&g<=0)return f=d/(d-g),t.copy(n).addScaledVector(fr,f);Va.subVectors(e,o);const E=fr.dot(Va),A=hr.dot(Va);if(A>=0&&E<=A)return t.copy(o);const w=E*p-d*A;if(w<=0&&p>=0&&A<=0)return u=p/(p-A),t.copy(n).addScaledVector(hr,u);const _=g*A-E*y;if(_<=0&&y-g>=0&&E-A>=0)return yc.subVectors(o,s),u=(y-g)/(y-g+(E-A)),t.copy(s).addScaledVector(yc,u);const m=1/(_+w+M);return f=w*m,u=M*m,t.copy(n).addScaledVector(fr,f).addScaledVector(hr,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const El={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pi={h:0,s:0,l:0},Ts={h:0,s:0,l:0};function Ga(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class At{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Rt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Rt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Rt.workingColorSpace){if(e=po(e,1),t=rn(t,0,1),n=rn(n,0,1),t===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+t):n+t-n*t,f=2*n-o;this.r=Ga(f,o,e+1/3),this.g=Ga(f,o,e),this.b=Ga(f,o,e-1/3)}return Rt.toWorkingColorSpace(this,s),this}setStyle(e,t=Gn){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const f=s[1],u=s[2];switch(f){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=s[1],f=o.length;if(f===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(f===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gn){const n=El[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=br(e.r),this.g=br(e.g),this.b=br(e.b),this}copyLinearToSRGB(e){return this.r=Pa(e.r),this.g=Pa(e.g),this.b=Pa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gn){return Rt.fromWorkingColorSpace(tn.copy(this),e),Math.round(rn(tn.r*255,0,255))*65536+Math.round(rn(tn.g*255,0,255))*256+Math.round(rn(tn.b*255,0,255))}getHexString(e=Gn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Rt.workingColorSpace){Rt.fromWorkingColorSpace(tn.copy(this),t);const n=tn.r,s=tn.g,o=tn.b,f=Math.max(n,s,o),u=Math.min(n,s,o);let d,p;const g=(u+f)/2;if(u===f)d=0,p=0;else{const y=f-u;switch(p=g<=.5?y/(f+u):y/(2-f-u),f){case n:d=(s-o)/y+(s<o?6:0);break;case s:d=(o-n)/y+2;break;case o:d=(n-s)/y+4;break}d/=6}return e.h=d,e.s=p,e.l=g,e}getRGB(e,t=Rt.workingColorSpace){return Rt.fromWorkingColorSpace(tn.copy(this),t),e.r=tn.r,e.g=tn.g,e.b=tn.b,e}getStyle(e=Gn){Rt.fromWorkingColorSpace(tn.copy(this),e);const t=tn.r,n=tn.g,s=tn.b;return e!==Gn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(pi),this.setHSL(pi.h+e,pi.s+t,pi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(pi),e.getHSL(Ts);const n=Kr(pi.h,Ts.h,t),s=Kr(pi.s,Ts.s,t),o=Kr(pi.l,Ts.l,t);return this.setHSL(n,s,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*s,this.g=o[1]*t+o[4]*n+o[7]*s,this.b=o[2]*t+o[5]*n+o[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const tn=new At;At.NAMES=El;let ch=0;class is extends $i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ch++}),this.uuid=Nr(),this.name="",this.type="Material",this.blending=Sr,this.side=Si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=io,this.blendDst=ro,this.blendEquation=Hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=Ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ac,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ir,this.stencilZFail=ir,this.stencilZPass=ir,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Sr&&(n.blending=this.blending),this.side!==Si&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==io&&(n.blendSrc=this.blendSrc),this.blendDst!==ro&&(n.blendDst=this.blendDst),this.blendEquation!==Hi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ws&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ac&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ir&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ir&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ir&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const f=[];for(const u in o){const d=o[u];delete d.metadata,f.push(d)}return f}if(t){const o=s(e.textures),f=s(e.images);o.length>0&&(n.textures=o),f.length>0&&(n.images=f)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class bi extends is{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.combine=ll,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ht=new G,bs=new st;class qn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=oc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Yf("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)bs.fromBufferAttribute(this,t),bs.applyMatrix3(e),this.setXY(t,bs.x,bs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix3(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Mr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Mr(t,this.array)),t}setX(e,t){return this.normalized&&(t=ln(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Mr(t,this.array)),t}setY(e,t){return this.normalized&&(t=ln(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Mr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ln(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Mr(t,this.array)),t}setW(e,t){return this.normalized&&(t=ln(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ln(t,this.array),n=ln(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ln(t,this.array),n=ln(n,this.array),s=ln(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,o){return e*=this.itemSize,this.normalized&&(t=ln(t,this.array),n=ln(n,this.array),s=ln(s,this.array),o=ln(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==oc&&(e.usage=this.usage),e}}class Tl extends qn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class bl extends qn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class jn extends qn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let lh=0;const Sn=new zt,Wa=new Wt,dr=new G,_n=new ns,Yr=new ns,Yt=new G;class ri extends $i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lh++}),this.uuid=Nr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ml(e)?bl:Tl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new ht().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,t,n){return Sn.makeTranslation(e,t,n),this.applyMatrix4(Sn),this}scale(e,t,n){return Sn.makeScale(e,t,n),this.applyMatrix4(Sn),this}lookAt(e){return Wa.lookAt(e),Wa.updateMatrix(),this.applyMatrix4(Wa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(dr).negate(),this.translate(dr.x,dr.y,dr.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const o=e[n];t.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new jn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ns);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const o=t[n];_n.setFromBufferAttribute(o),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const n=this.boundingSphere.center;if(_n.setFromBufferAttribute(e),t)for(let o=0,f=t.length;o<f;o++){const u=t[o];Yr.setFromBufferAttribute(u),this.morphTargetsRelative?(Yt.addVectors(_n.min,Yr.min),_n.expandByPoint(Yt),Yt.addVectors(_n.max,Yr.max),_n.expandByPoint(Yt)):(_n.expandByPoint(Yr.min),_n.expandByPoint(Yr.max))}_n.getCenter(n);let s=0;for(let o=0,f=e.count;o<f;o++)Yt.fromBufferAttribute(e,o),s=Math.max(s,n.distanceToSquared(Yt));if(t)for(let o=0,f=t.length;o<f;o++){const u=t[o],d=this.morphTargetsRelative;for(let p=0,g=u.count;p<g;p++)Yt.fromBufferAttribute(u,p),d&&(dr.fromBufferAttribute(e,p),Yt.add(dr)),s=Math.max(s,n.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qn(new Float32Array(4*n.count),4));const f=this.getAttribute("tangent"),u=[],d=[];for(let ee=0;ee<n.count;ee++)u[ee]=new G,d[ee]=new G;const p=new G,g=new G,y=new G,M=new st,E=new st,A=new st,w=new G,_=new G;function m(ee,P,C){p.fromBufferAttribute(n,ee),g.fromBufferAttribute(n,P),y.fromBufferAttribute(n,C),M.fromBufferAttribute(o,ee),E.fromBufferAttribute(o,P),A.fromBufferAttribute(o,C),g.sub(p),y.sub(p),E.sub(M),A.sub(M);const j=1/(E.x*A.y-A.x*E.y);isFinite(j)&&(w.copy(g).multiplyScalar(A.y).addScaledVector(y,-E.y).multiplyScalar(j),_.copy(y).multiplyScalar(E.x).addScaledVector(g,-A.x).multiplyScalar(j),u[ee].add(w),u[P].add(w),u[C].add(w),d[ee].add(_),d[P].add(_),d[C].add(_))}let O=this.groups;O.length===0&&(O=[{start:0,count:e.count}]);for(let ee=0,P=O.length;ee<P;++ee){const C=O[ee],j=C.start,ce=C.count;for(let F=j,le=j+ce;F<le;F+=3)m(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const R=new G,B=new G,$=new G,H=new G;function c(ee){$.fromBufferAttribute(s,ee),H.copy($);const P=u[ee];R.copy(P),R.sub($.multiplyScalar($.dot(P))).normalize(),B.crossVectors(H,P);const j=B.dot(d[ee])<0?-1:1;f.setXYZW(ee,R.x,R.y,R.z,j)}for(let ee=0,P=O.length;ee<P;++ee){const C=O[ee],j=C.start,ce=C.count;for(let F=j,le=j+ce;F<le;F+=3)c(e.getX(F+0)),c(e.getX(F+1)),c(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new qn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let M=0,E=n.count;M<E;M++)n.setXYZ(M,0,0,0);const s=new G,o=new G,f=new G,u=new G,d=new G,p=new G,g=new G,y=new G;if(e)for(let M=0,E=e.count;M<E;M+=3){const A=e.getX(M+0),w=e.getX(M+1),_=e.getX(M+2);s.fromBufferAttribute(t,A),o.fromBufferAttribute(t,w),f.fromBufferAttribute(t,_),g.subVectors(f,o),y.subVectors(s,o),g.cross(y),u.fromBufferAttribute(n,A),d.fromBufferAttribute(n,w),p.fromBufferAttribute(n,_),u.add(g),d.add(g),p.add(g),n.setXYZ(A,u.x,u.y,u.z),n.setXYZ(w,d.x,d.y,d.z),n.setXYZ(_,p.x,p.y,p.z)}else for(let M=0,E=t.count;M<E;M+=3)s.fromBufferAttribute(t,M+0),o.fromBufferAttribute(t,M+1),f.fromBufferAttribute(t,M+2),g.subVectors(f,o),y.subVectors(s,o),g.cross(y),n.setXYZ(M+0,g.x,g.y,g.z),n.setXYZ(M+1,g.x,g.y,g.z),n.setXYZ(M+2,g.x,g.y,g.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Yt.fromBufferAttribute(e,t),Yt.normalize(),e.setXYZ(t,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(u,d){const p=u.array,g=u.itemSize,y=u.normalized,M=new p.constructor(d.length*g);let E=0,A=0;for(let w=0,_=d.length;w<_;w++){u.isInterleavedBufferAttribute?E=d[w]*u.data.stride+u.offset:E=d[w]*g;for(let m=0;m<g;m++)M[A++]=p[E++]}return new qn(M,g,y)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ri,n=this.index.array,s=this.attributes;for(const u in s){const d=s[u],p=e(d,n);t.setAttribute(u,p)}const o=this.morphAttributes;for(const u in o){const d=[],p=o[u];for(let g=0,y=p.length;g<y;g++){const M=p[g],E=e(M,n);d.push(E)}t.morphAttributes[u]=d}t.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let u=0,d=f.length;u<d;u++){const p=f[u];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const p in d)d[p]!==void 0&&(e[p]=d[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const d in n){const p=n[d];e.data.attributes[d]=p.toJSON(e.data)}const s={};let o=!1;for(const d in this.morphAttributes){const p=this.morphAttributes[d],g=[];for(let y=0,M=p.length;y<M;y++){const E=p[y];g.push(E.toJSON(e.data))}g.length>0&&(s[d]=g,o=!0)}o&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const p in s){const g=s[p];this.setAttribute(p,g.clone(t))}const o=e.morphAttributes;for(const p in o){const g=[],y=o[p];for(let M=0,E=y.length;M<E;M++)g.push(y[M].clone(t));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let p=0,g=f.length;p<g;p++){const y=f[p];this.addGroup(y.start,y.count,y.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Sc=new zt,Ui=new ea,As=new Qs,Ec=new G,pr=new G,mr=new G,gr=new G,Xa=new G,ws=new G,Cs=new st,Rs=new st,Ps=new st,Tc=new G,bc=new G,Ac=new G,Ls=new G,Ds=new G;class hn extends Wt{constructor(e=new ri,t=new bi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,f=s.length;o<f;o++){const u=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,f=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const u=this.morphTargetInfluences;if(o&&u){ws.set(0,0,0);for(let d=0,p=o.length;d<p;d++){const g=u[d],y=o[d];g!==0&&(Xa.fromBufferAttribute(y,e),f?ws.addScaledVector(Xa,g):ws.addScaledVector(Xa.sub(t),g))}t.add(ws)}return t}raycast(e,t){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),As.copy(n.boundingSphere),As.applyMatrix4(o),Ui.copy(e.ray).recast(e.near),!(As.containsPoint(Ui.origin)===!1&&(Ui.intersectSphere(As,Ec)===null||Ui.origin.distanceToSquared(Ec)>(e.far-e.near)**2))&&(Sc.copy(o).invert(),Ui.copy(e.ray).applyMatrix4(Sc),!(n.boundingBox!==null&&Ui.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ui)))}_computeIntersections(e,t,n){let s;const o=this.geometry,f=this.material,u=o.index,d=o.attributes.position,p=o.attributes.uv,g=o.attributes.uv1,y=o.attributes.normal,M=o.groups,E=o.drawRange;if(u!==null)if(Array.isArray(f))for(let A=0,w=M.length;A<w;A++){const _=M[A],m=f[_.materialIndex],O=Math.max(_.start,E.start),R=Math.min(u.count,Math.min(_.start+_.count,E.start+E.count));for(let B=O,$=R;B<$;B+=3){const H=u.getX(B),c=u.getX(B+1),ee=u.getX(B+2);s=Us(this,m,e,n,p,g,y,H,c,ee),s&&(s.faceIndex=Math.floor(B/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{const A=Math.max(0,E.start),w=Math.min(u.count,E.start+E.count);for(let _=A,m=w;_<m;_+=3){const O=u.getX(_),R=u.getX(_+1),B=u.getX(_+2);s=Us(this,f,e,n,p,g,y,O,R,B),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}else if(d!==void 0)if(Array.isArray(f))for(let A=0,w=M.length;A<w;A++){const _=M[A],m=f[_.materialIndex],O=Math.max(_.start,E.start),R=Math.min(d.count,Math.min(_.start+_.count,E.start+E.count));for(let B=O,$=R;B<$;B+=3){const H=B,c=B+1,ee=B+2;s=Us(this,m,e,n,p,g,y,H,c,ee),s&&(s.faceIndex=Math.floor(B/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{const A=Math.max(0,E.start),w=Math.min(d.count,E.start+E.count);for(let _=A,m=w;_<m;_+=3){const O=_,R=_+1,B=_+2;s=Us(this,f,e,n,p,g,y,O,R,B),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}}}function uh(i,e,t,n,s,o,f,u){let d;if(e.side===pn?d=n.intersectTriangle(f,o,s,!0,u):d=n.intersectTriangle(s,o,f,e.side===Si,u),d===null)return null;Ds.copy(u),Ds.applyMatrix4(i.matrixWorld);const p=t.ray.origin.distanceTo(Ds);return p<t.near||p>t.far?null:{distance:p,point:Ds.clone(),object:i}}function Us(i,e,t,n,s,o,f,u,d,p){i.getVertexPosition(u,pr),i.getVertexPosition(d,mr),i.getVertexPosition(p,gr);const g=uh(i,e,t,n,pr,mr,gr,Ls);if(g){s&&(Cs.fromBufferAttribute(s,u),Rs.fromBufferAttribute(s,d),Ps.fromBufferAttribute(s,p),g.uv=Dn.getInterpolation(Ls,pr,mr,gr,Cs,Rs,Ps,new st)),o&&(Cs.fromBufferAttribute(o,u),Rs.fromBufferAttribute(o,d),Ps.fromBufferAttribute(o,p),g.uv1=Dn.getInterpolation(Ls,pr,mr,gr,Cs,Rs,Ps,new st)),f&&(Tc.fromBufferAttribute(f,u),bc.fromBufferAttribute(f,d),Ac.fromBufferAttribute(f,p),g.normal=Dn.getInterpolation(Ls,pr,mr,gr,Tc,bc,Ac,new G),g.normal.dot(n.direction)>0&&g.normal.multiplyScalar(-1));const y={a:u,b:d,c:p,normal:new G,materialIndex:0};Dn.getNormal(pr,mr,gr,y.normal),g.face=y}return g}class rs extends ri{constructor(e=1,t=1,n=1,s=1,o=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:o,depthSegments:f};const u=this;s=Math.floor(s),o=Math.floor(o),f=Math.floor(f);const d=[],p=[],g=[],y=[];let M=0,E=0;A("z","y","x",-1,-1,n,t,e,f,o,0),A("z","y","x",1,-1,n,t,-e,f,o,1),A("x","z","y",1,1,e,n,t,s,f,2),A("x","z","y",1,-1,e,n,-t,s,f,3),A("x","y","z",1,-1,e,t,n,s,o,4),A("x","y","z",-1,-1,e,t,-n,s,o,5),this.setIndex(d),this.setAttribute("position",new jn(p,3)),this.setAttribute("normal",new jn(g,3)),this.setAttribute("uv",new jn(y,2));function A(w,_,m,O,R,B,$,H,c,ee,P){const C=B/c,j=$/ee,ce=B/2,F=$/2,le=H/2,ue=c+1,xe=ee+1;let me=0,ie=0;const ve=new G;for(let Me=0;Me<xe;Me++){const Oe=Me*j-F;for(let ot=0;ot<ue;ot++){const yt=ot*C-ce;ve[w]=yt*O,ve[_]=Oe*R,ve[m]=le,p.push(ve.x,ve.y,ve.z),ve[w]=0,ve[_]=0,ve[m]=H>0?1:-1,g.push(ve.x,ve.y,ve.z),y.push(ot/c),y.push(1-Me/ee),me+=1}}for(let Me=0;Me<ee;Me++)for(let Oe=0;Oe<c;Oe++){const ot=M+Oe+ue*Me,yt=M+Oe+ue*(Me+1),re=M+(Oe+1)+ue*(Me+1),Se=M+(Oe+1)+ue*Me;d.push(ot,yt,Se),d.push(yt,re,Se),ie+=6}u.addGroup(E,ie,P),E+=ie,M+=me}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Lr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function un(i){const e={};for(let t=0;t<i.length;t++){const n=Lr(i[t]);for(const s in n)e[s]=n[s]}return e}function fh(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Al(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}const hh={clone:Lr,merge:un};var dh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ph=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ei extends is{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dh,this.fragmentShader=ph,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Lr(e.uniforms),this.uniformsGroups=fh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const f=this.uniforms[s].value;f&&f.isTexture?t.uniforms[s]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?t.uniforms[s]={type:"c",value:f.getHex()}:f&&f.isVector2?t.uniforms[s]={type:"v2",value:f.toArray()}:f&&f.isVector3?t.uniforms[s]={type:"v3",value:f.toArray()}:f&&f.isVector4?t.uniforms[s]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?t.uniforms[s]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?t.uniforms[s]={type:"m4",value:f.toArray()}:t.uniforms[s]={value:f}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class wl extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new zt,this.projectionMatrix=new zt,this.projectionMatrixInverse=new zt,this.coordinateSystem=ii}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const mi=new G,wc=new st,Cc=new st;class En extends wl{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=es*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Tr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return es*2*Math.atan(Math.tan(Tr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(mi.x,mi.y).multiplyScalar(-e/mi.z),mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(mi.x,mi.y).multiplyScalar(-e/mi.z)}getViewSize(e,t){return this.getViewBounds(e,wc,Cc),t.subVectors(Cc,wc)}setViewOffset(e,t,n,s,o,f){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Tr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,o=-.5*s;const f=this.view;if(this.view!==null&&this.view.enabled){const d=f.fullWidth,p=f.fullHeight;o+=f.offsetX*s/d,t-=f.offsetY*n/p,s*=f.width/d,n*=f.height/p}const u=this.filmOffset;u!==0&&(o+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const _r=-90,vr=1;class mh extends Wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new En(_r,vr,e,t);s.layers=this.layers,this.add(s);const o=new En(_r,vr,e,t);o.layers=this.layers,this.add(o);const f=new En(_r,vr,e,t);f.layers=this.layers,this.add(f);const u=new En(_r,vr,e,t);u.layers=this.layers,this.add(u);const d=new En(_r,vr,e,t);d.layers=this.layers,this.add(d);const p=new En(_r,vr,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,o,f,u,d]=t;for(const p of t)this.remove(p);if(e===ii)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===$s)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,f,u,d,p,g]=this.children,y=e.getRenderTarget(),M=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const w=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,o),e.setRenderTarget(n,1,s),e.render(t,f),e.setRenderTarget(n,2,s),e.render(t,u),e.setRenderTarget(n,3,s),e.render(t,d),e.setRenderTarget(n,4,s),e.render(t,p),n.texture.generateMipmaps=w,e.setRenderTarget(n,5,s),e.render(t,g),e.setRenderTarget(y,M,E),e.xr.enabled=A,n.texture.needsPMREMUpdate=!0}}class Cl extends mn{constructor(e,t,n,s,o,f,u,d,p,g){e=e!==void 0?e:[],t=t!==void 0?t:Cr,super(e,t,n,s,o,f,u,d,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class gh extends qi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Cl(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ln}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new rs(5,5,5),o=new Ei({name:"CubemapFromEquirect",uniforms:Lr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:pn,blending:xi});o.uniforms.tEquirect.value=t;const f=new hn(s,o),u=t.minFilter;return t.minFilter===Gi&&(t.minFilter=Ln),new mh(1,10,this).update(e,f),t.minFilter=u,f.geometry.dispose(),f.material.dispose(),this}clear(e,t,n,s){const o=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(t,n,s);e.setRenderTarget(o)}}const qa=new G,_h=new G,vh=new ht;class gi{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=qa.subVectors(n,t).cross(_h.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(qa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||vh.getNormalMatrix(e),s=this.coplanarPoint(qa).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ni=new Qs,Ns=new G;class Rl{constructor(e=new gi,t=new gi,n=new gi,s=new gi,o=new gi,f=new gi){this.planes=[e,t,n,s,o,f]}set(e,t,n,s,o,f){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(n),u[3].copy(s),u[4].copy(o),u[5].copy(f),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ii){const n=this.planes,s=e.elements,o=s[0],f=s[1],u=s[2],d=s[3],p=s[4],g=s[5],y=s[6],M=s[7],E=s[8],A=s[9],w=s[10],_=s[11],m=s[12],O=s[13],R=s[14],B=s[15];if(n[0].setComponents(d-o,M-p,_-E,B-m).normalize(),n[1].setComponents(d+o,M+p,_+E,B+m).normalize(),n[2].setComponents(d+f,M+g,_+A,B+O).normalize(),n[3].setComponents(d-f,M-g,_-A,B-O).normalize(),n[4].setComponents(d-u,M-y,_-w,B-R).normalize(),t===ii)n[5].setComponents(d+u,M+y,_+w,B+R).normalize();else if(t===$s)n[5].setComponents(u,y,w,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ni.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ni)}intersectsSprite(e){return Ni.center.set(0,0,0),Ni.radius=.7071067811865476,Ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ni)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Ns.x=s.normal.x>0?e.max.x:e.min.x,Ns.y=s.normal.y>0?e.max.y:e.min.y,Ns.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ns)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Pl(){let i=null,e=!1,t=null,n=null;function s(o,f){t(o,f),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){i=o}}}function xh(i){const e=new WeakMap;function t(u,d){const p=u.array,g=u.usage,y=p.byteLength,M=i.createBuffer();i.bindBuffer(d,M),i.bufferData(d,p,g),u.onUploadCallback();let E;if(p instanceof Float32Array)E=i.FLOAT;else if(p instanceof Uint16Array)u.isFloat16BufferAttribute?E=i.HALF_FLOAT:E=i.UNSIGNED_SHORT;else if(p instanceof Int16Array)E=i.SHORT;else if(p instanceof Uint32Array)E=i.UNSIGNED_INT;else if(p instanceof Int32Array)E=i.INT;else if(p instanceof Int8Array)E=i.BYTE;else if(p instanceof Uint8Array)E=i.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)E=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:M,type:E,bytesPerElement:p.BYTES_PER_ELEMENT,version:u.version,size:y}}function n(u,d,p){const g=d.array,y=d._updateRange,M=d.updateRanges;if(i.bindBuffer(p,u),y.count===-1&&M.length===0&&i.bufferSubData(p,0,g),M.length!==0){for(let E=0,A=M.length;E<A;E++){const w=M[E];i.bufferSubData(p,w.start*g.BYTES_PER_ELEMENT,g,w.start,w.count)}d.clearUpdateRanges()}y.count!==-1&&(i.bufferSubData(p,y.offset*g.BYTES_PER_ELEMENT,g,y.offset,y.count),y.count=-1),d.onUploadCallback()}function s(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const d=e.get(u);d&&(i.deleteBuffer(d.buffer),e.delete(u))}function f(u,d){if(u.isGLBufferAttribute){const g=e.get(u);(!g||g.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const p=e.get(u);if(p===void 0)e.set(u,t(u,d));else if(p.version<u.version){if(p.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(p.buffer,u,d),p.version=u.version}}return{get:s,remove:o,update:f}}class Yn extends ri{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const o=e/2,f=t/2,u=Math.floor(n),d=Math.floor(s),p=u+1,g=d+1,y=e/u,M=t/d,E=[],A=[],w=[],_=[];for(let m=0;m<g;m++){const O=m*M-f;for(let R=0;R<p;R++){const B=R*y-o;A.push(B,-O,0),w.push(0,0,1),_.push(R/u),_.push(1-m/d)}}for(let m=0;m<d;m++)for(let O=0;O<u;O++){const R=O+p*m,B=O+p*(m+1),$=O+1+p*(m+1),H=O+1+p*m;E.push(R,B,H),E.push(B,$,H)}this.setIndex(E),this.setAttribute("position",new jn(A,3)),this.setAttribute("normal",new jn(w,3)),this.setAttribute("uv",new jn(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yn(e.width,e.height,e.widthSegments,e.heightSegments)}}var Mh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Sh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Eh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Th=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ah=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,wh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ch=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Rh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Ph=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Dh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Uh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Nh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ih=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Oh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Vh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Gh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Wh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Xh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,qh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$h=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zh=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Jh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Qh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ed=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,td=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,id=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ad=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,od=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,cd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ld=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ud=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,dd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,pd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,md=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_d=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,xd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Md=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,yd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Sd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ed=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Td=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ad=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Pd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ld=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ud=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Nd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Id=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Od=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Fd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Bd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,zd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Hd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Gd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Wd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$d=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Kd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ep=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,np=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,ip=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,rp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,sp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ap=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,op=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,cp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,up=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, newPeak * vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,pp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,mp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,gp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_p=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,xp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Mp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ep=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ap=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,wp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Cp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Rp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Pp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Up=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Np=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ip=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Op=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,zp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,kp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Vp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Xp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,$p=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Kp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Jp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Qp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ft={alphahash_fragment:Mh,alphahash_pars_fragment:yh,alphamap_fragment:Sh,alphamap_pars_fragment:Eh,alphatest_fragment:Th,alphatest_pars_fragment:bh,aomap_fragment:Ah,aomap_pars_fragment:wh,batching_pars_vertex:Ch,batching_vertex:Rh,begin_vertex:Ph,beginnormal_vertex:Lh,bsdfs:Dh,iridescence_fragment:Uh,bumpmap_pars_fragment:Nh,clipping_planes_fragment:Ih,clipping_planes_pars_fragment:Oh,clipping_planes_pars_vertex:Fh,clipping_planes_vertex:Bh,color_fragment:zh,color_pars_fragment:Hh,color_pars_vertex:kh,color_vertex:Vh,common:Gh,cube_uv_reflection_fragment:Wh,defaultnormal_vertex:Xh,displacementmap_pars_vertex:qh,displacementmap_vertex:jh,emissivemap_fragment:Yh,emissivemap_pars_fragment:$h,colorspace_fragment:Kh,colorspace_pars_fragment:Zh,envmap_fragment:Jh,envmap_common_pars_fragment:Qh,envmap_pars_fragment:ed,envmap_pars_vertex:td,envmap_physical_pars_fragment:dd,envmap_vertex:nd,fog_vertex:id,fog_pars_vertex:rd,fog_fragment:sd,fog_pars_fragment:ad,gradientmap_pars_fragment:od,lightmap_fragment:cd,lightmap_pars_fragment:ld,lights_lambert_fragment:ud,lights_lambert_pars_fragment:fd,lights_pars_begin:hd,lights_toon_fragment:pd,lights_toon_pars_fragment:md,lights_phong_fragment:gd,lights_phong_pars_fragment:_d,lights_physical_fragment:vd,lights_physical_pars_fragment:xd,lights_fragment_begin:Md,lights_fragment_maps:yd,lights_fragment_end:Sd,logdepthbuf_fragment:Ed,logdepthbuf_pars_fragment:Td,logdepthbuf_pars_vertex:bd,logdepthbuf_vertex:Ad,map_fragment:wd,map_pars_fragment:Cd,map_particle_fragment:Rd,map_particle_pars_fragment:Pd,metalnessmap_fragment:Ld,metalnessmap_pars_fragment:Dd,morphinstance_vertex:Ud,morphcolor_vertex:Nd,morphnormal_vertex:Id,morphtarget_pars_vertex:Od,morphtarget_vertex:Fd,normal_fragment_begin:Bd,normal_fragment_maps:zd,normal_pars_fragment:Hd,normal_pars_vertex:kd,normal_vertex:Vd,normalmap_pars_fragment:Gd,clearcoat_normal_fragment_begin:Wd,clearcoat_normal_fragment_maps:Xd,clearcoat_pars_fragment:qd,iridescence_pars_fragment:jd,opaque_fragment:Yd,packing:$d,premultiplied_alpha_fragment:Kd,project_vertex:Zd,dithering_fragment:Jd,dithering_pars_fragment:Qd,roughnessmap_fragment:ep,roughnessmap_pars_fragment:tp,shadowmap_pars_fragment:np,shadowmap_pars_vertex:ip,shadowmap_vertex:rp,shadowmask_pars_fragment:sp,skinbase_vertex:ap,skinning_pars_vertex:op,skinning_vertex:cp,skinnormal_vertex:lp,specularmap_fragment:up,specularmap_pars_fragment:fp,tonemapping_fragment:hp,tonemapping_pars_fragment:dp,transmission_fragment:pp,transmission_pars_fragment:mp,uv_pars_fragment:gp,uv_pars_vertex:_p,uv_vertex:vp,worldpos_vertex:xp,background_vert:Mp,background_frag:yp,backgroundCube_vert:Sp,backgroundCube_frag:Ep,cube_vert:Tp,cube_frag:bp,depth_vert:Ap,depth_frag:wp,distanceRGBA_vert:Cp,distanceRGBA_frag:Rp,equirect_vert:Pp,equirect_frag:Lp,linedashed_vert:Dp,linedashed_frag:Up,meshbasic_vert:Np,meshbasic_frag:Ip,meshlambert_vert:Op,meshlambert_frag:Fp,meshmatcap_vert:Bp,meshmatcap_frag:zp,meshnormal_vert:Hp,meshnormal_frag:kp,meshphong_vert:Vp,meshphong_frag:Gp,meshphysical_vert:Wp,meshphysical_frag:Xp,meshtoon_vert:qp,meshtoon_frag:jp,points_vert:Yp,points_frag:$p,shadow_vert:Kp,shadow_frag:Zp,sprite_vert:Jp,sprite_frag:Qp},Ae={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},Wn={basic:{uniforms:un([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:un([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new At(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:un([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:un([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:un([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new At(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:un([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:un([Ae.points,Ae.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:un([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:un([Ae.common,Ae.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:un([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:un([Ae.sprite,Ae.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distanceRGBA:{uniforms:un([Ae.common,Ae.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distanceRGBA_vert,fragmentShader:ft.distanceRGBA_frag},shadow:{uniforms:un([Ae.lights,Ae.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};Wn.physical={uniforms:un([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const Is={r:0,b:0,g:0},Ii=new Nn,em=new zt;function tm(i,e,t,n,s,o,f){const u=new At(0);let d=o===!0?0:1,p,g,y=null,M=0,E=null;function A(_,m){let O=!1,R=m.isScene===!0?m.background:null;R&&R.isTexture&&(R=(m.backgroundBlurriness>0?t:e).get(R)),R===null?w(u,d):R&&R.isColor&&(w(R,1),O=!0);const B=i.xr.getEnvironmentBlendMode();B==="additive"?n.buffers.color.setClear(0,0,0,1,f):B==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,f),(i.autoClear||O)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),R&&(R.isCubeTexture||R.mapping===Zs)?(g===void 0&&(g=new hn(new rs(1,1,1),new Ei({name:"BackgroundCubeMaterial",uniforms:Lr(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function($,H,c){this.matrixWorld.copyPosition(c.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(g)),Ii.copy(m.backgroundRotation),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Ii.y*=-1,Ii.z*=-1),g.material.uniforms.envMap.value=R,g.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(em.makeRotationFromEuler(Ii)),g.material.toneMapped=Rt.getTransfer(R.colorSpace)!==Ut,(y!==R||M!==R.version||E!==i.toneMapping)&&(g.material.needsUpdate=!0,y=R,M=R.version,E=i.toneMapping),g.layers.enableAll(),_.unshift(g,g.geometry,g.material,0,0,null)):R&&R.isTexture&&(p===void 0&&(p=new hn(new Yn(2,2),new Ei({name:"BackgroundMaterial",uniforms:Lr(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:Si,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(p)),p.material.uniforms.t2D.value=R,p.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,p.material.toneMapped=Rt.getTransfer(R.colorSpace)!==Ut,R.matrixAutoUpdate===!0&&R.updateMatrix(),p.material.uniforms.uvTransform.value.copy(R.matrix),(y!==R||M!==R.version||E!==i.toneMapping)&&(p.material.needsUpdate=!0,y=R,M=R.version,E=i.toneMapping),p.layers.enableAll(),_.unshift(p,p.geometry,p.material,0,0,null))}function w(_,m){_.getRGB(Is,Al(i)),n.buffers.color.setClear(Is.r,Is.g,Is.b,m,f)}return{getClearColor:function(){return u},setClearColor:function(_,m=1){u.set(_),d=m,w(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(_){d=_,w(u,d)},render:A}}function nm(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=M(null);let o=s,f=!1;function u(C,j,ce,F,le){let ue=!1;const xe=y(F,ce,j);o!==xe&&(o=xe,p(o.object)),ue=E(C,F,ce,le),ue&&A(C,F,ce,le),le!==null&&e.update(le,i.ELEMENT_ARRAY_BUFFER),(ue||f)&&(f=!1,B(C,j,ce,F),le!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(le).buffer))}function d(){return i.createVertexArray()}function p(C){return i.bindVertexArray(C)}function g(C){return i.deleteVertexArray(C)}function y(C,j,ce){const F=ce.wireframe===!0;let le=n[C.id];le===void 0&&(le={},n[C.id]=le);let ue=le[j.id];ue===void 0&&(ue={},le[j.id]=ue);let xe=ue[F];return xe===void 0&&(xe=M(d()),ue[F]=xe),xe}function M(C){const j=[],ce=[],F=[];for(let le=0;le<t;le++)j[le]=0,ce[le]=0,F[le]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:ce,attributeDivisors:F,object:C,attributes:{},index:null}}function E(C,j,ce,F){const le=o.attributes,ue=j.attributes;let xe=0;const me=ce.getAttributes();for(const ie in me)if(me[ie].location>=0){const Me=le[ie];let Oe=ue[ie];if(Oe===void 0&&(ie==="instanceMatrix"&&C.instanceMatrix&&(Oe=C.instanceMatrix),ie==="instanceColor"&&C.instanceColor&&(Oe=C.instanceColor)),Me===void 0||Me.attribute!==Oe||Oe&&Me.data!==Oe.data)return!0;xe++}return o.attributesNum!==xe||o.index!==F}function A(C,j,ce,F){const le={},ue=j.attributes;let xe=0;const me=ce.getAttributes();for(const ie in me)if(me[ie].location>=0){let Me=ue[ie];Me===void 0&&(ie==="instanceMatrix"&&C.instanceMatrix&&(Me=C.instanceMatrix),ie==="instanceColor"&&C.instanceColor&&(Me=C.instanceColor));const Oe={};Oe.attribute=Me,Me&&Me.data&&(Oe.data=Me.data),le[ie]=Oe,xe++}o.attributes=le,o.attributesNum=xe,o.index=F}function w(){const C=o.newAttributes;for(let j=0,ce=C.length;j<ce;j++)C[j]=0}function _(C){m(C,0)}function m(C,j){const ce=o.newAttributes,F=o.enabledAttributes,le=o.attributeDivisors;ce[C]=1,F[C]===0&&(i.enableVertexAttribArray(C),F[C]=1),le[C]!==j&&(i.vertexAttribDivisor(C,j),le[C]=j)}function O(){const C=o.newAttributes,j=o.enabledAttributes;for(let ce=0,F=j.length;ce<F;ce++)j[ce]!==C[ce]&&(i.disableVertexAttribArray(ce),j[ce]=0)}function R(C,j,ce,F,le,ue,xe){xe===!0?i.vertexAttribIPointer(C,j,ce,le,ue):i.vertexAttribPointer(C,j,ce,F,le,ue)}function B(C,j,ce,F){w();const le=F.attributes,ue=ce.getAttributes(),xe=j.defaultAttributeValues;for(const me in ue){const ie=ue[me];if(ie.location>=0){let ve=le[me];if(ve===void 0&&(me==="instanceMatrix"&&C.instanceMatrix&&(ve=C.instanceMatrix),me==="instanceColor"&&C.instanceColor&&(ve=C.instanceColor)),ve!==void 0){const Me=ve.normalized,Oe=ve.itemSize,ot=e.get(ve);if(ot===void 0)continue;const yt=ot.buffer,re=ot.type,Se=ot.bytesPerElement,Ue=re===i.INT||re===i.UNSIGNED_INT||ve.gpuType===hl;if(ve.isInterleavedBufferAttribute){const we=ve.data,et=we.stride,tt=ve.offset;if(we.isInstancedInterleavedBuffer){for(let je=0;je<ie.locationSize;je++)m(ie.location+je,we.meshPerAttribute);C.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=we.meshPerAttribute*we.count)}else for(let je=0;je<ie.locationSize;je++)_(ie.location+je);i.bindBuffer(i.ARRAY_BUFFER,yt);for(let je=0;je<ie.locationSize;je++)R(ie.location+je,Oe/ie.locationSize,re,Me,et*Se,(tt+Oe/ie.locationSize*je)*Se,Ue)}else{if(ve.isInstancedBufferAttribute){for(let we=0;we<ie.locationSize;we++)m(ie.location+we,ve.meshPerAttribute);C.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let we=0;we<ie.locationSize;we++)_(ie.location+we);i.bindBuffer(i.ARRAY_BUFFER,yt);for(let we=0;we<ie.locationSize;we++)R(ie.location+we,Oe/ie.locationSize,re,Me,Oe*Se,Oe/ie.locationSize*we*Se,Ue)}}else if(xe!==void 0){const Me=xe[me];if(Me!==void 0)switch(Me.length){case 2:i.vertexAttrib2fv(ie.location,Me);break;case 3:i.vertexAttrib3fv(ie.location,Me);break;case 4:i.vertexAttrib4fv(ie.location,Me);break;default:i.vertexAttrib1fv(ie.location,Me)}}}}O()}function $(){ee();for(const C in n){const j=n[C];for(const ce in j){const F=j[ce];for(const le in F)g(F[le].object),delete F[le];delete j[ce]}delete n[C]}}function H(C){if(n[C.id]===void 0)return;const j=n[C.id];for(const ce in j){const F=j[ce];for(const le in F)g(F[le].object),delete F[le];delete j[ce]}delete n[C.id]}function c(C){for(const j in n){const ce=n[j];if(ce[C.id]===void 0)continue;const F=ce[C.id];for(const le in F)g(F[le].object),delete F[le];delete ce[C.id]}}function ee(){P(),f=!0,o!==s&&(o=s,p(o.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:u,reset:ee,resetDefaultState:P,dispose:$,releaseStatesOfGeometry:H,releaseStatesOfProgram:c,initAttributes:w,enableAttribute:_,disableUnusedAttributes:O}}function im(i,e,t){let n;function s(d){n=d}function o(d,p){i.drawArrays(n,d,p),t.update(p,n,1)}function f(d,p,g){g!==0&&(i.drawArraysInstanced(n,d,p,g),t.update(p,n,g))}function u(d,p,g){if(g===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let M=0;M<g;M++)this.render(d[M],p[M]);else{y.multiDrawArraysWEBGL(n,d,0,p,0,g);let M=0;for(let E=0;E<g;E++)M+=p[E];t.update(M,n,1)}}this.setMode=s,this.render=o,this.renderInstances=f,this.renderMultiDraw=u}function rm(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=t.precision!==void 0?t.precision:"highp";const u=o(f);u!==f&&(console.warn("THREE.WebGLRenderer:",f,"not supported, using",u,"instead."),f=u);const d=t.logarithmicDepthBuffer===!0,p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),M=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),E=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),m=g>0,O=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:o,precision:f,logarithmicDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:M,maxAttributes:E,maxVertexUniforms:A,maxVaryings:w,maxFragmentUniforms:_,vertexTextures:m,maxSamples:O}}function sm(i){const e=this;let t=null,n=0,s=!1,o=!1;const f=new gi,u=new ht,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(y,M){const E=y.length!==0||M||n!==0||s;return s=M,n=y.length,E},this.beginShadows=function(){o=!0,g(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(y,M){t=g(y,M,0)},this.setState=function(y,M,E){const A=y.clippingPlanes,w=y.clipIntersection,_=y.clipShadows,m=i.get(y);if(!s||A===null||A.length===0||o&&!_)o?g(null):p();else{const O=o?0:n,R=O*4;let B=m.clippingState||null;d.value=B,B=g(A,M,R,E);for(let $=0;$!==R;++$)B[$]=t[$];m.clippingState=B,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=O}};function p(){d.value!==t&&(d.value=t,d.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function g(y,M,E,A){const w=y!==null?y.length:0;let _=null;if(w!==0){if(_=d.value,A!==!0||_===null){const m=E+w*4,O=M.matrixWorldInverse;u.getNormalMatrix(O),(_===null||_.length<m)&&(_=new Float32Array(m));for(let R=0,B=E;R!==w;++R,B+=4)f.copy(y[R]).applyMatrix4(O,u),f.normal.toArray(_,B),_[B+3]=f.constant}d.value=_,d.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,_}}function am(i){let e=new WeakMap;function t(f,u){return u===so?f.mapping=Cr:u===ao&&(f.mapping=Rr),f}function n(f){if(f&&f.isTexture){const u=f.mapping;if(u===so||u===ao)if(e.has(f)){const d=e.get(f).texture;return t(d,f.mapping)}else{const d=f.image;if(d&&d.height>0){const p=new gh(d.height);return p.fromEquirectangularTexture(i,f),e.set(f,p),f.addEventListener("dispose",s),t(p.texture,f.mapping)}else return null}}return f}function s(f){const u=f.target;u.removeEventListener("dispose",s);const d=e.get(u);d!==void 0&&(e.delete(u),d.dispose())}function o(){e=new WeakMap}return{get:n,dispose:o}}class om extends wl{constructor(e=-1,t=1,n=1,s=-1,o=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=o,this.far=f,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,o,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-e,f=n+e,u=s+t,d=s-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=p*this.view.offsetX,f=o+p*this.view.width,u-=g*this.view.offsetY,d=u-g*this.view.height}this.projectionMatrix.makeOrthographic(o,f,u,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const yr=4,Rc=[.125,.215,.35,.446,.526,.582],ki=20,ja=new om,Pc=new At;let Ya=null,$a=0,Ka=0,Za=!1;const Fi=(1+Math.sqrt(5))/2,xr=1/Fi,Lc=[new G(1,1,1),new G(-1,1,1),new G(1,1,-1),new G(-1,1,-1),new G(0,Fi,xr),new G(0,Fi,-xr),new G(xr,0,Fi),new G(-xr,0,Fi),new G(Fi,xr,0),new G(-Fi,xr,0)];class Dc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Ya=this._renderer.getRenderTarget(),$a=this._renderer.getActiveCubeFace(),Ka=this._renderer.getActiveMipmapLevel(),Za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,n,s,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ic(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ya,$a,Ka),this._renderer.xr.enabled=Za,e.scissorTest=!1,Os(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Cr||e.mapping===Rr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ya=this._renderer.getRenderTarget(),$a=this._renderer.getActiveCubeFace(),Ka=this._renderer.getActiveMipmapLevel(),Za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ln,minFilter:Ln,generateMipmaps:!1,type:Xs,format:Xn,colorSpace:Ti,depthBuffer:!1},s=Uc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Uc(e,t,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cm(o)),this._blurMaterial=lm(o,e,t)}return s}_compileMaterial(e){const t=new hn(this._lodPlanes[0],e);this._renderer.compile(t,ja)}_sceneToCubeUV(e,t,n,s){const u=new En(90,1,t,n),d=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,y=g.autoClear,M=g.toneMapping;g.getClearColor(Pc),g.toneMapping=Mi,g.autoClear=!1;const E=new bi({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1}),A=new hn(new rs,E);let w=!1;const _=e.background;_?_.isColor&&(E.color.copy(_),e.background=null,w=!0):(E.color.copy(Pc),w=!0);for(let m=0;m<6;m++){const O=m%3;O===0?(u.up.set(0,d[m],0),u.lookAt(p[m],0,0)):O===1?(u.up.set(0,0,d[m]),u.lookAt(0,p[m],0)):(u.up.set(0,d[m],0),u.lookAt(0,0,p[m]));const R=this._cubeSize;Os(s,O*R,m>2?R:0,R,R),g.setRenderTarget(s),w&&g.render(A,u),g.render(e,u)}A.geometry.dispose(),A.material.dispose(),g.toneMapping=M,g.autoClear=y,e.background=_}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Cr||e.mapping===Rr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ic()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nc());const o=s?this._cubemapMaterial:this._equirectMaterial,f=new hn(this._lodPlanes[0],o),u=o.uniforms;u.envMap.value=e;const d=this._cubeSize;Os(t,0,0,3*d,2*d),n.setRenderTarget(t),n.render(f,ja)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),f=Lc[(s-1)%Lc.length];this._blur(e,s-1,s,o,f)}t.autoClear=n}_blur(e,t,n,s,o){const f=this._pingPongRenderTarget;this._halfBlur(e,f,t,n,s,"latitudinal",o),this._halfBlur(f,e,n,n,s,"longitudinal",o)}_halfBlur(e,t,n,s,o,f,u){const d=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,y=new hn(this._lodPlanes[s],p),M=p.uniforms,E=this._sizeLods[n]-1,A=isFinite(o)?Math.PI/(2*E):2*Math.PI/(2*ki-1),w=o/A,_=isFinite(o)?1+Math.floor(g*w):ki;_>ki&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${ki}`);const m=[];let O=0;for(let c=0;c<ki;++c){const ee=c/w,P=Math.exp(-ee*ee/2);m.push(P),c===0?O+=P:c<_&&(O+=2*P)}for(let c=0;c<m.length;c++)m[c]=m[c]/O;M.envMap.value=e.texture,M.samples.value=_,M.weights.value=m,M.latitudinal.value=f==="latitudinal",u&&(M.poleAxis.value=u);const{_lodMax:R}=this;M.dTheta.value=A,M.mipInt.value=R-n;const B=this._sizeLods[s],$=3*B*(s>R-yr?s-R+yr:0),H=4*(this._cubeSize-B);Os(t,$,H,3*B,2*B),d.setRenderTarget(t),d.render(y,ja)}}function cm(i){const e=[],t=[],n=[];let s=i;const o=i-yr+1+Rc.length;for(let f=0;f<o;f++){const u=Math.pow(2,s);t.push(u);let d=1/u;f>i-yr?d=Rc[f-i+yr-1]:f===0&&(d=0),n.push(d);const p=1/(u-2),g=-p,y=1+p,M=[g,g,y,g,y,y,g,g,y,y,g,y],E=6,A=6,w=3,_=2,m=1,O=new Float32Array(w*A*E),R=new Float32Array(_*A*E),B=new Float32Array(m*A*E);for(let H=0;H<E;H++){const c=H%3*2/3-1,ee=H>2?0:-1,P=[c,ee,0,c+2/3,ee,0,c+2/3,ee+1,0,c,ee,0,c+2/3,ee+1,0,c,ee+1,0];O.set(P,w*A*H),R.set(M,_*A*H);const C=[H,H,H,H,H,H];B.set(C,m*A*H)}const $=new ri;$.setAttribute("position",new qn(O,w)),$.setAttribute("uv",new qn(R,_)),$.setAttribute("faceIndex",new qn(B,m)),e.push($),s>yr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Uc(i,e,t){const n=new qi(i,e,t);return n.texture.mapping=Zs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Os(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function lm(i,e,t){const n=new Float32Array(ki),s=new G(0,1,0);return new Ei({name:"SphericalGaussianBlur",defines:{n:ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:go(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Nc(){return new Ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:go(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Ic(){return new Ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:go(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function go(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function um(i){let e=new WeakMap,t=null;function n(u){if(u&&u.isTexture){const d=u.mapping,p=d===so||d===ao,g=d===Cr||d===Rr;if(p||g){let y=e.get(u);const M=y!==void 0?y.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==M)return t===null&&(t=new Dc(i)),y=p?t.fromEquirectangular(u,y):t.fromCubemap(u,y),y.texture.pmremVersion=u.pmremVersion,e.set(u,y),y.texture;if(y!==void 0)return y.texture;{const E=u.image;return p&&E&&E.height>0||g&&E&&s(E)?(t===null&&(t=new Dc(i)),y=p?t.fromEquirectangular(u):t.fromCubemap(u),y.texture.pmremVersion=u.pmremVersion,e.set(u,y),u.addEventListener("dispose",o),y.texture):null}}}return u}function s(u){let d=0;const p=6;for(let g=0;g<p;g++)u[g]!==void 0&&d++;return d===p}function o(u){const d=u.target;d.removeEventListener("dispose",o);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function f(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:f}}function fm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function hm(i,e,t,n){const s={},o=new WeakMap;function f(y){const M=y.target;M.index!==null&&e.remove(M.index);for(const A in M.attributes)e.remove(M.attributes[A]);for(const A in M.morphAttributes){const w=M.morphAttributes[A];for(let _=0,m=w.length;_<m;_++)e.remove(w[_])}M.removeEventListener("dispose",f),delete s[M.id];const E=o.get(M);E&&(e.remove(E),o.delete(M)),n.releaseStatesOfGeometry(M),M.isInstancedBufferGeometry===!0&&delete M._maxInstanceCount,t.memory.geometries--}function u(y,M){return s[M.id]===!0||(M.addEventListener("dispose",f),s[M.id]=!0,t.memory.geometries++),M}function d(y){const M=y.attributes;for(const A in M)e.update(M[A],i.ARRAY_BUFFER);const E=y.morphAttributes;for(const A in E){const w=E[A];for(let _=0,m=w.length;_<m;_++)e.update(w[_],i.ARRAY_BUFFER)}}function p(y){const M=[],E=y.index,A=y.attributes.position;let w=0;if(E!==null){const O=E.array;w=E.version;for(let R=0,B=O.length;R<B;R+=3){const $=O[R+0],H=O[R+1],c=O[R+2];M.push($,H,H,c,c,$)}}else if(A!==void 0){const O=A.array;w=A.version;for(let R=0,B=O.length/3-1;R<B;R+=3){const $=R+0,H=R+1,c=R+2;M.push($,H,H,c,c,$)}}else return;const _=new(Ml(M)?bl:Tl)(M,1);_.version=w;const m=o.get(y);m&&e.remove(m),o.set(y,_)}function g(y){const M=o.get(y);if(M){const E=y.index;E!==null&&M.version<E.version&&p(y)}else p(y);return o.get(y)}return{get:u,update:d,getWireframeAttribute:g}}function dm(i,e,t){let n;function s(y){n=y}let o,f;function u(y){o=y.type,f=y.bytesPerElement}function d(y,M){i.drawElements(n,M,o,y*f),t.update(M,n,1)}function p(y,M,E){E!==0&&(i.drawElementsInstanced(n,M,o,y*f,E),t.update(M,n,E))}function g(y,M,E){if(E===0)return;const A=e.get("WEBGL_multi_draw");if(A===null)for(let w=0;w<E;w++)this.render(y[w]/f,M[w]);else{A.multiDrawElementsWEBGL(n,M,0,o,y,0,E);let w=0;for(let _=0;_<E;_++)w+=M[_];t.update(w,n,1)}}this.setMode=s,this.setIndex=u,this.render=d,this.renderInstances=p,this.renderMultiDraw=g}function pm(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,f,u){switch(t.calls++,f){case i.TRIANGLES:t.triangles+=u*(o/3);break;case i.LINES:t.lines+=u*(o/2);break;case i.LINE_STRIP:t.lines+=u*(o-1);break;case i.LINE_LOOP:t.lines+=u*o;break;case i.POINTS:t.points+=u*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function mm(i,e,t){const n=new WeakMap,s=new Zt;function o(f,u,d){const p=f.morphTargetInfluences,g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,y=g!==void 0?g.length:0;let M=n.get(u);if(M===void 0||M.count!==y){let C=function(){ee.dispose(),n.delete(u),u.removeEventListener("dispose",C)};var E=C;M!==void 0&&M.texture.dispose();const A=u.morphAttributes.position!==void 0,w=u.morphAttributes.normal!==void 0,_=u.morphAttributes.color!==void 0,m=u.morphAttributes.position||[],O=u.morphAttributes.normal||[],R=u.morphAttributes.color||[];let B=0;A===!0&&(B=1),w===!0&&(B=2),_===!0&&(B=3);let $=u.attributes.position.count*B,H=1;$>e.maxTextureSize&&(H=Math.ceil($/e.maxTextureSize),$=e.maxTextureSize);const c=new Float32Array($*H*4*y),ee=new Sl(c,$,H,y);ee.type=vi,ee.needsUpdate=!0;const P=B*4;for(let j=0;j<y;j++){const ce=m[j],F=O[j],le=R[j],ue=$*H*4*j;for(let xe=0;xe<ce.count;xe++){const me=xe*P;A===!0&&(s.fromBufferAttribute(ce,xe),c[ue+me+0]=s.x,c[ue+me+1]=s.y,c[ue+me+2]=s.z,c[ue+me+3]=0),w===!0&&(s.fromBufferAttribute(F,xe),c[ue+me+4]=s.x,c[ue+me+5]=s.y,c[ue+me+6]=s.z,c[ue+me+7]=0),_===!0&&(s.fromBufferAttribute(le,xe),c[ue+me+8]=s.x,c[ue+me+9]=s.y,c[ue+me+10]=s.z,c[ue+me+11]=le.itemSize===4?s.w:1)}}M={count:y,texture:ee,size:new st($,H)},n.set(u,M),u.addEventListener("dispose",C)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)d.getUniforms().setValue(i,"morphTexture",f.morphTexture,t);else{let A=0;for(let _=0;_<p.length;_++)A+=p[_];const w=u.morphTargetsRelative?1:1-A;d.getUniforms().setValue(i,"morphTargetBaseInfluence",w),d.getUniforms().setValue(i,"morphTargetInfluences",p)}d.getUniforms().setValue(i,"morphTargetsTexture",M.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",M.size)}return{update:o}}function gm(i,e,t,n){let s=new WeakMap;function o(d){const p=n.render.frame,g=d.geometry,y=e.get(d,g);if(s.get(y)!==p&&(e.update(y),s.set(y,p)),d.isInstancedMesh&&(d.hasEventListener("dispose",u)===!1&&d.addEventListener("dispose",u),s.get(d)!==p&&(t.update(d.instanceMatrix,i.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,i.ARRAY_BUFFER),s.set(d,p))),d.isSkinnedMesh){const M=d.skeleton;s.get(M)!==p&&(M.update(),s.set(M,p))}return y}function f(){s=new WeakMap}function u(d){const p=d.target;p.removeEventListener("dispose",u),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:o,dispose:f}}class Ll extends mn{constructor(e,t,n,s,o,f,u,d,p,g){if(g=g!==void 0?g:Er,g!==Er&&g!==Qr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&g===Er&&(n=Pr),n===void 0&&g===Qr&&(n=ts),super(null,s,o,f,u,d,g,n,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=u!==void 0?u:Tn,this.minFilter=d!==void 0?d:Tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Dl=new mn,Ul=new Ll(1,1);Ul.compareFunction=xl;const Nl=new Sl,Il=new eh,Ol=new Cl,Oc=[],Fc=[],Bc=new Float32Array(16),zc=new Float32Array(9),Hc=new Float32Array(4);function Ir(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let o=Oc[s];if(o===void 0&&(o=new Float32Array(s),Oc[s]=o),e!==0){n.toArray(o,0);for(let f=1,u=0;f!==e;++f)u+=t,i[f].toArray(o,u)}return o}function Xt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function qt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ta(i,e){let t=Fc[e];t===void 0&&(t=new Int32Array(e),Fc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function _m(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function vm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2fv(this.addr,e),qt(t,e)}}function xm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Xt(t,e))return;i.uniform3fv(this.addr,e),qt(t,e)}}function Mm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4fv(this.addr,e),qt(t,e)}}function ym(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,n))return;Hc.set(n),i.uniformMatrix2fv(this.addr,!1,Hc),qt(t,n)}}function Sm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,n))return;zc.set(n),i.uniformMatrix3fv(this.addr,!1,zc),qt(t,n)}}function Em(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,n))return;Bc.set(n),i.uniformMatrix4fv(this.addr,!1,Bc),qt(t,n)}}function Tm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function bm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2iv(this.addr,e),qt(t,e)}}function Am(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;i.uniform3iv(this.addr,e),qt(t,e)}}function wm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4iv(this.addr,e),qt(t,e)}}function Cm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Rm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2uiv(this.addr,e),qt(t,e)}}function Pm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;i.uniform3uiv(this.addr,e),qt(t,e)}}function Lm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4uiv(this.addr,e),qt(t,e)}}function Dm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const o=this.type===i.SAMPLER_2D_SHADOW?Ul:Dl;t.setTexture2D(e||o,s)}function Um(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Il,s)}function Nm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Ol,s)}function Im(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Nl,s)}function Om(i){switch(i){case 5126:return _m;case 35664:return vm;case 35665:return xm;case 35666:return Mm;case 35674:return ym;case 35675:return Sm;case 35676:return Em;case 5124:case 35670:return Tm;case 35667:case 35671:return bm;case 35668:case 35672:return Am;case 35669:case 35673:return wm;case 5125:return Cm;case 36294:return Rm;case 36295:return Pm;case 36296:return Lm;case 35678:case 36198:case 36298:case 36306:case 35682:return Dm;case 35679:case 36299:case 36307:return Um;case 35680:case 36300:case 36308:case 36293:return Nm;case 36289:case 36303:case 36311:case 36292:return Im}}function Fm(i,e){i.uniform1fv(this.addr,e)}function Bm(i,e){const t=Ir(e,this.size,2);i.uniform2fv(this.addr,t)}function zm(i,e){const t=Ir(e,this.size,3);i.uniform3fv(this.addr,t)}function Hm(i,e){const t=Ir(e,this.size,4);i.uniform4fv(this.addr,t)}function km(i,e){const t=Ir(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Vm(i,e){const t=Ir(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Gm(i,e){const t=Ir(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Wm(i,e){i.uniform1iv(this.addr,e)}function Xm(i,e){i.uniform2iv(this.addr,e)}function qm(i,e){i.uniform3iv(this.addr,e)}function jm(i,e){i.uniform4iv(this.addr,e)}function Ym(i,e){i.uniform1uiv(this.addr,e)}function $m(i,e){i.uniform2uiv(this.addr,e)}function Km(i,e){i.uniform3uiv(this.addr,e)}function Zm(i,e){i.uniform4uiv(this.addr,e)}function Jm(i,e,t){const n=this.cache,s=e.length,o=ta(t,s);Xt(n,o)||(i.uniform1iv(this.addr,o),qt(n,o));for(let f=0;f!==s;++f)t.setTexture2D(e[f]||Dl,o[f])}function Qm(i,e,t){const n=this.cache,s=e.length,o=ta(t,s);Xt(n,o)||(i.uniform1iv(this.addr,o),qt(n,o));for(let f=0;f!==s;++f)t.setTexture3D(e[f]||Il,o[f])}function eg(i,e,t){const n=this.cache,s=e.length,o=ta(t,s);Xt(n,o)||(i.uniform1iv(this.addr,o),qt(n,o));for(let f=0;f!==s;++f)t.setTextureCube(e[f]||Ol,o[f])}function tg(i,e,t){const n=this.cache,s=e.length,o=ta(t,s);Xt(n,o)||(i.uniform1iv(this.addr,o),qt(n,o));for(let f=0;f!==s;++f)t.setTexture2DArray(e[f]||Nl,o[f])}function ng(i){switch(i){case 5126:return Fm;case 35664:return Bm;case 35665:return zm;case 35666:return Hm;case 35674:return km;case 35675:return Vm;case 35676:return Gm;case 5124:case 35670:return Wm;case 35667:case 35671:return Xm;case 35668:case 35672:return qm;case 35669:case 35673:return jm;case 5125:return Ym;case 36294:return $m;case 36295:return Km;case 36296:return Zm;case 35678:case 36198:case 36298:case 36306:case 35682:return Jm;case 35679:case 36299:case 36307:return Qm;case 35680:case 36300:case 36308:case 36293:return eg;case 36289:case 36303:case 36311:case 36292:return tg}}class ig{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Om(t.type)}}class rg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ng(t.type)}}class sg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let o=0,f=s.length;o!==f;++o){const u=s[o];u.setValue(e,t[u.id],n)}}}const Ja=/(\w+)(\])?(\[|\.)?/g;function kc(i,e){i.seq.push(e),i.map[e.id]=e}function ag(i,e,t){const n=i.name,s=n.length;for(Ja.lastIndex=0;;){const o=Ja.exec(n),f=Ja.lastIndex;let u=o[1];const d=o[2]==="]",p=o[3];if(d&&(u=u|0),p===void 0||p==="["&&f+2===s){kc(t,p===void 0?new ig(u,i,e):new rg(u,i,e));break}else{let y=t.map[u];y===void 0&&(y=new sg(u),kc(t,y)),t=y}}}class Gs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const o=e.getActiveUniform(t,s),f=e.getUniformLocation(t,o.name);ag(o,f,this)}}setValue(e,t,n,s){const o=this.map[t];o!==void 0&&o.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let o=0,f=t.length;o!==f;++o){const u=t[o],d=n[u.id];d.needsUpdate!==!1&&u.setValue(e,d.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,o=e.length;s!==o;++s){const f=e[s];f.id in t&&n.push(f)}return n}}function Vc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const og=37297;let cg=0;function lg(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let f=s;f<o;f++){const u=f+1;n.push(`${u===e?">":" "} ${u}: ${t[f]}`)}return n.join(`
`)}function ug(i){const e=Rt.getPrimaries(Rt.workingColorSpace),t=Rt.getPrimaries(i);let n;switch(e===t?n="":e===Ys&&t===js?n="LinearDisplayP3ToLinearSRGB":e===js&&t===Ys&&(n="LinearSRGBToLinearDisplayP3"),i){case Ti:case Js:return[n,"LinearTransferOETF"];case Gn:case ho:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Gc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const f=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+lg(i.getShaderSource(e),f)}else return s}function fg(i,e){const t=ug(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function hg(i,e){let t;switch(e){case ef:t="Linear";break;case tf:t="Reinhard";break;case nf:t="OptimizedCineon";break;case rf:t="ACESFilmic";break;case af:t="AgX";break;case of:t="Neutral";break;case sf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function dg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($r).join(`
`)}function pg(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function mg(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=i.getActiveAttrib(e,s),f=o.name;let u=1;o.type===i.FLOAT_MAT2&&(u=2),o.type===i.FLOAT_MAT3&&(u=3),o.type===i.FLOAT_MAT4&&(u=4),t[f]={type:o.type,location:i.getAttribLocation(e,f),locationSize:u}}return t}function $r(i){return i!==""}function Wc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const gg=/^[ \t]*#include +<([\w\d./]+)>/gm;function lo(i){return i.replace(gg,vg)}const _g=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function vg(i,e){let t=ft[e];if(t===void 0){const n=_g.get(e);if(n!==void 0)t=ft[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return lo(t)}const xg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qc(i){return i.replace(xg,Mg)}function Mg(i,e,t,n){let s="";for(let o=parseInt(e);o<parseInt(t);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function jc(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function yg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===cl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Au?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ni&&(e="SHADOWMAP_TYPE_VSM"),e}function Sg(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Cr:case Rr:e="ENVMAP_TYPE_CUBE";break;case Zs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Eg(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Rr:e="ENVMAP_MODE_REFRACTION";break}return e}function Tg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ll:e="ENVMAP_BLENDING_MULTIPLY";break;case Ju:e="ENVMAP_BLENDING_MIX";break;case Qu:e="ENVMAP_BLENDING_ADD";break}return e}function bg(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Ag(i,e,t,n){const s=i.getContext(),o=t.defines;let f=t.vertexShader,u=t.fragmentShader;const d=yg(t),p=Sg(t),g=Eg(t),y=Tg(t),M=bg(t),E=dg(t),A=pg(o),w=s.createProgram();let _,m,O=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A].filter($r).join(`
`),_.length>0&&(_+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A].filter($r).join(`
`),m.length>0&&(m+=`
`)):(_=[jc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($r).join(`
`),m=[jc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",t.envMap?"#define "+y:"",M?"#define CUBEUV_TEXEL_WIDTH "+M.texelWidth:"",M?"#define CUBEUV_TEXEL_HEIGHT "+M.texelHeight:"",M?"#define CUBEUV_MAX_MIP "+M.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mi?"#define TONE_MAPPING":"",t.toneMapping!==Mi?ft.tonemapping_pars_fragment:"",t.toneMapping!==Mi?hg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,fg("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($r).join(`
`)),f=lo(f),f=Wc(f,t),f=Xc(f,t),u=lo(u),u=Wc(u,t),u=Xc(u,t),f=qc(f),u=qc(u),t.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,_=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",t.glslVersion===cc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const R=O+_+f,B=O+m+u,$=Vc(s,s.VERTEX_SHADER,R),H=Vc(s,s.FRAGMENT_SHADER,B);s.attachShader(w,$),s.attachShader(w,H),t.index0AttributeName!==void 0?s.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(w,0,"position"),s.linkProgram(w);function c(j){if(i.debug.checkShaderErrors){const ce=s.getProgramInfoLog(w).trim(),F=s.getShaderInfoLog($).trim(),le=s.getShaderInfoLog(H).trim();let ue=!0,xe=!0;if(s.getProgramParameter(w,s.LINK_STATUS)===!1)if(ue=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,w,$,H);else{const me=Gc(s,$,"vertex"),ie=Gc(s,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(w,s.VALIDATE_STATUS)+`

Material Name: `+j.name+`
Material Type: `+j.type+`

Program Info Log: `+ce+`
`+me+`
`+ie)}else ce!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ce):(F===""||le==="")&&(xe=!1);xe&&(j.diagnostics={runnable:ue,programLog:ce,vertexShader:{log:F,prefix:_},fragmentShader:{log:le,prefix:m}})}s.deleteShader($),s.deleteShader(H),ee=new Gs(s,w),P=mg(s,w)}let ee;this.getUniforms=function(){return ee===void 0&&c(this),ee};let P;this.getAttributes=function(){return P===void 0&&c(this),P};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(w,og)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=cg++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=$,this.fragmentShader=H,this}let wg=0;class Cg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),o=this._getShaderStage(n),f=this._getShaderCacheForMaterial(e);return f.has(s)===!1&&(f.add(s),s.usedTimes++),f.has(o)===!1&&(f.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Rg(e),t.set(e,n)),n}}class Rg{constructor(e){this.id=wg++,this.code=e,this.usedTimes=0}}function Pg(i,e,t,n,s,o,f){const u=new mo,d=new Cg,p=new Set,g=[],y=s.logarithmicDepthBuffer,M=s.vertexTextures;let E=s.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(P){return p.add(P),P===0?"uv":`uv${P}`}function _(P,C,j,ce,F){const le=ce.fog,ue=F.geometry,xe=P.isMeshStandardMaterial?ce.environment:null,me=(P.isMeshStandardMaterial?t:e).get(P.envMap||xe),ie=me&&me.mapping===Zs?me.image.height:null,ve=A[P.type];P.precision!==null&&(E=s.getMaxPrecision(P.precision),E!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",E,"instead."));const Me=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,Oe=Me!==void 0?Me.length:0;let ot=0;ue.morphAttributes.position!==void 0&&(ot=1),ue.morphAttributes.normal!==void 0&&(ot=2),ue.morphAttributes.color!==void 0&&(ot=3);let yt,re,Se,Ue;if(ve){const Et=Wn[ve];yt=Et.vertexShader,re=Et.fragmentShader}else yt=P.vertexShader,re=P.fragmentShader,d.update(P),Se=d.getVertexShaderID(P),Ue=d.getFragmentShaderID(P);const we=i.getRenderTarget(),et=F.isInstancedMesh===!0,tt=F.isBatchedMesh===!0,je=!!P.map,X=!!P.matcap,Ke=!!me,ke=!!P.aoMap,Lt=!!P.lightMap,Xe=!!P.bumpMap,xt=!!P.normalMap,U=!!P.displacementMap,b=!!P.emissiveMap,te=!!P.metalnessMap,fe=!!P.roughnessMap,pe=P.anisotropy>0,de=P.clearcoat>0,He=P.iridescence>0,ge=P.sheen>0,he=P.transmission>0,De=pe&&!!P.anisotropyMap,Te=de&&!!P.clearcoatMap,Le=de&&!!P.clearcoatNormalMap,Ye=de&&!!P.clearcoatRoughnessMap,Ne=He&&!!P.iridescenceMap,Ie=He&&!!P.iridescenceThicknessMap,at=ge&&!!P.sheenColorMap,Ze=ge&&!!P.sheenRoughnessMap,dt=!!P.specularMap,ct=!!P.specularColorMap,St=!!P.specularIntensityMap,Fe=he&&!!P.transmissionMap,S=he&&!!P.thicknessMap,Y=!!P.gradientMap,oe=!!P.alphaMap,ye=P.alphaTest>0,Ce=!!P.alphaHash,pt=!!P.extensions;let lt=Mi;P.toneMapped&&(we===null||we.isXRRenderTarget===!0)&&(lt=i.toneMapping);const mt={shaderID:ve,shaderType:P.type,shaderName:P.name,vertexShader:yt,fragmentShader:re,defines:P.defines,customVertexShaderID:Se,customFragmentShaderID:Ue,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:E,batching:tt,instancing:et,instancingColor:et&&F.instanceColor!==null,instancingMorph:et&&F.morphTexture!==null,supportsVertexTextures:M,outputColorSpace:we===null?i.outputColorSpace:we.isXRRenderTarget===!0?we.texture.colorSpace:Ti,alphaToCoverage:!!P.alphaToCoverage,map:je,matcap:X,envMap:Ke,envMapMode:Ke&&me.mapping,envMapCubeUVHeight:ie,aoMap:ke,lightMap:Lt,bumpMap:Xe,normalMap:xt,displacementMap:M&&U,emissiveMap:b,normalMapObjectSpace:xt&&P.normalMapType===Sf,normalMapTangentSpace:xt&&P.normalMapType===yf,metalnessMap:te,roughnessMap:fe,anisotropy:pe,anisotropyMap:De,clearcoat:de,clearcoatMap:Te,clearcoatNormalMap:Le,clearcoatRoughnessMap:Ye,iridescence:He,iridescenceMap:Ne,iridescenceThicknessMap:Ie,sheen:ge,sheenColorMap:at,sheenRoughnessMap:Ze,specularMap:dt,specularColorMap:ct,specularIntensityMap:St,transmission:he,transmissionMap:Fe,thicknessMap:S,gradientMap:Y,opaque:P.transparent===!1&&P.blending===Sr&&P.alphaToCoverage===!1,alphaMap:oe,alphaTest:ye,alphaHash:Ce,combine:P.combine,mapUv:je&&w(P.map.channel),aoMapUv:ke&&w(P.aoMap.channel),lightMapUv:Lt&&w(P.lightMap.channel),bumpMapUv:Xe&&w(P.bumpMap.channel),normalMapUv:xt&&w(P.normalMap.channel),displacementMapUv:U&&w(P.displacementMap.channel),emissiveMapUv:b&&w(P.emissiveMap.channel),metalnessMapUv:te&&w(P.metalnessMap.channel),roughnessMapUv:fe&&w(P.roughnessMap.channel),anisotropyMapUv:De&&w(P.anisotropyMap.channel),clearcoatMapUv:Te&&w(P.clearcoatMap.channel),clearcoatNormalMapUv:Le&&w(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ye&&w(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Ne&&w(P.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&w(P.iridescenceThicknessMap.channel),sheenColorMapUv:at&&w(P.sheenColorMap.channel),sheenRoughnessMapUv:Ze&&w(P.sheenRoughnessMap.channel),specularMapUv:dt&&w(P.specularMap.channel),specularColorMapUv:ct&&w(P.specularColorMap.channel),specularIntensityMapUv:St&&w(P.specularIntensityMap.channel),transmissionMapUv:Fe&&w(P.transmissionMap.channel),thicknessMapUv:S&&w(P.thicknessMap.channel),alphaMapUv:oe&&w(P.alphaMap.channel),vertexTangents:!!ue.attributes.tangent&&(xt||pe),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!ue.attributes.uv&&(je||oe),fog:!!le,useFog:P.fog===!0,fogExp2:!!le&&le.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:y,skinning:F.isSkinnedMesh===!0,morphTargets:ue.morphAttributes.position!==void 0,morphNormals:ue.morphAttributes.normal!==void 0,morphColors:ue.morphAttributes.color!==void 0,morphTargetsCount:Oe,morphTextureStride:ot,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:P.dithering,shadowMapEnabled:i.shadowMap.enabled&&j.length>0,shadowMapType:i.shadowMap.type,toneMapping:lt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:je&&P.map.isVideoTexture===!0&&Rt.getTransfer(P.map.colorSpace)===Ut,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===fn,flipSided:P.side===pn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:pt&&P.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:pt&&P.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return mt.vertexUv1s=p.has(1),mt.vertexUv2s=p.has(2),mt.vertexUv3s=p.has(3),p.clear(),mt}function m(P){const C=[];if(P.shaderID?C.push(P.shaderID):(C.push(P.customVertexShaderID),C.push(P.customFragmentShaderID)),P.defines!==void 0)for(const j in P.defines)C.push(j),C.push(P.defines[j]);return P.isRawShaderMaterial===!1&&(O(C,P),R(C,P),C.push(i.outputColorSpace)),C.push(P.customProgramCacheKey),C.join()}function O(P,C){P.push(C.precision),P.push(C.outputColorSpace),P.push(C.envMapMode),P.push(C.envMapCubeUVHeight),P.push(C.mapUv),P.push(C.alphaMapUv),P.push(C.lightMapUv),P.push(C.aoMapUv),P.push(C.bumpMapUv),P.push(C.normalMapUv),P.push(C.displacementMapUv),P.push(C.emissiveMapUv),P.push(C.metalnessMapUv),P.push(C.roughnessMapUv),P.push(C.anisotropyMapUv),P.push(C.clearcoatMapUv),P.push(C.clearcoatNormalMapUv),P.push(C.clearcoatRoughnessMapUv),P.push(C.iridescenceMapUv),P.push(C.iridescenceThicknessMapUv),P.push(C.sheenColorMapUv),P.push(C.sheenRoughnessMapUv),P.push(C.specularMapUv),P.push(C.specularColorMapUv),P.push(C.specularIntensityMapUv),P.push(C.transmissionMapUv),P.push(C.thicknessMapUv),P.push(C.combine),P.push(C.fogExp2),P.push(C.sizeAttenuation),P.push(C.morphTargetsCount),P.push(C.morphAttributeCount),P.push(C.numDirLights),P.push(C.numPointLights),P.push(C.numSpotLights),P.push(C.numSpotLightMaps),P.push(C.numHemiLights),P.push(C.numRectAreaLights),P.push(C.numDirLightShadows),P.push(C.numPointLightShadows),P.push(C.numSpotLightShadows),P.push(C.numSpotLightShadowsWithMaps),P.push(C.numLightProbes),P.push(C.shadowMapType),P.push(C.toneMapping),P.push(C.numClippingPlanes),P.push(C.numClipIntersection),P.push(C.depthPacking)}function R(P,C){u.disableAll(),C.supportsVertexTextures&&u.enable(0),C.instancing&&u.enable(1),C.instancingColor&&u.enable(2),C.instancingMorph&&u.enable(3),C.matcap&&u.enable(4),C.envMap&&u.enable(5),C.normalMapObjectSpace&&u.enable(6),C.normalMapTangentSpace&&u.enable(7),C.clearcoat&&u.enable(8),C.iridescence&&u.enable(9),C.alphaTest&&u.enable(10),C.vertexColors&&u.enable(11),C.vertexAlphas&&u.enable(12),C.vertexUv1s&&u.enable(13),C.vertexUv2s&&u.enable(14),C.vertexUv3s&&u.enable(15),C.vertexTangents&&u.enable(16),C.anisotropy&&u.enable(17),C.alphaHash&&u.enable(18),C.batching&&u.enable(19),P.push(u.mask),u.disableAll(),C.fog&&u.enable(0),C.useFog&&u.enable(1),C.flatShading&&u.enable(2),C.logarithmicDepthBuffer&&u.enable(3),C.skinning&&u.enable(4),C.morphTargets&&u.enable(5),C.morphNormals&&u.enable(6),C.morphColors&&u.enable(7),C.premultipliedAlpha&&u.enable(8),C.shadowMapEnabled&&u.enable(9),C.useLegacyLights&&u.enable(10),C.doubleSided&&u.enable(11),C.flipSided&&u.enable(12),C.useDepthPacking&&u.enable(13),C.dithering&&u.enable(14),C.transmission&&u.enable(15),C.sheen&&u.enable(16),C.opaque&&u.enable(17),C.pointsUvs&&u.enable(18),C.decodeVideoTexture&&u.enable(19),C.alphaToCoverage&&u.enable(20),P.push(u.mask)}function B(P){const C=A[P.type];let j;if(C){const ce=Wn[C];j=hh.clone(ce.uniforms)}else j=P.uniforms;return j}function $(P,C){let j;for(let ce=0,F=g.length;ce<F;ce++){const le=g[ce];if(le.cacheKey===C){j=le,++j.usedTimes;break}}return j===void 0&&(j=new Ag(i,C,P,o),g.push(j)),j}function H(P){if(--P.usedTimes===0){const C=g.indexOf(P);g[C]=g[g.length-1],g.pop(),P.destroy()}}function c(P){d.remove(P)}function ee(){d.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:B,acquireProgram:$,releaseProgram:H,releaseShaderCache:c,programs:g,dispose:ee}}function Lg(){let i=new WeakMap;function e(o){let f=i.get(o);return f===void 0&&(f={},i.set(o,f)),f}function t(o){i.delete(o)}function n(o,f,u){i.get(o)[f]=u}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function Dg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Yc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function $c(){const i=[];let e=0;const t=[],n=[],s=[];function o(){e=0,t.length=0,n.length=0,s.length=0}function f(y,M,E,A,w,_){let m=i[e];return m===void 0?(m={id:y.id,object:y,geometry:M,material:E,groupOrder:A,renderOrder:y.renderOrder,z:w,group:_},i[e]=m):(m.id=y.id,m.object=y,m.geometry=M,m.material=E,m.groupOrder=A,m.renderOrder=y.renderOrder,m.z=w,m.group=_),e++,m}function u(y,M,E,A,w,_){const m=f(y,M,E,A,w,_);E.transmission>0?n.push(m):E.transparent===!0?s.push(m):t.push(m)}function d(y,M,E,A,w,_){const m=f(y,M,E,A,w,_);E.transmission>0?n.unshift(m):E.transparent===!0?s.unshift(m):t.unshift(m)}function p(y,M){t.length>1&&t.sort(y||Dg),n.length>1&&n.sort(M||Yc),s.length>1&&s.sort(M||Yc)}function g(){for(let y=e,M=i.length;y<M;y++){const E=i[y];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:t,transmissive:n,transparent:s,init:o,push:u,unshift:d,finish:g,sort:p}}function Ug(){let i=new WeakMap;function e(n,s){const o=i.get(n);let f;return o===void 0?(f=new $c,i.set(n,[f])):s>=o.length?(f=new $c,o.push(f)):f=o[s],f}function t(){i=new WeakMap}return{get:e,dispose:t}}function Ng(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new At};break;case"SpotLight":t={position:new G,direction:new G,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new At,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new At,groundColor:new At};break;case"RectAreaLight":t={color:new At,position:new G,halfWidth:new G,halfHeight:new G};break}return i[e.id]=t,t}}}function Ig(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Og=0;function Fg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Bg(i){const e=new Ng,t=Ig(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)n.probe.push(new G);const s=new G,o=new zt,f=new zt;function u(p,g){let y=0,M=0,E=0;for(let j=0;j<9;j++)n.probe[j].set(0,0,0);let A=0,w=0,_=0,m=0,O=0,R=0,B=0,$=0,H=0,c=0,ee=0;p.sort(Fg);const P=g===!0?Math.PI:1;for(let j=0,ce=p.length;j<ce;j++){const F=p[j],le=F.color,ue=F.intensity,xe=F.distance,me=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)y+=le.r*ue*P,M+=le.g*ue*P,E+=le.b*ue*P;else if(F.isLightProbe){for(let ie=0;ie<9;ie++)n.probe[ie].addScaledVector(F.sh.coefficients[ie],ue);ee++}else if(F.isDirectionalLight){const ie=e.get(F);if(ie.color.copy(F.color).multiplyScalar(F.intensity*P),F.castShadow){const ve=F.shadow,Me=t.get(F);Me.shadowBias=ve.bias,Me.shadowNormalBias=ve.normalBias,Me.shadowRadius=ve.radius,Me.shadowMapSize=ve.mapSize,n.directionalShadow[A]=Me,n.directionalShadowMap[A]=me,n.directionalShadowMatrix[A]=F.shadow.matrix,R++}n.directional[A]=ie,A++}else if(F.isSpotLight){const ie=e.get(F);ie.position.setFromMatrixPosition(F.matrixWorld),ie.color.copy(le).multiplyScalar(ue*P),ie.distance=xe,ie.coneCos=Math.cos(F.angle),ie.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),ie.decay=F.decay,n.spot[_]=ie;const ve=F.shadow;if(F.map&&(n.spotLightMap[H]=F.map,H++,ve.updateMatrices(F),F.castShadow&&c++),n.spotLightMatrix[_]=ve.matrix,F.castShadow){const Me=t.get(F);Me.shadowBias=ve.bias,Me.shadowNormalBias=ve.normalBias,Me.shadowRadius=ve.radius,Me.shadowMapSize=ve.mapSize,n.spotShadow[_]=Me,n.spotShadowMap[_]=me,$++}_++}else if(F.isRectAreaLight){const ie=e.get(F);ie.color.copy(le).multiplyScalar(ue),ie.halfWidth.set(F.width*.5,0,0),ie.halfHeight.set(0,F.height*.5,0),n.rectArea[m]=ie,m++}else if(F.isPointLight){const ie=e.get(F);if(ie.color.copy(F.color).multiplyScalar(F.intensity*P),ie.distance=F.distance,ie.decay=F.decay,F.castShadow){const ve=F.shadow,Me=t.get(F);Me.shadowBias=ve.bias,Me.shadowNormalBias=ve.normalBias,Me.shadowRadius=ve.radius,Me.shadowMapSize=ve.mapSize,Me.shadowCameraNear=ve.camera.near,Me.shadowCameraFar=ve.camera.far,n.pointShadow[w]=Me,n.pointShadowMap[w]=me,n.pointShadowMatrix[w]=F.shadow.matrix,B++}n.point[w]=ie,w++}else if(F.isHemisphereLight){const ie=e.get(F);ie.skyColor.copy(F.color).multiplyScalar(ue*P),ie.groundColor.copy(F.groundColor).multiplyScalar(ue*P),n.hemi[O]=ie,O++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ae.LTC_FLOAT_1,n.rectAreaLTC2=Ae.LTC_FLOAT_2):(n.rectAreaLTC1=Ae.LTC_HALF_1,n.rectAreaLTC2=Ae.LTC_HALF_2)),n.ambient[0]=y,n.ambient[1]=M,n.ambient[2]=E;const C=n.hash;(C.directionalLength!==A||C.pointLength!==w||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==O||C.numDirectionalShadows!==R||C.numPointShadows!==B||C.numSpotShadows!==$||C.numSpotMaps!==H||C.numLightProbes!==ee)&&(n.directional.length=A,n.spot.length=_,n.rectArea.length=m,n.point.length=w,n.hemi.length=O,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.pointShadow.length=B,n.pointShadowMap.length=B,n.spotShadow.length=$,n.spotShadowMap.length=$,n.directionalShadowMatrix.length=R,n.pointShadowMatrix.length=B,n.spotLightMatrix.length=$+H-c,n.spotLightMap.length=H,n.numSpotLightShadowsWithMaps=c,n.numLightProbes=ee,C.directionalLength=A,C.pointLength=w,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=O,C.numDirectionalShadows=R,C.numPointShadows=B,C.numSpotShadows=$,C.numSpotMaps=H,C.numLightProbes=ee,n.version=Og++)}function d(p,g){let y=0,M=0,E=0,A=0,w=0;const _=g.matrixWorldInverse;for(let m=0,O=p.length;m<O;m++){const R=p[m];if(R.isDirectionalLight){const B=n.directional[y];B.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),B.direction.sub(s),B.direction.transformDirection(_),y++}else if(R.isSpotLight){const B=n.spot[E];B.position.setFromMatrixPosition(R.matrixWorld),B.position.applyMatrix4(_),B.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),B.direction.sub(s),B.direction.transformDirection(_),E++}else if(R.isRectAreaLight){const B=n.rectArea[A];B.position.setFromMatrixPosition(R.matrixWorld),B.position.applyMatrix4(_),f.identity(),o.copy(R.matrixWorld),o.premultiply(_),f.extractRotation(o),B.halfWidth.set(R.width*.5,0,0),B.halfHeight.set(0,R.height*.5,0),B.halfWidth.applyMatrix4(f),B.halfHeight.applyMatrix4(f),A++}else if(R.isPointLight){const B=n.point[M];B.position.setFromMatrixPosition(R.matrixWorld),B.position.applyMatrix4(_),M++}else if(R.isHemisphereLight){const B=n.hemi[w];B.direction.setFromMatrixPosition(R.matrixWorld),B.direction.transformDirection(_),w++}}}return{setup:u,setupView:d,state:n}}function Kc(i){const e=new Bg(i),t=[],n=[];function s(){t.length=0,n.length=0}function o(g){t.push(g)}function f(g){n.push(g)}function u(g){e.setup(t,g)}function d(g){e.setupView(t,g)}return{init:s,state:{lightsArray:t,shadowsArray:n,lights:e,transmissionRenderTarget:null},setupLights:u,setupLightsView:d,pushLight:o,pushShadow:f}}function zg(i){let e=new WeakMap;function t(s,o=0){const f=e.get(s);let u;return f===void 0?(u=new Kc(i),e.set(s,[u])):o>=f.length?(u=new Kc(i),f.push(u)):u=f[o],u}function n(){e=new WeakMap}return{get:t,dispose:n}}class Hg extends is{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class kg extends is{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Vg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Wg(i,e,t){let n=new Rl;const s=new st,o=new st,f=new Zt,u=new Hg({depthPacking:Mf}),d=new kg,p={},g=t.maxTextureSize,y={[Si]:pn,[pn]:Si,[fn]:fn},M=new Ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:Vg,fragmentShader:Gg}),E=M.clone();E.defines.HORIZONTAL_PASS=1;const A=new ri;A.setAttribute("position",new qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new hn(A,M),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cl;let m=this.type;this.render=function(H,c,ee){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||H.length===0)return;const P=i.getRenderTarget(),C=i.getActiveCubeFace(),j=i.getActiveMipmapLevel(),ce=i.state;ce.setBlending(xi),ce.buffers.color.setClear(1,1,1,1),ce.buffers.depth.setTest(!0),ce.setScissorTest(!1);const F=m!==ni&&this.type===ni,le=m===ni&&this.type!==ni;for(let ue=0,xe=H.length;ue<xe;ue++){const me=H[ue],ie=me.shadow;if(ie===void 0){console.warn("THREE.WebGLShadowMap:",me,"has no shadow.");continue}if(ie.autoUpdate===!1&&ie.needsUpdate===!1)continue;s.copy(ie.mapSize);const ve=ie.getFrameExtents();if(s.multiply(ve),o.copy(ie.mapSize),(s.x>g||s.y>g)&&(s.x>g&&(o.x=Math.floor(g/ve.x),s.x=o.x*ve.x,ie.mapSize.x=o.x),s.y>g&&(o.y=Math.floor(g/ve.y),s.y=o.y*ve.y,ie.mapSize.y=o.y)),ie.map===null||F===!0||le===!0){const Oe=this.type!==ni?{minFilter:Tn,magFilter:Tn}:{};ie.map!==null&&ie.map.dispose(),ie.map=new qi(s.x,s.y,Oe),ie.map.texture.name=me.name+".shadowMap",ie.camera.updateProjectionMatrix()}i.setRenderTarget(ie.map),i.clear();const Me=ie.getViewportCount();for(let Oe=0;Oe<Me;Oe++){const ot=ie.getViewport(Oe);f.set(o.x*ot.x,o.y*ot.y,o.x*ot.z,o.y*ot.w),ce.viewport(f),ie.updateMatrices(me,Oe),n=ie.getFrustum(),B(c,ee,ie.camera,me,this.type)}ie.isPointLightShadow!==!0&&this.type===ni&&O(ie,ee),ie.needsUpdate=!1}m=this.type,_.needsUpdate=!1,i.setRenderTarget(P,C,j)};function O(H,c){const ee=e.update(w);M.defines.VSM_SAMPLES!==H.blurSamples&&(M.defines.VSM_SAMPLES=H.blurSamples,E.defines.VSM_SAMPLES=H.blurSamples,M.needsUpdate=!0,E.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new qi(s.x,s.y)),M.uniforms.shadow_pass.value=H.map.texture,M.uniforms.resolution.value=H.mapSize,M.uniforms.radius.value=H.radius,i.setRenderTarget(H.mapPass),i.clear(),i.renderBufferDirect(c,null,ee,M,w,null),E.uniforms.shadow_pass.value=H.mapPass.texture,E.uniforms.resolution.value=H.mapSize,E.uniforms.radius.value=H.radius,i.setRenderTarget(H.map),i.clear(),i.renderBufferDirect(c,null,ee,E,w,null)}function R(H,c,ee,P){let C=null;const j=ee.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(j!==void 0)C=j;else if(C=ee.isPointLight===!0?d:u,i.localClippingEnabled&&c.clipShadows===!0&&Array.isArray(c.clippingPlanes)&&c.clippingPlanes.length!==0||c.displacementMap&&c.displacementScale!==0||c.alphaMap&&c.alphaTest>0||c.map&&c.alphaTest>0){const ce=C.uuid,F=c.uuid;let le=p[ce];le===void 0&&(le={},p[ce]=le);let ue=le[F];ue===void 0&&(ue=C.clone(),le[F]=ue,c.addEventListener("dispose",$)),C=ue}if(C.visible=c.visible,C.wireframe=c.wireframe,P===ni?C.side=c.shadowSide!==null?c.shadowSide:c.side:C.side=c.shadowSide!==null?c.shadowSide:y[c.side],C.alphaMap=c.alphaMap,C.alphaTest=c.alphaTest,C.map=c.map,C.clipShadows=c.clipShadows,C.clippingPlanes=c.clippingPlanes,C.clipIntersection=c.clipIntersection,C.displacementMap=c.displacementMap,C.displacementScale=c.displacementScale,C.displacementBias=c.displacementBias,C.wireframeLinewidth=c.wireframeLinewidth,C.linewidth=c.linewidth,ee.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const ce=i.properties.get(C);ce.light=ee}return C}function B(H,c,ee,P,C){if(H.visible===!1)return;if(H.layers.test(c.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&C===ni)&&(!H.frustumCulled||n.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,H.matrixWorld);const F=e.update(H),le=H.material;if(Array.isArray(le)){const ue=F.groups;for(let xe=0,me=ue.length;xe<me;xe++){const ie=ue[xe],ve=le[ie.materialIndex];if(ve&&ve.visible){const Me=R(H,ve,P,C);H.onBeforeShadow(i,H,c,ee,F,Me,ie),i.renderBufferDirect(ee,null,F,Me,H,ie),H.onAfterShadow(i,H,c,ee,F,Me,ie)}}}else if(le.visible){const ue=R(H,le,P,C);H.onBeforeShadow(i,H,c,ee,F,ue,null),i.renderBufferDirect(ee,null,F,ue,H,null),H.onAfterShadow(i,H,c,ee,F,ue,null)}}const ce=H.children;for(let F=0,le=ce.length;F<le;F++)B(ce[F],c,ee,P,C)}function $(H){H.target.removeEventListener("dispose",$);for(const ee in p){const P=p[ee],C=H.target.uuid;C in P&&(P[C].dispose(),delete P[C])}}}function Xg(i){function e(){let S=!1;const Y=new Zt;let oe=null;const ye=new Zt(0,0,0,0);return{setMask:function(Ce){oe!==Ce&&!S&&(i.colorMask(Ce,Ce,Ce,Ce),oe=Ce)},setLocked:function(Ce){S=Ce},setClear:function(Ce,pt,lt,mt,Et){Et===!0&&(Ce*=mt,pt*=mt,lt*=mt),Y.set(Ce,pt,lt,mt),ye.equals(Y)===!1&&(i.clearColor(Ce,pt,lt,mt),ye.copy(Y))},reset:function(){S=!1,oe=null,ye.set(-1,0,0,0)}}}function t(){let S=!1,Y=null,oe=null,ye=null;return{setTest:function(Ce){Ce?Ue(i.DEPTH_TEST):we(i.DEPTH_TEST)},setMask:function(Ce){Y!==Ce&&!S&&(i.depthMask(Ce),Y=Ce)},setFunc:function(Ce){if(oe!==Ce){switch(Ce){case Xu:i.depthFunc(i.NEVER);break;case qu:i.depthFunc(i.ALWAYS);break;case ju:i.depthFunc(i.LESS);break;case Ws:i.depthFunc(i.LEQUAL);break;case Yu:i.depthFunc(i.EQUAL);break;case $u:i.depthFunc(i.GEQUAL);break;case Ku:i.depthFunc(i.GREATER);break;case Zu:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}oe=Ce}},setLocked:function(Ce){S=Ce},setClear:function(Ce){ye!==Ce&&(i.clearDepth(Ce),ye=Ce)},reset:function(){S=!1,Y=null,oe=null,ye=null}}}function n(){let S=!1,Y=null,oe=null,ye=null,Ce=null,pt=null,lt=null,mt=null,Et=null;return{setTest:function(bt){S||(bt?Ue(i.STENCIL_TEST):we(i.STENCIL_TEST))},setMask:function(bt){Y!==bt&&!S&&(i.stencilMask(bt),Y=bt)},setFunc:function(bt,Ot,It){(oe!==bt||ye!==Ot||Ce!==It)&&(i.stencilFunc(bt,Ot,It),oe=bt,ye=Ot,Ce=It)},setOp:function(bt,Ot,It){(pt!==bt||lt!==Ot||mt!==It)&&(i.stencilOp(bt,Ot,It),pt=bt,lt=Ot,mt=It)},setLocked:function(bt){S=bt},setClear:function(bt){Et!==bt&&(i.clearStencil(bt),Et=bt)},reset:function(){S=!1,Y=null,oe=null,ye=null,Ce=null,pt=null,lt=null,mt=null,Et=null}}}const s=new e,o=new t,f=new n,u=new WeakMap,d=new WeakMap;let p={},g={},y=new WeakMap,M=[],E=null,A=!1,w=null,_=null,m=null,O=null,R=null,B=null,$=null,H=new At(0,0,0),c=0,ee=!1,P=null,C=null,j=null,ce=null,F=null;const le=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ue=!1,xe=0;const me=i.getParameter(i.VERSION);me.indexOf("WebGL")!==-1?(xe=parseFloat(/^WebGL (\d)/.exec(me)[1]),ue=xe>=1):me.indexOf("OpenGL ES")!==-1&&(xe=parseFloat(/^OpenGL ES (\d)/.exec(me)[1]),ue=xe>=2);let ie=null,ve={};const Me=i.getParameter(i.SCISSOR_BOX),Oe=i.getParameter(i.VIEWPORT),ot=new Zt().fromArray(Me),yt=new Zt().fromArray(Oe);function re(S,Y,oe,ye){const Ce=new Uint8Array(4),pt=i.createTexture();i.bindTexture(S,pt),i.texParameteri(S,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(S,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let lt=0;lt<oe;lt++)S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY?i.texImage3D(Y,0,i.RGBA,1,1,ye,0,i.RGBA,i.UNSIGNED_BYTE,Ce):i.texImage2D(Y+lt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ce);return pt}const Se={};Se[i.TEXTURE_2D]=re(i.TEXTURE_2D,i.TEXTURE_2D,1),Se[i.TEXTURE_CUBE_MAP]=re(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[i.TEXTURE_2D_ARRAY]=re(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Se[i.TEXTURE_3D]=re(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),f.setClear(0),Ue(i.DEPTH_TEST),o.setFunc(Ws),Xe(!1),xt(Lo),Ue(i.CULL_FACE),ke(xi);function Ue(S){p[S]!==!0&&(i.enable(S),p[S]=!0)}function we(S){p[S]!==!1&&(i.disable(S),p[S]=!1)}function et(S,Y){return g[S]!==Y?(i.bindFramebuffer(S,Y),g[S]=Y,S===i.DRAW_FRAMEBUFFER&&(g[i.FRAMEBUFFER]=Y),S===i.FRAMEBUFFER&&(g[i.DRAW_FRAMEBUFFER]=Y),!0):!1}function tt(S,Y){let oe=M,ye=!1;if(S){oe=y.get(Y),oe===void 0&&(oe=[],y.set(Y,oe));const Ce=S.textures;if(oe.length!==Ce.length||oe[0]!==i.COLOR_ATTACHMENT0){for(let pt=0,lt=Ce.length;pt<lt;pt++)oe[pt]=i.COLOR_ATTACHMENT0+pt;oe.length=Ce.length,ye=!0}}else oe[0]!==i.BACK&&(oe[0]=i.BACK,ye=!0);ye&&i.drawBuffers(oe)}function je(S){return E!==S?(i.useProgram(S),E=S,!0):!1}const X={[Hi]:i.FUNC_ADD,[Cu]:i.FUNC_SUBTRACT,[Ru]:i.FUNC_REVERSE_SUBTRACT};X[Pu]=i.MIN,X[Lu]=i.MAX;const Ke={[Du]:i.ZERO,[Uu]:i.ONE,[Nu]:i.SRC_COLOR,[io]:i.SRC_ALPHA,[Hu]:i.SRC_ALPHA_SATURATE,[Bu]:i.DST_COLOR,[Ou]:i.DST_ALPHA,[Iu]:i.ONE_MINUS_SRC_COLOR,[ro]:i.ONE_MINUS_SRC_ALPHA,[zu]:i.ONE_MINUS_DST_COLOR,[Fu]:i.ONE_MINUS_DST_ALPHA,[ku]:i.CONSTANT_COLOR,[Vu]:i.ONE_MINUS_CONSTANT_COLOR,[Gu]:i.CONSTANT_ALPHA,[Wu]:i.ONE_MINUS_CONSTANT_ALPHA};function ke(S,Y,oe,ye,Ce,pt,lt,mt,Et,bt){if(S===xi){A===!0&&(we(i.BLEND),A=!1);return}if(A===!1&&(Ue(i.BLEND),A=!0),S!==wu){if(S!==w||bt!==ee){if((_!==Hi||R!==Hi)&&(i.blendEquation(i.FUNC_ADD),_=Hi,R=Hi),bt)switch(S){case Sr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Do:i.blendFunc(i.ONE,i.ONE);break;case Uo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case No:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}else switch(S){case Sr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Do:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Uo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case No:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}m=null,O=null,B=null,$=null,H.set(0,0,0),c=0,w=S,ee=bt}return}Ce=Ce||Y,pt=pt||oe,lt=lt||ye,(Y!==_||Ce!==R)&&(i.blendEquationSeparate(X[Y],X[Ce]),_=Y,R=Ce),(oe!==m||ye!==O||pt!==B||lt!==$)&&(i.blendFuncSeparate(Ke[oe],Ke[ye],Ke[pt],Ke[lt]),m=oe,O=ye,B=pt,$=lt),(mt.equals(H)===!1||Et!==c)&&(i.blendColor(mt.r,mt.g,mt.b,Et),H.copy(mt),c=Et),w=S,ee=!1}function Lt(S,Y){S.side===fn?we(i.CULL_FACE):Ue(i.CULL_FACE);let oe=S.side===pn;Y&&(oe=!oe),Xe(oe),S.blending===Sr&&S.transparent===!1?ke(xi):ke(S.blending,S.blendEquation,S.blendSrc,S.blendDst,S.blendEquationAlpha,S.blendSrcAlpha,S.blendDstAlpha,S.blendColor,S.blendAlpha,S.premultipliedAlpha),o.setFunc(S.depthFunc),o.setTest(S.depthTest),o.setMask(S.depthWrite),s.setMask(S.colorWrite);const ye=S.stencilWrite;f.setTest(ye),ye&&(f.setMask(S.stencilWriteMask),f.setFunc(S.stencilFunc,S.stencilRef,S.stencilFuncMask),f.setOp(S.stencilFail,S.stencilZFail,S.stencilZPass)),b(S.polygonOffset,S.polygonOffsetFactor,S.polygonOffsetUnits),S.alphaToCoverage===!0?Ue(i.SAMPLE_ALPHA_TO_COVERAGE):we(i.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(S){P!==S&&(S?i.frontFace(i.CW):i.frontFace(i.CCW),P=S)}function xt(S){S!==Tu?(Ue(i.CULL_FACE),S!==C&&(S===Lo?i.cullFace(i.BACK):S===bu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):we(i.CULL_FACE),C=S}function U(S){S!==j&&(ue&&i.lineWidth(S),j=S)}function b(S,Y,oe){S?(Ue(i.POLYGON_OFFSET_FILL),(ce!==Y||F!==oe)&&(i.polygonOffset(Y,oe),ce=Y,F=oe)):we(i.POLYGON_OFFSET_FILL)}function te(S){S?Ue(i.SCISSOR_TEST):we(i.SCISSOR_TEST)}function fe(S){S===void 0&&(S=i.TEXTURE0+le-1),ie!==S&&(i.activeTexture(S),ie=S)}function pe(S,Y,oe){oe===void 0&&(ie===null?oe=i.TEXTURE0+le-1:oe=ie);let ye=ve[oe];ye===void 0&&(ye={type:void 0,texture:void 0},ve[oe]=ye),(ye.type!==S||ye.texture!==Y)&&(ie!==oe&&(i.activeTexture(oe),ie=oe),i.bindTexture(S,Y||Se[S]),ye.type=S,ye.texture=Y)}function de(){const S=ve[ie];S!==void 0&&S.type!==void 0&&(i.bindTexture(S.type,null),S.type=void 0,S.texture=void 0)}function He(){try{i.compressedTexImage2D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function ge(){try{i.compressedTexImage3D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function he(){try{i.texSubImage2D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function De(){try{i.texSubImage3D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Te(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Le(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Ye(){try{i.texStorage2D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Ne(){try{i.texStorage3D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Ie(){try{i.texImage2D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function at(){try{i.texImage3D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Ze(S){ot.equals(S)===!1&&(i.scissor(S.x,S.y,S.z,S.w),ot.copy(S))}function dt(S){yt.equals(S)===!1&&(i.viewport(S.x,S.y,S.z,S.w),yt.copy(S))}function ct(S,Y){let oe=d.get(Y);oe===void 0&&(oe=new WeakMap,d.set(Y,oe));let ye=oe.get(S);ye===void 0&&(ye=i.getUniformBlockIndex(Y,S.name),oe.set(S,ye))}function St(S,Y){const ye=d.get(Y).get(S);u.get(Y)!==ye&&(i.uniformBlockBinding(Y,ye,S.__bindingPointIndex),u.set(Y,ye))}function Fe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},ie=null,ve={},g={},y=new WeakMap,M=[],E=null,A=!1,w=null,_=null,m=null,O=null,R=null,B=null,$=null,H=new At(0,0,0),c=0,ee=!1,P=null,C=null,j=null,ce=null,F=null,ot.set(0,0,i.canvas.width,i.canvas.height),yt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),f.reset()}return{buffers:{color:s,depth:o,stencil:f},enable:Ue,disable:we,bindFramebuffer:et,drawBuffers:tt,useProgram:je,setBlending:ke,setMaterial:Lt,setFlipSided:Xe,setCullFace:xt,setLineWidth:U,setPolygonOffset:b,setScissorTest:te,activeTexture:fe,bindTexture:pe,unbindTexture:de,compressedTexImage2D:He,compressedTexImage3D:ge,texImage2D:Ie,texImage3D:at,updateUBOMapping:ct,uniformBlockBinding:St,texStorage2D:Ye,texStorage3D:Ne,texSubImage2D:he,texSubImage3D:De,compressedTexSubImage2D:Te,compressedTexSubImage3D:Le,scissor:Ze,viewport:dt,reset:Fe}}function qg(i,e,t,n,s,o,f){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new st,g=new WeakMap;let y;const M=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(U,b){return E?new OffscreenCanvas(U,b):Ks("canvas")}function w(U,b,te){let fe=1;const pe=xt(U);if((pe.width>te||pe.height>te)&&(fe=te/Math.max(pe.width,pe.height)),fe<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const de=Math.floor(fe*pe.width),He=Math.floor(fe*pe.height);y===void 0&&(y=A(de,He));const ge=b?A(de,He):y;return ge.width=de,ge.height=He,ge.getContext("2d").drawImage(U,0,0,de,He),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+de+"x"+He+")."),ge}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),U;return U}function _(U){return U.generateMipmaps&&U.minFilter!==Tn&&U.minFilter!==Ln}function m(U){i.generateMipmap(U)}function O(U,b,te,fe,pe=!1){if(U!==null){if(i[U]!==void 0)return i[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let de=b;if(b===i.RED&&(te===i.FLOAT&&(de=i.R32F),te===i.HALF_FLOAT&&(de=i.R16F),te===i.UNSIGNED_BYTE&&(de=i.R8)),b===i.RED_INTEGER&&(te===i.UNSIGNED_BYTE&&(de=i.R8UI),te===i.UNSIGNED_SHORT&&(de=i.R16UI),te===i.UNSIGNED_INT&&(de=i.R32UI),te===i.BYTE&&(de=i.R8I),te===i.SHORT&&(de=i.R16I),te===i.INT&&(de=i.R32I)),b===i.RG&&(te===i.FLOAT&&(de=i.RG32F),te===i.HALF_FLOAT&&(de=i.RG16F),te===i.UNSIGNED_BYTE&&(de=i.RG8)),b===i.RG_INTEGER&&(te===i.UNSIGNED_BYTE&&(de=i.RG8UI),te===i.UNSIGNED_SHORT&&(de=i.RG16UI),te===i.UNSIGNED_INT&&(de=i.RG32UI),te===i.BYTE&&(de=i.RG8I),te===i.SHORT&&(de=i.RG16I),te===i.INT&&(de=i.RG32I)),b===i.RGB&&te===i.UNSIGNED_INT_5_9_9_9_REV&&(de=i.RGB9_E5),b===i.RGBA){const He=pe?qs:Rt.getTransfer(fe);te===i.FLOAT&&(de=i.RGBA32F),te===i.HALF_FLOAT&&(de=i.RGBA16F),te===i.UNSIGNED_BYTE&&(de=He===Ut?i.SRGB8_ALPHA8:i.RGBA8),te===i.UNSIGNED_SHORT_4_4_4_4&&(de=i.RGBA4),te===i.UNSIGNED_SHORT_5_5_5_1&&(de=i.RGB5_A1)}return(de===i.R16F||de===i.R32F||de===i.RG16F||de===i.RG32F||de===i.RGBA16F||de===i.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function R(U,b){return _(U)===!0||U.isFramebufferTexture&&U.minFilter!==Tn&&U.minFilter!==Ln?Math.log2(Math.max(b.width,b.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?b.mipmaps.length:1}function B(U){const b=U.target;b.removeEventListener("dispose",B),H(b),b.isVideoTexture&&g.delete(b)}function $(U){const b=U.target;b.removeEventListener("dispose",$),ee(b)}function H(U){const b=n.get(U);if(b.__webglInit===void 0)return;const te=U.source,fe=M.get(te);if(fe){const pe=fe[b.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&c(U),Object.keys(fe).length===0&&M.delete(te)}n.remove(U)}function c(U){const b=n.get(U);i.deleteTexture(b.__webglTexture);const te=U.source,fe=M.get(te);delete fe[b.__cacheKey],f.memory.textures--}function ee(U){const b=n.get(U);if(U.depthTexture&&U.depthTexture.dispose(),U.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++){if(Array.isArray(b.__webglFramebuffer[fe]))for(let pe=0;pe<b.__webglFramebuffer[fe].length;pe++)i.deleteFramebuffer(b.__webglFramebuffer[fe][pe]);else i.deleteFramebuffer(b.__webglFramebuffer[fe]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[fe])}else{if(Array.isArray(b.__webglFramebuffer))for(let fe=0;fe<b.__webglFramebuffer.length;fe++)i.deleteFramebuffer(b.__webglFramebuffer[fe]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let fe=0;fe<b.__webglColorRenderbuffer.length;fe++)b.__webglColorRenderbuffer[fe]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[fe]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const te=U.textures;for(let fe=0,pe=te.length;fe<pe;fe++){const de=n.get(te[fe]);de.__webglTexture&&(i.deleteTexture(de.__webglTexture),f.memory.textures--),n.remove(te[fe])}n.remove(U)}let P=0;function C(){P=0}function j(){const U=P;return U>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+s.maxTextures),P+=1,U}function ce(U){const b=[];return b.push(U.wrapS),b.push(U.wrapT),b.push(U.wrapR||0),b.push(U.magFilter),b.push(U.minFilter),b.push(U.anisotropy),b.push(U.internalFormat),b.push(U.format),b.push(U.type),b.push(U.generateMipmaps),b.push(U.premultiplyAlpha),b.push(U.flipY),b.push(U.unpackAlignment),b.push(U.colorSpace),b.join()}function F(U,b){const te=n.get(U);if(U.isVideoTexture&&Lt(U),U.isRenderTargetTexture===!1&&U.version>0&&te.__version!==U.version){const fe=U.image;if(fe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ot(te,U,b);return}}t.bindTexture(i.TEXTURE_2D,te.__webglTexture,i.TEXTURE0+b)}function le(U,b){const te=n.get(U);if(U.version>0&&te.__version!==U.version){ot(te,U,b);return}t.bindTexture(i.TEXTURE_2D_ARRAY,te.__webglTexture,i.TEXTURE0+b)}function ue(U,b){const te=n.get(U);if(U.version>0&&te.__version!==U.version){ot(te,U,b);return}t.bindTexture(i.TEXTURE_3D,te.__webglTexture,i.TEXTURE0+b)}function xe(U,b){const te=n.get(U);if(U.version>0&&te.__version!==U.version){yt(te,U,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture,i.TEXTURE0+b)}const me={[oo]:i.REPEAT,[Vi]:i.CLAMP_TO_EDGE,[co]:i.MIRRORED_REPEAT},ie={[Tn]:i.NEAREST,[cf]:i.NEAREST_MIPMAP_NEAREST,[ms]:i.NEAREST_MIPMAP_LINEAR,[Ln]:i.LINEAR,[Ea]:i.LINEAR_MIPMAP_NEAREST,[Gi]:i.LINEAR_MIPMAP_LINEAR},ve={[Ef]:i.NEVER,[Rf]:i.ALWAYS,[Tf]:i.LESS,[xl]:i.LEQUAL,[bf]:i.EQUAL,[Cf]:i.GEQUAL,[Af]:i.GREATER,[wf]:i.NOTEQUAL};function Me(U,b){if(b.type===vi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Ln||b.magFilter===Ea||b.magFilter===ms||b.magFilter===Gi||b.minFilter===Ln||b.minFilter===Ea||b.minFilter===ms||b.minFilter===Gi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,me[b.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,me[b.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,me[b.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,ie[b.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,ie[b.minFilter]),b.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,ve[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Tn||b.minFilter!==ms&&b.minFilter!==Gi||b.type===vi&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const te=e.get("EXT_texture_filter_anisotropic");i.texParameterf(U,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Oe(U,b){let te=!1;U.__webglInit===void 0&&(U.__webglInit=!0,b.addEventListener("dispose",B));const fe=b.source;let pe=M.get(fe);pe===void 0&&(pe={},M.set(fe,pe));const de=ce(b);if(de!==U.__cacheKey){pe[de]===void 0&&(pe[de]={texture:i.createTexture(),usedTimes:0},f.memory.textures++,te=!0),pe[de].usedTimes++;const He=pe[U.__cacheKey];He!==void 0&&(pe[U.__cacheKey].usedTimes--,He.usedTimes===0&&c(b)),U.__cacheKey=de,U.__webglTexture=pe[de].texture}return te}function ot(U,b,te){let fe=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(fe=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(fe=i.TEXTURE_3D);const pe=Oe(U,b),de=b.source;t.bindTexture(fe,U.__webglTexture,i.TEXTURE0+te);const He=n.get(de);if(de.version!==He.__version||pe===!0){t.activeTexture(i.TEXTURE0+te);const ge=Rt.getPrimaries(Rt.workingColorSpace),he=b.colorSpace===_i?null:Rt.getPrimaries(b.colorSpace),De=b.colorSpace===_i||ge===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let Te=w(b.image,!1,s.maxTextureSize);Te=Xe(b,Te);const Le=o.convert(b.format,b.colorSpace),Ye=o.convert(b.type);let Ne=O(b.internalFormat,Le,Ye,b.colorSpace,b.isVideoTexture);Me(fe,b);let Ie;const at=b.mipmaps,Ze=b.isVideoTexture!==!0&&Ne!==vl,dt=He.__version===void 0||pe===!0,ct=de.dataReady,St=R(b,Te);if(b.isDepthTexture)Ne=i.DEPTH_COMPONENT16,b.type===vi?Ne=i.DEPTH_COMPONENT32F:b.type===Pr?Ne=i.DEPTH_COMPONENT24:b.type===ts&&(Ne=i.DEPTH24_STENCIL8),dt&&(Ze?t.texStorage2D(i.TEXTURE_2D,1,Ne,Te.width,Te.height):t.texImage2D(i.TEXTURE_2D,0,Ne,Te.width,Te.height,0,Le,Ye,null));else if(b.isDataTexture)if(at.length>0){Ze&&dt&&t.texStorage2D(i.TEXTURE_2D,St,Ne,at[0].width,at[0].height);for(let Fe=0,S=at.length;Fe<S;Fe++)Ie=at[Fe],Ze?ct&&t.texSubImage2D(i.TEXTURE_2D,Fe,0,0,Ie.width,Ie.height,Le,Ye,Ie.data):t.texImage2D(i.TEXTURE_2D,Fe,Ne,Ie.width,Ie.height,0,Le,Ye,Ie.data);b.generateMipmaps=!1}else Ze?(dt&&t.texStorage2D(i.TEXTURE_2D,St,Ne,Te.width,Te.height),ct&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Te.width,Te.height,Le,Ye,Te.data)):t.texImage2D(i.TEXTURE_2D,0,Ne,Te.width,Te.height,0,Le,Ye,Te.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ze&&dt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,St,Ne,at[0].width,at[0].height,Te.depth);for(let Fe=0,S=at.length;Fe<S;Fe++)Ie=at[Fe],b.format!==Xn?Le!==null?Ze?ct&&t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Fe,0,0,0,Ie.width,Ie.height,Te.depth,Le,Ie.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Fe,Ne,Ie.width,Ie.height,Te.depth,0,Ie.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?ct&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Fe,0,0,0,Ie.width,Ie.height,Te.depth,Le,Ye,Ie.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Fe,Ne,Ie.width,Ie.height,Te.depth,0,Le,Ye,Ie.data)}else{Ze&&dt&&t.texStorage2D(i.TEXTURE_2D,St,Ne,at[0].width,at[0].height);for(let Fe=0,S=at.length;Fe<S;Fe++)Ie=at[Fe],b.format!==Xn?Le!==null?Ze?ct&&t.compressedTexSubImage2D(i.TEXTURE_2D,Fe,0,0,Ie.width,Ie.height,Le,Ie.data):t.compressedTexImage2D(i.TEXTURE_2D,Fe,Ne,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?ct&&t.texSubImage2D(i.TEXTURE_2D,Fe,0,0,Ie.width,Ie.height,Le,Ye,Ie.data):t.texImage2D(i.TEXTURE_2D,Fe,Ne,Ie.width,Ie.height,0,Le,Ye,Ie.data)}else if(b.isDataArrayTexture)Ze?(dt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,St,Ne,Te.width,Te.height,Te.depth),ct&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Te.width,Te.height,Te.depth,Le,Ye,Te.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ne,Te.width,Te.height,Te.depth,0,Le,Ye,Te.data);else if(b.isData3DTexture)Ze?(dt&&t.texStorage3D(i.TEXTURE_3D,St,Ne,Te.width,Te.height,Te.depth),ct&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Te.width,Te.height,Te.depth,Le,Ye,Te.data)):t.texImage3D(i.TEXTURE_3D,0,Ne,Te.width,Te.height,Te.depth,0,Le,Ye,Te.data);else if(b.isFramebufferTexture){if(dt)if(Ze)t.texStorage2D(i.TEXTURE_2D,St,Ne,Te.width,Te.height);else{let Fe=Te.width,S=Te.height;for(let Y=0;Y<St;Y++)t.texImage2D(i.TEXTURE_2D,Y,Ne,Fe,S,0,Le,Ye,null),Fe>>=1,S>>=1}}else if(at.length>0){if(Ze&&dt){const Fe=xt(at[0]);t.texStorage2D(i.TEXTURE_2D,St,Ne,Fe.width,Fe.height)}for(let Fe=0,S=at.length;Fe<S;Fe++)Ie=at[Fe],Ze?ct&&t.texSubImage2D(i.TEXTURE_2D,Fe,0,0,Le,Ye,Ie):t.texImage2D(i.TEXTURE_2D,Fe,Ne,Le,Ye,Ie);b.generateMipmaps=!1}else if(Ze){if(dt){const Fe=xt(Te);t.texStorage2D(i.TEXTURE_2D,St,Ne,Fe.width,Fe.height)}ct&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Le,Ye,Te)}else t.texImage2D(i.TEXTURE_2D,0,Ne,Le,Ye,Te);_(b)&&m(fe),He.__version=de.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function yt(U,b,te){if(b.image.length!==6)return;const fe=Oe(U,b),pe=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+te);const de=n.get(pe);if(pe.version!==de.__version||fe===!0){t.activeTexture(i.TEXTURE0+te);const He=Rt.getPrimaries(Rt.workingColorSpace),ge=b.colorSpace===_i?null:Rt.getPrimaries(b.colorSpace),he=b.colorSpace===_i||He===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const De=b.isCompressedTexture||b.image[0].isCompressedTexture,Te=b.image[0]&&b.image[0].isDataTexture,Le=[];for(let S=0;S<6;S++)!De&&!Te?Le[S]=w(b.image[S],!0,s.maxCubemapSize):Le[S]=Te?b.image[S].image:b.image[S],Le[S]=Xe(b,Le[S]);const Ye=Le[0],Ne=o.convert(b.format,b.colorSpace),Ie=o.convert(b.type),at=O(b.internalFormat,Ne,Ie,b.colorSpace),Ze=b.isVideoTexture!==!0,dt=de.__version===void 0||fe===!0,ct=pe.dataReady;let St=R(b,Ye);Me(i.TEXTURE_CUBE_MAP,b);let Fe;if(De){Ze&&dt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,St,at,Ye.width,Ye.height);for(let S=0;S<6;S++){Fe=Le[S].mipmaps;for(let Y=0;Y<Fe.length;Y++){const oe=Fe[Y];b.format!==Xn?Ne!==null?Ze?ct&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+S,Y,0,0,oe.width,oe.height,Ne,oe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+S,Y,at,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ze?ct&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+S,Y,0,0,oe.width,oe.height,Ne,Ie,oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+S,Y,at,oe.width,oe.height,0,Ne,Ie,oe.data)}}}else{if(Fe=b.mipmaps,Ze&&dt){Fe.length>0&&St++;const S=xt(Le[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,St,at,S.width,S.height)}for(let S=0;S<6;S++)if(Te){Ze?ct&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+S,0,0,0,Le[S].width,Le[S].height,Ne,Ie,Le[S].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+S,0,at,Le[S].width,Le[S].height,0,Ne,Ie,Le[S].data);for(let Y=0;Y<Fe.length;Y++){const ye=Fe[Y].image[S].image;Ze?ct&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+S,Y+1,0,0,ye.width,ye.height,Ne,Ie,ye.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+S,Y+1,at,ye.width,ye.height,0,Ne,Ie,ye.data)}}else{Ze?ct&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+S,0,0,0,Ne,Ie,Le[S]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+S,0,at,Ne,Ie,Le[S]);for(let Y=0;Y<Fe.length;Y++){const oe=Fe[Y];Ze?ct&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+S,Y+1,0,0,Ne,Ie,oe.image[S]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+S,Y+1,at,Ne,Ie,oe.image[S])}}}_(b)&&m(i.TEXTURE_CUBE_MAP),de.__version=pe.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function re(U,b,te,fe,pe,de){const He=o.convert(te.format,te.colorSpace),ge=o.convert(te.type),he=O(te.internalFormat,He,ge,te.colorSpace);if(!n.get(b).__hasExternalTextures){const Te=Math.max(1,b.width>>de),Le=Math.max(1,b.height>>de);pe===i.TEXTURE_3D||pe===i.TEXTURE_2D_ARRAY?t.texImage3D(pe,de,he,Te,Le,b.depth,0,He,ge,null):t.texImage2D(pe,de,he,Te,Le,0,He,ge,null)}t.bindFramebuffer(i.FRAMEBUFFER,U),ke(b)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,fe,pe,n.get(te).__webglTexture,0,Ke(b)):(pe===i.TEXTURE_2D||pe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,fe,pe,n.get(te).__webglTexture,de),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Se(U,b,te){if(i.bindRenderbuffer(i.RENDERBUFFER,U),b.depthBuffer&&!b.stencilBuffer){let fe=i.DEPTH_COMPONENT24;if(te||ke(b)){const pe=b.depthTexture;pe&&pe.isDepthTexture&&(pe.type===vi?fe=i.DEPTH_COMPONENT32F:pe.type===Pr&&(fe=i.DEPTH_COMPONENT24));const de=Ke(b);ke(b)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de,fe,b.width,b.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,de,fe,b.width,b.height)}else i.renderbufferStorage(i.RENDERBUFFER,fe,b.width,b.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,U)}else if(b.depthBuffer&&b.stencilBuffer){const fe=Ke(b);te&&ke(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,fe,i.DEPTH24_STENCIL8,b.width,b.height):ke(b)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe,i.DEPTH24_STENCIL8,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,U)}else{const fe=b.textures;for(let pe=0;pe<fe.length;pe++){const de=fe[pe],He=o.convert(de.format,de.colorSpace),ge=o.convert(de.type),he=O(de.internalFormat,He,ge,de.colorSpace),De=Ke(b);te&&ke(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,De,he,b.width,b.height):ke(b)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,De,he,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,he,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ue(U,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,U),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),F(b.depthTexture,0);const fe=n.get(b.depthTexture).__webglTexture,pe=Ke(b);if(b.depthTexture.format===Er)ke(b)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,fe,0,pe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,fe,0);else if(b.depthTexture.format===Qr)ke(b)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,fe,0,pe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,fe,0);else throw new Error("Unknown depthTexture format")}function we(U){const b=n.get(U),te=U.isWebGLCubeRenderTarget===!0;if(U.depthTexture&&!b.__autoAllocateDepthBuffer){if(te)throw new Error("target.depthTexture not supported in Cube render targets");Ue(b.__webglFramebuffer,U)}else if(te){b.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[fe]),b.__webglDepthbuffer[fe]=i.createRenderbuffer(),Se(b.__webglDepthbuffer[fe],U,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=i.createRenderbuffer(),Se(b.__webglDepthbuffer,U,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function et(U,b,te){const fe=n.get(U);b!==void 0&&re(fe.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),te!==void 0&&we(U)}function tt(U){const b=U.texture,te=n.get(U),fe=n.get(b);U.addEventListener("dispose",$);const pe=U.textures,de=U.isWebGLCubeRenderTarget===!0,He=pe.length>1;if(He||(fe.__webglTexture===void 0&&(fe.__webglTexture=i.createTexture()),fe.__version=b.version,f.memory.textures++),de){te.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(b.mipmaps&&b.mipmaps.length>0){te.__webglFramebuffer[ge]=[];for(let he=0;he<b.mipmaps.length;he++)te.__webglFramebuffer[ge][he]=i.createFramebuffer()}else te.__webglFramebuffer[ge]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){te.__webglFramebuffer=[];for(let ge=0;ge<b.mipmaps.length;ge++)te.__webglFramebuffer[ge]=i.createFramebuffer()}else te.__webglFramebuffer=i.createFramebuffer();if(He)for(let ge=0,he=pe.length;ge<he;ge++){const De=n.get(pe[ge]);De.__webglTexture===void 0&&(De.__webglTexture=i.createTexture(),f.memory.textures++)}if(U.samples>0&&ke(U)===!1){te.__webglMultisampledFramebuffer=i.createFramebuffer(),te.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let ge=0;ge<pe.length;ge++){const he=pe[ge];te.__webglColorRenderbuffer[ge]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,te.__webglColorRenderbuffer[ge]);const De=o.convert(he.format,he.colorSpace),Te=o.convert(he.type),Le=O(he.internalFormat,De,Te,he.colorSpace,U.isXRRenderTarget===!0),Ye=Ke(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ye,Le,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,te.__webglColorRenderbuffer[ge])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(te.__webglDepthRenderbuffer=i.createRenderbuffer(),Se(te.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(de){t.bindTexture(i.TEXTURE_CUBE_MAP,fe.__webglTexture),Me(i.TEXTURE_CUBE_MAP,b);for(let ge=0;ge<6;ge++)if(b.mipmaps&&b.mipmaps.length>0)for(let he=0;he<b.mipmaps.length;he++)re(te.__webglFramebuffer[ge][he],U,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,he);else re(te.__webglFramebuffer[ge],U,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);_(b)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(He){for(let ge=0,he=pe.length;ge<he;ge++){const De=pe[ge],Te=n.get(De);t.bindTexture(i.TEXTURE_2D,Te.__webglTexture),Me(i.TEXTURE_2D,De),re(te.__webglFramebuffer,U,De,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,0),_(De)&&m(i.TEXTURE_2D)}t.unbindTexture()}else{let ge=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(ge=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ge,fe.__webglTexture),Me(ge,b),b.mipmaps&&b.mipmaps.length>0)for(let he=0;he<b.mipmaps.length;he++)re(te.__webglFramebuffer[he],U,b,i.COLOR_ATTACHMENT0,ge,he);else re(te.__webglFramebuffer,U,b,i.COLOR_ATTACHMENT0,ge,0);_(b)&&m(ge),t.unbindTexture()}U.depthBuffer&&we(U)}function je(U){const b=U.textures;for(let te=0,fe=b.length;te<fe;te++){const pe=b[te];if(_(pe)){const de=U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,He=n.get(pe).__webglTexture;t.bindTexture(de,He),m(de),t.unbindTexture()}}}function X(U){if(U.samples>0&&ke(U)===!1){const b=U.textures,te=U.width,fe=U.height;let pe=i.COLOR_BUFFER_BIT;const de=[],He=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=n.get(U),he=b.length>1;if(he)for(let De=0;De<b.length;De++)t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let De=0;De<b.length;De++){de.push(i.COLOR_ATTACHMENT0+De),U.depthBuffer&&de.push(He);const Te=ge.__ignoreDepthValues!==void 0?ge.__ignoreDepthValues:!1;if(Te===!1&&(U.depthBuffer&&(pe|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&ge.__isTransmissionRenderTarget!==!0&&(pe|=i.STENCIL_BUFFER_BIT)),he&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ge.__webglColorRenderbuffer[De]),Te===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[He]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[He])),he){const Le=n.get(b[De]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Le,0)}i.blitFramebuffer(0,0,te,fe,0,0,te,fe,pe,i.NEAREST),d&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,de)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),he)for(let De=0;De<b.length;De++){t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.RENDERBUFFER,ge.__webglColorRenderbuffer[De]);const Te=n.get(b[De]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.TEXTURE_2D,Te,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}}function Ke(U){return Math.min(s.maxSamples,U.samples)}function ke(U){const b=n.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Lt(U){const b=f.render.frame;g.get(U)!==b&&(g.set(U,b),U.update())}function Xe(U,b){const te=U.colorSpace,fe=U.format,pe=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||te!==Ti&&te!==_i&&(Rt.getTransfer(te)===Ut?(fe!==Xn||pe!==yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",te)),b}function xt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=j,this.resetTextureUnits=C,this.setTexture2D=F,this.setTexture2DArray=le,this.setTexture3D=ue,this.setTextureCube=xe,this.rebindTextures=et,this.setupRenderTarget=tt,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=X,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=re,this.useMultisampledRTT=ke}function jg(i,e){function t(n,s=_i){let o;const f=Rt.getTransfer(s);if(n===yi)return i.UNSIGNED_BYTE;if(n===dl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===pl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ff)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===lf)return i.BYTE;if(n===uf)return i.SHORT;if(n===fl)return i.UNSIGNED_SHORT;if(n===hl)return i.INT;if(n===Pr)return i.UNSIGNED_INT;if(n===vi)return i.FLOAT;if(n===Xs)return i.HALF_FLOAT;if(n===hf)return i.ALPHA;if(n===df)return i.RGB;if(n===Xn)return i.RGBA;if(n===pf)return i.LUMINANCE;if(n===mf)return i.LUMINANCE_ALPHA;if(n===Er)return i.DEPTH_COMPONENT;if(n===Qr)return i.DEPTH_STENCIL;if(n===gf)return i.RED;if(n===ml)return i.RED_INTEGER;if(n===_f)return i.RG;if(n===gl)return i.RG_INTEGER;if(n===_l)return i.RGBA_INTEGER;if(n===Ta||n===ba||n===Aa||n===wa)if(f===Ut)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Ta)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ba)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Aa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===wa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Ta)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ba)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Aa)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===wa)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Io||n===Oo||n===Fo||n===Bo)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Io)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Oo)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fo)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Bo)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===vl)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(n===zo||n===Ho)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(n===zo)return f===Ut?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Ho)return f===Ut?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ko||n===Vo||n===Go||n===Wo||n===Xo||n===qo||n===jo||n===Yo||n===$o||n===Ko||n===Zo||n===Jo||n===Qo||n===ec)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(n===ko)return f===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Vo)return f===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Go)return f===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Wo)return f===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Xo)return f===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===qo)return f===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===jo)return f===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Yo)return f===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$o)return f===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ko)return f===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Zo)return f===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Jo)return f===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Qo)return f===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ec)return f===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ca||n===tc||n===nc)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(n===Ca)return f===Ut?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===tc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===nc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===vf||n===ic||n===rc||n===sc)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(n===Ca)return o.COMPRESSED_RED_RGTC1_EXT;if(n===ic)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===rc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===sc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ts?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class Yg extends En{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Fs extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $g={type:"move"};class Qa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,o=null,f=null;const u=this._targetRay,d=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){f=!0;for(const w of e.hand.values()){const _=t.getJointPose(w,n),m=this._getHandJoint(p,w);_!==null&&(m.matrix.fromArray(_.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=_.radius),m.visible=_!==null}const g=p.joints["index-finger-tip"],y=p.joints["thumb-tip"],M=g.position.distanceTo(y.position),E=.02,A=.005;p.inputState.pinching&&M>E+A?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&M<=E-A&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1));u!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent($g)))}return u!==null&&(u.visible=s!==null),d!==null&&(d.visible=o!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Fs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Kg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Zg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Jg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new mn,o=e.properties.get(s);o.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,s=new Ei({vertexShader:Kg,fragmentShader:Zg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new hn(new Yn(20,20),s)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class Qg extends $i{constructor(e,t){super();const n=this;let s=null,o=1,f=null,u="local-floor",d=1,p=null,g=null,y=null,M=null,E=null,A=null;const w=new Jg,_=t.getContextAttributes();let m=null,O=null;const R=[],B=[],$=new st;let H=null;const c=new En;c.layers.enable(1),c.viewport=new Zt;const ee=new En;ee.layers.enable(2),ee.viewport=new Zt;const P=[c,ee],C=new Yg;C.layers.enable(1),C.layers.enable(2);let j=null,ce=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let Se=R[re];return Se===void 0&&(Se=new Qa,R[re]=Se),Se.getTargetRaySpace()},this.getControllerGrip=function(re){let Se=R[re];return Se===void 0&&(Se=new Qa,R[re]=Se),Se.getGripSpace()},this.getHand=function(re){let Se=R[re];return Se===void 0&&(Se=new Qa,R[re]=Se),Se.getHandSpace()};function F(re){const Se=B.indexOf(re.inputSource);if(Se===-1)return;const Ue=R[Se];Ue!==void 0&&(Ue.update(re.inputSource,re.frame,p||f),Ue.dispatchEvent({type:re.type,data:re.inputSource}))}function le(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",le),s.removeEventListener("inputsourceschange",ue);for(let re=0;re<R.length;re++){const Se=B[re];Se!==null&&(B[re]=null,R[re].disconnect(Se))}j=null,ce=null,w.reset(),e.setRenderTarget(m),E=null,M=null,y=null,s=null,O=null,yt.stop(),n.isPresenting=!1,e.setPixelRatio(H),e.setSize($.width,$.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){o=re,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){u=re,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(re){p=re},this.getBaseLayer=function(){return M!==null?M:E},this.getBinding=function(){return y},this.getFrame=function(){return A},this.getSession=function(){return s},this.setSession=async function(re){if(s=re,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",le),s.addEventListener("inputsourceschange",ue),_.xrCompatible!==!0&&await t.makeXRCompatible(),H=e.getPixelRatio(),e.getSize($),s.renderState.layers===void 0){const Se={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:o};E=new XRWebGLLayer(s,t,Se),s.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),O=new qi(E.framebufferWidth,E.framebufferHeight,{format:Xn,type:yi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let Se=null,Ue=null,we=null;_.depth&&(we=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=_.stencil?Qr:Er,Ue=_.stencil?ts:Pr);const et={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:o};y=new XRWebGLBinding(s,t),M=y.createProjectionLayer(et),s.updateRenderState({layers:[M]}),e.setPixelRatio(1),e.setSize(M.textureWidth,M.textureHeight,!1),O=new qi(M.textureWidth,M.textureHeight,{format:Xn,type:yi,depthTexture:new Ll(M.textureWidth,M.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const tt=e.properties.get(O);tt.__ignoreDepthValues=M.ignoreDepthValues}O.isXRRenderTarget=!0,this.setFoveation(d),p=null,f=await s.requestReferenceSpace(u),yt.setContext(s),yt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function ue(re){for(let Se=0;Se<re.removed.length;Se++){const Ue=re.removed[Se],we=B.indexOf(Ue);we>=0&&(B[we]=null,R[we].disconnect(Ue))}for(let Se=0;Se<re.added.length;Se++){const Ue=re.added[Se];let we=B.indexOf(Ue);if(we===-1){for(let tt=0;tt<R.length;tt++)if(tt>=B.length){B.push(Ue),we=tt;break}else if(B[tt]===null){B[tt]=Ue,we=tt;break}if(we===-1)break}const et=R[we];et&&et.connect(Ue)}}const xe=new G,me=new G;function ie(re,Se,Ue){xe.setFromMatrixPosition(Se.matrixWorld),me.setFromMatrixPosition(Ue.matrixWorld);const we=xe.distanceTo(me),et=Se.projectionMatrix.elements,tt=Ue.projectionMatrix.elements,je=et[14]/(et[10]-1),X=et[14]/(et[10]+1),Ke=(et[9]+1)/et[5],ke=(et[9]-1)/et[5],Lt=(et[8]-1)/et[0],Xe=(tt[8]+1)/tt[0],xt=je*Lt,U=je*Xe,b=we/(-Lt+Xe),te=b*-Lt;Se.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(te),re.translateZ(b),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert();const fe=je+b,pe=X+b,de=xt-te,He=U+(we-te),ge=Ke*X/pe*fe,he=ke*X/pe*fe;re.projectionMatrix.makePerspective(de,He,ge,he,fe,pe),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}function ve(re,Se){Se===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(Se.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(s===null)return;w.texture!==null&&(re.near=w.depthNear,re.far=w.depthFar),C.near=ee.near=c.near=re.near,C.far=ee.far=c.far=re.far,(j!==C.near||ce!==C.far)&&(s.updateRenderState({depthNear:C.near,depthFar:C.far}),j=C.near,ce=C.far,c.near=j,c.far=ce,ee.near=j,ee.far=ce,c.updateProjectionMatrix(),ee.updateProjectionMatrix(),re.updateProjectionMatrix());const Se=re.parent,Ue=C.cameras;ve(C,Se);for(let we=0;we<Ue.length;we++)ve(Ue[we],Se);Ue.length===2?ie(C,c,ee):C.projectionMatrix.copy(c.projectionMatrix),Me(re,C,Se)};function Me(re,Se,Ue){Ue===null?re.matrix.copy(Se.matrixWorld):(re.matrix.copy(Ue.matrixWorld),re.matrix.invert(),re.matrix.multiply(Se.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(Se.projectionMatrix),re.projectionMatrixInverse.copy(Se.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=es*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(M===null&&E===null))return d},this.setFoveation=function(re){d=re,M!==null&&(M.fixedFoveation=re),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=re)},this.hasDepthSensing=function(){return w.texture!==null};let Oe=null;function ot(re,Se){if(g=Se.getViewerPose(p||f),A=Se,g!==null){const Ue=g.views;E!==null&&(e.setRenderTargetFramebuffer(O,E.framebuffer),e.setRenderTarget(O));let we=!1;Ue.length!==C.cameras.length&&(C.cameras.length=0,we=!0);for(let tt=0;tt<Ue.length;tt++){const je=Ue[tt];let X=null;if(E!==null)X=E.getViewport(je);else{const ke=y.getViewSubImage(M,je);X=ke.viewport,tt===0&&(e.setRenderTargetTextures(O,ke.colorTexture,M.ignoreDepthValues?void 0:ke.depthStencilTexture),e.setRenderTarget(O))}let Ke=P[tt];Ke===void 0&&(Ke=new En,Ke.layers.enable(tt),Ke.viewport=new Zt,P[tt]=Ke),Ke.matrix.fromArray(je.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray(je.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set(X.x,X.y,X.width,X.height),tt===0&&(C.matrix.copy(Ke.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),we===!0&&C.cameras.push(Ke)}const et=s.enabledFeatures;if(et&&et.includes("depth-sensing")){const tt=y.getDepthInformation(Ue[0]);tt&&tt.isValid&&tt.texture&&w.init(e,tt,s.renderState)}}for(let Ue=0;Ue<R.length;Ue++){const we=B[Ue],et=R[Ue];we!==null&&et!==void 0&&et.update(we,Se,p||f)}w.render(e,C),Oe&&Oe(re,Se),Se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Se}),A=null}const yt=new Pl;yt.setAnimationLoop(ot),this.setAnimationLoop=function(re){Oe=re},this.dispose=function(){}}}const Oi=new Nn,e_=new zt;function t_(i,e){function t(_,m){_.matrixAutoUpdate===!0&&_.updateMatrix(),m.value.copy(_.matrix)}function n(_,m){m.color.getRGB(_.fogColor.value,Al(i)),m.isFog?(_.fogNear.value=m.near,_.fogFar.value=m.far):m.isFogExp2&&(_.fogDensity.value=m.density)}function s(_,m,O,R,B){m.isMeshBasicMaterial||m.isMeshLambertMaterial?o(_,m):m.isMeshToonMaterial?(o(_,m),y(_,m)):m.isMeshPhongMaterial?(o(_,m),g(_,m)):m.isMeshStandardMaterial?(o(_,m),M(_,m),m.isMeshPhysicalMaterial&&E(_,m,B)):m.isMeshMatcapMaterial?(o(_,m),A(_,m)):m.isMeshDepthMaterial?o(_,m):m.isMeshDistanceMaterial?(o(_,m),w(_,m)):m.isMeshNormalMaterial?o(_,m):m.isLineBasicMaterial?(f(_,m),m.isLineDashedMaterial&&u(_,m)):m.isPointsMaterial?d(_,m,O,R):m.isSpriteMaterial?p(_,m):m.isShadowMaterial?(_.color.value.copy(m.color),_.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function o(_,m){_.opacity.value=m.opacity,m.color&&_.diffuse.value.copy(m.color),m.emissive&&_.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(_.map.value=m.map,t(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,t(m.alphaMap,_.alphaMapTransform)),m.bumpMap&&(_.bumpMap.value=m.bumpMap,t(m.bumpMap,_.bumpMapTransform),_.bumpScale.value=m.bumpScale,m.side===pn&&(_.bumpScale.value*=-1)),m.normalMap&&(_.normalMap.value=m.normalMap,t(m.normalMap,_.normalMapTransform),_.normalScale.value.copy(m.normalScale),m.side===pn&&_.normalScale.value.negate()),m.displacementMap&&(_.displacementMap.value=m.displacementMap,t(m.displacementMap,_.displacementMapTransform),_.displacementScale.value=m.displacementScale,_.displacementBias.value=m.displacementBias),m.emissiveMap&&(_.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,_.emissiveMapTransform)),m.specularMap&&(_.specularMap.value=m.specularMap,t(m.specularMap,_.specularMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest);const O=e.get(m),R=O.envMap,B=O.envMapRotation;if(R&&(_.envMap.value=R,Oi.copy(B),Oi.x*=-1,Oi.y*=-1,Oi.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Oi.y*=-1,Oi.z*=-1),_.envMapRotation.value.setFromMatrix4(e_.makeRotationFromEuler(Oi)),_.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=m.reflectivity,_.ior.value=m.ior,_.refractionRatio.value=m.refractionRatio),m.lightMap){_.lightMap.value=m.lightMap;const $=i._useLegacyLights===!0?Math.PI:1;_.lightMapIntensity.value=m.lightMapIntensity*$,t(m.lightMap,_.lightMapTransform)}m.aoMap&&(_.aoMap.value=m.aoMap,_.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,_.aoMapTransform))}function f(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,m.map&&(_.map.value=m.map,t(m.map,_.mapTransform))}function u(_,m){_.dashSize.value=m.dashSize,_.totalSize.value=m.dashSize+m.gapSize,_.scale.value=m.scale}function d(_,m,O,R){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.size.value=m.size*O,_.scale.value=R*.5,m.map&&(_.map.value=m.map,t(m.map,_.uvTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,t(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function p(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.rotation.value=m.rotation,m.map&&(_.map.value=m.map,t(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,t(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function g(_,m){_.specular.value.copy(m.specular),_.shininess.value=Math.max(m.shininess,1e-4)}function y(_,m){m.gradientMap&&(_.gradientMap.value=m.gradientMap)}function M(_,m){_.metalness.value=m.metalness,m.metalnessMap&&(_.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,_.metalnessMapTransform)),_.roughness.value=m.roughness,m.roughnessMap&&(_.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,_.roughnessMapTransform)),m.envMap&&(_.envMapIntensity.value=m.envMapIntensity)}function E(_,m,O){_.ior.value=m.ior,m.sheen>0&&(_.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),_.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(_.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,_.sheenColorMapTransform)),m.sheenRoughnessMap&&(_.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,_.sheenRoughnessMapTransform))),m.clearcoat>0&&(_.clearcoat.value=m.clearcoat,_.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(_.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,_.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(_.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===pn&&_.clearcoatNormalScale.value.negate())),m.iridescence>0&&(_.iridescence.value=m.iridescence,_.iridescenceIOR.value=m.iridescenceIOR,_.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(_.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,_.iridescenceMapTransform)),m.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),m.transmission>0&&(_.transmission.value=m.transmission,_.transmissionSamplerMap.value=O.texture,_.transmissionSamplerSize.value.set(O.width,O.height),m.transmissionMap&&(_.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,_.transmissionMapTransform)),_.thickness.value=m.thickness,m.thicknessMap&&(_.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=m.attenuationDistance,_.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(_.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(_.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=m.specularIntensity,_.specularColor.value.copy(m.specularColor),m.specularColorMap&&(_.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,_.specularColorMapTransform)),m.specularIntensityMap&&(_.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,_.specularIntensityMapTransform))}function A(_,m){m.matcap&&(_.matcap.value=m.matcap)}function w(_,m){const O=e.get(m).light;_.referencePosition.value.setFromMatrixPosition(O.matrixWorld),_.nearDistance.value=O.shadow.camera.near,_.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function n_(i,e,t,n){let s={},o={},f=[];const u=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function d(O,R){const B=R.program;n.uniformBlockBinding(O,B)}function p(O,R){let B=s[O.id];B===void 0&&(A(O),B=g(O),s[O.id]=B,O.addEventListener("dispose",_));const $=R.program;n.updateUBOMapping(O,$);const H=e.render.frame;o[O.id]!==H&&(M(O),o[O.id]=H)}function g(O){const R=y();O.__bindingPointIndex=R;const B=i.createBuffer(),$=O.__size,H=O.usage;return i.bindBuffer(i.UNIFORM_BUFFER,B),i.bufferData(i.UNIFORM_BUFFER,$,H),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,R,B),B}function y(){for(let O=0;O<u;O++)if(f.indexOf(O)===-1)return f.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function M(O){const R=s[O.id],B=O.uniforms,$=O.__cache;i.bindBuffer(i.UNIFORM_BUFFER,R);for(let H=0,c=B.length;H<c;H++){const ee=Array.isArray(B[H])?B[H]:[B[H]];for(let P=0,C=ee.length;P<C;P++){const j=ee[P];if(E(j,H,P,$)===!0){const ce=j.__offset,F=Array.isArray(j.value)?j.value:[j.value];let le=0;for(let ue=0;ue<F.length;ue++){const xe=F[ue],me=w(xe);typeof xe=="number"||typeof xe=="boolean"?(j.__data[0]=xe,i.bufferSubData(i.UNIFORM_BUFFER,ce+le,j.__data)):xe.isMatrix3?(j.__data[0]=xe.elements[0],j.__data[1]=xe.elements[1],j.__data[2]=xe.elements[2],j.__data[3]=0,j.__data[4]=xe.elements[3],j.__data[5]=xe.elements[4],j.__data[6]=xe.elements[5],j.__data[7]=0,j.__data[8]=xe.elements[6],j.__data[9]=xe.elements[7],j.__data[10]=xe.elements[8],j.__data[11]=0):(xe.toArray(j.__data,le),le+=me.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,ce,j.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function E(O,R,B,$){const H=O.value,c=R+"_"+B;if($[c]===void 0)return typeof H=="number"||typeof H=="boolean"?$[c]=H:$[c]=H.clone(),!0;{const ee=$[c];if(typeof H=="number"||typeof H=="boolean"){if(ee!==H)return $[c]=H,!0}else if(ee.equals(H)===!1)return ee.copy(H),!0}return!1}function A(O){const R=O.uniforms;let B=0;const $=16;for(let c=0,ee=R.length;c<ee;c++){const P=Array.isArray(R[c])?R[c]:[R[c]];for(let C=0,j=P.length;C<j;C++){const ce=P[C],F=Array.isArray(ce.value)?ce.value:[ce.value];for(let le=0,ue=F.length;le<ue;le++){const xe=F[le],me=w(xe),ie=B%$;ie!==0&&$-ie<me.boundary&&(B+=$-ie),ce.__data=new Float32Array(me.storage/Float32Array.BYTES_PER_ELEMENT),ce.__offset=B,B+=me.storage}}}const H=B%$;return H>0&&(B+=$-H),O.__size=B,O.__cache={},this}function w(O){const R={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(R.boundary=4,R.storage=4):O.isVector2?(R.boundary=8,R.storage=8):O.isVector3||O.isColor?(R.boundary=16,R.storage=12):O.isVector4?(R.boundary=16,R.storage=16):O.isMatrix3?(R.boundary=48,R.storage=48):O.isMatrix4?(R.boundary=64,R.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),R}function _(O){const R=O.target;R.removeEventListener("dispose",_);const B=f.indexOf(R.__bindingPointIndex);f.splice(B,1),i.deleteBuffer(s[R.id]),delete s[R.id],delete o[R.id]}function m(){for(const O in s)i.deleteBuffer(s[O]);f=[],s={},o={}}return{bind:d,update:p,dispose:m}}class i_{constructor(e={}){const{canvas:t=jf(),context:n=null,depth:s=!0,stencil:o=!1,alpha:f=!1,antialias:u=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:y=!1}=e;this.isWebGLRenderer=!0;let M;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=n.getContextAttributes().alpha}else M=f;const E=new Uint32Array(4),A=new Int32Array(4);let w=null,_=null;const m=[],O=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Gn,this._useLegacyLights=!1,this.toneMapping=Mi,this.toneMappingExposure=1;const R=this;let B=!1,$=0,H=0,c=null,ee=-1,P=null;const C=new Zt,j=new Zt;let ce=null;const F=new At(0);let le=0,ue=t.width,xe=t.height,me=1,ie=null,ve=null;const Me=new Zt(0,0,ue,xe),Oe=new Zt(0,0,ue,xe);let ot=!1;const yt=new Rl;let re=!1,Se=!1;const Ue=new zt,we=new st,et=new G,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function je(){return c===null?me:1}let X=n;function Ke(L,V){const J=t.getContext(L,V);return J!==null?J:null}try{const L={alpha:!0,depth:s,stencil:o,antialias:u,premultipliedAlpha:d,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:y};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${fo}`),t.addEventListener("webglcontextlost",Y,!1),t.addEventListener("webglcontextrestored",oe,!1),t.addEventListener("webglcontextcreationerror",ye,!1),X===null){const V="webgl2";if(X=Ke(V,L),X===null)throw Ke(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let ke,Lt,Xe,xt,U,b,te,fe,pe,de,He,ge,he,De,Te,Le,Ye,Ne,Ie,at,Ze,dt,ct,St;function Fe(){ke=new fm(X),ke.init(),Lt=new rm(X,ke,e),dt=new jg(X,ke),Xe=new Xg(X),xt=new pm(X),U=new Lg,b=new qg(X,ke,Xe,U,Lt,dt,xt),te=new am(R),fe=new um(R),pe=new xh(X),ct=new nm(X,pe),de=new hm(X,pe,xt,ct),He=new gm(X,de,pe,xt),Ie=new mm(X,Lt,b),Le=new sm(U),ge=new Pg(R,te,fe,ke,Lt,ct,Le),he=new t_(R,U),De=new Ug,Te=new zg(ke),Ne=new tm(R,te,fe,Xe,He,M,d),Ye=new Wg(R,He,Lt),St=new n_(X,xt,Lt,Xe),at=new im(X,ke,xt),Ze=new dm(X,ke,xt),xt.programs=ge.programs,R.capabilities=Lt,R.extensions=ke,R.properties=U,R.renderLists=De,R.shadowMap=Ye,R.state=Xe,R.info=xt}Fe();const S=new Qg(R,X);this.xr=S,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const L=ke.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=ke.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(L){L!==void 0&&(me=L,this.setSize(ue,xe,!1))},this.getSize=function(L){return L.set(ue,xe)},this.setSize=function(L,V,J=!0){if(S.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ue=L,xe=V,t.width=Math.floor(L*me),t.height=Math.floor(V*me),J===!0&&(t.style.width=L+"px",t.style.height=V+"px"),this.setViewport(0,0,L,V)},this.getDrawingBufferSize=function(L){return L.set(ue*me,xe*me).floor()},this.setDrawingBufferSize=function(L,V,J){ue=L,xe=V,me=J,t.width=Math.floor(L*J),t.height=Math.floor(V*J),this.setViewport(0,0,L,V)},this.getCurrentViewport=function(L){return L.copy(C)},this.getViewport=function(L){return L.copy(Me)},this.setViewport=function(L,V,J,Q){L.isVector4?Me.set(L.x,L.y,L.z,L.w):Me.set(L,V,J,Q),Xe.viewport(C.copy(Me).multiplyScalar(me).round())},this.getScissor=function(L){return L.copy(Oe)},this.setScissor=function(L,V,J,Q){L.isVector4?Oe.set(L.x,L.y,L.z,L.w):Oe.set(L,V,J,Q),Xe.scissor(j.copy(Oe).multiplyScalar(me).round())},this.getScissorTest=function(){return ot},this.setScissorTest=function(L){Xe.setScissorTest(ot=L)},this.setOpaqueSort=function(L){ie=L},this.setTransparentSort=function(L){ve=L},this.getClearColor=function(L){return L.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor.apply(Ne,arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha.apply(Ne,arguments)},this.clear=function(L=!0,V=!0,J=!0){let Q=0;if(L){let K=!1;if(c!==null){const be=c.texture.format;K=be===_l||be===gl||be===ml}if(K){const be=c.texture.type,ze=be===yi||be===Pr||be===fl||be===ts||be===dl||be===pl,We=Ne.getClearColor(),Ge=Ne.getClearAlpha(),nt=We.r,Je=We.g,it=We.b;ze?(E[0]=nt,E[1]=Je,E[2]=it,E[3]=Ge,X.clearBufferuiv(X.COLOR,0,E)):(A[0]=nt,A[1]=Je,A[2]=it,A[3]=Ge,X.clearBufferiv(X.COLOR,0,A))}else Q|=X.COLOR_BUFFER_BIT}V&&(Q|=X.DEPTH_BUFFER_BIT),J&&(Q|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Y,!1),t.removeEventListener("webglcontextrestored",oe,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),De.dispose(),Te.dispose(),U.dispose(),te.dispose(),fe.dispose(),He.dispose(),ct.dispose(),St.dispose(),ge.dispose(),S.dispose(),S.removeEventListener("sessionstart",Ot),S.removeEventListener("sessionend",It),Jt.stop()};function Y(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function oe(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;const L=xt.autoReset,V=Ye.enabled,J=Ye.autoUpdate,Q=Ye.needsUpdate,K=Ye.type;Fe(),xt.autoReset=L,Ye.enabled=V,Ye.autoUpdate=J,Ye.needsUpdate=Q,Ye.type=K}function ye(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Ce(L){const V=L.target;V.removeEventListener("dispose",Ce),pt(V)}function pt(L){lt(L),U.remove(L)}function lt(L){const V=U.get(L).programs;V!==void 0&&(V.forEach(function(J){ge.releaseProgram(J)}),L.isShaderMaterial&&ge.releaseShaderCache(L))}this.renderBufferDirect=function(L,V,J,Q,K,be){V===null&&(V=tt);const ze=K.isMesh&&K.matrixWorld.determinant()<0,We=oa(L,V,J,Q,K);Xe.setMaterial(Q,ze);let Ge=J.index,nt=1;if(Q.wireframe===!0){if(Ge=de.getWireframeAttribute(J),Ge===void 0)return;nt=2}const Je=J.drawRange,it=J.attributes.position;let Nt=Je.start*nt,an=(Je.start+Je.count)*nt;be!==null&&(Nt=Math.max(Nt,be.start*nt),an=Math.min(an,(be.start+be.count)*nt)),Ge!==null?(Nt=Math.max(Nt,0),an=Math.min(an,Ge.count)):it!=null&&(Nt=Math.max(Nt,0),an=Math.min(an,it.count));const Ft=an-Nt;if(Ft<0||Ft===1/0)return;ct.setup(K,Q,We,J,Ge);let bn,Dt=at;if(Ge!==null&&(bn=pe.get(Ge),Dt=Ze,Dt.setIndex(bn)),K.isMesh)Q.wireframe===!0?(Xe.setLineWidth(Q.wireframeLinewidth*je()),Dt.setMode(X.LINES)):Dt.setMode(X.TRIANGLES);else if(K.isLine){let rt=Q.linewidth;rt===void 0&&(rt=1),Xe.setLineWidth(rt*je()),K.isLineSegments?Dt.setMode(X.LINES):K.isLineLoop?Dt.setMode(X.LINE_LOOP):Dt.setMode(X.LINE_STRIP)}else K.isPoints?Dt.setMode(X.POINTS):K.isSprite&&Dt.setMode(X.TRIANGLES);if(K.isBatchedMesh)Dt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else if(K.isInstancedMesh)Dt.renderInstances(Nt,Ft,K.count);else if(J.isInstancedBufferGeometry){const rt=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Ji=Math.min(J.instanceCount,rt);Dt.renderInstances(Nt,Ft,Ji)}else Dt.render(Nt,Ft)};function mt(L,V,J){L.transparent===!0&&L.side===fn&&L.forceSinglePass===!1?(L.side=pn,L.needsUpdate=!0,Zi(L,V,J),L.side=Si,L.needsUpdate=!0,Zi(L,V,J),L.side=fn):Zi(L,V,J)}this.compile=function(L,V,J=null){J===null&&(J=L),_=Te.get(J),_.init(),O.push(_),J.traverseVisible(function(K){K.isLight&&K.layers.test(V.layers)&&(_.pushLight(K),K.castShadow&&_.pushShadow(K))}),L!==J&&L.traverseVisible(function(K){K.isLight&&K.layers.test(V.layers)&&(_.pushLight(K),K.castShadow&&_.pushShadow(K))}),_.setupLights(R._useLegacyLights);const Q=new Set;return L.traverse(function(K){const be=K.material;if(be)if(Array.isArray(be))for(let ze=0;ze<be.length;ze++){const We=be[ze];mt(We,J,K),Q.add(We)}else mt(be,J,K),Q.add(be)}),O.pop(),_=null,Q},this.compileAsync=function(L,V,J=null){const Q=this.compile(L,V,J);return new Promise(K=>{function be(){if(Q.forEach(function(ze){U.get(ze).currentProgram.isReady()&&Q.delete(ze)}),Q.size===0){K(L);return}setTimeout(be,10)}ke.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let Et=null;function bt(L){Et&&Et(L)}function Ot(){Jt.stop()}function It(){Jt.start()}const Jt=new Pl;Jt.setAnimationLoop(bt),typeof self<"u"&&Jt.setContext(self),this.setAnimationLoop=function(L){Et=L,S.setAnimationLoop(L),L===null?Jt.stop():Jt.start()},S.addEventListener("sessionstart",Ot),S.addEventListener("sessionend",It),this.render=function(L,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),S.enabled===!0&&S.isPresenting===!0&&(S.cameraAutoUpdate===!0&&S.updateCamera(V),V=S.getCamera()),L.isScene===!0&&L.onBeforeRender(R,L,V,c),_=Te.get(L,O.length),_.init(),O.push(_),Ue.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),yt.setFromProjectionMatrix(Ue),Se=this.localClippingEnabled,re=Le.init(this.clippingPlanes,Se),w=De.get(L,m.length),w.init(),m.push(w),Vt(L,V,0,R.sortObjects),w.finish(),R.sortObjects===!0&&w.sort(ie,ve),this.info.render.frame++,re===!0&&Le.beginShadows();const J=_.state.shadowsArray;if(Ye.render(J,L,V),re===!0&&Le.endShadows(),this.info.autoReset===!0&&this.info.reset(),(S.enabled===!1||S.isPresenting===!1||S.hasDepthSensing()===!1)&&Ne.render(w,L),_.setupLights(R._useLegacyLights),V.isArrayCamera){const Q=V.cameras;for(let K=0,be=Q.length;K<be;K++){const ze=Q[K];sn(w,L,ze,ze.viewport)}}else sn(w,L,V);c!==null&&(b.updateMultisampleRenderTarget(c),b.updateRenderTargetMipmap(c)),L.isScene===!0&&L.onAfterRender(R,L,V),ct.resetDefaultState(),ee=-1,P=null,O.pop(),O.length>0?_=O[O.length-1]:_=null,m.pop(),m.length>0?w=m[m.length-1]:w=null};function Vt(L,V,J,Q){if(L.visible===!1)return;if(L.layers.test(V.layers)){if(L.isGroup)J=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(V);else if(L.isLight)_.pushLight(L),L.castShadow&&_.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||yt.intersectsSprite(L)){Q&&et.setFromMatrixPosition(L.matrixWorld).applyMatrix4(Ue);const ze=He.update(L),We=L.material;We.visible&&w.push(L,ze,We,J,et.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||yt.intersectsObject(L))){const ze=He.update(L),We=L.material;if(Q&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),et.copy(L.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),et.copy(ze.boundingSphere.center)),et.applyMatrix4(L.matrixWorld).applyMatrix4(Ue)),Array.isArray(We)){const Ge=ze.groups;for(let nt=0,Je=Ge.length;nt<Je;nt++){const it=Ge[nt],Nt=We[it.materialIndex];Nt&&Nt.visible&&w.push(L,ze,Nt,J,et.z,it)}}else We.visible&&w.push(L,ze,We,J,et.z,null)}}const be=L.children;for(let ze=0,We=be.length;ze<We;ze++)Vt(be[ze],V,J,Q)}function sn(L,V,J,Q){const K=L.opaque,be=L.transmissive,ze=L.transparent;_.setupLightsView(J),re===!0&&Le.setGlobalState(R.clippingPlanes,J),be.length>0&&In(K,be,V,J),Q&&Xe.viewport(C.copy(Q)),K.length>0&&vn(K,V,J),be.length>0&&vn(be,V,J),ze.length>0&&vn(ze,V,J),Xe.buffers.depth.setTest(!0),Xe.buffers.depth.setMask(!0),Xe.buffers.color.setMask(!0),Xe.setPolygonOffset(!1)}function In(L,V,J,Q){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(_.state.transmissionRenderTarget===null){_.state.transmissionRenderTarget=new qi(1,1,{generateMipmaps:!0,type:ke.has("EXT_color_buffer_half_float")||ke.has("EXT_color_buffer_float")?Xs:yi,minFilter:Gi,samples:4,stencilBuffer:o});const nt=U.get(_.state.transmissionRenderTarget);nt.__isTransmissionRenderTarget=!0}const be=_.state.transmissionRenderTarget;R.getDrawingBufferSize(we),be.setSize(we.x,we.y);const ze=R.getRenderTarget();R.setRenderTarget(be),R.getClearColor(F),le=R.getClearAlpha(),le<1&&R.setClearColor(16777215,.5),R.clear();const We=R.toneMapping;R.toneMapping=Mi,vn(L,J,Q),b.updateMultisampleRenderTarget(be),b.updateRenderTargetMipmap(be);let Ge=!1;for(let nt=0,Je=V.length;nt<Je;nt++){const it=V[nt],Nt=it.object,an=it.geometry,Ft=it.material,bn=it.group;if(Ft.side===fn&&Nt.layers.test(Q.layers)){const Dt=Ft.side;Ft.side=pn,Ft.needsUpdate=!0,as(Nt,J,Q,an,Ft,bn),Ft.side=Dt,Ft.needsUpdate=!0,Ge=!0}}Ge===!0&&(b.updateMultisampleRenderTarget(be),b.updateRenderTargetMipmap(be)),R.setRenderTarget(ze),R.setClearColor(F,le),R.toneMapping=We}function vn(L,V,J){const Q=V.isScene===!0?V.overrideMaterial:null;for(let K=0,be=L.length;K<be;K++){const ze=L[K],We=ze.object,Ge=ze.geometry,nt=Q===null?ze.material:Q,Je=ze.group;We.layers.test(J.layers)&&as(We,V,J,Ge,nt,Je)}}function as(L,V,J,Q,K,be){L.onBeforeRender(R,V,J,Q,K,be),L.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),K.onBeforeRender(R,V,J,Q,L,be),K.transparent===!0&&K.side===fn&&K.forceSinglePass===!1?(K.side=pn,K.needsUpdate=!0,R.renderBufferDirect(J,V,Q,K,L,be),K.side=Si,K.needsUpdate=!0,R.renderBufferDirect(J,V,Q,K,L,be),K.side=fn):R.renderBufferDirect(J,V,Q,K,L,be),L.onAfterRender(R,V,J,Q,K,be)}function Zi(L,V,J){V.isScene!==!0&&(V=tt);const Q=U.get(L),K=_.state.lights,be=_.state.shadowsArray,ze=K.state.version,We=ge.getParameters(L,K.state,be,V,J),Ge=ge.getProgramCacheKey(We);let nt=Q.programs;Q.environment=L.isMeshStandardMaterial?V.environment:null,Q.fog=V.fog,Q.envMap=(L.isMeshStandardMaterial?fe:te).get(L.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&L.envMap===null?V.environmentRotation:L.envMapRotation,nt===void 0&&(L.addEventListener("dispose",Ce),nt=new Map,Q.programs=nt);let Je=nt.get(Ge);if(Je!==void 0){if(Q.currentProgram===Je&&Q.lightsStateVersion===ze)return Br(L,We),Je}else We.uniforms=ge.getUniforms(L),L.onBuild(J,We,R),L.onBeforeCompile(We,R),Je=ge.acquireProgram(We,Ge),nt.set(Ge,Je),Q.uniforms=We.uniforms;const it=Q.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(it.clippingPlanes=Le.uniform),Br(L,We),Q.needsLights=cs(L),Q.lightsStateVersion=ze,Q.needsLights&&(it.ambientLightColor.value=K.state.ambient,it.lightProbe.value=K.state.probe,it.directionalLights.value=K.state.directional,it.directionalLightShadows.value=K.state.directionalShadow,it.spotLights.value=K.state.spot,it.spotLightShadows.value=K.state.spotShadow,it.rectAreaLights.value=K.state.rectArea,it.ltc_1.value=K.state.rectAreaLTC1,it.ltc_2.value=K.state.rectAreaLTC2,it.pointLights.value=K.state.point,it.pointLightShadows.value=K.state.pointShadow,it.hemisphereLights.value=K.state.hemi,it.directionalShadowMap.value=K.state.directionalShadowMap,it.directionalShadowMatrix.value=K.state.directionalShadowMatrix,it.spotShadowMap.value=K.state.spotShadowMap,it.spotLightMatrix.value=K.state.spotLightMatrix,it.spotLightMap.value=K.state.spotLightMap,it.pointShadowMap.value=K.state.pointShadowMap,it.pointShadowMatrix.value=K.state.pointShadowMatrix),Q.currentProgram=Je,Q.uniformsList=null,Je}function os(L){if(L.uniformsList===null){const V=L.currentProgram.getUniforms();L.uniformsList=Gs.seqWithValue(V.seq,L.uniforms)}return L.uniformsList}function Br(L,V){const J=U.get(L);J.outputColorSpace=V.outputColorSpace,J.batching=V.batching,J.instancing=V.instancing,J.instancingColor=V.instancingColor,J.instancingMorph=V.instancingMorph,J.skinning=V.skinning,J.morphTargets=V.morphTargets,J.morphNormals=V.morphNormals,J.morphColors=V.morphColors,J.morphTargetsCount=V.morphTargetsCount,J.numClippingPlanes=V.numClippingPlanes,J.numIntersection=V.numClipIntersection,J.vertexAlphas=V.vertexAlphas,J.vertexTangents=V.vertexTangents,J.toneMapping=V.toneMapping}function oa(L,V,J,Q,K){V.isScene!==!0&&(V=tt),b.resetTextureUnits();const be=V.fog,ze=Q.isMeshStandardMaterial?V.environment:null,We=c===null?R.outputColorSpace:c.isXRRenderTarget===!0?c.texture.colorSpace:Ti,Ge=(Q.isMeshStandardMaterial?fe:te).get(Q.envMap||ze),nt=Q.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Je=!!J.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),it=!!J.morphAttributes.position,Nt=!!J.morphAttributes.normal,an=!!J.morphAttributes.color;let Ft=Mi;Q.toneMapped&&(c===null||c.isXRRenderTarget===!0)&&(Ft=R.toneMapping);const bn=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Dt=bn!==void 0?bn.length:0,rt=U.get(Q),Ji=_.state.lights;if(re===!0&&(Se===!0||L!==P)){const on=L===P&&Q.id===ee;Le.setState(Q,L,on)}let Ct=!1;Q.version===rt.__version?(rt.needsLights&&rt.lightsStateVersion!==Ji.state.version||rt.outputColorSpace!==We||K.isBatchedMesh&&rt.batching===!1||!K.isBatchedMesh&&rt.batching===!0||K.isInstancedMesh&&rt.instancing===!1||!K.isInstancedMesh&&rt.instancing===!0||K.isSkinnedMesh&&rt.skinning===!1||!K.isSkinnedMesh&&rt.skinning===!0||K.isInstancedMesh&&rt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&rt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&rt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&rt.instancingMorph===!1&&K.morphTexture!==null||rt.envMap!==Ge||Q.fog===!0&&rt.fog!==be||rt.numClippingPlanes!==void 0&&(rt.numClippingPlanes!==Le.numPlanes||rt.numIntersection!==Le.numIntersection)||rt.vertexAlphas!==nt||rt.vertexTangents!==Je||rt.morphTargets!==it||rt.morphNormals!==Nt||rt.morphColors!==an||rt.toneMapping!==Ft||rt.morphTargetsCount!==Dt)&&(Ct=!0):(Ct=!0,rt.__version=Q.version);let On=rt.currentProgram;Ct===!0&&(On=Zi(Q,V,K));let $t=!1,xn=!1,si=!1;const jt=On.getUniforms(),Fn=rt.uniforms;if(Xe.useProgram(On.program)&&($t=!0,xn=!0,si=!0),Q.id!==ee&&(ee=Q.id,xn=!0),$t||P!==L){jt.setValue(X,"projectionMatrix",L.projectionMatrix),jt.setValue(X,"viewMatrix",L.matrixWorldInverse);const on=jt.map.cameraPosition;on!==void 0&&on.setValue(X,et.setFromMatrixPosition(L.matrixWorld)),Lt.logarithmicDepthBuffer&&jt.setValue(X,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&jt.setValue(X,"isOrthographic",L.isOrthographicCamera===!0),P!==L&&(P=L,xn=!0,si=!0)}if(K.isSkinnedMesh){jt.setOptional(X,K,"bindMatrix"),jt.setOptional(X,K,"bindMatrixInverse");const on=K.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),jt.setValue(X,"boneTexture",on.boneTexture,b))}K.isBatchedMesh&&(jt.setOptional(X,K,"batchingTexture"),jt.setValue(X,"batchingTexture",K._matricesTexture,b));const Ai=J.morphAttributes;if((Ai.position!==void 0||Ai.normal!==void 0||Ai.color!==void 0)&&Ie.update(K,J,On),(xn||rt.receiveShadow!==K.receiveShadow)&&(rt.receiveShadow=K.receiveShadow,jt.setValue(X,"receiveShadow",K.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Fn.envMap.value=Ge,Fn.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&V.environment!==null&&(Fn.envMapIntensity.value=V.environmentIntensity),xn&&(jt.setValue(X,"toneMappingExposure",R.toneMappingExposure),rt.needsLights&&ca(Fn,si),be&&Q.fog===!0&&he.refreshFogUniforms(Fn,be),he.refreshMaterialUniforms(Fn,Q,me,xe,_.state.transmissionRenderTarget),Gs.upload(X,os(rt),Fn,b)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Gs.upload(X,os(rt),Fn,b),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&jt.setValue(X,"center",K.center),jt.setValue(X,"modelViewMatrix",K.modelViewMatrix),jt.setValue(X,"normalMatrix",K.normalMatrix),jt.setValue(X,"modelMatrix",K.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const on=Q.uniformsGroups;for(let ai=0,ls=on.length;ai<ls;ai++){const us=on[ai];St.update(us,On),St.bind(us,On)}}return On}function ca(L,V){L.ambientLightColor.needsUpdate=V,L.lightProbe.needsUpdate=V,L.directionalLights.needsUpdate=V,L.directionalLightShadows.needsUpdate=V,L.pointLights.needsUpdate=V,L.pointLightShadows.needsUpdate=V,L.spotLights.needsUpdate=V,L.spotLightShadows.needsUpdate=V,L.rectAreaLights.needsUpdate=V,L.hemisphereLights.needsUpdate=V}function cs(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return c},this.setRenderTargetTextures=function(L,V,J){U.get(L.texture).__webglTexture=V,U.get(L.depthTexture).__webglTexture=J;const Q=U.get(L);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=J===void 0,Q.__autoAllocateDepthBuffer||ke.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(L,V){const J=U.get(L);J.__webglFramebuffer=V,J.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(L,V=0,J=0){c=L,$=V,H=J;let Q=!0,K=null,be=!1,ze=!1;if(L){const Ge=U.get(L);Ge.__useDefaultFramebuffer!==void 0?(Xe.bindFramebuffer(X.FRAMEBUFFER,null),Q=!1):Ge.__webglFramebuffer===void 0?b.setupRenderTarget(L):Ge.__hasExternalTextures&&b.rebindTextures(L,U.get(L.texture).__webglTexture,U.get(L.depthTexture).__webglTexture);const nt=L.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(ze=!0);const Je=U.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(Je[V])?K=Je[V][J]:K=Je[V],be=!0):L.samples>0&&b.useMultisampledRTT(L)===!1?K=U.get(L).__webglMultisampledFramebuffer:Array.isArray(Je)?K=Je[J]:K=Je,C.copy(L.viewport),j.copy(L.scissor),ce=L.scissorTest}else C.copy(Me).multiplyScalar(me).floor(),j.copy(Oe).multiplyScalar(me).floor(),ce=ot;if(Xe.bindFramebuffer(X.FRAMEBUFFER,K)&&Q&&Xe.drawBuffers(L,K),Xe.viewport(C),Xe.scissor(j),Xe.setScissorTest(ce),be){const Ge=U.get(L.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ge.__webglTexture,J)}else if(ze){const Ge=U.get(L.texture),nt=V||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,Ge.__webglTexture,J||0,nt)}ee=-1},this.readRenderTargetPixels=function(L,V,J,Q,K,be,ze){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=U.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&ze!==void 0&&(We=We[ze]),We){Xe.bindFramebuffer(X.FRAMEBUFFER,We);try{const Ge=L.texture,nt=Ge.format,Je=Ge.type;if(nt!==Xn&&dt.convert(nt)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const it=Je===Xs&&(ke.has("EXT_color_buffer_half_float")||ke.has("EXT_color_buffer_float"));if(Je!==yi&&dt.convert(Je)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_TYPE)&&Je!==vi&&!it){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=L.width-Q&&J>=0&&J<=L.height-K&&X.readPixels(V,J,Q,K,dt.convert(nt),dt.convert(Je),be)}finally{const Ge=c!==null?U.get(c).__webglFramebuffer:null;Xe.bindFramebuffer(X.FRAMEBUFFER,Ge)}}},this.copyFramebufferToTexture=function(L,V,J=0){const Q=Math.pow(2,-J),K=Math.floor(V.image.width*Q),be=Math.floor(V.image.height*Q);b.setTexture2D(V,0),X.copyTexSubImage2D(X.TEXTURE_2D,J,0,0,L.x,L.y,K,be),Xe.unbindTexture()},this.copyTextureToTexture=function(L,V,J,Q=0){const K=V.image.width,be=V.image.height,ze=dt.convert(J.format),We=dt.convert(J.type);b.setTexture2D(J,0),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,J.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,J.unpackAlignment),V.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Q,L.x,L.y,K,be,ze,We,V.image.data):V.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Q,L.x,L.y,V.mipmaps[0].width,V.mipmaps[0].height,ze,V.mipmaps[0].data):X.texSubImage2D(X.TEXTURE_2D,Q,L.x,L.y,ze,We,V.image),Q===0&&J.generateMipmaps&&X.generateMipmap(X.TEXTURE_2D),Xe.unbindTexture()},this.copyTextureToTexture3D=function(L,V,J,Q,K=0){const be=Math.round(L.max.x-L.min.x),ze=Math.round(L.max.y-L.min.y),We=L.max.z-L.min.z+1,Ge=dt.convert(Q.format),nt=dt.convert(Q.type);let Je;if(Q.isData3DTexture)b.setTexture3D(Q,0),Je=X.TEXTURE_3D;else if(Q.isDataArrayTexture||Q.isCompressedArrayTexture)b.setTexture2DArray(Q,0),Je=X.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,Q.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,Q.unpackAlignment);const it=X.getParameter(X.UNPACK_ROW_LENGTH),Nt=X.getParameter(X.UNPACK_IMAGE_HEIGHT),an=X.getParameter(X.UNPACK_SKIP_PIXELS),Ft=X.getParameter(X.UNPACK_SKIP_ROWS),bn=X.getParameter(X.UNPACK_SKIP_IMAGES),Dt=J.isCompressedTexture?J.mipmaps[K]:J.image;X.pixelStorei(X.UNPACK_ROW_LENGTH,Dt.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Dt.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,L.min.x),X.pixelStorei(X.UNPACK_SKIP_ROWS,L.min.y),X.pixelStorei(X.UNPACK_SKIP_IMAGES,L.min.z),J.isDataTexture||J.isData3DTexture?X.texSubImage3D(Je,K,V.x,V.y,V.z,be,ze,We,Ge,nt,Dt.data):Q.isCompressedArrayTexture?X.compressedTexSubImage3D(Je,K,V.x,V.y,V.z,be,ze,We,Ge,Dt.data):X.texSubImage3D(Je,K,V.x,V.y,V.z,be,ze,We,Ge,nt,Dt),X.pixelStorei(X.UNPACK_ROW_LENGTH,it),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Nt),X.pixelStorei(X.UNPACK_SKIP_PIXELS,an),X.pixelStorei(X.UNPACK_SKIP_ROWS,Ft),X.pixelStorei(X.UNPACK_SKIP_IMAGES,bn),K===0&&Q.generateMipmaps&&X.generateMipmap(Je),Xe.unbindTexture()},this.initTexture=function(L){L.isCubeTexture?b.setTextureCube(L,0):L.isData3DTexture?b.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?b.setTexture2DArray(L,0):b.setTexture2D(L,0),Xe.unbindTexture()},this.resetState=function(){$=0,H=0,c=null,Xe.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ho?"display-p3":"srgb",t.unpackColorSpace=Rt.workingColorSpace===Js?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class r_ extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Nn,this.environmentIntensity=1,this.environmentRotation=new Nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Ki extends is{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new At(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Zc=new G,Jc=new G,Qc=new zt,eo=new ea,Bs=new Qs;class s_ extends Wt{constructor(e=new ri,t=new Ki){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,o=t.count;s<o;s++)Zc.fromBufferAttribute(t,s-1),Jc.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Zc.distanceTo(Jc);e.setAttribute("lineDistance",new jn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,o=e.params.Line.threshold,f=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Bs.copy(n.boundingSphere),Bs.applyMatrix4(s),Bs.radius+=o,e.ray.intersectsSphere(Bs)===!1)return;Qc.copy(s).invert(),eo.copy(e.ray).applyMatrix4(Qc);const u=o/((this.scale.x+this.scale.y+this.scale.z)/3),d=u*u,p=new G,g=new G,y=new G,M=new G,E=this.isLineSegments?2:1,A=n.index,_=n.attributes.position;if(A!==null){const m=Math.max(0,f.start),O=Math.min(A.count,f.start+f.count);for(let R=m,B=O-1;R<B;R+=E){const $=A.getX(R),H=A.getX(R+1);if(p.fromBufferAttribute(_,$),g.fromBufferAttribute(_,H),eo.distanceSqToSegment(p,g,M,y)>d)continue;M.applyMatrix4(this.matrixWorld);const ee=e.ray.origin.distanceTo(M);ee<e.near||ee>e.far||t.push({distance:ee,point:y.clone().applyMatrix4(this.matrixWorld),index:R,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,f.start),O=Math.min(_.count,f.start+f.count);for(let R=m,B=O-1;R<B;R+=E){if(p.fromBufferAttribute(_,R),g.fromBufferAttribute(_,R+1),eo.distanceSqToSegment(p,g,M,y)>d)continue;M.applyMatrix4(this.matrixWorld);const H=e.ray.origin.distanceTo(M);H<e.near||H>e.far||t.push({distance:H,point:y.clone().applyMatrix4(this.matrixWorld),index:R,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,f=s.length;o<f;o++){const u=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}}const el=new G,tl=new G;class Or extends s_{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,o=t.count;s<o;s+=2)el.fromBufferAttribute(t,s),tl.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+el.distanceTo(tl);e.setAttribute("lineDistance",new jn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}const zs=new G,Hs=new G,to=new G,ks=new Dn;class Fr extends ri{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),o=Math.cos(Tr*t),f=e.getIndex(),u=e.getAttribute("position"),d=f?f.count:u.count,p=[0,0,0],g=["a","b","c"],y=new Array(3),M={},E=[];for(let A=0;A<d;A+=3){f?(p[0]=f.getX(A),p[1]=f.getX(A+1),p[2]=f.getX(A+2)):(p[0]=A,p[1]=A+1,p[2]=A+2);const{a:w,b:_,c:m}=ks;if(w.fromBufferAttribute(u,p[0]),_.fromBufferAttribute(u,p[1]),m.fromBufferAttribute(u,p[2]),ks.getNormal(to),y[0]=`${Math.round(w.x*s)},${Math.round(w.y*s)},${Math.round(w.z*s)}`,y[1]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,y[2]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,!(y[0]===y[1]||y[1]===y[2]||y[2]===y[0]))for(let O=0;O<3;O++){const R=(O+1)%3,B=y[O],$=y[R],H=ks[g[O]],c=ks[g[R]],ee=`${B}_${$}`,P=`${$}_${B}`;P in M&&M[P]?(to.dot(M[P].normal)<=o&&(E.push(H.x,H.y,H.z),E.push(c.x,c.y,c.z)),M[P]=null):ee in M||(M[ee]={index0:p[O],index1:p[R],normal:to.clone()})}}for(const A in M)if(M[A]){const{index0:w,index1:_}=M[A];zs.fromBufferAttribute(u,w),Hs.fromBufferAttribute(u,_),E.push(zs.x,zs.y,zs.z),E.push(Hs.x,Hs.y,Hs.z)}this.setAttribute("position",new jn(E,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}const nl=new zt;class a_{constructor(e,t,n=0,s=1/0){this.ray=new ea(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new mo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return nl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(nl),this}intersectObject(e,t=!0,n=[]){return uo(e,this,n,t),n.sort(il),n}intersectObjects(e,t=!0,n=[]){for(let s=0,o=e.length;s<o;s++)uo(e[s],this,n,t);return n.sort(il),n}}function il(i,e){return i.distance-e.distance}function uo(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const s=i.children;for(let o=0,f=s.length;o<f;o++)uo(s[o],e,t,!0)}}class rl{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(rn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fo);const sl={type:"change"},no={type:"start"},al={type:"end"},Vs=new ea,ol=new gi,o_=Math.cos(70*qf.DEG2RAD);class c_ extends $i{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new G,this.cursor=new G,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:tr.ROTATE,MIDDLE:tr.DOLLY,RIGHT:tr.PAN},this.touches={ONE:nr.ROTATE,TWO:nr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return u.phi},this.getAzimuthalAngle=function(){return u.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(S){S.addEventListener("keydown",Le),this._domElementKeyEvents=S},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Le),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(sl),n.update(),o=s.NONE},this.update=function(){const S=new G,Y=new ji().setFromUnitVectors(e.up,new G(0,1,0)),oe=Y.clone().invert(),ye=new G,Ce=new ji,pt=new G,lt=2*Math.PI;return function(Et=null){const bt=n.object.position;S.copy(bt).sub(n.target),S.applyQuaternion(Y),u.setFromVector3(S),n.autoRotate&&o===s.NONE&&ce(C(Et)),n.enableDamping?(u.theta+=d.theta*n.dampingFactor,u.phi+=d.phi*n.dampingFactor):(u.theta+=d.theta,u.phi+=d.phi);let Ot=n.minAzimuthAngle,It=n.maxAzimuthAngle;isFinite(Ot)&&isFinite(It)&&(Ot<-Math.PI?Ot+=lt:Ot>Math.PI&&(Ot-=lt),It<-Math.PI?It+=lt:It>Math.PI&&(It-=lt),Ot<=It?u.theta=Math.max(Ot,Math.min(It,u.theta)):u.theta=u.theta>(Ot+It)/2?Math.max(Ot,u.theta):Math.min(It,u.theta)),u.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,u.phi)),u.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(g,n.dampingFactor):n.target.add(g),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let Jt=!1;if(n.zoomToCursor&&H||n.object.isOrthographicCamera)u.radius=Me(u.radius);else{const Vt=u.radius;u.radius=Me(u.radius*p),Jt=Vt!=u.radius}if(S.setFromSpherical(u),S.applyQuaternion(oe),bt.copy(n.target).add(S),n.object.lookAt(n.target),n.enableDamping===!0?(d.theta*=1-n.dampingFactor,d.phi*=1-n.dampingFactor,g.multiplyScalar(1-n.dampingFactor)):(d.set(0,0,0),g.set(0,0,0)),n.zoomToCursor&&H){let Vt=null;if(n.object.isPerspectiveCamera){const sn=S.length();Vt=Me(sn*p);const In=sn-Vt;n.object.position.addScaledVector(B,In),n.object.updateMatrixWorld(),Jt=!!In}else if(n.object.isOrthographicCamera){const sn=new G($.x,$.y,0);sn.unproject(n.object);const In=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/p)),n.object.updateProjectionMatrix(),Jt=In!==n.object.zoom;const vn=new G($.x,$.y,0);vn.unproject(n.object),n.object.position.sub(vn).add(sn),n.object.updateMatrixWorld(),Vt=S.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Vt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Vt).add(n.object.position):(Vs.origin.copy(n.object.position),Vs.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Vs.direction))<o_?e.lookAt(n.target):(ol.setFromNormalAndCoplanarPoint(n.object.up,n.target),Vs.intersectPlane(ol,n.target))))}else if(n.object.isOrthographicCamera){const Vt=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/p)),Vt!==n.object.zoom&&(n.object.updateProjectionMatrix(),Jt=!0)}return p=1,H=!1,Jt||ye.distanceToSquared(n.object.position)>f||8*(1-Ce.dot(n.object.quaternion))>f||pt.distanceToSquared(n.target)>f?(n.dispatchEvent(sl),ye.copy(n.object.position),Ce.copy(n.object.quaternion),pt.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Ie),n.domElement.removeEventListener("pointerdown",te),n.domElement.removeEventListener("pointercancel",pe),n.domElement.removeEventListener("wheel",ge),n.domElement.removeEventListener("pointermove",fe),n.domElement.removeEventListener("pointerup",pe),n.domElement.getRootNode().removeEventListener("keydown",De,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Le),n._domElementKeyEvents=null)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let o=s.NONE;const f=1e-6,u=new rl,d=new rl;let p=1;const g=new G,y=new st,M=new st,E=new st,A=new st,w=new st,_=new st,m=new st,O=new st,R=new st,B=new G,$=new st;let H=!1;const c=[],ee={};let P=!1;function C(S){return S!==null?2*Math.PI/60*n.autoRotateSpeed*S:2*Math.PI/60/60*n.autoRotateSpeed}function j(S){const Y=Math.abs(S*.01);return Math.pow(.95,n.zoomSpeed*Y)}function ce(S){d.theta-=S}function F(S){d.phi-=S}const le=function(){const S=new G;return function(oe,ye){S.setFromMatrixColumn(ye,0),S.multiplyScalar(-oe),g.add(S)}}(),ue=function(){const S=new G;return function(oe,ye){n.screenSpacePanning===!0?S.setFromMatrixColumn(ye,1):(S.setFromMatrixColumn(ye,0),S.crossVectors(n.object.up,S)),S.multiplyScalar(oe),g.add(S)}}(),xe=function(){const S=new G;return function(oe,ye){const Ce=n.domElement;if(n.object.isPerspectiveCamera){const pt=n.object.position;S.copy(pt).sub(n.target);let lt=S.length();lt*=Math.tan(n.object.fov/2*Math.PI/180),le(2*oe*lt/Ce.clientHeight,n.object.matrix),ue(2*ye*lt/Ce.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(le(oe*(n.object.right-n.object.left)/n.object.zoom/Ce.clientWidth,n.object.matrix),ue(ye*(n.object.top-n.object.bottom)/n.object.zoom/Ce.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function me(S){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?p/=S:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ie(S){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?p*=S:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ve(S,Y){if(!n.zoomToCursor)return;H=!0;const oe=n.domElement.getBoundingClientRect(),ye=S-oe.left,Ce=Y-oe.top,pt=oe.width,lt=oe.height;$.x=ye/pt*2-1,$.y=-(Ce/lt)*2+1,B.set($.x,$.y,1).unproject(n.object).sub(n.object.position).normalize()}function Me(S){return Math.max(n.minDistance,Math.min(n.maxDistance,S))}function Oe(S){y.set(S.clientX,S.clientY)}function ot(S){ve(S.clientX,S.clientX),m.set(S.clientX,S.clientY)}function yt(S){A.set(S.clientX,S.clientY)}function re(S){M.set(S.clientX,S.clientY),E.subVectors(M,y).multiplyScalar(n.rotateSpeed);const Y=n.domElement;ce(2*Math.PI*E.x/Y.clientHeight),F(2*Math.PI*E.y/Y.clientHeight),y.copy(M),n.update()}function Se(S){O.set(S.clientX,S.clientY),R.subVectors(O,m),R.y>0?me(j(R.y)):R.y<0&&ie(j(R.y)),m.copy(O),n.update()}function Ue(S){w.set(S.clientX,S.clientY),_.subVectors(w,A).multiplyScalar(n.panSpeed),xe(_.x,_.y),A.copy(w),n.update()}function we(S){ve(S.clientX,S.clientY),S.deltaY<0?ie(j(S.deltaY)):S.deltaY>0&&me(j(S.deltaY)),n.update()}function et(S){let Y=!1;switch(S.code){case n.keys.UP:S.ctrlKey||S.metaKey||S.shiftKey?F(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):xe(0,n.keyPanSpeed),Y=!0;break;case n.keys.BOTTOM:S.ctrlKey||S.metaKey||S.shiftKey?F(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):xe(0,-n.keyPanSpeed),Y=!0;break;case n.keys.LEFT:S.ctrlKey||S.metaKey||S.shiftKey?ce(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):xe(n.keyPanSpeed,0),Y=!0;break;case n.keys.RIGHT:S.ctrlKey||S.metaKey||S.shiftKey?ce(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):xe(-n.keyPanSpeed,0),Y=!0;break}Y&&(S.preventDefault(),n.update())}function tt(S){if(c.length===1)y.set(S.pageX,S.pageY);else{const Y=St(S),oe=.5*(S.pageX+Y.x),ye=.5*(S.pageY+Y.y);y.set(oe,ye)}}function je(S){if(c.length===1)A.set(S.pageX,S.pageY);else{const Y=St(S),oe=.5*(S.pageX+Y.x),ye=.5*(S.pageY+Y.y);A.set(oe,ye)}}function X(S){const Y=St(S),oe=S.pageX-Y.x,ye=S.pageY-Y.y,Ce=Math.sqrt(oe*oe+ye*ye);m.set(0,Ce)}function Ke(S){n.enableZoom&&X(S),n.enablePan&&je(S)}function ke(S){n.enableZoom&&X(S),n.enableRotate&&tt(S)}function Lt(S){if(c.length==1)M.set(S.pageX,S.pageY);else{const oe=St(S),ye=.5*(S.pageX+oe.x),Ce=.5*(S.pageY+oe.y);M.set(ye,Ce)}E.subVectors(M,y).multiplyScalar(n.rotateSpeed);const Y=n.domElement;ce(2*Math.PI*E.x/Y.clientHeight),F(2*Math.PI*E.y/Y.clientHeight),y.copy(M)}function Xe(S){if(c.length===1)w.set(S.pageX,S.pageY);else{const Y=St(S),oe=.5*(S.pageX+Y.x),ye=.5*(S.pageY+Y.y);w.set(oe,ye)}_.subVectors(w,A).multiplyScalar(n.panSpeed),xe(_.x,_.y),A.copy(w)}function xt(S){const Y=St(S),oe=S.pageX-Y.x,ye=S.pageY-Y.y,Ce=Math.sqrt(oe*oe+ye*ye);O.set(0,Ce),R.set(0,Math.pow(O.y/m.y,n.zoomSpeed)),me(R.y),m.copy(O);const pt=(S.pageX+Y.x)*.5,lt=(S.pageY+Y.y)*.5;ve(pt,lt)}function U(S){n.enableZoom&&xt(S),n.enablePan&&Xe(S)}function b(S){n.enableZoom&&xt(S),n.enableRotate&&Lt(S)}function te(S){n.enabled!==!1&&(c.length===0&&(n.domElement.setPointerCapture(S.pointerId),n.domElement.addEventListener("pointermove",fe),n.domElement.addEventListener("pointerup",pe)),!dt(S)&&(at(S),S.pointerType==="touch"?Ye(S):de(S)))}function fe(S){n.enabled!==!1&&(S.pointerType==="touch"?Ne(S):He(S))}function pe(S){switch(Ze(S),c.length){case 0:n.domElement.releasePointerCapture(S.pointerId),n.domElement.removeEventListener("pointermove",fe),n.domElement.removeEventListener("pointerup",pe),n.dispatchEvent(al),o=s.NONE;break;case 1:const Y=c[0],oe=ee[Y];Ye({pointerId:Y,pageX:oe.x,pageY:oe.y});break}}function de(S){let Y;switch(S.button){case 0:Y=n.mouseButtons.LEFT;break;case 1:Y=n.mouseButtons.MIDDLE;break;case 2:Y=n.mouseButtons.RIGHT;break;default:Y=-1}switch(Y){case tr.DOLLY:if(n.enableZoom===!1)return;ot(S),o=s.DOLLY;break;case tr.ROTATE:if(S.ctrlKey||S.metaKey||S.shiftKey){if(n.enablePan===!1)return;yt(S),o=s.PAN}else{if(n.enableRotate===!1)return;Oe(S),o=s.ROTATE}break;case tr.PAN:if(S.ctrlKey||S.metaKey||S.shiftKey){if(n.enableRotate===!1)return;Oe(S),o=s.ROTATE}else{if(n.enablePan===!1)return;yt(S),o=s.PAN}break;default:o=s.NONE}o!==s.NONE&&n.dispatchEvent(no)}function He(S){switch(o){case s.ROTATE:if(n.enableRotate===!1)return;re(S);break;case s.DOLLY:if(n.enableZoom===!1)return;Se(S);break;case s.PAN:if(n.enablePan===!1)return;Ue(S);break}}function ge(S){n.enabled===!1||n.enableZoom===!1||o!==s.NONE||(S.preventDefault(),n.dispatchEvent(no),we(he(S)),n.dispatchEvent(al))}function he(S){const Y=S.deltaMode,oe={clientX:S.clientX,clientY:S.clientY,deltaY:S.deltaY};switch(Y){case 1:oe.deltaY*=16;break;case 2:oe.deltaY*=100;break}return S.ctrlKey&&!P&&(oe.deltaY*=10),oe}function De(S){S.key==="Control"&&(P=!0,n.domElement.getRootNode().addEventListener("keyup",Te,{passive:!0,capture:!0}))}function Te(S){S.key==="Control"&&(P=!1,n.domElement.getRootNode().removeEventListener("keyup",Te,{passive:!0,capture:!0}))}function Le(S){n.enabled===!1||n.enablePan===!1||et(S)}function Ye(S){switch(ct(S),c.length){case 1:switch(n.touches.ONE){case nr.ROTATE:if(n.enableRotate===!1)return;tt(S),o=s.TOUCH_ROTATE;break;case nr.PAN:if(n.enablePan===!1)return;je(S),o=s.TOUCH_PAN;break;default:o=s.NONE}break;case 2:switch(n.touches.TWO){case nr.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ke(S),o=s.TOUCH_DOLLY_PAN;break;case nr.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ke(S),o=s.TOUCH_DOLLY_ROTATE;break;default:o=s.NONE}break;default:o=s.NONE}o!==s.NONE&&n.dispatchEvent(no)}function Ne(S){switch(ct(S),o){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;Lt(S),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;Xe(S),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;U(S),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;b(S),n.update();break;default:o=s.NONE}}function Ie(S){n.enabled!==!1&&S.preventDefault()}function at(S){c.push(S.pointerId)}function Ze(S){delete ee[S.pointerId];for(let Y=0;Y<c.length;Y++)if(c[Y]==S.pointerId){c.splice(Y,1);return}}function dt(S){for(let Y=0;Y<c.length;Y++)if(c[Y]==S.pointerId)return!0;return!1}function ct(S){let Y=ee[S.pointerId];Y===void 0&&(Y=new st,ee[S.pointerId]=Y),Y.set(S.pageX,S.pageY)}function St(S){const Y=S.pointerId===c[0]?c[1]:c[0];return ee[Y]}n.domElement.addEventListener("contextmenu",Ie),n.domElement.addEventListener("pointerdown",te),n.domElement.addEventListener("pointercancel",pe),n.domElement.addEventListener("wheel",ge,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",De,{passive:!0,capture:!0}),this.update()}}var l_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function u_(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Fl={exports:{}};/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */(function(i){(function(e,t){i.exports=e.document?t(e,!0):function(n){if(!n.document)throw new Error("jQuery requires a window with a document");return t(n)}})(typeof window<"u"?window:l_,function(e,t){var n=[],s=Object.getPrototypeOf,o=n.slice,f=n.flat?function(r){return n.flat.call(r)}:function(r){return n.concat.apply([],r)},u=n.push,d=n.indexOf,p={},g=p.toString,y=p.hasOwnProperty,M=y.toString,E=M.call(Object),A={},w=function(a){return typeof a=="function"&&typeof a.nodeType!="number"&&typeof a.item!="function"},_=function(a){return a!=null&&a===a.window},m=e.document,O={type:!0,src:!0,nonce:!0,noModule:!0};function R(r,a,l){l=l||m;var h,v,x=l.createElement("script");if(x.text=r,a)for(h in O)v=a[h]||a.getAttribute&&a.getAttribute(h),v&&x.setAttribute(h,v);l.head.appendChild(x).parentNode.removeChild(x)}function B(r){return r==null?r+"":typeof r=="object"||typeof r=="function"?p[g.call(r)]||"object":typeof r}var $="3.7.1",H=/HTML$/i,c=function(r,a){return new c.fn.init(r,a)};c.fn=c.prototype={jquery:$,constructor:c,length:0,toArray:function(){return o.call(this)},get:function(r){return r==null?o.call(this):r<0?this[r+this.length]:this[r]},pushStack:function(r){var a=c.merge(this.constructor(),r);return a.prevObject=this,a},each:function(r){return c.each(this,r)},map:function(r){return this.pushStack(c.map(this,function(a,l){return r.call(a,l,a)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(c.grep(this,function(r,a){return(a+1)%2}))},odd:function(){return this.pushStack(c.grep(this,function(r,a){return a%2}))},eq:function(r){var a=this.length,l=+r+(r<0?a:0);return this.pushStack(l>=0&&l<a?[this[l]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:n.sort,splice:n.splice},c.extend=c.fn.extend=function(){var r,a,l,h,v,x,T=arguments[0]||{},I=1,N=arguments.length,k=!1;for(typeof T=="boolean"&&(k=T,T=arguments[I]||{},I++),typeof T!="object"&&!w(T)&&(T={}),I===N&&(T=this,I--);I<N;I++)if((r=arguments[I])!=null)for(a in r)h=r[a],!(a==="__proto__"||T===h)&&(k&&h&&(c.isPlainObject(h)||(v=Array.isArray(h)))?(l=T[a],v&&!Array.isArray(l)?x=[]:!v&&!c.isPlainObject(l)?x={}:x=l,v=!1,T[a]=c.extend(k,x,h)):h!==void 0&&(T[a]=h));return T},c.extend({expando:"jQuery"+($+Math.random()).replace(/\D/g,""),isReady:!0,error:function(r){throw new Error(r)},noop:function(){},isPlainObject:function(r){var a,l;return!r||g.call(r)!=="[object Object]"?!1:(a=s(r),a?(l=y.call(a,"constructor")&&a.constructor,typeof l=="function"&&M.call(l)===E):!0)},isEmptyObject:function(r){var a;for(a in r)return!1;return!0},globalEval:function(r,a,l){R(r,{nonce:a&&a.nonce},l)},each:function(r,a){var l,h=0;if(ee(r))for(l=r.length;h<l&&a.call(r[h],h,r[h])!==!1;h++);else for(h in r)if(a.call(r[h],h,r[h])===!1)break;return r},text:function(r){var a,l="",h=0,v=r.nodeType;if(!v)for(;a=r[h++];)l+=c.text(a);return v===1||v===11?r.textContent:v===9?r.documentElement.textContent:v===3||v===4?r.nodeValue:l},makeArray:function(r,a){var l=a||[];return r!=null&&(ee(Object(r))?c.merge(l,typeof r=="string"?[r]:r):u.call(l,r)),l},inArray:function(r,a,l){return a==null?-1:d.call(a,r,l)},isXMLDoc:function(r){var a=r&&r.namespaceURI,l=r&&(r.ownerDocument||r).documentElement;return!H.test(a||l&&l.nodeName||"HTML")},merge:function(r,a){for(var l=+a.length,h=0,v=r.length;h<l;h++)r[v++]=a[h];return r.length=v,r},grep:function(r,a,l){for(var h,v=[],x=0,T=r.length,I=!l;x<T;x++)h=!a(r[x],x),h!==I&&v.push(r[x]);return v},map:function(r,a,l){var h,v,x=0,T=[];if(ee(r))for(h=r.length;x<h;x++)v=a(r[x],x,l),v!=null&&T.push(v);else for(x in r)v=a(r[x],x,l),v!=null&&T.push(v);return f(T)},guid:1,support:A}),typeof Symbol=="function"&&(c.fn[Symbol.iterator]=n[Symbol.iterator]),c.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(r,a){p["[object "+a+"]"]=a.toLowerCase()});function ee(r){var a=!!r&&"length"in r&&r.length,l=B(r);return w(r)||_(r)?!1:l==="array"||a===0||typeof a=="number"&&a>0&&a-1 in r}function P(r,a){return r.nodeName&&r.nodeName.toLowerCase()===a.toLowerCase()}var C=n.pop,j=n.sort,ce=n.splice,F="[\\x20\\t\\r\\n\\f]",le=new RegExp("^"+F+"+|((?:^|[^\\\\])(?:\\\\.)*)"+F+"+$","g");c.contains=function(r,a){var l=a&&a.parentNode;return r===l||!!(l&&l.nodeType===1&&(r.contains?r.contains(l):r.compareDocumentPosition&&r.compareDocumentPosition(l)&16))};var ue=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function xe(r,a){return a?r==="\0"?"�":r.slice(0,-1)+"\\"+r.charCodeAt(r.length-1).toString(16)+" ":"\\"+r}c.escapeSelector=function(r){return(r+"").replace(ue,xe)};var me=m,ie=u;(function(){var r,a,l,h,v,x=ie,T,I,N,k,ne,ae=c.expando,q=0,_e=0,$e=fs(),Mt=fs(),ut=fs(),Kt=fs(),Gt=function(D,z){return D===z&&(v=!0),0},Bn="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",zn="(?:\\\\[\\da-fA-F]{1,6}"+F+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",vt="\\["+F+"*("+zn+")(?:"+F+"*([*^$|!~]?=)"+F+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+zn+"))|)"+F+"*\\]",Ri=":("+zn+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+vt+")*)|.*)\\)|)",Tt=new RegExp(F+"+","g"),Bt=new RegExp("^"+F+"*,"+F+"*"),Vr=new RegExp("^"+F+"*([>+~]|"+F+")"+F+"*"),ga=new RegExp(F+"|>"),Hn=new RegExp(Ri),Gr=new RegExp("^"+zn+"$"),kn={ID:new RegExp("^#("+zn+")"),CLASS:new RegExp("^\\.("+zn+")"),TAG:new RegExp("^("+zn+"|[*])"),ATTR:new RegExp("^"+vt),PSEUDO:new RegExp("^"+Ri),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+F+"*(even|odd|(([+-]|)(\\d*)n|)"+F+"*(?:([+-]|)"+F+"*(\\d+)|))"+F+"*\\)|)","i"),bool:new RegExp("^(?:"+Bn+")$","i"),needsContext:new RegExp("^"+F+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+F+"*((?:-\\d)?\\d*)"+F+"*\\)|)(?=[^-]|$)","i")},oi=/^(?:input|select|textarea|button)$/i,ci=/^h\d$/i,Mn=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_a=/[+~]/,$n=new RegExp("\\\\[\\da-fA-F]{1,6}"+F+"?|\\\\([^\\r\\n\\f])","g"),Kn=function(D,z){var W="0x"+D.slice(1)-65536;return z||(W<0?String.fromCharCode(W+65536):String.fromCharCode(W>>10|55296,W&1023|56320))},_u=function(){li()},vu=ds(function(D){return D.disabled===!0&&P(D,"fieldset")},{dir:"parentNode",next:"legend"});function xu(){try{return T.activeElement}catch{}}try{x.apply(n=o.call(me.childNodes),me.childNodes),n[me.childNodes.length].nodeType}catch{x={apply:function(z,W){ie.apply(z,o.call(W))},call:function(z){ie.apply(z,o.call(arguments,1))}}}function wt(D,z,W,Z){var se,Ee,Re,Be,Pe,gt,qe,Qe=z&&z.ownerDocument,_t=z?z.nodeType:9;if(W=W||[],typeof D!="string"||!D||_t!==1&&_t!==9&&_t!==11)return W;if(!Z&&(li(z),z=z||T,N)){if(_t!==11&&(Pe=Mn.exec(D)))if(se=Pe[1]){if(_t===9)if(Re=z.getElementById(se)){if(Re.id===se)return x.call(W,Re),W}else return W;else if(Qe&&(Re=Qe.getElementById(se))&&wt.contains(z,Re)&&Re.id===se)return x.call(W,Re),W}else{if(Pe[2])return x.apply(W,z.getElementsByTagName(D)),W;if((se=Pe[3])&&z.getElementsByClassName)return x.apply(W,z.getElementsByClassName(se)),W}if(!Kt[D+" "]&&(!k||!k.test(D))){if(qe=D,Qe=z,_t===1&&(ga.test(D)||Vr.test(D))){for(Qe=_a.test(D)&&va(z.parentNode)||z,(Qe!=z||!A.scope)&&((Be=z.getAttribute("id"))?Be=c.escapeSelector(Be):z.setAttribute("id",Be=ae)),gt=Wr(D),Ee=gt.length;Ee--;)gt[Ee]=(Be?"#"+Be:":scope")+" "+hs(gt[Ee]);qe=gt.join(",")}try{return x.apply(W,Qe.querySelectorAll(qe)),W}catch{Kt(D,!0)}finally{Be===ae&&z.removeAttribute("id")}}}return Po(D.replace(le,"$1"),z,W,Z)}function fs(){var D=[];function z(W,Z){return D.push(W+" ")>a.cacheLength&&delete z[D.shift()],z[W+" "]=Z}return z}function wn(D){return D[ae]=!0,D}function Qi(D){var z=T.createElement("fieldset");try{return!!D(z)}catch{return!1}finally{z.parentNode&&z.parentNode.removeChild(z),z=null}}function Mu(D){return function(z){return P(z,"input")&&z.type===D}}function yu(D){return function(z){return(P(z,"input")||P(z,"button"))&&z.type===D}}function Co(D){return function(z){return"form"in z?z.parentNode&&z.disabled===!1?"label"in z?"label"in z.parentNode?z.parentNode.disabled===D:z.disabled===D:z.isDisabled===D||z.isDisabled!==!D&&vu(z)===D:z.disabled===D:"label"in z?z.disabled===D:!1}}function Pi(D){return wn(function(z){return z=+z,wn(function(W,Z){for(var se,Ee=D([],W.length,z),Re=Ee.length;Re--;)W[se=Ee[Re]]&&(W[se]=!(Z[se]=W[se]))})})}function va(D){return D&&typeof D.getElementsByTagName<"u"&&D}function li(D){var z,W=D?D.ownerDocument||D:me;return W==T||W.nodeType!==9||!W.documentElement||(T=W,I=T.documentElement,N=!c.isXMLDoc(T),ne=I.matches||I.webkitMatchesSelector||I.msMatchesSelector,I.msMatchesSelector&&me!=T&&(z=T.defaultView)&&z.top!==z&&z.addEventListener("unload",_u),A.getById=Qi(function(Z){return I.appendChild(Z).id=c.expando,!T.getElementsByName||!T.getElementsByName(c.expando).length}),A.disconnectedMatch=Qi(function(Z){return ne.call(Z,"*")}),A.scope=Qi(function(){return T.querySelectorAll(":scope")}),A.cssHas=Qi(function(){try{return T.querySelector(":has(*,:jqfake)"),!1}catch{return!0}}),A.getById?(a.filter.ID=function(Z){var se=Z.replace($n,Kn);return function(Ee){return Ee.getAttribute("id")===se}},a.find.ID=function(Z,se){if(typeof se.getElementById<"u"&&N){var Ee=se.getElementById(Z);return Ee?[Ee]:[]}}):(a.filter.ID=function(Z){var se=Z.replace($n,Kn);return function(Ee){var Re=typeof Ee.getAttributeNode<"u"&&Ee.getAttributeNode("id");return Re&&Re.value===se}},a.find.ID=function(Z,se){if(typeof se.getElementById<"u"&&N){var Ee,Re,Be,Pe=se.getElementById(Z);if(Pe){if(Ee=Pe.getAttributeNode("id"),Ee&&Ee.value===Z)return[Pe];for(Be=se.getElementsByName(Z),Re=0;Pe=Be[Re++];)if(Ee=Pe.getAttributeNode("id"),Ee&&Ee.value===Z)return[Pe]}return[]}}),a.find.TAG=function(Z,se){return typeof se.getElementsByTagName<"u"?se.getElementsByTagName(Z):se.querySelectorAll(Z)},a.find.CLASS=function(Z,se){if(typeof se.getElementsByClassName<"u"&&N)return se.getElementsByClassName(Z)},k=[],Qi(function(Z){var se;I.appendChild(Z).innerHTML="<a id='"+ae+"' href='' disabled='disabled'></a><select id='"+ae+"-\r\\' disabled='disabled'><option selected=''></option></select>",Z.querySelectorAll("[selected]").length||k.push("\\["+F+"*(?:value|"+Bn+")"),Z.querySelectorAll("[id~="+ae+"-]").length||k.push("~="),Z.querySelectorAll("a#"+ae+"+*").length||k.push(".#.+[+~]"),Z.querySelectorAll(":checked").length||k.push(":checked"),se=T.createElement("input"),se.setAttribute("type","hidden"),Z.appendChild(se).setAttribute("name","D"),I.appendChild(Z).disabled=!0,Z.querySelectorAll(":disabled").length!==2&&k.push(":enabled",":disabled"),se=T.createElement("input"),se.setAttribute("name",""),Z.appendChild(se),Z.querySelectorAll("[name='']").length||k.push("\\["+F+"*name"+F+"*="+F+`*(?:''|"")`)}),A.cssHas||k.push(":has"),k=k.length&&new RegExp(k.join("|")),Gt=function(Z,se){if(Z===se)return v=!0,0;var Ee=!Z.compareDocumentPosition-!se.compareDocumentPosition;return Ee||(Ee=(Z.ownerDocument||Z)==(se.ownerDocument||se)?Z.compareDocumentPosition(se):1,Ee&1||!A.sortDetached&&se.compareDocumentPosition(Z)===Ee?Z===T||Z.ownerDocument==me&&wt.contains(me,Z)?-1:se===T||se.ownerDocument==me&&wt.contains(me,se)?1:h?d.call(h,Z)-d.call(h,se):0:Ee&4?-1:1)}),T}wt.matches=function(D,z){return wt(D,null,null,z)},wt.matchesSelector=function(D,z){if(li(D),N&&!Kt[z+" "]&&(!k||!k.test(z)))try{var W=ne.call(D,z);if(W||A.disconnectedMatch||D.document&&D.document.nodeType!==11)return W}catch{Kt(z,!0)}return wt(z,T,null,[D]).length>0},wt.contains=function(D,z){return(D.ownerDocument||D)!=T&&li(D),c.contains(D,z)},wt.attr=function(D,z){(D.ownerDocument||D)!=T&&li(D);var W=a.attrHandle[z.toLowerCase()],Z=W&&y.call(a.attrHandle,z.toLowerCase())?W(D,z,!N):void 0;return Z!==void 0?Z:D.getAttribute(z)},wt.error=function(D){throw new Error("Syntax error, unrecognized expression: "+D)},c.uniqueSort=function(D){var z,W=[],Z=0,se=0;if(v=!A.sortStable,h=!A.sortStable&&o.call(D,0),j.call(D,Gt),v){for(;z=D[se++];)z===D[se]&&(Z=W.push(se));for(;Z--;)ce.call(D,W[Z],1)}return h=null,D},c.fn.uniqueSort=function(){return this.pushStack(c.uniqueSort(o.apply(this)))},a=c.expr={cacheLength:50,createPseudo:wn,match:kn,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(D){return D[1]=D[1].replace($n,Kn),D[3]=(D[3]||D[4]||D[5]||"").replace($n,Kn),D[2]==="~="&&(D[3]=" "+D[3]+" "),D.slice(0,4)},CHILD:function(D){return D[1]=D[1].toLowerCase(),D[1].slice(0,3)==="nth"?(D[3]||wt.error(D[0]),D[4]=+(D[4]?D[5]+(D[6]||1):2*(D[3]==="even"||D[3]==="odd")),D[5]=+(D[7]+D[8]||D[3]==="odd")):D[3]&&wt.error(D[0]),D},PSEUDO:function(D){var z,W=!D[6]&&D[2];return kn.CHILD.test(D[0])?null:(D[3]?D[2]=D[4]||D[5]||"":W&&Hn.test(W)&&(z=Wr(W,!0))&&(z=W.indexOf(")",W.length-z)-W.length)&&(D[0]=D[0].slice(0,z),D[2]=W.slice(0,z)),D.slice(0,3))}},filter:{TAG:function(D){var z=D.replace($n,Kn).toLowerCase();return D==="*"?function(){return!0}:function(W){return P(W,z)}},CLASS:function(D){var z=$e[D+" "];return z||(z=new RegExp("(^|"+F+")"+D+"("+F+"|$)"))&&$e(D,function(W){return z.test(typeof W.className=="string"&&W.className||typeof W.getAttribute<"u"&&W.getAttribute("class")||"")})},ATTR:function(D,z,W){return function(Z){var se=wt.attr(Z,D);return se==null?z==="!=":z?(se+="",z==="="?se===W:z==="!="?se!==W:z==="^="?W&&se.indexOf(W)===0:z==="*="?W&&se.indexOf(W)>-1:z==="$="?W&&se.slice(-W.length)===W:z==="~="?(" "+se.replace(Tt," ")+" ").indexOf(W)>-1:z==="|="?se===W||se.slice(0,W.length+1)===W+"-":!1):!0}},CHILD:function(D,z,W,Z,se){var Ee=D.slice(0,3)!=="nth",Re=D.slice(-4)!=="last",Be=z==="of-type";return Z===1&&se===0?function(Pe){return!!Pe.parentNode}:function(Pe,gt,qe){var Qe,_t,Ve,Pt,dn,Qt=Ee!==Re?"nextSibling":"previousSibling",yn=Pe.parentNode,Vn=Be&&Pe.nodeName.toLowerCase(),er=!qe&&!Be,cn=!1;if(yn){if(Ee){for(;Qt;){for(Ve=Pe;Ve=Ve[Qt];)if(Be?P(Ve,Vn):Ve.nodeType===1)return!1;dn=Qt=D==="only"&&!dn&&"nextSibling"}return!0}if(dn=[Re?yn.firstChild:yn.lastChild],Re&&er){for(_t=yn[ae]||(yn[ae]={}),Qe=_t[D]||[],Pt=Qe[0]===q&&Qe[1],cn=Pt&&Qe[2],Ve=Pt&&yn.childNodes[Pt];Ve=++Pt&&Ve&&Ve[Qt]||(cn=Pt=0)||dn.pop();)if(Ve.nodeType===1&&++cn&&Ve===Pe){_t[D]=[q,Pt,cn];break}}else if(er&&(_t=Pe[ae]||(Pe[ae]={}),Qe=_t[D]||[],Pt=Qe[0]===q&&Qe[1],cn=Pt),cn===!1)for(;(Ve=++Pt&&Ve&&Ve[Qt]||(cn=Pt=0)||dn.pop())&&!((Be?P(Ve,Vn):Ve.nodeType===1)&&++cn&&(er&&(_t=Ve[ae]||(Ve[ae]={}),_t[D]=[q,cn]),Ve===Pe)););return cn-=se,cn===Z||cn%Z===0&&cn/Z>=0}}},PSEUDO:function(D,z){var W,Z=a.pseudos[D]||a.setFilters[D.toLowerCase()]||wt.error("unsupported pseudo: "+D);return Z[ae]?Z(z):Z.length>1?(W=[D,D,"",z],a.setFilters.hasOwnProperty(D.toLowerCase())?wn(function(se,Ee){for(var Re,Be=Z(se,z),Pe=Be.length;Pe--;)Re=d.call(se,Be[Pe]),se[Re]=!(Ee[Re]=Be[Pe])}):function(se){return Z(se,0,W)}):Z}},pseudos:{not:wn(function(D){var z=[],W=[],Z=Sa(D.replace(le,"$1"));return Z[ae]?wn(function(se,Ee,Re,Be){for(var Pe,gt=Z(se,null,Be,[]),qe=se.length;qe--;)(Pe=gt[qe])&&(se[qe]=!(Ee[qe]=Pe))}):function(se,Ee,Re){return z[0]=se,Z(z,null,Re,W),z[0]=null,!W.pop()}}),has:wn(function(D){return function(z){return wt(D,z).length>0}}),contains:wn(function(D){return D=D.replace($n,Kn),function(z){return(z.textContent||c.text(z)).indexOf(D)>-1}}),lang:wn(function(D){return Gr.test(D||"")||wt.error("unsupported lang: "+D),D=D.replace($n,Kn).toLowerCase(),function(z){var W;do if(W=N?z.lang:z.getAttribute("xml:lang")||z.getAttribute("lang"))return W=W.toLowerCase(),W===D||W.indexOf(D+"-")===0;while((z=z.parentNode)&&z.nodeType===1);return!1}}),target:function(D){var z=e.location&&e.location.hash;return z&&z.slice(1)===D.id},root:function(D){return D===I},focus:function(D){return D===xu()&&T.hasFocus()&&!!(D.type||D.href||~D.tabIndex)},enabled:Co(!1),disabled:Co(!0),checked:function(D){return P(D,"input")&&!!D.checked||P(D,"option")&&!!D.selected},selected:function(D){return D.parentNode&&D.parentNode.selectedIndex,D.selected===!0},empty:function(D){for(D=D.firstChild;D;D=D.nextSibling)if(D.nodeType<6)return!1;return!0},parent:function(D){return!a.pseudos.empty(D)},header:function(D){return ci.test(D.nodeName)},input:function(D){return oi.test(D.nodeName)},button:function(D){return P(D,"input")&&D.type==="button"||P(D,"button")},text:function(D){var z;return P(D,"input")&&D.type==="text"&&((z=D.getAttribute("type"))==null||z.toLowerCase()==="text")},first:Pi(function(){return[0]}),last:Pi(function(D,z){return[z-1]}),eq:Pi(function(D,z,W){return[W<0?W+z:W]}),even:Pi(function(D,z){for(var W=0;W<z;W+=2)D.push(W);return D}),odd:Pi(function(D,z){for(var W=1;W<z;W+=2)D.push(W);return D}),lt:Pi(function(D,z,W){var Z;for(W<0?Z=W+z:W>z?Z=z:Z=W;--Z>=0;)D.push(Z);return D}),gt:Pi(function(D,z,W){for(var Z=W<0?W+z:W;++Z<z;)D.push(Z);return D})}},a.pseudos.nth=a.pseudos.eq;for(r in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})a.pseudos[r]=Mu(r);for(r in{submit:!0,reset:!0})a.pseudos[r]=yu(r);function Ro(){}Ro.prototype=a.filters=a.pseudos,a.setFilters=new Ro;function Wr(D,z){var W,Z,se,Ee,Re,Be,Pe,gt=Mt[D+" "];if(gt)return z?0:gt.slice(0);for(Re=D,Be=[],Pe=a.preFilter;Re;){(!W||(Z=Bt.exec(Re)))&&(Z&&(Re=Re.slice(Z[0].length)||Re),Be.push(se=[])),W=!1,(Z=Vr.exec(Re))&&(W=Z.shift(),se.push({value:W,type:Z[0].replace(le," ")}),Re=Re.slice(W.length));for(Ee in a.filter)(Z=kn[Ee].exec(Re))&&(!Pe[Ee]||(Z=Pe[Ee](Z)))&&(W=Z.shift(),se.push({value:W,type:Ee,matches:Z}),Re=Re.slice(W.length));if(!W)break}return z?Re.length:Re?wt.error(D):Mt(D,Be).slice(0)}function hs(D){for(var z=0,W=D.length,Z="";z<W;z++)Z+=D[z].value;return Z}function ds(D,z,W){var Z=z.dir,se=z.next,Ee=se||Z,Re=W&&Ee==="parentNode",Be=_e++;return z.first?function(Pe,gt,qe){for(;Pe=Pe[Z];)if(Pe.nodeType===1||Re)return D(Pe,gt,qe);return!1}:function(Pe,gt,qe){var Qe,_t,Ve=[q,Be];if(qe){for(;Pe=Pe[Z];)if((Pe.nodeType===1||Re)&&D(Pe,gt,qe))return!0}else for(;Pe=Pe[Z];)if(Pe.nodeType===1||Re)if(_t=Pe[ae]||(Pe[ae]={}),se&&P(Pe,se))Pe=Pe[Z]||Pe;else{if((Qe=_t[Ee])&&Qe[0]===q&&Qe[1]===Be)return Ve[2]=Qe[2];if(_t[Ee]=Ve,Ve[2]=D(Pe,gt,qe))return!0}return!1}}function xa(D){return D.length>1?function(z,W,Z){for(var se=D.length;se--;)if(!D[se](z,W,Z))return!1;return!0}:D[0]}function Su(D,z,W){for(var Z=0,se=z.length;Z<se;Z++)wt(D,z[Z],W);return W}function ps(D,z,W,Z,se){for(var Ee,Re=[],Be=0,Pe=D.length,gt=z!=null;Be<Pe;Be++)(Ee=D[Be])&&(!W||W(Ee,Z,se))&&(Re.push(Ee),gt&&z.push(Be));return Re}function Ma(D,z,W,Z,se,Ee){return Z&&!Z[ae]&&(Z=Ma(Z)),se&&!se[ae]&&(se=Ma(se,Ee)),wn(function(Re,Be,Pe,gt){var qe,Qe,_t,Ve,Pt=[],dn=[],Qt=Be.length,yn=Re||Su(z||"*",Pe.nodeType?[Pe]:Pe,[]),Vn=D&&(Re||!z)?ps(yn,Pt,D,Pe,gt):yn;if(W?(Ve=se||(Re?D:Qt||Z)?[]:Be,W(Vn,Ve,Pe,gt)):Ve=Vn,Z)for(qe=ps(Ve,dn),Z(qe,[],Pe,gt),Qe=qe.length;Qe--;)(_t=qe[Qe])&&(Ve[dn[Qe]]=!(Vn[dn[Qe]]=_t));if(Re){if(se||D){if(se){for(qe=[],Qe=Ve.length;Qe--;)(_t=Ve[Qe])&&qe.push(Vn[Qe]=_t);se(null,Ve=[],qe,gt)}for(Qe=Ve.length;Qe--;)(_t=Ve[Qe])&&(qe=se?d.call(Re,_t):Pt[Qe])>-1&&(Re[qe]=!(Be[qe]=_t))}}else Ve=ps(Ve===Be?Ve.splice(Qt,Ve.length):Ve),se?se(null,Be,Ve,gt):x.apply(Be,Ve)})}function ya(D){for(var z,W,Z,se=D.length,Ee=a.relative[D[0].type],Re=Ee||a.relative[" "],Be=Ee?1:0,Pe=ds(function(Qe){return Qe===z},Re,!0),gt=ds(function(Qe){return d.call(z,Qe)>-1},Re,!0),qe=[function(Qe,_t,Ve){var Pt=!Ee&&(Ve||_t!=l)||((z=_t).nodeType?Pe(Qe,_t,Ve):gt(Qe,_t,Ve));return z=null,Pt}];Be<se;Be++)if(W=a.relative[D[Be].type])qe=[ds(xa(qe),W)];else{if(W=a.filter[D[Be].type].apply(null,D[Be].matches),W[ae]){for(Z=++Be;Z<se&&!a.relative[D[Z].type];Z++);return Ma(Be>1&&xa(qe),Be>1&&hs(D.slice(0,Be-1).concat({value:D[Be-2].type===" "?"*":""})).replace(le,"$1"),W,Be<Z&&ya(D.slice(Be,Z)),Z<se&&ya(D=D.slice(Z)),Z<se&&hs(D))}qe.push(W)}return xa(qe)}function Eu(D,z){var W=z.length>0,Z=D.length>0,se=function(Ee,Re,Be,Pe,gt){var qe,Qe,_t,Ve=0,Pt="0",dn=Ee&&[],Qt=[],yn=l,Vn=Ee||Z&&a.find.TAG("*",gt),er=q+=yn==null?1:Math.random()||.1,cn=Vn.length;for(gt&&(l=Re==T||Re||gt);Pt!==cn&&(qe=Vn[Pt])!=null;Pt++){if(Z&&qe){for(Qe=0,!Re&&qe.ownerDocument!=T&&(li(qe),Be=!N);_t=D[Qe++];)if(_t(qe,Re||T,Be)){x.call(Pe,qe);break}gt&&(q=er)}W&&((qe=!_t&&qe)&&Ve--,Ee&&dn.push(qe))}if(Ve+=Pt,W&&Pt!==Ve){for(Qe=0;_t=z[Qe++];)_t(dn,Qt,Re,Be);if(Ee){if(Ve>0)for(;Pt--;)dn[Pt]||Qt[Pt]||(Qt[Pt]=C.call(Pe));Qt=ps(Qt)}x.apply(Pe,Qt),gt&&!Ee&&Qt.length>0&&Ve+z.length>1&&c.uniqueSort(Pe)}return gt&&(q=er,l=yn),dn};return W?wn(se):se}function Sa(D,z){var W,Z=[],se=[],Ee=ut[D+" "];if(!Ee){for(z||(z=Wr(D)),W=z.length;W--;)Ee=ya(z[W]),Ee[ae]?Z.push(Ee):se.push(Ee);Ee=ut(D,Eu(se,Z)),Ee.selector=D}return Ee}function Po(D,z,W,Z){var se,Ee,Re,Be,Pe,gt=typeof D=="function"&&D,qe=!Z&&Wr(D=gt.selector||D);if(W=W||[],qe.length===1){if(Ee=qe[0]=qe[0].slice(0),Ee.length>2&&(Re=Ee[0]).type==="ID"&&z.nodeType===9&&N&&a.relative[Ee[1].type]){if(z=(a.find.ID(Re.matches[0].replace($n,Kn),z)||[])[0],z)gt&&(z=z.parentNode);else return W;D=D.slice(Ee.shift().value.length)}for(se=kn.needsContext.test(D)?0:Ee.length;se--&&(Re=Ee[se],!a.relative[Be=Re.type]);)if((Pe=a.find[Be])&&(Z=Pe(Re.matches[0].replace($n,Kn),_a.test(Ee[0].type)&&va(z.parentNode)||z))){if(Ee.splice(se,1),D=Z.length&&hs(Ee),!D)return x.apply(W,Z),W;break}}return(gt||Sa(D,qe))(Z,z,!N,W,!z||_a.test(D)&&va(z.parentNode)||z),W}A.sortStable=ae.split("").sort(Gt).join("")===ae,li(),A.sortDetached=Qi(function(D){return D.compareDocumentPosition(T.createElement("fieldset"))&1}),c.find=wt,c.expr[":"]=c.expr.pseudos,c.unique=c.uniqueSort,wt.compile=Sa,wt.select=Po,wt.setDocument=li,wt.tokenize=Wr,wt.escape=c.escapeSelector,wt.getText=c.text,wt.isXML=c.isXMLDoc,wt.selectors=c.expr,wt.support=c.support,wt.uniqueSort=c.uniqueSort})();var ve=function(r,a,l){for(var h=[],v=l!==void 0;(r=r[a])&&r.nodeType!==9;)if(r.nodeType===1){if(v&&c(r).is(l))break;h.push(r)}return h},Me=function(r,a){for(var l=[];r;r=r.nextSibling)r.nodeType===1&&r!==a&&l.push(r);return l},Oe=c.expr.match.needsContext,ot=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function yt(r,a,l){return w(a)?c.grep(r,function(h,v){return!!a.call(h,v,h)!==l}):a.nodeType?c.grep(r,function(h){return h===a!==l}):typeof a!="string"?c.grep(r,function(h){return d.call(a,h)>-1!==l}):c.filter(a,r,l)}c.filter=function(r,a,l){var h=a[0];return l&&(r=":not("+r+")"),a.length===1&&h.nodeType===1?c.find.matchesSelector(h,r)?[h]:[]:c.find.matches(r,c.grep(a,function(v){return v.nodeType===1}))},c.fn.extend({find:function(r){var a,l,h=this.length,v=this;if(typeof r!="string")return this.pushStack(c(r).filter(function(){for(a=0;a<h;a++)if(c.contains(v[a],this))return!0}));for(l=this.pushStack([]),a=0;a<h;a++)c.find(r,v[a],l);return h>1?c.uniqueSort(l):l},filter:function(r){return this.pushStack(yt(this,r||[],!1))},not:function(r){return this.pushStack(yt(this,r||[],!0))},is:function(r){return!!yt(this,typeof r=="string"&&Oe.test(r)?c(r):r||[],!1).length}});var re,Se=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,Ue=c.fn.init=function(r,a,l){var h,v;if(!r)return this;if(l=l||re,typeof r=="string")if(r[0]==="<"&&r[r.length-1]===">"&&r.length>=3?h=[null,r,null]:h=Se.exec(r),h&&(h[1]||!a))if(h[1]){if(a=a instanceof c?a[0]:a,c.merge(this,c.parseHTML(h[1],a&&a.nodeType?a.ownerDocument||a:m,!0)),ot.test(h[1])&&c.isPlainObject(a))for(h in a)w(this[h])?this[h](a[h]):this.attr(h,a[h]);return this}else return v=m.getElementById(h[2]),v&&(this[0]=v,this.length=1),this;else return!a||a.jquery?(a||l).find(r):this.constructor(a).find(r);else{if(r.nodeType)return this[0]=r,this.length=1,this;if(w(r))return l.ready!==void 0?l.ready(r):r(c)}return c.makeArray(r,this)};Ue.prototype=c.fn,re=c(m);var we=/^(?:parents|prev(?:Until|All))/,et={children:!0,contents:!0,next:!0,prev:!0};c.fn.extend({has:function(r){var a=c(r,this),l=a.length;return this.filter(function(){for(var h=0;h<l;h++)if(c.contains(this,a[h]))return!0})},closest:function(r,a){var l,h=0,v=this.length,x=[],T=typeof r!="string"&&c(r);if(!Oe.test(r)){for(;h<v;h++)for(l=this[h];l&&l!==a;l=l.parentNode)if(l.nodeType<11&&(T?T.index(l)>-1:l.nodeType===1&&c.find.matchesSelector(l,r))){x.push(l);break}}return this.pushStack(x.length>1?c.uniqueSort(x):x)},index:function(r){return r?typeof r=="string"?d.call(c(r),this[0]):d.call(this,r.jquery?r[0]:r):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(r,a){return this.pushStack(c.uniqueSort(c.merge(this.get(),c(r,a))))},addBack:function(r){return this.add(r==null?this.prevObject:this.prevObject.filter(r))}});function tt(r,a){for(;(r=r[a])&&r.nodeType!==1;);return r}c.each({parent:function(r){var a=r.parentNode;return a&&a.nodeType!==11?a:null},parents:function(r){return ve(r,"parentNode")},parentsUntil:function(r,a,l){return ve(r,"parentNode",l)},next:function(r){return tt(r,"nextSibling")},prev:function(r){return tt(r,"previousSibling")},nextAll:function(r){return ve(r,"nextSibling")},prevAll:function(r){return ve(r,"previousSibling")},nextUntil:function(r,a,l){return ve(r,"nextSibling",l)},prevUntil:function(r,a,l){return ve(r,"previousSibling",l)},siblings:function(r){return Me((r.parentNode||{}).firstChild,r)},children:function(r){return Me(r.firstChild)},contents:function(r){return r.contentDocument!=null&&s(r.contentDocument)?r.contentDocument:(P(r,"template")&&(r=r.content||r),c.merge([],r.childNodes))}},function(r,a){c.fn[r]=function(l,h){var v=c.map(this,a,l);return r.slice(-5)!=="Until"&&(h=l),h&&typeof h=="string"&&(v=c.filter(h,v)),this.length>1&&(et[r]||c.uniqueSort(v),we.test(r)&&v.reverse()),this.pushStack(v)}});var je=/[^\x20\t\r\n\f]+/g;function X(r){var a={};return c.each(r.match(je)||[],function(l,h){a[h]=!0}),a}c.Callbacks=function(r){r=typeof r=="string"?X(r):c.extend({},r);var a,l,h,v,x=[],T=[],I=-1,N=function(){for(v=v||r.once,h=a=!0;T.length;I=-1)for(l=T.shift();++I<x.length;)x[I].apply(l[0],l[1])===!1&&r.stopOnFalse&&(I=x.length,l=!1);r.memory||(l=!1),a=!1,v&&(l?x=[]:x="")},k={add:function(){return x&&(l&&!a&&(I=x.length-1,T.push(l)),function ne(ae){c.each(ae,function(q,_e){w(_e)?(!r.unique||!k.has(_e))&&x.push(_e):_e&&_e.length&&B(_e)!=="string"&&ne(_e)})}(arguments),l&&!a&&N()),this},remove:function(){return c.each(arguments,function(ne,ae){for(var q;(q=c.inArray(ae,x,q))>-1;)x.splice(q,1),q<=I&&I--}),this},has:function(ne){return ne?c.inArray(ne,x)>-1:x.length>0},empty:function(){return x&&(x=[]),this},disable:function(){return v=T=[],x=l="",this},disabled:function(){return!x},lock:function(){return v=T=[],!l&&!a&&(x=l=""),this},locked:function(){return!!v},fireWith:function(ne,ae){return v||(ae=ae||[],ae=[ne,ae.slice?ae.slice():ae],T.push(ae),a||N()),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!h}};return k};function Ke(r){return r}function ke(r){throw r}function Lt(r,a,l,h){var v;try{r&&w(v=r.promise)?v.call(r).done(a).fail(l):r&&w(v=r.then)?v.call(r,a,l):a.apply(void 0,[r].slice(h))}catch(x){l.apply(void 0,[x])}}c.extend({Deferred:function(r){var a=[["notify","progress",c.Callbacks("memory"),c.Callbacks("memory"),2],["resolve","done",c.Callbacks("once memory"),c.Callbacks("once memory"),0,"resolved"],["reject","fail",c.Callbacks("once memory"),c.Callbacks("once memory"),1,"rejected"]],l="pending",h={state:function(){return l},always:function(){return v.done(arguments).fail(arguments),this},catch:function(x){return h.then(null,x)},pipe:function(){var x=arguments;return c.Deferred(function(T){c.each(a,function(I,N){var k=w(x[N[4]])&&x[N[4]];v[N[1]](function(){var ne=k&&k.apply(this,arguments);ne&&w(ne.promise)?ne.promise().progress(T.notify).done(T.resolve).fail(T.reject):T[N[0]+"With"](this,k?[ne]:arguments)})}),x=null}).promise()},then:function(x,T,I){var N=0;function k(ne,ae,q,_e){return function(){var $e=this,Mt=arguments,ut=function(){var Gt,Bn;if(!(ne<N)){if(Gt=q.apply($e,Mt),Gt===ae.promise())throw new TypeError("Thenable self-resolution");Bn=Gt&&(typeof Gt=="object"||typeof Gt=="function")&&Gt.then,w(Bn)?_e?Bn.call(Gt,k(N,ae,Ke,_e),k(N,ae,ke,_e)):(N++,Bn.call(Gt,k(N,ae,Ke,_e),k(N,ae,ke,_e),k(N,ae,Ke,ae.notifyWith))):(q!==Ke&&($e=void 0,Mt=[Gt]),(_e||ae.resolveWith)($e,Mt))}},Kt=_e?ut:function(){try{ut()}catch(Gt){c.Deferred.exceptionHook&&c.Deferred.exceptionHook(Gt,Kt.error),ne+1>=N&&(q!==ke&&($e=void 0,Mt=[Gt]),ae.rejectWith($e,Mt))}};ne?Kt():(c.Deferred.getErrorHook?Kt.error=c.Deferred.getErrorHook():c.Deferred.getStackHook&&(Kt.error=c.Deferred.getStackHook()),e.setTimeout(Kt))}}return c.Deferred(function(ne){a[0][3].add(k(0,ne,w(I)?I:Ke,ne.notifyWith)),a[1][3].add(k(0,ne,w(x)?x:Ke)),a[2][3].add(k(0,ne,w(T)?T:ke))}).promise()},promise:function(x){return x!=null?c.extend(x,h):h}},v={};return c.each(a,function(x,T){var I=T[2],N=T[5];h[T[1]]=I.add,N&&I.add(function(){l=N},a[3-x][2].disable,a[3-x][3].disable,a[0][2].lock,a[0][3].lock),I.add(T[3].fire),v[T[0]]=function(){return v[T[0]+"With"](this===v?void 0:this,arguments),this},v[T[0]+"With"]=I.fireWith}),h.promise(v),r&&r.call(v,v),v},when:function(r){var a=arguments.length,l=a,h=Array(l),v=o.call(arguments),x=c.Deferred(),T=function(I){return function(N){h[I]=this,v[I]=arguments.length>1?o.call(arguments):N,--a||x.resolveWith(h,v)}};if(a<=1&&(Lt(r,x.done(T(l)).resolve,x.reject,!a),x.state()==="pending"||w(v[l]&&v[l].then)))return x.then();for(;l--;)Lt(v[l],T(l),x.reject);return x.promise()}});var Xe=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;c.Deferred.exceptionHook=function(r,a){e.console&&e.console.warn&&r&&Xe.test(r.name)&&e.console.warn("jQuery.Deferred exception: "+r.message,r.stack,a)},c.readyException=function(r){e.setTimeout(function(){throw r})};var xt=c.Deferred();c.fn.ready=function(r){return xt.then(r).catch(function(a){c.readyException(a)}),this},c.extend({isReady:!1,readyWait:1,ready:function(r){(r===!0?--c.readyWait:c.isReady)||(c.isReady=!0,!(r!==!0&&--c.readyWait>0)&&xt.resolveWith(m,[c]))}}),c.ready.then=xt.then;function U(){m.removeEventListener("DOMContentLoaded",U),e.removeEventListener("load",U),c.ready()}m.readyState==="complete"||m.readyState!=="loading"&&!m.documentElement.doScroll?e.setTimeout(c.ready):(m.addEventListener("DOMContentLoaded",U),e.addEventListener("load",U));var b=function(r,a,l,h,v,x,T){var I=0,N=r.length,k=l==null;if(B(l)==="object"){v=!0;for(I in l)b(r,a,I,l[I],!0,x,T)}else if(h!==void 0&&(v=!0,w(h)||(T=!0),k&&(T?(a.call(r,h),a=null):(k=a,a=function(ne,ae,q){return k.call(c(ne),q)})),a))for(;I<N;I++)a(r[I],l,T?h:h.call(r[I],I,a(r[I],l)));return v?r:k?a.call(r):N?a(r[0],l):x},te=/^-ms-/,fe=/-([a-z])/g;function pe(r,a){return a.toUpperCase()}function de(r){return r.replace(te,"ms-").replace(fe,pe)}var He=function(r){return r.nodeType===1||r.nodeType===9||!+r.nodeType};function ge(){this.expando=c.expando+ge.uid++}ge.uid=1,ge.prototype={cache:function(r){var a=r[this.expando];return a||(a={},He(r)&&(r.nodeType?r[this.expando]=a:Object.defineProperty(r,this.expando,{value:a,configurable:!0}))),a},set:function(r,a,l){var h,v=this.cache(r);if(typeof a=="string")v[de(a)]=l;else for(h in a)v[de(h)]=a[h];return v},get:function(r,a){return a===void 0?this.cache(r):r[this.expando]&&r[this.expando][de(a)]},access:function(r,a,l){return a===void 0||a&&typeof a=="string"&&l===void 0?this.get(r,a):(this.set(r,a,l),l!==void 0?l:a)},remove:function(r,a){var l,h=r[this.expando];if(h!==void 0){if(a!==void 0)for(Array.isArray(a)?a=a.map(de):(a=de(a),a=a in h?[a]:a.match(je)||[]),l=a.length;l--;)delete h[a[l]];(a===void 0||c.isEmptyObject(h))&&(r.nodeType?r[this.expando]=void 0:delete r[this.expando])}},hasData:function(r){var a=r[this.expando];return a!==void 0&&!c.isEmptyObject(a)}};var he=new ge,De=new ge,Te=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Le=/[A-Z]/g;function Ye(r){return r==="true"?!0:r==="false"?!1:r==="null"?null:r===+r+""?+r:Te.test(r)?JSON.parse(r):r}function Ne(r,a,l){var h;if(l===void 0&&r.nodeType===1)if(h="data-"+a.replace(Le,"-$&").toLowerCase(),l=r.getAttribute(h),typeof l=="string"){try{l=Ye(l)}catch{}De.set(r,a,l)}else l=void 0;return l}c.extend({hasData:function(r){return De.hasData(r)||he.hasData(r)},data:function(r,a,l){return De.access(r,a,l)},removeData:function(r,a){De.remove(r,a)},_data:function(r,a,l){return he.access(r,a,l)},_removeData:function(r,a){he.remove(r,a)}}),c.fn.extend({data:function(r,a){var l,h,v,x=this[0],T=x&&x.attributes;if(r===void 0){if(this.length&&(v=De.get(x),x.nodeType===1&&!he.get(x,"hasDataAttrs"))){for(l=T.length;l--;)T[l]&&(h=T[l].name,h.indexOf("data-")===0&&(h=de(h.slice(5)),Ne(x,h,v[h])));he.set(x,"hasDataAttrs",!0)}return v}return typeof r=="object"?this.each(function(){De.set(this,r)}):b(this,function(I){var N;if(x&&I===void 0)return N=De.get(x,r),N!==void 0||(N=Ne(x,r),N!==void 0)?N:void 0;this.each(function(){De.set(this,r,I)})},null,a,arguments.length>1,null,!0)},removeData:function(r){return this.each(function(){De.remove(this,r)})}}),c.extend({queue:function(r,a,l){var h;if(r)return a=(a||"fx")+"queue",h=he.get(r,a),l&&(!h||Array.isArray(l)?h=he.access(r,a,c.makeArray(l)):h.push(l)),h||[]},dequeue:function(r,a){a=a||"fx";var l=c.queue(r,a),h=l.length,v=l.shift(),x=c._queueHooks(r,a),T=function(){c.dequeue(r,a)};v==="inprogress"&&(v=l.shift(),h--),v&&(a==="fx"&&l.unshift("inprogress"),delete x.stop,v.call(r,T,x)),!h&&x&&x.empty.fire()},_queueHooks:function(r,a){var l=a+"queueHooks";return he.get(r,l)||he.access(r,l,{empty:c.Callbacks("once memory").add(function(){he.remove(r,[a+"queue",l])})})}}),c.fn.extend({queue:function(r,a){var l=2;return typeof r!="string"&&(a=r,r="fx",l--),arguments.length<l?c.queue(this[0],r):a===void 0?this:this.each(function(){var h=c.queue(this,r,a);c._queueHooks(this,r),r==="fx"&&h[0]!=="inprogress"&&c.dequeue(this,r)})},dequeue:function(r){return this.each(function(){c.dequeue(this,r)})},clearQueue:function(r){return this.queue(r||"fx",[])},promise:function(r,a){var l,h=1,v=c.Deferred(),x=this,T=this.length,I=function(){--h||v.resolveWith(x,[x])};for(typeof r!="string"&&(a=r,r=void 0),r=r||"fx";T--;)l=he.get(x[T],r+"queueHooks"),l&&l.empty&&(h++,l.empty.add(I));return I(),v.promise(a)}});var Ie=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,at=new RegExp("^(?:([+-])=|)("+Ie+")([a-z%]*)$","i"),Ze=["Top","Right","Bottom","Left"],dt=m.documentElement,ct=function(r){return c.contains(r.ownerDocument,r)},St={composed:!0};dt.getRootNode&&(ct=function(r){return c.contains(r.ownerDocument,r)||r.getRootNode(St)===r.ownerDocument});var Fe=function(r,a){return r=a||r,r.style.display==="none"||r.style.display===""&&ct(r)&&c.css(r,"display")==="none"};function S(r,a,l,h){var v,x,T=20,I=h?function(){return h.cur()}:function(){return c.css(r,a,"")},N=I(),k=l&&l[3]||(c.cssNumber[a]?"":"px"),ne=r.nodeType&&(c.cssNumber[a]||k!=="px"&&+N)&&at.exec(c.css(r,a));if(ne&&ne[3]!==k){for(N=N/2,k=k||ne[3],ne=+N||1;T--;)c.style(r,a,ne+k),(1-x)*(1-(x=I()/N||.5))<=0&&(T=0),ne=ne/x;ne=ne*2,c.style(r,a,ne+k),l=l||[]}return l&&(ne=+ne||+N||0,v=l[1]?ne+(l[1]+1)*l[2]:+l[2],h&&(h.unit=k,h.start=ne,h.end=v)),v}var Y={};function oe(r){var a,l=r.ownerDocument,h=r.nodeName,v=Y[h];return v||(a=l.body.appendChild(l.createElement(h)),v=c.css(a,"display"),a.parentNode.removeChild(a),v==="none"&&(v="block"),Y[h]=v,v)}function ye(r,a){for(var l,h,v=[],x=0,T=r.length;x<T;x++)h=r[x],h.style&&(l=h.style.display,a?(l==="none"&&(v[x]=he.get(h,"display")||null,v[x]||(h.style.display="")),h.style.display===""&&Fe(h)&&(v[x]=oe(h))):l!=="none"&&(v[x]="none",he.set(h,"display",l)));for(x=0;x<T;x++)v[x]!=null&&(r[x].style.display=v[x]);return r}c.fn.extend({show:function(){return ye(this,!0)},hide:function(){return ye(this)},toggle:function(r){return typeof r=="boolean"?r?this.show():this.hide():this.each(function(){Fe(this)?c(this).show():c(this).hide()})}});var Ce=/^(?:checkbox|radio)$/i,pt=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,lt=/^$|^module$|\/(?:java|ecma)script/i;(function(){var r=m.createDocumentFragment(),a=r.appendChild(m.createElement("div")),l=m.createElement("input");l.setAttribute("type","radio"),l.setAttribute("checked","checked"),l.setAttribute("name","t"),a.appendChild(l),A.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,a.innerHTML="<textarea>x</textarea>",A.noCloneChecked=!!a.cloneNode(!0).lastChild.defaultValue,a.innerHTML="<option></option>",A.option=!!a.lastChild})();var mt={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};mt.tbody=mt.tfoot=mt.colgroup=mt.caption=mt.thead,mt.th=mt.td,A.option||(mt.optgroup=mt.option=[1,"<select multiple='multiple'>","</select>"]);function Et(r,a){var l;return typeof r.getElementsByTagName<"u"?l=r.getElementsByTagName(a||"*"):typeof r.querySelectorAll<"u"?l=r.querySelectorAll(a||"*"):l=[],a===void 0||a&&P(r,a)?c.merge([r],l):l}function bt(r,a){for(var l=0,h=r.length;l<h;l++)he.set(r[l],"globalEval",!a||he.get(a[l],"globalEval"))}var Ot=/<|&#?\w+;/;function It(r,a,l,h,v){for(var x,T,I,N,k,ne,ae=a.createDocumentFragment(),q=[],_e=0,$e=r.length;_e<$e;_e++)if(x=r[_e],x||x===0)if(B(x)==="object")c.merge(q,x.nodeType?[x]:x);else if(!Ot.test(x))q.push(a.createTextNode(x));else{for(T=T||ae.appendChild(a.createElement("div")),I=(pt.exec(x)||["",""])[1].toLowerCase(),N=mt[I]||mt._default,T.innerHTML=N[1]+c.htmlPrefilter(x)+N[2],ne=N[0];ne--;)T=T.lastChild;c.merge(q,T.childNodes),T=ae.firstChild,T.textContent=""}for(ae.textContent="",_e=0;x=q[_e++];){if(h&&c.inArray(x,h)>-1){v&&v.push(x);continue}if(k=ct(x),T=Et(ae.appendChild(x),"script"),k&&bt(T),l)for(ne=0;x=T[ne++];)lt.test(x.type||"")&&l.push(x)}return ae}var Jt=/^([^.]*)(?:\.(.+)|)/;function Vt(){return!0}function sn(){return!1}function In(r,a,l,h,v,x){var T,I;if(typeof a=="object"){typeof l!="string"&&(h=h||l,l=void 0);for(I in a)In(r,I,l,h,a[I],x);return r}if(h==null&&v==null?(v=l,h=l=void 0):v==null&&(typeof l=="string"?(v=h,h=void 0):(v=h,h=l,l=void 0)),v===!1)v=sn;else if(!v)return r;return x===1&&(T=v,v=function(N){return c().off(N),T.apply(this,arguments)},v.guid=T.guid||(T.guid=c.guid++)),r.each(function(){c.event.add(this,a,v,h,l)})}c.event={global:{},add:function(r,a,l,h,v){var x,T,I,N,k,ne,ae,q,_e,$e,Mt,ut=he.get(r);if(He(r))for(l.handler&&(x=l,l=x.handler,v=x.selector),v&&c.find.matchesSelector(dt,v),l.guid||(l.guid=c.guid++),(N=ut.events)||(N=ut.events=Object.create(null)),(T=ut.handle)||(T=ut.handle=function(Kt){return typeof c<"u"&&c.event.triggered!==Kt.type?c.event.dispatch.apply(r,arguments):void 0}),a=(a||"").match(je)||[""],k=a.length;k--;)I=Jt.exec(a[k])||[],_e=Mt=I[1],$e=(I[2]||"").split(".").sort(),_e&&(ae=c.event.special[_e]||{},_e=(v?ae.delegateType:ae.bindType)||_e,ae=c.event.special[_e]||{},ne=c.extend({type:_e,origType:Mt,data:h,handler:l,guid:l.guid,selector:v,needsContext:v&&c.expr.match.needsContext.test(v),namespace:$e.join(".")},x),(q=N[_e])||(q=N[_e]=[],q.delegateCount=0,(!ae.setup||ae.setup.call(r,h,$e,T)===!1)&&r.addEventListener&&r.addEventListener(_e,T)),ae.add&&(ae.add.call(r,ne),ne.handler.guid||(ne.handler.guid=l.guid)),v?q.splice(q.delegateCount++,0,ne):q.push(ne),c.event.global[_e]=!0)},remove:function(r,a,l,h,v){var x,T,I,N,k,ne,ae,q,_e,$e,Mt,ut=he.hasData(r)&&he.get(r);if(!(!ut||!(N=ut.events))){for(a=(a||"").match(je)||[""],k=a.length;k--;){if(I=Jt.exec(a[k])||[],_e=Mt=I[1],$e=(I[2]||"").split(".").sort(),!_e){for(_e in N)c.event.remove(r,_e+a[k],l,h,!0);continue}for(ae=c.event.special[_e]||{},_e=(h?ae.delegateType:ae.bindType)||_e,q=N[_e]||[],I=I[2]&&new RegExp("(^|\\.)"+$e.join("\\.(?:.*\\.|)")+"(\\.|$)"),T=x=q.length;x--;)ne=q[x],(v||Mt===ne.origType)&&(!l||l.guid===ne.guid)&&(!I||I.test(ne.namespace))&&(!h||h===ne.selector||h==="**"&&ne.selector)&&(q.splice(x,1),ne.selector&&q.delegateCount--,ae.remove&&ae.remove.call(r,ne));T&&!q.length&&((!ae.teardown||ae.teardown.call(r,$e,ut.handle)===!1)&&c.removeEvent(r,_e,ut.handle),delete N[_e])}c.isEmptyObject(N)&&he.remove(r,"handle events")}},dispatch:function(r){var a,l,h,v,x,T,I=new Array(arguments.length),N=c.event.fix(r),k=(he.get(this,"events")||Object.create(null))[N.type]||[],ne=c.event.special[N.type]||{};for(I[0]=N,a=1;a<arguments.length;a++)I[a]=arguments[a];if(N.delegateTarget=this,!(ne.preDispatch&&ne.preDispatch.call(this,N)===!1)){for(T=c.event.handlers.call(this,N,k),a=0;(v=T[a++])&&!N.isPropagationStopped();)for(N.currentTarget=v.elem,l=0;(x=v.handlers[l++])&&!N.isImmediatePropagationStopped();)(!N.rnamespace||x.namespace===!1||N.rnamespace.test(x.namespace))&&(N.handleObj=x,N.data=x.data,h=((c.event.special[x.origType]||{}).handle||x.handler).apply(v.elem,I),h!==void 0&&(N.result=h)===!1&&(N.preventDefault(),N.stopPropagation()));return ne.postDispatch&&ne.postDispatch.call(this,N),N.result}},handlers:function(r,a){var l,h,v,x,T,I=[],N=a.delegateCount,k=r.target;if(N&&k.nodeType&&!(r.type==="click"&&r.button>=1)){for(;k!==this;k=k.parentNode||this)if(k.nodeType===1&&!(r.type==="click"&&k.disabled===!0)){for(x=[],T={},l=0;l<N;l++)h=a[l],v=h.selector+" ",T[v]===void 0&&(T[v]=h.needsContext?c(v,this).index(k)>-1:c.find(v,this,null,[k]).length),T[v]&&x.push(h);x.length&&I.push({elem:k,handlers:x})}}return k=this,N<a.length&&I.push({elem:k,handlers:a.slice(N)}),I},addProp:function(r,a){Object.defineProperty(c.Event.prototype,r,{enumerable:!0,configurable:!0,get:w(a)?function(){if(this.originalEvent)return a(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[r]},set:function(l){Object.defineProperty(this,r,{enumerable:!0,configurable:!0,writable:!0,value:l})}})},fix:function(r){return r[c.expando]?r:new c.Event(r)},special:{load:{noBubble:!0},click:{setup:function(r){var a=this||r;return Ce.test(a.type)&&a.click&&P(a,"input")&&vn(a,"click",!0),!1},trigger:function(r){var a=this||r;return Ce.test(a.type)&&a.click&&P(a,"input")&&vn(a,"click"),!0},_default:function(r){var a=r.target;return Ce.test(a.type)&&a.click&&P(a,"input")&&he.get(a,"click")||P(a,"a")}},beforeunload:{postDispatch:function(r){r.result!==void 0&&r.originalEvent&&(r.originalEvent.returnValue=r.result)}}}};function vn(r,a,l){if(!l){he.get(r,a)===void 0&&c.event.add(r,a,Vt);return}he.set(r,a,!1),c.event.add(r,a,{namespace:!1,handler:function(h){var v,x=he.get(this,a);if(h.isTrigger&1&&this[a]){if(x)(c.event.special[a]||{}).delegateType&&h.stopPropagation();else if(x=o.call(arguments),he.set(this,a,x),this[a](),v=he.get(this,a),he.set(this,a,!1),x!==v)return h.stopImmediatePropagation(),h.preventDefault(),v}else x&&(he.set(this,a,c.event.trigger(x[0],x.slice(1),this)),h.stopPropagation(),h.isImmediatePropagationStopped=Vt)}})}c.removeEvent=function(r,a,l){r.removeEventListener&&r.removeEventListener(a,l)},c.Event=function(r,a){if(!(this instanceof c.Event))return new c.Event(r,a);r&&r.type?(this.originalEvent=r,this.type=r.type,this.isDefaultPrevented=r.defaultPrevented||r.defaultPrevented===void 0&&r.returnValue===!1?Vt:sn,this.target=r.target&&r.target.nodeType===3?r.target.parentNode:r.target,this.currentTarget=r.currentTarget,this.relatedTarget=r.relatedTarget):this.type=r,a&&c.extend(this,a),this.timeStamp=r&&r.timeStamp||Date.now(),this[c.expando]=!0},c.Event.prototype={constructor:c.Event,isDefaultPrevented:sn,isPropagationStopped:sn,isImmediatePropagationStopped:sn,isSimulated:!1,preventDefault:function(){var r=this.originalEvent;this.isDefaultPrevented=Vt,r&&!this.isSimulated&&r.preventDefault()},stopPropagation:function(){var r=this.originalEvent;this.isPropagationStopped=Vt,r&&!this.isSimulated&&r.stopPropagation()},stopImmediatePropagation:function(){var r=this.originalEvent;this.isImmediatePropagationStopped=Vt,r&&!this.isSimulated&&r.stopImmediatePropagation(),this.stopPropagation()}},c.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},c.event.addProp),c.each({focus:"focusin",blur:"focusout"},function(r,a){function l(h){if(m.documentMode){var v=he.get(this,"handle"),x=c.event.fix(h);x.type=h.type==="focusin"?"focus":"blur",x.isSimulated=!0,v(h),x.target===x.currentTarget&&v(x)}else c.event.simulate(a,h.target,c.event.fix(h))}c.event.special[r]={setup:function(){var h;if(vn(this,r,!0),m.documentMode)h=he.get(this,a),h||this.addEventListener(a,l),he.set(this,a,(h||0)+1);else return!1},trigger:function(){return vn(this,r),!0},teardown:function(){var h;if(m.documentMode)h=he.get(this,a)-1,h?he.set(this,a,h):(this.removeEventListener(a,l),he.remove(this,a));else return!1},_default:function(h){return he.get(h.target,r)},delegateType:a},c.event.special[a]={setup:function(){var h=this.ownerDocument||this.document||this,v=m.documentMode?this:h,x=he.get(v,a);x||(m.documentMode?this.addEventListener(a,l):h.addEventListener(r,l,!0)),he.set(v,a,(x||0)+1)},teardown:function(){var h=this.ownerDocument||this.document||this,v=m.documentMode?this:h,x=he.get(v,a)-1;x?he.set(v,a,x):(m.documentMode?this.removeEventListener(a,l):h.removeEventListener(r,l,!0),he.remove(v,a))}}}),c.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(r,a){c.event.special[r]={delegateType:a,bindType:a,handle:function(l){var h,v=this,x=l.relatedTarget,T=l.handleObj;return(!x||x!==v&&!c.contains(v,x))&&(l.type=T.origType,h=T.handler.apply(this,arguments),l.type=a),h}}}),c.fn.extend({on:function(r,a,l,h){return In(this,r,a,l,h)},one:function(r,a,l,h){return In(this,r,a,l,h,1)},off:function(r,a,l){var h,v;if(r&&r.preventDefault&&r.handleObj)return h=r.handleObj,c(r.delegateTarget).off(h.namespace?h.origType+"."+h.namespace:h.origType,h.selector,h.handler),this;if(typeof r=="object"){for(v in r)this.off(v,a,r[v]);return this}return(a===!1||typeof a=="function")&&(l=a,a=void 0),l===!1&&(l=sn),this.each(function(){c.event.remove(this,r,l,a)})}});var as=/<script|<style|<link/i,Zi=/checked\s*(?:[^=]|=\s*.checked.)/i,os=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function Br(r,a){return P(r,"table")&&P(a.nodeType!==11?a:a.firstChild,"tr")&&c(r).children("tbody")[0]||r}function oa(r){return r.type=(r.getAttribute("type")!==null)+"/"+r.type,r}function ca(r){return(r.type||"").slice(0,5)==="true/"?r.type=r.type.slice(5):r.removeAttribute("type"),r}function cs(r,a){var l,h,v,x,T,I,N;if(a.nodeType===1){if(he.hasData(r)&&(x=he.get(r),N=x.events,N)){he.remove(a,"handle events");for(v in N)for(l=0,h=N[v].length;l<h;l++)c.event.add(a,v,N[v][l])}De.hasData(r)&&(T=De.access(r),I=c.extend({},T),De.set(a,I))}}function L(r,a){var l=a.nodeName.toLowerCase();l==="input"&&Ce.test(r.type)?a.checked=r.checked:(l==="input"||l==="textarea")&&(a.defaultValue=r.defaultValue)}function V(r,a,l,h){a=f(a);var v,x,T,I,N,k,ne=0,ae=r.length,q=ae-1,_e=a[0],$e=w(_e);if($e||ae>1&&typeof _e=="string"&&!A.checkClone&&Zi.test(_e))return r.each(function(Mt){var ut=r.eq(Mt);$e&&(a[0]=_e.call(this,Mt,ut.html())),V(ut,a,l,h)});if(ae&&(v=It(a,r[0].ownerDocument,!1,r,h),x=v.firstChild,v.childNodes.length===1&&(v=x),x||h)){for(T=c.map(Et(v,"script"),oa),I=T.length;ne<ae;ne++)N=v,ne!==q&&(N=c.clone(N,!0,!0),I&&c.merge(T,Et(N,"script"))),l.call(r[ne],N,ne);if(I)for(k=T[T.length-1].ownerDocument,c.map(T,ca),ne=0;ne<I;ne++)N=T[ne],lt.test(N.type||"")&&!he.access(N,"globalEval")&&c.contains(k,N)&&(N.src&&(N.type||"").toLowerCase()!=="module"?c._evalUrl&&!N.noModule&&c._evalUrl(N.src,{nonce:N.nonce||N.getAttribute("nonce")},k):R(N.textContent.replace(os,""),N,k))}return r}function J(r,a,l){for(var h,v=a?c.filter(a,r):r,x=0;(h=v[x])!=null;x++)!l&&h.nodeType===1&&c.cleanData(Et(h)),h.parentNode&&(l&&ct(h)&&bt(Et(h,"script")),h.parentNode.removeChild(h));return r}c.extend({htmlPrefilter:function(r){return r},clone:function(r,a,l){var h,v,x,T,I=r.cloneNode(!0),N=ct(r);if(!A.noCloneChecked&&(r.nodeType===1||r.nodeType===11)&&!c.isXMLDoc(r))for(T=Et(I),x=Et(r),h=0,v=x.length;h<v;h++)L(x[h],T[h]);if(a)if(l)for(x=x||Et(r),T=T||Et(I),h=0,v=x.length;h<v;h++)cs(x[h],T[h]);else cs(r,I);return T=Et(I,"script"),T.length>0&&bt(T,!N&&Et(r,"script")),I},cleanData:function(r){for(var a,l,h,v=c.event.special,x=0;(l=r[x])!==void 0;x++)if(He(l)){if(a=l[he.expando]){if(a.events)for(h in a.events)v[h]?c.event.remove(l,h):c.removeEvent(l,h,a.handle);l[he.expando]=void 0}l[De.expando]&&(l[De.expando]=void 0)}}}),c.fn.extend({detach:function(r){return J(this,r,!0)},remove:function(r){return J(this,r)},text:function(r){return b(this,function(a){return a===void 0?c.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=a)})},null,r,arguments.length)},append:function(){return V(this,arguments,function(r){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var a=Br(this,r);a.appendChild(r)}})},prepend:function(){return V(this,arguments,function(r){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var a=Br(this,r);a.insertBefore(r,a.firstChild)}})},before:function(){return V(this,arguments,function(r){this.parentNode&&this.parentNode.insertBefore(r,this)})},after:function(){return V(this,arguments,function(r){this.parentNode&&this.parentNode.insertBefore(r,this.nextSibling)})},empty:function(){for(var r,a=0;(r=this[a])!=null;a++)r.nodeType===1&&(c.cleanData(Et(r,!1)),r.textContent="");return this},clone:function(r,a){return r=r??!1,a=a??r,this.map(function(){return c.clone(this,r,a)})},html:function(r){return b(this,function(a){var l=this[0]||{},h=0,v=this.length;if(a===void 0&&l.nodeType===1)return l.innerHTML;if(typeof a=="string"&&!as.test(a)&&!mt[(pt.exec(a)||["",""])[1].toLowerCase()]){a=c.htmlPrefilter(a);try{for(;h<v;h++)l=this[h]||{},l.nodeType===1&&(c.cleanData(Et(l,!1)),l.innerHTML=a);l=0}catch{}}l&&this.empty().append(a)},null,r,arguments.length)},replaceWith:function(){var r=[];return V(this,arguments,function(a){var l=this.parentNode;c.inArray(this,r)<0&&(c.cleanData(Et(this)),l&&l.replaceChild(a,this))},r)}}),c.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(r,a){c.fn[r]=function(l){for(var h,v=[],x=c(l),T=x.length-1,I=0;I<=T;I++)h=I===T?this:this.clone(!0),c(x[I])[a](h),u.apply(v,h.get());return this.pushStack(v)}});var Q=new RegExp("^("+Ie+")(?!px)[a-z%]+$","i"),K=/^--/,be=function(r){var a=r.ownerDocument.defaultView;return(!a||!a.opener)&&(a=e),a.getComputedStyle(r)},ze=function(r,a,l){var h,v,x={};for(v in a)x[v]=r.style[v],r.style[v]=a[v];h=l.call(r);for(v in a)r.style[v]=x[v];return h},We=new RegExp(Ze.join("|"),"i");(function(){function r(){if(k){N.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",k.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",dt.appendChild(N).appendChild(k);var ne=e.getComputedStyle(k);l=ne.top!=="1%",I=a(ne.marginLeft)===12,k.style.right="60%",x=a(ne.right)===36,h=a(ne.width)===36,k.style.position="absolute",v=a(k.offsetWidth/3)===12,dt.removeChild(N),k=null}}function a(ne){return Math.round(parseFloat(ne))}var l,h,v,x,T,I,N=m.createElement("div"),k=m.createElement("div");k.style&&(k.style.backgroundClip="content-box",k.cloneNode(!0).style.backgroundClip="",A.clearCloneStyle=k.style.backgroundClip==="content-box",c.extend(A,{boxSizingReliable:function(){return r(),h},pixelBoxStyles:function(){return r(),x},pixelPosition:function(){return r(),l},reliableMarginLeft:function(){return r(),I},scrollboxSize:function(){return r(),v},reliableTrDimensions:function(){var ne,ae,q,_e;return T==null&&(ne=m.createElement("table"),ae=m.createElement("tr"),q=m.createElement("div"),ne.style.cssText="position:absolute;left:-11111px;border-collapse:separate",ae.style.cssText="box-sizing:content-box;border:1px solid",ae.style.height="1px",q.style.height="9px",q.style.display="block",dt.appendChild(ne).appendChild(ae).appendChild(q),_e=e.getComputedStyle(ae),T=parseInt(_e.height,10)+parseInt(_e.borderTopWidth,10)+parseInt(_e.borderBottomWidth,10)===ae.offsetHeight,dt.removeChild(ne)),T}}))})();function Ge(r,a,l){var h,v,x,T,I=K.test(a),N=r.style;return l=l||be(r),l&&(T=l.getPropertyValue(a)||l[a],I&&T&&(T=T.replace(le,"$1")||void 0),T===""&&!ct(r)&&(T=c.style(r,a)),!A.pixelBoxStyles()&&Q.test(T)&&We.test(a)&&(h=N.width,v=N.minWidth,x=N.maxWidth,N.minWidth=N.maxWidth=N.width=T,T=l.width,N.width=h,N.minWidth=v,N.maxWidth=x)),T!==void 0?T+"":T}function nt(r,a){return{get:function(){if(r()){delete this.get;return}return(this.get=a).apply(this,arguments)}}}var Je=["Webkit","Moz","ms"],it=m.createElement("div").style,Nt={};function an(r){for(var a=r[0].toUpperCase()+r.slice(1),l=Je.length;l--;)if(r=Je[l]+a,r in it)return r}function Ft(r){var a=c.cssProps[r]||Nt[r];return a||(r in it?r:Nt[r]=an(r)||r)}var bn=/^(none|table(?!-c[ea]).+)/,Dt={position:"absolute",visibility:"hidden",display:"block"},rt={letterSpacing:"0",fontWeight:"400"};function Ji(r,a,l){var h=at.exec(a);return h?Math.max(0,h[2]-(l||0))+(h[3]||"px"):a}function Ct(r,a,l,h,v,x){var T=a==="width"?1:0,I=0,N=0,k=0;if(l===(h?"border":"content"))return 0;for(;T<4;T+=2)l==="margin"&&(k+=c.css(r,l+Ze[T],!0,v)),h?(l==="content"&&(N-=c.css(r,"padding"+Ze[T],!0,v)),l!=="margin"&&(N-=c.css(r,"border"+Ze[T]+"Width",!0,v))):(N+=c.css(r,"padding"+Ze[T],!0,v),l!=="padding"?N+=c.css(r,"border"+Ze[T]+"Width",!0,v):I+=c.css(r,"border"+Ze[T]+"Width",!0,v));return!h&&x>=0&&(N+=Math.max(0,Math.ceil(r["offset"+a[0].toUpperCase()+a.slice(1)]-x-N-I-.5))||0),N+k}function On(r,a,l){var h=be(r),v=!A.boxSizingReliable()||l,x=v&&c.css(r,"boxSizing",!1,h)==="border-box",T=x,I=Ge(r,a,h),N="offset"+a[0].toUpperCase()+a.slice(1);if(Q.test(I)){if(!l)return I;I="auto"}return(!A.boxSizingReliable()&&x||!A.reliableTrDimensions()&&P(r,"tr")||I==="auto"||!parseFloat(I)&&c.css(r,"display",!1,h)==="inline")&&r.getClientRects().length&&(x=c.css(r,"boxSizing",!1,h)==="border-box",T=N in r,T&&(I=r[N])),I=parseFloat(I)||0,I+Ct(r,a,l||(x?"border":"content"),T,h,I)+"px"}c.extend({cssHooks:{opacity:{get:function(r,a){if(a){var l=Ge(r,"opacity");return l===""?"1":l}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(r,a,l,h){if(!(!r||r.nodeType===3||r.nodeType===8||!r.style)){var v,x,T,I=de(a),N=K.test(a),k=r.style;if(N||(a=Ft(I)),T=c.cssHooks[a]||c.cssHooks[I],l!==void 0){if(x=typeof l,x==="string"&&(v=at.exec(l))&&v[1]&&(l=S(r,a,v),x="number"),l==null||l!==l)return;x==="number"&&!N&&(l+=v&&v[3]||(c.cssNumber[I]?"":"px")),!A.clearCloneStyle&&l===""&&a.indexOf("background")===0&&(k[a]="inherit"),(!T||!("set"in T)||(l=T.set(r,l,h))!==void 0)&&(N?k.setProperty(a,l):k[a]=l)}else return T&&"get"in T&&(v=T.get(r,!1,h))!==void 0?v:k[a]}},css:function(r,a,l,h){var v,x,T,I=de(a),N=K.test(a);return N||(a=Ft(I)),T=c.cssHooks[a]||c.cssHooks[I],T&&"get"in T&&(v=T.get(r,!0,l)),v===void 0&&(v=Ge(r,a,h)),v==="normal"&&a in rt&&(v=rt[a]),l===""||l?(x=parseFloat(v),l===!0||isFinite(x)?x||0:v):v}}),c.each(["height","width"],function(r,a){c.cssHooks[a]={get:function(l,h,v){if(h)return bn.test(c.css(l,"display"))&&(!l.getClientRects().length||!l.getBoundingClientRect().width)?ze(l,Dt,function(){return On(l,a,v)}):On(l,a,v)},set:function(l,h,v){var x,T=be(l),I=!A.scrollboxSize()&&T.position==="absolute",N=I||v,k=N&&c.css(l,"boxSizing",!1,T)==="border-box",ne=v?Ct(l,a,v,k,T):0;return k&&I&&(ne-=Math.ceil(l["offset"+a[0].toUpperCase()+a.slice(1)]-parseFloat(T[a])-Ct(l,a,"border",!1,T)-.5)),ne&&(x=at.exec(h))&&(x[3]||"px")!=="px"&&(l.style[a]=h,h=c.css(l,a)),Ji(l,h,ne)}}}),c.cssHooks.marginLeft=nt(A.reliableMarginLeft,function(r,a){if(a)return(parseFloat(Ge(r,"marginLeft"))||r.getBoundingClientRect().left-ze(r,{marginLeft:0},function(){return r.getBoundingClientRect().left}))+"px"}),c.each({margin:"",padding:"",border:"Width"},function(r,a){c.cssHooks[r+a]={expand:function(l){for(var h=0,v={},x=typeof l=="string"?l.split(" "):[l];h<4;h++)v[r+Ze[h]+a]=x[h]||x[h-2]||x[0];return v}},r!=="margin"&&(c.cssHooks[r+a].set=Ji)}),c.fn.extend({css:function(r,a){return b(this,function(l,h,v){var x,T,I={},N=0;if(Array.isArray(h)){for(x=be(l),T=h.length;N<T;N++)I[h[N]]=c.css(l,h[N],!1,x);return I}return v!==void 0?c.style(l,h,v):c.css(l,h)},r,a,arguments.length>1)}});function $t(r,a,l,h,v){return new $t.prototype.init(r,a,l,h,v)}c.Tween=$t,$t.prototype={constructor:$t,init:function(r,a,l,h,v,x){this.elem=r,this.prop=l,this.easing=v||c.easing._default,this.options=a,this.start=this.now=this.cur(),this.end=h,this.unit=x||(c.cssNumber[l]?"":"px")},cur:function(){var r=$t.propHooks[this.prop];return r&&r.get?r.get(this):$t.propHooks._default.get(this)},run:function(r){var a,l=$t.propHooks[this.prop];return this.options.duration?this.pos=a=c.easing[this.easing](r,this.options.duration*r,0,1,this.options.duration):this.pos=a=r,this.now=(this.end-this.start)*a+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),l&&l.set?l.set(this):$t.propHooks._default.set(this),this}},$t.prototype.init.prototype=$t.prototype,$t.propHooks={_default:{get:function(r){var a;return r.elem.nodeType!==1||r.elem[r.prop]!=null&&r.elem.style[r.prop]==null?r.elem[r.prop]:(a=c.css(r.elem,r.prop,""),!a||a==="auto"?0:a)},set:function(r){c.fx.step[r.prop]?c.fx.step[r.prop](r):r.elem.nodeType===1&&(c.cssHooks[r.prop]||r.elem.style[Ft(r.prop)]!=null)?c.style(r.elem,r.prop,r.now+r.unit):r.elem[r.prop]=r.now}}},$t.propHooks.scrollTop=$t.propHooks.scrollLeft={set:function(r){r.elem.nodeType&&r.elem.parentNode&&(r.elem[r.prop]=r.now)}},c.easing={linear:function(r){return r},swing:function(r){return .5-Math.cos(r*Math.PI)/2},_default:"swing"},c.fx=$t.prototype.init,c.fx.step={};var xn,si,jt=/^(?:toggle|show|hide)$/,Fn=/queueHooks$/;function Ai(){si&&(m.hidden===!1&&e.requestAnimationFrame?e.requestAnimationFrame(Ai):e.setTimeout(Ai,c.fx.interval),c.fx.tick())}function on(){return e.setTimeout(function(){xn=void 0}),xn=Date.now()}function ai(r,a){var l,h=0,v={height:r};for(a=a?1:0;h<4;h+=2-a)l=Ze[h],v["margin"+l]=v["padding"+l]=r;return a&&(v.opacity=v.width=r),v}function ls(r,a,l){for(var h,v=(An.tweeners[a]||[]).concat(An.tweeners["*"]),x=0,T=v.length;x<T;x++)if(h=v[x].call(l,a,r))return h}function us(r,a,l){var h,v,x,T,I,N,k,ne,ae="width"in a||"height"in a,q=this,_e={},$e=r.style,Mt=r.nodeType&&Fe(r),ut=he.get(r,"fxshow");l.queue||(T=c._queueHooks(r,"fx"),T.unqueued==null&&(T.unqueued=0,I=T.empty.fire,T.empty.fire=function(){T.unqueued||I()}),T.unqueued++,q.always(function(){q.always(function(){T.unqueued--,c.queue(r,"fx").length||T.empty.fire()})}));for(h in a)if(v=a[h],jt.test(v)){if(delete a[h],x=x||v==="toggle",v===(Mt?"hide":"show"))if(v==="show"&&ut&&ut[h]!==void 0)Mt=!0;else continue;_e[h]=ut&&ut[h]||c.style(r,h)}if(N=!c.isEmptyObject(a),!(!N&&c.isEmptyObject(_e))){ae&&r.nodeType===1&&(l.overflow=[$e.overflow,$e.overflowX,$e.overflowY],k=ut&&ut.display,k==null&&(k=he.get(r,"display")),ne=c.css(r,"display"),ne==="none"&&(k?ne=k:(ye([r],!0),k=r.style.display||k,ne=c.css(r,"display"),ye([r]))),(ne==="inline"||ne==="inline-block"&&k!=null)&&c.css(r,"float")==="none"&&(N||(q.done(function(){$e.display=k}),k==null&&(ne=$e.display,k=ne==="none"?"":ne)),$e.display="inline-block")),l.overflow&&($e.overflow="hidden",q.always(function(){$e.overflow=l.overflow[0],$e.overflowX=l.overflow[1],$e.overflowY=l.overflow[2]})),N=!1;for(h in _e)N||(ut?"hidden"in ut&&(Mt=ut.hidden):ut=he.access(r,"fxshow",{display:k}),x&&(ut.hidden=!Mt),Mt&&ye([r],!0),q.done(function(){Mt||ye([r]),he.remove(r,"fxshow");for(h in _e)c.style(r,h,_e[h])})),N=ls(Mt?ut[h]:0,h,q),h in ut||(ut[h]=N.start,Mt&&(N.end=N.start,N.start=0))}}function Zl(r,a){var l,h,v,x,T;for(l in r)if(h=de(l),v=a[h],x=r[l],Array.isArray(x)&&(v=x[1],x=r[l]=x[0]),l!==h&&(r[h]=x,delete r[l]),T=c.cssHooks[h],T&&"expand"in T){x=T.expand(x),delete r[h];for(l in x)l in r||(r[l]=x[l],a[l]=v)}else a[h]=v}function An(r,a,l){var h,v,x=0,T=An.prefilters.length,I=c.Deferred().always(function(){delete N.elem}),N=function(){if(v)return!1;for(var ae=xn||on(),q=Math.max(0,k.startTime+k.duration-ae),_e=q/k.duration||0,$e=1-_e,Mt=0,ut=k.tweens.length;Mt<ut;Mt++)k.tweens[Mt].run($e);return I.notifyWith(r,[k,$e,q]),$e<1&&ut?q:(ut||I.notifyWith(r,[k,1,0]),I.resolveWith(r,[k]),!1)},k=I.promise({elem:r,props:c.extend({},a),opts:c.extend(!0,{specialEasing:{},easing:c.easing._default},l),originalProperties:a,originalOptions:l,startTime:xn||on(),duration:l.duration,tweens:[],createTween:function(ae,q){var _e=c.Tween(r,k.opts,ae,q,k.opts.specialEasing[ae]||k.opts.easing);return k.tweens.push(_e),_e},stop:function(ae){var q=0,_e=ae?k.tweens.length:0;if(v)return this;for(v=!0;q<_e;q++)k.tweens[q].run(1);return ae?(I.notifyWith(r,[k,1,0]),I.resolveWith(r,[k,ae])):I.rejectWith(r,[k,ae]),this}}),ne=k.props;for(Zl(ne,k.opts.specialEasing);x<T;x++)if(h=An.prefilters[x].call(k,r,ne,k.opts),h)return w(h.stop)&&(c._queueHooks(k.elem,k.opts.queue).stop=h.stop.bind(h)),h;return c.map(ne,ls,k),w(k.opts.start)&&k.opts.start.call(r,k),k.progress(k.opts.progress).done(k.opts.done,k.opts.complete).fail(k.opts.fail).always(k.opts.always),c.fx.timer(c.extend(N,{elem:r,anim:k,queue:k.opts.queue})),k}c.Animation=c.extend(An,{tweeners:{"*":[function(r,a){var l=this.createTween(r,a);return S(l.elem,r,at.exec(a),l),l}]},tweener:function(r,a){w(r)?(a=r,r=["*"]):r=r.match(je);for(var l,h=0,v=r.length;h<v;h++)l=r[h],An.tweeners[l]=An.tweeners[l]||[],An.tweeners[l].unshift(a)},prefilters:[us],prefilter:function(r,a){a?An.prefilters.unshift(r):An.prefilters.push(r)}}),c.speed=function(r,a,l){var h=r&&typeof r=="object"?c.extend({},r):{complete:l||!l&&a||w(r)&&r,duration:r,easing:l&&a||a&&!w(a)&&a};return c.fx.off?h.duration=0:typeof h.duration!="number"&&(h.duration in c.fx.speeds?h.duration=c.fx.speeds[h.duration]:h.duration=c.fx.speeds._default),(h.queue==null||h.queue===!0)&&(h.queue="fx"),h.old=h.complete,h.complete=function(){w(h.old)&&h.old.call(this),h.queue&&c.dequeue(this,h.queue)},h},c.fn.extend({fadeTo:function(r,a,l,h){return this.filter(Fe).css("opacity",0).show().end().animate({opacity:a},r,l,h)},animate:function(r,a,l,h){var v=c.isEmptyObject(r),x=c.speed(a,l,h),T=function(){var I=An(this,c.extend({},r),x);(v||he.get(this,"finish"))&&I.stop(!0)};return T.finish=T,v||x.queue===!1?this.each(T):this.queue(x.queue,T)},stop:function(r,a,l){var h=function(v){var x=v.stop;delete v.stop,x(l)};return typeof r!="string"&&(l=a,a=r,r=void 0),a&&this.queue(r||"fx",[]),this.each(function(){var v=!0,x=r!=null&&r+"queueHooks",T=c.timers,I=he.get(this);if(x)I[x]&&I[x].stop&&h(I[x]);else for(x in I)I[x]&&I[x].stop&&Fn.test(x)&&h(I[x]);for(x=T.length;x--;)T[x].elem===this&&(r==null||T[x].queue===r)&&(T[x].anim.stop(l),v=!1,T.splice(x,1));(v||!l)&&c.dequeue(this,r)})},finish:function(r){return r!==!1&&(r=r||"fx"),this.each(function(){var a,l=he.get(this),h=l[r+"queue"],v=l[r+"queueHooks"],x=c.timers,T=h?h.length:0;for(l.finish=!0,c.queue(this,r,[]),v&&v.stop&&v.stop.call(this,!0),a=x.length;a--;)x[a].elem===this&&x[a].queue===r&&(x[a].anim.stop(!0),x.splice(a,1));for(a=0;a<T;a++)h[a]&&h[a].finish&&h[a].finish.call(this);delete l.finish})}}),c.each(["toggle","show","hide"],function(r,a){var l=c.fn[a];c.fn[a]=function(h,v,x){return h==null||typeof h=="boolean"?l.apply(this,arguments):this.animate(ai(a,!0),h,v,x)}}),c.each({slideDown:ai("show"),slideUp:ai("hide"),slideToggle:ai("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(r,a){c.fn[r]=function(l,h,v){return this.animate(a,l,h,v)}}),c.timers=[],c.fx.tick=function(){var r,a=0,l=c.timers;for(xn=Date.now();a<l.length;a++)r=l[a],!r()&&l[a]===r&&l.splice(a--,1);l.length||c.fx.stop(),xn=void 0},c.fx.timer=function(r){c.timers.push(r),c.fx.start()},c.fx.interval=13,c.fx.start=function(){si||(si=!0,Ai())},c.fx.stop=function(){si=null},c.fx.speeds={slow:600,fast:200,_default:400},c.fn.delay=function(r,a){return r=c.fx&&c.fx.speeds[r]||r,a=a||"fx",this.queue(a,function(l,h){var v=e.setTimeout(l,r);h.stop=function(){e.clearTimeout(v)}})},function(){var r=m.createElement("input"),a=m.createElement("select"),l=a.appendChild(m.createElement("option"));r.type="checkbox",A.checkOn=r.value!=="",A.optSelected=l.selected,r=m.createElement("input"),r.value="t",r.type="radio",A.radioValue=r.value==="t"}();var vo,zr=c.expr.attrHandle;c.fn.extend({attr:function(r,a){return b(this,c.attr,r,a,arguments.length>1)},removeAttr:function(r){return this.each(function(){c.removeAttr(this,r)})}}),c.extend({attr:function(r,a,l){var h,v,x=r.nodeType;if(!(x===3||x===8||x===2)){if(typeof r.getAttribute>"u")return c.prop(r,a,l);if((x!==1||!c.isXMLDoc(r))&&(v=c.attrHooks[a.toLowerCase()]||(c.expr.match.bool.test(a)?vo:void 0)),l!==void 0){if(l===null){c.removeAttr(r,a);return}return v&&"set"in v&&(h=v.set(r,l,a))!==void 0?h:(r.setAttribute(a,l+""),l)}return v&&"get"in v&&(h=v.get(r,a))!==null?h:(h=c.find.attr(r,a),h??void 0)}},attrHooks:{type:{set:function(r,a){if(!A.radioValue&&a==="radio"&&P(r,"input")){var l=r.value;return r.setAttribute("type",a),l&&(r.value=l),a}}}},removeAttr:function(r,a){var l,h=0,v=a&&a.match(je);if(v&&r.nodeType===1)for(;l=v[h++];)r.removeAttribute(l)}}),vo={set:function(r,a,l){return a===!1?c.removeAttr(r,l):r.setAttribute(l,l),l}},c.each(c.expr.match.bool.source.match(/\w+/g),function(r,a){var l=zr[a]||c.find.attr;zr[a]=function(h,v,x){var T,I,N=v.toLowerCase();return x||(I=zr[N],zr[N]=T,T=l(h,v,x)!=null?N:null,zr[N]=I),T}});var Jl=/^(?:input|select|textarea|button)$/i,Ql=/^(?:a|area)$/i;c.fn.extend({prop:function(r,a){return b(this,c.prop,r,a,arguments.length>1)},removeProp:function(r){return this.each(function(){delete this[c.propFix[r]||r]})}}),c.extend({prop:function(r,a,l){var h,v,x=r.nodeType;if(!(x===3||x===8||x===2))return(x!==1||!c.isXMLDoc(r))&&(a=c.propFix[a]||a,v=c.propHooks[a]),l!==void 0?v&&"set"in v&&(h=v.set(r,l,a))!==void 0?h:r[a]=l:v&&"get"in v&&(h=v.get(r,a))!==null?h:r[a]},propHooks:{tabIndex:{get:function(r){var a=c.find.attr(r,"tabindex");return a?parseInt(a,10):Jl.test(r.nodeName)||Ql.test(r.nodeName)&&r.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),A.optSelected||(c.propHooks.selected={get:function(r){var a=r.parentNode;return a&&a.parentNode&&a.parentNode.selectedIndex,null},set:function(r){var a=r.parentNode;a&&(a.selectedIndex,a.parentNode&&a.parentNode.selectedIndex)}}),c.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){c.propFix[this.toLowerCase()]=this});function wi(r){var a=r.match(je)||[];return a.join(" ")}function Ci(r){return r.getAttribute&&r.getAttribute("class")||""}function la(r){return Array.isArray(r)?r:typeof r=="string"?r.match(je)||[]:[]}c.fn.extend({addClass:function(r){var a,l,h,v,x,T;return w(r)?this.each(function(I){c(this).addClass(r.call(this,I,Ci(this)))}):(a=la(r),a.length?this.each(function(){if(h=Ci(this),l=this.nodeType===1&&" "+wi(h)+" ",l){for(x=0;x<a.length;x++)v=a[x],l.indexOf(" "+v+" ")<0&&(l+=v+" ");T=wi(l),h!==T&&this.setAttribute("class",T)}}):this)},removeClass:function(r){var a,l,h,v,x,T;return w(r)?this.each(function(I){c(this).removeClass(r.call(this,I,Ci(this)))}):arguments.length?(a=la(r),a.length?this.each(function(){if(h=Ci(this),l=this.nodeType===1&&" "+wi(h)+" ",l){for(x=0;x<a.length;x++)for(v=a[x];l.indexOf(" "+v+" ")>-1;)l=l.replace(" "+v+" "," ");T=wi(l),h!==T&&this.setAttribute("class",T)}}):this):this.attr("class","")},toggleClass:function(r,a){var l,h,v,x,T=typeof r,I=T==="string"||Array.isArray(r);return w(r)?this.each(function(N){c(this).toggleClass(r.call(this,N,Ci(this),a),a)}):typeof a=="boolean"&&I?a?this.addClass(r):this.removeClass(r):(l=la(r),this.each(function(){if(I)for(x=c(this),v=0;v<l.length;v++)h=l[v],x.hasClass(h)?x.removeClass(h):x.addClass(h);else(r===void 0||T==="boolean")&&(h=Ci(this),h&&he.set(this,"__className__",h),this.setAttribute&&this.setAttribute("class",h||r===!1?"":he.get(this,"__className__")||""))}))},hasClass:function(r){var a,l,h=0;for(a=" "+r+" ";l=this[h++];)if(l.nodeType===1&&(" "+wi(Ci(l))+" ").indexOf(a)>-1)return!0;return!1}});var eu=/\r/g;c.fn.extend({val:function(r){var a,l,h,v=this[0];return arguments.length?(h=w(r),this.each(function(x){var T;this.nodeType===1&&(h?T=r.call(this,x,c(this).val()):T=r,T==null?T="":typeof T=="number"?T+="":Array.isArray(T)&&(T=c.map(T,function(I){return I==null?"":I+""})),a=c.valHooks[this.type]||c.valHooks[this.nodeName.toLowerCase()],(!a||!("set"in a)||a.set(this,T,"value")===void 0)&&(this.value=T))})):v?(a=c.valHooks[v.type]||c.valHooks[v.nodeName.toLowerCase()],a&&"get"in a&&(l=a.get(v,"value"))!==void 0?l:(l=v.value,typeof l=="string"?l.replace(eu,""):l??"")):void 0}}),c.extend({valHooks:{option:{get:function(r){var a=c.find.attr(r,"value");return a??wi(c.text(r))}},select:{get:function(r){var a,l,h,v=r.options,x=r.selectedIndex,T=r.type==="select-one",I=T?null:[],N=T?x+1:v.length;for(x<0?h=N:h=T?x:0;h<N;h++)if(l=v[h],(l.selected||h===x)&&!l.disabled&&(!l.parentNode.disabled||!P(l.parentNode,"optgroup"))){if(a=c(l).val(),T)return a;I.push(a)}return I},set:function(r,a){for(var l,h,v=r.options,x=c.makeArray(a),T=v.length;T--;)h=v[T],(h.selected=c.inArray(c.valHooks.option.get(h),x)>-1)&&(l=!0);return l||(r.selectedIndex=-1),x}}}}),c.each(["radio","checkbox"],function(){c.valHooks[this]={set:function(r,a){if(Array.isArray(a))return r.checked=c.inArray(c(r).val(),a)>-1}},A.checkOn||(c.valHooks[this].get=function(r){return r.getAttribute("value")===null?"on":r.value})});var Hr=e.location,xo={guid:Date.now()},ua=/\?/;c.parseXML=function(r){var a,l;if(!r||typeof r!="string")return null;try{a=new e.DOMParser().parseFromString(r,"text/xml")}catch{}return l=a&&a.getElementsByTagName("parsererror")[0],(!a||l)&&c.error("Invalid XML: "+(l?c.map(l.childNodes,function(h){return h.textContent}).join(`
`):r)),a};var Mo=/^(?:focusinfocus|focusoutblur)$/,yo=function(r){r.stopPropagation()};c.extend(c.event,{trigger:function(r,a,l,h){var v,x,T,I,N,k,ne,ae,q=[l||m],_e=y.call(r,"type")?r.type:r,$e=y.call(r,"namespace")?r.namespace.split("."):[];if(x=ae=T=l=l||m,!(l.nodeType===3||l.nodeType===8)&&!Mo.test(_e+c.event.triggered)&&(_e.indexOf(".")>-1&&($e=_e.split("."),_e=$e.shift(),$e.sort()),N=_e.indexOf(":")<0&&"on"+_e,r=r[c.expando]?r:new c.Event(_e,typeof r=="object"&&r),r.isTrigger=h?2:3,r.namespace=$e.join("."),r.rnamespace=r.namespace?new RegExp("(^|\\.)"+$e.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,r.result=void 0,r.target||(r.target=l),a=a==null?[r]:c.makeArray(a,[r]),ne=c.event.special[_e]||{},!(!h&&ne.trigger&&ne.trigger.apply(l,a)===!1))){if(!h&&!ne.noBubble&&!_(l)){for(I=ne.delegateType||_e,Mo.test(I+_e)||(x=x.parentNode);x;x=x.parentNode)q.push(x),T=x;T===(l.ownerDocument||m)&&q.push(T.defaultView||T.parentWindow||e)}for(v=0;(x=q[v++])&&!r.isPropagationStopped();)ae=x,r.type=v>1?I:ne.bindType||_e,k=(he.get(x,"events")||Object.create(null))[r.type]&&he.get(x,"handle"),k&&k.apply(x,a),k=N&&x[N],k&&k.apply&&He(x)&&(r.result=k.apply(x,a),r.result===!1&&r.preventDefault());return r.type=_e,!h&&!r.isDefaultPrevented()&&(!ne._default||ne._default.apply(q.pop(),a)===!1)&&He(l)&&N&&w(l[_e])&&!_(l)&&(T=l[N],T&&(l[N]=null),c.event.triggered=_e,r.isPropagationStopped()&&ae.addEventListener(_e,yo),l[_e](),r.isPropagationStopped()&&ae.removeEventListener(_e,yo),c.event.triggered=void 0,T&&(l[N]=T)),r.result}},simulate:function(r,a,l){var h=c.extend(new c.Event,l,{type:r,isSimulated:!0});c.event.trigger(h,null,a)}}),c.fn.extend({trigger:function(r,a){return this.each(function(){c.event.trigger(r,a,this)})},triggerHandler:function(r,a){var l=this[0];if(l)return c.event.trigger(r,a,l,!0)}});var tu=/\[\]$/,So=/\r?\n/g,nu=/^(?:submit|button|image|reset|file)$/i,iu=/^(?:input|select|textarea|keygen)/i;function fa(r,a,l,h){var v;if(Array.isArray(a))c.each(a,function(x,T){l||tu.test(r)?h(r,T):fa(r+"["+(typeof T=="object"&&T!=null?x:"")+"]",T,l,h)});else if(!l&&B(a)==="object")for(v in a)fa(r+"["+v+"]",a[v],l,h);else h(r,a)}c.param=function(r,a){var l,h=[],v=function(x,T){var I=w(T)?T():T;h[h.length]=encodeURIComponent(x)+"="+encodeURIComponent(I??"")};if(r==null)return"";if(Array.isArray(r)||r.jquery&&!c.isPlainObject(r))c.each(r,function(){v(this.name,this.value)});else for(l in r)fa(l,r[l],a,v);return h.join("&")},c.fn.extend({serialize:function(){return c.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var r=c.prop(this,"elements");return r?c.makeArray(r):this}).filter(function(){var r=this.type;return this.name&&!c(this).is(":disabled")&&iu.test(this.nodeName)&&!nu.test(r)&&(this.checked||!Ce.test(r))}).map(function(r,a){var l=c(this).val();return l==null?null:Array.isArray(l)?c.map(l,function(h){return{name:a.name,value:h.replace(So,`\r
`)}}):{name:a.name,value:l.replace(So,`\r
`)}}).get()}});var ru=/%20/g,su=/#.*$/,au=/([?&])_=[^&]*/,ou=/^(.*?):[ \t]*([^\r\n]*)$/mg,cu=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,lu=/^(?:GET|HEAD)$/,uu=/^\/\//,Eo={},ha={},To="*/".concat("*"),da=m.createElement("a");da.href=Hr.href;function bo(r){return function(a,l){typeof a!="string"&&(l=a,a="*");var h,v=0,x=a.toLowerCase().match(je)||[];if(w(l))for(;h=x[v++];)h[0]==="+"?(h=h.slice(1)||"*",(r[h]=r[h]||[]).unshift(l)):(r[h]=r[h]||[]).push(l)}}function Ao(r,a,l,h){var v={},x=r===ha;function T(I){var N;return v[I]=!0,c.each(r[I]||[],function(k,ne){var ae=ne(a,l,h);if(typeof ae=="string"&&!x&&!v[ae])return a.dataTypes.unshift(ae),T(ae),!1;if(x)return!(N=ae)}),N}return T(a.dataTypes[0])||!v["*"]&&T("*")}function pa(r,a){var l,h,v=c.ajaxSettings.flatOptions||{};for(l in a)a[l]!==void 0&&((v[l]?r:h||(h={}))[l]=a[l]);return h&&c.extend(!0,r,h),r}function fu(r,a,l){for(var h,v,x,T,I=r.contents,N=r.dataTypes;N[0]==="*";)N.shift(),h===void 0&&(h=r.mimeType||a.getResponseHeader("Content-Type"));if(h){for(v in I)if(I[v]&&I[v].test(h)){N.unshift(v);break}}if(N[0]in l)x=N[0];else{for(v in l){if(!N[0]||r.converters[v+" "+N[0]]){x=v;break}T||(T=v)}x=x||T}if(x)return x!==N[0]&&N.unshift(x),l[x]}function hu(r,a,l,h){var v,x,T,I,N,k={},ne=r.dataTypes.slice();if(ne[1])for(T in r.converters)k[T.toLowerCase()]=r.converters[T];for(x=ne.shift();x;)if(r.responseFields[x]&&(l[r.responseFields[x]]=a),!N&&h&&r.dataFilter&&(a=r.dataFilter(a,r.dataType)),N=x,x=ne.shift(),x){if(x==="*")x=N;else if(N!=="*"&&N!==x){if(T=k[N+" "+x]||k["* "+x],!T){for(v in k)if(I=v.split(" "),I[1]===x&&(T=k[N+" "+I[0]]||k["* "+I[0]],T)){T===!0?T=k[v]:k[v]!==!0&&(x=I[0],ne.unshift(I[1]));break}}if(T!==!0)if(T&&r.throws)a=T(a);else try{a=T(a)}catch(ae){return{state:"parsererror",error:T?ae:"No conversion from "+N+" to "+x}}}}return{state:"success",data:a}}c.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Hr.href,type:"GET",isLocal:cu.test(Hr.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":To,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":c.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(r,a){return a?pa(pa(r,c.ajaxSettings),a):pa(c.ajaxSettings,r)},ajaxPrefilter:bo(Eo),ajaxTransport:bo(ha),ajax:function(r,a){typeof r=="object"&&(a=r,r=void 0),a=a||{};var l,h,v,x,T,I,N,k,ne,ae,q=c.ajaxSetup({},a),_e=q.context||q,$e=q.context&&(_e.nodeType||_e.jquery)?c(_e):c.event,Mt=c.Deferred(),ut=c.Callbacks("once memory"),Kt=q.statusCode||{},Gt={},Bn={},zn="canceled",vt={readyState:0,getResponseHeader:function(Tt){var Bt;if(N){if(!x)for(x={};Bt=ou.exec(v);)x[Bt[1].toLowerCase()+" "]=(x[Bt[1].toLowerCase()+" "]||[]).concat(Bt[2]);Bt=x[Tt.toLowerCase()+" "]}return Bt==null?null:Bt.join(", ")},getAllResponseHeaders:function(){return N?v:null},setRequestHeader:function(Tt,Bt){return N==null&&(Tt=Bn[Tt.toLowerCase()]=Bn[Tt.toLowerCase()]||Tt,Gt[Tt]=Bt),this},overrideMimeType:function(Tt){return N==null&&(q.mimeType=Tt),this},statusCode:function(Tt){var Bt;if(Tt)if(N)vt.always(Tt[vt.status]);else for(Bt in Tt)Kt[Bt]=[Kt[Bt],Tt[Bt]];return this},abort:function(Tt){var Bt=Tt||zn;return l&&l.abort(Bt),Ri(0,Bt),this}};if(Mt.promise(vt),q.url=((r||q.url||Hr.href)+"").replace(uu,Hr.protocol+"//"),q.type=a.method||a.type||q.method||q.type,q.dataTypes=(q.dataType||"*").toLowerCase().match(je)||[""],q.crossDomain==null){I=m.createElement("a");try{I.href=q.url,I.href=I.href,q.crossDomain=da.protocol+"//"+da.host!=I.protocol+"//"+I.host}catch{q.crossDomain=!0}}if(q.data&&q.processData&&typeof q.data!="string"&&(q.data=c.param(q.data,q.traditional)),Ao(Eo,q,a,vt),N)return vt;k=c.event&&q.global,k&&c.active++===0&&c.event.trigger("ajaxStart"),q.type=q.type.toUpperCase(),q.hasContent=!lu.test(q.type),h=q.url.replace(su,""),q.hasContent?q.data&&q.processData&&(q.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(q.data=q.data.replace(ru,"+")):(ae=q.url.slice(h.length),q.data&&(q.processData||typeof q.data=="string")&&(h+=(ua.test(h)?"&":"?")+q.data,delete q.data),q.cache===!1&&(h=h.replace(au,"$1"),ae=(ua.test(h)?"&":"?")+"_="+xo.guid+++ae),q.url=h+ae),q.ifModified&&(c.lastModified[h]&&vt.setRequestHeader("If-Modified-Since",c.lastModified[h]),c.etag[h]&&vt.setRequestHeader("If-None-Match",c.etag[h])),(q.data&&q.hasContent&&q.contentType!==!1||a.contentType)&&vt.setRequestHeader("Content-Type",q.contentType),vt.setRequestHeader("Accept",q.dataTypes[0]&&q.accepts[q.dataTypes[0]]?q.accepts[q.dataTypes[0]]+(q.dataTypes[0]!=="*"?", "+To+"; q=0.01":""):q.accepts["*"]);for(ne in q.headers)vt.setRequestHeader(ne,q.headers[ne]);if(q.beforeSend&&(q.beforeSend.call(_e,vt,q)===!1||N))return vt.abort();if(zn="abort",ut.add(q.complete),vt.done(q.success),vt.fail(q.error),l=Ao(ha,q,a,vt),!l)Ri(-1,"No Transport");else{if(vt.readyState=1,k&&$e.trigger("ajaxSend",[vt,q]),N)return vt;q.async&&q.timeout>0&&(T=e.setTimeout(function(){vt.abort("timeout")},q.timeout));try{N=!1,l.send(Gt,Ri)}catch(Tt){if(N)throw Tt;Ri(-1,Tt)}}function Ri(Tt,Bt,Vr,ga){var Hn,Gr,kn,oi,ci,Mn=Bt;N||(N=!0,T&&e.clearTimeout(T),l=void 0,v=ga||"",vt.readyState=Tt>0?4:0,Hn=Tt>=200&&Tt<300||Tt===304,Vr&&(oi=fu(q,vt,Vr)),!Hn&&c.inArray("script",q.dataTypes)>-1&&c.inArray("json",q.dataTypes)<0&&(q.converters["text script"]=function(){}),oi=hu(q,oi,vt,Hn),Hn?(q.ifModified&&(ci=vt.getResponseHeader("Last-Modified"),ci&&(c.lastModified[h]=ci),ci=vt.getResponseHeader("etag"),ci&&(c.etag[h]=ci)),Tt===204||q.type==="HEAD"?Mn="nocontent":Tt===304?Mn="notmodified":(Mn=oi.state,Gr=oi.data,kn=oi.error,Hn=!kn)):(kn=Mn,(Tt||!Mn)&&(Mn="error",Tt<0&&(Tt=0))),vt.status=Tt,vt.statusText=(Bt||Mn)+"",Hn?Mt.resolveWith(_e,[Gr,Mn,vt]):Mt.rejectWith(_e,[vt,Mn,kn]),vt.statusCode(Kt),Kt=void 0,k&&$e.trigger(Hn?"ajaxSuccess":"ajaxError",[vt,q,Hn?Gr:kn]),ut.fireWith(_e,[vt,Mn]),k&&($e.trigger("ajaxComplete",[vt,q]),--c.active||c.event.trigger("ajaxStop")))}return vt},getJSON:function(r,a,l){return c.get(r,a,l,"json")},getScript:function(r,a){return c.get(r,void 0,a,"script")}}),c.each(["get","post"],function(r,a){c[a]=function(l,h,v,x){return w(h)&&(x=x||v,v=h,h=void 0),c.ajax(c.extend({url:l,type:a,dataType:x,data:h,success:v},c.isPlainObject(l)&&l))}}),c.ajaxPrefilter(function(r){var a;for(a in r.headers)a.toLowerCase()==="content-type"&&(r.contentType=r.headers[a]||"")}),c._evalUrl=function(r,a,l){return c.ajax({url:r,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(h){c.globalEval(h,a,l)}})},c.fn.extend({wrapAll:function(r){var a;return this[0]&&(w(r)&&(r=r.call(this[0])),a=c(r,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&a.insertBefore(this[0]),a.map(function(){for(var l=this;l.firstElementChild;)l=l.firstElementChild;return l}).append(this)),this},wrapInner:function(r){return w(r)?this.each(function(a){c(this).wrapInner(r.call(this,a))}):this.each(function(){var a=c(this),l=a.contents();l.length?l.wrapAll(r):a.append(r)})},wrap:function(r){var a=w(r);return this.each(function(l){c(this).wrapAll(a?r.call(this,l):r)})},unwrap:function(r){return this.parent(r).not("body").each(function(){c(this).replaceWith(this.childNodes)}),this}}),c.expr.pseudos.hidden=function(r){return!c.expr.pseudos.visible(r)},c.expr.pseudos.visible=function(r){return!!(r.offsetWidth||r.offsetHeight||r.getClientRects().length)},c.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch{}};var du={0:200,1223:204},kr=c.ajaxSettings.xhr();A.cors=!!kr&&"withCredentials"in kr,A.ajax=kr=!!kr,c.ajaxTransport(function(r){var a,l;if(A.cors||kr&&!r.crossDomain)return{send:function(h,v){var x,T=r.xhr();if(T.open(r.type,r.url,r.async,r.username,r.password),r.xhrFields)for(x in r.xhrFields)T[x]=r.xhrFields[x];r.mimeType&&T.overrideMimeType&&T.overrideMimeType(r.mimeType),!r.crossDomain&&!h["X-Requested-With"]&&(h["X-Requested-With"]="XMLHttpRequest");for(x in h)T.setRequestHeader(x,h[x]);a=function(I){return function(){a&&(a=l=T.onload=T.onerror=T.onabort=T.ontimeout=T.onreadystatechange=null,I==="abort"?T.abort():I==="error"?typeof T.status!="number"?v(0,"error"):v(T.status,T.statusText):v(du[T.status]||T.status,T.statusText,(T.responseType||"text")!=="text"||typeof T.responseText!="string"?{binary:T.response}:{text:T.responseText},T.getAllResponseHeaders()))}},T.onload=a(),l=T.onerror=T.ontimeout=a("error"),T.onabort!==void 0?T.onabort=l:T.onreadystatechange=function(){T.readyState===4&&e.setTimeout(function(){a&&l()})},a=a("abort");try{T.send(r.hasContent&&r.data||null)}catch(I){if(a)throw I}},abort:function(){a&&a()}}}),c.ajaxPrefilter(function(r){r.crossDomain&&(r.contents.script=!1)}),c.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(r){return c.globalEval(r),r}}}),c.ajaxPrefilter("script",function(r){r.cache===void 0&&(r.cache=!1),r.crossDomain&&(r.type="GET")}),c.ajaxTransport("script",function(r){if(r.crossDomain||r.scriptAttrs){var a,l;return{send:function(h,v){a=c("<script>").attr(r.scriptAttrs||{}).prop({charset:r.scriptCharset,src:r.url}).on("load error",l=function(x){a.remove(),l=null,x&&v(x.type==="error"?404:200,x.type)}),m.head.appendChild(a[0])},abort:function(){l&&l()}}}});var wo=[],ma=/(=)\?(?=&|$)|\?\?/;c.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var r=wo.pop()||c.expando+"_"+xo.guid++;return this[r]=!0,r}}),c.ajaxPrefilter("json jsonp",function(r,a,l){var h,v,x,T=r.jsonp!==!1&&(ma.test(r.url)?"url":typeof r.data=="string"&&(r.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&ma.test(r.data)&&"data");if(T||r.dataTypes[0]==="jsonp")return h=r.jsonpCallback=w(r.jsonpCallback)?r.jsonpCallback():r.jsonpCallback,T?r[T]=r[T].replace(ma,"$1"+h):r.jsonp!==!1&&(r.url+=(ua.test(r.url)?"&":"?")+r.jsonp+"="+h),r.converters["script json"]=function(){return x||c.error(h+" was not called"),x[0]},r.dataTypes[0]="json",v=e[h],e[h]=function(){x=arguments},l.always(function(){v===void 0?c(e).removeProp(h):e[h]=v,r[h]&&(r.jsonpCallback=a.jsonpCallback,wo.push(h)),x&&w(v)&&v(x[0]),x=v=void 0}),"script"}),A.createHTMLDocument=function(){var r=m.implementation.createHTMLDocument("").body;return r.innerHTML="<form></form><form></form>",r.childNodes.length===2}(),c.parseHTML=function(r,a,l){if(typeof r!="string")return[];typeof a=="boolean"&&(l=a,a=!1);var h,v,x;return a||(A.createHTMLDocument?(a=m.implementation.createHTMLDocument(""),h=a.createElement("base"),h.href=m.location.href,a.head.appendChild(h)):a=m),v=ot.exec(r),x=!l&&[],v?[a.createElement(v[1])]:(v=It([r],a,x),x&&x.length&&c(x).remove(),c.merge([],v.childNodes))},c.fn.load=function(r,a,l){var h,v,x,T=this,I=r.indexOf(" ");return I>-1&&(h=wi(r.slice(I)),r=r.slice(0,I)),w(a)?(l=a,a=void 0):a&&typeof a=="object"&&(v="POST"),T.length>0&&c.ajax({url:r,type:v||"GET",dataType:"html",data:a}).done(function(N){x=arguments,T.html(h?c("<div>").append(c.parseHTML(N)).find(h):N)}).always(l&&function(N,k){T.each(function(){l.apply(this,x||[N.responseText,k,N])})}),this},c.expr.pseudos.animated=function(r){return c.grep(c.timers,function(a){return r===a.elem}).length},c.offset={setOffset:function(r,a,l){var h,v,x,T,I,N,k,ne=c.css(r,"position"),ae=c(r),q={};ne==="static"&&(r.style.position="relative"),I=ae.offset(),x=c.css(r,"top"),N=c.css(r,"left"),k=(ne==="absolute"||ne==="fixed")&&(x+N).indexOf("auto")>-1,k?(h=ae.position(),T=h.top,v=h.left):(T=parseFloat(x)||0,v=parseFloat(N)||0),w(a)&&(a=a.call(r,l,c.extend({},I))),a.top!=null&&(q.top=a.top-I.top+T),a.left!=null&&(q.left=a.left-I.left+v),"using"in a?a.using.call(r,q):ae.css(q)}},c.fn.extend({offset:function(r){if(arguments.length)return r===void 0?this:this.each(function(v){c.offset.setOffset(this,r,v)});var a,l,h=this[0];if(h)return h.getClientRects().length?(a=h.getBoundingClientRect(),l=h.ownerDocument.defaultView,{top:a.top+l.pageYOffset,left:a.left+l.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var r,a,l,h=this[0],v={top:0,left:0};if(c.css(h,"position")==="fixed")a=h.getBoundingClientRect();else{for(a=this.offset(),l=h.ownerDocument,r=h.offsetParent||l.documentElement;r&&(r===l.body||r===l.documentElement)&&c.css(r,"position")==="static";)r=r.parentNode;r&&r!==h&&r.nodeType===1&&(v=c(r).offset(),v.top+=c.css(r,"borderTopWidth",!0),v.left+=c.css(r,"borderLeftWidth",!0))}return{top:a.top-v.top-c.css(h,"marginTop",!0),left:a.left-v.left-c.css(h,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var r=this.offsetParent;r&&c.css(r,"position")==="static";)r=r.offsetParent;return r||dt})}}),c.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(r,a){var l=a==="pageYOffset";c.fn[r]=function(h){return b(this,function(v,x,T){var I;if(_(v)?I=v:v.nodeType===9&&(I=v.defaultView),T===void 0)return I?I[a]:v[x];I?I.scrollTo(l?I.pageXOffset:T,l?T:I.pageYOffset):v[x]=T},r,h,arguments.length)}}),c.each(["top","left"],function(r,a){c.cssHooks[a]=nt(A.pixelPosition,function(l,h){if(h)return h=Ge(l,a),Q.test(h)?c(l).position()[a]+"px":h})}),c.each({Height:"height",Width:"width"},function(r,a){c.each({padding:"inner"+r,content:a,"":"outer"+r},function(l,h){c.fn[h]=function(v,x){var T=arguments.length&&(l||typeof v!="boolean"),I=l||(v===!0||x===!0?"margin":"border");return b(this,function(N,k,ne){var ae;return _(N)?h.indexOf("outer")===0?N["inner"+r]:N.document.documentElement["client"+r]:N.nodeType===9?(ae=N.documentElement,Math.max(N.body["scroll"+r],ae["scroll"+r],N.body["offset"+r],ae["offset"+r],ae["client"+r])):ne===void 0?c.css(N,k,I):c.style(N,k,ne,I)},a,T?v:void 0,T)}})}),c.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(r,a){c.fn[a]=function(l){return this.on(a,l)}}),c.fn.extend({bind:function(r,a,l){return this.on(r,null,a,l)},unbind:function(r,a){return this.off(r,null,a)},delegate:function(r,a,l,h){return this.on(a,r,l,h)},undelegate:function(r,a,l){return arguments.length===1?this.off(r,"**"):this.off(a,r||"**",l)},hover:function(r,a){return this.on("mouseenter",r).on("mouseleave",a||r)}}),c.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(r,a){c.fn[a]=function(l,h){return arguments.length>0?this.on(a,null,l,h):this.trigger(a)}});var pu=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;c.proxy=function(r,a){var l,h,v;if(typeof a=="string"&&(l=r[a],a=r,r=l),!!w(r))return h=o.call(arguments,2),v=function(){return r.apply(a||this,h.concat(o.call(arguments)))},v.guid=r.guid=r.guid||c.guid++,v},c.holdReady=function(r){r?c.readyWait++:c.ready(!0)},c.isArray=Array.isArray,c.parseJSON=JSON.parse,c.nodeName=P,c.isFunction=w,c.isWindow=_,c.camelCase=de,c.type=B,c.now=Date.now,c.isNumeric=function(r){var a=c.type(r);return(a==="number"||a==="string")&&!isNaN(r-parseFloat(r))},c.trim=function(r){return r==null?"":(r+"").replace(pu,"$1")};var mu=e.jQuery,gu=e.$;return c.noConflict=function(r){return e.$===c&&(e.$=gu),r&&e.jQuery===c&&(e.jQuery=mu),c},typeof t>"u"&&(e.jQuery=e.$=c),c})})(Fl);var f_=Fl.exports;const Un=u_(f_);Object.assign(window,{$:Un});new a_;new st;const _o=new r_;_o.background=new At("rgb(255, 255, 255)");const Yi=new En(75,window.innerWidth/window.innerHeight,.1,1e3),na=new i_,Dr=new c_(Yi,na.domElement);na.setSize(800,400);Un("#app").append(na.domElement);const Bl=new Yn(.5,.5),zl=new bi({color:8900096});zl.side=fn;const kt=new hn(Bl,zl),h_=new Fr(Bl),d_=new Or(h_,new Ki({color:"black"}));kt.add(d_);const Hl=new Yn(1,.5),kl=new bi({color:8900096});kl.side=fn;const ia=new hn(Hl,kl),p_=new Fr(Hl),m_=new Or(p_,new Ki({color:"black"}));ia.add(m_);const Vl=new Yn(1,.5),Gl=new bi({color:8900096});Gl.side=fn;const ra=new hn(Vl,Gl),g_=new Fr(Vl),__=new Or(g_,new Ki({color:"black"}));ra.add(__);const Wl=new Yn(.5,.5),Xl=new bi({color:8900096});Xl.side=fn;const sa=new hn(Wl,Xl),v_=new Fr(Wl),x_=new Or(v_,new Ki({color:"black"}));sa.add(x_);const ql=new Yn(.5,1),jl=new bi({color:8900096});jl.side=fn;const aa=new hn(ql,jl),M_=new Fr(ql),y_=new Or(M_,new Ki({color:"black"}));aa.add(y_);const Yl=new Yn(.5,1),$l=new bi({color:8900096});$l.side=fn;const ss=new hn(Yl,$l),S_=new Fr(Yl),E_=new Or(S_,new Ki({color:"black"}));ss.add(E_);const Wi=new Wt,Xi=new Wt,Ar=new Wt,wr=new Wt,Ur=new Wt;Wi.position.x-=0;ia.position.x-=.5;ra.position.x+=.5;sa.position.y-=.25;Ur.position.y-=0;aa.position.y+=.5;Xi.position.y+=0;ss.position.y-=.5;Wi.add(ia);Wi.position.x-=.25;kt.add(Wi);Xi.add(aa);Xi.position.y+=.25;kt.add(Xi);Ar.add(ra);Ar.position.x+=.25;kt.add(Ar);wr.add(ss);wr.position.y-=.25;kt.add(wr);Ur.add(sa);Ur.position.y-=.5;ss.add(Ur);_o.add(kt);Yi.position.z=3;Dr.update();let nn=0,Zr=1,Bi=0,Jr=!1,zi=1,T_=new G;kt.getWorldDirection(T_);kt.rotation.y=Math.PI/180*-45;kt.rotation.x=Math.PI/180*-135;kt.rotation.z=Math.PI/180*135;kt.rotation.y=Math.PI/180*45;kt.rotation.x=Math.PI/180*135;kt.rotation.y=Math.PI/180*-30;kt.updateMatrix();kt.updateMatrixWorld();function Kl(){requestAnimationFrame(Kl);let i=Math.PI/180*90,e=0;nn>i?(Zr=-1,nn=i,Jr=!1):nn<e&&(Zr=1,nn=e,Jr=!1),Jr?(nn+=.02*Zr,console.log(nn),Wi.rotation.y=-nn,Xi.rotation.x=-nn,Ar.rotation.y=nn,wr.rotation.x=nn,Ur.rotation.x=nn):(Wi.rotation.y=-nn,Xi.rotation.x=-nn,Ar.rotation.y=nn,wr.rotation.x=nn,Ur.rotation.x=nn),kt.scale.x=1+Bi,kt.scale.y=1+Bi,Wi.scale.x=1-Bi,Xi.scale.y=1-Bi,Ar.scale.x=1-Bi,wr.scale.y=1-Bi,kt.material.opacity=zi,ia.material.opacity=zi,ra.material.opacity=zi,sa.material.opacity=zi,aa.material.opacity=zi,ss.material.opacity=zi,Dr.update(),na.render(_o,Yi)}Kl();Un(".icon360").hover(()=>{Un(".popup").css("display","flex")},()=>{Un(".popup").hide()});const b_=()=>{Zr==-1&&(Jr=!0),Un(".foldbutton").css("background-color","rgba(255, 199, 115, 1)"),Un(".spreadbutton").css("background-color","rgba(252, 151, 0, 1)")};Object.assign(window,{StartSpread:b_});const A_=()=>{Zr==1&&(Jr=!0),Un(".foldbutton").css("background-color","rgba(252, 151, 0, 1)"),Un(".spreadbutton").css("background-color","rgba(255, 199, 115, 1)")};Object.assign(window,{StartFold:A_});const w_=()=>{kt.lookAt(new G(0,0,-1)),Yi.position.copy(new G(0,0,5)),Yi.rotation.copy(new Nn(0,0,0,"XYZ")),Dr.target.set(0,0,0),Dr.update()};Object.assign(window,{ObjectTop:w_});const C_=()=>{kt.lookAt(new G(0,-1,0)),Yi.position.copy(new G(0,0,5)),Yi.rotation.copy(new Nn(0,0,0,"XYZ")),Dr.target.set(0,0,0),Dr.update()};Object.assign(window,{ObjectSide:C_});Un("#slideX").on("input",function(){let i=Un(this).val();Bi=parseInt(i)/200});const R_=()=>{zi=.5};Object.assign(window,{SetBoxOpacity:R_});
