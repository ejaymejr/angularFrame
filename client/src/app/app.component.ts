import { Component } from '@angular/core';
import { JsonService } from './components/service/json.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers: [JsonService]
})
export class AppComponent  { 

    constructor(_jsonService : JsonService){

    }
    
 }
