import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
  addCategoryForm!: FormGroup;
  submitted = false;
  
  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.addCategoryForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.addCategoryForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    const category: Category = {
      name: this.addCategoryForm.value.name,
      description: this.addCategoryForm.value.description,
      idCategory: 0
    };

    this.categoryService.addCategory(category).subscribe(
      (data: Category) => {
        console.log('Category added successfully: ', data);
        this.router.navigate(['/category-list']);
      },
      (error: Error) => {
        console.log('Error adding category: ' + error.message);
      }
    );
  }

  onCancel() {
    this.router.navigate(['/category-list']);
  }
}