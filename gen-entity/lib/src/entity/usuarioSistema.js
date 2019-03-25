import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import usuarioPerfil from './usuarioPerfil'

@Entity()
export class usuario_sistema {
 
	@PrimaryGeneratedColumn()
	id : number;
	@Column({ type : 'bool'})
	administrador : boolean;
	@Column({ type : 'varchar', length : 20})
	dtExpira : string;
	@Column({ type : 'varchar', length : 20})
	dtSenha : string;
	@Column({ type : 'varchar', length : 15})
	senha : string;
	@Column({ type : 'int4'})
	idUsuario : number;
	@Column({ type : 'int4'})
	idPerfil : number;
}