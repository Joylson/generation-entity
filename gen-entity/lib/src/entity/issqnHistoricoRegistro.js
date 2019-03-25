import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import issqn from './issqn'

@Entity()
export class issqn_historico_registro {
 
	@PrimaryGeneratedColumn()
	id : number;
	@Column({ type : 'bool'})
	ativo : boolean;
	@Column({ type : 'int4'})
	cartaoCidadao : number;
	@Column({ type : 'varchar', length : 20})
	celular : string;
	@Column({ type : 'varchar', length : 50})
	certReservista : string;
	@Column({ type : 'int4'})
	cor : number;
	@Column({ type : 'varchar', length : 20})
	cpfCnpj : string;
	@Column({ type : 'date'})
	dataCadastro : date;
	@Column({ type : 'date'})
	dataNascimento : date;
	@Column({ type : 'date'})
	dtEmissaoRg : date;
	@Column({ type : 'varchar', length : 150})
	eMail : string;
	@Column({ type : 'int4'})
	estCivil : number;
	@Column({ type : 'int4'})
	grauInstrucao : number;
	@Column({ type : 'varchar', length : 50})
	inscEstadual : string;
	@Column({ type : 'varchar', length : 50})
	inscMunicipal : string;
	@Column({ type : 'varchar', length : 200})
	nome : string;
	@Column({ type : 'varchar', length : 300})
	nomeFantasia : string;
	@Column({ type : 'int4'})
	orgaoExpRg : number;
	@Column({ type : 'varchar', length : 20})
	rg : string;
	@Column({ type : 'int4'})
	sexo : number;
	@Column({ type : 'varchar', length : 50})
	tel1 : string;
	@Column({ type : 'varchar', length : 50})
	tel2 : string;
	@Column({ type : 'varchar', length : 20})
	telefone : string;
	@Column({ type : 'int4'})
	tpPessoa : number;
	@Column({ type : 'int4'})
	tpSanguineo : number;
	@Column({ type : 'int4'})
	ufRg : number;
	@Column({ type : 'int4'})
	idIss : number;
}