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
			
			// init the led
		    strip.SetStripColor(FixedColor1);
			strip.SetBrightness(Brightness);
			strip.Mode = name + "fixed";
			
			strip.Render();
		};
		
		this.fixedLighting2 = function(args, strip) {
		
			console.log("turned on fixed lighting on pulse mode")
			
			//parse the args
			FixedColor1 = parseInt("0x" + args.Color1);
			Brightness = parseInt(args.Brightness);
			
			// init the led
		    strip.SetStripColor(FixedColor1);
			strip.SetBrightness(Brightness);
			strip.Mode = name + "fixed";
			strip.Render();
			//render the strip continuously
			//setTimeout(function () { strip.Render(); }, 1000);
    };

	}
	
	
module.exports = new fixed();



	
