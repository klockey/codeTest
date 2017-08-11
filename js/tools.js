var tools = {} || tools;

tools = (function() {

	var _toolsModule = {};


	_toolsModule.Line = function(event, cx, onEnd) {
	  cx.lineCap = "round";
	  var pos = relativePos(event, cx.canvas);
	  trackDrag(function(event) {
	    cx.beginPath();
	    cx.moveTo(pos.x, pos.y);
	    pos = relativePos(event, cx.canvas);
	    cx.lineTo(pos.x, pos.y);
	    cx.stroke();
	  }, onEnd);
	};

	_toolsModule.Erase = function(event, cx) {
	  $('selector').css( 'cursor', 'pointer' );
<<<<<<< HEAD
	  cx.globalCompositeOperation = "destination-out";
	  _toolsModule.Line(event, cx, function() {
=======
	  cx.globalCompositeoperation = "destination-out";
	  toolsModule.Line(event, cx, function() {
>>>>>>> e11e636a096e692ee52961fddbe51a6292db536c
	    cx.globalCompositeOperation = "source-over";
	  });
	};

	_toolsModule.Text = function(event, cx) {
	  var text = prompt("Text:", "");
	  if (text) {
<<<<<<< HEAD
	    var pos = relativePos(event, cx.canvas);
	    cx.font = Math.max(7, cx.lineWidth) + "px sans-serif";
          console.log(pos.x)
=======
	    var pos = utilities.relativePos(event, cx.canvas);
	    cx.font = Math.max(7, cx.lineWidth) + "px sans-serif";
>>>>>>> e11e636a096e692ee52961fddbe51a6292db536c
	    cx.fillText(text, pos.x, pos.y);
	  }
	};

	_toolsModule.Spray = function(event, cx) {
	  var radius = cx.lineWidth / 2;
	  var area = radius * radius * Math.PI;
	  var dotsPerTick = Math.ceil(area / 30);

	  var currentPos = relativePos(event, cx.canvas);
	  var spray = setInterval(function() {
	    for (var i = 0; i < dotsPerTick; i++) {
	      var offset = randomPointInRadius(radius);
	      cx.fillRect(currentPos.x + offset.x,
	                  currentPos.y + offset.y, 1, 1);
	    }
	  }, 25);

	  trackDrag(function(event) {
	    currentPos = relativePos(event, cx.canvas);
	  }, function() {
	    clearInterval(spray);
	  });
	};



	return _toolsModule;
})();