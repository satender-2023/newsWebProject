import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-search',
  templateUrl: './filter-search.component.html',
  styleUrls: ['./filter-search.component.css']
})
export class FilterSearchComponent implements OnInit {
  searchQuery: string | undefined;
  filteredHeroes: any[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  Heroes = [
    { name: 'Satender', age: 6 },
    { name: 'Amit', age: 21 },
    { name: 'Anil', age: 13 },
    { name: 'Prince', age: 45 },
    { name: 'Yogesh', age: 28 }
  ];

  filterHeroes() {
    const query = this.searchQuery ?? ''; // Use empty string if searchQuery is undefined
    this.filteredHeroes = this.Heroes.filter(hero => hero.name.toLowerCase().includes(query.toLowerCase()));
  }
}
