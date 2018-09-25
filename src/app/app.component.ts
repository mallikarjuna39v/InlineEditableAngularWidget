import { Component,OnInit } from '@angular/core';
import {EnvironmentsService } from "./_services/environments.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'MallikarjunaTableWidget';
  headers:Array<String> = 
  [
    "firtsname",
    "lastname",
    "email"
  ]
  content:Array<Object> =[
    {
    
     "firtsname":"john",
     "lastname":"Doe",
     "email":"john@example.com"
    },
    {
    
     "firtsname":"Mary",
     "lastname":"Moe",
     "email":"mary@example.com"
    },{
     
     "firtsname":"July",
     "lastname":"Dooley",
     "email":"july@example.com"
    },
    {
    
     "firtsname":"john",
     "lastname":"Doe",
     "email":"john@example.com"
    },
    {
    
     "firtsname":"Mary",
     "lastname":"Moe",
     "email":"mary@example.com"
    },{
     
     "firtsname":"July",
     "lastname":"Dooley",
     "email":"july@example.com"
    },
    {
     
     "firtsname":"john",
     "lastname":"Doe",
     "email":"john@example.com"
    },
    {
   
     "firtsname":"Mary",
     "lastname":"Moe",
     "email":"mary@example.com"
    },{
  
     "firtsname":"July",
     "lastname":"Dooley",
     "email":"july@example.com"
    }
];
  constructor(private environmentService: EnvironmentsService){

  }
  ngOnInit(){
    this.environmentService.getEnvironments().subscribe(
      function(data){
        this.content = data;
      }
    )
  }
}
