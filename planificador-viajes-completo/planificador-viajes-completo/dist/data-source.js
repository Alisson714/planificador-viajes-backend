"use strict";
require('dotenv/config');
const { DataSource } = require('typeorm');
const { UserEntity } = require('./users/entities/user.entity');
const { PlaceEntity } = require('./places/entities/place.entity');
const { RouteEntity } = require('./routes/entities/route.entity');
const { ActivityEntity } = require('./activities/entities/activity.entity');
const { NoteEntity } = require('./notes/entities/note.entity');

module.exports = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432', 10),
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_DATABASE || 'planificador_viajes',
  entities: [UserEntity, PlaceEntity, RouteEntity, ActivityEntity, NoteEntity],
  migrations: [__dirname + '/migrations/*.{js,ts}'],
  synchronize: false,
});