import { TestBed } from "@angular/core/testing";

import eldeeb from "./index";

describe("IndexService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: eldeeb = TestBed.get(eldeeb);
    expect(service).toBeTruthy();
  });
});
