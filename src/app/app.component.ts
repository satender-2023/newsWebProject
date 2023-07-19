import { Component } from '@angular/core';
import { UpdatesComponent } from './entertainment/updates/updates.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projectNews';
   searchQuery: string | undefined;
  filteredHeroes: any[] | undefined;
  Heroes = [
    { name: 'News247 Bharat', language: "Hindi" },
    { name: 'News247 India', language: "Englsh" },
    { name: 'News247 Majha', language: "Marathi" },
    { name: 'News247 Telugu', language: "Telugu" },
    { name: 'News247 Gujarati', language: "Gujarati" },
    { name: 'News247 Kannada', language: "Kannad" },
    { name: 'News247 Bangla', language: "Bengali" },
    { name: 'News247 Sanjha', language: "Punjabi" },
    { name: 'News247 Business', language: "English" }
  ];

  constructor() { }

  ngOnInit(): void {
 
    this.filterHeroes();
  }


  filterHeroes() {
 
     const query = this.searchQuery ?? ''; // Use empty string if searchQuery is undefined
    this.filteredHeroes = this.Heroes.filter(hero => hero.name.toLowerCase().includes(query.toLowerCase())|| hero.language.toLowerCase().includes(query.toLowerCase())); 
  }

  // mapWithNewTitle() {
  //   let queryNew ='';
  //   if(this.searchQuery) {
  //       queryNew = this.searchQuery;
    // }
  //   this.filteredHeroes = this.Heroes.map(data=>{
  //      if(data.name.toLowerCase().includes(queryNew.toLowerCase())) {
  //        return 'my new text';
  //      }
  //      return 'not found;'
  //   })
  //   console.log('transformed data', this.filteredHeroes);
  // }

  // testDebug() {
  //   this.filteredHeroes = this.Heroes.map(data => {
  //       if(data.name.toLowerCase().includes('News247 Bharat'.toLowerCase())) {
  //          return {
  //           name: 'News247 world',
  //           language: 'English'
  //          }
  //       }
  //       return {
  //         name: data.name,
  //         language: data.language
  //       }
  //   })
  // }
}
