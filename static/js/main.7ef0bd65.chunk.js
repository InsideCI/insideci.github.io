(this["webpackJsonpcinside-ts-mobile"]=this["webpackJsonpcinside-ts-mobile"]||[]).push([[0],{125:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(41),r=a.n(l),o=(a(54),a(10)),i=(a(55),a(6)),s=a(12),u=(a(56),a(8)),m=a.n(u),f=function(e){var t=e.text,a=e.icon,n=e.color,l=e.round,r=e.light,o=e.faded,i=e.full,u=Object(s.a)(e,["text","icon","color","round","light","faded","full"]),f=m()("button",n||"transparent",l&&"round",r&&"light",o&&"faded",i&&"full");return c.a.createElement(c.a.Fragment,null,a&&c.a.createElement("span",null,a),c.a.createElement("button",Object.assign({className:f},u),t))},d=a(42),p=(a(57),a(9)),b=function(e){var t=e.name,a=e.label,l=e.color,r=e.small,o=e.full,i=e.centered,u=Object(s.a)(e,["name","label","color","small","full","centered"]),f=Object(p.c)(t),d=f.fieldName,b=f.defaultValue,E=void 0===b?"":b,g=f.registerField,v=f.error,h=Object(n.useRef)(null),O=m()("input",o&&"full"),j=m()(l||"transparent",r&&"small",o&&"full",i&&"centered");return Object(n.useEffect)((function(){g({name:d,path:"value",ref:h.current})}),[d,g]),c.a.createElement("div",{className:O},a&&c.a.createElement("label",{htmlFor:d},a),c.a.createElement("input",Object.assign({autoComplete:"off",className:j,id:d,ref:h,defaultValue:E},u)),v&&c.a.createElement("footer",null,v))},E=a(43),g=a.n(E);var v=a(44),h=a.n(v),O=a(45),j=a.n(O),N=a(46),y=a(47),k=a.n(y),x=a(48),S=a.n(x),w=function(e){var t=g.a.create({baseURL:"https://klean.ddns.net:8081"}),a="/"===e[0]?e.substr(1):e;return{list:function(e){return t.get("/".concat(a),{params:e})},get:function(e){return t.get("/".concat(a,"/").concat(e))},delete:function(e){return t.delete("/".concat(a,"/").concat(e))},post:function(e){return t.post("/".concat(a),e)},put:function(e,n){return t.put("/".concat(a,"/").concat(e),n)}}}("students"),C=function(){var e=Object(n.useState)(0),t=Object(o.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(!1),s=Object(o.a)(r,2),u=s[0],m=s[1],p=Object(n.useState)(!1),E=Object(o.a)(p,2),g=(E[0],E[1]),v=Object(n.useState)(),O=Object(o.a)(v,2),y=O[0],x=O[1],C=function(e){var t=e.id;t&&w.get(t).then((function(e){x(e.data),l(2)})).catch((function(e){m(!0),console.log(e)}))},L=[{id:0,component:function(e,t){return c.a.createElement(i.a.div,{key:e,style:t,className:"welcome"},c.a.createElement("header",null,c.a.createElement("span",null,"Bem-vindo ao"),c.a.createElement("h1",null,"CInside")),c.a.createElement("footer",null,c.a.createElement(f,{full:!0,text:"Entrar",onClick:function(){return l(1)}})))}},{id:1,component:function(e,t){return c.a.createElement(i.a.div,{key:e,style:t,className:"credentials"},c.a.createElement(d.a,{onSubmit:C,name:"credentials"},c.a.createElement(b,{name:"id",placeholder:"digite sua matricula",centered:!0}),c.a.createElement(f,{text:"entrar",light:!0})),u&&c.a.createElement("section",null,"deu bode morales"),c.a.createElement("footer",null,c.a.createElement(f,{onClick:function(){return g(!0)},full:!0,text:"entrar como visitante"})))}},{id:2,component:function(e,t){return c.a.createElement(i.a.div,{key:e,style:t,className:"greetings"},y&&c.a.createElement("span",null,"Ol\xe1 ",Object(N.capitalize)(y.nome.split(" ")[0].toLowerCase())))}}],R=Object(i.c)(L[a],(function(e){return e.id}),{config:i.b.slow,from:{position:"absolute",opacity:0,transform:"translate3d(100%,0,0)"},enter:{opacity:1,transform:"translate3d(0%,0,0)"},leave:{opacity:0,transform:"translate3d(-50%,0,0)"}});return c.a.createElement("div",{className:"landing"},c.a.createElement("section",{className:"background"},c.a.createElement("img",{className:"tl",src:k.a,alt:"topLeft"}),c.a.createElement("img",{className:"tr",src:S.a,alt:"topRight"}),c.a.createElement("img",{className:"bl",src:h.a,alt:"bottomLeft"}),c.a.createElement("img",{className:"br",src:j.a,alt:"bottomRight"})),R.map((function(e){var t=e.item,a=e.props,n=e.key;return t.component(n,a)})))};var L=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(C,{id:"start-page"}))};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(L,null)),document.getElementById("root"))},44:function(e,t,a){e.exports=a.p+"static/media/bottom-left.f8b68715.svg"},45:function(e,t,a){e.exports=a.p+"static/media/bottom-right.fe775774.svg"},47:function(e,t,a){e.exports=a.p+"static/media/top-left.26c07d1a.svg"},48:function(e,t,a){e.exports=a.p+"static/media/top-right.74681e9a.svg"},49:function(e,t,a){e.exports=a(125)},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){}},[[49,1,2]]]);
//# sourceMappingURL=main.7ef0bd65.chunk.js.map