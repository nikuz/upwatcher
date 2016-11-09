'use strict';

import stylesGenerator from '../../../styles/generator';

export default stylesGenerator({
  container: {
    flex: 1
  },
  blank_wrap: {
    flex: 1,
    paddingTop: 30,
    paddingLeft: 30,
    paddingRight: 30
  },
  blank_text: {
    fontSize: 21,
    lineHeight: 35,
    textAlign: 'center'
  },
  blank_icon: {
    fontSize: 20,
    color: '#f36200',
    marginBottom: -10
  },
  list_container: {
    flex: 1
  }
});
