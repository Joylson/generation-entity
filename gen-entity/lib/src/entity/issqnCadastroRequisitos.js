import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import issqnCadastroRequisitos from './issqnCadastroRequisitos'

@Entity()
export class issqn_cadastro_requisitos {
 
	@PrimaryGeneratedColumn()
	id : number;
	@Column({ type : 'bool'})
	ativo : boolean;
	@Column({ type : 'varchar', length : 5000})
	caracteristica : string;
	@Column({ type : 'varchar', length : 255})
	classe : string;
	@Column({ type : 'varchar', length : 255})
	nivelImpacto : string;
	@Column({ type : 'varchar', length : 255})
	nome : string;
	@Column({ type : 'int4'})
	repositorioId : number;
}