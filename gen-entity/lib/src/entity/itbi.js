import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class itbi {
 
	@PrimaryGeneratedColumn()
	idItbi : number;
	@Column({ type : 'date'})
	dtTransacao : date;
	@Column({ type : 'varchar', length : 50})
	nomeC : string;
	@Column({ type : 'varchar', length : 20})
	cpfC : string;
	@Column({ type : 'varchar', length : 2})
	ufC : string;
	@Column({ type : 'varchar', length : 30})
	cidadeC : string;
	@Column({ type : 'varchar', length : 50})
	bairroC : string;
	@Column({ type : 'varchar', length : 50})
	logradouroC : string;
	@Column({ type : 'varchar', length : 10})
	numC : string;
	@Column({ type : 'varchar', length : 10})
	cepC : string;
	@Column({ type : 'varchar', length : 20})
	complementoC : string;
	@Column({ type : 'varchar', length : 20})
	idIptu : string;
	@Column({ type : 'bpchar', length : 1})
	tpImovel : char;
	@Column({ type : 'numeric'})
	vlAutorizado : number;
	@Column({ type : 'numeric'})
	vlImposto : number;
	@Column({ type : 'numeric'})
	vlFinanciado : number;
	@Column({ type : 'numeric'})
	vlTransacao : number;
	@Column({ type : 'numeric'})
	vlTotal : number;
	@Column({ type : 'varchar', length : 20})
	numEscrituraAnter : string;
	@Column({ type : 'text'})
	obsGuia : string;
	@Column({ type : 'varchar', length : 11})
	barra1 : string;
	@Column({ type : 'varchar', length : 11})
	barra2 : string;
	@Column({ type : 'varchar', length : 11})
	barra3 : string;
	@Column({ type : 'varchar', length : 11})
	barra4 : string;
	@Column({ type : 'date'})
	dtVencto : date;
	@Column({ type : 'date'})
	dtPago : date;
	@Column({ type : 'numeric'})
	vlPago : number;
	@Column({ type : 'date'})
	dtBaixa : date;
	@Column({ type : 'int2'})
	arrecadacao : number;
	@Column({ type : 'int4'})
	nossoNumero : number;
	@Column({ type : 'int4'})
	idUsuario : number;
	@Column({ type : 'numeric'})
	vlAliquotaFinanc : number;
	@Column({ type : 'numeric'})
	vlAliquotaTransacao : number;
	@Column({ type : 'numeric'})
	vlExpediente : number;
	@Column({ type : 'numeric'})
	vlMonetario : number;
	@Column({ type : 'numeric'})
	vlMulta : number;
	@Column({ type : 'numeric'})
	vlJuros : number;
	@Column({ type : 'varchar', length : 1})
	tpPessoa : string;
	@Column({ type : 'varchar', length : 50})
	nomeT : string;
	@Column({ type : 'bpchar', length : 2})
	ufI : char;
	@Column({ type : 'varchar', length : 30})
	cidadeI : string;
	@Column({ type : 'varchar', length : 50})
	bairroI : string;
	@Column({ type : 'varchar', length : 50})
	logradouroI : string;
	@Column({ type : 'varchar', length : 10})
	numI : string;
	@Column({ type : 'varchar', length : 10})
	cepI : string;
	@Column({ type : 'varchar', length : 20})
	complementoI : string;
	@Column({ type : 'varchar', length : 10})
	quadra : string;
	@Column({ type : 'varchar', length : 10})
	lote : string;
	@Column({ type : 'numeric'})
	areaTerreno : number;
	@Column({ type : 'numeric'})
	areaConstruida : number;
	@Column({ type : 'varchar', length : 20})
	numCertidao : string;
	@Column({ type : 'numeric'})
	vlVenalTotal : number;
	@Column({ type : 'varchar', length : 100})
	tpTransacao : string;
	@Column({ type : 'int4'})
	pago : number;
	@Column({ type : 'int4'})
	idSituacaoParcelaBaixada : number;
	@Column({ type : 'int4'})
	itemBaixa : number;
	@Column({ type : 'int4'})
	lotePagamento : number;
	@Column({ type : 'int4'})
	idBanco : number;
	@Column({ type : 'varchar', length : 1})
	status : string;
	@Column({ type : 'date'})
	dtCancelamento : date;
	@Column({ type : 'text'})
	obsCancelamento : string;
	@Column({ type : 'int4'})
	idUsuarioCancelamento : number;
	@Column({ type : 'date'})
	dtVenctoAnt : date;
	@Column({ type : 'varchar', length : 40})
	inscrCadastral : string;
}