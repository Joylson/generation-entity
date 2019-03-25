import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class auditoria_log {
 
	@PrimaryGeneratedColumn()
	idAuditoria : number;
	@Column({ type : 'timestamp'})
	startTime : date;
	@Column({ type : 'int4'})
	idExercicio : number;
	@Column({ type : 'varchar', length : 200})
	hostname : string;
	@Column({ type : 'int8'})
	id : number;
	@Column({ type : 'varchar', length : 50})
	operacao : string;
	@Column({ type : 'varchar', length : 255})
	idOrgao : string;
	@Column({ type : 'varchar', length : 128})
	programName : string;
	@Column({ type : 'text'})
	query : string;
	@Column({ type : 'text'})
	queryMap : string;
	@Column({ type : 'int4'})
	sessionId : number;
	@Column({ type : 'varchar', length : 50})
	sistema : string;
	@Column({ type : 'varchar', length : 100})
	tabela : string;
	@Column({ type : 'varchar', length : 3})
	tipo : string;
	@Column({ type : 'varchar', length : 128})
	loginName : string;
}