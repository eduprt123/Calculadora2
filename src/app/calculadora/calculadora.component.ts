import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  form!: FormGroup;

  result: string = '';
  calc: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  takeValue(value: string): void {
    if(this.calc !== '' && this.result !== ''){
      this.clearDisplay();
      this.calc += value;
    }else{
      this.calc += value;
    }
    console.log(this.calc);
  }

  clearDisplay(): void {
    this.calc = '';
    this.result = '';
  }

  takeResults():void{
    this.result = eval(this.calc)
  }


}
