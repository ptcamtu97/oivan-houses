import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ENDPOINT } from '../shared/constants';
import {
  HouseListInfo,
  KeysToCamelCase,
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

  createHouse(
    payload: KeysToCamelCase<HouseListInfo> = {} as any
  ): Observable<any> {
    return this.http.post<any>(`${ENDPOINT}/houses`, {
      data: {
        type: payload.type,
        attributes: {
          house_number: payload.houseNumber,
          block_number: payload.blockNumber,
          land_number: payload.landNumber,
          model: payload.model,
          house_type: payload.houseType,
          price: payload.price,
        },
      },
    });
  }

  updateHouse(
    payload: KeysToCamelCase<HouseListInfo> = {} as any
  ): Observable<any> {
    return this.http.patch<any>(`${ENDPOINT}/houses/${payload.id}`, {
      data: {
        type: payload.type,
        id: payload.id,
        attributes: {
          house_number: payload.houseNumber,
          block_number: payload.blockNumber,
          land_number: payload.landNumber,
          model: payload.model,
          house_type: payload.houseType,
          price: payload.price,
        },
      },
    });
  }
}
