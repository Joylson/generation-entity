import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import issqnTipoCobranca from './issqnTipoCobranca'
import issqn from './issqn'
import issqnMovimento from './issqnMovimento'

@Entity()
export class issqn_movimento_parcela {
 
	@PrimaryGeneratedColumn()
	idMovimentoParcela : number;
	@Column({ type : 'varchar', length : 8})
	agencia : string;
	@Column({ type : 'int4'})
	arrecadado : number;
	@Column({ type : 'int4'})
	canceladoPagamento : number;
	@Column({ type : 'int4'})
	divida : number;
	@Column({ type : 'date'})
	dtBaixa : date;
	@Column({ type : 'date'})
	dtBanco : date;
	@Column({ type : 'date'})
	dtCanceladoPagamento : date;
	@Column({ type : 'date'})
	dtPagamento : date;
	@Column({ type : 'date'})
	dtVencimento : date;
	@Column({ type : 'int4'})
	idBanco : number;
	@Column({ type : 'int4'})
	idExercicio : number;
	@Column({ type : 'int4'})
	idMotivoCancel : number;
	@Column({ type : 'int4'})
	idSituacaoParcelaBaixada : number;
	@Column({ type : 'int4'})
	isBaixaAgrupado : number;
	@Column({ type : 'int4'})
	itemBaixa : number;
	@Column({ type : 'int4'})
	lote : number;
	@Column({ type : 'int8'})
	nossoNumero : number;
	@Column({ type : 'int4'})
	nossoNumeroAgrupado : number;
	@Column({ type : 'varchar', length : 1000})
	obsCancel : string;
	@Column({ type : 'int4'})
	parcela : number;
	@Column({ type : 'int4'})
	status : number;
	@Column({ type : 'float8'})
	vlDesconto : float;
	@Column({ type : 'float8'})
	vlExpediente : float;
	@Column({ type : 'float8'})
	vlJuros : float;
	@Column({ type : 'float8'})
	vlMulta : float;
	@Column({ type : 'float8'})
	vlPago : float;
	@Column({ type : 'float8'})
	vlParcela : float;
	@Column({ type : 'float8'})
	vlTotal : float;
	@Column({ type : 'int4'})
	idTipoCobranca : number;
	@Column({ type : 'int4'})
	idIss : number;
	@Column({ type : 'int4'})
	idMovimento : number;
	@Column({ type : 'date'})
	dtMovimento : date;
}