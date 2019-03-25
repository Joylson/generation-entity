import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class orgao {
 
	@PrimaryGeneratedColumn()
	idOrgao : number;
	@Column({ type : 'varchar', length : 45})
	nome : string;
	@Column({ type : 'varchar', length : 45})
	logradouro : string;
	@Column({ type : 'varchar', length : 6})
	numero : string;
	@Column({ type : 'varchar', length : 45})
	bairro : string;
	@Column({ type : 'varchar', length : 45})
	cidade : string;
	@Column({ type : 'varchar', length : 2})
	estado : string;
	@Column({ type : 'varchar', length : 20})
	cep : string;
	@Column({ type : 'varchar', length : 20})
	telefone : string;
}