import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

const URL = process.env.CRYPTO_API_URL

@Controller('/crypto-api')
export class CryptoApiGatewayController {
    constructor(private readonly httpService: HttpService) {}

    @Get('/coinmarketcap')
    async getCoinMarketCap() {
        const response = await this.httpService.get(`${URL}/crypto-api/coinmarketcap`).toPromise();
        return response.data;
    }

    @Post('/cryptocurrencies')
    async createCryptocurrency(@Body() data: any) {
        const response = await this.httpService.post(`${URL}/crypto-api/cryptocurrencies`, data).toPromise();
        return response.data;
    }

    @Get('/cryptocurrencies')
    async getCryptocurrencies() {
        const response = await this.httpService.get(`${URL}/crypto-api/cryptocurrencies`).toPromise();
        return response.data;
    }

    @Delete('/cryptocurrencies/:coin_id')
    async deleteCryptocurrency(@Param('coin_id') coinId: string) {
        const response = await this.httpService.delete(`${URL}/crypto-api/cryptocurrencies/${coinId}`).toPromise();
        return response.data;
    }
}
