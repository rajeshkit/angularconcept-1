import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  responses:any;


  private albumService:AlbumService;
  constructor(albumService1:AlbumService) {
    this.albumService=albumService1;
  }

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe(res=>{
      this.responses=res;
    }
    ,err=>{console.log(err);
    });
  }

}
