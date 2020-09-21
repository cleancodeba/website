import {IKataRepository} from "../../adapter/repository/IKataRepository";
import {Kata} from "../../entities/Kata";

export class MockKataRepository implements IKataRepository{
  async getAll(): Promise<Kata[]> {
    return Promise.resolve([
      Kata.mock(),
      Kata.mock(),
      Kata.mock(),
      Kata.mock(),
      Kata.mock(),
      Kata.mock(),
      Kata.mock(),
      Kata.mock(),
      Kata.mock(),
      Kata.mock(),
      Kata.mock(),
      Kata.mock(),
      Kata.mock()
    ]);
  }
}
