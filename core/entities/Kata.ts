
export class Kata {
  name: string;
  shortDescription: string;
  description: string;

  private constructor() {
  }

  static mock() {
    return {
      name: "FizzBuzz",
      shortDescription: "This Kata was posted here by someone anonymously. Michael Feathers and EmilyBache performed it at agile2008 when competing in “Programming with the stars” in python, in 4 minutes.",
      description: "large"
    }
  }
}



