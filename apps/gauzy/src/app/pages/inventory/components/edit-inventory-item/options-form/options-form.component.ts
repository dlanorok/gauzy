import { Component, OnInit } from '@angular/core';
import { IProductOption } from '@gauzy/contracts';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { InventoryStore } from 'apps/gauzy/src/app/@core/services/inventory-store.service';

export interface OptionCreateInput {
	name: string;
	code: string;
}

@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'ngx-options-form',
	templateUrl: './options-form.component.html',
	styleUrls: ['./options-form.component.scss']
})
export class OptionsFormComponent implements OnInit {
	editOption: IProductOption;
	activeOption: IProductOption;
	activeOptionName: string;
	optionMode = 'create';

	options: IProductOption[] = [];

	constructor(private inventoryStore: InventoryStore) {}

	ngOnInit(): void {
		this.resetOptionForm();

		this.inventoryStore.activeProduct$
			.pipe(untilDestroyed(this))
			.subscribe((activeProduct) => {
				this.options = activeProduct.options;
			});
	}

	onSaveOption() {
		if (!(this.activeOption.name && this.activeOption.code)) return;

		if (this.optionMode == 'create') {
			this.inventoryStore.createOption(this.activeOption);
		} else {
			this.inventoryStore.updateOption(
				this.editOption,
				this.activeOption
			);
		}

		this.resetOptionForm();
	}

	onRemoveOption(optionInput: IProductOption) {
		if (!optionInput) return;

		this.options = this.options.filter(
			(option) => option.name !== optionInput.name
		);

		this.inventoryStore.deleteOption(optionInput);
		this.resetOptionForm();
	}

	resetOptionForm() {
		this.activeOption = { name: '', code: '' };
		this.activeOptionName = '';
		this.optionMode = 'create';
	}

	onEditOption(option: IProductOption) {
		this.editOption = option;
		this.activeOption = option;
		this.optionMode = 'edit';
	}
}
