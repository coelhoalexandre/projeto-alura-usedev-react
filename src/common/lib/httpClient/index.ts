import axios from 'axios';
import HttpInterface from '../../interfaces/http.interface';

const Http = (): HttpInterface => {
  return {
    get: async <T>(url: string): Promise<T> => {
      return axios.get(url).then((response) => response.data);
    },
  };
};

export default Http;
