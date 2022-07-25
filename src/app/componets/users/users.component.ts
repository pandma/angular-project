import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public name:string
  public email:string
  public username:string

  constructor(  ) { 
    this.name='pablo'
    this.email='pablo@pablo.com'
    this.username='pandma'
  }

  ngOnInit(): void {
  }

}
