import { ValidationErrors, AbstractControl } from '@angular/forms';


export class NewPasswordValidators {

    static incorrect(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            // example of asynchronous operation
            setTimeout(() => {
                if (control.value === 'Mosh') {
                    resolve({ incorrect: true });
                } else {
                    resolve(null);
                }
            }, 2000);

        });
    }


}