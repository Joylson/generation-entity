import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class deficiencia_pessoa {
 
	@PrimaryGeneratedColumn()
	id : number;
	@Column({ type : 'bool'})
	auditiva : boolean;
	@Column({ type : 'bool'})
	fisica : boolean;
	@Column({ type : 'bool'})
	mental : boolean;
	@Column({ type : 'varchar', length : 255})
	observacao : string;
	@Column({ type : 'bool'})
	visual : boolean;
}