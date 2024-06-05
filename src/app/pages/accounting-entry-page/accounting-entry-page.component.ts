import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountingEntryService } from '../../../service/accounting-entry.service';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { Observable } from 'rxjs';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDatePickerComponent, NzDatePickerModule } from 'ng-zorro-antd/date-picker';

@Component({
  selector: 'app-accounting-entry-page',
  templateUrl: './accounting-entry-page.component.html',
  styleUrls: ['./accounting-entry-page.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzSelectModule,
    NzCardModule,
    NzDatePickerModule
  ]
})
export class AccountingEntryPageComponent implements OnInit {
  incomeForm!: FormGroup;
  expenseForm!: FormGroup;
  incomeCategories: any[] = [];
  expenseCategories: any[] = [];
  accounts: any[] = [];


  constructor(
    private fb: FormBuilder,
    private accountingEntryService: AccountingEntryService
  ) {}

  ngOnInit(): void {
    this.incomeForm = this.fb.group({
      entries: this.fb.array([this.createIncomeForm()])
    });

    this.expenseForm = this.fb.group({
      entries: this.fb.array([this.createExpenseForm()])
    });

    this.accountingEntryService.loadIncomeCategories().subscribe(data => this.incomeCategories = data);
    this.accountingEntryService.loadExpenseCategories().subscribe(data => this.expenseCategories = data);
    this.accountingEntryService.loadAccounts().subscribe(data => this.accounts = data);
  }

  createIncomeForm(): FormGroup {
    return this.fb.group({
      projectName: ['', Validators.required],
      incomeCategory: ['', Validators.required],
      incomeItem: ['', Validators.required],
      incomeAmount: ['', Validators.required],
      incomeAccount: ['', Validators.required],
      incomeDate: ['', Validators.required],
      incomePayer: ['', Validators.required],
      incomeNote: ['']
    });
  }

  createExpenseForm(): FormGroup {
    return this.fb.group({
      projectName: ['', Validators.required],
      expenseCategory: ['', Validators.required],
      expenseItem: ['', Validators.required],
      expenseAmount: ['', Validators.required],
      expenseAccount: ['', Validators.required],
      expenseDate: ['', Validators.required],
      expensePayer: ['', Validators.required],
      expenseNote: ['']
    });
  }

  get incomeEntries(): FormArray {
    return this.incomeForm.get('entries') as FormArray;
  }

  get expenseEntries(): FormArray {
    return this.expenseForm.get('entries') as FormArray;
  }

  addIncomeEntry(): void {
    this.incomeEntries.push(this.createIncomeForm());
  }

  removeIncomeEntry(index: number): void {
    this.incomeEntries.removeAt(index);
  }

  addExpenseEntry(): void {
    this.expenseEntries.push(this.createExpenseForm());
  }

  removeExpenseEntry(index: number): void {
    this.expenseEntries.removeAt(index);
  }

  onSubmitIncome(): void {
    if (this.incomeForm.valid) {
      this.accountingEntryService.submitIncome(this.incomeForm.value).subscribe(response => {
        console.log('Income submitted', response);
      });
    }
  }

  onSubmitExpense(): void {
    if (this.expenseForm.valid) {
      this.accountingEntryService.submitExpense(this.expenseForm.value).subscribe(response => {
        console.log('Expense submitted', response);
      });
    }
  }
}
