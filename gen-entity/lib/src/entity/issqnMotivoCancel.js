import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class issqn_motivo_cancel {
 
	@PrimaryGeneratedColumn()
	idMotivoCancel : number;
	@Column({ type : 'varchar', length : 70})
	descricao : string;
}