import {Kata} from "../../entities/Kata";
import {IKataRepository} from "../../adapter/repository/IKataRepository";

export class GetKataInteractor {
  private kataRepository: IKataRepository;


  constructor(kataRepository: IKataRepository) {
    this.kataRepository = kataRepository;
  }

  async getAll(): Promise<Kata[]> {
    return await this.kataRepository.getAll()
  }
}

