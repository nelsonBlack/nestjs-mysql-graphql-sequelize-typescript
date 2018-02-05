# Project Title

nestjs cats CRUD application example with graphql mysql Apollo sequelize implementation

## Getting Started

you need node installed first 
got to https://nodejs.org/en/download/
 
### Installing

``` git clone https://github.com/nelsonBlack/nestjs-mysql-graphql-sequelize-typescript.git``` 

``` cd nestjs-mysql-graphql-sequelize-typescript``` 

go to ```/src/database/database.providers.ts``` and set your mysql database credentials and db

``` 
const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'cats',
      });  
 ```

``` npm install``` 

``` npm start``` 

navigate to browser http://localhost:3000/graphiql

##To Post data to db 

``` 
mutation{
  createCat(name:"jingo",breed:"boerboel",age:23){
    name
    breed
    age
  }
}
``` 
###to get data
``` 
query {
  getCats{
    id
    name
    breed
    age
    
  }
}
``` 
###Delete cat 
``` 
mutation{
  deleteCat(id:1){
    age
    name
    
    
  }
}
``` 

###Edit cat 
``` 
mutation{
  updateCat(id:1,name:"tosh"){
    age
    name
    
    
  }
}
``` 



###Get cat by id 
``` 
{
  cat(id:"2"){
    age
    name
    
    
  }
}
``` 


response example
``` {
{
  "data": {
    "cat": {
      "age": 23,
      "name": "jingo"
    }
  }
}
``` 
###Subscription- done with apollo
listen for create cat in a new window of graphiql http://localhost:3000/graphiql add the subscription below 
then post data to db using above mentioned mutation 
``` {
subscription {
  catCreated{
    breed
    age
    name
    id
  }
}
``` 
response example
``` 
{
  "catCreated": {
    "breed": "sdfs",
    "age": 5252,
    "name": "dfgsdf",
    "id": 65
  }
}
``` 
## Built With

* [Nestjs](https://nestjs.com/)


## Contributing

Add more relations -Done
Add edit mutation -Done

## Authors

* **Nelson Bwogora** - *Nestjs*


## License

free

## Acknowledgments

* Nestjs Fraternity for building and maintaining this great framework read more at https://docs.nestjs.com/


