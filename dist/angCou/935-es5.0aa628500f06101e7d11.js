!function(){"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}(self.webpackChunkang_cou=self.webpackChunkang_cou||[]).push([[935],{6935:function(n,i,o){o.r(i),o.d(i,{ProfileModule:function(){return A}});var r=o(8583),c=o(4689),a=o(7716),s=o(1955),l=o(4679),p=o(263),d=o(8037),u=o(9907),f=o(2858);function g(t,e){if(1&t&&(a.ynx(0),a._UZ(1,"app-post",12),a.BQk()),2&t){var n=e.$implicit;a.xp6(1),a.Q6J("data",n)}}var m,h=((m=function(){function n(e,i,o,r){t(this,n),this.publicationService=e,this.matDialog=i,this.authService=o,this.profileService=r,this.posts=[]}var i,o,r;return i=n,(o=[{key:"ngOnInit",value:function(){var t=this;this.profileService.currentLoad().pipe((0,c.h)(function(t){return!0===t})).subscribe(function(e){return t.loadData()}),this.loadData()}},{key:"loadData",value:function(){var t=this,e=this.authService.getUserId();e&&this.publicationService.getAllById(e).subscribe(function(e){t.posts=Object.entries(e).map(function(t){return Object.assign({id:t[0]},t[1])}),console.log(t.posts)})}}])&&e(i.prototype,o),r&&e(i,r),n}()).\u0275fac=function(t){return new(t||m)(a.Y36(s.I),a.Y36(l.uw),a.Y36(p.e),a.Y36(d.H))},m.\u0275cmp=a.Xpm({type:m,selectors:[["ng-component"]],decls:17,vars:1,consts:[[1,"profile"],[2,"display","flex","justify-content","center","align-items","center","width","100%","margin-bottom","100px"],[2,"display","flex","justify-content","center","align-items","end","width","70%","height","400px","background-color","red","border-radius","0 0 15px 15px","background-image","url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWlesSSRpMdAEEqhDg6Ss3w4Y32DYHTVJkwkL-3Bz-pgjX7MCLNdqafRRhH5z6pQUvy4A&usqp=CAU')"],[2,"display","flex","flex-direction","column","margin-bottom","-150px","align-items","center"],["src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS99qly0iUeHsWnxHiMsrVVrHPjFh_Wma8NzHECqmmVXGc4mTDvEuz79s7Kgjfs49cYmII&usqp=CAU","alt","",2,"width","200px","height","200px","padding","5px","border-radius","100%"],[2,"font-size","30px","font-weight","bold"],[2,"font-size","20px"],[1,"row",2,"width","100%"],[1,"col-12","col-sm-12","col-md-6","col-lg-4","col-xl-4",2,"width","300px"],[1,"feed","col-12","col-sm-12","col-md-6","col-lg-8","col-xl-8"],[4,"ngFor","ngForOf"],["id","fb-root"],[3,"data"]],template:function(t,e){1&t&&(a.TgZ(0,"div",0),a.TgZ(1,"div",1),a.TgZ(2,"div",2),a.TgZ(3,"div",3),a._UZ(4,"img",4),a.TgZ(5,"span",5),a._uU(6,"Ricardo Pari"),a.qZA(),a.TgZ(7,"span",6),a._uU(8,"Add Bio"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(9,"div",7),a.TgZ(10,"div",8),a.TgZ(11,"p"),a._uU(12,"MENU"),a.qZA(),a.qZA(),a.TgZ(13,"div",9),a._UZ(14,"app-message-sender"),a.YNc(15,g,2,1,"ng-container",10),a.qZA(),a.qZA(),a.qZA(),a._UZ(16,"div",11)),2&t&&(a.xp6(15),a.Q6J("ngForOf",e.posts))},directives:[u.y,r.sg,f.A],styles:[".profile[_ngcontent-%COMP%]{display:flex;flex-direction:column;background-color:#f1f2f5}.profile[_ngcontent-%COMP%]   .user__avatar[_ngcontent-%COMP%]{border-radius:50%;width:45px}.profile[_ngcontent-%COMP%]   .storyReel[_ngcontent-%COMP%]{padding:10px 0;display:flex}.profile[_ngcontent-%COMP%]   .feed[_ngcontent-%COMP%]{flex:1;padding:30px 100px;display:flex;flex-direction:column;justify-content:center;align-items:center}"]}),m),v=o(8297),x=o(9401),b=o(1078),y=o(3038),Z=[{path:"",component:h}],A=function(){var e=function e(){t(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({providers:[s.I],imports:[[r.ez,b.K,y.M,v.Bz.forChild(Z),x.m]]}),e}()}}])}();