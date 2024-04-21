import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent {
  
  //ID of item to fetch in data base 
  id?:string;

   constructor(private route: ActivatedRoute,private router: Router) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') ?? "";

    if(this.id==null || this.id ==="")
      this.router.navigate(['/']);
  }
}
