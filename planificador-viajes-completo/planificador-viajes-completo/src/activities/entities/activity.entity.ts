import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { RouteEntity } from '../../routes/entities/route.entity';
import { PlaceEntity } from '../../places/entities/place.entity';

@Entity('activities')
export class ActivityEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ length: 255 })
  name!: string;

  @Column({ type: 'timestamp' })
  date!: Date;

  @Column({ nullable: true, length: 1000 })
  description?: string;

  @Column({ nullable: true, length: 500 })
  note?: string;

  @Column({ default: 'pending' })
  status!: string; // pending, confirmed, completed, cancelled

  @Column({ nullable: true })
  cost?: number;

  @Column({ nullable: true, length: 50 })
  type?: string; // visita, comida, transporte, alojamiento, etc.

  @Column({ nullable: true })
  duration?: number; // duración en minutos

  @Column({ nullable: true, length: 255 })
  location?: string; // ubicación específica si no está en un lugar

  @Column({ default: true })
  isActive!: boolean;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @ManyToOne(() => PlaceEntity, { nullable: true })
  place?: PlaceEntity;

  @ManyToOne(() => RouteEntity, (route: RouteEntity) => route.activities, { onDelete: 'CASCADE' })
  route!: RouteEntity;
}