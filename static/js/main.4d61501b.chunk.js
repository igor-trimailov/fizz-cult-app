(this["webpackJsonpfizz-cult-app"]=this["webpackJsonpfizz-cult-app"]||[]).push([[0],{68:function(e,t,n){e.exports=n(84)},81:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"requestRoutinesData",(function(){return S})),n.d(a,"requestRoutines",(function(){return x})),n.d(a,"receiveRoutinesSuccess",(function(){return I})),n.d(a,"receiveRoutinesError",(function(){return O})),n.d(a,"orderRoutines",(function(){return g})),n.d(a,"orderExercises",(function(){return C})),n.d(a,"startExercise",(function(){return y})),n.d(a,"setExerciseDuration",(function(){return j})),n.d(a,"switchLocale",(function(){return N})),n.d(a,"finishExercise",(function(){return T})),n.d(a,"ActionTypes",(function(){return h}));var r=n(0),c=n.n(r),i=n(8),o=n.n(i);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=n(7),s=n(56),u=n(57),E=n(53),d=n(59),m=n.n(d),f=function(e){return function(e){return function(t){var n=e(t);return t.type,n}}},p=n(28),b=n(20),v=n(47),_=n.n(v),R=n(60),S=function(){return function(){var e=Object(R.a)(_.a.mark((function e(t){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(x()),e.next=3,fetch("/fizz-cult-app/data.json").then((function(e){return e.json()})).then((function(e){console.log("fetced data",e),t(I(e))})).catch((function(e){console.warn("data fetch error",e),t(O("Could not fetch data"))}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},h={REQUEST_EXERCISES:"REQUEST_EXERCISES",RECEIVE_EXERCISES_SUCCESS:"RECEIVE_EXERCISES_SUCCESS",RECEIVE_EXERCISES_ERROR:"RECEIVE_EXERCISES_ERROR",ORDER_EXERCISES:"ORDER_EXERCISES",SET_EXERCISE_DURATION:"SET_EXERCISE_DURATION",FINISH_EXERCISE:"FINISH_EXERCISE",REQUEST_ROUTINES:"REQUEST_ROUTINES",RECEIVE_ROUTINES_SUCCESS:"RECEIVE_ROUTINES_SUCCESS",RECEIVE_ROUTINES_ERROR:"RECEIVE_ROUTINES_ERROR",ORDER_ROUTINES:"ORDER_ROUTINES",START_EXERCISE:"START_EXERCISE",STOP_EXERCISE:"STOP_EXERCISE",SWITCH_LOCALE:"SWITCH_LOCALE"};function x(){return{type:h.REQUEST_ROUTINES}}function I(e){return{type:h.RECEIVE_ROUTINES_SUCCESS,payload:e}}function O(e){return{type:h.RECEIVE_ROUTINES_ERROR,payload:e}}function g(e){return{type:h.ORDER_ROUTINES,payload:e}}function C(e){return{type:h.ORDER_EXERCISES,payload:e}}function y(e){return{type:h.START_EXERCISE,payload:e}}function j(e){return{type:h.SET_EXERCISE_DURATION,payload:e}}function N(e){return{type:h.SWITCH_LOCALE,payload:e}}function T(){return{type:h.FINISH_EXERCISE}}var w={defaultLocale:"en_GB",availableLocales:[{code:"en_GB",name:"English"},{code:"ru_RU",name:"\u0420\u0443\u0441\u0441\u043a\u0438\u0439"}],breakExercise:{id:-1,name:"Take a Break!",image:"break.png",image_alt:"Take a Break!",sound:"break.mp3",duration:5,type:"BREAK_EXERCISE"}},k=n(14),U=w.availableLocales.map((function(e){return Object(b.a)({},e,{selected:e.code===w.defaultLocale})}));var z={previous:null,current:null};var X=Object(l.combineReducers)({locales:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h.SWITCH_LOCALE:return e.map((function(e){return Object(b.a)({},e,{selected:e.code===t.payload})}));default:return e}},exercise:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h.START_EXERCISE:return null===e.current?Object(b.a)({},e,{current:t.payload}):{previous:e.current,current:t.payload};case h.STOP_EXERCISE:case h.FINISH_EXERCISE:return z;default:return e}},exercises:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h.RECEIVE_ROUTINES_SUCCESS:return t.payload.routines.reduce((function(e,t){return Object(b.a)({},e,Object(p.a)({},t.id,t.exercises))}),{});case h.ORDER_EXERCISES:var n=t.payload,a=n.routineId,r=n.exercises;return Object(b.a)({},e,Object(p.a)({},a,e[a].length===r.length?r:e));case h.SET_EXERCISE_DURATION:var c=t.payload,i=c.routineId,o=c.exerciseId,l=c.duration;return Object(b.a)({},e,Object(p.a)({},i,e[i].map((function(e){return e.id===o?Object(b.a)({},e,{duration:l}):e}))));default:return e}},routines:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h.RECEIVE_ROUTINES_SUCCESS:return t.payload.routines.map((function(e){return Object(k.omit)(e,"exercises")}));case h.ORDER_ROUTINES:return e.length===t.payload.length?t.payload:e;default:return e}}}),A={key:"root",whitelist:["locales","routines","exercises"],storage:m.a},D=Object(E.a)(A,X);var L=n(9),V=n(61),B=n(21),H=n(18),P=(n(81),n(29)),W=n(48),G=(n(82),n(5)),K=n.n(G);var M=c.a.memo((function(e){var t=e.play,n=e.playCallback,a=e.nextCallback,r=e.previousCallback,i=e.disabled,o=K()("exercise-controls",{"exercise-controls--disabled":i}),l=K()({"exercise-controls__play":!t,"exercise-controls__pause":t});return c.a.createElement("div",{className:o},c.a.createElement("span",{className:"exercise-controls__previous",onClick:r}),c.a.createElement("span",{className:l,onClick:function(){i||n()}}),c.a.createElement("span",{className:"exercise-controls__next",onClick:a}))})),Q={en_GB:{header:{title:"Exercise Routines",nav:{about:"About",login:"Login"}},routines:{jumbotron:{h1:"Start your exercise by selecting one of the routines!",p:"Select one of the available routines and start your exercise! More routines will be available soonish"},routine:{buttons:{start:"Start exercise!"}}},exercises:{jumbotron:{h1:"Start your exercise by pressing start button!",p:"You can change the order of exercises by dragging them around. There will be a 5s break between exercises. Good Luck!",button:"Start exercise!"},exercise:{duration:"Duration",finished:{header:"Congratulations!",body:"If you feel like you can take on another routine, click on the button below. Otherwise we will see you next time!",button:"Go back to routines"}}},footer:null},ru_RU:{header:{title:"\u0424\u0438\u0437\u041a\u0443\u043b\u044c\u0442\u0410\u043f\u043f",nav:{about:"\u041e \u043d\u0430\u0441",login:"\u0412\u0445\u043e\u0434"}},routines:{jumbotron:{h1:"\u041d\u0430\u0447\u043d\u0438 \u0443\u043f\u0440\u0430\u0436\u043d\u0435\u043d\u0438\u044f \u0432\u044b\u0431\u0440\u0430\u0432 \u043e\u0434\u0438\u043d \u0438\u0437 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0445 \u0440\u0435\u0436\u0438\u043c\u043e\u0432!",p:"\u0427\u0442\u043e\u0431\u044b \u043d\u0430\u0447\u0430\u0442\u044c \u0443\u043f\u0440\u0430\u0436\u043d\u0435\u043d\u0438\u044f, \u0432\u044b\u0431\u0435\u0440\u0438 \u043e\u0434\u0438\u043d \u0438\u0437 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0445 \u043d\u0438\u0436\u0435 \u0440\u0435\u0436\u0438\u043c\u043e\u0432"},routine:{buttons:{start:"\u041d\u0430\u0447\u0430\u0442\u044c \u0443\u043f\u0440\u0430\u0436\u043d\u0435\u043d\u0438\u044f!"}}},exercises:{jumbotron:{h1:"\u041d\u0430\u0447\u043d\u0438 \u0437\u0430\u0440\u044f\u0434\u043a\u0443 \u043d\u0430\u0436\u0430\u0432 \u043a\u043d\u043e\u043f\u043a\u0443 \u0441\u0442\u0430\u0440\u0442!",p:"\u041f\u043e\u0440\u044f\u0434\u043e\u043a \u0443\u043f\u0440\u0430\u0436\u043d\u0435\u043d\u0438\u0439 \u043c\u043e\u0436\u043d\u043e \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u0435\u0440\u0435\u0442\u0430\u0441\u043a\u0438\u0432\u0430\u044f \u0438\u0445 \u043f\u0430\u043b\u044c\u0446\u0435\u043c. \u041c\u0435\u0436\u0434\u0443 \u0443\u043f\u0440\u0430\u0436\u043d\u0435\u043d\u0438\u044f\u043c\u0438 \u0431\u0443\u0434\u0435\u0442 5-\u0441\u0435\u043a\u0443\u043d\u0434\u043d\u044b\u0439 \u043f\u0435\u0440\u0435\u0440\u044b\u0432. \u0424\u0438\u0437\u043a\u0443\u043b\u044c\u0442 \u043f\u0440\u0438\u0432\u0435\u0442!",button:"\u0421\u0442\u0430\u0440\u0442!"},exercise:{duration:"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c",finished:{header:"\u041c\u043e\u043b\u043e\u0434\u0435\u0446!",body:"\u041e\u0441\u0442\u0430\u043b\u0441\u044f \u0438\u0437\u0431\u044b\u0442\u043e\u043a \u0441\u0438\u043b \u043d\u0430 \u0435\u0449\u0451 \u043e\u0434\u043d\u0443 \u0437\u0430\u0440\u044f\u0434\u043a\u0443? \u0416\u043c\u0438 \u043a\u043d\u043e\u043f\u043a\u0443 \u043d\u0438\u0436\u0435 \u0438 \u0432\u044b\u0431\u0438\u0440\u0430\u0439 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e \u0437\u0430\u0440\u044f\u0434\u043a\u0443! \u0410 \u0435\u0441\u043b\u0438 \u043d\u0435\u0442, \u0442\u043e \u0443\u0432\u0438\u0434\u0438\u043c\u0441\u044f \u0432 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0440\u0430\u0437",button:"\u041e\u0431\u0440\u0430\u0442\u043d\u043e \u043a \u0443\u043f\u0440\u0430\u0436\u043d\u0435\u043d\u0438\u044f\u043c"}}},footer:null}};var F=function(e){var t=Object(L.c)((function(e){return e.locales})).find((function(e){return e.selected})),n=e.lt,a=e.item;return n?c.a.createElement("span",null,Object(k.get)(Q,"".concat(t.code,".").concat(n))):a?c.a.createElement("span",null,"string"===typeof a?a:Object(k.get)(a,t.code)):c.a.createElement("span",null,"Undefined")},q=n(95),J=n(97);function Y(e){var t=e.actions,n=e.locales,a=n.find((function(e){return e.selected}));return c.a.createElement("div",{className:"locale-switcher"},c.a.createElement(q.a,{placement:"left",overlay:c.a.createElement(J.a,{id:"popover-locale"},c.a.createElement(J.a.Content,null,c.a.createElement("div",{className:"locale-switcher__locale-list"},n.map((function(e){return c.a.createElement("div",{className:"locale-switcher__locale",key:"locale-".concat(e.code),onClick:function(n){n.preventDefault(),n.stopPropagation(),t.switchLocale(e.code)}},c.a.createElement("div",{className:"locale-switcher__locale-flag"},c.a.createElement("img",{src:"/fizz-cult-app"+"/images/flag/".concat(e.code,".png"),alt:e.name})),c.a.createElement("div",{className:"locale-switcher__locale-name"},e.name))})))))},c.a.createElement("img",{src:"/fizz-cult-app"+"/images/flag/".concat(a.code,".png"),alt:a.name})))}var $=c.a.memo((function(e){return c.a.createElement("div",{className:"header"},c.a.createElement("div",{className:"header__title"},c.a.createElement(F,{lt:"header.title"})),c.a.createElement("div",{className:"header__nav"},c.a.createElement("div",{className:"header__nav-item"},c.a.createElement(F,{lt:"header.nav.about"})),c.a.createElement("div",{className:"header__nav-item"},c.a.createElement(F,{lt:"header.nav.login"})),c.a.createElement("div",{className:"header__nav-item"},c.a.createElement(Y,e))))}));var Z=function(e){var t=e.children;return c.a.createElement("div",{className:"footer"},t)};function ee(){var e=Object(H.h)().pathname;return Object(r.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var te=function(){return window.AudioManager||(window.AudioManager=new Audio),window.AudioManager};function ne(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;if(e){var a=te();a.src="/fizz-cult-app/sounds/"+e;var r=function e(){a.removeEventListener("ended",e),0===(n-=1)?"function"===typeof t&&t():(a.addEventListener("ended",e),a.play())};a.addEventListener("ended",r),a.play()}else console.warn("Sound: "+e+" was not found")}function ae(e,t,n){if(e.destination&&e.destination.index!==e.source.index){var a=function(e,t,n){var a=Array.from(e),r=a.splice(t,1),c=Object(P.a)(r,1)[0];return a.splice(n,0,c),a}(t,e.source.index,e.destination.index);"function"===typeof n&&n(a)}}var re=n(91),ce=n(92),ie=n(65),oe=n(17),le=n(98),se=n(67),ue=n(89),Ee=n(90),de=n(43);var me=function(e){var t=e.actions,n=e.routineId,a=e.exercise,r=e.index;return e.locale,c.a.createElement(oe.b,{draggableId:a.id.toString(),index:r},(function(e){return c.a.createElement(se.a,Object.assign({ref:e.innerRef},e.draggableProps,e.dragHandleProps),c.a.createElement("div",{className:"exercise-list-item"},c.a.createElement("div",{className:"exercise-list-item__name"},c.a.createElement(F,{item:a.name})),c.a.createElement("div",{className:"exercise-list-item__duration"},c.a.createElement(ue.a,{as:Ee.a,key:"".concat(a.id,"-duration"),id:"dropdown-button-drop-duration",drop:"down",variant:"secondary",title:c.a.createElement(F,{item:{en_GB:"".concat(a.duration," s"),ru_RU:"".concat(a.duration," \u0441\u0435\u043a")}}),onSelect:function(e){t.setExerciseDuration({routineId:n,exerciseId:a.id,duration:e})}},c.a.createElement(de.a.Item,{eventKey:"15"},"15"),c.a.createElement(de.a.Item,{eventKey:"30"},"30"),c.a.createElement(de.a.Item,{eventKey:"45"},"45"),c.a.createElement(de.a.Item,{eventKey:"60"},"60")))))}))};var fe=function(e){var t=e.actions,n=e.routineId,a=e.exercises,r=e.onExerciseClick,i=e.locale,o=function(e){t.orderExercises({routineId:n,exercises:e})};return c.a.createElement(oe.a,{onDragEnd:function(e){ae(e,a,o)}},c.a.createElement(oe.c,{droppableId:"list"},(function(e){return c.a.createElement(le.a,Object.assign({ref:e.innerRef},e.droppableProps),a.map((function(e,a){return c.a.createElement(me,{actions:t,locale:i,exercise:e,routineId:n,index:a,key:e.id,selectExercise:r})})),e.placeholder)})))};var pe=function(e){var t=e.exercises,n=e.routineId,a=e.actions,r=e.locale,i=Object(H.g)();return c.a.createElement("div",{className:"exercises"},c.a.createElement(re.a,{fluid:!0},c.a.createElement(ce.a,null,c.a.createElement("h1",null,c.a.createElement(F,{lt:"exercises.jumbotron.h1"})),c.a.createElement("p",null,c.a.createElement(F,{lt:"exercises.jumbotron.p"})),c.a.createElement("p",null,c.a.createElement(ie.a,{variant:"secondary",onClick:function(){te();var e=t[0];e&&(a.startExercise(e),i.push("/fizz-cult-app"+"/routine/".concat(n,"/exercise/").concat(e.id)))}},c.a.createElement(F,{lt:"exercises.jumbotron.button"}))))),c.a.createElement(fe,{actions:a,exercises:t,routineId:n,locale:r}))},be=n(93),ve=n(94),_e=n(96);var Re=function(e){var t=e.routine,n=e.index,a=e.selectRoutine,r=function(){a(t.id)};return c.a.createElement(oe.b,{draggableId:t.id.toString(),index:n},(function(e){return c.a.createElement(_e.a,Object.assign({ref:e.innerRef},e.draggableProps,e.dragHandleProps,{border:"light"}),c.a.createElement(_e.a.Body,null,c.a.createElement(_e.a.Title,null,c.a.createElement(F,{item:t.name})),c.a.createElement(_e.a.Text,null,c.a.createElement(F,{item:t.description})),c.a.createElement(ie.a,{variant:"primary",onClick:r},c.a.createElement(F,{lt:"routines.routine.buttons.start"}))))}))};var Se=function(e){var t=e.actions,n=e.routines,a=Object(H.g)();Object(r.useEffect)((function(){t.requestRoutinesData()}),[t]);var i=function(e){t.orderRoutines(e)},o=function(e){a.push("/fizz-cult-app/routine/"+e)};return c.a.createElement("div",{className:"routines"},c.a.createElement(re.a,{fluid:!0},c.a.createElement(ce.a,null,c.a.createElement("div",{className:"routines__jumbotron"},c.a.createElement("div",{className:"routines__jumbotron-text"},c.a.createElement("h2",null,c.a.createElement(F,{lt:"routines.jumbotron.h1"})),c.a.createElement("p",null,c.a.createElement(F,{lt:"routines.jumbotron.p"}))),c.a.createElement("div",{className:"routines__jumbotron-image"},c.a.createElement(be.a,{src:"/fizz-cult-app/images/logo.png",fluid:!0}))))),c.a.createElement(oe.a,{onDragEnd:function(e){ae(e,n,i)}},c.a.createElement(oe.c,{droppableId:"list"},(function(e){return c.a.createElement(ve.a,Object.assign({ref:e.innerRef},e.droppableProps),n.map((function(e,t){return c.a.createElement(Re,{routine:e,index:t,key:e.id,selectRoutine:o})})),e.placeholder)}))))};function he(e,t){if(!e.current)return null;if(t.findIndex((function(t){return t.id===e.current.id}))===t.length-1)return null;if("BREAK_EXERCISE"!==e.current.type)return w.breakExercise;var n=t.findIndex((function(t){return t.id===e.previous.id}));return t[n+1]}var xe=Object(L.b)((function(e,t){var n=e.exercise,a=e.exercises,r=Object(k.get)(t,"match.params.routineId");return{config:w,routineId:r,exercise:n.current,previousExercise:n.previous,nextExercise:he(n,a[r])}}),(function(e){return{actions:Object(l.bindActionCreators)(a,e)}}))((function(e){var t=e.exercise,n=e.nextExercise,a=e.actions,i=Object(r.useState)(Object(k.get)(t,"duration",30)),o=Object(P.a)(i,2),l=o[0],s=o[1],u=Object(r.useState)(!1),E=Object(P.a)(u,2),d=E[0],m=E[1],f=Object(r.useState)(!1),p=Object(P.a)(f,2),b=p[0],v=p[1],_=Object(r.useCallback)((function(e){e?(m(!1),s(e.duration),a.startExercise(e)):(m(!1),a.finishExercise())}),[a]),R=Object(r.useCallback)((function(){_(n)}),[_,n]),S=Object(r.useCallback)((function(){_(t)}),[_,t]),h=Object(r.useCallback)((function(){m(!d)}),[d]);return Object(r.useEffect)((function(){if(t){l!==t.duration||d||(v(!0),ne(t.sound,(function(){m(!0),v(!1)}))),0===l&&d&&ne("beep.wav",R,2),l<5&&0!==l&&ne("beep.wav");var e=setInterval((function(){d&&s(l-1)}),1e3);return function(){return clearInterval(e)}}}),[t,R,l,d]),t?c.a.createElement("div",{className:"exercise"},c.a.createElement("div",{className:"exercise__header"},c.a.createElement(F,{item:t.name})),c.a.createElement("div",{className:"exercise__body"},c.a.createElement("div",{className:"exercise__image"},c.a.createElement("img",{src:"/fizz-cult-app/images/"+t.image,alt:t.image_alt})),c.a.createElement("div",{className:"exercise__timer"},c.a.createElement(W.a,{value:l,minValue:"0",maxValue:t.duration,text:l,styles:Object(W.b)({strokeLinecap:"butt",textSize:"20px",pathTransitionDuration:.5,pathColor:"#13a0c3",textColor:"#13a0c3",trailColor:"#d6d6d6",backgroundColor:"#3e98c7"})}))),c.a.createElement(Z,null,c.a.createElement(M,{play:d,playCallback:h,nextCallback:R,previousCallback:S,disabled:b}))):c.a.createElement(H.a,{to:"".concat("/fizz-cult-app","/finished")})})),Ie=Object(L.b)((function(e,t){var n=Object(k.get)(t,"match.params.routineId");return{routineId:n,exercises:Object(k.get)(e,["exercises",n],[]),locale:e.locales.find((function(e){return e.selected}))}}),(function(e){return{actions:Object(l.bindActionCreators)(a,e)}}))(pe),Oe=Object(L.b)((function(e){return{routines:e.routines}}),(function(e){return{actions:Object(l.bindActionCreators)(a,e)}}))(Se),ge=Object(L.b)((function(e){return{locales:e.locales}}),(function(e){return{actions:Object(l.bindActionCreators)(a,e)}}))($);var Ce=function(){var e=Object(H.g)();return c.a.createElement("div",{className:"exercise-finished"},c.a.createElement("div",{className:"exercise-finished__header"},c.a.createElement(F,{lt:"exercises.exercise.finished.header"})),c.a.createElement("div",{className:"exercise-finished__body"},c.a.createElement(F,{lt:"exercises.exercise.finished.body"})),c.a.createElement("div",{className:"exercise-finished__footer"},c.a.createElement(ie.a,{onClick:function(){e.push("".concat("/fizz-cult-app","/"))}},c.a.createElement(F,{lt:"exercises.exercise.finished.button"}))))},ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=[f,s.a],n=l.applyMiddleware.apply(void 0,t),a=Object(u.composeWithDevTools)(n),r=Object(l.createStore)(D,e,a),c=Object(E.b)(r);return{store:r,persistor:c}}(),je=ye.store,Ne=ye.persistor;o.a.render(c.a.createElement(L.a,{store:je},c.a.createElement(V.a,{loading:null,persistor:Ne},c.a.createElement(ge,null),c.a.createElement(B.a,{onUpdate:function(){return window.scrollTo(0,0)}},c.a.createElement(ee,null),c.a.createElement(H.d,null,c.a.createElement(H.b,{exact:!0,path:"/fizz-cult-app/routine/:routineId",component:Ie}),c.a.createElement(H.b,{exact:!0,path:"/fizz-cult-app/routine/:routineId/exercise/:exerciseId",component:xe}),c.a.createElement(H.b,{exact:!0,path:"/fizz-cult-app/finished",component:Ce}),c.a.createElement(H.b,{exact:!0,path:"/fizz-cult-app/",component:Oe}))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[68,1,2]]]);
//# sourceMappingURL=main.4d61501b.chunk.js.map