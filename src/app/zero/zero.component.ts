import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-zero',
  templateUrl: './zero.component.html',
  styleUrls: ['./zero.component.css']
})
export class ZeroComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }
// Material Stepper
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      // CRCs Group
      FUE: ['', Validators.required],
      CON: ['', Validators.required],
      DES: ['', Validators.required],
      INT: ['', Validators.required],
      SAB: ['', Validators.required],
      CAR: ['', Validators.required],
      ENE: ['', Validators.required],
      MOR: ['', Validators.required],
      MOV: ['', Validators.required],
      VAN: ['', Validators.required],
      LIV: ['', Validators.required],
      ACE: ['', Validators.required],
      // LINs Group
      LINest: ['', Validators.required],
      LINfam: ['', Validators.required],
      LINocu: ['', Validators.required],
      LINrec: ['', Validators.required],
      // SENs Group
      Vista: ['', Validators.required],
      Oido: ['', Validators.required],
      Olfato: ['', Validators.required],
      Gusto: ['', Validators.required],
      Tacto: ['', Validators.required],
      // Final firstForm Group
      ALT: ['', Validators.required],
      PES: ['', Validators.required],
      FAMpos: ['', Validators.required],
      FAMneg: ['', Validators.required],

    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
  submit(){
    console.log(this.firstFormGroup.value);
    console.log(this.secondFormGroup.value);
}
// Material Expansion Panel  
  step = 0;
  setStep(index: number) {
    this.step = index;
  }
  nextStep() {
    this.step++;
  }
  prevStep() {
    this.step--;
  }
}

