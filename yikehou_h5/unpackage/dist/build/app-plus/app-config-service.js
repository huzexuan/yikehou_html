
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/login/student_login","pages/login/school_login","pages/course/index","component/pages_header","pages/AboutUs/index","pages/new/index","pages/AboutUs/joinHands","pages/course/details","pages/student/me","pages/student/course","pages/student/feedback","pages/school/me","pages/school/heat","pages/school/condition","pages/school/information","pages/school/feedback","component/index_nav","pages/new/newDetails","pages/course/seach_coures"],"window":{"navigationBarTextStyle":"white","navigationStyle":"custom","navigationBarBackgroundColor":"#007AFF","backgroundColor":"#FFFFFF"},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"yikehou_h5","compilerVersion":"2.7.14","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true},"window":{}},{"path":"/pages/login/student_login","meta":{},"window":{}},{"path":"/pages/login/school_login","meta":{},"window":{}},{"path":"/pages/course/index","meta":{},"window":{}},{"path":"/component/pages_header","meta":{},"window":{}},{"path":"/pages/AboutUs/index","meta":{},"window":{}},{"path":"/pages/new/index","meta":{},"window":{}},{"path":"/pages/AboutUs/joinHands","meta":{},"window":{}},{"path":"/pages/course/details","meta":{},"window":{}},{"path":"/pages/student/me","meta":{},"window":{}},{"path":"/pages/student/course","meta":{},"window":{}},{"path":"/pages/student/feedback","meta":{},"window":{}},{"path":"/pages/school/me","meta":{},"window":{}},{"path":"/pages/school/heat","meta":{},"window":{}},{"path":"/pages/school/condition","meta":{},"window":{}},{"path":"/pages/school/information","meta":{},"window":{}},{"path":"/pages/school/feedback","meta":{},"window":{}},{"path":"/component/index_nav","meta":{},"window":{}},{"path":"/pages/new/newDetails","meta":{},"window":{}},{"path":"/pages/course/seach_coures","meta":{},"window":{}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});