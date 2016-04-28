﻿/*
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

module powerbitests.customVisuals.sampleDataViews {
    import DataViewMetadata = powerbi.DataViewMetadata;
    import DataView = powerbi.DataView;
    import ValueType = powerbi.ValueType;
    import DataViewTransform = powerbi.data.DataViewTransform;
    import SQExprBuilder = powerbi.data.SQExprBuilder;

    export class ValuesByCountriesData {

        public getDataView(): DataView {
            let sourceData: string[] = [
                "Brazil", "Brazil", "Brazil", "Brazil", "Canada", "Canada",
                "Canada", "Mexico", "Mexico", "Mexico", "Mexico", "USA",
                "USA", "USA", "USA", "Portugal", "Portugal", "Portugal"
            ];

            let destinationData: string[] = [
                "Portugal", "France", "Spain", "England", "Portugal", "France",
                "England", "Portugal", "France", "Spain", "England", "Portugal",
                "France", "Spain", "England", "Angola", "Senegal", "Morocco"
            ];

            let sampleData: number[] = [
                5, 1, 1, 1, 1, 5, 1, 1, 1,
                5, 1, 1, 1, 1, 5, 2, 1, 1
            ];

            let dataViewMetadata: DataViewMetadata = {
                columns: [
                    {
                        displayName: "Source",
                        queryName: "Sankey.Source",
                        type: ValueType.fromDescriptor({ text: true })
                    },
                    {
                        displayName: "Destination",
                        queryName: "Sankey.Destination",
                        type: ValueType.fromDescriptor({ text: true })
                    },
                    {
                        displayName: "Value",
                        queryName: "Sum(Sankey.Value)"
                    }]
            };

            let sourceDataFieldExpr = SQExprBuilder.fieldExpr({ column: { schema: "s", entity: "table", name: "sourceData" } });
            let destinationDataFieldExpr = SQExprBuilder.fieldExpr({ column: { schema: "s", entity: "table", name: "destinationData" } });
            let identities: powerbi.DataViewScopeIdentity[] = [];
            for(let i = 0, length = Math.min(sourceData.length, destinationData.length); i< length; i++) {
                let identity = powerbi.data.createDataViewScopeIdentity(
                    SQExprBuilder.and(
                        SQExprBuilder.equal(sourceDataFieldExpr, SQExprBuilder.text(sourceData[i])),
                        SQExprBuilder.equal(destinationDataFieldExpr, SQExprBuilder.text(destinationData[i]))));

                identities.push(identity);
            }

            return {
                metadata: dataViewMetadata,
                categorical: {
                    categories: [
                        {
                            source: dataViewMetadata.columns[0],
                            values: sourceData,
                            identity: identities
                        },
                        {
                            source: dataViewMetadata.columns[1],
                            values: destinationData,
                            identity: identities
                        }],
                    values: DataViewTransform.createValueColumns([
                        {
                            source: dataViewMetadata.columns[2],
                            values: sampleData
                        }
                    ])
                }
            };
        }
    }
}
