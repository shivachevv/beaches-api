import { LoginResponse } from './auth-service';

export interface BaseServiceInterface<Model, Payload> {
  get(): Promise<Model[]>;
  getById(id: string): Promise<Model>;
  create(payload: Payload): Promise<Model | undefined | LoginResponse>;
  update(id: string, payload: Partial<Payload>): Promise<Model>;
  delete(id: string): Promise<Model | null>;
}
