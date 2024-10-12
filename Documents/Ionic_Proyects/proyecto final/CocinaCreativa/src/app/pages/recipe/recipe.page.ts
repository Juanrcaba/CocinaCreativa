import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { LoadingService } from 'src/app/services/loading.service';
import { RecetasService } from 'src/app/services/recetas.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit {

  
  idRecipe :number = 0
  recetas : any[] = [] 
  datos: any[] = [1,2,3,4,5,6,7,8,9,10]
  public isload! : Observable<boolean>

  ingredientes: string[] = ['Ingrediente','Ingrediente','Ingrediente','Ingrediente','Ingrediente','Ingrediente','Ingrediente','Ingrediente','Ingrediente','Ingrediente','Ingrediente',]
  preparacion: string[] = ['preparacion','preparacion','preparacion','preparacion','preparacion','preparacion','preparacion','preparacion','preparacion','preparacion',]
  constructor(private route:ActivatedRoute, private recetaService: RecetasService,private isloading:LoadingService) {
    this.isload = this.isloading.loadingValue;  
    this.route.params.subscribe(param=>{
       this.idRecipe = param['id']
       console.log(this.idRecipe)
      })
   }

  ngOnInit() {
    this.getdata(this.idRecipe)
  }

  getdata(idRecipe:number){
   
    this.recetaService.getRecipeData(idRecipe).subscribe(data =>{
            this.recetas = data   
            console.log(data)       
            
    })
    
    
  }

}
