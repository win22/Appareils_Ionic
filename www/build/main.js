webpackJsonp([1],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppareilsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);

//Importation de firebase Pour lier nos information à la base de donnée

var AppareilsService = /** @class */ (function () {
    function AppareilsService() {
        this.appareils$ = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["Subject"]();
        this.appareilsList = [
            {
                title: 'Machine à laver',
                description: [
                    'Volume: 6 litres',
                    'Temps de lavage: 2 heures',
                    'Consommation: 173KWh/an'
                ],
                isOn: true,
                startTime: '',
                endTime: ''
            },
            {
                title: 'Télévision',
                description: [
                    'Dimmension: 40 pouces',
                    'Consommation: 22KWh/an'
                ],
                isOn: true,
                startTime: '',
                endTime: ''
            },
            {
                title: 'Ordinateur',
                description: [
                    'Marque: fait maison',
                    'Consommation: 500KWh/an'
                ],
                isOn: false,
                startTime: '',
                endTime: ''
            }
        ];
    }
    AppareilsService.prototype.addAppareil = function (appareil) {
        this.appareilsList.push(appareil);
        this.emitAppareils();
    };
    AppareilsService.prototype.emitAppareils = function () {
        this.appareils$.next(this.appareilsList.slice());
    };
    /**Methode pour sauvegarder un appareil dans la base de donné*/
    AppareilsService.prototype.saveData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('appareils').set(_this.appareilsList).then(function (data) {
                resolve(data);
            }).catch(function (error) {
                reject(error);
            });
        });
    };
    AppareilsService.prototype.retrieveData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('appareils').once('value').then(function (data) {
                _this.appareilsList = data.val();
                _this.emitAppareils();
                resolve('DOnnées récupérées avec succès !');
            }).catch(function (error) {
                reject(error);
            });
        });
    };
    return AppareilsService;
}());

/**
 * on acced à firebase database pour avoir les methodes lier à la base de donnée
 * .ref pour recuperer une reference au node de la base de donnée, donc on cree un node appareil
 * .set qui va enregistrer this.appareilsList au node appareil, le .set veut aussi dire qu'il va remplacer toute donnée
 * qui s'y trouve donc on ne se retrouvera pas avec plusier  copie de ddonnée
 * Et comme s'est une methode asynchrone on cree notre .then
 *
 * se call back reçoi un DataSnapshot
 * */
/**une fois le service creer faudra l'ajouter dans  notre app.module.ts precisemnent dans les providers*/
//# sourceMappingURL=appareils.service.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__appareils_appareils__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings__ = __webpack_require__(393);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.appareilsPage = __WEBPACK_IMPORTED_MODULE_1__appareils_appareils__["a" /* AppareilsPage */];
        this.settingsPage = __WEBPACK_IMPORTED_MODULE_2__settings_settings__["a" /* SettingsPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"/home/sagesse/ionic/openApp/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="appareilsPage" tabtitle="Appareils" tabIcon="bulb"> </ion-tab>\n  <ion-tab [root]="settingsPage" tabtitle="Réglage" tabIcon="settings"> </ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/sagesse/ionic/openApp/src/pages/tabs/tabs.html"*/
        })
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppareilsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__single_appareil_single_appareil__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_appareils_service__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__appareil_form_appareil_form__ = __webpack_require__(392);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// creer le compoment coorespondant à la page





// ceci est un decorateur
var AppareilsPage = /** @class */ (function () {
    function AppareilsPage(modalCtl, menuCtl, navCtl, toastCtl, loadinCtl, appareilService) {
        this.modalCtl = modalCtl;
        this.menuCtl = menuCtl;
        this.navCtl = navCtl;
        this.toastCtl = toastCtl;
        this.loadinCtl = loadinCtl;
        this.appareilService = appareilService;
    }
    AppareilsPage.prototype.ngOnInit = function () {
        var _this = this;
        //Maintenant nous aurons une subscription à creer
        this.appareilsSubscription = this.appareilService.appareils$.subscribe(
        //on reçoit un tableau de type appareil
        function (appareils) {
            _this.appareilsList = appareils;
        });
        //Une fois que nous avons notre appareil nous allons faire emmettre une liste
        this.appareilService.emitAppareils();
    };
    AppareilsPage.prototype.onLoadAppareils = function (index) {
        var modal = this.modalCtl.create(__WEBPACK_IMPORTED_MODULE_2__single_appareil_single_appareil__["a" /* SingleAppareilPage */], { index: index });
        modal.present();
    };
    AppareilsPage.prototype.onToggleMenu = function () {
        this.menuCtl.open();
    };
    AppareilsPage.prototype.onNewAppareil = function () {
        this.navCtl.push(__WEBPACK_IMPORTED_MODULE_4__appareil_form_appareil_form__["a" /* AppareilFormPage */]);
    };
    //Methode pour enregistrer les information dans la base de donnée
    AppareilsPage.prototype.onSaveList = function () {
        var _this = this;
        var loader = this.loadinCtl.create({
            content: 'Sauvegarder en cours...'
        });
        loader.present();
        this.appareilService.saveData().then(function () {
            loader.dismiss();
            _this.toastCtl.create({
                message: 'Données sauvegardées !',
                duration: 4000,
                position: 'bottom'
            }).present();
        }).catch(function (error) {
            loader.dismiss();
            _this.toastCtl.create({
                message: error,
                duration: 4000,
                position: 'bottom'
            }).present();
        });
    };
    AppareilsPage.prototype.onFetchist = function () {
        var _this = this;
        var loader = this.loadinCtl.create({
            content: 'Récupération en cours...'
        });
        loader.present();
        this.appareilService.retrieveData().then(function () {
            loader.dismiss();
            _this.toastCtl.create({
                message: 'Données récupérées !',
                duration: 4000,
                position: 'bottom'
            }).present();
        }).catch(function (error) {
            loader.dismiss();
            _this.toastCtl.create({
                message: error,
                duration: 4000,
                position: 'bottom'
            }).present();
            console.log(error);
        });
    };
    AppareilsPage.prototype.ngOnDestroy = function () {
        //Pour eviter tout compertement inatendu
        this.appareilsSubscription.unsubscribe();
    };
    AppareilsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-appareils',template:/*ion-inline-start:"/home/sagesse/ionic/openApp/src/pages/appareils/appareils.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button="" menuToggle="" (click)="onToggleMenu()">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Appareils\n    </ion-title>\n\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n <ion-list>\n   <button ion-item\n           icon-start\n           *ngFor="let appareil of appareilsList;\n           let i = index"\n           (click)="onLoadAppareils(i)">\n     <!--Si notre appareil est eteint la couleur serait danger si non la couleur serait bleu-->\n     <ion-icon name="power" [color]="appareil.isOn ? \'secondary\' : \'danger\' "></ion-icon>\n     {{ appareil.title}}</button>\n </ion-list>\n  <button ion-button full color="primary" (click)="onNewAppareil()">Nouvel appareil</button>\n\n  <ion-card>\n    <ion-card-header>Données</ion-card-header>\n    <ion-card-content>\n      <button ion-button block outline (click)="onSaveList()">Enregistrer</button>\n      <button ion-button block outline (click)="onFetchist()">Récupérer</button>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n\n\n<ion-footer padding>\n  <p>Bas de page</p>\n</ion-footer>\n'/*ion-inline-end:"/home/sagesse/ionic/openApp/src/pages/appareils/appareils.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__service_appareils_service__["a" /* AppareilsService */]])
    ], AppareilsPage);
    return AppareilsPage;
}());

//# sourceMappingURL=appareils.js.map

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OptionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OptionsPage = /** @class */ (function () {
    function OptionsPage(navCtrl, navParams, menuCtl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtl = menuCtl;
    }
    OptionsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OptionsPage');
    };
    OptionsPage.prototype.onToggleMenu = function () {
        this.menuCtl.open();
    };
    OptionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-options',template:/*ion-inline-start:"/home/sagesse/ionic/openApp/src/pages/options/options.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button="" menuToggle="" (click)="onToggleMenu()">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>options</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<p>Modifier les option de l\'application ici</p>\n</ion-content>\n'/*ion-inline-end:"/home/sagesse/ionic/openApp/src/pages/options/options.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
    ], OptionsPage);
    return OptionsPage;
}());

//# sourceMappingURL=options.js.map

/***/ }),

/***/ 200:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 200;

/***/ }),

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/options/options.module": [
		779,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 245;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleAppareilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_appareils_service__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SingleAppareilPage = /** @class */ (function () {
    function SingleAppareilPage(navCtrl, navParams, appareilService, menuCtl, 
        // est utiliser afin de fermer une modal
        ViewCtl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appareilService = appareilService;
        this.menuCtl = menuCtl;
        this.ViewCtl = ViewCtl;
    }
    SingleAppareilPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SingleAppareilPage');
    };
    //est une methode qui permet de charger les information lorsque la page se lance
    SingleAppareilPage.prototype.ngOnInit = function () {
        // je recupere mes informations avec la notion d'index'
        this.index = this.navParams.get('index');
        this.appareil = this.appareilService.appareilsList[this.index];
    };
    //methode qui permet de fermer mon modal
    SingleAppareilPage.prototype.dismissModal = function () {
        this.ViewCtl.dismiss();
    };
    //Methode pour allumer un Appareil
    SingleAppareilPage.prototype.onToggleAppareil = function () {
        /**A ce niveau ma methode permet simplement de faire le contraire de l'etait de isOn*/
        this.appareil.isOn = !this.appareil.isOn;
    };
    /**Pour l'instant, la méthode  onSubmitForm()  ne fera qu'une  console.log() , simplement pour montrer que les
     * données sont disponibles et fonctionnent. Dans ce component, vous manipulez déjà l'appareil du service,
     * donc les champs du formulaire qui emploient la liaison à double sens modifient directement l'appareil et vous n'avez pas
     * besoin de manipuler les données qui s'y trouvent.  La méthode ferme ensuite la modal pour que l'utilisateur comprenne que
     * ses changements ont bien été enregistrés.  La méthode  onDeleteHours()  remet à zéro les horaires et ferme la modal.
  
     Grâce à ce formulaire géré par la méthode template, vos utilisateurs peuvent ajouter des heures d'allumage et d'extinction
     pour leurs appareils électriques.  Prochaine étape : créer un formulaire permettant aux utilisateurs de créer leur propre
     appareil.*/
    SingleAppareilPage.prototype.onSubmitForm = function (form) {
        console.log(form.value);
        this.dismissModal();
    };
    SingleAppareilPage.prototype.onDeleteHours = function () {
        this.appareil.startTime = '';
        this.appareil.endTime = '';
        this.dismissModal();
    };
    SingleAppareilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-single-appareil',template:/*ion-inline-start:"/home/sagesse/ionic/openApp/src/pages/appareils/single-appareil/single-appareil.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons end>\n      <button ion-button clear color="danger" (click)="dismissModal()">Fermer</button>\n    </ion-buttons>\n    <ion-title>{{appareil.title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <!--Mon card change de couleur en fonction de la valeur de mon is-On -->\n <ion-card [ngClass]="{\'is-On\':appareil.isOn, \'is-Off\':!appareil.isOn}">\n   <ion-card-header>\n     <ion-title>{{appareil.title}}</ion-title>\n   </ion-card-header>\n   <ion-card-content>\n     <p *ngFor="let line of appareil.description">{{line}}</p>\n   </ion-card-content>\n </ion-card>\n<ion-grid>\n  <ion-row>\n    <ion-col>\n      <button ion-button [disabled]="appareil.isOn" (click)="onToggleAppareil()" full color="secondary">Allumer</button>\n    </ion-col>\n    <ion-col>\n      <button ion-button full [disabled]="!appareil.isOn" (click)="onToggleAppareil()" color="danger">Eteindre</button>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n\n  <!--Le formulaire fonctionne comme tout formulaire template Angular :\n   vous ajoutez une référence locale de type  ngForm , vous liez la méthode de soumission du formulaire à  ngSubmit  et\n   vous ajoutez la directive  ngModel  à chaque control.  Dans ce cas précis,\n   vous ajoutez la liaison à double sens afin que les controls lisent les propriétés de l\'appareil si elles existent déjà.-->\n  <form #f="ngForm" (ngSubmit)="onSubmitForm(f)" >\n    <ion-list>\n      <ion-item>\n        <ion-label>Heure d\'allumage</ion-label>\n        <ion-datetime displayFormat="HH:mm"\n                      name="startTime" [(ngModel)]="appareil.startTime"></ion-datetime>\n      </ion-item>\n      <ion-item>\n        <ion-label>Heure d\'extinction</ion-label>\n        <ion-datetime displayFormat="HH:mm"\n                      name="endTime" [(ngModel)]="appareil.endTime"></ion-datetime>\n      </ion-item>\n    </ion-list>\n    <button ion-button full type="button" color="danger" (click)="onDeleteHours()">Supprimer horraire</button>\n    <button ion-button full type="submit" color="secondary">Enregistrer horraire</button>\n\n  </form>\n\n\n</ion-content>\n\n'/*ion-inline-end:"/home/sagesse/ionic/openApp/src/pages/appareils/single-appareil/single-appareil.html"*/,
        })
        //
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__service_appareils_service__["a" /* AppareilsService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], SingleAppareilPage);
    return SingleAppareilPage;
}());

//# sourceMappingURL=single-appareil.js.map

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppareilFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_appareils_service__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_Appareils__ = __webpack_require__(777);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppareilFormPage = /** @class */ (function () {
    function AppareilFormPage(formBuilder, appareilService, navCtl) {
        this.formBuilder = formBuilder;
        this.appareilService = appareilService;
        this.navCtl = navCtl;
    }
    /**Pour intégrer la fonctionnalité du  FormArray , il faut une méthode qui le retourne sous forme de  FormArray  (sans oublier d'importer  FormArray  depuis  @angular/forms ) **/
    AppareilFormPage.prototype.ngOnInit = function () {
        this.initForm();
    };
    AppareilFormPage.prototype.initForm = function () {
        this.appareilForm = this.formBuilder.group({
            title: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            description: this.formBuilder.array([])
        });
    };
    //avant d'utiliser un attribu de type array faut d'abord le declarer
    AppareilFormPage.prototype.getDescriptionArray = function () {
        return this.appareilForm.get('description');
    };
    //cette methode me permet d'ajouter une description
    AppareilFormPage.prototype.onAddDescription = function () {
        var newControl = this.formBuilder.control('');
        this.getDescriptionArray().controls.push(newControl);
    };
    // cette methode me permet de retirer une description
    AppareilFormPage.prototype.onRemoveDesciption = function (index) {
        this.getDescriptionArray().removeAt(index);
    };
    AppareilFormPage.prototype.onSubmitForm = function () {
        var newAppareil = new __WEBPACK_IMPORTED_MODULE_3__model_Appareils__["a" /* Appareils */](this.appareilForm.get('title').value);
        for (var _i = 0, _a = this.getDescriptionArray().controls; _i < _a.length; _i++) {
            var control = _a[_i];
            newAppareil.description.push(control.value);
        }
        this.appareilService.addAppareil(newAppareil);
        this.navCtl.pop();
    };
    AppareilFormPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-appareil-form',template:/*ion-inline-start:"/home/sagesse/ionic/openApp/src/pages/appareil-form/appareil-form.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Nouvel appareil\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<!--Les  ion-item-divider  permettent de diviser un  ion-list  en différentes parties. Intégrer un  ion-label  et un  ion-input\n dans un  ion-item  permet une mise en page automatique et propre.\nAfin de visualiser votre progrès, ajoutez  AppareilFormPage  dans les  declarations  et  entryComponents  de votre  AppModule , et créez un bouton sur  AppareilsPage  pour y accéder :-->\n\n<ion-content padding>\n  <form [formGroup]="appareilForm">\n    <ion-list>\n      <ion-item-divider>Informations </ion-item-divider>\n        <ion-item>\n          <ion-label>Nom</ion-label>\n        </ion-item>\n        <ion-input placeholder="Appareil" formControlName="title"></ion-input>\n\n      <ion-item-divider>Description</ion-item-divider>\n      <div formArrayName="description">\n        <ion-item *ngFor="let control of getDescriptionArray().controls; let i = index">\n          <ion-icon item-start\n                    name="remove-circle"\n                    color="danger"\n                    (click)="onRemoveDesciption(i)"></ion-icon>\n          <ion-input [formControlName]="i" placeholder="{{i+1}}"></ion-input>\n        </ion-item>\n      </div>\n    </ion-list>\n\n          <button ion-button full (click)="onAddDescription()" >Ajouter une ligne</button>\n\n          <button ion-button full color="secondary" (click)="onSubmitForm()" >Sauvegarder</button>\n\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/home/sagesse/ionic/openApp/src/pages/appareil-form/appareil-form.html"*/
        })
        // dans la creation de notre page on ajoute cette implementation afin d'initialiser le formulaire
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__service_appareils_service__["a" /* AppareilsService */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* NavController */]])
    ], AppareilFormPage);
    return AppareilFormPage;
}());

//# sourceMappingURL=appareil-form.js.map

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsPage = /** @class */ (function () {
    // Nous avons eu besoind d'importer AlertControleur pour pouvoir utiliser une Alerte
    function SettingsPage(alertCtl) {
        this.alertCtl = alertCtl;
    }
    //Nous avons créer cette methode pour stimuler une alerte
    SettingsPage.prototype.onToggleLight = function () {
        var alert = this.alertCtl.create({
            title: 'Attention !',
            subTitle: 'Etes vous sure de vouloir Continuer?',
            message: 'Cette action eteindra toutes les lumieres de la maison',
            buttons: [
                {
                    text: 'Annuler',
                    role: 'cancel'
                },
                {
                    text: 'Confirmer',
                    handler: function () { return console.log('confirmer'); }
                }
            ]
        });
        alert.present();
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/home/sagesse/ionic/openApp/src/pages/settings/settings.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Réglages\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n\n  <!--Nous avons crée se bouton pour stimuler une alerte -->\n  <button ion-button icon-start (click)="onToggleLight()" block>\n    <ion-icon name="power"></ion-icon>\n    Lumieres</button>\n</ion-content>\n\n\n'/*ion-inline-end:"/home/sagesse/ionic/openApp/src/pages/settings/settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_auth_service__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(174);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthPage = /** @class */ (function () {
    function AuthPage(authService, menuCtl, formBuilder, navCtl, navParams) {
        this.authService = authService;
        this.menuCtl = menuCtl;
        this.formBuilder = formBuilder;
        this.navCtl = navCtl;
        this.navParams = navParams;
    }
    AuthPage.prototype.ngOnInit = function () {
        this.mode = this.navParams.get('mode');
        this.initForm();
    };
    AuthPage.prototype.onToggleMenu = function () {
        this.menuCtl.open();
    };
    AuthPage.prototype.initForm = function () {
        this.authForm = this.formBuilder.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].email]],
            password: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
        });
    };
    AuthPage.prototype.onSubmitForm = function () {
        var _this = this;
        var email = this.authForm.get('email').value;
        var password = this.authForm.get('password').value;
        if (this.mode === 'new') {
            this.authService.signUpUser(email, password).then(function () {
                _this.navCtl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
            }).catch(function (error) {
                _this.errorMessage = error;
            });
        }
        else if (this.mode === 'connect') {
            this.authService.signInUser(email, password).then(function () {
                _this.navCtl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
            }).catch(function (error) {
                _this.errorMessage = error;
            });
        }
    };
    AuthPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-auth',template:/*ion-inline-start:"/home/sagesse/ionic/openApp/src/pages/auth/auth.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button icon-only (click)="onToggleMenu()">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n        <ion-title *ngIf="mode === \'new\'">Nouvel utilisateur</ion-title>\n    <ion-title *ngIf="mode === \'connect\'">Connexion</ion-title>\n    <ion-title>\n\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]="authForm">\n    <ion-list>\n      <ion-item>\n        <ion-label floating>Adresse mail</ion-label>\n        <ion-input type="email" formControlName="email"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Mot de passe</ion-label>\n        <ion-input type="password" formControlName="password"></ion-input>\n      </ion-item>\n    </ion-list>\n    <button ion-button full (click)="onSubmitForm()">Soumettre</button>\n    <span ion-text color="danger">{{ errorMessage }}</span>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/sagesse/ionic/openApp/src/pages/auth/auth.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */]])
    ], AuthPage);
    return AuthPage;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase__);

var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    // Methode pour la creation d'un utilisateur
    AuthService.prototype.signUpUser = function (email, password) {
        // comme il s'agit d'une methode asynchrone
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_0_firebase__["auth"]().createUserWithEmailAndPassword(email, password).then(function (user) {
                resolve(user);
            }).catch(function (error) {
                reject(error);
            });
        });
    };
    //Methode pour la connexion d'un utlisateur
    AuthService.prototype.signInUser = function (email, password) {
        // comme il s'agit d'une methode asynchrone
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_0_firebase__["auth"]().signInWithEmailAndPassword(email, password).then(function (user) {
                resolve(user);
            }).catch(function (error) {
                reject(error);
            });
        });
    };
    // Pour deconnecter un utilisateur
    AuthService.prototype.signOut = function () {
        __WEBPACK_IMPORTED_MODULE_0_firebase__["auth"]().signOut();
    };
    return AuthService;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(401);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(778);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_appareils_appareils__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_appareils_single_appareil_single_appareil__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_service_appareils_service__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_options_options__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_appareil_form_appareil_form__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_service_auth_service__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_auth_auth__ = __webpack_require__(394);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_appareils_appareils__["a" /* AppareilsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_appareils_single_appareil_single_appareil__["a" /* SingleAppareilPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_options_options__["a" /* OptionsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_appareil_form_appareil_form__["a" /* AppareilFormPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_auth_auth__["a" /* AuthPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/options/options.module#OptionsPageModule', name: 'OptionsPage', segment: 'options', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_appareils_appareils__["a" /* AppareilsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_appareils_single_appareil_single_appareil__["a" /* SingleAppareilPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_options_options__["a" /* OptionsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_appareil_form_appareil_form__["a" /* AppareilFormPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_auth_auth__["a" /* AuthPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__pages_service_appareils_service__["a" /* AppareilsService */],
                __WEBPACK_IMPORTED_MODULE_14__pages_service_auth_service__["a" /* AuthService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_options_options__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_auth_auth__ = __webpack_require__(394);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, menuCtl, splashScreen) {
        var _this = this;
        this.menuCtl = menuCtl;
        this.tabsPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
        this.optionsPage = __WEBPACK_IMPORTED_MODULE_6__pages_options_options__["a" /* OptionsPage */];
        //Pour le mode de connection
        this.authPage = __WEBPACK_IMPORTED_MODULE_7__pages_auth_auth__["a" /* AuthPage */];
        platform.ready().then(function () {
            // Initialize Firebase
            var config = {
                apiKey: "AIzaSyAK6hWnf3w9Y97hpkv4OiQ3uee0fjRN0dc",
                authDomain: "openappclass.firebaseapp.com",
                databaseURL: "https://openappclass.firebaseio.com",
                projectId: "openappclass",
                storageBucket: "openappclass.appspot.com",
                messagingSenderId: "670359302944"
            };
            __WEBPACK_IMPORTED_MODULE_4_firebase__["initializeApp"](config);
            __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]().onAuthStateChanged(function (user) {
                if (user) {
                    _this.isAuth = true;
                    _this.content.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */]);
                }
                else {
                    _this.isAuth = false;
                    _this.content.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_auth_auth__["a" /* AuthPage */], { mode: 'connect' });
                }
            });
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.onNavigate = function (page, data) {
        this.content.setRoot(page, data ? data : null);
        this.menuCtl.close();
    };
    MyApp.prototype.onDisconnect = function () {
        __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]().signOut();
        this.menuCtl.close();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('content'),
        __metadata("design:type", Object)
    ], MyApp.prototype, "content", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/sagesse/ionic/openApp/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>\n        Menu\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n  <ion-list>\n    <button ion-item icon-start (click)="onNavigate(tabsPage)" *ngIf="isAuth">\n      <ion-icon name="power"></ion-icon>\n      Appareils\n    </button>\n\n    <button ion-item icon-start (click)="onNavigate(optionsPage)" *ngIf="isAuth">\n      <ion-icon name="options"></ion-icon>\n      Réglage\n    </button>\n\n    <button ion-item icon-start (click)="onNavigate(authPage, {mode: \'new\'})" *ngIf="!isAuth">\n      <ion-icon name="person-add"></ion-icon>\n      Nouvel Utilisateur\n    </button>\n    <button ion-item icon-start (click)="onNavigate(authPage, {mode: \'connect\'})" *ngIf="!isAuth">\n      <ion-icon name="person"></ion-icon>\n      Connexion\n    </button>\n\n    <button ion-item icon-start (click)="onDisconnect()" *ngIf="isAuth">\n      <ion-icon name="exit"></ion-icon>\n      Déconnexion\n    </button>\n  </ion-list>\n  </ion-content>\n</ion-menu>\n<ion-nav [root]="tabsPage" #content></ion-nav>\n\n'/*ion-inline-end:"/home/sagesse/ionic/openApp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 777:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Appareils; });
var Appareils = /** @class */ (function () {
    function Appareils(title) {
        this.title = title;
        this.isOn = false;
        this.startTime = '';
        this.endTime = '';
        this.description = [];
    }
    return Appareils;
}());

/**Une fois notre Classe Creer avec ces Attribus, Nous nous somme dirigé dans notre service pour implemnter cela*/
//# sourceMappingURL=Appareils.js.map

/***/ }),

/***/ 778:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appareils_appareils__ = __webpack_require__(175);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.appareilPage = __WEBPACK_IMPORTED_MODULE_2__appareils_appareils__["a" /* AppareilsPage */];
    }
    HomePage.prototype.onGoToAppareils = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__appareils_appareils__["a" /* AppareilsPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/sagesse/ionic/openApp/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n\n    <ion-title>\n      Page d\'acceuil\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n <button ion-button (click)="onGoToAppareils()" > Appareils</button>\n  <button ion-button [navPush]="appareilPage" > Appareils2</button>\n</ion-content>\n'/*ion-inline-end:"/home/sagesse/ionic/openApp/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[396]);
//# sourceMappingURL=main.js.map