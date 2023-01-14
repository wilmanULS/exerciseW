import { Product } from "../entities/product";
import { DatabaseRespository, Id, Query } from "./baseRepository";
import database from "../configs/database";

export class ProductRepository implements DatabaseRespository<Product> {
  async create(
    data: Partial<Product>,
    query?: Query | undefined
  ): Promise<Product> {
    const repository = database.getRepository(Product);
    const product = repository.create(data);
    await repository.save(product);
    return product;
  }
  async list(query?: Query ): Promise<Product[]> {
    const repository = database.getRepository(Product);
    return repository.find();
  }
  async get(id: Id): Promise<Product> {
    const repository = database.getRepository(Product);
    const product = await repository.findOneBy({id: id as any});
    if (!product) throw new Error('Product not found');
    return product;
  }
  async update(id:Id, data: Partial<Product>, query?: Query): Promise<Product> {
    const repository = database.getRepository(Product);
    await repository.update(id, data)
    return this.get(id);
    
  }
  async remove(id: Id, query?: Query): Promise<Product> {
    const repository = database.getRepository(Product);
    const product = await this.get(id);
    await repository.delete(id)
    return product;
  }
}
