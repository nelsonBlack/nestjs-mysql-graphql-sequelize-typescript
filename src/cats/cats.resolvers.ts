import { Component, UseGuards } from '@nestjs/common';
import { Query, Mutation, Resolver, DelegateProperty, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';

//import { Cat } from './interfaces/cat.interface';
import { Cat } from './cat.entity';
import { CatsService } from './cats.service';
import { CatsGuard } from './cats.guard';

const pubsub = new PubSub();

@Resolver('Cat')
export class CatsResolvers {
  constructor(private readonly catsService: CatsService) {}

  @Query()
  @UseGuards(CatsGuard)
  async getCats() {
    return await this.catsService.findAll();
  }

  @Query('cat')
  async findOneById(obj, args, context, info): Promise<Cat> {
    const { id } = args;
    return await this.catsService.findOneById(+id);
  }

  @Mutation('createCat')
  async create(obj, args: Cat, context, info): Promise<Cat> {
    const createdCat = await this.catsService.create(args);
    pubsub.publish('catCreated', { catCreated: createdCat });
    return createdCat;
  }

  @Mutation('updateCat')
  async update(obj,updateData, args: Cat, context, info): Promise<Cat> {
    const updatedCat = await this.catsService.update(updateData);
    pubsub.publish('catUpdated', { catUpdated: updatedCat });
    return updatedCat;
  }

  @Mutation('deleteCat')
  async delete(obj,args, context, info): Promise<Cat> {
    const { id } = args;
    const deleteCat = await this.catsService.delete(+id);
    pubsub.publish('catDeleted', { catDeleted: deleteCat });
    return deleteCat;
  }

  @Subscription('catCreated')
  catCreated() {
    return {
      subscribe: () => pubsub.asyncIterator('catCreated'),
    };
  }

  @Subscription('catUpdated')
  catUpdated() {
    return {
      subscribe: () => pubsub.asyncIterator('catUpdated'),
    };
  }

  @Subscription('catDeleted')
  catDeleted() {
    return {
      subscribe: () => pubsub.asyncIterator('catDeleted'),
    };
  }
}
