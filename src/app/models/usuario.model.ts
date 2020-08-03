import { environment } from '../../environments/environment';


const baseUrl = environment.base_url;

export class Usuario {

    constructor(
        public nombre: string,
        public email: string,
        public password?: string,
        public img?: string,
        public google?: boolean,
        public role?: string,
        public id?: string
    ) { }

    get imgUrl() {
        if (this.google) {
            return this.img;
        }
        if (this.img) {
            return `${baseUrl}/upload/usuarios/${this.img}`;
        } else {
            return `${baseUrl}/upload/usuarios/no-img.png`;
        }
    }
}
