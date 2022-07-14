(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,50);


(lib.image1 = function() {
	this.initialize(img.image1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,42,45);


(lib.image2 = function() {
	this.initialize(img.image2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,42,45);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,195,58);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSAxQgEgEAAgFQAAgGAEgDQAEgFAGAAQAGAAADAFQAEADAAAGQAAAFgEAEQgDADgGABQgGgBgEgDgAgTAQIgBgZIAJAAQALAAAEgCQAGgDAAgHQAAgFgDgDQgCgCgFAAQgEAAgDACQgDADAAAFIgWAAQgBgIAEgIQAEgGAIgEQAHgFAKAAQAPABAJAHQAJAJAAAOQAAANgIAHQgJAHgOAAIgBAKg");
	this.shape.setTransform(218.8222,12.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgPAkQgIgDgFgGQgEgGgBgHIAYAAQAAAEAEACQADADAEAAQAEgBADgCQACgBAAgDQAAgDgDgCIgLgDIgOgFQgFgCgEgDQgEgFAAgIQAAgHADgFQAEgGAHgDQAIgDAJAAQAOAAAJAHQAIAHABANIgWAAQAAgEgDgDQgDgCgFAAQgDAAgDABQAAAAgBABQAAABAAAAQgBABAAAAQAAABAAAAQAAAEAEACQADACAHABQAJACAFADQAFACAFADQAEAFAAAJQAAAGgEAFQgEAGgHADQgHADgKAAQgJAAgIgEg");
	this.shape_1.setTransform(211.125,14);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgoA6IAAhyIAYAAIAAALQADgGAHgDQAGgDAHAAQAKAAAHAEQAIAFAFAJQAEAJAAANQAAAMgEAIQgFAJgIAFQgHAFgKAAQgHAAgGgEQgHgDgDgFIAAAwgAgLgfQgFAFAAAJQAAAJAFAFQAFAEAGAAQAHAAAFgEQAFgFAAgJQAAgJgFgGQgFgFgHAAQgGAAgFAGg");
	this.shape_2.setTransform(202.775,15.825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgoA6IAAhyIAYAAIAAALQADgGAHgDQAGgDAHAAQAKAAAHAEQAIAFAFAJQAEAJAAANQAAAMgEAIQgFAJgIAFQgHAFgKAAQgHAAgGgEQgHgDgDgFIAAAwgAgLgfQgFAFAAAJQAAAJAFAFQAFAEAGAAQAHAAAFgEQAFgFAAgJQAAgJgFgGQgFgFgHAAQgGAAgFAGg");
	this.shape_3.setTransform(193.275,15.825);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAYAxIgGgRIgkAAIgFARIgZAAIAjhhIAbAAIAjBhgAgLANIAXAAIgMgjg");
	this.shape_4.setTransform(183.225,12.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgLA4IAAhNIAXAAIAABNgAgJghQgEgEAAgFQAAgGAEgEQAEgDAFAAQAGAAAEADQAEAEAAAGQAAAFgEAEQgEADgGABQgFgBgEgDg");
	this.shape_5.setTransform(173.025,12.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgNA3IAAg5IgJAAIAAgUIAJAAIAAgDQAAgNAIgIQAHgIAQAAIAEAAIAAAUQgHAAgCADQgDACAAAGIAAABIANAAIAAAUIgNAAIAAA5g");
	this.shape_6.setTransform(168.425,12.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgTAjQgJgEgFgKQgFgJAAgMQAAgMAFgIQAFgKAJgFQAJgEAKAAQAMAAAIAEQAJAFAFAJQAFAJAAAMIAAAGIg1AAQAAAHAEAEQAEAEAGgBQAIABAEgIIAZAAQgCAIgFAGQgFAGgIADQgHAEgKAAQgKAAgJgFgAgJgRQgEAEgBAGIAdAAQAAgGgFgEQgEgDgGAAQgFAAgEADg");
	this.shape_7.setTransform(161.625,14);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgrAxIAAhhIAlAAQAOAAAMAGQAMAGAGALQAGAMAAANQAAAPgGALQgGALgMAGQgMAGgOAAgAgTAdIALAAQANAAAHgIQAIgHAAgOQAAgMgIgIQgHgIgNAAIgLAAg");
	this.shape_8.setTransform(152.375,12.975);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgXAvQgIgFgFgJQgEgJAAgMQAAgMAEgIQAFgJAIgFQAHgFAKAAQAHAAAGADQAHADADAGIAAgkIAYAAIAABmIgYAAIAAgLQgDAGgGADQgHADgHAAQgKAAgHgFgAgLgBQgFAEAAAJQAAAJAFAFQAFAFAGAAQAHAAAFgFQAFgFAAgJQAAgJgFgEQgFgFgHAAQgGAAgFAFg");
	this.shape_9.setTransform(139.175,12.775);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgTAjQgJgEgFgKQgFgJAAgMQAAgMAFgIQAFgKAJgFQAJgEAKAAQAMAAAIAEQAJAFAFAJQAFAJAAAMIAAAGIg1AAQAAAHAEAEQAEAEAGgBQAIABAEgIIAZAAQgCAIgFAGQgFAGgIADQgHAEgKAAQgKAAgJgFgAgJgRQgEAEgBAGIAdAAQAAgGgFgEQgEgDgGAAQgFAAgEADg");
	this.shape_10.setTransform(130.375,14);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgPAkQgIgDgFgGQgEgGgBgHIAYAAQAAAEAEACQADADAEAAQAEgBADgCQACgBAAgDQAAgDgDgCIgLgDIgOgFQgFgCgEgDQgEgFAAgIQAAgHADgFQAEgGAHgDQAIgDAJAAQAOAAAJAHQAIAHABANIgWAAQAAgEgDgDQgDgCgFAAQgDAAgDABQAAAAgBABQAAABAAAAQAAABgBAAQAAABAAAAQAAAEAEACQADACAHABQAJACAFADQAFACAFADQAEAFAAAJQAAAGgEAFQgEAGgHADQgHADgKAAQgJAAgIgEg");
	this.shape_11.setTransform(122.075,14);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgXAjQgIgFgFgJQgEgJAAgMQAAgMAEgIQAFgKAIgFQAHgEAKAAQAHAAAHADQAGAEADAFIAAgLIAYAAIAABNIgYAAIAAgLQgDAFgHADQgGAEgHAAQgKAAgHgFgAgLgOQgFAGAAAIQAAAJAFAFQAFAFAGAAQAHAAAFgFQAFgFAAgJQAAgIgFgFQgFgFgHAAQgGAAgFAEg");
	this.shape_12.setTransform(113.275,14);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgmAxIAAhhIArAAQAPAAAJAHQAIAHAAALQAAAJgEAGQgFAGgIACQAJABAFAGQAFAHAAAJQAAAMgIAHQgJAHgPAAgAgOAeIAQAAQAHAAADgDQADgCAAgGQAAgFgDgDQgEgDgGAAIgQAAgAgOgIIAPAAQAFAAAEgDQADgCAAgGQAAgFgDgCQgEgDgFAAIgPAAg");
	this.shape_13.setTransform(104.275,12.975);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgLA4IAAhNIAXAAIAABNgAgJghQgEgEAAgFQAAgGAEgEQAEgDAFAAQAGAAAEADQAEAEAAAGQAAAFgEAEQgEADgGABQgFgBgEgDg");
	this.shape_14.setTransform(94.475,12.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgdAnIAAgTIAfgmIgfAAIAAgUIA7AAIAAATIghAmIAhAAIAAAUg");
	this.shape_15.setTransform(88.925,14);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAPAoIAAgqQAAgHgEgFQgEgFgHAAQgGAAgEAFQgEAFAAAHIAAAqIgYAAIAAhOIAYAAIAAALQADgGAHgDQAFgDAIAAQAOAAAHAJQAJAKAAAPIAAAtg");
	this.shape_16.setTransform(80.75,13.95);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgUAjQgJgEgFgKQgGgJABgMQgBgLAGgJQAFgKAJgFQAKgEAKAAQALAAAKAEQAJAFAFAKQAGAJgBALQAAAMgFAJQgFAKgJAEQgKAFgLAAQgLAAgJgFgAgLgOQgEAGAAAIQAAAJAEAGQAFAEAGAAQAGAAAGgEQAEgGAAgJQAAgIgEgGQgFgEgHAAQgGAAgFAEg");
	this.shape_17.setTransform(71.55,14);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgkAxIAAhhIAlAAQAMAAAIAEQAIAEAFAHQADAHAAAKQAAAIgDAHQgFAGgIAFQgHAEgNAAIgOAAIAAAjgAgNgEIANAAQAGAAAEgDQADgEAAgFQAAgGgDgDQgEgEgGAAIgNAAg");
	this.shape_18.setTransform(62.95,12.975);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgNA3IAAg5IgJAAIAAgUIAJAAIAAgDQAAgNAIgIQAHgIAQAAIAEAAIAAAUQgHAAgCADQgDACAAAGIAAABIANAAIAAAUIgNAAIAAA5g");
	this.shape_19.setTransform(52.875,12.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgUAjQgJgEgFgKQgGgJAAgMQAAgLAGgJQAFgKAJgFQAKgEAKAAQALAAAKAEQAJAFAFAKQAGAJAAALQgBAMgFAJQgFAKgJAEQgKAFgLAAQgLAAgJgFgAgLgOQgEAGAAAIQAAAJAEAGQAFAEAGAAQAGAAAGgEQAEgGAAgJQAAgIgEgGQgFgEgHAAQgGAAgFAEg");
	this.shape_20.setTransform(45.9,14);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgXAvQgIgFgFgJQgEgJAAgMQAAgMAEgIQAFgJAIgFQAHgFAKAAQAHAAAGADQAHADADAGIAAgkIAYAAIAABmIgYAAIAAgLQgDAGgGADQgHADgHAAQgKAAgHgFgAgLgBQgFAEAAAJQAAAJAFAFQAFAFAGAAQAHAAAFgFQAFgFAAgJQAAgJgFgEQgFgFgHAAQgGAAgFAFg");
	this.shape_21.setTransform(33.525,12.775);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgTAjQgJgEgFgKQgFgJAAgMQAAgMAFgIQAFgKAJgFQAJgEAKAAQAMAAAIAEQAJAFAFAJQAFAJAAAMIAAAGIg1AAQAAAHAEAEQAEAEAGgBQAIABAEgIIAZAAQgCAIgFAGQgFAGgIADQgHAEgKAAQgKAAgJgFgAgJgRQgEAEgBAGIAdAAQAAgGgFgEQgEgDgGAAQgFAAgEADg");
	this.shape_22.setTransform(24.725,14);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgXAoIAAhOIAXAAIAAAOQAEgHAGgEQAHgDAHgBIAAAaIgGAAQgJAAgFADQgEAFAAAJIAAAkg");
	this.shape_23.setTransform(17.675,13.95);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgLA4IAAhNIAXAAIAABNgAgJghQgEgEAAgFQAAgGAEgEQAEgDAFAAQAGAAAEADQAEAEAAAGQAAAFgEAEQgEADgGABQgFgBgEgDg");
	this.shape_24.setTransform(12.325,12.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgLAxIAAhOIgaAAIAAgTIBLAAIAAATIgaAAIAABOg");
	this.shape_25.setTransform(6.15,12.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,225,28.7), null);


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRAhQgJgFgFgIQgEgJAAgLQAAgKAEgJQAFgIAIgFQAJgEAKAAQAKAAAIAEQAIAFAFAIQAEAIABALIgBAFIgxAAQABAHADAEQAEADAFAAQAIAAADgHIAYAAQgCAHgFAGQgFAGgGADQgIADgIAAQgLAAgHgEgAgIgPQgEADgBAGIAaAAQABgGgEgDQgEgEgGAAQgEAAgEAEg");
	this.shape.setTransform(119,13.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgIAIQgEgDAAgFQAAgEAEgEQADgDAFAAQAGAAAEADQADAEAAAEQAAAFgDADQgEAEgGAAQgFAAgDgEg");
	this.shape_1.setTransform(113.175,15.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgVAoQgLgFgGgLQgFgKgBgOQABgNAFgKQAGgKALgHQAKgFAMgBQAQABAMAIQAMAJADAPIgYAAQgCgGgFgDQgGgDgGAAQgJAAgHAHQgGAHAAALQAAAMAGAIQAHAGAJAAQAGAAAGgDQAFgDACgFIAYAAQgDAPgMAIQgMAJgQAAQgMgBgKgGg");
	this.shape_2.setTransform(106.35,12.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgoAuIAAhbIAiAAQANAAALAGQALAGAGAKQAGALAAAMQAAAOgGAKQgGAKgLAGQgLAGgNAAgAgSAbIALAAQAMAAAGgHQAIgHgBgNQABgLgIgIQgGgHgMAAIgLAAg");
	this.shape_3.setTransform(96.9,12.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgQArQgIgDgFgGQgEgHgBgJIAYAAQABAGACACQAEADADAAQAFAAADgCQADgDAAgEQAAgDgCgCQgDgDgDgBIgIgDQgJgDgGgDQgFgCgEgFQgFgFAAgJQAAgMAKgIQAJgHAPAAQAOAAAKAHQAJAIAAAMIgYAAQAAgEgDgCQgDgDgEAAQgEAAgDACQgCACAAAEQAAAFAFACIAMAGIAOAFQAFACAFAFQADAFAAAJQAAAHgDAHQgFAGgHAEQgIAEgKAAQgJAAgIgEg");
	this.shape_4.setTransform(88,12.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgTAqQgIgEgFgJQgFgIAAgNIAAg1IAWAAIAAA2QAAAIAEAEQAEAFAHAAQAIAAAEgFQAEgEAAgIIAAg2IAWAAIAAA1QAAANgFAIQgFAJgJAEQgJAEgKAAQgKAAgJgEg");
	this.shape_5.setTransform(79.425,12.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAOAlIAAgnQAAgHgEgEQgEgEgGAAQgFAAgEAEQgEAEABAHIAAAnIgXAAIAAhIIAXAAIAAAKQACgFAHgDQAEgDAHAAQANAAAHAJQAIAIAAAOIAAAqg");
	this.shape_6.setTransform(67.75,13.075);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgKA0IAAhHIAVAAIAABHgAgJgfQgDgDAAgFQAAgFADgEQAEgDAFAAQAGAAADADQAEAEAAAFQAAAFgEADQgDAEgGAAQgFAAgEgEg");
	this.shape_7.setTransform(61.425,11.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgOAiQgHgDgFgGQgEgGgBgHIAXAAQAAAEADADQADACAEAAQAEAAACgCQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgDgCgCIgKgDIgOgEQgEgCgEgDQgEgEAAgIQAAgGADgFQAEgFAGgDQAHgDAIAAQAOAAAIAGQAIAHABALIgVAAQAAgDgDgDQgCgCgFAAQgDAAgCACQAAAAgBABQAAAAAAABQgBAAAAABQAAAAAAABQAAADADABIAKAEIAMAEQAFACAEADQAEAFAAAHQAAAHgDAFQgEAFgGACQgHADgJAAQgJAAgHgDg");
	this.shape_8.setTransform(53.05,13.125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AALAtQgLAAgGgGQgHgGAAgNIAAgcIgJAAIAAgSIAJAAIAAgSIAWAAIAAASIAOAAIAAASIgOAAIAAAcQgBAEACABIAFABIAIAAIAAATg");
	this.shape_9.setTransform(46.75,12.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgWAhQgGgEgEgHQgDgHAAgJIAAgqIAWAAIAAAnQAAAHAEAEQADAEAGAAQAHAAADgEQAEgEAAgHIAAgnIAWAAIAABIIgWAAIAAgKQgDAFgGADQgFADgHAAQgIAAgHgEg");
	this.shape_10.setTransform(39.8,13.175);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgSAhQgJgFgFgIQgFgJAAgLQAAgKAFgJQAFgIAJgFQAIgEAKAAQALAAAIAEQAJAFAFAIQAFAJAAAKQAAALgFAJQgFAIgJAFQgJAEgKAAQgKAAgIgEgAgKgMQgEAEAAAIQAAAJAEAEQAEAFAGAAQAGAAAFgFQAEgEAAgJQAAgIgEgEQgFgFgGAAQgFAAgFAFg");
	this.shape_11.setTransform(31.275,13.125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgbA1IAQglIgdhEIAZAAIAQAtIAQgtIAYAAIgtBpg");
	this.shape_12.setTransform(23.05,14.85);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgVAhQgIgFgEgIQgEgJAAgLQAAgKAEgJQAEgIAIgFQAHgEAJAAQAHAAAFADQAGADADAFIAAgKIAWAAIAABHIgWAAIAAgKQgDAFgGADQgGADgGAAQgJAAgHgEgAgKgMQgEAEAAAIQAAAIAEAFQAFAFAFAAQAHAAAFgFQAEgFAAgIQAAgHgEgFQgFgFgHAAQgFAAgFAFg");
	this.shape_13.setTransform(14.275,13.125);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgiAuIAAhbIAjAAQALAAAIAEQAHAEAEAHQAEAGAAAJQAAAIgEAGQgDAGgIAEQgIAEgLAAIgMAAIAAAhgAgLgEIALAAQAGAAADgDQADgDAAgFQAAgGgDgDQgDgDgGAAIgLAAg");
	this.shape_14.setTransform(6.275,12.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,142,26.9), null);


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOAiQgHgDgFgGQgEgGAAgHIAVAAQABAEADADQAEACADAAQAEAAACgCQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgDgDgCIgJgDIgOgEQgFgCgDgDQgEgEAAgIQAAgGADgFQAEgFAHgDQAHgDAHAAQAOAAAIAGQAIAHABALIgVAAQAAgDgDgDQgDgCgEAAQgDAAgCACQgBAAAAABQAAAAAAABQgBAAAAABQAAAAAAABQAAADADABIAKAEIAMAEQAGACADADQAFAFAAAHQgBAHgDAFQgDAFgIACQgGADgJAAQgIAAgIgDg");
	this.shape.setTransform(132.55,13.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAMAtQgMAAgGgGQgHgGAAgNIAAgcIgJAAIAAgSIAJAAIAAgSIAVAAIAAASIAPAAIAAASIgPAAIAAAcQABAEABABIAFABIAIAAIAAATg");
	this.shape_1.setTransform(126.25,12.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAOAlIAAgnQAAgHgDgEQgFgEgGAAQgFAAgEAEQgDAEgBAHIAAAnIgWAAIAAhIIAWAAIAAAKQAEgFAFgDQAFgDAHAAQANAAAIAJQAHAIAAAOIAAAqg");
	this.shape_2.setTransform(119.35,13.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgWAhQgGgEgEgHQgDgHAAgJIAAgqIAWAAIAAAnQAAAHAEAEQADAEAGAAQAHAAADgEQAEgEAAgHIAAgnIAWAAIAABIIgWAAIAAgKQgEAFgFADQgFADgHAAQgIAAgHgEg");
	this.shape_3.setTransform(110.55,13.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgSAhQgJgFgFgIQgFgJAAgLQAAgKAFgJQAFgIAJgFQAIgEAKAAQALAAAIAEQAJAFAFAIQAFAJAAAKQAAALgFAJQgFAIgJAFQgJAEgKAAQgKAAgIgEgAgKgMQgEAEAAAIQAAAJAEAEQAEAFAGAAQAGAAAFgFQAEgEAAgJQAAgIgEgEQgFgFgGAAQgFAAgFAFg");
	this.shape_4.setTransform(102.025,13.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgRAhQgIgFgFgIQgFgJAAgLQAAgKAFgJQAFgIAIgFQAIgEAKAAQANAAAKAHQAJAHADANIgYAAQgDgIgJAAQgFAAgDAEQgEAFAAAIQAAAJAEAFQADAEAFAAQAJAAADgIIAYAAQgDANgJAHQgKAHgNAAQgKAAgIgEg");
	this.shape_5.setTransform(93.975,13.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgOAiQgHgDgFgGQgEgGgBgHIAXAAQAAAEADADQADACAEAAQAEAAACgCQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgDgCgCIgKgDIgOgEQgEgCgEgDQgEgEAAgIQAAgGADgFQAEgFAGgDQAHgDAJAAQANAAAIAGQAIAHABALIgVAAQAAgDgDgDQgCgCgFAAQgDAAgCACQAAAAgBABQAAAAAAABQgBAAAAABQAAAAAAABQAAADADABIAKAEIAMAEQAFACAEADQAEAFAAAHQAAAHgDAFQgEAFgGACQgHADgJAAQgJAAgHgDg");
	this.shape_6.setTransform(86.35,13.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgKA0IAAhHIAVAAIAABHgAgJgfQgDgDAAgFQAAgFADgEQAEgDAFAAQAGAAADADQAEAEAAAFQAAAFgEADQgDAEgGAAQgFAAgEgEg");
	this.shape_7.setTransform(80.875,11.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgoAuIAAhbIAiAAQANAAALAGQALAGAGAKQAGALAAAMQAAAOgGAKQgGAKgLAGQgLAGgNAAgAgSAbIALAAQAMAAAGgHQAIgHgBgNQABgLgIgIQgGgHgMAAIgLAAg");
	this.shape_8.setTransform(74.4,12.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgVAsQgIgFgEgIQgEgJAAgLQAAgLAEgHQAEgJAIgFQAHgEAJAAQAGAAAGADQAGADADAFIAAgiIAWAAIAABfIgWAAIAAgKQgDAGgGADQgFACgHAAQgJABgHgFgAgKgBQgEADAAAJQAAAIAEAGQAFAEAFAAQAHAAAFgEQAEgGAAgIQAAgIgEgEQgFgEgHgBQgFABgFAEg");
	this.shape_9.setTransform(62.075,12);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAOAlIAAgnQAAgHgDgEQgFgEgGAAQgFAAgEAEQgDAEAAAHIAAAnIgXAAIAAhIIAXAAIAAAKQADgFAFgDQAFgDAHAAQANAAAIAJQAHAIAAAOIAAAqg");
	this.shape_10.setTransform(53.55,13.075);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgSAhQgJgFgFgIQgFgJAAgLQAAgKAFgJQAFgIAJgFQAIgEAKAAQALAAAIAEQAJAFAFAIQAFAJAAAKQAAALgFAJQgFAIgJAFQgJAEgKAAQgKAAgIgEgAgKgMQgEAEAAAIQAAAJAEAEQAEAFAGAAQAGAAAFgFQAEgEAAgJQAAgIgEgEQgFgFgGAAQgFAAgFAFg");
	this.shape_11.setTransform(44.975,13.125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgjAuIAAhbIAnAAQAOAAAJAHQAHAGABALQAAAIgFAGQgEAFgHACQAIABAEAGQAGAGAAAIQAAALgJAHQgIAHgOAAgAgNAcIAPAAQAFAAAEgDQADgCAAgFQAAgFgEgDQgCgCgGAAIgPAAgAgNgIIAOAAQAFAAADgCQADgCgBgFQABgFgDgCQgDgDgFAAIgOAAg");
	this.shape_12.setTransform(36.75,12.175);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAQApQgHgFAAgLQAAgKAHgGQAFgGAKAAQAKAAAFAGQAHAGAAAKQAAALgHAFQgFAGgKAAQgKAAgFgGgAAaASQgBADAAAEQAAAJAGAAQADAAABgCQACgCAAgFQAAgEgCgCQgBgDgDAAQgBAAAAAAQgBAAgBABQAAAAgBAAQAAABgBAAgAgjAuIAyhbIAVAAIgxBbgAgtgIQgHgGAAgKQAAgLAHgFQAFgGALAAQAJAAAGAGQAGAFAAALQAAAKgGAGQgGAGgJAAQgLAAgFgGgAgkgYQAAAJAGAAQADAAACgDQABgCAAgEQABgJgHAAQgGAAAAAJg");
	this.shape_13.setTransform(23.9,12.175);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgRAuQgIgEgFgGQgEgHAAgKQAAgIAEgGQADgFAHgDQgMgGAAgOQAAgHAEgFQADgHAIgDQAHgEAKAAQALAAAHAEQAHADAEAHQAEAFAAAHQAAAHgEAGQgDAEgGADQAHADAEAGQAEAGAAAHQAAAKgFAHQgEAGgIAEQgIAEgKgBQgJABgIgEgAgJAKQgEADAAAGQAAAFAEAEQAEADAFAAQAGAAAEgDQADgEAAgFQAAgGgDgDQgEgEgGAAQgFAAgEAEgAgHgbQgDACAAAGQAAAEADADQADAEAEAAQAFAAADgEQADgDAAgEQAAgGgDgCQgDgEgFAAQgEAAgDAEg");
	this.shape_14.setTransform(14.075,12);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgWApQgJgHgBgQIAVAAQABAGADADQADAEAFAAQAFAAACgEQAEgCAAgGQAAgFgFgEQgDgCgIAAIgEAAIAAgRIAEAAQAGAAADgCQAEgDABgGQAAgEgDgDQgDgDgEABQgEAAgCACQgCADgBAFIgWAAQAAgOAJgHQAJgIAOAAQAJAAAHADQAHAEAEAFQADAHABAHQgBAIgEAFQgEAGgGACIAAAAQAHACAFAFQAEAGAAAKQAAAHgDAGQgFAHgGADQgIAEgJAAQgPAAgJgIg");
	this.shape_15.setTransform(5.85,11.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,142,26.9), null);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKA0IAAhHIAVAAIAABHgAgJgfQgDgDAAgFQAAgFADgEQAEgDAFAAQAGAAADADQAEAEAAAFQAAAFgEADQgDAEgGAAQgFAAgEgEg");
	this.shape.setTransform(180.325,11.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgMAzIAAg1IgIAAIAAgSIAIAAIAAgDQAAgNAIgHQAGgHAPAAIAEAAIAAATQgHAAgCACQgDACAAAGIAAABIAMAAIAAASIgMAAIAAA1g");
	this.shape_1.setTransform(176.025,11.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgSAhQgIgFgEgIQgGgJABgLQgBgKAGgJQAEgIAIgFQAIgEAKAAQALAAAIAEQAIAFAFAIQAEAIAAALIAAAFIgxAAQAAAHAEAEQAEADAFAAQAIAAADgHIAYAAQgCAHgFAGQgFAGgGADQgIADgJAAQgJAAgJgEgAgIgPQgEADgBAGIAbAAQAAgGgEgDQgEgEgGAAQgFAAgDAEg");
	this.shape_2.setTransform(169.7,13.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgoAuIAAhbIAiAAQANAAALAGQAMAGAFAKQAGALAAAMQAAAOgGAKQgFAKgMAGQgLAGgNAAgAgRAbIAKAAQAMAAAGgHQAIgHgBgNQABgLgIgIQgGgHgMAAIgKAAg");
	this.shape_3.setTransform(161.15,12.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAOAlIAAgnQAAgHgDgEQgEgEgHAAQgFAAgEAEQgDAEgBAHIAAAnIgWAAIAAhIIAWAAIAAAKQADgFAGgDQAFgDAHAAQANAAAIAJQAHAIAAAOIAAAqg");
	this.shape_4.setTransform(149.15,13.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgKA0IAAhHIAVAAIAABHgAgJgfQgDgDAAgFQAAgFADgEQAEgDAFAAQAGAAADADQAEAEAAAFQAAAFgEADQgDAEgGAAQgFAAgEgEg");
	this.shape_5.setTransform(142.825,11.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAnAlIAAgnQAAgHgEgEQgEgDgGAAQgHAAgDADQgEAEAAAHIAAAnIgVAAIAAgnQAAgHgDgEQgFgDgGAAQgGAAgEADQgDAEgBAHIAAAnIgWAAIAAhIIAWAAIAAAJQADgEAGgDQAGgDAGAAQAIAAAHAEQAFADAEAHQAEgGAGgEQAHgEAIAAQANAAAIAJQAIAIAAAOIAAAqg");
	this.shape_6.setTransform(131.3,13.075);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgSAhQgIgFgEgIQgGgJAAgLQAAgKAGgJQAEgIAIgFQAJgEAJAAQALAAAIAEQAIAFAFAIQAFAIgBALIAAAFIgxAAQAAAHAEAEQAEADAFAAQAIAAADgHIAYAAQgCAHgFAGQgEAGgIADQgHADgJAAQgJAAgJgEgAgJgPQgDADgBAGIAbAAQgBgGgDgDQgEgEgGAAQgEAAgFAEg");
	this.shape_7.setTransform(120.4,13.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAMAtQgMAAgGgGQgHgGAAgNIAAgcIgJAAIAAgSIAJAAIAAgSIAVAAIAAASIAPAAIAAASIgPAAIAAAcQABAEABABIAFABIAIAAIAAATg");
	this.shape_8.setTransform(113.65,12.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgOAiQgHgDgEgGQgFgGgBgHIAXAAQAAAEADADQADACAEAAQAEAAACgCQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgDgCgCIgLgDIgNgEQgEgCgEgDQgEgEAAgIQAAgGADgFQAEgFAGgDQAIgDAIAAQANAAAIAGQAIAHABALIgVAAQAAgDgDgDQgCgCgFAAQgDAAgCACQAAAAgBABQAAAAAAABQgBAAAAABQAAAAAAABQAAADADABIAJAEIAOAEQAFACAEADQADAFAAAHQABAHgEAFQgEAFgGACQgHADgJAAQgJAAgHgDg");
	this.shape_9.setTransform(107.4,13.125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgbA1IARglIgehEIAYAAIARAtIAQgtIAYAAIgtBpg");
	this.shape_10.setTransform(99.75,14.85);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgQArQgIgDgEgGQgGgHAAgJIAYAAQABAGADACQADADAEAAQAEAAADgCQADgDAAgEQAAgDgCgCQgDgDgDgBIgIgDQgJgDgFgDQgGgCgEgFQgEgFgBgJQAAgMAKgIQAJgHAPAAQAOAAAJAHQAKAIAAAMIgYAAQAAgEgDgCQgDgDgEAAQgEAAgCACQgCACAAAEQAAAFADACIANAGIANAFQAHACADAFQAFAFAAAJQAAAHgFAHQgDAGgIAEQgHAEgLAAQgJAAgIgEg");
	this.shape_11.setTransform(91.65,12.175);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgSAhQgIgFgEgIQgFgJgBgLQABgKAFgJQAEgIAIgFQAJgEAJAAQALAAAIAEQAIAFAFAIQAFAIgBALIAAAFIgxAAQABAHADAEQAEADAFAAQAIAAADgHIAYAAQgCAHgFAGQgEAGgIADQgHADgJAAQgJAAgJgEgAgJgPQgDADgBAGIAbAAQgBgGgDgDQgEgEgGAAQgFAAgEAEg");
	this.shape_12.setTransform(80.9,13.125);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgVAhQgHgEgEgHQgDgHAAgJIAAgqIAWAAIAAAnQAAAHAEAEQAEAEAFAAQAGAAAEgEQAEgEAAgHIAAgnIAWAAIAABIIgWAAIAAgKQgDAFgGADQgFADgHAAQgJAAgFgEg");
	this.shape_13.setTransform(72.5,13.175);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAQA2IAAgsQgEAFgFADQgFACgGAAQgJABgIgFQgHgFgFgJQgEgHAAgLQAAgLAEgIQAFgJAHgEQAIgFAJAAQAGAAAFACQAGADADAEIAAgIIAWAAIAABqgAgGggQgEACgCAEQgCAFAAAFQAAAGACAEQACAEAEACQADABADAAQAEAAAEgBQAEgCACgEQACgEAAgGQAAgFgCgFQgCgEgEgCQgEgCgEAAQgDAAgDACg");
	this.shape_14.setTransform(63.475,14.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgKA0IAAhHIAVAAIAABHgAgJgfQgDgDAAgFQAAgFADgEQAEgDAFAAQAGAAADADQAEAEAAAFQAAAFgEADQgDAEgGAAQgFAAgEgEg");
	this.shape_15.setTransform(57.375,11.55);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAOAlIAAgnQAAgHgEgEQgEgEgGAAQgFAAgEAEQgEAEABAHIAAAnIgXAAIAAhIIAXAAIAAAKQACgFAHgDQAEgDAHAAQANAAAHAJQAIAIAAAOIAAAqg");
	this.shape_16.setTransform(51.1,13.075);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgTAqQgIgEgFgJQgFgIAAgNIAAg1IAWAAIAAA2QAAAIAEAEQAEAFAHAAQAIAAAEgFQAEgEAAgIIAAg2IAWAAIAAA1QAAANgFAIQgFAJgJAEQgJAEgKAAQgKAAgJgEg");
	this.shape_17.setTransform(42.125,12.225);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAMAtQgMAAgGgGQgHgGAAgNIAAgcIgJAAIAAgSIAJAAIAAgSIAWAAIAAASIAOAAIAAASIgOAAIAAAcQAAAEABABIAFABIAIAAIAAATg");
	this.shape_18.setTransform(32.05,12.25);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgOAiQgHgDgFgGQgEgGAAgHIAVAAQABAEADADQAEACADAAQAEAAACgCQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgDgDgCIgJgDIgOgEQgFgCgDgDQgEgEAAgIQAAgGADgFQAEgFAGgDQAIgDAHAAQAOAAAIAGQAIAHABALIgVAAQAAgDgDgDQgDgCgEAAQgDAAgCACQAAAAgBABQAAAAAAABQgBAAAAABQAAAAAAABQAAADADABIAKAEIAMAEQAGACADADQAFAFAAAHQAAAHgEAFQgDAFgIACQgGADgJAAQgIAAgIgDg");
	this.shape_19.setTransform(25.8,13.125);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgSAhQgJgFgFgIQgFgJAAgLQAAgKAFgJQAFgIAJgFQAIgEAKAAQALAAAIAEQAJAFAFAIQAFAJAAAKQAAALgFAJQgFAIgJAFQgJAEgKAAQgKAAgIgEgAgKgMQgEAEAAAIQAAAJAEAEQAEAFAGAAQAGAAAFgFQAEgEAAgJQAAgIgEgEQgFgFgGAAQgFAAgFAFg");
	this.shape_20.setTransform(18.075,13.125);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAdAuIAAg2IgUA2IgRAAIgUg2IAAA2IgXAAIAAhbIAbAAIAYA/IAZg/IAbAAIAABbg");
	this.shape_21.setTransform(7.975,12.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,185,26.9), null);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRAtQgDgDgBgFQABgFADgEQADgDAGAAQAHAAACADQAEAEAAAFQAAAFgEADQgCAEgHAAQgGAAgDgEgAgSAPIAAgXIAIAAQAKAAAEgDQAGgCgBgHQAAgEgCgDQgDgCgEAAQgDAAgDACQgDADAAAFIgVAAQAAgIADgHQAEgGAHgEQAHgEAJAAQAOAAAJAIQAIAHAAANQAAAMgIAHQgIAGgNAAIgBAKg");
	this.shape.setTransform(68.75,29.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOAiQgHgDgEgGQgFgGgBgHIAXAAQAAAEADADQADACAEAAQAEAAACgCQABAAAAgBQABAAAAAAQAAgBAAgBQAAAAAAgBQAAgDgCgCIgKgDIgOgEQgEgCgEgDQgEgEAAgIQAAgGADgFQAEgFAGgDQAHgDAIAAQAOAAAIAGQAIAHABALIgVAAQAAgDgDgDQgCgCgFAAQgDAAgCACQAAAAgBABQAAAAAAAAQgBABAAABQAAAAAAABQAAADADABIAKAEIANAEQAEACAEADQAEAFAAAHQAAAHgDAFQgEAFgGACQgHADgJAAQgJAAgHgDg");
	this.shape_1.setTransform(61.6,31.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AglA2IAAhqIAWAAIAAAKQADgFAGgDQAGgDAGAAQAJAAAIAEQAHAFAEAJQAEAIAAALQAAALgEAIQgEAIgHAFQgIAEgJAAQgGAAgGgCQgGgDgDgFIAAAsgAgKgdQgFAFAAAIQAAAJAFAEQAEAEAGAAQAGAAAFgEQAFgEAAgJQAAgIgFgFQgFgEgGgBQgGABgEAEg");
	this.shape_2.setTransform(53.825,32.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AglA2IAAhqIAWAAIAAAKQADgFAGgDQAGgDAGAAQAJAAAIAEQAHAFAEAJQAEAIAAALQAAALgEAIQgEAIgHAFQgIAEgJAAQgGAAgGgCQgGgDgDgFIAAAsgAgKgdQgFAFAAAIQAAAJAFAEQAEAEAGAAQAGAAAFgEQAFgEAAgJQAAgIgFgFQgFgEgGgBQgGABgEAEg");
	this.shape_3.setTransform(44.975,32.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAWAuIgFgQIghAAIgGAQIgXAAIAhhbIAZAAIAhBbgAgLAMIAWAAIgLggg");
	this.shape_4.setTransform(35.55,30.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgKA0IAAhIIAVAAIAABIgAgJgfQgDgDAAgFQAAgFADgEQAEgDAFAAQAGAAADADQAEAEAAAFQAAAFgEADQgDAEgGAAQgFAAgEgEg");
	this.shape_5.setTransform(26.075,29.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgMAzIAAg1IgIAAIAAgTIAIAAIAAgCQAAgNAIgHQAGgHAPAAIAEAAIAAATQgHAAgCACQgDACAAAGIAAAAIAMAAIAAATIgMAAIAAA1g");
	this.shape_6.setTransform(21.775,29.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgSAhQgIgFgEgIQgGgJAAgLQAAgKAGgJQAEgIAIgFQAIgEAKAAQALAAAIAEQAIAFAFAIQAFAIgBALIAAAFIgxAAQAAAHAEAEQAEADAFAAQAIAAADgHIAYAAQgCAHgFAGQgFAGgGADQgIADgJAAQgJAAgJgEgAgJgPQgDADgBAGIAbAAQAAgGgEgDQgEgEgGAAQgFAAgEAEg");
	this.shape_7.setTransform(15.45,31.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgoAuIAAhbIAiAAQANAAALAGQALAGAGAKQAGALAAAMQAAAOgGAKQgGAKgLAGQgLAGgNAAgAgSAbIALAAQAMAAAGgHQAIgHgBgNQABgLgIgIQgGgHgMAAIgLAAg");
	this.shape_8.setTransform(6.9,30.075);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgVAsQgIgFgEgIQgEgJAAgLQAAgLAEgHQAEgJAIgFQAHgEAJAAQAGAAAGADQAGADADAFIAAgiIAWAAIAABfIgWAAIAAgKQgDAGgGADQgFACgHAAQgJABgHgFgAgKgBQgEADAAAJQAAAIAEAGQAFAEAFAAQAHAAAFgEQAEgGAAgIQAAgIgEgEQgFgEgHgBQgFABgFAEg");
	this.shape_9.setTransform(129.475,12);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgSAhQgIgFgEgIQgGgJAAgLQAAgKAGgJQAEgIAIgFQAJgEAJAAQALAAAIAEQAIAFAFAIQAFAIgBALIAAAFIgxAAQAAAHAEAEQAEADAFAAQAIAAADgHIAYAAQgCAHgFAGQgEAGgIADQgHADgJAAQgJAAgJgEgAgJgPQgDADgBAGIAbAAQgBgGgDgDQgEgEgGAAQgEAAgFAEg");
	this.shape_10.setTransform(121.3,13.125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgOAiQgHgDgEgGQgFgGgBgHIAXAAQAAAEADADQAEACADAAQAEAAACgCQABAAAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQAAgDgDgCIgLgDIgMgEQgFgCgEgDQgEgEAAgIQAAgGAEgFQADgFAGgDQAIgDAIAAQANAAAIAGQAIAHABALIgUAAQgBgDgDgDQgCgCgFAAQgDAAgCACQAAAAgBABQAAAAgBABQAAAAAAABQAAAAAAABQAAADADABIAJAEIAOAEQAEACAFADQADAFAAAHQABAHgEAFQgEAFgGACQgHADgJAAQgIAAgIgDg");
	this.shape_11.setTransform(113.6,13.125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgVAhQgIgFgEgIQgEgJAAgLQAAgKAEgJQAEgIAIgFQAHgEAJAAQAHAAAFADQAGADADAFIAAgKIAWAAIAABHIgWAAIAAgKQgDAFgGADQgGADgGAAQgJAAgHgEgAgKgMQgEAEAAAIQAAAIAEAFQAFAFAFAAQAHAAAFgFQAEgFAAgIQAAgHgEgFQgFgFgHAAQgFAAgFAFg");
	this.shape_12.setTransform(105.375,13.125);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgkAuIAAhbIApAAQAOAAAHAHQAJAGgBALQABAIgFAGQgEAFgHACQAIABAFAGQAEAGAAAIQAAALgHAHQgIAHgPAAgAgNAcIAPAAQAGAAADgDQADgCAAgFQAAgFgDgDQgDgCgGAAIgPAAgAgNgIIANAAQAGAAADgCQADgCAAgFQAAgFgDgCQgDgDgGAAIgNAAg");
	this.shape_13.setTransform(97.1,12.175);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgKA0IAAhHIAVAAIAABHgAgJgfQgDgDAAgFQAAgFADgEQAEgDAFAAQAGAAADADQAEAEAAAFQAAAFgEADQgDAEgGAAQgFAAgEgEg");
	this.shape_14.setTransform(87.975,11.55);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgbAkIAAgRIAdgkIgdAAIAAgSIA2AAIAAARIgdAkIAeAAIAAASg");
	this.shape_15.setTransform(82.825,13.125);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAOAlIAAgnQAAgHgDgEQgFgEgGAAQgFAAgEAEQgDAEgBAHIAAAnIgWAAIAAhIIAWAAIAAAKQAEgFAFgDQAFgDAHAAQANAAAIAJQAHAIAAAOIAAAqg");
	this.shape_16.setTransform(75.25,13.075);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgSAhQgJgFgFgIQgFgJAAgLQAAgKAFgJQAFgIAJgFQAIgEAKAAQALAAAIAEQAJAFAFAIQAFAJAAAKQAAALgFAJQgFAIgJAFQgJAEgKAAQgKAAgIgEgAgKgMQgEAEAAAIQAAAJAEAEQAEAFAGAAQAGAAAFgFQAEgEAAgJQAAgIgEgEQgFgFgGAAQgFAAgFAFg");
	this.shape_17.setTransform(66.675,13.125);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgiAuIAAhbIAjAAQALAAAIAEQAHAEAEAHQAEAGAAAJQAAAIgEAGQgDAGgIAEQgIAEgLAAIgMAAIAAAhgAgLgEIALAAQAGAAADgDQADgDAAgFQAAgGgDgDQgDgDgGAAIgLAAg");
	this.shape_18.setTransform(58.725,12.175);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgMAzIAAg1IgIAAIAAgSIAIAAIAAgDQAAgNAIgHQAGgHAPAAIAEAAIAAATQgHAAgCACQgDACAAAGIAAABIAMAAIAAASIgMAAIAAA1g");
	this.shape_19.setTransform(49.325,11.65);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgSAhQgJgFgFgIQgFgJAAgLQAAgKAFgJQAFgIAJgFQAIgEAKAAQALAAAIAEQAJAFAFAIQAFAJAAAKQAAALgFAJQgFAIgJAFQgJAEgKAAQgKAAgIgEgAgKgMQgEAEAAAIQAAAJAEAEQAEAFAGAAQAGAAAFgFQAEgEAAgJQAAgIgEgEQgFgFgGAAQgFAAgFAFg");
	this.shape_20.setTransform(42.825,13.125);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgVAsQgIgFgEgIQgEgJAAgLQAAgLAEgHQAEgJAIgFQAHgEAJAAQAGAAAGADQAGADADAFIAAgiIAWAAIAABfIgWAAIAAgKQgDAGgGADQgFACgHAAQgJABgHgFgAgKgBQgEADAAAJQAAAIAEAGQAFAEAFAAQAHAAAFgEQAEgGAAgIQAAgIgEgEQgFgEgHgBQgFABgFAEg");
	this.shape_21.setTransform(31.275,12);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgSAhQgIgFgEgIQgGgJAAgLQAAgKAGgJQAEgIAIgFQAIgEAKAAQALAAAIAEQAIAFAFAIQAFAIgBALIAAAFIgxAAQAAAHAEAEQAEADAFAAQAIAAADgHIAYAAQgCAHgFAGQgFAGgHADQgHADgJAAQgJAAgJgEgAgJgPQgDADgBAGIAbAAQAAgGgEgDQgEgEgGAAQgFAAgEAEg");
	this.shape_22.setTransform(23.1,13.125);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgWAlIAAhIIAWAAIAAAMQAEgGAFgDQAGgEAHAAIAAAYIgFAAQgJAAgEAEQgEADAAAIIAAAig");
	this.shape_23.setTransform(16.6,13.075);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgKA0IAAhHIAVAAIAABHgAgJgfQgDgDAAgFQAAgFADgEQAEgDAFAAQAGAAADADQAEAEAAAFQAAAFgEADQgDAEgGAAQgFAAgEgEg");
	this.shape_24.setTransform(11.625,11.55);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgKAuIAAhJIgYAAIAAgSIBFAAIAAASIgYAAIAABJg");
	this.shape_25.setTransform(5.825,12.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,142,44.8), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.logo();
	this.instance.setTransform(0,0,0.5334,0.533);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,104,30.9), null);


(lib.Symbol6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.image1();
	this.instance.setTransform(32,0,0.5952,0.5956);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLAdQgHgDgEgFQgDgEgBgGIATAAQABADACACQADACACAAQAEAAACgCQAAAAABAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBgBAAQAAgBgBAAIgHgDIgMgDQgEgCgDgDQgEgDAAgGQAAgGAEgEQADgEAFgDQAFgDAHAAQAMAAAGAGQAIAGABAJIgSAAQgBgDgCgCQgCgCgEAAQgDAAgBACQAAAAgBAAQAAABAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAABABAAQAAABABAAQAAABABAAIAHADIAMADQAEACAEADQADAEAAAGQAAAFgDAFQgDAEgGACQgGADgHAAQgIAAgFgDg");
	this.shape.setTransform(175.9,11.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAKAmQgKAAgFgFQgGgFAAgLIAAgYIgHAAIAAgPIAHAAIAAgPIASAAIAAAPIAMAAIAAAPIgMAAIAAAYQAAABAAAAQAAABAAAAQAAABABAAQAAABAAAAIAFABIAGAAIAAAQg");
	this.shape_1.setTransform(170.625,10.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAMAfIAAggQAAgGgDgEQgDgEgGAAQgEAAgDAEQgEAEAAAGIAAAgIgTAAIAAg8IATAAIAAAIQADgEAFgCQAEgDAFAAQALAAAHAHQAGAHAAAMIAAAjg");
	this.shape_2.setTransform(164.8,11.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgSAcQgGgDgDgGQgDgGAAgIIAAgjIATAAIAAAgQAAAGADAEQAEADAEAAQAFAAAEgDQACgEAAgGIAAggIATAAIAAA8IgTAAIAAgIQgCAEgFADQgEACgGAAQgHAAgFgDg");
	this.shape_3.setTransform(157.35,11.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgPAcQgHgEgFgHQgEgHAAgKQAAgIAFgIQADgHAIgEQAHgEAIAAQAJAAAHAEQAIAEAEAHQAEAIAAAIQAAAKgEAHQgEAHgIAEQgHAEgJAAQgIAAgHgEgAgIgKQgEAEAAAGQAAAHAEAEQAEAEAEAAQAFAAAEgEQAEgEgBgHQABgGgEgEQgDgEgGAAQgEAAgEAEg");
	this.shape_4.setTransform(150.15,11.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgOAcQgHgEgEgHQgEgHAAgKQAAgJAEgHQAEgHAHgEQAHgEAIAAQALAAAIAHQAIAGACALIgUAAQgCgHgIAAQgEAAgDAEQgDAEAAAGQAAAIADAEQADAEAEAAQAIAAACgHIAUAAQgCAKgIAGQgIAHgLAAQgIAAgHgEg");
	this.shape_5.setTransform(143.325,11.425);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgLAdQgHgDgDgFQgEgEgBgGIATAAQABADACACQACACADAAQAEAAACgCQAAAAABAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgDgDgBIgHgDIgLgDQgFgCgDgDQgEgDAAgGQAAgGAEgEQADgEAFgDQAGgDAGAAQAMAAAGAGQAIAGABAJIgSAAQAAgDgDgCQgCgCgEAAQgDAAgBACQAAAAgBAAQAAABAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAABABAAQAAABABAAQAAABABAAIAIADIALADQAEACAEADQADAEAAAGQAAAFgDAFQgEAEgFACQgGADgHAAQgIAAgFgDg");
	this.shape_6.setTransform(136.85,11.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgIAsIAAg8IARAAIAAA8gAgHgZQgDgDAAgFQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAFgDADQgDACgFAAQgEAAgDgCg");
	this.shape_7.setTransform(132.225,10.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgiAmIAAhLIAdAAQALgBAKAFQAIAFAFAJQAFAIABALQgBALgFAJQgFAJgIAFQgKAEgLAAgAgPAWIAJAAQAJAAAHgFQAFgHABgKQgBgKgFgGQgHgFgJgBIgJAAg");
	this.shape_8.setTransform(126.75,10.65);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgSAlQgHgEgDgHQgEgHABgKQgBgJAEgGQADgHAHgEQAGgEAIAAQAFAAAFADQAFACADAEIAAgcIATAAIAABQIgTAAIAAgJQgDAFgFACQgFADgFAAQgIAAgGgEgAgJgBQgDADAAAHQAAAIADAEQAFAEAEAAQAGAAADgEQAFgEAAgHQAAgHgFgEQgDgEgGAAQgEAAgFAEg");
	this.shape_9.setTransform(116.35,10.475);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAMAfIAAggQgBgGgDgEQgDgEgFAAQgEAAgEAEQgDAEAAAGIAAAgIgSAAIAAg8IASAAIAAAIQADgEAFgCQAEgDAFAAQAMAAAGAHQAHAHAAAMIAAAjg");
	this.shape_10.setTransform(109.15,11.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgPAcQgIgEgEgHQgEgHAAgKQAAgIAFgIQADgHAIgEQAHgEAIAAQAJAAAHAEQAHAEAFAHQAEAIAAAIQAAAKgEAHQgFAHgHAEQgHAEgJAAQgIAAgHgEgAgIgKQgEAEAAAGQAAAHAEAEQADAEAFAAQAFAAAEgEQADgEAAgHQAAgGgDgEQgDgEgGAAQgFAAgDAEg");
	this.shape_11.setTransform(101.9,11.425);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgeAmIAAhLIAiAAQAMAAAGAEQAHAGAAAKQAAAGgEAEQgDAFgGACQAHAAAEAFQAEAGAAAHQAAAJgHAGQgHAFgMAAgAgLAXIANAAQAEAAADgCQADgCAAgEQAAgEgDgCQgDgCgEAAIgNAAgAgLgHIALAAQAFAAACgBQADgDAAgEQAAgDgDgDQgCgCgFAAIgLAAg");
	this.shape_12.setTransform(94.925,10.65);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AANAjQgFgFAAgJQAAgJAFgEQAFgFAIAAQAIAAAFAFQAGAEgBAJQABAJgGAFQgFAFgIAAQgIAAgFgFgAAWAQQgBACAAADQgBAIAGAAQABAAAAAAQABAAAAgBQABAAAAAAQABgBAAAAQABgCABgEQgBgDgBgCQAAgBgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAABgAgdAnIAphNIASAAIgpBNgAgngHQgEgEgBgJQABgJAEgFQAFgFAJAAQAIAAAFAFQAFAFAAAJQAAAJgFAEQgFAFgIAAQgJAAgFgFgAgegUQAAAHAEAAQABAAABAAQAAAAABAAQAAAAABgBQAAAAABgBQABgCAAgDQAAgIgGAAQgEAAAAAIg");
	this.shape_13.setTransform(84.05,10.625);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgOAnQgHgDgEgGQgEgFAAgIQAAgHADgFQAEgFAFgCQgKgFAAgMQAAgGADgFQADgFAGgDQAHgDAIAAQAJAAAGADQAGADAEAFQADAFAAAGQAAAGgDAEQgDAFgFACQAGACADAFQAEAFAAAHQAAAIgEAFQgEAGgHADQgHADgIAAQgHAAgHgDgAgHAIQgEADAAAFQAAAEADADQAEADAEAAQAFAAADgDQADgDAAgEQAAgFgDgDQgDgDgFAAQgEAAgDADgAgGgXQgDACAAAFQAAAEADADQADACADAAQAEAAADgCQACgDAAgEQAAgFgCgCQgDgDgEAAQgDAAgDADg");
	this.shape_14.setTransform(75.675,10.475);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgSAjQgJgHAAgNIATAAQgBAFADADQADADAEAAQAEAAADgDQACgCAAgEQAAgGgDgCQgEgCgGAAIgEAAIAAgPIAEAAQAEAAAEgBQADgCABgFQgBgEgCgCQgCgDgEAAQgDAAgCADQgCACAAAEIgTAAQABgMAHgGQAHgGAMAAQAIAAAFACQAHADACAFQAEAFAAAGQgBAIgDAEQgDAFgGABIAAABQAGABAFAFQADAFAAAHQAAAHgDAFQgDAFgGADQgGADgJAAQgMAAgHgGg");
	this.shape_15.setTransform(68.7,10.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(32,0,150.5,26.8), null);


(lib.Symbol5_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.image2();
	this.instance.setTransform(34,0,0.5952,0.5955);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgPAcQgHgEgEgHQgEgHAAgKQAAgJAEgHQAEgHAHgEQAHgEAIAAQAJAAAHAEQAHAEAEAHQAEAHAAAJIAAAFIgqAAQAAAFAEADQADADAEAAQAHAAACgGIAVAAQgCAGgEAFQgEAFgGADQgGADgIAAQgIAAgHgEgAgHgNQgDADgBAFIAXAAQAAgFgEgDQgDgCgFAAQgEAAgDACg");
	this.shape_15.setTransform(164.425,13.425);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgHAHQgDgDAAgEQAAgDADgDQADgDAEAAQAFAAADADQADADAAADQAAAEgDADQgDADgFAAQgEAAgDgDg");
	this.shape_16.setTransform(159.5,15.575);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgSAiQgJgFgFgJQgFgJAAgLQAAgKAFgJQAFgJAJgFQAJgFAKAAQAOAAAKAHQAKAHADANIgVAAQgCgFgEgDQgFgCgFAAQgIAAgFAGQgFAGAAAJQAAAKAFAGQAFAGAIAAQAFAAAFgCQAEgDACgFIAVAAQgDANgKAHQgKAHgOAAQgKAAgJgFg");
	this.shape_17.setTransform(153.675,12.625);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AghAmIAAhLIAdAAQAKgBAJAFQAJAFAGAJQAEAIAAALQAAALgEAJQgGAJgJAFQgJAEgKAAgAgPAWIAJAAQAKAAAFgFQAHgHgBgKQABgKgHgGQgFgFgKAAIgJAAg");
	this.shape_18.setTransform(145.7,12.65);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgNAlQgHgDgEgFQgEgGAAgHIAUAAQAAAEADACQACACADAAQAFAAACgBQACgCAAgEQAAgDgBgCIgFgDIgHgCIgMgFQgFgCgDgEQgEgEAAgIQAAgKAIgGQAIgHAMAAQAMAAAIAHQAIAGAAALIgUAAQAAgEgDgCQgCgDgDAAQgEAAgCACQgCACAAAEQAAADAEACIAKAFIAMAFQAEABAEAEQADAFAAAHQAAAGgDAGQgEAFgGADQgGAEgJAAQgHAAgHgDg");
	this.shape_19.setTransform(138.175,12.625);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgQAjQgHgDgEgIQgEgHAAgKIAAgtIATAAIAAAtQAAAHADAEQADADAGAAQAHAAADgDQAEgEAAgHIAAgtIASAAIAAAtQAAAKgEAHQgEAIgIADQgHAEgJAAQgIAAgIgEg");
	this.shape_20.setTransform(130.925,12.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAMAfIAAghQAAgFgEgEQgDgEgFABQgEgBgDAEQgEAEAAAFIAAAhIgTAAIAAg9IATAAIAAAJQADgFAFgCQAEgCAFAAQALAAAHAHQAGAHABAMIAAAjg");
	this.shape_21.setTransform(121.05,13.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgIAsIAAg9IARAAIAAA9gAgHgaQgDgCAAgFQAAgFADgCQADgDAEAAQAFAAADADQADACAAAFQAAAFgDACQgDADgFAAQgEAAgDgDg");
	this.shape_22.setTransform(115.675,12.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgMAdQgGgDgEgFQgDgEAAgGIASAAQAAADADACQACACAEAAQADAAACgCQABAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgBgBgBQAAAAgBAAQAAgBgBAAIgIgDIgLgDQgEgCgEgDQgCgDAAgGQAAgGACgEQADgEAGgDQAFgDAIAAQALAAAHAGQAGAGACAJIgSAAQgBgDgCgCQgCgCgEAAQgCAAgCACQAAAAgBAAQAAABgBAAQAAABAAAAQAAABAAAAQAAADADABIAHADIAMADQAEACADADQADAEABAGQgBAFgDAFQgDAEgFACQgGADgHAAQgHAAgHgDg");
	this.shape_23.setTransform(108.55,13.425);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAKAmQgKAAgFgFQgGgFAAgLIAAgYIgHAAIAAgPIAHAAIAAgPIASAAIAAAPIAMAAIAAAPIgMAAIAAAYQAAABAAAAQAAABAAAAQAAABABAAQAAABAAAAIAFABIAGAAIAAAQg");
	this.shape_24.setTransform(103.275,12.675);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgSAcQgGgDgDgGQgDgGAAgIIAAgjIATAAIAAAgQAAAHADADQADAEAFAAQAFAAAEgEQACgDAAgHIAAggIATAAIAAA8IgTAAIAAgIQgCAEgFACQgEADgGAAQgHAAgFgDg");
	this.shape_25.setTransform(97.4,13.45);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgPAcQgIgEgEgHQgEgHAAgKQAAgIAFgIQADgHAIgEQAHgEAIAAQAJAAAHAEQAHAEAFAHQAEAIAAAIQAAAKgEAHQgFAHgHAEQgHAEgJAAQgIAAgHgEgAgIgKQgEAEAAAGQAAAHAEAEQADAEAFAAQAFAAAEgEQADgEAAgHQAAgGgDgEQgDgEgGAAQgFAAgDAEg");
	this.shape_26.setTransform(90.2,13.425);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgXAtIAOgfIgZg6IAVAAIANAmIAOgmIAVAAIgmBZg");
	this.shape_27.setTransform(83.225,14.875);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgSAcQgHgEgDgHQgEgIABgJQgBgJAEgHQADgHAHgEQAGgEAIAAQAFAAAFADQAFADADAEIAAgJIATAAIAAA9IgTAAIAAgJQgDAEgFADQgFADgFAAQgIAAgGgEgAgJgKQgDAEAAAGQAAAHADAEQAFAEAEAAQAGAAADgEQAFgEAAgHQAAgGgFgEQgDgEgGAAQgEAAgFAEg");
	this.shape_28.setTransform(75.85,13.425);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgcAmIAAhLIAdAAQAJAAAHACQAGAEADAFQADAGAAAHQAAAHgDAGQgDAEgGAEQgHADgJAAIgLAAIAAAbgAgKgDIAKAAQAFAAADgDQACgCAAgFQAAgEgCgDQgDgDgFAAIgKAAg");
	this.shape_29.setTransform(69.075,12.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5_1, new cjs.Rectangle(34,0,137.5,26.8), null);


(lib.Symbol4_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgOBEIAAheIAcAAIAABegAgMgoQgEgFAAgGQAAgHAEgEQAFgFAHAAQAHAAAFAFQAFAEAAAHQAAAGgFAFQgFAEgHAAQgHAAgFgEg");
	this.shape_16.setTransform(241.075,14.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgQBDIAAhGIgLAAIAAgYIALAAIAAgDQAAgRAKgJQAJgKAUAAIAEABIAAAYQgIAAgDADQgEADAAAHIAAABIAPAAIAAAYIgPAAIAABGg");
	this.shape_17.setTransform(235.5,14.625);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgXArQgLgGgGgLQgHgLAAgPQAAgOAHgLQAGgLAKgGQALgGANAAQAOAAALAGQALAGAGAKQAGALAAAOIgBAIIhBAAQABAJAFAEQAFAFAHAAQAKAAAFgJIAfAAQgDAJgGAIQgGAHgKAEQgJAFgMAAQgMAAgLgGgAgLgUQgFAEgBAIIAjAAQAAgIgFgEQgFgFgIAAQgGAAgFAFg");
	this.shape_18.setTransform(227.225,16.575);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ag1A8IAAh3IAtAAQASAAAOAIQAOAHAIAOQAIANAAARQAAASgIANQgIAOgOAHQgOAIgSAAgAgYAjIAOAAQAQAAAJgJQAJgJAAgRQAAgPgJgKQgJgJgQAAIgOAAg");
	this.shape_19.setTransform(216.075,15.325);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AASAwIAAgzQAAgJgFgFQgFgGgIAAQgHAAgFAGQgFAFAAAJIAAAzIgdAAIAAheIAdAAIAAANQAEgGAIgEQAGgEAKAAQAQAAAKALQAKALAAASIAAA3g");
	this.shape_20.setTransform(200.425,16.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgOBEIAAheIAcAAIAABegAgMgoQgEgFAAgGQAAgHAEgEQAFgFAHAAQAHAAAFAFQAFAEAAAHQAAAGgFAFQgFAEgHAAQgHAAgFgEg");
	this.shape_21.setTransform(192.175,14.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAzAwIAAgzQAAgIgFgFQgFgFgIgBQgJABgFAFQgEAFAAAIIAAAzIgcAAIAAgzQAAgIgFgFQgFgFgIgBQgJABgFAFQgFAFAAAIIAAAzIgdAAIAAheIAdAAIAAAMQAFgGAHgDQAHgEAJAAQALAAAIAEQAIAFAEAJQAFgIAJgFQAIgFAKAAQASAAAKALQALALAAASIAAA3g");
	this.shape_22.setTransform(177.075,16.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgXArQgLgGgGgLQgHgLAAgPQAAgOAHgLQAGgLAKgGQALgGANAAQAOAAALAGQALAGAGAKQAGALAAAOIgBAIIhBAAQABAJAFAEQAFAFAHAAQAKAAAFgJIAfAAQgDAJgGAIQgGAHgKAEQgJAFgMAAQgMAAgLgGgAgLgUQgFAEgBAIIAjAAQAAgIgFgEQgFgFgIAAQgGAAgFAFg");
	this.shape_23.setTransform(162.825,16.575);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAPA7QgPAAgJgIQgJgHAAgSIAAglIgLAAIAAgYIALAAIAAgXIAcAAIAAAXIAUAAIAAAYIgUAAIAAAmQAAADADACQACACAEAAIALAAIAAAZg");
	this.shape_24.setTransform(154.05,15.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgSAsQgKgEgGgHQgGgIAAgJIAdAAQAAAFAEADQAFADAEAAQAGAAACgCQADgCABgDQgBgFgEgCIgMgEIgRgFQgHgCgFgFQgFgGAAgKQAAgIAEgGQAFgHAJgEQAIgEALAAQASAAAKAJQALAJACAOIgbAAQgBgFgEgCQgEgDgFAAQgEAAgDACQgDACAAADQAAAEAEACIANAEIARAFQAHADAFAFQAFAGAAAKQAAAIgFAHQgEAGgJAEQgJAEgMAAQgLAAgJgFg");
	this.shape_25.setTransform(145.85,16.575);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgkBGIAWgwIgnhbIAhAAIAUA7IAWg7IAgAAIg7CLg");
	this.shape_26.setTransform(135.825,18.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgVA5QgKgEgHgJQgFgIgBgMIAfAAQABAHAEADQAEAEAFAAQAHAAADgDQAEgDAAgGQAAgEgDgCQgDgEgFgCIgLgDQgMgEgGgEQgIgDgFgGQgGgIABgKQAAgRALgJQANgKATAAQASAAANAKQAMAJAAARIgfAAQAAgGgEgDQgEgEgFAAQgGAAgDADQgDADAAAFQAAAGAGADQAFAEALADIATAHQAGADAGAHQAFAHAAAKQAAAKgFAJQgFAIgKAGQgKAEgNAAQgMAAgLgEg");
	this.shape_27.setTransform(125.2,15.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgXArQgLgGgGgLQgHgLAAgPQAAgOAHgLQAGgLAKgGQALgGANAAQAOAAALAGQALAGAGAKQAGALAAAOIgBAIIhBAAQABAJAFAEQAFAFAHAAQAKAAAFgJIAfAAQgDAJgGAIQgGAHgKAEQgJAFgMAAQgMAAgLgGgAgLgUQgFAEgBAIIAjAAQAAgIgFgEQgFgFgIAAQgGAAgFAFg");
	this.shape_28.setTransform(111.175,16.575);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgdArQgIgFgEgJQgFgJAAgMIAAg3IAdAAIAAAyQAAAKAFAFQAFAFAHABQAIgBAFgFQAFgFAAgKIAAgyIAdAAIAABeIgdAAIAAgNQgEAHgIADQgGAEgJAAQgLAAgJgFg");
	this.shape_29.setTransform(100.225,16.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAVBHIAAg6QgFAHgHADQgHADgIABQgMAAgJgHQgKgFgGgMQgGgKAAgOQAAgOAGgLQAGgLAKgGQAKgGALgBQAIABAHADQAIADAEAFIAAgLIAdAAIAACMgAgJgqQgEADgDAGQgDAEAAAIQAAAIADAFQADAGAEACQAFABAEAAQAFAAAFgBQAFgCADgGQADgGAAgHQAAgIgDgFQgDgFgFgDQgEgCgGAAQgEAAgFACg");
	this.shape_30.setTransform(88.475,18.75);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgOBEIAAheIAcAAIAABegAgMgoQgEgFAAgGQAAgHAEgEQAFgFAHAAQAHAAAFAFQAFAEAAAHQAAAGgFAFQgFAEgHAAQgHAAgFgEg");
	this.shape_31.setTransform(80.525,14.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AASAwIAAgzQAAgJgFgFQgFgGgIAAQgHAAgFAGQgFAFAAAJIAAAzIgdAAIAAheIAdAAIAAANQAEgGAIgEQAGgEAKAAQAQAAAKALQAKALAAASIAAA3g");
	this.shape_32.setTransform(72.375,16.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgZA3QgLgGgGgLQgHgLAAgQIAAhGIAdAAIAABGQAAALAFAGQAGAGAJAAQAKAAAGgGQAFgGAAgLIAAhGIAdAAIAABGQAAAQgHALQgGALgMAGQgMAFgNAAQgOAAgLgFg");
	this.shape_33.setTransform(60.6,15.375);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAPA7QgPAAgIgIQgJgHAAgSIAAglIgMAAIAAgYIAMAAIAAgXIAcAAIAAAXIATAAIAAAYIgTAAIAAAmQAAADABACQADACAFAAIAKAAIAAAZg");
	this.shape_34.setTransform(47.45,15.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgTAsQgJgEgGgHQgFgIgBgJIAcAAQABAFAFADQADADAGAAQAFAAADgCQACgCAAgDQAAgFgDgCIgOgEIgRgFQgGgCgFgFQgFgGAAgKQAAgIAFgGQAEgHAIgEQAKgEALAAQARAAALAJQAKAJABAOIgbAAQAAgFgDgCQgFgDgFAAQgFAAgCACQgDACAAADQAAAEAFACIAMAEIARAFQAHADAFAFQAFAGAAAKQAAAIgEAHQgGAGgIAEQgJAEgLAAQgMAAgKgFg");
	this.shape_35.setTransform(39.25,16.575);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgZArQgLgGgGgLQgHgLAAgPQAAgOAHgLQAGgLAMgGQALgGANAAQAOAAALAGQAMAGAGALQAHALgBAOQABAOgHAMQgHALgLAGQgMAGgNAAQgNAAgMgGgAgNgRQgGAGABALQgBALAGAGQAFAGAIAAQAIAAAGgGQAGgGAAgLQAAgLgGgGQgFgGgJAAQgIAAgFAGg");
	this.shape_36.setTransform(29.2,16.575);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAnA8IAAhHIgbBHIgXAAIgbhHIAABHIgcAAIAAh3IAiAAIAgBSIAihSIAiAAIAAB3g");
	this.shape_37.setTransform(16,15.325);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#CC3726").s().p("AyvCvQhBAAAAgpIAAkKQAAgqBBAAMAlfAAAQBBAAAAAqIAAEKQAAAphBAAg");
	this.shape_38.setTransform(127.5,15.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4_1, new cjs.Rectangle(1,-1.5,253,35.5), null);


// stage content:
(lib.index = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [239];
	// timeline functions:
	this.frame_239 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(239).call(this.frame_239).wait(1));

	// text4_end
	this.instance = new lib.Symbol5_1();
	this.instance.setTransform(278.5,-5.1,0.4955,0.4944,0,0,0,136.2,-70.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(229).to({_off:false},0).to({x:299.55,alpha:1},10).wait(1));

	// text3_end
	this.instance_1 = new lib.Symbol6();
	this.instance_1.setTransform(262.45,20.8,0.4523,0.4515,0,0,0,93.9,15.6);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(224).to({_off:false},0).to({x:275.9,alpha:1},10).wait(6));

	// text2_end
	this.instance_2 = new lib.Symbol4_1();
	this.instance_2.setTransform(231.7,35.9,0.5178,0.5169,0,0,0,251.5,20.4);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(219).to({_off:false},0).to({alpha:1},10).wait(11));

	// text1_end
	this.instance_3 = new lib.Symbol7();
	this.instance_3.setTransform(164.45,15.05,0.5022,0.5017,0,0,0,123,13.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(214).to({_off:false},0).to({alpha:1},10).wait(16));

	// Layer_5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_149 = new cjs.Graphics().p("Ap/BpIAAjRIT/AAIAADRg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(149).to({graphics:mask_graphics_149,x:214,y:25.3}).wait(91));

	// text4
	this.instance_4 = new lib.Symbol5();
	this.instance_4.setTransform(222,4.5,1,1,0,0,0,71,13.5);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(149).to({_off:false},0).to({y:25.05},10,cjs.Ease.quadInOut).wait(35).to({alpha:0},10).wait(36));

	// Layer_4 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_104 = new cjs.Graphics().p("Aq7BfIAAi9IV3AAIAAC9g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(104).to({graphics:mask_1_graphics_104,x:216,y:24.25}).wait(136));

	// text3
	this.instance_5 = new lib.Symbol4();
	this.instance_5.setTransform(218,6.5,1,1,0,0,0,71,13.5);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(104).to({_off:false},0).to({y:25.05},10,cjs.Ease.quadInOut).wait(35).to({y:48.5},10,cjs.Ease.quadInOut).wait(81));

	// Layer_3 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_59 = new cjs.Graphics().p("AuhB4IAAjvIdDAAIAADvg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(59).to({graphics:mask_2_graphics_59,x:217.75,y:24.7}).wait(181));

	// text2
	this.instance_6 = new lib.Symbol3();
	this.instance_6.setTransform(218.5,1.5,1,1,0,0,0,92.5,13.5);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(59).to({_off:false},0).to({y:25.05},10,cjs.Ease.quadInOut).wait(35).to({y:52.5},10,cjs.Ease.quadInOut).wait(126));

	// Layer_1 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_14 = new cjs.Graphics().p("AgqDgIAAmPIXlAAIAAGPg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(14).to({graphics:mask_3_graphics_14,x:146.75,y:22.3756}).wait(226));

	// text1
	this.instance_7 = new lib.Symbol2();
	this.instance_7.setTransform(218,-13.6,1,1,0,0,0,71,22.4);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(14).to({_off:false},0).to({y:25},10,cjs.Ease.quadInOut).wait(35).to({y:70.4},10,cjs.Ease.quadInOut).wait(171));

	// logo
	this.instance_8 = new lib.Symbol1();
	this.instance_8.setTransform(160,25.05,1.2596,1.2596,0,0,0,52,15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({scaleX:1,scaleY:1,x:60,y:25.5},14).wait(10).to({regX:52.1,scaleX:1.0962,scaleY:1.0962,x:60.1,y:25.55},5).to({regX:52,scaleX:1,scaleY:1,x:60,y:25.5},5).wait(35).to({regX:52.1,scaleX:1.0962,scaleY:1.0962,x:60.1,y:25.55},5).to({regX:52,scaleX:1,scaleY:1,x:60,y:25.5},5).wait(35).to({regX:52.1,scaleX:1.0962,scaleY:1.0962,x:60.1,y:25.55},5).to({regX:52,scaleX:1,scaleY:1,x:60,y:25.5},5).wait(35).to({regX:52.1,scaleX:1.0962,scaleY:1.0962,x:60.1,y:25.55},5).to({regX:52,scaleX:1,scaleY:1,x:60,y:25.5},5).wait(35).to({regY:15.7,scaleX:0.7692,scaleY:0.7686,x:47.95,y:25.2},10).wait(26));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A4/j5MAx/AAAIAAHzMgx/AAAg");
	this.shape.setTransform(160,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(240));

	// bg
	this.instance_9 = new lib.bg();

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(240));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(159,24,162,27);
// library properties:
lib.properties = {
	id: 'DBA466C0FED54E49819A79E5D1849FF8',
	width: 320,
	height: 50,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"bg.png?1657800892445", id:"bg"},
		{src:"image1.png?1657800892445", id:"image1"},
		{src:"image2.png?1657800892445", id:"image2"},
		{src:"logo.png?1657800892445", id:"logo"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['DBA466C0FED54E49819A79E5D1849FF8'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;