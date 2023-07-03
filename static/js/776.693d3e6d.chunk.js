"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[776],{9198:function(n,e,r){var t=r(8861),o=r(184);e.Z=function(n){var e=n.children;return(0,o.jsxs)(t.ZC,{children:[" ",e]})}},8861:function(n,e,r){r.d(e,{U3:function(){return s},ZC:function(){return u},oK:function(){return c}});var t,o,a,i=r(168),l=r(6088),u=l.Z.div(t||(t=(0,i.Z)(["\n  @media screen and (min-width: 0px) {\n    max-width: 444px;\n  }\n\n  margin: 0 auto;\n  padding-right: 16px;\n  padding-left: 16px;\n  padding-top: 20px;\n  padding-bottom: 20px;\n"]))),s=l.Z.h1(o||(o=(0,i.Z)(["\n  margin-bottom: 20px;\n  text-align: center;\n"]))),c=l.Z.h2(a||(a=(0,i.Z)(["\n  margin-bottom: 20px;\n  text-align: center;\n"])))},6776:function(n,e,r){r.r(e),r.d(e,{ContactsPage:function(){return T},default:function(){return W}});var t,o=r(9198),a=r(1413),i=r(5705),l=r(5218),u=r(6727),s=(r(6933),r(9434)),c=r(5162),d=function(n){return n.contacts.items},m=function(n){return n.contacts.isLoading},h=function(n){return n.contacts.error},x=function(n){return n.filter.value},f=function(n){var e=d(n),r=x(n);return null===e||void 0===e?void 0:e.filter((function(n){var e;return null===n||void 0===n||null===(e=n.name)||void 0===e?void 0:e.toLowerCase().includes(r.toLowerCase())}))},p=r(4909),v=r(6151),g=r(184),b=u.Ry({name:u.Z_().min(2,"Too Short!").max(50,"Too Long!").required("Name is required!"),phone:u.Z_().phone("UA").required("Phone number is required!")}),j=function(){var n=(0,s.I0)(),e=(0,s.v9)(d);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(l.x7,{}),(0,g.jsx)(i.J9,{initialValues:{name:"",email:"",phone:""},validationSchema:b,onSubmit:function(r,t){var o=Object.assign({},r),i=e.find((function(n){return n.name.toLowerCase()===o.name.toLowerCase()}));i?(l.ZP.error("You already have ".concat(i.name," in your contacts")),t.resetForm()):(n((0,c.uK)((0,a.Z)({},o))),t.resetForm())},children:function(n){var e=n.handleSubmit;return(0,g.jsxs)("form",{onSubmit:e,children:[(0,g.jsx)(i.gN,{name:"name",children:function(n){var e=n.field,r=n.form,t=r.touched,o=r.errors;return(0,g.jsx)(p.Z,(0,a.Z)((0,a.Z)({},e),{},{label:"Name",variant:"outlined",error:t.name&&Boolean(o.name),helperText:t.name&&o.name,fullWidth:!0,margin:"normal",autoComplete:"off",size:"small"}))}}),(0,g.jsx)(i.gN,{name:"email",children:function(n){var e=n.field,r=n.form,t=r.touched,o=r.errors;return(0,g.jsx)(p.Z,(0,a.Z)((0,a.Z)({},e),{},{label:"Email",variant:"outlined",error:t.email&&Boolean(o.email),helperText:t.email&&o.email,fullWidth:!0,margin:"normal",autoComplete:"off",size:"small",sx:{mb:2}}))}}),(0,g.jsx)(i.gN,{name:"phone",children:function(n){var e=n.field,r=n.form,t=r.touched,o=r.errors;return(0,g.jsx)(p.Z,(0,a.Z)((0,a.Z)({},e),{},{label:"Phone",variant:"outlined",error:t.phone&&Boolean(o.phone),helperText:t.phone&&o.phone,fullWidth:!0,margin:"normal",autoComplete:"off",size:"small",sx:{mb:2}}))}}),(0,g.jsx)(v.Z,{type:"submit",variant:"contained",color:"primary",sx:{mb:4},fullWidth:!0,children:"Add contact"})]})}})]})},Z=r(9135),y=r(168),C=r(6088).Z.li(t||(t=(0,y.Z)(["\n  display: flex;\n\n  align-items: center;\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,\n    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;\n  border-radius: 5px;\n  padding: 10px;\n\n  &:not(:last-of-type) {\n    margin-bottom: 10px;\n  }\n\n  &:hover {\n    background-color: gainsboro;\n  }\n"]))),k=function(){var n=(0,s.v9)(f),e=(0,s.I0)();return(0,g.jsx)("ul",{children:null===n||void 0===n?void 0:n.map((function(n){var r=n.name,t=n.email,o=n.phone,a=n._id;return(0,g.jsxs)(C,{children:[(0,g.jsx)("span",{style:{flexGrow:"2"},children:r}),(0,g.jsx)("span",{style:{marginRight:"10px"},children:o}),(0,g.jsx)("span",{style:{marginRight:"10px"},children:t}),(0,g.jsx)(Z.AMf,{"aria-label":"delete-icon",style:{cursor:"pointer",color:"crimson"},onClick:function(){var n;n=a,e((0,c.GK)(n))}})]},a)}))})},w=r(7574),L=function(){var n=(0,s.v9)(x),e=(0,s.I0)();return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(p.Z,{label:"Find contacts by name",variant:"outlined",onChange:function(n){return e((0,w.a)(n.target.value))},id:"Find contacts by name",value:n,size:"small",sx:{mb:4},InputLabelProps:{shrink:!0}})})},F=r(1523),_=function(){return(0,g.jsx)(F.iT,{height:20,width:20,color:"black",visible:!0,ariaLabel:"oval-loading",secondaryColor:"black",strokeWidth:4,strokeWidthSecondary:4})},P=r(8861),S=r(2791),T=function(){var n=(0,s.I0)(),e=(0,s.v9)(m),r=(0,s.v9)(h);return(0,S.useEffect)((function(){n((0,c.yF)())}),[n]),(0,g.jsxs)(o.Z,{children:[(0,g.jsx)(P.U3,{children:"Phonebook"}),(0,g.jsx)(j,{}),(0,g.jsx)(P.oK,{children:"Contacts"}),(0,g.jsx)(L,{}),e&&!r&&(0,g.jsx)(_,{}),(0,g.jsx)(k,{})]})},W=T}}]);
//# sourceMappingURL=776.693d3e6d.chunk.js.map