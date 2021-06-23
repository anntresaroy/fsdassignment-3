import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { DetailsService } from '../details.service';
import { AuthorModel } from './author.model';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  title: String = 'Authors';

  authors:AuthorModel[] = [];

  imageWidth:number = 150;
  imageMargin: number = 4;

  constructor(private router:Router, private detailsService:DetailsService, public auth:AuthService, private http:HttpClient) { }
  ngOnInit(): void {
    this.detailsService.getAuthors().subscribe((data)=>{
      this.authors = JSON.parse(JSON.stringify(data));
      console.log(this.authors);
    });
  }

  editAuthor(id:any){
    localStorage.setItem('editAuthorId',id._id.toString());
    console.log(localStorage.getItem('editAuthorId'));
    this.router.navigate(['/update_author']);
  }

  deleteAuthor(i:any){
   this.detailsService.deleteAuthor(i._id)
   .subscribe((data) => {
    alert('Author has been deleted');
    this.authors = this.authors.filter(p => p !== i);
    
  })
  }
}