import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import banco from './banco'
import issqnTaxa from './issqnTaxa'

@Entity()
export class issqn_taxa {
 
	@PrimaryGeneratedColumn()
	idTaxa : number;
	@Column({ type : 'int4'})
	cobra : number;
	@Column({ type : 'int4'})
	cobraAtividade : number;
	@Column({ type : 'int4'})
	estimado : number;
	@Column({ type : 'int4'})
	isTaxa : number;
	@Column({ type : 'int4'})
	nivel : number;
	@Column({ type : 'varchar', length : 80})
	nome : string;
	@Column({ type : 'int4'})
	receitaOrcamentaria : number;
	@Column({ type : 'int4'})
	receitaOrcamentariaCorrecao : number;
	@Column({ type : 'int4'})
	receitaOrcamentariaJuros : number;
	@Column({ type : 'int4'})
	receitaOrcamentariaMulta : number;
	@Column({ type : 'bool'})
	taxaFixa : boolean;
	@Column({ type : 'int4'})
	tipo : number;
	@Column({ type : 'varchar', length : 10})
	tpValor : string;
	@Column({ type : 'float8'})
	valor : float;
	@Column({ type : 'int4'})
	idBanco : number;
	@Column({ type : 'int4'})
	idParente : number;
}