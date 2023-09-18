import api from './api';

class GetCarWorkshopsService {
  /**
   * @description get all available car workshops
   * @returns {Promise<object | false>} returns the response of the api if success or false if fails
   */

  async getExistingCarWorkshops() {
    try {
      const {data} = await api.get(
        '/Api/Oficina?codigoAssociacao=601&cpfAssociado=""',
      );
      return data;
    } catch (error: any) {
      return {
        error: true,
        message: error.message,
      };
    }
  }
}

export default new GetCarWorkshopsService();
