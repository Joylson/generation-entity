import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class issqn_historico_taxa {
 
	@PrimaryGeneratedColumn()
	id : number;
	@Column({ type : 'timestamp'})
	dataAlteracao : date;
	@Column({ type : 'timestamp'})
	dataInicio : date;
	@Column({ type : 'varchar', length : 255})
	taxa : string;
	@Column({ type : 'float8'})
	valorAntigo : float;
	@Column({ type : 'float8'})
	valorAtual : float;
}