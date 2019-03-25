import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import usuarioPerfil from './usuarioPerfil'

@Entity()
export class acesso {
 
	@PrimaryGeneratedColumn()
	id : number;
	@Column({ type : 'bool'})
	ativo : boolean;
	@Column({ type : 'int4'})
	pagina : number;
	@Column({ type : 'int4'})
	idPerfil : number;
}