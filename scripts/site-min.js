"use strict";function inheritFromParent(o,t){var n=Object.create(t.prototype);n.prototype=o,o.prototype=n}function MovingBox(o){this.obj=o}function RedMovingBox(o){MovingBox.call(this,o)}"function"!==Object.create&&(Object.create=function(o){var t=function(){};return t.prototype=o,new t}),MovingBox.prototype.constructor=MovingBox,MovingBox.prototype.build=function(){console.log("Building")},RedMovingBox.prototype.color=function(o){this.color=o,console.log("I'm a "+this.color+" box")},inheritFromParent(RedMovingBox,MovingBox),console.log("part 2");var box=new RedMovingBox({});box.build();