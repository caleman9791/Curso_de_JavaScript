	try {

	  navigator.getBattery().then((battery) => {
	    function updateAllBatteryInfo() {
	      updateChargeInfo();
	      updateLevelInfo();
	      updateChargingInfo();
	      updateDischargingInfo();
	    }
	    updateAllBatteryInfo();

	    battery.addEventListener("chargingchange", () => {
	      updateChargeInfo();
	    });

	    function updateChargeInfo() {
	      document.querySelector(".battery_charging").textContent = " " + `${battery.charging ? "Yes" : "No"}`;
	      console.log(`Battery charging: ${battery.charging ? "Yes" : "No"}`);
	    }

	    battery.addEventListener("levelchange", () => {
	      updateLevelInfo();
	    });

	    function updateLevelInfo() {
	      document.querySelector(".battery_level").textContent = " " + `${battery.level * 100}%`;
	      console.log(`Battery level: ${battery.level * 100}%`);
	    }

	    battery.addEventListener("chargingtimechange", () => {
	      updateChargingInfo();
	    });

	    function updateChargingInfo() {
	      document.querySelector(".battery_charging_time").textContent = " " + `${battery.chargingTime} seconds`;
	      console.log(`Battery charging time: ${battery.chargingTime} seconds`);
	    }

	    battery.addEventListener("dischargingtimechange", () => {
	      updateDischargingInfo();
	    });

	    function updateDischargingInfo() {
	      document.querySelector(".battery_discharging_time").textContent = " " + `${battery.dischargingTime} seconds`;
	      console.log(`Battery discharging time: ${battery.dischargingTime} seconds`);
	    }
	  });

	  document.getElementById("demo").textContent = "Su navegador puede detectar el  estado de la bateria ";

	} catch (e) {

	  document.getElementById("demo").textContent = "Debes usar Chrome, Edge, Opera, Chrome Android, Opera Android, Samsung Internet o WebView Android";
	}