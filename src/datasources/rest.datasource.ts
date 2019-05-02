import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './rest.datasource.json';

export class RestDataSource extends juggler.DataSource {
  static dataSourceName = 'rest';

  constructor(
    @inject('datasources.config.rest', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
