import { Component } from '@angular/core';
import { Post } from './../post.model';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent {

  foodPostList: Post[] = [ ];
  selectedPost: Post = null;

  submitForm(headline: string, body: string) {
    var newPost: Post = new Post(headline, body);
    this.foodPostList.push(newPost);
  }

  viewButtonClicked(clickedPost) {
    clickedPost.showBody = true;
  }

  hideButtonClicked(clickedPost) {
    clickedPost.showBody = false;
  }

  editPost(clickedPost){
    this.selectedPost = clickedPost;
  }

}
