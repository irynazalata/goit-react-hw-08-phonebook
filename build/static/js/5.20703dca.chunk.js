(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[5],{125:function(e,t,a){"use strict";a.r(t);var s=a(13),i=a(4),n=a(29),c=a(30),l=a(32),r=a(31),o=a(1),b=a(0),u=a(132),m=a(11),j=a(21),h=a(61),_=a(134),d=a.n(_),p=function(e){Object(l.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(n.a)(this,a);for(var c=arguments.length,l=new Array(c),r=0;r<c;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={name:"",email:"",password:""},e.handleChange=function(t){var a=t.target,s=a.name,n=a.value;e.setState(Object(i.a)({},s,n))},e.handleSubmit=function(t){t.preventDefault(),e.props.onRegister(Object(s.a)({},e.state)),e.setState({name:"",email:"",password:""})},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password,s=e.name;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(u.a,{}),Object(o.jsxs)("div",{className:d.a.container,children:[Object(o.jsx)(h.a,{error:Boolean(this.props.error),message:"Your registration failed. Try again"}),Object(o.jsx)("h1",{className:d.a.title,children:"Register page"}),Object(o.jsxs)("form",{onSubmit:this.handleSubmit,className:d.a.form,children:[Object(o.jsxs)("label",{className:d.a.label,children:["Name",Object(o.jsx)("input",{type:"text",name:"name",value:s,onChange:this.handleChange,className:d.a.input})]}),Object(o.jsxs)("label",{className:d.a.label,children:["Email",Object(o.jsx)("input",{type:"email",name:"email",value:t,onChange:this.handleChange,className:d.a.input})]}),Object(o.jsxs)("label",{className:d.a.label,children:["Password",Object(o.jsx)("input",{type:"password",name:"password",value:a,placeholder:"minimum 7 symbols",onChange:this.handleChange,className:d.a.input})]}),Object(o.jsx)("button",{className:d.a.button,children:"Register"})]})]})]})}}]),a}(b.Component);t.default=Object(m.b)((function(e){return{error:j.b.getErrorMessage(e)}}),{onRegister:j.a.register})(p)},129:function(e,t,a){e.exports={container:"NavBar_container__3aeD5",list:"NavBar_list__nN7VE",listItem:"NavBar_listItem__f1Wbk",listLink:"NavBar_listLink__2FB4v",listLinkActive:"NavBar_listLinkActive__CFaf0"}},130:function(e,t,a){e.exports={container:"UserMenu_container__2ZZgh",text:"UserMenu_text__2gHsK",span:"UserMenu_span__novwB",btn:"UserMenu_btn__22dTb"}},131:function(e,t,a){e.exports={container:"AuthNav_container__3Gtz7",list:"AuthNav_list__2r1us",listItem:"AuthNav_listItem__32fkd",listLink:"AuthNav_listLink__3-tbm",listLinkActive:"AuthNav_listLinkActive__1SHLA"}},132:function(e,t,a){"use strict";var s=a(1),i=(a(0),a(25)),n=a(11),c=a(21),l=a(129),r=a.n(l),o=a(130),b=a.n(o),u={onLogout:c.a.logout},m=Object(n.b)((function(e){return{isAuthenticated:c.b.isAuthenticated(e),email:c.b.getUserEmail(e)}}),u)((function(e){var t=e.email,a=(e.isAuthenticated,e.onLogout);return Object(s.jsxs)("div",{className:b.a.container,children:[Object(s.jsxs)("p",{className:b.a.text,children:["You are logged in as ",Object(s.jsx)("br",{}),Object(s.jsx)("span",{className:b.a.span,children:t})]}),Object(s.jsx)("button",{type:"button",onClick:a,className:b.a.btn,children:"Logout"})]})})),j=a(50),h=a(131),_=a.n(h),d=function(){return Object(s.jsxs)("ul",{className:_.a.list,children:[Object(s.jsx)("li",{className:_.a.listItem,children:Object(s.jsx)(i.b,{exact:!0,to:"/register",className:_.a.listLink,activeClassName:_.a.listLinkActive,children:"Register"})}),Object(s.jsx)("li",{className:_.a.listItem,children:Object(s.jsx)(i.b,{exact:!0,to:"/login",className:_.a.listLink,activeClassName:_.a.listLinkActive,children:"Login"})})]})};a(51),t.a=Object(n.b)((function(e){return{isAuthenticated:c.b.isAuthenticated(e),email:c.b.getUserEmail(e)}}))((function(e){var t=e.isAuthenticated,a=e.email;return Object(s.jsxs)("div",{className:r.a.container,children:[Object(s.jsxs)("ul",{className:r.a.list,children:[Object(s.jsx)("li",{className:r.a.listItem,children:Object(s.jsx)(i.b,{exact:!0,to:"/",className:r.a.listLink,activeClassName:r.a.listLinkActive,children:"Home"})}),t&&Object(s.jsx)("li",{className:r.a.listItem,children:Object(s.jsx)(i.b,{exact:!0,to:"/contacts",className:r.a.listLink,activeClassName:r.a.listLinkActive,children:"Contacts"})})]}),t&&!a&&Object(s.jsx)(j.a,{}),t&&a&&Object(s.jsx)(m,{}),!t&&Object(s.jsx)(d,{})]})}))},134:function(e,t,a){e.exports={container:"Registration_container__2JJ6I",title:"Registration_title__1Gpfp",form:"Registration_form__OWk4e",label:"Registration_label__Mbihe",input:"Registration_input__3gz9w",button:"Registration_button__2dWFB"}}}]);
//# sourceMappingURL=5.20703dca.chunk.js.map