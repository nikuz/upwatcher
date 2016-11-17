'use strict';

import {
  Dimensions,
  PixelRatio,
  Platform,
  StatusBar
} from 'react-native';
import * as _ from 'underscore';
import Orientation from 'react-native-orientation';

var ration = PixelRatio.get(),
  curOrientation;

function getOrientationName(orientation) {
  if (orientation.includes('PORTRAIT') || orientation === 'UNKNOWN') {
    orientation = 'portrait';
  } else if (orientation.includes('LANDSCAPE')) {
    orientation = 'landscape';
  }
  return orientation;
}

curOrientation = getOrientationName(Orientation.getInitialOrientation());

Orientation.addOrientationListener(function(orientation) {
  curOrientation = getOrientationName(orientation);
});

// ----------------
// public methods
// ----------------

function isTablet() {
  var dimensions = Dimensions.get('window'),
    w = dimensions.width,
    h = dimensions.height,
    checkBy = w;

  if (w > h) {
    checkBy = h;
  }
  return checkBy > 750;
}

function isIos() {
  return Platform.OS === 'ios';
}

function isAndroid() {
  return Platform.OS === 'android';
}

function size(value) {
  value = Number(value);
  return isTablet() ? value * 1.1 : value;
}

function fontSize(value) {
  value = Number(value);
  return isTablet() ? value * 1.15 : value;
}

function pixelRatio() {
  return ration;
}

function dimensions() {
  var size = Dimensions.get('window'),
    w = size.width,
    h = size.height;

  if ((curOrientation === 'portrait' && w > h) || (curOrientation === 'landscape' && w < h)) {
    _.extend(size, {
      width: h,
      height: w
    });
  }

  return size;
}

function staticDimensions() {
  var size = Dimensions.get('window'),
    w = size.width,
    h = size.height;

  if (w > h) {
    _.extend(size, {
      width: h,
      height: w
    });
  }

  return size;
}

function orientation(orientation) {
  if (orientation) {
    return getOrientationName(orientation);
  } else {
    return curOrientation;
  }
}

function statusBarHeight() {
  return StatusBar.currentHeight;
}

function platformVersion() {
  return Platform.Version;
}

// ---------
// interface
// ---------

export {
  isTablet,
  isIos,
  isAndroid,
  size,
  fontSize,
  pixelRatio,
  dimensions,
  staticDimensions,
  orientation,
  statusBarHeight,
  platformVersion
};
