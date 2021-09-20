import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FooBarQuixService } from '../foo-bar-quix.service';
import { Result } from '../model/result';

@Component({
  selector: 'app-foo-bar-quix-form',
  templateUrl: './foo-bar-quix-form.component.html',
})
export class FooBarQuixFormComponent implements OnInit {
  convertNumberForm: FormGroup;
  numberRegEx = /\-?\d*\.?\d{1,2}/;
  submitted = false;
  results : String[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private fooBarQuixService: FooBarQuixService
  ) {}

  ngOnInit(): void {
    this.convertNumberForm = this.formBuilder.group({
      numberToConvert: [
        '',
        [Validators.required, Validators.pattern(this.numberRegEx)],
      ],
    });
  }

  get f() {
    return this.convertNumberForm.controls;
  }

  submitNumber(): void {
    this.submitted = true;

    // stop here if form is invalid
    if (this.convertNumberForm.invalid) {
      return;
    }

    var numberToConvert : Number = this.convertNumberForm.controls['numberToConvert'].value;

    this.fooBarQuixService.getConvertedNumberResult(numberToConvert).subscribe(
      (response: Result) => {
        console.log(response);
        this.results.push(numberToConvert+ " and the result is "+ response.result);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
