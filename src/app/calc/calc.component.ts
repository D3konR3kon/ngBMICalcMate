import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {
  public weight! : number;
  public height! : number;
  public results! : number;
  public n! : string;
  
  constructor() { }

  ngOnInit(): void {
  }
   calc(): void{
    this.results = this.weight / (this.height * this.height)*10000;
    this.n = this.results.toFixed(2) ; 
  }

  clear(): void{
    this.n = "";
  }
   
}
