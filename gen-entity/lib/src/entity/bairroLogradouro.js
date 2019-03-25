import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import bairro from './bairro'
import cidade from './cidade'
import logradouro from './logradouro'
import logradouro from './logradouro'
import logradouro from './logradouro'
import logradouro from './logradouro'

@Entity()
export class bairro_logradouro {
 
	@PrimaryGeneratedColumn()
	idBairrologradouro : number;
	@Column({ type : 'varchar', length : 15})
	geoLogradouro : string;
	@Column({ type : 'int4'})
	nrFinal : number;
	@Column({ type : 'int4'})
	nrInicial : number;
	@Column({ type : 'int4'})
	idBairro : number;
	@Column({ type : 'int4'})
	idCidade : number;
	@Column({ type : 'int4'})
	idLogradouro : number;
}