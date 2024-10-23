import { provideRouter } from "@angular/router";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { appRoutes } from "./app.routes";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {
      anchorScrolling: "enabled",
      useHash: true,
      scrollPositionRestoration: "enabled",
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
