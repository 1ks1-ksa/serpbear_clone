

import { Sequelize } from 'sequelize-typescript';
import { Options } from 'sequelize';
//import * as sqlite3 from 'sqlite3';
import Domain from './models/domain';
import Keyword from './models/keyword';

const sequelizeOptions: Options = {
  dialect: 'sqlite',
  storage: './data/database.sqlite',
  //dialectModule: sqlite3,
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
  logging: false,
};

const connection = new Sequelize(sequelizeOptions);

connection.addModels([Domain, Keyword]);

export default connection;


























/*import { Sequelize, SequelizeOptions } from 'sequelize-typescript';
import * as sqlite3 from 'sqlite3';
import Domain from './models/domain';
import Keyword from './models/keyword';


  
const sequelizeOptions: SequelizeOptions = {
   dialect: 'sqlite',
   storage: './data/database.sqlite',
   dialectModule: sqlite3,
   pool: {
     max: 5,
     min: 0,
     idle: 10000,
   },
   logging: false,
 };
 
 const connection = new Sequelize(sequelizeOptions);
 
 connection.addModels([Domain, Keyword]);
 
 export default connection;

*/






/* const connection = new Sequelize({
      dialect: 'sqlite',
      storage: './data/database.sqlite',
      dialectModule: sqlite3,
      pool: {
        max: 5,
        min: 0,
        idle: 10000,
      },
      logging: false,
      models: [Domain, Keyword],
    });


export default connection;
*/

/*

dialect: 'sqlite',                   // Specify SQLite as the dialect
   database: 'sequelize',               // This name isn't necessary with SQLite; SQLite uses the storage path instead
   dialectModule: sqlite3,              // Reference the SQLite module
   pool: {                              // Optional, but you can configure connection pooling
      max: 5,
      min: 0,
      idle: 10000,
   },
   logging: false,                      // Disable logging
   models: [Domain, Keyword],           // Register your models
   storage: './data/database.sqlite',   // Path to your SQLite database file*/





/*const connection = new Sequelize({
   dialect: 'sqlite',
   host: '0.0.0.0',
   //username: process.env.USER_NAME ? process.env.USER_NAME : process.env.USER,
   //password: process.env.PASSWORD,
   database: 'sequelize',
   dialectModule: sqlite3,
   pool: {
      max: 5,
      min: 0,
      idle: 10000,
   },
   logging: false,
   models: [Domain, Keyword],
   storage: './data/database.sqlite',
});

export default connection;*/






































/*import { Sequelize } from 'sequelize-typescript';
import Domain from './models/domain';
import Keyword from './models/keyword';

const connection = new Sequelize({
   dialect: 'sqlite',
   storage: './data/database.sqlite',
   logging: false,
   models: [Domain, Keyword],
   
});

export default connection; */

/*import { Sequelize } from 'sequelize-typescript';
import { SequelizeOptions } from 'sequelize-typescript';
import  Keyword  from './models/keyword';

const connection = new Sequelize({
   database: 'database_name', // Use this if you're connecting to another type of database
   dialect: 'sqlite',
   storage: './data/database.sqlite',
   logging: false,
   models: [Keyword],
 }); */