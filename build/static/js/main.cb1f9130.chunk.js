(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{120:function(t,e,n){},123:function(t,e,n){"use strict";n.r(e);var r,c,a=n(1),i=n(0),u=n.n(i),o=n(19),s=n.n(o),b=n(13),l=n(29),j=n(30),f=n(32),O=n(31),d=n(11),h=n(37),p=n(8),m=n(21),_=Object(d.b)((function(t){return{isAuthenticated:m.b.isAuthenticated(t)}}))((function(t){var e=t.component,n=t.isAuthenticated,r=Object(h.a)(t,["component","isAuthenticated"]);return Object(a.jsx)(p.b,Object(b.a)(Object(b.a)({},r),{},{render:function(t){return n?Object(a.jsx)(e,Object(b.a)({},t)):Object(a.jsx)(p.a,{to:"/login"})}}))})),g=Object(d.b)((function(t){return{isAuthenticated:m.b.isAuthenticated(t)}}))((function(t){var e=t.component,n=t.isAuthenticated,r=t.restricted,c=Object(h.a)(t,["component","isAuthenticated","restricted"]);return Object(a.jsx)(p.b,Object(b.a)(Object(b.a)({},c),{},{render:function(t){return n&&r?Object(a.jsx)(p.a,{to:"/contacts"}):Object(a.jsx)(e,Object(b.a)({},t))}}))})),C=(n(68),n(50)),x=n(65),v=n.n(x),E=function(t){var e=t.children;return Object(a.jsx)("div",{className:v.a.container,children:e})},S=(n(69),n(71),n(70),n(42),n(18),n(120),n(51)),N=function(t){Object(f.a)(n,t);var e=Object(O.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(j.a)(n,[{key:"componentDidMount",value:function(){this.props.onGetCurrentUser()}},{key:"render",value:function(){return Object(a.jsx)(E,{children:Object(a.jsx)(i.Suspense,{fallback:Object(a.jsx)(C.a,{}),children:Object(a.jsx)(p.d,{children:S.a.map((function(t,e){return t.private?Object(a.jsx)(_,Object(b.a)({},t),e):Object(a.jsx)(g,Object(b.a)(Object(b.a)({},t),{},{restricted:t.restricted}),e)}))})})})}}]),n}(i.Component),A=Object(d.b)(null,{onGetCurrentUser:m.a.getCurrentUser})(N),y=n(25),T=n(36),R=n(2),k=n(4),U=n(7),F=Object(R.c)([],(r={},Object(k.a)(r,U.i,(function(t,e){return e.payload})),Object(k.a)(r,U.c,(function(t,e){return[].concat(Object(T.a)(t),[e.payload])})),Object(k.a)(r,U.f,(function(t,e){return t.filter((function(t){return t.id!==e.payload}))})),r)),L=Object(R.c)(!1,(c={},Object(k.a)(c,U.b,(function(){return!0})),Object(k.a)(c,U.c,(function(){return!1})),Object(k.a)(c,U.a,(function(){return!1})),Object(k.a)(c,U.h,(function(){return!0})),Object(k.a)(c,U.i,(function(){return!1})),Object(k.a)(c,U.g,(function(){return!1})),Object(k.a)(c,U.e,(function(){return!0})),Object(k.a)(c,U.f,(function(){return!1})),Object(k.a)(c,U.d,(function(){return!1})),c)),q=n(35),D=Object(R.c)("",Object(k.a)({},q.a,(function(t,e){return e.payload}))),w=n(48),B=n(66),I=n.n(B),J=n(34),z={key:"auth",storage:I.a,whitelist:["token"]},Q={auth:Object(w.a)(z,J.a),contacts:F,filter:D,loading:L},H=Object(R.a)({reducer:Q,middleware:Object(T.a)(Object(R.d)({serializableCheck:!1}))}),M=Object(w.b)(H),G=n(67);s.a.render(Object(a.jsx)(u.a.StrictMode,{children:Object(a.jsx)(d.a,{store:H,children:Object(a.jsx)(G.a,{loading:null,persistor:M,children:Object(a.jsx)(y.a,{children:Object(a.jsx)(A,{})})})})}),document.getElementById("root"))},18:function(t,e,n){"use strict";var r=n(22),c=function(t){return t.contacts},a=function(t){return t.filter},i=Object(r.a)([c,a],(function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e)}))})),u=Object(r.a)([function(t,e){return e},c],(function(t,e){return e.find((function(e){return e.id===t}))}));e.a={getLoading:function(t){return t.loading},getContacts:c,getFilter:a,getFilteredContacts:i,getContactById:u}},20:function(t,e,n){t.exports={form:"Form_form__7B3DZ",label:"Form_label__1Q1xH",input:"Form_input__1CqXv",button:"Form_button__30Yhs"}},21:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return s}));var r=n(16),c=n.n(r),a=n(6);c.a.defaults.baseURL="https://goit-phonebook-api.herokuapp.com";var i=function(t){c.a.defaults.headers.common.Authorization="Bearer ".concat(t)},u=function(){c.a.defaults.headers.common.Authorization=""},o={register:function(t){return function(e){e(a.a.registerRequest()),c.a.post("/users/signup",t).then((function(t){i(t.data.token),e(a.a.registerSuccess(t.data))})).catch((function(t){return e(a.a.registerError(t.message))}))}},login:function(t){return function(e){e(a.a.loginRequest()),c.a.post("/users/login",t).then((function(t){i(t.data.token),e(a.a.loginSuccess(t.data))})).catch((function(t){return e(a.a.loginError(t))}))}},getCurrentUser:function(){return function(t,e){var n=e().auth.token;n&&(i(n),t(a.a.getCurrentUserRequest()),c.a.get("/users/current").then((function(e){var n=e.data;t(a.a.getCurrentUserSuccess(n))})).catch((function(e){return t(a.a.getCurrentUserError(e))})))}},logout:function(){return function(t){t(a.a.logoutRequest()),c.a.post("/users/logout").then((function(){u(),t(a.a.logoutSuccess())})).catch((function(e){return t(a.a.logoutError(e))}))}}},s={isAuthenticated:function(t){return t.auth.token},getUserEmail:function(t){return t.auth.user.email},getErrorMessage:function(t){return t.auth.error}};n(34)},23:function(t,e,n){"use strict";var r=n(42);n.d(e,"a",(function(){return r.a}));var c=n(18);n.d(e,"b",(function(){return c.a}))},27:function(t,e,n){t.exports={item:"ContactsListItem_item__18RMc",contact:"ContactsListItem_contact__3lgYE",btn:"ContactsListItem_btn__3t6Tb"}},28:function(t,e,n){t.exports={container:"Filter_container__35JP8",label:"Filter_label__3KDJC",input:"Filter_input__ihpZJ",enter:"Filter_enter__35nQC",enterActive:"Filter_enterActive__2jnFC",exit:"Filter_exit__DwQGY",exitActive:"Filter_exitActive__Fj4J4"}},34:function(t,e,n){"use strict";var r,c,a,i=n(4),u=n(2),o=n(12),s=n(6),b={name:null,email:null},l=Object(u.c)(b,(r={},Object(i.a)(r,s.a.registerSuccess,(function(t,e){return e.payload.user})),Object(i.a)(r,s.a.loginSuccess,(function(t,e){return e.payload.user})),Object(i.a)(r,s.a.getCurrentUserSuccess,(function(t,e){return e.payload})),Object(i.a)(r,s.a.logoutSuccess,(function(){return b})),r)),j=Object(u.c)(null,(c={},Object(i.a)(c,s.a.registerSuccess,(function(t,e){return e.payload.token})),Object(i.a)(c,s.a.loginSuccess,(function(t,e){return e.payload.token})),Object(i.a)(c,s.a.logoutSuccess,(function(){return null})),c)),f=Object(u.c)(null,(a={},Object(i.a)(a,s.a.registerError,(function(t,e){return e.payload})),Object(i.a)(a,s.a.loginError,(function(t,e){return e.payload})),Object(i.a)(a,s.a.logoutError,(function(t,e){return e.payload})),Object(i.a)(a,s.a.getCurrentUserError,(function(t,e){return e.payload})),Object(i.a)(a,s.a.logoutSuccess,(function(){return null})),a));e.a=Object(o.c)({user:l,token:j,error:f})},35:function(t,e,n){"use strict";var r=n(2),c=Object(r.b)("FILTER_CONTACTS");e.a=c},38:function(t,e,n){t.exports={container:"Notification_container__2ilXH",text:"Notification_text__2kKkn",enter:"Notification_enter__3Do9k",enterActive:"Notification_enterActive__2VJN_",exit:"Notification_exit__Q_4vR",exitActive:"Notification_exitActive__BUjjg"}},42:function(t,e,n){"use strict";var r=n(16),c=n.n(r),a=n(7);c.a.defaults.baseURL="https://goit-phonebook-api.herokuapp.com";e.a={addContact:function(t){var e=t.name,n=t.number;return function(t){t(Object(a.b)()),c.a.post("/contacts",{name:e,number:n}).then((function(e){var n=e.data;return t(Object(a.c)(n))})).catch((function(e){return t(Object(a.a)(e))}))}},fetchContacts:function(){return function(t){t(Object(a.h)()),c.a.get("/contacts").then((function(e){var n=e.data;return t(Object(a.i)(n))})).catch((function(e){return t(Object(a.g)(e))}))}},deleteContact:function(t){return function(e){e(Object(a.e)()),c.a.delete("/contacts/".concat(t)).then((function(){return e(Object(a.f)(t))})).catch((function(t){return e(Object(a.d)(t))}))}}}},46:function(t,e,n){t.exports={title:"Title_title__Jpt7i",appear:"Title_appear__15uIa",appearActive:"Title_appearActive__2d5Bd"}},47:function(t,e,n){t.exports={list:"ContactsList_list__3dMBp",enter:"ContactsList_enter__pAWyi",enterActive:"ContactsList_enterActive__1fUVb",exit:"ContactsList_exit__2qlk3",exitActive:"ContactsList_exitActive__2WNcs"}},50:function(t,e,n){"use strict";var r=n(1),c=(n(0),n(100),n(63)),a=n.n(c),i=n(64),u=n.n(i);e.a=function(){return Object(r.jsx)("div",{className:u.a.loader,children:Object(r.jsx)(a.a,{type:"ThreeDots",color:"#f1392d",height:50,width:50})})}},51:function(t,e,n){"use strict";var r=n(0),c=[{exact:!0,path:"/",name:"Home",component:Object(r.lazy)((function(){return n.e(3).then(n.bind(null,124))})),private:!1,restricted:!1},{exact:!0,path:"/register",name:"Register",component:Object(r.lazy)((function(){return n.e(5).then(n.bind(null,125))})),private:!1,restricted:!0},{exact:!0,path:"/login",name:"Login",component:Object(r.lazy)((function(){return n.e(4).then(n.bind(null,126))})),private:!1,restricted:!0},{exact:!0,path:"/contacts",name:"Contacts",component:Object(r.lazy)((function(){return n.e(6).then(n.bind(null,127))})),private:!0,restricted:!1}];e.a=c},6:function(t,e,n){"use strict";var r=n(2),c=Object(r.b)("auth/registerRequest"),a=Object(r.b)("auth/registerSuccess"),i=Object(r.b)("auth/registerError"),u=Object(r.b)("auth/loginRequest"),o=Object(r.b)("auth/loginSuccess"),s=Object(r.b)("auth/loginError"),b=Object(r.b)("auth/logoutRequest"),l=Object(r.b)("auth/logoutSuccess"),j=Object(r.b)("auth/logoutError"),f=Object(r.b)("auth/getCurrentUserRequest"),O=Object(r.b)("auth/getCurrentUserSuccess"),d=Object(r.b)("auth/getCurrentUserError");e.a={registerRequest:c,registerSuccess:a,registerError:i,loginRequest:u,loginSuccess:o,loginError:s,logoutRequest:b,logoutSuccess:l,logoutError:j,getCurrentUserRequest:f,getCurrentUserSuccess:O,getCurrentUserError:d}},61:function(t,e,n){"use strict";var r=n(1),c=(n(0),n(49)),a=n(38),i=n.n(a);e.a=function(t){var e=t.error,n=t.message;return console.log(e),Object(r.jsx)(c.a,{in:e,appear:!0,timeout:250,classNames:i.a,unmountOnExit:!0,children:Object(r.jsx)("div",{className:i.a.container,children:Object(r.jsx)("p",{className:i.a.text,children:n})})})}},64:function(t,e,n){t.exports={loader:"Loader_loader__O8fZE"}},65:function(t,e,n){t.exports={container:"Layout_container__2GlEm"}},68:function(t,e,n){"use strict";var r=n(1),c=(n(0),n(49)),a=n(46),i=n.n(a);e.a=function(t){var e=t.title;return Object(r.jsx)(c.a,{in:!0,appear:!0,timeout:500,classNames:i.a,children:Object(r.jsx)("h2",{className:i.a.title,children:e})})}},69:function(t,e,n){"use strict";var r=n(4),c=n(29),a=n(30),i=n(32),u=n(31),o=n(1),s=n(0),b=n(11),l=n(23),j=n(61),f=n(20),O=n.n(f),d=function(t){Object(i.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(c.a)(this,n);for(var a=arguments.length,i=new Array(a),u=0;u<a;u++)i[u]=arguments[u];return(t=e.call.apply(e,[this].concat(i))).state={name:"",number:"",contactExists:!1},t.handleChange=function(e){var n=e.target,c=n.name,a=n.value;t.setState(Object(r.a)({},c,a))},t.handleSubmit=function(e){e.preventDefault();var n={name:t.state.name,number:t.state.number};if(t.props.contacts.find((function(t){return t.name===n.name})))return t.setState({contactExists:!0}),void setTimeout((function(){return t.setState({contactExists:!1})}),1500);t.props.addContact(n),t.setState({name:"",number:""})},t}return Object(a.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number,r=t.contactExists;return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("form",{className:O.a.form,onSubmit:this.handleSubmit,children:[Object(o.jsxs)("label",{className:O.a.label,children:["Name",Object(o.jsx)("input",{type:"text",value:e,name:"name",onChange:this.handleChange,placeholder:"Enter your full name",className:O.a.input,required:!0})]}),Object(o.jsxs)("label",{className:O.a.label,children:["Number",Object(o.jsx)("input",{type:"text",value:n,name:"number",onChange:this.handleChange,placeholder:"xxx-xx-xx",className:O.a.input,required:!0})]}),Object(o.jsx)("input",{type:"submit",value:"Add contact",className:O.a.button}),Object(o.jsx)(j.a,{error:r,message:"Contact already exists!"})]})})}}]),n}(s.Component),h={addContact:l.a.addContact};e.a=Object(b.b)((function(t){return{contacts:l.b.getContacts(t)}}),h)(d)},7:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i})),n.d(e,"h",(function(){return u})),n.d(e,"i",(function(){return o})),n.d(e,"g",(function(){return s})),n.d(e,"e",(function(){return b})),n.d(e,"f",(function(){return l})),n.d(e,"d",(function(){return j}));var r=n(2),c=Object(r.b)("ADD_CONTACT_REQUEST"),a=Object(r.b)("ADD_CONTACT_SUCCESS"),i=Object(r.b)("ADD_CONTACT_ERROR"),u=Object(r.b)("FETCH_CONTACTS_REQUEST"),o=Object(r.b)("FETCH_CONTACTS_SUCCESS"),s=Object(r.b)("FETCH_CONTACTS_ERROR"),b=Object(r.b)("DELETE_CONTACT_REQUEST"),l=Object(r.b)("DELETE_CONTACT_SUCCESS"),j=Object(r.b)("DELETE_CONTACT_ERROR")},70:function(t,e,n){"use strict";var r=n(1),c=(n(0),n(49)),a=n(11),i=n(35),u=n(18),o=n(28),s=n.n(o),b={filterContact:i.a};e.a=Object(a.b)((function(t){return{filter:u.a.getFilter(t),contacts:u.a.getContacts(t)}}),b)((function(t){var e=t.filter,n=t.filterContact,a=t.contacts;return Object(r.jsx)(c.a,{in:a.length>1,appear:!0,timeout:250,unmountOnExit:!0,classNames:s.a,children:Object(r.jsx)("div",{className:s.a.container,children:Object(r.jsxs)("label",{className:s.a.label,children:["Find contacts by name",Object(r.jsx)("input",{className:s.a.input,onChange:function(t){return n(t.target.value)},value:e})]})})})}))},71:function(t,e,n){"use strict";var r=n(1),c=(n(0),n(11)),a=n(128),i=n(49),u=n(13),o=n(23),s=n(27),b=n.n(s),l=Object(c.b)((function(t,e){var n=o.b.getContactById(t,e.id);return Object(u.a)({},n)}),(function(t,e){return{deleteContact:function(){return t(o.a.deleteContact(e.id))}}}))((function(t){var e=t.name,n=t.number,c=t.deleteContact;return Object(r.jsxs)("li",{className:b.a.item,children:[Object(r.jsx)("p",{className:b.a.contact,children:e}),Object(r.jsx)("p",{className:b.a.contact,children:n}),Object(r.jsx)("button",{type:"button",className:b.a.btn,onClick:c,children:"X"})]})})),j=n(47),f=n.n(j),O=n(18);e.a=Object(c.b)((function(t){return{searchContact:O.a.getFilteredContacts(t)}}))((function(t){var e=t.searchContact;return Object(r.jsx)(a.a,{component:"ul",className:f.a.list,children:e.map((function(t){var e=t.id;return Object(r.jsx)(i.a,{timeout:250,classNames:f.a,children:Object(r.jsx)(l,{id:e})},e)}))})}))}},[[123,1,2]]]);
//# sourceMappingURL=main.cb1f9130.chunk.js.map