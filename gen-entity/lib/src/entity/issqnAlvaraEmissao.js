import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import contabilOrgao from './contabilOrgao'

@Entity()
export class issqn_alvara_emissao {
 
	@PrimaryGeneratedColumn()
	id : number;
	@Column({ type : 'bytea'})
	arquivo : number;
	@Column({ type : 'timestamp'})
	dataEmissao : date;
	@Column({ type : 'date'})
	dataValidade : date;
	@Column({ type : 'int4'})
	nrAlvara : number;
	@Column({ type : 'varchar', length : 12})
	protocolo : string;
	@Column({ type : 'int4'})
	idIss : number;
	@Column({ type : 'varchar', length : 255})
	idOrgao : string;
}