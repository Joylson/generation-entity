import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class usuario_permissao {
 
	@PrimaryGeneratedColumn()
	idPermissao : string;
	@PrimaryGeneratedColumn()
	idPerfil : number;
	@Column({ type : 'bpchar', length : 1})
	status : char;
}