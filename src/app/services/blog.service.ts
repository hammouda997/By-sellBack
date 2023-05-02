import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }
  
    getAllBlogs(): Observable<Blog[]> {
      return this.http.get<Blog[]>('/Blog/retrieve-all-Blogs');
    }
  
    getBlog(id: number): Observable<Blog> {
      return this.http.get<Blog>(`/Blog/retrieve-bLog/${id}`);
    }
  
    addBlog(blog: Blog): Observable<Blog> {
      return this.http.post<Blog>('/Blog/add-Blog', blog);
    }
  
    updateBlog(blog: Blog): Observable<Blog> {
      return this.http.put<Blog>('/Blog/update-Blog', blog);
    }
  
    removeBlog(id: number): Observable<void> {
      return this.http.delete<void>(`/Blog/remove-Blog/${id}`);
    }
  }
  

