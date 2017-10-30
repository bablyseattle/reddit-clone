import { Component } from '@angular/core';
import { Post } from './../post.model';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})

export class TravelComponent {
  travelPostList: Post[] =[];

  submitForm(headline: string, body: string){
    let newPost: Post = new Post(headline, body)
    this.travelPostList.push(newPost);
    }

    viewButtonClicked(clickedPost){
      clickedPost.showBody = true;
    }

    hideButtonClicked(clickedPost){
      clickedPost.showBody = false;
    }


}
