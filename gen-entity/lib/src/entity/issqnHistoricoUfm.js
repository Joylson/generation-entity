import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class issqn_historico_ufm {
 
	@PrimaryGeneratedColumn()
	id : number;
	@Column({ type : 'timestamptz'})
	dataAlteracao : date;
	@Column({ type : 'float8'})
	valorAntigo : float;
	@Column({ type : 'float8'})
	valorAtual : float;
}