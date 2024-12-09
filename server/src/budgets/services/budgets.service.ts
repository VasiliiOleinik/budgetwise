import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { ObjectId } from 'mongoose';
import { BinanceService } from 'src/integrations/services/binance.service';
import { ByBitService } from 'src/integrations/services/bybit.service';
import { IntegrationsService } from 'src/integrations/services/integration.service';

@Injectable()
export class BudgetsService {
    constructor(
        private readonly binanceService: BinanceService,
        private readonly byBitService: ByBitService,
        private readonly integrationsService: IntegrationsService,
    ) {}

    async getAllCryptBudget(userId: string) {
        const integrations = await this.integrationsService.getUserIntegrations(userId);

        const binanceIntegration = integrations.find((i) => i.platform === 'binance');
        const bybitIntegration = integrations.find((i) => i.platform === 'bybit');

        const requests = [];

        if (binanceIntegration) {
            const { apiKey, secretKey } = binanceIntegration;
            requests.push(
                this.binanceService.getTotalBalanceInUSD(apiKey, secretKey).then((data) => ({
                platform: 'binance',
                data
        })),
            );
        }

        if (bybitIntegration) {
            const { apiKey, secretKey } = bybitIntegration;
            requests.push(
                this.byBitService.getAccountInfo(apiKey, secretKey).then((data) => ({
                    platform: 'bybit',
                    data: parseFloat(data.list[0]?.totalEquity),
                })),
            );
        }

        const results = await Promise.all(requests);

        return results;
    }
}
