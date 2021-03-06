// This is autogenerated by Framer Studio


// Generated by CoffeeScript 1.8.0
(function() {
  var lookupLine, properties, _RESULT,
    __slice = [].slice;

  if (window.FramerStudio == null) {
    window.FramerStudio = {};
  }

  window.onerror = null;

  window.midiCommand = window.midiCommand || function() {};

  if (Framer.Device) {
    properties = ["deviceScale", "contentScale", "deviceType", "keyboard", "orientation", "fullScreen"];
    properties.map(function(propertyName) {
      return Framer.Device.on("change:" + propertyName, function() {
        return window._bridge("device:change");
      });
    });
  }

  _RESULT = null;

  lookupLine = function(lineNumber) {
    var char, charIndex, errorColNumber, errorLine, errorLineIndex, errorLineNumber, loc, sourceLines, _i, _len;
    sourceLines = _RESULT.js.split("\n");
    errorLineIndex = lineNumber - 1;
    errorLine = sourceLines[errorLineIndex];
    if (!errorLine) {
      return lineNumber;
    }
    errorLineNumber = 1;
    errorColNumber = 0;
    for (charIndex = _i = 0, _len = errorLine.length; _i < _len; charIndex = ++_i) {
      char = errorLine[charIndex];
      loc = _RESULT.sourceMap.sourceLocation([errorLineIndex, charIndex]);
      if (loc && loc[0] > errorLineNumber) {
        errorLineNumber = loc[0] + 1;
        errorColNumber = loc[1];
      }
    }
    console.log("lineNumber", lineNumber);
    console.log("errorLineNumber", errorLineNumber);
    return errorLineNumber;
  };

  FramerStudio.compile = function(code) {
    var e, err, errorMessage;
    console.log("FramerStudio.compile");
    window.onerror = null;
    window.onresize = null;
    try {
      _RESULT = CoffeeScript.compile(code, {
        sourceMap: true,
        filename: "generated.js"
      });
    } catch (_error) {
      e = _error;
      console.log("Compile error:", e);
      if (e instanceof SyntaxError) {
        errorMessage = e.stack;
        err = new SyntaxError(e.message);
        err.line = e.location.first_line;
        err.lineNumber = e.location.first_line;
        err.lookup = true;
        window._bridge("StudioError", {
          message: e.message,
          line: e.location.first_line,
          lineNumber: e.location.first_line,
          errorType: "compile"
        });
        throw err;
      } else {
        throw e;
      }
    }
    window.onerror = function(errorMsg, url, lineNumber) {
      var error;
      console.log.apply(console, ["Eval error:"].concat(__slice.call(arguments)));
      error = new Error(errorMsg);
      error.line = lookupLine(lineNumber);
      window._bridge("StudioError", {
        message: errorMsg,
        line: error.line,
        lineNumber: error.line,
        errorType: "eval"
      });
      throw error;
    };
    return _RESULT.js;
  };

  if (typeof window._bridge === "function") {
    window._bridge("StudioScriptLoaded");
  }

}).call(this);

window.__imported__ = window.__imported__ || {};
window.__imported__["OnTime/layers.json.js"] = [
  {
    "maskFrame" : null,
    "visible" : true,
    "id" : "5B8D454B-A1A8-458F-8BFF-77C34C37759F",
    "children" : [
      {
        "maskFrame" : null,
        "visible" : true,
        "id" : "83D4F4A9-7EB1-44B3-B851-EE2557781629",
        "children" : [

        ],
        "image" : {
          "path" : "images\/LegDown-83D4F4A9-7EB1-44B3-B851-EE2557781629.png",
          "frame" : {
            "y" : 28,
            "x" : 26,
            "width" : 39,
            "height" : 39
          }
        },
        "imageType" : "png",
        "layerFrame" : {
          "y" : 28,
          "x" : 26,
          "width" : 39,
          "height" : 39
        },
        "name" : "LegDown"
      },
      {
        "maskFrame" : null,
        "visible" : true,
        "id" : "3BEB0091-86B9-44A6-8A3E-F61B1F698FE0",
        "children" : [

        ],
        "image" : {
          "path" : "images\/LegUp-3BEB0091-86B9-44A6-8A3E-F61B1F698FE0.png",
          "frame" : {
            "y" : 37,
            "x" : 44,
            "width" : 3,
            "height" : 12
          }
        },
        "imageType" : "png",
        "layerFrame" : {
          "y" : 37,
          "x" : 44,
          "width" : 3,
          "height" : 12
        },
        "name" : "LegUp"
      },
      {
        "maskFrame" : null,
        "visible" : true,
        "id" : "05B8D3E0-B715-4F20-9E34-39B7F57EB851",
        "children" : [

        ],
        "image" : {
          "path" : "images\/Mark-05B8D3E0-B715-4F20-9E34-39B7F57EB851.png",
          "frame" : {
            "y" : 39,
            "x" : 43,
            "width" : 5,
            "height" : 17
          }
        },
        "imageType" : "png",
        "layerFrame" : {
          "y" : 39,
          "x" : 43,
          "width" : 5,
          "height" : 17
        },
        "name" : "Mark"
      },
      {
        "maskFrame" : null,
        "visible" : true,
        "id" : "33AB590C-C9B3-4F54-8B7A-BC721C40B58C",
        "children" : [

        ],
        "image" : {
          "path" : "images\/Oval-33AB590C-C9B3-4F54-8B7A-BC721C40B58C.png",
          "frame" : {
            "y" : 31,
            "x" : 29,
            "width" : 33,
            "height" : 33
          }
        },
        "imageType" : "png",
        "layerFrame" : {
          "y" : 31,
          "x" : 29,
          "width" : 33,
          "height" : 33
        },
        "name" : "Oval"
      },
      {
        "maskFrame" : null,
        "visible" : true,
        "id" : "EDFED9D9-8304-4D9D-9BAB-28E1C0FC6617",
        "children" : [

        ],
        "image" : {
          "path" : "images\/OnTime-EDFED9D9-8304-4D9D-9BAB-28E1C0FC6617.png",
          "frame" : {
            "y" : 27,
            "x" : 83,
            "width" : 134,
            "height" : 42
          }
        },
        "imageType" : "png",
        "layerFrame" : {
          "y" : 27,
          "x" : 83,
          "width" : 134,
          "height" : 42
        },
        "name" : "OnTime"
      },
      {
        "maskFrame" : null,
        "visible" : true,
        "id" : "BA8C022C-FB23-4088-84D1-E658C7F3C03C",
        "children" : [

        ],
        "image" : {
          "path" : "images\/Delayed-BA8C022C-FB23-4088-84D1-E658C7F3C03C.png",
          "frame" : {
            "y" : 27,
            "x" : 83,
            "width" : 127,
            "height" : 42
          }
        },
        "imageType" : "png",
        "layerFrame" : {
          "y" : 27,
          "x" : 83,
          "width" : 127,
          "height" : 42
        },
        "name" : "Delayed"
      },
      {
        "maskFrame" : null,
        "visible" : true,
        "id" : "CBD853A3-D335-49C9-A427-C89D50F95409",
        "children" : [

        ],
        "image" : {
          "path" : "images\/Departure-CBD853A3-D335-49C9-A427-C89D50F95409.png",
          "frame" : {
            "y" : 78,
            "x" : 150,
            "width" : 80,
            "height" : 21
          }
        },
        "imageType" : "png",
        "layerFrame" : {
          "y" : 78,
          "x" : 150,
          "width" : 80,
          "height" : 21
        },
        "name" : "Departure"
      },
      {
        "maskFrame" : null,
        "visible" : true,
        "id" : "9915A359-F14E-4AA2-A198-CEC1B047C61E",
        "children" : [

        ],
        "image" : {
          "path" : "images\/TimeNew-9915A359-F14E-4AA2-A198-CEC1B047C61E.png",
          "frame" : {
            "y" : 78,
            "x" : 84,
            "width" : 36,
            "height" : 21
          }
        },
        "imageType" : "png",
        "layerFrame" : {
          "y" : 78,
          "x" : 84,
          "width" : 36,
          "height" : 21
        },
        "name" : "TimeNew"
      },
      {
        "maskFrame" : null,
        "visible" : true,
        "id" : "A91FBEFF-7A6B-4936-A7A3-08BB08E98D0C",
        "children" : [

        ],
        "image" : {
          "path" : "images\/Time-A91FBEFF-7A6B-4936-A7A3-08BB08E98D0C.png",
          "frame" : {
            "y" : 78,
            "x" : 84,
            "width" : 61,
            "height" : 21
          }
        },
        "imageType" : "png",
        "layerFrame" : {
          "y" : 78,
          "x" : 84,
          "width" : 61,
          "height" : 21
        },
        "name" : "Time"
      },
      {
        "maskFrame" : null,
        "visible" : true,
        "id" : "6F44D4AA-55D5-4890-96EA-9E6F7A30CF24",
        "children" : [

        ],
        "image" : {
          "path" : "images\/Green-6F44D4AA-55D5-4890-96EA-9E6F7A30CF24.png",
          "frame" : {
            "y" : -116,
            "x" : 0,
            "width" : 390,
            "height" : 120
          }
        },
        "imageType" : "png",
        "layerFrame" : {
          "y" : -116,
          "x" : 0,
          "width" : 390,
          "height" : 120
        },
        "name" : "Green"
      },
      {
        "maskFrame" : null,
        "visible" : true,
        "id" : "C5D778BF-F18E-4A4A-AC29-EEE5055F5808",
        "children" : [

        ],
        "image" : {
          "path" : "images\/Red-C5D778BF-F18E-4A4A-AC29-EEE5055F5808.png",
          "frame" : {
            "y" : 4,
            "x" : 0,
            "width" : 390,
            "height" : 120
          }
        },
        "imageType" : "png",
        "layerFrame" : {
          "y" : 4,
          "x" : 0,
          "width" : 390,
          "height" : 120
        },
        "name" : "Red"
      },
      {
        "maskFrame" : null,
        "visible" : true,
        "id" : "196F09E7-D721-45B0-9CB5-BFC101799E4E",
        "children" : [

        ],
        "image" : {
          "path" : "images\/Photo-196F09E7-D721-45B0-9CB5-BFC101799E4E.png",
          "frame" : {
            "y" : 124,
            "x" : 0,
            "width" : 390,
            "height" : 290
          }
        },
        "imageType" : "png",
        "layerFrame" : {
          "y" : 124,
          "x" : 0,
          "width" : 390,
          "height" : 290
        },
        "name" : "Photo"
      }
    ],
    "image" : {
      "path" : "images\/Group-5B8D454B-A1A8-458F-8BFF-77C34C37759F.png",
      "frame" : {
        "y" : -116,
        "x" : 0,
        "width" : 390,
        "height" : 530
      }
    },
    "imageType" : "png",
    "layerFrame" : {
      "y" : -116,
      "x" : 0,
      "width" : 390,
      "height" : 530
    },
    "name" : "Group"
  }
]
window.Framer.Defaults.DeviceView = {
  "deviceScale" : -1,
  "orientation" : 0,
  "contentScale" : 1,
  "deviceType" : "fullscreen"
};

window.FramerStudioInfo = {
  "deviceImagesUrl" : "file:\/\/\/Applications\/Framer%20Studio.app\/Contents\/Resources\/DeviceImages\/"
};

Framer.Device = new Framer.DeviceView();
Framer.Device.setupContext();