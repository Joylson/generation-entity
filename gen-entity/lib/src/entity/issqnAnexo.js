import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import issqn from './issqn'

@Entity()
export class issqn_anexo {
 
	@PrimaryGeneratedColumn()
	id : number;
	@Column({ type : 'bytea'})
	arquivo : number;
	@Column({ type : 'date'})
	dataCadastro : date;
	@Column({ type : 'varchar', length : 50})
	nome : string;
	@Column({ type : 'varchar', length : 255})
	nomeRealArquivo : string;
	@Column({ type : 'varchar', length : 100})
	tipo : string;
	@Column({ type : 'int4'})
	issIdIss : number;
}