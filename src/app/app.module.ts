import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AuthModule } from "@auth0/auth0-angular";
import { AppComponent } from "./app.component";
import { appRoutes } from "./app.routes";
import { AuthComponent } from "../components/Auth/auth/auth.component";

@NgModule({
  declarations: [AppComponent, AuthComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {
      anchorScrolling: "enabled",
      useHash: true,
      scrollPositionRestoration: "enabled",
    }),
    AuthModule.forRoot({
      domain: "dev-6tnf8bi2azp1l3sy.us.auth0.com",
      clientId: "AdPMjbUBg0PPGRfomJDLlDhinyzXMnMG",
      authorizationParams: {
        redirect_uri: window.location.origin,
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
