import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import banco from './banco'
import contabilOrgao from './contabilOrgao'

@Entity()
export class issqn_configuracao {
 
	@PrimaryGeneratedColumn()
	id : number;
	@Column({ type : 'int4'})
	agruparBoleto : number;
	@Column({ type : 'varchar', length : 200})
	alvaraDiversao : string;
	@Column({ type : 'varchar', length : 5})
	alvaraExercicio : string;
	@Column({ type : 'int4'})
	atribuicaoAutomaticaInsc : number;
	@Column({ type : 'int4'})
	boleto : number;
	@Column({ type : 'varchar', length : 40})
	cargo1 : string;
	@Column({ type : 'varchar', length : 40})
	cargo2 : string;
	@Column({ type : 'varchar', length : 5000})
	carta : string;
	@Column({ type : 'int4'})
	cobraExpediente : number;
	@Column({ type : 'date'})
	dtProporcaoAlvara : date;
	@Column({ type : 'varchar', length : 90})
	endCeat : string;
	@Column({ type : 'varchar', length : 50})
	escritorioResponsavel : string;
	@Column({ type : 'int4'})
	febraban : number;
	@Column({ type : 'varchar', length : 5})
	geraCodigo : string;
	@Column({ type : 'int4'})
	idBanco : number;
	@Column({ type : 'int4'})
	idTipoCobranca : number;
	@Column({ type : 'int2'})
	isFixo : number;
	@Column({ type : 'varchar', length : 100})
	leiTermoFiscalizacao : string;
	@Column({ type : 'varchar', length : 150})
	localArquivo : string;
	@Column({ type : 'varchar', length : 150})
	localExportar : string;
	@Column({ type : 'varchar', length : 150})
	localImportar : string;
	@Column({ type : 'varchar', length : 150})
	localPagamento : string;
	@Column({ type : 'varchar', length : 30})
	mascara : string;
	@Column({ type : 'int4'})
	modeloAlvara : number;
	@Column({ type : 'int4'})
	modeloCarne : number;
	@Column({ type : 'int4'})
	modeloCarta : number;
	@Column({ type : 'int4'})
	modeloCertidao : number;
	@Column({ type : 'varchar', length : 40})
	nome1 : string;
	@Column({ type : 'varchar', length : 40})
	nome2 : string;
	@Column({ type : 'int4'})
	numAlvorada : number;
	@Column({ type : 'int4'})
	numeroCertidao : number;
	@Column({ type : 'varchar', length : 5000})
	observacaoDiversao : string;
	@Column({ type : 'varchar', length : 1})
	separador : string;
	@Column({ type : 'int4'})
	sequenciaNAlvara : number;
	@Column({ type : 'int4'})
	tipoBoleto : number;
	@Column({ type : 'int4'})
	tpParcelasAlvara : number;
	@Column({ type : 'int4'})
	trocarNomenclaturaAlvara : number;
	@Column({ type : 'varchar', length : 50})
	urlExportar : string;
	@Column({ type : 'varchar', length : 50})
	urlImportar : string;
	@Column({ type : 'int4'})
	usacarneTresvias : number;
	@Column({ type : 'int4'})
	utilizaAlvaraSequencial : number;
	@Column({ type : 'int4'})
	utilizaInscricaoMunicipal : number;
	@Column({ type : 'int4'})
	idBancoBoleto : number;
	@Column({ type : 'varchar', length : 255})
	idOrgao : string;
	@Column({ type : 'float8'})
	expediente : float;
	@Column({ type : 'float8'})
	protocolo : float;
	@Column({ type : 'float8'})
	ufm : float;
	@Column({ type : 'int4'})
	sequenciaNProtocolo : number;
	@Column({ type : 'int4'})
	sequenciaNCertidao : number;
	@Column({ type : 'int4'})
	sequenciaNLicenca : number;
	@Column({ type : 'float8'})
	ufesp : float;
	@Column({ type : 'float8'})
	vlJuros : float;
	@Column({ type : 'float8'})
	vlMulta : float;
}