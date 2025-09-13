import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  DeveloperRegistrationComponent
} from './greetings/presentation/components/developer-registration/developer-registration.component';
import {
  DeveloperGreetingComponent
} from './greetings/presentation/components/developer-greeting/developer-greeting.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DeveloperRegistrationComponent, DeveloperGreetingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hello-angng g clular-developer';
  public firstName: string = '';
  public lastName: string = '';

  public updateRegisteredDeveloperInfo(developer:{firstName: string; lastName: string }): void {
    this.firstName = developer.firstName;
    this.lastName = developer.lastName;
  }

  public resetRegisteredDeveloperInfo() {
    this.firstName = '';
    this.lastName = '';
  }
}
