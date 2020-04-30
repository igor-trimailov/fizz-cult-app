(this["webpackJsonpfizz-cult-app"]=this["webpackJsonpfizz-cult-app"]||[]).push([[0],{67:function(e,t,a){e.exports=a(83)},80:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return Te}));var n={};a.r(n),a.d(n,"requestRoutinesData",(function(){return x})),a.d(n,"requestRoutines",(function(){return g})),a.d(n,"receiveRoutinesSuccess",(function(){return S})),a.d(n,"receiveRoutinesError",(function(){return I})),a.d(n,"orderRoutines",(function(){return O})),a.d(n,"orderExercises",(function(){return C})),a.d(n,"startExercise",(function(){return y})),a.d(n,"setExerciseDuration",(function(){return N})),a.d(n,"switchLocale",(function(){return j})),a.d(n,"finishExercise",(function(){return k})),a.d(n,"ActionTypes",(function(){return R}));var r=a(0),c=a.n(r),i=a(8),o=a.n(i);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=a(7),s=a(55),u=a(56),d=a(52),E=a(58),m=a.n(E),f=function(e){return function(e){return function(t){var a=e(t);return t.type,a}}},p=a(27),v=a(20),_=a(46),b=a.n(_),h=a(59),x=function(){return function(){var e=Object(h.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(g()),e.next=3,fetch("/fizz-cult-app/data.json").then((function(e){return e.json()})).then((function(e){console.log("fetced data",e),t(S(e))})).catch((function(e){console.warn("data fetch error",e),t(I("Could not fetch data"))}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},R={REQUEST_EXERCISES:"REQUEST_EXERCISES",RECEIVE_EXERCISES_SUCCESS:"RECEIVE_EXERCISES_SUCCESS",RECEIVE_EXERCISES_ERROR:"RECEIVE_EXERCISES_ERROR",ORDER_EXERCISES:"ORDER_EXERCISES",SET_EXERCISE_DURATION:"SET_EXERCISE_DURATION",FINISH_EXERCISE:"FINISH_EXERCISE",REQUEST_ROUTINES:"REQUEST_ROUTINES",RECEIVE_ROUTINES_SUCCESS:"RECEIVE_ROUTINES_SUCCESS",RECEIVE_ROUTINES_ERROR:"RECEIVE_ROUTINES_ERROR",ORDER_ROUTINES:"ORDER_ROUTINES",START_EXERCISE:"START_EXERCISE",STOP_EXERCISE:"STOP_EXERCISE",SWITCH_LOCALE:"SWITCH_LOCALE"};function g(){return{type:R.REQUEST_ROUTINES}}function S(e){return{type:R.RECEIVE_ROUTINES_SUCCESS,payload:e}}function I(e){return{type:R.RECEIVE_ROUTINES_ERROR,payload:e}}function O(e){return{type:R.ORDER_ROUTINES,payload:e}}function C(e){return{type:R.ORDER_EXERCISES,payload:e}}function y(e){return{type:R.START_EXERCISE,payload:e}}function N(e){return{type:R.SET_EXERCISE_DURATION,payload:e}}function j(e){return{type:R.SWITCH_LOCALE,payload:e}}function k(){return{type:R.FINISH_EXERCISE}}var T={defaultLocale:"en_GB",availableLocales:[{code:"en_GB",name:"English"},{code:"ru_RU",name:"\u0420\u0443\u0441\u0441\u043a\u0438\u0439"}],breakExercise:{id:-1,name:"Take a Break!",image:"break.png",image_alt:"Take a Break!",sound:"break.mp3",duration:5,type:"BREAK_EXERCISE"}},w=a(12),z=T.availableLocales.map((function(e){return Object(v.a)({},e,{selected:e.code===T.defaultLocale})}));var U={previous:null,current:null};var A=Object(l.combineReducers)({locales:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R.SWITCH_LOCALE:return e.map((function(e){return Object(v.a)({},e,{selected:e.code===t.payload})}));default:return e}},exercise:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R.START_EXERCISE:return null===e.current?Object(v.a)({},e,{current:t.payload}):{previous:e.current,current:t.payload};case R.STOP_EXERCISE:case R.FINISH_EXERCISE:return U;default:return e}},exercises:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R.RECEIVE_ROUTINES_SUCCESS:return t.payload.routines.reduce((function(e,t){return Object(v.a)({},e,Object(p.a)({},t.id,t.exercises))}),{});case R.ORDER_EXERCISES:var a=t.payload,n=a.routineId,r=a.exercises;return Object(v.a)({},e,Object(p.a)({},n,e[n].length===r.length?r:e));case R.SET_EXERCISE_DURATION:var c=t.payload,i=c.routineId,o=c.exerciseId,l=c.duration;return Object(v.a)({},e,Object(p.a)({},i,e[i].map((function(e){return e.id===o?Object(v.a)({},e,{duration:l}):e}))));default:return e}},routines:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R.RECEIVE_ROUTINES_SUCCESS:return t.payload.routines.map((function(e){return Object(w.omit)(e,"exercises")}));case R.ORDER_ROUTINES:return e.length===t.payload.length?t.payload:e;default:return e}}}),X={key:"root",whitelist:["locales","routines","exercises"],storage:m.a},D=Object(d.a)(X,A);var L=a(9),V=a(60),P=a(18),B=a(13),H=(a(80),a(28)),W=a(47),G=(a(81),a(5)),K=a.n(G);var M=c.a.memo((function(e){var t=e.play,a=e.playCallback,n=e.nextCallback,r=e.previousCallback,i=e.disabled,o=K()("exercise-controls",{"exercise-controls--disabled":i}),l=K()({"exercise-controls__play":!t,"exercise-controls__pause":t});return c.a.createElement("div",{className:o},c.a.createElement("span",{className:"exercise-controls__previous",onClick:r}),c.a.createElement("span",{className:l,onClick:function(){i||a()}}),c.a.createElement("span",{className:"exercise-controls__next",onClick:n}))})),F={en_GB:{header:{title:"Exercise Routines",nav:{about:"About",login:"Login"}},routines:{header:{heading:"Start your exercise by selecting one of the routines!",text:"Select one of the available routines and start your exercise! More routines will be available soonish"},routine:{buttons:{start:"Start exercise!"}}},exercises:{jumbotron:{h1:"Start your exercise by pressing start button!",p:"You can change the order of exercises by dragging them around. There will be a 5s break between exercises. Good Luck!",button:"Start exercise!"},exercise:{duration:"Duration",finished:{header:"Congratulations!",body:"If you feel like you can take on another routine, click on the button below. Otherwise we will see you next time!",button:"Go back to routines"}}},footer:null},ru_RU:{header:{title:"\u0424\u0438\u0437\u041a\u0443\u043b\u044c\u0442\u0410\u043f\u043f",nav:{about:"\u041e \u043d\u0430\u0441",login:"\u0412\u0445\u043e\u0434"}},routines:{jumbotron:{h1:"\u041d\u0430\u0447\u043d\u0438 \u0443\u043f\u0440\u0430\u0436\u043d\u0435\u043d\u0438\u044f \u0432\u044b\u0431\u0440\u0430\u0432 \u043e\u0434\u0438\u043d \u0438\u0437 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0445 \u0440\u0435\u0436\u0438\u043c\u043e\u0432!",p:"\u0427\u0442\u043e\u0431\u044b \u043d\u0430\u0447\u0430\u0442\u044c \u0443\u043f\u0440\u0430\u0436\u043d\u0435\u043d\u0438\u044f, \u0432\u044b\u0431\u0435\u0440\u0438 \u043e\u0434\u0438\u043d \u0438\u0437 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0445 \u043d\u0438\u0436\u0435 \u0440\u0435\u0436\u0438\u043c\u043e\u0432"},routine:{buttons:{start:"\u041d\u0430\u0447\u0430\u0442\u044c \u0443\u043f\u0440\u0430\u0436\u043d\u0435\u043d\u0438\u044f!"}}},exercises:{jumbotron:{h1:"\u041d\u0430\u0447\u043d\u0438 \u0437\u0430\u0440\u044f\u0434\u043a\u0443 \u043d\u0430\u0436\u0430\u0432 \u043a\u043d\u043e\u043f\u043a\u0443 \u0441\u0442\u0430\u0440\u0442!",p:"\u041f\u043e\u0440\u044f\u0434\u043e\u043a \u0443\u043f\u0440\u0430\u0436\u043d\u0435\u043d\u0438\u0439 \u043c\u043e\u0436\u043d\u043e \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u0435\u0440\u0435\u0442\u0430\u0441\u043a\u0438\u0432\u0430\u044f \u0438\u0445 \u043f\u0430\u043b\u044c\u0446\u0435\u043c. \u041c\u0435\u0436\u0434\u0443 \u0443\u043f\u0440\u0430\u0436\u043d\u0435\u043d\u0438\u044f\u043c\u0438 \u0431\u0443\u0434\u0435\u0442 5-\u0441\u0435\u043a\u0443\u043d\u0434\u043d\u044b\u0439 \u043f\u0435\u0440\u0435\u0440\u044b\u0432. \u0424\u0438\u0437\u043a\u0443\u043b\u044c\u0442 \u043f\u0440\u0438\u0432\u0435\u0442!",button:"\u0421\u0442\u0430\u0440\u0442!"},exercise:{duration:"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c",finished:{header:"\u041c\u043e\u043b\u043e\u0434\u0435\u0446!",body:"\u041e\u0441\u0442\u0430\u043b\u0441\u044f \u0438\u0437\u0431\u044b\u0442\u043e\u043a \u0441\u0438\u043b \u043d\u0430 \u0435\u0449\u0451 \u043e\u0434\u043d\u0443 \u0437\u0430\u0440\u044f\u0434\u043a\u0443? \u0416\u043c\u0438 \u043a\u043d\u043e\u043f\u043a\u0443 \u043d\u0438\u0436\u0435 \u0438 \u0432\u044b\u0431\u0438\u0440\u0430\u0439 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e \u0437\u0430\u0440\u044f\u0434\u043a\u0443! \u0410 \u0435\u0441\u043b\u0438 \u043d\u0435\u0442, \u0442\u043e \u0443\u0432\u0438\u0434\u0438\u043c\u0441\u044f \u0432 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0440\u0430\u0437",button:"\u041e\u0431\u0440\u0430\u0442\u043d\u043e \u043a \u0443\u043f\u0440\u0430\u0436\u043d\u0435\u043d\u0438\u044f\u043c"}}},footer:null}};var Q=function(e){var t=Object(L.c)((function(e){return e.locales})).find((function(e){return e.selected})),a=e.lt,n=e.item;return a?c.a.createElement("span",null,Object(w.get)(F,"".concat(t.code,".").concat(a))):n?c.a.createElement("span",null,"string"===typeof n?n:Object(w.get)(n,t.code)):c.a.createElement("span",null,"Undefined")},q=a(93),J=a(94);function Y(e){var t=e.actions,a=e.locales,n=a.find((function(e){return e.selected}));return c.a.createElement("div",{className:"locale-switcher"},c.a.createElement(q.a,{placement:"left",trigger:"click",rootClose:!0,overlay:c.a.createElement(J.a,{id:"popover-locale"},c.a.createElement(J.a.Content,null,c.a.createElement("div",{className:"locale-switcher__locale-list"},a.map((function(e){return c.a.createElement("div",{className:"locale-switcher__locale",key:"locale-".concat(e.code),onClick:function(){document.body.click(),t.switchLocale(e.code)}},c.a.createElement("div",{className:"locale-switcher__locale-flag"},c.a.createElement("img",{src:"/fizz-cult-app"+"/images/flag/".concat(e.code,".png"),alt:e.name})),c.a.createElement("div",{className:"locale-switcher__locale-name"},e.name))})))))},c.a.createElement("img",{src:"/fizz-cult-app"+"/images/flag/".concat(n.code,".png"),alt:n.name})))}var $=c.a.memo((function(e){var t=Object(P.h)();return c.a.createElement("div",{className:"header"},c.a.createElement("div",{className:"header__content"},c.a.createElement("div",{className:"header__title"},c.a.createElement(Q,{lt:"header.title"})),c.a.createElement("div",{className:"header__nav"},c.a.createElement("div",{className:"header__nav-item"},c.a.createElement(Q,{lt:"header.nav.about"})),c.a.createElement("div",{className:"header__nav-item"},c.a.createElement(B.b,{to:{pathname:"".concat("/fizz-cult-app","/account/login"),state:{background:t}}},"Login")),c.a.createElement("div",{className:"header__nav-item"},c.a.createElement(Y,e)))))}));var Z=function(){return c.a.createElement("div",{className:"footer"},c.a.createElement("div",{className:"footer__container"},c.a.createElement("div",{className:"footer__header"},"FizzCultApp"),c.a.createElement("div",{className:"footer__links"},c.a.createElement(B.b,null,"Privacy policy"),c.a.createElement(B.b,null,"Contact Us")),c.a.createElement("div",{className:"footer__social"},c.a.createElement("div",{className:"footer__social-item footer__social-item--twitter"}),c.a.createElement("div",{className:"footer__social-item footer__social-item--facebook"}),c.a.createElement("div",{className:"footer__social-item footer__social-item--instagram"}),c.a.createElement("div",{className:"footer__social-item footer__social-item--linkedin"})),c.a.createElement("div",{className:"footer__copyright"},"\xa9 2020 Igor, Inc. All Rights Reserved")))};function ee(){var e=Object(P.h)().pathname;return Object(r.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var te=function(){return window.AudioManager||(window.AudioManager=new Audio),window.AudioManager};function ae(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;if(e){var n=te();n.src="/fizz-cult-app/sounds/"+e;var r=function e(){n.removeEventListener("ended",e),0===(a-=1)?"function"===typeof t&&t():(n.addEventListener("ended",e),n.play())};n.addEventListener("ended",r),n.play()}else console.warn("Sound: "+e+" was not found")}function ne(e,t,a){if(e.destination&&e.destination.index!==e.source.index){var n=function(e,t,a){var n=Array.from(e),r=n.splice(t,1),c=Object(H.a)(r,1)[0];return n.splice(a,0,c),n}(t,e.source.index,e.destination.index);"function"===typeof a&&a(n)}}var re=a(90),ce=a(91),ie=a(64),oe=a(17),le=a(95),se=a(66),ue=a(88),de=a(89),Ee=a(42);var me=function(e){var t=e.actions,a=e.routineId,n=e.exercise,r=e.index;return e.locale,c.a.createElement(oe.b,{draggableId:n.id.toString(),index:r},(function(e){return c.a.createElement(se.a,Object.assign({ref:e.innerRef},e.draggableProps,e.dragHandleProps),c.a.createElement("div",{className:"exercise-list-item"},c.a.createElement("div",{className:"exercise-list-item__name"},c.a.createElement(Q,{item:n.name})),c.a.createElement("div",{className:"exercise-list-item__duration"},c.a.createElement(ue.a,{as:de.a,key:"".concat(n.id,"-duration"),id:"dropdown-button-drop-duration",drop:"down",variant:"secondary",title:c.a.createElement(Q,{item:{en_GB:"".concat(n.duration," s"),ru_RU:"".concat(n.duration," \u0441\u0435\u043a")}}),onSelect:function(e){t.setExerciseDuration({routineId:a,exerciseId:n.id,duration:e})}},c.a.createElement(Ee.a.Item,{eventKey:"15"},"15"),c.a.createElement(Ee.a.Item,{eventKey:"30"},"30"),c.a.createElement(Ee.a.Item,{eventKey:"45"},"45"),c.a.createElement(Ee.a.Item,{eventKey:"60"},"60")))))}))};var fe=function(e){var t=e.actions,a=e.routineId,n=e.exercises,r=e.onExerciseClick,i=e.locale,o=function(e){t.orderExercises({routineId:a,exercises:e})};return c.a.createElement(oe.a,{onDragEnd:function(e){ne(e,n,o)}},c.a.createElement(oe.c,{droppableId:"list"},(function(e){return c.a.createElement(le.a,Object.assign({ref:e.innerRef},e.droppableProps),n.map((function(e,n){return c.a.createElement(me,{actions:t,locale:i,exercise:e,routineId:a,index:n,key:e.id,selectExercise:r})})),e.placeholder)})))};var pe=function(e){var t=e.exercises,a=e.routineId,n=e.actions,r=e.locale,i=Object(P.g)();return c.a.createElement("div",{className:"exercises"},c.a.createElement(re.a,{fluid:!0},c.a.createElement(ce.a,null,c.a.createElement("h1",null,c.a.createElement(Q,{lt:"exercises.jumbotron.h1"})),c.a.createElement("p",null,c.a.createElement(Q,{lt:"exercises.jumbotron.p"})),c.a.createElement("p",null,c.a.createElement(ie.a,{variant:"secondary",onClick:function(){te();var e=t[0];e&&(n.startExercise(e),i.push("/fizz-cult-app"+"/routine/".concat(a,"/exercise/").concat(e.id)))}},c.a.createElement(Q,{lt:"exercises.jumbotron.button"}))))),c.a.createElement(fe,{actions:n,exercises:t,routineId:a,locale:r}))},ve=a(92);var _e=function(e){var t=e.routine,a=e.index,n=e.selectRoutine,r=function(){n(t.id)};return c.a.createElement(oe.b,{draggableId:t.id.toString(),index:a},(function(e){return c.a.createElement("div",Object.assign({className:"routines-list__item",ref:e.innerRef},e.draggableProps,e.dragHandleProps),c.a.createElement("div",{className:"routines-list__item-container"},c.a.createElement("div",{className:"routines-list__item-image"},c.a.createElement(ve.a,{src:"/fizz-cult-app/images/logo.png",fluid:!0})),c.a.createElement("div",{className:"routines-list__item-text"},c.a.createElement("div",{className:"routines-list__item-name"},c.a.createElement(Q,{item:t.name})),c.a.createElement("div",{className:"routines-list__item-description"},c.a.createElement(Q,{item:t.description}))),c.a.createElement("div",{className:"routines-list__item-button"},c.a.createElement(ie.a,{variant:"primary",onClick:r},c.a.createElement(Q,{lt:"routines.routine.buttons.start"})))))}))};function be(e){var t=e.heading,a=e.text,n=e.image;return c.a.createElement("div",{className:"fc-header"},c.a.createElement("div",{className:"fc-header__container"},c.a.createElement("div",{className:"fc-header__text"},c.a.createElement("div",{className:"fc-header__text-heading"},t),c.a.createElement("div",{className:"fc-header__text-text"},a)),n&&c.a.createElement("div",{className:"fc-header__image"},c.a.createElement(ve.a,{src:"/fizz-cult-app/images/"+n,fluid:!0}))))}var he=function(e){var t=e.actions,a=e.routines,n=Object(P.g)();Object(r.useEffect)((function(){t.requestRoutinesData()}),[t]);var i=function(e){t.orderRoutines(e)},o=function(e){n.push("/fizz-cult-app/routine/"+e)};return c.a.createElement("div",{className:"routines"},c.a.createElement(be,{heading:c.a.createElement(Q,{lt:"routines.header.heading"}),text:c.a.createElement(Q,{lt:"routines.header.text"}),image:"logo.png"}),c.a.createElement(oe.a,{onDragEnd:function(e){ne(e,a,i)}},c.a.createElement(oe.c,{droppableId:"list"},(function(e){return c.a.createElement("div",Object.assign({className:"routines-list",ref:e.innerRef},e.droppableProps),a.map((function(e,t){return c.a.createElement(_e,{routine:e,index:t,key:e.id,selectRoutine:o})})),e.placeholder)}))))};function xe(e,t){if(!e.current)return null;if(t.findIndex((function(t){return t.id===e.current.id}))===t.length-1)return null;if("BREAK_EXERCISE"!==e.current.type)return T.breakExercise;var a=t.findIndex((function(t){return t.id===e.previous.id}));return t[a+1]}var Re=Object(L.b)((function(e,t){var a=e.exercise,n=e.exercises,r=Object(w.get)(t,"match.params.routineId");return{config:T,routineId:r,exercise:a.current,previousExercise:a.previous,nextExercise:xe(a,n[r])}}),(function(e){return{actions:Object(l.bindActionCreators)(n,e)}}))((function(e){var t=e.exercise,a=e.nextExercise,n=e.actions,i=Object(r.useState)(Object(w.get)(t,"duration",30)),o=Object(H.a)(i,2),l=o[0],s=o[1],u=Object(r.useState)(!1),d=Object(H.a)(u,2),E=d[0],m=d[1],f=Object(r.useState)(!1),p=Object(H.a)(f,2),v=p[0],_=p[1],b=Object(r.useCallback)((function(e){e?(m(!1),s(e.duration),n.startExercise(e)):(m(!1),n.finishExercise())}),[n]),h=Object(r.useCallback)((function(){b(a)}),[b,a]),x=Object(r.useCallback)((function(){b(t)}),[b,t]),R=Object(r.useCallback)((function(){m(!E)}),[E]);return Object(r.useEffect)((function(){if(t){l!==t.duration||E||(_(!0),ae(t.sound,(function(){m(!0),_(!1)}))),0===l&&E&&ae("beep.wav",h,2),l<5&&0!==l&&ae("beep.wav");var e=setInterval((function(){E&&s(l-1)}),1e3);return function(){return clearInterval(e)}}}),[t,h,l,E]),t?c.a.createElement("div",{className:"exercise"},c.a.createElement("div",{className:"exercise__header"},c.a.createElement(Q,{item:t.name})),c.a.createElement("div",{className:"exercise__body"},c.a.createElement("div",{className:"exercise__image"},c.a.createElement("img",{src:"/fizz-cult-app/images/"+t.image,alt:t.image_alt})),c.a.createElement("div",{className:"exercise__timer"},c.a.createElement(W.a,{value:l,minValue:"0",maxValue:t.duration,text:l,styles:Object(W.b)({strokeLinecap:"butt",textSize:"20px",pathTransitionDuration:.5,pathColor:"#13a0c3",textColor:"#13a0c3",trailColor:"#d6d6d6",backgroundColor:"#3e98c7"})}))),c.a.createElement(Z,null,c.a.createElement(M,{play:E,playCallback:R,nextCallback:h,previousCallback:x,disabled:v}))):c.a.createElement(P.a,{to:"".concat("/fizz-cult-app","/finished")})})),ge=Object(L.b)((function(e,t){var a=Object(w.get)(t,"match.params.routineId");return{routineId:a,exercises:Object(w.get)(e,["exercises",a],[]),locale:e.locales.find((function(e){return e.selected}))}}),(function(e){return{actions:Object(l.bindActionCreators)(n,e)}}))(pe),Se=Object(L.b)((function(e){return{routines:e.routines}}),(function(e){return{actions:Object(l.bindActionCreators)(n,e)}}))(he),Ie=Object(L.b)((function(e){return{locales:e.locales}}),(function(e){return{actions:Object(l.bindActionCreators)(n,e)}}))($);var Oe=function(e){e.config;var t=e.subroute,a=Object(P.g)(),n=function(e){e.stopPropagation(),a.goBack()};return o.a.createPortal(c.a.createElement("div",{className:"fc-modal__wrapper",onClick:n},c.a.createElement("div",{className:"fc-modal"},c.a.createElement("h1",null,"Modal subroute: ",t),c.a.createElement("button",{type:"button",onClick:n},"Close"))),document.querySelector("#modal"))},Ce=Object(L.b)((function(e,t){var a=Object(w.get)(t,"match.params.subroute");return{config:T,subroute:a}}),(function(e){return{actions:Object(l.bindActionCreators)(n,e)}}))(Oe);var ye=function(){var e=Object(P.g)();return c.a.createElement("div",{className:"exercise-finished"},c.a.createElement("div",{className:"exercise-finished__header"},c.a.createElement(Q,{lt:"exercises.exercise.finished.header"})),c.a.createElement("div",{className:"exercise-finished__body"},c.a.createElement(Q,{lt:"exercises.exercise.finished.body"})),c.a.createElement("div",{className:"exercise-finished__footer"},c.a.createElement(ie.a,{onClick:function(){e.push("".concat("/fizz-cult-app","/"))}},c.a.createElement(Q,{lt:"exercises.exercise.finished.button"}))))},Ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=[f,s.a],a=l.applyMiddleware.apply(void 0,t),n=Object(u.composeWithDevTools)(a),r=Object(l.createStore)(D,e,n),c=Object(d.b)(r);return{store:r,persistor:c}}(),je=Ne.store,ke=Ne.persistor;function Te(){var e=Object(P.h)(),t=e.state&&e.state.background;return c.a.createElement("div",null,c.a.createElement(P.d,{location:t||e},c.a.createElement(P.b,{exact:!0,path:"/fizz-cult-app/routine/:routineId",component:ge}),c.a.createElement(P.b,{exact:!0,path:"/fizz-cult-app/routine/:routineId/exercise/:exerciseId",component:Re}),c.a.createElement(P.b,{exact:!0,path:"/fizz-cult-app/finished",component:ye}),c.a.createElement(P.b,{exact:!0,path:"/fizz-cult-app/account/login",component:Se}),c.a.createElement(P.b,{exact:!0,path:"/fizz-cult-app/",component:Se})),t&&c.a.createElement(P.b,{exact:!0,path:"/fizz-cult-app/account/:subroute",component:Ce}))}o.a.render(c.a.createElement(L.a,{store:je},c.a.createElement(V.a,{loading:null,persistor:ke},c.a.createElement(B.a,{onUpdate:function(){return window.scrollTo(0,0)}},c.a.createElement(Ie,null),c.a.createElement(ee,null),c.a.createElement(Te,null),c.a.createElement(Z,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[67,1,2]]]);
//# sourceMappingURL=main.b25fb025.chunk.js.map