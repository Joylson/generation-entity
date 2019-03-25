import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import issqn from './issqn'

@Entity()
export class issqn_auto_lancado {
 
	@PrimaryGeneratedColumn()
	idLancamento : number;
	@Column({ type : 'float8'})
	aliquota : float;
	@Column({ type : 'int4'})
	anoRef : number;
	@Column({ type : 'float8'})
	baseCalculo : float;
	@Column({ type : 'date'})
	dtBaixa : date;
	@Column({ type : 'date'})
	dtCancelamento : date;
	@Column({ type : 'date'})
	dtPagamento : date;
	@Column({ type : 'date'})
	dtVencimento : date;
	@Column({ type : 'int4'})
	idBanco : number;
	@Column({ type : 'int4'})
	idSituacaoParcelaBaixada : number;
	@Column({ type : 'varchar', length : 30})
	inscricao : string;
	@Column({ type : 'int4'})
	itemBaixa : number;
	@Column({ type : 'float8'})
	juros : float;
	@Column({ type : 'int4'})
	lote : number;
	@Column({ type : 'int4'})
	mesRef : number;
	@Column({ type : 'float8'})
	multa : float;
	@Column({ type : 'int4'})
	nossoNumero : number;
	@Column({ type : 'varchar', length : 50})
	notasEmitidas : string;
	@Column({ type : 'varchar', length : 200})
	observacao : string;
	@Column({ type : 'int4'})
	tpArrecadacao : number;
	@Column({ type : 'float8'})
	valor : float;
	@Column({ type : 'float8'})
	valorTotal : float;
	@Column({ type : 'float8'})
	vlJurosBaixa : float;
	@Column({ type : 'float8'})
	vlPago : float;
	@Column({ type : 'int4'})
	idIss : number;
}