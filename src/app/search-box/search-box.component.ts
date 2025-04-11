import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-box',
  imports: [FormsModule],
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})

export class SearchBoxComponent {
  search: string = '';

  constructor (
    private router: Router
  ) {}

  onSubmit() {
    if (this.search) {
      this.router.navigate(['proway-computers/produtos'], { queryParams: { desc: this.search }}); 
      return;
    }

    this.router.navigate(['proway-computers/produtos'])
  }
}
