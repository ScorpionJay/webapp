describe("uiCurrency",function(){var e;beforeEach(module("ui")),beforeEach(inject(function(n){e=n.$new()})),describe("use on a div element with two-way binding",function(){it("should have ui-currency-pos style non-zero positive model number ",function(){inject(function(n){var u;u=n("<div ui-currency ng-model='aNum'></div>")(e),e.$apply(function(){e.aNum=.5123}),expect(u.text()).toEqual("$0.51"),expect(u.hasClass("ui-currency-pos")).toBeTruthy(),expect(u.hasClass("ui-currency-neg")).toBeFalsy(),expect(u.hasClass("ui-currency-zero")).toBeFalsy()})}),it("should have ui-currency-neg style when negative model number",function(){inject(function(n){var u;u=n("<div ui-currency ng-model='aNum'></div>")(e),e.$apply(function(){e.aNum=-123}),expect(u.text()).toEqual("($123.00)"),expect(u.hasClass("ui-currency-pos")).toBeFalsy(),expect(u.hasClass("ui-currency-neg")).toBeTruthy()})}),it("should have ui-currency-zero style when zero model number",function(){inject(function(n){var u;u=n("<div ui-currency ng-model='aNum'></div>")(e),e.$apply(function(){e.aNum=0}),expect(u.text()).toEqual("$0.00"),expect(u.hasClass("ui-currency-pos")).toBeFalsy(),expect(u.hasClass("ui-currency-neg")).toBeFalsy(),expect(u.hasClass("ui-currency-zero")).toBeTruthy()})}),it("should not have any ui-currency styles or a value at all when missing scope model value",function(){inject(function(n){var u;u=n("<div ui-currency ng-model='aMissingNum'></div>")(e),expect(u.text()).toEqual(""),expect(u.hasClass("ui-currency-pos")).toBeFalsy(),expect(u.hasClass("ui-currency-neg")).toBeFalsy(),expect(u.hasClass("ui-currency-zero")).toBeFalsy()})}),it("should not have any ui-currency styles or a value at all when provided a non-numeric model value",function(){inject(function(n){var u;u=n("<div ui-currency ng-model='aBadNum'></div>")(e),e.$apply(function(){e.aBadNum="bad"}),expect(u.text()).toEqual(""),expect(u.hasClass("ui-currency-pos")).toBeFalsy(),expect(u.hasClass("ui-currency-neg")).toBeFalsy(),expect(u.hasClass("ui-currency-zero")).toBeFalsy()})}),it("should have user-defined positive style when provided in uiCurrency attr",function(){inject(function(n){var u;u=n("<div ui-currency=\"{ pos:'pstyle' }\" ng-model='aNum'></div>")(e),e.$apply(function(){e.aNum=1}),expect(u.hasClass("pstyle")).toBeTruthy()})})}),describe("use on a tag element",function(){it("should have a defined element",function(){inject(function(n){var u;u=n("<ui-currency ng-model='aNum'></ui-currency>")(e),e.$apply(function(){e.aNum=1}),expect(u).toBeDefined(),expect(u.text()).toEqual("$1.00")})})})});