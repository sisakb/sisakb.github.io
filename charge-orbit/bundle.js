(()=>{"use strict";var t,n=(t=function(n,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])})(n,o)},function(n,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function r(){this.constructor=n}t(n,o),n.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}),o=function(){function t(){}return t.prototype.draw=function(t){alert("Draw method not implemented")},t}(),r=function(t){function o(n,o){var r=t.call(this)||this;return r.x=n,r.y=o,r}return n(o,t),o.prototype.draw=function(t){this.toCanvasPoint(t).draw(t)},o.prototype.toCanvasPoint=function(t){return new e(this.x+t.size/2,this.y+t.size/2)},o}(o),e=function(){function t(t,n){this.x=t,this.y=n}return t.prototype.draw=function(t){t.ctx.beginPath(),t.ctx.arc(this.x,this.y,2,0,2*Math.PI,!0),t.ctx.stroke()},t}(),i=function(t){function o(n,o){var r=t.call(this)||this;return r.p1=n,r.p2=o,r}return n(o,t),o.prototype.draw=function(t){this.p1.draw(t),this.p2.draw(t),t.ctx.moveTo(this.p1.toCanvasPoint(t).x,this.p1.toCanvasPoint(t).y),t.ctx.lineTo(this.p2.toCanvasPoint(t).x,this.p2.toCanvasPoint(t).y),t.ctx.stroke()},o}(o),a=new(function(){function t(t,n){this.id=t,this.size=n;var o=document.getElementById(t);this.context=o.getContext("2d")}return Object.defineProperty(t.prototype,"ctx",{get:function(){return this.context},enumerable:!1,configurable:!0}),t.prototype.drawCartesian=function(t,n){var o,r;(0,o=this.size+t,r=t,void 0===r&&(r=1),Array(Math.ceil((o-0)/r)).fill(0).map((function(t,n){return t+n*r}))).map((function(t){}))},t.prototype.draw=function(t){t.draw(this)},t}())("canvas",800);a.drawCartesian(10,10),a.draw(new i(new r(0,0),new r(200,200)))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvR3JhcGgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbImRyYXciLCJnIiwiYWxlcnQiLCJ4IiwieSIsInRoaXMiLCJ0b0NhbnZhc1BvaW50IiwiQ2FudmFzUG9pbnQiLCJzaXplIiwiRHJhd2FibGUiLCJjdHgiLCJiZWdpblBhdGgiLCJhcmMiLCJNYXRoIiwiUEkiLCJzdHJva2UiLCJwMSIsInAyIiwibW92ZVRvIiwibGluZVRvIiwiaWQiLCJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY29udGV4dCIsImdldENvbnRleHQiLCJkcmF3Q2FydGVzaWFuIiwieFdpZHRoIiwieVdpZHRoIiwic3RvcCIsInN0ZXAiLCJBcnJheSIsImNlaWwiLCJmaWxsIiwibWFwIiwiZWxlbSIsIkxpbmUiLCJQb2ludCJdLCJtYXBwaW5ncyI6IjJkQUVBLDJCQUlBLE9BSFEsWUFBQUEsS0FBUCxTQUFZQyxHQUNYQyxNQUFNLGdDQUVSLEVBSkEsR0FNQSxjQUNDLFdBQW1CQyxFQUFrQkMsR0FBckMsTUFDQyxjQUFPLEssT0FEVyxFQUFBRCxJQUFrQixFQUFBQyxJLEVBV3RDLE9BWm9CLE9BS1osWUFBQUosS0FBUCxTQUFZQyxHQUNYSSxLQUFLQyxjQUFjTCxHQUFHRCxLQUFLQyxJQUdyQixZQUFBSyxjQUFQLFNBQXFCTCxHQUNwQixPQUFPLElBQUlNLEVBQVlGLEtBQUtGLEVBQUtGLEVBQUVPLEtBQUssRUFBSUgsS0FBS0QsRUFBS0gsRUFBRU8sS0FBSyxJQUUvRCxFQVpBLENBQW9CQyxHQWNwQixhQUNDLFdBQW1CTixFQUFrQkMsR0FBbEIsS0FBQUQsSUFBa0IsS0FBQUMsSUFTdEMsT0FMUSxZQUFBSixLQUFQLFNBQVlDLEdBQ1hBLEVBQUVTLElBQUlDLFlBQ0pWLEVBQUVTLElBQUlFLElBQUlQLEtBQUtGLEVBQUdFLEtBQUtELEVBQUcsRUFBRyxFQUFHLEVBQUlTLEtBQUtDLElBQUksR0FDN0NiLEVBQUVTLElBQUlLLFVBRVYsRUFWQSxHQVlBLGNBQ0MsV0FBbUJDLEVBQWtCQyxHQUFyQyxNQUNDLGNBQU8sSyxPQURXLEVBQUFELEtBQWtCLEVBQUFDLEssRUFXdEMsT0FabUIsT0FLWCxZQUFBakIsS0FBUCxTQUFZQyxHQUNYSSxLQUFLVyxHQUFHaEIsS0FBS0MsR0FDYkksS0FBS1ksR0FBR2pCLEtBQUtDLEdBQ2JBLEVBQUVTLElBQUlRLE9BQU9iLEtBQUtXLEdBQUdWLGNBQWNMLEdBQUdFLEVBQUdFLEtBQUtXLEdBQUdWLGNBQWNMLEdBQUdHLEdBQ2xFSCxFQUFFUyxJQUFJUyxPQUFPZCxLQUFLWSxHQUFHWCxjQUFjTCxHQUFHRSxFQUFHRSxLQUFLWSxHQUFHWCxjQUFjTCxHQUFHRyxHQUNsRUgsRUFBRVMsSUFBSUssVUFFUixFQVpBLENBQW1CTixHQ2hDZlIsRUFBSSxJRDhDUixXQUdDLFdBQW1CbUIsRUFBbUJaLEdBQW5CLEtBQUFZLEtBQW1CLEtBQUFaLE9BQ3JDLElBQU1hLEVBQTRCQyxTQUFTQyxlQUFlSCxHQUMxRGYsS0FBS21CLFFBQVVILEVBQU9JLFdBQVcsTUFnQm5DLE9BYkMsc0JBQUksa0JBQUcsQyxJQUFQLFdBQ0MsT0FBT3BCLEtBQUttQixTLGdDQUdOLFlBQUFFLGNBQVAsU0FBcUJDLEVBQWdCQyxHQTVEeEIsSUFBZ0JDLEVBQWNDLEdBNkRwQyxFQTdEc0JELEVBNkRuQnhCLEtBQUtHLEtBQU9tQixFQTdEcUJHLEVBNkRiSCxPQTdEYSxJQUFBRyxNQUFBLEdBQWFDLE1BQU1sQixLQUFLbUIsTUFBTUgsRUE2RGxFLEdBN0RrRkMsSUFBT0csS0E2RHpGLEdBN0RxR0MsS0FBSSxTQUFDL0IsRUFBR0MsR0FBTSxPQUFBRCxFQUFJQyxFQUFJMEIsTUE2RDVGSSxLQUFJLFNBQUEvQixRQUtuQyxZQUFBSCxLQUFQLFNBQVltQyxHQUNYQSxFQUFLbkMsS0FBS0ssT0FFWixFQXJCQSxHQzlDUSxDQUFVLFNBQVUsS0FDNUJKLEVBQUV5QixjQUFjLEdBQUksSUFDcEJ6QixFQUFFRCxLQUFLLElBQUlvQyxFQUFLLElBQUlDLEVBQU0sRUFBRyxHQUFJLElBQUlBLEVBQU0sSUFBSyxRIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHJhbmdlID0gKHN0YXJ0OiBudW1iZXIsIHN0b3A6IG51bWJlciwgc3RlcCA9IDEpID0+IEFycmF5KE1hdGguY2VpbCgoc3RvcCAtIHN0YXJ0KSAvIHN0ZXApKS5maWxsKHN0YXJ0KS5tYXAoKHgsIHkpID0+IHggKyB5ICogc3RlcClcclxuXHJcbmNsYXNzIERyYXdhYmxlIHtcclxuXHRwdWJsaWMgZHJhdyhnOiBHcmFwaCkge1xyXG5cdFx0YWxlcnQoXCJEcmF3IG1ldGhvZCBub3QgaW1wbGVtZW50ZWRcIilcclxuXHR9XHJcbn1cclxuXHJcbmNsYXNzIFBvaW50IGV4dGVuZHMgRHJhd2FibGUge1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyB4OiBudW1iZXIsIHB1YmxpYyB5OiBudW1iZXIpIHtcclxuXHRcdHN1cGVyKClcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBkcmF3KGc6IEdyYXBoKSB7XHJcblx0XHR0aGlzLnRvQ2FudmFzUG9pbnQoZykuZHJhdyhnKVxyXG5cdH1cclxuXHJcblx0cHVibGljIHRvQ2FudmFzUG9pbnQoZzogR3JhcGgpIDogQ2FudmFzUG9pbnQge1xyXG5cdFx0cmV0dXJuIG5ldyBDYW52YXNQb2ludCh0aGlzLnggKyAoZy5zaXplLzIpLCB0aGlzLnkgKyAoZy5zaXplLzIpKVxyXG5cdH1cclxufVxyXG5cclxuY2xhc3MgQ2FudmFzUG9pbnQge1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyB4OiBudW1iZXIsIHB1YmxpYyB5OiBudW1iZXIpIHtcclxuXHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZHJhdyhnOiBHcmFwaCkge1xyXG5cdFx0Zy5jdHguYmVnaW5QYXRoKClcclxuICBcdFx0Zy5jdHguYXJjKHRoaXMueCwgdGhpcy55LCAyLCAwLCAyICogTWF0aC5QSSwgdHJ1ZSlcclxuICBcdFx0Zy5jdHguc3Ryb2tlKClcclxuXHR9XHJcbn1cclxuXHJcbmNsYXNzIExpbmUgZXh0ZW5kcyBEcmF3YWJsZSB7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHAxOiBQb2ludCwgcHVibGljIHAyOiBQb2ludCkge1xyXG5cdFx0c3VwZXIoKVxyXG5cdH1cclxuXHJcblx0cHVibGljIGRyYXcoZzogR3JhcGgpIHtcclxuXHRcdHRoaXMucDEuZHJhdyhnKVxyXG5cdFx0dGhpcy5wMi5kcmF3KGcpXHJcblx0XHRnLmN0eC5tb3ZlVG8odGhpcy5wMS50b0NhbnZhc1BvaW50KGcpLngsIHRoaXMucDEudG9DYW52YXNQb2ludChnKS55KVxyXG5cdFx0Zy5jdHgubGluZVRvKHRoaXMucDIudG9DYW52YXNQb2ludChnKS54LCB0aGlzLnAyLnRvQ2FudmFzUG9pbnQoZykueSlcclxuXHRcdGcuY3R4LnN0cm9rZSgpXHJcblx0fVxyXG59XHJcblxyXG5jbGFzcyBHcmFwaCB7XHJcblx0cHJpdmF0ZSBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkRcclxuXHJcblx0Y29uc3RydWN0b3IocHVibGljIGlkOiBzdHJpbmcsIHB1YmxpYyBzaXplOiBudW1iZXIpIHtcclxuXHRcdGNvbnN0IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkgYXMgSFRNTENhbnZhc0VsZW1lbnRcclxuXHRcdHRoaXMuY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXHJcblx0fVxyXG5cclxuXHRnZXQgY3R4KCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuY29udGV4dFxyXG5cdH1cclxuXHJcblx0cHVibGljIGRyYXdDYXJ0ZXNpYW4oeFdpZHRoOiBudW1iZXIsIHlXaWR0aDogbnVtYmVyKSB7XHJcblx0XHRyYW5nZSgwLCB0aGlzLnNpemUgKyB4V2lkdGgsIHhXaWR0aCkubWFwKHggPT4ge1xyXG5cclxuXHRcdH0pXHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZHJhdyhlbGVtOiBEcmF3YWJsZSkge1xyXG5cdFx0ZWxlbS5kcmF3KHRoaXMpXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgeyBHcmFwaCwgUG9pbnQsIExpbmUgfSIsImltcG9ydCB7IEdyYXBoLCBQb2ludCwgTGluZSB9IGZyb20gJy4vR3JhcGgnXHJcblxyXG5sZXQgZyA9IG5ldyBHcmFwaChcImNhbnZhc1wiLCA4MDApXHJcbmcuZHJhd0NhcnRlc2lhbigxMCwgMTApXHJcbmcuZHJhdyhuZXcgTGluZShuZXcgUG9pbnQoMCwgMCksIG5ldyBQb2ludCgyMDAsIDIwMCkpKSJdLCJzb3VyY2VSb290IjoiIn0=