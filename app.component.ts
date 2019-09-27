import { Component } from '@angular/core';
@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})
export class AppComponent {
   title = 'CALCULATOR';
  public n1: number;
  public n2: number;
  public n3: number;

  add() {
    this.n3 = this.n1 + this.n2; }
  sub() {this.n3 = this.n1 - this.n2;
    }
  div() { this.n3 = this.n1 / this.n2;
    }
  multiply() {this.n3 = this.n1 * this.n2;
     }
}
