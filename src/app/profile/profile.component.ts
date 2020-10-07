import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Items } from '../help';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  items: Items[] = []
  searchText1
  email
  mySubscription: any;
  foods: any = [];
  electronics: any = [];
  homemade: any = [];
  userType
  userisSeller: boolean = false
  constructor(private commonService: CommonService, private router: Router,) {
    // window.location.reload();
    // this.router.routeReuseStrategy.shouldReuseRoute = function () {
    //   return false;
    // };
    // this.mySubscription = this.router.events.subscribe((event) => {
    //   if (event instanceof NavigationEnd) {
    //     // Trick the Router into believing it's last link wasn't previously loaded
    //     this.router.navigated = false;
    //   }
    // });
  }

  ngOnInit(): void {
    this.email = localStorage.getItem("email");
    this.userType = localStorage.getItem("userType");
    if (this.userType = localStorage.getItem("userType") == "seller") {
      this.userisSeller = true;
    }
    this.commonService.getItems().subscribe((data: Items[]) => {
      this.items = data;

    })




    this.foods = [
      { label: 'Rice', value: 'rice' },
      { label: 'Wheate', value: 'wheate' },
      { label: 'Oil', value: 'oil' },
      { label: 'Surf', value: 'surf' },
      { label: 'Sugar', value: 'sugar' },
      { label: 'Salt', value: 'salt' },
      { label: 'Rice', value: 'rice' },
      { label: 'Wheate', value: 'wheate' },
      { label: 'Oil', value: 'oil' },
      { label: 'Surf', value: 'surf' },
      { label: 'Sugar', value: 'sugar' },
      { label: 'Salt', value: 'salt' },
      { label: 'Rice', value: 'rice' },
      { label: 'Wheate', value: 'wheate' },
      { label: 'Oil', value: 'oil' },
      { label: 'Surf', value: 'surf' },
      { label: 'Sugar', value: 'sugar' },
      { label: 'Salt', value: 'salt' }
    ]
    this.electronics = [
      { label: 'Mobile', value: 'mobile' },
      { label: 'Wheate', value: 'wheate' },
      { label: 'Oil', value: 'oil' },
      { label: 'Surf', value: 'surf' },
      { label: 'Sugar', value: 'sugar' },
      { label: 'Salt', value: 'salt' },
      { label: 'Fiat', value: 'fiat' },
      { label: 'Renault', value: 'renault' },
      { label: 'BMW', value: 'bmw' },
      { label: 'Volvo', value: 'volvo' },
      { label: 'Honda', value: 'honda' },
      { label: 'Salt', value: 'salt' }
    ]
    this.homemade = [
      { label: 'Rice', value: 'rice' },
      { label: 'Wheate', value: 'wheate' },
      { label: 'Oil', value: 'oil' },
      { label: 'Surf', value: 'surf' },
      { label: 'Sugar', value: 'sugar' },
      { label: 'Salt', value: 'salt' },
      { label: 'Rice', value: 'rice' },
      { label: 'Wheate', value: 'wheate' },
      { label: 'Oil', value: 'oil' },
      { label: 'Surf', value: 'surf' },
      { label: 'Sugar', value: 'sugar' },
      { label: 'Salt', value: 'salt' }
    ]
  }
  logout() {
    localStorage.removeItem("email");
    localStorage.removeItem("userType");
    this.router.navigate(['']);

  }
  myCart() {
    this.router.navigate(['/myCart']);
  }
  openMyOrders() {
    this.router.navigate(['/myOrders']);
  }
  filterMy(rk) {
    console.log("Search text = " + rk)
    //  this.commonService.filterData(rk,this.items)

    this.router.navigateByUrl('home', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/search', rk]);
    });
    // this.router.navigate(['SampleComponent', { skipLocationChange: true }]);
    // this.router.navigate(['/search',rk]);

    // let myData = this.items;
    // this.items2 = myData.filter(data => {
    //   return data.brand.toLowerCase().includes(rk.toLowerCase()) || data.color.toLowerCase().includes(rk.toLowerCase())|| data.vin.toLowerCase().includes(rk.toLowerCase());
    // })


  }

  ngOnDestroy() {
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
  }
}
