import { Repository } from 'typeorm';
import { CrudService, IPagination } from '../core';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductService extends CrudService<Product> {
	constructor(
		@InjectRepository(Product)
		private readonly productRepository: Repository<Product>
	) {
		super(productRepository);
	}

	async findAllProducts(langCode?: string): Promise<IPagination<Product>> {
		const total = await this.productRepository.count();
		const items = await this.productRepository.find({
			relations: ['category', 'type', 'options', 'variants', 'tags']
		});

		if (langCode) {
			items.forEach((product) => {
				product.type = product.type.translate(langCode);
			});
		}

		return { items, total };
	}

	async saveProduct(productRequest: Product): Promise<Product> {
		return await this.productRepository.save(productRequest);
	}
}
