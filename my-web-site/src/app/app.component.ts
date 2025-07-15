import { Component } from '@angular/core';
import { MiscellaneousExampleComponent } from "src/component-library/miscellaneous-example/miscellaneous-example.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    standalone: true,
    imports: [MiscellaneousExampleComponent],
})
export class AppComponent {
    title = 'my-angular-app';
}