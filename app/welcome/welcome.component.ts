
import {Component} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'bs-welcome',
    templateUrl: '../../app/welcome/welcome.component.html',
    styleUrls:['../../app/welcome/welcome.component.css']
})

export class WelcomeComponent {
    pageTitle: string = "Welcome";
}