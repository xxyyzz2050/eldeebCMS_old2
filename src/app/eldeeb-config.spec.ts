import EldeebConfig from "./eldeeb-config";

describe("EldeebConfig", () => {
  it("should create an instance", () => {
    //expect(new EldeebConfig()).toBeTruthy(); //EldeebConfig is const, not a class
    expect(EldeebConfig).toBeTruthy();
  });
});
