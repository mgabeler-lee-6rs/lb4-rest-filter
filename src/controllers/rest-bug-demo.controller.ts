import { repository } from "@loopback/repository";
import { MyRestRepository } from "../repositories";
import { post } from "@loopback/rest";
import { MyEntity } from "../models";

// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';


export class RestBugDemoController {
  constructor(
    @repository(MyRestRepository)
    public myRestRepository: MyRestRepository
  ) { }

  /**
   * This end point _should_ return only entities whose description starts with "Good",
   * but because of the bug, it will return ALL of them.
   */
  @post('/rest-bug-demo', {
    responses: {
      '200': {
        description: 'Array of MyEntity model instances',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': MyEntity } },
          },
        },
      },
    },
  })
  async demo(): Promise<MyEntity[]> {
    return await this.myRestRepository.find({ where: { description: { like: 'Good%' } } });
  }
}
