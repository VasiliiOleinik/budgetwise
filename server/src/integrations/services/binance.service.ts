import { Injectable } from "@nestjs/common";
import * as crypto from 'crypto';
import * as querystring from 'querystring';

@Injectable()
export class BinanceService {
  private readonly apiUrl = 'https://api.binance.com';

  // Method to get account information
  async getAccountInfo(apiKey: string, secretKey: string): Promise<any> {
    const endpoint = '/api/v3/account';
    const timestamp = Date.now();
    const params = {
      timestamp, // Binance requires timestamp
    };

    // Sign the request
    const query = querystring.stringify(params);
    const signature = this.sign(query, secretKey);

    // Send request to Binance API
    const response = await fetch(`${this.apiUrl}${endpoint}?${query}&signature=${signature}`, {
      method: 'GET',
      headers: {
        'X-MBX-APIKEY': apiKey, // Use API Key
      },
    });

    if (!response.ok) {
      throw new Error(`Binance API error: ${response.statusText}`);
    }

    return response.json(); // Return JSON response
  }

  // Method to sign the request
  private sign(query: string, secretKey: string): string {
    return crypto
      .createHmac('sha256', secretKey)
      .update(query)
      .digest('hex');
  }
}
