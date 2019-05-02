import { Entity, model, property } from '@loopback/repository';

@model({
  settings: {
    resourceName: 'my-entities',
  },
})
export class MyEntity extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
    defaultFn: 'uuidv4',
  })
  id: string;

  @property({
    type: 'string',
    required: true,
  })
  description: string;


  constructor(data?: Partial<MyEntity>) {
    super(data);
  }
}
