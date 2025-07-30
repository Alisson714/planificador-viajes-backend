import 'dotenv/config';
import { DataSource } from 'typeorm';
import { UserEntity } from './users/entities/user.entity';
import { PlaceEntity } from './places/entities/place.entity';
import { RouteEntity } from './routes/entities/route.entity';
import { ActivityEntity } from './activities/entities/activity.entity';
import { NoteEntity } from './notes/entities/note.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432', 10),
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_DATABASE || 'planificador_viajes',
  entities: [UserEntity, PlaceEntity, RouteEntity, ActivityEntity, NoteEntity],
  migrations: [__dirname + '/migrations/*.{ts,js}'],
  synchronize: false, // ¡Importante! No usar synchronize con migraciones
}); 