import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { UserEntity } from '../../users/entities/user.entity';
import { RouteEntity } from '../../routes/entities/route.entity';
import { ActivityEntity } from '../../activities/entities/activity.entity';

@Entity('notes')
export class NoteEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ length: 255 })
  title!: string;

  @Column({ length: 2000 })
  content!: string;

  @Column({ nullable: true, length: 50 })
  category?: string; // general, recordatorio, recomendación, gastos, etc.

  @Column({ default: false })
  isImportant!: boolean;

  @Column({ default: true })
  isActive!: boolean;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @ManyToOne(() => UserEntity, { onDelete: 'CASCADE' })
  user!: UserEntity;

  @ManyToOne(() => RouteEntity, { nullable: true })
  route?: RouteEntity;

  @ManyToOne(() => ActivityEntity, { nullable: true })
  activity?: ActivityEntity;
}