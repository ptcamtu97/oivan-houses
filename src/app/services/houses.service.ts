import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ENDPOINT } from '../shared/constants';
import {
  HouseListInfo,
  ResponseHouseList,
  ResponseHouseModel,
} from '../shared/interfaces';

@Injectable()
export class HousesService {
  http = inject(HttpClient);

  houseModelList(): Observable<ResponseHouseModel> {
    return this.http.get<ResponseHouseModel>(`${ENDPOINT}/house_models`);
  }

  houseList(): Observable<ResponseHouseList> {
    return this.http.get<ResponseHouseList>(`${ENDPOINT}/houses`);
  }

  createHouse(payload: HouseListInfo): Observable<any> {
    return this.http.post<any>(`${ENDPOINT}/houses`, {
      data: {
        type: payload.type,
        attributes: {
          house_number: 'Test-house',
          block_number: 'A',
          land_number: 'B',
          model: 'apartment-1',
          house_type: 'apartment',
          price: 1000,
        },
      },
    });
  }

  updateHouse(payload: HouseListInfo): Observable<any> {
    return this.http.patch<any>(`${ENDPOINT}/houses/${'3'}`, {
      data: {
        type: 'houses',
        id: '3',
        attributes: {
          house_number: 'Test-house',
          block_number: '002',
          land_number: 'riverside',
          model: 'apartment-1',
          house_type: 'apartment',
          price: 1000,
        },
      },
    });
  }
}
