import axios from 'axios';
import {BASE_URL} from '~/config/app';

export default async (servicePath, path, options = {}) => {
  const url = `${BASE_URL}${servicePath}${path}`;
  const method = options.method || 'get';

  console.log(
    '= AXIOS INIT',
    servicePath,
    path,
    method,
    options.headers,
    options.data,
    options.params,
  );

  try {
    const json = await axios({
      url,
      method,
      timeout: options.timeout || 30000,
      headers: options.headers,
      data: options.data,
      params: options.params,
    });
    console.log('+ AXIOS JSON', json.config, json.data);
    return json.data;
  } catch (error) {
    console.log('- AXIOS ERROR', path, options.data, options.params, error);
    let errorContent = error ? error.message.toString() : '';

    if (error?.response?.data?.description) {
      errorContent = error.response.data.description;
    }
    if (error?.response?.data?.message) {
      errorContent = error.response.data.message;
    }

    throw Error(errorContent);
  }
};
