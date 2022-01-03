import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { financieraService } from './financiera/services/financiera.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
 
     

  constructor(
   
    public financieraService: financieraService 
  
    ) {}


  ngOnInit(): void {
    
    
    }

    


  

}
