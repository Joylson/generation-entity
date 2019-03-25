import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import banco from './banco'

@Entity()
export class issqn_parametro {
 
	@PrimaryGeneratedColumn()
	id : number;
	@Column({ type : 'varchar', length : 1})
	anteciparPostgar : string;
	@Column({ type : 'int4'})
	idExercicio : number;
	@Column({ type : 'varchar', length : 5000})
	mensagem : string;
	@Column({ type : 'varchar', length : 5000})
	mensagemFim : string;
	@Column({ type : 'float8'})
	ufm : float;
	@Column({ type : 'float8'})
	vlExpediente : float;
	@Column({ type : 'float8'})
	vlUfesp : float;
	@Column({ type : 'int4'})
	idBanco : number;
}