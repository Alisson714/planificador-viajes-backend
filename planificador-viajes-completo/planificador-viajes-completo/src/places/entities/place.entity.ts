import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('places')
export class PlaceEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ length: 255 })
  name!: string;

  @Column({ length: 100 })
  province!: string;

  @Column({ length: 100 })
  city!: string;

  @Column({ length: 50 })
  category!: string; // naturaleza, cultura, gastronomía, etc.

  @Column({ length: 1000 })
  description!: string;

  @Column('float')
  latitude!: number;

  @Column('float')
  longitude!: number;

  @Column({ nullable: true, length: 500 })
  address?: string;

  @Column({ nullable: true, length: 20 })
  phone?: string;

  @Column({ nullable: true, length: 255 })
  website?: string;

  @Column({ nullable: true, length: 255 })
  imageUrl?: string;

  @Column('float', { default: 0 })
  rating!: number;

  @Column({ default: true })
  isActive!: boolean;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}