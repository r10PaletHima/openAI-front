import * as apiClient from './httpCommon';
import { apiRoutes } from '../helpers/apiRoutes';

export const getTextGeneration = async (data) => (await apiClient.postAPICall(apiRoutes.getTextGeneration, data))
