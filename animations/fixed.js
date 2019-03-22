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

	function fixed() {
		this.fixedLighting = function(args, strip){
			console.log("Starting fixed Color");
			strip.Mode = name + "fixed";
			this.continuousPulse(args, strip);
	
		    
		};
		
		this.continuousPulse = function(args, strip){
			FixedColor1 = parseInt("0x" + args.Color1);
			Brightness = parseInt(args.Brightness);

			var _this = this;
			//strip.SetStripColor(FixedColor1);
			//strip.SetBrightness(Brightness);

			for (var i = 0; i < strip.NUM_LEDS; i++) {
				strip.Lights[i] = FixedColor1;
			}

			strip.Render();

			setTimeout(function () {
				if (strip.Mode == name + "fixed") {
					_this.fixedLighting(args, strip);
				} else {
					strip.Stop();
					New = false;
				}
			}, 1000);
			
			
		}
	}

module.exports = new fixed();



	
