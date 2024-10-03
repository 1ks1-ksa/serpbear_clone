/*import { Table, Model, Column, DataType, PrimaryKey} from 'sequelize-typescript';

@Table({
  timestamps: true,
  tableName: 'keyword'
})*/

import { Table, Model, Column, DataType, PrimaryKey, TableOptions } from 'sequelize-typescript';

@Table(<TableOptions<Model<any, any>>>{
  tableName: 'keyword',
  timestamps: true,
})

class Keyword extends Model {
   static bulkCreate(keywordsToAdd: any): Keyword[] | PromiseLike<Keyword[]> {
      throw new Error('Method not implemented.');
   }
   static findOne(arg0: { where: { ID: number; }; }): Keyword | PromiseLike<Keyword | null> | null {
      throw new Error('Method not implemented.');
   }
   static destroy(arg0: { where: { domain: string | string[] | undefined; }; }): number | PromiseLike<number> {
      throw new Error('Method not implemented.');
   }
   static update(arg0: { volume: number; }, arg1: { where: { ID: number; }; }) {
      throw new Error('Method not implemented.');
   }
   static findAll(arg0: { where: { domain: string; }; }): Keyword[] | PromiseLike<Keyword[]> {
      throw new Error('Method not implemented.');
   }
   [x: string]: any;
   @PrimaryKey
   @Column({ type: DataType.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true })
   ID!: number;

   @Column({ type: DataType.STRING, allowNull: false })
   keyword!: string;

   @Column({ type: DataType.STRING, allowNull: true, defaultValue: 'desktop' })
   device!: string;

   @Column({ type: DataType.STRING, allowNull: true, defaultValue: 'US' })
   country!: string;

   @Column({ type: DataType.STRING, allowNull: true, defaultValue: '' })
   city!: string;

   @Column({ type: DataType.STRING, allowNull: true, defaultValue: '' })
   latlong!: string;

   @Column({ type: DataType.STRING, allowNull: false, defaultValue: '{}' })
   domain!: string;

   // @ForeignKey(() => Domain)
   // @Column({ allowNull: false })
   // domainID!: number;

   // @BelongsTo(() => Domain)
   // domain!: Domain;

   @Column({ type: DataType.STRING, allowNull: true })
   lastUpdated!: string;

   @Column({ type: DataType.STRING, allowNull: true })
   added!: string;

   @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 0 })
   position!: number;

   @Column({ type: DataType.STRING, allowNull: true, defaultValue: JSON.stringify([]) })
   history!: string;

   @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 0 })
   volume!: number;

   @Column({ type: DataType.STRING, allowNull: true, defaultValue: JSON.stringify([]) })
   url!: string;

   @Column({ type: DataType.STRING, allowNull: true, defaultValue: JSON.stringify([]) })
   tags!: string;

   @Column({ type: DataType.STRING, allowNull: true, defaultValue: JSON.stringify([]) })
   lastResult!: string;

   @Column({ type: DataType.BOOLEAN, allowNull: true, defaultValue: true })
   sticky!: boolean;

   @Column({ type: DataType.BOOLEAN, allowNull: true, defaultValue: false })
   updating!: boolean;

   @Column({ type: DataType.STRING, allowNull: true, defaultValue: 'false' })
   lastUpdateError!: string;

   @Column({ type: DataType.STRING, allowNull: true })
   settings!: string;
}

export default Keyword;
