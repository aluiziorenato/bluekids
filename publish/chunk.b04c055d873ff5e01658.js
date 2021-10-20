(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{234:function(o,i,t){var e=t(243);e.__esModule&&(e=e.default),"string"==typeof e&&(e=[[o.i,e,""]]),e.locals&&(o.exports=e.locals);(0,t(177).default)("6cc07505",e,!0,{})},238:function(o,i,t){"use strict";var e={name:"ABackdrop",props:{isVisible:{type:Boolean,default:!0},zIndexOnShow:{type:Number,default:1080},transitionMs:{type:Number,default:150}},data:()=>({opacity:0,zIndex:null,top:null}),computed:{style(){const{top:o,zIndex:i,transitionMs:t,opacity:e}=this;return{top:o,transition:"opacity ".concat(t,"ms linear"),opacity:e,zIndex:i}}},methods:{hide(){this.$emit("update:is-visible",!1),this.$emit("hide")},lockBodyScroll(){document.body.style.maxWidth="".concat(document.body.offsetWidth,"px"),document.body.style.overflow="hidden"}},watch:{isVisible(o){o?(this.opacity=null,this.lockBodyScroll()):(this.opacity=0,document.body.style.overflow=document.body.style.maxWidth=null)},opacity(o){0===o?setTimeout((()=>{this.top=this.zIndex=null}),this.transitionMs):(this.zIndex=this.zIndexOnShow,this.top=0)}},mounted(){this.isVisible&&(setTimeout((()=>{this.opacity=null}),this.transitionMs),this.lockBodyScroll())}},a=(t(242),t(53)),s=Object(a.a)(e,(function(){var o=this,i=o.$createElement;return(o._self._c||i)("div",{staticClass:"backdrop",style:o.style,on:{click:o.hide}})}),[],!1,null,null,null);i.a=s.exports},242:function(o,i,t){"use strict";t(234)},243:function(o,i,t){(i=t(176)(!0)).push([o.i,".backdrop{position:fixed;top:-100vh;left:0;width:100vw;height:100vh;background-color:var(--dark);opacity:.65;cursor:pointer;z-index:-100}","",{version:3,sources:["ABackdrop.scss"],names:[],mappings:"AAAA,UAAU,cAAc,CAAC,UAAU,CAAC,MAAM,CAAC,WAAW,CAAC,YAAY,CAAC,4BAA4B,CAAC,WAAW,CAAC,cAAc,CAAC,YAAY",file:"ABackdrop.scss",sourcesContent:[".backdrop{position:fixed;top:-100vh;left:0;width:100vw;height:100vh;background-color:var(--dark);opacity:.65;cursor:pointer;z-index:-100}"]}]),o.exports=i},245:function(o,i,t){"use strict";var e=t(26),a=t(44),s={name:"AAlert",props:{canShow:{type:Boolean,default:!0},variant:{type:String,default:"warning"}},data:()=>({count:1}),computed:{i19close:()=>Object(a.a)(e.J)},watch:{canShow(o){o&&this.count++}}},n=t(53),r=Object(n.a)(s,(function(){var o=this,i=o.$createElement,t=o._self._c||i;return t("div",[t("transition",{attrs:{"enter-active-class":"animated fadeInDown fast"}},[o.canShow?t("div",{key:o.count},[o._m(0)]):o._e()])],1)}),[function(){var o=this,i=o.$createElement,t=o._self._c||i;return t("div",{staticClass:"alert alert-dismissible fade show",class:"alert-"+o.variant,attrs:{role:"alert"}},[o._t("default"),t("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":o.i19close},on:{click:function(i){return o.$emit("dismiss")}}},[t("span",{attrs:{"aria-hidden":"true"}},[o._v("×")])])],2)}],!1,null,null,null);i.a=r.exports},279:function(o,i,t){var e=t(323);e.__esModule&&(e=e.default),"string"==typeof e&&(e=[[o.i,e,""]]),e.locals&&(o.exports=e.locals);(0,t(177).default)("5ba7bbf2",e,!0,{})},322:function(o,i,t){"use strict";t(279)},323:function(o,i,t){(i=t(176)(!0)).push([o.i,".login-modal__box{z-index:1090;position:fixed;top:0;left:0;width:100vw;box-sizing:border-box;border-radius:0}@media (min-width:410px){.login-modal__box{width:400px;left:50%;margin-left:-200px;top:var(--spacer-4);border-radius:var(--border-radius)}}@media (min-height:400px){.login-modal__box{top:15%}}.login-modal .alert{margin-bottom:var(--spacer-3)}.login-modal__logout{margin-top:var(--spacer-3)}.login-modal__btn{color:#fff;text-align:left;line-height:var(--line-height-lg);padding:.7rem;min-width:15rem}.login-modal__btn:hover{color:#fff}.login-modal__btn:focus{box-shadow:none}.login-modal__btn--facebook{background:#3b5999;border-color:#2f4d8a}.login-modal__btn--facebook:hover{background:#274480;border-color:#274480}.login-modal__btn--google{background:#cb4023;border-color:#be3419}.login-modal__btn--google:hover{background:#c1361a;border-color:#c1361a}.login-modal__btn--windowslive{background:#329ffc;border-color:#2996f2}.login-modal__btn--windowslive:hover{background:#1f8ce9;border-color:#1f8ce9}.login-modal__btn-icon{display:inline-block;width:1.4rem;text-align:center;margin-right:var(--spacer-1)}.login-modal__back{display:block;padding-left:.3rem;padding-right:.3rem}.login-modal__back:focus{box-shadow:none}.login-modal__visitor-info{font-size:var(--font-size-sm);margin-top:var(--spacer-2);text-align:center;color:var(--text-muted)}","",{version:3,sources:["LoginModal.scss"],names:[],mappings:"AAAA,kBAAkB,YAAY,CAAC,cAAc,CAAC,KAAK,CAAC,MAAM,CAAC,WAAW,CAAC,qBAAqB,CAAC,eAAe,CAAC,yBAAyB,kBAAkB,WAAW,CAAC,QAAQ,CAAC,kBAAkB,CAAC,mBAAmB,CAAC,kCAAkC,CAAC,CAAC,0BAA0B,kBAAkB,OAAO,CAAC,CAAC,oBAAoB,6BAA6B,CAAC,qBAAqB,0BAA0B,CAAC,kBAAkB,UAAU,CAAC,eAAe,CAAC,iCAAiC,CAAC,aAAa,CAAC,eAAe,CAAC,wBAAwB,UAAU,CAAC,wBAAwB,eAAe,CAAC,4BAA4B,kBAAkB,CAAC,oBAAoB,CAAC,kCAAkC,kBAAkB,CAAC,oBAAoB,CAAC,0BAA0B,kBAAkB,CAAC,oBAAoB,CAAC,gCAAgC,kBAAkB,CAAC,oBAAoB,CAAC,+BAA+B,kBAAkB,CAAC,oBAAoB,CAAC,qCAAqC,kBAAkB,CAAC,oBAAoB,CAAC,uBAAuB,oBAAoB,CAAC,YAAY,CAAC,iBAAiB,CAAC,4BAA4B,CAAC,mBAAmB,aAAa,CAAC,kBAAkB,CAAC,mBAAmB,CAAC,yBAAyB,eAAe,CAAC,2BAA2B,6BAA6B,CAAC,0BAA0B,CAAC,iBAAiB,CAAC,uBAAuB",file:"LoginModal.scss",sourcesContent:[".login-modal__box{z-index:1090;position:fixed;top:0;left:0;width:100vw;box-sizing:border-box;border-radius:0}@media (min-width:410px){.login-modal__box{width:400px;left:50%;margin-left:-200px;top:var(--spacer-4);border-radius:var(--border-radius)}}@media (min-height:400px){.login-modal__box{top:15%}}.login-modal .alert{margin-bottom:var(--spacer-3)}.login-modal__logout{margin-top:var(--spacer-3)}.login-modal__btn{color:#fff;text-align:left;line-height:var(--line-height-lg);padding:.7rem;min-width:15rem}.login-modal__btn:hover{color:#fff}.login-modal__btn:focus{box-shadow:none}.login-modal__btn--facebook{background:#3b5999;border-color:#2f4d8a}.login-modal__btn--facebook:hover{background:#274480;border-color:#274480}.login-modal__btn--google{background:#cb4023;border-color:#be3419}.login-modal__btn--google:hover{background:#c1361a;border-color:#c1361a}.login-modal__btn--windowslive{background:#329ffc;border-color:#2996f2}.login-modal__btn--windowslive:hover{background:#1f8ce9;border-color:#1f8ce9}.login-modal__btn-icon{display:inline-block;width:1.4rem;text-align:center;margin-right:var(--spacer-1)}.login-modal__back{display:block;padding-left:.3rem;padding-right:.3rem}.login-modal__back:focus{box-shadow:none}.login-modal__visitor-info{font-size:var(--font-size-sm);margin-top:var(--spacer-2);text-align:center;color:var(--text-muted)}"]}]),o.exports=i},383:function(o,i,t){"use strict";t.r(i);var e=t(34),a=(t(36),t(26)),s=t(44),n=t(54),r=t(189),l=t(245),c=t(238),d={name:"LoginModal",components:{ALink:r.a,AAlert:l.a,ABackdrop:c.a},props:{isVisible:{type:Boolean,default:!0},getGreetingsMsg:Function,accountUrl:{type:String,default:"/app/#/account/"},ordersUrl:{type:String,default:"/app/#/account/orders"},ecomPassport:{type:Object,default:()=>n.a}},data:()=>({isLoading:!1,isWaitingPopup:!1,isLogged:!1,email:"",name:"",emailCode:null,oauthProviders:[],isLoginForm:!1,isEmailCodeSent:!1,hasLoginError:!1,hasNoProfileFound:!1,isWrongCode:!1}),computed:{i19close:()=>Object(s.a)(a.J),i19continueLoginOnPopup:()=>Object(s.a)(a.T),i19email:()=>Object(s.a)(a.hb).toLowerCase(),i19enterEmailCodeMsg:()=>Object(s.a)({pt_br:"Insira o código de verificação que te enviamos por e-mail.",en_us:"Enter the verification code we send you by email."}),i19guestCheckoutMsg:()=>Object(s.a)(a.Bb),i19incorrectEmailCodeMsg:()=>Object(s.a)({pt_br:"Código incorreto, verifique o e-mail que te enviados, se necessário procure no spam ou aguarde alguns instantes se não tiver recebido.",en_us:"Incorrect code, check the email sent to you, search for spam if necessary or wait a few moments if you haven't received it."}),i19loginErrorMsg:()=>Object(s.a)(a.Ub),i19login:()=>Object(s.a)(a.Tb),i19logout:()=>Object(s.a)(a.Wb),i19myAccount:()=>Object(s.a)(a.dc),i19myOrders:()=>Object(s.a)(a.ec),i19noProfileFoundWithEmail:()=>Object(s.a)(a.mc),i19signInWith:()=>Object(s.a)(a.Ad),i19signInWithAnotherEmail:()=>Object(s.a)(a.Bd),i19signUp:()=>Object(s.a)(a.Cd),i19signUpWith:()=>Object(s.a)(a.Dd),greetings(){return"function"==typeof this.getGreetingsMsg?this.getGreetingsMsg(this.name):"".concat(Object(s.a)(a.Db)," ").concat(this.name||Object(s.a)(a.Wd))}},methods:{hide(){this.$emit("update:is-visible",!1)},update(){const{checkLogin:o,getCustomerName:i}=this.ecomPassport;this.name=i(),this.isLogged=o(),this.email="",this.isWaitingPopup=!1},waitPromise(o){this.isLoading=!0,o.catch(console.error).finally((()=>{this.isLoading=!1}))},setOauthProviders(){const o=this.ecomPassport.fetchOauthProviders().then((({host:o,baseUri:i,oauthPath:t,providers:e})=>{const a=[];for(const s in e)if(e[s]){const{faIcon:n,providerName:r}=e[s];a.push({link:o+i+s+t,faIcon:n,provider:s,providerName:r})}this.oauthProviders=a})).catch((o=>{throw this.presetOauthProviders(),o}));return this.waitPromise(o),o},presetOauthProviders(){this.oauthProviders=[{faIcon:"fa-facebook-f",providerName:"Facebook",provider:"facebook"},{faIcon:"fa-google",providerName:"Google",provider:"google"},{faIcon:"fa-windows",providerName:"Windows",provider:"windowslive"}]},openOauthPopup(o,i){if(this.hasLoginError=!1,o)this.ecomPassport.popupOauthLink(o),this.isWaitingPopup=!0;else{const o=this.setOauthProviders().then((()=>{const o=this.oauthProviders.find((o=>o.provider===i));this.openOauthPopup(o,i)})).catch((o=>{throw this.hasLoginError=!0,o}));this.waitPromise(o)}},submitEmail(){this.isLoginForm=!1;const o=this.ecomPassport.fetchLogin(this.email,null,this.emailCode).catch((o=>{const{response:i}=o;if(!i||403!==i.status)throw setTimeout((()=>{this.hasLoginError=!0}),100),o;this.hasNoProfileFound=!0,this.isEmailCodeSent&&(this.isLoginForm=!0,this.isWrongCode=!0)}));this.waitPromise(o)},signUpEmail(){if(this.email)if(this.isEmailCodeSent)this.isLoginForm=!0;else{const o=this.ecomPassport.sendEmailCode(this.email).then((()=>new Promise((o=>{setTimeout((()=>{this.isLoginForm=this.isEmailCodeSent=!0,o()}),2e3)})))).catch((o=>{console.error(o),this.hasLoginError=!0}));this.waitPromise(o)}},logout(){this.ecomPassport.logout()}},watch:{hasNoProfileFound(o){!1===o&&(this.email="",this.isEmailCodeSent=!1),this.isLoginForm=!o},isLoginForm(o){this.hasLoginError=!1,o&&(this.isWaitingPopup=!1,this.$nextTick((()=>{setTimeout((()=>{this.$refs[this.email?"inputCode":"input"].focus()}),200)})))},isEmailCodeSent(o){o||(this.emailCode=null,this.hasNoProfileFound=!1)},emailCode(){this.isWrongCode=!1}},mounted(){["login","logout"].forEach((o=>{this.ecomPassport.on(o,(i=>{this.update(),this.$emit(o,i)}))})),this.update(),this.setOauthProviders()}},u=(t(322),t(53)),m=Object(u.a)(d,(function(){var o=this,i=o.$createElement,t=o._self._c||i;return t("div",{staticClass:"login-modal"},[t("a-backdrop",{attrs:{"is-visible":o.isVisible},on:{hide:o.hide}}),t("transition",{attrs:{"enter-active-class":"animated zoomIn","leave-active-class":"animated fadeOutUp slow"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:o.isVisible,expression:"isVisible"}],staticClass:"login-modal__box card"},[o._t("header",(function(){return[t("div",{staticClass:"login-modal__header card-header"},[o._v(" "+o._s(o.greetings)+" "),t("button",{staticClass:"close",attrs:{type:"button","aria-label":o.i19close},on:{click:o.hide}},[t("span",{attrs:{"aria-hidden":"true"}},[o._v("×")])])])]})),t("div",{staticClass:"login-modal__body card-body"},[o.hasLoginError?t("div",{staticClass:"alert alert-warning",attrs:{role:"alert"}},[o._v(" "+o._s(o.i19loginErrorMsg)+" ")]):o._e(),t("transition-group",{attrs:{"enter-active-class":"animated fadeIn","leave-active-class":"animated position-absolute fadeOut faster"}},[o.isLoading?t("div",{key:"waiting"},[t("div",{staticClass:"spinner-border m-3",attrs:{role:"status"}},[t("span",{staticClass:"sr-only"},[o._v("Loading...")])])]):o.isLogged?t("div",{key:"logged"},[t("div",{staticClass:"list-group list-group-flush"},[t("a-link",{staticClass:"list-group-item list-group-item-action",attrs:{href:o.ordersUrl}},[o._v(" "+o._s(o.i19myOrders)+" ")]),t("a-link",{staticClass:"list-group-item list-group-item-action",attrs:{href:o.accountUrl}},[o._v(" "+o._s(o.i19myAccount)+" ")])],1),t("button",{staticClass:"login-modal__logout btn btn-block btn-danger",attrs:{type:"button"},on:{click:o.logout}},[t("i",{staticClass:"fas fa-sign-out-alt"}),o._v(" "+o._s(o.i19logout)+" ")])]):o.isLoginForm?t("div",{key:"form"},[t("form",{on:{submit:function(i){return i.preventDefault(),o.submitEmail.apply(null,arguments)}}},[t("div",{staticClass:"form-group"},[t("button",{staticClass:"login-modal__back btn",attrs:{type:"button"},on:{click:function(i){o.isLoginForm=!1}}},[t("i",{staticClass:"fas fa-arrow-left"})]),o.isEmailCodeSent?o._e():t("label",{attrs:{for:"login-modal-email"}},[o._v(" "+o._s(o.i19signInWith+" "+o.i19email)+" ")]),t("input",{directives:[{name:"model",rawName:"v-model",value:o.email,expression:"email"}],ref:"input",staticClass:"form-control",attrs:{type:"email",id:"login-modal-email",placeholder:"email@mail.com",required:"",readonly:o.isEmailCodeSent},domProps:{value:o.email},on:{input:function(i){i.target.composing||(o.email=i.target.value)}}})]),o.isEmailCodeSent?t("div",{staticClass:"form-group"},[t("a-alert",{attrs:{"can-show":o.isWrongCode,variant:"warning"}},[o._v(" "+o._s(o.i19incorrectEmailCodeMsg)+" ")]),t("input",{directives:[{name:"model",rawName:"v-model.number",value:o.emailCode,expression:"emailCode",modifiers:{number:!0}}],ref:"inputCode",staticClass:"form-control",attrs:{type:"number",id:"login-modal-email-code",placeholder:"999999",min:"100000",max:"999999",maxlength:"6",required:""},domProps:{value:o.emailCode},on:{input:function(i){i.target.composing||(o.emailCode=o._n(i.target.value))},blur:function(i){return o.$forceUpdate()}}}),t("div",{staticClass:"form-text"},[o._v(" "+o._s(o.i19enterEmailCodeMsg)+" ")]),t("a",{attrs:{href:"#"},on:{click:function(i){i.preventDefault(),o.isEmailCodeSent=!1}}},[o._v(" "+o._s(o.i19signInWithAnotherEmail)+" ")])],1):o._e(),t("button",{staticClass:"btn btn-block btn-primary",attrs:{type:"submit"}},[o._v(" "+o._s(o.i19login)+" ")])])]):t("div",{key:"oauth"},[!o.isWaitingPopup&&o.hasNoProfileFound?t("div",{staticClass:"alert alert-info",attrs:{role:"alert"}},[o._v(" "+o._s(o.i19noProfileFoundWithEmail)+" "),t("b",[o._v(o._s(o.email))]),o._v(". "),t("br"),t("a",{staticClass:"alert-link",attrs:{href:"#"},on:{click:function(i){return i.preventDefault(),o.signUpEmail.apply(null,arguments)}}},[o._v(" "+o._s(o.i19signUp)+" ")]),t("br"),t("a",{staticClass:"alert-link",attrs:{href:"#"},on:{click:function(i){i.preventDefault(),o.hasNoProfileFound=!1}}},[o._v(" "+o._s(o.i19signInWithAnotherEmail)+" ")])]):o._e(),t("a-alert",{attrs:{"can-show":o.isWaitingPopup,variant:"info"}},[o._v(" "+o._s(o.i19continueLoginOnPopup)+". ")]),o._l(o.oauthProviders,(function(i){var e=i.link,a=i.faIcon,s=i.providerName,n=i.provider;return t("button",{key:n,staticClass:"login-modal__btn btn btn-block",class:"login-modal__btn--"+n,attrs:{type:"button"},on:{click:function(i){return o.openOauthPopup(e,n)}}},[t("span",{staticClass:"login-modal__btn-icon"},[t("i",{class:"fab "+a})]),o._v(" "+o._s(o.hasNoProfileFound?o.i19signUpWith:o.i19signInWith)+" "+o._s(s)+" ")])})),o.hasNoProfileFound?t("div",{staticClass:"login-modal__visitor-info"},[o._v(" "+o._s(o.i19guestCheckoutMsg)+" ")]):t("button",{key:"email",staticClass:"login-modal__btn btn btn-block btn-secondary",attrs:{type:"button"},on:{click:function(i){o.isLoginForm=!0}}},[t("span",{staticClass:"login-modal__btn-icon"},[t("i",{staticClass:"fas fa-envelope"})]),o._v(" "+o._s(o.i19signInWith+" "+o.i19email)+" ")])],2)])],1)],2)])],1)}),[],!1,null,null,null),A=m.exports;i.default=(o={},i="login-modal",t="user-button")=>{const a=document.getElementById(i),s=document.getElementById(t);if(a&&s){const t=window.storefront&&window.storefront.getScopedSlots;new e.a({data:{isVisible:!1},created(){s.addEventListener("click",(o=>{o.preventDefault(),this.isVisible=!0}))},render(e){const s=this;return e(A,{attrs:{id:i},props:{...o.props,isVisible:s.isVisible},on:{"update:is-visible"(o){s.isVisible=o}},scopedSlots:"function"==typeof t?t(a,e):void 0})}}).$mount(a)}}}}]);