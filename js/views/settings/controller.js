'use strict';

import * as React from 'react';
import * as _ from 'underscore';
import { connect } from 'react-redux';
import * as settingsModel from '../../models/settings';
import * as searchModel from '../../models/search';
import * as settingsActions from '../../actions/settings';
import * as feedsActions from '../../actions/feeds';
import * as overlayActions from '../../actions/overlay';
import * as errorActions from '../../actions/error';
import * as upworkController from '../../controllers/upwork';
import * as logsController from '../../controllers/logs';
import SettingsView from './view';

const mapStateToProps = function(state) {
  return {
    settings: state.settings
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    change: function(name, value) {
      if (name === 'notifyInterval') {
        value = Number(value);
      }
      dispatch(settingsActions.change(name, value));
    },
    save: async function(sData) {
      var curSavedSettings = await settingsModel.get(),
        needToUpdateCache = false,
        changed = false;

      _.each(curSavedSettings, (item, key) => {
        if (item.value !== sData[key].value) {
          if (item.search) {
            needToUpdateCache = true;
          }
          changed = true;
        }
      });
      if (changed) {
        settingsModel.set(sData);
      }
      if (needToUpdateCache && await searchModel.get()) {
        dispatch(feedsActions.refresh());
      }
    },
    getCategories: async function() {
      var response,
        responseErr,
        networkError,
        categories = [];

      try {
        response = await upworkController.getCategories();
      } catch (err) {
        if (err === 'network') {
          networkError = err;
        } else {
          responseErr = err;
        }
      }

      if (response && response.categories) {
        _.each(response.categories, item => {
          categories.push(item.title);
        });
      }

      if (categories.length) {
        dispatch(settingsActions.updateCategories(categories));
      } else {
        dispatch(overlayActions.close());
        if (responseErr) {
          dispatch(errorActions.show(this.getCategories.bind(this)));
          logsController.captureError(responseErr);
        } else if (networkError) {
          dispatch(errorActions.showNetwork());
        } else {
          logsController.captureMessage('Settings `getCategories` empty response');
        }
      }
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsView);
