import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectDepotAndFunctionComponent } from './pages/select-depot-and-function/select-depot-and-function.component';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormComponent } from './components/form/form.component';
import { LoginComponent } from './pages/login/login.component';
import { MatLegacyAutocompleteModule as MatAutocompleteModule } from '@angular/material/legacy-autocomplete';
import { SelectShiftComponent } from './pages/select-shift/select-shift.component';
import { UserStateComponent } from './components/user-state/user-state.component';
@NgModule({
  declarations: [
    AppComponent,
    SelectDepotAndFunctionComponent,
    FormComponent,
    LoginComponent,
    SelectShiftComponent,
    UserStateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatAutocompleteModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
