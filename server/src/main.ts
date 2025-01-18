import * as dotenv from 'dotenv';
dotenv.config();
import * as cookieParser from 'cookie-parser';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

const allowedOrigins = [
  'http://localhost:8899',
  'http://10.0.11.165:8899',
  'http://10.2.0.2:8899', 
];

async function bootstrap() {
  const PORT = process.env.PORT ?? 3000
  const KAFKA_KROKER = process.env.KAFKA_KROKER
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: [KAFKA_KROKER],
      },
      consumer: {
        groupId: 'nest-consumer-group',
      },
    },
  });

  app.use(cookieParser());
  app.setGlobalPrefix('api/v1');
  app.enableCors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,    
  });

  await app.startAllMicroservices()
  await app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
}
bootstrap();
