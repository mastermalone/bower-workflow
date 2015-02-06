"use strict";

if(Object.create !== "function"){
	Object.create = function(o){
		var F = function(){
			//Empty constructor
		};
		F.prototype = o;
		return new F();
	};
}

function inheritFromParent(childObj, parentObj){
	var copyOfParent = Object.create(parentObj.prototype);
	copyOfParent.prototype = childObj;
	childObj.prototype = copyOfParent;
}

function MovingBox(obj){
	this.obj = obj;
}

MovingBox.prototype.constructor = MovingBox;

MovingBox.prototype.build = function(el){
	console.log("Building");
};

function RedMovingBox(obj){
	MovingBox.call(this, obj);
}
RedMovingBox.prototype.color = function(color){
	this.color = color;
	console.log("I'm a "+this.color+" box");
};

inheritFromParent(RedMovingBox, MovingBox);
console.log("part 2");


var box = new RedMovingBox({});
box.build();
