import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import issqn from './issqn'

@Entity()
export class log_emissao {
 
	@PrimaryGeneratedColumn()
	id : number;
	@Column({ type : 'bytea'})
	arquivo : number;
	@Column({ type : 'varchar', length : 200})
	certidao : string;
	@Column({ type : 'varchar', length : 200})
	chave : string;
	@Column({ type : 'timestamp'})
	data : date;
	@Column({ type : 'varchar', length : 200})
	ip : string;
	@Column({ type : 'varchar', length : 200})
	tipo : string;
	@Column({ type : 'int4'})
	idIss : number;
}