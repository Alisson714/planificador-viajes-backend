import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { PlacesModule } from './places/places.module';
import { RoutesModule } from './routes/routes.module';
import { ActivitiesModule } from './activities/activities.module';
import { NotesModule } from './notes/notes.module';
import { AuthModule } from './auth/auth.module';

// Importar todas las entidades
import { UserEntity } from './users/entities/user.entity';
import { PlaceEntity } from './places/entities/place.entity';
import { RouteEntity } from './routes/entities/route.entity';
import { ActivityEntity } from './activities/entities/activity.entity';
import { NoteEntity } from './notes/entities/note.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '5432', 10),
      username: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || 'password',
      database: process.env.DB_DATABASE || 'planificador_viajes',
      entities: [UserEntity, PlaceEntity, RouteEntity, ActivityEntity, NoteEntity],
      synchronize: true, // ¡Solo para desarrollo!
    }),
    UsersModule,
    PlacesModule,
    RoutesModule,
    ActivitiesModule,
    NotesModule,
    AuthModule,
  ],
})
export class AppModule {}