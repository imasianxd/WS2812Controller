/*******************************
	christmas animations
*******************************/
	var common = require("./common.js");
	var name = "fixed.js";

/*******************************
	fixed methods
*******************************/

	var FixedColor1;
	var Brightness;

	function fixer() {
		this.fixedLighting = function(args, strip){
			console.log("Starting fixed Color");
			FixedColor1 = parseInt("0x" + args.Color1);
			Brightness = parseInt(args.speed);
			
			// init the led
		    strip.SetStripColor(FixedColor1);
			strip.SetBrightness(Brightness);
			strip.Mode = "fixed";
			
			console.log("started fixed mode");
		};

		this.FadeSpeed = function(args, strip) {
			var val = parseInt(args.speed);
	        var mappedVal = common.map_range(val, 0, 100, 10, 1);
	        if (typeof mappedVal === "number") {
				FadeSpeed = mappedVal;
				console.log("Updated fade speed: " + FadeSpeed);
	        } else {
	            FadeSpeed = 1000 / 30;
	        }
		};
	}

module.exports = new fixer();



	
