import { GET_COUNTRIES } from '../constants/apiEndpoints';
import { setCountrys } from '../slices/country';
import { makeGet} from './helpers';



export const getCountry = makeGet(`country`, GET_COUNTRIES, setCountrys);


