import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class usuario_perfil {
 
	@PrimaryGeneratedColumn()
	idPerfil : number;
	@Column({ type : 'varchar', length : 200})
	descricao : string;
	@Column({ type : 'int4'})
	idOrgao : number;
	@Column({ type : 'varchar', length : 50})
	sistema : string;
	@Column({ type : 'varchar', length : 100})
	nome : string;
}