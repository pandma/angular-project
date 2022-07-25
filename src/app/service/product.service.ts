import { HttpClient } from '@angular/common/http';


export class productService {
    constructor(private http: HttpClient) { }


    async callJsonDataRestApi() {

        const data = await this.http.get('http://localhost:3000/products')
        console.log("····",data)

    }
}




