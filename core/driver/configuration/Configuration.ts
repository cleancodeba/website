import {GetKataInteractor} from "../../interactor/kata/GetKataInteractor";
import {MockKataRepository} from "../repositories/MockKataRepository";
import {IKataRepository} from "../../adapter/repository/IKataRepository";

export class Configuration {
  static getKataInteractor() {
    return this.getKataInteractorWithRepository(new MockKataRepository())
  }

  static getKataInteractorMock() {
    return this.getKataInteractorWithRepository(new MockKataRepository())
  }

  static getKataInteractorWithRepository(respository: IKataRepository) {
    return new GetKataInteractor(respository)
  }
}
