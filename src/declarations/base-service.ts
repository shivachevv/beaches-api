import { Request, Response } from 'express';

export interface BaseServiceInterface<Model, Payload> {
  get(): Promise<Model[]>;
  getById(id: string): Promise<Model>;
  create(payload: Payload): Promise<Model | undefined>;
  update(id: string, payload: Partial<Payload>): Promise<Model>;
  delete(id: string): Promise<Model | null>;
}
