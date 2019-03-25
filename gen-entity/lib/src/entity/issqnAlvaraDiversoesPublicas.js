import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import bairroLogradouro from './bairroLogradouro'

@Entity()
export class issqn_alvara_diversoes_publicas {
 
	@PrimaryGeneratedColumn()
	idAlvaraDiversoesPublicas : number;
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
	@Column({ type : 'int4'})
	nrImovel : number;
	@Column({ type : 'varchar', length : 20})
	processo : string;
	@Column({ type : 'varchar', length : 1000})
	texto : string;
	@Column({ type : 'varchar', length : 100})
	tipoAlvara : string;
	@Column({ type : 'int4'})
	idBairrologradouro : number;
	@Column({ type : 'int4'})
	idIss : number;
}