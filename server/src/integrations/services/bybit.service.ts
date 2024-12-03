import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ByBitService {
  private readonly apiUrl = 'https://api.bybit.com';

  // Method to get user balance information
  async getAccountInfo(apiKey: string, secretKey: string): Promise<any> {
    const endpoint = '/v5/account';
    const timestamp = Date.now().toString();

    try {
      // Отправка GET запроса к Bybit API
      const response = await axios.get(`${this.apiUrl}${endpoint}`, {
        headers: {
          'X-BAPI-API-KEY': apiKey,
          'X-BAPI-SIGN': secretKey,
          'X-BAPI-TIMESTAMP': timestamp,
          'X-BAPI-RECV-WINDOW': 5000,
        },
      });
      return response.data.result;
    } catch (error) {
      throw new Error(`Error fetching account info from Bybit: ${error.message}`);
    }
  }
}
