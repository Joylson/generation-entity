import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import abreviatura from './abreviatura'
import cidade from './cidade'

@Entity()
export class bairro {
 
	@PrimaryGeneratedColumn()
	idBairro : number;
	@Column({ type : 'varchar', length : 100})
	nome : string;
	@Column({ type : 'int4'})
	idAbreviatura : number;
	@Column({ type : 'int4'})
	idCidade : number;
}