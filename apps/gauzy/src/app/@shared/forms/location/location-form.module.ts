import { NgModule } from '@angular/core';
import { LocationFormComponent } from './location-form.component';
import { AgmCoreModule } from '@agm/core';
import { ThemeModule } from '../../../@theme/theme.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
	NbCheckboxModule,
	NbFormFieldModule,
	NbIconModule,
	NbInputModule,
	NbSelectModule
} from '@nebular/theme';
import { CountryModule } from '../../country/country.module';
import { LeafletMapModule } from '../maps/leaflet/leaflet.module';
import { TranslaterModule } from '../../translater/translater.module';

@NgModule({
	imports: [
		ThemeModule,
		FormsModule,
		ReactiveFormsModule,
		NbSelectModule,
		NbInputModule,
		NbCheckboxModule,
		NbFormFieldModule,
		NbIconModule,
		TranslaterModule,
		AgmCoreModule,
		CountryModule,
		LeafletMapModule
	],
	exports: [LocationFormComponent],
	declarations: [LocationFormComponent]
})
export class LocationFormModule {}
