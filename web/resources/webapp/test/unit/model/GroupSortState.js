sap.ui.define([
		"web/model/GroupSortState",
		"sap/ui/model/json/JSONModel"
	], function (GroupSortState, JSONModel) {
	"use strict";

	QUnit.module("GroupSortState - grouping and sorting", {
		beforeEach: function () {
			this.oModel = new JSONModel({});
			// System under test
			this.oGroupSortState = new GroupSortState(this.oModel, function() {});
		}
	});

	QUnit.test("Should always return a sorter when sorting", function (assert) {
		// Act + Assert
		assert.strictEqual(this.oGroupSortState.sort("GROSSAMOUNT").length, 1, "The sorting by GROSSAMOUNT returned a sorter");
		assert.strictEqual(this.oGroupSortState.sort("APPROVALSTATUS").length, 1, "The sorting by APPROVALSTATUS returned a sorter");
	});

	QUnit.test("Should return a grouper when grouping", function (assert) {
		// Act + Assert
		assert.strictEqual(this.oGroupSortState.group("GROSSAMOUNT").length, 1, "The group by GROSSAMOUNT returned a sorter");
		assert.strictEqual(this.oGroupSortState.group("None").length, 0, "The sorting by None returned no sorter");
	});


	QUnit.test("Should set the sorting to GROSSAMOUNT if the user groupes by GROSSAMOUNT", function (assert) {
		// Act + Assert
		this.oGroupSortState.group("GROSSAMOUNT");
		assert.strictEqual(this.oModel.getProperty("/sortBy"), "GROSSAMOUNT", "The sorting is the same as the grouping");
	});

	QUnit.test("Should set the grouping to None if the user sorts by APPROVALSTATUS and there was a grouping before", function (assert) {
		// Arrange
		this.oModel.setProperty("/groupBy", "GROSSAMOUNT");

		this.oGroupSortState.sort("APPROVALSTATUS");

		// Assert
		assert.strictEqual(this.oModel.getProperty("/groupBy"), "None", "The grouping got reset");
	});
});