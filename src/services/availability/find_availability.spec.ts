// A checklist of the expected behavior, not a fixed contract.
// Wire these cases to your own structure, and add the cases we missed.
describe('FindAvailability', () => {
  describe('at', () => {
    it(`should return [Unwasted (paper, metal), Bluecollection(food_waste)] for postal code 1020 on a Monday (2023-10-02)`, () => {});

    it(`should return [Unwasted(metal)] for postal code 1010 on a Wednesday (2023-10-04)`, () => {});

    it(`should return [Bluecollection(food_waste)] for postal code 2000 on a Thursday (2023-10-05)`, () => {});

    it(`should return empty list if no service providers are available for postal code 1010 on a Sunday (2023-10-08)`, () => {});

    it(`should return empty list if no service providers are available at postal code 0000`, () => {});
  });
});
