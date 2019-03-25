import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import abreviatura from './abreviatura'

@Entity()
export class logradouro {
 
	@Column({ type : 'varchar', length : 150})
	nome : string;
	@PrimaryGeneratedColumn()
	idLogradouro : number;
	@PrimaryGeneratedColumn()
	idCidade : number;
	@Column({ type : 'int4'})
	idAbreviatura : number;
}