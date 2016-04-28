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
    import SQExprBuilder = powerbi.data.SQExprBuilder;
    import DataView = powerbi.DataView;
    import DataViewMetadata = powerbi.DataViewMetadata;
    import ValueType = powerbi.ValueType;
    import DataViewTransform = powerbi.data.DataViewTransform;
    import DataViewValueColumns = powerbi.DataViewValueColumns;
    import DataViewValueColumn = powerbi.DataViewValueColumn;
    import DataViewMetadataColumn = powerbi.DataViewMetadataColumn;

    export class ProductSalesByDateData {

        private static seriesCount = 4;
        private static valuesCount = 50;

        private sampleData: number[][];
        private dates: Date[];

        constructor() {
            this.sampleData = this.generateData(ProductSalesByDateData.seriesCount, ProductSalesByDateData.valuesCount);
            this.dates = helpers.generateDates(ProductSalesByDateData.valuesCount, new Date(2014,0,1), new Date(2015,5,10));
        }

        public getDataView(): DataView {
            let dataViewMetadata: DataViewMetadata = {
                columns: this.generateColumnMetadata(ProductSalesByDateData.seriesCount)
            };

            let columns = this.generateColumns(dataViewMetadata, ProductSalesByDateData.seriesCount);
            let categoryValues = this.dates;

            let dataValues: DataViewValueColumns = DataViewTransform.createValueColumns(columns);
            let fieldExpr = SQExprBuilder.fieldExpr({ column: { schema: 's', entity: "table1", name: "date" }});
            let categoryIdentities = categoryValues.map((value) =>
                powerbi.data.createDataViewScopeIdentity(SQExprBuilder.equal(fieldExpr, SQExprBuilder.dateTime(value))));

            let tableDataValues = helpers.getTableDataValues(categoryValues, columns);

            return {
                metadata: dataViewMetadata,
                categorical: {
                    categories: [{
                        source: dataViewMetadata.columns[0],
                        values: categoryValues,
                        identity: categoryIdentities,
                    }],
                    values: dataValues
                },
                table: {
                    rows: tableDataValues,
                    columns: dataViewMetadata.columns,
                },
                single: { value: Array.prototype.concat.apply([], this.sampleData) }
            };
        };

        private generateColumns(dataViewMetadata: DataViewMetadata, count: number): DataViewValueColumn[] {
            let columns: DataViewValueColumn[] = [];
            for(let i=0; i<count; i++){
                columns.push({
                    source: dataViewMetadata.columns[i+1],
                    // Sales Amount for 2014
                    values: this.sampleData[i],
                });
            }

            return columns;
        }

        private generateColumnMetadata(n: number): DataViewMetadataColumn[] {
            let columns: DataViewMetadataColumn[] = [{
                        displayName: 'Date',
                        queryName: 'Date',
                        type: ValueType.fromDescriptor({ dateTime: true })
                    }];

            for(let i = 0;i < n; i++) {
                columns.push({
                        displayName: 'Product '+(i+1),
                        isMeasure: true,
                        format: "$0,000.00",
                        queryName: 'sales'+i,
                        groupName: 'Product ' +(i+1),
                        type: ValueType.fromDescriptor({ numeric: true }),
                    });
            }

            return columns;
        }

        private generateData(seriesCount: number, valuesCount: number): number[][] {
            let data: number[][] = [];
            for(let i=0; i<seriesCount; i++) {
                data.push(helpers.generateNumbers(valuesCount));
            }

            return data;
        }
    }
}
