import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BuyerService {
  getAll(): import("../models/buyer").Buyer[] {
    throw new Error("Method not implemented.");
  }

  constructor() { }
}
