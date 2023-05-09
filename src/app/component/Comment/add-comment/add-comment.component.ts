import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Forum } from 'src/app/models/forum';
import { CommentService } from 'src/app/services/comment.service';
import { ForumService } from 'src/app/services/forum.service';
import { Comment } from '../../../models/comment';
@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {
comment : Comment = new Comment();
addCommentCommentForm: FormGroup;
ForumList : Forum [] = [] ; 
submitted = false;
  constructor(
    private commentService: CommentService, 
    private formBuilder: FormBuilder,
    private ForumService : ForumService,
    private router : Router
    ) { }

  ngOnInit(): void {
    this.ForumService.getAllForums().subscribe(
      (response: Forum[]) => {
        this.ForumList = response;
      },
      (error: Error) => {
        console.log('Error fetching products: ' + error.message);
      },
   
    );
    this.addCommentCommentForm= this.formBuilder.group(
      {content : ['', [Validators.required]],
      createdAt: ['', [Validators.required]],
      forum: ['', [Validators.required]],
      }
    )
  }
  get f() {
    return this.addCommentCommentForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
  
    const comments = {
      content: this.addCommentCommentForm.value.content,
      forum: {
        idForum : this.addCommentCommentForm.value.forum , 
  } , 
      createdAt :this.addCommentCommentForm.value.createdAt,
      idComment: this .comment.idComment,
      client : this.comment.client,
    };
console.log(comments)

    this.commentService.addComment(comments).subscribe(() => {
      console.log('Comment added successfully');
      // Optionally, navigate to the comment list component
    });
    this.router.navigate(['/list-comment']);
    
  }


}