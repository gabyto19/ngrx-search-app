import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { searchValues } from '../store/actions/search.actions';
import { selectSearchResults, selectSearchError } from '../store/selectors/search.selectors';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  value1: string = '';
  value2: string = ''; // Changed to string
  results$: Observable<{ value: string, percentage: number }[]>;
  error$: Observable<any>;

  constructor(private store: Store) {
    this.results$ = this.store.select(selectSearchResults);
    this.error$ = this.store.select(selectSearchError);
  }

  onSearch() {
    const value2Array = this.value2.split(',').map(v => v.trim()); // Convert string to array
    this.store.dispatch(searchValues({ value1: this.value1, value2: value2Array }));
  }
}
