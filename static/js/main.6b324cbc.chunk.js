(this["webpackJsonpreact-waves-example"]=this["webpackJsonpreact-waves-example"]||[]).push([[0],{17:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a(2),s=a.n(i),o=a(11),r=a.n(o),c=(a(17),a(4)),l=a(3),d=a(6),u=a(5),h=a(7),b=a.p+"static/media/africa.75630254.mp3",v=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).onPosChange=function(e,t){e!==n.state.pos&&n.setState({pos:e,wavesurfer:t})},n.skipAhead=function(){n.state.wavesurfer.seekTo(n.secondsToPosition(n.state.pos+10))},n.secondsToPosition=function(e){return 1/n.state.wavesurfer.getDuration()*e},n.state={wavesurfer:null,playing:!1,pos:0},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{className:"container example",children:[Object(n.jsx)("div",{className:"play button",onClick:function(){e.setState({playing:!e.state.playing})},style:{left:"-99px"},children:this.state.playing?"\u23f9":"\u25b6\ufe0f"}),Object(n.jsx)("div",{className:"skip button",onClick:this.state.wavesurfer&&this.skipAhead,style:this.state.wavesurfer?{}:{opacity:".4",cursor:"default"},children:"\u23e9"}),Object(n.jsx)(h.b,{audioFile:b,className:"react-waves",options:{barHeight:2,cursorWidth:0,height:200,hideScrollbar:!0,progressColor:"#EC407A",responsive:!0,waveColor:"#D1D6DA"},volume:1,zoom:1,playing:this.state.playing,pos:this.state.pos,onPosChange:this.onPosChange})]})}}]),a}(s.a.Component),p=a(8),m=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={micRecord:!1,micInstance:{}},n.mediaRecorder={},n.audioChunks=[],n.micCallback=n.micCallback.bind(Object(p.a)(n)),n.handleStream=n.handleStream.bind(Object(p.a)(n)),n.handleAudioOutput=n.handleAudioOutput.bind(Object(p.a)(n)),n.toggleMic=n.toggleMic.bind(Object(p.a)(n)),n.startMic=n.startMic.bind(Object(p.a)(n)),n.stopMic=n.stopMic.bind(Object(p.a)(n)),n}return Object(l.a)(a,[{key:"micCallback",value:function(e){var t=e.micInstance,a=e.stream;t?this.setState({micInstance:t}):a&&this.handleStream(a)}},{key:"handleStream",value:function(e){var t=this;this.mediaRecorder=new MediaRecorder(e),this.mediaRecorder.start(),this.mediaRecorder.addEventListener("dataavailable",(function(e){t.audioChunks.push(e.data)}))}},{key:"handleAudioOutput",value:function(){var e=this;return new Promise((function(t){e.mediaRecorder.addEventListener("stop",(function(){var a=new Blob(e.audioChunks),n=URL.createObjectURL(a),i=new Audio(n);t({audioBlob:a,audioUrl:n,play:function(){i.play()}})})),e.mediaRecorder&&"recording"===e.mediaRecorder.state&&e.mediaRecorder.stop()}))}},{key:"toggleMic",value:function(){this.state.micRecord?this.stopMic():this.startMic()}},{key:"startMic",value:function(){this.state.micInstance.active||(this.state.micInstance.start(),this.setState({micRecord:!0}))}},{key:"stopMic",value:function(){var e=this;this.state.micInstance.active&&(this.state.micInstance.stop(),console.log("stopping"),this.handleAudioOutput().then((function(t){t.audioBlob;var a=t.audioUrl;e.setState({micRecord:!1,audio:a})})))}},{key:"render",value:function(){return Object(n.jsxs)("div",{className:"container example",children:[Object(n.jsx)("div",{className:"mic button",onClick:this.toggleMic,children:this.state.micRecord?"\u23f9":"\u23fa"}),Object(n.jsx)(h.b,{className:"react-waves",options:{barHeight:4,barWidth:2,cursorWidth:0,height:200,hideScrollbar:!0,progressColor:"#EC407A",responsive:!0,waveColor:"#D1D6DA"},playing:this.state.micRecord,volume:1,zoom:1,micCallback:this.micCallback})]})}}]),a}(s.a.Component),g=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).onLoading=function(e){var t=e.wavesurfer,a=e.originalArgs,i=void 0===a?[]:a;n.setState({loaded:100===i[0],wavesurfer:t})},n.onPosChange=function(e,t){e!==n.state.pos&&n.setState({pos:e,wavesurfer:t})},n.secondsToPosition=function(e){return 1/n.state.wavesurfer.getDuration()*e},n.zoom=function(e){var t=n.state.wavesurfer,a=t.params.minPxPerSec;"in"===e?t.zoom(a+1):"out"===e&&a>1&&t.zoom(a-1)},n.removeRegion=function(e){n.state.wavesurfer.regions.list[e]&&n.state.wavesurfer.regions.list[e].remove()},n.resetRegions=function(){n.state.wavesurfer.regions.list.One||n.state.wavesurfer.addRegion({id:"One",start:40,end:60,color:"rgba(100, 149, 240, 0.3)"}),n.state.wavesurfer.regions.list.Two||n.state.wavesurfer.addRegion({id:"Two",start:75,end:100,color:"rgba(100, 149, 240, 0.3)"})},n.handleSingleRegionUpdate=function(e){var t=Object.assign(n.state,{regions:{[e.region.id]:e.region}});n.setState(t)},n.handleRegionClick=function(e){setTimeout((function(){n.state.wavesurfer.seekTo(n.secondsToPosition(e.originalArgs[0].start))}),50)},n.handleRegionDone=function(){n.setState({playing:!1})},n.state={wavesurfer:null,playing:!1,pos:0,activeRegion:"One",regions:{One:{id:"One",start:40,end:60,color:"rgba(100, 149, 240, 0.3)"},Two:{id:"Two",start:75,end:100,color:"rgba(100, 149, 240, 0.3)"}}},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{className:"container example",children:[Object(n.jsx)("div",{className:"play button",onClick:function(){e.setState({playing:!e.state.playing})},children:this.state.playing?"\u23f9":"\u25b6\ufe0f"}),Object(n.jsx)(h.b,{audioFile:b,className:"react-waves",options:{barGap:2,barWidth:1.8,barHeight:2,cursorWidth:0,height:200,hideScrollbar:!0,progressColor:"#EC407A",responsive:!0,waveColor:"#D1D6DA"},volume:1,zoom:1,pos:this.state.pos,playing:this.state.playing,onPosChange:this.onPosChange,onLoading:this.onLoading,children:Object(n.jsx)(h.a,{onSingleRegionUpdate:this.handleSingleRegionUpdate,onSingleRegionIn:function(){},onSingleRegionOut:function(){},onSingleRegionRemove:function(){},onSingleRegionClick:function(){},onSingleRegionOver:function(){},onSingleRegionLeave:function(){},onRegionClick:this.handleRegionClick,onRegionIn:function(){},onRegionOut:this.handleRegionDone,onRegionRemove:function(){},onRegionDblclick:function(){},onRegionOver:function(){},onRegionLeave:function(){},regions:this.state.regions})}),Object(n.jsxs)("div",{className:"zoom-buttons",children:[Object(n.jsx)("div",{className:"zoom-in button",onClick:this.zoom.bind(this,"in"),children:"\u2795\ufe0f"}),Object(n.jsx)("div",{className:"zoom-out button",onClick:this.zoom.bind(this,"out"),children:"\u2796\ufe0f"}),Object(n.jsxs)("div",{className:"remove-region-1 button",onClick:this.removeRegion.bind(this,"One"),children:["\ud83d\uded1 ",Object(n.jsx)("span",{children:"1"})]}),Object(n.jsxs)("div",{className:"remove-region-2 button",onClick:this.removeRegion.bind(this,"Two"),children:["\ud83d\uded1 ",Object(n.jsx)("span",{children:"2"})]}),Object(n.jsx)("div",{className:"reset button",onClick:this.resetRegions,children:"Reset"})]})]})}}]),a}(s.a.Component),j=a.p+"static/media/demo.6fadb4d7.wav",f=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).onLoading=function(e){var t=e.wavesurfer,a=e.originalArgs,i=void 0===a?[]:a;n.setState({loaded:100===i[0],wavesurfer:t})},n.onPosChange=function(e,t){e!==n.state.pos&&n.setState({pos:e,wavesurfer:t})},n.state={wavesurfer:null,playing:!1,pos:0},n}return Object(l.a)(a,[{key:"defaultFormatTimeCallback",value:function(e,t){if(e/60>1){var a=parseInt(e/60,10);return e=(e=parseInt(e%60,10))<10?"0"+e:e,"".concat(a,":").concat(e)}return Math.round(1e3*e)/1e3}},{key:"defaultTimeInterval",value:function(e){return e>=25?1:5*e>=25?5:15*e>=25?15:60*Math.ceil(.5/e)}},{key:"defaultPrimaryLabelInterval",value:function(e){return e>=25?10:5*e>=25?6:4}},{key:"defaultSecondaryLabelInterval",value:function(e){return e>=25?5:2}},{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{className:"container example",children:[Object(n.jsx)("div",{className:"play button",onClick:function(){e.setState({playing:!e.state.playing})},children:this.state.playing?"\u23f9":"\u25b6\ufe0f"}),Object(n.jsx)(h.b,{audioFile:j,options:{barGap:1,barWidth:.8,barHeight:2,cursorWidth:1,height:150,hideScrollbar:!0,progressColor:"#EC407A",normalize:!0,responsive:!0,waveColor:"#D1D6DA"},volume:1,zoom:1,pos:this.state.pos,playing:this.state.playing,onPosChange:this.onPosChange,onLoading:this.onLoading,timelineOptions:{container:"#timeline",height:20,notchPercentHeight:90,labelPadding:5,unlabeledNotchColor:"#c0c0c0",primaryColor:"#000",secondaryColor:"#c0c0c0",primaryFontColor:"#000",secondaryFontColor:"#000",fontFamily:"Arial",fontSize:10,duration:null,zoomDebounce:!1,formatTimeCallback:this.defaultFormatTimeCallback,timeInterval:this.defaultTimeInterval,primaryLabelInterval:this.defaultPrimaryLabelInterval,secondaryLabelInterval:this.defaultSecondaryLabelInterval,offset:0}}),Object(n.jsx)("div",{id:"timeline",style:{width:"650px",margin:"0 auto"}})]})}}]),a}(s.a.Component),O=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).getAudioPeaks=function(){return[.159,-.191,.006,-.327,.153,-.123,.107,-.054,.071,-.079,.282,-.036,.163,-.173,.118,-.088,.255,-.142,.062,-.093,.283,-.105,.017,-.223,.092,-.112,.113,-.231,.043,-.265,.025,-.478,.087,-.405,.209,-.436,.154,-.091,.116,-.277,.066,-.185,.19,-.184,.088,-.213,.086,-.237,.1,-.096,.198,-.144,.198,-.138,.094,-.084,.138,-.139,.25,-.296,.067,-.192,.078,-.09,.166,-.2,.088,-.064,.176,-.052,.084,-.131,.219,-.441,.229,-.16,.393,-.051,.391,-.121,.164,-.205,.176,-.079,.127,-.237,.13,-.194,.216,-.311,.058,-.244,.04,-.357,.064,-.368,.124,-.088,.141,-.27,.153,-.104,.071,-.313,.04,-.058,.035,-.132,.133,-.051,.411,-.443,.09,-.185,.276,-.102,.259,-.238,.273,-.128,.254,-.102,.381,-.104,.206,-.159,.16,-.111,.087,-.06,.084,-.162,.312,-.066,.171,-.245,.097,-.295,.265,-.154,.147,-.399,.214,-.136,.02,-.254,.111,-.281,.255,-.249,.194,-.072,.199,-.092,.211,-.122,.266,-.104,.193,-.236,.082,-.197,.21,-.035,.301,-.169,.292,-.177,.192,-.167,.097,-.104,.244,-.134,.24,-.105,.245,-.041,.55,-.26,.147,-.07,.201,-.164,.058,-.297,.332,-.104,.342,-.168,.144,-.14,.075,-.077,.114,-.18,.117,-.08,.1,-.095,.303,-.042,.394,-.228,.337,-.248,.339,-.002,.024,-.089,.057,-.109,.283,-.098,.208,-.166,.029,-.155,.178,-.041,.102,-.332,.068,-.116,.105,-.047,.37,-.087,.277,-.099,.116,-.143,.245,-.185,.059,-.328,.159,-.061,.298,-.358,.34,-.104,.176,-.291,.221,-.124,.044,-.002,.384,-.195,.082,-.125,.078,-.133,.442,-.07,.245,-.268,.328,-.121,.047,-.16,.573,-.21,.379,-.347,.162,-.343,.104,-.122,.461,-.147,.452,-.154,.253,-.173,.177,-.152,.177,-.188,.474,-.148,.429,-.219,.1,-.166,.146,-.075,.131,-.098,.098,-.28,.105,-.151,.228,-.103,.154,-.214,.292,-.101,.096,-.12,.48,-.171,.242,-.091,.156,-.192,.314,-.066,.196,-.208,.139,-.298,.223,-.093,.266,-.057,.181,-.26,.269,-.088,.235,-.192,.544,-.17,.229,-.118,.219,-.338,.145,-.063,.123,-.077,.178,-.042,.147,-.253,.076,-.249,.297,-.134,.203,-.223,.041,-.146,.182,-.154,.209,-.193,.141,-.068,.277,-.198,.186,-.28,.239,-.19,.287,-.074,.193,-.15,.31,-.244,.05,-.071,.253,-.179,.155,-.087,.163,-.049,.075,-.063,.038,-.079,.104,-.09,.098,-.307,.226,-.205,.084,-.125,.125,-.017,.081,-.057,.139,-.065,.057,-.046,.241,-.145,.136,-.068,.129,-.085,.152,-.129,.116,-.189,.158,-.204,.142,-.103,.244,-.03,.099,-.116,.065,-.202,.278,-.069,.082,-.412,.06,-.218,.133,-.065,.151,-.153,.114,-.036,.123,-.149,.131,-.083,.231,-.139,.12,-.11,.167,-.085,.195,-.231,.171,-.261,.069,-.216,.184,-.142,.177,-.127,.161,-.179,.294,-.138,.093,-.161,.167,-.25,.143,-.158,.365,-.188,.148,-.17,.058,-.411,.142,-.139,.089,-.23,.075,-.113,.192,-.104,.1,-.19,.13,-.132,.105,-.321,.173,-.371,.193,-.37,.157,-.039,.07,-.059,.433,-.059,.301,-.074,.153,-.078,.121,-.056,.065,-.18,.129,-.233,.114,-.02,.069,-.216,.171,-.304,.16,-.03,.079,-.249,.216,-.279,.071,-.124,.172,-.2,.127,-.163,.122,-.307,.294,-.309,.214,-.05,.143,-.049,.245,-.105,.075,-.109,.073,-.056,.082,-.003,.396,-.109,.213,-.094,.163,-.215,.181,-.22,.062,-.337,.356,-.23,.229,-.278,.122,-.086,.146,-.094,.133,-.093,.093,-.087,.02,-.068,.386,-.241,.213,-.018,.174,-.098,.228,-.081,.606,-.107,.232,-.01,.179,-.057,.042,-.188,.088,-.234,.124,-.094,.162,-.49,.098,-.105,.193,-.173,.019,-.097,.166,-.096,.475,-.449,.355,-.081,.281,-.106,.259,-.057,.603,-.081,.18,-.347,.155,-.075,.389,-.139,.189,-.207,.074,-.241,.007,-.106,.102,-.116,.152,-.291,.494,-.038,.094,-.323,.148,-.107,.233,-.307,.281,-.143,.171,-.033,.043,-.17,.117,-.459,.2,-.046,.054,-.22,.069,-.054,.038,-.113,.075,-.1,.244,-.238,.193,-.041,.083,-.145,.028,-.272,.189,-.083,.135,-.228,.331,-.207,.17,-.156,.219,-.111,.196,-.16,.176,-.067,.085,-.178,.209,-.092,.099,-.321,.07,-.092,.056,-.115,.175,-.188,.095,-.234,.171,-.126,.098,-.13,.076,-.091,.009,-.141,.243,-.121,.219,-.377,.153,-.305,.598,-.083,.157,-.053,.198,-.106,.11,-.106,.189,-.018,.116,-.052,.452,-.066,.111,-.062,.043,-.113,.299,-.108,.097,-.106,.025,-.053,.112,-.064,.247,-.054,.327,-.323,.325,-.064,.14,-.129,.003,-.249,.254,-.13,.078,-.123,.142,-.109,.153,-.112,.132,-.082,.367,-.116,.145,-.112,.076,-.103,.092,-.148,.303,-.116,.107,-.06,.2,-.034,.035,-.099,.005,-.205,.178,-.132,.318,-.119,.041,-.099,.197,-.022,.161,-.198,.102,-.196,.238,-.121,.345,-.123,.268,-.057,.173,-.035,.11,-.032,.113,-.192,.063,-.09,.139,-.027,.13,-.072,.175,-.07,.156,-.163,.126,-.044,.094,-.036,.08,-.037,.042,-.226,.026,-.251,.029,-.019,.169,-.049,.22,-.325,.158,-.303,.145,-.166,.058,-.197,.088,-.203,.24,-.175,.115,-.094,.061,-.192,.101,-.211,.126,-.088,.205,-.004,.153,-.214,.377,-.017,.076,-.046,.157,-.124,.142,-.408,.1,-.037,.151,-.166,.16,-.095,.032,-.107,.09,-.118,.016,-.092,.085,-.054,.173,-.146,.199,-.205,.065,-.043,.082,-.185,.108,-.202,.114,-.284,.196,-.097,.146,-.114,.122,-.098,.137,-.158,.105,-.031,.121,-.115,.462,-.184,.091,-.118,.038,-.066,.058,-.149,.09,-.15,.106,-.162,.116,-.028,.374,-.104,.083,-.04,.162,-.007,.025,-.106,.03,-.043,.401,-.029,.11,-.135,.2,-.117,.073,-.09,.01,-.373,.01,-.183,.218,-.147,.028,-.131,.075,-.138,.144,-.156,.079,-.215,.1,-.107,.064,-.051,.058,-.058,.104,-.217,.077,-.168,.209,-.046,.273,-.105,.067,-.063,.061,-.041,.084,-.103,.048,-.298,.203,-.111,.368,-.121,.124,-.143,.081,-.123,.375,-.175,.417,-.227,.159,-.025,.256,-.18,.141,-.057,.081,-.151,.336,-.068,.178,-.35,.238,-.277,.14,-.059,.132,-.275,.038,-.19,.274,-.17,.065,-.085,.294,-.078,.015,-.162,.093,-.104,.067,-.145,.297,-.106,.183,-.204,.055,-.177,.109,-.119,.14,-.085,.138,-.052,.01,-.103,.036,-.083,.175,-.031,.275,-.114,.06,-.262,.162,-.08,.248,-.071,.49,-.12,.107,-.229,.065,-.157,.237,-.117,.227,-.085,.109,-.089,.095,-.122,.233,-.144,.076,-.011,.203,-.132,.296,-.073,.112,-.124,.155,-.104,.241,-.274,.055,-.047,.102,-.056,.163,-.071,.118,-.017,.071,-.115,.113,-.191,.073,-.085,.057,-.252,.117,-.05,.236,-.244,.001,-.167,.229,-.18,.059,-.097,.241,-.23,.157,-.133,.367,-.11,.06,-.089,.073,-.056,.104,-.066,.117,-.07,.109,-.115,.062,-.23,.138,-.134,.162,-.169,.205,-.138,.132,-.158,.157,-.2,.339,-.215,.329,-.2,.122,-.222,.08,-.208,.339,-.088,.087,-.055,.082,-.257,.053,-.235,.199,-.151,.188,-.235,.169,-.233,.24,-.06,.059,-.256,.153,-.179,.134,-.181,.364,-.007,.144,-.16,.178,-.3,.167,-.187,.085,-.139,.172,-.14,.138,-.247,.067,-.074,.145,-.12,.056,-.166,.176,-.088,.139,-.14,.101,-.069,.151,-.131,.074,-.041,.033,-.034,.083,-.054,.064,-.059,.131,-.157,.243,-.181,.062,-.079,.123,-.218,.102,-.082,.102,-.093,.045,-.057,.098,-.216,.043,-.149,.011,-.063,.053,-.27,.189,-.173,.129,-.127,.221,-.169,.055,-.253,.055,-.16,.081,-.171,.084,-.015,.036,-.105,.171,-.152,.099,-.025,.15,-.093,.138,-.032,.038,-.041,.194,-.376,.055,-.121,.239,-.131,.146,-.285,.063,-.314,.092,-.284,.094,-.309,.135,-.141,.128,-.255,.036,-.201,.059,-.069,.092,-.109,.038,-.08,.137,-.094,.06,-.034,.047,-.034,.085,-.056,.213,-.134,.098,-.115,.02,-.096,.027,-.046,.147,-.028,.204,-.09,.229,-.141,.157,-.222,.223,-.119,.071,-.089,.29,-.138,.006,-.256,.064,-.087,.043,-.117,.141,-.07,.13,-.09,.127,-.126,.271,-.114,.269,-.262,.029,-.101,.157,-.31,.169,-.104,.32,-.108,.188,-.038,.048,-.052,.035,-.106,.073,-.021,.068,-.143,.094,-.098,.05,-.035,.165,-.013,.165,-.046,.083,-.032,.003,-.059,.059,-.097,.162,-.027,.21,-.102,.308,-.196,.104,-.067,.033,-.019,.32,-.068,.027,-.053,.159,-.051,.185,-.077,.075,-.055,.037,-.142,.239,-.015,.124,-.103,.4,-.13,.029,-.203,.254,-.074,.137,-.099,.088,-.12,.368,-.123,.075,-.217,.089,-.191,.236,-.181,.068,-.08,.09,-.084,.106,-.039,.157,-.105,.095,-.224,.004,-.095,.109,-.133,.137,-.037,.257,-.188,.083,-.073,.069,-.031,.054,-.385,.071,-.368,.238,-.124,.303,-.11,.118,-.136,.073,-.144,.021,-.142,.135,-.124,.111,-.234,.132,-.146,.346,-.076,.341,-.221,.38,-.25,.151,-.198,.21,-.07,.086,-.204,.168,-.163,.062,-.21,.022,-.129,.123,-.056,.112,-.03,.123,-.138,.263,-.152,.154,-.099,.129,-.154,.028,-.138,.229,-.084,.035,-.055,.027,-.023,.143,-.152,.189,-.053,.138,-.019,.046,-.113,.064,-.192,.08,-.016,.174,-.046,.153,-.034,.099,-.067,.156,-.085,.133,-.108,.063,-.145,.112,-.065,.197,-.133,.206,-.079,.053,-.078,.274,-.035,.017,-.137,.165,-.062,.398,-.048,.117,-.083,.111,-.185,.006,-.188,.034,-.123,.08,-.183,.061,-.245,.038,-.276,.263,-.016,.042,-.211,.158,-.26,.068,-.149,.285,-.343,.111,-.079,.102,-.186,.089,-.409,.078,-.053,.089,-.268,.032,-.115,.236,-.045,.279,-.164,.314,-.057,.361,-.067,.125,-.161,.172,-.106,.001,-.136,.112,-.139,.09,-.122,.206,-.09,.085,-.259,.159,-.121,.121,-.166,.165,-.074,.168,-.067,.301,-.078,.176,-.082,.022,-.128,.184,-.326,.223,-.061,.089,-.047,.221,-.059,.065,-.161,.061,-.136,.087,-.062,.109,-.112,.128,-.125,.076,-.014,.139,-.101,.13,-.042,.133,-.225,.009,-.19,.115,-.168,.066,-.1,.15,-.241,.18,-.119,.123,-.235,.225,-.052,.017,-.186,.219,-.236,.138,-.21,.369,-.136,.365,-.382,.421,-.111,.138,-.205,.288,-.096,.067,-.096,.066,-.089,.186,-.03,.212,-.175,.031,-.091,.048,-.059,.12,-.218,.082,-.256,.093,-.078,.079,-.036,.211,-.22,.14,-.188,.178,-.183,.136,-.161,.181,-.007,.186,-.065,.123,-.059,.103,-.283,.35,-.269,.112,-.166,.021,-.104,.255,-.36,.25,-.011,.105,-.249,.101,-.105,.162,-.047,.153,-.047,.382,-.041,.169,-.162,.111,-.062,.218,-.008,.03,-.07,.062,-.099,.144,-.065,.199,-.309,.21,-.185,.082,-.088,.094,-.164,.234,-.18,.145,-.117,.141,-.051,.16,-.138,.153,-.049,.039,-.067,.265,-.011,.265,-.214,.011,-.189,.149,-.202,.16,-.468,.143,-.285,.19,-.416,.177,-.112,.065,-.182,.032,-.04,.402,-.082,.027,-.193,.341,-.043,.083,-.212,.099,-.157,.297,-.077,.281,-.08,.071,-.259,.374,-.135,.535,-.033,.235,-.043,.135,-.138,.086,-.118,.088,-.059,.452,-.099,.34,-.086,.138,-.205,.298,-.069,0,-.128,.175,-.117,.299,-.12,.467,-.091,.133,-.082,.268,-.073,.2,-.19,.15,-.202,.063,-.184,.098,-.079,.123,-.144,.144,-.096,.147,-.096,.198,-.094,.204,-.09,.079,-.186,.288,-.395,.533,-.026,.106,-.085,.031,-.185,.114,-.079,.103,-.405,.352,-.109,.033,-.348,.032,-.258,.227,-.21,.262,-.099,.218,-.463,.15,-.121,.119,-.047,.116,-.127,.07,-.316,.046,-.14,.144,-.099,.177,-.089,.315,-.014,.054,-.096,.141,-.147,.268,-.112,.121,-.126,.092,-.093,.062,-.098,.04,-.097,.105,-.252,.118,-.064,.032,-.247,.038,-.406,.239,-.191,.096,-.184,.085,-.079,.341,-.187,.286,-.075,.14,-.142,.151,-.141,.14,-.096,.168,-.198,.065,-.039,.243,-.205,.127,-.063,.218,-.14,.009,-.098,.104,-.12,.085,-.069,.103,-.199,.116,-.097,.524,-.125,.205,-.166,.092,-.144,.094,-.05,.081,-.087,.326,-.068,.227,-.116,.012,-.296,.007,-.171,.237,-.046,.384,-.158,.073,-.166,.179,-.068,.095,-.252,.217,-.28,.299,-.268,.335,-.068,.033,-.185,.074,-.04,.207,-.05,.119,-.109,.055,-.285,.117,-.049,.258,-.184,.063,-.091,.109,-.049,.167,-.007,.129,-.033,.467,-.007,.23,-.155,.072,-.217,.032,-.165,.019,-.051,.038,-.168,.014,-.097,.073,-.11,.081,-.094,.006,-.034,.121,-.018,.121,-.068,.248,-.072,.057,-.104,.378,-.084,.028,-.155,.163,-.097,.101,-.03,.014,-.08,.181,-.084,.064,-.04,.054,-.119,.157,-.033,.063,-.032,.058,-.176,.103,-.158,.165,-.249,.041,-.171,.07,-.097,.087,-.118,.079,-.157,.42,-.066,.17,-.135,.06,-.148,.023,-.063,.247,-.17,.045,-.122,.423,-.04,.019,-.037,.306,-.049,.057,-.057,.127,-.056,.056,-.034,.081,-.046,.233,-.134,.225,-.093,.266,-.103,.24,-.323,.274,-.054,.025,-.377,.26,-.142,.292,-.119,.129,-.132,.084,-.137,.26,-.193,.168,-.193,.123,-.319,.164,-.024,.218,-.074,.157,-.139,.021,-.192]},n.state={playing:!1},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{className:"container example",children:[Object(n.jsx)("div",{className:"play button",onClick:function(){e.setState({playing:!e.state.playing})},children:this.state.playing?"\u23f9":"\u25b6\ufe0f"}),Object(n.jsx)(h.b,{audioPeaks:this.getAudioPeaks(),audioFile:"http://traffic.libsyn.com/joeroganexp/p1196.mp3?dest-id=19997",className:"react-waves",options:{backend:"MediaElement",barGap:2,barWidth:3,cursorWidth:0,fillParent:!0,height:200,hideScrollbar:!1,progressColor:"#4F49E2",responsive:!0,waveColor:"#D1D6DA"},volume:1,zoom:.05,playing:this.state.playing})]})}}]),a}(s.a.Component),y=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={playing:!1},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{className:"container example",children:[Object(n.jsx)("div",{className:"play button",onClick:function(){e.setState({playing:!e.state.playing})},children:this.state.playing?"\u23f9":"\u25b6\ufe0f"}),Object(n.jsx)(h.b,{audioFile:"http://traffic.libsyn.com/joeroganexp/p1196.mp3?dest-id=19997",className:"react-waves",options:{backend:"MediaElementWebAudio",barGap:1,barWidth:1,cursorWidth:0,fillParent:!0,height:280,hideScrollbar:!1,progressColor:"#0E4562",responsive:!0,waveColor:"#D1D6DA"},volume:1,zoom:.05,playing:this.state.playing})]})}}]),a}(s.a.Component),x=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).onWaveformReady=function(e){e.wavesurfer.exportPCM(null,1e3,!0,null).then((function(e){e&&n.setState({audioPeaks:e})}))},n.clickToCopy=function(){var e=document.createElement("textarea");e.value=n.state.audioPeaks,document.body.appendChild(e),e.focus(),e.select(),document.execCommand("copy"),document.body.removeChild(e)},n.state={audioPeaks:[]},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"container example",style:{display:"none"},children:[Object(n.jsx)("div",{className:"play button",onClick:function(){e.setState({playing:!e.state.playing})},children:this.state.playing?"\u23f9":"\u25b6\ufe0f"}),Object(n.jsx)(h.b,{audioFile:b,className:"react-waves",options:{backend:"MediaElement"},onWaveformReady:this.onWaveformReady})]}),Object(n.jsx)("div",{children:this.state.audioPeaks.length?Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{id:"copy-btn",children:Object(n.jsx)("button",{onClick:this.clickToCopy,children:"Copy"})}),Object(n.jsx)("div",{id:"audioPeaks",children:this.state.audioPeaks})]}):Object(n.jsx)("div",{className:"loader"})})]})}}]),a}(s.a.Component),C=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).onLoading=function(e){var t=e.wavesurfer,a=e.originalArgs,i=void 0===a?[]:a;n.setState({loaded:100===i[0],wavesurfer:t})},n.onPosChange=function(e,t){e!==n.state.pos&&n.setState({pos:e,wavesurfer:t})},n.state={wavesurfer:null,playing:!1,pos:0},n}return Object(l.a)(a,[{key:"getColorMap",value:function(){return[[0,0,0,1],[.011764705882352941,0,0,1],[.023529411764705882,0,0,1],[.03529411764705882,0,0,1],[.047058823529411764,0,0,1],[.058823529411764705,0,0,1],[.07058823529411765,0,0,1],[.08235294117647059,0,0,1],[.09411764705882353,0,0,1],[.10588235294117647,0,0,1],[.11764705882352941,0,0,1],[.12941176470588237,0,0,1],[.1411764705882353,0,0,1],[.15294117647058825,0,0,1],[.16470588235294117,0,0,1],[.17647058823529413,0,0,1],[.18823529411764706,0,0,1],[.2,0,0,1],[.21176470588235294,0,0,1],[.2235294117647059,0,0,1],[.23529411764705882,0,0,1],[.24705882352941178,0,0,1],[.25882352941176473,0,0,1],[.27058823529411763,0,0,1],[.2823529411764706,0,0,1],[.29411764705882354,0,0,1],[.3058823529411765,0,0,1],[.3176470588235294,0,0,1],[.32941176470588235,0,0,1],[.3411764705882353,0,0,1],[.35294117647058826,0,0,1],[.36470588235294116,0,0,1],[.3764705882352941,0,0,1],[.38823529411764707,0,0,1],[.4,0,0,1],[.4117647058823529,0,0,1],[.4235294117647059,0,0,1],[.43529411764705883,0,0,1],[.4470588235294118,0,0,1],[.4549019607843137,0,0,1],[.4666666666666667,0,0,1],[.47843137254901963,0,0,1],[.49019607843137253,0,0,1],[.5019607843137255,0,0,1],[.5137254901960784,0,0,1],[.5254901960784314,0,0,1],[.5372549019607843,0,0,1],[.5490196078431373,0,0,1],[.5607843137254902,0,0,1],[.5725490196078431,0,0,1],[.5843137254901961,0,0,1],[.596078431372549,0,0,1],[.6078431372549019,0,0,1],[.6196078431372549,0,0,1],[.6313725490196078,0,0,1],[.6431372549019608,0,0,1],[.6549019607843137,0,0,1],[.6666666666666666,0,0,1],[.6784313725490196,0,0,1],[.6901960784313725,0,0,1],[.7019607843137254,0,0,1],[.7137254901960784,0,0,1],[.7254901960784313,0,0,1],[.7372549019607844,0,0,1],[.7490196078431373,0,0,1],[.7607843137254902,0,0,1],[.7725490196078432,0,0,1],[.7843137254901961,0,0,1],[.796078431372549,0,0,1],[.807843137254902,0,0,1],[.8196078431372549,0,0,1],[.8313725490196079,0,0,1],[.8431372549019608,0,0,1],[.8549019607843137,0,0,1],[.8666666666666667,0,0,1],[.8784313725490196,0,0,1],[.8901960784313725,0,0,1],[.9019607843137255,0,0,1],[.9019607843137255,.011764705882352941,0,1],[.9058823529411765,.023529411764705882,0,1],[.9058823529411765,.03137254901960784,0,1],[.9058823529411765,.043137254901960784,0,1],[.9098039215686274,.054901960784313725,0,1],[.9098039215686274,.06666666666666667,0,1],[.9098039215686274,.07450980392156863,0,1],[.9137254901960784,.08627450980392157,0,1],[.9137254901960784,.09803921568627451,0,1],[.9137254901960784,.10980392156862745,0,1],[.9176470588235294,.11764705882352941,0,1],[.9176470588235294,.12941176470588237,0,1],[.9176470588235294,.1411764705882353,0,1],[.9215686274509803,.15294117647058825,0,1],[.9215686274509803,.1607843137254902,0,1],[.9215686274509803,.17254901960784313,0,1],[.9254901960784314,.1843137254901961,0,1],[.9254901960784314,.19607843137254902,0,1],[.9254901960784314,.20784313725490197,0,1],[.9294117647058824,.21568627450980393,0,1],[.9294117647058824,.22745098039215686,0,1],[.9294117647058824,.23921568627450981,0,1],[.9333333333333333,.25098039215686274,0,1],[.9333333333333333,.25882352941176473,0,1],[.9333333333333333,.27058823529411763,0,1],[.9372549019607843,.2823529411764706,0,1],[.9372549019607843,.29411764705882354,0,1],[.9372549019607843,.30196078431372547,0,1],[.9411764705882353,.3137254901960784,0,1],[.9411764705882353,.3254901960784314,0,1],[.9411764705882353,.33725490196078434,0,1],[.9450980392156862,.34509803921568627,0,1],[.9450980392156862,.3568627450980392,0,1],[.9450980392156862,.3686274509803922,0,1],[.9490196078431372,.3803921568627451,0,1],[.9490196078431372,.38823529411764707,0,1],[.9490196078431372,.4,0,1],[.9529411764705882,.4117647058823529,0,1],[.9529411764705882,.4235294117647059,0,1],[.9529411764705882,.43529411764705883,0,1],[.9529411764705882,.44313725490196076,0,1],[.9568627450980393,.4549019607843137,0,1],[.9568627450980393,.4666666666666667,0,1],[.9568627450980393,.47843137254901963,0,1],[.9607843137254902,.48627450980392156,0,1],[.9607843137254902,.4980392156862745,0,1],[.9607843137254902,.5098039215686274,0,1],[.9647058823529412,.5215686274509804,0,1],[.9647058823529412,.5294117647058824,0,1],[.9647058823529412,.5411764705882353,0,1],[.9686274509803922,.5529411764705883,0,1],[.9686274509803922,.5647058823529412,0,1],[.9686274509803922,.5725490196078431,0,1],[.9725490196078431,.5843137254901961,0,1],[.9725490196078431,.596078431372549,0,1],[.9725490196078431,.6078431372549019,0,1],[.9764705882352941,.6196078431372549,0,1],[.9764705882352941,.6274509803921569,0,1],[.9764705882352941,.6392156862745098,0,1],[.9803921568627451,.6509803921568628,0,1],[.9803921568627451,.6627450980392157,0,1],[.9803921568627451,.6705882352941176,0,1],[.984313725490196,.6823529411764706,0,1],[.984313725490196,.6941176470588235,0,1],[.984313725490196,.7058823529411765,0,1],[.9882352941176471,.7137254901960784,0,1],[.9882352941176471,.7254901960784313,0,1],[.9882352941176471,.7372549019607844,0,1],[.9921568627450981,.7490196078431373,0,1],[.9921568627450981,.7568627450980392,0,1],[.9921568627450981,.7686274509803922,0,1],[.996078431372549,.7803921568627451,0,1],[.996078431372549,.792156862745098,0,1],[.996078431372549,.8,0,1],[1,.8117647058823529,0,1],[1,.8235294117647058,0,1],[1,.8235294117647058,.011764705882352941,1],[1,.8274509803921568,.0196078431372549,1],[1,.8274509803921568,.03137254901960784,1],[1,.8313725490196079,.0392156862745098,1],[1,.8313725490196079,.050980392156862744,1],[1,.8352941176470589,.058823529411764705,1],[1,.8352941176470589,.07058823529411765,1],[1,.8392156862745098,.0784313725490196,1],[1,.8392156862745098,.09019607843137255,1],[1,.8392156862745098,.09803921568627451,1],[1,.8431372549019608,.10980392156862745,1],[1,.8431372549019608,.11764705882352941,1],[1,.8470588235294118,.12941176470588237,1],[1,.8470588235294118,.13725490196078433,1],[1,.8509803921568627,.14901960784313725,1],[1,.8509803921568627,.1568627450980392,1],[1,.8549019607843137,.16862745098039217,1],[1,.8549019607843137,.17647058823529413,1],[1,.8549019607843137,.18823529411764706,1],[1,.8588235294117647,.19607843137254902,1],[1,.8588235294117647,.20784313725490197,1],[1,.8627450980392157,.21568627450980393,1],[1,.8627450980392157,.22745098039215686,1],[1,.8666666666666667,.23529411764705882,1],[1,.8666666666666667,.24705882352941178,1],[1,.8666666666666667,.2549019607843137,1],[1,.8705882352941177,.26666666666666666,1],[1,.8705882352941177,.27450980392156865,1],[1,.8745098039215686,.28627450980392155,1],[1,.8745098039215686,.29411764705882354,1],[1,.8784313725490196,.3058823529411765,1],[1,.8784313725490196,.3137254901960784,1],[1,.8823529411764706,.3254901960784314,1],[1,.8823529411764706,.3333333333333333,1],[1,.8823529411764706,.34509803921568627,1],[1,.8862745098039215,.35294117647058826,1],[1,.8862745098039215,.36470588235294116,1],[1,.8901960784313725,.37254901960784315,1],[1,.8901960784313725,.3843137254901961,1],[1,.8941176470588236,.39215686274509803,1],[1,.8941176470588236,.403921568627451,1],[1,.8980392156862745,.4117647058823529,1],[1,.8980392156862745,.4235294117647059,1],[1,.8980392156862745,.43137254901960786,1],[1,.9019607843137255,.44313725490196076,1],[1,.9019607843137255,.45098039215686275,1],[1,.9058823529411765,.4627450980392157,1],[1,.9058823529411765,.47058823529411764,1],[1,.9098039215686274,.4823529411764706,1],[1,.9098039215686274,.49019607843137253,1],[1,.9137254901960784,.5019607843137255,1],[1,.9137254901960784,.5098039215686274,1],[1,.9137254901960784,.5215686274509804,1],[1,.9176470588235294,.5294117647058824,1],[1,.9176470588235294,.5411764705882353,1],[1,.9215686274509803,.5490196078431373,1],[1,.9215686274509803,.5607843137254902,1],[1,.9254901960784314,.5686274509803921,1],[1,.9254901960784314,.5803921568627451,1],[1,.9254901960784314,.5882352941176471,1],[1,.9294117647058824,.6,1],[1,.9294117647058824,.6078431372549019,1],[1,.9333333333333333,.6196078431372549,1],[1,.9333333333333333,.6274509803921569,1],[1,.9372549019607843,.6392156862745098,1],[1,.9372549019607843,.6470588235294118,1],[1,.9411764705882353,.6588235294117647,1],[1,.9411764705882353,.6666666666666666,1],[1,.9411764705882353,.6784313725490196,1],[1,.9450980392156862,.6862745098039216,1],[1,.9450980392156862,.6980392156862745,1],[1,.9490196078431372,.7058823529411765,1],[1,.9490196078431372,.7176470588235294,1],[1,.9529411764705882,.7254901960784313,1],[1,.9529411764705882,.7372549019607844,1],[1,.9568627450980393,.7450980392156863,1],[1,.9568627450980393,.7568627450980392,1],[1,.9568627450980393,.7647058823529411,1],[1,.9607843137254902,.7764705882352941,1],[1,.9607843137254902,.7843137254901961,1],[1,.9647058823529412,.796078431372549,1],[1,.9647058823529412,.803921568627451,1],[1,.9686274509803922,.8156862745098039,1],[1,.9686274509803922,.8235294117647058,1],[1,.9725490196078431,.8352941176470589,1],[1,.9725490196078431,.8431372549019608,1],[1,.9725490196078431,.8549019607843137,1],[1,.9764705882352941,.8627450980392157,1],[1,.9764705882352941,.8745098039215686,1],[1,.9803921568627451,.8823529411764706,1],[1,.9803921568627451,.8941176470588236,1],[1,.984313725490196,.9019607843137255,1],[1,.984313725490196,.9137254901960784,1],[1,.984313725490196,.9215686274509803,1],[1,.9882352941176471,.9333333333333333,1],[1,.9882352941176471,.9411764705882353,1],[1,.9921568627450981,.9529411764705882,1],[1,.9921568627450981,.9607843137254902,1],[1,.996078431372549,.9725490196078431,1],[1,.996078431372549,.9803921568627451,1],[1,1,.9921568627450981,1],[1,1,1,1]]}},{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{className:"container example",children:[Object(n.jsx)("div",{className:"play button",onClick:function(){e.setState({playing:!e.state.playing})},children:this.state.playing?"\u23f9":"\u25b6\ufe0f"}),Object(n.jsx)(h.b,{audioFile:j,className:"react-waves",options:{barGap:1,barWidth:.2,barHeight:2,cursorWidth:0,height:200,hideScrollbar:!0,progressColor:"#EC407A",responsive:!0,waveColor:"#D1D6DA"},volume:1,zoom:1,pos:this.state.pos,playing:this.state.playing,onPosChange:this.onPosChange,onLoading:this.onLoading,spectrogramOptions:{container:"#wave-spectrogram",colorMap:this.getColorMap(),noverlap:!0,labels:!0}}),Object(n.jsx)("div",{id:"wave-spectrogram",style:{width:"623px",margin:"0 auto"}})]})}}]),a}(s.a.Component),k=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("div",{className:"header",children:"Basic Example"}),Object(n.jsx)(v,{}),Object(n.jsx)("div",{className:"header",children:"Microphone Example"}),Object(n.jsx)(m,{}),Object(n.jsx)("div",{className:"header",children:"Regions Example"}),Object(n.jsx)(g,{}),Object(n.jsx)("div",{className:"header",children:"Timeline Example"}),Object(n.jsx)(f,{}),Object(n.jsxs)("div",{className:"header",children:["Large File Example",Object(n.jsx)("div",{className:"subheader",children:"This uses pre-generated PCM data to load a 117MB file quickly"})]}),Object(n.jsx)(O,{}),Object(n.jsxs)("div",{className:"header",children:["MediaElementWebAudio Backend Example",Object(n.jsx)("div",{className:"subheader",children:"This uses the backend of MediaElementWebAudio for handling larger files"})]}),Object(n.jsx)(y,{}),Object(n.jsxs)("div",{className:"header",children:["Fetch Peaks Example",Object(n.jsx)("div",{className:"subheader",children:"After the audio is loaded and ready, the PCM array will appear"})]}),Object(n.jsx)(x,{}),Object(n.jsxs)("div",{className:"header",children:["Spectrogram Example",Object(n.jsx)("div",{className:"subheader",children:"A visual representation of the spectrum of frequencies of a signal as it varies with time"})]}),Object(n.jsx)(C,{})]})}}]),a}(s.a.Component);r.a.render(Object(n.jsx)(k,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.6b324cbc.chunk.js.map