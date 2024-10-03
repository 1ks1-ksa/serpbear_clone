/*import { Table, Model, Column, DataType, PrimaryKey, Unique } from 'sequelize-typescript';


@Table({

  tableName: 'domain',
  timestamps: false
})*/
import { Table, Model, Column, DataType, PrimaryKey, Unique, TableOptions } from 'sequelize-typescript';

@Table(<TableOptions<Model<any, any>>>{
  tableName: 'domain',
  timestamps: false,
})


class Domain extends Model {
   save() {
      throw new Error('Method not implemented.');
   }
   set(arg0: { notification_interval: string; notification_emails: string; search_console: string; }) {
      throw new Error('Method not implemented.');
   }
   static destroy(arg0: { where: { domain: string | string[] | undefined; }; }): number | PromiseLike<number> {
      throw new Error('Method not implemented.');
   }
   static bulkCreate(domainsToAdd: any): Domain[] | PromiseLike<Domain[]> {
      throw new Error('Method not implemented.');
   }
   get(arg0: { plain: boolean; }): DomainType {
      throw new Error('Method not implemented.');
   }
   static findAll(): Domain[] | PromiseLike<Domain[]> {
      throw new Error('Method not implemented.');
   }
   static findOne(arg0: { where: { domain: string; }; }): Domain | PromiseLike<Domain | null> | null {
      throw new Error('Method not implemented.');
   }
   @PrimaryKey
   @Column({ type: DataType.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true })
   ID!: number;

   @Unique
   @Column({ type: DataType.STRING, allowNull: false, defaultValue: true, unique: true })
   domain!: string;

   @Unique
   @Column({ type: DataType.STRING, allowNull: false, defaultValue: true, unique: true })
   slug!: string;

   @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 0 })
   keywordCount!: number;

   @Column({ type: DataType.STRING, allowNull: true })
   lastUpdated!: string;

   @Column({ type: DataType.STRING, allowNull: true })
   added!: string;

   @Column({ type: DataType.STRING, allowNull: true, defaultValue: JSON.stringify([]) })
   tags!: string;

   @Column({ type: DataType.BOOLEAN, allowNull: true, defaultValue: true })
   notification!: boolean;

   @Column({ type: DataType.STRING, allowNull: true, defaultValue: 'daily' })
   notification_interval!: string;

   @Column({ type: DataType.STRING, allowNull: true, defaultValue: '' })
   notification_emails!: string;

   @Column({ type: DataType.STRING, allowNull: true })
   search_console!: string;
}

export default Domain;
