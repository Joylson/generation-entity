import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import issqn from './issqn'

@Entity()
export class issqn_historico {
 
	@PrimaryGeneratedColumn()
	idIssHistorico : number;
	@Column({ type : 'varchar', length : 70})
	historicoAssunto : string;
	@Column({ type : 'date'})
	historicoData : date;
	@Column({ type : 'varchar', length : 5000})
	historicoObs : string;
	@Column({ type : 'int4'})
	idIss : number;
	@Column({ type : 'date'})
	processoData : date;
	@Column({ type : 'varchar', length : 70})
	processo : string;
}