import { ValidationErrors, AbstractControl } from '@angular/forms';


export class ConfirmPasswordValidators {

    static confirmMatch(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            // example of asynchronous operation
            setTimeout(() => {
                if (control.value !== 'abc') {
                    resolve({ confirmMatch: true });
                } else {
                    resolve(null);
                }
            }, 2000);

        });
    }


}
