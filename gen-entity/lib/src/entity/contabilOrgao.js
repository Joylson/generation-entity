import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class contabil_orgao {
 
	@PrimaryGeneratedColumn()
	idOrgao : string;
	@Column({ type : 'int4'})
	aguaFirebird : number;
	@Column({ type : 'varchar', length : 255})
	bairro : string;
	@Column({ type : 'int4'})
	baixaInconsistencia : number;
	@Column({ type : 'int4'})
	baixaMovAutomatico : number;
	@Column({ type : 'int4'})
	bloquearFebraban : number;
	@Column({ type : 'bytea'})
	brasao : number;
	@Column({ type : 'int4'})
	calculoCorrecao : number;
	@Column({ type : 'varchar', length : 255})
	cep : string;
	@Column({ type : 'varchar', length : 255})
	cidade : string;
	@Column({ type : 'varchar', length : 255})
	cnpj : string;
	@Column({ type : 'varchar', length : 255})
	contador : string;
	@Column({ type : 'int4'})
	controleAutomatico : number;
	@Column({ type : 'varchar', length : 255})
	cpfChefe : string;
	@Column({ type : 'varchar', length : 255})
	crc : string;
	@Column({ type : 'int4'})
	dividaRemessa : number;
	@Column({ type : 'varchar', length : 255})
	email : string;
	@Column({ type : 'varchar', length : 255})
	endereco : string;
	@Column({ type : 'varchar', length : 255})
	estado : string;
	@Column({ type : 'varchar', length : 255})
	fax : string;
	@Column({ type : 'int4'})
	febrabanAgua : number;
	@Column({ type : 'varchar', length : 255})
	febrabanLocal : string;
	@Column({ type : 'varchar', length : 255})
	febrabanObservacao : string;
	@Column({ type : 'int4'})
	febrabanTributos : number;
	@Column({ type : 'bpchar', length : 1})
	funcao : char;
	@Column({ type : 'varchar', length : 255})
	idIbge : string;
	@Column({ type : 'int4'})
	idLogradouroManual : number;
	@Column({ type : 'int4'})
	idSiafi : number;
	@Column({ type : 'int4'})
	idTribunal : number;
	@Column({ type : 'varchar', length : 255})
	inscEstadual : string;
	@Column({ type : 'int4'})
	iptuRemessa : number;
	@Column({ type : 'int4'})
	issqnRemessa : number;
	@Column({ type : 'int4'})
	itbiInscricaoCadastral : number;
	@Column({ type : 'bytea'})
	logotipo : number;
	@Column({ type : 'int4'})
	loteSequencial : number;
	@Column({ type : 'varchar', length : 255})
	nome : string;
	@Column({ type : 'int4'})
	numero : number;
	@Column({ type : 'int4'})
	numeroCertidao : number;
	@Column({ type : 'int4'})
	permitirCertidaoNegativa : number;
	@Column({ type : 'varchar', length : 255})
	prefeito : string;
	@Column({ type : 'int4'})
	receitaRemessa : number;
	@Column({ type : 'varchar', length : 255})
	rgChefe : string;
	@Column({ type : 'varchar', length : 255})
	site : string;
	@Column({ type : 'varchar', length : 255})
	telefone : string;
	@Column({ type : 'varchar', length : 255})
	tesoureiro : string;
	@Column({ type : 'int4'})
	tipoJuros : number;
	@Column({ type : 'varchar', length : 255})
	tipoOrgao : string;
	@Column({ type : 'varchar', length : 255})
	tituloContador : string;
	@Column({ type : 'varchar', length : 255})
	tituloPrefeito : string;
	@Column({ type : 'varchar', length : 255})
	tituloTesoureiro : string;
	@Column({ type : 'varchar', length : 255})
	uf : string;
	@Column({ type : 'int4'})
	usaCartaoCidadao : number;
	@Column({ type : 'int4'})
	usaItbi : number;
	@Column({ type : 'int4'})
	usaNumCertGeral : number;
	@Column({ type : 'varchar', length : 255})
	idCidade : string;
	@Column({ type : 'varchar', length : 255})
	chefeEmpreendedorismo : string;
	@Column({ type : 'varchar', length : 255})
	fiscalRendas : string;
}