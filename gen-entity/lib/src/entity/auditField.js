import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import auditEntry from './auditEntry'

@Entity()
export class audit_field {
 
	@PrimaryGeneratedColumn()
	id : number;
	@Column({ type : 'varchar', length : 255})
	fieldname : string;
	@Column({ type : 'text'})
	fieldvalue : string;
	@Column({ type : 'int8'})
	auditentryid : number;
}