import IO from '@/http/index';
import * as types from './types-mutations';

export const state = () => ({
  list: [],
  config: {}
});

export const actions = {
  async getConfig ({ commit }, parmas) {
    const data = await IO.getConfig(parmas);
    commit(types.GET_CONFIG, {
      data
    });
  }
};

export const mutations = {
  [types.GET_CONFIG]: (state, { data }) => {
    state.config = Object.assign({}, data);
  }
};
