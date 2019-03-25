import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import usuario from './usuario'
import usuario from './usuario'

@Entity()
export class usuario_email {
 
	@PrimaryGeneratedColumn()
	id : number;
	@Column({ type : 'varchar', length : 255})
	mensagem : string;
	@Column({ type : 'varchar', length : 100})
	titulo : string;
	@Column({ type : 'int4'})
	destinoId : number;
	@Column({ type : 'int4'})
	origemId : number;
}