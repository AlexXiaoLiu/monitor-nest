import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('monitor_logs')
export class LogsEntity {
  @Column()
  logs: string;

  @Column()
  datetime: number;

  @Column()
  type: number;

  @Column()
  id: string;

  @PrimaryGeneratedColumn()
  num: number;
}
