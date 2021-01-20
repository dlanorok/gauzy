import { ThemeModule } from '../../../@theme/theme.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NbCardModule, NbButtonModule, NbIconModule } from '@nebular/theme';
import { UserMutationComponent } from './user-mutation.component';
import { UserFormsModule } from '../forms/user-forms.module';
import { UsersService } from '../../../@core/services';
import { TranslaterModule } from '../../translater/translater.module';

@NgModule({
	imports: [
		ThemeModule,
		FormsModule,
		NbCardModule,
		UserFormsModule,
		NbButtonModule,
		NbIconModule,
		TranslaterModule
	],
	exports: [UserMutationComponent],
	declarations: [UserMutationComponent],
	entryComponents: [UserMutationComponent],
	providers: [UsersService]
})
export class UserMutationModule {}
