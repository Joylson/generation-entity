import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import bairroLogradouro from './bairroLogradouro'
import issqn from './issqn'

@Entity()
export class issqn_termo_intimacao {
 
	@PrimaryGeneratedColumn()
	idTermoIntimacao : number;
	@Column({ type : 'varchar', length : 300})
	atividade : string;
	@Column({ type : 'varchar', length : 21})
	cnpjCpf : string;
	@Column({ type : 'varchar', length : 50})
	complemento : string;
	@Column({ type : 'varchar', length : 300})
	contribuinte : string;
	@Column({ type : 'date'})
	data : date;
	@Column({ type : 'varchar', length : 20})
	fone : string;
	@Column({ type : 'varchar', length : 1000})
	historico : string;
	@Column({ type : 'varchar', length : 50})
	intimacao : string;
	@Column({ type : 'varchar', length : 50})
	leiMunicipal : string;
	@Column({ type : 'varchar', length : 50})
	notificacao : string;
	@Column({ type : 'int4'})
	nrImovel : number;
	@Column({ type : 'varchar', length : 20})
	numAlvara : string;
	@Column({ type : 'varchar', length : 1000})
	observacao : string;
	@Column({ type : 'varchar', length : 1000})
	prazoDe : string;
	@Column({ type : 'int4'})
	idBairrologradouro : number;
	@Column({ type : 'int4'})
	idIss : number;
}