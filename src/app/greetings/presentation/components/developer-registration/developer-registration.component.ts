import {Component, computed, EventEmitter, Output, signal, Signal} from '@angular/core';

@Component({
  selector: 'app-developer-registration',
  imports: [],
  templateUrl: './developer-registration.component.html',
  styleUrl: './developer-registration.component.css'
})
export class DeveloperRegistrationComponent {
  firstName = signal<string>('');
  lastName = signal<string>('');
  isFormValid: Signal<boolean> = computed(() =>
  this.firstName().trim().length >= 2 && this.lastName().trim().length >= 2);

  @Output() public developerRegistered =
    new EventEmitter<{ firstName: string, lastName: string}>();
  @Output() public registrationDeferred =
    new EventEmitter<void>();

  public submitRegistrationRequest(): void {
    if (this.isFormValid())
      this.developerRegistered.emit({firstName: this.firstName(), lastName: this.lastName()});
    this.clearFields();
  }
  public deferRegistration(): void {
    this.clearFields();
    this.registrationDeferred.emit();
  }
  public clearFields(): void {
    this.firstName.set ('');
    this.lastName.set ('');
  }
}
