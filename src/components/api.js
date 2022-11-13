


export default async function getAnimeDetails(animeId) {
    await fetch(`https://gogoanime.consumet.org/anime-details/${animeId}`)
        .then((response) => response.json())
        .then((animeDetails) => {
            console.log(animeDetails)
            return animeDetails
        });

}