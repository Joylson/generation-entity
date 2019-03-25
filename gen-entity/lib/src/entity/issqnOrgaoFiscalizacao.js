import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class issqn_orgao_fiscalizacao {
 
	@PrimaryGeneratedColumn()
	id : number;
	@Column({ type : 'varchar', length : 255})
	nome : string;
}