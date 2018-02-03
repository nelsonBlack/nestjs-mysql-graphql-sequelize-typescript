# Project Title

nestjs cats application example with graphql and mysql implementation

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

## Built With

* [Nestjs](https://nestjs.com/)


## Contributing

Add more relations
Add edit mutation

## Authors

* **Nelson Bwogora** - *Nestjs*


## License

free

## Acknowledgments

* Nestjs Fraternity for building and maintaining this great framework read more at https://docs.nestjs.com/


