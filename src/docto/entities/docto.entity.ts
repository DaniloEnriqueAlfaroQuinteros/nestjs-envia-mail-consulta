import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Docto {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @Column()
  tipodoc: string;

  @ApiProperty()
  @Column()
  correlativo: string;

  @ApiPropertyOptional()
  @Column({ nullable: true })
  sucursal?: string;

  @ApiProperty()
  @Column()
  mail: string;

  @ApiProperty()
  @Column()
  pdf: string;

  @ApiProperty()
  @Column()
  link: string;

  @ApiProperty()
  @Column()
  fecha: string;
}
