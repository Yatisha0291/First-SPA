import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appname: string = "First angular app";
  programmer: string = "john";
  technologies: string[] = ["java", "html", "css", "javascript", "typescript", "angular"];

  titles: string[] = ["Softwares", "System Requirements", "Technologies"];

  information: string[][] = [["Oracle Database", "IntelliJ IDE", "MySql", "Chrome Browser"],
  ["16Gb RAM", "120GB Disk Space"],
  ["Oracle", "Google"]];

  item:string="Nothing";

  process(data){
    this.item=data;
  }
}
