import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormBuilder } from '@ngneat/reactive-forms';
import { UserService } from 'src/app/services/user.service';
import { StateService } from 'src/app/state/postnl-poc-state.service';
import { environment } from 'src/environments/environment';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  readonly form = this._fb.group({
    username: this._fb.control('', { validators: [Validators.email] }),
    password: '',
  });

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _state: StateService,
    private readonly _userService: UserService,
    private readonly _router: Router
  ) {
    if (!environment.production) {
      this.form.setValue({
        username: 'stefan.vanteinde@postnl.nl',
        password: '7335',
      });
    }
  }

  submit(): void {
    this.form.controls.password.removeError('invalidCombination');
    const value = this.form.value;
    this._userService
      .attemptLogin(value.username, value.password)
      .subscribe((userOrNull) => {
        if (userOrNull === null) {
          this.form.controls.password.setErrors({ invalidCombination: true });
          return;
        }

        this._state.updateState({ user: userOrNull });
        this._router.navigate(['select-depot']);
      });
  }
}
