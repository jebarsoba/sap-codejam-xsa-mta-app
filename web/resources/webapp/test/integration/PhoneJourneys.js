jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"web/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"web/test/integration/pages/App",
	"web/test/integration/pages/Browser",
	"web/test/integration/pages/Master",
	"web/test/integration/pages/Detail",
	"web/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "web.view."
	});

	sap.ui.require([
		"web/test/integration/NavigationJourneyPhone",
		"web/test/integration/NotFoundJourneyPhone",
		"web/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});