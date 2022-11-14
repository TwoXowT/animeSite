

class API {

    static BASE_URL = 'https://api.jikan.moe/v4/';


    static fetchFilterData(page, filter) {
       return  new Promise((resolve,reject) =>{

            fetch(`${this.BASE_URL}${filter}/anime?page=${page}`)
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


    static fetchAnimeInfo(id){
        return new Promise((resolve,reject) => {
            fetch(`https://api.jikan.moe/v4/anime/${id}`)
                .then((response) => response.json())
                .then((animeDetails) => {
                    resolve(animeDetails.data)
                });
        })
    }


    static  fetchInputData(page,text){
        return  new Promise((resolve,reject) =>{
            console.log(`FETCH INPUT https://api.jikan.moe/v4/anime?q=${text}?page=${page}`)
            fetch(`https://api.jikan.moe/v4/anime?q=${text}?page=${page}`)
                .then((response) => response.json())
                .then((animelist) =>{
                    resolve(animelist)
                });


        })

    }




}
export default API;