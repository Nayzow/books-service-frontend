import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../services/UsersService";
import {map, Observable, switchMap} from "rxjs";
import {UserDetails} from "../../models/UserDetails";
import {Borrowing} from "../../models/Borrowing";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user$!: Observable<UserDetails>;
  borrowings$!: Observable<Borrowing[]>;

  constructor(private userService: UsersService, private activatedRoute: ActivatedRoute) { }
  ngOnInit() {
    this.user$ = this.activatedRoute.paramMap
      .pipe(
        map((params) => params.get('id')),
        switchMap(id => this.userService.findById(id))
      )
    this.borrowings$ = this.user$.pipe(
      map((user) => user.id),
      switchMap(id => this.userService.findAllBorrowingsByUserId(id))
    )
  }
}
