

class API {

    static BASE_URL = 'https://api.consumet.org/anime/gogoanime/';


    static fetchFilterData(page, filter) {
        console.log(`fetch filter ${this.BASE_URL}${filter}?page=${page}`)
       return  new Promise((resolve,reject) =>{
            fetch(`${this.BASE_URL}${filter}?page=${page}`)
                .then((response) => response.json())
                .then((animelist) => {
                    console.log('API filter', animelist)
                    resolve(animelist)
                })
                .catch((error) => {
                    reject(error);
                });
        } )

    }

    static  fetchInputData(page,text){
        return  new Promise((resolve,reject) =>{
            console.log(`fetch input ${this.BASE_URL}${text}?page=${page}`)
            fetch(`${this.BASE_URL}${text}?page=${page}`)
                .then((response) => response.json())
                .then((animelist) =>{
                    console.log('API input', animelist)
                    resolve(animelist)
                });


        })

    }




}
export default API;