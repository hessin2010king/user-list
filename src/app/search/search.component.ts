// search.component.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule], // Add FormsModule here
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchTerm: string = '';

  @Output() search = new EventEmitter<string>(); // Define EventEmitter

  onSearch(): void {
    this.search.emit(this.searchTerm); // Emit the search term
  }

  resetSearch(): void {
    this.searchTerm = '';
    this.onSearch(); // Optionally emit an empty search term
  }
}
