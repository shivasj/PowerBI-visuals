var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
///<reference path="../../Typedefs/globalize/globalize.d.ts"/>
///<reference path="../../Typedefs/lodash/lodash.d.ts"/>
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
    var data;
    (function (data) {
        /** Default IQueryExprVisitorWithArg implementation that others may derive from. */
        var DefaultSQExprVisitorWithArg = (function () {
            function DefaultSQExprVisitorWithArg() {
            }
            DefaultSQExprVisitorWithArg.prototype.visitEntity = function (expr, arg) {
                return this.visitDefault(expr, arg);
            };
            DefaultSQExprVisitorWithArg.prototype.visitColumnRef = function (expr, arg) {
                return this.visitDefault(expr, arg);
            };
            DefaultSQExprVisitorWithArg.prototype.visitMeasureRef = function (expr, arg) {
                return this.visitDefault(expr, arg);
            };
            DefaultSQExprVisitorWithArg.prototype.visitAggr = function (expr, arg) {
                return this.visitDefault(expr, arg);
            };
            DefaultSQExprVisitorWithArg.prototype.visitHierarchy = function (expr, arg) {
                return this.visitDefault(expr, arg);
            };
            DefaultSQExprVisitorWithArg.prototype.visitHierarchyLevel = function (expr, arg) {
                return this.visitDefault(expr, arg);
            };
            DefaultSQExprVisitorWithArg.prototype.visitPropertyVariationSource = function (expr, arg) {
                return this.visitDefault(expr, arg);
            };
            DefaultSQExprVisitorWithArg.prototype.visitBetween = function (expr, arg) {
                return this.visitDefault(expr, arg);
            };
            DefaultSQExprVisitorWithArg.prototype.visitIn = function (expr, arg) {
                return this.visitDefault(expr, arg);
            };
            DefaultSQExprVisitorWithArg.prototype.visitAnd = function (expr, arg) {
                return this.visitDefault(expr, arg);
            };
            DefaultSQExprVisitorWithArg.prototype.visitOr = function (expr, arg) {
                return this.visitDefault(expr, arg);
            };
            DefaultSQExprVisitorWithArg.prototype.visitCompare = function (expr, arg) {
                return this.visitDefault(expr, arg);
            };
            DefaultSQExprVisitorWithArg.prototype.visitContains = function (expr, arg) {
                return this.visitDefault(expr, arg);
            };
            DefaultSQExprVisitorWithArg.prototype.visitExists = function (expr, arg) {
                return this.visitDefault(expr, arg);
            };
            DefaultSQExprVisitorWithArg.prototype.visitNot = function (expr, arg) {
                return this.visitDefault(expr, arg);
            };
            DefaultSQExprVisitorWithArg.prototype.visitStartsWith = function (expr, arg) {
                return this.visitDefault(expr, arg);
            };
            DefaultSQExprVisitorWithArg.prototype.visitConstant = function (expr, arg) {
                return this.visitDefault(expr, arg);
            };
            DefaultSQExprVisitorWithArg.prototype.visitDateSpan = function (expr, arg) {
                return this.visitDefault(expr, arg);
            };
            DefaultSQExprVisitorWithArg.prototype.visitDateAdd = function (expr, arg) {
                return this.visitDefault(expr, arg);
            };
            DefaultSQExprVisitorWithArg.prototype.visitNow = function (expr, arg) {
                return this.visitDefault(expr, arg);
            };
            DefaultSQExprVisitorWithArg.prototype.visitDefaultValue = function (expr, arg) {
                return this.visitDefault(expr, arg);
            };
            DefaultSQExprVisitorWithArg.prototype.visitAnyValue = function (expr, arg) {
                return this.visitDefault(expr, arg);
            };
            DefaultSQExprVisitorWithArg.prototype.visitArithmetic = function (expr, arg) {
                return this.visitDefault(expr, arg);
            };
            DefaultSQExprVisitorWithArg.prototype.visitFillRule = function (expr, arg) {
                return this.visitDefault(expr, arg);
            };
            DefaultSQExprVisitorWithArg.prototype.visitResourcePackageItem = function (expr, arg) {
                return this.visitDefault(expr, arg);
            };
            DefaultSQExprVisitorWithArg.prototype.visitScopedEval = function (expr, arg) {
                return this.visitDefault(expr, arg);
            };
            DefaultSQExprVisitorWithArg.prototype.visitDefault = function (expr, arg) {
                return;
            };
            return DefaultSQExprVisitorWithArg;
        }());
        data.DefaultSQExprVisitorWithArg = DefaultSQExprVisitorWithArg;
        /** Default ISQExprVisitor implementation that others may derive from. */
        var DefaultSQExprVisitor = (function (_super) {
            __extends(DefaultSQExprVisitor, _super);
            function DefaultSQExprVisitor() {
                _super.apply(this, arguments);
            }
            return DefaultSQExprVisitor;
        }(DefaultSQExprVisitorWithArg));
        data.DefaultSQExprVisitor = DefaultSQExprVisitor;
        /** Default ISQExprVisitor implementation that implements default traversal and that others may derive from. */
        var DefaultSQExprVisitorWithTraversal = (function () {
            function DefaultSQExprVisitorWithTraversal() {
            }
            DefaultSQExprVisitorWithTraversal.prototype.visitEntity = function (expr) {
                this.visitDefault(expr);
            };
            DefaultSQExprVisitorWithTraversal.prototype.visitColumnRef = function (expr) {
                expr.source.accept(this);
            };
            DefaultSQExprVisitorWithTraversal.prototype.visitMeasureRef = function (expr) {
                expr.source.accept(this);
            };
            DefaultSQExprVisitorWithTraversal.prototype.visitAggr = function (expr) {
                expr.arg.accept(this);
            };
            DefaultSQExprVisitorWithTraversal.prototype.visitHierarchy = function (expr) {
                expr.arg.accept(this);
            };
            DefaultSQExprVisitorWithTraversal.prototype.visitHierarchyLevel = function (expr) {
                expr.arg.accept(this);
            };
            DefaultSQExprVisitorWithTraversal.prototype.visitPropertyVariationSource = function (expr) {
                expr.arg.accept(this);
            };
            DefaultSQExprVisitorWithTraversal.prototype.visitBetween = function (expr) {
                expr.arg.accept(this);
                expr.lower.accept(this);
                expr.upper.accept(this);
            };
            DefaultSQExprVisitorWithTraversal.prototype.visitIn = function (expr) {
                var args = expr.args;
                for (var i = 0, len = args.length; i < len; i++)
                    args[i].accept(this);
                var values = expr.values;
                for (var i = 0, len = values.length; i < len; i++) {
                    var valueTuple = values[i];
                    for (var j = 0, jlen = valueTuple.length; j < jlen; j++)
                        valueTuple[j].accept(this);
                }
            };
            DefaultSQExprVisitorWithTraversal.prototype.visitAnd = function (expr) {
                expr.left.accept(this);
                expr.right.accept(this);
            };
            DefaultSQExprVisitorWithTraversal.prototype.visitOr = function (expr) {
                expr.left.accept(this);
                expr.right.accept(this);
            };
            DefaultSQExprVisitorWithTraversal.prototype.visitCompare = function (expr) {
                expr.left.accept(this);
                expr.right.accept(this);
            };
            DefaultSQExprVisitorWithTraversal.prototype.visitContains = function (expr) {
                expr.left.accept(this);
                expr.right.accept(this);
            };
            DefaultSQExprVisitorWithTraversal.prototype.visitExists = function (expr) {
                expr.arg.accept(this);
            };
            DefaultSQExprVisitorWithTraversal.prototype.visitNot = function (expr) {
                expr.arg.accept(this);
            };
            DefaultSQExprVisitorWithTraversal.prototype.visitStartsWith = function (expr) {
                expr.left.accept(this);
                expr.right.accept(this);
            };
            DefaultSQExprVisitorWithTraversal.prototype.visitConstant = function (expr) {
                this.visitDefault(expr);
            };
            DefaultSQExprVisitorWithTraversal.prototype.visitDateSpan = function (expr) {
                expr.arg.accept(this);
            };
            DefaultSQExprVisitorWithTraversal.prototype.visitDateAdd = function (expr) {
                expr.arg.accept(this);
            };
            DefaultSQExprVisitorWithTraversal.prototype.visitNow = function (expr) {
                this.visitDefault(expr);
            };
            DefaultSQExprVisitorWithTraversal.prototype.visitDefaultValue = function (expr) {
                this.visitDefault(expr);
            };
            DefaultSQExprVisitorWithTraversal.prototype.visitAnyValue = function (expr) {
                this.visitDefault(expr);
            };
            DefaultSQExprVisitorWithTraversal.prototype.visitArithmetic = function (expr) {
                expr.left.accept(this);
                expr.right.accept(this);
            };
            DefaultSQExprVisitorWithTraversal.prototype.visitFillRule = function (expr) {
                expr.input.accept(this);
                var rule = expr.rule, gradient2 = rule.linearGradient2, gradient3 = rule.linearGradient3;
                if (gradient2) {
                    this.visitLinearGradient2(gradient2);
                }
                if (gradient3) {
                    this.visitLinearGradient3(gradient3);
                }
            };
            DefaultSQExprVisitorWithTraversal.prototype.visitLinearGradient2 = function (gradient2) {
                debug.assertValue(gradient2, 'gradient2');
                this.visitFillRuleStop(gradient2.min);
                this.visitFillRuleStop(gradient2.max);
            };
            DefaultSQExprVisitorWithTraversal.prototype.visitLinearGradient3 = function (gradient3) {
                debug.assertValue(gradient3, 'gradient3');
                this.visitFillRuleStop(gradient3.min);
                this.visitFillRuleStop(gradient3.mid);
                this.visitFillRuleStop(gradient3.max);
            };
            DefaultSQExprVisitorWithTraversal.prototype.visitResourcePackageItem = function (expr) {
                this.visitDefault(expr);
            };
            DefaultSQExprVisitorWithTraversal.prototype.visitScopedEval = function (expr) {
                expr.expression.accept(this);
                for (var _i = 0, _a = expr.scope; _i < _a.length; _i++) {
                    var scopeExpr = _a[_i];
                    scopeExpr.accept(this);
                }
            };
            DefaultSQExprVisitorWithTraversal.prototype.visitDefault = function (expr) {
                return;
            };
            DefaultSQExprVisitorWithTraversal.prototype.visitFillRuleStop = function (stop) {
                debug.assertValue(stop, 'stop');
                stop.color.accept(this);
                var value = stop.value;
                if (value)
                    value.accept(this);
            };
            return DefaultSQExprVisitorWithTraversal;
        }());
        data.DefaultSQExprVisitorWithTraversal = DefaultSQExprVisitorWithTraversal;
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
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
    function createEnumType(members) {
        return new EnumType(members);
    }
    powerbi.createEnumType = createEnumType;
    var EnumType = (function () {
        function EnumType(allMembers) {
            debug.assertValue(allMembers, 'allMembers');
            this.allMembers = allMembers;
        }
        EnumType.prototype.members = function (validMembers) {
            var allMembers = this.allMembers;
            if (!validMembers)
                return allMembers;
            var membersToReturn = [];
            for (var _i = 0, allMembers_1 = allMembers; _i < allMembers_1.length; _i++) {
                var member = allMembers_1[_i];
                if (_.contains(validMembers, member.value))
                    membersToReturn.push(member);
            }
            return membersToReturn;
        };
        return EnumType;
    }());
})(powerbi || (powerbi = {}));
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
    var FillSolidColorTypeDescriptor;
    (function (FillSolidColorTypeDescriptor) {
        /** Gets a value indicating whether the descriptor is nullable or not. */
        function nullable(descriptor) {
            debug.assertValue(descriptor, 'descriptor');
            if (descriptor === true)
                return false;
            var advancedDescriptor = descriptor;
            return !!advancedDescriptor.nullable;
        }
        FillSolidColorTypeDescriptor.nullable = nullable;
    })(FillSolidColorTypeDescriptor = powerbi.FillSolidColorTypeDescriptor || (powerbi.FillSolidColorTypeDescriptor = {}));
})(powerbi || (powerbi = {}));
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
    var ImageDefinition;
    (function (ImageDefinition) {
        ImageDefinition.urlType = { misc: { imageUrl: true } };
    })(ImageDefinition = powerbi.ImageDefinition || (powerbi.ImageDefinition = {}));
})(powerbi || (powerbi = {}));
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
    var StructuralTypeDescriptor;
    (function (StructuralTypeDescriptor) {
        function isValid(type) {
            debug.assertValue(type, 'type');
            if (type.fill ||
                type.fillRule ||
                type.filter ||
                type.expression ||
                type.image ||
                type.paragraphs) {
                return true;
            }
            return false;
        }
        StructuralTypeDescriptor.isValid = isValid;
    })(StructuralTypeDescriptor = powerbi.StructuralTypeDescriptor || (powerbi.StructuralTypeDescriptor = {}));
})(powerbi || (powerbi = {}));
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
    var EnumExtensions = jsCommon.EnumExtensions;
    /** Describes a data value type, including a primitive type and extended type if any (derived from data category). */
    var ValueType = (function () {
        /** Do not call the ValueType constructor directly. Use the ValueType.fromXXX methods. */
        function ValueType(type, category, enumType) {
            debug.assert((!!type && ExtendedType[type] != null) || type === ExtendedType.Null, 'type');
            debug.assert(!!category || category === null, 'category');
            debug.assert(type !== ExtendedType.Enumeration || !!enumType, 'enumType');
            this.underlyingType = type;
            this.category = category;
            if (EnumExtensions.hasFlag(type, ExtendedType.Temporal)) {
                this.temporalType = new TemporalType(type);
            }
            if (EnumExtensions.hasFlag(type, ExtendedType.Geography)) {
                this.geographyType = new GeographyType(type);
            }
            if (EnumExtensions.hasFlag(type, ExtendedType.Miscellaneous)) {
                this.miscType = new MiscellaneousType(type);
            }
            if (EnumExtensions.hasFlag(type, ExtendedType.Formatting)) {
                this.formattingType = new FormattingType(type);
            }
            if (EnumExtensions.hasFlag(type, ExtendedType.Enumeration)) {
                this.enumType = enumType;
            }
            if (EnumExtensions.hasFlag(type, ExtendedType.Scripting)) {
                this.scriptingType = new ScriptType(type);
            }
        }
        /** Creates or retrieves a ValueType object based on the specified ValueTypeDescriptor. */
        ValueType.fromDescriptor = function (descriptor) {
            descriptor = descriptor || {};
            // Simplified primitive types
            if (descriptor.text)
                return ValueType.fromExtendedType(ExtendedType.Text);
            if (descriptor.integer)
                return ValueType.fromExtendedType(ExtendedType.Integer);
            if (descriptor.numeric)
                return ValueType.fromExtendedType(ExtendedType.Double);
            if (descriptor.bool)
                return ValueType.fromExtendedType(ExtendedType.Boolean);
            if (descriptor.dateTime)
                return ValueType.fromExtendedType(ExtendedType.DateTime);
            if (descriptor.duration)
                return ValueType.fromExtendedType(ExtendedType.Duration);
            if (descriptor.binary)
                return ValueType.fromExtendedType(ExtendedType.Binary);
            if (descriptor.none)
                return ValueType.fromExtendedType(ExtendedType.None);
            // Extended types
            if (descriptor.scripting) {
                if (descriptor.scripting.source)
                    return ValueType.fromExtendedType(ExtendedType.ScriptSource);
            }
            if (descriptor.enumeration)
                return ValueType.fromEnum(descriptor.enumeration);
            if (descriptor.temporal) {
                if (descriptor.temporal.year)
                    return ValueType.fromExtendedType(ExtendedType.Year_Integer);
                if (descriptor.temporal.month)
                    return ValueType.fromExtendedType(ExtendedType.Month_Integer);
            }
            if (descriptor.geography) {
                if (descriptor.geography.address)
                    return ValueType.fromExtendedType(ExtendedType.Address);
                if (descriptor.geography.city)
                    return ValueType.fromExtendedType(ExtendedType.City);
                if (descriptor.geography.continent)
                    return ValueType.fromExtendedType(ExtendedType.Continent);
                if (descriptor.geography.country)
                    return ValueType.fromExtendedType(ExtendedType.Country);
                if (descriptor.geography.county)
                    return ValueType.fromExtendedType(ExtendedType.County);
                if (descriptor.geography.region)
                    return ValueType.fromExtendedType(ExtendedType.Region);
                if (descriptor.geography.postalCode)
                    return ValueType.fromExtendedType(ExtendedType.PostalCode_Text);
                if (descriptor.geography.stateOrProvince)
                    return ValueType.fromExtendedType(ExtendedType.StateOrProvince);
                if (descriptor.geography.place)
                    return ValueType.fromExtendedType(ExtendedType.Place);
                if (descriptor.geography.latitude)
                    return ValueType.fromExtendedType(ExtendedType.Latitude_Double);
                if (descriptor.geography.longitude)
                    return ValueType.fromExtendedType(ExtendedType.Longitude_Double);
            }
            if (descriptor.misc) {
                if (descriptor.misc.image)
                    return ValueType.fromExtendedType(ExtendedType.Image);
                if (descriptor.misc.imageUrl)
                    return ValueType.fromExtendedType(ExtendedType.ImageUrl);
                if (descriptor.misc.webUrl)
                    return ValueType.fromExtendedType(ExtendedType.WebUrl);
            }
            if (descriptor.formatting) {
                if (descriptor.formatting.color)
                    return ValueType.fromExtendedType(ExtendedType.Color);
                if (descriptor.formatting.formatString)
                    return ValueType.fromExtendedType(ExtendedType.FormatString);
                if (descriptor.formatting.alignment)
                    return ValueType.fromExtendedType(ExtendedType.Alignment);
                if (descriptor.formatting.labelDisplayUnits)
                    return ValueType.fromExtendedType(ExtendedType.LabelDisplayUnits);
                if (descriptor.formatting.fontSize)
                    return ValueType.fromExtendedType(ExtendedType.FontSize);
                if (descriptor.formatting.labelDensity)
                    return ValueType.fromExtendedType(ExtendedType.LabelDensity);
            }
            if (descriptor.extendedType) {
                return ValueType.fromExtendedType(descriptor.extendedType);
            }
            return ValueType.fromExtendedType(ExtendedType.Null);
        };
        /** Advanced: Generally use fromDescriptor instead. Creates or retrieves a ValueType object for the specified ExtendedType. */
        ValueType.fromExtendedType = function (extendedType) {
            extendedType = extendedType || ExtendedType.Null;
            var primitiveType = getPrimitiveType(extendedType), category = getCategoryFromExtendedType(extendedType);
            debug.assert(primitiveType !== PrimitiveType.Null || extendedType === ExtendedType.Null, 'Cannot create ValueType for abstract extended type. Consider using fromDescriptor instead.');
            return ValueType.fromPrimitiveTypeAndCategory(primitiveType, category);
        };
        /** Creates or retrieves a ValueType object for the specified PrimitiveType and data category. */
        ValueType.fromPrimitiveTypeAndCategory = function (primitiveType, category) {
            primitiveType = primitiveType || PrimitiveType.Null;
            category = category || null;
            var id = primitiveType.toString();
            if (category)
                id += '|' + category;
            return ValueType.typeCache[id] || (ValueType.typeCache[id] = new ValueType(toExtendedType(primitiveType, category), category));
        };
        /** Creates a ValueType to describe the given IEnumType. */
        ValueType.fromEnum = function (enumType) {
            debug.assertValue(enumType, 'enumType');
            return new ValueType(ExtendedType.Enumeration, null, enumType);
        };
        /** Determines if the specified type is compatible from at least one of the otherTypes. */
        ValueType.isCompatibleTo = function (type, otherTypes) {
            debug.assertValue(type, 'type');
            debug.assertValue(otherTypes, 'otherTypes');
            var valueType = ValueType.fromDescriptor(type);
            for (var _i = 0, otherTypes_1 = otherTypes; _i < otherTypes_1.length; _i++) {
                var otherType = otherTypes_1[_i];
                var otherValueType = ValueType.fromDescriptor(otherType);
                if (otherValueType.isCompatibleFrom(valueType))
                    return true;
            }
            return false;
        };
        /** Determines if the instance ValueType is convertable from the 'other' ValueType. */
        ValueType.prototype.isCompatibleFrom = function (other) {
            debug.assertValue(other, 'other');
            var otherPrimitiveType = other.primitiveType;
            if (this === other ||
                this.primitiveType === otherPrimitiveType ||
                otherPrimitiveType === PrimitiveType.Null)
                return true;
            return false;
        };
        Object.defineProperty(ValueType.prototype, "primitiveType", {
            /** Gets the exact primitive type of this ValueType. */
            get: function () {
                return getPrimitiveType(this.underlyingType);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ValueType.prototype, "extendedType", {
            /** Gets the exact extended type of this ValueType. */
            get: function () {
                return this.underlyingType;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ValueType.prototype, "categoryString", {
            /** Gets the data category string (if any) for this ValueType. */
            get: function () {
                return this.category;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ValueType.prototype, "text", {
            // Simplified primitive types
            /** Indicates whether the type represents text values. */
            get: function () {
                return this.primitiveType === PrimitiveType.Text;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ValueType.prototype, "numeric", {
            /** Indicates whether the type represents any numeric value. */
            get: function () {
                return EnumExtensions.hasFlag(this.underlyingType, ExtendedType.Numeric);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ValueType.prototype, "integer", {
            /** Indicates whether the type represents integer numeric values. */
            get: function () {
                return this.primitiveType === PrimitiveType.Integer;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ValueType.prototype, "bool", {
            /** Indicates whether the type represents Boolean values. */
            get: function () {
                return this.primitiveType === PrimitiveType.Boolean;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ValueType.prototype, "dateTime", {
            /** Indicates whether the type represents any date/time values. */
            get: function () {
                return this.primitiveType === PrimitiveType.DateTime ||
                    this.primitiveType === PrimitiveType.Date ||
                    this.primitiveType === PrimitiveType.Time;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ValueType.prototype, "duration", {
            /** Indicates whether the type represents duration values. */
            get: function () {
                return this.primitiveType === PrimitiveType.Duration;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ValueType.prototype, "binary", {
            /** Indicates whether the type represents binary values. */
            get: function () {
                return this.primitiveType === PrimitiveType.Binary;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ValueType.prototype, "none", {
            /** Indicates whether the type represents none values. */
            get: function () {
                return this.primitiveType === PrimitiveType.None;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ValueType.prototype, "temporal", {
            // Extended types
            /** Returns an object describing temporal values represented by the type, if it represents a temporal type. */
            get: function () {
                return this.temporalType;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ValueType.prototype, "geography", {
            /** Returns an object describing geographic values represented by the type, if it represents a geographic type. */
            get: function () {
                return this.geographyType;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ValueType.prototype, "misc", {
            /** Returns an object describing the specific values represented by the type, if it represents a miscellaneous extended type. */
            get: function () {
                return this.miscType;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ValueType.prototype, "formatting", {
            /** Returns an object describing the formatting values represented by the type, if it represents a formatting type. */
            get: function () {
                return this.formattingType;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ValueType.prototype, "enum", {
            /** Returns an object describing the enum values represented by the type, if it represents an enumeration type. */
            get: function () {
                return this.enumType;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ValueType.prototype, "scripting", {
            get: function () {
                return this.scriptingType;
            },
            enumerable: true,
            configurable: true
        });
        ValueType.typeCache = {};
        return ValueType;
    }());
    powerbi.ValueType = ValueType;
    var ScriptType = (function () {
        function ScriptType(type) {
            debug.assert(!!type && EnumExtensions.hasFlag(type, ExtendedType.Scripting), 'type');
            this.underlyingType = type;
        }
        Object.defineProperty(ScriptType.prototype, "source", {
            get: function () {
                return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.ScriptSource);
            },
            enumerable: true,
            configurable: true
        });
        return ScriptType;
    }());
    powerbi.ScriptType = ScriptType;
    var TemporalType = (function () {
        function TemporalType(type) {
            debug.assert(!!type && EnumExtensions.hasFlag(type, ExtendedType.Temporal), 'type');
            this.underlyingType = type;
        }
        Object.defineProperty(TemporalType.prototype, "year", {
            get: function () {
                return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Year);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TemporalType.prototype, "month", {
            get: function () {
                return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Month);
            },
            enumerable: true,
            configurable: true
        });
        return TemporalType;
    }());
    powerbi.TemporalType = TemporalType;
    var GeographyType = (function () {
        function GeographyType(type) {
            debug.assert(!!type && EnumExtensions.hasFlag(type, ExtendedType.Geography), 'type');
            this.underlyingType = type;
        }
        Object.defineProperty(GeographyType.prototype, "address", {
            get: function () {
                return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Address);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GeographyType.prototype, "city", {
            get: function () {
                return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.City);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GeographyType.prototype, "continent", {
            get: function () {
                return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Continent);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GeographyType.prototype, "country", {
            get: function () {
                return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Country);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GeographyType.prototype, "county", {
            get: function () {
                return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.County);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GeographyType.prototype, "region", {
            get: function () {
                return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Region);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GeographyType.prototype, "postalCode", {
            get: function () {
                return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.PostalCode);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GeographyType.prototype, "stateOrProvince", {
            get: function () {
                return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.StateOrProvince);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GeographyType.prototype, "place", {
            get: function () {
                return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Place);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GeographyType.prototype, "latitude", {
            get: function () {
                return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Latitude);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GeographyType.prototype, "longitude", {
            get: function () {
                return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Longitude);
            },
            enumerable: true,
            configurable: true
        });
        return GeographyType;
    }());
    powerbi.GeographyType = GeographyType;
    var MiscellaneousType = (function () {
        function MiscellaneousType(type) {
            debug.assert(!!type && EnumExtensions.hasFlag(type, ExtendedType.Miscellaneous), 'type');
            this.underlyingType = type;
        }
        Object.defineProperty(MiscellaneousType.prototype, "image", {
            get: function () {
                return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Image);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MiscellaneousType.prototype, "imageUrl", {
            get: function () {
                return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.ImageUrl);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MiscellaneousType.prototype, "webUrl", {
            get: function () {
                return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.WebUrl);
            },
            enumerable: true,
            configurable: true
        });
        return MiscellaneousType;
    }());
    powerbi.MiscellaneousType = MiscellaneousType;
    var FormattingType = (function () {
        function FormattingType(type) {
            debug.assert(!!type && EnumExtensions.hasFlag(type, ExtendedType.Formatting), 'type');
            this.underlyingType = type;
        }
        Object.defineProperty(FormattingType.prototype, "color", {
            get: function () {
                return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Color);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormattingType.prototype, "formatString", {
            get: function () {
                return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.FormatString);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormattingType.prototype, "alignment", {
            get: function () {
                return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Alignment);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormattingType.prototype, "labelDisplayUnits", {
            get: function () {
                return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.LabelDisplayUnits);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormattingType.prototype, "fontSize", {
            get: function () {
                return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.FontSize);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormattingType.prototype, "labelDensity", {
            get: function () {
                return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.LabelDensity);
            },
            enumerable: true,
            configurable: true
        });
        return FormattingType;
    }());
    powerbi.FormattingType = FormattingType;
    /** Defines primitive value types. Must be consistent with types defined by server conceptual schema. */
    (function (PrimitiveType) {
        PrimitiveType[PrimitiveType["Null"] = 0] = "Null";
        PrimitiveType[PrimitiveType["Text"] = 1] = "Text";
        PrimitiveType[PrimitiveType["Decimal"] = 2] = "Decimal";
        PrimitiveType[PrimitiveType["Double"] = 3] = "Double";
        PrimitiveType[PrimitiveType["Integer"] = 4] = "Integer";
        PrimitiveType[PrimitiveType["Boolean"] = 5] = "Boolean";
        PrimitiveType[PrimitiveType["Date"] = 6] = "Date";
        PrimitiveType[PrimitiveType["DateTime"] = 7] = "DateTime";
        PrimitiveType[PrimitiveType["DateTimeZone"] = 8] = "DateTimeZone";
        PrimitiveType[PrimitiveType["Time"] = 9] = "Time";
        PrimitiveType[PrimitiveType["Duration"] = 10] = "Duration";
        PrimitiveType[PrimitiveType["Binary"] = 11] = "Binary";
        PrimitiveType[PrimitiveType["None"] = 12] = "None";
    })(powerbi.PrimitiveType || (powerbi.PrimitiveType = {}));
    var PrimitiveType = powerbi.PrimitiveType;
    /** Defines extended value types, which include primitive types and known data categories constrained to expected primitive types. */
    (function (ExtendedType) {
        // Flags (1 << 8-15 range [0xFF00])
        // Important: Enum members must be declared before they are used in TypeScript.
        ExtendedType[ExtendedType["Numeric"] = 256] = "Numeric";
        ExtendedType[ExtendedType["Temporal"] = 512] = "Temporal";
        ExtendedType[ExtendedType["Geography"] = 1024] = "Geography";
        ExtendedType[ExtendedType["Miscellaneous"] = 2048] = "Miscellaneous";
        ExtendedType[ExtendedType["Formatting"] = 4096] = "Formatting";
        ExtendedType[ExtendedType["Scripting"] = 8192] = "Scripting";
        // Primitive types (0-255 range [0xFF] | flags)
        // The member names and base values must match those in PrimitiveType.
        ExtendedType[ExtendedType["Null"] = 0] = "Null";
        ExtendedType[ExtendedType["Text"] = 1] = "Text";
        ExtendedType[ExtendedType["Decimal"] = 258] = "Decimal";
        ExtendedType[ExtendedType["Double"] = 259] = "Double";
        ExtendedType[ExtendedType["Integer"] = 260] = "Integer";
        ExtendedType[ExtendedType["Boolean"] = 5] = "Boolean";
        ExtendedType[ExtendedType["Date"] = 518] = "Date";
        ExtendedType[ExtendedType["DateTime"] = 519] = "DateTime";
        ExtendedType[ExtendedType["DateTimeZone"] = 520] = "DateTimeZone";
        ExtendedType[ExtendedType["Time"] = 521] = "Time";
        ExtendedType[ExtendedType["Duration"] = 10] = "Duration";
        ExtendedType[ExtendedType["Binary"] = 11] = "Binary";
        ExtendedType[ExtendedType["None"] = 12] = "None";
        // Extended types (0-32767 << 16 range [0xFFFF0000] | corresponding primitive type | flags)
        // Temporal
        ExtendedType[ExtendedType["Year"] = 66048] = "Year";
        ExtendedType[ExtendedType["Year_Text"] = 66049] = "Year_Text";
        ExtendedType[ExtendedType["Year_Integer"] = 66308] = "Year_Integer";
        ExtendedType[ExtendedType["Year_Date"] = 66054] = "Year_Date";
        ExtendedType[ExtendedType["Year_DateTime"] = 66055] = "Year_DateTime";
        ExtendedType[ExtendedType["Month"] = 131584] = "Month";
        ExtendedType[ExtendedType["Month_Text"] = 131585] = "Month_Text";
        ExtendedType[ExtendedType["Month_Integer"] = 131844] = "Month_Integer";
        ExtendedType[ExtendedType["Month_Date"] = 131590] = "Month_Date";
        ExtendedType[ExtendedType["Month_DateTime"] = 131591] = "Month_DateTime";
        // Geography
        ExtendedType[ExtendedType["Address"] = 6554625] = "Address";
        ExtendedType[ExtendedType["City"] = 6620161] = "City";
        ExtendedType[ExtendedType["Continent"] = 6685697] = "Continent";
        ExtendedType[ExtendedType["Country"] = 6751233] = "Country";
        ExtendedType[ExtendedType["County"] = 6816769] = "County";
        ExtendedType[ExtendedType["Region"] = 6882305] = "Region";
        ExtendedType[ExtendedType["PostalCode"] = 6947840] = "PostalCode";
        ExtendedType[ExtendedType["PostalCode_Text"] = 6947841] = "PostalCode_Text";
        ExtendedType[ExtendedType["PostalCode_Integer"] = 6948100] = "PostalCode_Integer";
        ExtendedType[ExtendedType["StateOrProvince"] = 7013377] = "StateOrProvince";
        ExtendedType[ExtendedType["Place"] = 7078913] = "Place";
        ExtendedType[ExtendedType["Latitude"] = 7144448] = "Latitude";
        ExtendedType[ExtendedType["Latitude_Decimal"] = 7144706] = "Latitude_Decimal";
        ExtendedType[ExtendedType["Latitude_Double"] = 7144707] = "Latitude_Double";
        ExtendedType[ExtendedType["Longitude"] = 7209984] = "Longitude";
        ExtendedType[ExtendedType["Longitude_Decimal"] = 7210242] = "Longitude_Decimal";
        ExtendedType[ExtendedType["Longitude_Double"] = 7210243] = "Longitude_Double";
        // Miscellaneous
        ExtendedType[ExtendedType["Image"] = 13109259] = "Image";
        ExtendedType[ExtendedType["ImageUrl"] = 13174785] = "ImageUrl";
        ExtendedType[ExtendedType["WebUrl"] = 13240321] = "WebUrl";
        // Formatting
        ExtendedType[ExtendedType["Color"] = 19664897] = "Color";
        ExtendedType[ExtendedType["FormatString"] = 19730433] = "FormatString";
        ExtendedType[ExtendedType["Alignment"] = 20058113] = "Alignment";
        ExtendedType[ExtendedType["LabelDisplayUnits"] = 20123649] = "LabelDisplayUnits";
        ExtendedType[ExtendedType["FontSize"] = 20189443] = "FontSize";
        ExtendedType[ExtendedType["LabelDensity"] = 20254979] = "LabelDensity";
        // Enumeration
        ExtendedType[ExtendedType["Enumeration"] = 26214401] = "Enumeration";
        // Scripting
        ExtendedType[ExtendedType["ScriptSource"] = 32776193] = "ScriptSource";
    })(powerbi.ExtendedType || (powerbi.ExtendedType = {}));
    var ExtendedType = powerbi.ExtendedType;
    var PrimitiveTypeMask = 0xFF;
    var PrimitiveTypeWithFlagsMask = 0xFFFF;
    var PrimitiveTypeFlagsExcludedMask = 0xFFFF0000;
    function getPrimitiveType(extendedType) {
        return extendedType & PrimitiveTypeMask;
    }
    function isPrimitiveType(extendedType) {
        return (extendedType & PrimitiveTypeWithFlagsMask) === extendedType;
    }
    function getCategoryFromExtendedType(extendedType) {
        if (isPrimitiveType(extendedType))
            return null;
        var category = ExtendedType[extendedType];
        if (category) {
            // Check for ExtendedType declaration without a primitive type.
            // If exists, use it as category (e.g. Longitude rather than Longitude_Double)
            // Otherwise use the ExtendedType declaration with a primitive type (e.g. Address)
            var delimIdx = category.lastIndexOf('_');
            if (delimIdx > 0) {
                var baseCategory = category.slice(0, delimIdx);
                if (ExtendedType[baseCategory]) {
                    debug.assert((ExtendedType[baseCategory] & PrimitiveTypeFlagsExcludedMask) === (extendedType & PrimitiveTypeFlagsExcludedMask), 'Unexpected value for ExtendedType base member of ' + extendedType);
                    category = baseCategory;
                }
            }
        }
        return category || null;
    }
    function toExtendedType(primitiveType, category) {
        var primitiveString = PrimitiveType[primitiveType];
        var t = ExtendedType[primitiveString];
        if (t == null) {
            debug.assertFail('Unexpected primitiveType ' + primitiveType);
            t = ExtendedType.Null;
        }
        if (primitiveType && category) {
            var categoryType = ExtendedType[category];
            if (categoryType) {
                var categoryPrimitiveType = getPrimitiveType(categoryType);
                if (categoryPrimitiveType === PrimitiveType.Null) {
                    // Category supports multiple primitive types, check if requested primitive type is supported
                    // (note: important to use t here rather than primitiveType as it may include primitive type flags)
                    categoryType = t | categoryType;
                    if (ExtendedType[categoryType]) {
                        debug.assert(ExtendedType[categoryType] === (category + '_' + primitiveString), 'Unexpected name for ExtendedType member ' + categoryType);
                        t = categoryType;
                    }
                }
                else if (categoryPrimitiveType === primitiveType) {
                    // Primitive type matches the single supported type for the category
                    t = categoryType;
                }
            }
        }
        return t;
    }
    function matchesExtendedTypeWithAnyPrimitive(a, b) {
        return (a & PrimitiveTypeFlagsExcludedMask) === (b & PrimitiveTypeFlagsExcludedMask);
    }
})(powerbi || (powerbi = {}));
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
    var data;
    (function (data) {
        (function (DataShapeBindingLimitType) {
            DataShapeBindingLimitType[DataShapeBindingLimitType["Top"] = 0] = "Top";
            DataShapeBindingLimitType[DataShapeBindingLimitType["First"] = 1] = "First";
            DataShapeBindingLimitType[DataShapeBindingLimitType["Last"] = 2] = "Last";
            DataShapeBindingLimitType[DataShapeBindingLimitType["Sample"] = 3] = "Sample";
            DataShapeBindingLimitType[DataShapeBindingLimitType["Bottom"] = 4] = "Bottom";
        })(data.DataShapeBindingLimitType || (data.DataShapeBindingLimitType = {}));
        var DataShapeBindingLimitType = data.DataShapeBindingLimitType;
        (function (SubtotalType) {
            SubtotalType[SubtotalType["None"] = 0] = "None";
            SubtotalType[SubtotalType["Before"] = 1] = "Before";
            SubtotalType[SubtotalType["After"] = 2] = "After";
        })(data.SubtotalType || (data.SubtotalType = {}));
        var SubtotalType = data.SubtotalType;
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
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
    var data;
    (function (data) {
        var DataShapeBindingDataReduction;
        (function (DataShapeBindingDataReduction) {
            function createFrom(reduction) {
                if (!reduction)
                    return;
                var result;
                if (reduction.top) {
                    result = {
                        Top: {}
                    };
                    if (reduction.top.count)
                        result.Top.Count = reduction.top.count;
                }
                if (reduction.bottom) {
                    result = {
                        Bottom: {}
                    };
                    if (reduction.bottom.count)
                        result.Bottom.Count = reduction.bottom.count;
                }
                if (reduction.sample) {
                    result = {
                        Sample: {}
                    };
                    if (reduction.sample.count)
                        result.Sample.Count = reduction.sample.count;
                }
                if (reduction.window) {
                    result = {
                        Window: {}
                    };
                    if (reduction.window.count)
                        result.Window.Count = reduction.window.count;
                }
                return result;
            }
            DataShapeBindingDataReduction.createFrom = createFrom;
        })(DataShapeBindingDataReduction = data.DataShapeBindingDataReduction || (data.DataShapeBindingDataReduction = {}));
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
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
    var data;
    (function (data) {
        /** Represents a federated conceptual schema. */
        var FederatedConceptualSchema = (function () {
            function FederatedConceptualSchema(options) {
                debug.assertValue(options, 'options');
                this.schemas = options.schemas;
                if (options.links)
                    this.links = options.links;
            }
            FederatedConceptualSchema.prototype.schema = function (name) {
                return this.schemas[name];
            };
            return FederatedConceptualSchema;
        }());
        data.FederatedConceptualSchema = FederatedConceptualSchema;
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
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
    var data;
    (function (data_1) {
        var Selector;
        (function (Selector) {
            function filterFromSelector(selectors, isNot) {
                if (_.isEmpty(selectors))
                    return;
                var exprs = [];
                for (var i = 0, ilen = selectors.length; i < ilen; i++) {
                    var identity = selectors[i];
                    var data_2 = identity.data;
                    var exprToAdd = undefined;
                    if (data_2 && data_2.length) {
                        for (var j = 0, jlen = data_2.length; j < jlen; j++) {
                            exprToAdd = data_1.SQExprBuilder.and(exprToAdd, identity.data[j].expr);
                        }
                    }
                    if (exprToAdd)
                        exprs.push(exprToAdd);
                }
                if (!_.isEmpty(exprs))
                    return powerbi.DataViewScopeIdentity.filterFromExprs(exprs, isNot);
            }
            Selector.filterFromSelector = filterFromSelector;
            function matchesData(selector, identities) {
                debug.assertValue(selector, 'selector');
                debug.assertValue(selector.data, 'selector.data');
                debug.assertValue(identities, 'identities');
                var selectorData = selector.data;
                if (selectorData.length !== identities.length)
                    return false;
                for (var i = 0, len = selectorData.length; i < len; i++) {
                    var dataItem = selector.data[i];
                    var selectorDataItem = dataItem;
                    if (selectorDataItem.expr) {
                        if (!powerbi.DataViewScopeIdentity.equals(selectorDataItem, identities[i]))
                            return false;
                    }
                    else {
                        if (!data_1.DataViewScopeWildcard.matches(dataItem, identities[i]))
                            return false;
                    }
                }
                return true;
            }
            Selector.matchesData = matchesData;
            function matchesKeys(selector, keysList) {
                debug.assertValue(selector, 'selector');
                debug.assertValue(selector.data, 'selector.data');
                debug.assertValue(keysList, 'keysList');
                var selectorData = selector.data, selectorDataLength = selectorData.length;
                if (selectorDataLength !== keysList.length)
                    return false;
                for (var i = 0; i < selectorDataLength; i++) {
                    var selectorDataItem = selector.data[i], selectorDataExprs = void 0;
                    if (selectorDataItem.expr) {
                        selectorDataExprs = data_1.ScopeIdentityExtractor.getKeys(selectorDataItem.expr);
                    }
                    else if (selectorDataItem.exprs) {
                        selectorDataExprs = selectorDataItem.exprs;
                    }
                    else {
                        // In case DataViewRoleWildcard
                        return false;
                    }
                    if (!selectorDataExprs)
                        continue;
                    if (!data_1.SQExprUtils.sequenceEqual(keysList[i], selectorDataExprs))
                        return false;
                }
                return true;
            }
            Selector.matchesKeys = matchesKeys;
            /** Determines whether two selectors are equal. */
            function equals(x, y) {
                // Normalize falsy to null
                x = x || null;
                y = y || null;
                if (x === y)
                    return true;
                if (!x !== !y)
                    return false;
                debug.assertValue(x, 'x');
                debug.assertValue(y, 'y');
                if (x.id !== y.id)
                    return false;
                if (x.metadata !== y.metadata)
                    return false;
                if (!equalsDataArray(x.data, y.data))
                    return false;
                return true;
            }
            Selector.equals = equals;
            function equalsDataArray(x, y) {
                // Normalize falsy to null
                x = x || null;
                y = y || null;
                if (x === y)
                    return true;
                if (!x !== !y)
                    return false;
                if (x.length !== y.length)
                    return false;
                for (var i = 0, len = x.length; i < len; i++) {
                    if (!equalsData(x[i], y[i]))
                        return false;
                }
                return true;
            }
            function equalsData(x, y) {
                if (!x.expr && y.expr) {
                    // TODO: We need to also check wildcard selectors too (once that's supported/figured out).
                    return false;
                }
                return powerbi.DataViewScopeIdentity.equals(x, y);
            }
            function getKey(selector) {
                var toStringify = {};
                if (selector.data) {
                    var data_3 = [];
                    for (var i = 0, ilen = selector.data.length; i < ilen; i++) {
                        data_3.push(selector.data[i].key);
                    }
                    toStringify.data = data_3;
                }
                if (selector.metadata)
                    toStringify.metadata = selector.metadata;
                if (selector.id)
                    toStringify.id = selector.id;
                return JSON.stringify(toStringify);
            }
            Selector.getKey = getKey;
            function containsWildcard(selector) {
                debug.assertValue(selector, 'selector');
                var dataItems = selector.data;
                if (!dataItems)
                    return false;
                for (var _i = 0, dataItems_1 = dataItems; _i < dataItems_1.length; _i++) {
                    var dataItem = dataItems_1[_i];
                    var wildCard = dataItem;
                    if (wildCard.exprs || wildCard.roles)
                        return true;
                }
                return false;
            }
            Selector.containsWildcard = containsWildcard;
            function hasRoleWildcard(selector) {
                debug.assertValue(selector, 'selector');
                var dataItems = selector.data;
                if (_.isEmpty(dataItems))
                    return false;
                for (var _i = 0, dataItems_2 = dataItems; _i < dataItems_2.length; _i++) {
                    var dataItem = dataItems_2[_i];
                    if (isRoleWildcard(dataItem))
                        return true;
                }
                return false;
            }
            Selector.hasRoleWildcard = hasRoleWildcard;
            function isRoleWildcard(dataItem) {
                return !_.isEmpty(dataItem.roles);
            }
            Selector.isRoleWildcard = isRoleWildcard;
        })(Selector = data_1.Selector || (data_1.Selector = {}));
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
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
    var data;
    (function (data) {
        (function (EntitySourceType) {
            EntitySourceType[EntitySourceType["Table"] = 0] = "Table";
            EntitySourceType[EntitySourceType["Pod"] = 1] = "Pod";
        })(data.EntitySourceType || (data.EntitySourceType = {}));
        var EntitySourceType = data.EntitySourceType;
        function getArithmeticOperatorName(arithmeticOperatorKind) {
            switch (arithmeticOperatorKind) {
                case 0 /* Add */:
                    return "Add";
                case 1 /* Subtract */:
                    return "Subtract";
                case 2 /* Multiply */:
                    return "Multiply";
                case 3 /* Divide */:
                    return "Divide";
            }
            throw new Error('Unexpected ArithmeticOperatorKind: ' + arithmeticOperatorKind);
        }
        data.getArithmeticOperatorName = getArithmeticOperatorName;
        (function (TimeUnit) {
            TimeUnit[TimeUnit["Day"] = 0] = "Day";
            TimeUnit[TimeUnit["Week"] = 1] = "Week";
            TimeUnit[TimeUnit["Month"] = 2] = "Month";
            TimeUnit[TimeUnit["Year"] = 3] = "Year";
            TimeUnit[TimeUnit["Decade"] = 4] = "Decade";
            TimeUnit[TimeUnit["Second"] = 5] = "Second";
            TimeUnit[TimeUnit["Minute"] = 6] = "Minute";
            TimeUnit[TimeUnit["Hour"] = 7] = "Hour";
        })(data.TimeUnit || (data.TimeUnit = {}));
        var TimeUnit = data.TimeUnit;
        (function (QueryAggregateFunction) {
            QueryAggregateFunction[QueryAggregateFunction["Sum"] = 0] = "Sum";
            QueryAggregateFunction[QueryAggregateFunction["Avg"] = 1] = "Avg";
            QueryAggregateFunction[QueryAggregateFunction["Count"] = 2] = "Count";
            QueryAggregateFunction[QueryAggregateFunction["Min"] = 3] = "Min";
            QueryAggregateFunction[QueryAggregateFunction["Max"] = 4] = "Max";
            QueryAggregateFunction[QueryAggregateFunction["CountNonNull"] = 5] = "CountNonNull";
            QueryAggregateFunction[QueryAggregateFunction["Median"] = 6] = "Median";
            QueryAggregateFunction[QueryAggregateFunction["StandardDeviation"] = 7] = "StandardDeviation";
            QueryAggregateFunction[QueryAggregateFunction["Variance"] = 8] = "Variance";
        })(data.QueryAggregateFunction || (data.QueryAggregateFunction = {}));
        var QueryAggregateFunction = data.QueryAggregateFunction;
        (function (QueryComparisonKind) {
            QueryComparisonKind[QueryComparisonKind["Equal"] = 0] = "Equal";
            QueryComparisonKind[QueryComparisonKind["GreaterThan"] = 1] = "GreaterThan";
            QueryComparisonKind[QueryComparisonKind["GreaterThanOrEqual"] = 2] = "GreaterThanOrEqual";
            QueryComparisonKind[QueryComparisonKind["LessThan"] = 3] = "LessThan";
            QueryComparisonKind[QueryComparisonKind["LessThanOrEqual"] = 4] = "LessThanOrEqual";
        })(data.QueryComparisonKind || (data.QueryComparisonKind = {}));
        var QueryComparisonKind = data.QueryComparisonKind;
        /** Defines semantic data types. */
        (function (SemanticType) {
            SemanticType[SemanticType["None"] = 0] = "None";
            SemanticType[SemanticType["Number"] = 1] = "Number";
            SemanticType[SemanticType["Integer"] = 3] = "Integer";
            SemanticType[SemanticType["DateTime"] = 4] = "DateTime";
            SemanticType[SemanticType["Time"] = 8] = "Time";
            SemanticType[SemanticType["Date"] = 20] = "Date";
            SemanticType[SemanticType["Month"] = 35] = "Month";
            SemanticType[SemanticType["Year"] = 67] = "Year";
            SemanticType[SemanticType["YearAndMonth"] = 128] = "YearAndMonth";
            SemanticType[SemanticType["MonthAndDay"] = 256] = "MonthAndDay";
            SemanticType[SemanticType["Decade"] = 515] = "Decade";
            SemanticType[SemanticType["YearAndWeek"] = 1024] = "YearAndWeek";
            SemanticType[SemanticType["String"] = 2048] = "String";
            SemanticType[SemanticType["Boolean"] = 4096] = "Boolean";
            SemanticType[SemanticType["Table"] = 8192] = "Table";
            SemanticType[SemanticType["Range"] = 16384] = "Range";
        })(data.SemanticType || (data.SemanticType = {}));
        var SemanticType = data.SemanticType;
        (function (FilterKind) {
            FilterKind[FilterKind["Default"] = 0] = "Default";
            FilterKind[FilterKind["Period"] = 1] = "Period";
        })(data.FilterKind || (data.FilterKind = {}));
        var FilterKind = data.FilterKind;
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
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
    var data;
    (function (data) {
        var QueryProjectionCollection = (function () {
            function QueryProjectionCollection(items, activeProjectionRefs, showAll) {
                debug.assertValue(items, 'items');
                this.items = items;
                this._activeProjectionRefs = activeProjectionRefs;
                this._showAll = showAll;
            }
            /** Returns all projections in a mutable array. */
            QueryProjectionCollection.prototype.all = function () {
                return this.items;
            };
            Object.defineProperty(QueryProjectionCollection.prototype, "activeProjectionRefs", {
                get: function () {
                    return this._activeProjectionRefs;
                },
                set: function (queryReferences) {
                    if (!_.isEmpty(queryReferences)) {
                        var queryRefs = this.items.map(function (val) { return val.queryRef; });
                        for (var _i = 0, queryReferences_1 = queryReferences; _i < queryReferences_1.length; _i++) {
                            var queryReference = queryReferences_1[_i];
                            if (!_.contains(queryRefs, queryReference))
                                return;
                        }
                        this._activeProjectionRefs = queryReferences;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(QueryProjectionCollection.prototype, "showAll", {
                get: function () {
                    return this._showAll;
                },
                set: function (value) {
                    this._showAll = value;
                },
                enumerable: true,
                configurable: true
            });
            QueryProjectionCollection.prototype.addActiveQueryReference = function (queryRef) {
                if (!this._activeProjectionRefs)
                    this._activeProjectionRefs = [queryRef];
                else
                    this._activeProjectionRefs.push(queryRef);
            };
            QueryProjectionCollection.prototype.getLastActiveQueryReference = function () {
                if (!_.isEmpty(this._activeProjectionRefs)) {
                    return this._activeProjectionRefs[this._activeProjectionRefs.length - 1];
                }
            };
            QueryProjectionCollection.prototype.clone = function () {
                return new QueryProjectionCollection(_.clone(this.items), _.clone(this._activeProjectionRefs), this._showAll);
            };
            return QueryProjectionCollection;
        }());
        data.QueryProjectionCollection = QueryProjectionCollection;
        var QueryProjectionsByRole;
        (function (QueryProjectionsByRole) {
            /** Clones the QueryProjectionsByRole. */
            function clone(roles) {
                if (!roles)
                    return roles;
                var clonedRoles = {};
                for (var roleName in roles)
                    clonedRoles[roleName] = roles[roleName].clone();
                return clonedRoles;
            }
            QueryProjectionsByRole.clone = clone;
            /** Returns the QueryProjectionCollection for that role.  Even returns empty collections so that 'drillable' and 'activeProjection' fields are preserved. */
            function getRole(roles, name) {
                debug.assertAnyValue(roles, 'roles');
                debug.assertValue(name, 'name');
                if (!roles)
                    return;
                return roles[name];
            }
            QueryProjectionsByRole.getRole = getRole;
        })(QueryProjectionsByRole = data.QueryProjectionsByRole || (data.QueryProjectionsByRole = {}));
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
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
    /** The system used to determine display units used during formatting */
    (function (DisplayUnitSystemType) {
        /** Default display unit system, which saves space by using units such as K, M, bn with PowerView rules for when to pick a unit. Suitable for chart axes. */
        DisplayUnitSystemType[DisplayUnitSystemType["Default"] = 0] = "Default";
        /** A verbose display unit system that will only respect the formatting defined in the model. Suitable for explore mode single-value cards. */
        DisplayUnitSystemType[DisplayUnitSystemType["Verbose"] = 1] = "Verbose";
        /**
         * A display unit system that uses units such as K, M, bn if we have at least one of those units (e.g. 0.9M is not valid as it's less than 1 million).
         * Suitable for dashboard tile cards
         */
        DisplayUnitSystemType[DisplayUnitSystemType["WholeUnits"] = 2] = "WholeUnits";
        /**A display unit system that also contains Auto and None units for data labels*/
        DisplayUnitSystemType[DisplayUnitSystemType["DataLabels"] = 3] = "DataLabels";
    })(powerbi.DisplayUnitSystemType || (powerbi.DisplayUnitSystemType = {}));
    var DisplayUnitSystemType = powerbi.DisplayUnitSystemType;
})(powerbi || (powerbi = {}));
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
    /** Repreasents the sequence of the dates/times */
    var DateTimeSequence = (function () {
        // Constructors
        /** Creates new instance of the DateTimeSequence */
        function DateTimeSequence(unit) {
            this.unit = unit;
            this.sequence = [];
            this.min = new Date("9999-12-31T23:59:59.999");
            this.max = new Date("0001-01-01T00:00:00.000");
        }
        // Methods
        /**
         * Add a new Date to a sequence.
         * @param date - date to add
         */
        DateTimeSequence.prototype.add = function (date) {
            if (date < this.min) {
                this.min = date;
            }
            if (date > this.max) {
                this.max = date;
            }
            this.sequence.push(date);
        };
        // Methods
        /**
         * Extends the sequence to cover new date range
         * @param min - new min to be covered by sequence
         * @param max - new max to be covered by sequence
         */
        DateTimeSequence.prototype.extendToCover = function (min, max) {
            var x = this.min;
            while (min < x) {
                x = DateTimeSequence.addInterval(x, -this.interval, this.unit);
                this.sequence.splice(0, 0, x);
            }
            this.min = x;
            x = this.max;
            while (x < max) {
                x = DateTimeSequence.addInterval(x, this.interval, this.unit);
                this.sequence.push(x);
            }
            this.max = x;
        };
        /**
         * Move the sequence to cover new date range
         * @param min - new min to be covered by sequence
         * @param max - new max to be covered by sequence
         */
        DateTimeSequence.prototype.moveToCover = function (min, max) {
            var delta = DateTimeSequence.getDelta(min, max, this.unit);
            var count = Math.floor(delta / this.interval);
            this.min = DateTimeSequence.addInterval(this.min, count * this.interval, this.unit);
            this.sequence = [];
            this.sequence.push(this.min);
            this.max = this.min;
            while (this.max < max) {
                this.max = DateTimeSequence.addInterval(this.max, this.interval, this.unit);
                this.sequence.push(this.max);
            }
        };
        // Static
        /**
         * Calculate a new DateTimeSequence
         * @param dataMin - Date representing min of the data range
         * @param dataMax - Date representing max of the data range
         * @param expectedCount - expected number of intervals in the sequence
         * @param unit - of the intervals in the sequence
         */
        DateTimeSequence.calculate = function (dataMin, dataMax, expectedCount, unit) {
            if (!unit) {
                unit = DateTimeSequence.getIntervalUnit(dataMin, dataMax, expectedCount);
            }
            switch (unit) {
                case powerbi.DateTimeUnit.Year:
                    return DateTimeSequence.calculateYears(dataMin, dataMax, expectedCount);
                case powerbi.DateTimeUnit.Month:
                    return DateTimeSequence.calculateMonths(dataMin, dataMax, expectedCount);
                case powerbi.DateTimeUnit.Week:
                    return DateTimeSequence.calculateWeeks(dataMin, dataMax, expectedCount);
                case powerbi.DateTimeUnit.Day:
                    return DateTimeSequence.calculateDays(dataMin, dataMax, expectedCount);
                case powerbi.DateTimeUnit.Hour:
                    return DateTimeSequence.calculateHours(dataMin, dataMax, expectedCount);
                case powerbi.DateTimeUnit.Minute:
                    return DateTimeSequence.calculateMinutes(dataMin, dataMax, expectedCount);
                case powerbi.DateTimeUnit.Second:
                    return DateTimeSequence.calculateSeconds(dataMin, dataMax, expectedCount);
                case powerbi.DateTimeUnit.Millisecond:
                    return DateTimeSequence.calculateMilliseconds(dataMin, dataMax, expectedCount);
                default:
                    debug.assertFail("Unsupported DateTimeUnit");
            }
        };
        DateTimeSequence.calculateYears = function (dataMin, dataMax, expectedCount) {
            debug.assertValue(dataMin, "dataMin");
            debug.assertValue(dataMax, "dataMax");
            debug.assert(!expectedCount || (expectedCount >= DateTimeSequence.MIN_COUNT && expectedCount <= DateTimeSequence.MAX_COUNT), "Expected count is out of range");
            // Calculate range and sequence
            var yearsRange = powerbi.NumericSequenceRange.calculateDataRange(dataMin.getFullYear(), dataMax.getFullYear(), false);
            // Calculate year sequence
            var sequence = powerbi.NumericSequence.calculate(powerbi.NumericSequenceRange.calculate(0, yearsRange.max - yearsRange.min), expectedCount, 0, null, null, [1, 2, 5]);
            var newMinYear = Math.floor(yearsRange.min / sequence.interval) * sequence.interval;
            var date = new Date(newMinYear, 0, 1);
            // Convert to date sequence
            var result = DateTimeSequence.fromNumericSequence(date, sequence, powerbi.DateTimeUnit.Year);
            return result;
        };
        DateTimeSequence.calculateMonths = function (dataMin, dataMax, expectedCount) {
            debug.assertValue(dataMin, "dataMin");
            debug.assertValue(dataMax, "dataMax");
            debug.assert(expectedCount === undefined || (expectedCount >= DateTimeSequence.MIN_COUNT && expectedCount <= DateTimeSequence.MAX_COUNT), "expected count is out of range");
            // Calculate range
            var minYear = dataMin.getFullYear();
            var maxYear = dataMax.getFullYear();
            var minMonth = dataMin.getMonth();
            var maxMonth = (maxYear - minYear) * 12 + dataMax.getMonth();
            var date = new Date(minYear, 0, 1);
            // Calculate month sequence
            var sequence = powerbi.NumericSequence.calculateUnits(minMonth, maxMonth, expectedCount, [1, 2, 3, 6, 12]);
            // Convert to date sequence
            var result = DateTimeSequence.fromNumericSequence(date, sequence, powerbi.DateTimeUnit.Month);
            return result;
        };
        DateTimeSequence.calculateWeeks = function (dataMin, dataMax, expectedCount) {
            debug.assertValue(dataMin, "dataMin");
            debug.assertValue(dataMax, "dataMax");
            debug.assert(expectedCount === undefined || (expectedCount >= DateTimeSequence.MIN_COUNT && expectedCount <= DateTimeSequence.MAX_COUNT), "expected count is out of range");
            var firstDayOfWeek = 0;
            var minDayOfWeek = dataMin.getDay();
            var dayOffset = (minDayOfWeek - firstDayOfWeek + 7) % 7;
            var minDay = dataMin.getDate() - dayOffset;
            // Calculate range
            var date = new Date(dataMin.getFullYear(), dataMin.getMonth(), minDay);
            var min = 0;
            var max = powerbi.Double.ceilWithPrecision(DateTimeSequence.getDelta(date, dataMax, powerbi.DateTimeUnit.Week));
            // Calculate week sequence
            var sequence = powerbi.NumericSequence.calculateUnits(min, max, expectedCount, [1, 2, 4, 8]);
            // Convert to date sequence
            var result = DateTimeSequence.fromNumericSequence(date, sequence, powerbi.DateTimeUnit.Week);
            return result;
        };
        DateTimeSequence.calculateDays = function (dataMin, dataMax, expectedCount) {
            debug.assertValue(dataMin, "dataMin");
            debug.assertValue(dataMax, "dataMax");
            debug.assert(expectedCount === undefined || (expectedCount >= DateTimeSequence.MIN_COUNT && expectedCount <= DateTimeSequence.MAX_COUNT), "expected count is out of range");
            // Calculate range
            var date = new Date(dataMin.getFullYear(), dataMin.getMonth(), dataMin.getDate());
            var min = 0;
            var max = powerbi.Double.ceilWithPrecision(DateTimeSequence.getDelta(dataMin, dataMax, powerbi.DateTimeUnit.Day));
            // Calculate day sequence
            var sequence = powerbi.NumericSequence.calculateUnits(min, max, expectedCount, [1, 2, 7, 14]);
            // Convert to date sequence
            var result = DateTimeSequence.fromNumericSequence(date, sequence, powerbi.DateTimeUnit.Day);
            return result;
        };
        DateTimeSequence.calculateHours = function (dataMin, dataMax, expectedCount) {
            debug.assertValue(dataMin, "dataMin");
            debug.assertValue(dataMax, "dataMax");
            debug.assert(expectedCount === undefined || (expectedCount >= DateTimeSequence.MIN_COUNT && expectedCount <= DateTimeSequence.MAX_COUNT), "expected count is out of range");
            // Calculate range
            var date = new Date(dataMin.getFullYear(), dataMin.getMonth(), dataMin.getDate());
            var min = powerbi.Double.floorWithPrecision(DateTimeSequence.getDelta(date, dataMin, powerbi.DateTimeUnit.Hour));
            var max = powerbi.Double.ceilWithPrecision(DateTimeSequence.getDelta(date, dataMax, powerbi.DateTimeUnit.Hour));
            // Calculate hour sequence
            var sequence = powerbi.NumericSequence.calculateUnits(min, max, expectedCount, [1, 2, 3, 6, 12, 24]);
            // Convert to date sequence
            var result = DateTimeSequence.fromNumericSequence(date, sequence, powerbi.DateTimeUnit.Hour);
            return result;
        };
        DateTimeSequence.calculateMinutes = function (dataMin, dataMax, expectedCount) {
            debug.assertValue(dataMin, "dataMin");
            debug.assertValue(dataMax, "dataMax");
            debug.assert(expectedCount === undefined || (expectedCount >= DateTimeSequence.MIN_COUNT && expectedCount <= DateTimeSequence.MAX_COUNT), "expected count is out of range");
            // Calculate range
            var date = new Date(dataMin.getFullYear(), dataMin.getMonth(), dataMin.getDate(), dataMin.getHours());
            var min = powerbi.Double.floorWithPrecision(DateTimeSequence.getDelta(date, dataMin, powerbi.DateTimeUnit.Minute));
            var max = powerbi.Double.ceilWithPrecision(DateTimeSequence.getDelta(date, dataMax, powerbi.DateTimeUnit.Minute));
            // Calculate minutes numeric sequence
            var sequence = powerbi.NumericSequence.calculateUnits(min, max, expectedCount, [1, 2, 5, 10, 15, 30, 60, 60 * 2, 60 * 3, 60 * 6, 60 * 12, 60 * 24]);
            // Convert to date sequence
            var result = DateTimeSequence.fromNumericSequence(date, sequence, powerbi.DateTimeUnit.Minute);
            return result;
        };
        DateTimeSequence.calculateSeconds = function (dataMin, dataMax, expectedCount) {
            debug.assertValue(dataMin, "dataMin");
            debug.assertValue(dataMax, "dataMax");
            debug.assert(expectedCount === undefined || (expectedCount >= DateTimeSequence.MIN_COUNT && expectedCount <= DateTimeSequence.MAX_COUNT), "expected count is out of range");
            // Calculate range
            var date = new Date(dataMin.getFullYear(), dataMin.getMonth(), dataMin.getDate(), dataMin.getHours(), dataMin.getMinutes());
            var min = powerbi.Double.floorWithPrecision(DateTimeSequence.getDelta(date, dataMin, powerbi.DateTimeUnit.Second));
            var max = powerbi.Double.ceilWithPrecision(DateTimeSequence.getDelta(date, dataMax, powerbi.DateTimeUnit.Second));
            // Calculate minutes numeric sequence
            var sequence = powerbi.NumericSequence.calculateUnits(min, max, expectedCount, [1, 2, 5, 10, 15, 30, 60, 60 * 2, 60 * 5, 60 * 10, 60 * 15, 60 * 30, 60 * 60]);
            // Convert to date sequence
            var result = DateTimeSequence.fromNumericSequence(date, sequence, powerbi.DateTimeUnit.Second);
            return result;
        };
        DateTimeSequence.calculateMilliseconds = function (dataMin, dataMax, expectedCount) {
            debug.assertValue(dataMin, "dataMin");
            debug.assertValue(dataMax, "dataMax");
            debug.assert(expectedCount === undefined || (expectedCount >= DateTimeSequence.MIN_COUNT && expectedCount <= DateTimeSequence.MAX_COUNT), "expected count is out of range");
            // Calculate range
            var date = new Date(dataMin.getFullYear(), dataMin.getMonth(), dataMin.getDate(), dataMin.getHours(), dataMin.getMinutes(), dataMin.getSeconds());
            var min = DateTimeSequence.getDelta(date, dataMin, powerbi.DateTimeUnit.Millisecond);
            var max = DateTimeSequence.getDelta(date, dataMax, powerbi.DateTimeUnit.Millisecond);
            // Calculate milliseconds numeric sequence
            var sequence = powerbi.NumericSequence.calculate(powerbi.NumericSequenceRange.calculate(min, max), expectedCount, 0);
            // Convert to date sequence
            var result = DateTimeSequence.fromNumericSequence(date, sequence, powerbi.DateTimeUnit.Millisecond);
            return result;
        };
        DateTimeSequence.fromNumericSequence = function (date, sequence, unit) {
            var result = new DateTimeSequence(unit);
            for (var i = 0; i < sequence.sequence.length; i++) {
                var x = sequence.sequence[i];
                var d = DateTimeSequence.addInterval(date, x, unit);
                result.add(d);
            }
            result.interval = sequence.interval;
            result.intervalOffset = sequence.intervalOffset;
            return result;
        };
        DateTimeSequence.addInterval = function (value, interval, unit) {
            interval = Math.round(interval);
            switch (unit) {
                case powerbi.DateTimeUnit.Year:
                    return DateUtils.addYears(value, interval);
                case powerbi.DateTimeUnit.Month:
                    return DateUtils.addMonths(value, interval);
                case powerbi.DateTimeUnit.Week:
                    return DateUtils.addWeeks(value, interval);
                case powerbi.DateTimeUnit.Day:
                    return DateUtils.addDays(value, interval);
                case powerbi.DateTimeUnit.Hour:
                    return DateUtils.addHours(value, interval);
                case powerbi.DateTimeUnit.Minute:
                    return DateUtils.addMinutes(value, interval);
                case powerbi.DateTimeUnit.Second:
                    return DateUtils.addSeconds(value, interval);
                case powerbi.DateTimeUnit.Millisecond:
                    return DateUtils.addMilliseconds(value, interval);
            }
        };
        DateTimeSequence.getDelta = function (min, max, unit) {
            var delta = 0;
            switch (unit) {
                case powerbi.DateTimeUnit.Year:
                    delta = max.getFullYear() - min.getFullYear();
                    break;
                case powerbi.DateTimeUnit.Month:
                    delta = (max.getFullYear() - min.getFullYear()) * 12 + max.getMonth() - min.getMonth();
                    break;
                case powerbi.DateTimeUnit.Week:
                    delta = (max.getTime() - min.getTime()) / (7 * 24 * 3600000);
                    break;
                case powerbi.DateTimeUnit.Day:
                    delta = (max.getTime() - min.getTime()) / (24 * 3600000);
                    break;
                case powerbi.DateTimeUnit.Hour:
                    delta = (max.getTime() - min.getTime()) / 3600000;
                    break;
                case powerbi.DateTimeUnit.Minute:
                    delta = (max.getTime() - min.getTime()) / 60000;
                    break;
                case powerbi.DateTimeUnit.Second:
                    delta = (max.getTime() - min.getTime()) / 1000;
                    break;
                case powerbi.DateTimeUnit.Millisecond:
                    delta = max.getTime() - min.getTime();
                    break;
            }
            return delta;
        };
        DateTimeSequence.getIntervalUnit = function (min, max, maxCount) {
            maxCount = Math.max(maxCount, 2);
            var totalDays = DateTimeSequence.getDelta(min, max, powerbi.DateTimeUnit.Day);
            if (totalDays > 356 && totalDays >= 30 * 6 * maxCount)
                return powerbi.DateTimeUnit.Year;
            if (totalDays > 60 && totalDays > 7 * maxCount)
                return powerbi.DateTimeUnit.Month;
            if (totalDays > 14 && totalDays > 2 * maxCount)
                return powerbi.DateTimeUnit.Week;
            var totalHours = DateTimeSequence.getDelta(min, max, powerbi.DateTimeUnit.Hour);
            if (totalDays > 2 && totalHours > 12 * maxCount)
                return powerbi.DateTimeUnit.Day;
            if (totalHours >= 24 && totalHours >= maxCount)
                return powerbi.DateTimeUnit.Hour;
            var totalMinutes = DateTimeSequence.getDelta(min, max, powerbi.DateTimeUnit.Minute);
            if (totalMinutes > 2 && totalMinutes >= maxCount)
                return powerbi.DateTimeUnit.Minute;
            var totalSeconds = DateTimeSequence.getDelta(min, max, powerbi.DateTimeUnit.Second);
            if (totalSeconds > 2 && totalSeconds >= 0.8 * maxCount)
                return powerbi.DateTimeUnit.Second;
            var totalMilliseconds = DateTimeSequence.getDelta(min, max, powerbi.DateTimeUnit.Millisecond);
            if (totalMilliseconds > 0)
                return powerbi.DateTimeUnit.Millisecond;
            // If the size of the range is 0 we need to guess the unit based on the date's non-zero values starting with milliseconds
            var date = min;
            if (date.getMilliseconds() !== 0)
                return powerbi.DateTimeUnit.Millisecond;
            if (date.getSeconds() !== 0)
                return powerbi.DateTimeUnit.Second;
            if (date.getMinutes() !== 0)
                return powerbi.DateTimeUnit.Minute;
            if (date.getHours() !== 0)
                return powerbi.DateTimeUnit.Hour;
            if (date.getDate() !== 1)
                return powerbi.DateTimeUnit.Day;
            if (date.getMonth() !== 0)
                return powerbi.DateTimeUnit.Month;
            return powerbi.DateTimeUnit.Year;
        };
        // Constants
        DateTimeSequence.MIN_COUNT = 1;
        DateTimeSequence.MAX_COUNT = 1000;
        return DateTimeSequence;
    }());
    powerbi.DateTimeSequence = DateTimeSequence;
    /** DateUtils module provides DateTimeSequence with set of additional date manipulation routines */
    var DateUtils;
    (function (DateUtils) {
        var MonthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        var MonthDaysLeap = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        /**
         * Returns bool indicating weither the provided year is a leap year.
         * @param year - year value
         */
        function isLeap(year) {
            return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
        }
        /**
         * Returns number of days in the provided year/month.
         * @param year - year value
         * @param month - month value
         */
        function getMonthDays(year, month) {
            return isLeap(year) ? MonthDaysLeap[month] : MonthDays[month];
        }
        /**
         * Adds a specified number of years to the provided date.
         * @param date - date value
         * @param yearDelta - number of years to add
         */
        function addYears(date, yearDelta) {
            var year = date.getFullYear();
            var month = date.getMonth();
            var day = date.getDate();
            var isLeapDay = month === 2 && day === 29;
            var result = new Date(date.getTime());
            year = year + yearDelta;
            if (isLeapDay && !isLeap(year)) {
                day = 28;
            }
            result.setFullYear(year, month, day);
            return result;
        }
        DateUtils.addYears = addYears;
        /**
         * Adds a specified number of months to the provided date.
         * @param date - date value
         * @param monthDelta - number of months to add
         */
        function addMonths(date, monthDelta) {
            var year = date.getFullYear();
            var month = date.getMonth();
            var day = date.getDate();
            var result = new Date(date.getTime());
            year += (monthDelta - (monthDelta % 12)) / 12;
            month += monthDelta % 12;
            // VSTS 1325771: Certain column charts don't display any data
            // Wrap arround the month if is after december (value 11)
            if (month > 11) {
                month = month % 12;
                year++;
            }
            day = Math.min(day, getMonthDays(year, month));
            result.setFullYear(year, month, day);
            return result;
        }
        DateUtils.addMonths = addMonths;
        /**
         * Adds a specified number of weeks to the provided date.
         * @param date - date value
         * @param weeks - number of weeks to add
         */
        function addWeeks(date, weeks) {
            return addDays(date, weeks * 7);
        }
        DateUtils.addWeeks = addWeeks;
        /**
         * Adds a specified number of days to the provided date.
         * @param date - date value
         * @param days - number of days to add
         */
        function addDays(date, days) {
            var year = date.getFullYear();
            var month = date.getMonth();
            var day = date.getDate();
            var result = new Date(date.getTime());
            result.setFullYear(year, month, day + days);
            return result;
        }
        DateUtils.addDays = addDays;
        /**
         * Adds a specified number of hours to the provided date.
         * @param date - date value
         * @param hours - number of hours to add
         */
        function addHours(date, hours) {
            return new Date(date.getTime() + hours * 3600000);
        }
        DateUtils.addHours = addHours;
        /**
         * Adds a specified number of minutes to the provided date.
         * @param date - date value
         * @param minutes - number of minutes to add
         */
        function addMinutes(date, minutes) {
            return new Date(date.getTime() + minutes * 60000);
        }
        DateUtils.addMinutes = addMinutes;
        /**
         * Adds a specified number of seconds to the provided date.
         * @param date - date value
         * @param seconds - number of seconds to add
         */
        function addSeconds(date, seconds) {
            return new Date(date.getTime() + seconds * 1000);
        }
        DateUtils.addSeconds = addSeconds;
        /**
         * Adds a specified number of milliseconds to the provided date.
         * @param date - date value
         * @param milliseconds - number of milliseconds to add
         */
        function addMilliseconds(date, milliseconds) {
            return new Date(date.getTime() + milliseconds);
        }
        DateUtils.addMilliseconds = addMilliseconds;
    })(DateUtils = powerbi.DateUtils || (powerbi.DateUtils = {}));
})(powerbi || (powerbi = {}));
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
    // Constants
    var maxExponent = 24;
    var defaultScientificBigNumbersBoundary = 1E15;
    var scientificSmallNumbersBoundary = 1E-4;
    var PERCENTAGE_FORMAT = '%';
    var SCIENTIFIC_FORMAT = 'E+0';
    var DEFAULT_SCIENTIFIC_FORMAT = '0.##' + SCIENTIFIC_FORMAT;
    // Regular expressions
    /**
     * This regex looks for strings that match one of the following conditions:
     *   - Optionally contain "0", "#", followed by a period, followed by at least one "0" or "#" (Ex. ###,000.###)
     *   - Contains at least one of "0", "#", or "," (Ex. ###,000)
     *   - Contain a "g" (indicates to use the general .NET numeric format string)
     * The entire string (start to end) must match, and the match is not case-sensitive.
     */
    var SUPPORTED_SCIENTIFIC_FORMATS = /^([0\#,]*\.[0\#]+|[0\#,]+|g)$/i;
    var DisplayUnit = (function () {
        function DisplayUnit() {
        }
        // Methods
        DisplayUnit.prototype.project = function (value) {
            if (this.value) {
                return powerbi.Double.removeDecimalNoise(value / this.value);
            }
            else {
                return value;
            }
        };
        DisplayUnit.prototype.reverseProject = function (value) {
            if (this.value) {
                return value * this.value;
            }
            else {
                return value;
            }
        };
        DisplayUnit.prototype.isApplicableTo = function (value) {
            value = Math.abs(value);
            var precision = powerbi.Double.getPrecision(value, 3);
            return powerbi.Double.greaterOrEqualWithPrecision(value, this.applicableRangeMin, precision) && powerbi.Double.lessWithPrecision(value, this.applicableRangeMax, precision);
        };
        DisplayUnit.prototype.isScaling = function () {
            return this.value > 1;
        };
        return DisplayUnit;
    }());
    powerbi.DisplayUnit = DisplayUnit;
    var DisplayUnitSystem = (function () {
        // Constructor
        function DisplayUnitSystem(units) {
            this.units = units ? units : [];
        }
        Object.defineProperty(DisplayUnitSystem.prototype, "title", {
            // Properties
            get: function () {
                return this.displayUnit ? this.displayUnit.title : undefined;
            },
            enumerable: true,
            configurable: true
        });
        // Methods
        DisplayUnitSystem.prototype.update = function (value) {
            if (value === undefined)
                return;
            this.unitBaseValue = value;
            this.displayUnit = this.findApplicableDisplayUnit(value);
        };
        DisplayUnitSystem.prototype.findApplicableDisplayUnit = function (value) {
            for (var _i = 0, _a = this.units; _i < _a.length; _i++) {
                var unit = _a[_i];
                if (unit.isApplicableTo(value))
                    return unit;
            }
            return undefined;
        };
        DisplayUnitSystem.prototype.format = function (value, format, decimals, trailingZeros) {
            debug.assert(typeof (value) === "number", "value must be a number");
            if (this.isFormatSupported(format)) {
                decimals = this.getNumberOfDecimalsForFormatting(format, decimals);
                if (this.hasScientitifcFormat(format)) {
                    return this.formatHelper(value, '', format, decimals, trailingZeros);
                }
                if (this.isScalingUnit() && this.shouldRespectScalingUnit(format)) {
                    return this.formatHelper(this.displayUnit.project(value), this.displayUnit.labelFormat, format, decimals, trailingZeros);
                }
                if (decimals != null) {
                    return this.formatHelper(value, '', format, decimals, trailingZeros);
                }
            }
            return powerbi.formattingService.formatValue(value, format);
        };
        DisplayUnitSystem.prototype.isFormatSupported = function (format) {
            return !DisplayUnitSystem.UNSUPPORTED_FORMATS.test(format);
        };
        DisplayUnitSystem.prototype.isPercentageFormat = function (format) {
            return format && format.indexOf(PERCENTAGE_FORMAT) >= 0;
        };
        DisplayUnitSystem.prototype.shouldRespectScalingUnit = function (format) {
            return !this.isPercentageFormat(format);
        };
        DisplayUnitSystem.prototype.getNumberOfDecimalsForFormatting = function (format, decimals) {
            return decimals;
        };
        DisplayUnitSystem.prototype.isScalingUnit = function () {
            return this.displayUnit && this.displayUnit.isScaling();
        };
        DisplayUnitSystem.prototype.formatHelper = function (value, nonScientificFormat, format, decimals, trailingZeros) {
            // If the format is "general" and we want to override the number of decimal places then use the default numeric format string.
            if ((format === 'g' || format === 'G') && decimals != null)
                format = powerbi.visuals.valueFormatter.DefaultNumericFormat;
            format = powerbi.NumberFormat.addDecimalsToFormat(format, decimals, trailingZeros);
            if (format && !powerbi.formattingService.isStandardNumberFormat(format))
                return powerbi.formattingService.formatNumberWithCustomOverride(value, format, nonScientificFormat);
            if (!format)
                format = 'G';
            if (!nonScientificFormat)
                nonScientificFormat = '{0}';
            var text = powerbi.formattingService.formatValue(value, format);
            return powerbi.formattingService.format(nonScientificFormat, [text]);
        };
        /** Formats a single value by choosing an appropriate base for the DisplayUnitSystem before formatting. */
        DisplayUnitSystem.prototype.formatSingleValue = function (value, format, decimals, trailingZeros) {
            // Change unit base to a value appropriate for this value
            this.update(this.shouldUseValuePrecision(value) ? powerbi.Double.getPrecision(value, 8) : value);
            return this.format(value, format, decimals, trailingZeros);
        };
        DisplayUnitSystem.prototype.shouldUseValuePrecision = function (value) {
            if (this.units.length === 0)
                return true;
            // Check if the value is big enough to have a valid unit by checking against the smallest unit (that it's value bigger than 1).
            var applicableRangeMin = 0;
            for (var i = 0; i < this.units.length; i++) {
                if (this.units[i].isScaling()) {
                    applicableRangeMin = this.units[i].applicableRangeMin;
                    break;
                }
            }
            return Math.abs(value) < applicableRangeMin;
        };
        DisplayUnitSystem.prototype.isScientific = function (value) {
            return value < -defaultScientificBigNumbersBoundary || value > defaultScientificBigNumbersBoundary ||
                (-scientificSmallNumbersBoundary < value && value < scientificSmallNumbersBoundary && value !== 0);
        };
        DisplayUnitSystem.prototype.hasScientitifcFormat = function (format) {
            return format && format.toUpperCase().indexOf("E") !== -1;
        };
        DisplayUnitSystem.prototype.supportsScientificFormat = function (format) {
            if (format)
                return SUPPORTED_SCIENTIFIC_FORMATS.test(format);
            return true;
        };
        DisplayUnitSystem.prototype.shouldFallbackToScientific = function (value, format) {
            return !this.hasScientitifcFormat(format)
                && this.supportsScientificFormat(format)
                && this.isScientific(value);
        };
        DisplayUnitSystem.prototype.getScientificFormat = function (data, format, decimals, trailingZeros) {
            // Use scientific format outside of the range
            if (this.isFormatSupported(format) && this.shouldFallbackToScientific(data, format)) {
                var numericFormat = powerbi.NumberFormat.getNumericFormat(data, format);
                if (decimals)
                    numericFormat = powerbi.NumberFormat.addDecimalsToFormat(numericFormat ? numericFormat : '0', Math.abs(decimals), trailingZeros);
                if (numericFormat)
                    return numericFormat + SCIENTIFIC_FORMAT;
                else
                    return DEFAULT_SCIENTIFIC_FORMAT;
            }
            return format;
        };
        DisplayUnitSystem.UNSUPPORTED_FORMATS = /^(p\d*)|(.*\%)|(e\d*)$/i;
        return DisplayUnitSystem;
    }());
    powerbi.DisplayUnitSystem = DisplayUnitSystem;
    /** Provides a unit system that is defined by formatting in the model, and is suitable for visualizations shown in single number visuals in explore mode. */
    var NoDisplayUnitSystem = (function (_super) {
        __extends(NoDisplayUnitSystem, _super);
        // Constructor
        function NoDisplayUnitSystem() {
            _super.call(this, []);
        }
        return NoDisplayUnitSystem;
    }(DisplayUnitSystem));
    powerbi.NoDisplayUnitSystem = NoDisplayUnitSystem;
    /** Provides a unit system that creates a more concise format for displaying values. This is suitable for most of the cases where
        we are showing values (chart axes) and as such it is the default unit system. */
    var DefaultDisplayUnitSystem = (function (_super) {
        __extends(DefaultDisplayUnitSystem, _super);
        // Constructor
        function DefaultDisplayUnitSystem(unitLookup) {
            _super.call(this, DefaultDisplayUnitSystem.getUnits(unitLookup));
        }
        // Methods
        DefaultDisplayUnitSystem.prototype.format = function (data, format, decimals, trailingZeros) {
            format = this.getScientificFormat(data, format, decimals, trailingZeros);
            return _super.prototype.format.call(this, data, format, decimals, trailingZeros);
        };
        DefaultDisplayUnitSystem.reset = function () {
            DefaultDisplayUnitSystem.units = null;
        };
        DefaultDisplayUnitSystem.getUnits = function (unitLookup) {
            if (!DefaultDisplayUnitSystem.units) {
                DefaultDisplayUnitSystem.units = createDisplayUnits(unitLookup, function (value, previousUnitValue, min) {
                    // When dealing with millions/billions/trillions we need to switch to millions earlier: for example instead of showing 100K 200K 300K we should show 0.1M 0.2M 0.3M etc
                    if (value - previousUnitValue >= 1000) {
                        return value / 10;
                    }
                    return min;
                });
                // Ensure last unit has max of infinity
                DefaultDisplayUnitSystem.units[DefaultDisplayUnitSystem.units.length - 1].applicableRangeMax = Infinity;
            }
            return DefaultDisplayUnitSystem.units;
        };
        return DefaultDisplayUnitSystem;
    }(DisplayUnitSystem));
    powerbi.DefaultDisplayUnitSystem = DefaultDisplayUnitSystem;
    /** Provides a unit system that creates a more concise format for displaying values, but only allows showing a unit if we have at least
        one of those units (e.g. 0.9M is not allowed since it's less than 1 million). This is suitable for cases such as dashboard tiles
        where we have restricted space but do not want to show partial units. */
    var WholeUnitsDisplayUnitSystem = (function (_super) {
        __extends(WholeUnitsDisplayUnitSystem, _super);
        // Constructor
        function WholeUnitsDisplayUnitSystem(unitLookup) {
            _super.call(this, WholeUnitsDisplayUnitSystem.getUnits(unitLookup));
        }
        WholeUnitsDisplayUnitSystem.reset = function () {
            WholeUnitsDisplayUnitSystem.units = null;
        };
        WholeUnitsDisplayUnitSystem.getUnits = function (unitLookup) {
            if (!WholeUnitsDisplayUnitSystem.units) {
                WholeUnitsDisplayUnitSystem.units = createDisplayUnits(unitLookup);
                // Ensure last unit has max of infinity
                WholeUnitsDisplayUnitSystem.units[WholeUnitsDisplayUnitSystem.units.length - 1].applicableRangeMax = Infinity;
            }
            return WholeUnitsDisplayUnitSystem.units;
        };
        WholeUnitsDisplayUnitSystem.prototype.format = function (data, format, decimals, trailingZeros) {
            format = this.getScientificFormat(data, format, decimals, trailingZeros);
            return _super.prototype.format.call(this, data, format, decimals, trailingZeros);
        };
        return WholeUnitsDisplayUnitSystem;
    }(DisplayUnitSystem));
    powerbi.WholeUnitsDisplayUnitSystem = WholeUnitsDisplayUnitSystem;
    var DataLabelsDisplayUnitSystem = (function (_super) {
        __extends(DataLabelsDisplayUnitSystem, _super);
        function DataLabelsDisplayUnitSystem(unitLookup) {
            _super.call(this, DataLabelsDisplayUnitSystem.getUnits(unitLookup));
        }
        DataLabelsDisplayUnitSystem.prototype.isFormatSupported = function (format) {
            return !DataLabelsDisplayUnitSystem.UNSUPPORTED_FORMATS.test(format);
        };
        DataLabelsDisplayUnitSystem.getUnits = function (unitLookup) {
            if (!DataLabelsDisplayUnitSystem.units) {
                var units = [];
                var adjustMinBasedOnPreviousUnit = function (value, previousUnitValue, min) {
                    // Never returns true, we are always ignoring
                    // We do not early switch (e.g. 100K instead of 0.1M)
                    // Intended? If so, remove this function, otherwise, remove if statement
                    if (value === -1)
                        if (value - previousUnitValue >= 1000) {
                            return value / 10;
                        }
                    return min;
                };
                // Add Auto & None
                var names = unitLookup(-1);
                addUnitIfNonEmpty(units, DataLabelsDisplayUnitSystem.AUTO_DISPLAYUNIT_VALUE, names.title, names.format, adjustMinBasedOnPreviousUnit);
                names = unitLookup(0);
                addUnitIfNonEmpty(units, DataLabelsDisplayUnitSystem.NONE_DISPLAYUNIT_VALUE, names.title, names.format, adjustMinBasedOnPreviousUnit);
                // Add normal units
                DataLabelsDisplayUnitSystem.units = units.concat(createDisplayUnits(unitLookup, adjustMinBasedOnPreviousUnit));
                // Ensure last unit has max of infinity
                DataLabelsDisplayUnitSystem.units[DataLabelsDisplayUnitSystem.units.length - 1].applicableRangeMax = Infinity;
            }
            return DataLabelsDisplayUnitSystem.units;
        };
        DataLabelsDisplayUnitSystem.prototype.format = function (data, format, decimals, trailingZeros) {
            format = this.getScientificFormat(data, format, decimals, trailingZeros);
            return _super.prototype.format.call(this, data, format, decimals, trailingZeros);
        };
        // Constants
        DataLabelsDisplayUnitSystem.AUTO_DISPLAYUNIT_VALUE = 0;
        DataLabelsDisplayUnitSystem.NONE_DISPLAYUNIT_VALUE = 1;
        DataLabelsDisplayUnitSystem.UNSUPPORTED_FORMATS = /^(e\d*)$/i;
        return DataLabelsDisplayUnitSystem;
    }(DisplayUnitSystem));
    powerbi.DataLabelsDisplayUnitSystem = DataLabelsDisplayUnitSystem;
    function createDisplayUnits(unitLookup, adjustMinBasedOnPreviousUnit) {
        var units = [];
        for (var i = 3; i < maxExponent; i++) {
            var names = unitLookup(i);
            if (names)
                addUnitIfNonEmpty(units, powerbi.Double.pow10(i), names.title, names.format, adjustMinBasedOnPreviousUnit);
        }
        return units;
    }
    function addUnitIfNonEmpty(units, value, title, labelFormat, adjustMinBasedOnPreviousUnit) {
        if (title || labelFormat) {
            var min = value;
            if (units.length > 0) {
                var previousUnit = units[units.length - 1];
                if (adjustMinBasedOnPreviousUnit)
                    min = adjustMinBasedOnPreviousUnit(value, previousUnit.value, min);
                previousUnit.applicableRangeMax = min;
            }
            var unit = new DisplayUnit();
            unit.value = value;
            unit.applicableRangeMin = min;
            unit.applicableRangeMax = min * 1000;
            unit.title = title;
            unit.labelFormat = labelFormat;
            units.push(unit);
        }
    }
})(powerbi || (powerbi = {}));
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
    var NumericSequence = (function () {
        function NumericSequence() {
        }
        NumericSequence.calculate = function (range, expectedCount, maxAllowedMargin, minPower, useZeroRefPoint, steps) {
            debug.assertValue(range, "range");
            debug.assert(expectedCount === undefined || (expectedCount >= NumericSequence.MIN_COUNT && expectedCount <= NumericSequence.MAX_COUNT), "expectedCount");
            debug.assert(minPower === undefined || (minPower >= powerbi.Double.MIN_EXP && minPower <= powerbi.Double.MAX_EXP), "minPower");
            debug.assert(maxAllowedMargin === undefined || (maxAllowedMargin >= 0), "maxAllowedMargin");
            var result = new NumericSequence();
            if (expectedCount === undefined)
                expectedCount = 10;
            else
                expectedCount = powerbi.Double.ensureInRange(expectedCount, NumericSequence.MIN_COUNT, NumericSequence.MAX_COUNT);
            if (minPower === undefined)
                minPower = powerbi.Double.MIN_EXP;
            if (useZeroRefPoint === undefined)
                useZeroRefPoint = false;
            if (maxAllowedMargin === undefined)
                maxAllowedMargin = 1;
            if (steps === undefined)
                steps = [1, 2, 5];
            // Handle single stop case
            if (range.forcedSingleStop) {
                result.interval = range.getSize();
                result.intervalOffset = result.interval - (range.forcedSingleStop - range.min);
                result.min = range.min;
                result.max = range.max;
                result.sequence = [range.forcedSingleStop];
                return result;
            }
            var interval = 0;
            var min = 0;
            var max = 9;
            var canExtendMin = maxAllowedMargin > 0 && !range.hasFixedMin;
            var canExtendMax = maxAllowedMargin > 0 && !range.hasFixedMax;
            var size = range.getSize();
            var exp = powerbi.Double.log10(size);
            // Account for Exp of steps
            var stepExp = powerbi.Double.log10(steps[0]);
            exp = exp - stepExp;
            // Account for MaxCount
            var expectedCountExp = powerbi.Double.log10(expectedCount);
            exp = exp - expectedCountExp;
            // Account for MinPower
            exp = Math.max(exp, minPower - stepExp + 1);
            var count = undefined;
            // Create array of "good looking" numbers
            if (interval !== 0) {
                // If explicit interval is defined - use it instead of the steps array.
                var power = powerbi.Double.pow10(exp);
                var roundMin = powerbi.Double.floorToPrecision(range.min, power);
                var roundMax = powerbi.Double.ceilToPrecision(range.max, power);
                var roundRange = powerbi.NumericSequenceRange.calculateFixedRange(roundMin, roundMax);
                roundRange.shrinkByStep(range, interval);
                min = roundRange.min;
                max = roundRange.max;
                count = Math.floor(roundRange.getSize() / interval);
            }
            else {
                // No interval defined -> find optimal interval
                var dexp = void 0;
                for (dexp = 0; dexp < 3; dexp++) {
                    var e = exp + dexp;
                    var power = powerbi.Double.pow10(e);
                    var roundMin = powerbi.Double.floorToPrecision(range.min, power);
                    var roundMax = powerbi.Double.ceilToPrecision(range.max, power);
                    // Go throught the steps array looking for the smallest step that produces the right interval count.
                    var stepsCount = steps.length;
                    var stepPower = powerbi.Double.pow10(e - 1);
                    for (var i = 0; i < stepsCount; i++) {
                        var step = steps[i] * stepPower;
                        var roundRange = powerbi.NumericSequenceRange.calculateFixedRange(roundMin, roundMax, useZeroRefPoint);
                        roundRange.shrinkByStep(range, step);
                        // If the range is based on Data we might need to extend it to provide nice data margins.
                        if (canExtendMin && range.min === roundRange.min && maxAllowedMargin >= 1)
                            roundRange.min -= step;
                        if (canExtendMax && range.max === roundRange.max && maxAllowedMargin >= 1)
                            roundRange.max += step;
                        // Count the intervals
                        count = powerbi.Double.ceilWithPrecision(roundRange.getSize() / step);
                        if (count <= expectedCount || (dexp === 2 && i === stepsCount - 1) || (expectedCount === 1 && count === 2 && (step > range.getSize() || (range.min < 0 && range.max > 0 && step * 2 >= range.getSize())))) {
                            interval = step;
                            min = roundRange.min;
                            max = roundRange.max;
                            break;
                        }
                    }
                    // Increase the scale power until the interval is found
                    if (interval !== 0)
                        break;
                }
            }
            // Avoid extreme count cases (>1000 ticks)
            if (count > expectedCount * 32 || count > NumericSequence.MAX_COUNT) {
                count = Math.min(expectedCount * 32, NumericSequence.MAX_COUNT);
                interval = (max - min) / count;
            }
            result.min = min;
            result.max = max;
            result.interval = interval;
            result.intervalOffset = min - range.min;
            result.maxAllowedMargin = maxAllowedMargin;
            result.canExtendMin = canExtendMin;
            result.canExtendMax = canExtendMax;
            // Fill in the Sequence
            var precision = powerbi.Double.getPrecision(interval, 0);
            result.precision = precision;
            var sequence = [];
            var x = powerbi.Double.roundToPrecision(min, precision);
            sequence.push(x);
            for (var i = 0; i < count; i++) {
                x = powerbi.Double.roundToPrecision(x + interval, precision);
                sequence.push(x);
            }
            result.sequence = sequence;
            result.trimMinMax(range.min, range.max);
            return result;
        };
        /**
         * Calculates the sequence of int numbers which are mapped to the multiples of the units grid.
         * @min - The minimum of the range.
         * @max - The maximum of the range.
         * @maxCount - The max count of intervals.
         * @steps - array of intervals.
         */
        NumericSequence.calculateUnits = function (min, max, maxCount, steps) {
            // Initialization actions
            maxCount = powerbi.Double.ensureInRange(maxCount, NumericSequence.MIN_COUNT, NumericSequence.MAX_COUNT);
            if (min === max) {
                max = min + 1;
            }
            var stepCount = 0;
            var step = 0;
            // Calculate step
            for (var i = 0; i < steps.length; i++) {
                step = steps[i];
                var maxStepCount = powerbi.Double.ceilWithPrecision(max / step);
                var minStepCount = powerbi.Double.floorWithPrecision(min / step);
                stepCount = maxStepCount - minStepCount;
                if (stepCount <= maxCount) {
                    break;
                }
            }
            // Calculate the offset
            var offset = -min;
            offset = offset % step;
            // Create sequence
            var result = new NumericSequence();
            result.sequence = [];
            for (var x = min + offset;; x += step) {
                result.sequence.push(x);
                if (x >= max)
                    break;
            }
            result.interval = step;
            result.intervalOffset = offset;
            result.min = result.sequence[0];
            result.max = result.sequence[result.sequence.length - 1];
            return result;
        };
        NumericSequence.prototype.trimMinMax = function (min, max) {
            var minMargin = (min - this.min) / this.interval;
            var maxMargin = (this.max - max) / this.interval;
            var marginPrecision = 0.001;
            if (!this.canExtendMin || (minMargin > this.maxAllowedMargin && minMargin > marginPrecision)) {
                this.min = min;
            }
            if (!this.canExtendMax || (maxMargin > this.maxAllowedMargin && maxMargin > marginPrecision)) {
                this.max = max;
            }
        };
        NumericSequence.MIN_COUNT = 1;
        NumericSequence.MAX_COUNT = 1000;
        return NumericSequence;
    }());
    powerbi.NumericSequence = NumericSequence;
})(powerbi || (powerbi = {}));
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
    var NumericSequenceRange = (function () {
        function NumericSequenceRange() {
        }
        NumericSequenceRange.prototype._ensureIncludeZero = function () {
            if (this.includeZero) {
                // fixed min and max has higher priority than includeZero
                if (this.min > 0 && !this.hasFixedMin) {
                    this.min = 0;
                }
                if (this.max < 0 && !this.hasFixedMax) {
                    this.max = 0;
                }
            }
        };
        NumericSequenceRange.prototype._ensureNotEmpty = function () {
            if (this.min === this.max) {
                if (!this.min) {
                    this.min = 0;
                    this.max = NumericSequenceRange.DEFAULT_MAX;
                    this.hasFixedMin = true;
                    this.hasFixedMax = true;
                }
                else {
                    // We are dealing with a single data value (includeZero is not set)
                    // In order to fix the range we need to extend it in both directions by half of the interval.
                    // Interval is calculated based on the number:
                    // 1. Integers below 10,000 are extended by 0.5: so the [2006-2006] empty range is extended to [2005.5-2006.5] range and the ForsedSingleStop=2006
                    // 2. Other numbers are extended by half of their power: [700,001-700,001] => [650,001-750,001] and the ForsedSingleStop=null as we want the intervals to be calculated to cover the range.
                    var value = this.min;
                    var exp = powerbi.Double.log10(Math.abs(value));
                    var step = void 0;
                    if (exp >= 0 && exp < 4) {
                        step = 0.5;
                        this.forcedSingleStop = value;
                    }
                    else {
                        step = powerbi.Double.pow10(exp) / 2;
                        this.forcedSingleStop = null;
                    }
                    this.min = value - step;
                    this.max = value + step;
                }
            }
        };
        NumericSequenceRange.prototype._ensureDirection = function () {
            if (this.min > this.max) {
                var temp = this.min;
                this.min = this.max;
                this.max = temp;
            }
        };
        NumericSequenceRange.prototype.getSize = function () {
            return this.max - this.min;
        };
        NumericSequenceRange.prototype.shrinkByStep = function (range, step) {
            debug.assertValue(range, "range");
            debug.assert(step > 0, "step");
            var oldCount = this.min / step;
            var newCount = range.min / step;
            var deltaCount = Math.floor(newCount - oldCount);
            this.min += deltaCount * step;
            oldCount = this.max / step;
            newCount = range.max / step;
            deltaCount = Math.ceil(newCount - oldCount);
            this.max += deltaCount * step;
        };
        NumericSequenceRange.calculate = function (dataMin, dataMax, fixedMin, fixedMax, includeZero) {
            debug.assert(dataMin <= dataMax, "dataMin should be less or equal to dataMax.");
            debug.assert(!fixedMin || !fixedMax || fixedMin <= fixedMax, "fixedMin should be less or equal to fixedMax.");
            var result = new NumericSequenceRange();
            result.includeZero = includeZero ? true : false;
            result.hasDataRange = ValueUtil.hasValue(dataMin) && ValueUtil.hasValue(dataMax);
            result.hasFixedMin = ValueUtil.hasValue(fixedMin);
            result.hasFixedMax = ValueUtil.hasValue(fixedMax);
            dataMin = powerbi.Double.ensureInRange(dataMin, NumericSequenceRange.MIN_SUPPORTED_DOUBLE, NumericSequenceRange.MAX_SUPPORTED_DOUBLE);
            dataMax = powerbi.Double.ensureInRange(dataMax, NumericSequenceRange.MIN_SUPPORTED_DOUBLE, NumericSequenceRange.MAX_SUPPORTED_DOUBLE);
            // Calculate the range using the min, max, dataRange
            if (result.hasFixedMin && result.hasFixedMax) {
                result.min = fixedMin;
                result.max = fixedMax;
            }
            else if (result.hasFixedMin) {
                result.min = fixedMin;
                result.max = dataMax > fixedMin ? dataMax : fixedMin;
            }
            else if (result.hasFixedMax) {
                result.min = dataMin < fixedMax ? dataMin : fixedMax;
                result.max = fixedMax;
            }
            else if (result.hasDataRange) {
                result.min = dataMin;
                result.max = dataMax;
            }
            else {
                result.min = 0;
                result.max = 0;
            }
            result._ensureIncludeZero();
            result._ensureNotEmpty();
            result._ensureDirection();
            if (result.min === 0) {
                result.hasFixedMin = true; // If the range starts from zero we should prevent extending the intervals into the negative range
            }
            else if (result.max === 0) {
                result.hasFixedMax = true; // If the range ends at zero we should prevent extending the intervals into the positive range
            }
            return result;
        };
        NumericSequenceRange.calculateDataRange = function (dataMin, dataMax, includeZero) {
            if (!ValueUtil.hasValue(dataMin) || !ValueUtil.hasValue(dataMax)) {
                return NumericSequenceRange.calculateFixedRange(0, NumericSequenceRange.DEFAULT_MAX);
            }
            else {
                return NumericSequenceRange.calculate(dataMin, dataMax, null, null, includeZero);
            }
        };
        NumericSequenceRange.calculateFixedRange = function (fixedMin, fixedMax, includeZero) {
            debug.assertValue(fixedMin, "fixedMin");
            debug.assertValue(fixedMax, "fixedMax");
            var result = new NumericSequenceRange();
            result.hasDataRange = false;
            result.includeZero = includeZero;
            result.min = fixedMin;
            result.max = fixedMax;
            result._ensureIncludeZero();
            result._ensureNotEmpty();
            result._ensureDirection();
            result.hasFixedMin = true;
            result.hasFixedMax = true;
            return result;
        };
        NumericSequenceRange.DEFAULT_MAX = 10;
        NumericSequenceRange.MIN_SUPPORTED_DOUBLE = -1E307;
        NumericSequenceRange.MAX_SUPPORTED_DOUBLE = 1E307;
        return NumericSequenceRange;
    }());
    powerbi.NumericSequenceRange = NumericSequenceRange;
    /** Note: Exported for testability */
    var ValueUtil;
    (function (ValueUtil) {
        function hasValue(value) {
            return value !== undefined && value !== null;
        }
        ValueUtil.hasValue = hasValue;
    })(ValueUtil = powerbi.ValueUtil || (powerbi.ValueUtil = {}));
})(powerbi || (powerbi = {}));
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
    var visuals;
    (function (visuals) {
        var valueFormatter;
        (function (valueFormatter) {
            var StringExtensions = jsCommon.StringExtensions;
            var BeautifiedFormat = {
                '0.00 %;-0.00 %;0.00 %': 'Percentage',
                '0.0 %;-0.0 %;0.0 %': 'Percentage1',
            };
            valueFormatter.DefaultIntegerFormat = 'g';
            valueFormatter.DefaultNumericFormat = '#,0.00';
            valueFormatter.DefaultDateFormat = 'd';
            var defaultLocalizedStrings = {
                'NullValue': '(Blank)',
                'BooleanTrue': 'True',
                'BooleanFalse': 'False',
                'NaNValue': 'NaN',
                'InfinityValue': '+Infinity',
                'NegativeInfinityValue': '-Infinity',
                'RestatementComma': '{0}, {1}',
                'RestatementCompoundAnd': '{0} and {1}',
                'RestatementCompoundOr': '{0} or {1}',
                'DisplayUnitSystem_EAuto_Title': 'Auto',
                'DisplayUnitSystem_E0_Title': 'None',
                'DisplayUnitSystem_E3_LabelFormat': '{0}K',
                'DisplayUnitSystem_E3_Title': 'Thousands',
                'DisplayUnitSystem_E6_LabelFormat': '{0}M',
                'DisplayUnitSystem_E6_Title': 'Millions',
                'DisplayUnitSystem_E9_LabelFormat': '{0}bn',
                'DisplayUnitSystem_E9_Title': 'Billions',
                'DisplayUnitSystem_E12_LabelFormat': '{0}T',
                'DisplayUnitSystem_E12_Title': 'Trillions',
                'Percentage': '#,0.##%',
                'Percentage1': '#,0.#%',
                'TableTotalLabel': 'Total',
                'Tooltip_HighlightedValueDisplayName': 'Highlighted',
                'Funnel_PercentOfFirst': 'Percent of first',
                'Funnel_PercentOfPrevious': 'Percent of previous',
                'Funnel_PercentOfFirst_Highlight': 'Percent of first (highlight)',
                'Funnel_PercentOfPrevious_Highlight': 'Percent of previous (highlight)',
                // Geotagging strings
                'GeotaggingString_Continent': 'continent',
                'GeotaggingString_Continents': 'continents',
                'GeotaggingString_Country': 'country',
                'GeotaggingString_Countries': 'countries',
                'GeotaggingString_State': 'state',
                'GeotaggingString_States': 'states',
                'GeotaggingString_City': 'city',
                'GeotaggingString_Cities': 'cities',
                'GeotaggingString_Town': 'town',
                'GeotaggingString_Towns': 'towns',
                'GeotaggingString_Province': 'province',
                'GeotaggingString_Provinces': 'provinces',
                'GeotaggingString_County': 'county',
                'GeotaggingString_Counties': 'counties',
                'GeotaggingString_Village': 'village',
                'GeotaggingString_Villages': 'villages',
                'GeotaggingString_Post': 'post',
                'GeotaggingString_Zip': 'zip',
                'GeotaggingString_Code': 'code',
                'GeotaggingString_Place': 'place',
                'GeotaggingString_Places': 'places',
                'GeotaggingString_Address': 'address',
                'GeotaggingString_Addresses': 'addresses',
                'GeotaggingString_Street': 'street',
                'GeotaggingString_Streets': 'streets',
                'GeotaggingString_Longitude': 'longitude',
                'GeotaggingString_Longitude_Short': 'lon',
                'GeotaggingString_Latitude': 'latitude',
                'GeotaggingString_Latitude_Short': 'lat',
                'GeotaggingString_PostalCode': 'postal code',
                'GeotaggingString_PostalCodes': 'postal codes',
                'GeotaggingString_ZipCode': 'zip code',
                'GeotaggingString_ZipCodes': 'zip codes',
                'GeotaggingString_Territory': 'territory',
                'GeotaggingString_Territories': 'territories',
            };
            function beautify(format) {
                var key = BeautifiedFormat[format];
                if (key)
                    return defaultLocalizedStrings[key] || format;
                return format;
            }
            function describeUnit(exponent) {
                var exponentLookup = (exponent === -1) ? 'Auto' : exponent.toString();
                var title = defaultLocalizedStrings["DisplayUnitSystem_E" + exponentLookup + "_Title"];
                var format = (exponent <= 0) ? '{0}' : defaultLocalizedStrings["DisplayUnitSystem_E" + exponentLookup + "_LabelFormat"];
                if (title || format)
                    return { title: title, format: format };
            }
            function getLocalizedString(stringId) {
                return defaultLocalizedStrings[stringId];
            }
            valueFormatter.getLocalizedString = getLocalizedString;
            // NOTE: Define default locale options, but these can be overriden by setLocaleOptions.
            var locale = {
                null: defaultLocalizedStrings['NullValue'],
                true: defaultLocalizedStrings['BooleanTrue'],
                false: defaultLocalizedStrings['BooleanFalse'],
                NaN: defaultLocalizedStrings['NaNValue'],
                infinity: defaultLocalizedStrings['InfinityValue'],
                negativeInfinity: defaultLocalizedStrings['NegativeInfinityValue'],
                beautify: function (format) { return beautify(format); },
                describe: function (exponent) { return describeUnit(exponent); },
                restatementComma: defaultLocalizedStrings['RestatementComma'],
                restatementCompoundAnd: defaultLocalizedStrings['RestatementCompoundAnd'],
                restatementCompoundOr: defaultLocalizedStrings['RestatementCompoundOr'],
            };
            var MaxScaledDecimalPlaces = 2;
            var MaxValueForDisplayUnitRounding = 1000;
            var MinIntegerValueForDisplayUnits = 10000;
            var MinPrecisionForDisplayUnits = 2;
            var DateTimeMetadataColumn = {
                displayName: '',
                type: powerbi.ValueType.fromPrimitiveTypeAndCategory(powerbi.PrimitiveType.DateTime),
            };
            function getFormatMetadata(format) {
                return powerbi.NumberFormat.getCustomFormatMetadata(format);
            }
            valueFormatter.getFormatMetadata = getFormatMetadata;
            function setLocaleOptions(options) {
                debug.assertValue(options, 'options');
                locale = options;
                powerbi.DefaultDisplayUnitSystem.reset();
                powerbi.WholeUnitsDisplayUnitSystem.reset();
            }
            valueFormatter.setLocaleOptions = setLocaleOptions;
            function createDefaultFormatter(formatString, allowFormatBeautification) {
                if (allowFormatBeautification === void 0) { allowFormatBeautification = false; }
                var formatBeaut = allowFormatBeautification ? locale.beautify(formatString) : formatString;
                return {
                    format: function (value) {
                        if (value == null)
                            return locale.null;
                        return formatCore(value, formatBeaut);
                    }
                };
            }
            valueFormatter.createDefaultFormatter = createDefaultFormatter;
            /** Creates an IValueFormatter to be used for a range of values. */
            function create(options) {
                debug.assertValue(options, 'options');
                var format = !!options.allowFormatBeautification ? locale.beautify(options.format) : options.format;
                if (shouldUseNumericDisplayUnits(options)) {
                    var displayUnitSystem_1 = createDisplayUnitSystem(options.displayUnitSystemType);
                    var singleValueFormattingMode_1 = !!options.formatSingleValues;
                    displayUnitSystem_1.update(Math.max(Math.abs(options.value || 0), Math.abs(options.value2 || 0)));
                    var forcePrecision_1 = options.precision != null;
                    var decimals_1;
                    if (forcePrecision_1)
                        decimals_1 = -options.precision;
                    else if (displayUnitSystem_1.displayUnit && displayUnitSystem_1.displayUnit.value > 1)
                        decimals_1 = -MaxScaledDecimalPlaces;
                    // Detect axis precision
                    if (options.detectAxisPrecision) {
                        // Trailing zeroes
                        forcePrecision_1 = true;
                        var axisValue = options.value;
                        if (displayUnitSystem_1.displayUnit && displayUnitSystem_1.displayUnit.value > 0)
                            axisValue = axisValue / displayUnitSystem_1.displayUnit.value;
                        if (powerbi.Double.isInteger(axisValue))
                            decimals_1 = 0;
                        else
                            decimals_1 = powerbi.Double.log10(axisValue);
                    }
                    return {
                        format: function (value) {
                            var formattedValue = getStringFormat(value, true /*nullsAreBlank*/);
                            if (!StringExtensions.isNullOrUndefinedOrWhiteSpaceString(formattedValue))
                                return formattedValue;
                            // Round to Double.DEFAULT_PRECISION
                            if (value && !displayUnitSystem_1.isScalingUnit() && Math.abs(value) < MaxValueForDisplayUnitRounding && !forcePrecision_1)
                                value = powerbi.Double.roundToPrecision(value);
                            return singleValueFormattingMode_1 ?
                                displayUnitSystem_1.formatSingleValue(value, format, decimals_1, forcePrecision_1) :
                                displayUnitSystem_1.format(value, format, decimals_1, forcePrecision_1);
                        },
                        displayUnit: displayUnitSystem_1.displayUnit,
                        options: options
                    };
                }
                if (shouldUseDateUnits(options.value, options.value2, options.tickCount)) {
                    var unit_1 = powerbi.DateTimeSequence.getIntervalUnit(options.value /* minDate */, options.value2 /* maxDate */, options.tickCount);
                    return {
                        format: function (value) {
                            if (value == null)
                                return locale.null;
                            var formatString = powerbi.formattingService.dateFormatString(unit_1);
                            return formatCore(value, formatString);
                        },
                        options: options
                    };
                }
                return createDefaultFormatter(format);
            }
            valueFormatter.create = create;
            function format(value, format, allowFormatBeautification) {
                if (value == null)
                    return locale.null;
                return formatCore(value, !!allowFormatBeautification ? locale.beautify(format) : format);
            }
            valueFormatter.format = format;
            function getValueFormat(value, columnType) {
                // If column type not defined or is not datetime
                // ...and the value is of time datetime,
                // then use the default date format string
                if ((!columnType || !columnType.dateTime) && value instanceof Date)
                    return getFormatString(DateTimeMetadataColumn, null, false);
            }
            function formatValueColumn(value, column, formatStringProp) {
                var valueFormat = getValueFormat(value, column.type);
                if (valueFormat)
                    return formatCore(value, valueFormat);
                else
                    return formatCore(value, getFormatString(column, formatStringProp));
            }
            valueFormatter.formatValueColumn = formatValueColumn;
            function createDisplayUnitSystem(displayUnitSystemType) {
                if (displayUnitSystemType == null)
                    return new powerbi.DefaultDisplayUnitSystem(locale.describe);
                switch (displayUnitSystemType) {
                    case powerbi.DisplayUnitSystemType.Default:
                        return new powerbi.DefaultDisplayUnitSystem(locale.describe);
                    case powerbi.DisplayUnitSystemType.WholeUnits:
                        return new powerbi.WholeUnitsDisplayUnitSystem(locale.describe);
                    case powerbi.DisplayUnitSystemType.Verbose:
                        return new powerbi.NoDisplayUnitSystem();
                    case powerbi.DisplayUnitSystemType.DataLabels:
                        return new powerbi.DataLabelsDisplayUnitSystem(locale.describe);
                    default:
                        debug.assertFail('Unknown display unit system type');
                        return new powerbi.DefaultDisplayUnitSystem(locale.describe);
                }
            }
            function shouldUseNumericDisplayUnits(options) {
                var value = options.value;
                var value2 = options.value2;
                var format = options.format;
                // For singleValue visuals like card, gauge we don't want to roundoff data to the nearest thousands so format the whole number / integers below 10K to not use display units
                if (options.formatSingleValues && format) {
                    if (Math.abs(value) < MinIntegerValueForDisplayUnits) {
                        var isCustomFormat = !powerbi.NumberFormat.isStandardFormat(format);
                        if (isCustomFormat) {
                            var precision = powerbi.NumberFormat.getCustomFormatMetadata(format, true /*calculatePrecision*/).precision;
                            if (precision < MinPrecisionForDisplayUnits)
                                return false;
                        }
                        else if (powerbi.Double.isInteger(value))
                            return false;
                    }
                }
                if ((typeof value === 'number') || (typeof value2 === 'number')) {
                    return true;
                }
            }
            function shouldUseDateUnits(value, value2, tickCount) {
                // must check both value and value2 because we'll need to get an interval for date units
                return (value instanceof Date) && (value2 instanceof Date) && (tickCount !== undefined && tickCount !== null);
            }
            /*
             * Get the column format. Order of precendence is:
             *  1. Column format
             *  2. Default PowerView policy for column type
             */
            function getFormatString(column, formatStringProperty, suppressTypeFallback) {
                if (column) {
                    if (formatStringProperty) {
                        var propertyValue = powerbi.DataViewObjects.getValue(column.objects, formatStringProperty);
                        if (propertyValue)
                            return propertyValue;
                    }
                    if (!suppressTypeFallback) {
                        var columnType = column.type;
                        if (columnType) {
                            if (columnType.dateTime)
                                return valueFormatter.DefaultDateFormat;
                            if (columnType.integer)
                                return valueFormatter.DefaultIntegerFormat;
                            if (columnType.numeric)
                                return valueFormatter.DefaultNumericFormat;
                        }
                    }
                }
            }
            valueFormatter.getFormatString = getFormatString;
            function formatListCompound(strings, conjunction) {
                var result;
                if (!strings) {
                    return null;
                }
                var length = strings.length;
                if (length > 0) {
                    result = strings[0];
                    var lastIndex = length - 1;
                    for (var i = 1, len = lastIndex; i < len; i++) {
                        var value = strings[i];
                        result = StringExtensions.format(locale.restatementComma, result, value);
                    }
                    if (length > 1) {
                        var value = strings[lastIndex];
                        result = StringExtensions.format(conjunction, result, value);
                    }
                }
                else {
                    result = null;
                }
                return result;
            }
            /** The returned string will look like 'A, B, ..., and C'  */
            function formatListAnd(strings) {
                return formatListCompound(strings, locale.restatementCompoundAnd);
            }
            valueFormatter.formatListAnd = formatListAnd;
            /** The returned string will look like 'A, B, ..., or C' */
            function formatListOr(strings) {
                return formatListCompound(strings, locale.restatementCompoundOr);
            }
            valueFormatter.formatListOr = formatListOr;
            function formatCore(value, format) {
                var formattedValue = getStringFormat(value, false /*nullsAreBlank*/);
                if (!StringExtensions.isNullOrUndefinedOrWhiteSpaceString(formattedValue))
                    return formattedValue;
                return powerbi.formattingService.formatValue(value, format);
            }
            function getStringFormat(value, nullsAreBlank) {
                if (value == null && nullsAreBlank)
                    return locale.null;
                if (value === true)
                    return locale.true;
                if (value === false)
                    return locale.false;
                if (typeof value === 'number' && isNaN(value))
                    return locale.NaN;
                if (value === Number.NEGATIVE_INFINITY)
                    return locale.negativeInfinity;
                if (value === Number.POSITIVE_INFINITY)
                    return locale.infinity;
                return '';
            }
            function getDisplayUnits(displayUnitSystemType) {
                var displayUnitSystem = createDisplayUnitSystem(displayUnitSystemType);
                return displayUnitSystem.units;
            }
            valueFormatter.getDisplayUnits = getDisplayUnits;
        })(valueFormatter = visuals.valueFormatter || (visuals.valueFormatter = {}));
    })(visuals = powerbi.visuals || (powerbi.visuals = {}));
})(powerbi || (powerbi = {}));
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
    var data;
    (function (data) {
        var DataRoleHelper;
        (function (DataRoleHelper) {
            function getMeasureIndexOfRole(grouped, roleName) {
                if (!_.isEmpty(grouped)) {
                    var firstGroup = grouped[0];
                    if (firstGroup.values && firstGroup.values.length > 0) {
                        for (var i = 0, len = firstGroup.values.length; i < len; ++i) {
                            var value = firstGroup.values[i];
                            if (value && value.source) {
                                if (hasRole(value.source, roleName))
                                    return i;
                            }
                        }
                    }
                }
                return -1;
            }
            DataRoleHelper.getMeasureIndexOfRole = getMeasureIndexOfRole;
            function getCategoryIndexOfRole(categories, roleName) {
                if (!_.isEmpty(categories)) {
                    for (var i = 0, ilen = categories.length; i < ilen; i++) {
                        if (hasRole(categories[i].source, roleName))
                            return i;
                    }
                }
                return -1;
            }
            DataRoleHelper.getCategoryIndexOfRole = getCategoryIndexOfRole;
            function hasRole(column, name) {
                var roles = column.roles;
                return roles && roles[name];
            }
            DataRoleHelper.hasRole = hasRole;
            function hasRoleInDataView(dataView, name) {
                return dataView != null
                    && dataView.metadata != null
                    && dataView.metadata.columns
                    && _.any(dataView.metadata.columns, function (c) { return c.roles && c.roles[name] !== undefined; });
            }
            DataRoleHelper.hasRoleInDataView = hasRoleInDataView;
            function hasRoleInValueColumn(valueColumn, name) {
                return valueColumn && valueColumn.source && valueColumn.source.roles && (valueColumn.source.roles[name] === true);
            }
            DataRoleHelper.hasRoleInValueColumn = hasRoleInValueColumn;
        })(DataRoleHelper = data.DataRoleHelper || (data.DataRoleHelper = {}));
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
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
    var data;
    (function (data) {
        var DataRoleHelper = powerbi.data.DataRoleHelper;
        function createIDataViewCategoricalReader(dataView) {
            return new DataViewCategoricalReader(dataView);
        }
        data.createIDataViewCategoricalReader = createIDataViewCategoricalReader;
        var DataViewCategoricalReader = (function () {
            function DataViewCategoricalReader(dataView) {
                debug.assertValue(dataView, 'dataView');
                this.dataView = dataView;
                // Validate categories
                var categorical;
                if (dataView)
                    categorical = dataView.categorical;
                var categories;
                if (categorical)
                    categories = this.categories = categorical.categories;
                this.hasValidCategories = !_.isEmpty(categories);
                // Validate values
                var values;
                if (categorical)
                    values = categorical.values;
                // We need to access grouped as long as values is non-null; if it's an empty array (meaning there is a category + series), we'll use grouped for non-value stuff
                // TODO: think a bit more about how to represent this internally; Maybe split this up between hasGroup and hasValidValues or something
                this.hasAnyValidValues = false;
                if (values != null) {
                    var grouped = dataView.categorical.values.grouped();
                    if (grouped.length > 0) {
                        this.hasAnyValidValues = true;
                        this.grouped = grouped;
                        // Iterate through the first group's values to populate the valueRoleIndexMapping
                        var valueRoleIndexMapping = {};
                        var firstGroupValues = grouped[0].values;
                        for (var valueIndex = 0, valueCount = firstGroupValues.length; valueIndex < valueCount; valueIndex++) {
                            var valueRoles = firstGroupValues[valueIndex].source.roles;
                            for (var role in valueRoles) {
                                if (valueRoles[role]) {
                                    if (!valueRoleIndexMapping[role])
                                        valueRoleIndexMapping[role] = [];
                                    valueRoleIndexMapping[role].push(valueIndex);
                                }
                            }
                        }
                        this.valueRoleIndexMapping = valueRoleIndexMapping;
                    }
                }
                if (this.hasAnyValidValues)
                    this.dataHasDynamicSeries = !!this.dataView.categorical.values.source;
            }
            // Category methods
            DataViewCategoricalReader.prototype.hasCategories = function () {
                return this.hasValidCategories;
            };
            DataViewCategoricalReader.prototype.getCategoryCount = function () {
                if (this.hasValidCategories)
                    return this.categories[0].values.length;
                else
                    return 0;
            };
            DataViewCategoricalReader.prototype.getCategoryValues = function (roleName) {
                if (this.hasValidCategories) {
                    var categories = this.getCategoryFromRole(roleName);
                    return categories ? categories.values : undefined;
                }
            };
            DataViewCategoricalReader.prototype.getCategoryValue = function (roleName, categoryIndex) {
                if (this.hasValidCategories) {
                    var categories = this.getCategoryFromRole(roleName);
                    return categories ? categories.values[categoryIndex] : undefined;
                }
            };
            DataViewCategoricalReader.prototype.getCategoryColumn = function (roleName) {
                if (this.hasValidCategories)
                    return this.getCategoryFromRole(roleName);
            };
            DataViewCategoricalReader.prototype.getCategoryMetadataColumn = function (roleName) {
                if (this.hasValidCategories) {
                    var categories = this.getCategoryFromRole(roleName);
                    return categories ? categories.source : undefined;
                }
            };
            DataViewCategoricalReader.prototype.getCategoryColumnIdentityFields = function (roleName) {
                if (this.hasValidCategories) {
                    var categories = this.getCategoryFromRole(roleName);
                    return categories ? categories.identityFields : undefined;
                }
            };
            DataViewCategoricalReader.prototype.getCategoryDisplayName = function (roleName) {
                if (this.hasValidCategories) {
                    var targetColumn = this.getCategoryColumn(roleName);
                    if (targetColumn && targetColumn.source) {
                        return targetColumn.source.displayName;
                    }
                }
            };
            DataViewCategoricalReader.prototype.hasCompositeCategories = function () {
                if (this.hasValidCategories)
                    return this.categories.length > 1;
            };
            DataViewCategoricalReader.prototype.hasCategoryWithRole = function (roleName) {
                return DataRoleHelper.getCategoryIndexOfRole(this.categories, roleName) !== -1;
            };
            DataViewCategoricalReader.prototype.getCategoryObjects = function (roleName, categoryIndex) {
                if (this.hasValidCategories) {
                    var category = this.getCategoryFromRole(roleName);
                    if (category && category.objects) {
                        return category.objects[categoryIndex];
                    }
                }
            };
            DataViewCategoricalReader.prototype.getCategoryFromRole = function (roleName) {
                var categories = this.categories;
                return categories[DataRoleHelper.getCategoryIndexOfRole(categories, roleName)];
            };
            // Value and measure methods
            DataViewCategoricalReader.prototype.hasValues = function (roleName) {
                return this.valueRoleIndexMapping && !_.isEmpty(this.valueRoleIndexMapping[roleName]);
            };
            DataViewCategoricalReader.prototype.getValue = function (roleName, categoryIndex, seriesIndex) {
                if (seriesIndex === void 0) { seriesIndex = 0; }
                if (this.hasValues(roleName)) {
                    if (this.dataHasDynamicSeries) {
                        // For dynamic series, we only ever obtain the first value column from a role
                        return this.getValueInternal(roleName, categoryIndex, seriesIndex, 0);
                    }
                    else {
                        // For static series or single series, we obtain value columns from the first series
                        //    and use the seriesIndex to index into the value columns within the role
                        return this.getValueInternal(roleName, categoryIndex, 0, seriesIndex);
                    }
                }
            };
            DataViewCategoricalReader.prototype.getAllValuesForRole = function (roleName, categoryIndex, seriesIndex) {
                if (seriesIndex === void 0) { seriesIndex = 0; }
                if (this.hasValues(roleName)) {
                    var valuesInRole = [];
                    for (var roleValueIndex = void 0, roleValueCount = this.valueRoleIndexMapping[roleName].length; roleValueIndex < roleValueCount; roleValueIndex++) {
                        valuesInRole.push(this.getValueInternal(roleName, categoryIndex, seriesIndex, roleValueIndex));
                    }
                    return valuesInRole;
                }
            };
            /**
             * Obtains the value from grouped.
             *
             * Grouped:             [0] [1] [2] [3] (seriesIndex)
             *                         /   \
             * .values:       [T0] [V0] [V1] [T1] [V2] (valueColumnIndex)
             *                    /    \ \  \
             * v.values:  [0, 1, 2, 3, 4] [5, 6, 7, 8, 9] (categoryIndex)
             *
             *--------------------------------|
             *                      |Category |
             * Series|Value Columns |A B C D E|
             *--------------------------------|
             *      0|col0 (tooltip)|         |
             *       |col1 (value)  |         |
             *       |col2 (value)  |         |
             *       |col3 (tooltip)|         |
             *       |col4 (value)  |         |
             *--------------------------------|
             *      1|col0 (tooltip)|         |
             *       |col1 (value)  |0 1 2 3 4|
             *       |col2 (value)  |5 6 7 8 9|
             *       |col3 (tooltip)|         |
             *       |col4 (value)  |         |
             *--------------------------------|
             *      2|col0 (tooltip)|...      |
             *
             * valueColumnIndexInRole is for indexing into the values for a single role
             * valueColumnIndex is for indexing into the entire value array including
             * all roles
             *
             * The valueRoleIndexMapping converts roleValueIndex and role (value role
             * with an index of 1) into groupedValueIndex (2)
             *
             * Example: getValueInternal(V, 3, 1, 1) returns 8: The second group,
             * the second value column with role "value" (which is converted to a
             * groupedValueIndex of 2) and the fourth value within that value column.
             */
            DataViewCategoricalReader.prototype.getValueInternal = function (roleName, categoryIndex, groupIndex, valueColumnIndexInRole) {
                if (this.hasValues(roleName)) {
                    var valueColumnIndex = this.valueRoleIndexMapping[roleName][valueColumnIndexInRole];
                    return this.grouped[groupIndex].values[valueColumnIndex].values[categoryIndex];
                }
            };
            DataViewCategoricalReader.prototype.getFirstNonNullValueForCategory = function (roleName, categoryIndex) {
                if (this.hasValues(roleName)) {
                    if (!this.dataHasDynamicSeries) {
                        debug.assert(this.grouped.length === 1, "getFirstNonNullValueForCategory shouldn't be called if you have a static series");
                        return this.getValue(roleName, categoryIndex);
                    }
                    for (var seriesIndex = 0, seriesCount = this.grouped.length; seriesIndex < seriesCount; seriesIndex++) {
                        var value = this.getValue(roleName, categoryIndex, seriesIndex);
                        if (value != null) {
                            return value;
                        }
                    }
                }
            };
            DataViewCategoricalReader.prototype.getMeasureQueryName = function (roleName) {
                if (this.hasValues(roleName))
                    return this.grouped[0].values[this.valueRoleIndexMapping[roleName][0]].source.queryName;
            };
            DataViewCategoricalReader.prototype.getValueColumn = function (roleName, seriesIndex) {
                if (seriesIndex === void 0) { seriesIndex = 0; }
                if (this.hasValues(roleName))
                    return this.grouped[seriesIndex].values[this.valueRoleIndexMapping[roleName][0]];
            };
            DataViewCategoricalReader.prototype.getValueMetadataColumn = function (roleName, seriesIndex) {
                if (seriesIndex === void 0) { seriesIndex = 0; }
                if (this.hasValues(roleName))
                    return this.grouped[seriesIndex].values[this.valueRoleIndexMapping[roleName][0]].source;
            };
            DataViewCategoricalReader.prototype.getValueDisplayName = function (roleName, seriesIndex) {
                if (this.hasValues(roleName)) {
                    var targetColumn = this.getValueColumn(roleName, seriesIndex);
                    if (targetColumn && targetColumn.source) {
                        return targetColumn.source.displayName;
                    }
                }
            };
            // Series methods
            DataViewCategoricalReader.prototype.hasDynamicSeries = function () {
                return this.dataHasDynamicSeries;
            };
            DataViewCategoricalReader.prototype.getSeriesCount = function () {
                if (this.hasAnyValidValues)
                    return this.grouped.length;
            };
            DataViewCategoricalReader.prototype.getSeriesObjects = function (seriesIndex) {
                if (this.hasAnyValidValues)
                    return this.grouped[seriesIndex].objects;
            };
            DataViewCategoricalReader.prototype.getSeriesValueColumns = function () {
                if (this.hasAnyValidValues)
                    return this.dataView.categorical.values;
            };
            DataViewCategoricalReader.prototype.getSeriesValueColumnGroup = function (seriesIndex) {
                if (this.hasAnyValidValues)
                    return this.grouped[seriesIndex];
            };
            DataViewCategoricalReader.prototype.getSeriesMetadataColumn = function () {
                if (this.hasAnyValidValues)
                    return this.dataView.categorical.values.source;
            };
            DataViewCategoricalReader.prototype.getSeriesColumnIdentityFields = function () {
                if (this.hasAnyValidValues)
                    return this.dataView.categorical.values.identityFields;
            };
            DataViewCategoricalReader.prototype.getSeriesName = function (seriesIndex) {
                if (this.hasAnyValidValues)
                    return this.grouped[seriesIndex].name;
            };
            DataViewCategoricalReader.prototype.getSeriesDisplayName = function () {
                if (this.hasAnyValidValues && this.dataHasDynamicSeries)
                    return this.dataView.categorical.values.source.displayName;
            };
            return DataViewCategoricalReader;
        }());
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
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
    var data;
    (function (data) {
        var inherit = powerbi.Prototype.inherit;
        var inheritSingle = powerbi.Prototype.inheritSingle;
        var valueFormatter = powerbi.visuals.valueFormatter;
        var DataViewConcatenateCategoricalColumns;
        (function (DataViewConcatenateCategoricalColumns) {
            function detectAndApply(dataView, objectDescriptors, roleMappings, projectionOrdering, selects, projectionActiveItems) {
                debug.assertValue(dataView, 'dataView');
                debug.assertAnyValue(roleMappings, 'roleMappings');
                debug.assertAnyValue(projectionOrdering, 'projectionOrdering');
                var result = dataView;
                var dataViewCategorical = dataView.categorical;
                if (dataViewCategorical) {
                    var concatenationSource = detectCategoricalRoleForHierarchicalGroup(dataViewCategorical, dataView.metadata, roleMappings, selects, projectionActiveItems);
                    if (concatenationSource) {
                        // Consider: Perhaps the re-ordering of categorical columns should happen in the function transformSelects(...) of dataViewTransform?
                        var columnsSortedByProjectionOrdering = sortColumnsByProjectionOrdering(projectionOrdering, concatenationSource.roleName, concatenationSource.categories);
                        if (columnsSortedByProjectionOrdering.length >= 2) {
                            var activeItemsToIgnoreInConcatenation = _.chain(projectionActiveItems[concatenationSource.roleName])
                                .filter(function (activeItemInfo) { return activeItemInfo.suppressConcat; })
                                .map(function (activeItemInfo) { return activeItemInfo.queryRef; })
                                .value();
                            result = applyConcatenation(dataView, objectDescriptors, concatenationSource.roleName, columnsSortedByProjectionOrdering, activeItemsToIgnoreInConcatenation);
                        }
                    }
                }
                return result;
            }
            DataViewConcatenateCategoricalColumns.detectAndApply = detectAndApply;
            /** For applying concatenation to the DataViewCategorical that is the data for one of the frames in a play chart. */
            function applyToPlayChartCategorical(metadata, objectDescriptors, categoryRoleName, categorical) {
                debug.assertValue(metadata, 'metadata');
                debug.assertAnyValue(objectDescriptors, 'objectDescriptors');
                debug.assertValue(categorical, 'categorical');
                var result;
                if (!_.isEmpty(categorical.categories) && categorical.categories.length >= 2) {
                    // In PlayChart, the code converts the Visual DataView with a matrix into multiple Visual DataViews, each with a categorical.
                    // metadata and metadata.columns could already be inherited objects as they come from the Visual DataView with a matrix.
                    // To guarantee that this method does not have any side effect on prototypeMetadata (which might already be an inherited obj),
                    // use inherit() rather than inheritSingle() here.
                    var transformingColumns_1 = inherit(metadata.columns);
                    var transformingMetadata = inherit(metadata, function (m) { m.columns = transformingColumns_1; });
                    var transformingDataView = { metadata: transformingMetadata, categorical: categorical };
                    result = applyConcatenation(transformingDataView, objectDescriptors, categoryRoleName, categorical.categories, []);
                }
                else {
                    result = { metadata: metadata, categorical: categorical };
                }
                return result;
            }
            DataViewConcatenateCategoricalColumns.applyToPlayChartCategorical = applyToPlayChartCategorical;
            /**
             * Returns the role and its assocated category columns (from dataViewCategorical.categories)
             * that should be concatenated for the case of hierarchical group.
             *
             * Note: In the future if we support sibling hierarchical groups in categorical,
             * change the return type to CategoryColumnsByRole[] and update detection logic.
             */
            function detectCategoricalRoleForHierarchicalGroup(dataViewCategorical, metadata, dataViewMappings, selects, projectionActiveItems) {
                debug.assertValue(dataViewCategorical, 'dataViewCategorical');
                debug.assertAnyValue(dataViewMappings, 'dataViewMappings');
                var result;
                // For now, just handle the case where roleMappings.length === 1.
                // In the future, if there is more than 1, we might want to proceed if, 
                // for example, all role mappings map category to the same role name and they all have { max: 1 } conditions.
                var roleKinds = data.DataViewSelectTransform.createRoleKindFromMetadata(selects, metadata);
                var projections = data.DataViewSelectTransform.projectionsFromSelects(selects, projectionActiveItems);
                var roleMappings = powerbi.DataViewAnalysis.chooseDataViewMappings(projections, dataViewMappings, roleKinds).supportedMappings;
                var roleMappingForCategorical = (roleMappings && roleMappings.length === 1 && !!roleMappings[0].categorical) ? roleMappings[0] : undefined;
                if (roleMappingForCategorical) {
                    var roleNamesForCategory = getAllRolesInCategories(roleMappingForCategorical.categorical);
                    // With "list" in role mapping, is it possible to have multiple role names for category.
                    // For now, proceed to concatenate category columns only when categories are bound to 1 Role.
                    // We can change this if we want to support independent (sibling) group hierarchies in categorical.
                    if (roleNamesForCategory && roleNamesForCategory.length === 1) {
                        var targetRoleName_1 = roleNamesForCategory[0];
                        var isVisualExpectingMaxOneCategoryColumn = !_.isEmpty(roleMappingForCategorical.conditions) &&
                            _.every(roleMappingForCategorical.conditions, function (condition) { return condition[targetRoleName_1] && condition[targetRoleName_1].max === 1; });
                        if (isVisualExpectingMaxOneCategoryColumn) {
                            var categoriesForTargetRole_1 = _.filter(dataViewCategorical.categories, function (categoryColumn) { return categoryColumn.source.roles && !!categoryColumn.source.roles[targetRoleName_1]; });
                            // At least for now, we expect all category columns for the same role to have the same number of value entries.
                            // If that's not the case, we won't run the concatenate logic for that role at all...
                            var areValuesCountsEqual = _.every(categoriesForTargetRole_1, function (categoryColumn) { return categoryColumn.values.length === categoriesForTargetRole_1[0].values.length; });
                            // Also, there is no need to concatenate columns unless there is actually more than one column
                            if (areValuesCountsEqual &&
                                categoriesForTargetRole_1.length >= 2) {
                                result = {
                                    roleName: targetRoleName_1,
                                    categories: categoriesForTargetRole_1
                                };
                            }
                        }
                    }
                }
                return result;
            }
            /**
             * Returns the array of role names that are mapped to categorical categories.
             * Returns an empty array if none exists.
             */
            function getAllRolesInCategories(categoricalRoleMapping) {
                debug.assertValue(categoricalRoleMapping, 'categoricalRoleMapping');
                var roleNames = [];
                powerbi.DataViewMapping.visitCategoricalCategories(categoricalRoleMapping.categories, {
                    visitRole: function (roleName) {
                        roleNames.push(roleName);
                    }
                });
                return roleNames;
            }
            function applyConcatenation(dataView, objectDescriptors, roleName, columnsSortedByProjectionOrdering, queryRefsToIgnore) {
                debug.assertValue(dataView, 'dataView');
                debug.assertAnyValue(objectDescriptors, 'objectDescriptors');
                debug.assertValue(roleName, 'roleName');
                debug.assert(columnsSortedByProjectionOrdering && columnsSortedByProjectionOrdering.length >= 2, 'columnsSortedByProjectionOrdering && columnsSortedByProjectionOrdering.length >= 2');
                var formatStringPropId = data.DataViewObjectDescriptors.findFormatString(objectDescriptors);
                var concatenatedValues = concatenateValues(columnsSortedByProjectionOrdering, queryRefsToIgnore, formatStringPropId);
                var columnsSourceSortedByProjectionOrdering = _.map(columnsSortedByProjectionOrdering, function (categoryColumn) { return categoryColumn.source; });
                var concatenatedColumnMetadata = createConcatenatedColumnMetadata(roleName, columnsSourceSortedByProjectionOrdering, queryRefsToIgnore);
                var transformedDataView = inheritSingle(dataView);
                addToMetadata(transformedDataView, concatenatedColumnMetadata);
                var concatenatedCategoryColumn = createConcatenatedCategoryColumn(columnsSortedByProjectionOrdering, concatenatedColumnMetadata, concatenatedValues);
                var dataViewCategorical = dataView.categorical;
                var transformedCategoricalCategories = _.difference(dataViewCategorical.categories, columnsSortedByProjectionOrdering);
                transformedCategoricalCategories.push(concatenatedCategoryColumn);
                var transformedCategorical = inheritSingle(dataViewCategorical);
                transformedCategorical.categories = transformedCategoricalCategories;
                transformedDataView.categorical = transformedCategorical;
                return transformedDataView;
            }
            function concatenateValues(columnsSortedByProjectionOrdering, queryRefsToIgnore, formatStringPropId) {
                debug.assertValue(columnsSortedByProjectionOrdering, 'columnsSortedByProjectionOrdering');
                debug.assertAnyValue(queryRefsToIgnore, 'queryRefsToIgnore');
                debug.assertAnyValue(formatStringPropId, 'formatStringPropId');
                var concatenatedValues = [];
                // concatenate the values in dataViewCategorical.categories[0..length-1].values[j], and store it in combinedValues[j]
                for (var _i = 0, columnsSortedByProjectionOrdering_1 = columnsSortedByProjectionOrdering; _i < columnsSortedByProjectionOrdering_1.length; _i++) {
                    var categoryColumn = columnsSortedByProjectionOrdering_1[_i];
                    var formatString = valueFormatter.getFormatString(categoryColumn.source, formatStringPropId);
                    for (var i = 0, len = categoryColumn.values.length; i < len; i++) {
                        if (!_.contains(queryRefsToIgnore, categoryColumn.source.queryName)) {
                            var value = categoryColumn.values && categoryColumn.values[i];
                            var formattedValue = valueFormatter.format(value, formatString);
                            concatenatedValues[i] = (concatenatedValues[i] === undefined) ? formattedValue : (formattedValue + ' ' + concatenatedValues[i]);
                        }
                    }
                }
                return concatenatedValues;
            }
            /**
            * Returns a new array of elements from columns as they are ordered for the specified roleName in the specified projectionOrdering.
            */
            function sortColumnsByProjectionOrdering(projectionOrdering, roleName, columns) {
                debug.assertAnyValue(projectionOrdering, 'projectionOrdering');
                debug.assertValue(roleName, 'roleName');
                debug.assertValue(columns, 'columns');
                var columnsInProjectionOrdering;
                if (projectionOrdering) {
                    // the numeric values in projectionOrdering correspond to the index property of DataViewMetadataColumn
                    var columnsByIndex_1 = {};
                    for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
                        var column = columns_1[_i];
                        if (column.source.roles[roleName]) {
                            debug.assert(!columnsByIndex_1[column.source.index], 'The specified columns should not contain multiple columns with same index: ' + column.source.index);
                            columnsByIndex_1[column.source.index] = column;
                        }
                    }
                    var columnIndicesInProjectionOrdering = projectionOrdering[roleName];
                    columnsInProjectionOrdering = _.chain(columnIndicesInProjectionOrdering)
                        .map(function (columnIndex) { return columnsByIndex_1[columnIndex]; })
                        .filter(function (column) { return !!column; })
                        .value();
                }
                else {
                    // If projectionOrder is unspecified, just return the columns for the specified role in their current order
                    columnsInProjectionOrdering = _.filter(columns, function (column) { return column.source.roles[roleName]; });
                }
                return columnsInProjectionOrdering;
            }
            /**
             * Creates the column metadata that will back the column with the concatenated values.
             */
            function createConcatenatedColumnMetadata(roleName, sourceColumnsSortedByProjectionOrdering, queryRefsToIgnore) {
                debug.assertValue(roleName, 'roleName');
                debug.assertNonEmpty(sourceColumnsSortedByProjectionOrdering, 'sourceColumnsSortedByProjectionOrdering');
                debug.assert(_.chain(sourceColumnsSortedByProjectionOrdering).map(function (c) { return c.isMeasure; }).uniq().value().length === 1, 'pre-condition: caller code should not attempt to combine a mix of measure columns and non-measure columns');
                var concatenatedDisplayName;
                for (var _i = 0, sourceColumnsSortedByProjectionOrdering_1 = sourceColumnsSortedByProjectionOrdering; _i < sourceColumnsSortedByProjectionOrdering_1.length; _i++) {
                    var columnSource = sourceColumnsSortedByProjectionOrdering_1[_i];
                    if (!_.contains(queryRefsToIgnore, columnSource.queryName)) {
                        concatenatedDisplayName = (concatenatedDisplayName == null) ? columnSource.displayName : (columnSource.displayName + ' ' + concatenatedDisplayName);
                    }
                }
                var newRoles = {};
                newRoles[roleName] = true;
                var newColumnMetadata = {
                    displayName: concatenatedDisplayName,
                    roles: newRoles,
                    type: powerbi.ValueType.fromPrimitiveTypeAndCategory(powerbi.PrimitiveType.Text)
                };
                var columnSourceForCurrentDrillLevel = _.last(sourceColumnsSortedByProjectionOrdering);
                if (columnSourceForCurrentDrillLevel.isMeasure !== undefined) {
                    newColumnMetadata.isMeasure = columnSourceForCurrentDrillLevel.isMeasure;
                }
                // TODO VSTS 6842046: Investigate whether we should change that property to mandatory or change the Chart visual code.
                // If queryName is not set at all, the column chart visual will only render column for the first group instance.
                // If queryName is set to any string other than columnForCurrentDrillLevel.source.queryName, then drilldown by group instance is broken (VSTS 6847879).
                newColumnMetadata.queryName = columnSourceForCurrentDrillLevel.queryName;
                return newColumnMetadata;
            }
            function addToMetadata(transformedDataView, newColumn) {
                debug.assertValue(transformedDataView, 'transformedDataView');
                debug.assertValue(newColumn, 'newColumn');
                var transformedColumns = inheritSingle(transformedDataView.metadata.columns);
                transformedColumns.push(newColumn);
                var transformedMetadata = inheritSingle(transformedDataView.metadata);
                transformedMetadata.columns = transformedColumns;
                transformedDataView.metadata = transformedMetadata;
            }
            function createConcatenatedCategoryColumn(sourceColumnsSortedByProjectionOrdering, columnMetadata, concatenatedValues) {
                debug.assert(sourceColumnsSortedByProjectionOrdering && sourceColumnsSortedByProjectionOrdering.length >= 2, 'sourceColumnsSortedByProjectionOrdering && sourceColumnsSortedByProjectionOrdering.length >= 2');
                var newCategoryColumn = {
                    source: columnMetadata,
                    values: concatenatedValues
                };
                // We expect every DataViewCategoryColumn in concatenationSourceColumns to have the same set of identities, always.
                // So, we'll just take the identities and identityFields from the first column
                var firstColumn = sourceColumnsSortedByProjectionOrdering[0];
                if (firstColumn.identity) {
                    newCategoryColumn.identity = firstColumn.identity;
                }
                if (firstColumn.identityFields) {
                    newCategoryColumn.identityFields = firstColumn.identityFields;
                }
                // It is safe to look at the first column as it is the one that is being set by findSelectedCategoricalColumn
                if (firstColumn.objects) {
                    newCategoryColumn.objects = firstColumn.objects;
                }
                return newCategoryColumn;
            }
        })(DataViewConcatenateCategoricalColumns = data.DataViewConcatenateCategoricalColumns || (data.DataViewConcatenateCategoricalColumns = {}));
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
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
    var DataViewMapping;
    (function (DataViewMapping) {
        function visitMapping(mapping, visitor) {
            debug.assertValue(mapping, 'mapping');
            debug.assertValue(visitor, 'visitor');
            var categorical = mapping.categorical;
            if (categorical)
                visitCategorical(categorical, visitor);
            var table = mapping.table;
            if (table)
                visitTable(table, visitor);
            var matrix = mapping.matrix;
            if (matrix)
                visitMatrix(matrix, visitor);
            var tree = mapping.tree;
            if (tree)
                visitTree(tree, visitor);
            var single = mapping.single;
            if (single)
                visitSingle(single, visitor);
        }
        DataViewMapping.visitMapping = visitMapping;
        function visitCategorical(mapping, visitor) {
            debug.assertValue(mapping, 'mapping');
            debug.assertValue(visitor, 'visitor');
            visitCategoricalCategories(mapping.categories, visitor);
            visitCategoricalValues(mapping.values, visitor);
        }
        DataViewMapping.visitCategorical = visitCategorical;
        function visitCategoricalCategories(mapping, visitor) {
            debug.assertAnyValue(mapping, 'mapping');
            debug.assertValue(visitor, 'visitor');
            if (mapping) {
                visitBind(mapping, visitor);
                visitFor(mapping, visitor);
                visitList(mapping, visitor);
                visitReduction(mapping, visitor);
            }
        }
        DataViewMapping.visitCategoricalCategories = visitCategoricalCategories;
        function visitCategoricalValues(mapping, visitor) {
            debug.assertAnyValue(mapping, 'mapping');
            debug.assertValue(visitor, 'visitor');
            if (mapping) {
                visitBind(mapping, visitor, 0 /* CategoricalValue */);
                visitFor(mapping, visitor, 0 /* CategoricalValue */);
                visitList(mapping, visitor, 0 /* CategoricalValue */);
                var groupedRoleMapping = mapping;
                visitGrouped(groupedRoleMapping, visitor);
                var group = groupedRoleMapping.group;
                if (group) {
                    for (var _i = 0, _a = group.select; _i < _a.length; _i++) {
                        var item = _a[_i];
                        visitBind(item, visitor, 1 /* CategoricalValueGroup */);
                        visitFor(item, visitor, 1 /* CategoricalValueGroup */);
                    }
                }
            }
        }
        DataViewMapping.visitCategoricalValues = visitCategoricalValues;
        function visitTable(mapping, visitor) {
            debug.assertValue(mapping, 'mapping');
            debug.assertValue(visitor, 'visitor');
            var rows = mapping.rows;
            visitBind(rows, visitor);
            visitFor(rows, visitor);
            visitList(rows, visitor);
            visitReduction(rows, visitor);
        }
        DataViewMapping.visitTable = visitTable;
        function visitMatrix(mapping, visitor) {
            debug.assertValue(mapping, 'mapping');
            debug.assertValue(visitor, 'visitor');
            visitMatrixItems(mapping.rows, visitor);
            visitMatrixItems(mapping.columns, visitor);
            visitMatrixItems(mapping.values, visitor);
        }
        /**
         * For visiting DataViewMatrixMapping.rows, DataViewMatrixMapping.columns, or DataViewMatrixMapping.values.
         *
         * @param mapping Can be one of DataViewMatrixMapping.rows, DataViewMatrixMapping.columns, or DataViewMatrixMapping.values.
         * @param visitor The visitor.
         */
        function visitMatrixItems(mapping, visitor) {
            debug.assertAnyValue(mapping, 'mapping');
            debug.assertValue(visitor, 'visitor');
            if (mapping) {
                visitFor(mapping, visitor);
                visitList(mapping, visitor);
                visitReduction(mapping, visitor);
            }
        }
        DataViewMapping.visitMatrixItems = visitMatrixItems;
        function visitTree(mapping, visitor) {
            debug.assertValue(mapping, 'mapping');
            debug.assertValue(visitor, 'visitor');
            visitTreeNodes(mapping.nodes, visitor);
            visitTreeValues(mapping.values, visitor);
        }
        function visitTreeNodes(mapping, visitor) {
            debug.assertAnyValue(mapping, 'mapping');
            debug.assertValue(visitor, 'visitor');
            if (mapping) {
                visitFor(mapping, visitor);
                visitReduction(mapping, visitor);
            }
        }
        DataViewMapping.visitTreeNodes = visitTreeNodes;
        function visitTreeValues(mapping, visitor) {
            debug.assertAnyValue(mapping, 'mapping');
            debug.assertValue(visitor, 'visitor');
            if (mapping) {
                visitFor(mapping, visitor);
            }
        }
        DataViewMapping.visitTreeValues = visitTreeValues;
        function visitBind(mapping, visitor, context) {
            debug.assertValue(mapping, 'mapping');
            debug.assertValue(visitor, 'visitor');
            var bind = mapping.bind;
            if (bind) {
                if (context != null)
                    visitor.visitRole(bind.to, context);
                else
                    visitor.visitRole(bind.to);
            }
        }
        function visitFor(mapping, visitor, context) {
            debug.assertValue(mapping, 'mapping');
            debug.assertValue(visitor, 'visitor');
            var forValue = mapping.for;
            if (forValue) {
                if (context != null)
                    visitor.visitRole(forValue.in, context);
                else
                    visitor.visitRole(forValue.in);
            }
        }
        function visitList(mapping, visitor, context) {
            debug.assertValue(mapping, 'mapping');
            debug.assertValue(visitor, 'visitor');
            var select = mapping.select;
            if (select) {
                for (var _i = 0, select_1 = select; _i < select_1.length; _i++) {
                    var item = select_1[_i];
                    visitBind(item, visitor, context);
                    visitFor(item, visitor, context);
                }
            }
        }
        function visitGrouped(mapping, visitor) {
            debug.assertAnyValue(mapping, 'mapping');
            debug.assertValue(visitor, 'visitor');
            if (!mapping)
                return;
            var group = mapping.group;
            if (group) {
                visitor.visitRole(group.by);
                visitReduction(group, visitor);
            }
        }
        DataViewMapping.visitGrouped = visitGrouped;
        function visitReduction(mapping, visitor) {
            debug.assertValue(mapping, 'mapping');
            debug.assertValue(visitor, 'visitor');
            if (visitor.visitReduction) {
                var reductionAlgorithm = mapping.dataReductionAlgorithm;
                if (reductionAlgorithm) {
                    visitor.visitReduction(reductionAlgorithm);
                }
            }
        }
        function visitSingle(mapping, visitor) {
            debug.assertValue(mapping, 'mapping');
            debug.assertValue(visitor, 'visitor');
            visitor.visitRole(mapping.role);
        }
    })(DataViewMapping = powerbi.DataViewMapping || (powerbi.DataViewMapping = {}));
})(powerbi || (powerbi = {}));
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
    var data;
    (function (data) {
        var inheritSingle = powerbi.Prototype.inheritSingle;
        var DataViewNormalizeValues;
        (function (DataViewNormalizeValues) {
            function apply(options) {
                debug.assertValue(options, 'options');
                var rolesToNormalize = _.filter(options.dataRoles, function (role) { return !_.isEmpty(role.requiredTypes); });
                filterVariantMeasures(options.dataview, options.dataViewMappings, rolesToNormalize);
            }
            DataViewNormalizeValues.apply = apply;
            function filterVariantMeasures(dataview, dataViewMappings, rolesToNormalize) {
                debug.assertValue(dataview, 'dataview');
                // Don't perform this unless we actually have dataViewMappings and variant measures to suppress
                // When we switch to lazy per-visual DataView creation, we'll be able to remove this check.
                if (_.isEmpty(dataViewMappings) || _.isEmpty(rolesToNormalize))
                    return;
                var columnFilter = generateMetadataColumnFilter(dataview.metadata.columns, rolesToNormalize);
                var valueFilter = generateValueFilter(dataview.metadata.columns, rolesToNormalize);
                var usedMappings = {};
                for (var _i = 0, dataViewMappings_1 = dataViewMappings; _i < dataViewMappings_1.length; _i++) {
                    var dataViewMapping = dataViewMappings_1[_i];
                    // Get dataview specified in mappings which are also in dataview
                    for (var dataViewMappingProp in dataViewMapping) {
                        if (dataview[dataViewMappingProp] != null)
                            usedMappings[dataViewMappingProp] = true;
                    }
                }
                if (usedMappings['categorical'])
                    filterVariantMeasuresCategorical(dataview.categorical, columnFilter, valueFilter);
                if (usedMappings['table'])
                    filterVariantMeasuresTable(dataview.table, columnFilter, valueFilter);
                if (usedMappings['tree'])
                    filterVariantMeasuresTreeNode(dataview.tree.root, columnFilter, valueFilter);
                if (usedMappings['matrix'])
                    filterVariantMeasuresMatrix(dataview.matrix, columnFilter, valueFilter);
                if (usedMappings['single'])
                    filterVariantMeasuresSingle(dataview, dataViewMappings, rolesToNormalize, valueFilter);
            }
            DataViewNormalizeValues.filterVariantMeasures = filterVariantMeasures;
            function generateMetadataColumnFilter(columns, rolesToNormalize) {
                if (!columns || !rolesToNormalize)
                    return function () { return false; };
                var columnsToNormalize = {};
                for (var _i = 0, columns_2 = columns; _i < columns_2.length; _i++) {
                    var column = columns_2[_i];
                    var roles = column.roles;
                    if (!roles)
                        continue;
                    for (var _a = 0, rolesToNormalize_1 = rolesToNormalize; _a < rolesToNormalize_1.length; _a++) {
                        var role = rolesToNormalize_1[_a];
                        if (!roles[role.name])
                            continue;
                        columnsToNormalize[column.index] = true;
                        break;
                    }
                }
                return function (columnIndex) {
                    if (isNaN(columnIndex))
                        return false;
                    return !!columnsToNormalize[columnIndex];
                };
            }
            DataViewNormalizeValues.generateMetadataColumnFilter = generateMetadataColumnFilter;
            function generateValueFilter(columns, rolesToNormalize) {
                if (!columns || !rolesToNormalize)
                    return function () { return true; };
                var columnValueFilters = [];
                // Build columnValueFilters based on role requiredTypes
                for (var _i = 0, columns_3 = columns; _i < columns_3.length; _i++) {
                    var column = columns_3[_i];
                    var columnValueFilter = generateColumnValueFilter(column, rolesToNormalize);
                    if (columnValueFilter)
                        columnValueFilters[column.index] = columnValueFilter;
                }
                return function (columnIndex, value) {
                    if (columnValueFilters[columnIndex])
                        return columnValueFilters[columnIndex](value);
                    return true;
                };
            }
            DataViewNormalizeValues.generateValueFilter = generateValueFilter;
            function generateColumnValueFilter(column, rolesToNormalize) {
                var requiredTypes = getColumnRequiredTypes(column, rolesToNormalize);
                if (_.isEmpty(requiredTypes))
                    return;
                return function (value) {
                    return doesValueMatchTypes(value, requiredTypes);
                };
            }
            function getColumnRequiredTypes(column, rolesToNormalize) {
                var requiredTypes = [];
                var columnRoles = column && column.roles;
                if (!columnRoles)
                    return requiredTypes;
                for (var _i = 0, rolesToNormalize_2 = rolesToNormalize; _i < rolesToNormalize_2.length; _i++) {
                    var role = rolesToNormalize_2[_i];
                    if (!columnRoles[role.name])
                        continue;
                    for (var _a = 0, _b = role.requiredTypes; _a < _b.length; _a++) {
                        var typeDescriptor = _b[_a];
                        var type = powerbi.ValueType.fromDescriptor(typeDescriptor);
                        requiredTypes.push(type);
                    }
                }
                return requiredTypes;
            }
            DataViewNormalizeValues.getColumnRequiredTypes = getColumnRequiredTypes;
            function filterVariantMeasuresCategorical(dataview, columnFilter, valueFilter) {
                var values = dataview && dataview.values;
                if (!values)
                    return;
                var valuesGrouped = values.grouped();
                if (!valuesGrouped)
                    return;
                for (var _i = 0, valuesGrouped_1 = valuesGrouped; _i < valuesGrouped_1.length; _i++) {
                    var valueGroup = valuesGrouped_1[_i];
                    var valuesInGroup = valueGroup.values;
                    for (var _a = 0, valuesInGroup_1 = valuesInGroup; _a < valuesInGroup_1.length; _a++) {
                        var valueColumn = valuesInGroup_1[_a];
                        var columnIndex = valueColumn.source.index;
                        if (!columnFilter(columnIndex))
                            continue;
                        for (var i = 0, ilen = valueColumn.values.length; i < ilen; i++) {
                            valueColumn.values = normalizeVariant(valueColumn.values, i, columnIndex, valueFilter);
                        }
                    }
                }
            }
            function filterVariantMeasuresTable(dataview, columnFilter, valueFilter) {
                var columns = dataview && dataview.columns;
                if (!columns)
                    return;
                var filteredColumns = [];
                for (var _i = 0, columns_4 = columns; _i < columns_4.length; _i++) {
                    var column = columns_4[_i];
                    if (columnFilter(column.index))
                        filteredColumns.push(column.index);
                }
                var rows = dataview.rows;
                for (var i = 0, ilen = rows.length; i < ilen; i++) {
                    for (var _a = 0, filteredColumns_1 = filteredColumns; _a < filteredColumns_1.length; _a++) {
                        var index = filteredColumns_1[_a];
                        rows[i] = normalizeVariant(rows[i], index, index, valueFilter);
                    }
                }
            }
            function filterVariantMeasuresTreeNode(node, columnFilter, valueFilter) {
                if (node.values) {
                    for (var columnIndex in node.values) {
                        // In dataView.tree, the keys in node.values correspond to columnIndex of the node value
                        if (columnFilter(columnIndex)) {
                            // According to nojorgen, it is possible to have primitive values as values in the node.values dictionary.
                            if (typeof (node.values[columnIndex]) === 'object' && ('value' in node.values[columnIndex]))
                                node.values[columnIndex] = normalizeVariant(node.values[columnIndex], 'value', columnIndex, valueFilter);
                            else
                                node.values = normalizeVariant(node.values, columnIndex, columnIndex, valueFilter);
                        }
                    }
                }
                else if (node.children) {
                    for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
                        var child = _a[_i];
                        filterVariantMeasuresTreeNode(child, columnFilter, valueFilter);
                    }
                }
            }
            function filterVariantMeasuresMatrix(dataview, columnFilter, valueFilter) {
                var root = dataview && dataview.rows && dataview.rows.root;
                if (!root)
                    return;
                // Recurse into rows.children
                // e.g. rows.children -> .children -> .children.values
                filterVariantMeasuresMatrixRecursive(dataview, root, columnFilter, valueFilter);
            }
            function filterVariantMeasuresMatrixRecursive(dataviewMatrix, node, columnFilter, valueFilter) {
                if (node.values) {
                    for (var id in node.values) {
                        // Note related to VSTS 6547124: In dataView.matrix, the keys in node.values are NOT equivalent to value.valueSourceIndex.
                        var nodeValue = node.values[id];
                        // the property DataViewMatrixNodeValue.valueSourceIndex will not exist if valueSourceIndex is 0 for that value
                        var valueSourceIndex = nodeValue.valueSourceIndex || 0;
                        // index is an optional property on DataViewMetadataColumn, but I am not sure when it will ever be undefined in a matrix' column metadata
                        var columnIndex = dataviewMatrix.valueSources[valueSourceIndex].index;
                        if (_.isNumber(columnIndex) && columnFilter(columnIndex)) {
                            node.values[id] = normalizeVariant(nodeValue, 'value', columnIndex, valueFilter);
                        }
                    }
                }
                else if (node.children) {
                    for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
                        var child = _a[_i];
                        filterVariantMeasuresMatrixRecursive(dataviewMatrix, child, columnFilter, valueFilter);
                    }
                }
            }
            function filterVariantMeasuresSingle(dataview, dataViewMappings, rolesToNormalize, valueFilter) {
                if (!dataview.single)
                    return;
                var roleNames = [];
                for (var _i = 0, rolesToNormalize_3 = rolesToNormalize; _i < rolesToNormalize_3.length; _i++) {
                    var role = rolesToNormalize_3[_i];
                    if (role.name)
                        roleNames.push(role.name);
                }
                var columns = dataview.metadata.columns;
                for (var _a = 0, dataViewMappings_2 = dataViewMappings; _a < dataViewMappings_2.length; _a++) {
                    var dataViewMapping = dataViewMappings_2[_a];
                    var roleName = dataViewMapping.single.role;
                    if (roleNames.indexOf(roleName) !== -1) {
                        var column = firstColumnByRoleName(columns, roleName);
                        if (column)
                            dataview.single = normalizeVariant(dataview.single, 'value', column.index, valueFilter);
                        return;
                    }
                }
            }
            function normalizeVariant(object, key, columnIndex, valueFilter) {
                if (!object)
                    return;
                var value = object[key];
                if (value !== null && !valueFilter(columnIndex, value)) {
                    object = inheritSingle(object);
                    object[key] = null;
                }
                return object;
            }
            DataViewNormalizeValues.normalizeVariant = normalizeVariant;
            function doesValueMatchTypes(value, types) {
                for (var _i = 0, types_1 = types; _i < types_1.length; _i++) {
                    var type = types_1[_i];
                    if (type.numeric || type.integer)
                        return typeof (value) === 'number';
                }
                return false;
            }
            function firstColumnByRoleName(columns, roleName) {
                for (var _i = 0, columns_5 = columns; _i < columns_5.length; _i++) {
                    var column = columns_5[_i];
                    var columnRoles = column && column.roles;
                    if (columnRoles && columnRoles[roleName])
                        return column;
                }
            }
        })(DataViewNormalizeValues = data.DataViewNormalizeValues || (data.DataViewNormalizeValues = {}));
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
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
    var DataViewObjects;
    (function (DataViewObjects) {
        /** Gets the value of the given object/property pair. */
        function getValue(objects, propertyId, defaultValue) {
            debug.assertAnyValue(objects, 'objects');
            debug.assertValue(propertyId, 'propertyId');
            if (!objects)
                return defaultValue;
            var objectOrMap = objects[propertyId.objectName];
            debug.assert(!isUserDefined(objectOrMap), 'expected DataViewObject');
            var object = objectOrMap;
            return DataViewObject.getValue(object, propertyId.propertyName, defaultValue);
        }
        DataViewObjects.getValue = getValue;
        /** Gets an object from objects. */
        function getObject(objects, objectName, defaultValue) {
            if (objects && objects[objectName]) {
                var object = objects[objectName];
                debug.assert(!isUserDefined(object), 'expected DataViewObject');
                return object;
            }
            else {
                return defaultValue;
            }
        }
        DataViewObjects.getObject = getObject;
        /** Gets a map of user-defined objects. */
        function getUserDefinedObjects(objects, objectName) {
            if (objects && objects[objectName]) {
                var map = objects[objectName];
                debug.assert(isUserDefined(map), 'expected DataViewObjectMap');
                return map;
            }
        }
        DataViewObjects.getUserDefinedObjects = getUserDefinedObjects;
        /** Gets the solid color from a fill property. */
        function getFillColor(objects, propertyId, defaultColor) {
            var value = getValue(objects, propertyId);
            if (!value || !value.solid)
                return defaultColor;
            return value.solid.color;
        }
        DataViewObjects.getFillColor = getFillColor;
        /** Returns true if the given object represents a collection of user-defined objects */
        function isUserDefined(objectOrMap) {
            return _.isArray(objectOrMap);
        }
        DataViewObjects.isUserDefined = isUserDefined;
    })(DataViewObjects = powerbi.DataViewObjects || (powerbi.DataViewObjects = {}));
    var DataViewObject;
    (function (DataViewObject) {
        function getValue(object, propertyName, defaultValue) {
            debug.assertAnyValue(object, 'object');
            debug.assertValue(propertyName, 'propertyName');
            if (!object)
                return defaultValue;
            var propertyValue = object[propertyName];
            if (propertyValue === undefined)
                return defaultValue;
            return propertyValue;
        }
        DataViewObject.getValue = getValue;
        /** Gets the solid color from a fill property using only a propertyName */
        function getFillColorByPropertyName(objects, propertyName, defaultColor) {
            var value = DataViewObject.getValue(objects, propertyName);
            if (!value || !value.solid)
                return defaultColor;
            return value.solid.color;
        }
        DataViewObject.getFillColorByPropertyName = getFillColorByPropertyName;
    })(DataViewObject = powerbi.DataViewObject || (powerbi.DataViewObject = {}));
})(powerbi || (powerbi = {}));
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
    var data;
    (function (data) {
        var JsonComparer = jsCommon.JsonComparer;
        var DataViewObjectDefinitions;
        (function (DataViewObjectDefinitions) {
            /** Creates or reuses a DataViewObjectDefinition for matching the given objectName and selector within the defns. */
            function ensure(defns, objectName, selector) {
                debug.assertValue(defns, 'defns');
                var defnsForObject = defns[objectName];
                if (!defnsForObject)
                    defns[objectName] = defnsForObject = [];
                for (var i = 0, len = defnsForObject.length; i < len; i++) {
                    var defn = defnsForObject[i];
                    if (data.Selector.equals(defn.selector, selector))
                        return defn;
                }
                var newDefn = {
                    selector: selector,
                    properties: {},
                };
                defnsForObject.push(newDefn);
                return newDefn;
            }
            DataViewObjectDefinitions.ensure = ensure;
            function deleteProperty(defns, objectName, selector, propertyName) {
                debug.assertValue(defns, 'defns');
                var defn = getObjectDefinition(defns, objectName, selector);
                if (!defn)
                    return;
                DataViewObjectDefinition.deleteSingleProperty(defn, propertyName);
            }
            DataViewObjectDefinitions.deleteProperty = deleteProperty;
            function setValue(defns, propertyId, selector, value) {
                debug.assertValue(defns, 'defns');
                debug.assertValue(propertyId, 'propertyId');
                ensure(defns, propertyId.objectName, selector).properties[propertyId.propertyName] = value;
            }
            DataViewObjectDefinitions.setValue = setValue;
            function getValue(defns, propertyId, selector) {
                var properties = getPropertyContainer(defns, propertyId, selector);
                if (!properties)
                    return;
                return properties[propertyId.propertyName];
            }
            DataViewObjectDefinitions.getValue = getValue;
            function getPropertyContainer(defns, propertyId, selector) {
                var defn = getObjectDefinition(defns, propertyId.objectName, selector);
                if (!defn)
                    return;
                return defn.properties;
            }
            DataViewObjectDefinitions.getPropertyContainer = getPropertyContainer;
            function getObjectDefinition(defns, objectName, selector) {
                debug.assertAnyValue(defns, 'defns');
                debug.assertValue(objectName, 'objectName');
                debug.assertAnyValue(selector, 'selector');
                if (!defns)
                    return;
                var defnsForObject = defns[objectName];
                if (!defnsForObject)
                    return;
                for (var i = 0, len = defnsForObject.length; i < len; i++) {
                    var defn = defnsForObject[i];
                    if (data.Selector.equals(defn.selector, selector))
                        return defn;
                }
            }
            DataViewObjectDefinitions.getObjectDefinition = getObjectDefinition;
            function propertiesAreEqual(a, b) {
                if (a instanceof data.SemanticFilter && b instanceof data.SemanticFilter) {
                    return data.SemanticFilter.isSameFilter(a, b);
                }
                return JsonComparer.equals(a, b);
            }
            DataViewObjectDefinitions.propertiesAreEqual = propertiesAreEqual;
            function allPropertiesAreEqual(a, b) {
                debug.assertValue(a, 'a');
                debug.assertValue(b, 'b');
                if (Object.keys(a).length !== Object.keys(b).length)
                    return false;
                for (var property in a) {
                    if (!propertiesAreEqual(a[property], b[property]))
                        return false;
                }
                return true;
            }
            DataViewObjectDefinitions.allPropertiesAreEqual = allPropertiesAreEqual;
            function encodePropertyValue(value, valueTypeDescriptor) {
                debug.assertAnyValue(value, 'value');
                debug.assertValue(valueTypeDescriptor, 'valueTypeDescriptor');
                if (valueTypeDescriptor.bool) {
                    if (typeof (value) !== 'boolean')
                        value = false; // This is fallback, which doesn't really belong here.
                    return data.SQExprBuilder.boolean(value);
                }
                else if (valueTypeDescriptor.text || (valueTypeDescriptor.scripting && valueTypeDescriptor.scripting.source)) {
                    return data.SQExprBuilder.text(value);
                }
                else if (valueTypeDescriptor.numeric) {
                    if ($.isNumeric(value))
                        return data.SQExprBuilder.double(+value);
                }
                else if (valueTypeDescriptor.fill) {
                    if (value) {
                        return {
                            solid: { color: data.SQExprBuilder.text(value) }
                        };
                    }
                }
                else if (valueTypeDescriptor.formatting) {
                    if (valueTypeDescriptor.formatting.labelDisplayUnits) {
                        return data.SQExprBuilder.double(+value);
                    }
                    else {
                        return data.SQExprBuilder.text(value);
                    }
                }
                else if (valueTypeDescriptor.enumeration) {
                    if ($.isNumeric(value))
                        return data.SQExprBuilder.double(+value);
                    else
                        return data.SQExprBuilder.text(value);
                }
                else if (valueTypeDescriptor.misc) {
                    if (value) {
                        value = data.SQExprBuilder.text(value);
                    }
                    else {
                        value = null;
                    }
                }
                else if (valueTypeDescriptor.image) {
                    if (value) {
                        var imageValue = value;
                        var imageDefinition = {
                            name: data.SQExprBuilder.text(imageValue.name),
                            url: data.SQExprBuilder.text(imageValue.url),
                        };
                        if (imageValue.scaling)
                            imageDefinition.scaling = data.SQExprBuilder.text(imageValue.scaling);
                        return imageDefinition;
                    }
                }
                return value;
            }
            DataViewObjectDefinitions.encodePropertyValue = encodePropertyValue;
            function clone(original) {
                debug.assertValue(original, 'original');
                var cloned = {};
                for (var objectName in original) {
                    var originalDefns = original[objectName];
                    if (_.isEmpty(originalDefns))
                        continue;
                    var clonedDefns = [];
                    for (var _i = 0, originalDefns_1 = originalDefns; _i < originalDefns_1.length; _i++) {
                        var originalDefn = originalDefns_1[_i];
                        clonedDefns.push({
                            properties: cloneProperties(originalDefn.properties),
                            selector: originalDefn.selector,
                        });
                    }
                    cloned[objectName] = clonedDefns;
                }
                return cloned;
            }
            DataViewObjectDefinitions.clone = clone;
            function cloneProperties(original) {
                debug.assertValue(original, 'original');
                // NOTE: properties are considered atomic, so a shallow clone is appropriate here.
                return _.clone(original);
            }
        })(DataViewObjectDefinitions = data.DataViewObjectDefinitions || (data.DataViewObjectDefinitions = {}));
        var DataViewObjectDefinition;
        (function (DataViewObjectDefinition) {
            function deleteSingleProperty(defn, propertyName) {
                //note: We decided that delete is acceptable here and that we don't need optimization here
                delete defn.properties[propertyName];
            }
            DataViewObjectDefinition.deleteSingleProperty = deleteSingleProperty;
        })(DataViewObjectDefinition = data.DataViewObjectDefinition || (data.DataViewObjectDefinition = {}));
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
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
    var data;
    (function (data) {
        var DataViewObjectDescriptors;
        (function (DataViewObjectDescriptors) {
            /** Attempts to find the format string property.  This can be useful for upgrade and conversion. */
            function findFormatString(descriptors) {
                return findProperty(descriptors, function (propDesc) {
                    var formattingTypeDesc = powerbi.ValueType.fromDescriptor(propDesc.type).formatting;
                    return formattingTypeDesc && formattingTypeDesc.formatString;
                });
            }
            DataViewObjectDescriptors.findFormatString = findFormatString;
            /** Attempts to find the filter property.  This can be useful for propagating filters from one visual to others. */
            function findFilterOutput(descriptors) {
                return findProperty(descriptors, function (propDesc) {
                    var propType = propDesc.type;
                    return propType && !!propType.filter;
                });
            }
            DataViewObjectDescriptors.findFilterOutput = findFilterOutput;
            /** Attempts to find the default value property.  This can be useful for propagating schema default value. */
            function findDefaultValue(descriptors) {
                return findProperty(descriptors, function (propDesc) {
                    var propType = propDesc.type;
                    return propType && !!propType.expression && propType.expression.defaultValue;
                });
            }
            DataViewObjectDescriptors.findDefaultValue = findDefaultValue;
            function findProperty(descriptors, propPredicate) {
                debug.assertAnyValue(descriptors, 'descriptors');
                debug.assertAnyValue(propPredicate, 'propPredicate');
                if (!descriptors)
                    return;
                for (var objectName in descriptors) {
                    var objPropDescs = descriptors[objectName].properties;
                    for (var propertyName in objPropDescs) {
                        if (propPredicate(objPropDescs[propertyName])) {
                            return {
                                objectName: objectName,
                                propertyName: propertyName,
                            };
                        }
                    }
                }
            }
        })(DataViewObjectDescriptors = data.DataViewObjectDescriptors || (data.DataViewObjectDescriptors = {}));
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
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
    var data;
    (function (data) {
        var DataViewObjectEvaluationUtils;
        (function (DataViewObjectEvaluationUtils) {
            function evaluateDataViewObjects(evalContext, objectDescriptors, objectDefns) {
                debug.assertValue(evalContext, 'evalContext');
                debug.assertValue(objectDescriptors, 'objectDescriptors');
                debug.assertValue(objectDefns, 'objectDefns');
                var objects;
                for (var j = 0, jlen = objectDefns.length; j < jlen; j++) {
                    var objectDefinition = objectDefns[j], objectName = objectDefinition.name;
                    var evaluatedObject = data.DataViewObjectEvaluator.run(evalContext, objectDescriptors[objectName], objectDefinition.properties);
                    if (!evaluatedObject)
                        continue;
                    if (!objects)
                        objects = {};
                    // NOTE: this currently has last-object-wins semantics.
                    objects[objectName] = evaluatedObject;
                }
                return objects;
            }
            DataViewObjectEvaluationUtils.evaluateDataViewObjects = evaluateDataViewObjects;
            function groupObjectsBySelector(objectDefinitions) {
                debug.assertAnyValue(objectDefinitions, 'objectDefinitions');
                var grouped = {
                    data: [],
                };
                if (objectDefinitions) {
                    for (var objectName in objectDefinitions) {
                        var objectDefnList = objectDefinitions[objectName];
                        for (var i = 0, len = objectDefnList.length; i < len; i++) {
                            var objectDefn = objectDefnList[i];
                            ensureDefinitionListForSelector(grouped, objectDefn.selector).objects.push({
                                name: objectName,
                                properties: objectDefn.properties,
                            });
                        }
                    }
                }
                return grouped;
            }
            DataViewObjectEvaluationUtils.groupObjectsBySelector = groupObjectsBySelector;
            function ensureDefinitionListForSelector(grouped, selector) {
                debug.assertValue(grouped, 'grouped');
                debug.assertAnyValue(selector, 'selector');
                if (!selector) {
                    if (!grouped.metadataOnce)
                        grouped.metadataOnce = { objects: [] };
                    return grouped.metadataOnce;
                }
                var groupedObjects;
                if (selector.data) {
                    groupedObjects = grouped.data;
                }
                else if (selector.metadata) {
                    if (!grouped.metadata)
                        grouped.metadata = [];
                    groupedObjects = grouped.metadata;
                }
                else if (selector.id) {
                    if (!grouped.userDefined)
                        grouped.userDefined = [];
                    groupedObjects = grouped.userDefined;
                }
                debug.assert(!!groupedObjects, 'GroupedObjects is not defined.  Indicates malformed selector.');
                for (var _i = 0, groupedObjects_1 = groupedObjects; _i < groupedObjects_1.length; _i++) {
                    var item_1 = groupedObjects_1[_i];
                    if (data.Selector.equals(selector, item_1.selector))
                        return item_1;
                }
                var item = {
                    selector: selector,
                    objects: [],
                };
                groupedObjects.push(item);
                return item;
            }
            function addImplicitObjects(objectsForAllSelectors, objectDescriptors, columns, selectTransforms) {
                debug.assertValue(objectsForAllSelectors, 'objectsForAllSelectors');
                debug.assertValue(objectDescriptors, 'objectDescriptors');
                debug.assertValue(columns, 'columns');
                debug.assertAnyValue(selectTransforms, 'selectTransforms');
                if (selectTransforms) {
                    addDefaultFormatString(objectsForAllSelectors, objectDescriptors, columns, selectTransforms);
                    addDefaultValue(objectsForAllSelectors, objectDescriptors, columns, selectTransforms);
                }
            }
            DataViewObjectEvaluationUtils.addImplicitObjects = addImplicitObjects;
            function addDefaultFormatString(objectsForAllSelectors, objectDescriptors, columns, selectTransforms) {
                debug.assertValue(objectsForAllSelectors, 'objectsForAllSelectors');
                debug.assertValue(objectDescriptors, 'objectDescriptors');
                debug.assertValue(columns, 'columns');
                debug.assertValue(selectTransforms, 'selectTransforms');
                var formatStringProp = data.DataViewObjectDescriptors.findFormatString(objectDescriptors);
                if (!formatStringProp)
                    return;
                for (var selectIdx = 0, selectLen = selectTransforms.length; selectIdx < selectLen; selectIdx++) {
                    var selectTransform = selectTransforms[selectIdx];
                    if (!selectTransform)
                        continue;
                    debug.assertValue(selectTransform.queryName, 'selectTransform.queryName');
                    applyFormatString(objectsForAllSelectors, formatStringProp, selectTransform.queryName, selectTransform.format || getColumnFormatForIndex(columns, selectIdx));
                }
            }
            /** Registers properties for default value, if the properties are not explicitly provided. */
            function addDefaultValue(objectsForAllSelectors, objectDescriptors, columns, selectTransforms) {
                debug.assertValue(objectsForAllSelectors, 'objectsForAllSelectors');
                debug.assertValue(objectDescriptors, 'objectDescriptors');
                debug.assertValue(columns, 'columns');
                debug.assertValue(selectTransforms, 'selectTransforms');
                var defaultValueProp = data.DataViewObjectDescriptors.findDefaultValue(objectDescriptors);
                if (!defaultValueProp)
                    return;
                for (var _i = 0, selectTransforms_1 = selectTransforms; _i < selectTransforms_1.length; _i++) {
                    var selectTransform = selectTransforms_1[_i];
                    if (!selectTransform)
                        continue;
                    debug.assertValue(selectTransform.queryName, 'selectTransform.queryName');
                    applyDefaultValue(objectsForAllSelectors, defaultValueProp, selectTransform.queryName, selectTransform.defaultValue);
                }
            }
            function getColumnFormatForIndex(columns, selectIdx) {
                for (var columnIdx = 0, columnLen = columns.length; columnIdx < columnLen; columnIdx++) {
                    var column = columns[columnIdx];
                    if (!column || column.index !== selectIdx)
                        continue;
                    return column.format;
                }
            }
            function applyFormatString(objectsForAllSelectors, formatStringProp, queryName, formatStringValue) {
                if (!formatStringValue)
                    return;
                // There is a format string specified -- apply it as an object property, if there is not already one specified.
                applyMetadataProperty(objectsForAllSelectors, formatStringProp, { metadata: queryName }, data.SQExprBuilder.text(formatStringValue));
            }
            function applyDefaultValue(objectsForAllSelectors, defaultValueProp, queryName, defaultValue) {
                if (!defaultValue)
                    return;
                // There is a default value specified -- apply it as an object property, if there is not already one specified.
                applyMetadataProperty(objectsForAllSelectors, defaultValueProp, { metadata: queryName }, defaultValue);
            }
            function applyMetadataProperty(objectsForAllSelectors, propertyId, selector, value) {
                var objectDefns;
                if (selector) {
                    var metadataObjects = objectsForAllSelectors.metadata;
                    if (!metadataObjects)
                        metadataObjects = objectsForAllSelectors.metadata = [];
                    objectDefns = metadataObjects;
                }
                else {
                    var metadataOnce = objectsForAllSelectors.metadataOnce;
                    if (!metadataOnce)
                        metadataOnce = objectsForAllSelectors.metadataOnce = { selector: selector, objects: [] };
                    objectDefns = [metadataOnce];
                }
                var targetMetadataObject = findWithMatchingSelector(objectDefns, selector);
                var targetObjectDefn;
                if (targetMetadataObject) {
                    var targetObjectDefns = targetMetadataObject.objects;
                    targetObjectDefn = findExistingObject(targetObjectDefns, propertyId.objectName);
                    if (targetObjectDefn) {
                        if (targetObjectDefn.properties[propertyId.propertyName])
                            return;
                    }
                    else {
                        targetObjectDefn = {
                            name: propertyId.objectName,
                            properties: {},
                        };
                        targetObjectDefns.push(targetObjectDefn);
                    }
                }
                else {
                    targetObjectDefn = {
                        name: propertyId.objectName,
                        properties: {}
                    };
                    objectDefns.push({
                        selector: selector,
                        objects: [targetObjectDefn],
                    });
                }
                targetObjectDefn.properties[propertyId.propertyName] = value;
            }
            function findWithMatchingSelector(objects, selector) {
                debug.assertValue(objects, 'objects');
                debug.assertAnyValue(selector, 'selector');
                for (var i = 0, len = objects.length; i < len; i++) {
                    var object = objects[i];
                    if (data.Selector.equals(object.selector, selector))
                        return object;
                }
            }
            function findExistingObject(objectDefns, objectName) {
                debug.assertValue(objectDefns, 'objectDefns');
                debug.assertValue(objectName, 'objectName');
                for (var i = 0, len = objectDefns.length; i < len; i++) {
                    var objectDefn = objectDefns[i];
                    if (objectDefn.name === objectName)
                        return objectDefn;
                }
            }
        })(DataViewObjectEvaluationUtils = data.DataViewObjectEvaluationUtils || (data.DataViewObjectEvaluationUtils = {}));
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
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
    var data;
    (function (data) {
        /** Responsible for evaluating object property expressions to be applied at various scopes in a DataView. */
        var DataViewObjectEvaluator;
        (function (DataViewObjectEvaluator) {
            var colorValueType = powerbi.ValueType.fromDescriptor({ formatting: { color: true } });
            var numericType = powerbi.ValueType.fromDescriptor({ numeric: true });
            var textType = powerbi.ValueType.fromDescriptor({ text: true });
            function run(evalContext, objectDescriptor, propertyDefinitions) {
                debug.assertValue(evalContext, 'evalContext');
                debug.assertAnyValue(objectDescriptor, 'objectDescriptor');
                debug.assertValue(propertyDefinitions, 'propertyDefinitions');
                if (!objectDescriptor)
                    return;
                var object, propertyDescriptors = objectDescriptor.properties;
                for (var propertyName in propertyDefinitions) {
                    var propertyDefinition = propertyDefinitions[propertyName], propertyDescriptor = propertyDescriptors[propertyName];
                    if (!propertyDescriptor)
                        continue;
                    var propertyValue = evaluateProperty(evalContext, propertyDescriptor, propertyDefinition);
                    if (propertyValue === undefined)
                        continue;
                    if (!object)
                        object = {};
                    object[propertyName] = propertyValue;
                }
                return object;
            }
            DataViewObjectEvaluator.run = run;
            /** Note: Exported for testability */
            function evaluateProperty(evalContext, propertyDescriptor, propertyDefinition) {
                debug.assertValue(evalContext, 'evalContext');
                debug.assertValue(propertyDescriptor, 'propertyDescriptor');
                debug.assertValue(propertyDefinition, 'propertyDefinition');
                var structuralType = propertyDescriptor.type;
                if (structuralType && structuralType.expression)
                    return propertyDefinition;
                var value = evaluateValue(evalContext, propertyDefinition, powerbi.ValueType.fromDescriptor(propertyDescriptor.type));
                if (value !== undefined || (propertyDefinition instanceof data.RuleEvaluation))
                    return value;
                return evaluateFill(evalContext, propertyDefinition, structuralType)
                    || evaluateFillRule(evalContext, propertyDefinition, structuralType)
                    || evaluateImage(evalContext, propertyDefinition, structuralType)
                    || evaluateParagraphs(evalContext, propertyDefinition, structuralType)
                    || propertyDefinition;
            }
            DataViewObjectEvaluator.evaluateProperty = evaluateProperty;
            function evaluateFill(evalContext, fillDefn, type) {
                var fillType = type.fill;
                if (!fillType)
                    return;
                if (fillType && fillType.solid && fillType.solid.color && fillDefn.solid) {
                    return {
                        solid: {
                            color: evaluateValue(evalContext, fillDefn.solid.color, powerbi.ValueType.fromExtendedType(powerbi.ExtendedType.Color)),
                        }
                    };
                }
            }
            function evaluateFillRule(evalContext, fillRuleDefn, type) {
                if (!type.fillRule)
                    return;
                if (fillRuleDefn.linearGradient2) {
                    var linearGradient2 = fillRuleDefn.linearGradient2;
                    return {
                        linearGradient2: {
                            min: evaluateColorStop(evalContext, linearGradient2.min),
                            max: evaluateColorStop(evalContext, linearGradient2.max),
                        }
                    };
                }
                if (fillRuleDefn.linearGradient3) {
                    var linearGradient3 = fillRuleDefn.linearGradient3;
                    return {
                        linearGradient3: {
                            min: evaluateColorStop(evalContext, linearGradient3.min),
                            mid: evaluateColorStop(evalContext, linearGradient3.mid),
                            max: evaluateColorStop(evalContext, linearGradient3.max),
                        }
                    };
                }
            }
            function evaluateColorStop(evalContext, colorStop) {
                debug.assertValue(evalContext, 'evalContext');
                debug.assertValue(colorStop, 'colorStop');
                var step = {
                    color: evaluateValue(evalContext, colorStop.color, colorValueType),
                };
                var value = evaluateValue(evalContext, colorStop.value, numericType);
                if (value != null)
                    step.value = value;
                return step;
            }
            function evaluateImage(evalContext, definition, type) {
                debug.assertValue(evalContext, 'evalContext');
                debug.assertAnyValue(definition, 'definition');
                debug.assertValue(type, 'type');
                if (!type.image || !definition)
                    return;
                var value = {
                    name: evaluateValue(evalContext, definition.name, textType),
                    url: evaluateValue(evalContext, definition.url, powerbi.ValueType.fromDescriptor(powerbi.ImageDefinition.urlType)),
                };
                if (definition.scaling)
                    value.scaling = evaluateValue(evalContext, definition.scaling, textType);
                return value;
            }
            function evaluateParagraphs(evalContext, definition, type) {
                debug.assertValue(evalContext, 'evalContext');
                debug.assertAnyValue(definition, 'definition');
                debug.assertValue(type, 'type');
                if (!type.paragraphs || !definition)
                    return;
                return evaluateArrayCopyOnChange(evalContext, definition, evaluateParagraph);
            }
            function evaluateParagraph(evalContext, definition) {
                debug.assertValue(evalContext, 'evalContext');
                debug.assertValue(definition, 'definition');
                var evaluated;
                var definitionTextRuns = definition.textRuns;
                var evaluatedTextRuns = evaluateArrayCopyOnChange(evalContext, definitionTextRuns, evaluateTextRun);
                if (definitionTextRuns !== evaluatedTextRuns) {
                    evaluated = _.clone(definition);
                    evaluated.textRuns = evaluatedTextRuns;
                }
                return evaluated || definition;
            }
            function evaluateTextRun(evalContext, definition) {
                debug.assertValue(evalContext, 'evalContext');
                debug.assertValue(definition, 'definition');
                var evaluated;
                var definitionValue = definition.value;
                var evaluatedValue = evaluateValue(evalContext, definitionValue, textType);
                if (evaluatedValue !== undefined) {
                    evaluated = _.clone(definition);
                    evaluated.value = evaluatedValue;
                }
                return evaluated || definition;
            }
            /**
             * Evaluates an array, and lazily copies on write whenever the evaluator function returns something
             * other than the input to it.
             */
            function evaluateArrayCopyOnChange(evalContext, definitions, evaluator) {
                debug.assertValue(evalContext, 'evalContext');
                debug.assertValue(definitions, 'definitions');
                debug.assertValue(evaluator, 'evaluator');
                var evaluatedValues;
                for (var i = 0, len = definitions.length; i < len; i++) {
                    var definition = definitions[i];
                    var evaluated = evaluator(evalContext, definition);
                    // NOTE: the any casts here are necessary due to the compiler not knowing the relationship
                    // between TEvaluated & TDefinition
                    if (!evaluatedValues && definition !== evaluated) {
                        evaluatedValues = _.take(definitions, i);
                    }
                    if (evaluatedValues) {
                        evaluatedValues.push(evaluated);
                    }
                }
                return evaluatedValues || definitions;
            }
            function evaluateValue(evalContext, definition, valueType) {
                if (definition instanceof data.SQExpr)
                    return ExpressionEvaluator.evaluate(definition, evalContext);
                if (definition instanceof data.RuleEvaluation)
                    return definition.evaluate(evalContext);
            }
            /** Responsible for evaluating SQExprs into values. */
            var ExpressionEvaluator = (function (_super) {
                __extends(ExpressionEvaluator, _super);
                function ExpressionEvaluator() {
                    _super.apply(this, arguments);
                }
                ExpressionEvaluator.evaluate = function (expr, evalContext) {
                    if (expr == null)
                        return;
                    return expr.accept(ExpressionEvaluator.instance, evalContext);
                };
                ExpressionEvaluator.prototype.visitColumnRef = function (expr, evalContext) {
                    return evalContext.getExprValue(expr);
                };
                ExpressionEvaluator.prototype.visitConstant = function (expr, evalContext) {
                    return expr.value;
                };
                ExpressionEvaluator.prototype.visitMeasureRef = function (expr, evalContext) {
                    return evalContext.getExprValue(expr);
                };
                ExpressionEvaluator.prototype.visitAggr = function (expr, evalContext) {
                    return evalContext.getExprValue(expr);
                };
                ExpressionEvaluator.prototype.visitFillRule = function (expr, evalContext) {
                    var inputValue = expr.input.accept(this, evalContext);
                    if (inputValue !== undefined) {
                        var colorAllocator = evalContext.getColorAllocator(expr);
                        if (colorAllocator) {
                            return colorAllocator.color(inputValue);
                        }
                    }
                };
                ExpressionEvaluator.instance = new ExpressionEvaluator();
                return ExpressionEvaluator;
            }(data.DefaultSQExprVisitorWithArg));
        })(DataViewObjectEvaluator = data.DataViewObjectEvaluator || (data.DataViewObjectEvaluator = {}));
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
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
    var data;
    (function (data) {
        var inherit = powerbi.Prototype.inherit;
        var DataViewPivotCategorical;
        (function (DataViewPivotCategorical) {
            /**
             * Pivots categories in a categorical DataView into valueGroupings.
             * This is akin to a mathematical matrix transpose.
             */
            function apply(dataView) {
                debug.assertValue(dataView, 'dataView');
                var categorical = dataView.categorical;
                if (!categorical)
                    return null;
                var categories = categorical.categories;
                if (!categories || categories.length !== 1)
                    return null;
                var values = categorical.values;
                if (_.isEmpty(values) || values.source)
                    return null;
                var category = categories[0], categoryIdentities = category.identity, categoryValues = category.values, pivotedColumns = [], pivotedValues = [];
                for (var rowIdx = 0, rowCount = categoryValues.length; rowIdx < rowCount; rowIdx++) {
                    var categoryValue = categoryValues[rowIdx], categoryIdentity = categoryIdentities[rowIdx];
                    for (var colIdx = 0, colCount = values.length; colIdx < colCount; colIdx++) {
                        var value = values[colIdx], pivotedColumn = inherit(value.source);
                        // A value has a series group, which is not implemented for pivoting -- just give up.
                        if (value.identity)
                            return null;
                        pivotedColumn.groupName = categoryValue;
                        var pivotedValue = {
                            source: pivotedColumn,
                            values: [value.values[rowIdx]],
                            identity: categoryIdentity,
                            min: value.min,
                            max: value.max,
                            subtotal: value.subtotal
                        };
                        var highlights = value.highlights;
                        if (highlights) {
                            pivotedValue.highlights = [highlights[rowIdx]];
                        }
                        pivotedColumns.push(pivotedColumn);
                        pivotedValues.push(pivotedValue);
                    }
                }
                var pivotedMetadata = inherit(dataView.metadata);
                pivotedMetadata.columns = pivotedColumns;
                values = data.DataViewTransform.createValueColumns(pivotedValues, category.identityFields, category.source);
                return {
                    metadata: pivotedMetadata,
                    categorical: {
                        values: values,
                    },
                    matrix: dataView.matrix
                };
            }
            DataViewPivotCategorical.apply = apply;
        })(DataViewPivotCategorical = data.DataViewPivotCategorical || (data.DataViewPivotCategorical = {}));
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
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
    var data;
    (function (data) {
        var DataViewPivotMatrix;
        (function (DataViewPivotMatrix) {
            /** Pivots row hierarchy members in a matrix DataView into column hierarchy. */
            function apply(dataViewMatrix, context) {
                debug.assertValue(dataViewMatrix, 'dataViewMatrix');
                if (!context.columnHierarchyRewritten)
                    dataViewMatrix.columns = powerbi.Prototype.inherit(dataViewMatrix.columns);
                var columns = dataViewMatrix.columns;
                if (!context.rowHierarchyRewritten)
                    dataViewMatrix.rows = powerbi.Prototype.inherit(dataViewMatrix.rows);
                var rows = dataViewMatrix.rows;
                if (columns.levels.length > 1)
                    return;
                var pivotedRowNode = {
                    level: 0
                };
                var columnLeafNodes = columns.root.children;
                var measureCount = columnLeafNodes.length;
                // Notes related to VSTS 6999369: The level value of Measure Header nodes is not necessarily its parent node's level + 1.
                // In particular, the Measure Header column nodes directly under the Grand Total node at level 0 (i.e. _.last(pivotResultMatrix.columns.root.children))
                // will have level === (pivotResultMatrix.columns.levels.length - 1), which will be greater than the Grand Total node's 'level + 1' 
                // in a matrix with 2+ column fields and 2+ measure fields.
                // In this code, all row levels will get pivoted over to the columns hierarchy, hence the level of any Measure Header nodes in the pivot result
                // is just (1 + the level of the deepest row node's level), which === rows.levels.length.
                var pivotResultMeasureHeaderLevel = rows.levels.length;
                if (measureCount > 0) {
                    var index_1 = 0;
                    var callback = function (node) {
                        // Collect values and remove them from row leaves
                        if (node.values) {
                            if (!pivotedRowNode.values)
                                pivotedRowNode.values = {};
                            for (var i = 0; i < measureCount; i++)
                                pivotedRowNode.values[index_1++] = node.values[i];
                            delete node.values;
                        }
                        // Create measure headers if there are more than one measures
                        if (measureCount > 1) {
                            if (!node.children)
                                node.children = [];
                            for (var j = 0; j < measureCount; j++) {
                                var measureHeaderLeaf = { level: pivotResultMeasureHeaderLevel };
                                // Copy levelSourceIndex from columnLeafNodes (as they might have been reordered)
                                var columnLeafNode = columnLeafNodes[j];
                                measureHeaderLeaf.levelSourceIndex = columnLeafNode.levelSourceIndex;
                                if (node.isSubtotal)
                                    measureHeaderLeaf.isSubtotal = true;
                                node.children.push(measureHeaderLeaf);
                            }
                        }
                    };
                    if (context.hierarchyTreesRewritten) {
                        forEachLeaf(rows.root, callback);
                    }
                    else {
                        dataViewMatrix.columns.root = cloneTreeExecuteOnLeaf(rows.root, callback);
                    }
                }
                else {
                    if (!context.hierarchyTreesRewritten) {
                        dataViewMatrix.columns.root = cloneTree(rows.root);
                    }
                }
                if (measureCount > 1) {
                    // Keep measure headers, but move them to the innermost level
                    var level = { sources: columns.levels[0].sources };
                    rows.levels.push(level);
                    columns.levels.length = 0;
                }
                if (context.hierarchyTreesRewritten) {
                    dataViewMatrix.columns.root = rows.root;
                    dataViewMatrix.rows.root = {
                        children: [pivotedRowNode]
                    };
                }
                else {
                    var updatedRowRoot = powerbi.Prototype.inherit(dataViewMatrix.rows.root);
                    updatedRowRoot.children = [pivotedRowNode];
                    dataViewMatrix.rows.root = updatedRowRoot;
                }
                dataViewMatrix.columns.levels = rows.levels;
                dataViewMatrix.rows.levels = [];
            }
            DataViewPivotMatrix.apply = apply;
            function forEachLeaf(root, callback) {
                var children = root.children;
                if (children && children.length > 0) {
                    for (var i = 0, ilen = children.length; i < ilen; i++)
                        forEachLeaf(children[i], callback);
                    return;
                }
                callback(root);
            }
            function cloneTree(node) {
                return cloneTreeExecuteOnLeaf(node);
            }
            DataViewPivotMatrix.cloneTree = cloneTree;
            function cloneTreeExecuteOnLeaf(node, callback) {
                var updatedNode = powerbi.Prototype.inherit(node);
                var children = node.children;
                if (children && children.length > 0) {
                    var newChildren = [];
                    for (var i = 0, ilen = children.length; i < ilen; i++) {
                        var updatedChild = cloneTreeExecuteOnLeaf(children[i], callback);
                        newChildren.push(updatedChild);
                    }
                    updatedNode.children = newChildren;
                }
                else {
                    if (callback)
                        callback(updatedNode);
                }
                return updatedNode;
            }
            DataViewPivotMatrix.cloneTreeExecuteOnLeaf = cloneTreeExecuteOnLeaf;
        })(DataViewPivotMatrix = data.DataViewPivotMatrix || (data.DataViewPivotMatrix = {}));
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
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
    var data;
    (function (data) {
        var DataViewSelfCrossJoin;
        (function (DataViewSelfCrossJoin) {
            /**
             * Returns a new DataView based on the original, with a single DataViewCategorical category that is "cross joined"
             * to itself as a value grouping.
             * This is the mathematical equivalent of taking an array and turning it into an identity matrix.
             */
            function apply(dataView) {
                debug.assertValue(dataView, 'dataView');
                if (!dataView.categorical)
                    return;
                var dataViewCategorical = dataView.categorical;
                if (!dataViewCategorical.categories || dataViewCategorical.categories.length !== 1)
                    return;
                if (dataViewCategorical.values && dataViewCategorical.values.source)
                    return;
                return applyCategorical(dataView.metadata, dataViewCategorical);
            }
            DataViewSelfCrossJoin.apply = apply;
            function applyCategorical(dataViewMetadata, dataViewCategorical) {
                debug.assertValue(dataViewMetadata, 'dataViewMetadata');
                debug.assertValue(dataViewCategorical, 'dataViewCategorical');
                debug.assertValue(dataViewCategorical.categories, 'dataViewCategorical.categories');
                var category = dataViewCategorical.categories[0], categoryValues = category.values, categoryLength = categoryValues.length;
                if (categoryLength === 0)
                    return;
                var valuesArray = dataViewCategorical.values
                    ? dataViewCategorical.values.grouped()[0].values
                    : [];
                var transformedDataView = data.createCategoricalDataViewBuilder()
                    .withCategories(dataViewCategorical.categories)
                    .withGroupedValues(createGroupedValues(category, categoryValues, categoryLength, valuesArray))
                    .build();
                dataViewMetadata = powerbi.Prototype.inherit(dataViewMetadata);
                dataViewMetadata.columns = transformedDataView.metadata.columns;
                return {
                    metadata: dataViewMetadata,
                    categorical: transformedDataView.categorical,
                };
            }
            function createGroupedValues(category, categoryValues, categoryLength, valuesArray) {
                debug.assertValue(category, 'category');
                debug.assertValue(categoryValues, 'categoryValues');
                debug.assertValue(categoryLength, 'categoryLength');
                debug.assertValue(valuesArray, 'valuesArray');
                var nullValuesArray = createNullValues(categoryLength), valuesArrayLen = valuesArray.length, seriesData = [];
                for (var i = 0; i < categoryLength; i++) {
                    var seriesDataItem = [];
                    for (var j = 0; j < valuesArrayLen; j++) {
                        var originalValueColumn = valuesArray[j], originalHighlightValues = originalValueColumn.highlights;
                        var seriesDataItemCategory = {
                            values: inheritArrayWithValue(nullValuesArray, originalValueColumn.values, i),
                        };
                        if (originalHighlightValues)
                            seriesDataItemCategory.highlights = inheritArrayWithValue(nullValuesArray, originalHighlightValues, i);
                        seriesDataItem.push(seriesDataItemCategory);
                    }
                    seriesData.push(seriesDataItem);
                }
                return {
                    groupColumn: {
                        source: category.source,
                        identityFrom: { fields: category.identityFields, identities: category.identity },
                        values: category.values,
                    },
                    valueColumns: _.map(valuesArray, function (v) { return { source: v.source }; }),
                    data: seriesData,
                };
            }
        })(DataViewSelfCrossJoin = data.DataViewSelfCrossJoin || (data.DataViewSelfCrossJoin = {}));
        function createNullValues(length) {
            debug.assertValue(length, 'length');
            var array = new Array(length);
            for (var i = 0; i < length; i++)
                array[i] = null;
            return array;
        }
        function inheritArrayWithValue(nullValues, original, index) {
            var inherited = powerbi.Prototype.inherit(nullValues);
            inherited[index] = original[index];
            return inherited;
        }
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
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
    var data;
    (function (data) {
        var ArrayExtensions = jsCommon.ArrayExtensions;
        var DataShapeBindingDataReduction = powerbi.data.DataShapeBindingDataReduction;
        var inheritSingle = powerbi.Prototype.inheritSingle;
        var DataViewPivotCategoricalToPrimaryGroups;
        (function (DataViewPivotCategoricalToPrimaryGroups) {
            /**
             * If mapping requests cross axis data reduction and the binding has secondary grouping, mutates the binding to
             * pivot the secondary before the primary.
             */
            function pivotBinding(binding, allMappings, finalMapping, defaultDataVolume) {
                // unpivot is inferred from result in DataViewTransform.apply but it does not have the
                // compiled mappings available, let alone the merged mapping, only the original
                // DataViewMappings. to keep that inference easy, only apply pivot when there's
                // only one matching mapping
                if (!allMappings || allMappings.length !== 1)
                    return;
                if (!finalMapping.categorical || !finalMapping.categorical.dataReductionAlgorithm)
                    return;
                if (!binding)
                    return;
                if (!canPivotCategorical(binding, finalMapping))
                    return;
                // pivot secondary onto front of primary
                binding.Primary.Groupings = [binding.Secondary.Groupings[0], binding.Primary.Groupings[0]];
                binding.Secondary = undefined;
                // set primary to pivot reduction
                binding.DataReduction = {
                    Primary: DataShapeBindingDataReduction.createFrom(finalMapping.categorical.dataReductionAlgorithm),
                    DataVolume: finalMapping.categorical.dataVolume || defaultDataVolume,
                };
            }
            DataViewPivotCategoricalToPrimaryGroups.pivotBinding = pivotBinding;
            /** narrowly targets scatter chart scenario for now to keep code simple */
            function isPivotableAxis(axis) {
                return axis
                    && axis.Groupings
                    && axis.Groupings.length === 1
                    && !_.isEmpty(axis.Groupings[0].Projections)
                    && !axis.Groupings[0].Subtotal
                    && _.isEmpty(axis.Groupings[0].SuppressedProjections);
            }
            function canPivotCategorical(binding, mapping) {
                if (!isPivotableAxis(binding.Primary))
                    return false;
                if (!isPivotableAxis(binding.Secondary) || binding.Secondary.Groupings[0].Projections.length !== 1)
                    return false;
                // don't pivot if either axis has a data reduction
                if (binding.DataReduction && (binding.DataReduction.Primary || binding.DataReduction.Secondary))
                    return false;
                return true;
            }
            function unpivotResult(oldDataView, selects, dataViewMappings, projectionActiveItems) {
                if (!inferUnpivotTransform(selects, dataViewMappings, oldDataView, projectionActiveItems))
                    return oldDataView;
                // This returns a subsetted version of the DataView rather than using prototypal inheritance because
                // any dataviews in the old one (including ones invented after this code is written) will correspond
                // to a pivoted query result and therefore will be in the wrong shape for the unpivoted query the
                // querying code made.
                var newDataView = {
                    metadata: {
                        columns: ArrayExtensions.copy(oldDataView.metadata.columns),
                    },
                };
                // preserve view types that aren't affected by pivoting
                if (oldDataView.single)
                    newDataView.single = oldDataView.single;
                if (oldDataView.table)
                    newDataView.table = oldDataView.table;
                // other views are derived from matrix
                if (oldDataView.matrix) {
                    var newDataViewMatrix = unpivotMatrix(oldDataView.matrix);
                    // categorical only if there's data
                    if (!_.isEmpty(newDataViewMatrix.valueSources)) {
                        // Guard against a DataViewMatrix with composite grouping in columns, because composite group in Series is 
                        // not yet expressible in the current version of DataViewValueColumns and DataViewValueColumnGroup interfaces.
                        // this.canPivotCategorical() would have returned false in the first place for this query.
                        var hasCompositeGroupInSeries = data.utils.DataViewMatrixUtils.containsCompositeGroup(newDataViewMatrix.columns);
                        if (!hasCompositeGroupInSeries) {
                            newDataView.categorical = categoricalFromUnpivotedMatrix(newDataViewMatrix, newDataView.metadata.columns);
                        }
                    }
                }
                return newDataView;
            }
            DataViewPivotCategoricalToPrimaryGroups.unpivotResult = unpivotResult;
            /**
             * Infer from the query result and the visual mappings whether the query was pivoted.
             * Narrowly targets scatter chart scenario for now to keep code simple
             */
            function inferUnpivotTransform(selects, dataViewMappings, dataView, projectionActiveItems) {
                if (_.isEmpty(selects) || _.isEmpty(dataViewMappings) || !dataView)
                    return false;
                // select applicable mappings based on select roles
                var roleKinds = data.DataViewSelectTransform.createRoleKindFromMetadata(selects, dataView.metadata);
                var projections = data.DataViewSelectTransform.projectionsFromSelects(selects, projectionActiveItems);
                var supportedDataViewMappings = powerbi.DataViewAnalysis.chooseDataViewMappings(projections, dataViewMappings, roleKinds).supportedMappings;
                // NOTE: limiting to simple situation that handles scatter for now - see the other side in canPivotCategorical
                if (!supportedDataViewMappings || supportedDataViewMappings.length !== 1)
                    return false;
                var categoricalMapping = supportedDataViewMappings[0].categorical;
                if (!categoricalMapping)
                    return false;
                // pivoted query will have produced a matrix
                var matrixDataview = dataView.matrix;
                if (!matrixDataview)
                    return false;
                // matrix must have two levels of grouping
                if (!matrixDataview.rows || !matrixDataview.rows.levels || matrixDataview.rows.levels.length !== 2)
                    return false;
                // get category and value grouping roles
                var categoryGroups = [];
                var valueGroups = [];
                var addGroupingRole = function (roleName, groups) {
                    var roleProjections = projections[roleName];
                    if (!roleProjections)
                        return;
                    for (var _i = 0, _a = roleProjections.all(); _i < _a.length; _i++) {
                        var roleProjection = _a[_i];
                        if (roleKinds[roleProjection.queryRef] === powerbi.VisualDataRoleKind.Grouping)
                            groups.push(roleProjection.queryRef);
                    }
                };
                powerbi.DataViewMapping.visitCategoricalCategories(categoricalMapping.categories, {
                    visitRole: function (roleName) { addGroupingRole(roleName, categoryGroups); }
                });
                powerbi.DataViewMapping.visitCategoricalValues(categoricalMapping.values, {
                    visitRole: function (roleName) { addGroupingRole(roleName, valueGroups); }
                });
                // need both for pivot to have been done
                if (_.isEmpty(categoryGroups) || _.isEmpty(valueGroups))
                    return false;
                // if there was a pivot, there won't be any measures left in the columns
                for (var _i = 0, _a = matrixDataview.columns.levels; _i < _a.length; _i++) {
                    var level = _a[_i];
                    for (var _b = 0, _c = level.sources; _b < _c.length; _b++) {
                        var source = _c[_b];
                        if (!source.isMeasure)
                            return false;
                    }
                }
                return true;
            }
            /**
             * matrix will have two groupings in the rows, outer (series) and inner (categories), and none in the columns.
             * this function changes that so that the categories become the rows and the series the columns.
             */
            function unpivotMatrix(oldMatrix) {
                var oldRows = oldMatrix.rows;
                var oldRoot = oldRows.root;
                var oldChildren = oldRoot.children;
                // series are the outer grouping
                var series = [];
                var seriesIdLevel = oldRows.levels[0];
                var seriesIdFields = oldRoot.childIdentityFields;
                // categories are the inner grouping. 
                var categoryIndex = {};
                var categories = [];
                var categoryIdLevel = oldRows.levels[1];
                var categoryIdFields = _.isEmpty(oldChildren) ? undefined : oldChildren[0].childIdentityFields;
                var measureCount = oldMatrix.valueSources.length;
                // within each series value, the category list may not be complete so cannot simply use the inner loop index
                // to reference it.
                var findCategory = function (identity) {
                    var index = categoryIndex[identity.key];
                    debug.assert(index !== undefined, "findcat() !== undefined");
                    return index;
                };
                // collect series and categories from the row hierarchy
                if (oldChildren) {
                    var addCategory = function (categoryNode) {
                        var key = categoryNode.identity.key;
                        var index = categoryIndex[key];
                        if (index === undefined) {
                            index = categories.length;
                            categoryIndex[key] = index;
                            categories.push(categoryNode);
                        }
                    };
                    for (var _i = 0, oldChildren_1 = oldChildren; _i < oldChildren_1.length; _i++) {
                        var seriesNode = oldChildren_1[_i];
                        series.push(seriesNode);
                        for (var _a = 0, _b = seriesNode.children; _a < _b.length; _a++) {
                            var categoryNode = _b[_a];
                            addCategory(categoryNode);
                        }
                    }
                }
                // extract intersection values from pivoted matrix
                // values will be indexed by categories then series
                var matrixValues = new Array(categories.length);
                for (var j = 0; j < series.length; ++j) {
                    var seriesNode = oldChildren[j];
                    for (var _c = 0, _d = seriesNode.children; _c < _d.length; _c++) {
                        var categoryNode = _d[_c];
                        var i = findCategory(categoryNode.identity); // must lookup actual category index
                        if (!matrixValues[i])
                            matrixValues[i] = new Array(series.length);
                        matrixValues[i][j] = categoryNode.values;
                    }
                }
                // columns of the unpivoted matrix are the series
                var newColumns = {
                    root: {
                        children: _.map(series, function (s) {
                            var inheritedNode = inheritSingle(s);
                            inheritedNode.level = 0; // s.level should already be 0, but just in case...
                            inheritedNode.children = undefined; // if Measure Headers exist in oldMatrix.columns, newColumns.root.children will get populated later in this function
                            inheritedNode.childIdentityFields = undefined;
                            return inheritedNode;
                        }),
                        childIdentityFields: seriesIdFields,
                    },
                    levels: [
                        seriesIdLevel,
                    ],
                };
                // Re-add any Measure Headers from oldMatrix.columns as leaf nodes under newColumns
                if (measureCount > 0) {
                    var newColChildren = _.map(oldMatrix.columns.root.children, function (srcnode) {
                        var dstnode = { level: 1 };
                        if (srcnode.levelSourceIndex)
                            dstnode.levelSourceIndex = srcnode.levelSourceIndex;
                        return dstnode;
                    });
                    for (var i = 0; i < newColumns.root.children.length; ++i)
                        newColumns.root.children[i].children = newColChildren;
                    newColumns.levels.push(oldMatrix.columns.levels[0]);
                }
                // rows of the unpivoted matrix are the categories
                var newRows = {
                    root: {
                        children: _.map(categories, function (c) {
                            var inheritedNode = inheritSingle(c);
                            inheritedNode.level = 0;
                            inheritedNode.children = undefined; // c.children should already be undefined, but just in case...
                            inheritedNode.childIdentityFields = undefined; // c.children should already be undefined, but just in case...
                            return inheritedNode;
                        }),
                        childIdentityFields: categoryIdFields,
                    },
                    levels: [
                        categoryIdLevel,
                    ],
                };
                // put values into rows
                if (measureCount > 0) {
                    for (var i = 0; i < categories.length; ++i) {
                        var row = newRows.root.children[i];
                        var rowValues = {};
                        for (var j = 0; j < series.length; ++j) {
                            var mvalues = matrixValues[i] && matrixValues[i][j];
                            for (var k = 0; k < measureCount; ++k) {
                                var l = j * measureCount + k;
                                rowValues[l] = !mvalues
                                    ? (k === 0 ? { value: null } : { value: null, valueSourceIndex: k })
                                    : mvalues[k];
                            }
                        }
                        row.values = rowValues;
                    }
                }
                var newMatrix = {
                    rows: newRows,
                    columns: newColumns,
                    valueSources: oldMatrix.valueSources,
                };
                return newMatrix;
            }
            /** build a categorical data view from an unpivoted matrix. */
            function categoricalFromUnpivotedMatrix(matrix, columnMetadata) {
                var seriesCount = matrix.columns.root.children.length;
                var measureMetadata = matrix.valueSources;
                var measureCount = measureMetadata.length;
                var categories = createCategoryColumnsFromUnpivotedMatrix(matrix);
                // create grouped values
                var groups = [];
                for (var j = 0; j < seriesCount; ++j) {
                    var seriesColumn = matrix.columns.root.children[j];
                    var group = {
                        values: [],
                        identity: seriesColumn.identity,
                        name: seriesColumn.value || null,
                    };
                    groups.push(group);
                    for (var k = 0; k < measureCount; ++k) {
                        var valueColumnMetadataSrc = measureMetadata[k];
                        var valueColumnMetadataDst = {};
                        for (var key in valueColumnMetadataSrc)
                            valueColumnMetadataDst[key] = valueColumnMetadataSrc[key];
                        valueColumnMetadataDst.groupName = group.name;
                        columnMetadata.push(valueColumnMetadataDst);
                        var valueColumn = {
                            source: valueColumnMetadataDst,
                            values: [],
                            identity: group.identity,
                        };
                        group.values.push(valueColumn);
                        // grab measure values in the group from across rows of matrix
                        var index = k + j * measureCount;
                        for (var _i = 0, _a = matrix.rows.root.children; _i < _a.length; _i++) {
                            var categoryNode = _a[_i];
                            var value = categoryNode.values[index].value;
                            valueColumn.values.push(value);
                        }
                    }
                }
                // and now ungrouped
                var values = [];
                for (var _b = 0, groups_1 = groups; _b < groups_1.length; _b++) {
                    var group = groups_1[_b];
                    for (var k = 0; k < measureCount; ++k) {
                        values.push(group.values[k]);
                    }
                }
                values.grouped = function () { return groups; };
                values.identityFields = matrix.columns.root.childIdentityFields;
                values.source = matrix.columns.levels[0].sources[0];
                // final assembly
                var categorical = {
                    categories: categories,
                    values: values,
                };
                return categorical;
            }
            function createCategoryColumnsFromUnpivotedMatrix(unpivotedMatrix) {
                debug.assertValue(unpivotedMatrix, 'unpivotedMatrix');
                debug.assert(unpivotedMatrix && unpivotedMatrix.rows && unpivotedMatrix.rows.levels && (unpivotedMatrix.rows.levels.length === 1), 'pre-condition: unpivotedMatrix should have exactly one level in row hierarchy');
                // Create categories from rows.  If matrix.rows.levels[0].sources represents a composite group, expand each column in the 
                // composite group into a separate DataViewCategoryColumn.  The identity and childIdentityFields properties will be the 
                // same amongst the resulting DataViewCategoryColumns.
                var categoryIdentity = _.map(unpivotedMatrix.rows.root.children, function (x) { return x.identity; });
                var categoryIdentityFields = unpivotedMatrix.rows.root.childIdentityFields;
                var categorySourceColumns = unpivotedMatrix.rows.levels[0].sources;
                var categories = [];
                for (var i = 0, ilen = categorySourceColumns.length; i < ilen; i++) {
                    var groupLevelValues = _.map(unpivotedMatrix.rows.root.children, function (categoryNode) {
                        var levelValues = categoryNode.levelValues;
                        // Please refer to the interface comments on when this is undefined... But in today's code
                        // I believe we will not see undefined levelValues in the rows of any unpivotedMatrix. 
                        if (levelValues !== undefined) {
                            debug.assert(levelValues[i] && (levelValues[i].levelSourceIndex === i), 'pre-condition: DataViewMatrixNode.levelValues is expected to have one DataViewMatrixGroupValue node per level source column, sorted by levelSourceIndex.');
                            return levelValues[i].value;
                        }
                    });
                    categories.push({
                        source: categorySourceColumns[i],
                        values: groupLevelValues,
                        identity: categoryIdentity,
                        identityFields: categoryIdentityFields,
                    });
                }
                return categories;
            }
        })(DataViewPivotCategoricalToPrimaryGroups = data.DataViewPivotCategoricalToPrimaryGroups || (data.DataViewPivotCategoricalToPrimaryGroups = {}));
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
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
    var data;
    (function (data) {
        var inherit = powerbi.Prototype.inherit;
        var inheritSingle = powerbi.Prototype.inheritSingle;
        var ArrayExtensions = jsCommon.ArrayExtensions;
        var EnumExtensions = jsCommon.EnumExtensions;
        // TODO: refactor & focus DataViewTransform into a service with well-defined dependencies.
        var DataViewTransform;
        (function (DataViewTransform) {
            var fillRulePropertyDescriptor = { type: { fillRule: {} } };
            function apply(options) {
                debug.assertValue(options, 'options');
                // TODO: Flow a context object through to capture errors/warnings about what happens here for better diagnosability.
                var prototype = options.prototype, objectDescriptors = options.objectDescriptors, dataViewMappings = options.dataViewMappings, transforms = options.transforms, projectionActiveItems = transforms && transforms.roles && transforms.roles.activeItems, colorAllocatorFactory = options.colorAllocatorFactory, dataRoles = options.dataRoles;
                if (!prototype)
                    return transformEmptyDataView(objectDescriptors, transforms, colorAllocatorFactory);
                if (!transforms)
                    return [prototype];
                // Transform Query DataView
                prototype = data.DataViewPivotCategoricalToPrimaryGroups.unpivotResult(prototype, transforms.selects, dataViewMappings, projectionActiveItems);
                var visualDataViews = transformQueryToVisualDataView(prototype, transforms, objectDescriptors, dataViewMappings, colorAllocatorFactory, dataRoles);
                // Transform and generate derived visual DataViews
                visualDataViews = data.DataViewRegression.run({
                    dataViewMappings: dataViewMappings,
                    visualDataViews: visualDataViews,
                    dataRoles: dataRoles,
                    objectDescriptors: objectDescriptors,
                    objectDefinitions: transforms.objects,
                    colorAllocatorFactory: colorAllocatorFactory,
                    transformSelects: transforms.selects,
                    metadata: prototype.metadata,
                    projectionActiveItems: projectionActiveItems,
                });
                return visualDataViews;
            }
            DataViewTransform.apply = apply;
            function transformQueryToVisualDataView(prototype, transforms, objectDescriptors, dataViewMappings, colorAllocatorFactory, dataRoles) {
                var transformedDataViews = [];
                var splits = transforms.splits;
                if (_.isEmpty(splits)) {
                    transformedDataViews.push(transformDataView(prototype, objectDescriptors, dataViewMappings, transforms, colorAllocatorFactory, dataRoles));
                }
                else {
                    for (var _i = 0, splits_1 = splits; _i < splits_1.length; _i++) {
                        var split = splits_1[_i];
                        var transformed = transformDataView(prototype, objectDescriptors, dataViewMappings, transforms, colorAllocatorFactory, dataRoles, split.selects);
                        transformedDataViews.push(transformed);
                    }
                }
                return transformedDataViews;
            }
            function transformEmptyDataView(objectDescriptors, transforms, colorAllocatorFactory) {
                if (transforms && transforms.objects) {
                    var emptyDataView = {
                        metadata: {
                            columns: [],
                        }
                    };
                    transformObjects(emptyDataView, 0 /* None */, objectDescriptors, transforms.objects, transforms.selects, colorAllocatorFactory);
                    return [emptyDataView];
                }
                return [];
            }
            function transformDataView(prototype, objectDescriptors, roleMappings, transforms, colorAllocatorFactory, dataRoles, selectsToInclude) {
                debug.assertValue(prototype, 'prototype');
                var targetKinds = getTargetKinds(roleMappings);
                var transformed = inherit(prototype);
                transformed.metadata = inherit(prototype.metadata);
                var projectionOrdering = transforms.roles && transforms.roles.ordering;
                var projectionActiveItems = transforms.roles && transforms.roles.activeItems;
                transformed = transformSelects(transformed, roleMappings, transforms.selects, projectionOrdering, selectsToInclude);
                transformObjects(transformed, targetKinds, objectDescriptors, transforms.objects, transforms.selects, colorAllocatorFactory);
                // Note: Do this step after transformObjects() so that metadata columns in 'transformed' have roles and objects.general.formatString populated
                transformed = data.DataViewConcatenateCategoricalColumns.detectAndApply(transformed, objectDescriptors, roleMappings, projectionOrdering, transforms.selects, projectionActiveItems);
                data.DataViewNormalizeValues.apply({
                    dataview: transformed,
                    dataViewMappings: roleMappings,
                    dataRoles: dataRoles,
                });
                return transformed;
            }
            function getTargetKinds(roleMappings) {
                debug.assertAnyValue(roleMappings, 'roleMappings');
                if (!roleMappings)
                    return 0 /* None */;
                var result = 0 /* None */;
                for (var _i = 0, roleMappings_1 = roleMappings; _i < roleMappings_1.length; _i++) {
                    var roleMapping = roleMappings_1[_i];
                    if (roleMapping.categorical)
                        result |= 1 /* Categorical */;
                    if (roleMapping.matrix)
                        result |= 2 /* Matrix */;
                    if (roleMapping.single)
                        result |= 4 /* Single */;
                    if (roleMapping.table)
                        result |= 8 /* Table */;
                    if (roleMapping.tree)
                        result |= 16 /* Tree */;
                }
                return result;
            }
            function transformSelects(dataView, roleMappings, selectTransforms, projectionOrdering, selectsToInclude) {
                var columnRewrites = [];
                if (selectTransforms) {
                    dataView.metadata.columns = applyTransformsToColumns(dataView.metadata.columns, selectTransforms, columnRewrites);
                }
                // NOTE: no rewrites necessary for Tree (it doesn't reference the columns)
                if (dataView.categorical) {
                    dataView.categorical = applyRewritesToCategorical(dataView.categorical, columnRewrites, selectsToInclude);
                    // TODO VSTS 7024199: separate out structural transformations from dataViewTransform.transformSelects(...)
                    // NOTE: This is slightly DSR-specific.
                    dataView = pivotIfNecessary(dataView, roleMappings);
                }
                if (dataView.matrix) {
                    var matrixTransformationContext = {
                        rowHierarchyRewritten: false,
                        columnHierarchyRewritten: false,
                        hierarchyTreesRewritten: false
                    };
                    dataView.matrix = applyRewritesToMatrix(dataView.matrix, columnRewrites, roleMappings, projectionOrdering, matrixTransformationContext);
                    // TODO VSTS 7024199: separate out structural transformations from dataViewTransform.transformSelects(...)
                    if (shouldPivotMatrix(dataView.matrix, roleMappings))
                        data.DataViewPivotMatrix.apply(dataView.matrix, matrixTransformationContext);
                }
                if (dataView.table)
                    dataView.table = applyRewritesToTable(dataView.table, columnRewrites, roleMappings, projectionOrdering);
                return dataView;
            }
            function applyTransformsToColumns(prototypeColumns, selects, rewrites) {
                debug.assertValue(prototypeColumns, 'columns');
                if (!selects)
                    return prototypeColumns;
                //column may contain undefined entries
                var columns = inherit(prototypeColumns);
                for (var i = 0, len = prototypeColumns.length; i < len; i++) {
                    var prototypeColumn = prototypeColumns[i];
                    var select = selects[prototypeColumn.index];
                    if (!select)
                        continue;
                    var column = columns[i] = inherit(prototypeColumn);
                    if (select.roles)
                        column.roles = select.roles;
                    if (select.type)
                        column.type = select.type;
                    column.format = getFormatForColumn(select, column);
                    if (select.displayName)
                        column.displayName = select.displayName;
                    if (select.queryName)
                        column.queryName = select.queryName;
                    if (select.kpi)
                        column.kpi = select.kpi;
                    if (select.sort)
                        column.sort = select.sort;
                    if (select.discourageAggregationAcrossGroups)
                        column.discourageAggregationAcrossGroups = select.discourageAggregationAcrossGroups;
                    rewrites.push({
                        from: prototypeColumn,
                        to: column,
                    });
                }
                return columns;
            }
            /**
             * Get the column format. Order of precendence is:
             *  1. Select format
             *  2. Column format
             */
            function getFormatForColumn(select, column) {
                // TODO: we already copied the select.Format to column.format, we probably don't need this check
                return select.format || column.format;
            }
            function applyRewritesToCategorical(prototype, columnRewrites, selectsToInclude) {
                debug.assertValue(prototype, 'prototype');
                debug.assertValue(columnRewrites, 'columnRewrites');
                var categorical = inherit(prototype);
                function override(value) {
                    var rewrittenSource = findOverride(value.source, columnRewrites);
                    if (rewrittenSource) {
                        var rewritten = inherit(value);
                        rewritten.source = rewrittenSource;
                        return rewritten;
                    }
                }
                var categories = powerbi.Prototype.overrideArray(prototype.categories, override);
                if (categories)
                    categorical.categories = categories;
                var valuesOverride = powerbi.Prototype.overrideArray(prototype.values, override);
                var values = valuesOverride || prototype.values;
                if (values) {
                    var grouped = inherit(values.grouped());
                    for (var i = 0, ilen = grouped.length; i < ilen; i++) {
                        grouped[i] = inherit(grouped[i]);
                    }
                    if (selectsToInclude) {
                        // Apply selectsToInclude to values by removing value columns not included
                        for (var i = values.length - 1; i >= 0; i--) {
                            if (!selectsToInclude[values[i].source.index]) {
                                values.splice(i, 1);
                            }
                        }
                        // Apply selectsToInclude to grouped()
                        if (values.length > 0 && values[0].identity) {
                            // We have a dynamic series, so we should remove any value columns not included in the split from each
                            //    valueColumnGroup
                            for (var i = 0, ilen = grouped.length; i < ilen; i++) {
                                var currentGroupValues = grouped[i].values;
                                for (var j = currentGroupValues.length - 1; j >= 0; j--) {
                                    if (!selectsToInclude[currentGroupValues[j].source.index])
                                        currentGroupValues.splice(i, 1);
                                }
                            }
                        }
                        else {
                            // We are in a static series, so we should throw away the grouped and recreate it using the static values
                            //   which have already been filtered
                            grouped = [];
                            grouped[0] = {
                                values: values,
                            };
                        }
                    }
                    if (values.source) {
                        if (selectsToInclude && !selectsToInclude[values.source.index]) {
                            values.source = undefined;
                        }
                        else {
                            var rewrittenValuesSource = findOverride(values.source, columnRewrites);
                            if (rewrittenValuesSource)
                                values.source = rewrittenValuesSource;
                        }
                    }
                    var currentGroupIndex = 0;
                    var group = void 0;
                    for (var i = 0, ilen = values.length; i < ilen; i++) {
                        var currentValue = values[i];
                        if (!group || (currentValue.identity !== group.identity)) {
                            group = inherit(grouped[currentGroupIndex]);
                            grouped[currentGroupIndex] = group;
                            group.values = [];
                            currentGroupIndex++;
                        }
                        group.values.push(currentValue);
                    }
                    categorical.values = values;
                    setGrouped(values, grouped);
                }
                return categorical;
            }
            function applyRewritesToTable(prototype, columnRewrites, roleMappings, projectionOrdering) {
                debug.assertValue(prototype, 'prototype');
                debug.assertValue(columnRewrites, 'columnRewrites');
                // Don't perform this potentially expensive transform unless we actually have a table.
                // When we switch to lazy per-visual DataView creation, we'll be able to remove this check.
                if (!roleMappings || roleMappings.length !== 1 || !roleMappings[0].table)
                    return prototype;
                var table = inherit(prototype);
                // Copy the rewritten columns into the table view
                var override = function (metadata) { return findOverride(metadata, columnRewrites); };
                var columns = powerbi.Prototype.overrideArray(prototype.columns, override);
                if (columns)
                    table.columns = columns;
                if (!projectionOrdering)
                    return table;
                var newToOldPositions = createTableColumnPositionMapping(projectionOrdering, columnRewrites);
                if (!newToOldPositions)
                    return table;
                // Reorder the columns
                var columnsClone = columns.slice(0);
                var keys = Object.keys(newToOldPositions);
                for (var i = 0, len = keys.length; i < len; i++) {
                    var sourceColumn = columnsClone[newToOldPositions[keys[i]]];
                    // In the case we've hit the end of our columns array, but still have position reordering keys,
                    // there is a duplicate column so we will need to add a new column for the duplicate data
                    if (i === columns.length)
                        columns.push(sourceColumn);
                    else {
                        debug.assert(i < columns.length, 'The column index is out of range for reordering.');
                        columns[i] = sourceColumn;
                    }
                }
                // Reorder the rows
                var rows = powerbi.Prototype.overrideArray(table.rows, function (row) {
                    var newRow = [];
                    for (var i = 0, len = keys.length; i < len; ++i)
                        newRow[i] = row[newToOldPositions[keys[i]]];
                    return newRow;
                });
                if (rows)
                    table.rows = rows;
                return table;
            }
            /** Creates a mapping of new position to original position. */
            function createTableColumnPositionMapping(projectionOrdering, columnRewrites) {
                var roles = Object.keys(projectionOrdering);
                // If we have more than one role then the ordering of columns between roles is ambiguous, so don't reorder anything.
                if (roles.length !== 1)
                    return;
                var role = roles[0], originalOrder = _.map(columnRewrites, function (rewrite) { return rewrite.from.index; }), newOrder = projectionOrdering[role];
                return createOrderMapping(originalOrder, newOrder);
            }
            function applyRewritesToMatrix(prototype, columnRewrites, roleMappings, projectionOrdering, context) {
                debug.assertValue(prototype, 'prototype');
                debug.assertValue(columnRewrites, 'columnRewrites');
                // Don't perform this potentially expensive transform unless we actually have a matrix.
                // When we switch to lazy per-visual DataView creation, we'll be able to remove this check.
                if (!roleMappings || roleMappings.length < 1 || !(roleMappings[0].matrix || (roleMappings[1] && roleMappings[1].matrix)))
                    return prototype;
                var matrixMapping = roleMappings[0].matrix || roleMappings[1].matrix;
                var matrix = inherit(prototype);
                function override(metadata) {
                    return findOverride(metadata, columnRewrites);
                }
                function overrideHierarchy(hierarchy) {
                    var rewrittenHierarchy = null;
                    var newLevels = powerbi.Prototype.overrideArray(hierarchy.levels, function (level) {
                        var newLevel = null;
                        var levelSources = powerbi.Prototype.overrideArray(level.sources, override);
                        if (levelSources)
                            newLevel = ensureRewritten(newLevel, level, function (h) { return h.sources = levelSources; });
                        return newLevel;
                    });
                    if (newLevels)
                        rewrittenHierarchy = ensureRewritten(rewrittenHierarchy, hierarchy, function (r) { return r.levels = newLevels; });
                    return rewrittenHierarchy;
                }
                var rows = overrideHierarchy(matrix.rows);
                if (rows) {
                    matrix.rows = rows;
                    context.rowHierarchyRewritten = true;
                }
                var columns = overrideHierarchy(matrix.columns);
                if (columns) {
                    matrix.columns = columns;
                    context.columnHierarchyRewritten = true;
                }
                var valueSources = powerbi.Prototype.overrideArray(matrix.valueSources, override);
                if (valueSources) {
                    matrix.valueSources = valueSources;
                    // Only need to reorder if we have more than one value source, and they are all bound to the same role
                    var matrixValues = matrixMapping.values;
                    if (projectionOrdering && valueSources.length > 1 && matrixValues && matrixValues.for) {
                        var columnLevels = columns.levels.length;
                        if (columnLevels > 0) {
                            var newToOldPositions_1 = createMatrixValuesPositionMapping(matrixValues, projectionOrdering, valueSources, columnRewrites);
                            if (newToOldPositions_1) {
                                var keys_1 = Object.keys(newToOldPositions_1);
                                var numKeys_1 = keys_1.length;
                                // Reorder the value columns
                                columns.root = data.DataViewPivotMatrix.cloneTree(columns.root);
                                if (columnLevels === 1)
                                    reorderChildNodes(columns.root, newToOldPositions_1);
                                else
                                    forEachNodeAtLevel(columns.root, columnLevels - 2, function (node) { return reorderChildNodes(node, newToOldPositions_1); });
                                // Reorder the value rows
                                matrix.rows.root = data.DataViewPivotMatrix.cloneTreeExecuteOnLeaf(matrix.rows.root, function (node) {
                                    if (!node.values)
                                        return;
                                    var newValues = {};
                                    var iterations = Object.keys(node.values).length / numKeys_1;
                                    for (var i = 0, len = iterations; i < len; i++) {
                                        var offset = i * numKeys_1;
                                        for (var keysIndex = 0; keysIndex < numKeys_1; keysIndex++)
                                            newValues[offset + keysIndex] = node.values[offset + newToOldPositions_1[keys_1[keysIndex]]];
                                    }
                                    node.values = newValues;
                                });
                                context.hierarchyTreesRewritten = true;
                            }
                        }
                    }
                }
                reorderMatrixCompositeGroups(matrix, matrixMapping, projectionOrdering);
                return matrix;
            }
            function reorderChildNodes(node, newToOldPositions) {
                var keys = Object.keys(newToOldPositions);
                var numKeys = keys.length;
                var children = node.children;
                var childrenClone = children.slice(0);
                for (var i = 0, len = numKeys; i < len; i++) {
                    var sourceColumn = childrenClone[newToOldPositions[keys[i]]];
                    // In the case we've hit the end of our columns array, but still have position reordering keys,
                    // there is a duplicate column so we will need to add a new column for the duplicate data
                    if (i === children.length)
                        children.push(sourceColumn);
                    else {
                        debug.assert(i < children.length, 'The column index is out of range for reordering.');
                        children[i] = sourceColumn;
                    }
                }
            }
            /**
             * Returns a inheritSingle() version of the specified prototype DataViewMatrix with any composite group levels
             * and values re-ordered by projection ordering.
             * Returns undefined if no re-ordering under the specified prototype is necessary.
             */
            function reorderMatrixCompositeGroups(prototype, supportedDataViewMapping, projection) {
                var transformedDataView;
                if (prototype && supportedDataViewMapping && projection) {
                    // reorder levelValues in any composite groups in rows hierarchy
                    var transformedRowsHierarchy_1;
                    powerbi.DataViewMapping.visitMatrixItems(supportedDataViewMapping.rows, {
                        visitRole: function (role, context) {
                            transformedRowsHierarchy_1 = reorderMatrixHierarchyCompositeGroups(transformedRowsHierarchy_1 || prototype.rows, role, projection);
                        }
                    });
                    // reorder levelValues in any composite groups in columns hierarchy
                    var transformedColumnsHierarchy_1;
                    powerbi.DataViewMapping.visitMatrixItems(supportedDataViewMapping.columns, {
                        visitRole: function (role, context) {
                            transformedColumnsHierarchy_1 = reorderMatrixHierarchyCompositeGroups(transformedColumnsHierarchy_1 || prototype.columns, role, projection);
                        }
                    });
                    if (transformedRowsHierarchy_1 || transformedColumnsHierarchy_1) {
                        transformedDataView = inheritSingle(prototype);
                        transformedDataView.rows = transformedRowsHierarchy_1 || transformedDataView.rows;
                        transformedDataView.columns = transformedColumnsHierarchy_1 || transformedDataView.columns;
                    }
                }
                return transformedDataView;
            }
            /**
             * Returns a inheritSingle() version of the specified matrixHierarchy with any composite group levels and
             * values re-ordered by projection ordering.
             * Returns undefined if no re-ordering under the specified matrixHierarchy is necessary.
             */
            function reorderMatrixHierarchyCompositeGroups(matrixHierarchy, hierarchyRole, projection) {
                debug.assertValue(matrixHierarchy, 'matrixHierarchy');
                debug.assertValue(hierarchyRole, 'hierarchyRole');
                debug.assertValue(projection, 'projection');
                var transformedHierarchy;
                var selectIndicesInProjectionOrder = projection[hierarchyRole];
                // reordering needs to happen only if there are multiple columns for the hierarchy's role in the projection
                var hasMultipleColumnsInProjection = selectIndicesInProjectionOrder && selectIndicesInProjectionOrder.length >= 2;
                if (hasMultipleColumnsInProjection && !_.isEmpty(matrixHierarchy.levels)) {
                    for (var i = matrixHierarchy.levels.length - 1; i >= 0; i--) {
                        var hierarchyLevel = matrixHierarchy.levels[i];
                        // compute a mapping for any necessary reordering of columns at this given level, based on projection ordering
                        var newToOldLevelSourceIndicesMapping = createMatrixHierarchyLevelSourcesPositionMapping(hierarchyLevel, hierarchyRole, projection);
                        if (newToOldLevelSourceIndicesMapping) {
                            if (_.isUndefined(transformedHierarchy)) {
                                // Because we start inspecting the hierarchy from the deepest level and work backwards to the root,
                                // the current hierarchyLevel is therefore the inner-most level that needs re-ordering of composite group values...
                                transformedHierarchy = inheritSingle(matrixHierarchy);
                                transformedHierarchy.levels = inheritSingle(matrixHierarchy.levels);
                                // Because the current hierarchyLevel is the inner-most level that needs re-ordering of composite group values,
                                // inheriting all nodes from root down to this level will also prepare the nodes for any transform that needs to
                                // happen in other hierarchy levels in the later iterations of this for-loop.
                                transformedHierarchy.root = data.utils.DataViewMatrixUtils.inheritMatrixNodeHierarchy(matrixHierarchy.root, i, true);
                            }
                            // reorder the metadata columns in the sources array at that level
                            var transformingHierarchyLevel = inheritSingle(matrixHierarchy.levels[i]); // inherit at most once during the whole dataViewTransform for this obj...
                            transformedHierarchy.levels[i] = reorderMatrixHierarchyLevelColumnSources(transformingHierarchyLevel, newToOldLevelSourceIndicesMapping);
                            // reorder the level values in the composite group nodes at the current hierarchy level
                            reorderMatrixHierarchyLevelValues(transformedHierarchy.root, i, newToOldLevelSourceIndicesMapping);
                        }
                    }
                }
                return transformedHierarchy;
            }
            /**
             * If reordering is needed on the level's metadata column sources (i.e. hierarchyLevel.sources),
             * returns the mapping from the target LevelSourceIndex (based on projection order) to original LevelSourceIndex.
             *
             * The returned value maps level source indices from the new target order (calculated from projection order)
             * back to the original order as they appear in the specified hierarchyLevel's sources.
             * Please refer to comments on the createOrderMapping() function for more explanation on the mappings in the return value.
             *
             * Note: The return value is the mapping from new index to old index, for consistency with existing and similar functions in this module.
             *
             * @param hierarchyLevel The hierarchy level that contains the metadata column sources.
             * @param hierarchyRoleName The role name for the hierarchy where the specified hierarchyLevel belongs.
             * @param projection The projection ordering that includes an ordering for the specified hierarchyRoleName.
             */
            function createMatrixHierarchyLevelSourcesPositionMapping(hierarchyLevel, hierarchyRole, projection) {
                debug.assertValue(hierarchyLevel, 'hierarchyLevel');
                debug.assertValue(hierarchyRole, 'hierarchyRole');
                debug.assertValue(projection, 'projection');
                debug.assertValue(projection[hierarchyRole], 'pre-condition: The specified projection must contain an ordering for the specified hierarchyRoleName.');
                var newToOldLevelSourceIndicesMapping;
                var levelSourceColumns = hierarchyLevel.sources;
                if (levelSourceColumns && levelSourceColumns.length >= 2) {
                    // The hierarchy level has multiple columns, so it is possible to have composite group, go on to check other conditions...
                    var columnsForHierarchyRoleOrderedByLevelSourceIndex = data.utils.DataViewMetadataColumnUtils.joinMetadataColumnsAndProjectionOrder(levelSourceColumns, projection, hierarchyRole);
                    if (columnsForHierarchyRoleOrderedByLevelSourceIndex && columnsForHierarchyRoleOrderedByLevelSourceIndex.length >= 2) {
                        // The hierarchy level has multiple columns for the hierarchy's role, go on to calculate newToOldLevelSourceIndicesMapping...
                        var columnsForHierarchyRoleOrderedByProjection = _.sortBy(columnsForHierarchyRoleOrderedByLevelSourceIndex, function (columnInfo) { return columnInfo.projectionOrderIndex; });
                        newToOldLevelSourceIndicesMapping = createOrderMapping(_.map(columnsForHierarchyRoleOrderedByLevelSourceIndex, function (columnInfo) { return columnInfo.sourceIndex; }), _.map(columnsForHierarchyRoleOrderedByProjection, function (columnInfo) { return columnInfo.sourceIndex; }));
                    }
                }
                return newToOldLevelSourceIndicesMapping;
            }
            /**
             * Applies re-ordering on the specified transformingHierarchyLevel's sources.
             * Returns the same object as the specified transformingHierarchyLevel.
             */
            function reorderMatrixHierarchyLevelColumnSources(transformingHierarchyLevel, newToOldLevelSourceIndicesMapping) {
                debug.assertValue(transformingHierarchyLevel, 'transformingHierarchyLevel');
                debug.assertValue(newToOldLevelSourceIndicesMapping, 'newToOldLevelSourceIndicesMapping');
                var originalLevelSources = transformingHierarchyLevel.sources;
                transformingHierarchyLevel.sources = originalLevelSources.slice(0); // make a clone of the array before modifying it, because the for-loop depends on the origin array.
                var newLevelSourceIndices = Object.keys(newToOldLevelSourceIndicesMapping);
                for (var i = 0, ilen = newLevelSourceIndices.length; i < ilen; i++) {
                    var newLevelSourceIndex = newLevelSourceIndices[i];
                    var oldLevelSourceIndex = newToOldLevelSourceIndicesMapping[newLevelSourceIndex];
                    debug.assert(oldLevelSourceIndex < originalLevelSources.length, 'pre-condition: The value in every mapping in the specified levelSourceIndicesReorderingMap must be a valid index to the specified hierarchyLevel.sources array property');
                    transformingHierarchyLevel.sources[newLevelSourceIndex] = originalLevelSources[oldLevelSourceIndex];
                }
                return transformingHierarchyLevel;
            }
            /**
             * Reorders the elements in levelValues in each node under transformingHierarchyRootNode at the specified hierarchyLevel,
             * and updates their DataViewMatrixGroupValue.levelSourceIndex property.
             *
             * Returns the same object as the specified transformingHierarchyRootNode.
             */
            function reorderMatrixHierarchyLevelValues(transformingHierarchyRootNode, transformingHierarchyLevelIndex, newToOldLevelSourceIndicesMapping) {
                debug.assertValue(transformingHierarchyRootNode, 'transformingHierarchyRootNode');
                debug.assertValue(newToOldLevelSourceIndicesMapping, 'newToOldLevelSourceIndicesMapping');
                var oldToNewLevelSourceIndicesMapping = createReversedMapping(newToOldLevelSourceIndicesMapping);
                forEachNodeAtLevel(transformingHierarchyRootNode, transformingHierarchyLevelIndex, function (transformingMatrixNode) {
                    var originalLevelValues = transformingMatrixNode.levelValues;
                    // Note: Technically this function is incorrect, because the driving source of the new LevelValues is really
                    // the "projection for this composite group", a concept that isn't yet implemented in DataViewProjectionOrdering.
                    // The following code isn't correct in the special case where a column is projected twice in this composite group,
                    // in which case the DSR will not have the duplicate columns; DataViewTransform is supposed to expand the duplicates.
                    // Until we fully implement composite group projection, though, we'll just sort what we have in transformingMatrixNode.levelValues.
                    if (!_.isEmpty(originalLevelValues)) {
                        // First, re-order the elements in transformingMatrixNode.levelValues by the new levelSourceIndex order.
                        // _.sortBy() also creates a new array, which we want to do for all nodes (including when levelValues.length === 1)
                        // because we don't want to accidentally modify the array AND its value references in Query DataView
                        var newlyOrderedLevelValues = _.sortBy(originalLevelValues, function (levelValue) { return oldToNewLevelSourceIndicesMapping[levelValue.levelSourceIndex]; });
                        for (var i = 0, ilen = newlyOrderedLevelValues.length; i < ilen; i++) {
                            var transformingLevelValue = inheritSingle(newlyOrderedLevelValues[i]);
                            transformingLevelValue.levelSourceIndex = oldToNewLevelSourceIndicesMapping[transformingLevelValue.levelSourceIndex];
                            newlyOrderedLevelValues[i] = transformingLevelValue;
                        }
                        transformingMatrixNode.levelValues = newlyOrderedLevelValues;
                        // For consistency with how DataViewTreeNode.value works, and for a bit of backward compatibility,
                        // copy the last value from DataViewMatrixNode.levelValues to DataViewMatrixNode.value.
                        var newlyOrderedLastLevelValue = _.last(newlyOrderedLevelValues);
                        if (transformingMatrixNode.value !== newlyOrderedLastLevelValue.value) {
                            transformingMatrixNode.value = newlyOrderedLastLevelValue.value;
                        }
                        if ((transformingMatrixNode.levelSourceIndex || 0) !== newlyOrderedLastLevelValue.levelSourceIndex) {
                            transformingMatrixNode.levelSourceIndex = newlyOrderedLastLevelValue.levelSourceIndex;
                        }
                    }
                });
                return transformingHierarchyRootNode;
            }
            /**
             * Creates a mapping of new position to original position.
             *
             * The return value is a mapping where each key-value pair represent the order  mapping of a particular column:
             * - the key in the key-value pair is the index of the particular column in the new order (e.g. projection order)
             * - the value in the key-value pair is the index of the particular column in the original order
             */
            function createMatrixValuesPositionMapping(matrixValues, projectionOrdering, valueSources, columnRewrites) {
                var role = matrixValues.for.in;
                var newOrder = projectionOrdering[role];
                var originalOrder = _.chain(columnRewrites)
                    .filter(function (rewrite) { return _.contains(valueSources, rewrite.to); })
                    .map(function (rewrite) { return rewrite.from.index; })
                    .value();
                return createOrderMapping(originalOrder, newOrder);
            }
            /**
             * Creates a mapping of indices, from indices to the specified newOrder array, back to indices to the specified
             * originalOrder array.
             * Each of the number value in originalOrder and newOrder is actually the unique key of a column (unqiue
             * under the context of the caller code), e.g. the Select Index in projection ordering array.
             * Also, the specified originalOrder must contain every value that exists in newOrder.
             *
             * If the specified originalOrder and newOrder are different in sequence order, then this function returns a collection of
             * key-value pair, each of which represents the new and old indices of a particular column:
             * - the key in each key-value pair is the index of the particular column key as it exists in the specified newOrder array
             * - the value in each key-value pair is the index of the particular column key as it exists in the specified originalOrder array
             *
             * For example on how the return value is consumed, see functions such as reorderMatrixHierarchyLevelColumnSources(...).
             *
             * If the specified originalOrder and newOrder are same, then this function returns undefined.
             *
             * @param originalOrder E.g. an array of metadata column "select indices", in the original order as they exist in Query DataView.
             * @param newOrder E.g. an array of metadata column "select indices", in rojection ordering.
             */
            function createOrderMapping(originalOrder, newOrder) {
                // Optimization: avoid rewriting if the current order is correct
                if (ArrayExtensions.sequenceEqual(originalOrder, newOrder, function (x, y) { return x === y; }))
                    return;
                var mapping = {};
                for (var i = 0, len = newOrder.length; i < len; ++i) {
                    var newPosition = newOrder[i];
                    mapping[i] = originalOrder.indexOf(newPosition);
                }
                return mapping;
            }
            function createReversedMapping(mapping) {
                debug.assertValue(mapping, 'mapping');
                var reversed = {};
                for (var key in mapping) {
                    // Note: key is a string after we get it out from mapping, thus we need to parse it
                    // back into a number before putting it as the value in the reversed mapping
                    var value = mapping[key];
                    var keyAsNumber = parseInt(key, 10);
                    reversed[value] = keyAsNumber;
                }
                debug.assertValue(Object.keys(mapping).length === Object.keys(reversed).length, 'pre-condition: The specified mapping must not contain any duplicate value because duplicate values are obmitted from the reversed mapping.');
                return reversed;
            }
            function forEachNodeAtLevel(node, targetLevel, callback) {
                debug.assertValue(node, 'node');
                debug.assert(targetLevel >= 0, 'argetLevel >= 0');
                debug.assertValue(callback, 'callback');
                if (node.level === targetLevel) {
                    callback(node);
                    return;
                }
                var children = node.children;
                if (children && children.length > 0) {
                    for (var i = 0, ilen = children.length; i < ilen; i++)
                        forEachNodeAtLevel(children[i], targetLevel, callback);
                }
            }
            DataViewTransform.forEachNodeAtLevel = forEachNodeAtLevel;
            function findOverride(source, columnRewrites) {
                for (var i = 0, len = columnRewrites.length; i < len; i++) {
                    var columnRewrite = columnRewrites[i];
                    if (columnRewrite.from === source)
                        return columnRewrite.to;
                }
            }
            function ensureRewritten(rewritten, prototype, callback) {
                if (!rewritten)
                    rewritten = inherit(prototype);
                if (callback)
                    callback(rewritten);
                return rewritten;
            }
            function transformObjects(dataView, targetDataViewKinds, objectDescriptors, objectDefinitions, selectTransforms, colorAllocatorFactory) {
                debug.assertValue(dataView, 'dataView');
                debug.assertValue(targetDataViewKinds, 'targetDataViewKinds');
                debug.assertAnyValue(objectDescriptors, 'objectDescriptors');
                debug.assertAnyValue(objectDefinitions, 'objectDefinitions');
                debug.assertAnyValue(selectTransforms, 'selectTransforms');
                debug.assertValue(colorAllocatorFactory, 'colorAllocatorFactory');
                if (!objectDescriptors)
                    return;
                var objectsForAllSelectors = data.DataViewObjectEvaluationUtils.groupObjectsBySelector(objectDefinitions);
                data.DataViewObjectEvaluationUtils.addImplicitObjects(objectsForAllSelectors, objectDescriptors, dataView.metadata.columns, selectTransforms);
                var metadataOnce = objectsForAllSelectors.metadataOnce;
                var dataObjects = objectsForAllSelectors.data;
                if (metadataOnce)
                    evaluateMetadataObjects(dataView, selectTransforms, objectDescriptors, metadataOnce.objects, dataObjects, colorAllocatorFactory);
                var metadataObjects = objectsForAllSelectors.metadata;
                if (metadataObjects) {
                    for (var i = 0, len = metadataObjects.length; i < len; i++) {
                        var metadataObject = metadataObjects[i];
                        var objectDefns = metadataObject.objects;
                        var colorAllocatorCache = populateColorAllocatorCache(dataView, selectTransforms, objectDefns, colorAllocatorFactory);
                        evaluateMetadataRepetition(dataView, selectTransforms, objectDescriptors, metadataObject.selector, objectDefns, colorAllocatorCache);
                    }
                }
                for (var i = 0, len = dataObjects.length; i < len; i++) {
                    var dataObject = dataObjects[i];
                    var objectDefns = dataObject.objects;
                    var colorAllocatorCache = populateColorAllocatorCache(dataView, selectTransforms, objectDefns, colorAllocatorFactory);
                    evaluateDataRepetition(dataView, targetDataViewKinds, selectTransforms, objectDescriptors, dataObject.selector, dataObject.rules, objectDefns, colorAllocatorCache);
                }
                var userDefined = objectsForAllSelectors.userDefined;
                if (userDefined) {
                    // TODO: We only handle user defined objects at the metadata level, but should be able to support them with arbitrary repetition.
                    evaluateUserDefinedObjects(dataView, selectTransforms, objectDescriptors, userDefined, colorAllocatorFactory);
                }
            }
            DataViewTransform.transformObjects = transformObjects;
            function evaluateUserDefinedObjects(dataView, selectTransforms, objectDescriptors, objectDefns, colorAllocatorFactory) {
                debug.assertValue(dataView, 'dataView');
                debug.assertAnyValue(selectTransforms, 'selectTransforms');
                debug.assertValue(objectDescriptors, 'objectDescriptors');
                debug.assertValue(objectDefns, 'objectDefns');
                debug.assertValue(colorAllocatorFactory, 'colorAllocatorFactory');
                var dataViewObjects = dataView.metadata.objects;
                if (!dataViewObjects) {
                    dataViewObjects = dataView.metadata.objects = {};
                }
                for (var _i = 0, objectDefns_1 = objectDefns; _i < objectDefns_1.length; _i++) {
                    var objectDefn = objectDefns_1[_i];
                    var id = objectDefn.selector.id;
                    var colorAllocatorCache = populateColorAllocatorCache(dataView, selectTransforms, objectDefn.objects, colorAllocatorFactory);
                    var evalContext = data.createStaticEvalContext(colorAllocatorCache, dataView, selectTransforms);
                    var objects = data.DataViewObjectEvaluationUtils.evaluateDataViewObjects(evalContext, objectDescriptors, objectDefn.objects);
                    for (var objectName in objects) {
                        var object = objects[objectName];
                        var map = dataViewObjects[objectName];
                        if (!map)
                            map = dataViewObjects[objectName] = [];
                        debug.assert(powerbi.DataViewObjects.isUserDefined(map), 'expected DataViewObjectMap');
                        // NOTE: We do not check for duplicate ids.
                        map.push({ id: id, object: object });
                    }
                }
            }
            /** Evaluates and sets properties on the DataView metadata. */
            function evaluateMetadataObjects(dataView, selectTransforms, objectDescriptors, objectDefns, dataObjects, colorAllocatorFactory) {
                debug.assertValue(dataView, 'dataView');
                debug.assertAnyValue(selectTransforms, 'selectTransforms');
                debug.assertValue(objectDescriptors, 'objectDescriptors');
                debug.assertValue(objectDefns, 'objectDefns');
                debug.assertValue(dataObjects, 'dataObjects');
                debug.assertValue(colorAllocatorFactory, 'colorAllocatorFactory');
                var colorAllocatorCache = populateColorAllocatorCache(dataView, selectTransforms, objectDefns, colorAllocatorFactory);
                var evalContext = data.createStaticEvalContext(colorAllocatorCache, dataView, selectTransforms);
                var objects = data.DataViewObjectEvaluationUtils.evaluateDataViewObjects(evalContext, objectDescriptors, objectDefns);
                if (objects) {
                    dataView.metadata.objects = objects;
                    for (var objectName in objects) {
                        var object = objects[objectName], objectDesc = objectDescriptors[objectName];
                        for (var propertyName in object) {
                            var propertyDesc = objectDesc.properties[propertyName], ruleDesc = propertyDesc.rule;
                            if (!ruleDesc)
                                continue;
                            var definition = createRuleEvaluationInstance(dataView, colorAllocatorFactory, ruleDesc, objectName, object[propertyName], propertyDesc.type);
                            if (!definition)
                                continue;
                            dataObjects.push(definition);
                        }
                    }
                }
            }
            function createRuleEvaluationInstance(dataView, colorAllocatorFactory, ruleDesc, objectName, propertyValue, ruleType) {
                debug.assertValue(dataView, 'dataView');
                debug.assertValue(colorAllocatorFactory, 'colorAllocatorFactory');
                debug.assertValue(ruleDesc, 'ruleDesc');
                debug.assertValue(propertyValue, 'propertyValue');
                debug.assertValue(ruleType, 'ruleType');
                var ruleOutput = ruleDesc.output;
                if (!ruleOutput)
                    return;
                var selectorToCreate = findSelectorForRuleInput(dataView, ruleOutput.selector);
                if (!selectorToCreate)
                    return;
                if (ruleType.fillRule) {
                    return createRuleEvaluationInstanceFillRule(dataView, colorAllocatorFactory, ruleDesc, selectorToCreate, objectName, propertyValue);
                }
            }
            function createRuleEvaluationInstanceFillRule(dataView, colorAllocatorFactory, ruleDesc, selectorToCreate, objectName, propertyValue) {
                debug.assertValue(dataView, 'dataView');
                debug.assertValue(colorAllocatorFactory, 'colorAllocatorFactory');
                debug.assertValue(ruleDesc, 'ruleDesc');
                debug.assertValue(selectorToCreate, 'selectorToCreate');
                debug.assertValue(propertyValue, 'propertyValue');
                var colorAllocator = tryCreateColorAllocatorForFillRule(dataView, colorAllocatorFactory, ruleDesc.inputRole, 1 /* Role */, propertyValue);
                if (!colorAllocator)
                    return;
                var rule = new data.ColorRuleEvaluation(ruleDesc.inputRole, colorAllocator);
                var fillRuleProperties = {};
                fillRuleProperties[ruleDesc.output.property] = {
                    solid: { color: rule }
                };
                return {
                    selector: selectorToCreate,
                    rules: [rule],
                    objects: [{
                            name: objectName,
                            properties: fillRuleProperties,
                        }]
                };
            }
            function tryCreateColorAllocatorForFillRule(dataView, colorAllocatorFactory, identifier, identifierKind, propertyValue) {
                debug.assertValue(dataView, 'dataView');
                debug.assertValue(colorAllocatorFactory, 'colorAllocatorFactory');
                debug.assertValue(identifier, 'identifier');
                debug.assertValue(identifierKind, 'identifierKind');
                debug.assertValue(propertyValue, 'propertyValue');
                if (propertyValue.linearGradient2)
                    return createColorAllocatorLinearGradient2(dataView, colorAllocatorFactory, identifier, identifierKind, propertyValue, propertyValue.linearGradient2);
                if (propertyValue.linearGradient3)
                    return createColorAllocatorLinearGradient3(dataView, colorAllocatorFactory, identifier, identifierKind, propertyValue, propertyValue.linearGradient3);
            }
            function createColorAllocatorLinearGradient2(dataView, colorAllocatorFactory, identifier, identifierKind, propertyValueFillRule, linearGradient2) {
                debug.assertValue(dataView, 'dataView');
                debug.assertValue(colorAllocatorFactory, 'colorAllocatorFactory');
                debug.assertValue(identifier, 'identifier');
                debug.assertValue(identifierKind, 'identifierKind');
                debug.assertValue(linearGradient2, 'linearGradient2');
                linearGradient2 = propertyValueFillRule.linearGradient2;
                if (linearGradient2.min.value === undefined ||
                    linearGradient2.max.value === undefined) {
                    var inputRange = findRuleInputColumnNumberRange(dataView, identifier, identifierKind);
                    if (!inputRange)
                        return;
                    if (linearGradient2.min.value === undefined)
                        linearGradient2.min.value = inputRange.min;
                    if (linearGradient2.max.value === undefined)
                        linearGradient2.max.value = inputRange.max;
                }
                return colorAllocatorFactory.linearGradient2(propertyValueFillRule.linearGradient2);
            }
            function createColorAllocatorLinearGradient3(dataView, colorAllocatorFactory, identifier, identifierKind, propertyValueFillRule, linearGradient3) {
                debug.assertValue(dataView, 'dataView');
                debug.assertValue(colorAllocatorFactory, 'colorAllocatorFactory');
                debug.assertValue(identifier, 'identifier');
                debug.assertValue(identifierKind, 'identifierKind');
                debug.assertValue(linearGradient3, 'linearGradient3');
                var splitScales;
                linearGradient3 = propertyValueFillRule.linearGradient3;
                if (linearGradient3.min.value === undefined ||
                    linearGradient3.mid.value === undefined ||
                    linearGradient3.max.value === undefined) {
                    var inputRange = findRuleInputColumnNumberRange(dataView, identifier, identifierKind);
                    if (!inputRange)
                        return;
                    splitScales =
                        linearGradient3.min.value === undefined &&
                            linearGradient3.max.value === undefined &&
                            linearGradient3.mid.value !== undefined;
                    if (linearGradient3.min.value === undefined) {
                        linearGradient3.min.value = inputRange.min;
                    }
                    if (linearGradient3.max.value === undefined) {
                        linearGradient3.max.value = inputRange.max;
                    }
                    if (linearGradient3.mid.value === undefined) {
                        var midValue = (linearGradient3.max.value + linearGradient3.min.value) / 2;
                        linearGradient3.mid.value = midValue;
                    }
                }
                return colorAllocatorFactory.linearGradient3(propertyValueFillRule.linearGradient3, splitScales);
            }
            function populateColorAllocatorCache(dataView, selectTransforms, objectDefns, colorAllocatorFactory) {
                debug.assertValue(dataView, 'dataView');
                debug.assertAnyValue(selectTransforms, 'selectTransforms');
                debug.assertValue(objectDefns, 'objectDefns');
                debug.assertValue(colorAllocatorFactory, 'colorAllocatorFactory');
                var cache = data.createColorAllocatorCache();
                var staticEvalContext = data.createStaticEvalContext();
                for (var i = 0, len = objectDefns.length; i < len; i++) {
                    var objectDefnProperties = objectDefns[i].properties;
                    for (var propertyName in objectDefnProperties) {
                        var fillProperty = objectDefnProperties[propertyName];
                        if (fillProperty &&
                            fillProperty.solid &&
                            fillProperty.solid.color &&
                            fillProperty.solid.color.kind === 23 /* FillRule */) {
                            var fillRuleExpr = fillProperty.solid.color;
                            var inputExprQueryName = findFirstQueryNameForExpr(selectTransforms, fillRuleExpr.input);
                            if (!inputExprQueryName)
                                continue;
                            var fillRule = data.DataViewObjectEvaluator.evaluateProperty(staticEvalContext, fillRulePropertyDescriptor, fillRuleExpr.rule);
                            var colorAllocator = tryCreateColorAllocatorForFillRule(dataView, colorAllocatorFactory, inputExprQueryName, 0 /* QueryName */, fillRule);
                            if (colorAllocator)
                                cache.register(fillRuleExpr, colorAllocator);
                        }
                    }
                }
                return cache;
            }
            function evaluateDataRepetition(dataView, targetDataViewKinds, selectTransforms, objectDescriptors, selector, rules, objectDefns, colorAllocatorCache) {
                debug.assertValue(dataView, 'dataView');
                debug.assertValue(targetDataViewKinds, 'targetDataViewKinds');
                debug.assertAnyValue(selectTransforms, 'selectTransforms');
                debug.assertValue(objectDescriptors, 'objectDescriptors');
                debug.assertValue(selector, 'selector');
                debug.assertAnyValue(rules, 'rules');
                debug.assertValue(objectDefns, 'objectDefns');
                debug.assertValue(colorAllocatorCache, 'colorAllocatorFactory');
                var containsWildcard = data.Selector.containsWildcard(selector);
                var dataViewCategorical = dataView.categorical;
                if (dataViewCategorical && EnumExtensions.hasFlag(targetDataViewKinds, 1 /* Categorical */)) {
                    // 1) Match against categories
                    evaluateDataRepetitionCategoricalCategory(dataViewCategorical, objectDescriptors, selector, rules, containsWildcard, objectDefns, colorAllocatorCache);
                    // 2) Match against valueGrouping
                    evaluateDataRepetitionCategoricalValueGrouping(dataViewCategorical, objectDescriptors, selector, rules, containsWildcard, objectDefns, colorAllocatorCache);
                }
                var dataViewMatrix = dataView.matrix;
                if (dataViewMatrix && EnumExtensions.hasFlag(targetDataViewKinds, 2 /* Matrix */)) {
                    var rewrittenMatrix = evaluateDataRepetitionMatrix(dataViewMatrix, objectDescriptors, selector, rules, containsWildcard, objectDefns, colorAllocatorCache);
                    if (rewrittenMatrix) {
                        // TODO: This mutates the DataView -- the assumption is that prototypal inheritance has already occurred.  We should
                        // revisit this, likely when we do lazy evaluation of DataView.
                        dataView.matrix = rewrittenMatrix;
                    }
                }
                var dataViewTable = dataView.table;
                if (dataViewTable && EnumExtensions.hasFlag(targetDataViewKinds, 8 /* Table */)) {
                    var rewrittenSelector = rewriteTableRoleSelector(dataViewTable, selector);
                    var rewrittenTable = evaluateDataRepetitionTable(dataViewTable, selectTransforms, objectDescriptors, rewrittenSelector, rules, containsWildcard, objectDefns, colorAllocatorCache);
                    if (rewrittenTable) {
                        // TODO: This mutates the DataView -- the assumption is that prototypal inheritance has already occurred.  We should
                        // revisit this, likely when we do lazy evaluation of DataView.
                        dataView.table = rewrittenTable;
                    }
                }
            }
            function rewriteTableRoleSelector(dataViewTable, selector) {
                if (data.Selector.hasRoleWildcard(selector)) {
                    selector = findSelectorForRoleWildcard(dataViewTable, selector);
                }
                return selector;
            }
            function findSelectorForRoleWildcard(dataViewTable, selector) {
                var resultingSelector = {
                    data: [],
                    id: selector.id,
                    metadata: selector.metadata
                };
                for (var _i = 0, _a = selector.data; _i < _a.length; _i++) {
                    var dataSelector = _a[_i];
                    if (data.Selector.isRoleWildcard(dataSelector)) {
                        var selectorRoles = dataSelector.roles;
                        var allColumnsBelongToSelectorRole = allColumnsBelongToRole(dataViewTable.columns, selectorRoles);
                        var exprs = dataViewTable.identityFields;
                        if (allColumnsBelongToSelectorRole && exprs) {
                            resultingSelector.data.push(data.DataViewScopeWildcard.fromExprs(exprs));
                            continue;
                        }
                    }
                    if (isUniqueDataSelector(resultingSelector.data, dataSelector)) {
                        resultingSelector.data.push(dataSelector);
                    }
                }
                return resultingSelector;
            }
            function isUniqueDataSelector(dataSelectors, newSelector) {
                if (_.isEmpty(dataSelectors))
                    return true;
                return !_.any(dataSelectors, function (dataSelector) { return dataSelector.key === newSelector.key; });
            }
            function allColumnsBelongToRole(columns, selectorRoles) {
                for (var _i = 0, columns_6 = columns; _i < columns_6.length; _i++) {
                    var column = columns_6[_i];
                    var roles = column.roles;
                    if (!roles || !_.any(selectorRoles, function (selectorRole) { return roles[selectorRole]; }))
                        return false;
                }
                return true;
            }
            function evaluateDataRepetitionCategoricalCategory(dataViewCategorical, objectDescriptors, selector, rules, containsWildcard, objectDefns, colorAllocatorCache) {
                debug.assertValue(dataViewCategorical, 'dataViewCategorical');
                debug.assertValue(objectDescriptors, 'objectDescriptors');
                debug.assertValue(selector, 'selector');
                debug.assertAnyValue(rules, 'rules');
                debug.assertValue(containsWildcard, 'containsWildcard');
                debug.assertValue(objectDefns, 'objectDefns');
                debug.assertValue(colorAllocatorCache, 'colorAllocatorCache');
                if (!dataViewCategorical.categories || dataViewCategorical.categories.length === 0)
                    return;
                var targetColumn = findSelectedCategoricalColumn(dataViewCategorical, selector);
                if (!targetColumn)
                    return;
                var identities = targetColumn.identities, foundMatch, evalContext = data.createCategoricalEvalContext(colorAllocatorCache, dataViewCategorical);
                if (!identities)
                    return;
                debug.assert(targetColumn.column.values.length === identities.length, 'Column length mismatch');
                for (var i = 0, len = identities.length; i < len; i++) {
                    var identity = identities[i];
                    if (containsWildcard || data.Selector.matchesData(selector, [identity])) {
                        evalContext.setCurrentRowIndex(i);
                        var objects = data.DataViewObjectEvaluationUtils.evaluateDataViewObjects(evalContext, objectDescriptors, objectDefns);
                        if (objects) {
                            // TODO: This mutates the DataView -- the assumption is that prototypal inheritance has already occurred.  We should
                            // revisit this, likely when we do lazy evaluation of DataView.
                            if (!targetColumn.column.objects) {
                                targetColumn.column.objects = [];
                                targetColumn.column.objects.length = len;
                            }
                            targetColumn.column.objects[i] = objects;
                        }
                        if (!containsWildcard)
                            return true;
                        foundMatch = true;
                    }
                }
                return foundMatch;
            }
            function evaluateDataRepetitionCategoricalValueGrouping(dataViewCategorical, objectDescriptors, selector, rules, containsWildcard, objectDefns, colorAllocatorCache) {
                debug.assertValue(dataViewCategorical, 'dataViewCategorical');
                debug.assertValue(objectDescriptors, 'objectDescriptors');
                debug.assertValue(selector, 'selector');
                debug.assertAnyValue(rules, 'rules');
                debug.assertValue(containsWildcard, 'containsWildcard');
                debug.assertValue(objectDefns, 'objectDefns');
                debug.assertValue(colorAllocatorCache, 'colorAllocatorCache');
                var dataViewCategoricalValues = dataViewCategorical.values;
                if (!dataViewCategoricalValues || !dataViewCategoricalValues.identityFields)
                    return;
                if (!data.Selector.matchesKeys(selector, [dataViewCategoricalValues.identityFields]))
                    return;
                var valuesGrouped = dataViewCategoricalValues.grouped();
                if (!valuesGrouped)
                    return;
                // NOTE: We do not set the evalContext row index below because iteration is over value groups (i.e., columns, no rows).
                // This should be enhanced in the future.
                var evalContext = data.createCategoricalEvalContext(colorAllocatorCache, dataViewCategorical);
                var foundMatch;
                for (var i = 0, len = valuesGrouped.length; i < len; i++) {
                    var valueGroup = valuesGrouped[i];
                    var selectorMetadata = selector.metadata;
                    var valuesInGroup = valueGroup.values;
                    if (containsWildcard || data.Selector.matchesData(selector, [valueGroup.identity])) {
                        var objects = data.DataViewObjectEvaluationUtils.evaluateDataViewObjects(evalContext, objectDescriptors, objectDefns);
                        if (objects) {
                            // TODO: This mutates the DataView -- the assumption is that prototypal inheritance has already occurred.  We should
                            // revisit this, likely when we do lazy evaluation of DataView.
                            if (selectorMetadata) {
                                for (var j = 0, jlen = valuesInGroup.length; j < jlen; j++) {
                                    var valueColumn = valuesInGroup[j], valueSource = valueColumn.source;
                                    if (valueSource.queryName === selectorMetadata) {
                                        var valueSourceOverwrite = powerbi.Prototype.inherit(valueSource);
                                        valueSourceOverwrite.objects = objects;
                                        valueColumn.source = valueSourceOverwrite;
                                        foundMatch = true;
                                        break;
                                    }
                                }
                            }
                            else {
                                valueGroup.objects = objects;
                                setGrouped(dataViewCategoricalValues, valuesGrouped);
                                foundMatch = true;
                            }
                        }
                        if (!containsWildcard)
                            return true;
                    }
                }
                return foundMatch;
            }
            function evaluateDataRepetitionMatrix(dataViewMatrix, objectDescriptors, selector, rules, containsWildcard, objectDefns, colorAllocatorCache) {
                var evalContext = data.createMatrixEvalContext(colorAllocatorCache, dataViewMatrix);
                var rewrittenRows = evaluateDataRepetitionMatrixHierarchy(evalContext, dataViewMatrix.rows, objectDescriptors, selector, rules, containsWildcard, objectDefns);
                var rewrittenCols = evaluateDataRepetitionMatrixHierarchy(evalContext, dataViewMatrix.columns, objectDescriptors, selector, rules, containsWildcard, objectDefns);
                if (rewrittenRows || rewrittenCols) {
                    var rewrittenMatrix = inheritSingle(dataViewMatrix);
                    if (rewrittenRows)
                        rewrittenMatrix.rows = rewrittenRows;
                    if (rewrittenCols)
                        rewrittenMatrix.columns = rewrittenCols;
                    return rewrittenMatrix;
                }
            }
            function evaluateDataRepetitionMatrixHierarchy(evalContext, dataViewMatrixHierarchy, objectDescriptors, selector, rules, containsWildcard, objectDefns) {
                debug.assertAnyValue(dataViewMatrixHierarchy, 'dataViewMatrixHierarchy');
                debug.assertValue(objectDescriptors, 'objectDescriptors');
                debug.assertValue(selector, 'selector');
                debug.assertAnyValue(rules, 'rules');
                debug.assertValue(objectDefns, 'objectDefns');
                if (!dataViewMatrixHierarchy)
                    return;
                var root = dataViewMatrixHierarchy.root;
                if (!root)
                    return;
                var rewrittenRoot = evaluateDataRepetitionMatrixNode(evalContext, root, objectDescriptors, selector, rules, containsWildcard, objectDefns);
                if (rewrittenRoot) {
                    var rewrittenHierarchy = inheritSingle(dataViewMatrixHierarchy);
                    rewrittenHierarchy.root = rewrittenRoot;
                    return rewrittenHierarchy;
                }
            }
            function evaluateDataRepetitionMatrixNode(evalContext, dataViewNode, objectDescriptors, selector, rules, containsWildcard, objectDefns) {
                debug.assertValue(evalContext, 'evalContext');
                debug.assertValue(dataViewNode, 'dataViewNode');
                debug.assertValue(objectDescriptors, 'objectDescriptors');
                debug.assertValue(selector, 'selector');
                debug.assertAnyValue(rules, 'rules');
                debug.assertValue(objectDefns, 'objectDefns');
                var childNodes = dataViewNode.children;
                if (!childNodes)
                    return;
                var rewrittenNode;
                var shouldSearchChildren;
                var childIdentityFields = dataViewNode.childIdentityFields;
                if (childIdentityFields) {
                    // NOTE: selector matching in matrix currently only considers the current node, and does not consider parents as part of the match.
                    shouldSearchChildren = data.Selector.matchesKeys(selector, [childIdentityFields]);
                }
                for (var i = 0, len = childNodes.length; i < len; i++) {
                    var childNode = childNodes[i], identity = childNode.identity, rewrittenChildNode = null;
                    if (shouldSearchChildren) {
                        if (containsWildcard || data.Selector.matchesData(selector, [identity])) {
                            // TODO: Need to initialize context for rule-based properties.  Rule-based properties
                            // (such as fillRule/gradients) are not currently implemented.
                            var objects = data.DataViewObjectEvaluationUtils.evaluateDataViewObjects(evalContext, objectDescriptors, objectDefns);
                            if (objects) {
                                rewrittenChildNode = inheritSingle(childNode);
                                rewrittenChildNode.objects = objects;
                            }
                        }
                    }
                    else {
                        rewrittenChildNode = evaluateDataRepetitionMatrixNode(evalContext, childNode, objectDescriptors, selector, rules, containsWildcard, objectDefns);
                    }
                    if (rewrittenChildNode) {
                        if (!rewrittenNode)
                            rewrittenNode = inheritNodeAndChildren(dataViewNode);
                        rewrittenNode.children[i] = rewrittenChildNode;
                        if (!containsWildcard) {
                            // NOTE: once we find a match for a non-wildcard selector, stop looking.
                            break;
                        }
                    }
                }
                return rewrittenNode;
            }
            function inheritNodeAndChildren(node) {
                if (Object.getPrototypeOf(node) !== Object.prototype) {
                    return node;
                }
                var inherited = inheritSingle(node);
                inherited.children = inherit(node.children);
                return inherited;
            }
            function evaluateDataRepetitionTable(dataViewTable, selectTransforms, objectDescriptors, selector, rules, containsWildcard, objectDefns, colorAllocatorCache) {
                debug.assertValue(dataViewTable, 'dataViewTable');
                debug.assertAnyValue(selectTransforms, 'selectTransforms');
                debug.assertValue(objectDescriptors, 'objectDescriptors');
                debug.assertValue(selector, 'selector');
                debug.assertAnyValue(rules, 'rules');
                debug.assertValue(objectDefns, 'objectDefns');
                debug.assertValue(colorAllocatorCache, 'colorAllocatorCache');
                var evalContext = data.createTableEvalContext(colorAllocatorCache, dataViewTable, selectTransforms);
                var rewrittenRows = evaluateDataRepetitionTableRows(evalContext, dataViewTable.columns, dataViewTable.rows, dataViewTable.identity, dataViewTable.identityFields, objectDescriptors, selector, rules, containsWildcard, objectDefns);
                if (rewrittenRows) {
                    var rewrittenTable = inheritSingle(dataViewTable);
                    rewrittenTable.rows = rewrittenRows;
                    return rewrittenTable;
                }
            }
            function evaluateDataRepetitionTableRows(evalContext, columns, rows, identities, identityFields, objectDescriptors, selector, rules, containsWildcard, objectDefns) {
                debug.assertValue(evalContext, 'evalContext');
                debug.assertValue(columns, 'columns');
                debug.assertValue(rows, 'rows');
                debug.assertAnyValue(identities, 'identities');
                debug.assertAnyValue(identityFields, 'identityFields');
                debug.assertValue(objectDescriptors, 'objectDescriptors');
                debug.assertValue(selector, 'selector');
                debug.assertAnyValue(rules, 'rules');
                debug.assertValue(objectDefns, 'objectDefns');
                if (_.isEmpty(identities) || _.isEmpty(identityFields))
                    return;
                if (!selector.metadata ||
                    !data.Selector.matchesKeys(selector, [identityFields]))
                    return;
                var colIdx = _.findIndex(columns, function (col) { return col.queryName === selector.metadata; });
                if (colIdx < 0)
                    return;
                debug.assert(rows.length === identities.length, 'row length mismatch');
                var colLen = columns.length;
                var inheritedRows;
                for (var rowIdx = 0, rowLen = identities.length; rowIdx < rowLen; rowIdx++) {
                    var identity = identities[rowIdx];
                    if (containsWildcard || data.Selector.matchesData(selector, [identity])) {
                        evalContext.setCurrentRowIndex(rowIdx);
                        var objects = data.DataViewObjectEvaluationUtils.evaluateDataViewObjects(evalContext, objectDescriptors, objectDefns);
                        if (objects) {
                            if (!inheritedRows)
                                inheritedRows = inheritSingle(rows);
                            var inheritedRow = inheritedRows[rowIdx] = inheritSingle(inheritedRows[rowIdx]);
                            var objectsForColumns = inheritedRow.objects;
                            if (!objectsForColumns)
                                inheritedRow.objects = objectsForColumns = new Array(colLen);
                            objectsForColumns[colIdx] = objects;
                        }
                        if (!containsWildcard)
                            break;
                    }
                }
                return inheritedRows;
            }
            function evaluateMetadataRepetition(dataView, selectTransforms, objectDescriptors, selector, objectDefns, colorAllocatorCache) {
                debug.assertValue(dataView, 'dataView');
                debug.assertAnyValue(selectTransforms, 'selectTransforms');
                debug.assertValue(objectDescriptors, 'objectDescriptors');
                debug.assertValue(selector, 'selector');
                debug.assertValue(objectDefns, 'objectDefns');
                debug.assertValue(colorAllocatorCache, 'colorAllocatorCache');
                // TODO: This mutates the DataView -- the assumption is that prototypal inheritance has already occurred.  We should
                // revisit this, likely when we do lazy evaluation of DataView.
                var columns = dataView.metadata.columns, metadataId = selector.metadata, evalContext = data.createStaticEvalContext(colorAllocatorCache, dataView, selectTransforms);
                for (var i = 0, len = columns.length; i < len; i++) {
                    var column = columns[i];
                    if (column.queryName === metadataId) {
                        var objects = data.DataViewObjectEvaluationUtils.evaluateDataViewObjects(evalContext, objectDescriptors, objectDefns);
                        if (objects)
                            column.objects = objects;
                    }
                }
            }
            /** Attempts to find a column that can possibly match the selector. */
            function findSelectedCategoricalColumn(dataViewCategorical, selector) {
                debug.assertValue(dataViewCategorical.categories[0], 'dataViewCategorical.categories[0]');
                var categoricalColumn = dataViewCategorical.categories[0];
                if (!categoricalColumn.identityFields)
                    return;
                if (!data.Selector.matchesKeys(selector, [categoricalColumn.identityFields]))
                    return;
                var identities = categoricalColumn.identity, targetColumn = categoricalColumn;
                var selectedMetadataId = selector.metadata;
                if (selectedMetadataId) {
                    var valueColumns = dataViewCategorical.values;
                    if (valueColumns) {
                        for (var i = 0, len = valueColumns.length; i < len; i++) {
                            var valueColumn = valueColumns[i];
                            if (valueColumn.source.queryName === selectedMetadataId) {
                                targetColumn = valueColumn;
                                break;
                            }
                        }
                    }
                }
                return {
                    column: targetColumn,
                    identities: identities,
                };
            }
            function findSelectorForRuleInput(dataView, selectorRoles) {
                debug.assertValue(dataView, 'dataView');
                debug.assertValue(selectorRoles, 'selectorRoles');
                if (selectorRoles.length !== 1)
                    return;
                var dataViewCategorical = dataView.categorical;
                if (!dataViewCategorical)
                    return;
                var categories = dataViewCategorical.categories;
                if (!categories || categories.length !== 1)
                    return;
                var categoryColumn = categories[0], categoryRoles = categoryColumn.source.roles, categoryIdentityFields = categoryColumn.identityFields;
                if (!categoryRoles || !categoryIdentityFields || !categoryRoles[selectorRoles[0]])
                    return;
                return { data: [data.DataViewScopeWildcard.fromExprs(categoryIdentityFields)] };
            }
            function findFirstQueryNameForExpr(selectTransforms, expr) {
                debug.assertAnyValue(selectTransforms, 'selectTransforms');
                debug.assertValue(expr, 'expr');
                if (!selectTransforms)
                    return;
                for (var i = 0, len = selectTransforms.length; i < len; i++) {
                    var select = selectTransforms[i], columnExpr = select.expr;
                    if (!columnExpr || !data.SQExpr.equals(expr, select.expr))
                        continue;
                    return select.queryName;
                }
            }
            /** Attempts to find the value range for the single column with the given identifier/identifierKind. */
            function findRuleInputColumnNumberRange(dataView, identifier, identifierKind) {
                debug.assertValue(dataView, 'dataView');
                debug.assertValue(identifier, 'identifier');
                debug.assertValue(identifierKind, 'identifierKind');
                // NOTE: This implementation currently only supports categorical DataView, becuase that's the
                // only scenario that has custom colors, as of this writing.  This would be rewritten to be more generic
                // as required, when needed.
                var dataViewCategorical = dataView.categorical;
                if (!dataViewCategorical)
                    return;
                var values = dataViewCategorical.values;
                if (!values)
                    return;
                for (var i = 0, len = values.length; i < len; i++) {
                    var valueCol = values[i];
                    if (identifierKind === 1 /* Role */) {
                        var valueColRoles = valueCol.source.roles;
                        if (!valueColRoles || !valueColRoles[identifier])
                            continue;
                    }
                    else {
                        debug.assert(identifierKind === 0 /* QueryName */, 'identifierKind === ColumnIdentifierKind.QueryName');
                        if (valueCol.source.queryName !== identifier)
                            continue;
                    }
                    var min = valueCol.min;
                    if (min === undefined)
                        min = valueCol.minLocal;
                    if (min === undefined)
                        continue;
                    var max = valueCol.max;
                    if (max === undefined)
                        max = valueCol.maxLocal;
                    if (max === undefined)
                        continue;
                    return { min: min, max: max };
                }
            }
            // TODO: refactor this, setGrouped, and groupValues to a test helper to stop using it in the product
            function createValueColumns(values, valueIdentityFields, source) {
                if (values === void 0) { values = []; }
                var result = values;
                setGrouped(values);
                if (valueIdentityFields)
                    result.identityFields = valueIdentityFields;
                if (source)
                    result.source = source;
                return result;
            }
            DataViewTransform.createValueColumns = createValueColumns;
            function setGrouped(values, groupedResult) {
                values.grouped = groupedResult
                    ? function () { return groupedResult; }
                    : function () { return groupValues(values); };
            }
            DataViewTransform.setGrouped = setGrouped;
            /** Group together the values with a common identity. */
            function groupValues(values) {
                debug.assertValue(values, 'values');
                var groups = [], currentGroup;
                for (var i = 0, len = values.length; i < len; i++) {
                    var value = values[i];
                    if (!currentGroup || currentGroup.identity !== value.identity) {
                        currentGroup = {
                            values: []
                        };
                        if (value.identity) {
                            currentGroup.identity = value.identity;
                            var source = value.source;
                            // allow null, which will be formatted as (Blank).
                            if (source.groupName !== undefined)
                                currentGroup.name = source.groupName;
                            else if (source.displayName)
                                currentGroup.name = source.displayName;
                        }
                        groups.push(currentGroup);
                    }
                    currentGroup.values.push(value);
                }
                return groups;
            }
            function pivotIfNecessary(dataView, dataViewMappings) {
                debug.assertValue(dataView, 'dataView');
                var transformedDataView;
                switch (determineCategoricalTransformation(dataView.categorical, dataViewMappings)) {
                    case 1 /* Pivot */:
                        transformedDataView = data.DataViewPivotCategorical.apply(dataView);
                        break;
                    case 2 /* SelfCrossJoin */:
                        transformedDataView = data.DataViewSelfCrossJoin.apply(dataView);
                        break;
                }
                return transformedDataView || dataView;
            }
            function determineCategoricalTransformation(categorical, dataViewMappings) {
                if (!categorical || _.isEmpty(dataViewMappings))
                    return;
                var categories = categorical.categories;
                if (!categories || categories.length !== 1)
                    return;
                var values = categorical.values;
                if (_.isEmpty(values))
                    return;
                if (values.grouped().some(function (vg) { return !!vg.identity; }))
                    return;
                // If we made it here, the DataView has a single category and no valueGrouping.
                var categoryRoles = categories[0].source.roles;
                for (var i = 0, len = dataViewMappings.length; i < len; i++) {
                    var roleMappingCategorical = dataViewMappings[i].categorical;
                    if (!roleMappingCategorical)
                        continue;
                    if (!hasRolesGrouped(categoryRoles, roleMappingCategorical.values))
                        continue;
                    // If we made it here, the DataView's single category has the value grouping role.
                    var categoriesMapping = roleMappingCategorical.categories;
                    var hasCategoryRole = hasRolesBind(categoryRoles, categoriesMapping) ||
                        hasRolesFor(categoryRoles, categoriesMapping);
                    if (hasCategoryRole)
                        return 2 /* SelfCrossJoin */;
                    return 1 /* Pivot */;
                }
            }
            function shouldPivotMatrix(matrix, dataViewMappings) {
                if (!matrix || _.isEmpty(dataViewMappings))
                    return;
                var rowLevels = matrix.rows.levels;
                if (rowLevels.length < 1)
                    return;
                var rows = matrix.rows.root.children;
                if (!rows || rows.length === 0)
                    return;
                var rowRoles = rowLevels[0].sources[0].roles;
                for (var i = 0, len = dataViewMappings.length; i < len; i++) {
                    var roleMappingMatrix = dataViewMappings[i].matrix;
                    if (!roleMappingMatrix)
                        continue;
                    if (!hasRolesFor(rowRoles, roleMappingMatrix.rows) &&
                        hasRolesFor(rowRoles, roleMappingMatrix.columns)) {
                        return true;
                    }
                }
            }
            function hasRolesBind(roles, roleMapping) {
                if (roles && roleMapping && roleMapping.bind)
                    return roles[roleMapping.bind.to];
            }
            function hasRolesFor(roles, roleMapping) {
                if (roles && roleMapping && roleMapping.for)
                    return roles[roleMapping.for.in];
            }
            function hasRolesGrouped(roles, roleMapping) {
                if (roles && roleMapping && roleMapping.group)
                    return roles[roleMapping.group.by];
            }
        })(DataViewTransform = data.DataViewTransform || (data.DataViewTransform = {}));
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
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
    var data;
    (function (data) {
        function createDisplayNameGetter(displayNameKey) {
            return function (resourceProvider) { return resourceProvider.get(displayNameKey); };
        }
        data.createDisplayNameGetter = createDisplayNameGetter;
        function getDisplayName(displayNameGetter, resourceProvider) {
            if (typeof displayNameGetter === 'function')
                return displayNameGetter(resourceProvider);
            if (typeof displayNameGetter === 'string')
                return displayNameGetter;
        }
        data.getDisplayName = getDisplayName;
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
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
    /** Enumeration of DateTimeUnits */
    (function (DateTimeUnit) {
        DateTimeUnit[DateTimeUnit["Year"] = 0] = "Year";
        DateTimeUnit[DateTimeUnit["Month"] = 1] = "Month";
        DateTimeUnit[DateTimeUnit["Week"] = 2] = "Week";
        DateTimeUnit[DateTimeUnit["Day"] = 3] = "Day";
        DateTimeUnit[DateTimeUnit["Hour"] = 4] = "Hour";
        DateTimeUnit[DateTimeUnit["Minute"] = 5] = "Minute";
        DateTimeUnit[DateTimeUnit["Second"] = 6] = "Second";
        DateTimeUnit[DateTimeUnit["Millisecond"] = 7] = "Millisecond";
    })(powerbi.DateTimeUnit || (powerbi.DateTimeUnit = {}));
    var DateTimeUnit = powerbi.DateTimeUnit;
})(powerbi || (powerbi = {}));
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
    var data;
    (function (data) {
        var SQExprBuilder;
        (function (SQExprBuilder) {
            function fieldExpr(fieldExpr) {
                var sqExpr = FieldExprPattern.visit(fieldExpr, FieldExprToSQExprVisitor.instance);
                debug.assertValue(sqExpr, 'Failed to convert FieldExprPattern into SQExpr');
                return sqExpr;
            }
            SQExprBuilder.fieldExpr = fieldExpr;
            function fromColumnAggr(columnAggr) {
                return SQExprBuilder.aggregate(fromColumn(columnAggr), columnAggr.aggregate);
            }
            SQExprBuilder.fromColumnAggr = fromColumnAggr;
            function fromColumn(column) {
                return SQExprBuilder.columnRef(fromEntity(column), column.name);
            }
            SQExprBuilder.fromColumn = fromColumn;
            function fromEntity(entityPattern) {
                return SQExprBuilder.entity(entityPattern.schema, entityPattern.entity, entityPattern.entityVar);
            }
            SQExprBuilder.fromEntity = fromEntity;
            function fromEntityAggr(entityAggr) {
                return SQExprBuilder.aggregate(fromEntity(entityAggr), entityAggr.aggregate);
            }
            SQExprBuilder.fromEntityAggr = fromEntityAggr;
            function fromHierarchyLevelAggr(hierarchyLevelAggr) {
                return SQExprBuilder.aggregate(fromHierarchyLevel(hierarchyLevelAggr), hierarchyLevelAggr.aggregate);
            }
            SQExprBuilder.fromHierarchyLevelAggr = fromHierarchyLevelAggr;
            function fromHierarchyLevel(hierarchyLevelPattern) {
                return SQExprBuilder.hierarchyLevel(fromHierarchy(hierarchyLevelPattern), hierarchyLevelPattern.level);
            }
            SQExprBuilder.fromHierarchyLevel = fromHierarchyLevel;
            function fromHierarchy(hierarchyPattern) {
                return SQExprBuilder.hierarchy(fromEntity(hierarchyPattern), hierarchyPattern.name);
            }
            SQExprBuilder.fromHierarchy = fromHierarchy;
            var FieldExprToSQExprVisitor = (function () {
                function FieldExprToSQExprVisitor() {
                }
                FieldExprToSQExprVisitor.prototype.visitColumn = function (column) {
                    return fromColumn(column);
                };
                FieldExprToSQExprVisitor.prototype.visitColumnAggr = function (columnAggr) {
                    return fromColumnAggr(columnAggr);
                };
                FieldExprToSQExprVisitor.prototype.visitColumnHierarchyLevelVariation = function (columnHierarchyLevelVariationPattern) {
                    return SQExprBuilder.propertyVariationSource(this.visitEntity(columnHierarchyLevelVariationPattern.source), columnHierarchyLevelVariationPattern.source.name, columnHierarchyLevelVariationPattern.level.name);
                };
                FieldExprToSQExprVisitor.prototype.visitEntity = function (entityPattern) {
                    return fromEntity(entityPattern);
                };
                FieldExprToSQExprVisitor.prototype.visitEntityAggr = function (entityAggr) {
                    return fromEntityAggr(entityAggr);
                };
                FieldExprToSQExprVisitor.prototype.visitHierarchy = function (hierarchyPattern) {
                    return fromHierarchy(hierarchyPattern);
                };
                FieldExprToSQExprVisitor.prototype.visitHierarchyLevel = function (level) {
                    return fromHierarchyLevel(level);
                };
                FieldExprToSQExprVisitor.prototype.visitHierarchyLevelAggr = function (hierarchyLevelAggr) {
                    return fromHierarchyLevelAggr(hierarchyLevelAggr);
                };
                FieldExprToSQExprVisitor.prototype.visitMeasure = function (measure) {
                    return SQExprBuilder.measureRef(this.visitEntity(measure), measure.name);
                };
                FieldExprToSQExprVisitor.instance = new FieldExprToSQExprVisitor();
                return FieldExprToSQExprVisitor;
            }());
        })(SQExprBuilder = data.SQExprBuilder || (data.SQExprBuilder = {}));
        var SQExprConverter;
        (function (SQExprConverter) {
            function asFieldPattern(sqExpr) {
                return sqExpr.accept(FieldExprPatternBuilder.instance);
            }
            SQExprConverter.asFieldPattern = asFieldPattern;
        })(SQExprConverter = data.SQExprConverter || (data.SQExprConverter = {}));
        var FieldExprPatternBuilder = (function (_super) {
            __extends(FieldExprPatternBuilder, _super);
            function FieldExprPatternBuilder() {
                _super.apply(this, arguments);
            }
            FieldExprPatternBuilder.prototype.visitColumnRef = function (expr) {
                var sourceRef = expr.source.accept(SourceExprPatternBuilder.instance);
                if (!sourceRef)
                    return;
                if (sourceRef.entity) {
                    var columnRef = sourceRef.entity;
                    columnRef.name = expr.ref;
                    return { column: columnRef };
                }
            };
            FieldExprPatternBuilder.prototype.visitMeasureRef = function (expr) {
                var sourceRef = expr.source.accept(SourceExprPatternBuilder.instance);
                if (!sourceRef)
                    return;
                if (sourceRef.entity) {
                    var measureRef = sourceRef.entity;
                    measureRef.name = expr.ref;
                    return { measure: measureRef };
                }
            };
            FieldExprPatternBuilder.prototype.visitEntity = function (expr) {
                var entityRef = {
                    schema: expr.schema,
                    entity: expr.entity
                };
                if (expr.variable)
                    entityRef.entityVar = expr.variable;
                return { entity: entityRef };
            };
            FieldExprPatternBuilder.prototype.visitAggr = function (expr) {
                var fieldPattern = expr.arg.accept(this);
                if (fieldPattern && fieldPattern.column) {
                    var argAggr = fieldPattern.column;
                    argAggr.aggregate = expr.func;
                    return { columnAggr: argAggr };
                }
                else if (fieldPattern && fieldPattern.columnAggr) {
                    var argAggr = fieldPattern.columnAggr;
                    argAggr.aggregate = expr.func;
                    return { columnAggr: argAggr };
                }
                else if (fieldPattern && fieldPattern.hierarchyLevel) {
                    var argAggr = fieldPattern.hierarchyLevel;
                    argAggr.aggregate = expr.func;
                    return { hierarchyLevelAggr: argAggr };
                }
                var sourcePattern = expr.arg.accept(SourceExprPatternBuilder.instance);
                if (sourcePattern && sourcePattern.entity) {
                    var argAggr = sourcePattern.entity;
                    argAggr.aggregate = expr.func;
                    return { entityAggr: argAggr };
                }
            };
            FieldExprPatternBuilder.prototype.visitHierarchy = function (expr) {
                var sourcePattern = expr.arg.accept(SourceExprPatternBuilder.instance);
                if (sourcePattern && sourcePattern.entity) {
                    var hierarchyRef = (sourcePattern.entity);
                    hierarchyRef.name = expr.hierarchy;
                    return { hierarchy: hierarchyRef };
                }
            };
            FieldExprPatternBuilder.prototype.visitHierarchyLevel = function (expr) {
                var hierarchySourceExprPattern = expr.arg.accept(HierarchyExprPatternBuiler.instance);
                if (!hierarchySourceExprPattern)
                    return;
                var hierarchyLevel;
                if (hierarchySourceExprPattern.hierarchy) {
                    hierarchyLevel = {
                        entity: hierarchySourceExprPattern.hierarchy.entity,
                        schema: hierarchySourceExprPattern.hierarchy.schema,
                        name: hierarchySourceExprPattern.hierarchy.name,
                        level: expr.level,
                    };
                }
                if (hierarchySourceExprPattern.variation) {
                    return {
                        columnHierarchyLevelVariation: {
                            source: {
                                entity: hierarchySourceExprPattern.variation.column.entity,
                                schema: hierarchySourceExprPattern.variation.column.schema,
                                name: hierarchySourceExprPattern.variation.column.name,
                            },
                            level: hierarchyLevel,
                            variationName: hierarchySourceExprPattern.variation.variationName,
                        }
                    };
                }
                return { hierarchyLevel: hierarchyLevel };
            };
            FieldExprPatternBuilder.instance = new FieldExprPatternBuilder();
            return FieldExprPatternBuilder;
        }(data.DefaultSQExprVisitor));
        var SourceExprPatternBuilder = (function (_super) {
            __extends(SourceExprPatternBuilder, _super);
            function SourceExprPatternBuilder() {
                _super.apply(this, arguments);
            }
            SourceExprPatternBuilder.prototype.visitEntity = function (expr) {
                var entityRef = {
                    schema: expr.schema,
                    entity: expr.entity
                };
                if (expr.variable)
                    entityRef.entityVar = expr.variable;
                return { entity: entityRef };
            };
            SourceExprPatternBuilder.prototype.visitPropertyVariationSource = function (expr) {
                var entityExpr = expr.arg;
                if (entityExpr instanceof data.SQEntityExpr) {
                    var propertyVariationSource = {
                        schema: entityExpr.schema,
                        entity: entityExpr.entity,
                        name: expr.property,
                    };
                    if (entityExpr.variable)
                        propertyVariationSource.entityVar = entityExpr.variable;
                    return {
                        variation: {
                            column: propertyVariationSource,
                            variationName: expr.name,
                        }
                    };
                }
            };
            SourceExprPatternBuilder.instance = new SourceExprPatternBuilder();
            return SourceExprPatternBuilder;
        }(data.DefaultSQExprVisitor));
        var HierarchyExprPatternBuiler = (function (_super) {
            __extends(HierarchyExprPatternBuiler, _super);
            function HierarchyExprPatternBuiler() {
                _super.apply(this, arguments);
            }
            HierarchyExprPatternBuiler.prototype.visitHierarchy = function (expr) {
                var exprPattern = expr.arg.accept(SourceExprPatternBuilder.instance);
                var hierarchyRef;
                var variationRef;
                if (exprPattern.variation) {
                    hierarchyRef = {
                        name: expr.hierarchy,
                        schema: exprPattern.variation.column.schema,
                        entity: exprPattern.variation.column.entity,
                    };
                    variationRef = exprPattern.variation;
                }
                else
                    hierarchyRef = {
                        name: expr.hierarchy,
                        schema: exprPattern.entity.schema,
                        entity: exprPattern.entity.entity,
                    };
                return {
                    hierarchy: hierarchyRef,
                    variation: variationRef
                };
            };
            HierarchyExprPatternBuiler.instance = new HierarchyExprPatternBuiler();
            return HierarchyExprPatternBuiler;
        }(data.DefaultSQExprVisitor));
        var FieldExprPattern;
        (function (FieldExprPattern) {
            function visit(expr, visitor) {
                debug.assertValue(expr, 'expr');
                debug.assertValue(visitor, 'visitor');
                var fieldExprPattern = expr instanceof data.SQExpr ? SQExprConverter.asFieldPattern(expr) : expr;
                debug.assertValue(fieldExprPattern, 'expected sqExpr to conform to a fieldExprPattern');
                if (fieldExprPattern.column)
                    return visitColumn(fieldExprPattern.column, visitor);
                if (fieldExprPattern.columnAggr)
                    return visitColumnAggr(fieldExprPattern.columnAggr, visitor);
                if (fieldExprPattern.columnHierarchyLevelVariation)
                    return visitColumnHierarchyLevelVariation(fieldExprPattern.columnHierarchyLevelVariation, visitor);
                if (fieldExprPattern.entity)
                    return visitEntity(fieldExprPattern.entity, visitor);
                if (fieldExprPattern.entityAggr)
                    return visitEntityAggr(fieldExprPattern.entityAggr, visitor);
                if (fieldExprPattern.hierarchy)
                    return visitHierarchy(fieldExprPattern.hierarchy, visitor);
                if (fieldExprPattern.hierarchyLevel)
                    return visitHierarchyLevel(fieldExprPattern.hierarchyLevel, visitor);
                if (fieldExprPattern.hierarchyLevelAggr)
                    return visitHierarchyLevelAggr(fieldExprPattern.hierarchyLevelAggr, visitor);
                if (fieldExprPattern.measure)
                    return visitMeasure(fieldExprPattern.measure, visitor);
                debug.assertFail('failed to visit a fieldExprPattern.');
                return;
            }
            FieldExprPattern.visit = visit;
            function visitColumn(column, visitor) {
                debug.assertValue(column, 'column');
                debug.assertValue(visitor, 'visitor');
                return visitor.visitColumn(column);
            }
            function visitColumnAggr(columnAggr, visitor) {
                debug.assertValue(columnAggr, 'columnAggr');
                debug.assertValue(visitor, 'visitor');
                return visitor.visitColumnAggr(columnAggr);
            }
            function visitColumnHierarchyLevelVariation(columnHierarchyLevelVariation, visitor) {
                debug.assertValue(columnHierarchyLevelVariation, 'columnHierarchyLevelVariation');
                debug.assertValue(visitor, 'visitor');
                return visitor.visitColumnHierarchyLevelVariation(columnHierarchyLevelVariation);
            }
            function visitEntity(entity, visitor) {
                debug.assertValue(entity, 'entity');
                debug.assertValue(visitor, 'visitor');
                return visitor.visitEntity(entity);
            }
            function visitEntityAggr(entityAggr, visitor) {
                debug.assertValue(entityAggr, 'entityAggr');
                debug.assertValue(visitor, 'visitor');
                return visitor.visitEntityAggr(entityAggr);
            }
            function visitHierarchy(hierarchy, visitor) {
                debug.assertValue(hierarchy, 'hierarchy');
                debug.assertValue(visitor, 'visitor');
                return visitor.visitHierarchy(hierarchy);
            }
            function visitHierarchyLevel(hierarchyLevel, visitor) {
                debug.assertValue(hierarchyLevel, 'hierarchyLevel');
                debug.assertValue(visitor, 'visitor');
                return visitor.visitHierarchyLevel(hierarchyLevel);
            }
            function visitHierarchyLevelAggr(hierarchyLevelAggr, visitor) {
                debug.assertValue(hierarchyLevelAggr, 'hierarchyLevelAggr');
                debug.assertValue(visitor, 'visitor');
                return visitor.visitHierarchyLevelAggr(hierarchyLevelAggr);
            }
            function visitMeasure(measure, visitor) {
                debug.assertValue(measure, 'measure');
                debug.assertValue(visitor, 'visitor');
                return visitor.visitMeasure(measure);
            }
            function toColumnRefSQExpr(columnPattern) {
                return SQExprBuilder.columnRef(SQExprBuilder.entity(columnPattern.schema, columnPattern.entity, columnPattern.entityVar), columnPattern.name);
            }
            FieldExprPattern.toColumnRefSQExpr = toColumnRefSQExpr;
            function getAggregate(fieldExpr) {
                debug.assertValue(fieldExpr, 'fieldExpr');
                return visit(fieldExpr, FieldExprPatternAggregateVisitor.instance);
            }
            FieldExprPattern.getAggregate = getAggregate;
            function hasFieldExprName(fieldExpr) {
                return (fieldExpr.column ||
                    fieldExpr.columnAggr ||
                    fieldExpr.measure) !== undefined;
            }
            FieldExprPattern.hasFieldExprName = hasFieldExprName;
            function getPropertyName(fieldExpr) {
                var column = (fieldExpr.column ||
                    fieldExpr.columnAggr ||
                    fieldExpr.measure);
                if (column)
                    return column.name;
            }
            FieldExprPattern.getPropertyName = getPropertyName;
            function getHierarchyName(fieldExpr) {
                var hierarchy = fieldExpr.hierarchy;
                if (hierarchy)
                    return hierarchy.name;
            }
            FieldExprPattern.getHierarchyName = getHierarchyName;
            function getColumnRef(fieldExpr) {
                if (fieldExpr.columnHierarchyLevelVariation)
                    return fieldExpr.columnHierarchyLevelVariation.source;
                return fieldExpr.column || fieldExpr.measure || fieldExpr.columnAggr;
            }
            FieldExprPattern.getColumnRef = getColumnRef;
            function getFieldExprName(fieldExpr) {
                var name = getPropertyName(fieldExpr);
                if (name)
                    return name;
                // In case it is an entity
                return toFieldExprEntityPattern(fieldExpr).entity;
            }
            FieldExprPattern.getFieldExprName = getFieldExprName;
            function toFieldExprEntityPattern(fieldExpr) {
                return FieldExprPattern.visit(fieldExpr, FieldExprToEntityExprPatternBuilder.instance);
            }
            FieldExprPattern.toFieldExprEntityPattern = toFieldExprEntityPattern;
            function toFieldExprEntityItemPattern(fieldExpr) {
                return FieldExprPattern.visit(fieldExpr, FieldExprToEntityExprPatternBuilder.instance);
            }
            FieldExprPattern.toFieldExprEntityItemPattern = toFieldExprEntityItemPattern;
            var FieldExprPatternAggregateVisitor = (function () {
                function FieldExprPatternAggregateVisitor() {
                }
                FieldExprPatternAggregateVisitor.prototype.visitColumn = function (column) {
                    return;
                };
                FieldExprPatternAggregateVisitor.prototype.visitColumnAggr = function (columnAggr) {
                    return columnAggr.aggregate;
                };
                FieldExprPatternAggregateVisitor.prototype.visitColumnHierarchyLevelVariation = function (columnHierarchyLevelVariation) {
                    return;
                };
                FieldExprPatternAggregateVisitor.prototype.visitEntity = function (entity) {
                    return;
                };
                FieldExprPatternAggregateVisitor.prototype.visitEntityAggr = function (entityAggr) {
                    return entityAggr.aggregate;
                };
                FieldExprPatternAggregateVisitor.prototype.visitHierarchy = function (hierarchy) {
                    return;
                };
                FieldExprPatternAggregateVisitor.prototype.visitHierarchyLevel = function (hierarchyLevel) {
                    return;
                };
                FieldExprPatternAggregateVisitor.prototype.visitHierarchyLevelAggr = function (hierarchyLevelAggr) {
                    return hierarchyLevelAggr.aggregate;
                };
                FieldExprPatternAggregateVisitor.prototype.visitMeasure = function (measure) {
                    return;
                };
                FieldExprPatternAggregateVisitor.instance = new FieldExprPatternAggregateVisitor();
                return FieldExprPatternAggregateVisitor;
            }());
            var FieldExprToEntityExprPatternBuilder = (function () {
                function FieldExprToEntityExprPatternBuilder() {
                }
                FieldExprToEntityExprPatternBuilder.prototype.visitColumn = function (column) {
                    return FieldExprToEntityExprPatternBuilder.toEntityItemExprPattern(column);
                };
                FieldExprToEntityExprPatternBuilder.prototype.visitColumnAggr = function (columnAggr) {
                    return FieldExprToEntityExprPatternBuilder.toEntityItemExprPattern(columnAggr);
                };
                FieldExprToEntityExprPatternBuilder.prototype.visitColumnHierarchyLevelVariation = function (columnHierarchyLevelVariation) {
                    return FieldExprToEntityExprPatternBuilder.toEntityItemExprPattern(columnHierarchyLevelVariation.source);
                };
                FieldExprToEntityExprPatternBuilder.prototype.visitEntity = function (entity) {
                    return FieldExprToEntityExprPatternBuilder.toEntityItemExprPattern(entity);
                };
                FieldExprToEntityExprPatternBuilder.prototype.visitEntityAggr = function (entityAggr) {
                    return FieldExprToEntityExprPatternBuilder.toEntityItemExprPattern(entityAggr);
                };
                FieldExprToEntityExprPatternBuilder.prototype.visitHierarchy = function (hierarchy) {
                    return FieldExprToEntityExprPatternBuilder.toEntityItemExprPattern(hierarchy);
                };
                FieldExprToEntityExprPatternBuilder.prototype.visitHierarchyLevel = function (hierarchyLevel) {
                    return FieldExprToEntityExprPatternBuilder.toEntityItemExprPattern(hierarchyLevel);
                };
                FieldExprToEntityExprPatternBuilder.prototype.visitHierarchyLevelAggr = function (hierarchyLevelAggr) {
                    return FieldExprToEntityExprPatternBuilder.toEntityItemExprPattern(hierarchyLevelAggr);
                };
                FieldExprToEntityExprPatternBuilder.prototype.visitMeasure = function (measure) {
                    return FieldExprToEntityExprPatternBuilder.toEntityItemExprPattern(measure);
                };
                FieldExprToEntityExprPatternBuilder.toEntityItemExprPattern = function (exprPattern) {
                    debug.assertValue(exprPattern, 'exprPattern');
                    var pattern = { schema: exprPattern.schema, entity: exprPattern.entity };
                    if (exprPattern.entityVar) {
                        pattern.entityVar = exprPattern.entityVar;
                    }
                    return pattern;
                };
                FieldExprToEntityExprPatternBuilder.instance = new FieldExprToEntityExprPatternBuilder();
                return FieldExprToEntityExprPatternBuilder;
            }());
        })(FieldExprPattern = data.FieldExprPattern || (data.FieldExprPattern = {}));
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
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
    var DataViewAnalysis;
    (function (DataViewAnalysis) {
        var ArrayExtensions = jsCommon.ArrayExtensions;
        var DataViewObjectDefinitions = powerbi.data.DataViewObjectDefinitions;
        (function (DataViewMappingMatchErrorCode) {
            DataViewMappingMatchErrorCode[DataViewMappingMatchErrorCode["conditionRangeTooLarge"] = 0] = "conditionRangeTooLarge";
            DataViewMappingMatchErrorCode[DataViewMappingMatchErrorCode["conditionRangeTooSmall"] = 1] = "conditionRangeTooSmall";
            DataViewMappingMatchErrorCode[DataViewMappingMatchErrorCode["conditionKindExpectedMeasure"] = 2] = "conditionKindExpectedMeasure";
            DataViewMappingMatchErrorCode[DataViewMappingMatchErrorCode["conditionKindExpectedGrouping"] = 3] = "conditionKindExpectedGrouping";
            DataViewMappingMatchErrorCode[DataViewMappingMatchErrorCode["conditionKindExpectedGroupingOrMeasure"] = 4] = "conditionKindExpectedGroupingOrMeasure";
        })(DataViewAnalysis.DataViewMappingMatchErrorCode || (DataViewAnalysis.DataViewMappingMatchErrorCode = {}));
        var DataViewMappingMatchErrorCode = DataViewAnalysis.DataViewMappingMatchErrorCode;
        /** Reshapes the data view to match the provided schema if possible. If not, returns null */
        function validateAndReshape(dataView, dataViewMappings) {
            if (!dataViewMappings || dataViewMappings.length === 0)
                return { dataView: dataView, isValid: true };
            if (dataView) {
                for (var _i = 0, dataViewMappings_3 = dataViewMappings; _i < dataViewMappings_3.length; _i++) {
                    var dataViewMapping = dataViewMappings_3[_i];
                    // Keep the original when possible.
                    if (supports(dataView, dataViewMapping))
                        return { dataView: dataView, isValid: true };
                    if (dataViewMapping.categorical && dataView.categorical)
                        return reshapeCategorical(dataView, dataViewMapping);
                    if (dataViewMapping.tree && dataView.tree)
                        return reshapeTree(dataView, dataViewMapping.tree);
                    if (dataViewMapping.single && dataView.single)
                        return reshapeSingle(dataView, dataViewMapping.single);
                    if (dataViewMapping.table && dataView.table)
                        return reshapeTable(dataView, dataViewMapping.table);
                }
            }
            else if (powerbi.ScriptResultUtil.findScriptResult(dataViewMappings)) {
                // Currently, PBI Service treats R Script Visuals as static images.
                // This causes validation to fail, since in PBI service no DataView is generated, but there are DataViewMappings,
                // to support the PBI Desktop scenario.
                // This code will be removed once PBI Service fully supports R Script Visuals.
                // VSTS: 6217994 - [R Viz] Remove temporary DataViewAnalysis validation workaround of static R Script Visual mappings
                return { dataView: dataView, isValid: true };
            }
            return { isValid: false };
        }
        DataViewAnalysis.validateAndReshape = validateAndReshape;
        function reshapeCategorical(dataView, dataViewMapping) {
            debug.assertValue(dataViewMapping, 'dataViewMapping');
            //The functionality that used to compare categorical.values.length to schema.values doesn't apply any more, we don't want to use the same logic for re-shaping.
            var categoryRoleMapping = dataViewMapping.categorical;
            var categorical = dataView.categorical;
            if (!categorical)
                return { isValid: false };
            var rowCount;
            if (categoryRoleMapping.rowCount) {
                rowCount = categoryRoleMapping.rowCount.supported;
                if (rowCount && rowCount.max) {
                    var updated = void 0;
                    var categories = categorical.categories;
                    var maxRowCount = rowCount.max;
                    var originalLength = undefined;
                    if (categories) {
                        for (var i = 0, len = categories.length; i < len; i++) {
                            var category = categories[i];
                            originalLength = category.values.length;
                            if (maxRowCount !== undefined && originalLength > maxRowCount) {
                                // Row count too large: Trim it to fit.
                                var updatedCategories = ArrayExtensions.range(category.values, 0, maxRowCount - 1);
                                updated = updated || { categories: [] };
                                updated.categories.push({
                                    source: category.source,
                                    values: updatedCategories
                                });
                            }
                        }
                    }
                    if (categorical.values && categorical.values.length > 0 && maxRowCount) {
                        if (!originalLength)
                            originalLength = categorical.values[0].values.length;
                        if (maxRowCount !== undefined && originalLength > maxRowCount) {
                            updated = updated || {};
                            updated.values = powerbi.data.DataViewTransform.createValueColumns();
                            for (var i = 0, len = categorical.values.length; i < len; i++) {
                                var column = categorical.values[i], updatedColumn = {
                                    source: column.source,
                                    values: ArrayExtensions.range(column.values, 0, maxRowCount - 1)
                                };
                                if (column.min !== undefined)
                                    updatedColumn.min = column.min;
                                if (column.max !== undefined)
                                    updatedColumn.max = column.max;
                                if (column.subtotal !== undefined)
                                    updatedColumn.subtotal = column.subtotal;
                                updated.values.push(updatedColumn);
                            }
                        }
                    }
                    if (updated) {
                        dataView = {
                            metadata: dataView.metadata,
                            categorical: updated,
                        };
                    }
                }
            }
            if (supportsCategorical(dataView, dataViewMapping))
                return { dataView: dataView, isValid: true };
            return null;
        }
        function reshapeSingle(dataView, singleRoleMapping) {
            debug.assertValue(dataView, 'dataView');
            debug.assertValue(singleRoleMapping, 'singleRoleMapping');
            if (dataView.single)
                return { dataView: dataView, isValid: true };
            return { isValid: false };
        }
        function reshapeTree(dataView, treeRoleMapping) {
            debug.assertValue(dataView, 'dataView');
            debug.assertValue(treeRoleMapping, 'treeRoleMapping');
            // TODO: Need to implement the reshaping of Tree
            var metadata = dataView.metadata;
            if (validateRange(countGroups(metadata.columns), treeRoleMapping.depth) == null /*&& conforms(countMeasures(metadata.columns), treeRoleMapping.aggregates)*/)
                return { dataView: dataView, isValid: true };
            return { isValid: false };
        }
        function reshapeTable(dataView, tableRoleMapping) {
            debug.assertValue(dataView, 'dataView');
            debug.assertValue(tableRoleMapping, 'tableRoleMapping');
            if (dataView.table)
                return { dataView: dataView, isValid: true };
            return { isValid: false };
        }
        function countGroups(columns) {
            var count = 0;
            for (var i = 0, len = columns.length; i < len; i++) {
                if (!columns[i].isMeasure)
                    ++count;
            }
            return count;
        }
        DataViewAnalysis.countGroups = countGroups;
        function countMeasures(columns) {
            var count = 0;
            for (var i = 0, len = columns.length; i < len; i++) {
                if (columns[i].isMeasure)
                    ++count;
            }
            return count;
        }
        DataViewAnalysis.countMeasures = countMeasures;
        /** Indicates whether the dataView conforms to the specified schema. */
        function supports(dataView, roleMapping, usePreferredDataViewSchema) {
            if (!roleMapping || !dataView)
                return false;
            if (roleMapping.scriptResult && !supportsScriptResult(dataView.scriptResult, roleMapping.scriptResult))
                return false;
            if (roleMapping.categorical && !supportsCategorical(dataView, roleMapping.categorical, usePreferredDataViewSchema))
                return false;
            if (roleMapping.tree && !supportsTree(dataView, roleMapping.tree))
                return false;
            if (roleMapping.single && !supportsSingle(dataView.single, roleMapping.single))
                return false;
            if (roleMapping.table && !supportsTable(dataView.table, roleMapping.table, usePreferredDataViewSchema))
                return false;
            return true;
        }
        DataViewAnalysis.supports = supports;
        function supportsCategorical(dataView, categoryRoleMapping, usePreferredDataViewSchema) {
            debug.assertValue(categoryRoleMapping, 'categoryRoleMapping');
            var dataViewCategorical = dataView.categorical;
            if (!dataViewCategorical)
                return false;
            // TODO: Disabling this implementation isn't right.
            //if (!conforms(countMeasures(dataView.metadata.columns), categoryRoleMapping.values.roles.length))
            //    return false;
            if (categoryRoleMapping.rowCount) {
                var rowCount = categoryRoleMapping.rowCount.supported;
                if (usePreferredDataViewSchema && categoryRoleMapping.rowCount.preferred)
                    rowCount = categoryRoleMapping.rowCount.preferred;
                if (rowCount) {
                    var len = 0;
                    if (dataViewCategorical.values && dataViewCategorical.values.length)
                        len = dataViewCategorical.values[0].values.length;
                    else if (dataViewCategorical.categories && dataViewCategorical.categories.length)
                        len = dataViewCategorical.categories[0].values.length;
                    if (validateRange(len, rowCount) != null)
                        return false;
                }
            }
            return true;
        }
        function supportsSingle(dataViewSingle, singleRoleMapping) {
            debug.assertValue(singleRoleMapping, 'singleRoleMapping');
            if (!dataViewSingle)
                return false;
            return true;
        }
        function supportsTree(dataView, treeRoleMapping) {
            debug.assertValue(treeRoleMapping, 'treeRoleMapping');
            var metadata = dataView.metadata;
            return validateRange(countGroups(metadata.columns), treeRoleMapping.depth) == null;
        }
        function supportsTable(dataViewTable, tableRoleMapping, usePreferredDataViewSchema) {
            debug.assertValue(tableRoleMapping, 'tableRoleMapping');
            if (!dataViewTable)
                return false;
            if (tableRoleMapping.rowCount) {
                var rowCount = tableRoleMapping.rowCount.supported;
                if (usePreferredDataViewSchema && tableRoleMapping.rowCount.preferred)
                    rowCount = tableRoleMapping.rowCount.preferred;
                if (rowCount) {
                    var len = 0;
                    if (dataViewTable.rows && dataViewTable.rows.length)
                        len = dataViewTable.rows.length;
                    if (validateRange(len, rowCount) != null)
                        return false;
                }
            }
            return true;
        }
        function supportsScriptResult(dataView, scriptResultRoleMapping) {
            debug.assertValue(scriptResultRoleMapping, 'scriptResultRoleMapping');
            if (!dataView)
                return false;
            if (!dataView.imageBase64)
                return false;
            return true;
        }
        /**
         * Determines whether the value conforms to the range in the role condition, returning undefined
         * if so or an appropriate error code if not.
         */
        function validateRange(value, roleCondition, ignoreMin) {
            debug.assertValue(value, 'value');
            if (!roleCondition)
                return;
            if (!ignoreMin && roleCondition.min !== undefined && roleCondition.min > value)
                return DataViewMappingMatchErrorCode.conditionRangeTooSmall;
            if (roleCondition.max !== undefined && roleCondition.max < value)
                return DataViewMappingMatchErrorCode.conditionRangeTooLarge;
        }
        DataViewAnalysis.validateRange = validateRange;
        /**
         * Determines whether the value conforms to the kind in the role condition, returning undefined
         * if so or an appropriate error code if not.
         */
        function validateKind(roleCondition, roleName, projections, roleKindByQueryRef) {
            if (!roleCondition || roleCondition.kind === undefined) {
                return;
            }
            var expectedKind = roleCondition.kind;
            var roleCollection = projections[roleName];
            if (roleCollection) {
                var roleProjections = roleCollection.all();
                for (var _i = 0, roleProjections_1 = roleProjections; _i < roleProjections_1.length; _i++) {
                    var roleProjection = roleProjections_1[_i];
                    if (roleKindByQueryRef[roleProjection.queryRef] !== expectedKind) {
                        switch (expectedKind) {
                            case powerbi.VisualDataRoleKind.Measure:
                                return DataViewMappingMatchErrorCode.conditionKindExpectedMeasure;
                            case powerbi.VisualDataRoleKind.Grouping:
                                return DataViewMappingMatchErrorCode.conditionKindExpectedGrouping;
                            case powerbi.VisualDataRoleKind.GroupingOrMeasure:
                                return DataViewMappingMatchErrorCode.conditionKindExpectedGroupingOrMeasure;
                        }
                    }
                }
            }
        }
        /** Determines the appropriate DataViewMappings for the projections. */
        function chooseDataViewMappings(projections, mappings, roleKindByQueryRef, objectDescriptors, objectDefinitions) {
            debug.assertValue(projections, 'projections');
            debug.assertAnyValue(mappings, 'mappings');
            var supportedMappings = [];
            var errors = [];
            if (!_.isEmpty(mappings)) {
                for (var mappingIndex = 0, mappingCount = mappings.length; mappingIndex < mappingCount; mappingIndex++) {
                    var mapping = mappings[mappingIndex], mappingConditions = mapping.conditions, requiredProperties = mapping.requiredProperties;
                    var allPropertiesValid = areAllPropertiesValid(requiredProperties, objectDescriptors, objectDefinitions);
                    var conditionsMet = [];
                    if (!_.isEmpty(mappingConditions)) {
                        for (var conditionIndex = 0, conditionCount = mappingConditions.length; conditionIndex < conditionCount; conditionIndex++) {
                            var condition = mappingConditions[conditionIndex];
                            var currentConditionErrors = checkForConditionErrors(projections, condition, roleKindByQueryRef);
                            if (!_.isEmpty(currentConditionErrors)) {
                                for (var _i = 0, currentConditionErrors_1 = currentConditionErrors; _i < currentConditionErrors_1.length; _i++) {
                                    var error = currentConditionErrors_1[_i];
                                    error.mappingIndex = mappingIndex;
                                    error.conditionIndex = conditionIndex;
                                    errors.push(error);
                                }
                            }
                            else
                                conditionsMet.push(condition);
                        }
                    }
                    else {
                        conditionsMet.push({});
                    }
                    if (!_.isEmpty(conditionsMet) && allPropertiesValid) {
                        var supportedMapping = _.cloneDeep(mapping);
                        var updatedConditions = _.filter(conditionsMet, function (condition) { return Object.keys(condition).length > 0; });
                        if (!_.isEmpty(updatedConditions))
                            supportedMapping.conditions = updatedConditions;
                        supportedMappings.push(supportedMapping);
                    }
                }
            }
            return {
                supportedMappings: ArrayExtensions.emptyToNull(supportedMappings),
                mappingErrors: ArrayExtensions.emptyToNull(errors),
            };
        }
        DataViewAnalysis.chooseDataViewMappings = chooseDataViewMappings;
        function checkForConditionErrors(projections, condition, roleKindByQueryRef) {
            debug.assertValue(projections, 'projections');
            debug.assertValue(condition, 'condition');
            var conditionRoles = Object.keys(condition);
            var errors = [];
            for (var i = 0, len = conditionRoles.length; i < len; i++) {
                var roleName = conditionRoles[i], isDrillable = projections[roleName] && !_.isEmpty(projections[roleName].activeProjectionRefs), roleCondition = condition[roleName];
                var roleCount = getPropertyCount(roleName, projections, isDrillable);
                var rangeError = validateRange(roleCount, roleCondition);
                if (rangeError != null) {
                    errors.push({
                        code: rangeError,
                        roleName: roleName,
                    });
                }
                var kindError = validateKind(roleCondition, roleName, projections, roleKindByQueryRef);
                if (kindError != null) {
                    errors.push({
                        code: kindError,
                        roleName: roleName,
                    });
                }
            }
            return errors;
        }
        function areAllPropertiesValid(requiredProperties, objectDescriptors, objectDefinitions) {
            if (_.isEmpty(requiredProperties))
                return true;
            if (!objectDescriptors || !objectDefinitions)
                return false;
            var staticEvalContext = powerbi.data.createStaticEvalContext();
            return _.every(requiredProperties, function (requiredProperty) {
                var objectDescriptorValue = null;
                var objectDescriptorProperty = objectDescriptors[requiredProperty.objectName];
                if (objectDescriptorProperty)
                    objectDescriptorValue = objectDescriptorProperty.properties[requiredProperty.propertyName];
                var objectDefinitionValue = DataViewObjectDefinitions.getValue(objectDefinitions, requiredProperty, null);
                if (!objectDescriptorValue || !objectDefinitionValue)
                    return false;
                return powerbi.data.DataViewObjectEvaluator.evaluateProperty(staticEvalContext, objectDescriptorValue, objectDefinitionValue);
            });
        }
        function getPropertyCount(roleName, projections, useActiveIfAvailable) {
            debug.assertValue(roleName, 'roleName');
            debug.assertValue(projections, 'projections');
            var projectionsForRole = projections[roleName];
            if (projectionsForRole) {
                if (useActiveIfAvailable)
                    return 1;
                return projectionsForRole.all().length;
            }
            return 0;
        }
        DataViewAnalysis.getPropertyCount = getPropertyCount;
        function hasSameCategoryIdentity(dataView1, dataView2) {
            if (dataView1
                && dataView2
                && dataView1.categorical
                && dataView2.categorical) {
                var dv1Categories = dataView1.categorical.categories;
                var dv2Categories = dataView2.categorical.categories;
                if (dv1Categories
                    && dv2Categories
                    && dv1Categories.length === dv2Categories.length) {
                    for (var i = 0, len = dv1Categories.length; i < len; i++) {
                        var dv1Identity = dv1Categories[i].identity;
                        var dv2Identity = dv2Categories[i].identity;
                        var dv1Length = getLengthOptional(dv1Identity);
                        if (dv1Length !== getLengthOptional(dv2Identity))
                            return false;
                        for (var j = 0; j < dv1Length; j++) {
                            if (!powerbi.DataViewScopeIdentity.equals(dv1Identity[j], dv2Identity[j]))
                                return false;
                        }
                    }
                    return true;
                }
            }
            return false;
        }
        DataViewAnalysis.hasSameCategoryIdentity = hasSameCategoryIdentity;
        function getLengthOptional(identity) {
            if (identity)
                return identity.length;
            return 0;
        }
        function areMetadataColumnsEquivalent(column1, column2) {
            if (!column1 && !column2)
                return true;
            if (!column1 || !column2)
                return false;
            if (column1.displayName !== column2.displayName)
                return false;
            if (column1.queryName !== column2.queryName)
                return false;
            if (column1.isMeasure !== column2.isMeasure)
                return false;
            if (column1.type !== column2.type)
                return false;
            if (column1.sort !== column2.sort)
                return false;
            return true;
        }
        DataViewAnalysis.areMetadataColumnsEquivalent = areMetadataColumnsEquivalent;
        /* Returns true if the metadata columns at the same positions in the array are equivalent. */
        function isMetadataEquivalent(metadata1, metadata2) {
            if (!metadata1 && !metadata2)
                return true;
            if (!metadata1 || !metadata2)
                return false;
            var previousColumnsLength = metadata1.columns.length;
            var newColumnsLength = metadata2.columns.length;
            if (previousColumnsLength !== newColumnsLength)
                return false;
            for (var i = 0; i < newColumnsLength; i++) {
                if (!DataViewAnalysis.areMetadataColumnsEquivalent(metadata1.columns[i], metadata2.columns[i]))
                    return false;
            }
            return true;
        }
        DataViewAnalysis.isMetadataEquivalent = isMetadataEquivalent;
    })(DataViewAnalysis = powerbi.DataViewAnalysis || (powerbi.DataViewAnalysis = {}));
})(powerbi || (powerbi = {}));
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
    var data;
    (function (data) {
        var ArrayExtensions = jsCommon.ArrayExtensions;
        var Lazy = jsCommon.Lazy;
        var DataViewRoleWildcard;
        (function (DataViewRoleWildcard) {
            function fromRoles(roles) {
                return new DataViewRoleWildcardImpl(roles);
            }
            DataViewRoleWildcard.fromRoles = fromRoles;
            function equals(firstRoleWildcard, secondRoleWildcard) {
                return firstRoleWildcard.key &&
                    secondRoleWildcard.key &&
                    firstRoleWildcard.key === secondRoleWildcard.key &&
                    ArrayExtensions.sequenceEqual(firstRoleWildcard.roles, secondRoleWildcard.roles, function (role1, role2) { return role1 === role2; });
            }
            DataViewRoleWildcard.equals = equals;
            var DataViewRoleWildcardImpl = (function () {
                function DataViewRoleWildcardImpl(roles) {
                    var _this = this;
                    debug.assertNonEmpty(roles, 'roles');
                    this._roles = roles;
                    this._key = new Lazy(function () { return JSON.stringify(_this.roles); });
                }
                Object.defineProperty(DataViewRoleWildcardImpl.prototype, "roles", {
                    get: function () {
                        return this._roles;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DataViewRoleWildcardImpl.prototype, "key", {
                    get: function () {
                        return this._key.getValue();
                    },
                    enumerable: true,
                    configurable: true
                });
                return DataViewRoleWildcardImpl;
            }());
        })(DataViewRoleWildcard = data.DataViewRoleWildcard || (data.DataViewRoleWildcard = {}));
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
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
    var DataViewScopeIdentity;
    (function (DataViewScopeIdentity) {
        /** Compares the two DataViewScopeIdentity values for equality. */
        function equals(x, y, ignoreCase) {
            // Normalize falsy to null
            x = x || null;
            y = y || null;
            if (x === y)
                return true;
            if (!x !== !y)
                return false;
            debug.assertValue(x, 'x');
            debug.assertValue(y, 'y');
            return data.SQExpr.equals(x.expr, y.expr, ignoreCase);
        }
        DataViewScopeIdentity.equals = equals;
        function filterFromIdentity(identities, isNot) {
            if (_.isEmpty(identities))
                return;
            var exprs = [];
            for (var _i = 0, identities_1 = identities; _i < identities_1.length; _i++) {
                var identity = identities_1[_i];
                exprs.push(identity.expr);
            }
            return filterFromExprs(exprs, isNot);
        }
        DataViewScopeIdentity.filterFromIdentity = filterFromIdentity;
        function filterFromExprs(orExprs, isNot) {
            if (_.isEmpty(orExprs))
                return;
            var resultExpr;
            for (var _i = 0, orExprs_1 = orExprs; _i < orExprs_1.length; _i++) {
                var orExpr = orExprs_1[_i];
                var inExpr = data.ScopeIdentityExtractor.getInExpr(orExpr);
                if (resultExpr)
                    resultExpr = data.SQExprBuilder.or(resultExpr, inExpr);
                else
                    resultExpr = inExpr || orExpr;
            }
            if (resultExpr) {
                if (isNot)
                    resultExpr = powerbi.data.SQExprBuilder.not(resultExpr);
            }
            return powerbi.data.SemanticFilter.fromSQExpr(resultExpr);
        }
        DataViewScopeIdentity.filterFromExprs = filterFromExprs;
    })(DataViewScopeIdentity = powerbi.DataViewScopeIdentity || (powerbi.DataViewScopeIdentity = {}));
    var data;
    (function (data) {
        var Lazy = jsCommon.Lazy;
        function createDataViewScopeIdentity(expr) {
            return new DataViewScopeIdentityImpl(expr);
        }
        data.createDataViewScopeIdentity = createDataViewScopeIdentity;
        var DataViewScopeIdentityImpl = (function () {
            function DataViewScopeIdentityImpl(expr) {
                debug.assertValue(expr, 'expr');
                this._expr = expr;
                this._key = new Lazy(function () { return data.SQExprShortSerializer.serialize(expr); });
            }
            Object.defineProperty(DataViewScopeIdentityImpl.prototype, "expr", {
                get: function () {
                    return this._expr;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DataViewScopeIdentityImpl.prototype, "key", {
                get: function () {
                    return this._key.getValue();
                },
                enumerable: true,
                configurable: true
            });
            return DataViewScopeIdentityImpl;
        }());
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
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
    var data;
    (function (data) {
        var Lazy = jsCommon.Lazy;
        var DataViewScopeWildcard;
        (function (DataViewScopeWildcard) {
            function matches(wildcard, instance) {
                var instanceExprs = data.ScopeIdentityExtractor.getKeys(instance.expr);
                if (!instanceExprs)
                    return false;
                return data.SQExprUtils.sequenceEqual(wildcard.exprs, instanceExprs);
            }
            DataViewScopeWildcard.matches = matches;
            function equals(firstScopeWildcard, secondScopeWildcard) {
                return firstScopeWildcard.key === secondScopeWildcard.key &&
                    data.SQExprUtils.sequenceEqual(firstScopeWildcard.exprs, secondScopeWildcard.exprs);
            }
            DataViewScopeWildcard.equals = equals;
            function fromExprs(exprs) {
                return new DataViewScopeWildcardImpl(exprs);
            }
            DataViewScopeWildcard.fromExprs = fromExprs;
            var DataViewScopeWildcardImpl = (function () {
                function DataViewScopeWildcardImpl(exprs) {
                    debug.assertValue(exprs, 'exprs');
                    this._exprs = exprs;
                    this._key = new Lazy(function () { return data.SQExprShortSerializer.serializeArray(exprs); });
                }
                Object.defineProperty(DataViewScopeWildcardImpl.prototype, "exprs", {
                    get: function () {
                        return this._exprs;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DataViewScopeWildcardImpl.prototype, "key", {
                    get: function () {
                        return this._key.getValue();
                    },
                    enumerable: true,
                    configurable: true
                });
                return DataViewScopeWildcardImpl;
            }());
        })(DataViewScopeWildcard = data.DataViewScopeWildcard || (data.DataViewScopeWildcard = {}));
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
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
    var data;
    (function (data) {
        function createColorAllocatorCache() {
            return new ColorAllocatorProvider();
        }
        data.createColorAllocatorCache = createColorAllocatorCache;
        var ColorAllocatorProvider = (function () {
            function ColorAllocatorProvider() {
                this.cache = [];
            }
            ColorAllocatorProvider.prototype.get = function (key) {
                debug.assertValue(key, 'key');
                for (var _i = 0, _a = this.cache; _i < _a.length; _i++) {
                    var entry = _a[_i];
                    if (entry.key === key)
                        return entry.allocator;
                }
            };
            ColorAllocatorProvider.prototype.register = function (key, colorAllocator) {
                debug.assertValue(key, 'key');
                debug.assertValue(colorAllocator, 'colorAllocator');
                debug.assert(this.get(key) == null, 'Trying to re-register for same key expr.');
                this.cache.push({
                    key: key,
                    allocator: colorAllocator,
                });
                return this;
            };
            return ColorAllocatorProvider;
        }());
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
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
    var data;
    (function (data) {
        var DataViewRegression;
        (function (DataViewRegression) {
            // TODO VSTS 6842046: Currently we are using a constant queryName since we don't have a way to generate
            // unique ones. There is a bug filed to do this by lawong, so this part will be fixed with that bug.
            var regressionXQueryName = 'RegressionX';
            var regressionSeriesQueryName = 'RegressionSeries';
            DataViewRegression.regressionYQueryName = 'RegressionY';
            function run(options) {
                debug.assertValue(options, 'options');
                var dataViewMappings = options.dataViewMappings;
                var visualDataViews = options.visualDataViews;
                var dataRoles = options.dataRoles;
                var objectDescriptors = options.objectDescriptors;
                var objectDefinitions = options.objectDefinitions;
                var colorAllocatorFactory = options.colorAllocatorFactory;
                var transformSelects = options.transformSelects;
                var projectionActiveItems = options.projectionActiveItems;
                var metadata = options.metadata;
                if (!_.isEmpty(visualDataViews) && transformSelects && metadata) {
                    // compute linear regression line if applicable
                    var roleKindByQueryRef = data.DataViewSelectTransform.createRoleKindFromMetadata(transformSelects, metadata);
                    var projections = data.DataViewSelectTransform.projectionsFromSelects(transformSelects, projectionActiveItems);
                    if (!roleKindByQueryRef || !projections || _.isEmpty(dataViewMappings) || !objectDescriptors || !objectDefinitions)
                        return visualDataViews;
                    var applicableDataViewMappings = powerbi.DataViewAnalysis.chooseDataViewMappings(projections, dataViewMappings, roleKindByQueryRef, objectDescriptors, objectDefinitions).supportedMappings;
                    if (applicableDataViewMappings) {
                        var regressionDataViewMapping = _.find(applicableDataViewMappings, function (dataViewMapping) {
                            return dataViewMapping.usage && dataViewMapping.usage.regression;
                        });
                        if (regressionDataViewMapping) {
                            var regressionDataViews = [];
                            for (var _i = 0, visualDataViews_1 = visualDataViews; _i < visualDataViews_1.length; _i++) {
                                var visualDataView = visualDataViews_1[_i];
                                var regressionDataView = this.linearRegressionTransform(visualDataView, dataRoles, regressionDataViewMapping, objectDescriptors, objectDefinitions, colorAllocatorFactory);
                                if (regressionDataView)
                                    regressionDataViews.push(regressionDataView);
                            }
                            if (!_.isEmpty(regressionDataViews))
                                visualDataViews.push.apply(visualDataViews, regressionDataViews);
                        }
                    }
                }
                return visualDataViews;
            }
            DataViewRegression.run = run;
            /**
             * This function will compute the linear regression algorithm on the sourceDataView and create a new dataView.
             * It works on scalar axis only.
             * The algorithm is as follows
             *
             * 1. Find the cartesian X and Y roles and the columns that correspond to those roles
             * 2. Get the data points, (X, Y) pairs, for each series, combining if needed.
             * 3. Compute the X and Y points for regression line using Y = Slope * X + Intercept
             * If highlights values are present, repeat steps 2 & 3 using highlight values.
             * 4. Create the new dataView using the points computed above
             */
            function linearRegressionTransform(sourceDataView, dataRoles, regressionDataViewMapping, objectDescriptors, objectDefinitions, colorAllocatorFactory) {
                debug.assertValue(sourceDataView, 'sourceDataView');
                debug.assertValue(sourceDataView.categorical, 'sourceDataView.categorical');
                debug.assertValue(dataRoles, 'dataRoles');
                debug.assertValue(objectDescriptors, 'objectDescriptors');
                debug.assertValue(objectDefinitions, 'objectDefinitions');
                debug.assertValue(colorAllocatorFactory, 'colorAllocatorFactory');
                if (!sourceDataView.categorical)
                    return;
                // Step 1
                var xColumns = getColumnsForCartesianRoleKind(0 /* X */, sourceDataView.categorical, dataRoles);
                var yColumns = getColumnsForCartesianRoleKind(1 /* Y */, sourceDataView.categorical, dataRoles);
                if (_.isEmpty(xColumns) || _.isEmpty(yColumns))
                    return;
                var xColumnSource = xColumns[0].source;
                var yColumnSource = yColumns[0].source;
                var combineSeries = true;
                if (regressionDataViewMapping.usage && regressionDataViewMapping.usage.regression && sourceDataView.metadata.objects) {
                    var regressionUsage = regressionDataViewMapping.usage.regression;
                    var combineSeriesPropertyId = regressionUsage['combineSeries'];
                    if (combineSeriesPropertyId) {
                        combineSeries = powerbi.DataViewObjects.getValue(sourceDataView.metadata.objects, combineSeriesPropertyId, true);
                    }
                }
                // Step 2
                var dataPointsBySeries = getDataPointsBySeries(xColumns, yColumns, combineSeries, /* preferHighlights */ false);
                var lineDefSet = calculateLineDefinitions(dataPointsBySeries);
                var xMin = lineDefSet.xMin;
                var xMax = lineDefSet.xMax;
                var shouldComputeHightlights = hasHighlightValues(yColumns) || hasHighlightValues(xColumns);
                var highlightsLineDefSet;
                if (shouldComputeHightlights) {
                    var highlightDataPointsBySeries = getDataPointsBySeries(xColumns, yColumns, combineSeries, /* preferHighlights */ true);
                    highlightsLineDefSet = calculateLineDefinitions(highlightDataPointsBySeries);
                    if (highlightsLineDefSet) {
                        xMin = _.min([xMin, highlightsLineDefSet.xMin]);
                        xMax = _.max([xMax, highlightsLineDefSet.xMax]);
                    }
                    else {
                        shouldComputeHightlights = false;
                    }
                }
                // Step 3
                var valuesByTrend = [];
                for (var _i = 0, _a = lineDefSet.lineDefs; _i < _a.length; _i++) {
                    var trend = _a[_i];
                    valuesByTrend.push(computeLineYValues(trend, +xMin, +xMax));
                }
                var highlightsByTrend;
                if (shouldComputeHightlights) {
                    highlightsByTrend = [];
                    for (var _b = 0, _c = highlightsLineDefSet.lineDefs; _b < _c.length; _b++) {
                        var trend = _c[_b];
                        highlightsByTrend.push(computeLineYValues(trend, +xMin, +xMax));
                    }
                }
                // Step 4
                var groupValues;
                if (combineSeries) {
                    groupValues = ['combinedRegressionSeries'];
                }
                else {
                    // If we are producing a trend line per series we need to maintain the group identities so that we can map between the 
                    // trend line and the original series (to match the color for example).
                    if (sourceDataView.categorical.values.source) {
                        // Source data view has dynamic series.
                        var groups = sourceDataView.categorical.values.grouped();
                        groupValues = _.map(groups, function (group) { return group.name; });
                    }
                    else {
                        // Source data view has static or no series.
                        groupValues = _.map(yColumns, function (column) { return column.source.queryName; });
                    }
                }
                // Step 5
                var regressionDataView = createRegressionDataView(xColumnSource, yColumnSource, groupValues, [xMin, xMax], valuesByTrend, highlightsByTrend, sourceDataView, regressionDataViewMapping, objectDescriptors, objectDefinitions, colorAllocatorFactory);
                return regressionDataView;
            }
            DataViewRegression.linearRegressionTransform = linearRegressionTransform;
            function calculateLineDefinitions(dataPointsBySeries) {
                var xMin;
                var xMax;
                var lineDefs = [];
                for (var _i = 0, dataPointsBySeries_1 = dataPointsBySeries; _i < dataPointsBySeries_1.length; _i++) {
                    var dataPointSet = dataPointsBySeries_1[_i];
                    var unsortedXValues = dataPointSet.xValues;
                    var unsortedYValues = dataPointSet.yValues;
                    if (_.isEmpty(unsortedXValues) || _.isEmpty(unsortedYValues))
                        return;
                    // get the data type for each column; we will have null type when dataPoints have different type or if a value is null
                    var xDataType = getDataType(unsortedXValues);
                    if (!xDataType)
                        return;
                    var yDataType = getDataType(unsortedYValues);
                    if (!yDataType)
                        return;
                    var sortedDataPointSet = sortValues(unsortedXValues, unsortedYValues);
                    var minCategoryValue = sortedDataPointSet.xValues[0];
                    var maxCategoryValue = sortedDataPointSet.xValues[sortedDataPointSet.xValues.length - 1];
                    var lineDef = computeRegressionLine(sortedDataPointSet.xValues, sortedDataPointSet.yValues);
                    xMin = _.min([xMin, minCategoryValue]);
                    xMax = _.max([xMax, maxCategoryValue]);
                    lineDefs.push(lineDef);
                }
                return {
                    lineDefs: lineDefs,
                    xMin: xMin,
                    xMax: xMax,
                };
            }
            function getColumnsForCartesianRoleKind(roleKind, categorical, roles) {
                debug.assertValue(roleKind, 'roleKind');
                debug.assertValue(categorical, 'categorical');
                var columns = getColumnsWithRoleKind(roleKind, categorical.values, roles);
                if (!_.isEmpty(columns))
                    return columns;
                var categories = categorical.categories;
                if (_.isEmpty(categories))
                    return;
                debug.assert(categories.length === 1, 'composite category columns not supported');
                var categoryColumn = categories[0];
                columns = getColumnsWithRoleKind(roleKind, [categoryColumn], roles);
                if (!_.isEmpty(columns))
                    return columns;
            }
            function getColumnsWithRoleKind(roleKind, columns, roles) {
                if (_.isEmpty(columns))
                    return;
                return _.filter(columns, function (column) {
                    var _loop_1 = function(roleName) {
                        if (!column.source.roles[roleName])
                            return "continue";
                        var role = _.find(roles, function (role) { return role.name === roleName; });
                        if (role && role.cartesianKind === roleKind)
                            return { value: true };
                    };
                    for (var roleName in column.source.roles) {
                        var state_1 = _loop_1(roleName);
                        if (typeof state_1 === "object") return state_1.value;
                        if (state_1 === "continue") continue;
                    }
                    return false;
                });
            }
            function getDataType(values) {
                var firstNonNull = _.find(values, function (value) { return value != null; });
                if (firstNonNull == null)
                    return;
                var dataType = typeof firstNonNull;
                if (_.some(values, function (value) { return value != null && typeof value !== dataType; }))
                    return;
                return dataType;
            }
            function sortValues(unsortedXValues, unsortedYValues) {
                debug.assertValue(unsortedXValues, 'unsortedXValues');
                debug.assertValue(unsortedYValues, 'unsortedYValues');
                var zippedValues = _.zip(unsortedXValues, unsortedYValues);
                var _a = _.chain(zippedValues)
                    .filter(function (valuePair) { return valuePair[0] != null && valuePair[1] != null; })
                    .sortBy(function (valuePair) { return valuePair[0]; })
                    .unzip()
                    .value(), xValues = _a[0], yValues = _a[1];
                return {
                    xValues: xValues,
                    yValues: yValues
                };
            }
            /**
             * Computes a line definition using linear regression.
             *   xBar: average of X values, yBar: average of Y values
             *   ssXX: sum of squares of X values = Sum(xi - xBar)^2
             *   ssXY: sum of squares of X and Y values  = Sum((xi - xBar)(yi - yBar)
             *   Slope: ssXY / ssXX
             *   Intercept: yBar - xBar * slope
             */
            function computeRegressionLine(xValues, yValues) {
                debug.assertValue(xValues, 'xValues');
                debug.assertValue(yValues, 'yValues');
                var xBar = _.sum(xValues) / xValues.length;
                var yBar = _.sum(yValues) / yValues.length;
                var ssXX = _.chain(xValues)
                    .map(function (x) {
                    return Math.pow((x - xBar), 2);
                })
                    .sum();
                var ssXY = _.chain(xValues)
                    .map(function (x, i) {
                    return (x - xBar) * (yValues[i] - yBar);
                })
                    .sum();
                var slope = ssXY / ssXX;
                var intercept = yBar - (xBar * slope);
                return {
                    slope: slope,
                    intercept: intercept
                };
            }
            function computeLineYValues(lineDef, x1, x2) {
                return [x1 * lineDef.slope + lineDef.intercept, x2 * lineDef.slope + lineDef.intercept];
            }
            function getValuesFromColumn(column, preferHighlights) {
                if (preferHighlights) {
                    // Attempt to use highlight values. When X is categorical, we may not have highlight values so we should fall back to the non-highlight values.
                    var valueColumn = column;
                    if (valueColumn.highlights) {
                        return valueColumn.highlights;
                    }
                }
                return column.values;
            }
            function getDataPointsBySeries(xColumns, yColumns, combineSeries, preferHighlights) {
                var dataPointsBySeries = [];
                var xValueArray = _.map(xColumns, function (column) { return getValuesFromColumn(column, preferHighlights); });
                var seriesYValues = _.map(yColumns, function (column) { return getValuesFromColumn(column, preferHighlights); });
                var multipleXValueColumns = xColumns.length > 1;
                for (var i = 0; i < seriesYValues.length; i++) {
                    var xValues = multipleXValueColumns ? xValueArray[i] : xValueArray[0];
                    var yValues = seriesYValues[i];
                    if (combineSeries && dataPointsBySeries.length > 0) {
                        dataPointsBySeries[0].xValues = dataPointsBySeries[0].xValues.concat(xValues);
                        dataPointsBySeries[0].yValues = dataPointsBySeries[0].yValues.concat(yValues);
                    }
                    else {
                        dataPointsBySeries.push({
                            xValues: xValues,
                            yValues: yValues,
                        });
                    }
                }
                return dataPointsBySeries;
            }
            function createRegressionDataView(xColumnSource, yColumnSource, groupValues, categories, values, highlights, sourceDataView, regressionDataViewMapping, objectDescriptors, objectDefinitions, colorAllocatorFactory) {
                debug.assertValue(xColumnSource, 'xColumnSource');
                debug.assertValue(yColumnSource, 'yColumnSource');
                debug.assertValue(categories, 'categories');
                debug.assertValue(values, 'values');
                debug.assertValue(sourceDataView, 'sourceDataView');
                debug.assertValue(objectDescriptors, 'objectDescriptors');
                debug.assertValue(objectDefinitions, 'objectDefinitions');
                debug.assertValue(colorAllocatorFactory, 'colorAllocatorFactory');
                debug.assertAnyValue(highlights, 'highlights');
                debug.assert(!highlights || highlights.length === values.length, 'highlights should have the same length as values');
                var xRole = regressionDataViewMapping.categorical.categories.for.in;
                var grouped = regressionDataViewMapping.categorical.values.group;
                var yRole;
                var seriesRole;
                if (grouped && !_.isEmpty(grouped.select)) {
                    yRole = grouped.select[0].for ?
                        grouped.select[0].for.in :
                        grouped.select[0].bind.to;
                    seriesRole = grouped.by;
                }
                if (!yRole || !seriesRole)
                    return;
                var categoricalRoles = (_a = {}, _a[xRole] = true, _a);
                var valueRoles = (_b = {}, _b[yRole] = true, _b);
                var seriesRoles = (_c = {}, _c[seriesRole] = true, _c);
                var valuesBySeries = [];
                for (var index in values) {
                    var seriesData = {
                        values: values[index],
                    };
                    if (highlights)
                        seriesData.highlights = highlights[index];
                    valuesBySeries.push([seriesData]);
                }
                var regressionDataView = data.createCategoricalDataViewBuilder()
                    .withCategory({
                    source: {
                        displayName: xColumnSource.displayName,
                        queryName: regressionXQueryName,
                        type: xColumnSource.type,
                        isMeasure: false,
                        roles: categoricalRoles
                    },
                    values: categories,
                    identityFrom: {
                        fields: [data.SQExprBuilder.columnRef(data.SQExprBuilder.entity('s', 'RegressionEntity'), 'RegressionCategories')],
                    },
                })
                    .withGroupedValues({
                    groupColumn: {
                        source: {
                            displayName: yColumnSource.displayName + 'Regression',
                            queryName: regressionSeriesQueryName,
                            type: yColumnSource.type,
                            isMeasure: yColumnSource.isMeasure,
                            roles: seriesRoles
                        },
                        values: groupValues,
                        identityFrom: {
                            fields: [data.SQExprBuilder.columnRef(data.SQExprBuilder.entity('s', 'RegressionEntity'), 'RegressionSeries')],
                        }
                    },
                    valueColumns: [{
                            source: {
                                displayName: yColumnSource.displayName,
                                queryName: DataViewRegression.regressionYQueryName,
                                type: yColumnSource.type,
                                isMeasure: yColumnSource.isMeasure,
                                roles: valueRoles
                            },
                        }],
                    data: valuesBySeries
                })
                    .build();
                data.DataViewTransform.transformObjects(regressionDataView, 1 /* Categorical */, objectDescriptors, objectDefinitions, [], colorAllocatorFactory);
                return regressionDataView;
                var _a, _b, _c;
            }
            function hasHighlightValues(columns) {
                return _.any(columns, function (column) {
                    var valueColumn = column;
                    return valueColumn.highlights != null;
                });
            }
        })(DataViewRegression = data.DataViewRegression || (data.DataViewRegression = {}));
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
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
    var data;
    (function (data) {
        var DataViewSelectTransform;
        (function (DataViewSelectTransform) {
            /** Convert selection info to projections */
            function projectionsFromSelects(selects, projectionActiveItems) {
                debug.assertAnyValue(selects, "selects");
                debug.assertAnyValue(projectionActiveItems, "projectionActiveItems");
                var projections = {};
                for (var _i = 0, selects_1 = selects; _i < selects_1.length; _i++) {
                    var select = selects_1[_i];
                    var roles = select.roles;
                    if (!roles)
                        continue;
                    for (var roleName in roles) {
                        if (roles[roleName]) {
                            var qp = projections[roleName];
                            if (!qp)
                                qp = projections[roleName] = new data.QueryProjectionCollection([]);
                            qp.all().push({ queryRef: select.queryName });
                            if (projectionActiveItems && projectionActiveItems[roleName])
                                qp.activeProjectionRefs = _.map(projectionActiveItems[roleName], function (activeItem) { return activeItem.queryRef; });
                        }
                    }
                }
                return projections;
            }
            DataViewSelectTransform.projectionsFromSelects = projectionsFromSelects;
            /** Use selections and metadata to fashion query role kinds */
            function createRoleKindFromMetadata(selects, metadata) {
                var roleKindByQueryRef = {};
                for (var _i = 0, _a = metadata.columns; _i < _a.length; _i++) {
                    var column = _a[_i];
                    if ((!column.index && column.index !== 0) || column.index < 0 || column.index >= selects.length)
                        continue;
                    var select = selects[column.index];
                    if (select) {
                        var queryRef = select.queryName;
                        if (queryRef && roleKindByQueryRef[queryRef] === undefined) {
                            roleKindByQueryRef[queryRef] = column.isMeasure ? powerbi.VisualDataRoleKind.Measure : powerbi.VisualDataRoleKind.Grouping;
                        }
                    }
                }
                return roleKindByQueryRef;
            }
            DataViewSelectTransform.createRoleKindFromMetadata = createRoleKindFromMetadata;
        })(DataViewSelectTransform = data.DataViewSelectTransform || (data.DataViewSelectTransform = {}));
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
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
    var data;
    (function (data) {
        function createCategoricalEvalContext(colorAllocatorProvider, dataViewCategorical) {
            return new CategoricalEvalContext(colorAllocatorProvider, dataViewCategorical);
        }
        data.createCategoricalEvalContext = createCategoricalEvalContext;
        var CategoricalEvalContext = (function () {
            function CategoricalEvalContext(colorAllocatorProvider, dataView) {
                debug.assertValue(colorAllocatorProvider, 'colorAllocatorProvider');
                debug.assertValue(dataView, 'dataView');
                this.colorAllocatorProvider = colorAllocatorProvider;
                this.dataView = dataView;
                this.columnsByRole = {};
            }
            CategoricalEvalContext.prototype.getColorAllocator = function (expr) {
                return this.colorAllocatorProvider.get(expr);
            };
            CategoricalEvalContext.prototype.getExprValue = function (expr) {
                return;
            };
            CategoricalEvalContext.prototype.getRoleValue = function (roleName) {
                var columnsByRole = this.columnsByRole;
                var column = columnsByRole[roleName];
                if (!column)
                    column = columnsByRole[roleName] = findRuleInputColumn(this.dataView, roleName);
                if (!column)
                    return;
                var index = this.index;
                if (index != null)
                    return column.values[this.index];
            };
            CategoricalEvalContext.prototype.setCurrentRowIndex = function (index) {
                debug.assertValue(index, 'index');
                this.index = index;
            };
            return CategoricalEvalContext;
        }());
        function findRuleInputColumn(dataViewCategorical, inputRole) {
            debug.assertValue(dataViewCategorical, 'dataViewCategorical');
            return findRuleInputInColumns(dataViewCategorical.values, inputRole) ||
                findRuleInputInColumns(dataViewCategorical.categories, inputRole);
        }
        function findRuleInputInColumns(columns, inputRole) {
            debug.assertAnyValue(columns, 'columns');
            if (!columns)
                return;
            for (var _i = 0, columns_7 = columns; _i < columns_7.length; _i++) {
                var column = columns_7[_i];
                var roles = column.source.roles;
                if (!roles || !roles[inputRole])
                    continue;
                return column;
            }
        }
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
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
    var data;
    (function (data) {
        function createTableEvalContext(colorAllocatorProvider, dataViewTable, selectTransforms) {
            return new TableEvalContext(colorAllocatorProvider, dataViewTable, selectTransforms);
        }
        data.createTableEvalContext = createTableEvalContext;
        var TableEvalContext = (function () {
            function TableEvalContext(colorAllocatorProvider, dataView, selectTransforms) {
                debug.assertValue(colorAllocatorProvider, 'colorAllocatorProvider');
                debug.assertValue(dataView, 'dataView');
                debug.assertValue(selectTransforms, 'selectTransforms');
                this.colorAllocatorProvider = colorAllocatorProvider;
                this.dataView = dataView;
                this.selectTransforms = selectTransforms;
            }
            TableEvalContext.prototype.getColorAllocator = function (expr) {
                return this.colorAllocatorProvider.get(expr);
            };
            TableEvalContext.prototype.getExprValue = function (expr) {
                debug.assertValue(expr, 'expr');
                var rowIdx = this.rowIdx;
                if (rowIdx == null)
                    return;
                return data.getExprValueFromTable(expr, this.selectTransforms, this.dataView, rowIdx);
            };
            TableEvalContext.prototype.getRoleValue = function (roleName) {
                return;
            };
            TableEvalContext.prototype.setCurrentRowIndex = function (index) {
                debug.assertValue(index, 'index');
                this.rowIdx = index;
            };
            return TableEvalContext;
        }());
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
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
    var data;
    (function (data) {
        var RuleEvaluation = (function () {
            function RuleEvaluation() {
            }
            // NOTE: even though this class has no behaviour, we still use a class to facilitate instanceof checks.
            RuleEvaluation.prototype.evaluate = function (evalContext) {
                debug.assertFail('Abstract method RuleEvaluation.evaluate not implemented.');
            };
            return RuleEvaluation;
        }());
        data.RuleEvaluation = RuleEvaluation;
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
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
    var data;
    (function (data) {
        var ColorRuleEvaluation = (function (_super) {
            __extends(ColorRuleEvaluation, _super);
            function ColorRuleEvaluation(inputRole, allocator) {
                debug.assertValue(inputRole, 'inputRole');
                debug.assertValue(allocator, 'allocator');
                _super.call(this);
                this.inputRole = inputRole;
                this.allocator = allocator;
            }
            ColorRuleEvaluation.prototype.evaluate = function (evalContext) {
                debug.assertValue(evalContext, 'evalContext');
                var value = evalContext.getRoleValue(this.inputRole);
                if (value !== undefined)
                    return this.allocator.color(value);
            };
            return ColorRuleEvaluation;
        }(data.RuleEvaluation));
        data.ColorRuleEvaluation = ColorRuleEvaluation;
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
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
    var data;
    (function (data) {
        var utils;
        (function (utils) {
            var inherit = powerbi.Prototype.inherit;
            var inheritSingle = powerbi.Prototype.inheritSingle;
            var ArrayExtensions = jsCommon.ArrayExtensions;
            var DataViewMatrixUtils;
            (function (DataViewMatrixUtils) {
                /**
                 * Invokes the specified callback once per leaf nodes (including root-level leaves and descendent leaves) of the
                 * specified rootNodes, with an optional index parameter in the callback that is the 0-based index of the
                 * particular leaf node in the context of this forEachLeafNode(...) invocation.
                 *
                 * If rootNodes is null or undefined or empty, the specified callback will not get invoked.
                 *
                 * The treePath parameter in the callback is an ordered set of nodes that form the path from the specified
                 * rootNodes down to the leafNode argument itself.  If callback leafNode is one of the specified rootNodes,
                 * then treePath will be an array of length 1 containing that very node.
                 *
                 * IMPORTANT: The treePath array passed to the callback will be modified after the callback function returns!
                 * If your callback needs to retain a copy of the treePath, please clone the array before returning.
                 */
                function forEachLeafNode(rootNodes, callback) {
                    debug.assertAnyValue(rootNodes, 'rootNodes');
                    debug.assertValue(callback, 'callback');
                    // Note: Don't do "if (!_.isEmpty(rootNodes))" for checking whether rootNodes is an empty array DataViewMatrixNode[],
                    // because rootNodes can also be an non-array DataViewMatrixNode, and an empty object can be a valid root node DataViewMatrixNode, 
                    // for the fact that all the properties on DataViewMatrixNode are optional...
                    if (rootNodes) {
                        if (isNodeArray(rootNodes)) {
                            var index = 0;
                            for (var _i = 0, rootNodes_1 = rootNodes; _i < rootNodes_1.length; _i++) {
                                var rootNode = rootNodes_1[_i];
                                if (rootNode) {
                                    index = forEachLeafNodeRecursive(rootNode, index, [], callback);
                                }
                            }
                        }
                        else {
                            forEachLeafNodeRecursive(rootNodes, 0, [], callback);
                        }
                    }
                }
                DataViewMatrixUtils.forEachLeafNode = forEachLeafNode;
                function isNodeArray(nodeOrNodeArray) {
                    return ArrayExtensions.isArrayOrInheritedArray(nodeOrNodeArray);
                }
                /**
                 * Recursively traverses to each leaf node of the specified matrixNode and invokes callback with each of them.
                 * Returns the index for the next node after the last node that this function invokes callback with.
                 *
                 * @treePath an array that contains the path from the specified rootNodes in forEachLeafNode() down to the parent of the argument matrixNode (i.e. treePath does not contain the matrixNode argument yet).
                 */
                function forEachLeafNodeRecursive(matrixNode, nextIndex, treePath, callback) {
                    debug.assertValue(matrixNode, 'matrixNode');
                    debug.assertValue(treePath, 'treePath');
                    debug.assertValue(callback, 'callback');
                    // If treePath already contains matrixNode, then either one of the following errors has happened:
                    // 1. the caller code mistakenly added matrixNode to treePath, or
                    // 2. the callback modified treePath by adding a node to it, or
                    // 3. the matrix hierarchy contains a cyclical node reference.');
                    debug.assert(!_.contains(treePath, matrixNode), 'pre-condition: treePath must not already contain matrixNode');
                    treePath.push(matrixNode);
                    if (_.isEmpty(matrixNode.children)) {
                        callback(matrixNode, nextIndex, treePath);
                        nextIndex++;
                    }
                    else {
                        var children = matrixNode.children;
                        for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                            var nextChild = children_1[_i];
                            if (nextChild) {
                                nextIndex = forEachLeafNodeRecursive(nextChild, nextIndex, treePath, callback);
                            }
                        }
                    }
                    debug.assert(_.last(treePath) === matrixNode, 'pre-condition: the callback given to forEachLeafNode() is not supposed to modify the treePath argument array.');
                    treePath.pop();
                    return nextIndex;
                }
                /**
                 * Returned an object tree where each node and its children property are inherited from the specified node
                 * hierarchy, from the root down to the nodes at the specified deepestLevelToInherit, inclusively.
                 *
                 * The inherited nodes at level === deepestLevelToInherit will NOT get an inherited version of children array
                 * property, i.e. its children property is the same array object referenced in the input node's object tree.
                 *
                 * @param node The input node with the hierarchy object tree.
                 * @param deepestLevelToInherit The highest level for a node to get inherited. See DataViewMatrixNode.level property.
                 * @param useInheritSingle If true, then a node will get inherited in the returned object tree only if it is
                 * not already an inherited object. Same goes for the node's children property.  This is useful for creating
                 * "visual DataView" objects from "query DataView" objects, as object inheritance is the mechanism for
                 * "visual DataView" to override properties in "query DataView", and that "query DataView" never contains
                 * inherited objects.
                 */
                function inheritMatrixNodeHierarchy(node, deepestLevelToInherit, useInheritSingle) {
                    debug.assertValue(node, 'node');
                    debug.assert(deepestLevelToInherit >= 0, 'deepestLevelToInherit >= 0');
                    debug.assertValue(useInheritSingle, 'useInheritSingle');
                    var returnNode = node;
                    // Note: The level property of DataViewMatrix.rows.root and DataViewMatrix.columns.root are always undefined.
                    // Also, in a matrix with multiple column grouping fields and multiple value fields, the DataViewMatrixNode
                    // for the Grand Total column in the column hierarchy will have children nodes where level > (parent.level + 1):
                    //  {
                    //    "level": 0,
                    //    "isSubtotal": true,
                    //    "children": [
                    //      { "level": 2, "isSubtotal": true },
                    //      { "level": 2, "levelSourceIndex": 1, "isSubtotal": true }
                    //    ]
                    //  }
                    var isRootNode = _.isUndefined(node.level);
                    var shouldInheritCurrentNode = isRootNode || (node.level <= deepestLevelToInherit);
                    if (shouldInheritCurrentNode) {
                        var inheritFunc = useInheritSingle ? inheritSingle : inherit;
                        var inheritedNode = inheritFunc(node);
                        var shouldInheritChildNodes = isRootNode || (node.level < deepestLevelToInherit);
                        if (shouldInheritChildNodes && !_.isEmpty(node.children)) {
                            inheritedNode.children = inheritFunc(node.children); // first, make an inherited array
                            for (var i = 0, ilen = inheritedNode.children.length; i < ilen; i++) {
                                inheritedNode.children[i] =
                                    inheritMatrixNodeHierarchy(inheritedNode.children[i], deepestLevelToInherit, useInheritSingle);
                            }
                        }
                        returnNode = inheritedNode;
                    }
                    return returnNode;
                }
                DataViewMatrixUtils.inheritMatrixNodeHierarchy = inheritMatrixNodeHierarchy;
                /**
                 * Returns true if the specified matrixOrHierarchy contains any composite grouping, i.e. a grouping on multiple columns.
                 * An example of composite grouping is one on [Year, Quarter, Month], where a particular group instance can have
                 * Year === 2016, Quarter === 'Qtr 1', Month === 1.
                 *
                 * Returns false if the specified matrixOrHierarchy does not contain any composite group,
                 * or if matrixOrHierarchy is null or undefined.
                 */
                function containsCompositeGroup(matrixOrHierarchy) {
                    debug.assertAnyValue(matrixOrHierarchy, 'matrixOrHierarchy');
                    var hasCompositeGroup = false;
                    if (matrixOrHierarchy) {
                        if (isMatrix(matrixOrHierarchy)) {
                            hasCompositeGroup = containsCompositeGroup(matrixOrHierarchy.rows) ||
                                containsCompositeGroup(matrixOrHierarchy.columns);
                        }
                        else {
                            var hierarchyLevels = matrixOrHierarchy.levels;
                            if (!_.isEmpty(hierarchyLevels)) {
                                for (var _i = 0, hierarchyLevels_1 = hierarchyLevels; _i < hierarchyLevels_1.length; _i++) {
                                    var level = hierarchyLevels_1[_i];
                                    // it takes at least 2 columns at the same hierarchy level to form a composite group...
                                    if (level.sources && (level.sources.length >= 2)) {
                                        debug.assert(_.all(level.sources, function (sourceColumn) { return sourceColumn.isMeasure === level.sources[0].isMeasure; }), 'pre-condition: in a valid DataViewMatrix, the source columns in each of its hierarchy levels must either be all non-measure columns (i.e. a grouping level) or all measure columns (i.e. a measure headers level)');
                                        // Measure headers are not group
                                        var isMeasureHeadersLevel = level.sources[0].isMeasure;
                                        if (!isMeasureHeadersLevel) {
                                            hasCompositeGroup = true;
                                            break;
                                        }
                                    }
                                }
                            }
                        }
                    }
                    return hasCompositeGroup;
                }
                DataViewMatrixUtils.containsCompositeGroup = containsCompositeGroup;
                function isMatrix(matrixOrHierarchy) {
                    return 'rows' in matrixOrHierarchy &&
                        'columns' in matrixOrHierarchy &&
                        'valueSources' in matrixOrHierarchy;
                }
            })(DataViewMatrixUtils = utils.DataViewMatrixUtils || (utils.DataViewMatrixUtils = {}));
        })(utils = data.utils || (data.utils = {}));
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
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
    var data;
    (function (data) {
        var utils;
        (function (utils) {
            var DataViewMetadataColumnUtils;
            (function (DataViewMetadataColumnUtils) {
                /**
                 * Returns true iff the specified metadataColumn is assigned to the specified targetRole.
                 */
                function isForRole(metadataColumn, targetRole) {
                    debug.assertValue(metadataColumn, 'metadataColumn');
                    debug.assertValue(targetRole, 'targetRole');
                    var roles = metadataColumn.roles;
                    return roles && roles[targetRole];
                }
                DataViewMetadataColumnUtils.isForRole = isForRole;
                /**
                 * Joins each column in the specified columnSources with projection ordering index into a wrapper object.
                 *
                 * Note: In order for this function to reliably calculate the "source index" of a particular column, the
                 * specified columnSources must be a non-filtered array of column sources from the DataView, such as
                 * the DataViewHierarchyLevel.sources and DataViewMatrix.valueSources array properties.
                 *
                 * @param columnSources E.g. DataViewHierarchyLevel.sources, DataViewMatrix.valueSources...
                 * @param projection The projection ordering.  It must contain an ordering for the specified role.
                 * @param role The role for getting the relevant projection ordering, as well as for filtering out the irrevalent columns in columnSources.
                 */
                function joinMetadataColumnsAndProjectionOrder(columnSources, projection, role) {
                    debug.assertAnyValue(columnSources, 'columnSources');
                    debug.assert(_.all(columnSources, function (column) { return _.isNumber(column.index); }), 'pre-condition: Every value in columnSources must already have its Select Index property initialized.');
                    debug.assertNonEmpty(projection[role], 'projection[role]');
                    debug.assert(_.all(columnSources, function (column) { return !isForRole(column, role) || _.contains(projection[role], column.index); }), 'pre-condition: The projection order for the specified role must contain the Select Index of every column with matching role in the specified columnSources.');
                    var jointResult = [];
                    if (!_.isEmpty(columnSources)) {
                        var projectionOrderSelectIndices = projection[role];
                        var selectIndexToProjectionIndexMap = {};
                        for (var i = 0, ilen = projectionOrderSelectIndices.length; i < ilen; i++) {
                            var selectIndex = projectionOrderSelectIndices[i];
                            selectIndexToProjectionIndexMap[selectIndex] = i;
                        }
                        for (var j = 0, jlen = columnSources.length; j < jlen; j++) {
                            var column = columnSources[j];
                            if (isForRole(column, role)) {
                                var jointColumnInfo = {
                                    metadataColumn: column,
                                    sourceIndex: j,
                                    projectionOrderIndex: selectIndexToProjectionIndexMap[column.index]
                                };
                                jointResult.push(jointColumnInfo);
                            }
                        }
                    }
                    return jointResult;
                }
                DataViewMetadataColumnUtils.joinMetadataColumnsAndProjectionOrder = joinMetadataColumnsAndProjectionOrder;
            })(DataViewMetadataColumnUtils = utils.DataViewMetadataColumnUtils || (utils.DataViewMetadataColumnUtils = {}));
        })(utils = data.utils || (data.utils = {}));
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
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
    var data;
    (function (data) {
        var ConceptualSchema = (function () {
            function ConceptualSchema() {
            }
            ConceptualSchema.prototype.findProperty = function (entityName, propertyName) {
                var entity = this.entities.withName(entityName);
                if (!entity || _.isEmpty(entity.properties))
                    return;
                return entity.properties.withName(propertyName);
            };
            ConceptualSchema.prototype.findHierarchy = function (entityName, name) {
                var entity = this.entities.withName(entityName);
                if (!entity || _.isEmpty(entity.hierarchies))
                    return;
                return entity.hierarchies.withName(name);
            };
            ConceptualSchema.prototype.findHierarchyByVariation = function (variationEntityName, variationColumnName, variationName, hierarchyName) {
                var variationEntity = this.entities.withName(variationEntityName);
                if (!variationEntity || _.isEmpty(variationEntity.properties))
                    return;
                var variationProperty = variationEntity.properties.withName(variationColumnName);
                if (!variationProperty)
                    return;
                var variationColumn = variationProperty.column;
                if (!variationColumn || _.isEmpty(variationColumn.variations))
                    return;
                var variation = variationColumn.variations.withName(variationName);
                if (variation) {
                    var targetEntity = variation.navigationProperty ? variation.navigationProperty.targetEntity : variationEntity;
                    if (!targetEntity || _.isEmpty(targetEntity.hierarchies))
                        return;
                    return targetEntity.hierarchies.withName(hierarchyName);
                }
            };
            /**
            * Returns the first property of the entity whose kpi is tied to kpiProperty
            */
            ConceptualSchema.prototype.findPropertyWithKpi = function (entityName, kpiProperty) {
                debug.assertValue(kpiProperty, 'kpiProperty');
                var entity = this.entities.withName(entityName);
                if (!entity || _.isEmpty(entity.properties))
                    return;
                for (var _i = 0, _a = entity.properties; _i < _a.length; _i++) {
                    var prop = _a[_i];
                    if (prop &&
                        prop.measure &&
                        prop.measure.kpi &&
                        (prop.measure.kpi.status === kpiProperty || prop.measure.kpi.goal === kpiProperty))
                        return prop;
                }
                return;
            };
            return ConceptualSchema;
        }());
        data.ConceptualSchema = ConceptualSchema;
        // TODO: Remove this (replaced by ValueType)
        (function (ConceptualDataCategory) {
            ConceptualDataCategory[ConceptualDataCategory["None"] = 0] = "None";
            ConceptualDataCategory[ConceptualDataCategory["Address"] = 1] = "Address";
            ConceptualDataCategory[ConceptualDataCategory["City"] = 2] = "City";
            ConceptualDataCategory[ConceptualDataCategory["Company"] = 3] = "Company";
            ConceptualDataCategory[ConceptualDataCategory["Continent"] = 4] = "Continent";
            ConceptualDataCategory[ConceptualDataCategory["Country"] = 5] = "Country";
            ConceptualDataCategory[ConceptualDataCategory["County"] = 6] = "County";
            ConceptualDataCategory[ConceptualDataCategory["Date"] = 7] = "Date";
            ConceptualDataCategory[ConceptualDataCategory["Image"] = 8] = "Image";
            ConceptualDataCategory[ConceptualDataCategory["ImageUrl"] = 9] = "ImageUrl";
            ConceptualDataCategory[ConceptualDataCategory["Latitude"] = 10] = "Latitude";
            ConceptualDataCategory[ConceptualDataCategory["Longitude"] = 11] = "Longitude";
            ConceptualDataCategory[ConceptualDataCategory["Organization"] = 12] = "Organization";
            ConceptualDataCategory[ConceptualDataCategory["Place"] = 13] = "Place";
            ConceptualDataCategory[ConceptualDataCategory["PostalCode"] = 14] = "PostalCode";
            ConceptualDataCategory[ConceptualDataCategory["Product"] = 15] = "Product";
            ConceptualDataCategory[ConceptualDataCategory["StateOrProvince"] = 16] = "StateOrProvince";
            ConceptualDataCategory[ConceptualDataCategory["WebUrl"] = 17] = "WebUrl";
        })(data.ConceptualDataCategory || (data.ConceptualDataCategory = {}));
        var ConceptualDataCategory = data.ConceptualDataCategory;
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
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
    var StringExtensions = jsCommon.StringExtensions;
    var FieldExprPattern = powerbi.data.FieldExprPattern;
    var ScriptResultUtil;
    (function (ScriptResultUtil) {
        function findScriptResult(dataViewMappings) {
            if (dataViewMappings && dataViewMappings.length === 1) {
                return dataViewMappings[0].scriptResult;
            }
            return undefined;
        }
        ScriptResultUtil.findScriptResult = findScriptResult;
        function extractScriptResult(dataViewMappings) {
            var scriptResult = findScriptResult(dataViewMappings);
            if (scriptResult) {
                var objects = dataViewMappings[0].metadata.objects;
                var source = powerbi.DataViewObjects.getValue(objects, scriptResult.script.source);
                var provider = powerbi.DataViewObjects.getValue(objects, scriptResult.script.provider);
                return {
                    source: source,
                    provider: provider
                };
            }
            return undefined;
        }
        ScriptResultUtil.extractScriptResult = extractScriptResult;
        function extractScriptResultFromVisualConfig(dataViewMappings, objects) {
            var scriptResult = findScriptResult(dataViewMappings);
            if (scriptResult && objects) {
                var scriptSource = powerbi.data.DataViewObjectDefinitions.getValue(objects, scriptResult.script.source, null);
                var provider = powerbi.data.DataViewObjectDefinitions.getValue(objects, scriptResult.script.provider, null);
                return {
                    source: scriptSource ? scriptSource.value : null,
                    provider: provider ? provider.value : null
                };
            }
            return undefined;
        }
        ScriptResultUtil.extractScriptResultFromVisualConfig = extractScriptResultFromVisualConfig;
        function getScriptInput(projections, selects, schema) {
            var scriptInput = {
                VariableName: "dataset",
                Columns: []
            };
            // Go over all the projections, and create an input column according to the order
            // of the projections (including duplicate expressions)
            if (projections && selects && !_.isEmpty(selects)) {
                var scriptInputColumnNames = [];
                var scriptInputColumns = [];
                for (var role in projections) {
                    for (var _i = 0, _a = projections[role].all(); _i < _a.length; _i++) {
                        var projection = _a[_i];
                        var select = selects.withName(projection.queryRef);
                        if (select) {
                            var scriptInputColumn = {
                                QueryName: select.name,
                                Name: FieldExprPattern.visit(select.expr, new ScriptInputColumnNameVisitor(schema))
                            };
                            scriptInputColumns.push(scriptInputColumn);
                            scriptInputColumnNames.push(scriptInputColumn.Name);
                        }
                    }
                }
                // Make sure the names of the columns are unique
                scriptInputColumnNames = StringExtensions.ensureUniqueNames(scriptInputColumnNames);
                // Update the names of the columns
                for (var i = 0; i < scriptInputColumnNames.length; i++) {
                    var scriptInputColumn = scriptInputColumns[i];
                    scriptInputColumn.Name = scriptInputColumnNames[i];
                }
                scriptInput.Columns = scriptInputColumns;
            }
            return scriptInput;
        }
        ScriptResultUtil.getScriptInput = getScriptInput;
        var ScriptInputColumnNameVisitor = (function () {
            function ScriptInputColumnNameVisitor(federatedSchema) {
                this.federatedSchema = federatedSchema;
            }
            ScriptInputColumnNameVisitor.prototype.visitColumn = function (column) {
                return ScriptInputColumnNameVisitor.getNameForProperty(column, this.federatedSchema);
            };
            ScriptInputColumnNameVisitor.prototype.visitColumnAggr = function (columnAggr) {
                return ScriptInputColumnNameVisitor.getNameForProperty(columnAggr, this.federatedSchema);
            };
            ScriptInputColumnNameVisitor.prototype.visitColumnHierarchyLevelVariation = function (columnHierarchyLevelVariation) {
                return ScriptInputColumnNameVisitor.getVariationLevelName(columnHierarchyLevelVariation, this.federatedSchema);
            };
            ScriptInputColumnNameVisitor.prototype.visitEntity = function (entity) {
                return entity.entity;
            };
            ScriptInputColumnNameVisitor.prototype.visitEntityAggr = function (entityAggr) {
                return entityAggr.entity;
            };
            ScriptInputColumnNameVisitor.prototype.visitHierarchy = function (hierarchy) {
                return ScriptInputColumnNameVisitor.getNameForHierarchy(hierarchy, this.federatedSchema);
            };
            ScriptInputColumnNameVisitor.prototype.visitHierarchyLevel = function (hierarchyLevel) {
                /*Hierarchy levels are not supported yet*/
                return;
            };
            ScriptInputColumnNameVisitor.prototype.visitHierarchyLevelAggr = function (hierarchyLevelAggr) {
                return ScriptInputColumnNameVisitor.getNameForProperty(hierarchyLevelAggr, this.federatedSchema);
            };
            ScriptInputColumnNameVisitor.prototype.visitMeasure = function (measure) {
                return ScriptInputColumnNameVisitor.getNameForProperty(measure, this.federatedSchema);
            };
            ScriptInputColumnNameVisitor.getNameForHierarchy = function (pattern, federatedScheam) {
                debug.assertValue(pattern, 'pattern');
                var schema = federatedScheam.schema(pattern.schema), hierarchy = schema.findHierarchy(pattern.entity, pattern.name);
                if (hierarchy)
                    return hierarchy.name;
            };
            ScriptInputColumnNameVisitor.getNameForProperty = function (pattern, federatedSchema) {
                debug.assertValue(pattern, 'pattern');
                var schema = federatedSchema.schema(pattern.schema), property = schema.findProperty(pattern.entity, pattern.name);
                if (property)
                    return property.name;
            };
            ScriptInputColumnNameVisitor.getVariationLevelName = function (pattern, federatedSchema) {
                debug.assertValue(pattern, 'pattern');
                var source = pattern.source;
                var prop = federatedSchema.schema(source.schema).findProperty(source.entity, source.name);
                if (!prop)
                    return;
                var variations = prop.column.variations;
                for (var _i = 0, variations_1 = variations; _i < variations_1.length; _i++) {
                    var variation = variations_1[_i];
                    if (variation.name === pattern.variationName)
                        for (var _a = 0, _b = variation.defaultHierarchy.levels; _a < _b.length; _a++) {
                            var level = _b[_a];
                            if (level.name === pattern.level.level)
                                return level.column.name;
                        }
                }
            };
            return ScriptInputColumnNameVisitor;
        }());
    })(ScriptResultUtil = powerbi.ScriptResultUtil || (powerbi.ScriptResultUtil = {}));
})(powerbi || (powerbi = {}));
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
    var data;
    (function (data) {
        var segmentation;
        (function (segmentation) {
            var DataViewMerger;
            (function (DataViewMerger) {
                function mergeDataViews(source, segment) {
                    if (!powerbi.DataViewAnalysis.isMetadataEquivalent(source.metadata, segment.metadata)) {
                        debug.assertFail("Cannot merge data views with different metadata columns");
                    }
                    // The last segment is complete. We mark the source as complete.
                    if (!segment.metadata.segment)
                        delete source.metadata.segment;
                    if (source.table && segment.table)
                        mergeTables(source.table, segment.table);
                    if (source.categorical && segment.categorical)
                        mergeCategorical(source.categorical, segment.categorical);
                    // Tree cannot support subtotals hence we can get into situations
                    // where a node has no children in one segment and more than 1 child
                    // in another segment.
                    if (source.tree && segment.tree)
                        mergeTreeNodes(source.tree.root, segment.tree.root, true /*allowDifferentStructure*/);
                    if (source.matrix && segment.matrix)
                        mergeTreeNodes(source.matrix.rows.root, segment.matrix.rows.root, false /*allowDifferentStructure*/);
                }
                DataViewMerger.mergeDataViews = mergeDataViews;
                /** Note: Public for testability */
                function mergeTables(source, segment) {
                    debug.assertValue(source, 'source');
                    debug.assertValue(segment, 'segment');
                    if (segment.rows.length === 0)
                        return;
                    merge(source.rows, segment.rows, segment.lastMergeIndex + 1);
                }
                DataViewMerger.mergeTables = mergeTables;
                /**
                 * Merge categories values and identities
                 *
                 * Note: Public for testability
                 */
                function mergeCategorical(source, segment) {
                    debug.assertValue(source, 'source');
                    debug.assertValue(segment, 'segment');
                    // Merge categories values and identities
                    if (source.categories && segment.categories) {
                        var segmentCategoriesLength = segment.categories.length;
                        debug.assert(source.categories.length === segmentCategoriesLength, "Source and segment categories have different lengths.");
                        for (var categoryIndex = 0; categoryIndex < segmentCategoriesLength; categoryIndex++) {
                            var segmentCategory = segment.categories[categoryIndex];
                            var sourceCategory = source.categories[categoryIndex];
                            debug.assert(powerbi.DataViewAnalysis.areMetadataColumnsEquivalent(sourceCategory.source, segmentCategory.source), "Source and segment category have different sources.");
                            if (!sourceCategory.values && segmentCategory.values) {
                                sourceCategory.values = [];
                                debug.assert(!sourceCategory.identity, "Source category is missing values but has identities.");
                            }
                            if (segmentCategory.values) {
                                merge(sourceCategory.values, segmentCategory.values, segment.lastMergeIndex + 1);
                            }
                            if (!sourceCategory.identity && segmentCategory.identity) {
                                sourceCategory.identity = [];
                            }
                            if (segmentCategory.identity) {
                                merge(sourceCategory.identity, segmentCategory.identity, segment.lastMergeIndex + 1);
                            }
                        }
                    }
                    // Merge values for each value column
                    if (source.values && segment.values) {
                        var segmentValuesLength = segment.values.length;
                        debug.assert(source.values.length === segmentValuesLength, "Source and segment values have different lengths.");
                        for (var valueIndex = 0; valueIndex < segmentValuesLength; valueIndex++) {
                            var segmentValue = segment.values[valueIndex];
                            var sourceValue = source.values[valueIndex];
                            debug.assert(jsCommon.JsonComparer.equals(sourceValue.source, segmentValue.source), "Source and segment value have different sources.");
                            if (!sourceValue.values && segmentValue.values) {
                                sourceValue.values = [];
                            }
                            if (segmentValue.values) {
                                merge(sourceValue.values, segmentValue.values, segment.lastMergeIndex + 1);
                            }
                            if (segmentValue.highlights) {
                                merge(sourceValue.highlights, segmentValue.highlights, segment.lastMergeIndex + 1);
                            }
                        }
                    }
                }
                DataViewMerger.mergeCategorical = mergeCategorical;
                /**
                 * Merges the segment array starting at the specified index into the source array
                 * and returns the segment slice that wasn't merged.
                 * The segment array is spliced up to specified index in the process.
                 */
                function merge(source, segment, index) {
                    if (index >= segment.length)
                        return segment;
                    var result = [];
                    if (index !== undefined)
                        result = segment.splice(0, index);
                    Array.prototype.push.apply(source, segment);
                    return result;
                }
                /** Note: Public for testability */
                function mergeTreeNodes(sourceRoot, segmentRoot, allowDifferentStructure) {
                    debug.assertValue(sourceRoot, 'sourceRoot');
                    debug.assertValue(segmentRoot, 'segmentRoot');
                    if (!segmentRoot.children || segmentRoot.children.length === 0)
                        return;
                    if (allowDifferentStructure && (!sourceRoot.children || sourceRoot.children.length === 0)) {
                        sourceRoot.children = segmentRoot.children;
                        return;
                    }
                    debug.assert(sourceRoot.children && sourceRoot.children.length >= 0, "Source tree has different structure than segment.");
                    var firstAppendIndex = findFirstAppendIndex(segmentRoot.children);
                    var lastSourceChild = sourceRoot.children[sourceRoot.children.length - 1];
                    var mergedChildren = merge(sourceRoot.children, segmentRoot.children, firstAppendIndex);
                    if (mergedChildren.length > 0)
                        mergeTreeNodes(lastSourceChild, mergedChildren[mergedChildren.length - 1], allowDifferentStructure);
                }
                DataViewMerger.mergeTreeNodes = mergeTreeNodes;
                function findFirstAppendIndex(children) {
                    if (children.length === 0)
                        return 0;
                    var i = 0;
                    for (; i < children.length; i++) {
                        var childSegment = children[i];
                        if (!childSegment.isMerge)
                            break;
                    }
                    return i;
                }
            })(DataViewMerger = segmentation.DataViewMerger || (segmentation.DataViewMerger = {}));
        })(segmentation = data.segmentation || (data.segmentation = {}));
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
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
    var data;
    (function (data) {
        var ArrayExtensions = jsCommon.ArrayExtensions;
        /** Rewrites an expression tree, including all descendant nodes. */
        var SQExprRewriter = (function () {
            function SQExprRewriter() {
            }
            SQExprRewriter.prototype.visitColumnRef = function (expr) {
                var origArg = expr.source, rewrittenArg = origArg.accept(this);
                if (origArg === rewrittenArg)
                    return expr;
                return new data.SQColumnRefExpr(rewrittenArg, expr.ref);
            };
            SQExprRewriter.prototype.visitMeasureRef = function (expr) {
                var origArg = expr.source, rewrittenArg = origArg.accept(this);
                if (origArg === rewrittenArg)
                    return expr;
                return new data.SQMeasureRefExpr(rewrittenArg, expr.ref);
            };
            SQExprRewriter.prototype.visitAggr = function (expr) {
                var origArg = expr.arg, rewrittenArg = origArg.accept(this);
                if (origArg === rewrittenArg)
                    return expr;
                return new data.SQAggregationExpr(rewrittenArg, expr.func);
            };
            SQExprRewriter.prototype.visitHierarchy = function (expr) {
                var origArg = expr.arg, rewrittenArg = origArg.accept(this);
                if (origArg === rewrittenArg)
                    return expr;
                return new data.SQHierarchyExpr(rewrittenArg, expr.hierarchy);
            };
            SQExprRewriter.prototype.visitHierarchyLevel = function (expr) {
                var origArg = expr.arg, rewrittenArg = origArg.accept(this);
                if (origArg === rewrittenArg)
                    return expr;
                return new data.SQHierarchyLevelExpr(rewrittenArg, expr.level);
            };
            SQExprRewriter.prototype.visitPropertyVariationSource = function (expr) {
                var origArg = expr.arg, rewrittenArg = origArg.accept(this);
                if (origArg === rewrittenArg)
                    return expr;
                return new data.SQPropertyVariationSourceExpr(rewrittenArg, expr.name, expr.property);
            };
            SQExprRewriter.prototype.visitEntity = function (expr) {
                return expr;
            };
            SQExprRewriter.prototype.visitAnd = function (orig) {
                var origLeft = orig.left, rewrittenLeft = origLeft.accept(this), origRight = orig.right, rewrittenRight = origRight.accept(this);
                if (origLeft === rewrittenLeft && origRight === rewrittenRight)
                    return orig;
                return new data.SQAndExpr(rewrittenLeft, rewrittenRight);
            };
            SQExprRewriter.prototype.visitBetween = function (orig) {
                var origArg = orig.arg, rewrittenArg = origArg.accept(this), origLower = orig.lower, rewrittenLower = origLower.accept(this), origUpper = orig.upper, rewrittenUpper = origUpper.accept(this);
                if (origArg === rewrittenArg && origLower === rewrittenLower && origUpper === rewrittenUpper)
                    return orig;
                return new data.SQBetweenExpr(rewrittenArg, rewrittenLower, rewrittenUpper);
            };
            SQExprRewriter.prototype.visitIn = function (orig) {
                var origArgs = orig.args, rewrittenArgs = this.rewriteAll(origArgs), origValues = orig.values, rewrittenValues;
                for (var i = 0, len = origValues.length; i < len; i++) {
                    var origValueTuple = origValues[i], rewrittenValueTuple = this.rewriteAll(origValueTuple);
                    if (origValueTuple !== rewrittenValueTuple && !rewrittenValues)
                        rewrittenValues = ArrayExtensions.take(origValues, i);
                    if (rewrittenValues)
                        rewrittenValues.push(rewrittenValueTuple);
                }
                if (origArgs === rewrittenArgs && !rewrittenValues)
                    return orig;
                return new data.SQInExpr(rewrittenArgs, rewrittenValues || origValues);
            };
            SQExprRewriter.prototype.rewriteAll = function (origExprs) {
                debug.assertValue(origExprs, 'origExprs');
                var rewrittenResult;
                for (var i = 0, len = origExprs.length; i < len; i++) {
                    var origExpr = origExprs[i], rewrittenExpr = origExpr.accept(this);
                    if (origExpr !== rewrittenExpr && !rewrittenResult)
                        rewrittenResult = ArrayExtensions.take(origExprs, i);
                    if (rewrittenResult)
                        rewrittenResult.push(rewrittenExpr);
                }
                return rewrittenResult || origExprs;
            };
            SQExprRewriter.prototype.visitOr = function (orig) {
                var origLeft = orig.left, rewrittenLeft = origLeft.accept(this), origRight = orig.right, rewrittenRight = origRight.accept(this);
                if (origLeft === rewrittenLeft && origRight === rewrittenRight)
                    return orig;
                return new data.SQOrExpr(rewrittenLeft, rewrittenRight);
            };
            SQExprRewriter.prototype.visitCompare = function (orig) {
                var origLeft = orig.left, rewrittenLeft = origLeft.accept(this), origRight = orig.right, rewrittenRight = origRight.accept(this);
                if (origLeft === rewrittenLeft && origRight === rewrittenRight)
                    return orig;
                return new data.SQCompareExpr(orig.comparison, rewrittenLeft, rewrittenRight);
            };
            SQExprRewriter.prototype.visitContains = function (orig) {
                var origLeft = orig.left, rewrittenLeft = origLeft.accept(this), origRight = orig.right, rewrittenRight = origRight.accept(this);
                if (origLeft === rewrittenLeft && origRight === rewrittenRight)
                    return orig;
                return new data.SQContainsExpr(rewrittenLeft, rewrittenRight);
            };
            SQExprRewriter.prototype.visitExists = function (orig) {
                var origArg = orig.arg, rewrittenArg = origArg.accept(this);
                if (origArg === rewrittenArg)
                    return orig;
                return new data.SQExistsExpr(rewrittenArg);
            };
            SQExprRewriter.prototype.visitNot = function (orig) {
                var origArg = orig.arg, rewrittenArg = origArg.accept(this);
                if (origArg === rewrittenArg)
                    return orig;
                return new data.SQNotExpr(rewrittenArg);
            };
            SQExprRewriter.prototype.visitStartsWith = function (orig) {
                var origLeft = orig.left, rewrittenLeft = origLeft.accept(this), origRight = orig.right, rewrittenRight = origRight.accept(this);
                if (origLeft === rewrittenLeft && origRight === rewrittenRight)
                    return orig;
                return new data.SQStartsWithExpr(rewrittenLeft, rewrittenRight);
            };
            SQExprRewriter.prototype.visitConstant = function (expr) {
                return expr;
            };
            SQExprRewriter.prototype.visitDateSpan = function (orig) {
                var origArg = orig.arg, rewrittenArg = origArg.accept(this);
                if (origArg === rewrittenArg)
                    return orig;
                return new data.SQDateSpanExpr(orig.unit, rewrittenArg);
            };
            SQExprRewriter.prototype.visitDateAdd = function (orig) {
                var origArg = orig.arg, rewrittenArg = origArg.accept(this);
                if (origArg === rewrittenArg)
                    return orig;
                return new data.SQDateAddExpr(orig.unit, orig.amount, rewrittenArg);
            };
            SQExprRewriter.prototype.visitNow = function (orig) {
                return orig;
            };
            SQExprRewriter.prototype.visitDefaultValue = function (orig) {
                return orig;
            };
            SQExprRewriter.prototype.visitAnyValue = function (orig) {
                return orig;
            };
            SQExprRewriter.prototype.visitArithmetic = function (orig) {
                var origLeft = orig.left, rewrittenLeft = origLeft.accept(this), origRight = orig.right, rewrittenRight = origRight.accept(this);
                if (origLeft === rewrittenLeft && origRight === rewrittenRight)
                    return orig;
                return new data.SQArithmeticExpr(rewrittenLeft, rewrittenRight, orig.operator);
            };
            SQExprRewriter.prototype.visitScopedEval = function (orig) {
                var origExpression = orig.expression, rewrittenExpression = origExpression.accept(this), origScope = orig.scope, rewrittenScope = this.rewriteAll(origScope);
                if (origExpression === rewrittenExpression && origScope === rewrittenScope)
                    return orig;
                return new data.SQScopedEvalExpr(rewrittenExpression, rewrittenScope);
            };
            SQExprRewriter.prototype.visitFillRule = function (orig) {
                var origInput = orig.input, rewrittenInput = origInput.accept(this);
                var origRule = orig.rule;
                var origGradient2 = origRule.linearGradient2, rewrittenGradient2 = origGradient2;
                if (origGradient2) {
                    rewrittenGradient2 = this.visitLinearGradient2(origGradient2);
                }
                var origGradient3 = origRule.linearGradient3, rewrittenGradient3 = origGradient3;
                if (origGradient3) {
                    rewrittenGradient3 = this.visitLinearGradient3(origGradient3);
                }
                if (origInput !== rewrittenInput ||
                    origGradient2 !== rewrittenGradient2 ||
                    origGradient3 !== rewrittenGradient3) {
                    var rewrittenRule = {};
                    if (rewrittenGradient2)
                        rewrittenRule.linearGradient2 = rewrittenGradient2;
                    if (rewrittenGradient3)
                        rewrittenRule.linearGradient3 = rewrittenGradient3;
                    return new data.SQFillRuleExpr(rewrittenInput, rewrittenRule);
                }
                return orig;
            };
            SQExprRewriter.prototype.visitLinearGradient2 = function (origGradient2) {
                debug.assertValue(origGradient2, 'origGradient2');
                var origMin = origGradient2.min, rewrittenMin = this.visitFillRuleStop(origMin), origMax = origGradient2.max, rewrittenMax = this.visitFillRuleStop(origMax);
                if (origMin !== rewrittenMin || origMax !== rewrittenMax) {
                    return {
                        min: rewrittenMin,
                        max: rewrittenMax,
                    };
                }
                return origGradient2;
            };
            SQExprRewriter.prototype.visitLinearGradient3 = function (origGradient3) {
                debug.assertValue(origGradient3, 'origGradient3');
                var origMin = origGradient3.min, rewrittenMin = this.visitFillRuleStop(origMin), origMid = origGradient3.mid, rewrittenMid = this.visitFillRuleStop(origMid), origMax = origGradient3.max, rewrittenMax = this.visitFillRuleStop(origMax);
                if (origMin !== rewrittenMin || origMid !== rewrittenMid || origMax !== rewrittenMax) {
                    return {
                        min: rewrittenMin,
                        mid: rewrittenMid,
                        max: rewrittenMax,
                    };
                }
                return origGradient3;
            };
            SQExprRewriter.prototype.visitFillRuleStop = function (stop) {
                debug.assertValue(stop, 'stop');
                var origColor = stop.color, rewrittenColor = stop.color.accept(this);
                var origValue = stop.value, rewrittenValue = origValue;
                if (origValue)
                    rewrittenValue = origValue.accept(this);
                if (origColor !== rewrittenColor || origValue !== rewrittenValue) {
                    var rewrittenStop = {
                        color: rewrittenColor
                    };
                    if (rewrittenValue)
                        rewrittenStop.value = rewrittenValue;
                    return rewrittenStop;
                }
                return stop;
            };
            SQExprRewriter.prototype.visitResourcePackageItem = function (orig) {
                return orig;
            };
            return SQExprRewriter;
        }());
        data.SQExprRewriter = SQExprRewriter;
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
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
    var data;
    (function (data) {
        /** Responsible for writing equality comparisons against a field to an SQInExpr. */
        var EqualsToInRewriter;
        (function (EqualsToInRewriter) {
            function run(expr) {
                debug.assertValue(expr, 'expr');
                return expr.accept(new Rewriter());
            }
            EqualsToInRewriter.run = run;
            var Rewriter = (function (_super) {
                __extends(Rewriter, _super);
                function Rewriter() {
                    _super.call(this);
                }
                Rewriter.prototype.visitCompare = function (expr) {
                    if (expr.comparison !== data.QueryComparisonKind.Equal)
                        return this.visitUnsupported(expr);
                    if (!this.isSupported(expr.left) || !this.isSupported(expr.right))
                        return this.visitUnsupported(expr);
                    var leftIsComparand = this.isComparand(expr.left);
                    var rightIsComparand = this.isComparand(expr.right);
                    if (leftIsComparand === rightIsComparand)
                        return this.visitUnsupported(expr);
                    var operand = leftIsComparand
                        ? expr.left
                        : expr.right;
                    var value = leftIsComparand
                        ? expr.right
                        : expr.left;
                    var current = this.current;
                    if (!current) {
                        return data.SQExprBuilder.inExpr([operand], [[value]]);
                    }
                    current.add(operand, value);
                    return expr;
                };
                Rewriter.prototype.visitOr = function (expr) {
                    if (!this.isSupported(expr.left) || !this.isSupported(expr.right))
                        return this.visitUnsupported(expr);
                    var current;
                    if (!this.current) {
                        current = this.current = new InBuilder();
                    }
                    expr.left.accept(this);
                    expr.right.accept(this);
                    if (current) {
                        this.current = null;
                        return current.complete() || expr;
                    }
                    return expr;
                };
                Rewriter.prototype.visitAnd = function (expr) {
                    if (!this.isSupported(expr.left) || !this.isSupported(expr.right))
                        return this.visitUnsupported(expr);
                    var current = this.current;
                    if (current) {
                        // NOTE: Composite keys are not supported by this algorithm.
                        current.cancel();
                        return expr;
                    }
                    return _super.prototype.visitAnd.call(this, expr);
                };
                Rewriter.prototype.visitUnsupported = function (expr) {
                    var current = this.current;
                    if (current)
                        current.cancel();
                    return expr;
                };
                Rewriter.prototype.isSupported = function (expr) {
                    debug.assertValue(expr, 'expr');
                    return expr instanceof data.SQCompareExpr
                        || expr instanceof data.SQColumnRefExpr
                        || expr instanceof data.SQConstantExpr
                        || expr instanceof data.SQHierarchyLevelExpr
                        || expr instanceof data.SQOrExpr
                        || expr instanceof data.SQAndExpr;
                };
                Rewriter.prototype.isComparand = function (expr) {
                    return expr instanceof data.SQColumnRefExpr
                        || expr instanceof data.SQHierarchyLevelExpr;
                };
                return Rewriter;
            }(data.SQExprRewriter));
            var InBuilder = (function () {
                function InBuilder() {
                }
                InBuilder.prototype.add = function (operand, value) {
                    debug.assertValue(operand, 'operand');
                    debug.assertValue(value, 'value');
                    if (this.cancelled)
                        return;
                    if (this.operand && !data.SQExpr.equals(operand, this.operand)) {
                        this.cancel();
                        return;
                    }
                    this.operand = operand;
                    var values = this.values;
                    if (!values)
                        values = this.values = [];
                    values.push(value);
                };
                InBuilder.prototype.cancel = function () {
                    this.cancelled = true;
                };
                InBuilder.prototype.complete = function () {
                    if (this.cancelled || !this.operand)
                        return;
                    return data.SQExprBuilder.inExpr([this.operand], _.map(this.values, function (v) { return [v]; }));
                };
                return InBuilder;
            }());
        })(EqualsToInRewriter = data.EqualsToInRewriter || (data.EqualsToInRewriter = {}));
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
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
    var data;
    (function (data) {
        var SQExprConverter;
        (function (SQExprConverter) {
            function asScopeIdsContainer(filter, fieldSQExprs) {
                debug.assertValue(filter, 'filter');
                debug.assertValue(fieldSQExprs, 'fieldSQExprs');
                debug.assert(fieldSQExprs.length > 0, 'There should be at least 1 field expression.');
                var filterItems = filter.conditions();
                debug.assert(filterItems.length === 1, 'There should be exactly 1 filter expression.');
                var filterItem = filterItems[0];
                if (filterItem) {
                    var visitor = new FilterScopeIdsCollectorVisitor(fieldSQExprs);
                    if (filterItem.accept(visitor))
                        return visitor.getResult();
                }
            }
            SQExprConverter.asScopeIdsContainer = asScopeIdsContainer;
            /** Gets a comparand value from the given DataViewScopeIdentity. */
            function getFirstComparandValue(identity) {
                debug.assertValue(identity, 'identity');
                var comparandExpr = identity.expr.accept(new FindComparandVisitor());
                if (comparandExpr)
                    return comparandExpr.value;
            }
            SQExprConverter.getFirstComparandValue = getFirstComparandValue;
        })(SQExprConverter = data.SQExprConverter || (data.SQExprConverter = {}));
        /** Collect filter values from simple semantic filter that is similar to 'is any of' or 'is not any of', getResult() returns a collection of scopeIds.**/
        var FilterScopeIdsCollectorVisitor = (function (_super) {
            __extends(FilterScopeIdsCollectorVisitor, _super);
            function FilterScopeIdsCollectorVisitor(fieldSQExprs) {
                _super.call(this);
                this.isRoot = true;
                this.isNot = false;
                this.keyExprsCount = null;
                this.valueExprs = [];
                // Need to drop the entitylet before create the scopeIdentity. The ScopeIdentity created on the client is used to
                // compare the ScopeIdentity came from the server. But server doesn't have the entity variable concept, so we will
                // need to drop it in order to use JsonComparer.
                this.fieldExprs = [];
                for (var _i = 0, fieldSQExprs_1 = fieldSQExprs; _i < fieldSQExprs_1.length; _i++) {
                    var field = fieldSQExprs_1[_i];
                    this.fieldExprs.push(data.SQExprBuilder.removeEntityVariables(field));
                }
            }
            FilterScopeIdsCollectorVisitor.prototype.getResult = function () {
                debug.assert(this.fieldExprs.length > 0, 'fieldExprs has at least one fieldExpr');
                var valueExprs = this.valueExprs, scopeIds = [];
                var valueCount = this.keyExprsCount || 1;
                for (var startIndex = 0, endIndex = valueCount, len = valueExprs.length; startIndex < len && endIndex <= len;) {
                    var values = valueExprs.slice(startIndex, endIndex);
                    var scopeId = FilterScopeIdsCollectorVisitor.getScopeIdentity(this.fieldExprs, values);
                    if (!jsCommon.ArrayExtensions.isInArray(scopeIds, scopeId, powerbi.DataViewScopeIdentity.equals))
                        scopeIds.push(scopeId);
                    startIndex += valueCount;
                    endIndex += valueCount;
                }
                return {
                    isNot: this.isNot,
                    scopeIds: scopeIds,
                };
            };
            FilterScopeIdsCollectorVisitor.getScopeIdentity = function (fieldExprs, valueExprs) {
                debug.assert(valueExprs.length > 0, 'valueExprs has at least one valueExpr');
                debug.assert(valueExprs.length === fieldExprs.length, 'fieldExpr and valueExpr count should match');
                var compoundSQExpr;
                for (var i = 0, len = fieldExprs.length; i < len; i++) {
                    var equalsExpr = data.SQExprBuilder.equal(fieldExprs[i], valueExprs[i]);
                    if (!compoundSQExpr)
                        compoundSQExpr = equalsExpr;
                    else
                        compoundSQExpr = data.SQExprBuilder.and(compoundSQExpr, equalsExpr);
                }
                return data.createDataViewScopeIdentity(compoundSQExpr);
            };
            FilterScopeIdsCollectorVisitor.prototype.visitOr = function (expr) {
                if (this.keyExprsCount !== null)
                    return this.unsupportedSQExpr();
                this.isRoot = false;
                return expr.left.accept(this) && expr.right.accept(this);
            };
            FilterScopeIdsCollectorVisitor.prototype.visitNot = function (expr) {
                if (!this.isRoot)
                    return this.unsupportedSQExpr();
                this.isNot = true;
                return expr.arg.accept(this);
            };
            FilterScopeIdsCollectorVisitor.prototype.visitConstant = function (expr) {
                if (this.isRoot && expr.type.primitiveType === powerbi.PrimitiveType.Null)
                    return this.unsupportedSQExpr();
                this.valueExprs.push(expr);
                return true;
            };
            FilterScopeIdsCollectorVisitor.prototype.visitCompare = function (expr) {
                if (this.keyExprsCount !== null)
                    return this.unsupportedSQExpr();
                this.isRoot = false;
                if (expr.comparison !== data.QueryComparisonKind.Equal)
                    return this.unsupportedSQExpr();
                return expr.left.accept(this) && expr.right.accept(this);
            };
            FilterScopeIdsCollectorVisitor.prototype.visitIn = function (expr) {
                this.keyExprsCount = 0;
                var result;
                this.isRoot = false;
                for (var _i = 0, _a = expr.args; _i < _a.length; _i++) {
                    var arg = _a[_i];
                    result = arg.accept(this);
                    if (!result)
                        return this.unsupportedSQExpr();
                    this.keyExprsCount++;
                }
                if (this.keyExprsCount !== this.fieldExprs.length)
                    return this.unsupportedSQExpr();
                var values = expr.values;
                for (var _b = 0, values_1 = values; _b < values_1.length; _b++) {
                    var valueTuple = values_1[_b];
                    var jlen = valueTuple.length;
                    debug.assert(jlen === this.keyExprsCount, "keys count and values count should match");
                    for (var _c = 0, valueTuple_1 = valueTuple; _c < valueTuple_1.length; _c++) {
                        var value = valueTuple_1[_c];
                        result = value.accept(this);
                        if (!result)
                            return this.unsupportedSQExpr();
                    }
                }
                return result;
            };
            FilterScopeIdsCollectorVisitor.prototype.visitColumnRef = function (expr) {
                if (this.isRoot)
                    return this.unsupportedSQExpr();
                var fixedExpr = data.SQExprBuilder.removeEntityVariables(expr);
                if (this.keyExprsCount !== null)
                    return data.SQExpr.equals(this.fieldExprs[this.keyExprsCount], fixedExpr);
                return data.SQExpr.equals(this.fieldExprs[0], fixedExpr);
            };
            FilterScopeIdsCollectorVisitor.prototype.visitDefaultValue = function (expr) {
                if (this.isRoot || this.keyExprsCount !== null)
                    return this.unsupportedSQExpr();
                this.valueExprs.push(expr);
                return true;
            };
            FilterScopeIdsCollectorVisitor.prototype.visitAnyValue = function (expr) {
                if (this.isRoot || this.keyExprsCount !== null)
                    return this.unsupportedSQExpr();
                this.valueExprs.push(expr);
                return true;
            };
            FilterScopeIdsCollectorVisitor.prototype.visitDefault = function (expr) {
                return this.unsupportedSQExpr();
            };
            FilterScopeIdsCollectorVisitor.prototype.unsupportedSQExpr = function () {
                return false;
            };
            return FilterScopeIdsCollectorVisitor;
        }(data.DefaultSQExprVisitor));
        var FindComparandVisitor = (function (_super) {
            __extends(FindComparandVisitor, _super);
            function FindComparandVisitor() {
                _super.apply(this, arguments);
            }
            FindComparandVisitor.prototype.visitAnd = function (expr) {
                return expr.left.accept(this) || expr.right.accept(this);
            };
            FindComparandVisitor.prototype.visitCompare = function (expr) {
                if (expr.comparison === data.QueryComparisonKind.Equal) {
                    if (expr.right instanceof data.SQConstantExpr)
                        return expr.right;
                    if (expr.left instanceof data.SQConstantExpr)
                        return expr.left;
                }
            };
            return FindComparandVisitor;
        }(data.DefaultSQExprVisitor));
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
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
    var data;
    (function (data) {
        var ArrayExtensions = jsCommon.ArrayExtensions;
        /** Recognizes DataViewScopeIdentity expression trees to extract comparison keys. */
        var ScopeIdentityExtractor;
        (function (ScopeIdentityExtractor) {
            function getKeys(expr) {
                var extractor = new ScopeIdExtractorImpl();
                expr.accept(extractor);
                if (extractor.malformed)
                    return null;
                return ArrayExtensions.emptyToNull(extractor.keys);
            }
            ScopeIdentityExtractor.getKeys = getKeys;
            function getInExpr(expr) {
                var extractor = new ScopeIdExtractorImpl();
                expr.accept(extractor);
                if (extractor.malformed)
                    return;
                var keys = ArrayExtensions.emptyToNull(extractor.keys);
                var keyValues = ArrayExtensions.emptyToNull(extractor.values);
                if (keys && keyValues)
                    return data.SQExprBuilder.inExpr(keys, [keyValues]);
            }
            ScopeIdentityExtractor.getInExpr = getInExpr;
            /**
             * Recognizes expressions of the form:
             * 1) Equals(ColRef, Constant)
             * 2) And(Equals(ColRef1, Constant1), Equals(ColRef2, Constant2))
             * or And(And(Equals(ColRef1, Constant1), Equals(ColRef2, Constant2)), Equals(ColRef3, Constant3)) etc..
             */
            var ScopeIdExtractorImpl = (function (_super) {
                __extends(ScopeIdExtractorImpl, _super);
                function ScopeIdExtractorImpl() {
                    _super.apply(this, arguments);
                    this.keys = [];
                    this.values = [];
                }
                ScopeIdExtractorImpl.prototype.visitAnd = function (expr) {
                    expr.left.accept(this);
                    expr.right.accept(this);
                };
                ScopeIdExtractorImpl.prototype.visitCompare = function (expr) {
                    if (expr.comparison !== data.QueryComparisonKind.Equal) {
                        this.visitDefault(expr);
                        return;
                    }
                    debug.assert(expr.left instanceof data.SQExpr && expr.right instanceof data.SQConstantExpr, 'invalid compare expr operands');
                    expr.left.accept(this);
                    expr.right.accept(this);
                };
                ScopeIdExtractorImpl.prototype.visitColumnRef = function (expr) {
                    this.keys.push(expr);
                };
                ScopeIdExtractorImpl.prototype.visitHierarchyLevel = function (expr) {
                    this.keys.push(expr);
                };
                ScopeIdExtractorImpl.prototype.visitConstant = function (expr) {
                    this.values.push(expr);
                };
                ScopeIdExtractorImpl.prototype.visitArithmetic = function (expr) {
                    this.keys.push(expr);
                };
                ScopeIdExtractorImpl.prototype.visitDefault = function (expr) {
                    this.malformed = true;
                };
                return ScopeIdExtractorImpl;
            }(data.DefaultSQExprVisitor));
        })(ScopeIdentityExtractor = data.ScopeIdentityExtractor || (data.ScopeIdentityExtractor = {}));
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
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
    var data;
    (function (data) {
        var PrimitiveValueEncoding;
        (function (PrimitiveValueEncoding) {
            var SingleQuoteRegex = /'/g;
            function decimal(value) {
                debug.assertValue(value, 'value');
                return value + 'M';
            }
            PrimitiveValueEncoding.decimal = decimal;
            function double(value) {
                debug.assertValue(value, 'value');
                return value + 'D';
            }
            PrimitiveValueEncoding.double = double;
            function integer(value) {
                debug.assertValue(value, 'value');
                return value + 'L';
            }
            PrimitiveValueEncoding.integer = integer;
            function dateTime(value) {
                debug.assertValue(value, 'value');
                // Currently, server doesn't support timezone. All date time data on the server don't have time zone information.
                // So, when we construct a dateTime object on the client, we will need to ignor user's time zone and force it to be UTC time.
                // When we subtract the timeZone offset, the date time object will remain the same value as you entered but dropped the local timeZone.
                var date = new Date(value.getTime() - (value.getTimezoneOffset() * 60000));
                var dateTimeString = date.toISOString();
                // If it ends with Z, we want to get rid of it, because with trailing Z, it will assume the dateTime is UTC, but we don't want any timeZone information, so
                // we will drop it.
                // Also, we need to add Prefix and Suffix to match the dsr value format for dateTime object.
                if (jsCommon.StringExtensions.endsWith(dateTimeString, 'Z'))
                    dateTimeString = dateTimeString.substr(0, dateTimeString.length - 1);
                return "datetime'" + dateTimeString + "'";
            }
            PrimitiveValueEncoding.dateTime = dateTime;
            function text(value) {
                debug.assertValue(value, 'value');
                return "'" + value.replace(SingleQuoteRegex, "''") + "'";
            }
            PrimitiveValueEncoding.text = text;
            function nullEncoding() {
                return 'null';
            }
            PrimitiveValueEncoding.nullEncoding = nullEncoding;
            function boolean(value) {
                return value ? 'true' : 'false';
            }
            PrimitiveValueEncoding.boolean = boolean;
        })(PrimitiveValueEncoding = data.PrimitiveValueEncoding || (data.PrimitiveValueEncoding = {}));
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
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
    var data;
    (function (data) {
        var Agg = powerbi.data.QueryAggregateFunction;
        function createSQAggregationOperations(datetimeMinMaxSupported) {
            return new SQAggregationOperations(datetimeMinMaxSupported);
        }
        data.createSQAggregationOperations = createSQAggregationOperations;
        var SQAggregationOperations = (function () {
            function SQAggregationOperations(datetimeMinMaxSupported) {
                this.datetimeMinMaxSupported = datetimeMinMaxSupported;
            }
            SQAggregationOperations.prototype.getSupportedAggregates = function (expr, schema, targetTypes) {
                debug.assertValue(expr, 'expr');
                debug.assertValue(schema, 'schema');
                debug.assertAnyValue(targetTypes, 'targetTypes');
                var metadata = getMetadataForUnderlyingType(expr, schema);
                // don't use expr.validate as validate will be using this function and we end up in a recursive loop
                if (!metadata)
                    return [];
                var valueType = metadata.type, fieldKind = metadata.kind, isPropertyIdentity = metadata.idOnEntityKey;
                if (!valueType)
                    return [];
                // Cannot aggregate on model measures
                if (fieldKind === 1 /* Measure */)
                    return [];
                if (valueType.numeric || valueType.integer) {
                    var aggregates_1 = [Agg.Sum, Agg.Avg, Agg.Min, Agg.Max, Agg.Count, Agg.CountNonNull, Agg.StandardDeviation, Agg.Variance];
                    var fieldExpr = data.SQExprConverter.asFieldPattern(expr);
                    var fieldExprItem = data.FieldExprPattern.toFieldExprEntityItemPattern(fieldExpr);
                    var currentSchema = schema.schema(fieldExprItem.schema);
                    if (currentSchema.capabilities.supportsMedian)
                        aggregates_1.push(Agg.Median);
                    return aggregates_1;
                }
                var aggregates = [];
                // Min/Max of DateTime
                if (this.datetimeMinMaxSupported &&
                    valueType.dateTime &&
                    (_.isEmpty(targetTypes) || powerbi.ValueType.isCompatibleTo(valueType, targetTypes))) {
                    aggregates.push(Agg.Min);
                    aggregates.push(Agg.Max);
                }
                // The supported aggregation types for an identity field are restricted to 'Count Non-Null' (e.g. for the field well aggregation options)
                // but a valid semantic query can return a less-restricted aggregation option which we should honor. (e.g. this results from Q&A)
                var distinctCountAggExists = data.SQExprInfo.getAggregate(expr) === Agg.Count;
                if (!(isPropertyIdentity && !distinctCountAggExists))
                    aggregates.push(Agg.Count);
                aggregates.push(Agg.CountNonNull);
                return aggregates;
            };
            SQAggregationOperations.prototype.isSupportedAggregate = function (expr, schema, aggregate, targetTypes) {
                debug.assertValue(expr, 'expr');
                debug.assertValue(schema, 'schema');
                var supportedAggregates = this.getSupportedAggregates(expr, schema, targetTypes);
                return _.contains(supportedAggregates, aggregate);
            };
            SQAggregationOperations.prototype.createExprWithAggregate = function (expr, schema, aggregateNonNumericFields, targetTypes, preferredAggregate) {
                debug.assertValue(expr, 'expr');
                debug.assertValue(schema, 'schema');
                var aggregate;
                if (preferredAggregate != null && this.isSupportedAggregate(expr, schema, preferredAggregate, targetTypes)) {
                    aggregate = preferredAggregate;
                }
                else {
                    aggregate = expr.getDefaultAggregate(schema, aggregateNonNumericFields);
                }
                if (aggregate !== undefined)
                    expr = data.SQExprBuilder.aggregate(expr, aggregate);
                return expr;
            };
            return SQAggregationOperations;
        }());
        function getMetadataForUnderlyingType(expr, schema) {
            // Unwrap the aggregate (if the expr has one), and look at the underlying type.
            var metadata = data.SQExprBuilder.removeAggregate(expr).getMetadata(schema);
            if (!metadata)
                metadata = expr.getMetadata(schema);
            return metadata;
        }
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
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
    var data;
    (function (data) {
        var SQHierarchyExprUtils;
        (function (SQHierarchyExprUtils) {
            function getConceptualHierarchyLevelFromExpr(conceptualSchema, fieldExpr) {
                var fieldExprItem = data.FieldExprPattern.toFieldExprEntityItemPattern(fieldExpr);
                var hierarchyLevel = fieldExpr.hierarchyLevel || fieldExpr.hierarchyLevelAggr;
                if (hierarchyLevel)
                    return SQHierarchyExprUtils.getConceptualHierarchyLevel(conceptualSchema, fieldExprItem.schema, fieldExprItem.entity, hierarchyLevel.name, hierarchyLevel.level);
            }
            SQHierarchyExprUtils.getConceptualHierarchyLevelFromExpr = getConceptualHierarchyLevelFromExpr;
            function getConceptualHierarchyLevel(conceptualSchema, schemaName, entity, hierarchy, hierarchyLevel) {
                var schema = conceptualSchema.schema(schemaName);
                var conceptualHierarchy = schema.findHierarchy(entity, hierarchy);
                if (conceptualHierarchy) {
                    return conceptualHierarchy.levels.withName(hierarchyLevel);
                }
            }
            SQHierarchyExprUtils.getConceptualHierarchyLevel = getConceptualHierarchyLevel;
            function getConceptualHierarchy(sqExpr, federatedSchema) {
                if (sqExpr instanceof data.SQHierarchyExpr) {
                    var hierarchy = sqExpr;
                    if (sqExpr.arg instanceof data.SQEntityExpr) {
                        var entityExpr = sqExpr.arg;
                        return federatedSchema
                            .schema(entityExpr.schema)
                            .findHierarchy(entityExpr.entity, hierarchy.hierarchy);
                    }
                    else if (sqExpr.arg instanceof data.SQPropertyVariationSourceExpr) {
                        var variationExpr = sqExpr.arg;
                        var sourceEntityExpr = variationExpr.arg;
                        return federatedSchema
                            .schema(sourceEntityExpr.schema)
                            .findHierarchyByVariation(sourceEntityExpr.entity, variationExpr.property, variationExpr.name, hierarchy.hierarchy);
                    }
                }
            }
            SQHierarchyExprUtils.getConceptualHierarchy = getConceptualHierarchy;
            function expandExpr(schema, expr, suppressHierarchyLevelExpansion) {
                return SQExprHierarchyToHierarchyLevelConverter.convert(expr, schema) ||
                    SQExprVariationConverter.expand(expr, schema) ||
                    // If we are calling expandExpr from suppressHierarchyLevelExpansion, we should not expand the hierarchylevels
                    (!suppressHierarchyLevelExpansion && SQExprHierarchyLevelConverter.expand(expr, schema)) ||
                    expr;
            }
            SQHierarchyExprUtils.expandExpr = expandExpr;
            function isHierarchyOrVariation(schema, expr) {
                if (expr instanceof data.SQHierarchyExpr || expr instanceof data.SQHierarchyLevelExpr)
                    return true;
                var conceptualProperty = expr.getConceptualProperty(schema);
                if (conceptualProperty) {
                    var column = conceptualProperty.column;
                    if (column && column.variations && column.variations.length > 0)
                        return true;
                }
                return false;
            }
            SQHierarchyExprUtils.isHierarchyOrVariation = isHierarchyOrVariation;
            // Return column reference expression for hierarchy level expression.
            function getSourceVariationExpr(hierarchyLevelExpr) {
                var fieldExprPattern = data.SQExprConverter.asFieldPattern(hierarchyLevelExpr);
                if (fieldExprPattern.columnHierarchyLevelVariation) {
                    var entity = data.SQExprBuilder.entity(fieldExprPattern.columnHierarchyLevelVariation.source.schema, fieldExprPattern.columnHierarchyLevelVariation.source.entity);
                    return data.SQExprBuilder.columnRef(entity, fieldExprPattern.columnHierarchyLevelVariation.source.name);
                }
            }
            SQHierarchyExprUtils.getSourceVariationExpr = getSourceVariationExpr;
            // Return hierarchy expression for hierarchy level expression.
            function getSourceHierarchy(hierarchyLevelExpr) {
                var fieldExprPattern = data.SQExprConverter.asFieldPattern(hierarchyLevelExpr);
                var hierarchyLevel = fieldExprPattern.hierarchyLevel;
                if (hierarchyLevel) {
                    var entity = data.SQExprBuilder.entity(hierarchyLevel.schema, hierarchyLevel.entity, hierarchyLevel.entityVar);
                    return data.SQExprBuilder.hierarchy(entity, hierarchyLevel.name);
                }
            }
            SQHierarchyExprUtils.getSourceHierarchy = getSourceHierarchy;
            function getHierarchySourceAsVariationSource(hierarchyLevelExpr) {
                // Make sure the hierarchy level source is a hierarchy
                if (!(hierarchyLevelExpr.arg instanceof data.SQHierarchyExpr))
                    return;
                // Check if the hierarchy source if a variation
                var hierarchyRef = hierarchyLevelExpr.arg;
                if (hierarchyRef.arg instanceof data.SQPropertyVariationSourceExpr)
                    return hierarchyRef.arg;
            }
            SQHierarchyExprUtils.getHierarchySourceAsVariationSource = getHierarchySourceAsVariationSource;
            /**
            * Returns true if firstExpr and secondExpr are levels in the same hierarchy and firstExpr is before secondExpr in allLevels.
            */
            function areHierarchyLevelsOrdered(allLevels, firstExpr, secondExpr) {
                // Validate that both items hierarchy levels
                if (!(firstExpr instanceof data.SQHierarchyLevelExpr) || !(secondExpr instanceof data.SQHierarchyLevelExpr))
                    return false;
                var firstLevel = firstExpr;
                var secondLevel = secondExpr;
                // Validate that both items belong to the same hierarchy
                if (!data.SQExpr.equals(firstLevel.arg, secondLevel.arg))
                    return false;
                // Determine the order
                var firstIndex = data.SQExprUtils.indexOfExpr(allLevels, firstLevel);
                var secondIndex = data.SQExprUtils.indexOfExpr(allLevels, secondLevel);
                return firstIndex !== -1 && secondIndex !== -1 && firstIndex < secondIndex;
            }
            SQHierarchyExprUtils.areHierarchyLevelsOrdered = areHierarchyLevelsOrdered;
            /**
             * Given an ordered set of levels and an ordered subset of those levels, returns the index where
             * expr should be inserted into the subset to maintain the correct order.
             */
            function getInsertionIndex(allLevels, orderedSubsetOfLevels, expr) {
                var insertIndex = 0;
                // Loop through the supplied levels until the insertion would no longer be in the correct order
                while (insertIndex < orderedSubsetOfLevels.length &&
                    areHierarchyLevelsOrdered(allLevels, orderedSubsetOfLevels[insertIndex], expr)) {
                    insertIndex++;
                }
                return insertIndex;
            }
            SQHierarchyExprUtils.getInsertionIndex = getInsertionIndex;
        })(SQHierarchyExprUtils = data.SQHierarchyExprUtils || (data.SQHierarchyExprUtils = {}));
        var SQExprHierarchyToHierarchyLevelConverter;
        (function (SQExprHierarchyToHierarchyLevelConverter) {
            function convert(sqExpr, federatedSchema) {
                debug.assertValue(sqExpr, 'sqExpr');
                debug.assertValue(federatedSchema, 'federatedSchema');
                if (sqExpr instanceof data.SQHierarchyExpr) {
                    var hierarchyExpr = sqExpr;
                    var conceptualHierarchy = SQHierarchyExprUtils.getConceptualHierarchy(hierarchyExpr, federatedSchema);
                    if (conceptualHierarchy)
                        return _.map(conceptualHierarchy.levels, function (hierarchyLevel) { return data.SQExprBuilder.hierarchyLevel(sqExpr, hierarchyLevel.name); });
                }
            }
            SQExprHierarchyToHierarchyLevelConverter.convert = convert;
        })(SQExprHierarchyToHierarchyLevelConverter = data.SQExprHierarchyToHierarchyLevelConverter || (data.SQExprHierarchyToHierarchyLevelConverter = {}));
        var SQExprHierarchyLevelConverter;
        (function (SQExprHierarchyLevelConverter) {
            function expand(expr, schema) {
                debug.assertValue(expr, 'sqExpr');
                debug.assertValue(schema, 'federatedSchema');
                var exprs = [];
                if (expr instanceof data.SQHierarchyLevelExpr) {
                    var fieldExpr = data.SQExprConverter.asFieldPattern(expr);
                    if (fieldExpr.hierarchyLevel) {
                        var fieldExprItem = data.FieldExprPattern.toFieldExprEntityItemPattern(fieldExpr);
                        var hierarchy = schema
                            .schema(fieldExprItem.schema)
                            .findHierarchy(fieldExprItem.entity, fieldExpr.hierarchyLevel.name);
                        if (hierarchy) {
                            var hierarchyLevels = hierarchy.levels;
                            for (var _i = 0, hierarchyLevels_2 = hierarchyLevels; _i < hierarchyLevels_2.length; _i++) {
                                var hierarchyLevel = hierarchyLevels_2[_i];
                                if (hierarchyLevel.name === fieldExpr.hierarchyLevel.level) {
                                    exprs.push(expr);
                                    break;
                                }
                                else
                                    exprs.push(data.SQExprBuilder.hierarchyLevel(data.SQExprBuilder.hierarchy(data.SQExprBuilder.entity(fieldExprItem.schema, fieldExprItem.entity, fieldExprItem.entityVar), hierarchy.name), hierarchyLevel.name));
                            }
                        }
                    }
                }
                if (!_.isEmpty(exprs))
                    return exprs;
            }
            SQExprHierarchyLevelConverter.expand = expand;
        })(SQExprHierarchyLevelConverter || (SQExprHierarchyLevelConverter = {}));
        var SQExprVariationConverter;
        (function (SQExprVariationConverter) {
            function expand(expr, schema) {
                debug.assertValue(expr, 'sqExpr');
                debug.assertValue(schema, 'federatedSchema');
                var exprs;
                var conceptualProperty = expr.getConceptualProperty(schema);
                if (conceptualProperty) {
                    var column = conceptualProperty.column;
                    if (column && column.variations && column.variations.length > 0) {
                        var variations = column.variations;
                        // for SU11, we support only one variation
                        debug.assert(variations.length === 1, "variations.length");
                        var variation = variations[0];
                        var fieldExpr = data.SQExprConverter.asFieldPattern(expr);
                        var fieldExprItem = data.FieldExprPattern.toFieldExprEntityItemPattern(fieldExpr);
                        exprs = [];
                        if (variation.defaultHierarchy) {
                            var hierarchyExpr = data.SQExprBuilder.hierarchy(data.SQExprBuilder.propertyVariationSource(data.SQExprBuilder.entity(fieldExprItem.schema, fieldExprItem.entity, fieldExprItem.entityVar), variation.name, conceptualProperty.name), variation.defaultHierarchy.name);
                            for (var _i = 0, _a = variation.defaultHierarchy.levels; _i < _a.length; _i++) {
                                var level = _a[_i];
                                exprs.push(data.SQExprBuilder.hierarchyLevel(hierarchyExpr, level.name));
                            }
                        }
                    }
                }
                return exprs;
            }
            SQExprVariationConverter.expand = expand;
        })(SQExprVariationConverter || (SQExprVariationConverter = {}));
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
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
    var data;
    (function (data) {
        ;
        var SQExprGroupUtils;
        (function (SQExprGroupUtils) {
            /** Group all projections. Eacch group can consist of either a single property, or a collection of hierarchy items. */
            function groupExprs(schema, exprs) {
                var groups = [];
                for (var i = 0, len = exprs.length; i < len; i++) {
                    var expr = exprs[i];
                    debug.assertValue(expr, "Expression not found");
                    if (!(expr instanceof data.SQHierarchyLevelExpr)) {
                        groups.push({ expr: expr, children: null, selectQueryIndex: i });
                    }
                    else {
                        addChildToGroup(schema, groups, expr, i);
                    }
                }
                return groups;
            }
            SQExprGroupUtils.groupExprs = groupExprs;
            function addChildToGroup(schema, groups, expr, selectQueryIndex) {
                // shouldAddExpressionToNewGroup is used to control whether we should add the passed expr to 
                // a new Group or to the last Group
                var shouldAddExpressionToNewGroup = true;
                var exprSource = data.SQHierarchyExprUtils.getSourceVariationExpr(expr) || data.SQHierarchyExprUtils.getSourceHierarchy(expr);
                var lastGroup = _.last(groups);
                // The relevant group is always the last added. If it has the same source hierarchy,
                // and is properly ordered within that hierarchy, we will need to add to this group.
                if (lastGroup && lastGroup.children && data.SQExpr.equals(lastGroup.expr, exprSource)) {
                    var expandedExpr = data.SQHierarchyExprUtils.expandExpr(schema, expr.arg);
                    if (expandedExpr instanceof Array) {
                        var allHierarchyLevels = expandedExpr;
                        shouldAddExpressionToNewGroup = !data.SQHierarchyExprUtils.areHierarchyLevelsOrdered(allHierarchyLevels, _.last(lastGroup.children), expr);
                    }
                }
                if (shouldAddExpressionToNewGroup)
                    // Use the Sourcevariation as the expression for the group.
                    groups.push({ expr: exprSource, children: [expr], selectQueryIndex: selectQueryIndex });
                else {
                    debug.assertValue(lastGroup, 'There should be a group to add the variation to');
                    debug.assertValue(lastGroup.children, 'The group should have children to add the variation to');
                    lastGroup.children.push(expr);
                }
            }
        })(SQExprGroupUtils = data.SQExprGroupUtils || (data.SQExprGroupUtils = {}));
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
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
    var data;
    (function (data) {
        var StringExtensions = jsCommon.StringExtensions;
        /** Represents an immutable expression within a SemanticQuery. */
        var SQExpr = (function () {
            function SQExpr(kind) {
                debug.assertValue(kind, 'kind');
                this._kind = kind;
            }
            SQExpr.equals = function (x, y, ignoreCase) {
                return SQExprEqualityVisitor.run(x, y, ignoreCase);
            };
            SQExpr.prototype.validate = function (schema, aggrUtils, errors) {
                var validator = new SQExprValidationVisitor(schema, aggrUtils, errors);
                this.accept(validator);
                return validator.errors;
            };
            SQExpr.prototype.accept = function (visitor, arg) {
                debug.assertFail('abstract method');
                return;
            };
            Object.defineProperty(SQExpr.prototype, "kind", {
                get: function () {
                    return this._kind;
                },
                enumerable: true,
                configurable: true
            });
            SQExpr.isColumn = function (expr) {
                debug.assertValue(expr, 'expr');
                return expr.kind === 1 /* ColumnRef */;
            };
            SQExpr.isConstant = function (expr) {
                debug.assertValue(expr, 'expr');
                return expr.kind === 16 /* Constant */;
            };
            SQExpr.isEntity = function (expr) {
                debug.assertValue(expr, 'expr');
                return expr.kind === 0 /* Entity */;
            };
            SQExpr.isHierarchy = function (expr) {
                debug.assertValue(expr, 'expr');
                return expr.kind === 5 /* Hierarchy */;
            };
            SQExpr.isHierarchyLevel = function (expr) {
                debug.assertValue(expr, 'expr');
                return expr.kind === 6 /* HierarchyLevel */;
            };
            SQExpr.isAggregation = function (expr) {
                debug.assertValue(expr, 'expr');
                return expr.kind === 3 /* Aggregation */;
            };
            SQExpr.isMeasure = function (expr) {
                debug.assertValue(expr, 'expr');
                return expr.kind === 2 /* MeasureRef */;
            };
            SQExpr.isResourcePackageItem = function (expr) {
                debug.assertValue(expr, 'expr');
                return expr.kind === 24 /* ResourcePackageItem */;
            };
            SQExpr.prototype.getMetadata = function (federatedSchema) {
                debug.assertValue(federatedSchema, 'federatedSchema');
                var field = data.SQExprConverter.asFieldPattern(this);
                if (!field)
                    return;
                if (field.column || field.columnAggr || field.measure)
                    return this.getMetadataForProperty(field, federatedSchema);
                if (field.hierarchyLevel || field.hierarchyLevelAggr)
                    return this.getMetadataForHierarchyLevel(field, federatedSchema);
                if (field.columnHierarchyLevelVariation)
                    return this.getMetadataForVariation(field, federatedSchema);
                return SQExpr.getMetadataForEntity(field, federatedSchema);
            };
            SQExpr.prototype.getDefaultAggregate = function (federatedSchema, forceAggregation) {
                if (forceAggregation === void 0) { forceAggregation = false; }
                debug.assertValue(federatedSchema, 'federatedSchema');
                var property = this.getConceptualProperty(federatedSchema) || this.getHierarchyLevelConceptualProperty(federatedSchema);
                if (!property)
                    return;
                var aggregate;
                if (property && property.kind === 0 /* Column */) {
                    var propertyDefaultAggregate = property.column ? property.column.defaultAggregate : null;
                    if ((property.type.integer || property.type.numeric) &&
                        propertyDefaultAggregate !== 1 /* None */) {
                        aggregate = defaultAggregateToQueryAggregateFunction(propertyDefaultAggregate);
                        if (aggregate === undefined)
                            aggregate = defaultAggregateForDataType(property.type);
                    }
                    // If we haven't found an appropriate aggregate, and want to force aggregation anyway, 
                    // aggregate on CountNonNull.
                    if (aggregate === undefined && forceAggregation) {
                        aggregate = data.QueryAggregateFunction.CountNonNull;
                    }
                }
                return aggregate;
            };
            /** Return the SQExpr[] of group on columns if it has group on keys otherwise return the SQExpr of the column.*/
            SQExpr.prototype.getKeyColumns = function (schema) {
                var columnRefExpr = SQExprColumnRefInfoVisitor.getColumnRefSQExpr(schema, this);
                if (!columnRefExpr)
                    return;
                var keySQExprs = [];
                var keys = this.getPropertyKeys(schema);
                if (keys && keys.length > 0) {
                    for (var i = 0, len = keys.length; i < len; i++) {
                        keySQExprs.push(SQExprBuilder.columnRef(columnRefExpr.source, keys[i].name));
                    }
                }
                else
                    keySQExprs.push(columnRefExpr);
                return keySQExprs;
            };
            /** Returns a value indicating whether the expression would group on keys other than itself.*/
            SQExpr.prototype.hasGroupOnKeys = function (schema) {
                var columnRefExpr = SQExprColumnRefInfoVisitor.getColumnRefSQExpr(schema, this);
                if (!columnRefExpr)
                    return;
                var keys = this.getPropertyKeys(schema);
                if (!keys || keys.length < 1)
                    return false;
                if (keys.length > 1)
                    return true;
                var keySqExpr = SQExprBuilder.columnRef(columnRefExpr.source, keys[0].name);
                return !SQExpr.equals(keySqExpr, this);
            };
            SQExpr.prototype.getPropertyKeys = function (schema) {
                var property = this.getConceptualProperty(schema) || this.getHierarchyLevelConceptualProperty(schema);
                if (!property)
                    return;
                return property.column ? property.column.keys : undefined;
            };
            SQExpr.prototype.getConceptualProperty = function (federatedSchema) {
                var field = data.SQExprConverter.asFieldPattern(this);
                if (!field)
                    return;
                var fieldExprItem = data.FieldExprPattern.toFieldExprEntityItemPattern(field);
                var propertyName = data.FieldExprPattern.getPropertyName(field);
                if (propertyName)
                    return federatedSchema
                        .schema(fieldExprItem.schema)
                        .findProperty(fieldExprItem.entity, propertyName);
            };
            SQExpr.prototype.getTargetEntityForVariation = function (federatedSchema, variationName) {
                var property = this.getConceptualProperty(federatedSchema);
                if (property && property.column && !_.isEmpty(property.column.variations)) {
                    var variations = property.column.variations;
                    for (var _i = 0, variations_2 = variations; _i < variations_2.length; _i++) {
                        var variation = variations_2[_i];
                        if (variation.name === variationName)
                            return variation.navigationProperty.targetEntity.name;
                    }
                }
            };
            SQExpr.prototype.getTargetEntity = function (federatedSchema) {
                return SQEntityExprInfoVisitor.getEntityExpr(federatedSchema, this);
            };
            SQExpr.prototype.getHierarchyLevelConceptualProperty = function (federatedSchema) {
                var field = data.SQExprConverter.asFieldPattern(this);
                if (!field)
                    return;
                var fieldExprHierachyLevel = field.hierarchyLevel || field.hierarchyLevelAggr;
                if (fieldExprHierachyLevel) {
                    var fieldExprEntity = data.FieldExprPattern.toFieldExprEntityItemPattern(field);
                    var hierarchy = federatedSchema
                        .schema(fieldExprEntity.schema)
                        .findHierarchy(fieldExprEntity.entity, fieldExprHierachyLevel.name);
                    if (hierarchy) {
                        var hierarchyLevel = hierarchy.levels.withName(fieldExprHierachyLevel.level);
                        if (hierarchyLevel)
                            return hierarchyLevel.column;
                    }
                }
            };
            SQExpr.prototype.getMetadataForVariation = function (field, federatedSchema) {
                debug.assertValue(field, 'field');
                debug.assertValue(federatedSchema, 'federatedSchema');
                var columnHierarchyLevelVariation = field.columnHierarchyLevelVariation;
                var fieldExprItem = data.FieldExprPattern.toFieldExprEntityItemPattern(field);
                var sourceProperty = federatedSchema
                    .schema(fieldExprItem.schema)
                    .findProperty(fieldExprItem.entity, columnHierarchyLevelVariation.source.name);
                if (sourceProperty && sourceProperty.column && sourceProperty.column.variations) {
                    for (var _i = 0, _a = sourceProperty.column.variations; _i < _a.length; _i++) {
                        var variation = _a[_i];
                        if (variation.defaultHierarchy && variation.defaultHierarchy.levels) {
                            for (var _b = 0, _c = variation.defaultHierarchy.levels; _b < _c.length; _b++) {
                                var level = _c[_b];
                                if (level.name === columnHierarchyLevelVariation.level.level) {
                                    var property = level.column;
                                    return {
                                        kind: (property.kind === 1 /* Measure */) ? 1 /* Measure */ : 0 /* Column */,
                                        type: property.type,
                                        format: property.format,
                                        idOnEntityKey: property.column ? property.column.idOnEntityKey : false,
                                        defaultAggregate: property.column ? property.column.defaultAggregate : null
                                    };
                                }
                            }
                        }
                    }
                }
            };
            SQExpr.prototype.getMetadataForHierarchyLevel = function (field, federatedSchema) {
                debug.assertValue(field, 'field');
                debug.assertValue(federatedSchema, 'federatedSchema');
                var property = this.getHierarchyLevelConceptualProperty(federatedSchema);
                if (!property)
                    return;
                return this.getPropertyMetadata(field, property);
            };
            SQExpr.prototype.getPropertyMetadata = function (field, property) {
                var format = property.format;
                var type = property.type;
                var columnAggregate = field.columnAggr || field.hierarchyLevelAggr;
                if (columnAggregate) {
                    switch (columnAggregate.aggregate) {
                        case data.QueryAggregateFunction.Count:
                        case data.QueryAggregateFunction.CountNonNull:
                            type = powerbi.ValueType.fromExtendedType(powerbi.ExtendedType.Integer);
                            format = undefined;
                            break;
                        case data.QueryAggregateFunction.Avg:
                            if (type.integer)
                                type = powerbi.ValueType.fromExtendedType(powerbi.ExtendedType.Double);
                            break;
                    }
                }
                return {
                    kind: (property.kind === 1 /* Measure */ || (columnAggregate && columnAggregate.aggregate !== undefined)) ? 1 /* Measure */ : 0 /* Column */,
                    type: type,
                    format: format,
                    idOnEntityKey: property.column ? property.column.idOnEntityKey : false,
                    aggregate: columnAggregate ? columnAggregate.aggregate : undefined,
                    defaultAggregate: property.column ? property.column.defaultAggregate : null
                };
            };
            SQExpr.prototype.getMetadataForProperty = function (field, federatedSchema) {
                debug.assertValue(field, 'field');
                debug.assertValue(federatedSchema, 'federatedSchema');
                var property = this.getConceptualProperty(federatedSchema);
                if (!property)
                    return;
                return this.getPropertyMetadata(field, property);
            };
            SQExpr.getMetadataForEntity = function (field, federatedSchema) {
                debug.assertValue(field, 'field');
                debug.assertValue(federatedSchema, 'federatedSchema');
                var fieldExprItem = data.FieldExprPattern.toFieldExprEntityItemPattern(field);
                var entity = federatedSchema
                    .schema(fieldExprItem.schema)
                    .entities
                    .withName(fieldExprItem.entity);
                if (!entity)
                    return;
                // We only support count and countnonnull for entity.
                if (field.entityAggr) {
                    switch (field.entityAggr.aggregate) {
                        case data.QueryAggregateFunction.Count:
                        case data.QueryAggregateFunction.CountNonNull:
                            return {
                                kind: 1 /* Measure */,
                                type: powerbi.ValueType.fromExtendedType(powerbi.ExtendedType.Integer),
                                format: undefined,
                                idOnEntityKey: false,
                                aggregate: field.entityAggr.aggregate
                            };
                    }
                }
            };
            return SQExpr;
        }());
        data.SQExpr = SQExpr;
        /** Note: Exported for testability */
        function defaultAggregateForDataType(type) {
            if (type.integer || type.numeric)
                return data.QueryAggregateFunction.Sum;
            return data.QueryAggregateFunction.Count;
        }
        data.defaultAggregateForDataType = defaultAggregateForDataType;
        /** Note: Exported for testability */
        function defaultAggregateToQueryAggregateFunction(aggregate) {
            switch (aggregate) {
                case 6 /* Average */:
                    return data.QueryAggregateFunction.Avg;
                case 3 /* Count */:
                    return data.QueryAggregateFunction.CountNonNull;
                case 7 /* DistinctCount */:
                    return data.QueryAggregateFunction.Count;
                case 5 /* Max */:
                    return data.QueryAggregateFunction.Max;
                case 4 /* Min */:
                    return data.QueryAggregateFunction.Min;
                case 2 /* Sum */:
                    return data.QueryAggregateFunction.Sum;
                default:
                    return;
            }
        }
        data.defaultAggregateToQueryAggregateFunction = defaultAggregateToQueryAggregateFunction;
        var SQEntityExpr = (function (_super) {
            __extends(SQEntityExpr, _super);
            function SQEntityExpr(schema, entity, variable) {
                debug.assertValue(entity, 'entity');
                _super.call(this, 0 /* Entity */);
                this.schema = schema;
                this.entity = entity;
                if (variable)
                    this.variable = variable;
            }
            SQEntityExpr.prototype.accept = function (visitor, arg) {
                return visitor.visitEntity(this, arg);
            };
            return SQEntityExpr;
        }(SQExpr));
        data.SQEntityExpr = SQEntityExpr;
        var SQArithmeticExpr = (function (_super) {
            __extends(SQArithmeticExpr, _super);
            function SQArithmeticExpr(left, right, operator) {
                debug.assertValue(left, 'left');
                debug.assertValue(right, 'right');
                debug.assertValue(operator, 'operator');
                _super.call(this, 22 /* Arithmetic */);
                this.left = left;
                this.right = right;
                this.operator = operator;
            }
            SQArithmeticExpr.prototype.accept = function (visitor, arg) {
                return visitor.visitArithmetic(this, arg);
            };
            return SQArithmeticExpr;
        }(SQExpr));
        data.SQArithmeticExpr = SQArithmeticExpr;
        var SQScopedEvalExpr = (function (_super) {
            __extends(SQScopedEvalExpr, _super);
            function SQScopedEvalExpr(expression, scope) {
                debug.assertValue(expression, 'expression');
                debug.assertValue(scope, 'scope');
                _super.call(this, 25 /* ScopedEval */);
                this.expression = expression;
                this.scope = scope;
            }
            SQScopedEvalExpr.prototype.accept = function (visitor, arg) {
                return visitor.visitScopedEval(this, arg);
            };
            return SQScopedEvalExpr;
        }(SQExpr));
        data.SQScopedEvalExpr = SQScopedEvalExpr;
        var SQPropRefExpr = (function (_super) {
            __extends(SQPropRefExpr, _super);
            function SQPropRefExpr(kind, source, ref) {
                debug.assertValue(kind, 'kind');
                debug.assertValue(source, 'source');
                debug.assertValue(ref, 'ref');
                _super.call(this, kind);
                this.source = source;
                this.ref = ref;
            }
            return SQPropRefExpr;
        }(SQExpr));
        data.SQPropRefExpr = SQPropRefExpr;
        var SQColumnRefExpr = (function (_super) {
            __extends(SQColumnRefExpr, _super);
            function SQColumnRefExpr(source, ref) {
                _super.call(this, 1 /* ColumnRef */, source, ref);
            }
            SQColumnRefExpr.prototype.accept = function (visitor, arg) {
                return visitor.visitColumnRef(this, arg);
            };
            return SQColumnRefExpr;
        }(SQPropRefExpr));
        data.SQColumnRefExpr = SQColumnRefExpr;
        var SQMeasureRefExpr = (function (_super) {
            __extends(SQMeasureRefExpr, _super);
            function SQMeasureRefExpr(source, ref) {
                _super.call(this, 2 /* MeasureRef */, source, ref);
            }
            SQMeasureRefExpr.prototype.accept = function (visitor, arg) {
                return visitor.visitMeasureRef(this, arg);
            };
            return SQMeasureRefExpr;
        }(SQPropRefExpr));
        data.SQMeasureRefExpr = SQMeasureRefExpr;
        var SQAggregationExpr = (function (_super) {
            __extends(SQAggregationExpr, _super);
            function SQAggregationExpr(arg, func) {
                debug.assertValue(arg, 'arg');
                debug.assertValue(func, 'func');
                _super.call(this, 3 /* Aggregation */);
                this.arg = arg;
                this.func = func;
            }
            SQAggregationExpr.prototype.accept = function (visitor, arg) {
                return visitor.visitAggr(this, arg);
            };
            return SQAggregationExpr;
        }(SQExpr));
        data.SQAggregationExpr = SQAggregationExpr;
        var SQPropertyVariationSourceExpr = (function (_super) {
            __extends(SQPropertyVariationSourceExpr, _super);
            function SQPropertyVariationSourceExpr(arg, name, property) {
                debug.assertValue(arg, 'arg');
                debug.assertValue(name, 'name');
                debug.assertValue(property, 'property');
                _super.call(this, 4 /* PropertyVariationSource */);
                this.arg = arg;
                this.name = name;
                this.property = property;
            }
            SQPropertyVariationSourceExpr.prototype.accept = function (visitor, arg) {
                return visitor.visitPropertyVariationSource(this, arg);
            };
            return SQPropertyVariationSourceExpr;
        }(SQExpr));
        data.SQPropertyVariationSourceExpr = SQPropertyVariationSourceExpr;
        var SQHierarchyExpr = (function (_super) {
            __extends(SQHierarchyExpr, _super);
            function SQHierarchyExpr(arg, hierarchy) {
                debug.assertValue(arg, 'arg');
                debug.assertValue(hierarchy, 'hierarchy');
                _super.call(this, 5 /* Hierarchy */);
                this.arg = arg;
                this.hierarchy = hierarchy;
            }
            SQHierarchyExpr.prototype.accept = function (visitor, arg) {
                return visitor.visitHierarchy(this, arg);
            };
            return SQHierarchyExpr;
        }(SQExpr));
        data.SQHierarchyExpr = SQHierarchyExpr;
        var SQHierarchyLevelExpr = (function (_super) {
            __extends(SQHierarchyLevelExpr, _super);
            function SQHierarchyLevelExpr(arg, level) {
                debug.assertValue(arg, 'arg');
                debug.assertValue(level, 'level');
                _super.call(this, 6 /* HierarchyLevel */);
                this.arg = arg;
                this.level = level;
            }
            SQHierarchyLevelExpr.prototype.accept = function (visitor, arg) {
                return visitor.visitHierarchyLevel(this, arg);
            };
            return SQHierarchyLevelExpr;
        }(SQExpr));
        data.SQHierarchyLevelExpr = SQHierarchyLevelExpr;
        var SQAndExpr = (function (_super) {
            __extends(SQAndExpr, _super);
            function SQAndExpr(left, right) {
                debug.assertValue(left, 'left');
                debug.assertValue(right, 'right');
                _super.call(this, 7 /* And */);
                this.left = left;
                this.right = right;
            }
            SQAndExpr.prototype.accept = function (visitor, arg) {
                return visitor.visitAnd(this, arg);
            };
            return SQAndExpr;
        }(SQExpr));
        data.SQAndExpr = SQAndExpr;
        var SQBetweenExpr = (function (_super) {
            __extends(SQBetweenExpr, _super);
            function SQBetweenExpr(arg, lower, upper) {
                debug.assertValue(arg, 'arg');
                debug.assertValue(lower, 'lower');
                debug.assertValue(upper, 'upper');
                _super.call(this, 8 /* Between */);
                this.arg = arg;
                this.lower = lower;
                this.upper = upper;
            }
            SQBetweenExpr.prototype.accept = function (visitor, arg) {
                return visitor.visitBetween(this, arg);
            };
            return SQBetweenExpr;
        }(SQExpr));
        data.SQBetweenExpr = SQBetweenExpr;
        var SQInExpr = (function (_super) {
            __extends(SQInExpr, _super);
            function SQInExpr(args, values) {
                debug.assertValue(args, 'args');
                debug.assertValue(values, 'values');
                _super.call(this, 9 /* In */);
                this.args = args;
                this.values = values;
            }
            SQInExpr.prototype.accept = function (visitor, arg) {
                return visitor.visitIn(this, arg);
            };
            return SQInExpr;
        }(SQExpr));
        data.SQInExpr = SQInExpr;
        var SQOrExpr = (function (_super) {
            __extends(SQOrExpr, _super);
            function SQOrExpr(left, right) {
                debug.assertValue(left, 'left');
                debug.assertValue(right, 'right');
                _super.call(this, 10 /* Or */);
                this.left = left;
                this.right = right;
            }
            SQOrExpr.prototype.accept = function (visitor, arg) {
                return visitor.visitOr(this, arg);
            };
            return SQOrExpr;
        }(SQExpr));
        data.SQOrExpr = SQOrExpr;
        var SQCompareExpr = (function (_super) {
            __extends(SQCompareExpr, _super);
            function SQCompareExpr(comparison, left, right) {
                debug.assertValue(comparison, 'kind');
                debug.assertValue(left, 'left');
                debug.assertValue(right, 'right');
                _super.call(this, 12 /* Compare */);
                this.comparison = comparison;
                this.left = left;
                this.right = right;
            }
            SQCompareExpr.prototype.accept = function (visitor, arg) {
                return visitor.visitCompare(this, arg);
            };
            return SQCompareExpr;
        }(SQExpr));
        data.SQCompareExpr = SQCompareExpr;
        var SQContainsExpr = (function (_super) {
            __extends(SQContainsExpr, _super);
            function SQContainsExpr(left, right) {
                debug.assertValue(left, 'left');
                debug.assertValue(right, 'right');
                _super.call(this, 11 /* Contains */);
                this.left = left;
                this.right = right;
            }
            SQContainsExpr.prototype.accept = function (visitor, arg) {
                return visitor.visitContains(this, arg);
            };
            return SQContainsExpr;
        }(SQExpr));
        data.SQContainsExpr = SQContainsExpr;
        var SQStartsWithExpr = (function (_super) {
            __extends(SQStartsWithExpr, _super);
            function SQStartsWithExpr(left, right) {
                debug.assertValue(left, 'left');
                debug.assertValue(right, 'right');
                _super.call(this, 13 /* StartsWith */);
                this.left = left;
                this.right = right;
            }
            SQStartsWithExpr.prototype.accept = function (visitor, arg) {
                return visitor.visitStartsWith(this, arg);
            };
            return SQStartsWithExpr;
        }(SQExpr));
        data.SQStartsWithExpr = SQStartsWithExpr;
        var SQExistsExpr = (function (_super) {
            __extends(SQExistsExpr, _super);
            function SQExistsExpr(arg) {
                debug.assertValue(arg, 'arg');
                _super.call(this, 14 /* Exists */);
                this.arg = arg;
            }
            SQExistsExpr.prototype.accept = function (visitor, arg) {
                return visitor.visitExists(this, arg);
            };
            return SQExistsExpr;
        }(SQExpr));
        data.SQExistsExpr = SQExistsExpr;
        var SQNotExpr = (function (_super) {
            __extends(SQNotExpr, _super);
            function SQNotExpr(arg) {
                debug.assertValue(arg, 'arg');
                _super.call(this, 15 /* Not */);
                this.arg = arg;
            }
            SQNotExpr.prototype.accept = function (visitor, arg) {
                return visitor.visitNot(this, arg);
            };
            return SQNotExpr;
        }(SQExpr));
        data.SQNotExpr = SQNotExpr;
        var SQConstantExpr = (function (_super) {
            __extends(SQConstantExpr, _super);
            function SQConstantExpr(type, value, valueEncoded) {
                debug.assertValue(type, 'type');
                _super.call(this, 16 /* Constant */);
                this.type = type;
                this.value = value;
                this.valueEncoded = valueEncoded;
            }
            SQConstantExpr.prototype.accept = function (visitor, arg) {
                return visitor.visitConstant(this, arg);
            };
            SQConstantExpr.prototype.getMetadata = function (federatedSchema) {
                debug.assertValue(federatedSchema, 'federatedSchema');
                return {
                    // Returning Measure as the kind for a SQConstantExpr is slightly ambiguous allowing the return object to conform to SQEXprMetadata.
                    // A getType or similiar function in the future would be more appropriate. 
                    kind: 1 /* Measure */,
                    type: this.type,
                };
            };
            return SQConstantExpr;
        }(SQExpr));
        data.SQConstantExpr = SQConstantExpr;
        var SQDateSpanExpr = (function (_super) {
            __extends(SQDateSpanExpr, _super);
            function SQDateSpanExpr(unit, arg) {
                debug.assertValue(unit, 'unit');
                debug.assertValue(arg, 'arg');
                _super.call(this, 17 /* DateSpan */);
                this.unit = unit;
                this.arg = arg;
            }
            SQDateSpanExpr.prototype.accept = function (visitor, arg) {
                return visitor.visitDateSpan(this, arg);
            };
            return SQDateSpanExpr;
        }(SQExpr));
        data.SQDateSpanExpr = SQDateSpanExpr;
        var SQDateAddExpr = (function (_super) {
            __extends(SQDateAddExpr, _super);
            function SQDateAddExpr(unit, amount, arg) {
                debug.assertValue(unit, 'unit');
                debug.assertValue(amount, 'amount');
                debug.assertValue(arg, 'arg');
                _super.call(this, 18 /* DateAdd */);
                this.unit = unit;
                this.arg = arg;
                this.amount = amount;
            }
            SQDateAddExpr.prototype.accept = function (visitor, arg) {
                return visitor.visitDateAdd(this, arg);
            };
            return SQDateAddExpr;
        }(SQExpr));
        data.SQDateAddExpr = SQDateAddExpr;
        var SQNowExpr = (function (_super) {
            __extends(SQNowExpr, _super);
            function SQNowExpr() {
                _super.call(this, 19 /* Now */);
            }
            SQNowExpr.prototype.accept = function (visitor, arg) {
                return visitor.visitNow(this, arg);
            };
            return SQNowExpr;
        }(SQExpr));
        data.SQNowExpr = SQNowExpr;
        var SQDefaultValueExpr = (function (_super) {
            __extends(SQDefaultValueExpr, _super);
            function SQDefaultValueExpr() {
                _super.call(this, 21 /* DefaultValue */);
            }
            SQDefaultValueExpr.prototype.accept = function (visitor, arg) {
                return visitor.visitDefaultValue(this, arg);
            };
            return SQDefaultValueExpr;
        }(SQExpr));
        data.SQDefaultValueExpr = SQDefaultValueExpr;
        var SQAnyValueExpr = (function (_super) {
            __extends(SQAnyValueExpr, _super);
            function SQAnyValueExpr() {
                _super.call(this, 20 /* AnyValue */);
            }
            SQAnyValueExpr.prototype.accept = function (visitor, arg) {
                return visitor.visitAnyValue(this, arg);
            };
            return SQAnyValueExpr;
        }(SQExpr));
        data.SQAnyValueExpr = SQAnyValueExpr;
        var SQFillRuleExpr = (function (_super) {
            __extends(SQFillRuleExpr, _super);
            function SQFillRuleExpr(input, fillRule) {
                debug.assertValue(input, 'input');
                debug.assertValue(fillRule, 'fillRule');
                _super.call(this, 23 /* FillRule */);
                this.input = input;
                this.rule = fillRule;
            }
            SQFillRuleExpr.prototype.accept = function (visitor, arg) {
                return visitor.visitFillRule(this, arg);
            };
            return SQFillRuleExpr;
        }(SQExpr));
        data.SQFillRuleExpr = SQFillRuleExpr;
        var SQResourcePackageItemExpr = (function (_super) {
            __extends(SQResourcePackageItemExpr, _super);
            function SQResourcePackageItemExpr(packageName, packageType, itemName) {
                debug.assertValue(packageName, 'packageName');
                debug.assertValue(itemName, 'itemName');
                _super.call(this, 24 /* ResourcePackageItem */);
                this.packageName = packageName;
                this.packageType = packageType;
                this.itemName = itemName;
            }
            SQResourcePackageItemExpr.prototype.accept = function (visitor, arg) {
                return visitor.visitResourcePackageItem(this, arg);
            };
            return SQResourcePackageItemExpr;
        }(SQExpr));
        data.SQResourcePackageItemExpr = SQResourcePackageItemExpr;
        /** Provides utilities for creating & manipulating expressions. */
        var SQExprBuilder;
        (function (SQExprBuilder) {
            function entity(schema, entity, variable) {
                return new SQEntityExpr(schema, entity, variable);
            }
            SQExprBuilder.entity = entity;
            function columnRef(source, prop) {
                return new SQColumnRefExpr(source, prop);
            }
            SQExprBuilder.columnRef = columnRef;
            function measureRef(source, prop) {
                return new SQMeasureRefExpr(source, prop);
            }
            SQExprBuilder.measureRef = measureRef;
            function aggregate(source, aggregate) {
                return new SQAggregationExpr(source, aggregate);
            }
            SQExprBuilder.aggregate = aggregate;
            function hierarchy(source, hierarchy) {
                return new SQHierarchyExpr(source, hierarchy);
            }
            SQExprBuilder.hierarchy = hierarchy;
            function propertyVariationSource(source, name, property) {
                return new SQPropertyVariationSourceExpr(source, name, property);
            }
            SQExprBuilder.propertyVariationSource = propertyVariationSource;
            function hierarchyLevel(source, level) {
                return new SQHierarchyLevelExpr(source, level);
            }
            SQExprBuilder.hierarchyLevel = hierarchyLevel;
            function and(left, right) {
                if (!left)
                    return right;
                if (!right)
                    return left;
                return new SQAndExpr(left, right);
            }
            SQExprBuilder.and = and;
            function between(arg, lower, upper) {
                return new SQBetweenExpr(arg, lower, upper);
            }
            SQExprBuilder.between = between;
            function inExpr(args, values) {
                return new SQInExpr(args, values);
            }
            SQExprBuilder.inExpr = inExpr;
            function or(left, right) {
                if (!left)
                    return right;
                if (!right)
                    return left;
                if (left instanceof SQInExpr && right instanceof SQInExpr) {
                    var inExpr_1 = tryUseInExprs(left, right);
                    if (inExpr_1)
                        return inExpr_1;
                }
                return new SQOrExpr(left, right);
            }
            SQExprBuilder.or = or;
            function tryUseInExprs(left, right) {
                if (!left.args || !right.args)
                    return;
                var leftArgLen = left.args.length;
                var rightArgLen = right.args.length;
                if (leftArgLen !== rightArgLen)
                    return;
                for (var i = 0; i < leftArgLen; ++i) {
                    if (!SQExpr.equals(left.args[i], right.args[i]))
                        return;
                }
                var combinedValues = left.values.concat(right.values);
                return SQExprBuilder.inExpr(left.args, combinedValues);
            }
            function compare(kind, left, right) {
                return new SQCompareExpr(kind, left, right);
            }
            SQExprBuilder.compare = compare;
            function contains(left, right) {
                return new SQContainsExpr(left, right);
            }
            SQExprBuilder.contains = contains;
            function exists(arg) {
                return new SQExistsExpr(arg);
            }
            SQExprBuilder.exists = exists;
            function equal(left, right) {
                return compare(data.QueryComparisonKind.Equal, left, right);
            }
            SQExprBuilder.equal = equal;
            function not(arg) {
                return new SQNotExpr(arg);
            }
            SQExprBuilder.not = not;
            function startsWith(left, right) {
                return new SQStartsWithExpr(left, right);
            }
            SQExprBuilder.startsWith = startsWith;
            function nullConstant() {
                return new SQConstantExpr(powerbi.ValueType.fromExtendedType(powerbi.ExtendedType.Null), null, data.PrimitiveValueEncoding.nullEncoding());
            }
            SQExprBuilder.nullConstant = nullConstant;
            function now() {
                return new SQNowExpr();
            }
            SQExprBuilder.now = now;
            function defaultValue() {
                return new SQDefaultValueExpr();
            }
            SQExprBuilder.defaultValue = defaultValue;
            function anyValue() {
                return new SQAnyValueExpr();
            }
            SQExprBuilder.anyValue = anyValue;
            function boolean(value) {
                return new SQConstantExpr(powerbi.ValueType.fromExtendedType(powerbi.ExtendedType.Boolean), value, data.PrimitiveValueEncoding.boolean(value));
            }
            SQExprBuilder.boolean = boolean;
            function dateAdd(unit, amount, arg) {
                return new SQDateAddExpr(unit, amount, arg);
            }
            SQExprBuilder.dateAdd = dateAdd;
            function dateTime(value, valueEncoded) {
                if (valueEncoded === undefined)
                    valueEncoded = data.PrimitiveValueEncoding.dateTime(value);
                return new SQConstantExpr(powerbi.ValueType.fromExtendedType(powerbi.ExtendedType.DateTime), value, valueEncoded);
            }
            SQExprBuilder.dateTime = dateTime;
            function dateSpan(unit, arg) {
                return new SQDateSpanExpr(unit, arg);
            }
            SQExprBuilder.dateSpan = dateSpan;
            function decimal(value, valueEncoded) {
                if (valueEncoded === undefined)
                    valueEncoded = data.PrimitiveValueEncoding.decimal(value);
                return new SQConstantExpr(powerbi.ValueType.fromExtendedType(powerbi.ExtendedType.Decimal), value, valueEncoded);
            }
            SQExprBuilder.decimal = decimal;
            function double(value, valueEncoded) {
                if (valueEncoded === undefined)
                    valueEncoded = data.PrimitiveValueEncoding.double(value);
                return new SQConstantExpr(powerbi.ValueType.fromExtendedType(powerbi.ExtendedType.Double), value, valueEncoded);
            }
            SQExprBuilder.double = double;
            function integer(value, valueEncoded) {
                if (valueEncoded === undefined)
                    valueEncoded = data.PrimitiveValueEncoding.integer(value);
                return new SQConstantExpr(powerbi.ValueType.fromExtendedType(powerbi.ExtendedType.Integer), value, valueEncoded);
            }
            SQExprBuilder.integer = integer;
            function text(value, valueEncoded) {
                debug.assert(!valueEncoded || valueEncoded === data.PrimitiveValueEncoding.text(value), 'Incorrect encoded value specified.');
                return new SQConstantExpr(powerbi.ValueType.fromExtendedType(powerbi.ExtendedType.Text), value, valueEncoded || data.PrimitiveValueEncoding.text(value));
            }
            SQExprBuilder.text = text;
            /** Returns an SQExpr that evaluates to the constant value. */
            function typedConstant(value, type) {
                if (value == null)
                    return nullConstant();
                if (_.isBoolean(value)) {
                    return boolean(value);
                }
                if (_.isString(value)) {
                    return text(value);
                }
                if (_.isNumber(value)) {
                    if (type.integer && powerbi.Double.isInteger(value))
                        return integer(value);
                    return double(value);
                }
                if (value instanceof Date) {
                    return dateTime(value);
                }
            }
            SQExprBuilder.typedConstant = typedConstant;
            function arithmetic(left, right, operator) {
                return new SQArithmeticExpr(left, right, operator);
            }
            SQExprBuilder.arithmetic = arithmetic;
            function scopedEval(expression, scope) {
                return new SQScopedEvalExpr(expression, scope);
            }
            SQExprBuilder.scopedEval = scopedEval;
            function setAggregate(expr, aggregate) {
                return SQExprChangeAggregateRewriter.rewrite(expr, aggregate);
            }
            SQExprBuilder.setAggregate = setAggregate;
            function removeAggregate(expr) {
                return SQExprRemoveAggregateRewriter.rewrite(expr);
            }
            SQExprBuilder.removeAggregate = removeAggregate;
            function removeEntityVariables(expr) {
                return SQExprRemoveEntityVariablesRewriter.rewrite(expr);
            }
            SQExprBuilder.removeEntityVariables = removeEntityVariables;
            function fillRule(expr, rule) {
                debug.assertValue(expr, 'expr');
                debug.assertValue(rule, 'rule');
                return new SQFillRuleExpr(expr, rule);
            }
            SQExprBuilder.fillRule = fillRule;
            function resourcePackageItem(packageName, packageType, itemName) {
                return new SQResourcePackageItemExpr(packageName, packageType, itemName);
            }
            SQExprBuilder.resourcePackageItem = resourcePackageItem;
        })(SQExprBuilder = data.SQExprBuilder || (data.SQExprBuilder = {}));
        /** Provides utilities for obtaining information about expressions. */
        var SQExprInfo;
        (function (SQExprInfo) {
            function getAggregate(expr) {
                return SQExprAggregateInfoVisitor.getAggregate(expr);
            }
            SQExprInfo.getAggregate = getAggregate;
        })(SQExprInfo = data.SQExprInfo || (data.SQExprInfo = {}));
        var SQExprEqualityVisitor = (function () {
            function SQExprEqualityVisitor(ignoreCase) {
                this.ignoreCase = ignoreCase;
            }
            SQExprEqualityVisitor.run = function (x, y, ignoreCase) {
                // Normalize falsy to null
                x = x || null;
                y = y || null;
                if (x === y)
                    return true;
                if (!x !== !y)
                    return false;
                debug.assertValue(x, 'x');
                debug.assertValue(y, 'y');
                if (ignoreCase)
                    return x.accept(SQExprEqualityVisitor.ignoreCaseInstance, y);
                return x.accept(SQExprEqualityVisitor.instance, y);
            };
            SQExprEqualityVisitor.prototype.visitColumnRef = function (expr, comparand) {
                return comparand instanceof SQColumnRefExpr &&
                    expr.ref === comparand.ref &&
                    this.equals(expr.source, comparand.source);
            };
            SQExprEqualityVisitor.prototype.visitMeasureRef = function (expr, comparand) {
                return comparand instanceof SQMeasureRefExpr &&
                    expr.ref === comparand.ref &&
                    this.equals(expr.source, comparand.source);
            };
            SQExprEqualityVisitor.prototype.visitAggr = function (expr, comparand) {
                return comparand instanceof SQAggregationExpr &&
                    expr.func === comparand.func &&
                    this.equals(expr.arg, comparand.arg);
            };
            SQExprEqualityVisitor.prototype.visitHierarchy = function (expr, comparand) {
                return comparand instanceof SQHierarchyExpr &&
                    expr.hierarchy === comparand.hierarchy &&
                    this.equals(expr.arg, comparand.arg);
            };
            SQExprEqualityVisitor.prototype.visitHierarchyLevel = function (expr, comparand) {
                return comparand instanceof SQHierarchyLevelExpr &&
                    expr.level === comparand.level &&
                    this.equals(expr.arg, comparand.arg);
            };
            SQExprEqualityVisitor.prototype.visitPropertyVariationSource = function (expr, comparand) {
                return comparand instanceof SQPropertyVariationSourceExpr &&
                    expr.name === comparand.name &&
                    expr.property === comparand.property &&
                    this.equals(expr.arg, comparand.arg);
            };
            SQExprEqualityVisitor.prototype.visitBetween = function (expr, comparand) {
                return comparand instanceof SQBetweenExpr &&
                    this.equals(expr.arg, comparand.arg) &&
                    this.equals(expr.lower, comparand.lower) &&
                    this.equals(expr.upper, comparand.upper);
            };
            SQExprEqualityVisitor.prototype.visitIn = function (expr, comparand) {
                if (!(comparand instanceof SQInExpr) || !this.equalsAll(expr.args, comparand.args))
                    return false;
                var values = expr.values, compareValues = comparand.values;
                if (values.length !== compareValues.length)
                    return false;
                for (var i = 0, len = values.length; i < len; i++) {
                    if (!this.equalsAll(values[i], compareValues[i]))
                        return false;
                }
                return true;
            };
            SQExprEqualityVisitor.prototype.visitEntity = function (expr, comparand) {
                return comparand instanceof SQEntityExpr &&
                    expr.schema === comparand.schema &&
                    expr.entity === comparand.entity &&
                    this.optionalEqual(expr.variable, comparand.variable);
            };
            SQExprEqualityVisitor.prototype.visitAnd = function (expr, comparand) {
                return comparand instanceof SQAndExpr &&
                    this.equals(expr.left, comparand.left) &&
                    this.equals(expr.right, comparand.right);
            };
            SQExprEqualityVisitor.prototype.visitOr = function (expr, comparand) {
                return comparand instanceof SQOrExpr &&
                    this.equals(expr.left, comparand.left) &&
                    this.equals(expr.right, comparand.right);
            };
            SQExprEqualityVisitor.prototype.visitCompare = function (expr, comparand) {
                return comparand instanceof SQCompareExpr &&
                    expr.comparison === comparand.comparison &&
                    this.equals(expr.left, comparand.left) &&
                    this.equals(expr.right, comparand.right);
            };
            SQExprEqualityVisitor.prototype.visitContains = function (expr, comparand) {
                return comparand instanceof SQContainsExpr &&
                    this.equals(expr.left, comparand.left) &&
                    this.equals(expr.right, comparand.right);
            };
            SQExprEqualityVisitor.prototype.visitDateSpan = function (expr, comparand) {
                return comparand instanceof SQDateSpanExpr &&
                    expr.unit === comparand.unit &&
                    this.equals(expr.arg, comparand.arg);
            };
            SQExprEqualityVisitor.prototype.visitDateAdd = function (expr, comparand) {
                return comparand instanceof SQDateAddExpr &&
                    expr.unit === comparand.unit &&
                    expr.amount === comparand.amount &&
                    this.equals(expr.arg, comparand.arg);
            };
            SQExprEqualityVisitor.prototype.visitExists = function (expr, comparand) {
                return comparand instanceof SQExistsExpr &&
                    this.equals(expr.arg, comparand.arg);
            };
            SQExprEqualityVisitor.prototype.visitNot = function (expr, comparand) {
                return comparand instanceof SQNotExpr &&
                    this.equals(expr.arg, comparand.arg);
            };
            SQExprEqualityVisitor.prototype.visitNow = function (expr, comparand) {
                return comparand instanceof SQNowExpr;
            };
            SQExprEqualityVisitor.prototype.visitDefaultValue = function (expr, comparand) {
                return comparand instanceof SQDefaultValueExpr;
            };
            SQExprEqualityVisitor.prototype.visitAnyValue = function (expr, comparand) {
                return comparand instanceof SQAnyValueExpr;
            };
            SQExprEqualityVisitor.prototype.visitResourcePackageItem = function (expr, comparand) {
                return comparand instanceof SQResourcePackageItemExpr &&
                    expr.packageName === comparand.packageName &&
                    expr.packageType === comparand.packageType &&
                    expr.itemName === comparand.itemName;
            };
            SQExprEqualityVisitor.prototype.visitStartsWith = function (expr, comparand) {
                return comparand instanceof SQStartsWithExpr &&
                    this.equals(expr.left, comparand.left) &&
                    this.equals(expr.right, comparand.right);
            };
            SQExprEqualityVisitor.prototype.visitConstant = function (expr, comparand) {
                if (comparand instanceof SQConstantExpr && expr.type === comparand.type)
                    return expr.type.text && this.ignoreCase ?
                        StringExtensions.equalIgnoreCase(expr.valueEncoded, comparand.valueEncoded) :
                        expr.valueEncoded === comparand.valueEncoded;
                return false;
            };
            SQExprEqualityVisitor.prototype.visitFillRule = function (expr, comparand) {
                if (comparand instanceof SQFillRuleExpr && this.equals(expr.input, comparand.input)) {
                    var leftRule = expr.rule, rightRule = comparand.rule;
                    if (leftRule === rightRule)
                        return true;
                    var leftLinearGradient2 = leftRule.linearGradient2, rightLinearGradient2 = rightRule.linearGradient2;
                    if (leftLinearGradient2 && rightLinearGradient2) {
                        return this.visitLinearGradient2(leftLinearGradient2, rightLinearGradient2);
                    }
                    var leftLinearGradient3 = leftRule.linearGradient3, rightLinearGradient3 = rightRule.linearGradient3;
                    if (leftLinearGradient3 && rightLinearGradient3) {
                        return this.visitLinearGradient3(leftLinearGradient3, rightLinearGradient3);
                    }
                }
                return false;
            };
            SQExprEqualityVisitor.prototype.visitLinearGradient2 = function (left2, right2) {
                debug.assertValue(left2, 'left2');
                debug.assertValue(right2, 'right2');
                return this.equalsFillRuleStop(left2.min, right2.min) &&
                    this.equalsFillRuleStop(left2.max, right2.max);
            };
            SQExprEqualityVisitor.prototype.visitLinearGradient3 = function (left3, right3) {
                debug.assertValue(left3, 'left3');
                debug.assertValue(right3, 'right3');
                return this.equalsFillRuleStop(left3.min, right3.min) &&
                    this.equalsFillRuleStop(left3.mid, right3.mid) &&
                    this.equalsFillRuleStop(left3.max, right3.max);
            };
            SQExprEqualityVisitor.prototype.equalsFillRuleStop = function (stop1, stop2) {
                debug.assertValue(stop1, 'stop1');
                debug.assertValue(stop2, 'stop2');
                if (!this.equals(stop1.color, stop2.color))
                    return false;
                if (!stop1.value)
                    return stop1.value === stop2.value;
                return this.equals(stop1.value, stop2.value);
            };
            SQExprEqualityVisitor.prototype.visitArithmetic = function (expr, comparand) {
                return comparand instanceof SQArithmeticExpr &&
                    expr.operator === comparand.operator &&
                    this.equals(expr.left, comparand.left) &&
                    this.equals(expr.right, comparand.right);
            };
            SQExprEqualityVisitor.prototype.visitScopedEval = function (expr, comparand) {
                return comparand instanceof SQScopedEvalExpr &&
                    this.equals(expr.expression, comparand.expression) &&
                    this.equalsAll(expr.scope, comparand.scope);
            };
            SQExprEqualityVisitor.prototype.optionalEqual = function (x, y) {
                // Only check equality if both values are specified.
                if (x && y)
                    return x === y;
                return true;
            };
            SQExprEqualityVisitor.prototype.equals = function (x, y) {
                return x.accept(this, y);
            };
            SQExprEqualityVisitor.prototype.equalsAll = function (x, y) {
                var len = x.length;
                if (len !== y.length)
                    return false;
                for (var i = 0; i < len; i++) {
                    if (!this.equals(x[i], y[i]))
                        return false;
                }
                return true;
            };
            SQExprEqualityVisitor.instance = new SQExprEqualityVisitor(/* ignoreCase */ false);
            SQExprEqualityVisitor.ignoreCaseInstance = new SQExprEqualityVisitor(true);
            return SQExprEqualityVisitor;
        }());
        /** Rewrites a root-level expression. */
        var SQExprRootRewriter = (function (_super) {
            __extends(SQExprRootRewriter, _super);
            function SQExprRootRewriter() {
                _super.apply(this, arguments);
            }
            SQExprRootRewriter.prototype.visitDefault = function (expr) {
                return expr;
            };
            return SQExprRootRewriter;
        }(data.DefaultSQExprVisitor));
        var SQExprValidationVisitor = (function (_super) {
            __extends(SQExprValidationVisitor, _super);
            function SQExprValidationVisitor(schema, aggrUtils, errors) {
                debug.assertValue(schema, 'schema');
                debug.assertValue(aggrUtils, 'aggrUtils');
                _super.call(this);
                this.schema = schema;
                this.aggrUtils = aggrUtils;
                if (errors)
                    this.errors = errors;
            }
            SQExprValidationVisitor.prototype.visitIn = function (expr) {
                var inExpr = _super.prototype.visitIn.call(this, expr);
                var args = inExpr.args;
                var values = inExpr.values;
                for (var _i = 0, values_2 = values; _i < values_2.length; _i++) {
                    var valueTuple = values_2[_i];
                    debug.assert(valueTuple.length === args.length, 'args and value tuple are not the same length');
                    for (var i = 0, len = valueTuple.length; i < len; ++i)
                        this.validateCompatibleType(args[i], valueTuple[i]);
                }
                return inExpr;
            };
            SQExprValidationVisitor.prototype.visitCompare = function (expr) {
                var compareExpr = _super.prototype.visitCompare.call(this, expr);
                this.validateCompatibleType(compareExpr.left, compareExpr.right);
                return compareExpr;
            };
            SQExprValidationVisitor.prototype.visitColumnRef = function (expr) {
                var fieldExpr = data.SQExprConverter.asFieldPattern(expr);
                if (fieldExpr) {
                    var fieldExprItem = data.FieldExprPattern.toFieldExprEntityItemPattern(fieldExpr);
                    var entity = this.validateEntity(fieldExprItem.schema, fieldExprItem.entity);
                    if (entity) {
                        var prop = entity.properties.withName(fieldExpr.column.name);
                        if (!prop ||
                            prop.kind !== 0 /* Column */ ||
                            !this.isQueryable(fieldExpr))
                            this.register(3 /* invalidColumnReference */);
                    }
                }
                return expr;
            };
            SQExprValidationVisitor.prototype.visitMeasureRef = function (expr) {
                var fieldExpr = data.SQExprConverter.asFieldPattern(expr);
                if (fieldExpr) {
                    var fieldExprItem = data.FieldExprPattern.toFieldExprEntityItemPattern(fieldExpr);
                    var entity = this.validateEntity(fieldExprItem.schema, fieldExprItem.entity);
                    if (entity) {
                        var prop = entity.properties.withName(fieldExpr.measure.name);
                        if (!prop ||
                            prop.kind !== 1 /* Measure */ ||
                            !this.isQueryable(fieldExpr))
                            this.register(4 /* invalidMeasureReference */);
                    }
                }
                return expr;
            };
            SQExprValidationVisitor.prototype.visitAggr = function (expr) {
                var aggregateExpr = _super.prototype.visitAggr.call(this, expr);
                var columnRefExpr = SQExprColumnRefInfoVisitor.getColumnRefSQExpr(this.schema, aggregateExpr.arg);
                if (columnRefExpr) {
                    if (!this.aggrUtils.isSupportedAggregate(expr, this.schema, expr.func, /*targetTypes*/ null))
                        this.register(0 /* invalidAggregateFunction */);
                }
                return aggregateExpr;
            };
            SQExprValidationVisitor.prototype.visitHierarchy = function (expr) {
                var fieldExpr = data.SQExprConverter.asFieldPattern(expr);
                if (fieldExpr) {
                    var fieldExprItem = fieldExpr.hierarchy;
                    if (fieldExprItem) {
                        this.validateHierarchy(fieldExprItem.schema, fieldExprItem.entity, fieldExprItem.name);
                    }
                    else {
                        this.register(5 /* invalidHierarchyReference */);
                    }
                }
                return expr;
            };
            SQExprValidationVisitor.prototype.visitHierarchyLevel = function (expr) {
                var fieldExpr = data.SQExprConverter.asFieldPattern(expr);
                if (fieldExpr) {
                    var hierarchyLevelFieldExprItem = fieldExpr.hierarchyLevel;
                    if (hierarchyLevelFieldExprItem) {
                        this.validateHierarchyLevel(hierarchyLevelFieldExprItem.schema, hierarchyLevelFieldExprItem.entity, hierarchyLevelFieldExprItem.name, hierarchyLevelFieldExprItem.level);
                    }
                    else if (!fieldExpr.columnHierarchyLevelVariation) {
                        this.register(6 /* invalidHierarchyLevelReference */);
                    }
                }
                return expr;
            };
            SQExprValidationVisitor.prototype.visitEntity = function (expr) {
                this.validateEntity(expr.schema, expr.entity);
                return expr;
            };
            SQExprValidationVisitor.prototype.visitContains = function (expr) {
                this.validateOperandsAndTypeForStartOrContains(expr.left, expr.right);
                return expr;
            };
            SQExprValidationVisitor.prototype.visitStartsWith = function (expr) {
                this.validateOperandsAndTypeForStartOrContains(expr.left, expr.right);
                return expr;
            };
            SQExprValidationVisitor.prototype.visitArithmetic = function (expr) {
                this.validateArithmeticTypes(expr.left, expr.right);
                return expr;
            };
            SQExprValidationVisitor.prototype.visitScopedEval = function (expr) {
                // No validation necessary
                return expr;
            };
            SQExprValidationVisitor.prototype.validateOperandsAndTypeForStartOrContains = function (left, right) {
                if (left instanceof SQColumnRefExpr) {
                    this.visitColumnRef(left);
                }
                else if (left instanceof SQHierarchyLevelExpr) {
                    this.visitHierarchyLevel(left);
                }
                else {
                    this.register(7 /* invalidLeftOperandType */);
                }
                if (!(right instanceof SQConstantExpr) || !right.type.text)
                    this.register(8 /* invalidRightOperandType */);
                else
                    this.validateCompatibleType(left, right);
            };
            SQExprValidationVisitor.prototype.validateArithmeticTypes = function (left, right) {
                if (!data.SQExprUtils.supportsArithmetic(left, this.schema))
                    this.register(7 /* invalidLeftOperandType */);
                if (!data.SQExprUtils.supportsArithmetic(right, this.schema))
                    this.register(8 /* invalidRightOperandType */);
            };
            SQExprValidationVisitor.prototype.validateCompatibleType = function (left, right) {
                var leftMetadata = left.getMetadata(this.schema), leftType = leftMetadata && leftMetadata.type, rightMetadata = right.getMetadata(this.schema), rightType = rightMetadata && rightMetadata.type;
                if (leftType && rightType && !leftType.isCompatibleFrom(rightType))
                    this.register(9 /* invalidValueType */);
            };
            SQExprValidationVisitor.prototype.validateEntity = function (schemaName, entityName) {
                var schema = this.schema.schema(schemaName);
                if (schema) {
                    var entity = schema.entities.withName(entityName);
                    if (entity)
                        return entity;
                    this.register(2 /* invalidEntityReference */);
                }
                else {
                    this.register(1 /* invalidSchemaReference */);
                }
            };
            SQExprValidationVisitor.prototype.validateHierarchy = function (schemaName, entityName, hierarchyName) {
                var entity = this.validateEntity(schemaName, entityName);
                if (entity) {
                    var hierarchy = entity.hierarchies.withName(hierarchyName);
                    if (hierarchy)
                        return hierarchy;
                    this.register(5 /* invalidHierarchyReference */);
                }
            };
            SQExprValidationVisitor.prototype.validateHierarchyLevel = function (schemaName, entityName, hierarchyName, levelName) {
                var hierarchy = this.validateHierarchy(schemaName, entityName, hierarchyName);
                if (hierarchy) {
                    var hierarchyLevel = hierarchy.levels.withName(levelName);
                    if (hierarchyLevel)
                        return hierarchyLevel;
                    this.register(6 /* invalidHierarchyLevelReference */);
                }
            };
            SQExprValidationVisitor.prototype.register = function (error) {
                if (!this.errors)
                    this.errors = [];
                this.errors.push(error);
            };
            SQExprValidationVisitor.prototype.isQueryable = function (fieldExpr) {
                var fieldExprItem = data.FieldExprPattern.toFieldExprEntityItemPattern(fieldExpr);
                if (fieldExpr.hierarchyLevel || fieldExpr.hierarchyLevelAggr) {
                    var hierarchyLevelConceptualProperty = data.SQHierarchyExprUtils.getConceptualHierarchyLevelFromExpr(this.schema, fieldExpr);
                    return hierarchyLevelConceptualProperty && hierarchyLevelConceptualProperty.column.queryable !== 1 /* Error */;
                }
                return this.schema.schema(fieldExprItem.schema).findProperty(fieldExprItem.entity, data.FieldExprPattern.getPropertyName(fieldExpr)).queryable !== 1 /* Error */;
            };
            return SQExprValidationVisitor;
        }(data.SQExprRewriter));
        data.SQExprValidationVisitor = SQExprValidationVisitor;
        /** Returns an expression's aggregate function, or undefined if it doesn't have one. */
        var SQExprAggregateInfoVisitor = (function (_super) {
            __extends(SQExprAggregateInfoVisitor, _super);
            function SQExprAggregateInfoVisitor() {
                _super.apply(this, arguments);
            }
            SQExprAggregateInfoVisitor.prototype.visitAggr = function (expr) {
                return expr.func;
            };
            SQExprAggregateInfoVisitor.prototype.visitDefault = function (expr) {
                return;
            };
            SQExprAggregateInfoVisitor.getAggregate = function (expr) {
                var visitor = new SQExprAggregateInfoVisitor();
                return expr.accept(visitor);
            };
            return SQExprAggregateInfoVisitor;
        }(data.DefaultSQExprVisitor));
        /** Returns a SQExprColumnRef expression or undefined.*/
        var SQExprColumnRefInfoVisitor = (function (_super) {
            __extends(SQExprColumnRefInfoVisitor, _super);
            function SQExprColumnRefInfoVisitor(schema) {
                _super.call(this);
                this.schema = schema;
            }
            SQExprColumnRefInfoVisitor.prototype.visitColumnRef = function (expr) {
                return expr;
            };
            SQExprColumnRefInfoVisitor.prototype.visitHierarchyLevel = function (expr) {
                var ref = expr.level;
                var hierarchy = (expr.arg);
                var sourceExpr = hierarchy.accept(this);
                if (hierarchy && hierarchy.arg instanceof SQPropertyVariationSourceExpr) {
                    var propertyVariationSource = hierarchy.arg;
                    var targetEntity = sourceExpr.getTargetEntityForVariation(this.schema, propertyVariationSource.name);
                    if (sourceExpr && targetEntity) {
                        var schemaName = (sourceExpr.source).schema;
                        var targetEntityExpr = SQExprBuilder.entity(schemaName, targetEntity);
                        var schemaHierarchy = this.schema.schema(schemaName).findHierarchy(targetEntity, hierarchy.hierarchy);
                        if (schemaHierarchy) {
                            for (var _i = 0, _a = schemaHierarchy.levels; _i < _a.length; _i++) {
                                var level = _a[_i];
                                if (level.name === ref)
                                    return new SQColumnRefExpr(targetEntityExpr, level.column.name);
                            }
                        }
                    }
                }
                else {
                    var entityExpr = (hierarchy.arg);
                    var hierarchyLevelRef = data.SQHierarchyExprUtils.getConceptualHierarchyLevel(this.schema, entityExpr.schema, entityExpr.entity, hierarchy.hierarchy, expr.level);
                    if (hierarchyLevelRef)
                        return new SQColumnRefExpr(hierarchy.arg, hierarchyLevelRef.column.name);
                }
            };
            SQExprColumnRefInfoVisitor.prototype.visitHierarchy = function (expr) {
                return expr.arg.accept(this);
            };
            SQExprColumnRefInfoVisitor.prototype.visitPropertyVariationSource = function (expr) {
                var propertyName = expr.property;
                return new SQColumnRefExpr(expr.arg, propertyName);
            };
            SQExprColumnRefInfoVisitor.prototype.visitAggr = function (expr) {
                return expr.arg.accept(this);
            };
            SQExprColumnRefInfoVisitor.prototype.visitDefault = function (expr) {
                return;
            };
            SQExprColumnRefInfoVisitor.getColumnRefSQExpr = function (schema, expr) {
                var visitor = new SQExprColumnRefInfoVisitor(schema);
                return expr.accept(visitor);
            };
            return SQExprColumnRefInfoVisitor;
        }(data.DefaultSQExprVisitor));
        /** Returns a SQEntityExpr expression or undefined.*/
        var SQEntityExprInfoVisitor = (function (_super) {
            __extends(SQEntityExprInfoVisitor, _super);
            function SQEntityExprInfoVisitor(schema) {
                _super.call(this);
                this.schema = schema;
            }
            SQEntityExprInfoVisitor.prototype.visitEntity = function (expr) {
                return expr;
            };
            SQEntityExprInfoVisitor.prototype.visitColumnRef = function (expr) {
                return SQEntityExprInfoVisitor.getEntity(expr);
            };
            SQEntityExprInfoVisitor.prototype.visitHierarchyLevel = function (expr) {
                var columnRef = SQEntityExprInfoVisitor.getColumnRefSQExpr(this.schema, expr);
                return SQEntityExprInfoVisitor.getEntity(columnRef);
            };
            SQEntityExprInfoVisitor.prototype.visitHierarchy = function (expr) {
                return expr.arg.accept(this);
            };
            SQEntityExprInfoVisitor.prototype.visitPropertyVariationSource = function (expr) {
                var columnRef = SQEntityExprInfoVisitor.getColumnRefSQExpr(this.schema, expr);
                return SQEntityExprInfoVisitor.getEntity(columnRef);
            };
            SQEntityExprInfoVisitor.prototype.visitAggr = function (expr) {
                var columnRef = SQEntityExprInfoVisitor.getColumnRefSQExpr(this.schema, expr);
                return SQEntityExprInfoVisitor.getEntity(columnRef);
            };
            SQEntityExprInfoVisitor.prototype.visitMeasureRef = function (expr) {
                return expr.source.accept(this);
            };
            SQEntityExprInfoVisitor.getColumnRefSQExpr = function (schema, expr) {
                var visitor = new SQExprColumnRefInfoVisitor(schema);
                return expr.accept(visitor);
            };
            SQEntityExprInfoVisitor.getEntity = function (columnRef) {
                var field = data.SQExprConverter.asFieldPattern(columnRef);
                var column = field.column;
                return SQExprBuilder.entity(column.schema, column.entity, column.entityVar);
            };
            SQEntityExprInfoVisitor.getEntityExpr = function (schema, expr) {
                var visitor = new SQEntityExprInfoVisitor(schema);
                return expr.accept(visitor);
            };
            return SQEntityExprInfoVisitor;
        }(data.DefaultSQExprVisitor));
        var SQExprChangeAggregateRewriter = (function (_super) {
            __extends(SQExprChangeAggregateRewriter, _super);
            function SQExprChangeAggregateRewriter(func) {
                debug.assertValue(func, 'func');
                _super.call(this);
                this.func = func;
            }
            SQExprChangeAggregateRewriter.prototype.visitAggr = function (expr) {
                if (expr.func === this.func)
                    return expr;
                return new SQAggregationExpr(expr.arg, this.func);
            };
            SQExprChangeAggregateRewriter.prototype.visitColumnRef = function (expr) {
                return new SQAggregationExpr(expr, this.func);
            };
            SQExprChangeAggregateRewriter.rewrite = function (expr, func) {
                debug.assertValue(expr, 'expr');
                debug.assertValue(func, 'func');
                var rewriter = new SQExprChangeAggregateRewriter(func);
                return expr.accept(rewriter);
            };
            return SQExprChangeAggregateRewriter;
        }(SQExprRootRewriter));
        var SQExprRemoveAggregateRewriter = (function (_super) {
            __extends(SQExprRemoveAggregateRewriter, _super);
            function SQExprRemoveAggregateRewriter() {
                _super.apply(this, arguments);
            }
            SQExprRemoveAggregateRewriter.prototype.visitAggr = function (expr) {
                return expr.arg;
            };
            SQExprRemoveAggregateRewriter.rewrite = function (expr) {
                debug.assertValue(expr, 'expr');
                return expr.accept(SQExprRemoveAggregateRewriter.instance);
            };
            SQExprRemoveAggregateRewriter.instance = new SQExprRemoveAggregateRewriter();
            return SQExprRemoveAggregateRewriter;
        }(SQExprRootRewriter));
        var SQExprRemoveEntityVariablesRewriter = (function (_super) {
            __extends(SQExprRemoveEntityVariablesRewriter, _super);
            function SQExprRemoveEntityVariablesRewriter() {
                _super.apply(this, arguments);
            }
            SQExprRemoveEntityVariablesRewriter.prototype.visitEntity = function (expr) {
                if (expr.variable)
                    return SQExprBuilder.entity(expr.schema, expr.entity);
                return expr;
            };
            SQExprRemoveEntityVariablesRewriter.rewrite = function (expr) {
                debug.assertValue(expr, 'expr');
                return expr.accept(SQExprRemoveEntityVariablesRewriter.instance);
            };
            SQExprRemoveEntityVariablesRewriter.instance = new SQExprRemoveEntityVariablesRewriter();
            return SQExprRemoveEntityVariablesRewriter;
        }(data.SQExprRewriter));
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
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
    var data;
    (function (data) {
        var ArrayExtensions = jsCommon.ArrayExtensions;
        var StringExtensions = jsCommon.StringExtensions;
        var SQExprUtils;
        (function (SQExprUtils) {
            function supportsArithmetic(expr, schema) {
                var metadata = expr.getMetadata(schema), type = metadata && metadata.type;
                if (!metadata || !type) {
                    return false;
                }
                return type.numeric || type.dateTime || type.duration;
            }
            SQExprUtils.supportsArithmetic = supportsArithmetic;
            function indexOfExpr(items, searchElement) {
                debug.assertValue(items, 'items');
                debug.assertValue(searchElement, 'searchElement');
                for (var i = 0, len = items.length; i < len; i++) {
                    if (data.SQExpr.equals(items[i], searchElement))
                        return i;
                }
                return -1;
            }
            SQExprUtils.indexOfExpr = indexOfExpr;
            function sequenceEqual(x, y) {
                debug.assertValue(x, 'x');
                debug.assertValue(y, 'y');
                var len = x.length;
                if (len !== y.length)
                    return false;
                for (var i = 0; i < len; i++) {
                    if (!data.SQExpr.equals(x[i], y[i]))
                        return false;
                }
                return true;
            }
            SQExprUtils.sequenceEqual = sequenceEqual;
            function uniqueName(namedItems, expr, exprDefaultName) {
                debug.assertValue(namedItems, 'namedItems');
                // Determine all names
                var names = {};
                for (var i = 0, len = namedItems.length; i < len; i++)
                    names[namedItems[i].name] = true;
                return StringExtensions.findUniqueName(names, exprDefaultName || defaultName(expr));
            }
            SQExprUtils.uniqueName = uniqueName;
            /** Generates a default expression name  */
            function defaultName(expr, fallback) {
                if (fallback === void 0) { fallback = 'select'; }
                if (!expr)
                    return fallback;
                return expr.accept(SQExprDefaultNameGenerator.instance, fallback);
            }
            SQExprUtils.defaultName = defaultName;
            /** Gets a value indicating whether the expr is a model measure or an aggregate. */
            function isMeasure(expr) {
                debug.assertValue(expr, 'expr');
                return expr.accept(IsMeasureVisitor.instance);
            }
            SQExprUtils.isMeasure = isMeasure;
            /** Gets a value indicating whether the expr is an AnyValue or equals comparison to AnyValue*/
            function isAnyValue(expr) {
                debug.assertValue(expr, 'expr');
                return expr.accept(IsAnyValueVisitor.instance);
            }
            SQExprUtils.isAnyValue = isAnyValue;
            /** Gets a value indicating whether the expr is a DefaultValue or equals comparison to DefaultValue*/
            function isDefaultValue(expr) {
                debug.assertValue(expr, 'expr');
                return expr.accept(IsDefaultValueVisitor.instance);
            }
            SQExprUtils.isDefaultValue = isDefaultValue;
            function discourageAggregation(expr, schema) {
                var capabilities = getSchemaCapabilities(expr, schema);
                return capabilities && capabilities.discourageQueryAggregateUsage;
            }
            SQExprUtils.discourageAggregation = discourageAggregation;
            function getAggregateBehavior(expr, schema) {
                debug.assertValue(expr, 'expr');
                debug.assertValue(schema, 'schema');
                var column = getConceptualColumn(expr, schema);
                if (column)
                    return column.aggregateBehavior;
            }
            SQExprUtils.getAggregateBehavior = getAggregateBehavior;
            function getSchemaCapabilities(expr, schema) {
                debug.assertValue(expr, 'expr');
                debug.assertValue(schema, 'schema');
                var field = data.SQExprConverter.asFieldPattern(expr);
                if (!field)
                    return;
                var fieldExprItem = data.FieldExprPattern.toFieldExprEntityItemPattern(field);
                var conceptualSchema = schema.schema(fieldExprItem.schema);
                if (conceptualSchema)
                    return conceptualSchema.capabilities;
            }
            SQExprUtils.getSchemaCapabilities = getSchemaCapabilities;
            function getKpiMetadata(expr, schema) {
                var kpiStatusProperty = getKpiStatusProperty(expr, schema);
                if (kpiStatusProperty)
                    return kpiStatusProperty.kpiValue.measure.kpi.statusMetadata;
                var kpiTrendProperty = getKpiTrendProperty(expr, schema);
                if (kpiTrendProperty)
                    return kpiTrendProperty.kpiValue.measure.kpi.trendMetadata;
            }
            SQExprUtils.getKpiMetadata = getKpiMetadata;
            function getConceptualEntity(entityExpr, schema) {
                debug.assertValue(entityExpr, 'entityExpr');
                var conceptualEntity = schema
                    .schema(entityExpr.schema)
                    .entities
                    .withName(entityExpr.entity);
                return conceptualEntity;
            }
            SQExprUtils.getConceptualEntity = getConceptualEntity;
            function getKpiStatusProperty(expr, schema) {
                var property = expr.getConceptualProperty(schema);
                if (!property)
                    return;
                var kpiValue = property.kpiValue;
                if (kpiValue && kpiValue.measure.kpi.status === property)
                    return property;
            }
            function getKpiTrendProperty(expr, schema) {
                var property = expr.getConceptualProperty(schema);
                if (!property)
                    return;
                var kpiValue = property.kpiValue;
                if (kpiValue && kpiValue.measure.kpi.trend === property)
                    return property;
            }
            function getDefaultValue(fieldSQExpr, schema) {
                var column = getConceptualColumn(fieldSQExpr, schema);
                if (column)
                    return column.defaultValue;
            }
            SQExprUtils.getDefaultValue = getDefaultValue;
            function getConceptualColumn(fieldSQExpr, schema) {
                if (!fieldSQExpr || !schema)
                    return;
                var sqField = data.SQExprConverter.asFieldPattern(fieldSQExpr);
                if (!sqField)
                    return;
                var column = sqField.column;
                if (column) {
                    if (schema.schema(column.schema) && sqField.column.name) {
                        var property = schema.schema(column.schema).findProperty(column.entity, sqField.column.name);
                        if (property)
                            return property.column;
                    }
                }
                else {
                    var hierarchyLevelField = sqField.hierarchyLevel;
                    if (hierarchyLevelField) {
                        var fieldExprItem = data.FieldExprPattern.toFieldExprEntityItemPattern(sqField);
                        var schemaName = fieldExprItem.schema;
                        if (schema.schema(schemaName)) {
                            var hierarchy = schema.schema(schemaName)
                                .findHierarchy(fieldExprItem.entity, hierarchyLevelField.name);
                            if (hierarchy) {
                                var hierarchyLevel = hierarchy.levels.withName(hierarchyLevelField.level);
                                if (hierarchyLevel && hierarchyLevel.column)
                                    return hierarchyLevel.column.column;
                            }
                        }
                    }
                }
            }
            function getDefaultValues(fieldSQExprs, schema) {
                if (_.isEmpty(fieldSQExprs) || !schema)
                    return;
                var result = [];
                for (var _i = 0, fieldSQExprs_2 = fieldSQExprs; _i < fieldSQExprs_2.length; _i++) {
                    var sqExpr = fieldSQExprs_2[_i];
                    var defaultValue = getDefaultValue(sqExpr, schema);
                    if (defaultValue)
                        result.push(defaultValue);
                }
                return result;
            }
            SQExprUtils.getDefaultValues = getDefaultValues;
            /** Return compare or and expression for key value pairs. */
            function getDataViewScopeIdentityComparisonExpr(fieldsExpr, values) {
                debug.assert(fieldsExpr.length === values.length, "fileds and values need to be the same size");
                var compareExprs = [];
                for (var i = 0; i < fieldsExpr.length; i++) {
                    compareExprs.push(data.SQExprBuilder.compare(data.QueryComparisonKind.Equal, fieldsExpr[i], values[i]));
                }
                if (_.isEmpty(compareExprs))
                    return;
                var resultExpr;
                for (var _i = 0, compareExprs_1 = compareExprs; _i < compareExprs_1.length; _i++) {
                    var compareExpr = compareExprs_1[_i];
                    resultExpr = data.SQExprBuilder.and(resultExpr, compareExpr);
                }
                return resultExpr;
            }
            SQExprUtils.getDataViewScopeIdentityComparisonExpr = getDataViewScopeIdentityComparisonExpr;
            function getActiveTablesNames(queryDefn) {
                var tables = [];
                if (queryDefn) {
                    var selectedItems = queryDefn.from();
                    if (selectedItems !== undefined) {
                        for (var _i = 0, _a = selectedItems.keys(); _i < _a.length; _i++) {
                            var key = _a[_i];
                            var entityObj = selectedItems.entity(key);
                            if (tables.indexOf(entityObj.entity) < 0)
                                tables.push(entityObj.entity);
                        }
                    }
                }
                return tables;
            }
            SQExprUtils.getActiveTablesNames = getActiveTablesNames;
            function isRelatedToMany(schema, sourceExpr, targetExpr) {
                return isRelated(schema, sourceExpr, targetExpr, 0 /* ZeroOrOne */, 2 /* Many */) ||
                    isRelated(schema, targetExpr, sourceExpr, 2 /* Many */, 0 /* ZeroOrOne */);
            }
            SQExprUtils.isRelatedToMany = isRelatedToMany;
            function isRelatedToOne(schema, sourceExpr, targetExpr) {
                return isRelated(schema, sourceExpr, targetExpr, 2 /* Many */, 0 /* ZeroOrOne */) ||
                    isRelated(schema, targetExpr, sourceExpr, 0 /* ZeroOrOne */, 2 /* Many */);
            }
            SQExprUtils.isRelatedToOne = isRelatedToOne;
            function isRelated(schema, sourceExpr, targetExpr, sourceMultiplicity, targetMultiplicity) {
                var source = SQExprUtils.getConceptualEntity(sourceExpr, schema);
                debug.assertValue(source, "could not resolve conceptual entity form sourceExpr.");
                if (_.isEmpty(source.navigationProperties))
                    return false;
                var target = SQExprUtils.getConceptualEntity(targetExpr, schema);
                debug.assertValue(target, "could not resolve conceptual entity form targetExpr.");
                var queue = [];
                queue.push(source);
                // walk the relationship path from source.
                while (!_.isEmpty(queue)) {
                    var current = queue.shift();
                    var navProperties = current.navigationProperties;
                    if (_.isEmpty(navProperties))
                        continue;
                    for (var _i = 0, navProperties_1 = navProperties; _i < navProperties_1.length; _i++) {
                        var navProperty = navProperties_1[_i];
                        if (!navProperty.isActive)
                            continue;
                        if (navProperty.targetMultiplicity === targetMultiplicity && navProperty.sourceMultiplicity === sourceMultiplicity) {
                            if (navProperty.targetEntity === target)
                                return true;
                            queue.push(navProperty.targetEntity);
                        }
                    }
                }
                return false;
            }
            function isRelatedOneToOne(schema, sourceExpr, targetExpr) {
                var source = SQExprUtils.getConceptualEntity(sourceExpr, schema);
                debug.assertValue(source, "could not resolve conceptual entity form sourceExpr.");
                var target = SQExprUtils.getConceptualEntity(targetExpr, schema);
                debug.assertValue(target, "could not resolve conceptual entity form targetExpr.");
                var sourceNavigations = source.navigationProperties;
                var targetNavigations = target.navigationProperties;
                if (_.isEmpty(sourceNavigations) && _.isEmpty(targetNavigations))
                    return false;
                return hasOneToOneNavigation(sourceNavigations, target) || hasOneToOneNavigation(targetNavigations, source);
            }
            SQExprUtils.isRelatedOneToOne = isRelatedOneToOne;
            function hasOneToOneNavigation(navigationProperties, targetEntity) {
                if (_.isEmpty(navigationProperties))
                    return false;
                for (var _i = 0, navigationProperties_1 = navigationProperties; _i < navigationProperties_1.length; _i++) {
                    var navigationProperty = navigationProperties_1[_i];
                    if (!navigationProperty.isActive)
                        continue;
                    if (navigationProperty.targetEntity !== targetEntity)
                        continue;
                    if (navigationProperty.sourceMultiplicity === 0 /* ZeroOrOne */ &&
                        navigationProperty.targetMultiplicity === 0 /* ZeroOrOne */) {
                        return true;
                    }
                }
                return false;
            }
            /** Performs a union of the 2 arrays with SQExpr.equals as comparator to skip duplicate items,
                and returns a new array. When available, we should use _.unionWith from lodash. */
            function concatUnique(leftExprs, rightExprs) {
                debug.assertValue(leftExprs, 'leftExprs');
                debug.assertValue(rightExprs, 'rightExprs');
                var concatExprs = ArrayExtensions.copy(leftExprs);
                for (var _i = 0, rightExprs_1 = rightExprs; _i < rightExprs_1.length; _i++) {
                    var expr = rightExprs_1[_i];
                    if (indexOfExpr(concatExprs, expr) === -1) {
                        concatExprs.push(expr);
                    }
                }
                return concatExprs;
            }
            SQExprUtils.concatUnique = concatUnique;
            var SQExprDefaultNameGenerator = (function (_super) {
                __extends(SQExprDefaultNameGenerator, _super);
                function SQExprDefaultNameGenerator() {
                    _super.apply(this, arguments);
                }
                SQExprDefaultNameGenerator.prototype.visitEntity = function (expr) {
                    return expr.entity;
                };
                SQExprDefaultNameGenerator.prototype.visitColumnRef = function (expr) {
                    return expr.source.accept(this) + '.' + expr.ref;
                };
                SQExprDefaultNameGenerator.prototype.visitMeasureRef = function (expr, fallback) {
                    return expr.source.accept(this) + '.' + expr.ref;
                };
                SQExprDefaultNameGenerator.prototype.visitAggr = function (expr, fallback) {
                    return data.QueryAggregateFunction[expr.func] + '(' + expr.arg.accept(this) + ')';
                };
                SQExprDefaultNameGenerator.prototype.visitArithmetic = function (expr, fallback) {
                    return powerbi.data.getArithmeticOperatorName(expr.operator) + '(' + expr.left.accept(this) + ', ' + expr.right.accept(this) + ')';
                };
                SQExprDefaultNameGenerator.prototype.visitConstant = function (expr) {
                    return 'const';
                };
                SQExprDefaultNameGenerator.prototype.visitDefault = function (expr, fallback) {
                    return fallback || 'expr';
                };
                SQExprDefaultNameGenerator.instance = new SQExprDefaultNameGenerator();
                return SQExprDefaultNameGenerator;
            }(data.DefaultSQExprVisitorWithArg));
            var IsMeasureVisitor = (function (_super) {
                __extends(IsMeasureVisitor, _super);
                function IsMeasureVisitor() {
                    _super.apply(this, arguments);
                }
                IsMeasureVisitor.prototype.visitMeasureRef = function (expr) {
                    return true;
                };
                IsMeasureVisitor.prototype.visitAggr = function (expr) {
                    return true;
                };
                IsMeasureVisitor.prototype.visitArithmetic = function (expr) {
                    return true;
                };
                IsMeasureVisitor.prototype.visitDefault = function (expr) {
                    return false;
                };
                IsMeasureVisitor.instance = new IsMeasureVisitor();
                return IsMeasureVisitor;
            }(data.DefaultSQExprVisitor));
            var IsDefaultValueVisitor = (function (_super) {
                __extends(IsDefaultValueVisitor, _super);
                function IsDefaultValueVisitor() {
                    _super.apply(this, arguments);
                }
                IsDefaultValueVisitor.prototype.visitCompare = function (expr) {
                    if (expr.comparison !== data.QueryComparisonKind.Equal)
                        return false;
                    return expr.right.accept(this);
                };
                IsDefaultValueVisitor.prototype.visitAnd = function (expr) {
                    return expr.left.accept(this) && expr.right.accept(this);
                };
                IsDefaultValueVisitor.prototype.visitDefaultValue = function (expr) {
                    return true;
                };
                IsDefaultValueVisitor.prototype.visitDefault = function (expr) {
                    return false;
                };
                IsDefaultValueVisitor.instance = new IsDefaultValueVisitor();
                return IsDefaultValueVisitor;
            }(data.DefaultSQExprVisitor));
            var IsAnyValueVisitor = (function (_super) {
                __extends(IsAnyValueVisitor, _super);
                function IsAnyValueVisitor() {
                    _super.apply(this, arguments);
                }
                IsAnyValueVisitor.prototype.visitCompare = function (expr) {
                    if (expr.comparison !== data.QueryComparisonKind.Equal)
                        return false;
                    return expr.right.accept(this);
                };
                IsAnyValueVisitor.prototype.visitAnd = function (expr) {
                    return expr.left.accept(this) && expr.right.accept(this);
                };
                IsAnyValueVisitor.prototype.visitAnyValue = function (expr) {
                    return true;
                };
                IsAnyValueVisitor.prototype.visitDefault = function (expr) {
                    return false;
                };
                IsAnyValueVisitor.instance = new IsAnyValueVisitor();
                return IsAnyValueVisitor;
            }(data.DefaultSQExprVisitor));
        })(SQExprUtils = data.SQExprUtils || (data.SQExprUtils = {}));
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
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
    var data;
    (function (data) {
        var SemanticQueryRewriter = (function () {
            function SemanticQueryRewriter(exprRewriter) {
                this.exprRewriter = exprRewriter;
            }
            SemanticQueryRewriter.prototype.rewriteFrom = function (fromValue) {
                var fromContents = {};
                var originalFrom = fromValue, originalFromKeys = originalFrom.keys();
                for (var i = 0, len = originalFromKeys.length; i < len; i++) {
                    var keyName = originalFromKeys[i], originalEntityRef = originalFrom.entity(keyName), originalEntityExpr = data.SQExprBuilder.entity(originalEntityRef.schema, originalEntityRef.entity, keyName), updatedEntityExpr = originalEntityExpr.accept(this.exprRewriter);
                    fromContents[keyName] = {
                        schema: updatedEntityExpr.schema,
                        entity: updatedEntityExpr.entity,
                    };
                }
                return new data.SQFrom(fromContents);
            };
            SemanticQueryRewriter.prototype.rewriteSelect = function (selectItems, from) {
                debug.assertValue(selectItems, 'selectItems');
                debug.assertValue(from, 'from');
                return this.rewriteNamedSQExpressions(selectItems, from);
            };
            SemanticQueryRewriter.prototype.rewriteGroupBy = function (groupByitems, from) {
                debug.assertAnyValue(groupByitems, 'groupByitems');
                debug.assertValue(from, 'from');
                if (_.isEmpty(groupByitems))
                    return;
                return this.rewriteNamedSQExpressions(groupByitems, from);
            };
            SemanticQueryRewriter.prototype.rewriteNamedSQExpressions = function (expressions, from) {
                var _this = this;
                debug.assertValue(expressions, 'expressions');
                return _.map(expressions, function (item) {
                    return {
                        name: item.name,
                        expr: data.SQExprRewriterWithSourceRenames.rewrite(item.expr.accept(_this.exprRewriter), from)
                    };
                });
            };
            SemanticQueryRewriter.prototype.rewriteOrderBy = function (orderByItems, from) {
                debug.assertAnyValue(orderByItems, 'orderByItems');
                debug.assertValue(from, 'from');
                if (_.isEmpty(orderByItems))
                    return;
                var orderBy = [];
                for (var i = 0, len = orderByItems.length; i < len; i++) {
                    var item = orderByItems[i], updatedExpr = data.SQExprRewriterWithSourceRenames.rewrite(item.expr.accept(this.exprRewriter), from);
                    orderBy.push({
                        direction: item.direction,
                        expr: updatedExpr,
                    });
                }
                return orderBy;
            };
            SemanticQueryRewriter.prototype.rewriteWhere = function (whereItems, from) {
                var _this = this;
                debug.assertAnyValue(whereItems, 'whereItems');
                debug.assertValue(from, 'from');
                if (_.isEmpty(whereItems))
                    return;
                var where = [];
                for (var i = 0, len = whereItems.length; i < len; i++) {
                    var originalWhere = whereItems[i];
                    var updatedWhere = {
                        condition: data.SQExprRewriterWithSourceRenames.rewrite(originalWhere.condition.accept(this.exprRewriter), from),
                    };
                    if (originalWhere.target)
                        updatedWhere.target = _.map(originalWhere.target, function (e) { return data.SQExprRewriterWithSourceRenames.rewrite(e.accept(_this.exprRewriter), from); });
                    where.push(updatedWhere);
                }
                return where;
            };
            return SemanticQueryRewriter;
        }());
        data.SemanticQueryRewriter = SemanticQueryRewriter;
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
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
    var data;
    (function (data) {
        var ArrayExtensions = jsCommon.ArrayExtensions;
        /**
         * Represents a semantic query that is:
         * 1) Round-trippable with a JSON QueryDefinition.
         * 2) Immutable
         * 3) Long-lived and does not have strong references to a conceptual model (only names).
         */
        var SemanticQuery = (function () {
            function SemanticQuery(from, where, orderBy, select, groupBy) {
                debug.assertValue(from, 'from');
                debug.assertValue(select, 'select');
                this.fromValue = from;
                this.whereItems = where;
                this.orderByItems = orderBy;
                this.selectItems = select;
                this.groupByItems = groupBy;
            }
            SemanticQuery.create = function () {
                if (!SemanticQuery.empty)
                    SemanticQuery.empty = new SemanticQuery(new SQFrom(), null, null, [], null);
                return SemanticQuery.empty;
            };
            SemanticQuery.createWithTrimmedFrom = function (from, where, orderBy, select, groupBy) {
                var unreferencedKeyFinder = new UnreferencedKeyFinder(from.keys());
                // Where
                if (where) {
                    for (var i = 0, len = where.length; i < len; i++) {
                        var filter = where[i];
                        filter.condition.accept(unreferencedKeyFinder);
                        var filterTarget = filter.target;
                        if (filterTarget) {
                            for (var j = 0, jlen = filterTarget.length; j < jlen; j++)
                                if (filterTarget[j])
                                    filterTarget[j].accept(unreferencedKeyFinder);
                        }
                    }
                }
                // OrderBy
                if (orderBy) {
                    for (var i = 0, len = orderBy.length; i < len; i++)
                        orderBy[i].expr.accept(unreferencedKeyFinder);
                }
                // Select
                for (var i = 0, len = select.length; i < len; i++)
                    select[i].expr.accept(unreferencedKeyFinder);
                // GroupBy
                if (groupBy) {
                    for (var i = 0, len = groupBy.length; i < len; i++)
                        groupBy[i].expr.accept(unreferencedKeyFinder);
                }
                var unreferencedKeys = unreferencedKeyFinder.result();
                for (var i = 0, len = unreferencedKeys.length; i < len; i++)
                    from.remove(unreferencedKeys[i]);
                return new SemanticQuery(from, where, orderBy, select, groupBy);
            };
            SemanticQuery.prototype.from = function () {
                return this.fromValue.clone();
            };
            SemanticQuery.prototype.select = function (values) {
                if (_.isEmpty(arguments))
                    return this.getSelect();
                return this.setSelect(values);
            };
            SemanticQuery.prototype.getSelect = function () {
                return SemanticQuery.createNamedExpressionArray(this.selectItems);
            };
            SemanticQuery.createNamedExpressionArray = function (items) {
                return ArrayExtensions.extendWithName(_.map(items, function (s) {
                    return {
                        name: s.name,
                        expr: s.expr,
                    };
                }));
            };
            SemanticQuery.prototype.setSelect = function (values) {
                var from = this.fromValue.clone();
                var selectItems = SemanticQuery.rewriteExpressionsWithSourceRenames(values, from);
                return SemanticQuery.createWithTrimmedFrom(from, this.whereItems, this.orderByItems, selectItems, this.groupByItems);
            };
            SemanticQuery.rewriteExpressionsWithSourceRenames = function (values, from) {
                var items = [];
                for (var i = 0, len = values.length; i < len; i++) {
                    var value = values[i];
                    items.push({
                        name: value.name,
                        expr: SQExprRewriterWithSourceRenames.rewrite(value.expr, from)
                    });
                }
                return items;
            };
            /** Removes the given expression from the select. */
            SemanticQuery.prototype.removeSelect = function (expr) {
                debug.assertValue(expr, 'expr');
                var originalItems = this.selectItems, selectItems = [];
                for (var i = 0, len = originalItems.length; i < len; i++) {
                    var originalExpr = originalItems[i];
                    if (data.SQExpr.equals(originalExpr.expr, expr))
                        continue;
                    selectItems.push(originalExpr);
                }
                return SemanticQuery.createWithTrimmedFrom(this.fromValue.clone(), this.whereItems, this.orderByItems, selectItems, this.groupByItems);
            };
            /** Removes the given expression from order by. */
            SemanticQuery.prototype.removeOrderBy = function (expr) {
                var sorts = this.orderBy();
                for (var i = sorts.length - 1; i >= 0; i--) {
                    if (data.SQExpr.equals(sorts[i].expr, expr))
                        sorts.splice(i, 1);
                }
                return SemanticQuery.createWithTrimmedFrom(this.fromValue.clone(), this.whereItems, sorts, this.selectItems, this.groupByItems);
            };
            SemanticQuery.prototype.selectNameOf = function (expr) {
                var index = data.SQExprUtils.indexOfExpr(_.map(this.selectItems, function (s) { return s.expr; }), expr);
                if (index >= 0)
                    return this.selectItems[index].name;
            };
            SemanticQuery.prototype.setSelectAt = function (index, expr) {
                debug.assertValue(expr, 'expr');
                if (index >= this.selectItems.length)
                    return;
                var select = this.select(), from = this.fromValue.clone(), originalName = select[index].name;
                select[index] = {
                    name: originalName,
                    expr: SQExprRewriterWithSourceRenames.rewrite(expr, from)
                };
                return SemanticQuery.createWithTrimmedFrom(from, this.whereItems, this.orderByItems, select, this.groupByItems);
            };
            /** Adds a the expression to the select clause. */
            SemanticQuery.prototype.addSelect = function (expr, exprName) {
                debug.assertValue(expr, 'expr');
                var selectItems = this.select(), from = this.fromValue.clone();
                selectItems.push(this.createNamedExpr(selectItems, from, expr, exprName));
                return SemanticQuery.createWithTrimmedFrom(from, this.whereItems, this.orderByItems, selectItems, this.groupByItems);
            };
            SemanticQuery.prototype.createNamedExpr = function (currentNames, from, expr, exprName) {
                return {
                    name: data.SQExprUtils.uniqueName(currentNames, expr, exprName),
                    expr: SQExprRewriterWithSourceRenames.rewrite(expr, from)
                };
            };
            SemanticQuery.prototype.groupBy = function (values) {
                if (_.isEmpty(arguments))
                    return this.getGroupBy();
                return this.setGroupBy(values);
            };
            SemanticQuery.prototype.getGroupBy = function () {
                return SemanticQuery.createNamedExpressionArray(this.groupByItems);
            };
            SemanticQuery.prototype.setGroupBy = function (values) {
                var from = this.fromValue.clone();
                var groupByItems = SemanticQuery.rewriteExpressionsWithSourceRenames(values, from);
                return SemanticQuery.createWithTrimmedFrom(from, this.whereItems, this.orderByItems, this.selectItems, groupByItems);
            };
            SemanticQuery.prototype.addGroupBy = function (expr) {
                debug.assertValue(expr, 'expr');
                var groupByItems = this.groupBy(), from = this.fromValue.clone();
                groupByItems.push(this.createNamedExpr(groupByItems, from, expr));
                return SemanticQuery.createWithTrimmedFrom(from, this.whereItems, this.orderByItems, this.selectItems, groupByItems);
            };
            SemanticQuery.prototype.orderBy = function (values) {
                if (_.isEmpty(arguments))
                    return this.getOrderBy();
                return this.setOrderBy(values);
            };
            SemanticQuery.prototype.getOrderBy = function () {
                var result = [];
                var orderBy = this.orderByItems;
                if (orderBy) {
                    for (var i = 0, len = orderBy.length; i < len; i++) {
                        var clause = orderBy[i];
                        result.push({
                            expr: clause.expr,
                            direction: clause.direction,
                        });
                    }
                }
                return result;
            };
            SemanticQuery.prototype.setOrderBy = function (values) {
                debug.assertValue(values, 'values');
                var updatedOrderBy = [], from = this.fromValue.clone();
                for (var i = 0, len = values.length; i < len; i++) {
                    var clause = values[i];
                    updatedOrderBy.push({
                        expr: SQExprRewriterWithSourceRenames.rewrite(clause.expr, from),
                        direction: clause.direction,
                    });
                }
                return SemanticQuery.createWithTrimmedFrom(from, this.whereItems, updatedOrderBy, this.selectItems, this.groupByItems);
            };
            SemanticQuery.prototype.where = function (values) {
                if (_.isEmpty(arguments))
                    return this.getWhere();
                return this.setWhere(values);
            };
            SemanticQuery.prototype.getWhere = function () {
                var result = [];
                var whereItems = this.whereItems;
                if (whereItems) {
                    for (var i = 0, len = whereItems.length; i < len; i++)
                        result.push(whereItems[i]);
                }
                return result;
            };
            SemanticQuery.prototype.setWhere = function (values) {
                debug.assertValue(values, 'values');
                var updatedWhere = [], from = this.fromValue.clone();
                for (var i = 0, len = values.length; i < len; i++) {
                    var filter = values[i];
                    var updatedFilter = {
                        condition: SQExprRewriterWithSourceRenames.rewrite(filter.condition, from),
                    };
                    var filterTarget = filter.target;
                    if (filterTarget) {
                        updatedFilter.target = [];
                        for (var j = 0, jlen = filterTarget.length; j < jlen; j++)
                            if (filterTarget[j]) {
                                var updatedTarget = SQExprRewriterWithSourceRenames.rewrite(filterTarget[j], from);
                                updatedFilter.target.push(updatedTarget);
                            }
                    }
                    updatedWhere.push(updatedFilter);
                }
                return SemanticQuery.createWithTrimmedFrom(from, updatedWhere, this.orderByItems, this.selectItems, this.groupByItems);
            };
            SemanticQuery.prototype.addWhere = function (filter) {
                debug.assertValue(filter, 'filter');
                var updatedWhere = this.where(), incomingWhere = filter.where(), from = this.fromValue.clone();
                for (var i = 0, len = incomingWhere.length; i < len; i++) {
                    var clause = incomingWhere[i];
                    var updatedClause = {
                        condition: SQExprRewriterWithSourceRenames.rewrite(clause.condition, from),
                    };
                    if (clause.target)
                        updatedClause.target = _.map(clause.target, function (t) { return SQExprRewriterWithSourceRenames.rewrite(t, from); });
                    updatedWhere.push(updatedClause);
                }
                return SemanticQuery.createWithTrimmedFrom(from, updatedWhere, this.orderByItems, this.selectItems, this.groupByItems);
            };
            SemanticQuery.prototype.rewrite = function (exprRewriter) {
                var rewriter = new data.SemanticQueryRewriter(exprRewriter);
                var from = rewriter.rewriteFrom(this.fromValue);
                var where = rewriter.rewriteWhere(this.whereItems, from);
                var orderBy = rewriter.rewriteOrderBy(this.orderByItems, from);
                var select = rewriter.rewriteSelect(this.selectItems, from);
                var groupBy = rewriter.rewriteGroupBy(this.groupByItems, from);
                return SemanticQuery.createWithTrimmedFrom(from, where, orderBy, select, groupBy);
            };
            return SemanticQuery;
        }());
        data.SemanticQuery = SemanticQuery;
        /** Represents a semantic filter condition.  Round-trippable with a JSON FilterDefinition.  Instances of this class are immutable. */
        var SemanticFilter = (function () {
            function SemanticFilter(from, where) {
                debug.assertValue(from, 'from');
                debug.assertValue(where, 'where');
                this.fromValue = from;
                this.whereItems = where;
            }
            SemanticFilter.fromSQExpr = function (contract) {
                debug.assertValue(contract, 'contract');
                var from = new SQFrom();
                var rewrittenContract = SQExprRewriterWithSourceRenames.rewrite(contract, from);
                // DEVNOTE targets of some filters are visual specific and will get resolved only during query generation.
                //         Thus not setting a target here.
                var where = [{
                        condition: rewrittenContract
                    }];
                return new SemanticFilter(from, where);
            };
            SemanticFilter.getDefaultValueFilter = function (fieldSQExprs) {
                return SemanticFilter.getDataViewScopeIdentityComparisonFilters(fieldSQExprs, data.SQExprBuilder.defaultValue());
            };
            SemanticFilter.getAnyValueFilter = function (fieldSQExprs) {
                return SemanticFilter.getDataViewScopeIdentityComparisonFilters(fieldSQExprs, data.SQExprBuilder.anyValue());
            };
            SemanticFilter.getDataViewScopeIdentityComparisonFilters = function (fieldSQExprs, value) {
                debug.assertValue(fieldSQExprs, 'fieldSQExprs');
                debug.assertValue(value, 'value');
                if (fieldSQExprs instanceof Array) {
                    var values = Array.apply(null, Array(fieldSQExprs.length)).map(function () { return value; });
                    return SemanticFilter.fromSQExpr(data.SQExprUtils.getDataViewScopeIdentityComparisonExpr(fieldSQExprs, values));
                }
                return SemanticFilter.fromSQExpr(data.SQExprBuilder.equal(fieldSQExprs, value));
            };
            SemanticFilter.prototype.from = function () {
                return this.fromValue.clone();
            };
            SemanticFilter.prototype.conditions = function () {
                var expressions = [];
                var where = this.whereItems;
                for (var i = 0, len = where.length; i < len; i++) {
                    var filter = where[i];
                    expressions.push(filter.condition);
                }
                return expressions;
            };
            SemanticFilter.prototype.where = function () {
                var result = [];
                var whereItems = this.whereItems;
                for (var i = 0, len = whereItems.length; i < len; i++)
                    result.push(whereItems[i]);
                return result;
            };
            SemanticFilter.prototype.rewrite = function (exprRewriter) {
                var rewriter = new data.SemanticQueryRewriter(exprRewriter);
                var from = rewriter.rewriteFrom(this.fromValue);
                var where = rewriter.rewriteWhere(this.whereItems, from);
                return new SemanticFilter(from, where);
            };
            SemanticFilter.prototype.validate = function (schema, aggrUtils, errors) {
                var validator = new data.SQExprValidationVisitor(schema, aggrUtils, errors);
                this.rewrite(validator);
                return validator.errors;
            };
            /** Merges a list of SemanticFilters into one. */
            SemanticFilter.merge = function (filters) {
                if (_.isEmpty(filters))
                    return null;
                if (filters.length === 1)
                    return filters[0];
                var firstFilter = filters[0];
                var from = firstFilter.from(), where = ArrayExtensions.take(firstFilter.whereItems, firstFilter.whereItems.length);
                for (var i = 1, len = filters.length; i < len; i++)
                    SemanticFilter.applyFilter(filters[i], from, where);
                return new SemanticFilter(from, where);
            };
            SemanticFilter.isDefaultFilter = function (filter) {
                if (!filter || filter.where().length !== 1)
                    return false;
                return data.SQExprUtils.isDefaultValue(filter.where()[0].condition);
            };
            SemanticFilter.isAnyFilter = function (filter) {
                if (!filter || filter.where().length !== 1)
                    return false;
                return data.SQExprUtils.isAnyValue(filter.where()[0].condition);
            };
            SemanticFilter.isSameFilter = function (leftFilter, rightFilter) {
                if (jsCommon.JsonComparer.equals(leftFilter, rightFilter)) {
                    return !((SemanticFilter.isDefaultFilter(leftFilter) && SemanticFilter.isAnyFilter(rightFilter))
                        || (SemanticFilter.isAnyFilter(leftFilter) && SemanticFilter.isDefaultFilter(rightFilter)));
                }
                return false;
            };
            SemanticFilter.applyFilter = function (filter, from, where) {
                debug.assertValue(filter, 'filter');
                debug.assertValue(from, 'from');
                debug.assertValue(where, 'where');
                // Where
                var filterWhereItems = filter.whereItems;
                for (var i = 0; i < filterWhereItems.length; i++) {
                    var filterWhereItem = filterWhereItems[i];
                    var updatedWhereItem = {
                        condition: SQExprRewriterWithSourceRenames.rewrite(filterWhereItem.condition, from),
                    };
                    if (filterWhereItem.target)
                        updatedWhereItem.target = _.map(filterWhereItem.target, function (e) { return SQExprRewriterWithSourceRenames.rewrite(e, from); });
                    where.push(updatedWhereItem);
                }
            };
            return SemanticFilter;
        }());
        data.SemanticFilter = SemanticFilter;
        /** Represents a SemanticQuery/SemanticFilter from clause. */
        var SQFrom = (function () {
            function SQFrom(items) {
                this.items = items || {};
            }
            SQFrom.prototype.keys = function () {
                return Object.keys(this.items);
            };
            SQFrom.prototype.entity = function (key) {
                return this.items[key];
            };
            SQFrom.prototype.ensureEntity = function (entity, desiredVariableName) {
                debug.assertValue(entity, 'entity');
                // 1) Reuse a reference to the entity among the already referenced
                var keys = this.keys();
                for (var i_1 = 0, len = keys.length; i_1 < len; i_1++) {
                    var key = keys[i_1], item = this.items[key];
                    if (item && entity.entity === item.entity && entity.schema === item.schema)
                        return { name: key };
                }
                // 2) Add a reference to the entity
                var candidateName = desiredVariableName || this.candidateName(entity.entity), uniqueName = candidateName, i = 2;
                while (this.items[uniqueName]) {
                    uniqueName = candidateName + i++;
                }
                this.items[uniqueName] = entity;
                return { name: uniqueName, new: true };
            };
            SQFrom.prototype.remove = function (key) {
                delete this.items[key];
            };
            /** Converts the entity name into a short reference name.  Follows the Semantic Query convention of a short name. */
            SQFrom.prototype.candidateName = function (ref) {
                debug.assertValue(ref, 'ref');
                var idx = ref.lastIndexOf('.');
                if (idx >= 0 && (idx !== ref.length - 1))
                    ref = ref.substr(idx + 1);
                return ref.substring(0, 1).toLowerCase();
            };
            SQFrom.prototype.clone = function () {
                // NOTE: consider deprecating this method and instead making QueryFrom be CopyOnWrite (currently we proactively clone).
                var cloned = new SQFrom();
                // NOTE: we use extend rather than prototypical inheritance on items because we use Object.keys.
                $.extend(cloned.items, this.items);
                return cloned;
            };
            return SQFrom;
        }());
        data.SQFrom = SQFrom;
        var SQExprRewriterWithSourceRenames = (function (_super) {
            __extends(SQExprRewriterWithSourceRenames, _super);
            function SQExprRewriterWithSourceRenames(renames) {
                debug.assertValue(renames, 'renames');
                _super.call(this);
                this.renames = renames;
            }
            SQExprRewriterWithSourceRenames.prototype.visitEntity = function (expr) {
                var updatedName = this.renames[expr.entity];
                if (updatedName)
                    return new data.SQEntityExpr(expr.schema, expr.entity, updatedName);
                return _super.prototype.visitEntity.call(this, expr);
            };
            SQExprRewriterWithSourceRenames.prototype.rewriteFilter = function (filter) {
                debug.assertValue(filter, 'filter');
                var updatedTargets = undefined;
                if (filter.target)
                    updatedTargets = this.rewriteArray(filter.target);
                var updatedCondition = filter.condition.accept(this);
                if (filter.condition === updatedCondition && filter.target === updatedTargets)
                    return filter;
                var updatedFilter = {
                    condition: updatedCondition,
                };
                if (updatedTargets)
                    updatedFilter.target = updatedTargets;
                return updatedFilter;
            };
            SQExprRewriterWithSourceRenames.prototype.rewriteArray = function (exprs) {
                debug.assertValue(exprs, 'exprs');
                var updatedExprs;
                for (var i = 0, len = exprs.length; i < len; i++) {
                    var expr = exprs[i], rewrittenExpr = expr.accept(this);
                    if (expr !== rewrittenExpr && !updatedExprs)
                        updatedExprs = ArrayExtensions.take(exprs, i);
                    if (updatedExprs)
                        updatedExprs.push(rewrittenExpr);
                }
                return updatedExprs || exprs;
            };
            SQExprRewriterWithSourceRenames.rewrite = function (expr, from) {
                debug.assertValue(expr, 'expr');
                debug.assertValue(from, 'from');
                var renames = QuerySourceRenameDetector.run(expr, from);
                var rewriter = new SQExprRewriterWithSourceRenames(renames);
                return expr.accept(rewriter);
            };
            return SQExprRewriterWithSourceRenames;
        }(data.SQExprRewriter));
        data.SQExprRewriterWithSourceRenames = SQExprRewriterWithSourceRenames;
        /** Responsible for updating a QueryFrom based on SQExpr references. */
        var QuerySourceRenameDetector = (function (_super) {
            __extends(QuerySourceRenameDetector, _super);
            function QuerySourceRenameDetector(from) {
                debug.assertValue(from, 'from');
                _super.call(this);
                this.from = from;
                this.renames = {};
            }
            QuerySourceRenameDetector.run = function (expr, from) {
                var detector = new QuerySourceRenameDetector(from);
                expr.accept(detector);
                return detector.renames;
            };
            QuerySourceRenameDetector.prototype.visitEntity = function (expr) {
                // TODO: Renames must take the schema into account, not just entity set name.
                var existingEntity = this.from.entity(expr.variable);
                if (existingEntity && existingEntity.schema === expr.schema && existingEntity.entity === expr.entity)
                    return;
                var actualEntity = this.from.ensureEntity({
                    schema: expr.schema,
                    entity: expr.entity,
                }, expr.variable);
                this.renames[expr.entity] = actualEntity.name;
            };
            return QuerySourceRenameDetector;
        }(data.DefaultSQExprVisitorWithTraversal));
        /** Visitor for finding unreferenced sources. */
        var UnreferencedKeyFinder = (function (_super) {
            __extends(UnreferencedKeyFinder, _super);
            function UnreferencedKeyFinder(keys) {
                debug.assertValue(keys, 'keys');
                _super.call(this);
                this.keys = keys;
            }
            UnreferencedKeyFinder.prototype.visitEntity = function (expr) {
                var index = this.keys.indexOf(expr.variable);
                if (index >= 0)
                    this.keys.splice(index, 1);
            };
            UnreferencedKeyFinder.prototype.result = function () {
                return this.keys;
            };
            return UnreferencedKeyFinder;
        }(data.DefaultSQExprVisitorWithTraversal));
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
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
    var data;
    (function (data_4) {
        var DataViewTransform = powerbi.data.DataViewTransform;
        var SQExprBuilder = powerbi.data.SQExprBuilder;
        function createCategoricalDataViewBuilder() {
            return new CategoricalDataViewBuilder();
        }
        data_4.createCategoricalDataViewBuilder = createCategoricalDataViewBuilder;
        var CategoricalDataViewBuilder = (function () {
            function CategoricalDataViewBuilder() {
                this.categories = [];
                this.measureColumns = [];
                this.columnIndex = 0;
            }
            CategoricalDataViewBuilder.prototype.withCategory = function (options) {
                var categoryValues = options.values, identityFrom = options.identityFrom, type = options.source.type;
                var categoryColumn = {
                    source: options.source,
                    identityFields: options.identityFrom.fields,
                    identity: options.identityFrom.identities || [],
                    values: categoryValues,
                };
                if (!options.identityFrom.identities) {
                    for (var categoryIndex = 0, categoryLength = categoryValues.length; categoryIndex < categoryLength; categoryIndex++) {
                        categoryColumn.identity.push(getScopeIdentity(identityFrom, categoryIndex, categoryValues[categoryIndex], type));
                    }
                }
                if (!this.categories)
                    this.categories = [];
                this.categories.push(categoryColumn);
                return this;
            };
            CategoricalDataViewBuilder.prototype.withCategories = function (categories) {
                if (_.isEmpty(this.categories))
                    this.categories = categories;
                else
                    Array.prototype.push.apply(this.categories, categories);
                return this;
            };
            CategoricalDataViewBuilder.prototype.withValues = function (options) {
                debug.assertValue(options, 'options');
                var columns = options.columns;
                debug.assertValue(columns, 'columns');
                for (var _i = 0, columns_8 = columns; _i < columns_8.length; _i++) {
                    var column = columns_8[_i];
                    this.measureColumns.push(column.source);
                }
                this.data = columns;
                return this;
            };
            CategoricalDataViewBuilder.prototype.withGroupedValues = function (options) {
                debug.assertValue(options, 'options');
                this.hasDynamicSeries = true;
                var groupColumn = options.groupColumn;
                debug.assertValue(groupColumn, 'groupColumn');
                this.dynamicSeriesMetadata = {
                    column: groupColumn.source,
                    identityFrom: groupColumn.identityFrom,
                    values: groupColumn.values,
                };
                var valueColumns = options.valueColumns;
                for (var _i = 0, valueColumns_1 = valueColumns; _i < valueColumns_1.length; _i++) {
                    var valueColumn = valueColumns_1[_i];
                    this.measureColumns.push(valueColumn.source);
                }
                this.data = options.data;
                return this;
            };
            CategoricalDataViewBuilder.prototype.fillData = function (dataViewValues, groups) {
                var categoryColumn = _.first(this.categories);
                var categoryLength = (categoryColumn && categoryColumn.values) ? categoryColumn.values.length : 1;
                if (this.hasDynamicSeries) {
                    // Dynamic series
                    var data_5 = this.data;
                    for (var seriesIndex = 0; seriesIndex < this.dynamicSeriesMetadata.values.length; seriesIndex++) {
                        var seriesMeasures = data_5[seriesIndex];
                        debug.assert(seriesMeasures.length === this.measureColumns.length, 'seriesMeasures.length === this.measureColumns.length');
                        for (var measureIndex = 0, measuresLen = this.measureColumns.length; measureIndex < measuresLen; measureIndex++) {
                            var groupIndex = seriesIndex * measuresLen + measureIndex;
                            applySeriesData(dataViewValues[groupIndex], seriesMeasures[measureIndex], categoryLength);
                        }
                    }
                }
                else {
                    // Static series
                    var data_6 = this.data;
                    for (var measureIndex = 0, measuresLen = this.measureColumns.length; measureIndex < measuresLen; measureIndex++) {
                        applySeriesData(dataViewValues[measureIndex], data_6[measureIndex], categoryLength);
                    }
                }
            };
            CategoricalDataViewBuilder.prototype.build = function () {
                var metadataColumns = [];
                var categorical = {};
                var groups;
                var categoryMetadata = this.categories;
                var dynamicSeriesMetadata = this.dynamicSeriesMetadata;
                // --- Build metadata columns and value groups ---
                for (var _i = 0, categoryMetadata_1 = categoryMetadata; _i < categoryMetadata_1.length; _i++) {
                    var columnMetadata = categoryMetadata_1[_i];
                    pushIfNotExists(metadataColumns, columnMetadata.source);
                }
                if (this.hasDynamicSeries) {
                    pushIfNotExists(metadataColumns, dynamicSeriesMetadata.column);
                }
                if (this.hasDynamicSeries) {
                    // Dynamic series
                    categorical.values = DataViewTransform.createValueColumns([], dynamicSeriesMetadata.identityFrom.fields, dynamicSeriesMetadata.column);
                    var measures = this.measureColumns;
                    groups = [];
                    // For each series value we will make one column per measure
                    var seriesValues = dynamicSeriesMetadata.values;
                    for (var seriesIndex = 0; seriesIndex < seriesValues.length; seriesIndex++) {
                        var seriesValue = seriesValues[seriesIndex];
                        var seriesIdentity = getScopeIdentity(dynamicSeriesMetadata.identityFrom, seriesIndex, seriesValue, dynamicSeriesMetadata.column.type);
                        for (var _a = 0, measures_1 = measures; _a < measures_1.length; _a++) {
                            var measure = measures_1[_a];
                            var column = _.clone(measure);
                            column.groupName = seriesValue;
                            groups.push(column);
                            pushIfNotExists(metadataColumns, column);
                            categorical.values.push({
                                source: column,
                                values: [],
                                identity: seriesIdentity,
                            });
                        }
                    }
                }
                else {
                    // Static series / no series
                    categorical.values = DataViewTransform.createValueColumns();
                    groups = this.measureColumns;
                    for (var _b = 0, groups_2 = groups; _b < groups_2.length; _b++) {
                        var measure = groups_2[_b];
                        var column = measure;
                        pushIfNotExists(metadataColumns, column);
                        categorical.values.push({
                            source: column,
                            values: [],
                        });
                    }
                }
                var categories = this.categories;
                if (!_.isEmpty(categories))
                    categorical.categories = categories;
                // --- Fill in data point values ---
                this.fillData(categorical.values, groups);
                return {
                    metadata: {
                        columns: metadataColumns,
                    },
                    categorical: categorical,
                };
            };
            return CategoricalDataViewBuilder;
        }());
        function getScopeIdentity(source, index, value, valueType) {
            var identities = source.identities;
            if (identities) {
                return identities[index];
            }
            debug.assert(source.fields && source.fields.length === 1, 'Inferring identity, expect exactly one field.');
            return data_4.createDataViewScopeIdentity(SQExprBuilder.equal(source.fields[0], SQExprBuilder.typedConstant(value, valueType)));
        }
        function pushIfNotExists(items, itemToAdd) {
            if (_.contains(items, itemToAdd))
                return;
            items.push(itemToAdd);
        }
        function applySeriesData(target, source, categoryLength) {
            debug.assertValue(target, 'target');
            debug.assertValue(source, 'source');
            debug.assertValue(categoryLength, 'categoryLength');
            var values = source.values;
            debug.assert(categoryLength === values.length, 'categoryLength === values.length');
            target.values = values;
            var highlights = source.highlights;
            if (highlights) {
                debug.assert(categoryLength === highlights.length, 'categoryLength === highlights.length');
                target.highlights = highlights;
            }
            if (source.minLocal !== undefined)
                target.minLocal = source.minLocal;
            if (source.maxLocal !== undefined)
                target.maxLocal = source.maxLocal;
        }
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
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
    var data;
    (function (data) {
        var SQExpr = powerbi.data.SQExpr;
        function createStaticEvalContext(colorAllocatorCache, dataView, selectTransforms) {
            return new StaticEvalContext(colorAllocatorCache || data.createColorAllocatorCache(), dataView || { metadata: { columns: [] } }, selectTransforms);
        }
        data.createStaticEvalContext = createStaticEvalContext;
        /**
         * Represents an eval context over a potentially empty DataView.  Only static repetition data view objects
         * are supported.
         */
        var StaticEvalContext = (function () {
            function StaticEvalContext(colorAllocatorCache, dataView, selectTransforms) {
                debug.assertValue(colorAllocatorCache, 'colorAllocatorCache');
                debug.assertValue(dataView, 'dataView');
                debug.assertAnyValue(selectTransforms, 'selectTransforms');
                this.colorAllocatorCache = colorAllocatorCache;
                this.dataView = dataView;
                this.selectTransforms = selectTransforms;
            }
            StaticEvalContext.prototype.getColorAllocator = function (expr) {
                return this.colorAllocatorCache.get(expr);
            };
            StaticEvalContext.prototype.getExprValue = function (expr) {
                var dataView = this.dataView, selectTransforms = this.selectTransforms;
                if (dataView && dataView.table && selectTransforms)
                    return getExprValueFromTable(expr, selectTransforms, dataView.table, /*rowIdx*/ 0);
            };
            StaticEvalContext.prototype.getRoleValue = function (roleName) {
                return;
            };
            return StaticEvalContext;
        }());
        function getExprValueFromTable(expr, selectTransforms, table, rowIdx) {
            debug.assertValue(expr, 'expr');
            debug.assertValue(selectTransforms, 'selectTransforms');
            debug.assertValue(table, 'table');
            debug.assertValue(rowIdx, 'rowIdx');
            var rows = table.rows;
            if (_.isEmpty(rows) || rows.length <= rowIdx)
                return;
            var cols = table.columns;
            for (var selectIdx = 0, selectLen = selectTransforms.length; selectIdx < selectLen; selectIdx++) {
                var selectTransform = selectTransforms[selectIdx];
                if (!SQExpr.equals(selectTransform.expr, expr) || !selectTransform.queryName)
                    continue;
                for (var colIdx = 0, colLen = cols.length; colIdx < colLen; colIdx++) {
                    if (selectIdx !== cols[colIdx].index)
                        continue;
                    return rows[rowIdx][colIdx];
                }
            }
        }
        data.getExprValueFromTable = getExprValueFromTable;
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
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
    var data;
    (function (data) {
        function createMatrixEvalContext(colorAllocatorProvider, dataViewMatrix) {
            // NOTE: Matrix context-sensitive evaluation is not yet implemented.
            return data.createStaticEvalContext(colorAllocatorProvider);
        }
        data.createMatrixEvalContext = createMatrixEvalContext;
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
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
(function (powerbi_1) {
    var StringExtensions = jsCommon.StringExtensions;
    var Formatting = jsCommon.Formatting;
    var RegExpExtensions = jsCommon.RegExpExtensions;
    /** Formatting Encoder */
    var FormattingEncoder;
    (function (FormattingEncoder) {
        function preserveEscaped(format, specialChars) {
            // Unicode U+E000 - U+F8FF is a private area and so we can use the chars from the range to encode the escaped sequences
            var length = specialChars.length;
            for (var i = 0; i < length; i++) {
                var oldText = "\\" + specialChars[i];
                var newText = String.fromCharCode(0xE000 + i);
                format = StringExtensions.replaceAll(format, oldText, newText);
            }
            return format;
        }
        FormattingEncoder.preserveEscaped = preserveEscaped;
        function restoreEscaped(format, specialChars) {
            // After formatting is complete we should restore the encoded escaped chars into the unescaped chars
            var length = specialChars.length;
            for (var i = 0; i < length; i++) {
                var oldText = String.fromCharCode(0xE000 + i);
                var newText = specialChars[i];
                format = StringExtensions.replaceAll(format, oldText, newText);
            }
            return StringExtensions.replaceAll(format, "\\", "");
        }
        FormattingEncoder.restoreEscaped = restoreEscaped;
        function preserveLiterals(format, literals) {
            // Unicode U+E000 - U+F8FF is a private area and so we can use the chars from the range to encode the escaped sequences
            format = StringExtensions.replaceAll(format, "\"", "'");
            for (var i = 0;; i++) {
                var fromIndex = format.indexOf("'");
                if (fromIndex < 0) {
                    break;
                }
                var toIndex = format.indexOf("'", fromIndex + 1);
                if (toIndex < 0) {
                    break;
                }
                var literal = format.substring(fromIndex, toIndex + 1);
                literals.push(literal.substring(1, toIndex - fromIndex));
                var token = String.fromCharCode(0xE100 + i);
                format = format.replace(literal, token);
            }
            return format;
        }
        FormattingEncoder.preserveLiterals = preserveLiterals;
        function restoreLiterals(format, literals) {
            var count = literals.length;
            for (var i = 0; i < count; i++) {
                var token = String.fromCharCode(0xE100 + i);
                var literal = literals[i];
                format = format.replace(token, literal);
            }
            return format;
        }
        FormattingEncoder.restoreLiterals = restoreLiterals;
    })(FormattingEncoder || (FormattingEncoder = {}));
    var IndexedTokensRegex = /({{)|(}})|{(\d+[^}]*)}/g;
    var ZeroPlaceholder = '0';
    var DigitPlaceholder = '#';
    var ExponentialFormatChar = 'E';
    var NumericPlaceholders = [ZeroPlaceholder, DigitPlaceholder];
    var NumericPlaceholderRegex = new RegExp(NumericPlaceholders.join('|'), 'g');
    /** Formatting Service */
    var FormattingService = (function () {
        function FormattingService() {
        }
        FormattingService.prototype.formatValue = function (value, format, culture) {
            // Handle special cases
            if (value === undefined || value === null) {
                return '';
            }
            var gculture = this.getCulture(culture);
            if (DateTimeFormat.canFormat(value)) {
                // Dates
                return DateTimeFormat.format(value, format, gculture);
            }
            else if (NumberFormat.canFormat(value)) {
                // Numbers
                return NumberFormat.format(value, format, gculture);
            }
            else {
                // Other data types - return as string
                return value.toString();
            }
        };
        FormattingService.prototype.format = function (formatWithIndexedTokens, args, culture) {
            var _this = this;
            if (!formatWithIndexedTokens) {
                return "";
            }
            var result = formatWithIndexedTokens.replace(IndexedTokensRegex, function (match, left, right, argToken) {
                if (left) {
                    return "{";
                }
                else if (right) {
                    return "}";
                }
                else {
                    var parts = argToken.split(":");
                    var argIndex = parseInt(parts[0], 10);
                    var argFormat = parts[1];
                    return _this.formatValue(args[argIndex], argFormat, culture);
                }
            });
            return result;
        };
        FormattingService.prototype.isStandardNumberFormat = function (format) {
            return NumberFormat.isStandardFormat(format);
        };
        FormattingService.prototype.formatNumberWithCustomOverride = function (value, format, nonScientificOverrideFormat, culture) {
            var gculture = this.getCulture(culture);
            return NumberFormat.formatWithCustomOverride(value, format, nonScientificOverrideFormat, gculture);
        };
        FormattingService.prototype.dateFormatString = function (unit) {
            if (!this._dateTimeScaleFormatInfo)
                this.initialize();
            return this._dateTimeScaleFormatInfo.getFormatString(unit);
        };
        /**
         * Sets the current localization culture
         * @param cultureSelector - name of a culture: "en", "en-UK", "fr-FR" etc. (See National Language Support (NLS) for full lists. Use "default" for invariant culture).
         */
        FormattingService.prototype.setCurrentCulture = function (cultureSelector) {
            if (this._currentCultureSelector !== cultureSelector) {
                this._currentCulture = this.getCulture(cultureSelector);
                this._currentCultureSelector = cultureSelector;
                this._dateTimeScaleFormatInfo = new DateTimeScaleFormatInfo(this._currentCulture);
            }
        };
        /**
         * Gets the culture assotiated with the specified cultureSelector ("en", "en-US", "fr-FR" etc).
         * @param cultureSelector - name of a culture: "en", "en-UK", "fr-FR" etc. (See National Language Support (NLS) for full lists. Use "default" for invariant culture).
         * Exposing this function for testability of unsupported cultures
         */
        FormattingService.prototype.getCulture = function (cultureSelector) {
            if (cultureSelector == null) {
                if (this._currentCulture == null) {
                    this.initialize();
                }
                return this._currentCulture;
            }
            else {
                var culture = Globalize.findClosestCulture(cultureSelector);
                if (!culture)
                    culture = Globalize.culture("en-US");
                return culture;
            }
        };
        /** By default the Globalization module initializes to the culture/calendar provided in the language/culture URL params */
        FormattingService.prototype.initialize = function () {
            var cultureName = this.getCurrentCulture();
            this.setCurrentCulture(cultureName);
            var calendarName = this.getUrlParam("calendar");
            if (calendarName) {
                var culture = this._currentCulture;
                var c = culture.calendars[calendarName];
                if (c) {
                    culture.calendar = c;
                }
            }
        };
        /**
         *  Exposing this function for testability
         */
        FormattingService.prototype.getCurrentCulture = function () {
            var urlParam = this.getUrlParam("language");
            if (urlParam) {
                return urlParam;
            }
            if (powerbi && powerbi.common && powerbi.common.cultureInfo) {
                // Get cultureInfo set in powerbi
                return powerbi.common.cultureInfo;
            }
            return window.navigator.userLanguage || window.navigator["language"] || Globalize.culture().name;
        };
        /**
         *  Exposing this function for testability
         *  @param name: queryString name
         */
        FormattingService.prototype.getUrlParam = function (name) {
            var param = window.location.search.match(RegExp("[?&]" + name + "=([^&]*)"));
            return param ? param[1] : undefined;
        };
        return FormattingService;
    }());
    /**
     * DateTimeFormat module contains the static methods for formatting the DateTimes.
     * It extends the JQuery.Globalize functionality to support complete set of .NET
     * formatting expressions for dates.
     */
    var DateTimeFormat;
    (function (DateTimeFormat) {
        var _currentCachedFormat;
        var _currentCachedProcessedFormat;
        /** Evaluates if the value can be formatted using the NumberFormat */
        function canFormat(value) {
            var result = value instanceof Date;
            return result;
        }
        DateTimeFormat.canFormat = canFormat;
        /** Formats the date using provided format and culture */
        function format(value, format, culture) {
            format = format || "G";
            var isStandard = format.length === 1;
            try {
                if (isStandard) {
                    return formatDateStandard(value, format, culture);
                }
                else {
                    return formatDateCustom(value, format, culture);
                }
            }
            catch (e) {
                return formatDateStandard(value, "G", culture);
            }
        }
        DateTimeFormat.format = format;
        /** Formats the date using standard format expression */
        function formatDateStandard(value, format, culture) {
            // In order to provide parity with .NET we have to support additional set of DateTime patterns.
            var patterns = culture.calendar.patterns;
            // Extend supported set of patterns
            ensurePatterns(culture.calendar);
            // Handle extended set of formats
            var output = Formatting.findDateFormat(value, format, culture.name);
            if (output.format.length === 1)
                format = patterns[output.format];
            else
                format = output.format;
            //need to revisit when globalization is enabled
            culture = Globalize.culture("en-US");
            return Globalize.format(output.value, format, culture);
        }
        /** Formats the date using custom format expression */
        function formatDateCustom(value, format, culture) {
            var result;
            var literals = [];
            format = FormattingEncoder.preserveEscaped(format, "\\dfFghHKmstyz:/%'\"");
            format = FormattingEncoder.preserveLiterals(format, literals);
            format = StringExtensions.replaceAll(format, "\"", "'");
            if (format.indexOf("F") > -1) {
                // F is not supported so we need to replace the F with f based on the milliseconds
                // Replace all sequences of F longer than 3 with "FFF"
                format = StringExtensions.replaceAll(format, "FFFF", "FFF");
                // Based on milliseconds update the format to use fff
                var milliseconds = value.getMilliseconds();
                if (milliseconds % 10 >= 1) {
                    format = StringExtensions.replaceAll(format, "FFF", "fff");
                }
                format = StringExtensions.replaceAll(format, "FFF", "FF");
                if ((milliseconds % 100) / 10 >= 1) {
                    format = StringExtensions.replaceAll(format, "FF", "ff");
                }
                format = StringExtensions.replaceAll(format, "FF", "F");
                if ((milliseconds % 1000) / 100 >= 1) {
                    format = StringExtensions.replaceAll(format, "F", "f");
                }
                format = StringExtensions.replaceAll(format, "F", "");
                if (format === "" || format === "%")
                    return "";
            }
            format = processCustomDateTimeFormat(format);
            result = Globalize.format(value, format, culture);
            result = localize(result, culture.calendar);
            result = FormattingEncoder.restoreLiterals(result, literals);
            result = FormattingEncoder.restoreEscaped(result, "\\dfFghHKmstyz:/%'\"");
            return result;
        }
        /** Translates unsupported .NET custom format expressions to the custom expressions supported by JQuery.Globalize */
        function processCustomDateTimeFormat(format) {
            if (format === _currentCachedFormat) {
                return _currentCachedProcessedFormat;
            }
            _currentCachedFormat = format;
            format = Formatting.fixDateTimeFormat(format);
            _currentCachedProcessedFormat = format;
            return format;
        }
        /** Localizes the time separator symbol */
        function localize(value, dictionary) {
            var timeSeparator = dictionary[":"];
            if (timeSeparator === ":") {
                return value;
            }
            var result = "";
            var count = value.length;
            for (var i = 0; i < count; i++) {
                var char = value.charAt(i);
                switch (char) {
                    case ":":
                        result += timeSeparator;
                        break;
                    default:
                        result += char;
                        break;
                }
            }
            return result;
        }
        function ensurePatterns(calendar) {
            var patterns = calendar.patterns;
            if (patterns["g"] === undefined) {
                patterns["g"] = patterns["f"].replace(patterns["D"], patterns["d"]); // Generic: Short date, short time
                patterns["G"] = patterns["F"].replace(patterns["D"], patterns["d"]); // Generic: Short date, long time
            }
        }
    })(DateTimeFormat || (DateTimeFormat = {}));
    /**
     * NumberFormat module contains the static methods for formatting the numbers.
     * It extends the JQuery.Globalize functionality to support complete set of .NET
     * formatting expressions for numeric types including custom formats.
     */
    var NumberFormat;
    (function (NumberFormat) {
        var NonScientificFormatRegex = /^\{.+\}.*/;
        var NumericalPlaceHolderRegex = /\{.+\}/;
        var ScientificFormatRegex = /e[+-]*[0#]+/i;
        var StandardFormatRegex = /^[a-z]\d{0,2}$/i; // a letter + up to 2 digits for precision specifier
        var TrailingZerosRegex = /0+$/;
        var DecimalFormatRegex = /\.([0#]*)/g;
        var NumericFormatRegex = /[0#,\.]+[0,#]*/g;
        var LastNumericPlaceholderRegex = /(0|#)([^(0|#)]*)$/;
        var DecimalFormatCharacter = '.';
        NumberFormat.NumberFormatComponentsDelimeter = ';';
        function getNonScientificFormatWithPrecision(baseFormat, numericFormat) {
            if (!numericFormat || baseFormat === undefined)
                return baseFormat;
            var newFormat = "{0:" + numericFormat + "}";
            return baseFormat.replace("{0}", newFormat);
        }
        function getNumericFormat(value, baseFormat) {
            if (baseFormat == null)
                return baseFormat;
            if (hasFormatComponents(baseFormat)) {
                var _a = NumberFormat.getComponents(baseFormat), positive = _a.positive, negative = _a.negative, zero = _a.zero;
                if (value > 0)
                    return getNumericFormatFromComponent(value, positive);
                else if (value === 0)
                    return getNumericFormatFromComponent(value, zero);
                return getNumericFormatFromComponent(value, negative);
            }
            return getNumericFormatFromComponent(value, baseFormat);
        }
        NumberFormat.getNumericFormat = getNumericFormat;
        function getNumericFormatFromComponent(value, format) {
            var match = RegExpExtensions.run(NumericFormatRegex, format);
            if (match)
                return match[0];
            return format;
        }
        function addDecimalsToFormat(baseFormat, decimals, trailingZeros) {
            if (decimals == null)
                return baseFormat;
            // Default format string
            if (baseFormat == null)
                baseFormat = ZeroPlaceholder;
            if (hasFormatComponents(baseFormat)) {
                var _a = NumberFormat.getComponents(baseFormat), positive = _a.positive, negative = _a.negative, zero = _a.zero;
                var formats = [positive, negative, zero];
                for (var i = 0; i < formats.length; i++) {
                    // Update format in formats array
                    formats[i] = addDecimalsToFormatComponent(formats[i], decimals, trailingZeros);
                }
                return formats.join(NumberFormat.NumberFormatComponentsDelimeter);
            }
            return addDecimalsToFormatComponent(baseFormat, decimals, trailingZeros);
        }
        NumberFormat.addDecimalsToFormat = addDecimalsToFormat;
        function addDecimalsToFormatComponent(format, decimals, trailingZeros) {
            decimals = Math.abs(decimals);
            if (decimals >= 0) {
                var placeholder = trailingZeros ? ZeroPlaceholder : DigitPlaceholder;
                var decimalPlaceholders = StringExtensions.repeat(placeholder, Math.abs(decimals));
                var match = RegExpExtensions.run(DecimalFormatRegex, format);
                if (match) {
                    var beforeDecimal = format.substr(0, match.index);
                    var formatDecimal = format.substr(match.index + 1, match[1].length);
                    var afterDecimal = format.substr(match.index + match[0].length);
                    if (trailingZeros)
                        // Use explicit decimals argument as placeholders
                        formatDecimal = decimalPlaceholders;
                    else {
                        var decimalChange = decimalPlaceholders.length - formatDecimal.length;
                        if (decimalChange > 0)
                            // Append decimalPlaceholders to existing decimal portion of format string
                            formatDecimal = formatDecimal + decimalPlaceholders.slice(-decimalChange);
                        else if (decimalChange < 0)
                            // Remove decimals from formatDecimal
                            formatDecimal = formatDecimal.slice(0, decimalChange);
                    }
                    if (formatDecimal.length > 0)
                        formatDecimal = DecimalFormatCharacter + formatDecimal;
                    return beforeDecimal + formatDecimal + afterDecimal;
                }
                else if (decimalPlaceholders.length > 0)
                    // Replace last numeric placeholder with decimal portion
                    return format.replace(LastNumericPlaceholderRegex, '$1' + DecimalFormatCharacter + decimalPlaceholders);
            }
            return format;
        }
        function hasFormatComponents(format) {
            return format.indexOf(NumberFormat.NumberFormatComponentsDelimeter) !== -1;
        }
        NumberFormat.hasFormatComponents = hasFormatComponents;
        function getComponents(format) {
            var signFormat = {
                hasNegative: false,
                positive: format,
                negative: format,
                zero: format,
            };
            var signSpecificFormats = format.split(NumberFormat.NumberFormatComponentsDelimeter);
            var formatCount = signSpecificFormats.length;
            debug.assert(!(formatCount > 3), 'format string should be of form positive[;negative;zero]');
            if (formatCount > 1) {
                signFormat.hasNegative = true;
                signFormat.positive = signFormat.zero = signSpecificFormats[0];
                signFormat.negative = signSpecificFormats[1];
                if (formatCount > 2)
                    signFormat.zero = signSpecificFormats[2];
            }
            return signFormat;
        }
        NumberFormat.getComponents = getComponents;
        var _lastCustomFormatMeta;
        /** Evaluates if the value can be formatted using the NumberFormat */
        function canFormat(value) {
            var result = typeof (value) === "number";
            return result;
        }
        NumberFormat.canFormat = canFormat;
        function isStandardFormat(format) {
            debug.assertValue(format, 'format');
            return StandardFormatRegex.test(format);
        }
        NumberFormat.isStandardFormat = isStandardFormat;
        /** Formats the number using specified format expression and culture */
        function format(value, format, culture) {
            format = format || "G";
            try {
                if (isStandardFormat(format))
                    return formatNumberStandard(value, format, culture);
                return formatNumberCustom(value, format, culture);
            }
            catch (e) {
                return Globalize.format(value, undefined, culture);
            }
        }
        NumberFormat.format = format;
        /** Performs a custom format with a value override.  Typically used for custom formats showing scaled values. */
        function formatWithCustomOverride(value, format, nonScientificOverrideFormat, culture) {
            debug.assertValue(value, 'value');
            debug.assertValue(format, 'format');
            debug.assertValue(nonScientificOverrideFormat, 'nonScientificOverrideFormat');
            debug.assertValue(culture, 'culture');
            debug.assert(!isStandardFormat(format), 'Standard format');
            return formatNumberCustom(value, format, culture, nonScientificOverrideFormat);
        }
        NumberFormat.formatWithCustomOverride = formatWithCustomOverride;
        /** Formats the number using standard format expression */
        function formatNumberStandard(value, format, culture) {
            var result;
            var precision = (format.length > 1 ? parseInt(format.substr(1, format.length - 1), 10) : undefined);
            var numberFormatInfo = culture.numberFormat;
            var formatChar = format.charAt(0);
            switch (formatChar) {
                case "e":
                case "E":
                    if (precision === undefined) {
                        precision = 6;
                    }
                    var mantissaDecimalDigits = StringExtensions.repeat("0", precision);
                    format = "0." + mantissaDecimalDigits + formatChar + "+000";
                    result = formatNumberCustom(value, format, culture);
                    break;
                case "f":
                case "F":
                    result = precision !== undefined ? value.toFixed(precision) : value.toFixed(numberFormatInfo.decimals);
                    result = localize(result, numberFormatInfo);
                    break;
                case "g":
                case "G":
                    var abs = Math.abs(value);
                    if (abs === 0 || (1E-4 <= abs && abs < 1E15)) {
                        // For the range of 0.0001 to 1,000,000,000,000,000 - use the normal form
                        result = precision !== undefined ? value.toPrecision(precision) : value.toString();
                    }
                    else {
                        // Otherwise use exponential
                        // Assert that value is a number and fall back on returning value if it is not
                        debug.assert(typeof (value) === "number", "value must be a number");
                        if (typeof (value) !== "number")
                            return String(value);
                        result = precision !== undefined ? value.toExponential(precision) : value.toExponential();
                        result = result.replace("e", "E");
                    }
                    result = localize(result, numberFormatInfo);
                    break;
                case "r":
                case "R":
                    result = value.toString();
                    result = localize(result, numberFormatInfo);
                    break;
                case "x":
                case "X":
                    result = value.toString(16);
                    if (formatChar === "X") {
                        result = result.toUpperCase();
                    }
                    if (precision !== undefined) {
                        var actualPrecision = result.length;
                        var isNegative = value < 0;
                        if (isNegative) {
                            actualPrecision--;
                        }
                        var paddingZerosCount = precision - actualPrecision;
                        var paddingZeros = undefined;
                        if (paddingZerosCount > 0) {
                            paddingZeros = StringExtensions.repeat("0", paddingZerosCount);
                        }
                        if (isNegative) {
                            result = "-" + paddingZeros + result.substr(1);
                        }
                        else {
                            result = paddingZeros + result;
                        }
                    }
                    result = localize(result, numberFormatInfo);
                    break;
                default:
                    result = Globalize.format(value, format, culture);
            }
            return result;
        }
        /** Formats the number using custom format expression */
        function formatNumberCustom(value, format, culture, nonScientificOverrideFormat) {
            var result;
            var numberFormatInfo = culture.numberFormat;
            if (isFinite(value)) {
                // Split format by positive[;negative;zero] pattern
                var formatComponents = getComponents(format);
                // Pick a format based on the sign of value
                if (value > 0) {
                    format = formatComponents.positive;
                }
                else if (value === 0) {
                    format = formatComponents.zero;
                }
                else {
                    format = formatComponents.negative;
                }
                // Normalize value if we have an explicit negative format
                if (formatComponents.hasNegative)
                    value = Math.abs(value);
                // Get format metadata
                var formatMeta = getCustomFormatMetadata(format, true /*calculatePrecision*/);
                // Preserve literals and escaped chars
                if (formatMeta.hasEscapes) {
                    format = FormattingEncoder.preserveEscaped(format, "\\0#.,%‰");
                }
                var literals = [];
                if (formatMeta.hasQuotes) {
                    format = FormattingEncoder.preserveLiterals(format, literals);
                }
                // Scientific format
                if (formatMeta.hasE && !nonScientificOverrideFormat) {
                    var scientificMatch = RegExpExtensions.run(ScientificFormatRegex, format);
                    if (scientificMatch) {
                        // Case 2.1. Scientific custom format
                        var formatM = format.substr(0, scientificMatch.index);
                        var formatE = format.substr(scientificMatch.index + 2); // E(+|-)
                        var precision = getCustomFormatPrecision(formatM, formatMeta);
                        var scale = getCustomFormatScale(formatM, formatMeta);
                        if (scale !== 1) {
                            value = value * scale;
                        }
                        // Assert that value is a number and fall back on returning value if it is not
                        debug.assert(typeof (value) === "number", "value must be a number");
                        if (typeof (value) !== "number")
                            return String(value);
                        var s = value.toExponential(precision);
                        var indexOfE = s.indexOf("e");
                        var mantissa = s.substr(0, indexOfE);
                        var exp = s.substr(indexOfE + 1);
                        var resultM = fuseNumberWithCustomFormat(mantissa, formatM, numberFormatInfo);
                        var resultE = fuseNumberWithCustomFormat(exp, formatE, numberFormatInfo);
                        if (resultE.charAt(0) === "+" && scientificMatch[0].charAt(1) !== "+") {
                            resultE = resultE.substr(1);
                        }
                        var e = scientificMatch[0].charAt(0);
                        result = resultM + e + resultE;
                    }
                }
                // Non scientific format
                if (result === undefined) {
                    var valueFormatted = void 0;
                    var isValueGlobalized = false;
                    var precision = getCustomFormatPrecision(format, formatMeta);
                    var scale = getCustomFormatScale(format, formatMeta);
                    if (scale !== 1)
                        value = value * scale;
                    // Rounding
                    value = parseFloat(toNonScientific(value, precision));
                    if (nonScientificOverrideFormat) {
                        // Get numeric format from format string
                        var numericFormat = NumberFormat.getNumericFormat(value, format);
                        // Add separators and decimalFormat to nonScientificFormat
                        nonScientificOverrideFormat = getNonScientificFormatWithPrecision(nonScientificOverrideFormat, numericFormat);
                        // Format the value
                        valueFormatted = powerbi_1.formattingService.format(nonScientificOverrideFormat, [value], culture.name);
                        isValueGlobalized = true;
                    }
                    else
                        valueFormatted = toNonScientific(value, precision);
                    result = fuseNumberWithCustomFormat(valueFormatted, format, numberFormatInfo, nonScientificOverrideFormat, isValueGlobalized);
                }
                if (formatMeta.hasQuotes) {
                    result = FormattingEncoder.restoreLiterals(result, literals);
                }
                if (formatMeta.hasEscapes) {
                    result = FormattingEncoder.restoreEscaped(result, "\\0#.,%‰");
                }
                _lastCustomFormatMeta = formatMeta;
            }
            else {
                return Globalize.format(value, undefined);
            }
            return result;
        }
        /** Returns string with the fixed point respresentation of the number */
        function toNonScientific(value, precision) {
            var result = "";
            var precisionZeros = 0;
            // Double precision numbers support actual 15-16 decimal digits of precision.
            if (precision > 16) {
                precisionZeros = precision - 16;
                precision = 16;
            }
            var digitsBeforeDecimalPoint = powerbi_1.Double.log10(Math.abs(value));
            if (digitsBeforeDecimalPoint < 16) {
                if (digitsBeforeDecimalPoint > 0) {
                    var maxPrecision = 16 - digitsBeforeDecimalPoint;
                    if (precision > maxPrecision) {
                        precisionZeros += precision - maxPrecision;
                        precision = maxPrecision;
                    }
                }
                result = value.toFixed(precision);
            }
            else if (digitsBeforeDecimalPoint === 16) {
                result = value.toFixed(0);
                precisionZeros += precision;
                if (precisionZeros > 0) {
                    result += ".";
                }
            }
            else {
                // Different browsers have different implementations of the toFixed().
                // In IE it returns fixed format no matter what's the number. In FF and Chrome the method returns exponential format for numbers greater than 1E21.
                // So we need to check for range and convert the to exponential with the max precision.
                // Then we convert exponential string to fixed by removing the dot and padding with "power" zeros.
                // Assert that value is a number and fall back on returning value if it is not
                debug.assert(typeof (value) === "number", "value must be a number");
                if (typeof (value) !== "number")
                    return String(value);
                result = value.toExponential(15);
                var indexOfE = result.indexOf("e");
                if (indexOfE > 0) {
                    var indexOfDot = result.indexOf(".");
                    var mantissa = result.substr(0, indexOfE);
                    var exp = result.substr(indexOfE + 1);
                    var powerZeros = parseInt(exp, 10) - (mantissa.length - indexOfDot - 1);
                    result = mantissa.replace(".", "") + StringExtensions.repeat("0", powerZeros);
                    if (precision > 0) {
                        result = result + "." + StringExtensions.repeat("0", precision);
                    }
                }
            }
            if (precisionZeros > 0) {
                result = result + StringExtensions.repeat("0", precisionZeros);
            }
            return result;
        }
        /**
         * Returns the formatMetadata of the format
         * When calculating precision and scale, if format string of
         * positive[;negative;zero] => positive format will be used
         * @param (required) format - format string
         * @param (optional) calculatePrecision - calculate precision of positive format
         * @param (optional) calculateScale - calculate scale of positive format
         */
        function getCustomFormatMetadata(format, calculatePrecision, calculateScale) {
            if (_lastCustomFormatMeta !== undefined && format === _lastCustomFormatMeta.format) {
                return _lastCustomFormatMeta;
            }
            var result = {
                format: format,
                hasEscapes: false,
                hasQuotes: false,
                hasE: false,
                hasCommas: false,
                hasDots: false,
                hasPercent: false,
                hasPermile: false,
                precision: undefined,
                scale: undefined,
            };
            for (var i = 0, length_1 = format.length; i < length_1; i++) {
                var c = format.charAt(i);
                switch (c) {
                    case "\\":
                        result.hasEscapes = true;
                        break;
                    case "'":
                    case "\"":
                        result.hasQuotes = true;
                        break;
                    case "e":
                    case "E":
                        result.hasE = true;
                        break;
                    case ",":
                        result.hasCommas = true;
                        break;
                    case ".":
                        result.hasDots = true;
                        break;
                    case "%":
                        result.hasPercent = true;
                        break;
                    case "‰":
                        result.hasPermile = true;
                        break;
                }
            }
            // Use positive format for calculating these values
            var formatComponents = getComponents(format);
            if (calculatePrecision)
                result.precision = getCustomFormatPrecision(formatComponents.positive, result);
            if (calculateScale)
                result.scale = getCustomFormatScale(formatComponents.positive, result);
            return result;
        }
        NumberFormat.getCustomFormatMetadata = getCustomFormatMetadata;
        /** Returns the decimal precision of format based on the number of # and 0 chars after the decimal point
          * Important: The input format string needs to be split to the appropriate pos/neg/zero portion to work correctly */
        function getCustomFormatPrecision(format, formatMeta) {
            if (formatMeta.precision > -1) {
                return formatMeta.precision;
            }
            var result = 0;
            if (formatMeta.hasDots) {
                var dotIndex = format.indexOf(".");
                if (dotIndex > -1) {
                    var count = format.length;
                    for (var i = dotIndex; i < count; i++) {
                        var char = format.charAt(i);
                        if (char.match(NumericPlaceholderRegex))
                            result++;
                        // 0.00E+0 :: Break before counting 0 in
                        // exponential portion of format string
                        if (char === ExponentialFormatChar)
                            break;
                    }
                    result = Math.min(19, result);
                }
            }
            formatMeta.precision = result;
            return result;
        }
        /** Returns the scale factor of the format based on the "%" and scaling "," chars in the format */
        function getCustomFormatScale(format, formatMeta) {
            if (formatMeta.scale > -1) {
                return formatMeta.scale;
            }
            var result = 1;
            if (formatMeta.hasPercent && format.indexOf("%") > -1) {
                result = result * 100;
            }
            if (formatMeta.hasPermile && format.indexOf("‰") > -1) {
                result = result * 1000;
            }
            if (formatMeta.hasCommas) {
                var dotIndex = format.indexOf(".");
                if (dotIndex === -1) {
                    dotIndex = format.length;
                }
                for (var i = dotIndex - 1; i > -1; i--) {
                    var char = format.charAt(i);
                    if (char === ",") {
                        result = result / 1000;
                    }
                    else {
                        break;
                    }
                }
            }
            formatMeta.scale = result;
            return result;
        }
        function fuseNumberWithCustomFormat(value, format, numberFormatInfo, nonScientificOverrideFormat, isValueGlobalized) {
            var suppressModifyValue = !!nonScientificOverrideFormat;
            var formatParts = format.split(".", 2);
            if (formatParts.length === 2) {
                var wholeFormat = formatParts[0];
                var fractionFormat = formatParts[1];
                var displayUnit = "";
                // Remove display unit from value before splitting on "." as localized display units sometimes end with "."
                if (nonScientificOverrideFormat) {
                    debug.assert(NonScientificFormatRegex.test(nonScientificOverrideFormat), "Number should always precede the display unit");
                    displayUnit = nonScientificOverrideFormat.replace(NumericalPlaceHolderRegex, "");
                    value = value.replace(displayUnit, "");
                }
                var globalizedDecimalSeparator = numberFormatInfo["."];
                var decimalSeparator = isValueGlobalized ? globalizedDecimalSeparator : ".";
                var valueParts = value.split(decimalSeparator, 2);
                var wholeValue = valueParts.length === 1 ? valueParts[0] + displayUnit : valueParts[0];
                var fractionValue = valueParts.length === 2 ? valueParts[1] + displayUnit : "";
                fractionValue = fractionValue.replace(TrailingZerosRegex, "");
                var wholeFormattedValue = fuseNumberWithCustomFormatLeft(wholeValue, wholeFormat, numberFormatInfo, suppressModifyValue);
                var fractionFormattedValue = fuseNumberWithCustomFormatRight(fractionValue, fractionFormat, suppressModifyValue);
                if (fractionFormattedValue.fmtOnly || fractionFormattedValue.value === "")
                    return wholeFormattedValue + fractionFormattedValue.value;
                return wholeFormattedValue + globalizedDecimalSeparator + fractionFormattedValue.value;
            }
            return fuseNumberWithCustomFormatLeft(value, format, numberFormatInfo, suppressModifyValue);
        }
        function fuseNumberWithCustomFormatLeft(value, format, numberFormatInfo, suppressModifyValue) {
            var groupSymbolIndex = format.indexOf(",");
            var enableGroups = groupSymbolIndex > -1 && groupSymbolIndex < Math.max(format.lastIndexOf("0"), format.lastIndexOf("#")) && numberFormatInfo[","];
            var groupDigitCount = 0;
            var groupIndex = 0;
            var groupSizes = numberFormatInfo.groupSizes || [3];
            var groupSize = groupSizes[0];
            var groupSeparator = numberFormatInfo[","];
            var sign = "";
            var firstChar = value.charAt(0);
            if (firstChar === "+" || firstChar === "-") {
                sign = numberFormatInfo[firstChar];
                value = value.substr(1);
            }
            var isZero = value === "0";
            var result = "";
            var leftBuffer = "";
            var vi = value.length - 1;
            var fmtOnly = true;
            // Iterate through format chars and replace 0 and # with the digits from the value string
            for (var fi = format.length - 1; fi > -1; fi--) {
                var formatChar = format.charAt(fi);
                switch (formatChar) {
                    case ZeroPlaceholder:
                    case DigitPlaceholder:
                        fmtOnly = false;
                        if (leftBuffer !== "") {
                            result = leftBuffer + result;
                            leftBuffer = "";
                        }
                        if (!suppressModifyValue) {
                            if (vi > -1 || formatChar === ZeroPlaceholder) {
                                if (enableGroups) {
                                    // If the groups are enabled we'll need to keep track of the current group index and periodically insert group separator,
                                    if (groupDigitCount === groupSize) {
                                        result = groupSeparator + result;
                                        groupIndex++;
                                        if (groupIndex < groupSizes.length) {
                                            groupSize = groupSizes[groupIndex];
                                        }
                                        groupDigitCount = 1;
                                    }
                                    else {
                                        groupDigitCount++;
                                    }
                                }
                            }
                            if (vi > -1) {
                                if (isZero && formatChar === DigitPlaceholder) {
                                }
                                else {
                                    result = value.charAt(vi) + result;
                                }
                                vi--;
                            }
                            else if (formatChar !== DigitPlaceholder) {
                                result = formatChar + result;
                            }
                        }
                        break;
                    case ",":
                        // We should skip all the , chars
                        break;
                    default:
                        leftBuffer = formatChar + leftBuffer;
                        break;
                }
            }
            // If the value didn't fit into the number of zeros provided in the format then we should insert the missing part of the value into the result
            if (!suppressModifyValue) {
                if (vi > -1 && result !== "") {
                    if (enableGroups) {
                        while (vi > -1) {
                            if (groupDigitCount === groupSize) {
                                result = groupSeparator + result;
                                groupIndex++;
                                if (groupIndex < groupSizes.length) {
                                    groupSize = groupSizes[groupIndex];
                                }
                                groupDigitCount = 1;
                            }
                            else {
                                groupDigitCount++;
                            }
                            result = value.charAt(vi) + result;
                            vi--;
                        }
                    }
                    else {
                        result = value.substr(0, vi + 1) + result;
                    }
                }
                // Insert sign in front of the leftBuffer and result
                return sign + leftBuffer + result;
            }
            if (fmtOnly)
                // If the format doesn't specify any digits to be displayed, then just return the format we've parsed up until now.
                return sign + leftBuffer + result;
            return sign + leftBuffer + value + result;
        }
        function fuseNumberWithCustomFormatRight(value, format, suppressModifyValue) {
            var vi = 0;
            var fCount = format.length;
            var vCount = value.length;
            if (suppressModifyValue) {
                debug.assert(fCount > 0, "Empty formatting string");
                var lastChar = format.charAt(fCount - 1);
                if (!lastChar.match(NumericPlaceholderRegex))
                    return {
                        value: value + lastChar,
                        fmtOnly: value === "",
                    };
                return {
                    value: value,
                    fmtOnly: value === "",
                };
            }
            var result = "", fmtOnly = true;
            for (var fi = 0; fi < fCount; fi++) {
                var formatChar = format.charAt(fi);
                if (vi < vCount) {
                    switch (formatChar) {
                        case ZeroPlaceholder:
                        case DigitPlaceholder:
                            result += value[vi++];
                            fmtOnly = false;
                            break;
                        default:
                            result += formatChar;
                    }
                }
                else {
                    if (formatChar !== DigitPlaceholder) {
                        result += formatChar;
                        fmtOnly = fmtOnly && (formatChar !== ZeroPlaceholder);
                    }
                }
            }
            return {
                value: result,
                fmtOnly: fmtOnly,
            };
        }
        function localize(value, dictionary) {
            var plus = dictionary["+"];
            var minus = dictionary["-"];
            var dot = dictionary["."];
            var comma = dictionary[","];
            if (plus === "+" && minus === "-" && dot === "." && comma === ",") {
                return value;
            }
            var count = value.length;
            var result = "";
            for (var i = 0; i < count; i++) {
                var char = value.charAt(i);
                switch (char) {
                    case "+":
                        result = result + plus;
                        break;
                    case "-":
                        result = result + minus;
                        break;
                    case ".":
                        result = result + dot;
                        break;
                    case ",":
                        result = result + comma;
                        break;
                    default:
                        result = result + char;
                        break;
                }
            }
            return result;
        }
    })(NumberFormat = powerbi_1.NumberFormat || (powerbi_1.NumberFormat = {}));
    /** DateTimeScaleFormatInfo is used to calculate and keep the Date formats used for different units supported by the DateTimeScaleModel */
    var DateTimeScaleFormatInfo = (function () {
        // Constructor
        /**
         * Creates new instance of the DateTimeScaleFormatInfo class.
         * @param culture - culture which calendar info is going to be used to derive the formats.
         */
        function DateTimeScaleFormatInfo(culture) {
            var calendar = culture.calendar;
            var patterns = calendar.patterns;
            var monthAbbreviations = calendar["months"]["namesAbbr"];
            var cultureHasMonthAbbr = monthAbbreviations && monthAbbreviations[0];
            var yearMonthPattern = patterns["Y"];
            var monthDayPattern = patterns["M"];
            var fullPattern = patterns["f"];
            var longTimePattern = patterns["T"];
            var shortTimePattern = patterns["t"];
            var separator = fullPattern.indexOf(",") > -1 ? ", " : " ";
            var hasYearSymbol = yearMonthPattern.indexOf("yyyy'") === 0 && yearMonthPattern.length > 6 && yearMonthPattern[6] === '\'';
            this.YearPattern = hasYearSymbol ? yearMonthPattern.substr(0, 7) : "yyyy";
            var yearPos = fullPattern.indexOf("yy");
            var monthPos = fullPattern.indexOf("MMMM");
            this.MonthPattern = cultureHasMonthAbbr && monthPos > -1 ? (yearPos > monthPos ? "MMM yyyy" : "yyyy MMM") : yearMonthPattern;
            this.DayPattern = cultureHasMonthAbbr ? monthDayPattern.replace("MMMM", "MMM") : monthDayPattern;
            var minutePos = fullPattern.indexOf("mm");
            var pmPos = fullPattern.indexOf("tt");
            var shortHourPattern = pmPos > -1 ? shortTimePattern.replace(":mm ", "") : shortTimePattern;
            this.HourPattern = yearPos < minutePos ? this.DayPattern + separator + shortHourPattern : shortHourPattern + separator + this.DayPattern;
            this.MinutePattern = shortTimePattern;
            this.SecondPattern = longTimePattern;
            this.MillisecondPattern = longTimePattern.replace("ss", "ss.fff");
            // Special cases
            switch (culture.name) {
                case "fi-FI":
                    this.DayPattern = this.DayPattern.replace("'ta'", ""); // Fix for finish 'ta' suffix for month names.
                    this.HourPattern = this.HourPattern.replace("'ta'", "");
                    break;
            }
        }
        // Methods
        /**
         * Returns the format string of the provided DateTimeUnit.
         * @param unit - date or time unit
         */
        DateTimeScaleFormatInfo.prototype.getFormatString = function (unit) {
            switch (unit) {
                case powerbi_1.DateTimeUnit.Year:
                    return this.YearPattern;
                case powerbi_1.DateTimeUnit.Month:
                    return this.MonthPattern;
                case powerbi_1.DateTimeUnit.Week:
                case powerbi_1.DateTimeUnit.Day:
                    return this.DayPattern;
                case powerbi_1.DateTimeUnit.Hour:
                    return this.HourPattern;
                case powerbi_1.DateTimeUnit.Minute:
                    return this.MinutePattern;
                case powerbi_1.DateTimeUnit.Second:
                    return this.SecondPattern;
                case powerbi_1.DateTimeUnit.Millisecond:
                    return this.MillisecondPattern;
            }
            debug.assertFail('Unexpected unit: ' + unit);
        };
        return DateTimeScaleFormatInfo;
    }());
    powerbi_1.formattingService = new FormattingService();
})(powerbi || (powerbi = {}));
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
    var data;
    (function (data) {
        /** Serializes SQExpr in a form optimized in-memory comparison, but not intended for storage on disk. */
        var SQExprShortSerializer;
        (function (SQExprShortSerializer) {
            function serialize(expr) {
                return JSON.stringify(expr.accept(SQExprSerializer.instance));
            }
            SQExprShortSerializer.serialize = serialize;
            function serializeArray(exprs) {
                var str = '[';
                for (var i = 0, len = exprs.length; i < len; i++) {
                    if (i > 0)
                        str += ',';
                    str += SQExprShortSerializer.serialize(exprs[i]);
                }
                return str + ']';
            }
            SQExprShortSerializer.serializeArray = serializeArray;
            /** Responsible for serializing an SQExpr into a comparable string. */
            var SQExprSerializer = (function (_super) {
                __extends(SQExprSerializer, _super);
                function SQExprSerializer() {
                    _super.apply(this, arguments);
                }
                SQExprSerializer.prototype.visitColumnRef = function (expr) {
                    return {
                        col: {
                            s: expr.source.accept(this),
                            r: expr.ref,
                        }
                    };
                };
                SQExprSerializer.prototype.visitMeasureRef = function (expr) {
                    return {
                        measure: {
                            s: expr.source.accept(this),
                            r: expr.ref,
                        }
                    };
                };
                SQExprSerializer.prototype.visitAggr = function (expr) {
                    return {
                        agg: {
                            a: expr.arg.accept(this),
                            f: expr.func,
                        }
                    };
                };
                SQExprSerializer.prototype.visitEntity = function (expr) {
                    debug.assertValue(expr, 'expr');
                    debug.assertValue(expr.entity, 'expr.entity');
                    return {
                        e: expr.entity
                    };
                };
                SQExprSerializer.prototype.visitHierarchyLevel = function (expr) {
                    return {
                        h: expr.arg.accept(this),
                        l: expr.level,
                    };
                };
                SQExprSerializer.prototype.visitHierarchy = function (expr) {
                    return {
                        e: expr.arg.accept(this),
                        h: expr.hierarchy,
                    };
                };
                SQExprSerializer.prototype.visitPropertyVariationSource = function (expr) {
                    return {
                        e: expr.arg.accept(this),
                        n: expr.name,
                        p: expr.property,
                    };
                };
                SQExprSerializer.prototype.visitAnd = function (expr) {
                    debug.assertValue(expr, 'expr');
                    return {
                        and: {
                            l: expr.left.accept(this),
                            r: expr.right.accept(this),
                        }
                    };
                };
                SQExprSerializer.prototype.visitCompare = function (expr) {
                    debug.assertValue(expr, 'expr');
                    return {
                        comp: {
                            k: expr.comparison,
                            l: expr.left.accept(this),
                            r: expr.right.accept(this),
                        }
                    };
                };
                SQExprSerializer.prototype.visitConstant = function (expr) {
                    debug.assertValue(expr, 'expr');
                    return {
                        const: {
                            t: expr.type.primitiveType,
                            v: expr.value,
                        }
                    };
                };
                SQExprSerializer.prototype.visitArithmetic = function (expr) {
                    debug.assertValue(expr, 'expr');
                    return {
                        arithmetic: {
                            o: expr.operator,
                            l: expr.left.accept(this),
                            r: expr.right.accept(this)
                        }
                    };
                };
                SQExprSerializer.prototype.visitScopedEval = function (expr) {
                    debug.assertValue(expr, 'expr');
                    return {
                        scopedEval: {
                            e: expr.expression.accept(this),
                            s: serializeArray(expr.scope)
                        }
                    };
                };
                SQExprSerializer.prototype.visitDefault = function (expr) {
                    debug.assertFail('Unexpected expression type found in DataViewScopeIdentity.');
                    return;
                };
                SQExprSerializer.instance = new SQExprSerializer();
                return SQExprSerializer;
            }(data.DefaultSQExprVisitor));
        })(SQExprShortSerializer = data.SQExprShortSerializer || (data.SQExprShortSerializer = {}));
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
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
    var visuals;
    (function (visuals) {
        var Selector = powerbi.data.Selector;
        /**
         * A combination of identifiers used to uniquely identify
         * data points and their bound geometry.
         */
        var SelectionId = (function () {
            function SelectionId(selector, highlight) {
                this.selector = selector;
                this.highlight = highlight;
                this.key = JSON.stringify({ selector: selector ? Selector.getKey(selector) : null, highlight: highlight });
                this.keyWithoutHighlight = JSON.stringify({ selector: selector ? Selector.getKey(selector) : null });
            }
            SelectionId.prototype.equals = function (other) {
                if (!this.selector || !other.selector) {
                    return (!this.selector === !other.selector) && this.highlight === other.highlight;
                }
                return this.highlight === other.highlight && Selector.equals(this.selector, other.selector);
            };
            /**
             * Checks equality against other for all identifiers existing in this.
             */
            SelectionId.prototype.includes = function (other, ignoreHighlight) {
                if (ignoreHighlight === void 0) { ignoreHighlight = false; }
                var thisSelector = this.selector;
                var otherSelector = other.selector;
                if (!thisSelector || !otherSelector) {
                    return false;
                }
                var thisData = thisSelector.data;
                var otherData = otherSelector.data;
                if (!thisData && (thisSelector.metadata && thisSelector.metadata !== otherSelector.metadata))
                    return false;
                if (!ignoreHighlight && this.highlight !== other.highlight)
                    return false;
                if (thisData) {
                    if (!otherData)
                        return false;
                    if (thisData.length > 0) {
                        for (var i = 0, ilen = thisData.length; i < ilen; i++) {
                            var thisValue = thisData[i];
                            if (!otherData.some(function (otherValue) { return powerbi.DataViewScopeIdentity.equals(thisValue, otherValue); }))
                                return false;
                        }
                    }
                }
                return true;
            };
            SelectionId.prototype.getKey = function () {
                return this.key;
            };
            SelectionId.prototype.getKeyWithoutHighlight = function () {
                return this.keyWithoutHighlight;
            };
            /**
             * Temporary workaround since a few things currently rely on this, but won't need to.
             */
            SelectionId.prototype.hasIdentity = function () {
                return (this.selector && !!this.selector.data);
            };
            SelectionId.prototype.getSelector = function () {
                return this.selector;
            };
            SelectionId.prototype.getSelectorsByColumn = function () {
                return this.selectorsByColumn;
            };
            SelectionId.createNull = function (highlight) {
                if (highlight === void 0) { highlight = false; }
                return new SelectionId(null, highlight);
            };
            SelectionId.createWithId = function (id, highlight) {
                if (highlight === void 0) { highlight = false; }
                var selector = null;
                if (id) {
                    selector = {
                        data: [id]
                    };
                }
                return new SelectionId(selector, highlight);
            };
            SelectionId.createWithMeasure = function (measureId, highlight) {
                if (highlight === void 0) { highlight = false; }
                debug.assertValue(measureId, 'measureId');
                var selector = {
                    metadata: measureId
                };
                var selectionId = new SelectionId(selector, highlight);
                selectionId.selectorsByColumn = { metadata: measureId };
                return selectionId;
            };
            SelectionId.createWithIdAndMeasure = function (id, measureId, highlight) {
                if (highlight === void 0) { highlight = false; }
                var selector = {};
                if (id) {
                    selector.data = [id];
                }
                if (measureId)
                    selector.metadata = measureId;
                if (!id && !measureId)
                    selector = null;
                var selectionId = new SelectionId(selector, highlight);
                return selectionId;
            };
            SelectionId.createWithIdAndMeasureAndCategory = function (id, measureId, queryName, highlight) {
                if (highlight === void 0) { highlight = false; }
                var selectionId = this.createWithIdAndMeasure(id, measureId, highlight);
                if (selectionId.selector) {
                    selectionId.selectorsByColumn = {};
                    if (id && queryName) {
                        selectionId.selectorsByColumn.dataMap = {};
                        selectionId.selectorsByColumn.dataMap[queryName] = id;
                    }
                    if (measureId)
                        selectionId.selectorsByColumn.metadata = measureId;
                }
                return selectionId;
            };
            SelectionId.createWithIds = function (id1, id2, highlight) {
                if (highlight === void 0) { highlight = false; }
                var selector = null;
                var selectorData = SelectionId.idArray(id1, id2);
                if (selectorData)
                    selector = { data: selectorData };
                return new SelectionId(selector, highlight);
            };
            SelectionId.createWithIdsAndMeasure = function (id1, id2, measureId, highlight) {
                if (highlight === void 0) { highlight = false; }
                var selector = {};
                var selectorData = SelectionId.idArray(id1, id2);
                if (selectorData)
                    selector.data = selectorData;
                if (measureId)
                    selector.metadata = measureId;
                if (!id1 && !id2 && !measureId)
                    selector = null;
                return new SelectionId(selector, highlight);
            };
            SelectionId.createWithSelectorForColumnAndMeasure = function (dataMap, measureId, highlight) {
                if (highlight === void 0) { highlight = false; }
                var selectionId;
                var keys = Object.keys(dataMap);
                if (keys.length === 2) {
                    selectionId = this.createWithIdsAndMeasure(dataMap[keys[0]], dataMap[keys[1]], measureId, highlight);
                }
                else if (keys.length === 1) {
                    selectionId = this.createWithIdsAndMeasure(dataMap[keys[0]], null, measureId, highlight);
                }
                else {
                    selectionId = this.createWithIdsAndMeasure(null, null, measureId, highlight);
                }
                var selectorsByColumn = {};
                if (!_.isEmpty(dataMap))
                    selectorsByColumn.dataMap = dataMap;
                if (measureId)
                    selectorsByColumn.metadata = measureId;
                if (!dataMap && !measureId)
                    selectorsByColumn = null;
                selectionId.selectorsByColumn = selectorsByColumn;
                return selectionId;
            };
            SelectionId.createWithHighlight = function (original) {
                debug.assertValue(original, 'original');
                debug.assert(!original.highlight, '!original.highlight');
                var newId = new SelectionId(original.getSelector(), /*highlight*/ true);
                newId.selectorsByColumn = original.selectorsByColumn;
                return newId;
            };
            SelectionId.idArray = function (id1, id2) {
                if (id1 || id2) {
                    var data_7 = [];
                    if (id1)
                        data_7.push(id1);
                    if (id2 && id2 !== id1)
                        data_7.push(id2);
                    return data_7;
                }
            };
            return SelectionId;
        }());
        visuals.SelectionId = SelectionId;
        /**
         * This class is designed to simplify the creation of SelectionId objects
         * It allows chaining to build up an object before calling 'create' to build a SelectionId
         */
        var SelectionIdBuilder = (function () {
            function SelectionIdBuilder() {
            }
            SelectionIdBuilder.builder = function () {
                return new SelectionIdBuilder();
            };
            SelectionIdBuilder.prototype.withCategory = function (categoryColumn, index) {
                if (categoryColumn && categoryColumn.source && categoryColumn.source.queryName && categoryColumn.identity)
                    this.ensureDataMap()[categoryColumn.source.queryName] = categoryColumn.identity[index];
                return this;
            };
            SelectionIdBuilder.prototype.withSeries = function (seriesColumn, valueColumn) {
                if (seriesColumn && seriesColumn.source && seriesColumn.source.queryName && valueColumn)
                    this.ensureDataMap()[seriesColumn.source.queryName] = valueColumn.identity;
                return this;
            };
            SelectionIdBuilder.prototype.withMeasure = function (measureId) {
                this.measure = measureId;
                return this;
            };
            SelectionIdBuilder.prototype.createSelectionId = function () {
                return SelectionId.createWithSelectorForColumnAndMeasure(this.ensureDataMap(), this.measure);
            };
            SelectionIdBuilder.prototype.ensureDataMap = function () {
                if (!this.dataMap)
                    this.dataMap = {};
                return this.dataMap;
            };
            return SelectionIdBuilder;
        }());
        visuals.SelectionIdBuilder = SelectionIdBuilder;
    })(visuals = powerbi.visuals || (powerbi.visuals = {}));
})(powerbi || (powerbi = {}));

//# sourceMappingURL=VisualsData.js.map
