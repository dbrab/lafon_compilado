webpackJsonp(["reportes.module"],{

/***/ "./node_modules/file-saver/dist/FileSaver.min.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if("undefined"!=typeof exports)b();else{b(),a.FileSaver={exports:{}}.exports}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(b,c,d){var e=new XMLHttpRequest;e.open("GET",b),e.responseType="blob",e.onload=function(){a(e.response,c,d)},e.onerror=function(){console.error("could not download file")},e.send()}function d(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send()}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,a=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(a,b,d,e){if(e=e||open("","_blank"),e&&(e.document.title=e.document.body.innerText="downloading..."),"string"==typeof a)return c(a,b,d);var g="application/octet-stream"===a.type,h=/constructor/i.test(f.HTMLElement)||f.safari,i=/CriOS\/[\d]+/.test(navigator.userAgent);if((i||g&&h)&&"object"==typeof FileReader){var j=new FileReader;j.onloadend=function(){var a=j.result;a=i?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),e?e.location.href=a:location=a,e=null},j.readAsDataURL(a)}else{var k=f.URL||f.webkitURL,l=k.createObjectURL(a);e?e.location=l:location.href=l,e=null,setTimeout(function(){k.revokeObjectURL(l)},4E4)}});f.saveAs=a.saveAs=a,"undefined"!=typeof module&&(module.exports=a)});

//# sourceMappingURL=FileSaver.min.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/ngx-bootstrap/accordion/accordion-group.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionPanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_theme_provider__ = __webpack_require__("./node_modules/ngx-bootstrap/utils/theme-provider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accordion_component__ = __webpack_require__("./node_modules/ngx-bootstrap/accordion/accordion.component.js");



/**
 * ### Accordion heading
 * Instead of using `heading` attribute on the `accordion-group`, you can use
 * an `accordion-heading` attribute on `any` element inside of a group that
 * will be used as group's header template.
 */
var AccordionPanelComponent = (function () {
    function AccordionPanelComponent(accordion) {
        /** Emits when the opened state changes */
        this.isOpenChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._isOpen = false;
        this.accordion = accordion;
    }
    Object.defineProperty(AccordionPanelComponent.prototype, "isOpen", {
        // Questionable, maybe .panel-open should be on child div.panel element?
        /** Is accordion group open or closed. This property supports two-way binding */
        get: function () {
            return this._isOpen;
        },
        set: function (value) {
            var _this = this;
            if (value !== this.isOpen) {
                if (value) {
                    this.accordion.closeOtherPanels(this);
                }
                this._isOpen = value;
                Promise.resolve(null).then(function () {
                    _this.isOpenChange.emit(value);
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccordionPanelComponent.prototype, "isBs3", {
        get: function () {
            return Object(__WEBPACK_IMPORTED_MODULE_1__utils_theme_provider__["a" /* isBs3 */])();
        },
        enumerable: true,
        configurable: true
    });
    AccordionPanelComponent.prototype.ngOnInit = function () {
        this.panelClass = this.panelClass || 'panel-default';
        this.accordion.addGroup(this);
    };
    AccordionPanelComponent.prototype.ngOnDestroy = function () {
        this.accordion.removeGroup(this);
    };
    AccordionPanelComponent.prototype.toggleOpen = function (event) {
        if (!this.isDisabled) {
            this.isOpen = !this.isOpen;
        }
    };
    AccordionPanelComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'accordion-group, accordion-panel',
                    template: "<div class=\"panel card\" [ngClass]=\"panelClass\"> <div class=\"panel-heading card-header\" role=\"tab\" (click)=\"toggleOpen($event)\"> <div class=\"panel-title\"> <div role=\"button\" class=\"accordion-toggle\" [attr.aria-expanded]=\"isOpen\"> <div *ngIf=\"heading\" [ngClass]=\"{'text-muted': isDisabled}\"> {{ heading }} </div> <ng-content select=\"[accordion-heading]\"></ng-content> </div> </div> </div> <div class=\"panel-collapse collapse\" role=\"tabpanel\" [collapse]=\"!isOpen\"> <div class=\"panel-body card-block card-body\"> <ng-content></ng-content> </div> </div> </div> ",
                    host: {
                        class: 'panel',
                        style: 'display: block'
                    }
                },] },
    ];
    /** @nocollapse */
    AccordionPanelComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_2__accordion_component__["a" /* AccordionComponent */], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_2__accordion_component__["a" /* AccordionComponent */],] },] },
    ]; };
    AccordionPanelComponent.propDecorators = {
        'heading': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'panelClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'isDisabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'isOpenChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'isOpen': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['class.panel-open',] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return AccordionPanelComponent;
}());

//# sourceMappingURL=accordion-group.component.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/accordion/accordion.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accordion_config__ = __webpack_require__("./node_modules/ngx-bootstrap/accordion/accordion.config.js");


/** Displays collapsible content panels for presenting information in a limited amount of space. */
var AccordionComponent = (function () {
    function AccordionComponent(config) {
        this.groups = [];
        Object.assign(this, config);
    }
    AccordionComponent.prototype.closeOtherPanels = function (openGroup) {
        if (!this.closeOthers) {
            return;
        }
        this.groups.forEach(function (group) {
            if (group !== openGroup) {
                group.isOpen = false;
            }
        });
    };
    AccordionComponent.prototype.addGroup = function (group) {
        this.groups.push(group);
    };
    AccordionComponent.prototype.removeGroup = function (group) {
        var index = this.groups.indexOf(group);
        if (index !== -1) {
            this.groups.splice(index, 1);
        }
    };
    AccordionComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'accordion',
                    template: "<ng-content></ng-content>",
                    host: {
                        '[attr.aria-multiselectable]': 'closeOthers',
                        role: 'tablist',
                        class: 'panel-group',
                        style: 'display: block'
                    }
                },] },
    ];
    /** @nocollapse */
    AccordionComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__accordion_config__["a" /* AccordionConfig */], },
    ]; };
    AccordionComponent.propDecorators = {
        'closeOthers': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return AccordionComponent;
}());

//# sourceMappingURL=accordion.component.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/accordion/accordion.config.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");

/**
 * Configuration service, provides default values for the AccordionComponent.
 */
var AccordionConfig = (function () {
    function AccordionConfig() {
        /** Whether the other panels should be closed when a panel is opened */
        this.closeOthers = false;
    }
    AccordionConfig.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    AccordionConfig.ctorParameters = function () { return []; };
    return AccordionConfig;
}());

//# sourceMappingURL=accordion.config.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/accordion/accordion.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AccordionModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__collapse_collapse_module__ = __webpack_require__("./node_modules/ngx-bootstrap/collapse/collapse.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__accordion_group_component__ = __webpack_require__("./node_modules/ngx-bootstrap/accordion/accordion-group.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__accordion_component__ = __webpack_require__("./node_modules/ngx-bootstrap/accordion/accordion.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__accordion_config__ = __webpack_require__("./node_modules/ngx-bootstrap/accordion/accordion.config.js");






var AccordionModule = (function () {
    function AccordionModule() {
    }
    AccordionModule.forRoot = function () {
        return { ngModule: AccordionModule, providers: [__WEBPACK_IMPORTED_MODULE_5__accordion_config__["a" /* AccordionConfig */]] };
    };
    AccordionModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2__collapse_collapse_module__["a" /* CollapseModule */]],
                    declarations: [__WEBPACK_IMPORTED_MODULE_4__accordion_component__["a" /* AccordionComponent */], __WEBPACK_IMPORTED_MODULE_3__accordion_group_component__["a" /* AccordionPanelComponent */]],
                    exports: [__WEBPACK_IMPORTED_MODULE_4__accordion_component__["a" /* AccordionComponent */], __WEBPACK_IMPORTED_MODULE_3__accordion_group_component__["a" /* AccordionPanelComponent */]]
                },] },
    ];
    /** @nocollapse */
    AccordionModule.ctorParameters = function () { return []; };
    return AccordionModule;
}());

//# sourceMappingURL=accordion.module.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/accordion/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__accordion_group_component__ = __webpack_require__("./node_modules/ngx-bootstrap/accordion/accordion-group.component.js");
/* unused harmony reexport AccordionPanelComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accordion_component__ = __webpack_require__("./node_modules/ngx-bootstrap/accordion/accordion.component.js");
/* unused harmony reexport AccordionComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accordion_module__ = __webpack_require__("./node_modules/ngx-bootstrap/accordion/accordion.module.js");
/* unused harmony reexport AccordionModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__accordion_config__ = __webpack_require__("./node_modules/ngx-bootstrap/accordion/accordion.config.js");
/* unused harmony reexport AccordionConfig */




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/buttons/button-checkbox.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CHECKBOX_CONTROL_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonCheckboxDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
// tslint:disable:no-use-before-declare


// TODO: config: activeClass - Class to apply to the checked buttons
var CHECKBOX_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return ButtonCheckboxDirective; }),
    multi: true
};
/**
 * Add checkbox functionality to any element
 */
var ButtonCheckboxDirective = (function () {
    function ButtonCheckboxDirective() {
        /** Truthy value, will be set to ngModel */
        this.btnCheckboxTrue = true;
        /** Falsy value, will be set to ngModel */
        this.btnCheckboxFalse = false;
        this.state = false;
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
    }
    // view -> model
    ButtonCheckboxDirective.prototype.onClick = function () {
        if (this.isDisabled) {
            return;
        }
        this.toggle(!this.state);
        this.onChange(this.value);
    };
    ButtonCheckboxDirective.prototype.ngOnInit = function () {
        this.toggle(this.trueValue === this.value);
    };
    Object.defineProperty(ButtonCheckboxDirective.prototype, "trueValue", {
        get: function () {
            return typeof this.btnCheckboxTrue !== 'undefined'
                ? this.btnCheckboxTrue
                : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonCheckboxDirective.prototype, "falseValue", {
        get: function () {
            return typeof this.btnCheckboxFalse !== 'undefined'
                ? this.btnCheckboxFalse
                : false;
        },
        enumerable: true,
        configurable: true
    });
    ButtonCheckboxDirective.prototype.toggle = function (state) {
        this.state = state;
        this.value = this.state ? this.trueValue : this.falseValue;
    };
    // ControlValueAccessor
    // model -> view
    ButtonCheckboxDirective.prototype.writeValue = function (value) {
        this.state = this.trueValue === value;
        this.value = value ? this.trueValue : this.falseValue;
    };
    ButtonCheckboxDirective.prototype.setDisabledState = function (isDisabled) {
        this.isDisabled = isDisabled;
    };
    ButtonCheckboxDirective.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    ButtonCheckboxDirective.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    ButtonCheckboxDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[btnCheckbox]',
                    providers: [CHECKBOX_CONTROL_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    ButtonCheckboxDirective.ctorParameters = function () { return []; };
    ButtonCheckboxDirective.propDecorators = {
        'btnCheckboxTrue': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'btnCheckboxFalse': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'state': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['class.active',] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['attr.aria-pressed',] },],
        'onClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['click',] },],
    };
    return ButtonCheckboxDirective;
}());

//# sourceMappingURL=button-checkbox.directive.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/buttons/button-radio-group.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RADIO_CONTROL_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonRadioGroupDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
// tslint:disable:no-use-before-declare


var RADIO_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return ButtonRadioGroupDirective; }),
    multi: true
};
/**
 * A group of radio buttons.
 * A value of a selected button is bound to a variable specified via ngModel.
 */
var ButtonRadioGroupDirective = (function () {
    function ButtonRadioGroupDirective(el, cdr) {
        this.el = el;
        this.cdr = cdr;
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
    }
    Object.defineProperty(ButtonRadioGroupDirective.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    ButtonRadioGroupDirective.prototype.writeValue = function (value) {
        this._value = value;
        this.cdr.markForCheck();
    };
    ButtonRadioGroupDirective.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    ButtonRadioGroupDirective.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    ButtonRadioGroupDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[btnRadioGroup]',
                    providers: [RADIO_CONTROL_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    ButtonRadioGroupDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], },
    ]; };
    return ButtonRadioGroupDirective;
}());

//# sourceMappingURL=button-radio-group.directive.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/buttons/button-radio.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RADIO_CONTROL_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonRadioDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__button_radio_group_directive__ = __webpack_require__("./node_modules/ngx-bootstrap/buttons/button-radio-group.directive.js");
// tslint:disable:no-use-before-declare



var RADIO_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return ButtonRadioDirective; }),
    multi: true
};
/**
 * Create radio buttons or groups of buttons.
 * A value of a selected button is bound to a variable specified via ngModel.
 */
var ButtonRadioDirective = (function () {
    function ButtonRadioDirective(el, cdr, group, renderer) {
        this.el = el;
        this.cdr = cdr;
        this.group = group;
        this.renderer = renderer;
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
    }
    Object.defineProperty(ButtonRadioDirective.prototype, "value", {
        /** Current value of radio component or group */
        get: function () {
            return this.group ? this.group.value : this._value;
        },
        set: function (value) {
            if (this.group) {
                this.group.value = value;
                return;
            }
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonRadioDirective.prototype, "disabled", {
        /** If `true` — radio button is disabled */
        get: function () {
            return this._disabled;
        },
        set: function (disabled) {
            this._disabled = disabled;
            this.setDisabledState(disabled);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonRadioDirective.prototype, "isActive", {
        get: function () {
            return this.btnRadio === this.value;
        },
        enumerable: true,
        configurable: true
    });
    ButtonRadioDirective.prototype.onClick = function () {
        if (this.el.nativeElement.attributes.disabled || !this.uncheckable && this.btnRadio === this.value) {
            return;
        }
        this.value = this.uncheckable && this.btnRadio === this.value ? undefined : this.btnRadio;
        this._onChange(this.value);
    };
    ButtonRadioDirective.prototype.ngOnInit = function () {
        this.uncheckable = typeof this.uncheckable !== 'undefined';
    };
    ButtonRadioDirective.prototype.onBlur = function () {
        this.onTouched();
    };
    ButtonRadioDirective.prototype._onChange = function (value) {
        if (this.group) {
            this.group.onTouched();
            this.group.onChange(value);
            return;
        }
        this.onTouched();
        this.onChange(value);
    };
    // ControlValueAccessor
    // model -> view
    ButtonRadioDirective.prototype.writeValue = function (value) {
        this.value = value;
        this.cdr.markForCheck();
    };
    ButtonRadioDirective.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    ButtonRadioDirective.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    ButtonRadioDirective.prototype.setDisabledState = function (disabled) {
        if (disabled) {
            this.renderer.setAttribute(this.el.nativeElement, 'disabled', 'disabled');
            return;
        }
        this.renderer.removeAttribute(this.el.nativeElement, 'disabled');
    };
    ButtonRadioDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[btnRadio]',
                    providers: [RADIO_CONTROL_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    ButtonRadioDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_2__button_radio_group_directive__["a" /* ButtonRadioGroupDirective */], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] },] },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
    ]; };
    ButtonRadioDirective.propDecorators = {
        'btnRadio': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'uncheckable': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'value': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'disabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'isActive': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['class.active',] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['attr.aria-pressed',] },],
        'onClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['click',] },],
    };
    return ButtonRadioDirective;
}());

//# sourceMappingURL=button-radio.directive.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/buttons/buttons.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ButtonsModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__button_checkbox_directive__ = __webpack_require__("./node_modules/ngx-bootstrap/buttons/button-checkbox.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__button_radio_directive__ = __webpack_require__("./node_modules/ngx-bootstrap/buttons/button-radio.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__button_radio_group_directive__ = __webpack_require__("./node_modules/ngx-bootstrap/buttons/button-radio-group.directive.js");




var ButtonsModule = (function () {
    function ButtonsModule() {
    }
    ButtonsModule.forRoot = function () {
        return { ngModule: ButtonsModule, providers: [] };
    };
    ButtonsModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    declarations: [__WEBPACK_IMPORTED_MODULE_1__button_checkbox_directive__["a" /* ButtonCheckboxDirective */], __WEBPACK_IMPORTED_MODULE_2__button_radio_directive__["a" /* ButtonRadioDirective */], __WEBPACK_IMPORTED_MODULE_3__button_radio_group_directive__["a" /* ButtonRadioGroupDirective */]],
                    exports: [__WEBPACK_IMPORTED_MODULE_1__button_checkbox_directive__["a" /* ButtonCheckboxDirective */], __WEBPACK_IMPORTED_MODULE_2__button_radio_directive__["a" /* ButtonRadioDirective */], __WEBPACK_IMPORTED_MODULE_3__button_radio_group_directive__["a" /* ButtonRadioGroupDirective */]]
                },] },
    ];
    /** @nocollapse */
    ButtonsModule.ctorParameters = function () { return []; };
    return ButtonsModule;
}());

//# sourceMappingURL=buttons.module.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/buttons/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__button_checkbox_directive__ = __webpack_require__("./node_modules/ngx-bootstrap/buttons/button-checkbox.directive.js");
/* unused harmony reexport ButtonCheckboxDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__button_radio_group_directive__ = __webpack_require__("./node_modules/ngx-bootstrap/buttons/button-radio-group.directive.js");
/* unused harmony reexport ButtonRadioGroupDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__button_radio_directive__ = __webpack_require__("./node_modules/ngx-bootstrap/buttons/button-radio.directive.js");
/* unused harmony reexport ButtonRadioDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__buttons_module__ = __webpack_require__("./node_modules/ngx-bootstrap/buttons/buttons.module.js");
/* unused harmony reexport ButtonsModule */




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/carousel/carousel.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Direction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_index__ = __webpack_require__("./node_modules/ngx-bootstrap/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__carousel_config__ = __webpack_require__("./node_modules/ngx-bootstrap/carousel/carousel.config.js");
// tslint:disable:max-file-line-count
/***
 * pause (not yet supported) (?string='hover') - event group name which pauses
 * the cycling of the carousel, if hover pauses on mouseenter and resumes on
 * mouseleave keyboard (not yet supported) (?boolean=true) - if false
 * carousel will not react to keyboard events
 * note: swiping not yet supported
 */
/****
 * Problems:
 * 1) if we set an active slide via model changes, .active class remains on a
 * current slide.
 * 2) if we have only one slide, we shouldn't show prev/next nav buttons
 * 3) if first or last slide is active and noWrap is true, there should be
 * "disabled" class on the nav buttons.
 * 4) default interval should be equal 5000
 */



var Direction;
(function (Direction) {
    Direction[Direction["UNKNOWN"] = 0] = "UNKNOWN";
    Direction[Direction["NEXT"] = 1] = "NEXT";
    Direction[Direction["PREV"] = 2] = "PREV";
})(Direction || (Direction = {}));
/**
 * Base element to create carousel
 */
var CarouselComponent = (function () {
    function CarouselComponent(config, ngZone) {
        this.ngZone = ngZone;
        /** Will be emitted when active slide has been changed. Part of two-way-bindable [(activeSlide)] property */
        this.activeSlideChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"](false);
        this._slides = new __WEBPACK_IMPORTED_MODULE_1__utils_index__["a" /* LinkedList */]();
        this.destroyed = false;
        Object.assign(this, config);
    }
    Object.defineProperty(CarouselComponent.prototype, "activeSlide", {
        get: function () {
            return this._currentActiveSlide;
        },
        /** Index of currently displayed slide(started for 0) */
        set: function (index) {
            if (this._slides.length && index !== this._currentActiveSlide) {
                this._select(index);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarouselComponent.prototype, "interval", {
        /**
         * Delay of item cycling in milliseconds. If false, carousel won't cycle
         * automatically.
         */
        get: function () {
            return this._interval;
        },
        set: function (value) {
            this._interval = value;
            this.restartTimer();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarouselComponent.prototype, "slides", {
        get: function () {
            return this._slides.toArray();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarouselComponent.prototype, "isBs4", {
        get: function () {
            return !Object(__WEBPACK_IMPORTED_MODULE_1__utils_index__["c" /* isBs3 */])();
        },
        enumerable: true,
        configurable: true
    });
    CarouselComponent.prototype.ngOnDestroy = function () {
        this.destroyed = true;
    };
    /**
     * Adds new slide. If this slide is first in collection - set it as active
     * and starts auto changing
     * @param slide
     */
    CarouselComponent.prototype.addSlide = function (slide) {
        this._slides.add(slide);
        if (this._slides.length === 1) {
            this._currentActiveSlide = void 0;
            this.activeSlide = 0;
            this.play();
        }
    };
    /**
     * Removes specified slide. If this slide is active - will roll to another
     * slide
     * @param slide
     */
    CarouselComponent.prototype.removeSlide = function (slide) {
        var _this = this;
        var remIndex = this._slides.indexOf(slide);
        if (this._currentActiveSlide === remIndex) {
            // removing of active slide
            var nextSlideIndex_1 = void 0;
            if (this._slides.length > 1) {
                // if this slide last - will roll to first slide, if noWrap flag is
                // FALSE or to previous, if noWrap is TRUE in case, if this slide in
                // middle of collection, index of next slide is same to removed
                nextSlideIndex_1 = !this.isLast(remIndex)
                    ? remIndex
                    : this.noWrap ? remIndex - 1 : 0;
            }
            this._slides.remove(remIndex);
            // prevents exception with changing some value after checking
            setTimeout(function () {
                _this._select(nextSlideIndex_1);
            }, 0);
        }
        else {
            this._slides.remove(remIndex);
            var currentSlideIndex_1 = this.getCurrentSlideIndex();
            setTimeout(function () {
                // after removing, need to actualize index of current active slide
                _this._currentActiveSlide = currentSlideIndex_1;
                _this.activeSlideChange.emit(_this._currentActiveSlide);
            }, 0);
        }
    };
    /**
     * Rolling to next slide
     * @param force: {boolean} if true - will ignore noWrap flag
     */
    CarouselComponent.prototype.nextSlide = function (force) {
        if (force === void 0) { force = false; }
        this.activeSlide = this.findNextSlideIndex(Direction.NEXT, force);
    };
    /**
     * Rolling to previous slide
     * @param force: {boolean} if true - will ignore noWrap flag
     */
    CarouselComponent.prototype.previousSlide = function (force) {
        if (force === void 0) { force = false; }
        this.activeSlide = this.findNextSlideIndex(Direction.PREV, force);
    };
    /**
     * Rolling to specified slide
     * @param index: {number} index of slide, which must be shown
     */
    CarouselComponent.prototype.selectSlide = function (index) {
        this.activeSlide = index;
    };
    /**
     * Starts a auto changing of slides
     */
    CarouselComponent.prototype.play = function () {
        if (!this.isPlaying) {
            this.isPlaying = true;
            this.restartTimer();
        }
    };
    /**
     * Stops a auto changing of slides
     */
    CarouselComponent.prototype.pause = function () {
        if (!this.noPause) {
            this.isPlaying = false;
            this.resetTimer();
        }
    };
    /**
     * Finds and returns index of currently displayed slide
     * @returns {number}
     */
    CarouselComponent.prototype.getCurrentSlideIndex = function () {
        return this._slides.findIndex(function (slide) { return slide.active; });
    };
    /**
     * Defines, whether the specified index is last in collection
     * @param index
     * @returns {boolean}
     */
    CarouselComponent.prototype.isLast = function (index) {
        return index + 1 >= this._slides.length;
    };
    /**
     * Defines next slide index, depending of direction
     * @param direction: Direction(UNKNOWN|PREV|NEXT)
     * @param force: {boolean} if TRUE - will ignore noWrap flag, else will
     *   return undefined if next slide require wrapping
     * @returns {any}
     */
    CarouselComponent.prototype.findNextSlideIndex = function (direction, force) {
        var nextSlideIndex = 0;
        if (!force &&
            (this.isLast(this.activeSlide) &&
                direction !== Direction.PREV &&
                this.noWrap)) {
            return void 0;
        }
        switch (direction) {
            case Direction.NEXT:
                // if this is last slide, not force, looping is disabled
                // and need to going forward - select current slide, as a next
                nextSlideIndex = !this.isLast(this._currentActiveSlide)
                    ? this._currentActiveSlide + 1
                    : !force && this.noWrap ? this._currentActiveSlide : 0;
                break;
            case Direction.PREV:
                // if this is first slide, not force, looping is disabled
                // and need to going backward - select current slide, as a next
                nextSlideIndex =
                    this._currentActiveSlide > 0
                        ? this._currentActiveSlide - 1
                        : !force && this.noWrap
                            ? this._currentActiveSlide
                            : this._slides.length - 1;
                break;
            default:
                throw new Error('Unknown direction');
        }
        return nextSlideIndex;
    };
    /**
     * Sets a slide, which specified through index, as active
     * @param index
     * @private
     */
    CarouselComponent.prototype._select = function (index) {
        if (isNaN(index)) {
            this.pause();
            return;
        }
        var currentSlide = this._slides.get(this._currentActiveSlide);
        if (currentSlide) {
            currentSlide.active = false;
        }
        var nextSlide = this._slides.get(index);
        if (nextSlide) {
            this._currentActiveSlide = index;
            nextSlide.active = true;
            this.activeSlide = index;
            this.activeSlideChange.emit(index);
        }
    };
    /**
     * Starts loop of auto changing of slides
     */
    CarouselComponent.prototype.restartTimer = function () {
        var _this = this;
        this.resetTimer();
        var interval = +this.interval;
        if (!isNaN(interval) && interval > 0) {
            this.currentInterval = this.ngZone.runOutsideAngular(function () {
                return setInterval(function () {
                    var nInterval = +_this.interval;
                    _this.ngZone.run(function () {
                        if (_this.isPlaying &&
                            !isNaN(_this.interval) &&
                            nInterval > 0 &&
                            _this.slides.length) {
                            _this.nextSlide();
                        }
                        else {
                            _this.pause();
                        }
                    });
                }, interval);
            });
        }
    };
    /**
     * Stops loop of auto changing of slides
     */
    CarouselComponent.prototype.resetTimer = function () {
        if (this.currentInterval) {
            clearInterval(this.currentInterval);
            this.currentInterval = void 0;
        }
    };
    CarouselComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'carousel',
                    template: "<div (mouseenter)=\"pause()\" (mouseleave)=\"play()\" (mouseup)=\"play()\" class=\"carousel slide\"> <ol class=\"carousel-indicators\" *ngIf=\"showIndicators && slides.length > 1\"> <li *ngFor=\"let slidez of slides; let i = index;\" [class.active]=\"slidez.active === true\" (click)=\"selectSlide(i)\"></li> </ol> <div class=\"carousel-inner\"><ng-content></ng-content></div> <a class=\"left carousel-control carousel-control-prev\" [class.disabled]=\"activeSlide === 0 && noWrap\" (click)=\"previousSlide()\" *ngIf=\"slides.length > 1\"> <span class=\"icon-prev carousel-control-prev-icon\" aria-hidden=\"true\"></span> <span *ngIf=\"isBs4\" class=\"sr-only\">Previous</span> </a> <a class=\"right carousel-control carousel-control-next\" (click)=\"nextSlide()\"  [class.disabled]=\"isLast(activeSlide) && noWrap\" *ngIf=\"slides.length > 1\"> <span class=\"icon-next carousel-control-next-icon\" aria-hidden=\"true\"></span> <span class=\"sr-only\">Next</span> </a> </div> "
                },] },
    ];
    /** @nocollapse */
    CarouselComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_2__carousel_config__["a" /* CarouselConfig */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], },
    ]; };
    CarouselComponent.propDecorators = {
        'noWrap': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'noPause': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'showIndicators': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'activeSlideChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'activeSlide': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'interval': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return CarouselComponent;
}());

//# sourceMappingURL=carousel.component.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/carousel/carousel.config.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");

var CarouselConfig = (function () {
    function CarouselConfig() {
        /** Default interval of auto changing of slides */
        this.interval = 5000;
        /** Is loop of auto changing of slides can be paused */
        this.noPause = false;
        /** Is slides can wrap from the last to the first slide */
        this.noWrap = false;
        /** Show carousel-indicators */
        this.showIndicators = true;
    }
    CarouselConfig.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    CarouselConfig.ctorParameters = function () { return []; };
    return CarouselConfig;
}());

//# sourceMappingURL=carousel.config.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/carousel/carousel.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CarouselModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__carousel_component__ = __webpack_require__("./node_modules/ngx-bootstrap/carousel/carousel.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__slide_component__ = __webpack_require__("./node_modules/ngx-bootstrap/carousel/slide.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__carousel_config__ = __webpack_require__("./node_modules/ngx-bootstrap/carousel/carousel.config.js");





var CarouselModule = (function () {
    function CarouselModule() {
    }
    CarouselModule.forRoot = function () {
        return { ngModule: CarouselModule, providers: [] };
    };
    CarouselModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"]],
                    declarations: [__WEBPACK_IMPORTED_MODULE_3__slide_component__["a" /* SlideComponent */], __WEBPACK_IMPORTED_MODULE_2__carousel_component__["a" /* CarouselComponent */]],
                    exports: [__WEBPACK_IMPORTED_MODULE_3__slide_component__["a" /* SlideComponent */], __WEBPACK_IMPORTED_MODULE_2__carousel_component__["a" /* CarouselComponent */]],
                    providers: [__WEBPACK_IMPORTED_MODULE_4__carousel_config__["a" /* CarouselConfig */]]
                },] },
    ];
    /** @nocollapse */
    CarouselModule.ctorParameters = function () { return []; };
    return CarouselModule;
}());

//# sourceMappingURL=carousel.module.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/carousel/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__carousel_component__ = __webpack_require__("./node_modules/ngx-bootstrap/carousel/carousel.component.js");
/* unused harmony reexport CarouselComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__carousel_module__ = __webpack_require__("./node_modules/ngx-bootstrap/carousel/carousel.module.js");
/* unused harmony reexport CarouselModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slide_component__ = __webpack_require__("./node_modules/ngx-bootstrap/carousel/slide.component.js");
/* unused harmony reexport SlideComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__carousel_config__ = __webpack_require__("./node_modules/ngx-bootstrap/carousel/carousel.config.js");
/* unused harmony reexport CarouselConfig */




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/carousel/slide.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlideComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__carousel_component__ = __webpack_require__("./node_modules/ngx-bootstrap/carousel/carousel.component.js");


var SlideComponent = (function () {
    function SlideComponent(carousel) {
        /** Wraps element by appropriate CSS classes */
        this.addClass = true;
        this.carousel = carousel;
    }
    /** Fires changes in container collection after adding a new slide instance */
    SlideComponent.prototype.ngOnInit = function () {
        this.carousel.addSlide(this);
    };
    /** Fires changes in container collection after removing of this slide instance */
    SlideComponent.prototype.ngOnDestroy = function () {
        this.carousel.removeSlide(this);
    };
    SlideComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'slide',
                    template: "\n    <div [class.active]=\"active\" class=\"item\">\n      <ng-content></ng-content>\n    </div>\n  ",
                    host: {
                        '[attr.aria-hidden]': '!active'
                    }
                },] },
    ];
    /** @nocollapse */
    SlideComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__carousel_component__["a" /* CarouselComponent */], },
    ]; };
    SlideComponent.propDecorators = {
        'active': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['class.active',] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'addClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['class.item',] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['class.carousel-item',] },],
    };
    return SlideComponent;
}());

//# sourceMappingURL=slide.component.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/collapse/collapse.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollapseDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
// todo: add animations when https://github.com/angular/angular/issues/9947 solved

var CollapseDirective = (function () {
    function CollapseDirective(_el, _renderer) {
        this._el = _el;
        this._renderer = _renderer;
        /** This event fires as soon as content collapses */
        this.collapsed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** This event fires as soon as content becomes visible */
        this.expanded = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        // shown
        this.isExpanded = true;
        // hidden
        this.isCollapsed = false;
        // stale state
        this.isCollapse = true;
        // animation state
        this.isCollapsing = false;
    }
    Object.defineProperty(CollapseDirective.prototype, "collapse", {
        get: function () {
            return this.isExpanded;
        },
        /** A flag indicating visibility of content (shown or hidden) */
        set: function (value) {
            this.isExpanded = value;
            this.toggle();
        },
        enumerable: true,
        configurable: true
    });
    /** allows to manually toggle content visibility */
    CollapseDirective.prototype.toggle = function () {
        if (this.isExpanded) {
            this.hide();
        }
        else {
            this.show();
        }
    };
    /** allows to manually hide content */
    CollapseDirective.prototype.hide = function () {
        this.isCollapse = false;
        this.isCollapsing = true;
        this.isExpanded = false;
        this.isCollapsed = true;
        this.isCollapse = true;
        this.isCollapsing = false;
        this.display = 'none';
        this.collapsed.emit(this);
    };
    /** allows to manually show collapsed content */
    CollapseDirective.prototype.show = function () {
        this.isCollapse = false;
        this.isCollapsing = true;
        this.isExpanded = true;
        this.isCollapsed = false;
        this.display = 'block';
        // this.height = 'auto';
        this.isCollapse = true;
        this.isCollapsing = false;
        this._renderer.setStyle(this._el.nativeElement, 'overflow', 'visible');
        this._renderer.setStyle(this._el.nativeElement, 'height', 'auto');
        this.expanded.emit(this);
    };
    CollapseDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[collapse]',
                    exportAs: 'bs-collapse',
                    host: {
                        '[class.collapse]': 'true'
                    }
                },] },
    ];
    /** @nocollapse */
    CollapseDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
    ]; };
    CollapseDirective.propDecorators = {
        'collapsed': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'expanded': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'display': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['style.display',] },],
        'isExpanded': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['class.in',] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['class.show',] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['attr.aria-expanded',] },],
        'isCollapsed': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['attr.aria-hidden',] },],
        'isCollapse': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['class.collapse',] },],
        'isCollapsing': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['class.collapsing',] },],
        'collapse': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return CollapseDirective;
}());

//# sourceMappingURL=collapse.directive.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/collapse/collapse.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollapseModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__collapse_directive__ = __webpack_require__("./node_modules/ngx-bootstrap/collapse/collapse.directive.js");


var CollapseModule = (function () {
    function CollapseModule() {
    }
    CollapseModule.forRoot = function () {
        return { ngModule: CollapseModule, providers: [] };
    };
    CollapseModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    declarations: [__WEBPACK_IMPORTED_MODULE_1__collapse_directive__["a" /* CollapseDirective */]],
                    exports: [__WEBPACK_IMPORTED_MODULE_1__collapse_directive__["a" /* CollapseDirective */]]
                },] },
    ];
    /** @nocollapse */
    CollapseModule.ctorParameters = function () { return []; };
    return CollapseModule;
}());

//# sourceMappingURL=collapse.module.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/collapse/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__collapse_directive__ = __webpack_require__("./node_modules/ngx-bootstrap/collapse/collapse.directive.js");
/* unused harmony reexport CollapseDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__collapse_module__ = __webpack_require__("./node_modules/ngx-bootstrap/collapse/collapse.module.js");
/* unused harmony reexport CollapseModule */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/dropdown/bs-dropdown-container.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsDropdownContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bs_dropdown_state__ = __webpack_require__("./node_modules/ngx-bootstrap/dropdown/bs-dropdown.state.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_theme_provider__ = __webpack_require__("./node_modules/ngx-bootstrap/utils/theme-provider.js");



var BsDropdownContainerComponent = (function () {
    function BsDropdownContainerComponent(_state, cd, _renderer, _element) {
        var _this = this;
        this._state = _state;
        this.cd = cd;
        this._renderer = _renderer;
        this.isOpen = false;
        this._subscription = _state.isOpenChange.subscribe(function (value) {
            _this.isOpen = value;
            var dropdown = _element.nativeElement.querySelector('.dropdown-menu');
            if (dropdown && !Object(__WEBPACK_IMPORTED_MODULE_2__utils_theme_provider__["a" /* isBs3 */])()) {
                _this._renderer.addClass(dropdown, 'show');
                if (dropdown.classList.contains('dropdown-menu-right')) {
                    _this._renderer.setStyle(dropdown, 'left', 'auto');
                    _this._renderer.setStyle(dropdown, 'right', '0');
                }
                if (_this.direction === 'up') {
                    _this._renderer.setStyle(dropdown, 'top', 'auto');
                    _this._renderer.setStyle(dropdown, 'transform', 'translateY(-101%)');
                }
            }
            _this.cd.markForCheck();
            _this.cd.detectChanges();
        });
    }
    Object.defineProperty(BsDropdownContainerComponent.prototype, "direction", {
        get: function () {
            return this._state.direction;
        },
        enumerable: true,
        configurable: true
    });
    BsDropdownContainerComponent.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    BsDropdownContainerComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'bs-dropdown-container',
                    changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
                    host: {
                        style: 'display:block;position: absolute;'
                    },
                    template: "\n    <div [class.dropup]=\"direction === 'up'\"\n         [class.dropdown]=\"direction === 'down'\"\n         [class.show]=\"isOpen\"\n         [class.open]=\"isOpen\"><ng-content></ng-content></div>\n  "
                },] },
    ];
    /** @nocollapse */
    BsDropdownContainerComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__bs_dropdown_state__["a" /* BsDropdownState */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    ]; };
    return BsDropdownContainerComponent;
}());

//# sourceMappingURL=bs-dropdown-container.component.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/dropdown/bs-dropdown-menu.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsDropdownMenuDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bs_dropdown_state__ = __webpack_require__("./node_modules/ngx-bootstrap/dropdown/bs-dropdown.state.js");


var BsDropdownMenuDirective = (function () {
    function BsDropdownMenuDirective(_state, _viewContainer, _templateRef) {
        _state.resolveDropdownMenu({
            templateRef: _templateRef,
            viewContainer: _viewContainer
        });
    }
    BsDropdownMenuDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[bsDropdownMenu],[dropdownMenu]',
                    exportAs: 'bs-dropdown-menu'
                },] },
    ];
    /** @nocollapse */
    BsDropdownMenuDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__bs_dropdown_state__["a" /* BsDropdownState */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"], },
    ]; };
    return BsDropdownMenuDirective;
}());

//# sourceMappingURL=bs-dropdown-menu.directive.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/dropdown/bs-dropdown-toggle.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsDropdownToggleDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bs_dropdown_state__ = __webpack_require__("./node_modules/ngx-bootstrap/dropdown/bs-dropdown.state.js");


var BsDropdownToggleDirective = (function () {
    function BsDropdownToggleDirective(_state, _element) {
        var _this = this;
        this._state = _state;
        this._element = _element;
        this.isDisabled = null;
        this._subscriptions = [];
        // sync is open value with state
        this._subscriptions.push(this._state.isOpenChange.subscribe(function (value) { return (_this.isOpen = value); }));
        // populate disabled state
        this._subscriptions.push(this._state.isDisabledChange.subscribe(function (value) { return (_this.isDisabled = value || null); }));
    }
    BsDropdownToggleDirective.prototype.onClick = function () {
        if (this.isDisabled) {
            return;
        }
        this._state.toggleClick.emit(true);
    };
    BsDropdownToggleDirective.prototype.onDocumentClick = function (event) {
        if (this._state.autoClose &&
            event.button !== 2 &&
            !this._element.nativeElement.contains(event.target)) {
            this._state.toggleClick.emit(false);
        }
    };
    BsDropdownToggleDirective.prototype.onEsc = function () {
        if (this._state.autoClose) {
            this._state.toggleClick.emit(false);
        }
    };
    BsDropdownToggleDirective.prototype.ngOnDestroy = function () {
        for (var _i = 0, _a = this._subscriptions; _i < _a.length; _i++) {
            var sub = _a[_i];
            sub.unsubscribe();
        }
    };
    BsDropdownToggleDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[bsDropdownToggle],[dropdownToggle]',
                    exportAs: 'bs-dropdown-toggle',
                    host: {
                        '[attr.aria-haspopup]': 'true'
                    }
                },] },
    ];
    /** @nocollapse */
    BsDropdownToggleDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__bs_dropdown_state__["a" /* BsDropdownState */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    ]; };
    BsDropdownToggleDirective.propDecorators = {
        'isDisabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['attr.disabled',] },],
        'isOpen': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['attr.aria-expanded',] },],
        'onClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['click', [],] },],
        'onDocumentClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['document:click', ['$event'],] },],
        'onEsc': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['keyup.esc',] },],
    };
    return BsDropdownToggleDirective;
}());

//# sourceMappingURL=bs-dropdown-toggle.directive.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/dropdown/bs-dropdown.config.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsDropdownConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");

/** Default dropdown configuration */
var BsDropdownConfig = (function () {
    function BsDropdownConfig() {
        /** default dropdown auto closing behavior */
        this.autoClose = true;
    }
    BsDropdownConfig.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    BsDropdownConfig.ctorParameters = function () { return []; };
    return BsDropdownConfig;
}());

//# sourceMappingURL=bs-dropdown.config.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/dropdown/bs-dropdown.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsDropdownDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_filter__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_loader_index__ = __webpack_require__("./node_modules/ngx-bootstrap/component-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bs_dropdown_config__ = __webpack_require__("./node_modules/ngx-bootstrap/dropdown/bs-dropdown.config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bs_dropdown_container_component__ = __webpack_require__("./node_modules/ngx-bootstrap/dropdown/bs-dropdown-container.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bs_dropdown_state__ = __webpack_require__("./node_modules/ngx-bootstrap/dropdown/bs-dropdown.state.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_theme_provider__ = __webpack_require__("./node_modules/ngx-bootstrap/utils/theme-provider.js");
// tslint:disable:max-file-line-count







var BsDropdownDirective = (function () {
    function BsDropdownDirective(_elementRef, _renderer, _viewContainerRef, _cis, _config, _state) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._viewContainerRef = _viewContainerRef;
        this._cis = _cis;
        this._config = _config;
        this._state = _state;
        // todo: move to component loader
        this._isInlineOpen = false;
        this._subscriptions = [];
        this._isInited = false;
        // set initial dropdown state from config
        this._state.autoClose = this._config.autoClose;
        // create dropdown component loader
        this._dropdown = this._cis
            .createLoader(this._elementRef, this._viewContainerRef, this._renderer)
            .provide({ provide: __WEBPACK_IMPORTED_MODULE_5__bs_dropdown_state__["a" /* BsDropdownState */], useValue: this._state });
        this.onShown = this._dropdown.onShown;
        this.onHidden = this._dropdown.onHidden;
        this.isOpenChange = this._state.isOpenChange;
    }
    Object.defineProperty(BsDropdownDirective.prototype, "autoClose", {
        get: function () {
            return this._state.autoClose;
        },
        /**
         * Indicates that dropdown will be closed on item or document click,
         * and after pressing ESC
         */
        set: function (value) {
            this._state.autoClose = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDropdownDirective.prototype, "isDisabled", {
        get: function () {
            return this._isDisabled;
        },
        /**
         * Disables dropdown toggle and hides dropdown menu if opened
         */
        set: function (value) {
            this._isDisabled = value;
            this._state.isDisabledChange.emit(value);
            if (value) {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDropdownDirective.prototype, "isOpen", {
        /**
         * Returns whether or not the popover is currently being shown
         */
        get: function () {
            if (this._showInline) {
                return this._isInlineOpen;
            }
            return this._dropdown.isShown;
        },
        set: function (value) {
            if (value) {
                this.show();
            }
            else {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDropdownDirective.prototype, "isBs4", {
        get: function () {
            return !Object(__WEBPACK_IMPORTED_MODULE_6__utils_theme_provider__["a" /* isBs3 */])();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDropdownDirective.prototype, "_showInline", {
        get: function () {
            return !this.container;
        },
        enumerable: true,
        configurable: true
    });
    BsDropdownDirective.prototype.ngOnInit = function () {
        var _this = this;
        // fix: seems there are an issue with `routerLinkActive`
        // which result in duplicated call ngOnInit without call to ngOnDestroy
        // read more: https://github.com/valor-software/ngx-bootstrap/issues/1885
        if (this._isInited) {
            return;
        }
        this._isInited = true;
        // attach DOM listeners
        this._dropdown.listen({
            // because of dropdown inline mode
            outsideClick: false,
            triggers: this.triggers,
            show: function () { return _this.show(); }
        });
        // toggle visibility on toggle element click
        this._subscriptions.push(this._state.toggleClick.subscribe(function (value) { return _this.toggle(value); }));
        // hide dropdown if set disabled while opened
        this._subscriptions.push(this._state.isDisabledChange
            .filter(function (value) { return value; })
            .subscribe(function (value) { return _this.hide(); }));
    };
    /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    BsDropdownDirective.prototype.show = function () {
        var _this = this;
        if (this.isOpen || this.isDisabled) {
            return;
        }
        if (this._showInline) {
            if (!this._inlinedMenu) {
                this._state.dropdownMenu.then(function (dropdownMenu) {
                    _this._dropdown.attachInline(dropdownMenu.viewContainer, dropdownMenu.templateRef);
                    _this._inlinedMenu = _this._dropdown._inlineViewRef;
                    _this.addBs4Polyfills();
                })
                    .catch();
            }
            this.addBs4Polyfills();
            this._isInlineOpen = true;
            this.onShown.emit(true);
            this._state.isOpenChange.emit(true);
            return;
        }
        this._state.dropdownMenu.then(function (dropdownMenu) {
            // check direction in which dropdown should be opened
            var _dropup = _this.dropup ||
                (typeof _this.dropup !== 'undefined' && _this.dropup);
            _this._state.direction = _dropup ? 'up' : 'down';
            var _placement = _this.placement || (_dropup ? 'top left' : 'bottom left');
            // show dropdown
            _this._dropdown
                .attach(__WEBPACK_IMPORTED_MODULE_4__bs_dropdown_container_component__["a" /* BsDropdownContainerComponent */])
                .to(_this.container)
                .position({ attachment: _placement })
                .show({
                content: dropdownMenu.templateRef,
                placement: _placement
            });
            _this._state.isOpenChange.emit(true);
        })
            .catch();
    };
    /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    BsDropdownDirective.prototype.hide = function () {
        if (!this.isOpen) {
            return;
        }
        if (this._showInline) {
            this.removeShowClass();
            this.removeDropupStyles();
            this._isInlineOpen = false;
            this.onHidden.emit(true);
        }
        else {
            this._dropdown.hide();
        }
        this._state.isOpenChange.emit(false);
    };
    /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover. With parameter <code>true</code> allows toggling, with parameter <code>false</code>
     * only hides opened dropdown. Parameter usage will be removed in ngx-bootstrap v3
     */
    BsDropdownDirective.prototype.toggle = function (value) {
        if (this.isOpen || !value) {
            return this.hide();
        }
        return this.show();
    };
    BsDropdownDirective.prototype.ngOnDestroy = function () {
        // clean up subscriptions and destroy dropdown
        for (var _i = 0, _a = this._subscriptions; _i < _a.length; _i++) {
            var sub = _a[_i];
            sub.unsubscribe();
        }
        this._dropdown.dispose();
    };
    BsDropdownDirective.prototype.addBs4Polyfills = function () {
        if (!Object(__WEBPACK_IMPORTED_MODULE_6__utils_theme_provider__["a" /* isBs3 */])()) {
            this.addShowClass();
            this.checkRightAlignment();
            this.addDropupStyles();
        }
    };
    BsDropdownDirective.prototype.addShowClass = function () {
        if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
            this._renderer.addClass(this._inlinedMenu.rootNodes[0], 'show');
        }
    };
    BsDropdownDirective.prototype.removeShowClass = function () {
        if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
            this._renderer.removeClass(this._inlinedMenu.rootNodes[0], 'show');
        }
    };
    BsDropdownDirective.prototype.checkRightAlignment = function () {
        if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
            var isRightAligned = this._inlinedMenu.rootNodes[0].classList.contains('dropdown-menu-right');
            this._renderer.setStyle(this._inlinedMenu.rootNodes[0], 'left', isRightAligned ? 'auto' : '0');
            this._renderer.setStyle(this._inlinedMenu.rootNodes[0], 'right', isRightAligned ? '0' : 'auto');
        }
    };
    BsDropdownDirective.prototype.addDropupStyles = function () {
        if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
            // a little hack to not break support of bootstrap 4 beta
            this._renderer.setStyle(this._inlinedMenu.rootNodes[0], 'top', this.dropup ? 'auto' : '100%');
            this._renderer.setStyle(this._inlinedMenu.rootNodes[0], 'transform', this.dropup ? 'translateY(-101%)' : 'translateY(0)');
        }
    };
    BsDropdownDirective.prototype.removeDropupStyles = function () {
        if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
            this._renderer.removeStyle(this._inlinedMenu.rootNodes[0], 'top');
            this._renderer.removeStyle(this._inlinedMenu.rootNodes[0], 'transform');
        }
    };
    BsDropdownDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[bsDropdown],[dropdown]',
                    exportAs: 'bs-dropdown',
                    providers: [__WEBPACK_IMPORTED_MODULE_5__bs_dropdown_state__["a" /* BsDropdownState */]],
                    host: {
                        '[class.dropup]': 'dropup',
                        '[class.open]': 'isOpen',
                        '[class.show]': 'isOpen && isBs4'
                    }
                },] },
    ];
    /** @nocollapse */
    BsDropdownDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_2__component_loader_index__["a" /* ComponentLoaderFactory */], },
        { type: __WEBPACK_IMPORTED_MODULE_3__bs_dropdown_config__["a" /* BsDropdownConfig */], },
        { type: __WEBPACK_IMPORTED_MODULE_5__bs_dropdown_state__["a" /* BsDropdownState */], },
    ]; };
    BsDropdownDirective.propDecorators = {
        'placement': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'triggers': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'container': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'dropup': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'autoClose': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'isDisabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'isOpen': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'isOpenChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'onShown': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'onHidden': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    };
    return BsDropdownDirective;
}());

//# sourceMappingURL=bs-dropdown.directive.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/dropdown/bs-dropdown.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BsDropdownModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component_loader_index__ = __webpack_require__("./node_modules/ngx-bootstrap/component-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__positioning_index__ = __webpack_require__("./node_modules/ngx-bootstrap/positioning/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bs_dropdown_container_component__ = __webpack_require__("./node_modules/ngx-bootstrap/dropdown/bs-dropdown-container.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bs_dropdown_menu_directive__ = __webpack_require__("./node_modules/ngx-bootstrap/dropdown/bs-dropdown-menu.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bs_dropdown_toggle_directive__ = __webpack_require__("./node_modules/ngx-bootstrap/dropdown/bs-dropdown-toggle.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__bs_dropdown_config__ = __webpack_require__("./node_modules/ngx-bootstrap/dropdown/bs-dropdown.config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__bs_dropdown_directive__ = __webpack_require__("./node_modules/ngx-bootstrap/dropdown/bs-dropdown.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__bs_dropdown_state__ = __webpack_require__("./node_modules/ngx-bootstrap/dropdown/bs-dropdown.state.js");









var BsDropdownModule = (function () {
    function BsDropdownModule() {
    }
    BsDropdownModule.forRoot = function (config) {
        return {
            ngModule: BsDropdownModule,
            providers: [
                __WEBPACK_IMPORTED_MODULE_1__component_loader_index__["a" /* ComponentLoaderFactory */],
                __WEBPACK_IMPORTED_MODULE_2__positioning_index__["a" /* PositioningService */],
                __WEBPACK_IMPORTED_MODULE_8__bs_dropdown_state__["a" /* BsDropdownState */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_6__bs_dropdown_config__["a" /* BsDropdownConfig */],
                    useValue: config ? config : { autoClose: true }
                }
            ]
        };
    };
    BsDropdownModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    declarations: [
                        __WEBPACK_IMPORTED_MODULE_4__bs_dropdown_menu_directive__["a" /* BsDropdownMenuDirective */],
                        __WEBPACK_IMPORTED_MODULE_5__bs_dropdown_toggle_directive__["a" /* BsDropdownToggleDirective */],
                        __WEBPACK_IMPORTED_MODULE_3__bs_dropdown_container_component__["a" /* BsDropdownContainerComponent */],
                        __WEBPACK_IMPORTED_MODULE_7__bs_dropdown_directive__["a" /* BsDropdownDirective */]
                    ],
                    exports: [
                        __WEBPACK_IMPORTED_MODULE_4__bs_dropdown_menu_directive__["a" /* BsDropdownMenuDirective */],
                        __WEBPACK_IMPORTED_MODULE_5__bs_dropdown_toggle_directive__["a" /* BsDropdownToggleDirective */],
                        __WEBPACK_IMPORTED_MODULE_7__bs_dropdown_directive__["a" /* BsDropdownDirective */]
                    ],
                    entryComponents: [__WEBPACK_IMPORTED_MODULE_3__bs_dropdown_container_component__["a" /* BsDropdownContainerComponent */]]
                },] },
    ];
    /** @nocollapse */
    BsDropdownModule.ctorParameters = function () { return []; };
    return BsDropdownModule;
}());

//# sourceMappingURL=bs-dropdown.module.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/dropdown/bs-dropdown.state.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsDropdownState; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");

var BsDropdownState = (function () {
    function BsDropdownState() {
        var _this = this;
        this.direction = 'down';
        this.isOpenChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.isDisabledChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.toggleClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.dropdownMenu = new Promise(function (resolve) {
            _this.resolveDropdownMenu = resolve;
        });
    }
    BsDropdownState.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    BsDropdownState.ctorParameters = function () { return []; };
    return BsDropdownState;
}());

//# sourceMappingURL=bs-dropdown.state.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/dropdown/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bs_dropdown_directive__ = __webpack_require__("./node_modules/ngx-bootstrap/dropdown/bs-dropdown.directive.js");
/* unused harmony reexport BsDropdownDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bs_dropdown_menu_directive__ = __webpack_require__("./node_modules/ngx-bootstrap/dropdown/bs-dropdown-menu.directive.js");
/* unused harmony reexport BsDropdownMenuDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bs_dropdown_toggle_directive__ = __webpack_require__("./node_modules/ngx-bootstrap/dropdown/bs-dropdown-toggle.directive.js");
/* unused harmony reexport BsDropdownToggleDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bs_dropdown_container_component__ = __webpack_require__("./node_modules/ngx-bootstrap/dropdown/bs-dropdown-container.component.js");
/* unused harmony reexport BsDropdownContainerComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bs_dropdown_state__ = __webpack_require__("./node_modules/ngx-bootstrap/dropdown/bs-dropdown.state.js");
/* unused harmony reexport BsDropdownState */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bs_dropdown_config__ = __webpack_require__("./node_modules/ngx-bootstrap/dropdown/bs-dropdown.config.js");
/* unused harmony reexport BsDropdownConfig */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__bs_dropdown_module__ = __webpack_require__("./node_modules/ngx-bootstrap/dropdown/bs-dropdown.module.js");
/* unused harmony reexport BsDropdownModule */







//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chronos_locale_locales__ = __webpack_require__("./node_modules/ngx-bootstrap/chronos/locale/locales.js");
/* unused harmony reexport listLocales */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_theme_provider__ = __webpack_require__("./node_modules/ngx-bootstrap/utils/theme-provider.js");
/* unused harmony reexport setTheme */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accordion_index__ = __webpack_require__("./node_modules/ngx-bootstrap/accordion/index.js");
/* unused harmony reexport AccordionComponent */
/* unused harmony reexport AccordionConfig */
/* unused harmony reexport AccordionModule */
/* unused harmony reexport AccordionPanelComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__alert_index__ = __webpack_require__("./node_modules/ngx-bootstrap/alert/index.js");
/* unused harmony reexport AlertComponent */
/* unused harmony reexport AlertConfig */
/* unused harmony reexport AlertModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__buttons_index__ = __webpack_require__("./node_modules/ngx-bootstrap/buttons/index.js");
/* unused harmony reexport ButtonCheckboxDirective */
/* unused harmony reexport ButtonRadioDirective */
/* unused harmony reexport ButtonsModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__carousel_index__ = __webpack_require__("./node_modules/ngx-bootstrap/carousel/index.js");
/* unused harmony reexport CarouselComponent */
/* unused harmony reexport CarouselConfig */
/* unused harmony reexport CarouselModule */
/* unused harmony reexport SlideComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__collapse_index__ = __webpack_require__("./node_modules/ngx-bootstrap/collapse/index.js");
/* unused harmony reexport CollapseDirective */
/* unused harmony reexport CollapseModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__datepicker_index__ = __webpack_require__("./node_modules/ngx-bootstrap/datepicker/index.js");
/* unused harmony reexport DateFormatter */
/* unused harmony reexport DatePickerComponent */
/* unused harmony reexport DatepickerConfig */
/* unused harmony reexport DatepickerModule */
/* unused harmony reexport DayPickerComponent */
/* unused harmony reexport MonthPickerComponent */
/* unused harmony reexport YearPickerComponent */
/* unused harmony reexport BsDatepickerModule */
/* unused harmony reexport BsDatepickerConfig */
/* unused harmony reexport BsDaterangepickerConfig */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_7__datepicker_index__["b"]; });
/* unused harmony reexport BsDaterangepickerDirective */
/* unused harmony reexport BsDatepickerDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modal_index__ = __webpack_require__("./node_modules/ngx-bootstrap/modal/index.js");
/* unused harmony reexport ModalDirective */
/* unused harmony reexport ModalOptions */
/* unused harmony reexport ModalBackdropOptions */
/* unused harmony reexport ModalBackdropComponent */
/* unused harmony reexport ModalModule */
/* unused harmony reexport BsModalRef */
/* unused harmony reexport BsModalService */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dropdown_index__ = __webpack_require__("./node_modules/ngx-bootstrap/dropdown/index.js");
/* unused harmony reexport BsDropdownModule */
/* unused harmony reexport BsDropdownConfig */
/* unused harmony reexport BsDropdownState */
/* unused harmony reexport BsDropdownContainerComponent */
/* unused harmony reexport BsDropdownDirective */
/* unused harmony reexport BsDropdownMenuDirective */
/* unused harmony reexport BsDropdownToggleDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pagination_index__ = __webpack_require__("./node_modules/ngx-bootstrap/pagination/index.js");
/* unused harmony reexport PagerComponent */
/* unused harmony reexport PaginationComponent */
/* unused harmony reexport PaginationConfig */
/* unused harmony reexport PaginationModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__progressbar_index__ = __webpack_require__("./node_modules/ngx-bootstrap/progressbar/index.js");
/* unused harmony reexport BarComponent */
/* unused harmony reexport ProgressbarComponent */
/* unused harmony reexport ProgressbarConfig */
/* unused harmony reexport ProgressbarModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__rating_index__ = __webpack_require__("./node_modules/ngx-bootstrap/rating/index.js");
/* unused harmony reexport RatingComponent */
/* unused harmony reexport RatingModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__sortable_index__ = __webpack_require__("./node_modules/ngx-bootstrap/sortable/index.js");
/* unused harmony reexport DraggableItemService */
/* unused harmony reexport SortableComponent */
/* unused harmony reexport SortableModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__tabs_index__ = __webpack_require__("./node_modules/ngx-bootstrap/tabs/index.js");
/* unused harmony reexport NgTranscludeDirective */
/* unused harmony reexport TabDirective */
/* unused harmony reexport TabHeadingDirective */
/* unused harmony reexport TabsetComponent */
/* unused harmony reexport TabsetConfig */
/* unused harmony reexport TabsModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__timepicker_index__ = __webpack_require__("./node_modules/ngx-bootstrap/timepicker/index.js");
/* unused harmony reexport TimepickerComponent */
/* unused harmony reexport TimepickerConfig */
/* unused harmony reexport TimepickerModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__tooltip_index__ = __webpack_require__("./node_modules/ngx-bootstrap/tooltip/index.js");
/* unused harmony reexport TooltipConfig */
/* unused harmony reexport TooltipContainerComponent */
/* unused harmony reexport TooltipDirective */
/* unused harmony reexport TooltipModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__typeahead_index__ = __webpack_require__("./node_modules/ngx-bootstrap/typeahead/index.js");
/* unused harmony reexport TypeaheadOptions */
/* unused harmony reexport TypeaheadContainerComponent */
/* unused harmony reexport TypeaheadDirective */
/* unused harmony reexport TypeaheadMatch */
/* unused harmony reexport TypeaheadModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__popover_index__ = __webpack_require__("./node_modules/ngx-bootstrap/popover/index.js");
/* unused harmony reexport PopoverConfig */
/* unused harmony reexport PopoverContainerComponent */
/* unused harmony reexport PopoverDirective */
/* unused harmony reexport PopoverModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__utils_index__ = __webpack_require__("./node_modules/ngx-bootstrap/utils/index.js");
/* unused harmony reexport OnChange */
/* unused harmony reexport LinkedList */
/* unused harmony reexport isBs3 */
/* unused harmony reexport Trigger */
/* unused harmony reexport Utils */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__component_loader_index__ = __webpack_require__("./node_modules/ngx-bootstrap/component-loader/index.js");
/* unused harmony reexport ComponentLoader */
/* unused harmony reexport ComponentLoaderFactory */
/* unused harmony reexport ContentRef */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__positioning_index__ = __webpack_require__("./node_modules/ngx-bootstrap/positioning/index.js");
/* unused harmony reexport Positioning */
/* unused harmony reexport PositioningService */
/* unused harmony reexport positionElements */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__chronos_index__ = __webpack_require__("./node_modules/ngx-bootstrap/chronos/index.js");
/* unused harmony reexport defineLocale */
/* unused harmony reexport getSetGlobalLocale */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__locale__ = __webpack_require__("./node_modules/ngx-bootstrap/locale.js");
/* unused harmony namespace reexport */
























//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/pagination/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pager_component__ = __webpack_require__("./node_modules/ngx-bootstrap/pagination/pager.component.js");
/* unused harmony reexport PagerComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pagination_component__ = __webpack_require__("./node_modules/ngx-bootstrap/pagination/pagination.component.js");
/* unused harmony reexport PaginationComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pagination_module__ = __webpack_require__("./node_modules/ngx-bootstrap/pagination/pagination.module.js");
/* unused harmony reexport PaginationModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pagination_config__ = __webpack_require__("./node_modules/ngx-bootstrap/pagination/pagination.config.js");
/* unused harmony reexport PaginationConfig */




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/pagination/pager.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PAGER_CONTROL_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pagination_config__ = __webpack_require__("./node_modules/ngx-bootstrap/pagination/pagination.config.js");



var PAGER_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"],
    // tslint:disable-next-line
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return PagerComponent; }),
    multi: true
};
var PagerComponent = (function () {
    function PagerComponent(renderer, elementRef, paginationConfig, changeDetection) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.changeDetection = changeDetection;
        /** fired when total pages count changes, $event:number equals to total pages count */
        this.numPages = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** fired when page was changed, $event:{page, itemsPerPage} equals to
         * object with current page index and number of items per page
         */
        this.pageChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.inited = false;
        this._page = 1;
        this.renderer = renderer;
        this.elementRef = elementRef;
        if (!this.config) {
            this.configureOptions(Object.assign({}, paginationConfig.main, paginationConfig.pager));
        }
    }
    Object.defineProperty(PagerComponent.prototype, "itemsPerPage", {
        /** maximum number of items per page. If value less than 1 will display all items on one page */
        get: function () {
            return this._itemsPerPage;
        },
        set: function (v) {
            this._itemsPerPage = v;
            this.totalPages = this.calculateTotalPages();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagerComponent.prototype, "totalItems", {
        /** total number of items in all pages */
        get: function () {
            return this._totalItems;
        },
        set: function (v) {
            this._totalItems = v;
            this.totalPages = this.calculateTotalPages();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagerComponent.prototype, "totalPages", {
        get: function () {
            return this._totalPages;
        },
        set: function (v) {
            this._totalPages = v;
            this.numPages.emit(v);
            if (this.inited) {
                this.selectPage(this.page);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagerComponent.prototype, "page", {
        get: function () {
            return this._page;
        },
        set: function (value) {
            var _previous = this._page;
            this._page = value > this.totalPages ? this.totalPages : value || 1;
            this.changeDetection.markForCheck();
            if (_previous === this._page || typeof _previous === 'undefined') {
                return;
            }
            this.pageChanged.emit({
                page: this._page,
                itemsPerPage: this.itemsPerPage
            });
        },
        enumerable: true,
        configurable: true
    });
    PagerComponent.prototype.configureOptions = function (config) {
        this.config = Object.assign({}, config);
    };
    PagerComponent.prototype.ngOnInit = function () {
        if (typeof window !== 'undefined') {
            this.classMap = this.elementRef.nativeElement.getAttribute('class') || '';
        }
        // watch for maxSize
        this.maxSize =
            typeof this.maxSize !== 'undefined' ? this.maxSize : this.config.maxSize;
        this.rotate =
            typeof this.rotate !== 'undefined' ? this.rotate : this.config.rotate;
        this.boundaryLinks =
            typeof this.boundaryLinks !== 'undefined'
                ? this.boundaryLinks
                : this.config.boundaryLinks;
        this.directionLinks =
            typeof this.directionLinks !== 'undefined'
                ? this.directionLinks
                : this.config.directionLinks;
        this.pageBtnClass =
            typeof this.pageBtnClass !== 'undefined'
                ? this.pageBtnClass
                : this.config.pageBtnClass;
        // base class
        this.itemsPerPage =
            typeof this.itemsPerPage !== 'undefined'
                ? this.itemsPerPage
                : this.config.itemsPerPage;
        this.totalPages = this.calculateTotalPages();
        // this class
        this.pages = this.getPages(this.page, this.totalPages);
        this.inited = true;
    };
    PagerComponent.prototype.writeValue = function (value) {
        this.page = value;
        this.pages = this.getPages(this.page, this.totalPages);
    };
    PagerComponent.prototype.getText = function (key) {
        return this[key + "Text"] || this.config[key + "Text"];
    };
    PagerComponent.prototype.noPrevious = function () {
        return this.page === 1;
    };
    PagerComponent.prototype.noNext = function () {
        return this.page === this.totalPages;
    };
    PagerComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    PagerComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    PagerComponent.prototype.selectPage = function (page, event) {
        if (event) {
            event.preventDefault();
        }
        if (!this.disabled) {
            if (event && event.target) {
                var target = event.target;
                target.blur();
            }
            this.writeValue(page);
            this.onChange(this.page);
        }
    };
    // Create page object used in template
    PagerComponent.prototype.makePage = function (num, text, active) {
        return { text: text, number: num, active: active };
    };
    PagerComponent.prototype.getPages = function (currentPage, totalPages) {
        var pages = [];
        // Default page limits
        var startPage = 1;
        var endPage = totalPages;
        var isMaxSized = typeof this.maxSize !== 'undefined' && this.maxSize < totalPages;
        // recompute if maxSize
        if (isMaxSized) {
            if (this.rotate) {
                // Current page is displayed in the middle of the visible ones
                startPage = Math.max(currentPage - Math.floor(this.maxSize / 2), 1);
                endPage = startPage + this.maxSize - 1;
                // Adjust if limit is exceeded
                if (endPage > totalPages) {
                    endPage = totalPages;
                    startPage = endPage - this.maxSize + 1;
                }
            }
            else {
                // Visible pages are paginated with maxSize
                startPage =
                    (Math.ceil(currentPage / this.maxSize) - 1) * this.maxSize + 1;
                // Adjust last page if limit is exceeded
                endPage = Math.min(startPage + this.maxSize - 1, totalPages);
            }
        }
        // Add page number links
        for (var num = startPage; num <= endPage; num++) {
            var page = this.makePage(num, num.toString(), num === currentPage);
            pages.push(page);
        }
        // Add links to move between page sets
        if (isMaxSized && !this.rotate) {
            if (startPage > 1) {
                var previousPageSet = this.makePage(startPage - 1, '...', false);
                pages.unshift(previousPageSet);
            }
            if (endPage < totalPages) {
                var nextPageSet = this.makePage(endPage + 1, '...', false);
                pages.push(nextPageSet);
            }
        }
        return pages;
    };
    // base class
    PagerComponent.prototype.calculateTotalPages = function () {
        var totalPages = this.itemsPerPage < 1
            ? 1
            : Math.ceil(this.totalItems / this.itemsPerPage);
        return Math.max(totalPages || 0, 1);
    };
    PagerComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'pager',
                    template: "<ul class=\"pager\"> <li [class.disabled]=\"noPrevious()\" [class.previous]=\"align\" [ngClass]=\"{'pull-right': align, 'float-right': align}\" class=\"{{ pageBtnClass }}\"> <a href (click)=\"selectPage(page - 1, $event)\">{{ getText('previous') }}</a> </li> <li [class.disabled]=\"noNext()\" [class.next]=\"align\" [ngClass]=\"{'pull-right': align, 'float-right': align}\" class=\"{{ pageBtnClass }}\"> <a href (click)=\"selectPage(page + 1, $event)\">{{ getText('next') }}</a> </li> </ul> ",
                    providers: [PAGER_CONTROL_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    PagerComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_2__pagination_config__["a" /* PaginationConfig */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], },
    ]; };
    PagerComponent.propDecorators = {
        'align': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'maxSize': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'boundaryLinks': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'directionLinks': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'firstText': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'previousText': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'nextText': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'lastText': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'rotate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'pageBtnClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'disabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'numPages': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'pageChanged': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'itemsPerPage': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'totalItems': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return PagerComponent;
}());

//# sourceMappingURL=pager.component.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/pagination/pagination.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PAGINATION_CONTROL_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pagination_config__ = __webpack_require__("./node_modules/ngx-bootstrap/pagination/pagination.config.js");



var PAGINATION_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"],
    // tslint:disable-next-line
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return PaginationComponent; }),
    multi: true
};
var PaginationComponent = (function () {
    function PaginationComponent(renderer, elementRef, paginationConfig, changeDetection) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.changeDetection = changeDetection;
        /** fired when total pages count changes, $event:number equals to total pages count */
        this.numPages = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** fired when page was changed, $event:{page, itemsPerPage} equals to object
         * with current page index and number of items per page
         */
        this.pageChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.inited = false;
        this._page = 1;
        this.renderer = renderer;
        this.elementRef = elementRef;
        if (!this.config) {
            this.configureOptions(paginationConfig.main);
        }
    }
    Object.defineProperty(PaginationComponent.prototype, "itemsPerPage", {
        /** maximum number of items per page. If value less than 1 will display all items on one page */
        get: function () {
            return this._itemsPerPage;
        },
        set: function (v) {
            this._itemsPerPage = v;
            this.totalPages = this.calculateTotalPages();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "totalItems", {
        /** total number of items in all pages */
        get: function () {
            return this._totalItems;
        },
        set: function (v) {
            this._totalItems = v;
            this.totalPages = this.calculateTotalPages();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "totalPages", {
        get: function () {
            return this._totalPages;
        },
        set: function (v) {
            this._totalPages = v;
            this.numPages.emit(v);
            if (this.inited) {
                this.selectPage(this.page);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "page", {
        get: function () {
            return this._page;
        },
        set: function (value) {
            var _previous = this._page;
            this._page = value > this.totalPages ? this.totalPages : value || 1;
            this.changeDetection.markForCheck();
            if (_previous === this._page || typeof _previous === 'undefined') {
                return;
            }
            this.pageChanged.emit({
                page: this._page,
                itemsPerPage: this.itemsPerPage
            });
        },
        enumerable: true,
        configurable: true
    });
    PaginationComponent.prototype.configureOptions = function (config) {
        this.config = Object.assign({}, config);
    };
    PaginationComponent.prototype.ngOnInit = function () {
        if (typeof window !== 'undefined') {
            this.classMap = this.elementRef.nativeElement.getAttribute('class') || '';
        }
        // watch for maxSize
        this.maxSize =
            typeof this.maxSize !== 'undefined' ? this.maxSize : this.config.maxSize;
        this.rotate =
            typeof this.rotate !== 'undefined' ? this.rotate : this.config.rotate;
        this.boundaryLinks =
            typeof this.boundaryLinks !== 'undefined'
                ? this.boundaryLinks
                : this.config.boundaryLinks;
        this.directionLinks =
            typeof this.directionLinks !== 'undefined'
                ? this.directionLinks
                : this.config.directionLinks;
        this.pageBtnClass =
            typeof this.pageBtnClass !== 'undefined'
                ? this.pageBtnClass
                : this.config.pageBtnClass;
        // base class
        this.itemsPerPage =
            typeof this.itemsPerPage !== 'undefined'
                ? this.itemsPerPage
                : this.config.itemsPerPage;
        this.totalPages = this.calculateTotalPages();
        // this class
        this.pages = this.getPages(this.page, this.totalPages);
        this.inited = true;
    };
    PaginationComponent.prototype.writeValue = function (value) {
        this.page = value;
        this.pages = this.getPages(this.page, this.totalPages);
    };
    PaginationComponent.prototype.getText = function (key) {
        return this[key + "Text"] || this.config[key + "Text"];
    };
    PaginationComponent.prototype.noPrevious = function () {
        return this.page === 1;
    };
    PaginationComponent.prototype.noNext = function () {
        return this.page === this.totalPages;
    };
    PaginationComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    PaginationComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    PaginationComponent.prototype.selectPage = function (page, event) {
        if (event) {
            event.preventDefault();
        }
        if (!this.disabled) {
            if (event && event.target) {
                var target = event.target;
                target.blur();
            }
            this.writeValue(page);
            this.onChange(this.page);
        }
    };
    // Create page object used in template
    PaginationComponent.prototype.makePage = function (num, text, active) {
        return { text: text, number: num, active: active };
    };
    PaginationComponent.prototype.getPages = function (currentPage, totalPages) {
        var pages = [];
        // Default page limits
        var startPage = 1;
        var endPage = totalPages;
        var isMaxSized = typeof this.maxSize !== 'undefined' && this.maxSize < totalPages;
        // recompute if maxSize
        if (isMaxSized) {
            if (this.rotate) {
                // Current page is displayed in the middle of the visible ones
                startPage = Math.max(currentPage - Math.floor(this.maxSize / 2), 1);
                endPage = startPage + this.maxSize - 1;
                // Adjust if limit is exceeded
                if (endPage > totalPages) {
                    endPage = totalPages;
                    startPage = endPage - this.maxSize + 1;
                }
            }
            else {
                // Visible pages are paginated with maxSize
                startPage =
                    (Math.ceil(currentPage / this.maxSize) - 1) * this.maxSize + 1;
                // Adjust last page if limit is exceeded
                endPage = Math.min(startPage + this.maxSize - 1, totalPages);
            }
        }
        // Add page number links
        for (var num = startPage; num <= endPage; num++) {
            var page = this.makePage(num, num.toString(), num === currentPage);
            pages.push(page);
        }
        // Add links to move between page sets
        if (isMaxSized && !this.rotate) {
            if (startPage > 1) {
                var previousPageSet = this.makePage(startPage - 1, '...', false);
                pages.unshift(previousPageSet);
            }
            if (endPage < totalPages) {
                var nextPageSet = this.makePage(endPage + 1, '...', false);
                pages.push(nextPageSet);
            }
        }
        return pages;
    };
    // base class
    PaginationComponent.prototype.calculateTotalPages = function () {
        var totalPages = this.itemsPerPage < 1
            ? 1
            : Math.ceil(this.totalItems / this.itemsPerPage);
        return Math.max(totalPages || 0, 1);
    };
    PaginationComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'pagination',
                    template: "<ul class=\"pagination\" [ngClass]=\"classMap\"> <li class=\"pagination-first page-item\" *ngIf=\"boundaryLinks\" [class.disabled]=\"noPrevious()||disabled\"> <a class=\"page-link\" href (click)=\"selectPage(1, $event)\" [innerHTML]=\"getText('first')\"></a> </li> <li class=\"pagination-prev page-item\" *ngIf=\"directionLinks\" [class.disabled]=\"noPrevious()||disabled\"> <a class=\"page-link\" href (click)=\"selectPage(page - 1, $event)\" [innerHTML]=\"getText('previous')\"></a> </li> <li *ngFor=\"let pg of pages\" [class.active]=\"pg.active\" [class.disabled]=\"disabled&&!pg.active\" class=\"pagination-page page-item\"> <a class=\"page-link\" href (click)=\"selectPage(pg.number, $event)\" [innerHTML]=\"pg.text\"></a> </li> <li class=\"pagination-next page-item\" *ngIf=\"directionLinks\" [class.disabled]=\"noNext()||disabled\"> <a class=\"page-link\" href (click)=\"selectPage(page + 1, $event)\" [innerHTML]=\"getText('next')\"></a></li> <li class=\"pagination-last page-item\" *ngIf=\"boundaryLinks\" [class.disabled]=\"noNext()||disabled\"> <a class=\"page-link\" href (click)=\"selectPage(totalPages, $event)\" [innerHTML]=\"getText('last')\"></a></li> </ul> ",
                    providers: [PAGINATION_CONTROL_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    PaginationComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_2__pagination_config__["a" /* PaginationConfig */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], },
    ]; };
    PaginationComponent.propDecorators = {
        'align': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'maxSize': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'boundaryLinks': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'directionLinks': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'firstText': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'previousText': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'nextText': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'lastText': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'rotate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'pageBtnClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'disabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'numPages': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'pageChanged': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'itemsPerPage': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'totalItems': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return PaginationComponent;
}());

//# sourceMappingURL=pagination.component.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/pagination/pagination.config.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginationConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
// todo: split

/** Provides default values for Pagination and pager components */
var PaginationConfig = (function () {
    function PaginationConfig() {
        this.main = {
            maxSize: void 0,
            itemsPerPage: 10,
            boundaryLinks: false,
            directionLinks: true,
            firstText: 'First',
            previousText: 'Previous',
            nextText: 'Next',
            lastText: 'Last',
            pageBtnClass: '',
            rotate: true
        };
        this.pager = {
            itemsPerPage: 15,
            previousText: '« Previous',
            nextText: 'Next »',
            pageBtnClass: '',
            align: true
        };
    }
    PaginationConfig.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    PaginationConfig.ctorParameters = function () { return []; };
    return PaginationConfig;
}());

//# sourceMappingURL=pagination.config.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/pagination/pagination.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PaginationModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pagination_config__ = __webpack_require__("./node_modules/ngx-bootstrap/pagination/pagination.config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pager_component__ = __webpack_require__("./node_modules/ngx-bootstrap/pagination/pager.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pagination_component__ = __webpack_require__("./node_modules/ngx-bootstrap/pagination/pagination.component.js");





var PaginationModule = (function () {
    function PaginationModule() {
    }
    PaginationModule.forRoot = function () {
        return { ngModule: PaginationModule, providers: [__WEBPACK_IMPORTED_MODULE_2__pagination_config__["a" /* PaginationConfig */]] };
    };
    PaginationModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"]],
                    declarations: [__WEBPACK_IMPORTED_MODULE_3__pager_component__["a" /* PagerComponent */], __WEBPACK_IMPORTED_MODULE_4__pagination_component__["a" /* PaginationComponent */]],
                    exports: [__WEBPACK_IMPORTED_MODULE_3__pager_component__["a" /* PagerComponent */], __WEBPACK_IMPORTED_MODULE_4__pagination_component__["a" /* PaginationComponent */]]
                },] },
    ];
    /** @nocollapse */
    PaginationModule.ctorParameters = function () { return []; };
    return PaginationModule;
}());

//# sourceMappingURL=pagination.module.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/popover/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__popover_directive__ = __webpack_require__("./node_modules/ngx-bootstrap/popover/popover.directive.js");
/* unused harmony reexport PopoverDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__popover_module__ = __webpack_require__("./node_modules/ngx-bootstrap/popover/popover.module.js");
/* unused harmony reexport PopoverModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__popover_config__ = __webpack_require__("./node_modules/ngx-bootstrap/popover/popover.config.js");
/* unused harmony reexport PopoverConfig */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__popover_container_component__ = __webpack_require__("./node_modules/ngx-bootstrap/popover/popover-container.component.js");
/* unused harmony reexport PopoverContainerComponent */




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/popover/popover-container.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__popover_config__ = __webpack_require__("./node_modules/ngx-bootstrap/popover/popover.config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_theme_provider__ = __webpack_require__("./node_modules/ngx-bootstrap/utils/theme-provider.js");



var PopoverContainerComponent = (function () {
    function PopoverContainerComponent(config) {
        Object.assign(this, config);
    }
    Object.defineProperty(PopoverContainerComponent.prototype, "isBs3", {
        get: function () {
            return Object(__WEBPACK_IMPORTED_MODULE_2__utils_theme_provider__["a" /* isBs3 */])();
        },
        enumerable: true,
        configurable: true
    });
    PopoverContainerComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'popover-container',
                    changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
                    // tslint:disable-next-line
                    host: {
                        '[class]': '"popover in popover-" + placement + " " + "bs-popover-" + placement + " " + placement + " " + containerClass',
                        '[class.show]': '!isBs3',
                        role: 'tooltip',
                        style: 'display:block;'
                    },
                    styles: [
                        "\n    :host.bs-popover-top .arrow, :host.bs-popover-bottom .arrow {\n      left: 50%;\n      margin-left: -8px;\n    }\n    :host.bs-popover-left .arrow, :host.bs-popover-right .arrow {\n      top: 50%;\n      margin-top: -8px;\n    }\n  "
                    ],
                    template: "<div class=\"popover-arrow arrow\"></div> <h3 class=\"popover-title popover-header\" *ngIf=\"title\">{{ title }}</h3> <div class=\"popover-content popover-body\"> <ng-content></ng-content> </div> "
                },] },
    ];
    /** @nocollapse */
    PopoverContainerComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__popover_config__["a" /* PopoverConfig */], },
    ]; };
    PopoverContainerComponent.propDecorators = {
        'placement': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'title': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return PopoverContainerComponent;
}());

//# sourceMappingURL=popover-container.component.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/popover/popover.config.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");

/**
 * Configuration service for the Popover directive.
 * You can inject this service, typically in your root component, and customize
 * the values of its properties in order to provide default values for all the
 * popovers used in the application.
 */
var PopoverConfig = (function () {
    function PopoverConfig() {
        /**
         * Placement of a popover. Accepts: "top", "bottom", "left", "right", "auto"
         */
        this.placement = 'top';
        /**
         * Specifies events that should trigger. Supports a space separated list of
         * event names.
         */
        this.triggers = 'click';
        this.outsideClick = false;
    }
    PopoverConfig.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    PopoverConfig.ctorParameters = function () { return []; };
    return PopoverConfig;
}());

//# sourceMappingURL=popover.config.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/popover/popover.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__popover_config__ = __webpack_require__("./node_modules/ngx-bootstrap/popover/popover.config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_loader_index__ = __webpack_require__("./node_modules/ngx-bootstrap/component-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__popover_container_component__ = __webpack_require__("./node_modules/ngx-bootstrap/popover/popover-container.component.js");




/**
 * A lightweight, extensible directive for fancy popover creation.
 */
var PopoverDirective = (function () {
    function PopoverDirective(_elementRef, _renderer, _viewContainerRef, _config, cis) {
        /**
         * Close popover on outside click
         */
        this.outsideClick = false;
        /**
         * Css class for popover container
         */
        this.containerClass = '';
        this._isInited = false;
        this._popover = cis
            .createLoader(_elementRef, _viewContainerRef, _renderer)
            .provide({ provide: __WEBPACK_IMPORTED_MODULE_1__popover_config__["a" /* PopoverConfig */], useValue: _config });
        Object.assign(this, _config);
        this.onShown = this._popover.onShown;
        this.onHidden = this._popover.onHidden;
        // fix: no focus on button on Mac OS #1795
        if (typeof window !== 'undefined') {
            _elementRef.nativeElement.addEventListener('click', function () {
                try {
                    _elementRef.nativeElement.focus();
                }
                catch (err) {
                    return;
                }
            });
        }
    }
    Object.defineProperty(PopoverDirective.prototype, "isOpen", {
        /**
         * Returns whether or not the popover is currently being shown
         */
        get: function () {
            return this._popover.isShown;
        },
        set: function (value) {
            if (value) {
                this.show();
            }
            else {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    PopoverDirective.prototype.show = function () {
        if (this._popover.isShown || !this.popover) {
            return;
        }
        this._popover
            .attach(__WEBPACK_IMPORTED_MODULE_3__popover_container_component__["a" /* PopoverContainerComponent */])
            .to(this.container)
            .position({ attachment: this.placement })
            .show({
            content: this.popover,
            context: this.popoverContext,
            placement: this.placement,
            title: this.popoverTitle,
            containerClass: this.containerClass
        });
        this.isOpen = true;
    };
    /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    PopoverDirective.prototype.hide = function () {
        if (this.isOpen) {
            this._popover.hide();
            this.isOpen = false;
        }
    };
    /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    PopoverDirective.prototype.toggle = function () {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    };
    PopoverDirective.prototype.ngOnInit = function () {
        var _this = this;
        // fix: seems there are an issue with `routerLinkActive`
        // which result in duplicated call ngOnInit without call to ngOnDestroy
        // read more: https://github.com/valor-software/ngx-bootstrap/issues/1885
        if (this._isInited) {
            return;
        }
        this._isInited = true;
        this._popover.listen({
            triggers: this.triggers,
            outsideClick: this.outsideClick,
            show: function () { return _this.show(); }
        });
    };
    PopoverDirective.prototype.ngOnDestroy = function () {
        this._popover.dispose();
    };
    PopoverDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: '[popover]', exportAs: 'bs-popover' },] },
    ];
    /** @nocollapse */
    PopoverDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_1__popover_config__["a" /* PopoverConfig */], },
        { type: __WEBPACK_IMPORTED_MODULE_2__component_loader_index__["a" /* ComponentLoaderFactory */], },
    ]; };
    PopoverDirective.propDecorators = {
        'popover': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'popoverContext': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'popoverTitle': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'placement': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'outsideClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'triggers': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'container': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'containerClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'isOpen': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'onShown': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'onHidden': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    };
    return PopoverDirective;
}());

//# sourceMappingURL=popover.directive.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/popover/popover.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PopoverModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_loader_index__ = __webpack_require__("./node_modules/ngx-bootstrap/component-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__positioning_index__ = __webpack_require__("./node_modules/ngx-bootstrap/positioning/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__popover_config__ = __webpack_require__("./node_modules/ngx-bootstrap/popover/popover.config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__popover_directive__ = __webpack_require__("./node_modules/ngx-bootstrap/popover/popover.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__popover_container_component__ = __webpack_require__("./node_modules/ngx-bootstrap/popover/popover-container.component.js");







var PopoverModule = (function () {
    function PopoverModule() {
    }
    PopoverModule.forRoot = function () {
        return {
            ngModule: PopoverModule,
            providers: [__WEBPACK_IMPORTED_MODULE_4__popover_config__["a" /* PopoverConfig */], __WEBPACK_IMPORTED_MODULE_2__component_loader_index__["a" /* ComponentLoaderFactory */], __WEBPACK_IMPORTED_MODULE_3__positioning_index__["a" /* PositioningService */]]
        };
    };
    PopoverModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
                    declarations: [__WEBPACK_IMPORTED_MODULE_5__popover_directive__["a" /* PopoverDirective */], __WEBPACK_IMPORTED_MODULE_6__popover_container_component__["a" /* PopoverContainerComponent */]],
                    exports: [__WEBPACK_IMPORTED_MODULE_5__popover_directive__["a" /* PopoverDirective */]],
                    entryComponents: [__WEBPACK_IMPORTED_MODULE_6__popover_container_component__["a" /* PopoverContainerComponent */]]
                },] },
    ];
    /** @nocollapse */
    PopoverModule.ctorParameters = function () { return []; };
    return PopoverModule;
}());

//# sourceMappingURL=popover.module.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/progressbar/bar.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__progressbar_component__ = __webpack_require__("./node_modules/ngx-bootstrap/progressbar/progressbar.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_theme_provider__ = __webpack_require__("./node_modules/ngx-bootstrap/utils/theme-provider.js");



// todo: number pipe
// todo: use query from progress?
var BarComponent = (function () {
    function BarComponent(progress) {
        this.percent = 0;
        this.progress = progress;
    }
    Object.defineProperty(BarComponent.prototype, "value", {
        /** current value of progress bar */
        get: function () {
            return this._value;
        },
        set: function (v) {
            if (!v && v !== 0) {
                return;
            }
            this._value = v;
            this.recalculatePercentage();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BarComponent.prototype, "setBarWidth", {
        get: function () {
            this.recalculatePercentage();
            return this.percent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BarComponent.prototype, "isBs3", {
        get: function () {
            return Object(__WEBPACK_IMPORTED_MODULE_2__utils_theme_provider__["a" /* isBs3 */])();
        },
        enumerable: true,
        configurable: true
    });
    BarComponent.prototype.ngOnInit = function () {
        this.progress.addBar(this);
    };
    BarComponent.prototype.ngOnDestroy = function () {
        this.progress.removeBar(this);
    };
    BarComponent.prototype.recalculatePercentage = function () {
        this.percent = +(this.value / this.progress.max * 100).toFixed(2);
        var totalPercentage = this.progress.bars
            .reduce(function (total, bar) {
            return total + bar.percent;
        }, 0);
        if (totalPercentage > 100) {
            this.percent -= totalPercentage - 100;
        }
    };
    BarComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'bar',
                    template: "<ng-content></ng-content> ",
                    host: {
                        role: 'progressbar',
                        'aria-valuemin': '0',
                        '[class]': '"progress-bar " + (type ? "progress-bar-" + type + " bg-" + type : "")',
                        '[class.progress-bar-animated]': '!isBs3 && animate',
                        '[class.progress-bar-striped]': 'striped',
                        '[class.active]': 'isBs3 && animate',
                        '[attr.aria-valuenow]': 'value',
                        '[attr.aria-valuetext]': 'percent ? percent.toFixed(0) + "%" : ""',
                        '[attr.aria-valuemax]': 'max',
                        '[style.height.%]': '"100"'
                    }
                },] },
    ];
    /** @nocollapse */
    BarComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__progressbar_component__["a" /* ProgressbarComponent */], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Host"] },] },
    ]; };
    BarComponent.propDecorators = {
        'type': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'value': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'setBarWidth': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['style.width.%',] },],
    };
    return BarComponent;
}());

//# sourceMappingURL=bar.component.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/progressbar/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bar_component__ = __webpack_require__("./node_modules/ngx-bootstrap/progressbar/bar.component.js");
/* unused harmony reexport BarComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__progressbar_component__ = __webpack_require__("./node_modules/ngx-bootstrap/progressbar/progressbar.component.js");
/* unused harmony reexport ProgressbarComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__progressbar_module__ = __webpack_require__("./node_modules/ngx-bootstrap/progressbar/progressbar.module.js");
/* unused harmony reexport ProgressbarModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__progressbar_config__ = __webpack_require__("./node_modules/ngx-bootstrap/progressbar/progressbar.config.js");
/* unused harmony reexport ProgressbarConfig */




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/progressbar/progressbar.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__progressbar_config__ = __webpack_require__("./node_modules/ngx-bootstrap/progressbar/progressbar.config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_index__ = __webpack_require__("./node_modules/ngx-bootstrap/utils/index.js");



var ProgressbarComponent = (function () {
    function ProgressbarComponent(config) {
        this.isStacked = false;
        this.addClass = true;
        this.bars = [];
        this._max = 100;
        Object.assign(this, config);
    }
    Object.defineProperty(ProgressbarComponent.prototype, "value", {
        /** current value of progress bar. Could be a number or array of objects
         * like {"value":15,"type":"info","label":"15 %"}
         */
        set: function (value) {
            this.isStacked = Array.isArray(value);
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressbarComponent.prototype, "isBs3", {
        get: function () {
            return Object(__WEBPACK_IMPORTED_MODULE_2__utils_index__["c" /* isBs3 */])();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressbarComponent.prototype, "max", {
        /** maximum total value of progress element */
        get: function () {
            return this._max;
        },
        set: function (v) {
            this._max = v;
            this.bars.forEach(function (bar) {
                bar.recalculatePercentage();
            });
        },
        enumerable: true,
        configurable: true
    });
    ProgressbarComponent.prototype.addBar = function (bar) {
        bar.animate = this.animate;
        bar.striped = this.striped;
        this.bars.push(bar);
    };
    ProgressbarComponent.prototype.removeBar = function (bar) {
        this.bars.splice(this.bars.indexOf(bar), 1);
    };
    ProgressbarComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'progressbar',
                    template: "<bar [type]=\"type\" [value]=\"_value\" *ngIf=\"!isStacked\"> <ng-content></ng-content> </bar> <ng-template [ngIf]=\"isStacked\"> <bar *ngFor=\"let item of _value\" [type]=\"item.type\" [value]=\"item.value\">{{ item.label }}</bar> </ng-template> ",
                    styles: [
                        "\n    :host {\n      width: 100%;\n      display: flex;\n    }\n  "
                    ]
                },] },
    ];
    /** @nocollapse */
    ProgressbarComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__progressbar_config__["a" /* ProgressbarConfig */], },
    ]; };
    ProgressbarComponent.propDecorators = {
        'animate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'striped': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'type': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'value': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'max': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['attr.max',] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'addClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['class.progress',] },],
    };
    return ProgressbarComponent;
}());

//# sourceMappingURL=progressbar.component.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/progressbar/progressbar.config.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressbarConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");

var ProgressbarConfig = (function () {
    function ProgressbarConfig() {
        /** if `true` changing value of progress bar will be animated */
        this.animate = false;
        /** maximum total value of progress element */
        this.max = 100;
    }
    ProgressbarConfig.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    ProgressbarConfig.ctorParameters = function () { return []; };
    return ProgressbarConfig;
}());

//# sourceMappingURL=progressbar.config.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/progressbar/progressbar.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ProgressbarModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bar_component__ = __webpack_require__("./node_modules/ngx-bootstrap/progressbar/bar.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__progressbar_component__ = __webpack_require__("./node_modules/ngx-bootstrap/progressbar/progressbar.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__progressbar_config__ = __webpack_require__("./node_modules/ngx-bootstrap/progressbar/progressbar.config.js");





var ProgressbarModule = (function () {
    function ProgressbarModule() {
    }
    ProgressbarModule.forRoot = function () {
        return { ngModule: ProgressbarModule, providers: [__WEBPACK_IMPORTED_MODULE_4__progressbar_config__["a" /* ProgressbarConfig */]] };
    };
    ProgressbarModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"]],
                    declarations: [__WEBPACK_IMPORTED_MODULE_2__bar_component__["a" /* BarComponent */], __WEBPACK_IMPORTED_MODULE_3__progressbar_component__["a" /* ProgressbarComponent */]],
                    exports: [__WEBPACK_IMPORTED_MODULE_2__bar_component__["a" /* BarComponent */], __WEBPACK_IMPORTED_MODULE_3__progressbar_component__["a" /* ProgressbarComponent */]]
                },] },
    ];
    /** @nocollapse */
    ProgressbarModule.ctorParameters = function () { return []; };
    return ProgressbarModule;
}());

//# sourceMappingURL=progressbar.module.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/rating/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rating_component__ = __webpack_require__("./node_modules/ngx-bootstrap/rating/rating.component.js");
/* unused harmony reexport RatingComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rating_module__ = __webpack_require__("./node_modules/ngx-bootstrap/rating/rating.module.js");
/* unused harmony reexport RatingModule */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/rating/rating.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RATING_CONTROL_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");


var RATING_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"],
    // tslint:disable-next-line
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return RatingComponent; }),
    multi: true
};
var RatingComponent = (function () {
    function RatingComponent(changeDetection) {
        this.changeDetection = changeDetection;
        /** number of icons */
        this.max = 5;
        /** fired when icon selected, $event:number equals to selected rating */
        this.onHover = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** fired when icon selected, $event:number equals to previous rating value */
        this.onLeave = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
    }
    RatingComponent.prototype.onKeydown = function (event) {
        if ([37, 38, 39, 40].indexOf(event.which) === -1) {
            return;
        }
        event.preventDefault();
        event.stopPropagation();
        var sign = event.which === 38 || event.which === 39 ? 1 : -1;
        this.rate(this.value + sign);
    };
    RatingComponent.prototype.ngOnInit = function () {
        this.max = typeof this.max !== 'undefined' ? this.max : 5;
        this.titles =
            typeof this.titles !== 'undefined' && this.titles.length > 0
                ? this.titles
                : ['one', 'two', 'three', 'four', 'five'];
        this.range = this.buildTemplateObjects(this.max);
    };
    // model -> view
    RatingComponent.prototype.writeValue = function (value) {
        if (value % 1 !== value) {
            this.value = Math.round(value);
            this.preValue = value;
            this.changeDetection.markForCheck();
            return;
        }
        this.preValue = value;
        this.value = value;
        this.changeDetection.markForCheck();
    };
    RatingComponent.prototype.enter = function (value) {
        if (!this.readonly) {
            this.value = value;
            this.changeDetection.markForCheck();
            this.onHover.emit(value);
        }
    };
    RatingComponent.prototype.reset = function () {
        this.value = this.preValue;
        this.changeDetection.markForCheck();
        this.onLeave.emit(this.value);
    };
    RatingComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    RatingComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    RatingComponent.prototype.rate = function (value) {
        if (!this.readonly && value >= 0 && value <= this.range.length) {
            this.writeValue(value);
            this.onChange(value);
        }
    };
    RatingComponent.prototype.buildTemplateObjects = function (max) {
        var result = [];
        for (var i = 0; i < max; i++) {
            result.push({
                index: i,
                title: this.titles[i] || i + 1
            });
        }
        return result;
    };
    RatingComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'rating',
                    template: "<span (mouseleave)=\"reset()\" (keydown)=\"onKeydown($event)\" tabindex=\"0\" role=\"slider\" aria-valuemin=\"0\" [attr.aria-valuemax]=\"range.length\" [attr.aria-valuenow]=\"value\"> <ng-template #star let-value=\"value\" let-index=\"index\">{{index < value ? '&#9733;' : '&#9734;'}}</ng-template> <ng-template ngFor let-r [ngForOf]=\"range\" let-index=\"index\"> <span class=\"sr-only\">({{ index < value ? '*' : ' ' }})</span> <span class=\"bs-rating-star\" (mouseenter)=\"enter(index + 1)\" (click)=\"rate(index + 1)\" [title]=\"r.title\" [style.cursor]=\"readonly ? 'default' : 'pointer'\" [class.active]=\"index < value\"> <ng-template [ngTemplateOutlet]=\"customTemplate || star\" [ngTemplateOutletContext]=\"{index: index, value: value}\"> </ng-template> </span> </ng-template> </span> ",
                    providers: [RATING_CONTROL_VALUE_ACCESSOR],
                    changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
                },] },
    ];
    /** @nocollapse */
    RatingComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], },
    ]; };
    RatingComponent.propDecorators = {
        'max': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'readonly': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'titles': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'customTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'onHover': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'onLeave': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'onKeydown': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['keydown', ['$event'],] },],
    };
    return RatingComponent;
}());

//# sourceMappingURL=rating.component.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/rating/rating.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RatingModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rating_component__ = __webpack_require__("./node_modules/ngx-bootstrap/rating/rating.component.js");



var RatingModule = (function () {
    function RatingModule() {
    }
    RatingModule.forRoot = function () {
        return {
            ngModule: RatingModule,
            providers: []
        };
    };
    RatingModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"]],
                    declarations: [__WEBPACK_IMPORTED_MODULE_2__rating_component__["a" /* RatingComponent */]],
                    exports: [__WEBPACK_IMPORTED_MODULE_2__rating_component__["a" /* RatingComponent */]]
                },] },
    ];
    /** @nocollapse */
    RatingModule.ctorParameters = function () { return []; };
    return RatingModule;
}());

//# sourceMappingURL=rating.module.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/sortable/draggable-item.service.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DraggableItemService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");


var DraggableItemService = (function () {
    function DraggableItemService() {
        this.onCapture = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
    }
    DraggableItemService.prototype.dragStart = function (item) {
        this.draggableItem = item;
    };
    DraggableItemService.prototype.getItem = function () {
        return this.draggableItem;
    };
    DraggableItemService.prototype.captureItem = function (overZoneIndex, newIndex) {
        if (this.draggableItem.overZoneIndex !== overZoneIndex) {
            this.draggableItem.lastZoneIndex = this.draggableItem.overZoneIndex;
            this.draggableItem.overZoneIndex = overZoneIndex;
            this.onCapture.next(this.draggableItem);
            this.draggableItem = Object.assign({}, this.draggableItem, {
                overZoneIndex: overZoneIndex,
                i: newIndex
            });
        }
        return this.draggableItem;
    };
    DraggableItemService.prototype.onCaptureItem = function () {
        return this.onCapture;
    };
    DraggableItemService.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    DraggableItemService.ctorParameters = function () { return []; };
    return DraggableItemService;
}());

//# sourceMappingURL=draggable-item.service.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/sortable/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sortable_module__ = __webpack_require__("./node_modules/ngx-bootstrap/sortable/sortable.module.js");
/* unused harmony reexport SortableModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sortable_component__ = __webpack_require__("./node_modules/ngx-bootstrap/sortable/sortable.component.js");
/* unused harmony reexport SortableComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__draggable_item_service__ = __webpack_require__("./node_modules/ngx-bootstrap/sortable/draggable-item.service.js");
/* unused harmony reexport DraggableItemService */



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/sortable/sortable.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__draggable_item_service__ = __webpack_require__("./node_modules/ngx-bootstrap/sortable/draggable-item.service.js");



/* tslint:disable */
/* tslint:enable */
var SortableComponent = (function () {
    function SortableComponent(transfer) {
        var _this = this;
        /** class name for items wrapper */
        this.wrapperClass = '';
        /** style object for items wrapper */
        this.wrapperStyle = {};
        /** class name for item */
        this.itemClass = '';
        /** style object for item */
        this.itemStyle = {};
        /** class name for active item */
        this.itemActiveClass = '';
        /** style object for active item */
        this.itemActiveStyle = {};
        /** class name for placeholder */
        this.placeholderClass = '';
        /** style object for placeholder */
        this.placeholderStyle = {};
        /** placeholder item which will be shown if collection is empty */
        this.placeholderItem = '';
        /** fired on array change (reordering, insert, remove), same as <code>ngModelChange</code>.
         *  Returns new items collection as a payload.
         */
        this.onChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.showPlaceholder = false;
        this.activeItem = -1;
        this.onTouched = Function.prototype;
        this.onChanged = Function.prototype;
        this.transfer = transfer;
        this.currentZoneIndex = SortableComponent.globalZoneIndex++;
        this.transfer
            .onCaptureItem()
            .subscribe(function (item) { return _this.onDrop(item); });
    }
    Object.defineProperty(SortableComponent.prototype, "items", {
        get: function () {
            return this._items;
        },
        set: function (value) {
            this._items = value;
            var out = this.items.map(function (x) { return x.initData; });
            this.onChanged(out);
            this.onChange.emit(out);
        },
        enumerable: true,
        configurable: true
    });
    SortableComponent.prototype.onItemDragstart = function (event, item, i) {
        this.initDragstartEvent(event);
        this.onTouched();
        this.transfer.dragStart({
            event: event,
            item: item,
            i: i,
            initialIndex: i,
            lastZoneIndex: this.currentZoneIndex,
            overZoneIndex: this.currentZoneIndex
        });
    };
    SortableComponent.prototype.onItemDragover = function (event, i) {
        if (!this.transfer.getItem()) {
            return;
        }
        event.preventDefault();
        var dragItem = this.transfer.captureItem(this.currentZoneIndex, this.items.length);
        var newArray = [];
        if (!this.items.length) {
            newArray = [dragItem.item];
        }
        else if (dragItem.i > i) {
            newArray = this.items.slice(0, i).concat([
                dragItem.item
            ], this.items.slice(i, dragItem.i), this.items.slice(dragItem.i + 1));
        }
        else {
            // this.draggedItem.i < i
            newArray = this.items.slice(0, dragItem.i).concat(this.items.slice(dragItem.i + 1, i + 1), [
                dragItem.item
            ], this.items.slice(i + 1));
        }
        this.items = newArray;
        dragItem.i = i;
        this.activeItem = i;
        this.updatePlaceholderState();
    };
    SortableComponent.prototype.cancelEvent = function (event) {
        if (!this.transfer.getItem() || !event) {
            return;
        }
        event.preventDefault();
    };
    SortableComponent.prototype.onDrop = function (item) {
        if (item &&
            item.overZoneIndex !== this.currentZoneIndex &&
            item.lastZoneIndex === this.currentZoneIndex) {
            this.items = this.items.filter(function (x, i) { return i !== item.i; });
            this.updatePlaceholderState();
        }
        this.resetActiveItem(undefined);
    };
    SortableComponent.prototype.resetActiveItem = function (event) {
        this.cancelEvent(event);
        this.activeItem = -1;
    };
    SortableComponent.prototype.registerOnChange = function (callback) {
        this.onChanged = callback;
    };
    SortableComponent.prototype.registerOnTouched = function (callback) {
        this.onTouched = callback;
    };
    SortableComponent.prototype.writeValue = function (value) {
        var _this = this;
        if (value) {
            this.items = value.map(function (x, i) { return ({
                id: i,
                initData: x,
                value: _this.fieldName ? x[_this.fieldName] : x
            }); });
        }
        else {
            this.items = [];
        }
        this.updatePlaceholderState();
    };
    SortableComponent.prototype.updatePlaceholderState = function () {
        this.showPlaceholder = !this._items.length;
    };
    SortableComponent.prototype.getItemStyle = function (isActive) {
        return isActive
            ? Object.assign({}, this.itemStyle, this.itemActiveStyle)
            : this.itemStyle;
    };
    // tslint:disable-next-line
    SortableComponent.prototype.initDragstartEvent = function (event) {
        // it is necessary for mozilla
        // data type should be 'Text' instead of 'text/plain' to keep compatibility
        // with IE
        event.dataTransfer.setData('Text', 'placeholder');
    };
    SortableComponent.globalZoneIndex = 0;
    SortableComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'bs-sortable',
                    exportAs: 'bs-sortable',
                    template: "\n<div\n    [ngClass]=\"wrapperClass\"\n    [ngStyle]=\"wrapperStyle\"\n    [ngStyle]=\"wrapperStyle\"\n    (dragover)=\"cancelEvent($event)\"\n    (dragenter)=\"cancelEvent($event)\"\n    (drop)=\"resetActiveItem($event)\"\n    (mouseleave)=\"resetActiveItem($event)\">\n  <div\n        *ngIf=\"showPlaceholder\"\n        [ngClass]=\"placeholderClass\"\n        [ngStyle]=\"placeholderStyle\"\n        (dragover)=\"onItemDragover($event, 0)\"\n        (dragenter)=\"cancelEvent($event)\"\n    >{{placeholderItem}}</div>\n    <div\n        *ngFor=\"let item of items; let i=index;\"\n        [ngClass]=\"[ itemClass, i === activeItem ? itemActiveClass : '' ]\"\n        [ngStyle]=\"getItemStyle(i === activeItem)\"\n        draggable=\"true\"\n        (dragstart)=\"onItemDragstart($event, item, i)\"\n        (dragend)=\"resetActiveItem($event)\"\n        (dragover)=\"onItemDragover($event, i)\"\n        (dragenter)=\"cancelEvent($event)\"\n        aria-dropeffect=\"move\"\n        [attr.aria-grabbed]=\"i === activeItem\"\n    ><ng-template [ngTemplateOutlet]=\"itemTemplate || defItemTemplate\"\n  [ngTemplateOutletContext]=\"{item:item, index: i}\"></ng-template></div>\n</div>\n\n<ng-template #defItemTemplate let-item=\"item\">{{item.value}}</ng-template>  \n",
                    providers: [
                        {
                            provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"],
                            useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return SortableComponent; }),
                            multi: true
                        }
                    ]
                },] },
    ];
    /** @nocollapse */
    SortableComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_2__draggable_item_service__["a" /* DraggableItemService */], },
    ]; };
    SortableComponent.propDecorators = {
        'fieldName': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'wrapperClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'wrapperStyle': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'itemClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'itemStyle': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'itemActiveClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'itemActiveStyle': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'placeholderClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'placeholderStyle': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'placeholderItem': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'itemTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'onChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    };
    return SortableComponent;
}());

//# sourceMappingURL=sortable.component.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/sortable/sortable.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SortableModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sortable_component__ = __webpack_require__("./node_modules/ngx-bootstrap/sortable/sortable.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__draggable_item_service__ = __webpack_require__("./node_modules/ngx-bootstrap/sortable/draggable-item.service.js");




var SortableModule = (function () {
    function SortableModule() {
    }
    SortableModule.forRoot = function () {
        return { ngModule: SortableModule, providers: [__WEBPACK_IMPORTED_MODULE_3__draggable_item_service__["a" /* DraggableItemService */]] };
    };
    SortableModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    declarations: [__WEBPACK_IMPORTED_MODULE_2__sortable_component__["a" /* SortableComponent */]],
                    imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
                    exports: [__WEBPACK_IMPORTED_MODULE_2__sortable_component__["a" /* SortableComponent */]]
                },] },
    ];
    /** @nocollapse */
    SortableModule.ctorParameters = function () { return []; };
    return SortableModule;
}());

//# sourceMappingURL=sortable.module.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/tabs/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ng_transclude_directive__ = __webpack_require__("./node_modules/ngx-bootstrap/tabs/ng-transclude.directive.js");
/* unused harmony reexport NgTranscludeDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tab_directive__ = __webpack_require__("./node_modules/ngx-bootstrap/tabs/tab.directive.js");
/* unused harmony reexport TabDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tab_heading_directive__ = __webpack_require__("./node_modules/ngx-bootstrap/tabs/tab-heading.directive.js");
/* unused harmony reexport TabHeadingDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabset_component__ = __webpack_require__("./node_modules/ngx-bootstrap/tabs/tabset.component.js");
/* unused harmony reexport TabsetComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabset_config__ = __webpack_require__("./node_modules/ngx-bootstrap/tabs/tabset.config.js");
/* unused harmony reexport TabsetConfig */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_module__ = __webpack_require__("./node_modules/ngx-bootstrap/tabs/tabs.module.js");
/* unused harmony reexport TabsModule */






//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/tabs/ng-transclude.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgTranscludeDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");

var NgTranscludeDirective = (function () {
    function NgTranscludeDirective(viewRef) {
        this.viewRef = viewRef;
    }
    Object.defineProperty(NgTranscludeDirective.prototype, "ngTransclude", {
        get: function () {
            return this._ngTransclude;
        },
        set: function (templateRef) {
            this._ngTransclude = templateRef;
            if (templateRef) {
                this.viewRef.createEmbeddedView(templateRef);
            }
        },
        enumerable: true,
        configurable: true
    });
    NgTranscludeDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[ngTransclude]'
                },] },
    ];
    /** @nocollapse */
    NgTranscludeDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], },
    ]; };
    NgTranscludeDirective.propDecorators = {
        'ngTransclude': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return NgTranscludeDirective;
}());

//# sourceMappingURL=ng-transclude.directive.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/tabs/tab-heading.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabHeadingDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tab_directive__ = __webpack_require__("./node_modules/ngx-bootstrap/tabs/tab.directive.js");


/** Should be used to mark <ng-template> element as a template for tab heading */
var TabHeadingDirective = (function () {
    function TabHeadingDirective(templateRef, tab) {
        tab.headingRef = templateRef;
    }
    TabHeadingDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: '[tabHeading]' },] },
    ];
    /** @nocollapse */
    TabHeadingDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_1__tab_directive__["a" /* TabDirective */], },
    ]; };
    return TabHeadingDirective;
}());

//# sourceMappingURL=tab-heading.directive.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/tabs/tab.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tabset_component__ = __webpack_require__("./node_modules/ngx-bootstrap/tabs/tabset.component.js");


var TabDirective = (function () {
    function TabDirective(tabset, elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        /** fired when tab became active, $event:Tab equals to selected instance of Tab component */
        this.select = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** fired when tab became inactive, $event:Tab equals to deselected instance of Tab component */
        this.deselect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** fired before tab will be removed, $event:Tab equals to instance of removed tab */
        this.removed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.addClass = true;
        this.tabset = tabset;
        this.tabset.addTab(this);
    }
    Object.defineProperty(TabDirective.prototype, "customClass", {
        /** if set, will be added to the tab's class attribute. Multiple classes are supported. */
        get: function () {
            return this._customClass;
        },
        set: function (customClass) {
            var _this = this;
            if (this.customClass) {
                this.customClass.split(' ').forEach(function (cssClass) {
                    _this.renderer.removeClass(_this.elementRef.nativeElement, cssClass);
                });
            }
            this._customClass = customClass ? customClass.trim() : null;
            if (this.customClass) {
                this.customClass.split(' ').forEach(function (cssClass) {
                    _this.renderer.addClass(_this.elementRef.nativeElement, cssClass);
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabDirective.prototype, "active", {
        /** tab active state toggle */
        get: function () {
            return this._active;
        },
        set: function (active) {
            var _this = this;
            if (this._active === active) {
                return;
            }
            if ((this.disabled && active) || !active) {
                if (this._active && !active) {
                    this.deselect.emit(this);
                    this._active = active;
                }
                return;
            }
            this._active = active;
            this.select.emit(this);
            this.tabset.tabs.forEach(function (tab) {
                if (tab !== _this) {
                    tab.active = false;
                }
            });
        },
        enumerable: true,
        configurable: true
    });
    TabDirective.prototype.ngOnInit = function () {
        this.removable = this.removable;
    };
    TabDirective.prototype.ngOnDestroy = function () {
        this.tabset.removeTab(this, { reselect: false, emit: false });
    };
    TabDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: 'tab, [tab]' },] },
    ];
    /** @nocollapse */
    TabDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__tabset_component__["a" /* TabsetComponent */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
    ]; };
    TabDirective.propDecorators = {
        'heading': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'id': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['attr.id',] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'disabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'removable': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'customClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'active': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['class.active',] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'select': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'deselect': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'removed': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'addClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['class.tab-pane',] },],
    };
    return TabDirective;
}());

//# sourceMappingURL=tab.directive.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/tabs/tabs.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TabsModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_transclude_directive__ = __webpack_require__("./node_modules/ngx-bootstrap/tabs/ng-transclude.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tab_heading_directive__ = __webpack_require__("./node_modules/ngx-bootstrap/tabs/tab-heading.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tab_directive__ = __webpack_require__("./node_modules/ngx-bootstrap/tabs/tab.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabset_component__ = __webpack_require__("./node_modules/ngx-bootstrap/tabs/tabset.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tabset_config__ = __webpack_require__("./node_modules/ngx-bootstrap/tabs/tabset.config.js");







var TabsModule = (function () {
    function TabsModule() {
    }
    TabsModule.forRoot = function () {
        return {
            ngModule: TabsModule,
            providers: [__WEBPACK_IMPORTED_MODULE_6__tabset_config__["a" /* TabsetConfig */]]
        };
    };
    TabsModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"]],
                    declarations: [
                        __WEBPACK_IMPORTED_MODULE_2__ng_transclude_directive__["a" /* NgTranscludeDirective */],
                        __WEBPACK_IMPORTED_MODULE_4__tab_directive__["a" /* TabDirective */],
                        __WEBPACK_IMPORTED_MODULE_5__tabset_component__["a" /* TabsetComponent */],
                        __WEBPACK_IMPORTED_MODULE_3__tab_heading_directive__["a" /* TabHeadingDirective */]
                    ],
                    exports: [
                        __WEBPACK_IMPORTED_MODULE_4__tab_directive__["a" /* TabDirective */],
                        __WEBPACK_IMPORTED_MODULE_5__tabset_component__["a" /* TabsetComponent */],
                        __WEBPACK_IMPORTED_MODULE_3__tab_heading_directive__["a" /* TabHeadingDirective */],
                        __WEBPACK_IMPORTED_MODULE_2__ng_transclude_directive__["a" /* NgTranscludeDirective */]
                    ]
                },] },
    ];
    /** @nocollapse */
    TabsModule.ctorParameters = function () { return []; };
    return TabsModule;
}());

//# sourceMappingURL=tabs.module.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/tabs/tabset.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tabset_config__ = __webpack_require__("./node_modules/ngx-bootstrap/tabs/tabset.config.js");


// todo: add active event to tab
// todo: fix? mixing static and dynamic tabs position tabs in order of creation
var TabsetComponent = (function () {
    function TabsetComponent(config, renderer) {
        this.renderer = renderer;
        this.clazz = true;
        this.tabs = [];
        this.classMap = {};
        Object.assign(this, config);
    }
    Object.defineProperty(TabsetComponent.prototype, "vertical", {
        /** if true tabs will be placed vertically */
        get: function () {
            return this._vertical;
        },
        set: function (value) {
            this._vertical = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabsetComponent.prototype, "justified", {
        /** if true tabs fill the container and have a consistent width */
        get: function () {
            return this._justified;
        },
        set: function (value) {
            this._justified = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabsetComponent.prototype, "type", {
        /** navigation context class: 'tabs' or 'pills' */
        get: function () {
            return this._type;
        },
        set: function (value) {
            this._type = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    TabsetComponent.prototype.ngOnDestroy = function () {
        this.isDestroyed = true;
    };
    TabsetComponent.prototype.addTab = function (tab) {
        this.tabs.push(tab);
        tab.active = this.tabs.length === 1 && typeof tab.active === 'undefined';
    };
    TabsetComponent.prototype.removeTab = function (tab, options) {
        if (options === void 0) { options = { reselect: true, emit: true }; }
        var index = this.tabs.indexOf(tab);
        if (index === -1 || this.isDestroyed) {
            return;
        }
        // Select a new tab if the tab to be removed is selected and not destroyed
        if (options.reselect && tab.active && this.hasAvailableTabs(index)) {
            var newActiveIndex = this.getClosestTabIndex(index);
            this.tabs[newActiveIndex].active = true;
        }
        if (options.emit) {
            tab.removed.emit(tab);
        }
        this.tabs.splice(index, 1);
        if (tab.elementRef.nativeElement.parentNode) {
            this.renderer.removeChild(tab.elementRef.nativeElement.parentNode, tab.elementRef.nativeElement);
        }
    };
    TabsetComponent.prototype.getClosestTabIndex = function (index) {
        var tabsLength = this.tabs.length;
        if (!tabsLength) {
            return -1;
        }
        for (var step = 1; step <= tabsLength; step += 1) {
            var prevIndex = index - step;
            var nextIndex = index + step;
            if (this.tabs[prevIndex] && !this.tabs[prevIndex].disabled) {
                return prevIndex;
            }
            if (this.tabs[nextIndex] && !this.tabs[nextIndex].disabled) {
                return nextIndex;
            }
        }
        return -1;
    };
    TabsetComponent.prototype.hasAvailableTabs = function (index) {
        var tabsLength = this.tabs.length;
        if (!tabsLength) {
            return false;
        }
        for (var i = 0; i < tabsLength; i += 1) {
            if (!this.tabs[i].disabled && i !== index) {
                return true;
            }
        }
        return false;
    };
    TabsetComponent.prototype.setClassMap = function () {
        this.classMap = (_a = {
                'nav-stacked': this.vertical,
                'flex-column': this.vertical,
                'nav-justified': this.justified
            },
            _a["nav-" + this.type] = true,
            _a);
        var _a;
    };
    TabsetComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'tabset',
                    template: "<ul class=\"nav\" [ngClass]=\"classMap\" (click)=\"$event.preventDefault()\"> <li *ngFor=\"let tabz of tabs\" [ngClass]=\"['nav-item', tabz.customClass || '']\" [class.active]=\"tabz.active\" [class.disabled]=\"tabz.disabled\"> <a href=\"javascript:void(0);\" class=\"nav-link\" [attr.id]=\"tabz.id ? tabz.id + '-link' : ''\" [class.active]=\"tabz.active\" [class.disabled]=\"tabz.disabled\" (click)=\"tabz.active = true\"> <span [ngTransclude]=\"tabz.headingRef\">{{ tabz.heading }}</span> <span *ngIf=\"tabz.removable\" (click)=\"$event.preventDefault(); removeTab(tabz);\" class=\"bs-remove-tab\"> &#10060;</span> </a> </li> </ul> <div class=\"tab-content\"> <ng-content></ng-content> </div> "
                },] },
    ];
    /** @nocollapse */
    TabsetComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__tabset_config__["a" /* TabsetConfig */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
    ]; };
    TabsetComponent.propDecorators = {
        'vertical': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'justified': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'type': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'clazz': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['class.tab-container',] },],
    };
    return TabsetComponent;
}());

//# sourceMappingURL=tabset.component.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/tabs/tabset.config.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsetConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");

var TabsetConfig = (function () {
    function TabsetConfig() {
        /** provides default navigation context class: 'tabs' or 'pills' */
        this.type = 'tabs';
    }
    TabsetConfig.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    TabsetConfig.ctorParameters = function () { return []; };
    return TabsetConfig;
}());

//# sourceMappingURL=tabset.config.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/tooltip/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tooltip_container_component__ = __webpack_require__("./node_modules/ngx-bootstrap/tooltip/tooltip-container.component.js");
/* unused harmony reexport TooltipContainerComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tooltip_directive__ = __webpack_require__("./node_modules/ngx-bootstrap/tooltip/tooltip.directive.js");
/* unused harmony reexport TooltipDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tooltip_module__ = __webpack_require__("./node_modules/ngx-bootstrap/tooltip/tooltip.module.js");
/* unused harmony reexport TooltipModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tooltip_config__ = __webpack_require__("./node_modules/ngx-bootstrap/tooltip/tooltip.config.js");
/* unused harmony reexport TooltipConfig */




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/tooltip/tooltip-container.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TooltipContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tooltip_config__ = __webpack_require__("./node_modules/ngx-bootstrap/tooltip/tooltip.config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_theme_provider__ = __webpack_require__("./node_modules/ngx-bootstrap/utils/theme-provider.js");



var TooltipContainerComponent = (function () {
    function TooltipContainerComponent(config) {
        Object.assign(this, config);
    }
    Object.defineProperty(TooltipContainerComponent.prototype, "isBs3", {
        get: function () {
            return Object(__WEBPACK_IMPORTED_MODULE_2__utils_theme_provider__["a" /* isBs3 */])();
        },
        enumerable: true,
        configurable: true
    });
    TooltipContainerComponent.prototype.ngAfterViewInit = function () {
        this.classMap = { in: false, fade: false };
        this.classMap[this.placement] = true;
        this.classMap["tooltip-" + this.placement] = true;
        this.classMap.in = true;
        if (this.animation) {
            this.classMap.fade = true;
        }
        if (this.containerClass) {
            this.classMap[this.containerClass] = true;
        }
    };
    TooltipContainerComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'bs-tooltip-container',
                    changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
                    // tslint:disable-next-line
                    host: {
                        '[class]': '"tooltip in tooltip-" + placement + " " + "bs-tooltip-" + placement + " " + placement + " " + containerClass',
                        '[class.show]': '!isBs3',
                        role: 'tooltip'
                    },
                    styles: [
                        "\n    :host.tooltip {\n      display: block;\n    }\n    :host.bs-tooltip-top .arrow, :host.bs-tooltip-bottom .arrow {\n      left: 50%;\n      margin-left: -6px;\n    }\n    :host.bs-tooltip-left .arrow, :host.bs-tooltip-right .arrow {\n      top: 50%;\n      margin-top: -6px;\n    }\n  "
                    ],
                    template: "\n    <div class=\"tooltip-arrow arrow\"></div>\n    <div class=\"tooltip-inner\"><ng-content></ng-content></div>\n    "
                },] },
    ];
    /** @nocollapse */
    TooltipContainerComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__tooltip_config__["a" /* TooltipConfig */], },
    ]; };
    return TooltipContainerComponent;
}());

//# sourceMappingURL=tooltip-container.component.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/tooltip/tooltip.config.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TooltipConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");

/** Default values provider for tooltip */
var TooltipConfig = (function () {
    function TooltipConfig() {
        /** tooltip placement, supported positions: 'top', 'bottom', 'left', 'right' */
        this.placement = 'top';
        /** array of event names which triggers tooltip opening */
        this.triggers = 'hover focus';
    }
    TooltipConfig.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    TooltipConfig.ctorParameters = function () { return []; };
    return TooltipConfig;
}());

//# sourceMappingURL=tooltip.config.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/tooltip/tooltip.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TooltipDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tooltip_container_component__ = __webpack_require__("./node_modules/ngx-bootstrap/tooltip/tooltip-container.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tooltip_config__ = __webpack_require__("./node_modules/ngx-bootstrap/tooltip/tooltip.config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__component_loader_index__ = __webpack_require__("./node_modules/ngx-bootstrap/component-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_decorators__ = __webpack_require__("./node_modules/ngx-bootstrap/utils/decorators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_warn_once__ = __webpack_require__("./node_modules/ngx-bootstrap/utils/warn-once.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_triggers__ = __webpack_require__("./node_modules/ngx-bootstrap/utils/triggers.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_timer__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/timer.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// tslint:disable:deprecation









var TooltipDirective = (function () {
    function TooltipDirective(_viewContainerRef, _renderer, _elementRef, cis, config) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        /** Fired when tooltip content changes */
        this.tooltipChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * Css class for tooltip container
         */
        this.containerClass = '';
        /** @deprecated - removed, will be added to configuration */
        this._animation = true;
        /** @deprecated */
        this._fadeDuration = 150;
        /** @deprecated */
        this.tooltipStateChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._tooltip = cis
            .createLoader(this._elementRef, _viewContainerRef, this._renderer)
            .provide({ provide: __WEBPACK_IMPORTED_MODULE_2__tooltip_config__["a" /* TooltipConfig */], useValue: config });
        Object.assign(this, config);
        this.onShown = this._tooltip.onShown;
        this.onHidden = this._tooltip.onHidden;
    }
    Object.defineProperty(TooltipDirective.prototype, "isOpen", {
        /**
         * Returns whether or not the tooltip is currently being shown
         */
        get: function () {
            return this._tooltip.isShown;
        },
        set: function (value) {
            if (value) {
                this.show();
            }
            else {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "htmlContent", {
        /** @deprecated - please use `tooltip` instead */
        set: function (value) {
            Object(__WEBPACK_IMPORTED_MODULE_5__utils_warn_once__["a" /* warnOnce */])('tooltipHtml was deprecated, please use `tooltip` instead');
            this.tooltip = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_placement", {
        /** @deprecated - please use `placement` instead */
        set: function (value) {
            Object(__WEBPACK_IMPORTED_MODULE_5__utils_warn_once__["a" /* warnOnce */])('tooltipPlacement was deprecated, please use `placement` instead');
            this.placement = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_isOpen", {
        get: function () {
            Object(__WEBPACK_IMPORTED_MODULE_5__utils_warn_once__["a" /* warnOnce */])('tooltipIsOpen was deprecated, please use `isOpen` instead');
            return this.isOpen;
        },
        /** @deprecated - please use `isOpen` instead*/
        set: function (value) {
            Object(__WEBPACK_IMPORTED_MODULE_5__utils_warn_once__["a" /* warnOnce */])('tooltipIsOpen was deprecated, please use `isOpen` instead');
            this.isOpen = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_enable", {
        get: function () {
            Object(__WEBPACK_IMPORTED_MODULE_5__utils_warn_once__["a" /* warnOnce */])('tooltipEnable was deprecated, please use `isDisabled` instead');
            return this.isDisabled;
        },
        /** @deprecated - please use `isDisabled` instead */
        set: function (value) {
            Object(__WEBPACK_IMPORTED_MODULE_5__utils_warn_once__["a" /* warnOnce */])('tooltipEnable was deprecated, please use `isDisabled` instead');
            this.isDisabled = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_appendToBody", {
        get: function () {
            Object(__WEBPACK_IMPORTED_MODULE_5__utils_warn_once__["a" /* warnOnce */])('tooltipAppendToBody was deprecated, please use `container="body"` instead');
            return this.container === 'body';
        },
        /** @deprecated - please use `container="body"` instead */
        set: function (value) {
            Object(__WEBPACK_IMPORTED_MODULE_5__utils_warn_once__["a" /* warnOnce */])('tooltipAppendToBody was deprecated, please use `container="body"` instead');
            this.container = value ? 'body' : this.container;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_popupClass", {
        /** @deprecated - will replaced with customClass */
        set: function (value) {
            Object(__WEBPACK_IMPORTED_MODULE_5__utils_warn_once__["a" /* warnOnce */])('tooltipClass deprecated');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_tooltipContext", {
        /** @deprecated - removed */
        set: function (value) {
            Object(__WEBPACK_IMPORTED_MODULE_5__utils_warn_once__["a" /* warnOnce */])('tooltipContext deprecated');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_tooltipPopupDelay", {
        /** @deprecated */
        set: function (value) {
            Object(__WEBPACK_IMPORTED_MODULE_5__utils_warn_once__["a" /* warnOnce */])('tooltipPopupDelay is deprecated, use `delay` instead');
            this.delay = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_tooltipTrigger", {
        /** @deprecated -  please use `triggers` instead */
        get: function () {
            Object(__WEBPACK_IMPORTED_MODULE_5__utils_warn_once__["a" /* warnOnce */])('tooltipTrigger was deprecated, please use `triggers` instead');
            return this.triggers;
        },
        set: function (value) {
            Object(__WEBPACK_IMPORTED_MODULE_5__utils_warn_once__["a" /* warnOnce */])('tooltipTrigger was deprecated, please use `triggers` instead');
            this.triggers = (value || '').toString();
        },
        enumerable: true,
        configurable: true
    });
    TooltipDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._tooltip.listen({
            triggers: this.triggers,
            show: function () { return _this.show(); }
        });
        this.tooltipChange.subscribe(function (value) {
            if (!value) {
                _this._tooltip.hide();
            }
        });
    };
    /**
     * Toggles an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     */
    TooltipDirective.prototype.toggle = function () {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    };
    /**
     * Opens an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     */
    TooltipDirective.prototype.show = function () {
        var _this = this;
        if (this.isOpen ||
            this.isDisabled ||
            this._delayTimeoutId ||
            !this.tooltip) {
            return;
        }
        var showTooltip = function () {
            if (_this._delayTimeoutId) {
                _this._delayTimeoutId = undefined;
            }
            _this._tooltip
                .attach(__WEBPACK_IMPORTED_MODULE_1__tooltip_container_component__["a" /* TooltipContainerComponent */])
                .to(_this.container)
                .position({ attachment: _this.placement })
                .show({
                content: _this.tooltip,
                placement: _this.placement,
                containerClass: _this.containerClass
            });
        };
        var cancelDelayedTooltipShowing = function () {
            if (_this._tooltipCancelShowFn) {
                _this._tooltipCancelShowFn();
            }
        };
        if (this.delay) {
            var timer_1 = __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].timer(this.delay).subscribe(function () {
                showTooltip();
                cancelDelayedTooltipShowing();
            });
            if (this.triggers) {
                var triggers = Object(__WEBPACK_IMPORTED_MODULE_6__utils_triggers__["b" /* parseTriggers */])(this.triggers);
                this._tooltipCancelShowFn = this._renderer.listen(this._elementRef.nativeElement, triggers[0].close, function () {
                    timer_1.unsubscribe();
                    cancelDelayedTooltipShowing();
                });
            }
        }
        else {
            showTooltip();
        }
    };
    /**
     * Closes an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     */
    TooltipDirective.prototype.hide = function () {
        var _this = this;
        if (this._delayTimeoutId) {
            clearTimeout(this._delayTimeoutId);
            this._delayTimeoutId = undefined;
        }
        if (!this._tooltip.isShown) {
            return;
        }
        this._tooltip.instance.classMap.in = false;
        setTimeout(function () {
            _this._tooltip.hide();
        }, this._fadeDuration);
    };
    TooltipDirective.prototype.ngOnDestroy = function () {
        this._tooltip.dispose();
    };
    TooltipDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[tooltip], [tooltipHtml]',
                    exportAs: 'bs-tooltip'
                },] },
    ];
    /** @nocollapse */
    TooltipDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_3__component_loader_index__["a" /* ComponentLoaderFactory */], },
        { type: __WEBPACK_IMPORTED_MODULE_2__tooltip_config__["a" /* TooltipConfig */], },
    ]; };
    TooltipDirective.propDecorators = {
        'tooltip': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'tooltipChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'placement': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'triggers': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'container': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'isOpen': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'isDisabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'containerClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'delay': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'onShown': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'onHidden': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'htmlContent': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['tooltipHtml',] },],
        '_placement': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['tooltipPlacement',] },],
        '_isOpen': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['tooltipIsOpen',] },],
        '_enable': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['tooltipEnable',] },],
        '_appendToBody': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['tooltipAppendToBody',] },],
        '_animation': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['tooltipAnimation',] },],
        '_popupClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['tooltipClass',] },],
        '_tooltipContext': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['tooltipContext',] },],
        '_tooltipPopupDelay': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['tooltipPopupDelay',] },],
        '_fadeDuration': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['tooltipFadeDuration',] },],
        '_tooltipTrigger': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['tooltipTrigger',] },],
        'tooltipStateChanged': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__utils_decorators__["a" /* OnChange */])(),
        __metadata("design:type", Object)
    ], TooltipDirective.prototype, "tooltip", void 0);
    return TooltipDirective;
}());

//# sourceMappingURL=tooltip.directive.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/tooltip/tooltip.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TooltipModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tooltip_container_component__ = __webpack_require__("./node_modules/ngx-bootstrap/tooltip/tooltip-container.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tooltip_directive__ = __webpack_require__("./node_modules/ngx-bootstrap/tooltip/tooltip.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tooltip_config__ = __webpack_require__("./node_modules/ngx-bootstrap/tooltip/tooltip.config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component_loader_index__ = __webpack_require__("./node_modules/ngx-bootstrap/component-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__positioning_index__ = __webpack_require__("./node_modules/ngx-bootstrap/positioning/index.js");







var TooltipModule = (function () {
    function TooltipModule() {
    }
    TooltipModule.forRoot = function () {
        return {
            ngModule: TooltipModule,
            providers: [__WEBPACK_IMPORTED_MODULE_4__tooltip_config__["a" /* TooltipConfig */], __WEBPACK_IMPORTED_MODULE_5__component_loader_index__["a" /* ComponentLoaderFactory */], __WEBPACK_IMPORTED_MODULE_6__positioning_index__["a" /* PositioningService */]]
        };
    };
    TooltipModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"]],
                    declarations: [__WEBPACK_IMPORTED_MODULE_3__tooltip_directive__["a" /* TooltipDirective */], __WEBPACK_IMPORTED_MODULE_2__tooltip_container_component__["a" /* TooltipContainerComponent */]],
                    exports: [__WEBPACK_IMPORTED_MODULE_3__tooltip_directive__["a" /* TooltipDirective */]],
                    entryComponents: [__WEBPACK_IMPORTED_MODULE_2__tooltip_container_component__["a" /* TooltipContainerComponent */]]
                },] },
    ];
    /** @nocollapse */
    TooltipModule.ctorParameters = function () { return []; };
    return TooltipModule;
}());

//# sourceMappingURL=tooltip.module.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/observable/timer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_timer__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/timer.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_timer PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].timer = __WEBPACK_IMPORTED_MODULE_1__observable_timer__["a" /* timer */];
//# sourceMappingURL=timer.js.map


/***/ }),

/***/ "./src/app/mocks/estadoparte.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ESTADOPARTE; });
var ESTADOPARTE = [
    { value: 'TE', name: 'Terminada' },
    { value: 'PM', name: 'Pendiente por material' },
    { value: 'PC', name: 'Pendiente por restricciones de cliente' },
    { value: 'PS', name: 'Pendiente por seguridad' },
    { value: 'FJ', name: 'Pendiente por fin de jornada' },
];


/***/ }),

/***/ "./src/app/reportes/auditoria/auditoria.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/reportes/auditoria/auditoria.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-wrapper\">\n  <!-- ============================================================== -->\n  <!-- Container fluid  -->\n  <!-- ============================================================== -->\n  <div class=\"container-fluid\">\n    <!-- ============================================================== -->\n    <!-- Bread crumb and right sidebar toggle -->\n    <!-- ============================================================== -->\n    \n    <!-- ============================================================== -->\n    <!-- End Bread crumb and right sidebar toggle -->\n    <!-- ============================================================== -->\n    <!-- ============================================================== -->\n    <!-- Start Page Content -->\n    <!-- ============================================================== -->\n    <div class=\"row\">\n\n\n\n      <div class=\"col-12\">\n\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <h4 class=\"card-title\">Log de cambios</h4>\n            <h6 class=\"card-subtitle\"></h6>\n           \n            <div class=\"table-responsive\">\n              <table id=\"example23\" class=\"display nowrap table table-hover m-t-30  table-striped table-bordered\" cellspacing=\"0\" width=\"100%\">\n                <thead>\n                  <tr>\n                    <th>Opción</th>\n                    <th>Campo</th>   \n                    <th>Usuario</th>                     \n                    <th>Fecha creación</th>\n                 \n                  </tr>\n                </thead>\n                <tfoot>\n                  <tr>\n                    <th>Opción</th>\n                    <th>Campo</th>   \n                    <th>Usuario</th>                     \n                    <th>Fecha creación</th>\n                  </tr>\n                </tfoot>\n                <tbody>\n                  <tr *ngFor=\"let row of listaitem\">\n                    <td>{{row.opcion}}</td>\n                    <td>{{row.campo}}</td>\n                    <td>{{row.usuario.name}}</td>\n                    <td>\n                      {{row.created_at}}\n\n                    </td>\n                  </tr>\n\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/reportes/auditoria/auditoria.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuditoriaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng4_loading_spinner__ = __webpack_require__("./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_datatables_net__ = __webpack_require__("./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_datatables_net___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_datatables_net__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_datatables_net_bs4__ = __webpack_require__("./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_datatables_net_bs4___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_datatables_net_bs4__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_datatables_net_buttons__ = __webpack_require__("./node_modules/datatables.net-buttons/js/dataTables.buttons.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_datatables_net_buttons___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_datatables_net_buttons__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__zonaTecnica_zona_tecnica_service__ = __webpack_require__("./src/app/zonaTecnica/zona-tecnica.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_auditoria_auditoria_service__ = __webpack_require__("./src/app/shared/auditoria/auditoria.service.ts");
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









var AuditoriaComponent = /** @class */ (function () {
    function AuditoriaComponent(spinnerService, zonaTecnicaService, auditoriaService, notificationService, router, route) {
        this.spinnerService = spinnerService;
        this.zonaTecnicaService = zonaTecnicaService;
        this.auditoriaService = auditoriaService;
        this.notificationService = notificationService;
        this.router = router;
        this.route = route;
        this.listaitem = [];
        this.table = null;
    }
    AuditoriaComponent.prototype.ngOnInit = function () {
        this.spinnerService.show();
        this.get();
    };
    AuditoriaComponent.prototype.get = function () {
        var _this = this;
        var $id = this.route.snapshot.paramMap.get('id');
        this.auditoriaService.get($id)
            .subscribe(function (response) {
            _this.listaitem = response.data;
            _this.reInitDatatable();
            _this.spinnerService.hide();
        });
    };
    AuditoriaComponent.prototype.loadtable = function () {
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
    AuditoriaComponent.prototype.ngAfterViewInit = function () {
    };
    AuditoriaComponent.prototype.delete = function (id) {
        var _this = this;
        this.spinnerService.show();
        this.zonaTecnicaService.delete(id)
            .subscribe(function (value) {
            _this.notificationService.onSuccess('ZOna Tecnica Eliminada con Exito.');
            _this.get();
            _this.spinnerService.hide();
        }, function (err) {
            _this.spinnerService.hide();
            if (err.status_code == 400) {
                _this.notificationService.onError("La zona tecnica no se puede eliminar ya que tiene informacion asociada.");
            }
            else {
                _this.notificationService.onError("Se ha producido un error.");
            }
        });
    };
    AuditoriaComponent.prototype.reInitDatatable = function () {
        var _this = this;
        if (this.table) {
            this.table.destroy();
            this.table = null;
        }
        setTimeout(function () { return _this.loadtable(); }, 0);
    };
    AuditoriaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-auditoria',
            template: __webpack_require__("./src/app/reportes/auditoria/auditoria.component.html"),
            styles: [__webpack_require__("./src/app/reportes/auditoria/auditoria.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng4_loading_spinner__["Ng4LoadingSpinnerService"],
            __WEBPACK_IMPORTED_MODULE_6__zonaTecnica_zona_tecnica_service__["a" /* ZonaTecnicaService */],
            __WEBPACK_IMPORTED_MODULE_7__shared_auditoria_auditoria_service__["a" /* AuditoriaService */],
            __WEBPACK_IMPORTED_MODULE_2__shared__["k" /* NotificationService */],
            __WEBPACK_IMPORTED_MODULE_8__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_8__angular_router__["a" /* ActivatedRoute */]])
    ], AuditoriaComponent);
    return AuditoriaComponent;
}());



/***/ }),

/***/ "./src/app/reportes/comentarios/comentarios.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/reportes/comentarios/comentarios.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-wrapper\">\n  <!-- ============================================================== -->\n  <!-- Container fluid  -->\n  <!-- ============================================================== -->\n  <div class=\"container-fluid\">\n    <!-- ============================================================== -->\n    <!-- Bread crumb and right sidebar toggle -->\n    <!-- ============================================================== -->\n    \n    <!-- ============================================================== -->\n    <!-- End Bread crumb and right sidebar toggle -->\n    <!-- ============================================================== -->\n    <!-- ============================================================== -->\n    <!-- Start Page Content -->\n    <!-- ============================================================== -->\n    <div class=\"row\">\n\n      <div class=\"col-12\">\n\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <h4 class=\"card-title\">Informe de Comentarios</h4>\n            <h6 class=\"card-subtitle\"></h6>\n            <form>\n              <div class=\"row\">\n\n                <div class=\"col-md-3\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label\">Cliente</label>\n\n\n                    <input [(ngModel)]=\"razon_social\" [typeahead]=\"dataSource\" [typeaheadAsync]=\"true\"\n                      (typeaheadLoading)=\"changeTypeaheadLoading($event)\" (typeaheadOnSelect)=\"typeaheadOnSelect($event)\"\n                      [typeaheadOptionsLimit]=\"7\" typeaheadOptionField=\"razon_social\" placeholder=\"Seleccione el cliente\"\n                      class=\"form-control\" name=\"test\" autocomplete=\"off\">\n                    <div *ngIf=\"typeaheadLoading\">Cargando..</div>\n                    <small class=\"form-control-feedback\"> Seleccione el cliente </small>\n                  </div>\n\n                </div>\n                <div class=\"col-md-3\">\n                  <div class=\"form-group \">\n                    <label class=\"control-label\">Estacion Servicio</label>\n                    <select class=\"form-control custom-select\" [(ngModel)]=\"datafilters.estacionservicio\" name=\"ctrlestacionservicio\">\n                      <option [value]=\"-1\">Seleccione</option>\n                      <option *ngFor=\"let o of estacionservicio\" [value]=\"o.id.toString()\">\n                        {{ o.name }}\n                      </option>\n                    </select>\n                    <small class=\"form-control-feedback\"> Seleccione las zonas tecnicas asociadas al usaurio </small>\n                  </div>\n                </div>\n                <div class=\"col-md-3\">\n                  <div class=\"form-group \">\n                    <label class=\"control-label\">Zona Tecnica</label>\n                    <select class=\"form-control custom-select\" [(ngModel)]=\"datafilters.zonatecnica\" name=\"ctrlzonatecnica\">\n                      <option [value]=\"-1\">Seleccione</option>\n                      <option *ngFor=\"let o of zonastecnicas\" [value]=\"o.id.toString()\">\n                        {{ o.name }}\n                      </option>\n                    </select>\n                    <small class=\"form-control-feedback\"> Seleccione las zonas tecnicas asociadas al usaurio </small>\n                  </div>\n                </div>\n                <div class=\"col-md-3\">\n                  <div class=\"form-group \">\n                    <label class=\"control-label\">Estado </label>\n                    <select class=\"form-control custom-select\" [(ngModel)]=\"datafilters.estado\" name=\"ctrlestado\">\n                      <option [value]=\"-1\">Seleccione</option>\n                      <option *ngFor=\"let o of estadoincidencias\" [value]=\"o.value.toString()\">\n                        {{ o.name }}\n                      </option>\n                    </select>\n                    <small class=\"form-control-feedback\"> Seleccione el estado </small>\n                  </div>\n                </div>\n                <div class=\"col-md-3\">\n                  <div class=\"form-group \">\n                    <label class=\"control-label\">Categoria Incidente</label>\n                    <select class=\"form-control custom-select\" [(ngModel)]=\"datafilters.categoria\" name=\"ctrlcategoria\">\n                      <option [value]=\"-1\">Seleccione</option>\n                      <option *ngFor=\"let o of categorias\" [value]=\"o.id.toString()\">\n                        {{ o.categoria }} ({{ o.tipocontrato }})\n                      </option>\n                    </select>\n                    <small class=\"form-control-feedback\"> Seleccione la Categoria Incidente </small>\n                  </div>\n                </div>\n                <div class=\"col-md-2\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label\">Fecha Inicial</label>\n\n\n                    <input type=\"text\" id=\"name\" class=\"form-control\" placeholder=\"Escriba  la fecha inicial\"\n                      [(ngModel)]=\"datafilters.fechainicio\" name=\"fechainicio\" autocomplete=\"off\" bsDatepicker #dp=\"bsDatepicker\">\n\n\n\n                  </div>\n\n                </div>\n                <div class=\"col-md-2\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label\">Fecha Final</label>\n\n\n                    <input type=\"text\" id=\"name\" class=\"form-control\" placeholder=\"Escriba  la fecha inicial\"\n                      [(ngModel)]=\"datafilters.fechafin\" name=\"fechafin\" autocomplete=\"off\" bsDatepicker #dp=\"bsDatepicker\">\n\n                  </div>\n\n                </div>\n                <div class=\"col-md-3\">\n                  <div class=\"form-group \">\n                    <label class=\"control-label\">Tecnico</label>\n                    <select class=\"form-control custom-select\" [(ngModel)]=\"datafilters.tecnico\" name=\"ctrltecnico\">\n                      <option [value]=\"-1\">Seleccione</option>\n                      <option *ngFor=\"let o of tecnicos\" [value]=\"o.id.toString()\">\n                        {{ o.name }}\n                      </option>\n                    </select>\n                    <small class=\"form-control-feedback\"> Seleccione la Categoria Incidente </small>\n                  </div>\n                </div>\n                <div class=\"col-md-2\">\n\n\n\n                  <div class=\"form-group\">\n                    <label class=\"control-label\"> &nbsp;</label><br>\n                    <button type=\"submit\" class=\"btn btn-success\" (click)=\"get()\"> <i class=\"fa fa-search\"></i>\n                      Consultar</button>\n                  </div>\n                </div>\n\n\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-12\">\n\n        <div class=\"card\">\n          <div class=\"card-body\">\n\n\n            <div class=\"table-responsive\" *ngIf=\"results\">\n              <table id=\"example23\" class=\"display nowrap table table-bordered table-hover  m-t-30  \" cellspacing=\"0\"\n                width=\"100%\">\n                <thead>\n                  <tr>\n\n                    <th>Comentarios</th>\n                  </tr>\n                </thead>\n                <tfoot>\n                  <tr>\n\n                    <th>Comentarios</th>\n\n                  </tr>\n                </tfoot>\n                <tbody>\n                  <ng-container *ngFor=\"let row of results; let i = index\">\n                    <tr routerLink=\"/incidencia/{{row.estado=='CLO'?'resumen':'edit'}}/{{row.id}}\">\n                      <td class=\"font-weight-bold text-info\" [attr.data-search]=\"row.id\">\n                        <span>#{{row.id}}</span> &nbsp;<span>{{row.titulo}} </span> &nbsp;<span class=\"badge badge-pill {{getclassestadoincidencia(row.estado)}} \">\n                          {{row.estado}}</span></td>\n\n\n                    </tr>\n                    <ng-container *ngFor=\"let commentitm of row.comentarios; let i = index\">\n                      <tr routerLink=\"/incidencia/{{row.estado=='CLO'?'resumen':'edit'}}/{{row.id}}\">\n                        <td  [attr.data-search]=\"row.id\"><a href=\"javascript:void(0)\"  class=\"list-group-item list-group-item-action flex-column align-items-start\">\n                          <div class=\"d-flex w-100 justify-content-between\">\n                            <h5 class=\"mb-1\"><i class=\"ti-comment\"></i> {{commentitm.user.name}}</h5>\n                            <small class=\"text-muted\">hace {{calculardias(commentitm.created_at)}} dias.</small>\n                          </div>\n                          <p class=\"mb-1\">{{commentitm.comentario}}</p>\n                          <small class=\"text-muted\">{{commentitm.created_at}}</small>\n                        </a></td></tr>\n                        \n                    </ng-container>\n\n\n\n\n                  </ng-container>\n                </tbody>\n\n\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/reportes/comentarios/comentarios.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComentariosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng4_loading_spinner__ = __webpack_require__("./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reportes_service__ = __webpack_require__("./src/app/reportes/reportes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_datatables_net__ = __webpack_require__("./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_datatables_net___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_datatables_net__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_datatables_net_bs4__ = __webpack_require__("./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_datatables_net_bs4___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_datatables_net_bs4__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_datatables_net_buttons__ = __webpack_require__("./node_modules/datatables.net-buttons/js/dataTables.buttons.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_datatables_net_buttons___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_datatables_net_buttons__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_datatables_net_buttons_bs4__ = __webpack_require__("./node_modules/datatables.net-buttons-bs4/js/buttons.bootstrap4.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_datatables_net_buttons_bs4___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_datatables_net_buttons_bs4__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__mocks_estadoincidente__ = __webpack_require__("./src/app/mocks/estadoincidente.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__zonaTecnica_zona_tecnica_service__ = __webpack_require__("./src/app/zonaTecnica/zona-tecnica.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__clientes_cliente_service__ = __webpack_require__("./src/app/clientes/cliente.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__estacionservicio_estacionservicio_service__ = __webpack_require__("./src/app/estacionservicio/estacionservicio.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ngx_bootstrap_datepicker__ = __webpack_require__("./node_modules/ngx-bootstrap/datepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var ComentariosComponent = /** @class */ (function () {
    function ComentariosComponent(spinnerService, reportesService, router, route, notificationService, zonaTecnicaService, clienteService, localDataService, estacionservicioService, localeService) {
        var _this = this;
        this.spinnerService = spinnerService;
        this.reportesService = reportesService;
        this.router = router;
        this.route = route;
        this.notificationService = notificationService;
        this.zonaTecnicaService = zonaTecnicaService;
        this.clienteService = clienteService;
        this.localDataService = localDataService;
        this.estacionservicioService = estacionservicioService;
        this.localeService = localeService;
        this.table = null;
        this.estadoincidencias = __WEBPACK_IMPORTED_MODULE_9__mocks_estadoincidente__["a" /* ESTADOINCIDENCIAS */];
        this.datafilters = {
            estado: '-1', zonatecnica: '-1', filters: '1',
            categoria: '-1', codigo_cliente: '', estacionservicio: '-1',
            fechainicio: '', fechafin: '', tecnico: '-1'
        };
        this.localeService.use('es');
        this.dataSource = __WEBPACK_IMPORTED_MODULE_11_rxjs__["Observable"].create(function (observer) {
            // Runs on every search
            _this.datafilters.codigo_cliente = '';
            _this.clienteService.gettoken(_this.razon_social).subscribe(function (value) {
                observer.next(value.data);
            });
        });
    }
    ComentariosComponent.prototype.ngOnInit = function () {
        this.getZonasTecnicas();
        this.get();
    };
    ComentariosComponent.prototype.get = function () {
        var _this = this;
        var fi = this.datafilters.fechainicio;
        var ff = this.datafilters.fechafin;
        if (this.datafilters.fechainicio != '' && this.datafilters.fechainicio != null) {
            this.datafilters.fechainicio = __WEBPACK_IMPORTED_MODULE_15_moment__(this.datafilters.fechainicio).format("DD-MM-YYYY HH:mm:ss");
        }
        if (this.datafilters.fechafin != '' && this.datafilters.fechafin != null) {
            this.datafilters.fechafin = __WEBPACK_IMPORTED_MODULE_15_moment__(this.datafilters.fechafin).format("DD-MM-YYYY HH:mm:ss");
        }
        this.spinnerService.show();
        this.reportesService.consultar('comentario', this.datafilters)
            .subscribe(function (response) {
            _this.datafilters.fechainicio = fi;
            _this.datafilters.fechafin = ff;
            if (_this.datafilters.filters != '') {
                _this.categorias = response.data.categorias;
                _this.tecnicos = response.data.tecnicos;
            }
            else {
                _this.results = response.data;
                _this.reInitDatatable();
            }
            _this.spinnerService.hide();
            _this.datafilters.filters = '';
        }, function (err) {
            _this.spinnerService.hide();
            _this.notificationService.onError("Se ha producido un error.");
        });
    };
    ComentariosComponent.prototype.reInitDatatable = function () {
        var _this = this;
        if (this.table) {
            this.table.destroy();
            this.table = null;
        }
        setTimeout(function () { return _this.loadtable(); }, 0);
    };
    ComentariosComponent.prototype.loadtable = function () {
        var exampleId = $('#example23');
        this.table = exampleId.DataTable({
            dom: 'Bfrtip',
            buttons: [
                'copy', 'csv', 'excel', 'pdf', 'print'
            ],
            "ordering": false,
            paging: true,
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
            },
            createdRow: function (row, data, dataIndex) {
            }
        });
        $('.buttons-copy, .buttons-csv, .buttons-print, .buttons-pdf, .buttons-excel').addClass('btn btn-primary mr-1');
    };
    ComentariosComponent.prototype.getZonasTecnicas = function () {
        var _this = this;
        this.zonaTecnicaService.get(1).subscribe(function (value) {
            _this.zonastecnicas = value.data;
            _this.spinnerService.hide();
        });
    };
    ComentariosComponent.prototype.changeTypeaheadLoading = function (e) {
        this.typeaheadLoading = e;
    };
    ComentariosComponent.prototype.typeaheadOnSelect = function (e) {
        this.datafilters.codigo_cliente = e.item.codigo_cliente;
        this.cargarEstacionServicio();
    };
    ComentariosComponent.prototype.cargarEstacionServicio = function () {
        var _this = this;
        var empresa = 0;
        this.spinnerService.show();
        empresa = this.localDataService.getLocalData('empresaSeleccionada').id;
        this.estacionservicioService.getbycliente(empresa, this.datafilters.codigo_cliente).subscribe(function (value) {
            _this.estacionservicio = value.data;
            _this.spinnerService.hide();
        });
    };
    ComentariosComponent.prototype.getclassestadoincidencia = function (estado) {
        var result;
        result = this.estadoincidencias.filter(function (estadoinc) { return estadoinc.value === estado; });
        return result.length > 0 ? result[0].label : '';
    };
    ComentariosComponent.prototype.calculardias = function (fecha) {
        var actual = __WEBPACK_IMPORTED_MODULE_15_moment__();
        fecha = __WEBPACK_IMPORTED_MODULE_15_moment__(fecha);
        var diff = actual.diff(fecha, 'days');
        return diff;
    };
    ComentariosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-comentarios',
            template: __webpack_require__("./src/app/reportes/comentarios/comentarios.component.html"),
            styles: [__webpack_require__("./src/app/reportes/comentarios/comentarios.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng4_loading_spinner__["Ng4LoadingSpinnerService"],
            __WEBPACK_IMPORTED_MODULE_2__reportes_service__["a" /* ReportesService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__shared__["k" /* NotificationService */],
            __WEBPACK_IMPORTED_MODULE_10__zonaTecnica_zona_tecnica_service__["a" /* ZonaTecnicaService */],
            __WEBPACK_IMPORTED_MODULE_12__clientes_cliente_service__["a" /* ClienteService */],
            __WEBPACK_IMPORTED_MODULE_4__shared__["i" /* LocalDataService */],
            __WEBPACK_IMPORTED_MODULE_13__estacionservicio_estacionservicio_service__["a" /* EstacionservicioService */],
            __WEBPACK_IMPORTED_MODULE_14_ngx_bootstrap_datepicker__["b" /* BsLocaleService */]])
    ], ComentariosComponent);
    return ComentariosComponent;
}());



/***/ }),

/***/ "./src/app/reportes/componentesporcliente/componentesporcliente.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/reportes/componentesporcliente/componentesporcliente.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-wrapper\">\n  <!-- ============================================================== -->\n  <!-- Container fluid  -->\n  <!-- ============================================================== -->\n  <div class=\"container-fluid\">\n    <!-- ============================================================== -->\n    <!-- Bread crumb and right sidebar toggle -->\n    <!-- ============================================================== -->\n    \n    <!-- ============================================================== -->\n    <!-- End Bread crumb and right sidebar toggle -->\n    <!-- ============================================================== -->\n    <!-- ============================================================== -->\n    <!-- Start Page Content -->\n    <!-- ============================================================== -->\n    <div class=\"row\">\n\n      <div class=\"col-12\">\n\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <h4 class=\"card-title\">Reporte de Componentes</h4>\n            <h6 class=\"card-subtitle\"></h6>\n            <form>\n              <div class=\"row\">\n\n                <div class=\"col-md-4\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label\">Cliente</label>\n\n\n                    <input [(ngModel)]=\"razon_social\" [typeahead]=\"dataSource\" [typeaheadAsync]=\"true\"\n                      (typeaheadLoading)=\"changeTypeaheadLoading($event)\" (typeaheadOnSelect)=\"typeaheadOnSelect($event)\"\n                      [typeaheadOptionsLimit]=\"7\" typeaheadOptionField=\"razon_social\" placeholder=\"Seleccione el cliente\"\n                      class=\"form-control\" name=\"test\" autocomplete=\"off\" \n                      [typeaheadItemTemplate]=\"clientItemTemplate\">\n                      <ng-template #clientItemTemplate let-model=\"item\" let-index=\"index\">\n                        <h5>{{model.razon_social}}  <span class=\"text-danger\" *ngIf=\"model.bloqueado!='N'\">En Lista Negra</span></h5>\n                       \n                      </ng-template>\n                    <div *ngIf=\"typeaheadLoading\">Cargando..</div>\n                    <small class=\"form-control-feedback\"> Seleccione el cliente </small>\n                  </div>\n\n                </div>\n                <div class=\"col-md-4\">\n                  <div class=\"form-group \">\n                    <label class=\"control-label\">Zona Tecnica</label>\n                    <select class=\"form-control custom-select\" [(ngModel)]=\"fk_zonatecnica\" name=\"ctrlzonatecnica\">\n                      <option [value]=\"-1\">Seleccione</option>\n                      <option *ngFor=\"let o of zonas\" [value]=\"o.id.toString()\">\n                        {{ o.name }}\n                      </option>\n                    </select>\n                    <small class=\"form-control-feedback\"> Seleccione las zonas tecnicas asociadas al usaurio </small>\n                  </div>\n                </div>\n                <div class=\"col-md-4\">\n\n\n\n                  <div class=\"form-group\">\n                    <label class=\"control-label\"> &nbsp;</label><br>\n                    <button type=\"submit\" class=\"btn btn-success\" (click)=\"get()\"> <i class=\"fa fa-search\"></i>\n                      Consultar</button>\n                  </div>\n                </div>\n\n\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-12\">\n\n        <div class=\"card\">\n          <div class=\"card-body\">\n\n\n            <div class=\"table-responsive\" *ngIf=\"lista_item\">\n              <table id=\"example23\" class=\"display nowrap table table-bordered m-t-30  \" cellspacing=\"0\" width=\"100%\">\n                <thead>\n                  <tr>\n                    <th>Estaciones</th>\n                    <th></th>\n                  </tr>\n                </thead>\n                <tfoot>\n                  <tr>\n                    <th>Estaciones</th>\n                    <th></th>\n                  </tr>\n                </tfoot>\n                <tbody>\n                  <ng-container *ngFor=\"let row of lista_item; let i = index\">\n                    <tr >\n                      <td class=\"font-weight-bold text-info\" [attr.data-search]=\"row.name\">Información Estación</td>\n                      <td class=\"font-weight-bold text-muted \">{{row.name}}</td>\n\n\n                    </tr>\n                    <tr>\n                      <td  [attr.data-search]=\"row.name\">Cliente:{{row.razon_social}}</td>\n                      <td>Dirección: {{row.direccion}} </td>\n                    </tr>\n                    <tr>\n                      <td  [attr.data-search]=\"row.name\">Zona Tecnica:{{row.zonatecnica.name}}</td>\n                      <td>Telefonos: {{row.telefonos}}</td>\n                    </tr>\n                    <tr>\n                      <td  [attr.data-search]=\"row.name\">Fecha Creación: {{row.updated_at}}</td>\n                      <td>\n                      </td>\n                    </tr>\n\n\n\n                    <ng-container *ngFor=\"let componete of row.componentes; let i = index\">\n\n                      <tr >\n                        <td class=\"text-info \"  [attr.data-search]=\"row.name\">\n                          {{componete.tipocomponente.name}}\n                        </td>\n                        <td></td>\n                      </tr>\n                      <tr *ngFor=\"let field of componete.componentfields\">\n                        <td  [attr.data-search]=\"row.name\">\n                          <strong>{{field.tipocomponentfield.name}}</strong>\n                        </td>\n                        <td>{{field.value}}</td>\n                      </tr>\n                      <ng-container *ngFor=\"let fieldad of componete.componentes; let i = index\">\n                        <tr >\n                          <td  [attr.data-search]=\"row.name\" >\n                            <strong>{{fieldad.tipocomponente.name}}</strong>\n                          </td>\n                          <td></td>\n                        </tr>\n                        <ng-container *ngFor=\"let compad of fieldad.componentfields\">\n                          <tr *ngIf=\"fieldad.id\">\n                            <td  [attr.data-search]=\"row.name\">\n                              <strong>{{compad.tipocomponentfield.name}}</strong>\n                            </td>\n                            <td>{{compad.value}}</td>\n                          </tr >\n                          <tr *ngIf=\"!fieldad.id\">\n                            <td  [attr.data-search]=\"row.name\" >\n                              <strong>{{compad.name}}</strong>\n                            </td>\n                            <td> {{compad.result}}</td>\n                          </tr>\n                        </ng-container>\n                      </ng-container>\n                    </ng-container>\n\n\n                  </ng-container>\n                </tbody>\n\n\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/reportes/componentesporcliente/componentesporcliente.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentesporclienteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reportes_service__ = __webpack_require__("./src/app/reportes/reportes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__ = __webpack_require__("./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__zonaTecnica_zona_tecnica_service__ = __webpack_require__("./src/app/zonaTecnica/zona-tecnica.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tipocomponente_tipocompoenente_service__ = __webpack_require__("./src/app/tipocomponente/tipocompoenente.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__clientes_cliente_service__ = __webpack_require__("./src/app/clientes/cliente.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_datatables_net__ = __webpack_require__("./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_datatables_net___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_datatables_net__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_datatables_net_bs4__ = __webpack_require__("./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_datatables_net_bs4___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_datatables_net_bs4__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_datatables_net_buttons__ = __webpack_require__("./node_modules/datatables.net-buttons/js/dataTables.buttons.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_datatables_net_buttons___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_datatables_net_buttons__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_datatables_net_buttons_bs4__ = __webpack_require__("./node_modules/datatables.net-buttons-bs4/js/buttons.bootstrap4.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_datatables_net_buttons_bs4___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_datatables_net_buttons_bs4__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_can_deactivate_guard_can_deactivate_guard_service__ = __webpack_require__("./src/app/shared/can-deactivate-guard/can-deactivate-guard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var ComponentesporclienteComponent = /** @class */ (function () {
    function ComponentesporclienteComponent(spinnerService, reportesService, router, route, notificationService, localDataService, zonaTecnicaService, tipocompoenenteService, clienteService, candeactivateguard) {
        var _this = this;
        this.spinnerService = spinnerService;
        this.reportesService = reportesService;
        this.router = router;
        this.route = route;
        this.notificationService = notificationService;
        this.localDataService = localDataService;
        this.zonaTecnicaService = zonaTecnicaService;
        this.tipocompoenenteService = tipocompoenenteService;
        this.clienteService = clienteService;
        this.candeactivateguard = candeactivateguard;
        this.table = null;
        this.candeactivateguard.setedit(false);
        this.fk_zonatecnica = -1;
        this.dataSource = __WEBPACK_IMPORTED_MODULE_8_rxjs__["Observable"].create(function (observer) {
            // Runs on every search
            _this.clienteService.gettoken(_this.razon_social).subscribe(function (value) {
                observer.next(value.data);
            });
        });
    }
    ComponentesporclienteComponent.prototype.ngOnInit = function () {
        this.spinnerService.show();
        this.cargarZonas();
        this.cargartiposcomponente();
    };
    ComponentesporclienteComponent.prototype.cargarZonas = function () {
        var _this = this;
        this.zonaTecnicaService.get(1).subscribe(function (value) {
            _this.zonas = value.data;
        });
    };
    ComponentesporclienteComponent.prototype.cargartiposcomponente = function () {
        var _this = this;
        this.tipocompoenenteService.get(1).subscribe(function (value) {
            _this.tiposcomponente = value.data;
            _this.spinnerService.hide();
        });
    };
    ComponentesporclienteComponent.prototype.changeTypeaheadLoading = function (e) {
        this.typeaheadLoading = e;
    };
    ComponentesporclienteComponent.prototype.typeaheadOnSelect = function (e) {
        this.codigo_cliente = e.item.codigo_cliente;
    };
    ComponentesporclienteComponent.prototype.loadtable = function () {
        var exampleId = $('#example23');
        this.table = exampleId.DataTable({
            dom: 'Bfrtip',
            buttons: [
                'copy', 'csv', 'excel', 'pdf', 'print'
            ],
            "ordering": false,
            paging: false,
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
            },
            createdRow: function (row, data, dataIndex) {
            }
        });
        $('.buttons-copy, .buttons-csv, .buttons-print, .buttons-pdf, .buttons-excel').addClass('btn btn-primary mr-1');
    };
    ComponentesporclienteComponent.prototype.reInitDatatable = function () {
        var _this = this;
        if (this.table) {
            this.table.destroy();
            this.table = null;
        }
        setTimeout(function () { return _this.loadtable(); }, 0);
    };
    ComponentesporclienteComponent.prototype.get = function () {
        var _this = this;
        this.spinnerService.show();
        var data = { 'cliente': this.codigo_cliente, 'fk_zonatecnica': this.fk_zonatecnica == -1 ? '' : this.fk_zonatecnica };
        var values = $.param(data);
        this.reportesService.get(values)
            .subscribe(function (response) {
            _this.lista_item = response.data;
            _this.reInitDatatable();
            _this.spinnerService.hide();
        });
    };
    ComponentesporclienteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-componentesporcliente',
            template: __webpack_require__("./src/app/reportes/componentesporcliente/componentesporcliente.component.html"),
            styles: [__webpack_require__("./src/app/reportes/componentesporcliente/componentesporcliente.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__["Ng4LoadingSpinnerService"],
            __WEBPACK_IMPORTED_MODULE_2__reportes_service__["a" /* ReportesService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__shared__["k" /* NotificationService */],
            __WEBPACK_IMPORTED_MODULE_4__shared__["i" /* LocalDataService */],
            __WEBPACK_IMPORTED_MODULE_5__zonaTecnica_zona_tecnica_service__["a" /* ZonaTecnicaService */],
            __WEBPACK_IMPORTED_MODULE_6__tipocomponente_tipocompoenente_service__["a" /* TipocompoenenteService */],
            __WEBPACK_IMPORTED_MODULE_7__clientes_cliente_service__["a" /* ClienteService */],
            __WEBPACK_IMPORTED_MODULE_13__shared_can_deactivate_guard_can_deactivate_guard_service__["a" /* Candeactivateguard */]])
    ], ComponentesporclienteComponent);
    return ComponentesporclienteComponent;
}());



/***/ }),

/***/ "./src/app/reportes/conformidades/conformidades.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/reportes/conformidades/conformidades.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-wrapper\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <div class=\"card\">\n                    <div class=\"card-body\">\n                        <h4 class=\"card-title\">Informe de conformidades</h4>\n                        <h6 class=\"card-subtitle\"></h6>\n                        <form>\n                            <div class=\"row\">\n                                <div class=\"col-md-3\">\n                                    <div class=\"form-group \">\n                                      <label class=\"control-label\">Estacion Servicio</label>\n                                     \n                                      <ng-select [items]=\"estacionservicio\" bindLabel=\"name\" bindValue=\"id\" [multiple]=\"false\"\n                                      placeholder=\"Seleccione\" [(ngModel)]=\"datafilters.estacionservicio\"  (change)=\"onselectEstacionServicio($event)\"\n                                       name=\"ctrlestacionservicio\" #ctrlestacionservicio=\"ngModel\">\n                                    </ng-select>\n                                      <small class=\"form-control-feedback\"> Seleccione las zonas tecnicas asociadas al usaurio </small>\n                                    </div>\n                                  </div>\n                                  <div class=\"col-md-3\">\n                                    <div class=\"form-group\">\n                                      <label class=\"control-label\">Cliente</label>\n                  \n                  \n                                      <input [(ngModel)]=\"razon_social\" [typeahead]=\"dataSource\" [typeaheadAsync]=\"true\"\n                                        (typeaheadLoading)=\"changeTypeaheadLoading($event)\"\n                                        (typeaheadOnSelect)=\"typeaheadOnSelect($event)\" [typeaheadScrollable]=\"true\"\n                                        typeaheadOptionField=\"razon_social\" placeholder=\"Seleccione el cliente\" class=\"form-control\"\n                                        name=\"test\" autocomplete=\"off\">\n                                      <div *ngIf=\"typeaheadLoading\">Cargando..</div>\n                                      <small class=\"form-control-feedback\"> Seleccione el cliente </small>\n                                    </div>\n                  \n                                  </div>\n                                  <div class=\"col-md-3\">\n                                    <div class=\"form-group \">\n                                      <label class=\"control-label\">Zona Tecnica</label>\n                                      <select class=\"form-control custom-select\" [(ngModel)]=\"datafilters.zonatecnica\"\n                                        name=\"ctrlzonatecnica\">\n                                        <option [value]=\"-1\">Seleccione</option>\n                                        <option *ngFor=\"let o of zonastecnicas\" [value]=\"o.id.toString()\">\n                                          {{ o.name }}\n                                        </option>\n                                      </select>\n                                      <small class=\"form-control-feedback\"> Seleccione las zonas tecnicas asociadas al usaurio </small>\n                                    </div>\n                                  </div>\n                                  <div class=\"col-md-3\">\n                                    <div class=\"form-group \">\n                                      <label class=\"control-label\">Estado </label>\n                                      <select class=\"form-control custom-select\" [(ngModel)]=\"datafilters.estado\" name=\"ctrlestado\">\n                                        <option [value]=\"-1\">Seleccione</option>\n                                        <option *ngFor=\"let o of estadoincidencias\" [value]=\"o.value.toString()\">\n                                          {{ o.name }}\n                                        </option>\n                                      </select>\n                                      <small class=\"form-control-feedback\"> Seleccione el estado </small>\n                                    </div>\n                                  </div>\n                                  <div class=\"col-md-3\">\n                                    <div class=\"form-group \">\n                                      <label class=\"control-label\">Categoria Incidente</label>\n                                      <select class=\"form-control custom-select\" [(ngModel)]=\"datafilters.categoria\" name=\"ctrlcategoria\">\n                                        <option [value]=\"-1\">Seleccione</option>\n                                        <option *ngFor=\"let o of categorias\" [value]=\"o.id.toString()\">\n                                          {{ o.categoria }} ({{ o.tipocontrato }})\n                                        </option>\n                                      </select>\n                                      <small class=\"form-control-feedback\"> Seleccione la Categoria Incidente </small>\n                                    </div>\n                                  </div>\n                                  <div class=\"col-md-2\">\n                                    <div class=\"form-group\">\n                                      <label class=\"control-label\">Fecha Inicial</label>\n                  \n                  \n                                      <input type=\"text\" id=\"name\" class=\"form-control\" placeholder=\"Escriba  la fecha inicial\"\n                                        [(ngModel)]=\"datafilters.fechainicio\" name=\"fechainicio\" autocomplete=\"off\" bsDatepicker\n                                        #dp=\"bsDatepicker\">\n                  \n                  \n                  \n                                    </div>\n                  \n                                  </div>\n                                  <div class=\"col-md-2\">\n                                    <div class=\"form-group\">\n                                      <label class=\"control-label\">Fecha Final</label>\n                                      <input type=\"text\" id=\"name\" class=\"form-control\" placeholder=\"Escriba  la fecha inicial\"\n                                        [(ngModel)]=\"datafilters.fechafin\" name=\"fechafin\" autocomplete=\"off\" bsDatepicker\n                                        #dp=\"bsDatepicker\">\n                  \n                                    </div>\n                  \n                                  </div>\n                                  <div class=\"col-md-2\">\n                                    <div class=\"form-group\">\n                                      <label class=\"control-label\"> &nbsp;</label><br>\n                                      <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"loading\" (click)=\"get()\"> <i class=\"fa fa-search\"></i>\n                                        Consultar</button>\n                                    </div>\n                                  </div>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-12\">\n                <div class=\"card\">\n                    <div class=\"card-body\">\n                        <div class=\"table-responsive\" *ngIf=\"results\">\n                            <table id=\"example23\" class=\"display nowrap table table-bordered table-hover  m-t-30\" cellspacing=\"0\" width=\"100%\">\n                                <thead>\n                                    <tr>\n                                        <td>Aviso</td>\n                                        <td>Fecha aviso</td>\n                                        <td>Partes por aviso</td>\n                                        <td>¿Es incidencia?</td>\n                                        <td>Motivo</td>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let item of results\">\n                                        <td>{{item.id}}</td>\n                                        <td>{{item.created_at | date: 'dd/MM/yyyy'}}</td>\n                                        <td style=\"text-align: center;\">\n                                          {{item.partes_por_aviso}}\n                                        </td>                                    \n                                        <td style=\"text-align: center;\">\n                                            <ng-container *ngIf=\"item.isIncidencia\">\n                                                <!-- <i class=\"ti-calendar\"></i> asdad -->\n                                                SI\n                                            </ng-container>\n                                            <ng-container *ngIf=\"!item.isIncidencia\">\n                                              <!-- <i class=\"ti-calendar\"></i> asdasd -->\n                                              NO\n                                          </ng-container>\n                                        </td>\n                                        <td>\n                                          <div *ngFor=\"let mot of item?.motivos\" style=\"padding-left: 10px;padding-right: 10px;\">\n                                            <div>\n                                              <span style=\"font-weight: bold;\">{{mot.usuario_respuesta.name}}</span>\n                                              <span *ngIf=\"mot?.tipo\" style=\"font-weight: bold; background-color: blue; border-radius: 10px; color:white;padding:5px\">{{mot.tipo}}</span>\n                                              <span style=\"font-weight: bold; background-color: red; border-radius: 10px; color:white;padding:5px\">{{mot.fecha | date }}</span>\n\n                                            </div>\n                                            <span innerHTML=\"{{mot.description}}\"> </span>\n                                          </div>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/reportes/conformidades/conformidades.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConformidadesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_clientes_cliente_service__ = __webpack_require__("./src/app/clientes/cliente.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_estacionservicio_estacionservicio_service__ = __webpack_require__("./src/app/estacionservicio/estacionservicio.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_mocks_estadoincidente__ = __webpack_require__("./src/app/mocks/estadoincidente.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_zonaTecnica_zona_tecnica_service__ = __webpack_require__("./src/app/zonaTecnica/zona-tecnica.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner__ = __webpack_require__("./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__reportes_service__ = __webpack_require__("./src/app/reportes/reportes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ConformidadesComponent = /** @class */ (function () {
    function ConformidadesComponent(spinnerService, reportesService, zonaTecnicaService, clienteService, localDataService, estacionservicioService, localeService, notificationService) {
        var _this = this;
        this.spinnerService = spinnerService;
        this.reportesService = reportesService;
        this.zonaTecnicaService = zonaTecnicaService;
        this.clienteService = clienteService;
        this.localDataService = localDataService;
        this.estacionservicioService = estacionservicioService;
        this.localeService = localeService;
        this.notificationService = notificationService;
        this.table = null;
        this.datafilters = {
            estado: '-1', zonatecnica: '-1', filters: '1',
            categoria: '-1', codigo_cliente: '', estacionservicio: '-1',
            fechainicio: '', fechafin: '', tecnico: '-1'
        };
        this.estadoincidencias = __WEBPACK_IMPORTED_MODULE_3__app_mocks_estadoincidente__["a" /* ESTADOINCIDENCIAS */];
        this.loading = false;
        this.localeService.use('es');
        this.dataSource = __WEBPACK_IMPORTED_MODULE_8_rxjs__["Observable"].create(function (observer) {
            // Runs on every search
            _this.datafilters.codigo_cliente = '';
            _this.clienteService.gettoken(_this.razon_social).subscribe(function (value) {
                observer.next(value.data);
            });
        });
    }
    ConformidadesComponent.prototype.ngOnInit = function () {
        this.getZonasTecnicas();
        //this.get();
        this.cargarEstacionServicio();
    };
    ConformidadesComponent.prototype.get = function () {
        var _this = this;
        var fi = this.datafilters.fechainicio;
        var ff = this.datafilters.fechafin;
        if (this.datafilters.fechainicio != '' && this.datafilters.fechainicio != null) {
            this.datafilters.fechainicio = __WEBPACK_IMPORTED_MODULE_10_moment__(this.datafilters.fechainicio).format("DD-MM-YYYY HH:mm:ss");
        }
        if (this.datafilters.fechafin != '' && this.datafilters.fechafin != null) {
            this.datafilters.fechafin = __WEBPACK_IMPORTED_MODULE_10_moment__(this.datafilters.fechafin).format("DD-MM-YYYY HH:mm:ss");
        }
        this.loading = true;
        setInterval(this.checkLoading, 3000);
        this.spinnerService.show();
        if (!ff) {
            delete this.datafilters.fechafin;
        }
        if (!fi) {
            delete this.datafilters.fechafin;
            delete this.datafilters.fechainicio;
        }
        this.reportesService.consultar('conformidades', this.datafilters).subscribe(function (response) {
            _this.datafilters.fechainicio = fi;
            _this.datafilters.fechafin = ff;
            _this.results = response.data;
            _this.reInitDatatable();
            _this.loading = false;
            _this.spinnerService.hide();
        }, function (err) {
            _this.loading = false;
            _this.spinnerService.hide();
            _this.notificationService.onError("Se ha producido un error.");
        });
    };
    ConformidadesComponent.prototype.checkLoading = function () {
        while (this.loading) {
            this.spinnerService.show();
        }
    };
    ConformidadesComponent.prototype.reInitDatatable = function () {
        var _this = this;
        if (this.table) {
            this.table.destroy();
            this.table = null;
        }
        setTimeout(function () { return _this.loadtable(); }, 0);
    };
    ConformidadesComponent.prototype.loadtable = function () {
        var exampleId = $('#example23');
        this.table = exampleId.DataTable({
            dom: 'Bfrtip',
            buttons: [
                'copy', 'csv', 'excel'
            ],
            "ordering": true,
            paging: true,
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
            },
            createdRow: function (row, data, dataIndex) {
            }
        });
        $('.buttons-copy, .buttons-csv, .buttons-print, .buttons-pdf, .buttons-excel').addClass('btn btn-primary mr-1');
    };
    ConformidadesComponent.prototype.getZonasTecnicas = function () {
        var _this = this;
        this.zonaTecnicaService.get(1).subscribe(function (value) {
            _this.zonastecnicas = value.data;
            _this.spinnerService.hide();
        });
    };
    ConformidadesComponent.prototype.changeTypeaheadLoading = function (e) {
        this.typeaheadLoading = e;
    };
    ConformidadesComponent.prototype.typeaheadOnSelect = function (e) {
        this.datafilters.codigo_cliente = e.item.codigo_cliente;
        this.cargarEstacionServicio();
    };
    ConformidadesComponent.prototype.cargarEstacionServicio = function () {
        var _this = this;
        var empresa = 0;
        this.spinnerService.show();
        empresa = this.localDataService.getLocalData('empresaSeleccionada').id;
        this.estacionservicioService.getactbycliente(empresa, this.datafilters.codigo_cliente).subscribe(function (value) {
            _this.estacionservicio = value.data;
            _this.spinnerService.hide();
        });
    };
    ConformidadesComponent.prototype.getclassestadoincidencia = function (estado) {
        var result = this.estadoincidencias.filter(function (estadoinc) { return estadoinc.value === estado; });
        return result.length > 0 ? result[0].label : '';
    };
    ConformidadesComponent.prototype.onselectEstacionServicio = function (estacionserviciosel) {
        var _this = this;
        this.clienteService.gettoken(estacionserviciosel.razon_social).subscribe(function (value) {
            if (value.data.length > 0) {
                _this.razon_social = value.data[0].razon_social;
            }
            _this.spinnerService.hide();
        });
    };
    ConformidadesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-conformidades',
            template: __webpack_require__("./src/app/reportes/conformidades/conformidades.component.html"),
            styles: [__webpack_require__("./src/app/reportes/conformidades/conformidades.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner__["Ng4LoadingSpinnerService"],
            __WEBPACK_IMPORTED_MODULE_9__reportes_service__["a" /* ReportesService */],
            __WEBPACK_IMPORTED_MODULE_5__app_zonaTecnica_zona_tecnica_service__["a" /* ZonaTecnicaService */],
            __WEBPACK_IMPORTED_MODULE_1__app_clientes_cliente_service__["a" /* ClienteService */],
            __WEBPACK_IMPORTED_MODULE_4__app_shared__["i" /* LocalDataService */],
            __WEBPACK_IMPORTED_MODULE_2__app_estacionservicio_estacionservicio_service__["a" /* EstacionservicioService */],
            __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap__["a" /* BsLocaleService */],
            __WEBPACK_IMPORTED_MODULE_4__app_shared__["k" /* NotificationService */]])
    ], ConformidadesComponent);
    return ConformidadesComponent;
}());



/***/ }),

/***/ "./src/app/reportes/garantias/garantias.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/reportes/garantias/garantias.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-wrapper\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <div class=\"card\">\n                    <div class=\"card-body\">\n                        <h4 class=\"card-title\">Reporte de garantias</h4>\n                        <h6 class=\"card-subtitle\"></h6>\n                        <form>\n                            <div class=\"row\">\n                                <div class=\"col-md-3\">\n                                    <div class=\"form-group \">\n                                      <label class=\"control-label\">Estacion Servicio</label>\n                                     \n                                      <ng-select [items]=\"estacionservicio\" bindLabel=\"name\" bindValue=\"id\" [multiple]=\"false\"\n                                      placeholder=\"Seleccione\" [(ngModel)]=\"datafilters.estacionservicio\"  (change)=\"onselectEstacionServicio($event)\"\n                                       name=\"ctrlestacionservicio\" #ctrlestacionservicio=\"ngModel\">\n                                    </ng-select>\n                                      <small class=\"form-control-feedback\"> Seleccione las zonas tecnicas asociadas al usaurio </small>\n                                    </div>\n                                  </div>\n                                  <div class=\"col-md-3\">\n                                    <div class=\"form-group\">\n                                      <label class=\"control-label\">Cliente</label>\n                  \n                  \n                                      <input [(ngModel)]=\"razon_social\" [typeahead]=\"dataSource\" [typeaheadAsync]=\"true\"\n                                        (typeaheadLoading)=\"changeTypeaheadLoading($event)\"\n                                        (typeaheadOnSelect)=\"typeaheadOnSelect($event)\" [typeaheadScrollable]=\"true\"\n                                        typeaheadOptionField=\"razon_social\" placeholder=\"Seleccione el cliente\" class=\"form-control\"\n                                        name=\"test\" autocomplete=\"off\">\n                                      <div *ngIf=\"typeaheadLoading\">Cargando..</div>\n                                      <small class=\"form-control-feedback\"> Seleccione el cliente </small>\n                                    </div>\n                  \n                                  </div>\n                                  <div class=\"col-md-3\">\n                                    <div class=\"form-group \">\n                                      <label class=\"control-label\">Zona Tecnica</label>\n                                      <select class=\"form-control custom-select\" [(ngModel)]=\"datafilters.zonatecnica\"\n                                        name=\"ctrlzonatecnica\">\n                                        <option [value]=\"-1\">Seleccione</option>\n                                        <option *ngFor=\"let o of zonastecnicas\" [value]=\"o.id.toString()\">\n                                          {{ o.name }}\n                                        </option>\n                                      </select>\n                                      <small class=\"form-control-feedback\"> Seleccione las zonas tecnicas asociadas al usaurio </small>\n                                    </div>\n                                  </div>\n                                  <div class=\"col-md-3\">\n                                    <div class=\"form-group \">\n                                      <label class=\"control-label\">Estado </label>\n                                      <select class=\"form-control custom-select\" [(ngModel)]=\"datafilters.estado\" name=\"ctrlestado\">\n                                        <option [value]=\"-1\">Seleccione</option>\n                                        <option *ngFor=\"let o of estadoincidencias\" [value]=\"o.value.toString()\">\n                                          {{ o.name }}\n                                        </option>\n                                      </select>\n                                      <small class=\"form-control-feedback\"> Seleccione el estado </small>\n                                    </div>\n                                  </div>\n                                  <div class=\"col-md-3\">\n                                    <div class=\"form-group \">\n                                      <label class=\"control-label\">Categoria Incidente</label>\n                                      <select class=\"form-control custom-select\" [(ngModel)]=\"datafilters.categoria\" name=\"ctrlcategoria\">\n                                        <option [value]=\"-1\">Seleccione</option>\n                                        <option *ngFor=\"let o of categorias\" [value]=\"o.id.toString()\">\n                                          {{ o.categoria }} ({{ o.tipocontrato }})\n                                        </option>\n                                      </select>\n                                      <small class=\"form-control-feedback\"> Seleccione la Categoria Incidente </small>\n                                    </div>\n                                  </div>\n                                  <div class=\"col-md-2\">\n                                    <div class=\"form-group\">\n                                      <label class=\"control-label\">Fecha Inicial</label>\n                  \n                  \n                                      <input type=\"text\" id=\"name\" class=\"form-control\" placeholder=\"Escriba  la fecha inicial\"\n                                        [(ngModel)]=\"datafilters.fechainicio\" name=\"fechainicio\" autocomplete=\"off\" bsDatepicker\n                                        #dp=\"bsDatepicker\">\n                  \n                  \n                  \n                                    </div>\n                  \n                                  </div>\n                                  <div class=\"col-md-2\">\n                                    <div class=\"form-group\">\n                                      <label class=\"control-label\">Fecha Final</label>\n                                      <input type=\"text\" id=\"name\" class=\"form-control\" placeholder=\"Escriba  la fecha inicial\"\n                                        [(ngModel)]=\"datafilters.fechafin\" name=\"fechafin\" autocomplete=\"off\" bsDatepicker\n                                        #dp=\"bsDatepicker\">\n                  \n                                    </div>\n                  \n                                  </div>\n                                  <div class=\"col-md-2\">\n                                    <div class=\"form-group\">\n                                      <label class=\"control-label\"> &nbsp;</label><br>\n                                      <button type=\"submit\" class=\"btn btn-success\" (click)=\"get()\"> <i class=\"fa fa-search\"></i>\n                                        Consultar</button>\n                                    </div>\n                                  </div>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-12\">\n                <div class=\"card\">\n                    <div class=\"card-body\">\n                        <div class=\"table-responsive\" *ngIf=\"results\">\n                            <table id=\"example23\" class=\"display nowrap table table-bordered table-hover  m-t-30\" cellspacing=\"0\" width=\"100%\">\n                                <thead>\n                                    <tr>\n                                        <td>Estación</td>\n                                        <td>Día</td>\n                                        <td>Mes</td>\n                                        <td>Componente</td>\n                                        <td>Aviso</td>\n                                        <td>Partes</td>\n                                        <td>Motivo</td>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let item of results\">\n                                        <td>\n                                          <ng-container>\n                                            {{item.estacion_servicio.name}}\n                                          </ng-container>\n                                        </td>\n                                        <td>{{item.created_at | date: 'dd'}}</td>\n                                        <td>{{item.created_at | date: 'MM'}}</td>\n                                        <td>\n                                          <ng-container>\n                                            {{item.contrato_componente.componente.tipocomponente.name}}\n                                          </ng-container>\n                                        </td>\n                                        <td>{{item.id}}</td>\n                                        <td>{{item.partes}}</td>\n                                        <td>{{item.motivogarantia}}</td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/reportes/garantias/garantias.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GarantiasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_clientes_cliente_service__ = __webpack_require__("./src/app/clientes/cliente.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_estacionservicio_estacionservicio_service__ = __webpack_require__("./src/app/estacionservicio/estacionservicio.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_mocks_estadoincidente__ = __webpack_require__("./src/app/mocks/estadoincidente.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_zonaTecnica_zona_tecnica_service__ = __webpack_require__("./src/app/zonaTecnica/zona-tecnica.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng4_loading_spinner__ = __webpack_require__("./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__reportes_service__ = __webpack_require__("./src/app/reportes/reportes.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var GarantiasComponent = /** @class */ (function () {
    function GarantiasComponent(spinnerService, reportesService, zonaTecnicaService, clienteService, localDataService, estacionservicioService, localeService, notificationService) {
        var _this = this;
        this.spinnerService = spinnerService;
        this.reportesService = reportesService;
        this.zonaTecnicaService = zonaTecnicaService;
        this.clienteService = clienteService;
        this.localDataService = localDataService;
        this.estacionservicioService = estacionservicioService;
        this.localeService = localeService;
        this.notificationService = notificationService;
        this.table = null;
        this.datafilters = {
            estado: '-1', zonatecnica: '-1', filters: '1',
            categoria: '-1', codigo_cliente: '', estacionservicio: '-1',
            fechainicio: '', fechafin: '', tecnico: '-1'
        };
        this.estadoincidencias = __WEBPACK_IMPORTED_MODULE_3__app_mocks_estadoincidente__["a" /* ESTADOINCIDENCIAS */];
        this.localeService.use('es');
        this.dataSource = __WEBPACK_IMPORTED_MODULE_9_rxjs__["Observable"].create(function (observer) {
            // Runs on every search
            _this.datafilters.codigo_cliente = '';
            _this.clienteService.gettoken(_this.razon_social).subscribe(function (value) {
                observer.next(value.data);
            });
        });
    }
    GarantiasComponent.prototype.ngOnInit = function () {
        this.getZonasTecnicas();
        this.get();
        this.cargarEstacionServicio();
    };
    GarantiasComponent.prototype.get = function () {
        var _this = this;
        var fi = this.datafilters.fechainicio;
        var ff = this.datafilters.fechafin;
        if (this.datafilters.fechainicio != '' && this.datafilters.fechainicio != null) {
            this.datafilters.fechainicio = __WEBPACK_IMPORTED_MODULE_6_moment__(this.datafilters.fechainicio).format("DD-MM-YYYY HH:mm:ss");
        }
        if (this.datafilters.fechafin != '' && this.datafilters.fechafin != null) {
            this.datafilters.fechafin = __WEBPACK_IMPORTED_MODULE_6_moment__(this.datafilters.fechafin).format("DD-MM-YYYY HH:mm:ss");
        }
        this.spinnerService.show();
        this.reportesService.consultar('garantia', this.datafilters).subscribe(function (response) {
            _this.datafilters.fechainicio = fi;
            _this.datafilters.fechafin = ff;
            _this.results = response.data;
            _this.reInitDatatable();
            _this.spinnerService.hide();
            _this.datafilters.filters = '';
        }, function (err) {
            _this.spinnerService.hide();
            _this.notificationService.onError("Se ha producido un error.");
        });
    };
    GarantiasComponent.prototype.reInitDatatable = function () {
        var _this = this;
        if (this.table) {
            this.table.destroy();
            this.table = null;
        }
        setTimeout(function () { return _this.loadtable(); }, 0);
    };
    GarantiasComponent.prototype.loadtable = function () {
        var exampleId = $('#example23');
        this.table = exampleId.DataTable({
            dom: 'Bfrtip',
            buttons: [
                'copy', 'csv', 'excel'
            ],
            "ordering": true,
            paging: true,
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
            },
            createdRow: function (row, data, dataIndex) {
            }
        });
        $('.buttons-copy, .buttons-csv, .buttons-print, .buttons-pdf, .buttons-excel').addClass('btn btn-primary mr-1');
    };
    GarantiasComponent.prototype.getZonasTecnicas = function () {
        var _this = this;
        this.zonaTecnicaService.get(1).subscribe(function (value) {
            _this.zonastecnicas = value.data;
            _this.spinnerService.hide();
        });
    };
    GarantiasComponent.prototype.changeTypeaheadLoading = function (e) {
        this.typeaheadLoading = e;
    };
    GarantiasComponent.prototype.typeaheadOnSelect = function (e) {
        this.datafilters.codigo_cliente = e.item.codigo_cliente;
        this.cargarEstacionServicio();
    };
    GarantiasComponent.prototype.cargarEstacionServicio = function () {
        var _this = this;
        var empresa = 0;
        this.spinnerService.show();
        empresa = this.localDataService.getLocalData('empresaSeleccionada').id;
        this.estacionservicioService.getactbycliente(empresa, this.datafilters.codigo_cliente).subscribe(function (value) {
            _this.estacionservicio = value.data;
            _this.spinnerService.hide();
        });
    };
    GarantiasComponent.prototype.getclassestadoincidencia = function (estado) {
        var result = this.estadoincidencias.filter(function (estadoinc) { return estadoinc.value === estado; });
        return result.length > 0 ? result[0].label : '';
    };
    GarantiasComponent.prototype.onselectEstacionServicio = function (estacionserviciosel) {
        var _this = this;
        this.clienteService.gettoken(estacionserviciosel.razon_social).subscribe(function (value) {
            if (value.data.length > 0) {
                _this.razon_social = value.data[0].razon_social;
            }
            _this.spinnerService.hide();
        });
    };
    GarantiasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-garantias',
            template: __webpack_require__("./src/app/reportes/garantias/garantias.component.html"),
            styles: [__webpack_require__("./src/app/reportes/garantias/garantias.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7_ng4_loading_spinner__["Ng4LoadingSpinnerService"],
            __WEBPACK_IMPORTED_MODULE_10__reportes_service__["a" /* ReportesService */],
            __WEBPACK_IMPORTED_MODULE_5__app_zonaTecnica_zona_tecnica_service__["a" /* ZonaTecnicaService */],
            __WEBPACK_IMPORTED_MODULE_1__app_clientes_cliente_service__["a" /* ClienteService */],
            __WEBPACK_IMPORTED_MODULE_4__app_shared__["i" /* LocalDataService */],
            __WEBPACK_IMPORTED_MODULE_2__app_estacionservicio_estacionservicio_service__["a" /* EstacionservicioService */],
            __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap__["a" /* BsLocaleService */],
            __WEBPACK_IMPORTED_MODULE_4__app_shared__["k" /* NotificationService */]])
    ], GarantiasComponent);
    return GarantiasComponent;
}());



/***/ }),

/***/ "./src/app/reportes/horas-semanales/horas-semanales.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/reportes/horas-semanales/horas-semanales.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-wrapper\">\n  <!-- ============================================================== -->\n  <!-- Container fluid  -->\n  <!-- ============================================================== -->\n  <div class=\"container-fluid\">\n    <!-- ============================================================== -->\n    <!-- Bread crumb and right sidebar toggle -->\n    <!-- ============================================================== -->\n    \n    <!-- ============================================================== -->\n    <!-- End Bread crumb and right sidebar toggle -->\n    <!-- ============================================================== -->\n    <!-- ============================================================== -->\n    <!-- Start Page Content -->\n    <!-- ============================================================== -->\n    <div class=\"row\">\n\n      <div class=\"col-12\">\n\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <h4 class=\"card-title\">Informe de Horas Semanales</h4>\n            <h6 class=\"card-subtitle\"></h6>\n            <form #filterForm=\"ngForm\">\n              <div class=\"row\">\n\n                <div class=\"col-md-3\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label\">Cliente</label>\n\n\n                    <input [(ngModel)]=\"razon_social\" [typeahead]=\"dataSource\" [typeaheadAsync]=\"true\"\n                      (typeaheadLoading)=\"changeTypeaheadLoading($event)\"\n                      (typeaheadOnSelect)=\"typeaheadOnSelect($event)\" [typeaheadScrollable]=\"true\"\n                      typeaheadOptionField=\"razon_social\" placeholder=\"Seleccione el cliente\" class=\"form-control\"\n                      name=\"test\" autocomplete=\"off\">\n                    <div *ngIf=\"typeaheadLoading\">Cargando..</div>\n                    <small class=\"form-control-feedback\"> Seleccione el cliente </small>\n                  </div>\n\n                </div>\n                <div class=\"col-md-3\">\n                  <div class=\"form-group \">\n                    <label class=\"control-label\">Estacion Servicio</label>\n                    <select class=\"form-control custom-select\" [(ngModel)]=\"datafilters.estacionservicio\"\n                      name=\"ctrlestacionservicio\">\n                      <option [value]=\"-1\">Seleccione</option>\n                      <option *ngFor=\"let o of estacionservicio\" [value]=\"o.id.toString()\">\n                        {{ o.name }}\n                      </option>\n                    </select>\n                    <small class=\"form-control-feedback\"> Seleccione las zonas tecnicas asociadas al usaurio </small>\n                  </div>\n                </div>\n                <div class=\"col-md-3\">\n                  <div class=\"form-group \">\n                    <label class=\"control-label\">Zona Tecnica</label>\n                    <select class=\"form-control custom-select\" [(ngModel)]=\"datafilters.zonatecnica\"\n                      name=\"ctrlzonatecnica\">\n                      <option [value]=\"-1\">Seleccione</option>\n                      <option *ngFor=\"let o of zonastecnicas\" [value]=\"o.id.toString()\">\n                        {{ o.name }}\n                      </option>\n                    </select>\n                    <small class=\"form-control-feedback\"> Seleccione las zonas tecnicas asociadas al usaurio </small>\n                  </div>\n                </div>\n                <div class=\"col-md-3\">\n                  <div class=\"form-group \">\n                    <label class=\"control-label\">Estado </label>\n                    <select class=\"form-control custom-select\" [(ngModel)]=\"datafilters.estado\" name=\"ctrlestado\">\n                      <option [value]=\"-1\">Seleccione</option>\n                      <option *ngFor=\"let o of estadoincidencias\" [value]=\"o.value.toString()\">\n                        {{ o.name }}\n                      </option>\n                    </select>\n                    <small class=\"form-control-feedback\"> Seleccione el estado </small>\n                  </div>\n                </div>\n                <div class=\"col-md-3\">\n                  <div class=\"form-group \">\n                    <label class=\"control-label\">Categoria Incidente</label>\n                    <select class=\"form-control custom-select\" [(ngModel)]=\"datafilters.categoria\" name=\"ctrlcategoria\">\n                      <option [value]=\"-1\">Seleccione</option>\n                      <option *ngFor=\"let o of categorias\" [value]=\"o.id.toString()\">\n                        {{ o.categoria }} ({{ o.tipocontrato }})\n                      </option>\n                    </select>\n                    <small class=\"form-control-feedback\"> Seleccione la Categoria Incidente </small>\n                  </div>\n                </div>\n                <div class=\"col-md-4\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label\">Fecha Inicial</label><span class=\"text-danger\">*</span>\n\n\n                    <input type=\"text\" id=\"name\" class=\"form-control\" placeholder=\"Fecha Inicial\"\n                      [(ngModel)]=\"fi\" name=\"fechainicio\" autocomplete=\"off\" bsDatepicker\n                      [bsConfig]=\"{ selectWeek: true}\" #dp=\"bsDatepicker\" (onHidden)=\"hclosedatefi()\" required> Fecha\n                    fin: {{datafilters.fechafin| date: 'dd/MM/yyyy'}}\n\n\n\n                  </div>\n\n                </div>\n\n                <div class=\"col-md-3\">\n                  <div class=\"form-group \">\n                    <label class=\"control-label\">Tecnico</label>\n                    <select class=\"form-control custom-select\" [(ngModel)]=\"datafilters.tecnico\" name=\"ctrltecnico\">\n                      <option [value]=\"-1\">Seleccione</option>\n                      <option *ngFor=\"let o of tecnicos\" [value]=\"o.id.toString()\">\n                        {{ o.name }}\n                      </option>\n                    </select>\n                    <small class=\"form-control-feedback\"> Seleccione la Categoria Incidente </small>\n                  </div>\n                </div>\n                <div class=\"col-md-2\">\n\n\n\n                  <div class=\"form-group\">\n                    <label class=\"control-label\"> &nbsp;</label><br>\n                    <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"filterForm.invalid\" (click)=\"get()\"> <i\n                        class=\"fa fa-search\"></i>\n                      Consultar</button>\n                  </div>\n                </div>\n\n\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-12\">\n\n        <div class=\"card\" *ngIf=\"results!=undefined&&results.length>0\">\n          <div class=\"card-header\"> <button type=\"submit\" class=\"btn btn-warning\" \n              (click)=\"excel()\"> <i class=\"far fa-file-excel\"></i>\n              Excel</button></div>\n\n          <div class=\"card-body\">\n\n\n\n            <div class=\"table-responsive\" >\n              <table id=\"example23\" class=\"display nowrap table table-bordered   m-t-30  \" cellspacing=\"0\" width=\"100%\">\n                <thead>\n\n\n                </thead>\n                <tbody>\n                  <ng-container *ngFor=\"let row of results; let i = index\">\n                    <tr>\n                      <td [attr.colspan]=\"row.diffdays*5\">\n                        {{row.name}}\n                      </td>\n                    </tr>\n\n                    <tr  class=\"table-warning\">\n\n                      <ng-container *ngFor=\"let  fecha of row.fechas ; let j = index\">\n                        <td colspan=\"7\">\n                          {{fecha.sfecha| date: 'dd/MM/yyyy'}}\n\n                        </td>\n\n\n                      </ng-container>\n                    </tr>\n\n                    <tr>\n                      <ng-container *ngFor=\"let  fecha of row.fechas ; let j = index\">\n                        <th>#</th>\n                        <th>Parte</th>\n                        <th>Cliente</th>\n                        <th>H</th>\n                        <th>H-R</th>\n                        <th>K</th>\n                        <th><i class=\"ti-location-pin\"></i></th>\n                      </ng-container>\n\n                    </tr>\n\n                    <ng-container *ngFor=\"let  fila of row.filas ; let j = index\">\n                      <tr class=\"table-danger\">\n                        <ng-container *ngFor=\"let  parte of fila ; let k = index\">\n                          <td>{{j+1}}</td>\n                          <td>{{parte?.id}}</td>\n                          <td>{{parte?.incidencia?.estacion_servicio?.razon_social}}</td>\n                          <td>{{parte?.tiemporespuesta|number}}</td>\n                          <td>{{parte?.horasdistancia|number}}</td>\n                          <td>{{parte?.distanciareportada|number}}</td>\n                          <td><a *ngIf=\"parte.tipo!='0'\" href=\"https://maps.google.com/maps?q={{parte?.latpartida}},{{parte?.lngpartida}}\" target=\"blank\">Partida</a><br>\n                            <a *ngIf=\"parte.tipo!='0'\"  href=\"https://maps.google.com/maps?q={{parte?.incidencia?.latllegada}},{{parte?.lngllegada}}\" target=\"blank\">Llegada</a></td>\n                        </ng-container>\n                      </tr>\n\n                    </ng-container>\n\n                  </ng-container>\n\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/reportes/horas-semanales/horas-semanales.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HorasSemanalesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng4_loading_spinner__ = __webpack_require__("./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reportes_service__ = __webpack_require__("./src/app/reportes/reportes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_datatables_net__ = __webpack_require__("./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_datatables_net___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_datatables_net__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_datatables_net_bs4__ = __webpack_require__("./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_datatables_net_bs4___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_datatables_net_bs4__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_datatables_net_buttons__ = __webpack_require__("./node_modules/datatables.net-buttons/js/dataTables.buttons.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_datatables_net_buttons___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_datatables_net_buttons__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_datatables_net_buttons_bs4__ = __webpack_require__("./node_modules/datatables.net-buttons-bs4/js/buttons.bootstrap4.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_datatables_net_buttons_bs4___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_datatables_net_buttons_bs4__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__zonaTecnica_zona_tecnica_service__ = __webpack_require__("./src/app/zonaTecnica/zona-tecnica.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__clientes_cliente_service__ = __webpack_require__("./src/app/clientes/cliente.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__estacionservicio_estacionservicio_service__ = __webpack_require__("./src/app/estacionservicio/estacionservicio.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ngx_bootstrap_datepicker__ = __webpack_require__("./node_modules/ngx-bootstrap/datepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__mocks_estadoparte__ = __webpack_require__("./src/app/mocks/estadoparte.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_file_saver__ = __webpack_require__("./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_file_saver__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var HorasSemanalesComponent = /** @class */ (function () {
    function HorasSemanalesComponent(spinnerService, reportesService, router, route, notificationService, zonaTecnicaService, clienteService, localDataService, estacionservicioService, localeService) {
        var _this = this;
        this.spinnerService = spinnerService;
        this.reportesService = reportesService;
        this.router = router;
        this.route = route;
        this.notificationService = notificationService;
        this.zonaTecnicaService = zonaTecnicaService;
        this.clienteService = clienteService;
        this.localDataService = localDataService;
        this.estacionservicioService = estacionservicioService;
        this.localeService = localeService;
        this.datafilters = {
            estado: '-1', zonatecnica: '-1', filters: '1',
            categoria: '-1', codigo_cliente: '', estacionservicio: '-1',
            fechainicio: '', fechafin: '', tecnico: '-1'
        };
        this.estadoincidencias = __WEBPACK_IMPORTED_MODULE_15__mocks_estadoparte__["a" /* ESTADOPARTE */];
        this.table = null;
        this.localeService.use('es');
        this.dataSource = __WEBPACK_IMPORTED_MODULE_10_rxjs__["Observable"].create(function (observer) {
            // Runs on every search
            _this.datafilters.codigo_cliente = '';
            _this.clienteService.gettoken(_this.razon_social).subscribe(function (value) {
                observer.next(value.data);
            });
        });
    }
    HorasSemanalesComponent.prototype.ngOnInit = function () {
        this.getZonasTecnicas();
        this.get();
    };
    HorasSemanalesComponent.prototype.excel = function () {
        var _this = this;
        this.datafilters.fechainicio = this.fi;
        var fi = this.datafilters.fechainicio;
        var ff = __WEBPACK_IMPORTED_MODULE_14_moment__(this.datafilters.fechainicio).endOf('week').toDate();
        this.datafilters.fechafin = __WEBPACK_IMPORTED_MODULE_14_moment__(ff).format("DD-MM-YYYY HH:mm:ss");
        if (this.datafilters.fechainicio != '' && this.datafilters.fechainicio != null) {
            this.datafilters.fechainicio = __WEBPACK_IMPORTED_MODULE_14_moment__(this.datafilters.fechainicio).format("DD-MM-YYYY HH:mm:ss");
        }
        if (this.datafilters.fechafin != '' && this.datafilters.fechafin != null) {
            this.datafilters.fechafin = __WEBPACK_IMPORTED_MODULE_14_moment__(ff).format("DD-MM-YYYY HH:mm:ss");
        }
        this.spinnerService.show();
        var params = $.param(this.datafilters);
        this.reportesService.download(params)
            .subscribe(function (response) {
            __WEBPACK_IMPORTED_MODULE_16_file_saver__["saveAs"](response, 'horassemanaExport.xlsx');
            _this.notificationService.onSuccess("Archivo generado con exito..");
            _this.spinnerService.hide();
            _this.datafilters.filters = '';
        }, function (err) {
            _this.spinnerService.hide();
            _this.notificationService.onError("Se ha producido un error.");
        });
    };
    HorasSemanalesComponent.prototype.hclosedatefi = function () {
        this.datafilters.fechafin = __WEBPACK_IMPORTED_MODULE_14_moment__(this.fi).endOf('week').toDate().toString();
    };
    HorasSemanalesComponent.prototype.get = function () {
        var _this = this;
        this.datafilters.fechainicio = this.fi;
        var fi = this.fi;
        var ff = __WEBPACK_IMPORTED_MODULE_14_moment__(this.datafilters.fechainicio).endOf('week').toDate();
        if (this.datafilters.fechainicio != '' && this.datafilters.fechainicio != null) {
            this.datafilters.fechainicio = __WEBPACK_IMPORTED_MODULE_14_moment__(this.datafilters.fechainicio).format("DD-MM-YYYY HH:mm:ss");
        }
        if (this.datafilters.fechafin != '' && this.datafilters.fechafin != null) {
            this.datafilters.fechafin = __WEBPACK_IMPORTED_MODULE_14_moment__(ff).format("DD-MM-YYYY HH:mm:ss");
        }
        this.spinnerService.show();
        this.reportesService.consultar('horassemanales', this.datafilters)
            .subscribe(function (response) {
            _this.datafilters.fechainicio = __WEBPACK_IMPORTED_MODULE_14_moment__(fi).format("DD-MM-YYYY HH:mm:ss");
            if (_this.datafilters.filters != '') {
                _this.categorias = response.data.categorias;
                _this.tecnicos = response.data.tecnicos;
            }
            else {
                _this.results = response.data.items;
                _this.diffdays = response.data.diffdays;
                // this.reInitDatatable();
            }
            _this.spinnerService.hide();
            _this.datafilters.filters = '';
        }, function (err) {
            _this.spinnerService.hide();
            _this.notificationService.onError("Se ha producido un error.");
        });
    };
    HorasSemanalesComponent.prototype.getZonasTecnicas = function () {
        var _this = this;
        this.zonaTecnicaService.get(1).subscribe(function (value) {
            _this.zonastecnicas = value.data;
            _this.spinnerService.hide();
        });
    };
    HorasSemanalesComponent.prototype.changeTypeaheadLoading = function (e) {
        this.typeaheadLoading = e;
    };
    HorasSemanalesComponent.prototype.typeaheadOnSelect = function (e) {
        this.datafilters.codigo_cliente = e.item.codigo_cliente;
        this.cargarEstacionServicio();
    };
    HorasSemanalesComponent.prototype.cargarEstacionServicio = function () {
        var _this = this;
        var empresa = 0;
        this.spinnerService.show();
        empresa = this.localDataService.getLocalData('empresaSeleccionada').id;
        this.estacionservicioService.getbycliente(empresa, this.datafilters.codigo_cliente).subscribe(function (value) {
            _this.estacionservicio = value.data;
            _this.spinnerService.hide();
        });
    };
    HorasSemanalesComponent.prototype.getclassestadoincidencia = function (estado) {
        var result;
        result = this.estadoincidencias.filter(function (estadoinc) { return estadoinc.value === estado; });
        return result.length > 0 ? result[0].label : '';
    };
    HorasSemanalesComponent.prototype.reInitDatatable = function () {
        var _this = this;
        if (this.table) {
            this.table.destroy();
            this.table = null;
        }
        setTimeout(function () { return _this.loadtable(); }, 0);
    };
    HorasSemanalesComponent.prototype.loadtable = function () {
        var exampleId = $('#example23');
        this.table = exampleId.DataTable({
            dom: 'Bfrtip',
            buttons: [
                'copy', 'csv', 'excel'
            ],
            "ordering": false,
            paging: true,
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
            },
            createdRow: function (row, data, dataIndex) {
            }
        });
        $('.buttons-copy, .buttons-csv, .buttons-print, .buttons-pdf, .buttons-excel').addClass('btn btn-primary mr-1');
    };
    HorasSemanalesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-horas-semanales',
            template: __webpack_require__("./src/app/reportes/horas-semanales/horas-semanales.component.html"),
            styles: [__webpack_require__("./src/app/reportes/horas-semanales/horas-semanales.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng4_loading_spinner__["Ng4LoadingSpinnerService"],
            __WEBPACK_IMPORTED_MODULE_2__reportes_service__["a" /* ReportesService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__shared__["k" /* NotificationService */],
            __WEBPACK_IMPORTED_MODULE_9__zonaTecnica_zona_tecnica_service__["a" /* ZonaTecnicaService */],
            __WEBPACK_IMPORTED_MODULE_11__clientes_cliente_service__["a" /* ClienteService */],
            __WEBPACK_IMPORTED_MODULE_4__shared__["i" /* LocalDataService */],
            __WEBPACK_IMPORTED_MODULE_12__estacionservicio_estacionservicio_service__["a" /* EstacionservicioService */],
            __WEBPACK_IMPORTED_MODULE_13_ngx_bootstrap_datepicker__["b" /* BsLocaleService */]])
    ], HorasSemanalesComponent);
    return HorasSemanalesComponent;
}());



/***/ }),

/***/ "./src/app/reportes/incidentes/incidentes.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/reportes/incidentes/incidentes.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-wrapper\">\n  <!-- ============================================================== -->\n  <!-- Container fluid  -->\n  <!-- ============================================================== -->\n  <div class=\"container-fluid\">\n    <!-- ============================================================== -->\n    <!-- Bread crumb and right sidebar toggle -->\n    <!-- ============================================================== -->\n    \n    <!-- ============================================================== -->\n    <!-- End Bread crumb and right sidebar toggle -->\n    <!-- ============================================================== -->\n    <!-- ============================================================== -->\n    <!-- Start Page Content -->\n    <!-- ============================================================== -->\n    <div class=\"row\">\n\n      <div class=\"col-12\">\n\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <h4 class=\"card-title\">Informe de Incidentes</h4>\n            <h6 class=\"card-subtitle\"></h6>\n            <form>\n              <div class=\"row\">\n\n                \n                <div class=\"col-md-3\">\n                  <div class=\"form-group \">\n                    <label class=\"control-label\">Estacion Servicio</label>\n                   \n                    <ng-select [items]=\"estacionservicio\" bindLabel=\"name\" bindValue=\"id\" [multiple]=\"false\"\n                    placeholder=\"Seleccione\" [(ngModel)]=\"datafilters.estacionservicio\"  (change)=\"onselectEstacionServicio($event)\"\n                     name=\"ctrlestacionservicio\" #ctrlestacionservicio=\"ngModel\">\n                  </ng-select>\n                    <small class=\"form-control-feedback\"> Seleccione las zonas tecnicas asociadas al usaurio </small>\n                  </div>\n                </div>\n                <div class=\"col-md-3\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label\">Cliente</label>\n\n\n                    <input [(ngModel)]=\"razon_social\" [typeahead]=\"dataSource\" [typeaheadAsync]=\"true\"\n                      (typeaheadLoading)=\"changeTypeaheadLoading($event)\"\n                      (typeaheadOnSelect)=\"typeaheadOnSelect($event)\" [typeaheadScrollable]=\"true\"\n                      typeaheadOptionField=\"razon_social\" placeholder=\"Seleccione el cliente\" class=\"form-control\"\n                      name=\"test\" autocomplete=\"off\">\n                    <div *ngIf=\"typeaheadLoading\">Cargando..</div>\n                    <small class=\"form-control-feedback\"> Seleccione el cliente </small>\n                  </div>\n\n                </div>\n                <div class=\"col-md-3\">\n                  <div class=\"form-group \">\n                    <label class=\"control-label\">Zona Tecnica</label>\n                    <select class=\"form-control custom-select\" [(ngModel)]=\"datafilters.zonatecnica\"\n                      name=\"ctrlzonatecnica\">\n                      <option [value]=\"-1\">Seleccione</option>\n                      <option *ngFor=\"let o of zonastecnicas\" [value]=\"o.id.toString()\">\n                        {{ o.name }}\n                      </option>\n                    </select>\n                    <small class=\"form-control-feedback\"> Seleccione las zonas tecnicas asociadas al usaurio </small>\n                  </div>\n                </div>\n                <div class=\"col-md-3\">\n                  <div class=\"form-group \">\n                    <label class=\"control-label\">Estado </label>\n                    <select class=\"form-control custom-select\" [(ngModel)]=\"datafilters.estado\" name=\"ctrlestado\">\n                      <option [value]=\"-1\">Seleccione</option>\n                      <option *ngFor=\"let o of estadoincidencias\" [value]=\"o.value.toString()\">\n                        {{ o.name }}\n                      </option>\n                    </select>\n                    <small class=\"form-control-feedback\"> Seleccione el estado </small>\n                  </div>\n                </div>\n                <div class=\"col-md-3\">\n                  <div class=\"form-group \">\n                    <label class=\"control-label\">Categoria Incidente</label>\n                    <select class=\"form-control custom-select\" [(ngModel)]=\"datafilters.categoria\" name=\"ctrlcategoria\">\n                      <option [value]=\"-1\">Seleccione</option>\n                      <option *ngFor=\"let o of categorias\" [value]=\"o.id.toString()\">\n                        {{ o.categoria }} ({{ o.tipocontrato }})\n                      </option>\n                    </select>\n                    <small class=\"form-control-feedback\"> Seleccione la Categoria Incidente </small>\n                  </div>\n                </div>\n                <div class=\"col-md-2\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label\">Fecha Inicial</label>\n\n\n                    <input type=\"text\" id=\"name\" class=\"form-control\" placeholder=\"Escriba  la fecha inicial\"\n                      [(ngModel)]=\"datafilters.fechainicio\" name=\"fechainicio\" autocomplete=\"off\" bsDatepicker\n                      #dp=\"bsDatepicker\">\n\n\n\n                  </div>\n\n                </div>\n                <div class=\"col-md-2\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label\">Fecha Final</label>\n\n\n                    <input type=\"text\" id=\"name\" class=\"form-control\" placeholder=\"Escriba  la fecha inicial\"\n                      [(ngModel)]=\"datafilters.fechafin\" name=\"fechafin\" autocomplete=\"off\" bsDatepicker\n                      #dp=\"bsDatepicker\">\n\n                  </div>\n\n                </div>\n                <div class=\"col-md-3\">\n                  <div class=\"form-group \">\n                    <label class=\"control-label\">Tecnico</label>\n                    <select class=\"form-control custom-select\" [(ngModel)]=\"datafilters.tecnico\" name=\"ctrltecnico\">\n                      <option [value]=\"-1\">Seleccione</option>\n                      <option *ngFor=\"let o of tecnicos\" [value]=\"o.id.toString()\">\n                        {{ o.name }}\n                      </option>\n                    </select>\n                    <small class=\"form-control-feedback\"> Seleccione la Categoria Incidente </small>\n                  </div>\n                </div>\n                <div class=\"col-md-2\">\n\n\n\n                  <div class=\"form-group\">\n                    <label class=\"control-label\"> &nbsp;</label><br>\n                    <button type=\"submit\" class=\"btn btn-success\" (click)=\"get()\"> <i class=\"fa fa-search\"></i>\n                      Consultar</button>\n                  </div>\n                </div>\n\n\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-12\">\n\n        <div class=\"card\">\n          <div class=\"card-body\">\n\n\n            <div class=\"table-responsive\" *ngIf=\"results\">\n              <table id=\"example23\" class=\"display nowrap table table-bordered table-hover  m-t-30  \" cellspacing=\"0\"\n                width=\"100%\">\n                <thead>\n                  <tr>\n                    <th>#</th>\n                    <th>Estación Servicio</th>\n                    <th>Estado</th>\n                    <th>Fuera de plazo</th>\n                    <th>Titulo</th>\n                    <th>Actuación</th>\n                    <th>Cliente</th>\n                    <th>Tecnico</th>\n                    <th>Tiempo</th>\n                    <th>Distancia</th>\n                    <th>Fecha Creación</th>\n                    <th>Fecha Vencimiento</th>\n                    <th>Fecha Respuesta</th>\n                    <th>Remoto</th>\n                    <th>Fecha Programación</th>\n\n                    <th>Tipo Contrato</th>\n                    <th>Categoria</th>\n                    <th>Componente</th>\n                    <th>Partida</th>\n                    <th>Llegada</th>\n                    <th>Cierre</th>\n                    <th>Excede distancia</th>\n                  </tr>\n                </thead>\n                <tfoot>\n                  <tr>\n                    <th>#</th>\n                    <th>Estación Servicio</th>\n                    <th>Estado</th>\n                    <th>Fuera de plazo</th>\n                    <th>Titulo</th>\n                    <th>Actuación</th>\n                    <th>Cliente</th>\n                    <th>Tecnico</th>\n                    <th>Tiempo</th>\n                    <th>Distancia</th>\n                    <th>Fecha Creación</th>\n                    <th>Fecha Vencimiento</th>\n                    <th>Fecha Respuesta</th>\n                    <th>Remoto</th>\n                    <th>Fecha Programación</th>\n                    <th>Tipo Contrato</th>\n                    <th>Categoria</th>\n                    <th>Componente</th>\n                    <th>Partida</th>\n                    <th>Llegada</th>\n                    <th>Cierre</th>\n                    <th>Excede distancia</th>\n                  </tr>\n                </tfoot>\n                <tbody>\n                  <ng-container *ngFor=\"let row of results; let i = index\">\n                    <tr>\n                      <td class=\"font-weight-bold text-info\" [attr.data-search]=\"row.id\">\n                        <a routerLink=\"/incidencia/edit/{{row.id}}\" class=\"iconlistp\">\n                          {{row.id}} </a>\n                        <a routerLink=\"/incidencia/edit/{{row.id}}\" class=\"iconlistp\"\n                          title=\"Abrir en otra pagina\" target=\"_blank\"><i class=\" fas fa-external-link-alt\"></i></a>\n                      </td>\n                      <td class=\"font-weight-bold text-info\">{{row.estacion_servicio.name}}</td>\n                      <td class=\"font-weight-bold \"><span\n                          class=\"badge badge-pill {{getclassestadoincidencia(row.estado)}} float-left\">\n                          {{row.estado}}\n                        </span></td>\n                      <td class=\"font-weight-bold text-muted \">{{row.fueraplazo>0?row.fueraplazo:'0'}}</td>\n                      <td class=\"font-weight-bold text-muted \">{{row.titulo}}</td>\n\n                      <td class=\"font-weight-bold text-muted \">{{row.actuacion}}</td>\n                      <td class=\"font-weight-bold text-muted \">{{row.razonsocial}}</td>\n                      <td class=\"font-weight-bold text-muted \">{{row.usuario_asignado?.name}}</td>\n                      <td class=\"font-weight-bold text-muted \">{{row.tiempo|number:'1.2-2'}}</td>\n                      <td class=\"font-weight-bold text-muted \">{{row.distanciacalculada|number:'1.2-2'}}</td>\n                      <td class=\"font-weight-bold text-muted \">{{row.created_at}}</td>\n                      <td class=\"font-weight-bold text-muted \">{{row.fecha_vencimiento}}</td>\n                      <td class=\"font-weight-bold text-muted \">{{row.fecha_respuesta}}</td>\n                      <td class=\"font-weight-bold text-muted \">{{row.remoto==0?'No':'Si'}}</td>\n                      <td class=\"font-weight-bold text-muted \">{{row.fecha_programacion}}</td>\n\n                      <td class=\"font-weight-bold text-muted \">\n                        <span style=\"color:black;\"\n                          [ngStyle]=\"{'background-color': row.contrato_componente?.contrato?.tipocontrato?row.contrato_componente?.contrato?.tipocontrato?.color:'#ffffff'}\"\n                          class=\"badge badge-pill \"> {{row.contrato_componente?.contrato?.tipocontrato?.name}}\n                        </span>\n                      </td>\n                      <td class=\"font-weight-bold text-muted \">\n                        {{row.categoria_incidente?.name}}\n                      </td>\n                      <td class=\"font-weight-bold text-muted \">\n                        <p>{{row.contrato_componente?.componente?.tipocomponente.name}}:<br>\n                          <ng-container\n                            *ngFor=\"let field of row.contrato_componente?.componente?.componentfields; let i = index\">\n                            <br>{{field.tipocomponentfield.name}}:{{field.value}}.\n                          </ng-container>\n                        </p>\n                      </td>\n                      <td class=\"font-weight-bold text-muted \">\n                        {{row.fecha_partida}}\n                      </td>\n                      <td class=\"font-weight-bold text-muted \">\n                        {{row.fecha_llegada}}\n                      </td>\n                      <td class=\"font-weight-bold text-muted \">\n                        {{row.fecha_cierre}}\n                      </td>\n                      <td>\n                        {{row.excededistancia==0?'NO':'SI'}}\n                      </td>\n\n\n                    </tr>\n\n\n\n\n\n                  </ng-container>\n                </tbody>\n\n\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/reportes/incidentes/incidentes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IncidentesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng4_loading_spinner__ = __webpack_require__("./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reportes_service__ = __webpack_require__("./src/app/reportes/reportes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_datatables_net__ = __webpack_require__("./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_datatables_net___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_datatables_net__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_datatables_net_bs4__ = __webpack_require__("./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_datatables_net_bs4___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_datatables_net_bs4__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_datatables_net_buttons__ = __webpack_require__("./node_modules/datatables.net-buttons/js/dataTables.buttons.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_datatables_net_buttons___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_datatables_net_buttons__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_datatables_net_buttons_bs4__ = __webpack_require__("./node_modules/datatables.net-buttons-bs4/js/buttons.bootstrap4.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_datatables_net_buttons_bs4___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_datatables_net_buttons_bs4__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__mocks_estadoincidente__ = __webpack_require__("./src/app/mocks/estadoincidente.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__zonaTecnica_zona_tecnica_service__ = __webpack_require__("./src/app/zonaTecnica/zona-tecnica.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__clientes_cliente_service__ = __webpack_require__("./src/app/clientes/cliente.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__estacionservicio_estacionservicio_service__ = __webpack_require__("./src/app/estacionservicio/estacionservicio.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ngx_bootstrap_datepicker__ = __webpack_require__("./node_modules/ngx-bootstrap/datepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var IncidentesComponent = /** @class */ (function () {
    function IncidentesComponent(spinnerService, reportesService, router, route, notificationService, zonaTecnicaService, clienteService, localDataService, estacionservicioService, localeService) {
        var _this = this;
        this.spinnerService = spinnerService;
        this.reportesService = reportesService;
        this.router = router;
        this.route = route;
        this.notificationService = notificationService;
        this.zonaTecnicaService = zonaTecnicaService;
        this.clienteService = clienteService;
        this.localDataService = localDataService;
        this.estacionservicioService = estacionservicioService;
        this.localeService = localeService;
        this.table = null;
        this.estadoincidencias = __WEBPACK_IMPORTED_MODULE_9__mocks_estadoincidente__["a" /* ESTADOINCIDENCIAS */];
        this.datafilters = {
            estado: '-1', zonatecnica: '-1', filters: '1',
            categoria: '-1', codigo_cliente: '', estacionservicio: '-1',
            fechainicio: '', fechafin: '', tecnico: '-1'
        };
        this.localeService.use('es');
        this.dataSource = __WEBPACK_IMPORTED_MODULE_11_rxjs__["Observable"].create(function (observer) {
            // Runs on every search
            _this.datafilters.codigo_cliente = '';
            _this.clienteService.gettoken(_this.razon_social).subscribe(function (value) {
                observer.next(value.data);
            });
        });
    }
    IncidentesComponent.prototype.ngOnInit = function () {
        this.getZonasTecnicas();
        this.get();
        this.cargarEstacionServicio();
    };
    IncidentesComponent.prototype.get = function () {
        var _this = this;
        var fi = this.datafilters.fechainicio;
        var ff = this.datafilters.fechafin;
        if (this.datafilters.fechainicio != '' && this.datafilters.fechainicio != null) {
            this.datafilters.fechainicio = __WEBPACK_IMPORTED_MODULE_15_moment__(this.datafilters.fechainicio).format("DD-MM-YYYY HH:mm:ss");
        }
        if (this.datafilters.fechafin != '' && this.datafilters.fechafin != null) {
            this.datafilters.fechafin = __WEBPACK_IMPORTED_MODULE_15_moment__(this.datafilters.fechafin).format("DD-MM-YYYY HH:mm:ss");
        }
        this.spinnerService.show();
        this.reportesService.consultar('incidente', this.datafilters)
            .subscribe(function (response) {
            _this.datafilters.fechainicio = fi;
            _this.datafilters.fechafin = ff;
            if (_this.datafilters.filters != '') {
                _this.categorias = response.data.categorias;
                _this.tecnicos = response.data.tecnicos;
            }
            else {
                _this.results = response.data;
                _this.reInitDatatable();
            }
            _this.spinnerService.hide();
            _this.datafilters.filters = '';
        }, function (err) {
            _this.spinnerService.hide();
            _this.notificationService.onError("Se ha producido un error.");
        });
    };
    IncidentesComponent.prototype.reInitDatatable = function () {
        var _this = this;
        if (this.table) {
            this.table.destroy();
            this.table = null;
        }
        setTimeout(function () { return _this.loadtable(); }, 0);
    };
    IncidentesComponent.prototype.loadtable = function () {
        var exampleId = $('#example23');
        this.table = exampleId.DataTable({
            dom: 'Bfrtip',
            buttons: [
                'copy', 'csv', 'excel'
            ],
            "ordering": true,
            paging: true,
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
            },
            createdRow: function (row, data, dataIndex) {
            }
        });
        $('.buttons-copy, .buttons-csv, .buttons-print, .buttons-pdf, .buttons-excel').addClass('btn btn-primary mr-1');
    };
    IncidentesComponent.prototype.getZonasTecnicas = function () {
        var _this = this;
        this.zonaTecnicaService.get(1).subscribe(function (value) {
            _this.zonastecnicas = value.data;
            _this.spinnerService.hide();
        });
    };
    IncidentesComponent.prototype.changeTypeaheadLoading = function (e) {
        this.typeaheadLoading = e;
    };
    IncidentesComponent.prototype.typeaheadOnSelect = function (e) {
        this.datafilters.codigo_cliente = e.item.codigo_cliente;
        this.cargarEstacionServicio();
    };
    IncidentesComponent.prototype.cargarEstacionServicio = function () {
        var _this = this;
        var empresa = 0;
        this.spinnerService.show();
        empresa = this.localDataService.getLocalData('empresaSeleccionada').id;
        this.estacionservicioService.getactbycliente(empresa, this.datafilters.codigo_cliente).subscribe(function (value) {
            _this.estacionservicio = value.data;
            _this.spinnerService.hide();
        });
    };
    IncidentesComponent.prototype.getclassestadoincidencia = function (estado) {
        var result;
        result = this.estadoincidencias.filter(function (estadoinc) { return estadoinc.value === estado; });
        return result.length > 0 ? result[0].label : '';
    };
    IncidentesComponent.prototype.onselectEstacionServicio = function (estacionserviciosel) {
        var _this = this;
        this.clienteService.gettoken(estacionserviciosel.razon_social).subscribe(function (value) {
            if (value.data.length > 0) {
                _this.razon_social = value.data[0].razon_social;
            }
            _this.spinnerService.hide();
        });
    };
    IncidentesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-incidentes',
            template: __webpack_require__("./src/app/reportes/incidentes/incidentes.component.html"),
            styles: [__webpack_require__("./src/app/reportes/incidentes/incidentes.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng4_loading_spinner__["Ng4LoadingSpinnerService"],
            __WEBPACK_IMPORTED_MODULE_2__reportes_service__["a" /* ReportesService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__shared__["k" /* NotificationService */],
            __WEBPACK_IMPORTED_MODULE_10__zonaTecnica_zona_tecnica_service__["a" /* ZonaTecnicaService */],
            __WEBPACK_IMPORTED_MODULE_12__clientes_cliente_service__["a" /* ClienteService */],
            __WEBPACK_IMPORTED_MODULE_4__shared__["i" /* LocalDataService */],
            __WEBPACK_IMPORTED_MODULE_13__estacionservicio_estacionservicio_service__["a" /* EstacionservicioService */],
            __WEBPACK_IMPORTED_MODULE_14_ngx_bootstrap_datepicker__["b" /* BsLocaleService */]])
    ], IncidentesComponent);
    return IncidentesComponent;
}());



/***/ }),

/***/ "./src/app/reportes/indicadores/indicadores.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/reportes/indicadores/indicadores.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-wrapper\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <div class=\"card\">\n                    <div class=\"card-body\">\n                        <h4 class=\"card-title\">Reporte de indicadores</h4>\n                        <h6 class=\"card-subtitle\"></h6>\n                        <form>\n                            <div class=\"row\">\n                                <div class=\"col-md-4\">\n                                    <div class=\"form-group \">\n                                      <label class=\"control-label\">Año</label>\n                                      <select class=\"form-control custom-select\" [(ngModel)]=\"datafilters.year\"\n                                        name=\"ctrlzonatecnica\">\n                                        <option [value]=\"-1\">Seleccione</option>\n                                        <option *ngFor=\"let o of years\" [value]=\"o.value\">\n                                          {{ o.label }}\n                                        </option>\n                                      </select>\n                                      <small class=\"form-control-feedback\"> Seleccione un año para mostrar la información de ese año </small>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-2\">\n                                    <div class=\"form-group\">\n                                      <label class=\"control-label\"> &nbsp;</label><br>\n                                      <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!datafilters.year\" (click)=\"get()\"> <i class=\"fa fa-search\"></i>Consultar</button>\n                                    </div>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-12\">\n                <div class=\"card\">\n                    <div class=\"card-body\">\n                        <div class=\"table-responsive\" *ngIf=\"results\">\n                            <table id=\"example23\" class=\"display nowrap table table-bordered table-hover  m-t-30\" cellspacing=\"0\" width=\"100%\">\n                                <thead>\n                                    <tr>\n                                        <td>INDICADOR</td>\n                                        <td>ZONA TÉCNICA</td>\n                                        <td *ngFor=\"let header of headers\">\n                                            {{header.label}}\n                                        </td>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <ng-container *ngFor=\"let obj of results\">\n                                        <tr *ngFor=\"let item of obj\">\n                                            <td class=\"indicator\" [attr.data-label]=\"item.label\">{{item.label}}</td>\n                                            <td>{{item.zona}}</td>\n                                            <td *ngFor=\"let value of item.data\">\n                                                <ng-container *ngIf=\"value.result\">\n                                                    {{value.result}}\n                                                </ng-container>\n                                                <ng-container *ngIf=\"!value.result\">\n                                                    0\n                                                </ng-container>\n                                            </td>\n                                        </tr>\n                                    </ng-container>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/reportes/indicadores/indicadores.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndicadoresComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_clientes_cliente_service__ = __webpack_require__("./src/app/clientes/cliente.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng4_loading_spinner__ = __webpack_require__("./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reportes_service__ = __webpack_require__("./src/app/reportes/reportes.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var IndicadoresComponent = /** @class */ (function () {
    function IndicadoresComponent(spinnerService, reportesService, localeService, clienteService) {
        this.spinnerService = spinnerService;
        this.reportesService = reportesService;
        this.localeService = localeService;
        this.clienteService = clienteService;
        this.table = null;
        this.years = [
            {
                label: '2021',
                value: 2021
            },
            {
                label: '2020',
                value: 2020
            }
        ];
        this.datafilters = {
            year: ''
        };
        this.loading = false;
        this.localeService.use('es');
    }
    IndicadoresComponent.prototype.ngOnInit = function () {
    };
    IndicadoresComponent.prototype.get = function () {
        var _this = this;
        this.loading = true;
        this.spinnerService.show();
        setInterval(this.checkLoading, 3000);
        this.reportesService.consultar('indicadores', this.datafilters).subscribe(function (response) {
            _this.results = Object.values(response.data);
            var keys = Object.keys(response.data);
            if (!_this.table) {
                _this.headers = response.data[keys[0]][0].data;
            }
            //console.log(this.results);
            _this.loading = false;
            _this.reInitDatatable();
            _this.spinnerService.hide();
        });
    };
    IndicadoresComponent.prototype.checkLoading = function () {
        while (this.loading) {
            this.spinnerService.show();
        }
    };
    IndicadoresComponent.prototype.reInitDatatable = function () {
        var _this = this;
        if (this.table) {
            this.table.destroy();
            this.table = null;
        }
        setTimeout(function () { return _this.loadtable(); }, 0);
    };
    IndicadoresComponent.prototype.loadtable = function () {
        var exampleId = $('#example23');
        this.table = exampleId.DataTable({
            dom: 'Bfrtip',
            buttons: [
                'copy', 'csv', 'excel'
            ],
            "pageLength": 9,
            "ordering": true,
            paging: true,
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
            },
            createdRow: function (row, data, dataIndex) {
            }
        });
        exampleId.on('draw.dt', this.hideRepetead);
        setTimeout(this.hideRepetead, 1000);
        $('.buttons-copy, .buttons-csv, .buttons-print, .buttons-pdf, .buttons-excel').addClass('btn btn-primary mr-1');
    };
    IndicadoresComponent.prototype.hideRepetead = function () {
        var lastIndicator = null;
        var indicador = 0;
        $('tr').find("td.indicator").each(function (key, val) {
            var element = $(val);
            if (lastIndicator && lastIndicator == element.data('label')) {
                indicador++;
                element.hide();
            }
            lastIndicator = $(val).data('label');
        });
        //Aumenta el rowspan para generar el agrupador
        $('tr').find("td.indicator").each(function (key, val) {
            var element = $(val);
            if (element.is(':visible')) {
                element.attr('rowspan', indicador + 1);
                return;
            }
        });
    };
    IndicadoresComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-indicadores',
            template: __webpack_require__("./src/app/reportes/indicadores/indicadores.component.html"),
            styles: [__webpack_require__("./src/app/reportes/indicadores/indicadores.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ng4_loading_spinner__["Ng4LoadingSpinnerService"],
            __WEBPACK_IMPORTED_MODULE_4__reportes_service__["a" /* ReportesService */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["a" /* BsLocaleService */],
            __WEBPACK_IMPORTED_MODULE_1__app_clientes_cliente_service__["a" /* ClienteService */]])
    ], IndicadoresComponent);
    return IndicadoresComponent;
}());



/***/ }),

/***/ "./src/app/reportes/kpis/kpis.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/reportes/kpis/kpis.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-wrapper\">\n  <!-- ============================================================== -->\n  <!-- Container fluid  -->\n  <!-- ============================================================== -->\n  <div class=\"container-fluid\">\n    <!-- ============================================================== -->\n    <!-- Bread crumb and right sidebar toggle -->\n    <!-- ============================================================== -->\n    \n    <!-- ============================================================== -->\n    <!-- End Bread crumb and right sidebar toggle -->\n    <!-- ============================================================== -->\n    <!-- ============================================================== -->\n    <!-- Start Page Content -->\n    <!-- ============================================================== -->\n    <div class=\"row\">\n\n      <div class=\"col-12\">\n\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <h4 class=\"card-title\">Informe de Incidentes</h4>\n            <h6 class=\"card-subtitle\"></h6>\n            <form>\n              <div class=\"row\">\n\n                <div class=\"col-md-3\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label\">Cliente</label>\n\n\n                    <input [(ngModel)]=\"razon_social\" [typeahead]=\"dataSource\" [typeaheadAsync]=\"true\"\n                      (typeaheadLoading)=\"changeTypeaheadLoading($event)\"\n                      (typeaheadOnSelect)=\"typeaheadOnSelect($event)\" [typeaheadScrollable]=\"true\"\n                      typeaheadOptionField=\"razon_social\" placeholder=\"Seleccione el cliente\" class=\"form-control\"\n                      name=\"test\" autocomplete=\"off\">\n                    <div *ngIf=\"typeaheadLoading\">Cargando..</div>\n                    <small class=\"form-control-feedback\"> Seleccione el cliente </small>\n                  </div>\n\n                </div>\n                \n                <div class=\"col-md-3\">\n                  <div class=\"form-group \">\n                    <label class=\"control-label\">Zona Tecnica</label>\n                    <select class=\"form-control custom-select\" [(ngModel)]=\"datafilters.zonatecnica\"\n                      name=\"ctrlzonatecnica\">\n                      <option [value]=\"-1\">Seleccione</option>\n                      <option *ngFor=\"let o of zonastecnicas\" [value]=\"o.id.toString()\">\n                        {{ o.name }}\n                      </option>\n                    </select>\n                    <small class=\"form-control-feedback\"> Seleccione las zonas tecnicas asociadas al usaurio </small>\n                  </div>\n                </div>\n                <div class=\"col-md-2\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label\">Fecha Inicial</label>\n\n\n                    <input type=\"text\" id=\"name\" class=\"form-control\" placeholder=\"Escriba  la fecha inicial\"\n                      [(ngModel)]=\"datafilters.fechainicio\" name=\"fechainicio\" autocomplete=\"off\" bsDatepicker\n                      #dp=\"bsDatepicker\">\n\n\n\n                  </div>\n\n                </div>\n                <div class=\"col-md-2\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label\">Fecha Final</label>\n\n\n                    <input type=\"text\" id=\"name\" class=\"form-control\" placeholder=\"Escriba  la fecha inicial\"\n                      [(ngModel)]=\"datafilters.fechafin\" name=\"fechafin\" autocomplete=\"off\" bsDatepicker\n                      #dp=\"bsDatepicker\">\n\n                  </div>\n\n                </div>\n                <div class=\"col-md-2\">\n\n\n\n                  <div class=\"form-group\">\n                    <label class=\"control-label\"> &nbsp;</label><br>\n                    <button type=\"submit\" class=\"btn btn-success\" (click)=\"get()\"> <i class=\"fa fa-search\"></i>\n                      Consultar</button>\n                  </div>\n                </div>\n\n\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-12\">\n\n        <div class=\"card\">\n          <div class=\"card-body\">\n\n\n            <div class=\"table-responsive\" *ngIf=\"results\">\n              <table id=\"example23\" class=\"display nowrap table table-bordered table-hover  m-t-30  \" cellspacing=\"0\"\n                width=\"100%\">\n                <thead>\n                  <tr>\n                    <th>#</th>\n                    <th>Zona Tecnica</th>\n                    <th>Cliente</th>\n                    <th>Nuevos</th>\n                    <th>Pendientes</th>\n                    <th>Planificados</th>\n                    <th>Resueltos</th>   \n                    <th>Total</th>             \n                    <th>Acpd</th>                           \n                    <th>Acfp</th>               \n                    <th>Apfd</th>               \n                    <th>Porcentaje de efectividad del servicio</th>          \n                    \n                  </tr>\n                </thead>\n                <tfoot>\n                  <tr>\n                    <th>#</th>\n                    <th>Zona Tecnica</th>\n                    <th>Cliente</th>\n                    <th>Nuevos</th>\n                    <th>Pendientes</th>\n                    <th>Planificados</th>\n                    <th>Resueltos</th> \n                    <th>Total</th>    \n                    <th>Acpd</th>                           \n                    <th>Acfp</th>               \n                    <th>Apfd</th>               \n                    <th>Porcentaje de efectividad del servicio</th>\n                   \n                    \n                  </tr>\n                </tfoot>\n                <tbody>\n                  <ng-container *ngFor=\"let row of results; let i = index\">\n                    <tr>\n                      <td class=\"font-weight-bold text-muted \">{{i+1}}</td>\n                       <td class=\"font-weight-bold text-muted \">{{row.zonatecnica}}</td>\n                       <td class=\"font-weight-bold text-muted \">{{row.fi}} al {{row.ff}}</td>\n                       <td class=\"font-weight-bold text-muted \">{{row.nuevos}}</td>\n                       <td class=\"font-weight-bold text-muted \">{{row.pendiente}}</td>\n                       <td class=\"font-weight-bold text-muted \">{{row.planificados}}</td>\n                       <td class=\"font-weight-bold text-muted \">{{row.resueltos}}</td>\n                       <td class=\"font-weight-bold text-muted \">{{row.total}}</td>\n                       <td class=\"font-weight-bold text-muted \">{{row.acpd}}</td>\n                       <td class=\"font-weight-bold text-muted \">{{row.acfp}}</td>\n                       <td class=\"font-weight-bold text-muted \">{{row.apfd}}</td>\n                       <td class=\"font-weight-bold text-muted \">{{calcularKpi(row)|percent}}\n                     \n                        </td>\n                  \n\n\n                    </tr>\n                    <ng-container *ngFor=\"let row_cli of row.clientes; let j = index\">\n                      <tr>\n                        <td class=\"font-weight-bold text-muted \">{{j+1}}</td>\n                         <td class=\"font-weight-bold text-muted \"></td>\n                         <td class=\"font-weight-bold text-muted \">{{row_cli.razonsocial}}</td>\n                         <td class=\"font-weight-bold text-muted \">{{row_cli.nuevos}}</td>\n                         <td class=\"font-weight-bold text-muted \">{{row_cli.pendiente}}</td>\n                         <td class=\"font-weight-bold text-muted \">{{row_cli.planificados}}</td>\n                         <td class=\"font-weight-bold text-muted \">{{row_cli.resueltos}}</td>\n                         <td class=\"font-weight-bold text-muted \">{{row_cli.total}}</td>\n                         <td class=\"font-weight-bold text-muted \">{{row_cli.acpd}}</td>\n                         <td class=\"font-weight-bold text-muted \">{{row_cli.acfp}}</td>\n                         <td class=\"font-weight-bold text-muted \">{{row_cli.apfd}}</td>\n                         <td class=\"font-weight-bold text-muted \">{{calcularKpi(row_cli)|percent}}\n                       \n                          </td>\n                    \n  \n  \n                      </tr>\n  \n  \n  \n  \n  \n                    </ng-container>\n\n\n\n\n\n                  </ng-container>\n                </tbody>\n\n\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/reportes/kpis/kpis.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KpisComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng4_loading_spinner__ = __webpack_require__("./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reportes_service__ = __webpack_require__("./src/app/reportes/reportes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_datatables_net__ = __webpack_require__("./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_datatables_net___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_datatables_net__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_datatables_net_bs4__ = __webpack_require__("./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_datatables_net_bs4___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_datatables_net_bs4__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_datatables_net_buttons__ = __webpack_require__("./node_modules/datatables.net-buttons/js/dataTables.buttons.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_datatables_net_buttons___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_datatables_net_buttons__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_datatables_net_buttons_bs4__ = __webpack_require__("./node_modules/datatables.net-buttons-bs4/js/buttons.bootstrap4.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_datatables_net_buttons_bs4___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_datatables_net_buttons_bs4__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__mocks_estadoincidente__ = __webpack_require__("./src/app/mocks/estadoincidente.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__zonaTecnica_zona_tecnica_service__ = __webpack_require__("./src/app/zonaTecnica/zona-tecnica.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__clientes_cliente_service__ = __webpack_require__("./src/app/clientes/cliente.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__estacionservicio_estacionservicio_service__ = __webpack_require__("./src/app/estacionservicio/estacionservicio.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ngx_bootstrap_datepicker__ = __webpack_require__("./node_modules/ngx-bootstrap/datepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var KpisComponent = /** @class */ (function () {
    function KpisComponent(spinnerService, reportesService, router, route, notificationService, zonaTecnicaService, clienteService, localDataService, estacionservicioService, localeService) {
        var _this = this;
        this.spinnerService = spinnerService;
        this.reportesService = reportesService;
        this.router = router;
        this.route = route;
        this.notificationService = notificationService;
        this.zonaTecnicaService = zonaTecnicaService;
        this.clienteService = clienteService;
        this.localDataService = localDataService;
        this.estacionservicioService = estacionservicioService;
        this.localeService = localeService;
        this.table = null;
        this.estadoincidencias = __WEBPACK_IMPORTED_MODULE_9__mocks_estadoincidente__["a" /* ESTADOINCIDENCIAS */];
        this.datafilters = {
            estado: '-1', zonatecnica: '-1', filters: '1',
            categoria: '-1', codigo_cliente: '', estacionservicio: '-1',
            fechainicio: '', fechafin: '', tecnico: '-1'
        };
        this.localeService.use('es');
        this.dataSource = __WEBPACK_IMPORTED_MODULE_11_rxjs__["Observable"].create(function (observer) {
            // Runs on every search
            _this.datafilters.codigo_cliente = '';
            _this.clienteService.gettoken(_this.razon_social).subscribe(function (value) {
                observer.next(value.data);
            });
        });
    }
    KpisComponent.prototype.ngOnInit = function () {
        this.getZonasTecnicas();
        this.get();
    };
    KpisComponent.prototype.get = function () {
        var _this = this;
        var fi = this.datafilters.fechainicio;
        var ff = this.datafilters.fechafin;
        if (this.datafilters.fechainicio != '' && this.datafilters.fechainicio != null) {
            this.datafilters.fechainicio = __WEBPACK_IMPORTED_MODULE_15_moment__(this.datafilters.fechainicio).format("DD-MM-YYYY HH:mm:ss");
        }
        if (this.datafilters.fechafin != '' && this.datafilters.fechafin != null) {
            this.datafilters.fechafin = __WEBPACK_IMPORTED_MODULE_15_moment__(this.datafilters.fechafin).format("DD-MM-YYYY HH:mm:ss");
        }
        this.spinnerService.show();
        this.reportesService.consultar('kpis', this.datafilters)
            .subscribe(function (response) {
            _this.datafilters.fechainicio = fi;
            _this.datafilters.fechafin = ff;
            if (_this.datafilters.filters != '') {
                _this.categorias = response.data.categorias;
                _this.tecnicos = response.data.tecnicos;
            }
            else {
                _this.results = response.data;
                _this.reInitDatatable();
            }
            _this.spinnerService.hide();
            _this.datafilters.filters = '';
        }, function (err) {
            _this.spinnerService.hide();
            _this.notificationService.onError("Se ha producido un error.");
        });
    };
    KpisComponent.prototype.reInitDatatable = function () {
        var _this = this;
        if (this.table) {
            this.table.destroy();
            this.table = null;
        }
        setTimeout(function () { return _this.loadtable(); }, 0);
    };
    KpisComponent.prototype.loadtable = function () {
        var exampleId = $('#example23');
        this.table = exampleId.DataTable({
            dom: 'Bfrtip',
            buttons: [
                'copy', 'csv', 'excel'
            ],
            "ordering": false,
            paging: true,
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
            },
            createdRow: function (row, data, dataIndex) {
            }
        });
        $('.buttons-copy, .buttons-csv, .buttons-print, .buttons-pdf, .buttons-excel').addClass('btn btn-primary mr-1');
    };
    KpisComponent.prototype.getZonasTecnicas = function () {
        var _this = this;
        this.zonaTecnicaService.get(1).subscribe(function (value) {
            _this.zonastecnicas = value.data;
            _this.spinnerService.hide();
        });
    };
    KpisComponent.prototype.changeTypeaheadLoading = function (e) {
        this.typeaheadLoading = e;
    };
    KpisComponent.prototype.typeaheadOnSelect = function (e) {
        this.datafilters.codigo_cliente = e.item.codigo_cliente;
        this.cargarEstacionServicio();
    };
    KpisComponent.prototype.cargarEstacionServicio = function () {
        var _this = this;
        var empresa = 0;
        this.spinnerService.show();
        empresa = this.localDataService.getLocalData('empresaSeleccionada').id;
        this.estacionservicioService.getbycliente(empresa, this.datafilters.codigo_cliente).subscribe(function (value) {
            _this.estacionservicio = value.data;
            _this.spinnerService.hide();
        });
    };
    KpisComponent.prototype.getclassestadoincidencia = function (estado) {
        var result;
        result = this.estadoincidencias.filter(function (estadoinc) { return estadoinc.value === estado; });
        return result.length > 0 ? result[0].label : '';
    };
    KpisComponent.prototype.calcularKpi = function (item) {
        item.acpd = parseFloat(item.acpd);
        item.acfp = parseFloat(item.acfp);
        item.apfd = parseFloat(item.apfd);
        return (item.acpd / (item.acpd + item.acfp + item.apfd));
    };
    KpisComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-kpis',
            template: __webpack_require__("./src/app/reportes/kpis/kpis.component.html"),
            styles: [__webpack_require__("./src/app/reportes/kpis/kpis.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng4_loading_spinner__["Ng4LoadingSpinnerService"],
            __WEBPACK_IMPORTED_MODULE_2__reportes_service__["a" /* ReportesService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__shared__["k" /* NotificationService */],
            __WEBPACK_IMPORTED_MODULE_10__zonaTecnica_zona_tecnica_service__["a" /* ZonaTecnicaService */],
            __WEBPACK_IMPORTED_MODULE_12__clientes_cliente_service__["a" /* ClienteService */],
            __WEBPACK_IMPORTED_MODULE_4__shared__["i" /* LocalDataService */],
            __WEBPACK_IMPORTED_MODULE_13__estacionservicio_estacionservicio_service__["a" /* EstacionservicioService */],
            __WEBPACK_IMPORTED_MODULE_14_ngx_bootstrap_datepicker__["b" /* BsLocaleService */]])
    ], KpisComponent);
    return KpisComponent;
}());



/***/ }),

/***/ "./src/app/reportes/partes/partes.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/reportes/partes/partes.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-wrapper\">\n  <!-- ============================================================== -->\n  <!-- Container fluid  -->\n  <!-- ============================================================== -->\n  <div class=\"container-fluid\">\n    <!-- ============================================================== -->\n    <!-- Bread crumb and right sidebar toggle -->\n    <!-- ============================================================== -->\n    \n    <!-- ============================================================== -->\n    <!-- End Bread crumb and right sidebar toggle -->\n    <!-- ============================================================== -->\n    <!-- ============================================================== -->\n    <!-- Start Page Content -->\n    <!-- ============================================================== -->\n    <div class=\"row\">\n\n      <div class=\"col-12\">\n\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <h4 class=\"card-title\">Informe de Partes</h4>\n            <h6 class=\"card-subtitle\"></h6>\n            <form>\n              <div class=\"row\">\n\n\n                <div class=\"col-md-3\">\n                  <div class=\"form-group \">\n                    <label class=\"control-label\">Estacion Servicio</label>\n\n                    <ng-select [items]=\"estacionservicio\" bindLabel=\"name\" bindValue=\"id\" [multiple]=\"false\"\n                      placeholder=\"Seleccione\" [(ngModel)]=\"datafilters.estacionservicio\"\n                      (change)=\"onselectEstacionServicio($event)\" name=\"ctrlestacionservicio\"\n                      #ctrlestacionservicio=\"ngModel\">\n                    </ng-select>\n                    <small class=\"form-control-feedback\"> Seleccione las zonas tecnicas asociadas al usaurio </small>\n                  </div>\n                </div>\n                <div class=\"col-md-3\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label\">Cliente</label>\n\n\n                    <input [(ngModel)]=\"razon_social\" [typeahead]=\"dataSource\" [typeaheadAsync]=\"true\"\n                      (typeaheadLoading)=\"changeTypeaheadLoading($event)\"\n                      (typeaheadOnSelect)=\"typeaheadOnSelect($event)\" [typeaheadScrollable]=\"true\"\n                      typeaheadOptionField=\"razon_social\" placeholder=\"Seleccione el cliente\" class=\"form-control\"\n                      name=\"test\" autocomplete=\"off\">\n                    <div *ngIf=\"typeaheadLoading\">Cargando..</div>\n                    <small class=\"form-control-feedback\"> Seleccione el cliente </small>\n                  </div>\n\n                </div>\n                <div class=\"col-md-3\">\n                  <div class=\"form-group \">\n                    <label class=\"control-label\">Zona Tecnica</label>\n                    <select class=\"form-control custom-select\" [(ngModel)]=\"datafilters.zonatecnica\"\n                      name=\"ctrlzonatecnica\">\n                      <option [value]=\"-1\">Seleccione</option>\n                      <option *ngFor=\"let o of zonastecnicas\" [value]=\"o.id.toString()\">\n                        {{ o.name }}\n                      </option>\n                    </select>\n                    <small class=\"form-control-feedback\"> Seleccione las zonas tecnicas asociadas al usaurio </small>\n                  </div>\n                </div>\n                <div class=\"col-md-3\">\n                  <div class=\"form-group \">\n                    <label class=\"control-label\">Estado </label>\n                    <select class=\"form-control custom-select\" [(ngModel)]=\"datafilters.estado\" name=\"ctrlestado\">\n                      <option [value]=\"-1\">Seleccione</option>\n                      <option *ngFor=\"let o of estadoincidencias\" [value]=\"o.value.toString()\">\n                        {{ o.name }}\n                      </option>\n                    </select>\n                    <small class=\"form-control-feedback\"> Seleccione el estado </small>\n                  </div>\n                </div>\n                <div class=\"col-md-3\">\n                  <div class=\"form-group \">\n                    <label class=\"control-label\">Categoria Incidente</label>\n                    <select class=\"form-control custom-select\" [(ngModel)]=\"datafilters.categoria\" name=\"ctrlcategoria\">\n                      <option [value]=\"-1\">Seleccione</option>\n                      <option *ngFor=\"let o of categorias\" [value]=\"o.id.toString()\">\n                        {{ o.categoria }} ({{ o.tipocontrato }})\n                      </option>\n                    </select>\n                    <small class=\"form-control-feedback\"> Seleccione la Categoria Incidente </small>\n                  </div>\n                </div>\n                <div class=\"col-md-2\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label\">Fecha Inicial</label>\n\n\n                    <input type=\"text\" id=\"name\" class=\"form-control\" placeholder=\"Escriba  la fecha inicial\"\n                      [(ngModel)]=\"datafilters.fechainicio\" name=\"fechainicio\" autocomplete=\"off\" bsDatepicker\n                      #dp=\"bsDatepicker\">\n\n\n\n                  </div>\n\n                </div>\n                <div class=\"col-md-2\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label\">Fecha Final</label>\n\n\n                    <input type=\"text\" id=\"name\" class=\"form-control\" placeholder=\"Escriba  la fecha inicial\"\n                      [(ngModel)]=\"datafilters.fechafin\" name=\"fechafin\" autocomplete=\"off\" bsDatepicker\n                      #dp=\"bsDatepicker\">\n\n                  </div>\n\n                </div>\n                <div class=\"col-md-3\">\n                  <div class=\"form-group \">\n                    <label class=\"control-label\">Tecnico</label>\n                    <select class=\"form-control custom-select\" [(ngModel)]=\"datafilters.tecnico\" name=\"ctrltecnico\">\n                      <option [value]=\"-1\">Seleccione</option>\n                      <option *ngFor=\"let o of tecnicos\" [value]=\"o.id.toString()\">\n                        {{ o.name }}\n                      </option>\n                    </select>\n                    <small class=\"form-control-feedback\"> Seleccione la Categoria Incidente </small>\n                  </div>\n                </div>\n                <div class=\"col-md-3\">\n                  <div class=\"form-group \">\n                    <label class=\"control-label\">#Incidente</label>\n\n                    <input [(ngModel)]=\"datafilters.numinc\" placeholder=\"# Incidente\" class=\"form-control\"\n                      name=\"noincidente\">\n\n                    <small class=\"form-control-feedback\"> Escriba el numero de incidente</small>\n                  </div>\n                </div>\n                <div class=\"col-md-3\">\n                  <div class=\"form-group \">\n                    <label class=\"control-label\">#parte</label>\n\n                    <input [(ngModel)]=\"datafilters.numparte\" placeholder=\"# Parte\" class=\"form-control\" name=\"noparte\">\n\n                    <small class=\"form-control-feedback\"> Escriba el numero de parte</small>\n                  </div>\n                </div>\n                <div class=\"col-md-2\">\n\n\n\n                  <div class=\"form-group\">\n                    <label class=\"control-label\"> &nbsp;</label><br>\n                    <button type=\"submit\" class=\"btn btn-success\" (click)=\"get()\"> <i class=\"fa fa-search\"></i>\n                      Consultar</button>\n                  </div>\n                </div>\n\n\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-12\">\n\n        <div class=\"card\">\n          <div class=\"card-body\">\n\n\n            <div class=\"table-responsive\" *ngIf=\"results\">\n              <table id=\"example23\" class=\"display nowrap table table-bordered table-hover  m-t-30  \" cellspacing=\"0\"\n                width=\"100%\">\n                <thead>\n                  <tr>\n                    <th>#</th>\n                    <th>Estación Servicio</th>\n                    <th>Estado Incidencia</th>\n                    <th>Titulo Incidencia</th>\n                    <th>Cliente</th>\n                    <th>Fecha Programación</th>\n                    <th>Fecha Cierre</th>\n                    <th>Ubicación cierre</th>\n                    <th>Parte #</th>\n                    <th>Estado Parte </th>\n                    <th>Tecnico</th>\n                    <th>Tiempo</th>\n                    <th>Distancia</th>\n                    <th>Fecha Creación</th>\n                    <th>Partida</th>\n                    <th>Llegada</th>\n                    <th>Latitud</th>\n                    <th>Distancia Estación KMS</th>\n                    <th>Archivo</th>\n                  </tr>\n                </thead>\n                <tfoot>\n                  <tr>\n                    <th>#</th>\n                    <th>Estación Servicio</th>\n                    <th>Estado Incidencia</th>\n                    <th>Titulo Incidencia</th>\n                    <th>Cliente</th>\n                    <th>Fecha Programación</th>\n                    <th>Fecha Cierre</th>\n                    <th>Ubicación cierre</th>\n                    <th>Parte #</th>\n                    <th>Estado Parte </th>\n                    <th>Tecnico</th>\n                    <th>Tiempo</th>\n                    <th>Distancia</th>\n                    <th>Fecha Creación</th>\n                    <th>Partida</th>\n                    <th>Llegada</th>\n                    <th>Latitud</th>\n                    <th>Distancia Estación</th>\n                    <th>Archivo</th>\n                  </tr>\n                </tfoot>\n                <tbody>\n                  <ng-container *ngFor=\"let row of results; let i = index\">\n                    <tr>\n                      <td class=\"font-weight-bold text-info\" [attr.data-search]=\"row.id\">\n                        <a routerLink=\"/incidencia/{{row.estado=='CLO'?'resumen':'edit'}}/{{row.id}}\" class=\"iconlistp\">\n                          {{row.id}} </a>\n                        <a routerLink=\"/incidencia/{{row.estado=='CLO'?'resumen':'edit'}}/{{row.id}}\" class=\"iconlistp\"\n                          title=\"Abrir en otra pagina\" target=\"_blank\"><i class=\" fas fa-external-link-alt\"></i></a>\n                      </td>\n                      <td class=\"font-weight-bold text-info\">{{row.estacion_servicio.name}}</td>\n                      <td class=\"font-weight-bold \"><span\n                          class=\"badge badge-pill {{getclassestadoincidencia(row.estado)}} float-left\">\n                          {{row.estado}}\n                        </span></td>\n                      <td class=\"font-weight-bold text-muted \">{{row.titulo}}</td>\n                      <td class=\"font-weight-bold text-muted \">{{row.razonsocial}}</td>\n                      <td class=\"font-weight-bold text-muted \">{{row.fecha_programacion}}</td>\n                      <td class=\"font-weight-bold text-muted \">{{row.fecha_cierre}}</td>\n                      <td class=\"font-weight-bold text-muted \"><a\n                          href=\"https://maps.google.com/maps?q={{row?.latcierre}},{{row?.longcierre}}\"\n                          target=\"blank\">Cierre</a><br></td>\n                      <td class=\"font-weight-bold text-muted \">\n                        {{row.parte_id}}\n                      </td>\n                      <td class=\"font-weight-bold text-muted \">\n                        {{evaluaestadoparte(row.estadorespuesta)}}\n                      </td>\n                      <td class=\"font-weight-bold text-muted \">\n                        {{row.nombretecnicorta}}\n                      </td>\n                      <td class=\"font-weight-bold text-muted \">\n                        {{row.tiemporespuesta_rta}}\n                      </td>\n                      <td class=\"font-weight-bold text-muted \">\n                        {{row.distanciareportada_rta}}\n                      </td>\n                      <td class=\"font-weight-bold text-muted \">\n                        {{row.fechacreacion}}\n                      </td>\n                      <td class=\"font-weight-bold text-muted \">\n                        {{row.fecha_partida_rta}}\n                      </td>\n                      <td class=\"font-weight-bold text-muted \">\n                        {{row.fecha_llegada_rta}}\n                      </td>\n                      <td class=\"font-weight-bold text-muted \">\n                        <a href=\"https://maps.google.com/maps?q={{row?.latpartida_rta}},{{row?.lngpartida_rta}}\"\n                          target=\"blank\">Partida</a><br>\n                        <a href=\"https://maps.google.com/maps?q={{row?.latllegada_rta}},{{row?.lngllegada_rta}}\"\n                          target=\"blank\">Llegada</a><br>\n                        <a href=\"https://maps.google.com/maps?q={{row?.latrespuesta_rta}},{{row?.longrespuesta}}\"\n                          target=\"blank\">Respuesta</a>\n                      </td>\n                      <td class=\"font-weight-bold text-muted \">\n                        {{row.distestcierre}}\n                      </td>\n                      <td class=\"font-weight-bold text-muted \">\n                        <a href=\"{{apiurl+'storage/respuestas/resp_'+row.rta_id+'.pdf'}}\" download>Descargar Pdf</a>\n                      </td>\n\n\n                    </tr>\n\n\n\n\n\n                  </ng-container>\n                </tbody>\n\n\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/reportes/partes/partes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng4_loading_spinner__ = __webpack_require__("./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reportes_service__ = __webpack_require__("./src/app/reportes/reportes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_datatables_net__ = __webpack_require__("./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_datatables_net___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_datatables_net__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_datatables_net_bs4__ = __webpack_require__("./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_datatables_net_bs4___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_datatables_net_bs4__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_datatables_net_buttons__ = __webpack_require__("./node_modules/datatables.net-buttons/js/dataTables.buttons.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_datatables_net_buttons___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_datatables_net_buttons__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_datatables_net_buttons_bs4__ = __webpack_require__("./node_modules/datatables.net-buttons-bs4/js/buttons.bootstrap4.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_datatables_net_buttons_bs4___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_datatables_net_buttons_bs4__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__mocks_estadoincidente__ = __webpack_require__("./src/app/mocks/estadoincidente.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__zonaTecnica_zona_tecnica_service__ = __webpack_require__("./src/app/zonaTecnica/zona-tecnica.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__clientes_cliente_service__ = __webpack_require__("./src/app/clientes/cliente.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__estacionservicio_estacionservicio_service__ = __webpack_require__("./src/app/estacionservicio/estacionservicio.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ngx_bootstrap_datepicker__ = __webpack_require__("./node_modules/ngx-bootstrap/datepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var PartesComponent = /** @class */ (function () {
    function PartesComponent(spinnerService, reportesService, router, route, notificationService, zonaTecnicaService, clienteService, localDataService, estacionservicioService, localeService) {
        var _this = this;
        this.spinnerService = spinnerService;
        this.reportesService = reportesService;
        this.router = router;
        this.route = route;
        this.notificationService = notificationService;
        this.zonaTecnicaService = zonaTecnicaService;
        this.clienteService = clienteService;
        this.localDataService = localDataService;
        this.estacionservicioService = estacionservicioService;
        this.localeService = localeService;
        this.table = null;
        this.estadoincidencias = __WEBPACK_IMPORTED_MODULE_9__mocks_estadoincidente__["a" /* ESTADOINCIDENCIAS */];
        this.datafilters = {
            estado: '-1', zonatecnica: '-1', filters: '1',
            categoria: '-1', codigo_cliente: '', estacionservicio: '-1',
            fechainicio: '', fechafin: '', tecnico: '-1', numparte: '', numinc: ''
        };
        this.localeService.use('es');
        this.dataSource = __WEBPACK_IMPORTED_MODULE_11_rxjs__["Observable"].create(function (observer) {
            // Runs on every search
            _this.datafilters.codigo_cliente = '';
            _this.clienteService.gettoken(_this.razon_social).subscribe(function (value) {
                observer.next(value.data);
            });
        });
        this.apiurl = __WEBPACK_IMPORTED_MODULE_16__environments_environment__["a" /* environment */].apiUrl;
    }
    PartesComponent.prototype.ngOnInit = function () {
        this.getZonasTecnicas();
        this.get();
        this.cargarEstacionServicio();
    };
    PartesComponent.prototype.get = function () {
        var _this = this;
        var fi = this.datafilters.fechainicio;
        var ff = this.datafilters.fechafin;
        if (this.datafilters.fechainicio != '' && this.datafilters.fechainicio != null) {
            this.datafilters.fechainicio = __WEBPACK_IMPORTED_MODULE_15_moment__(this.datafilters.fechainicio).format("DD-MM-YYYY HH:mm:ss");
        }
        if (this.datafilters.fechafin != '' && this.datafilters.fechafin != null) {
            this.datafilters.fechafin = __WEBPACK_IMPORTED_MODULE_15_moment__(this.datafilters.fechafin).format("DD-MM-YYYY HH:mm:ss");
        }
        this.spinnerService.show();
        this.reportesService.consultar('partes', this.datafilters)
            .subscribe(function (response) {
            _this.datafilters.fechainicio = fi;
            _this.datafilters.fechafin = ff;
            if (_this.datafilters.filters != '') {
                _this.categorias = response.data.categorias;
                _this.tecnicos = response.data.tecnicos;
            }
            else {
                _this.results = response.data;
                _this.reInitDatatable();
            }
            _this.spinnerService.hide();
            _this.datafilters.filters = '';
        }, function (err) {
            _this.spinnerService.hide();
            _this.notificationService.onError("Se ha producido un error.");
        });
    };
    PartesComponent.prototype.reInitDatatable = function () {
        var _this = this;
        if (this.table) {
            this.table.destroy();
            this.table = null;
        }
        setTimeout(function () { return _this.loadtable(); }, 0);
    };
    PartesComponent.prototype.loadtable = function () {
        var exampleId = $('#example23');
        this.table = exampleId.DataTable({
            dom: 'Bfrtip',
            buttons: [
                'copy', 'csv', 'excel'
            ],
            "ordering": true,
            paging: true,
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
            },
            createdRow: function (row, data, dataIndex) {
            }
        });
        $('.buttons-copy, .buttons-csv, .buttons-print, .buttons-pdf, .buttons-excel').addClass('btn btn-primary mr-1');
    };
    PartesComponent.prototype.getZonasTecnicas = function () {
        var _this = this;
        this.zonaTecnicaService.get(1).subscribe(function (value) {
            _this.zonastecnicas = value.data;
            _this.spinnerService.hide();
        });
    };
    PartesComponent.prototype.changeTypeaheadLoading = function (e) {
        this.typeaheadLoading = e;
    };
    PartesComponent.prototype.typeaheadOnSelect = function (e) {
        this.datafilters.codigo_cliente = e.item.codigo_cliente;
        this.cargarEstacionServicio();
    };
    PartesComponent.prototype.cargarEstacionServicio = function () {
        var _this = this;
        var empresa = 0;
        this.spinnerService.show();
        empresa = this.localDataService.getLocalData('empresaSeleccionada').id;
        this.estacionservicioService.getactbycliente(empresa, this.datafilters.codigo_cliente).subscribe(function (value) {
            _this.estacionservicio = value.data;
            _this.spinnerService.hide();
        });
    };
    PartesComponent.prototype.getclassestadoincidencia = function (estado) {
        var result;
        result = this.estadoincidencias.filter(function (estadoinc) { return estadoinc.value === estado; });
        return result.length > 0 ? result[0].label : '';
    };
    PartesComponent.prototype.onselectEstacionServicio = function (estacionserviciosel) {
        var _this = this;
        this.clienteService.gettoken(estacionserviciosel.razon_social).subscribe(function (value) {
            if (value.data.length > 0) {
                _this.razon_social = value.data[0].razon_social;
            }
            _this.spinnerService.hide();
        });
    };
    PartesComponent.prototype.evaluaestadoparte = function (value) {
        if (value == "TE") {
            return 'Terminada';
        }
        else if (value == "PM") {
            return 'Pendiente por material';
        }
        else if (value == "PC") {
            return 'Pendiente por restricciones de cliente';
        }
        else if (value == "PS") {
            return 'Pendiente por seguridad';
        }
    };
    PartesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-partes',
            template: __webpack_require__("./src/app/reportes/partes/partes.component.html"),
            styles: [__webpack_require__("./src/app/reportes/partes/partes.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng4_loading_spinner__["Ng4LoadingSpinnerService"],
            __WEBPACK_IMPORTED_MODULE_2__reportes_service__["a" /* ReportesService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__shared__["k" /* NotificationService */],
            __WEBPACK_IMPORTED_MODULE_10__zonaTecnica_zona_tecnica_service__["a" /* ZonaTecnicaService */],
            __WEBPACK_IMPORTED_MODULE_12__clientes_cliente_service__["a" /* ClienteService */],
            __WEBPACK_IMPORTED_MODULE_4__shared__["i" /* LocalDataService */],
            __WEBPACK_IMPORTED_MODULE_13__estacionservicio_estacionservicio_service__["a" /* EstacionservicioService */],
            __WEBPACK_IMPORTED_MODULE_14_ngx_bootstrap_datepicker__["b" /* BsLocaleService */]])
    ], PartesComponent);
    return PartesComponent;
}());



/***/ }),

/***/ "./src/app/reportes/planificaion-semanal/planificaion-semanal.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/reportes/planificaion-semanal/planificaion-semanal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-wrapper\">\n  <!-- ============================================================== -->\n  <!-- Container fluid  -->\n  <!-- ============================================================== -->\n  <div class=\"container-fluid\">\n    <!-- ============================================================== -->\n    <!-- Bread crumb and right sidebar toggle -->\n    <!-- ============================================================== -->\n    \n    <!-- ============================================================== -->\n    <!-- End Bread crumb and right sidebar toggle -->\n    <!-- ============================================================== -->\n    <!-- ============================================================== -->\n    <!-- Start Page Content -->\n    <!-- ============================================================== -->\n    <div class=\"row\">\n\n      <div class=\"col-12\">\n\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <h4 class=\"card-title\">Informe Planificación Semanal</h4>\n            <h6 class=\"card-subtitle\"></h6>\n            <form #filterForm=\"ngForm\">\n              <div class=\"row\">\n\n                <div class=\"col-md-3\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label\">Cliente</label>\n\n\n                    <input [(ngModel)]=\"razon_social\" [typeahead]=\"dataSource\" [typeaheadAsync]=\"true\"\n                      (typeaheadLoading)=\"changeTypeaheadLoading($event)\"\n                      (typeaheadOnSelect)=\"typeaheadOnSelect($event)\" [typeaheadScrollable]=\"true\"\n                      typeaheadOptionField=\"razon_social\" placeholder=\"Seleccione el cliente\" class=\"form-control\"\n                      name=\"test\" autocomplete=\"off\">\n                    <div *ngIf=\"typeaheadLoading\">Cargando..</div>\n                    <small class=\"form-control-feedback\"> Seleccione el cliente </small>\n                  </div>\n\n                </div>\n                <div class=\"col-md-3\">\n                  <div class=\"form-group \">\n                    <label class=\"control-label\">Estacion Servicio</label>\n                    <select class=\"form-control custom-select\" [(ngModel)]=\"datafilters.estacionservicio\"\n                      name=\"ctrlestacionservicio\">\n                      <option [value]=\"-1\">Seleccione</option>\n                      <option *ngFor=\"let o of estacionservicio\" [value]=\"o.id.toString()\">\n                        {{ o.name }}\n                      </option>\n                    </select>\n                    <small class=\"form-control-feedback\"> Seleccione las zonas tecnicas asociadas al usaurio </small>\n                  </div>\n                </div>\n                <div class=\"col-md-3\">\n                  <div class=\"form-group \">\n                    <label class=\"control-label\">Zona Tecnica</label>\n                    <select class=\"form-control custom-select\" [(ngModel)]=\"datafilters.zonatecnica\"\n                      name=\"ctrlzonatecnica\">\n                      <option [value]=\"-1\">Seleccione</option>\n                      <option *ngFor=\"let o of zonastecnicas\" [value]=\"o.id.toString()\">\n                        {{ o.name }}\n                      </option>\n                    </select>\n                    <small class=\"form-control-feedback\"> Seleccione las zonas tecnicas asociadas al usaurio </small>\n                  </div>\n                </div>\n                <div class=\"col-md-3\">\n                  <div class=\"form-group \">\n                    <label class=\"control-label\">Estado </label>\n                    <select class=\"form-control custom-select\" [(ngModel)]=\"datafilters.estado\" name=\"ctrlestado\">\n                      <option [value]=\"-1\">Seleccione</option>\n                      <option *ngFor=\"let o of estadoincidencias\" [value]=\"o.value.toString()\">\n                        {{ o.name }}\n                      </option>\n                    </select>\n                    <small class=\"form-control-feedback\"> Seleccione el estado </small>\n                  </div>\n                </div>\n                <div class=\"col-md-3\">\n                  <div class=\"form-group \">\n                    <label class=\"control-label\">Categoria Incidente</label>\n                    <select class=\"form-control custom-select\" [(ngModel)]=\"datafilters.categoria\" name=\"ctrlcategoria\">\n                      <option [value]=\"-1\">Seleccione</option>\n                      <option *ngFor=\"let o of categorias\" [value]=\"o.id.toString()\">\n                        {{ o.categoria }} ({{ o.tipocontrato }})\n                      </option>\n                    </select>\n                    <small class=\"form-control-feedback\"> Seleccione la Categoria Incidente </small>\n                  </div>\n                </div>\n                <div class=\"col-md-4\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label\">Fecha Inicial</label><span class=\"text-danger\">*</span>\n\n\n                    <input type=\"text\" id=\"name\" class=\"form-control\" placeholder=\"Fecha Inicial\" [(ngModel)]=\"fi\"\n                      name=\"fechainicio\" autocomplete=\"off\" bsDatepicker [bsConfig]=\"{ selectWeek: true}\"\n                      #dp=\"bsDatepicker\" (onHidden)=\"hclosedatefi()\" required> Fecha\n                    fin: {{datafilters.fechafin| date: 'dd/MM/yyyy'}}\n\n\n\n                  </div>\n\n                </div>\n\n                <div class=\"col-md-3\">\n                  <div class=\"form-group \">\n                    <label class=\"control-label\">Tecnico</label>\n                    <select class=\"form-control custom-select\" [(ngModel)]=\"datafilters.tecnico\" name=\"ctrltecnico\">\n                      <option [value]=\"-1\">Seleccione</option>\n                      <option *ngFor=\"let o of tecnicos\" [value]=\"o.id.toString()\">\n                        {{ o.name }}\n                      </option>\n                    </select>\n                    <small class=\"form-control-feedback\"> Seleccione la Categoria Incidente </small>\n                  </div>\n                </div>\n                <div class=\"col-md-2\">\n\n\n\n                  <div class=\"form-group\">\n                    <label class=\"control-label\"> &nbsp;</label><br>\n                    <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"filterForm.invalid\" (click)=\"get()\"> <i\n                        class=\"fa fa-search\"></i>\n                      Consultar</button>\n                  </div>\n                </div>\n\n\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-12\">\n     \n        <div class=\"card\" *ngIf=\"results!=undefined && results.length>0\">\n        \n\n          <div class=\"card-body\">\n\n\n\n            <div class=\"table-responsive\">\n              <table id=\"example23\" class=\"display nowrap table table-bordered   m-t-30  \" cellspacing=\"0\" width=\"100%\">\n                \n                <tbody>\n                  <ng-container *ngFor=\"let row of results; let i = index\">\n                    \n                   \n\n\n\n                    <ng-container *ngFor=\"let  fila of row.filas ; let j = index\">\n                      <tr>\n                        <td [style.display]=\"j!=0?'none':''\"  [attr.rowspan]=\"row.maxparte\">\n                          {{row.name}}\n                        </td>\n                        <ng-container *ngFor=\"let  parte of fila ; let k = index\">\n                          <td>\n                            <span *ngIf=\"parte.id\">#{{parte.id}} Estacion:{{parte.estacion_servicio?.name}}</span>\n                            <small *ngIf=\"parte.adicional\">Adicional</small>\n                          </td>\n                         \n                        </ng-container>\n                      </tr>\n\n                    </ng-container>\n            \n                  </ng-container>\n\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/reportes/planificaion-semanal/planificaion-semanal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlanificaionSemanalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng4_loading_spinner__ = __webpack_require__("./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reportes_service__ = __webpack_require__("./src/app/reportes/reportes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_datatables_net__ = __webpack_require__("./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_datatables_net___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_datatables_net__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_datatables_net_bs4__ = __webpack_require__("./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_datatables_net_bs4___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_datatables_net_bs4__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_datatables_net_buttons__ = __webpack_require__("./node_modules/datatables.net-buttons/js/dataTables.buttons.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_datatables_net_buttons___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_datatables_net_buttons__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_datatables_net_buttons_bs4__ = __webpack_require__("./node_modules/datatables.net-buttons-bs4/js/buttons.bootstrap4.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_datatables_net_buttons_bs4___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_datatables_net_buttons_bs4__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__mocks_estadoincidente__ = __webpack_require__("./src/app/mocks/estadoincidente.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__zonaTecnica_zona_tecnica_service__ = __webpack_require__("./src/app/zonaTecnica/zona-tecnica.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__clientes_cliente_service__ = __webpack_require__("./src/app/clientes/cliente.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__estacionservicio_estacionservicio_service__ = __webpack_require__("./src/app/estacionservicio/estacionservicio.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ngx_bootstrap_datepicker__ = __webpack_require__("./node_modules/ngx-bootstrap/datepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_file_saver__ = __webpack_require__("./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_file_saver__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var PlanificaionSemanalComponent = /** @class */ (function () {
    function PlanificaionSemanalComponent(spinnerService, reportesService, router, route, notificationService, zonaTecnicaService, clienteService, localDataService, estacionservicioService, localeService) {
        var _this = this;
        this.spinnerService = spinnerService;
        this.reportesService = reportesService;
        this.router = router;
        this.route = route;
        this.notificationService = notificationService;
        this.zonaTecnicaService = zonaTecnicaService;
        this.clienteService = clienteService;
        this.localDataService = localDataService;
        this.estacionservicioService = estacionservicioService;
        this.localeService = localeService;
        this.datafilters = {
            estado: '-1', zonatecnica: '-1', filters: '1',
            categoria: '-1', codigo_cliente: '', estacionservicio: '-1',
            fechainicio: '', fechafin: '', tecnico: '-1'
        };
        this.estadoincidencias = __WEBPACK_IMPORTED_MODULE_9__mocks_estadoincidente__["a" /* ESTADOINCIDENCIAS */];
        this.table = null;
        this.localeService.use('es');
        this.dataSource = __WEBPACK_IMPORTED_MODULE_11_rxjs__["Observable"].create(function (observer) {
            // Runs on every search
            _this.datafilters.codigo_cliente = '';
            _this.clienteService.gettoken(_this.razon_social).subscribe(function (value) {
                observer.next(value.data);
            });
        });
    }
    PlanificaionSemanalComponent.prototype.ngOnInit = function () {
        this.getZonasTecnicas();
        this.get();
    };
    PlanificaionSemanalComponent.prototype.excel = function () {
        var _this = this;
        this.datafilters.fechainicio = this.fi;
        var fi = this.datafilters.fechainicio;
        var ff = __WEBPACK_IMPORTED_MODULE_15_moment__(this.datafilters.fechainicio).endOf('week').toDate();
        this.datafilters.fechafin = __WEBPACK_IMPORTED_MODULE_15_moment__(ff).format("DD-MM-YYYY HH:mm:ss");
        if (this.datafilters.fechainicio != '' && this.datafilters.fechainicio != null) {
            this.datafilters.fechainicio = __WEBPACK_IMPORTED_MODULE_15_moment__(this.datafilters.fechainicio).format("DD-MM-YYYY HH:mm:ss");
        }
        if (this.datafilters.fechafin != '' && this.datafilters.fechafin != null) {
            this.datafilters.fechafin = __WEBPACK_IMPORTED_MODULE_15_moment__(ff).format("DD-MM-YYYY HH:mm:ss");
        }
        this.spinnerService.show();
        var params = $.param(this.datafilters);
        this.reportesService.download(params)
            .subscribe(function (response) {
            __WEBPACK_IMPORTED_MODULE_16_file_saver__["saveAs"](response, 'horassemanaExport.xlsx');
            _this.notificationService.onSuccess("Archivo generado con exito..");
            _this.spinnerService.hide();
            _this.datafilters.filters = '';
        }, function (err) {
            _this.spinnerService.hide();
            _this.notificationService.onError("Se ha producido un error.");
        });
    };
    PlanificaionSemanalComponent.prototype.hclosedatefi = function () {
        this.datafilters.fechafin = __WEBPACK_IMPORTED_MODULE_15_moment__(this.fi).endOf('week').toDate().toString();
    };
    PlanificaionSemanalComponent.prototype.get = function () {
        var _this = this;
        this.datafilters.fechainicio = this.fi;
        var fi = this.fi;
        var ff = __WEBPACK_IMPORTED_MODULE_15_moment__(this.datafilters.fechainicio).endOf('week').toDate();
        if (this.datafilters.fechainicio != '' && this.datafilters.fechainicio != null) {
            this.datafilters.fechainicio = __WEBPACK_IMPORTED_MODULE_15_moment__(this.datafilters.fechainicio).format("DD-MM-YYYY HH:mm:ss");
        }
        if (this.datafilters.fechafin != '' && this.datafilters.fechafin != null) {
            this.datafilters.fechafin = __WEBPACK_IMPORTED_MODULE_15_moment__(ff).format("DD-MM-YYYY HH:mm:ss");
        }
        this.spinnerService.show();
        this.reportesService.consultar('programacionsemanal', this.datafilters)
            .subscribe(function (response) {
            //this.datafilters.fechainicio = moment(fi).format("DD-MM-YYYY HH:mm:ss");
            if (_this.datafilters.filters != '') {
                _this.categorias = response.data.categorias;
                _this.tecnicos = response.data.tecnicos;
            }
            else {
                _this.results = response.data.items;
                _this.diffdays = response.data.diffdays;
                _this.days = response.data.days;
                _this.reInitDatatable();
            }
            _this.spinnerService.hide();
            _this.datafilters.filters = '';
        }, function (err) {
            _this.spinnerService.hide();
            _this.notificationService.onError("Se ha producido un error.");
        });
    };
    PlanificaionSemanalComponent.prototype.getZonasTecnicas = function () {
        var _this = this;
        this.zonaTecnicaService.get(1).subscribe(function (value) {
            _this.zonastecnicas = value.data;
            _this.spinnerService.hide();
        });
    };
    PlanificaionSemanalComponent.prototype.changeTypeaheadLoading = function (e) {
        this.typeaheadLoading = e;
    };
    PlanificaionSemanalComponent.prototype.typeaheadOnSelect = function (e) {
        this.datafilters.codigo_cliente = e.item.codigo_cliente;
        this.cargarEstacionServicio();
    };
    PlanificaionSemanalComponent.prototype.cargarEstacionServicio = function () {
        var _this = this;
        var empresa = 0;
        this.spinnerService.show();
        empresa = this.localDataService.getLocalData('empresaSeleccionada').id;
        this.estacionservicioService.getbycliente(empresa, this.datafilters.codigo_cliente).subscribe(function (value) {
            _this.estacionservicio = value.data;
            _this.spinnerService.hide();
        });
    };
    PlanificaionSemanalComponent.prototype.getclassestadoincidencia = function (estado) {
        var result;
        result = this.estadoincidencias.filter(function (estadoinc) { return estadoinc.value === estado; });
        return result.length > 0 ? result[0].label : '';
    };
    PlanificaionSemanalComponent.prototype.reInitDatatable = function () {
        var _this = this;
        if (this.table) {
            this.table.destroy();
            this.table = null;
            $('#example23 thead').remove();
        }
        setTimeout(function () { return _this.loadtable(); }, 0);
    };
    PlanificaionSemanalComponent.prototype.loadtable = function () {
        var exampleId = $('#example23');
        var columns = [
            { "title": "Técnico" },
        ];
        this.days.forEach(function (dia) {
            columns.push({ "title": __WEBPACK_IMPORTED_MODULE_15_moment__(dia.sfecha).format('DD/MM/YYYY') });
        });
        this.table = exampleId.DataTable({
            dom: 'Bfrtip',
            columns: columns,
            buttons: [
                'copy', 'csv', 'excel'
            ],
            "ordering": false,
            paging: true,
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
            },
            createdRow: function (row, data, dataIndex) {
            }
        });
        $('.buttons-copy, .buttons-csv, .buttons-print, .buttons-pdf, .buttons-excel').addClass('btn btn-primary mr-1');
    };
    PlanificaionSemanalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-planificaion-semanal',
            template: __webpack_require__("./src/app/reportes/planificaion-semanal/planificaion-semanal.component.html"),
            styles: [__webpack_require__("./src/app/reportes/planificaion-semanal/planificaion-semanal.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng4_loading_spinner__["Ng4LoadingSpinnerService"],
            __WEBPACK_IMPORTED_MODULE_2__reportes_service__["a" /* ReportesService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__shared__["k" /* NotificationService */],
            __WEBPACK_IMPORTED_MODULE_10__zonaTecnica_zona_tecnica_service__["a" /* ZonaTecnicaService */],
            __WEBPACK_IMPORTED_MODULE_12__clientes_cliente_service__["a" /* ClienteService */],
            __WEBPACK_IMPORTED_MODULE_4__shared__["i" /* LocalDataService */],
            __WEBPACK_IMPORTED_MODULE_13__estacionservicio_estacionservicio_service__["a" /* EstacionservicioService */],
            __WEBPACK_IMPORTED_MODULE_14_ngx_bootstrap_datepicker__["b" /* BsLocaleService */]])
    ], PlanificaionSemanalComponent);
    return PlanificaionSemanalComponent;
}());



/***/ }),

/***/ "./src/app/reportes/reportes-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportesRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reportes_componentesporcliente_componentesporcliente_component__ = __webpack_require__("./src/app/reportes/componentesporcliente/componentesporcliente.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_can_deactivate_guard_can_deactivate_guard_service__ = __webpack_require__("./src/app/shared/can-deactivate-guard/can-deactivate-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__incidentes_incidentes_component__ = __webpack_require__("./src/app/reportes/incidentes/incidentes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__comentarios_comentarios_component__ = __webpack_require__("./src/app/reportes/comentarios/comentarios.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__horas_semanales_horas_semanales_component__ = __webpack_require__("./src/app/reportes/horas-semanales/horas-semanales.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__planificaion_semanal_planificaion_semanal_component__ = __webpack_require__("./src/app/reportes/planificaion-semanal/planificaion-semanal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__kpis_kpis_component__ = __webpack_require__("./src/app/reportes/kpis/kpis.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__partes_partes_component__ = __webpack_require__("./src/app/reportes/partes/partes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__auditoria_auditoria_component__ = __webpack_require__("./src/app/reportes/auditoria/auditoria.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__indicadores_indicadores_component__ = __webpack_require__("./src/app/reportes/indicadores/indicadores.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__garantias_garantias_component__ = __webpack_require__("./src/app/reportes/garantias/garantias.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__conformidades_conformidades_component__ = __webpack_require__("./src/app/reportes/conformidades/conformidades.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var routes = [{ path: 'componenteporcliente', component: __WEBPACK_IMPORTED_MODULE_2__reportes_componentesporcliente_componentesporcliente_component__["a" /* ComponentesporclienteComponent */], canDeactivate: [__WEBPACK_IMPORTED_MODULE_3__shared_can_deactivate_guard_can_deactivate_guard_service__["a" /* Candeactivateguard */]] },
    { path: 'incidentes', component: __WEBPACK_IMPORTED_MODULE_4__incidentes_incidentes_component__["a" /* IncidentesComponent */], canDeactivate: [__WEBPACK_IMPORTED_MODULE_3__shared_can_deactivate_guard_can_deactivate_guard_service__["a" /* Candeactivateguard */]] },
    { path: 'comentarios', component: __WEBPACK_IMPORTED_MODULE_5__comentarios_comentarios_component__["a" /* ComentariosComponent */], canDeactivate: [__WEBPACK_IMPORTED_MODULE_3__shared_can_deactivate_guard_can_deactivate_guard_service__["a" /* Candeactivateguard */]] },
    { path: 'horassemanales', component: __WEBPACK_IMPORTED_MODULE_6__horas_semanales_horas_semanales_component__["a" /* HorasSemanalesComponent */], canDeactivate: [__WEBPACK_IMPORTED_MODULE_3__shared_can_deactivate_guard_can_deactivate_guard_service__["a" /* Candeactivateguard */]] },
    { path: 'planificacionsemanal', component: __WEBPACK_IMPORTED_MODULE_7__planificaion_semanal_planificaion_semanal_component__["a" /* PlanificaionSemanalComponent */], canDeactivate: [__WEBPACK_IMPORTED_MODULE_3__shared_can_deactivate_guard_can_deactivate_guard_service__["a" /* Candeactivateguard */]] },
    { path: 'kpis', component: __WEBPACK_IMPORTED_MODULE_8__kpis_kpis_component__["a" /* KpisComponent */], canDeactivate: [__WEBPACK_IMPORTED_MODULE_3__shared_can_deactivate_guard_can_deactivate_guard_service__["a" /* Candeactivateguard */]] },
    { path: 'partes', component: __WEBPACK_IMPORTED_MODULE_9__partes_partes_component__["a" /* PartesComponent */], canDeactivate: [__WEBPACK_IMPORTED_MODULE_3__shared_can_deactivate_guard_can_deactivate_guard_service__["a" /* Candeactivateguard */]] },
    { path: 'auditoria/:id', component: __WEBPACK_IMPORTED_MODULE_10__auditoria_auditoria_component__["a" /* AuditoriaComponent */], canDeactivate: [__WEBPACK_IMPORTED_MODULE_3__shared_can_deactivate_guard_can_deactivate_guard_service__["a" /* Candeactivateguard */]] },
    { path: 'indicadores', component: __WEBPACK_IMPORTED_MODULE_11__indicadores_indicadores_component__["a" /* IndicadoresComponent */], canDeactivate: [__WEBPACK_IMPORTED_MODULE_3__shared_can_deactivate_guard_can_deactivate_guard_service__["a" /* Candeactivateguard */]] },
    { path: 'garantias', component: __WEBPACK_IMPORTED_MODULE_12__garantias_garantias_component__["a" /* GarantiasComponent */], canDeactivate: [__WEBPACK_IMPORTED_MODULE_3__shared_can_deactivate_guard_can_deactivate_guard_service__["a" /* Candeactivateguard */]] },
    { path: 'conformidades', component: __WEBPACK_IMPORTED_MODULE_13__conformidades_conformidades_component__["a" /* ConformidadesComponent */], canDeactivate: [__WEBPACK_IMPORTED_MODULE_3__shared_can_deactivate_guard_can_deactivate_guard_service__["a" /* Candeactivateguard */]] },];
var ReportesRoutingModule = /** @class */ (function () {
    function ReportesRoutingModule() {
    }
    ReportesRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], ReportesRoutingModule);
    return ReportesRoutingModule;
}());



/***/ }),

/***/ "./src/app/reportes/reportes.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportesModule", function() { return ReportesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_alert__ = __webpack_require__("./node_modules/ngx-bootstrap/alert/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__toverux_ngx_sweetalert2__ = __webpack_require__("./node_modules/@toverux/ngx-sweetalert2/esm5/toverux-ngx-sweetalert2.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng_snotify__ = __webpack_require__("./node_modules/ng-snotify/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_typeahead__ = __webpack_require__("./node_modules/ngx-bootstrap/typeahead/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_datepicker__ = __webpack_require__("./node_modules/ngx-bootstrap/datepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__reportes_routing_module__ = __webpack_require__("./src/app/reportes/reportes-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__reportes_componentesporcliente_componentesporcliente_component__ = __webpack_require__("./src/app/reportes/componentesporcliente/componentesporcliente.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_can_deactivate_guard_can_deactivate_guard_service__ = __webpack_require__("./src/app/shared/can-deactivate-guard/can-deactivate-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__incidentes_incidentes_component__ = __webpack_require__("./src/app/reportes/incidentes/incidentes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ngx_bootstrap_chronos__ = __webpack_require__("./node_modules/ngx-bootstrap/chronos/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ngx_bootstrap_locale__ = __webpack_require__("./node_modules/ngx-bootstrap/locale.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__comentarios_comentarios_component__ = __webpack_require__("./src/app/reportes/comentarios/comentarios.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__horas_semanales_horas_semanales_component__ = __webpack_require__("./src/app/reportes/horas-semanales/horas-semanales.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__planificaion_semanal_planificaion_semanal_component__ = __webpack_require__("./src/app/reportes/planificaion-semanal/planificaion-semanal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__kpis_kpis_component__ = __webpack_require__("./src/app/reportes/kpis/kpis.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ng_select_ng_select__ = __webpack_require__("./node_modules/@ng-select/ng-select/esm5/ng-select.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__partes_partes_component__ = __webpack_require__("./src/app/reportes/partes/partes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__auditoria_auditoria_component__ = __webpack_require__("./src/app/reportes/auditoria/auditoria.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__indicadores_indicadores_component__ = __webpack_require__("./src/app/reportes/indicadores/indicadores.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__garantias_garantias_component__ = __webpack_require__("./src/app/reportes/garantias/garantias.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__conformidades_conformidades_component__ = __webpack_require__("./src/app/reportes/conformidades/conformidades.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



/*modules */



























Object(__WEBPACK_IMPORTED_MODULE_14_ngx_bootstrap_chronos__["a" /* defineLocale */])('es', __WEBPACK_IMPORTED_MODULE_15_ngx_bootstrap_locale__["a" /* esLocale */]);
var ReportesModule = /** @class */ (function () {
    function ReportesModule() {
    }
    ReportesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_10__reportes_routing_module__["a" /* ReportesRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_alert__["a" /* AlertModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6__toverux_ngx_sweetalert2__["b" /* SweetAlert2Module */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7_ng_snotify__["a" /* SnotifyModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__shared__["b" /* AuthenticationModule */],
                __WEBPACK_IMPORTED_MODULE_3__shared__["d" /* EnvironmentModule */],
                __WEBPACK_IMPORTED_MODULE_3__shared__["f" /* FormValidationModule */],
                __WEBPACK_IMPORTED_MODULE_3__shared__["j" /* NotificationModule */],
                __WEBPACK_IMPORTED_MODULE_3__shared__["h" /* LocalDataModule */],
                __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_typeahead__["a" /* TypeaheadModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_datepicker__["a" /* BsDatepickerModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_20__ng_select_ng_select__["a" /* NgSelectModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__reportes_componentesporcliente_componentesporcliente_component__["a" /* ComponentesporclienteComponent */],
                __WEBPACK_IMPORTED_MODULE_13__incidentes_incidentes_component__["a" /* IncidentesComponent */],
                __WEBPACK_IMPORTED_MODULE_16__comentarios_comentarios_component__["a" /* ComentariosComponent */],
                __WEBPACK_IMPORTED_MODULE_17__horas_semanales_horas_semanales_component__["a" /* HorasSemanalesComponent */],
                __WEBPACK_IMPORTED_MODULE_18__planificaion_semanal_planificaion_semanal_component__["a" /* PlanificaionSemanalComponent */],
                __WEBPACK_IMPORTED_MODULE_19__kpis_kpis_component__["a" /* KpisComponent */],
                __WEBPACK_IMPORTED_MODULE_21__partes_partes_component__["a" /* PartesComponent */],
                __WEBPACK_IMPORTED_MODULE_22__auditoria_auditoria_component__["a" /* AuditoriaComponent */],
                __WEBPACK_IMPORTED_MODULE_23__indicadores_indicadores_component__["a" /* IndicadoresComponent */],
                __WEBPACK_IMPORTED_MODULE_24__garantias_garantias_component__["a" /* GarantiasComponent */],
                __WEBPACK_IMPORTED_MODULE_25__conformidades_conformidades_component__["a" /* ConformidadesComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__shared_can_deactivate_guard_can_deactivate_guard_service__["a" /* Candeactivateguard */]]
        })
    ], ReportesModule);
    return ReportesModule;
}());



/***/ })

});
//# sourceMappingURL=reportes.module.chunk.js.map