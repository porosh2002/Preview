(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[7],{69:function(e,t,a){e.exports=a.p+"static/media/ss.d244b5e9.png"},77:function(e,t,a){"use strict";a.r(t);var n=a(46),r=a.n(n),o=a(48),c=a(0),s=a.n(c),l=a(49),i=a(50),m=a.n(i),u=a(69),d=a.n(u),p=a(70),f=Object(l.a)("pk_test_51IDG9rIUDWGSgLgAWdiOCdfkTqM0QQxhWPrGRRTrSTN8Bqp1CPTUc1mS65hrHR8lPVcvqw6yoykZyMFAAMg1Zad000GbQo3sUW");t.default=function(){return s.a.createElement("div",{className:"Payment"},s.a.createElement("div",{className:"HeaderTextPayment"}),s.a.createElement(p.Elements,{stripe:f},s.a.createElement(h,null)))};var h=function(){var e=Object(p.useStripe)(),t=Object(p.useElements)(),a=function(){var a=Object(o.a)(r.a.mark((function a(n){var o,c,s,l;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),a.next=3,e.createPaymentMethod({type:"card",card:t.getElement(p.CardElement)});case 3:if(o=a.sent,c=o.error,s=o.paymentMethod,c)console.log("error");else{l=s.id;try{m.a.post("http://localhost:5000/payment",{id:l})}catch(c){console.log("error")}}case 7:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return s.a.createElement("form",{className:"FromWrap",onSubmit:a},s.a.createElement("div",null,s.a.createElement("img",{className:"SImage",src:d.a,alt:"Porosh"})),s.a.createElement("fieldset",{className:"FormGroup"},s.a.createElement("input",{className:"CustomForm",type:"name",placeholder:" First Name : "}),s.a.createElement("input",{className:"CustomForm",type:"name",placeholder:" Last Name : "}),s.a.createElement("div",{className:"FormRow"},s.a.createElement(p.CardElement,{value:"5300",options:b,onChange:y}))),s.a.createElement("button",{className:"VerifyBtn",type:"submit",disabled:!e},"Verify your Account"),s.a.createElement("p",{className:"labelText"},"By Continuing you are agreed with I would like to subscribe to an additional browser games bundle with a fourteen day trial period for $ 1.95, which automatically continues into a recurring monthly subscription of $ 4.95/month charged to my credit card, unless terminated during the trial period. I understand and accept the terms and conditions of the browser games bundle."))},y=function(e){console.log(e)},b={iconStyle:"solid",style:{base:{iconColor:"#c4f0ff",color:"#343a40",fontWeight:500,fontFamily:"Roboto, Open Sans, Segoe UI, sans-serif",fontSize:"16px",fontSmoothing:"antialiased",":-webkit-autofill":{color:"#fce883"},"::placeholder":{color:"#aaa"}},invalid:{iconColor:"#ffc7ee",color:"#ffc7ee"}}}}}]);
//# sourceMappingURL=7.0f63e3fa.chunk.js.map