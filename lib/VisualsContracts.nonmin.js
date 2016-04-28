var powerbi;

!function(powerbi) {
    !function(VisualDataRoleKind) {
        VisualDataRoleKind[VisualDataRoleKind.Grouping = 0] = "Grouping", VisualDataRoleKind[VisualDataRoleKind.Measure = 1] = "Measure", 
        VisualDataRoleKind[VisualDataRoleKind.GroupingOrMeasure = 2] = "GroupingOrMeasure";
    }(powerbi.VisualDataRoleKind || (powerbi.VisualDataRoleKind = {}));
    powerbi.VisualDataRoleKind;
    !function(VisualDataChangeOperationKind) {
        VisualDataChangeOperationKind[VisualDataChangeOperationKind.Create = 0] = "Create", 
        VisualDataChangeOperationKind[VisualDataChangeOperationKind.Append = 1] = "Append";
    }(powerbi.VisualDataChangeOperationKind || (powerbi.VisualDataChangeOperationKind = {}));
    powerbi.VisualDataChangeOperationKind;
    !function(VisualUpdateType) {
        VisualUpdateType[VisualUpdateType.Data = 2] = "Data", VisualUpdateType[VisualUpdateType.Resize = 4] = "Resize", 
        VisualUpdateType[VisualUpdateType.ViewMode = 8] = "ViewMode", VisualUpdateType[VisualUpdateType.Style = 16] = "Style", 
        VisualUpdateType[VisualUpdateType.ResizeEnd = 32] = "ResizeEnd";
    }(powerbi.VisualUpdateType || (powerbi.VisualUpdateType = {}));
    powerbi.VisualUpdateType;
    !function(VisualPermissions) {}(powerbi.VisualPermissions || (powerbi.VisualPermissions = {}));
    var visuals;
    powerbi.VisualPermissions;
    !function(visuals) {
        var telemetry;
        !function(telemetry) {
            !function(ErrorSource) {
                ErrorSource[ErrorSource.PowerBI = 0] = "PowerBI", ErrorSource[ErrorSource.External = 1] = "External", 
                ErrorSource[ErrorSource.User = 2] = "User";
            }(telemetry.ErrorSource || (telemetry.ErrorSource = {}));
            telemetry.ErrorSource;
        }(telemetry = visuals.telemetry || (visuals.telemetry = {}));
    }(visuals = powerbi.visuals || (powerbi.visuals = {}));
}(powerbi || (powerbi = {}));