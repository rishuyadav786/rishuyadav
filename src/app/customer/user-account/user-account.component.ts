import { Component, OnInit } from '@angular/core';
import { Help, Items } from '../../help'
import { CommonService } from '../../common.service'
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {
  user: Help = new Help()
  fpuser: Help = new Help()
  user1: Help = new Help()

  users: Help[];
  sellers: Help[];
allStates
  userEmail
  constructor(private commonService: CommonService, private router: Router, private http: HttpClient) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.userEmail = localStorage.getItem("email")
this.allStates=[{label:"West Bengal", value:"West Bengal"},
{label:"Utter Pradesh", value:"Utter Pradesh"},
{label:"Bihar", value:"Bihar"},
{label:"Karnatka", value:"Karnatka"},
{label:"West Bengal", value:"West Bengal"},
{label:"West Bengal", value:"West Bengal"},
{label:"West Bengal", value:"West Bengal"},
{label:"West Bengal", value:"West Bengal"}
]
    this.commonService.getAll().subscribe((data: Help[]) => {
      this.users = data;
      this.user = data.find(e => e.email == this.userEmail);
      console.log("user Data" + JSON.stringify(this.user))
    })
  }
  updateUser(data){
    
    this.commonService.updateUsers(this.user)
    // this.ngOnInit();
  }

}
