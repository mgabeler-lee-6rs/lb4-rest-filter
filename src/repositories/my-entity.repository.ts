import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {MyEntity} from '../models';
import {MemoryDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class MyEntityRepository extends DefaultCrudRepository<
  MyEntity,
  typeof MyEntity.prototype.id
> {
  constructor(
    @inject('datasources.memory') dataSource: MemoryDataSource,
  ) {
    super(MyEntity, dataSource);
  }
}
