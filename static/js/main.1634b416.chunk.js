(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,r){e.exports=r(33)},25:function(e,t,r){},26:function(e,t,r){},33:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(5),u=r.n(o),s=(r(25),r(14)),c=r(18),l=r(15),i=r(19),m=(r(26),r(7)),b=r.n(m),p=function(e){var t=!1===e.access?"".concat(b.a.disabledButton):"",r=!1===e.access?"disabled":"";return a.a.createElement(a.a.Fragment,null,a.a.createElement("button",{className:"".concat(b.a.buttons," ").concat(t),onClick:function(){return e.onClickButton()},disabled:r},e.buttonsTitle))},d=r(8),E=r.n(d),v=function(e){var t=!0===e.limit.errorEnd?"".concat(E.a.colorNumberEnd):"".concat(E.a.colorNumberOk);return a.a.createElement("div",{className:"".concat(t)},e.message)},g=r(9),V=r.n(g),f=function(e){var t=!0===e.errorColor?"".concat(V.a.backgroundError):"";return a.a.createElement(a.a.Fragment,null,a.a.createElement("input",{type:"number",value:e.value,className:"".concat(V.a.inputValue," ").concat(t),onChange:function(t){return e.onChangeInput(+t.currentTarget.value)}}))},C=r(6),O=r(1),_=function(e,t,r){return e.map(function(e){return 3===e.id?(e.access=r,e):(e.access=!r,e)})},j={counter:0,buttonPlus:{id:1,buttonsTitle:"+",access:!0},buttonReset:{id:2,buttonsTitle:"Reset",access:!0},buttonSet:{id:3,buttonsTitle:"Set",access:!1},buttons:[{id:1,buttonsTitle:"+",access:!0},{id:2,buttonsTitle:"Reset",access:!0},{id:3,buttonsTitle:"Set",access:!1}],limit:{startValue:0,maxValue:5,errorColorStart:!1,errorColorMax:!1,errorEnd:!1},message:0,messageAccess:"Enter values and press 'Set'",messageError:"Incorrect value!"},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PLUS_NUMBER":return e.counter<e.limit.maxValue?e.counter<e.limit.maxValue-1?Object(O.a)({},e,{button:e.buttons.map(function(e){return Object(O.a)({},e)}),counter:e.counter+1,message:e.message+1,limit:Object(O.a)({},e.limit,{errorColorStart:!1,errorColorMax:!1,errorEnd:!1})}):Object(O.a)({},e,{button:e.buttons.map(function(e){return Object(O.a)({},e)}),counter:e.counter+1,message:e.message+1,limit:Object(O.a)({},e.limit,{errorEnd:!0})}):Object(O.a)({},e,{button:e.buttons.map(function(e){return Object(O.a)({},e)}),limit:Object(O.a)({},e.limit,{errorEnd:!0})});case"RESET":return Object(O.a)({},e,{button:e.buttons.map(function(e){return Object(O.a)({},e)}),counter:e.limit.startValue,message:e.limit.startValue,limit:Object(O.a)({},e.limit,{errorEnd:!1})});case"SET":if(e.limit.maxValue>e.limit.startValue&&e.limit.startValue>=0)return Object(O.a)({},e,{counter:e.limit.startValue,message:e.limit.startValue,buttons:_(e.buttons,0,!1),limit:Object(O.a)({},e.limit,{errorEnd:!1})});case"INPUT_MAX_VALUE":return t.event>e.limit.startValue?Object(O.a)({},e,{buttons:_(e.buttons,0,!0),limit:Object(O.a)({},e.limit,{maxValue:t.event,errorColorMax:!1,errorEnd:!1}),message:e.messageAccess}):Object(O.a)({},e,{buttons:_(e.buttons,0,!0),limit:Object(O.a)({},e.limit,{maxValue:t.event,errorColorMax:!0,errorEnd:!1}),message:e.messageError});case"INPUT_START_VALUE":if(t.event>=0&&t.event<e.limit.maxValue)return Object(O.a)({},e,{buttons:_(e.buttons,0,!0),limit:Object(O.a)({},e.limit,{startValue:t.event,errorColorStart:!1,errorEnd:!1}),message:e.messageAccess});if(t.event<0||t.event>=e.limit.maxValue)return Object(O.a)({},e,{buttons:_(e.buttons,0,!0),limit:Object(O.a)({},e.limit,{startValue:t.event,errorColorStart:!0,errorEnd:!1}),message:e.messageError});default:return e}},T=function(e){function t(){var e,r;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),u=0;u<n;u++)o[u]=arguments[u];return(r=Object(c.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).render=function(){return a.a.createElement("div",{className:"generalBlock"},a.a.createElement("div",{className:"bloks"},a.a.createElement("div",null,a.a.createElement("div",{className:"content"},a.a.createElement("div",{className:"contentLine"},a.a.createElement("div",null,"Max value"),a.a.createElement(f,{errorColor:r.props.errorColorMax,value:r.props.maxValue,onChangeInput:r.props.inputMaxValue})),a.a.createElement("div",{className:"contentLine"},a.a.createElement("div",null,"Start value"),a.a.createElement(f,{errorColor:r.props.errorColorStart,value:r.props.startValue,onChangeInput:r.props.inputStartValue}))),a.a.createElement("div",{className:"interfaceManagement"},a.a.createElement(p,{onClickButton:r.props.set,buttonsTitle:r.props.buttons[2].buttonsTitle,access:r.props.buttons[2].access})))),a.a.createElement("div",{className:"bloks"},a.a.createElement("div",null,a.a.createElement("div",{className:"content"},a.a.createElement("div",null,a.a.createElement(v,{limit:r.props.limit,message:r.props.message}))),a.a.createElement("div",{className:"interfaceManagement"},a.a.createElement(p,{onClickButton:r.props.plusNumber,buttonsTitle:r.props.buttons[0].buttonsTitle,access:r.props.buttons[0].access}),a.a.createElement(p,{onClickButton:r.props.reset,buttonsTitle:r.props.buttons[1].buttonsTitle,access:r.props.buttons[1].access})))))},r}return Object(i.a)(t,e),t}(a.a.Component),x=Object(C.b)(function(e){return{errorColorMax:e.CounterReducer.limit.errorColorMax,errorColorStart:e.CounterReducer.limit.errorColorStart,maxValue:e.CounterReducer.limit.maxValue,startValue:e.CounterReducer.limit.startValue,limit:e.CounterReducer.limit,message:e.CounterReducer.message,buttons:e.CounterReducer.buttons}},{inputMaxValue:function(e){return{type:"INPUT_MAX_VALUE",event:e}},inputStartValue:function(e){return{type:"INPUT_START_VALUE",event:e}},plusNumber:function(){return{type:"PLUS_NUMBER"}},reset:function(){return{type:"RESET"}},set:function(){return{type:"SET"}}})(T);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var S=r(4),h=Object(S.b)({CounterReducer:N}),k=Object(S.c)(h);u.a.render(a.a.createElement(C.a,{store:k},a.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e,t,r){e.exports={buttons:"Button_buttons__3yrg6",disabledButton:"Button_disabledButton__1Tmh8",mousDown:"Button_mousDown__3sjvu"}},8:function(e,t,r){e.exports={colorNumberEnd:"ShowNumber_colorNumberEnd__qFYkM",colorNumberOk:"ShowNumber_colorNumberOk__bJJF_"}},9:function(e,t,r){e.exports={inputValue:"InputValue_inputValue__2rlCZ",backgroundError:"InputValue_backgroundError__RAU8h"}}},[[20,1,2]]]);
//# sourceMappingURL=main.1634b416.chunk.js.map