'use strict';

function defaultSet(data) {
  return {
    type: 'FEEDS_DEFAULT_SET',
    data
  };
}

function update(data) {
  return {
    type: 'FEEDS_UPDATE',
    data
  };
}

function addMore(data) {
  return {
    type: 'FEEDS_ADD_MORE',
    data
  };
}

function filter(value) {
  return {
    type: 'FEEDS_FILTER',
    value
  };
}

function refreshStart() {
  return {
    type: 'FEEDS_REFRESH_START'
  };
}

function refreshStop() {
  return {
    type: 'FEEDS_REFRESH_STOP'
  };
}

function refresh() {
  return {
    type: 'FEEDS_REFRESH'
  };
}

function loadMoreJobsStart() {
  return {
    type: 'FEEDS_LOAD_MORE_JOBS_START'
  };
}

function loadMoreJobsStop() {
  return {
    type: 'FEEDS_LOAD_MORE_JOBS_STOP'
  };
}

function markAsFull() {
  return {
    type: 'FEEDS_MARK_AS_FULL'
  };
}

function markAsEmpty() {
  return {
    type: 'FEEDS_MARK_AS_EMPTY'
  };
}

export {
  defaultSet,
  update,
  addMore,
  filter,
  refreshStart,
  refreshStop,
  refresh,
  loadMoreJobsStart,
  loadMoreJobsStop,
  markAsFull,
  markAsEmpty
};
