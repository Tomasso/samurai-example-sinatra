(function(){!function(a,b,c){function d(a,c){var d=b.createElement("script"),e=l;d.onload=d.onerror=d[q]=function(){d[o]&&!/^c|loade/.test(d[o])||e||(d.onload=d[q]=null,e=1,j[a]=2,c())},d.async=1,d.src=a,f.insertBefore(d,f.firstChild)}function e(a,b){r(a,function(a){return!b(a)})}var f=b.getElementsByTagName("head")[0],g={},h={},i={},j={},k="string",l=!1,m="push",n="DOMContentLoaded",o="readyState",p="addEventListener",q="onreadystatechange",r=function(a,b){for(var c=0,d=a.length;c<d;++c)if(!b(a[c]))return l;return 1};!b[o]&&b[p]&&(b[p](n,function u(){b.removeEventListener(n,u,l),b[o]="complete"},l),b[o]="loading");var s=function(a,b,f){function k(){if(!--q){g[p]=1,o&&o();for(var a in i)r(a.split("|"),l)&&!e(i[a],l)&&(i[a]=[])}}function l(a){return a.call?a():g[a]}a=a[m]?a:[a];var n=b&&b.call,o=n?b:f,p=n?a.join(""):b,q=a.length;return c(function(){e(a,function(a){j[a]?(p&&(h[p]=1),j[a]==2&&k()):(j[a]=1,p&&(h[p]=1),d(s.path?s.path+a+".js":a,k))})},0),s};s.get=d,s.ready=function(a,b,c){a=a[m]?a:[a];var d=[];return!e(a,function(a){g[a]||d[m](a)})&&r(a,function(a){return g[a]})?b():!function(a){i[a]=i[a]||[],i[a][m](b),c&&c(d)}(a.join("|")),s};var t=a.$script;s.noConflict=function(){return a.$script=t,this},typeof module!="undefined"&&module.exports?module.exports=s:a.$script=s}(this,document,setTimeout);var a=Array.prototype.slice;window.Samurai={config:{},init:function(a){return this.config=a!=null?a:{},this.config.forceLoad==null&&(this.config.forceLoad=[]),this._$=window.$,Samurai.log("Bootstrapping..."),this.loadSamuraiCss(),this.loadVendorJs(this.loadSamuraiJs)},loadVendorJs:function(a){var b;return b=[],(typeof jQuery=="undefined"||jQuery===null)&&b.push("https://samurai.feefighters.com/assets/api/0.1/jquery-1-27c6e006fea79fcc37972930f5f4ae93.6.2.min.js"),Samurai.config.debugEasyXDM?b.push("https://samurai.feefighters.com/assets/api/0.1/easyXDM-2.4.15.118/easyXDM-444fbc1d87da91954055031a2c677bc1.debug.js"):b.push("https://samurai.feefighters.com/assets/api/0.1/easyXDM-2.4.15.118/easyXDM-4b211b3514d1b3fae74214f622f614a8.min.js"),$script(b,function(){return $script("https://samurai.feefighters.com/assets/api/0.1/jquery-060ea5dc067095ee6b672cc41833e389.formparams.min.js"),a()})},loadSamuraiJs:function(){return Samurai._$!==jQuery&&jQuery.noConflict(),$script("https://samurai.feefighters.com/assets/api/0.1/samurai-5632d03b2cf2f0984dcfb743f7c73162.js",function(){return window.Samurai.init(window.Samurai.config)})},loadSamuraiCss:function(){var a,b;return a=document.getElementsByTagName("head")[0],b=document.createElement("link"),b.type="text/css",b.media="screen",b.rel="stylesheet",b.href="https://samurai.feefighters.com/assets/api/0.1/samurai-642edfbef962b38d313c0226cb5da629.css",a.appendChild(b)},log:function(){var b,c,d;c=1<=arguments.length?a.call(arguments,0):[];if(!Samurai.config.debug)return;if(typeof console=="undefined"||console===null)return;return b=typeof console.log=="object",d=function(){var c,d;return d=arguments[0],c=2<=arguments.length?a.call(arguments,1):[],b?console[d](c):console[d].apply(console,c)},typeof c[0]=="string"?(c[0]="Samurai: "+c[0],d.apply(null,["log"].concat(a.call(c)))):"debug"in console?d.apply(null,["debug"].concat(a.call(c))):d.apply(null,["info"].concat(a.call(c)))},readyCallbacks:[],ready:function(a){return this.readyCallbacks.push(a)},shouldForceLoad:function(a){return jQuery.inArray(a,this.config.forceLoad)>-1}}}).call(this)