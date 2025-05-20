sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("sapui5traex1.controller.View1", {
        onInit() {
        },
    onClearForm: function(){
        var oView = this.getView();

        oView.byId("in_Name").setValue("");
        oView.byId("In_Street").setValue("");
        oView.byId("In_Num").setValue("");
        oView.byId("In_ZipCode").setValue("");
        oView.byId("In_City").setValue("");
        oView.byID("in_Name").setValue("");
        
        oView.byId("combo_Country").setSelectedKey(null);
    }
    });
});