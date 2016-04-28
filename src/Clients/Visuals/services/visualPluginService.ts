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

module powerbi.visuals {
    const unsupportedVisuals: string[] = ['play', 'subview', 'smallMultiple'];

    export interface IVisualPluginService {
        getPlugin(type: string): IVisualPlugin;
        getVisuals(): IVisualPlugin[];
        capabilities(type: string): VisualCapabilities;
        removeAnyCustomVisuals(): void;
        requireSandbox(plugin: IVisualPlugin): boolean;
        isCustomVisual(visual: string): boolean;
        // VSTS 6217994 - [R Viz] Remove temporary DataViewAnalysis validation workaround of static R Script Visual mappings
        isScriptVisualQueryable(): boolean;
        shouldDisableVisual(type: string, mapDisabled: boolean): boolean;
        getInteractivityOptions(visualType: string): InteractivityOptions;
    }

    export interface MinervaVisualFeatureSwitches {
        /**
         * This feature switch enables the data-dot & column combo charts.
         */
        dataDotChartEnabled?: boolean;

        /**
         * Visual should prefer to request a higher volume of data.
         */
        preferHigherDataVolume?: boolean;
        
        sandboxVisualsEnabled?: boolean;

        /**
        * R visual is enabled for consumption. 
        * When turned on, R script will be executed against local R (for PBID) or AML (for PBI.com).
        * When turned off, R script will not be executed and the visual is treated as a static image visual.
        */
        scriptVisualEnabled?: boolean;

        /**
        * R visual is enabled for authoring. 
        * When turned on, R visual will appear in the visual gallery.
        */
        scriptVisualAuthoringEnabled?: boolean;

        isLabelInteractivityEnabled?: boolean;

        sunburstVisualEnabled?: boolean;

        filledMapDataLabelsEnabled?: boolean;

        lineChartLabelDensityEnabled?: boolean;
        
        /**
         * Enables button to center map to the current location
         */
        mapCurrentLocationEnabled?: boolean;

        // TODO: VSTS 7167767: Remove temporary code for product demo.
        conditionalFormattingEnabled?: boolean;
    }

    export interface SmallViewPortProperties {
        cartesianSmallViewPortProperties: CartesianSmallViewPortProperties;
        gaugeSmallViewPortProperties: GaugeSmallViewPortProperties;
        funnelSmallViewPortProperties: FunnelSmallViewPortProperties;
        DonutSmallViewPortProperties: DonutSmallViewPortProperties;
    }

    export interface CreateDashboardOptions {
        tooltipsEnabled: boolean;
    }

    export module visualPluginFactory {
        export class VisualPluginService implements IVisualPluginService {
            private plugins: jsCommon.IStringDictionary<IVisualPlugin>;
            protected featureSwitches: MinervaVisualFeatureSwitches;

            public constructor(featureSwitches: MinervaVisualFeatureSwitches) {
                this.plugins = <any>powerbi.visuals.plugins;
                this.featureSwitches = featureSwitches;
            }

            /**
             * Gets metadata for all registered.
             */
            public getVisuals(): IVisualPlugin[] {
                let registry = this.plugins,
                    names: string[] = Object.keys(registry);

                return names.map(name => registry[name]);
            }

            public getPlugin(type: string): IVisualPlugin {
                if (!type) {
                    return;
                }

                let plugin: IVisualPlugin = this.plugins[type];
                if (!plugin) {
                    return;
                }

                return plugin;
            }

            public capabilities(type: string): VisualCapabilities {
                let plugin = this.getPlugin(type);
                if (plugin)
                    return plugin.capabilities;
            }

            public requireSandbox(plugin: IVisualPlugin): boolean {
                return plugin && plugin.custom;
            }

            public removeAnyCustomVisuals() {
                let plugins = powerbi.visuals.plugins;
                for (let key in plugins) {
                    let p: IVisualPlugin = plugins[key];
                    if (p.custom) {
                        delete plugins[key];
                    }
                }
            }

            public isCustomVisual(visual: string): boolean {
                if (visual) {
                    
                    if (this.plugins[visual]) {
                        return this.plugins[visual].custom === true;
                    }
                    else if (_.include(unsupportedVisuals, visual)) {
                        /*use the hardcoded unsupported visual list to distinguish unsupported visual with custom visual when the plugin object is not in memory*/
                        return false;
                    }
                    else {
                        return true;
                    }
                }
                return false;
            }

            public shouldDisableVisual(type: string, mapDisabled: boolean): boolean {
                return (type === plugins.map.name || type === plugins.filledMap.name) && mapDisabled;
            }

            public isScriptVisualQueryable(): boolean {
                // Feature switch determines if Script visuals are query visuals - currently non-query in PBI site
                return (this.featureSwitches !== undefined && this.featureSwitches.scriptVisualEnabled);
            }

            public getInteractivityOptions(visualType: string): InteractivityOptions {
                let interactivityOptions: InteractivityOptions = {
                    overflow: 'hidden',
                };
                return interactivityOptions;
            }
        }

        export function createPlugin(
            visualPlugins: jsCommon.IStringDictionary<IVisualPlugin>,
            base: IVisualPlugin,
            create: IVisualFactoryMethod,
            modifyPluginFn?: (plugin: IVisualPlugin) => void): void {

            let visualPlugin = Prototype.inherit(base);
            visualPlugin.create = create;
            if (modifyPluginFn) {
                modifyPluginFn(visualPlugin);
            }
            visualPlugins[base.name] = visualPlugin;
        }

        function createDashboardPlugins(plugins: jsCommon.IStringDictionary<IVisualPlugin>, options: CreateDashboardOptions, featureSwitches?: MinervaVisualFeatureSwitches) {
            let tooltipsOnDashboard: boolean = options.tooltipsEnabled;
            let lineChartLabelDensityEnabled: boolean = featureSwitches && featureSwitches.lineChartLabelDensityEnabled;

            // Bar Chart
            createPlugin(plugins, powerbi.visuals.plugins.barChart, () => new CartesianChart({
                chartType: CartesianChartType.StackedBar,
                tooltipsEnabled: tooltipsOnDashboard,
            }));
            // Clustered Bar Chart
            createPlugin(plugins, powerbi.visuals.plugins.clusteredBarChart, () => new CartesianChart({
                chartType: CartesianChartType.ClusteredBar,
                tooltipsEnabled: tooltipsOnDashboard,
            }));
            // Clustered Column Chart
            createPlugin(plugins, powerbi.visuals.plugins.clusteredColumnChart, () => new CartesianChart({
                chartType: CartesianChartType.ClusteredColumn,
                tooltipsEnabled: tooltipsOnDashboard,
            }));
            // Column Chart
            createPlugin(plugins, powerbi.visuals.plugins.columnChart, () => new CartesianChart({
                chartType: CartesianChartType.StackedColumn,
                tooltipsEnabled: tooltipsOnDashboard,
            }));
            // Data Dot Clustered Combo Chart
            createPlugin(plugins, powerbi.visuals.plugins.dataDotClusteredColumnComboChart, () => new CartesianChart({
                chartType: CartesianChartType.DataDotClusteredColumnCombo,
                tooltipsEnabled: tooltipsOnDashboard,
            }));
            // Data Dot Stacked Combo Chart
            createPlugin(plugins, powerbi.visuals.plugins.dataDotStackedColumnComboChart, () => new CartesianChart({
                chartType: CartesianChartType.DataDotStackedColumnCombo,
                tooltipsEnabled: tooltipsOnDashboard,
            }));
            // Donut Chart
            createPlugin(plugins, powerbi.visuals.plugins.donutChart, () => new DonutChart({
                tooltipsEnabled: tooltipsOnDashboard,
            }));
            // Funnel Chart
            createPlugin(plugins, powerbi.visuals.plugins.funnel, () => new FunnelChart({
                tooltipsEnabled: tooltipsOnDashboard,
            }));
            // Gauge
            createPlugin(plugins, powerbi.visuals.plugins.gauge, () => new Gauge({
                tooltipsEnabled: tooltipsOnDashboard,
            }));
            // Hundred Percent Stacked Bar Chart
            createPlugin(plugins, powerbi.visuals.plugins.hundredPercentStackedBarChart, () => new CartesianChart({
                chartType: CartesianChartType.HundredPercentStackedBar,
                tooltipsEnabled: tooltipsOnDashboard,
            }));
            // Hundred Percent Stacked Column Chart
            createPlugin(plugins, powerbi.visuals.plugins.hundredPercentStackedColumnChart, () => new CartesianChart({
                chartType: CartesianChartType.HundredPercentStackedColumn,
                tooltipsEnabled: tooltipsOnDashboard,
            }));
            // Line Chart
            createPlugin(plugins, powerbi.visuals.plugins.lineChart, () => new CartesianChart({
                chartType: CartesianChartType.Line,
                tooltipsEnabled: tooltipsOnDashboard,
                lineChartLabelDensityEnabled: lineChartLabelDensityEnabled,
            }));
            // Area Chart
            createPlugin(plugins, powerbi.visuals.plugins.areaChart, () => new CartesianChart({
                chartType: CartesianChartType.Area,
                tooltipsEnabled: tooltipsOnDashboard,
                lineChartLabelDensityEnabled: lineChartLabelDensityEnabled,
            }));
            // Stacked Area Chart
            createPlugin(plugins, powerbi.visuals.plugins.stackedAreaChart, () => new CartesianChart({
                chartType: CartesianChartType.StackedArea,
                tooltipsEnabled: tooltipsOnDashboard,
                lineChartLabelDensityEnabled: lineChartLabelDensityEnabled,
            }));
            // Line Clustered Combo Chart
            createPlugin(plugins, powerbi.visuals.plugins.lineClusteredColumnComboChart, () => new CartesianChart({
                chartType: CartesianChartType.LineClusteredColumnCombo,
                tooltipsEnabled: tooltipsOnDashboard,
            }));
            // Line Stacked Combo Chart
            createPlugin(plugins, powerbi.visuals.plugins.lineStackedColumnComboChart, () => new CartesianChart({
                chartType: CartesianChartType.LineStackedColumnCombo,
                tooltipsEnabled: tooltipsOnDashboard,
            }));
            // Pie Chart
            createPlugin(plugins, powerbi.visuals.plugins.pieChart, () => new DonutChart({
                sliceWidthRatio: 0,
                tooltipsEnabled: tooltipsOnDashboard,
            }));
            // Scatter Chart
            createPlugin(plugins, powerbi.visuals.plugins.scatterChart, () => new CartesianChart({
                chartType: CartesianChartType.Scatter,
                tooltipsEnabled: tooltipsOnDashboard,
            }));
            // Treemap
            createPlugin(plugins, powerbi.visuals.plugins.treemap, () => new Treemap({
                isScrollable: false,
                tooltipsEnabled: tooltipsOnDashboard,
            }));
            // Waterfall Chart
            createPlugin(plugins, powerbi.visuals.plugins.waterfallChart, () => new CartesianChart({
                chartType: CartesianChartType.Waterfall,
                tooltipsEnabled: tooltipsOnDashboard,
            }));
            // Map
            createPlugin(plugins, powerbi.visuals.plugins.map, () => new Map({
                tooltipsEnabled: tooltipsOnDashboard,
                disableZooming: true,
                disablePanning: true,
            }));
            // Filled Map
            createPlugin(plugins, powerbi.visuals.plugins.filledMap, () => new Map({
                filledMap: true,
                tooltipsEnabled: tooltipsOnDashboard,
                disableZooming: true,
                disablePanning: true,
            }));
            // Matrix
            createPlugin(plugins, powerbi.visuals.plugins.matrix, () => new Matrix({
            }));
            // Table
            createPlugin(plugins, powerbi.visuals.plugins.table, () => new Table({
                isConditionalFormattingEnabled: false,
            }));
        }

        function createMinervaPlugins(plugins: jsCommon.IStringDictionary<IVisualPlugin>, featureSwitches?: MinervaVisualFeatureSwitches) {
            let scriptVisualEnabled: boolean = featureSwitches ? featureSwitches.scriptVisualEnabled : false;
            let scriptVisualAuthoringEnabled: boolean = featureSwitches ? featureSwitches.scriptVisualAuthoringEnabled : false;
            let isLabelInteractivityEnabled: boolean = featureSwitches ? featureSwitches.isLabelInteractivityEnabled : false;
            let conditionalFormattingEnabled = featureSwitches ? featureSwitches.conditionalFormattingEnabled : false;
            let fillMapDataLabelsEnabled: boolean = featureSwitches ? featureSwitches.filledMapDataLabelsEnabled : false;
            let lineChartLabelDensityEnabled: boolean = featureSwitches ? featureSwitches.lineChartLabelDensityEnabled : false;

            // Bar Chart
            createPlugin(plugins, powerbi.visuals.plugins.barChart, () => new CartesianChart({
                chartType: CartesianChartType.StackedBar,
                isScrollable: true, animator: new WebColumnChartAnimator(),
                tooltipsEnabled: true,
                behavior: new CartesianChartBehavior([new ColumnChartWebBehavior()]),
                isLabelInteractivityEnabled: isLabelInteractivityEnabled,
            }));
            // Card
            createPlugin(plugins, powerbi.visuals.plugins.card, () => new Card({
                isScrollable: true,
                animator: new BaseAnimator(),
            }));
            // Clustered Bar Chart
            createPlugin(plugins, powerbi.visuals.plugins.clusteredBarChart, () => new CartesianChart({
                chartType: CartesianChartType.ClusteredBar,
                isScrollable: true,
                tooltipsEnabled: true,
                animator: new WebColumnChartAnimator(),
                behavior: new CartesianChartBehavior([new ColumnChartWebBehavior()]),
                isLabelInteractivityEnabled: isLabelInteractivityEnabled,
            }));
            // Clustered Column Chart
            createPlugin(plugins, powerbi.visuals.plugins.clusteredColumnChart, () => new CartesianChart({
                chartType: CartesianChartType.ClusteredColumn,
                isScrollable: true,
                tooltipsEnabled: true,
                animator: new WebColumnChartAnimator(),
                behavior: new CartesianChartBehavior([new ColumnChartWebBehavior()]),
                isLabelInteractivityEnabled: isLabelInteractivityEnabled,
            }));
            // Column Chart
            createPlugin(plugins, powerbi.visuals.plugins.columnChart, () => new CartesianChart({
                chartType: CartesianChartType.StackedColumn,
                isScrollable: true,
                tooltipsEnabled: true,
                animator: new WebColumnChartAnimator(),
                behavior: new CartesianChartBehavior([new ColumnChartWebBehavior()]),
                isLabelInteractivityEnabled: isLabelInteractivityEnabled,
            }));
            // Data Dot Clustered Combo Chart
            createPlugin(plugins, powerbi.visuals.plugins.dataDotClusteredColumnComboChart, () => new CartesianChart({
                chartType: CartesianChartType.DataDotClusteredColumnCombo,
                isScrollable: true,
                tooltipsEnabled: true,
                animator: new WebColumnChartAnimator(),
                behavior: new CartesianChartBehavior([new ColumnChartWebBehavior(), new DataDotChartWebBehavior()]),
                isLabelInteractivityEnabled: isLabelInteractivityEnabled,
            }));
            // Data Dot Stacked Combo Chart
            createPlugin(plugins, powerbi.visuals.plugins.dataDotStackedColumnComboChart, () => new CartesianChart({
                chartType: CartesianChartType.DataDotStackedColumnCombo,
                isScrollable: true,
                tooltipsEnabled: true,
                animator: new WebColumnChartAnimator(),
                behavior: new CartesianChartBehavior([new ColumnChartWebBehavior(), new DataDotChartWebBehavior()]),
                isLabelInteractivityEnabled: isLabelInteractivityEnabled,
            }));
            // Donut Chart
            createPlugin(plugins, powerbi.visuals.plugins.donutChart, () => new DonutChart({
                animator: new WebDonutChartAnimator(),
                isScrollable: true,
                tooltipsEnabled: true,
                behavior: new DonutChartWebBehavior(),
            }));
            // Funnel Chart
            createPlugin(plugins, powerbi.visuals.plugins.funnel, () => new FunnelChart({
                animator: new WebFunnelAnimator(),
                behavior: new FunnelWebBehavior(),
                tooltipsEnabled: true,
            }));
            // Gauge
            createPlugin(plugins, powerbi.visuals.plugins.gauge, () => new Gauge({
                animator: new BaseAnimator(),
                tooltipsEnabled: true,
            }));
            // Hundred Percent Stacked Bar Chart
            createPlugin(plugins, powerbi.visuals.plugins.hundredPercentStackedBarChart, () => new CartesianChart({
                chartType: CartesianChartType.HundredPercentStackedBar,
                isScrollable: true,
                tooltipsEnabled: true,
                animator: new WebColumnChartAnimator(),
                behavior: new CartesianChartBehavior([new ColumnChartWebBehavior()]),
                isLabelInteractivityEnabled: isLabelInteractivityEnabled,
            }));
            // Hundred Percent Stacked Column Chart
            createPlugin(plugins, powerbi.visuals.plugins.hundredPercentStackedColumnChart, () => new CartesianChart({
                chartType: CartesianChartType.HundredPercentStackedColumn,
                isScrollable: true,
                tooltipsEnabled: true,
                animator: new WebColumnChartAnimator(),
                behavior: new CartesianChartBehavior([new ColumnChartWebBehavior()]),
                isLabelInteractivityEnabled: isLabelInteractivityEnabled,
            }));
            // Line Chart
            createPlugin(plugins, powerbi.visuals.plugins.lineChart, () => new CartesianChart({
                chartType: CartesianChartType.Line,
                isScrollable: true,
                tooltipsEnabled: true,
                animator: new BaseAnimator(),
                behavior: new CartesianChartBehavior([new LineChartWebBehavior()]),
                isLabelInteractivityEnabled: isLabelInteractivityEnabled,
                lineChartLabelDensityEnabled: lineChartLabelDensityEnabled,
            }));
            // Area Chart
            createPlugin(plugins, powerbi.visuals.plugins.areaChart, () => new CartesianChart({
                chartType: CartesianChartType.Area,
                isScrollable: true,
                tooltipsEnabled: true,
                animator: new BaseAnimator(),
                behavior: new CartesianChartBehavior([new LineChartWebBehavior()]),
                isLabelInteractivityEnabled: isLabelInteractivityEnabled,
                lineChartLabelDensityEnabled: lineChartLabelDensityEnabled,
            }));
            // Stacked Area Chart
            createPlugin(plugins, powerbi.visuals.plugins.stackedAreaChart, () => new CartesianChart({
                chartType: CartesianChartType.StackedArea,
                isScrollable: true,
                tooltipsEnabled: true,
                animator: new BaseAnimator(),
                behavior: new CartesianChartBehavior([new LineChartWebBehavior()]),
                lineChartLabelDensityEnabled: lineChartLabelDensityEnabled,
            }));
            // Line Clustered Combo Chart
            createPlugin(plugins, powerbi.visuals.plugins.lineClusteredColumnComboChart, () => new CartesianChart({
                chartType: CartesianChartType.LineClusteredColumnCombo,
                isScrollable: true,
                tooltipsEnabled: true,
                animator: new WebColumnChartAnimator(),
                behavior: new CartesianChartBehavior([new ColumnChartWebBehavior(), new LineChartWebBehavior()]),
                isLabelInteractivityEnabled: isLabelInteractivityEnabled,
            }));
            // Line Stacked Combo Chart
            createPlugin(plugins, powerbi.visuals.plugins.lineStackedColumnComboChart, () => new CartesianChart({
                chartType: CartesianChartType.LineStackedColumnCombo,
                isScrollable: true,
                tooltipsEnabled: true,
                animator: new WebColumnChartAnimator(),
                behavior: new CartesianChartBehavior([new ColumnChartWebBehavior(), new LineChartWebBehavior()]),
                isLabelInteractivityEnabled: isLabelInteractivityEnabled,
            }));
            // Pie Chart
            createPlugin(plugins, powerbi.visuals.plugins.pieChart, () => new DonutChart({
                sliceWidthRatio: 0,
                animator: new WebDonutChartAnimator(),
                isScrollable: true,
                tooltipsEnabled: true,
                behavior: new DonutChartWebBehavior(),
            }));
            // Scatter Chart
            createPlugin(plugins, powerbi.visuals.plugins.scatterChart, () => new CartesianChart({
                chartType: CartesianChartType.Scatter,
                isScrollable: true,
                tooltipsEnabled: true,
                animator: new BaseAnimator(),
                behavior: new CartesianChartBehavior([new ScatterChartWebBehavior()]),
                isLabelInteractivityEnabled: isLabelInteractivityEnabled,
            }));
            // Treemap
            createPlugin(plugins, powerbi.visuals.plugins.treemap, () => new Treemap({
                animator: new WebTreemapAnimator,
                isScrollable: true,
                behavior: new TreemapWebBehavior(),
                tooltipsEnabled: true,
            }));
            // Waterfall Chart
            createPlugin(plugins, powerbi.visuals.plugins.waterfallChart, () => new CartesianChart({
                chartType: CartesianChartType.Waterfall,
                isScrollable: true,
                tooltipsEnabled: true,
                behavior: new CartesianChartBehavior([new WaterfallChartWebBehavior()]),
                isLabelInteractivityEnabled: isLabelInteractivityEnabled,
            }));
            // Map
            createPlugin(plugins, powerbi.visuals.plugins.map, () => new Map({
                behavior: new MapBehavior(),
                tooltipsEnabled: true,
                isLegendScrollable: true,
            }));
            // Filled Map
            createPlugin(plugins, powerbi.visuals.plugins.filledMap, () => new Map({
                filledMap: true,
                behavior: new MapBehavior,
                tooltipsEnabled: true,
                filledMapDataLabelsEnabled: fillMapDataLabelsEnabled,
                isLegendScrollable: true,
            }));
            // Slicer
            createPlugin(plugins, powerbi.visuals.plugins.slicer, () => new Slicer({
                behavior: new SlicerWebBehavior(),
            }));           
            // Matrix
            createPlugin(plugins, powerbi.visuals.plugins.matrix, () => new Matrix({
            }));
            // Table
            createPlugin(plugins, powerbi.visuals.plugins.table, () => new Table({
                isConditionalFormattingEnabled: conditionalFormattingEnabled,
            }));;

            if (scriptVisualEnabled && scriptVisualAuthoringEnabled) {
                // R visual
                createPlugin(
                    plugins,
                    powerbi.visuals.plugins.scriptVisual,
                    () => new ScriptVisual({ canRefresh: true }));
            }
        }

        export class MinervaVisualPluginService extends VisualPluginService {
            private visualPlugins: jsCommon.IStringDictionary<IVisualPlugin>;

            public constructor(featureSwitches: MinervaVisualFeatureSwitches) {
                super(featureSwitches);

                debug.assertValue(featureSwitches, 'featureSwitches');

                this.visualPlugins = {};

                this.addCustomVisualizations([]);

                createMinervaPlugins(this.visualPlugins, this.featureSwitches);
            }

            public getVisuals(): IVisualPlugin[] {
                // Current visual types that supports visual conversion. Please don't change the orders
                // CAUTION: If you are adding new visual types, please check if you need to update the height of
                // the visual convertion pane in visualization pane as well.
                let convertibleVisualTypes = [
                    powerbi.visuals.plugins.barChart,
                    powerbi.visuals.plugins.columnChart,
                    powerbi.visuals.plugins.clusteredBarChart,
                    powerbi.visuals.plugins.clusteredColumnChart,
                    powerbi.visuals.plugins.hundredPercentStackedBarChart,
                    powerbi.visuals.plugins.hundredPercentStackedColumnChart,
                    powerbi.visuals.plugins.lineChart,
                    powerbi.visuals.plugins.areaChart,
                    powerbi.visuals.plugins.stackedAreaChart,
                    powerbi.visuals.plugins.lineStackedColumnComboChart,
                    powerbi.visuals.plugins.lineClusteredColumnComboChart,
                    powerbi.visuals.plugins.waterfallChart,
                    powerbi.visuals.plugins.scatterChart,
                    powerbi.visuals.plugins.pieChart,
                    powerbi.visuals.plugins.treemap,
                    powerbi.visuals.plugins.map,
                    powerbi.visuals.plugins.table,
                    powerbi.visuals.plugins.matrix,
                    powerbi.visuals.plugins.filledMap,
                    powerbi.visuals.plugins.funnel,
                    powerbi.visuals.plugins.gauge,
                    powerbi.visuals.plugins.multiRowCard,
                    powerbi.visuals.plugins.card,
                    powerbi.visuals.plugins.kpi,
                    powerbi.visuals.plugins.slicer,
                    powerbi.visuals.plugins.donutChart
                ];

                if (this.featureSwitches.scriptVisualEnabled && this.featureSwitches.scriptVisualAuthoringEnabled) {
                    convertibleVisualTypes.push(powerbi.visuals.plugins.scriptVisual);
                }

                // Add any visuals compiled in the developer tools
                // Additionally add custom visuals.
                for (let p in plugins) {
                    let plugin = plugins[p];
                    if (plugin.custom) {
                        this.pushPluginIntoConvertibleTypes(convertibleVisualTypes, plugin);
                    }
                }

                this.addCustomVisualizations(convertibleVisualTypes);

                if (this.featureSwitches.dataDotChartEnabled) {
                    convertibleVisualTypes.push(powerbi.visuals.plugins.dataDotClusteredColumnComboChart);
                    convertibleVisualTypes.push(powerbi.visuals.plugins.dataDotStackedColumnComboChart);
                }

                return convertibleVisualTypes;
            }

            private pushPluginIntoConvertibleTypes(convertibleVisualTypes: IVisualPlugin[], plugin: IVisualPlugin) {
                if (!convertibleVisualTypes.some(pl => pl.name === plugin.name)) {
                    convertibleVisualTypes.push(plugin);
                }
            }

            private addCustomVisualizations(convertibleVisualTypes: IVisualPlugin[]): void {
                // Read new visual from localstorage
                let customVisualizationDict = localStorageService.getData('customVisualMetaData');
                for (let visualName in customVisualizationDict) {
                    let customVisualMetaData = customVisualizationDict[visualName];

                    if (!customVisualMetaData) {
                        continue;
                    }

                    let pluginName = customVisualMetaData.pluginName;
                    // Uncompiled new visuals should not be loaded into the report
                    if (!pluginName || !customVisualMetaData.sourceCode || !customVisualMetaData.sourceCode.javascriptCode) {
                        continue;
                    }

                    let plugin = this.getPlugin(pluginName);
                    // If the browser session got restarted or its a new window the plugin wont be available, so we need to add it
                    if (!plugin) {
                        let jsCode = customVisualMetaData.sourceCode.javascriptCode;

                        let script = $("<script/>", {
                            html: jsCode + '//# sourceURL=' + pluginName + '.js\n' + '//# sourceMappingURL=' + pluginName + '.js.map'
                        });

                        script.attr('pluginName', pluginName);

                        $('body').append(script);

                        let style = $("<style/>", {
                            html: customVisualMetaData.sourceCode.cssCode
                        });

                        style.attr('pluginName', pluginName);

                        $('head').append(style);

                        plugin = this.getPlugin(pluginName);

                        if (!plugin) {
                            continue;
                        }
                    }
                    this.pushPluginIntoConvertibleTypes(convertibleVisualTypes, plugin);
                }
            }

            public getPlugin(type: string): IVisualPlugin {
                if (this.visualPlugins[type])
                    return this.visualPlugins[type];

                return super.getPlugin(type);
            }

            public requireSandbox(plugin: IVisualPlugin): boolean {
                return (this.featureSwitches.sandboxVisualsEnabled) && (!plugin || (plugin && plugin.custom));
            }
        }

        export class PlaygroundVisualPluginService extends VisualPluginService {
            private visualPlugins: jsCommon.IStringDictionary<IVisualPlugin>;

            public constructor() {
                super(undefined);

                this.visualPlugins = <any>powerbi.visuals.plugins;

                createMinervaPlugins(this.visualPlugins, null);
            }

            public getVisuals(): IVisualPlugin[] {
                let registry = this.visualPlugins,
                    names: string[] = Object.keys(registry);

                return names.map(name => registry[name]);
            }

            public getPlugin(type: string): IVisualPlugin {
                if (!type) {
                    return;
                }

                let plugin: IVisualPlugin = this.visualPlugins[type];
                if (!plugin) {
                    return;
                }

                return plugin;
            }

            public capabilities(type: string): VisualCapabilities {
                let plugin = this.getPlugin(type);
                if (plugin) {
                    return plugin.capabilities;
                }
            }
        }

        /**
         * This plug-in service is used when displaying visuals on the dashboard.
         */
        export class DashboardPluginService extends VisualPluginService {
            private visualPlugins: jsCommon.IStringDictionary<IVisualPlugin>;

            public constructor(featureSwitches: MinervaVisualFeatureSwitches, options: CreateDashboardOptions) {
                super(featureSwitches);

                debug.assertValue(featureSwitches, 'featureSwitches');

                this.visualPlugins = {};

                createDashboardPlugins(this.visualPlugins, options, this.featureSwitches);
            }

            public getPlugin(type: string): IVisualPlugin {

                if (this.visualPlugins[type]) {
                    return this.visualPlugins[type];
                }

                return super.getPlugin(type);
            }

            public requireSandbox(plugin: IVisualPlugin): boolean {
                return (this.featureSwitches.sandboxVisualsEnabled) && (!plugin || (plugin && plugin.custom));
            }
        }

        // This plug-in service is used when displaying visuals for insights.
        export class InsightsPluginService extends VisualPluginService {
            private visualPlugins: jsCommon.IStringDictionary<IVisualPlugin>;

            public constructor(featureSwitches: MinervaVisualFeatureSwitches) {
                super(featureSwitches);

                debug.assertValue(featureSwitches, 'featureSwitches');

                this.visualPlugins = {};

                // Clustered Bar Chart
                createPlugin(this.visualPlugins, powerbi.visuals.plugins.clusteredBarChart, () => new CartesianChart({
                    chartType: CartesianChartType.ClusteredBar,
                    animator: new WebColumnChartAnimator(),
                    tooltipsEnabled: true
                }));

                // Column Chart
                createPlugin(this.visualPlugins, powerbi.visuals.plugins.columnChart, () => new CartesianChart({
                    chartType: CartesianChartType.StackedColumn,
                    animator: new WebColumnChartAnimator(),
                    tooltipsEnabled: true
                }));

                // Donut Chart
                createPlugin(this.visualPlugins, powerbi.visuals.plugins.donutChart, () => new DonutChart({
                    animator: new WebDonutChartAnimator(),
                    tooltipsEnabled: true,
                }));

                // Hundred Percent Stacked Bar Chart
                createPlugin(this.visualPlugins, powerbi.visuals.plugins.hundredPercentStackedBarChart, () => new CartesianChart({
                    chartType: CartesianChartType.HundredPercentStackedBar,
                    animator: new WebColumnChartAnimator(),
                    tooltipsEnabled: true
                }));

                // Hundred Percent Stacked Column Chart
                createPlugin(this.visualPlugins, powerbi.visuals.plugins.hundredPercentStackedColumnChart, () => new CartesianChart({
                    chartType: CartesianChartType.HundredPercentStackedColumn,
                    animator: new WebColumnChartAnimator(),
                    tooltipsEnabled: true
                }));
                
                // Line Chart
                createPlugin(this.visualPlugins, powerbi.visuals.plugins.lineChart, () => new CartesianChart({
                    chartType: CartesianChartType.Line,
                    animator: new BaseAnimator(),
                    tooltipsEnabled: true,
                }));

                // Area Chart
                createPlugin(this.visualPlugins, powerbi.visuals.plugins.areaChart, () => new CartesianChart({
                    chartType: CartesianChartType.Area,
                    animator: new BaseAnimator(),
                    tooltipsEnabled: true,
                }));

                // Pie Chart
                createPlugin(this.visualPlugins, powerbi.visuals.plugins.pieChart, () => new DonutChart({
                    sliceWidthRatio: 0,
                    animator: new WebDonutChartAnimator(),
                    tooltipsEnabled: true,
                }));

                // Scatter Chart
                createPlugin(this.visualPlugins, powerbi.visuals.plugins.scatterChart, () => new CartesianChart({
                    chartType: CartesianChartType.Scatter,
                    animator: new BaseAnimator(),
                    tooltipsEnabled: true,
                }), undefined);
            }

            public getPlugin(type: string): IVisualPlugin {
                if (this.visualPlugins[type]) {
                    return this.visualPlugins[type];
                }

                return super.getPlugin(type);
            }

            public requireSandbox(plugin: IVisualPlugin): boolean {
                return (this.featureSwitches.sandboxVisualsEnabled) && (!plugin || (plugin && plugin.custom));
            }
        }

        export class MobileVisualPluginService extends VisualPluginService {
            private visualPlugins: jsCommon.IStringDictionary<IVisualPlugin>;
            private smallViewPortProperties;
            public static MinHeightLegendVisible = 125;
            public static MinHeightAxesVisible = 125;
            public static MinHeightGaugeSideNumbersVisible = 80;
            public static GaugeMarginsOnSmallViewPort = 10;
            public static MinHeightFunnelCategoryLabelsVisible = 80;
            public static MaxHeightToScaleDonutLegend = 300;

            public constructor(smallViewPortProperties?: SmallViewPortProperties, featureSwitches?: MinervaVisualFeatureSwitches) {
                super(featureSwitches);

                this.smallViewPortProperties = smallViewPortProperties || {
                    CartesianSmallViewPortProperties: {
                        hideAxesOnSmallViewPort: true,
                        hideLegendOnSmallViewPort: true,
                        MinHeightLegendVisible: MobileVisualPluginService.MinHeightLegendVisible,
                        MinHeightAxesVisible: MobileVisualPluginService.MinHeightAxesVisible,
                    },
                    GaugeSmallViewPortProperties: {
                        hideGaugeSideNumbersOnSmallViewPort: true,
                        smallGaugeMarginsOnSmallViewPort: true,
                        MinHeightGaugeSideNumbersVisible: MobileVisualPluginService.MinHeightGaugeSideNumbersVisible,
                        GaugeMarginsOnSmallViewPort: MobileVisualPluginService.GaugeMarginsOnSmallViewPort,
                    },
                    FunnelSmallViewPortProperties: {
                        hideFunnelCategoryLabelsOnSmallViewPort: true,
                        minHeightFunnelCategoryLabelsVisible: MobileVisualPluginService.MinHeightFunnelCategoryLabelsVisible,
                    },
                    DonutSmallViewPortProperties: {
                        maxHeightToScaleDonutLegend: MobileVisualPluginService.MaxHeightToScaleDonutLegend,
                    },
                };

                // Disable tooltips for mobile
                TooltipManager.ShowTooltips = false;
                
                // Don't trim overflow data on mobile
                let trimOrdinalDataOnOverflow = false;

                let mapThrottleInterval: number = this.getMapThrottleInterval();

                this.visualPlugins = {};
                createPlugin(this.visualPlugins, powerbi.visuals.plugins.areaChart,
                    () => new CartesianChart({
                        chartType: CartesianChartType.Area,
                        trimOrdinalDataOnOverflow: trimOrdinalDataOnOverflow
                    }));
                createPlugin(this.visualPlugins, powerbi.visuals.plugins.barChart,
                    () => new CartesianChart({
                        chartType: CartesianChartType.StackedBar,
                        trimOrdinalDataOnOverflow: trimOrdinalDataOnOverflow
                    }));
                createPlugin(this.visualPlugins, powerbi.visuals.plugins.clusteredBarChart,
                    () => new CartesianChart({
                        chartType: CartesianChartType.ClusteredBar,
                        trimOrdinalDataOnOverflow: trimOrdinalDataOnOverflow
                    }));
                createPlugin(this.visualPlugins, powerbi.visuals.plugins.clusteredColumnChart,
                    () => new CartesianChart({
                        chartType: CartesianChartType.ClusteredColumn,
                        trimOrdinalDataOnOverflow: trimOrdinalDataOnOverflow
                    }));
                createPlugin(this.visualPlugins, powerbi.visuals.plugins.columnChart,
                    () => new CartesianChart({
                        chartType: CartesianChartType.StackedColumn,
                        trimOrdinalDataOnOverflow: trimOrdinalDataOnOverflow
                    }));
                createPlugin(this.visualPlugins, powerbi.visuals.plugins.comboChart,
                    () => new CartesianChart({
                        chartType: CartesianChartType.ComboChart,
                        trimOrdinalDataOnOverflow: trimOrdinalDataOnOverflow
                    }));
                createPlugin(this.visualPlugins, powerbi.visuals.plugins.dataDotChart,
                    () => new CartesianChart({
                        chartType: CartesianChartType.DataDot,
                        trimOrdinalDataOnOverflow: trimOrdinalDataOnOverflow
                    }));
                createPlugin(this.visualPlugins, powerbi.visuals.plugins.dataDotClusteredColumnComboChart,
                    () => new CartesianChart({
                        chartType: CartesianChartType.DataDotClusteredColumnCombo,
                        trimOrdinalDataOnOverflow: trimOrdinalDataOnOverflow
                    }));
                createPlugin(this.visualPlugins, powerbi.visuals.plugins.dataDotStackedColumnComboChart,
                    () => new CartesianChart({
                        chartType: CartesianChartType.DataDotStackedColumnCombo,
                        trimOrdinalDataOnOverflow: trimOrdinalDataOnOverflow
                    }));
                createPlugin(this.visualPlugins, powerbi.visuals.plugins.hundredPercentStackedBarChart,
                    () => new CartesianChart({
                        chartType: CartesianChartType.HundredPercentStackedBar,
                        trimOrdinalDataOnOverflow: trimOrdinalDataOnOverflow
                    }));
                createPlugin(this.visualPlugins, powerbi.visuals.plugins.hundredPercentStackedColumnChart,
                    () => new CartesianChart({
                        chartType: CartesianChartType.HundredPercentStackedColumn,
                        trimOrdinalDataOnOverflow: trimOrdinalDataOnOverflow
                    }));
                createPlugin(this.visualPlugins, powerbi.visuals.plugins.stackedAreaChart,
                    () => new CartesianChart({
                        chartType: CartesianChartType.StackedArea,
                        trimOrdinalDataOnOverflow: trimOrdinalDataOnOverflow
                    }));
                createPlugin(this.visualPlugins, powerbi.visuals.plugins.waterfallChart,
                    () => new CartesianChart({
                        chartType: CartesianChartType.Waterfall,
                        trimOrdinalDataOnOverflow: trimOrdinalDataOnOverflow
                    }));
                createPlugin(this.visualPlugins, powerbi.visuals.plugins.lineChart,
                    () => new CartesianChart({
                        chartType: CartesianChartType.Line,
                        cartesianSmallViewPortProperties: this.smallViewPortProperties.CartesianSmallViewPortProperties,
                        trimOrdinalDataOnOverflow: trimOrdinalDataOnOverflow
                    }));
                createPlugin(this.visualPlugins, powerbi.visuals.plugins.lineClusteredColumnComboChart,
                    () => new CartesianChart({
                        chartType: CartesianChartType.LineClusteredColumnCombo,
                        cartesianSmallViewPortProperties: this.smallViewPortProperties.CartesianSmallViewPortProperties,
                        trimOrdinalDataOnOverflow: trimOrdinalDataOnOverflow
                    }));
                createPlugin(this.visualPlugins, powerbi.visuals.plugins.lineStackedColumnComboChart,
                    () => new CartesianChart({
                        chartType: CartesianChartType.LineStackedColumnCombo,
                        cartesianSmallViewPortProperties: this.smallViewPortProperties.CartesianSmallViewPortProperties,
                        trimOrdinalDataOnOverflow: trimOrdinalDataOnOverflow
                    }));
                createPlugin(this.visualPlugins, powerbi.visuals.plugins.scatterChart,
                    () => new CartesianChart({
                        chartType: CartesianChartType.Scatter,
                        cartesianSmallViewPortProperties: this.smallViewPortProperties.CartesianSmallViewPortProperties,
                        behavior: new CartesianChartBehavior([new ScatterChartMobileBehavior()])
                    }));
                createPlugin(this.visualPlugins, powerbi.visuals.plugins.gauge,
                    () => new Gauge({
                        gaugeSmallViewPortProperties: this.smallViewPortProperties.GaugeSmallViewPortProperties
                    }));
                createPlugin(this.visualPlugins, powerbi.visuals.plugins.funnel,
                    () => new FunnelChart({
                        animator: null,
                        funnelSmallViewPortProperties: this.smallViewPortProperties.FunnelSmallViewPortProperties
                    }));
                createPlugin(this.visualPlugins, powerbi.visuals.plugins.donutChart,
                    () => new DonutChart({
                        disableGeometricCulling: true,
                        smallViewPortProperties: this.smallViewPortProperties.DonutSmallViewPortProperties
                    }));
                createPlugin(this.visualPlugins, powerbi.visuals.plugins.pieChart,
                    () => new DonutChart({
                        sliceWidthRatio: 0,
                        disableGeometricCulling: true,
                        smallViewPortProperties: this.smallViewPortProperties.DonutSmallViewPortProperties
                    }));
                createPlugin(this.visualPlugins, powerbi.visuals.plugins.matrix,
                    () => new Matrix({
                        isTouchEnabled: true
                    }));
                createPlugin(this.visualPlugins, powerbi.visuals.plugins.table,
                    () => new Table({
                        isTouchEnabled: true
                    }));
                createPlugin(this.visualPlugins, powerbi.visuals.plugins.map,
                    () => new Map({
                        viewChangeThrottleInterval: mapThrottleInterval,
                        enableCurrentLocation: featureSwitches ? featureSwitches.mapCurrentLocationEnabled : false
                    }));
                createPlugin(this.visualPlugins, powerbi.visuals.plugins.filledMap,
                    () => new Map({
                        filledMap: true,
                        viewChangeThrottleInterval: mapThrottleInterval
                    }));
            }

            public getPlugin(type: string): IVisualPlugin {
                if (this.visualPlugins[type])
                    return this.visualPlugins[type];

                return super.getPlugin(type);
            }

            public requireSandbox(plugin: IVisualPlugin): boolean {
                if (this.featureSwitches)
                    return (this.featureSwitches.sandboxVisualsEnabled) && (!plugin || (plugin && plugin.custom));
                else
                    return super.requireSandbox(plugin);
            }

            // Windows phone webView chokes when zooming on heavy maps,
            // this is a workaround to allow a relatively smooth pinch to zoom experience.
            private getMapThrottleInterval(): number {
                const windowsPhoneThrottleInterval = 100;
                let userAgentLowerCase = navigator.userAgent.toLowerCase();
                if (userAgentLowerCase.indexOf('windows phone') !== -1) {
                    return windowsPhoneThrottleInterval;
                }

                return undefined;
            }

            public getInteractivityOptions(visualType: string): InteractivityOptions {
                let mobileOptions: InteractivityOptions = {
                    overflow: this.getMobileOverflowString(visualType),
                    isInteractiveLegend: this.isChartSupportInteractivity(visualType),
                    selection: true,
                };

                return mobileOptions;
            }

            private getMobileOverflowString(visualType: string): string {
                switch (visualType) {
                    case 'multiRowCard':
                        return 'visible';

                    default:
                        return 'hidden';
                }
            }

            private isChartSupportInteractivity(visualType: string): boolean {
                switch (visualType) {
                    case 'areaChart':
                    case 'barChart':
                    case 'clusteredBarChart':
                    case 'clusteredColumnChart':
                    case 'columnChart':
                    case 'donutChart':
                    case 'hundredPercentStackedBarChart':
                    case 'hundredPercentStackedColumnChart':
                    case 'lineChart':
                    case 'pieChart':
                    case 'scatterChart':
                    case 'table':
                    case 'matrix':
                    case 'multiRowCard':
                        return true;

                    default:
                        return false;
                }
            } 
        }

        // this function is called by tests
        export function create(): IVisualPluginService {
            return new VisualPluginService(undefined);
        }

        export function createVisualPluginService(featureSwitch: MinervaVisualFeatureSwitches): IVisualPluginService {
            return new VisualPluginService(featureSwitch);
        }

        export function createMinerva(featureSwitches: MinervaVisualFeatureSwitches): IVisualPluginService {
            return new MinervaVisualPluginService(featureSwitches);
        }

        export function createDashboard(featureSwitches: MinervaVisualFeatureSwitches, options: CreateDashboardOptions): IVisualPluginService {
            return new DashboardPluginService(featureSwitches, options);
        }

        export function createInsights(featureSwitches: MinervaVisualFeatureSwitches): IVisualPluginService {
            return new InsightsPluginService(featureSwitches);
        }

        export function createMobile(smallViewPortProperties?: SmallViewPortProperties, featureSwitches?: MinervaVisualFeatureSwitches): IVisualPluginService {
            return new MobileVisualPluginService(smallViewPortProperties, featureSwitches);
        }
    }
}
