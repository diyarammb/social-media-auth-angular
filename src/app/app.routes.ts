import { Route } from "@angular/router";
import { AuthComponent } from "../components/Auth/auth/auth.component";
import { HomeComponent } from "../components/Home/home/home.component";
export const appRoutes: Route[] = [
  { path: "", component: AuthComponent },
  { path: "about", component: HomeComponent },
];
