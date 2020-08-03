import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent {

  public imgUrl = '';

  constructor(private usuarioService: UsuarioService, private router: Router) {
    this.imgUrl = usuarioService.usuario.imgUrl;
  }

  logout(): void {
    this.usuarioService.logout();
    this.router.navigateByUrl('/login');
  }

}
