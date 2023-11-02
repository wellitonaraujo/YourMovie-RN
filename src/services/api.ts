import {ApiOptions} from '../models/apiOptions';
import {tokenApi} from '../constants/token';
import axios from 'axios';

export const api = async (endpoint: string, params?: any): Promise<any> => {
  const options: ApiOptions = {
    method: 'GET',
    url: endpoint,
    params: params ? params : {},
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${tokenApi}`,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log('Errou aqui', error);
    return;
  }
};
