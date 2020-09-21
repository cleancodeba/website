import {beforeAll} from "@jest/globals";
import {Configuration} from "../driver/configuration/Configuration";

beforeAll(() => {

})

test("get all katas", () => {
  const getKataInteractor = Configuration.getKataInteractor()
  getKataInteractor.getAll().then(katas => {
    expect(katas.length).not.toBe(0)
  }).catch(reason => {});
})
