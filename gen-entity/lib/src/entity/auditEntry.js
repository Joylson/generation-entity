import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import usuario from './usuario'

@Entity()
export class audit_entry {
 
	@PrimaryGeneratedColumn()
	id : number;
	@Column({ type : 'int4'})
	baseentityid : number;
	@Column({ type : 'varchar', length : 255})
	basefieldname : string;
	@Column({ type : 'varchar', length : 255})
	operation : string;
	@Column({ type : 'timestamp'})
	operationtime : date;
	@Column({ type : 'varchar', length : 100})
	tablename : string;
	@Column({ type : 'int4'})
	userIdUsuario : number;
}