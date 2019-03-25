import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import bairroLogradouro from './bairroLogradouro'

@Entity()
export class imovel {
 
	@PrimaryGeneratedColumn()
	idImovel : number;
	@Column({ type : 'varchar', length : 20})
	cep : string;
	@Column({ type : 'varchar', length : 5000})
	complemento : string;
	@Column({ type : 'varchar', length : 100})
	lote : string;
	@Column({ type : 'varchar', length : 10})
	nrImovel : string;
	@Column({ type : 'varchar', length : 100})
	pontoReferencia : string;
	@Column({ type : 'varchar', length : 100})
	quadra : string;
	@Column({ type : 'int4'})
	idBairrologradouro : number;
}