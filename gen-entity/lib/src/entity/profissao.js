import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class profissao {
 
	@PrimaryGeneratedColumn()
	idProfissao : number;
	@Column({ type : 'varchar', length : 150})
	nome : string;
}