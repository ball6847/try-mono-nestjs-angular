import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './modules/app.module';
import { json } from 'body-parser';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  app.use(json());
  app.use(cors()); // don't do this in production!!
  await app.listen(3000);
}
bootstrap();
