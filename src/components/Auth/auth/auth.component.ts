import { Component, Inject, OnInit } from "@angular/core";
import { AuthService } from "@auth0/auth0-angular";
import { DOCUMENT } from "@angular/common";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.css"],
})

export class AuthComponent implements OnInit {
  user: any = null;

  constructor(
    public auth: AuthService,
    @Inject(DOCUMENT) private doc: Document
  ) { }

  ngOnInit(): void {
    this.auth.user$.subscribe((userData) => {
      this.user = userData;
      console.log('User data:', this.user);
    });
  }

  loginWithRedirect(): void {
    this.auth.loginWithRedirect();
  }

  logout(): void {
    this.auth.logout({ logoutParams: { returnTo: this.doc.location.origin } });
  }
}
