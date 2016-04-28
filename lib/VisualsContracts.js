/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
///<reference path="../../Typedefs/jquery/jquery.d.ts"/> 
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    (function (VisualDataRoleKind) {
        /** Indicates that the role should be bound to something that evaluates to a grouping of values. */
        VisualDataRoleKind[VisualDataRoleKind["Grouping"] = 0] = "Grouping";
        /** Indicates that the role should be bound to something that evaluates to a single value in a scope. */
        VisualDataRoleKind[VisualDataRoleKind["Measure"] = 1] = "Measure";
        /** Indicates that the role can be bound to either Grouping or Measure. */
        VisualDataRoleKind[VisualDataRoleKind["GroupingOrMeasure"] = 2] = "GroupingOrMeasure";
    })(powerbi.VisualDataRoleKind || (powerbi.VisualDataRoleKind = {}));
    var VisualDataRoleKind = powerbi.VisualDataRoleKind;
    (function (VisualDataChangeOperationKind) {
        VisualDataChangeOperationKind[VisualDataChangeOperationKind["Create"] = 0] = "Create";
        VisualDataChangeOperationKind[VisualDataChangeOperationKind["Append"] = 1] = "Append";
    })(powerbi.VisualDataChangeOperationKind || (powerbi.VisualDataChangeOperationKind = {}));
    var VisualDataChangeOperationKind = powerbi.VisualDataChangeOperationKind;
    (function (VisualUpdateType) {
        VisualUpdateType[VisualUpdateType["Data"] = 2] = "Data";
        VisualUpdateType[VisualUpdateType["Resize"] = 4] = "Resize";
        VisualUpdateType[VisualUpdateType["ViewMode"] = 8] = "ViewMode";
        VisualUpdateType[VisualUpdateType["Style"] = 16] = "Style";
        VisualUpdateType[VisualUpdateType["ResizeEnd"] = 32] = "ResizeEnd";
    })(powerbi.VisualUpdateType || (powerbi.VisualUpdateType = {}));
    var VisualUpdateType = powerbi.VisualUpdateType;
    (function (VisualPermissions) {
    })(powerbi.VisualPermissions || (powerbi.VisualPermissions = {}));
    var VisualPermissions = powerbi.VisualPermissions;
    var visuals;
    (function (visuals) {
        var telemetry;
        (function (telemetry) {
            (function (ErrorSource) {
                ErrorSource[ErrorSource["PowerBI"] = 0] = "PowerBI";
                ErrorSource[ErrorSource["External"] = 1] = "External";
                ErrorSource[ErrorSource["User"] = 2] = "User";
            })(telemetry.ErrorSource || (telemetry.ErrorSource = {}));
            var ErrorSource = telemetry.ErrorSource;
        })(telemetry = visuals.telemetry || (visuals.telemetry = {}));
    })(visuals = powerbi.visuals || (powerbi.visuals = {}));
})(powerbi || (powerbi = {}));

//# sourceMappingURL=VisualsContracts.js.map
