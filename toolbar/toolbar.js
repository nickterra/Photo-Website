var coToolbar=(function(){var b="";var a="";var c=false;$(document).ready(function(){var F={},y=0,aQ=0,ak=0,aB=0,aN=1,D={toolbar:0,infobar:1},aD=window.top===window.self,E=chrome.extension.getURL("toolbar/styles/placeholder.css"),w=chrome.extension.getURL("toolbar/placeholder.html"),j=chrome.i18n.getMessage("@@extension_id"),L="chrome-extension://"+j,ao="<iframe id='coToolbarFrame' src='"+w+"' style='height:0px;width:100%;display:none;'></iframe>",g="<div id='coFrameDiv' style='height:0px;display:none;'>"+ao+"</div>",v=document.getElementById("coFrameIdentifier")!==null,ad=[],Q=0,an=0,aq=0,p=null,n=[],aJ=window.screenX,aI=window.screenY,ap=0,q="",k=false,aR=false,ar=false,ag=0,aj=0,l=0,P=0,A=["coTB_StatusBar","idIDSafeButton","SafeShareButton","IDSafeLoginListMenuBtn","IdentitiesComboBoxDiv","IDFillFormBtn","VaultPwdSecurityBtn"],r=["coToolbarContent","InfobarContainer","IDSafeFillBarLabel","coDefaultLogo","LoginToIDSafe_Caption","VaultPwdSecurityCaption"],s=[],h=[],aC=[{url:"^(http|https)://onlinebanking.tdbank.com/.*",delay:3000}],B=["^(http|https)://login.o3.symantec.com/portal/ribbon/.*"],u=[],aS=[],az=[{url:"^(http|https)://.*jira.ges.symantec.com/browse/.*",selector:"nav[role='navigation']",property:"padding-top",value:"31px"},{url:"^(http|https)://.*facebook.com/.*",className:"_4oes",property:"bottom",value:"31px"},{url:"^(http|https)://.*adobe.com/.*",style:"#globalnav__header .globalnav__overlay",value:"transform:translate3d(0,100%,0) !important;"},{url:"^(http|https)://.*adobe.com/.*",style:"#globalnav__header .globalnav__overlay--selected",value:"transform:translate3d(0,0,0) !important;"},{url:"^(http|https)://.*songza.com/.*",style:".miniplayer",value:"top:31px !important;"},],U=[{url:"^(http|https)://.*mail.google.com/.*",className:"dw"},{url:"^(http|https)://.*facebook.com/.*",className:"uiContextualLayerPositionerFixed"},{url:"^(http|https)://.*facebook.com/.*",className:"_li"},{url:"^(http|https)://.*youtube.com/.*",className:"gssb_c"},{url:"^(http|https)://.*youtube.com/.*",id:"player"},{url:"^(http|https)://.*livefyre.com/.*",className:"full-width"},],a1="(function () {				var toolbarElement = {},					parent = {},					interval = 0,					retryCount = 0,					isRemoved = false;				if (window.location.protocol === 'file:') {					interval = window.setInterval(function () {						toolbarElement = document.getElementById('coFrameDiv');						if (toolbarElement) {							parent = toolbarElement.parentNode;							if (parent) {								parent.removeChild(toolbarElement);								isRemoved = true;								if (document.body && document.body.style) {									document.body.style.setProperty('margin-top', '0px', 'important');								}							}						}						retryCount += 1;						if (retryCount > 10 || isRemoved) {							window.clearInterval(interval);						}					}, 10);				}			})();",x=function(){var a2=document.getElementById("cosymantecbfw_removeToolbar");if(!a2){a2=document.createElement("script");a2.setAttribute("type","text/javascript");a2.setAttribute("id","cosymantecbfw_removeToolbar");a2.innerText=a1;if(document.head){document.head.appendChild(a2)}else{if(document.body){document.body.appendChild(a2)}else{if(document.documentElement){document.documentElement.appendChild(a2)}}}}},V=function(a2,a3,a4){if(a2!==null&&a2!==undefined){a2.style[a3]=a4}},f=function(a2){V(document.getElementById(a2),"display","block")},ae=function(a2){V(document.getElementById(a2),"display","none")},H=function(a2){V(a2,"display","none")},I=function(a2){if(a2!==null&&a2!==undefined){var a3;while((a3=a2.lastChild)!==null){a2.removeChild(a3)}}},ab=function(a7){var a2=false,a6={},a5={},a3={};try{a6=document.getElementById("coToolbarFrame");a5=a6.contentDocument;if(a5.location.href.indexOf("placeholder.html")>-1){a2=true}}catch(a4){a3=a4;a2=true}if(!$("#coToolbarFrame").height()||!a2||a7){$("#coToolbarFrame").attr("src",function(a8,a9){return a9})}},aK={Google:0,Bing:1,Yahoo:2,Ask:3,Unknown:4},av=function(a4,a2){var a3={},a5={};if(!a4||!a4.length){return a3}a3.id=a4.attr("id")||"";a3.type=a4.prop("tagName")||"";a3.name=a4.attr("name")||"";a5=a4[0].getBoundingClientRect();a3.top=Math.ceil(a2?a5.top+aB:0);a3.left=Math.ceil(a2?a5.left+ak:0);a3.right=Math.ceil(a2?a5.right+ak:0);a3.bottom=Math.ceil(a2?a5.bottom+aB:0);return a3},aZ=function(a3,a4,a2){if(a3==="undefined"||a3.size()===0){return}a3.each(function(){var a6=$(this),a5={};if(a6.children().size()>0){aZ(a6.children(),a4,a2)}a5=av(a6,a2);if(a5.id){a4.push(a5)}})},al=function(a3,a2){var a4=[];aZ($(a3).children(),a4,a2);return a4},Y=0,aX=0,M=[],aL=[],R=[],aV=[],ah=[],au=null,at=null,O="",aA=0,Z=0,ax="",t=0,m=0,ay=function(a3){var a2={};if(window.getComputedStyle(a3,null)&&"auto"!==window.getComputedStyle(a3,null).top){M.push(a3)}for(a2=a3.firstChild;a2;a2=a2.nextSibling){if(a2.nodeType===1){ay(a2)}}},o=function(a4){var a3={},a2="";if(window.getComputedStyle(a4,null)&&"fixed"===window.getComputedStyle(a4,null).position){if(ah.indexOf(a4)===-1){if(aL.indexOf(a4)===-1){aL.push(a4);a2=window.getComputedStyle(a4,null).top;if(!a2){a2=0}R.push(a2);aV.push(false)}}else{if(aL.indexOf(a4)===-1){aL.push(a4);a2=window.getComputedStyle(a4,null).top;if(!a2){a2=0}R.push(a2);aV.push(false)}}}for(a3=a4.firstChild;a3;a3=a3.nextSibling){if(a3.nodeType===1){o(a3)}}},am=function(a2){while(a2.parentNode&&a2.parentNode!==document.documentElement){if(window.getComputedStyle(a2.parentNode,null).position!=="static"){return false}a2=a2.parentNode}return true},aH=function(){var a2=0,a3={};for(a2=0;a2<u.length;a2+=1){if(u[a2].url){a3=new RegExp(u[a2].url,"i");if(a3.test(window.location.href)){return u[a2].id}}}return null},aF=function(){var a2=0,a4=[],a5={},a3=[];for(a2=0;a2<az.length;a2+=1){if(az[a2].url){a5=new RegExp(az[a2].url,"i");if(a5.test(window.location.href)){a3=[];if(az[a2].hasOwnProperty("id")){a3.id=az[a2].id;a3.property=az[a2].property;a3.value=az[a2].value;a4.push(a3)}if(az[a2].hasOwnProperty("className")){a3.className=az[a2].className;a3.property=az[a2].property;a3.value=az[a2].value;a4.push(a3)}if(az[a2].hasOwnProperty("selector")){a3.selector=az[a2].selector;a3.property=az[a2].property;a3.value=az[a2].value;a4.push(a3)}if(az[a2].hasOwnProperty("style")){a3.style=az[a2].style;a3.property="";a3.value=az[a2].value;a4.push(a3)}}}}return a4},aM=function(a4){var a3=0,a2=0,a6="",a7={},a5="";for(a3=0;a3<U.length;a3+=1){if(U[a3].url){a7=new RegExp(U[a3].url,"i");if(a7.test(window.location.href)){if(U[a3].hasOwnProperty("id")){a6=a4.getAttribute("id");if(a6!==undefined&&a6===U[a3].id){return true}}if(U[a3].hasOwnProperty("className")){a5=a4.className.split(/\s+/);for(a2=0;a2<a5.length;a2+=1){if(a5[a2]===U[a3].className){return true}}}}}}return false},C=function(){var a2=0,a3={};for(a2=0;a2<aS.length;a2+=1){a3=new RegExp(aS[a2],"i");if(a3.test(window.location.href)){return true}}return false},aT=function(bf,a2){var ba=0,a6={},a8="",a3=0,a7="",a5="",a4={},be=false,a9=false,bd=0,bg="",bb="",bc="";ag=a2;for(ba=0;ba<s.length;ba+=1){a4=new RegExp(s[ba],"i");if(a4.test(window.location.href)){return}}if(!aX){aX=document.body.scrollHeight}if(!document.body){if(Y<30){window.setTimeout(function(){aT(bf,a2)},100)}return}for(ba=0;ba<h.length;ba+=1){a4=new RegExp(h[ba],"i");if(a4.test(window.location.href)){be=true;break}}for(ba=0;ba<B.length;ba+=1){a4=new RegExp(B[ba],"i");if(a4.test(window.location.href)){a9=true;break}}M=[];if(au===null||at===null){au=window.getComputedStyle(document.body,null).position;at="padding-top";O=window.getComputedStyle(document.body,null).top;O=O.replace("px","");aA=Number(O);if(au==="relative"){at="margin-top"}ax=window.getComputedStyle(document.body,null).getPropertyValue(at);ax=ax.replace("px","");t=Number(ax);if(isNaN(t)){t=0}}if(document.body.style){$(window).on("cssModForBodyAlignment resize",function(bh){if(window.devicePixelRatio!==1){aN=((window.innerWidth)/(screen.width))}else{aN=1}if(!a9){if(null!==window.getComputedStyle(document.body,null)){if(au==="absolute"&&!isNaN(aA)&&aA>=0){at=""}m=(t+Number(a2))*aN;if(m>=0&&at){if(document.body.tagName==="BODY"){document.body.style.setProperty(at,m+"px","important");if(window.getComputedStyle(document.body,null).getPropertyValue(at)!==m+"px"){document.body.style.setProperty(at,"");at="margin-top";document.body.style.setProperty(at,m+"px","important")}}else{document.documentElement.style.setProperty(at,m+"px","important")}}if(au==="relative"&&!isNaN(aA)&&aA>=0){Z=(aA+Number(a2))*aN;if(Z>=0){if(document.body.tagName==="BODY"){document.body.style.setProperty("top",Z+"px","important")}else{document.documentElement.style.setProperty("top",Z+"px","important")}}}}}});$(window).triggerHandler("cssModForBodyAlignment");if($("body").height()<=0){document.body.style.setProperty("height",(aX-a2)+"px","important")}bg=aH();if(bg){a6=document.getElementById(bg);if(a6&&a6.style){a6.style.setProperty("position","relative")}}bc=aF();if(bc){for(ba=0;ba<bc.length;ba=ba+1){if(bc[ba].id){a6=document.getElementById(bc[ba].id)}else{if(bc[ba].className){a6=document.getElementsByClassName(bc[ba].className);if(a6){a6=a6[0]}}else{if(bc[ba].selector){$(bc[ba].selector).css(bc[ba].property,bc[ba].value,"important")}else{if(bc[ba].style){$("<style>"+bc[ba].style+"{"+bc[ba].value+"}</style>").appendTo("head")}}}}if(a6&&a6.style){a6.style.setProperty(bc[ba].property,bc[ba].value,"important")}}}}ay(document.body);if(!C()){$(window).on("cssModForStickyElements resize scroll",function(bh){if($("#coToolbarFrame:visible").height()>0){if(p){window.clearTimeout(p)}p=window.setTimeout(function(){o(document.body);if(window.devicePixelRatio!==1){aN=((window.innerWidth)/(screen.width))}else{aN=1}for(ba=0;ba<aL.length;ba=ba+1){if($("#coToolbarFrame:visible").height()<=0){continue}a6=aL[ba];if(aM(a6)){continue}if(null===window.getComputedStyle(a6,null)||a6.id==="coFrameDiv"||a6.id==="coToolbarFrame"){continue}a8=R[ba];a8=a8.replace("px","");a3=Number(a8);a7=window.getComputedStyle(a6,null).position;a2=a2+$("#coInfobarDiv:visible").height();if($(this).scrollTop()===0&&$(a6).is(":visible")){if(ah.indexOf(a6)===-1){if(aV[ba]){aV[ba]=false;bd=a3;if(bd>=0){bd=a3+a2;if(a7==="fixed"){a6.style.setProperty("top",bd*aN+"px","important")}else{a6.style.setProperty("top","")}}else{if((bd*-1)<=a2){bd=a3+a2;if(a7==="fixed"){a6.style.setProperty("top",bd*aN+"px","important")}}else{a6.style.setProperty("top","")}}}else{aV[ba]=true;bd=a3;if(bd>=0){bd=a3+a2;if(a7==="fixed"){a6.style.setProperty("top",bd*aN+"px","important")}}else{if((bd*-1)<=a2){bd=a3+a2;if(a7==="fixed"){a6.style.setProperty("top",bd*aN+"px","important")}}}}}else{if(a7==="fixed"){a6.style.setProperty("top","");continue}else{if(a7==="absolute"){a6.style.setProperty("top","");a5=window.getComputedStyle(a6,null).top;a5=a5.replace("px","");a5=Number(a5);bd=a5+a2;a6.style.setProperty("top",bd*aN+"px","important");aV[ba]=false;ah.push(a6);continue}}}}else{a5=window.getComputedStyle(a6,null).top;a5=a5.replace("px","");a5=Number(a5);if(isNaN(a5)){continue}if(ah.indexOf(a6)===-1){if(aV[ba]){if(a7==="fixed"&&a3>=0&&a5>=a3+a2){continue}}if(a7==="absolute"){a6.style.setProperty("top","");a5=window.getComputedStyle(a6,null).top;a5=a5.replace("px","");a5=Number(a5);bd=a5+a2;a6.style.setProperty("top",bd*aN+"px","important");aV[ba]=false;ah.push(a6);continue}if(a5<0){if(a5<=a2){bd=a5+a2;if(a7==="fixed"&&!aV[ba]){a6.style.setProperty("top",bd*aN+"px","important");aV[ba]=true}}continue}if(a5===0){bd=a2;a6.style.setProperty("top",bd*aN+"px","important");aV[ba]=true}else{if(aV[ba]||a3===0){continue}bd=a3+a2;if(bd<=0){bd=a5}a6.style.setProperty("top",bd*aN+"px","important");aV[ba]=true}}else{if(a7==="static"||a7==="relative"){continue}a6.style.setProperty("top","");a5=window.getComputedStyle(a6,null).top;a5=a5.replace("px","");a5=Number(a5);bd=a5+a2;a6.style.setProperty("top",bd*aN+"px","important");if(a7==="fixed"&&!aV[ba]){aV[ba]=true;continue}else{if(a7==="absolute"){aV[ba]=false;ah.push(a6);continue}}}}}},150)}});$(window).triggerHandler("cssModForStickyElements")}if($("#coToolbarFrame:visible").height()<=0){for(ba=0;ba<aL.length;ba=ba+1){a6=aL[ba];a8=R[ba];a8=a8.replace("px","");a3=Number(a8);if($(a6).is(":visible")){a6.style.setProperty("top","")}else{a6.style.setProperty("top",a3*aN+"px","important")}aV[ba]=false}}for(ba=0;ba<M.length;ba=ba+1){a6=M[ba];if(aM(a6)){continue}if(null!==window.getComputedStyle(a6,null)&&a6.id!=="coFrameDiv"&&a6.id!=="coToolbarFrame"){bb=window.getComputedStyle(a6,null).position;if(bb==="absolute"&&am(a6)){a8=window.getComputedStyle(a6,null).top;a8=a8.replace("px","");a3=Number(a8);if(!isNaN(a3)){if(a6.style){bd=a3+(Number(a2)-Number(bf));if(bd>=0){a6.style.setProperty("top",bd*aN+"px","important");ah.push(a6)}}}}}}},aE=function(a3,a2){var a4={};if(!a2||!a2.type){return a4}a4.coToolbar=true;if(a3){a4.window_type=D.toolbar;if($(a3).parents("#coInfobarDiv").length){a4.window_type=D.infobar}}switch(a2.type){case"click":case"keyup":if(a3){a4.event_type=a2.type;a4.id=a3.id;a4.name=a3.name;a4.type=a3.tagName;a4.clientX=Math.ceil(a2.clientX||0);a4.clientY=Math.ceil(a2.clientY||0);a4.screenX=Math.ceil(a2.screenX||0);a4.screenY=Math.ceil(a2.screenY||0);a4.altKey=a2.altKey||false;a4.ctrlKey=a2.ctrlKey||false;a4.shiftKey=a2.shiftKey||false;a4.keyCode=a2.keyCode||0;a4.rect=a3.getBoundingClientRect()}break;case"docloaded":a4.window_type=a2.window_type;if(D.toolbar===a4.window_type){a4.id="coToolbarDiv";a4.elements=al("#coToolbarDiv",false)}else{if(D.infobar===a4.window_type){a4.id="coInfobarDiv";a4.elements=al("#coInfobarDiv",false)}}a4.screenX=Math.ceil(ak+10);a4.screenY=Math.ceil(aB+10);a4.event_type="docloaded";a4.tabId=y;a4.windowId=aQ;k=true;break;case"update_elements":a4.window_type=a2.window_type;if(D.toolbar===a4.window_type){a4.id="coToolbarDiv";a4.elements=al("#coToolbarDiv",true)}else{if(D.infobar===a4.window_type){a4.id="coInfobarDiv";a4.elements=al("#coInfobarDiv",true)}}a4.screenX=Math.ceil(ak+10);a4.screenY=Math.ceil(aB+10);a4.event_type="update_elements";a4.tabId=y;a4.windowId=aQ;break}return a4},aY=function(){var a2;for(a2 in F){if(F.hasOwnProperty(a2)){$("#coToolbarDiv").on(a2,"*",F[a2]);$("#coInfobarDiv").on(a2,"*",F[a2])}}$("#coToolbarDiv").bind("click",function(a3){a3.stopPropagation()});$("#coInfobarDiv").bind("click",function(a3){a3.stopPropagation()})},i=function(a3,a2){a3.coToolbar=true;if(a2){chrome.runtime.sendMessage(a3,a2)}else{chrome.runtime.sendMessage(a3,function(){})}},T=function(a2){a2.method_name="HtmlEvent";a2.funcName="event";a2.tabId=y;a2.windowId=aQ;i(a2)},X=function(a4,a3){var a2={};a2.type="update_elements";a2.window_type=a4;if(!a3){a3=100}window.setTimeout(function(){T(aE("",a2))},a3)},aw=function(a4){var a5=0,a3=0,a2=n.length,a6=[];if(r.indexOf(a4.id)!==-1){return false}a6=$(document.getElementById(a4.id)).parents();for(a3=0;a3<a6.length;a3+=1){if(A.indexOf(a6[a3].id)!==-1){a4.id=a6[a3].id;break}}for(a5=0;a5<a2;a5+=1){if(n[a5].id===a4.id){return false}}if(!a2&&!aq){aq=window.setInterval(function(){n=[];window.clearInterval(aq);aq=0},1000)}n.push(a4);X(D.toolbar,0);X(D.infobar,0);T(a4);return true},S=function(a2){var a3={};a3.coToolbar=true;a3.funcName="adjustFrameHeight";if(a2===undefined){a3.height=0}else{if(a2!==0){a3.height=a2+3}else{a3.height=0}}i(a3)},aU=function(a3){var a2=a3.split("+").join(" ");return decodeURIComponent(a2)},z=function(a4){var a6={},a5=a4.substring(1),a7=a5.split("&"),a3=0,a8={},a2=[];for(a3=0;a3<a7.length;a3+=1){a8=a7[a3].split("=");if(a6[a8[0]]===undefined){a6[a8[0]]=a8[1]}else{if(typeof a6[a8[0]]==="string"){a2=[a6[a8[0]],a8[1]];a6[a8[0]]=a2}else{a6[a8[0]].push(a8[1])}}}return a6},a0=function(){var a5=aK.Unknown,a2=document.createElement("a"),a7={},a4={},a3="",a6="";a2.href=ap;["href","protocol","host","hostname","port","pathname","search","hash"].forEach(function(a8){a7[a8]=a2[a8]});if(a7.protocol!=="http:"&&a7.protocol!=="https:"){return a3}if(!a7.hostname){return a3}if(!a7.search&&!a7.hash){return a3}if(a7.hostname.indexOf("google")>-1&&((a7.pathname.indexOf("search")>-1)||(a7.pathname==="/")||(a7.pathname.indexOf("webhp")>-1))){a5=aK.Google}else{if(a7.hostname.indexOf("bing")>-1&&a7.pathname.indexOf("search")>-1){a5=aK.Bing}else{if(a7.hostname.indexOf("yahoo")>-1&&a7.pathname.indexOf("search")>-1){a5=aK.Yahoo}else{if(a7.hostname.indexOf("nortonsafe")>-1&&a7.pathname.indexOf("web")>-1){a5=aK.Ask}}}}if(a5!==aK.Unknown){a4=z(a7.search)}if(a5===aK.Yahoo&&a4.p){a3=aU(a4.p)}else{if(a4.q){a3=aU(a4.q)}}if(a5===aK.Google&&a7.hash){a6=a7.hash;if(a6.indexOf("q=")>-1){a6=a6.substring(a6.indexOf("q=")+2);if(a6.indexOf("&")>-1){a6=a6.substring(0,a6.indexOf("&"))}}if(a6){a3=aU(a6)}}return a3},d=function(a2){var a3={};a3.funcName="updateSearchString";a3.search=a2;i(a3)},ai=function(){var a2=a0(),a3={};if($("#coSBTextField").length){if(a2){$("#coSBTextField").val(a2);d(a2)}else{a3.funcName="getSearchString";i(a3,function(a4){if(a4&&a4.search){$("#coSBTextField").val(a4.search)}})}}},W=function(){var a2=$("#coInfobarDiv:visible").height()||0;ae("coToolbarDiv");S(a2)},aG=function(){var a3=$("#coInfobarDiv").is(":visible"),a2=0,a4="";if(a3){a2=$("#coInfobarDiv:visible").height()||0}a4=$("#coToolbarContent").html();if(a4){a4=a4.trim()}if(!a4){return}if(ar){W();return}f("coToolbarDiv");window.setTimeout(function(){var a5=0;if($("#coCloseButton:visible").length&&$("#coHideToolbarButton:visible").length&&$("#coDefaultLogo:visible").length&&$("#coToolbarContent:visible").length){a5=$("#coCloseButton:visible").width()+$("#coHideToolbarButton:visible").width()+$("#coDefaultLogo:visible").width()+$("#coToolbarContent:visible").width()+20;$("#coToolbarDiv").css({minWidth:a5+"px"})}},500);S(a2+$("#coToolbarDiv").height());X(D.toolbar);window.setTimeout(function(){ai()},0)},N=function(){var a2=$("#coToolbarDiv").is(":visible"),a3=0;if(a2){a3=$("#coToolbarDiv:visible").height()||0}f("coInfobarDiv");window.setTimeout(function(){var a4=0;if($(".InfobarGroup:visible").length&&$(".NortonLogo:visible").length&&$(".coCloseButton_Block:visible").length){a4=$(".InfobarGroup:visible").width()+$(".NortonLogo:visible").width()+$(".coCloseButton_Block:visible").width()+20;$("#coInfobarDiv").css({minWidth:a4+"px"})}},500);S(a3+$("#coInfobarDiv").height());X(D.infobar)},K=function(a2,a4){var a3={};if(Q){window.clearTimeout(Q);Q=0}ad.push(a2);Q=window.setTimeout(function(){if(ad.length){a3=ad.shift();if(a3){T(aE("",a3));if(a3.event_type==="docloaded"){if(D.toolbar===a3.window_type){window.setTimeout(aG,100)}}}}ad=[];Q=0;if(!aR){a3={};a3.window_type=D.toolbar;a3.type="docloaded";a3.event_type="docloaded";window.setTimeout(function(){aR=true;K(a3,10)},1000)}},a4)},aP=function(){var a2={};a2.funcName="GetTabId";a2.coToolbar=true;i(a2,function(a3){if(a3){y=a3.tabId;aQ=a3.windowId}})},G=function(){var a2={};a2.funcName="updateToolbarChange";a2.html=encodeURI($("#coToolbarContent").html());i(a2)},af=function(){var a2={};a2.funcName="updateInfobarChange";a2.html=encodeURI($("#coInfobarDiv").html());i(a2)},ac=function(){var a2={};a2.funcName="updateLocation";a2.toolbarScreenTop=aj;window.top.postMessage(a2,"*")},J=function(){ac();if(an){window.clearTimeout(an);an=0}an=window.setTimeout(function(){an=0;X(D.toolbar);X(D.infobar)},100)},aO=function(){var a2=$("#coInfobarDiv:visible").height()||0,a3={};I(document.getElementById("coToolbarContent"));ae("coToolbarDiv");S(a2);G();a3.funcName="closedToolbar";i(a3)},aa=function(){var a3=$("#coToolbarDiv:visible").height()||0,a2=document.getElementById("coInfobarDiv");I(a2);H(a2);S(a3);af()},aW=function(){var a2=false,a3={};a2=Math.round(window.innerHeight*window.devicePixelRatio)===screen.height;if(!a2){if(screen.height-Math.round(window.innerHeight*window.devicePixelRatio)<50&&window.location.pathname==="/_/chrome/newtab"){a2=true}}a3.funcName="fullScreenCheck";a3.isFullScreen=a2;i(a3)},e=function(){var a2=0,a3={};for(a2=0;a2<aC.length;a2+=1){if(aC[a2].url){a3=new RegExp(aC[a2].url,"i");if(a3.test(window.location.href)){return aC[a2].delay}}}return 0};F.click=function(a9){var a6=$("#coToolbarDiv").is(":visible"),a8=0,a5=$("#coInfobarDiv").is(":visible"),a7=0,a2={};if(a6){a8=$("#coToolbarDiv").height()}if(a5){a7=$("#coInfobarDiv").height()}if(this.id){if((this.id==="VaultPwdSecurityBtnLabel")||(this.id==="VaultPwdSecurityBtn")||(this.id==="IDSafeLoginBtn")){if(this.id==="IDSafeLoginBtn"){b="IDSafeLoginBtn";var ba=document.getElementById("LoginInfobarPwdEditText")}else{b="VaultPwdSecurityBtnLabel";var ba=document.getElementById("InfobarPwdEditText")}a="";var a3="";if($(ba).prop("tagName")==="SELECT"){a3=$(ba).find(":selected").text()}else{if($(ba).prop("tagName")==="INPUT"){a3=$(ba).val()}else{a3=$(ba).text()}}var a4={};a4.funcName="EncryptPwd";a4.pwd=a3;window.setTimeout(function(){i(a4,function(bb){})},0)}a2=aE(this,a9.originalEvent||a9);if(a2){aw(a2)}}if(this.id&&(this.id==="coCloseButton"||this.id==="coHideToolbarButton")){if($(this).parents("#coInfobarDiv").length){aa()}else{aO()}}};F.keyup=function(a2){var a3=a2.which;if(this.id&&(this.tagName&&this.tagName.toLowerCase()==="input")){if(a3===13){if(this.id==="LoginInfobarPwdEditText"){$("#IDSafeLoginBtn").click();return false}if(this.id==="IDSaveNewPwdIBSiteName"||this.id==="IDSaveAdditionalLoginIBSiteName"||this.id==="IDSaveIBSiteName"){$("#IDSafeSaveBtn").click();return false}if(this.id==="InfobarPwdEditText"){$("#VaultPwdSecurityBtn").click();return false}}T(aE(this,a2.originalEvent))}};if(v){chrome.runtime.onMessage.addListener(function(a6,a8,a3){if(a6.coToolbar){var ba=document.getElementById(a6.id),a5={},a2={},a9={},a4={},a7={};switch(a6.funcName){case"OnTabUpdated":if(a6.tabId){y=a6.tabId;aQ=a6.windowId;ap=a6.url}break;case"OnCommitted":case"OnFrameLoaded":if(a6.tabId){y=a6.tabId;aQ=a6.windowId}break;case"OnActivated":if(a6.tabId&&k){a2={};a2.window_type=D.toolbar;a2.type="docloaded";a2.event_type="docloaded";window.setTimeout(function(){K(a2,10)},1000)}break;case"GetElementLocation":a9=ba.getBoundingClientRect();a4.funcName="getScreenRect";a4.top=a9.top;a4.left=a9.left;a4.right=a9.right;a4.bottom=a9.bottom;a4.id=a6.id;a4.id=a6.id;a4.tabId=y;a4.windowId=aQ;a4.caller_thread_id=a6.caller_thread_id;window.top.postMessage(a4,"*");break;case"GetElementById":if(ba){a5.coToolbar=true;a5.id=ba.id;a5.type=ba.tagName;a5.result=true}else{a5.result=false}break;case"GetParentElement":if(ba&&ba.parentElement){a5.id=ba.parentElement.id;a5.type=ba.parentElement.tagName;a5.result=true}else{a5.result=false}break;case"GetAttributeByName":if(ba){a5.coToolbar=true;a5.id=ba.id;a5.type=ba.tagName;a5.att_name=a6.att_name;a5.att_value=ba.getAttribute(a6.att_name);a5.result=true}else{a5.result=false}break;case"GetElementText":if(ba){a5.coToolbar=true;a5.id=ba.id;a5.type=ba.tagName;if(a6.encrypted){c=a6.encrypted}if((true===c)&&((b==="VaultPwdSecurityBtnLabel")||(b==="IDSafeLoginBtn"))){if(a.length>0){a5.text=a;a5.encrypted=true}else{a5.text="";a5.encrypted=true}}else{if($(ba).prop("tagName")==="SELECT"){a5.text=$(ba).find(":selected").text()}else{if($(ba).prop("tagName")==="INPUT"){a5.text=$(ba).val()}else{a5.text=$(ba).text()}}a5.encrypted=false}b="";a5.result=true}else{a5.result=false}c=false;break;case"GetElementHtml":if(ba){a5.coToolbar=true;a5.id=ba.id;a5.type=ba.tagName;if(a6.outer){a5.html=$("<div>").append($(ba).clone()).html();a5.outer=true}else{a5.html=$(ba).html();a5.outer=false}a5.result=true}else{a5.result=false}break;case"IsToolbarVisible":a5.coToolbar=true;if($("#coToolbarDiv").is(":visible")){a5.visibility=true}else{a5.visibility=false}break;case"IsInfobarVisible":a5.coToolbar=true;if($("#coInfobarDiv").is(":visible")){a5.visibility=true}else{a5.visibility=false}break;case"RenderHtml":if(a6.css){$("head").append(a6.css)}if(D.toolbar===a6.window_type){if(a6.html){a2.window_type=a6.window_type;a2.type="docloaded";a2.event_type="docloaded";if(a6.fromBG){a7=$("#coToolbarContent").html();if(a7){a7=a7.trim()}if(!a7){$("#coToolbarContent").prepend(decodeURI(a6.html));T(aE("",a2))}else{if(!a6.userAction){T(aE("",a2))}}window.setTimeout(function(){aG();if(a6.userAction){a4.funcName="RenderHtmlAck";a4.toolbarVisible=$("#coToolbarContent:visible").length>0;i(a4)}},100)}else{if(q!==a6.html){q=a6.html;I(document.getElementById("coToolbarContent"));$("#coToolbarContent").prepend(a6.html);K(a2,500)}}}}else{if(D.infobar===a6.window_type){if(a6.html){if(!$(".InfobarGroup:visible").length){I(document.getElementById("coInfobarDiv"));$("#coInfobarDiv").prepend(a6.html);a2.window_type=a6.window_type;a2.type="docloaded";T(aE("",a2));window.setTimeout(N,100)}}}}break;case"ShowToolbar":a2.window_type=D.toolbar;aG();break;case"ShowInfobar":a2.window_type=D.infobar;N();break;case"CloseToolbar":aO();break;case"CloseInfobar":aa();break;case"updateLocation":ak=a6.screenX;aB=a6.screenY;break;case"fullScreenCheck":ar=a6.isFullScreen;if(ar){W()}else{aG()}break;case"SetAttributeByName":(function(){var bc=0,bb=window.setInterval(function(){bc+=1;if($("#"+a6.id).length){if(a6.id==="InfobarContainer"&&a6.att_name==="type"&&a6.att_value==="FillForm"){if($("#InfobarContainer").attr("type")){window.clearInterval(bb);return}}$("#"+a6.id).attr(a6.att_name,a6.att_value);if($("#"+a6.id).parents("#coInfobarDiv").length){af()}else{G()}window.clearInterval(bb)}if(bc>60){window.clearInterval(bb)}},100)}());break;case"SetElementText":(function(){var bc=0,bb=window.setInterval(function(){bc+=1;if($("#"+a6.id).length){if($("#"+a6.id).prop("tagName")==="INPUT"){$("#"+a6.id).val(a6.text)}else{$("#"+a6.id).text(a6.text)}if($("#"+a6.id).parents("#coInfobarDiv").length){af()}else{G()}window.clearInterval(bb)}if(bc>60){window.clearInterval(bb)}},100)}());break;case"ReplaceElementHtml":(function(){var bc=0,bb=window.setInterval(function(){bc+=1;if($("#"+a6.id).length){$("#"+a6.id).html(a6.html);if($("#"+a6.id).parents("#coInfobarDiv").length){af();X(D.infobar)}else{G();X(D.toolbar)}window.clearInterval(bb)}if(bc>60){window.clearInterval(bb)}},100)}());break;case"OnEncryptPassword":if(a6){a=a6.encryptedData}break}if(a3){a3(a5)}}});window.setTimeout(function(){var a2={};a2.funcName="toolbarFrameInjected";i(a2)},0);aY();aP();ac();window.onresize=function(){var a2=0,a3=0;if($("#coCloseButton:visible").length&&$("#coHideToolbarButton:visible").length&&$("#coDefaultLogo:visible").length&&$("#coToolbarContent:visible").length){a2=$("#coCloseButton:visible").width()+$("#coHideToolbarButton:visible").width()+$("#coDefaultLogo:visible").width()+$("#coToolbarContent:visible").width()+20;$("#coToolbarDiv").css({minWidth:a2+"px"})}if($(".InfobarGroup:visible").length&&$(".NortonLogo:visible").length&&$(".coCloseButton_Block:visible").length){a3=$(".InfobarGroup:visible").width()+$(".NortonLogo:visible").width()+$(".coCloseButton_Block:visible").width()+20;$("#coInfobarDiv").css({minWidth:a3+"px"})}l=0;aj=0;J()};$(document).ready(function(){$(document).bind("contextmenu",function(a2){if(a2.target&&a2.target.tagName!=="INPUT"){return false}})});$(window).mouseenter(function(){if(aJ!==window.screenX||aI!==window.screenY){J()}aJ=window.screenX;aI=window.screenY});$("#coToolbarDiv, #coInfobarDiv").mouseenter(function(a2){aj=a2.screenY-a2.clientY*window.devicePixelRatio;if(l<=0||l!==aj){l=aj;J()}})}if(aD){window.setTimeout(function(){if($("head").length&&!$("#coToolbarStyle").length){$("head").append("<link rel='stylesheet' id='coToolbarStyle' href='"+E+"' type='text/css' />")}P=e();if(!$('embed[type="application/pdf"]').length&&!$('object[type="application/pdf"]').length){window.setTimeout(function(){$(document.documentElement).append(g)},P)}if(document.location.protocol!=="chrome-extension:"){x()}aW()},0);window.onresize=function(){aW()};chrome.runtime.onMessage.addListener(function(a5,a4,a3){if(a5.coToolbar){var a2=0;switch(a5.funcName){case"adjustFrameHeight":a2=$("#coToolbarFrame:visible").height()||0;if(Math.floor(a2)!==Math.floor(a5.height)){$("#coToolbarFrame").height(a5.height);$("#coFrameDiv").height(a5.height);f("coFrameDiv");f("coToolbarFrame");aT(a2,a5.height)}break;case"OnTabUpdated":window.setTimeout(function(){aW()},100);break;case"ReloadIFrame":ab(true);break;case"OnCompleted":ab();break;case"OnBrowserAction":if($("head").length&&!$("#coToolbarStyle").length){$("head").append("<link rel='stylesheet' id='coToolbarStyle' href='"+E+"' type='text/css' />")}if(!$('embed[type="application/pdf"]').length&&!$('object[type="application/pdf"]').length){if(!$("#coToolbarFrame").length){$("#coFrameDiv").remove();$(document.documentElement).append(g)}else{ab()}}break}}});window.addEventListener("message",function(a3){if(a3.origin!==L){return}var a4=a3.data,a2=8*window.devicePixelRatio;switch(a4.funcName){case"getScreenRect":a4.top+=window.screenY+((window.outerHeight-window.innerHeight*window.devicePixelRatio)-a2);a4.left+=window.screenX+((window.outerWidth-window.innerWidth*window.devicePixelRatio)-a2);a4.bottom+=window.screenY+((window.outerHeight-window.innerHeight*window.devicePixelRatio)-a2);a4.right+=window.screenX+((window.outerWidth-window.innerWidth*window.devicePixelRatio)-a2);if(($(window).height()===document.documentElement.clientHeight)&&(screen.width-document.documentElement.clientWidth*window.devicePixelRatio)<30){a4.top+=a2;a4.left+=a2;a4.right+=a2;a4.bottom+=a2}i(a4);break;case"updateLocation":a4.screenX=ak=window.screenX+((window.outerWidth-window.innerWidth*window.devicePixelRatio)-a2);a4.screenY=aB=window.screenY+((window.outerHeight-window.innerHeight*window.devicePixelRatio)-a2);if(screen.availHeight===window.outerHeight&&screen.availWidth===window.outerWidth){a4.screenX=ak=window.screenX+((screen.width-window.outerWidth))-a2;if(a4.screenX<0){a4.screenX=0}}else{if(screen.height===window.outerHeight){a4.screenX=0}else{if(window.outerHeight-window.innerHeight>=90){a4.screenX=ak=window.screenX+8}else{a4.screenX=ak=window.screenX+8}}}if(a4.toolbarScreenTop>0){a4.screenY=a4.toolbarScreenTop+0.5}else{if(($(window).height()===document.documentElement.clientHeight)&&(screen.width-document.documentElement.clientWidth*window.devicePixelRatio)<30){a4.screenY+=a2;aB+=a2;a4.screenX+=a2;ak+=a2}}i(a4);break}},false)}})}());