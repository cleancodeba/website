import {Kata} from "../../entities/Kata";

export interface IKataRepository {
  getAll(): Promise<Kata[]>
}
