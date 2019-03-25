import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import issqnMovimentoParcela from './issqnMovimentoParcela'

@Entity()
export class issqn_movimento_parcela_item {
 
	@PrimaryGeneratedColumn()
	idMovimentoParcelaItem : number;
	@Column({ type : 'int4'})
	idTaxa : number;
	@Column({ type : 'float8'})
	vlDesconto : float;
	@Column({ type : 'float8'})
	vlPago : float;
	@Column({ type : 'float8'})
	vlTaxa : float;
	@Column({ type : 'int4'})
	idMovimentoParcela : number;
}