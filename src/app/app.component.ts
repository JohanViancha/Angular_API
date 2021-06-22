import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PostsService } from './services/posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  arrayPost: any[];
  formularios: FormGroup;
  constructor(private postService: PostsService) {
    this.arrayPost = [];
    this.formularios = new FormGroup({
      title: new FormControl(''),
      body: new FormControl(''),
      userId: new FormControl(''),
    });
  }

  ngOnInit() {
    this.postService
      .getAll()
      .then((posts) => (this.arrayPost = posts))
      .catch((error) => console.log(error));
  }

  async onClick(postId: number) {
    try {
      const post = await this.postService.getById(postId);
      console.log(post);
    } catch (error) {
      console.log(error);
    }
  }

  onClickPost() {
    this.postService
      .create({ title: 'Nue', body: 'fasf', UserId: 1 })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }

  async onSubmit() {
    try {
      const response = await this.postService.create(this.formularios.value);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  onClickUpdate() {
    this.postService
      .update({
        id: 5,
        title: 'Nuevo titulo',
        body: 'Nievo cuerpo',
        userId: 3,
      })
      .then((reponse) => console.log(reponse))
      .catch((error) => console.log(error));
  }

  async onClickDelete() {
    try {
      const response = await this.postService.delete(5);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
}
