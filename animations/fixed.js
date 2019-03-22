/*******************************
	fixed color animations
*******************************/
	var common = require("./common.js");
	var name = "fixed.js";

/*******************************
	fixed methods
*******************************/

	var FixedColor1;
	var Brightness;

	function fixed() {
		this.fixedLighting = function(args, strip){
			console.log("Starting fixed Color");
			
			FixedColor1 = parseInt("0x" + args.Color1);
			Brightness = parseInt(args.Brightness);
			var _this = this;
			
		    strip.SetStripColor(FixedColor1);
			strip.SetBrightness(Brightness);
			strip.Mode = name + "fixed";

			strip.Render();

			setTimeout(function () {
				_this.fixedLighting(args, strip);
			}, 1000);
		};
	}

module.exports = new fixed();



	
