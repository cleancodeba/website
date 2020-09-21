import {GetKataInteractor} from "../../interactor/kata/GetKataInteractor";
import {MockKataRepository} from "../repositories/MockKataRepository";

export class Configuration {

  static getKataInteractor() {
    return new GetKataInteractor(
      new MockKataRepository()
    )
  }
}
