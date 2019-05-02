import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { MyEntity } from '../models';
import { RestDataSource } from '../datasources';
import { inject } from '@loopback/core';

export class MyRestRepository extends DefaultCrudRepository<
  MyEntity,
  typeof MyEntity.prototype.id
  > {
  constructor(
    @inject('datasources.rest') dataSource: RestDataSource,
  ) {
    super(MyEntity, dataSource);
  }
}
