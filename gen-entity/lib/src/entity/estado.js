import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class estado {
 
	@PrimaryGeneratedColumn()
	id : number;
	@Column({ type : 'varchar', length : 40})
	nome : string;
	@Column({ type : 'varchar', length : 2})
	uf : string;
}