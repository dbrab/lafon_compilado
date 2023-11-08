webpackJsonp(["estacionservicio.module"],{

/***/ "./src/app/estacionservicio/estacionservicio-add/estacionservicio-add.component.css":
/***/ (function(module, exports) {

module.exports = "input[type=\"file\"] {\r\n    display: none;\r\n}\r\n.custom-file-upload {\r\n    border: 1px solid #ccc;\r\n    display: inline-block;\r\n    padding: 6px 12px;\r\n    cursor: pointer;\r\n}\r\n.my-drop-zone { border: dotted 3px lightgray; }\r\n.nv-file-over { border: dotted 3px red; }\r\n/* Default class applied to drop zones on over */\r\n.another-file-over-class { border: dotted 3px green; }  "

/***/ }),

/***/ "./src/app/estacionservicio/estacionservicio-add/estacionservicio-add.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Page wrapper  -->\n<!-- ============================================================== -->\n<div class=\"page-wrapper\">\n  <!-- ============================================================== -->\n  <!-- Container fluid  -->\n  <!-- ============================================================== -->\n  <div class=\"container-fluid\">\n    <!-- ============================================================== -->\n    <!-- Bread crumb and right sidebar toggle -->\n    <!-- ============================================================== -->\n    \n    <!-- ============================================================== -->\n    <!-- End Bread crumb and right sidebar toggle -->\n    <!-- ============================================================== -->\n    <!-- ============================================================== -->\n    <!-- Start Page Content -->\n    <!-- ============================================================== -->\n    <!-- Row -->\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <div class=\"card\">\n          <div class=\"card-header bg-info\">\n            <h4 class=\"m-b-0 text-white\"></h4>\n          </div>\n          <div class=\"card-body\">\n            <form action=\"#\" id=\"form-id\" (ngSubmit)=\"add()\" #ctrlform=\"ngForm\">\n              <div class=\"form-body\">\n                <h3 class=\"card-title\">Información Basica</h3> <small>campos con * requeridos </small>\n                <hr>\n                <div class=\"row p-t-20\">\n                  <div class=\"col-md-12\">\n                    <div class=\"form-group\">\n                      <label class=\"control-label\">Nombre Estación</label>\n                      <input type=\"text\" id=\"name\" class=\"form-control\" placeholder=\"Nombre Estación\"\n                        [(ngModel)]=\"item.name\" name=\"name\" required #name=\"ngModel\">\n                      <span *ngIf=\"name.errors\" class=\"messages text-danger\">\n                        *\n                      </span>\n                      <small class=\"form-control-feedback\"> Escriba el nombre de la Estación de Servicio </small>\n\n                    </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label class=\"control-label\">Cliente</label>\n\n\n                      <input [(ngModel)]=\"item.razon_social\" [typeahead]=\"dataSource\" [typeaheadAsync]=\"true\"\n                        (typeaheadLoading)=\"changeTypeaheadLoading($event)\"\n                        (typeaheadOnSelect)=\"typeaheadOnSelect($event)\" [typeaheadScrollable]=\"true\"\n                        [typeaheadOptionsLimit]=\"100\" typeaheadOptionField=\"razon_social\"\n                        placeholder=\"Seleccione el cliente\" class=\"form-control\" name=\"test\" autocomplete=\"off\" required\n                        #cliente=\"ngModel\" (typeaheadNoResults)=\"typeaheadNoResults($event)\"\n                        [typeaheadItemTemplate]=\"clientItemTemplate\">\n                      <ng-template #clientItemTemplate let-model=\"item\" let-index=\"index\">\n                        <h5>{{model.razon_social}} <span class=\"text-danger\" *ngIf=\"model.bloqueado!='N'\">En Lista\n                            Negra</span></h5>\n\n                      </ng-template>\n                      <div *ngIf=\"typeaheadLoading\">Cargando..</div>\n                      <span *ngIf=\"cliente.errors\" class=\"messages text-danger\">\n                        *\n                      </span>\n                      <small class=\"form-control-feedback\"> Seleccione el cliente </small>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label class=\"control-label\">Zona Tecnica</label>\n                      <select class=\"form-control custom-select\" [(ngModel)]=\"item.fk_zonatecnica\"\n                        name=\"ctrlzonatecnica\">\n                        <option [value]=\"-1\">Seleccione</option>\n                        <option *ngFor=\"let o of zonas\" [value]=\"o.id.toString()\">\n                          {{ o.name }}\n                        </option>\n                      </select>\n                      <span *ngIf=\"item.fk_zonatecnica!='-1'\" class=\"messages text-danger\">\n                        *\n                      </span>\n                      <small class=\"form-control-feedback\"> Seleccione las zonas tecnicas asociadas al usaurio </small>\n                    </div>\n                  </div>\n                </div>\n                <h3 class=\"box-title\">Información adicional</h3>\n                <hr class=\"m-t-0 m-b-40\">\n                <!--/span-->\n                <div class=\"row \">\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label class=\"control-label\">Direccion</label>\n                      <input type=\"text\" id=\"firstName\" class=\"form-control\" (blur)=\"addmarker()\"\n                        placeholder=\"Direccion\" [(ngModel)]=\"item.direccion\" name=\"diDireccionreccion\">\n                      <small class=\"form-control-feedback\"> Escriba la dirección. </small> </div>\n                  </div>\n\n\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label class=\"control-label\">Provincia</label>\n                      <input type=\"text\" id=\"provincia\" class=\"form-control\" placeholder=\"Provincia\"\n                        [(ngModel)]=\"item.provincica\" name=\"provincia\">\n                      <small class=\"form-control-feedback\"> Escriba la Provincia. </small> </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label class=\"control-label\">Localidad</label>\n                      <input type=\"text\" id=\"localidad\" class=\"form-control\" placeholder=\"Localidad\"\n                        [(ngModel)]=\"item.localidad\" name=\"localidad\">\n                      <small class=\"form-control-feedback\"> Escriba la Localidad. </small> </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label class=\"control-label\">Telefono</label>\n                      <input type=\"text\" id=\"firstName\" class=\"form-control\" placeholder=\"Telefono\"\n                        [(ngModel)]=\"item.telefonos\" name=\"phone\">\n                      <small class=\"form-control-feedback\"> Escriba el telefono. </small> </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label class=\"control-label\">Email</label>\n\n                      <tag-input [(ngModel)]=\"item.emails\" addOnBlur=\"true\" min-tags=\"1\" class=\"form-control\"\n                        secondaryPlaceholder=\"Ingrese un email\" placeholder=\"Email\" required\n                        [errorMessages]=\"errorMessages\" [validators]=\"validators\" name=\"email\" #email=\"ngModel\">\n                      </tag-input>\n                      <small class=\"form-control-feedback\"> Escriba el Email. </small>\n                      <span *ngIf=\"email.errors\" class=\"messages text-danger\">\n                        *\n                      </span>\n                    </div>\n                  </div>\n                  <div class=\"col-md-12\">\n                    <div class=\"form-group\">\n                      <label class=\"control-label\">Observaciones</label>\n\n                      <textarea class=\"form-control\" rows=\"5\" id=\"observaciones\" class=\"form-control\"\n                        placeholder=\"observaciones\" [(ngModel)]=\"item.observaciones\" name=\"observaciones\"></textarea>\n                      <small class=\"form-control-feedback\"> Escriba sus observaciones. </small> </div>\n                  </div>\n\n                  <div class=\"col-lg-8 col-md-12\">\n                    <div class=\"card\">\n                      <div class=\"card-body\">\n\n                        <h4 class=\"card-title\">Ubicación</h4>\n                        <div id=\"markermap\" class=\"gmaps\" #gmap></div>\n                      </div>\n                    </div>\n                  </div>\n\n                </div>\n                <h4><i class=\"fa fa-paperclip m-r-10 m-b-10\"></i> Adjuntos <span>({{item.archivos.length}})</span></h4>\n                <div class=\"row\">\n\n                  <div class=\"col-md-12 my-drop-zone\" ng2FileDrop [ngClass]=\"{'nv-file-over': hasBaseDropZoneOver}\"\n                    (fileOver)=\"fileOverBase($event)\" [uploader]=\"uploader\">\n                    <label for=\"file-upload\" class=\"m-3\">\n\n                      <i class=\"ti-files fa-5x\"></i>\n                    </label>\n                    <div class=\"card-body\">\n\n                    </div>\n                    <input type=\"file\" id=\"file-upload\" multiple ng2FileSelect (fileSelected)=\"fileOverBase($event)\"\n                      [uploader]=\"uploader\" />\n\n                  </div>\n                  <div class=\"col-md-12\" *ngIf=\"uploader.isUploading \">\n                    <div class=\"alert alert-info alert-dismissible mt-8 myAlert-top\" role=\"alert\">\n                      <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span\n                          aria-hidden=\"true\">&times;</span></button>\n                      Cargando Archivo ...\n\n                      <div class=\"progress-bar bg-warning\" [ngStyle]=\"{ 'width': uploader.progress + '%' }\"\n                        style=\" height:6px;\" role=\"progressbar\"> <span class=\"sr-only\">60% Complete</span> </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-12\">\n                    <ul class=\"el-info list-inline\">\n                      <li *ngFor=\"let imgprod of item.archivos;\" class=\"col-lg-3 text-truncate\"\n                        title=\"{{imgprod.nombrearchivo==null?imgprod.nombre:imgprod.nombrearchivo}}\">\n                        <a class=\"btn default btn-outline image-popup-vertical-fit\" target=\"_self\"\n                          href=\"{{apiurl+'storage/'+imgprod.nombre}}\" download=\"{{imgprod.nombre}}\">\n                          <i class=\" ti-file\"></i>{{imgprod.tiposiniestro}}-\n                          {{imgprod.nombrearchivo==null?imgprod.nombre:imgprod.nombrearchivo}}</a>\n                        <a href=\"#\" [swal]=\"deletefileSwal\" title=\"Borrar archivo\"><i class=\"ti-trash\"></i></a>\n                        <swal #deletefileSwal title=\"Eliminar Archivo\" text=\"Esta acción no se puede modificar.\"\n                          type=\"question\" [showCancelButton]=\"true\" [focusCancel]=\"true\"\n                          (confirm)=\"eliminar_imagen(imgprod)\">\n                        </swal>\n                      </li>\n\n                    </ul>\n                  </div>\n\n\n\n                </div>\n                <h3 class=\"box-title\" *ngIf=\"!obra\">Componentes</h3>\n                <hr class=\"m-t-0 m-b-40\">\n                <div class=\"row \" *ngIf=\"!obra\">\n                  <div class=\"col-md-12\">\n                    <div class=\"form-group\">\n                      <select class=\"form-control custom-select\" [(ngModel)]=\"newcompo.fk_tipocomponente\"\n                        name=\"tipocomponente\" (change)=\"buscarcomponente()\">\n                        <option [value]=\"-1\">Seleccione</option>\n                        <option *ngFor=\"let o of tiposcomponente\" [value]=\"o.id.toString()\">\n                          {{ o.name }}\n                        </option>\n                      </select>\n\n                    </div>\n                  </div>\n                </div>\n                <hr class=\"m-t-0 m-b-40 \">\n                <div class=\"row p-t-20\" *ngIf=\"newcompo.tipocomponente\">\n                  <div class=\"{{componente.tipo!='Multilinea'?'col-md-6':'col-md-12'}}\"\n                    *ngFor=\"let componente of newcompo.tipocomponente.componentesfields\">\n                    <div class=\"{{componente.tipo!='Checkbox'?'form-group':'form-group row'}}\">\n                      <label *ngIf=\"componente.tipo!='Checkbox'\" class=\"control-label\"\n                        for=\"ctrl_{{componente.id}}\">{{componente.name}}</label>\n\n                      <input *ngIf=\"componente.tipo=='Texto'\" type=\"text\" id=\"ctrl_{{componente.id}}\"\n                        class=\"form-control\" placeholder=\" Escriba el {{componente.name}}\"\n                        [(ngModel)]=\"componente.result\" name=\"ctrl_{{componente.id}}\">\n                      <input *ngIf=\"componente.tipo=='Date'\" type=\"date\" id=\"ctrl_{{componente.id}}\"\n                        class=\"form-control \" placeholder=\" Escriba el {{componente.name}}\"\n                        [(ngModel)]=\"componente.result\" name=\"ctrl_{{componente.id}}\">\n\n\n                      <input *ngIf=\"componente.tipo=='Numerico'\" type=\"number\" id=\"ctrl_{{componente.id}}\"\n                        class=\"form-control \" placeholder=\" Escriba el {{componente.name}}\"\n                        [(ngModel)]=\"componente.result\" name=\"ctrl_{{componente.id}}\">\n\n                      <textarea *ngIf=\"componente.tipo=='Multilinea'\" id=\"ctrl_{{componente.id}}\" class=\"form-control \"\n                        placeholder=\" Escriba el {{componente.name}}\" [(ngModel)]=\"componente.result\"\n                        name=\"ctrl_{{componente.id}}\"></textarea>\n\n                      <select *ngIf=\"componente.tipo=='Lista'\" class=\"form-control custom-select\"\n                        [(ngModel)]=\"componente.result\" name=\"ddl_{{componente.id}}\">\n                        <option [value]=\"-1\">Seleccione</option>\n                        <option *ngFor=\"let o of componente.value.split(',')\" [value]=\"o\">\n                          {{ o }}\n                        </option>\n                      </select>\n\n                      <select *ngIf=\"componente.tipo=='MultiLista'\" multiple class=\"form-control custom-select\"\n                        [(ngModel)]=\"componente.result\" name=\"ddl_{{componente.id}}\">\n                        <option [value]=\"-1\">Seleccione</option>\n                        <option *ngFor=\"let o of componente.value.split(',')\" [value]=\"o\">\n                          {{ o }}\n                        </option>\n                      </select>\n                      <div *ngIf=\"componente.tipo=='Checkbox'\" class=\"col-sm-10\">{{componente.name}}</div>\n                      <div class=\"col-sm-2\">\n                        <div class=\"form-check\">\n                          <input *ngIf=\"componente.tipo=='Checkbox'\" type=\"checkbox\" id=\"chk_{{componente.id}}\"\n                            class=\"form-check-input \" placeholder=\" Escriba el {{componente.name}}\"\n                            [(ngModel)]=\"componente.result\" name=\"chk_{{componente.id}}\">\n\n                        </div>\n                      </div>\n\n\n                      <small *ngIf=\"componente.tipo!='Checkbox'\" class=\"form-control-feedback\"> Escriba el\n                        {{componente.name}} </small>\n                    </div>\n                  </div>\n\n\n                </div>\n                <div *ngIf=\"newcompo.tipocomponente && newcompo.tipocomponente.componentesadicional.length>0\">\n                  <h3 class=\"box-title\">Complementos</h3>\n                  <hr class=\"m-t-0 m-b-40\">\n                  <div class=\"row p-t-20\">\n\n                    <div class=\"col-md-12\">\n                      <div class=\"form-group\">\n                        <table id=\"example23\"\n                          class=\"display nowrap table table-hover m-t-30  table-striped table-bordered\" cellspacing=\"0\"\n                          width=\"100%\">\n                          <tr>\n                            <td colspan=\"3\">\n                              <select class=\"form-control custom-select\" [(ngModel)]=\"idcompadicional\"\n                                name=\"tipocomponenteAdicional\" (change)=\"buscarcomponenteadicional()\">\n                                <option [value]=\"-1\">Seleccione</option>\n                                <option *ngFor=\"let o of newcompo.tipocomponente.componentesadicional \"\n                                  [value]=\"o.tipocomponente.id.toString()\">\n                                  {{ o.tipocomponente.name }}\n                                </option>\n                              </select>\n\n                            </td>\n\n\n                            <td><button type=\"button\" class=\"btn btn-info\" (click)='addNewComponenteAdic()'><i\n                                  class=\"fa fa-plus\"></i></button></td>\n\n                          </tr>\n                        </table>\n\n                      </div>\n                    </div>\n\n                  </div>\n\n\n                </div>\n                <hr class=\"m-t-0 m-b-40\">\n                <div class=\"row p-t-20 card border-info\" style=\"border: 1px;\"\n                  *ngFor=\"let row of newcompo.componentes;   let i = index\">\n\n                  <div class=\"col-lg-12 card-header bg-info\">\n                    <h3 class=\"box-title\">{{row.tipocomponente.name}}</h3>\n                  </div>\n                  <div class=\"{{componente.tipo!='Multilinea'?'col-md-6':'col-md-12'}} card-body\"\n                    *ngFor=\"let componente of  row.tipocomponente.componentesfields; \">\n                    <div class=\"{{componente.tipo!='Checkbox'?'form-group':'form-group row'}}\">\n                      <label *ngIf=\"componente.tipo!='Checkbox'\" class=\"control-label\"\n                        for=\"ctrl_{{componente.id}}_{{i}}\">{{componente.name}}</label>\n\n                      <input *ngIf=\"componente.tipo=='Texto'\" type=\"text\" id=\"ctrl_{{componente.id}}_{{i}}\"\n                        class=\"form-control\" placeholder=\" Escriba el {{componente.name}}\"\n                        [(ngModel)]=\"componente.result\" name=\"ctrlad_{{componente.id}}_{{i}}\">\n\n                      <input *ngIf=\"componente.tipo=='Date'\" type=\"date\" id=\"ctrl_{{componente.id}}_{{i}}\"\n                        class=\"form-control\" placeholder=\" Escriba el {{componente.name}}\"\n                        [(ngModel)]=\"componente.result\" name=\"ctrlad_{{componente.id}}_{{ i }}\">\n\n\n                      <input *ngIf=\"componente.tipo=='Numerico'\" type=\"number\" id=\"ctrl_{{componente.id}}_{{i}}\"\n                        class=\"form-control \" placeholder=\" Escriba el {{componente.name}}\"\n                        [(ngModel)]=\"componente.result\" name=\"ctrlad_{{componente.id}}_{{i}}\">\n\n                      <textarea *ngIf=\"componente.tipo=='Multilinea'\" id=\"ctrl_{{componente.id}}_{{ i }}\"\n                        class=\"form-control \" placeholder=\" Escriba el {{componente.name}}\"\n                        [(ngModel)]=\"componente.result\" name=\"ctrlad_{{componente.id}}_{{i}}\"></textarea>\n\n                      <select *ngIf=\"componente.tipo=='Lista'\" class=\"form-control custom-select\"\n                        [(ngModel)]=\"componente.result\" name=\"ddl_{{componente.id}}\">\n                        <option [value]=\"-1\">Seleccione</option>\n                        <option *ngFor=\"let o of componente.value.split(',')\" [value]=\"o\">\n                          {{ o }}\n                        </option>\n                      </select>\n\n                      <select *ngIf=\"componente.tipo=='MultiLista'\" multiple class=\"form-control custom-select\"\n                        [(ngModel)]=\"componente.result\" name=\"ctrlad_{{componente.id}}_{{i}}\">\n                        <option [value]=\"-1\">Seleccione</option>\n                        <option *ngFor=\"let o of componente.value.split(',')\" [value]=\"o\">\n                          {{ o }}\n                        </option>\n                      </select>\n                      <div *ngIf=\"componente.tipo=='Checkbox'\" class=\"col-sm-10\">{{componente.name}}</div>\n                      <div class=\"col-sm-2\">\n                        <div class=\"form-check\">\n                          <input *ngIf=\"componente.tipo=='Checkbox'\" type=\"checkbox\" id=\"ctrlad_{{componente.id}}_{{i}}\"\n                            class=\"form-check-input \" placeholder=\" Escriba el {{componente.name}}\"\n                            [(ngModel)]=\"componente.result\" name=\"ctrlad_{{componente.id}}_{{i}}\">\n\n                        </div>\n                      </div>\n\n\n                      <small *ngIf=\"componente.tipo!='Checkbox'\" class=\"form-control-feedback\"> Escriba el\n                        {{componente.name}} </small>\n                    </div>\n\n                  </div>\n\n\n                </div>\n                <div class=\"row p-t-20\" *ngIf=\"newcompo.tipocomponente\">\n\n                  <div class=\"col-md-12\">\n                    <div class=\"form-group\">\n                      <button type=\"button\" class=\"btn btn-info float-right\" (click)=\"addNewComponente()\"> <i\n                          class=\"fa fa-plus\"></i>\n                        Agregar Componente</button>\n                    </div>\n                  </div>\n\n                </div>\n                <div class=\"row p-t-20\" *ngIf=\"item.componentes.length>0\">\n\n                  <div class=\"col-md-12\">\n                    <table id=\"example23\" class=\"display nowrap table table-hover m-t-30  table-striped table-bordered\"\n                      cellspacing=\"0\" width=\"100%\">\n                      <thead>\n                        <tr>\n                          <th>Tipo componente</th>\n                          <th>Informacion</th>\n                          <th>Complementos</th>\n                          <th></th>\n                        </tr>\n                      </thead>\n                      <tfoot>\n                        <tr>\n                          <th>Tipo componente</th>\n                          <th>Informacion</th>\n                          <th>Complementos</th>\n                          <th></th>\n                        </tr>\n                      </tfoot>\n                      <tbody>\n                        <tr *ngFor=\"let row of item.componentes\">\n\n                          <td>{{row.tipocomponente.name}}</td>\n                          <td>\n                            <ul>\n                              <li *ngFor=\"let field of row.tipocomponente.componentesfields\">\n                                {{field.name}}:{{field.result}}\n                              </li>\n                            </ul>\n                          </td>\n                          <td>\n                            <ul>\n                              <li *ngFor=\"let componete of row.componentes\">\n                                {{componete.tipocomponente.name}}\n                                <ul>\n                                  <li *ngFor=\"let field of componete.tipocomponente.componentesfields\">\n                                    {{field.name}}:{{field.result}}\n                                  </li>\n                                </ul>\n                              </li>\n                            </ul>\n                          </td>\n                          <td>\n\n                            <a class=\"preview\" href=\"#\" [swal]=\"deleteSwal\"> <i class=\"icon-trash\"></i></a>\n                            <swal #deleteSwal title=\"Eliminar Componente\" text=\"Esta acción no se puede modificar.\"\n                              type=\"question\" [showCancelButton]=\"true\" [focusCancel]=\"true\" (confirm)=\"delete(row)\">\n                            </swal>\n\n                          </td>\n                        </tr>\n\n                      </tbody>\n                    </table>\n                  </div>\n                </div>\n\n                <div class=\"form-actions\">\n                  <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!ctrlform.form.valid \"> <i\n                      class=\"fa fa-check\"></i>\n                    Guardar</button>\n                  <button type=\"button\" class=\"btn btn-inverse\" routerLink=\"/estacionservicio\"\n                    [queryParams]=\"objparameter\">Cancelar</button>\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- Row -->\n    <!-- ============================================================== -->\n    <!-- End PAge Content -->\n    <!-- ============================================================== -->\n    <!-- ============================================================== -->"

/***/ }),

/***/ "./src/app/estacionservicio/estacionservicio-add/estacionservicio-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstacionservicioAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__estacionservicio_service__ = __webpack_require__("./src/app/estacionservicio/estacionservicio.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__ = __webpack_require__("./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__viewmodel_estacionservicio__ = __webpack_require__("./src/app/viewmodel/estacionservicio.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__zonaTecnica_zona_tecnica_service__ = __webpack_require__("./src/app/zonaTecnica/zona-tecnica.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tipocomponente_tipocompoenente_service__ = __webpack_require__("./src/app/tipocomponente/tipocompoenente.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__clientes_cliente_service__ = __webpack_require__("./src/app/clientes/cliente.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__viewmodel_Componente__ = __webpack_require__("./src/app/viewmodel/Componente.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__viewmodel_tipocomponente__ = __webpack_require__("./src/app/viewmodel/tipocomponente.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__google_apis_maps_service__ = __webpack_require__("./src/app/google-apis/maps.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_can_deactivate_guard_can_deactivate_guard_service__ = __webpack_require__("./src/app/shared/can-deactivate-guard/can-deactivate-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_file_upload__ = __webpack_require__("./node_modules/ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__archivoupload_archivoupload_service__ = __webpack_require__("./src/app/archivoupload/archivoupload.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


















var EstacionservicioAddComponent = /** @class */ (function () {
    function EstacionservicioAddComponent(spinnerService, estacionservicioService, router, notificationService, localDataService, zonaTecnicaService, tipocompoenenteService, clienteService, mapsService, candeactivateguard, archivouploadService, route) {
        var _this = this;
        this.spinnerService = spinnerService;
        this.estacionservicioService = estacionservicioService;
        this.router = router;
        this.notificationService = notificationService;
        this.localDataService = localDataService;
        this.zonaTecnicaService = zonaTecnicaService;
        this.tipocompoenenteService = tipocompoenenteService;
        this.clienteService = clienteService;
        this.mapsService = mapsService;
        this.candeactivateguard = candeactivateguard;
        this.archivouploadService = archivouploadService;
        this.route = route;
        this.idcompadicional = '-1';
        this.lat = 40.50017;
        this.long = -3.89239;
        this.markers = [];
        this.uploader = new __WEBPACK_IMPORTED_MODULE_14_ng2_file_upload__["FileUploader"]({
            url: __WEBPACK_IMPORTED_MODULE_15__environments_environment__["a" /* environment */].apiUrl + 'api/archivoincidencia',
            authTokenHeader: "Authorization",
            authToken: "Bearer " + localStorage.getItem('access_token'),
            isHTML5: true,
            autoUpload: true,
            maxFileSize: 5 * 1024 * 1024,
        });
        this.hasBaseDropZoneOver = false;
        this.hasAnotherDropZoneOver = false;
        this.validators = [this.ValidateEmail];
        this.errorMessages = {
            'ValidateEmail': 'solo se admite email'
        };
        this.obra = this.route.snapshot.queryParamMap.get('obra');
        this.candeactivateguard.setedit(true);
        this.dataSource = __WEBPACK_IMPORTED_MODULE_10_rxjs__["Observable"].create(function (observer) {
            // Runs on every search
            _this.clienteService.gettoken(_this.item.razon_social).subscribe(function (value) {
                observer.next(value.data);
            });
        });
        this.uploader.onAfterAddingFile = function (file) {
            _this.uploader.options.additionalParameter = { estacion_id: 0, tipofotosiniestro: 0, tipo: 3 };
            file.withCredentials = false;
        };
        this.uploader.onErrorItem = function (item, response, status, headers) { return _this.onErrorItem(item, response, status, headers); };
        this.uploader.onSuccessItem = function (item, response, status, headers) { return _this.onSuccessItem(item, response, status, headers); };
        this.uploader.onWhenAddingFileFailed = function (fileItem) {
            _this.notificationService.onError('La imagen no se pudo cargar, '
                + 'el tamaño maximo es de 5MB y el formato es png o jpg, INtentelo nuevamente');
        };
        this.apiurl = __WEBPACK_IMPORTED_MODULE_15__environments_environment__["a" /* environment */].apiUrl;
    }
    EstacionservicioAddComponent.prototype.typeaheadNoResults = function (event) {
        this._typeaheadNoResults = event;
        this.item.razon_social = '';
    };
    EstacionservicioAddComponent.prototype.changeTypeaheadLoading = function (e) {
        this.typeaheadLoading = e;
    };
    EstacionservicioAddComponent.prototype.typeaheadOnSelect = function (e) {
        this.item.codigo_cliente = e.item.codigo_cliente;
    };
    EstacionservicioAddComponent.prototype.ngOnInit = function () {
        this.spinnerService.show();
        this.newsubcompo = new __WEBPACK_IMPORTED_MODULE_9__viewmodel_Componente__["a" /* Componente */]();
        this.newcompo = new __WEBPACK_IMPORTED_MODULE_9__viewmodel_Componente__["a" /* Componente */]();
        this.newcompo.fk_tipocomponente = -1;
        this.newcompo.componentes = [];
        this.cargarZonas();
        this.cargartiposcomponente();
        this.item = new __WEBPACK_IMPORTED_MODULE_5__viewmodel_estacionservicio__["a" /* estacionservicio */]();
        this.item.fk_zonatecnica = "-1";
        this.item.razon_social = "";
        this.item.componentes = [];
        this.item.archivos = [];
        this.initmap();
        this.urlestacion = 'estacionservicio';
        this.urlestacion += this.obra != undefined && this.item.esobra == true ? '?obra=1' : '';
        this.objparameter = this.obra != undefined && this.item.esobra == true ? { obra: 1 } : null;
    };
    EstacionservicioAddComponent.prototype.ValidateEmail = function (control) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(control.value)) {
            return null;
        }
        return {
            'ValidateEmail': true
        };
    };
    EstacionservicioAddComponent.prototype.cargarZonas = function () {
        var _this = this;
        this.zonaTecnicaService.get(1).subscribe(function (value) {
            _this.zonas = value.data;
        });
    };
    EstacionservicioAddComponent.prototype.cargartiposcomponente = function () {
        var _this = this;
        this.tipocompoenenteService.get(0).subscribe(function (value) {
            _this.tiposcomponente = value.data;
            _this.spinnerService.hide();
        });
    };
    EstacionservicioAddComponent.prototype.addNewComponente = function () {
        this.item.componentes.push(this.newcompo);
        this.tipocomponentesel = null;
        this.newcompo = new __WEBPACK_IMPORTED_MODULE_9__viewmodel_Componente__["a" /* Componente */]();
        this.newcompo.fk_tipocomponente = -1;
        this.newcompo.componentes = [];
        this.newsubcompo = new __WEBPACK_IMPORTED_MODULE_9__viewmodel_Componente__["a" /* Componente */]();
    };
    EstacionservicioAddComponent.prototype.addNewComponenteAdic = function () {
        var _componenteadic = new __WEBPACK_IMPORTED_MODULE_9__viewmodel_Componente__["a" /* Componente */]();
        _componenteadic.tipocomponente = JSON.parse(JSON.stringify(this.tipocomponenteadic));
        _componenteadic.fk_tipocomponente = this.tipocomponenteadic.id;
        this.newcompo.componentes.push(_componenteadic);
        this.tipocomponenteadic = new __WEBPACK_IMPORTED_MODULE_11__viewmodel_tipocomponente__["a" /* tipocomponente */]();
        this.idcompadicional = '-1';
    };
    EstacionservicioAddComponent.prototype.add = function () {
        var _this = this;
        this.spinnerService.show();
        this.candeactivateguard.setedit(false);
        this.item.fk_empresa = this.localDataService.getLocalData('empresaSeleccionada').id;
        this.item.user_id = this.localDataService.getLocalData('userInfo').id;
        this.item.esobra = this.obra == undefined ? false : true;
        this.item.estadoobra = 'PENDIENTE';
        var emails = this.item.emails.map(function (email) {
            if (email.value != undefined) {
                return email.value;
            }
            else {
                return email;
            }
        });
        this.item.email = emails.join();
        this.estacionservicioService.add(this.item)
            .subscribe(function (value) {
            _this.spinnerService.hide();
            _this.notificationService.onSuccess('Estacion de Servicio agregada.');
            _this.router.navigateByUrl(_this.urlestacion);
        }, function (err) {
            _this.spinnerService.hide();
            if (err.status_code == 422) {
                _this.notificationService.onError("Estacion de Servicio ya existe");
            }
            else {
                _this.notificationService.onError("Se ha producido un error.");
            }
        });
    };
    EstacionservicioAddComponent.prototype.deletecomponent = function (componente) {
        var index = this.item.componentes.indexOf(componente);
        this.item.componentes.splice(index, 1);
    };
    EstacionservicioAddComponent.prototype.deleteSubcomponent = function (componente, subcomponente) {
        var index = componente.componentes.indexOf(subcomponente);
        componente.componentes.splice(index, 1);
    };
    EstacionservicioAddComponent.prototype.getComponenteById = function ($id) {
        var _this = this;
        this.spinnerService.show();
        this.tipocompoenenteService.getById($id)
            .subscribe(function (response) {
            _this.newcompo.tipocomponente = response.data;
            for (var i = 0; i < _this.newcompo.tipocomponente.componentesfields.length; i++) {
                if (_this.newcompo.tipocomponente.componentesfields[i].tipo == 'Lista') {
                    _this.newcompo.tipocomponente.componentesfields[i].result = '-1';
                }
                else {
                    _this.newcompo.tipocomponente.componentesfields[i].result = '';
                }
            }
            _this.spinnerService.hide();
        });
    };
    EstacionservicioAddComponent.prototype.buscarcomponente = function () {
        this.getComponenteById(this.newcompo.fk_tipocomponente);
    };
    EstacionservicioAddComponent.prototype.buscarcomponenteadicional = function () {
        var _this = this;
        var result = this.newcompo.tipocomponente.componentesadicional.filter(function (comp) { return comp.fk_tipocomponenteadicional.toString() == _this.idcompadicional; });
        if (result.length > 0) {
            this.tipocomponenteadic = result[0].tipocomponente;
        }
    };
    EstacionservicioAddComponent.prototype.delete = function (row) {
        var index = this.item.componentes.indexOf(row);
        this.item.componentes.splice(index, 1);
    };
    EstacionservicioAddComponent.prototype.initmap = function () {
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
    EstacionservicioAddComponent.prototype.addclickmarker = function (myLatlng) {
        var marker = new google.maps.Marker({
            position: myLatlng,
            map: this.map,
            animation: google.maps.Animation.DROP,
            title: 'Hola!',
            label: 'D'
        });
        this.setMapOnAll(null);
        this.markers.push(marker);
    };
    EstacionservicioAddComponent.prototype.addmarker = function () {
        var _this = this;
        this.setMapOnAll(null);
        this.mapsService.codeAddress(this.item.direccion)
            .subscribe(function (response) {
            if (response.length > 0) {
                _this.item.lat = response[0].geometry.location.lat();
                _this.item.lng = response[0].geometry.location.lng();
                var myLatlng = new google.maps.LatLng(_this.item.lat, _this.item.lng);
                var marker = new google.maps.Marker({
                    position: myLatlng,
                    map: _this.map,
                    animation: google.maps.Animation.DROP,
                    title: 'Hola!',
                    label: _this.item.razon_social
                });
                _this.map.setCenter(marker.getPosition());
                _this.markers.push(marker);
            }
        });
    };
    EstacionservicioAddComponent.prototype.setMapOnAll = function (map) {
        for (var i = 0; i < this.markers.length; i++) {
            this.markers[i].setMap(map);
        }
        this.markers = [];
    };
    EstacionservicioAddComponent.prototype.onErrorItem = function (item, response, status, headers) {
        var error = JSON.parse(response); //error server response
        console.log(error);
    };
    EstacionservicioAddComponent.prototype.fileOverBase = function (e) {
        this.uploader.options.additionalParameter = { estacion_id: 0, tipofotosiniestro: 0, tipo: 3 };
        this.hasBaseDropZoneOver = e;
    };
    EstacionservicioAddComponent.prototype.fileOverAnother = function (e) {
        this.uploader.options.additionalParameter = { estacion_id: 0, tipofotosiniestro: 0, tipo: 3 };
        this.hasAnotherDropZoneOver = e;
    };
    EstacionservicioAddComponent.prototype.onSuccessItem = function (item, response, status, headers) {
        if (this.item.archivos == undefined || this.item.archivos == null) {
            this.item.archivos = [];
        }
        this.item.archivos.push($.parseJSON(response).data);
    };
    EstacionservicioAddComponent.prototype.eliminar_imagen = function (imagen) {
        var _this = this;
        this.archivouploadService.delete(imagen.id, 3).subscribe(function (value) {
            var indice = _this.item.archivos.indexOf(imagen);
            _this.item.archivos.splice(indice, 1);
            _this.notificationService.onSuccess('Imagen eliminada con exito.');
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('gmap'),
        __metadata("design:type", Object)
    ], EstacionservicioAddComponent.prototype, "gmapElement", void 0);
    EstacionservicioAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-estacionservicio-add',
            template: __webpack_require__("./src/app/estacionservicio/estacionservicio-add/estacionservicio-add.component.html"),
            styles: [__webpack_require__("./src/app/estacionservicio/estacionservicio-add/estacionservicio-add.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__["Ng4LoadingSpinnerService"],
            __WEBPACK_IMPORTED_MODULE_2__estacionservicio_service__["a" /* EstacionservicioService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__shared__["k" /* NotificationService */],
            __WEBPACK_IMPORTED_MODULE_4__shared__["i" /* LocalDataService */],
            __WEBPACK_IMPORTED_MODULE_6__zonaTecnica_zona_tecnica_service__["a" /* ZonaTecnicaService */],
            __WEBPACK_IMPORTED_MODULE_7__tipocomponente_tipocompoenente_service__["a" /* TipocompoenenteService */],
            __WEBPACK_IMPORTED_MODULE_8__clientes_cliente_service__["a" /* ClienteService */],
            __WEBPACK_IMPORTED_MODULE_12__google_apis_maps_service__["a" /* MapsService */],
            __WEBPACK_IMPORTED_MODULE_13__shared_can_deactivate_guard_can_deactivate_guard_service__["a" /* Candeactivateguard */],
            __WEBPACK_IMPORTED_MODULE_16__archivoupload_archivoupload_service__["a" /* ArchivouploadService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], EstacionservicioAddComponent);
    return EstacionservicioAddComponent;
}());



/***/ }),

/***/ "./src/app/estacionservicio/estacionservicio-edit/estacionservicio-edit.component.css":
/***/ (function(module, exports) {

module.exports = "input[type=\"file\"] {\r\n    display: none;\r\n}\r\n.custom-file-upload {\r\n    border: 1px solid #ccc;\r\n    display: inline-block;\r\n    padding: 6px 12px;\r\n    cursor: pointer;\r\n}\r\n.my-drop-zone { border: dotted 3px lightgray; }\r\n.nv-file-over { border: dotted 3px red; }\r\n/* Default class applied to drop zones on over */\r\n.another-file-over-class { border: dotted 3px green; }  "

/***/ }),

/***/ "./src/app/estacionservicio/estacionservicio-edit/estacionservicio-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Page wrapper  -->\n<!-- ============================================================== -->\n<div class=\"page-wrapper\">\n  <!-- ============================================================== -->\n  <!-- Container fluid  -->\n  <!-- ============================================================== -->\n  <div class=\"container-fluid\">\n    <!-- ============================================================== -->\n    <!-- Bread crumb and right sidebar toggle -->\n    <!-- ============================================================== -->\n\n    <!-- ============================================================== -->\n    <!-- End Bread crumb and right sidebar toggle -->\n    <!-- ============================================================== -->\n    <!-- ============================================================== -->\n    <!-- Start Page Content -->\n    <!-- ============================================================== -->\n    <!-- Row -->\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <div class=\"card\">\n          <div class=\"card-header bg-info\">\n            <h4 class=\"m-b-0 text-white\"></h4>\n          </div>\n          <div class=\"card-body\">\n            <form #ctrlform=\"ngForm\" action=\"#\" id=\"form-id\" (ngSubmit)=\"add()\">\n              <div class=\"form-body\">\n                <h3 class=\"card-title\">Información Basica</h3>\n                <hr>\n                <div class=\"row p-t-20\">\n                  <div class=\"col-md-12\">\n                    <div class=\"form-group\">\n                      <label class=\"control-label\">Nombre Estación</label>\n                      <input type=\"text\" id=\"name\" class=\"form-control\" placeholder=\"Nombre Estación\"\n                        [(ngModel)]=\"item.name\" name=\"name\" required #name=\"ngModel\">\n                      <span *ngIf=\"name.errors\" class=\"messages text-danger\">\n                        *\n                      </span>\n                      <small class=\"form-control-feedback\"> Escriba el nombre de la Estación de Servicio </small>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label class=\"control-label\">Cliente</label>\n\n\n                      <input [(ngModel)]=\"item.razon_social\" [typeahead]=\"dataSource\" [typeaheadAsync]=\"true\"\n                        autocomplete=\"off\" (typeaheadLoading)=\"changeTypeaheadLoading($event)\"\n                        (typeaheadOnSelect)=\"typeaheadOnSelect($event)\" [typeaheadScrollable]=\"true\"\n                        [typeaheadOptionsLimit]=\"100\" typeaheadOptionField=\"razon_social\"\n                        placeholder=\"Seleccione el cliente\" class=\"form-control\" name=\"test\" required\n                        #cliente=\"ngModel\">\n                      <span *ngIf=\"cliente.errors\" class=\"messages text-danger\">\n                        *\n                      </span>\n                      <div *ngIf=\"typeaheadLoading\">Cargando..</div>\n                      <small class=\"form-control-feedback\"> Seleccione el cliente </small>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label class=\"control-label\">Zona Tecnica</label>\n                      <select class=\"form-control custom-select\" [(ngModel)]=\"item.fk_zonatecnica\"\n                        name=\"ctrlzonatecnica\">\n                        <option [value]=\"-1\">Seleccione</option>\n                        <option *ngFor=\"let o of zonas\" [value]=\"o.id.toString()\">\n                          {{ o.name }}\n                        </option>\n                      </select>\n                      <span *ngIf=\"item.fk_zonatecnica!='-1'\" class=\"messages text-danger\">\n                        *\n                      </span>\n                      <small class=\"form-control-feedback\"> Seleccione las zonas tecnicas asociadas al usaurio </small>\n                    </div>\n                  </div>\n                </div>\n                <h3 class=\"box-title\">Información adicional</h3>\n                <hr class=\"m-t-0 m-b-40\">\n                <!--/span-->\n                <div class=\"row \">\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label class=\"control-label\">Direccion</label>\n                      <input type=\"text\" id=\"firstName\" class=\"form-control\" placeholder=\"Direccion\"\n                        [(ngModel)]=\"item.direccion\" (blur)=\"addmarker()\" name=\"direccion\">\n                      <small class=\"form-control-feedback\"> Escriba la dirección. </small>\n                    </div>\n                  </div>\n\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label class=\"control-label\">Provincia</label>\n                      <input type=\"text\" id=\"provincia\" class=\"form-control\" placeholder=\"Provincia\"\n                        [(ngModel)]=\"item.provincica\" name=\"provincia\">\n                      <small class=\"form-control-feedback\"> Escriba la Provincia. </small>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label class=\"control-label\">Localidad</label>\n                      <input type=\"text\" id=\"localidad\" class=\"form-control\" placeholder=\"Localidad\"\n                        [(ngModel)]=\"item.localidad\" name=\"localidad\">\n                      <small class=\"form-control-feedback\"> Escriba la Localidad. </small>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label class=\"control-label\">Telefono</label>\n                      <input type=\"text\" id=\"firstName\" class=\"form-control\" placeholder=\"Telefono\"\n                        [(ngModel)]=\"item.telefonos\" name=\"phone\">\n                      <small class=\"form-control-feedback\"> Escriba el telefono. </small>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label class=\"control-label\">Email</label>\n                      <tag-input [(ngModel)]=\"item.emails\" class=\"form-control\" [errorMessages]=\"errorMessages\"\n                        [validators]=\"validators\" secondaryPlaceholder=\"Ingrese un email\" placeholder=\"Email\"\n                        name=\"email\" required #email=\"ngModel\"></tag-input>\n\n                      <small class=\"form-control-feedback\"> Escriba el Email. </small>\n                      <span *ngIf=\"email.errors\" class=\"messages text-danger\">\n                        *\n                      </span>\n                    </div>\n                  </div>\n                  <div class=\"col-md-12\">\n                    <div class=\"form-group\">\n                      <label class=\"control-label\">Observaciones</label>\n\n                      <textarea class=\"form-control\" rows=\"5\" id=\"observacionesestacion\" class=\"form-control\"\n                        placeholder=\"observaciones\" [(ngModel)]=\"item.observaciones\"\n                        name=\"observacionesestacion\"></textarea>\n                      <small class=\"form-control-feedback\"> Escriba sus observaciones. </small>\n                    </div>\n                  </div>\n\n                  <div class=\"col-lg-8 col-md-12\">\n                    <div class=\"card\">\n                      <div class=\"card-body\">\n\n                        <h4 class=\"card-title\">Ubicación</h4>\n                        <div id=\"markermap\" class=\"gmaps\" #gmap></div>\n                      </div>\n                    </div>\n                  </div>\n\n\n                </div>\n                <h4><i class=\"fa fa-paperclip m-r-10 m-b-10\"></i> Adjuntos <span>({{item.archivos.length}})</span></h4>\n                <div class=\"row\">\n\n                  <div class=\"col-md-12 my-drop-zone\" ng2FileDrop [ngClass]=\"{'nv-file-over': hasBaseDropZoneOver}\"\n                    (fileOver)=\"fileOverBase($event)\" [uploader]=\"uploader\">\n                    <label for=\"file-upload\" class=\"m-3\">\n\n                      <i class=\"ti-files fa-5x\"></i>\n                    </label>\n                    <div class=\"card-body\">\n\n                    </div>\n                    <input type=\"file\" id=\"file-upload\" multiple ng2FileSelect (fileSelected)=\"fileOverBase($event)\"\n                      [uploader]=\"uploader\" />\n\n                  </div>\n                  <div class=\"col-md-12\" *ngIf=\"uploader.isUploading \">\n                    <div class=\"alert alert-info alert-dismissible mt-8 myAlert-top\" role=\"alert\">\n                      <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span\n                          aria-hidden=\"true\">&times;</span></button>\n                      Cargando Archivo ...\n\n                      <div class=\"progress-bar bg-warning\" [ngStyle]=\"{ 'width': uploader.progress + '%' }\"\n                        style=\" height:6px;\" role=\"progressbar\"> <span class=\"sr-only\">60% Complete</span> </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-12\">\n                    <ul class=\"el-info list-inline\">\n                      <li *ngFor=\"let imgprod of item.archivos;\" class=\"col-lg-3 text-truncate\"\n                        title=\"{{imgprod.nombrearchivo==null?imgprod.nombre:imgprod.nombrearchivo}}\">\n                        <a class=\"btn default btn-outline image-popup-vertical-fit\" target=\"_self\"\n                          href=\"{{apiurl+'storage/'+imgprod.nombre}}\" download=\"{{imgprod.nombre}}\">\n                          <i class=\" ti-file\"></i>{{imgprod.tiposiniestro}}-\n                          {{imgprod.nombrearchivo==null?imgprod.nombre:imgprod.nombrearchivo}}</a>\n                        <br><a href=\"#\" [swal]=\"deletefileSwal\" class=\"btn default btn-outline image-popup-vertical-fit\"\n                          title=\"Borrar archivo\"><i class=\"ti-trash\"></i></a>\n                        <swal #deletefileSwal title=\"Eliminar Archivo\" text=\"Esta acción no se puede modificar.\"\n                          type=\"question\" [showCancelButton]=\"true\" [focusCancel]=\"true\"\n                          (confirm)=\"eliminar_imagen(imgprod)\">\n                        </swal>\n                      </li>\n\n                    </ul>\n                  </div>\n\n\n\n                </div>\n                <h3 class=\"box-title\" *ngIf=\"!item.esobra\">Componentes</h3>\n                <hr class=\"m-t-0 m-b-40\">\n                <div class=\"row \" *ngIf=\"!item.esobra\">\n\n                  <div class=\"col-md-12\">\n                    <div class=\"table-responsive\">\n                      <table id=\"example23\"\n                        class=\"display nowrap table table-hover m-t-30  table-striped table-bordered\" cellspacing=\"0\"\n                        width=\"100%\">\n                        <thead>\n                          <tr>\n                            <th>Tipo Componente</th>\n                            <th>Informacion</th>\n                            <th>Complementos</th>\n                            <th>Contratos</th>\n\n                            <th></th>\n                          </tr>\n                        </thead>\n                        <tfoot>\n                          <tr>\n                            <th colspan=\"4\"> <select class=\"form-control custom-select\"\n                                [(ngModel)]=\"newcompo.fk_tipocomponente\" name=\"tipocomponente\">\n                                <option [value]=\"-1\">Seleccione</option>\n                                <option *ngFor=\"let o of tiposcomponente\" [value]=\"o.id.toString()\">\n                                  {{ o.name }}\n                                </option>\n                              </select></th>\n\n\n                            <th><button type=\"button\" class=\"btn btn-info\" (click)='selectComponent(null)'><i\n                                  class=\"fa fa-plus\"></i></button></th>\n                          </tr>\n                        </tfoot>\n                        <tbody>\n                          <ng-container *ngFor=\"let row of item.componentes; let i = index\">\n                            <tr *ngIf=\"row.id\">\n                              <td>\n                                {{row.tipocomponente.name}}\n                              </td>\n                              <td>\n                                <ul>\n                                  <li *ngFor=\"let field of row.componentfields\">\n                                    <strong>{{field.tipocomponentfield.name}}:</strong> {{field.value}}\n                                  </li>\n                                </ul>\n                              </td>\n                              <td>\n                                <ul>\n                                  <li *ngFor=\"let fieldad of row.componentes\">\n                                    <strong>{{fieldad.tipocomponente.name}}</strong>\n                                    <ul *ngIf=\"fieldad.id\">\n                                      <li *ngFor=\"let compad of fieldad.componentfields\">\n                                        <strong>{{compad.tipocomponentfield.name}}:</strong> {{compad.value}}\n                                      </li>\n                                    </ul>\n                                    <ul *ngIf=\"!fieldad.id\">\n                                      <li *ngFor=\"let compad of fieldad.componentfields\">\n                                        <strong>{{compad.name}}:</strong> {{compad.result}}\n                                      </li>\n                                    </ul>\n                                  </li>\n                                </ul>\n\n                              </td>\n                              <td>\n                                <ul>\n                                  <li *ngFor=\"let contfield of row.contratos\">\n                                    <a class=\"preview mouseselect\" (click)=\"iracontrato(contfield.contrato.id)\">\n                                      <span class=\"badge \"\n                                        [ngClass]=\"contfield.contrato.estado?' badge-success':'badge-danger'\">\n                                        <strong\n                                          [ngStyle]=\"{'background-color': contfield.contrato.tipocontrato?contfield.contrato.tipocontrato.color:'#ffffff'}\">{{contfield.contrato.tipocontrato.name}}:</strong>\n                                        {{contfield.contrato.fechafin}}</span>\n                                    </a>\n\n                                  </li>\n                                </ul>\n                              </td>\n                              <td>\n                                <a *ngIf=\"row.estado==true\" class=\"preview\" href=\"#\" (click)='selectComponent(row)'> <i\n                                    class=\"icon-note\"></i></a>\n                                <a *ngIf=\"row.estado==true\" class=\"preview\" href=\"#\" [swal]=\"deleteSwal\"> <i\n                                    class=\"icon-trash\"></i></a>\n                                <swal #deleteSwal title=\"Eliminar Este Componente\"\n                                  text=\"Esta acción no se puede modificar.\" type=\"question\" [showCancelButton]=\"true\"\n                                  [focusCancel]=\"true\" (confirm)=\"deletecomponent(row)\">\n                                </swal>\n                                <a *ngIf=\"row.estado==true\" class=\"preview\" href=\"#\" (click)='agregarContrato(row)'\n                                  title=\"Nuevo Contrato\"><i class=\"fas fa-file-alt\"></i></a>\n                                <a *ngIf=\"row.estado==false\" class=\"preview\" href=\"#\" [swal]=\"activateSwal\">\n                                  <i *ngIf=\"row.estado==false\" class=\" icon-control-play\"></i>\n                                </a>\n                                <swal #activateSwal title=\"Activar Este Componente\"\n                                  text=\"Esta acción no se puede modificar.\" type=\"question\" [showCancelButton]=\"true\"\n                                  [focusCancel]=\"true\" (confirm)=\"dactivarcomponent(row)\">\n                                </swal>\n                              </td>\n\n                            </tr>\n                            <tr *ngIf=\"!row.id\">\n                              <td>\n                                {{row.tipocomponente.name}}\n                              </td>\n                              <td>\n                                <ul>\n                                  <li *ngFor=\"let field of row.componentfields\">\n                                    <strong>{{field.name}}:</strong> {{field.result}}\n                                  </li>\n                                </ul>\n                              </td>\n                              <td>\n                                <ul>\n                                  <li *ngFor=\"let fieldad of row.componentes\">\n                                    <strong>{{fieldad.name}}</strong>\n                                    <ul *ngIf=\"fieldad.id\">\n                                      <li *ngFor=\"let compad of fieldad.componentfields\">\n                                        <strong>{{compad.name}}:</strong> {{compad.result}}\n                                      </li>\n                                    </ul>\n                                    <ul *ngIf=\"!fieldad.id\">\n                                      <li *ngFor=\"let compad of fieldad.componentfields\">\n                                        <strong>{{compad.name}}:</strong> {{compad.result}}\n                                      </li>\n                                    </ul>\n                                  </li>\n                                </ul>\n\n                              </td>\n                              <td>\n                                <a class=\"preview\" href=\"#\" (click)='selectComponent(row)'> <i\n                                    class=\"icon-note\"></i></a>\n                                <a class=\"preview\" href=\"#\" [swal]=\"deleteSwal\"> <i class=\"icon-trash\"></i></a>\n                                <swal #deleteSwal title=\"Eliminar Este Componente\"\n                                  text=\"Esta acción no se puede modificar.\" type=\"question\" [showCancelButton]=\"true\"\n                                  [focusCancel]=\"true\" (confirm)=\"deletecomponent(row)\">\n                                </swal>\n                                <a class=\"preview\" href=\"#\" (click)='agregarContrato(row)'><i\n                                    class=\"fas fa-file-alt\"></i></a>\n                              </td>\n\n                            </tr>\n\n                          </ng-container>\n                        </tbody>\n                      </table>\n                    </div>\n                  </div>\n\n\n                </div>\n                <h3 class=\"box-title\" *ngIf=\"item.esobra\">Estado Obra</h3>\n                <div class=\"row\" *ngIf=\"item.esobra\">\n\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label class=\"control-label\">El presupuesto esta Aprobado?{{item.estadoobra}}</label>\n                      <select class=\"form-control custom-select\" [(ngModel)]=\"item.estadoobra\" name=\"estadoobra\">\n                        <option value=\"PENDIENTE\">PENDIENTE</option>\n                        <option value=\"APROBADO\">APROBADO</option>\n                        <option value=\"CANCELADO\">CANCELADO</option>\n                      </select>\n                      <span *ngIf=\"item.fk_zonatecnica!='-1'\" class=\"messages text-danger\">\n                        *\n                      </span>\n                      <small class=\"form-control-feedback\"> Seleccione el estado de la obra </small>\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"form-actions\">\n                  <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!ctrlform.form.valid\"> <i\n                      class=\"fa fa-check\"></i> Guardar</button>\n                  <button type=\"button\" class=\"btn btn-inverse\" routerLink=\"/estacionservicio\"\n                    [queryParams]=\"objparameter\">Cancelar</button>\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n    <!-- editar component -->\n    <swal #editSwal title=\"Editar componente\" [backdrop]=\"true\" [allowOutsideClick]=\"false\" [showCancelButton]=\"false\"\n      [cancelButtonText]=\"'Cancelar'\" customClass=\"swal-wide\" showCloseButton=\"true\" [showConfirmButton]=\"false\">\n      <div *swalPartial>\n\n        <form #componentsForm=\"ngForm\">\n          <h3 class=\"box-title\">{{composelect.tipocomponente.name}}</h3>\n          <hr class=\"m-t-0 m-b-40\">\n\n          <div class=\"row p-t-20\" *ngIf=\"composelect.tipocomponente\">\n            <div class=\"{{componente.tipocomponentfield.tipo!='Multilinea'?'col-md-6':'col-md-12'}}\"\n              *ngFor=\"let componente of composelect.componentfields\">\n              <div class=\"{{componente.tipocomponentfield.tipo!='Checkbox'?'form-group':'form-group row'}}\">\n                <label *ngIf=\"componente.tipocomponentfield.tipo!='Checkbox'\" class=\"control-label\"\n                  for=\"ctrl_{{componente.id}}\">\n                  {{componente.tipocomponentfield.name}}</label>\n\n                <input *ngIf=\"componente.tipocomponentfield.tipo=='Texto'\" type=\"text\" id=\"ctrl_{{componente.id}}\"\n                  class=\"form-control\" placeholder=\" Escriba el {{componente.tipocomponentfield.name}}\"\n                  [(ngModel)]=\"componente.value\" name=\"ctrl_{{componente.id}}\">\n\n                <input *ngIf=\"componente.tipocomponentfield.tipo=='Date'\" type=\"text\" id=\"ctrl_{{componente.id}}\"\n                  class=\"form-control\" placeholder=\" Escriba el {{componente.tipocomponentfield.name}}\"\n                  [(ngModel)]=\"componente.value\" name=\"ctrl_{{componente.id}}\">\n\n\n                <input *ngIf=\"componente.tipocomponentfield.tipo=='Numerico'\" type=\"number\" id=\"ctrl_{{componente.id}}\"\n                  class=\"form-control \" placeholder=\" Escriba el {{componente.name}}\" [(ngModel)]=\"componente.value\"\n                  name=\"ctrl_{{componente.id}}\">\n\n                <textarea *ngIf=\"componente.tipocomponentfield.tipo=='Multilinea'\" id=\"ctrl_{{componente.id}}\"\n                  class=\"form-control \" placeholder=\" Escriba el {{componente.name}}\" [(ngModel)]=\"componente.value\"\n                  name=\"ctrl_{{componente.id}}\"></textarea>\n\n                <select *ngIf=\"componente.tipocomponentfield.tipo=='Lista'\" class=\"form-control custom-select\"\n                  [(ngModel)]=\"componente.value\" name=\"ddl_{{componente.id}}\">\n                  <option [value]=\"-1\">Seleccione</option>\n                  <option *ngFor=\"let o of componente.tipocomponentfield.value.split(',')\" [value]=\"o\">\n                    {{ o }}\n                  </option>\n                </select>\n\n                <select *ngIf=\"componente.tipocomponentfield.tipo=='MultiLista'\" multiple\n                  class=\"form-control custom-select\" [(ngModel)]=\"componente.value\" name=\"ddl_{{componente.id}}\">\n                  <option [value]=\"-1\">Seleccione</option>\n                  <option *ngFor=\"let o of componente.tipocomponentfield.value.split(',')\" [value]=\"o\">\n                    {{ o }}\n                  </option>\n                </select>\n                <div *ngIf=\"componente.tipocomponentfield.tipo=='Checkbox'\" class=\"col-sm-10\">\n                  {{componente.tipocomponentfield.name}}</div>\n                <div class=\"col-sm-2\">\n                  <div class=\"form-check\">\n                    <input *ngIf=\"componente.tipo=='Checkbox'\" type=\"checkbox\" id=\"chk_{{componente.id}}\"\n                      class=\"form-check-input \" placeholder=\" Escriba el {{componente.tipocomponentfield.name}}\"\n                      [(ngModel)]=\"componente.value\" name=\"chk_{{componente.id}}\">\n\n                  </div>\n                </div>\n\n\n                <small *ngIf=\"componente.tipocomponentfield.tipo!='Checkbox'\" class=\"form-control-feedback\"> Escriba\n                  el\n                  {{componente.tipocomponentfield.name}} </small>\n              </div>\n            </div>\n\n\n          </div>\n          <div>\n            <h3 class=\"box-title\">Complementos</h3>\n            <hr class=\"m-t-0 m-b-40\">\n\n            <div class=\"row p-t-20\">\n\n              <ng-container *ngFor=\"let _row of composelect.componentes; let j = index\">\n                <div class=\"col-lg-12\">\n                  <h4 class=\"font-weight-bold\">{{_row.tipocomponente.name}}</h4> <span class=\"float-right\"> <a\n                      class=\"preview\"> <i (click)=\"deleteSubcomponent(_row, j)\" class=\"icon-trash\"></i></a>\n                  </span>\n\n                </div>\n                <div class=\"col-lg-12\">\n\n                  <div class=\"form-group row \" *ngIf=\"_row.id\">\n                    <div *ngFor=\"let componentead of _row.componentfields\"\n                      class=\"{{componentead.tipocomponentfield.tipo!='Multilinea'?'col-md-6':'col-md-12'}}\">\n\n                      <div class=\"{{componentead.tipocomponentfield.tipo!='Checkbox'?'form-group':'form-group row'}}\">\n                        <label *ngIf=\"componentead.tipocomponentfield.tipo!='Checkbox'\" class=\"control-label\"\n                          for=\"ctrlad_{{componentead.id}}\">\n                          {{componentead.tipocomponentfield.name}}</label>\n\n                        <input *ngIf=\"componentead.tipocomponentfield.tipo=='Texto'\" type=\"text\" required\n                          id=\"ctrl_{{componentead.id}}\" class=\"form-control\"\n                          placeholder=\" Escriba el {{componentead.tipocomponentfield.name}}\"\n                          [(ngModel)]=\"componentead.value\" name=\"ctrlad_{{componentead.id}}\">\n                        <div *ngIf=\"componentead.tipocomponentfield.tipo=='Texto'\"\n                          hidden=\"ctrlad_{{componentead.id}}.valid || ctrlad_{{componentead.id}}.valid\"\n                          class=\"alert alert-danger\">{{componentead.tipocomponentfield.name}} es requerido</div>\n\n                        <input *ngIf=\"componentead.tipocomponentfield.tipo=='Date'\" type=\"date\" required\n                          id=\"ctrl_{{componentead.id}}\" class=\"form-control\"\n                          placeholder=\" Escriba el {{componentead.tipocomponentfield.name}}\"\n                          [(ngModel)]=\"componentead.value\" name=\"ctrlad_{{componentead.id}}\">\n                        <div *ngIf=\"componentead.tipocomponentfield.tipo=='Date'\"\n                          hidden=\"ctrlad_{{componentead.id}}.valid || ctrlad_{{componentead.id}}.valid\"\n                          class=\"alert alert-danger\">{{componentead.tipocomponentfield.name}} es requerido</div>\n                        <input *ngIf=\"componentead.tipocomponentfield.tipo=='Numerico'\" type=\"number\" required\n                          id=\"ctrl_{{componentead.id}}\" class=\"form-control \"\n                          placeholder=\" Escriba el {{componentead.name}}\" [(ngModel)]=\"componentead.value\"\n                          name=\"ctrlad_{{componentead.id}}\">\n                        <div *ngIf=\"componentead.tipocomponentfield.tipo=='Numerico'\"\n                          hidden=\"ctrlad_{{componentead.id}}.valid || ctrlad_{{componentead.id}}.valid\"\n                          class=\"alert alert-danger\">{{componentead.tipocomponentfield.name}} es requerido</div>\n\n                        <textarea *ngIf=\"componentead.tipocomponentfield.tipo=='Multilinea'\" required\n                          id=\"ctrl_{{componentead.id}}\" class=\"form-control \"\n                          placeholder=\" Escriba el {{componentead.name}}\" [(ngModel)]=\"componentead.value\"\n                          name=\"ctrlad_{{componentead.id}}\"></textarea>\n                        <div *ngIf=\"componentead.tipocomponentfield.tipo=='Multilinea'\"\n                          hidden=\"ctrlad_{{componentead.id}}.valid || ctrlad_{{componentead.id}}.valid\"\n                          class=\"alert alert-danger\">{{componentead.tipocomponentfield.name}} es requerido</div>\n\n                        <select *ngIf=\"componentead.tipocomponentfield.tipo=='Lista'\" required\n                          class=\"form-control custom-select\" [(ngModel)]=\"componentead.value\"\n                          name=\"ctrlad_{{componentead.id}}\">\n                          <option [value]=\"-1\">Seleccione</option>\n                          <option *ngFor=\"let o of componentead.value.split(',')\" [value]=\"o\">\n                            {{ o }}\n                          </option>\n                        </select>\n                        <div *ngIf=\"componentead.tipocomponentfield.tipo=='Lista'\"\n                          hidden=\"ctrlad_{{componentead.id}}.valid || ctrlad_{{componentead.id}}.valid\"\n                          class=\"alert alert-danger\">{{componentead.tipocomponentfield.name}} es requerido</div>\n\n                        <select *ngIf=\"componentead.tipocomponentfield.tipo=='MultiLista'\" required multiple\n                          class=\"form-control custom-select\" [(ngModel)]=\"componentead.value\"\n                          name=\"ctrlad_{{componentead.id}}\">\n                          <option [value]=\"-1\">Seleccione</option>\n                          <option *ngFor=\"let o of componentead.tipocomponentfield.value.split(',')\" [value]=\"o\">\n                            {{ o }}\n                          </option>\n                        </select>\n                        <div *ngIf=\"componentead.tipocomponentfield.tipo=='MultiLista'\"\n                          hidden=\"ctrlad_{{componentead.id}}.valid || ctrlad_{{componentead.id}}.valid\"\n                          class=\"alert alert-danger\">{{componentead.tipocomponentfield.name}} es requerido</div>\n                        <div *ngIf=\"componentead.tipocomponentfield.tipo=='Checkbox'\" required class=\"col-sm-10\">\n                          {{componentead.tipocomponentfield.name}}</div>\n                        <div class=\"col-sm-2\">\n                          <div class=\"form-check\">\n                            <input *ngIf=\"componentead.tipocomponentfield.tipo=='Checkbox'\" type=\"checkbox\" required\n                              id=\"ctrlad_{{componentead.id}}\" class=\"form-check-input \"\n                              placeholder=\" Escriba el {{componentead.tipocomponentfield.name}}\"\n                              [(ngModel)]=\"componentead.value\" name=\"ctrlad_{{componentead.id}}\">\n                            <div *ngIf=\"componentead.tipocomponentfield.tipo=='Checkbox'\"\n                              hidden=\"ctrlad_{{componentead.id}}.valid || ctrlad_{{componentead.id}}.valid\"\n                              class=\"alert alert-danger\">{{componentead.tipocomponentfield.name}} es requerido</div>\n\n                          </div>\n                        </div>\n                        <small *ngIf=\"componentead.tipocomponentfield.tipo!='Checkbox'\" class=\"form-control-feedback\">\n                          Escriba el\n                          {{componentead.tipocomponentfield.name}} </small>\n\n                      </div>\n\n                    </div>\n                  </div>\n                  <div class=\"form-group row \" *ngIf=\"!_row.id\">\n                    <div *ngFor=\"let componentead of _row.componentfields\"\n                      class=\"{{componentead.tipo!='Multilinea'?'col-md-6':'col-md-12'}}\">\n\n                      <div class=\"{{componentead.tipo!='Checkbox'?'form-group':'form-group row'}}\">\n                        <label *ngIf=\"componentead.tipo!='Checkbox'\" class=\"control-label\"\n                          for=\"ctrlad_{{componentead.id}}\">\n                          {{componentead.name}}</label>\n\n                        <input *ngIf=\"componentead.tipo=='Texto'\" type=\"text\" required id=\"ctrl_{{componentead.id}}\"\n                          class=\"form-control\" placeholder=\" Escriba el {{componentead.name}}\"\n                          [(ngModel)]=\"componentead.result\" name=\"ctrlad_{{componentead.id}}\">\n                        <div *ngIf=\"componentead.tipo=='Texto'\"\n                          hidden=\"ctrlad_{{componentead.id}}.valid || ctrlad_{{componentead.id}}.valid\"\n                          class=\"alert alert-danger\">{{componentead.name}} es requerido</div>\n\n                        <input *ngIf=\"componentead.tipo=='Date'\" type=\"date\" required id=\"ctrl_{{componentead.id}}\"\n                          class=\"form-control\" placeholder=\" Escriba el {{componentead.name}}\"\n                          [(ngModel)]=\"componentead.result\" name=\"ctrlad_{{componentead.id}}\">\n                        <div *ngIf=\"componentead.tipo=='Date'\"\n                          hidden=\"ctrlad_{{componentead.id}}.valid || ctrlad_{{componentead.id}}.valid\"\n                          class=\"alert alert-danger\">{{componentead.name}} es requerido</div>\n\n                        <input *ngIf=\"componentead.tipo=='Numerico'\" type=\"number\" required\n                          id=\"ctrl_{{componentead.id}}\" class=\"form-control \"\n                          placeholder=\" Escriba el {{componentead.name}}\" [(ngModel)]=\"componentead.result\"\n                          name=\"ctrlad_{{componentead.id}}\">\n                        <div *ngIf=\"componentead.tipo=='Numerico'\"\n                          hidden=\"ctrlad_{{componentead.id}}.valid || ctrlad_{{componentead.id}}.valid\"\n                          class=\"alert alert-danger\">{{componentead.name}} es requerido</div>\n\n                        <textarea *ngIf=\"componentead.tipo=='Multilinea'\" required id=\"ctrl_{{componentead.id}}\"\n                          class=\"form-control \" placeholder=\" Escriba el {{componentead.name}}\"\n                          [(ngModel)]=\"componentead.result\" name=\"ctrlad_{{componentead.id}}\"></textarea>\n                        <div *ngIf=\"componentead.tipo=='Multilinea'\"\n                          hidden=\"ctrlad_{{componentead.id}}.valid || ctrlad_{{componentead.id}}.valid\"\n                          class=\"alert alert-danger\">{{componentead.name}} es requerido</div>\n\n                        <select *ngIf=\"componentead.tipo=='Lista'\" required class=\"form-control custom-select\"\n                          [(ngModel)]=\"componentead.result\" name=\"ctrlad_{{componentead.id}}\">\n                          <option [value]=\"-1\">Seleccione</option>\n                          <option *ngFor=\"let o of componentead.value.split(',')\" [value]=\"o\">\n                            {{ o }}\n                          </option>\n                        </select>\n                        <div *ngIf=\"componentead.tipo=='Lista'\"\n                          hidden=\"ctrlad_{{componentead.id}}.valid || ctrlad_{{componentead.id}}.valid\"\n                          class=\"alert alert-danger\">{{componentead.name}} es requerido</div>\n\n                        <select *ngIf=\"componentead.tipo=='MultiLista'\" required multiple\n                          class=\"form-control custom-select\" [(ngModel)]=\"componentead.result\"\n                          name=\"ctrlad_{{componentead.id}}\">\n                          <option [value]=\"-1\">Seleccione</option>\n                          <option *ngFor=\"let o of componentead.value.split(',')\" [value]=\"o\">\n                            {{ o }}\n                          </option>\n                        </select>\n                        <div *ngIf=\"componentead.tipo=='MultiLista'\"\n                          hidden=\"ctrlad_{{componentead.id}}.valid || ctrlad_{{componentead.id}}.valid\"\n                          class=\"alert alert-danger\">{{componentead.name}} es requerido</div>\n                        <div *ngIf=\"componentead.tipo=='Checkbox'\" class=\"col-sm-10\">{{componentead.name}}</div>\n                        <div class=\"col-sm-2\">\n                          <div class=\"form-check\">\n                            <input *ngIf=\"componentead.tipo=='Checkbox'\" required type=\"checkbox\"\n                              id=\"ctrlad_{{componentead.id}}\" class=\"form-check-input \"\n                              placeholder=\" Escriba el {{componentead.name}}\" [(ngModel)]=\"componentead.result\"\n                              name=\"ctrlad_{{componentead.id}}\">\n                            <div *ngIf=\"componentead.tipo=='Checkbox'\"\n                              hidden=\"ctrlad_{{componentead.id}}.valid || ctrlad_{{componentead.id}}.valid\"\n                              class=\"alert alert-danger\">{{componentead.name}} es requerido</div>\n\n                          </div>\n                        </div>\n\n\n                        <small *ngIf=\"componentead.tipo!='Checkbox'\" required class=\"form-control-feedback\">\n                          Escriba el\n                          {{componentead.name}} </small>\n                      </div>\n\n                    </div>\n                  </div>\n                </div>\n              </ng-container>\n\n            </div>\n            <div class=\"row p-t-20\">\n              <table id=\"example23\" class=\"display nowrap table table-hover m-t-30  table-striped table-bordered\"\n                cellspacing=\"0\" width=\"100%\">\n                <tr>\n                  <td colspan=\"3\"> <select class=\"form-control custom-select\" [(ngModel)]=\"complementopk\"\n                      name=\"tipocomponente\">\n                      <option [value]=\"-1\">Seleccione</option>\n                      <option *ngFor=\"let o of composelect.tipocomponente.componentesadicional\"\n                        [value]=\"o.tipocomponente.id.toString()\">\n                        {{ o.tipocomponente.name }}\n                      </option>\n                    </select></td>\n\n\n                  <td><button type=\"button\" class=\"btn btn-info\" (click)='selectcomplement()'><i\n                        class=\"fa fa-plus\"></i></button></td>\n\n                </tr>\n              </table>\n            </div>\n          </div>\n\n          <div class=\"form-actions\">\n            <button type=\"button\" class=\"btn btn-success\" [disabled]=\"!componentsForm.valid\" (click)=\"closeSwal()\"> <i\n                class=\"fa fa-check\"></i>\n              Guardar</button>\n\n            <button type=\"button\" class=\"btn btn-inverse\" (click)=\"cancelSwal()\">\n              Cancelar</button>\n          </div>\n        </form>\n      </div>\n\n    </swal>\n\n    <!-- crear component -->\n    <swal #createSwal title=\"Editar componente\" [backdrop]=\"true\" [allowOutsideClick]=\"false\" [showCancelButton]=\"true\"\n      [cancelButtonText]=\"'Cancelar'\" [confirmButtonText]=\"'Agregar'\" (confirm)=\"agregarcomponente()\"\n      customClass=\"swal-wide\" showCloseButton=\"true\">\n      <div *swalPartial>\n\n        <h3 class=\"box-title\">{{composelect.tipocomponente.name}}</h3>\n        <hr class=\"m-t-0 m-b-40\">\n\n        <div class=\"row p-t-20\" *ngIf=\"composelect.tipocomponente\">\n          <div class=\"{{componenteadd.tipo!='Multilinea'?'col-md-6':'col-md-12'}}\"\n            *ngFor=\"let componenteadd of composelect.tipocomponente.componentesfields\">\n            <div class=\"{{componenteadd.tipo!='Checkbox'?'form-group':'form-group row'}}\">\n              <label *ngIf=\"componenteadd.tipo!='Checkbox'\" class=\"control-label\" for=\"ctrladd_{{componenteadd.id}}\">\n                {{componenteadd.name}}</label>\n\n              <input *ngIf=\"componenteadd.tipo=='Texto'\" type=\"text\" id=\"ctrl_{{componenteadd.id}}\" class=\"form-control\"\n                placeholder=\" Escriba el {{componenteadd.name}}\" [(ngModel)]=\"componenteadd.result\"\n                name=\"ctrladd_{{componenteadd.id}}\">\n\n              <input *ngIf=\"componenteadd.tipo=='Date'\" type=\"date\" id=\"ctrl_{{componenteadd.id}}\" class=\"form-control\"\n                placeholder=\" Escriba el {{componenteadd.name}}\" [(ngModel)]=\"componenteadd.result\"\n                name=\"ctrladd_{{componenteadd.id}}\">\n\n              <input *ngIf=\"componenteadd.tipo=='Numerico'\" type=\"number\" id=\"ctrl_{{componenteadd.id}}\"\n                class=\"form-control \" placeholder=\" Escriba el {{componenteadd.name}}\"\n                [(ngModel)]=\"componenteadd.result\" name=\"ctrladd_{{componenteadd.id}}\">\n\n              <textarea *ngIf=\"componenteadd.tipo=='Multilinea'\" id=\"ctrl_{{componenteadd.id}}\" class=\"form-control \"\n                placeholder=\" Escriba el {{componenteadd.name}}\" [(ngModel)]=\"componenteadd.result\"\n                name=\"ctrladd_{{componenteadd.id}}\"></textarea>\n\n              <select *ngIf=\"componenteadd.tipo=='Lista'\" class=\"form-control custom-select\"\n                [(ngModel)]=\"componenteadd.result\" name=\"ctrladd_{{componenteadd.id}}\">\n                <option [value]=\"-1\">Seleccione</option>\n                <option *ngFor=\"let o of componenteadd.value.split(',')\" [value]=\"o\">\n                  {{ o }}\n                </option>\n              </select>\n\n              <select *ngIf=\"componenteadd.tipo=='MultiLista'\" multiple class=\"form-control custom-select\"\n                [(ngModel)]=\"componenteadd.result\" name=\"ddl_{{componenteadd.id}}\">\n                <option [value]=\"-1\">Seleccione</option>\n                <option *ngFor=\"let o of componenteadd.value.split(',')\" [value]=\"o\">\n                  {{ o }}\n                </option>\n              </select>\n              <div *ngIf=\"componenteadd.tipo=='Checkbox'\" class=\"col-sm-10\">{{componenteadd.name}}</div>\n              <div class=\"col-sm-2\">\n                <div class=\"form-check\">\n                  <input *ngIf=\"componenteadd.tipo=='Checkbox'\" type=\"checkbox\" id=\"chk_{{componenteadd.id}}\"\n                    class=\"form-check-input \" placeholder=\" Escriba el {{componenteadd.name}}\"\n                    [(ngModel)]=\"componenteadd.result\" name=\"chk_{{componenteadd.id}}\">\n\n                </div>\n              </div>\n\n\n              <small *ngIf=\"componenteadd.tipo!='Checkbox'\" class=\"form-control-feedback\"> Escriba el\n                {{componenteadd.name}} </small>\n            </div>\n          </div>\n\n\n        </div>\n        <div *ngIf=\"composelect.tipocomponente.componentesadicional.length>0\">\n          <h3 class=\"box-title\">Complementos</h3>\n          <hr class=\"m-t-0 m-b-40\">\n          <div class=\"row p-t-20\">\n            <table id=\"example23\" class=\"display nowrap table table-hover m-t-30  table-striped table-bordered\"\n              cellspacing=\"0\" width=\"100%\">\n              <tr>\n                <td colspan=\"3\"> <select class=\"form-control custom-select\" [(ngModel)]=\"complementopk\"\n                    name=\"tipocomponente\">\n                    <option [value]=\"-1\">Seleccione</option>\n                    <option *ngFor=\"let o of composelect.tipocomponente.componentesadicional\"\n                      [value]=\"o.tipocomponente.id.toString()\">\n                      {{ o.tipocomponente.name }}\n                    </option>\n                  </select></td>\n\n\n                <td><button type=\"button\" class=\"btn btn-info\" (click)='selectcomplement()'><i\n                      class=\"fa fa-plus\"></i></button></td>\n\n              </tr>\n            </table>\n          </div>\n          <ng-container *ngFor=\"let _row of composelect.componentes\">\n            <h4 class=\"font-weight-bold\">{{_row.tipocomponente.name}}</h4>\n            <div class=\"row p-t-20\" *ngIf=\"_row\">\n              <div class=\"{{componente.tipo!='Multilinea'?'col-md-6':'col-md-12'}}\"\n                *ngFor=\"let componente of _row.componentfields\">\n                <div class=\"{{componente.tipo!='Checkbox'?'form-group':'form-group row'}}\">\n                  <label *ngIf=\"componente.tipo!='Checkbox'\" class=\"control-label\"\n                    for=\"ctrl_{{componente.id}}\">{{componente.name}}</label>\n\n                  <input *ngIf=\"componente.tipo=='Texto'\" type=\"text\" id=\"ctrl_{{componente.id}}\" class=\"form-control\"\n                    placeholder=\" Escriba el {{componente.name}}\" [(ngModel)]=\"componente.result\"\n                    name=\"ctrlad_{{componente.id}}\">\n\n                  <input *ngIf=\"componente.tipo=='Date'\" type=\"date\" id=\"ctrl_{{componente.id}}\" class=\"form-control\"\n                    placeholder=\" Escriba el {{componente.name}}\" [(ngModel)]=\"componente.result\"\n                    name=\"ctrlad_{{componente.id}}\">\n\n                  <input *ngIf=\"componente.tipo=='Numerico'\" type=\"number\" id=\"ctrl_{{componente.id}}\"\n                    class=\"form-control \" placeholder=\" Escriba el {{componente.name}}\" [(ngModel)]=\"componente.result\"\n                    name=\"ctrlad_{{componente.id}}\">\n\n                  <textarea *ngIf=\"componente.tipo=='Multilinea'\" id=\"ctrl_{{componente.id}}\" class=\"form-control \"\n                    placeholder=\" Escriba el {{componente.name}}\" [(ngModel)]=\"componente.result\"\n                    name=\"ctrlad_{{componente.id}}\"></textarea>\n\n                  <select *ngIf=\"componente.tipo=='Lista'\" class=\"form-control custom-select\"\n                    [(ngModel)]=\"componente.result\" name=\"ddl_{{componente.id}}\">\n                    <option [value]=\"-1\">Seleccione</option>\n                    <option *ngFor=\"let o of componente.value.split(',')\" [value]=\"o\">\n                      {{ o }}\n                    </option>\n                  </select>\n\n                  <select *ngIf=\"componente.tipo=='MultiLista'\" multiple class=\"form-control custom-select\"\n                    [(ngModel)]=\"componente.result\" name=\"ctrlad_{{componente.id}}\">\n                    <option [value]=\"-1\">Seleccione</option>\n                    <option *ngFor=\"let o of componente.value.split(',')\" [value]=\"o\">\n                      {{ o }}\n                    </option>\n                  </select>\n                  <div *ngIf=\"componente.tipo=='Checkbox'\" class=\"col-sm-10\">{{componente.name}}</div>\n                  <div class=\"col-sm-2\">\n                    <div class=\"form-check\">\n                      <input *ngIf=\"componente.tipo=='Checkbox'\" type=\"checkbox\" id=\"ctrlad_{{componente.id}}\"\n                        class=\"form-check-input \" placeholder=\" Escriba el {{componente.name}}\"\n                        [(ngModel)]=\"componente.result\" name=\"ctrlad_{{componente.id}}\">\n\n                    </div>\n                  </div>\n\n\n                  <small *ngIf=\"componente.tipo!='Checkbox'\" class=\"form-control-feedback\"> Escriba el\n                    {{componente.name}} </small>\n                </div>\n              </div>\n\n\n            </div>\n          </ng-container>\n\n\n\n        </div>\n\n\n      </div>\n\n    </swal>\n    <!-- modal cojntrato -->\n    <swal #contratoSwal title=\"Agregar Contrato componente\" [backdrop]=\"true\" [allowOutsideClick]=\"false\"\n      [showCancelButton]=\"false\" [showConfirmButton]=\"false\" [cancelButtonText]=\"'Cancelar'\"\n      [confirmButtonText]=\"'Agregar'\" (confirm)=\"agregarcomponente()\" customClass=\"swal-wide\" [showCloseButton]=\"true\"\n      [focusCancel]=\"false\">\n      <div *swalPartial>\n\n        <!-- <h3 class=\"box-title\">{{composelect.tipocomponente.name}}</h3>\n      <hr class=\"m-t-0 m-b-40\"> -->\n\n        <app-contrato-add [_estacionservicio]=\"item\" [componente]=\"composelect\"\n          (oneventmodal)=\"closemodalcontrato($event)\"></app-contrato-add>\n      </div>\n\n    </swal>\n    <!-- Row -->\n    <!-- ============================================================== -->\n    <!-- End PAge Content -->\n    <!-- ============================================================== -->\n    <!-- ============================================================== -->\n"

/***/ }),

/***/ "./src/app/estacionservicio/estacionservicio-edit/estacionservicio-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstacionservicioEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__estacionservicio_service__ = __webpack_require__("./src/app/estacionservicio/estacionservicio.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__ = __webpack_require__("./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__viewmodel_estacionservicio__ = __webpack_require__("./src/app/viewmodel/estacionservicio.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__zonaTecnica_zona_tecnica_service__ = __webpack_require__("./src/app/zonaTecnica/zona-tecnica.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tipocomponente_tipocompoenente_service__ = __webpack_require__("./src/app/tipocomponente/tipocompoenente.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__clientes_cliente_service__ = __webpack_require__("./src/app/clientes/cliente.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__viewmodel_Componente__ = __webpack_require__("./src/app/viewmodel/Componente.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__toverux_ngx_sweetalert2__ = __webpack_require__("./node_modules/@toverux/ngx-sweetalert2/esm5/toverux-ngx-sweetalert2.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__google_apis_maps_service__ = __webpack_require__("./src/app/google-apis/maps.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_can_deactivate_guard_can_deactivate_guard_service__ = __webpack_require__("./src/app/shared/can-deactivate-guard/can-deactivate-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_file_upload__ = __webpack_require__("./node_modules/ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__archivoupload_archivoupload_service__ = __webpack_require__("./src/app/archivoupload/archivoupload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



















var EstacionservicioEditComponent = /** @class */ (function () {
    function EstacionservicioEditComponent(spinnerService, estacionservicioService, router, route, notificationService, localDataService, zonaTecnicaService, tipocompoenenteService, clienteService, mapsService, candeactivateguard, archivouploadService) {
        var _this = this;
        this.spinnerService = spinnerService;
        this.estacionservicioService = estacionservicioService;
        this.router = router;
        this.route = route;
        this.notificationService = notificationService;
        this.localDataService = localDataService;
        this.zonaTecnicaService = zonaTecnicaService;
        this.tipocompoenenteService = tipocompoenenteService;
        this.clienteService = clienteService;
        this.mapsService = mapsService;
        this.candeactivateguard = candeactivateguard;
        this.archivouploadService = archivouploadService;
        this.lat = 40.50017;
        this.long = -3.89239;
        this.markers = [];
        this.uploader = new __WEBPACK_IMPORTED_MODULE_14_ng2_file_upload__["FileUploader"]({
            url: __WEBPACK_IMPORTED_MODULE_15__environments_environment__["a" /* environment */].apiUrl + 'api/archivoincidencia',
            authTokenHeader: "Authorization",
            authToken: "Bearer " + localStorage.getItem('access_token'),
            isHTML5: true,
            autoUpload: true,
            maxFileSize: 5 * 1024 * 1024,
        });
        this.hasBaseDropZoneOver = false;
        this.hasAnotherDropZoneOver = false;
        this.validators = [this.ValidateEmail];
        this.errorMessages = {
            'ValidateEmail': 'solo se admite email'
        };
        this.candeactivateguard.setedit(true);
        this.dataSource = __WEBPACK_IMPORTED_MODULE_10_rxjs__["Observable"].create(function (observer) {
            // Runs on every search
            _this.clienteService.gettoken(_this.item.razon_social).subscribe(function (value) {
                observer.next(value.data);
            });
        });
        this.uploader.onAfterAddingFile = function (file) {
            _this.uploader.options.additionalParameter = { estacion_id: 0, tipofotosiniestro: 0, tipo: 3 };
            file.withCredentials = false;
        };
        this.uploader.onErrorItem = function (item, response, status, headers) { return _this.onErrorItem(item, response, status, headers); };
        this.uploader.onSuccessItem = function (item, response, status, headers) { return _this.onSuccessItem(item, response, status, headers); };
        this.uploader.onWhenAddingFileFailed = function (fileItem) {
            _this.notificationService.onError('La imagen no se pudo cargar, '
                + 'el tamaño maximo es de 5MB y el formato es png o jpg, INtentelo nuevamente');
        };
        this.apiurl = __WEBPACK_IMPORTED_MODULE_15__environments_environment__["a" /* environment */].apiUrl;
    }
    EstacionservicioEditComponent.prototype.ValidateEmail = function (control) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(control.value)) {
            return null;
        }
        return {
            'ValidateEmail': true
        };
    };
    EstacionservicioEditComponent.prototype.getById = function () {
        var _this = this;
        this.spinnerService.show();
        var $id = this.route.snapshot.paramMap.get('id');
        this.estacionservicioService.getById($id)
            .subscribe(function (response) {
            _this.item = response.data;
            _this.urlestacion = 'estacionservicio';
            _this.urlestacion += _this.item.esobra != undefined && _this.item.esobra == true ? '?obra=1' : '';
            _this.objparameter = _this.item.esobra != undefined && _this.item.esobra == true ? { obra: 1 } : null;
            if (_this.item.email != undefined) {
                _this.item.emails = _this.item.email.split(',');
            }
            var myLatlng = new google.maps.LatLng(_this.item.lat, _this.item.lng);
            _this.addclickmarker(myLatlng);
            _this.spinnerService.hide();
        });
    };
    EstacionservicioEditComponent.prototype.changeTypeaheadLoading = function (e) {
        this.typeaheadLoading = e;
    };
    EstacionservicioEditComponent.prototype.typeaheadOnSelect = function (e) {
        this.item.codigo_cliente = e.item.codigo_cliente;
        this.item.email = e.item.EMAIL;
    };
    EstacionservicioEditComponent.prototype.ngOnInit = function () {
        this.spinnerService.show();
        this.newsubcompo = new __WEBPACK_IMPORTED_MODULE_9__viewmodel_Componente__["a" /* Componente */]();
        this.newcompo = new __WEBPACK_IMPORTED_MODULE_9__viewmodel_Componente__["a" /* Componente */]();
        this.newcompo.fk_tipocomponente = -1;
        this.newcompo.componentes = [];
        this.cargarZonas();
        this.cargartiposcomponente();
        this.item = new __WEBPACK_IMPORTED_MODULE_5__viewmodel_estacionservicio__["a" /* estacionservicio */]();
        this.item.fk_zonatecnica = "-1";
        this.item.razon_social = "";
        this.item.archivos = [];
        this.item.componentes = [];
        this.initmap();
        this.spinnerService.show();
        this.getById();
        console.log(this.item, "item on load");
    };
    EstacionservicioEditComponent.prototype.cargarZonas = function () {
        var _this = this;
        this.zonaTecnicaService.get(1).subscribe(function (value) {
            _this.zonas = value.data;
        });
    };
    EstacionservicioEditComponent.prototype.cargartiposcomponente = function () {
        var _this = this;
        this.tipocompoenenteService.get(0).subscribe(function (value) {
            _this.tiposcomponente = value.data;
            _this.spinnerService.hide();
        });
    };
    EstacionservicioEditComponent.prototype.addNewComponente = function () {
        this.item.componentes.push(this.newcompo);
        this.newcompo = new __WEBPACK_IMPORTED_MODULE_9__viewmodel_Componente__["a" /* Componente */]();
        this.newcompo.fk_tipocomponente = -1;
        this.newcompo.componentes = [];
        this.newsubcompo = new __WEBPACK_IMPORTED_MODULE_9__viewmodel_Componente__["a" /* Componente */]();
    };
    EstacionservicioEditComponent.prototype.addNewsubComponente = function (row) {
        row.componentes.push(this.newsubcompo);
        this.newsubcompo = new __WEBPACK_IMPORTED_MODULE_9__viewmodel_Componente__["a" /* Componente */]();
    };
    EstacionservicioEditComponent.prototype.add = function () {
        var _this = this;
        this.spinnerService.show();
        this.candeactivateguard.setedit(false);
        this.item.fk_empresa = this.localDataService.getLocalData('empresaSeleccionada').id;
        this.item.user_id = this.localDataService.getLocalData('userInfo').id;
        if (this.item.emails != undefined) {
            var emails = this.item.emails.map(function (email) {
                if (email.value != undefined) {
                    return email.value;
                }
                else {
                    return email;
                }
            });
            this.item.email = emails.join();
        }
        this.estacionservicioService.update(this.item)
            .subscribe(function (value) {
            _this.spinnerService.hide();
            _this.notificationService.onSuccess('Estación de Servicio Actualizada.');
            _this.router.navigateByUrl(_this.urlestacion);
        }, function (err) {
            _this.spinnerService.hide();
            if (err.status_code == 422) {
                _this.notificationService.onError("Estacion de Servicio ya existe");
            }
            else {
                _this.notificationService.onError("Se ha producido un error.");
            }
        });
    };
    EstacionservicioEditComponent.prototype.deletecomponent = function (componente) {
        var index = this.item.componentes.indexOf(componente);
        this.item.componentes.splice(index, 1);
    };
    EstacionservicioEditComponent.prototype.dactivarcomponent = function (componente) {
        componente.estado = true;
    };
    EstacionservicioEditComponent.prototype.deleteSubcomponent = function (componente, subcomponente) {
        var parentComponent = componente.fk_fathercom;
        var componentId = componente.id;
        var selectedComponentId = this.composelect.id;
        /*  this.item.componentes.componentes[id] */
        console.log("componente:", componente, "subcomponente", subcomponente);
        //componente.splice(index, 1);
        console.log("prev data", this.item);
        /* let indexSubComponente = this.item.componentes.indexOf(componente);
        let index = componente.componentes.indexOf(subcomponente);
        console.log("componente:", componente, "subcomponente", subcomponente, "index:", index)
        componente.componentes.splice(index, 1); */
        //this.estacionservicioService.deleteComponent(componentId)
        this.item = this.deleteItemFromComponents(selectedComponentId, subcomponente, this.item);
        console.log(this.item, "updated item");
    };
    EstacionservicioEditComponent.prototype.deleteItemFromComponents = function (parentId, componentPosition, obj) {
        // Find the parent component object with the given id
        var parentComponent = obj.componentes.find(function (c) { return c.id === parentId; });
        // If parent component exists, delete the item at the given index
        if (parentComponent) {
            parentComponent.componentes.splice(componentPosition, 1);
            console.log(parentComponent, "updated object");
        }
        // Return the updated object
        return obj;
        // If the component doesn't exist, return the original data
        /*  if (componentIndex === -1) {
           return data;
         } */
        // Find the index of the item with the matching id within the component's item array
        /*  const itemIndex = data.componentes[componentIndex].componentes.findIndex(
           (item) => item.id === itemId
         ); */
        // If the item doesn't exist, return the original data
        /* if (itemIndex === -1) {
          return data;
        } */
        // Remove the item from the component's item array using the splice method
        //data.componentes[componentIndex].componentes.splice(itemIndex, 1);
        /* Pruebas de borrado de componenes */
        /*  data.componentes[componentIndex].componentes[itemIndex].tipocomponente.componentesfields.forEach((element, index) => {
    
           if (index == 0) {
             let newComponentField = {
               "id": element.id,
               "value": "C",
               "fk_tipocomponentefield": element.id,
               "fk_componente": element.fk_fathercom,
               "created_at": "2019-02-04 14:40:08",
               "updated_at": "2019-02-04 14:40:08",
               "orden": null,
               "tipocomponentfield": {
                 "id": element.id,
                 "tipo": "Lista",
                 "name": "MODELO",
                 "value": "A,B,C,D",
                 "fk_tipocomponente": 31,
                 "created_at": "2018-12-13 15:06:38",
                 "updated_at": "2019-01-23 16:46:01",
                 "orden": 0
               }
             }
             data.componentes[componentIndex].componentes[itemIndex].componentfields.push(newComponentField)
           }
    
           if (index == 1) {
             let newComponentield2 = {
               "id":  element.id,
               "value": "123456",
               "fk_tipocomponentefield": 48,
               "fk_componente": element.fk_fathercom,
               "created_at": "2019-02-04 14:40:08",
               "updated_at": "2019-02-04 14:40:08",
               "orden": null,
               "tipocomponentfield": {
                 "id": element.id,
                 "tipo": "Texto",
                 "name": "NUMERO DE SERIE",
                 "value": null,
                 "fk_tipocomponente": 31,
                 "created_at": "2018-12-13 15:06:38",
                 "updated_at": "2019-01-23 16:46:01",
                 "orden": 1
               }
             }
             data.componentes[componentIndex].componentes[itemIndex].componentfields.push(newComponentield2)
           }
    
           if (index == 2) {
             let newComponentField3 = {
               "id": element.id,
               "value": "2013-10-10",
               "fk_tipocomponentefield": element.id,
               "fk_componente": element.fk_fathercom,
               "created_at": "2019-02-04 14:40:08",
               "updated_at": "2019-02-04 14:40:08",
               "orden": null,
               "tipocomponentfield": {
                 "id": element.id,
                 "tipo": "Date",
                 "name": "AÑO DE FABRICACION",
                 "value": null,
                 "fk_tipocomponente": 31,
                 "created_at": "2018-12-13 15:06:38",
                 "updated_at": "2019-02-04 14:08:46",
                 "orden": 2
               }
             }
             data.componentes[componentIndex].componentes[itemIndex].componentfields.push(newComponentField3)
           }
         }); */
        /*  data.componentes[componentIndex].componentes[itemIndex].tipocomponente.componentesfields[0].value = "C"
         data.componentes[componentIndex].componentes[itemIndex].tipocomponente.componentesfields[1].value = "123456"
         data.componentes[componentIndex].componentes[itemIndex].tipocomponente.componentesfields[2].value = "2023-03-06" */
        //data.componentes[componentIndex].tipocomponente.componentesadicional[1].tipocomponente.componentesfields[0].value = "A"
        //data.componentes[componentIndex].tipocomponente.componentesadicional[1].tipocomponente.componentesfields[1].value = "123456"
        //data.componentes[componentIndex].tipocomponente.componentesadicional[1].tipocomponente.componentesfields[2].value = "2013-10-10"
        //data.componentes[componentIndex].componentes[itemIndex].estado = 0;
        // console.log(data, "updated object")
        // Return the updated data
        //return data;
    };
    EstacionservicioEditComponent.prototype.selectComponent = function (item) {
        var _this = this;
        if (item) {
            console.log(item, "item selected");
            this.composelect = item;
            this.editSwal.show();
        }
        else {
            if (this.newcompo.fk_tipocomponente != -1) {
                this.spinnerService.show();
                this.tipocompoenenteService.getById(this.newcompo.fk_tipocomponente)
                    .subscribe(function (response) {
                    _this.composelect = new __WEBPACK_IMPORTED_MODULE_9__viewmodel_Componente__["a" /* Componente */]();
                    _this.composelect.tipocomponente = response.data;
                    _this.composelect.fk_tipocomponente = response.data.id;
                    _this.composelect.componentfields = response.data.componentesfields;
                    _this.composelect.componentes = [];
                    for (var i = 0; i < _this.composelect.tipocomponente.componentesfields.length; i++) {
                        if (_this.composelect.tipocomponente.componentesfields[i].tipo == 'Lista') {
                            _this.composelect.tipocomponente.componentesfields[i].result = '-1';
                        }
                        else {
                            _this.composelect.tipocomponente.componentesfields[i].result = '';
                        }
                    }
                    _this.createSwal.show();
                    console.log(_this.composelect, "select component");
                    _this.spinnerService.hide();
                });
            }
        }
        return false;
    };
    EstacionservicioEditComponent.prototype.selectcomplement = function () {
        var _this = this;
        console.log("prev data select", this.composelect);
        var result = this.composelect.tipocomponente.componentesadicional.filter(function (comp) { return comp.fk_tipocomponenteadicional == _this.complementopk; });
        if (result.length > 0) {
            var _componenteadic = new __WEBPACK_IMPORTED_MODULE_9__viewmodel_Componente__["a" /* Componente */]();
            _componenteadic.tipocomponente = JSON.parse(JSON.stringify(result[0].tipocomponente));
            _componenteadic.fk_tipocomponente = result[0].tipocomponente.id;
            _componenteadic.componentfields = JSON.parse(JSON.stringify(result[0].tipocomponente.componentesfields));
            _componenteadic.newsb = true;
            this.composelect.componentes.push(_componenteadic);
            console.log("after data select", this.composelect, _componenteadic);
        }
        return false;
    };
    EstacionservicioEditComponent.prototype.agregarcomponente = function () {
        this.item.componentes.push(this.composelect);
        this.updateComponent(this.item);
        this.composelect = new __WEBPACK_IMPORTED_MODULE_9__viewmodel_Componente__["a" /* Componente */]();
    };
    EstacionservicioEditComponent.prototype.updateComponent = function (item) {
        var _this = this;
        this.estacionservicioService.updatecomponent(this.item)
            .subscribe(function (value) {
            _this.spinnerService.hide();
            _this.notificationService.onSuccess('Componente  Actualizado.');
            _this.item.componentes = value.data.componentes;
        }, function (err) {
            _this.spinnerService.hide();
            if (err.status_code == 422) {
                _this.notificationService.onError("Estacion de Servicio ya existe");
            }
            else {
                _this.notificationService.onError("Se ha producido un error.");
            }
        });
    };
    EstacionservicioEditComponent.prototype.initmap = function () {
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
    EstacionservicioEditComponent.prototype.addclickmarker = function (myLatlng) {
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
    EstacionservicioEditComponent.prototype.addmarker = function () {
        var _this = this;
        this.setMapOnAll(null);
        this.mapsService.codeAddress(this.item.direccion)
            .subscribe(function (response) {
            if (response.length > 0) {
                _this.item.lat = response[0].geometry.location.lat();
                _this.item.lng = response[0].geometry.location.lng();
                var myLatlng = new google.maps.LatLng(_this.item.lat, _this.item.lng);
                var marker = new google.maps.Marker({
                    position: myLatlng,
                    map: _this.map,
                    animation: google.maps.Animation.DROP,
                    title: 'Hola!',
                    label: _this.item.razon_social
                });
                _this.map.setCenter(marker.getPosition());
                _this.markers.push(marker);
            }
        });
    };
    EstacionservicioEditComponent.prototype.setMapOnAll = function (map) {
        for (var i = 0; i < this.markers.length; i++) {
            this.markers[i].setMap(map);
        }
        this.markers = [];
    };
    EstacionservicioEditComponent.prototype.agregarContrato = function (item) {
        item.select = true;
        this.composelect = item;
        this.contratoSwal.show();
        return false;
    };
    EstacionservicioEditComponent.prototype.closemodalcontrato = function (event) {
        if (event != null) {
            this.composelect.contratos.push(event.componentes[0]);
        }
        this.contratoSwal.nativeSwal.close();
    };
    EstacionservicioEditComponent.prototype.iracontrato = function (idocont) {
        this.candeactivateguard.setedit(false);
        var url = '/contrato/edit/' + idocont;
        this.router.navigate([url], { queryParams: { filter: this.item.id }, queryParamsHandling: 'merge' });
    };
    EstacionservicioEditComponent.prototype.onErrorItem = function (item, response, status, headers) {
        var error = JSON.parse(response); //error server response
        console.log(error);
    };
    EstacionservicioEditComponent.prototype.fileOverBase = function (e) {
        this.uploader.options.additionalParameter = { estacion_id: 0, tipofotosiniestro: 0, tipo: 3 };
        this.hasBaseDropZoneOver = e;
    };
    EstacionservicioEditComponent.prototype.fileOverAnother = function (e) {
        this.uploader.options.additionalParameter = { estacion_id: 0, tipofotosiniestro: 0, tipo: 3 };
        this.hasAnotherDropZoneOver = e;
    };
    EstacionservicioEditComponent.prototype.onSuccessItem = function (item, response, status, headers) {
        if (this.item.archivos == undefined || this.item.archivos == null) {
            this.item.archivos = [];
        }
        this.item.archivos.push($.parseJSON(response).data);
    };
    EstacionservicioEditComponent.prototype.eliminar_imagen = function (imagen) {
        var _this = this;
        this.archivouploadService.delete(imagen.id, 1).subscribe(function (value) {
            var indice = _this.item.archivos.indexOf(imagen);
            _this.item.archivos.splice(indice, 1);
            _this.notificationService.onSuccess('Imagen eliminada con exito.');
        });
    };
    /* Función que previene el submit del form si hay inputs inválidos */
    EstacionservicioEditComponent.prototype.swalValidator = function () {
        if (this.editSwal === undefined) {
            return;
        }
        this.editSwal.inputValidator = function (value) {
            return new Promise(function (resolve) {
                console.log(value);
                if (value) {
                    resolve('');
                }
                else {
                    resolve('The description should be at least 3 characters!');
                }
            });
        };
    };
    EstacionservicioEditComponent.prototype.closeSwal = function () {
        this.editSwal.nativeSwal.close();
    };
    EstacionservicioEditComponent.prototype.cancelSwal = function () {
        if (!this.ngForm.valid) {
            this.item = this.rollbackComponentCreation(this.item, this.composelect.id);
        }
        this.editSwal.nativeSwal.close();
    };
    /* Al agregar un sub componente a un componente y cancelar, borra lo que se agregó */
    EstacionservicioEditComponent.prototype.rollbackComponentCreation = function (obj, parentId) {
        for (var i = 0; i < obj.componentes.length; i++) {
            if (obj.componentes[i].id === parentId) {
                obj.componentes[i].componentes = obj.componentes[i].componentes.filter(function (component) { return !component.newsb; });
                break;
            }
        }
        return obj;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('gmap'),
        __metadata("design:type", Object)
    ], EstacionservicioEditComponent.prototype, "gmapElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('editSwal'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_11__toverux_ngx_sweetalert2__["a" /* SwalComponent */])
    ], EstacionservicioEditComponent.prototype, "editSwal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('createSwal'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_11__toverux_ngx_sweetalert2__["a" /* SwalComponent */])
    ], EstacionservicioEditComponent.prototype, "createSwal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('contratoSwal'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_11__toverux_ngx_sweetalert2__["a" /* SwalComponent */])
    ], EstacionservicioEditComponent.prototype, "contratoSwal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('componentsForm'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_17__angular_forms__["NgForm"])
    ], EstacionservicioEditComponent.prototype, "ngForm", void 0);
    EstacionservicioEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-estacionservicio-edit',
            template: __webpack_require__("./src/app/estacionservicio/estacionservicio-edit/estacionservicio-edit.component.html"),
            styles: [__webpack_require__("./src/app/estacionservicio/estacionservicio-edit/estacionservicio-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__["Ng4LoadingSpinnerService"],
            __WEBPACK_IMPORTED_MODULE_2__estacionservicio_service__["a" /* EstacionservicioService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__shared__["k" /* NotificationService */],
            __WEBPACK_IMPORTED_MODULE_4__shared__["i" /* LocalDataService */],
            __WEBPACK_IMPORTED_MODULE_6__zonaTecnica_zona_tecnica_service__["a" /* ZonaTecnicaService */],
            __WEBPACK_IMPORTED_MODULE_7__tipocomponente_tipocompoenente_service__["a" /* TipocompoenenteService */],
            __WEBPACK_IMPORTED_MODULE_8__clientes_cliente_service__["a" /* ClienteService */],
            __WEBPACK_IMPORTED_MODULE_12__google_apis_maps_service__["a" /* MapsService */],
            __WEBPACK_IMPORTED_MODULE_13__shared_can_deactivate_guard_can_deactivate_guard_service__["a" /* Candeactivateguard */],
            __WEBPACK_IMPORTED_MODULE_16__archivoupload_archivoupload_service__["a" /* ArchivouploadService */]])
    ], EstacionservicioEditComponent);
    return EstacionservicioEditComponent;
}());



/***/ }),

/***/ "./src/app/estacionservicio/estacionservicio-index/estacionservicio-index.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/estacionservicio/estacionservicio-index/estacionservicio-index.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-wrapper\">\n  <!-- ============================================================== -->\n  <!-- Container fluid  -->\n  <!-- ============================================================== -->\n  <div class=\"container-fluid\">\n    <!-- ============================================================== -->\n    <!-- Bread crumb and right sidebar toggle -->\n    <!-- ============================================================== -->\n\n    <!-- ============================================================== -->\n    <!-- End Bread crumb and right sidebar toggle -->\n    <!-- ============================================================== -->\n    <!-- ============================================================== -->\n    <!-- Start Page Content -->\n    <!-- ============================================================== -->\n    <div class=\"row\">\n\n\n\n      <div class=\"col-12\">\n\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <h4 class=\"card-title\">Lista de Estaciones de Servicio</h4>\n            <h6 class=\"card-subtitle\"></h6>\n            <button *ngIf=\"!obra\" type=\"button\" routerLink=\"/estacionservicio/add\"\n              class=\"btn btn-info btn-rounded m-t-10 float-right\" data-toggle=\"modal\" data-target=\"#add-contact\">Agregar\n              Nueva Estacion de Servicio</button>\n            <button *ngIf=\"obra\" type=\"button\" routerLink=\"/estacionservicio/add\" [queryParams]=\"{obra:1}\"\n              class=\"btn btn-info btn-rounded m-t-10 float-right\" data-toggle=\"modal\" data-target=\"#add-contact\">Agregar\n              Nueva Estacion de Servicio</button>\n\n            <div class=\"table-responsive\">\n              <table id=\"example23\" class=\"display nowrap table table-hover m-t-30  table-striped table-bordered\"\n                cellspacing=\"0\" width=\"100%\">\n                <thead>\n                  <tr>\n                    <th>Empresa</th>\n                    <th>Cliente</th>\n                    <th>Zona Tecnica</th>\n                    <th>Nombre Estacion</th>\n                    <th>Direccion</th>\n                    <th>Telefonos</th>\n                    <th *ngIf=\"!obra\">N° Comp</th>\n                    <th *ngIf=\"obra\">Estado Obra</th>\n                    <th>Fecha creación</th>\n                    <th></th>\n                  </tr>\n                </thead>\n                <tfoot>\n                  <tr>\n                    <th>Empresa</th>\n                    <th>Cliente</th>\n                    <th>Zona Tecnica</th>\n                    <th>Nombre Estacion</th>\n                    <th>Direccion</th>\n                    <th>Telefonos</th>\n                    <th *ngIf=\"!obra\">N° Comp</th>\n                    <th *ngIf=\"obra\">Estado Obra</th>\n                    <th>Fecha creación</th>\n                    <th></th>\n                  </tr>\n                </tfoot>\n                <tbody>\n                  <tr *ngFor=\"let row of listaitem\" [ngStyle]=\"{'background-color': row.estado?'':'#edf1f5'}\">\n\n                    <td>{{row.empresa.name}}</td>\n                    <td>{{row.razon_social}}</td>\n                    <td>{{row.zonatecnica.name}}</td>\n                    <td>{{row.name}}</td>\n                    <td>{{row.direccion}}</td>\n                    <td>{{row.telefonos}}</td>\n                    <td class=\"text-center\" *ngIf=\"!obra\">\n                      <button type=\"button\" class=\"btn waves-effect waves-light btn-rounded btn-info\">\n                        {{row.componentes.length}} </button>\n                    </td>\n                    <td *ngIf=\"obra\">{{row.estadoobra}}</td>\n                    <td>{{row.created_at}}</td>\n                    <td>\n                      <a *ngIf=\"row.estado==true\" class=\"preview\" routerLink=\"/estacionservicio/edit/{{row.id}}\"> <i\n                          class=\"icon-note\"></i></a>\n                      <a *ngIf=\"row.estado==true\" class=\"preview\" href=\"#\" [swal]=\"deleteSwal\"> <i\n                          class=\"icon-trash\"></i></a>\n                      <swal #deleteSwal title=\"Eliminar Estacion de servicio\" text=\"Esta acción no se puede modificar.\"\n                        type=\"question\" [showCancelButton]=\"true\" [focusCancel]=\"true\" (confirm)=\"delete(row.id)\">\n                      </swal>\n                      <a *ngIf=\"row.estado==false\" class=\"preview\" href=\"#\" [swal]=\"activateSwal\">\n                        <i *ngIf=\"row.estado==false\" class=\" icon-control-play\"></i>\n                      </a>\n                      <swal #activateSwal title=\"Activar Estacion de servicio\" text=\"Esta acción no se puede modificar.\"\n                        type=\"question\" [showCancelButton]=\"true\" [focusCancel]=\"true\" (confirm)=\"delete(row.id)\">\n                      </swal>\n                    </td>\n                  </tr>\n\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/estacionservicio/estacionservicio-index/estacionservicio-index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstacionservicioIndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng4_loading_spinner__ = __webpack_require__("./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__estacionservicio_service__ = __webpack_require__("./src/app/estacionservicio/estacionservicio.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_datatables_net__ = __webpack_require__("./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_datatables_net___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_datatables_net__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_datatables_net_bs4__ = __webpack_require__("./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_datatables_net_bs4___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_datatables_net_bs4__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_datatables_net_buttons__ = __webpack_require__("./node_modules/datatables.net-buttons/js/dataTables.buttons.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_datatables_net_buttons___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_datatables_net_buttons__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_datatables_net_buttons_bs4__ = __webpack_require__("./node_modules/datatables.net-buttons-bs4/js/buttons.bootstrap4.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_datatables_net_buttons_bs4___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_datatables_net_buttons_bs4__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var EstacionservicioIndexComponent = /** @class */ (function () {
    function EstacionservicioIndexComponent(spinnerService, estacionservicioService, notificationService, route) {
        this.spinnerService = spinnerService;
        this.estacionservicioService = estacionservicioService;
        this.notificationService = notificationService;
        this.route = route;
        this.listaitem = [];
        this.table = null;
        this.urladd = '/estacionservicio/add';
    }
    EstacionservicioIndexComponent.prototype.ngOnInit = function () {
        this.spinnerService.show();
        this.obra = this.route.snapshot.queryParamMap.get('obra');
        if (this.obra != undefined) {
            this.urladd = '/estacionservicio/add?obra=1';
        }
        this.get();
    };
    EstacionservicioIndexComponent.prototype.get = function () {
        var _this = this;
        this.estacionservicioService.getbyobra(1, this.obra)
            .subscribe(function (response) {
            _this.listaitem = response.data;
            _this.reInitDatatable();
            _this.spinnerService.hide();
        });
    };
    EstacionservicioIndexComponent.prototype.loadtable = function () {
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
        $('.buttons-copy, .buttons-csv, .buttons-print, .buttons-pdf, .buttons-excel').addClass('btn btn-primary mr-1');
    };
    EstacionservicioIndexComponent.prototype.ngAfterViewInit = function () {
    };
    EstacionservicioIndexComponent.prototype.delete = function (id) {
        var _this = this;
        this.spinnerService.show();
        this.estacionservicioService.delete(id)
            .subscribe(function (value) {
            if (value.data.estado) {
                _this.notificationService.onSuccess('Estacion de Servicio Activada con Exito.');
            }
            else {
                _this.notificationService.onSuccess('Estacion de Servicio Eliminada con Exito.');
            }
            _this.get();
            _this.spinnerService.hide();
        });
    };
    EstacionservicioIndexComponent.prototype.reInitDatatable = function () {
        var _this = this;
        if (this.table) {
            this.table.destroy();
            this.table = null;
        }
        setTimeout(function () { return _this.loadtable(); }, 0);
    };
    EstacionservicioIndexComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-estacionservicio-index',
            template: __webpack_require__("./src/app/estacionservicio/estacionservicio-index/estacionservicio-index.component.html"),
            styles: [__webpack_require__("./src/app/estacionservicio/estacionservicio-index/estacionservicio-index.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng4_loading_spinner__["Ng4LoadingSpinnerService"],
            __WEBPACK_IMPORTED_MODULE_3__estacionservicio_service__["a" /* EstacionservicioService */],
            __WEBPACK_IMPORTED_MODULE_2__shared__["k" /* NotificationService */],
            __WEBPACK_IMPORTED_MODULE_8__angular_router__["a" /* ActivatedRoute */]])
    ], EstacionservicioIndexComponent);
    return EstacionservicioIndexComponent;
}());



/***/ }),

/***/ "./src/app/estacionservicio/estacionservicio-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstacionservicioRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__estacionservicio_estacionservicio_index_estacionservicio_index_component__ = __webpack_require__("./src/app/estacionservicio/estacionservicio-index/estacionservicio-index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__estacionservicio_estacionservicio_add_estacionservicio_add_component__ = __webpack_require__("./src/app/estacionservicio/estacionservicio-add/estacionservicio-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__estacionservicio_estacionservicio_edit_estacionservicio_edit_component__ = __webpack_require__("./src/app/estacionservicio/estacionservicio-edit/estacionservicio-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_can_deactivate_guard_can_deactivate_guard_service__ = __webpack_require__("./src/app/shared/can-deactivate-guard/can-deactivate-guard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [{ path: '', component: __WEBPACK_IMPORTED_MODULE_2__estacionservicio_estacionservicio_index_estacionservicio_index_component__["a" /* EstacionservicioIndexComponent */] },
    { path: 'add', component: __WEBPACK_IMPORTED_MODULE_3__estacionservicio_estacionservicio_add_estacionservicio_add_component__["a" /* EstacionservicioAddComponent */], canDeactivate: [__WEBPACK_IMPORTED_MODULE_5__shared_can_deactivate_guard_can_deactivate_guard_service__["a" /* Candeactivateguard */]] },
    { path: 'edit/:id', component: __WEBPACK_IMPORTED_MODULE_4__estacionservicio_estacionservicio_edit_estacionservicio_edit_component__["a" /* EstacionservicioEditComponent */], canDeactivate: [__WEBPACK_IMPORTED_MODULE_5__shared_can_deactivate_guard_can_deactivate_guard_service__["a" /* Candeactivateguard */]] }];
var EstacionservicioRoutingModule = /** @class */ (function () {
    function EstacionservicioRoutingModule() {
    }
    EstacionservicioRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], EstacionservicioRoutingModule);
    return EstacionservicioRoutingModule;
}());



/***/ }),

/***/ "./src/app/estacionservicio/estacionservicio.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstacionservicioModule", function() { return EstacionservicioModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_alert__ = __webpack_require__("./node_modules/ngx-bootstrap/alert/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__toverux_ngx_sweetalert2__ = __webpack_require__("./node_modules/@toverux/ngx-sweetalert2/esm5/toverux-ngx-sweetalert2.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng_snotify__ = __webpack_require__("./node_modules/ng-snotify/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_typeahead__ = __webpack_require__("./node_modules/ngx-bootstrap/typeahead/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__estacionservicio_routing_module__ = __webpack_require__("./src/app/estacionservicio/estacionservicio-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__estacionservicio_estacionservicio_index_estacionservicio_index_component__ = __webpack_require__("./src/app/estacionservicio/estacionservicio-index/estacionservicio-index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__estacionservicio_estacionservicio_add_estacionservicio_add_component__ = __webpack_require__("./src/app/estacionservicio/estacionservicio-add/estacionservicio-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__estacionservicio_estacionservicio_edit_estacionservicio_edit_component__ = __webpack_require__("./src/app/estacionservicio/estacionservicio-edit/estacionservicio-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__estacionservicio_service__ = __webpack_require__("./src/app/estacionservicio/estacionservicio.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_interceptor_http_interceptor__ = __webpack_require__("./src/app/shared/interceptor/http_interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__google_apis_maps_service__ = __webpack_require__("./src/app/google-apis/maps.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__contratos_contratos_module__ = __webpack_require__("./src/app/contratos/contratos.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shared_can_deactivate_guard_can_deactivate_guard_service__ = __webpack_require__("./src/app/shared/can-deactivate-guard/can-deactivate-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ng2_file_upload__ = __webpack_require__("./node_modules/ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ngx_chips__ = __webpack_require__("./node_modules/ngx-chips/fesm5/ngx-chips.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




/*modules */
// import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';










/*components */











var EstacionservicioModule = /** @class */ (function () {
    function EstacionservicioModule() {
    }
    EstacionservicioModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_10__estacionservicio_routing_module__["a" /* EstacionservicioRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                // Ng4LoadingSpinnerModule.forRoot(),
                __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_alert__["a" /* AlertModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7__toverux_ngx_sweetalert2__["b" /* SweetAlert2Module */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8_ng_snotify__["a" /* SnotifyModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared__["b" /* AuthenticationModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared__["d" /* EnvironmentModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared__["f" /* FormValidationModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared__["j" /* NotificationModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared__["h" /* LocalDataModule */],
                __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_typeahead__["a" /* TypeaheadModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_17__contratos_contratos_module__["ContratosModule"],
                __WEBPACK_IMPORTED_MODULE_19_ng2_file_upload__["FileUploadModule"],
                __WEBPACK_IMPORTED_MODULE_20_ngx_chips__["a" /* TagInputModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__estacionservicio_estacionservicio_index_estacionservicio_index_component__["a" /* EstacionservicioIndexComponent */],
                __WEBPACK_IMPORTED_MODULE_12__estacionservicio_estacionservicio_add_estacionservicio_add_component__["a" /* EstacionservicioAddComponent */],
                __WEBPACK_IMPORTED_MODULE_13__estacionservicio_estacionservicio_edit_estacionservicio_edit_component__["a" /* EstacionservicioEditComponent */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_14__estacionservicio_service__["a" /* EstacionservicioService */], __WEBPACK_IMPORTED_MODULE_16__google_apis_maps_service__["a" /* MapsService */],
                __WEBPACK_IMPORTED_MODULE_18__shared_can_deactivate_guard_can_deactivate_guard_service__["a" /* Candeactivateguard */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_15__shared_interceptor_http_interceptor__["a" /* RequestInterceptor */],
                    multi: true,
                }]
        })
    ], EstacionservicioModule);
    return EstacionservicioModule;
}());



/***/ }),

/***/ "./src/app/viewmodel/Componente.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Componente; });
var Componente = /** @class */ (function () {
    function Componente() {
        this.componentes = [];
        this.actuaciones = [];
    }
    return Componente;
}());



/***/ })

});
//# sourceMappingURL=estacionservicio.module.chunk.js.map