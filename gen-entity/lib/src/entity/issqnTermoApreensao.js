import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import bairroLogradouro from './bairroLogradouro'
import issqn from './issqn'

@Entity()
export class issqn_termo_apreensao {
 
	@PrimaryGeneratedColumn()
	idTermoApreensao : number;
	@Column({ type : 'varchar', length : 100})
	acordoCom : string;
	@Column({ type : 'varchar', length : 21})
	cnpjCpf : string;
	@Column({ type : 'varchar', length : 50})
	complemento : string;
	@Column({ type : 'varchar', length : 300})
	contribuinte : string;
	@Column({ type : 'date'})
	dataEmissao : date;
	@Column({ type : 'varchar', length : 1000})
	descricaoServico : string;
	@Column({ type : 'int4'})
	nrImovel : number;
	@Column({ type : 'float8'})
	valor : float;
	@Column({ type : 'int4'})
	idBairrologradouro : number;
	@Column({ type : 'int4'})
	idIss : number;
}