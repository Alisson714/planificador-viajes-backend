import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { RouteEntity } from '../../routes/entities/route.entity';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ unique: true, length: 255 })
  email!: string;

  @Column({ length: 255 })
  password!: string;

  @Column({ length: 100 })
  name!: string;

  @Column({ nullable: true, length: 500 })
  bio?: string;

  @Column({ nullable: true })
  avatar?: string;

  @Column({ nullable: true, length: 30 })
  phone?: string;

  @Column({ nullable: true, type: 'date' })
  birthDate?: string;

  @Column({ nullable: true, length: 100 })
  country?: string;

  @Column({ nullable: true, length: 100 })
  city?: string;

  @Column({ default: true })
  isActive!: boolean;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @OneToMany(() => RouteEntity, (route: RouteEntity) => route.user, { cascade: true })
  routes!: RouteEntity[];
}