!function(){function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{kJmD:function(t,o,i){"use strict";i.r(o),i.d(o,"BookingEventPageModule",(function(){return P}));var r,a,s,c=i("UKGz"),l=i("pMoy"),b=i("SVse"),u=i("s7LF"),m=i("sZkV"),d=i("iInd"),g=i("mrSG"),v=i("jp9Y"),p=i("aDUK"),f=i("8Y7J"),h=i("t0hA"),k=i("Y+pZ"),y=i("T/V+"),L=[{path:"",component:(r=function(){function t(n,o,i,r,a){var s=this;e(this,t),this.formBuilder=n,this.activatedRoute=o,this.router=i,this.toastController=r,this.bookingService=a,this.selectedEventUUID="",this.selectedEventName="",this.selectedEventCapacity=40,this.currentPersonBookingCount=0;var c=n.group(v.a.createPersonForm());this.bookingForm=c,o.queryParams.subscribe((function(e){console.log("BookingEventPage -> params",e);var n=i.getCurrentNavigation();if(null!==n&&void 0!==n.extras.state){var t=n.extras.state,o=t.randomUUID,r=t.eventName,a=t.eventCapacity;s.selectedEventUUID=o,s.selectedEventName=r,s.selectedEventCapacity=a}else i.navigateByUrl("/").then((function(e){console.log("BookingEventPage -> reNavigate. No navExtras found to book",e)})).catch((function(e){console.log("BookingEventPage -> reNavigate error",e)}))}))}var o,i,r;return o=t,(i=[{key:"ngOnInit",value:function(){}},{key:"onSubmitForm",value:function(e,n){var t=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.selectedEventUUID,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:this.bookingForm,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:this.bookingService;console.log("BookingEventPage -> clickSubmitForm -> eventUUID",o,i.value);var a=i.value;e.control.setErrors({invalid:"Saving form..."}),this.presentToast().then((function(e){})).catch((function(e){})),r.bookPersonByEventUUID(o,a).subscribe((function(e){var n,i=e.errors,r=e.data;if(void 0!==i||(null==i?void 0:i.length)>0||void 0===(null===(n=r.insert_Person_one)||void 0===n?void 0:n.personFirstName))return console.log("BookingEventPage -> ngOnInit -> data",r),console.log("BookingEventPage -> ngOnInit -> errors",i),console.error("Failed to save"),void t.presentToast("Unable to book. \ud83d\udea7").then((function(e){})).catch((function(e){}));var s=r.insert_Person_one,c=Object.assign({selectedEventUUID:o},a);console.log("BookingEventPage -> ngOnInit -> returnedPerson",s),console.log("BookingEventPage -> ngOnInit -> personFormSubmission",c);var l=JSON.stringify(s),b=JSON.stringify(c);console.log("BookingEventPage -> ngOnInit -> returnedPersonSuccessLocalStorageText personFormSubmissionLocalStorageText",l,b),localStorage.setItem(p.a,l),localStorage.setItem(p.b,b),t.presentToast("\ud83d\udd16\ud83d\udcd1Booking successful \ud83d\udcbe\ud83e\uddfe\ud83d\udcdd\ud83d\udcda\ud83d\udcd7\ud83d\udcd6").then((function(e){})).catch((function(e){}))}))}},{key:"presentToast",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Loading... \ud83d\udd03",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.toastController;return Object(g.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.create({message:e,duration:4e3,animated:!0,translucent:!0});case 2:return t.abrupt("return",t.sent.present().then((function(){console.log("Toast presented")})));case 3:case"end":return t.stop()}}),t)})))}},{key:"isCapacityLocked",get:function(){return this.currentPersonBookingCount>=this.selectedEventCapacity}},{key:"isRegistrationAllowed",get:function(){return!this.isCapacityLocked}}])&&n(o.prototype,i),r&&n(o,r),t}(),r.\u0275fac=function(e){return new(e||r)(f.Jb(u.b),f.Jb(d.a),f.Jb(d.g),f.Jb(m.E),f.Jb(h.a))},r.\u0275cmp=f.Db({type:r,selectors:[["app-booking-event"]],decls:38,vars:6,consts:[[3,"translucent"],["pageTitle","Book event"],[3,"formGroup","ngSubmit"],["f","ngForm"],["src","/assets/images/emp-cmca-logo-small-172x172-placeholder.jpg","alt","Placeholder-image-church"],[2,"padding-left","0.5em","margin-bottom","0em"],["position","floating"],["formControlName","personFirstName","type","text","placeholder","First name for registration, check in and contact-tracing purposes","required",""],["formControlName","personLastName","type","text","placeholder","Your last name","required",""],["formControlName","personPhoneNumber","type","tel","placeholder","0412345678","size","12","required",""],["formControlName","personEmailAddress","type","text","placeholder","info@example.com","required",""],[3,"eventName"],["type","submit","color","cobaltblue",3,"disabled","click"],["name","person-add-outline"],["type","submit","mat-button","","color","primary","hidden","",3,"disabled"],["name","document-text"]],template:function(e,n){if(1&e){var t=f.Nb();f.Mb(0,"ion-header",0),f.Kb(1,"app-custom-header",1),f.Lb(),f.Mb(2,"ion-content"),f.Mb(3,"form",2,3),f.Ub("ngSubmit",(function(e){f.ic(t);var o=f.hc(4);return n.onSubmitForm(o,e)})),f.Mb(5,"ion-list"),f.Mb(6,"ion-list-header"),f.Mb(7,"ion-avatar"),f.Kb(8,"img",4),f.Lb(),f.Mb(9,"ion-label"),f.Mb(10,"h1",5),f.nc(11),f.Lb(),f.Lb(),f.Lb(),f.Mb(12,"ion-item"),f.Mb(13,"ion-label",6),f.nc(14," First name "),f.Lb(),f.Kb(15,"ion-input",7),f.Lb(),f.Mb(16,"ion-item"),f.Mb(17,"ion-label",6),f.nc(18," Last name "),f.Lb(),f.Kb(19,"ion-input",8),f.Lb(),f.Mb(20,"ion-item"),f.Mb(21,"ion-label",6),f.nc(22," Phone number "),f.Lb(),f.Kb(23,"ion-input",9),f.Lb(),f.Mb(24,"ion-item"),f.Mb(25,"ion-label",6),f.nc(26," Email address "),f.Lb(),f.Kb(27,"ion-input",10),f.Lb(),f.Lb(),f.Kb(28,"app-covid-declaration",11),f.Mb(29,"ion-row"),f.Mb(30,"ion-col"),f.Mb(31,"div"),f.Mb(32,"ion-button",12),f.Ub("click",(function(e){f.ic(t);var o=f.hc(4);return n.onSubmitForm(o,e)})),f.Kb(33,"ion-icon",13),f.nc(34," Create Booking "),f.Lb(),f.Mb(35,"button",14),f.Kb(36,"ion-icon",15),f.nc(37," Add Person (enter) "),f.Lb(),f.Lb(),f.Lb(),f.Lb(),f.Lb(),f.Lb()}2&e&&(f.ec("translucent",!0),f.zb(3),f.ec("formGroup",n.bookingForm),f.zb(8),f.oc(n.selectedEventName),f.zb(17),f.ec("eventName",n.selectedEventName),f.zb(4),f.ec("disabled",n.bookingForm.invalid),f.zb(3),f.ec("disabled",n.bookingForm.invalid))},directives:[m.l,k.a,m.j,u.o,u.k,u.e,m.t,m.u,m.b,m.s,m.o,m.n,m.D,u.j,u.d,u.m,y.a,m.w,m.i,m.e,m.m],styles:[""]}),r)}],E=((s=function n(){e(this,n)}).\u0275mod=f.Hb({type:s}),s.\u0275inj=f.Gb({factory:function(e){return new(e||s)},imports:[[d.i.forChild(L)],d.i]}),s),P=((a=function n(){e(this,n)}).\u0275mod=f.Hb({type:a}),a.\u0275inj=f.Gb({factory:function(e){return new(e||a)},imports:[[b.c,u.f,u.l,m.A,c.a,l.b,E]]}),a)}}])}();