(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"IPS_300x600_atlas_1", frames: [[0,0,625,1250],[627,0,625,1250],[1254,0,625,1250]]},
		{name:"IPS_300x600_atlas_2", frames: [[0,0,515,1128],[1771,0,214,232],[576,1632,567,259],[1613,1832,324,32],[1613,1754,392,76],[1613,1632,432,120],[1145,1632,466,211],[0,1429,465,174],[517,0,625,814],[1144,0,625,814],[517,816,625,814],[1144,816,625,814],[1771,234,148,159],[0,1632,574,336],[0,1130,396,297]]}
];


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



(lib.ips_bgIN = function() {
	this.initialize(ss["IPS_300x600_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ips_bgOUT = function() {
	this.initialize(ss["IPS_300x600_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ips_blurb = function() {
	this.initialize(ss["IPS_300x600_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ips_header = function() {
	this.initialize(ss["IPS_300x600_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ips_headerItems = function() {
	this.initialize(ss["IPS_300x600_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ips_point1 = function() {
	this.initialize(ss["IPS_300x600_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.ips_point2 = function() {
	this.initialize(ss["IPS_300x600_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.ips_point3 = function() {
	this.initialize(ss["IPS_300x600_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.ips_sub = function() {
	this.initialize(ss["IPS_300x600_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.ips_tagline = function() {
	this.initialize(ss["IPS_300x600_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ips_talentF1 = function() {
	this.initialize(ss["IPS_300x600_atlas_2"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.ips_talentF1right = function() {
	this.initialize(ss["IPS_300x600_atlas_2"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.ips_talentright = function() {
	this.initialize(ss["IPS_300x600_atlas_2"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.ips_talent = function() {
	this.initialize(ss["IPS_300x600_atlas_2"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.logos = function() {
	this.initialize(ss["IPS_300x600_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.qnpngcopy = function() {
	this.initialize(ss["IPS_300x600_atlas_2"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.stack = function() {
	this.initialize(ss["IPS_300x600_atlas_2"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.textF1 = function() {
	this.initialize(ss["IPS_300x600_atlas_2"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Tween26 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ips_bgIN();
	this.instance.setTransform(-124,-104.5,0.4816,0.4816);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-124,-104.5,248,543.2);


(lib.Tween24 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ips_headerItems();
	this.instance.setTransform(-69.25,-6.7,0.4809,0.4809);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.2,-6.7,155.8,15.399999999999999);


(lib.Tween23 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ips_sub();
	this.instance.setTransform(-74.8,-35.25,0.4828,0.4763);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.8,-35.2,224.5,82.9);


(lib.Tween22 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ips_header();
	this.instance.setTransform(-134.25,-51.15,0.4813,0.4849);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-134.2,-51.1,272.9,125.6);


(lib.Tween20 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ips_talent();
	this.instance.setTransform(-87.8,-84.45,0.4784,0.4799);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.8,-84.4,299,390.6);


(lib.Tween13 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.textF1();
	this.instance.setTransform(-87.25,-36,0.4781,0.4767);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.2,-36,189.3,141.6);


(lib.Tween11 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ips_talentF1();
	this.instance.setTransform(-88.1,-84.5,0.4802,0.4802);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88.1,-84.5,300.1,390.9);


(lib.talentleft = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ips_talentright();
	this.instance.setTransform(-149.5,-195.3,0.4784,0.4799);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-149.5,-195.3,299,390.70000000000005);


(lib.talentF1r = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ips_talentF1right();
	this.instance.setTransform(-150.05,-195.4,0.4802,0.4802);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-195.4,300.1,390.9);


(lib.QN_mark = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.qnpngcopy();
	this.instance.setTransform(-35.15,-37.75,0.4749,0.4749);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.1,-37.7,70.30000000000001,75.5);


(lib.point3 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ips_point3();
	this.instance.setTransform(-63.95,-37.1,0.4791,0.4791);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.9,-37.1,223.20000000000002,101.1);


(lib.point2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ips_point2();
	this.instance.setTransform(-72.7,-24.5,0.483,0.4755);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.7,-24.5,208.7,57.1);


(lib.point1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ips_point1();
	this.instance.setTransform(-63.6,-37.2,0.4836,0.4836);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.6,-37.2,189.6,36.800000000000004);


(lib.logos_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.logos();
	this.instance.setTransform(-149.95,-125,0.4799,0.4799);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-149.9,-125,299.9,599.9);


(lib.Blurbdays = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ips_blurb();
	this.instance.setTransform(-33.4,-31.25,0.4809,0.4809);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.4,-31.2,102.9,111.5);


(lib.bgtagline = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ips_tagline();
	this.instance.setTransform(-149.95,-125,0.4798,0.4798);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-149.9,-125,299.9,599.8);


// stage content:
(lib.IPS300x600 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Blurb
	this.instance = new lib.Blurbdays("synched",0);
	this.instance.setTransform(72.75,324.9,0.0049,0.0045,0,0,0,20.6,22.3);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(89).to({_off:false},0).to({regX:20.2,regY:24.4,scaleX:0.9949,scaleY:0.9949,x:74.95,y:324.6,alpha:1},7).wait(65).to({startPosition:0},0).to({regX:20.6,regY:22.3,scaleX:0.0049,scaleY:0.0045,x:74.9,y:324.55,alpha:0},5).to({_off:true},1).wait(350));

	// QN_mark
	this.instance_1 = new lib.QN_mark("synched",0);
	this.instance_1.setTransform(233.3,275.45,0.0047,0.0043,0,0,0,0,11.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({regY:0,scaleX:1.5176,scaleY:1.5176,x:233.2,y:275.35,alpha:1},10).wait(43).to({startPosition:0},0).to({regY:11.5,scaleX:0.0047,scaleY:0.0043,x:233.3,y:275.45,alpha:0},10).to({_off:true},1).wait(444));

	// Talent
	this.instance_2 = new lib.Tween11("synched",0);
	this.instance_2.setTransform(513,293.65);

	this.instance_3 = new lib.talentF1r("synched",0);
	this.instance_3.setTransform(150,404.55);

	this.instance_4 = new lib.Tween20("synched",0);
	this.instance_4.setTransform(439,293.8);
	this.instance_4._off = true;

	this.instance_5 = new lib.talentleft("synched",0);
	this.instance_5.setTransform(150.5,404.65);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_2}]},9).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},12).to({state:[{t:this.instance_3}]},12).to({state:[{t:this.instance_2}]},12).to({state:[{t:this.instance_2}]},12).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_2}]},10).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},9).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_4}]},12).to({state:[{t:this.instance_5}]},12).to({state:[{t:this.instance_4}]},12).to({state:[{t:this.instance_5}]},12).to({state:[{t:this.instance_4}]},12).to({state:[{t:this.instance_5}]},12).to({state:[{t:this.instance_4}]},12).to({state:[{t:this.instance_5}]},12).to({state:[{t:this.instance_4}]},12).to({state:[{t:this.instance_5}]},12).to({state:[{t:this.instance_4}]},12).to({state:[{t:this.instance_5}]},12).to({state:[{t:this.instance_4}]},12).to({state:[{t:this.instance_5}]},12).to({state:[{t:this.instance_4}]},12).to({state:[{t:this.instance_5}]},12).to({state:[{t:this.instance_4}]},12).to({state:[{t:this.instance_5}]},12).to({state:[{t:this.instance_4}]},12).to({state:[{t:this.instance_5}]},12).to({state:[{t:this.instance_4}]},12).to({state:[]},3).wait(179));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:88.05},9).to({_off:true},1).wait(12).to({_off:false,regX:62,regY:110.9,x:150.05,y:404.55},0).to({_off:true},12).wait(12).to({_off:false},0).wait(12).to({regX:0,regY:0,x:88.05,y:293.65},0).wait(4).to({startPosition:0},0).to({x:612},10).to({_off:true},1).wait(444));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(73).to({_off:false},0).to({x:88.8},9).to({_off:true},1).wait(12).to({_off:false,regX:211.2,regY:306.2,x:300,y:600},0).to({_off:true},12).wait(12).to({_off:false},0).to({_off:true},12).wait(12).to({_off:false},0).to({_off:true},12).wait(12).to({_off:false},0).to({_off:true},12).wait(12).to({_off:false},0).to({_off:true},12).wait(12).to({_off:false},0).to({_off:true},12).wait(12).to({_off:false},0).to({_off:true},12).wait(12).to({_off:false},0).to({_off:true},12).wait(12).to({_off:false},0).to({_off:true},12).wait(12).to({_off:false},0).to({_off:true},12).wait(12).to({_off:false,regX:0,regY:0,x:88.8,y:293.8},0).to({_off:true},3).wait(179));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(83).to({_off:false},0).to({_off:true},12).wait(12).to({_off:false},0).to({_off:true},12).wait(12).to({_off:false},0).to({_off:true},12).wait(12).to({_off:false},0).to({_off:true},12).wait(12).to({_off:false},0).to({_off:true},12).wait(12).to({_off:false},0).to({_off:true},12).wait(12).to({_off:false},0).to({_off:true},12).wait(12).to({_off:false},0).to({_off:true},12).wait(12).to({_off:false},0).to({_off:true},12).wait(12).to({_off:false},0).to({_off:true},12).wait(12).to({_off:false},0).to({_off:true},12).wait(182));

	// KETs_Sub
	this.instance_6 = new lib.Tween23("synched",0);
	this.instance_6.setTransform(-265.35,172.35,0.9943,1,0,0,0,-74.8,-35.2);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.instance_7 = new lib.point1("synched",0);
	this.instance_7.setTransform(150.75,164.45,0.0026,0.0136,0,0,0,37.9,-14.7);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.instance_8 = new lib.point2("synched",0);
	this.instance_8.setTransform(154.1,183,0.0024,0.0088,0,0,0,41.8,5.7);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.instance_9 = new lib.point3("synched",0);
	this.instance_9.setTransform(153.6,184,0.0022,0.0049,0,0,0,66.8,20.2);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(80).to({_off:false},0).to({x:48.9,alpha:1},9).wait(72).to({startPosition:0},0).to({x:-299.35,alpha:0},10).to({_off:true},1).wait(345));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(179).to({_off:false},0).to({regX:31.2,regY:-18.9,scaleX:1,scaleY:1,x:150.8,y:164.4,alpha:1},7).wait(44).to({startPosition:0},0).to({regX:37.9,regY:-14.7,scaleX:0.0026,scaleY:0.0136,x:150.75,y:164.45,alpha:0},4).to({_off:true},1).wait(282));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(235).to({_off:false},0).to({regX:31.6,regY:3.9,scaleX:1,scaleY:1,alpha:1},7).wait(44).to({startPosition:0},0).to({regX:41.8,regY:5.7,scaleX:0.0024,scaleY:0.0088,alpha:0},4).to({_off:true},1).wait(226));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(291).to({_off:false},0).to({regX:47.6,regY:13.5,scaleX:1,scaleY:1,x:153.55,y:184.05,alpha:1},7).to({_off:true},40).wait(179));

	// KETs_Header
	this.instance_10 = new lib.Tween22("synched",0);
	this.instance_10.setTransform(-205,122.45,0.9962,0.9962,0,0,0,2,14.3);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.instance_11 = new lib.Tween24("synched",0);
	this.instance_11.setTransform(-204.6,68.45,1.0056,1.006,0,0,0,-69.2,-6.7);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(73).to({_off:false},0).to({x:155.05,alpha:1},9).wait(79).to({regX:0,regY:0,scaleX:1,scaleY:1,x:153.05,y:108.2},0).to({x:-209,alpha:0},10).to({_off:true},1).wait(345));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(172).to({_off:false},0).to({scaleX:1.0055,scaleY:1.0055,x:41.5,alpha:1},7).to({_off:true},159).wait(179));

	// Text_F1
	this.instance_12 = new lib.Tween13("synched",0);
	this.instance_12.setTransform(-174.6,71.7,1,1.0106,0,0,0,7.4,-36);
	this.instance_12.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({x:140.9,alpha:1},9).wait(53).to({startPosition:0},0).to({x:-186.6,alpha:0},10).to({_off:true},1).wait(444));

	// Stack
	this.instance_13 = new lib.stack();
	this.instance_13.setTransform(18,107,0.4815,0.4801);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(172).to({_off:false},0).to({_off:true},166).wait(179));

	// BG_in
	this.instance_14 = new lib.Tween26("synched",0);
	this.instance_14.setTransform(-384.25,29.95,0.9972,0.996,0,0,0,-123.6,-104.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({x:29.55},9).to({_off:true},329).wait(179));

	// BG
	this.instance_15 = new lib.ips_bgOUT();
	this.instance_15.setTransform(0,0,0.48,0.48);

	this.instance_16 = new lib.bgtagline("synched",0);
	this.instance_16.setTransform(150,300.1,1.0003,1.0003,0,0,0,0,175);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.instance_17 = new lib.logos_1("synched",0,false);
	this.instance_17.setTransform(150.1,299.95,1.0002,1.0002,0,0,0,0.1,174.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15}]}).to({state:[{t:this.instance_16}]},338).to({state:[{t:this.instance_16}]},11).to({state:[{t:this.instance_17}]},48).wait(120));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(338).to({_off:false},0).to({alpha:1},11).to({_off:true},48).wait(120));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-234.6,300,1058.6,300);
// library properties:
lib.properties = {
	id: '47EE136DC7884E73B58C3A264E5F426E',
	width: 300,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/IPS_300x600_atlas_1.png?1693814710293", id:"IPS_300x600_atlas_1"},
		{src:"images/IPS_300x600_atlas_2.png?1693814710294", id:"IPS_300x600_atlas_2"}
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
an.compositions['47EE136DC7884E73B58C3A264E5F426E'] = {
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