import { Component, OnInit } from '@angular/core';
import { RecetasService } from '../services/recetas.service';
import { LoadingService } from '../services/loading.service';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';

interface Receta{
  id: number,
  categoria: string,
  Nombre:string,
  Valoracion: number,
  Dificultad: string,
  Comensales: number,
  Tiempo:string,
  url_img:string,
  num_comentarios:number,
  num_reviews: number
  ingredientes: [
    {
      id:number,
      idReceta:number,
      ingrediente:string
    }
  ],
  preparations:[{
      id:number,
      idReceta:number,
      pasos:number,
      descripcion:string
  }]

}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

  public isload! : Observable<boolean>
 

  constructor(private recetaService: RecetasService,private isloading: LoadingService,private route: Router) {
    this.isload = this.isloading.loadingValue;

  }

  recetas : any[] = []
 
  
 datos: any[] = [1,2,3,4,5,6,7,8,9,10]

  categoriass = ['Acompañamiento','Cena','Desayuno','Entrante','Merienda','Plato Principal','Postre']
  categorias = ['Cócteles y bebidas',	'Recetas de Aperitivos y tapas',	'Recetas de Arroces y cereales',	'Recetas de Aves y caza',	'Recetas de Carne',	'Recetas de Ensaladas',	'Recetas de Guisos y Potajes',	'Recetas de Huevos y lácteos',	'Recetas de Legumbres',	'Recetas de Mariscos',	'Recetas de Pan y bollería',	'Recetas de Pasta',	'Recetas de Pescado',	'Recetas de Postres',	'Recetas de Salsas']

  ngOnInit(): void {           
      
      this.getdata()    
  }

  getdata(){
   
    this.recetaService.getData().subscribe(data =>{
            this.recetas = data    
            console.log(data)
            
    })
    
    
  }

  filtroCategoria(categoria: string){
    this.recetaService.getFilterData(categoria).subscribe(data =>{
      this.recetas = data        
    })
  }

  detalleReceta(id:number){
    this.route.navigateByUrl("/recipe/"+id)
    //console.log("De la categoria de: "+id)
  }

}
