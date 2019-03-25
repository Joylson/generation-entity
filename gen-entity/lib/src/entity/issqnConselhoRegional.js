import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import bairro from './bairro'
import cidade from './cidade'
import logradouro from './logradouro'
import logradouro from './logradouro'
import logradouro from './logradouro'
import logradouro from './logradouro'

@Entity()
export class issqn_conselho_regional {
 
	@PrimaryGeneratedColumn()
	idConselho : number;
	@Column({ type : 'varchar', length : 20})
	cep : string;
	@Column({ type : 'varchar', length : 255})
	complemento : string;
	@Column({ type : 'varchar', length : 50})
	conselhoRegional : string;
	@Column({ type : 'varchar', length : 50})
	descricao : string;
	@Column({ type : 'int4'})
	numero : number;
	@Column({ type : 'varchar', length : 10})
	sigla : string;
	@Column({ type : 'int4'})
	idBairro : number;
	@Column({ type : 'int4'})
	idCidade : number;
	@Column({ type : 'int4'})
	idLogradouro : number;
}