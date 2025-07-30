import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { UserEntity } from '../../users/entities/user.entity';
import { ActivityEntity } from '../../activities/entities/activity.entity';

@Entity('routes')
export class RouteEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ length: 255 })
  name!: string;

  @Column({ nullable: true, length: 1000 })
  description?: string;

  @Column({ type: 'date' })
  startDate!: Date;

  @Column({ type: 'date' })
  endDate!: Date;

  @Column({ default: 'planning' })
  status!: string; // planning, active, completed, cancelled

  @Column({ default: true })
  isPublic!: boolean;

  @Column({ nullable: true })
  totalDistance?: number; // en kilómetros

  @Column({ nullable: true })
  estimatedBudget?: number;

  @Column({ default: true })
  isActive!: boolean;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @ManyToOne(() => UserEntity, (user: UserEntity) => user.routes, { onDelete: 'CASCADE' })
  user!: UserEntity;

  @OneToMany(() => ActivityEntity, (activity: ActivityEntity) => activity.route, { cascade: true })
  activities!: ActivityEntity[];
}