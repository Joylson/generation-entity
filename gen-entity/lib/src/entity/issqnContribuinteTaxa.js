import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import issqn from './issqn'
import issqnTaxa from './issqnTaxa'

@Entity()
export class issqn_contribuinte_taxa {
 
	@PrimaryGeneratedColumn()
	idContribuinteTaxa : number;
	@Column({ type : 'date'})
	dtFim : date;
	@Column({ type : 'date'})
	dtInicio : date;
	@Column({ type : 'int4'})
	estimado : number;
	@Column({ type : 'int4'})
	idExercicio : number;
	@Column({ type : 'varchar', length : 70})
	motivoFim : string;
	@Column({ type : 'varchar', length : 70})
	motivoInicio : string;
	@Column({ type : 'varchar', length : 25})
	usuarioFim : string;
	@Column({ type : 'varchar', length : 25})
	usuarioInicio : string;
	@Column({ type : 'float8'})
	vlTaxa : float;
	@Column({ type : 'int4'})
	idIss : number;
	@Column({ type : 'int4'})
	idTaxa : number;
}