import { Component, Inject  } from '@nestjs/common';
//import { Cat } from './interfaces/cat.interface';
import { CreateCatDto } from './dto/create-cat.dto';
import { Model } from 'sequelize-typescript';
import { Cat } from './cat.entity';



@Component()
export class CatsService {
/*   private readonly cats: Cat[] = [{ id: 1, name: 'Cat', age: 5 },
                                  { id: 2, name: 'dog', age: 7 },
                                  { id: 3, name: 'cow', age: 56 }]; */
    constructor(
      @Inject('CatsRepository') private readonly catsRepository: typeof Cat
    ) {}


  async create(createCatDto: CreateCatDto): Promise<Cat> {
    const cat = new Cat();
    cat.name = createCatDto.name;
    cat.breed = createCatDto.breed;
    cat.age = createCatDto.age;

    return await cat.save();
  }

 /*  findAll(): Cat[] {
    return this.cats;
  } */

  async findAll(): Promise<Cat[]> {
    return await this.catsRepository.findAll<Cat>();
  }

  findOneById(id: number):any {
    return this.catsRepository.findById(id).then(project => {

      console.log(project);
      return project;
      // project will be an instance of Project and stores the content of the table entry
      // with id 123. if such an entry is not defined you will get null
    });
  }
}
