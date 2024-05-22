import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountingEntryService } from '../../../service/accounting-entry.service';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { Observable } from 'rxjs';

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
    NzSelectModule
  ]
})
export class AccountingEntryPageComponent implements OnInit {
  incomeForm!: FormGroup;
  expenseForm!: FormGroup;
  incomeFields: any[] = [];
  expenseFields: any[] = [];
  incomeCategories$: Observable<any[]>;
  expenseCategories$: Observable<any[]>;
  accounts$: Observable<any[]>;

  constructor(
    private fb: FormBuilder,
    private accountingEntryService: AccountingEntryService
  ) {
    this.incomeCategories$ = this.accountingEntryService.incomeCategories$;
    this.expenseCategories$ = this.accountingEntryService.expenseCategories$;
    this.accounts$ = this.accountingEntryService.accounts$;
  }

  ngOnInit(): void {
    this.incomeFields = this.getIncomeFields();
    this.expenseFields = this.getExpenseFields();

    this.incomeForm = this.fb.group({
      entries: this.fb.array([this.createDynamicForm(this.incomeFields)])
    });

    this.expenseForm = this.fb.group({
      entries: this.fb.array([this.createDynamicForm(this.expenseFields)])
    });

    this.accountingEntryService.loadIncomeCategories();
    this.accountingEntryService.loadExpenseCategories();
    this.accountingEntryService.loadAccounts();
  }

  getIncomeFields(): any[] {
    return [
      { name: 'projectName', label: '项目名称', required: true },
      { name: 'incomeCategory', label: '收入类别', required: true, type: 'select', options$: this.incomeCategories$ },
      { name: 'incomeItem', label: '收入分项', required: true, type: 'select', options: [] },
      { name: 'incomeAmount', label: '收入金额', required: true },
      { name: 'incomeAccount', label: '收入账户', required: true, type: 'select', options$: this.accounts$ },
      { name: 'incomeDate', label: '收入时间', required: true },
      { name: 'incomePayer', label: '收入付款方', required: true },
      { name: 'incomeNote', label: '备注', required: false }
    ];
  }

  getExpenseFields(): any[] {
    return [
      { name: 'projectName', label: '项目名称', required: true },
      { name: 'expenseCategory', label: '支出类别', required: true, type: 'select', options$: this.expenseCategories$ },
      { name: 'expenseItem', label: '支出分项', required: true, type: 'select', options: [] },
      { name: 'expenseAmount', label: '支出金额', required: true },
      { name: 'expenseAccount', label: '支出账户', required: true, type: 'select', options$: this.accounts$ },
      { name: 'expenseDate', label: '支出时间', required: true },
      { name: 'expensePayer', label: '支出付款方', required: true },
      { name: 'expenseNote', label: '备注', required: false }
    ];
  }

  createDynamicForm(fields: any[]): FormGroup {
    const group: any = {};
    fields.forEach(field => {
      group[field.name] = ['', field.required ? Validators.required : null];
    });
    return this.fb.group(group);
  }

  get incomeEntries(): FormArray {
    return this.incomeForm.get('entries') as FormArray;
  }

  get expenseEntries(): FormArray {
    return this.expenseForm.get('entries') as FormArray;
  }

  addIncomeEntry(): void {
    this.incomeEntries.push(this.createDynamicForm(this.incomeFields));
  }

  removeIncomeEntry(index: number): void {
    this.incomeEntries.removeAt(index);
  }

  addExpenseEntry(): void {
    this.expenseEntries.push(this.createDynamicForm(this.expenseFields));
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
