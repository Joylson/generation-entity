import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class abreviatura {
 
	@PrimaryGeneratedColumn()
	idAbreviatura : number;
	@Column({ type : 'varchar', length : 15})
	nome : string;
	@Column({ type : 'varchar', length : 60})
	nomeExtenso : string;
	@Column({ type : 'varchar', length : 1})
	tpAbrev : string;
}