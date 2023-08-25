"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[825],{5061:function(e,t){t.Z={root:{boxShadow:"0px 0px 5px 1px lightgrey",padding:0,marginBottom:"28px !important"},imgOveflow:{overflow:"hidden"},img:{cursor:"pointer",transition:"transform .4s ease","&:hover":{transform:"scale(110%)"}},title:{fontSize:"21px","@media (max-width: 767.98px)":{fontSize:"18px"}},subtitle:{fontSize:"17px","@media (max-width: 767.98px)":{fontSize:"14px"}},checkout:{display:"flex",justifyContent:"space-between",alignItems:"flex-end"},checkoutPrice:{fontSize:"21px",margin:"0",fontWeight:"700","@media (max-width: 767.98px)":{fontSize:"15px"}},CardBody:{padding:"15px 5px 10px 10px","@media (min-width: 767.98px)":{height:"135px"}},pickBtn:{padding:"5px 10px",fontSize:"18px","@media (max-width: 767.98px)":{fontSize:"12px"}}}},3825:function(e,t,a){a.r(t),a.d(t,{default:function(){return x}});var n=a(7378),r=a(1623),i=a(3738),o=a(1578),c=a(7231),m=a(6785),l=a(7137),s=a(8083),d=a(5719),p=a(5061),u=(0,d.ZP)(p.Z)((function(e){var t=e.classes,a=e.pizza,i=(0,r.T)(),d=function(){i((0,s.no)(a)),"Calzone (Pierog)"===a.name&&i((0,s.fB)("28cm"))};return n.createElement(c.Z,{xs:6,sm:4,xl:3},n.createElement(m.Z,{className:"mb-3 ".concat(t.root)},n.createElement("div",{className:t.imgOveflow},n.createElement(m.Z.Img,{variant:"top",src:a.image,alt:a.name,onClick:d,className:t.img})),n.createElement(m.Z.Body,{className:t.CardBody},n.createElement(m.Z.Title,{className:t.title},a.name),n.createElement(m.Z.Subtitle,{className:"mb-2 text-muted ".concat(t.subtitle)},"Fantazja"!==a.name?a.ingredients.map((function(e,t){return n.createElement("span",{key:e},a.ingredients[t+1]?e+", ":e)})):"sos, ser, +5 własnych składników do wyboru")),n.createElement(m.Z.Footer,null,n.createElement("div",{className:t.checkout},n.createElement("span",{className:t.checkoutPrice},"Calzone (Pierog)"===a.name?o.z.format(a.price):o.z.format(a.price["20cm"]),"zł"),n.createElement(l.Z,{onClick:d,variant:"outline-secondary",size:"sm",className:"ml-2 ".concat(t.pickBtn)},"Wybierz")))))})),f=function(){var e=(0,r.C)((function(e){return e.pizzas.pizzas}));return n.createElement("section",{id:"pizzas"},n.createElement("h2",{className:"title pt-5 mb-4"},"Pizzy:"),n.createElement(i.Z,null,e.map((function(e){return n.createElement(u,{pizza:e,key:e._id})}))))},x=(0,n.memo)(f)},6785:function(e,t,a){a.d(t,{Z:function(){return w}});var n=a(67),r=a(8451),i=a(42),o=a.n(i),c=a(7378),m=a(8398),l=a(6014),s=a(5284),d=a(4281),p=["bsPrefix","className","variant","as"],u=c.forwardRef((function(e,t){var a=e.bsPrefix,i=e.className,l=e.variant,s=e.as,d=void 0===s?"img":s,u=(0,r.Z)(e,p),f=(0,m.vE)(a,"card-img");return c.createElement(d,(0,n.Z)({ref:t,className:o()(l?f+"-"+l:f,i)},u))}));u.displayName="CardImg",u.defaultProps={variant:null};var f=u,x=["bsPrefix","className","bg","text","border","body","children","as"],g=(0,s.Z)("h5"),v=(0,s.Z)("h6"),Z=(0,l.Z)("card-body"),b=(0,l.Z)("card-title",{Component:g}),z=(0,l.Z)("card-subtitle",{Component:v}),h=(0,l.Z)("card-link",{Component:"a"}),y=(0,l.Z)("card-text",{Component:"p"}),E=(0,l.Z)("card-header"),C=(0,l.Z)("card-footer"),N=(0,l.Z)("card-img-overlay"),k=c.forwardRef((function(e,t){var a=e.bsPrefix,i=e.className,l=e.bg,s=e.text,p=e.border,u=e.body,f=e.children,g=e.as,v=void 0===g?"div":g,b=(0,r.Z)(e,x),z=(0,m.vE)(a,"card"),h=(0,c.useMemo)((function(){return{cardHeaderBsPrefix:z+"-header"}}),[z]);return c.createElement(d.Z.Provider,{value:h},c.createElement(v,(0,n.Z)({ref:t},b,{className:o()(i,z,l&&"bg-"+l,s&&"text-"+s,p&&"border-"+p)}),u?c.createElement(Z,null,f):f))}));k.displayName="Card",k.defaultProps={body:!1},k.Img=f,k.Title=b,k.Subtitle=z,k.Body=Z,k.Link=h,k.Text=y,k.Header=E,k.Footer=C,k.ImgOverlay=N;var w=k},4281:function(e,t,a){var n=a(7378).createContext(null);n.displayName="CardContext",t.Z=n}}]);