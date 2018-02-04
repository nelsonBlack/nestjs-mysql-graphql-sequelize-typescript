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
    let dataSaved:any;
    cat.name = createCatDto.name;
    cat.breed = createCatDto.breed;
    cat.age = createCatDto.age;

     return cat.save().then(data => {
      dataSaved=data
      return dataSaved.dataValues;
    })
    .catch(error => {
     
    });;
     
  }

  async update(updateData:any): Promise<Cat> {
   
    const cat = await this.findOneById(updateData.id);
    if(updateData.name!=undefined){
      cat.name = updateData.name;
    }
    if(updateData.breed!=undefined){
      cat.breed = updateData.breed;
    }
    if(updateData.age!=undefined){
      cat.age = updateData.age;
    }
    

    return await cat.save();
  }

  async delete(id: number): Promise<Cat> {
   
    const cat = await this.findOneById(id);
    return await cat.destroy();
  }





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
