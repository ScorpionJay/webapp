describe("uiCodemirror",function(){"use strict";var e,o,t,r=angular.module("ui.config");beforeEach(module("ui.directives")),beforeEach(function(){r.value("ui.config",{codemirror:{bar:"baz"}})}),beforeEach(inject(function(r,a,i){e=r.$new(),o=a,t=i})),afterEach(function(){r.value("ui.config",{})}),describe("compiling this directive",function(){it("should throw an error if used against a non-textarea",function(){function t(){o('<div ui-codemirror ng-model="foo"></div>')(e)}expect(t).toThrow()}),it("should not throw an error when used against a textarea",function(){function t(){o('<textarea ui-codemirror ng-model="foo"></textarea>')(e)}expect(t).not.toThrow()}),it("should throw an error when no ngModel attribute defined",function(){function t(){o("<textarea ui-codemirror></textarea>")(e)}expect(t).toThrow()}),it("should watch the uiCodemirror attribute",function(){spyOn(e,"$watch"),o('<textarea ui-codemirror ng-model="foo"></textarea>')(e),t.flush(),expect(e.$watch).toHaveBeenCalled()})}),describe("while spying on the CodeMirror instance",function(){var r;beforeEach(function(){var e=CodeMirror.fromTextArea;spyOn(CodeMirror,"fromTextArea").andCallFake(function(){return r=e.apply(this,arguments)})}),describe("verify the directive options",function(){it("should include the passed options",function(){o('<textarea ui-codemirror="{oof: \'baar\'}" ng-model="foo"></textarea>')(e),t.flush(),expect(CodeMirror.fromTextArea.mostRecentCall.args[1].oof).toEqual("baar")}),it("should include the default options",function(){o('<textarea ui-codemirror ng-model="foo"></textarea>')(e),t.flush(),expect(CodeMirror.fromTextArea.mostRecentCall.args[1].bar).toEqual("baz")})}),describe("when uiRefresh is added",function(){it("should trigger the CodeMirror.refresh() method",function(){o('<textarea ui-codemirror ng-model="foo" ui-refresh="bar"></textarea>')(e),t.flush(),spyOn(r,"refresh"),e.$apply("bar = true"),t.flush(),expect(r.refresh).toHaveBeenCalled()})}),describe("when the IDE changes",function(){it("should update the model",function(){o('<textarea ui-codemirror ng-model="foo"></textarea>')(e),e.$apply("foo = 'bar'"),t.flush();var a="baz";r.setValue(a),expect(e.foo).toBe(a)})}),describe("when the model changes",function(){it("should update the IDE",function(){o('<textarea ui-codemirror ng-model="foo"></textarea>')(e);e.foo="bar",e.$apply(),t.flush(),expect(r.getValue()).toBe(e.foo)})}),describe("when the model is undefined/null",function(){it("should update the IDE with an empty string",function(){o('<textarea ui-codemirror ng-model="foo"></textarea>')(e);e.$apply(),t.flush(),expect(e.foo).toBe(void 0),expect(r.getValue()).toBe(""),e.$apply('foo = "bar"'),expect(e.foo).toBe("bar"),expect(r.getValue()).toBe("bar"),e.$apply("foo = null"),expect(e.foo).toBe(null),expect(r.getValue()).toBe("")})})}),describe("when the model is an object or an array",function(){it("should throw an error",function(){function r(){o('<textarea ui-codemirror ng-model="foo"></textarea>')(e),t.flush(),e.foo={},e.$apply()}function a(){o('<textarea ui-codemirror ng-model="foo"></textarea>')(e),t.flush(),e.foo=[],e.$apply()}expect(r).toThrow(),expect(a).toThrow()})})});