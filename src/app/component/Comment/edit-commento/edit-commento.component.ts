import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Forum } from 'src/app/models/forum';
import { CommentService } from 'src/app/services/comment.service';
import { Comment } from '../../../models/comment';
import { ForumService } from 'src/app/services/forum.service';

@Component({
  selector: 'app-edit-commento',
  templateUrl: './edit-commento.component.html',
  styleUrls: ['./edit-commento.component.scss']
})
export class EditCommentoComponent {

  idComment: number;
  comments: Comment;
ForumList : Forum [];
  constructor(private route: ActivatedRoute, private router: Router,
    private ForumService : ForumService,
    private commentService: CommentService) { }

  ngOnInit() {
    this.ForumService.getAllForums().subscribe(
      (response: Forum[]) => {
        this.ForumList = response;
      },
      (error: Error) => {
        console.log('Error fetching comment: ' + error.message);
      },
   
    );

    this.idComment = this.route.snapshot.params['id'];

    this.commentService.getCommentById(this.idComment)
      .subscribe(
        data => {
        console.log(data)
        this.comments = data;
      }, error => console.log(error));
  }

  updateComment() {
    console.log("aaaa",this.comments);
    this.commentService.updateComment(this.idComment, this.comments)
   
      .subscribe(data => {
        console.log("aaaa",data);
    
        this.comments = new Comment();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateComment();
  }

  gotoList() {
    this.router.navigate(['list-comment']);
  }
}