webpackJsonp(["incidencias.module"],{

/***/ "./node_modules/inherits/inherits_browser.js":
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),

/***/ "./node_modules/ng-fullcalendar/ng-fullcalendar.es5.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FullCalendarModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarComponent; });
/* unused harmony export ButtonClickModel */
/* unused harmony export UpdateEventModel */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fullcalendar__ = __webpack_require__("./node_modules/ng-fullcalendar/node_modules/fullcalendar/dist/fullcalendar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fullcalendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_fullcalendar__);



__WEBPACK_IMPORTED_MODULE_1_jquery___default.a.fn.fullCalendar = function(options) {
	var args = Array.prototype.slice.call(arguments, 1); // for a possible method call
	var res = this; // what this function will return (this jQuery object by default)

	this.each(function(i, _element) { // loop each DOM element involved
		var element = __WEBPACK_IMPORTED_MODULE_1_jquery___default()(_element);
		var calendar = element.data('fullCalendar'); // get the existing calendar object (if any)
		var singleRes; // the returned value of this single method call

		// a method call
		if (typeof options === 'string') {

			if (options === 'getCalendar') {
				if (!i) { // first element only
					res = calendar;
				}
			}
			else if (options === 'destroy') { // don't warn if no calendar object
				if (calendar) {
					calendar.destroy();
					element.removeData('fullCalendar');
				}
			}
			else if (!calendar) {
				FC.warn("Attempting to call a FullCalendar method on an element with no calendar.");
			}
			else if (__WEBPACK_IMPORTED_MODULE_1_jquery___default.a.isFunction(calendar[options])) {
				singleRes = calendar[options].apply(calendar, args);

				if (!i) {
					res = singleRes; // record the first method call result
				}
				if (options === 'destroy') { // for the destroy method, must remove Calendar object data
					element.removeData('fullCalendar');
				}
			}
			else {
				FC.warn("'" + options + "' is an unknown FullCalendar method.");
			}
		}
		// a new calendar initialization
		else if (!calendar) { // don't initialize twice
			calendar = new __WEBPACK_IMPORTED_MODULE_2_fullcalendar___default.a.Calendar(element, options);
			element.data('fullCalendar', calendar);
			calendar.render();
		}
	});

	return res;
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
(function () {
    /**
     * @param {?} event
     * @param {?} params
     * @return {?}
     */
    function CustomEvent(event, params) {
        params = params || { bubbles: false, cancelable: false, detail: undefined };
        var /** @type {?} */ evt = /** @type {?} */ (document.createEvent('CustomEvent'));
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
    }
    
    CustomEvent.prototype = Event.prototype;
    window.CustomEvent = /** @type {?} */ (CustomEvent);
})();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CalendarComponent = /** @class */ (function () {
    function CalendarComponent(element, zone) {
        this.element = element;
        this.zone = zone;
        this._reRender = true;
        // Notify when things change
        this.eventsModelChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        // Various events
        this.eventDrop = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.eventResize = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.eventResizeStart = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.eventResizeStop = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.eventClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.clickButton = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.windowResize = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.viewRender = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.eventAfterRender = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.eventAfterAllRender = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.viewDestroy = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.eventRender = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.eventDestroy = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.eventMouseOver = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.eventMouseOut = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.initialized = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.select = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.unselect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.dayClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.navLinkDayClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.navLinkWeekClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.eventDragStart = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.eventDragStop = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.drop = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.eventReceive = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.dayRender = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.resourceRender = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    Object.defineProperty(CalendarComponent.prototype, "eventsModel", {
        get: /**
         * @return {?}
         */
        function () {
            return this._eventsModel;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            this._eventsModel = value;
            if (this._reRender) {
                setTimeout(function () {
                    _this.renderEvents(value);
                }, 50);
            }
            else {
                this._reRender = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CalendarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    CalendarComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout(function () {
            _this.updaterOptions();
            _this.zone.runOutsideAngular(function () {
                __WEBPACK_IMPORTED_MODULE_1_jquery___default()(_this.element.nativeElement).fullCalendar(_this.options);
                _this._eventsModel = _this.options.events;
                _this.eventsModelChange.next(_this.options.events);
                _this.initialized.emit(true);
                // Click listeners
                var /** @type {?} */ elem = document.getElementsByTagName('ng-fullcalendar');
                __WEBPACK_IMPORTED_MODULE_1_jquery___default()('[class ^="fc"][class *="button"]').click(function (el) {
                    var /** @type {?} */ classnames = el.currentTarget.className.split(' ');
                    classnames.forEach(function (name) {
                        if (name.indexOf('button') == name.length - 6) {
                            name = name.replace(/fc|button|-/g, '');
                            if (name != '') {
                                // this.renderEvents(this._eventsModel);
                                eventDispatch(name);
                            }
                        }
                    });
                });
                /**
                 * @param {?} buttonType
                 * @return {?}
                 */
                function eventDispatch(buttonType) {
                    var /** @type {?} */ data = __WEBPACK_IMPORTED_MODULE_1_jquery___default()('ng-fullcalendar').fullCalendar('getDate');
                    var /** @type {?} */ currentDetail = {
                        buttonType: buttonType,
                        data: data
                    };
                    var /** @type {?} */ widgetEvent = new CustomEvent('clickButton', {
                        bubbles: true,
                        detail: currentDetail
                    });
                    for (var /** @type {?} */ i = 0; i < elem.length; i++) {
                        elem[i].dispatchEvent(widgetEvent);
                    }
                }
            });
        });
    };
    /**
     * @return {?}
     */
    CalendarComponent.prototype.ngAfterContentChecked = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    CalendarComponent.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    CalendarComponent.prototype.updateEventsBeforeResize = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ events = this.fullCalendar('clientEvents');
        this._reRender = false;
        this.eventsModel = events;
        this.eventsModelChange.next(events);
    };
    /**
     * @return {?}
     */
    CalendarComponent.prototype.updaterOptions = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ elem = document.getElementsByTagName('ng-fullcalendar');
        this.options.eventDrop = function (event, duration, revertFunc) {
            var /** @type {?} */ detail = { event: event, duration: duration, revertFunc: revertFunc };
            var /** @type {?} */ widgetEvent = new CustomEvent('eventDrop', {
                bubbles: true,
                detail: detail
            });
            _this.updateEventsBeforeResize();
            for (var /** @type {?} */ i = 0; i < elem.length; i++) {
                elem[i].dispatchEvent(widgetEvent);
            }
        };
        this.options.eventResize = function (event, duration, revertFunc) {
            var /** @type {?} */ detail = { event: event, duration: duration, revertFunc: revertFunc };
            var /** @type {?} */ widgetEvent = new CustomEvent('eventResize', {
                bubbles: true,
                detail: detail
            });
            _this.updateEventsBeforeResize();
            for (var /** @type {?} */ i = 0; i < elem.length; i++) {
                elem[i].dispatchEvent(widgetEvent);
            }
        };
        this.options.eventResizeStart = function (event, jsEvent, ui, view) {
            var /** @type {?} */ detail = {
                event: event, jsEvent: jsEvent, ui: ui, view: view
            };
            var /** @type {?} */ widgetEvent = new CustomEvent('eventResizeStart', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.eventResizeStop = function (event, jsEvent, ui, view) {
            var /** @type {?} */ detail = {
                event: event, jsEvent: jsEvent, ui: ui, view: view
            };
            var /** @type {?} */ widgetEvent = new CustomEvent('eventResizeStop', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.eventRender = function (event, element, view) {
            var /** @type {?} */ detail = { event: event, element: element, view: view };
            var /** @type {?} */ widgetEvent = new CustomEvent('eventRender', {
                bubbles: true,
                detail: detail
            });
            for (var /** @type {?} */ i = 0; i < elem.length; i++) {
                elem[i].dispatchEvent(widgetEvent);
            }
        };
        this.options.eventDestroy = function (event, element, view) {
            var /** @type {?} */ detail = { event: event, element: element, view: view };
            var /** @type {?} */ widgetEvent = new CustomEvent('eventDestroy', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.eventAfterRender = function (event, element, view) {
            var /** @type {?} */ detail = { event: event, element: element, view: view };
            var /** @type {?} */ widgetEvent = new CustomEvent('eventAfterRender', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.eventClick = function (event, jsEvent, view) {
            var /** @type {?} */ detail = { event: event, duration: null, jsEvent: jsEvent, view: view };
            var /** @type {?} */ widgetEvent = new CustomEvent('eventClick', {
                bubbles: true,
                detail: detail
            });
            for (var /** @type {?} */ i = 0; i < elem.length; i++) {
                elem[i].dispatchEvent(widgetEvent);
            }
        };
        this.options.windowResize = function (view) {
            var /** @type {?} */ detail = { view: view };
            var /** @type {?} */ widgetEvent = new CustomEvent('windowResize', {
                bubbles: true,
                detail: detail
            });
            if (elem && elem[0]) {
                for (var /** @type {?} */ i = 0; i < elem.length; i++) {
                    elem[i].dispatchEvent(widgetEvent);
                }
            }
        };
        this.options.viewRender = function (view, element) {
            var /** @type {?} */ detail = { view: view, element: element };
            var /** @type {?} */ widgetEvent = new CustomEvent('viewRender', {
                bubbles: true,
                detail: detail
            });
            for (var /** @type {?} */ i = 0; i < elem.length; i++) {
                elem[i].dispatchEvent(widgetEvent);
            }
        };
        this.options.viewDestroy = function (view, element) {
            var /** @type {?} */ detail = { view: view, element: element };
            var /** @type {?} */ widgetEvent = new CustomEvent('viewDestroy', {
                bubbles: true,
                detail: detail
            });
            for (var /** @type {?} */ i = 0; i < elem.length; i++) {
                elem[i].dispatchEvent(widgetEvent);
            }
        };
        this.options.select = function (start, end, jsEvent, view, resource) {
            var /** @type {?} */ detail = { start: start, end: end, jsEvent: jsEvent, view: view, resource: resource };
            var /** @type {?} */ widgetEvent = new CustomEvent('select', {
                bubbles: true,
                detail: detail
            });
            for (var /** @type {?} */ i = 0; i < elem.length; i++) {
                elem[i].dispatchEvent(widgetEvent);
            }
        };
        this.options.unselect = function (view, jsEvent) {
            var /** @type {?} */ detail = { view: view, jsEvent: jsEvent };
            var /** @type {?} */ widgetEvent = new CustomEvent('unselect', {
                bubbles: true,
                detail: detail
            });
            for (var /** @type {?} */ i = 0; i < elem.length; i++) {
                elem[i].dispatchEvent(widgetEvent);
            }
        };
        this.options.dayClick = function (date, jsEvent, view) {
            var /** @type {?} */ detail = { date: date, jsEvent: jsEvent, view: view };
            var /** @type {?} */ widgetEvent = new CustomEvent('dayClick', {
                bubbles: true,
                detail: detail
            });
            for (var /** @type {?} */ i = 0; i < elem.length; i++) {
                elem[i].dispatchEvent(widgetEvent);
            }
        };
        this.options.navLinkDayClick = function (date, jsEvent) {
            var /** @type {?} */ detail = { date: date, jsEvent: jsEvent };
            var /** @type {?} */ widgetEvent = new CustomEvent('navLinkDayClick', {
                bubbles: true,
                detail: detail
            });
            for (var /** @type {?} */ i = 0; i < elem.length; i++) {
                elem[i].dispatchEvent(widgetEvent);
            }
        };
        this.options.navLinkWeekClick = function (weekStart, jsEvent) {
            var /** @type {?} */ detail = { weekStart: weekStart, jsEvent: jsEvent };
            var /** @type {?} */ widgetEvent = new CustomEvent('navLinkWeekClick', {
                bubbles: true,
                detail: detail
            });
            for (var /** @type {?} */ i = 0; i < elem.length; i++) {
                elem[i].dispatchEvent(widgetEvent);
            }
        };
        this.options.eventDragStart = function (event, jsEvent, ui, view) {
            var /** @type {?} */ detail = { event: event, jsEvent: jsEvent, ui: ui, view: view };
            var /** @type {?} */ widgetEvent = new CustomEvent('eventDragStart', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.eventDragStop = function (event, jsEvent, ui, view) {
            var /** @type {?} */ detail = { event: event, jsEvent: jsEvent, ui: ui, view: view };
            var /** @type {?} */ widgetEvent = new CustomEvent('eventDragStop', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.eventMouseover = function (event, jsEvent, view) {
            var /** @type {?} */ detail = { event: event, jsEvent: jsEvent, view: view };
            var /** @type {?} */ widgetEvent = new CustomEvent('eventMouseOver', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.eventMouseout = function (event, jsEvent, view) {
            var /** @type {?} */ detail = { event: event, jsEvent: jsEvent, view: view };
            var /** @type {?} */ widgetEvent = new CustomEvent('eventMouseOut', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.drop = function (date, jsEvent, ui, resourceId) {
            var /** @type {?} */ detail = { date: date, jsEvent: jsEvent, ui: ui, resourceId: resourceId };
            var /** @type {?} */ widgetEvent = new CustomEvent('drop', {
                bubbles: true,
                detail: detail
            });
            // probably need to add an event - not handled!
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.eventReceive = function (event) {
            var /** @type {?} */ detail = { event: event };
            var /** @type {?} */ widgetEvent = new CustomEvent('eventReceive', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.dayRender = function (date, cell) {
            var /** @type {?} */ detail = { date: date, cell: cell };
            var /** @type {?} */ widgetEvent = new CustomEvent('dayRender', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.resourceRender = function (resourceObj, labelTds, bodyTds) {
            var /** @type {?} */ detail = { resourceObj: resourceObj, labelTds: labelTds, bodyTds: bodyTds };
            var /** @type {?} */ widgetEvent = new CustomEvent('resourceRender', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);
        };
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    CalendarComponent.prototype.fullCalendar = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!args) {
            return;
        }
        switch (args.length) {
            case 0:
                return;
            case 1:
                return __WEBPACK_IMPORTED_MODULE_1_jquery___default()(this.element.nativeElement).fullCalendar(args[0]);
            case 2:
                return __WEBPACK_IMPORTED_MODULE_1_jquery___default()(this.element.nativeElement).fullCalendar(args[0], args[1]);
            case 3:
                return __WEBPACK_IMPORTED_MODULE_1_jquery___default()(this.element.nativeElement).fullCalendar(args[0], args[1], args[2]);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CalendarComponent.prototype.updateEvent = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return __WEBPACK_IMPORTED_MODULE_1_jquery___default()(this.element.nativeElement).fullCalendar('updateEvent', event);
    };
    /**
     * @param {?} idOrFilter
     * @return {?}
     */
    CalendarComponent.prototype.clientEvents = /**
     * @param {?} idOrFilter
     * @return {?}
     */
    function (idOrFilter) {
        return __WEBPACK_IMPORTED_MODULE_1_jquery___default()(this.element.nativeElement).fullCalendar('clientEvents', idOrFilter);
    };
    /**
     * @param {?} events
     * @return {?}
     */
    CalendarComponent.prototype.renderEvents = /**
     * @param {?} events
     * @return {?}
     */
    function (events) {
        __WEBPACK_IMPORTED_MODULE_1_jquery___default()(this.element.nativeElement).fullCalendar('removeEvents');
        if (events && events.length > 0) {
            __WEBPACK_IMPORTED_MODULE_1_jquery___default()(this.element.nativeElement).fullCalendar('renderEvents', events, true);
            __WEBPACK_IMPORTED_MODULE_1_jquery___default()(this.element.nativeElement).fullCalendar('rerenderEvents');
        }
    };
    CalendarComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'ng-fullcalendar',
                    template: '',
                },] },
    ];
    /** @nocollapse */
    CalendarComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], },
    ]; };
    CalendarComponent.propDecorators = {
        "eventsModel": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['eventsModel',] },],
        "eventsModelChange": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "options": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "eventDrop": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "eventResize": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "eventResizeStart": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "eventResizeStop": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "eventClick": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "clickButton": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "windowResize": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "viewRender": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "eventAfterRender": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "eventAfterAllRender": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "viewDestroy": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "eventRender": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "eventDestroy": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "eventMouseOver": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "eventMouseOut": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "initialized": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "select": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "unselect": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "dayClick": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "navLinkDayClick": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "navLinkWeekClick": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "eventDragStart": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "eventDragStop": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "drop": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "eventReceive": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "dayRender": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "resourceRender": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    };
    return CalendarComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FullCalendarModule = /** @class */ (function () {
    function FullCalendarModule() {
    }
    FullCalendarModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    declarations: [CalendarComponent],
                    exports: [CalendarComponent],
                },] },
    ];
    return FullCalendarModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ButtonClickModel = /** @class */ (function () {
    function ButtonClickModel() {
    }
    return ButtonClickModel;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var UpdateEventModel = /** @class */ (function () {
    function UpdateEventModel() {
    }
    return UpdateEventModel;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ng-fullcalendar.es5.js.map


/***/ }),

/***/ "./node_modules/ng-fullcalendar/node_modules/fullcalendar/dist/fullcalendar.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * FullCalendar v3.6.1
 * Docs & License: https://fullcalendar.io/
 * (c) 2017 Adam Shaw
 */

(function(factory) {
	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__("./node_modules/jquery/dist/jquery.js"), __webpack_require__("./node_modules/moment/moment.js") ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}
	else if (typeof exports === 'object') { // Node/CommonJS
		module.exports = factory(require('jquery'), require('moment'));
	}
	else {
		factory(jQuery, moment);
	}
})(function($, moment) {

;;

var FC = $.fullCalendar = {
	version: "3.6.1",
	// When introducing internal API incompatibilities (where fullcalendar plugins would break),
	// the minor version of the calendar should be upped (ex: 2.7.2 -> 2.8.0)
	// and the below integer should be incremented.
	internalApiVersion: 11
};
var fcViews = FC.views = {};


$.fn.fullCalendar = function(options) {
	var args = Array.prototype.slice.call(arguments, 1); // for a possible method call
	var res = this; // what this function will return (this jQuery object by default)

	this.each(function(i, _element) { // loop each DOM element involved
		var element = $(_element);
		var calendar = element.data('fullCalendar'); // get the existing calendar object (if any)
		var singleRes; // the returned value of this single method call

		// a method call
		if (typeof options === 'string') {

			if (options === 'getCalendar') {
				if (!i) { // first element only
					res = calendar;
				}
			}
			else if (options === 'destroy') { // don't warn if no calendar object
				if (calendar) {
					calendar.destroy();
					element.removeData('fullCalendar');
				}
			}
			else if (!calendar) {
				FC.warn("Attempting to call a FullCalendar method on an element with no calendar.");
			}
			else if ($.isFunction(calendar[options])) {
				singleRes = calendar[options].apply(calendar, args);

				if (!i) {
					res = singleRes; // record the first method call result
				}
				if (options === 'destroy') { // for the destroy method, must remove Calendar object data
					element.removeData('fullCalendar');
				}
			}
			else {
				FC.warn("'" + options + "' is an unknown FullCalendar method.");
			}
		}
		// a new calendar initialization
		else if (!calendar) { // don't initialize twice
			calendar = new Calendar(element, options);
			element.data('fullCalendar', calendar);
			calendar.render();
		}
	});

	return res;
};


var complexOptions = [ // names of options that are objects whose properties should be combined
	'header',
	'footer',
	'buttonText',
	'buttonIcons',
	'themeButtonIcons'
];


// Merges an array of option objects into a single object
function mergeOptions(optionObjs) {
	return mergeProps(optionObjs, complexOptions);
}

;;

// exports
FC.applyAll = applyAll;
FC.debounce = debounce;
FC.isInt = isInt;
FC.htmlEscape = htmlEscape;
FC.cssToStr = cssToStr;
FC.proxy = proxy;
FC.capitaliseFirstLetter = capitaliseFirstLetter;


/* FullCalendar-specific DOM Utilities
----------------------------------------------------------------------------------------------------------------------*/


// Given the scrollbar widths of some other container, create borders/margins on rowEls in order to match the left
// and right space that was offset by the scrollbars. A 1-pixel border first, then margin beyond that.
function compensateScroll(rowEls, scrollbarWidths) {
	if (scrollbarWidths.left) {
		rowEls.css({
			'border-left-width': 1,
			'margin-left': scrollbarWidths.left - 1
		});
	}
	if (scrollbarWidths.right) {
		rowEls.css({
			'border-right-width': 1,
			'margin-right': scrollbarWidths.right - 1
		});
	}
}


// Undoes compensateScroll and restores all borders/margins
function uncompensateScroll(rowEls) {
	rowEls.css({
		'margin-left': '',
		'margin-right': '',
		'border-left-width': '',
		'border-right-width': ''
	});
}


// Make the mouse cursor express that an event is not allowed in the current area
function disableCursor() {
	$('body').addClass('fc-not-allowed');
}


// Returns the mouse cursor to its original look
function enableCursor() {
	$('body').removeClass('fc-not-allowed');
}


// Given a total available height to fill, have `els` (essentially child rows) expand to accomodate.
// By default, all elements that are shorter than the recommended height are expanded uniformly, not considering
// any other els that are already too tall. if `shouldRedistribute` is on, it considers these tall rows and 
// reduces the available height.
function distributeHeight(els, availableHeight, shouldRedistribute) {

	// *FLOORING NOTE*: we floor in certain places because zoom can give inaccurate floating-point dimensions,
	// and it is better to be shorter than taller, to avoid creating unnecessary scrollbars.

	var minOffset1 = Math.floor(availableHeight / els.length); // for non-last element
	var minOffset2 = Math.floor(availableHeight - minOffset1 * (els.length - 1)); // for last element *FLOORING NOTE*
	var flexEls = []; // elements that are allowed to expand. array of DOM nodes
	var flexOffsets = []; // amount of vertical space it takes up
	var flexHeights = []; // actual css height
	var usedHeight = 0;

	undistributeHeight(els); // give all elements their natural height

	// find elements that are below the recommended height (expandable).
	// important to query for heights in a single first pass (to avoid reflow oscillation).
	els.each(function(i, el) {
		var minOffset = i === els.length - 1 ? minOffset2 : minOffset1;
		var naturalOffset = $(el).outerHeight(true);

		if (naturalOffset < minOffset) {
			flexEls.push(el);
			flexOffsets.push(naturalOffset);
			flexHeights.push($(el).height());
		}
		else {
			// this element stretches past recommended height (non-expandable). mark the space as occupied.
			usedHeight += naturalOffset;
		}
	});

	// readjust the recommended height to only consider the height available to non-maxed-out rows.
	if (shouldRedistribute) {
		availableHeight -= usedHeight;
		minOffset1 = Math.floor(availableHeight / flexEls.length);
		minOffset2 = Math.floor(availableHeight - minOffset1 * (flexEls.length - 1)); // *FLOORING NOTE*
	}

	// assign heights to all expandable elements
	$(flexEls).each(function(i, el) {
		var minOffset = i === flexEls.length - 1 ? minOffset2 : minOffset1;
		var naturalOffset = flexOffsets[i];
		var naturalHeight = flexHeights[i];
		var newHeight = minOffset - (naturalOffset - naturalHeight); // subtract the margin/padding

		if (naturalOffset < minOffset) { // we check this again because redistribution might have changed things
			$(el).height(newHeight);
		}
	});
}


// Undoes distrubuteHeight, restoring all els to their natural height
function undistributeHeight(els) {
	els.height('');
}


// Given `els`, a jQuery set of <td> cells, find the cell with the largest natural width and set the widths of all the
// cells to be that width.
// PREREQUISITE: if you want a cell to take up width, it needs to have a single inner element w/ display:inline
function matchCellWidths(els) {
	var maxInnerWidth = 0;

	els.find('> *').each(function(i, innerEl) {
		var innerWidth = $(innerEl).outerWidth();
		if (innerWidth > maxInnerWidth) {
			maxInnerWidth = innerWidth;
		}
	});

	maxInnerWidth++; // sometimes not accurate of width the text needs to stay on one line. insurance

	els.width(maxInnerWidth);

	return maxInnerWidth;
}


// Given one element that resides inside another,
// Subtracts the height of the inner element from the outer element.
function subtractInnerElHeight(outerEl, innerEl) {
	var both = outerEl.add(innerEl);
	var diff;

	// effin' IE8/9/10/11 sometimes returns 0 for dimensions. this weird hack was the only thing that worked
	both.css({
		position: 'relative', // cause a reflow, which will force fresh dimension recalculation
		left: -1 // ensure reflow in case the el was already relative. negative is less likely to cause new scroll
	});
	diff = outerEl.outerHeight() - innerEl.outerHeight(); // grab the dimensions
	both.css({ position: '', left: '' }); // undo hack

	return diff;
}


/* Element Geom Utilities
----------------------------------------------------------------------------------------------------------------------*/

FC.getOuterRect = getOuterRect;
FC.getClientRect = getClientRect;
FC.getContentRect = getContentRect;
FC.getScrollbarWidths = getScrollbarWidths;


// borrowed from https://github.com/jquery/jquery-ui/blob/1.11.0/ui/core.js#L51
function getScrollParent(el) {
	var position = el.css('position'),
		scrollParent = el.parents().filter(function() {
			var parent = $(this);
			return (/(auto|scroll)/).test(
				parent.css('overflow') + parent.css('overflow-y') + parent.css('overflow-x')
			);
		}).eq(0);

	return position === 'fixed' || !scrollParent.length ? $(el[0].ownerDocument || document) : scrollParent;
}


// Queries the outer bounding area of a jQuery element.
// Returns a rectangle with absolute coordinates: left, right (exclusive), top, bottom (exclusive).
// Origin is optional.
function getOuterRect(el, origin) {
	var offset = el.offset();
	var left = offset.left - (origin ? origin.left : 0);
	var top = offset.top - (origin ? origin.top : 0);

	return {
		left: left,
		right: left + el.outerWidth(),
		top: top,
		bottom: top + el.outerHeight()
	};
}


// Queries the area within the margin/border/scrollbars of a jQuery element. Does not go within the padding.
// Returns a rectangle with absolute coordinates: left, right (exclusive), top, bottom (exclusive).
// Origin is optional.
// WARNING: given element can't have borders
// NOTE: should use clientLeft/clientTop, but very unreliable cross-browser.
function getClientRect(el, origin) {
	var offset = el.offset();
	var scrollbarWidths = getScrollbarWidths(el);
	var left = offset.left + getCssFloat(el, 'border-left-width') + scrollbarWidths.left - (origin ? origin.left : 0);
	var top = offset.top + getCssFloat(el, 'border-top-width') + scrollbarWidths.top - (origin ? origin.top : 0);

	return {
		left: left,
		right: left + el[0].clientWidth, // clientWidth includes padding but NOT scrollbars
		top: top,
		bottom: top + el[0].clientHeight // clientHeight includes padding but NOT scrollbars
	};
}


// Queries the area within the margin/border/padding of a jQuery element. Assumed not to have scrollbars.
// Returns a rectangle with absolute coordinates: left, right (exclusive), top, bottom (exclusive).
// Origin is optional.
function getContentRect(el, origin) {
	var offset = el.offset(); // just outside of border, margin not included
	var left = offset.left + getCssFloat(el, 'border-left-width') + getCssFloat(el, 'padding-left') -
		(origin ? origin.left : 0);
	var top = offset.top + getCssFloat(el, 'border-top-width') + getCssFloat(el, 'padding-top') -
		(origin ? origin.top : 0);

	return {
		left: left,
		right: left + el.width(),
		top: top,
		bottom: top + el.height()
	};
}


// Returns the computed left/right/top/bottom scrollbar widths for the given jQuery element.
// WARNING: given element can't have borders (which will cause offsetWidth/offsetHeight to be larger).
// NOTE: should use clientLeft/clientTop, but very unreliable cross-browser.
function getScrollbarWidths(el) {
	var leftRightWidth = el[0].offsetWidth - el[0].clientWidth;
	var bottomWidth = el[0].offsetHeight - el[0].clientHeight;
	var widths;

	leftRightWidth = sanitizeScrollbarWidth(leftRightWidth);
	bottomWidth = sanitizeScrollbarWidth(bottomWidth);

	widths = { left: 0, right: 0, top: 0, bottom: bottomWidth };

	if (getIsLeftRtlScrollbars() && el.css('direction') == 'rtl') { // is the scrollbar on the left side?
		widths.left = leftRightWidth;
	}
	else {
		widths.right = leftRightWidth;
	}

	return widths;
}


// The scrollbar width computations in getScrollbarWidths are sometimes flawed when it comes to
// retina displays, rounding, and IE11. Massage them into a usable value.
function sanitizeScrollbarWidth(width) {
	width = Math.max(0, width); // no negatives
	width = Math.round(width);
	return width;
}


// Logic for determining if, when the element is right-to-left, the scrollbar appears on the left side

var _isLeftRtlScrollbars = null;

function getIsLeftRtlScrollbars() { // responsible for caching the computation
	if (_isLeftRtlScrollbars === null) {
		_isLeftRtlScrollbars = computeIsLeftRtlScrollbars();
	}
	return _isLeftRtlScrollbars;
}

function computeIsLeftRtlScrollbars() { // creates an offscreen test element, then removes it
	var el = $('<div><div/></div>')
		.css({
			position: 'absolute',
			top: -1000,
			left: 0,
			border: 0,
			padding: 0,
			overflow: 'scroll',
			direction: 'rtl'
		})
		.appendTo('body');
	var innerEl = el.children();
	var res = innerEl.offset().left > el.offset().left; // is the inner div shifted to accommodate a left scrollbar?
	el.remove();
	return res;
}


// Retrieves a jQuery element's computed CSS value as a floating-point number.
// If the queried value is non-numeric (ex: IE can return "medium" for border width), will just return zero.
function getCssFloat(el, prop) {
	return parseFloat(el.css(prop)) || 0;
}


/* Mouse / Touch Utilities
----------------------------------------------------------------------------------------------------------------------*/

FC.preventDefault = preventDefault;


// Returns a boolean whether this was a left mouse click and no ctrl key (which means right click on Mac)
function isPrimaryMouseButton(ev) {
	return ev.which == 1 && !ev.ctrlKey;
}


function getEvX(ev) {
	var touches = ev.originalEvent.touches;

	// on mobile FF, pageX for touch events is present, but incorrect,
	// so, look at touch coordinates first.
	if (touches && touches.length) {
		return touches[0].pageX;
	}

	return ev.pageX;
}


function getEvY(ev) {
	var touches = ev.originalEvent.touches;

	// on mobile FF, pageX for touch events is present, but incorrect,
	// so, look at touch coordinates first.
	if (touches && touches.length) {
		return touches[0].pageY;
	}

	return ev.pageY;
}


function getEvIsTouch(ev) {
	return /^touch/.test(ev.type);
}


function preventSelection(el) {
	el.addClass('fc-unselectable')
		.on('selectstart', preventDefault);
}


function allowSelection(el) {
	el.removeClass('fc-unselectable')
		.off('selectstart', preventDefault);
}


// Stops a mouse/touch event from doing it's native browser action
function preventDefault(ev) {
	ev.preventDefault();
}


/* General Geometry Utils
----------------------------------------------------------------------------------------------------------------------*/

FC.intersectRects = intersectRects;

// Returns a new rectangle that is the intersection of the two rectangles. If they don't intersect, returns false
function intersectRects(rect1, rect2) {
	var res = {
		left: Math.max(rect1.left, rect2.left),
		right: Math.min(rect1.right, rect2.right),
		top: Math.max(rect1.top, rect2.top),
		bottom: Math.min(rect1.bottom, rect2.bottom)
	};

	if (res.left < res.right && res.top < res.bottom) {
		return res;
	}
	return false;
}


// Returns a new point that will have been moved to reside within the given rectangle
function constrainPoint(point, rect) {
	return {
		left: Math.min(Math.max(point.left, rect.left), rect.right),
		top: Math.min(Math.max(point.top, rect.top), rect.bottom)
	};
}


// Returns a point that is the center of the given rectangle
function getRectCenter(rect) {
	return {
		left: (rect.left + rect.right) / 2,
		top: (rect.top + rect.bottom) / 2
	};
}


// Subtracts point2's coordinates from point1's coordinates, returning a delta
function diffPoints(point1, point2) {
	return {
		left: point1.left - point2.left,
		top: point1.top - point2.top
	};
}


/* Object Ordering by Field
----------------------------------------------------------------------------------------------------------------------*/

FC.parseFieldSpecs = parseFieldSpecs;
FC.compareByFieldSpecs = compareByFieldSpecs;
FC.compareByFieldSpec = compareByFieldSpec;
FC.flexibleCompare = flexibleCompare;


function parseFieldSpecs(input) {
	var specs = [];
	var tokens = [];
	var i, token;

	if (typeof input === 'string') {
		tokens = input.split(/\s*,\s*/);
	}
	else if (typeof input === 'function') {
		tokens = [ input ];
	}
	else if ($.isArray(input)) {
		tokens = input;
	}

	for (i = 0; i < tokens.length; i++) {
		token = tokens[i];

		if (typeof token === 'string') {
			specs.push(
				token.charAt(0) == '-' ?
					{ field: token.substring(1), order: -1 } :
					{ field: token, order: 1 }
			);
		}
		else if (typeof token === 'function') {
			specs.push({ func: token });
		}
	}

	return specs;
}


function compareByFieldSpecs(obj1, obj2, fieldSpecs) {
	var i;
	var cmp;

	for (i = 0; i < fieldSpecs.length; i++) {
		cmp = compareByFieldSpec(obj1, obj2, fieldSpecs[i]);
		if (cmp) {
			return cmp;
		}
	}

	return 0;
}


function compareByFieldSpec(obj1, obj2, fieldSpec) {
	if (fieldSpec.func) {
		return fieldSpec.func(obj1, obj2);
	}
	return flexibleCompare(obj1[fieldSpec.field], obj2[fieldSpec.field]) *
		(fieldSpec.order || 1);
}


function flexibleCompare(a, b) {
	if (!a && !b) {
		return 0;
	}
	if (b == null) {
		return -1;
	}
	if (a == null) {
		return 1;
	}
	if ($.type(a) === 'string' || $.type(b) === 'string') {
		return String(a).localeCompare(String(b));
	}
	return a - b;
}


/* Date Utilities
----------------------------------------------------------------------------------------------------------------------*/

FC.computeGreatestUnit = computeGreatestUnit;
FC.divideRangeByDuration = divideRangeByDuration;
FC.divideDurationByDuration = divideDurationByDuration;
FC.multiplyDuration = multiplyDuration;
FC.durationHasTime = durationHasTime;

var dayIDs = [ 'sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat' ];
var unitsDesc = [ 'year', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond' ]; // descending


// Diffs the two moments into a Duration where full-days are recorded first, then the remaining time.
// Moments will have their timezones normalized.
function diffDayTime(a, b) {
	return moment.duration({
		days: a.clone().stripTime().diff(b.clone().stripTime(), 'days'),
		ms: a.time() - b.time() // time-of-day from day start. disregards timezone
	});
}


// Diffs the two moments via their start-of-day (regardless of timezone). Produces whole-day durations.
function diffDay(a, b) {
	return moment.duration({
		days: a.clone().stripTime().diff(b.clone().stripTime(), 'days')
	});
}


// Diffs two moments, producing a duration, made of a whole-unit-increment of the given unit. Uses rounding.
function diffByUnit(a, b, unit) {
	return moment.duration(
		Math.round(a.diff(b, unit, true)), // returnFloat=true
		unit
	);
}


// Computes the unit name of the largest whole-unit period of time.
// For example, 48 hours will be "days" whereas 49 hours will be "hours".
// Accepts start/end, a range object, or an original duration object.
function computeGreatestUnit(start, end) {
	var i, unit;
	var val;

	for (i = 0; i < unitsDesc.length; i++) {
		unit = unitsDesc[i];
		val = computeRangeAs(unit, start, end);

		if (val >= 1 && isInt(val)) {
			break;
		}
	}

	return unit; // will be "milliseconds" if nothing else matches
}


// like computeGreatestUnit, but has special abilities to interpret the source input for clues
function computeDurationGreatestUnit(duration, durationInput) {
	var unit = computeGreatestUnit(duration);

	// prevent days:7 from being interpreted as a week
	if (unit === 'week' && typeof durationInput === 'object' && durationInput.days) {
		unit = 'day';
	}

	return unit;
}


// Computes the number of units (like "hours") in the given range.
// Range can be a {start,end} object, separate start/end args, or a Duration.
// Results are based on Moment's .as() and .diff() methods, so results can depend on internal handling
// of month-diffing logic (which tends to vary from version to version).
function computeRangeAs(unit, start, end) {

	if (end != null) { // given start, end
		return end.diff(start, unit, true);
	}
	else if (moment.isDuration(start)) { // given duration
		return start.as(unit);
	}
	else { // given { start, end } range object
		return start.end.diff(start.start, unit, true);
	}
}


// Intelligently divides a range (specified by a start/end params) by a duration
function divideRangeByDuration(start, end, dur) {
	var months;

	if (durationHasTime(dur)) {
		return (end - start) / dur;
	}
	months = dur.asMonths();
	if (Math.abs(months) >= 1 && isInt(months)) {
		return end.diff(start, 'months', true) / months;
	}
	return end.diff(start, 'days', true) / dur.asDays();
}


// Intelligently divides one duration by another
function divideDurationByDuration(dur1, dur2) {
	var months1, months2;

	if (durationHasTime(dur1) || durationHasTime(dur2)) {
		return dur1 / dur2;
	}
	months1 = dur1.asMonths();
	months2 = dur2.asMonths();
	if (
		Math.abs(months1) >= 1 && isInt(months1) &&
		Math.abs(months2) >= 1 && isInt(months2)
	) {
		return months1 / months2;
	}
	return dur1.asDays() / dur2.asDays();
}


// Intelligently multiplies a duration by a number
function multiplyDuration(dur, n) {
	var months;

	if (durationHasTime(dur)) {
		return moment.duration(dur * n);
	}
	months = dur.asMonths();
	if (Math.abs(months) >= 1 && isInt(months)) {
		return moment.duration({ months: months * n });
	}
	return moment.duration({ days: dur.asDays() * n });
}


// Returns a boolean about whether the given duration has any time parts (hours/minutes/seconds/ms)
function durationHasTime(dur) {
	return Boolean(dur.hours() || dur.minutes() || dur.seconds() || dur.milliseconds());
}


function isNativeDate(input) {
	return  Object.prototype.toString.call(input) === '[object Date]' || input instanceof Date;
}


// Returns a boolean about whether the given input is a time string, like "06:40:00" or "06:00"
function isTimeString(str) {
	return typeof str === 'string' &&
		/^\d+\:\d+(?:\:\d+\.?(?:\d{3})?)?$/.test(str);
}


/* Logging and Debug
----------------------------------------------------------------------------------------------------------------------*/

FC.log = function() {
	var console = window.console;

	if (console && console.log) {
		return console.log.apply(console, arguments);
	}
};

FC.warn = function() {
	var console = window.console;

	if (console && console.warn) {
		return console.warn.apply(console, arguments);
	}
	else {
		return FC.log.apply(FC, arguments);
	}
};


/* General Utilities
----------------------------------------------------------------------------------------------------------------------*/

var hasOwnPropMethod = {}.hasOwnProperty;


// Merges an array of objects into a single object.
// The second argument allows for an array of property names who's object values will be merged together.
function mergeProps(propObjs, complexProps) {
	var dest = {};
	var i, name;
	var complexObjs;
	var j, val;
	var props;

	if (complexProps) {
		for (i = 0; i < complexProps.length; i++) {
			name = complexProps[i];
			complexObjs = [];

			// collect the trailing object values, stopping when a non-object is discovered
			for (j = propObjs.length - 1; j >= 0; j--) {
				val = propObjs[j][name];

				if (typeof val === 'object') {
					complexObjs.unshift(val);
				}
				else if (val !== undefined) {
					dest[name] = val; // if there were no objects, this value will be used
					break;
				}
			}

			// if the trailing values were objects, use the merged value
			if (complexObjs.length) {
				dest[name] = mergeProps(complexObjs);
			}
		}
	}

	// copy values into the destination, going from last to first
	for (i = propObjs.length - 1; i >= 0; i--) {
		props = propObjs[i];

		for (name in props) {
			if (!(name in dest)) { // if already assigned by previous props or complex props, don't reassign
				dest[name] = props[name];
			}
		}
	}

	return dest;
}


function copyOwnProps(src, dest) {
	for (var name in src) {
		if (hasOwnProp(src, name)) {
			dest[name] = src[name];
		}
	}
}


function hasOwnProp(obj, name) {
	return hasOwnPropMethod.call(obj, name);
}


function applyAll(functions, thisObj, args) {
	if ($.isFunction(functions)) {
		functions = [ functions ];
	}
	if (functions) {
		var i;
		var ret;
		for (i=0; i<functions.length; i++) {
			ret = functions[i].apply(thisObj, args) || ret;
		}
		return ret;
	}
}


function removeMatching(array, testFunc) {
	var removeCnt = 0;
	var i = 0;

	while (i < array.length) {
		if (testFunc(array[i])) { // truthy value means *remove*
			array.splice(i, 1);
			removeCnt++;
		}
		else {
			i++;
		}
	}

	return removeCnt;
}


function removeExact(array, exactVal) {
	var removeCnt = 0;
	var i = 0;

	while (i < array.length) {
		if (array[i] === exactVal) {
			array.splice(i, 1);
			removeCnt++;
		}
		else {
			i++;
		}
	}

	return removeCnt;
}
FC.removeExact = removeExact;


function isArraysEqual(a0, a1) {
	var len = a0.length;
	var i;

	if (len == null || len !== a1.length) { // not array? or not same length?
		return false;
	}

	for (i = 0; i < len; i++) {
		if (a0[i] !== a1[i]) {
			return false;
		}
	}

	return true;
}



function firstDefined() {
	for (var i=0; i<arguments.length; i++) {
		if (arguments[i] !== undefined) {
			return arguments[i];
		}
	}
}


function htmlEscape(s) {
	return (s + '').replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/'/g, '&#039;')
		.replace(/"/g, '&quot;')
		.replace(/\n/g, '<br />');
}


function stripHtmlEntities(text) {
	return text.replace(/&.*?;/g, '');
}


// Given a hash of CSS properties, returns a string of CSS.
// Uses property names as-is (no camel-case conversion). Will not make statements for null/undefined values.
function cssToStr(cssProps) {
	var statements = [];

	$.each(cssProps, function(name, val) {
		if (val != null) {
			statements.push(name + ':' + val);
		}
	});

	return statements.join(';');
}


// Given an object hash of HTML attribute names to values,
// generates a string that can be injected between < > in HTML
function attrsToStr(attrs) {
	var parts = [];

	$.each(attrs, function(name, val) {
		if (val != null) {
			parts.push(name + '="' + htmlEscape(val) + '"');
		}
	});

	return parts.join(' ');
}


function capitaliseFirstLetter(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}


function compareNumbers(a, b) { // for .sort()
	return a - b;
}


function isInt(n) {
	return n % 1 === 0;
}


// Returns a method bound to the given object context.
// Just like one of the jQuery.proxy signatures, but without the undesired behavior of treating the same method with
// different contexts as identical when binding/unbinding events.
function proxy(obj, methodName) {
	var method = obj[methodName];

	return function() {
		return method.apply(obj, arguments);
	};
}


// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
// https://github.com/jashkenas/underscore/blob/1.6.0/underscore.js#L714
function debounce(func, wait, immediate) {
	var timeout, args, context, timestamp, result;

	var later = function() {
		var last = +new Date() - timestamp;
		if (last < wait) {
			timeout = setTimeout(later, wait - last);
		}
		else {
			timeout = null;
			if (!immediate) {
				result = func.apply(context, args);
				context = args = null;
			}
		}
	};

	return function() {
		context = this;
		args = arguments;
		timestamp = +new Date();
		var callNow = immediate && !timeout;
		if (!timeout) {
			timeout = setTimeout(later, wait);
		}
		if (callNow) {
			result = func.apply(context, args);
			context = args = null;
		}
		return result;
	};
}

;;

/*
GENERAL NOTE on moments throughout the *entire rest* of the codebase:
All moments are assumed to be ambiguously-zoned unless otherwise noted,
with the NOTABLE EXCEOPTION of start/end dates that live on *Event Objects*.
Ambiguously-TIMED moments are assumed to be ambiguously-zoned by nature.
*/

var ambigDateOfMonthRegex = /^\s*\d{4}-\d\d$/;
var ambigTimeOrZoneRegex =
	/^\s*\d{4}-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?)?$/;
var newMomentProto = moment.fn; // where we will attach our new methods
var oldMomentProto = $.extend({}, newMomentProto); // copy of original moment methods

// tell momentjs to transfer these properties upon clone
var momentProperties = moment.momentProperties;
momentProperties.push('_fullCalendar');
momentProperties.push('_ambigTime');
momentProperties.push('_ambigZone');


// Creating
// -------------------------------------------------------------------------------------------------

// Creates a new moment, similar to the vanilla moment(...) constructor, but with
// extra features (ambiguous time, enhanced formatting). When given an existing moment,
// it will function as a clone (and retain the zone of the moment). Anything else will
// result in a moment in the local zone.
FC.moment = function() {
	return makeMoment(arguments);
};

// Sames as FC.moment, but forces the resulting moment to be in the UTC timezone.
FC.moment.utc = function() {
	var mom = makeMoment(arguments, true);

	// Force it into UTC because makeMoment doesn't guarantee it
	// (if given a pre-existing moment for example)
	if (mom.hasTime()) { // don't give ambiguously-timed moments a UTC zone
		mom.utc();
	}

	return mom;
};

// Same as FC.moment, but when given an ISO8601 string, the timezone offset is preserved.
// ISO8601 strings with no timezone offset will become ambiguously zoned.
FC.moment.parseZone = function() {
	return makeMoment(arguments, true, true);
};

// Builds an enhanced moment from args. When given an existing moment, it clones. When given a
// native Date, or called with no arguments (the current time), the resulting moment will be local.
// Anything else needs to be "parsed" (a string or an array), and will be affected by:
//    parseAsUTC - if there is no zone information, should we parse the input in UTC?
//    parseZone - if there is zone information, should we force the zone of the moment?
function makeMoment(args, parseAsUTC, parseZone) {
	var input = args[0];
	var isSingleString = args.length == 1 && typeof input === 'string';
	var isAmbigTime;
	var isAmbigZone;
	var ambigMatch;
	var mom;

	if (moment.isMoment(input) || isNativeDate(input) || input === undefined) {
		mom = moment.apply(null, args);
	}
	else { // "parsing" is required
		isAmbigTime = false;
		isAmbigZone = false;

		if (isSingleString) {
			if (ambigDateOfMonthRegex.test(input)) {
				// accept strings like '2014-05', but convert to the first of the month
				input += '-01';
				args = [ input ]; // for when we pass it on to moment's constructor
				isAmbigTime = true;
				isAmbigZone = true;
			}
			else if ((ambigMatch = ambigTimeOrZoneRegex.exec(input))) {
				isAmbigTime = !ambigMatch[5]; // no time part?
				isAmbigZone = true;
			}
		}
		else if ($.isArray(input)) {
			// arrays have no timezone information, so assume ambiguous zone
			isAmbigZone = true;
		}
		// otherwise, probably a string with a format

		if (parseAsUTC || isAmbigTime) {
			mom = moment.utc.apply(moment, args);
		}
		else {
			mom = moment.apply(null, args);
		}

		if (isAmbigTime) {
			mom._ambigTime = true;
			mom._ambigZone = true; // ambiguous time always means ambiguous zone
		}
		else if (parseZone) { // let's record the inputted zone somehow
			if (isAmbigZone) {
				mom._ambigZone = true;
			}
			else if (isSingleString) {
				mom.utcOffset(input); // if not a valid zone, will assign UTC
			}
		}
	}

	mom._fullCalendar = true; // flag for extended functionality

	return mom;
}


// Week Number
// -------------------------------------------------------------------------------------------------


// Returns the week number, considering the locale's custom week number calcuation
// `weeks` is an alias for `week`
newMomentProto.week = newMomentProto.weeks = function(input) {
	var weekCalc = this._locale._fullCalendar_weekCalc;

	if (input == null && typeof weekCalc === 'function') { // custom function only works for getter
		return weekCalc(this);
	}
	else if (weekCalc === 'ISO') {
		return oldMomentProto.isoWeek.apply(this, arguments); // ISO getter/setter
	}

	return oldMomentProto.week.apply(this, arguments); // local getter/setter
};


// Time-of-day
// -------------------------------------------------------------------------------------------------

// GETTER
// Returns a Duration with the hours/minutes/seconds/ms values of the moment.
// If the moment has an ambiguous time, a duration of 00:00 will be returned.
//
// SETTER
// You can supply a Duration, a Moment, or a Duration-like argument.
// When setting the time, and the moment has an ambiguous time, it then becomes unambiguous.
newMomentProto.time = function(time) {

	// Fallback to the original method (if there is one) if this moment wasn't created via FullCalendar.
	// `time` is a generic enough method name where this precaution is necessary to avoid collisions w/ other plugins.
	if (!this._fullCalendar) {
		return oldMomentProto.time.apply(this, arguments);
	}

	if (time == null) { // getter
		return moment.duration({
			hours: this.hours(),
			minutes: this.minutes(),
			seconds: this.seconds(),
			milliseconds: this.milliseconds()
		});
	}
	else { // setter

		this._ambigTime = false; // mark that the moment now has a time

		if (!moment.isDuration(time) && !moment.isMoment(time)) {
			time = moment.duration(time);
		}

		// The day value should cause overflow (so 24 hours becomes 00:00:00 of next day).
		// Only for Duration times, not Moment times.
		var dayHours = 0;
		if (moment.isDuration(time)) {
			dayHours = Math.floor(time.asDays()) * 24;
		}

		// We need to set the individual fields.
		// Can't use startOf('day') then add duration. In case of DST at start of day.
		return this.hours(dayHours + time.hours())
			.minutes(time.minutes())
			.seconds(time.seconds())
			.milliseconds(time.milliseconds());
	}
};

// Converts the moment to UTC, stripping out its time-of-day and timezone offset,
// but preserving its YMD. A moment with a stripped time will display no time
// nor timezone offset when .format() is called.
newMomentProto.stripTime = function() {

	if (!this._ambigTime) {

		this.utc(true); // keepLocalTime=true (for keeping *date* value)

		// set time to zero
		this.set({
			hours: 0,
			minutes: 0,
			seconds: 0,
			ms: 0
		});

		// Mark the time as ambiguous. This needs to happen after the .utc() call, which might call .utcOffset(),
		// which clears all ambig flags.
		this._ambigTime = true;
		this._ambigZone = true; // if ambiguous time, also ambiguous timezone offset
	}

	return this; // for chaining
};

// Returns if the moment has a non-ambiguous time (boolean)
newMomentProto.hasTime = function() {
	return !this._ambigTime;
};


// Timezone
// -------------------------------------------------------------------------------------------------

// Converts the moment to UTC, stripping out its timezone offset, but preserving its
// YMD and time-of-day. A moment with a stripped timezone offset will display no
// timezone offset when .format() is called.
newMomentProto.stripZone = function() {
	var wasAmbigTime;

	if (!this._ambigZone) {

		wasAmbigTime = this._ambigTime;

		this.utc(true); // keepLocalTime=true (for keeping date and time values)

		// the above call to .utc()/.utcOffset() unfortunately might clear the ambig flags, so restore
		this._ambigTime = wasAmbigTime || false;

		// Mark the zone as ambiguous. This needs to happen after the .utc() call, which might call .utcOffset(),
		// which clears the ambig flags.
		this._ambigZone = true;
	}

	return this; // for chaining
};

// Returns of the moment has a non-ambiguous timezone offset (boolean)
newMomentProto.hasZone = function() {
	return !this._ambigZone;
};


// implicitly marks a zone
newMomentProto.local = function(keepLocalTime) {

	// for when converting from ambiguously-zoned to local,
	// keep the time values when converting from UTC -> local
	oldMomentProto.local.call(this, this._ambigZone || keepLocalTime);

	// ensure non-ambiguous
	// this probably already happened via local() -> utcOffset(), but don't rely on Moment's internals
	this._ambigTime = false;
	this._ambigZone = false;

	return this; // for chaining
};


// implicitly marks a zone
newMomentProto.utc = function(keepLocalTime) {

	oldMomentProto.utc.call(this, keepLocalTime);

	// ensure non-ambiguous
	// this probably already happened via utc() -> utcOffset(), but don't rely on Moment's internals
	this._ambigTime = false;
	this._ambigZone = false;

	return this;
};


// implicitly marks a zone (will probably get called upon .utc() and .local())
newMomentProto.utcOffset = function(tzo) {

	if (tzo != null) { // setter
		// these assignments needs to happen before the original zone method is called.
		// I forget why, something to do with a browser crash.
		this._ambigTime = false;
		this._ambigZone = false;
	}

	return oldMomentProto.utcOffset.apply(this, arguments);
};


// Formatting
// -------------------------------------------------------------------------------------------------

newMomentProto.format = function() {

	if (this._fullCalendar && arguments[0]) { // an enhanced moment? and a format string provided?
		return formatDate(this, arguments[0]); // our extended formatting
	}
	if (this._ambigTime) {
		return oldMomentFormat(englishMoment(this), 'YYYY-MM-DD');
	}
	if (this._ambigZone) {
		return oldMomentFormat(englishMoment(this), 'YYYY-MM-DD[T]HH:mm:ss');
	}
	if (this._fullCalendar) { // enhanced non-ambig moment?
		// moment.format() doesn't ensure english, but we want to.
		return oldMomentFormat(englishMoment(this));
	}

	return oldMomentProto.format.apply(this, arguments);
};

newMomentProto.toISOString = function() {

	if (this._ambigTime) {
		return oldMomentFormat(englishMoment(this), 'YYYY-MM-DD');
	}
	if (this._ambigZone) {
		return oldMomentFormat(englishMoment(this), 'YYYY-MM-DD[T]HH:mm:ss');
	}
	if (this._fullCalendar) { // enhanced non-ambig moment?
		// depending on browser, moment might not output english. ensure english.
		// https://github.com/moment/moment/blob/2.18.1/src/lib/moment/format.js#L22
		return oldMomentProto.toISOString.apply(englishMoment(this), arguments);
	}

	return oldMomentProto.toISOString.apply(this, arguments);
};

function englishMoment(mom) {
	if (mom.locale() !== 'en') {
		return mom.clone().locale('en');
	}
	return mom;
}

;;
(function() {

// exports
FC.formatDate = formatDate;
FC.formatRange = formatRange;
FC.oldMomentFormat = oldMomentFormat;
FC.queryMostGranularFormatUnit = queryMostGranularFormatUnit;


// Config
// ---------------------------------------------------------------------------------------------------------------------

/*
Inserted between chunks in the fake ("intermediate") formatting string.
Important that it passes as whitespace (\s) because moment often identifies non-standalone months
via a regexp with an \s.
*/
var PART_SEPARATOR = '\u000b'; // vertical tab

/*
Inserted as the first character of a literal-text chunk to indicate that the literal text is not actually literal text,
but rather, a "special" token that has custom rendering (see specialTokens map).
*/
var SPECIAL_TOKEN_MARKER = '\u001f'; // information separator 1

/*
Inserted at the beginning and end of a span of text that must have non-zero numeric characters.
Handling of these markers is done in a post-processing step at the very end of text rendering.
*/
var MAYBE_MARKER = '\u001e'; // information separator 2
var MAYBE_REGEXP = new RegExp(MAYBE_MARKER + '([^' + MAYBE_MARKER + ']*)' + MAYBE_MARKER, 'g'); // must be global

/*
Addition formatting tokens we want recognized
*/
var specialTokens = {
	t: function(date) { // "a" or "p"
		return oldMomentFormat(date, 'a').charAt(0);
	},
	T: function(date) { // "A" or "P"
		return oldMomentFormat(date, 'A').charAt(0);
	}
};

/*
The first characters of formatting tokens for units that are 1 day or larger.
`value` is for ranking relative size (lower means bigger).
`unit` is a normalized unit, used for comparing moments.
*/
var largeTokenMap = {
	Y: { value: 1, unit: 'year' },
	M: { value: 2, unit: 'month' },
	W: { value: 3, unit: 'week' }, // ISO week
	w: { value: 3, unit: 'week' }, // local week
	D: { value: 4, unit: 'day' }, // day of month
	d: { value: 4, unit: 'day' } // day of week
};


// Single Date Formatting
// ---------------------------------------------------------------------------------------------------------------------

/*
Formats `date` with a Moment formatting string, but allow our non-zero areas and special token
*/
function formatDate(date, formatStr) {
	return renderFakeFormatString(
		getParsedFormatString(formatStr).fakeFormatString,
		date
	);
}

/*
Call this if you want Moment's original format method to be used
*/
function oldMomentFormat(mom, formatStr) {
	return oldMomentProto.format.call(mom, formatStr); // oldMomentProto defined in moment-ext.js
}


// Date Range Formatting
// -------------------------------------------------------------------------------------------------
// TODO: make it work with timezone offset

/*
Using a formatting string meant for a single date, generate a range string, like
"Sep 2 - 9 2013", that intelligently inserts a separator where the dates differ.
If the dates are the same as far as the format string is concerned, just return a single
rendering of one date, without any separator.
*/
function formatRange(date1, date2, formatStr, separator, isRTL) {
	var localeData;

	date1 = FC.moment.parseZone(date1);
	date2 = FC.moment.parseZone(date2);

	localeData = date1.localeData();

	// Expand localized format strings, like "LL" -> "MMMM D YYYY".
	// BTW, this is not important for `formatDate` because it is impossible to put custom tokens
	// or non-zero areas in Moment's localized format strings.
	formatStr = localeData.longDateFormat(formatStr) || formatStr;

	return renderParsedFormat(
		getParsedFormatString(formatStr),
		date1,
		date2,
		separator || ' - ',
		isRTL
	);
}

/*
Renders a range with an already-parsed format string.
*/
function renderParsedFormat(parsedFormat, date1, date2, separator, isRTL) {
	var sameUnits = parsedFormat.sameUnits;
	var unzonedDate1 = date1.clone().stripZone(); // for same-unit comparisons
	var unzonedDate2 = date2.clone().stripZone(); // "

	var renderedParts1 = renderFakeFormatStringParts(parsedFormat.fakeFormatString, date1);
	var renderedParts2 = renderFakeFormatStringParts(parsedFormat.fakeFormatString, date2);

	var leftI;
	var leftStr = '';
	var rightI;
	var rightStr = '';
	var middleI;
	var middleStr1 = '';
	var middleStr2 = '';
	var middleStr = '';

	// Start at the leftmost side of the formatting string and continue until you hit a token
	// that is not the same between dates.
	for (
		leftI = 0;
		leftI < sameUnits.length && (!sameUnits[leftI] || unzonedDate1.isSame(unzonedDate2, sameUnits[leftI]));
		leftI++
	) {
		leftStr += renderedParts1[leftI];
	}

	// Similarly, start at the rightmost side of the formatting string and move left
	for (
		rightI = sameUnits.length - 1;
		rightI > leftI && (!sameUnits[rightI] || unzonedDate1.isSame(unzonedDate2, sameUnits[rightI]));
		rightI--
	) {
		// If current chunk is on the boundary of unique date-content, and is a special-case
		// date-formatting postfix character, then don't consume it. Consider it unique date-content.
		// TODO: make configurable
		if (rightI - 1 === leftI && renderedParts1[rightI] === '.') {
			break;
		}

		rightStr = renderedParts1[rightI] + rightStr;
	}

	// The area in the middle is different for both of the dates.
	// Collect them distinctly so we can jam them together later.
	for (middleI = leftI; middleI <= rightI; middleI++) {
		middleStr1 += renderedParts1[middleI];
		middleStr2 += renderedParts2[middleI];
	}

	if (middleStr1 || middleStr2) {
		if (isRTL) {
			middleStr = middleStr2 + separator + middleStr1;
		}
		else {
			middleStr = middleStr1 + separator + middleStr2;
		}
	}

	return processMaybeMarkers(
		leftStr + middleStr + rightStr
	);
}


// Format String Parsing
// ---------------------------------------------------------------------------------------------------------------------

var parsedFormatStrCache = {};

/*
Returns a parsed format string, leveraging a cache.
*/
function getParsedFormatString(formatStr) {
	return parsedFormatStrCache[formatStr] ||
		(parsedFormatStrCache[formatStr] = parseFormatString(formatStr));
}

/*
Parses a format string into the following:
- fakeFormatString: a momentJS formatting string, littered with special control characters that get post-processed.
- sameUnits: for every part in fakeFormatString, if the part is a token, the value will be a unit string (like "day"),
  that indicates how similar a range's start & end must be in order to share the same formatted text.
  If not a token, then the value is null.
  Always a flat array (not nested liked "chunks").
*/
function parseFormatString(formatStr) {
	var chunks = chunkFormatString(formatStr);
	
	return {
		fakeFormatString: buildFakeFormatString(chunks),
		sameUnits: buildSameUnits(chunks)
	};
}

/*
Break the formatting string into an array of chunks.
A 'maybe' chunk will have nested chunks.
*/
function chunkFormatString(formatStr) {
	var chunks = [];
	var match;

	// TODO: more descrimination
	// \4 is a backreference to the first character of a multi-character set.
	var chunker = /\[([^\]]*)\]|\(([^\)]*)\)|(LTS|LT|(\w)\4*o?)|([^\w\[\(]+)/g;

	while ((match = chunker.exec(formatStr))) {
		if (match[1]) { // a literal string inside [ ... ]
			chunks.push.apply(chunks, // append
				splitStringLiteral(match[1])
			);
		}
		else if (match[2]) { // non-zero formatting inside ( ... )
			chunks.push({ maybe: chunkFormatString(match[2]) });
		}
		else if (match[3]) { // a formatting token
			chunks.push({ token: match[3] });
		}
		else if (match[5]) { // an unenclosed literal string
			chunks.push.apply(chunks, // append
				splitStringLiteral(match[5])
			);
		}
	}

	return chunks;
}

/*
Potentially splits a literal-text string into multiple parts. For special cases.
*/
function splitStringLiteral(s) {
	if (s === '. ') {
		return [ '.', ' ' ]; // for locales with periods bound to the end of each year/month/date
	}
	else {
		return [ s ];
	}
}

/*
Given chunks parsed from a real format string, generate a fake (aka "intermediate") format string with special control
characters that will eventually be given to moment for formatting, and then post-processed.
*/
function buildFakeFormatString(chunks) {
	var parts = [];
	var i, chunk;

	for (i = 0; i < chunks.length; i++) {
		chunk = chunks[i];

		if (typeof chunk === 'string') {
			parts.push('[' + chunk + ']');
		}
		else if (chunk.token) {
			if (chunk.token in specialTokens) {
				parts.push(
					SPECIAL_TOKEN_MARKER + // useful during post-processing
					'[' + chunk.token + ']' // preserve as literal text
				);
			}
			else {
				parts.push(chunk.token); // unprotected text implies a format string
			}
		}
		else if (chunk.maybe) {
			parts.push(
				MAYBE_MARKER + // useful during post-processing
				buildFakeFormatString(chunk.maybe) +
				MAYBE_MARKER
			);
		}
	}

	return parts.join(PART_SEPARATOR);
}

/*
Given parsed chunks from a real formatting string, generates an array of unit strings (like "day") that indicate
in which regard two dates must be similar in order to share range formatting text.
The `chunks` can be nested (because of "maybe" chunks), however, the returned array will be flat.
*/
function buildSameUnits(chunks) {
	var units = [];
	var i, chunk;
	var tokenInfo;

	for (i = 0; i < chunks.length; i++) {
		chunk = chunks[i];

		if (chunk.token) {
			tokenInfo = largeTokenMap[chunk.token.charAt(0)];
			units.push(tokenInfo ? tokenInfo.unit : 'second'); // default to a very strict same-second
		}
		else if (chunk.maybe) {
			units.push.apply(units, // append
				buildSameUnits(chunk.maybe)
			);
		}
		else {
			units.push(null);
		}
	}

	return units;
}


// Rendering to text
// ---------------------------------------------------------------------------------------------------------------------

/*
Formats a date with a fake format string, post-processes the control characters, then returns.
*/
function renderFakeFormatString(fakeFormatString, date) {
	return processMaybeMarkers(
		renderFakeFormatStringParts(fakeFormatString, date).join('')
	);
}

/*
Formats a date into parts that will have been post-processed, EXCEPT for the "maybe" markers.
*/
function renderFakeFormatStringParts(fakeFormatString, date) {
	var parts = [];
	var fakeRender = oldMomentFormat(date, fakeFormatString);
	var fakeParts = fakeRender.split(PART_SEPARATOR);
	var i, fakePart;

	for (i = 0; i < fakeParts.length; i++) {
		fakePart = fakeParts[i];

		if (fakePart.charAt(0) === SPECIAL_TOKEN_MARKER) {
			parts.push(
				// the literal string IS the token's name.
				// call special token's registered function.
				specialTokens[fakePart.substring(1)](date)
			);
		}
		else {
			parts.push(fakePart);
		}
	}

	return parts;
}

/*
Accepts an almost-finally-formatted string and processes the "maybe" control characters, returning a new string.
*/
function processMaybeMarkers(s) {
	return s.replace(MAYBE_REGEXP, function(m0, m1) { // regex assumed to have 'g' flag
		if (m1.match(/[1-9]/)) { // any non-zero numeric characters?
			return m1;
		}
		else {
			return '';
		}
	});
}


// Misc Utils
// -------------------------------------------------------------------------------------------------

/*
Returns a unit string, either 'year', 'month', 'day', or null for the most granular formatting token in the string.
*/
function queryMostGranularFormatUnit(formatStr) {
	var chunks = chunkFormatString(formatStr);
	var i, chunk;
	var candidate;
	var best;

	for (i = 0; i < chunks.length; i++) {
		chunk = chunks[i];

		if (chunk.token) {
			candidate = largeTokenMap[chunk.token.charAt(0)];
			if (candidate) {
				if (!best || candidate.value > best.value) {
					best = candidate;
				}
			}
		}
	}

	if (best) {
		return best.unit;
	}

	return null;
};

})();

// quick local references
var formatDate = FC.formatDate;
var formatRange = FC.formatRange;
var oldMomentFormat = FC.oldMomentFormat;

;;

FC.Class = Class; // export

// Class that all other classes will inherit from
function Class() { }


// Called on a class to create a subclass.
// Last argument contains instance methods. Any argument before the last are considered mixins.
Class.extend = function() {
	var members = {};
	var i;

	for (i = 0; i < arguments.length; i++) {
		copyOwnProps(arguments[i], members);
	}

	return extendClass(this, members);
};


// Adds new member variables/methods to the class's prototype.
// Can be called with another class, or a plain object hash containing new members.
Class.mixin = function(members) {
	copyOwnProps(members, this.prototype);
};


function extendClass(superClass, members) {
	var subClass;

	// ensure a constructor for the subclass, forwarding all arguments to the super-constructor if it doesn't exist
	if (hasOwnProp(members, 'constructor')) {
		subClass = members.constructor;
	}
	if (typeof subClass !== 'function') {
		subClass = members.constructor = function() {
			superClass.apply(this, arguments);
		};
	}

	// build the base prototype for the subclass, which is an new object chained to the superclass's prototype
	subClass.prototype = Object.create(superClass.prototype);

	// copy each member variable/method onto the the subclass's prototype
	copyOwnProps(members, subClass.prototype);

	// copy over all class variables/methods to the subclass, such as `extend` and `mixin`
	copyOwnProps(superClass, subClass);

	return subClass;
}

;;

var EmitterMixin = FC.EmitterMixin = {

	// jQuery-ification via $(this) allows a non-DOM object to have
	// the same event handling capabilities (including namespaces).


	on: function(types, handler) {
		$(this).on(types, this._prepareIntercept(handler));
		return this; // for chaining
	},


	one: function(types, handler) {
		$(this).one(types, this._prepareIntercept(handler));
		return this; // for chaining
	},


	_prepareIntercept: function(handler) {
		// handlers are always called with an "event" object as their first param.
		// sneak the `this` context and arguments into the extra parameter object
		// and forward them on to the original handler.
		var intercept = function(ev, extra) {
			return handler.apply(
				extra.context || this,
				extra.args || []
			);
		};

		// mimick jQuery's internal "proxy" system (risky, I know)
		// causing all functions with the same .guid to appear to be the same.
		// https://github.com/jquery/jquery/blob/2.2.4/src/core.js#L448
		// this is needed for calling .off with the original non-intercept handler.
		if (!handler.guid) {
			handler.guid = $.guid++;
		}
		intercept.guid = handler.guid;

		return intercept;
	},


	off: function(types, handler) {
		$(this).off(types, handler);

		return this; // for chaining
	},


	trigger: function(types) {
		var args = Array.prototype.slice.call(arguments, 1); // arguments after the first

		// pass in "extra" info to the intercept
		$(this).triggerHandler(types, { args: args });

		return this; // for chaining
	},


	triggerWith: function(types, context, args) {

		// `triggerHandler` is less reliant on the DOM compared to `trigger`.
		// pass in "extra" info to the intercept.
		$(this).triggerHandler(types, { context: context, args: args });

		return this; // for chaining
	},


	hasHandlers: function(type) {
		var hash = $._data(this, 'events'); // http://blog.jquery.com/2012/08/09/jquery-1-8-released/

		return hash && hash[type] && hash[type].length > 0;
	}

};

;;

/*
Utility methods for easily listening to events on another object,
and more importantly, easily unlistening from them.
*/
var ListenerMixin = FC.ListenerMixin = (function() {
	var guid = 0;
	var ListenerMixin = {

		listenerId: null,

		/*
		Given an `other` object that has on/off methods, bind the given `callback` to an event by the given name.
		The `callback` will be called with the `this` context of the object that .listenTo is being called on.
		Can be called:
			.listenTo(other, eventName, callback)
		OR
			.listenTo(other, {
				eventName1: callback1,
				eventName2: callback2
			})
		*/
		listenTo: function(other, arg, callback) {
			if (typeof arg === 'object') { // given dictionary of callbacks
				for (var eventName in arg) {
					if (arg.hasOwnProperty(eventName)) {
						this.listenTo(other, eventName, arg[eventName]);
					}
				}
			}
			else if (typeof arg === 'string') {
				other.on(
					arg + '.' + this.getListenerNamespace(), // use event namespacing to identify this object
					$.proxy(callback, this) // always use `this` context
						// the usually-undesired jQuery guid behavior doesn't matter,
						// because we always unbind via namespace
				);
			}
		},

		/*
		Causes the current object to stop listening to events on the `other` object.
		`eventName` is optional. If omitted, will stop listening to ALL events on `other`.
		*/
		stopListeningTo: function(other, eventName) {
			other.off((eventName || '') + '.' + this.getListenerNamespace());
		},

		/*
		Returns a string, unique to this object, to be used for event namespacing
		*/
		getListenerNamespace: function() {
			if (this.listenerId == null) {
				this.listenerId = guid++;
			}
			return '_listener' + this.listenerId;
		}

	};
	return ListenerMixin;
})();
;;

var ParsableModelMixin = {

	standardPropMap: {}, // will be cloned by defineStandardProps


	/*
	Returns true/false for success.
	Meant to be only called ONCE, at object creation.
	*/
	applyProps: function(rawProps) {
		var standardPropMap = this.standardPropMap;
		var manualProps = {};
		var miscProps = {};
		var propName;

		for (propName in rawProps) {
			if (standardPropMap[propName] === true) { // copy verbatim
				this[propName] = rawProps[propName];
			}
			else if (standardPropMap[propName] === false) {
				manualProps[propName] = rawProps[propName];
			}
			else {
				miscProps[propName] = rawProps[propName];
			}
		}

		this.applyMiscProps(miscProps);

		return this.applyManualStandardProps(manualProps);
	},


	/*
	If subclasses override, they must call this supermethod and return the boolean response.
	Meant to be only called ONCE, at object creation.
	*/
	applyManualStandardProps: function(rawProps) {
		return true;
	},


	/*
	Can be called even after initial object creation.
	*/
	applyMiscProps: function(rawProps) {
		// subclasses can implement
	},


	/*
	TODO: why is this a method when defineStandardProps is static
	*/
	isStandardProp: function(propName) {
		return propName in this.standardPropMap;
	}

};


/*
TODO: devise a better system
*/
var ParsableModelMixin_defineStandardProps = function(propDefs) {
	var proto = this.prototype;

	if (!proto.hasOwnProperty('standardPropMap')) {
		proto.standardPropMap = Object.create(proto.standardPropMap);
	}

	copyOwnProps(propDefs, proto.standardPropMap);
};


/*
TODO: devise a better system
*/
var ParsableModelMixin_copyVerbatimStandardProps = function(src, dest) {
	var map = this.prototype.standardPropMap;
	var propName;

	for (propName in map) {
		if (
			src[propName] != null && // in the src object?
			map[propName] === true // false means "copy verbatim"
		) {
			dest[propName] = src[propName];
		}
	}
};

;;

var Model = Class.extend(EmitterMixin, ListenerMixin, {

	_props: null,
	_watchers: null,
	_globalWatchArgs: {}, // mutation protection in Model.watch

	constructor: function() {
		this._watchers = {};
		this._props = {};
		this.applyGlobalWatchers();
		this.constructed();
	},

	// useful for monkeypatching. TODO: BaseClass?
	constructed: function() {
	},

	applyGlobalWatchers: function() {
		var map = this._globalWatchArgs;
		var name;

		for (name in map) {
			this.watch.apply(this, map[name]);
		}
	},

	has: function(name) {
		return name in this._props;
	},

	get: function(name) {
		if (name === undefined) {
			return this._props;
		}

		return this._props[name];
	},

	set: function(name, val) {
		var newProps;

		if (typeof name === 'string') {
			newProps = {};
			newProps[name] = val === undefined ? null : val;
		}
		else {
			newProps = name;
		}

		this.setProps(newProps);
	},

	reset: function(newProps) {
		var oldProps = this._props;
		var changeset = {}; // will have undefined's to signal unsets
		var name;

		for (name in oldProps) {
			changeset[name] = undefined;
		}

		for (name in newProps) {
			changeset[name] = newProps[name];
		}

		this.setProps(changeset);
	},

	unset: function(name) { // accepts a string or array of strings
		var newProps = {};
		var names;
		var i;

		if (typeof name === 'string') {
			names = [ name ];
		}
		else {
			names = name;
		}

		for (i = 0; i < names.length; i++) {
			newProps[names[i]] = undefined;
		}

		this.setProps(newProps);
	},

	setProps: function(newProps) {
		var changedProps = {};
		var changedCnt = 0;
		var name, val;

		for (name in newProps) {
			val = newProps[name];

			// a change in value?
			// if an object, don't check equality, because might have been mutated internally.
			// TODO: eventually enforce immutability.
			if (
				typeof val === 'object' ||
				val !== this._props[name]
			) {
				changedProps[name] = val;
				changedCnt++;
			}
		}

		if (changedCnt) {

			this.trigger('before:batchChange', changedProps);

			for (name in changedProps) {
				val = changedProps[name];

				this.trigger('before:change', name, val);
				this.trigger('before:change:' + name, val);
			}

			for (name in changedProps) {
				val = changedProps[name];

				if (val === undefined) {
					delete this._props[name];
				}
				else {
					this._props[name] = val;
				}

				this.trigger('change:' + name, val);
				this.trigger('change', name, val);
			}

			this.trigger('batchChange', changedProps);
		}
	},

	watch: function(name, depList, startFunc, stopFunc) {
		var _this = this;

		this.unwatch(name);

		this._watchers[name] = this._watchDeps(depList, function(deps) {
			var res = startFunc.call(_this, deps);

			if (res && res.then) {
				_this.unset(name); // put in an unset state while resolving
				res.then(function(val) {
					_this.set(name, val);
				});
			}
			else {
				_this.set(name, res);
			}
		}, function(deps) {
			_this.unset(name);

			if (stopFunc) {
				stopFunc.call(_this, deps);
			}
		});
	},

	unwatch: function(name) {
		var watcher = this._watchers[name];

		if (watcher) {
			delete this._watchers[name];
			watcher.teardown();
		}
	},

	_watchDeps: function(depList, startFunc, stopFunc) {
		var _this = this;
		var queuedChangeCnt = 0;
		var depCnt = depList.length;
		var satisfyCnt = 0;
		var values = {}; // what's passed as the `deps` arguments
		var bindTuples = []; // array of [ eventName, handlerFunc ] arrays
		var isCallingStop = false;

		function onBeforeDepChange(depName, val, isOptional) {
			queuedChangeCnt++;
			if (queuedChangeCnt === 1) { // first change to cause a "stop" ?
				if (satisfyCnt === depCnt) { // all deps previously satisfied?
					isCallingStop = true;
					stopFunc(values);
					isCallingStop = false;
				}
			}
		}

		function onDepChange(depName, val, isOptional) {

			if (val === undefined) { // unsetting a value?

				// required dependency that was previously set?
				if (!isOptional && values[depName] !== undefined) {
					satisfyCnt--;
				}

				delete values[depName];
			}
			else { // setting a value?

				// required dependency that was previously unset?
				if (!isOptional && values[depName] === undefined) {
					satisfyCnt++;
				}

				values[depName] = val;
			}

			queuedChangeCnt--;
			if (!queuedChangeCnt) { // last change to cause a "start"?

				// now finally satisfied or satisfied all along?
				if (satisfyCnt === depCnt) {

					// if the stopFunc initiated another value change, ignore it.
					// it will be processed by another change event anyway.
					if (!isCallingStop) {
						startFunc(values);
					}
				}
			}
		}

		// intercept for .on() that remembers handlers
		function bind(eventName, handler) {
			_this.on(eventName, handler);
			bindTuples.push([ eventName, handler ]);
		}

		// listen to dependency changes
		depList.forEach(function(depName) {
			var isOptional = false;

			if (depName.charAt(0) === '?') { // TODO: more DRY
				depName = depName.substring(1);
				isOptional = true;
			}

			bind('before:change:' + depName, function(val) {
				onBeforeDepChange(depName, val, isOptional);
			});

			bind('change:' + depName, function(val) {
				onDepChange(depName, val, isOptional);
			});
		});

		// process current dependency values
		depList.forEach(function(depName) {
			var isOptional = false;

			if (depName.charAt(0) === '?') { // TODO: more DRY
				depName = depName.substring(1);
				isOptional = true;
			}

			if (_this.has(depName)) {
				values[depName] = _this.get(depName);
				satisfyCnt++;
			}
			else if (isOptional) {
				satisfyCnt++;
			}
		});

		// initially satisfied
		if (satisfyCnt === depCnt) {
			startFunc(values);
		}

		return {
			teardown: function() {
				// remove all handlers
				for (var i = 0; i < bindTuples.length; i++) {
					_this.off(bindTuples[i][0], bindTuples[i][1]);
				}
				bindTuples = null;

				// was satisfied, so call stopFunc
				if (satisfyCnt === depCnt) {
					stopFunc();
				}
			},
			flash: function() {
				if (satisfyCnt === depCnt) {
					stopFunc();
					startFunc(values);
				}
			}
		};
	},

	flash: function(name) {
		var watcher = this._watchers[name];

		if (watcher) {
			watcher.flash();
		}
	}

});


Model.watch = function(name /* , depList, startFunc, stopFunc */) {

	// subclasses should make a masked-copy of the superclass's map
	// TODO: write test
	if (!this.prototype.hasOwnProperty('_globalWatchArgs')) {
		this.prototype._globalWatchArgs = Object.create(this.prototype._globalWatchArgs);
	}

	this.prototype._globalWatchArgs[name] = arguments;
};


FC.Model = Model;


;;

var Promise = {

	construct: function(executor) {
		var deferred = $.Deferred();
		var promise = deferred.promise();

		if (typeof executor === 'function') {
			executor(
				function(val) { // resolve
					deferred.resolve(val);
					attachImmediatelyResolvingThen(promise, val);
				},
				function() { // reject
					deferred.reject();
					attachImmediatelyRejectingThen(promise);
				}
			);
		}

		return promise;
	},

	resolve: function(val) {
		var deferred = $.Deferred().resolve(val);
		var promise = deferred.promise();

		attachImmediatelyResolvingThen(promise, val);

		return promise;
	},

	reject: function() {
		var deferred = $.Deferred().reject();
		var promise = deferred.promise();

		attachImmediatelyRejectingThen(promise);

		return promise;
	}

};


function attachImmediatelyResolvingThen(promise, val) {
	promise.then = function(onResolve) {
		if (typeof onResolve === 'function') {
			return Promise.resolve(onResolve(val));
		}
		return promise;
	};
}


function attachImmediatelyRejectingThen(promise) {
	promise.then = function(onResolve, onReject) {
		if (typeof onReject === 'function') {
			onReject();
		}
		return promise;
	};
}


FC.Promise = Promise;

;;

var TaskQueue = Class.extend(EmitterMixin, {

	q: null,
	isPaused: false,
	isRunning: false,


	constructor: function() {
		this.q = [];
	},


	queue: function(/* taskFunc, taskFunc... */) {
		this.q.push.apply(this.q, arguments); // append
		this.tryStart();
	},


	pause: function() {
		this.isPaused = true;
	},


	resume: function() {
		this.isPaused = false;
		this.tryStart();
	},


	getIsIdle: function() {
		return !this.isRunning && !this.isPaused;
	},


	tryStart: function() {
		if (!this.isRunning && this.canRunNext()) {
			this.isRunning = true;
			this.trigger('start');
			this.runRemaining();
		}
	},


	canRunNext: function() {
		return !this.isPaused && this.q.length;
	},


	runRemaining: function() { // assumes at least one task in queue. does not check canRunNext for first task.
		var _this = this;
		var task;
		var res;

		do {
			task = this.q.shift(); // always freshly reference q. might have been reassigned.
			res = this.runTask(task);

			if (res && res.then) {
				res.then(function() { // jshint ignore:line
					if (_this.canRunNext()) {
						_this.runRemaining();
					}
				});
				return; // prevent marking as stopped
			}
		} while (this.canRunNext());

		this.trigger('stop'); // not really a 'stop' ... more of a 'drained'
		this.isRunning = false;

		// if 'stop' handler added more tasks.... TODO: write test for this
		this.tryStart();
	},


	runTask: function(task) {
		return task(); // task *is* the function, but subclasses can change the format of a task
	}

});

FC.TaskQueue = TaskQueue;

;;

var RenderQueue = TaskQueue.extend({

	waitsByNamespace: null,
	waitNamespace: null,
	waitId: null,


	constructor: function(waitsByNamespace) {
		TaskQueue.call(this); // super-constructor

		this.waitsByNamespace = waitsByNamespace || {};
	},


	queue: function(taskFunc, namespace, type) {
		var task = {
			func: taskFunc,
			namespace: namespace,
			type: type
		};
		var waitMs;

		if (namespace) {
			waitMs = this.waitsByNamespace[namespace];
		}

		if (this.waitNamespace) {
			if (namespace === this.waitNamespace && waitMs != null) {
				this.delayWait(waitMs);
			}
			else {
				this.clearWait();
				this.tryStart();
			}
		}

		if (this.compoundTask(task)) { // appended to queue?

			if (!this.waitNamespace && waitMs != null) {
				this.startWait(namespace, waitMs);
			}
			else {
				this.tryStart();
			}
		}
	},


	startWait: function(namespace, waitMs) {
		this.waitNamespace = namespace;
		this.spawnWait(waitMs);
	},


	delayWait: function(waitMs) {
		clearTimeout(this.waitId);
		this.spawnWait(waitMs);
	},


	spawnWait: function(waitMs) {
		var _this = this;

		this.waitId = setTimeout(function() {
			_this.waitNamespace = null;
			_this.tryStart();
		}, waitMs);
	},


	clearWait: function() {
		if (this.waitNamespace) {
			clearTimeout(this.waitId);
			this.waitId = null;
			this.waitNamespace = null;
		}
	},


	canRunNext: function() {
		if (!TaskQueue.prototype.canRunNext.apply(this, arguments)) {
			return false;
		}

		// waiting for a certain namespace to stop receiving tasks?
		if (this.waitNamespace) {

			// if there was a different namespace task in the meantime,
			// that forces all previously-waiting tasks to suddenly execute.
			// TODO: find a way to do this in constant time.
			for (var q = this.q, i = 0; i < q.length; i++) {
				if (q[i].namespace !== this.waitNamespace) {
					return true; // allow execution
				}
			}

			return false;
		}

		return true;
	},


	runTask: function(task) {
		task.func();
	},


	compoundTask: function(newTask) {
		var q = this.q;
		var shouldAppend = true;
		var i, task;

		if (newTask.namespace && newTask.type === 'destroy') {

			// remove all init/add/remove ops with same namespace, regardless of order
			for (i = q.length - 1; i >= 0; i--) {
				task = q[i];

				switch (task.type) {
					case 'init':
						shouldAppend = false; // jshint ignore:line
						// the latest destroy is cancelled out by not doing the init
						// and fallthrough....
					case 'add':
					case 'remove':
						q.splice(i, 1); // remove task
				}
			}
		}

		if (shouldAppend) {
			q.push(newTask);
		}

		return shouldAppend;
	}

});

FC.RenderQueue = RenderQueue;

;;

/* A rectangular panel that is absolutely positioned over other content
------------------------------------------------------------------------------------------------------------------------
Options:
	- className (string)
	- content (HTML string or jQuery element set)
	- parentEl
	- top
	- left
	- right (the x coord of where the right edge should be. not a "CSS" right)
	- autoHide (boolean)
	- show (callback)
	- hide (callback)
*/

var Popover = Class.extend(ListenerMixin, {

	isHidden: true,
	options: null,
	el: null, // the container element for the popover. generated by this object
	margin: 10, // the space required between the popover and the edges of the scroll container


	constructor: function(options) {
		this.options = options || {};
	},


	// Shows the popover on the specified position. Renders it if not already
	show: function() {
		if (this.isHidden) {
			if (!this.el) {
				this.render();
			}
			this.el.show();
			this.position();
			this.isHidden = false;
			this.trigger('show');
		}
	},


	// Hides the popover, through CSS, but does not remove it from the DOM
	hide: function() {
		if (!this.isHidden) {
			this.el.hide();
			this.isHidden = true;
			this.trigger('hide');
		}
	},


	// Creates `this.el` and renders content inside of it
	render: function() {
		var _this = this;
		var options = this.options;

		this.el = $('<div class="fc-popover"/>')
			.addClass(options.className || '')
			.css({
				// position initially to the top left to avoid creating scrollbars
				top: 0,
				left: 0
			})
			.append(options.content)
			.appendTo(options.parentEl);

		// when a click happens on anything inside with a 'fc-close' className, hide the popover
		this.el.on('click', '.fc-close', function() {
			_this.hide();
		});

		if (options.autoHide) {
			this.listenTo($(document), 'mousedown', this.documentMousedown);
		}
	},


	// Triggered when the user clicks *anywhere* in the document, for the autoHide feature
	documentMousedown: function(ev) {
		// only hide the popover if the click happened outside the popover
		if (this.el && !$(ev.target).closest(this.el).length) {
			this.hide();
		}
	},


	// Hides and unregisters any handlers
	removeElement: function() {
		this.hide();

		if (this.el) {
			this.el.remove();
			this.el = null;
		}

		this.stopListeningTo($(document), 'mousedown');
	},


	// Positions the popover optimally, using the top/left/right options
	position: function() {
		var options = this.options;
		var origin = this.el.offsetParent().offset();
		var width = this.el.outerWidth();
		var height = this.el.outerHeight();
		var windowEl = $(window);
		var viewportEl = getScrollParent(this.el);
		var viewportTop;
		var viewportLeft;
		var viewportOffset;
		var top; // the "position" (not "offset") values for the popover
		var left; //

		// compute top and left
		top = options.top || 0;
		if (options.left !== undefined) {
			left = options.left;
		}
		else if (options.right !== undefined) {
			left = options.right - width; // derive the left value from the right value
		}
		else {
			left = 0;
		}

		if (viewportEl.is(window) || viewportEl.is(document)) { // normalize getScrollParent's result
			viewportEl = windowEl;
			viewportTop = 0; // the window is always at the top left
			viewportLeft = 0; // (and .offset() won't work if called here)
		}
		else {
			viewportOffset = viewportEl.offset();
			viewportTop = viewportOffset.top;
			viewportLeft = viewportOffset.left;
		}

		// if the window is scrolled, it causes the visible area to be further down
		viewportTop += windowEl.scrollTop();
		viewportLeft += windowEl.scrollLeft();

		// constrain to the view port. if constrained by two edges, give precedence to top/left
		if (options.viewportConstrain !== false) {
			top = Math.min(top, viewportTop + viewportEl.outerHeight() - height - this.margin);
			top = Math.max(top, viewportTop + this.margin);
			left = Math.min(left, viewportLeft + viewportEl.outerWidth() - width - this.margin);
			left = Math.max(left, viewportLeft + this.margin);
		}

		this.el.css({
			top: top - origin.top,
			left: left - origin.left
		});
	},


	// Triggers a callback. Calls a function in the option hash of the same name.
	// Arguments beyond the first `name` are forwarded on.
	// TODO: better code reuse for this. Repeat code
	trigger: function(name) {
		if (this.options[name]) {
			this.options[name].apply(this, Array.prototype.slice.call(arguments, 1));
		}
	}

});

;;

/*
A cache for the left/right/top/bottom/width/height values for one or more elements.
Works with both offset (from topleft document) and position (from offsetParent).

options:
- els
- isHorizontal
- isVertical
*/
var CoordCache = FC.CoordCache = Class.extend({

	els: null, // jQuery set (assumed to be siblings)
	forcedOffsetParentEl: null, // options can override the natural offsetParent
	origin: null, // {left,top} position of offsetParent of els
	boundingRect: null, // constrain cordinates to this rectangle. {left,right,top,bottom} or null
	isHorizontal: false, // whether to query for left/right/width
	isVertical: false, // whether to query for top/bottom/height

	// arrays of coordinates (offsets from topleft of document)
	lefts: null,
	rights: null,
	tops: null,
	bottoms: null,


	constructor: function(options) {
		this.els = $(options.els);
		this.isHorizontal = options.isHorizontal;
		this.isVertical = options.isVertical;
		this.forcedOffsetParentEl = options.offsetParent ? $(options.offsetParent) : null;
	},


	// Queries the els for coordinates and stores them.
	// Call this method before using and of the get* methods below.
	build: function() {
		var offsetParentEl = this.forcedOffsetParentEl;
		if (!offsetParentEl && this.els.length > 0) {
			offsetParentEl = this.els.eq(0).offsetParent();
		}

		this.origin = offsetParentEl ?
			offsetParentEl.offset() :
			null;

		this.boundingRect = this.queryBoundingRect();

		if (this.isHorizontal) {
			this.buildElHorizontals();
		}
		if (this.isVertical) {
			this.buildElVerticals();
		}
	},


	// Destroys all internal data about coordinates, freeing memory
	clear: function() {
		this.origin = null;
		this.boundingRect = null;
		this.lefts = null;
		this.rights = null;
		this.tops = null;
		this.bottoms = null;
	},


	// When called, if coord caches aren't built, builds them
	ensureBuilt: function() {
		if (!this.origin) {
			this.build();
		}
	},


	// Populates the left/right internal coordinate arrays
	buildElHorizontals: function() {
		var lefts = [];
		var rights = [];

		this.els.each(function(i, node) {
			var el = $(node);
			var left = el.offset().left;
			var width = el.outerWidth();

			lefts.push(left);
			rights.push(left + width);
		});

		this.lefts = lefts;
		this.rights = rights;
	},


	// Populates the top/bottom internal coordinate arrays
	buildElVerticals: function() {
		var tops = [];
		var bottoms = [];

		this.els.each(function(i, node) {
			var el = $(node);
			var top = el.offset().top;
			var height = el.outerHeight();

			tops.push(top);
			bottoms.push(top + height);
		});

		this.tops = tops;
		this.bottoms = bottoms;
	},


	// Given a left offset (from document left), returns the index of the el that it horizontally intersects.
	// If no intersection is made, returns undefined.
	getHorizontalIndex: function(leftOffset) {
		this.ensureBuilt();

		var lefts = this.lefts;
		var rights = this.rights;
		var len = lefts.length;
		var i;

		for (i = 0; i < len; i++) {
			if (leftOffset >= lefts[i] && leftOffset < rights[i]) {
				return i;
			}
		}
	},


	// Given a top offset (from document top), returns the index of the el that it vertically intersects.
	// If no intersection is made, returns undefined.
	getVerticalIndex: function(topOffset) {
		this.ensureBuilt();

		var tops = this.tops;
		var bottoms = this.bottoms;
		var len = tops.length;
		var i;

		for (i = 0; i < len; i++) {
			if (topOffset >= tops[i] && topOffset < bottoms[i]) {
				return i;
			}
		}
	},


	// Gets the left offset (from document left) of the element at the given index
	getLeftOffset: function(leftIndex) {
		this.ensureBuilt();
		return this.lefts[leftIndex];
	},


	// Gets the left position (from offsetParent left) of the element at the given index
	getLeftPosition: function(leftIndex) {
		this.ensureBuilt();
		return this.lefts[leftIndex] - this.origin.left;
	},


	// Gets the right offset (from document left) of the element at the given index.
	// This value is NOT relative to the document's right edge, like the CSS concept of "right" would be.
	getRightOffset: function(leftIndex) {
		this.ensureBuilt();
		return this.rights[leftIndex];
	},


	// Gets the right position (from offsetParent left) of the element at the given index.
	// This value is NOT relative to the offsetParent's right edge, like the CSS concept of "right" would be.
	getRightPosition: function(leftIndex) {
		this.ensureBuilt();
		return this.rights[leftIndex] - this.origin.left;
	},


	// Gets the width of the element at the given index
	getWidth: function(leftIndex) {
		this.ensureBuilt();
		return this.rights[leftIndex] - this.lefts[leftIndex];
	},


	// Gets the top offset (from document top) of the element at the given index
	getTopOffset: function(topIndex) {
		this.ensureBuilt();
		return this.tops[topIndex];
	},


	// Gets the top position (from offsetParent top) of the element at the given position
	getTopPosition: function(topIndex) {
		this.ensureBuilt();
		return this.tops[topIndex] - this.origin.top;
	},

	// Gets the bottom offset (from the document top) of the element at the given index.
	// This value is NOT relative to the offsetParent's bottom edge, like the CSS concept of "bottom" would be.
	getBottomOffset: function(topIndex) {
		this.ensureBuilt();
		return this.bottoms[topIndex];
	},


	// Gets the bottom position (from the offsetParent top) of the element at the given index.
	// This value is NOT relative to the offsetParent's bottom edge, like the CSS concept of "bottom" would be.
	getBottomPosition: function(topIndex) {
		this.ensureBuilt();
		return this.bottoms[topIndex] - this.origin.top;
	},


	// Gets the height of the element at the given index
	getHeight: function(topIndex) {
		this.ensureBuilt();
		return this.bottoms[topIndex] - this.tops[topIndex];
	},


	// Bounding Rect
	// TODO: decouple this from CoordCache

	// Compute and return what the elements' bounding rectangle is, from the user's perspective.
	// Right now, only returns a rectangle if constrained by an overflow:scroll element.
	// Returns null if there are no elements
	queryBoundingRect: function() {
		var scrollParentEl;

		if (this.els.length > 0) {
			scrollParentEl = getScrollParent(this.els.eq(0));

			if (!scrollParentEl.is(document)) {
				return getClientRect(scrollParentEl);
			}
		}

		return null;
	},

	isPointInBounds: function(leftOffset, topOffset) {
		return this.isLeftInBounds(leftOffset) && this.isTopInBounds(topOffset);
	},

	isLeftInBounds: function(leftOffset) {
		return !this.boundingRect || (leftOffset >= this.boundingRect.left && leftOffset < this.boundingRect.right);
	},

	isTopInBounds: function(topOffset) {
		return !this.boundingRect || (topOffset >= this.boundingRect.top && topOffset < this.boundingRect.bottom);
	}

});

;;

/* Tracks a drag's mouse movement, firing various handlers
----------------------------------------------------------------------------------------------------------------------*/
// TODO: use Emitter

var DragListener = FC.DragListener = Class.extend(ListenerMixin, {

	options: null,
	subjectEl: null,

	// coordinates of the initial mousedown
	originX: null,
	originY: null,

	// the wrapping element that scrolls, or MIGHT scroll if there's overflow.
	// TODO: do this for wrappers that have overflow:hidden as well.
	scrollEl: null,

	isInteracting: false,
	isDistanceSurpassed: false,
	isDelayEnded: false,
	isDragging: false,
	isTouch: false,
	isGeneric: false, // initiated by 'dragstart' (jqui)

	delay: null,
	delayTimeoutId: null,
	minDistance: null,

	shouldCancelTouchScroll: true,
	scrollAlwaysKills: false,


	constructor: function(options) {
		this.options = options || {};
	},


	// Interaction (high-level)
	// -----------------------------------------------------------------------------------------------------------------


	startInteraction: function(ev, extraOptions) {

		if (ev.type === 'mousedown') {
			if (GlobalEmitter.get().shouldIgnoreMouse()) {
				return;
			}
			else if (!isPrimaryMouseButton(ev)) {
				return;
			}
			else {
				ev.preventDefault(); // prevents native selection in most browsers
			}
		}

		if (!this.isInteracting) {

			// process options
			extraOptions = extraOptions || {};
			this.delay = firstDefined(extraOptions.delay, this.options.delay, 0);
			this.minDistance = firstDefined(extraOptions.distance, this.options.distance, 0);
			this.subjectEl = this.options.subjectEl;

			preventSelection($('body'));

			this.isInteracting = true;
			this.isTouch = getEvIsTouch(ev);
			this.isGeneric = ev.type === 'dragstart';
			this.isDelayEnded = false;
			this.isDistanceSurpassed = false;

			this.originX = getEvX(ev);
			this.originY = getEvY(ev);
			this.scrollEl = getScrollParent($(ev.target));

			this.bindHandlers();
			this.initAutoScroll();
			this.handleInteractionStart(ev);
			this.startDelay(ev);

			if (!this.minDistance) {
				this.handleDistanceSurpassed(ev);
			}
		}
	},


	handleInteractionStart: function(ev) {
		this.trigger('interactionStart', ev);
	},


	endInteraction: function(ev, isCancelled) {
		if (this.isInteracting) {
			this.endDrag(ev);

			if (this.delayTimeoutId) {
				clearTimeout(this.delayTimeoutId);
				this.delayTimeoutId = null;
			}

			this.destroyAutoScroll();
			this.unbindHandlers();

			this.isInteracting = false;
			this.handleInteractionEnd(ev, isCancelled);

			allowSelection($('body'));
		}
	},


	handleInteractionEnd: function(ev, isCancelled) {
		this.trigger('interactionEnd', ev, isCancelled || false);
	},


	// Binding To DOM
	// -----------------------------------------------------------------------------------------------------------------


	bindHandlers: function() {
		// some browsers (Safari in iOS 10) don't allow preventDefault on touch events that are bound after touchstart,
		// so listen to the GlobalEmitter singleton, which is always bound, instead of the document directly.
		var globalEmitter = GlobalEmitter.get();

		if (this.isGeneric) {
			this.listenTo($(document), { // might only work on iOS because of GlobalEmitter's bind :(
				drag: this.handleMove,
				dragstop: this.endInteraction
			});
		}
		else if (this.isTouch) {
			this.listenTo(globalEmitter, {
				touchmove: this.handleTouchMove,
				touchend: this.endInteraction,
				scroll: this.handleTouchScroll
			});
		}
		else {
			this.listenTo(globalEmitter, {
				mousemove: this.handleMouseMove,
				mouseup: this.endInteraction
			});
		}

		this.listenTo(globalEmitter, {
			selectstart: preventDefault, // don't allow selection while dragging
			contextmenu: preventDefault // long taps would open menu on Chrome dev tools
		});
	},


	unbindHandlers: function() {
		this.stopListeningTo(GlobalEmitter.get());
		this.stopListeningTo($(document)); // for isGeneric
	},


	// Drag (high-level)
	// -----------------------------------------------------------------------------------------------------------------


	// extraOptions ignored if drag already started
	startDrag: function(ev, extraOptions) {
		this.startInteraction(ev, extraOptions); // ensure interaction began

		if (!this.isDragging) {
			this.isDragging = true;
			this.handleDragStart(ev);
		}
	},


	handleDragStart: function(ev) {
		this.trigger('dragStart', ev);
	},


	handleMove: function(ev) {
		var dx = getEvX(ev) - this.originX;
		var dy = getEvY(ev) - this.originY;
		var minDistance = this.minDistance;
		var distanceSq; // current distance from the origin, squared

		if (!this.isDistanceSurpassed) {
			distanceSq = dx * dx + dy * dy;
			if (distanceSq >= minDistance * minDistance) { // use pythagorean theorem
				this.handleDistanceSurpassed(ev);
			}
		}

		if (this.isDragging) {
			this.handleDrag(dx, dy, ev);
		}
	},


	// Called while the mouse is being moved and when we know a legitimate drag is taking place
	handleDrag: function(dx, dy, ev) {
		this.trigger('drag', dx, dy, ev);
		this.updateAutoScroll(ev); // will possibly cause scrolling
	},


	endDrag: function(ev) {
		if (this.isDragging) {
			this.isDragging = false;
			this.handleDragEnd(ev);
		}
	},


	handleDragEnd: function(ev) {
		this.trigger('dragEnd', ev);
	},


	// Delay
	// -----------------------------------------------------------------------------------------------------------------


	startDelay: function(initialEv) {
		var _this = this;

		if (this.delay) {
			this.delayTimeoutId = setTimeout(function() {
				_this.handleDelayEnd(initialEv);
			}, this.delay);
		}
		else {
			this.handleDelayEnd(initialEv);
		}
	},


	handleDelayEnd: function(initialEv) {
		this.isDelayEnded = true;

		if (this.isDistanceSurpassed) {
			this.startDrag(initialEv);
		}
	},


	// Distance
	// -----------------------------------------------------------------------------------------------------------------


	handleDistanceSurpassed: function(ev) {
		this.isDistanceSurpassed = true;

		if (this.isDelayEnded) {
			this.startDrag(ev);
		}
	},


	// Mouse / Touch
	// -----------------------------------------------------------------------------------------------------------------


	handleTouchMove: function(ev) {

		// prevent inertia and touchmove-scrolling while dragging
		if (this.isDragging && this.shouldCancelTouchScroll) {
			ev.preventDefault();
		}

		this.handleMove(ev);
	},


	handleMouseMove: function(ev) {
		this.handleMove(ev);
	},


	// Scrolling (unrelated to auto-scroll)
	// -----------------------------------------------------------------------------------------------------------------


	handleTouchScroll: function(ev) {
		// if the drag is being initiated by touch, but a scroll happens before
		// the drag-initiating delay is over, cancel the drag
		if (!this.isDragging || this.scrollAlwaysKills) {
			this.endInteraction(ev, true); // isCancelled=true
		}
	},


	// Utils
	// -----------------------------------------------------------------------------------------------------------------


	// Triggers a callback. Calls a function in the option hash of the same name.
	// Arguments beyond the first `name` are forwarded on.
	trigger: function(name) {
		if (this.options[name]) {
			this.options[name].apply(this, Array.prototype.slice.call(arguments, 1));
		}
		// makes _methods callable by event name. TODO: kill this
		if (this['_' + name]) {
			this['_' + name].apply(this, Array.prototype.slice.call(arguments, 1));
		}
	}


});

;;
/*
this.scrollEl is set in DragListener
*/
DragListener.mixin({

	isAutoScroll: false,

	scrollBounds: null, // { top, bottom, left, right }
	scrollTopVel: null, // pixels per second
	scrollLeftVel: null, // pixels per second
	scrollIntervalId: null, // ID of setTimeout for scrolling animation loop

	// defaults
	scrollSensitivity: 30, // pixels from edge for scrolling to start
	scrollSpeed: 200, // pixels per second, at maximum speed
	scrollIntervalMs: 50, // millisecond wait between scroll increment


	initAutoScroll: function() {
		var scrollEl = this.scrollEl;

		this.isAutoScroll =
			this.options.scroll &&
			scrollEl &&
			!scrollEl.is(window) &&
			!scrollEl.is(document);

		if (this.isAutoScroll) {
			// debounce makes sure rapid calls don't happen
			this.listenTo(scrollEl, 'scroll', debounce(this.handleDebouncedScroll, 100));
		}
	},


	destroyAutoScroll: function() {
		this.endAutoScroll(); // kill any animation loop

		// remove the scroll handler if there is a scrollEl
		if (this.isAutoScroll) {
			this.stopListeningTo(this.scrollEl, 'scroll'); // will probably get removed by unbindHandlers too :(
		}
	},


	// Computes and stores the bounding rectangle of scrollEl
	computeScrollBounds: function() {
		if (this.isAutoScroll) {
			this.scrollBounds = getOuterRect(this.scrollEl);
			// TODO: use getClientRect in future. but prevents auto scrolling when on top of scrollbars
		}
	},


	// Called when the dragging is in progress and scrolling should be updated
	updateAutoScroll: function(ev) {
		var sensitivity = this.scrollSensitivity;
		var bounds = this.scrollBounds;
		var topCloseness, bottomCloseness;
		var leftCloseness, rightCloseness;
		var topVel = 0;
		var leftVel = 0;

		if (bounds) { // only scroll if scrollEl exists

			// compute closeness to edges. valid range is from 0.0 - 1.0
			topCloseness = (sensitivity - (getEvY(ev) - bounds.top)) / sensitivity;
			bottomCloseness = (sensitivity - (bounds.bottom - getEvY(ev))) / sensitivity;
			leftCloseness = (sensitivity - (getEvX(ev) - bounds.left)) / sensitivity;
			rightCloseness = (sensitivity - (bounds.right - getEvX(ev))) / sensitivity;

			// translate vertical closeness into velocity.
			// mouse must be completely in bounds for velocity to happen.
			if (topCloseness >= 0 && topCloseness <= 1) {
				topVel = topCloseness * this.scrollSpeed * -1; // negative. for scrolling up
			}
			else if (bottomCloseness >= 0 && bottomCloseness <= 1) {
				topVel = bottomCloseness * this.scrollSpeed;
			}

			// translate horizontal closeness into velocity
			if (leftCloseness >= 0 && leftCloseness <= 1) {
				leftVel = leftCloseness * this.scrollSpeed * -1; // negative. for scrolling left
			}
			else if (rightCloseness >= 0 && rightCloseness <= 1) {
				leftVel = rightCloseness * this.scrollSpeed;
			}
		}

		this.setScrollVel(topVel, leftVel);
	},


	// Sets the speed-of-scrolling for the scrollEl
	setScrollVel: function(topVel, leftVel) {

		this.scrollTopVel = topVel;
		this.scrollLeftVel = leftVel;

		this.constrainScrollVel(); // massages into realistic values

		// if there is non-zero velocity, and an animation loop hasn't already started, then START
		if ((this.scrollTopVel || this.scrollLeftVel) && !this.scrollIntervalId) {
			this.scrollIntervalId = setInterval(
				proxy(this, 'scrollIntervalFunc'), // scope to `this`
				this.scrollIntervalMs
			);
		}
	},


	// Forces scrollTopVel and scrollLeftVel to be zero if scrolling has already gone all the way
	constrainScrollVel: function() {
		var el = this.scrollEl;

		if (this.scrollTopVel < 0) { // scrolling up?
			if (el.scrollTop() <= 0) { // already scrolled all the way up?
				this.scrollTopVel = 0;
			}
		}
		else if (this.scrollTopVel > 0) { // scrolling down?
			if (el.scrollTop() + el[0].clientHeight >= el[0].scrollHeight) { // already scrolled all the way down?
				this.scrollTopVel = 0;
			}
		}

		if (this.scrollLeftVel < 0) { // scrolling left?
			if (el.scrollLeft() <= 0) { // already scrolled all the left?
				this.scrollLeftVel = 0;
			}
		}
		else if (this.scrollLeftVel > 0) { // scrolling right?
			if (el.scrollLeft() + el[0].clientWidth >= el[0].scrollWidth) { // already scrolled all the way right?
				this.scrollLeftVel = 0;
			}
		}
	},


	// This function gets called during every iteration of the scrolling animation loop
	scrollIntervalFunc: function() {
		var el = this.scrollEl;
		var frac = this.scrollIntervalMs / 1000; // considering animation frequency, what the vel should be mult'd by

		// change the value of scrollEl's scroll
		if (this.scrollTopVel) {
			el.scrollTop(el.scrollTop() + this.scrollTopVel * frac);
		}
		if (this.scrollLeftVel) {
			el.scrollLeft(el.scrollLeft() + this.scrollLeftVel * frac);
		}

		this.constrainScrollVel(); // since the scroll values changed, recompute the velocities

		// if scrolled all the way, which causes the vels to be zero, stop the animation loop
		if (!this.scrollTopVel && !this.scrollLeftVel) {
			this.endAutoScroll();
		}
	},


	// Kills any existing scrolling animation loop
	endAutoScroll: function() {
		if (this.scrollIntervalId) {
			clearInterval(this.scrollIntervalId);
			this.scrollIntervalId = null;

			this.handleScrollEnd();
		}
	},


	// Get called when the scrollEl is scrolled (NOTE: this is delayed via debounce)
	handleDebouncedScroll: function() {
		// recompute all coordinates, but *only* if this is *not* part of our scrolling animation
		if (!this.scrollIntervalId) {
			this.handleScrollEnd();
		}
	},


	// Called when scrolling has stopped, whether through auto scroll, or the user scrolling
	handleScrollEnd: function() {
	}

});
;;

/* Tracks mouse movements over a component and raises events about which hit the mouse is over.
------------------------------------------------------------------------------------------------------------------------
options:
- subjectEl
- subjectCenter
*/

var HitDragListener = DragListener.extend({

	component: null, // converts coordinates to hits
		// methods: hitsNeeded, hitsNotNeeded, queryHit

	origHit: null, // the hit the mouse was over when listening started
	hit: null, // the hit the mouse is over
	coordAdjust: null, // delta that will be added to the mouse coordinates when computing collisions


	constructor: function(component, options) {
		DragListener.call(this, options); // call the super-constructor

		this.component = component;
	},


	// Called when drag listening starts (but a real drag has not necessarily began).
	// ev might be undefined if dragging was started manually.
	handleInteractionStart: function(ev) {
		var subjectEl = this.subjectEl;
		var subjectRect;
		var origPoint;
		var point;

		this.component.hitsNeeded();
		this.computeScrollBounds(); // for autoscroll

		if (ev) {
			origPoint = { left: getEvX(ev), top: getEvY(ev) };
			point = origPoint;

			// constrain the point to bounds of the element being dragged
			if (subjectEl) {
				subjectRect = getOuterRect(subjectEl); // used for centering as well
				point = constrainPoint(point, subjectRect);
			}

			this.origHit = this.queryHit(point.left, point.top);

			// treat the center of the subject as the collision point?
			if (subjectEl && this.options.subjectCenter) {

				// only consider the area the subject overlaps the hit. best for large subjects.
				// TODO: skip this if hit didn't supply left/right/top/bottom
				if (this.origHit) {
					subjectRect = intersectRects(this.origHit, subjectRect) ||
						subjectRect; // in case there is no intersection
				}

				point = getRectCenter(subjectRect);
			}

			this.coordAdjust = diffPoints(point, origPoint); // point - origPoint
		}
		else {
			this.origHit = null;
			this.coordAdjust = null;
		}

		// call the super-method. do it after origHit has been computed
		DragListener.prototype.handleInteractionStart.apply(this, arguments);
	},


	// Called when the actual drag has started
	handleDragStart: function(ev) {
		var hit;

		DragListener.prototype.handleDragStart.apply(this, arguments); // call the super-method

		// might be different from this.origHit if the min-distance is large
		hit = this.queryHit(getEvX(ev), getEvY(ev));

		// report the initial hit the mouse is over
		// especially important if no min-distance and drag starts immediately
		if (hit) {
			this.handleHitOver(hit);
		}
	},


	// Called when the drag moves
	handleDrag: function(dx, dy, ev) {
		var hit;

		DragListener.prototype.handleDrag.apply(this, arguments); // call the super-method

		hit = this.queryHit(getEvX(ev), getEvY(ev));

		if (!isHitsEqual(hit, this.hit)) { // a different hit than before?
			if (this.hit) {
				this.handleHitOut();
			}
			if (hit) {
				this.handleHitOver(hit);
			}
		}
	},


	// Called when dragging has been stopped
	handleDragEnd: function() {
		this.handleHitDone();
		DragListener.prototype.handleDragEnd.apply(this, arguments); // call the super-method
	},


	// Called when a the mouse has just moved over a new hit
	handleHitOver: function(hit) {
		var isOrig = isHitsEqual(hit, this.origHit);

		this.hit = hit;

		this.trigger('hitOver', this.hit, isOrig, this.origHit);
	},


	// Called when the mouse has just moved out of a hit
	handleHitOut: function() {
		if (this.hit) {
			this.trigger('hitOut', this.hit);
			this.handleHitDone();
			this.hit = null;
		}
	},


	// Called after a hitOut. Also called before a dragStop
	handleHitDone: function() {
		if (this.hit) {
			this.trigger('hitDone', this.hit);
		}
	},


	// Called when the interaction ends, whether there was a real drag or not
	handleInteractionEnd: function() {
		DragListener.prototype.handleInteractionEnd.apply(this, arguments); // call the super-method

		this.origHit = null;
		this.hit = null;

		this.component.hitsNotNeeded();
	},


	// Called when scrolling has stopped, whether through auto scroll, or the user scrolling
	handleScrollEnd: function() {
		DragListener.prototype.handleScrollEnd.apply(this, arguments); // call the super-method

		// hits' absolute positions will be in new places after a user's scroll.
		// HACK for recomputing.
		if (this.isDragging) {
			this.component.releaseHits();
			this.component.prepareHits();
		}
	},


	// Gets the hit underneath the coordinates for the given mouse event
	queryHit: function(left, top) {

		if (this.coordAdjust) {
			left += this.coordAdjust.left;
			top += this.coordAdjust.top;
		}

		return this.component.queryHit(left, top);
	}

});


// Returns `true` if the hits are identically equal. `false` otherwise. Must be from the same component.
// Two null values will be considered equal, as two "out of the component" states are the same.
function isHitsEqual(hit0, hit1) {

	if (!hit0 && !hit1) {
		return true;
	}

	if (hit0 && hit1) {
		return hit0.component === hit1.component &&
			isHitPropsWithin(hit0, hit1) &&
			isHitPropsWithin(hit1, hit0); // ensures all props are identical
	}

	return false;
}


// Returns true if all of subHit's non-standard properties are within superHit
function isHitPropsWithin(subHit, superHit) {
	for (var propName in subHit) {
		if (!/^(component|left|right|top|bottom)$/.test(propName)) {
			if (subHit[propName] !== superHit[propName]) {
				return false;
			}
		}
	}
	return true;
}

;;

/*
Listens to document and window-level user-interaction events, like touch events and mouse events,
and fires these events as-is to whoever is observing a GlobalEmitter.
Best when used as a singleton via GlobalEmitter.get()

Normalizes mouse/touch events. For examples:
- ignores the the simulated mouse events that happen after a quick tap: mousemove+mousedown+mouseup+click
- compensates for various buggy scenarios where a touchend does not fire
*/

FC.touchMouseIgnoreWait = 500;

var GlobalEmitter = Class.extend(ListenerMixin, EmitterMixin, {

	isTouching: false,
	mouseIgnoreDepth: 0,
	handleScrollProxy: null,


	bind: function() {
		var _this = this;

		this.listenTo($(document), {
			touchstart: this.handleTouchStart,
			touchcancel: this.handleTouchCancel,
			touchend: this.handleTouchEnd,
			mousedown: this.handleMouseDown,
			mousemove: this.handleMouseMove,
			mouseup: this.handleMouseUp,
			click: this.handleClick,
			selectstart: this.handleSelectStart,
			contextmenu: this.handleContextMenu
		});

		// because we need to call preventDefault
		// because https://www.chromestatus.com/features/5093566007214080
		// TODO: investigate performance because this is a global handler
		window.addEventListener(
			'touchmove',
			this.handleTouchMoveProxy = function(ev) {
				_this.handleTouchMove($.Event(ev));
			},
			{ passive: false } // allows preventDefault()
		);

		// attach a handler to get called when ANY scroll action happens on the page.
		// this was impossible to do with normal on/off because 'scroll' doesn't bubble.
		// http://stackoverflow.com/a/32954565/96342
		window.addEventListener(
			'scroll',
			this.handleScrollProxy = function(ev) {
				_this.handleScroll($.Event(ev));
			},
			true // useCapture
		);
	},

	unbind: function() {
		this.stopListeningTo($(document));

		window.removeEventListener(
			'touchmove',
			this.handleTouchMoveProxy
		);

		window.removeEventListener(
			'scroll',
			this.handleScrollProxy,
			true // useCapture
		);
	},


	// Touch Handlers
	// -----------------------------------------------------------------------------------------------------------------

	handleTouchStart: function(ev) {

		// if a previous touch interaction never ended with a touchend, then implicitly end it,
		// but since a new touch interaction is about to begin, don't start the mouse ignore period.
		this.stopTouch(ev, true); // skipMouseIgnore=true

		this.isTouching = true;
		this.trigger('touchstart', ev);
	},

	handleTouchMove: function(ev) {
		if (this.isTouching) {
			this.trigger('touchmove', ev);
		}
	},

	handleTouchCancel: function(ev) {
		if (this.isTouching) {
			this.trigger('touchcancel', ev);

			// Have touchcancel fire an artificial touchend. That way, handlers won't need to listen to both.
			// If touchend fires later, it won't have any effect b/c isTouching will be false.
			this.stopTouch(ev);
		}
	},

	handleTouchEnd: function(ev) {
		this.stopTouch(ev);
	},


	// Mouse Handlers
	// -----------------------------------------------------------------------------------------------------------------

	handleMouseDown: function(ev) {
		if (!this.shouldIgnoreMouse()) {
			this.trigger('mousedown', ev);
		}
	},

	handleMouseMove: function(ev) {
		if (!this.shouldIgnoreMouse()) {
			this.trigger('mousemove', ev);
		}
	},

	handleMouseUp: function(ev) {
		if (!this.shouldIgnoreMouse()) {
			this.trigger('mouseup', ev);
		}
	},

	handleClick: function(ev) {
		if (!this.shouldIgnoreMouse()) {
			this.trigger('click', ev);
		}
	},


	// Misc Handlers
	// -----------------------------------------------------------------------------------------------------------------

	handleSelectStart: function(ev) {
		this.trigger('selectstart', ev);
	},

	handleContextMenu: function(ev) {
		this.trigger('contextmenu', ev);
	},

	handleScroll: function(ev) {
		this.trigger('scroll', ev);
	},


	// Utils
	// -----------------------------------------------------------------------------------------------------------------

	stopTouch: function(ev, skipMouseIgnore) {
		if (this.isTouching) {
			this.isTouching = false;
			this.trigger('touchend', ev);

			if (!skipMouseIgnore) {
				this.startTouchMouseIgnore();
			}
		}
	},

	startTouchMouseIgnore: function() {
		var _this = this;
		var wait = FC.touchMouseIgnoreWait;

		if (wait) {
			this.mouseIgnoreDepth++;
			setTimeout(function() {
				_this.mouseIgnoreDepth--;
			}, wait);
		}
	},

	shouldIgnoreMouse: function() {
		return this.isTouching || Boolean(this.mouseIgnoreDepth);
	}

});


// Singleton
// ---------------------------------------------------------------------------------------------------------------------

(function() {
	var globalEmitter = null;
	var neededCount = 0;


	// gets the singleton
	GlobalEmitter.get = function() {

		if (!globalEmitter) {
			globalEmitter = new GlobalEmitter();
			globalEmitter.bind();
		}

		return globalEmitter;
	};


	// called when an object knows it will need a GlobalEmitter in the near future.
	GlobalEmitter.needed = function() {
		GlobalEmitter.get(); // ensures globalEmitter
		neededCount++;
	};


	// called when the object that originally called needed() doesn't need a GlobalEmitter anymore.
	GlobalEmitter.unneeded = function() {
		neededCount--;

		if (!neededCount) { // nobody else needs it
			globalEmitter.unbind();
			globalEmitter = null;
		}
	};

})();

;;

/* Creates a clone of an element and lets it track the mouse as it moves
----------------------------------------------------------------------------------------------------------------------*/

var MouseFollower = Class.extend(ListenerMixin, {

	options: null,

	sourceEl: null, // the element that will be cloned and made to look like it is dragging
	el: null, // the clone of `sourceEl` that will track the mouse
	parentEl: null, // the element that `el` (the clone) will be attached to

	// the initial position of el, relative to the offset parent. made to match the initial offset of sourceEl
	top0: null,
	left0: null,

	// the absolute coordinates of the initiating touch/mouse action
	y0: null,
	x0: null,

	// the number of pixels the mouse has moved from its initial position
	topDelta: null,
	leftDelta: null,

	isFollowing: false,
	isHidden: false,
	isAnimating: false, // doing the revert animation?

	constructor: function(sourceEl, options) {
		this.options = options = options || {};
		this.sourceEl = sourceEl;
		this.parentEl = options.parentEl ? $(options.parentEl) : sourceEl.parent(); // default to sourceEl's parent
	},


	// Causes the element to start following the mouse
	start: function(ev) {
		if (!this.isFollowing) {
			this.isFollowing = true;

			this.y0 = getEvY(ev);
			this.x0 = getEvX(ev);
			this.topDelta = 0;
			this.leftDelta = 0;

			if (!this.isHidden) {
				this.updatePosition();
			}

			if (getEvIsTouch(ev)) {
				this.listenTo($(document), 'touchmove', this.handleMove);
			}
			else {
				this.listenTo($(document), 'mousemove', this.handleMove);
			}
		}
	},


	// Causes the element to stop following the mouse. If shouldRevert is true, will animate back to original position.
	// `callback` gets invoked when the animation is complete. If no animation, it is invoked immediately.
	stop: function(shouldRevert, callback) {
		var _this = this;
		var revertDuration = this.options.revertDuration;

		function complete() { // might be called by .animate(), which might change `this` context
			_this.isAnimating = false;
			_this.removeElement();

			_this.top0 = _this.left0 = null; // reset state for future updatePosition calls

			if (callback) {
				callback();
			}
		}

		if (this.isFollowing && !this.isAnimating) { // disallow more than one stop animation at a time
			this.isFollowing = false;

			this.stopListeningTo($(document));

			if (shouldRevert && revertDuration && !this.isHidden) { // do a revert animation?
				this.isAnimating = true;
				this.el.animate({
					top: this.top0,
					left: this.left0
				}, {
					duration: revertDuration,
					complete: complete
				});
			}
			else {
				complete();
			}
		}
	},


	// Gets the tracking element. Create it if necessary
	getEl: function() {
		var el = this.el;

		if (!el) {
			el = this.el = this.sourceEl.clone()
				.addClass(this.options.additionalClass || '')
				.css({
					position: 'absolute',
					visibility: '', // in case original element was hidden (commonly through hideEvents())
					display: this.isHidden ? 'none' : '', // for when initially hidden
					margin: 0,
					right: 'auto', // erase and set width instead
					bottom: 'auto', // erase and set height instead
					width: this.sourceEl.width(), // explicit height in case there was a 'right' value
					height: this.sourceEl.height(), // explicit width in case there was a 'bottom' value
					opacity: this.options.opacity || '',
					zIndex: this.options.zIndex
				});

			// we don't want long taps or any mouse interaction causing selection/menus.
			// would use preventSelection(), but that prevents selectstart, causing problems.
			el.addClass('fc-unselectable');

			el.appendTo(this.parentEl);
		}

		return el;
	},


	// Removes the tracking element if it has already been created
	removeElement: function() {
		if (this.el) {
			this.el.remove();
			this.el = null;
		}
	},


	// Update the CSS position of the tracking element
	updatePosition: function() {
		var sourceOffset;
		var origin;

		this.getEl(); // ensure this.el

		// make sure origin info was computed
		if (this.top0 === null) {
			sourceOffset = this.sourceEl.offset();
			origin = this.el.offsetParent().offset();
			this.top0 = sourceOffset.top - origin.top;
			this.left0 = sourceOffset.left - origin.left;
		}

		this.el.css({
			top: this.top0 + this.topDelta,
			left: this.left0 + this.leftDelta
		});
	},


	// Gets called when the user moves the mouse
	handleMove: function(ev) {
		this.topDelta = getEvY(ev) - this.y0;
		this.leftDelta = getEvX(ev) - this.x0;

		if (!this.isHidden) {
			this.updatePosition();
		}
	},


	// Temporarily makes the tracking element invisible. Can be called before following starts
	hide: function() {
		if (!this.isHidden) {
			this.isHidden = true;
			if (this.el) {
				this.el.hide();
			}
		}
	},


	// Show the tracking element after it has been temporarily hidden
	show: function() {
		if (this.isHidden) {
			this.isHidden = false;
			this.updatePosition();
			this.getEl().show();
		}
	}

});

;;

/*
Embodies a div that has potential scrollbars
*/
var Scroller = FC.Scroller = Class.extend({

	el: null, // the guaranteed outer element
	scrollEl: null, // the element with the scrollbars
	overflowX: null,
	overflowY: null,


	constructor: function(options) {
		options = options || {};
		this.overflowX = options.overflowX || options.overflow || 'auto';
		this.overflowY = options.overflowY || options.overflow || 'auto';
	},


	render: function() {
		this.el = this.renderEl();
		this.applyOverflow();
	},


	renderEl: function() {
		return (this.scrollEl = $('<div class="fc-scroller"></div>'));
	},


	// sets to natural height, unlocks overflow
	clear: function() {
		this.setHeight('auto');
		this.applyOverflow();
	},


	destroy: function() {
		this.el.remove();
	},


	// Overflow
	// -----------------------------------------------------------------------------------------------------------------


	applyOverflow: function() {
		this.scrollEl.css({
			'overflow-x': this.overflowX,
			'overflow-y': this.overflowY
		});
	},


	// Causes any 'auto' overflow values to resolves to 'scroll' or 'hidden'.
	// Useful for preserving scrollbar widths regardless of future resizes.
	// Can pass in scrollbarWidths for optimization.
	lockOverflow: function(scrollbarWidths) {
		var overflowX = this.overflowX;
		var overflowY = this.overflowY;

		scrollbarWidths = scrollbarWidths || this.getScrollbarWidths();

		if (overflowX === 'auto') {
			overflowX = (
					scrollbarWidths.top || scrollbarWidths.bottom || // horizontal scrollbars?
					// OR scrolling pane with massless scrollbars?
					this.scrollEl[0].scrollWidth - 1 > this.scrollEl[0].clientWidth
						// subtract 1 because of IE off-by-one issue
				) ? 'scroll' : 'hidden';
		}

		if (overflowY === 'auto') {
			overflowY = (
					scrollbarWidths.left || scrollbarWidths.right || // vertical scrollbars?
					// OR scrolling pane with massless scrollbars?
					this.scrollEl[0].scrollHeight - 1 > this.scrollEl[0].clientHeight
						// subtract 1 because of IE off-by-one issue
				) ? 'scroll' : 'hidden';
		}

		this.scrollEl.css({ 'overflow-x': overflowX, 'overflow-y': overflowY });
	},


	// Getters / Setters
	// -----------------------------------------------------------------------------------------------------------------


	setHeight: function(height) {
		this.scrollEl.height(height);
	},


	getScrollTop: function() {
		return this.scrollEl.scrollTop();
	},


	setScrollTop: function(top) {
		this.scrollEl.scrollTop(top);
	},


	getClientWidth: function() {
		return this.scrollEl[0].clientWidth;
	},


	getClientHeight: function() {
		return this.scrollEl[0].clientHeight;
	},


	getScrollbarWidths: function() {
		return getScrollbarWidths(this.scrollEl);
	}

});

;;
function Iterator(items) {
    this.items = items || [];
}


/* Calls a method on every item passing the arguments through */
Iterator.prototype.proxyCall = function(methodName) {
    var args = Array.prototype.slice.call(arguments, 1);
    var results = [];

    this.items.forEach(function(item) {
        results.push(item[methodName].apply(item, args));
    });

    return results;
};

;;

var Interaction = Class.extend({

	view: null,
	component: null,


	constructor: function(component) {
		this.view = component._getView();
		this.component = component;
	},


	opt: function(name) {
		return this.view.opt(name);
	},


	end: function() {
		// subclasses can implement
	}

});

;;

var DateClicking = Interaction.extend({

	dragListener: null,


	/*
	component must implement:
		- bindDateHandlerToEl
		- getSafeHitFootprint
		- getHitEl
	*/
	constructor: function(component) {
		Interaction.call(this, component);

		this.dragListener = this.buildDragListener();
	},


	end: function() {
		this.dragListener.endInteraction();
	},


	bindToEl: function(el) {
		var component = this.component;
		var dragListener = this.dragListener;

		component.bindDateHandlerToEl(el, 'mousedown', function(ev) {
			if (!component.shouldIgnoreMouse()) {
				dragListener.startInteraction(ev);
			}
		});

		component.bindDateHandlerToEl(el, 'touchstart', function(ev) {
			if (!component.shouldIgnoreTouch()) {
				dragListener.startInteraction(ev);
			}
		});
	},


	// Creates a listener that tracks the user's drag across day elements, for day clicking.
	buildDragListener: function() {
		var _this = this;
		var component = this.component;
		var dayClickHit; // null if invalid dayClick

		var dragListener = new HitDragListener(component, {
			scroll: this.opt('dragScroll'),
			interactionStart: function() {
				dayClickHit = dragListener.origHit;
			},
			hitOver: function(hit, isOrig, origHit) {
				// if user dragged to another cell at any point, it can no longer be a dayClick
				if (!isOrig) {
					dayClickHit = null;
				}
			},
			hitOut: function() { // called before mouse moves to a different hit OR moved out of all hits
				dayClickHit = null;
			},
			interactionEnd: function(ev, isCancelled) {
				var componentFootprint;

				if (!isCancelled && dayClickHit) {
					componentFootprint = component.getSafeHitFootprint(dayClickHit);

					if (componentFootprint) {
						_this.view.triggerDayClick(componentFootprint, component.getHitEl(dayClickHit), ev);
					}
				}
			}
		});

		// because dragListener won't be called with any time delay, "dragging" will begin immediately,
		// which will kill any touchmoving/scrolling. Prevent this.
		dragListener.shouldCancelTouchScroll = false;

		dragListener.scrollAlwaysKills = true;

		return dragListener;
	}

});

;;

var DateSelecting = FC.DateSelecting = Interaction.extend({

	dragListener: null,


	/*
	component must implement:
		- bindDateHandlerToEl
		- getSafeHitFootprint
		- renderHighlight
		- unrenderHighlight
	*/
	constructor: function(component) {
		Interaction.call(this, component);

		this.dragListener = this.buildDragListener();
	},


	end: function() {
		this.dragListener.endInteraction();
	},


	getDelay: function() {
		var delay = this.opt('selectLongPressDelay');

		if (delay == null) {
			delay = this.opt('longPressDelay'); // fallback
		}

		return delay;
	},


	bindToEl: function(el) {
		var _this = this;
		var component = this.component;
		var dragListener = this.dragListener;

		component.bindDateHandlerToEl(el, 'mousedown', function(ev) {
			if (_this.opt('selectable') && !component.shouldIgnoreMouse()) {
				dragListener.startInteraction(ev, {
					distance: _this.opt('selectMinDistance')
				});
			}
		});

		component.bindDateHandlerToEl(el, 'touchstart', function(ev) {
			if (_this.opt('selectable') && !component.shouldIgnoreTouch()) {
				dragListener.startInteraction(ev, {
					delay: _this.getDelay()
				});
			}
		});

		preventSelection(el);
	},


	// Creates a listener that tracks the user's drag across day elements, for day selecting.
	buildDragListener: function() {
		var _this = this;
		var component = this.component;
		var selectionFootprint; // null if invalid selection

		var dragListener = new HitDragListener(component, {
			scroll: this.opt('dragScroll'),
			interactionStart: function() {
				selectionFootprint = null;
			},
			dragStart: function(ev) {
				_this.view.unselect(ev); // since we could be rendering a new selection, we want to clear any old one
			},
			hitOver: function(hit, isOrig, origHit) {
				var origHitFootprint;
				var hitFootprint;

				if (origHit) { // click needs to have started on a hit

					origHitFootprint = component.getSafeHitFootprint(origHit);
					hitFootprint = component.getSafeHitFootprint(hit);

					if (origHitFootprint && hitFootprint) {
						selectionFootprint = _this.computeSelection(origHitFootprint, hitFootprint);
					}
					else {
						selectionFootprint = null;
					}

					if (selectionFootprint) {
						component.renderSelectionFootprint(selectionFootprint);
					}
					else if (selectionFootprint === false) {
						disableCursor();
					}
				}
			},
			hitOut: function() { // called before mouse moves to a different hit OR moved out of all hits
				selectionFootprint = null;
				component.unrenderSelection();
			},
			hitDone: function() { // called after a hitOut OR before a dragEnd
				enableCursor();
			},
			interactionEnd: function(ev, isCancelled) {
				if (!isCancelled && selectionFootprint) {
					// the selection will already have been rendered. just report it
					_this.view.reportSelection(selectionFootprint, ev);
				}
			}
		});

		return dragListener;
	},


	// Given the first and last date-spans of a selection, returns another date-span object.
	// Subclasses can override and provide additional data in the span object. Will be passed to renderSelectionFootprint().
	// Will return false if the selection is invalid and this should be indicated to the user.
	// Will return null/undefined if a selection invalid but no error should be reported.
	computeSelection: function(footprint0, footprint1) {
		var wholeFootprint = this.computeSelectionFootprint(footprint0, footprint1);

		if (wholeFootprint && !this.isSelectionFootprintAllowed(wholeFootprint)) {
			return false;
		}

		return wholeFootprint;
	},


	// Given two spans, must return the combination of the two.
	// TODO: do this separation of concerns (combining VS validation) for event dnd/resize too.
	// Assumes both footprints are non-open-ended.
	computeSelectionFootprint: function(footprint0, footprint1) {
		var ms = [
			footprint0.unzonedRange.startMs,
			footprint0.unzonedRange.endMs,
			footprint1.unzonedRange.startMs,
			footprint1.unzonedRange.endMs
		];

		ms.sort(compareNumbers);

		return new ComponentFootprint(
			new UnzonedRange(ms[0], ms[3]),
			footprint0.isAllDay
		);
	},


	isSelectionFootprintAllowed: function(componentFootprint) {
		return this.component.dateProfile.validUnzonedRange.containsRange(componentFootprint.unzonedRange) &&
			this.view.calendar.isSelectionFootprintAllowed(componentFootprint);
	}

});

;;

var EventDragging = FC.EventDragging = Interaction.extend({

	eventPointing: null,
	dragListener: null,
	isDragging: false,


	/*
	component implements:
		- bindSegHandlerToEl
		- publiclyTrigger
		- diffDates
		- eventRangesToEventFootprints
		- isEventInstanceGroupAllowed
	*/
	constructor: function(component, eventPointing) {
		Interaction.call(this, component);

		this.eventPointing = eventPointing;
	},


	end: function() {
		if (this.dragListener) {
			this.dragListener.endInteraction();
		}
	},


	getSelectionDelay: function() {
		var delay = this.opt('eventLongPressDelay');

		if (delay == null) {
			delay = this.opt('longPressDelay'); // fallback
		}

		return delay;
	},


	bindToEl: function(el) {
		var component = this.component;

		component.bindSegHandlerToEl(el, 'mousedown', this.handleMousedown.bind(this));
		component.bindSegHandlerToEl(el, 'touchstart', this.handleTouchStart.bind(this));
	},


	handleMousedown: function(seg, ev) {
		if (this.component.canStartDrag(seg, ev)) {
			this.buildDragListener(seg).startInteraction(ev, { distance: 5 });
		}
	},


	handleTouchStart: function(seg, ev) {
		var component = this.component;
		var settings = {
			delay: this.view.isEventDefSelected(seg.footprint.eventDef) ? // already selected?
				0 : this.getSelectionDelay()
		};

		if (component.canStartDrag(seg, ev)) {
			this.buildDragListener(seg).startInteraction(ev, settings);
		}
		else if (component.canStartSelection(seg, ev)) {
			this.buildSelectListener(seg).startInteraction(ev, settings);
		}
	},


	// seg isn't draggable, but let's use a generic DragListener
	// simply for the delay, so it can be selected.
	// Has side effect of setting/unsetting `dragListener`
	buildSelectListener: function(seg) {
		var _this = this;
		var view = this.view;
		var eventDef = seg.footprint.eventDef;
		var eventInstance = seg.footprint.eventInstance; // null for inverse-background events

		if (this.dragListener) {
			return this.dragListener;
		}

		var dragListener = this.dragListener = new DragListener({
			dragStart: function(ev) {
				if (
					dragListener.isTouch &&
					!view.isEventDefSelected(eventDef) &&
					eventInstance
				) {
					// if not previously selected, will fire after a delay. then, select the event
					view.selectEventInstance(eventInstance);
				}
			},
			interactionEnd: function(ev) {
				_this.dragListener = null;
			}
		});

		return dragListener;
	},


	// Builds a listener that will track user-dragging on an event segment.
	// Generic enough to work with any type of Grid.
	// Has side effect of setting/unsetting `dragListener`
	buildDragListener: function(seg) {
		var _this = this;
		var component = this.component;
		var view = this.view;
		var calendar = view.calendar;
		var eventManager = calendar.eventManager;
		var el = seg.el;
		var eventDef = seg.footprint.eventDef;
		var eventInstance = seg.footprint.eventInstance; // null for inverse-background events
		var isDragging;
		var mouseFollower; // A clone of the original element that will move with the mouse
		var eventDefMutation;

		if (this.dragListener) {
			return this.dragListener;
		}

		// Tracks mouse movement over the *view's* coordinate map. Allows dragging and dropping between subcomponents
		// of the view.
		var dragListener = this.dragListener = new HitDragListener(view, {
			scroll: this.opt('dragScroll'),
			subjectEl: el,
			subjectCenter: true,
			interactionStart: function(ev) {
				seg.component = component; // for renderDrag
				isDragging = false;
				mouseFollower = new MouseFollower(seg.el, {
					additionalClass: 'fc-dragging',
					parentEl: view.el,
					opacity: dragListener.isTouch ? null : _this.opt('dragOpacity'),
					revertDuration: _this.opt('dragRevertDuration'),
					zIndex: 2 // one above the .fc-view
				});
				mouseFollower.hide(); // don't show until we know this is a real drag
				mouseFollower.start(ev);
			},
			dragStart: function(ev) {
				if (
					dragListener.isTouch &&
					!view.isEventDefSelected(eventDef) &&
					eventInstance
				) {
					// if not previously selected, will fire after a delay. then, select the event
					view.selectEventInstance(eventInstance);
				}
				isDragging = true;

				// ensure a mouseout on the manipulated event has been reported
				_this.eventPointing.handleMouseout(seg, ev);

				_this.segDragStart(seg, ev);
				view.hideEventsWithId(seg.footprint.eventDef.id);
			},
			hitOver: function(hit, isOrig, origHit) {
				var isAllowed = true;
				var origFootprint;
				var footprint;
				var mutatedEventInstanceGroup;

				// starting hit could be forced (DayGrid.limit)
				if (seg.hit) {
					origHit = seg.hit;
				}

				// hit might not belong to this grid, so query origin grid
				origFootprint = origHit.component.getSafeHitFootprint(origHit);
				footprint = hit.component.getSafeHitFootprint(hit);

				if (origFootprint && footprint) {
					eventDefMutation = _this.computeEventDropMutation(origFootprint, footprint, eventDef);

					if (eventDefMutation) {
						mutatedEventInstanceGroup = eventManager.buildMutatedEventInstanceGroup(
							eventDef.id,
							eventDefMutation
						);
						isAllowed = component.isEventInstanceGroupAllowed(mutatedEventInstanceGroup);
					}
					else {
						isAllowed = false;
					}
				}
				else {
					isAllowed = false;
				}

				if (!isAllowed) {
					eventDefMutation = null;
					disableCursor();
				}

				// if a valid drop location, have the subclass render a visual indication
				if (
					eventDefMutation &&
					view.renderDrag( // truthy if rendered something
						component.eventRangesToEventFootprints(
							mutatedEventInstanceGroup.sliceRenderRanges(component.dateProfile.renderUnzonedRange, calendar)
						),
						seg,
						dragListener.isTouch
					)
				) {
					mouseFollower.hide(); // if the subclass is already using a mock event "helper", hide our own
				}
				else {
					mouseFollower.show(); // otherwise, have the helper follow the mouse (no snapping)
				}

				if (isOrig) {
					// needs to have moved hits to be a valid drop
					eventDefMutation = null;
				}
			},
			hitOut: function() { // called before mouse moves to a different hit OR moved out of all hits
				view.unrenderDrag(seg); // unrender whatever was done in renderDrag
				mouseFollower.show(); // show in case we are moving out of all hits
				eventDefMutation = null;
			},
			hitDone: function() { // Called after a hitOut OR before a dragEnd
				enableCursor();
			},
			interactionEnd: function(ev) {
				delete seg.component; // prevent side effects

				// do revert animation if hasn't changed. calls a callback when finished (whether animation or not)
				mouseFollower.stop(!eventDefMutation, function() {
					if (isDragging) {
						view.unrenderDrag(seg);
						_this.segDragStop(seg, ev);
					}

					view.showEventsWithId(seg.footprint.eventDef.id);

					if (eventDefMutation) {
						// no need to re-show original, will rerender all anyways. esp important if eventRenderWait
						view.reportEventDrop(eventInstance, eventDefMutation, el, ev);
					}
				});

				_this.dragListener = null;
			}
		});

		return dragListener;
	},


	// Called before event segment dragging starts
	segDragStart: function(seg, ev) {
		this.isDragging = true;
		this.component.publiclyTrigger('eventDragStart', {
			context: seg.el[0],
			args: [
				seg.footprint.getEventLegacy(),
				ev,
				{}, // jqui dummy
				this.view
			]
		});
	},


	// Called after event segment dragging stops
	segDragStop: function(seg, ev) {
		this.isDragging = false;
		this.component.publiclyTrigger('eventDragStop', {
			context: seg.el[0],
			args: [
				seg.footprint.getEventLegacy(),
				ev,
				{}, // jqui dummy
				this.view
			]
		});
	},


	// DOES NOT consider overlap/constraint
	computeEventDropMutation: function(startFootprint, endFootprint, eventDef) {
		var eventDefMutation = new EventDefMutation();

		eventDefMutation.setDateMutation(
			this.computeEventDateMutation(startFootprint, endFootprint)
		);

		return eventDefMutation;
	},


	computeEventDateMutation: function(startFootprint, endFootprint) {
		var date0 = startFootprint.unzonedRange.getStart();
		var date1 = endFootprint.unzonedRange.getStart();
		var clearEnd = false;
		var forceTimed = false;
		var forceAllDay = false;
		var dateDelta;
		var dateMutation;

		if (startFootprint.isAllDay !== endFootprint.isAllDay) {
			clearEnd = true;

			if (endFootprint.isAllDay) {
				forceAllDay = true;
				date0.stripTime();
			}
			else {
				forceTimed = true;
			}
		}

		dateDelta = this.component.diffDates(date1, date0);

		dateMutation = new EventDefDateMutation();
		dateMutation.clearEnd = clearEnd;
		dateMutation.forceTimed = forceTimed;
		dateMutation.forceAllDay = forceAllDay;
		dateMutation.setDateDelta(dateDelta);

		return dateMutation;
	}

});

;;

var EventResizing = FC.EventResizing = Interaction.extend({

	eventPointing: null,
	dragListener: null,
	isResizing: false,


	/*
	component impements:
		- bindSegHandlerToEl
		- publiclyTrigger
		- diffDates
		- eventRangesToEventFootprints
		- isEventInstanceGroupAllowed
		- getSafeHitFootprint
	*/


	constructor: function(component, eventPointing) {
		Interaction.call(this, component);

		this.eventPointing = eventPointing;
	},


	end: function() {
		if (this.dragListener) {
			this.dragListener.endInteraction();
		}
	},


	bindToEl: function(el) {
		var component = this.component;

		component.bindSegHandlerToEl(el, 'mousedown', this.handleMouseDown.bind(this));
		component.bindSegHandlerToEl(el, 'touchstart', this.handleTouchStart.bind(this));
	},


	handleMouseDown: function(seg, ev) {
		if (this.component.canStartResize(seg, ev)) {
			this.buildDragListener(seg, $(ev.target).is('.fc-start-resizer'))
				.startInteraction(ev, { distance: 5 });
		}
	},


	handleTouchStart: function(seg, ev) {
		if (this.component.canStartResize(seg, ev)) {
			this.buildDragListener(seg, $(ev.target).is('.fc-start-resizer'))
				.startInteraction(ev);
		}
	},


	// Creates a listener that tracks the user as they resize an event segment.
	// Generic enough to work with any type of Grid.
	buildDragListener: function(seg, isStart) {
		var _this = this;
		var component = this.component;
		var view = this.view;
		var calendar = view.calendar;
		var eventManager = calendar.eventManager;
		var el = seg.el;
		var eventDef = seg.footprint.eventDef;
		var eventInstance = seg.footprint.eventInstance;
		var isDragging;
		var resizeMutation; // zoned event date properties. falsy if invalid resize

		// Tracks mouse movement over the *grid's* coordinate map
		var dragListener = this.dragListener = new HitDragListener(component, {
			scroll: this.opt('dragScroll'),
			subjectEl: el,
			interactionStart: function() {
				isDragging = false;
			},
			dragStart: function(ev) {
				isDragging = true;

				// ensure a mouseout on the manipulated event has been reported
				_this.eventPointing.handleMouseout(seg, ev);

				_this.segResizeStart(seg, ev);
			},
			hitOver: function(hit, isOrig, origHit) {
				var isAllowed = true;
				var origHitFootprint = component.getSafeHitFootprint(origHit);
				var hitFootprint = component.getSafeHitFootprint(hit);
				var mutatedEventInstanceGroup;

				if (origHitFootprint && hitFootprint) {
					resizeMutation = isStart ?
						_this.computeEventStartResizeMutation(origHitFootprint, hitFootprint, seg.footprint) :
						_this.computeEventEndResizeMutation(origHitFootprint, hitFootprint, seg.footprint);

					if (resizeMutation) {
						mutatedEventInstanceGroup = eventManager.buildMutatedEventInstanceGroup(
							eventDef.id,
							resizeMutation
						);
						isAllowed = component.isEventInstanceGroupAllowed(mutatedEventInstanceGroup);
					}
					else {
						isAllowed = false;
					}
				}
				else {
					isAllowed = false;
				}

				if (!isAllowed) {
					resizeMutation = null;
					disableCursor();
				}
				else if (resizeMutation.isEmpty()) {
					// no change. (FYI, event dates might have zones)
					resizeMutation = null;
				}

				if (resizeMutation) {
					view.hideEventsWithId(seg.footprint.eventDef.id);
					view.renderEventResize(
						component.eventRangesToEventFootprints(
							mutatedEventInstanceGroup.sliceRenderRanges(component.dateProfile.renderUnzonedRange, calendar)
						),
						seg
					);
				}
			},
			hitOut: function() { // called before mouse moves to a different hit OR moved out of all hits
				resizeMutation = null;
			},
			hitDone: function() { // resets the rendering to show the original event
				view.unrenderEventResize(seg);
				view.showEventsWithId(seg.footprint.eventDef.id);
				enableCursor();
			},
			interactionEnd: function(ev) {
				if (isDragging) {
					_this.segResizeStop(seg, ev);
				}

				if (resizeMutation) { // valid date to resize to?
					// no need to re-show original, will rerender all anyways. esp important if eventRenderWait
					view.reportEventResize(eventInstance, resizeMutation, el, ev);
				}

				_this.dragListener = null;
			}
		});

		return dragListener;
	},


	// Called before event segment resizing starts
	segResizeStart: function(seg, ev) {
		this.isResizing = true;
		this.component.publiclyTrigger('eventResizeStart', {
			context: seg.el[0],
			args: [
				seg.footprint.getEventLegacy(),
				ev,
				{}, // jqui dummy
				this.view
			]
		});
	},


	// Called after event segment resizing stops
	segResizeStop: function(seg, ev) {
		this.isResizing = false;
		this.component.publiclyTrigger('eventResizeStop', {
			context: seg.el[0],
			args: [
				seg.footprint.getEventLegacy(),
				ev,
				{}, // jqui dummy
				this.view
			]
		});
	},


	// Returns new date-information for an event segment being resized from its start
	computeEventStartResizeMutation: function(startFootprint, endFootprint, origEventFootprint) {
		var origRange = origEventFootprint.componentFootprint.unzonedRange;
		var startDelta = this.component.diffDates(
			endFootprint.unzonedRange.getStart(),
			startFootprint.unzonedRange.getStart()
		);
		var dateMutation;
		var eventDefMutation;

		if (origRange.getStart().add(startDelta) < origRange.getEnd()) {

			dateMutation = new EventDefDateMutation();
			dateMutation.setStartDelta(startDelta);

			eventDefMutation = new EventDefMutation();
			eventDefMutation.setDateMutation(dateMutation);

			return eventDefMutation;
		}

		return false;
	},


	// Returns new date-information for an event segment being resized from its end
	computeEventEndResizeMutation: function(startFootprint, endFootprint, origEventFootprint) {
		var origRange = origEventFootprint.componentFootprint.unzonedRange;
		var endDelta = this.component.diffDates(
			endFootprint.unzonedRange.getEnd(),
			startFootprint.unzonedRange.getEnd()
		);
		var dateMutation;
		var eventDefMutation;

		if (origRange.getEnd().add(endDelta) > origRange.getStart()) {

			dateMutation = new EventDefDateMutation();
			dateMutation.setEndDelta(endDelta);

			eventDefMutation = new EventDefMutation();
			eventDefMutation.setDateMutation(dateMutation);

			return eventDefMutation;
		}

		return false;
	}

});

;;

var ExternalDropping = FC.ExternalDropping = Interaction.extend(ListenerMixin, {

	dragListener: null,
	isDragging: false, // jqui-dragging an external element? boolean


	/*
	component impements:
		- eventRangesToEventFootprints
		- isEventInstanceGroupAllowed
		- isExternalInstanceGroupAllowed
		- renderDrag
		- unrenderDrag
	*/


	end: function() {
		if (this.dragListener) {
			this.dragListener.endInteraction();
		}
	},


	bindToDocument: function() {
		this.listenTo($(document), {
			dragstart: this.handleDragStart, // jqui
			sortstart: this.handleDragStart // jqui
		});
	},


	unbindFromDocument: function() {
		this.stopListeningTo($(document));
	},


	// Called when a jQuery UI drag is initiated anywhere in the DOM
	handleDragStart: function(ev, ui) {
		var el;
		var accept;

		if (this.opt('droppable')) { // only listen if this setting is on
			el = $((ui ? ui.item : null) || ev.target);

			// Test that the dragged element passes the dropAccept selector or filter function.
			// FYI, the default is "*" (matches all)
			accept = this.opt('dropAccept');
			if ($.isFunction(accept) ? accept.call(el[0], el) : el.is(accept)) {
				if (!this.isDragging) { // prevent double-listening if fired twice
					this.listenToExternalDrag(el, ev, ui);
				}
			}
		}
	},


	// Called when a jQuery UI drag starts and it needs to be monitored for dropping
	listenToExternalDrag: function(el, ev, ui) {
		var _this = this;
		var component = this.component;
		var view = this.view;
		var meta = getDraggedElMeta(el); // extra data about event drop, including possible event to create
		var singleEventDef; // a null value signals an unsuccessful drag

		// listener that tracks mouse movement over date-associated pixel regions
		var dragListener = _this.dragListener = new HitDragListener(component, {
			interactionStart: function() {
				_this.isDragging = true;
			},
			hitOver: function(hit) {
				var isAllowed = true;
				var hitFootprint = hit.component.getSafeHitFootprint(hit); // hit might not belong to this grid
				var mutatedEventInstanceGroup;

				if (hitFootprint) {
					singleEventDef = _this.computeExternalDrop(hitFootprint, meta);

					if (singleEventDef) {
						mutatedEventInstanceGroup = new EventInstanceGroup(
							singleEventDef.buildInstances()
						);
						isAllowed = meta.eventProps ? // isEvent?
							component.isEventInstanceGroupAllowed(mutatedEventInstanceGroup) :
							component.isExternalInstanceGroupAllowed(mutatedEventInstanceGroup);
					}
					else {
						isAllowed = false;
					}
				}
				else {
					isAllowed = false;
				}

				if (!isAllowed) {
					singleEventDef = null;
					disableCursor();
				}

				if (singleEventDef) {
					component.renderDrag( // called without a seg parameter
						component.eventRangesToEventFootprints(
							mutatedEventInstanceGroup.sliceRenderRanges(component.dateProfile.renderUnzonedRange, view.calendar)
						)
					);
				}
			},
			hitOut: function() {
				singleEventDef = null; // signal unsuccessful
			},
			hitDone: function() { // Called after a hitOut OR before a dragEnd
				enableCursor();
				component.unrenderDrag();
			},
			interactionEnd: function(ev) {

				if (singleEventDef) { // element was dropped on a valid hit
					view.reportExternalDrop(
						singleEventDef,
						Boolean(meta.eventProps), // isEvent
						Boolean(meta.stick), // isSticky
						el, ev, ui
					);
				}

				_this.isDragging = false;
				_this.dragListener = null;
			}
		});

		dragListener.startDrag(ev); // start listening immediately
	},


	// Given a hit to be dropped upon, and misc data associated with the jqui drag (guaranteed to be a plain object),
	// returns the zoned start/end dates for the event that would result from the hypothetical drop. end might be null.
	// Returning a null value signals an invalid drop hit.
	// DOES NOT consider overlap/constraint.
	// Assumes both footprints are non-open-ended.
	computeExternalDrop: function(componentFootprint, meta) {
		var calendar = this.view.calendar;
		var start = FC.moment.utc(componentFootprint.unzonedRange.startMs).stripZone();
		var end;
		var eventDef;

		if (componentFootprint.isAllDay) {
			// if dropped on an all-day span, and element's metadata specified a time, set it
			if (meta.startTime) {
				start.time(meta.startTime);
			}
			else {
				start.stripTime();
			}
		}

		if (meta.duration) {
			end = start.clone().add(meta.duration);
		}

		start = calendar.applyTimezone(start);

		if (end) {
			end = calendar.applyTimezone(end);
		}

		eventDef = SingleEventDef.parse(
			$.extend({}, meta.eventProps, {
				start: start,
				end: end
			}),
			new EventSource(calendar)
		);

		return eventDef;
	}

});


/* External-Dragging-Element Data
----------------------------------------------------------------------------------------------------------------------*/

// Require all HTML5 data-* attributes used by FullCalendar to have this prefix.
// A value of '' will query attributes like data-event. A value of 'fc' will query attributes like data-fc-event.
FC.dataAttrPrefix = '';

// Given a jQuery element that might represent a dragged FullCalendar event, returns an intermediate data structure
// to be used for Event Object creation.
// A defined `.eventProps`, even when empty, indicates that an event should be created.
function getDraggedElMeta(el) {
	var prefix = FC.dataAttrPrefix;
	var eventProps; // properties for creating the event, not related to date/time
	var startTime; // a Duration
	var duration;
	var stick;

	if (prefix) { prefix += '-'; }
	eventProps = el.data(prefix + 'event') || null;

	if (eventProps) {
		if (typeof eventProps === 'object') {
			eventProps = $.extend({}, eventProps); // make a copy
		}
		else { // something like 1 or true. still signal event creation
			eventProps = {};
		}

		// pluck special-cased date/time properties
		startTime = eventProps.start;
		if (startTime == null) { startTime = eventProps.time; } // accept 'time' as well
		duration = eventProps.duration;
		stick = eventProps.stick;
		delete eventProps.start;
		delete eventProps.time;
		delete eventProps.duration;
		delete eventProps.stick;
	}

	// fallback to standalone attribute values for each of the date/time properties
	if (startTime == null) { startTime = el.data(prefix + 'start'); }
	if (startTime == null) { startTime = el.data(prefix + 'time'); } // accept 'time' as well
	if (duration == null) { duration = el.data(prefix + 'duration'); }
	if (stick == null) { stick = el.data(prefix + 'stick'); }

	// massage into correct data types
	startTime = startTime != null ? moment.duration(startTime) : null;
	duration = duration != null ? moment.duration(duration) : null;
	stick = Boolean(stick);

	return { eventProps: eventProps, startTime: startTime, duration: duration, stick: stick };
}

;;

var EventPointing = FC.EventPointing = Interaction.extend({

	mousedOverSeg: null, // the segment object the user's mouse is over. null if over nothing


	/*
	component must implement:
		- publiclyTrigger
	*/


	bindToEl: function(el) {
		var component = this.component;

		component.bindSegHandlerToEl(el, 'click', this.handleClick.bind(this));
		component.bindSegHandlerToEl(el, 'mouseenter', this.handleMouseover.bind(this));
		component.bindSegHandlerToEl(el, 'mouseleave', this.handleMouseout.bind(this));
	},


	handleClick: function(seg, ev) {
		var res = this.component.publiclyTrigger('eventClick', { // can return `false` to cancel
			context: seg.el[0],
			args: [ seg.footprint.getEventLegacy(), ev, this.view ]
		});

		if (res === false) {
			ev.preventDefault();
		}
	},


	// Updates internal state and triggers handlers for when an event element is moused over
	handleMouseover: function(seg, ev) {
		if (
			!GlobalEmitter.get().shouldIgnoreMouse() &&
			!this.mousedOverSeg
		) {
			this.mousedOverSeg = seg;

			// TODO: move to EventSelecting's responsibility
			if (this.view.isEventDefResizable(seg.footprint.eventDef)) {
				seg.el.addClass('fc-allow-mouse-resize');
			}

			this.component.publiclyTrigger('eventMouseover', {
				context: seg.el[0],
				args: [ seg.footprint.getEventLegacy(), ev, this.view ]
			});
		}
	},


	// Updates internal state and triggers handlers for when an event element is moused out.
	// Can be given no arguments, in which case it will mouseout the segment that was previously moused over.
	handleMouseout: function(seg, ev) {
		if (this.mousedOverSeg) {
			this.mousedOverSeg = null;

			// TODO: move to EventSelecting's responsibility
			if (this.view.isEventDefResizable(seg.footprint.eventDef)) {
				seg.el.removeClass('fc-allow-mouse-resize');
			}

			this.component.publiclyTrigger('eventMouseout', {
				context: seg.el[0],
				args: [
					seg.footprint.getEventLegacy(),
					ev || {}, // if given no arg, make a mock mouse event
					this.view
				]
			});
		}
	},


	end: function() {
		if (this.mousedOverSeg) {
			this.handleMouseout(this.mousedOverSeg);
		}
	}

});

;;

var StandardInteractionsMixin = FC.StandardInteractionsMixin = {
	dateClickingClass: DateClicking,
	dateSelectingClass: DateSelecting,
	eventPointingClass: EventPointing,
	eventDraggingClass: EventDragging,
	eventResizingClass: EventResizing,
	externalDroppingClass: ExternalDropping
};

;;

var EventRenderer = FC.EventRenderer = Class.extend({

	view: null,
	component: null,
	fillRenderer: null, // might remain null

	fgSegs: null,
	bgSegs: null,

	// derived from options
	eventTimeFormat: null,
	displayEventTime: null,
	displayEventEnd: null,


	constructor: function(component, fillRenderer) { // fillRenderer is optional
		this.view = component._getView();
		this.component = component;
		this.fillRenderer = fillRenderer;
	},


	opt: function(name) {
		return this.view.opt(name);
	},


	// Updates values that rely on options and also relate to range
	rangeUpdated: function() {
		var displayEventTime;
		var displayEventEnd;

		this.eventTimeFormat =
			this.opt('eventTimeFormat') ||
			this.opt('timeFormat') || // deprecated
			this.computeEventTimeFormat();

		displayEventTime = this.opt('displayEventTime');
		if (displayEventTime == null) {
			displayEventTime = this.computeDisplayEventTime(); // might be based off of range
		}

		displayEventEnd = this.opt('displayEventEnd');
		if (displayEventEnd == null) {
			displayEventEnd = this.computeDisplayEventEnd(); // might be based off of range
		}

		this.displayEventTime = displayEventTime;
		this.displayEventEnd = displayEventEnd;
	},


	render: function(eventsPayload) {
		var dateProfile = this.component._getDateProfile();
		var eventDefId;
		var instanceGroup;
		var eventRanges;
		var bgRanges = [];
		var fgRanges = [];

		for (eventDefId in eventsPayload) {
			instanceGroup = eventsPayload[eventDefId];

			eventRanges = instanceGroup.sliceRenderRanges(
				dateProfile.activeUnzonedRange
			);

			if (instanceGroup.getEventDef().hasBgRendering()) {
				bgRanges.push.apply(bgRanges, eventRanges);
			}
			else {
				fgRanges.push.apply(fgRanges, eventRanges);
			}
		}

		this.renderBgRanges(bgRanges);
		this.renderFgRanges(fgRanges);
	},


	unrender: function() {
		this.unrenderBgRanges();
		this.unrenderFgRanges();
	},


	renderFgRanges: function(eventRanges) {
		var eventFootprints = this.component.eventRangesToEventFootprints(eventRanges);
		var segs = this.component.eventFootprintsToSegs(eventFootprints);

		// render an `.el` on each seg
		// returns a subset of the segs. segs that were actually rendered
		segs = this.renderFgSegEls(segs);

		if (this.renderFgSegs(segs) !== false) { // no failure?
			this.fgSegs = segs;
		}
	},


	unrenderFgRanges: function() {
		this.unrenderFgSegs(this.fgSegs || []);
		this.fgSegs = null;
	},


	renderBgRanges: function(eventRanges) {
		var eventFootprints = this.component.eventRangesToEventFootprints(eventRanges);
		var segs = this.component.eventFootprintsToSegs(eventFootprints);

		if (this.renderBgSegs(segs) !== false) { // no failure?
			this.bgSegs = segs;
		}
	},


	unrenderBgRanges: function() {
		this.unrenderBgSegs();
		this.bgSegs = null;
	},


	getSegs: function() {
		return (this.bgSegs || []).concat(this.fgSegs || []);
	},


	// Renders foreground event segments onto the grid
	renderFgSegs: function(segs) {
		// subclasses must implement
		// segs already has rendered els, and has been filtered.

		return false; // signal failure if not implemented
	},


	// Unrenders all currently rendered foreground segments
	unrenderFgSegs: function(segs) {
		// subclasses must implement
	},


	renderBgSegs: function(segs) {
		var _this = this;

		if (this.fillRenderer) {
			this.fillRenderer.renderSegs('bgEvent', segs, {
				getClasses: function(seg) {
					return _this.getBgClasses(seg.footprint.eventDef);
				},
				getCss: function(seg) {
					return {
						'background-color': _this.getBgColor(seg.footprint.eventDef)
					};
				},
				filterEl: function(seg, el) {
					return _this.filterEventRenderEl(seg.footprint, el);
				}
			});
		}
		else {
			return false; // signal failure if no fillRenderer
		}
	},


	unrenderBgSegs: function() {
		if (this.fillRenderer) {
			this.fillRenderer.unrender('bgEvent');
		}
	},


	// Renders and assigns an `el` property for each foreground event segment.
	// Only returns segments that successfully rendered.
	renderFgSegEls: function(segs, disableResizing) {
		var _this = this;
		var hasEventRenderHandlers = this.view.hasPublicHandlers('eventRender');
		var html = '';
		var renderedSegs = [];
		var i;

		if (segs.length) { // don't build an empty html string

			// build a large concatenation of event segment HTML
			for (i = 0; i < segs.length; i++) {
				this.beforeFgSegHtml(segs[i]);
				html += this.fgSegHtml(segs[i], disableResizing);
			}

			// Grab individual elements from the combined HTML string. Use each as the default rendering.
			// Then, compute the 'el' for each segment. An el might be null if the eventRender callback returned false.
			$(html).each(function(i, node) {
				var seg = segs[i];
				var el = $(node);

				if (hasEventRenderHandlers) { // optimization
					el = _this.filterEventRenderEl(seg.footprint, el);
				}

				if (el) {
					el.data('fc-seg', seg); // used by handlers
					seg.el = el;
					renderedSegs.push(seg);
				}
			});
		}

		return renderedSegs;
	},


	beforeFgSegHtml: function(seg) { // hack
	},


	// Generates the HTML for the default rendering of a foreground event segment. Used by renderFgSegEls()
	fgSegHtml: function(seg, disableResizing) {
		// subclasses should implement
	},


	// Generic utility for generating the HTML classNames for an event segment's element
	getSegClasses: function(seg, isDraggable, isResizable) {
		var classes = [
			'fc-event',
			seg.isStart ? 'fc-start' : 'fc-not-start',
			seg.isEnd ? 'fc-end' : 'fc-not-end'
		].concat(this.getClasses(seg.footprint.eventDef));

		if (isDraggable) {
			classes.push('fc-draggable');
		}
		if (isResizable) {
			classes.push('fc-resizable');
		}

		// event is currently selected? attach a className.
		if (this.view.isEventDefSelected(seg.footprint.eventDef)) {
			classes.push('fc-selected');
		}

		return classes;
	},


	// Given an event and the default element used for rendering, returns the element that should actually be used.
	// Basically runs events and elements through the eventRender hook.
	filterEventRenderEl: function(eventFootprint, el) {
		var legacy = eventFootprint.getEventLegacy();

		var custom = this.view.publiclyTrigger('eventRender', {
			context: legacy,
			args: [ legacy, el, this.view ]
		});

		if (custom === false) { // means don't render at all
			el = null;
		}
		else if (custom && custom !== true) {
			el = $(custom);
		}

		return el;
	},


	// Compute the text that should be displayed on an event's element.
	// `range` can be the Event object itself, or something range-like, with at least a `start`.
	// If event times are disabled, or the event has no time, will return a blank string.
	// If not specified, formatStr will default to the eventTimeFormat setting,
	// and displayEnd will default to the displayEventEnd setting.
	getTimeText: function(eventFootprint, formatStr, displayEnd) {
		return this._getTimeText(
			eventFootprint.eventInstance.dateProfile.start,
			eventFootprint.eventInstance.dateProfile.end,
			eventFootprint.componentFootprint.isAllDay,
			formatStr,
			displayEnd
		);
	},


	_getTimeText: function(start, end, isAllDay, formatStr, displayEnd) {
		if (formatStr == null) {
			formatStr = this.eventTimeFormat;
		}

		if (displayEnd == null) {
			displayEnd = this.displayEventEnd;
		}

		if (this.displayEventTime && !isAllDay) {
			if (displayEnd && end) {
				return this.view.formatRange(
					{ start: start, end: end },
					false, // allDay
					formatStr
				);
			}
			else {
				return start.format(formatStr);
			}
		}

		return '';
	},


	computeEventTimeFormat: function() {
		return this.opt('smallTimeFormat');
	},


	computeDisplayEventTime: function() {
		return true;
	},


	computeDisplayEventEnd: function() {
		return true;
	},


	getBgClasses: function(eventDef) {
		var classNames = this.getClasses(eventDef);
		classNames.push('fc-bgevent');
		return classNames;
	},


	getClasses: function(eventDef) {
		var objs = this.getStylingObjs(eventDef);
		var i;
		var classNames = [];

		for (i = 0; i < objs.length; i++) {
			classNames.push.apply( // append
				classNames,
				objs[i].eventClassName || objs[i].className || []
			);
		}

		return classNames;
	},


	// Utility for generating event skin-related CSS properties
	getSkinCss: function(eventDef) {
		return {
			'background-color': this.getBgColor(eventDef),
			'border-color': this.getBorderColor(eventDef),
			color: this.getTextColor(eventDef)
		};
	},


	// Queries for caller-specified color, then falls back to default
	getBgColor: function(eventDef) {
		var objs = this.getStylingObjs(eventDef);
		var i;
		var val;

		for (i = 0; i < objs.length && !val; i++) {
			val = objs[i].eventBackgroundColor || objs[i].eventColor ||
				objs[i].backgroundColor || objs[i].color;
		}

		if (!val) {
			val = this.opt('eventBackgroundColor') || this.opt('eventColor');
		}

		return val;
	},


	// Queries for caller-specified color, then falls back to default
	getBorderColor: function(eventDef) {
		var objs = this.getStylingObjs(eventDef);
		var i;
		var val;

		for (i = 0; i < objs.length && !val; i++) {
			val = objs[i].eventBorderColor || objs[i].eventColor ||
				objs[i].borderColor || objs[i].color;
		}

		if (!val) {
			val = this.opt('eventBorderColor') || this.opt('eventColor');
		}

		return val;
	},


	// Queries for caller-specified color, then falls back to default
	getTextColor: function(eventDef) {
		var objs = this.getStylingObjs(eventDef);
		var i;
		var val;

		for (i = 0; i < objs.length && !val; i++) {
			val = objs[i].eventTextColor ||
				objs[i].textColor;
		}

		if (!val) {
			val = this.opt('eventTextColor');
		}

		return val;
	},


	getStylingObjs: function(eventDef) {
		var objs = this.getFallbackStylingObjs(eventDef);
		objs.unshift(eventDef);
		return objs;
	},


	getFallbackStylingObjs: function(eventDef) {
		return [ eventDef.source ];
	},


	sortEventSegs: function(segs) {
		segs.sort(proxy(this, 'compareEventSegs'));
	},


	// A cmp function for determining which segments should take visual priority
	compareEventSegs: function(seg1, seg2) {
		var f1 = seg1.footprint.componentFootprint;
		var r1 = f1.unzonedRange;
		var f2 = seg2.footprint.componentFootprint;
		var r2 = f2.unzonedRange;

		return r1.startMs - r2.startMs || // earlier events go first
			(r2.endMs - r2.startMs) - (r1.endMs - r1.startMs) || // tie? longer events go first
			f2.isAllDay - f1.isAllDay || // tie? put all-day events first (booleans cast to 0/1)
			compareByFieldSpecs(
				seg1.footprint.eventDef,
				seg2.footprint.eventDef,
				this.view.eventOrderSpecs
			);
	}

});

;;

var BusinessHourRenderer = FC.BusinessHourRenderer = Class.extend({

	component: null,
	fillRenderer: null,
	segs: null,


	/*
	component implements:
		- eventRangesToEventFootprints
		- eventFootprintsToSegs
	*/
	constructor: function(component, fillRenderer) {
		this.component = component;
		this.fillRenderer = fillRenderer;
	},


	render: function(businessHourGenerator) {
		var component = this.component;
		var unzonedRange = component._getDateProfile().activeUnzonedRange;

		var eventInstanceGroup = businessHourGenerator.buildEventInstanceGroup(
			component.hasAllDayBusinessHours,
			unzonedRange
		);

		var eventFootprints = eventInstanceGroup ?
			component.eventRangesToEventFootprints(
				eventInstanceGroup.sliceRenderRanges(unzonedRange)
			) :
			[];

		this.renderEventFootprints(eventFootprints);
	},


	renderEventFootprints: function(eventFootprints) {
		var segs = this.component.eventFootprintsToSegs(eventFootprints);

		this.renderSegs(segs);
		this.segs = segs;
	},


	renderSegs: function(segs) {
		if (this.fillRenderer) {
			this.fillRenderer.renderSegs('businessHours', segs, {
				getClasses: function(seg) {
					return [ 'fc-nonbusiness', 'fc-bgevent' ];
				}
			});
		}
	},


	unrender: function() {
		if (this.fillRenderer) {
			this.fillRenderer.unrender('businessHours');
		}

		this.segs = null;
	},


	getSegs: function() {
		return this.segs || [];
	}

});

;;

var FillRenderer = FC.FillRenderer = Class.extend({ // use for highlight, background events, business hours

	fillSegTag: 'div',
	component: null,
	elsByFill: null, // a hash of jQuery element sets used for rendering each fill. Keyed by fill name.


	constructor: function(component) {
		this.component = component;
		this.elsByFill = {};
	},


	renderFootprint: function(type, componentFootprint, props) {
		this.renderSegs(
			type,
			this.component.componentFootprintToSegs(componentFootprint),
			props
		);
	},


	renderSegs: function(type, segs, props) {
		var els;

		segs = this.buildSegEls(type, segs, props); // assignes `.el` to each seg. returns successfully rendered segs
		els = this.attachSegEls(type, segs);

		if (els) {
			this.reportEls(type, els);
		}

		return segs;
	},


	// Unrenders a specific type of fill that is currently rendered on the grid
	unrender: function(type) {
		var el = this.elsByFill[type];

		if (el) {
			el.remove();
			delete this.elsByFill[type];
		}
	},


	// Renders and assigns an `el` property for each fill segment. Generic enough to work with different types.
	// Only returns segments that successfully rendered.
	buildSegEls: function(type, segs, props) {
		var _this = this;
		var html = '';
		var renderedSegs = [];
		var i;

		if (segs.length) {

			// build a large concatenation of segment HTML
			for (i = 0; i < segs.length; i++) {
				html += this.buildSegHtml(type, segs[i], props);
			}

			// Grab individual elements from the combined HTML string. Use each as the default rendering.
			// Then, compute the 'el' for each segment.
			$(html).each(function(i, node) {
				var seg = segs[i];
				var el = $(node);

				// allow custom filter methods per-type
				if (props.filterEl) {
					el = props.filterEl(seg, el);
				}

				if (el) { // custom filters did not cancel the render
					el = $(el); // allow custom filter to return raw DOM node

					// correct element type? (would be bad if a non-TD were inserted into a table for example)
					if (el.is(_this.fillSegTag)) {
						seg.el = el;
						renderedSegs.push(seg);
					}
				}
			});
		}

		return renderedSegs;
	},


	// Builds the HTML needed for one fill segment. Generic enough to work with different types.
	buildSegHtml: function(type, seg, props) {
		// custom hooks per-type
		var classes = props.getClasses ? props.getClasses(seg) : [];
		var css = cssToStr(props.getCss ? props.getCss(seg) : {});

		return '<' + this.fillSegTag +
			(classes.length ? ' class="' + classes.join(' ') + '"' : '') +
			(css ? ' style="' + css + '"' : '') +
			' />';
	},


	// Should return wrapping DOM structure
	attachSegEls: function(type, segs) {
		// subclasses must implement
	},


	reportEls: function(type, nodes) {
		if (this.elsByFill[type]) {
			this.elsByFill[type] = this.elsByFill[type].add(nodes);
		}
		else {
			this.elsByFill[type] = $(nodes);
		}
	}

});

;;

var HelperRenderer = FC.HelperRenderer = Class.extend({

	view: null,
	component: null,
	eventRenderer: null,
	helperEls: null,


	constructor: function(component, eventRenderer) {
		this.view = component._getView();
		this.component = component;
		this.eventRenderer = eventRenderer;
	},


	renderComponentFootprint: function(componentFootprint) {
		this.renderEventFootprints([
			this.fabricateEventFootprint(componentFootprint)
		]);
	},


	renderEventDraggingFootprints: function(eventFootprints, sourceSeg, isTouch) {
		this.renderEventFootprints(
			eventFootprints,
			sourceSeg,
			'fc-dragging',
			isTouch ? null : this.view.opt('dragOpacity')
		);
	},


	renderEventResizingFootprints: function(eventFootprints, sourceSeg, isTouch) {
		this.renderEventFootprints(
			eventFootprints,
			sourceSeg,
			'fc-resizing'
		);
	},


	renderEventFootprints: function(eventFootprints, sourceSeg, extraClassNames, opacity) {
		var segs = this.component.eventFootprintsToSegs(eventFootprints);
		var classNames = 'fc-helper ' + (extraClassNames || '');
		var i;

		// assigns each seg's el and returns a subset of segs that were rendered
		segs = this.eventRenderer.renderFgSegEls(segs);

		for (i = 0; i < segs.length; i++) {
			segs[i].el.addClass(classNames);
		}

		if (opacity != null) {
			for (i = 0; i < segs.length; i++) {
				segs[i].el.css('opacity', opacity);
			}
		}

		this.helperEls = this.renderSegs(segs, sourceSeg);
	},


	/*
	Must return all mock event elements
	*/
	renderSegs: function(segs, sourceSeg) {
		// Subclasses must implement
	},


	unrender: function() {
		if (this.helperEls) {
			this.helperEls.remove();
			this.helperEls = null;
		}
	},


	fabricateEventFootprint: function(componentFootprint) {
		var calendar = this.view.calendar;
		var eventDateProfile = calendar.footprintToDateProfile(componentFootprint);
		var dummyEvent = new SingleEventDef(new EventSource(calendar));
		var dummyInstance;

		dummyEvent.dateProfile = eventDateProfile;
		dummyInstance = dummyEvent.buildInstance();

		return new EventFootprint(componentFootprint, dummyEvent, dummyInstance);
	}

});

;;

var Component = Model.extend({

	el: null,


	setElement: function(el) {
		this.el = el;
		this.bindGlobalHandlers();
		this.renderSkeleton();
		this.set('isInDom', true);
	},


	removeElement: function() {
		this.unset('isInDom');
		this.unrenderSkeleton();
		this.unbindGlobalHandlers();

		this.el.remove();
		// NOTE: don't null-out this.el in case the View was destroyed within an API callback.
		// We don't null-out the View's other jQuery element references upon destroy,
		//  so we shouldn't kill this.el either.
	},


	bindGlobalHandlers: function() {
	},


	unbindGlobalHandlers: function() {
	},


	/*
	NOTE: Can't have a `render` method. Read the deprecation notice in View::executeDateRender
	*/


	// Renders the basic structure of the view before any content is rendered
	renderSkeleton: function() {
		// subclasses should implement
	},


	// Unrenders the basic structure of the view
	unrenderSkeleton: function() {
		// subclasses should implement
	}

});

;;

var DateComponent = FC.DateComponent = Component.extend({

	uid: null,
	childrenByUid: null,
	isRTL: false, // frequently accessed options
	nextDayThreshold: null, // "
	dateProfile: null, // hack

	eventRendererClass: null,
	helperRendererClass: null,
	businessHourRendererClass: null,
	fillRendererClass: null,

	eventRenderer: null,
	helperRenderer: null,
	businessHourRenderer: null,
	fillRenderer: null,

	hitsNeededDepth: 0, // necessary because multiple callers might need the same hits

	hasAllDayBusinessHours: false, // TODO: unify with largeUnit and isTimeScale?

	isDatesRendered: false,


	constructor: function() {
		Component.call(this);

		this.uid = String(DateComponent.guid++);
		this.childrenByUid = {};

		this.nextDayThreshold = moment.duration(this.opt('nextDayThreshold'));
		this.isRTL = this.opt('isRTL');

		if (this.fillRendererClass) {
			this.fillRenderer = new this.fillRendererClass(this);
		}

		if (this.eventRendererClass) { // fillRenderer is optional -----v
			this.eventRenderer = new this.eventRendererClass(this, this.fillRenderer);
		}

		if (this.helperRendererClass && this.eventRenderer) {
			this.helperRenderer = new this.helperRendererClass(this, this.eventRenderer);
		}

		if (this.businessHourRendererClass && this.fillRenderer) {
			this.businessHourRenderer = new this.businessHourRendererClass(this, this.fillRenderer);
		}
	},


	addChild: function(child) {
		if (!this.childrenByUid[child.uid]) {
			this.childrenByUid[child.uid] = child;

			return true;
		}

		return false;
	},


	removeChild: function(child) {
		if (this.childrenByUid[child.uid]) {
			delete this.childrenByUid[child.uid];

			return true;
		}

		return false;
	},


	// TODO: only do if isInDom?
	// TODO: make part of Component, along with children/batch-render system?
	updateSize: function(totalHeight, isAuto, isResize) {
		this.callChildren('updateSize', arguments);
	},


	// Options
	// -----------------------------------------------------------------------------------------------------------------


	opt: function(name) {
		return this._getView().opt(name); // default implementation
	},


	publiclyTrigger: function(/**/) {
		var calendar = this._getCalendar();

		return calendar.publiclyTrigger.apply(calendar, arguments);
	},


	hasPublicHandlers: function(/**/) {
		var calendar = this._getCalendar();

		return calendar.hasPublicHandlers.apply(calendar, arguments);
	},


	// Date
	// -----------------------------------------------------------------------------------------------------------------


	executeDateRender: function(dateProfile) {
		this.dateProfile = dateProfile; // for rendering
		this.renderDates(dateProfile);
		this.isDatesRendered = true;
		this.callChildren('executeDateRender', arguments);
	},


	executeDateUnrender: function() { // wrapper
		this.callChildren('executeDateUnrender', arguments);
		this.dateProfile = null;
		this.unrenderDates();
		this.isDatesRendered = false;
	},


	// date-cell content only
	renderDates: function(dateProfile) {
		// subclasses should implement
	},


	// date-cell content only
	unrenderDates: function() {
		// subclasses should override
	},


	// Now-Indicator
	// -----------------------------------------------------------------------------------------------------------------


	// Returns a string unit, like 'second' or 'minute' that defined how often the current time indicator
	// should be refreshed. If something falsy is returned, no time indicator is rendered at all.
	getNowIndicatorUnit: function() {
		// subclasses should implement
	},


	// Renders a current time indicator at the given datetime
	renderNowIndicator: function(date) {
		this.callChildren('renderNowIndicator', arguments);
	},


	// Undoes the rendering actions from renderNowIndicator
	unrenderNowIndicator: function() {
		this.callChildren('unrenderNowIndicator', arguments);
	},


	// Business Hours
	// ---------------------------------------------------------------------------------------------------------------


	renderBusinessHours: function(businessHourGenerator) {
		if (this.businessHourRenderer) {
			this.businessHourRenderer.render(businessHourGenerator);
		}

		this.callChildren('renderBusinessHours', arguments);
	},


	// Unrenders previously-rendered business-hours
	unrenderBusinessHours: function() {
		this.callChildren('unrenderBusinessHours', arguments);

		if (this.businessHourRenderer) {
			this.businessHourRenderer.unrender();
		}
	},


	// Event Displaying
	// -----------------------------------------------------------------------------------------------------------------


	executeEventRender: function(eventsPayload) {
		if (this.eventRenderer) {
			this.eventRenderer.rangeUpdated(); // poorly named now
			this.eventRenderer.render(eventsPayload);
		}
		else if (this.renderEvents) { // legacy
			this.renderEvents(convertEventsPayloadToLegacyArray(eventsPayload));
		}

		this.callChildren('executeEventRender', arguments);
	},


	executeEventUnrender: function() {
		this.callChildren('executeEventUnrender', arguments);

		if (this.eventRenderer) {
			this.eventRenderer.unrender();
		}
		else if (this.destroyEvents) { // legacy
			this.destroyEvents();
		}
	},


	getBusinessHourSegs: function() { // recursive
		var segs = this.getOwnBusinessHourSegs();

		this.iterChildren(function(child) {
			segs.push.apply(segs, child.getBusinessHourSegs());
		});

		return segs;
	},


	getOwnBusinessHourSegs: function() {
		if (this.businessHourRenderer) {
			return this.businessHourRenderer.getSegs();
		}

		return [];
	},


	getEventSegs: function() { // recursive
		var segs = this.getOwnEventSegs();

		this.iterChildren(function(child) {
			segs.push.apply(segs, child.getEventSegs());
		});

		return segs;
	},


	getOwnEventSegs: function() { // just for itself
		if (this.eventRenderer) {
			return this.eventRenderer.getSegs();
		}

		return [];
	},


	// Event Rendering Triggering
	// -----------------------------------------------------------------------------------------------------------------


	triggerAfterEventsRendered: function() {
		this.triggerAfterEventSegsRendered(
			this.getEventSegs()
		);

		this.publiclyTrigger('eventAfterAllRender', {
			context: this,
			args: [ this ]
		});
	},


	triggerAfterEventSegsRendered: function(segs) {
		var _this = this;

		// an optimization, because getEventLegacy is expensive
		if (this.hasPublicHandlers('eventAfterRender')) {
			segs.forEach(function(seg) {
				var legacy;

				if (seg.el) { // necessary?
					legacy = seg.footprint.getEventLegacy();

					_this.publiclyTrigger('eventAfterRender', {
						context: legacy,
						args: [ legacy, seg.el, _this ]
					});
				}
			});
		}
	},


	triggerBeforeEventsDestroyed: function() {
		this.triggerBeforeEventSegsDestroyed(
			this.getEventSegs()
		);
	},


	triggerBeforeEventSegsDestroyed: function(segs) {
		var _this = this;

		if (this.hasPublicHandlers('eventDestroy')) {
			segs.forEach(function(seg) {
				var legacy;

				if (seg.el) { // necessary?
					legacy = seg.footprint.getEventLegacy();

					_this.publiclyTrigger('eventDestroy', {
						context: legacy,
						args: [ legacy, seg.el, _this ]
					});
				}
			});
		}
	},


	// Event Rendering Utils
	// -----------------------------------------------------------------------------------------------------------------


	// Hides all rendered event segments linked to the given event
	// RECURSIVE with subcomponents
	showEventsWithId: function(eventDefId) {

		this.getEventSegs().forEach(function(seg) {
			if (
				seg.footprint.eventDef.id === eventDefId &&
				seg.el // necessary?
			) {
				seg.el.css('visibility', '');
			}
		});

		this.callChildren('showEventsWithId', arguments);
	},


	// Shows all rendered event segments linked to the given event
	// RECURSIVE with subcomponents
	hideEventsWithId: function(eventDefId) {

		this.getEventSegs().forEach(function(seg) {
			if (
				seg.footprint.eventDef.id === eventDefId &&
				seg.el // necessary?
			) {
				seg.el.css('visibility', 'hidden');
			}
		});

		this.callChildren('hideEventsWithId', arguments);
	},


	// Drag-n-Drop Rendering (for both events and external elements)
	// ---------------------------------------------------------------------------------------------------------------


	// Renders a visual indication of a event or external-element drag over the given drop zone.
	// If an external-element, seg will be `null`.
	// Must return elements used for any mock events.
	renderDrag: function(eventFootprints, seg, isTouch) {
		var renderedHelper = false;

		this.iterChildren(function(child) {
			if (child.renderDrag(eventFootprints, seg, isTouch)) {
				renderedHelper = true;
			}
		});

		return renderedHelper;
	},


	// Unrenders a visual indication of an event or external-element being dragged.
	unrenderDrag: function() {
		this.callChildren('unrenderDrag', arguments);
	},


	// Event Resizing
	// ---------------------------------------------------------------------------------------------------------------


	// Renders a visual indication of an event being resized.
	renderEventResize: function(eventFootprints, seg, isTouch) {
		this.callChildren('renderEventResize', arguments);
	},


	// Unrenders a visual indication of an event being resized.
	unrenderEventResize: function() {
		this.callChildren('unrenderEventResize', arguments);
	},


	// Selection
	// ---------------------------------------------------------------------------------------------------------------


	// Renders a visual indication of the selection
	// TODO: rename to `renderSelection` after legacy is gone
	renderSelectionFootprint: function(componentFootprint) {
		this.renderHighlight(componentFootprint);

		this.callChildren('renderSelectionFootprint', arguments);
	},


	// Unrenders a visual indication of selection
	unrenderSelection: function() {
		this.unrenderHighlight();

		this.callChildren('unrenderSelection', arguments);
	},


	// Highlight
	// ---------------------------------------------------------------------------------------------------------------


	// Renders an emphasis on the given date range. Given a span (unzoned start/end and other misc data)
	renderHighlight: function(componentFootprint) {
		if (this.fillRenderer) {
			this.fillRenderer.renderFootprint(
				'highlight',
				componentFootprint,
				{
					getClasses: function() {
						return [ 'fc-highlight' ];
					}
				}
			);
		}

		this.callChildren('renderHighlight', arguments);
	},


	// Unrenders the emphasis on a date range
	unrenderHighlight: function() {
		if (this.fillRenderer) {
			this.fillRenderer.unrender('highlight');
		}

		this.callChildren('unrenderHighlight', arguments);
	},


	// Hit Areas
	// ---------------------------------------------------------------------------------------------------------------
	// just because all DateComponents support this interface
	// doesn't mean they need to have their own internal coord system. they can defer to sub-components.


	hitsNeeded: function() {
		if (!(this.hitsNeededDepth++)) {
			this.prepareHits();
		}

		this.callChildren('hitsNeeded', arguments);
	},


	hitsNotNeeded: function() {
		if (this.hitsNeededDepth && !(--this.hitsNeededDepth)) {
			this.releaseHits();
		}

		this.callChildren('hitsNotNeeded', arguments);
	},


	prepareHits: function() {
		// subclasses can implement
	},


	releaseHits: function() {
		// subclasses can implement
	},


	// Given coordinates from the topleft of the document, return data about the date-related area underneath.
	// Can return an object with arbitrary properties (although top/right/left/bottom are encouraged).
	// Must have a `grid` property, a reference to this current grid. TODO: avoid this
	// The returned object will be processed by getHitFootprint and getHitEl.
	queryHit: function(leftOffset, topOffset) {
		var childrenByUid = this.childrenByUid;
		var uid;
		var hit;

		for (uid in childrenByUid) {
			hit = childrenByUid[uid].queryHit(leftOffset, topOffset);

			if (hit) {
				break;
			}
		}

		return hit;
	},


	getSafeHitFootprint: function(hit) {
		var footprint = this.getHitFootprint(hit);

		if (!this.dateProfile.activeUnzonedRange.containsRange(footprint.unzonedRange)) {
			return null;
		}

		return footprint;
	},


	getHitFootprint: function(hit) {
	},


	// Given position-level information about a date-related area within the grid,
	// should return a jQuery element that best represents it. passed to dayClick callback.
	getHitEl: function(hit) {
	},


	/* Converting eventRange -> eventFootprint
	------------------------------------------------------------------------------------------------------------------*/


	eventRangesToEventFootprints: function(eventRanges) {
		var eventFootprints = [];
		var i;

		for (i = 0; i < eventRanges.length; i++) {
			eventFootprints.push.apply( // append
				eventFootprints,
				this.eventRangeToEventFootprints(eventRanges[i])
			);
		}

		return eventFootprints;
	},


	eventRangeToEventFootprints: function(eventRange) {
		return [ eventRangeToEventFootprint(eventRange) ];
	},


	/* Converting componentFootprint/eventFootprint -> segs
	------------------------------------------------------------------------------------------------------------------*/


	eventFootprintsToSegs: function(eventFootprints) {
		var segs = [];
		var i;

		for (i = 0; i < eventFootprints.length; i++) {
			segs.push.apply(segs,
				this.eventFootprintToSegs(eventFootprints[i])
			);
		}

		return segs;
	},


	// Given an event's span (unzoned start/end and other misc data), and the event itself,
	// slices into segments and attaches event-derived properties to them.
	// eventSpan - { start, end, isStart, isEnd, otherthings... }
	eventFootprintToSegs: function(eventFootprint) {
		var unzonedRange = eventFootprint.componentFootprint.unzonedRange;
		var segs;
		var i, seg;

		segs = this.componentFootprintToSegs(eventFootprint.componentFootprint);

		for (i = 0; i < segs.length; i++) {
			seg = segs[i];

			if (!unzonedRange.isStart) {
				seg.isStart = false;
			}
			if (!unzonedRange.isEnd) {
				seg.isEnd = false;
			}

			seg.footprint = eventFootprint;
			// TODO: rename to seg.eventFootprint
		}

		return segs;
	},


	componentFootprintToSegs: function(componentFootprint) {
		return [];
	},


	// Utils
	// ---------------------------------------------------------------------------------------------------------------


	callChildren: function(methodName, args) {
		this.iterChildren(function(child) {
			child[methodName].apply(child, args);
		});
	},


	iterChildren: function(func) {
		var childrenByUid = this.childrenByUid;
		var uid;

		for (uid in childrenByUid) {
			func(childrenByUid[uid]);
		}
	},


	_getCalendar: function() { // TODO: strip out. move to generic parent.
		return this.calendar || this.view.calendar;
	},


	_getView: function() { // TODO: strip out. move to generic parent.
		return this.view;
	},


	_getDateProfile: function() {
		return this._getView().get('dateProfile');
	}

});


DateComponent.guid = 0; // TODO: better system for this?


// legacy

function convertEventsPayloadToLegacyArray(eventsPayload) {
	var eventDefId;
	var eventInstances;
	var legacyEvents = [];
	var i;

	for (eventDefId in eventsPayload) {
		eventInstances = eventsPayload[eventDefId].eventInstances;

		for (i = 0; i < eventInstances.length; i++) {
			legacyEvents.push(
				eventInstances[i].toLegacy()
			);
		}
	}

	return legacyEvents;
}

;;

DateComponent.mixin({

	// Generates HTML for an anchor to another view into the calendar.
	// Will either generate an <a> tag or a non-clickable <span> tag, depending on enabled settings.
	// `gotoOptions` can either be a moment input, or an object with the form:
	// { date, type, forceOff }
	// `type` is a view-type like "day" or "week". default value is "day".
	// `attrs` and `innerHtml` are use to generate the rest of the HTML tag.
	buildGotoAnchorHtml: function(gotoOptions, attrs, innerHtml) {
		var date, type, forceOff;
		var finalOptions;

		if ($.isPlainObject(gotoOptions)) {
			date = gotoOptions.date;
			type = gotoOptions.type;
			forceOff = gotoOptions.forceOff;
		}
		else {
			date = gotoOptions; // a single moment input
		}
		date = FC.moment(date); // if a string, parse it

		finalOptions = { // for serialization into the link
			date: date.format('YYYY-MM-DD'),
			type: type || 'day'
		};

		if (typeof attrs === 'string') {
			innerHtml = attrs;
			attrs = null;
		}

		attrs = attrs ? ' ' + attrsToStr(attrs) : ''; // will have a leading space
		innerHtml = innerHtml || '';

		if (!forceOff && this.opt('navLinks')) {
			return '<a' + attrs +
				' data-goto="' + htmlEscape(JSON.stringify(finalOptions)) + '">' +
				innerHtml +
				'</a>';
		}
		else {
			return '<span' + attrs + '>' +
				innerHtml +
				'</span>';
		}
	},


	getAllDayHtml: function() {
		return this.opt('allDayHtml') || htmlEscape(this.opt('allDayText'));
	},


	// Computes HTML classNames for a single-day element
	getDayClasses: function(date, noThemeHighlight) {
		var view = this._getView();
		var classes = [];
		var today;

		if (!this.dateProfile.activeUnzonedRange.containsDate(date)) {
			classes.push('fc-disabled-day'); // TODO: jQuery UI theme?
		}
		else {
			classes.push('fc-' + dayIDs[date.day()]);

			if (view.isDateInOtherMonth(date, this.dateProfile)) { // TODO: use DateComponent subclass somehow
				classes.push('fc-other-month');
			}

			today = view.calendar.getNow();

			if (date.isSame(today, 'day')) {
				classes.push('fc-today');

				if (noThemeHighlight !== true) {
					classes.push(view.calendar.theme.getClass('today'));
				}
			}
			else if (date < today) {
				classes.push('fc-past');
			}
			else {
				classes.push('fc-future');
			}
		}

		return classes;
	},


	// Utility for formatting a range. Accepts a range object, formatting string, and optional separator.
	// Displays all-day ranges naturally, with an inclusive end. Takes the current isRTL into account.
	// The timezones of the dates within `range` will be respected.
	formatRange: function(range, isAllDay, formatStr, separator) {
		var end = range.end;

		if (isAllDay) {
			end = end.clone().subtract(1); // convert to inclusive. last ms of previous day
		}

		return formatRange(range.start, end, formatStr, separator, this.isRTL);
	},


	// Compute the number of the give units in the "current" range.
	// Will return a floating-point number. Won't round.
	currentRangeAs: function(unit) {
		return this._getDateProfile().currentUnzonedRange.as(unit);
	},


	// Returns the date range of the full days the given range visually appears to occupy.
	// Returns a plain object with start/end, NOT an UnzonedRange!
	computeDayRange: function(unzonedRange) {
		var calendar = this._getCalendar();
		var startDay = calendar.msToUtcMoment(unzonedRange.startMs, true); // the beginning of the day the range starts
		var end = calendar.msToUtcMoment(unzonedRange.endMs);
		var endTimeMS = +end.time(); // # of milliseconds into `endDay`
		var endDay = end.clone().stripTime(); // the beginning of the day the range exclusively ends

		// If the end time is actually inclusively part of the next day and is equal to or
		// beyond the next day threshold, adjust the end to be the exclusive end of `endDay`.
		// Otherwise, leaving it as inclusive will cause it to exclude `endDay`.
		if (endTimeMS && endTimeMS >= this.nextDayThreshold) {
			endDay.add(1, 'days');
		}

		// If end is within `startDay` but not past nextDayThreshold, assign the default duration of one day.
		if (endDay <= startDay) {
			endDay = startDay.clone().add(1, 'days');
		}

		return { start: startDay, end: endDay };
	},


	// Does the given range visually appear to occupy more than one day?
	isMultiDayRange: function(unzonedRange) {
		var dayRange = this.computeDayRange(unzonedRange);

		return dayRange.end.diff(dayRange.start, 'days') > 1;
	}

});

;;

var InteractiveDateComponent = FC.InteractiveDateComponent = DateComponent.extend({

	dateClickingClass: null,
	dateSelectingClass: null,
	eventPointingClass: null,
	eventDraggingClass: null,
	eventResizingClass: null,
	externalDroppingClass: null,

	dateClicking: null,
	dateSelecting: null,
	eventPointing: null,
	eventDragging: null,
	eventResizing: null,
	externalDropping: null,

	// self-config, overridable by subclasses
	segSelector: '.fc-event-container > *', // what constitutes an event element?

	// if defined, holds the unit identified (ex: "year" or "month") that determines the level of granularity
	// of the date areas. if not defined, assumes to be day and time granularity.
	// TODO: port isTimeScale into same system?
	largeUnit: null,


	constructor: function() {
		DateComponent.call(this);

		if (this.dateSelectingClass) {
			this.dateClicking = new this.dateClickingClass(this);
		}

		if (this.dateSelectingClass) {
			this.dateSelecting = new this.dateSelectingClass(this);
		}

		if (this.eventPointingClass) {
			this.eventPointing = new this.eventPointingClass(this);
		}

		if (this.eventDraggingClass && this.eventPointing) {
			this.eventDragging = new this.eventDraggingClass(this, this.eventPointing);
		}

		if (this.eventResizingClass && this.eventPointing) {
			this.eventResizing = new this.eventResizingClass(this, this.eventPointing);
		}

		if (this.externalDroppingClass) {
			this.externalDropping = new this.externalDroppingClass(this);
		}
	},


	// Sets the container element that the view should render inside of, does global DOM-related initializations,
	// and renders all the non-date-related content inside.
	setElement: function(el) {
		DateComponent.prototype.setElement.apply(this, arguments);

		if (this.dateClicking) {
			this.dateClicking.bindToEl(el);
		}

		if (this.dateSelecting) {
			this.dateSelecting.bindToEl(el);
		}

		this.bindAllSegHandlersToEl(el);
	},


	unrender: function() {
		this.endInteractions();

		DateComponent.prototype.unrender.apply(this, arguments);
	},


	executeEventUnrender: function() {
		this.endInteractions();

		DateComponent.prototype.executeEventUnrender.apply(this, arguments);
	},


	bindGlobalHandlers: function() {
		DateComponent.prototype.bindGlobalHandlers.apply(this, arguments);

		if (this.externalDropping) {
			this.externalDropping.bindToDocument();
		}
	},


	unbindGlobalHandlers: function() {
		DateComponent.prototype.unbindGlobalHandlers.apply(this, arguments);

		if (this.externalDropping) {
			this.externalDropping.unbindFromDocument();
		}
	},


	bindDateHandlerToEl: function(el, name, handler) {
		var _this = this;

		// attach a handler to the grid's root element.
		// jQuery will take care of unregistering them when removeElement gets called.
		this.el.on(name, function(ev) {
			if (
				!$(ev.target).is(
					_this.segSelector + ',' + // directly on an event element
					_this.segSelector + ' *,' + // within an event element
					'.fc-more,' + // a "more.." link
					'a[data-goto]' // a clickable nav link
				)
			) {
				return handler.call(_this, ev);
			}
		});
	},


	bindAllSegHandlersToEl: function(el) {
		[
			this.eventPointing,
			this.eventDragging,
			this.eventResizing
		].forEach(function(eventInteraction) {
			if (eventInteraction) {
				eventInteraction.bindToEl(el);
			}
		});
	},


	bindSegHandlerToEl: function(el, name, handler) {
		var _this = this;

		el.on(name, this.segSelector, function(ev) {
			var seg = $(this).data('fc-seg'); // grab segment data. put there by View::renderEventsPayload

			if (seg && !_this.shouldIgnoreEventPointing()) {
				return handler.call(_this, seg, ev); // context will be the Grid
			}
		});
	},


	shouldIgnoreMouse: function() {
		// HACK
		// This will still work even though bindDateHandlerToEl doesn't use GlobalEmitter.
		return GlobalEmitter.get().shouldIgnoreMouse();
	},


	shouldIgnoreTouch: function() {
		var view = this._getView();

		// On iOS (and Android?) when a new selection is initiated overtop another selection,
		// the touchend never fires because the elements gets removed mid-touch-interaction (my theory).
		// HACK: simply don't allow this to happen.
		// ALSO: prevent selection when an *event* is already raised.
		return view.isSelected || view.selectedEvent;
	},


	shouldIgnoreEventPointing: function() {
		// only call the handlers if there is not a drag/resize in progress
		return (this.eventDragging && this.eventDragging.isDragging) ||
			(this.eventResizing && this.eventResizing.isResizing);
	},


	canStartSelection: function(seg, ev) {
		return getEvIsTouch(ev) &&
			!this.canStartResize(seg, ev) &&
			(this.isEventDefDraggable(seg.footprint.eventDef) ||
			 this.isEventDefResizable(seg.footprint.eventDef));
	},


	canStartDrag: function(seg, ev) {
		return !this.canStartResize(seg, ev) &&
			this.isEventDefDraggable(seg.footprint.eventDef);
	},


	canStartResize: function(seg, ev) {
		var view = this._getView();
		var eventDef = seg.footprint.eventDef;

		return (!getEvIsTouch(ev) || view.isEventDefSelected(eventDef)) &&
			this.isEventDefResizable(eventDef) &&
			$(ev.target).is('.fc-resizer');
	},


	// Kills all in-progress dragging.
	// Useful for when public API methods that result in re-rendering are invoked during a drag.
	// Also useful for when touch devices misbehave and don't fire their touchend.
	endInteractions: function() {
		[
			this.dateClicking,
			this.dateSelecting,
			this.eventPointing,
			this.eventDragging,
			this.eventResizing
		].forEach(function(interaction) {
			if (interaction) {
				interaction.end();
			}
		});
	},


	// Event Drag-n-Drop
	// ---------------------------------------------------------------------------------------------------------------


	// Computes if the given event is allowed to be dragged by the user
	isEventDefDraggable: function(eventDef) {
		return this.isEventDefStartEditable(eventDef);
	},


	isEventDefStartEditable: function(eventDef) {
		var isEditable = eventDef.isStartExplicitlyEditable();

		if (isEditable == null) {
			isEditable = this.opt('eventStartEditable');

			if (isEditable == null) {
				isEditable = this.isEventDefGenerallyEditable(eventDef);
			}
		}

		return isEditable;
	},


	isEventDefGenerallyEditable: function(eventDef) {
		var isEditable = eventDef.isExplicitlyEditable();

		if (isEditable == null) {
			isEditable = this.opt('editable');
		}

		return isEditable;
	},


	// Event Resizing
	// ---------------------------------------------------------------------------------------------------------------


	// Computes if the given event is allowed to be resized from its starting edge
	isEventDefResizableFromStart: function(eventDef) {
		return this.opt('eventResizableFromStart') && this.isEventDefResizable(eventDef);
	},


	// Computes if the given event is allowed to be resized from its ending edge
	isEventDefResizableFromEnd: function(eventDef) {
		return this.isEventDefResizable(eventDef);
	},


	// Computes if the given event is allowed to be resized by the user at all
	isEventDefResizable: function(eventDef) {
		var isResizable = eventDef.isDurationExplicitlyEditable();

		if (isResizable == null) {
			isResizable = this.opt('eventDurationEditable');

			if (isResizable == null) {
				isResizable = this.isEventDefGenerallyEditable(eventDef);
			}
		}
		return isResizable;
	},


	// Event Mutation / Constraints
	// ---------------------------------------------------------------------------------------------------------------


	// Diffs the two dates, returning a duration, based on granularity of the grid
	// TODO: port isTimeScale into this system?
	diffDates: function(a, b) {
		if (this.largeUnit) {
			return diffByUnit(a, b, this.largeUnit);
		}
		else {
			return diffDayTime(a, b);
		}
	},


	// is it allowed, in relation to the view's validRange?
	// NOTE: very similar to isExternalInstanceGroupAllowed
	isEventInstanceGroupAllowed: function(eventInstanceGroup) {
		var view = this._getView();
		var dateProfile = this.dateProfile;
		var eventFootprints = this.eventRangesToEventFootprints(eventInstanceGroup.getAllEventRanges());
		var i;

		for (i = 0; i < eventFootprints.length; i++) {
			// TODO: just use getAllEventRanges directly
			if (!dateProfile.validUnzonedRange.containsRange(eventFootprints[i].componentFootprint.unzonedRange)) {
				return false;
			}
		}

		return view.calendar.isEventInstanceGroupAllowed(eventInstanceGroup);
	},


	// NOTE: very similar to isEventInstanceGroupAllowed
	// when it's a completely anonymous external drag, no event.
	isExternalInstanceGroupAllowed: function(eventInstanceGroup) {
		var view = this._getView();
		var dateProfile = this.dateProfile;
		var eventFootprints = this.eventRangesToEventFootprints(eventInstanceGroup.getAllEventRanges());
		var i;

		for (i = 0; i < eventFootprints.length; i++) {
			if (!dateProfile.validUnzonedRange.containsRange(eventFootprints[i].componentFootprint.unzonedRange)) {
				return false;
			}
		}

		for (i = 0; i < eventFootprints.length; i++) {
			// treat it as a selection
			// TODO: pass in eventInstanceGroup instead
			//  because we don't want calendar's constraint system to depend on a component's
			//  determination of footprints.
			if (!view.calendar.isSelectionFootprintAllowed(eventFootprints[i].componentFootprint)) {
				return false;
			}
		}

		return true;
	}

});

;;

/*
A set of rendering and date-related methods for a visual component comprised of one or more rows of day columns.
Prerequisite: the object being mixed into needs to be a *Grid*
*/
var DayTableMixin = FC.DayTableMixin = {

	breakOnWeeks: false, // should create a new row for each week?
	dayDates: null, // whole-day dates for each column. left to right
	dayIndices: null, // for each day from start, the offset
	daysPerRow: null,
	rowCnt: null,
	colCnt: null,
	colHeadFormat: null,


	// Populates internal variables used for date calculation and rendering
	updateDayTable: function() {
		var view = this.view;
		var calendar = view.calendar;
		var date = calendar.msToUtcMoment(this.dateProfile.renderUnzonedRange.startMs, true);
		var end = calendar.msToUtcMoment(this.dateProfile.renderUnzonedRange.endMs, true);
		var dayIndex = -1;
		var dayIndices = [];
		var dayDates = [];
		var daysPerRow;
		var firstDay;
		var rowCnt;

		while (date.isBefore(end)) { // loop each day from start to end
			if (view.isHiddenDay(date)) {
				dayIndices.push(dayIndex + 0.5); // mark that it's between indices
			}
			else {
				dayIndex++;
				dayIndices.push(dayIndex);
				dayDates.push(date.clone());
			}
			date.add(1, 'days');
		}

		if (this.breakOnWeeks) {
			// count columns until the day-of-week repeats
			firstDay = dayDates[0].day();
			for (daysPerRow = 1; daysPerRow < dayDates.length; daysPerRow++) {
				if (dayDates[daysPerRow].day() == firstDay) {
					break;
				}
			}
			rowCnt = Math.ceil(dayDates.length / daysPerRow);
		}
		else {
			rowCnt = 1;
			daysPerRow = dayDates.length;
		}

		this.dayDates = dayDates;
		this.dayIndices = dayIndices;
		this.daysPerRow = daysPerRow;
		this.rowCnt = rowCnt;

		this.updateDayTableCols();
	},


	// Computes and assigned the colCnt property and updates any options that may be computed from it
	updateDayTableCols: function() {
		this.colCnt = this.computeColCnt();
		this.colHeadFormat = this.opt('columnFormat') || this.computeColHeadFormat();
	},


	// Determines how many columns there should be in the table
	computeColCnt: function() {
		return this.daysPerRow;
	},


	// Computes the ambiguously-timed moment for the given cell
	getCellDate: function(row, col) {
		return this.dayDates[
				this.getCellDayIndex(row, col)
			].clone();
	},


	// Computes the ambiguously-timed date range for the given cell
	getCellRange: function(row, col) {
		var start = this.getCellDate(row, col);
		var end = start.clone().add(1, 'days');

		return { start: start, end: end };
	},


	// Returns the number of day cells, chronologically, from the first of the grid (0-based)
	getCellDayIndex: function(row, col) {
		return row * this.daysPerRow + this.getColDayIndex(col);
	},


	// Returns the numner of day cells, chronologically, from the first cell in *any given row*
	getColDayIndex: function(col) {
		if (this.isRTL) {
			return this.colCnt - 1 - col;
		}
		else {
			return col;
		}
	},


	// Given a date, returns its chronolocial cell-index from the first cell of the grid.
	// If the date lies between cells (because of hiddenDays), returns a floating-point value between offsets.
	// If before the first offset, returns a negative number.
	// If after the last offset, returns an offset past the last cell offset.
	// Only works for *start* dates of cells. Will not work for exclusive end dates for cells.
	getDateDayIndex: function(date) {
		var dayIndices = this.dayIndices;
		var dayOffset = date.diff(this.dayDates[0], 'days');

		if (dayOffset < 0) {
			return dayIndices[0] - 1;
		}
		else if (dayOffset >= dayIndices.length) {
			return dayIndices[dayIndices.length - 1] + 1;
		}
		else {
			return dayIndices[dayOffset];
		}
	},


	/* Options
	------------------------------------------------------------------------------------------------------------------*/


	// Computes a default column header formatting string if `colFormat` is not explicitly defined
	computeColHeadFormat: function() {
		// if more than one week row, or if there are a lot of columns with not much space,
		// put just the day numbers will be in each cell
		if (this.rowCnt > 1 || this.colCnt > 10) {
			return 'ddd'; // "Sat"
		}
		// multiple days, so full single date string WON'T be in title text
		else if (this.colCnt > 1) {
			return this.opt('dayOfMonthFormat'); // "Sat 12/10"
		}
		// single day, so full single date string will probably be in title text
		else {
			return 'dddd'; // "Saturday"
		}
	},


	/* Slicing
	------------------------------------------------------------------------------------------------------------------*/


	// Slices up a date range into a segment for every week-row it intersects with
	sliceRangeByRow: function(unzonedRange) {
		var daysPerRow = this.daysPerRow;
		var normalRange = this.view.computeDayRange(unzonedRange); // make whole-day range, considering nextDayThreshold
		var rangeFirst = this.getDateDayIndex(normalRange.start); // inclusive first index
		var rangeLast = this.getDateDayIndex(normalRange.end.clone().subtract(1, 'days')); // inclusive last index
		var segs = [];
		var row;
		var rowFirst, rowLast; // inclusive day-index range for current row
		var segFirst, segLast; // inclusive day-index range for segment

		for (row = 0; row < this.rowCnt; row++) {
			rowFirst = row * daysPerRow;
			rowLast = rowFirst + daysPerRow - 1;

			// intersect segment's offset range with the row's
			segFirst = Math.max(rangeFirst, rowFirst);
			segLast = Math.min(rangeLast, rowLast);

			// deal with in-between indices
			segFirst = Math.ceil(segFirst); // in-between starts round to next cell
			segLast = Math.floor(segLast); // in-between ends round to prev cell

			if (segFirst <= segLast) { // was there any intersection with the current row?
				segs.push({
					row: row,

					// normalize to start of row
					firstRowDayIndex: segFirst - rowFirst,
					lastRowDayIndex: segLast - rowFirst,

					// must be matching integers to be the segment's start/end
					isStart: segFirst === rangeFirst,
					isEnd: segLast === rangeLast
				});
			}
		}

		return segs;
	},


	// Slices up a date range into a segment for every day-cell it intersects with.
	// TODO: make more DRY with sliceRangeByRow somehow.
	sliceRangeByDay: function(unzonedRange) {
		var daysPerRow = this.daysPerRow;
		var normalRange = this.view.computeDayRange(unzonedRange); // make whole-day range, considering nextDayThreshold
		var rangeFirst = this.getDateDayIndex(normalRange.start); // inclusive first index
		var rangeLast = this.getDateDayIndex(normalRange.end.clone().subtract(1, 'days')); // inclusive last index
		var segs = [];
		var row;
		var rowFirst, rowLast; // inclusive day-index range for current row
		var i;
		var segFirst, segLast; // inclusive day-index range for segment

		for (row = 0; row < this.rowCnt; row++) {
			rowFirst = row * daysPerRow;
			rowLast = rowFirst + daysPerRow - 1;

			for (i = rowFirst; i <= rowLast; i++) {

				// intersect segment's offset range with the row's
				segFirst = Math.max(rangeFirst, i);
				segLast = Math.min(rangeLast, i);

				// deal with in-between indices
				segFirst = Math.ceil(segFirst); // in-between starts round to next cell
				segLast = Math.floor(segLast); // in-between ends round to prev cell

				if (segFirst <= segLast) { // was there any intersection with the current row?
					segs.push({
						row: row,

						// normalize to start of row
						firstRowDayIndex: segFirst - rowFirst,
						lastRowDayIndex: segLast - rowFirst,

						// must be matching integers to be the segment's start/end
						isStart: segFirst === rangeFirst,
						isEnd: segLast === rangeLast
					});
				}
			}
		}

		return segs;
	},


	/* Header Rendering
	------------------------------------------------------------------------------------------------------------------*/


	renderHeadHtml: function() {
		var theme = this.view.calendar.theme;

		return '' +
			'<div class="fc-row ' + theme.getClass('headerRow') + '">' +
				'<table class="' + theme.getClass('tableGrid') + '">' +
					'<thead>' +
						this.renderHeadTrHtml() +
					'</thead>' +
				'</table>' +
			'</div>';
	},


	renderHeadIntroHtml: function() {
		return this.renderIntroHtml(); // fall back to generic
	},


	renderHeadTrHtml: function() {
		return '' +
			'<tr>' +
				(this.isRTL ? '' : this.renderHeadIntroHtml()) +
				this.renderHeadDateCellsHtml() +
				(this.isRTL ? this.renderHeadIntroHtml() : '') +
			'</tr>';
	},


	renderHeadDateCellsHtml: function() {
		var htmls = [];
		var col, date;

		for (col = 0; col < this.colCnt; col++) {
			date = this.getCellDate(0, col);
			htmls.push(this.renderHeadDateCellHtml(date));
		}

		return htmls.join('');
	},


	// TODO: when internalApiVersion, accept an object for HTML attributes
	// (colspan should be no different)
	renderHeadDateCellHtml: function(date, colspan, otherAttrs) {
		var view = this.view;
		var isDateValid = this.dateProfile.activeUnzonedRange.containsDate(date); // TODO: called too frequently. cache somehow.
		var classNames = [
			'fc-day-header',
			view.calendar.theme.getClass('widgetHeader')
		];
		var innerHtml = htmlEscape(date.format(this.colHeadFormat));

		// if only one row of days, the classNames on the header can represent the specific days beneath
		if (this.rowCnt === 1) {
			classNames = classNames.concat(
				// includes the day-of-week class
				// noThemeHighlight=true (don't highlight the header)
				this.getDayClasses(date, true)
			);
		}
		else {
			classNames.push('fc-' + dayIDs[date.day()]); // only add the day-of-week class
		}

		return '' +
            '<th class="' + classNames.join(' ') + '"' +
				((isDateValid && this.rowCnt) === 1 ?
					' data-date="' + date.format('YYYY-MM-DD') + '"' :
					'') +
				(colspan > 1 ?
					' colspan="' + colspan + '"' :
					'') +
				(otherAttrs ?
					' ' + otherAttrs :
					'') +
				'>' +
				(isDateValid ?
					// don't make a link if the heading could represent multiple days, or if there's only one day (forceOff)
					view.buildGotoAnchorHtml(
						{ date: date, forceOff: this.rowCnt > 1 || this.colCnt === 1 },
						innerHtml
					) :
					// if not valid, display text, but no link
					innerHtml
				) +
			'</th>';
	},


	/* Background Rendering
	------------------------------------------------------------------------------------------------------------------*/


	renderBgTrHtml: function(row) {
		return '' +
			'<tr>' +
				(this.isRTL ? '' : this.renderBgIntroHtml(row)) +
				this.renderBgCellsHtml(row) +
				(this.isRTL ? this.renderBgIntroHtml(row) : '') +
			'</tr>';
	},


	renderBgIntroHtml: function(row) {
		return this.renderIntroHtml(); // fall back to generic
	},


	renderBgCellsHtml: function(row) {
		var htmls = [];
		var col, date;

		for (col = 0; col < this.colCnt; col++) {
			date = this.getCellDate(row, col);
			htmls.push(this.renderBgCellHtml(date));
		}

		return htmls.join('');
	},


	renderBgCellHtml: function(date, otherAttrs) {
		var view = this.view;
		var isDateValid = this.dateProfile.activeUnzonedRange.containsDate(date); // TODO: called too frequently. cache somehow.
		var classes = this.getDayClasses(date);

		classes.unshift('fc-day', view.calendar.theme.getClass('widgetContent'));

		return '<td class="' + classes.join(' ') + '"' +
			(isDateValid ?
				' data-date="' + date.format('YYYY-MM-DD') + '"' : // if date has a time, won't format it
				'') +
			(otherAttrs ?
				' ' + otherAttrs :
				'') +
			'></td>';
	},


	/* Generic
	------------------------------------------------------------------------------------------------------------------*/


	// Generates the default HTML intro for any row. User classes should override
	renderIntroHtml: function() {
	},


	// TODO: a generic method for dealing with <tr>, RTL, intro
	// when increment internalApiVersion
	// wrapTr (scheduler)


	/* Utils
	------------------------------------------------------------------------------------------------------------------*/


	// Applies the generic "intro" and "outro" HTML to the given cells.
	// Intro means the leftmost cell when the calendar is LTR and the rightmost cell when RTL. Vice-versa for outro.
	bookendCells: function(trEl) {
		var introHtml = this.renderIntroHtml();

		if (introHtml) {
			if (this.isRTL) {
				trEl.append(introHtml);
			}
			else {
				trEl.prepend(introHtml);
			}
		}
	}

};

;;

/* An abstract class from which other views inherit from
----------------------------------------------------------------------------------------------------------------------*/

var View = FC.View = InteractiveDateComponent.extend({

	type: null, // subclass' view name (string)
	name: null, // deprecated. use `type` instead
	title: null, // the text that will be displayed in the header's title

	calendar: null, // owner Calendar object
	viewSpec: null,
	options: null, // hash containing all options. already merged with view-specific-options

	renderQueue: null,
	batchRenderDepth: 0,
	queuedScroll: null,

	isSelected: false, // boolean whether a range of time is user-selected or not
	selectedEventInstance: null,

	eventOrderSpecs: null, // criteria for ordering events when they have same date/time

	// for date utils, computed from options
	isHiddenDayHash: null,

	// now indicator
	isNowIndicatorRendered: null,
	initialNowDate: null, // result first getNow call
	initialNowQueriedMs: null, // ms time the getNow was called
	nowIndicatorTimeoutID: null, // for refresh timing of now indicator
	nowIndicatorIntervalID: null, // "

	constructor: function(calendar, viewSpec) {
		this.calendar = calendar;
		this.viewSpec = viewSpec;

		// shortcuts
		this.type = viewSpec.type;
		this.options = viewSpec.options;

		// .name is deprecated
		this.name = this.type;

		InteractiveDateComponent.call(this);

		this.initRenderQueue();
		this.initHiddenDays();
		this.bindBaseRenderHandlers();
		this.eventOrderSpecs = parseFieldSpecs(this.opt('eventOrder'));

		// legacy
		if (this.initialize) {
			this.initialize();
		}
	},


	_getView: function() {
		return this;
	},


	// Retrieves an option with the given name
	opt: function(name) {
		return this.options[name];
	},


	/* Render Queue
	------------------------------------------------------------------------------------------------------------------*/


	initRenderQueue: function() {
		this.renderQueue = new RenderQueue({
			event: this.opt('eventRenderWait')
		});

		this.renderQueue.on('start', this.onRenderQueueStart.bind(this));
		this.renderQueue.on('stop', this.onRenderQueueStop.bind(this));

		this.on('before:change', this.startBatchRender);
		this.on('change', this.stopBatchRender);
	},


	onRenderQueueStart: function() {
		this.calendar.freezeContentHeight();
		this.addScroll(this.queryScroll());
	},


	onRenderQueueStop: function() {
		if (this.calendar.updateViewSize()) { // success?
			this.popScroll();
		}
		this.calendar.thawContentHeight();
	},


	startBatchRender: function() {
		if (!(this.batchRenderDepth++)) {
			this.renderQueue.pause();
		}
	},


	stopBatchRender: function() {
		if (!(--this.batchRenderDepth)) {
			this.renderQueue.resume();
		}
	},


	requestRender: function(func, namespace, actionType) {
		this.renderQueue.queue(func, namespace, actionType);
	},


	// given func will auto-bind to `this`
	whenSizeUpdated: function(func) {
		if (this.renderQueue.isRunning) {
			this.renderQueue.one('stop', func.bind(this));
		}
		else {
			func.call(this);
		}
	},


	/* Title and Date Formatting
	------------------------------------------------------------------------------------------------------------------*/


	// Computes what the title at the top of the calendar should be for this view
	computeTitle: function(dateProfile) {
		var unzonedRange;

		// for views that span a large unit of time, show the proper interval, ignoring stray days before and after
		if (/^(year|month)$/.test(dateProfile.currentRangeUnit)) {
			unzonedRange = dateProfile.currentUnzonedRange;
		}
		else { // for day units or smaller, use the actual day range
			unzonedRange = dateProfile.activeUnzonedRange;
		}

		return this.formatRange(
			{
				start: this.calendar.msToMoment(unzonedRange.startMs, dateProfile.isRangeAllDay),
				end: this.calendar.msToMoment(unzonedRange.endMs, dateProfile.isRangeAllDay)
			},
			dateProfile.isRangeAllDay,
			this.opt('titleFormat') || this.computeTitleFormat(dateProfile),
			this.opt('titleRangeSeparator')
		);
	},


	// Generates the format string that should be used to generate the title for the current date range.
	// Attempts to compute the most appropriate format if not explicitly specified with `titleFormat`.
	computeTitleFormat: function(dateProfile) {
		var currentRangeUnit = dateProfile.currentRangeUnit;

		if (currentRangeUnit == 'year') {
			return 'YYYY';
		}
		else if (currentRangeUnit == 'month') {
			return this.opt('monthYearFormat'); // like "September 2014"
		}
		else if (dateProfile.currentUnzonedRange.as('days') > 1) {
			return 'll'; // multi-day range. shorter, like "Sep 9 - 10 2014"
		}
		else {
			return 'LL'; // one day. longer, like "September 9 2014"
		}
	},


	// Date Setting/Unsetting
	// -----------------------------------------------------------------------------------------------------------------


	setDate: function(date) {
		var currentDateProfile = this.get('dateProfile');
		var newDateProfile = this.buildDateProfile(date, null, true); // forceToValid=true

		if (
			!currentDateProfile ||
			!currentDateProfile.activeUnzonedRange.equals(newDateProfile.activeUnzonedRange)
		) {
			this.set('dateProfile', newDateProfile);
		}
	},


	unsetDate: function() {
		this.unset('dateProfile');
	},


	// Event Data
	// -----------------------------------------------------------------------------------------------------------------


	fetchInitialEvents: function(dateProfile) {
		var calendar = this.calendar;
		var forceAllDay = dateProfile.isRangeAllDay && !this.usesMinMaxTime;

		return calendar.requestEvents(
			calendar.msToMoment(dateProfile.activeUnzonedRange.startMs, forceAllDay),
			calendar.msToMoment(dateProfile.activeUnzonedRange.endMs, forceAllDay)
		);
	},


	bindEventChanges: function() {
		this.listenTo(this.calendar, 'eventsReset', this.resetEvents); // TODO: make this a real event
	},


	unbindEventChanges: function() {
		this.stopListeningTo(this.calendar, 'eventsReset');
	},


	setEvents: function(eventsPayload) {
		this.set('currentEvents', eventsPayload);
		this.set('hasEvents', true);
	},


	unsetEvents: function() {
		this.unset('currentEvents');
		this.unset('hasEvents');
	},


	resetEvents: function(eventsPayload) {
		this.startBatchRender();
		this.unsetEvents();
		this.setEvents(eventsPayload);
		this.stopBatchRender();
	},


	// Date High-level Rendering
	// -----------------------------------------------------------------------------------------------------------------


	requestDateRender: function(dateProfile) {
		var _this = this;

		this.requestRender(function() {
			_this.executeDateRender(dateProfile);
		}, 'date', 'init');
	},


	requestDateUnrender: function() {
		var _this = this;

		this.requestRender(function() {
			_this.executeDateUnrender();
		}, 'date', 'destroy');
	},


	// if dateProfile not specified, uses current
	executeDateRender: function(dateProfile) {
		DateComponent.prototype.executeDateRender.apply(this, arguments);

		if (this.render) {
			this.render(); // TODO: deprecate
		}

		this.trigger('datesRendered');
		this.addScroll({ isDateInit: true });
		this.startNowIndicator(); // shouldn't render yet because updateSize will be called soon
	},


	executeDateUnrender: function() {
		this.unselect();
		this.stopNowIndicator();
		this.trigger('before:datesUnrendered');

		if (this.destroy) {
			this.destroy(); // TODO: deprecate
		}

		DateComponent.prototype.executeDateUnrender.apply(this, arguments);
	},


	// "Base" rendering
	// -----------------------------------------------------------------------------------------------------------------


	bindBaseRenderHandlers: function() {
		var _this = this;

		this.on('datesRendered', function() {
			_this.whenSizeUpdated(
				_this.triggerViewRender
			);
		});

		this.on('before:datesUnrendered', function() {
			_this.triggerViewDestroy();
		});
	},


	triggerViewRender: function() {
		this.publiclyTrigger('viewRender', {
			context: this,
			args: [ this, this.el ]
		});
	},


	triggerViewDestroy: function() {
		this.publiclyTrigger('viewDestroy', {
			context: this,
			args: [ this, this.el ]
		});
	},


	// Event High-level Rendering
	// -----------------------------------------------------------------------------------------------------------------


	requestEventsRender: function(eventsPayload) {
		var _this = this;

		this.requestRender(function() {
			_this.executeEventRender(eventsPayload);
			_this.whenSizeUpdated(
				_this.triggerAfterEventsRendered
			);
		}, 'event', 'init');
	},


	requestEventsUnrender: function() {
		var _this = this;

		this.requestRender(function() {
			_this.triggerBeforeEventsDestroyed();
			_this.executeEventUnrender();
		}, 'event', 'destroy');
	},


	// Business Hour High-level Rendering
	// -----------------------------------------------------------------------------------------------------------------


	requestBusinessHoursRender: function(businessHourGenerator) {
		var _this = this;

		this.requestRender(function() {
			_this.renderBusinessHours(businessHourGenerator);
		}, 'businessHours', 'init');
	},

	requestBusinessHoursUnrender: function() {
		var _this = this;

		this.requestRender(function() {
			_this.unrenderBusinessHours();
		}, 'businessHours', 'destroy');
	},


	// Misc view rendering utils
	// -----------------------------------------------------------------------------------------------------------------


	// Binds DOM handlers to elements that reside outside the view container, such as the document
	bindGlobalHandlers: function() {
		InteractiveDateComponent.prototype.bindGlobalHandlers.apply(this, arguments);

		this.listenTo(GlobalEmitter.get(), {
			touchstart: this.processUnselect,
			mousedown: this.handleDocumentMousedown
		});
	},


	// Unbinds DOM handlers from elements that reside outside the view container
	unbindGlobalHandlers: function() {
		InteractiveDateComponent.prototype.unbindGlobalHandlers.apply(this, arguments);

		this.stopListeningTo(GlobalEmitter.get());
	},


	/* Now Indicator
	------------------------------------------------------------------------------------------------------------------*/


	// Immediately render the current time indicator and begins re-rendering it at an interval,
	// which is defined by this.getNowIndicatorUnit().
	// TODO: somehow do this for the current whole day's background too
	startNowIndicator: function() {
		var _this = this;
		var unit;
		var update;
		var delay; // ms wait value

		if (this.opt('nowIndicator')) {
			unit = this.getNowIndicatorUnit();
			if (unit) {
				update = proxy(this, 'updateNowIndicator'); // bind to `this`

				this.initialNowDate = this.calendar.getNow();
				this.initialNowQueriedMs = +new Date();

				// wait until the beginning of the next interval
				delay = this.initialNowDate.clone().startOf(unit).add(1, unit) - this.initialNowDate;
				this.nowIndicatorTimeoutID = setTimeout(function() {
					_this.nowIndicatorTimeoutID = null;
					update();
					delay = +moment.duration(1, unit);
					delay = Math.max(100, delay); // prevent too frequent
					_this.nowIndicatorIntervalID = setInterval(update, delay); // update every interval
				}, delay);
			}

			// rendering will be initiated in updateSize
		}
	},


	// rerenders the now indicator, computing the new current time from the amount of time that has passed
	// since the initial getNow call.
	updateNowIndicator: function() {
		if (
			this.isDatesRendered &&
			this.initialNowDate // activated before?
		) {
			this.unrenderNowIndicator(); // won't unrender if unnecessary
			this.renderNowIndicator(
				this.initialNowDate.clone().add(new Date() - this.initialNowQueriedMs) // add ms
			);
			this.isNowIndicatorRendered = true;
		}
	},


	// Immediately unrenders the view's current time indicator and stops any re-rendering timers.
	// Won't cause side effects if indicator isn't rendered.
	stopNowIndicator: function() {
		if (this.isNowIndicatorRendered) {

			if (this.nowIndicatorTimeoutID) {
				clearTimeout(this.nowIndicatorTimeoutID);
				this.nowIndicatorTimeoutID = null;
			}
			if (this.nowIndicatorIntervalID) {
				clearTimeout(this.nowIndicatorIntervalID);
				this.nowIndicatorIntervalID = null;
			}

			this.unrenderNowIndicator();
			this.isNowIndicatorRendered = false;
		}
	},


	/* Dimensions
	------------------------------------------------------------------------------------------------------------------*/


	updateSize: function(totalHeight, isAuto, isResize) {

		if (this.setHeight) { // for legacy API
			this.setHeight(totalHeight, isAuto);
		}
		else {
			InteractiveDateComponent.prototype.updateSize.apply(this, arguments);
		}

		this.updateNowIndicator();
	},


	/* Scroller
	------------------------------------------------------------------------------------------------------------------*/


	addScroll: function(scroll) {
		var queuedScroll = this.queuedScroll || (this.queuedScroll = {});

		$.extend(queuedScroll, scroll);
	},


	popScroll: function() {
		this.applyQueuedScroll();
		this.queuedScroll = null;
	},


	applyQueuedScroll: function() {
		if (this.queuedScroll) {
			this.applyScroll(this.queuedScroll);
		}
	},


	queryScroll: function() {
		var scroll = {};

		if (this.isDatesRendered) {
			$.extend(scroll, this.queryDateScroll());
		}

		return scroll;
	},


	applyScroll: function(scroll) {
		if (scroll.isDateInit && this.isDatesRendered) {
			$.extend(scroll, this.computeInitialDateScroll());
		}

		if (this.isDatesRendered) {
			this.applyDateScroll(scroll);
		}
	},


	computeInitialDateScroll: function() {
		return {}; // subclasses must implement
	},


	queryDateScroll: function() {
		return {}; // subclasses must implement
	},


	applyDateScroll: function(scroll) {
		; // subclasses must implement
	},


	/* Event Drag-n-Drop
	------------------------------------------------------------------------------------------------------------------*/


	reportEventDrop: function(eventInstance, eventMutation, el, ev) {
		var eventManager = this.calendar.eventManager;
		var undoFunc = eventManager.mutateEventsWithId(
			eventInstance.def.id,
			eventMutation,
			this.calendar
		);
		var dateMutation = eventMutation.dateMutation;

		// update the EventInstance, for handlers
		if (dateMutation) {
			eventInstance.dateProfile = dateMutation.buildNewDateProfile(
				eventInstance.dateProfile,
				this.calendar
			);
		}

		this.triggerEventDrop(
			eventInstance,
			// a drop doesn't necessarily mean a date mutation (ex: resource change)
			(dateMutation && dateMutation.dateDelta) || moment.duration(),
			undoFunc,
			el, ev
		);
	},


	// Triggers event-drop handlers that have subscribed via the API
	triggerEventDrop: function(eventInstance, dateDelta, undoFunc, el, ev) {
		this.publiclyTrigger('eventDrop', {
			context: el[0],
			args: [
				eventInstance.toLegacy(),
				dateDelta,
				undoFunc,
				ev,
				{}, // {} = jqui dummy
				this
			]
		});
	},


	/* External Element Drag-n-Drop
	------------------------------------------------------------------------------------------------------------------*/


	// Must be called when an external element, via jQuery UI, has been dropped onto the calendar.
	// `meta` is the parsed data that has been embedded into the dragging event.
	// `dropLocation` is an object that contains the new zoned start/end/allDay values for the event.
	reportExternalDrop: function(singleEventDef, isEvent, isSticky, el, ev, ui) {

		if (isEvent) {
			this.calendar.eventManager.addEventDef(singleEventDef, isSticky);
		}

		this.triggerExternalDrop(singleEventDef, isEvent, el, ev, ui);
	},


	// Triggers external-drop handlers that have subscribed via the API
	triggerExternalDrop: function(singleEventDef, isEvent, el, ev, ui) {

		// trigger 'drop' regardless of whether element represents an event
		this.publiclyTrigger('drop', {
			context: el[0],
			args: [
				singleEventDef.dateProfile.start.clone(),
				ev,
				ui,
				this
			]
		});

		if (isEvent) {
			// signal an external event landed
			this.publiclyTrigger('eventReceive', {
				context: this,
				args: [
					singleEventDef.buildInstance().toLegacy(),
					this
				]
			});
		}
	},


	/* Event Resizing
	------------------------------------------------------------------------------------------------------------------*/


	// Must be called when an event in the view has been resized to a new length
	reportEventResize: function(eventInstance, eventMutation, el, ev) {
		var eventManager = this.calendar.eventManager;
		var undoFunc = eventManager.mutateEventsWithId(
			eventInstance.def.id,
			eventMutation,
			this.calendar
		);

		// update the EventInstance, for handlers
		eventInstance.dateProfile = eventMutation.dateMutation.buildNewDateProfile(
			eventInstance.dateProfile,
			this.calendar
		);

		this.triggerEventResize(
			eventInstance,
			eventMutation.dateMutation.endDelta,
			undoFunc,
			el, ev
		);
	},


	// Triggers event-resize handlers that have subscribed via the API
	triggerEventResize: function(eventInstance, durationDelta, undoFunc, el, ev) {
		this.publiclyTrigger('eventResize', {
			context: el[0],
			args: [
				eventInstance.toLegacy(),
				durationDelta,
				undoFunc,
				ev,
				{}, // {} = jqui dummy
				this
			]
		});
	},


	/* Selection (time range)
	------------------------------------------------------------------------------------------------------------------*/


	// Selects a date span on the view. `start` and `end` are both Moments.
	// `ev` is the native mouse event that begin the interaction.
	select: function(footprint, ev) {
		this.unselect(ev);
		this.renderSelectionFootprint(footprint);
		this.reportSelection(footprint, ev);
	},


	renderSelectionFootprint: function(footprint, ev) {
		if (this.renderSelection) { // legacy method in custom view classes
			this.renderSelection(
				footprint.toLegacy(this.calendar)
			);
		}
		else {
			InteractiveDateComponent.prototype.renderSelectionFootprint.apply(this, arguments);
		}
	},


	// Called when a new selection is made. Updates internal state and triggers handlers.
	reportSelection: function(footprint, ev) {
		this.isSelected = true;
		this.triggerSelect(footprint, ev);
	},


	// Triggers handlers to 'select'
	triggerSelect: function(footprint, ev) {
		var dateProfile = this.calendar.footprintToDateProfile(footprint); // abuse of "Event"DateProfile?

		this.publiclyTrigger('select', {
			context: this,
			args: [
				dateProfile.start,
				dateProfile.end,
				ev,
				this
			]
		});
	},


	// Undoes a selection. updates in the internal state and triggers handlers.
	// `ev` is the native mouse event that began the interaction.
	unselect: function(ev) {
		if (this.isSelected) {
			this.isSelected = false;
			if (this.destroySelection) {
				this.destroySelection(); // TODO: deprecate
			}
			this.unrenderSelection();
			this.publiclyTrigger('unselect', {
				context: this,
				args: [ ev, this ]
			});
		}
	},


	/* Event Selection
	------------------------------------------------------------------------------------------------------------------*/


	selectEventInstance: function(eventInstance) {
		if (
			!this.selectedEventInstance ||
			this.selectedEventInstance !== eventInstance
		) {
			this.unselectEventInstance();

			this.getEventSegs().forEach(function(seg) {
				if (
					seg.footprint.eventInstance === eventInstance &&
					seg.el // necessary?
				) {
					seg.el.addClass('fc-selected');
				}
			});

			this.selectedEventInstance = eventInstance;
		}
	},


	unselectEventInstance: function() {
		if (this.selectedEventInstance) {

			this.getEventSegs().forEach(function(seg) {
				if (seg.el) { // necessary?
					seg.el.removeClass('fc-selected');
				}
			});

			this.selectedEventInstance = null;
		}
	},


	isEventDefSelected: function(eventDef) {
		// event references might change on refetchEvents(), while selectedEventInstance doesn't,
		// so compare IDs
		return this.selectedEventInstance && this.selectedEventInstance.def.id === eventDef.id;
	},


	/* Mouse / Touch Unselecting (time range & event unselection)
	------------------------------------------------------------------------------------------------------------------*/
	// TODO: move consistently to down/start or up/end?
	// TODO: don't kill previous selection if touch scrolling


	handleDocumentMousedown: function(ev) {
		if (isPrimaryMouseButton(ev)) {
			this.processUnselect(ev);
		}
	},


	processUnselect: function(ev) {
		this.processRangeUnselect(ev);
		this.processEventUnselect(ev);
	},


	processRangeUnselect: function(ev) {
		var ignore;

		// is there a time-range selection?
		if (this.isSelected && this.opt('unselectAuto')) {
			// only unselect if the clicked element is not identical to or inside of an 'unselectCancel' element
			ignore = this.opt('unselectCancel');
			if (!ignore || !$(ev.target).closest(ignore).length) {
				this.unselect(ev);
			}
		}
	},


	processEventUnselect: function(ev) {
		if (this.selectedEventInstance) {
			if (!$(ev.target).closest('.fc-selected').length) {
				this.unselectEventInstance();
			}
		}
	},


	/* Triggers
	------------------------------------------------------------------------------------------------------------------*/


	triggerBaseRendered: function() {
		this.publiclyTrigger('viewRender', {
			context: this,
			args: [ this, this.el ]
		});
	},


	triggerBaseUnrendered: function() {
		this.publiclyTrigger('viewDestroy', {
			context: this,
			args: [ this, this.el ]
		});
	},


	// Triggers handlers to 'dayClick'
	// Span has start/end of the clicked area. Only the start is useful.
	triggerDayClick: function(footprint, dayEl, ev) {
		var dateProfile = this.calendar.footprintToDateProfile(footprint); // abuse of "Event"DateProfile?

		this.publiclyTrigger('dayClick', {
			context: dayEl,
			args: [ dateProfile.start, ev, this ]
		});
	}

});


View.watch('displayingDates', [ 'isInDom', 'dateProfile' ], function(deps) {
	this.requestDateRender(deps.dateProfile);
}, function() {
	this.requestDateUnrender();
});


View.watch('displayingBusinessHours', [ 'displayingDates', 'businessHourGenerator' ], function(deps) {
	this.requestBusinessHoursRender(deps.businessHourGenerator);
}, function() {
	this.requestBusinessHoursUnrender();
});


View.watch('initialEvents', [ 'dateProfile' ], function(deps) {
	return this.fetchInitialEvents(deps.dateProfile);
});


View.watch('bindingEvents', [ 'initialEvents' ], function(deps) {
	this.setEvents(deps.initialEvents);
	this.bindEventChanges();
}, function() {
	this.unbindEventChanges();
	this.unsetEvents();
});


View.watch('displayingEvents', [ 'displayingDates', 'hasEvents' ], function() {
	this.requestEventsRender(this.get('currentEvents'));
}, function() {
	this.requestEventsUnrender();
});


View.watch('title', [ 'dateProfile' ], function(deps) {
	return (this.title = this.computeTitle(deps.dateProfile)); // assign to View for legacy reasons
});


View.watch('legacyDateProps', [ 'dateProfile' ], function(deps) {
	var calendar = this.calendar;
	var dateProfile = deps.dateProfile;

	// DEPRECATED, but we need to keep it updated...
	this.start = calendar.msToMoment(dateProfile.activeUnzonedRange.startMs, dateProfile.isRangeAllDay);
	this.end = calendar.msToMoment(dateProfile.activeUnzonedRange.endMs, dateProfile.isRangeAllDay);
	this.intervalStart = calendar.msToMoment(dateProfile.currentUnzonedRange.startMs, dateProfile.isRangeAllDay);
	this.intervalEnd = calendar.msToMoment(dateProfile.currentUnzonedRange.endMs, dateProfile.isRangeAllDay);
});

;;

View.mixin({

	usesMinMaxTime: false, // whether minTime/maxTime will affect the activeUnzonedRange. Views must opt-in.

	// DEPRECATED
	start: null, // use activeUnzonedRange
	end: null, // use activeUnzonedRange
	intervalStart: null, // use currentUnzonedRange
	intervalEnd: null, // use currentUnzonedRange


	/* Date Range Computation
	------------------------------------------------------------------------------------------------------------------*/


	// Builds a structure with info about what the dates/ranges will be for the "prev" view.
	buildPrevDateProfile: function(date) {
		var dateProfile = this.get('dateProfile');
		var prevDate = date.clone().startOf(dateProfile.currentRangeUnit)
			.subtract(dateProfile.dateIncrement);

		return this.buildDateProfile(prevDate, -1);
	},


	// Builds a structure with info about what the dates/ranges will be for the "next" view.
	buildNextDateProfile: function(date) {
		var dateProfile = this.get('dateProfile');
		var nextDate = date.clone().startOf(dateProfile.currentRangeUnit)
			.add(dateProfile.dateIncrement);

		return this.buildDateProfile(nextDate, 1);
	},


	// Builds a structure holding dates/ranges for rendering around the given date.
	// Optional direction param indicates whether the date is being incremented/decremented
	// from its previous value. decremented = -1, incremented = 1 (default).
	buildDateProfile: function(date, direction, forceToValid) {
		var isDateAllDay = !date.hasTime();
		var validUnzonedRange;
		var minTime = null;
		var maxTime = null;
		var currentInfo;
		var isRangeAllDay;
		var renderUnzonedRange;
		var activeUnzonedRange;
		var isValid;

		validUnzonedRange = this.buildValidRange();
		validUnzonedRange = this.trimHiddenDays(validUnzonedRange);

		if (forceToValid) {
			date = this.calendar.msToUtcMoment(
				validUnzonedRange.constrainDate(date), // returns MS
				isDateAllDay
			);
		}

		currentInfo = this.buildCurrentRangeInfo(date, direction);
		isRangeAllDay = /^(year|month|week|day)$/.test(currentInfo.unit);
		renderUnzonedRange = this.buildRenderRange(
			this.trimHiddenDays(currentInfo.unzonedRange),
			currentInfo.unit,
			isRangeAllDay
		);
		renderUnzonedRange = this.trimHiddenDays(renderUnzonedRange);
		activeUnzonedRange = renderUnzonedRange.clone();

		if (!this.opt('showNonCurrentDates')) {
			activeUnzonedRange = activeUnzonedRange.intersect(currentInfo.unzonedRange);
		}

		minTime = moment.duration(this.opt('minTime'));
		maxTime = moment.duration(this.opt('maxTime'));
		activeUnzonedRange = this.adjustActiveRange(activeUnzonedRange, minTime, maxTime);
		activeUnzonedRange = activeUnzonedRange.intersect(validUnzonedRange); // might return null

		if (activeUnzonedRange) {
			date = this.calendar.msToUtcMoment(
				activeUnzonedRange.constrainDate(date), // returns MS
				isDateAllDay
			);
		}

		// it's invalid if the originally requested date is not contained,
		// or if the range is completely outside of the valid range.
		isValid = currentInfo.unzonedRange.intersectsWith(validUnzonedRange);

		return {
			// constraint for where prev/next operations can go and where events can be dragged/resized to.
			// an object with optional start and end properties.
			validUnzonedRange: validUnzonedRange,

			// range the view is formally responsible for.
			// for example, a month view might have 1st-31st, excluding padded dates
			currentUnzonedRange: currentInfo.unzonedRange,

			// name of largest unit being displayed, like "month" or "week"
			currentRangeUnit: currentInfo.unit,

			isRangeAllDay: isRangeAllDay,

			// dates that display events and accept drag-n-drop
			// will be `null` if no dates accept events
			activeUnzonedRange: activeUnzonedRange,

			// date range with a rendered skeleton
			// includes not-active days that need some sort of DOM
			renderUnzonedRange: renderUnzonedRange,

			// Duration object that denotes the first visible time of any given day
			minTime: minTime,

			// Duration object that denotes the exclusive visible end time of any given day
			maxTime: maxTime,

			isValid: isValid,

			date: date,

			// how far the current date will move for a prev/next operation
			dateIncrement: this.buildDateIncrement(currentInfo.duration)
				// pass a fallback (might be null) ^
		};
	},


	// Builds an object with optional start/end properties.
	// Indicates the minimum/maximum dates to display.
	// not responsible for trimming hidden days.
	buildValidRange: function() {
		return this.getUnzonedRangeOption('validRange', this.calendar.getNow()) ||
			new UnzonedRange(); // completely open-ended
	},


	// Builds a structure with info about the "current" range, the range that is
	// highlighted as being the current month for example.
	// See buildDateProfile for a description of `direction`.
	// Guaranteed to have `range` and `unit` properties. `duration` is optional.
	// TODO: accept a MS-time instead of a moment `date`?
	buildCurrentRangeInfo: function(date, direction) {
		var duration = null;
		var unit = null;
		var unzonedRange = null;
		var dayCount;

		if (this.viewSpec.duration) {
			duration = this.viewSpec.duration;
			unit = this.viewSpec.durationUnit;
			unzonedRange = this.buildRangeFromDuration(date, direction, duration, unit);
		}
		else if ((dayCount = this.opt('dayCount'))) {
			unit = 'day';
			unzonedRange = this.buildRangeFromDayCount(date, direction, dayCount);
		}
		else if ((unzonedRange = this.buildCustomVisibleRange(date))) {
			unit = computeGreatestUnit(unzonedRange.getStart(), unzonedRange.getEnd());
		}
		else {
			duration = this.getFallbackDuration();
			unit = computeGreatestUnit(duration);
			unzonedRange = this.buildRangeFromDuration(date, direction, duration, unit);
		}

		return { duration: duration, unit: unit, unzonedRange: unzonedRange };
	},


	getFallbackDuration: function() {
		return moment.duration({ days: 1 });
	},


	// Returns a new activeUnzonedRange to have time values (un-ambiguate)
	// minTime or maxTime causes the range to expand.
	adjustActiveRange: function(unzonedRange, minTime, maxTime) {
		var start = unzonedRange.getStart();
		var end = unzonedRange.getEnd();

		if (this.usesMinMaxTime) {

			if (minTime < 0) {
				start.time(0).add(minTime);
			}

			if (maxTime > 24 * 60 * 60 * 1000) { // beyond 24 hours?
				end.time(maxTime - (24 * 60 * 60 * 1000));
			}
		}

		return new UnzonedRange(start, end);
	},


	// Builds the "current" range when it is specified as an explicit duration.
	// `unit` is the already-computed computeGreatestUnit value of duration.
	// TODO: accept a MS-time instead of a moment `date`?
	buildRangeFromDuration: function(date, direction, duration, unit) {
		var alignment = this.opt('dateAlignment');
		var start = date.clone();
		var end;
		var dateIncrementInput;
		var dateIncrementDuration;

		// if the view displays a single day or smaller
		if (duration.as('days') <= 1) {
			if (this.isHiddenDay(start)) {
				start = this.skipHiddenDays(start, direction);
				start.startOf('day');
			}
		}

		// compute what the alignment should be
		if (!alignment) {
			dateIncrementInput = this.opt('dateIncrement');

			if (dateIncrementInput) {
				dateIncrementDuration = moment.duration(dateIncrementInput);

				// use the smaller of the two units
				if (dateIncrementDuration < duration) {
					alignment = computeDurationGreatestUnit(dateIncrementDuration, dateIncrementInput);
				}
				else {
					alignment = unit;
				}
			}
			else {
				alignment = unit;
			}
		}

		start.startOf(alignment);
		end = start.clone().add(duration);

		return new UnzonedRange(start, end);
	},


	// Builds the "current" range when a dayCount is specified.
	// TODO: accept a MS-time instead of a moment `date`?
	buildRangeFromDayCount: function(date, direction, dayCount) {
		var customAlignment = this.opt('dateAlignment');
		var runningCount = 0;
		var start = date.clone();
		var end;

		if (customAlignment) {
			start.startOf(customAlignment);
		}

		start.startOf('day');
		start = this.skipHiddenDays(start, direction);

		end = start.clone();
		do {
			end.add(1, 'day');
			if (!this.isHiddenDay(end)) {
				runningCount++;
			}
		} while (runningCount < dayCount);

		return new UnzonedRange(start, end);
	},


	// Builds a normalized range object for the "visible" range,
	// which is a way to define the currentUnzonedRange and activeUnzonedRange at the same time.
	// TODO: accept a MS-time instead of a moment `date`?
	buildCustomVisibleRange: function(date) {
		var visibleUnzonedRange = this.getUnzonedRangeOption(
			'visibleRange',
			this.calendar.applyTimezone(date) // correct zone. also generates new obj that avoids mutations
		);

		if (visibleUnzonedRange && (visibleUnzonedRange.startMs === null || visibleUnzonedRange.endMs === null)) {
			return null;
		}

		return visibleUnzonedRange;
	},


	// Computes the range that will represent the element/cells for *rendering*,
	// but which may have voided days/times.
	// not responsible for trimming hidden days.
	buildRenderRange: function(currentUnzonedRange, currentRangeUnit, isRangeAllDay) {
		return currentUnzonedRange.clone();
	},


	// Compute the duration value that should be added/substracted to the current date
	// when a prev/next operation happens.
	buildDateIncrement: function(fallback) {
		var dateIncrementInput = this.opt('dateIncrement');
		var customAlignment;

		if (dateIncrementInput) {
			return moment.duration(dateIncrementInput);
		}
		else if ((customAlignment = this.opt('dateAlignment'))) {
			return moment.duration(1, customAlignment);
		}
		else if (fallback) {
			return fallback;
		}
		else {
			return moment.duration({ days: 1 });
		}
	},


	// Remove days from the beginning and end of the range that are computed as hidden.
	trimHiddenDays: function(inputUnzonedRange) {
		var start = inputUnzonedRange.getStart();
		var end = inputUnzonedRange.getEnd();

		if (start) {
			start = this.skipHiddenDays(start);
		}

		if (end) {
			end = this.skipHiddenDays(end, -1, true);
		}

		return new UnzonedRange(start, end);
	},


	// For DateComponent::getDayClasses
	isDateInOtherMonth: function(date, dateProfile) {
		return false;
	},


	// Arguments after name will be forwarded to a hypothetical function value
	// WARNING: passed-in arguments will be given to generator functions as-is and can cause side-effects.
	// Always clone your objects if you fear mutation.
	getUnzonedRangeOption: function(name) {
		var val = this.opt(name);

		if (typeof val === 'function') {
			val = val.apply(
				null,
				Array.prototype.slice.call(arguments, 1)
			);
		}

		if (val) {
			return this.calendar.parseUnzonedRange(val);
		}
	},


	/* Hidden Days
	------------------------------------------------------------------------------------------------------------------*/


	// Initializes internal variables related to calculating hidden days-of-week
	initHiddenDays: function() {
		var hiddenDays = this.opt('hiddenDays') || []; // array of day-of-week indices that are hidden
		var isHiddenDayHash = []; // is the day-of-week hidden? (hash with day-of-week-index -> bool)
		var dayCnt = 0;
		var i;

		if (this.opt('weekends') === false) {
			hiddenDays.push(0, 6); // 0=sunday, 6=saturday
		}

		for (i = 0; i < 7; i++) {
			if (
				!(isHiddenDayHash[i] = $.inArray(i, hiddenDays) !== -1)
			) {
				dayCnt++;
			}
		}

		if (!dayCnt) {
			throw 'invalid hiddenDays'; // all days were hidden? bad.
		}

		this.isHiddenDayHash = isHiddenDayHash;
	},


	// Is the current day hidden?
	// `day` is a day-of-week index (0-6), or a Moment
	isHiddenDay: function(day) {
		if (moment.isMoment(day)) {
			day = day.day();
		}
		return this.isHiddenDayHash[day];
	},


	// Incrementing the current day until it is no longer a hidden day, returning a copy.
	// DOES NOT CONSIDER validUnzonedRange!
	// If the initial value of `date` is not a hidden day, don't do anything.
	// Pass `isExclusive` as `true` if you are dealing with an end date.
	// `inc` defaults to `1` (increment one day forward each time)
	skipHiddenDays: function(date, inc, isExclusive) {
		var out = date.clone();
		inc = inc || 1;
		while (
			this.isHiddenDayHash[(out.day() + (isExclusive ? inc : 0) + 7) % 7]
		) {
			out.add(inc, 'days');
		}
		return out;
	}

});

;;

/* Toolbar with buttons and title
----------------------------------------------------------------------------------------------------------------------*/

function Toolbar(calendar, toolbarOptions) {
	var t = this;

	// exports
	t.setToolbarOptions = setToolbarOptions;
	t.render = render;
	t.removeElement = removeElement;
	t.updateTitle = updateTitle;
	t.activateButton = activateButton;
	t.deactivateButton = deactivateButton;
	t.disableButton = disableButton;
	t.enableButton = enableButton;
	t.getViewsWithButtons = getViewsWithButtons;
	t.el = null; // mirrors local `el`

	// locals
	var el;
	var viewsWithButtons = [];

	// method to update toolbar-specific options, not calendar-wide options
	function setToolbarOptions(newToolbarOptions) {
		toolbarOptions = newToolbarOptions;
	}

	// can be called repeatedly and will rerender
	function render() {
		var sections = toolbarOptions.layout;

		if (sections) {
			if (!el) {
				el = this.el = $("<div class='fc-toolbar "+ toolbarOptions.extraClasses + "'/>");
			}
			else {
				el.empty();
			}
			el.append(renderSection('left'))
				.append(renderSection('right'))
				.append(renderSection('center'))
				.append('<div class="fc-clear"/>');
		}
		else {
			removeElement();
		}
	}


	function removeElement() {
		if (el) {
			el.remove();
			el = t.el = null;
		}
	}


	function renderSection(position) {
		var theme = calendar.theme;
		var sectionEl = $('<div class="fc-' + position + '"/>');
		var buttonStr = toolbarOptions.layout[position];
		var calendarCustomButtons = calendar.opt('customButtons') || {};
		var calendarButtonTextOverrides = calendar.overrides.buttonText || {};
		var calendarButtonText = calendar.opt('buttonText') || {};

		if (buttonStr) {
			$.each(buttonStr.split(' '), function(i) {
				var groupChildren = $();
				var isOnlyButtons = true;
				var groupEl;

				$.each(this.split(','), function(j, buttonName) {
					var customButtonProps;
					var viewSpec;
					var buttonClick;
					var buttonIcon; // only one of these will be set
					var buttonText; // "
					var buttonInnerHtml;
					var buttonClasses;
					var buttonEl;

					if (buttonName == 'title') {
						groupChildren = groupChildren.add($('<h2>&nbsp;</h2>')); // we always want it to take up height
						isOnlyButtons = false;
					}
					else {

						if ((customButtonProps = calendarCustomButtons[buttonName])) {
							buttonClick = function(ev) {
								if (customButtonProps.click) {
									customButtonProps.click.call(buttonEl[0], ev);
								}
							};
							(buttonIcon = theme.getCustomButtonIconClass(customButtonProps)) ||
							(buttonIcon = theme.getIconClass(buttonName)) ||
							(buttonText = customButtonProps.text); // jshint ignore:line
						}
						else if ((viewSpec = calendar.getViewSpec(buttonName))) {
							viewsWithButtons.push(buttonName);
							buttonClick = function() {
								calendar.changeView(buttonName);
							};
							(buttonText = viewSpec.buttonTextOverride) ||
							(buttonIcon = theme.getIconClass(buttonName)) ||
							(buttonText = viewSpec.buttonTextDefault); // jshint ignore:line
						}
						else if (calendar[buttonName]) { // a calendar method
							buttonClick = function() {
								calendar[buttonName]();
							};
							(buttonText = calendarButtonTextOverrides[buttonName]) ||
							(buttonIcon = theme.getIconClass(buttonName)) ||
							(buttonText = calendarButtonText[buttonName]); // jshint ignore:line
							//            ^ everything else is considered default
						}

						if (buttonClick) {

							buttonClasses = [
								'fc-' + buttonName + '-button',
								theme.getClass('button'),
								theme.getClass('stateDefault')
							];

							if (buttonText) {
								buttonInnerHtml = htmlEscape(buttonText);
							}
							else if (buttonIcon) {
								buttonInnerHtml = "<span class='" + buttonIcon + "'></span>";
							}

							buttonEl = $( // type="button" so that it doesn't submit a form
								'<button type="button" class="' + buttonClasses.join(' ') + '">' +
									buttonInnerHtml +
								'</button>'
								)
								.click(function(ev) {
									// don't process clicks for disabled buttons
									if (!buttonEl.hasClass(theme.getClass('stateDisabled'))) {

										buttonClick(ev);

										// after the click action, if the button becomes the "active" tab, or disabled,
										// it should never have a hover class, so remove it now.
										if (
											buttonEl.hasClass(theme.getClass('stateActive')) ||
											buttonEl.hasClass(theme.getClass('stateDisabled'))
										) {
											buttonEl.removeClass(theme.getClass('stateHover'));
										}
									}
								})
								.mousedown(function() {
									// the *down* effect (mouse pressed in).
									// only on buttons that are not the "active" tab, or disabled
									buttonEl
										.not('.' + theme.getClass('stateActive'))
										.not('.' + theme.getClass('stateDisabled'))
										.addClass(theme.getClass('stateDown'));
								})
								.mouseup(function() {
									// undo the *down* effect
									buttonEl.removeClass(theme.getClass('stateDown'));
								})
								.hover(
									function() {
										// the *hover* effect.
										// only on buttons that are not the "active" tab, or disabled
										buttonEl
											.not('.' + theme.getClass('stateActive'))
											.not('.' + theme.getClass('stateDisabled'))
											.addClass(theme.getClass('stateHover'));
									},
									function() {
										// undo the *hover* effect
										buttonEl
											.removeClass(theme.getClass('stateHover'))
											.removeClass(theme.getClass('stateDown')); // if mouseleave happens before mouseup
									}
								);

							groupChildren = groupChildren.add(buttonEl);
						}
					}
				});

				if (isOnlyButtons) {
					groupChildren
						.first().addClass(theme.getClass('cornerLeft')).end()
						.last().addClass(theme.getClass('cornerRight')).end();
				}

				if (groupChildren.length > 1) {
					groupEl = $('<div/>');
					if (isOnlyButtons) {
						groupEl.addClass(theme.getClass('buttonGroup'));
					}
					groupEl.append(groupChildren);
					sectionEl.append(groupEl);
				}
				else {
					sectionEl.append(groupChildren); // 1 or 0 children
				}
			});
		}

		return sectionEl;
	}


	function updateTitle(text) {
		if (el) {
			el.find('h2').text(text);
		}
	}


	function activateButton(buttonName) {
		if (el) {
			el.find('.fc-' + buttonName + '-button')
				.addClass(calendar.theme.getClass('stateActive'));
		}
	}


	function deactivateButton(buttonName) {
		if (el) {
			el.find('.fc-' + buttonName + '-button')
				.removeClass(calendar.theme.getClass('stateActive'));
		}
	}


	function disableButton(buttonName) {
		if (el) {
			el.find('.fc-' + buttonName + '-button')
				.prop('disabled', true)
				.addClass(calendar.theme.getClass('stateDisabled'));
		}
	}


	function enableButton(buttonName) {
		if (el) {
			el.find('.fc-' + buttonName + '-button')
				.prop('disabled', false)
				.removeClass(calendar.theme.getClass('stateDisabled'));
		}
	}


	function getViewsWithButtons() {
		return viewsWithButtons;
	}

}

;;

var Calendar = FC.Calendar = Class.extend(EmitterMixin, ListenerMixin, {

	view: null, // current View object
	viewsByType: null, // holds all instantiated view instances, current or not
	currentDate: null, // unzoned moment. private (public API should use getDate instead)
	theme: null,
	businessHourGenerator: null,
	loadingLevel: 0, // number of simultaneous loading tasks


	constructor: function(el, overrides) {

		// declare the current calendar instance relies on GlobalEmitter. needed for garbage collection.
		// unneeded() is called in destroy.
		GlobalEmitter.needed();

		this.el = el;
		this.viewsByType = {};
		this.viewSpecCache = {};

		this.initOptionsInternals(overrides);
		this.initMomentInternals(); // needs to happen after options hash initialized
		this.initCurrentDate();
		this.initEventManager();

		this.constructed();
	},


	// useful for monkeypatching. TODO: BaseClass?
	constructed: function() {
	},


	// Public API
	// -----------------------------------------------------------------------------------------------------------------


	getView: function() {
		return this.view;
	},


	publiclyTrigger: function(name, triggerInfo) {
		var optHandler = this.opt(name);
		var context;
		var args;

		if ($.isPlainObject(triggerInfo)) {
			context = triggerInfo.context;
			args = triggerInfo.args;
		}
		else if ($.isArray(triggerInfo)) {
			args = triggerInfo;
		}

		if (context == null) {
			context = this.el[0]; // fallback context
		}

		if (!args) {
			args = [];
		}

		this.triggerWith(name, context, args); // Emitter's method

		if (optHandler) {
			return optHandler.apply(context, args);
		}
	},


	hasPublicHandlers: function(name) {
		return this.hasHandlers(name) ||
			this.opt(name); // handler specified in options
	},


	// View
	// -----------------------------------------------------------------------------------------------------------------


	// Given a view name for a custom view or a standard view, creates a ready-to-go View object
	instantiateView: function(viewType) {
		var spec = this.getViewSpec(viewType);

		return new spec['class'](this, spec);
	},


	// Returns a boolean about whether the view is okay to instantiate at some point
	isValidViewType: function(viewType) {
		return Boolean(this.getViewSpec(viewType));
	},


	changeView: function(viewName, dateOrRange) {

		if (dateOrRange) {

			if (dateOrRange.start && dateOrRange.end) { // a range
				this.recordOptionOverrides({ // will not rerender
					visibleRange: dateOrRange
				});
			}
			else { // a date
				this.currentDate = this.moment(dateOrRange).stripZone(); // just like gotoDate
			}
		}

		this.renderView(viewName);
	},


	// Forces navigation to a view for the given date.
	// `viewType` can be a specific view name or a generic one like "week" or "day".
	zoomTo: function(newDate, viewType) {
		var spec;

		viewType = viewType || 'day'; // day is default zoom
		spec = this.getViewSpec(viewType) || this.getUnitViewSpec(viewType);

		this.currentDate = newDate.clone();
		this.renderView(spec ? spec.type : null);
	},


	// Current Date
	// -----------------------------------------------------------------------------------------------------------------


	initCurrentDate: function() {
		var defaultDateInput = this.opt('defaultDate');

		// compute the initial ambig-timezone date
		if (defaultDateInput != null) {
			this.currentDate = this.moment(defaultDateInput).stripZone();
		}
		else {
			this.currentDate = this.getNow(); // getNow already returns unzoned
		}
	},


	prev: function() {
		var prevInfo = this.view.buildPrevDateProfile(this.currentDate);

		if (prevInfo.isValid) {
			this.currentDate = prevInfo.date;
			this.renderView();
		}
	},


	next: function() {
		var nextInfo = this.view.buildNextDateProfile(this.currentDate);

		if (nextInfo.isValid) {
			this.currentDate = nextInfo.date;
			this.renderView();
		}
	},


	prevYear: function() {
		this.currentDate.add(-1, 'years');
		this.renderView();
	},


	nextYear: function() {
		this.currentDate.add(1, 'years');
		this.renderView();
	},


	today: function() {
		this.currentDate = this.getNow(); // should deny like prev/next?
		this.renderView();
	},


	gotoDate: function(zonedDateInput) {
		this.currentDate = this.moment(zonedDateInput).stripZone();
		this.renderView();
	},


	incrementDate: function(delta) {
		this.currentDate.add(moment.duration(delta));
		this.renderView();
	},


	// for external API
	getDate: function() {
		return this.applyTimezone(this.currentDate); // infuse the calendar's timezone
	},


	// Loading Triggering
	// -----------------------------------------------------------------------------------------------------------------


	// Should be called when any type of async data fetching begins
	pushLoading: function() {
		if (!(this.loadingLevel++)) {
			this.publiclyTrigger('loading', [ true, this.view ]);
		}
	},


	// Should be called when any type of async data fetching completes
	popLoading: function() {
		if (!(--this.loadingLevel)) {
			this.publiclyTrigger('loading', [ false, this.view ]);
		}
	},


	// Selection
	// -----------------------------------------------------------------------------------------------------------------


	// this public method receives start/end dates in any format, with any timezone
	select: function(zonedStartInput, zonedEndInput) {
		this.view.select(
			this.buildSelectFootprint.apply(this, arguments)
		);
	},


	unselect: function() { // safe to be called before renderView
		if (this.view) {
			this.view.unselect();
		}
	},


	// Given arguments to the select method in the API, returns a span (unzoned start/end and other info)
	buildSelectFootprint: function(zonedStartInput, zonedEndInput) {
		var start = this.moment(zonedStartInput).stripZone();
		var end;

		if (zonedEndInput) {
			end = this.moment(zonedEndInput).stripZone();
		}
		else if (start.hasTime()) {
			end = start.clone().add(this.defaultTimedEventDuration);
		}
		else {
			end = start.clone().add(this.defaultAllDayEventDuration);
		}

		return new ComponentFootprint(
			new UnzonedRange(start, end),
			!start.hasTime()
		);
	},


	// Misc
	// -----------------------------------------------------------------------------------------------------------------


	// will return `null` if invalid range
	parseUnzonedRange: function(rangeInput) {
		var start = null;
		var end = null;

		if (rangeInput.start) {
			start = this.moment(rangeInput.start).stripZone();
		}

		if (rangeInput.end) {
			end = this.moment(rangeInput.end).stripZone();
		}

		if (!start && !end) {
			return null;
		}

		if (start && end && end.isBefore(start)) {
			return null;
		}

		return new UnzonedRange(start, end);
	},


	rerenderEvents: function() { // API method. destroys old events if previously rendered.
		this.view.flash('displayingEvents');
	},


	initEventManager: function() {
		var _this = this;
		var eventManager = new EventManager(this);
		var rawSources = this.opt('eventSources') || [];
		var singleRawSource = this.opt('events');

		this.eventManager = eventManager;

		if (singleRawSource) {
			rawSources.unshift(singleRawSource);
		}

		eventManager.on('release', function(eventsPayload) {
			_this.trigger('eventsReset', eventsPayload);
		});

		eventManager.freeze();

		rawSources.forEach(function(rawSource) {
			var source = EventSourceParser.parse(rawSource, _this);

			if (source) {
				eventManager.addSource(source);
			}
		});

		eventManager.thaw();
	},


	requestEvents: function(start, end) {
		return this.eventManager.requestEvents(
			start,
			end,
			this.opt('timezone'),
			!this.opt('lazyFetching')
		);
	}

});

;;
/*
Options binding/triggering system.
*/
Calendar.mixin({

	dirDefaults: null, // option defaults related to LTR or RTL
	localeDefaults: null, // option defaults related to current locale
	overrides: null, // option overrides given to the fullCalendar constructor
	dynamicOverrides: null, // options set with dynamic setter method. higher precedence than view overrides.
	optionsModel: null, // all defaults combined with overrides


	initOptionsInternals: function(overrides) {
		this.overrides = $.extend({}, overrides); // make a copy
		this.dynamicOverrides = {};
		this.optionsModel = new Model();

		this.populateOptionsHash();
	},


	// public getter/setter
	option: function(name, value) {
		var newOptionHash;

		if (typeof name === 'string') {
			if (value === undefined) { // getter
				return this.optionsModel.get(name);
			}
			else { // setter for individual option
				newOptionHash = {};
				newOptionHash[name] = value;
				this.setOptions(newOptionHash);
			}
		}
		else if (typeof name === 'object') { // compound setter with object input
			this.setOptions(name);
		}
	},


	// private getter
	opt: function(name) {
		return this.optionsModel.get(name);
	},


	setOptions: function(newOptionHash) {
		var optionCnt = 0;
		var optionName;

		this.recordOptionOverrides(newOptionHash); // will trigger optionsModel watchers

		for (optionName in newOptionHash) {
			optionCnt++;
		}

		// special-case handling of single option change.
		// if only one option change, `optionName` will be its name.
		if (optionCnt === 1) {
			if (optionName === 'height' || optionName === 'contentHeight' || optionName === 'aspectRatio') {
				this.updateViewSize(true); // isResize=true
				return;
			}
			else if (optionName === 'defaultDate') {
				return; // can't change date this way. use gotoDate instead
			}
			else if (optionName === 'businessHours') {
				return; // optionsModel already reacts to this
			}
			else if (optionName === 'timezone') {
				this.view.flash('initialEvents');
				return;
			}
		}

		// catch-all. rerender the header and footer and rebuild/rerender the current view
		this.renderHeader();
		this.renderFooter();

		// even non-current views will be affected by this option change. do before rerender
		// TODO: detangle
		this.viewsByType = {};

		this.reinitView();
	},


	// Computes the flattened options hash for the calendar and assigns to `this.options`.
	// Assumes this.overrides and this.dynamicOverrides have already been initialized.
	populateOptionsHash: function() {
		var locale, localeDefaults;
		var isRTL, dirDefaults;
		var rawOptions;

		locale = firstDefined( // explicit locale option given?
			this.dynamicOverrides.locale,
			this.overrides.locale
		);
		localeDefaults = localeOptionHash[locale];
		if (!localeDefaults) { // explicit locale option not given or invalid?
			locale = Calendar.defaults.locale;
			localeDefaults = localeOptionHash[locale] || {};
		}

		isRTL = firstDefined( // based on options computed so far, is direction RTL?
			this.dynamicOverrides.isRTL,
			this.overrides.isRTL,
			localeDefaults.isRTL,
			Calendar.defaults.isRTL
		);
		dirDefaults = isRTL ? Calendar.rtlDefaults : {};

		this.dirDefaults = dirDefaults;
		this.localeDefaults = localeDefaults;

		rawOptions = mergeOptions([ // merge defaults and overrides. lowest to highest precedence
			Calendar.defaults, // global defaults
			dirDefaults,
			localeDefaults,
			this.overrides,
			this.dynamicOverrides
		]);
		populateInstanceComputableOptions(rawOptions); // fill in gaps with computed options

		this.optionsModel.reset(rawOptions);
	},


	// stores the new options internally, but does not rerender anything.
	recordOptionOverrides: function(newOptionHash) {
		var optionName;

		for (optionName in newOptionHash) {
			this.dynamicOverrides[optionName] = newOptionHash[optionName];
		}

		this.viewSpecCache = {}; // the dynamic override invalidates the options in this cache, so just clear it
		this.populateOptionsHash(); // this.options needs to be recomputed after the dynamic override
	}

});

;;

Calendar.mixin({

	defaultAllDayEventDuration: null,
	defaultTimedEventDuration: null,
	localeData: null,


	initMomentInternals: function() {
		var _this = this;

		this.defaultAllDayEventDuration = moment.duration(this.opt('defaultAllDayEventDuration'));
		this.defaultTimedEventDuration = moment.duration(this.opt('defaultTimedEventDuration'));

		// Called immediately, and when any of the options change.
		// Happens before any internal objects rebuild or rerender, because this is very core.
		this.optionsModel.watch('buildingMomentLocale', [
			'?locale', '?monthNames', '?monthNamesShort', '?dayNames', '?dayNamesShort',
			'?firstDay', '?weekNumberCalculation'
		], function(opts) {
			var weekNumberCalculation = opts.weekNumberCalculation;
			var firstDay = opts.firstDay;
			var _week;

			// normalize
			if (weekNumberCalculation === 'iso') {
				weekNumberCalculation = 'ISO'; // normalize
			}

			var localeData = Object.create( // make a cheap copy
				getMomentLocaleData(opts.locale) // will fall back to en
			);

			if (opts.monthNames) {
				localeData._months = opts.monthNames;
			}
			if (opts.monthNamesShort) {
				localeData._monthsShort = opts.monthNamesShort;
			}
			if (opts.dayNames) {
				localeData._weekdays = opts.dayNames;
			}
			if (opts.dayNamesShort) {
				localeData._weekdaysShort = opts.dayNamesShort;
			}

			if (firstDay == null && weekNumberCalculation === 'ISO') {
				firstDay = 1;
			}
			if (firstDay != null) {
				_week = Object.create(localeData._week); // _week: { dow: # }
				_week.dow = firstDay;
				localeData._week = _week;
			}

			if ( // whitelist certain kinds of input
				weekNumberCalculation === 'ISO' ||
				weekNumberCalculation === 'local' ||
				typeof weekNumberCalculation === 'function'
			) {
				localeData._fullCalendar_weekCalc = weekNumberCalculation; // moment-ext will know what to do with it
			}

			_this.localeData = localeData;

			// If the internal current date object already exists, move to new locale.
			// We do NOT need to do this technique for event dates, because this happens when converting to "segments".
			if (_this.currentDate) {
				_this.localizeMoment(_this.currentDate); // sets to localeData
			}
		});
	},


	// Builds a moment using the settings of the current calendar: timezone and locale.
	// Accepts anything the vanilla moment() constructor accepts.
	moment: function() {
		var mom;

		if (this.opt('timezone') === 'local') {
			mom = FC.moment.apply(null, arguments);

			// Force the moment to be local, because FC.moment doesn't guarantee it.
			if (mom.hasTime()) { // don't give ambiguously-timed moments a local zone
				mom.local();
			}
		}
		else if (this.opt('timezone') === 'UTC') {
			mom = FC.moment.utc.apply(null, arguments); // process as UTC
		}
		else {
			mom = FC.moment.parseZone.apply(null, arguments); // let the input decide the zone
		}

		this.localizeMoment(mom); // TODO

		return mom;
	},


	msToMoment: function(ms, forceAllDay) {
		var mom = FC.moment.utc(ms); // TODO: optimize by using Date.UTC

		if (forceAllDay) {
			mom.stripTime();
		}
		else {
			mom = this.applyTimezone(mom); // may or may not apply locale
		}

		this.localizeMoment(mom);

		return mom;
	},


	msToUtcMoment: function(ms, forceAllDay) {
		var mom = FC.moment.utc(ms); // TODO: optimize by using Date.UTC

		if (forceAllDay) {
			mom.stripTime();
		}

		this.localizeMoment(mom);

		return mom;
	},


	// Updates the given moment's locale settings to the current calendar locale settings.
	localizeMoment: function(mom) {
		mom._locale = this.localeData;
	},


	// Returns a boolean about whether or not the calendar knows how to calculate
	// the timezone offset of arbitrary dates in the current timezone.
	getIsAmbigTimezone: function() {
		return this.opt('timezone') !== 'local' && this.opt('timezone') !== 'UTC';
	},


	// Returns a copy of the given date in the current timezone. Has no effect on dates without times.
	applyTimezone: function(date) {
		if (!date.hasTime()) {
			return date.clone();
		}

		var zonedDate = this.moment(date.toArray());
		var timeAdjust = date.time() - zonedDate.time();
		var adjustedZonedDate;

		// Safari sometimes has problems with this coersion when near DST. Adjust if necessary. (bug #2396)
		if (timeAdjust) { // is the time result different than expected?
			adjustedZonedDate = zonedDate.clone().add(timeAdjust); // add milliseconds
			if (date.time() - adjustedZonedDate.time() === 0) { // does it match perfectly now?
				zonedDate = adjustedZonedDate;
			}
		}

		return zonedDate;
	},


	/*
	Assumes the footprint is non-open-ended.
	*/
	footprintToDateProfile: function(componentFootprint, ignoreEnd) {
		var start = FC.moment.utc(componentFootprint.unzonedRange.startMs);
		var end;

		if (!ignoreEnd) {
			end = FC.moment.utc(componentFootprint.unzonedRange.endMs);
		}

		if (componentFootprint.isAllDay) {
			start.stripTime();

			if (end) {
				end.stripTime();
			}
		}
		else {
			start = this.applyTimezone(start);

			if (end) {
				end = this.applyTimezone(end);
			}
		}

		return new EventDateProfile(start, end, this);
	},


	// Returns a moment for the current date, as defined by the client's computer or from the `now` option.
	// Will return an moment with an ambiguous timezone.
	getNow: function() {
		var now = this.opt('now');
		if (typeof now === 'function') {
			now = now();
		}
		return this.moment(now).stripZone();
	},


	// Produces a human-readable string for the given duration.
	// Side-effect: changes the locale of the given duration.
	humanizeDuration: function(duration) {
		return duration.locale(this.opt('locale')).humanize();
	},



	// Event-Specific Date Utilities. TODO: move
	// -----------------------------------------------------------------------------------------------------------------


	// Get an event's normalized end date. If not present, calculate it from the defaults.
	getEventEnd: function(event) {
		if (event.end) {
			return event.end.clone();
		}
		else {
			return this.getDefaultEventEnd(event.allDay, event.start);
		}
	},


	// Given an event's allDay status and start date, return what its fallback end date should be.
	// TODO: rename to computeDefaultEventEnd
	getDefaultEventEnd: function(allDay, zonedStart) {
		var end = zonedStart.clone();

		if (allDay) {
			end.stripTime().add(this.defaultAllDayEventDuration);
		}
		else {
			end.add(this.defaultTimedEventDuration);
		}

		if (this.getIsAmbigTimezone()) {
			end.stripZone(); // we don't know what the tzo should be
		}

		return end;
	}

});

;;

Calendar.mixin({

	viewSpecCache: null, // cache of view definitions (initialized in Calendar.js)


	// Gets information about how to create a view. Will use a cache.
	getViewSpec: function(viewType) {
		var cache = this.viewSpecCache;

		return cache[viewType] || (cache[viewType] = this.buildViewSpec(viewType));
	},


	// Given a duration singular unit, like "week" or "day", finds a matching view spec.
	// Preference is given to views that have corresponding buttons.
	getUnitViewSpec: function(unit) {
		var viewTypes;
		var i;
		var spec;

		if ($.inArray(unit, unitsDesc) != -1) {

			// put views that have buttons first. there will be duplicates, but oh well
			viewTypes = this.header.getViewsWithButtons(); // TODO: include footer as well?
			$.each(FC.views, function(viewType) { // all views
				viewTypes.push(viewType);
			});

			for (i = 0; i < viewTypes.length; i++) {
				spec = this.getViewSpec(viewTypes[i]);
				if (spec) {
					if (spec.singleUnit == unit) {
						return spec;
					}
				}
			}
		}
	},


	// Builds an object with information on how to create a given view
	buildViewSpec: function(requestedViewType) {
		var viewOverrides = this.overrides.views || {};
		var specChain = []; // for the view. lowest to highest priority
		var defaultsChain = []; // for the view. lowest to highest priority
		var overridesChain = []; // for the view. lowest to highest priority
		var viewType = requestedViewType;
		var spec; // for the view
		var overrides; // for the view
		var durationInput;
		var duration;
		var unit;

		// iterate from the specific view definition to a more general one until we hit an actual View class
		while (viewType) {
			spec = fcViews[viewType];
			overrides = viewOverrides[viewType];
			viewType = null; // clear. might repopulate for another iteration

			if (typeof spec === 'function') { // TODO: deprecate
				spec = { 'class': spec };
			}

			if (spec) {
				specChain.unshift(spec);
				defaultsChain.unshift(spec.defaults || {});
				durationInput = durationInput || spec.duration;
				viewType = viewType || spec.type;
			}

			if (overrides) {
				overridesChain.unshift(overrides); // view-specific option hashes have options at zero-level
				durationInput = durationInput || overrides.duration;
				viewType = viewType || overrides.type;
			}
		}

		spec = mergeProps(specChain);
		spec.type = requestedViewType;
		if (!spec['class']) {
			return false;
		}

		// fall back to top-level `duration` option
		durationInput = durationInput ||
			this.dynamicOverrides.duration ||
			this.overrides.duration;

		if (durationInput) {
			duration = moment.duration(durationInput);

			if (duration.valueOf()) { // valid?

				unit = computeDurationGreatestUnit(duration, durationInput);

				spec.duration = duration;
				spec.durationUnit = unit;

				// view is a single-unit duration, like "week" or "day"
				// incorporate options for this. lowest priority
				if (duration.as(unit) === 1) {
					spec.singleUnit = unit;
					overridesChain.unshift(viewOverrides[unit] || {});
				}
			}
		}

		spec.defaults = mergeOptions(defaultsChain);
		spec.overrides = mergeOptions(overridesChain);

		this.buildViewSpecOptions(spec);
		this.buildViewSpecButtonText(spec, requestedViewType);

		return spec;
	},


	// Builds and assigns a view spec's options object from its already-assigned defaults and overrides
	buildViewSpecOptions: function(spec) {
		spec.options = mergeOptions([ // lowest to highest priority
			Calendar.defaults, // global defaults
			spec.defaults, // view's defaults (from ViewSubclass.defaults)
			this.dirDefaults,
			this.localeDefaults, // locale and dir take precedence over view's defaults!
			this.overrides, // calendar's overrides (options given to constructor)
			spec.overrides, // view's overrides (view-specific options)
			this.dynamicOverrides // dynamically set via setter. highest precedence
		]);
		populateInstanceComputableOptions(spec.options);
	},


	// Computes and assigns a view spec's buttonText-related options
	buildViewSpecButtonText: function(spec, requestedViewType) {

		// given an options object with a possible `buttonText` hash, lookup the buttonText for the
		// requested view, falling back to a generic unit entry like "week" or "day"
		function queryButtonText(options) {
			var buttonText = options.buttonText || {};
			return buttonText[requestedViewType] ||
				// view can decide to look up a certain key
				(spec.buttonTextKey ? buttonText[spec.buttonTextKey] : null) ||
				// a key like "month"
				(spec.singleUnit ? buttonText[spec.singleUnit] : null);
		}

		// highest to lowest priority
		spec.buttonTextOverride =
			queryButtonText(this.dynamicOverrides) ||
			queryButtonText(this.overrides) || // constructor-specified buttonText lookup hash takes precedence
			spec.overrides.buttonText; // `buttonText` for view-specific options is a string

		// highest to lowest priority. mirrors buildViewSpecOptions
		spec.buttonTextDefault =
			queryButtonText(this.localeDefaults) ||
			queryButtonText(this.dirDefaults) ||
			spec.defaults.buttonText || // a single string. from ViewSubclass.defaults
			queryButtonText(Calendar.defaults) ||
			(spec.duration ? this.humanizeDuration(spec.duration) : null) || // like "3 days"
			requestedViewType; // fall back to given view name
	}

});

;;

Calendar.mixin({

	el: null,
	contentEl: null,
	suggestedViewHeight: null,
	ignoreUpdateViewSize: 0,
	freezeContentHeightDepth: 0,
	windowResizeProxy: null,


	render: function() {
		if (!this.contentEl) {
			this.initialRender();
		}
		else if (this.elementVisible()) {
			// mainly for the public API
			this.calcSize();
			this.renderView();
		}
	},


	initialRender: function() {
		var _this = this;
		var el = this.el;

		el.addClass('fc');

		// event delegation for nav links
		el.on('click.fc', 'a[data-goto]', function(ev) {
			var anchorEl = $(this);
			var gotoOptions = anchorEl.data('goto'); // will automatically parse JSON
			var date = _this.moment(gotoOptions.date);
			var viewType = gotoOptions.type;

			// property like "navLinkDayClick". might be a string or a function
			var customAction = _this.view.opt('navLink' + capitaliseFirstLetter(viewType) + 'Click');

			if (typeof customAction === 'function') {
				customAction(date, ev);
			}
			else {
				if (typeof customAction === 'string') {
					viewType = customAction;
				}
				_this.zoomTo(date, viewType);
			}
		});

		// called immediately, and upon option change
		this.optionsModel.watch('settingTheme', [ '?theme', '?themeSystem' ], function(opts) {
			var themeClass = ThemeRegistry.getThemeClass(opts.themeSystem || opts.theme);
			var theme = new themeClass(_this.optionsModel);
			var widgetClass = theme.getClass('widget');

			_this.theme = theme;

			if (widgetClass) {
				el.addClass(widgetClass);
			}
		}, function() {
			var widgetClass = _this.theme.getClass('widget');

			_this.theme = null;

			if (widgetClass) {
				el.removeClass(widgetClass);
			}
		});

		this.optionsModel.watch('settingBusinessHourGenerator', [ '?businessHours' ], function(deps) {
			_this.businessHourGenerator = new BusinessHourGenerator(deps.businessHours, _this);

			if (_this.view) {
				_this.view.set('businessHourGenerator', _this.businessHourGenerator);
			}
		}, function() {
			_this.businessHourGenerator = null;
		});

		// called immediately, and upon option change.
		// HACK: locale often affects isRTL, so we explicitly listen to that too.
		this.optionsModel.watch('applyingDirClasses', [ '?isRTL', '?locale' ], function(opts) {
			el.toggleClass('fc-ltr', !opts.isRTL);
			el.toggleClass('fc-rtl', opts.isRTL);
		});

		this.contentEl = $("<div class='fc-view-container'/>").prependTo(el);

		this.initToolbars();
		this.renderHeader();
		this.renderFooter();
		this.renderView(this.opt('defaultView'));

		if (this.opt('handleWindowResize')) {
			$(window).resize(
				this.windowResizeProxy = debounce( // prevents rapid calls
					this.windowResize.bind(this),
					this.opt('windowResizeDelay')
				)
			);
		}
	},


	destroy: function() {
		if (this.view) {
			this.clearView();
		}

		this.toolbarsManager.proxyCall('removeElement');
		this.contentEl.remove();
		this.el.removeClass('fc fc-ltr fc-rtl');

		// removes theme-related root className
		this.optionsModel.unwatch('settingTheme');
		this.optionsModel.unwatch('settingBusinessHourGenerator');

		this.el.off('.fc'); // unbind nav link handlers

		if (this.windowResizeProxy) {
			$(window).unbind('resize', this.windowResizeProxy);
			this.windowResizeProxy = null;
		}

		GlobalEmitter.unneeded();
	},


	elementVisible: function() {
		return this.el.is(':visible');
	},


	// Render Queue
	// -----------------------------------------------------------------------------------------------------------------


	bindViewHandlers: function(view) {
		var _this = this;

		view.watch('titleForCalendar', [ 'title' ], function(deps) { // TODO: better system
			if (view === _this.view) { // hack
				_this.setToolbarsTitle(deps.title);
			}
		});

		view.watch('dateProfileForCalendar', [ 'dateProfile' ], function(deps) {
			if (view === _this.view) { // hack
				_this.currentDate = deps.dateProfile.date; // might have been constrained by view dates
				_this.updateToolbarButtons(deps.dateProfile);
			}
		});
	},


	unbindViewHandlers: function(view) {
		this.stopListeningTo(view);

		view.unwatch('titleForCalendar');
		view.unwatch('dateProfileForCalendar');
	},


	// View Rendering
	// -----------------------------------------------------------------------------------


	// Renders a view because of a date change, view-type change, or for the first time.
	// If not given a viewType, keep the current view but render different dates.
	// Accepts an optional scroll state to restore to.
	renderView: function(viewType) {
		var oldView = this.view;
		var newView;

		this.freezeContentHeight();

		if (oldView && viewType && oldView.type !== viewType) {
			this.clearView();
		}

		// if viewType changed, or the view was never created, create a fresh view
		if (!this.view && viewType) {
			newView = this.view =
				this.viewsByType[viewType] ||
				(this.viewsByType[viewType] = this.instantiateView(viewType));

			this.bindViewHandlers(newView);

			newView.setElement(
				$("<div class='fc-view fc-" + viewType + "-view' />").appendTo(this.contentEl)
			);

			this.toolbarsManager.proxyCall('activateButton', viewType);
		}

		if (this.view) {

			// prevent unnecessary change firing
			if (this.view.get('businessHourGenerator') !== this.businessHourGenerator) {
				this.view.set('businessHourGenerator', this.businessHourGenerator);
			}

			this.view.setDate(this.currentDate);
		}

		this.thawContentHeight();
	},


	// Unrenders the current view and reflects this change in the Header.
	// Unregsiters the `view`, but does not remove from viewByType hash.
	clearView: function() {
		var currentView = this.view;

		this.toolbarsManager.proxyCall('deactivateButton', currentView.type);

		this.unbindViewHandlers(currentView);

		currentView.removeElement();

		this.view = null;
	},


	// Destroys the view, including the view object. Then, re-instantiates it and renders it.
	// Maintains the same scroll state.
	// TODO: maintain any other user-manipulated state.
	reinitView: function() {
		var oldView = this.view;
		var scroll = oldView.queryScroll(); // wouldn't be so complicated if Calendar owned the scroll
		this.freezeContentHeight();

		this.clearView();
		this.calcSize();
		this.renderView(oldView.type); // needs the type to freshly render

		this.view.applyScroll(scroll);
		this.thawContentHeight();
	},


	// Resizing
	// -----------------------------------------------------------------------------------


	getSuggestedViewHeight: function() {
		if (this.suggestedViewHeight === null) {
			this.calcSize();
		}
		return this.suggestedViewHeight;
	},


	isHeightAuto: function() {
		return this.opt('contentHeight') === 'auto' || this.opt('height') === 'auto';
	},


	updateViewSize: function(isResize) {
		var view = this.view;
		var scroll;

		if (!this.ignoreUpdateViewSize && view) {

			if (isResize) {
				this.calcSize();
				scroll = view.queryScroll();
			}

			this.ignoreUpdateViewSize++;

			view.updateSize(
				this.getSuggestedViewHeight(),
				this.isHeightAuto(),
				isResize
			);

			this.ignoreUpdateViewSize--;

			if (isResize) {
				view.applyScroll(scroll);
			}

			return true; // signal success
		}
	},


	calcSize: function() {
		if (this.elementVisible()) {
			this._calcSize();
		}
	},


	_calcSize: function() { // assumes elementVisible
		var contentHeightInput = this.opt('contentHeight');
		var heightInput = this.opt('height');

		if (typeof contentHeightInput === 'number') { // exists and not 'auto'
			this.suggestedViewHeight = contentHeightInput;
		}
		else if (typeof contentHeightInput === 'function') { // exists and is a function
			this.suggestedViewHeight = contentHeightInput();
		}
		else if (typeof heightInput === 'number') { // exists and not 'auto'
			this.suggestedViewHeight = heightInput - this.queryToolbarsHeight();
		}
		else if (typeof heightInput === 'function') { // exists and is a function
			this.suggestedViewHeight = heightInput() - this.queryToolbarsHeight();
		}
		else if (heightInput === 'parent') { // set to height of parent element
			this.suggestedViewHeight = this.el.parent().height() - this.queryToolbarsHeight();
		}
		else {
			this.suggestedViewHeight = Math.round(
				this.contentEl.width() /
				Math.max(this.opt('aspectRatio'), .5)
			);
		}
	},


	windowResize: function(ev) {
		if (
			ev.target === window && // so we don't process jqui "resize" events that have bubbled up
			this.view &&
			this.view.isDatesRendered
		) {
			if (this.updateViewSize(true)) { // isResize=true, returns true on success
				this.publiclyTrigger('windowResize', [ this.view ]);
			}
		}
	},


	/* Height "Freezing"
	-----------------------------------------------------------------------------*/


	freezeContentHeight: function() {
		if (!(this.freezeContentHeightDepth++)) {
			this.forceFreezeContentHeight();
		}
	},


	forceFreezeContentHeight: function() {
		this.contentEl.css({
			width: '100%',
			height: this.contentEl.height(),
			overflow: 'hidden'
		});
	},


	thawContentHeight: function() {
		this.freezeContentHeightDepth--;

		// always bring back to natural height
		this.contentEl.css({
			width: '',
			height: '',
			overflow: ''
		});

		// but if there are future thaws, re-freeze
		if (this.freezeContentHeightDepth) {
			this.forceFreezeContentHeight();
		}
	}

});

;;

Calendar.mixin({

	header: null,
	footer: null,
	toolbarsManager: null,


	initToolbars: function() {
		this.header = new Toolbar(this, this.computeHeaderOptions());
		this.footer = new Toolbar(this, this.computeFooterOptions());
		this.toolbarsManager = new Iterator([ this.header, this.footer ]);
	},


	computeHeaderOptions: function() {
		return {
			extraClasses: 'fc-header-toolbar',
			layout: this.opt('header')
		};
	},


	computeFooterOptions: function() {
		return {
			extraClasses: 'fc-footer-toolbar',
			layout: this.opt('footer')
		};
	},


	// can be called repeatedly and Header will rerender
	renderHeader: function() {
		var header = this.header;

		header.setToolbarOptions(this.computeHeaderOptions());
		header.render();

		if (header.el) {
			this.el.prepend(header.el);
		}
	},


	// can be called repeatedly and Footer will rerender
	renderFooter: function() {
		var footer = this.footer;

		footer.setToolbarOptions(this.computeFooterOptions());
		footer.render();

		if (footer.el) {
			this.el.append(footer.el);
		}
	},


	setToolbarsTitle: function(title) {
		this.toolbarsManager.proxyCall('updateTitle', title);
	},


	updateToolbarButtons: function(dateProfile) {
		var now = this.getNow();
		var view = this.view;
		var todayInfo = view.buildDateProfile(now);
		var prevInfo = view.buildPrevDateProfile(this.currentDate);
		var nextInfo = view.buildNextDateProfile(this.currentDate);

		this.toolbarsManager.proxyCall(
			(todayInfo.isValid && !dateProfile.currentUnzonedRange.containsDate(now)) ?
				'enableButton' :
				'disableButton',
			'today'
		);

		this.toolbarsManager.proxyCall(
			prevInfo.isValid ?
				'enableButton' :
				'disableButton',
			'prev'
		);

		this.toolbarsManager.proxyCall(
			nextInfo.isValid ?
				'enableButton' :
				'disableButton',
			'next'
		);
	},


	queryToolbarsHeight: function() {
		return this.toolbarsManager.items.reduce(function(accumulator, toolbar) {
			var toolbarHeight = toolbar.el ? toolbar.el.outerHeight(true) : 0; // includes margin
			return accumulator + toolbarHeight;
		}, 0);
	}

});

;;

/*
determines if eventInstanceGroup is allowed,
in relation to other EVENTS and business hours.
*/
Calendar.prototype.isEventInstanceGroupAllowed = function(eventInstanceGroup) {
	var eventDef = eventInstanceGroup.getEventDef();
	var eventFootprints = this.eventRangesToEventFootprints(eventInstanceGroup.getAllEventRanges());
	var i;

	var peerEventInstances = this.getPeerEventInstances(eventDef);
	var peerEventRanges = peerEventInstances.map(eventInstanceToEventRange);
	var peerEventFootprints = this.eventRangesToEventFootprints(peerEventRanges);

	var constraintVal = eventDef.getConstraint();
	var overlapVal = eventDef.getOverlap();

	var eventAllowFunc = this.opt('eventAllow');

	for (i = 0; i < eventFootprints.length; i++) {
		if (
			!this.isFootprintAllowed(
				eventFootprints[i].componentFootprint,
				peerEventFootprints,
				constraintVal,
				overlapVal,
				eventFootprints[i].eventInstance
			)
		) {
			return false;
		}
	}

	if (eventAllowFunc) {
		for (i = 0; i < eventFootprints.length; i++) {
			if (
				eventAllowFunc(
					eventFootprints[i].componentFootprint.toLegacy(this),
					eventFootprints[i].getEventLegacy()
				) === false
			) {
				return false;
			}
		}
	}

	return true;
};


Calendar.prototype.getPeerEventInstances = function(eventDef) {
	return this.eventManager.getEventInstancesWithoutId(eventDef.id);
};


Calendar.prototype.isSelectionFootprintAllowed = function(componentFootprint) {
	var peerEventInstances = this.eventManager.getEventInstances();
	var peerEventRanges = peerEventInstances.map(eventInstanceToEventRange);
	var peerEventFootprints = this.eventRangesToEventFootprints(peerEventRanges);

	var selectAllowFunc;

	if (
		this.isFootprintAllowed(
			componentFootprint,
			peerEventFootprints,
			this.opt('selectConstraint'),
			this.opt('selectOverlap')
		)
	) {
		selectAllowFunc = this.opt('selectAllow');

		if (selectAllowFunc) {
			return selectAllowFunc(componentFootprint.toLegacy(this)) !== false;
		}
		else {
			return true;
		}
	}

	return false;
};


Calendar.prototype.isFootprintAllowed = function(
	componentFootprint,
	peerEventFootprints,
	constraintVal,
	overlapVal,
	subjectEventInstance // optional
) {
	var constraintFootprints; // ComponentFootprint[]
	var overlapEventFootprints; // EventFootprint[]

	if (constraintVal != null) {
		constraintFootprints = this.constraintValToFootprints(constraintVal, componentFootprint.isAllDay);

		if (!this.isFootprintWithinConstraints(componentFootprint, constraintFootprints)) {
			return false;
		}
	}

	overlapEventFootprints = this.collectOverlapEventFootprints(peerEventFootprints, componentFootprint);

	if (overlapVal === false) {
		if (overlapEventFootprints.length) {
			return false;
		}
	}
	else if (typeof overlapVal === 'function') {
		if (!isOverlapsAllowedByFunc(overlapEventFootprints, overlapVal, subjectEventInstance)) {
			return false;
		}
	}

	if (subjectEventInstance) {
		if (!isOverlapEventInstancesAllowed(overlapEventFootprints, subjectEventInstance)) {
			return false;
		}
	}

	return true;
};


// Constraint
// ------------------------------------------------------------------------------------------------


Calendar.prototype.isFootprintWithinConstraints = function(componentFootprint, constraintFootprints) {
	var i;

	for (i = 0; i < constraintFootprints.length; i++) {
		if (this.footprintContainsFootprint(constraintFootprints[i], componentFootprint)) {
			return true;
		}
	}

	return false;
};


Calendar.prototype.constraintValToFootprints = function(constraintVal, isAllDay) {
	var eventInstances;

	if (constraintVal === 'businessHours') {
		return this.buildCurrentBusinessFootprints(isAllDay);
	}
	else if (typeof constraintVal === 'object') {
		eventInstances = this.parseEventDefToInstances(constraintVal); // handles recurring events

		if (!eventInstances) { // invalid input. fallback to parsing footprint directly
			return this.parseFootprints(constraintVal);
		}
		else {
			return this.eventInstancesToFootprints(eventInstances);
		}
	}
	else if (constraintVal != null) { // an ID
		eventInstances = this.eventManager.getEventInstancesWithId(constraintVal);

		return this.eventInstancesToFootprints(eventInstances);
	}
};


// returns ComponentFootprint[]
// uses current view's range
Calendar.prototype.buildCurrentBusinessFootprints = function(isAllDay) {
	var view = this.view;
	var businessHourGenerator = view.get('businessHourGenerator');
	var unzonedRange = view.dateProfile.activeUnzonedRange;
	var eventInstanceGroup = businessHourGenerator.buildEventInstanceGroup(isAllDay, unzonedRange);

	if (eventInstanceGroup) {
		return this.eventInstancesToFootprints(eventInstanceGroup.eventInstances);
	}
	else {
		return [];
	}
};


// conversion util
Calendar.prototype.eventInstancesToFootprints = function(eventInstances) {
	var eventRanges = eventInstances.map(eventInstanceToEventRange);
	var eventFootprints = this.eventRangesToEventFootprints(eventRanges);

	return eventFootprints.map(eventFootprintToComponentFootprint);
};


// Overlap
// ------------------------------------------------------------------------------------------------


Calendar.prototype.collectOverlapEventFootprints = function(peerEventFootprints, targetFootprint) {
	var overlapEventFootprints = [];
	var i;

	for (i = 0; i < peerEventFootprints.length; i++) {
		if (
			this.footprintsIntersect(
				targetFootprint,
				peerEventFootprints[i].componentFootprint
			)
		) {
			overlapEventFootprints.push(peerEventFootprints[i]);
		}
	}

	return overlapEventFootprints;
};


// optional subjectEventInstance
function isOverlapsAllowedByFunc(overlapEventFootprints, overlapFunc, subjectEventInstance) {
	var i;

	for (i = 0; i < overlapEventFootprints.length; i++) {
		if (
			!overlapFunc(
				overlapEventFootprints[i].eventInstance.toLegacy(),
				subjectEventInstance ? subjectEventInstance.toLegacy() : null
			)
		) {
			return false;
		}
	}

	return true;
}


function isOverlapEventInstancesAllowed(overlapEventFootprints, subjectEventInstance) {
	var subjectLegacyInstance = subjectEventInstance.toLegacy();
	var i;
	var overlapEventInstance;
	var overlapEventDef;
	var overlapVal;

	for (i = 0; i < overlapEventFootprints.length; i++) {
		overlapEventInstance = overlapEventFootprints[i].eventInstance;
		overlapEventDef = overlapEventInstance.def;

		// don't need to pass in calendar, because don't want to consider global eventOverlap property,
		// because we already considered that earlier in the process.
		overlapVal = overlapEventDef.getOverlap();

		if (overlapVal === false) {
			return false;
		}
		else if (typeof overlapVal === 'function') {
			if (
				!overlapVal(
					overlapEventInstance.toLegacy(),
					subjectLegacyInstance
				)
			) {
				return false;
			}
		}
	}

	return true;
}


// Conversion: eventDefs -> eventInstances -> eventRanges -> eventFootprints -> componentFootprints
// ------------------------------------------------------------------------------------------------
// NOTE: this might seem like repetitive code with the Grid class, however, this code is related to
// constraints whereas the Grid code is related to rendering. Each approach might want to convert
// eventRanges -> eventFootprints in a different way. Regardless, there are opportunities to make
// this more DRY.


/*
Returns false on invalid input.
*/
Calendar.prototype.parseEventDefToInstances = function(eventInput) {
	var eventManager = this.eventManager;
	var eventDef = EventDefParser.parse(eventInput, new EventSource(this));

	if (!eventDef) { // invalid
		return false;
	}

	return eventDef.buildInstances(eventManager.currentPeriod.unzonedRange);
};


Calendar.prototype.eventRangesToEventFootprints = function(eventRanges) {
	var i;
	var eventFootprints = [];

	for (i = 0; i < eventRanges.length; i++) {
		eventFootprints.push.apply( // footprints
			eventFootprints,
			this.eventRangeToEventFootprints(eventRanges[i])
		);
	}

	return eventFootprints;
};


Calendar.prototype.eventRangeToEventFootprints = function(eventRange) {
	return [ eventRangeToEventFootprint(eventRange) ];
};


/*
Parses footprints directly.
Very similar to EventDateProfile::parse :(
*/
Calendar.prototype.parseFootprints = function(rawInput) {
	var start, end;

	if (rawInput.start) {
		start = this.moment(rawInput.start);

		if (!start.isValid()) {
			start = null;
		}
	}

	if (rawInput.end) {
		end = this.moment(rawInput.end);

		if (!end.isValid()) {
			end = null;
		}
	}

	return [
		new ComponentFootprint(
			new UnzonedRange(start, end),
			(start && !start.hasTime()) || (end && !end.hasTime()) // isAllDay
		)
	];
};


// Footprint Utils
// ----------------------------------------------------------------------------------------


Calendar.prototype.footprintContainsFootprint = function(outerFootprint, innerFootprint) {
	return outerFootprint.unzonedRange.containsRange(innerFootprint.unzonedRange);
};


Calendar.prototype.footprintsIntersect = function(footprint0, footprint1) {
	return footprint0.unzonedRange.intersectsWith(footprint1.unzonedRange);
};

;;

Calendar.mixin({

	// Sources
	// ------------------------------------------------------------------------------------


	getEventSources: function() {
		return this.eventManager.otherSources.slice(); // clone
	},


	getEventSourceById: function(id) {
		return this.eventManager.getSourceById(
			EventSource.normalizeId(id)
		);
	},


	addEventSource: function(sourceInput) {
		var source = EventSourceParser.parse(sourceInput, this);

		if (source) {
			this.eventManager.addSource(source);
		}
	},


	removeEventSources: function(sourceMultiQuery) {
		var eventManager = this.eventManager;
		var sources;
		var i;

		if (sourceMultiQuery == null) {
			this.eventManager.removeAllSources();
		}
		else {
			sources = eventManager.multiQuerySources(sourceMultiQuery);

			eventManager.freeze();

			for (i = 0; i < sources.length; i++) {
				eventManager.removeSource(sources[i]);
			}

			eventManager.thaw();
		}
	},


	removeEventSource: function(sourceQuery) {
		var eventManager = this.eventManager;
		var sources = eventManager.querySources(sourceQuery);
		var i;

		eventManager.freeze();

		for (i = 0; i < sources.length; i++) {
			eventManager.removeSource(sources[i]);
		}

		eventManager.thaw();
	},


	refetchEventSources: function(sourceMultiQuery) {
		var eventManager = this.eventManager;
		var sources = eventManager.multiQuerySources(sourceMultiQuery);
		var i;

		eventManager.freeze();

		for (i = 0; i < sources.length; i++) {
			eventManager.refetchSource(sources[i]);
		}

		eventManager.thaw();
	},


	// Events
	// ------------------------------------------------------------------------------------


	refetchEvents: function() {
		this.eventManager.refetchAllSources();
	},


	renderEvents: function(eventInputs, isSticky) {
		this.eventManager.freeze();

		for (var i = 0; i < eventInputs.length; i++) {
			this.renderEvent(eventInputs[i], isSticky);
		}

		this.eventManager.thaw();
	},


	renderEvent: function(eventInput, isSticky) {
		var eventManager = this.eventManager;
		var eventDef = EventDefParser.parse(
			eventInput,
			eventInput.source || eventManager.stickySource
		);

		if (eventDef) {
			eventManager.addEventDef(eventDef, isSticky);
		}
	},


	// legacyQuery operates on legacy event instance objects
	removeEvents: function(legacyQuery) {
		var eventManager = this.eventManager;
		var legacyInstances = [];
		var idMap = {};
		var eventDef;
		var i;

		if (legacyQuery == null) { // shortcut for removing all
			eventManager.removeAllEventDefs(true); // persist=true
		}
		else {
			eventManager.getEventInstances().forEach(function(eventInstance) {
				legacyInstances.push(eventInstance.toLegacy());
			});

			legacyInstances = filterLegacyEventInstances(legacyInstances, legacyQuery);

			// compute unique IDs
			for (i = 0; i < legacyInstances.length; i++) {
				eventDef = this.eventManager.getEventDefByUid(legacyInstances[i]._id);
				idMap[eventDef.id] = true;
			}

			eventManager.freeze();

			for (i in idMap) { // reuse `i` as an "id"
				eventManager.removeEventDefsById(i, true); // persist=true
			}

			eventManager.thaw();
		}
	},


	// legacyQuery operates on legacy event instance objects
	clientEvents: function(legacyQuery) {
		var legacyEventInstances = [];

		this.eventManager.getEventInstances().forEach(function(eventInstance) {
			legacyEventInstances.push(eventInstance.toLegacy());
		});

		return filterLegacyEventInstances(legacyEventInstances, legacyQuery);
	},


	updateEvents: function(eventPropsArray) {
		this.eventManager.freeze();

		for (var i = 0; i < eventPropsArray.length; i++) {
			this.updateEvent(eventPropsArray[i]);
		}

		this.eventManager.thaw();
	},


	updateEvent: function(eventProps) {
		var eventDef = this.eventManager.getEventDefByUid(eventProps._id);
		var eventInstance;
		var eventDefMutation;

		if (eventDef instanceof SingleEventDef) {
			eventInstance = eventDef.buildInstance();

			eventDefMutation = EventDefMutation.createFromRawProps(
				eventInstance,
				eventProps, // raw props
				null // largeUnit -- who uses it?
			);

			this.eventManager.mutateEventsWithId(eventDef.id, eventDefMutation); // will release
		}
	}

});


function filterLegacyEventInstances(legacyEventInstances, legacyQuery) {
	if (legacyQuery == null) {
		return legacyEventInstances;
	}
	else if ($.isFunction(legacyQuery)) {
		return legacyEventInstances.filter(legacyQuery);
	}
	else { // an event ID
		legacyQuery += ''; // normalize to string

		return legacyEventInstances.filter(function(legacyEventInstance) {
			// soft comparison because id not be normalized to string
			return legacyEventInstance.id == legacyQuery ||
				legacyEventInstance._id === legacyQuery; // can specify internal id, but must exactly match
		});
	}
}

;;

Calendar.defaults = {

	titleRangeSeparator: ' \u2013 ', // en dash
	monthYearFormat: 'MMMM YYYY', // required for en. other locales rely on datepicker computable option

	defaultTimedEventDuration: '02:00:00',
	defaultAllDayEventDuration: { days: 1 },
	forceEventDuration: false,
	nextDayThreshold: '09:00:00', // 9am

	// display
	columnHeader: true,
	defaultView: 'month',
	aspectRatio: 1.35,
	header: {
		left: 'title',
		center: '',
		right: 'today prev,next'
	},
	weekends: true,
	weekNumbers: false,

	weekNumberTitle: 'W',
	weekNumberCalculation: 'local',
	
	//editable: false,

	//nowIndicator: false,

	scrollTime: '06:00:00',
	minTime: '00:00:00',
	maxTime: '24:00:00',
	showNonCurrentDates: true,
	
	// event ajax
	lazyFetching: true,
	startParam: 'start',
	endParam: 'end',
	timezoneParam: 'timezone',

	timezone: false,

	//allDayDefault: undefined,

	// locale
	isRTL: false,
	buttonText: {
		prev: "prev",
		next: "next",
		prevYear: "prev year",
		nextYear: "next year",
		year: 'year', // TODO: locale files need to specify this
		today: 'today',
		month: 'month',
		week: 'week',
		day: 'day'
	},
	//buttonIcons: null,

	allDayText: 'all-day',

	// allows setting a min-height to the event segment to prevent short events overlapping each other
	agendaEventMinHeight: 0,
	
	// jquery-ui theming
	theme: false,
	//themeButtonIcons: null,

	//eventResizableFromStart: false,
	dragOpacity: .75,
	dragRevertDuration: 500,
	dragScroll: true,
	
	//selectable: false,
	unselectAuto: true,
	//selectMinDistance: 0,
	
	dropAccept: '*',

	eventOrder: 'title',
	//eventRenderWait: null,

	eventLimit: false,
	eventLimitText: 'more',
	eventLimitClick: 'popover',
	dayPopoverFormat: 'LL',
	
	handleWindowResize: true,
	windowResizeDelay: 100, // milliseconds before an updateSize happens

	longPressDelay: 1000
	
};


Calendar.englishDefaults = { // used by locale.js
	dayPopoverFormat: 'dddd, MMMM D'
};


Calendar.rtlDefaults = { // right-to-left defaults
	header: { // TODO: smarter solution (first/center/last ?)
		left: 'next,prev today',
		center: '',
		right: 'title'
	},
	buttonIcons: {
		prev: 'right-single-arrow',
		next: 'left-single-arrow',
		prevYear: 'right-double-arrow',
		nextYear: 'left-double-arrow'
	},
	themeButtonIcons: {
		prev: 'circle-triangle-e',
		next: 'circle-triangle-w',
		nextYear: 'seek-prev',
		prevYear: 'seek-next'
	}
};

;;

var localeOptionHash = FC.locales = {}; // initialize and expose


// TODO: document the structure and ordering of a FullCalendar locale file


// Initialize jQuery UI datepicker translations while using some of the translations
// Will set this as the default locales for datepicker.
FC.datepickerLocale = function(localeCode, dpLocaleCode, dpOptions) {

	// get the FullCalendar internal option hash for this locale. create if necessary
	var fcOptions = localeOptionHash[localeCode] || (localeOptionHash[localeCode] = {});

	// transfer some simple options from datepicker to fc
	fcOptions.isRTL = dpOptions.isRTL;
	fcOptions.weekNumberTitle = dpOptions.weekHeader;

	// compute some more complex options from datepicker
	$.each(dpComputableOptions, function(name, func) {
		fcOptions[name] = func(dpOptions);
	});

	// is jQuery UI Datepicker is on the page?
	if ($.datepicker) {

		// Register the locale data.
		// FullCalendar and MomentJS use locale codes like "pt-br" but Datepicker
		// does it like "pt-BR" or if it doesn't have the locale, maybe just "pt".
		// Make an alias so the locale can be referenced either way.
		$.datepicker.regional[dpLocaleCode] =
			$.datepicker.regional[localeCode] = // alias
				dpOptions;

		// Alias 'en' to the default locale data. Do this every time.
		$.datepicker.regional.en = $.datepicker.regional[''];

		// Set as Datepicker's global defaults.
		$.datepicker.setDefaults(dpOptions);
	}
};


// Sets FullCalendar-specific translations. Will set the locales as the global default.
FC.locale = function(localeCode, newFcOptions) {
	var fcOptions;
	var momOptions;

	// get the FullCalendar internal option hash for this locale. create if necessary
	fcOptions = localeOptionHash[localeCode] || (localeOptionHash[localeCode] = {});

	// provided new options for this locales? merge them in
	if (newFcOptions) {
		fcOptions = localeOptionHash[localeCode] = mergeOptions([ fcOptions, newFcOptions ]);
	}

	// compute locale options that weren't defined.
	// always do this. newFcOptions can be undefined when initializing from i18n file,
	// so no way to tell if this is an initialization or a default-setting.
	momOptions = getMomentLocaleData(localeCode); // will fall back to en
	$.each(momComputableOptions, function(name, func) {
		if (fcOptions[name] == null) {
			fcOptions[name] = func(momOptions, fcOptions);
		}
	});

	// set it as the default locale for FullCalendar
	Calendar.defaults.locale = localeCode;
};


// NOTE: can't guarantee any of these computations will run because not every locale has datepicker
// configs, so make sure there are English fallbacks for these in the defaults file.
var dpComputableOptions = {

	buttonText: function(dpOptions) {
		return {
			// the translations sometimes wrongly contain HTML entities
			prev: stripHtmlEntities(dpOptions.prevText),
			next: stripHtmlEntities(dpOptions.nextText),
			today: stripHtmlEntities(dpOptions.currentText)
		};
	},

	// Produces format strings like "MMMM YYYY" -> "September 2014"
	monthYearFormat: function(dpOptions) {
		return dpOptions.showMonthAfterYear ?
			'YYYY[' + dpOptions.yearSuffix + '] MMMM' :
			'MMMM YYYY[' + dpOptions.yearSuffix + ']';
	}

};

var momComputableOptions = {

	// Produces format strings like "ddd M/D" -> "Fri 9/15"
	dayOfMonthFormat: function(momOptions, fcOptions) {
		var format = momOptions.longDateFormat('l'); // for the format like "M/D/YYYY"

		// strip the year off the edge, as well as other misc non-whitespace chars
		format = format.replace(/^Y+[^\w\s]*|[^\w\s]*Y+$/g, '');

		if (fcOptions.isRTL) {
			format += ' ddd'; // for RTL, add day-of-week to end
		}
		else {
			format = 'ddd ' + format; // for LTR, add day-of-week to beginning
		}
		return format;
	},

	// Produces format strings like "h:mma" -> "6:00pm"
	mediumTimeFormat: function(momOptions) { // can't be called `timeFormat` because collides with option
		return momOptions.longDateFormat('LT')
			.replace(/\s*a$/i, 'a'); // convert AM/PM/am/pm to lowercase. remove any spaces beforehand
	},

	// Produces format strings like "h(:mm)a" -> "6pm" / "6:30pm"
	smallTimeFormat: function(momOptions) {
		return momOptions.longDateFormat('LT')
			.replace(':mm', '(:mm)')
			.replace(/(\Wmm)$/, '($1)') // like above, but for foreign locales
			.replace(/\s*a$/i, 'a'); // convert AM/PM/am/pm to lowercase. remove any spaces beforehand
	},

	// Produces format strings like "h(:mm)t" -> "6p" / "6:30p"
	extraSmallTimeFormat: function(momOptions) {
		return momOptions.longDateFormat('LT')
			.replace(':mm', '(:mm)')
			.replace(/(\Wmm)$/, '($1)') // like above, but for foreign locales
			.replace(/\s*a$/i, 't'); // convert to AM/PM/am/pm to lowercase one-letter. remove any spaces beforehand
	},

	// Produces format strings like "ha" / "H" -> "6pm" / "18"
	hourFormat: function(momOptions) {
		return momOptions.longDateFormat('LT')
			.replace(':mm', '')
			.replace(/(\Wmm)$/, '') // like above, but for foreign locales
			.replace(/\s*a$/i, 'a'); // convert AM/PM/am/pm to lowercase. remove any spaces beforehand
	},

	// Produces format strings like "h:mm" -> "6:30" (with no AM/PM)
	noMeridiemTimeFormat: function(momOptions) {
		return momOptions.longDateFormat('LT')
			.replace(/\s*a$/i, ''); // remove trailing AM/PM
	}

};


// options that should be computed off live calendar options (considers override options)
// TODO: best place for this? related to locale?
// TODO: flipping text based on isRTL is a bad idea because the CSS `direction` might want to handle it
var instanceComputableOptions = {

	// Produces format strings for results like "Mo 16"
	smallDayDateFormat: function(options) {
		return options.isRTL ?
			'D dd' :
			'dd D';
	},

	// Produces format strings for results like "Wk 5"
	weekFormat: function(options) {
		return options.isRTL ?
			'w[ ' + options.weekNumberTitle + ']' :
			'[' + options.weekNumberTitle + ' ]w';
	},

	// Produces format strings for results like "Wk5"
	smallWeekFormat: function(options) {
		return options.isRTL ?
			'w[' + options.weekNumberTitle + ']' :
			'[' + options.weekNumberTitle + ']w';
	}

};

// TODO: make these computable properties in optionsModel
function populateInstanceComputableOptions(options) {
	$.each(instanceComputableOptions, function(name, func) {
		if (options[name] == null) {
			options[name] = func(options);
		}
	});
}


// Returns moment's internal locale data. If doesn't exist, returns English.
function getMomentLocaleData(localeCode) {
	return moment.localeData(localeCode) || moment.localeData('en');
}


// Initialize English by forcing computation of moment-derived options.
// Also, sets it as the default.
FC.locale('en', Calendar.englishDefaults);

;;

var UnzonedRange = FC.UnzonedRange = Class.extend({

	startMs: null, // if null, no start constraint
	endMs: null, // if null, no end constraint

	// TODO: move these into footprint.
	// Especially, doesn't make sense for null startMs/endMs.
	isStart: true,
	isEnd: true,

	constructor: function(startInput, endInput) {

		if (moment.isMoment(startInput)) {
			startInput = startInput.clone().stripZone();
		}

		if (moment.isMoment(endInput)) {
			endInput = endInput.clone().stripZone();
		}

		if (startInput) {
			this.startMs = startInput.valueOf();
		}

		if (endInput) {
			this.endMs = endInput.valueOf();
		}
	},

	intersect: function(otherRange) {
		var startMs = this.startMs;
		var endMs = this.endMs;
		var newRange = null;

		if (otherRange.startMs !== null) {
			if (startMs === null) {
				startMs = otherRange.startMs;
			}
			else {
				startMs = Math.max(startMs, otherRange.startMs);
			}
		}

		if (otherRange.endMs !== null) {
			if (endMs === null) {
				endMs = otherRange.endMs;
			}
			else {
				endMs = Math.min(endMs, otherRange.endMs);
			}
		}

		if (startMs === null || endMs === null || startMs < endMs) {
			newRange = new UnzonedRange(startMs, endMs);
			newRange.isStart = this.isStart && startMs === this.startMs;
			newRange.isEnd = this.isEnd && endMs === this.endMs;
		}

		return newRange;
	},


	intersectsWith: function(otherRange) {
		return (this.endMs === null || otherRange.startMs === null || this.endMs > otherRange.startMs) &&
			(this.startMs === null || otherRange.endMs === null || this.startMs < otherRange.endMs);
	},


	containsRange: function(innerRange) {
		return (this.startMs === null || (innerRange.startMs !== null && innerRange.startMs >= this.startMs)) &&
			(this.endMs === null || (innerRange.endMs !== null && innerRange.endMs <= this.endMs));
	},


	// `date` can be a moment, a Date, or a millisecond time.
	containsDate: function(date) {
		var ms = date.valueOf();

		return (this.startMs === null || ms >= this.startMs) &&
			(this.endMs === null || ms < this.endMs);
	},


	// If the given date is not within the given range, move it inside.
	// (If it's past the end, make it one millisecond before the end).
	// `date` can be a moment, a Date, or a millisecond time.
	// Returns a MS-time.
	constrainDate: function(date) {
		var ms = date.valueOf();

		if (this.startMs !== null && ms < this.startMs) {
			ms = this.startMs;
		}

		if (this.endMs !== null && ms >= this.endMs) {
			ms = this.endMs - 1;
		}

		return ms;
	},


	equals: function(otherRange) {
		return this.startMs === otherRange.startMs && this.endMs === otherRange.endMs;
	},


	clone: function() {
		var range = new UnzonedRange(this.startMs, this.endMs);

		range.isStart = this.isStart;
		range.isEnd = this.isEnd;

		return range;
	},


	// Returns an ambig-zoned moment from startMs.
	// BEWARE: returned moment is not localized.
	// Formatting and start-of-week will be default.
	getStart: function() {
		if (this.startMs !== null) {
			return FC.moment.utc(this.startMs).stripZone();
		}
	},

	// Returns an ambig-zoned moment from startMs.
	// BEWARE: returned moment is not localized.
	// Formatting and start-of-week will be default.
	getEnd: function() {
		if (this.endMs !== null) {
			return FC.moment.utc(this.endMs).stripZone();
		}
	},


	as: function(unit) {
		return moment.utc(this.endMs).diff(
			moment.utc(this.startMs),
			unit,
			true
		);
	}

});


/*
SIDEEFFECT: will mutate eventRanges.
Will return a new array result.
Only works for non-open-ended ranges.
*/
function invertUnzonedRanges(ranges, constraintRange) {
	var invertedRanges = [];
	var startMs = constraintRange.startMs; // the end of the previous range. the start of the new range
	var i;
	var dateRange;

	// ranges need to be in order. required for our date-walking algorithm
	ranges.sort(compareUnzonedRanges);

	for (i = 0; i < ranges.length; i++) {
		dateRange = ranges[i];

		// add the span of time before the event (if there is any)
		if (dateRange.startMs > startMs) { // compare millisecond time (skip any ambig logic)
			invertedRanges.push(
				new UnzonedRange(startMs, dateRange.startMs)
			);
		}

		if (dateRange.endMs > startMs) {
			startMs = dateRange.endMs;
		}
	}

	// add the span of time after the last event (if there is any)
	if (startMs < constraintRange.endMs) { // compare millisecond time (skip any ambig logic)
		invertedRanges.push(
			new UnzonedRange(startMs, constraintRange.endMs)
		);
	}

	return invertedRanges;
}


/*
Only works for non-open-ended ranges.
*/
function compareUnzonedRanges(range1, range2) {
	return range1.startMs - range2.startMs; // earlier ranges go first
}

;;

/*
Meant to be immutable
*/
var ComponentFootprint = FC.ComponentFootprint = Class.extend({

	unzonedRange: null,
	isAllDay: false, // component can choose to ignore this


	constructor: function(unzonedRange, isAllDay) {
		this.unzonedRange = unzonedRange;
		this.isAllDay = isAllDay;
	},


	/*
	Only works for non-open-ended ranges.
	*/
	toLegacy: function(calendar) {
		return {
			start: calendar.msToMoment(this.unzonedRange.startMs, this.isAllDay),
			end: calendar.msToMoment(this.unzonedRange.endMs, this.isAllDay)
		};
	}

});

;;

var EventPeriod = Class.extend(EmitterMixin, {

	start: null,
	end: null,
	timezone: null,

	unzonedRange: null,

	requestsByUid: null,
	pendingCnt: 0,

	freezeDepth: 0,
	stuntedReleaseCnt: 0,
	releaseCnt: 0,

	eventDefsByUid: null,
	eventDefsById: null,
	eventInstanceGroupsById: null,


	constructor: function(start, end, timezone) {
		this.start = start;
		this.end = end;
		this.timezone = timezone;

		this.unzonedRange = new UnzonedRange(
			start.clone().stripZone(),
			end.clone().stripZone()
		);

		this.requestsByUid = {};
		this.eventDefsByUid = {};
		this.eventDefsById = {};
		this.eventInstanceGroupsById = {};
	},


	isWithinRange: function(start, end) {
		// TODO: use a range util function?
		return !start.isBefore(this.start) && !end.isAfter(this.end);
	},


	// Requesting and Purging
	// -----------------------------------------------------------------------------------------------------------------


	requestSources: function(sources) {
		this.freeze();

		for (var i = 0; i < sources.length; i++) {
			this.requestSource(sources[i]);
		}

		this.thaw();
	},


	requestSource: function(source) {
		var _this = this;
		var request = { source: source, status: 'pending' };

		this.requestsByUid[source.uid] = request;
		this.pendingCnt += 1;

		source.fetch(this.start, this.end, this.timezone).then(function(eventDefs) {
			if (request.status !== 'cancelled') {
				request.status = 'completed';
				request.eventDefs = eventDefs;

				_this.addEventDefs(eventDefs);
				_this.pendingCnt--;
				_this.tryRelease();
			}
		}, function() { // failure
			if (request.status !== 'cancelled') {
				request.status = 'failed';

				_this.pendingCnt--;
				_this.tryRelease();
			}
		});
	},


	purgeSource: function(source) {
		var request = this.requestsByUid[source.uid];

		if (request) {
			delete this.requestsByUid[source.uid];

			if (request.status === 'pending') {
				request.status = 'cancelled';
				this.pendingCnt--;
				this.tryRelease();
			}
			else if (request.status === 'completed') {
				request.eventDefs.forEach(this.removeEventDef.bind(this));
			}
		}
	},


	purgeAllSources: function() {
		var requestsByUid = this.requestsByUid;
		var uid, request;
		var completedCnt = 0;

		for (uid in requestsByUid) {
			request = requestsByUid[uid];

			if (request.status === 'pending') {
				request.status = 'cancelled';
			}
			else if (request.status === 'completed') {
				completedCnt++;
			}
		}

		this.requestsByUid = {};
		this.pendingCnt = 0;

		if (completedCnt) {
			this.removeAllEventDefs(); // might release
		}
	},


	// Event Definitions
	// -----------------------------------------------------------------------------------------------------------------


	getEventDefByUid: function(eventDefUid) {
		return this.eventDefsByUid[eventDefUid];
	},


	getEventDefsById: function(eventDefId) {
		var a = this.eventDefsById[eventDefId];

		if (a) {
			return a.slice(); // clone
		}

		return [];
	},


	addEventDefs: function(eventDefs) {
		for (var i = 0; i < eventDefs.length; i++) {
			this.addEventDef(eventDefs[i]);
		}
	},


	addEventDef: function(eventDef) {
		var eventDefsById = this.eventDefsById;
		var eventDefId = eventDef.id;
		var eventDefs = eventDefsById[eventDefId] || (eventDefsById[eventDefId] = []);
		var eventInstances = eventDef.buildInstances(this.unzonedRange);
		var i;

		eventDefs.push(eventDef);

		this.eventDefsByUid[eventDef.uid] = eventDef;

		for (i = 0; i < eventInstances.length; i++) {
			this.addEventInstance(eventInstances[i], eventDefId);
		}
	},


	removeEventDefsById: function(eventDefId) {
		var _this = this;

		this.getEventDefsById(eventDefId).forEach(function(eventDef) {
			_this.removeEventDef(eventDef);
		});
	},


	removeAllEventDefs: function() {
		var isEmpty = $.isEmptyObject(this.eventDefsByUid);

		this.eventDefsByUid = {};
		this.eventDefsById = {};
		this.eventInstanceGroupsById = {};

		if (!isEmpty) {
			this.tryRelease();
		}
	},


	removeEventDef: function(eventDef) {
		var eventDefsById = this.eventDefsById;
		var eventDefs = eventDefsById[eventDef.id];

		delete this.eventDefsByUid[eventDef.uid];

		if (eventDefs) {
			removeExact(eventDefs, eventDef);

			if (!eventDefs.length) {
				delete eventDefsById[eventDef.id];
			}

			this.removeEventInstancesForDef(eventDef);
		}
	},


	// Event Instances
	// -----------------------------------------------------------------------------------------------------------------


	getEventInstances: function() { // TODO: consider iterator
		var eventInstanceGroupsById = this.eventInstanceGroupsById;
		var eventInstances = [];
		var id;

		for (id in eventInstanceGroupsById) {
			eventInstances.push.apply(eventInstances, // append
				eventInstanceGroupsById[id].eventInstances
			);
		}

		return eventInstances;
	},


	getEventInstancesWithId: function(eventDefId) {
		var eventInstanceGroup = this.eventInstanceGroupsById[eventDefId];

		if (eventInstanceGroup) {
			return eventInstanceGroup.eventInstances.slice(); // clone
		}

		return [];
	},


	getEventInstancesWithoutId: function(eventDefId) { // TODO: consider iterator
		var eventInstanceGroupsById = this.eventInstanceGroupsById;
		var matchingInstances = [];
		var id;

		for (id in eventInstanceGroupsById) {
			if (id !== eventDefId) {
				matchingInstances.push.apply(matchingInstances, // append
					eventInstanceGroupsById[id].eventInstances
				);
			}
		}

		return matchingInstances;
	},


	addEventInstance: function(eventInstance, eventDefId) {
		var eventInstanceGroupsById = this.eventInstanceGroupsById;
		var eventInstanceGroup = eventInstanceGroupsById[eventDefId] ||
			(eventInstanceGroupsById[eventDefId] = new EventInstanceGroup());

		eventInstanceGroup.eventInstances.push(eventInstance);

		this.tryRelease();
	},


	removeEventInstancesForDef: function(eventDef) {
		var eventInstanceGroupsById = this.eventInstanceGroupsById;
		var eventInstanceGroup = eventInstanceGroupsById[eventDef.id];
		var removeCnt;

		if (eventInstanceGroup) {
			removeCnt = removeMatching(eventInstanceGroup.eventInstances, function(currentEventInstance) {
				return currentEventInstance.def === eventDef;
			});

			if (!eventInstanceGroup.eventInstances.length) {
				delete eventInstanceGroupsById[eventDef.id];
			}

			if (removeCnt) {
				this.tryRelease();
			}
		}
	},


	// Releasing and Freezing
	// -----------------------------------------------------------------------------------------------------------------


	tryRelease: function() {
		if (!this.pendingCnt) {
			if (!this.freezeDepth) {
				this.release();
			}
			else {
				this.stuntedReleaseCnt++;
			}
		}
	},


	release: function() {
		this.releaseCnt++;
		this.trigger('release', this.eventInstanceGroupsById);
	},


	whenReleased: function() {
		var _this = this;

		if (this.releaseCnt) {
			return Promise.resolve(this.eventInstanceGroupsById);
		}
		else {
			return Promise.construct(function(onResolve) {
				_this.one('release', onResolve);
			});
		}
	},


	freeze: function() {
		if (!(this.freezeDepth++)) {
			this.stuntedReleaseCnt = 0;
		}
	},


	thaw: function() {
		if (!(--this.freezeDepth) && this.stuntedReleaseCnt && !this.pendingCnt) {
			this.release();
		}
	}

});

;;

var EventManager = Class.extend(EmitterMixin, ListenerMixin, {

	currentPeriod: null,

	calendar: null,
	stickySource: null,
	otherSources: null, // does not include sticky source


	constructor: function(calendar) {
		this.calendar = calendar;
		this.stickySource = new ArrayEventSource(calendar);
		this.otherSources = [];
	},


	requestEvents: function(start, end, timezone, force) {
		if (
			force ||
			!this.currentPeriod ||
			!this.currentPeriod.isWithinRange(start, end) ||
			timezone !== this.currentPeriod.timezone
		) {
			this.setPeriod( // will change this.currentPeriod
				new EventPeriod(start, end, timezone)
			);
		}

		return this.currentPeriod.whenReleased();
	},


	// Source Adding/Removing
	// -----------------------------------------------------------------------------------------------------------------


	addSource: function(eventSource) {
		this.otherSources.push(eventSource);

		if (this.currentPeriod) {
			this.currentPeriod.requestSource(eventSource); // might release
		}
	},


	removeSource: function(doomedSource) {
		removeExact(this.otherSources, doomedSource);

		if (this.currentPeriod) {
			this.currentPeriod.purgeSource(doomedSource); // might release
		}
	},


	removeAllSources: function() {
		this.otherSources = [];

		if (this.currentPeriod) {
			this.currentPeriod.purgeAllSources(); // might release
		}
	},


	// Source Refetching
	// -----------------------------------------------------------------------------------------------------------------


	refetchSource: function(eventSource) {
		var currentPeriod = this.currentPeriod;

		if (currentPeriod) {
			currentPeriod.freeze();
			currentPeriod.purgeSource(eventSource);
			currentPeriod.requestSource(eventSource);
			currentPeriod.thaw();
		}
	},


	refetchAllSources: function() {
		var currentPeriod = this.currentPeriod;

		if (currentPeriod) {
			currentPeriod.freeze();
			currentPeriod.purgeAllSources();
			currentPeriod.requestSources(this.getSources());
			currentPeriod.thaw();
		}
	},


	// Source Querying
	// -----------------------------------------------------------------------------------------------------------------


	getSources: function() {
		return [ this.stickySource ].concat(this.otherSources);
	},


	// like querySources, but accepts multple match criteria (like multiple IDs)
	multiQuerySources: function(matchInputs) {

		// coerce into an array
		if (!matchInputs) {
			matchInputs = [];
		}
		else if (!$.isArray(matchInputs)) {
			matchInputs = [ matchInputs ];
		}

		var matchingSources = [];
		var i;

		// resolve raw inputs to real event source objects
		for (i = 0; i < matchInputs.length; i++) {
			matchingSources.push.apply( // append
				matchingSources,
				this.querySources(matchInputs[i])
			);
		}

		return matchingSources;
	},


	// matchInput can either by a real event source object, an ID, or the function/URL for the source.
	// returns an array of matching source objects.
	querySources: function(matchInput) {
		var sources = this.otherSources;
		var i, source;

		// given a proper event source object
		for (i = 0; i < sources.length; i++) {
			source = sources[i];

			if (source === matchInput) {
				return [ source ];
			}
		}

		// an ID match
		source = this.getSourceById(EventSource.normalizeId(matchInput));
		if (source) {
			return [ source ];
		}

		// parse as an event source
		matchInput = EventSourceParser.parse(matchInput, this.calendar);
		if (matchInput) {

			return $.grep(sources, function(source) {
				return isSourcesEquivalent(matchInput, source);
			});
		}
	},


	/*
	ID assumed to already be normalized
	*/
	getSourceById: function(id) {
		return $.grep(this.otherSources, function(source) {
			return source.id && source.id === id;
		})[0];
	},


	// Event-Period
	// -----------------------------------------------------------------------------------------------------------------


	setPeriod: function(eventPeriod) {
		if (this.currentPeriod) {
			this.unbindPeriod(this.currentPeriod);
			this.currentPeriod = null;
		}

		this.currentPeriod = eventPeriod;
		this.bindPeriod(eventPeriod);

		eventPeriod.requestSources(this.getSources());
	},


	bindPeriod: function(eventPeriod) {
		this.listenTo(eventPeriod, 'release', function(eventsPayload) {
			this.trigger('release', eventsPayload);
		});
	},


	unbindPeriod: function(eventPeriod) {
		this.stopListeningTo(eventPeriod);
	},


	// Event Getting/Adding/Removing
	// -----------------------------------------------------------------------------------------------------------------


	getEventDefByUid: function(uid) {
		if (this.currentPeriod) {
			return this.currentPeriod.getEventDefByUid(uid);
		}
	},


	addEventDef: function(eventDef, isSticky) {
		if (isSticky) {
			this.stickySource.addEventDef(eventDef);
		}

		if (this.currentPeriod) {
			this.currentPeriod.addEventDef(eventDef); // might release
		}
	},


	removeEventDefsById: function(eventId) {
		this.getSources().forEach(function(eventSource) {
			eventSource.removeEventDefsById(eventId);
		});

		if (this.currentPeriod) {
			this.currentPeriod.removeEventDefsById(eventId); // might release
		}
	},


	removeAllEventDefs: function() {
		this.getSources().forEach(function(eventSource) {
			eventSource.removeAllEventDefs();
		});

		if (this.currentPeriod) {
			this.currentPeriod.removeAllEventDefs();
		}
	},


	// Event Mutating
	// -----------------------------------------------------------------------------------------------------------------


	/*
	Returns an undo function.
	*/
	mutateEventsWithId: function(eventDefId, eventDefMutation) {
		var currentPeriod = this.currentPeriod;
		var eventDefs;
		var undoFuncs = [];

		if (currentPeriod) {

			currentPeriod.freeze();

			eventDefs = currentPeriod.getEventDefsById(eventDefId);
			eventDefs.forEach(function(eventDef) {
				// add/remove esp because id might change
				currentPeriod.removeEventDef(eventDef);
				undoFuncs.push(eventDefMutation.mutateSingle(eventDef));
				currentPeriod.addEventDef(eventDef);
			});

			currentPeriod.thaw();

			return function() {
				currentPeriod.freeze();

				for (var i = 0; i < eventDefs.length; i++) {
					currentPeriod.removeEventDef(eventDefs[i]);
					undoFuncs[i]();
					currentPeriod.addEventDef(eventDefs[i]);
				}

				currentPeriod.thaw();
			};
		}

		return function() { };
	},


	/*
	copies and then mutates
	*/
	buildMutatedEventInstanceGroup: function(eventDefId, eventDefMutation) {
		var eventDefs = this.getEventDefsById(eventDefId);
		var i;
		var defCopy;
		var allInstances = [];

		for (i = 0; i < eventDefs.length; i++) {
			defCopy = eventDefs[i].clone();

			if (defCopy instanceof SingleEventDef) {
				eventDefMutation.mutateSingle(defCopy);

				allInstances.push.apply(allInstances, // append
					defCopy.buildInstances()
				);
			}
		}

		return new EventInstanceGroup(allInstances);
	},


	// Freezing
	// -----------------------------------------------------------------------------------------------------------------


	freeze: function() {
		if (this.currentPeriod) {
			this.currentPeriod.freeze();
		}
	},


	thaw: function() {
		if (this.currentPeriod) {
			this.currentPeriod.thaw();
		}
	}

});


// Methods that straight-up query the current EventPeriod for an array of results.
[
	'getEventDefsById',
	'getEventInstances',
	'getEventInstancesWithId',
	'getEventInstancesWithoutId'
].forEach(function(methodName) {

	EventManager.prototype[methodName] = function() {
		var currentPeriod = this.currentPeriod;

		if (currentPeriod) {
			return currentPeriod[methodName].apply(currentPeriod, arguments);
		}

		return [];
	};
});


function isSourcesEquivalent(source0, source1) {
	return source0.getPrimitive() == source1.getPrimitive();
}

;;

var BUSINESS_HOUR_EVENT_DEFAULTS = {
	start: '09:00',
	end: '17:00',
	dow: [ 1, 2, 3, 4, 5 ], // monday - friday
	rendering: 'inverse-background'
	// classNames are defined in businessHoursSegClasses
};


var BusinessHourGenerator = FC.BusinessHourGenerator = Class.extend({

	rawComplexDef: null,
	calendar: null, // for anonymous EventSource


	constructor: function(rawComplexDef, calendar) {
		this.rawComplexDef = rawComplexDef;
		this.calendar = calendar;
	},


	buildEventInstanceGroup: function(isAllDay, unzonedRange) {
		var eventDefs = this.buildEventDefs(isAllDay);
		var eventInstanceGroup;

		if (eventDefs.length) {
			eventInstanceGroup = new EventInstanceGroup(
				eventDefsToEventInstances(eventDefs, unzonedRange)
			);

			// so that inverse-background rendering can happen even when no eventRanges in view
			eventInstanceGroup.explicitEventDef = eventDefs[0];

			return eventInstanceGroup;
		}
	},


	buildEventDefs: function(isAllDay) {
		var rawComplexDef = this.rawComplexDef;
		var rawDefs = [];
		var requireDow = false;
		var i;
		var defs = [];

		if (rawComplexDef === true) {
			rawDefs = [ {} ]; // will get BUSINESS_HOUR_EVENT_DEFAULTS verbatim
		}
		else if ($.isPlainObject(rawComplexDef)) {
			rawDefs = [ rawComplexDef ];
		}
		else if ($.isArray(rawComplexDef)) {
			rawDefs = rawComplexDef;
			requireDow = true; // every sub-definition NEEDS a day-of-week
		}

		for (i = 0; i < rawDefs.length; i++) {
			if (!requireDow || rawDefs[i].dow) {
				defs.push(
					this.buildEventDef(isAllDay, rawDefs[i])
				);
			}
		}

		return defs;
	},


	buildEventDef: function(isAllDay, rawDef) {
		var fullRawDef = $.extend({}, BUSINESS_HOUR_EVENT_DEFAULTS, rawDef);

		if (isAllDay) {
			fullRawDef.start = null;
			fullRawDef.end = null;
		}

		return RecurringEventDef.parse(
			fullRawDef,
			new EventSource(this.calendar) // dummy source
		);
	}

});

;;

var EventDefParser = {

	parse: function(eventInput, source) {
		if (
			isTimeString(eventInput.start) || moment.isDuration(eventInput.start) ||
			isTimeString(eventInput.end) || moment.isDuration(eventInput.end)
		) {
			return RecurringEventDef.parse(eventInput, source);
		}
		else {
			return SingleEventDef.parse(eventInput, source);
		}
	}

};

;;

var EventDef = FC.EventDef = Class.extend(ParsableModelMixin, {

	source: null, // required

	id: null, // normalized supplied ID
	rawId: null, // unnormalized supplied ID
	uid: null, // internal ID. new ID for every definition

	// NOTE: eventOrder sorting relies on these
	title: null,
	url: null,
	rendering: null,
	constraint: null,
	overlap: null,
	editable: null,
	startEditable: null,
	durationEditable: null,
	color: null,
	backgroundColor: null,
	borderColor: null,
	textColor: null,

	className: null, // an array. TODO: rename to className*s* (API breakage)
	miscProps: null,


	constructor: function(source) {
		this.source = source;
		this.className = [];
		this.miscProps = {};
	},


	isAllDay: function() {
		// subclasses must implement
	},


	buildInstances: function(unzonedRange) {
		// subclasses must implement
	},


	clone: function() {
		var copy = new this.constructor(this.source);

		copy.id = this.id;
		copy.rawId = this.rawId;
		copy.uid = this.uid; // not really unique anymore :(

		EventDef.copyVerbatimStandardProps(this, copy);

		copy.className = this.className.slice(); // copy
		copy.miscProps = $.extend({}, this.miscProps);

		return copy;
	},


	hasInverseRendering: function() {
		return this.getRendering() === 'inverse-background';
	},


	hasBgRendering: function() {
		var rendering = this.getRendering();

		return rendering === 'inverse-background' || rendering === 'background';
	},


	getRendering: function() {
		if (this.rendering != null) {
			return this.rendering;
		}

		return this.source.rendering;
	},


	getConstraint: function() {
		if (this.constraint != null) {
			return this.constraint;
		}

		if (this.source.constraint != null) {
			return this.source.constraint;
		}

		return this.source.calendar.opt('eventConstraint'); // what about View option?
	},


	getOverlap: function() {
		if (this.overlap != null) {
			return this.overlap;
		}

		if (this.source.overlap != null) {
			return this.source.overlap;
		}

		return this.source.calendar.opt('eventOverlap'); // what about View option?
	},


	isStartExplicitlyEditable: function() {
		if (this.startEditable !== null) {
			return this.startEditable;
		}

		return this.source.startEditable;
	},


	isDurationExplicitlyEditable: function() {
		if (this.durationEditable !== null) {
			return this.durationEditable;
		}

		return this.source.durationEditable;
	},


	isExplicitlyEditable: function() {
		if (this.editable !== null) {
			return this.editable;
		}

		return this.source.editable;
	},


	toLegacy: function() {
		var obj = $.extend({}, this.miscProps);

		obj._id = this.uid;
		obj.source = this.source;
		obj.className = this.className.slice(); // copy
		obj.allDay = this.isAllDay();

		if (this.rawId != null) {
			obj.id = this.rawId;
		}

		EventDef.copyVerbatimStandardProps(this, obj);

		return obj;
	},


	applyManualStandardProps: function(rawProps) {

		if (rawProps.id != null) {
			this.id = EventDef.normalizeId((this.rawId = rawProps.id));
		}
		else {
			this.id = EventDef.generateId();
		}

		if (rawProps._id != null) { // accept this prop, even tho somewhat internal
			this.uid = String(rawProps._id);
		}
		else {
			this.uid = EventDef.generateId();
		}

		// TODO: converge with EventSource
		if ($.isArray(rawProps.className)) {
			this.className = rawProps.className;
		}
		if (typeof rawProps.className === 'string') {
			this.className = rawProps.className.split(/\s+/);
		}

		return true;
	},


	applyMiscProps: function(rawProps) {
		$.extend(this.miscProps, rawProps);
	}

});

// finish initializing the mixin
EventDef.defineStandardProps = ParsableModelMixin_defineStandardProps;
EventDef.copyVerbatimStandardProps = ParsableModelMixin_copyVerbatimStandardProps;


// IDs
// ---------------------------------------------------------------------------------------------------------------------
// TODO: converge with EventSource


EventDef.uuid = 0;


EventDef.normalizeId = function(id) {
	return String(id);
};


EventDef.generateId = function() {
	return '_fc' + (EventDef.uuid++);
};


// Parsing
// ---------------------------------------------------------------------------------------------------------------------


EventDef.defineStandardProps({
	// not automatically assigned (`false`)
	_id: false,
	id: false,
	className: false,
	source: false, // will ignored

	// automatically assigned (`true`)
	title: true,
	url: true,
	rendering: true,
	constraint: true,
	overlap: true,
	editable: true,
	startEditable: true,
	durationEditable: true,
	color: true,
	backgroundColor: true,
	borderColor: true,
	textColor: true
});


EventDef.parse = function(rawInput, source) {
	var def = new this(source);
	var calendarTransform = source.calendar.opt('eventDataTransform');
	var sourceTransform = source.eventDataTransform;

	if (calendarTransform) {
		rawInput = calendarTransform(rawInput);
	}
	if (sourceTransform) {
		rawInput = sourceTransform(rawInput);
	}

	if (def.applyProps(rawInput)) {
		return def;
	}

	return false;
};

;;

var SingleEventDef = EventDef.extend({

	dateProfile: null,


	/*
	Will receive start/end params, but will be ignored.
	*/
	buildInstances: function() {
		return [ this.buildInstance() ];
	},


	buildInstance: function() {
		return new EventInstance(
			this, // definition
			this.dateProfile
		);
	},


	isAllDay: function() {
		return this.dateProfile.isAllDay();
	},


	clone: function() {
		var def = EventDef.prototype.clone.call(this);

		def.dateProfile = this.dateProfile;

		return def;
	},


	rezone: function() {
		var calendar = this.source.calendar;
		var dateProfile = this.dateProfile;

		this.dateProfile = new EventDateProfile(
			calendar.moment(dateProfile.start),
			dateProfile.end ? calendar.moment(dateProfile.end) : null,
			calendar
		);
	},


	/*
	NOTE: if super-method fails, should still attempt to apply
	*/
	applyManualStandardProps: function(rawProps) {
		var superSuccess = EventDef.prototype.applyManualStandardProps.apply(this, arguments);
		var dateProfile = EventDateProfile.parse(rawProps, this.source); // returns null on failure

		if (dateProfile) {
			this.dateProfile = dateProfile;

			// make sure `date` shows up in the legacy event objects as-is
			if (rawProps.date != null) {
				this.miscProps.date = rawProps.date;
			}

			return superSuccess;
		}
		else {
			return false;
		}
	}

});


// Parsing
// ---------------------------------------------------------------------------------------------------------------------


SingleEventDef.defineStandardProps({ // false = manually process
	start: false,
	date: false, // alias for 'start'
	end: false,
	allDay: false
});

;;

var RecurringEventDef = EventDef.extend({

	startTime: null, // duration
	endTime: null, // duration, or null
	dowHash: null, // object hash, or null


	isAllDay: function() {
		return !this.startTime && !this.endTime;
	},


	buildInstances: function(unzonedRange) {
		var calendar = this.source.calendar;
		var unzonedDate = unzonedRange.getStart();
		var unzonedEnd = unzonedRange.getEnd();
		var zonedDayStart;
		var instanceStart, instanceEnd;
		var instances = [];

		while (unzonedDate.isBefore(unzonedEnd)) {

			// if everyday, or this particular day-of-week
			if (!this.dowHash || this.dowHash[unzonedDate.day()]) {

				zonedDayStart = calendar.applyTimezone(unzonedDate);
				instanceStart = zonedDayStart.clone();
				instanceEnd = null;

				if (this.startTime) {
					instanceStart.time(this.startTime);
				}
				else {
					instanceStart.stripTime();
				}

				if (this.endTime) {
					instanceEnd = zonedDayStart.clone().time(this.endTime);
				}

				instances.push(
					new EventInstance(
						this, // definition
						new EventDateProfile(instanceStart, instanceEnd, calendar)
					)
				);
			}

			unzonedDate.add(1, 'days');
		}

		return instances;
	},


	setDow: function(dowNumbers) {

		if (!this.dowHash) {
			this.dowHash = {};
		}

		for (var i = 0; i < dowNumbers.length; i++) {
			this.dowHash[dowNumbers[i]] = true;
		}
	},


	clone: function() {
		var def = EventDef.prototype.clone.call(this);

		if (def.startTime) {
			def.startTime = moment.duration(this.startTime);
		}

		if (def.endTime) {
			def.endTime = moment.duration(this.endTime);
		}

		if (this.dowHash) {
			def.dowHash = $.extend({}, this.dowHash);
		}

		return def;
	},


	/*
	NOTE: if super-method fails, should still attempt to apply
	*/
	applyProps: function(rawProps) {
		var superSuccess = EventDef.prototype.applyProps.apply(this, arguments);

		if (rawProps.start) {
			this.startTime = moment.duration(rawProps.start);
		}

		if (rawProps.end) {
			this.endTime = moment.duration(rawProps.end);
		}

		if (rawProps.dow) {
			this.setDow(rawProps.dow);
		}

		return superSuccess;
	}

});


// Parsing
// ---------------------------------------------------------------------------------------------------------------------


RecurringEventDef.defineStandardProps({ // false = manually process
	start: false,
	end: false,
	dow: false
});

;;

var EventInstance = Class.extend({

	def: null, // EventDef
	dateProfile: null, // EventDateProfile


	constructor: function(def, dateProfile) {
		this.def = def;
		this.dateProfile = dateProfile;
	},


	toLegacy: function() {
		var dateProfile = this.dateProfile;
		var obj = this.def.toLegacy();

		obj.start = dateProfile.start.clone();
		obj.end = dateProfile.end ? dateProfile.end.clone() : null;

		return obj;
	}

});

;;

/*
It's expected that there will be at least one EventInstance,
OR that an explicitEventDef is assigned.
*/
var EventInstanceGroup = FC.EventInstanceGroup = Class.extend({

	eventInstances: null,
	explicitEventDef: null, // optional


	constructor: function(eventInstances) {
		this.eventInstances = eventInstances || [];
	},


	getAllEventRanges: function(constraintRange) {
		if (constraintRange) {
			return this.sliceNormalRenderRanges(constraintRange);
		}
		else {
			return this.eventInstances.map(eventInstanceToEventRange);
		}
	},


	sliceRenderRanges: function(constraintRange) {
		if (this.isInverse()) {
			return this.sliceInverseRenderRanges(constraintRange);
		}
		else {
			return this.sliceNormalRenderRanges(constraintRange);
		}
	},


	sliceNormalRenderRanges: function(constraintRange) {
		var eventInstances = this.eventInstances;
		var i, eventInstance;
		var slicedRange;
		var slicedEventRanges = [];

		for (i = 0; i < eventInstances.length; i++) {
			eventInstance = eventInstances[i];

			slicedRange = eventInstance.dateProfile.unzonedRange.intersect(constraintRange);

			if (slicedRange) {
				slicedEventRanges.push(
					new EventRange(
						slicedRange,
						eventInstance.def,
						eventInstance
					)
				);
			}
		}

		return slicedEventRanges;
	},


	sliceInverseRenderRanges: function(constraintRange) {
		var unzonedRanges = this.eventInstances.map(eventInstanceToUnzonedRange);
		var ownerDef = this.getEventDef();

		unzonedRanges = invertUnzonedRanges(unzonedRanges, constraintRange);

		return unzonedRanges.map(function(unzonedRange) {
			return new EventRange(unzonedRange, ownerDef); // don't give an EventInstance
		});
	},


	isInverse: function() {
		return this.getEventDef().hasInverseRendering();
	},


	getEventDef: function() {
		return this.explicitEventDef || this.eventInstances[0].def;
	}

});

;;

/*
Meant to be immutable
*/
var EventDateProfile = Class.extend({

	start: null,
	end: null,
	unzonedRange: null,


	constructor: function(start, end, calendar) {
		this.start = start;
		this.end = end || null;
		this.unzonedRange = this.buildUnzonedRange(calendar);
	},


	isAllDay: function() { // why recompute this every time?
		return !(this.start.hasTime() || (this.end && this.end.hasTime()));
	},


	/*
	Needs a Calendar object
	*/
	buildUnzonedRange: function(calendar) {
		var startMs = this.start.clone().stripZone().valueOf();
		var endMs = this.getEnd(calendar).stripZone().valueOf();

		return new UnzonedRange(startMs, endMs);
	},


	/*
	Needs a Calendar object
	*/
	getEnd: function(calendar) {
		return this.end ?
			this.end.clone() :
			// derive the end from the start and allDay. compute allDay if necessary
			calendar.getDefaultEventEnd(
				this.isAllDay(),
				this.start
			);
	}

});


EventDateProfile.isStandardProp = function(propName) {
	return propName === 'start' || propName === 'date' || propName === 'end' || propName === 'allDay';
};


/*
Needs an EventSource object
*/
EventDateProfile.parse = function(rawProps, source) {
	var startInput = rawProps.start || rawProps.date;
	var endInput = rawProps.end;

	if (!startInput) {
		return false;
	}

	var calendar = source.calendar;
	var start = calendar.moment(startInput);
	var end = endInput ? calendar.moment(endInput) : null;
	var forcedAllDay = rawProps.allDay;
	var forceEventDuration = calendar.opt('forceEventDuration');

	if (!start.isValid()) {
		return false;
	}

	if (end && (!end.isValid() || !end.isAfter(start))) {
		end = null;
	}

	if (forcedAllDay == null) {
		forcedAllDay = source.allDayDefault;
		if (forcedAllDay == null) {
			forcedAllDay = calendar.opt('allDayDefault');
		}
	}

	if (forcedAllDay === true) {
		start.stripTime();
		if (end) {
			end.stripTime();
		}
	}
	else if (forcedAllDay === false) {
		if (!start.hasTime()) {
			start.time(0);
		}
		if (end && !end.hasTime()) {
			end.time(0);
		}
	}

	if (!end && forceEventDuration) {
		end = calendar.getDefaultEventEnd(!start.hasTime(), start);
	}

	return new EventDateProfile(start, end, calendar);
};

;;

var EventRange = Class.extend({

	unzonedRange: null,
	eventDef: null,
	eventInstance: null, // optional


	constructor: function(unzonedRange, eventDef, eventInstance) {
		this.unzonedRange = unzonedRange;
		this.eventDef = eventDef;

		if (eventInstance) {
			this.eventInstance = eventInstance;
		}
	}

});

;;

var EventFootprint = FC.EventFootprint = Class.extend({

	componentFootprint: null,
	eventDef: null,
	eventInstance: null, // optional


	constructor: function(componentFootprint, eventDef, eventInstance) {
		this.componentFootprint = componentFootprint;
		this.eventDef = eventDef;

		if (eventInstance) {
			this.eventInstance = eventInstance;
		}
	},


	getEventLegacy: function() {
		return (this.eventInstance || this.eventDef).toLegacy();
	}

});

;;

var EventDefMutation = FC.EventDefMutation = Class.extend({

	// won't ever be empty. will be null instead.
	// callers should use setDateMutation for setting.
	dateMutation: null,

	// hacks to get updateEvent/createFromRawProps to work.
	// not undo-able and not considered in isEmpty.
	eventDefId: null, // standard manual props
	className: null, // "
	verbatimStandardProps: null,
	miscProps: null,


	/*
	eventDef assumed to be a SingleEventDef.
	returns an undo function.
	*/
	mutateSingle: function(eventDef) {
		var origDateProfile;

		if (this.dateMutation) {
			origDateProfile = eventDef.dateProfile;

			eventDef.dateProfile = this.dateMutation.buildNewDateProfile(
				origDateProfile,
				eventDef.source.calendar
			);
		}

		// can't undo
		// TODO: more DRY with EventDef::applyManualStandardProps
		if (this.eventDefId != null) {
			eventDef.id = EventDef.normalizeId((eventDef.rawId = this.eventDefId));
		}

		// can't undo
		// TODO: more DRY with EventDef::applyManualStandardProps
		if (this.className) {
			eventDef.className = this.className;
		}

		// can't undo
		if (this.verbatimStandardProps) {
			SingleEventDef.copyVerbatimStandardProps(
				this.verbatimStandardProps, // src
				eventDef // dest
			);
		}

		// can't undo
		if (this.miscProps) {
			eventDef.applyMiscProps(this.miscProps);
		}

		if (origDateProfile) {
			return function() {
				eventDef.dateProfile = origDateProfile;
			};
		}
		else {
			return function() { };
		}
	},


	setDateMutation: function(dateMutation) {
		if (dateMutation && !dateMutation.isEmpty()) {
			this.dateMutation = dateMutation;
		}
		else {
			this.dateMutation = null;
		}
	},


	isEmpty: function() {
		return !this.dateMutation;
	}

});


EventDefMutation.createFromRawProps = function(eventInstance, rawProps, largeUnit) {
	var eventDef = eventInstance.def;
	var dateProps = {};
	var standardProps = {};
	var miscProps = {};
	var verbatimStandardProps = {};
	var eventDefId = null;
	var className = null;
	var propName;
	var dateProfile;
	var dateMutation;
	var defMutation;

	for (propName in rawProps) {
		if (EventDateProfile.isStandardProp(propName)) {
			dateProps[propName] = rawProps[propName];
		}
		else if (eventDef.isStandardProp(propName)) {
			standardProps[propName] = rawProps[propName];
		}
		else if (eventDef.miscProps[propName] !== rawProps[propName]) { // only if changed
			miscProps[propName] = rawProps[propName];
		}
	}

	dateProfile = EventDateProfile.parse(dateProps, eventDef.source);

	if (dateProfile) { // no failure?
		dateMutation = EventDefDateMutation.createFromDiff(
			eventInstance.dateProfile,
			dateProfile,
			largeUnit
		);
	}

	if (standardProps.id !== eventDef.id) {
		eventDefId = standardProps.id; // only apply if there's a change
	}

	if (!isArraysEqual(standardProps.className, eventDef.className)) {
		className = standardProps.className; // only apply if there's a change
	}

	EventDef.copyVerbatimStandardProps(
		standardProps, // src
		verbatimStandardProps // dest
	);

	defMutation = new EventDefMutation();
	defMutation.eventDefId = eventDefId;
	defMutation.className = className;
	defMutation.verbatimStandardProps = verbatimStandardProps;
	defMutation.miscProps = miscProps;

	if (dateMutation) {
		defMutation.dateMutation = dateMutation;
	}

	return defMutation;
};

;;

var EventDefDateMutation = Class.extend({

	clearEnd: false,
	forceTimed: false,
	forceAllDay: false,

	// Durations. if 0-ms duration, will be null instead.
	// Callers should not set this directly.
	dateDelta: null,
	startDelta: null,
	endDelta: null,


	/*
	returns an undo function.
	*/
	buildNewDateProfile: function(eventDateProfile, calendar) {
		var start = eventDateProfile.start.clone();
		var end = null;
		var shouldRezone = false;

		if (eventDateProfile.end && !this.clearEnd) {
			end = eventDateProfile.end.clone();
		}
		// if there will be an end-date mutation, guarantee an end,
		// ambigously-zoned according to the original allDay
		else if (this.endDelta && !end) {
			end = calendar.getDefaultEventEnd(eventDateProfile.isAllDay(), start);
		}

		if (this.forceTimed) {
			shouldRezone = true;

			if (!start.hasTime()) {
				start.time(0);
			}

			if (end && !end.hasTime()) {
				end.time(0);
			}
		}
		else if (this.forceAllDay) {

			if (start.hasTime()) {
				start.stripTime();
			}

			if (end && end.hasTime()) {
				end.stripTime();
			}
		}

		if (this.dateDelta) {
			shouldRezone = true;

			start.add(this.dateDelta);

			if (end) {
				end.add(this.dateDelta);
			}
		}

		// do this before adding startDelta to start, so we can work off of start
		if (this.endDelta) {
			shouldRezone = true;

			end.add(this.endDelta);
		}

		if (this.startDelta) {
			shouldRezone = true;

			start.add(this.startDelta);
		}

		if (shouldRezone) {
			start = calendar.applyTimezone(start);

			if (end) {
				end = calendar.applyTimezone(end);
			}
		}

		// TODO: okay to access calendar option?
		if (!end && calendar.opt('forceEventDuration')) {
			end = calendar.getDefaultEventEnd(eventDateProfile.isAllDay(), start);
		}

		return new EventDateProfile(start, end, calendar);
	},


	setDateDelta: function(dateDelta) {
		if (dateDelta && dateDelta.valueOf()) {
			this.dateDelta = dateDelta;
		}
		else {
			this.dateDelta = null;
		}
	},


	setStartDelta: function(startDelta) {
		if (startDelta && startDelta.valueOf()) {
			this.startDelta = startDelta;
		}
		else {
			this.startDelta = null;
		}
	},


	setEndDelta: function(endDelta) {
		if (endDelta && endDelta.valueOf()) {
			this.endDelta = endDelta;
		}
		else {
			this.endDelta = null;
		}
	},


	isEmpty: function() {
		return !this.clearEnd && !this.forceTimed && !this.forceAllDay &&
			!this.dateDelta && !this.startDelta && !this.endDelta;
	}

});


EventDefDateMutation.createFromDiff = function(dateProfile0, dateProfile1, largeUnit) {
	var clearEnd = dateProfile0.end && !dateProfile1.end;
	var forceTimed = dateProfile0.isAllDay() && !dateProfile1.isAllDay();
	var forceAllDay = !dateProfile0.isAllDay() && dateProfile1.isAllDay();
	var dateDelta;
	var endDiff;
	var endDelta;
	var mutation;

	// subtracts the dates in the appropriate way, returning a duration
	function subtractDates(date1, date0) { // date1 - date0
		if (largeUnit) {
			return diffByUnit(date1, date0, largeUnit); // poorly named
		}
		else if (dateProfile1.isAllDay()) {
			return diffDay(date1, date0); // poorly named
		}
		else {
			return diffDayTime(date1, date0); // poorly named
		}
	}

	dateDelta = subtractDates(dateProfile1.start, dateProfile0.start);

	if (dateProfile1.end) {
		// use unzonedRanges because dateProfile0.end might be null
		endDiff = subtractDates(
			dateProfile1.unzonedRange.getEnd(),
			dateProfile0.unzonedRange.getEnd()
		);
		endDelta = endDiff.subtract(dateDelta);
	}

	mutation = new EventDefDateMutation();
	mutation.clearEnd = clearEnd;
	mutation.forceTimed = forceTimed;
	mutation.forceAllDay = forceAllDay;
	mutation.setDateDelta(dateDelta);
	mutation.setEndDelta(endDelta);

	return mutation;
};

;;

function eventDefsToEventInstances(eventDefs, unzonedRange) {
	var eventInstances = [];
	var i;

	for (i = 0; i < eventDefs.length; i++) {
		eventInstances.push.apply(eventInstances, // append
			eventDefs[i].buildInstances(unzonedRange)
		);
	}

	return eventInstances;
}


function eventInstanceToEventRange(eventInstance) {
	return new EventRange(
		eventInstance.dateProfile.unzonedRange,
		eventInstance.def,
		eventInstance
	);
}


function eventRangeToEventFootprint(eventRange) {
	return new EventFootprint(
		new ComponentFootprint(
			eventRange.unzonedRange,
			eventRange.eventDef.isAllDay()
		),
		eventRange.eventDef,
		eventRange.eventInstance // might not exist
	);
}


function eventInstanceToUnzonedRange(eventInstance) {
	return eventInstance.dateProfile.unzonedRange;
}


function eventFootprintToComponentFootprint(eventFootprint) {
	return eventFootprint.componentFootprint;
}

;;

var EventSource = Class.extend(ParsableModelMixin, {

	calendar: null,

	id: null, // can stay null
	uid: null,
	color: null,
	backgroundColor: null,
	borderColor: null,
	textColor: null,
	className: null, // array
	editable: null,
	startEditable: null,
	durationEditable: null,
	rendering: null,
	overlap: null,
	constraint: null,
	allDayDefault: null,
	eventDataTransform: null, // optional function


	// can we do away with calendar? at least for the abstract?
	// useful for buildEventDef
	constructor: function(calendar) {
		this.calendar = calendar;
		this.className = [];
		this.uid = String(EventSource.uuid++);
	},


	fetch: function(start, end, timezone) {
		// subclasses must implement. must return a promise.
	},


	removeEventDefsById: function(eventDefId) {
		// optional for subclasses to implement
	},


	removeAllEventDefs: function() {
		// optional for subclasses to implement
	},


	/*
	For compairing/matching
	*/
	getPrimitive: function(otherSource) {
		// subclasses must implement
	},


	parseEventDefs: function(rawEventDefs) {
		var i;
		var eventDef;
		var eventDefs = [];

		for (i = 0; i < rawEventDefs.length; i++) {
			eventDef = EventDefParser.parse(
				rawEventDefs[i],
				this // source
			);

			if (eventDef) {
				eventDefs.push(eventDef);
			}
		}

		return eventDefs;
	},


	applyManualStandardProps: function(rawProps) {

		if (rawProps.id != null) {
			this.id = EventSource.normalizeId(rawProps.id);
		}

		// TODO: converge with EventDef
		if ($.isArray(rawProps.className)) {
			this.className = rawProps.className;
		}
		else if (typeof rawProps.className === 'string') {
			this.className = rawProps.className.split(/\s+/);
		}

		return true;
	}

});


// finish initializing the mixin
EventSource.defineStandardProps = ParsableModelMixin_defineStandardProps;


// IDs
// ---------------------------------------------------------------------------------------------------------------------
// TODO: converge with EventDef


EventSource.uuid = 0;


EventSource.normalizeId = function(id) {
	if (id) {
		return String(id);
	}

	return null;
};


// Parsing
// ---------------------------------------------------------------------------------------------------------------------


EventSource.defineStandardProps({
	// manually process...
	id: false,
	className: false,

	// automatically transfer...
	color: true,
	backgroundColor: true,
	borderColor: true,
	textColor: true,
	editable: true,
	startEditable: true,
	durationEditable: true,
	rendering: true,
	overlap: true,
	constraint: true,
	allDayDefault: true,
	eventDataTransform: true
});


/*
rawInput can be any data type!
*/
EventSource.parse = function(rawInput, calendar) {
	var source = new this(calendar);

	if (typeof rawInput === 'object') {
		if (source.applyProps(rawInput)) {
			return source;
		}
	}

	return false;
};


FC.EventSource = EventSource;

;;

var EventSourceParser = {

	sourceClasses: [],


	registerClass: function(EventSourceClass) {
		this.sourceClasses.unshift(EventSourceClass); // give highest priority
	},


	parse: function(rawInput, calendar) {
		var sourceClasses = this.sourceClasses;
		var i;
		var eventSource;

		for (i = 0; i < sourceClasses.length; i++) {
			eventSource = sourceClasses[i].parse(rawInput, calendar);

			if (eventSource) {
				return eventSource;
			}
		}
	}

};


FC.EventSourceParser = EventSourceParser;

;;

var ArrayEventSource = EventSource.extend({

	rawEventDefs: null, // unparsed
	eventDefs: null,
	currentTimezone: null,


	constructor: function(calendar) {
		EventSource.apply(this, arguments); // super-constructor
		this.eventDefs = []; // for if setRawEventDefs is never called
	},


	setRawEventDefs: function(rawEventDefs) {
		this.rawEventDefs = rawEventDefs;
		this.eventDefs = this.parseEventDefs(rawEventDefs);
	},


	fetch: function(start, end, timezone) {
		var eventDefs = this.eventDefs;
		var i;

		if (
			this.currentTimezone !== null &&
			this.currentTimezone !== timezone
		) {
			for (i = 0; i < eventDefs.length; i++) {
				if (eventDefs[i] instanceof SingleEventDef) {
					eventDefs[i].rezone();
				}
			}
		}

		this.currentTimezone = timezone;

		return Promise.resolve(eventDefs);
	},


	addEventDef: function(eventDef) {
		this.eventDefs.push(eventDef);
	},


	/*
	eventDefId already normalized to a string
	*/
	removeEventDefsById: function(eventDefId) {
		return removeMatching(this.eventDefs, function(eventDef) {
			return eventDef.id === eventDefId;
		});
	},


	removeAllEventDefs: function() {
		this.eventDefs = [];
	},


	getPrimitive: function() {
		return this.rawEventDefs;
	},


	applyManualStandardProps: function(rawProps) {
		var superSuccess = EventSource.prototype.applyManualStandardProps.apply(this, arguments);

		this.setRawEventDefs(rawProps.events);

		return superSuccess;
	}

});


ArrayEventSource.defineStandardProps({
	events: false // don't automatically transfer
});


ArrayEventSource.parse = function(rawInput, calendar) {
	var rawProps;

	// normalize raw input
	if ($.isArray(rawInput.events)) { // extended form
		rawProps = rawInput;
	}
	else if ($.isArray(rawInput)) { // short form
		rawProps = { events: rawInput };
	}

	if (rawProps) {
		return EventSource.parse.call(this, rawProps, calendar);
	}

	return false;
};


EventSourceParser.registerClass(ArrayEventSource);

FC.ArrayEventSource = ArrayEventSource;

;;

var FuncEventSource = EventSource.extend({

	func: null,


	fetch: function(start, end, timezone) {
		var _this = this;

		this.calendar.pushLoading();

		return Promise.construct(function(onResolve) {
			_this.func.call(
				_this.calendar,
				start.clone(),
				end.clone(),
				timezone,
				function(rawEventDefs) {
					_this.calendar.popLoading();

					onResolve(_this.parseEventDefs(rawEventDefs));
				}
			);
		});
	},


	getPrimitive: function() {
		return this.func;
	},


	applyManualStandardProps: function(rawProps) {
		var superSuccess = EventSource.prototype.applyManualStandardProps.apply(this, arguments);

		this.func = rawProps.events;

		return superSuccess;
	}

});


FuncEventSource.defineStandardProps({
	events: false // don't automatically transfer
});


FuncEventSource.parse = function(rawInput, calendar) {
	var rawProps;

	// normalize raw input
	if ($.isFunction(rawInput.events)) { // extended form
		rawProps = rawInput;
	}
	else if ($.isFunction(rawInput)) { // short form
		rawProps = { events: rawInput };
	}

	if (rawProps) {
		return EventSource.parse.call(this, rawProps, calendar);
	}

	return false;
};


EventSourceParser.registerClass(FuncEventSource);

FC.FuncEventSource = FuncEventSource;

;;

var JsonFeedEventSource = EventSource.extend({

	// these props must all be manually set before calling fetch
	url: null,
	startParam: null,
	endParam: null,
	timezoneParam: null,
	ajaxSettings: null, // does not include url


	fetch: function(start, end, timezone) {
		var _this = this;
		var ajaxSettings = this.ajaxSettings;
		var onSuccess = ajaxSettings.success;
		var onError = ajaxSettings.error;
		var requestParams = this.buildRequestParams(start, end, timezone);

		// todo: eventually handle the promise's then,
		// don't intercept success/error
		// tho will be a breaking API change

		this.calendar.pushLoading();

		return Promise.construct(function(onResolve, onReject) {
			$.ajax($.extend(
				{}, // destination
				JsonFeedEventSource.AJAX_DEFAULTS,
				ajaxSettings,
				{
					url: _this.url,
					data: requestParams,
					success: function(rawEventDefs) {
						var callbackRes;

						_this.calendar.popLoading();

						if (rawEventDefs) {
							callbackRes = applyAll(onSuccess, this, arguments); // redirect `this`

							if ($.isArray(callbackRes)) {
								rawEventDefs = callbackRes;
							}

							onResolve(_this.parseEventDefs(rawEventDefs));
						}
						else {
							onReject();
						}
					},
					error: function() {
						_this.calendar.popLoading();

						applyAll(onError, this, arguments); // redirect `this`
						onReject();
					}
				}
			));
		});
	},


	buildRequestParams: function(start, end, timezone) {
		var calendar = this.calendar;
		var ajaxSettings = this.ajaxSettings;
		var startParam, endParam, timezoneParam;
		var customRequestParams;
		var params = {};

		startParam = this.startParam;
		if (startParam == null) {
			startParam = calendar.opt('startParam');
		}

		endParam = this.endParam;
		if (endParam == null) {
			endParam = calendar.opt('endParam');
		}

		timezoneParam = this.timezoneParam;
		if (timezoneParam == null) {
			timezoneParam = calendar.opt('timezoneParam');
		}

		// retrieve any outbound GET/POST $.ajax data from the options
		if ($.isFunction(ajaxSettings.data)) {
			// supplied as a function that returns a key/value object
			customRequestParams = ajaxSettings.data();
		}
		else {
			// probably supplied as a straight key/value object
			customRequestParams = ajaxSettings.data || {};
		}

		$.extend(params, customRequestParams);

		params[startParam] = start.format();
		params[endParam] = end.format();

		if (timezone && timezone !== 'local') {
			params[timezoneParam] = timezone;
		}

		return params;
	},


	getPrimitive: function() {
		return this.url;
	},


	applyMiscProps: function(rawProps) {
		EventSource.prototype.applyMiscProps.apply(this, arguments);

		this.ajaxSettings = rawProps;
	}

});


JsonFeedEventSource.AJAX_DEFAULTS = {
	dataType: 'json',
	cache: false
};


JsonFeedEventSource.defineStandardProps({
	// automatically transfer (true)...
	url: true,
	startParam: true,
	endParam: true,
	timezoneParam: true
});


JsonFeedEventSource.parse = function(rawInput, calendar) {
	var rawProps;

	// normalize raw input
	if (typeof rawInput.url === 'string') { // extended form
		rawProps = rawInput;
	}
	else if (typeof rawInput === 'string') { // short form
		rawProps = { url: rawInput };
	}

	if (rawProps) {
		return EventSource.parse.call(this, rawProps, calendar);
	}

	return false;
};


EventSourceParser.registerClass(JsonFeedEventSource);

FC.JsonFeedEventSource = JsonFeedEventSource;

;;

var ThemeRegistry = FC.ThemeRegistry = {

	themeClassHash: {},


	register: function(themeName, themeClass) {
		this.themeClassHash[themeName] = themeClass;
	},


	getThemeClass: function(themeSetting) {
		if (!themeSetting) {
			return StandardTheme;
		}
		else if (themeSetting === true) {
			return JqueryUiTheme;
		}
		else {
			return this.themeClassHash[themeSetting];
		}
	}

};

;;

var Theme = FC.Theme = Class.extend({

	classes: {},
	iconClasses: {},
	baseIconClass: '',
	iconOverrideOption: null,
	iconOverrideCustomButtonOption: null,
	iconOverridePrefix: '',


	constructor: function(optionsModel) {
		this.optionsModel = optionsModel;
		this.processIconOverride();
	},


	processIconOverride: function() {
		if (this.iconOverrideOption) {
			this.setIconOverride(
				this.optionsModel.get(this.iconOverrideOption)
			);
		}
	},


	setIconOverride: function(iconOverrideHash) {
		var iconClassesCopy;
		var buttonName;

		if ($.isPlainObject(iconOverrideHash)) {
			iconClassesCopy = $.extend({}, this.iconClasses);

			for (buttonName in iconOverrideHash) {
				iconClassesCopy[buttonName] = this.applyIconOverridePrefix(
					iconOverrideHash[buttonName]
				);
			}

			this.iconClasses = iconClassesCopy;
		}
		else if (iconOverrideHash === false) {
			this.iconClasses = {};
		}
	},


	applyIconOverridePrefix: function(className) {
		var prefix = this.iconOverridePrefix;

		if (prefix && className.indexOf(prefix) !== 0) { // if not already present
			className = prefix + className;
		}

		return className;
	},


	getClass: function(key) {
		return this.classes[key] || '';
	},


	getIconClass: function(buttonName) {
		var className = this.iconClasses[buttonName];

		if (className) {
			return this.baseIconClass + ' ' + className;
		}

		return '';
	},


	getCustomButtonIconClass: function(customButtonProps) {
		var className;

		if (this.iconOverrideCustomButtonOption) {
			className = customButtonProps[this.iconOverrideCustomButtonOption];

			if (className) {
				return this.baseIconClass + ' ' + this.applyIconOverridePrefix(className);
			}
		}

		return '';
	}

});

;;

var StandardTheme = Theme.extend({

	classes: {
		widget: 'fc-unthemed',
		widgetHeader: 'fc-widget-header',
		widgetContent: 'fc-widget-content',

		buttonGroup: 'fc-button-group',
		button: 'fc-button',
		cornerLeft: 'fc-corner-left',
		cornerRight: 'fc-corner-right',
		stateDefault: 'fc-state-default',
		stateActive: 'fc-state-active',
		stateDisabled: 'fc-state-disabled',
		stateHover: 'fc-state-hover',
		stateDown: 'fc-state-down',

		popoverHeader: 'fc-widget-header',
		popoverContent: 'fc-widget-content',

		// day grid
		headerRow: 'fc-widget-header',
		dayRow: 'fc-widget-content',

		// list view
		listView: 'fc-widget-content'
	},

	baseIconClass: 'fc-icon',
	iconClasses: {
		close: 'fc-icon-x',
		prev: 'fc-icon-left-single-arrow',
		next: 'fc-icon-right-single-arrow',
		prevYear: 'fc-icon-left-double-arrow',
		nextYear: 'fc-icon-right-double-arrow'
	},

	iconOverrideOption: 'buttonIcons',
	iconOverrideCustomButtonOption: 'icon',
	iconOverridePrefix: 'fc-icon-'

});

ThemeRegistry.register('standard', StandardTheme);

;;

var JqueryUiTheme = Theme.extend({

	classes: {
		widget: 'ui-widget',
		widgetHeader: 'ui-widget-header',
		widgetContent: 'ui-widget-content',

		buttonGroup: 'fc-button-group',
		button: 'ui-button',
		cornerLeft: 'ui-corner-left',
		cornerRight: 'ui-corner-right',
		stateDefault: 'ui-state-default',
		stateActive: 'ui-state-active',
		stateDisabled: 'ui-state-disabled',
		stateHover: 'ui-state-hover',
		stateDown: 'ui-state-down',

		today: 'ui-state-highlight',

		popoverHeader: 'ui-widget-header',
		popoverContent: 'ui-widget-content',

		// day grid
		headerRow: 'ui-widget-header',
		dayRow: 'ui-widget-content',

		// list view
		listView: 'ui-widget-content'
	},

	baseIconClass: 'ui-icon',
	iconClasses: {
		close: 'ui-icon-closethick',
		prev: 'ui-icon-circle-triangle-w',
		next: 'ui-icon-circle-triangle-e',
		prevYear: 'ui-icon-seek-prev',
		nextYear: 'ui-icon-seek-next'
	},

	iconOverrideOption: 'themeButtonIcons',
	iconOverrideCustomButtonOption: 'themeIcon',
	iconOverridePrefix: 'ui-icon-'

});

ThemeRegistry.register('jquery-ui', JqueryUiTheme);

;;

var BootstrapTheme = Theme.extend({

	classes: {
		widget: 'fc-bootstrap3',

		tableGrid: 'table-bordered', // avoid `table` class b/c don't want margins. only border color
		tableList: 'table table-striped', // `table` class creates bottom margin but who cares

		buttonGroup: 'btn-group',
		button: 'btn btn-default',
		stateActive: 'active',
		stateDisabled: 'disabled',

		today: 'alert alert-info', // the plain `info` class requires `.table`, too much to ask

		popover: 'panel panel-default',
		popoverHeader: 'panel-heading',
		popoverContent: 'panel-body',

		// day grid
		headerRow: 'panel-default', // avoid `panel` class b/c don't want margins/radius. only border color
		dayRow: 'panel-default', // "

		// list view
		listView: 'panel panel-default'
	},

	baseIconClass: 'glyphicon',
	iconClasses: {
		close: 'glyphicon-remove',
		prev: 'glyphicon-chevron-left',
		next: 'glyphicon-chevron-right',
		prevYear: 'glyphicon-backward',
		nextYear: 'glyphicon-forward'
	},

	iconOverrideOption: 'bootstrapGlyphicons',
	iconOverrideCustomButtonOption: 'bootstrapGlyphicon',
	iconOverridePrefix: 'glyphicon-'

});

ThemeRegistry.register('bootstrap3', BootstrapTheme);

;;

var DayGridFillRenderer = FillRenderer.extend({

	fillSegTag: 'td', // override the default tag name


	attachSegEls: function(type, segs) {
		var nodes = [];
		var i, seg;
		var skeletonEl;

		for (i = 0; i < segs.length; i++) {
			seg = segs[i];
			skeletonEl = this.renderFillRow(type, seg);
			this.component.rowEls.eq(seg.row).append(skeletonEl);
			nodes.push(skeletonEl[0]);
		}

		return nodes;
	},


	// Generates the HTML needed for one row of a fill. Requires the seg's el to be rendered.
	renderFillRow: function(type, seg) {
		var colCnt = this.component.colCnt;
		var startCol = seg.leftCol;
		var endCol = seg.rightCol + 1;
		var className;
		var skeletonEl;
		var trEl;

		if (type === 'businessHours') {
			className = 'bgevent';
		}
		else {
			className = type.toLowerCase();
		}

		skeletonEl = $(
			'<div class="fc-' + className + '-skeleton">' +
				'<table><tr/></table>' +
			'</div>'
		);
		trEl = skeletonEl.find('tr');

		if (startCol > 0) {
			trEl.append('<td colspan="' + startCol + '"/>');
		}

		trEl.append(
			seg.el.attr('colspan', endCol - startCol)
		);

		if (endCol < colCnt) {
			trEl.append('<td colspan="' + (colCnt - endCol) + '"/>');
		}

		this.component.bookendCells(trEl);

		return skeletonEl;
	}
});

;;

/* Event-rendering methods for the DayGrid class
----------------------------------------------------------------------------------------------------------------------*/

var DayGridEventRenderer = EventRenderer.extend({

	dayGrid: null,
	rowStructs: null, // an array of objects, each holding information about a row's foreground event-rendering


	constructor: function(dayGrid) {
		EventRenderer.apply(this, arguments);

		this.dayGrid = dayGrid;
	},


	renderBgRanges: function(eventRanges) {
		// don't render timed background events
		eventRanges = $.grep(eventRanges, function(eventRange) {
			return eventRange.eventDef.isAllDay();
		});

		EventRenderer.prototype.renderBgRanges.call(this, eventRanges);
	},


	// Renders the given foreground event segments onto the grid
	renderFgSegs: function(segs) {
		var rowStructs = this.rowStructs = this.renderSegRows(segs);

		// append to each row's content skeleton
		this.dayGrid.rowEls.each(function(i, rowNode) {
			$(rowNode).find('.fc-content-skeleton > table').append(
				rowStructs[i].tbodyEl
			);
		});
	},


	// Unrenders all currently rendered foreground event segments
	unrenderFgSegs: function() {
		var rowStructs = this.rowStructs || [];
		var rowStruct;

		while ((rowStruct = rowStructs.pop())) {
			rowStruct.tbodyEl.remove();
		}

		this.rowStructs = null;
	},


	// Uses the given events array to generate <tbody> elements that should be appended to each row's content skeleton.
	// Returns an array of rowStruct objects (see the bottom of `renderSegRow`).
	// PRECONDITION: each segment shoud already have a rendered and assigned `.el`
	renderSegRows: function(segs) {
		var rowStructs = [];
		var segRows;
		var row;

		segRows = this.groupSegRows(segs); // group into nested arrays

		// iterate each row of segment groupings
		for (row = 0; row < segRows.length; row++) {
			rowStructs.push(
				this.renderSegRow(row, segRows[row])
			);
		}

		return rowStructs;
	},


	// Given a row # and an array of segments all in the same row, render a <tbody> element, a skeleton that contains
	// the segments. Returns object with a bunch of internal data about how the render was calculated.
	// NOTE: modifies rowSegs
	renderSegRow: function(row, rowSegs) {
		var colCnt = this.dayGrid.colCnt;
		var segLevels = this.buildSegLevels(rowSegs); // group into sub-arrays of levels
		var levelCnt = Math.max(1, segLevels.length); // ensure at least one level
		var tbody = $('<tbody/>');
		var segMatrix = []; // lookup for which segments are rendered into which level+col cells
		var cellMatrix = []; // lookup for all <td> elements of the level+col matrix
		var loneCellMatrix = []; // lookup for <td> elements that only take up a single column
		var i, levelSegs;
		var col;
		var tr;
		var j, seg;
		var td;

		// populates empty cells from the current column (`col`) to `endCol`
		function emptyCellsUntil(endCol) {
			while (col < endCol) {
				// try to grab a cell from the level above and extend its rowspan. otherwise, create a fresh cell
				td = (loneCellMatrix[i - 1] || [])[col];
				if (td) {
					td.attr(
						'rowspan',
						parseInt(td.attr('rowspan') || 1, 10) + 1
					);
				}
				else {
					td = $('<td/>');
					tr.append(td);
				}
				cellMatrix[i][col] = td;
				loneCellMatrix[i][col] = td;
				col++;
			}
		}

		for (i = 0; i < levelCnt; i++) { // iterate through all levels
			levelSegs = segLevels[i];
			col = 0;
			tr = $('<tr/>');

			segMatrix.push([]);
			cellMatrix.push([]);
			loneCellMatrix.push([]);

			// levelCnt might be 1 even though there are no actual levels. protect against this.
			// this single empty row is useful for styling.
			if (levelSegs) {
				for (j = 0; j < levelSegs.length; j++) { // iterate through segments in level
					seg = levelSegs[j];

					emptyCellsUntil(seg.leftCol);

					// create a container that occupies or more columns. append the event element.
					td = $('<td class="fc-event-container"/>').append(seg.el);
					if (seg.leftCol != seg.rightCol) {
						td.attr('colspan', seg.rightCol - seg.leftCol + 1);
					}
					else { // a single-column segment
						loneCellMatrix[i][col] = td;
					}

					while (col <= seg.rightCol) {
						cellMatrix[i][col] = td;
						segMatrix[i][col] = seg;
						col++;
					}

					tr.append(td);
				}
			}

			emptyCellsUntil(colCnt); // finish off the row
			this.dayGrid.bookendCells(tr);
			tbody.append(tr);
		}

		return { // a "rowStruct"
			row: row, // the row number
			tbodyEl: tbody,
			cellMatrix: cellMatrix,
			segMatrix: segMatrix,
			segLevels: segLevels,
			segs: rowSegs
		};
	},


	// Stacks a flat array of segments, which are all assumed to be in the same row, into subarrays of vertical levels.
	// NOTE: modifies segs
	buildSegLevels: function(segs) {
		var levels = [];
		var i, seg;
		var j;

		// Give preference to elements with certain criteria, so they have
		// a chance to be closer to the top.
		this.sortEventSegs(segs);

		for (i = 0; i < segs.length; i++) {
			seg = segs[i];

			// loop through levels, starting with the topmost, until the segment doesn't collide with other segments
			for (j = 0; j < levels.length; j++) {
				if (!isDaySegCollision(seg, levels[j])) {
					break;
				}
			}
			// `j` now holds the desired subrow index
			seg.level = j;

			// create new level array if needed and append segment
			(levels[j] || (levels[j] = [])).push(seg);
		}

		// order segments left-to-right. very important if calendar is RTL
		for (j = 0; j < levels.length; j++) {
			levels[j].sort(compareDaySegCols);
		}

		return levels;
	},


	// Given a flat array of segments, return an array of sub-arrays, grouped by each segment's row
	groupSegRows: function(segs) {
		var segRows = [];
		var i;

		for (i = 0; i < this.dayGrid.rowCnt; i++) {
			segRows.push([]);
		}

		for (i = 0; i < segs.length; i++) {
			segRows[segs[i].row].push(segs[i]);
		}

		return segRows;
	},


	// Computes a default event time formatting string if `timeFormat` is not explicitly defined
	computeEventTimeFormat: function() {
		return this.opt('extraSmallTimeFormat'); // like "6p" or "6:30p"
	},


	// Computes a default `displayEventEnd` value if one is not expliclty defined
	computeDisplayEventEnd: function() {
		return this.dayGrid.colCnt === 1; // we'll likely have space if there's only one day
	},


	// Builds the HTML to be used for the default element for an individual segment
	fgSegHtml: function(seg, disableResizing) {
		var view = this.view;
		var eventDef = seg.footprint.eventDef;
		var isAllDay = seg.footprint.componentFootprint.isAllDay;
		var isDraggable = view.isEventDefDraggable(eventDef);
		var isResizableFromStart = !disableResizing && isAllDay &&
			seg.isStart && view.isEventDefResizableFromStart(eventDef);
		var isResizableFromEnd = !disableResizing && isAllDay &&
			seg.isEnd && view.isEventDefResizableFromEnd(eventDef);
		var classes = this.getSegClasses(seg, isDraggable, isResizableFromStart || isResizableFromEnd);
		var skinCss = cssToStr(this.getSkinCss(eventDef));
		var timeHtml = '';
		var timeText;
		var titleHtml;

		classes.unshift('fc-day-grid-event', 'fc-h-event');

		// Only display a timed events time if it is the starting segment
		if (seg.isStart) {
			timeText = this.getTimeText(seg.footprint);
			if (timeText) {
				timeHtml = '<span class="fc-time">' + htmlEscape(timeText) + '</span>';
			}
		}

		titleHtml =
			'<span class="fc-title">' +
				(htmlEscape(eventDef.title || '') || '&nbsp;') + // we always want one line of height
			'</span>';

		return '<a class="' + classes.join(' ') + '"' +
				(eventDef.url ?
					' href="' + htmlEscape(eventDef.url) + '"' :
					''
					) +
				(skinCss ?
					' style="' + skinCss + '"' :
					''
					) +
			'>' +
				'<div class="fc-content">' +
					(this.isRTL ?
						titleHtml + ' ' + timeHtml : // put a natural space in between
						timeHtml + ' ' + titleHtml   //
						) +
				'</div>' +
				(isResizableFromStart ?
					'<div class="fc-resizer fc-start-resizer" />' :
					''
					) +
				(isResizableFromEnd ?
					'<div class="fc-resizer fc-end-resizer" />' :
					''
					) +
			'</a>';
	}

});


// Computes whether two segments' columns collide. They are assumed to be in the same row.
function isDaySegCollision(seg, otherSegs) {
	var i, otherSeg;

	for (i = 0; i < otherSegs.length; i++) {
		otherSeg = otherSegs[i];

		if (
			otherSeg.leftCol <= seg.rightCol &&
			otherSeg.rightCol >= seg.leftCol
		) {
			return true;
		}
	}

	return false;
}


// A cmp function for determining the leftmost event
function compareDaySegCols(a, b) {
	return a.leftCol - b.leftCol;
}

;;

var DayGridHelperRenderer = HelperRenderer.extend({


	// Renders a mock "helper" event. `sourceSeg` is the associated internal segment object. It can be null.
	renderSegs: function(segs, sourceSeg) {
		var helperNodes = [];
		var rowStructs;

		// TODO: not good to call eventRenderer this way
		rowStructs = this.eventRenderer.renderSegRows(segs);

		// inject each new event skeleton into each associated row
		this.component.rowEls.each(function(row, rowNode) {
			var rowEl = $(rowNode); // the .fc-row
			var skeletonEl = $('<div class="fc-helper-skeleton"><table/></div>'); // will be absolutely positioned
			var skeletonTopEl;
			var skeletonTop;

			// If there is an original segment, match the top position. Otherwise, put it at the row's top level
			if (sourceSeg && sourceSeg.row === row) {
				skeletonTop = sourceSeg.el.position().top;
			}
			else {
				skeletonTopEl = rowEl.find('.fc-content-skeleton tbody');
				if (!skeletonTopEl.length) { // when no events
					skeletonTopEl = rowEl.find('.fc-content-skeleton table');
				}

				skeletonTop = skeletonTopEl.position().top;
			}

			skeletonEl.css('top', skeletonTop)
				.find('table')
					.append(rowStructs[row].tbodyEl);

			rowEl.append(skeletonEl);
			helperNodes.push(skeletonEl[0]);
		});

		return $(helperNodes); // must return the elements rendered
	}

});

;;

/* A component that renders a grid of whole-days that runs horizontally. There can be multiple rows, one per week.
----------------------------------------------------------------------------------------------------------------------*/

var DayGrid = FC.DayGrid = InteractiveDateComponent.extend(StandardInteractionsMixin, DayTableMixin, {

	eventRendererClass: DayGridEventRenderer,
	businessHourRendererClass: BusinessHourRenderer,
	helperRendererClass: DayGridHelperRenderer,
	fillRendererClass: DayGridFillRenderer,

	view: null, // TODO: make more general and/or remove
	helperRenderer: null,

	cellWeekNumbersVisible: false, // display week numbers in day cell?

	bottomCoordPadding: 0, // hack for extending the hit area for the last row of the coordinate grid

	headContainerEl: null, // div that hold's the date header
	rowEls: null, // set of fake row elements
	cellEls: null, // set of whole-day elements comprising the row's background

	rowCoordCache: null,
	colCoordCache: null,

	// isRigid determines whether the individual rows should ignore the contents and be a constant height.
	// Relies on the view's colCnt and rowCnt. In the future, this component should probably be self-sufficient.
	isRigid: false,

	hasAllDayBusinessHours: true,


	constructor: function(view) {
		this.view = view; // do first, for opt calls during initialization

		InteractiveDateComponent.call(this);
	},


	// Slices up the given span (unzoned start/end with other misc data) into an array of segments
	componentFootprintToSegs: function(componentFootprint) {
		var segs = this.sliceRangeByRow(componentFootprint.unzonedRange);
		var i, seg;

		for (i = 0; i < segs.length; i++) {
			seg = segs[i];

			if (this.isRTL) {
				seg.leftCol = this.daysPerRow - 1 - seg.lastRowDayIndex;
				seg.rightCol = this.daysPerRow - 1 - seg.firstRowDayIndex;
			}
			else {
				seg.leftCol = seg.firstRowDayIndex;
				seg.rightCol = seg.lastRowDayIndex;
			}
		}

		return segs;
	},


	/* Date Rendering
	------------------------------------------------------------------------------------------------------------------*/


	renderDates: function(dateProfile) {
		this.dateProfile = dateProfile;
		this.updateDayTable();
		this.renderGrid();
	},


	unrenderDates: function() {
		this.removeSegPopover();
	},


	// Renders the rows and columns into the component's `this.el`, which should already be assigned.
	renderGrid: function() {
		var view = this.view;
		var rowCnt = this.rowCnt;
		var colCnt = this.colCnt;
		var html = '';
		var row;
		var col;

		if (this.headContainerEl) {
			this.headContainerEl.html(this.renderHeadHtml());
		}

		for (row = 0; row < rowCnt; row++) {
			html += this.renderDayRowHtml(row, this.isRigid);
		}
		this.el.html(html);

		this.rowEls = this.el.find('.fc-row');
		this.cellEls = this.el.find('.fc-day, .fc-disabled-day');

		this.rowCoordCache = new CoordCache({
			els: this.rowEls,
			isVertical: true
		});
		this.colCoordCache = new CoordCache({
			els: this.cellEls.slice(0, this.colCnt), // only the first row
			isHorizontal: true
		});

		// trigger dayRender with each cell's element
		for (row = 0; row < rowCnt; row++) {
			for (col = 0; col < colCnt; col++) {
				this.publiclyTrigger('dayRender', {
					context: view,
					args: [
						this.getCellDate(row, col),
						this.getCellEl(row, col),
						view
					]
				});
			}
		}
	},


	// Generates the HTML for a single row, which is a div that wraps a table.
	// `row` is the row number.
	renderDayRowHtml: function(row, isRigid) {
		var theme = this.view.calendar.theme;
		var classes = [ 'fc-row', 'fc-week', theme.getClass('dayRow') ];

		if (isRigid) {
			classes.push('fc-rigid');
		}

		return '' +
			'<div class="' + classes.join(' ') + '">' +
				'<div class="fc-bg">' +
					'<table class="' + theme.getClass('tableGrid') + '">' +
						this.renderBgTrHtml(row) +
					'</table>' +
				'</div>' +
				'<div class="fc-content-skeleton">' +
					'<table>' +
						(this.getIsNumbersVisible() ?
							'<thead>' +
								this.renderNumberTrHtml(row) +
							'</thead>' :
							''
							) +
					'</table>' +
				'</div>' +
			'</div>';
	},


	getIsNumbersVisible: function() {
		return this.getIsDayNumbersVisible() || this.cellWeekNumbersVisible;
	},


	getIsDayNumbersVisible: function() {
		return this.rowCnt > 1;
	},


	/* Grid Number Rendering
	------------------------------------------------------------------------------------------------------------------*/


	renderNumberTrHtml: function(row) {
		return '' +
			'<tr>' +
				(this.isRTL ? '' : this.renderNumberIntroHtml(row)) +
				this.renderNumberCellsHtml(row) +
				(this.isRTL ? this.renderNumberIntroHtml(row) : '') +
			'</tr>';
	},


	renderNumberIntroHtml: function(row) {
		return this.renderIntroHtml();
	},


	renderNumberCellsHtml: function(row) {
		var htmls = [];
		var col, date;

		for (col = 0; col < this.colCnt; col++) {
			date = this.getCellDate(row, col);
			htmls.push(this.renderNumberCellHtml(date));
		}

		return htmls.join('');
	},


	// Generates the HTML for the <td>s of the "number" row in the DayGrid's content skeleton.
	// The number row will only exist if either day numbers or week numbers are turned on.
	renderNumberCellHtml: function(date) {
		var view = this.view;
		var html = '';
		var isDateValid = this.dateProfile.activeUnzonedRange.containsDate(date); // TODO: called too frequently. cache somehow.
		var isDayNumberVisible = this.getIsDayNumbersVisible() && isDateValid;
		var classes;
		var weekCalcFirstDoW;

		if (!isDayNumberVisible && !this.cellWeekNumbersVisible) {
			// no numbers in day cell (week number must be along the side)
			return '<td/>'; //  will create an empty space above events :(
		}

		classes = this.getDayClasses(date);
		classes.unshift('fc-day-top');

		if (this.cellWeekNumbersVisible) {
			// To determine the day of week number change under ISO, we cannot
			// rely on moment.js methods such as firstDayOfWeek() or weekday(),
			// because they rely on the locale's dow (possibly overridden by
			// our firstDay option), which may not be Monday. We cannot change
			// dow, because that would affect the calendar start day as well.
			if (date._locale._fullCalendar_weekCalc === 'ISO') {
				weekCalcFirstDoW = 1;  // Monday by ISO 8601 definition
			}
			else {
				weekCalcFirstDoW = date._locale.firstDayOfWeek();
			}
		}

		html += '<td class="' + classes.join(' ') + '"' +
			(isDateValid ?
				' data-date="' + date.format() + '"' :
				''
				) +
			'>';

		if (this.cellWeekNumbersVisible && (date.day() == weekCalcFirstDoW)) {
			html += view.buildGotoAnchorHtml(
				{ date: date, type: 'week' },
				{ 'class': 'fc-week-number' },
				date.format('w') // inner HTML
			);
		}

		if (isDayNumberVisible) {
			html += view.buildGotoAnchorHtml(
				date,
				{ 'class': 'fc-day-number' },
				date.date() // inner HTML
			);
		}

		html += '</td>';

		return html;
	},


	/* Hit System
	------------------------------------------------------------------------------------------------------------------*/


	prepareHits: function() {
		this.colCoordCache.build();
		this.rowCoordCache.build();
		this.rowCoordCache.bottoms[this.rowCnt - 1] += this.bottomCoordPadding; // hack
	},


	releaseHits: function() {
		this.colCoordCache.clear();
		this.rowCoordCache.clear();
	},


	queryHit: function(leftOffset, topOffset) {
		if (this.colCoordCache.isLeftInBounds(leftOffset) && this.rowCoordCache.isTopInBounds(topOffset)) {
			var col = this.colCoordCache.getHorizontalIndex(leftOffset);
			var row = this.rowCoordCache.getVerticalIndex(topOffset);

			if (row != null && col != null) {
				return this.getCellHit(row, col);
			}
		}
	},


	getHitFootprint: function(hit) {
		var range = this.getCellRange(hit.row, hit.col);

		return new ComponentFootprint(
			new UnzonedRange(range.start, range.end),
			true // all-day?
		);
	},


	getHitEl: function(hit) {
		return this.getCellEl(hit.row, hit.col);
	},


	/* Cell System
	------------------------------------------------------------------------------------------------------------------*/
	// FYI: the first column is the leftmost column, regardless of date


	getCellHit: function(row, col) {
		return {
			row: row,
			col: col,
			component: this, // needed unfortunately :(
			left: this.colCoordCache.getLeftOffset(col),
			right: this.colCoordCache.getRightOffset(col),
			top: this.rowCoordCache.getTopOffset(row),
			bottom: this.rowCoordCache.getBottomOffset(row)
		};
	},


	getCellEl: function(row, col) {
		return this.cellEls.eq(row * this.colCnt + col);
	},


	/* Event Rendering
	------------------------------------------------------------------------------------------------------------------*/


	// Unrenders all events currently rendered on the grid
	unrenderEvents: function() {
		this.removeSegPopover(); // removes the "more.." events popover

		InteractiveDateComponent.prototype.unrenderEvents.apply(this, arguments);
	},


	// Retrieves all rendered segment objects currently rendered on the grid
	getOwnEventSegs: function() {
		return InteractiveDateComponent.prototype.getOwnEventSegs.apply(this, arguments) // get the segments from the super-method
			.concat(this.popoverSegs || []); // append the segments from the "more..." popover
	},


	/* Event Drag Visualization
	------------------------------------------------------------------------------------------------------------------*/


	// Renders a visual indication of an event or external element being dragged.
	// `eventLocation` has zoned start and end (optional)
	renderDrag: function(eventFootprints, seg, isTouch) {
		var i;

		for (i = 0; i < eventFootprints.length; i++) {
			this.renderHighlight(eventFootprints[i].componentFootprint);
		}

		// render drags from OTHER components as helpers
		if (eventFootprints.length && seg && seg.component !== this) {
			this.helperRenderer.renderEventDraggingFootprints(eventFootprints, seg, isTouch);

			return true; // signal helpers rendered
		}
	},


	// Unrenders any visual indication of a hovering event
	unrenderDrag: function(seg) {
		this.unrenderHighlight();
		this.helperRenderer.unrender();
	},


	/* Event Resize Visualization
	------------------------------------------------------------------------------------------------------------------*/


	// Renders a visual indication of an event being resized
	renderEventResize: function(eventFootprints, seg, isTouch) {
		var i;

		for (i = 0; i < eventFootprints.length; i++) {
			this.renderHighlight(eventFootprints[i].componentFootprint);
		}

		this.helperRenderer.renderEventResizingFootprints(eventFootprints, seg, isTouch);
	},


	// Unrenders a visual indication of an event being resized
	unrenderEventResize: function(seg) {
		this.unrenderHighlight();
		this.helperRenderer.unrender();
	}

});

;;

/* Methods relate to limiting the number events for a given day on a DayGrid
----------------------------------------------------------------------------------------------------------------------*/
// NOTE: all the segs being passed around in here are foreground segs

DayGrid.mixin({

	segPopover: null, // the Popover that holds events that can't fit in a cell. null when not visible
	popoverSegs: null, // an array of segment objects that the segPopover holds. null when not visible


	removeSegPopover: function() {
		if (this.segPopover) {
			this.segPopover.hide(); // in handler, will call segPopover's removeElement
		}
	},


	// Limits the number of "levels" (vertically stacking layers of events) for each row of the grid.
	// `levelLimit` can be false (don't limit), a number, or true (should be computed).
	limitRows: function(levelLimit) {
		var rowStructs = this.eventRenderer.rowStructs || [];
		var row; // row #
		var rowLevelLimit;

		for (row = 0; row < rowStructs.length; row++) {
			this.unlimitRow(row);

			if (!levelLimit) {
				rowLevelLimit = false;
			}
			else if (typeof levelLimit === 'number') {
				rowLevelLimit = levelLimit;
			}
			else {
				rowLevelLimit = this.computeRowLevelLimit(row);
			}

			if (rowLevelLimit !== false) {
				this.limitRow(row, rowLevelLimit);
			}
		}
	},


	// Computes the number of levels a row will accomodate without going outside its bounds.
	// Assumes the row is "rigid" (maintains a constant height regardless of what is inside).
	// `row` is the row number.
	computeRowLevelLimit: function(row) {
		var rowEl = this.rowEls.eq(row); // the containing "fake" row div
		var rowHeight = rowEl.height(); // TODO: cache somehow?
		var trEls = this.eventRenderer.rowStructs[row].tbodyEl.children();
		var i, trEl;
		var trHeight;

		function iterInnerHeights(i, childNode) {
			trHeight = Math.max(trHeight, $(childNode).outerHeight());
		}

		// Reveal one level <tr> at a time and stop when we find one out of bounds
		for (i = 0; i < trEls.length; i++) {
			trEl = trEls.eq(i).removeClass('fc-limited'); // reset to original state (reveal)

			// with rowspans>1 and IE8, trEl.outerHeight() would return the height of the largest cell,
			// so instead, find the tallest inner content element.
			trHeight = 0;
			trEl.find('> td > :first-child').each(iterInnerHeights);

			if (trEl.position().top + trHeight > rowHeight) {
				return i;
			}
		}

		return false; // should not limit at all
	},


	// Limits the given grid row to the maximum number of levels and injects "more" links if necessary.
	// `row` is the row number.
	// `levelLimit` is a number for the maximum (inclusive) number of levels allowed.
	limitRow: function(row, levelLimit) {
		var _this = this;
		var rowStruct = this.eventRenderer.rowStructs[row];
		var moreNodes = []; // array of "more" <a> links and <td> DOM nodes
		var col = 0; // col #, left-to-right (not chronologically)
		var levelSegs; // array of segment objects in the last allowable level, ordered left-to-right
		var cellMatrix; // a matrix (by level, then column) of all <td> jQuery elements in the row
		var limitedNodes; // array of temporarily hidden level <tr> and segment <td> DOM nodes
		var i, seg;
		var segsBelow; // array of segment objects below `seg` in the current `col`
		var totalSegsBelow; // total number of segments below `seg` in any of the columns `seg` occupies
		var colSegsBelow; // array of segment arrays, below seg, one for each column (offset from segs's first column)
		var td, rowspan;
		var segMoreNodes; // array of "more" <td> cells that will stand-in for the current seg's cell
		var j;
		var moreTd, moreWrap, moreLink;

		// Iterates through empty level cells and places "more" links inside if need be
		function emptyCellsUntil(endCol) { // goes from current `col` to `endCol`
			while (col < endCol) {
				segsBelow = _this.getCellSegs(row, col, levelLimit);
				if (segsBelow.length) {
					td = cellMatrix[levelLimit - 1][col];
					moreLink = _this.renderMoreLink(row, col, segsBelow);
					moreWrap = $('<div/>').append(moreLink);
					td.append(moreWrap);
					moreNodes.push(moreWrap[0]);
				}
				col++;
			}
		}

		if (levelLimit && levelLimit < rowStruct.segLevels.length) { // is it actually over the limit?
			levelSegs = rowStruct.segLevels[levelLimit - 1];
			cellMatrix = rowStruct.cellMatrix;

			limitedNodes = rowStruct.tbodyEl.children().slice(levelLimit) // get level <tr> elements past the limit
				.addClass('fc-limited').get(); // hide elements and get a simple DOM-nodes array

			// iterate though segments in the last allowable level
			for (i = 0; i < levelSegs.length; i++) {
				seg = levelSegs[i];
				emptyCellsUntil(seg.leftCol); // process empty cells before the segment

				// determine *all* segments below `seg` that occupy the same columns
				colSegsBelow = [];
				totalSegsBelow = 0;
				while (col <= seg.rightCol) {
					segsBelow = this.getCellSegs(row, col, levelLimit);
					colSegsBelow.push(segsBelow);
					totalSegsBelow += segsBelow.length;
					col++;
				}

				if (totalSegsBelow) { // do we need to replace this segment with one or many "more" links?
					td = cellMatrix[levelLimit - 1][seg.leftCol]; // the segment's parent cell
					rowspan = td.attr('rowspan') || 1;
					segMoreNodes = [];

					// make a replacement <td> for each column the segment occupies. will be one for each colspan
					for (j = 0; j < colSegsBelow.length; j++) {
						moreTd = $('<td class="fc-more-cell"/>').attr('rowspan', rowspan);
						segsBelow = colSegsBelow[j];
						moreLink = this.renderMoreLink(
							row,
							seg.leftCol + j,
							[ seg ].concat(segsBelow) // count seg as hidden too
						);
						moreWrap = $('<div/>').append(moreLink);
						moreTd.append(moreWrap);
						segMoreNodes.push(moreTd[0]);
						moreNodes.push(moreTd[0]);
					}

					td.addClass('fc-limited').after($(segMoreNodes)); // hide original <td> and inject replacements
					limitedNodes.push(td[0]);
				}
			}

			emptyCellsUntil(this.colCnt); // finish off the level
			rowStruct.moreEls = $(moreNodes); // for easy undoing later
			rowStruct.limitedEls = $(limitedNodes); // for easy undoing later
		}
	},


	// Reveals all levels and removes all "more"-related elements for a grid's row.
	// `row` is a row number.
	unlimitRow: function(row) {
		var rowStruct = this.eventRenderer.rowStructs[row];

		if (rowStruct.moreEls) {
			rowStruct.moreEls.remove();
			rowStruct.moreEls = null;
		}

		if (rowStruct.limitedEls) {
			rowStruct.limitedEls.removeClass('fc-limited');
			rowStruct.limitedEls = null;
		}
	},


	// Renders an <a> element that represents hidden event element for a cell.
	// Responsible for attaching click handler as well.
	renderMoreLink: function(row, col, hiddenSegs) {
		var _this = this;
		var view = this.view;

		return $('<a class="fc-more"/>')
			.text(
				this.getMoreLinkText(hiddenSegs.length)
			)
			.on('click', function(ev) {
				var clickOption = _this.opt('eventLimitClick');
				var date = _this.getCellDate(row, col);
				var moreEl = $(this);
				var dayEl = _this.getCellEl(row, col);
				var allSegs = _this.getCellSegs(row, col);

				// rescope the segments to be within the cell's date
				var reslicedAllSegs = _this.resliceDaySegs(allSegs, date);
				var reslicedHiddenSegs = _this.resliceDaySegs(hiddenSegs, date);

				if (typeof clickOption === 'function') {
					// the returned value can be an atomic option
					clickOption = _this.publiclyTrigger('eventLimitClick', {
						context: view,
						args: [
							{
								date: date.clone(),
								dayEl: dayEl,
								moreEl: moreEl,
								segs: reslicedAllSegs,
								hiddenSegs: reslicedHiddenSegs
							},
							ev,
							view
						]
					});
				}

				if (clickOption === 'popover') {
					_this.showSegPopover(row, col, moreEl, reslicedAllSegs);
				}
				else if (typeof clickOption === 'string') { // a view name
					view.calendar.zoomTo(date, clickOption);
				}
			});
	},


	// Reveals the popover that displays all events within a cell
	showSegPopover: function(row, col, moreLink, segs) {
		var _this = this;
		var view = this.view;
		var moreWrap = moreLink.parent(); // the <div> wrapper around the <a>
		var topEl; // the element we want to match the top coordinate of
		var options;

		if (this.rowCnt == 1) {
			topEl = view.el; // will cause the popover to cover any sort of header
		}
		else {
			topEl = this.rowEls.eq(row); // will align with top of row
		}

		options = {
			className: 'fc-more-popover ' + view.calendar.theme.getClass('popover'),
			content: this.renderSegPopoverContent(row, col, segs),
			parentEl: view.el, // attach to root of view. guarantees outside of scrollbars.
			top: topEl.offset().top,
			autoHide: true, // when the user clicks elsewhere, hide the popover
			viewportConstrain: this.opt('popoverViewportConstrain'),
			hide: function() {
				// kill everything when the popover is hidden
				// notify events to be removed
				if (_this.popoverSegs) {
					_this.triggerBeforeEventSegsDestroyed(_this.popoverSegs);
				}
				_this.segPopover.removeElement();
				_this.segPopover = null;
				_this.popoverSegs = null;
			}
		};

		// Determine horizontal coordinate.
		// We use the moreWrap instead of the <td> to avoid border confusion.
		if (this.isRTL) {
			options.right = moreWrap.offset().left + moreWrap.outerWidth() + 1; // +1 to be over cell border
		}
		else {
			options.left = moreWrap.offset().left - 1; // -1 to be over cell border
		}

		this.segPopover = new Popover(options);
		this.segPopover.show();

		// the popover doesn't live within the grid's container element, and thus won't get the event
		// delegated-handlers for free. attach event-related handlers to the popover.
		this.bindAllSegHandlersToEl(this.segPopover.el);

		this.triggerAfterEventSegsRendered(segs);
	},


	// Builds the inner DOM contents of the segment popover
	renderSegPopoverContent: function(row, col, segs) {
		var view = this.view;
		var theme = view.calendar.theme;
		var title = this.getCellDate(row, col).format(this.opt('dayPopoverFormat'));
		var content = $(
			'<div class="fc-header ' + theme.getClass('popoverHeader') + '">' +
				'<span class="fc-close ' + theme.getIconClass('close') + '"></span>' +
				'<span class="fc-title">' +
					htmlEscape(title) +
				'</span>' +
				'<div class="fc-clear"/>' +
			'</div>' +
			'<div class="fc-body ' + theme.getClass('popoverContent') + '">' +
				'<div class="fc-event-container"></div>' +
			'</div>'
		);
		var segContainer = content.find('.fc-event-container');
		var i;

		// render each seg's `el` and only return the visible segs
		segs = this.eventRenderer.renderFgSegEls(segs, true); // disableResizing=true
		this.popoverSegs = segs;

		for (i = 0; i < segs.length; i++) {

			// because segments in the popover are not part of a grid coordinate system, provide a hint to any
			// grids that want to do drag-n-drop about which cell it came from
			this.hitsNeeded();
			segs[i].hit = this.getCellHit(row, col);
			this.hitsNotNeeded();

			segContainer.append(segs[i].el);
		}

		return content;
	},


	// Given the events within an array of segment objects, reslice them to be in a single day
	resliceDaySegs: function(segs, dayDate) {
		var dayStart = dayDate.clone();
		var dayEnd = dayStart.clone().add(1, 'days');
		var dayRange = new UnzonedRange(dayStart, dayEnd);
		var newSegs = [];
		var i, seg;
		var slicedRange;

		for (i = 0; i < segs.length; i++) {
			seg = segs[i];
			slicedRange = seg.footprint.componentFootprint.unzonedRange.intersect(dayRange);

			if (slicedRange) {
				newSegs.push(
					$.extend({}, seg, {
						footprint: new EventFootprint(
							new ComponentFootprint(
								slicedRange,
								seg.footprint.componentFootprint.isAllDay
							),
							seg.footprint.eventDef,
							seg.footprint.eventInstance
						),
						isStart: seg.isStart && slicedRange.isStart,
						isEnd: seg.isEnd && slicedRange.isEnd
					})
				);
			}
		}

		// force an order because eventsToSegs doesn't guarantee one
		// TODO: research if still needed
		this.eventRenderer.sortEventSegs(newSegs);

		return newSegs;
	},


	// Generates the text that should be inside a "more" link, given the number of events it represents
	getMoreLinkText: function(num) {
		var opt = this.opt('eventLimitText');

		if (typeof opt === 'function') {
			return opt(num);
		}
		else {
			return '+' + num + ' ' + opt;
		}
	},


	// Returns segments within a given cell.
	// If `startLevel` is specified, returns only events including and below that level. Otherwise returns all segs.
	getCellSegs: function(row, col, startLevel) {
		var segMatrix = this.eventRenderer.rowStructs[row].segMatrix;
		var level = startLevel || 0;
		var segs = [];
		var seg;

		while (level < segMatrix.length) {
			seg = segMatrix[level][col];
			if (seg) {
				segs.push(seg);
			}
			level++;
		}

		return segs;
	}

});

;;

/* An abstract class for the "basic" views, as well as month view. Renders one or more rows of day cells.
----------------------------------------------------------------------------------------------------------------------*/
// It is a manager for a DayGrid subcomponent, which does most of the heavy lifting.
// It is responsible for managing width/height.

var BasicView = FC.BasicView = View.extend({

	scroller: null,

	dayGridClass: DayGrid, // class the dayGrid will be instantiated from (overridable by subclasses)
	dayGrid: null, // the main subcomponent that does most of the heavy lifting

	weekNumberWidth: null, // width of all the week-number cells running down the side


	constructor: function() {
		View.apply(this, arguments);

		this.dayGrid = this.instantiateDayGrid();
		this.dayGrid.isRigid = this.hasRigidRows();

		if (this.opt('weekNumbers')) {
			if (this.opt('weekNumbersWithinDays')) {
				this.dayGrid.cellWeekNumbersVisible = true;
				this.dayGrid.colWeekNumbersVisible = false;
			}
			else {
				this.dayGrid.cellWeekNumbersVisible = false;
				this.dayGrid.colWeekNumbersVisible = true;
			};
		}

		this.addChild(this.dayGrid);

		this.scroller = new Scroller({
			overflowX: 'hidden',
			overflowY: 'auto'
		});
	},


	// Generates the DayGrid object this view needs. Draws from this.dayGridClass
	instantiateDayGrid: function() {
		// generate a subclass on the fly with BasicView-specific behavior
		// TODO: cache this subclass
		var subclass = this.dayGridClass.extend(basicDayGridMethods);

		return new subclass(this);
	},


	// Computes the date range that will be rendered.
	buildRenderRange: function(currentUnzonedRange, currentRangeUnit, isRangeAllDay) {
		var renderUnzonedRange = View.prototype.buildRenderRange.apply(this, arguments); // an UnzonedRange
		var start = this.calendar.msToUtcMoment(renderUnzonedRange.startMs, isRangeAllDay);
		var end = this.calendar.msToUtcMoment(renderUnzonedRange.endMs, isRangeAllDay);

		// year and month views should be aligned with weeks. this is already done for week
		if (/^(year|month)$/.test(currentRangeUnit)) {
			start.startOf('week');

			// make end-of-week if not already
			if (end.weekday()) {
				end.add(1, 'week').startOf('week'); // exclusively move backwards
			}
		}

		return new UnzonedRange(start, end);
	},


	executeDateRender: function(dateProfile) {
		this.dayGrid.breakOnWeeks = /year|month|week/.test(dateProfile.currentRangeUnit);

		View.prototype.executeDateRender.apply(this, arguments);
	},


	renderSkeleton: function() {
		var dayGridContainerEl;
		var dayGridEl;

		this.el.addClass('fc-basic-view').html(this.renderSkeletonHtml());

		this.scroller.render();

		dayGridContainerEl = this.scroller.el.addClass('fc-day-grid-container');
		dayGridEl = $('<div class="fc-day-grid" />').appendTo(dayGridContainerEl);

		this.el.find('.fc-body > tr > td').append(dayGridContainerEl);

		this.dayGrid.headContainerEl = this.el.find('.fc-head-container');
		this.dayGrid.setElement(dayGridEl);
	},


	unrenderSkeleton: function() {
		this.dayGrid.removeElement();
		this.scroller.destroy();
	},


	// Builds the HTML skeleton for the view.
	// The day-grid component will render inside of a container defined by this HTML.
	renderSkeletonHtml: function() {
		var theme = this.calendar.theme;

		return '' +
			'<table class="' + theme.getClass('tableGrid') + '">' +
				(this.opt('columnHeader') ?
					'<thead class="fc-head">' +
						'<tr>' +
							'<td class="fc-head-container ' + theme.getClass('widgetHeader') + '">&nbsp;</td>' +
						'</tr>' +
					'</thead>' :
					''
					) +
				'<tbody class="fc-body">' +
					'<tr>' +
						'<td class="' + theme.getClass('widgetContent') + '"></td>' +
					'</tr>' +
				'</tbody>' +
			'</table>';
	},


	// Generates an HTML attribute string for setting the width of the week number column, if it is known
	weekNumberStyleAttr: function() {
		if (this.weekNumberWidth !== null) {
			return 'style="width:' + this.weekNumberWidth + 'px"';
		}
		return '';
	},


	// Determines whether each row should have a constant height
	hasRigidRows: function() {
		var eventLimit = this.opt('eventLimit');

		return eventLimit && typeof eventLimit !== 'number';
	},


	/* Dimensions
	------------------------------------------------------------------------------------------------------------------*/


	// Refreshes the horizontal dimensions of the view
	updateSize: function(totalHeight, isAuto, isResize) {
		var eventLimit = this.opt('eventLimit');
		var headRowEl = this.dayGrid.headContainerEl.find('.fc-row');
		var scrollerHeight;
		var scrollbarWidths;

		// hack to give the view some height prior to dayGrid's columns being rendered
		// TODO: separate setting height from scroller VS dayGrid.
		if (!this.dayGrid.rowEls) {
			if (!isAuto) {
				scrollerHeight = this.computeScrollerHeight(totalHeight);
				this.scroller.setHeight(scrollerHeight);
			}
			return;
		}

		View.prototype.updateSize.apply(this, arguments);

		if (this.dayGrid.colWeekNumbersVisible) {
			// Make sure all week number cells running down the side have the same width.
			// Record the width for cells created later.
			this.weekNumberWidth = matchCellWidths(
				this.el.find('.fc-week-number')
			);
		}

		// reset all heights to be natural
		this.scroller.clear();
		uncompensateScroll(headRowEl);

		this.dayGrid.removeSegPopover(); // kill the "more" popover if displayed

		// is the event limit a constant level number?
		if (eventLimit && typeof eventLimit === 'number') {
			this.dayGrid.limitRows(eventLimit); // limit the levels first so the height can redistribute after
		}

		// distribute the height to the rows
		// (totalHeight is a "recommended" value if isAuto)
		scrollerHeight = this.computeScrollerHeight(totalHeight);
		this.setGridHeight(scrollerHeight, isAuto);

		// is the event limit dynamically calculated?
		if (eventLimit && typeof eventLimit !== 'number') {
			this.dayGrid.limitRows(eventLimit); // limit the levels after the grid's row heights have been set
		}

		if (!isAuto) { // should we force dimensions of the scroll container?

			this.scroller.setHeight(scrollerHeight);
			scrollbarWidths = this.scroller.getScrollbarWidths();

			if (scrollbarWidths.left || scrollbarWidths.right) { // using scrollbars?

				compensateScroll(headRowEl, scrollbarWidths);

				// doing the scrollbar compensation might have created text overflow which created more height. redo
				scrollerHeight = this.computeScrollerHeight(totalHeight);
				this.scroller.setHeight(scrollerHeight);
			}

			// guarantees the same scrollbar widths
			this.scroller.lockOverflow(scrollbarWidths);
		}
	},


	// given a desired total height of the view, returns what the height of the scroller should be
	computeScrollerHeight: function(totalHeight) {
		return totalHeight -
			subtractInnerElHeight(this.el, this.scroller.el); // everything that's NOT the scroller
	},


	// Sets the height of just the DayGrid component in this view
	setGridHeight: function(height, isAuto) {
		if (isAuto) {
			undistributeHeight(this.dayGrid.rowEls); // let the rows be their natural height with no expanding
		}
		else {
			distributeHeight(this.dayGrid.rowEls, height, true); // true = compensate for height-hogging rows
		}
	},


	/* Scroll
	------------------------------------------------------------------------------------------------------------------*/


	computeInitialDateScroll: function() {
		return { top: 0 };
	},


	queryDateScroll: function() {
		return { top: this.scroller.getScrollTop() };
	},


	applyDateScroll: function(scroll) {
		if (scroll.top !== undefined) {
			this.scroller.setScrollTop(scroll.top);
		}
	}

});


// Methods that will customize the rendering behavior of the BasicView's dayGrid
var basicDayGridMethods = { // not relly methods anymore


	colWeekNumbersVisible: false, // display week numbers along the side?


	// Generates the HTML that will go before the day-of week header cells
	renderHeadIntroHtml: function() {
		var view = this.view;

		if (this.colWeekNumbersVisible) {
			return '' +
				'<th class="fc-week-number ' + view.calendar.theme.getClass('widgetHeader') + '" ' + view.weekNumberStyleAttr() + '>' +
					'<span>' + // needed for matchCellWidths
						htmlEscape(this.opt('weekNumberTitle')) +
					'</span>' +
				'</th>';
		}

		return '';
	},


	// Generates the HTML that will go before content-skeleton cells that display the day/week numbers
	renderNumberIntroHtml: function(row) {
		var view = this.view;
		var weekStart = this.getCellDate(row, 0);

		if (this.colWeekNumbersVisible) {
			return '' +
				'<td class="fc-week-number" ' + view.weekNumberStyleAttr() + '>' +
					view.buildGotoAnchorHtml( // aside from link, important for matchCellWidths
						{ date: weekStart, type: 'week', forceOff: this.colCnt === 1 },
						weekStart.format('w') // inner HTML
					) +
				'</td>';
		}

		return '';
	},


	// Generates the HTML that goes before the day bg cells for each day-row
	renderBgIntroHtml: function() {
		var view = this.view;

		if (this.colWeekNumbersVisible) {
			return '<td class="fc-week-number ' + view.calendar.theme.getClass('widgetContent') + '" ' +
				view.weekNumberStyleAttr() + '></td>';
		}

		return '';
	},


	// Generates the HTML that goes before every other type of row generated by DayGrid.
	// Affects helper-skeleton and highlight-skeleton rows.
	renderIntroHtml: function() {
		var view = this.view;

		if (this.colWeekNumbersVisible) {
			return '<td class="fc-week-number" ' + view.weekNumberStyleAttr() + '></td>';
		}

		return '';
	},


	getIsNumbersVisible: function() {
		return DayGrid.prototype.getIsNumbersVisible.apply(this, arguments) || this.colWeekNumbersVisible;
	}

};

;;

/* A month view with day cells running in rows (one-per-week) and columns
----------------------------------------------------------------------------------------------------------------------*/

var MonthView = FC.MonthView = BasicView.extend({


	// Computes the date range that will be rendered.
	buildRenderRange: function(currentUnzonedRange, currentRangeUnit, isRangeAllDay) {
		var renderUnzonedRange = BasicView.prototype.buildRenderRange.apply(this, arguments);
		var start = this.calendar.msToUtcMoment(renderUnzonedRange.startMs, isRangeAllDay);
		var end = this.calendar.msToUtcMoment(renderUnzonedRange.endMs, isRangeAllDay);
		var rowCnt;

		// ensure 6 weeks
		if (this.isFixedWeeks()) {
			rowCnt = Math.ceil( // could be partial weeks due to hiddenDays
				end.diff(start, 'weeks', true) // dontRound=true
			);
			end.add(6 - rowCnt, 'weeks');
		}

		return new UnzonedRange(start, end);
	},


	// Overrides the default BasicView behavior to have special multi-week auto-height logic
	setGridHeight: function(height, isAuto) {

		// if auto, make the height of each row the height that it would be if there were 6 weeks
		if (isAuto) {
			height *= this.rowCnt / 6;
		}

		distributeHeight(this.dayGrid.rowEls, height, !isAuto); // if auto, don't compensate for height-hogging rows
	},


	isFixedWeeks: function() {
		return this.opt('fixedWeekCount');
	},


	isDateInOtherMonth: function(date, dateProfile) {
		return date.month() !== moment.utc(dateProfile.currentUnzonedRange.startMs).month(); // TODO: optimize
	}

});

;;

fcViews.basic = {
	'class': BasicView
};

fcViews.basicDay = {
	type: 'basic',
	duration: { days: 1 }
};

fcViews.basicWeek = {
	type: 'basic',
	duration: { weeks: 1 }
};

fcViews.month = {
	'class': MonthView,
	duration: { months: 1 }, // important for prev/next
	defaults: {
		fixedWeekCount: true
	}
};
;;

var TimeGridFillRenderer = FillRenderer.extend({


	attachSegEls: function(type, segs) {
		var timeGrid = this.component;
		var containerEls;

		// TODO: more efficient lookup
		if (type === 'bgEvent') {
			containerEls = timeGrid.bgContainerEls;
		}
		else if (type === 'businessHours') {
			containerEls = timeGrid.businessContainerEls;
		}
		else if (type === 'highlight') {
			containerEls = timeGrid.highlightContainerEls;
		}

		timeGrid.updateSegVerticals(segs);
		timeGrid.attachSegsByCol(timeGrid.groupSegsByCol(segs), containerEls);

		return segs.map(function(seg) {
			return seg.el[0];
		});
	}

});

;;

/*
Only handles foreground segs.
Does not own rendering. Use for low-level util methods by TimeGrid.
*/
var TimeGridEventRenderer = EventRenderer.extend({

	timeGrid: null,


	constructor: function(timeGrid) {
		EventRenderer.apply(this, arguments);

		this.timeGrid = timeGrid;
	},


	renderFgSegs: function(segs) {
		this.renderFgSegsIntoContainers(segs, this.timeGrid.fgContainerEls);
	},


	// Given an array of foreground segments, render a DOM element for each, computes position,
	// and attaches to the column inner-container elements.
	renderFgSegsIntoContainers: function(segs, containerEls) {
		var segsByCol;
		var col;

		segsByCol = this.timeGrid.groupSegsByCol(segs);

		for (col = 0; col < this.timeGrid.colCnt; col++) {
			this.updateFgSegCoords(segsByCol[col]);
		}

		this.timeGrid.attachSegsByCol(segsByCol, containerEls);
	},


	unrenderFgSegs: function() {
		if (this.fgSegs) { // hack
			this.fgSegs.forEach(function(seg) {
				seg.el.remove();
			});
		}
	},


	// Computes a default event time formatting string if `timeFormat` is not explicitly defined
	computeEventTimeFormat: function() {
		return this.opt('noMeridiemTimeFormat'); // like "6:30" (no AM/PM)
	},


	// Computes a default `displayEventEnd` value if one is not expliclty defined
	computeDisplayEventEnd: function() {
		return true;
	},


	// Renders the HTML for a single event segment's default rendering
	fgSegHtml: function(seg, disableResizing) {
		var view = this.view;
		var calendar = view.calendar;
		var componentFootprint = seg.footprint.componentFootprint;
		var isAllDay = componentFootprint.isAllDay;
		var eventDef = seg.footprint.eventDef;
		var isDraggable = view.isEventDefDraggable(eventDef);
		var isResizableFromStart = !disableResizing && seg.isStart && view.isEventDefResizableFromStart(eventDef);
		var isResizableFromEnd = !disableResizing && seg.isEnd && view.isEventDefResizableFromEnd(eventDef);
		var classes = this.getSegClasses(seg, isDraggable, isResizableFromStart || isResizableFromEnd);
		var skinCss = cssToStr(this.getSkinCss(eventDef));
		var timeText;
		var fullTimeText; // more verbose time text. for the print stylesheet
		var startTimeText; // just the start time text

		classes.unshift('fc-time-grid-event', 'fc-v-event');

		// if the event appears to span more than one day...
		if (view.isMultiDayRange(componentFootprint.unzonedRange)) {
			// Don't display time text on segments that run entirely through a day.
			// That would appear as midnight-midnight and would look dumb.
			// Otherwise, display the time text for the *segment's* times (like 6pm-midnight or midnight-10am)
			if (seg.isStart || seg.isEnd) {
				var zonedStart = calendar.msToMoment(seg.startMs);
				var zonedEnd = calendar.msToMoment(seg.endMs);
				timeText = this._getTimeText(zonedStart, zonedEnd, isAllDay);
				fullTimeText = this._getTimeText(zonedStart, zonedEnd, isAllDay, 'LT');
				startTimeText = this._getTimeText(zonedStart, zonedEnd, isAllDay, null, false); // displayEnd=false
			}
		}
		else {
			// Display the normal time text for the *event's* times
			timeText = this.getTimeText(seg.footprint);
			fullTimeText = this.getTimeText(seg.footprint, 'LT');
			startTimeText = this.getTimeText(seg.footprint, null, false); // displayEnd=false
		}

		return '<a class="' + classes.join(' ') + '"' +
			(eventDef.url ?
				' href="' + htmlEscape(eventDef.url) + '"' :
				''
				) +
			(skinCss ?
				' style="' + skinCss + '"' :
				''
				) +
			'>' +
				'<div class="fc-content">' +
					(timeText ?
						'<div class="fc-time"' +
						' data-start="' + htmlEscape(startTimeText) + '"' +
						' data-full="' + htmlEscape(fullTimeText) + '"' +
						'>' +
							'<span>' + htmlEscape(timeText) + '</span>' +
						'</div>' :
						''
						) +
					(eventDef.title ?
						'<div class="fc-title">' +
							htmlEscape(eventDef.title) +
						'</div>' :
						''
						) +
				'</div>' +
				'<div class="fc-bg"/>' +
				/* TODO: write CSS for this
				(isResizableFromStart ?
					'<div class="fc-resizer fc-start-resizer" />' :
					''
					) +
				*/
				(isResizableFromEnd ?
					'<div class="fc-resizer fc-end-resizer" />' :
					''
					) +
			'</a>';
	},


	// Given segments that are assumed to all live in the *same column*,
	// compute their verical/horizontal coordinates and assign to their elements.
	updateFgSegCoords: function(segs) {
		this.timeGrid.computeSegVerticals(segs); // horizontals relies on this
		this.computeFgSegHorizontals(segs); // compute horizontal coordinates, z-index's, and reorder the array
		this.timeGrid.assignSegVerticals(segs);
		this.assignFgSegHorizontals(segs);
	},


	// Given an array of segments that are all in the same column, sets the backwardCoord and forwardCoord on each.
	// NOTE: Also reorders the given array by date!
	computeFgSegHorizontals: function(segs) {
		var levels;
		var level0;
		var i;

		this.sortEventSegs(segs); // order by certain criteria
		levels = buildSlotSegLevels(segs);
		computeForwardSlotSegs(levels);

		if ((level0 = levels[0])) {

			for (i = 0; i < level0.length; i++) {
				computeSlotSegPressures(level0[i]);
			}

			for (i = 0; i < level0.length; i++) {
				this.computeFgSegForwardBack(level0[i], 0, 0);
			}
		}
	},


	// Calculate seg.forwardCoord and seg.backwardCoord for the segment, where both values range
	// from 0 to 1. If the calendar is left-to-right, the seg.backwardCoord maps to "left" and
	// seg.forwardCoord maps to "right" (via percentage). Vice-versa if the calendar is right-to-left.
	//
	// The segment might be part of a "series", which means consecutive segments with the same pressure
	// who's width is unknown until an edge has been hit. `seriesBackwardPressure` is the number of
	// segments behind this one in the current series, and `seriesBackwardCoord` is the starting
	// coordinate of the first segment in the series.
	computeFgSegForwardBack: function(seg, seriesBackwardPressure, seriesBackwardCoord) {
		var forwardSegs = seg.forwardSegs;
		var i;

		if (seg.forwardCoord === undefined) { // not already computed

			if (!forwardSegs.length) {

				// if there are no forward segments, this segment should butt up against the edge
				seg.forwardCoord = 1;
			}
			else {

				// sort highest pressure first
				this.sortForwardSegs(forwardSegs);

				// this segment's forwardCoord will be calculated from the backwardCoord of the
				// highest-pressure forward segment.
				this.computeFgSegForwardBack(forwardSegs[0], seriesBackwardPressure + 1, seriesBackwardCoord);
				seg.forwardCoord = forwardSegs[0].backwardCoord;
			}

			// calculate the backwardCoord from the forwardCoord. consider the series
			seg.backwardCoord = seg.forwardCoord -
				(seg.forwardCoord - seriesBackwardCoord) / // available width for series
				(seriesBackwardPressure + 1); // # of segments in the series

			// use this segment's coordinates to computed the coordinates of the less-pressurized
			// forward segments
			for (i=0; i<forwardSegs.length; i++) {
				this.computeFgSegForwardBack(forwardSegs[i], 0, seg.forwardCoord);
			}
		}
	},


	sortForwardSegs: function(forwardSegs) {
		forwardSegs.sort(proxy(this, 'compareForwardSegs'));
	},


	// A cmp function for determining which forward segment to rely on more when computing coordinates.
	compareForwardSegs: function(seg1, seg2) {
		// put higher-pressure first
		return seg2.forwardPressure - seg1.forwardPressure ||
			// put segments that are closer to initial edge first (and favor ones with no coords yet)
			(seg1.backwardCoord || 0) - (seg2.backwardCoord || 0) ||
			// do normal sorting...
			this.compareEventSegs(seg1, seg2);
	},


	// Given foreground event segments that have already had their position coordinates computed,
	// assigns position-related CSS values to their elements.
	assignFgSegHorizontals: function(segs) {
		var i, seg;

		for (i = 0; i < segs.length; i++) {
			seg = segs[i];
			seg.el.css(this.generateFgSegHorizontalCss(seg));

			// if the height is short, add a className for alternate styling
			if (seg.bottom - seg.top < 30) {
				seg.el.addClass('fc-short');
			}
		}
	},


	// Generates an object with CSS properties/values that should be applied to an event segment element.
	// Contains important positioning-related properties that should be applied to any event element, customized or not.
	generateFgSegHorizontalCss: function(seg) {
		var shouldOverlap = this.opt('slotEventOverlap');
		var backwardCoord = seg.backwardCoord; // the left side if LTR. the right side if RTL. floating-point
		var forwardCoord = seg.forwardCoord; // the right side if LTR. the left side if RTL. floating-point
		var props = this.timeGrid.generateSegVerticalCss(seg); // get top/bottom first
		var left; // amount of space from left edge, a fraction of the total width
		var right; // amount of space from right edge, a fraction of the total width

		if (shouldOverlap) {
			// double the width, but don't go beyond the maximum forward coordinate (1.0)
			forwardCoord = Math.min(1, backwardCoord + (forwardCoord - backwardCoord) * 2);
		}

		if (this.timeGrid.isRTL) {
			left = 1 - forwardCoord;
			right = backwardCoord;
		}
		else {
			left = backwardCoord;
			right = 1 - forwardCoord;
		}

		props.zIndex = seg.level + 1; // convert from 0-base to 1-based
		props.left = left * 100 + '%';
		props.right = right * 100 + '%';

		if (shouldOverlap && seg.forwardPressure) {
			// add padding to the edge so that forward stacked events don't cover the resizer's icon
			props[this.isRTL ? 'marginLeft' : 'marginRight'] = 10 * 2; // 10 is a guesstimate of the icon's width
		}

		return props;
	}

});


// Builds an array of segments "levels". The first level will be the leftmost tier of segments if the calendar is
// left-to-right, or the rightmost if the calendar is right-to-left. Assumes the segments are already ordered by date.
function buildSlotSegLevels(segs) {
	var levels = [];
	var i, seg;
	var j;

	for (i=0; i<segs.length; i++) {
		seg = segs[i];

		// go through all the levels and stop on the first level where there are no collisions
		for (j=0; j<levels.length; j++) {
			if (!computeSlotSegCollisions(seg, levels[j]).length) {
				break;
			}
		}

		seg.level = j;

		(levels[j] || (levels[j] = [])).push(seg);
	}

	return levels;
}


// For every segment, figure out the other segments that are in subsequent
// levels that also occupy the same vertical space. Accumulate in seg.forwardSegs
function computeForwardSlotSegs(levels) {
	var i, level;
	var j, seg;
	var k;

	for (i=0; i<levels.length; i++) {
		level = levels[i];

		for (j=0; j<level.length; j++) {
			seg = level[j];

			seg.forwardSegs = [];
			for (k=i+1; k<levels.length; k++) {
				computeSlotSegCollisions(seg, levels[k], seg.forwardSegs);
			}
		}
	}
}


// Figure out which path forward (via seg.forwardSegs) results in the longest path until
// the furthest edge is reached. The number of segments in this path will be seg.forwardPressure
function computeSlotSegPressures(seg) {
	var forwardSegs = seg.forwardSegs;
	var forwardPressure = 0;
	var i, forwardSeg;

	if (seg.forwardPressure === undefined) { // not already computed

		for (i=0; i<forwardSegs.length; i++) {
			forwardSeg = forwardSegs[i];

			// figure out the child's maximum forward path
			computeSlotSegPressures(forwardSeg);

			// either use the existing maximum, or use the child's forward pressure
			// plus one (for the forwardSeg itself)
			forwardPressure = Math.max(
				forwardPressure,
				1 + forwardSeg.forwardPressure
			);
		}

		seg.forwardPressure = forwardPressure;
	}
}


// Find all the segments in `otherSegs` that vertically collide with `seg`.
// Append into an optionally-supplied `results` array and return.
function computeSlotSegCollisions(seg, otherSegs, results) {
	results = results || [];

	for (var i=0; i<otherSegs.length; i++) {
		if (isSlotSegCollision(seg, otherSegs[i])) {
			results.push(otherSegs[i]);
		}
	}

	return results;
}


// Do these segments occupy the same vertical space?
function isSlotSegCollision(seg1, seg2) {
	return seg1.bottom > seg2.top && seg1.top < seg2.bottom;
}

;;

var TimeGridHelperRenderer = HelperRenderer.extend({


	renderSegs: function(segs, sourceSeg) {
		var helperNodes = [];
		var i, seg;
		var sourceEl;

		// TODO: not good to call eventRenderer this way
		this.eventRenderer.renderFgSegsIntoContainers(
			segs,
			this.component.helperContainerEls
		);

		// Try to make the segment that is in the same row as sourceSeg look the same
		for (i = 0; i < segs.length; i++) {
			seg = segs[i];

			if (sourceSeg && sourceSeg.col === seg.col) {
				sourceEl = sourceSeg.el;
				seg.el.css({
					left: sourceEl.css('left'),
					right: sourceEl.css('right'),
					'margin-left': sourceEl.css('margin-left'),
					'margin-right': sourceEl.css('margin-right')
				});
			}

			helperNodes.push(seg.el[0]);
		}

		return $(helperNodes); // must return the elements rendered
	}

});

;;

/* A component that renders one or more columns of vertical time slots
----------------------------------------------------------------------------------------------------------------------*/
// We mixin DayTable, even though there is only a single row of days

var TimeGrid = FC.TimeGrid = InteractiveDateComponent.extend(StandardInteractionsMixin, DayTableMixin, {

	eventRendererClass: TimeGridEventRenderer,
	businessHourRendererClass: BusinessHourRenderer,
	helperRendererClass: TimeGridHelperRenderer,
	fillRendererClass: TimeGridFillRenderer,

	view: null, // TODO: make more general and/or remove
	helperRenderer: null,

	dayRanges: null, // UnzonedRange[], of start-end of each day
	slotDuration: null, // duration of a "slot", a distinct time segment on given day, visualized by lines
	snapDuration: null, // granularity of time for dragging and selecting
	snapsPerSlot: null,
	labelFormat: null, // formatting string for times running along vertical axis
	labelInterval: null, // duration of how often a label should be displayed for a slot

	headContainerEl: null, // div that hold's the date header
	colEls: null, // cells elements in the day-row background
	slatContainerEl: null, // div that wraps all the slat rows
	slatEls: null, // elements running horizontally across all columns
	nowIndicatorEls: null,

	colCoordCache: null,
	slatCoordCache: null,

	bottomRuleEl: null, // hidden by default
	colContainerEls: null, // containers for each column

	// inner-containers for each column where different types of segs live
	fgContainerEls: null,
	bgContainerEls: null,
	helperContainerEls: null,
	highlightContainerEls: null,
	businessContainerEls: null,

	// arrays of different types of displayed segments
	helperSegs: null,
	highlightSegs: null,
	businessSegs: null,


	constructor: function(view) {
		this.view = view; // do first, for opt calls during initialization

		InteractiveDateComponent.call(this); // call the super-constructor

		this.processOptions();
	},


	// Slices up the given span (unzoned start/end with other misc data) into an array of segments
	componentFootprintToSegs: function(componentFootprint) {
		var segs = this.sliceRangeByTimes(componentFootprint.unzonedRange);
		var i;

		for (i = 0; i < segs.length; i++) {
			if (this.isRTL) {
				segs[i].col = this.daysPerRow - 1 - segs[i].dayIndex;
			}
			else {
				segs[i].col = segs[i].dayIndex;
			}
		}

		return segs;
	},


	/* Date Handling
	------------------------------------------------------------------------------------------------------------------*/


	sliceRangeByTimes: function(unzonedRange) {
		var segs = [];
		var segRange;
		var dayIndex;

		for (dayIndex = 0; dayIndex < this.daysPerRow; dayIndex++) {

			segRange = unzonedRange.intersect(this.dayRanges[dayIndex]);

			if (segRange) {
				segs.push({
					startMs: segRange.startMs,
					endMs: segRange.endMs,
					isStart: segRange.isStart,
					isEnd: segRange.isEnd,
					dayIndex: dayIndex
				});
			}
		}

		return segs;
	},


	/* Options
	------------------------------------------------------------------------------------------------------------------*/


	// Parses various options into properties of this object
	processOptions: function() {
		var slotDuration = this.opt('slotDuration');
		var snapDuration = this.opt('snapDuration');
		var input;

		slotDuration = moment.duration(slotDuration);
		snapDuration = snapDuration ? moment.duration(snapDuration) : slotDuration;

		this.slotDuration = slotDuration;
		this.snapDuration = snapDuration;
		this.snapsPerSlot = slotDuration / snapDuration; // TODO: ensure an integer multiple?

		// might be an array value (for TimelineView).
		// if so, getting the most granular entry (the last one probably).
		input = this.opt('slotLabelFormat');
		if ($.isArray(input)) {
			input = input[input.length - 1];
		}

		this.labelFormat = input ||
			this.opt('smallTimeFormat'); // the computed default

		input = this.opt('slotLabelInterval');
		this.labelInterval = input ?
			moment.duration(input) :
			this.computeLabelInterval(slotDuration);
	},


	// Computes an automatic value for slotLabelInterval
	computeLabelInterval: function(slotDuration) {
		var i;
		var labelInterval;
		var slotsPerLabel;

		// find the smallest stock label interval that results in more than one slots-per-label
		for (i = AGENDA_STOCK_SUB_DURATIONS.length - 1; i >= 0; i--) {
			labelInterval = moment.duration(AGENDA_STOCK_SUB_DURATIONS[i]);
			slotsPerLabel = divideDurationByDuration(labelInterval, slotDuration);
			if (isInt(slotsPerLabel) && slotsPerLabel > 1) {
				return labelInterval;
			}
		}

		return moment.duration(slotDuration); // fall back. clone
	},


	/* Date Rendering
	------------------------------------------------------------------------------------------------------------------*/


	renderDates: function(dateProfile) {
		this.dateProfile = dateProfile;
		this.updateDayTable();
		this.renderSlats();
		this.renderColumns();
	},


	renderSkeleton: function() {
		var theme = this.view.calendar.theme;

		this.el.html(
			'<div class="fc-bg"></div>' +
			'<div class="fc-slats"></div>' +
			'<hr class="fc-divider ' + theme.getClass('widgetHeader') + '" style="display:none" />'
		);

		this.bottomRuleEl = this.el.find('hr');
	},


	renderSlats: function() {
		var theme = this.view.calendar.theme;

		this.slatContainerEl = this.el.find('> .fc-slats')
			.html(
				'<table class="' + theme.getClass('tableGrid') + '">' +
					this.renderSlatRowHtml() +
				'</table>'
			);

		this.slatEls = this.slatContainerEl.find('tr');

		this.slatCoordCache = new CoordCache({
			els: this.slatEls,
			isVertical: true
		});
	},


	// Generates the HTML for the horizontal "slats" that run width-wise. Has a time axis on a side. Depends on RTL.
	renderSlatRowHtml: function() {
		var view = this.view;
		var calendar = view.calendar;
		var theme = calendar.theme;
		var isRTL = this.isRTL;
		var dateProfile = this.dateProfile;
		var html = '';
		var slotTime = moment.duration(+dateProfile.minTime); // wish there was .clone() for durations
		var slotIterator = moment.duration(0);
		var slotDate; // will be on the view's first day, but we only care about its time
		var isLabeled;
		var axisHtml;

		// Calculate the time for each slot
		while (slotTime < dateProfile.maxTime) {
			slotDate = calendar.msToUtcMoment(dateProfile.renderUnzonedRange.startMs).time(slotTime);
			isLabeled = isInt(divideDurationByDuration(slotIterator, this.labelInterval));

			axisHtml =
				'<td class="fc-axis fc-time ' + theme.getClass('widgetContent') + '" ' + view.axisStyleAttr() + '>' +
					(isLabeled ?
						'<span>' + // for matchCellWidths
							htmlEscape(slotDate.format(this.labelFormat)) +
						'</span>' :
						''
						) +
				'</td>';

			html +=
				'<tr data-time="' + slotDate.format('HH:mm:ss') + '"' +
					(isLabeled ? '' : ' class="fc-minor"') +
					'>' +
					(!isRTL ? axisHtml : '') +
					'<td class="' + theme.getClass('widgetContent') + '"/>' +
					(isRTL ? axisHtml : '') +
				"</tr>";

			slotTime.add(this.slotDuration);
			slotIterator.add(this.slotDuration);
		}

		return html;
	},


	renderColumns: function() {
		var dateProfile = this.dateProfile;
		var theme = this.view.calendar.theme;

		this.dayRanges = this.dayDates.map(function(dayDate) {
			return new UnzonedRange(
				dayDate.clone().add(dateProfile.minTime),
				dayDate.clone().add(dateProfile.maxTime)
			);
		});

		if (this.headContainerEl) {
			this.headContainerEl.html(this.renderHeadHtml());
		}

		this.el.find('> .fc-bg').html(
			'<table class="' + theme.getClass('tableGrid') + '">' +
				this.renderBgTrHtml(0) + // row=0
			'</table>'
		);

		this.colEls = this.el.find('.fc-day, .fc-disabled-day');

		this.colCoordCache = new CoordCache({
			els: this.colEls,
			isHorizontal: true
		});

		this.renderContentSkeleton();
	},


	/* Content Skeleton
	------------------------------------------------------------------------------------------------------------------*/


	// Renders the DOM that the view's content will live in
	renderContentSkeleton: function() {
		var cellHtml = '';
		var i;
		var skeletonEl;

		for (i = 0; i < this.colCnt; i++) {
			cellHtml +=
				'<td>' +
					'<div class="fc-content-col">' +
						'<div class="fc-event-container fc-helper-container"></div>' +
						'<div class="fc-event-container"></div>' +
						'<div class="fc-highlight-container"></div>' +
						'<div class="fc-bgevent-container"></div>' +
						'<div class="fc-business-container"></div>' +
					'</div>' +
				'</td>';
		}

		skeletonEl = $(
			'<div class="fc-content-skeleton">' +
				'<table>' +
					'<tr>' + cellHtml + '</tr>' +
				'</table>' +
			'</div>'
		);

		this.colContainerEls = skeletonEl.find('.fc-content-col');
		this.helperContainerEls = skeletonEl.find('.fc-helper-container');
		this.fgContainerEls = skeletonEl.find('.fc-event-container:not(.fc-helper-container)');
		this.bgContainerEls = skeletonEl.find('.fc-bgevent-container');
		this.highlightContainerEls = skeletonEl.find('.fc-highlight-container');
		this.businessContainerEls = skeletonEl.find('.fc-business-container');

		this.bookendCells(skeletonEl.find('tr')); // TODO: do this on string level
		this.el.append(skeletonEl);
	},


	// Given a flat array of segments, return an array of sub-arrays, grouped by each segment's col
	groupSegsByCol: function(segs) {
		var segsByCol = [];
		var i;

		for (i = 0; i < this.colCnt; i++) {
			segsByCol.push([]);
		}

		for (i = 0; i < segs.length; i++) {
			segsByCol[segs[i].col].push(segs[i]);
		}

		return segsByCol;
	},


	// Given segments grouped by column, insert the segments' elements into a parallel array of container
	// elements, each living within a column.
	attachSegsByCol: function(segsByCol, containerEls) {
		var col;
		var segs;
		var i;

		for (col = 0; col < this.colCnt; col++) { // iterate each column grouping
			segs = segsByCol[col];

			for (i = 0; i < segs.length; i++) {
				containerEls.eq(col).append(segs[i].el);
			}
		}
	},


	/* Now Indicator
	------------------------------------------------------------------------------------------------------------------*/


	getNowIndicatorUnit: function() {
		return 'minute'; // will refresh on the minute
	},


	renderNowIndicator: function(date) {
		// seg system might be overkill, but it handles scenario where line needs to be rendered
		//  more than once because of columns with the same date (resources columns for example)
		var segs = this.componentFootprintToSegs(
			new ComponentFootprint(
				new UnzonedRange(date, date.valueOf() + 1), // protect against null range
				false // all-day
			)
		);
		var top = this.computeDateTop(date, date);
		var nodes = [];
		var i;

		// render lines within the columns
		for (i = 0; i < segs.length; i++) {
			nodes.push($('<div class="fc-now-indicator fc-now-indicator-line"></div>')
				.css('top', top)
				.appendTo(this.colContainerEls.eq(segs[i].col))[0]);
		}

		// render an arrow over the axis
		if (segs.length > 0) { // is the current time in view?
			nodes.push($('<div class="fc-now-indicator fc-now-indicator-arrow"></div>')
				.css('top', top)
				.appendTo(this.el.find('.fc-content-skeleton'))[0]);
		}

		this.nowIndicatorEls = $(nodes);
	},


	unrenderNowIndicator: function() {
		if (this.nowIndicatorEls) {
			this.nowIndicatorEls.remove();
			this.nowIndicatorEls = null;
		}
	},


	/* Coordinates
	------------------------------------------------------------------------------------------------------------------*/


	updateSize: function(totalHeight, isAuto, isResize) {
		InteractiveDateComponent.prototype.updateSize.apply(this, arguments);

		this.slatCoordCache.build();

		if (isResize) {
			this.updateSegVerticals(
				[].concat(this.eventRenderer.getSegs(), this.businessSegs || [])
			);
		}
	},


	getTotalSlatHeight: function() {
		return this.slatContainerEl.outerHeight();
	},


	// Computes the top coordinate, relative to the bounds of the grid, of the given date.
	// `ms` can be a millisecond UTC time OR a UTC moment.
	// A `startOfDayDate` must be given for avoiding ambiguity over how to treat midnight.
	computeDateTop: function(ms, startOfDayDate) {
		return this.computeTimeTop(
			moment.duration(
				ms - startOfDayDate.clone().stripTime()
			)
		);
	},


	// Computes the top coordinate, relative to the bounds of the grid, of the given time (a Duration).
	computeTimeTop: function(time) {
		var len = this.slatEls.length;
		var dateProfile = this.dateProfile;
		var slatCoverage = (time - dateProfile.minTime) / this.slotDuration; // floating-point value of # of slots covered
		var slatIndex;
		var slatRemainder;

		// compute a floating-point number for how many slats should be progressed through.
		// from 0 to number of slats (inclusive)
		// constrained because minTime/maxTime might be customized.
		slatCoverage = Math.max(0, slatCoverage);
		slatCoverage = Math.min(len, slatCoverage);

		// an integer index of the furthest whole slat
		// from 0 to number slats (*exclusive*, so len-1)
		slatIndex = Math.floor(slatCoverage);
		slatIndex = Math.min(slatIndex, len - 1);

		// how much further through the slatIndex slat (from 0.0-1.0) must be covered in addition.
		// could be 1.0 if slatCoverage is covering *all* the slots
		slatRemainder = slatCoverage - slatIndex;

		return this.slatCoordCache.getTopPosition(slatIndex) +
			this.slatCoordCache.getHeight(slatIndex) * slatRemainder;
	},


	// Refreshes the CSS top/bottom coordinates for each segment element.
	// Works when called after initial render, after a window resize/zoom for example.
	updateSegVerticals: function(segs) {
		this.computeSegVerticals(segs);
		this.assignSegVerticals(segs);
	},


	// For each segment in an array, computes and assigns its top and bottom properties
	computeSegVerticals: function(segs) {
		var eventMinHeight = this.opt('agendaEventMinHeight');
		var i, seg;
		var dayDate;

		for (i = 0; i < segs.length; i++) {
			seg = segs[i];
			dayDate = this.dayDates[seg.dayIndex];

			seg.top = this.computeDateTop(seg.startMs, dayDate);
			seg.bottom = Math.max(
				seg.top + eventMinHeight,
				this.computeDateTop(seg.endMs, dayDate)
			);
		}
	},


	// Given segments that already have their top/bottom properties computed, applies those values to
	// the segments' elements.
	assignSegVerticals: function(segs) {
		var i, seg;

		for (i = 0; i < segs.length; i++) {
			seg = segs[i];
			seg.el.css(this.generateSegVerticalCss(seg));
		}
	},


	// Generates an object with CSS properties for the top/bottom coordinates of a segment element
	generateSegVerticalCss: function(seg) {
		return {
			top: seg.top,
			bottom: -seg.bottom // flipped because needs to be space beyond bottom edge of event container
		};
	},


	/* Hit System
	------------------------------------------------------------------------------------------------------------------*/


	prepareHits: function() {
		this.colCoordCache.build();
		this.slatCoordCache.build();
	},


	releaseHits: function() {
		this.colCoordCache.clear();
		// NOTE: don't clear slatCoordCache because we rely on it for computeTimeTop
	},


	queryHit: function(leftOffset, topOffset) {
		var snapsPerSlot = this.snapsPerSlot;
		var colCoordCache = this.colCoordCache;
		var slatCoordCache = this.slatCoordCache;

		if (colCoordCache.isLeftInBounds(leftOffset) && slatCoordCache.isTopInBounds(topOffset)) {
			var colIndex = colCoordCache.getHorizontalIndex(leftOffset);
			var slatIndex = slatCoordCache.getVerticalIndex(topOffset);

			if (colIndex != null && slatIndex != null) {
				var slatTop = slatCoordCache.getTopOffset(slatIndex);
				var slatHeight = slatCoordCache.getHeight(slatIndex);
				var partial = (topOffset - slatTop) / slatHeight; // floating point number between 0 and 1
				var localSnapIndex = Math.floor(partial * snapsPerSlot); // the snap # relative to start of slat
				var snapIndex = slatIndex * snapsPerSlot + localSnapIndex;
				var snapTop = slatTop + (localSnapIndex / snapsPerSlot) * slatHeight;
				var snapBottom = slatTop + ((localSnapIndex + 1) / snapsPerSlot) * slatHeight;

				return {
					col: colIndex,
					snap: snapIndex,
					component: this, // needed unfortunately :(
					left: colCoordCache.getLeftOffset(colIndex),
					right: colCoordCache.getRightOffset(colIndex),
					top: snapTop,
					bottom: snapBottom
				};
			}
		}
	},


	getHitFootprint: function(hit) {
		var start = this.getCellDate(0, hit.col); // row=0
		var time = this.computeSnapTime(hit.snap); // pass in the snap-index
		var end;

		start.time(time);
		end = start.clone().add(this.snapDuration);

		return new ComponentFootprint(
			new UnzonedRange(start, end),
			false // all-day?
		);
	},


	// Given a row number of the grid, representing a "snap", returns a time (Duration) from its start-of-day
	computeSnapTime: function(snapIndex) {
		return moment.duration(this.dateProfile.minTime + this.snapDuration * snapIndex);
	},


	getHitEl: function(hit) {
		return this.colEls.eq(hit.col);
	},


	/* Event Drag Visualization
	------------------------------------------------------------------------------------------------------------------*/


	// Renders a visual indication of an event being dragged over the specified date(s).
	// A returned value of `true` signals that a mock "helper" event has been rendered.
	renderDrag: function(eventFootprints, seg, isTouch) {
		var i;

		if (seg) { // if there is event information for this drag, render a helper event

			if (eventFootprints.length) {
				this.helperRenderer.renderEventDraggingFootprints(eventFootprints, seg, isTouch);

				// signal that a helper has been rendered
				return true;
			}
		}
		else { // otherwise, just render a highlight

			for (i = 0; i < eventFootprints.length; i++) {
				this.renderHighlight(eventFootprints[i].componentFootprint);
			}
		}
	},


	// Unrenders any visual indication of an event being dragged
	unrenderDrag: function(seg) {
		this.unrenderHighlight();
		this.helperRenderer.unrender();
	},


	/* Event Resize Visualization
	------------------------------------------------------------------------------------------------------------------*/


	// Renders a visual indication of an event being resized
	renderEventResize: function(eventFootprints, seg, isTouch) {
		this.helperRenderer.renderEventResizingFootprints(eventFootprints, seg, isTouch);
	},


	// Unrenders any visual indication of an event being resized
	unrenderEventResize: function(seg) {
		this.helperRenderer.unrender();
	},


	/* Selection
	------------------------------------------------------------------------------------------------------------------*/


	// Renders a visual indication of a selection. Overrides the default, which was to simply render a highlight.
	renderSelectionFootprint: function(componentFootprint) {
		if (this.opt('selectHelper')) { // this setting signals that a mock helper event should be rendered
			this.helperRenderer.renderComponentFootprint(componentFootprint);
		}
		else {
			this.renderHighlight(componentFootprint);
		}
	},


	// Unrenders any visual indication of a selection
	unrenderSelection: function() {
		this.helperRenderer.unrender();
		this.unrenderHighlight();
	}

});

;;

/* An abstract class for all agenda-related views. Displays one more columns with time slots running vertically.
----------------------------------------------------------------------------------------------------------------------*/
// Is a manager for the TimeGrid subcomponent and possibly the DayGrid subcomponent (if allDaySlot is on).
// Responsible for managing width/height.

var AgendaView = FC.AgendaView = View.extend({

	scroller: null,

	timeGridClass: TimeGrid, // class used to instantiate the timeGrid. subclasses can override
	timeGrid: null, // the main time-grid subcomponent of this view

	dayGridClass: DayGrid, // class used to instantiate the dayGrid. subclasses can override
	dayGrid: null, // the "all-day" subcomponent. if all-day is turned off, this will be null

	axisWidth: null, // the width of the time axis running down the side

	// indicates that minTime/maxTime affects rendering
	usesMinMaxTime: true,


	constructor: function() {
		View.apply(this, arguments);

		this.timeGrid = this.instantiateTimeGrid();
		this.addChild(this.timeGrid);

		if (this.opt('allDaySlot')) { // should we display the "all-day" area?
			this.dayGrid = this.instantiateDayGrid(); // the all-day subcomponent of this view
			this.addChild(this.dayGrid);
		}

		this.scroller = new Scroller({
			overflowX: 'hidden',
			overflowY: 'auto'
		});
	},


	// Instantiates the TimeGrid object this view needs. Draws from this.timeGridClass
	instantiateTimeGrid: function() {
		var subclass = this.timeGridClass.extend(agendaTimeGridMethods);

		return new subclass(this);
	},


	// Instantiates the DayGrid object this view might need. Draws from this.dayGridClass
	instantiateDayGrid: function() {
		var subclass = this.dayGridClass.extend(agendaDayGridMethods);

		return new subclass(this);
	},


	/* Rendering
	------------------------------------------------------------------------------------------------------------------*/


	renderSkeleton: function() {
		var timeGridWrapEl;
		var timeGridEl;

		this.el.addClass('fc-agenda-view').html(this.renderSkeletonHtml());

		this.scroller.render();

		timeGridWrapEl = this.scroller.el.addClass('fc-time-grid-container');
		timeGridEl = $('<div class="fc-time-grid" />').appendTo(timeGridWrapEl);

		this.el.find('.fc-body > tr > td').append(timeGridWrapEl);

		this.timeGrid.headContainerEl = this.el.find('.fc-head-container');
		this.timeGrid.setElement(timeGridEl);

		if (this.dayGrid) {
			this.dayGrid.setElement(this.el.find('.fc-day-grid'));

			// have the day-grid extend it's coordinate area over the <hr> dividing the two grids
			this.dayGrid.bottomCoordPadding = this.dayGrid.el.next('hr').outerHeight();
		}
	},


	unrenderSkeleton: function() {
		this.timeGrid.removeElement();

		if (this.dayGrid) {
			this.dayGrid.removeElement();
		}

		this.scroller.destroy();
	},


	// Builds the HTML skeleton for the view.
	// The day-grid and time-grid components will render inside containers defined by this HTML.
	renderSkeletonHtml: function() {
		var theme = this.calendar.theme;

		return '' +
			'<table class="' + theme.getClass('tableGrid') + '">' +
				(this.opt('columnHeader') ?
					'<thead class="fc-head">' +
						'<tr>' +
							'<td class="fc-head-container ' + theme.getClass('widgetHeader') + '">&nbsp;</td>' +
						'</tr>' +
					'</thead>' :
					''
					) +
				'<tbody class="fc-body">' +
					'<tr>' +
						'<td class="' + theme.getClass('widgetContent') + '">' +
							(this.dayGrid ?
								'<div class="fc-day-grid"/>' +
								'<hr class="fc-divider ' + theme.getClass('widgetHeader') + '"/>' :
								''
								) +
						'</td>' +
					'</tr>' +
				'</tbody>' +
			'</table>';
	},


	// Generates an HTML attribute string for setting the width of the axis, if it is known
	axisStyleAttr: function() {
		if (this.axisWidth !== null) {
			 return 'style="width:' + this.axisWidth + 'px"';
		}
		return '';
	},


	/* Now Indicator
	------------------------------------------------------------------------------------------------------------------*/


	getNowIndicatorUnit: function() {
		return this.timeGrid.getNowIndicatorUnit();
	},


	/* Dimensions
	------------------------------------------------------------------------------------------------------------------*/


	// Adjusts the vertical dimensions of the view to the specified values
	updateSize: function(totalHeight, isAuto, isResize) {
		var eventLimit;
		var scrollerHeight;
		var scrollbarWidths;

		View.prototype.updateSize.apply(this, arguments);

		// make all axis cells line up, and record the width so newly created axis cells will have it
		this.axisWidth = matchCellWidths(this.el.find('.fc-axis'));

		// hack to give the view some height prior to timeGrid's columns being rendered
		// TODO: separate setting height from scroller VS timeGrid.
		if (!this.timeGrid.colEls) {
			if (!isAuto) {
				scrollerHeight = this.computeScrollerHeight(totalHeight);
				this.scroller.setHeight(scrollerHeight);
			}
			return;
		}

		// set of fake row elements that must compensate when scroller has scrollbars
		var noScrollRowEls = this.el.find('.fc-row:not(.fc-scroller *)');

		// reset all dimensions back to the original state
		this.timeGrid.bottomRuleEl.hide(); // .show() will be called later if this <hr> is necessary
		this.scroller.clear(); // sets height to 'auto' and clears overflow
		uncompensateScroll(noScrollRowEls);

		// limit number of events in the all-day area
		if (this.dayGrid) {
			this.dayGrid.removeSegPopover(); // kill the "more" popover if displayed

			eventLimit = this.opt('eventLimit');
			if (eventLimit && typeof eventLimit !== 'number') {
				eventLimit = AGENDA_ALL_DAY_EVENT_LIMIT; // make sure "auto" goes to a real number
			}
			if (eventLimit) {
				this.dayGrid.limitRows(eventLimit);
			}
		}

		if (!isAuto) { // should we force dimensions of the scroll container?

			scrollerHeight = this.computeScrollerHeight(totalHeight);
			this.scroller.setHeight(scrollerHeight);
			scrollbarWidths = this.scroller.getScrollbarWidths();

			if (scrollbarWidths.left || scrollbarWidths.right) { // using scrollbars?

				// make the all-day and header rows lines up
				compensateScroll(noScrollRowEls, scrollbarWidths);

				// the scrollbar compensation might have changed text flow, which might affect height, so recalculate
				// and reapply the desired height to the scroller.
				scrollerHeight = this.computeScrollerHeight(totalHeight);
				this.scroller.setHeight(scrollerHeight);
			}

			// guarantees the same scrollbar widths
			this.scroller.lockOverflow(scrollbarWidths);

			// if there's any space below the slats, show the horizontal rule.
			// this won't cause any new overflow, because lockOverflow already called.
			if (this.timeGrid.getTotalSlatHeight() < scrollerHeight) {
				this.timeGrid.bottomRuleEl.show();
			}
		}
	},


	// given a desired total height of the view, returns what the height of the scroller should be
	computeScrollerHeight: function(totalHeight) {
		return totalHeight -
			subtractInnerElHeight(this.el, this.scroller.el); // everything that's NOT the scroller
	},


	/* Scroll
	------------------------------------------------------------------------------------------------------------------*/


	// Computes the initial pre-configured scroll state prior to allowing the user to change it
	computeInitialDateScroll: function() {
		var scrollTime = moment.duration(this.opt('scrollTime'));
		var top = this.timeGrid.computeTimeTop(scrollTime);

		// zoom can give weird floating-point values. rather scroll a little bit further
		top = Math.ceil(top);

		if (top) {
			top++; // to overcome top border that slots beyond the first have. looks better
		}

		return { top: top };
	},


	queryDateScroll: function() {
		return { top: this.scroller.getScrollTop() };
	},


	applyDateScroll: function(scroll) {
		if (scroll.top !== undefined) {
			this.scroller.setScrollTop(scroll.top);
		}
	},


	/* Hit Areas
	------------------------------------------------------------------------------------------------------------------*/
	// forward all hit-related method calls to the grids (dayGrid might not be defined)


	getHitFootprint: function(hit) {
		// TODO: hit.component is set as a hack to identify where the hit came from
		return hit.component.getHitFootprint(hit);
	},


	getHitEl: function(hit) {
		// TODO: hit.component is set as a hack to identify where the hit came from
		return hit.component.getHitEl(hit);
	},


	/* Event Rendering
	------------------------------------------------------------------------------------------------------------------*/


	executeEventRender: function(eventsPayload) {
		var dayEventsPayload = {};
		var timedEventsPayload = {};
		var id, eventInstanceGroup;

		// separate the events into all-day and timed
		for (id in eventsPayload) {
			eventInstanceGroup = eventsPayload[id];

			if (eventInstanceGroup.getEventDef().isAllDay()) {
				dayEventsPayload[id] = eventInstanceGroup;
			}
			else {
				timedEventsPayload[id] = eventInstanceGroup;
			}
		}

		this.timeGrid.executeEventRender(timedEventsPayload);

		if (this.dayGrid) {
			this.dayGrid.executeEventRender(dayEventsPayload);
		}
	},


	/* Dragging/Resizing Routing
	------------------------------------------------------------------------------------------------------------------*/


	// A returned value of `true` signals that a mock "helper" event has been rendered.
	renderDrag: function(eventFootprints, seg, isTouch) {
		var groups = groupEventFootprintsByAllDay(eventFootprints);
		var renderedHelper = false;

		renderedHelper = this.timeGrid.renderDrag(groups.timed, seg, isTouch);

		if (this.dayGrid) {
			renderedHelper = this.dayGrid.renderDrag(groups.allDay, seg, isTouch) || renderedHelper;
		}

		return renderedHelper;
	},


	renderEventResize: function(eventFootprints, seg, isTouch) {
		var groups = groupEventFootprintsByAllDay(eventFootprints);

		this.timeGrid.renderEventResize(groups.timed, seg, isTouch);

		if (this.dayGrid) {
			this.dayGrid.renderEventResize(groups.allDay, seg, isTouch);
		}
	},


	/* Selection
	------------------------------------------------------------------------------------------------------------------*/


	// Renders a visual indication of a selection
	renderSelectionFootprint: function(componentFootprint) {
		if (!componentFootprint.isAllDay) {
			this.timeGrid.renderSelectionFootprint(componentFootprint);
		}
		else if (this.dayGrid) {
			this.dayGrid.renderSelectionFootprint(componentFootprint);
		}
	}

});


// Methods that will customize the rendering behavior of the AgendaView's timeGrid
// TODO: move into TimeGrid
var agendaTimeGridMethods = {


	// Generates the HTML that will go before the day-of week header cells
	renderHeadIntroHtml: function() {
		var view = this.view;
		var calendar = view.calendar;
		var weekStart = calendar.msToUtcMoment(this.dateProfile.renderUnzonedRange.startMs, true);
		var weekText;

		if (this.opt('weekNumbers')) {
			weekText = weekStart.format(this.opt('smallWeekFormat'));

			return '' +
				'<th class="fc-axis fc-week-number ' + calendar.theme.getClass('widgetHeader') + '" ' + view.axisStyleAttr() + '>' +
					view.buildGotoAnchorHtml( // aside from link, important for matchCellWidths
						{ date: weekStart, type: 'week', forceOff: this.colCnt > 1 },
						htmlEscape(weekText) // inner HTML
					) +
				'</th>';
		}
		else {
			return '<th class="fc-axis ' + calendar.theme.getClass('widgetHeader') + '" ' + view.axisStyleAttr() + '></th>';
		}
	},


	// Generates the HTML that goes before the bg of the TimeGrid slot area. Long vertical column.
	renderBgIntroHtml: function() {
		var view = this.view;

		return '<td class="fc-axis ' + view.calendar.theme.getClass('widgetContent') + '" ' + view.axisStyleAttr() + '></td>';
	},


	// Generates the HTML that goes before all other types of cells.
	// Affects content-skeleton, helper-skeleton, highlight-skeleton for both the time-grid and day-grid.
	renderIntroHtml: function() {
		var view = this.view;

		return '<td class="fc-axis" ' + view.axisStyleAttr() + '></td>';
	}

};


// Methods that will customize the rendering behavior of the AgendaView's dayGrid
var agendaDayGridMethods = {


	// Generates the HTML that goes before the all-day cells
	renderBgIntroHtml: function() {
		var view = this.view;

		return '' +
			'<td class="fc-axis ' + view.calendar.theme.getClass('widgetContent') + '" ' + view.axisStyleAttr() + '>' +
				'<span>' + // needed for matchCellWidths
					view.getAllDayHtml() +
				'</span>' +
			'</td>';
	},


	// Generates the HTML that goes before all other types of cells.
	// Affects content-skeleton, helper-skeleton, highlight-skeleton for both the time-grid and day-grid.
	renderIntroHtml: function() {
		var view = this.view;

		return '<td class="fc-axis" ' + view.axisStyleAttr() + '></td>';
	}

};


function groupEventFootprintsByAllDay(eventFootprints) {
	var allDay = [];
	var timed = [];
	var i;

	for (i = 0; i < eventFootprints.length; i++) {
		if (eventFootprints[i].componentFootprint.isAllDay) {
			allDay.push(eventFootprints[i]);
		}
		else {
			timed.push(eventFootprints[i]);
		}
	}

	return { allDay: allDay, timed: timed };
}

;;

var AGENDA_ALL_DAY_EVENT_LIMIT = 5;

// potential nice values for the slot-duration and interval-duration
// from largest to smallest
var AGENDA_STOCK_SUB_DURATIONS = [
	{ hours: 1 },
	{ minutes: 30 },
	{ minutes: 15 },
	{ seconds: 30 },
	{ seconds: 15 }
];

fcViews.agenda = {
	'class': AgendaView,
	defaults: {
		allDaySlot: true,
		slotDuration: '00:30:00',
		slotEventOverlap: true // a bad name. confused with overlap/constraint system
	}
};

fcViews.agendaDay = {
	type: 'agenda',
	duration: { days: 1 }
};

fcViews.agendaWeek = {
	type: 'agenda',
	duration: { weeks: 1 }
};
;;

/*
Responsible for the scroller, and forwarding event-related actions into the "grid".
*/
var ListView = FC.ListView = View.extend({

	segSelector: '.fc-list-item', // which elements accept event actions
	//eventRendererClass is below
	//eventPointingClass is below

	scroller: null,
	contentEl: null,

	dayDates: null, // localized ambig-time moment array
	dayRanges: null, // UnzonedRange[], of start-end of each day


	constructor: function() {
		View.apply(this, arguments);

		this.scroller = new Scroller({
			overflowX: 'hidden',
			overflowY: 'auto'
		});
	},


	renderSkeleton: function() {
		this.el.addClass(
			'fc-list-view ' +
			this.calendar.theme.getClass('listView')
		);

		this.scroller.render();
		this.scroller.el.appendTo(this.el);

		this.contentEl = this.scroller.scrollEl; // shortcut
	},


	unrenderSkeleton: function() {
		this.scroller.destroy(); // will remove the Grid too
	},


	updateSize: function(totalHeight, isAuto, isResize) {
		this.scroller.setHeight(this.computeScrollerHeight(totalHeight));
	},


	computeScrollerHeight: function(totalHeight) {
		return totalHeight -
			subtractInnerElHeight(this.el, this.scroller.el); // everything that's NOT the scroller
	},


	renderDates: function(dateProfile) {
		var calendar = this.calendar;
		var dayStart = calendar.msToUtcMoment(dateProfile.renderUnzonedRange.startMs, true);
		var viewEnd = calendar.msToUtcMoment(dateProfile.renderUnzonedRange.endMs, true);
		var dayDates = [];
		var dayRanges = [];

		while (dayStart < viewEnd) {

			dayDates.push(dayStart.clone());

			dayRanges.push(new UnzonedRange(
				dayStart,
				dayStart.clone().add(1, 'day')
			));

			dayStart.add(1, 'day');
		}

		this.dayDates = dayDates;
		this.dayRanges = dayRanges;

		// all real rendering happens in EventRenderer
	},


	// slices by day
	componentFootprintToSegs: function(footprint) {
		var dayRanges = this.dayRanges;
		var dayIndex;
		var segRange;
		var seg;
		var segs = [];

		for (dayIndex = 0; dayIndex < dayRanges.length; dayIndex++) {
			segRange = footprint.unzonedRange.intersect(dayRanges[dayIndex]);

			if (segRange) {
				seg = {
					startMs: segRange.startMs,
					endMs: segRange.endMs,
					isStart: segRange.isStart,
					isEnd: segRange.isEnd,
					dayIndex: dayIndex
				};

				segs.push(seg);

				// detect when footprint won't go fully into the next day,
				// and mutate the latest seg to the be the end.
				if (
					!seg.isEnd && !footprint.isAllDay &&
					dayIndex + 1 < dayRanges.length &&
					footprint.unzonedRange.endMs < dayRanges[dayIndex + 1].startMs + this.nextDayThreshold
				) {
					seg.endMs = footprint.unzonedRange.endMs;
					seg.isEnd = true;
					break;
				}
			}
		}

		return segs;
	},


	eventRendererClass: EventRenderer.extend({


		renderFgSegs: function(segs) {
			if (!segs.length) {
				this.component.renderEmptyMessage();
			}
			else {
				this.component.renderSegList(segs);
			}
		},


		// generates the HTML for a single event row
		fgSegHtml: function(seg) {
			var view = this.view;
			var calendar = view.calendar;
			var theme = calendar.theme;
			var eventFootprint = seg.footprint;
			var eventDef = eventFootprint.eventDef;
			var componentFootprint = eventFootprint.componentFootprint;
			var url = eventDef.url;
			var classes = [ 'fc-list-item' ].concat(this.getClasses(eventDef));
			var bgColor = this.getBgColor(eventDef);
			var timeHtml;

			if (componentFootprint.isAllDay) {
				timeHtml = view.getAllDayHtml();
			}
			// if the event appears to span more than one day
			else if (view.isMultiDayRange(componentFootprint.unzonedRange)) {
				if (seg.isStart || seg.isEnd) { // outer segment that probably lasts part of the day
					timeHtml = htmlEscape(this._getTimeText(
						calendar.msToMoment(seg.startMs),
						calendar.msToMoment(seg.endMs),
						componentFootprint.isAllDay
					));
				}
				else { // inner segment that lasts the whole day
					timeHtml = view.getAllDayHtml();
				}
			}
			else {
				// Display the normal time text for the *event's* times
				timeHtml = htmlEscape(this.getTimeText(eventFootprint));
			}

			if (url) {
				classes.push('fc-has-url');
			}

			return '<tr class="' + classes.join(' ') + '">' +
				(this.displayEventTime ?
					'<td class="fc-list-item-time ' + theme.getClass('widgetContent') + '">' +
						(timeHtml || '') +
					'</td>' :
					'') +
				'<td class="fc-list-item-marker ' + theme.getClass('widgetContent') + '">' +
					'<span class="fc-event-dot"' +
					(bgColor ?
						' style="background-color:' + bgColor + '"' :
						'') +
					'></span>' +
				'</td>' +
				'<td class="fc-list-item-title ' + theme.getClass('widgetContent') + '">' +
					'<a' + (url ? ' href="' + htmlEscape(url) + '"' : '') + '>' +
						htmlEscape(eventDef.title || '') +
					'</a>' +
				'</td>' +
			'</tr>';
		},


		// like "4:00am"
		computeEventTimeFormat: function() {
			return this.opt('mediumTimeFormat');
		}

	}),


	eventPointingClass: EventPointing.extend({

		// for events with a url, the whole <tr> should be clickable,
		// but it's impossible to wrap with an <a> tag. simulate this.
		handleClick: function(seg, ev) {
			var url;

			EventPointing.prototype.handleClick.apply(this, arguments); // super. might prevent the default action

			// not clicking on or within an <a> with an href
			if (!$(ev.target).closest('a[href]').length) {
				url = seg.footprint.eventDef.url;

				if (url && !ev.isDefaultPrevented()) { // jsEvent not cancelled in handler
					window.location.href = url; // simulate link click
				}
			}
		}

	}),


	renderEmptyMessage: function() {
		this.contentEl.html(
			'<div class="fc-list-empty-wrap2">' + // TODO: try less wraps
			'<div class="fc-list-empty-wrap1">' +
			'<div class="fc-list-empty">' +
				htmlEscape(this.opt('noEventsMessage')) +
			'</div>' +
			'</div>' +
			'</div>'
		);
	},


	// render the event segments in the view
	renderSegList: function(allSegs) {
		var segsByDay = this.groupSegsByDay(allSegs); // sparse array
		var dayIndex;
		var daySegs;
		var i;
		var tableEl = $('<table class="fc-list-table ' + this.calendar.theme.getClass('tableList') + '"><tbody/></table>');
		var tbodyEl = tableEl.find('tbody');

		for (dayIndex = 0; dayIndex < segsByDay.length; dayIndex++) {
			daySegs = segsByDay[dayIndex];

			if (daySegs) { // sparse array, so might be undefined

				// append a day header
				tbodyEl.append(this.dayHeaderHtml(this.dayDates[dayIndex]));

				this.eventRenderer.sortEventSegs(daySegs);

				for (i = 0; i < daySegs.length; i++) {
					tbodyEl.append(daySegs[i].el); // append event row
				}
			}
		}

		this.contentEl.empty().append(tableEl);
	},


	// Returns a sparse array of arrays, segs grouped by their dayIndex
	groupSegsByDay: function(segs) {
		var segsByDay = []; // sparse array
		var i, seg;

		for (i = 0; i < segs.length; i++) {
			seg = segs[i];
			(segsByDay[seg.dayIndex] || (segsByDay[seg.dayIndex] = []))
				.push(seg);
		}

		return segsByDay;
	},


	// generates the HTML for the day headers that live amongst the event rows
	dayHeaderHtml: function(dayDate) {
		var mainFormat = this.opt('listDayFormat');
		var altFormat = this.opt('listDayAltFormat');

		return '<tr class="fc-list-heading" data-date="' + dayDate.format('YYYY-MM-DD') + '">' +
			'<td class="' + this.calendar.theme.getClass('widgetHeader') + '" colspan="3">' +
				(mainFormat ?
					this.buildGotoAnchorHtml(
						dayDate,
						{ 'class': 'fc-list-heading-main' },
						htmlEscape(dayDate.format(mainFormat)) // inner HTML
					) :
					'') +
				(altFormat ?
					this.buildGotoAnchorHtml(
						dayDate,
						{ 'class': 'fc-list-heading-alt' },
						htmlEscape(dayDate.format(altFormat)) // inner HTML
					) :
					'') +
			'</td>' +
		'</tr>';
	}

});

;;

fcViews.list = {
	'class': ListView,
	buttonTextKey: 'list', // what to lookup in locale files
	defaults: {
		buttonText: 'list', // text to display for English
		listDayFormat: 'LL', // like "January 1, 2016"
		noEventsMessage: 'No events to display'
	}
};

fcViews.listDay = {
	type: 'list',
	duration: { days: 1 },
	defaults: {
		listDayFormat: 'dddd' // day-of-week is all we need. full date is probably in header
	}
};

fcViews.listWeek = {
	type: 'list',
	duration: { weeks: 1 },
	defaults: {
		listDayFormat: 'dddd', // day-of-week is more important
		listDayAltFormat: 'LL'
	}
};

fcViews.listMonth = {
	type: 'list',
	duration: { month: 1 },
	defaults: {
		listDayAltFormat: 'dddd' // day-of-week is nice-to-have
	}
};

fcViews.listYear = {
	type: 'list',
	duration: { year: 1 },
	defaults: {
		listDayAltFormat: 'dddd' // day-of-week is nice-to-have
	}
};

;;

return FC; // export for Node/CommonJS
});

/***/ }),

/***/ "./node_modules/process/browser.js":
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/FromEventObservable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FromEventObservable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_tryCatch__ = __webpack_require__("./node_modules/rxjs/_esm5/util/tryCatch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_isFunction__ = __webpack_require__("./node_modules/rxjs/_esm5/util/isFunction.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_errorObject__ = __webpack_require__("./node_modules/rxjs/_esm5/util/errorObject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Subscription__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscription.js");
/** PURE_IMPORTS_START .._Observable,.._util_tryCatch,.._util_isFunction,.._util_errorObject,.._Subscription PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};





var toString = Object.prototype.toString;
function isNodeStyleEventEmitter(sourceObj) {
    return !!sourceObj && typeof sourceObj.addListener === 'function' && typeof sourceObj.removeListener === 'function';
}
function isJQueryStyleEventEmitter(sourceObj) {
    return !!sourceObj && typeof sourceObj.on === 'function' && typeof sourceObj.off === 'function';
}
function isNodeList(sourceObj) {
    return !!sourceObj && toString.call(sourceObj) === '[object NodeList]';
}
function isHTMLCollection(sourceObj) {
    return !!sourceObj && toString.call(sourceObj) === '[object HTMLCollection]';
}
function isEventTarget(sourceObj) {
    return !!sourceObj && typeof sourceObj.addEventListener === 'function' && typeof sourceObj.removeEventListener === 'function';
}
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var FromEventObservable = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(FromEventObservable, _super);
    function FromEventObservable(sourceObj, eventName, selector, options) {
        _super.call(this);
        this.sourceObj = sourceObj;
        this.eventName = eventName;
        this.selector = selector;
        this.options = options;
    }
    /* tslint:enable:max-line-length */
    /**
     * Creates an Observable that emits events of a specific type coming from the
     * given event target.
     *
     * <span class="informal">Creates an Observable from DOM events, or Node.js
     * EventEmitter events or others.</span>
     *
     * <img src="./img/fromEvent.png" width="100%">
     *
     * `fromEvent` accepts as a first argument event target, which is an object with methods
     * for registering event handler functions. As a second argument it takes string that indicates
     * type of event we want to listen for. `fromEvent` supports selected types of event targets,
     * which are described in detail below. If your event target does not match any of the ones listed,
     * you should use {@link fromEventPattern}, which can be used on arbitrary APIs.
     * When it comes to APIs supported by `fromEvent`, their methods for adding and removing event
     * handler functions have different names, but they all accept a string describing event type
     * and function itself, which will be called whenever said event happens.
     *
     * Every time resulting Observable is subscribed, event handler function will be registered
     * to event target on given event type. When that event fires, value
     * passed as a first argument to registered function will be emitted by output Observable.
     * When Observable is unsubscribed, function will be unregistered from event target.
     *
     * Note that if event target calls registered function with more than one argument, second
     * and following arguments will not appear in resulting stream. In order to get access to them,
     * you can pass to `fromEvent` optional project function, which will be called with all arguments
     * passed to event handler. Output Observable will then emit value returned by project function,
     * instead of the usual value.
     *
     * Remember that event targets listed below are checked via duck typing. It means that
     * no matter what kind of object you have and no matter what environment you work in,
     * you can safely use `fromEvent` on that object if it exposes described methods (provided
     * of course they behave as was described above). So for example if Node.js library exposes
     * event target which has the same method names as DOM EventTarget, `fromEvent` is still
     * a good choice.
     *
     * If the API you use is more callback then event handler oriented (subscribed
     * callback function fires only once and thus there is no need to manually
     * unregister it), you should use {@link bindCallback} or {@link bindNodeCallback}
     * instead.
     *
     * `fromEvent` supports following types of event targets:
     *
     * **DOM EventTarget**
     *
     * This is an object with `addEventListener` and `removeEventListener` methods.
     *
     * In the browser, `addEventListener` accepts - apart from event type string and event
     * handler function arguments - optional third parameter, which is either an object or boolean,
     * both used for additional configuration how and when passed function will be called. When
     * `fromEvent` is used with event target of that type, you can provide this values
     * as third parameter as well.
     *
     * **Node.js EventEmitter**
     *
     * An object with `addListener` and `removeListener` methods.
     *
     * **JQuery-style event target**
     *
     * An object with `on` and `off` methods
     *
     * **DOM NodeList**
     *
     * List of DOM Nodes, returned for example by `document.querySelectorAll` or `Node.childNodes`.
     *
     * Although this collection is not event target in itself, `fromEvent` will iterate over all Nodes
     * it contains and install event handler function in every of them. When returned Observable
     * is unsubscribed, function will be removed from all Nodes.
     *
     * **DOM HtmlCollection**
     *
     * Just as in case of NodeList it is a collection of DOM nodes. Here as well event handler function is
     * installed and removed in each of elements.
     *
     *
     * @example <caption>Emits clicks happening on the DOM document</caption>
     * var clicks = Rx.Observable.fromEvent(document, 'click');
     * clicks.subscribe(x => console.log(x));
     *
     * // Results in:
     * // MouseEvent object logged to console every time a click
     * // occurs on the document.
     *
     *
     * @example <caption>Use addEventListener with capture option</caption>
     * var clicksInDocument = Rx.Observable.fromEvent(document, 'click', true); // note optional configuration parameter
     *                                                                          // which will be passed to addEventListener
     * var clicksInDiv = Rx.Observable.fromEvent(someDivInDocument, 'click');
     *
     * clicksInDocument.subscribe(() => console.log('document'));
     * clicksInDiv.subscribe(() => console.log('div'));
     *
     * // By default events bubble UP in DOM tree, so normally
     * // when we would click on div in document
     * // "div" would be logged first and then "document".
     * // Since we specified optional `capture` option, document
     * // will catch event when it goes DOWN DOM tree, so console
     * // will log "document" and then "div".
     *
     * @see {@link bindCallback}
     * @see {@link bindNodeCallback}
     * @see {@link fromEventPattern}
     *
     * @param {EventTargetLike} target The DOM EventTarget, Node.js
     * EventEmitter, JQuery-like event target, NodeList or HTMLCollection to attach the event handler to.
     * @param {string} eventName The event name of interest, being emitted by the
     * `target`.
     * @param {EventListenerOptions} [options] Options to pass through to addEventListener
     * @param {SelectorMethodSignature<T>} [selector] An optional function to
     * post-process results. It takes the arguments from the event handler and
     * should return a single value.
     * @return {Observable<T>}
     * @static true
     * @name fromEvent
     * @owner Observable
     */
    FromEventObservable.create = function (target, eventName, options, selector) {
        if (Object(__WEBPACK_IMPORTED_MODULE_2__util_isFunction__["a" /* isFunction */])(options)) {
            selector = options;
            options = undefined;
        }
        return new FromEventObservable(target, eventName, selector, options);
    };
    FromEventObservable.setupSubscription = function (sourceObj, eventName, handler, subscriber, options) {
        var unsubscribe;
        if (isNodeList(sourceObj) || isHTMLCollection(sourceObj)) {
            for (var i = 0, len = sourceObj.length; i < len; i++) {
                FromEventObservable.setupSubscription(sourceObj[i], eventName, handler, subscriber, options);
            }
        }
        else if (isEventTarget(sourceObj)) {
            var source_1 = sourceObj;
            sourceObj.addEventListener(eventName, handler, options);
            unsubscribe = function () { return source_1.removeEventListener(eventName, handler, options); };
        }
        else if (isJQueryStyleEventEmitter(sourceObj)) {
            var source_2 = sourceObj;
            sourceObj.on(eventName, handler);
            unsubscribe = function () { return source_2.off(eventName, handler); };
        }
        else if (isNodeStyleEventEmitter(sourceObj)) {
            var source_3 = sourceObj;
            sourceObj.addListener(eventName, handler);
            unsubscribe = function () { return source_3.removeListener(eventName, handler); };
        }
        else {
            throw new TypeError('Invalid event target');
        }
        subscriber.add(new __WEBPACK_IMPORTED_MODULE_4__Subscription__["a" /* Subscription */](unsubscribe));
    };
    /** @deprecated internal use only */ FromEventObservable.prototype._subscribe = function (subscriber) {
        var sourceObj = this.sourceObj;
        var eventName = this.eventName;
        var options = this.options;
        var selector = this.selector;
        var handler = selector ? function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            var result = Object(__WEBPACK_IMPORTED_MODULE_1__util_tryCatch__["a" /* tryCatch */])(selector).apply(void 0, args);
            if (result === __WEBPACK_IMPORTED_MODULE_3__util_errorObject__["a" /* errorObject */]) {
                subscriber.error(__WEBPACK_IMPORTED_MODULE_3__util_errorObject__["a" /* errorObject */].e);
            }
            else {
                subscriber.next(result);
            }
        } : function (e) { return subscriber.next(e); };
        FromEventObservable.setupSubscription(sourceObj, eventName, handler, subscriber, options);
    };
    return FromEventObservable;
}(__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */]));
//# sourceMappingURL=FromEventObservable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/fromEvent.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fromEvent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FromEventObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/FromEventObservable.js");
/** PURE_IMPORTS_START ._FromEventObservable PURE_IMPORTS_END */

var fromEvent = __WEBPACK_IMPORTED_MODULE_0__FromEventObservable__["a" /* FromEventObservable */].create;
//# sourceMappingURL=fromEvent.js.map


/***/ }),

/***/ "./node_modules/util/support/isBufferBrowser.js":
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),

/***/ "./node_modules/util/util.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__("./node_modules/util/support/isBufferBrowser.js");

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__("./node_modules/inherits/inherits_browser.js");

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js"), __webpack_require__("./node_modules/process/browser.js")))

/***/ }),

/***/ "./src/app/articulo/articulo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticuloService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_environment_environment_service__ = __webpack_require__("./src/app/shared/environment/environment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ArticuloService = /** @class */ (function () {
    function ArticuloService(_http, environmentService) {
        this._http = _http;
        this.environmentService = environmentService;
    }
    ArticuloService.prototype.gettoken = function (token) {
        var url = this.environmentService.setApiServiceWithToken('articulos', token);
        return this._http.get(url)
            .map(function (res) { return res; })
            .catch(this.handleError);
    };
    ArticuloService.prototype.handleError = function (error) {
        var errMsg;
        errMsg = error.error;
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(errMsg);
    };
    ArticuloService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4__shared_environment_environment_service__["a" /* EnvironmentService */]])
    ], ArticuloService);
    return ArticuloService;
}());



/***/ }),

/***/ "./src/app/comentarioincidente/comentarioincidente.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComentarioincidenteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_environment_environment_service__ = __webpack_require__("./src/app/shared/environment/environment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ComentarioincidenteService = /** @class */ (function () {
    function ComentarioincidenteService(_http, environmentService) {
        this._http = _http;
        this.environmentService = environmentService;
    }
    ComentarioincidenteService.prototype.get = function (page) {
        var url = this.environmentService.setApiServiceWithPageEnterprise('comentarioincidente', page);
        return this._http.get(url)
            .map(function (res) { return res; })
            .catch(this.handleError);
    };
    ComentarioincidenteService.prototype.add = function (userData) {
        var url = this.environmentService.setApiService('comentarioincidente');
        return this._http.post(url, userData)
            .map(function (res) { return res; })
            .catch(this.handleError);
    };
    ComentarioincidenteService.prototype.getById = function ($id) {
        var url = this.environmentService.setApiServiceById('comentarioincidente', $id);
        return this._http.get(url)
            .map(function (res) { return res; })
            .catch(this.handleError);
    };
    ComentarioincidenteService.prototype.getbytoken = function (page) {
        var url = this.environmentService.setApiServiceWithVars('comentarioincidente', page);
        return this._http.get(url)
            .map(function (res) { return res; })
            .catch(this.handleError);
    };
    ComentarioincidenteService.prototype.update = function (userData) {
        var url = this.environmentService.setApiServiceById('comentarioincidente', userData.id);
        return this._http.put(url, userData)
            .map(function (res) { return res; })
            .catch(this.handleError);
    };
    ComentarioincidenteService.prototype.updatecomponent = function (userData) {
        var url = this.environmentService.setApiService('comentarioincidente');
        return this._http.post(url, userData)
            .map(function (res) { return res; })
            .catch(this.handleError);
    };
    ComentarioincidenteService.prototype.delete = function ($id) {
        var url = this.environmentService.setApiServiceById('comentarioincidente', $id);
        return this._http.delete(url)
            .map(function (res) { return res; })
            .catch(this.handleError);
    };
    ComentarioincidenteService.prototype.handleError = function (error) {
        var errMsg;
        errMsg = error.error;
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(errMsg);
    };
    ComentarioincidenteService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4__shared_environment_environment_service__["a" /* EnvironmentService */]])
    ], ComentarioincidenteService);
    return ComentarioincidenteService;
}());



/***/ }),

/***/ "./src/app/directives/no-dbl-click-directive.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoDblClickDirectiveDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NoDblClickDirectiveDirective = /** @class */ (function () {
    function NoDblClickDirectiveDirective() {
    }
    NoDblClickDirectiveDirective.prototype.clickEvent = function (event) {
        event.srcElement.setAttribute('disabled', true);
        setTimeout(function () {
            event.srcElement.removeAttribute('disabled');
        }, 500);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('submit', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], NoDblClickDirectiveDirective.prototype, "clickEvent", null);
    NoDblClickDirectiveDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appNoDblClick]'
        }),
        __metadata("design:paramtypes", [])
    ], NoDblClickDirectiveDirective);
    return NoDblClickDirectiveDirective;
}());



/***/ }),

/***/ "./src/app/incidencias/incidencia-add/incidencia-add.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/incidencias/incidencia-add/incidencia-add.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Page wrapper  -->\n<!-- ============================================================== -->\n<div class=\"page-wrapper\">\n  <!-- ============================================================== -->\n  <!-- Container fluid  -->\n  <!-- ============================================================== -->\n  <div class=\"container-fluid\">\n    <!-- ============================================================== -->\n    <!-- Bread crumb and right sidebar toggle -->\n    <!-- ============================================================== -->\n\n    <!-- ============================================================== -->\n    <!-- End Bread crumb and right sidebar toggle -->\n    <!-- ============================================================== -->\n    <!-- ============================================================== -->\n    <!-- Start Page Content -->\n    <!-- ============================================================== -->\n    <!-- Row -->\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <div class=\"card\">\n          <div class=\"card-header bg-info\">\n            <h4 class=\"m-b-0 text-white\"></h4>\n          </div>\n          <div class=\"card-body\">\n            <form action=\"#\" id=\"form-id\" (ngSubmit)=\"validaradd()\" #ctrlform=\"ngForm\">\n              <div class=\"form-body\">\n                <h3 class=\"card-title\">Información Básica</h3> <small>campos con * requeridos </small>\n                <hr>\n                <div class=\"row p-t-20\">\n                  <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                      <label class=\"control-label\">Cliente *</label>\n\n\n                      <input [(ngModel)]=\"item.razonsocial\" [typeahead]=\"dataSource\" [typeaheadAsync]=\"true\" required\n                        (typeaheadLoading)=\"changeTypeaheadLoading($event)\"\n                        (typeaheadOnSelect)=\"typeaheadOnSelect($event)\" [typeaheadScrollable]=\"true\"\n                        typeaheadOptionField=\"razon_social\" [typeaheadOptionsLimit]=\"100\"\n                        [typeaheadItemTemplate]=\"clientItemTemplate\" placeholder=\"Seleccione el cliente\"\n                        class=\"form-control\" name=\"test\" autocomplete=\"off\" #ctrlcliente=\"ngModel\">\n                      <ng-template #clientItemTemplate let-model=\"item\" let-index=\"index\">\n                        <h5>{{model.razon_social}} <span class=\"text-danger\" *ngIf=\"model.bloqueado!='N'\">En Lista\n                            Negra</span></h5>\n\n                      </ng-template>\n                      <div *ngIf=\"typeaheadLoading\">Cargando..</div>\n\n                      <small class=\"form-control-feedback\"> Seleccione el cliente </small>\n                      <small class=\"text-danger\" *ngIf=\"bloqueo\"> En Lista Negra </small>\n                      <div\n                        *ngIf=\"(item.cliente_id==='0'||ctrlcliente.invalid) && (ctrlcliente.dirty || ctrlcliente.touched||validform)\"\n                        class=\"text-danger\">\n\n                        <div *ngIf=\"item.cliente_id==0||ctrlcliente.errors.required\">\n                          Cliente es requerido.\n                        </div>\n\n\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                      <label class=\"control-label\">Estación Servicio *</label>\n                      <!-- <select class=\"form-control custom-select\" [(ngModel)]=\"item.estacion_servicio_id\"\n                        name=\"ctrlestacionservicio\" (change)=\"onselectEstacionServicio($event)\"\n                        #ctrlestacionservicio=\"ngModel\" required>\n                        <option [value]=\"-1\">Seleccione</option>\n                        <option *ngFor=\"let o of estacionservicio\" [value]=\"o.id.toString()\">\n                          {{ o.name }} ({{o.zonatecnica.name}})\n\n                        </option>\n                      </select> -->\n                      <ng-select [items]=\"estacionservicio\" bindLabel=\"name\" bindValue=\"id\" [multiple]=\"false\"\n                        placeholder=\"Seleccione\" [(ngModel)]=\"item.estacion_servicio_id\"\n                        (change)=\"onselectEstacionServicio($event)\" name=\"ctrlestacionservicio\"\n                        #ctrlestacionservicio=\"ngModel\">\n                      </ng-select>\n\n                      <small class=\"form-control-feedback\"> Seleccione la Estación de Servicio </small>\n                    </div>\n                    <div\n                      *ngIf=\"(item.estacion_servicio_id===-1||ctrlestacionservicio.invalid) && (ctrlestacionservicio.dirty || ctrlestacionservicio.touched ||validform)\"\n                      class=\"text-danger\">\n\n                      <div *ngIf=\"item.estacion_servicio_id==-1||ctrlestacionservicio.errors.required\">\n                        Estación Servicio requerido.\n                      </div>\n\n\n                    </div>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                      <label class=\"control-label\">N° Referencia Cliente</label>\n\n                      <input [(ngModel)]=\"item.noreferencia\" placeholder=\"N° referencia Cliente\" class=\"form-control\"\n                        name=\"noreferencia\">\n\n                      <small class=\"form-control-feedback\"> Escriba el N° de referencia del cliente </small>\n                    </div>\n\n                  </div>\n\n                  <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                      <label class=\"control-label\">Proyecto *</label>\n\n                      <ng-select [multiple]=\"false\" placeholder=\"Seleccione Proyecto\" [items]=\"proyects\"\n                        bindLabel=\"temp_name\" [(ngModel)]=\"selectedProyectId\" (change)=\"onChangeProyect($event)\"\n                        name=\"ctrlproyecto\">\n                      </ng-select>\n\n                    </div>\n\n                    <div *ngIf=\"item.proyecto_id === '-1' && validform\" class=\"text-danger\">\n\n                      <div *ngIf=\"item.proyecto_id === '-1' || ctrlproyecto.errors.required\">\n                        Proyecto es requerido.\n                      </div>\n\n\n                    </div>\n                  </div>\n\n                </div>\n                <h3 class=\"card-title\" *ngIf=\"newcompo&& newcompo.name!=undefined\">Estación Servicio</h3>\n                <hr>\n                <div class=\"row p-t-20\" *ngIf=\"newcompo && newcompo.name!=undefined\">\n                  <table id=\"example23\" class=\"display nowrap table table-hover m-t-30  table-striped table-bordered\"\n                    cellspacing=\"0\" width=\"100%\">\n                    <thead>\n                      <tr>\n                        <th>Estación Servicio</th>\n                        <th>Zona Tecnica</th>\n                        <th>Dirección</th>\n                        <th>Teléfono</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr>\n                        <td>{{newcompo.name}}</td>\n                        <td>{{newcompo.zonatecnica.name}}</td>\n                        <td>{{newcompo.direccion}}</td>\n                        <td>{{newcompo.telefono}} </td>\n                      </tr>\n                      <tr>\n                        <td colspan=\"4\">Observaciones:<br>{{newcompo.observaciones}}<br>Archivos:<br>\n                          <ul class=\"el-info list-inline\"\n                            *ngIf=\"newcompo.archivos!=undefined&&newcompo.archivos.length>0\">\n                            <li *ngFor=\"let imgprod of newcompo.archivos;\" class=\"col-lg-3 text-truncate\"\n                              title=\"{{imgprod.nombrearchivo==null?imgprod.nombre:imgprod.nombrearchivo}}\">\n                              <a class=\"btn default btn-outline image-popup-vertical-fit\" target=\"_self\"\n                                href=\"{{apiurl+'storage/'+imgprod.nombre}}\" download=\"{{imgprod.nombre}}\">\n                                <i class=\" ti-file\"></i>{{imgprod.tiposiniestro}}-\n                                {{imgprod.nombrearchivo==null?imgprod.nombre:imgprod.nombrearchivo}}</a>\n                            </li>\n\n                          </ul>\n                        </td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n                <h3 class=\"card-title\" *ngIf=\"newcompo&& newcompo.name!=undefined\">Componentes</h3>\n                <hr>\n                <div class=\"row p-t-20\" *ngIf=\"newcompo&& newcompo.name!=undefined\">\n                  <div class=\"table-responsive\">\n                    <table id=\"example23\" class=\"display nowrap table table-hover m-t-30  table-striped table-bordered\"\n                      cellspacing=\"0\" width=\"100%\">\n                      <thead>\n                        <tr>\n                          <th>Tipo Componente</th>\n                          <th>Informacion</th>\n                          <th>Contratos</th>\n\n\n                        </tr>\n                      </thead>\n\n                      <tbody>\n                        <ng-container *ngFor=\"let row of newcompo.componentes; let i = index\">\n                          <!-- row.id && row.estado -->\n                          <tr *ngIf=\"row.id\">\n                            <td>\n                              {{row.tipocomponente.name}}<br>\n                              <p *ngIf=\"row.observacionescontrato!=''\">Observaciones:<span\n                                  [innerHTML]=\"row.observacionescontrato\"></span></p>\n                              <ul class=\"el-info\" *ngIf=\"row.archivos!=undefined&&row.archivos.length>0\">\n                                <li *ngFor=\"let imgprod of row.archivos;\" class=\"col-lg-10 text-truncate\"\n                                  title=\"{{imgprod.nombrearchivo==null?imgprod.nombre:imgprod.nombrearchivo}}\">\n                                  <a class=\"btn default btn-outline image-popup-vertical-fit\" target=\"_self\"\n                                    href=\"{{apiurl+'storage/'+imgprod.nombre}}\" download=\"{{imgprod.nombre}}\">\n                                    <i class=\" ti-file\"></i>{{imgprod.tiposiniestro}}-\n                                    {{imgprod.nombrearchivo==null?imgprod.nombre:imgprod.nombrearchivo}}</a>\n                                </li>\n\n                              </ul>\n                            </td>\n\n                            <td>\n                              <ul>\n                                <li *ngFor=\"let field of row.componentfields\">\n                                  <strong>{{field.tipocomponentfield.name}}:</strong> {{field.value}}\n                                </li>\n                              </ul>\n                            </td>\n                            <td>\n                              <ul class=\"list-group list-group-full\">\n                                <ng-container *ngFor=\"let contr of row.contratos; let j = index\">\n                                  <li class=\"list-group-item\" *ngIf=\"contr.contrato&&contr.contrato.estado==1\">\n\n                                    <div class=\"col-lg-9\" style=\"display: inline-table;\"><strong>Tipo</strong>\n                                      <span\n                                        [ngStyle]=\"{'background-color': contr.contrato.tipocontrato.color?contr.contrato.tipocontrato.color:'#ffffff'}\"\n                                        class=\"badge badge-pill \">\n                                        {{contr.contrato.tipocontrato.name}}</span> <br>\n                                      <strong>Vto</strong> {{contr.contrato.fechafin}}\n                                    </div>\n                                    <div class=\"custom-control custom-radio mr-sm-2 col-lg-3\"\n                                      style=\"display: inline; text-align: start;\">\n                                      <input class=\"custom-control-input\" id=\"checkbox{{newcompo.id}}_{{i}}_{{j}}\"\n                                        (click)=\"clickcontrato(contr,row)\" name=\"checkbox{{newcompo.id}}\" type=\"radio\"\n                                        value=\"check\">\n                                      <label class=\"custom-control-label\"\n                                        for=\"checkbox{{newcompo.id}}_{{i}}_{{j}}\"></label>\n                                    </div>\n                                  </li>\n                                </ng-container>\n\n                                <li class=\"list-group-item\" *ngIf=\"row.contratos.length==0\">\n                                  <div class=\"col-lg-9\" style=\"display: inline-table;\"> <strong>Sin\n                                      Contrato</strong><br></div>\n\n                                  <div class=\"custom-control custom-radio mr-sm-2 col-lg-3\"\n                                    style=\"display: inline; text-align: start;\">\n                                    <input class=\"custom-control-input\" id=\"checkbox{{newcompo.id}}_{{i}}_sn\"\n                                      name=\"checkbox{{newcompo.id}}\" (click)=\"clicksincontrato(row.id)\" type=\"radio\"\n                                      value=\"check\">\n                                    <label class=\"custom-control-label mb-3\"\n                                      for=\"checkbox{{newcompo.id}}_{{i}}_sn\"></label>\n                                  </div>\n                                </li>\n                              </ul>\n\n                            </td>\n\n\n                          </tr>\n\n\n                        </ng-container>\n                      </tbody>\n                    </table>\n                  </div>\n                </div>\n                <div class=\"row p-t-20\">\n                  <div class=\"col-md-12\">\n                    <div class=\"form-group\">\n                      <label class=\"control-label\">Titulo *</label>\n\n\n                      <input [(ngModel)]=\"item.titulo\" maxlength=\"250\" required placeholder=\"Escriba el titulo\"\n                        class=\"form-control\" name=\"titulo\" #ctrltitulo=\"ngModel\">\n\n                      <div *ngIf=\"(ctrltitulo.invalid) && (ctrltitulo.dirty || ctrltitulo.touched||validform)\"\n                        class=\"text-danger\">\n\n                        <div *ngIf=\"ctrltitulo.errors.required\">\n                          Titulo es requerido.\n                        </div>\n                        <div *ngIf=\"ctrltitulo.errors.maxlength\">\n                          La observación debe contener 250 caracteres.\n                        </div>\n\n\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                      <label class=\"control-label\">Actuación</label>\n                      <select class=\"form-control custom-select\" [(ngModel)]=\"item.actuacion\" name=\"actuacion\">\n                        <option value=\"-1\">Seleccione</option>\n                        <option value=\"Correctivo\">Correctivo</option>\n                        <option value=\"Preventivas\">Preventivas</option>\n                        <option value=\"Instalaciones\">Instalaciones</option>\n                        <option value=\"Obra\">Obra</option>\n                      </select>\n\n                      <small class=\"form-control-feedback\"> Seleccione la Actuación </small>\n                    </div>\n\n                  </div>\n                  <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                      <label class=\"control-label\">Prioridad *</label>\n                      <select class=\"form-control custom-select\" [(ngModel)]=\"item.categoria_incidente_id\"\n                        name=\"ctrlprioridad\" #ctrlprioridad=\"ngModel\" required>\n                        <option [value]=\"-1\">Seleccione</option>\n                        <option [value]=\"-2\" *ngIf=\"prioridades.length==0\">Sin Prioridad</option>\n                        <option *ngFor=\"let o of  prioridades \" [value]=\"o.id.toString()\">\n                          {{ o.name }} ({{o.tiemporesolucion}}-{{o.tipotiempo}})\n\n                        </option>\n                      </select>\n\n                      <small class=\"form-control-feedback\"> Seleccione la Prioridad </small>\n                    </div>\n                    <div\n                      *ngIf=\"(item.categoria_incidente_id===-1||ctrlprioridad.invalid) && (ctrlprioridad.dirty || ctrlprioridad.touched ||validform)\"\n                      class=\"text-danger\">\n\n                      <div *ngIf=\"item.categoria_incidente_id==-1||ctrlprioridad.errors.required\">\n                        La Prioridad es requerida.\n                      </div>\n\n\n                    </div>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                      <label class=\"control-label\">Siniestro</label>\n                      <div class=\"custom-control custom-checkbox mr-sm-2\">\n                        <input class=\"custom-control-input\" id=\"checkbox_pedir{{item.id}}\"\n                          name=\"checkbox_pedir{{item.id}}\" (change)=\"essiniestro($event)\" type=\"checkbox\"\n                          [checked]=\"item.siniestro\">\n                        <label class=\"custom-control-label\" for=\"checkbox_pedir{{item.id}}\"> Seleccione si es\n                          siniestro </label>\n                      </div>\n\n                    </div>\n\n                  </div>\n\n                  <div class=\"col-md-12\">\n                    <div class=\"form-group\">\n                      <label class=\"control-label\">Descripción de la incidencia *</label>\n\n                      <ckeditor [(ngModel)]=\"item.descripcion\" class=\"\" #myckeditor=\"ngModel\" required name=\"myckeditor\"\n                        maxlength=\"2500\" [config]=\"ckeConfig\" debounce=\"500\" (change)=\"onChange($event)\"\n                        #ctrlobservaciones=\"ngModel\">\n                      </ckeditor>\n\n                      <small class=\"form-control-feedback\"> Escriba la observación del Contrato\n                        {{2500-(item.descripcion==undefined?0:item.descripcion.length)}}</small>\n                    </div>\n                    <div\n                      *ngIf=\"ctrlobservaciones.invalid && (ctrlobservaciones.dirty || ctrlobservaciones.touched ||validform)\"\n                      class=\"text-danger\">\n\n                      <div *ngIf=\"ctrlobservaciones.errors.required\">\n                        La observación del Contrato es requerido.\n                      </div>\n                      <div *ngIf=\"ctrlobservaciones.errors.maxlength\">\n                        La observación debe contener 2500 caracteres.\n                      </div>\n\n\n                    </div>\n                  </div>\n                </div>\n\n                <!--/span-->\n\n                <!--/span-->\n              </div>\n\n              <div class=\"form-actions\">\n                <button type=\"submit\" class=\"btn btn-success\"> <i class=\"fa fa-check\"></i>\n                  Guardar</button>\n                <button type=\"button\" class=\"btn btn-inverse\" routerLink=\"/tipocontrato\">Cancelar</button>\n              </div>\n\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<swal #confirmplaneacionSwal title=\"Confirmar Planeación\" [backdrop]=\"true\" [allowOutsideClick]=\"false\"\n  [showCancelButton]=\"true\" [showConfirmButton]=\"true\" [cancelButtonText]=\"'Cerrar'\" [confirmButtonText]=\"'Aceptar'\"\n  (confirm)=\"add()\" showCloseButton=\"true\">\n  <div *swalPartial>\n    <form>\n      <div class=\"form-body\">\n\n        <div class=\"row p-t-20\">\n\n          <div class=\"col-md-12\">\n            <p class=\"text-center\" [innerHTML]=\"mensajePlaneacion\"></p>\n          </div>\n\n        </div>\n\n      </div>\n\n    </form>\n  </div>\n</swal>\n\n\n<!-- Row -->\n<!-- ============================================================== -->\n<!-- End PAge Content -->\n<!-- ============================================================== -->\n<!-- ============================================================== -->\n"

/***/ }),

/***/ "./src/app/incidencias/incidencia-add/incidencia-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IncidenciaAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__incidencia_service__ = __webpack_require__("./src/app/incidencias/incidencia.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__ = __webpack_require__("./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__clientes_cliente_service__ = __webpack_require__("./src/app/clientes/cliente.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_datepicker__ = __webpack_require__("./node_modules/ngx-bootstrap/datepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tipocontrato_tipocontrato_service__ = __webpack_require__("./src/app/tipocontrato/tipocontrato.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__estacionservicio_estacionservicio_service__ = __webpack_require__("./src/app/estacionservicio/estacionservicio.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__viewmodel_estacionservicio__ = __webpack_require__("./src/app/viewmodel/estacionservicio.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__toverux_ngx_sweetalert2__ = __webpack_require__("./node_modules/@toverux/ngx-sweetalert2/esm5/toverux-ngx-sweetalert2.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__viewmodel_componente_actuacion__ = __webpack_require__("./src/app/viewmodel/componente_actuacion.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__viewmodel_incidencia__ = __webpack_require__("./src/app/viewmodel/incidencia.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_can_deactivate_guard_can_deactivate_guard_service__ = __webpack_require__("./src/app/shared/can-deactivate-guard/can-deactivate-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__proyectos_proyectos_service__ = __webpack_require__("./src/app/proyectos/proyectos.service.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


















var IncidenciaAddComponent = /** @class */ (function () {
    function IncidenciaAddComponent(spinnerService, incidenciaService, router, notificationService, localDataService, clienteService, localeService, tipocontratoService, estacionservicioService, candeactivateguard, proyectosService) {
        var _this = this;
        this.spinnerService = spinnerService;
        this.incidenciaService = incidenciaService;
        this.router = router;
        this.notificationService = notificationService;
        this.localDataService = localDataService;
        this.clienteService = clienteService;
        this.localeService = localeService;
        this.tipocontratoService = tipocontratoService;
        this.estacionservicioService = estacionservicioService;
        this.candeactivateguard = candeactivateguard;
        this.proyectosService = proyectosService;
        this.name = "ng2-ckeditor";
        this.bloqueo = false;
        this.selectauto = false;
        this.observacionescontrato = "";
        this.candeactivateguard.setedit(true);
        this.localeService.use("es");
        this.dataSource = __WEBPACK_IMPORTED_MODULE_5_rxjs__["Observable"].create(function (observer) {
            // Runs on every search
            _this.clienteService.gettoken(_this.item.razonsocial).subscribe(function (value) {
                observer.next(value.data);
            });
        });
        this.apiurl = __WEBPACK_IMPORTED_MODULE_15__environments_environment__["a" /* environment */].apiUrl;
    }
    IncidenciaAddComponent.prototype.ngOnInit = function () {
        this.validform = false;
        this.ckeConfig = {
            allowedContent: false,
            extraPlugins: "divarea",
            forcePasteAsPlainText: true,
        };
        this.item = new __WEBPACK_IMPORTED_MODULE_13__viewmodel_incidencia__["a" /* Incidencia */]();
        this.item.cliente_id = "";
        this.item.estacion_servicio_id = -1;
        this.item.categoria_incidente_id = -1;
        this.item.actuacion = "-1";
        this.item.proyecto_id = "-1";
        this.cargarTipoCOntrato();
        this.cargarEstacionServicio();
        this.cargarProyectos();
        this.newcompo = new __WEBPACK_IMPORTED_MODULE_10__viewmodel_estacionservicio__["a" /* estacionservicio */]();
        this.prioridades = [];
        /*  this.ctrlform.form.valueChanges.subscribe(data => {
           console.log("suscribed", this.ctrlform.form.get("ctrlproyecto"));
           this.item.proyecto_id = this.ctrlform.form.get("ctrlproyecto").value;
           this.ctrlform.form.controls["ctrlproyecto"].updateValueAndValidity(); // update value and validity.
         }); */
    };
    IncidenciaAddComponent.prototype.onChange = function ($event) {
        console.log("onChange");
    };
    IncidenciaAddComponent.prototype.cargarTipoCOntrato = function () {
        var _this = this;
        this.tipocontratoService.get(1).subscribe(function (value) {
            _this.tipocontrato = value.data;
        });
    };
    IncidenciaAddComponent.prototype.cargarEstacionServicio = function () {
        return __awaiter(this, void 0, void 0, function () {
            var empresa, subEst, res, prEst;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        empresa = 0;
                        this.spinnerService.show();
                        empresa = this.localDataService.getLocalData("empresaSeleccionada").id;
                        subEst = this.estacionservicioService
                            .getactbycliente(empresa, this.item.cliente_id)
                            .toPromise();
                        return [4 /*yield*/, Promise.all([subEst])];
                    case 1:
                        res = _a.sent();
                        prEst = res[0];
                        if (prEst != undefined) {
                            this.estacionservicio = prEst.data;
                            this.spinnerService.hide();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    IncidenciaAddComponent.prototype.onselectEstacionServicio = function (estacionserviciosel) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var busRazon, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.item.razonsocial = "";
                        this.item.cliente_id = "";
                        console.log({ estacionserviciosel: estacionserviciosel });
                        if (!(estacionserviciosel.id != "-1")) return [3 /*break*/, 4];
                        busRazon = false;
                        if ((this.item.razonsocial == "" || this.item.razonsocial == undefined) &&
                            (this.item.cliente_id == undefined || this.item.cliente_id == "")) {
                            busRazon = true;
                        }
                        result = this.estacionservicio.filter(function (comp) { return comp.id.toString() == estacionserviciosel.id; });
                        if (!(result.length > 0)) return [3 /*break*/, 3];
                        this.item.cliente_id = result[0].codigo_cliente;
                        if (!(result[0].componentes != null)) return [3 /*break*/, 2];
                        if (!(result[0].componentes.length == 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.cargarEstacionServicio()];
                    case 1:
                        _a.sent();
                        result = this.estacionservicio.filter(function (comp) { return comp.id.toString() == estacionserviciosel.id; });
                        _a.label = 2;
                    case 2:
                        this.cargarProyectos();
                        this.newcompo = result[0];
                        _a.label = 3;
                    case 3:
                        console.log({ busRazon: busRazon });
                        if (busRazon) {
                            this.spinnerService.show();
                            this.clienteService
                                .gettoken(this.newcompo.razon_social)
                                .subscribe(function (value) {
                                if (value.data.length > 0) {
                                    if (value.data[0].bloqueado != "N") {
                                        _this.bloqueo = true;
                                    }
                                    else {
                                        _this.bloqueo = false;
                                    }
                                    _this.item.razonsocial = _this.newcompo.razon_social;
                                    _this.item.cliente_id = _this.newcompo.codigo_cliente;
                                }
                                // this.spinnerService.hide();
                            }, function (e) {
                                console.log("Error", e);
                            }, function () {
                                console.log("finally");
                                _this.spinnerService.hide();
                            });
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        this.newcompo = new __WEBPACK_IMPORTED_MODULE_10__viewmodel_estacionservicio__["a" /* estacionservicio */]();
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    IncidenciaAddComponent.prototype.onselecttipocontrato = function (tipocontratovalue) {
        var result;
        result = this.tipocontrato.filter(function (comp) { return comp.id.toString() == tipocontratovalue.target.value; });
        if (result.length > 0) {
            this.tipocontratosel = result[0];
        }
    };
    IncidenciaAddComponent.prototype.validaradd = function () {
        this.validform = false;
        if (this.ctrlform.form.valid == false) {
            this.validform = true;
            return false;
        }
        if (this.item.proyecto_id == "-1") {
            this.validform = true;
            return false;
        }
        if (this.item.contrato_componente_id == undefined) {
            this.mensajePlaneacion = "Desea guardar el incidente sin contrato?";
        }
        else {
            this.mensajePlaneacion = "Desea guardar el incidente?";
        }
        this.confirmplaneacionSwal.show();
    };
    IncidenciaAddComponent.prototype.add = function () {
        var _this = this;
        this.spinnerService.show();
        this.candeactivateguard.setedit(false);
        this.item.empresa_id = this.localDataService.getLocalData("empresaSeleccionada").id;
        this.item.usuario_id = this.localDataService.getLocalData("userInfo").id;
        this.item.estacion_servicio_id = this.newcompo.id;
        // Console
        console.log(this.item);
        this.incidenciaService.add(this.item).subscribe(function (value) {
            _this.spinnerService.hide();
            _this.notificationService.onSuccess("Incidencia agregada con exito.");
            _this.router.navigateByUrl("incidencia");
        }, function (err) {
            _this.spinnerService.hide();
            if (err.status_code == 422) {
                _this.notificationService.onError("El Contrato ya existe");
            }
            else if (err.status_code == 400) {
                _this.notificationService.onError(err.errors.message[0]);
            }
            else {
                _this.notificationService.onError("Se ha producido un error.");
            }
        });
    };
    IncidenciaAddComponent.prototype.changeTypeaheadLoading = function (e) {
        this.typeaheadLoading = e;
    };
    IncidenciaAddComponent.prototype.typeaheadOnSelect = function (e) {
        this.item.cliente_id = e.item.codigo_cliente;
        if (e.item.bloqueado != "N") {
            this.bloqueo = true;
        }
        else {
            this.bloqueo = false;
        }
        this.cargarEstacionServicio();
        this.cargarProyectos();
    };
    IncidenciaAddComponent.prototype.cargarProyectos = function () {
        var _this = this;
        this.proyectosService.getproybycliente(this.item.cliente_id).subscribe(function (res) {
            console.log(res.data, "proyectos obtenidos");
            _this.proyects = _this.formatProjects(res.data);
        }, function (err) { });
    };
    /**
     * It takes an array of objects, and returns a new array of objects, where each object has a new
     * property called temp_name, which is a concatenation of two other properties.
     * @param data - the data that is being passed to the select
     * @returns An array of objects with the same structure as the original data, but with an additional
     * property called temp_name.
     */
    IncidenciaAddComponent.prototype.formatProjects = function (data) {
        return data.map(function (item) {
            return __assign({}, data, { temp_name: item.codigo_proyecto + " | " + item.descripcion });
        });
    };
    IncidenciaAddComponent.prototype.onChangeProyect = function (selectedProyect) {
        if (selectedProyect) {
            /* console.log("Proyect exist", this.ctrlform.form.value, this.ctrlform)
            let selectedProyect: Proyect[] = this.proyects.filter(proyect_id => this.ctrlform.form.value.ctrlproyecto.toString() == proyect_id.id);
            console.log(selectedProyect, "selectedProyect");
            console.log(proyect, "proyect");
            this.ctrlform.form.controls['ctrlproyecto'].setValue(selectedProyect)
            this.item.proyecto_id = selectedProyect[0].proyecto_id;
            this.item.proyecto_description = selectedProyect[0].proyecto_description; */
            console.log(selectedProyect, "selectedProyect value");
            //this.item.proyecto_id = proyect.item.proyeto_id;
            //console.log( this.ctrlform.form.controls['ctrlproyecto'].value, this.ctrlform.form.get("ctrlproyecto"), "ctrlproyecto");
            //this.item.proyecto_id = proyect.target.value;
            console.log(selectedProyect.temp_name.split(" | ")[0]);
            var selectedProyectId = Object.values(selectedProyect).filter(function (item) {
                return item.codigo_proyecto === selectedProyect.temp_name.split(" | ")[0];
            });
            console.log(selectedProyectId, "after filter");
            /* this.item.proyecto_id = selectedProyectId[0].codigo_proyecto;
            this.item.proyecto_description = selectedProyectId[0].descripcion; */
            // this.item.proyecto_id = null;
            this.item.proyecto_id = selectedProyectId[0].codigo_proyecto;
            console.log(selectedProyectId, "selectedProyect value");
            console.log(this.item, "item");
        }
        else {
            console.log("Proyect do not exist");
            this.item.proyecto_id = "-1";
        }
    };
    IncidenciaAddComponent.prototype.selectComponent = function (comp) {
        if (comp.select) {
            comp.select = false;
        }
        else {
            comp.select = true;
        }
        return false;
    };
    IncidenciaAddComponent.prototype.modalactuacion = function (item) {
        this.componentesel = item;
        if (!this.componentesel.actuaciones) {
            this.componentesel.actuaciones = [];
        }
        this.createSwal.show();
        return false;
    };
    IncidenciaAddComponent.prototype.agregaractuacion = function () {
        this.componentesel.actuaciones.push(this.actuacionesNew);
        this.actuacionesNew = new __WEBPACK_IMPORTED_MODULE_12__viewmodel_componente_actuacion__["a" /* ComponenteActuacion */]();
        this.actuacionesNew.tipo = "-1";
    };
    IncidenciaAddComponent.prototype.onvaluechanged = function (value) {
        if (value.index === undefined || value.index === "") {
            this.actuacionesNew.dias = value.dias;
        }
        else {
            this.componentesel.actuaciones[value.index].dias = value.dias;
        }
    };
    IncidenciaAddComponent.prototype.clickcontrato = function (contrato, row) {
        this.quitarobservaciones();
        this.prioridades = contrato.contrato.tipocontrato.categoriaincidentes;
        this.item.contrato_componente_id = contrato.id;
        row.observacionescontrato = contrato.contrato.observaciones;
        row.archivos = contrato.contrato.archivos;
    };
    IncidenciaAddComponent.prototype.quitarobservaciones = function () {
        this.newcompo.componentes.forEach(function (element) {
            element.observacionescontrato = "";
            element.archivos = [];
        });
    };
    IncidenciaAddComponent.prototype.clicksincontrato = function (id) {
        this.prioridades = [];
        this.item.sincontrato = id;
        this.item.contrato_componente_id = null;
    };
    IncidenciaAddComponent.prototype.essiniestro = function (event) {
        this.item.siniestro = event.target.checked;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("myckeditor"),
        __metadata("design:type", Object)
    ], IncidenciaAddComponent.prototype, "ckeditor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("createSwal"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_11__toverux_ngx_sweetalert2__["a" /* SwalComponent */])
    ], IncidenciaAddComponent.prototype, "createSwal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("confirmplaneacionSwal"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_11__toverux_ngx_sweetalert2__["a" /* SwalComponent */])
    ], IncidenciaAddComponent.prototype, "confirmplaneacionSwal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("ctrlform"),
        __metadata("design:type", Object)
    ], IncidenciaAddComponent.prototype, "ctrlform", void 0);
    IncidenciaAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-incidencia-add",
            template: __webpack_require__("./src/app/incidencias/incidencia-add/incidencia-add.component.html"),
            styles: [__webpack_require__("./src/app/incidencias/incidencia-add/incidencia-add.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__["Ng4LoadingSpinnerService"],
            __WEBPACK_IMPORTED_MODULE_2__incidencia_service__["a" /* IncidenciaService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__shared__["k" /* NotificationService */],
            __WEBPACK_IMPORTED_MODULE_4__shared__["i" /* LocalDataService */],
            __WEBPACK_IMPORTED_MODULE_6__clientes_cliente_service__["a" /* ClienteService */],
            __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_datepicker__["b" /* BsLocaleService */],
            __WEBPACK_IMPORTED_MODULE_8__tipocontrato_tipocontrato_service__["a" /* TipocontratoService */],
            __WEBPACK_IMPORTED_MODULE_9__estacionservicio_estacionservicio_service__["a" /* EstacionservicioService */],
            __WEBPACK_IMPORTED_MODULE_14__shared_can_deactivate_guard_can_deactivate_guard_service__["a" /* Candeactivateguard */],
            __WEBPACK_IMPORTED_MODULE_16__proyectos_proyectos_service__["a" /* ProyectosService */]])
    ], IncidenciaAddComponent);
    return IncidenciaAddComponent;
}());



/***/ }),

/***/ "./src/app/incidencias/incidencia-edit-tab/incidencia-edit-tab.component.css":
/***/ (function(module, exports) {

module.exports = ".tab-pane{\n    padding-left: 30px;\n    padding-right: 30px;\n    padding-top: 40px;\n    padding-bottom: 40px;\n}\n\n.nav-item {\n    cursor: pointer;\n}"

/***/ }),

/***/ "./src/app/incidencias/incidencia-edit-tab/incidencia-edit-tab.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"incidence-detail mt-4\" *ngIf=\"incidenceDetail\" >\n<div class=\"alert alert-danger alert-rounded\" *ngIf=\"!item.usuario_asignado\">\n  El incidente no tiene usuario asignado por lo que no se pueden registrar partes de trabajo.\n  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"> <span\n      aria-hidden=\"true\">×</span> </button>\n</div>\n\n<ul class=\"nav nav-tabs\" >\n  <li class=\"nav-item\"> <a class=\"nav-link active\" data-toggle=\"tab\" id=\"tab-detail\" (click)=\"toggleNav('detail')\" role=\"tab\"> <span class=\"hidden-xs-down\">Detalles</span></a> </li>\n  <li class=\"nav-item\"> <a class=\"nav-link\" data-toggle=\"tab\" id=\"tab-planing\" (click)=\"toggleNav('planing')\" role=\"tab\"> <span class=\"hidden-xs-down\">Planificación</span></a> </li>\n  <li class=\"nav-item\"> <a class=\"nav-link\" data-toggle=\"tab\" id=\"tab-parts\" (click)=\"toggleNav('parts')\" role=\"tab\"> <span class=\"hidden-xs-down\">Partes</span></a> </li>\n  <li class=\"nav-item\"> <a class=\"nav-link\" data-toggle=\"tab\" id=\"tab-location-data\" (click)=\"toggleNav('location-data')\" role=\"tab\"> <span class=\"hidden-xs-down\">Datos Ubicación</span></a> </li>\n  <li class=\"nav-item\"> <a class=\"nav-link\" data-toggle=\"tab\" id=\"tab-components\" (click)=\"toggleNav('components')\" role=\"tab\"> <span class=\"hidden-xs-down\">Componentes</span></a> </li>\n</ul>\n<!-- Tab panes -->\n<div class=\"tab-content tabcontent-border mb-5\">\n    <div class=\"tab-pane active\" id=\"detail\" role=\"tabpanel\">\n        <div class=\"row\">\n          <div class=\"col-md-4\">\n            <div class=\"form-group\">\n              <label class=\"control-label\">Siniestro</label>\n              <div class=\"custom-control custom-checkbox mr-sm-2\">\n                <input class=\"custom-control-input\" id=\"checkbox_pedir{{item.id}}\"\n                  name=\"checkbox_pedir{{item.id}}\" (change)=\"essiniestro($event)\" type=\"checkbox\"\n                  [checked]=\"item.siniestro\">\n                <label class=\"custom-control-label\" for=\"checkbox_pedir{{item.id}}\"> Seleccione si es\n                  siniestro </label>\n              </div>\n\n            </div>\n\n          </div>\n          <div class=\"col-md-4\">\n            <div class=\"form-group\">\n              <label class=\"control-label\">Actuación</label>\n              <select class=\"form-control custom-select\" [disabled]=\"edit\" [(ngModel)]=\"item.actuacion\"\n                name=\"ctrlactuacion\">\n                <option value=\"-1\">Seleccione</option>\n                <option value=\"Correctivo\">Correctivo</option>\n                <option value=\"Preventivas\">Preventivas</option>\n                <option value=\"Instalaciones\">Instalaciones</option>\n                <option value=\"Obra\">Obra</option>\n              </select>\n\n              <small class=\"form-control-feedback\"> Seleccione la Actuación </small> </div>\n\n          </div>\n          <div class=\"col-md-4\">\n            <div class=\"form-group\">\n              <label class=\"control-label\">Prioridad *</label>\n              <select class=\"form-control custom-select\" [(ngModel)]=\"item.categoria_incidente_id\"\n                name=\"ctrlprioridad\" #ctrlprioridad=\"ngModel\" required>\n                <option [value]=\"-1\">Seleccione</option>\n                <option [value]=\"-2\" *ngIf=\"prioridades.length==0\">Sin Prioridad</option>\n                <option *ngFor=\"let o of  prioridades \" [value]=\"o.id.toString()\">\n                  {{ o.name }} ({{o.tiemporesolucion}}-{{o.tipotiempo}})\n\n                </option>\n              </select>\n\n              <small class=\"form-control-feedback\"> Seleccione la Prioridad </small> </div>\n            <div\n              *ngIf=\"(item.categoria_incidente_id===-1||ctrlprioridad.invalid) && (ctrlprioridad.dirty || ctrlprioridad.touched ||validform)\"\n              class=\"text-danger\">\n\n              <div *ngIf=\"item.categoria_incidente_id==-1||ctrlprioridad.errors.required\">\n                La Prioridad es requerida.\n              </div>\n\n\n            </div>\n          </div>\n          <div class=\"col-md-4\">\n            <div class=\"form-group\">\n              <label class=\"control-label\">Cliente *</label>\n\n\n              <input [(ngModel)]=\"item.razonsocial\" [disabled]=\"edit\" [typeahead]=\"dataSource\"\n                [typeaheadAsync]=\"true\" required (typeaheadLoading)=\"changeTypeaheadLoading($event)\"\n                (typeaheadOnSelect)=\"typeaheadOnSelect($event)\" [typeaheadScrollable]=\"true\"\n                typeaheadOptionField=\"razon_social\" [typeaheadOptionsLimit]=\"100\"\n                placeholder=\"Seleccione el cliente\" class=\"form-control\" name=\"test\" autocomplete=\"off\"\n                #ctrlcliente=\"ngModel\">\n              <div *ngIf=\"typeaheadLoading\">Cargando..</div>\n\n              <small class=\"form-control-feedback\"> Seleccione el cliente </small>\n              <div\n                *ngIf=\"(item.cliente_id==='0'||ctrlcliente.invalid) && (ctrlcliente.dirty || ctrlcliente.touched ||validform)\"\n                class=\"text-danger\">\n\n                <div *ngIf=\"item.cliente_id==0||ctrlcliente.errors.required\">\n                  Cliente es requerido es requerido.\n                </div>\n\n\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-4\">\n            <div class=\"form-group\">\n              <label class=\"control-label\">Estacion Servicio</label>\n              <select class=\"form-control custom-select\" [disabled]=\"edit\"\n                [(ngModel)]=\"item.estacion_servicio_id\" name=\"ctrlestacionservicio\"\n                (change)=\"onselectEstacionServicio($event)\" #ctrlestacionservicio=\"ngModel\" required>\n                <option [value]=\"-1\">Seleccione</option>\n                <option *ngFor=\"let o of estacionservicio\" [value]=\"o.id.toString()\">\n                  {{ o.name }} ({{o.zonatecnica.name}})\n\n                </option>\n              </select>\n\n              <small class=\"form-control-feedback\"> Seleccione la Estacion de Servicio </small> </div>\n            <div\n              *ngIf=\"(item.estacion_servicio_id===-1||ctrlestacionservicio.invalid) && (ctrlestacionservicio.dirty || ctrlestacionservicio.touched ||validform)\"\n              class=\"text-danger\">\n\n              <div *ngIf=\"item.estacion_servicio_id==-1||ctrlestacionservicio.errors.required\">\n                Estacion Servicio requerido.\n              </div>\n\n\n            </div>\n          </div>\n          <div class=\"col-md-4\">\n            <div class=\"form-group\">\n              <label class=\"control-label\">N° Referencia Cliente</label>\n\n              <input [(ngModel)]=\"item.noreferencia\" placeholder=\"N° referencia Cliente\"\n                class=\"form-control\" name=\"noreferencia\">\n\n              <small class=\"form-control-feedback\"> Escriba el N° de referencia del cliente </small> </div>\n\n          </div>\n          <div class=\"col-md-4\">\n            <div class=\"form-group\">\n              <label class=\"control-label\">Proyecto *</label>\n              <ng-select [multiple]=\"false\"\n                placeholder=\"Seleccione Proyecto\" [(ngModel)]=\"selectProyect\"  (change)=\"onselectEstacionServicio($event)\"\n                 name=\"ctrlproyecto\" [disabled]=\"esTecnico()\" #ctrlproyecto=\"ngModel\">\n                 <ng-option *ngFor=\"let p of proyects\" [value]=\"p\">{{ p.codigo_proyecto }} | {{ p.descripcion }}</ng-option>\n              </ng-select>\n              <div\n                *ngIf=\"(selectProyect ===-1||ctrlproyecto.invalid) && (ctrlproyecto.dirty || ctrlproyecto.touched ||validform)\"\n                class=\"text-danger\">\n\n                <div *ngIf=\"selectProyect ==-1||ctrlproyecto.errors.required\">\n                  Proyecto requerido.\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-12\">\n            <div class=\"form-group\">\n              <label class=\"control-label\">Descripción de la incidencia *</label>\n\n              <ckeditor [(ngModel)]=\"item.descripcion\" [readonly]=\"edit\" #myckeditordesc=\"ngModel\"\n                name=\"myckeditor\" [config]=\"ckeConfigdesc\" debounce=\"500\" (change)=\"onChange($event)\"\n                #ctrlobservaciones=\"ngModel\" maxlength=\"2500\" required>\n              </ckeditor>\n\n              <small class=\"form-control-feedback\"> Escriba el la observacion del Contrato {{2500-(item.descripcion==undefined?0:item.descripcion.length)}}</small>\n            </div>\n            <div\n              *ngIf=\"ctrlobservaciones.invalid && (ctrlobservaciones.dirty || ctrlobservaciones.touched ||validform)\"\n              class=\"text-danger\">\n\n              <div *ngIf=\"ctrlobservaciones.errors.required\">\n                La observacion del Contrato es requerido.\n              </div>\n              <div *ngIf=\"ctrlobservaciones.errors.maxlength\">\n                La observación debe contener 2500 caracteres.\n              </div>\n\n\n            </div>\n          </div>\n        </div>\n    </div>\n    <div class=\"tab-pane  p-20\" id=\"planing\" role=\"tabpanel\">\n      <form autocomplete=\"off\" class=\"row\" style=\"margin-bottom: 20px;\">\n            <div class=\"col\">\n              <label for=\"ctrltecnico\" class=\" mr-2\">Tecnico</label>\n                <select class=\"form-control  mr-sm-2 custom-select\" placeholder=\" Escriba la hora\"\n                  [(ngModel)]=\"item.usuario_asignado_id\" name=\"ctrltecnico\" #ctrltecnico=\"ngModel\"\n                  id=\"ctrltecnico\">\n\n\n                  <option *ngFor=\"let usr of usuariostec\" [value]=\"usr.id.toString()\">\n                    {{ usr.name }}\n\n                  </option>\n                </select>\n            </div>\n            <div class=\"col\">\n                <label for=\"ctrl_fecha\" class=\" mr-2\">Fecha</label>\n                <input type=\"text\" id=\"ctrl_fecha{{i}}\" class=\"form-control \"\n                  placeholder=\" Escriba la fecha\" [(ngModel)]=\"item.fecha_programacion\"\n                  name=\"ctrl_fecha{{i}}\" bsDatepicker [minDate]='mindate'\n                  [bsValue]=\"item.fecha_programacion\">\n            </div>\n            <div class=\"col\">\n                <label for=\"ctrl_hora\" class=\" mr-2\">Hora</label>\n                <div class=\"input-group clockpicker\" style=\"width: 120px\">\n\n                  <input type=\"text\" class=\"form-control \" #ctrlhora name=\"ctrl_hora{{i}}\"\n                    (blur)=\"item.hora_programacion=ctrlhora.value\" [(ngModel)]=\"item.hora_programacion\">\n                  <div class=\"input-group-append\" (click)=\"adclock(item)\">\n                    <span class=\"input-group-text\"><i class=\"ti-alarm-clock\"></i></span>\n                  </div>\n                </div>\n            </div>\n            <div class=\"col\">\n                <a class=\"btn btn-info btn-rounded \" (click)=\"validaAsignacionUsuario(item)\"><i\n                    class=\"ti-save\"></i></a>\n\n            </div>\n          </form>\n\n      <div class=\"inbox-center table-responsive\">\n        <table class=\"table table-hover no-wrap\" id=\"example23\">\n          <thead>\n            <tr>\n              <th>Planificacion</th>\n              <th>Tecnico</th>\n              <th>Tipo Tecnico</th>\n              <th>Fecha Planificacion</th>\n              <th>Hora</th>\n              <th>Estado</th>\n              <th></th>\n            </tr>\n          </thead>\n          <tbody>\n            <ng-container *ngFor=\"let ptrab of userIncidence; let i=index;\">\n              <tr >\n                <td>{{ ptrab.planificacion }}</td>\n                <td>{{ ptrab.tecnico }}</td>\n                <td>{{ ptrab.tipo }}</td>\n                <td>{{ ptrab.fecha }}</td>\n                <td>{{ ptrab.hora }}</td>\n                <td>{{ ptrab.estado }}</td>\n                <td> </td>\n              </tr>\n            </ng-container>\n          </tbody>\n        </table>\n      </div>\n\n      <h4>Técnicos adicionales</h4>\n      <br><br>\n      <div class=\"row\" style=\"margin-bottom: 20px;\">\n        <div class=\"col\">\n          <label for=\"ctrltecnico\" class=\" mr-2\">Tecnico</label>\n            <select class=\"form-control  mr-sm-2 custom-select\" placeholder=\" Escriba la hora\"\n              [(ngModel)]=\"tecnicoadicionalnew.id_usuario\" name=\"ctrltecnico\" #ctrltecnico=\"ngModel\"\n              id=\"ctrltecnico\">\n\n\n              <option *ngFor=\"let usr of usuariostec\" [value]=\"usr.id.toString()\">\n                {{ usr.name }}\n\n              </option>\n            </select>\n        </div>\n        <div class=\"col\">\n            <label for=\"ctrl_fecha\" class=\" mr-2\">Observaciones</label>\n            <textarea class=\"form-control\" [(ngModel)]=\"tecnicoadicionalnew.observaciones\" name=\"txtobservaciontec\"></textarea>\n        </div>\n        <div class=\"col\">\n            <a class=\"btn btn-info btn-rounded \" (click)=\"agregartecnicoadicional()\"><i\n                class=\"ti-save\"></i></a>\n\n        </div>\n      </div>\n\n      <div class=\"inbox-center table-responsive\">\n        <table class=\"table table-hover no-wrap\" id=\"example23\">\n          <thead>\n            <tr>\n              <th>Nombre técnico</th>\n              <th>Observaciones</th>\n              <th></th>\n            </tr>\n          </thead>\n          <tbody>\n            <ng-container *ngFor=\"let row of item.tecnicosadicionales; let i=index;\">\n              <tr>\n                <td>\n                  {{row.usuario.name}}\n                </td>\n                <td>\n                  {{row.observaciones}}\n                </td>\n                <td>\n                  <a class=\"preview\" *ngIf=\"item.estado=='PDA'||item.estado=='PLA'\" href=\"#\"\n                    [swal]=\"deletetecSwal\"> <i class=\"icon-trash\"></i></a>\n                  <swal #deletetecSwal title=\"Eliminar Tecnico adicional\"\n                    text=\"Esta acción no se puede modificar.\" type=\"question\" [showCancelButton]=\"true\"\n                    [focusCancel]=\"true\" (confirm)=\"deleterecnico(i)\">\n                  </swal>\n                </td>\n              </tr>\n            </ng-container>\n          </tbody>\n        </table>\n      </div>\n\n    </div>\n    <div class=\"tab-pane p-20\" id=\"parts\" role=\"tabpanel\">\n      <div class=\"inbox-center table-responsive\">\n        <table class=\"table table-hover no-wrap\" id=\"example23\">\n          <thead>\n            <tr>\n              <th>Fecha</th>\n              <th>N° Parte</th>\n              <th>Tecnico</th>\n              <th>Tipo</th>\n              <th>Trabajo Realizado</th>\n              <th>Estado</th>\n              <th>Horas</th>\n              <th>Horas Desplazamiento</th>\n              <th>Km</th>\n            </tr>\n          </thead>\n          <tbody>\n            <ng-container *ngFor=\"let ptrab of item.partestrabajo; let i=index;\">\n              <tr (click)=\"verparte(ptrab)\">\n                <td>{{ptrab.created_at}}</td>\n                <td># {{ptrab.id}}</td>\n                <td>Técnico {{ptrab.usuario_respuesta.name}}</td>\n                <td>{{ptrab.tipo}}</td>\n                <td>{{ptrab.description_text}}</td>\n                <td>{{ptrab.estadorespuesta}}</td>\n                <td>{{ptrab.tiemporespuesta}}</td>\n                <td>{{ptrab.horasdistancia}}</td>\n                <td>{{ptrab.distanciareportada}}</td>\n              </tr>\n            </ng-container>\n          </tbody>\n        </table>\n      </div>\n    </div>\n    <div class=\"tab-pane p-20\" id=\"location-data\" role=\"tabpanel\">\n      <div class=\"row p-t-20\" *ngIf=\"newcompo && newcompo.name!=undefined\">\n            <div class=\"col-lg-3 col-sm-12\"><strong>Estacion Servicio</strong> <br>{{newcompo.name}}</div>\n            <div class=\"col-lg-3 col-sm-12\"><strong>Zona Tecnica</strong><br>{{newcompo.zonatecnica.name}}\n            </div>\n            <div class=\"col-lg-3 col-sm-12\"><strong>Dirección</strong> <br>{{newcompo.direccion}}</div>\n            <div class=\"col-lg-3 col-sm-12\"><strong>Telefono</strong> <br>{{newcompo.telefono}}</div>\n            <div class=\"col-lg-12 col-sm-12\"><strong>Observaciones</strong> <br>{{newcompo.observaciones}}\n            </div>\n            <div class=\"col-lg-12 col-sm-12\"><strong>Archivos</strong>\n              <br>\n              <ul class=\"el-info list-inline\"\n                *ngIf=\"newcompo.archivos!=undefined&&newcompo.archivos.length>0\">\n                <li *ngFor=\"let imgprod of newcompo.archivos;\" class=\"col-lg-3 text-truncate\"\n                  title=\"{{imgprod.nombrearchivo==null?imgprod.nombre:imgprod.nombrearchivo}}\">\n                  <a class=\"btn default btn-outline image-popup-vertical-fit\" target=\"_self\"\n                    href=\"{{apiurl+'storage/'+imgprod.nombre}}\" download=\"{{imgprod.nombre}}\">\n                    <i class=\" ti-file\"></i>{{imgprod.tiposiniestro}}-\n                    {{imgprod.nombrearchivo==null?imgprod.nombre:imgprod.nombrearchivo}}</a></li>\n\n              </ul>\n            </div>\n          </div>\n    </div>\n    <div class=\"tab-pane p-20\" id=\"components\" role=\"tabpanel\">\n      <div class=\"table-responsive\">\n        <table id=\"example23\"\n          class=\"display nowrap table table-hover m-t-30  table-striped table-bordered\" cellspacing=\"0\"\n          width=\"100%\">\n          <thead>\n            <tr>\n              <th>Tipo Componente</th>\n              <th>Informacion</th>\n              <th>Contratos</th>\n\n\n            </tr>\n          </thead>\n\n          <tbody>\n\n\n            <ng-container *ngFor=\"let row of newcompo.componentes; let i = index\">\n              <!-- row.id && row.estado -->\n              <tr *ngIf=\"row.id\">\n                <td>\n                  {{row.tipocomponente.name}}\n                  <br>\n                  <p *ngIf=\"row.observacionescontrato!=''\">Observaciones:<span\n                      [innerHTML]=\"row.observacionescontrato\"></span></p>\n                  <ul class=\"el-info\" *ngIf=\"row.archivos!=undefined&&row.archivos.length>0\">\n                    <li *ngFor=\"let imgprod of row.archivos;\" class=\"col-lg-10 text-truncate\"\n                      title=\"{{imgprod.nombrearchivo==null?imgprod.nombre:imgprod.nombrearchivo}}\">\n                      <a class=\"btn default btn-outline image-popup-vertical-fit\" target=\"_self\"\n                        href=\"{{apiurl+'storage/'+imgprod.nombre}}\" download=\"{{imgprod.nombre}}\">\n                        <i class=\" ti-file\"></i>{{imgprod.tiposiniestro}}-\n                        {{imgprod.nombrearchivo==null?imgprod.nombre:imgprod.nombrearchivo}}</a></li>\n\n                  </ul>\n                </td>\n                <td>\n                  <ul>\n                    <li *ngFor=\"let field of row.componentfields\">\n                      <strong>{{field.tipocomponentfield.name}}:</strong> {{field.value}}\n                    </li>\n                  </ul>\n                </td>\n                <td>\n                  <ul class=\"list-group list-group-full\">\n                    <li class=\"list-group-item\" *ngFor=\"let contr of row.contratos; let j = index\">\n\n                      <div class=\"col-lg-9\" style=\"display: inline-table;\"><strong>Tipo</strong>\n                        <span\n                          [ngStyle]=\"{'background-color': contr.contrato.tipocontrato.color?contr.contrato.tipocontrato.color:'#ffffff'}\"\n                          class=\"badge badge-pill \"> {{contr.contrato.tipocontrato.name}}</span><br>\n                        <strong>Vto</strong> {{contr.contrato.fechafin}}</div>\n                      <div class=\"custom-control custom-radio mr-sm-2 col-lg-3\"\n                        style=\"display: inline; text-align: start;\">\n                        <input class=\"custom-control-input\" id=\"checkbox{{newcompo.id}}_{{i}}_{{j}}\"\n                          (click)=\"clickcontrato(contr,row)\" name=\"checkbox{{newcompo.id}}\" type=\"radio\"\n                          [disabled]=\"edit\" [checked]=\"item.contrato_componente_id==contr.id\">\n\n                        <label class=\"custom-control-label\" for=\"checkbox{{newcompo.id}}_{{i}}_{{j}}\"><i\n                            *ngIf=\"edit && item.contrato_componente_id==contr.id\"\n                            class=\"fas fa-check-circle\"></i></label>\n                      </div>\n                    </li>\n                    <li class=\"list-group-item\"\n                      *ngIf=\"row.contratos==undefined||row.contratos.length==0\">\n                      <div class=\"col-lg-9\" style=\"display: inline-table;\"> <strong>Sin\n                          Contrato</strong><br></div>\n\n                      <div class=\"custom-control custom-radio mr-sm-2 col-lg-3\"\n                        style=\"display: inline; text-align: start;\">\n                        <input class=\"custom-control-input\" id=\"checkbox{{newcompo.id}}_{{i}}_sn\"\n                          name=\"checkbox{{newcompo.id}}\" type=\"radio\" value=\"check\"\n                          [checked]=\"item.sincontrato==row.id && item.contrato_componente_id==null\"\n                          [disabled]=\"edit\" (click)=\"clicksincontrato(row.id)\">\n\n                        <label class=\"custom-control-label mb-3\"\n                          for=\"checkbox{{newcompo.id}}_{{i}}_sn\"><i\n                            *ngIf=\"edit && item.sincontrato==row.id\"\n                            class=\"fas fa-check-circle\"></i></label>\n                      </div>\n                    </li>\n                  </ul>\n\n                </td>\n\n\n              </tr>\n\n\n            </ng-container>\n          </tbody>\n        </table>\n      </div>\n    </div>\n</div>\n<div class=\"text-right pb-5\">\n  <button class=\"btn btn-primary\" (click)=\"view()\">Ver Incidencia</button>\n</div>\n\n</div>\n\n<swal #partetrabajoSwal title=\"Firma Cliente\" [backdrop]=\"true\" [allowOutsideClick]=\"false\" [showCancelButton]=\"false\"\n  [showConfirmButton]=\"false\" [cancelButtonText]=\"'Cerrar'\" [confirmButtonText]=\"'Agregar'\" customClass=\"swal-wide\"\n  showCloseButton=\"true\">\n  <div *swalPartial>\n\n    <div class=\"card-body \">\n      <h4><i class=\"ti-write\"></i> Parte de trabajo <a\n          href=\"{{apiurl+'storage/respuestas/resp_'+respuestaview.id+'.pdf'}}\" download>Descargar Pdf</a></h4>\n      <form action=\"#\" class=\"row\" id=\"form-rta\">\n        <div class=\"form-group col-lg-4\">\n          <label class=\"control-label\">N° {{respuestaview.manual?'Manual':''}}</label>\n          <input type=\"text\" id=\"numerorespuesta\" class=\"form-control\" placeholder=\"numero Respuesta\"\n            [(ngModel)]=\"respuestaview.id\" name=\"numerorespuesta\">\n\n        </div>\n        <div class=\"form-group col-lg-4\">\n          <label class=\"control-label\">Técnico</label>\n          <input type=\"text\" id=\"tecnicorespuesta\" class=\"form-control\" placeholder=\"Tecnico Respuesta\"\n            [(ngModel)]=\"respuestaview.usuario_respuesta.name\" name=\"tecnicorespuesta\">\n\n        </div>\n        <div class=\"form-group col-lg-4\">\n          <label class=\"control-label\">Fecha Registro</label>\n          <input type=\"text\" id=\"fecharespuesta\" class=\"form-control\" placeholder=\"fecha Respuesta\"\n            [(ngModel)]=\"respuestaview.created_at\" name=\"fecharespuesta\">\n\n        </div>\n\n\n        <div class=\"form-group col-lg-12\">\n          <label class=\"control-label\">Parte de trabajo de la incidencia</label>\n\n          <ckeditor [(ngModel)]=\"respuestaview.descripcion\" #myckeditor=\"ngModel\" name=\"rtackeditor\"\n            [config]=\"ckeConfig\" debounce=\"500\">\n          </ckeditor>\n\n\n        </div>\n        <div class=\"form-group  col-lg-3\">\n          <label class=\"control-label\">Estado Parte de trabajo *</label>\n          <select class=\"form-control custom-select\" [(ngModel)]=\"respuestaview.estadorespuesta\"\n            name=\"ctrlestadorespuesta\" required>\n            <option value=\"\">Seleccione</option>\n            <option value=\"TE\">Terminada</option>\n            <option value=\"PM\">Pendiente por material</option>\n            <option value=\"PC\">Pendiente por restricciones de cliente.</option>\n            <option value=\"PS\">Pendiente por seguridad</option>\n          </select>\n\n\n        </div>\n        <div class=\"form-group  col-lg-3\">\n          <label class=\"control-label\">Tiempo Solución (Horas)</label>\n          <input type=\"number\" id=\"tiemporespuesta\" class=\"form-control\" placeholder=\"Tiempo Solucion\"\n            [(ngModel)]=\"respuestaview.tiemporespuesta\" name=\"tiemporespuesta\">\n\n        </div>\n        <div class=\"form-group  col-lg-3\">\n          <label class=\"control-label\">Tiempo Recorrido (Horas)</label>\n          <input type=\"number\" id=\"tiemporecorrisorespuesta\" class=\"form-control\" placeholder=\"Tiempo Solucion\"\n            [(ngModel)]=\"respuestaview.horasdistancia\" name=\"tiemporecorrisorespuesta\">\n\n        </div>\n        <div class=\"form-group  col-lg-3\">\n          <label class=\"control-label\">Distancia (Kms)</label>\n          <input type=\"number\" id=\"distanciarespuesta\" class=\"form-control\" placeholder=\"Tiempo Solucion\"\n            [(ngModel)]=\"respuestaview.distanciareportada\" name=\"distanciarespuesta\">\n\n        </div>\n\n      </form>\n    </div>\n  </div>\n</swal>\n\n<swal #confirmplaneacionSwal title=\"Confirmar Planeación\" [backdrop]=\"true\" [allowOutsideClick]=\"false\"\n[showCancelButton]=\"true\" [showConfirmButton]=\"true\" [cancelButtonText]=\"'Cerrar'\" [confirmButtonText]=\"'Aceptar'\"\n(confirm)=\"onasignarusuario()\" showCloseButton=\"true\">\n<div *swalPartial>\n  <form>\n    <div class=\"form-body\">\n\n      <div class=\"row p-t-20\">\n\n        <div class=\"col-md-12\">\n          <p class=\"text-center\" [innerHTML]=\"mensajePlaneacion\"></p>\n        </div>\n\n      </div>\n\n    </div>\n\n  </form>\n</div>\n</swal>\n\n"

/***/ }),

/***/ "./src/app/incidencias/incidencia-edit-tab/incidencia-edit-tab.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IncidenciaEditTabComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__incidencia_service__ = __webpack_require__("./src/app/incidencias/incidencia.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__ = __webpack_require__("./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__clientes_cliente_service__ = __webpack_require__("./src/app/clientes/cliente.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_datepicker__ = __webpack_require__("./node_modules/ngx-bootstrap/datepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tipocontrato_tipocontrato_service__ = __webpack_require__("./src/app/tipocontrato/tipocontrato.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__estacionservicio_estacionservicio_service__ = __webpack_require__("./src/app/estacionservicio/estacionservicio.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__viewmodel_estacionservicio__ = __webpack_require__("./src/app/viewmodel/estacionservicio.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__toverux_ngx_sweetalert2__ = __webpack_require__("./node_modules/@toverux/ngx-sweetalert2/esm5/toverux-ngx-sweetalert2.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__viewmodel_componente_actuacion__ = __webpack_require__("./src/app/viewmodel/componente_actuacion.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__viewmodel_incidencia__ = __webpack_require__("./src/app/viewmodel/incidencia.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_file_upload__ = __webpack_require__("./node_modules/ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__mocks_estadoincidente__ = __webpack_require__("./src/app/mocks/estadoincidente.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__viewmodel_respuesta__ = __webpack_require__("./src/app/viewmodel/respuesta.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__respuesta_respuestas_service__ = __webpack_require__("./src/app/respuesta/respuestas.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__articulo_articulo_service__ = __webpack_require__("./src/app/articulo/articulo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__viewmodel_MaterialRespuesta__ = __webpack_require__("./src/app/viewmodel/MaterialRespuesta.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__viewmodel_comentario_incidente__ = __webpack_require__("./src/app/viewmodel/comentario_incidente.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__comentarioincidente_comentarioincidente_service__ = __webpack_require__("./src/app/comentarioincidente/comentarioincidente.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__viewmodel_tecnicoadicional__ = __webpack_require__("./src/app/viewmodel/tecnicoadicional.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__shared_can_deactivate_guard_can_deactivate_guard_service__ = __webpack_require__("./src/app/shared/can-deactivate-guard/can-deactivate-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__archivoupload_archivoupload_service__ = __webpack_require__("./src/app/archivoupload/archivoupload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__shared_location_location_service__ = __webpack_require__("./src/app/shared/location/location.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__shared_auditoria_auditoria_service__ = __webpack_require__("./src/app/shared/auditoria/auditoria.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__proyectos_proyectos_service__ = __webpack_require__("./src/app/proyectos/proyectos.service.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};































var IncidenciaEditTabComponent = /** @class */ (function () {
    function IncidenciaEditTabComponent(spinnerService, incidenciaService, router, notificationService, localDataService, clienteService, localeService, tipocontratoService, estacionservicioService, route, respuestaService, archivouploadService, articuloService, comentarioincidenteService, candeactivateguard, locationService, auditoriaService, proyectosService) {
        var _this = this;
        this.spinnerService = spinnerService;
        this.incidenciaService = incidenciaService;
        this.router = router;
        this.notificationService = notificationService;
        this.localDataService = localDataService;
        this.clienteService = clienteService;
        this.localeService = localeService;
        this.tipocontratoService = tipocontratoService;
        this.estacionservicioService = estacionservicioService;
        this.route = route;
        this.respuestaService = respuestaService;
        this.archivouploadService = archivouploadService;
        this.articuloService = articuloService;
        this.comentarioincidenteService = comentarioincidenteService;
        this.candeactivateguard = candeactivateguard;
        this.locationService = locationService;
        this.auditoriaService = auditoriaService;
        this.proyectosService = proyectosService;
        this.showIncidenceDetail = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.uploader = new __WEBPACK_IMPORTED_MODULE_14_ng2_file_upload__["FileUploader"]({
            url: __WEBPACK_IMPORTED_MODULE_15__environments_environment__["a" /* environment */].apiUrl + "api/archivoincidencia",
            authTokenHeader: "Authorization",
            authToken: "Bearer " + localStorage.getItem("access_token"),
            isHTML5: true,
            autoUpload: true,
            maxFileSize: 5 * 1024 * 1024,
        });
        this.name = "ng2-ckeditor";
        this.currentPrioriad = null;
        this.estadoincidente = __WEBPACK_IMPORTED_MODULE_17__mocks_estadoincidente__["a" /* ESTADOINCIDENCIAS */];
        this.txterror = "";
        this.disablesave = false;
        this.usuariostec = [];
        this.tipofotosiniestro = "";
        this.istec = false;
        this.incidenceDetail = false;
        this.userIncidence = [];
        this.hasBaseDropZoneOver = false;
        this.hasAnotherDropZoneOver = false;
        this.istec = this.localDataService.getuser().perfil == 1;
        this.localeService.use("es");
        this.candeactivateguard.setedit(true);
        this.dataSource = __WEBPACK_IMPORTED_MODULE_5_rxjs__["Observable"].create(function (observer) {
            // Runs on every search
            _this.clienteService.gettoken(_this.item.razonsocial).subscribe(function (value) {
                observer.next(value.data);
            });
        });
        this.edit = true;
        this.dataSource_art = __WEBPACK_IMPORTED_MODULE_5_rxjs__["Observable"].create(function (observer) {
            // Runs on every search
            _this.articuloService.gettoken(_this.articulodesc).subscribe(function (value) {
                observer.next(value.data);
            });
        });
        this.apiurl = __WEBPACK_IMPORTED_MODULE_15__environments_environment__["a" /* environment */].apiUrl;
        this.tecnicoadicionalnew = new __WEBPACK_IMPORTED_MODULE_24__viewmodel_tecnicoadicional__["a" /* Tecnicoadicional */]();
        this.tecnicoadicionalnew.id_usuario = -1;
        this.user = this.localDataService.getLocalData("userInfo");
    }
    IncidenciaEditTabComponent.prototype.ngOnInit = function () {
        this.incnew = new __WEBPACK_IMPORTED_MODULE_13__viewmodel_incidencia__["a" /* Incidencia */]();
    };
    IncidenciaEditTabComponent.prototype.ngOnChanges = function () {
        var _this = this;
        if (this.incidenceId === undefined)
            return;
        this.ckeConfig = {
            allowedContent: false,
            extraPlugins: "divarea",
            forcePasteAsPlainText: true,
        };
        this.ckeConfigdesc = {
            allowedContent: false,
            extraPlugins: "divarea",
            forcePasteAsPlainText: true,
        };
        this.ckeConfigcom = {
            allowedContent: false,
            extraPlugins: "divarea",
            forcePasteAsPlainText: true,
            toolbar: [{ name: "basicstyles", items: ["Bold", "Italic", "Strike"] }],
        };
        this.item = new __WEBPACK_IMPORTED_MODULE_13__viewmodel_incidencia__["a" /* Incidencia */]();
        this.item.cliente_id = "";
        this.item.estacion_servicio_id = -1;
        this.item.categoria_incidente_id = -1;
        this.item.imagenes = [];
        this.cargarTipoCOntrato();
        this.cargarEstacionServicio();
        this.newcompo = new __WEBPACK_IMPORTED_MODULE_10__viewmodel_estacionservicio__["a" /* estacionservicio */]();
        this.prioridades = [];
        this.irespuesta = new __WEBPACK_IMPORTED_MODULE_18__viewmodel_respuesta__["a" /* Respuesta */]();
        this.materialnew = new __WEBPACK_IMPORTED_MODULE_21__viewmodel_MaterialRespuesta__["a" /* MaterialRespuesta */]();
        this.irespuesta.materiales = [];
        this.irespuesta.manual = false;
        this.getById();
        this.irespuesta.estadorespuesta = "";
        this.uploader.onAfterAddingFile = function (file) {
            file.withCredentials = false;
        };
        this.uploader.onErrorItem = function (item, response, status, headers) {
            return _this.onErrorItem(item, response, status, headers);
        };
        this.uploader.onSuccessItem = function (item, response, status, headers) {
            return _this.onSuccessItem(item, response, status, headers);
        };
        this.uploader.onWhenAddingFileFailed = function (fileItem) {
            _this.notificationService.onError("La imagen no se pudo cargar, " +
                "el tamaño maximo es de 5MB y el formato es png o jpg, INtentelo nuevamente");
        };
        this.comentarionew = new __WEBPACK_IMPORTED_MODULE_22__viewmodel_comentario_incidente__["a" /* ComentarioIncidente */]();
        this.showIncidenceDetail.emit(false);
        this.incidenceDetail = false;
    };
    IncidenciaEditTabComponent.prototype.onChange = function ($event) {
        console.log("onChange");
    };
    IncidenciaEditTabComponent.prototype.adclock = function (inc) {
        console.log("adclock", inc);
        if (!this.istec) {
            inc.isEditable = true;
            if (inc.fecha_programacion != undefined &&
                inc.fecha_programacion != null &&
                inc.fecha_programacion != "") {
                inc.fecha_programacion = __WEBPACK_IMPORTED_MODULE_16_moment__(inc.fecha_programacion).format("MM/DD/YYYY h:mm:ss");
            }
            $('.clockpicker').clockpicker({
                placement: 'bottom',
                align: 'left',
                autoclose: true,
                donetext: 'Aceptar',
                'default': 'now'
            }).find('input').change(function () {
                console.log(this.value);
            });
        }
    };
    IncidenciaEditTabComponent.prototype.getById = function () {
        var _this = this;
        this.userIncidence = [];
        this.spinnerService.show();
        // const $id = this.route.snapshot.paramMap.get('id');
        this.uploader.options.additionalParameter = {
            incidencia_id: this.incidenceId,
            tipofotosiniestro: this.tipofotosiniestro,
        };
        this.irespuesta.id_incidencia = this.incidenceId;
        this.incidenciaService.getById(this.incidenceId).subscribe(function (response) {
            _this.item = response.data;
            var htmltoText = function (html) {
                var text = html;
                text = text.replace(/\n/gi, "");
                text = text.replace(/<style([\s\S]*?)<\/style>/gi, "");
                text = text.replace(/<script([\s\S]*?)<\/script>/gi, "");
                text = text.replace(/<a.*?href="(.*?)[\?\"].*?>(.*?)<\/a.*?>/gi, " $2 $1 ");
                text = text.replace(/<\/div>/gi, "\n\n");
                text = text.replace(/<\/li>/gi, "\n");
                text = text.replace(/<li.*?>/gi, "  *  ");
                text = text.replace(/<\/ul>/gi, "\n\n");
                text = text.replace(/<\/p>/gi, "\n\n");
                text = text.replace(/<br\s*[\/]?>/gi, "\n");
                text = text.replace(/<[^>]+>/gi, "");
                text = text.replace(/^\s*/gim, "");
                text = text.replace(/ ,/gi, ",");
                text = text.replace(/ +/gi, " ");
                text = text.replace(/\n+/gi, "\n\n");
                return text;
            };
            var tecnicoadicionales = _this.item.tecnicosadicionales;
            _this.item.partestrabajo = _this.item.partestrabajo.map(function (p) {
                var description_text = htmltoText(p.descripcion);
                description_text =
                    description_text.length > 35
                        ? description_text.slice(35) + "..."
                        : description_text;
                var tipo = "Principal";
                var usuario_respuesta = p.usuario_respuesta;
                if (usuario_respuesta) {
                    var encontrado = tecnicoadicionales.find(function (it) { return it.id === usuario_respuesta.id; });
                    if (encontrado) {
                        tipo = "Adicional";
                    }
                }
                return __assign({}, p, { description_text: description_text, tipo: tipo });
            });
            _this.usuariostecparte = response.data.usuariostecparte;
            _this.usuariostec = response.data.usuariostec.sort(_this.compare);
            _this.item.usuario_asignado_id = response.data.usuario_asignado_id;
            _this.edit = response.data.mismo;
            if (response.data.mismo &&
                _this.item.estado != "TRA" &&
                _this.item.estado != "PTE" &&
                _this.item.estado != "CLO") {
                _this.candeactivateguard.setedit(false);
                _this.router.navigateByUrl("incidencia");
            }
            if (_this.item.tiempo && _this.item.estado == "TRA") {
                _this.irespuesta.tiemporespuesta =
                    Math.round((_this.item.tiempo / 60 / 60) * 100) / 100;
                _this.irespuesta.distanciareportada =
                    Math.round((_this.item.distanciacalculada / 1000) * 100) / 100;
                _this.irespuesta.horasdistancia =
                    Math.round((_this.item.t_deplazamiento / 60 / 60) * 100) / 100;
            }
            if (!__WEBPACK_IMPORTED_MODULE_16_moment__(_this.item.fecha_vencimiento, "DD/MM/YYYY").isValid()) {
                _this.item.fecha_vencimiento = __WEBPACK_IMPORTED_MODULE_16_moment__(_this.item.fecha_vencimiento).toDate();
            }
            _this.incidenceDetail = true;
            _this.showIncidenceDetail.emit(true);
            _this.cargarEstacionServicio();
            _this.cargarProyectos();
            if (response.data.contrato_componente != null) {
                _this.prioridades =
                    response.data.contrato_componente.contrato.tipocontrato.categoriaincidentes;
                _this.currentPrioriad = _this.prioridades.find(function (it) {
                    return it.id == _this.item.categoria_incidente_id;
                });
            }
            _this.adclock(_this.item);
            _this.spinnerService.hide();
            var _userIncidence = [];
            if (_this.item.usuario_asignado != null) {
                _userIncidence.push({
                    planificacion: "Tecnico Principal",
                    tecnico: _this.item.usuario_asignado.name,
                    tipo: "Pincipal",
                    fecha: _this.item.fecha_programacion,
                    hora: _this.item.hora_programacion,
                    estado: "",
                    principal: 1,
                });
                var estado = _this.item.estado;
                if ((estado === "PTE" || estado === "INT")) {
                    _userIncidence = [];
                }
                _this.userIncidence = _userIncidence;
            }
        });
    };
    IncidenciaEditTabComponent.prototype.cargarTipoCOntrato = function () {
        var _this = this;
        this.tipocontratoService.get(1).subscribe(function (value) {
            _this.tipocontrato = value.data;
        });
    };
    IncidenciaEditTabComponent.prototype.cargarEstacionServicio = function () {
        var _this = this;
        var empresa = 0;
        this.spinnerService.show();
        empresa = this.localDataService.getLocalData("empresaSeleccionada").id;
        this.estacionservicioService
            .getbycliente(empresa, this.item.cliente_id)
            .subscribe(function (value) {
            _this.estacionservicio = value.data;
            if (_this.item.estacion_servicio_id != -1) {
                var result = _this.estacionservicio.filter(function (comp) { return comp.id.toString() == _this.item.estacion_servicio_id; });
                if (result.length > 0) {
                    _this.newcompo = result[0];
                    _this.quitarobservaciones();
                    _this.setobservacioncontrato();
                }
            }
            else {
                _this.newcompo = new __WEBPACK_IMPORTED_MODULE_10__viewmodel_estacionservicio__["a" /* estacionservicio */]();
            }
            _this.spinnerService.hide();
        });
    };
    IncidenciaEditTabComponent.prototype.setobservacioncontrato = function () {
        var _this = this;
        this.newcompo.componentes.forEach(function (element) {
            if (element.contratos.length > 0) {
                element.contratos.forEach(function (contrato) {
                    if (contrato.id == _this.item.contrato_componente_id) {
                        element.observacionescontrato = contrato.contrato.observaciones;
                        element.archivos = contrato.contrato.archivos;
                    }
                });
            }
        });
    };
    IncidenciaEditTabComponent.prototype.onselectEstacionServicio = function (estacionserviciosel) {
        if (estacionserviciosel.target.value != "-1") {
            var result = this.estacionservicio.filter(function (comp) { return comp.id.toString() == estacionserviciosel.target.value; });
            if (result.length > 0) {
                this.newcompo = result[0];
            }
        }
        else {
            this.newcompo = new __WEBPACK_IMPORTED_MODULE_10__viewmodel_estacionservicio__["a" /* estacionservicio */]();
        }
    };
    IncidenciaEditTabComponent.prototype.onselecttipocontrato = function (tipocontratovalue) {
        var result;
        result = this.tipocontrato.filter(function (comp) { return comp.id.toString() == tipocontratovalue.target.value; });
        if (result.length > 0) {
            this.tipocontratosel = result[0];
        }
    };
    IncidenciaEditTabComponent.prototype.add = function (cierreManual) {
        var _this = this;
        this.validform = false;
        if (this.ctrlform.form.valid == false) {
            this.validform = true;
            return false;
        }
        this.disablesave = true;
        this.txterror = "";
        this.spinnerService.show();
        this.candeactivateguard.setedit(false);
        this.item.empresa_id = this.localDataService.getLocalData("empresaSeleccionada").id;
        this.item.usuario_id = this.localDataService.getLocalData("userInfo").id;
        this.item.estacion_servicio_id = this.newcompo.id;
        this.item.manual = cierreManual;
        if (this.item.fecha_programacion != undefined &&
            this.item.fecha_programacion != null &&
            this.item.fecha_programacion != "") {
            if (this.item.hora_programacion != undefined &&
                this.item.hora_programacion != null &&
                this.item.hora_programacion != "") {
                if (!__WEBPACK_IMPORTED_MODULE_16_moment__(this.item.fecha_programacion, "DD/MM/YYYY").isValid()) {
                    this.item.fecha_programacion = __WEBPACK_IMPORTED_MODULE_16_moment__(this.item.fecha_programacion).format("YYYY-MM-DD");
                }
                else {
                    this.item.fecha_programacion = __WEBPACK_IMPORTED_MODULE_16_moment__(this.item.fecha_programacion, "DD/MM/YYYY").format("YYYY-MM-DD");
                }
                this.item.fecha_programacion = __WEBPACK_IMPORTED_MODULE_16_moment__(this.item.fecha_programacion + " " + this.item.hora_programacion).format("DD-MM-YYYY HH:mm:ss");
            }
            else {
                if (!__WEBPACK_IMPORTED_MODULE_16_moment__(this.item.fecha_programacion, "DD/MM/YYYY").isValid()) {
                    this.item.fecha_programacion = __WEBPACK_IMPORTED_MODULE_16_moment__(this.item.fecha_programacion).format("YYYY-MM-DD");
                }
                else {
                    this.item.fecha_programacion = __WEBPACK_IMPORTED_MODULE_16_moment__(this.item.fecha_programacion, "DD/MM/YYYY").format("YYYY-MM-DD");
                }
                this.item.fecha_programacion = __WEBPACK_IMPORTED_MODULE_16_moment__(this.item.fecha_programacion + " " + "00:00:00").format("DD-MM-YYYY HH:mm:ss");
            }
        }
        this.incidenciaService.update(this.item).subscribe(function (value) {
            if (value.data.errorusu == 1) {
                _this.notificationService.onError("No se puede asignar el usuario por que es tecnico adicional");
            }
            else {
                _this.notificationService.onSuccess("Incidencia Actualizada con exito.");
                _this.router.navigateByUrl("incidencia");
            }
            _this.registrarauditoria("Actualizar incidente", "Guardar", _this.item.id);
            _this.spinnerService.hide();
            _this.disablesave = false;
        }, function (err) {
            _this.disablesave = false;
            _this.spinnerService.hide();
            if (err.status_code == 422) {
                _this.txterror = "El Contrato ya existe";
                _this.notificationService.onError("El Contrato ya existe");
            }
            else if (err.status_code == 400) {
                _this.txterror = err.errors.message;
                _this.notificationService.onError(err.errors.message);
            }
            else {
                _this.txterror = "Se ha producido un error.";
                _this.notificationService.onError("Se ha producido un error. <br>");
            }
        });
    };
    IncidenciaEditTabComponent.prototype.cerrarmanual = function () {
        this.cierremanualSwal.show();
        return false;
    };
    IncidenciaEditTabComponent.prototype.changeTypeaheadLoading = function (e) {
        this.typeaheadLoading = e;
    };
    IncidenciaEditTabComponent.prototype.typeaheadOnSelect = function (e) {
        this.item.cliente_id = e.item.codigo_cliente;
        this.cargarEstacionServicio();
    };
    IncidenciaEditTabComponent.prototype.changeTypeaheadLoading_art = function (e) {
        this.typeaheadLoading_art = e;
    };
    IncidenciaEditTabComponent.prototype.cargarProyectos = function () {
        var _this = this;
        this.proyectosService.getproybycliente(this.item.cliente_id).subscribe(function (res) {
            _this.proyects = res.data;
            _this.selectProyect = _this.proyects.find(function (p) { return p.codigo_proyecto === _this.item.proyecto_id; });
        }, function (err) { });
    };
    IncidenciaEditTabComponent.prototype.onChangeProyect = function (proyect) {
        if (proyect != -1) {
            this.item.proyecto_id = proyect.codigo_proyecto;
            this.item.proyecto_description = proyect.descripcion;
        }
        else {
            this.item.proyecto_id = null;
            this.item.proyecto_description = null;
        }
    };
    IncidenciaEditTabComponent.prototype.typeaheadOnSelect_art = function (e) {
        this.materialnew.nombre = e.item.descripcion;
        this.materialnew.referencia = e.item.codigo_articulo;
    };
    IncidenciaEditTabComponent.prototype.agregarmaterial = function () {
        this.irespuesta.materiales.push(this.materialnew);
        this.materialnew = new __WEBPACK_IMPORTED_MODULE_21__viewmodel_MaterialRespuesta__["a" /* MaterialRespuesta */]();
        this.articulodesc = "";
    };
    IncidenciaEditTabComponent.prototype.selectComponent = function (comp) {
        if (comp.select) {
            comp.select = false;
        }
        else {
            comp.select = true;
        }
        return false;
    };
    IncidenciaEditTabComponent.prototype.modalactuacion = function (item) {
        this.componentesel = item;
        if (!this.componentesel.actuaciones) {
            this.componentesel.actuaciones = [];
        }
        this.createSwal.show();
        return false;
    };
    IncidenciaEditTabComponent.prototype.agregaractuacion = function () {
        this.componentesel.actuaciones.push(this.actuacionesNew);
        this.actuacionesNew = new __WEBPACK_IMPORTED_MODULE_12__viewmodel_componente_actuacion__["a" /* ComponenteActuacion */]();
        this.actuacionesNew.tipo = "-1";
    };
    IncidenciaEditTabComponent.prototype.onvaluechanged = function (value) {
        if (value.index === undefined || value.index === "") {
            this.actuacionesNew.dias = value.dias;
        }
        else {
            this.componentesel.actuaciones[value.index].dias = value.dias;
        }
    };
    IncidenciaEditTabComponent.prototype.clickcontrato = function (contrato, row) {
        this.quitarobservaciones();
        this.prioridades = contrato.contrato.tipocontrato.categoriaincidentes;
        this.item.contrato_componente_id = contrato.id;
        row.observacionescontrato = contrato.contrato.observaciones;
        row.archivos = contrato.contrato.archivos;
    };
    IncidenciaEditTabComponent.prototype.quitarobservaciones = function () {
        this.newcompo.componentes.forEach(function (element) {
            element.observacionescontrato = "";
            element.archivos = [];
        });
    };
    IncidenciaEditTabComponent.prototype.getclassestadoincidencia = function (estado) {
        var result;
        result = this.estadoincidente.filter(function (estadoinc) { return estadoinc.value === estado; });
        return result.length > 0 ? result[0].label : "";
    };
    IncidenciaEditTabComponent.prototype.onErrorItem = function (item, response, status, headers) {
        var error = JSON.parse(response); //error server response
        console.log(error);
    };
    IncidenciaEditTabComponent.prototype.fileOverBase = function (e) {
        this.uploader.options.additionalParameter = {
            incidencia_id: this.irespuesta.id_incidencia,
            tipofotosiniestro: this.tipofotosiniestro,
        };
        this.hasBaseDropZoneOver = e;
    };
    IncidenciaEditTabComponent.prototype.fileOverAnother = function (e) {
        this.uploader.options.additionalParameter = {
            incidencia_id: this.irespuesta.id_incidencia,
            tipofotosiniestro: this.tipofotosiniestro,
        };
        this.hasAnotherDropZoneOver = e;
    };
    IncidenciaEditTabComponent.prototype.onSuccessItem = function (item, response, status, headers) {
        if (this.item.imagenes == undefined || this.item.imagenes == null) {
            this.item.imagenes = [];
        }
        this.item.imagenes.push($.parseJSON(response).data);
    };
    IncidenciaEditTabComponent.prototype.tooglerogthmenu = function () {
        $("body").toggleClass("rmv-right-panel");
    };
    IncidenciaEditTabComponent.prototype.guardarrespuesta = function () {
        var _this = this;
        this.validform = false;
        if (this.ctrlformrta.form.valid == false) {
            this.validform = true;
            return false;
        }
        this.disablesave = true;
        this.txterror = "";
        this.spinnerService.show();
        this.candeactivateguard.setedit(false);
        this.locationService.getCurrentPosition().subscribe(function (positiongps) {
            _this.registrarRespuesta(positiongps.coords);
        }, function (err) {
            console.log("error");
        });
    };
    IncidenciaEditTabComponent.prototype.registrarRespuesta = function (positionGps) {
        var _this = this;
        if (this.item.contrato_componente_id != undefined ||
            this.item.sincontrato != undefined) {
            this.irespuesta.latrespuesta = positionGps.latitude;
            this.irespuesta.longrespuesta = positionGps.longitude;
            if (this.irespuesta.created_at != undefined) {
                this.irespuesta.created_at = __WEBPACK_IMPORTED_MODULE_16_moment__(this.irespuesta.created_at).format("DD-MM-YYYY HH:mm:ss");
            }
            this.respuestaService.add(this.irespuesta).subscribe(function (value) {
                _this.disablesave = false;
                _this.spinnerService.hide();
                _this.registrarauditoria("respuesta", "Guardar", value.id);
                if (value.data.errorrepo == 1) {
                    _this.notificationService.onError("Existen tecnicos asociados sin terminar.");
                }
                else if (value.data.errorfotosiniestro == 1) {
                    _this.notificationService.onError("No tiene las imagenes de antes y despues del siniestro.");
                }
                else if (_this.irespuesta.manual == true) {
                    _this.irespuesta = new __WEBPACK_IMPORTED_MODULE_18__viewmodel_respuesta__["a" /* Respuesta */]();
                    _this.getById();
                    _this.notificationService.onSuccess("Respuesta agregada con exito.");
                    _this.materialnew = new __WEBPACK_IMPORTED_MODULE_21__viewmodel_MaterialRespuesta__["a" /* MaterialRespuesta */]();
                    _this.irespuesta.materiales = [];
                    _this.irespuesta.manual = false;
                }
                else {
                    _this.notificationService.onSuccess("Respuesta agregada con exito.");
                    _this.router.navigateByUrl("incidencia");
                }
            }, function (err) {
                _this.disablesave = false;
                _this.spinnerService.hide();
                if (err.status_code == 422) {
                    _this.txterror = "El Respuesta ya existe";
                    _this.notificationService.onError("El Respuesta ya existe");
                }
                else if (err.status_code == 400) {
                    _this.txterror = err.errors.message[0];
                    _this.notificationService.onError(err.errors.message[0]);
                }
                else {
                    _this.txterror = "Se ha producido un error.";
                    _this.notificationService.onError("Se ha producido un error.");
                }
            });
        }
        else {
            this.txterror =
                "Para registrar el parte de trabajo debe seleccionar un contrato.";
            this.notificationService.onError("Para registrar el parte de trabajo debe seleccionar un contrato.");
            this.spinnerService.hide();
            this.disablesave = false;
        }
    };
    IncidenciaEditTabComponent.prototype.abrirfirma = function () {
        $("#contenedorsign").css("display", "none");
        this.createSwal.show();
    };
    IncidenciaEditTabComponent.prototype.onvaluechangedfirma = function (value) {
        $("#contenedorsign").css("display", "");
        this.irespuesta.firmacliente = value;
        this.createSwal.nativeSwal.close();
    };
    IncidenciaEditTabComponent.prototype.cancelarfirma = function (value) {
        $("#contenedorsign").css("display", "");
        this.createSwal.nativeSwal.close();
    };
    IncidenciaEditTabComponent.prototype.ngAfterViewInit = function () {
        console.log("NG AFTTERR VIEW INITT");
        $(".mini-nav, .sidebar-menu, .right-side-panel, .message-center, .right-sidebar").perfectScrollbar();
        // this.adclock(this)
        $('.clockpicker').clockpicker({
            placement: 'bottom',
            align: 'left',
            autoclose: true,
            donetext: 'Aceptar',
            'default': 'now'
        }).find('input').change(function () {
            console.log(this.value);
        });
    };
    IncidenciaEditTabComponent.prototype.FieldsChange = function (values) {
        this.materialnew.pedido = values.currentTarget.checked;
    };
    IncidenciaEditTabComponent.prototype.ocultarmenu = function () {
        $("body").toggleClass("rmv-right-panel");
    };
    IncidenciaEditTabComponent.prototype.addcomentario = function () {
        var _this = this;
        if (this.item.comentarios == undefined) {
            this.item.comentarios = [];
        }
        this.comentarionew.id_incidencia = this.item.id;
        this.comentarioincidenteService.add(this.comentarionew).subscribe(function (value) {
            _this.item.comentarios.push(value.data);
            _this.comentarionew = new __WEBPACK_IMPORTED_MODULE_22__viewmodel_comentario_incidente__["a" /* ComentarioIncidente */]();
            _this.notificationService.onSuccess("Comentario agregado con exito.");
        }, function (err) {
            _this.spinnerService.hide();
            if (err.status_code == 422) {
                _this.notificationService.onError("Comentario ya existe");
            }
            else {
                _this.notificationService.onError("Se ha producido un error.");
            }
        });
    };
    IncidenciaEditTabComponent.prototype.calculardias = function (fecha) {
        var actual = __WEBPACK_IMPORTED_MODULE_16_moment__();
        fecha = __WEBPACK_IMPORTED_MODULE_16_moment__(fecha);
        var diff = actual.diff(fecha, "days");
        return diff;
    };
    IncidenciaEditTabComponent.prototype.verparte = function (ptrab) {
        this.respuestaview = ptrab;
        this.partetrabajoSwal.show();
        return false;
    };
    IncidenciaEditTabComponent.prototype.agregartecnicoadicional = function () {
        var _this = this;
        if (this.tecnicoadicionalnew.id_usuario != -1) {
            if (this.item.tecnicosadicionales == undefined) {
                this.item.tecnicosadicionales = [];
            }
            var resul = this.usuariostec.filter(function (tec) { return tec.id == _this.tecnicoadicionalnew.id_usuario; });
            resul[0].selected = true;
            this.tecnicoadicionalnew.usuario = resul[0];
            this.tecnicoadicionalnew.observaciones = this.tecnicoadicionalnew
                .observaciones
                ? this.tecnicoadicionalnew.observaciones
                : "N/A";
            this.item.tecnicosadicionales.push(this.tecnicoadicionalnew);
            this.tecnicoadicionalnew = new __WEBPACK_IMPORTED_MODULE_24__viewmodel_tecnicoadicional__["a" /* Tecnicoadicional */]();
            this.tecnicoadicionalnew.id_usuario = -1;
            this.actualizarincidenye(this.item);
        }
    };
    IncidenciaEditTabComponent.prototype.clicksincontrato = function (id) {
        this.prioridades = [];
        this.item.sincontrato = id;
        this.item.contrato_componente_id = null;
    };
    IncidenciaEditTabComponent.prototype.essiniestro = function (event) {
        this.item.siniestro = event.target.checked;
    };
    IncidenciaEditTabComponent.prototype.deleterecnico = function (i) {
        this.item.tecnicosadicionales.splice(i, 1);
        this.actualizarincidenye(this.item);
    };
    IncidenciaEditTabComponent.prototype.selecttipofoto = function () {
        this.uploader.options.additionalParameter = {
            incidencia_id: this.irespuesta.id_incidencia,
            tipofotosiniestro: this.tipofotosiniestro,
        };
    };
    IncidenciaEditTabComponent.prototype.eliminar_imagen = function (imagen) {
        var _this = this;
        this.archivouploadService.delete(imagen.id, 1).subscribe(function (value) {
            var indice = _this.item.imagenes.indexOf(imagen);
            _this.item.imagenes.splice(indice, 1);
            _this.notificationService.onSuccess("Imagen eliminada con exito.");
        });
    };
    IncidenciaEditTabComponent.prototype.registrarauditoria = function (campo, accion, desc) {
        var opcion = this.router.url;
        this.auditoriaService
            .add({
            id_incidencia: this.item.id,
            acccion: accion,
            campo: campo,
            opcion: opcion,
            descripcion: desc,
        })
            .subscribe(function (value) {
            console.log("auditoria almacenada");
        });
    };
    IncidenciaEditTabComponent.prototype.gpsuser = function () {
        var _this = this;
        this.spinnerService.show();
        if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.geolocationPosition = position;
            }, function (error) {
                switch (error.code) {
                    case 1:
                        alert("Permission Denied To Gps");
                        break;
                    case 2:
                        alert("Position Unavailable To Gps");
                        break;
                    case 3:
                        alert("Timeout To Gps");
                        break;
                }
            });
        }
    };
    IncidenciaEditTabComponent.prototype.view = function () {
        this.router.navigate(["incidencia/edit/" + this.incidenceId]);
    };
    IncidenciaEditTabComponent.prototype.validaAsignacionUsuario = function (inc) {
        this.incnew = inc;
        var vencimiento, planeado, diferencia;
        vencimiento = __WEBPACK_IMPORTED_MODULE_16_moment__(inc.fecha_vencimiento, "DD-MM-YYYY HH:mm:ss");
        planeado = __WEBPACK_IMPORTED_MODULE_16_moment__(inc.fecha_programacion, "DD-MM-YYYY HH:mm:ss");
        diferencia = planeado.diff(vencimiento);
        console.log("diferencia" + diferencia);
        if (diferencia < 0) {
            this.mensajePlaneacion =
                "Desea planear la incidencia?. <br>La fecha de planeación esta fuera de plazo.";
        }
        else {
            this.mensajePlaneacion = "Desea planear la incidencia?.";
        }
        this.confirmplaneacionSwal.show();
    };
    IncidenciaEditTabComponent.prototype.onasignarusuario = function () {
        this.incnew.estado = "PLA";
        if (this.incnew.usuario_asignado_id) {
            this.incnew.user_imbox_id = this.incnew.usuario_asignado_id;
        }
        this.actualizarincidenye(this.incnew);
    };
    IncidenciaEditTabComponent.prototype.actualizarincidenye = function (inc) {
        var _this = this;
        var fectem = inc.fecha_programacion;
        if (inc.fecha_programacion != undefined &&
            inc.fecha_programacion != null &&
            inc.fecha_programacion != "") {
            if (inc.hora_programacion != undefined &&
                inc.hora_programacion != null &&
                inc.hora_programacion != "") {
                if (!__WEBPACK_IMPORTED_MODULE_16_moment__(inc.fecha_programacion, "DD/MM/YYYY").isValid()) {
                    inc.fecha_programacion = __WEBPACK_IMPORTED_MODULE_16_moment__(inc.fecha_programacion).format("YYYY-MM-DD");
                }
                else {
                    inc.fecha_programacion = __WEBPACK_IMPORTED_MODULE_16_moment__(inc.fecha_programacion, "DD/MM/YYYY").format("YYYY-MM-DD");
                }
                inc.fecha_programacion = __WEBPACK_IMPORTED_MODULE_16_moment__(inc.fecha_programacion + " " + inc.hora_programacion).format("DD-MM-YYYY HH:mm:ss");
            }
            else {
                if (!__WEBPACK_IMPORTED_MODULE_16_moment__(inc.fecha_programacion, "DD/MM/YYYY").isValid()) {
                    inc.fecha_programacion = __WEBPACK_IMPORTED_MODULE_16_moment__(inc.fecha_programacion).format("YYYY-MM-DD");
                }
                else {
                    inc.fecha_programacion = __WEBPACK_IMPORTED_MODULE_16_moment__(inc.fecha_programacion, "DD/MM/YYYY").format("YYYY-MM-DD");
                }
                inc.fecha_programacion = __WEBPACK_IMPORTED_MODULE_16_moment__(inc.fecha_programacion + " " + "00:00:00").format("DD-MM-YYYY HH:mm:ss");
            }
        }
        this.incidenciaService.update(inc).subscribe(function (value) {
            if (value.data.noplaneado == 1) {
                _this.notificationService.onError("Ya tiene asignado un incidente en esa hora.");
            }
            else if (value.data.errorusu == 1) {
                _this.notificationService.onError("No se puede asignar el usuario por que es tecnico adicional");
            }
            else {
                if (value.data.errorrec == undefined) {
                    inc.usuario_asignado = value.data.usuario_asignado;
                    inc.remotoinicio = value.data.remotoinicio;
                    inc.remotopausa = value.data.remotopausa;
                    inc.estado = value.data.estado;
                    _this.incnew = null;
                    _this.spinnerService.hide();
                    _this.notificationService.onSuccess("Incidente Actualizado.");
                    var _userIncidence = [];
                    if (inc.usuario_asignado != null) {
                        _userIncidence.push({
                            planificacion: "Tecnico Principal",
                            tecnico: inc.usuario_asignado.name,
                            tipo: "Pincipal",
                            fecha: _this.item.fecha_programacion,
                            hora: _this.item.hora_programacion,
                            estado: "",
                            principal: 1,
                        });
                        _this.userIncidence = _userIncidence;
                    }
                }
                else {
                    inc.estado = "PLA";
                    _this.notificationService.onError("Ya esta trabajando en un incidente");
                }
            }
        }, function (err) {
            _this.spinnerService.hide();
            if (err.status_code == 422) {
                _this.notificationService.onError("Incidente no Actualizado.");
            }
            else {
                _this.notificationService.onError("Incidente no Actualizado.");
            }
        });
        inc.fecha_programacion = fectem;
    };
    /**
     * It removes the active class from the currently active nav-link and tab-pane, then adds the active
     * class to the nav-link and tab-pane that correspond to the name of the tab that was clicked.
     * @param name - The name of the tab you want to switch to.
     */
    IncidenciaEditTabComponent.prototype.toggleNav = function (name) {
        document.querySelector(".nav-link.active").classList.remove("active");
        document.querySelector(".tab-pane.active").classList.remove("active");
        document.querySelector("#" + name).classList.add("active");
        document.querySelector("#tab-" + name).classList.add("active");
        this.adclock(this.item);
    };
    /**
     * Compare two string objects by their property 'name'
     * @return result - The result of the comparison
     */
    IncidenciaEditTabComponent.prototype.compare = function (a, b) {
        if (a.name < b.name)
            return -1;
        if (a.name > b.name)
            return 1;
        return 0;
    };
    IncidenciaEditTabComponent.prototype.esTecnico = function () {
        return this.user.relpefil.id == 1;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], IncidenciaEditTabComponent.prototype, "incidenceId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], IncidenciaEditTabComponent.prototype, "showIncidenceDetail", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("myckeditor"),
        __metadata("design:type", Object)
    ], IncidenciaEditTabComponent.prototype, "ckeditor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("myckeditordesc"),
        __metadata("design:type", Object)
    ], IncidenciaEditTabComponent.prototype, "ckeditordesc", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("rtackeditor"),
        __metadata("design:type", Object)
    ], IncidenciaEditTabComponent.prototype, "rtackeditor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("createSwal"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_11__toverux_ngx_sweetalert2__["a" /* SwalComponent */])
    ], IncidenciaEditTabComponent.prototype, "createSwal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("partetrabajoSwal"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_11__toverux_ngx_sweetalert2__["a" /* SwalComponent */])
    ], IncidenciaEditTabComponent.prototype, "partetrabajoSwal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("cierremanualSwal"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_11__toverux_ngx_sweetalert2__["a" /* SwalComponent */])
    ], IncidenciaEditTabComponent.prototype, "cierremanualSwal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("ctrlform"),
        __metadata("design:type", Object)
    ], IncidenciaEditTabComponent.prototype, "ctrlform", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("ctrlformrta"),
        __metadata("design:type", Object)
    ], IncidenciaEditTabComponent.prototype, "ctrlformrta", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("confirmplaneacionSwal"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_11__toverux_ngx_sweetalert2__["a" /* SwalComponent */])
    ], IncidenciaEditTabComponent.prototype, "confirmplaneacionSwal", void 0);
    IncidenciaEditTabComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-incidencia-edit-tab",
            template: __webpack_require__("./src/app/incidencias/incidencia-edit-tab/incidencia-edit-tab.component.html"),
            styles: [__webpack_require__("./src/app/incidencias/incidencia-edit-tab/incidencia-edit-tab.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__["Ng4LoadingSpinnerService"],
            __WEBPACK_IMPORTED_MODULE_2__incidencia_service__["a" /* IncidenciaService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__shared__["k" /* NotificationService */],
            __WEBPACK_IMPORTED_MODULE_4__shared__["i" /* LocalDataService */],
            __WEBPACK_IMPORTED_MODULE_6__clientes_cliente_service__["a" /* ClienteService */],
            __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_datepicker__["b" /* BsLocaleService */],
            __WEBPACK_IMPORTED_MODULE_8__tipocontrato_tipocontrato_service__["a" /* TipocontratoService */],
            __WEBPACK_IMPORTED_MODULE_9__estacionservicio_estacionservicio_service__["a" /* EstacionservicioService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_19__respuesta_respuestas_service__["a" /* RespuestasService */],
            __WEBPACK_IMPORTED_MODULE_26__archivoupload_archivoupload_service__["a" /* ArchivouploadService */],
            __WEBPACK_IMPORTED_MODULE_20__articulo_articulo_service__["a" /* ArticuloService */],
            __WEBPACK_IMPORTED_MODULE_23__comentarioincidente_comentarioincidente_service__["a" /* ComentarioincidenteService */],
            __WEBPACK_IMPORTED_MODULE_25__shared_can_deactivate_guard_can_deactivate_guard_service__["a" /* Candeactivateguard */],
            __WEBPACK_IMPORTED_MODULE_27__shared_location_location_service__["a" /* LocationService */],
            __WEBPACK_IMPORTED_MODULE_28__shared_auditoria_auditoria_service__["a" /* AuditoriaService */],
            __WEBPACK_IMPORTED_MODULE_29__proyectos_proyectos_service__["a" /* ProyectosService */]])
    ], IncidenciaEditTabComponent);
    return IncidenciaEditTabComponent;
}());



/***/ }),

/***/ "./src/app/incidencias/incidencia-edit/incidencia-edit.component.css":
/***/ (function(module, exports) {

module.exports = "input[type=\"file\"] {\r\n    display: none;\r\n}\r\n.custom-file-upload {\r\n    border: 1px solid #ccc;\r\n    display: inline-block;\r\n    padding: 6px 12px;\r\n    cursor: pointer;\r\n}\r\n.my-drop-zone { border: dotted 3px lightgray; }\r\n.nv-file-over { border: dotted 3px red; }\r\n/* Default class applied to drop zones on over */\r\n.another-file-over-class { border: dotted 3px green; }\r\n.list-group-item.active {\r\n    z-index: 2;\r\n    color: #212529;\r\n  \r\n}\r\n.right-sidebar {\r\n    z-index: 25;\r\n}"

/***/ }),

/***/ "./src/app/incidencias/incidencia-edit/incidencia-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-wrapper\" id=\"contenedorsign\">\n  <!-- ============================================================== -->\n  <!-- Container fluid  -->\n  <!-- ============================================================== -->\n  <div class=\"container-fluid\">\n    <!-- ============================================================== -->\n    <!-- Bread crumb and right sidebar toggle -->\n    <!-- ============================================================== -->\n\n    <!-- ============================================================== -->\n    <!-- End Bread crumb and right sidebar toggle -->\n    <!-- ============================================================== -->\n    <!-- ============================================================== -->\n    <!-- Start Page Content -->\n    <!-- ============================================================== -->\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <div class=\"card\">\n          <div class=\"row\">\n\n            <div class=\"col-xlg-12 col-lg-12 col-md-12 bg-light border-left\">\n\n              <div class=\"card-body\">\n                <button type=\"button \" class=\"btn btn-secondary m-r-10 m-b-10\" (click)=\"tooglerogthmenu()\"\n                  title=\"Comentarios\"><i class=\" ti-comments font-18\"></i></button>\n\n                <div class=\"btn-group m-b-10 m-r-10 float-right\" role=\"group\"\n                  aria-label=\"Button group with nested dropdown\">\n\n                  <a href=\"#\" *ngIf=\"!edit\" (click)=\"cerrarmanual()\" class=\"btn btn-info\">\n                    Cierre Manual</a>\n\n                  <a routerLink=\"/incidencia\" class=\"btn btn-info\">Listado\n                    Incidencias</a>\n\n                </div>\n\n\n\n              </div>\n\n              <div class=\"card-body\">\n                <div class=\"alert alert-danger alert-rounded\" *ngIf=\"!item.usuario_asignado\">\n                  El incidente no tiene usuario asignado por lo que no se pueden registrar partes de trabajo.\n                  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"> <span\n                      aria-hidden=\"true\">×</span> </button>\n                </div>\n                <form action=\"#\" id=\"form-id\" (ngSubmit)=\"add(false)\" #ctrlform=\"ngForm\">\n                  <div class=\"form-body\">\n                    <h3 class=\"card-title\">Información Basica</h3> <small>campos con * requeridos </small>\n                    <hr>\n                    <div class=\"row p-t-20\">\n                      <div class=\"col-md-3\">\n                        <span class=\"badge badge-pill {{getclassestadoincidencia(item.estado)}} float-LEFT\">#{{item.id}}\n                          - {{item.estado}}</span>\n                        <ul>\n                          <li *ngIf=\"item.usuario_asignado\">{{item.usuario_asignado?.name}}</li>\n                          <b style=\"font-weight: 500;\">Adicionales:</b>\n                          <li *ngFor=\"let tecad of item.tecnicosadicionales\">\n                            <strong>{{tecad.usuario.name}}</strong>\n                          </li>\n                        </ul>\n                      </div>\n                      <div class=\"col-md-3\"> <label class=\"control-label\">Fecha Creación</label><br>\n                        <i class=\"fas fa-calendar-check\"></i> {{item.created_at |date:'dd/MM/yyyy HH:mm:ss'}}</div>\n                      <div class=\"col-md-3\"> <label class=\"control-label\">Fecha Vencimiento</label><br>\n                        <input type=\"text\" id=\"ctrl_fecha\" class=\"form-control \" placeholder=\" Escriba la fecha\"\n                          [(ngModel)]=\"item.fecha_vencimiento\" name=\"ctrl_fecha\" bsDatepicker\n                          [bsValue]=\"item.fecha_vencimiento\" [disabled]=\"edit\"\n                          (blur)=\"item.cambioFechaVencimiento=true\">\n                      </div>\n                      <div class=\"col-md-3\"> <label class=\"control-label\">Fecha Planeación</label><br>\n                        <i class=\"fas fa-calendar-check\"></i> {{item.fecha_programacion |date:'dd/MM/yyyy HH:mm:ss'}}\n                      </div>\n                      <div class=\"col-lg-12\">\n                        <hr>\n                      </div>\n                      <div class=\"col-md-4\">\n                        <div class=\"form-group\">\n                          <label class=\"control-label\">Cliente *</label>\n\n\n                          <input [(ngModel)]=\"item.razonsocial\" [disabled]=\"edit\" [typeahead]=\"dataSource\"\n                            [typeaheadAsync]=\"true\" required (typeaheadLoading)=\"changeTypeaheadLoading($event)\"\n                            (typeaheadOnSelect)=\"typeaheadOnSelect($event)\" [typeaheadScrollable]=\"true\"\n                            typeaheadOptionField=\"razon_social\" [typeaheadOptionsLimit]=\"100\"\n                            placeholder=\"Seleccione el cliente\" class=\"form-control\" name=\"test\" autocomplete=\"off\"\n                            #ctrlcliente=\"ngModel\">\n                          <div *ngIf=\"typeaheadLoading\">Cargando..</div>\n\n                          <small class=\"form-control-feedback\"> Seleccione el cliente </small>\n                          <div\n                            *ngIf=\"(item.cliente_id==='0'||ctrlcliente.invalid) && (ctrlcliente.dirty || ctrlcliente.touched ||validform)\"\n                            class=\"text-danger\">\n\n                            <div *ngIf=\"item.cliente_id==0||ctrlcliente.errors.required\">\n                              Cliente es requerido es requerido.\n                            </div>\n\n\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"col-md-4\">\n                        <div class=\"form-group\">\n                          <label class=\"control-label\">Estacion Servicio</label>\n                          <select class=\"form-control custom-select\" [disabled]=\"edit\"\n                            [(ngModel)]=\"item.estacion_servicio_id\" name=\"ctrlestacionservicio\"\n                            (change)=\"onselectEstacionServicio($event)\" #ctrlestacionservicio=\"ngModel\" required>\n                            <option [value]=\"-1\">Seleccione</option>\n                            <option *ngFor=\"let o of estacionservicio\" [value]=\"o.id.toString()\">\n                              {{ o.name }} ({{o.zonatecnica.name}})\n\n                            </option>\n                          </select>\n\n                          <small class=\"form-control-feedback\"> Seleccione la Estacion de Servicio </small> </div>\n                        <div\n                          *ngIf=\"(item.estacion_servicio_id===-1||ctrlestacionservicio.invalid) && (ctrlestacionservicio.dirty || ctrlestacionservicio.touched ||validform)\"\n                          class=\"text-danger\">\n\n                          <div *ngIf=\"item.estacion_servicio_id==-1||ctrlestacionservicio.errors.required\">\n                            Estacion Servicio requerido.\n                          </div>\n\n\n                        </div>\n                      </div>\n                      <div class=\"col-md-4\">\n                        <div class=\"form-group\">\n                          <label class=\"control-label\">N° Referencia Cliente</label>\n\n                          <input [(ngModel)]=\"item.noreferencia\" placeholder=\"N° referencia Cliente\"\n                            class=\"form-control\" name=\"noreferencia\">\n\n                          <small class=\"form-control-feedback\"> Escriba el N° de referencia del cliente </small> </div>\n\n                      </div>\n                      <div class=\"col-md-4\">\n                        <div class=\"form-group\">\n                          <label class=\"control-label\">Proyecto</label>\n\n                          <ng-select [multiple]=\"false\" [disabled]=\"esTecnico()\"\n                            placeholder=\"Seleccione Proyecto\" [(ngModel)]=\"selectProyect\" (change)=\"onChangeProyect($event)\"\n                             name=\"ctrlproyecto\">\n                             <ng-option *ngFor=\"let p of proyects\" [value]=\"p\">{{ p.codigo_proyecto }} | {{ p.descripcion }}</ng-option>\n                          </ng-select>\n\n                        </div>\n                      </div>\n                    </div>\n                    <h3 class=\"card-title\" *ngIf=\"newcompo&& newcompo.name!=undefined\">Estacion Servicio</h3>\n                    <hr>\n                    <div class=\"row p-t-20\" *ngIf=\"newcompo && newcompo.name!=undefined\">\n                      <div class=\"col-lg-3 col-sm-12\"><strong>Estacion Servicio</strong> <br>{{newcompo.name}}</div>\n                      <div class=\"col-lg-3 col-sm-12\"><strong>Zona Tecnica</strong><br>{{newcompo.zonatecnica.name}}\n                      </div>\n                      <div class=\"col-lg-3 col-sm-12\"><strong>Dirección</strong> <br>{{newcompo.direccion}}</div>\n                      <div class=\"col-lg-3 col-sm-12\"><strong>Telefono</strong> <br>{{newcompo.telefono}}</div>\n                      <div class=\"col-lg-12 col-sm-12\"><strong>Observaciones</strong> <br>{{newcompo.observaciones}}\n                      </div>\n                      <div class=\"col-lg-12 col-sm-12\"><strong>Archivos</strong>\n                        <br>\n                        <ul class=\"el-info list-inline\"\n                          *ngIf=\"newcompo.archivos!=undefined&&newcompo.archivos.length>0\">\n                          <li *ngFor=\"let imgprod of newcompo.archivos;\" class=\"col-lg-3 text-truncate\"\n                            title=\"{{imgprod.nombrearchivo==null?imgprod.nombre:imgprod.nombrearchivo}}\">\n                            <a class=\"btn default btn-outline image-popup-vertical-fit\" target=\"_self\"\n                              href=\"{{apiurl+'storage/'+imgprod.nombre}}\" download=\"{{imgprod.nombre}}\">\n                              <i class=\" ti-file\"></i>{{imgprod.tiposiniestro}}-\n                              {{imgprod.nombrearchivo==null?imgprod.nombre:imgprod.nombrearchivo}}</a></li>\n\n                        </ul>\n                      </div>\n                    </div>\n                    <h3 class=\"card-title\" *ngIf=\"newcompo&& newcompo.name!=undefined\">Componentes</h3>\n                    <hr>\n                    <div class=\"row p-t-20\" *ngIf=\"newcompo&& newcompo.name!=undefined\">\n                      <div class=\"table-responsive\">\n                        <table id=\"example23\"\n                          class=\"display nowrap table table-hover m-t-30  table-striped table-bordered\" cellspacing=\"0\"\n                          width=\"100%\">\n                          <thead>\n                            <tr>\n                              <th>Tipo Componente</th>\n                              <th>Informacion</th>\n                              <th>Contratos</th>\n\n\n                            </tr>\n                          </thead>\n\n                          <tbody>\n\n\n                            <ng-container *ngFor=\"let row of newcompo.componentes; let i = index\">\n                               <!-- row.id && row.estado -->\n                                <tr *ngIf=\"row.id\">\n                                <td>\n                                  {{row.tipocomponente.name}}\n                                  <br>\n                                  <p *ngIf=\"row.observacionescontrato!=''\">Observaciones:<span\n                                      [innerHTML]=\"row.observacionescontrato\"></span></p>\n                                  <ul class=\"el-info\" *ngIf=\"row.archivos!=undefined&&row.archivos.length>0\">\n                                    <li *ngFor=\"let imgprod of row.archivos;\" class=\"col-lg-10 text-truncate\"\n                                      title=\"{{imgprod.nombrearchivo==null?imgprod.nombre:imgprod.nombrearchivo}}\">\n                                      <a class=\"btn default btn-outline image-popup-vertical-fit\" target=\"_self\"\n                                        href=\"{{apiurl+'storage/'+imgprod.nombre}}\" download=\"{{imgprod.nombre}}\">\n                                        <i class=\" ti-file\"></i>{{imgprod.tiposiniestro}}-\n                                        {{imgprod.nombrearchivo==null?imgprod.nombre:imgprod.nombrearchivo}}</a></li>\n\n                                  </ul>\n                                </td>\n                                <td>\n                                  <ul>\n                                    <li *ngFor=\"let field of row.componentfields\">\n                                      <strong>{{field.tipocomponentfield.name}}:</strong> {{field.value}}\n                                    </li>\n                                  </ul>\n                                </td>\n                                <td>\n                                  <ul class=\"list-group list-group-full\">\n                                    <li class=\"list-group-item\" *ngFor=\"let contr of row.contratos; let j = index\">\n\n                                      <div class=\"col-lg-9\" style=\"display: inline-table;\"><strong>Tipo</strong>\n                                        <span\n                                          [ngStyle]=\"{'background-color': contr.contrato.tipocontrato.color?contr.contrato.tipocontrato.color:'#ffffff'}\"\n                                          class=\"badge badge-pill \"> {{contr.contrato.tipocontrato.name}}</span><br>\n                                        <strong>Vto</strong> {{contr.contrato.fechafin}}</div>\n                                      <div class=\"custom-control custom-radio mr-sm-2 col-lg-3\"\n                                        style=\"display: inline; text-align: start;\">\n                                        <input class=\"custom-control-input\" id=\"checkbox{{newcompo.id}}_{{i}}_{{j}}\"\n                                          (click)=\"clickcontrato(contr,row)\" name=\"checkbox{{newcompo.id}}\" type=\"radio\"\n                                          [disabled]=\"edit\" [checked]=\"item.contrato_componente_id==contr.id\">\n\n                                        <label class=\"custom-control-label\" for=\"checkbox{{newcompo.id}}_{{i}}_{{j}}\"><i\n                                            *ngIf=\"edit && item.contrato_componente_id==contr.id\"\n                                            class=\"fas fa-check-circle\"></i></label>\n                                      </div>\n                                    </li>\n                                    <li class=\"list-group-item\"\n                                      *ngIf=\"row.contratos==undefined||row.contratos.length==0\">\n                                      <div class=\"col-lg-9\" style=\"display: inline-table;\"> <strong>Sin\n                                          Contrato</strong><br></div>\n\n                                      <div class=\"custom-control custom-radio mr-sm-2 col-lg-3\"\n                                        style=\"display: inline; text-align: start;\">\n                                        <input class=\"custom-control-input\" id=\"checkbox{{newcompo.id}}_{{i}}_sn\"\n                                          name=\"checkbox{{newcompo.id}}\" type=\"radio\" value=\"check\"\n                                          [checked]=\"item.sincontrato==row.id && item.contrato_componente_id==null\"\n                                          [disabled]=\"edit\" (click)=\"clicksincontrato(row.id)\">\n\n                                        <label class=\"custom-control-label mb-3\"\n                                          for=\"checkbox{{newcompo.id}}_{{i}}_sn\"><i\n                                            *ngIf=\"edit && item.sincontrato==row.id\"\n                                            class=\"fas fa-check-circle\"></i></label>\n                                      </div>\n                                    </li>\n                                  </ul>\n\n                                </td>\n\n\n                              </tr>\n\n\n                            </ng-container>\n                          </tbody>\n                        </table>\n                      </div>\n                    </div>\n\n                    <div class=\"row p-t-20\">\n                      <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                          <label class=\"control-label\">Titulo *</label>\n\n\n                          <input [(ngModel)]=\"item.titulo\" [disabled]=\"edit\" maxlength=\"250\" required placeholder=\"Escriba el titulo\"\n                            class=\"form-control\" name=\"titulo\" #ctrltitulo=\"ngModel\">\n\n                          <div *ngIf=\"(ctrltitulo.invalid) && (ctrltitulo.dirty || ctrltitulo.touched ||validform)\"\n                            class=\"text-danger\">\n\n                            <div *ngIf=\"ctrltitulo.errors.required\">\n                              Titulo es requerido.\n                            </div>\n\n\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"col-md-4\">\n                        <div class=\"form-group\">\n                          <label class=\"control-label\">Siniestro</label>\n                          <div class=\"custom-control custom-checkbox mr-sm-2\">\n                            <input class=\"custom-control-input\" id=\"checkbox_pedir{{item.id}}\"\n                              name=\"checkbox_pedir{{item.id}}\" (change)=\"essiniestro($event)\" type=\"checkbox\"\n                              [checked]=\"item.siniestro\">\n                            <label class=\"custom-control-label\" for=\"checkbox_pedir{{item.id}}\"> Seleccione si es\n                              siniestro </label>\n                          </div>\n\n                        </div>\n\n                      </div>\n                      <div class=\"col-md-4\">\n                        <div class=\"form-group\">\n                          <label class=\"control-label\">Actuación</label>\n                          <select class=\"form-control custom-select\" [disabled]=\"edit\" [(ngModel)]=\"item.actuacion\"\n                            name=\"ctrlactuacion\">\n                            <option value=\"-1\">Seleccione</option>\n                            <option value=\"Correctivo\">Correctivo</option>\n                            <option value=\"Preventivas\">Preventivas</option>\n                            <option value=\"Instalaciones\">Instalaciones</option>\n                            <option value=\"Obra\">Obra</option>\n                          </select>\n\n                          <small class=\"form-control-feedback\"> Seleccione la Actuación </small> </div>\n\n                      </div>\n                      <div class=\"col-md-4\">\n                        <div class=\"form-group\">\n                          <label class=\"control-label\">Prioridad *</label>\n                          <select class=\"form-control custom-select\" [(ngModel)]=\"item.categoria_incidente_id\"\n                            name=\"ctrlprioridad\" #ctrlprioridad=\"ngModel\" required>\n                            <option [value]=\"-1\">Seleccione</option>\n                            <option [value]=\"-2\" *ngIf=\"prioridades.length==0\">Sin Prioridad</option>\n                            <option *ngFor=\"let o of  prioridades \" [value]=\"o.id.toString()\">\n                              {{ o.name }} ({{o.tiemporesolucion}}-{{o.tipotiempo}})\n\n                            </option>\n                          </select>\n\n                          <small class=\"form-control-feedback\"> Seleccione la Prioridad </small> </div>\n                        <div\n                          *ngIf=\"(item.categoria_incidente_id===-1||ctrlprioridad.invalid) && (ctrlprioridad.dirty || ctrlprioridad.touched ||validform)\"\n                          class=\"text-danger\">\n\n                          <div *ngIf=\"item.categoria_incidente_id==-1||ctrlprioridad.errors.required\">\n                            La Prioridad es requerida.\n                          </div>\n\n\n                        </div>\n                      </div>\n\n                      <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                          <label class=\"control-label\">Descripción de la incidencia *</label>\n\n                          <ckeditor [(ngModel)]=\"item.descripcion\" [readonly]=\"edit\" #myckeditordesc=\"ngModel\"\n                            name=\"myckeditor\" [config]=\"ckeConfigdesc\" debounce=\"500\" (change)=\"onChange($event)\"\n                            #ctrlobservaciones=\"ngModel\" maxlength=\"2500\" required>\n                          </ckeditor>\n\n                          <small class=\"form-control-feedback\"> Escriba el la observacion del Contrato {{2500-(item.descripcion==undefined?0:item.descripcion.length)}}</small>\n                        </div>\n                        <div\n                          *ngIf=\"ctrlobservaciones.invalid && (ctrlobservaciones.dirty || ctrlobservaciones.touched ||validform)\"\n                          class=\"text-danger\">\n\n                          <div *ngIf=\"ctrlobservaciones.errors.required\">\n                            La observacion del Contrato es requerido.\n                          </div>\n                          <div *ngIf=\"ctrlobservaciones.errors.maxlength\">\n                            La observación debe contener 2500 caracteres.\n                          </div>\n\n\n                        </div>\n                      </div>\n                    </div>\n                    <h3 class=\"card-title\">Tecnicos Adicionales</h3>\n                    <hr>\n                    <div class=\"row p-t-20\">\n                      <div class=\"table-responsive\">\n                        <table id=\"example23\"\n                          class=\"display nowrap table table-hover m-t-30  table-striped table-bordered\" cellspacing=\"0\"\n                          width=\"100%\">\n                          <thead>\n                            <tr>\n                              <th>Nombre tecnico</th>\n                              <th>Observaciones</th>\n                              <th></th>\n\n\n                            </tr>\n                          </thead>\n                          <tfoot *ngIf=\"!edit\">\n                            <tr>\n                              <th>\n\n                                <select class=\"form-control custom-select\" [(ngModel)]=\"tecnicoadicionalnew.id_usuario\"\n                                  name=\"ctrltecadicional\">\n                                  <option value=\"-1\">Seleccione</option>\n                                  <ng-container *ngFor=\"let usr of usuariostec\">\n                                    <option *ngIf=\"!usr.selected\" [value]=\"usr.id.toString()\">\n                                      {{ usr.name }}\n\n                                    </option>\n                                  </ng-container>\n\n                                </select>\n                              </th>\n                              <th><textarea class=\"form-control\" [(ngModel)]=\"tecnicoadicionalnew.observaciones\"\n                                  name=\"txtobservaciontec\"></textarea></th>\n                              <th><button type=\"button\" class=\"btn btn-info\" (click)=\"agregartecnicoadicional()\"><i\n                                    class=\"fa fa-plus\"></i></button></th>\n\n\n                            </tr>\n                          </tfoot>\n\n                          <tbody>\n\n\n                            <ng-container *ngFor=\"let row of item.tecnicosadicionales; let i = index\">\n                              <tr>\n                                <td>\n                                  {{row.usuario.name}}\n                                </td>\n                                <td>\n                                  {{row.observaciones}}\n                                </td>\n                                <td>\n                                  <a class=\"preview\" *ngIf=\"item.estado=='PDA'||item.estado=='PLA'\" href=\"#\"\n                                    [swal]=\"deletetecSwal\"> <i class=\"icon-trash\"></i></a>\n                                  <swal #deletetecSwal title=\"Eliminar Tecnico adicional\"\n                                    text=\"Esta acción no se puede modificar.\" type=\"question\" [showCancelButton]=\"true\"\n                                    [focusCancel]=\"true\" (confirm)=\"deleterecnico(i)\">\n                                  </swal>\n\n\n                                </td>\n\n\n                              </tr>\n\n\n                            </ng-container>\n                          </tbody>\n                        </table>\n                      </div>\n                    </div>\n                    <!--/span-->\n\n                    <!--/span-->\n                  </div>\n\n                  <div class=\"form-actions\">\n\n                    <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"disablesave\"> <i class=\"fa fa-check\"></i>\n                      Actualizar</button>\n                    <button type=\"button\" class=\"btn btn-inverse\" routerLink=\"/incidencia\">Cancelar</button>\n                  </div>\n\n                </form>\n              </div>\n              <div>\n                <hr class=\"m-t-0\">\n              </div>\n              <div class=\"card-body \" *ngIf=\"item.usuario_asignado\">\n                <h4><i class=\"ti-write\"></i> Parte de trabajo </h4>\n                <div class=\"form-group col-lg-12\" *ngIf=\"!edit\">\n\n                  <div class=\"custom-control custom-checkbox mr-sm-2\">\n                    <input class=\"custom-control-input\" type=\"checkbox\" id=\"checkbox_partermanual\"\n                      name=\"checkbox_partermanual\" [(ngModel)]=\"irespuesta.manual\">\n                    <label class=\"custom-control-label\" for=\"checkbox_partermanual\">Parte de trabajo manual</label>\n                  </div>\n                  <br>\n                  <small class=\"form-control-feedback\"> Seleccione si es parte manual </small>\n                </div>\n                <form action=\"#\" class=\"row\" id=\"form-rta\" (ngSubmit)=\"guardarrespuesta()\" #ctrlformrta=\"ngForm\">\n\n                  <div class=\"form-group  col-lg-3\" *ngIf=\"irespuesta.manual\">\n                    <label class=\"control-label\">Tecnico Parte Manual</label>\n                    <select class=\"form-control custom-select\" [(ngModel)]=\"irespuesta.user_id\"\n                      name=\"ctrlTecnicoAdicional\" #ctrlTecnicoAdicional=\"ngModel\" required>\n                      <option value=\"\">Seleccione</option>\n                      <option *ngFor=\"let usr of usuariostecparte\" [value]=\"usr.id.toString()\">\n                        {{ usr.name }}\n\n                      </option>\n                    </select>\n\n                    <small *ngIf=\"ctrlTecnicoAdicional.errors\" class=\"messages text-danger\">\n                      * requerida\n                    </small>\n                    <small class=\"form-control-feedback\">Seleccione el tecnico del parte manual. </small>\n\n                    <div\n                      *ngIf=\"(ctrlTecnicoAdicional.invalid) && (ctrlTecnicoAdicional.dirty || ctrlTecnicoAdicional.touched ||validform)\"\n                      class=\"text-danger\">\n\n                      <div *ngIf=\"ctrlestadorespuesta.errors.required\">\n                        Tecnico del parte manual. es requerido.\n                      </div>\n\n\n                    </div>\n                  </div>\n                  <div class=\"form-group  col-lg-3\" *ngIf=\"irespuesta.manual\">\n                    <label class=\"control-label\">Fecha parte</label>\n                    <input type=\"text\" id=\"ctrl_fecha_cierre\" class=\"form-control \" autocomplete=\"off\"\n                      placeholder=\" Escriba la fecha de cierre\" [(ngModel)]=\"irespuesta.created_at\"\n                      name=\"ctrl_fecha_cierre\" bsDatepicker>\n                  </div>\n                  <div class=\"form-group col-lg-12\">\n                    <label class=\"control-label\">Parte de trabajo de la incidencia *</label>\n\n                    <ckeditor [(ngModel)]=\"irespuesta.descripcion\" #myckeditor=\"ngModel\" name=\"rtackeditor\"\n                      [config]=\"ckeConfig\" debounce=\"500\" maxlength=\"2500\" (change)=\"onChange($event)\" required #rtackeditor=\"ngModel\">\n                    </ckeditor>\n                    <small *ngIf=\"rtackeditor.invalid && (rtackeditor.dirty || rtackeditor.touched ||validform)\"\n                      class=\"messages text-danger\">\n                      * requerida\n                      <div *ngIf=\"rtackeditor.errors.maxlength\">\n                        La observación debe contener 2500 caracteres.\n                      </div>\n                    </small>\n                    <small class=\"form-control-feedback\"> Escriba el la Parte de trabajo de la Incidencia {{2500-(irespuesta.descripcion==undefined?0:irespuesta.descripcion.length)}}</small>\n                  </div>\n                  <div class=\"form-group  col-lg-3\">\n                    <label class=\"control-label\">Estado Parte de trabajo</label>\n                    <select class=\"form-control custom-select\" [(ngModel)]=\"irespuesta.estadorespuesta\"\n                      name=\"ctrlestadorespuesta\" #ctrlestadorespuesta=\"ngModel\" (change)=\"onChangeEstadoRespuesta($event.target.value)\" required>\n                      <option value=\"\">Seleccione</option>\n                      <option value=\"TE\">Terminada</option>\n                      <option value=\"PM\">Pendiente por material</option>\n                      <option value=\"PC\">Pendiente por restricciones de cliente.</option>\n                      <option value=\"PS\">Pendiente por seguridad</option>\n                      <option value=\"FJ\">Pendiente por fin de jornada</option>\n                    </select>\n                    <small *ngIf=\"ctrlestadorespuesta.errors\" class=\"messages text-danger\">\n                      * requerida\n                    </small>\n                    <small class=\"form-control-feedback\">Seleccione el estado de la Parte de trabajo. </small>\n\n                    <div\n                      *ngIf=\"(ctrlestadorespuesta.invalid) && (ctrlestadorespuesta.dirty || ctrlestadorespuesta.touched ||validform)\"\n                      class=\"text-danger\">\n\n                      <div *ngIf=\"ctrlestadorespuesta.errors.required\">\n                        Estado Parte de trabajo es requerido.\n                      </div>\n\n\n                    </div>\n                  </div>\n\n                  <div class=\"form-group  col-lg-3\" *ngIf=\"irespuesta.estadorespuesta==='PM'\">\n                    <label class=\"control-label\">\n                      Motivo del material pendiente\n                      <!-- <ng-container *ngIf=\"irespuesta.estadorespuesta != '' && irespuesta.estadorespuesta != 'TE'\">*</ng-container> -->\n                    </label>\n                    <select class=\"form-control custom-select\" [(ngModel)]=\"irespuesta.tipopendientematerial\"\n                      name=\"ctrltipopendientematerial\" #ctrltipopendientematerial=\"ngModel\"\n                      [required]=\"true\"\n                    >\n                      <option value=\"\">Seleccione</option>\n                      <option value=\"NM\">No se dispone del material</option>\n                      <option value=\"RM\">Recambio en mal estado</option>\n                    </select>\n                    <small *ngIf=\"ctrltipopendientematerial.errors\" class=\"messages text-danger\">\n                      * requerida\n                    </small>\n                    <small class=\"form-control-feedback\">Seleccione el motivo. </small>\n                  </div>\n                  <div class=\"form-group  col-lg-3\" *ngIf=\"currentPrioridad?.reporte_garantia=='1' && irespuesta.estadorespuesta=='PM'\">\n                    <label class=\"control-label\">Motivo garantía</label>\n                    <select class=\"form-control custom-select\" [(ngModel)]=\"irespuesta.motivogarantia\"\n                      name=\"ctrlmotivogarantia\" #ctrlmotivogarantia=\"ngModel\"\n                      [required]=\"esContratoTipoGarantiaVenta()\"\n                    >\n                      <option value=\"\">Seleccione</option>\n                      <option value=\"FM\">Fallo del montaje</option>\n                      <option value=\"FMT\">Fallo del material</option>\n                    </select>\n                    <small *ngIf=\"ctrlmotivogarantia.errors\" class=\"messages text-danger\">\n                      * requerida\n                    </small>\n                    <small class=\"form-control-feedback\">Seleccione el motivo. </small>\n                  </div>\n                  <div class=\"form-group  col-lg-3\">\n                    <label class=\"control-label\">Tiempo Solución (Horas) *</label>\n\n                    <input type=\"number\" id=\"tiemporespuesta\" class=\"form-control\" placeholder=\"Tiempo Solucion\"\n                      #ctrltiemporesolucion=\"ngModel\" [(ngModel)]=\"irespuesta.tiemporespuesta\" name=\"tiemporespuesta\"\n                      required (blur)=\"registrarauditoria('tiemporespuesta','Editar',irespuesta.tiemporespuesta)\">\n                    <small *ngIf=\"ctrltiemporesolucion.errors\" class=\"messages text-danger\">\n                      * requerida\n                    </small>\n                    <small class=\"form-control-feedback\">Escriba el tiempo de Solucion(Horas). </small>\n\n                    <div\n                      *ngIf=\"(ctrltiemporesolucion.invalid) && (ctrltiemporesolucion.dirty || ctrltiemporesolucion.touched ||validform)\"\n                      class=\"text-danger\">\n\n                      <div *ngIf=\"ctrltiemporesolucion.errors.required\">\n                        Tiempo de Solucion requerido.\n                      </div>\n\n\n                    </div>\n                  </div>\n                  <div class=\"form-group  col-lg-3\">\n                    <label class=\"control-label\">Tiempo Distancia *</label>\n                    <input type=\"number\" id=\"tiempodistancia\" class=\"form-control\" placeholder=\"Tiempo Solucion\"\n                      #ctrltiempodistancia=\"ngModel\" [(ngModel)]=\"irespuesta.horasdistancia\" name=\"tiempodistancia\"\n                      required (blur)=\"registrarauditoria('horasdistancia','Editar',irespuesta.horasdistancia)\">\n                    <small *ngIf=\"ctrltiempodistancia.errors\" class=\"messages text-danger\">\n                      * requerida\n                    </small>\n                    <small class=\"form-control-feedback\">Escriba el tiempo distancia recorrida. </small>\n\n                    <div\n                      *ngIf=\"(ctrltiempodistancia.invalid) && (ctrltiempodistancia.dirty || ctrltiempodistancia.touched ||validform)\"\n                      class=\"text-danger\">\n\n                      <div *ngIf=\"ctrltiempodistancia.errors.required\">\n                        Tiempo distancia requerida.\n                      </div>\n\n\n                    </div>\n                  </div>\n                  <div class=\"form-group  col-lg-3\">\n                    <label class=\"control-label\">Distancia Recorrida *</label>\n                    <input type=\"number\" id=\"distanciarespuesta\" class=\"form-control\" placeholder=\"Tiempo Solucion\"\n                      #ctrltdistanciarespuesta=\"ngModel\" [(ngModel)]=\"irespuesta.distanciareportada\"\n                      name=\"distanciarespuesta\" required\n                      (blur)=\"registrarauditoria('distanciarespuesta','Editar',irespuesta.distanciareportada)\">\n                    <small *ngIf=\"ctrltdistanciarespuesta.errors\" class=\"messages text-danger\">\n                      * requerida\n                    </small>\n                    <small class=\"form-control-feedback\">Escriba la distancia recorrida. </small>\n\n                    <div\n                      *ngIf=\"(ctrltdistanciarespuesta.invalid) && (ctrltdistanciarespuesta.dirty || ctrltdistanciarespuesta.touched ||validform)\"\n                      class=\"text-danger\">\n\n                      <div *ngIf=\"ctrltdistanciarespuesta.errors.required\">\n                        Distancia recorrida requerida.\n                      </div>\n\n\n                    </div>\n                  </div>\n                  <div class=\"col-lg-12\">\n                    <h4><i class=\" ti-ruler-pencil\"></i> Materiales </h4>\n                    <div class=\"table-responsive\">\n                      <table class=\"display nowrap table table-hover m-t-30  table-striped table-bordered\">\n                        <thead>\n                          <tr>\n                            <th>Articulo</th>\n                            <th>Cantidad</th>\n                            <th>Pedir</th>\n                            <th></th>\n                          </tr>\n                        </thead>\n                        <tfoot>\n                          <tr>\n                            <th> <input [(ngModel)]=\"articulodesc\" [typeahead]=\"dataSource_art\" [typeaheadAsync]=\"true\"\n                                (typeaheadLoading)=\"changeTypeaheadLoading_art($event)\"\n                                (typeaheadOnSelect)=\"typeaheadOnSelect_art($event)\" [typeaheadScrollable]=\"true\"\n                                [typeaheadOptionsLimit]=\"100\" typeaheadOptionField=\"descripcion\" class=\"form-control \"\n                                placeholder=\"Articulo\" name=\"articulo\" autocomplete=\"off\" style=\"min-width: 120px;\">\n                              <div *ngIf=\"typeaheadLoading_art\">Cargando..</div>\n\n\n                            </th>\n                            <th> <input type=\"number\" id=\"Cantidad\" class=\"form-control\" placeholder=\"Cantidad\"\n                                [(ngModel)]=\"materialnew.cantidad\" name=\"cantidad\"></th>\n                            <th>\n                              <div class=\"custom-control custom-checkbox mr-sm-2\">\n                                <input class=\"custom-control-input\" type=\"checkbox\" value=\"check\" id=\"checkbox_pedir\"\n                                  name=\"checkbox_pedir\" (change)=\"FieldsChange($event)\">\n                                <label class=\"custom-control-label\" for=\"checkbox_pedir\"></label>\n                              </div>\n                            </th>\n                            <th><button type=\"button\" class=\"btn btn-info\" (click)=\"agregarmaterial()\"><i\n                                  class=\"fa fa-plus\"></i></button></th>\n                          </tr>\n                        </tfoot>\n                        <tbody>\n                          <tr *ngFor=\"let itemmat of  irespuesta.materiales \">\n                            <td>{{itemmat.nombre}}</td>\n                            <td>{{itemmat.cantidad}}</td>\n                            <td></td>\n                            <td> <a class=\"preview\" href=\"#\" [swal]=\"deleteSwal\"> <i class=\"icon-trash\"></i></a>\n                              <swal #deleteSwal title=\"Eliminar Material\" text=\"Esta acción no se puede modificar.\"\n                                type=\"question\" [showCancelButton]=\"true\" [focusCancel]=\"true\"\n                                (confirm)=\"deletematerial(itemmat)\">\n                              </swal>\n                            </td>\n                          </tr>\n                        </tbody>\n                      </table>\n                    </div>\n                  </div>\n                  <div class=\"col-lg-12\">\n                    <h4><i class=\" ti-pencil\"></i> Firma Cliente <button type=\"button\" (click)=\"abrirfirma()\"\n                        class=\"btn btn-success\"><i class=\"ti-pencil-alt\"></i></button></h4>\n                    <img id=\"image\" *ngIf=\"irespuesta.firmacliente\" src=\"{{irespuesta.firmacliente}}\"\n                      class=\"img-responsive\" alt=\"Firma Cliente\">\n                  </div>\n                  <div class=\"form-group  col-lg-12\">\n                    <label class=\"control-label\">Dni Firma Cliente *</label>\n                    <input type=\"text\" id=\"dnicliente\" class=\"form-control\" placeholder=\"Dni CLiente\"\n                      #ctrltdnicliente=\"ngModel\" [(ngModel)]=\"irespuesta.dnicliente\" name=\"dnicliente\" required>\n                    <small *ngIf=\"ctrltdnicliente.errors\" class=\"messages text-danger\">\n                      * requerida\n                    </small>\n                    <small class=\"form-control-feedback\">Escriba el dni del cliente que firma. </small>\n\n                    <div\n                      *ngIf=\"(ctrltdnicliente.invalid) && (ctrltdnicliente.dirty || ctrltdnicliente.touched ||validform)\"\n                      class=\"text-danger\">\n\n                      <div *ngIf=\"ctrltdnicliente.errors.required\">\n                        Dni del cliente que firma requerida.\n                      </div>\n\n\n                    </div>\n                  </div>\n                  <div class=\"form-group  col-lg-12\">\n                    <label class=\"control-label\">Observaciones Cliente</label>\n\n                    <textarea class=\"form-control\" rows=\"5\" maxlength=\"500\" [(ngModel)]=\"irespuesta.observacioncli\"\n                      name=\"observacioncli\"  #observacioncli=\"ngModel\"></textarea>\n                    <small class=\"form-control-feedback\">Escriba las observaciones del cliente.  {{500-(irespuesta.observacioncli==undefined?0:irespuesta.observacioncli.length)}} </small>\n                    <div *ngIf=\"observacioncli.invalid && (observacioncli.dirty || observacioncli.touched ||validform)\"\n                      class=\"text-danger\">\n\n\n                      <div *ngIf=\"observacioncli.errors.maxlength\">\n                        La observación debe contener 500 caracteres.\n                      </div>\n\n\n                    </div>\n\n\n                  </div>\n                  <div class=\"col-lg-12\">\n                    <hr class=\"m-t-0\">\n                  </div>\n                  <div class=\"form-actions\">\n                    <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"disablesave\">\n                      <i class=\"fa fa-check\"></i>\n                      Guardar Parte de Trabajo</button>\n\n                    <button type=\"button\" class=\"btn btn-inverse\" routerLink=\"/incidencia\">Cancelar</button>\n                    <br><small *ngIf=\"txterror\" class=\"form-control-feedback text-danger\">{{txterror}} </small>\n                  </div>\n                </form>\n\n              </div>\n              <div>\n                <hr class=\"m-t-0\">\n              </div>\n\n              <div class=\"card-body\">\n                <h4><i class=\"fa fa-paperclip m-r-10 m-b-10\"></i> Adjuntos <span>({{item.imagenes.length}})</span></h4>\n                <div class=\"row\">\n                  <div class=\"col-md-12 form-group   \" *ngIf=\"item.siniestro\">\n                    <label class=\"control-label\">Tipo imagen siniestro</label>\n                    <select class=\"form-control custom-select\" (change)=\"selecttipofoto()\"\n                      [(ngModel)]=\"tipofotosiniestro\" name=\"ctrlestadorespuesta\">\n                      <option value=\"\">Seleccione</option>\n                      <option value=\"AR\">Antes de la reparación</option>\n                      <option value=\"DR\">Despues de la reparación</option>\n\n                    </select></div>\n                  <div class=\"col-md-12 my-drop-zone\" ng2FileDrop [ngClass]=\"{'nv-file-over': hasBaseDropZoneOver}\"\n                    (fileOver)=\"fileOverBase($event)\" [uploader]=\"uploader\">\n                    <label for=\"file-upload\" class=\"m-3\">\n\n                      <i class=\"ti-files fa-5x\"></i>\n                    </label>\n                    <div class=\"card-body\">\n\n                    </div>\n                    <input type=\"file\" id=\"file-upload\" multiple ng2FileSelect (fileSelected)=\"fileOverBase($event)\"\n                      [uploader]=\"uploader\" />\n\n                  </div>\n                  <div class=\"col-md-12\" *ngIf=\"uploader.isUploading \">\n                    <div class=\"alert alert-info alert-dismissible mt-8 myAlert-top\" role=\"alert\">\n                      <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span\n                          aria-hidden=\"true\">&times;</span></button>\n                      Cargando Archivo ...\n\n                      <div class=\"progress-bar bg-warning\" [ngStyle]=\"{ 'width': uploader.progress + '%' }\"\n                        style=\" height:6px;\" role=\"progressbar\"> <span class=\"sr-only\">60% Complete</span> </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-12\">\n                    <ul class=\"el-info list-inline\">\n                      <li *ngFor=\"let imgprod of item.imagenes;\" class=\"col-lg-3 text-truncate\"\n                        title=\"{{imgprod.nombrearchivo==null?imgprod.nombre:imgprod.nombrearchivo}}\">\n                        <a class=\"btn default btn-outline image-popup-vertical-fit\" target=\"_self\"\n                          href=\"{{apiurl+'storage/'+imgprod.nombre}}\" download=\"{{imgprod.nombre}}\">\n                          <i class=\" ti-file\"></i>{{imgprod.tiposiniestro}}-\n                          {{imgprod.nombrearchivo==null?imgprod.nombre:imgprod.nombrearchivo}}</a>\n                        <a href=\"#\" [swal]=\"deletefileSwal\" title=\"Borrar archivo\"><i class=\"ti-trash\"></i></a>\n                        <swal #deletefileSwal title=\"Eliminar Archivo\" text=\"Esta acción no se puede modificar.\"\n                          type=\"question\" [showCancelButton]=\"true\" [focusCancel]=\"true\"\n                          (confirm)=\"eliminar_imagen(imgprod)\">\n                        </swal>\n                      </li>\n\n                    </ul>\n                  </div>\n\n\n\n                </div>\n\n              </div>\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- ============================================================== -->\n    <!-- End Page Content -->\n    <!-- ============================================================== -->\n    <!-- ============================================================== -->\n    <!-- Right sidebar -->\n    <!-- ============================================================== -->\n    <!-- .right-sidebar -->\n    <div class=\"right-sidebar\">\n\n      <div class=\"slimscrollright\">\n        <div class=\"rpanel-title\"><i class=\"ti-comments\"></i> Comentarios</div>\n        <div class=\"r-panel-body\">\n          <div class=\"list-group\">\n            <a href=\"javascript:void(0)\"\n              class=\"list-group-item list-group-item-action flex-column align-items-start active\">\n\n              <form class=\" m-t-40\" #comForm=\"ngForm\" (ngSubmit)=\"addcomentario()\">\n                <div class=\"form-group\">\n                  <label>Comentario *</label>\n\n                  <textarea class=\"form-control\" name=\"txtcomment\" rows=\"5\" #txtcomment=\"ngModel\" required\n                    [(ngModel)]=\"comentarionew.comentario\"></textarea>\n                  <div *ngIf=\"txtcomment.invalid && (txtcomment.dirty || txtcomment.touched ||validform)\"\n                    class=\"alert alert-danger\">\n\n                    <div *ngIf=\"txtcomment.errors.required\">\n                      Requerido.\n                    </div>\n                    <div *ngIf=\"txtcomment.errors.minlength\">\n                      Name must be at least 4 characters long.\n                    </div>\n                    <div *ngIf=\"txtcomment.errors.forbiddenName\">\n                      Name cannot be Bob.\n                    </div>\n\n                  </div>\n                </div>\n\n                <button type=\"submit\" [disabled]=\"comForm.invalid\"\n                  class=\"btn btn-success waves-effect waves-light m-r-10\">\n                  <i class=\"fa fa-plus\"></i>\n                  Agregar</button>\n              </form>\n\n\n            </a>\n            <a href=\"javascript:void(0)\" *ngFor=\"let commentitm of item.comentarios;\"\n              class=\"list-group-item list-group-item-action flex-column align-items-start\">\n              <div class=\"d-flex w-100 justify-content-between\">\n                <h5 class=\"mb-1\"><i class=\"ti-comment\"></i> {{commentitm.user.name}}</h5>\n                <small class=\"text-muted\">hace {{calculardias(commentitm.created_at)}} dias.</small>\n              </div>\n              <p class=\"mb-1\">{{commentitm.comentario}}</p>\n              <small class=\"text-muted\">{{commentitm.created_at}}</small>\n            </a>\n\n          </div>\n        </div>\n        <div class=\"rpanel-title\"><i class=\"ti-link\"></i> Partes de Trabajo</div>\n        <div class=\"r-panel-body\">\n          <div class=\"list-group b-0 mail-list\">\n            <a *ngFor=\"let ptrab of item.partestrabajo;\" (click)=\"verparte(ptrab)\" class=\"list-group-item\"><span\n                class=\"fa fa-circle text-warning m-r-10\"></span>Parte # {{ptrab.id}} Creación {{ptrab.created_at}} <br>\n              Técnico {{ptrab.usuario_respuesta.name}}</a>\n\n          </div>\n        </div>\n        <div class=\"rpanel-title\"><i class=\"ti-link\"></i> Incidencias Relacionadas</div>\n        <div class=\"r-panel-body\">\n          <div class=\"list-group b-0 mail-list\">\n            <a *ngFor=\"let ptrab of item.incidentes_relacionados;\" routerLink=\"/incidencia/edit/{{ptrab.id}}\"\n              target=\"_blank\" class=\"list-group-item\"><span class=\"fa fa-circle text-success m-r-10\"></span>{{ptrab.id}}\n              {{ptrab.titulo}} {{ptrab.created_at}}</a>\n          </div>\n        </div>\n\n\n      </div>\n    </div>\n    <!-- ============================================================== -->\n    <!-- End Right sidebar -->\n    <!-- ============================================================== -->\n  </div>\n  <!-- ============================================================== -->\n  <!-- End Container fluid  -->\n  <!-- ============================================================== -->\n</div>\n\n<swal #createSwal title=\"Firma Cliente\" [backdrop]=\"true\" [allowOutsideClick]=\"false\" [showCancelButton]=\"false\"\n  [showConfirmButton]=\"false\" [cancelButtonText]=\"'Cerrar'\" [confirmButtonText]=\"'Agregar'\" customClass=\"swal-wide\"\n  showCloseButton=\"true\">\n  <div *swalPartial>\n    <app-singuser (onvaluechanged)=\"onvaluechangedfirma($event)\" (oncancel)=\"cancelarfirma($event)\"></app-singuser>\n  </div>\n</swal>\n<swal #partetrabajoSwal title=\"Firma Cliente\" [backdrop]=\"true\" [allowOutsideClick]=\"false\" [showCancelButton]=\"false\"\n  [showConfirmButton]=\"false\" [cancelButtonText]=\"'Cerrar'\" [confirmButtonText]=\"'Agregar'\" customClass=\"swal-wide\"\n  showCloseButton=\"true\">\n  <div *swalPartial>\n\n    <div class=\"card-body \">\n      <h4><i class=\"ti-write\"></i> Parte de trabajo <a\n          href=\"{{apiurl+'storage/respuestas/resp_'+respuestaview.id+'.pdf'}}\" download>Descargar Pdf</a></h4>\n      <form action=\"#\" class=\"row\" id=\"form-rta\">\n        <div class=\"form-group col-lg-4\">\n          <label class=\"control-label\">N° {{respuestaview.manual?'Manual':''}}</label>\n          <input type=\"text\" id=\"numerorespuesta\" class=\"form-control\" placeholder=\"numero Respuesta\"\n            [(ngModel)]=\"respuestaview.id\" name=\"numerorespuesta\">\n\n        </div>\n        <div class=\"form-group col-lg-4\">\n          <label class=\"control-label\">Técnico</label>\n          <input type=\"text\" id=\"tecnicorespuesta\" class=\"form-control\" placeholder=\"Tecnico Respuesta\"\n            [(ngModel)]=\"respuestaview.usuario_respuesta.name\" name=\"tecnicorespuesta\">\n\n        </div>\n        <div class=\"form-group col-lg-4\">\n          <label class=\"control-label\">Fecha Registro</label>\n          <input type=\"text\" id=\"fecharespuesta\" class=\"form-control\" placeholder=\"fecha Respuesta\"\n            [(ngModel)]=\"respuestaview.created_at\" name=\"fecharespuesta\">\n\n        </div>\n\n\n        <div class=\"form-group col-lg-12\">\n          <label class=\"control-label\">Parte de trabajo de la incidencia</label>\n\n          <ckeditor [(ngModel)]=\"respuestaview.descripcion\" #myckeditor=\"ngModel\" name=\"rtackeditor\"\n            [config]=\"ckeConfig\" debounce=\"500\">\n          </ckeditor>\n\n\n        </div>\n        <div class=\"form-group  col-lg-3\">\n          <label class=\"control-label\">Estado Parte de trabajo *</label>\n          <select class=\"form-control custom-select\" [(ngModel)]=\"respuestaview.estadorespuesta\"\n            name=\"ctrlestadorespuesta\" required>\n            <option value=\"\">Seleccione</option>\n            <option value=\"TE\">Terminada</option>\n            <option value=\"PM\">Pendiente por material</option>\n            <option value=\"PC\">Pendiente por restricciones de cliente.</option>\n            <option value=\"PS\">Pendiente por seguridad</option>\n          </select>\n        </div>\n        <div class=\"form-group  col-lg-3\">\n          <label class=\"control-label\">Tiempo Solución (Horas)</label>\n          <input type=\"number\" id=\"tiemporespuesta\" class=\"form-control\" placeholder=\"Tiempo Solucion\"\n            [(ngModel)]=\"respuestaview.tiemporespuesta\" name=\"tiemporespuesta\">\n\n        </div>\n        <div class=\"form-group  col-lg-3\">\n          <label class=\"control-label\">Tiempo Recorrido (Horas)</label>\n          <input type=\"number\" id=\"tiemporecorrisorespuesta\" class=\"form-control\" placeholder=\"Tiempo Solucion\"\n            [(ngModel)]=\"respuestaview.horasdistancia\" name=\"tiemporecorrisorespuesta\">\n\n        </div>\n        <div class=\"form-group  col-lg-3\">\n          <label class=\"control-label\">Distancia (Kms)</label>\n          <input type=\"number\" id=\"distanciarespuesta\" class=\"form-control\" placeholder=\"Tiempo Solucion\"\n            [(ngModel)]=\"respuestaview.distanciareportada\" name=\"distanciarespuesta\">\n\n        </div>\n\n      </form>\n    </div>\n  </div>\n</swal>\n\n<swal #cierremanualSwal title=\"Cierre manual Incidencia\" [backdrop]=\"true\" [allowOutsideClick]=\"false\"\n  [showCancelButton]=\"true\" [showConfirmButton]=\"true\" [cancelButtonText]=\"'Cerrar'\" [confirmButtonText]=\"'Guardar'\"\n  showCloseButton=\"true\" (confirm)=\"add(true)\">\n  <div *swalPartial>\n\n    <div class=\"card-body \">\n      <h4><i class=\"ti-write\"></i> Cierre manual Incidencia</h4>\n      <form action=\"#\" class=\"row\" id=\"form-rta\">\n        <div class=\"form-group col-lg-12\">\n          <label class=\"control-label\">N° Parte</label>\n          <select id=\"numerorespuesta\" class=\"form-control\" placeholder=\"N° Parte\" name=\"numerorespuesta\"\n            [(ngModel)]=\"item.no_parte_manual\">\n            <option value=\"\">Seleccione</option>\n            <option *ngFor=\"let ptrab of item.partestrabajo\" [value]=\"ptrab.id\">\n              {{ ptrab.id }} Creación {{ptrab.created_at}} {{ptrab.manual?'Parte Manual':''}}\n\n            </option>\n          </select>\n\n        </div>\n        <div class=\"form-group col-lg-12\">\n          <label class=\"control-label\">Observaciones</label>\n          <textarea class=\"form-control\" placeholder=\"Observaciones\" name=\"tecnicorespuesta\"\n            [(ngModel)]=\"item.obs_parte_manual\"></textarea>\n\n        </div>\n\n\n\n\n      </form>\n    </div>\n  </div>\n</swal>\n\n"

/***/ }),

/***/ "./src/app/incidencias/incidencia-edit/incidencia-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IncidenciaEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__incidencia_service__ = __webpack_require__("./src/app/incidencias/incidencia.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__ = __webpack_require__("./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__clientes_cliente_service__ = __webpack_require__("./src/app/clientes/cliente.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_datepicker__ = __webpack_require__("./node_modules/ngx-bootstrap/datepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tipocontrato_tipocontrato_service__ = __webpack_require__("./src/app/tipocontrato/tipocontrato.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__estacionservicio_estacionservicio_service__ = __webpack_require__("./src/app/estacionservicio/estacionservicio.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__viewmodel_estacionservicio__ = __webpack_require__("./src/app/viewmodel/estacionservicio.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__toverux_ngx_sweetalert2__ = __webpack_require__("./node_modules/@toverux/ngx-sweetalert2/esm5/toverux-ngx-sweetalert2.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__viewmodel_componente_actuacion__ = __webpack_require__("./src/app/viewmodel/componente_actuacion.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__viewmodel_incidencia__ = __webpack_require__("./src/app/viewmodel/incidencia.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_file_upload__ = __webpack_require__("./node_modules/ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__mocks_estadoincidente__ = __webpack_require__("./src/app/mocks/estadoincidente.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__viewmodel_respuesta__ = __webpack_require__("./src/app/viewmodel/respuesta.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__respuesta_respuestas_service__ = __webpack_require__("./src/app/respuesta/respuestas.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__articulo_articulo_service__ = __webpack_require__("./src/app/articulo/articulo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__viewmodel_MaterialRespuesta__ = __webpack_require__("./src/app/viewmodel/MaterialRespuesta.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__viewmodel_comentario_incidente__ = __webpack_require__("./src/app/viewmodel/comentario_incidente.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__comentarioincidente_comentarioincidente_service__ = __webpack_require__("./src/app/comentarioincidente/comentarioincidente.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__viewmodel_tecnicoadicional__ = __webpack_require__("./src/app/viewmodel/tecnicoadicional.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__shared_can_deactivate_guard_can_deactivate_guard_service__ = __webpack_require__("./src/app/shared/can-deactivate-guard/can-deactivate-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__archivoupload_archivoupload_service__ = __webpack_require__("./src/app/archivoupload/archivoupload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__shared_location_location_service__ = __webpack_require__("./src/app/shared/location/location.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__shared_auditoria_auditoria_service__ = __webpack_require__("./src/app/shared/auditoria/auditoria.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__proyectos_proyectos_service__ = __webpack_require__("./src/app/proyectos/proyectos.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};































var IncidenciaEditComponent = /** @class */ (function () {
    function IncidenciaEditComponent(spinnerService, incidenciaService, router, notificationService, localDataService, clienteService, localeService, tipocontratoService, estacionservicioService, route, respuestaService, archivouploadService, articuloService, comentarioincidenteService, candeactivateguard, locationService, auditoriaService, proyectosService) {
        var _this = this;
        this.spinnerService = spinnerService;
        this.incidenciaService = incidenciaService;
        this.router = router;
        this.notificationService = notificationService;
        this.localDataService = localDataService;
        this.clienteService = clienteService;
        this.localeService = localeService;
        this.tipocontratoService = tipocontratoService;
        this.estacionservicioService = estacionservicioService;
        this.route = route;
        this.respuestaService = respuestaService;
        this.archivouploadService = archivouploadService;
        this.articuloService = articuloService;
        this.comentarioincidenteService = comentarioincidenteService;
        this.candeactivateguard = candeactivateguard;
        this.locationService = locationService;
        this.auditoriaService = auditoriaService;
        this.proyectosService = proyectosService;
        this.uploader = new __WEBPACK_IMPORTED_MODULE_14_ng2_file_upload__["FileUploader"]({
            url: __WEBPACK_IMPORTED_MODULE_15__environments_environment__["a" /* environment */].apiUrl + 'api/archivoincidencia',
            authTokenHeader: "Authorization",
            authToken: "Bearer " + localStorage.getItem('access_token'),
            isHTML5: true,
            autoUpload: true,
            maxFileSize: 5 * 1024 * 1024,
        });
        this.name = 'ng2-ckeditor';
        this.estadoincidente = __WEBPACK_IMPORTED_MODULE_17__mocks_estadoincidente__["a" /* ESTADOINCIDENCIAS */];
        this.txterror = "";
        this.disablesave = false;
        this.currentPrioridad = null;
        this.usuariostec = [];
        this.tipofotosiniestro = '';
        this.hasBaseDropZoneOver = false;
        this.hasAnotherDropZoneOver = false;
        this.localeService.use('es');
        this.candeactivateguard.setedit(true);
        this.dataSource = __WEBPACK_IMPORTED_MODULE_5_rxjs__["Observable"].create(function (observer) {
            // Runs on every search
            _this.clienteService.gettoken(_this.item.razonsocial).subscribe(function (value) {
                observer.next(value.data);
            });
        });
        this.edit = true;
        this.dataSource_art = __WEBPACK_IMPORTED_MODULE_5_rxjs__["Observable"].create(function (observer) {
            // Runs on every search
            _this.articuloService.gettoken(_this.articulodesc).subscribe(function (value) {
                observer.next(value.data);
            });
        });
        this.apiurl = __WEBPACK_IMPORTED_MODULE_15__environments_environment__["a" /* environment */].apiUrl;
        this.tecnicoadicionalnew = new __WEBPACK_IMPORTED_MODULE_24__viewmodel_tecnicoadicional__["a" /* Tecnicoadicional */]();
        this.tecnicoadicionalnew.id_usuario = -1;
    }
    IncidenciaEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ckeConfig = {
            allowedContent: false,
            extraPlugins: 'divarea',
            forcePasteAsPlainText: true,
        };
        this.ckeConfigdesc = {
            allowedContent: false,
            extraPlugins: 'divarea',
            forcePasteAsPlainText: true
        };
        this.ckeConfigcom = {
            allowedContent: false,
            extraPlugins: 'divarea',
            forcePasteAsPlainText: true,
            toolbar: [{ name: 'basicstyles', items: ['Bold', 'Italic', 'Strike'] }],
        };
        this.item = new __WEBPACK_IMPORTED_MODULE_13__viewmodel_incidencia__["a" /* Incidencia */];
        this.item.cliente_id = '';
        this.item.estacion_servicio_id = -1;
        this.item.categoria_incidente_id = -1;
        this.item.imagenes = [];
        this.cargarTipoCOntrato();
        this.cargarEstacionServicio();
        this.newcompo = new __WEBPACK_IMPORTED_MODULE_10__viewmodel_estacionservicio__["a" /* estacionservicio */]();
        this.prioridades = [];
        this.irespuesta = new __WEBPACK_IMPORTED_MODULE_18__viewmodel_respuesta__["a" /* Respuesta */]();
        this.materialnew = new __WEBPACK_IMPORTED_MODULE_21__viewmodel_MaterialRespuesta__["a" /* MaterialRespuesta */]();
        this.irespuesta.materiales = [];
        this.irespuesta.manual = false;
        this.getById();
        this.user = this.localDataService.getLocalData('userInfo');
        this.irespuesta.estadorespuesta = "";
        this.uploader.onAfterAddingFile = function (file) { file.withCredentials = false; };
        this.uploader.onErrorItem = function (item, response, status, headers) { return _this.onErrorItem(item, response, status, headers); };
        this.uploader.onSuccessItem = function (item, response, status, headers) { return _this.onSuccessItem(item, response, status, headers); };
        this.uploader.onWhenAddingFileFailed = function (fileItem) {
            _this.notificationService.onError('La imagen no se pudo cargar, '
                + 'el tamaño maximo es de 5MB y el formato es png o jpg, INtentelo nuevamente');
        };
        this.comentarionew = new __WEBPACK_IMPORTED_MODULE_22__viewmodel_comentario_incidente__["a" /* ComentarioIncidente */]();
    };
    IncidenciaEditComponent.prototype.onChange = function ($event) {
        console.log("onChange");
    };
    IncidenciaEditComponent.prototype.getById = function () {
        var _this = this;
        this.spinnerService.show();
        var $id = this.route.snapshot.paramMap.get('id');
        this.uploader.options.additionalParameter = { incidencia_id: $id, tipofotosiniestro: this.tipofotosiniestro };
        this.irespuesta.id_incidencia = $id;
        this.incidenciaService.getById($id)
            .subscribe(function (response) {
            _this.item = response.data;
            _this.usuariostecparte = response.data.usuariostecparte;
            _this.usuariostec = _this.removeMainUser(response.data.usuariostec, _this.item.usuario_asignado.id);
            _this.edit = response.data.mismo;
            if (response.data.mismo && _this.item.estado != "TRA" && _this.item.estado != "PTE" && _this.item.estado != "CLO") {
                _this.candeactivateguard.setedit(false);
                _this.router.navigateByUrl('incidencia');
            }
            if (_this.item.tiempo && _this.item.estado == 'TRA') {
                _this.irespuesta.tiemporespuesta = Math.round((_this.item.tiempo / 60 / 60) * 100) / 100;
                _this.irespuesta.distanciareportada = Math.round((_this.item.distanciacalculada / 1000) * 100) / 100;
                _this.irespuesta.horasdistancia = Math.round((_this.item.t_deplazamiento / 60 / 60) * 100) / 100;
            }
            if (!__WEBPACK_IMPORTED_MODULE_16_moment__(_this.item.fecha_vencimiento, 'DD/MM/YYYY').isValid()) {
                _this.item.fecha_vencimiento = __WEBPACK_IMPORTED_MODULE_16_moment__(_this.item.fecha_vencimiento).toDate();
            }
            _this.cargarEstacionServicio();
            if (response.data.contrato_componente != null) {
                _this.prioridades = response.data.contrato_componente.contrato.tipocontrato.categoriaincidentes;
                _this.currentPrioridad = _this.prioridades.find(function (it) {
                    return it.id == _this.item.categoria_incidente_id;
                });
            }
            _this.cargarProyectos();
            _this.spinnerService.hide();
        });
    };
    IncidenciaEditComponent.prototype.cargarTipoCOntrato = function () {
        var _this = this;
        this.tipocontratoService.get(1).subscribe(function (value) {
            _this.tipocontrato = value.data;
        });
    };
    /**
     * It takes an array of objects and an id, and returns a new array of objects with the object that
     * has the matching id removed
     * @param data - the array of objects
     * @param id - the id of the user to be removed
     * @returns a new array with the user removed.
     */
    IncidenciaEditComponent.prototype.removeMainUser = function (data, id) {
        return data.filter(function (user) { return user.id != id; });
    };
    IncidenciaEditComponent.prototype.cargarEstacionServicio = function () {
        var _this = this;
        var empresa = 0;
        this.spinnerService.show();
        empresa = this.localDataService.getLocalData('empresaSeleccionada').id;
        this.estacionservicioService.getbycliente(empresa, this.item.cliente_id).subscribe(function (value) {
            _this.estacionservicio = value.data;
            if (_this.item.estacion_servicio_id != -1) {
                var result = _this.estacionservicio.filter(function (comp) { return comp.id.toString() == _this.item.estacion_servicio_id; });
                if (result.length > 0) {
                    _this.newcompo = result[0];
                    _this.quitarobservaciones();
                    _this.setobservacioncontrato();
                }
            }
            else {
                _this.newcompo = new __WEBPACK_IMPORTED_MODULE_10__viewmodel_estacionservicio__["a" /* estacionservicio */]();
            }
            _this.spinnerService.hide();
        });
    };
    IncidenciaEditComponent.prototype.setobservacioncontrato = function () {
        var _this = this;
        this.newcompo.componentes.forEach(function (element) {
            if (element.contratos.length > 0) {
                element.contratos.forEach(function (contrato) {
                    if (contrato.id == _this.item.contrato_componente_id) {
                        element.observacionescontrato = contrato.contrato.observaciones;
                        element.archivos = contrato.contrato.archivos;
                    }
                });
            }
        });
    };
    IncidenciaEditComponent.prototype.onselectEstacionServicio = function (estacionserviciosel) {
        if (estacionserviciosel.target.value != '-1') {
            var result = this.estacionservicio.filter(function (comp) { return comp.id.toString() == estacionserviciosel.target.value; });
            if (result.length > 0) {
                this.newcompo = result[0];
            }
        }
        else {
            this.newcompo = new __WEBPACK_IMPORTED_MODULE_10__viewmodel_estacionservicio__["a" /* estacionservicio */]();
        }
    };
    IncidenciaEditComponent.prototype.onselecttipocontrato = function (tipocontratovalue) {
        var result;
        result = this.tipocontrato.filter(function (comp) { return comp.id.toString() == tipocontratovalue.target.value; });
        if (result.length > 0) {
            this.tipocontratosel = result[0];
        }
    };
    IncidenciaEditComponent.prototype.add = function (cierreManual) {
        var _this = this;
        this.validform = false;
        if (this.ctrlform.form.valid == false) {
            this.validform = true;
            return false;
        }
        if (this.item.proyecto_id == '-1') {
            this.validform = true;
            return false;
        }
        this.disablesave = true;
        this.txterror = "";
        this.spinnerService.show();
        this.candeactivateguard.setedit(false);
        this.item.empresa_id = this.localDataService.getLocalData('empresaSeleccionada').id;
        this.item.usuario_id = this.localDataService.getLocalData('userInfo').id;
        this.item.estacion_servicio_id = this.newcompo.id;
        this.item.manual = cierreManual;
        if (this.item.fecha_programacion != undefined && this.item.fecha_programacion != null && this.item.fecha_programacion != '') {
            if (this.item.hora_programacion != undefined && this.item.hora_programacion != null
                && this.item.hora_programacion != '') {
                if (!__WEBPACK_IMPORTED_MODULE_16_moment__(this.item.fecha_programacion, 'DD/MM/YYYY').isValid()) {
                    this.item.fecha_programacion = __WEBPACK_IMPORTED_MODULE_16_moment__(this.item.fecha_programacion).format("YYYY-MM-DD");
                }
                else {
                    this.item.fecha_programacion = __WEBPACK_IMPORTED_MODULE_16_moment__(this.item.fecha_programacion, 'DD/MM/YYYY').format("YYYY-MM-DD");
                }
                this.item.fecha_programacion = __WEBPACK_IMPORTED_MODULE_16_moment__(this.item.fecha_programacion + ' ' + this.item.hora_programacion).format("DD-MM-YYYY HH:mm:ss");
            }
            else {
                if (!__WEBPACK_IMPORTED_MODULE_16_moment__(this.item.fecha_programacion, 'DD/MM/YYYY').isValid()) {
                    this.item.fecha_programacion = __WEBPACK_IMPORTED_MODULE_16_moment__(this.item.fecha_programacion).format("YYYY-MM-DD");
                }
                else {
                    this.item.fecha_programacion = __WEBPACK_IMPORTED_MODULE_16_moment__(this.item.fecha_programacion, 'DD/MM/YYYY').format("YYYY-MM-DD");
                }
                this.item.fecha_programacion = __WEBPACK_IMPORTED_MODULE_16_moment__(this.item.fecha_programacion + ' ' + '00:00:00').format("DD-MM-YYYY HH:mm:ss");
            }
        }
        this.incidenciaService.update(this.item)
            .subscribe(function (value) {
            if (value.data.errorusu == 1) {
                _this.notificationService.onError('No se puede asignar el usuario por que es tecnico adicional');
            }
            else {
                _this.notificationService.onSuccess('Incidencia Actualizada con exito.');
                _this.router.navigateByUrl('incidencia');
            }
            _this.registrarauditoria('Actualizar incidente', 'Guardar', _this.item.id);
            _this.spinnerService.hide();
            _this.disablesave = false;
        }, function (err) {
            _this.disablesave = false;
            _this.spinnerService.hide();
            if (err.status_code == 422) {
                _this.txterror = 'El Contrato ya existe';
                _this.notificationService.onError('El Contrato ya existe');
            }
            else if (err.status_code == 400) {
                _this.txterror = err.errors.message;
                _this.notificationService.onError(err.errors.message);
            }
            else {
                _this.txterror = 'Se ha producido un error.';
                _this.notificationService.onError('Se ha producido un error. <br>');
            }
        });
    };
    IncidenciaEditComponent.prototype.cerrarmanual = function () {
        this.cierremanualSwal.show();
        return false;
    };
    IncidenciaEditComponent.prototype.changeTypeaheadLoading = function (e) {
        this.typeaheadLoading = e;
    };
    IncidenciaEditComponent.prototype.typeaheadOnSelect = function (e) {
        this.item.cliente_id = e.item.codigo_cliente;
        this.cargarEstacionServicio();
    };
    IncidenciaEditComponent.prototype.cargarProyectos = function () {
        var _this = this;
        this.proyectosService.getproybycliente(this.item.cliente_id).subscribe(function (res) {
            _this.proyects = res.data;
            _this.selectProyect = _this.proyects.find(function (p) { return p.codigo_proyecto === _this.item.proyecto_id; });
        }, function (err) {
        });
    };
    IncidenciaEditComponent.prototype.onChangeProyect = function (proyect) {
        if (proyect && proyect != -1) {
            this.item.proyecto_id = proyect.codigo_proyecto;
            this.item.proyecto_description = proyect.descripcion;
        }
        else {
            this.item.proyecto_id = null;
            this.item.proyecto_description = null;
        }
    };
    IncidenciaEditComponent.prototype.changeTypeaheadLoading_art = function (e) {
        this.typeaheadLoading_art = e;
    };
    IncidenciaEditComponent.prototype.typeaheadOnSelect_art = function (e) {
        this.materialnew.nombre = e.item.descripcion;
        this.materialnew.referencia = e.item.codigo_articulo;
    };
    IncidenciaEditComponent.prototype.agregarmaterial = function () {
        this.irespuesta.materiales.push(this.materialnew);
        this.materialnew = new __WEBPACK_IMPORTED_MODULE_21__viewmodel_MaterialRespuesta__["a" /* MaterialRespuesta */]();
        this.articulodesc = "";
    };
    IncidenciaEditComponent.prototype.selectComponent = function (comp) {
        if (comp.select) {
            comp.select = false;
        }
        else {
            comp.select = true;
        }
        return false;
    };
    IncidenciaEditComponent.prototype.modalactuacion = function (item) {
        this.componentesel = item;
        if (!this.componentesel.actuaciones) {
            this.componentesel.actuaciones = [];
        }
        this.createSwal.show();
        return false;
    };
    IncidenciaEditComponent.prototype.agregaractuacion = function () {
        this.componentesel.actuaciones.push(this.actuacionesNew);
        this.actuacionesNew = new __WEBPACK_IMPORTED_MODULE_12__viewmodel_componente_actuacion__["a" /* ComponenteActuacion */]();
        this.actuacionesNew.tipo = '-1';
    };
    IncidenciaEditComponent.prototype.onvaluechanged = function (value) {
        if (value.index === undefined || value.index === '') {
            this.actuacionesNew.dias = value.dias;
        }
        else {
            this.componentesel.actuaciones[value.index].dias = value.dias;
        }
    };
    IncidenciaEditComponent.prototype.clickcontrato = function (contrato, row) {
        this.quitarobservaciones();
        this.prioridades = contrato.contrato.tipocontrato.categoriaincidentes;
        this.item.contrato_componente_id = contrato.id;
        row.observacionescontrato = contrato.contrato.observaciones;
        row.archivos = contrato.contrato.archivos;
    };
    IncidenciaEditComponent.prototype.quitarobservaciones = function () {
        this.newcompo.componentes.forEach(function (element) {
            element.observacionescontrato = "";
            element.archivos = [];
        });
    };
    IncidenciaEditComponent.prototype.getclassestadoincidencia = function (estado) {
        var result;
        result = this.estadoincidente.filter(function (estadoinc) { return estadoinc.value === estado; });
        return result.length > 0 ? result[0].label : '';
    };
    IncidenciaEditComponent.prototype.onErrorItem = function (item, response, status, headers) {
        var error = JSON.parse(response); //error server response
        console.log(error);
    };
    IncidenciaEditComponent.prototype.fileOverBase = function (e) {
        this.uploader.options.additionalParameter = { incidencia_id: this.irespuesta.id_incidencia, tipofotosiniestro: this.tipofotosiniestro };
        this.hasBaseDropZoneOver = e;
    };
    IncidenciaEditComponent.prototype.fileOverAnother = function (e) {
        this.uploader.options.additionalParameter = { incidencia_id: this.irespuesta.id_incidencia, tipofotosiniestro: this.tipofotosiniestro };
        this.hasAnotherDropZoneOver = e;
    };
    IncidenciaEditComponent.prototype.onSuccessItem = function (item, response, status, headers) {
        if (this.item.imagenes == undefined || this.item.imagenes == null) {
            this.item.imagenes = [];
        }
        this.item.imagenes.push($.parseJSON(response).data);
    };
    IncidenciaEditComponent.prototype.tooglerogthmenu = function () {
        $('body').toggleClass('rmv-right-panel');
    };
    IncidenciaEditComponent.prototype.guardarrespuesta = function () {
        var _this = this;
        this.validform = false;
        if (this.ctrlformrta.form.valid == false) {
            console.log("validdd");
            this.validform = true;
            return false;
        }
        this.disablesave = true;
        this.txterror = "";
        this.spinnerService.show();
        this.candeactivateguard.setedit(false);
        console.log("eeeeee");
        this.locationService.getCurrentPosition().subscribe(function (positiongps) {
            console.log(positiongps, "positiongps");
            _this.registrarRespuesta(positiongps.coords);
        }, function (err) {
            console.log('error');
        });
    };
    IncidenciaEditComponent.prototype.registrarRespuesta = function (positionGps) {
        var _this = this;
        console.log("registrarRespuesta");
        if (this.item.contrato_componente_id != undefined || this.item.sincontrato != undefined) {
            this.irespuesta.latrespuesta = positionGps.latitude;
            this.irespuesta.longrespuesta = positionGps.longitude;
            if (this.irespuesta.created_at != undefined) {
                this.irespuesta.created_at = __WEBPACK_IMPORTED_MODULE_16_moment__(this.irespuesta.created_at).format("DD-MM-YYYY HH:mm:ss");
            }
            this.respuestaService.add(this.irespuesta)
                .subscribe(function (value) {
                console.log(value, "respuestaService");
                _this.disablesave = false;
                _this.spinnerService.hide();
                _this.registrarauditoria('respuesta', 'Guardar', value.id);
                console.log(value, "respuesta¡¡¡");
                console.log(value.data, "error");
                if (typeof value.data !== 'undefined') {
                    console.log("paso 0");
                    if (value.data.errorrepo == 1) {
                        _this.notificationService.onError('Existen tecnicos asociados sin terminar.');
                    }
                    else if (value.data.errorfotosiniestro == 1) {
                        _this.notificationService.onError('No tiene las imagenes de antes y despues del siniestro.');
                    }
                }
                if (_this.irespuesta.manual == true) {
                    console.log("paso 1");
                    _this.irespuesta = new __WEBPACK_IMPORTED_MODULE_18__viewmodel_respuesta__["a" /* Respuesta */]();
                    _this.getById();
                    _this.notificationService.onSuccess('Respuesta agregada con exito.');
                    _this.materialnew = new __WEBPACK_IMPORTED_MODULE_21__viewmodel_MaterialRespuesta__["a" /* MaterialRespuesta */]();
                    _this.irespuesta.materiales = [];
                    _this.irespuesta.manual = false;
                }
                else {
                    console.log("paso 2");
                    _this.notificationService.onSuccess('Respuesta agregada con exito.');
                    _this.router.navigateByUrl('incidencia');
                }
            }, function (err) {
                _this.disablesave = false;
                _this.spinnerService.hide();
                if (err.status_code == 422) {
                    _this.txterror = "El Respuesta ya existe";
                    _this.notificationService.onError('El Respuesta ya existe');
                }
                else if (err.status_code == 400) {
                    _this.txterror = err.errors.message[0];
                    _this.notificationService.onError(err.errors.message[0]);
                }
                else {
                    _this.txterror = "Se ha producido un error.";
                    _this.notificationService.onError('Se ha producido un error.');
                }
            });
        }
        else {
            this.txterror = "Para registrar el parte de trabajo debe seleccionar un contrato.";
            this.notificationService.onError('Para registrar el parte de trabajo debe seleccionar un contrato.');
            this.spinnerService.hide();
            this.disablesave = false;
        }
    };
    IncidenciaEditComponent.prototype.abrirfirma = function () {
        $("#contenedorsign").css('display', 'none');
        this.createSwal.show();
    };
    IncidenciaEditComponent.prototype.onvaluechangedfirma = function (value) {
        $("#contenedorsign").css('display', '');
        this.irespuesta.firmacliente = value;
        this.createSwal.nativeSwal.close();
    };
    IncidenciaEditComponent.prototype.cancelarfirma = function (value) {
        $("#contenedorsign").css('display', '');
        this.createSwal.nativeSwal.close();
    };
    IncidenciaEditComponent.prototype.ngAfterViewInit = function () {
        $('.mini-nav, .sidebar-menu, .right-side-panel, .message-center, .right-sidebar').perfectScrollbar();
    };
    IncidenciaEditComponent.prototype.FieldsChange = function (values) {
        this.materialnew.pedido = values.currentTarget.checked;
    };
    IncidenciaEditComponent.prototype.ocultarmenu = function () {
        $('body').toggleClass('rmv-right-panel');
    };
    IncidenciaEditComponent.prototype.addcomentario = function () {
        var _this = this;
        if (this.item.comentarios == undefined) {
            this.item.comentarios = [];
        }
        this.comentarionew.id_incidencia = this.item.id;
        this.comentarioincidenteService.add(this.comentarionew)
            .subscribe(function (value) {
            _this.item.comentarios.push(value.data);
            _this.comentarionew = new __WEBPACK_IMPORTED_MODULE_22__viewmodel_comentario_incidente__["a" /* ComentarioIncidente */]();
            _this.notificationService.onSuccess('Comentario agregado con exito.');
        }, function (err) {
            _this.spinnerService.hide();
            if (err.status_code == 422) {
                _this.notificationService.onError('Comentario ya existe');
            }
            else {
                _this.notificationService.onError('Se ha producido un error.');
            }
        });
    };
    IncidenciaEditComponent.prototype.calculardias = function (fecha) {
        var actual = __WEBPACK_IMPORTED_MODULE_16_moment__();
        fecha = __WEBPACK_IMPORTED_MODULE_16_moment__(fecha);
        var diff = actual.diff(fecha, 'days');
        return diff;
    };
    IncidenciaEditComponent.prototype.verparte = function (ptrab) {
        this.respuestaview = ptrab;
        this.partetrabajoSwal.show();
        return false;
    };
    IncidenciaEditComponent.prototype.agregartecnicoadicional = function () {
        var _this = this;
        if (this.tecnicoadicionalnew.id_usuario != -1) {
            if (this.item.tecnicosadicionales == undefined) {
                this.item.tecnicosadicionales = [];
            }
            var resul = this.usuariostec.filter(function (tec) { return tec.id == _this.tecnicoadicionalnew.id_usuario; });
            resul[0].selected = true;
            this.tecnicoadicionalnew.usuario = resul[0];
            this.tecnicoadicionalnew.observaciones = this.tecnicoadicionalnew.observaciones ? this.tecnicoadicionalnew.observaciones : 'N/A';
            this.item.tecnicosadicionales.push(this.tecnicoadicionalnew);
            this.tecnicoadicionalnew = new __WEBPACK_IMPORTED_MODULE_24__viewmodel_tecnicoadicional__["a" /* Tecnicoadicional */]();
            this.tecnicoadicionalnew.id_usuario = -1;
        }
    };
    IncidenciaEditComponent.prototype.clicksincontrato = function (id) {
        this.prioridades = [];
        this.item.sincontrato = id;
        this.item.contrato_componente_id = null;
    };
    IncidenciaEditComponent.prototype.essiniestro = function (event) {
        this.item.siniestro = event.target.checked;
    };
    IncidenciaEditComponent.prototype.deleterecnico = function (i) {
        this.item.tecnicosadicionales.splice(i, 1);
    };
    IncidenciaEditComponent.prototype.selecttipofoto = function () {
        this.uploader.options.additionalParameter = { incidencia_id: this.irespuesta.id_incidencia, tipofotosiniestro: this.tipofotosiniestro };
    };
    IncidenciaEditComponent.prototype.eliminar_imagen = function (imagen) {
        var _this = this;
        this.archivouploadService.delete(imagen.id, 1).subscribe(function (value) {
            var indice = _this.item.imagenes.indexOf(imagen);
            _this.item.imagenes.splice(indice, 1);
            _this.notificationService.onSuccess('Imagen eliminada con exito.');
        });
    };
    IncidenciaEditComponent.prototype.registrarauditoria = function (campo, accion, desc) {
        var opcion = this.router.url;
        this.auditoriaService.add({
            id_incidencia: this.item.id, acccion: accion,
            campo: campo, opcion: opcion, descripcion: desc
        }).subscribe(function (value) {
            console.log('auditoria almacenada');
        });
    };
    IncidenciaEditComponent.prototype.gpsuser = function () {
        var _this = this;
        this.spinnerService.show();
        if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.geolocationPosition = position;
            }, function (error) {
                switch (error.code) {
                    case 1:
                        alert('Permission Denied To Gps');
                        break;
                    case 2:
                        alert('Position Unavailable To Gps');
                        break;
                    case 3:
                        alert('Timeout To Gps');
                        break;
                }
            });
        }
    };
    IncidenciaEditComponent.prototype.onChangeEstadoRespuesta = function (value) {
        this.showTipoPendienteMaterial = true;
        if (value == 'PM' && this.item.contrato_componente !== null
            && this.item.contrato_componente.contrato !== null
            && this.item.contrato_componente.contrato.tipocontrato_id !== null) {
            this.showGarantiaVentaMaterialP = true;
        }
    };
    IncidenciaEditComponent.prototype.esTecnico = function () {
        return this.user.relpefil.id == 1;
    };
    IncidenciaEditComponent.prototype.esContratoTipoGarantiaVenta = function () {
        return this.item.contrato_componente.contrato.tipocontrato_id == 2;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myckeditor'),
        __metadata("design:type", Object)
    ], IncidenciaEditComponent.prototype, "ckeditor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myckeditordesc'),
        __metadata("design:type", Object)
    ], IncidenciaEditComponent.prototype, "ckeditordesc", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('rtackeditor'),
        __metadata("design:type", Object)
    ], IncidenciaEditComponent.prototype, "rtackeditor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('createSwal'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_11__toverux_ngx_sweetalert2__["a" /* SwalComponent */])
    ], IncidenciaEditComponent.prototype, "createSwal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('partetrabajoSwal'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_11__toverux_ngx_sweetalert2__["a" /* SwalComponent */])
    ], IncidenciaEditComponent.prototype, "partetrabajoSwal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('cierremanualSwal'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_11__toverux_ngx_sweetalert2__["a" /* SwalComponent */])
    ], IncidenciaEditComponent.prototype, "cierremanualSwal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('ctrlform'),
        __metadata("design:type", Object)
    ], IncidenciaEditComponent.prototype, "ctrlform", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('ctrlformrta'),
        __metadata("design:type", Object)
    ], IncidenciaEditComponent.prototype, "ctrlformrta", void 0);
    IncidenciaEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-incidencia-edit',
            template: __webpack_require__("./src/app/incidencias/incidencia-edit/incidencia-edit.component.html"),
            styles: [__webpack_require__("./src/app/incidencias/incidencia-edit/incidencia-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__["Ng4LoadingSpinnerService"],
            __WEBPACK_IMPORTED_MODULE_2__incidencia_service__["a" /* IncidenciaService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__shared__["k" /* NotificationService */],
            __WEBPACK_IMPORTED_MODULE_4__shared__["i" /* LocalDataService */],
            __WEBPACK_IMPORTED_MODULE_6__clientes_cliente_service__["a" /* ClienteService */],
            __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_datepicker__["b" /* BsLocaleService */],
            __WEBPACK_IMPORTED_MODULE_8__tipocontrato_tipocontrato_service__["a" /* TipocontratoService */],
            __WEBPACK_IMPORTED_MODULE_9__estacionservicio_estacionservicio_service__["a" /* EstacionservicioService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_19__respuesta_respuestas_service__["a" /* RespuestasService */],
            __WEBPACK_IMPORTED_MODULE_26__archivoupload_archivoupload_service__["a" /* ArchivouploadService */],
            __WEBPACK_IMPORTED_MODULE_20__articulo_articulo_service__["a" /* ArticuloService */],
            __WEBPACK_IMPORTED_MODULE_23__comentarioincidente_comentarioincidente_service__["a" /* ComentarioincidenteService */],
            __WEBPACK_IMPORTED_MODULE_25__shared_can_deactivate_guard_can_deactivate_guard_service__["a" /* Candeactivateguard */],
            __WEBPACK_IMPORTED_MODULE_27__shared_location_location_service__["a" /* LocationService */],
            __WEBPACK_IMPORTED_MODULE_28__shared_auditoria_auditoria_service__["a" /* AuditoriaService */],
            __WEBPACK_IMPORTED_MODULE_29__proyectos_proyectos_service__["a" /* ProyectosService */]])
    ], IncidenciaEditComponent);
    return IncidenciaEditComponent;
}());



/***/ }),

/***/ "./src/app/incidencias/incidencia-index/incidencia-index.component.css":
/***/ (function(module, exports) {

module.exports = ".message-box .message-widget .active {\r\n    border-left: 2px solid #fec107;\r\n    background: #e9ecef;\r\n}\r\n@media (min-width: 767px){\r\n.inceidentescroll{\r\n    max-height: calc(100vh - 300px);\r\n    overflow-y: auto;\r\n}\r\n.inceidentescroll.inceidentescroll-short{\r\n    max-height: 300px;\r\n}\r\n.tecnicosScroll{\r\n    overflow: auto;\r\n    max-height:calc(100vh - 300px);\r\n}\r\n}\r\n.pointer-link{\r\n    cursor: pointer;\r\n}\r\n.inceidentescroll .table td{\r\n    padding: 5px;\r\n}\r\n.mail-contnet.all {\r\n    text-align: center;\r\n    width: 100% !important;\r\n}\r\n.mail-contnet.all h5 {\r\n    font-weight: 500;\r\n}\r\n.message-box .message-widget a:hover {\r\n    cursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/incidencias/incidencia-index/incidencia-index.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-wrapper\">\n  <!-- ============================================================== -->\n  <!-- Container fluid  -->\n  <!-- ============================================================== -->\n  <div class=\"container-fluid\">\n    <!-- ============================================================== -->\n    <!-- Bread crumb and right sidebar toggle -->\n    <!-- ============================================================== -->\n\n    <!-- ============================================================== -->\n    <!-- End Bread crumb and right sidebar toggle -->\n    <!-- ============================================================== -->\n    <!-- ============================================================== -->\n    <!-- Start Page Content -->\n    <!-- ============================================================== -->\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <div class=\"card\">\n          <div class=\"row\">\n            <div class=\"col-lg-2 col-md-4\">\n              <div class=\"card-body inbox-panel\">\n                <a routerLink=\"/incidencia/add\" *ngIf=\"!istec\"\n                  class=\"btn btn-info btn-rounded  m-b-20 p-10 btn-block waves-effect waves-light\"\n                > Nuevo Incidente</a>\n                <div class=\"message-box tecnicosScroll\">\n                  <div class=\"message-widget message-scroll\">\n\n                    <a (click)=\"selAll()\" name=\"all\" class=\"{{selected_all?'active':''}}\">\n                      <div class=\"mail-contnet all\">\n                        <h5>TODOS</h5>\n                      </div>\n                    </a>\n\n                    <ng-container *ngFor=\"let usr of usuarios\">\n                      <a (click)=\"selUsu(usr)\" name=\"usr{{usr.id}}\" class=\"{{usr.selected?'active':''}}\">\n                        <div class=\"mail-contnet\">\n                          <h5>{{usr.name}}</h5>\n                        </div>\n                      </a>\n                    </ng-container>\n\n\n                  </div>\n                </div>\n\n\n              </div>\n            </div>\n            <div class=\"col-lg-10 col-md-8 bg-light border-left\">\n              <div *ngIf=\"ususel\" class=\"card-body\">\n                <div class=\"btn-group m-b-10 m-r-10\" role=\"group\" aria-label=\"Button group with nested dropdown\">\n                  <button type=\"button\" class=\"btn btn-secondary font-18\" title=\"Remover Filtros\"\n                    (click)=\"removerfiltros()\"><i class=\"mdi mdi-filter-remove\"></i></button>\n                  <button type=\"button\" *ngIf=\"!verplaning\" class=\"btn btn-secondary font-18\" title=\"Ver programación\"\n                    (click)=\"verplanning()\"><i class=\"mdi mdi-calendar-clock\"></i></button>\n                  <button type=\"button\" *ngIf=\"verplaning\" class=\"btn btn-secondary font-18\" title=\"Ver Lista\"\n                    (click)=\"verlistamenu()\"><i class=\"mdi mdi-format-list-bulleted\"></i></button>\n\n                  <button type=\"button\" class=\"btn btn-secondary font-18\" (click)=\"verlistmaps()\"\n                    title=\"Estaciones en mapa\"><i class=\"mdi mdi-google-maps\"></i></button>\n                </div>\n                <div class=\"btn-group m-b-10 m-r-10\" role=\"group\" aria-label=\"Button group with nested dropdown\">\n\n                  <div class=\"btn-group\" role=\"group\">\n                    <button id=\"btnGroupDrop1\" type=\"button\" class=\"btn btn-secondary dropdown-toggle\"\n                      data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i\n                        class=\"mdi mdi-label font-18\"></i> </button>\n                    <div class=\"dropdown-menu\" aria-labelledby=\"btnGroupDrop1\">\n                      <a class=\"dropdown-item\" *ngFor=\"let ordervalue of order_values; let i=index;\"\n                        (click)=\"ordering(i)\">{{ordervalue.name}} {{ordervalue.estado}} <i\n                          class=\"ti-arrows-vertical\"></i></a>\n                    </div>\n\n                  </div>\n                  <div class=\"btn-group\" role=\"group\">\n\n                    <button id=\"btnGroupDrop2\" type=\"button\" class=\"btn btn-secondary dropdown-toggle\"\n                      data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i\n                        class=\"mdi mdi-label font-18 text-success\"></i> </button>\n                    <div class=\"dropdown-menu\" aria-labelledby=\"btnGroupDrop2\">\n                      <a class=\"dropdown-item\" *ngFor=\"let estacion of estacionesfilter; let i=index;\"\n                        (click)=\"filterestacion(estacion.id)\">{{estacion.name}} <span class=\"label label-success\">\n                          {{estacion.nocasosnew.length}}</span></a>\n                    </div>\n                  </div>\n                </div>\n                <button type=\"button \" class=\"btn btn-secondary m-r-10 m-b-10\" (click)=\"removerfiltros()\"><i\n                    class=\"mdi mdi-reload font-18\"></i></button>\n                <div class=\"btn-group\" role=\"group\">\n                  <button id=\"btnGroupDrop1\" type=\"button\" class=\"btn m-b-10 btn-secondary font-18\" aria-haspopup=\"true\"\n                    aria-expanded=\"false\" (click)=\"openmorefilters()\"> Mas Filtros</button>\n\n                </div>\n                <div class=\"btn-group \" role=\"group\">\n                  <button id=\"btnGroupDrop1\" type=\"button\" class=\"btn m-b-10 btn-secondary font-18 dropdown-toggle\"\n                    data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\"> Estados </button>\n                  <div class=\"dropdown-menu \" aria-labelledby=\"btnGroupDrop1\" x-placement=\"bottom-start\"\n                    style=\"position: absolute; transform: translate3d(0px, 41px, 0px); top: 0px; left: 0px; will-change: transform;\">\n\n                    <a *ngFor=\"let estinc of estadoincidente\" (click)=\"selEstado(estinc)\"\n                      class=\"dropdown-item {{estinc.selected?'active':''}}\"><span\n                        class=\"fa fa-circle {{estinc.color}} m-r-10\"></span>{{estinc.name}}</a>\n                  </div>\n                </div>\n                <div class=\"card-body p-t-0\" *ngIf=\"!(ususel && !verlista)\">\n                  <div class=\"card b-all shadow-none\">\n                    <div *ngIf=\"verplaning\" class=\"inbox-center table-responsive\">\n\n\n\n                      <ng-fullcalendar #ucCalendar [options]=\"calendarOptions\" [(eventsModel)]=\"incidencias\"\n                        (eventClick)=\"eventClick($event.detail)\" (eventDrop)=\"drop($event.detail)\"\n                        (eventResize)=\"updateEvent($event.detail)\" (clickButton)=\"clickButton($event.detail)\"\n                        (dayClick)=\"select($event.detail)\" (eventRender)=\"eventRender($event.detail)\"\n                        (navLinkDayClick)=\"selectDAY($event.detail)\"></ng-fullcalendar>\n\n                    </div>\n\n                    <div *ngIf=\"verlista\" class=\"inbox-center table-responsive inceidentescroll\"\n                      [ngClass]=\"{ 'inceidentescroll-short' : incidenceDetail }\">\n                      <table class=\"table table-hover\" id=\"example23\">\n                        <thead *ngIf=\"!istec\">\n                          <tr>\n                            <th>Acción</th>\n                            <th>Fecha de Creación</th>\n                            <th>N° Inc.</th>\n                            <th>Cod. SAP</th>\n                            <!-- <th>Cliente</th> -->\n                            <th>Estación</th>\n                            <th>Urgencia</th>\n                            <th>Título</th>\n                            <th>Tipo aviso</th>\n                            <th>Fecha Vencimiento</th>\n                            <th>Buzon</th>\n                            <th>Estado</th>\n                            <!-- <th>Tecnico</th>\n                             <th></th> -->\n                          </tr>\n                        </thead>\n                        <tbody *ngIf=\"!istec\">\n                          <ng-container *ngFor=\"let inc of incidencias; let i=index;\">\n                            <tr\n                              class=\"unread\"\n                              [ngClass]=\"{\n                                  'selected': inc.id == incidenceId,\n                                  'vencido': inc.vencido == 0,\n                                  'ok': inc.vencido != 0\n                              }\"\n                              (click)=\"onGetIncidenceById(inc.id)\"\n                            >\n                              <td style=\"width:40px\">\n\n                                <a class=\"preview\" [swal]=\"backwardSwal\"\n                                  *ngIf=\"!istec&& inc.estado!='CLO' && inc.estado!='INT'\" href=\"#\">\n                                  <i class=\" ti-control-backward  fa-2x\" title=\"Reiniciar Incidencia\"></i>\n                                </a>\n                                <swal #backwardSwal title=\"Desea reiniciar la incidencia?\"\n                                  text=\"Esta acción no se puede modificar.\" type=\"question\" [showCancelButton]=\"true\"\n                                  [focusCancel]=\"true\" (confirm)=\"onreiniciarincidente(inc)\">\n                                </swal>\n                                <a class=\"preview\" [swal]=\"skipSwal\"\n                                  *ngIf=\"istec&& inc.estado!='CLO' && inc.estado!='INT'\" href=\"#\">\n                                  <i class=\" ti-control-skip-backward fa-2x\" title=\"Saltar Incidencia\"></i>\n                                </a>\n                                <swal #skipSwal title=\"Desea frenara el recorrio de la incidencia?\"\n                                  text=\"Esta acción no se puede modificar.\" type=\"question\" [showCancelButton]=\"true\"\n                                  [focusCancel]=\"true\" (confirm)=\"onskipincidente(inc)\">\n                                </swal>\n\n                                <a class=\"preview\" *ngIf=\"istec\" href=\"#\" [swal]=\"llegadaSwal\">\n                                  <i *ngIf=\"inc.estado=='REC'\" class=\"ti-thumb-up  fa-2x\" title=\"Llegada al aviso\"></i>\n                                </a>\n\n                                <swal #llegadaSwal title=\"Llegada al aviso?\" text=\"Esta acción no se puede modificar.\"\n                                  type=\"question\" [showCancelButton]=\"true\" [focusCancel]=\"true\"\n                                  (confirm)=\"updateestado(inc)\">\n                                </swal>\n\n                                <a class=\"preview\" *ngIf=\"istec\" href=\"#\" [swal]=\"deleteSwal\"> <i\n                                    *ngIf=\"inc.estado=='PLA'||inc.estado=='PDA'\" class=\" ti-timer  fa-2x\"\n                                    title=\"En camino al aviso\"></i></a>\n                                <swal #deleteSwal title=\"En camino al aviso?\" text=\"Esta acción no se puede modificar.\"\n                                  type=\"question\" [showCancelButton]=\"true\" [focusCancel]=\"true\"\n                                  (confirm)=\"updateestado(inc,false,false)\">\n                                </swal>\n\n                                <a class=\"preview\" href=\"#\" [swal]=\"remoteSwal\"\n                                  *ngIf=\"(inc.estado!='CLO'&&inc.remoto&&inc.remotopausa)||inc.estado=='PLA'||inc.estado=='PDA'\">\n                                  <i class=\" ti-control-play fa-2x\" title=\"Iniciar Remoto\"></i></a>\n                                <swal #remoteSwal title=\"Va ha iniciar la incidencia teléfonicamente o remotamente?\"\n                                  text=\"Esta acción no se puede modificar.\" type=\"question\" [showCancelButton]=\"true\"\n                                  [focusCancel]=\"true\" (confirm)=\"updateestado(inc,true,false)\">\n                                </swal>\n                                <a *ngIf=\"!inc.remotopausa&&inc.estado=='TRA'&&inc.remoto\" class=\"preview\" href=\"#\"\n                                  [swal]=\"stopSwal\"> <i class=\"ti-control-pause fa-2x\"\n                                    title=\"Pausar Incidencia\"></i></a>\n                                <swal #stopSwal title=\"Desea Detener el Tiempo Para la Incidencia?\"\n                                  text=\"Esta acción no se puede modificar.\" type=\"question\" [showCancelButton]=\"true\"\n                                  [focusCancel]=\"true\" (confirm)=\"updateestado(inc,true,true)\">\n                                </swal>\n\n\n\n                              </td>\n\n                              <td><span class=\"pointer-link\">{{ inc.created_at\n                                  |date:'dd/MM/yyyy HH:mm:ss' }}</span></td>\n                              <td><span class=\"pointer-link\">{{ inc.id }}</span>\n                              </td>\n                              <td><span class=\"pointer-link\">{{ inc.codigosap\n                                  }}</span></td>\n                              <!-- <td><span class=\"pointer-link\">Hola {{ inc.razonsocial\n                                  }}</span></td> -->\n                              <td><span class=\"pointer-link\">{{\n                                  inc.estacion_servicio.name }} </span></td>\n                              <td><span class=\"pointer-link\">{{\n                                  inc.categoria_incidente == null ? ( inc.categoria_incidente_id == -2 ? 'Sin Prioridad'\n                                  : '' ) : inc.categoria_incidente.name }} </span></td>\n                              <td><span class=\"pointer-link\">\n                                  <div style=\"width: 300px;text-overflow: ellipsis;overflow: hidden;\">{{ inc.titulo }}\n                                  </div>\n                                </span></td>\n                              <td><span class=\"pointer-link\">{{ inc.actuacion }}\n                                </span></td>\n                              <td><span class=\"pointer-link\">{{\n                                  inc.fecha_vencimiento |date:'dd/MM/yyyy HH:mm:ss' }}</span></td>\n                              <td>\n                                <span class=\"pointer-link\">{{inc.usuario_inbox?.name}}</span>\n                                <span class=\"pointer-link\" title=\"Asignar Imbox\" (click)=\"selectedUserInbox( inc.id )\"><i class=\"ti-user\"></i></span>\n                              </td>\n                              <td><span class=\"pointer-link\">{{ inc.estado\n                                  }}</span></td>\n\n                              <!-- <td class=\"max-texts\" style=\"max-width: 40%; \"\n                                routerLink=\"/incidencia/{{inc.estado=='CLO'?'resumen':'edit'}}/{{inc.id}}\"> <a\n                                  routerLink=\"/incidencia/{{inc.estado=='CLO'?'resumen':'edit'}}/{{inc.id}}\">\n                                  <span\n                                    class=\"badge badge-pill {{getclassestadoincidencia(inc.estado)}} float-left\">#{{inc.id}}\n                                    - {{inc.estado}}</span><br>\n                                  Empresa: {{inc.razonsocial}}\n                                  <br>Estacion: {{inc.estacion_servicio.name}}({{inc.estacion_servicio.direccion}})\n                                  <span *ngIf=\"inc.distanciacalculada!=undefined\"><br> D: {{(inc.distanciacalculada/1000)\n                                  | number }} KM. T: {{(inc.tiempo/60/60) | number}} HRS.</span>\n                                  <span *ngIf=\"inc.remoto\"><br>Soporte remoto.</span>\n                                  <br>Titulo: {{inc.titulo}}\n                                  <span *ngIf=\"istec\"><br>Descripción: <span\n                                      [innerHTML]=\"inc.descripcion\"></span></span>\n                                  <span *ngIf=\"inc.siniestro\"><br>Es Siniestro</span>\n                                  <span *ngIf=\"inc.actuacion!=null && inc.actuacion!='-1' \"><br>Actuación:\n                                    {{inc.actuacion}}</span>\n                                  <br>Componente: <ng-container *ngIf=\"inc.contrato_componente!=null\">\n                                    <ul class=\"list-inline\">\n                                      <li *ngFor=\"let compo of inc.contrato_componente.componente.componentfields; \">\n                                        {{compo.value}}</li>\n                                    </ul>\n\n                                  </ng-container>\n                                </a></td> -->\n\n\n\n                              <!--<td class=\"text-right\"  (click)=\"adclock(inc)\">\n                                <span *ngIf=\"!inc.usuario_asignado_id\">Sin asignar</span>\n                                <span *ngIf=\"inc.usuario_asignado_id\">{{inc.usuario_asignado?.name}}</span>\n                                <a *ngIf=\"!inc.usuario_asignado_id\" class=\"btn \" (click)=\"verencalendario(inc)\"\n                                  title=\"Ver en Calendario\"><i class=\"mdi mdi-calendar-clock\"></i></a> <a\n                                  *ngIf=\"inc.estado=='CLO'\" class=\"btn \" title=\"Re-abrir\" [swal]=\"reopenSwal\"><i\n                                    class=\"mdi mdi-lock-open\"></i></a>\n\n                                     <swal #reopenSwal title=\"Desea Re-Abrir El Incidente\" text=\"Esta acción no se puede modificar.\"\n                                  type=\"question\" [showCancelButton]=\"true\" [focusCancel]=\"true\"\n                                  (confirm)=\"reabrir(inc.id)\">\n                                </swal><br>\n                                <i class=\"ti-alert\"></i>\n                                {{inc.categoria_incidente?inc.categoria_incidente.name:''}}<br>\n                                Pla: {{inc.fecha_programacion|date:'dd/MM/yyyy HH:mm:ss'}}\n                                <br>Reg: {{inc.created_at|date:'dd/MM/yyyy  HH:mm:ss'}}\n                                <br><span [className]=\"inc.modFechaProg ? 'text-info' : ''\">Vto: {{inc.fecha_vencimiento |date:'dd/MM/yyyy  HH:mm:ss'}}</span>\n                                <br>Cierre: {{inc.fecha_cierre |date:'dd/MM/yyyy  HH:mm:ss'}}\n                                <br> Codigo Sap: {{inc.codigosap}}\n                                <br>\n                                <a class=\"preview\"\n                                *ngIf=\"inc.auditoria?.length>0\" routerLink=\"/reportes/auditoria/{{inc.id}}\"> Modificado\n                                <i class=\"  ti-alert  \" title=\"Este Incidente ha sido modificado\"></i>\n                              </a>\n                              </td>\n\n                              <td class=\"hidden-xs-down\"><i *ngIf=\"inc.imagenes.length>0\" class=\"fa fa-paperclip\"></i>\n                                <i *ngIf=\"inc.imagenes.length==0\" class=\"far fa-times-circle\"></i></td>-->\n\n                            </tr>\n                            <tr class=\"unread\" *ngIf=\"inc.isEditable&&inc.estado!='CLO'\">\n                              <td colspan=\"14\">\n                                <form class=\"form-inline\">\n                                  <label for=\"ctrlprioridad\" class=\" mr-2\">Tecnico</label>\n                                  <select class=\"form-control  mr-sm-2 custom-select\" placeholder=\" Escriba la hora\"\n                                    [(ngModel)]=\"inc.usuario_asignado_id\" name=\"ctrlprioridad{{i}}\"\n                                    id=\"ctrlprioridad{{i}}\">\n\n\n                                    <option *ngFor=\"let usr of usuariostec\" [value]=\"usr.id.toString()\">\n                                      {{ usr.name }}\n\n                                    </option>\n                                  </select>\n                                  <label for=\"ctrl_fecha\" class=\" mr-2\">Fecha</label>\n                                  <input type=\"text\" id=\"ctrl_fecha{{i}}\" class=\"form-control col-lg-2\"\n                                    placeholder=\" Escriba la fecha\" [(ngModel)]=\"inc.fecha_programacion\"\n                                    name=\"ctrl_fecha{{i}}\" bsDatepicker [minDate]='mindate'\n                                    [bsValue]=\"inc.fecha_programacion\">\n                                  <label for=\"ctrl_hora\" class=\" mr-2\">Hora</label>\n                                  <div class=\"input-group clockpicker\" style=\"width: 120px\">\n\n                                    <input type=\"text\" class=\"form-control col-lg-8\" #ctrlhora name=\"ctrl_hora{{i}}\"\n                                      (blur)=\"inc.hora_programacion=ctrlhora.value\" [(ngModel)]=\"inc.hora_programacion\">\n                                    <div class=\"input-group-append\">\n                                      <span class=\"input-group-text\"><i class=\"ti-alarm-clock\"></i></span>\n                                    </div>\n                                  </div>\n                                  <a class=\"btn btn-info btn-rounded \" (click)=\"validaAsignacionUsuario(inc)\"><i\n                                      class=\"ti-save\"></i></a>\n                                  <a class=\"btn btn-danger btn-rounded \" (click)=\"inc.isEditable=false\"><i\n                                      class=\"ti-close\"></i></a>\n                                </form>\n\n                              </td>\n                            </tr>\n                          </ng-container>\n                        </tbody>\n                        <tbody *ngIf=\"istec\">\n                          <ng-container *ngFor=\"let inc of incidencias; let i=index;\">\n                            <tr class=\"unread\" [ngClass]=\"inc.vencido==0?'vencido':'ok'\" >\n\n\n                              <td style=\"width:40px\">\n\n                                <a class=\"preview\" [swal]=\"backwardSwal\"\n                                  *ngIf=\"!istec&& inc.estado!='CLO' && inc.estado!='INT'\" href=\"#\">\n                                  <i class=\" ti-control-backward  fa-3x\" title=\"Reiniciar Incidencia\"></i>\n                                </a>\n                                <swal #backwardSwal title=\"Desea reiniciar la incidencia?\"\n                                  text=\"Esta acción no se puede modificar.\" type=\"question\" [showCancelButton]=\"true\"\n                                  [focusCancel]=\"true\" (confirm)=\"onreiniciarincidente(inc)\">\n                                </swal>\n                                <a class=\"preview\" [swal]=\"skipSwal\"\n                                  *ngIf=\"istec&& inc.estado!='CLO' && inc.estado!='INT'\" href=\"#\">\n                                  <i class=\" ti-control-skip-backward fa-3x\" title=\"Saltar Incidencia\"></i>\n                                </a>\n                                <swal #skipSwal title=\"Desea frenara el recorrio de la incidencia?\"\n                                  text=\"Esta acción no se puede modificar.\" type=\"question\" [showCancelButton]=\"true\"\n                                  [focusCancel]=\"true\" (confirm)=\"onskipincidente(inc)\">\n                                </swal>\n\n                                <a class=\"preview\" *ngIf=\"istec\" href=\"#\" [swal]=\"llegadaSwal\">\n                                  <i *ngIf=\"inc.estado=='REC'\" class=\"ti-thumb-up  fa-3x\" title=\"Llegada al aviso\"></i>\n                                </a>\n\n                                <swal #llegadaSwal title=\"Llegada al aviso?\" text=\"Esta acción no se puede modificar.\"\n                                  type=\"question\" [showCancelButton]=\"true\" [focusCancel]=\"true\"\n                                  (confirm)=\"updateestado(inc)\">\n                                </swal>\n\n                                <a class=\"preview\" *ngIf=\"istec\" href=\"#\" [swal]=\"deleteSwal\"> <i\n                                    *ngIf=\"inc.estado=='PLA'||inc.estado=='PDA'\" class=\" ti-timer  fa-3x\"\n                                    title=\"En camino al aviso\"></i></a>\n                                <swal #deleteSwal title=\"En camino al aviso?\" text=\"Esta acción no se puede modificar.\"\n                                  type=\"question\" [showCancelButton]=\"true\" [focusCancel]=\"true\"\n                                  (confirm)=\"updateestado(inc,false,false)\">\n                                </swal>\n\n                                <a class=\"preview\" href=\"#\" [swal]=\"remoteSwal\"\n                                  *ngIf=\"(inc.estado!='CLO'&&inc.remoto&&inc.remotopausa)||inc.estado=='PLA'||inc.estado=='PDA'\">\n                                  <i class=\" ti-control-play fa-3x\" title=\"Iniciar Remoto\"></i></a>\n                                <swal #remoteSwal title=\"Va ha iniciar la incidencia teléfonicamente o remotamente?\"\n                                  text=\"Esta acción no se puede modificar.\" type=\"question\" [showCancelButton]=\"true\"\n                                  [focusCancel]=\"true\" (confirm)=\"updateestado(inc,true,false)\">\n                                </swal>\n                                <a *ngIf=\"!inc.remotopausa&&inc.estado=='TRA'&&inc.remoto\" class=\"preview\" href=\"#\"\n                                  [swal]=\"stopSwal\"> <i class=\"ti-control-pause fa-3x\"\n                                    title=\"Pausar Incidencia\"></i></a>\n                                <swal #stopSwal title=\"Desea Detener el Tiempo Para la Incidencia?\"\n                                  text=\"Esta acción no se puede modificar.\" type=\"question\" [showCancelButton]=\"true\"\n                                  [focusCancel]=\"true\" (confirm)=\"updateestado(inc,true,true)\">\n                                </swal>\n\n\n\n                              </td>\n\n                              <!-- <td routerLink=\"/incidencia/{{inc.estado=='CLO'?'resumen':'edit'}}/{{inc.id}}\">{{ inc.created_at |date:'dd/MM/yyyy HH:mm:ss' }}</td>\n                              <td routerLink=\"/incidencia/{{inc.estado=='CLO'?'resumen':'edit'}}/{{inc.id}}\">{{ inc.id }}</td>\n                              <td routerLink=\"/incidencia/{{inc.estado=='CLO'?'resumen':'edit'}}/{{inc.id}}\">{{ inc.codigosap }}</td>\n                              <td routerLink=\"/incidencia/{{inc.estado=='CLO'?'resumen':'edit'}}/{{inc.id}}\">{{ inc.razonsocial }}</td>\n                              <td routerLink=\"/incidencia/{{inc.estado=='CLO'?'resumen':'edit'}}/{{inc.id}}\">{{ inc.estacion_servicio.name }}({{ inc.estacion_servicio.direccion }})</td>\n                              <td routerLink=\"/incidencia/{{inc.estado=='CLO'?'resumen':'edit'}}/{{inc.id}}\">{{ inc.categoria_incidente == null ? ( inc.categoria_incidente_id == -2 ? 'Sin Prioridad' : '' )  : inc.categoria_incidente.name }} </td>\n                              <td routerLink=\"/incidencia/{{inc.estado=='CLO'?'resumen':'edit'}}/{{inc.id}}\">{{ inc.titulo }}</td>\n                              <td routerLink=\"/incidencia/{{inc.estado=='CLO'?'resumen':'edit'}}/{{inc.id}}\"> {{ inc.actuacion }}  </td>\n                              <td routerLink=\"/incidencia/{{inc.estado=='CLO'?'resumen':'edit'}}/{{inc.id}}\">{{ inc.fecha_vencimiento |date:'dd/MM/yyyy HH:mm:ss' }}</td>\n                              <td routerLink=\"/incidencia/{{inc.estado=='CLO'?'resumen':'edit'}}/{{inc.id}}\">--</td>\n                              <td routerLink=\"/incidencia/{{inc.estado=='CLO'?'resumen':'edit'}}/{{inc.id}}\">{{ inc.estado }}</td> -->\n\n                              <td class=\"max-texts\" style=\"max-width: 40%; \"\n                                routerLink=\"/incidencia/{{inc.estado=='CLO'?'resumen':'edit'}}/{{inc.id}}\"> <a\n                                  routerLink=\"/incidencia/{{inc.estado=='CLO'?'resumen':'edit'}}/{{inc.id}}\">\n                                  <span\n                                    class=\"badge badge-pill {{getclassestadoincidencia(inc.estado)}} float-left\">#{{inc.id}}\n                                    - {{inc.estado}}</span><br>\n                                  Empresa: {{inc.razonsocial}}\n                                  <br>Estacion: {{inc.estacion_servicio.name}}({{inc.estacion_servicio.direccion}})\n                                  <span *ngIf=\"inc.distanciacalculada!=undefined\"><br> D: {{(inc.distanciacalculada/1000)\n                                  | number }} KM. T: {{(inc.tiempo/60/60) | number}} HRS.</span>\n                                  <span *ngIf=\"inc.remoto\"><br>Soporte remoto.</span>\n                                  <br>Titulo: {{inc.titulo}}\n                                  <span *ngIf=\"istec\"><br>Descripción: <span\n                                      [innerHTML]=\"inc.descripcion\"></span></span>\n                                  <span *ngIf=\"inc.siniestro\"><br>Es Siniestro</span>\n                                  <span *ngIf=\"inc.actuacion!=null && inc.actuacion!='-1' \"><br>Actuación:\n                                    {{inc.actuacion}}</span>\n                                  <br>Componente: <ng-container *ngIf=\"inc.contrato_componente!=null\">\n                                    <ul class=\"list-inline\">\n                                      <li *ngFor=\"let compo of inc.contrato_componente.componente.componentfields; \">\n                                        {{compo.value}}</li>\n                                    </ul>\n\n                                  </ng-container>\n                                </a></td>\n\n\n\n                             <td class=\"text-right\"  (click)=\"adclock(inc)\">\n                                <span *ngIf=\"!inc.usuario_asignado_id\">Sin asignar</span>\n                                <span *ngIf=\"inc.usuario_asignado_id\">{{inc.usuario_asignado?.name}}</span>\n                                <a *ngIf=\"!inc.usuario_asignado_id\" class=\"btn \" (click)=\"verencalendario(inc)\"\n                                  title=\"Ver en Calendario\"><i class=\"mdi mdi-calendar-clock\"></i></a> <a\n                                  *ngIf=\"inc.estado=='CLO'\" class=\"btn \" title=\"Re-abrir\" [swal]=\"reopenSwal\"><i\n                                    class=\"mdi mdi-lock-open\"></i></a>\n\n                                <!--    --><swal #reopenSwal title=\"Desea Re-Abrir El Incidente\" text=\"Esta acción no se puede modificar.\"\n                                  type=\"question\" [showCancelButton]=\"true\" [focusCancel]=\"true\"\n                                  (confirm)=\"reabrir(inc.id)\">\n                                </swal><br>\n                                <i class=\"ti-alert\"></i>\n                                {{inc.categoria_incidente?inc.categoria_incidente.name:''}}<br>\n\n                                Pla: {{inc.fecha_programacion|date:'dd/MM/yyyy HH:mm:ss'}}\n                                <br>Reg: {{inc.created_at|date:'dd/MM/yyyy  HH:mm:ss'}}\n                                <br><span [className]=\"inc.modFechaProg ? 'text-info' : ''\">Vto: {{inc.fecha_vencimiento |date:'dd/MM/yyyy  HH:mm:ss'}}</span>\n                                <br>Cierre: {{inc.fecha_cierre |date:'dd/MM/yyyy  HH:mm:ss'}}\n                                <br> Codigo Sap: {{inc.codigosap}}\n                                <br>   <!-- -->\n                                <a class=\"preview\"\n                                *ngIf=\"inc.auditoria?.length>0\" routerLink=\"/reportes/auditoria/{{inc.id}}\"> Modificado\n                                <i class=\"  ti-alert  \" title=\"Este Incidente ha sido modificado\"></i>\n                              </a>\n                              </td>\n\n                              <td class=\"hidden-xs-down\"><i *ngIf=\"inc.imagenes.length>0\" class=\"fa fa-paperclip\"></i>\n                                <i *ngIf=\"inc.imagenes.length==0\" class=\"far fa-times-circle\"></i></td>\n\n                            </tr>\n                            <tr class=\"unread\" *ngIf=\"inc.isEditable&&inc.estado!='CLO'\">\n                              <td colspan=\"14\">\n                                <form class=\"form-inline\">\n                                  <label for=\"ctrlprioridad\" class=\" mr-2\">Tecnico</label>\n                                  <select class=\"form-control  mr-sm-2 custom-select\" placeholder=\" Escriba la hora\"\n                                    [(ngModel)]=\"inc.usuario_asignado_id\" name=\"ctrlprioridad{{i}}\"\n                                    id=\"ctrlprioridad{{i}}\">\n\n\n                                    <option *ngFor=\"let usr of usuariostec\" [value]=\"usr.id.toString()\">\n                                      {{ usr.name }}\n\n                                    </option>\n                                  </select>\n                                  <label for=\"ctrl_fecha\" class=\" mr-2\">Fecha</label>\n                                  <input type=\"text\" id=\"ctrl_fecha{{i}}\" class=\"form-control col-lg-2\"\n                                    placeholder=\" Escriba la fecha\" [(ngModel)]=\"inc.fecha_programacion\"\n                                    name=\"ctrl_fecha{{i}}\" bsDatepicker [minDate]='mindate'\n                                    [bsValue]=\"inc.fecha_programacion\">\n                                  <label for=\"ctrl_hora\" class=\" mr-2\">Hora</label>\n                                  <div class=\"input-group clockpicker\" style=\"width: 120px\">\n\n                                    <input type=\"text\" class=\"form-control col-lg-8\" #ctrlhora name=\"ctrl_hora{{i}}\"\n                                      (blur)=\"inc.hora_programacion=ctrlhora.value\" [(ngModel)]=\"inc.hora_programacion\">\n                                    <div class=\"input-group-append\">\n                                      <span class=\"input-group-text\"><i class=\"ti-alarm-clock\"></i></span>\n                                    </div>\n                                  </div>\n                                  <a class=\"btn btn-info btn-rounded \" (click)=\"validaAsignacionUsuario(inc)\"><i\n                                      class=\"ti-save\"></i></a>\n                                  <a class=\"btn btn-danger btn-rounded \" (click)=\"inc.isEditable=false\"><i\n                                      class=\"ti-close\"></i></a>\n                                </form>\n\n                              </td>\n                            </tr>\n                          </ng-container>\n                        </tbody>\n                      </table>\n                    </div>\n                    <!-- ============================================================== -->\n                    <!-- EDITA INCIDENCIA -->\n                    <!-- ============================================================== -->\n\n                    <app-incidencia-edit-tab *ngIf=\"incidenceId >= 0\" [incidenceId]=\"incidenceId\"\n                      (showIncidenceDetail)=\"showIncidenceDetail($event)\"></app-incidencia-edit-tab>\n\n\n\n                    <div class=\"inbox-center table-responsive\" [ngStyle]=\"{'display': vermaps  ? 'block' : 'none' }\">\n                      <div id=\"markermap\" class=\"gmaps\" #gmap></div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"container my-4\" *ngIf=\"!ususel && !selected_all\">\n                <div class=\"border border-light p-3 mb-4\">\n                  <p class=\"font-weight-bold text-cente\">Seleccione un buzon para comenzar</p>\n                </div>\n              </div>\n\n              <div class=\"container\" *ngIf=\"ususel && !verlista\">\n                <div class=\"border border-light py-0 px-3 mb-4\">\n                  <p class=\"font-weight-bold text-cente\">No se han encontrado resultados</p>\n                </div>\n              </div>\n\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <!-- ============================================================== -->\n      <!-- End PAge Content -->\n      <!-- ============================================================== -->\n      <!-- ============================================================== -->\n      <!-- Right sidebar -->\n      <!-- ============================================================== -->\n      <!-- .right-sidebar -->\n\n      <!-- ============================================================== -->\n      <!-- End Right sidebar -->\n      <!-- ============================================================== -->\n    </div>\n    <!-- ============================================================== -->\n    <!-- End Container fluid  -->\n    <!-- ============================================================== -->\n  </div>\n\n\n  <swal #createSwal title=\"Programar Incidencia\" [backdrop]=\"true\" [allowOutsideClick]=\"false\" [showCancelButton]=\"true\"\n    [showConfirmButton]=\"true\" [cancelButtonText]=\"'Cerrar'\" [confirmButtonText]=\"'Agregar'\"\n    (confirm)=\"onasignarusuario()\" showCloseButton=\"true\">\n    <div *swalPartial>\n      <form>\n        <div class=\"form-body\">\n          <h3 class=\"card-title\">Incidencia</h3>\n          <hr>\n          <div class=\"row p-t-20\">\n\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Titulo</label>\n                <p>{{incnew.titulo}}</p>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Fecha creación</label>\n                <p>{{incnew.created_at}}</p>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Cliente</label>\n                <p>{{incnew.razonsocial}}</p>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Estacion Servicio</label>\n                <p>{{incnew.estacion_servicio.name}}</p>\n              </div>\n            </div>\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Componente</label>\n                <p>\n                  <ng-container *ngIf=\"incnew.contrato_componente!=null\">\n                    <ul class=\"list-inline\">\n                      <li *ngFor=\"let compo of incnew.contrato_componente.componente.componentfields; \">{{compo.value}}\n                      </li>\n                    </ul>\n\n                  </ng-container>\n                </p>\n              </div>\n            </div>\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Descripción</label>\n                <p [innerHtml]=\"incnew.descripcion\"></p>\n              </div>\n            </div>\n          </div>\n          <h3 class=\"card-title\">Programar a</h3>\n          <hr>\n          <div class=\"row p-t-20\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Fecha Y hora</label>\n                <p>{{incnew.start}}</p>\n              </div>\n            </div>\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label for=\"ctrlprioridad\" class=\" mr-2\">Tecnico</label>\n                <select class=\"form-control  mr-sm-2 custom-select\" placeholder=\" Escriba la hora\"\n                  [(ngModel)]=\"incnew.usuario_asignado_id\" name=\"ctrlprioridad{{i}}\" id=\"ctrlprioridad{{i}}\">\n                  <option selected>Seleccione</option>\n\n                  <option *ngFor=\"let usr of usuariostec\" [value]=\"usr.id.toString()\">\n                    {{ usr.name }}\n\n                  </option>\n                </select>\n                <small class=\"form-control-feedback\"> Seleccione el tecnico </small>\n              </div>\n            </div>\n\n          </div>\n        </div>\n\n      </form>\n    </div>\n  </swal>\n  <!-- modal mas filtros -->\n  <swal #filtroSwal title=\"Filtros\" [backdrop]=\"true\" [allowOutsideClick]=\"false\" [showCancelButton]=\"true\"\n    [showConfirmButton]=\"true\" [cancelButtonText]=\"'Cerrar'\" [confirmButtonText]=\"'Aceptar'\" (confirm)=\"getdata()\"\n    showCloseButton=\"true\">\n    <div *swalPartial>\n      <form>\n        <div class=\"form-body\">\n\n          <div class=\"row p-t-20\">\n\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Fecha Registro</label>\n                <input [(ngModel)]=\"f_fecharegistro\" type=\"date\" placeholder=\"Fecha de registro\" class=\"form-control\"\n                  name=\"f_fecharegistro\">\n\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Fecha Vencimiento</label>\n                <input [(ngModel)]=\"f_fechacreacion\" type=\"date\" placeholder=\"Fecha de vencimiento\" class=\"form-control\"\n                  name=\"f_fechacreacion\">\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Cliente</label>\n                <input [(ngModel)]=\"f_cliente\" type=\"text\" placeholder=\"Nombre cliente\" class=\"form-control\"\n                  name=\"f_cliente\">\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Estacion Servicio</label>\n                <input [(ngModel)]=\"f_estacion\" type=\"text\" placeholder=\"Estacion Servicio\" class=\"form-control\"\n                  name=\"f_estacion\">\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label class=\"control-label\"># Incidente</label>\n                <input [(ngModel)]=\"f_incidente\" type=\"number\" placeholder=\"# Incidente\" class=\"form-control\"\n                  name=\"f_incidente\">\n              </div>\n            </div>\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Titulo</label>\n                <input [(ngModel)]=\"f_itulo\" type=\"text\" placeholder=\"Titulo\" class=\"form-control\" name=\"f_itulo\">\n              </div>\n            </div>\n          </div>\n\n        </div>\n\n      </form>\n    </div>\n  </swal>\n\n  <swal #confirmplaneacionSwal title=\"Confirmar Planeación\" [backdrop]=\"true\" [allowOutsideClick]=\"false\"\n    [showCancelButton]=\"true\" [showConfirmButton]=\"true\" [cancelButtonText]=\"'Cerrar'\" [confirmButtonText]=\"'Aceptar'\"\n    (confirm)=\"onasignarusuario()\" showCloseButton=\"true\">\n    <div *swalPartial>\n      <form>\n        <div class=\"form-body\">\n\n          <div class=\"row p-t-20\">\n\n            <div class=\"col-md-12\">\n              <p class=\"text-center\" [innerHTML]=\"mensajePlaneacion\"></p>\n            </div>\n\n          </div>\n\n        </div>\n\n      </form>\n    </div>\n  </swal>\n\n  <swal #assignInbox title=\"Técnico a Asignar\" [backdrop]=\"true\" [allowOutsideClick]=\"false\"\n    [showCancelButton]=\"true\" [showConfirmButton]=\"true\" [cancelButtonText]=\"'Cerrar'\" [confirmButtonText]=\"'Aceptar'\"\n    (confirm)=\"onAssignInbox()\" showCloseButton=\"true\">\n    <div *swalPartial>\n      <form>\n        <div class=\"form-body\">\n\n          <div class=\"row p-t-20\">\n\n            <div class=\"col-md-12\">\n              <select class=\"form-control  mr-sm-2 custom-select\" placeholder=\" Escriba la hora\"\n                  [(ngModel)]=\"inboxusertec\" name=\"inboxusertec\">\n\n                  <ng-container *ngFor=\"let usr of usuarios; let i=index;\">\n                  <option *ngIf=\"usr.perfil == '1'\" [value]=\"usr.id\">\n                    {{ usr.name }}  \n\n                  </option>\n                </ng-container>\n                </select>\n            </div>\n\n          </div>\n\n        </div>\n\n      </form>\n    </div>\n  </swal>\n</div>\n"

/***/ }),

/***/ "./src/app/incidencias/incidencia-index/incidencia-index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IncidenciaIndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng4_loading_spinner__ = __webpack_require__("./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__incidencia_service__ = __webpack_require__("./src/app/incidencias/incidencia.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_datatables_net__ = __webpack_require__("./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_datatables_net___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_datatables_net__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_datatables_net_bs4__ = __webpack_require__("./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_datatables_net_bs4___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_datatables_net_bs4__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_datatables_net_buttons__ = __webpack_require__("./node_modules/datatables.net-buttons/js/dataTables.buttons.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_datatables_net_buttons___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_datatables_net_buttons__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__usuarios_usuarios_service__ = __webpack_require__("./src/app/usuarios/usuarios.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__mocks_estadoincidente__ = __webpack_require__("./src/app/mocks/estadoincidente.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap_datepicker__ = __webpack_require__("./node_modules/ngx-bootstrap/datepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_util__ = __webpack_require__("./node_modules/util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng_fullcalendar__ = __webpack_require__("./node_modules/ng-fullcalendar/ng-fullcalendar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__viewmodel_incidencia__ = __webpack_require__("./src/app/viewmodel/incidencia.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__toverux_ngx_sweetalert2__ = __webpack_require__("./node_modules/@toverux/ngx-sweetalert2/esm5/toverux-ngx-sweetalert2.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__estacionservicio_estacionservicio_service__ = __webpack_require__("./src/app/estacionservicio/estacionservicio.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__google_apis_maps_service__ = __webpack_require__("./src/app/google-apis/maps.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














//import { Options } from 'fullcalendar';



// import { } from '@types/googlemaps';


var IncidenciaIndexComponent = /** @class */ (function () {
    function IncidenciaIndexComponent(spinnerService, incidenciaService, usuariosService, notificationService, localeService, localdataservice, estacionservicioService, mapsService, router) {
        this.spinnerService = spinnerService;
        this.incidenciaService = incidenciaService;
        this.usuariosService = usuariosService;
        this.notificationService = notificationService;
        this.localeService = localeService;
        this.localdataservice = localdataservice;
        this.estacionservicioService = estacionservicioService;
        this.mapsService = mapsService;
        this.router = router;
        this.table = null;
        this.usuarios = [];
        this.incidencias = [];
        this.usuariostec = [];
        this.estadoincidente = __WEBPACK_IMPORTED_MODULE_9__mocks_estadoincidente__["a" /* ESTADOINCIDENCIAS */];
        this.mytime = new Date();
        this.verplaning = false;
        this.vermaps = true;
        this.verlista = true;
        this.lat = 40.50017;
        this.long = -3.89239;
        this.markers = [];
        this.istec = false;
        this.selected_all = true;
        this.order_values = [
            { name: "Vencidos", estado: "asc" },
            { name: "Cliente", estado: "asc" },
            { name: "Fecha registro", estado: "asc" },
            { name: "Fecha Planeado", estado: "asc" },
        ];
        this.alive = true;
        this.incidenceDetail = false;
        this.selectedInboxInc = null;
        this.tecnicoWhiteList = ["PLA", "PDA", "REC", "TRA"];
        this.localeService.use("es");
        this.estadosel = "";
        this.ususel = "";
        this.mindate = new Date();
        this.istec = this.localdataservice.getuser().perfil == 1;
        this.usuario = this.localdataservice.getuser();
        this.ususel = "";
        this.f_cliente = "";
        this.f_estacion = "";
        this.f_fechacreacion = "";
        this.f_fecharegistro = "";
        this.f_itulo = "";
        this.orderestado = "";
        this.ordername = "";
        this.f_incidente = "";
        //this.subscribeToData();
        this.currentProfile = this.localdataservice.getuser().perfil * 1;
    }
    IncidenciaIndexComponent.prototype.ngOnInit = function () {
        this.spinnerService.show();
        this.getdata();
        this.initcalendar();
        this.incnew = new __WEBPACK_IMPORTED_MODULE_15__viewmodel_incidencia__["a" /* Incidencia */]();
        this.vermaps = false;
    };
    /*private subscribeToData(): void {
      timer(0, 40000)
        .takeWhile(() => this.alive) // only fires when component is alive
        .subscribe(() => {
          this.getdata(false);
        });
    }*/
    IncidenciaIndexComponent.prototype.initcalendar = function () {
        var dateObj = new Date();
        var yearMonth = dateObj.getUTCFullYear() + "-" + (dateObj.getUTCMonth() + 1);
        this.calendarOptions = {
            editable: true,
            eventLimit: false,
            navLinks: true,
            selectable: true,
            locale: "es",
            header: {
                left: "prev,next today",
                center: "title",
                right: "month,agendaWeek,agendaDay,listMonth",
            },
            events: [],
            allDayText: "Todo el dia",
            buttonText: {
                today: "Hoy",
                month: "Mes",
                week: "Semana",
                day: "Dia",
                list: "Agenda",
            },
        };
    };
    IncidenciaIndexComponent.prototype.eventallow = function () {
        alert("allow");
    };
    IncidenciaIndexComponent.prototype.getdata = function (hideList) {
        var _this = this;
        if (hideList === void 0) { hideList = true; }
        if (hideList) {
            this.verlista = false;
        }
        if (hideList) {
            this.incidenceId = -1;
        }
        this.spinnerService.show();
        if (this.localdataservice.getuser().perfil == "1") {
            this.ususel = this.localdataservice.getuser().id;
        }
        if (this.selected_all) {
            this.ususel = "";
        }
        this.incidenciaService
            .getbytoken("estado=" +
            this.estadosel +
            "&usu=" +
            this.ususel +
            "&filtro=" +
            this.ordername +
            "&tipoorden=" +
            this.orderestado +
            "&f_fecharegistro=" +
            this.f_fecharegistro +
            "&f_fechacreacion=" +
            this.f_fechacreacion +
            "&f_cliente=" +
            this.f_cliente +
            "&f_estacion=" +
            this.f_estacion +
            "&f_itulo=" +
            this.f_itulo +
            "&f_incidente=" +
            this.f_incidente)
            .subscribe(function (response) {
            _this.usuarios =
                Object(__WEBPACK_IMPORTED_MODULE_12_util__["isNullOrUndefined"])(_this.usuarios) || _this.usuarios.length == 0
                    ? response.data.usuarios
                    : _this.usuarios;
            _this.usuarios = _this.usuarios.sort(function (a, b) { return a.name > b.name ? 1 : -1; });
            _this.incidencias = response.data.incidencias;
            if (_this.currentProfile === 1) {
                //INCIDENCIAS QUE NO SEA INT 
                _this.incidencias = _this.incidencias.filter(function (inc) {
                    return _this.tecnicoWhiteList.includes(inc.estado);
                });
            }
            if (_this.ususel) {
                _this.incidencias = _this.incidencias.filter(function (it) {
                    var valid = it && it.usuario_inbox;
                    return valid && (it.usuario_inbox.id === _this.ususel);
                });
            }
            _this.verlista = !!_this.incidencias.length;
            _this.usuariostec = response.data.usuariostec;
            _this.estacionesfilter = response.data.estaciones;
            _this.spinnerService.hide();
            if (_this.selected_all)
                _this.ususel = -1;
        });
    };
    IncidenciaIndexComponent.prototype.loadtable = function () {
        var exampleId = __WEBPACK_IMPORTED_MODULE_4_jquery__("#example23");
        this.table = exampleId.DataTable({
            dom: "Bfrtip",
            buttons: ["copy", "csv", "excel", "pdf", "print"],
            ordering: false,
            oLanguage: {
                sLengthMenu: "_MENU_ registros por página",
                sInfoFiltered: " - filtrada de _MAX_ registros",
                sSearch: "Buscar: ",
                sZeroRecords: "No existen datos diponibles",
                sInfoEmpty: " ",
                sInfo: "Mostrando _END_ de _TOTAL_",
                oPaginate: {
                    sPrevious: "Anterior",
                    sNext: "Siguiente",
                },
            },
        });
    };
    IncidenciaIndexComponent.prototype.reInitDatatable = function () {
        var _this = this;
        if (this.table) {
            this.table.destroy();
            this.table = null;
        }
        setTimeout(function () { return _this.loadtable(); }, 0);
    };
    IncidenciaIndexComponent.prototype.actualizarincidenye = function (inc) {
        var _this = this;
        var fectem = inc.fecha_programacion;
        if (inc.fecha_programacion != undefined &&
            inc.fecha_programacion != null &&
            inc.fecha_programacion != "") {
            if (inc.hora_programacion != undefined &&
                inc.hora_programacion != null &&
                inc.hora_programacion != "") {
                if (!__WEBPACK_IMPORTED_MODULE_11_moment__(inc.fecha_programacion, "DD/MM/YYYY").isValid()) {
                    inc.fecha_programacion = __WEBPACK_IMPORTED_MODULE_11_moment__(inc.fecha_programacion).format("YYYY-MM-DD");
                }
                else {
                    inc.fecha_programacion = __WEBPACK_IMPORTED_MODULE_11_moment__(inc.fecha_programacion, "DD/MM/YYYY").format("YYYY-MM-DD");
                }
                inc.fecha_programacion = __WEBPACK_IMPORTED_MODULE_11_moment__(inc.fecha_programacion + " " + inc.hora_programacion).format("DD-MM-YYYY HH:mm:ss");
            }
            else {
                if (!__WEBPACK_IMPORTED_MODULE_11_moment__(inc.fecha_programacion, "DD/MM/YYYY").isValid()) {
                    inc.fecha_programacion = __WEBPACK_IMPORTED_MODULE_11_moment__(inc.fecha_programacion).format("YYYY-MM-DD");
                }
                else {
                    inc.fecha_programacion = __WEBPACK_IMPORTED_MODULE_11_moment__(inc.fecha_programacion, "DD/MM/YYYY").format("YYYY-MM-DD");
                }
                inc.fecha_programacion = __WEBPACK_IMPORTED_MODULE_11_moment__(inc.fecha_programacion + " " + "00:00:00").format("DD-MM-YYYY HH:mm:ss");
            }
        }
        //inc.ignore_user = 1;
        this.incidenciaService.update(inc).subscribe(function (value) {
            if (value.data.noplaneado == 1) {
                _this.notificationService.onError("Ya tiene asignado un incidente en esa hora.");
            }
            else if (value.data.errorusu == 1) {
                _this.notificationService.onError("No se puede asignar el usuario por que es tecnico adicional");
            }
            else {
                if (value.data.errorrec == undefined) {
                    inc.usuario_asignado = value.data.usuario_asignado;
                    inc.remotoinicio = value.data.remotoinicio;
                    inc.remotopausa = value.data.remotopausa;
                    inc.estado = value.data.estado;
                    _this.incnew = null;
                    _this.spinnerService.hide();
                    _this.notificationService.onSuccess("Incidente Actualizado.");
                }
                else {
                    inc.estado = "PLA";
                    _this.notificationService.onError("Ya esta trabajando en un incidente");
                }
            }
        }, function (err) {
            _this.spinnerService.hide();
            if (err.status_code == 422) {
                _this.notificationService.onError("Incidente no Actualizado.");
            }
            else {
                _this.notificationService.onError("Incidente no Actualizado.");
            }
        });
        inc.fecha_programacion = fectem;
    };
    IncidenciaIndexComponent.prototype.validaAsignacionUsuario = function (inc) {
        this.incnew = inc;
        var vencimiento, planeado, diferencia;
        vencimiento = __WEBPACK_IMPORTED_MODULE_11_moment__(inc.fecha_vencimiento, "DD-MM-YYYY HH:mm:ss");
        planeado = __WEBPACK_IMPORTED_MODULE_11_moment__(inc.fecha_programacion, "DD-MM-YYYY HH:mm:ss");
        diferencia = planeado.diff(vencimiento);
        console.log("diferencia" + diferencia);
        if (diferencia < 0) {
            this.mensajePlaneacion =
                "Desea planear la incidencia?. <br>La fecha de planeación esta fuera de plazo.";
        }
        else {
            this.mensajePlaneacion = "Desea planear la incidencia?.";
        }
        this.confirmplaneacionSwal.show();
    };
    IncidenciaIndexComponent.prototype.onasignarusuario = function () {
        this.incnew.estado = "PLA";
        this.actualizarincidenye(this.incnew);
    };
    IncidenciaIndexComponent.prototype.onreiniciarincidente = function (inc) {
        inc.estado = "INT";
        inc.usuario_asignado_id = null;
        this.actualizarincidenye(inc);
    };
    IncidenciaIndexComponent.prototype.onskipincidente = function (inc) {
        inc.estado = "PLA";
        this.actualizarincidenye(inc);
    };
    IncidenciaIndexComponent.prototype.getclassestadoincidencia = function (estado) {
        var result;
        result = this.estadoincidente.filter(function (estadoinc) { return estadoinc.value === estado; });
        return result.length > 0 ? result[0].label : "";
    };
    IncidenciaIndexComponent.prototype.ngAfterViewInit = function () {
        __WEBPACK_IMPORTED_MODULE_4_jquery__["getScript"]("assets/dist/js/pages/clockpicker.js");
    };
    IncidenciaIndexComponent.prototype.adclock = function (inc) {
        if (!this.istec) {
            inc.isEditable = true;
            if (inc.fecha_programacion != undefined &&
                inc.fecha_programacion != null &&
                inc.fecha_programacion != "") {
                inc.fecha_programacion = __WEBPACK_IMPORTED_MODULE_11_moment__(inc.fecha_programacion).format("DD/MM/YYYY h:mm:ss");
            }
            __WEBPACK_IMPORTED_MODULE_4_jquery__["getScript"]("assets/dist/js/pages/clockpicker.js");
        }
    };
    /**
     * Select the user and get their incidences
     * @param usuel - selected user
     */
    IncidenciaIndexComponent.prototype.selUsu = function (usuel) {
        this.spinnerService.show();
        this.resetFilter();
        this.selected_all = false;
        for (var _i = 0, _a = this.usuarios; _i < _a.length; _i++) {
            var usr = _a[_i];
            usr.selected = false;
        }
        this.ususel = usuel.id;
        usuel.selected = true;
        this.getdata();
    };
    /**
     * Select all incidences
     */
    IncidenciaIndexComponent.prototype.selAll = function () {
        this.spinnerService.show();
        this.resetFilter();
        this.selected_all = true;
        for (var _i = 0, _a = this.usuarios; _i < _a.length; _i++) {
            var usr = _a[_i];
            usr.selected = false;
        }
        this.getdata();
    };
    /**
     * It resets the values of the filter variables to empty strings.
     */
    IncidenciaIndexComponent.prototype.resetFilter = function () {
        this.estadosel = "";
        this.ususel = "";
        this.ordername = "";
        this.orderestado = "";
        this.f_fecharegistro = "";
        this.f_fechacreacion = "";
        this.f_cliente = "";
        this.f_estacion = "";
        this.f_itulo = "";
        this.f_incidente = "";
    };
    IncidenciaIndexComponent.prototype.selEstado = function (selestado) {
        for (var _i = 0, _a = this.estadoincidente; _i < _a.length; _i++) {
            var estado = _a[_i];
            estado.selected = false;
        }
        this.estadosel = selestado.value;
        this.spinnerService.show();
        selestado.selected = true;
        this.getdata();
        return false;
    };
    IncidenciaIndexComponent.prototype.removerfiltros = function () {
        for (var _i = 0, _a = this.estadoincidente; _i < _a.length; _i++) {
            var estado = _a[_i];
            estado.selected = false;
        }
        for (var _b = 0, _c = this.usuarios; _b < _c.length; _b++) {
            var usr = _c[_b];
            usr.selected = false;
        }
        this.selected_all = false;
        this.resetFilter();
        this.spinnerService.show();
        this.getdata();
    };
    IncidenciaIndexComponent.prototype.clickButton = function (model) {
        console.log(model);
    };
    IncidenciaIndexComponent.prototype.eventClick = function (model) {
        if (model.event.estado == "CLO") {
            this.router.navigate(["/incidencia/resumen", model.event.id]);
        }
        else {
            this.router.navigate(["/incidencia/edit", model.event.id]);
        }
    };
    IncidenciaIndexComponent.prototype.select = function (start) {
        if (start.view.type != "agendaDay") {
            this.ucCalendar.fullCalendar("changeView", "agendaDay", start.date.format("YYYY-MM-DD"));
            this.ucCalendar.fullCalendar("gotoDate", start.date);
        }
        else if (start.view.type == "agendaDay") {
            if (this.incnew.id != undefined) {
                this.incnew.fecha_programacion = start.date;
                this.incnew.hora_programacion = start.date.format("h:mm:ss");
                this.incnew.start = start.date.format("DD/MM/YYYY h:mm:ss a");
                this.createSwal.show();
            }
        }
    };
    IncidenciaIndexComponent.prototype.selectDAY = function (start) {
        this.ucCalendar.fullCalendar("changeView", "agendaDay", start.date.format("YYYY-MM-DD"));
        this.ucCalendar.fullCalendar("gotoDate", start.date);
    };
    IncidenciaIndexComponent.prototype.updateEvent = function (model) {
        model.event.fecha_programacion = model.event.start;
        this.actualizarincidenye(model.event);
    };
    IncidenciaIndexComponent.prototype.verplanning = function () {
        this.getdata();
        this.verlista = false;
        this.verplaning = true;
        this.vermaps = false;
    };
    IncidenciaIndexComponent.prototype.verlistamenu = function () {
        this.verlista = true;
        this.verplaning = false;
        this.vermaps = false;
    };
    IncidenciaIndexComponent.prototype.verlistmaps = function () {
        this.verlista = false;
        this.verplaning = false;
        this.vermaps = true;
        var myLatlng = new google.maps.LatLng(this.lat, this.long);
        var mapProp = {
            center: myLatlng,
            zoom: 5,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
        };
        this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
        this.getEstacionservicio();
    };
    IncidenciaIndexComponent.prototype.eventRender = function (event) {
        event.element
            .find(".fc-title, .fc-list-item-title")
            .html("<b>" + event.event.title + "</b>");
    };
    IncidenciaIndexComponent.prototype.drop = function (event) {
        if (event.event.estado != "CLO") {
            var inc = new __WEBPACK_IMPORTED_MODULE_15__viewmodel_incidencia__["a" /* Incidencia */]();
            inc.id = event.event.id;
            inc.categoria_incidente_id = event.event.id;
            inc.cliente_id = event.event.cliente_id;
            inc.contrato_componente_id = event.event.contrato_componente_id;
            inc.descripcion = event.event.descripcion;
            inc.empresa_id = event.event.empresa_id;
            inc.estacion_servicio_id = event.event.estacion_servicio_id;
            inc.fecha_cierre = event.event.fecha_cierre;
            inc.fecha_programacion = __WEBPACK_IMPORTED_MODULE_11_moment__(event.event.start).format("YYYY-MM-DD");
            inc.fecha_respuesta = event.event.fecha_respuesta;
            inc.fecha_vencimiento = event.event.fecha_vencimiento;
            inc.hora_programacion = __WEBPACK_IMPORTED_MODULE_11_moment__(event.event.start).format("HH:mm:ss");
            inc.razonsocial = event.event.razonsocial;
            inc.titulo = event.event.titulo;
            inc.tipocontrato = event.event.tipocontrato;
            inc.usuario_asignado = event.event.usuario_asignado;
            inc.id = event.event.id;
            this.actualizarincidenye(inc);
        }
        else {
            return false;
        }
    };
    IncidenciaIndexComponent.prototype.verencalendario = function (inc) {
        if (!this.istec) {
            this.verplanning();
            this.incnew = inc;
        }
    };
    IncidenciaIndexComponent.prototype.getEstacionservicio = function () {
        var _this = this;
        this.estacionservicioService.get(-1).subscribe(function (response) {
            _this.estaciones = response.data;
            var myLatlng = new google.maps.LatLng(_this.lat, _this.long);
            var _loop_1 = function (i) {
                var est = _this.estaciones[i];
                myLatlng = new google.maps.LatLng(est.lat, est.lng);
                var marker = new google.maps.Marker({
                    position: myLatlng,
                    map: _this.map,
                    animation: google.maps.Animation.DROP,
                    title: "Hola!",
                    label: est.name.substring(0, 1),
                });
                var contentString = '<div class="info-window-content"><h2>' +
                    est.name +
                    "</h2>" +
                    "<p> " +
                    est.direccion +
                    "<br> " +
                    est.telefonos +
                    "</p></div>";
                var infowindow = new google.maps.InfoWindow({
                    content: contentString,
                });
                google.maps.event.addListener(marker, "click", function () {
                    infowindow.open(this.map, marker);
                });
            };
            for (var i = 0; i < _this.estaciones.length; i++) {
                _loop_1(i);
            }
            _this.map.setCenter(myLatlng);
            _this.spinnerService.hide();
        });
    };
    IncidenciaIndexComponent.prototype.updateestado = function (inc, remoto, remotopausa) {
        inc.remoto = remoto;
        inc.remotopausa = remotopausa;
        if (inc.remoto) {
            inc.estado = "TRA";
            this.actualizarincidenye(inc);
        }
        else {
            this.gpsuser(inc);
        }
    };
    IncidenciaIndexComponent.prototype.gpsuser = function (inc) {
        var _this = this;
        this.spinnerService.show();
        if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.geolocationPosition = position;
                _this.spinnerService.hide();
                if (inc.estado == "PLA" || inc.estado == "PDA") {
                    inc.estado = "REC";
                    inc.latpartida = _this.geolocationPosition.coords.latitude;
                    inc.lngpartida = _this.geolocationPosition.coords.longitude;
                    _this.mapsService
                        .getdistance(inc.latpartida, inc.lngpartida, inc.estacion_servicio.lat, inc.estacion_servicio.lng)
                        .subscribe(function (response) {
                        console.log(response);
                        if (response.rows.length > 0 &&
                            response.rows[0].elements[0].duration != undefined) {
                            inc.tiempo = response.rows[0].elements[0].duration.value;
                            inc.distanciacalculada =
                                response.rows[0].elements[0].distance.value;
                        }
                        _this.actualizarincidenye(inc);
                    });
                }
                else if (inc.estado == "REC") {
                    inc.estado = "TRA";
                    inc.latllegada = _this.geolocationPosition.coords.latitude;
                    inc.lngllegada = _this.geolocationPosition.coords.longitude;
                    _this.actualizarincidenye(inc);
                }
            }, function (error) {
                switch (error.code) {
                    case 1:
                        alert("Permission Denied To Gps");
                        break;
                    case 2:
                        alert("Position Unavailable To Gps");
                        break;
                    case 3:
                        alert("Timeout To Gps");
                        break;
                }
            });
        }
    };
    IncidenciaIndexComponent.prototype.ordering = function (i) {
        var value = this.order_values[i];
        this.ordername = value.name;
        this.orderestado = value.estado;
        this.getdata();
        if (value.estado == "asc") {
            this.order_values[i].estado = "desc";
        }
        else {
            this.order_values[i].estado = "asc";
        }
    };
    IncidenciaIndexComponent.prototype.openmorefilters = function () {
        this.filtroSwal.show();
    };
    IncidenciaIndexComponent.prototype.ngOnDestroy = function () {
        this.alive = false; // switches your IntervalObservable off
    };
    IncidenciaIndexComponent.prototype.filterestacion = function (estacion) {
        this.f_estacion = estacion;
        this.getdata();
    };
    IncidenciaIndexComponent.prototype.reabrir = function ($id) {
        var _this = this;
        this.spinnerService.show();
        this.incidenciaService.getReopenById($id).subscribe(function (value) {
            _this.spinnerService.hide();
            _this.notificationService.onSuccess("Incidente Actualizado.");
            _this.getdata();
        }, function (err) {
            _this.spinnerService.hide();
            if (err.status_code == 400) {
                _this.notificationService.onError(err.errors.message[0]);
            }
            else {
                _this.notificationService.onError("Incidente no Actualizado.");
            }
        });
    };
    // ===================================================================================
    IncidenciaIndexComponent.prototype.onGetIncidenceById = function (id) {
        this.incidenceDetail = false;
        this.incidenceId = id;
    };
    IncidenciaIndexComponent.prototype.showIncidenceDetail = function (show) {
        this.incidenceDetail = show;
    };
    IncidenciaIndexComponent.prototype.selectedUserInbox = function (inc) {
        this.selectedInboxInc = inc;
        this.assignInbox.show();
    };
    IncidenciaIndexComponent.prototype.onAssignInbox = function () {
        var _this = this;
        this.incidenciaService.inboxUser(this.incidenceId, this.inboxusertec).subscribe(function (value) {
            _this.notificationService.onSuccess("Técnico Actualizado.");
            _this.getdata();
        }, function (err) {
            _this.notificationService.onError(err.errors.message[0]);
            _this.notificationService.onError("Técnico no Actualizado.");
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("gmap"),
        __metadata("design:type", Object)
    ], IncidenciaIndexComponent.prototype, "gmapElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_13_ng_fullcalendar__["a" /* CalendarComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_13_ng_fullcalendar__["a" /* CalendarComponent */])
    ], IncidenciaIndexComponent.prototype, "ucCalendar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("createSwal"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_16__toverux_ngx_sweetalert2__["a" /* SwalComponent */])
    ], IncidenciaIndexComponent.prototype, "createSwal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("filtroSwal"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_16__toverux_ngx_sweetalert2__["a" /* SwalComponent */])
    ], IncidenciaIndexComponent.prototype, "filtroSwal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("confirmplaneacionSwal"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_16__toverux_ngx_sweetalert2__["a" /* SwalComponent */])
    ], IncidenciaIndexComponent.prototype, "confirmplaneacionSwal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("assignInbox"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_16__toverux_ngx_sweetalert2__["a" /* SwalComponent */])
    ], IncidenciaIndexComponent.prototype, "assignInbox", void 0);
    IncidenciaIndexComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-incidencia-index",
            template: __webpack_require__("./src/app/incidencias/incidencia-index/incidencia-index.component.html"),
            styles: [__webpack_require__("./src/app/incidencias/incidencia-index/incidencia-index.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng4_loading_spinner__["Ng4LoadingSpinnerService"],
            __WEBPACK_IMPORTED_MODULE_3__incidencia_service__["a" /* IncidenciaService */],
            __WEBPACK_IMPORTED_MODULE_8__usuarios_usuarios_service__["a" /* UsuariosService */],
            __WEBPACK_IMPORTED_MODULE_2__shared__["k" /* NotificationService */],
            __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap_datepicker__["b" /* BsLocaleService */],
            __WEBPACK_IMPORTED_MODULE_2__shared__["i" /* LocalDataService */],
            __WEBPACK_IMPORTED_MODULE_17__estacionservicio_estacionservicio_service__["a" /* EstacionservicioService */],
            __WEBPACK_IMPORTED_MODULE_18__google_apis_maps_service__["a" /* MapsService */],
            __WEBPACK_IMPORTED_MODULE_14__angular_router__["b" /* Router */]])
    ], IncidenciaIndexComponent);
    return IncidenciaIndexComponent;
}());



/***/ }),

/***/ "./src/app/incidencias/incidencias-resumen/incidencias-resumen.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/incidencias/incidencias-resumen/incidencias-resumen.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-wrapper\">\n  <!-- ============================================================== -->\n  <!-- Container fluid  -->\n  <!-- ============================================================== -->\n  <div class=\"container-fluid\">\n    <!-- ============================================================== -->\n    <!-- Bread crumb and right sidebar toggle -->\n    <!-- ============================================================== -->\n    \n    <!-- ============================================================== -->\n    <!-- End Bread crumb and right sidebar toggle -->\n    <!-- ============================================================== -->\n    <!-- ============================================================== -->\n    <!-- Start Page Content -->\n    <!-- ============================================================== -->\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <div class=\"card\">\n          <div class=\"row\">\n\n            <div class=\"col-xlg-12 col-lg-12 col-md-12 bg-light border-left\">\n              <div class=\"card-body\">\n                <button type=\"button \" class=\"btn btn-secondary m-r-10 m-b-10\" (click)=\"tooglerogthmenu()\"\n                  title=\"Comentarios\"><i class=\" ti-comments font-18\"></i></button>\n\n                <div class=\"btn-group m-b-10 m-r-10 float-right\" role=\"group\"\n                  aria-label=\"Button group with nested dropdown\">\n                  <a routerLink=\"/incidencia\"\n                    class=\"btn btn-info btn-rounded  m-b-20 p-10 btn-block waves-effect waves-light\">Listado\n                    Incidencias</a>\n\n                </div>\n\n\n\n              </div>\n              <div class=\"card-body\">\n                <form action=\"#\" id=\"form-id\" (ngSubmit)=\"add()\" #ctrlform=\"ngForm\">\n                  <div class=\"form-body\">\n                    <h3 class=\"card-title\">Información Basica</h3>\n                    <hr>\n                    <div class=\"row p-t-20\">\n                      <div class=\"col-md-3\">\n                        <span class=\"badge badge-pill {{getclassestadoincidencia(item.estado)}} float-LEFT\">#{{item.id}}\n                          - {{item.estado}}</span>\n                      </div>\n                      <div class=\"col-md-3\"> <label class=\"control-label\">Fecha Creación</label><br>\n                        <i class=\"fas fa-calendar-check\"></i> {{item.created_at |date:'dd/MM/yyyy HH:mm:ss'}}</div>\n                      <div class=\"col-md-2\"> <label class=\"control-label\">Fecha Vencimiento</label><br>\n                        <i class=\"fas fa-calendar-plus\"></i> {{item.fecha_vencimiento |date:'dd/MM/yyyy HH:mm:ss'}}\n                      </div>\n                      <div class=\"col-md-2\"> <label class=\"control-label\">Fecha Planeación</label><br>\n                        <i class=\"fas fa-calendar-check\"></i> {{item.fecha_programacion |date:'dd/MM/yyyy HH:mm:ss'}}\n                      </div>\n                      <div class=\"col-md-2\"> <label class=\"control-label\">Fecha Cierre</label><br>\n                        <div class=\"input-group \">\n                          <input type=\"text\" id=\"ctrl_fecha\" class=\"form-control \" placeholder=\" Escriba la fecha\"\n                          [(ngModel)]=\"item.fecha_cierre\" name=\"ctrl_fechacierre\" bsDatepicker\n                          [bsValue]=\"item.fecha_cierre\" \n                          >\n                          <div class=\"input-group-append\">\n                              <button class=\"btn btn-info\" (click)=\"editarfecha($event)\" type=\"button\"><i class=\"ti-save\"></i></button>\n                          </div>\n                      </div>\n                        \n                        <swal #backwardSwal title=\"Desea cambiar al fecha de cierre?\"\n                                  text=\"Esta acción no se puede modificar.\" type=\"question\" [showCancelButton]=\"true\"\n                                  [focusCancel]=\"true\" (confirm)=\"add()\">\n                                </swal>\n                      </div>\n                      <div class=\"col-lg-3\" *ngIf=\"item.no_parte_manual\">\n                        <label class=\"control-label\">N° Parte Manual</label><br>\n                         {{item.no_parte_manual }}\n                      </div>\n                      <div class=\"col-lg-3\" *ngIf=\"item.fecha_parte_manual\">\n                        <label class=\"control-label\">Fecha Cierre Parte Manual</label><br>\n                       {{item.fecha_parte_manual |date:'dd/MM/yyyy HH:mm:ss'}}\n                       \n                      </div>\n                      <div class=\"col-lg-3\" *ngIf=\"item.obs_parte_manual\">\n                        <label class=\"control-label\">Observaciones Parte Manual</label><br>\n                        {{item.obs_parte_manual }}\n                      </div>\n                      <div class=\"col-lg-3\" *ngIf=\"item.usr_parte_manual\">\n                          <label class=\"control-label\">Usuario Cierre Parte Manual</label><br>\n                           {{item.usuario_cierremanual.name }}\n                        </div>\n                      <div class=\"col-lg-12\">\n                        <hr>\n                      </div>\n                      <div class=\"col-md-6\">\n                        <div class=\"form-group\">\n                          <label class=\"control-label\">Cliente</label>\n\n                          <p>{{item.razonsocial}}</p>\n\n                        </div>\n                      </div>\n                      <div class=\"col-md-6\">\n                        <div class=\"form-group\">\n                          <label class=\"control-label\">Estacion Servicio</label>\n                          <select disabled class=\"form-control custom-select\" [(ngModel)]=\"item.estacion_servicio_id\"\n                            name=\"ctrlestacionservicio\" (change)=\"onselectEstacionServicio($event)\"\n                            #ctrlestacionservicio=\"ngModel\" required>\n                            <option [value]=\"-1\">Seleccione</option>\n                            <option *ngFor=\"let o of estacionservicio\" [value]=\"o.id.toString()\">\n                              {{ o.name }} ({{o.zonatecnica.name}})\n\n                            </option>\n                          </select>\n\n                        </div>\n\n                      </div>\n\n                    </div>\n                    <h3 class=\"card-title\" *ngIf=\"newcompo&& newcompo.name!=undefined\">Estacion Servicio</h3>\n                    <hr>\n                    <div class=\"row p-t-20\" *ngIf=\"newcompo && newcompo.name!=undefined\">\n                      <div class=\"col-lg-3 col-sm-12\"><strong>Estacion Servicio</strong> <br>{{newcompo.name}}</div>\n                      <div class=\"col-lg-3 col-sm-12\"><strong>Zona Tecnica</strong><br>{{newcompo.zonatecnica.name}}\n                      </div>\n                      <div class=\"col-lg-3 col-sm-12\"><strong>Dirección</strong> <br>{{newcompo.direccion}}</div>\n                      <div class=\"col-lg-3 col-sm-12\"><strong>Telefono</strong> <br>{{newcompo.telefono}}</div>\n\n                    </div>\n                    <h3 class=\"card-title\" *ngIf=\"newcompo&& newcompo.name!=undefined\">Componentes</h3>\n                    <hr>\n                    <div class=\"row p-t-20\" *ngIf=\"newcompo&& newcompo.name!=undefined\">\n                      <div class=\"table-responsive\">\n                        <table id=\"example23\"\n                          class=\"display nowrap table table-hover m-t-30  table-striped table-bordered\" cellspacing=\"0\"\n                          width=\"100%\">\n                          <thead>\n                            <tr>\n                              <th>Tipo Componente</th>\n                              <th>Informacion</th>\n                              <th>Contratos</th>\n\n\n                            </tr>\n                          </thead>\n\n                          <tbody>\n\n\n\n                            <tr *ngIf=\"item.contrato_componente\">\n                              <td>\n                                {{item.contrato_componente.componente?.tipocomponente.name}}\n                              </td>\n                              <td>\n                                <ul>\n                                  <li *ngFor=\"let field of item.contrato_componente?.componente.componentfields\">\n                                    <strong>{{field.tipocomponentfield.name}}:</strong> {{field.value}}\n                                  </li>\n                                </ul>\n                              </td>\n                              <td>\n\n                                <div *ngIf=\"item.contrato_componente.contrato\" class=\"col-lg-9\"\n                                  style=\"display: inline-table;\"><strong>Tipo</strong>\n                                  {{item.contrato_componente.contrato.tipocontrato.name}}<br>\n                                  <strong>Vto</strong> {{item.contrato_componente.contrato.fechafin}}</div>\n                                <div class=\"custom-control custom-radio mr-sm-2 col-lg-3\"\n                                  style=\"display: inline; text-align: start;\">\n                                  <input class=\"custom-control-input\" disabled id=\"checkbox{{newcompo.id}}_{{i}}_{{j}}\"\n                                    (click)=\"clickcontrato(contr)\" name=\"checkbox{{newcompo.id}}\" type=\"radio\"\n                                    [checked]=\"true\">\n\n                                  <label class=\"custom-control-label\" for=\"checkbox{{newcompo.id}}_{{i}}_{{j}}\"></label>\n                                </div>\n                                <div *ngIf=\"!item.contrato_componente.contrato\" class=\"col-lg-9\"\n                                  style=\"display: inline-table;\">\n                                  <strong>Sin Contrato</strong><br></div>\n\n\n\n\n                              </td>\n\n\n                            </tr>\n                            <tr *ngIf=\"!item.contrato_componente\">\n                              <td>\n                                {{item.sincontrato_componente?.tipocomponente.name}}\n                              </td>\n                              <td>\n                                <ul>\n                                  <li *ngFor=\"let field of item.sincontrato_componente?.componentfields\">\n                                    <strong>{{field.tipocomponentfield.name}}:</strong> {{field.value}}\n                                  </li>\n                                </ul>\n                              </td>\n                              <td>\n\n\n                                <div class=\"col-lg-9\" style=\"display: inline-table;\">\n                                  <strong>Sin Contrato</strong><br></div>\n\n\n\n\n                              </td>\n\n\n                            </tr>\n\n\n\n\n                          </tbody>\n                        </table>\n                      </div>\n                    </div>\n\n                    <div class=\"row p-t-20\">\n                      <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                          <label class=\"control-label\">Titulo</label>\n\n\n                          <input disabled [(ngModel)]=\"item.titulo\" required placeholder=\"Escriba el titulo\"\n                            class=\"form-control\" name=\"titulo\" #ctrltitulo=\"ngModel\">\n\n                          <div *ngIf=\"(ctrltitulo.invalid) && (ctrltitulo.dirty || ctrltitulo.touched)\"\n                            class=\"text-danger\">\n\n                            <div *ngIf=\"ctrltitulo.errors.required\">\n                              Titulo es requerido.\n                            </div>\n\n\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"col-md-6\">\n                        <div class=\"form-group\">\n                          <label class=\"control-label\">Actuación</label>\n                          <select disabled class=\"form-control custom-select\" [(ngModel)]=\"item.actuacion\"\n                            name=\"ctrlactuacion\">\n                            <option value=\"-1\">Seleccione</option>\n                            <option value=\"Correctivo\">Correctivo</option>\n                            <option value=\"Preventivas\">Preventivas</option>\n                            <option value=\"Instalaciones\">Instalaciones</option>\n                          </select>\n\n                        </div>\n\n                      </div>\n                      <div class=\"col-md-6\">\n                        <div class=\"form-group\">\n                          <label class=\"control-label\">Prioridad</label>\n                          <select disabled class=\"form-control custom-select\" [(ngModel)]=\"item.categoria_incidente_id\"\n                            name=\"ctrlprioridad\" #ctrlprioridad=\"ngModel\" required>\n                            <option [value]=\"-1\">Seleccione</option>\n                            <option [value]=\"-2\" *ngIf=\"prioridades.length==0\">Sin Prioridad</option>\n                            <option *ngFor=\"let o of  prioridades \" [value]=\"o.id.toString()\">\n                              {{ o.name }} ({{o.tiemporesolucion}}-{{o.tipotiempo}})\n\n                            </option>\n                          </select>\n\n                        </div>\n                        <div\n                          *ngIf=\"(item.categoria_incidente_id===-1||ctrlprioridad.invalid) && (ctrlprioridad.dirty || ctrlprioridad.touched)\"\n                          class=\"text-danger\">\n\n                          <div *ngIf=\"item.categoria_incidente_id==-1||ctrlprioridad.errors.required\">\n                            La Prioridad es requerida.\n                          </div>\n\n\n                        </div>\n                      </div>\n\n                      <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                          <label class=\"control-label\">Descripción de la incidencia</label>\n\n                          <ckeditor [(ngModel)]=\"item.descripcion\" #myckeditor=\"ngModel\" name=\"myckeditor\"\n                            [config]=\"ckeConfig\" debounce=\"500\" (change)=\"onChange($event)\"\n                            #ctrlobservaciones=\"ngModel\">\n                          </ckeditor>\n\n                          <small class=\"form-control-feedback\"> Escriba el la observacion del Contrato </small>\n                        </div>\n                        <div *ngIf=\"ctrlobservaciones.invalid && (ctrlobservaciones.dirty || ctrlobservaciones.touched)\"\n                          class=\"text-danger\">\n\n                          <div *ngIf=\"ctrlobservaciones.errors.required\">\n                            La observacion del Contrato es requerido.\n                          </div>\n\n\n                        </div>\n                      </div>\n                    </div>\n                    <h3 class=\"card-title\">Tecnicos Adicionales</h3>\n                    <hr>\n                    <div class=\"row p-t-20\">\n                      <div class=\"table-responsive\">\n                        <table id=\"example23\"\n                          class=\"display nowrap table table-hover m-t-30  table-striped table-bordered\" cellspacing=\"0\"\n                          width=\"100%\">\n                          <thead>\n                            <tr>\n                              <th>Nombre tecnico</th>\n                              <th>Observaciones</th>\n\n\n\n                            </tr>\n                          </thead>\n\n\n                          <tbody>\n\n\n                            <ng-container *ngFor=\"let row of item.tecnicosadicionales; let i = index\">\n                              <tr>\n                                <td>\n                                  {{row.usuario.name}}\n                                </td>\n                                <td>\n                                  {{row.observaciones}}\n                                </td>\n\n\n                              </tr>\n\n\n                            </ng-container>\n                          </tbody>\n                        </table>\n                      </div>\n                    </div>\n                    <!--/span-->\n\n                    <!--/span-->\n                  </div>\n\n\n                </form>\n              </div>\n              <div>\n                <hr class=\"m-t-0\">\n              </div>\n\n\n              <div class=\"card-body\">\n                <h4><i class=\"fa fa-paperclip m-r-10 m-b-10\"></i> Adjuntos <span>({{item.imagenes.length}})</span></h4>\n                <div class=\"row\">\n\n                  <div class=\"col-md-12\">\n                    <ul class=\"el-info list-inline\">\n                      <li *ngFor=\"let imgprod of item.imagenes;\" class=\"col-lg-2 text-truncate\"\n                        title=\"{{imgprod.nombrearchivo==null?imgprod.nombre:imgprod.nombrearchivo}}\">\n                        <a class=\"btn default btn-outline image-popup-vertical-fit\" target=\"_self\"\n                          href=\"{{apiurl+'storage/'+imgprod.nombre}}\" download=\"{{imgprod.nombre}}\">\n                          <i class=\" ti-file\"></i>\n                          {{imgprod.nombrearchivo==null?imgprod.nombre:imgprod.nombrearchivo}}</a></li>\n\n                    </ul>\n                  </div>\n\n\n\n                </div>\n\n              </div>\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- ============================================================== -->\n    <!-- End Page Content -->\n    <!-- ============================================================== -->\n    <!-- ============================================================== -->\n    <!-- Right sidebar -->\n    <!-- ============================================================== -->\n    <!-- .right-sidebar -->\n    <div class=\"right-sidebar\">\n\n      <div class=\"slimscrollright\">\n        <div class=\"rpanel-title\"><i class=\"ti-comments\"></i> Comentarios</div>\n        <div class=\"r-panel-body\">\n          <div class=\"list-group\">\n\n            <a href=\"javascript:void(0)\" *ngFor=\"let commentitm of item.comentarios;\"\n              class=\"list-group-item list-group-item-action flex-column align-items-start\">\n              <div class=\"d-flex w-100 justify-content-between\">\n                <h5 class=\"mb-1\"><i class=\"ti-comment\"></i> {{commentitm.user.name}}</h5>\n                <small class=\"text-muted\">hace {{calculardias(commentitm.created_at)}} dias.</small>\n              </div>\n              <p class=\"mb-1\">{{commentitm.comentario}}</p>\n              <small class=\"text-muted\">{{commentitm.created_at}}</small>\n            </a>\n\n          </div>\n        </div>\n        <div class=\"rpanel-title\"><i class=\"ti-link\"></i> Partes de Trabajo</div>\n        <div class=\"r-panel-body\">\n          <div class=\"list-group b-0 mail-list\">\n            <a *ngFor=\"let ptrab of item.partestrabajo;\" (click)=\"verparte(ptrab)\" class=\"list-group-item\">\n              <span class=\"fa fa-circle text-warning m-r-10\"></span>Parte # {{ptrab.id}} Creación {{ptrab.created_at}}\n              <br> Técnico {{ptrab.usuario_respuesta.name}}</a>\n\n          </div>\n        </div>\n        <div class=\"rpanel-title\"><i class=\"ti-link\"></i> Incidencias Relacionadas</div>\n        <div class=\"r-panel-body\">\n          <div class=\"list-group b-0 mail-list\">\n            <a *ngFor=\"let ptrab of item.incidentes_relacionados;\" routerLink=\"/incidencia/edit/{{ptrab.id}}\"\n              target=\"_blank\" class=\"list-group-item\"><span class=\"fa fa-circle text-success m-r-10\"></span>{{ptrab.id}}\n              {{ptrab.titulo}} {{ptrab.created_at}}</a>\n          </div>\n        </div>\n\n\n      </div>\n    </div>\n    <!-- ============================================================== -->\n    <!-- End Right sidebar -->\n    <!-- ============================================================== -->\n  </div>\n  <!-- ============================================================== -->\n  <!-- End Container fluid  -->\n  <!-- ============================================================== -->\n</div>\n\n<swal #createSwal title=\"Firma Cliente\" [backdrop]=\"true\" [allowOutsideClick]=\"false\" [showCancelButton]=\"false\"\n  [showConfirmButton]=\"false\" [cancelButtonText]=\"'Cerrar'\" [confirmButtonText]=\"'Agregar'\" customClass=\"swal-wide\"\n  showCloseButton=\"true\">\n  <div *swalPartial>\n    <app-singuser (onvaluechanged)=\"onvaluechangedfirma($event)\" (oncancel)=\"cancelarfirma($event)\"></app-singuser>\n  </div>\n</swal>\n<swal #partetrabajoSwal title=\"Parte de trabajo\" [backdrop]=\"true\" [allowOutsideClick]=\"false\"\n  [showCancelButton]=\"false\" [showConfirmButton]=\"false\" [cancelButtonText]=\"'Cerrar'\" [confirmButtonText]=\"'Agregar'\"\n  customClass=\"swal-wide\" showCloseButton=\"true\">\n  <div *swalPartial>\n\n    <div class=\"card-body \">\n      <h4><i class=\"ti-write\"></i> Parte de trabajo <a\n          href=\"{{apiurl+'storage/respuestas/resp_'+respuestaview.id+'.pdf'}}\" download>Descargar Pdf</a></h4>\n      <form action=\"#\" class=\"row\" id=\"form-rta\">\n        <div class=\"form-group col-lg-4\">\n          <label class=\"control-label\">N° {{respuestaview.manual?'Manual':''}}</label>\n          <input type=\"text\" id=\"numerorespuesta\" class=\"form-control\" placeholder=\"numero Respuesta\"\n            [(ngModel)]=\"respuestaview.id\" name=\"numerorespuesta\">\n\n        </div>\n        <div class=\"form-group col-lg-4\">\n          <label class=\"control-label\">Técnico</label>\n          <input type=\"text\" id=\"tecnicorespuesta\" class=\"form-control\" placeholder=\"Tecnico Respuesta\"\n            [(ngModel)]=\"respuestaview.usuario_respuesta.name\" name=\"tecnicorespuesta\">\n\n        </div>\n        <div class=\"form-group col-lg-4\">\n          <label class=\"control-label\">Fecha Registro</label>\n          <input type=\"text\" id=\"fecharespuesta\" class=\"form-control\" placeholder=\"fecha Respuesta\"\n            [(ngModel)]=\"respuestaview.created_at\" name=\"fecharespuesta\">\n\n        </div>\n\n\n        <div class=\"form-group col-lg-12\">\n          <label class=\"control-label\">Parte de trabajo de la incidencia</label>\n\n          <ckeditor [(ngModel)]=\"respuestaview.descripcion\" #myckeditor=\"ngModel\" name=\"rtackeditor\"\n            [config]=\"ckeConfig\" debounce=\"500\">\n          </ckeditor>\n\n\n        </div>\n        <div class=\"form-group  col-lg-3\">\n          <label class=\"control-label\">Estado Parte de trabajo</label>\n          <select class=\"form-control custom-select\" [(ngModel)]=\"respuestaview.estadorespuesta\"\n            name=\"ctrlestadorespuesta\" required>\n            <option value=\"\">Seleccione</option>\n            <option value=\"TE\">Terminada</option>\n            <option value=\"PM\">Pendiente por material</option>\n            <option value=\"PC\">Pendiente por restricciones de cliente.</option>\n            <option value=\"PS\">Pendiente por seguridad</option>\n          </select>\n\n\n        </div>\n        <div class=\"form-group  col-lg-3\">\n          <label class=\"control-label\">Tiempo Solución (Horas)</label>\n          <input type=\"number\" id=\"tiemporespuesta\" class=\"form-control\" placeholder=\"Tiempo Solucion\"\n            [(ngModel)]=\"respuestaview.tiemporespuesta\" name=\"tiemporespuesta\">\n\n        </div>\n        <div class=\"form-group  col-lg-3\">\n          <label class=\"control-label\">Tiempo Recorrido (Horas)</label>\n          <input type=\"number\" id=\"tiemporecorrido\" class=\"form-control\" placeholder=\"Tiempo Solucion\"\n            [(ngModel)]=\"respuestaview.horasdistancia\" name=\"tiemporecorrido\">\n\n        </div>\n        <div class=\"form-group  col-lg-3\">\n          <label class=\"control-label\">Distancia (Kms)</label>\n          <input type=\"number\" id=\"distanciarespuesta\" class=\"form-control\" placeholder=\"Tiempo Solucion\"\n            [(ngModel)]=\"respuestaview.distanciareportada\" name=\"distanciarespuesta\">\n\n        </div>\n        <div class=\"form-group  col-lg-6\">\n          <p>{{respuestaview.observacioncli}}</p>\n        </div>\n\n      </form>\n    </div>\n  </div>\n</swal>"

/***/ }),

/***/ "./src/app/incidencias/incidencias-resumen/incidencias-resumen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IncidenciasResumenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__incidencia_service__ = __webpack_require__("./src/app/incidencias/incidencia.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__ = __webpack_require__("./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__clientes_cliente_service__ = __webpack_require__("./src/app/clientes/cliente.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_datepicker__ = __webpack_require__("./node_modules/ngx-bootstrap/datepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tipocontrato_tipocontrato_service__ = __webpack_require__("./src/app/tipocontrato/tipocontrato.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__estacionservicio_estacionservicio_service__ = __webpack_require__("./src/app/estacionservicio/estacionservicio.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__viewmodel_estacionservicio__ = __webpack_require__("./src/app/viewmodel/estacionservicio.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__toverux_ngx_sweetalert2__ = __webpack_require__("./node_modules/@toverux/ngx-sweetalert2/esm5/toverux-ngx-sweetalert2.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__viewmodel_componente_actuacion__ = __webpack_require__("./src/app/viewmodel/componente_actuacion.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__viewmodel_incidencia__ = __webpack_require__("./src/app/viewmodel/incidencia.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_file_upload__ = __webpack_require__("./node_modules/ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__mocks_estadoincidente__ = __webpack_require__("./src/app/mocks/estadoincidente.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__viewmodel_respuesta__ = __webpack_require__("./src/app/viewmodel/respuesta.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__respuesta_respuestas_service__ = __webpack_require__("./src/app/respuesta/respuestas.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__articulo_articulo_service__ = __webpack_require__("./src/app/articulo/articulo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__viewmodel_MaterialRespuesta__ = __webpack_require__("./src/app/viewmodel/MaterialRespuesta.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__viewmodel_comentario_incidente__ = __webpack_require__("./src/app/viewmodel/comentario_incidente.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__comentarioincidente_comentarioincidente_service__ = __webpack_require__("./src/app/comentarioincidente/comentarioincidente.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__viewmodel_tecnicoadicional__ = __webpack_require__("./src/app/viewmodel/tecnicoadicional.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


























var IncidenciasResumenComponent = /** @class */ (function () {
    function IncidenciasResumenComponent(spinnerService, incidenciaService, router, notificationService, localDataService, clienteService, localeService, tipocontratoService, estacionservicioService, route, respuestaService, articuloService, comentarioincidenteService) {
        var _this = this;
        this.spinnerService = spinnerService;
        this.incidenciaService = incidenciaService;
        this.router = router;
        this.notificationService = notificationService;
        this.localDataService = localDataService;
        this.clienteService = clienteService;
        this.localeService = localeService;
        this.tipocontratoService = tipocontratoService;
        this.estacionservicioService = estacionservicioService;
        this.route = route;
        this.respuestaService = respuestaService;
        this.articuloService = articuloService;
        this.comentarioincidenteService = comentarioincidenteService;
        this.uploader = new __WEBPACK_IMPORTED_MODULE_14_ng2_file_upload__["FileUploader"]({
            url: __WEBPACK_IMPORTED_MODULE_15__environments_environment__["a" /* environment */].apiUrl + 'api/archivoincidencia',
            authTokenHeader: "Authorization",
            authToken: "Bearer " + localStorage.getItem('access_token'),
            isHTML5: true,
            autoUpload: true,
            maxFileSize: 5 * 1024 * 1024,
        });
        this.name = 'ng2-ckeditor';
        this.estadoincidente = __WEBPACK_IMPORTED_MODULE_17__mocks_estadoincidente__["a" /* ESTADOINCIDENCIAS */];
        this.usuariostec = [];
        this.hasBaseDropZoneOver = false;
        this.hasAnotherDropZoneOver = false;
        this.localeService.use('es');
        this.dataSource = __WEBPACK_IMPORTED_MODULE_5_rxjs__["Observable"].create(function (observer) {
            // Runs on every search
            _this.clienteService.gettoken(_this.item.razonsocial).subscribe(function (value) {
                observer.next(value.data);
            });
        });
        this.dataSource_art = __WEBPACK_IMPORTED_MODULE_5_rxjs__["Observable"].create(function (observer) {
            // Runs on every search
            _this.articuloService.gettoken(_this.articulodesc).subscribe(function (value) {
                observer.next(value.data);
            });
        });
        this.apiurl = __WEBPACK_IMPORTED_MODULE_15__environments_environment__["a" /* environment */].apiUrl;
        this.tecnicoadicionalnew = new __WEBPACK_IMPORTED_MODULE_24__viewmodel_tecnicoadicional__["a" /* Tecnicoadicional */]();
        this.tecnicoadicionalnew.id_usuario = -1;
    }
    IncidenciasResumenComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ckeConfig = {
            allowedContent: false,
            extraPlugins: 'divarea',
            forcePasteAsPlainText: true,
            readOnly: true
        };
        this.item = new __WEBPACK_IMPORTED_MODULE_13__viewmodel_incidencia__["a" /* Incidencia */];
        this.item.cliente_id = '';
        this.item.estacion_servicio_id = -1;
        this.item.categoria_incidente_id = -1;
        this.item.imagenes = [];
        this.cargarTipoCOntrato();
        this.cargarEstacionServicio();
        this.newcompo = new __WEBPACK_IMPORTED_MODULE_10__viewmodel_estacionservicio__["a" /* estacionservicio */]();
        this.prioridades = [];
        this.irespuesta = new __WEBPACK_IMPORTED_MODULE_18__viewmodel_respuesta__["a" /* Respuesta */]();
        this.materialnew = new __WEBPACK_IMPORTED_MODULE_21__viewmodel_MaterialRespuesta__["a" /* MaterialRespuesta */]();
        this.irespuesta.materiales = [];
        this.getById();
        this.irespuesta.estadorespuesta = "";
        this.uploader.onAfterAddingFile = function (file) { file.withCredentials = false; };
        this.uploader.onErrorItem = function (item, response, status, headers) { return _this.onErrorItem(item, response, status, headers); };
        this.uploader.onSuccessItem = function (item, response, status, headers) { return _this.onSuccessItem(item, response, status, headers); };
        this.uploader.onWhenAddingFileFailed = function (fileItem) {
            _this.notificationService.onError('La imagen no se pudo cargar, '
                + 'el tamaño maximo es de 5MB y el formato es png o jpg, INtentelo nuevamente');
        };
        this.comentarionew = new __WEBPACK_IMPORTED_MODULE_22__viewmodel_comentario_incidente__["a" /* ComentarioIncidente */]();
    };
    IncidenciasResumenComponent.prototype.onChange = function ($event) {
        console.log("onChange");
    };
    IncidenciasResumenComponent.prototype.editarfecha = function ($event) {
        if ($event != undefined) {
            this.backwardSwal.show();
        }
    };
    IncidenciasResumenComponent.prototype.getById = function () {
        var _this = this;
        this.spinnerService.show();
        var $id = this.route.snapshot.paramMap.get('id');
        this.uploader.options.additionalParameter = { incidencia_id: $id };
        this.irespuesta.id_incidencia = $id;
        this.incidenciaService.getById($id)
            .subscribe(function (response) {
            _this.item = response.data;
            _this.usuariostec = response.data.usuariostec;
            _this.cargarEstacionServicio();
            if (response.data.contrato_componente != null) {
                _this.prioridades = response.data.contrato_componente.contrato.tipocontrato.categoriaincidentes;
            }
            if (!__WEBPACK_IMPORTED_MODULE_16_moment__(_this.item.fecha_cierre, 'DD/MM/YYYY').isValid()) {
                _this.item.fecha_cierre = __WEBPACK_IMPORTED_MODULE_16_moment__(_this.item.fecha_cierre).toDate();
            }
            _this.spinnerService.hide();
        });
    };
    IncidenciasResumenComponent.prototype.cargarTipoCOntrato = function () {
        var _this = this;
        this.tipocontratoService.get(1).subscribe(function (value) {
            _this.tipocontrato = value.data;
        });
    };
    IncidenciasResumenComponent.prototype.cargarEstacionServicio = function () {
        var _this = this;
        var empresa = 0;
        this.spinnerService.show();
        empresa = this.localDataService.getLocalData('empresaSeleccionada').id;
        this.estacionservicioService.getbycliente(empresa, this.item.cliente_id).subscribe(function (value) {
            _this.estacionservicio = value.data;
            if (_this.item.estacion_servicio_id != -1) {
                var result = _this.estacionservicio.filter(function (comp) { return comp.id.toString() == _this.item.estacion_servicio_id; });
                if (result.length > 0) {
                    _this.newcompo = result[0];
                }
            }
            else {
                _this.newcompo = new __WEBPACK_IMPORTED_MODULE_10__viewmodel_estacionservicio__["a" /* estacionservicio */]();
            }
            _this.spinnerService.hide();
        });
    };
    IncidenciasResumenComponent.prototype.onselectEstacionServicio = function (estacionserviciosel) {
        if (estacionserviciosel.target.value != '-1') {
            var result = this.estacionservicio.filter(function (comp) { return comp.id.toString() == estacionserviciosel.target.value; });
            if (result.length > 0) {
                this.newcompo = result[0];
            }
        }
        else {
            this.newcompo = new __WEBPACK_IMPORTED_MODULE_10__viewmodel_estacionservicio__["a" /* estacionservicio */]();
        }
    };
    IncidenciasResumenComponent.prototype.onselecttipocontrato = function (tipocontratovalue) {
        var result;
        result = this.tipocontrato.filter(function (comp) { return comp.id.toString() == tipocontratovalue.target.value; });
        if (result.length > 0) {
            this.tipocontratosel = result[0];
        }
    };
    IncidenciasResumenComponent.prototype.add = function () {
        var _this = this;
        this.spinnerService.show();
        this.item.usuario_id = this.localDataService.getLocalData('userInfo').id;
        if (!__WEBPACK_IMPORTED_MODULE_16_moment__(this.item.fecha_cierre, 'DD/MM/YYYY').isValid()) {
            this.item.fecha_cierre = __WEBPACK_IMPORTED_MODULE_16_moment__(this.item.fecha_cierre).toDate();
        }
        else {
            this.item.fecha_cierre = __WEBPACK_IMPORTED_MODULE_16_moment__(this.item.fecha_cierre).toDate();
        }
        if (this.item.fecha_programacion != undefined) {
            this.item.fecha_programacion = __WEBPACK_IMPORTED_MODULE_16_moment__(this.item.fecha_programacion).format("DD-MM-YYYY HH:mm:ss");
        }
        this.incidenciaService.update(this.item)
            .subscribe(function (value) {
            _this.spinnerService.hide();
            _this.notificationService.onSuccess('Incidencia actualizada con exito.');
            _this.router.navigateByUrl('incidencia');
        }, function (err) {
            _this.spinnerService.hide();
            if (err.status_code == 422) {
                _this.notificationService.onError('El Contrato ya existe');
            }
            else {
                _this.notificationService.onError('Se ha producido un error.');
            }
        });
    };
    IncidenciasResumenComponent.prototype.changeTypeaheadLoading = function (e) {
        this.typeaheadLoading = e;
    };
    IncidenciasResumenComponent.prototype.typeaheadOnSelect = function (e) {
        this.item.cliente_id = e.item.CODIGO_CLIENTE;
        this.cargarEstacionServicio();
    };
    IncidenciasResumenComponent.prototype.changeTypeaheadLoading_art = function (e) {
        this.typeaheadLoading_art = e;
    };
    IncidenciasResumenComponent.prototype.typeaheadOnSelect_art = function (e) {
        this.materialnew.nombre = e.item.DESCRIPCION_ARTICULO;
        this.materialnew.referencia = e.item.CODIGO_ARTICULO;
    };
    IncidenciasResumenComponent.prototype.agregarmaterial = function () {
        this.irespuesta.materiales.push(this.materialnew);
        this.materialnew = new __WEBPACK_IMPORTED_MODULE_21__viewmodel_MaterialRespuesta__["a" /* MaterialRespuesta */]();
        this.articulodesc = "";
    };
    IncidenciasResumenComponent.prototype.selectComponent = function (comp) {
        if (comp.select) {
            comp.select = false;
        }
        else {
            comp.select = true;
        }
        return false;
    };
    IncidenciasResumenComponent.prototype.modalactuacion = function (item) {
        this.componentesel = item;
        if (!this.componentesel.actuaciones) {
            this.componentesel.actuaciones = [];
        }
        this.createSwal.show();
        return false;
    };
    IncidenciasResumenComponent.prototype.agregaractuacion = function () {
        this.componentesel.actuaciones.push(this.actuacionesNew);
        this.actuacionesNew = new __WEBPACK_IMPORTED_MODULE_12__viewmodel_componente_actuacion__["a" /* ComponenteActuacion */]();
        this.actuacionesNew.tipo = '-1';
    };
    IncidenciasResumenComponent.prototype.onvaluechanged = function (value) {
        if (value.index === undefined || value.index === '') {
            this.actuacionesNew.dias = value.dias;
        }
        else {
            this.componentesel.actuaciones[value.index].dias = value.dias;
        }
    };
    IncidenciasResumenComponent.prototype.clickcontrato = function (contrato) {
        this.prioridades = contrato.contrato.tipocontrato.categoriaincidentes;
        this.item.contrato_componente_id = contrato.id;
    };
    IncidenciasResumenComponent.prototype.getclassestadoincidencia = function (estado) {
        var result;
        result = this.estadoincidente.filter(function (estadoinc) { return estadoinc.value === estado; });
        return result.length > 0 ? result[0].label : '';
    };
    IncidenciasResumenComponent.prototype.onErrorItem = function (item, response, status, headers) {
        var error = JSON.parse(response); //error server response
        console.log(error);
    };
    IncidenciasResumenComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    IncidenciasResumenComponent.prototype.fileOverAnother = function (e) {
        this.hasAnotherDropZoneOver = e;
    };
    IncidenciasResumenComponent.prototype.onSuccessItem = function (item, response, status, headers) {
        if (this.item.imagenes == undefined || this.item.imagenes == null) {
            this.item.imagenes = [];
        }
        this.item.imagenes.push($.parseJSON(response).data);
    };
    IncidenciasResumenComponent.prototype.tooglerogthmenu = function () {
        $('body').toggleClass('rmv-right-panel');
    };
    IncidenciasResumenComponent.prototype.guardarrespuesta = function () {
        var _this = this;
        this.spinnerService.show();
        this.respuestaService.add(this.irespuesta)
            .subscribe(function (value) {
            _this.spinnerService.hide();
            _this.notificationService.onSuccess('Respuesta agregada con exito.');
            _this.router.navigateByUrl('incidencia');
        }, function (err) {
            _this.spinnerService.hide();
            if (err.status_code == 422) {
                _this.notificationService.onError('El Respuesta ya existe');
            }
            else {
                _this.notificationService.onError('Se ha producido un error.');
            }
        });
    };
    IncidenciasResumenComponent.prototype.abrirfirma = function () {
        this.createSwal.show();
    };
    IncidenciasResumenComponent.prototype.onvaluechangedfirma = function (value) {
        this.irespuesta.firmacliente = value;
        this.createSwal.nativeSwal.close();
    };
    IncidenciasResumenComponent.prototype.cancelarfirma = function (value) {
        this.createSwal.nativeSwal.close();
    };
    IncidenciasResumenComponent.prototype.ngAfterViewInit = function () {
        $('.mini-nav, .sidebar-menu, .right-side-panel, .message-center, .right-sidebar').perfectScrollbar();
    };
    IncidenciasResumenComponent.prototype.FieldsChange = function (values) {
        this.materialnew.pedido = values.currentTarget.checked;
    };
    IncidenciasResumenComponent.prototype.ocultarmenu = function () {
        $('body').toggleClass('rmv-right-panel');
    };
    IncidenciasResumenComponent.prototype.addcomentario = function () {
        var _this = this;
        if (this.item.comentarios == undefined) {
            this.item.comentarios = [];
        }
        this.comentarionew.id_incidencia = this.item.id;
        this.comentarioincidenteService.add(this.comentarionew)
            .subscribe(function (value) {
            _this.item.comentarios.push(value.data);
            _this.comentarionew = new __WEBPACK_IMPORTED_MODULE_22__viewmodel_comentario_incidente__["a" /* ComentarioIncidente */]();
            _this.notificationService.onSuccess('Comentario agregado con exito.');
        }, function (err) {
            _this.spinnerService.hide();
            if (err.status_code == 422) {
                _this.notificationService.onError('Comentario ya existe');
            }
            else {
                _this.notificationService.onError('Se ha producido un error.');
            }
        });
    };
    IncidenciasResumenComponent.prototype.calculardias = function (fecha) {
        var actual = __WEBPACK_IMPORTED_MODULE_16_moment__();
        fecha = __WEBPACK_IMPORTED_MODULE_16_moment__(fecha);
        var diff = actual.diff(fecha, 'days');
        return diff;
    };
    IncidenciasResumenComponent.prototype.verparte = function (ptrab) {
        this.respuestaview = ptrab;
        this.partetrabajoSwal.show();
        return false;
    };
    IncidenciasResumenComponent.prototype.agregartecnicoadicional = function () {
        var _this = this;
        if (this.tecnicoadicionalnew.id_usuario != -1) {
            if (this.item.tecnicosadicionales == undefined) {
                this.item.tecnicosadicionales = [];
            }
            var resul = this.usuariostec.filter(function (tec) { return tec.id == _this.tecnicoadicionalnew.id_usuario; });
            resul[0].selected = true;
            this.tecnicoadicionalnew.usuario = resul[0];
            this.item.tecnicosadicionales.push(this.tecnicoadicionalnew);
            this.tecnicoadicionalnew = new __WEBPACK_IMPORTED_MODULE_24__viewmodel_tecnicoadicional__["a" /* Tecnicoadicional */]();
            this.tecnicoadicionalnew.id_usuario = -1;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myckeditor'),
        __metadata("design:type", Object)
    ], IncidenciasResumenComponent.prototype, "ckeditor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('rtackeditor'),
        __metadata("design:type", Object)
    ], IncidenciasResumenComponent.prototype, "rtackeditor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('createSwal'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_11__toverux_ngx_sweetalert2__["a" /* SwalComponent */])
    ], IncidenciasResumenComponent.prototype, "createSwal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('backwardSwal'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_11__toverux_ngx_sweetalert2__["a" /* SwalComponent */])
    ], IncidenciasResumenComponent.prototype, "backwardSwal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('partetrabajoSwal'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_11__toverux_ngx_sweetalert2__["a" /* SwalComponent */])
    ], IncidenciasResumenComponent.prototype, "partetrabajoSwal", void 0);
    IncidenciasResumenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-incidencias-resumen',
            template: __webpack_require__("./src/app/incidencias/incidencias-resumen/incidencias-resumen.component.html"),
            styles: [__webpack_require__("./src/app/incidencias/incidencias-resumen/incidencias-resumen.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__["Ng4LoadingSpinnerService"],
            __WEBPACK_IMPORTED_MODULE_2__incidencia_service__["a" /* IncidenciaService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__shared__["k" /* NotificationService */],
            __WEBPACK_IMPORTED_MODULE_4__shared__["i" /* LocalDataService */],
            __WEBPACK_IMPORTED_MODULE_6__clientes_cliente_service__["a" /* ClienteService */],
            __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_datepicker__["b" /* BsLocaleService */],
            __WEBPACK_IMPORTED_MODULE_8__tipocontrato_tipocontrato_service__["a" /* TipocontratoService */],
            __WEBPACK_IMPORTED_MODULE_9__estacionservicio_estacionservicio_service__["a" /* EstacionservicioService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_19__respuesta_respuestas_service__["a" /* RespuestasService */],
            __WEBPACK_IMPORTED_MODULE_20__articulo_articulo_service__["a" /* ArticuloService */],
            __WEBPACK_IMPORTED_MODULE_23__comentarioincidente_comentarioincidente_service__["a" /* ComentarioincidenteService */]])
    ], IncidenciasResumenComponent);
    return IncidenciasResumenComponent;
}());



/***/ }),

/***/ "./src/app/incidencias/incidencias-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IncidenciasRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__incidencia_index_incidencia_index_component__ = __webpack_require__("./src/app/incidencias/incidencia-index/incidencia-index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__incidencia_add_incidencia_add_component__ = __webpack_require__("./src/app/incidencias/incidencia-add/incidencia-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__incidencia_edit_incidencia_edit_component__ = __webpack_require__("./src/app/incidencias/incidencia-edit/incidencia-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__incidencias_resumen_incidencias_resumen_component__ = __webpack_require__("./src/app/incidencias/incidencias-resumen/incidencias-resumen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_can_deactivate_guard_can_deactivate_guard_service__ = __webpack_require__("./src/app/shared/can-deactivate-guard/can-deactivate-guard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [{ path: '', component: __WEBPACK_IMPORTED_MODULE_2__incidencia_index_incidencia_index_component__["a" /* IncidenciaIndexComponent */] },
    { path: 'add', component: __WEBPACK_IMPORTED_MODULE_3__incidencia_add_incidencia_add_component__["a" /* IncidenciaAddComponent */], canDeactivate: [__WEBPACK_IMPORTED_MODULE_6__shared_can_deactivate_guard_can_deactivate_guard_service__["a" /* Candeactivateguard */]] },
    { path: 'edit/:id', component: __WEBPACK_IMPORTED_MODULE_4__incidencia_edit_incidencia_edit_component__["a" /* IncidenciaEditComponent */], canDeactivate: [__WEBPACK_IMPORTED_MODULE_6__shared_can_deactivate_guard_can_deactivate_guard_service__["a" /* Candeactivateguard */]] },
    { path: 'resumen/:id', component: __WEBPACK_IMPORTED_MODULE_5__incidencias_resumen_incidencias_resumen_component__["a" /* IncidenciasResumenComponent */], canDeactivate: [__WEBPACK_IMPORTED_MODULE_6__shared_can_deactivate_guard_can_deactivate_guard_service__["a" /* Candeactivateguard */]] },
];
var IncidenciasRoutingModule = /** @class */ (function () {
    function IncidenciasRoutingModule() {
    }
    IncidenciasRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], IncidenciasRoutingModule);
    return IncidenciasRoutingModule;
}());



/***/ }),

/***/ "./src/app/incidencias/incidencias.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidenciasModule", function() { return IncidenciasModule; });
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap_datepicker__ = __webpack_require__("./node_modules/ngx-bootstrap/datepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_bootstrap_timepicker__ = __webpack_require__("./node_modules/ngx-bootstrap/timepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ngx_bootstrap_chronos__ = __webpack_require__("./node_modules/ngx-bootstrap/chronos/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ngx_bootstrap_locale__ = __webpack_require__("./node_modules/ngx-bootstrap/locale.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_ckeditor__ = __webpack_require__("./node_modules/ng2-ckeditor/lib/bundles/ng2-ckeditor.umd.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_ckeditor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_ng2_ckeditor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__dias_week_dias_week_module__ = __webpack_require__("./src/app/dias-week/dias-week.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__incidencias_routing_module__ = __webpack_require__("./src/app/incidencias/incidencias-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__incidencia_index_incidencia_index_component__ = __webpack_require__("./src/app/incidencias/incidencia-index/incidencia-index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__incidencia_service__ = __webpack_require__("./src/app/incidencias/incidencia.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__respuesta_respuestas_service__ = __webpack_require__("./src/app/respuesta/respuestas.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__shared_interceptor_http_interceptor__ = __webpack_require__("./src/app/shared/interceptor/http_interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__incidencia_add_incidencia_add_component__ = __webpack_require__("./src/app/incidencias/incidencia-add/incidencia-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__incidencia_edit_incidencia_edit_component__ = __webpack_require__("./src/app/incidencias/incidencia-edit/incidencia-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ng_fullcalendar__ = __webpack_require__("./node_modules/ng-fullcalendar/ng-fullcalendar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ng2_file_upload__ = __webpack_require__("./node_modules/ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__singuser_singuser_module__ = __webpack_require__("./src/app/singuser/singuser.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__articulo_articulo_service__ = __webpack_require__("./src/app/articulo/articulo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__google_apis_maps_service__ = __webpack_require__("./src/app/google-apis/maps.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__comentarioincidente_comentarioincidente_service__ = __webpack_require__("./src/app/comentarioincidente/comentarioincidente.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__incidencias_resumen_incidencias_resumen_component__ = __webpack_require__("./src/app/incidencias/incidencias-resumen/incidencias-resumen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__shared_can_deactivate_guard_can_deactivate_guard_service__ = __webpack_require__("./src/app/shared/can-deactivate-guard/can-deactivate-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ng_select_ng_select__ = __webpack_require__("./node_modules/@ng-select/ng-select/esm5/ng-select.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__directives_no_dbl_click_directive_directive__ = __webpack_require__("./src/app/directives/no-dbl-click-directive.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__incidencia_edit_tab_incidencia_edit_tab_component__ = __webpack_require__("./src/app/incidencias/incidencia-edit-tab/incidencia-edit-tab.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




/*modules */


































Object(__WEBPACK_IMPORTED_MODULE_12_ngx_bootstrap_chronos__["a" /* defineLocale */])('es', __WEBPACK_IMPORTED_MODULE_13_ngx_bootstrap_locale__["a" /* esLocale */]);
var IncidenciasModule = /** @class */ (function () {
    function IncidenciasModule() {
    }
    IncidenciasModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_16__incidencias_routing_module__["a" /* IncidenciasRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap_datepicker__["a" /* BsDatepickerModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_11_ngx_bootstrap_timepicker__["a" /* TimepickerModule */].forRoot(),
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
                __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap_datepicker__["a" /* BsDatepickerModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_14_ng2_ckeditor__["CKEditorModule"],
                __WEBPACK_IMPORTED_MODULE_15__dias_week_dias_week_module__["a" /* DiasWeekModule */],
                __WEBPACK_IMPORTED_MODULE_23_ng_fullcalendar__["b" /* FullCalendarModule */],
                __WEBPACK_IMPORTED_MODULE_24_ng2_file_upload__["FileUploadModule"],
                __WEBPACK_IMPORTED_MODULE_25__singuser_singuser_module__["a" /* SinguserModule */],
                __WEBPACK_IMPORTED_MODULE_31__ng_select_ng_select__["a" /* NgSelectModule */],
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_17__incidencia_index_incidencia_index_component__["a" /* IncidenciaIndexComponent */], __WEBPACK_IMPORTED_MODULE_21__incidencia_add_incidencia_add_component__["a" /* IncidenciaAddComponent */], __WEBPACK_IMPORTED_MODULE_22__incidencia_edit_incidencia_edit_component__["a" /* IncidenciaEditComponent */],
                __WEBPACK_IMPORTED_MODULE_29__incidencias_resumen_incidencias_resumen_component__["a" /* IncidenciasResumenComponent */],
                __WEBPACK_IMPORTED_MODULE_32__directives_no_dbl_click_directive_directive__["a" /* NoDblClickDirectiveDirective */],
                __WEBPACK_IMPORTED_MODULE_33__incidencia_edit_tab_incidencia_edit_tab_component__["a" /* IncidenciaEditTabComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_18__incidencia_service__["a" /* IncidenciaService */], __WEBPACK_IMPORTED_MODULE_19__respuesta_respuestas_service__["a" /* RespuestasService */],
                __WEBPACK_IMPORTED_MODULE_26__articulo_articulo_service__["a" /* ArticuloService */], __WEBPACK_IMPORTED_MODULE_27__google_apis_maps_service__["a" /* MapsService */], __WEBPACK_IMPORTED_MODULE_28__comentarioincidente_comentarioincidente_service__["a" /* ComentarioincidenteService */],
                __WEBPACK_IMPORTED_MODULE_30__shared_can_deactivate_guard_can_deactivate_guard_service__["a" /* Candeactivateguard */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_20__shared_interceptor_http_interceptor__["a" /* RequestInterceptor */],
                    multi: true,
                }]
        })
    ], IncidenciasModule);
    return IncidenciasModule;
}());



/***/ }),

/***/ "./src/app/respuesta/respuestas.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RespuestasService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_environment_environment_service__ = __webpack_require__("./src/app/shared/environment/environment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RespuestasService = /** @class */ (function () {
    function RespuestasService(_http, environmentService) {
        this._http = _http;
        this.environmentService = environmentService;
    }
    RespuestasService.prototype.get = function (page) {
        var url = this.environmentService.setApiServiceWithPageEnterprise('respuesta', page);
        return this._http.get(url)
            .map(function (res) { return res; })
            .catch(this.handleError);
    };
    RespuestasService.prototype.add = function (userData) {
        var url = this.environmentService.setApiService('respuesta');
        return this._http.post(url, userData)
            .map(function (res) { return res; })
            .catch(this.handleError);
    };
    RespuestasService.prototype.getById = function ($id) {
        var url = this.environmentService.setApiServiceById('respuesta', $id);
        return this._http.get(url)
            .map(function (res) { return res; })
            .catch(this.handleError);
    };
    RespuestasService.prototype.getbytoken = function (page) {
        var url = this.environmentService.setApiServiceWithVars('respuesta', page);
        return this._http.get(url)
            .map(function (res) { return res; })
            .catch(this.handleError);
    };
    RespuestasService.prototype.update = function (userData) {
        var url = this.environmentService.setApiServiceById('respuesta', userData.id);
        return this._http.put(url, userData)
            .map(function (res) { return res; })
            .catch(this.handleError);
    };
    RespuestasService.prototype.updatecomponent = function (userData) {
        var url = this.environmentService.setApiService('respuesta');
        return this._http.post(url, userData)
            .map(function (res) { return res; })
            .catch(this.handleError);
    };
    RespuestasService.prototype.delete = function ($id) {
        var url = this.environmentService.setApiServiceById('respuesta', $id);
        return this._http.delete(url)
            .map(function (res) { return res; })
            .catch(this.handleError);
    };
    RespuestasService.prototype.handleError = function (error) {
        var errMsg;
        errMsg = error.error;
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(errMsg);
    };
    RespuestasService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4__shared_environment_environment_service__["a" /* EnvironmentService */]])
    ], RespuestasService);
    return RespuestasService;
}());



/***/ }),

/***/ "./src/app/singuser/singuser.component.css":
/***/ (function(module, exports) {

module.exports = "canvas{\r\n    border:1px solid #000000;\r\n    border-radius: 25px;\r\n}"

/***/ }),

/***/ "./src/app/singuser/singuser.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  <div class=\"col-lg-12\">\n      <canvas #canvas></canvas>\n  </div>\n  <div class=\"col-lg-12\">\n      <button type=\"button\" (click)=\"valuechanged()\" class=\"btn btn-success\" >Aceptar </button> \n      <button type=\"button\" (click)=\"cancelarfirma()\" class=\"btn btn-inverse\" >Cancelar </button>\n  </div>\n\n</div>\n  \n"

/***/ }),

/***/ "./src/app/singuser/singuser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SinguserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_fromEvent__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toverux_ngx_sweetalert2__ = __webpack_require__("./node_modules/@toverux/ngx-sweetalert2/esm5/toverux-ngx-sweetalert2.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SinguserComponent = /** @class */ (function () {
    function SinguserComponent() {
        this.width = 800;
        this.height = 300;
        this.onvaluechanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.oncancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    SinguserComponent.prototype.ngAfterViewInit = function () {
        var canvasEl = this.canvas.nativeElement;
        this.cx = canvasEl.getContext('2d');
        this.width = window.innerWidth - 100;
        this.height = window.innerHeight * 0.55;
        canvasEl.width = this.width;
        canvasEl.height = this.height;
        this.cx.lineWidth = 3;
        this.cx.lineCap = 'round';
        this.cx.strokeStyle = '#000';
        this.captureEvents(canvasEl);
    };
    SinguserComponent.prototype.captureEvents = function (canvasEl) {
        var _this = this;
        // this will capture all mousedown events from the canvas element
        Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_fromEvent__["a" /* fromEvent */])(canvasEl, 'mousedown')
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["g" /* switchMap */])(function (e) {
            // after a mouse down, we'll record all mouse moves
            return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_fromEvent__["a" /* fromEvent */])(canvasEl, 'mousemove')
                .pipe(
            // we'll stop (and unsubscribe) once the user releases the mouse
            // this will trigger a 'mouseup' event    
            Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["h" /* takeUntil */])(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_fromEvent__["a" /* fromEvent */])(canvasEl, 'mouseup')), 
            // we'll also stop (and unsubscribe) once the mouse leaves the canvas (mouseleave event)
            Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["h" /* takeUntil */])(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_fromEvent__["a" /* fromEvent */])(canvasEl, 'mouseleave')), 
            // pairwise lets us get the previous value to draw a line from
            // the previous point to the current point    
            Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["e" /* pairwise */])());
        }))
            .subscribe(function (res) {
            var rect = canvasEl.getBoundingClientRect();
            // previous and current position with the offset
            var prevPos = {
                x: res[0].clientX - rect.left,
                y: res[0].clientY - rect.top
            };
            var currentPos = {
                x: res[1].clientX - rect.left,
                y: res[1].clientY - rect.top
            };
            // this method we'll implement soon to do the actual drawing
            _this.drawOnCanvas(prevPos, currentPos);
        });
        // mobile event 
        // this will capture all mousedown events from the canvas element
        Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_fromEvent__["a" /* fromEvent */])(canvasEl, 'touchstart')
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["g" /* switchMap */])(function (e) {
            // after a mouse down, we'll record all mouse moves
            return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_fromEvent__["a" /* fromEvent */])(canvasEl, 'touchmove')
                .pipe(
            // we'll stop (and unsubscribe) once the user releases the mouse
            // this will trigger a 'mouseup' event    
            Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["h" /* takeUntil */])(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_fromEvent__["a" /* fromEvent */])(canvasEl, 'touchend')), 
            // we'll also stop (and unsubscribe) once the mouse leaves the canvas (mouseleave event)
            Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["h" /* takeUntil */])(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_fromEvent__["a" /* fromEvent */])(canvasEl, 'mouseleave')), 
            // pairwise lets us get the previous value to draw a line from
            // the previous point to the current point    
            Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["e" /* pairwise */])());
        }))
            .subscribe(function (res) {
            var rect = canvasEl.getBoundingClientRect();
            // previous and current position with the offset
            var prevPos = {
                x: res[0].touches[0].clientX - rect.left,
                y: res[0].touches[0].clientY - rect.top
            };
            var currentPos = {
                x: res[1].touches[0].clientX - rect.left,
                y: res[1].touches[0].clientY - rect.top
            };
            // this method we'll implement soon to do the actual drawing
            _this.drawOnCanvas(prevPos, currentPos);
        });
    };
    SinguserComponent.prototype.drawOnCanvas = function (prevPos, currentPos) {
        if (!this.cx) {
            return;
        }
        this.cx.beginPath();
        if (prevPos) {
            this.cx.moveTo(prevPos.x, prevPos.y); // from
            this.cx.lineTo(currentPos.x, currentPos.y);
            this.cx.stroke();
        }
    };
    SinguserComponent.prototype.valuechanged = function () {
        var canvasEl = this.canvas.nativeElement;
        var image = canvasEl.toDataURL();
        this.onvaluechanged.emit(image);
    };
    SinguserComponent.prototype.cancelarfirma = function () {
        this.oncancel.emit('');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('canvas'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], SinguserComponent.prototype, "canvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('createSwal'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__toverux_ngx_sweetalert2__["a" /* SwalComponent */])
    ], SinguserComponent.prototype, "createSwal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SinguserComponent.prototype, "width", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SinguserComponent.prototype, "height", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], SinguserComponent.prototype, "onvaluechanged", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], SinguserComponent.prototype, "oncancel", void 0);
    SinguserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-singuser',
            template: __webpack_require__("./src/app/singuser/singuser.component.html"),
            styles: [__webpack_require__("./src/app/singuser/singuser.component.css")]
        })
    ], SinguserComponent);
    return SinguserComponent;
}());



/***/ }),

/***/ "./src/app/singuser/singuser.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SinguserModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__singuser_component__ = __webpack_require__("./src/app/singuser/singuser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toverux_ngx_sweetalert2__ = __webpack_require__("./node_modules/@toverux/ngx-sweetalert2/esm5/toverux-ngx-sweetalert2.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SinguserModule = /** @class */ (function () {
    function SinguserModule() {
    }
    SinguserModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__toverux_ngx_sweetalert2__["b" /* SweetAlert2Module */].forRoot(),
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__singuser_component__["a" /* SinguserComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__singuser_component__["a" /* SinguserComponent */]]
        })
    ], SinguserModule);
    return SinguserModule;
}());



/***/ }),

/***/ "./src/app/viewmodel/MaterialRespuesta.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialRespuesta; });
var MaterialRespuesta = /** @class */ (function () {
    function MaterialRespuesta() {
    }
    return MaterialRespuesta;
}());



/***/ }),

/***/ "./src/app/viewmodel/comentario_incidente.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComentarioIncidente; });
var ComentarioIncidente = /** @class */ (function () {
    function ComentarioIncidente() {
    }
    return ComentarioIncidente;
}());



/***/ }),

/***/ "./src/app/viewmodel/incidencia.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Incidencia; });
var Incidencia = /** @class */ (function () {
    function Incidencia() {
    }
    return Incidencia;
}());



/***/ }),

/***/ "./src/app/viewmodel/respuesta.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Respuesta; });
var Respuesta = /** @class */ (function () {
    function Respuesta() {
    }
    return Respuesta;
}());



/***/ }),

/***/ "./src/app/viewmodel/tecnicoadicional.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tecnicoadicional; });
var Tecnicoadicional = /** @class */ (function () {
    function Tecnicoadicional() {
    }
    return Tecnicoadicional;
}());



/***/ })

});
//# sourceMappingURL=incidencias.module.chunk.js.map