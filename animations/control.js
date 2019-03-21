/*******************************
	animation control
*******************************/
	var common = require("./common.js");
	var name = "control.js";

	function control() {

		this.Stop = function(args, strip) {
			strip.Mode = "STOP";
			console.log("Stopped strip");
		};
	}

module.exports = new control();