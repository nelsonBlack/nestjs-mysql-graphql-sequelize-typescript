import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
var cors = require('cors');

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  app.use(cors());
  await app.listen(3000);
}
bootstrap();
