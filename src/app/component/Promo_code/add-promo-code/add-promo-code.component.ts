import { Component, OnInit } from '@angular/core';
import { CodePromo } from 'src/app/models/codePromo';
import { CodePromoService } from 'src/app/services/code-promo.service';

@Component({
  selector: 'app-add-promo-code',
  templateUrl: './add-promo-code.component.html',
  styleUrls: ['./add-promo-code.component.scss']
})
export class AddPromoCodeComponent implements OnInit {

  codePromo: CodePromo = new CodePromo();

  constructor(private codePromoService: CodePromoService) {}

  ngOnInit() {
  }

  onSubmit() {
    this.codePromoService.createCodePromo(this.codePromo)
      .subscribe(codePromo => {
        console.log('Code promo created successfully!');
      }, error => {
        console.error('Error creating code promo:', error);
      });
  }

}