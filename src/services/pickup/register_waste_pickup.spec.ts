// A checklist of the expected behavior, not a fixed contract.
// Wire these cases to your own structure, and add the cases we missed.
describe('RegisterWastePickup', () => {
  describe('register', () => {
    it(`should return an error if the customer doesn't exist`, () => {});

    it(`should return an error if the stream doesn't exist`, () => {});

    it(`should return an error if the service provider doesn't exist`, () => {});

    it(`should return an error if the pickup date is not available for the service provider`, () => {});

    it(`should return an error if the pickup date is before tomorrow`, () => {});

    it(`should register the waste stream pickup`, () => {});
  });
});
