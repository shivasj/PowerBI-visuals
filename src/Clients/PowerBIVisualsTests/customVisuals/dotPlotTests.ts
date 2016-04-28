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

module powerbitests.customVisuals {
	import VisualClass = powerbi.visuals.samples.DotPlot;

	describe("DotPlot", () => {
		describe('capabilities', () => {
			it("registered capabilities", () => expect(VisualClass.capabilities).toBeDefined());
		});

		describe("DOM tests", () => {
			let visualBuilder: DotPlotBuilder;
			let dataViews: powerbi.DataView[];

			beforeEach(() => {
				visualBuilder = new DotPlotBuilder();
				dataViews = [new powerbitests.customVisuals.sampleDataViews.DotPlotData().getDataView()];
			});

			it("svg element created", () => expect(visualBuilder.mainElement[0]).toBeInDOM());

			it("update", (done) => {
				visualBuilder.update(dataViews);
				setTimeout(() => {
					expect(visualBuilder.mainElement.children(".dotplotSelector").children(".dotplotGroup").length)
						.toBeGreaterThan(0);
					expect(visualBuilder.mainElement.children('.axisGraphicsContext').children(".x.axis").children(".tick").length)
						.toBe(dataViews[0].categorical.categories[0].values.length);
					visualBuilder.mainElement.children(".labels").children(".data-labels").each((i, x) => {
						let fill = x.getAttribute("style").replace("fill: ", "").replace(";", "");
						let hexFill = fill;
						if (_.startsWith(fill, '#')) {
							var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(fill);
							hexFill = "rgb(" + parseInt(result[1], 16) + ", " + parseInt(result[2], 16) + ", " + parseInt(result[3], 16) + ")";
						}
						expect(hexFill).toBe("rgb(18, 52, 86)");
						expect(window.getComputedStyle(x).fontSize).toBe("12px");
					});
					done();
				}, powerbitests.DefaultWaitForRender);
			});
		});
	});

	class DotPlotBuilder extends VisualBuilderBase<VisualClass> {
		constructor(height: number = 200, width: number = 300, isMinervaVisualPlugin: boolean = false) {
			super(height, width, isMinervaVisualPlugin);
			this.build();
			this.init();
		}

		public get mainElement() {
			return this.element.children('svg');
		}

		private build(): void {
			this.visual = new VisualClass();
		}
	}
}
