import { Component, OnInit } from '@angular/core';
import { setTimeout } from 'timers';

@Component({
  // selector: '[app-servers]',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = "No server was created!";
  serverName="";
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000)
  }

  ngOnInit() {
  }

  onCreateServer(){
    console.log();
  this.serverCreationStatus = "Server created!!!"
  document.getElementsByTagName("button")[0].className = "red"
}

onUpdateServerName(event: Event){
this.serverName = (<HTMLInputElement>event.target).value;
}

}
