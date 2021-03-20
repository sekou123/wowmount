import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "overview",
    pathMatch: "full"
  }
];
export const appRouterModule = RouterModule.forRoot(routes);
