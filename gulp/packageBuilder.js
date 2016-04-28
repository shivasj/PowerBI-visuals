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

"use strict";
var fs = require('fs'),
    path = require('path'),
    zip = require('gulp-zip'),
    replace = require('gulp-replace');

var gulp = require("gulp");
var ts = require("gulp-typescript");

var PACKAGE_BUNDLE_NAME = "bundle.json";
var CUSTOM_VISUALS_PATH = "src/Clients/CustomVisuals/visuals";
var PACKAGE_EXTENSION = ".pbiviz";

var excludeVisuals = ["sunburst"];

function PackageBuilder(packageName) {
    if (!packageName) {
        throw new Error('Package name has not been specified');
    }

    console.log('Building package:', packageName);

    this._packageName = packageName;
    this._path = path.join(CUSTOM_VISUALS_PATH, packageName);
    this._config = this.parseBundleConfig();
}


PackageBuilder.prototype.parseBundleConfig = function () {
    var filepath = path.join(this._path, PACKAGE_BUNDLE_NAME);

    try {
        if (fs.existsSync(filepath)) {
            return JSON.parse(fs.readFileSync(filepath, 'utf8'));
        } else {
            throw new Error('Bundle config is not found: ' + filepath);
        }
    } catch (err) {
            throw new Error('Bundle config is not valid: ' + filepath);
    }
}

PackageBuilder.prototype.buildCSS = function () {

    var lessResult = srcResult
        .pipe(gulpLess({
            paths: paths || [],
            relativeUrls: true,
            modifyVars: options.modifyVars
        }).on('error', function (err) {
        }));

    lessResult.pipe(gulp.dest(options.destinationPath, gulpOptions));
}

PackageBuilder.prototype.build = function() {
    this.replaceGUID();
    //this.incrementVersion();
    this.savePackageConfig();
    this.generatePackage();
}

PackageBuilder.prototype.resolvePath = function(filepath) {
    return path.join(this._path, filepath);
}

PackageBuilder.prototype.incrementVersion = function() {
    var version = this.getVersion().split('.');
    version[version.length-1] = parseInt(version[version.length-1]) + 1;

    this.setVersion(version.join('.'));
}

PackageBuilder.prototype.getPackageName = function() {
    var version = this.getVersion();
    return this._packageName + "-" + version + PACKAGE_EXTENSION;
}

PackageBuilder.prototype.generatePackage = function() {
    var resourcesPath = this.resolvePath("package/**");
    var destPath = this.resolvePath("release");
    var fileName = this.getPackageName();

    return gulp.src(resourcesPath)
        .pipe(zip(fileName))
        .pipe(gulp.dest(destPath));
}

PackageBuilder.prototype.getVersion = function() {
    if (!this._config.package ||
        !this._config.package.version) {
            throw new Error('Visual version has not been specified');
       }
    return this._config.package.version;
}

PackageBuilder.prototype.setVersion = function(version) {
    this._config.package.version = version;
    var regexString = new RegExp('\"version\": \"[0-9.]+\"', "g");
    var newString = '"version": "' + version + '"';
    var bundleFile = path.join(this._path, PACKAGE_BUNDLE_NAME);

    gulp.src([bundleFile])
        .pipe(replace(regexString, newString))
        .pipe(gulp.dest(this._path));
}

PackageBuilder.prototype.replaceGUID = function() {
    var guid = this._config.package.guid;
    var regexString = new RegExp(this._config.package.name + "[0-9]+", "g");
    var regexSamples = new RegExp("samples", "g");
    var regexSampleNames = new RegExp("sampleName", "g");
    var resourcesPath = this.resolvePath("package/resources");
    var jsFile = this.resolvePath("package/resources/" + this._config.package.code.javaScript);
    var cssFile = this.resolvePath("package/resources/" + this._config.package.code.css);

    gulp.src([jsFile, cssFile])
        .pipe(replace(regexString, guid))
        .pipe(replace(regexSamples, guid))
        .pipe(replace(regexSampleNames, this._config.package.name))
        .pipe(gulp.dest(resourcesPath));
}

PackageBuilder.prototype.savePackageConfig = function() {
    var packageConfig = this.getPackageConfig();

    fs.writeFileSync(this.resolvePath("package/package.json"),
        JSON.stringify(packageConfig, null, '\t'));
}

PackageBuilder.prototype.getPackageConfig = function() {
    var config = {
        "build": this._config.package.build,
        "version": this.getVersion(),
        "author": this._config.package.author,
        "visual": this.getVisualConfig(),
        "resources": this.getResourcesConfig(),
        "images": this.getImagesConfig(),
        "code": this.getCodeConfig(),
        "licenseTerms": this._config.package.licenseTerms,
        "privacyTerms": this._config.package.privacyTerms
    }
    return config;
}

PackageBuilder.prototype.getVisualConfig = function() {
    return {
        "name": this._config.package.name,
        "version": this.getVersion(),
        "displayName": this._config.package.displayName,
        "guid": this._config.package.guid,
        "description": this._config.package.description,
        "supportUrl": this._config.package.supportUrl,
        "gitHubUrl": this._config.package.gitHubUrl,
        "licenseTerms": this._config.package.licenseTerms,
        "privacyTerms": this._config.package.privacyTerms
    };
}


PackageBuilder.prototype.getResourcesConfig = function() {
    return [
        {
            "resourceId": "rId0",
            "sourceType": 5,
            "file": "resources/" + this._config.package.code.typeScript
        },
        {
            "resourceId": "rId1",
            "sourceType": 0,
            "file": "resources/" + this._config.package.code.javaScript
        },
        {
            "resourceId": "rId2",
            "sourceType": 1,
            "file": "resources/" + this._config.package.code.css
        },
        {
            "resourceId": "rId3",
            "sourceType": 3,
            "file": "resources/" + this._config.package.images.icon
        },
        {
            "resourceId": "rId4",
            "sourceType": 6,
            "file": "resources/" + this._config.package.images.thumbnail
        },
        {
            "resourceId": "rId5",
            "sourceType": 2,
            "file": "resources/" + this._config.package.images.screenshots[0]
        }
    ];
}

PackageBuilder.prototype.getCodeConfig = function() {
    return {
        "typeScript": {
            "resourceId": "rId0"
        },
        "javaScript": {
            "resourceId": "rId1"
        },
        "css": {
            "resourceId": "rId2"
        }
    };
}

PackageBuilder.prototype.getImagesConfig = function() {
    return {
        "icon": {
            "resourceId": "rId3"
        },
        "screenshots": [
            {
                "resourceId": "rId5"
            }
        ],
        "thumbnail": {
            "resourceId": "rId4"
        }
    };
}

function getFolders(dir) {
    return fs.readdirSync(dir)
      .filter(function(file) {
        return fs.statSync(path.join(dir, file)).isDirectory() && !excludeVisuals.some(function (visualName) {
            return visualName === file;
        });
      });
}

PackageBuilder.buildAllPackages = function() {
    console.log('Building all custom packages...');
    var customVisuals = getFolders(CUSTOM_VISUALS_PATH);

    var tasks = customVisuals.map(function(packageName) {
        var pb = new PackageBuilder(packageName);
        return pb.build();
   });
}

PackageBuilder.portalExports = "var powerbi;\n\
(function (powerbi) {\n\
    var visuals;\n\
    (function (visuals) {\n\
        var plugins;\n\
        (function (plugins) {\n\
            plugins.samples = {\n\
                name: 'samples',\n\
                class: 'samples',\n\
                capabilities: powerbi.visuals.samples.sampleName.capabilities,\n\
                custom: true,\n\
                create: function () { return new powerbi.visuals.samples.sampleName(); }\n\
            };\n\
        })(plugins = visuals.plugins || (visuals.plugins = {}));\n\
    })(visuals = powerbi.visuals || (powerbi.visuals = {}));\n\
})(powerbi || (powerbi = {}));\n\
"

module.exports = PackageBuilder;

