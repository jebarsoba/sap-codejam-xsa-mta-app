jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 POHeader in the list
// * All 3 POHeader have at least one POItem

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
		"web/test/integration/MasterJourney",
		"web/test/integration/NavigationJourney",
		"web/test/integration/NotFoundJourney",
		"web/test/integration/BusyJourney",
		"web/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});