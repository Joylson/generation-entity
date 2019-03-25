import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import issqn from './issqn'

@Entity()
export class issqn_notificacao {
 
	@PrimaryGeneratedColumn()
	id : number;
	@Column({ type : 'date'})
	dtPrazo : date;
	@Column({ type : 'varchar', length : 500})
	notificacao : string;
	@Column({ type : 'varchar', length : 5000})
	observacao : string;
	@Column({ type : 'int4'})
	idIss : number;
}