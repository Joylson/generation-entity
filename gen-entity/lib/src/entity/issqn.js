import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import issqnAtividade from './issqnAtividade'
import issqnCategoria from './issqnCategoria'
import issqnConselhoRegional from './issqnConselhoRegional'
import issqnEscritorio from './issqnEscritorio'
import imovel from './imovel'
import pessoa from './pessoa'
import issqnRamoAtuacao from './issqnRamoAtuacao'

@Entity()
export class issqn {
 
	@PrimaryGeneratedColumn()
	idIss : number;
	@Column({ type : 'bool'})
	alvaraProvisorio : boolean;
	@Column({ type : 'float8'})
	areaConstruida : float;
	@Column({ type : 'float8'})
	areaEstabelecimento : float;
	@Column({ type : 'float8'})
	areaImovel : float;
	@Column({ type : 'float8'})
	areaTerreno : float;
	@Column({ type : 'bool'})
	autoLancado : boolean;
	@Column({ type : 'bool'})
	bloqueado : boolean;
	@Column({ type : 'varchar', length : 20})
	cadastro : string;
	@Column({ type : 'float8'})
	capitalSocial : float;
	@Column({ type : 'varchar', length : 20})
	cep : string;
	@Column({ type : 'varchar', length : 20})
	cnpjCpf : string;
	@Column({ type : 'int4'})
	codIdentificacao : number;
	@Column({ type : 'varchar', length : 20})
	codIss : string;
	@Column({ type : 'varchar', length : 20})
	complemento : string;
	@Column({ type : 'varchar', length : 20})
	contrAnterior : string;
	@Column({ type : 'date'})
	dtAbertura : date;
	@Column({ type : 'date'})
	dtAlvara : date;
	@Column({ type : 'date'})
	dtAlvaraAmbiental : date;
	@Column({ type : 'date'})
	dtAlvaraAnp : date;
	@Column({ type : 'date'})
	dtAlvaraBombeiro : date;
	@Column({ type : 'date'})
	dtAlvaraCetesb : date;
	@Column({ type : 'date'})
	dtAlvaraEspecial : date;
	@Column({ type : 'date'})
	dtAlvaraFunc : date;
	@Column({ type : 'date'})
	dtAlvaraOutros : date;
	@Column({ type : 'date'})
	dtAlvaraSanitaria : date;
	@Column({ type : 'date'})
	dtAlvaraSolo : date;
	@Column({ type : 'date'})
	dtAlvaraVencimento : date;
	@Column({ type : 'date'})
	dtBloqueado : date;
	@Column({ type : 'date'})
	dtEncerramento : date;
	@Column({ type : 'date'})
	dtEncerramentoComunicacao : date;
	@Column({ type : 'date'})
	dtEventual : date;
	@Column({ type : 'date'})
	dtInatividade : date;
	@Column({ type : 'date'})
	dtInatividadeComunicacao : date;
	@Column({ type : 'date'})
	dtInicio : date;
	@Column({ type : 'date'})
	dtIntrSimpliss : date;
	@Column({ type : 'date'})
	dtIsento : date;
	@Column({ type : 'date'})
	dtJuntaComercial : date;
	@Column({ type : 'date'})
	dtMei : date;
	@Column({ type : 'date'})
	dtReabertura : date;
	@Column({ type : 'date'})
	dtSimples : date;
	@Column({ type : 'date'})
	dtSuspensaoFim : date;
	@Column({ type : 'date'})
	dtSuspensaoInicio : date;
	@Column({ type : 'date'})
	dtTransferencia : date;
	@Column({ type : 'date'})
	dtValidadeAlvara : date;
	@Column({ type : 'bool'})
	encerrado : boolean;
	@Column({ type : 'bool'})
	eventual : boolean;
	@Column({ type : 'varchar', length : 100})
	fantasia : string;
	@Column({ type : 'float8'})
	faturamentoEstimado : float;
	@Column({ type : 'varchar', length : 20})
	fone : string;
	@Column({ type : 'varchar', length : 20})
	horaEspecial : string;
	@Column({ type : 'bool'})
	horarioEspecial : boolean;
	@Column({ type : 'int4'})
	idExercicio : number;
	@Column({ type : 'int4'})
	idIdentificacao : number;
	@Column({ type : 'int4'})
	idImovelCobranca : number;
	@Column({ type : 'bool'})
	inativo : boolean;
	@Column({ type : 'varchar', length : 30})
	inscrEstadual : string;
	@Column({ type : 'varchar', length : 20})
	inscricao : string;
	@Column({ type : 'varchar', length : 20})
	inscricaoAnterior : string;
	@Column({ type : 'varchar', length : 4})
	internet : string;
	@Column({ type : 'int4'})
	intrSimpliss : number;
	@Column({ type : 'varchar', length : 5})
	isento : string;
	@Column({ type : 'bool'})
	mei : boolean;
	@Column({ type : 'varchar', length : 20})
	nrJuntaComercial : string;
	@Column({ type : 'int4'})
	nrVeiculos : number;
	@Column({ type : 'varchar', length : 20})
	numAlvara : string;
	@Column({ type : 'varchar', length : 20})
	numAlvaraAmbiental : string;
	@Column({ type : 'varchar', length : 20})
	numAlvaraAnp : string;
	@Column({ type : 'varchar', length : 20})
	numAlvaraBombeiro : string;
	@Column({ type : 'varchar', length : 20})
	numAlvaraCetesb : string;
	@Column({ type : 'varchar', length : 20})
	numAlvaraEspecial : string;
	@Column({ type : 'varchar', length : 20})
	numAlvaraFunc : string;
	@Column({ type : 'varchar', length : 20})
	numAlvaraOutros : string;
	@Column({ type : 'varchar', length : 20})
	numAlvaraSanitaria : string;
	@Column({ type : 'varchar', length : 20})
	numAlvaraSolo : string;
	@Column({ type : 'int4'})
	numero : number;
	@Column({ type : 'int4'})
	numeroFuncionarios : number;
	@Column({ type : 'int4'})
	numeroRegistroConselho : number;
	@Column({ type : 'varchar', length : 5000})
	obsAlvara : string;
	@Column({ type : 'varchar', length : 5000})
	obsSimples : string;
	@Column({ type : 'varchar', length : 5000})
	observacao : string;
	@Column({ type : 'bool'})
	pendente : boolean;
	@Column({ type : 'bool'})
	pendenteDocumentacao : boolean;
	@Column({ type : 'bool'})
	pendenteFiscalizacao : boolean;
	@Column({ type : 'bool'})
	porcentagemTaxaEventual : boolean;
	@Column({ type : 'varchar', length : 10})
	procAbertura : string;
	@Column({ type : 'varchar', length : 10})
	procEncerra : string;
	@Column({ type : 'varchar', length : 20})
	processoN : string;
	@Column({ type : 'float8'})
	qtdUfm : float;
	@Column({ type : 'varchar', length : 255})
	senha : string;
	@Column({ type : 'int4'})
	sequenciaAlvara : number;
	@Column({ type : 'bool'})
	simplesNacional : boolean;
	@Column({ type : 'int4'})
	statusCarne : number;
	@Column({ type : 'float8'})
	testada : float;
	@Column({ type : 'varchar', length : 500})
	tipoPredio : string;
	@Column({ type : 'int4'})
	tmpIdAtividade : number;
	@Column({ type : 'float8'})
	vlEstimado : float;
	@Column({ type : 'int4'})
	idAtividade : number;
	@Column({ type : 'int4'})
	idCategoria : number;
	@Column({ type : 'int4'})
	idConselho : number;
	@Column({ type : 'int4'})
	idEscritorio : number;
	@Column({ type : 'int4'})
	idImovel : number;
	@Column({ type : 'int4'})
	idPessoa : number;
	@Column({ type : 'int4'})
	idRamoAtuacao : number;
	@Column({ type : 'varchar', length : 50})
	protocoloAutonomo : string;
	@Column({ type : 'varchar', length : 50})
	protocoloAutonomoDomicilioFiscal : string;
	@Column({ type : 'varchar', length : 50})
	protocoloBaixaInscricao : string;
	@Column({ type : 'varchar', length : 50})
	protocoloDiversoes : string;
	@Column({ type : 'varchar', length : 50})
	protocoloInativacao : string;
	@Column({ type : 'float8'})
	vlBilheteria : float;
	@Column({ type : 'int4'})
	idSegmento : number;
	@Column({ type : 'varchar', length : 50})
	protocoloFuncionamento : string;
	@Column({ type : 'varchar', length : 50})
	protocoloProvisorio : string;
	@Column({ type : 'bool'})
	eventualidade : boolean;
	@Column({ type : 'bool'})
	passivelVigilancia : boolean;
	@Column({ type : 'varchar', length : 255})
	senhaBase : string;
}