import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import bairro from './bairro'
import cidade from './cidade'
import logradouro from './logradouro'
import logradouro from './logradouro'
import logradouro from './logradouro'
import logradouro from './logradouro'

@Entity()
export class issqn_escritorio {
 
	@PrimaryGeneratedColumn()
	idEscritorio : number;
	@Column({ type : 'varchar', length : 20})
	cep : string;
	@Column({ type : 'varchar', length : 20})
	cnpj : string;
	@Column({ type : 'varchar', length : 30})
	complemento : string;
	@Column({ type : 'varchar', length : 20})
	cpf : string;
	@Column({ type : 'varchar', length : 255})
	email : string;
	@Column({ type : 'varchar', length : 20})
	fax : string;
	@Column({ type : 'varchar', length : 50})
	nomeFantasia : string;
	@Column({ type : 'int4'})
	numero : number;
	@Column({ type : 'varchar', length : 15})
	numeroClasse : string;
	@Column({ type : 'varchar', length : 50})
	orgaoClasse : string;
	@Column({ type : 'varchar', length : 50})
	razaoSocial : string;
	@Column({ type : 'varchar', length : 50})
	responsavel : string;
	@Column({ type : 'varchar', length : 20})
	telefone : string;
	@Column({ type : 'varchar', length : 2})
	uf : string;
	@Column({ type : 'int4'})
	idBairro : number;
	@Column({ type : 'int4'})
	idCidade : number;
	@Column({ type : 'int4'})
	idLogradouro : number;
}