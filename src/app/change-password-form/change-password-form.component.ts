import { ConfirmPasswordValidators } from './../common/validators/confirmPassword.validators';
import { OldPasswordValidators } from './../common/validators/oldPassword.validators';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.css']
})
export class ChangePasswordFormComponent {

  form = new FormGroup({
    // tslint:disable-next-line:max-line-length
    oldPassword: new FormControl('',
      [Validators.required, Validators.minLength(3), OldPasswordValidators.cannotContainSpace],
      [OldPasswordValidators.matchingOldValue]
    ),
    newPassword: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required, ConfirmPasswordValidators.confirmMatch)
  });

  get oldPassword() {
    return this.form.get('oldPassword');
  }
  get newPassword() {
    return this.form.get('newPassword');
  }
  get confirmPassword() {
    return this.form.get('confirmPassword');
  }
}
