"use strict";
//Descripción de una API de JavaScript mediante una interfaz
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const fetchURL = 'https://jsonplaceholder.typicode.com/posts';
function fetchPosts(url) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield fetch(url);
        let body = yield response.json();
        console.log(body);
        // Devuelve el cuerpo tipado como un array de objetos Post
        //Se está diciendo a TypeScript que trate la variable body como si fuera un array de objetos de tipo Post
        //se espera que cada elemento del array body en un objeto de tipo 
        return body;
        //cuando se dice body as Post[], se está indicando que se espera que body sea un array donde cada elemento del array es un objeto que cumple con la estructura definida por la interfaz Post
    });
}
function showPost() {
    return __awaiter(this, void 0, void 0, function* () {
        let posts = yield fetchPosts(fetchURL);
        // Display the contents of the first item in the response
        let post = posts[0];
        console.log('Post #' + post.id);
        // If the userId is 1, then display a note that it's an administrator
        console.log('Author: ' + (post.userId === 1 ? "Administrator" : post.userId.toString()));
        console.log('Title: ' + post.title);
        console.log('Body: ' + post.body);
    });
}
showPost();
