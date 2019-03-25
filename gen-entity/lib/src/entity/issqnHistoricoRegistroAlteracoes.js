import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import issqnHistoricoRegistro from './issqnHistoricoRegistro'

@Entity()
export class issqn_historico_registro_alteracoes {
 
	@PrimaryGeneratedColumn()
	idAlteracao : number;
	@Column({ type : 'timestamp'})
	startTime : date;
	@Column({ type : 'varchar', length : 50})
	operacao : string;
	@Column({ type : 'varchar', length : 5000})
	query : string;
	@Column({ type : 'varchar', length : 5000})
	queryMap : string;
	@Column({ type : 'varchar', length : 100})
	tabela : string;
	@Column({ type : 'int4'})
	idHistorico : number;
}