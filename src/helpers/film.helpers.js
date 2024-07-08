/**
 * 
 * @param {Array} list An array of movie objects they must have a director property
 * @param {string} director The name of the director (case-sensitive)
 * @returns 
 */


export function filterFilmsByDirector(list, director){
    if(director){

    
    return list.filter((movieObj) => {
        if(movieObj.director == director){
            return true;
        }
    });
}
return list;
}

/**
 * 
 * @param {Array} list An array of movie objects 
 * @param {string} prop A single property on a movie object 
 * @returns 
 */
export function getListOf(list, prop){
    // 
    const tempObj = {};
    for(let i = 0; i < list.length; i++){
        if(!tempObj[list[i][prop]]){
            tempObj[list[i][prop]] = "any truthy value";
        }
        console.log(tempObj); 
    }
    return Object.keys(tempObj);
}

export function getFilmsStats(list){
    const avg_score =
    list.reduce((sum, film) => sum + parseInt(film.rt_score), 0)/ list.length;
}