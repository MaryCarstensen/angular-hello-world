import { ValidationErrors, AbstractControl } from '@angular/forms';


export class OldPasswordValidators {

    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        // no space in user name
        if ((control.value as string).indexOf(' ') >= 0) {
            return {cannotContainSpace: true };
        }
        return null;

            // this is an example of how to do another custom validator, using a complex object to show details to the client
            // return { minlength: {
            //     requiredLength: 10,
            //     actualLength: control.value.length
            // }

    }
    static matchingOldValue(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            // example of asynchronous operation
            setTimeout(() => {
                if (control.value !== 'Mosh') {
                    resolve({ matchingOldValue: true });
                } else {
                    resolve(null);
                }
            }, 2000);

        });
    }

}
