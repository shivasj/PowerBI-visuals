var powerbi;

!function(powerbi) {
    var visuals;
    !function(visuals) {
        var telemetry;
        !function(telemetry) {
            function generateGuid() {
                var guid = "", idx = 0;
                for (idx = 0; 32 > idx; idx += 1) {
                    var guidDigitsItem = 16 * Math.random() | 0;
                    switch (idx) {
                      case 8:
                      case 12:
                      case 16:
                      case 20:
                        guid += "-";
                    }
                    guid += guidDigitsItem.toString(16);
                }
                return guid;
            }
            telemetry.generateGuid = generateGuid;
        }(telemetry = visuals.telemetry || (visuals.telemetry = {}));
    }(visuals = powerbi.visuals || (powerbi.visuals = {}));
}(powerbi || (powerbi = {}));

var powerbi;

!function(powerbi) {
    var visuals;
    !function(visuals) {
        var telemetry;
        !function(telemetry) {
            telemetry.ExtensibilityVisualApiUsage = function(name, apiVersion, custom, parentId, isError, errorSource, errorCode) {
                void 0 === isError && (isError = !1), void 0 === errorSource && (errorSource = void 0), 
                void 0 === errorCode && (errorCode = void 0);
                var info = {
                    name: name,
                    apiVersion: apiVersion,
                    custom: custom,
                    parentId: parentId,
                    isError: isError,
                    errorSource: errorSource,
                    errorCode: errorCode
                }, event = {
                    name: "PBI.Extensibility.VisualApiUsage",
                    category: 1,
                    time: Date.now(),
                    id: telemetry.generateGuid(),
                    getFormattedInfoObject: function() {
                        var formattedObject = {
                            name: info.name,
                            apiVersion: info.apiVersion,
                            custom: info.custom,
                            parentId: info.parentId,
                            isError: info.isError
                        };
                        return "undefined" != typeof info.errorSource && (formattedObject.errorSource = telemetry.ErrorSource[info.errorSource]), 
                        "undefined" != typeof info.errorCode && (formattedObject.errorCode = info.errorCode), 
                        formattedObject;
                    },
                    info: info,
                    privateFields: [],
                    orgInfoFields: []
                };
                return "undefined" != typeof telemetry.ExtensibilityVisualApiUsageLoggers && (event.loggers = telemetry.ExtensibilityVisualApiUsageLoggers), 
                event;
            }, telemetry.VisualException = function(visualType, isCustom, apiVersion, source, lineNumber, columnNumber, stack, message) {
                var info = {
                    visualType: visualType,
                    isCustom: isCustom,
                    apiVersion: apiVersion,
                    source: source,
                    lineNumber: lineNumber,
                    columnNumber: columnNumber,
                    stack: stack,
                    message: message
                }, event = {
                    name: "PBI.VisualException",
                    category: 2,
                    time: Date.now(),
                    id: telemetry.generateGuid(),
                    getFormattedInfoObject: function() {
                        var formattedObject = {
                            visualType: info.visualType,
                            isCustom: info.isCustom,
                            apiVersion: info.apiVersion,
                            source: info.source,
                            lineNumber: info.lineNumber,
                            columnNumber: info.columnNumber,
                            stack: info.stack,
                            message: info.message
                        };
                        return formattedObject;
                    },
                    info: info,
                    privateFields: [],
                    orgInfoFields: []
                };
                return "undefined" != typeof telemetry.VisualExceptionLoggers && (event.loggers = telemetry.VisualExceptionLoggers), 
                event;
            };
        }(telemetry = visuals.telemetry || (visuals.telemetry = {}));
    }(visuals = powerbi.visuals || (powerbi.visuals = {}));
}(powerbi || (powerbi = {}));

var powerbi;

!function(powerbi) {
    var extensibility;
    !function(extensibility) {
        var SelectionManager = function() {
            function SelectionManager(options) {
                this.hostServices = options.hostServices, this.selectedIds = [], this.promiseFactory = this.hostServices.promiseFactory();
            }
            return SelectionManager.prototype.select = function(selectionId, multiSelect) {
                void 0 === multiSelect && (multiSelect = !1);
                var deferred = this.promiseFactory.defer();
                return this.hostServices.shouldRetainSelection() ? this.sendSelectionToHost([ selectionId ]) : (this.selectInternal(selectionId, multiSelect), 
                this.sendSelectionToHost(this.selectedIds)), deferred.resolve(this.selectedIds), 
                deferred.promise;
            }, SelectionManager.prototype.showContextMenu = function(selectionId, position) {
                var deferred = this.promiseFactory.defer();
                return this.sendContextMenuToHost(selectionId, position), deferred.resolve(null), 
                deferred.promise;
            }, SelectionManager.prototype.hasSelection = function() {
                return this.selectedIds.length > 0;
            }, SelectionManager.prototype.clear = function() {
                var deferred = this.promiseFactory.defer();
                return this.selectedIds = [], this.sendSelectionToHost([]), deferred.resolve(null), 
                deferred.promise;
            }, SelectionManager.prototype.getSelectionIds = function() {
                return this.selectedIds;
            }, SelectionManager.prototype.sendSelectionToHost = function(ids) {
                var selectArgs = {
                    data: ids.filter(function(value) {
                        return value.hasIdentity();
                    }).map(function(value) {
                        return value.getSelector();
                    })
                }, data2 = this.getSelectorsByColumn(ids);
                _.isEmpty(data2) || (selectArgs.data2 = data2), this.hostServices.onSelect(selectArgs);
            }, SelectionManager.prototype.sendContextMenuToHost = function(selectionId, position) {
                var selectors = this.getSelectorsByColumn([ selectionId ]);
                if (!_.isEmpty(selectors)) {
                    var args = {
                        data: selectors,
                        position: position
                    };
                    this.hostServices.onContextMenu(args);
                }
            }, SelectionManager.prototype.getSelectorsByColumn = function(selectionIds) {
                return _(selectionIds).filter(function(value) {
                    return value.hasIdentity;
                }).map(function(value) {
                    return value.getSelectorsByColumn();
                }).compact().value();
            }, SelectionManager.prototype.selectInternal = function(selectionId, multiSelect) {
                SelectionManager.containsSelection(this.selectedIds, selectionId) ? this.selectedIds = multiSelect ? this.selectedIds.filter(function(d) {
                    return !selectionId.equals(d);
                }) : this.selectedIds.length > 1 ? [ selectionId ] : [] : multiSelect ? this.selectedIds.push(selectionId) : this.selectedIds = [ selectionId ];
            }, SelectionManager.containsSelection = function(list, id) {
                return list.some(function(d) {
                    return id.equals(d);
                });
            }, SelectionManager;
        }();
        extensibility.SelectionManager = SelectionManager;
    }(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
}(powerbi || (powerbi = {}));

var powerbi;

!function(powerbi) {
    var extensibility;
    !function(extensibility) {
        var SelectionIdBuilder = function() {
            function SelectionIdBuilder() {}
            return SelectionIdBuilder.prototype.withCategory = function(categoryColumn, index) {
                return categoryColumn && categoryColumn.source && categoryColumn.source.queryName && categoryColumn.identity && (this.ensureDataMap()[categoryColumn.source.queryName] = categoryColumn.identity[index]), 
                this;
            }, SelectionIdBuilder.prototype.withSeries = function(seriesColumn, valueColumn) {
                return seriesColumn && seriesColumn.source && seriesColumn.source.queryName && valueColumn && (this.ensureDataMap()[seriesColumn.source.queryName] = valueColumn.identity), 
                this;
            }, SelectionIdBuilder.prototype.withMeasure = function(measureId) {
                return this.measure = measureId, this;
            }, SelectionIdBuilder.prototype.createSelectionId = function() {
                return powerbi.visuals.SelectionId.createWithSelectorForColumnAndMeasure(this.ensureDataMap(), this.measure);
            }, SelectionIdBuilder.prototype.ensureDataMap = function() {
                return this.dataMap || (this.dataMap = {}), this.dataMap;
            }, SelectionIdBuilder;
        }();
        extensibility.SelectionIdBuilder = SelectionIdBuilder;
    }(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
}(powerbi || (powerbi = {}));

var powerbi;

!function(powerbi) {
    var extensibility;
    !function(extensibility) {
        function createVisualAdapter(visualPlugin, telemetryService) {
            var visualTelemetryInfo = {
                name: visualPlugin.name,
                apiVersion: visualPlugin.apiVersion,
                custom: !!visualPlugin.custom
            };
            return new extensibility.VisualSafeExecutionWrapper(new VisualAdapter(visualPlugin, telemetryService), visualTelemetryInfo, telemetryService);
        }
        var ExtensibilityVisualApiUsage = powerbi.visuals.telemetry.ExtensibilityVisualApiUsage;
        extensibility.visualApiVersions = [], extensibility.createVisualAdapter = createVisualAdapter;
        var VisualAdapter = function() {
            function VisualAdapter(visualPlugin, telemetryService) {
                this.telemetryService = telemetryService, this.plugin = visualPlugin;
                var version = visualPlugin.apiVersion, versionIndex = this.getVersionIndex(version), isError = !1;
                version ? versionIndex > -1 ? (this.apiVersionIndex = versionIndex, this.legacy = !1) : isError = !0 : this.legacy = !0, 
                this.telemetryService && this.telemetryService.logEvent(ExtensibilityVisualApiUsage, this.plugin.name, this.plugin.apiVersion, !!this.plugin.custom, void 0, isError, powerbi.visuals.telemetry.ErrorSource.User);
            }
            return VisualAdapter.prototype.init = function(options) {
                if (options.element.empty(), this.legacy) this.visual = this.plugin.create(), this.visualLegacy.init(options); else {
                    var host = extensibility.visualApiVersions[this.apiVersionIndex].hostAdapter(options.host);
                    this.visual = this.plugin.create({
                        element: options.element.get(0),
                        host: host
                    }), this.overloadMethods();
                }
            }, VisualAdapter.prototype.update = function(options) {
                options.type & powerbi.VisualUpdateType.Resize && this.visualHasMethod("onResizing") ? this.onResizing(options.viewport, options.resizeMode) : this.visualHasMethod("update") ? this.visualLegacy.update(options) : ((!options.type || options.type & powerbi.VisualUpdateType.Data) && this.onDataChanged(_.pick(options, [ "dataViews", "operationKind" ])), 
                options.type & powerbi.VisualUpdateType.ViewMode && this.onViewModeChanged(options.viewMode));
            }, VisualAdapter.prototype.destroy = function() {
                this.visualHasMethod("destroy") && this.visualLegacy.destroy();
            }, VisualAdapter.prototype.enumerateObjectInstances = function(options) {
                return this.visualHasMethod("enumerateObjectInstances") ? this.visualLegacy.enumerateObjectInstances(options) : void 0;
            }, VisualAdapter.prototype.onResizing = function(finalViewport, resizeMode) {
                this.visualHasMethod("onResizing") && this.visualLegacy.onResizing(finalViewport, resizeMode);
            }, VisualAdapter.prototype.onDataChanged = function(options) {
                this.visualHasMethod("onDataChanged") && this.visualLegacy.onDataChanged(options);
            }, VisualAdapter.prototype.onViewModeChanged = function(viewMode) {
                this.visualHasMethod("onViewModeChanged") && this.visualLegacy.onViewModeChanged(viewMode);
            }, VisualAdapter.prototype.onClearSelection = function() {
                this.visualHasMethod("onClearSelection") && this.visualLegacy.onClearSelection();
            }, VisualAdapter.prototype.canResizeTo = function(viewport) {
                return this.visualHasMethod("canResizeTo") ? this.visualLegacy.canResizeTo(viewport) : void 0;
            }, VisualAdapter.prototype.unwrap = function() {
                return this.visual;
            }, Object.defineProperty(VisualAdapter.prototype, "visualNew", {
                get: function() {
                    return this.legacy ? void 0 : this.visual;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(VisualAdapter.prototype, "visualLegacy", {
                get: function() {
                    return this.legacy ? this.visual : void 0;
                },
                enumerable: !0,
                configurable: !0
            }), VisualAdapter.prototype.visualHasMethod = function(methodName) {
                var visual = this.legacy ? this.visualLegacy : this.visualNew;
                return visual && _.isFunction(visual[methodName]);
            }, VisualAdapter.prototype.getVersionIndex = function(version) {
                if (version) for (var versionCount = extensibility.visualApiVersions.length, i = 0; versionCount > i; i++) if (extensibility.visualApiVersions[i].version === version) return i;
                return -1;
            }, VisualAdapter.prototype.overloadMethods = function() {
                var overloads = this.getCompiledOverloads();
                for (var key in overloads) this[key] = overloads[key];
            }, VisualAdapter.prototype.getCompiledOverloads = function() {
                for (var overloads = {}, versionIndex = this.apiVersionIndex, visualNew = this.visualNew, i = 0; versionIndex >= i; i++) {
                    var overloadFactory = extensibility.visualApiVersions[i].overloads;
                    _.isFunction(overloadFactory) && _.assign(overloads, overloadFactory(visualNew));
                }
                return overloads;
            }, VisualAdapter;
        }();
        extensibility.VisualAdapter = VisualAdapter;
    }(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
}(powerbi || (powerbi = {}));

var powerbi;

!function(powerbi) {
    var extensibility;
    !function(extensibility) {
        var VisualException = powerbi.visuals.telemetry.VisualException, VisualSafeExecutionWrapper = function() {
            function VisualSafeExecutionWrapper(wrappedVisual, visualInfo, telemetryService, silent) {
                this.wrappedVisual = wrappedVisual, this.visualInfo = visualInfo, this.telemetryService = telemetryService, 
                this.silent = silent;
            }
            return VisualSafeExecutionWrapper.prototype.init = function(options) {
                var _this = this;
                this.wrappedVisual.init && this.executeSafely(function() {
                    return _this.wrappedVisual.init(options);
                });
            }, VisualSafeExecutionWrapper.prototype.destroy = function() {
                var _this = this;
                this.wrappedVisual.destroy && this.executeSafely(function() {
                    return _this.wrappedVisual.destroy();
                });
            }, VisualSafeExecutionWrapper.prototype.update = function(options) {
                var _this = this;
                this.wrappedVisual.update && this.executeSafely(function() {
                    return _this.wrappedVisual.update(options);
                });
            }, VisualSafeExecutionWrapper.prototype.onResizing = function(finalViewport, resizeMode) {
                var _this = this;
                this.wrappedVisual.onResizing && this.executeSafely(function() {
                    return _this.wrappedVisual.onResizing(finalViewport, resizeMode);
                });
            }, VisualSafeExecutionWrapper.prototype.onDataChanged = function(options) {
                var _this = this;
                this.wrappedVisual.onDataChanged && this.executeSafely(function() {
                    return _this.wrappedVisual.onDataChanged(options);
                });
            }, VisualSafeExecutionWrapper.prototype.onViewModeChanged = function(viewMode) {
                var _this = this;
                this.wrappedVisual.onViewModeChanged && this.executeSafely(function() {
                    return _this.wrappedVisual.onViewModeChanged(viewMode);
                });
            }, VisualSafeExecutionWrapper.prototype.onClearSelection = function() {
                var _this = this;
                this.wrappedVisual.onClearSelection && this.executeSafely(function() {
                    return _this.wrappedVisual.onClearSelection();
                });
            }, VisualSafeExecutionWrapper.prototype.canResizeTo = function(viewport) {
                var _this = this;
                return this.wrappedVisual.canResizeTo ? this.executeSafely(function() {
                    return _this.wrappedVisual.canResizeTo(viewport);
                }) : void 0;
            }, VisualSafeExecutionWrapper.prototype.enumerateObjectInstances = function(options) {
                var _this = this;
                return this.wrappedVisual.enumerateObjectInstances ? this.executeSafely(function() {
                    return _this.wrappedVisual.enumerateObjectInstances(options);
                }) : void 0;
            }, VisualSafeExecutionWrapper.prototype.unwrap = function() {
                var visual = this.wrappedVisual;
                return visual.unwrap ? visual.unwrap() : visual;
            }, VisualSafeExecutionWrapper.prototype.isCustomVisual = function() {
                return this.visualInfo.custom;
            }, VisualSafeExecutionWrapper.prototype.executeSafely = function(callback) {
                try {
                    return callback();
                } catch (exception) {
                    !this.silent, this.telemetryService && this.telemetryService.logEvent(VisualException, this.visualInfo.name, this.visualInfo.custom, this.visualInfo.apiVersion, exception.fileName, exception.lineNumber, exception.columnNumber, exception.stack, exception.message);
                }
            }, VisualSafeExecutionWrapper;
        }();
        extensibility.VisualSafeExecutionWrapper = VisualSafeExecutionWrapper;
    }(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
}(powerbi || (powerbi = {}));

var powerbi;

!function(powerbi) {
    var extensibility;
    !function(extensibility) {
        var v100;
        !function(v100) {
            var overloadFactory = function(visual) {
                return {
                    update: function(options) {
                        if (visual.update) {
                            var type = options.type || powerbi.VisualUpdateType.Data;
                            type & powerbi.VisualUpdateType.Resize && 2 === options.resizeMode && (type |= powerbi.VisualUpdateType.ResizeEnd), 
                            visual.update({
                                viewport: options.viewport,
                                dataViews: options.dataViews,
                                type: type
                            });
                        }
                    },
                    destroy: function() {
                        visual.destroy && visual.destroy();
                    },
                    enumerateObjectInstances: function(options) {
                        return visual.enumerateObjectInstances ? visual.enumerateObjectInstances(options) : void 0;
                    }
                };
            }, hostAdapter = function(host) {
                return {};
            };
            extensibility.visualApiVersions.push({
                version: "1.0.0",
                overloads: overloadFactory,
                hostAdapter: hostAdapter
            });
        }(v100 = extensibility.v100 || (extensibility.v100 = {}));
    }(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
}(powerbi || (powerbi = {}));

var powerbi;

!function(powerbi) {
    var extensibility;
    !function(extensibility) {
        var v110;
        !function(v110) {
            var hostAdapter = function(host) {
                return {
                    createSelectionIdBuilder: function() {
                        return new powerbi.visuals.SelectionIdBuilder();
                    },
                    createSelectionManager: function() {
                        return new extensibility.SelectionManager({
                            hostServices: host
                        });
                    }
                };
            };
            extensibility.visualApiVersions.push({
                version: "1.1.0",
                hostAdapter: hostAdapter
            });
        }(v110 = extensibility.v110 || (extensibility.v110 = {}));
    }(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
}(powerbi || (powerbi = {}));