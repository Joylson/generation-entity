import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import cidade from './cidade'
import cidade from './cidade'
import cidade from './cidade'
import deficienciaPessoa from './deficienciaPessoa'
import imovel from './imovel'
import imovel from './imovel'
import cidade from './cidade'
import profissao from './profissao'
import religiao from './religiao'

@Entity()
export class pessoa {
 
	@PrimaryGeneratedColumn()
	idPessoa : number;
	@Column({ type : 'varchar', length : 255})
	apelido : string;
	@Column({ type : 'varchar', length : 255})
	bairro : string;
	@Column({ type : 'bool'})
	bolsaFamilia : boolean;
	@Column({ type : 'int4'})
	cadastroAtualizado : number;
	@Column({ type : 'varchar', length : 255})
	cartProf : string;
	@Column({ type : 'int4'})
	cartaoCidadao : number;
	@Column({ type : 'varchar', length : 255})
	cartorioCertidao : string;
	@Column({ type : 'varchar', length : 255})
	celular : string;
	@Column({ type : 'varchar', length : 255})
	cep : string;
	@Column({ type : 'varchar', length : 255})
	certReservista : string;
	@Column({ type : 'int4'})
	certidao : number;
	@Column({ type : 'varchar', length : 50})
	cidade : string;
	@Column({ type : 'int4'})
	codHabitante : number;
	@Column({ type : 'varchar', length : 20})
	complemento : string;
	@Column({ type : 'int4'})
	cor : number;
	@Column({ type : 'varchar', length : 255})
	cpfCnpj : string;
	@Column({ type : 'date'})
	dataEmissao : date;
	@Column({ type : 'date'})
	dataNascimento : date;
	@Column({ type : 'varchar', length : 255})
	distritoCertidaoNasc : string;
	@Column({ type : 'date'})
	dtAbertura : date;
	@Column({ type : 'date'})
	dtAdmissao : date;
	@Column({ type : 'date'})
	dtEmissaoCartProf : date;
	@Column({ type : 'date'})
	dtEmissaoCertidao : date;
	@Column({ type : 'date'})
	dtEmissaoRg : date;
	@Column({ type : 'date'})
	dtInscricao : date;
	@Column({ type : 'date'})
	dtMigracao : date;
	@Column({ type : 'date'})
	dtNascimento : date;
	@Column({ type : 'varchar', length : 255})
	eMail : string;
	@Column({ type : 'varchar', length : 255})
	email : string;
	@Column({ type : 'varchar', length : 255})
	empresaTrab : string;
	@Column({ type : 'int4'})
	estCivil : number;
	@Column({ type : 'int4'})
	estadoCivil : number;
	@Column({ type : 'int4'})
	flsCertidaoNasc : number;
	@Column({ type : 'varchar', length : 255})
	folhaCertidao : string;
	@Column({ type : 'int4'})
	grauInstrucao : number;
	@Column({ type : 'int4'})
	idAtividade : number;
	@Column({ type : 'int4'})
	idCargo : number;
	@Column({ type : 'varchar', length : 255})
	inscEstadual : string;
	@Column({ type : 'varchar', length : 255})
	inscMunicipal : string;
	@Column({ type : 'varchar', length : 255})
	inscricaoEstadual : string;
	@Column({ type : 'bool'})
	isEstudante : boolean;
	@Column({ type : 'int4'})
	isRegProf : number;
	@Column({ type : 'bool'})
	isRegistrado : boolean;
	@Column({ type : 'varchar', length : 255})
	livroCertidao : string;
	@Column({ type : 'varchar', length : 255})
	livroCertidaoNasc : string;
	@Column({ type : 'varchar', length : 100})
	logradouro : string;
	@Column({ type : 'varchar', length : 255})
	mae : string;
	@Column({ type : 'varchar', length : 255})
	matriculaCertidaoNasc : string;
	@Column({ type : 'varchar', length : 255})
	memorando : string;
	@Column({ type : 'varchar', length : 255})
	nacionalidade : string;
	@Column({ type : 'int4'})
	natureza : number;
	@Column({ type : 'int4'})
	nis : number;
	@Column({ type : 'varchar', length : 255})
	nome : string;
	@Column({ type : 'varchar', length : 255})
	nomeFantasia : string;
	@Column({ type : 'int4'})
	numero : number;
	@Column({ type : 'int4'})
	numeroTemp : number;
	@Column({ type : 'int4'})
	orgaoExpRg : number;
	@Column({ type : 'int4'})
	orgaoExpedidorRg : number;
	@Column({ type : 'varchar', length : 255})
	pai : string;
	@Column({ type : 'varchar', length : 255})
	pisPasep : string;
	@Column({ type : 'float8'})
	renda : float;
	@Column({ type : 'float8'})
	rendaComplementar : float;
	@Column({ type : 'varchar', length : 255})
	rg : string;
	@Column({ type : 'varchar', length : 255})
	rua : string;
	@Column({ type : 'int4'})
	sexo : number;
	@Column({ type : 'int4'})
	situacao : number;
	@Column({ type : 'int4'})
	sociedade : number;
	@Column({ type : 'varchar', length : 255})
	subdistritoCertidaoNasc : string;
	@Column({ type : 'int4'})
	sus : number;
	@Column({ type : 'varchar', length : 255})
	tel1 : string;
	@Column({ type : 'varchar', length : 255})
	tel2 : string;
	@Column({ type : 'varchar', length : 255})
	tel3 : string;
	@Column({ type : 'varchar', length : 255})
	tel4 : string;
	@Column({ type : 'varchar', length : 255})
	tel5 : string;
	@Column({ type : 'varchar', length : 255})
	tel6 : string;
	@Column({ type : 'varchar', length : 255})
	telefone : string;
	@Column({ type : 'varchar', length : 255})
	termoCertidao : string;
	@Column({ type : 'int4'})
	tpPessoa : number;
	@Column({ type : 'int4'})
	tpSanguineo : number;
	@Column({ type : 'varchar', length : 50})
	uf : string;
	@Column({ type : 'int4'})
	ufRg : number;
	@Column({ type : 'varchar', length : 255})
	url : string;
	@Column({ type : 'int4'})
	cidadeCertidaoNasc : number;
	@Column({ type : 'int4'})
	idCidadeEleitor : number;
	@Column({ type : 'int4'})
	idCidadeNasc : number;
	@Column({ type : 'int4'})
	deficienciapessoa : number;
	@Column({ type : 'int4'})
	idImovel : number;
	@Column({ type : 'int4'})
	idImovelTrab : number;
	@Column({ type : 'int4'})
	idOrigemMigracao : number;
	@Column({ type : 'int4'})
	idProfissao : number;
	@Column({ type : 'int4'})
	idReligiao : number;
}