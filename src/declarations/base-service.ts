import { LoginResponse } from './auth-service';
import { Request } from 'express';

export interface BaseServiceInterface<Model, Payload> {
  get(query: Record<string, any> | undefined): Promise<Model[]>;
  getById(id: string): Promise<Model>;
  create(payload: Payload): Promise<Model | undefined | LoginResponse>;
  update(id: string, payload: Partial<Payload>): Promise<Model>;
  delete(id: string): Promise<Model | null>;
}
