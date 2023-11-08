webpackJsonp(["fomulariodinamico.module"],{

/***/ "./src/app/pages/obra/fomulariodinamico/fomulariodinamico-add/fomulariodinamico-add.component.css":
/***/ (function(module, exports) {

module.exports = "/* in-flight clone */\r\n.gu-mirror {\r\n    position: fixed !important;\r\n    margin: 0 !important;\r\n    z-index: 9999 !important;\r\n    opacity: 0.8;\r\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=80)\";\r\n    filter: alpha(opacity=80);\r\n    pointer-events: none;\r\n  }\r\n/* high-performance display:none; helper */\r\n.gu-hide {\r\n    left: -9999px !important;\r\n  }\r\n/* added to mirrorContainer (default = body) while dragging */\r\n.gu-unselectable {\r\n    -webkit-user-select: none !important;\r\n    -moz-user-select: none !important;\r\n    -ms-user-select: none !important;\r\n    user-select: none !important;\r\n  }\r\n/* added to the source element while its mirror is dragged */\r\n.gu-transit {\r\n    opacity: 0.4;\r\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=20)\";\r\n    filter: alpha(opacity=20);\r\n    border: 1.5px dotted #3F51B5;\r\n  }\r\n#left>.list-group-item:focus, #left>.list-group-item:hover {\r\n    z-index: 1;\r\n    text-decoration: none;\r\n    cursor: move;\r\n}\r\n.divfrm{\r\n    border: 1px dotted #6e7fdc ;\r\n    border-radius: 15px;\r\n    padding: 15px;\r\n}\r\n.controlsel:hover{\r\n    border: 1px solid #6e7fdc;\r\n    padding:15px;\r\n}  "

/***/ }),

/***/ "./src/app/pages/obra/fomulariodinamico/fomulariodinamico-add/fomulariodinamico-add.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Page wrapper  -->\n<!-- ============================================================== -->\n<div class=\"page-wrapper\">\n  <!-- ============================================================== -->\n  <!-- Container fluid  -->\n  <!-- ============================================================== -->\n  <div class=\"container-fluid\">\n    <!-- ============================================================== -->\n    <!-- Bread crumb and right sidebar toggle -->\n    <!-- ============================================================== -->\n    \n    <!-- ============================================================== -->\n    <!-- End Bread crumb and right sidebar toggle -->\n    <!-- ============================================================== -->\n    <!-- ============================================================== -->\n    <!-- Start Page Content -->\n    <!-- ============================================================== -->\n    <!-- Row -->\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <div class=\"card\">\n          <div class=\"card-header bg-info\">\n            <h4 class=\"m-b-0 text-white\"></h4>\n          </div>\n          <div class=\"card-body\">\n            <form action=\"#\" id=\"form-id\" (ngSubmit)=\"add()\" #ctrlform=\"ngForm\">\n              <div class=\"form-body\">\n                <h3 class=\"card-title\">Información Basica</h3>\n                <hr>\n                <div class=\"row p-t-20\">\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label class=\"control-label\">Nombre</label>\n                      <input type=\"text\" id=\"name\" class=\"form-control\" placeholder=\"Nombre\" [(ngModel)]=\"item.nombre\"\n                        name=\"name\" required #namep=\"ngModel\">\n                      <span class=\"messages text-danger\" *ngIf=\"namep.errors\">*</span>\n                      <small class=\"form-control-feedback\"> Escriba el nombre del fomulario </small> </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label class=\"control-label\">Tipo</label>\n                      <select class=\"form-control custom-select\" [(ngModel)]=\"item.tipo\" name=\"tipo\" required\n                        #tipo=\"ngModel\">\n                        <option value=\"\"  [disabled]=\"item.tipo=='1'\">Seleccione</option>\n                        <option value=\"1\" disabled>Ficha Comercial</option>\n                        <option value=\"2\" [disabled]=\"item.tipo=='1'\">Configuración</option>\n                      </select>\n\n                      <span class=\"messages text-danger\" *ngIf=\"namep.errors\">*</span>\n                      <small class=\"form-control-feedback\"> Seleccione el tipo del formulario </small> </div>\n                  </div>\n                </div>\n                <div class=\"row p-t-20\">\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label class=\"control-label\">Descripción</label>\n                      <textarea type=\"text\" id=\"descripcion\" class=\"form-control\" placeholder=\"Descripción\"\n                        [(ngModel)]=\"item.descripcion\" name=\"descripcion\">\n\n                      </textarea>\n                      <span class=\"messages text-danger\" *ngIf=\"namep.errors\">*</span>\n                      <small class=\"form-control-feedback\"> Escriba el nombre del fomulario </small> </div>\n                  </div>\n\n                </div>\n                <h3 class=\"card-title\">Formulario <i class=\"ti-layout\"></i></h3>\n                <hr>\n                <div class=\"row p-t-20\">\n                  <div class=\"col-md-12\">\n                    {{item.descripcion}}\n                  </div>\n\n                </div>\n                <hr>\n                <div class=\"row p-t-20 \">\n                  <div class=\"col-md-3  container list-group \">\n                    <div dragula=\"CONTROLES\" id=\"left\" [(dragulaModel)]=\"elementosbase\">\n\n                      <div class=\"list-group-item \" *ngFor=\"let control  of elementosbase\">\n                        <i *ngIf=\"control.tipo=='Numerico'||control.tipo=='Texto'\" class=\"ti-text\"></i>\n                        <i *ngIf=\"control.tipo=='Lista'\" class=\"ti-view-list\"></i>\n                        <i *ngIf=\"control.tipo=='Checkbox'\" class=\"ti-check-box\"></i>\n                        <i *ngIf=\"control.tipo=='Date'\" class=\"ti-calendar\"></i>\n                        <i *ngIf=\"control.tipo=='Split'\" class=\"ti-split-v\"></i>\n                        {{control.nombre}}</div>\n                    </div>\n                  </div>\n\n                  <div class=\"col-md-9 container divfrm\" dragula=\"CONTROLES\" id=\"right\"\n                    [(dragulaModel)]=\"item.controles\" style=\"min-height: 300px;\">\n\n\n\n                    <div *ngFor=\"let elemento  of item.controles\" class=\"form-group controlsel\"\n                      (mouseenter)=\"elemento.mouseenter=true\" (mouseleave)=\"elemento.mouseenter=false\">\n                      <ng-container *ngIf=\"elemento.mouseenter\"><a href=\"#\"  title=\"eliminar\" [swal]=\"deleteSwal\">\n                        <i class=\"ti-trash\"></i></a>\n                            \n                        <a href=\"#\" title=\"configurar\" (click)=\"abrirmodal(elemento)\"><i class=\"ti-widget\"></i></a>\n                      </ng-container>\n                      <swal #deleteSwal title=\"Eliminar Elemento\" text=\"Esta acción no se puede modificar.\"\n                            type=\"question\" [showCancelButton]=\"true\" [focusCancel]=\"true\" (confirm)=\"eliminarElemento(elemento)\">\n                          </swal>\n                      <div *ngIf=\"elemento.tipo=='Checkbox'\" class=\"custom-control custom-checkbox mr-sm-2\">\n                        <input class=\"custom-control-input\" id=\"ctrl_{{elemento.id}}\" name=\"ctrl_{{elemento.id}}\"\n                          type=\"checkbox\" [checked]=\"elemento.valor\" [(ngModel)]=\"elemento.valor\">\n                        <label class=\"custom-control-label\" for=\"ctrl_{{elemento.id}}\">\n                          {{elemento.nombre}}</label>\n                      </div>\n                      <label class=\"control-label\" *ngIf=\"elemento.tipo!='Checkbox'\"> {{elemento.nombre}}</label>\n                      <hr *ngIf=\"elemento.tipo=='Split'\">\n                      <select *ngIf=\"elemento.tipo=='Lista'\" class=\"form-control custom-select\"\n                        [(ngModel)]=\"elemento.valor\" name=\"ctrl_{{elemento.id}}\">\n                        <option value=\"\">Seleccione</option>\n                        <option *ngFor=\"let o of elemento.valoreslista.split(',')\" value=\"o\">\n                          {{ o }}\n                        </option>\n                      </select>\n                      <input *ngIf=\"elemento.tipo=='Numerico'||elemento.tipo=='Texto'||elemento.tipo=='Date'\" name=\"ctrl_{{elemento.id}}\"\n                        class=\"form-control\" placeholder=\"{{elemento.nombre}}\" [type]=\"elemento.dato\"\n                        [(ngModel)]=\"elemento.valor\" name=\"ctrl_{{elemento.id}}\" autocomplete=\"off\">\n\n                      <span class=\"messages text-danger\" *ngIf=\"elemento.requerido\">Campo requerido</span>\n                      <small class=\"form-control-feedback\"> {{elemento.observacion}} </small> \n\n\n                    </div>\n                  </div>\n\n                </div>\n                <hr>\n                <div class=\"form-actions\">\n                  <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!ctrlform.form.valid\"> <i\n                      class=\"fa fa-check\"></i> Guardar</button>\n                  <button type=\"button\" class=\"btn btn-inverse\" routerLink=\"/obra/formulariodinamico\">Cancelar</button>\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n\n<!-- modal configurar -->\n<swal #configurarSwal title=\"Configurar elemento\" [backdrop]=\"true\" [allowOutsideClick]=\"false\"\n  [showCancelButton]=\"false\" [showConfirmButton]=\"true\" [cancelButtonText]=\"'Cancelar'\" [confirmButtonText]=\"'Aceptar'\"\n  showCloseButton=\"true\" [focusCancel]=\"false\">\n  <div *swalPartial>\n    <form action=\"#\" id=\"form-control\" (ngSubmit)=\"add()\" #ctrlformadd=\"ngForm\">\n      <div class=\"row p-t-20\">\n        <div class=\"col-md-12\">\n          <div class=\"form-group\">\n            <label class=\"control-label\">Descripción</label>\n            <input type=\"text\" id=\"name\" class=\"form-control\" placeholder=\"Descripción\" [(ngModel)]=\"ctrSel.nombre\"\n              name=\"name\" required #ctrdescripcion=\"ngModel\">\n            <span class=\"messages text-danger\" *ngIf=\"ctrdescripcion.errors\">*</span>\n            <small class=\"form-control-feedback\"> Escriba el nombre del control </small> </div>\n        </div>\n        <div class=\"col-md-6\" *ngIf=\"ctrSel.tipo!='Split'\">\n          <div class=\"form-group\">\n\n            <div  class=\" custom-control custom-checkbox mr-sm-2\">\n              <input class=\"custom-control-input\" id=\"ctrl_requerido\" name=\"ctrl_requerido\" type=\"checkbox\"\n                [checked]=\"ctrSel.requerido\" [(ngModel)]=\"ctrSel.requerido\">\n              <label class=\"custom-control-label\" for=\"ctrl_requerido\">\n                Es requerido</label>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-6\" *ngIf=\"ctrSel.tipo!='Split'\">\n          <div class=\"form-group\">\n\n            <div  class=\" custom-control custom-checkbox mr-sm-2\">\n              <input class=\"custom-control-input\" id=\"ctrl_archivo\" name=\"ctrl_archivo\" type=\"checkbox\"\n                [checked]=\"ctrSel.archivos\" [(ngModel)]=\"ctrSel.archivos\">\n              <label class=\"custom-control-label\" for=\"ctrl_archivo\">\n                Solcitar archivo</label>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-6\" *ngIf=\"ctrSel.tipo!='Split'\">\n          <div class=\"form-group\">\n\n            <label class=\"control-label\">Observación</label>\n            <input type=\"text\" id=\"name\" class=\"form-control\" placeholder=\"Observación\" [(ngModel)]=\"ctrSel.observacion\"\n              name=\"ctrobservacion\"  #ctrobservacion=\"ngModel\">\n            <span class=\"messages text-danger\" *ngIf=\"ctrobservacion.errors\">*</span>\n            <small class=\"form-control-feedback\"> Escriba la observacion del control </small> \n\n          </div>\n        </div>\n        <div class=\"col-md-12\" *ngIf=\"ctrSel.tipo=='Lista'\">\n          <div class=\"form-group\">\n            <label class=\"control-label\">Valores de la lista</label>\n            <input type=\"text\" id=\"valoreslista\" class=\"form-control\" placeholder=\"Valores de la lista\" [(ngModel)]=\"ctrSel.valoreslista\"\n              name=\"valoreslista\"  #ctrvaloreslista=\"ngModel\">\n            \n            <small class=\"form-control-feedback\"> Separe los valores con coma ej Casa,Puerta</small> \n          </div>\n        </div>\n\n\n      </div>\n    </form>\n\n\n\n  </div>\n\n</swal>"

/***/ }),

/***/ "./src/app/pages/obra/fomulariodinamico/fomulariodinamico-add/fomulariodinamico-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FomulariodinamicoAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng4_loading_spinner__ = __webpack_require__("./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_shared_can_deactivate_guard_can_deactivate_guard_service__ = __webpack_require__("./src/app/shared/can-deactivate-guard/can-deactivate-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_services_fomulariodinamico_fomulariodinamico_service__ = __webpack_require__("./src/app/services/fomulariodinamico/fomulariodinamico.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_viewmodel_formulariodinamico__ = __webpack_require__("./src/app/viewmodel/formulariodinamico.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_viewmodel_elementocampo__ = __webpack_require__("./src/app/viewmodel/elementocampo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_dragula__ = __webpack_require__("./node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__toverux_ngx_sweetalert2__ = __webpack_require__("./node_modules/@toverux/ngx-sweetalert2/esm5/toverux-ngx-sweetalert2.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var FomulariodinamicoAddComponent = /** @class */ (function () {
    function FomulariodinamicoAddComponent(spinnerService, fomulariodinamicoService, router, notificationService, localDataService, candeactivateguard, route, dragulaService) {
        var _this = this;
        this.spinnerService = spinnerService;
        this.fomulariodinamicoService = fomulariodinamicoService;
        this.router = router;
        this.notificationService = notificationService;
        this.localDataService = localDataService;
        this.candeactivateguard = candeactivateguard;
        this.route = route;
        this.dragulaService = dragulaService;
        this.candeactivateguard.setedit(true);
        this.item = new __WEBPACK_IMPORTED_MODULE_6__app_viewmodel_formulariodinamico__["a" /* FomulariosDinamico */]();
        this.crearElementosBase();
        this.dragulaService.destroy('CONTROLES');
        this.dragulaService.createGroup('CONTROLES', {
            copy: function (el, source) {
                return source.id === 'left';
            },
            copyItem: function (elementoCampo) {
                var newcontrol = new __WEBPACK_IMPORTED_MODULE_7__app_viewmodel_elementocampo__["a" /* ElementoCampo */]();
                newcontrol = Object.assign({}, elementoCampo);
                newcontrol.fk_empresa = _this.localDataService.getLocalData('empresaSeleccionada').id;
                return newcontrol;
            },
            accepts: function (el, target, source, sibling) {
                // To avoid dragging from right to left container
                return target.id !== 'left';
            }
        });
    }
    FomulariodinamicoAddComponent.prototype.onScrollEvent = function ($event) {
        var top = document.documentElement.scrollTop;
        var topmenu = $('#left');
        if (top > 800) {
            topmenu.css({ "position": "fixed", "top": "100px", "width": "233.25px" });
        }
        else {
            topmenu.removeAttr("style");
        }
    };
    FomulariodinamicoAddComponent.prototype.crearElementosBase = function () {
        this.elementosbase = [];
        var elemento = new __WEBPACK_IMPORTED_MODULE_7__app_viewmodel_elementocampo__["a" /* ElementoCampo */]();
        elemento.tipo = 'Checkbox';
        elemento.nombre = 'Checkbox';
        elemento.requerido = false;
        elemento.archivos = false;
        this.elementosbase.push(elemento);
        elemento = new __WEBPACK_IMPORTED_MODULE_7__app_viewmodel_elementocampo__["a" /* ElementoCampo */]();
        elemento.tipo = 'Lista';
        elemento.nombre = 'Lista';
        elemento.valoreslista = "";
        elemento.requerido = false;
        elemento.archivos = false;
        this.elementosbase.push(elemento);
        elemento = new __WEBPACK_IMPORTED_MODULE_7__app_viewmodel_elementocampo__["a" /* ElementoCampo */]();
        elemento.tipo = 'Numerico';
        elemento.dato = 'number';
        elemento.nombre = 'Numerico';
        elemento.requerido = false;
        elemento.archivos = false;
        this.elementosbase.push(elemento);
        elemento = new __WEBPACK_IMPORTED_MODULE_7__app_viewmodel_elementocampo__["a" /* ElementoCampo */]();
        elemento.tipo = 'Texto';
        elemento.dato = 'text';
        elemento.nombre = 'Texto';
        elemento.requerido = false;
        elemento.archivos = false;
        this.elementosbase.push(elemento);
        elemento = new __WEBPACK_IMPORTED_MODULE_7__app_viewmodel_elementocampo__["a" /* ElementoCampo */]();
        elemento.tipo = 'Date';
        elemento.dato = 'date';
        elemento.nombre = 'Fecha';
        elemento.requerido = false;
        elemento.archivos = false;
        this.elementosbase.push(elemento);
        elemento = new __WEBPACK_IMPORTED_MODULE_7__app_viewmodel_elementocampo__["a" /* ElementoCampo */]();
        elemento.tipo = 'Split';
        elemento.nombre = 'Separador';
        elemento.requerido = false;
        elemento.archivos = false;
        this.elementosbase.push(elemento);
    };
    FomulariodinamicoAddComponent.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.paramMap.get('id');
        if (this.id == undefined) {
            this.item = new __WEBPACK_IMPORTED_MODULE_6__app_viewmodel_formulariodinamico__["a" /* FomulariosDinamico */]();
            this.item.controles = [];
        }
        else {
            this.getById();
        }
    };
    FomulariodinamicoAddComponent.prototype.getById = function () {
        var _this = this;
        this.spinnerService.show();
        var $id = this.route.snapshot.paramMap.get('id');
        this.fomulariodinamicoService.getById($id)
            .subscribe(function (response) {
            _this.item = response.data;
            if (_this.item.controles == undefined) {
                _this.item.controles = [];
            }
            _this.spinnerService.hide();
        });
    };
    FomulariodinamicoAddComponent.prototype.add = function () {
        var _this = this;
        this.spinnerService.show();
        this.candeactivateguard.setedit(false);
        this.item.fk_empresa = this.localDataService.getLocalData('empresaSeleccionada').id;
        if (this.id == undefined) {
            this.fomulariodinamicoService.add(this.item)
                .subscribe(function (value) {
                _this.spinnerService.hide();
                _this.notificationService.onSuccess('Formulario agregado.');
                _this.router.navigateByUrl('obra/formulariodinamico');
            }, function (err) {
                _this.spinnerService.hide();
                if (err.status_code == 422) {
                    _this.notificationService.onError("El formulario ya existe");
                }
                else {
                    _this.notificationService.onError("Se ha producido un error.");
                }
            });
        }
        else {
            this.fomulariodinamicoService.update(this.item)
                .subscribe(function (value) {
                _this.spinnerService.hide();
                _this.notificationService.onSuccess('Formulario actualizado con exito.');
                _this.router.navigateByUrl('obra/formulariodinamico');
            }, function (err) {
                _this.spinnerService.hide();
                if (err.status_code == 422) {
                    _this.notificationService.onError("El formulario ya existe");
                }
                else {
                    _this.notificationService.onError("Se ha producido un error.");
                }
            });
        }
    };
    FomulariodinamicoAddComponent.prototype.abrirmodal = function (elemento) {
        this.ctrSel = elemento;
        this.configurarSwal.show();
        return false;
    };
    FomulariodinamicoAddComponent.prototype.eliminarElemento = function (elemento) {
        var index = this.item.controles.indexOf(elemento);
        this.item.controles.splice(index, 1);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('configurarSwal'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_9__toverux_ngx_sweetalert2__["a" /* SwalComponent */])
    ], FomulariodinamicoAddComponent.prototype, "configurarSwal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], FomulariodinamicoAddComponent.prototype, "onScrollEvent", null);
    FomulariodinamicoAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-fomulariodinamico-add',
            template: __webpack_require__("./src/app/pages/obra/fomulariodinamico/fomulariodinamico-add/fomulariodinamico-add.component.html"),
            styles: [__webpack_require__("./src/app/pages/obra/fomulariodinamico/fomulariodinamico-add/fomulariodinamico-add.component.css"), __webpack_require__("./node_modules/dropify/dist/css/dropify.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ng4_loading_spinner__["Ng4LoadingSpinnerService"],
            __WEBPACK_IMPORTED_MODULE_5__app_services_fomulariodinamico_fomulariodinamico_service__["a" /* FomulariodinamicoService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__app_shared__["k" /* NotificationService */],
            __WEBPACK_IMPORTED_MODULE_3__app_shared__["i" /* LocalDataService */],
            __WEBPACK_IMPORTED_MODULE_4__app_shared_can_deactivate_guard_can_deactivate_guard_service__["a" /* Candeactivateguard */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_8_ng2_dragula__["b" /* DragulaService */]])
    ], FomulariodinamicoAddComponent);
    return FomulariodinamicoAddComponent;
}());



/***/ }),

/***/ "./src/app/pages/obra/fomulariodinamico/fomulariodinamico-index/fomulariodinamico-index.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/obra/fomulariodinamico/fomulariodinamico-index/fomulariodinamico-index.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-wrapper\">\n  <!-- ============================================================== -->\n  <!-- Container fluid  -->\n  <!-- ============================================================== -->\n  <div class=\"container-fluid\">\n    <!-- ============================================================== -->\n    <!-- Bread crumb and right sidebar toggle -->\n    <!-- ============================================================== -->\n    \n    <!-- ============================================================== -->\n    <!-- End Bread crumb and right sidebar toggle -->\n    <!-- ============================================================== -->\n    <!-- ============================================================== -->\n    <!-- Start Page Content -->\n    <!-- ============================================================== -->\n    <div class=\"row\"> \n      <div class=\"col-12\">\n\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <h4 class=\"card-title\">Lista de Formularios Dinamicos</h4>\n            <h6 class=\"card-subtitle\"></h6>\n            <button type=\"button\" routerLink=\"/obra/formulariodinamico/add\" class=\"btn btn-info btn-rounded m-t-10 float-right\" data-toggle=\"modal\" data-target=\"#add-contact\"><i class=\"ti-plus\"></i> Nuevo</button>\n            <div class=\"table-responsive\">\n              <table id=\"example23\" class=\"display nowrap table table-hover m-t-30  table-striped table-bordered\" cellspacing=\"0\" width=\"100%\">\n                <thead>\n                  <tr>\n                    \n                    <th>Nombre</th>                     \n                    <th>Descripción</th>\n                    <th>Tipo</th>\n                    <th></th>\n                  </tr>\n                </thead>\n                <tfoot>\n                  <tr>\n                    \n                    <th>Nombre</th>                     \n                    <th>Descripción</th>\n                    <th>Tipo</th>\n                    <th></th>\n                  </tr>\n                </tfoot>\n                <tbody>\n                  <tr *ngFor=\"let row of listaitem\">\n                   \n                    <td>{{row.nombre}}</td>\n                    <td>{{row.descripcion}}</td>\n                    <td>{{row.tipo==1?'Ficha Comercial':'Configuración'}}</td>\n                    <td>\n                      <a class=\"preview\" routerLink=\"/obra/formulariodinamico/edit/{{row.id}}\"> <i class=\"icon-note\"></i></a>\n                      <a class=\"preview\" href=\"#\" [swal]=\"deleteSwal\"> <i class=\"icon-trash\"></i></a>\n                      <swal #deleteSwal title=\"Eliminar El Formulario\" text=\"Esta acción no se puede modificar.\" type=\"question\" [showCancelButton]=\"true\" [focusCancel]=\"true\" (confirm)=\"delete(row.id)\">\n                        </swal>\n\n                    </td>\n                  </tr>\n\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/pages/obra/fomulariodinamico/fomulariodinamico-index/fomulariodinamico-index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FomulariodinamicoIndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng4_loading_spinner__ = __webpack_require__("./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_datatables_net__ = __webpack_require__("./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_datatables_net___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_datatables_net__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_datatables_net_bs4__ = __webpack_require__("./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_datatables_net_bs4___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_datatables_net_bs4__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_datatables_net_buttons__ = __webpack_require__("./node_modules/datatables.net-buttons/js/dataTables.buttons.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_datatables_net_buttons___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_datatables_net_buttons__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_services_fomulariodinamico_fomulariodinamico_service__ = __webpack_require__("./src/app/services/fomulariodinamico/fomulariodinamico.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_shared__ = __webpack_require__("./src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FomulariodinamicoIndexComponent = /** @class */ (function () {
    function FomulariodinamicoIndexComponent(spinnerService, fomulariodinamicoService, notificationService) {
        this.spinnerService = spinnerService;
        this.fomulariodinamicoService = fomulariodinamicoService;
        this.notificationService = notificationService;
        this.listaitem = [];
        this.table = null;
    }
    FomulariodinamicoIndexComponent.prototype.ngOnInit = function () {
        this.spinnerService.show();
        this.get();
    };
    FomulariodinamicoIndexComponent.prototype.get = function () {
        var _this = this;
        this.fomulariodinamicoService.get(1)
            .subscribe(function (response) {
            _this.listaitem = response.data;
            _this.reInitDatatable();
            _this.spinnerService.hide();
        });
    };
    FomulariodinamicoIndexComponent.prototype.loadtable = function () {
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
    FomulariodinamicoIndexComponent.prototype.ngAfterViewInit = function () {
    };
    FomulariodinamicoIndexComponent.prototype.delete = function (id) {
        var _this = this;
        this.spinnerService.show();
        this.fomulariodinamicoService.delete(id)
            .subscribe(function (value) {
            _this.notificationService.onSuccess('Formulario Eliminada con Exito.');
            _this.get();
            _this.spinnerService.hide();
        }, function (err) {
            _this.spinnerService.hide();
            if (err.status_code == 400) {
                _this.notificationService.onError("El formulario no se puede eliminar ya que tiene informacion asociada.");
            }
            else {
                _this.notificationService.onError("Se ha producido un error.");
            }
        });
    };
    FomulariodinamicoIndexComponent.prototype.reInitDatatable = function () {
        var _this = this;
        if (this.table) {
            this.table.destroy();
            this.table = null;
        }
        setTimeout(function () { return _this.loadtable(); }, 0);
    };
    FomulariodinamicoIndexComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-fomulariodinamico-index',
            template: __webpack_require__("./src/app/pages/obra/fomulariodinamico/fomulariodinamico-index/fomulariodinamico-index.component.html"),
            styles: [__webpack_require__("./src/app/pages/obra/fomulariodinamico/fomulariodinamico-index/fomulariodinamico-index.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng4_loading_spinner__["Ng4LoadingSpinnerService"],
            __WEBPACK_IMPORTED_MODULE_5__app_services_fomulariodinamico_fomulariodinamico_service__["a" /* FomulariodinamicoService */],
            __WEBPACK_IMPORTED_MODULE_6__app_shared__["k" /* NotificationService */]])
    ], FomulariodinamicoIndexComponent);
    return FomulariodinamicoIndexComponent;
}());



/***/ }),

/***/ "./src/app/pages/obra/fomulariodinamico/fomulariodinamico-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FomulariodinamicoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fomulariodinamico_index_fomulariodinamico_index_component__ = __webpack_require__("./src/app/pages/obra/fomulariodinamico/fomulariodinamico-index/fomulariodinamico-index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fomulariodinamico_add_fomulariodinamico_add_component__ = __webpack_require__("./src/app/pages/obra/fomulariodinamico/fomulariodinamico-add/fomulariodinamico-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_shared_can_deactivate_guard_can_deactivate_guard_service__ = __webpack_require__("./src/app/shared/can-deactivate-guard/can-deactivate-guard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [{ path: '', component: __WEBPACK_IMPORTED_MODULE_2__fomulariodinamico_index_fomulariodinamico_index_component__["a" /* FomulariodinamicoIndexComponent */] },
    { path: 'add', component: __WEBPACK_IMPORTED_MODULE_3__fomulariodinamico_add_fomulariodinamico_add_component__["a" /* FomulariodinamicoAddComponent */], canDeactivate: [__WEBPACK_IMPORTED_MODULE_4__app_shared_can_deactivate_guard_can_deactivate_guard_service__["a" /* Candeactivateguard */]] },
    { path: 'edit/:id', component: __WEBPACK_IMPORTED_MODULE_3__fomulariodinamico_add_fomulariodinamico_add_component__["a" /* FomulariodinamicoAddComponent */], canDeactivate: [__WEBPACK_IMPORTED_MODULE_4__app_shared_can_deactivate_guard_can_deactivate_guard_service__["a" /* Candeactivateguard */]] }];
var FomulariodinamicoRoutingModule = /** @class */ (function () {
    function FomulariodinamicoRoutingModule() {
    }
    FomulariodinamicoRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], FomulariodinamicoRoutingModule);
    return FomulariodinamicoRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/obra/fomulariodinamico/fomulariodinamico.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FomulariodinamicoModule", function() { return FomulariodinamicoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_alert__ = __webpack_require__("./node_modules/ngx-bootstrap/alert/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toverux_ngx_sweetalert2__ = __webpack_require__("./node_modules/@toverux/ngx-sweetalert2/esm5/toverux-ngx-sweetalert2.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_snotify__ = __webpack_require__("./node_modules/ng-snotify/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_typeahead__ = __webpack_require__("./node_modules/ngx-bootstrap/typeahead/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_file_upload__ = __webpack_require__("./node_modules/ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_chips__ = __webpack_require__("./node_modules/ngx-chips/fesm5/ngx-chips.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_bootstrap_datepicker__ = __webpack_require__("./node_modules/ngx-bootstrap/datepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ngx_bootstrap_chronos__ = __webpack_require__("./node_modules/ngx-bootstrap/chronos/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ngx_bootstrap_locale__ = __webpack_require__("./node_modules/ngx-bootstrap/locale.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_componentes_componentes_module__ = __webpack_require__("./src/app/componentes/componentes.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__fomulariodinamico_routing_module__ = __webpack_require__("./src/app/pages/obra/fomulariodinamico/fomulariodinamico-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__fomulariodinamico_index_fomulariodinamico_index_component__ = __webpack_require__("./src/app/pages/obra/fomulariodinamico/fomulariodinamico-index/fomulariodinamico-index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__fomulariodinamico_add_fomulariodinamico_add_component__ = __webpack_require__("./src/app/pages/obra/fomulariodinamico/fomulariodinamico-add/fomulariodinamico-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ng2_dragula__ = __webpack_require__("./node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















Object(__WEBPACK_IMPORTED_MODULE_12_ngx_bootstrap_chronos__["a" /* defineLocale */])('es', __WEBPACK_IMPORTED_MODULE_13_ngx_bootstrap_locale__["a" /* esLocale */]);
var FomulariodinamicoModule = /** @class */ (function () {
    function FomulariodinamicoModule() {
    }
    FomulariodinamicoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_15__fomulariodinamico_routing_module__["a" /* FomulariodinamicoRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                // Ng4LoadingSpinnerModule.forRoot(),
                __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_alert__["a" /* AlertModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4__toverux_ngx_sweetalert2__["b" /* SweetAlert2Module */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5_ng_snotify__["a" /* SnotifyModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_shared__["b" /* AuthenticationModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_shared__["d" /* EnvironmentModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_shared__["f" /* FormValidationModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_shared__["j" /* NotificationModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_shared__["h" /* LocalDataModule */],
                __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_typeahead__["a" /* TypeaheadModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9_ng2_file_upload__["FileUploadModule"],
                __WEBPACK_IMPORTED_MODULE_10_ngx_chips__["a" /* TagInputModule */],
                __WEBPACK_IMPORTED_MODULE_11_ngx_bootstrap_datepicker__["a" /* BsDatepickerModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_14__app_componentes_componentes_module__["a" /* ComponentesModule */],
                __WEBPACK_IMPORTED_MODULE_18_ng2_dragula__["a" /* DragulaModule */].forRoot(),
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_16__fomulariodinamico_index_fomulariodinamico_index_component__["a" /* FomulariodinamicoIndexComponent */], __WEBPACK_IMPORTED_MODULE_17__fomulariodinamico_add_fomulariodinamico_add_component__["a" /* FomulariodinamicoAddComponent */]]
        })
    ], FomulariodinamicoModule);
    return FomulariodinamicoModule;
}());



/***/ }),

/***/ "./src/app/viewmodel/elementocampo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElementoCampo; });
var ElementoCampo = /** @class */ (function () {
    function ElementoCampo() {
    }
    return ElementoCampo;
}());



/***/ }),

/***/ "./src/app/viewmodel/formulariodinamico.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FomulariosDinamico; });
var FomulariosDinamico = /** @class */ (function () {
    function FomulariosDinamico() {
    }
    return FomulariosDinamico;
}());



/***/ })

});
//# sourceMappingURL=fomulariodinamico.module.chunk.js.map