import { Module } from '@nestjs/common';
import { CryptoApiGatewayController } from './controllers/crypto-api.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [CryptoApiGatewayController],
  providers: [],
  exports: []
})
export class CryptoApiModule {}
