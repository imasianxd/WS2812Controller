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
	var New = false;
	var lastColor = "ffffff";
	var lastBrightness = "255";
	var conditionChanged = false;

	function fixed() {
		this.fixedLighting = function(args, strip){
			console.log("Starting fixed Color");
			strip.Mode = name + "fixed";
			FixedColor1 = parseInt("0x" + args.Color1);
			Brightness = parseInt(args.Brightness);
			
			if (FixedColor1 != lastColor){
				//clearTimeout(loop);
				conditionChanged = true;
			} else if (Brightness != lastBrightness){
				//clearTimeout(loop);
				conditionChanged = true;
			} else{
				conditionChanged = false;
			}
			
			var _this = this;
			strip.SetStripColor(FixedColor1);
			strip.SetBrightness(Brightness);
			
			lastColor = FixedColor1;
			lastBrightness = Brightness;

			strip.Render();

			loop = setTimeout(function () {
				if (!conditionChanged) {
					_this.fixedLighting(args, strip);
				} else {
					strip.Stop();
					conditionChanged = false;
				}
			}, 1000);

		};
	}

module.exports = new fixed();



	
