export class Book{
    #name : string = "";
    #rating : number = 0;
    
    constructor(name : string, rating : number){
        this.#name = name;
        this.setRating = rating;
    }

    set setRating(rating: number){
        if(rating < 1 || rating > 10){
            throw new Error('Érvénytelen értékelés!');
        }
        this.#rating = rating;
    }

    toString(): string {
        return this.#name + " " + this.#rating + "/10";
    }
}