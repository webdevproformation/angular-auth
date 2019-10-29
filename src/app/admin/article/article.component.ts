import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/service/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  constructor(private articleService: ArticleService) {}

  onCreateArticle($event, form) {
    $event.preventDefault();
    console.log(form.value);

    // ici que l'on va appeler un service qui va être en charge de transmettre toutes les informations pour la création en bdd
    // ng g s service/article

    this.articleService.create(form.value).subscribe(
      result => {
        console.log(result);
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit() {}
}
