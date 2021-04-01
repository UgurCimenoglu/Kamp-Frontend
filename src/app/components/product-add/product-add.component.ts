import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrComponentlessModule, ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productAddForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private productService: ProductService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.createProductAddForm();
  }
  createProductAddForm() {
    this.productAddForm = this.formBuilder.group({
      productName: ["", Validators.required],
      unitPrice: ["", Validators.required],
      unitsInStock: ["", Validators.required],
      categoryId: ["", Validators.required]
    })
  }

  add() {

    if (this.productAddForm.valid) {
      let product = Object.assign({}, this.productAddForm.value);
      this.productService.add(product).subscribe(response => {
        console.log(response);
        this.toastr.success("Ürün Eklendi", "Başarılı")
      }, responseError => {
        console.log(responseError);
        if (responseError.error.Errors.length>0) {
         for (let i = 0; i < responseError.error.Errors.length; i++) {
           this.toastr.error(responseError.error.Errors[i].ErrorMessage,"Hata!")
           
         }
        }
      })
    } else {
      this.toastr.error("Form Bilgileri Eksik!", "Hata");
    }

  }
}
