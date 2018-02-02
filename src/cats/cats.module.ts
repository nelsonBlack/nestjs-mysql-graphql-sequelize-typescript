import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsResolvers } from './cats.resolvers';
import { catsProviders } from './cats.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  components: [CatsService, CatsResolvers, ...catsProviders],
})
export class CatsModule {}
