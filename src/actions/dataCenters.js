// @flow

import {
  SET_DATA_CENTERS,
} from 'app-constants'

export function setDataCenters (dataCenters: Array<Object>): Object {
  return {
    type: SET_DATA_CENTERS,
    payload: dataCenters,
  }
}
