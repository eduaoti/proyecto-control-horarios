import { Component, HostListener } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navigation-bar-superadmin',
  templateUrl: './navigation-bar-superadmin.component.html',
  styleUrl: './navigation-bar-superadmin.component.css'
})
export class NavigationBarSuperadminComponent {
  constructor(
    private authServicio: AuthService,
    private cookieService: CookieService,
    private router: Router
  ){}
  
  token: string = this.cookieService.get('token')
  cookie = this.cookieService.check('token')

  scrolled: boolean = false;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Verificar si se ha hecho scroll
    if (window.pageYOffset > 0) {
      this.scrolled = true;
    } else {
      this.scrolled = false;
    }
  }

  salir(){
    this.authServicio.logOut(this.token).subscribe(
      (response) => { 
        this.cookieService.set('',response.token)
        console.log(response)
        this.router.navigate(['login'])
      },
      (error) => {
        // Manejar errores, por ejemplo, mostrar un mensaje de error al usuario
        console.error('Error en el inicio de sesión:', error);
      }
    );
  }
}
