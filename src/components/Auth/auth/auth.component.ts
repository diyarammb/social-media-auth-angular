import { Component, Inject, Injector, OnInit } from "@angular/core";
import { AuthService } from "@auth0/auth0-angular";
import { Injectable, inject } from "@angular/core";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.css"],
})
export class AuthComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log(AuthService);
  }
}
