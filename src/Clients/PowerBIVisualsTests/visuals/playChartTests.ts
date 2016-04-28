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

module powerbitests {

    import ValueType = powerbi.ValueType;
    import PrimitiveType = powerbi.PrimitiveType;
    import DataViewMetadataColumn = powerbi.DataViewMetadataColumn;
    import DataViewMatrix = powerbi.DataViewMatrix;
    import PlayChart = powerbi.visuals.PlayChart;
    import ScatterChart = powerbi.visuals.ScatterChart;
    import SQExpr = powerbi.data.SQExpr;
    import SQExprBuilder = powerbi.data.SQExprBuilder;

    powerbitests.mocks.setLocale();

    ///////////////////
    // Matrix DataViews
    ///////////////////

    // data types
    let dataTypeNumber = ValueType.fromPrimitiveTypeAndCategory(PrimitiveType.Double);
    let dataTypeString = ValueType.fromPrimitiveTypeAndCategory(PrimitiveType.Text);

    // DataViewMetadataColumns
    let playSource: DataViewMetadataColumn = { displayName: "Month", queryName: "Month1", type: dataTypeString, index: 0, roles: { 'Play': true } };
    let categorySource1: DataViewMetadataColumn = { displayName: "RowGroup2", queryName: "RowGroup2", type: dataTypeString, index: 1, roles: { 'Category': true } };
    let seriesSource: DataViewMetadataColumn = { displayName: "ColGroup1", queryName: "ColGroup1", type: dataTypeString, index: 2, roles: { 'Series': true } };
    let measureSource1: DataViewMetadataColumn = { displayName: "Measure1", queryName: "Measure1", type: dataTypeNumber, isMeasure: true, index: 3, roles: { 'X': true } };
    let measureSource2: DataViewMetadataColumn = { displayName: "Measure2", queryName: "Measure2", type: dataTypeNumber, isMeasure: true, index: 4, roles: { 'Y': true } };
    let measureSource3: DataViewMetadataColumn = { displayName: "Measure3", queryName: "Measure3", type: dataTypeNumber, isMeasure: true, index: 5, roles: { 'Size': true } };
    let categorySource2: DataViewMetadataColumn = { displayName: "RowGroup3", queryName: "RowGroup3", type: dataTypeString, index: 6, roles: { 'Category': true } };

    let metadataIdentityFields = {
        play: SQExprBuilder.fieldDef({ schema: 's', entity: "Details", column: "DateMonth" }),

        category1: SQExprBuilder.fieldDef({ schema: 's', entity: "Categories", column: "categorySource1" }),
        category2: SQExprBuilder.fieldDef({ schema: 's', entity: "Categories", column: "categorySource2" }),
    };

    let metadataIdentities = {
        play: {
            Jan: mocks.dataViewScopeIdentityWithEquality(metadataIdentityFields.play, 'Jan'),
            Feb: mocks.dataViewScopeIdentityWithEquality(metadataIdentityFields.play, 'Feb'),
        },
        category1: {
            USA: mocks.dataViewScopeIdentityWithEquality(metadataIdentityFields.category1, 'USA'),
            Canada: mocks.dataViewScopeIdentityWithEquality(metadataIdentityFields.category1, 'Canada'),
        },
        category2: {
            OR: mocks.dataViewScopeIdentityWithEquality(metadataIdentityFields.category2, 'OR'),
            WA: mocks.dataViewScopeIdentityWithEquality(metadataIdentityFields.category2, 'WA'),
            AB: mocks.dataViewScopeIdentityWithEquality(metadataIdentityFields.category2, 'AB'),
            BC: mocks.dataViewScopeIdentityWithEquality(metadataIdentityFields.category2, 'BC'),
        },
    };

    //          | MeasureX | MeasureY | MeasureZ + MeasureX | MeasureY | MeasureZ |
    // |+++++++ +--------------------------------+--------------------------------+
    // | Jan    |      100 |      200 |      300 +      50 |     75   |     100   |
    // |------- |--------------------------------+--------------------------------|
    // | Feb    |      400 |      500 |      600 +     125 |     150  |    175    |
    // |------- |--------------------------------+--------------------------------|
    let matrixPlay: DataViewMatrix = {
        rows: {
            root: {
                children: [{
                    level: 0,
                    values: {
                        0: { value: 100 },
                        1: { value: 200, valueSourceIndex: 1 },
                        2: { value: 300, valueSourceIndex: 2 },
                        3: { value: 50 },
                        4: { value: 75, valueSourceIndex: 1 },
                        5: { value: 100, valueSourceIndex: 2 },
                    },
                    value: 'Jan',
                }, {
                        level: 0,
                        values: {
                            0: { value: 400 },
                            1: { value: 500, valueSourceIndex: 1 },
                            2: { value: 600, valueSourceIndex: 2 },
                            3: { value: 125 },
                            4: { value: 150, valueSourceIndex: 1 },
                            5: { value: 175, valueSourceIndex: 2 },
                        },
                        value: 'Feb',
                    }]
            },
            levels: [{ sources: [playSource] }]
        },
        columns: {
            root: {
                children: [
                    {
                        level: 0,
                    }, {
                        level: 0,
                        levelSourceIndex: 1
                    }, {
                        level: 0,
                        levelSourceIndex: 2
                    }
                ]
            },
            levels: [
                {
                    sources: [measureSource1, measureSource2, measureSource3]
                }
            ]
        },
        valueSources: [measureSource1, measureSource2, measureSource3]
    };
    let matrixPlayDataView: powerbi.DataView = {
        metadata: { columns: [playSource, measureSource1, measureSource2, measureSource3] },
        matrix: matrixPlay
    };

    //          | -----------------------------------------------------------------
    //          |             Series1            |             Series2            |
    //          |--------------------------------|--------------------------------|
    //          | MeasureX | MeasureY | MeasureZ | MeasureX | MeasureY | MeasureZ |
    // |+++++++ +--------------------------------+--------------------------------+
    // | Jan    |      100 |      200 |      300 |      50 |     75   |     100   |
    // |------- |--------------------------------+--------------------------------|
    // | Feb    |      400 |      500 |      600 |     125 |     150  |    175    |
    // |------- |--------------------------------+--------------------------------|
    let matrixSeriesAndPlay: DataViewMatrix = {
        rows: {
            root: {
                children: [{
                            value: 'Jan',
                            level: 0,
                            values: {
                                0: { value: 100 },
                                1: { value: 200, valueSourceIndex: 1 },
                                2: { value: 300, valueSourceIndex: 2 },
                                3: { value: 50 },
                                4: { value: 75, valueSourceIndex: 1 },
                                5: { value: 100, valueSourceIndex: 2 },
                            },
                        }, {
                            value: 'Feb',
                            level: 0,
                            values: {
                                0: { value: 400 },
                                1: { value: 500, valueSourceIndex: 1 },
                                2: { value: 600, valueSourceIndex: 2 },
                                3: { value: 125 },
                                4: { value: 150, valueSourceIndex: 1 },
                                5: { value: 175, valueSourceIndex: 2 },
                            },
                        }]
            },
            levels: [{ sources: [playSource] }]
        },
        columns: {
            root: {
                children: [
                    {
                        level: 0,
                        value: "Series1",
                        children: [
                            { level: 1 },
                            { level: 1, levelSourceIndex: 1 },
                            { level: 1, levelSourceIndex: 2 }
                        ]
                    },
                    {
                        level: 0,
                        value: "Series2",
                        children: [
                            { level: 1 },
                            { level: 1, levelSourceIndex: 1 },
                            { level: 1, levelSourceIndex: 2 }
                        ]
                    }
                ]
            },
            levels: [
                { sources: [seriesSource] },
                { sources: [measureSource1, measureSource2, measureSource3] }
            ]
        },
        valueSources: [measureSource1, measureSource2, measureSource3]
    };
    let matrixSeriesAndPlayDataView: powerbi.DataView = {
        metadata: { columns: [seriesSource, playSource, measureSource1, measureSource2, measureSource3] },
        matrix: matrixSeriesAndPlay
    };

    //                   | MeasureX | MeasureY | MeasureZ |
    // |+++++++|++++++++++---------------------------------
    // | Jan   | XBOX    |      100 |      200 |      300 |
    // |       | Azure   |      550 |      155 |      51  |
    // |       | Office  |      330 |      133 |      31  |
    // |-------|---------+---------------------------------
    // | Feb   | XBOX    |       40 |       50 |       60 |
    // |       | Azure   |      770 |      177 |       71 |
    // |       | Office  |      440 |      144 |       41 |
    // |--------------------------------------------------|
    let matrixCategoryAndPlay: DataViewMatrix = {
        rows: {
            root: {
                children: [{
                    level: 0,
                    value: 'Jan',
                    children: [
                        {
                            level: 1,
                            values: {
                                0: { value: 100 },
                                1: { value: 200, valueSourceIndex: 1 },
                                2: { value: 300, valueSourceIndex: 2 },
                            },
                            value: 'XBOX'
                        }, {
                            level: 1,
                            values: {
                                0: { value: 550 },
                                1: { value: 155, valueSourceIndex: 1 },
                                2: { value: 51, valueSourceIndex: 2 },
                            },
                            value: 'Azure'
                        }, {
                            level: 1,
                            values: {
                                0: { value: 330 },
                                1: { value: 133, valueSourceIndex: 1 },
                                2: { value: 31, valueSourceIndex: 2 },
                            },
                            value: 'Office'
                        }]
                },
                    {
                        level: 0,
                        value: 'Feb',
                        children: [
                            {
                                level: 1,
                                values: {
                                    0: { value: 40 },
                                    1: { value: 50, valueSourceIndex: 1 },
                                    2: { value: 60, valueSourceIndex: 2 },
                                },
                                value: 'XBOX'
                            }, {
                                level: 1,
                                values: {
                                    0: { value: 770 },
                                    1: { value: 177, valueSourceIndex: 1 },
                                    2: { value: 71, valueSourceIndex: 2 },
                                },
                                value: 'Azure'
                            }, {
                                level: 1,
                                values: {
                                    0: { value: 440 },
                                    1: { value: 144, valueSourceIndex: 1 },
                                    2: { value: 41, valueSourceIndex: 2 },
                                },
                                value: 'Office'
                            }]
                    }]
            },
            levels: [{ sources: [playSource] }, { sources: [categorySource1] }]
        },
        columns: {
            root: {
                children: [
                    { level: 0 },
                    { level: 0, levelSourceIndex: 1 },
                    { level: 0, levelSourceIndex: 2 }
                ]
            },
            levels: [
                {
                    sources: [measureSource1, measureSource2, measureSource3]
                }
            ]
        },
        valueSources: [measureSource1, measureSource2, measureSource3]
    };
    let matrixCategoryAndPlayDataView: powerbi.DataView = {
        metadata: { columns: [categorySource1, playSource, measureSource1, measureSource2, measureSource3] },
        matrix: matrixCategoryAndPlay
    };

    //                   | -----------------------------------------------------------------
    //                   |             Series1            |             Series2            |
    //                   |--------------------------------|--------------------------------|
    //                   | MeasureX | MeasureY | MeasureZ | MeasureX | MeasureY | MeasureZ |
    // |+++++++|++++++++++------------------------------------------------------------------
    // | Jan   | XBOX    |      100 |      200 |      300 |      105 |      205 |      305 |
    // |       | Azure   |      440 |      144 |       41 |      555 |      155 |       55 |
    // |       | Office  |      330 |      133 |       31 |      335 |      135 |       35 |
    // |-------|---------+------------------------------------------------------------------
    // | Feb   | XBOX    |       40 |       50 |       60 |       45 |       55 |       65 |
    // |       | Azure   |      770 |      177 |       71 |      775 |      175 |       75 |
    // |       | Office  |      440 |      144 |       41 |      445 |      145 |       45 |
    // |--------------------------------------------------|--------------------------------|
    let matrixSeriesAndCategoryAndPlay: DataViewMatrix = {
        rows: {
            root: {
                children: [{
                    level: 0,
                    value: 'Jan',
                    children: [
                        {
                            level: 1,
                            values: {
                                0: { value: 100 },
                                1: { value: 200, valueSourceIndex: 1 },
                                2: { value: 300, valueSourceIndex: 2 },
                                3: { value: 105 },
                                4: { value: 205, valueSourceIndex: 1 },
                                5: { value: 305, valueSourceIndex: 2 },
                            },
                            value: 'XBOX'
                        }, {
                            level: 1,
                            values: {
                                0: { value: 440 },
                                1: { value: 144, valueSourceIndex: 1 },
                                2: { value: 41, valueSourceIndex: 2 },
                                3: { value: 555 },
                                4: { value: 155, valueSourceIndex: 1 },
                                5: { value: 55, valueSourceIndex: 2 },
                            },
                            value: 'Azure'
                        }, {
                            level: 1,
                            values: {
                                0: { value: 330 },
                                1: { value: 133, valueSourceIndex: 1 },
                                2: { value: 31, valueSourceIndex: 2 },
                                3: { value: 335 },
                                4: { value: 135, valueSourceIndex: 1 },
                                5: { value: 35, valueSourceIndex: 2 },
                            },
                            value: 'Office'
                        }]
                },
                    {
                        level: 0,
                        value: 'Feb',
                        children: [
                            {
                                level: 1,
                                values: {
                                    0: { value: 40 },
                                    1: { value: 50, valueSourceIndex: 1 },
                                    2: { value: 60, valueSourceIndex: 2 },
                                    3: { value: 45 },
                                    4: { value: 55, valueSourceIndex: 1 },
                                    5: { value: 65, valueSourceIndex: 2 },
                                },
                                value: 'XBOX'
                            }, {
                                level: 1,
                                values: {
                                    0: { value: 770 },
                                    1: { value: 177, valueSourceIndex: 1 },
                                    2: { value: 71, valueSourceIndex: 2 },
                                    3: { value: 775 },
                                    4: { value: 175, valueSourceIndex: 1 },
                                    5: { value: 75, valueSourceIndex: 2 },
                                },
                                value: 'Azure'
                            }, {
                                level: 1,
                                values: {
                                    0: { value: 440 },
                                    1: { value: 144, valueSourceIndex: 1 },
                                    2: { value: 41, valueSourceIndex: 2 },
                                    3: { value: 445 },
                                    4: { value: 145, valueSourceIndex: 1 },
                                    5: { value: 45, valueSourceIndex: 2 },
                                },
                                value: 'Office'
                            }]
                    }]
            },
            levels: [{ sources: [playSource] }, { sources: [categorySource1] }]
        },
        columns: {
            root: {
                children: [
                    {
                        level: 0,
                        value: "Series1",
                        children: [
                            { level: 1 },
                            { level: 1, levelSourceIndex: 1 },
                            { level: 1, levelSourceIndex: 2 }
                        ]
                    },
                    {
                        level: 0,
                        value: "Series2",
                        children: [
                            { level: 1 },
                            { level: 1, levelSourceIndex: 1 },
                            { level: 1, levelSourceIndex: 2 }
                        ]
                    }
                ]
            },
            levels: [
                { sources: [seriesSource] },
                { sources: [measureSource1, measureSource2, measureSource3] }
            ]
        },
        valueSources: [measureSource1, measureSource2, measureSource3]
    };
    let matrixSeriesAndCategoryAndPlayDataView: powerbi.DataView = {
        metadata: { columns: [categorySource1, seriesSource, playSource, measureSource1, measureSource2, measureSource3] },
        matrix: matrixSeriesAndCategoryAndPlay
    };

    // Related to VSTS 6986788: This matrix is what we get when we have feature switch "allowDrillGrouping" 
    // turned on and a PlayChart with hierarchy on Details, and the user drills down (e.g. from Country to Region).
    // 
    // Related to VSTS 6885783: All Category columns in the row hierarchy should get concatenated into one column in the resulting Categorical.
    //
    //         | Country | Region   | MeasureX | MeasureY | MeasureZ |
    // |+++++++|+++++++++++++++++++++---------------------------------
    // | Jan   | USA     |       OR |      100 |      200 |      300 |
    // |       |         |       WA |      550 |      155 |      51  |
    // |       | Canada  |       AB |      330 |      133 |      31  |
    // |       |         |       BC |      335 |      135 |      35  |
    // |-------|---------+--------------------------------------------
    // | Feb   | USA     |       OR |       40 |       50 |       60 |
    // |       |         |       WA |      770 |      177 |       71 |
    // |       | Canada  |       AB |      440 |      144 |       41 |
    // |       |         |       BC |      445 |      145 |       45 |
    // |-------------------------------------------------------------|
    let matrixGroupDrilldownCategoryAndPlay: DataViewMatrix = {
        rows: {
            root: {
                childIdentityFields: [metadataIdentityFields.play],
                children: [
                {
                    level: 0,
                    value: 'Jan',
                    identity: metadataIdentities.play.Jan,
                    childIdentityFields: [metadataIdentityFields.category1],
                    children: [
                        {
                            level: 1,
                            value: 'USA',
                            identity: metadataIdentities.category1.USA,
                            childIdentityFields: [metadataIdentityFields.category2],
                            children: [
                                {
                                    level: 2,
                                    value: 'OR',
                                    identity: metadataIdentities.category2.OR,
                                    values: {
                                        0: { value: 100 },
                                        1: { value: 200, valueSourceIndex: 1 },
                                        2: { value: 300, valueSourceIndex: 2 },
                                    }
                                }, {
                                    level: 2,
                                    value: 'WA',
                                    identity: metadataIdentities.category2.WA,
                                    values: {
                                        0: { value: 550 },
                                        1: { value: 155, valueSourceIndex: 1 },
                                        2: { value: 51, valueSourceIndex: 2 },
                                    }
                                }]
                        }, {
                            level: 1,
                            value: 'Canada',
                            identity: metadataIdentities.category1.Canada,
                            childIdentityFields: [metadataIdentityFields.category2],
                            children: [
                                {
                                    level: 2,
                                    value: 'AB',
                                    identity: metadataIdentities.category2.AB,
                                    values: {
                                        0: { value: 330 },
                                        1: { value: 133, valueSourceIndex: 1 },
                                        2: { value: 31, valueSourceIndex: 2 },
                                    }
                                }, {
                                    level: 2,
                                    value: 'BC',
                                    identity: metadataIdentities.category2.BC,
                                    values: {
                                        0: { value: 335 },
                                        1: { value: 135, valueSourceIndex: 1 },
                                        2: { value: 35, valueSourceIndex: 2 },
                                    }
                                }]
                        }]
                },
                {
                    level: 0,
                    value: 'Feb',
                    identity: metadataIdentities.play.Feb,
                    childIdentityFields: [metadataIdentityFields.category1],
                    children: [
                        {
                            level: 1,
                            value: 'USA',
                            identity: metadataIdentities.category1.USA,
                            childIdentityFields: [metadataIdentityFields.category2],
                            children: [
                                {
                                    level: 2,
                                    value: 'OR',
                                    identity: metadataIdentities.category2.OR,
                                    values: {
                                        0: { value: 40 },
                                        1: { value: 50, valueSourceIndex: 1 },
                                        2: { value: 60, valueSourceIndex: 2 },
                                    }
                                }, {
                                    level: 2,
                                    value: 'WA',
                                    identity: metadataIdentities.category2.WA,
                                    values: {
                                        0: { value: 770 },
                                        1: { value: 177, valueSourceIndex: 1 },
                                        2: { value: 71, valueSourceIndex: 2 },
                                    }
                                }]
                        }, {
                            level: 1,
                            value: 'Canada',
                            identity: metadataIdentities.category1.Canada,
                            childIdentityFields: [metadataIdentityFields.category2],
                            children: [
                                {
                                    level: 2,
                                    value: 'AB',
                                    identity: metadataIdentities.category2.AB,
                                    values: {
                                        0: { value: 440 },
                                        1: { value: 144, valueSourceIndex: 1 },
                                        2: { value: 41, valueSourceIndex: 2 },
                                    }
                                }, {
                                    level: 2,
                                    value: 'BC',
                                    identity: metadataIdentities.category2.BC,
                                    values: {
                                        0: { value: 445 },
                                        1: { value: 145, valueSourceIndex: 1 },
                                        2: { value: 45, valueSourceIndex: 2 },
                                    }
                                }]
                        }]
                }]
            },
            levels: [{ sources: [playSource] }, { sources: [categorySource1] }, { sources: [categorySource2] }]
        },
        columns: {
            root: {
                children: [
                    { level: 0 },
                    { level: 0, levelSourceIndex: 1 },
                    { level: 0, levelSourceIndex: 2 }
                ]
            },
            levels: [
                {
                    sources: [measureSource1, measureSource2, measureSource3]
                }
            ]
        },
        valueSources: [measureSource1, measureSource2, measureSource3]
    };
    let matrixGroupDrilldownCategoryAndPlayDataView: powerbi.DataView = {
        metadata: { columns: [playSource, categorySource1, categorySource2, measureSource1, measureSource2, measureSource3] },
        matrix: matrixGroupDrilldownCategoryAndPlay
    };

    describe("PlayChart", () => {
        it("convertMatrixToCategorical - Play", () => {
            let categoricalA = PlayChart.convertMatrixToCategorical(matrixPlayDataView, 0);
            let categoricalB = PlayChart.convertMatrixToCategorical(matrixPlayDataView, 1);

            expect(categoricalA.categorical.categories.length).toBe(0);
            expect(categoricalB.categorical.categories.length).toBe(0);
            expect(categoricalA.categorical.values.length).toBe(0);
            expect(categoricalB.categorical.values.length).toBe(0);
        });

        it("convertMatrixToCategorical - Series and Play", () => {
            let categoricalA = PlayChart.convertMatrixToCategorical(matrixSeriesAndPlayDataView, 0);
            let categoricalB = PlayChart.convertMatrixToCategorical(matrixSeriesAndPlayDataView, 1);

            expect(categoricalA.categorical.categories).toBeUndefined();
            expect(categoricalB.categorical.categories).toBeUndefined();
            expect(categoricalA.categorical.values.length).toBe(6);
            expect(categoricalB.categorical.values.length).toBe(6);
            for (let values of categoricalA.categorical.values) {
                expect(values.values.length).toBe(1);
            }
            for (let values of categoricalB.categorical.values) {
                expect(values.values.length).toBe(1);
            }
        });

        it("convertMatrixToCategorical - Category and Play", () => {
            let categoricalA = PlayChart.convertMatrixToCategorical(matrixCategoryAndPlayDataView, 0);
            let categoricalB = PlayChart.convertMatrixToCategorical(matrixCategoryAndPlayDataView, 1);

            expect(categoricalA.categorical.categories.length).toBe(1);
            expect(categoricalB.categorical.categories.length).toBe(1);
            expect(categoricalA.categorical.categories[0].values.length).toBe(3);
            expect(categoricalB.categorical.categories[0].values.length).toBe(3);
            expect(categoricalA.categorical.values.length).toBe(3);
            expect(categoricalB.categorical.values.length).toBe(3);
            for (let values of categoricalA.categorical.values) {
                expect(values.values.length).toBe(3);
            }
            for (let values of categoricalB.categorical.values) {
                expect(values.values.length).toBe(3);
            }
        });

        it("convertMatrixToCategorical - Series and Category and Play", () => {
            let categoricalA = PlayChart.convertMatrixToCategorical(matrixSeriesAndCategoryAndPlayDataView, 0);
            let categoricalB = PlayChart.convertMatrixToCategorical(matrixSeriesAndCategoryAndPlayDataView, 1);

            expect(categoricalA.categorical.categories.length).toBe(1);
            expect(categoricalB.categorical.categories.length).toBe(1);
            expect(categoricalA.categorical.categories[0].values.length).toBe(3);
            expect(categoricalB.categorical.categories[0].values.length).toBe(3);
            expect(categoricalA.categorical.values.length).toBe(6);
            expect(categoricalB.categorical.values.length).toBe(6);
            for (let values of categoricalA.categorical.values) {
                expect(values.values.length).toBe(3);
            }
            for (let values of categoricalB.categorical.values) {
                expect(values.values.length).toBe(3);
            }
        });

        it("convertMatrixToCategorical - group drilldown on Category, and Play", () => {
            let categoricalA = PlayChart.convertMatrixToCategorical(matrixGroupDrilldownCategoryAndPlayDataView, 0);
            let categoricalB = PlayChart.convertMatrixToCategorical(matrixGroupDrilldownCategoryAndPlayDataView, 1);

            // assert categoricalA.categorical.categories...
            expect(categoricalA.categorical.categories.length).toBe(1);
            expect(categoricalA.categorical.categories[0].source.queryName).toBe('RowGroup3');
            expect(categoricalA.categorical.categories[0].values).toEqual(['OR USA', 'WA USA', 'AB Canada', 'BC Canada']);
            
            let expectedCategoryIdentitiesSQExpr: SQExpr[] = [
                SQExprBuilder.and(<SQExpr>metadataIdentities.category1.USA.expr, <SQExpr>metadataIdentities.category2.OR.expr),
                SQExprBuilder.and(<SQExpr>metadataIdentities.category1.USA.expr, <SQExpr>metadataIdentities.category2.WA.expr),
                SQExprBuilder.and(<SQExpr>metadataIdentities.category1.Canada.expr, <SQExpr>metadataIdentities.category2.AB.expr),
                SQExprBuilder.and(<SQExpr>metadataIdentities.category1.Canada.expr, <SQExpr>metadataIdentities.category2.BC.expr),
            ];
            expect(categoricalA.categorical.categories[0].identity.length).toEqual(expectedCategoryIdentitiesSQExpr.length);
            
            for (let i = 0, ilen = expectedCategoryIdentitiesSQExpr.length; i < ilen; i++) {
                // Note: this test code is in the Visuals project, thus it cannot use the jasmine matcher toEqualSQExpr() until we move or copy it over
                expect(SQExpr.equals(<SQExpr>categoricalA.categorical.categories[0].identity[i].expr, expectedCategoryIdentitiesSQExpr[i])).toBe(true);
            }

            // If the product code gets updated to populate DataViewCategoryColumn.identityFields,
            // please update the following line with the expected value.
            expect(categoricalA.categorical.categories[0].identityFields).toBeUndefined();

            // assert categoricalA.categorical.values...
            expect(categoricalA.categorical.values.length).toBe(3);
            expect(categoricalA.categorical.values[0].source.queryName).toBe('Measure1');
            expect(categoricalA.categorical.values[1].source.queryName).toBe('Measure2');
            expect(categoricalA.categorical.values[2].source.queryName).toBe('Measure3');
            expect(categoricalA.categorical.values[0].values).toEqual([100, 550, 330, 335]);
            expect(categoricalA.categorical.values[1].values).toEqual([200, 155, 133, 135]);
            expect(categoricalA.categorical.values[2].values).toEqual([300, 51, 31, 35]);
            expect(categoricalB.categorical.values.length).toBe(3);
            expect(categoricalB.categorical.values[0].source.queryName).toBe('Measure1');
            expect(categoricalB.categorical.values[1].source.queryName).toBe('Measure2');
            expect(categoricalB.categorical.values[2].source.queryName).toBe('Measure3');
            expect(categoricalB.categorical.values[0].values).toEqual([40, 770, 440, 445]);
            expect(categoricalB.categorical.values[1].values).toEqual([50, 177, 144, 145]);
            expect(categoricalB.categorical.values[2].values).toEqual([60, 71, 41, 45]);
        });

        // TODO: Two measures (X/Y no size, others... encouncentered while building the visual)
        // TODO: One measure (X or Y or size)
        // TODO: Zero measures, can still play through the frame names
    });

    it('getAdditionalTelemetry with size', () => {
        let telemetry = ScatterChart.getAdditionalTelemetry({
            matrix: matrixCategoryAndPlay,
            metadata: {
                columns: [
                    categorySource1,
                    playSource,
                    measureSource1,
                    measureSource2,
                    measureSource3,
                ]
            }
        });

        expect(telemetry).toEqual({
            hasPlayAxis: true,
            hasSize: true,
        });
    });
}
