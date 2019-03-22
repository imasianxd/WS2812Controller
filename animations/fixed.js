/*******************************
	fixed animations
*******************************/
    var common = require("./common.js");

function fixed() {
		
    var name = "fixed.js";
    var RainbowOffset = 0;
    var refreshInterval = 1000;

	
	
    this.fixedLighting = function(args, strip){
		strip.Mode = name + "fixed";
        console.log("Going fixed mode.");
		refresh();
    };
	
	this.refresh = function(args,strip){
		var _this = this;

		FixedColor1 = parseInt("0x" + args.Color1);
		Brightness = parseInt(args.Brightness);

		strip.SetStripColor(FixedColor1);
		strip.SetBrightness(Brightness);
        
        strip.Render();

        setTimeout(function () {
            if (strip.Mode == name + "fixed") {
                _this.fixedLighting(args, strip);
            } else {
                strip.Stop();
            }
        }, refreshInterval);
	}

}

module.exports = new fixed();