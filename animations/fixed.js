/*******************************
	fixed animations
*******************************/
    var common = require("./common.js");

function fixed() {
		
    var name = "fixed.js";
    var RainbowOffset = 0;
    var RainbowSpeed = 1000 / 30;

    this.fixedLighting = function(args, strip){
        strip.Mode = name + "fixed";
        console.log("Going fixed mode.");

        var _this = this;
        for (var i = 0; i < strip.NUM_LEDS; i++) {
            strip.Lights[i] = parseInt("0x" + args.Color1); //.colorwheel((RainbowOffset + i) % 256);
        }

        RainbowOffset = (RainbowOffset + 1) % 256;
        
        strip.Render();

        setTimeout(function () {
            if (strip.Mode == name + "rainbow") {
                _this.RainbowTick(args, strip);
            } else {
                RainbowOffset = 0;
            }
        }, RainbowSpeed);
    };

}

module.exports = new fixed();