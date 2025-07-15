import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
    selector: 'miscellaneous-example',
    templateUrl: './miscellaneous-example.component.html',
    standalone: true,
    imports: [
        MatButtonModule,
        MatInputModule
    ],
})
export class MiscellaneousExampleComponent {
    title = 'Standalone Component Example';
    subtitle = 'Yay';
}