System.register(['@angular/platform-browser-dynamic', '@angular/core', '@vaadin/angular2-polymer'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
        switch (arguments.length) {
            case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
            case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
            case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
        }
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var platform_browser_dynamic_1, core_1, angular2_polymer_1;
    var TestApp;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (angular2_polymer_1_1) {
                angular2_polymer_1 = angular2_polymer_1_1;
            }],
        execute: function() {
            core_1.enableProdMode();
            TestApp = (function () {
                function TestApp(e, ref) {
                    this.items = ['foo', 'bar', 'baz'];
                    this.selection = 'foo';
                    this._host = e.nativeElement;
                    this._ref = ref;
                }
                TestApp.prototype.ngAfterViewInit = function () {
                    var event = new CustomEvent('readyForTests', { detail: this });
                    this._host.dispatchEvent(event);
                };
                TestApp.prototype.detectChanges = function () {
                    this._ref.detectChanges();
                };
                TestApp = __decorate([
                    core_1.Component({
                        selector: 'test-app',
                        template: "\n    <vaadin-combo-box [(value)]=\"selection\" required class=\"bound\"></vaadin-combo-box>\n\n    <form #testForm=\"ngForm\">\n      <vaadin-combo-box [items]=\"items\" ngControl=\"selection\" required [_form]=\"testForm\"></vaadin-combo-box>\n    </form>\n    ",
                        directives: [angular2_polymer_1.PolymerElement('vaadin-combo-box')]
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.ChangeDetectorRef])
                ], TestApp);
                return TestApp;
            })();
            exports_1("TestApp", TestApp);
            document.body.addEventListener('bootstrap', function () {
                platform_browser_dynamic_1.bootstrap(TestApp);
            });
        }
    }
});
//# sourceMappingURL=main.js.map