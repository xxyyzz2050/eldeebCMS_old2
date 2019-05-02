import {
  Injectable,
  APP_ID,
  COMPILER_OPTIONS,
  LOCALE_ID,
  PACKAGE_ROOT_URL,
  PLATFORM_ID,
  Inject
} from "@angular/core";

import {
  isPlatformServer,
  isPlatformBrowser,
  isPlatformWorkerUi,
  isPlatformWorkerApp
} from "@angular/common";

@Injectable({
  providedIn: "root"
})
export class TestService {
  constructor(@Inject(PLATFORM_ID) public platformId: Object) {}

  test(): any {
    return {
      APP_ID,
      COMPILER_OPTIONS,
      LOCALE_ID,
      PACKAGE_ROOT_URL,
      PLATFORM_ID,
      isPlatformServer: isPlatformServer(this.platformId),
      isPlatformBrowser: isPlatformBrowser(this.platformId),
      isPlatformWorkerUi: isPlatformWorkerUi(this.platformId),
      isPlatformWorkerApp: isPlatformWorkerApp(this.platformId)
    };
  }
}
