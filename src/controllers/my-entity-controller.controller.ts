import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {MyEntity} from '../models';
import {MyEntityRepository} from '../repositories';

export class MyEntityControllerController {
  constructor(
    @repository(MyEntityRepository)
    public myEntityRepository : MyEntityRepository,
  ) {}

  @post('/my-entities', {
    responses: {
      '200': {
        description: 'MyEntity model instance',
        content: {'application/json': {schema: {'x-ts-type': MyEntity}}},
      },
    },
  })
  async create(@requestBody() myEntity: MyEntity): Promise<MyEntity> {
    return await this.myEntityRepository.create(myEntity);
  }

  @get('/my-entities/count', {
    responses: {
      '200': {
        description: 'MyEntity model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(MyEntity)) where?: Where,
  ): Promise<Count> {
    return await this.myEntityRepository.count(where);
  }

  @get('/my-entities', {
    responses: {
      '200': {
        description: 'Array of MyEntity model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': MyEntity}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(MyEntity)) filter?: Filter,
  ): Promise<MyEntity[]> {
    return await this.myEntityRepository.find(filter);
  }

  @patch('/my-entities', {
    responses: {
      '200': {
        description: 'MyEntity PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() myEntity: MyEntity,
    @param.query.object('where', getWhereSchemaFor(MyEntity)) where?: Where,
  ): Promise<Count> {
    return await this.myEntityRepository.updateAll(myEntity, where);
  }

  @get('/my-entities/{id}', {
    responses: {
      '200': {
        description: 'MyEntity model instance',
        content: {'application/json': {schema: {'x-ts-type': MyEntity}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<MyEntity> {
    return await this.myEntityRepository.findById(id);
  }

  @patch('/my-entities/{id}', {
    responses: {
      '204': {
        description: 'MyEntity PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() myEntity: MyEntity,
  ): Promise<void> {
    await this.myEntityRepository.updateById(id, myEntity);
  }

  @put('/my-entities/{id}', {
    responses: {
      '204': {
        description: 'MyEntity PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() myEntity: MyEntity,
  ): Promise<void> {
    await this.myEntityRepository.replaceById(id, myEntity);
  }

  @del('/my-entities/{id}', {
    responses: {
      '204': {
        description: 'MyEntity DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.myEntityRepository.deleteById(id);
  }
}
