import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class notas_versao {
 
	@PrimaryGeneratedColumn()
	id : number;
	@Column({ type : 'date'})
	data : date;
	@Column({ type : 'varchar', length : 500})
	descricao : string;
	@Column({ type : 'varchar', length : 20})
	sistema : string;
	@Column({ type : 'varchar', length : 30})
	versao : string;
}