!function(){"use strict";describe("uiShow",function(){var e,i;beforeEach(module("ui.directives")),beforeEach(inject(function(o,t){e=o.$new(),i=t})),describe("linking the directive",function(){it("should call scope.$watch",function(){spyOn(e,"$watch"),i('<div ui-show="foo"></div>')(e),expect(e.$watch).toHaveBeenCalled()})}),describe("executing the watcher",function(){it("should add the ui-show class if true",function(){var o=i('<div ui-show="foo"></div>')(e);e.foo=!0,e.$apply(),expect(o.hasClass("ui-show")).toBe(!0)}),it("should remove the ui-show class if false",function(){var o=i('<div ui-show="foo"></div>')(e);e.foo=!1,e.$apply(),expect(o.hasClass("ui-show")).toBe(!1)})})}),describe("uiHide",function(){var e,i;beforeEach(module("ui.directives")),beforeEach(inject(function(o,t){e=o.$new(),i=t})),describe("when the directive is linked",function(){it("should call scope.$watch",function(){spyOn(e,"$watch"),i('<div ui-hide="foo"></div>')(e),expect(e.$watch).toHaveBeenCalled()})}),describe("executing the watcher",function(){it("should add the ui-hide class if true",function(){var o=i('<div ui-hide="foo"></div>')(e);e.foo=!0,e.$apply(),expect(o.hasClass("ui-hide")).toBe(!0)}),it("should remove the ui-hide class if false",function(){var o=i('<div ui-hide="foo"></div>')(e);e.foo=!1,e.$apply(),expect(o.hasClass("ui-hide")).toBe(!1)})})}),describe("uiToggle",function(){var e,i;beforeEach(module("ui.directives")),beforeEach(inject(function(o,t){e=o.$new(),i=t})),describe("when the directive is linked",function(){it("should call scope.$watch",function(){spyOn(e,"$watch"),i('<div ui-toggle="foo"></div>')(e),expect(e.$watch).toHaveBeenCalled()})}),describe("executing the watcher",function(){it("should remove the ui-hide class and add the ui-show class if true",function(){var o=i('<div ui-toggle="foo"></div>')(e);e.foo=!0,e.$apply(),expect(o.hasClass("ui-show")&&!o.hasClass("ui-hide")).toBe(!0)}),it("should remove the ui-hide class and add the ui-show class if false",function(){var o=i('<div ui-toggle="foo"></div>')(e);e.foo=!1,e.$apply(),expect(!o.hasClass("ui-show")&&o.hasClass("ui-hide")).toBe(!0)})})})}();