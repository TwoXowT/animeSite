

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
            fetch(`${this.BASE_URL}anime/${id}`)
                .then((response) => response.json())
                .then((animeDetails) => {
                    resolve(animeDetails.data)
                });
        })
    }


    static  fetchGenres(){
        return  new Promise((resolve,reject) =>{
            console.log(`FETCH ${this.BASE_URL}genres/anime`)
            fetch(`${this.BASE_URL}genres/anime`)
                .then((response) => response.json())
                .then((animelist) =>{
                    resolve(animelist)
                });

        })

    }

    static  fetchAnimeByParams(...rest){
        const [currentGenres,currentYear,currentPage] = rest
        console.log('currentGenre',currentGenres)
        console.log('currentYear',currentYear)
        console.log('currentPage',currentPage)
        return  new Promise((resolve,reject) =>{

            const genres = currentGenres?(`genres=${currentGenres}`):('')
            const year = currentYear?(`&start_date=${currentYear}`):('')
            const page = currentPage?(`&page=${currentPage}`):(`&page=1`)
            console.log(`${this.BASE_URL}anime?${genres}${year}${page}`)
            fetch(`${this.BASE_URL}anime?${genres}${year}${page}`)
                .then((response) => response.json())
                .then((animelist) =>{
                    resolve(animelist)
                });

        })

    }


    static  fetchInputData(page,text){
        return  new Promise((resolve,reject) =>{
            fetch(`${this.BASE_URL}anime?q=${text}?page=${page}`)
                .then((response) => response.json())
                .then((animelist) =>{
                    resolve(animelist)
                });


        })

    }




}
export default API;