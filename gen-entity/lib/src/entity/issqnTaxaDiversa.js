import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class issqn_taxa_diversa {
 
	@PrimaryGeneratedColumn()
	idTaxaDiversa : number;
	@Column({ type : 'varchar', length : 30})
	nome : string;
	@Column({ type : 'float8'})
	porcentagem : float;
	@Column({ type : 'varchar', length : 5})
	tpValor : string;
	@Column({ type : 'float8'})
	valor : float;
}