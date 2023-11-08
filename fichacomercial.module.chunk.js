webpackJsonp(["fichacomercial.module"],{

/***/ "./src/app/pages/obra/fichacomercial/fichacomercial-datos/fichacomercial-datos.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/obra/fichacomercial/fichacomercial-datos/fichacomercial-datos.component.html":
/***/ (function(module, exports) {

module.exports = "<form action=\"#\" id=\"form-id\" (ngSubmit)=\"add()\" #ctrlform=\"ngForm\">\n  <div class=\"form-body p-20\">\n    <h3 class=\"card-title\">Datos Comercial </h3>\n    <hr>\n    <div class=\"row p-t-20\">\n      <div class=\"col-md-3\">\n        <div class=\"form-group\">\n          <label class=\"control-label\">Nombre</label>\n          <input type=\"text\" id=\"cname\" class=\"form-control\" placeholder=\"Nombre\" [(ngModel)]=\"item.datos.cnombre\"\n            name=\"cname\" required #cnombre=\"ngModel\">\n          <span class=\"messages text-danger\" *ngIf=\"cnombre.errors && (cnombre.dirty || cnombre.touched||submit)\">Campo\n            requerido</span>\n          <small class=\"form-control-feedback\"> Escriba el nombre del comercial </small> </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"form-group\">\n          <label class=\"control-label\">Telefono</label>\n          <input type=\"text\" id=\"ctelefono\" class=\"form-control\" placeholder=\"Telefono\"\n            [(ngModel)]=\"item.datos.ctelefono\" name=\"ctelefono\" required #ctelefono=\"ngModel\">\n          <span class=\"messages text-danger\"\n            *ngIf=\"ctelefono.errors && (ctelefono.dirty || ctelefono.touched||submit)\">Campo requerido</span>\n          <small class=\"form-control-feedback\"> Escriba el telefono del comercial </small> </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"form-group\">\n          <label class=\"control-label\">Email</label>\n          <input type=\"email\" id=\"cemail\" class=\"form-control\" placeholder=\"Email\" [(ngModel)]=\"item.datos.cemail\"\n            name=\"cemail\" required #cemail=\"ngModel\">\n          <span class=\"messages text-danger\" *ngIf=\"cemail.errors && (cemail.dirty || cemail.touched||submit)\">Campo\n            requerido</span>\n          <small class=\"form-control-feedback\"> Escriba el email del comercial </small> </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"form-group\">\n          <label class=\"control-label\">Provincia</label>\n          <input type=\"email\" id=\"cprovincia\" class=\"form-control\" placeholder=\"Provincia\"\n            [(ngModel)]=\"item.datos.cprovincia\" name=\"cprovincia\" required #cprovincia=\"ngModel\">\n          <span class=\"messages text-danger\"\n            *ngIf=\"cprovincia.errors && (cprovincia.dirty || cprovincia.touched||submit)\">Campo requerido</span>\n          <small class=\"form-control-feedback\"> Escriba la provincia del comercial </small> </div>\n      </div>\n\n      <!--/span-->\n\n      <!--/span-->\n    </div>\n    <h3 class=\"card-title\">Datos Cliente </h3>\n    <hr>\n    <div class=\"row p-t-20\">\n      <div class=\"col-md-4\">\n        <div class=\"form-group\">\n          <label class=\"control-label\">Razon Social</label>\n          <input type=\"text\" id=\"clirazonsocial\" class=\"form-control\" placeholder=\"Razon social\"\n            [(ngModel)]=\"item.datos.clirazonsocial\" name=\"clirazonsocial\" required #clirazonsocial=\"ngModel\">\n          <span class=\"messages text-danger\"\n            *ngIf=\"clirazonsocial.errors && (clirazonsocial.dirty || clirazonsocial.touched||submit)\">Campo\n            requerido</span>\n          <small class=\"form-control-feedback\"> Escriba la razon social del cliente </small> </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"form-group\">\n          <label class=\"control-label\">Cif</label>\n          <input type=\"text\" id=\"clicif\" class=\"form-control\" placeholder=\"Cif\" [(ngModel)]=\"item.datos.clicif\"\n            name=\"clicif\" required #clicif=\"ngModel\">\n          <span class=\"messages text-danger\" *ngIf=\"clicif.errors && (clicif.dirty || clicif.touched||submit)\">Campo\n            requerido</span>\n          <small class=\"form-control-feedback\"> Escriba el cid del cliente</small> </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"form-group\">\n          <label class=\"control-label\">Dirección</label>\n          <input type=\"text\" id=\"clidireccion\" class=\"form-control\" placeholder=\"Diercción\"\n            [(ngModel)]=\"item.datos.clidireccion\" name=\"clidireccion\" required #clidireccion=\"ngModel\">\n          <span class=\"messages text-danger\"\n            *ngIf=\"clidireccion.errors && (clidireccion.dirty || clidireccion.touched||submit)\">Campo requerido</span>\n          <small class=\"form-control-feedback\"> Escriba la dirección del cliente</small> </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"form-group\">\n          <label class=\"control-label\">Teléfono</label>\n          <input type=\"text\" id=\"clitelefono\" class=\"form-control\" placeholder=\"Telefono\"\n            [(ngModel)]=\"item.datos.clitelefono\" name=\"clitelefono\" required #clitelefono=\"ngModel\">\n          <span class=\"messages text-danger\"\n            *ngIf=\"clitelefono.errors && (clitelefono.dirty || clitelefono.touched||submit)\">Campo requerido</span>\n          <small class=\"form-control-feedback\"> Escriba el telefono del cliente</small> </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"form-group\">\n          <label class=\"control-label\">Población</label>\n          <input type=\"text\" id=\"clipoblacion\" class=\"form-control\" placeholder=\"Poblacion\"\n            [(ngModel)]=\"item.datos.clipoblacion\" name=\"clipoblacion\" required #clipoblacion=\"ngModel\">\n          <span class=\"messages text-danger\"\n            *ngIf=\"clipoblacion.errors && (clipoblacion.dirty || clipoblacion.touched||submit)\">Campo requerido</span>\n          <small class=\"form-control-feedback\"> Escriba la población del cliente</small> </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"form-group\">\n          <label class=\"control-label\">Provincia</label>\n          <input type=\"text\" id=\"cliprovincia\" class=\"form-control\" placeholder=\"Provincia\"\n            [(ngModel)]=\"item.datos.cliprovincia\" name=\"cliprovincia\" required #cliprovincia=\"ngModel\">\n          <span class=\"messages text-danger\"\n            *ngIf=\"cliprovincia.errors && (cliprovincia.dirty || cliprovincia.touched||submit)\">Campo requerido</span>\n          <small class=\"form-control-feedback\"> Escriba el telefono del cliente</small> </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"form-group\">\n          <label class=\"control-label\">Persona de contacto</label>\n          <input type=\"text\" id=\"connombre\" class=\"form-control\" placeholder=\"Persona de contacto\"\n            [(ngModel)]=\"item.datos.connombre\" name=\"connombre\" required #connombre=\"ngModel\">\n          <span class=\"messages text-danger\"\n            *ngIf=\"connombre.errors && (connombre.dirty || connombre.touched||submit)\">Campo requerido</span>\n          <small class=\"form-control-feedback\"> Escriba el nombre del contacto del cliente</small> </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"form-group\">\n          <label class=\"control-label\">Telefono de contacto</label>\n          <input type=\"text\" id=\"contelefono\" class=\"form-control\" placeholder=\"Telefono de contacto\"\n            [(ngModel)]=\"item.datos.contelefono\" name=\"contelefono\" required #contelefono=\"ngModel\">\n          <span class=\"messages text-danger\"\n            *ngIf=\"contelefono.errors && (contelefono.dirty || contelefono.touched||submit)\">Campo requerido</span>\n          <small class=\"form-control-feedback\"> Escriba el telefono del contacto del cliente</small> </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"form-group\">\n          <label class=\"control-label\">Email de contacto</label>\n          <input type=\"mail\" id=\"conemail\" class=\"form-control\" placeholder=\"Email de contacto\"\n            [(ngModel)]=\"item.datos.conemail\" name=\"conemail\" required #conemail=\"ngModel\">\n          <span class=\"messages text-danger\"\n            *ngIf=\"conemail.errors && (conemail.dirty || conemail.touched||submit)\">Campo requerido</span>\n          <small class=\"form-control-feedback\"> Escriba el email del contacto del cliente</small> </div>\n      </div>\n\n      <!--/span-->\n\n      <!--/span-->\n    </div>\n    <h3 class=\"card-title\">Datos Ubicaión NPV </h3>\n    <hr>\n    <div class=\"row p-t-20\">\n      <div class=\"col-md-4\">\n        <div class=\"form-group\">\n          <label class=\"control-label\">Nombre</label><br>\n          <span>{{item.estacionservicio.name}}</span>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"control-label\">Dirección</label><br>\n          <span>{{item.estacionservicio.direccion}}</span>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"control-label\">Telefono</label><br>\n          <span>{{item.estacionservicio.telefonos}}</span>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"control-label\">Localidad</label><br>\n          <span>{{item.estacionservicio.localidad}}</span>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"control-label\">Provincia</label><br>\n          <span>{{item.estacionservicio.provincica}}</span>\n        </div>\n      </div>\n      <div class=\"col-md-8\">\n        <div class=\"form-group\">\n          <label class=\"control-label\">Imagen</label><br>\n          <div id=\"markermap\" class=\"gmaps\" #gmap></div>\n        </div>\n      </div>\n    </div>\n    <h3 class=\"card-title\">Datos Ingenieria</h3>\n    <hr>\n    <div class=\"row p-t-20\">\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label class=\"control-label\">Razon Social</label>\n          <input type=\"text\" id=\"ingrazonsocial\" class=\"form-control\" placeholder=\"Razon social\"\n            [(ngModel)]=\"item.datos.ingrazonsocial\" name=\"ingrazonsocial\" required #ingrazonsocial=\"ngModel\">\n          <span class=\"messages text-danger\"\n            *ngIf=\"ingrazonsocial.errors && (ingrazonsocial.dirty || ingrazonsocial.touched||submit)\">Campo\n            requerido</span>\n          <small class=\"form-control-feedback\"> Escriba la razon social </small> </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label class=\"control-label\">Cif</label>\n          <input type=\"text\" id=\"ingcif\" class=\"form-control\" placeholder=\"Cif\" [(ngModel)]=\"item.datos.ingcif\"\n            name=\"ingcif\" required #ingcif=\"ngModel\">\n          <span class=\"messages text-danger\" *ngIf=\"ingcif.errors && (ingcif.dirty || ingcif.touched||submit)\">Campo\n            requerido</span>\n          <small class=\"form-control-feedback\"> Escriba el cid </small> </div>\n      </div>\n\n      <div class=\"col-md-4\">\n        <div class=\"form-group\">\n          <label class=\"control-label\">Persona de contacto</label>\n          <input type=\"text\" id=\"ingnombre\" class=\"form-control\" placeholder=\"Persona de contacto\"\n            [(ngModel)]=\"item.datos.ingnombre\" name=\"ingnombre\" required #ingnombre=\"ngModel\">\n          <span class=\"messages text-danger\"\n            *ngIf=\"ingnombre.errors && (ingnombre.dirty || ingnombre.touched||submit)\">Campo requerido</span>\n          <small class=\"form-control-feedback\"> Escriba el nombre </small> </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"form-group\">\n          <label class=\"control-label\">Telefono de contacto</label>\n          <input type=\"text\" id=\"ingtelefono\" class=\"form-control\" placeholder=\"Telefono de contacto\"\n            [(ngModel)]=\"item.datos.ingtelefono\" name=\"ingtelefono\" required #ingtelefono=\"ngModel\">\n          <span class=\"messages text-danger\"\n            *ngIf=\"ingtelefono.errors && (ingtelefono.dirty || ingtelefono.touched||submit)\">Campo requerido</span>\n          <small class=\"form-control-feedback\"> Escriba el telefono del contacto</small> </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"form-group\">\n          <label class=\"control-label\">Email de contacto</label>\n          <input type=\"mail\" id=\"ingemail\" class=\"form-control\" placeholder=\"Email de contacto\"\n            [(ngModel)]=\"item.datos.ingemail\" name=\"ingemail\" required #ingemail=\"ngModel\">\n          <span class=\"messages text-danger\"\n            *ngIf=\"ingemail.errors && (ingemail.dirty || ingemail.touched||submit)\">Campo requerido</span>\n          <small class=\"form-control-feedback\"> Escriba el email del contacto </small> </div>\n      </div>\n\n      <!--/span-->\n\n      <!--/span-->\n    </div>\n    <h3 class=\"card-title\">Datos Coordinador de Seguridad</h3>\n    <hr>\n    <div class=\"row p-t-20\">\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label class=\"control-label\">Razon Social</label>\n          <input type=\"text\" id=\"segrazonsocial\" class=\"form-control\" placeholder=\"Razon social\"\n            [(ngModel)]=\"item.datos.segrazonsocial\" name=\"segrazonsocial\" required #segrazonsocial=\"ngModel\">\n          <span class=\"messages text-danger\"\n            *ngIf=\"segrazonsocial.errors && (segrazonsocial.dirty || segrazonsocial.touched||submit)\">Campo\n            requerido</span>\n          <small class=\"form-control-feedback\"> Escriba la razon social </small> </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label class=\"control-label\">Cif</label>\n          <input type=\"text\" id=\"segcif\" class=\"form-control\" placeholder=\"Cif\" [(ngModel)]=\"item.datos.segcif\"\n            name=\"segcif\" required #segcif=\"ngModel\">\n          <span class=\"messages text-danger\" *ngIf=\"segcif.errors && (segcif.dirty || segcif.touched||submit)\">Campo\n            requerido</span>\n          <small class=\"form-control-feedback\"> Escriba el cid </small> </div>\n      </div>\n\n      <div class=\"col-md-4\">\n        <div class=\"form-group\">\n          <label class=\"control-label\">Persona de contacto</label>\n          <input type=\"text\" id=\"segnombre\" class=\"form-control\" placeholder=\"Persona de contacto\"\n            [(ngModel)]=\"item.datos.segnombre\" name=\"segnombre\" required #segnombre=\"ngModel\">\n          <span class=\"messages text-danger\"\n            *ngIf=\"segnombre.errors && (segnombre.dirty || segnombre.touched||submit)\">Campo requerido</span>\n          <small class=\"form-control-feedback\"> Escriba el nombre </small> </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"form-group\">\n          <label class=\"control-label\">Telefono de contacto</label>\n          <input type=\"text\" id=\"segtelefono\" class=\"form-control\" placeholder=\"Telefono de contacto\"\n            [(ngModel)]=\"item.datos.segtelefono\" name=\"segtelefono\" required #segtelefono=\"ngModel\">\n          <span class=\"messages text-danger\"\n            *ngIf=\"segtelefono.errors && (segtelefono.dirty || segtelefono.touched||submit)\">Campo requerido</span>\n          <small class=\"form-control-feedback\"> Escriba el telefono del contacto</small> </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"form-group\">\n          <label class=\"control-label\">Email de contacto</label>\n          <input type=\"mail\" id=\"segemail\" class=\"form-control\" placeholder=\"Email de contacto\"\n            [(ngModel)]=\"item.datos.segemail\" name=\"segemail\" required #segemail=\"ngModel\">\n          <span class=\"messages text-danger\"\n            *ngIf=\"segemail.errors && (segemail.dirty || segemail.touched||submit)\">Campo requerido</span>\n          <small class=\"form-control-feedback\"> Escriba el email del contacto </small> </div>\n      </div>\n\n      <!--/span-->\n\n      <!--/span-->\n    </div>\n    <div class=\"form-actions\">\n      <button type=\"submit\" class=\"btn btn-success\"> <i class=\"fa fa-check\"></i> Guardar</button>\n      <button type=\"button\" class=\"btn btn-inverse\" routerLink=\"/perfiles\">Cancelar</button>\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/pages/obra/fichacomercial/fichacomercial-datos/fichacomercial-datos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FichacomercialDatosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_viewmodel_fichacomercialdatos__ = __webpack_require__("./src/app/viewmodel/fichacomercialdatos.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng4_loading_spinner__ = __webpack_require__("./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_shared_can_deactivate_guard_can_deactivate_guard_service__ = __webpack_require__("./src/app/shared/can-deactivate-guard/can-deactivate-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_services_fichacomercial_fichacomercial_service__ = __webpack_require__("./src/app/services/fichacomercial/fichacomercial.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_google_apis_maps_service__ = __webpack_require__("./src/app/google-apis/maps.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FichacomercialDatosComponent = /** @class */ (function () {
    function FichacomercialDatosComponent(spinnerService, fichacomercialService, notificationService, localDataService, candeactivateguard, mapsService) {
        this.spinnerService = spinnerService;
        this.fichacomercialService = fichacomercialService;
        this.notificationService = notificationService;
        this.localDataService = localDataService;
        this.candeactivateguard = candeactivateguard;
        this.mapsService = mapsService;
        this.markers = [];
        this.lat = 40.50017;
        this.long = -3.89239;
        this.item = new __WEBPACK_IMPORTED_MODULE_1__app_viewmodel_fichacomercialdatos__["a" /* FichaComercialDatos */]();
    }
    FichacomercialDatosComponent.prototype.ngOnInit = function () {
        this.item.datos = this.item.datos == undefined ? new __WEBPACK_IMPORTED_MODULE_1__app_viewmodel_fichacomercialdatos__["a" /* FichaComercialDatos */]() : this.item.datos;
        this.initmap();
        var myLatlng = new google.maps.LatLng(this.item.estacionservicio.lat, this.item.estacionservicio.lng);
        this.addclickmarker(myLatlng);
    };
    FichacomercialDatosComponent.prototype.add = function () {
        var _this = this;
        this.submit = true;
        if (this.ctrlform.invalid) {
            return false;
        }
        this.submit = false;
        this.spinnerService.show();
        this.candeactivateguard.setedit(false);
        this.item.fk_empresa = this.localDataService.getLocalData('empresaSeleccionada').id;
        this.item.paso = 1;
        this.fichacomercialService.update(this.item)
            .subscribe(function (value) {
            _this.spinnerService.hide();
            _this.notificationService.onSuccess('Los datos basicos actualizados.');
        }, function (err) {
            _this.spinnerService.hide();
            if (err.status_code == 422) {
                _this.notificationService.onError("Los datos basicos  ya existen.");
            }
            else {
                _this.notificationService.onError("Se ha producido un error.");
            }
        });
    };
    FichacomercialDatosComponent.prototype.addclickmarker = function (myLatlng) {
        var marker = new google.maps.Marker({
            position: myLatlng,
            map: this.map,
            animation: google.maps.Animation.DROP,
            title: 'Hola!',
            label: 'D'
        });
        this.setMapOnAll(null);
        this.markers.push(marker);
        this.map.setCenter(marker.getPosition());
    };
    FichacomercialDatosComponent.prototype.setMapOnAll = function (map) {
        for (var i = 0; i < this.markers.length; i++) {
            this.markers[i].setMap(map);
        }
        this.markers = [];
    };
    FichacomercialDatosComponent.prototype.initmap = function () {
        var _this = this;
        var myLatlng = new google.maps.LatLng(this.lat, this.long);
        var mapProp = {
            center: myLatlng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
        };
        this.markers = [];
        this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
        google.maps.event.addListener(this.map, 'click', function (event) {
            var myLatLng = event.latLng;
            var lat = myLatLng.lat();
            var lng = myLatLng.lng();
            _this.item.lat = lat;
            _this.item.lng = lng;
            _this.addclickmarker(myLatLng);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FichacomercialDatosComponent.prototype, "item", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('ctrlform'),
        __metadata("design:type", Object)
    ], FichacomercialDatosComponent.prototype, "ctrlform", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('gmap'),
        __metadata("design:type", Object)
    ], FichacomercialDatosComponent.prototype, "gmapElement", void 0);
    FichacomercialDatosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-fichacomercial-datos',
            template: __webpack_require__("./src/app/pages/obra/fichacomercial/fichacomercial-datos/fichacomercial-datos.component.html"),
            styles: [__webpack_require__("./src/app/pages/obra/fichacomercial/fichacomercial-datos/fichacomercial-datos.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ng4_loading_spinner__["Ng4LoadingSpinnerService"],
            __WEBPACK_IMPORTED_MODULE_5__app_services_fichacomercial_fichacomercial_service__["a" /* FichacomercialService */],
            __WEBPACK_IMPORTED_MODULE_4__app_shared__["k" /* NotificationService */],
            __WEBPACK_IMPORTED_MODULE_4__app_shared__["i" /* LocalDataService */],
            __WEBPACK_IMPORTED_MODULE_3__app_shared_can_deactivate_guard_can_deactivate_guard_service__["a" /* Candeactivateguard */],
            __WEBPACK_IMPORTED_MODULE_6__app_google_apis_maps_service__["a" /* MapsService */]])
    ], FichacomercialDatosComponent);
    return FichacomercialDatosComponent;
}());



/***/ }),

/***/ "./src/app/pages/obra/fichacomercial/fichacomercial-edit/fichacomercial-edit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/obra/fichacomercial/fichacomercial-edit/fichacomercial-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Page wrapper  -->\n<!-- ============================================================== -->\n<div class=\"page-wrapper\">\n  <!-- ============================================================== -->\n  <!-- Container fluid  -->\n  <!-- ============================================================== -->\n  <div class=\"container-fluid\">\n    <!-- ============================================================== -->\n    <!-- Bread crumb and right sidebar toggle -->\n    <!-- ============================================================== -->\n    \n    <!-- ============================================================== -->\n    <!-- End Bread crumb and right sidebar toggle -->\n    <!-- ============================================================== -->\n    <!-- ============================================================== -->\n    <!-- Start Page Content -->\n    <!-- ============================================================== -->\n    <!-- Row -->\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <div class=\"card\">\n          <div class=\"card-header bg-info\">\n            <h4 class=\"m-b-0 text-white\">Configuración Ficha Comercial</h4>\n          </div>\n          <div class=\"card-body\">\n            <ul class=\"nav nav-tabs customtab\" role=\"tablist\">\n              <li class=\"nav-item\"> <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#datosbasicos\" role=\"tab\"><span\n                    class=\"hidden-sm-up\"><i class=\"ti-bookmark-alt\"></i></span> <span class=\"hidden-xs-down\">Datos\n                    basicos</span></a> </li>\n              <li class=\"nav-item\"> <a class=\"nav-link\" data-toggle=\"tab\" href=\"#presupuesto\" role=\"tab\"><span\n                    class=\"hidden-sm-up\"><i class=\" ti-money\"></i></span> <span\n                    class=\"hidden-xs-down\">Presupuesto</span></a> </li>\n              <li class=\"nav-item\"> <a class=\"nav-link\" data-toggle=\"tab\" href=\"#elementos\" role=\"tab\"><span\n                    class=\"hidden-sm-up\"><i class=\" ti-ruler-pencil\"></i></span> <span class=\"hidden-xs-down\">Elementos\n                    Presupuestados</span></a> </li>\n              <li class=\"nav-item\" *ngIf=\"item.paso==3||item.paso==4\"> <a class=\"nav-link\" data-toggle=\"tab\" href=\"#obra\"\n                  role=\"tab\"><span class=\"hidden-sm-up\"><i class=\" ti-paint-roller\"></i></span>\n                  <span class=\"hidden-xs-down\"> Registro de Obra</span></a> </li>\n            </ul>\n            <div class=\"tab-content\">\n              <div class=\"tab-pane active show\" id=\"datosbasicos\" role=\"tabpanel\" *ngIf=\"item.id\">\n\n                <app-fichacomercial-datos [item]=\"item\"></app-fichacomercial-datos>\n\n              </div>\n              <div class=\"tab-pane p-20\" id=\"presupuesto\" role=\"tabpanel\" *ngIf=\"item.id\">\n                <app-fichacomercial-presupuesto [item]=\"item\"></app-fichacomercial-presupuesto>\n              </div>\n              <div class=\"tab-pane p-20\" id=\"elementos\" role=\"tabpanel\" *ngIf=\"item.id\">\n                <app-fichacomercial-elementos [item]=\"item\"></app-fichacomercial-elementos>\n              </div>\n              <div class=\"tab-pane p-20\" id=\"obra\" role=\"tabpanel\" *ngIf=\"item.id\">\n                <form action=\"#\" id=\"form-id\" (ngSubmit)=\"add()\" #ctrlform=\"ngForm\">\n                  <div class=\"form-body p-20\">\n                    <h3 class=\"card-title\">Crear Obra </h3>\n                    <hr>\n                    <div class=\"row p-t-20\">\n                      <div class=\"col-md-6\">\n                        <label class=\"control-label\">Usuario asignado</label>\n                        <select class=\"form-control custom-select\" [(ngModel)]=\"item.usuario_asignado_id\"\n                          name=\"ctrltecadicional\" #ctrltecadicional=\"ngModel\" required>\n                          <option value=\"-1\">Seleccione</option>\n                          <ng-container *ngFor=\"let usr of usuariosobra\">\n                            <option *ngIf=\"!usr.selected\" [value]=\"usr.id.toString()\">\n                              {{ usr.name }} ({{usr.relpefil.nombre}})\n\n                            </option>\n                          </ng-container>\n\n                        </select>\n                        <span class=\"messages text-danger\"\n                          *ngIf=\"ctrltecadicional.errors && (ctrltecadicional.dirty || ctrltecadicional.touched||submit)\">Campo\n                          requerido</span>\n                        <small class=\"form-control-feedback\">Asigne el usuario </small>\n                      </div>\n                    </div>\n                    <div class=\"form-actions\">\n                      <button type=\"submit\" class=\"btn btn-success\"> <i class=\"fa fa-check\"></i> Guardar</button>\n                      <button type=\"button\" class=\"btn btn-inverse\" routerLink=\"/obra/fichacomercial\">Cancelar</button>\n                    </div>\n\n                  </div>\n                </form>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- Row -->\n    <!-- ============================================================== -->\n    <!-- End PAge Content -->\n    <!-- ============================================================== -->\n    <!-- ============================================================== -->"

/***/ }),

/***/ "./src/app/pages/obra/fichacomercial/fichacomercial-edit/fichacomercial-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FichacomercialEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng4_loading_spinner__ = __webpack_require__("./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_shared_can_deactivate_guard_can_deactivate_guard_service__ = __webpack_require__("./src/app/shared/can-deactivate-guard/can-deactivate-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_services_fichacomercial_fichacomercial_service__ = __webpack_require__("./src/app/services/fichacomercial/fichacomercial.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_viewmodel_fichacomercial__ = __webpack_require__("./src/app/viewmodel/fichacomercial.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FichacomercialEditComponent = /** @class */ (function () {
    function FichacomercialEditComponent(spinnerService, fichacomercialService, router, route, notificationService, localDataService, candeactivateguard) {
        this.spinnerService = spinnerService;
        this.fichacomercialService = fichacomercialService;
        this.router = router;
        this.route = route;
        this.notificationService = notificationService;
        this.localDataService = localDataService;
        this.candeactivateguard = candeactivateguard;
        this.submit = false;
        this.candeactivateguard.setedit(true);
        this.getById();
    }
    FichacomercialEditComponent.prototype.ngOnInit = function () {
        this.item = new __WEBPACK_IMPORTED_MODULE_6__app_viewmodel_fichacomercial__["a" /* FichaComercial */]();
    };
    FichacomercialEditComponent.prototype.getById = function () {
        var _this = this;
        this.spinnerService.show();
        var $id = this.route.snapshot.paramMap.get('id');
        this.fichacomercialService.getById($id)
            .subscribe(function (response) {
            _this.item = response.data.formulario;
            _this.usuariosobra = response.data.usuariosobra;
            if (_this.item.elementoscampos.length == 0) {
                _this.item.elementoscampos = _this.item._elementoscampos;
            }
            _this.spinnerService.hide();
        });
    };
    FichacomercialEditComponent.prototype.add = function () {
        var _this = this;
        this.submit = true;
        if (this.ctrlform.invalid) {
            return false;
        }
        this.submit = false;
        this.spinnerService.show();
        this.candeactivateguard.setedit(false);
        this.item.fk_empresa = this.localDataService.getLocalData('empresaSeleccionada').id;
        this.item.paso = 4;
        this.fichacomercialService.update(this.item)
            .subscribe(function (value) {
            _this.spinnerService.hide();
            _this.notificationService.onSuccess('Ficha comercial asignada.');
            _this.router.navigateByUrl('obra/fichacomercial');
        }, function (err) {
            _this.spinnerService.hide();
            if (err.status_code == 422) {
                _this.notificationService.onError("Ficha comercial ya existe");
            }
            else {
                _this.notificationService.onError("Se ha producido un error.");
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('ctrlform'),
        __metadata("design:type", Object)
    ], FichacomercialEditComponent.prototype, "ctrlform", void 0);
    FichacomercialEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-fichacomercial-edit',
            template: __webpack_require__("./src/app/pages/obra/fichacomercial/fichacomercial-edit/fichacomercial-edit.component.html"),
            styles: [__webpack_require__("./src/app/pages/obra/fichacomercial/fichacomercial-edit/fichacomercial-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ng4_loading_spinner__["Ng4LoadingSpinnerService"],
            __WEBPACK_IMPORTED_MODULE_5__app_services_fichacomercial_fichacomercial_service__["a" /* FichacomercialService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__app_shared__["k" /* NotificationService */],
            __WEBPACK_IMPORTED_MODULE_4__app_shared__["i" /* LocalDataService */],
            __WEBPACK_IMPORTED_MODULE_3__app_shared_can_deactivate_guard_can_deactivate_guard_service__["a" /* Candeactivateguard */]])
    ], FichacomercialEditComponent);
    return FichacomercialEditComponent;
}());



/***/ }),

/***/ "./src/app/pages/obra/fichacomercial/fichacomercial-elementos/fichacomercial-elementos.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/obra/fichacomercial/fichacomercial-elementos/fichacomercial-elementos.component.html":
/***/ (function(module, exports) {

module.exports = "<form action=\"#\" id=\"form-id\" (ngSubmit)=\"add()\" [formGroup]=\"ctrlform\">\n  <div class=\"form-body p-20\">\n    <h3 class=\"card-title\">Elementos presupuestados </h3>\n    <hr>\n    <div class=\"row p-t-20\">\n      <ng-container *ngFor=\"let elemento of item.elementoscampos;\">\n        <div\n          [ngClass]=\"{'col-md-6': elemento.elementocampo.tipo!='Split', 'col-md-12': elemento.elementocampo.tipo=='Split'}\">\n          <div class=\"form-group\">\n\n            <div *ngIf=\"elemento.elementocampo.tipo=='Checkbox'\" class=\"custom-control custom-checkbox mr-sm-2\">\n              <input class=\"custom-control-input\" id=\"ctrl_{{elemento.elementocampo.id}}\"\n                name=\"ctrl_{{elemento.elementocampo.id}}\" formControlName=\"ctrl_{{elemento.elementocampo.id}}\"\n                type=\"checkbox\" [checked]=\"elemento.valorchk\" [(ngModel)]=\"elemento.valorchk\">\n                \n              <label class=\"custom-control-label\" for=\"ctrl_{{elemento.elementocampo.id}}\">\n                {{elemento.elementocampo.nombre}}</label>\n            </div>\n            <label class=\"control-label\" *ngIf=\"elemento.elementocampo.tipo!='Checkbox'\">\n              {{elemento.elementocampo.nombre}}</label>\n            <select *ngIf=\"elemento.elementocampo.tipo=='Lista'\" class=\"form-control custom-select\"\n              [(ngModel)]=\"elemento.valor\" formControlName=\"ctrl_{{elemento.elementocampo.id}}\"\n              name=\"ctrl_{{elemento.elementocampo.id}}\">\n              <option value=\"\">Seleccione</option>\n              <option *ngFor=\"let o of elemento.elementocampo.valoreslista.split(',')\" value=\"{{o}}\">\n                {{ o }}\n              </option>\n            </select>\n            <hr *ngIf=\"elemento.elementocampo.tipo=='Split'\">\n            <input\n              *ngIf=\"elemento.elementocampo.tipo=='Numerico'||elemento.elementocampo.tipo=='Texto'||elemento.elementocampo.tipo=='Date'\"\n              id=\"ctrl_{{elemento.elementocampo.id}}\" class=\"form-control\" placeholder=\"{{elemento.nombre}}\"\n              [type]=\"elemento.elementocampo.dato\" [(ngModel)]=\"elemento.valor\"\n              name=\"ctrl_{{elemento.elementocampo.id}}\" formControlName=\"ctrl_{{elemento.elementocampo.id}}\"\n              autocomplete=\"off\">\n\n              <small class=\"form-control-feedback\">{{elemento.elementocampo.observacion}} </small> \n            <span class=\"messages text-danger\"\n              *ngIf=\"ctrlform.get('ctrl_' + elemento.elementocampo.id)!=undefined && ctrlform.get('ctrl_' + elemento.elementocampo.id).errors && (ctrlform.get('ctrl_' + elemento.elementocampo.id).dirty || ctrlform.get('ctrl_' + elemento.elementocampo.id).touched||submit)\">Campo\n              requerido</span>\n              \n\n\n\n\n\n          </div>\n        </div>\n        <div class=\"col-md-6\" *ngIf=\"elemento.elementocampo.tipo!='Split' && elemento.elementocampo.archivos\">\n          <ng-container *ngIf=\"elemento.valor||elemento.valorchk\">\n            <div class=\"form-group\">\n              <app-cargararchivo [tipo]=\"4\" (fileuploadEvent)=\"archivoelemento(elemento,$event)\"></app-cargararchivo>\n            </div>\n            <app-mostrararchivo  [archivos]=\"elemento.archivos\"></app-mostrararchivo>\n          </ng-container>\n\n        </div>\n      </ng-container>\n\n      <hr>\n      <div class=\"form-actions\">\n        <button type=\"submit\" class=\"btn btn-success\"> <i class=\"fa fa-check\"></i>\n          Guardar</button>\n        <button type=\"button\" class=\"btn btn-inverse\" routerLink=\"/obra/fichacomercial\">Cancelar</button>\n      </div>\n\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/pages/obra/fichacomercial/fichacomercial-elementos/fichacomercial-elementos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FichacomercialElementosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng4_loading_spinner__ = __webpack_require__("./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_fichacomercial_fichacomercial_service__ = __webpack_require__("./src/app/services/fichacomercial/fichacomercial.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_shared_can_deactivate_guard_can_deactivate_guard_service__ = __webpack_require__("./src/app/shared/can-deactivate-guard/can-deactivate-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_datepicker__ = __webpack_require__("./node_modules/ngx-bootstrap/datepicker/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FichacomercialElementosComponent = /** @class */ (function () {
    function FichacomercialElementosComponent(spinnerService, fichacomercialService, notificationService, localDataService, candeactivateguard, localeService, cdRef) {
        this.spinnerService = spinnerService;
        this.fichacomercialService = fichacomercialService;
        this.notificationService = notificationService;
        this.localDataService = localDataService;
        this.candeactivateguard = candeactivateguard;
        this.localeService = localeService;
        this.cdRef = cdRef;
    }
    FichacomercialElementosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.submit = false;
        var group = {};
        this.item.elementoscampos.forEach(function (input_template) {
            if (input_template.tipo != 'Split') {
                group['ctrl_' + input_template.elementocampo.id] = _this.createcontrol(input_template.elementocampo);
            }
        });
        this.ctrlform = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"](group);
    };
    Object.defineProperty(FichacomercialElementosComponent.prototype, "f", {
        get: function () {
            return this.ctrlform.controls;
        },
        enumerable: true,
        configurable: true
    });
    FichacomercialElementosComponent.prototype.createcontrol = function (element) {
        if (element.requerido == false) {
            return new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', []);
        }
        else if (element.tipo == 'Checkbox') {
            return new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].requiredTrue]);
        }
        else if (element.tipo == 'Lista') {
            return new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]);
        }
        else if (element.tipo == 'Numerico') {
            return new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]);
        }
    };
    FichacomercialElementosComponent.prototype.add = function () {
        var _this = this;
        this.submit = true;
        if (this.ctrlform.invalid) {
            return false;
        }
        this.submit = false;
        this.spinnerService.show();
        this.candeactivateguard.setedit(false);
        this.item.fk_empresa = this.localDataService.getLocalData('empresaSeleccionada').id;
        this.item.paso = 3;
        this.fichacomercialService.update(this.item)
            .subscribe(function (value) {
            _this.spinnerService.hide();
            _this.notificationService.onSuccess('Presupuesto actualizado.');
        }, function (err) {
            _this.spinnerService.hide();
            if (err.status_code == 422) {
                _this.notificationService.onError("Presupuesto  ya existen.");
            }
            else {
                _this.notificationService.onError("Se ha producido un error.");
            }
        });
    };
    FichacomercialElementosComponent.prototype.ngAfterContentChecked = function () {
        this.cdRef.detectChanges();
    };
    FichacomercialElementosComponent.prototype.archivoelemento = function (elemento, event) {
        if (elemento.archivos == undefined) {
            elemento.archivos = [];
        }
        elemento.archivos = this.insertarArchivo(event, elemento.archivos);
    };
    FichacomercialElementosComponent.prototype.insertarArchivo = function (archivo, lista) {
        if (lista == undefined) {
            lista = [];
        }
        lista.push(archivo);
        return lista;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FichacomercialElementosComponent.prototype, "item", void 0);
    FichacomercialElementosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-fichacomercial-elementos',
            template: __webpack_require__("./src/app/pages/obra/fichacomercial/fichacomercial-elementos/fichacomercial-elementos.component.html"),
            styles: [__webpack_require__("./src/app/pages/obra/fichacomercial/fichacomercial-elementos/fichacomercial-elementos.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ng4_loading_spinner__["Ng4LoadingSpinnerService"],
            __WEBPACK_IMPORTED_MODULE_3__app_services_fichacomercial_fichacomercial_service__["a" /* FichacomercialService */],
            __WEBPACK_IMPORTED_MODULE_4__app_shared__["k" /* NotificationService */],
            __WEBPACK_IMPORTED_MODULE_4__app_shared__["i" /* LocalDataService */],
            __WEBPACK_IMPORTED_MODULE_5__app_shared_can_deactivate_guard_can_deactivate_guard_service__["a" /* Candeactivateguard */],
            __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_datepicker__["b" /* BsLocaleService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
    ], FichacomercialElementosComponent);
    return FichacomercialElementosComponent;
}());



/***/ }),

/***/ "./src/app/pages/obra/fichacomercial/fichacomercial-index/fichacomercial-index.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/obra/fichacomercial/fichacomercial-index/fichacomercial-index.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-wrapper\">\n  <!-- ============================================================== -->\n  <!-- Container fluid  -->\n  <!-- ============================================================== -->\n  <div class=\"container-fluid\">\n    <!-- ============================================================== -->\n    <!-- Bread crumb and right sidebar toggle -->\n    <!-- ============================================================== -->\n    \n    <!-- ============================================================== -->\n    <!-- End Bread crumb and right sidebar toggle -->\n    <!-- ============================================================== -->\n    <!-- ============================================================== -->\n    <!-- Start Page Content -->\n    <!-- ============================================================== -->\n    <div class=\"row\">\n\n\n\n      <div class=\"col-12\">\n\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <h4 class=\"card-title\">Lista de Fichas Comerciales</h4>\n            <h6 class=\"card-subtitle\"></h6>\n           \n            <div class=\"table-responsive\">\n              <table id=\"example23\" class=\"display nowrap table table-hover m-t-30  table-striped table-bordered\" cellspacing=\"0\" width=\"100%\">\n                <thead>\n                  <tr>\n                  \n                    <th>Estacion de servicio</th>  \n                    <th>Cliente</th>   \n                    <th>Estado</th> \n                    <th>Paso</th>                         \n                    <th>Fecha Inicio</th>\n                    <th>Fecha Fin</th>\n                    <th># Presupuesto</th>\n                    <th># Obra</th>\n                    <th>Responsable Oficina Técnica</th>\n                    <th>Fecha creación</th>\n                    <th></th>\n                  </tr>\n                </thead>\n                <tfoot>\n                  <tr>\n                  <th>Estacion de servicio</th>  \n                  <th>Cliente</th>   \n                  <th>Estado</th>   \n                  <th>Paso</th>               \n                  <th>Fecha Inicio</th>\n                  <th>Fecha Fin</th>\n                  <th># Presupuesto</th>\n                  <th># Obra</th>\n                  <th>Usuario Asignado</th>\n                  <th>Fecha creación</th>\n                  <th></th>\n                </tr>\n                </tfoot>\n                <tbody>\n                  <tr *ngFor=\"let row of listaitem\">\n                    <td>{{row.estacionservicio.name}}</td>\n                    <td>{{row.razon_social}}</td>\n                    <td>{{row.estacionservicio.estadoobra}}</td>\n                    <td><span class=\"badge badge-pill badge-warning text-white ml-auto\">{{row.paso}}/4</span></td>\n                    <td>{{row.presupuesto?.fechainicio}}</td>\n                    <td>{{row.presupuesto?.fechafin}}</td>\n                    <td>{{row.presupuesto?.numero}}</td>\n                    <td>{{row.numero_obra}}</td>\n                    <td>{{row.usuarioasignado?.name}}</td>\n                    <td>{{row.created_at}}</td>\n                    <td>\n                      <a class=\"preview\" routerLink=\"/obra/fichacomercial/edit/{{row.id}}\"> <i class=\"icon-note\"></i></a>\n                      <a class=\"preview\" href=\"#\" [swal]=\"deleteSwal\"> <i class=\"icon-trash\"></i></a>\n                      <swal #deleteSwal title=\"Eliminar Ficha Comercial\" text=\"Esta acción no se puede modificar.\" type=\"question\" [showCancelButton]=\"true\" [focusCancel]=\"true\" (confirm)=\"delete(row.id)\">\n                        </swal>\n\n                    </td>\n                  </tr>\n\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/pages/obra/fichacomercial/fichacomercial-index/fichacomercial-index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FichacomercialIndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng4_loading_spinner__ = __webpack_require__("./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_datatables_net__ = __webpack_require__("./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_datatables_net___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_datatables_net__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_datatables_net_bs4__ = __webpack_require__("./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_datatables_net_bs4___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_datatables_net_bs4__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_datatables_net_buttons__ = __webpack_require__("./node_modules/datatables.net-buttons/js/dataTables.buttons.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_datatables_net_buttons___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_datatables_net_buttons__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_services_fichacomercial_fichacomercial_service__ = __webpack_require__("./src/app/services/fichacomercial/fichacomercial.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FichacomercialIndexComponent = /** @class */ (function () {
    function FichacomercialIndexComponent(spinnerService, fichaComercial, notificationService) {
        this.spinnerService = spinnerService;
        this.fichaComercial = fichaComercial;
        this.notificationService = notificationService;
        this.listaitem = [];
        this.table = null;
    }
    FichacomercialIndexComponent.prototype.ngOnInit = function () {
        this.spinnerService.show();
        this.get();
    };
    FichacomercialIndexComponent.prototype.get = function () {
        var _this = this;
        this.fichaComercial.get(1)
            .subscribe(function (response) {
            _this.listaitem = response.data;
            _this.reInitDatatable();
            _this.spinnerService.hide();
        });
    };
    FichacomercialIndexComponent.prototype.loadtable = function () {
        var exampleId = $('#example23');
        this.table = exampleId.DataTable({
            dom: 'Bfrtip',
            buttons: [
                'copy', 'csv', 'excel', 'pdf', 'print'
            ],
            oLanguage: {
                "sLengthMenu": "_MENU_ registros por página",
                "sInfoFiltered": " - filtrada de _MAX_ registros",
                "sSearch": "Buscar: ",
                "sZeroRecords": "No existen datos diponibles",
                "sInfoEmpty": " ",
                "sInfo": 'Mostrando _END_ de _TOTAL_',
                "oPaginate": {
                    "sPrevious": "Anterior",
                    "sNext": "Siguiente"
                }
            }
        });
    };
    FichacomercialIndexComponent.prototype.ngAfterViewInit = function () {
    };
    FichacomercialIndexComponent.prototype.delete = function (id) {
        var _this = this;
        this.spinnerService.show();
        this.fichaComercial.delete(id)
            .subscribe(function (value) {
            _this.notificationService.onSuccess('Ficha Tecnica  Eliminada con Exito.');
            _this.get();
            _this.spinnerService.hide();
        }, function (err) {
            _this.spinnerService.hide();
            if (err.status_code == 400) {
                _this.notificationService.onError("La Ficha Tecnica no se puede eliminar ya que tiene informacion asociada.");
            }
            else {
                _this.notificationService.onError("Se ha producido un error.");
            }
        });
    };
    FichacomercialIndexComponent.prototype.reInitDatatable = function () {
        var _this = this;
        if (this.table) {
            this.table.destroy();
            this.table = null;
        }
        setTimeout(function () { return _this.loadtable(); }, 0);
    };
    FichacomercialIndexComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-fichacomercial-index',
            template: __webpack_require__("./src/app/pages/obra/fichacomercial/fichacomercial-index/fichacomercial-index.component.html"),
            styles: [__webpack_require__("./src/app/pages/obra/fichacomercial/fichacomercial-index/fichacomercial-index.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng4_loading_spinner__["Ng4LoadingSpinnerService"],
            __WEBPACK_IMPORTED_MODULE_6__app_services_fichacomercial_fichacomercial_service__["a" /* FichacomercialService */],
            __WEBPACK_IMPORTED_MODULE_5__app_shared__["k" /* NotificationService */]])
    ], FichacomercialIndexComponent);
    return FichacomercialIndexComponent;
}());



/***/ }),

/***/ "./src/app/pages/obra/fichacomercial/fichacomercial-presupuesto/fichacomercial-presupuesto.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/obra/fichacomercial/fichacomercial-presupuesto/fichacomercial-presupuesto.component.html":
/***/ (function(module, exports) {

module.exports = "<form action=\"#\" id=\"form-id\" (ngSubmit)=\"add()\" #ctrlform=\"ngForm\">\n  <div class=\"form-body p-20\">\n    <h3 class=\"card-title\">Datos Presupuesto </h3>\n    <hr>\n    <div class=\"row p-t-20\">\n      <div class=\"col-md-3\">\n        <div class=\"form-group\">\n          <label class=\"control-label\">Numero de presupuesto</label>\n          <input type=\"text\" id=\"numero\" class=\"form-control\" placeholder=\"Nombre\" [(ngModel)]=\"item.presupuesto.numero\"\n            name=\"numero\" required #numero=\"ngModel\">\n          <span class=\"messages text-danger\" *ngIf=\"numero.errors && (numero.dirty || numero.touched||submit)\">Campo\n            requerido</span>\n          <small class=\"form-control-feedback\"> Escriba numero de presupuesto </small> </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"form-group\">\n          <label class=\"control-label\">Valor</label>\n          <input type=\"number\" id=\"valor\" class=\"form-control\" placeholder=\"Valor presupuesto\"\n            [(ngModel)]=\"item.presupuesto.valor\" name=\"valor\" required #valor=\"ngModel\">\n          <span class=\"messages text-danger\" *ngIf=\"valor.errors && (valor.dirty || valor.touched||submit)\">Campo\n            requerido</span>\n          <small class=\"form-control-feedback\"> Escriba el valor del presupuesto </small> </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"form-group\">\n          <label class=\"control-label\">Fecha Aceptado</label>\n          <input type=\"text\" id=\"fechaaceptado\" class=\"form-control\" placeholder=\"Fecha Aceptado\"\n            [(ngModel)]=\"item.presupuesto.fechaaceptado\" name=\"fechaaceptado\" required #fechaaceptado=\"ngModel\"\n            bsDatepicker autocomplete=\"off\">\n          <span class=\"messages text-danger\"\n            *ngIf=\"fechaaceptado.errors && (fechaaceptado.dirty || fechaaceptado.touched||submit)\">Campo\n            requerido</span>\n          <small class=\"form-control-feedback\"> Escriba el email del comercial </small> </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"form-group\">\n          <label class=\"control-label\">Facturación por certificaciones</label>\n          <div class=\"custom-control custom-checkbox mr-sm-2\">\n            <input class=\"custom-control-input\" id=\"checkbox_pedir{{item.id}}\" name=\"checkbox_pedir{{item.id}}\"\n              #facturacion=\"ngModel\" type=\"checkbox\" [checked]=\"item.presupuesto.facturacion\"\n              [(ngModel)]=\"item.presupuesto.facturacion\">\n            <label class=\"custom-control-label\" for=\"checkbox_pedir{{item.id}}\"> Seleccione si aplica Facturación por\n              certificaciones </label>\n          </div>\n\n          <span class=\"messages text-danger\"\n            *ngIf=\"facturacion.errors && (facturacion.dirty || facturacion.touched||submit)\">Campo requerido</span>\n        </div>\n      </div>\n\n      <!--/span-->\n\n      <!--/span-->\n    </div>\n    <h3 class=\"card-title\">Estimación de fechas</h3>\n    <hr>\n    <div class=\"row p-t-20\">\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label class=\"control-label\">Fecha Inicial</label>\n          <input type=\"text\" id=\"fechainicio\" class=\"form-control\" placeholder=\"Fecha Inicial\"\n            [(ngModel)]=\"item.presupuesto.fechainicio\" name=\"fechainicio\" required #fechainicio=\"ngModel\"\n            autocomplete=\"off\" bsDatepicker>\n          <span class=\"messages text-danger\"\n            *ngIf=\"fechainicio.errors && (fechainicio.dirty || fechainicio.touched||submit)\">Campo\n            requerido</span>\n          <small class=\"form-control-feedback\"> Escriba la fecha inicial </small> </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label class=\"control-label\">Fecha Final</label>\n          <input type=\"text\" id=\"fechafin\" class=\"form-control\" placeholder=\"Fecha Fin\"\n            [(ngModel)]=\"item.presupuesto.fechafin\" name=\"fechafin\" required #fechafin=\"ngModel\" autocomplete=\"off\"\n            bsDatepicker>\n          <span class=\"messages text-danger\"\n            *ngIf=\"fechafin.errors && (fechafin.dirty || fechafin.touched||submit)\">Campo\n            requerido</span>\n          <small class=\"form-control-feedback\"> Escriba la fecha final </small> </div>\n      </div>\n\n      <!--/span-->\n\n      <!--/span-->\n    </div>\n    <h3 class=\"card-title\">Documentos </h3>\n    <hr>\n    <div class=\"row p-t-20\">\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n\n          <div class=\"custom-control custom-checkbox mr-sm-2\">\n            <input class=\"custom-control-input\" id=\"checkbox_proyectovisado{{item.id}}\"\n              name=\"checkbox_proyectovisado{{item.id}}\" #proyectovisado=\"ngModel\" type=\"checkbox\"\n              [checked]=\"item.presupuesto.proyectovisado\" [(ngModel)]=\"item.presupuesto.proyectovisado\">\n            <label class=\"custom-control-label\" for=\"checkbox_proyectovisado{{item.id}}\">\n              Proyecto Visado</label>\n          </div>\n\n\n          <span class=\"messages text-danger\"\n            *ngIf=\"proyectovisado.errors && (proyectovisado.dirty || proyectovisado.touched||submit)\">Campo\n            requerido</span>\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <ng-container *ngIf=\"item.presupuesto.proyectovisado\">\n          <div class=\"form-group\">\n            <app-cargararchivo [tipo]=\"4\" (fileuploadEvent)=\"archivopresupuesto(1,$event)\"></app-cargararchivo>\n          </div>\n          <app-mostrararchivo [archivos]=\"item.presupuesto.proyectovisado_arc\"></app-mostrararchivo>\n        </ng-container>\n\n      </div>\n      <div class=\"col-md-6\">\n\n        <div class=\"form-group\">\n\n          <div class=\"custom-control custom-checkbox mr-sm-2\">\n            <input class=\"custom-control-input\" id=\"checkbox_licencia{{item.id}}\" name=\"checkbox_licencia{{item.id}}\"\n              #licencia=\"ngModel\" type=\"checkbox\" [checked]=\"item.presupuesto.licencia\"\n              [(ngModel)]=\"item.presupuesto.licencia\">\n            <label class=\"custom-control-label\" for=\"checkbox_licencia{{item.id}}\">\n              Licencia de obra</label>\n          </div>\n\n\n          <span class=\"messages text-danger\"\n            *ngIf=\"licencia.errors && (licencia.dirty || licencia.touched||submit)\">Campo requerido</span>\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <ng-container *ngIf=\"item.presupuesto.licencia\">\n          <div class=\"form-group\" *ngIf=\"item.presupuesto.licencia\">\n            <app-cargararchivo [tipo]=\"4\" (fileuploadEvent)=\"archivopresupuesto(2,$event)\"></app-cargararchivo>\n          </div>\n          <app-mostrararchivo [archivos]=\"item.presupuesto.licencia_arc\"></app-mostrararchivo>\n        </ng-container>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n\n          <div class=\"custom-control custom-checkbox mr-sm-2\">\n            <input class=\"custom-control-input\" id=\"checkbox_plano{{item.id}}\" name=\"checkbox_plano{{item.id}}\"\n              #plano=\"ngModel\" type=\"checkbox\" [checked]=\"item.presupuesto.plano\" [(ngModel)]=\"item.presupuesto.plano\">\n            <label class=\"custom-control-label\" for=\"checkbox_plano{{item.id}}\">\n              Plano Implantación</label>\n          </div>\n\n\n          <span class=\"messages text-danger\" *ngIf=\"plano.errors && (plano.dirty || plano.touched||submit)\">Campo\n            requerido</span>\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <ng-container *ngIf=\"item.presupuesto.plano\">\n          <div class=\"form-group\" *ngIf=\"item.presupuesto.plano\">\n            <app-cargararchivo [tipo]=\"4\" (fileuploadEvent)=\"archivopresupuesto(3,$event)\"></app-cargararchivo>\n          </div>\n          <app-mostrararchivo [archivos]=\"item.presupuesto.plano_arc\"></app-mostrararchivo>\n        </ng-container>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n\n          <div class=\"custom-control custom-checkbox mr-sm-2\">\n            <input class=\"custom-control-input\" id=\"checkbox_planoins{{item.id}}\" name=\"checkbox_planoins{{item.id}}\"\n              #planoins=\"ngModel\" type=\"checkbox\" [checked]=\"item.presupuesto.planoins\"\n              [(ngModel)]=\"item.presupuesto.planoins\">\n            <label class=\"custom-control-label\" for=\"checkbox_planoins{{item.id}}\">\n              Plano Instalación Mecanica</label>\n          </div>\n\n\n          <span class=\"messages text-danger\"\n            *ngIf=\"planoins.errors && (planoins.dirty || planoins.touched||submit)\">Campo\n            requerido</span>\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <ng-container *ngIf=\"item.presupuesto.planoins\">\n          <div class=\"form-group\" *ngIf=\"item.presupuesto.planoins\">\n            <app-cargararchivo [tipo]=\"4\" (fileuploadEvent)=\"archivopresupuesto(4,$event)\"></app-cargararchivo>\n          </div>\n          <app-mostrararchivo [archivos]=\"item.presupuesto.planoins_arc\"></app-mostrararchivo>\n        </ng-container>\n      </div>\n    </div>\n\n    <div class=\"form-actions\">\n      <button type=\"submit\" class=\"btn btn-success\"> <i class=\"fa fa-check\"></i> Guardar</button>\n      <button type=\"button\" class=\"btn btn-inverse\" routerLink=\"/perfiles\">Cancelar</button>\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/pages/obra/fichacomercial/fichacomercial-presupuesto/fichacomercial-presupuesto.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FichacomercialPresupuestoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng4_loading_spinner__ = __webpack_require__("./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_shared_can_deactivate_guard_can_deactivate_guard_service__ = __webpack_require__("./src/app/shared/can-deactivate-guard/can-deactivate-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_fichacomercial_fichacomercial_service__ = __webpack_require__("./src/app/services/fichacomercial/fichacomercial.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_viewmodel_fichacomercialpresupuesto__ = __webpack_require__("./src/app/viewmodel/fichacomercialpresupuesto.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_datepicker__ = __webpack_require__("./node_modules/ngx-bootstrap/datepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var FichacomercialPresupuestoComponent = /** @class */ (function () {
    function FichacomercialPresupuestoComponent(spinnerService, fichacomercialService, notificationService, localDataService, candeactivateguard, localeService) {
        this.spinnerService = spinnerService;
        this.fichacomercialService = fichacomercialService;
        this.notificationService = notificationService;
        this.localDataService = localDataService;
        this.candeactivateguard = candeactivateguard;
        this.localeService = localeService;
        this.localeService.use('es');
    }
    FichacomercialPresupuestoComponent.prototype.ngOnInit = function () {
        this.item.presupuesto = this.item.presupuesto == undefined ? new __WEBPACK_IMPORTED_MODULE_5__app_viewmodel_fichacomercialpresupuesto__["a" /* FichaComercialPresupuesto */]() : this.item.presupuesto;
        if (this.item.presupuesto.fechaaceptado != undefined) {
            this.item.presupuesto.fechaaceptado = __WEBPACK_IMPORTED_MODULE_7_moment__(this.item.presupuesto.fechaaceptado).toDate();
        }
        if (this.item.presupuesto.fechainicio != undefined) {
            this.item.presupuesto.fechainicio = __WEBPACK_IMPORTED_MODULE_7_moment__(this.item.presupuesto.fechainicio).toDate();
        }
        if (this.item.presupuesto.fechafin != undefined) {
            this.item.presupuesto.fechafin = __WEBPACK_IMPORTED_MODULE_7_moment__(this.item.presupuesto.fechafin).toDate();
        }
        if (this.item.presupuesto.facturacion == undefined) {
            this.item.presupuesto.facturacion = false;
        }
    };
    FichacomercialPresupuestoComponent.prototype.add = function () {
        var _this = this;
        this.submit = true;
        if (this.ctrlform.invalid) {
            return false;
        }
        this.submit = false;
        /*this.item.presupuesto.fechaaceptadof = moment(this.item.presupuesto.fechaaceptado).format("DD-MM-YYYY HH:mm:ss");
        this.item.presupuesto.fechainiciof = moment(this.item.presupuesto.fechainicio).format("DD-MM-YYYY HH:mm:ss");
        this.item.presupuesto.fechafinf = moment(this.item.presupuesto.fechafin).format("DD-MM-YYYY HH:mm:ss");
    */
        this.spinnerService.show();
        this.candeactivateguard.setedit(false);
        this.item.fk_empresa = this.localDataService.getLocalData('empresaSeleccionada').id;
        this.item.paso = 2;
        this.fichacomercialService.update(this.item)
            .subscribe(function (value) {
            _this.spinnerService.hide();
            _this.notificationService.onSuccess('Presupuesto actualizado.');
        }, function (err) {
            _this.spinnerService.hide();
            if (err.status_code == 422) {
                _this.notificationService.onError("Presupuesto  ya existen.");
            }
            else {
                _this.notificationService.onError("Se ha producido un error.");
            }
        });
    };
    FichacomercialPresupuestoComponent.prototype.archivopresupuesto = function (tipoarchivo, $event) {
        //archivos proyectos visado
        if (tipoarchivo == 1) {
            this.item.presupuesto.proyectovisado_arc = this.insertarArchivo($event, this.item.presupuesto.proyectovisado_arc);
        }
        else if (tipoarchivo == 2) {
            this.item.presupuesto.licencia_arc = this.insertarArchivo($event, this.item.presupuesto.licencia_arc);
        }
        else if (tipoarchivo == 3) {
            this.item.presupuesto.plano_arc = this.insertarArchivo($event, this.item.presupuesto.plano_arc);
        }
        else if (tipoarchivo == 4) {
            this.item.presupuesto.planoins_arc = this.insertarArchivo($event, this.item.presupuesto.planoins_arc);
        }
    };
    FichacomercialPresupuestoComponent.prototype.insertarArchivo = function (archivo, lista) {
        if (lista == undefined) {
            lista = [];
        }
        lista.push(archivo);
        return lista;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FichacomercialPresupuestoComponent.prototype, "item", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('ctrlform'),
        __metadata("design:type", Object)
    ], FichacomercialPresupuestoComponent.prototype, "ctrlform", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('gmap'),
        __metadata("design:type", Object)
    ], FichacomercialPresupuestoComponent.prototype, "gmapElement", void 0);
    FichacomercialPresupuestoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-fichacomercial-presupuesto',
            template: __webpack_require__("./src/app/pages/obra/fichacomercial/fichacomercial-presupuesto/fichacomercial-presupuesto.component.html"),
            styles: [__webpack_require__("./src/app/pages/obra/fichacomercial/fichacomercial-presupuesto/fichacomercial-presupuesto.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng4_loading_spinner__["Ng4LoadingSpinnerService"],
            __WEBPACK_IMPORTED_MODULE_4__app_services_fichacomercial_fichacomercial_service__["a" /* FichacomercialService */],
            __WEBPACK_IMPORTED_MODULE_3__app_shared__["k" /* NotificationService */],
            __WEBPACK_IMPORTED_MODULE_3__app_shared__["i" /* LocalDataService */],
            __WEBPACK_IMPORTED_MODULE_2__app_shared_can_deactivate_guard_can_deactivate_guard_service__["a" /* Candeactivateguard */],
            __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_datepicker__["b" /* BsLocaleService */]])
    ], FichacomercialPresupuestoComponent);
    return FichacomercialPresupuestoComponent;
}());



/***/ }),

/***/ "./src/app/pages/obra/fichacomercial/fichacomercial-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FichacomercialRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fichacomercial_index_fichacomercial_index_component__ = __webpack_require__("./src/app/pages/obra/fichacomercial/fichacomercial-index/fichacomercial-index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_shared_can_deactivate_guard_can_deactivate_guard_service__ = __webpack_require__("./src/app/shared/can-deactivate-guard/can-deactivate-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fichacomercial_edit_fichacomercial_edit_component__ = __webpack_require__("./src/app/pages/obra/fichacomercial/fichacomercial-edit/fichacomercial-edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [{ path: '', component: __WEBPACK_IMPORTED_MODULE_2__fichacomercial_index_fichacomercial_index_component__["a" /* FichacomercialIndexComponent */] },
    { path: 'edit/:id', component: __WEBPACK_IMPORTED_MODULE_4__fichacomercial_edit_fichacomercial_edit_component__["a" /* FichacomercialEditComponent */], canDeactivate: [__WEBPACK_IMPORTED_MODULE_3__app_shared_can_deactivate_guard_can_deactivate_guard_service__["a" /* Candeactivateguard */]] }];
var FichacomercialRoutingModule = /** @class */ (function () {
    function FichacomercialRoutingModule() {
    }
    FichacomercialRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], FichacomercialRoutingModule);
    return FichacomercialRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/obra/fichacomercial/fichacomercial.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FichacomercialModule", function() { return FichacomercialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_chronos__ = __webpack_require__("./node_modules/ngx-bootstrap/chronos/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_locale__ = __webpack_require__("./node_modules/ngx-bootstrap/locale.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fichacomercial_routing_module__ = __webpack_require__("./src/app/pages/obra/fichacomercial/fichacomercial-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fichacomercial_index_fichacomercial_index_component__ = __webpack_require__("./src/app/pages/obra/fichacomercial/fichacomercial-index/fichacomercial-index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__fichacomercial_edit_fichacomercial_edit_component__ = __webpack_require__("./src/app/pages/obra/fichacomercial/fichacomercial-edit/fichacomercial-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_alert__ = __webpack_require__("./node_modules/ngx-bootstrap/alert/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__toverux_ngx_sweetalert2__ = __webpack_require__("./node_modules/@toverux/ngx-sweetalert2/esm5/toverux-ngx-sweetalert2.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng_snotify__ = __webpack_require__("./node_modules/ng-snotify/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ngx_bootstrap_typeahead__ = __webpack_require__("./node_modules/ngx-bootstrap/typeahead/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_file_upload__ = __webpack_require__("./node_modules/ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ngx_chips__ = __webpack_require__("./node_modules/ngx-chips/fesm5/ngx-chips.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__fichacomercial_datos_fichacomercial_datos_component__ = __webpack_require__("./src/app/pages/obra/fichacomercial/fichacomercial-datos/fichacomercial-datos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_google_apis_maps_service__ = __webpack_require__("./src/app/google-apis/maps.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__fichacomercial_presupuesto_fichacomercial_presupuesto_component__ = __webpack_require__("./src/app/pages/obra/fichacomercial/fichacomercial-presupuesto/fichacomercial-presupuesto.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ngx_bootstrap_datepicker__ = __webpack_require__("./node_modules/ngx-bootstrap/datepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__app_componentes_componentes_module__ = __webpack_require__("./src/app/componentes/componentes.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__fichacomercial_elementos_fichacomercial_elementos_component__ = __webpack_require__("./src/app/pages/obra/fichacomercial/fichacomercial-elementos/fichacomercial-elementos.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















Object(__WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_chronos__["a" /* defineLocale */])('es', __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_locale__["a" /* esLocale */]);
var FichacomercialModule = /** @class */ (function () {
    function FichacomercialModule() {
    }
    FichacomercialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4__fichacomercial_routing_module__["a" /* FichacomercialRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["ReactiveFormsModule"],
                // Ng4LoadingSpinnerModule.forRoot(),
                __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_alert__["a" /* AlertModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9__toverux_ngx_sweetalert2__["b" /* SweetAlert2Module */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10_ng_snotify__["a" /* SnotifyModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_12__app_shared__["b" /* AuthenticationModule */],
                __WEBPACK_IMPORTED_MODULE_12__app_shared__["d" /* EnvironmentModule */],
                __WEBPACK_IMPORTED_MODULE_12__app_shared__["f" /* FormValidationModule */],
                __WEBPACK_IMPORTED_MODULE_12__app_shared__["j" /* NotificationModule */],
                __WEBPACK_IMPORTED_MODULE_12__app_shared__["h" /* LocalDataModule */],
                __WEBPACK_IMPORTED_MODULE_13_ngx_bootstrap_typeahead__["a" /* TypeaheadModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_14_ng2_file_upload__["FileUploadModule"],
                __WEBPACK_IMPORTED_MODULE_15_ngx_chips__["a" /* TagInputModule */],
                __WEBPACK_IMPORTED_MODULE_19_ngx_bootstrap_datepicker__["a" /* BsDatepickerModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_20__app_componentes_componentes_module__["a" /* ComponentesModule */],
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__fichacomercial_index_fichacomercial_index_component__["a" /* FichacomercialIndexComponent */],
                __WEBPACK_IMPORTED_MODULE_6__fichacomercial_edit_fichacomercial_edit_component__["a" /* FichacomercialEditComponent */],
                __WEBPACK_IMPORTED_MODULE_16__fichacomercial_datos_fichacomercial_datos_component__["a" /* FichacomercialDatosComponent */],
                __WEBPACK_IMPORTED_MODULE_18__fichacomercial_presupuesto_fichacomercial_presupuesto_component__["a" /* FichacomercialPresupuestoComponent */], __WEBPACK_IMPORTED_MODULE_21__fichacomercial_elementos_fichacomercial_elementos_component__["a" /* FichacomercialElementosComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_17__app_google_apis_maps_service__["a" /* MapsService */]]
        })
    ], FichacomercialModule);
    return FichacomercialModule;
}());



/***/ }),

/***/ "./src/app/viewmodel/fichacomercial.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FichaComercial; });
var FichaComercial = /** @class */ (function () {
    function FichaComercial() {
    }
    return FichaComercial;
}());



/***/ }),

/***/ "./src/app/viewmodel/fichacomercialdatos.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FichaComercialDatos; });
var FichaComercialDatos = /** @class */ (function () {
    function FichaComercialDatos() {
    }
    return FichaComercialDatos;
}());



/***/ }),

/***/ "./src/app/viewmodel/fichacomercialpresupuesto.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FichaComercialPresupuesto; });
var FichaComercialPresupuesto = /** @class */ (function () {
    function FichaComercialPresupuesto() {
    }
    return FichaComercialPresupuesto;
}());



/***/ })

});
//# sourceMappingURL=fichacomercial.module.chunk.js.map