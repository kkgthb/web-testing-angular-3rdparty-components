import { Component } from '@angular/core';

@Component({
    selector: 'miscellaneous-example',
    templateUrl: './miscellaneous-example.component.html',
    standalone: true,
})
export class MiscellaneousExampleComponent {
    title = 'Standalone Component Example';
    subtitle = 'Yay';
}