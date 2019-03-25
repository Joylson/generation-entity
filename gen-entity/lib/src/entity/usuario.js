import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class usuario {
 
	@PrimaryGeneratedColumn()
	idUsuario : number;
	@Column({ type : 'varchar', length : 15})
	login : string;
	@Column({ type : 'varchar', length : 20})
	senha : string;
	@Column({ type : 'varchar', length : 50})
	nome : string;
	@Column({ type : 'varchar', length : 18})
	rg : string;
	@Column({ type : 'varchar', length : 18})
	cpf : string;
	@Column({ type : 'varchar', length : 10})
	fone1 : string;
	@Column({ type : 'varchar', length : 10})
	fone2 : string;
	@Column({ type : 'bpchar', length : 1})
	administrador : char;
	@Column({ type : 'varchar', length : 50})
	logradouro : string;
	@Column({ type : 'varchar', length : 10})
	num : string;
	@Column({ type : 'varchar', length : 50})
	bairro : string;
	@Column({ type : 'varchar', length : 50})
	cidade : string;
	@Column({ type : 'varchar', length : 10})
	cep : string;
	@Column({ type : 'varchar', length : 2})
	uf : string;
	@Column({ type : 'varchar', length : 15})
	sistema : string;
	@Column({ type : 'int4'})
	idOrgao : number;
	@Column({ type : 'int4'})
	idPerfil : number;
	@Column({ type : 'bpchar', length : 1})
	bloqueado : char;
}