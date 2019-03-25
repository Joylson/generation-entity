import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class funcionarios {
 
	@Column({ type : 'varchar', length : 255})
	adiantamento : string;
	@Column({ type : 'varchar', length : 255})
	agencia : string;
	@Column({ type : 'int4'})
	ano1Emprego : number;
	@Column({ type : 'int4'})
	anoChegada : number;
	@Column({ type : 'varchar', length : 255})
	apelido : string;
	@Column({ type : 'varchar', length : 255})
	avisoPrevioRescisao : string;
	@Column({ type : 'varchar', length : 255})
	bairro : string;
	@Column({ type : 'int2'})
	banco : number;
	@Column({ type : 'int4'})
	cagedRescisao : number;
	@Column({ type : 'varchar', length : 255})
	calcFgts : string;
	@Column({ type : 'varchar', length : 255})
	calcInss : string;
	@Column({ type : 'varchar', length : 255})
	calcInssEmpresa : string;
	@Column({ type : 'varchar', length : 255})
	calcIrrf : string;
	@Column({ type : 'varchar', length : 255})
	calculoMedias : string;
	@Column({ type : 'varchar', length : 255})
	caminhoFoto : string;
	@Column({ type : 'int4'})
	cargo : number;
	@Column({ type : 'int2'})
	cartaoPonto : number;
	@Column({ type : 'int4'})
	cartaoponto : number;
	@Column({ type : 'varchar', length : 255})
	carteiraMotorista : string;
	@Column({ type : 'varchar', length : 255})
	carteiraMotoristaCategoria : string;
	@Column({ type : 'timestamp'})
	carteiraMotoristaValidade : date;
	@Column({ type : 'varchar', length : 255})
	carteiraProfissional : string;
	@Column({ type : 'int2'})
	categoriaFgts : number;
	@Column({ type : 'varchar', length : 255})
	causaAfastamento : string;
	@Column({ type : 'int4'})
	causaDemissao : number;
	@Column({ type : 'varchar', length : 255})
	cbo : string;
	@Column({ type : 'varchar', length : 255})
	celular : string;
	@Column({ type : 'varchar', length : 255})
	cep : string;
	@Column({ type : 'varchar', length : 255})
	cestabasica : string;
	@Column({ type : 'int4'})
	chapa2 : number;
	@Column({ type : 'varchar', length : 255})
	chapa2Desconto : string;
	@Column({ type : 'int4'})
	chapeira : number;
	@Column({ type : 'varchar', length : 255})
	cidade : string;
	@Column({ type : 'varchar', length : 255})
	codBarras : string;
	@Column({ type : 'varchar', length : 255})
	codMovimentoAfa : string;
	@Column({ type : 'varchar', length : 255})
	codMovimentoRet : string;
	@Column({ type : 'int4'})
	codigoAdiantamento : number;
	@Column({ type : 'varchar', length : 255})
	codigoAfastamento : string;
	@Column({ type : 'int2'})
	codigoFuncao : number;
	@Column({ type : 'int4'})
	codigoReferencia : number;
	@Column({ type : 'int4'})
	codigoReferenciaComissao : number;
	@Column({ type : 'int4'})
	codigoReferenciaConcurso : number;
	@Column({ type : 'varchar', length : 255})
	codigoSaque : string;
	@Column({ type : 'int4'})
	codigoTurma : number;
	@Column({ type : 'int4'})
	concursoAno : number;
	@Column({ type : 'int4'})
	concursoClassif : number;
	@Column({ type : 'timestamp'})
	concursoData : date;
	@Column({ type : 'varchar', length : 255})
	concursoNumero : string;
	@Column({ type : 'varchar', length : 255})
	conjuge : string;
	@Column({ type : 'varchar', length : 255})
	conjugeCpf : string;
	@Column({ type : 'timestamp'})
	conjugeDataNascimento : date;
	@Column({ type : 'varchar', length : 255})
	conjugeIrrf : string;
	@Column({ type : 'varchar', length : 255})
	conjugeRg : string;
	@Column({ type : 'varchar', length : 255})
	contaCorrente : string;
	@Column({ type : 'int4'})
	contaFgts : number;
	@Column({ type : 'varchar', length : 255})
	contribSindical : string;
	@Column({ type : 'varchar', length : 255})
	cpf : string;
	@Column({ type : 'varchar', length : 255})
	cracha : string;
	@Column({ type : 'timestamp'})
	dataAdmissao : date;
	@Column({ type : 'timestamp'})
	dataAfastamento : date;
	@Column({ type : 'timestamp'})
	dataAviso : date;
	@Column({ type : 'timestamp'})
	dataCartProf : date;
	@Column({ type : 'timestamp'})
	dataDemissao : date;
	@Column({ type : 'timestamp'})
	dataDemissaoBase : date;
	@Column({ type : 'timestamp'})
	dataDemissaoTrab : date;
	@Column({ type : 'timestamp'})
	dataFerias : date;
	@Column({ type : 'timestamp'})
	dataHomologacao : date;
	@Column({ type : 'timestamp'})
	dataLimite : date;
	@Column({ type : 'timestamp'})
	dataNascimento : date;
	@Column({ type : 'timestamp'})
	dataOpcao : date;
	@Column({ type : 'timestamp'})
	dataPispasep : date;
	@Column({ type : 'timestamp'})
	dataRetorno : date;
	@Column({ type : 'timestamp'})
	dataSefip : date;
	@Column({ type : 'timestamp'})
	dataTempo : date;
	@Column({ type : 'timestamp'})
	datafinComissao : date;
	@Column({ type : 'timestamp'})
	datafinSubstituicao : date;
	@Column({ type : 'timestamp'})
	datainiComissao : date;
	@Column({ type : 'timestamp'})
	datainiSubstituicao : date;
	@Column({ type : 'varchar', length : 255})
	decimoTerceiro : string;
	@Column({ type : 'varchar', length : 255})
	deficienteFisico : string;
	@Column({ type : 'int2'})
	depImpostoRenda : number;
	@Column({ type : 'int2'})
	depSalarioFamilia : number;
	@Column({ type : 'int4'})
	departamento : number;
	@Column({ type : 'int4'})
	diasProrrogacaoContrato : number;
	@Column({ type : 'int4'})
	dotacao : number;
	@Column({ type : 'varchar', length : 255})
	eMail : string;
	@Column({ type : 'varchar', length : 255})
	endereco : string;
	@Column({ type : 'varchar', length : 255})
	especializacao : string;
	@Column({ type : 'varchar', length : 255})
	estado : string;
	@Column({ type : 'varchar', length : 255})
	estadoCivil : string;
	@Column({ type : 'varchar', length : 255})
	estadoNascimento : string;
	@Column({ type : 'int2'})
	experiencia : number;
	@Column({ type : 'int4'})
	faixaSeguroVida : number;
	@Column({ type : 'varchar', length : 255})
	farmacia : string;
	@Column({ type : 'varchar', length : 255})
	ferias : string;
	@Column({ type : 'varchar', length : 255})
	fgtsRecolhido : string;
	@Column({ type : 'varchar', length : 255})
	fgtsRecolhidoObs : string;
	@Column({ type : 'int4'})
	formaAdmissao : number;
	@Column({ type : 'bytea'})
	foto : number;
	@Column({ type : 'int4'})
	funcao : number;
	@Column({ type : 'int4'})
	funcaoComissao : number;
	@Column({ type : 'int4'})
	funcaoConcurso : number;
	@Column({ type : 'int2'})
	grauInstrucao : number;
	@Column({ type : 'varchar', length : 255})
	grfcFgts : string;
	@Column({ type : 'varchar', length : 255})
	horario1 : string;
	@Column({ type : 'varchar', length : 255})
	horario2 : string;
	@Column({ type : 'varchar', length : 255})
	horario3 : string;
	@Column({ type : 'varchar', length : 255})
	horario4 : string;
	@Column({ type : 'varchar', length : 255})
	horarioDescricao : string;
	@Column({ type : 'float8'})
	horas : float;
	@Column({ type : 'int4'})
	horasSemanais : number;
	@Column({ type : 'int2'})
	idiomas : number;
	@Column({ type : 'varchar', length : 255})
	informarRais : string;
	@Column({ type : 'varchar', length : 255})
	isencao65anos : string;
	@Column({ type : 'varchar', length : 255})
	localNascimento : string;
	@Column({ type : 'varchar', length : 255})
	mae : string;
	@Column({ type : 'varchar', length : 255})
	marcado : string;
	@Column({ type : 'int2'})
	nacionalidade : number;
	@Column({ type : 'varchar', length : 255})
	nomeFuncionario : string;
	@Column({ type : 'varchar', length : 255})
	numero : string;
	@Column({ type : 'int4'})
	numeroOrdem : number;
	@Column({ type : 'varchar', length : 255})
	obs1 : string;
	@Column({ type : 'varchar', length : 255})
	obs2 : string;
	@Column({ type : 'varchar', length : 255})
	obsAdmissao : string;
	@Column({ type : 'varchar', length : 255})
	obsRescisao : string;
	@Column({ type : 'int2'})
	ocorrenciaFgts : number;
	@Column({ type : 'varchar', length : 255})
	pai : string;
	@Column({ type : 'numeric'})
	pensaoAlimRescisao : number;
	@Column({ type : 'varchar', length : 255})
	pisPasep : string;
	@Column({ type : 'int4'})
	pontuacao : number;
	@Column({ type : 'int4'})
	portariaAdmissao : number;
	@Column({ type : 'int4'})
	portariaAno : number;
	@Column({ type : 'timestamp'})
	portariaData : date;
	@Column({ type : 'timestamp'})
	portariaDataAdmissao : date;
	@Column({ type : 'int4'})
	portariaNumero : number;
	@Column({ type : 'varchar', length : 255})
	previdenciaReembolso : string;
	@Column({ type : 'int4'})
	primeiroAcesso : number;
	@Column({ type : 'varchar', length : 255})
	profissao : string;
	@Column({ type : 'timestamp'})
	prorrogacaoContrato : date;
	@Column({ type : 'varchar', length : 255})
	provimento : string;
	@Column({ type : 'int2'})
	raca : number;
	@Column({ type : 'timestamp'})
	readaptadoData : date;
	@Column({ type : 'varchar', length : 255})
	readaptadoMotivo : string;
	@Column({ type : 'varchar', length : 255})
	referencia : string;
	@Column({ type : 'varchar', length : 255})
	referenciaComissao : string;
	@Column({ type : 'varchar', length : 255})
	referenciaConcurso : string;
	@Column({ type : 'int4'})
	regime : number;
	@Column({ type : 'varchar', length : 255})
	registroCartTrab : string;
	@Column({ type : 'timestamp'})
	reintegracaoData : date;
	@Column({ type : 'varchar', length : 255})
	reintegracaoMotivo : string;
	@Column({ type : 'varchar', length : 255})
	rescisaoCalculo : string;
	@Column({ type : 'varchar', length : 255})
	rescisaoFolha : string;
	@Column({ type : 'varchar', length : 255})
	reservista : string;
	@Column({ type : 'varchar', length : 255})
	rg : string;
	@Column({ type : 'timestamp'})
	rgData : date;
	@Column({ type : 'varchar', length : 255})
	rgEmissao : string;
	@Column({ type : 'varchar', length : 255})
	rgUf : string;
	@Column({ type : 'numeric'})
	salarioBase : number;
	@Column({ type : 'numeric'})
	salarioBaseProporcao : number;
	@Column({ type : 'numeric'})
	salarioRescisao : number;
	@Column({ type : 'numeric'})
	salarioTotal : number;
	@Column({ type : 'numeric'})
	saldoFgts : number;
	@Column({ type : 'varchar', length : 255})
	sefip : string;
	@Column({ type : 'varchar', length : 255})
	seguroDesemprego : string;
	@Column({ type : 'varchar', length : 255})
	seguroVida : string;
	@Column({ type : 'varchar', length : 255})
	senha : string;
	@Column({ type : 'varchar', length : 255})
	serie : string;
	@Column({ type : 'int4'})
	setor : number;
	@Column({ type : 'varchar', length : 255})
	sexo : string;
	@Column({ type : 'int2'})
	sindicato : number;
	@Column({ type : 'varchar', length : 255})
	situacao : string;
	@Column({ type : 'varchar', length : 255})
	situacaoEspecial : string;
	@Column({ type : 'int4'})
	suspensao : number;
	@Column({ type : 'varchar', length : 255})
	telefone : string;
	@Column({ type : 'varchar', length : 255})
	telefoneContato : string;
	@Column({ type : 'int4'})
	tempoInss : number;
	@Column({ type : 'int4'})
	ticketFolhas : number;
	@Column({ type : 'numeric'})
	ticketValor : number;
	@Column({ type : 'int2'})
	tipoAdmissao : number;
	@Column({ type : 'int4'})
	tipoContrato : number;
	@Column({ type : 'int2'})
	tipoMovimento : number;
	@Column({ type : 'int2'})
	tipoSalario : number;
	@Column({ type : 'varchar', length : 255})
	tituloEleitor : string;
	@Column({ type : 'int4'})
	tituloEleitorSessao : number;
	@Column({ type : 'int4'})
	tituloEleitorZona : number;
	@Column({ type : 'varchar', length : 255})
	ufCartProf : string;
	@Column({ type : 'varchar', length : 255})
	usuario : string;
	@Column({ type : 'varchar', length : 255})
	valeMercadoria : string;
	@Column({ type : 'varchar', length : 255})
	valeTransporte : string;
	@Column({ type : 'numeric'})
	valeTransporteQuant : number;
	@Column({ type : 'numeric'})
	valorAdiantamento : number;
	@Column({ type : 'numeric'})
	valorAposentadoria : number;
	@Column({ type : 'numeric'})
	valorAvisoPrevioRescisao : number;
	@Column({ type : 'timestamp'})
	vecimentoContrato : date;
	@Column({ type : 'int2'})
	vinculoEmpregaticio : number;
	@PrimaryGeneratedColumn()
	empresa : number;
	@PrimaryGeneratedColumn()
	chapa : number;
}