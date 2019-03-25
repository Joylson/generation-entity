import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class issqn_questionario {
 
	@PrimaryGeneratedColumn()
	id : number;
	@Column({ type : 'bool'})
	ativo : boolean;
	@Column({ type : 'varchar', length : 5000})
	descricao : string;
	@Column({ type : 'int4'})
	ordem : number;
}