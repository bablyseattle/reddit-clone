import { Component } from '@angular/core';
import { Post } from './../post.model';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent {

  foodPostList: Post[] = [ ];

  submitForm(headline: string, body: string) {
    var newPost: Post = new Post(headline, body);
    this.foodPostList.push(newPost);
  }

}
