import {IReferFriendServiceProps} from './ReferFriendService.structure';
import api from './api';

class ReferFriendService {
  /**
   * @description send user friend information for referral
   * @returns {Promise<object | false>} returns the response of the api if success or false if fails
   */

  async sendFriendRefer(body: IReferFriendServiceProps) {
    try {
      const {data} = await api.post('/Api/Indicacao', body);
      return data;
    } catch (error: any) {
      return {
        error: true,
        message: error.message,
      };
    }
  }
}

export default new ReferFriendService();
