import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import usuarioPerfil from './usuarioPerfil'
import acesso from './acesso'

@Entity()
export class usuario_perfil_acesso {
 
	@PrimaryGeneratedColumn()
	usuarioperfilIdPerfil : number;
	@PrimaryGeneratedColumn()
	acessosId : number;
}