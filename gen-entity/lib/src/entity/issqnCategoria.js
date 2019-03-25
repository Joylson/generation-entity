import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class issqn_categoria {
 
	@PrimaryGeneratedColumn()
	idCategoria : number;
	@Column({ type : 'int4'})
	codCategoria : number;
	@Column({ type : 'varchar', length : 80})
	nome : string;
	@Column({ type : 'varchar', length : 1})
	status : string;
	@Column({ type : 'varchar', length : 1000})
	textoAlvara : string;
	@Column({ type : 'float8'})
	valor : float;
}