import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { HousesAction } from '../actions';
import { HousesSelector } from '../selectors';
import { Observable, map } from 'rxjs';
import { HeaderTable, HouseListInfo } from '../../shared/interfaces';

@Injectable()
export class HousesFace {
  store = inject(Store);

  isLoading$ = this.store.select(HousesSelector.isLoading);
  houseModelList$ = this.store.select(HousesSelector.houseModelList);
  houseList$ = this.store.select(HousesSelector.houseList);

  blockNumber$ = this.store.select(HousesSelector.houseList).pipe(
    map((houses) => {
      const blockNumbers = houses.map((item) => item.block_number);
      return blockNumbers
        ?.filter((value, index) => blockNumbers.indexOf(value) === index)
        .sort();
    })
  );

  landNumbers$ = this.store.select(HousesSelector.houseList).pipe(
    map((houses) => {
      const landNumbers = houses.map((item) => item.land_number);
      return landNumbers
        ?.filter((value, index) => landNumbers.indexOf(value) === index)
        .sort();
    })
  );

  prices$ = this.store.select(HousesSelector.houseList).pipe(
    map((houses) => {
      const prices = houses
        .map((item) => item.price)
        ?.sort((item1, item2) => item1 - item2)
        .map((item) => item.toString());
      return prices?.filter((value, index) => prices.indexOf(value) === index);
    })
  );

  houseModels$ = this.store.select(HousesSelector.houseList).pipe(
    map((houses) => {
      const houseModels = houses.map((item) => item.model);
      return houseModels
        ?.filter((value, index) => houseModels.indexOf(value) === index)
        .sort();
    })
  );

  getHouseById(id: string): Observable<HouseListInfo> {
    return this.store
      .select(HousesSelector.houseList)
      .pipe(
        map((house) => house?.find((item) => item.id === id) as HouseListInfo)
      );
  }

  getHouseModelList(): void {
    this.store.dispatch(HousesAction.getHouseModelList());
  }

  getHouseList(): void {
    this.store.dispatch(HousesAction.getHouseList());
  }

  createHouse(payload: any): void {
    this.store.dispatch(HousesAction.createHouse(payload));
  }

  updateHouse(payload: any): void {
    this.store.dispatch(HousesAction.updateHouse(payload));
  }
}
