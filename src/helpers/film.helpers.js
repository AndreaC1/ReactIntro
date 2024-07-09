/**
 * 
 * @param {Array} list An array of movie objects they must have a director property
 * @param {string} director The name of the director (case-sensitive)
 * @returns 
 */


export function filterFilmsByDirector(list, director) {
    if (director) {


        return list.filter((movieObj) => {
            if (movieObj.director == director) {
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
export function getListOf(list, prop) {
    // 
    const tempObj = {};
    for (let i = 0; i < list.length; i++) {
        if (!tempObj[list[i][prop]]) {
            tempObj[list[i][prop]] = "any truthy value";
        }
    }
    return Object.keys(tempObj);
}


/**
 * 
 * @param {Array} list An array of movie objects
 * @returns an object with the acuulated avg score, relase date, total and latest 
 */
export function getFilmsStats(list) {

    let total = list.length;
    let acc_score = 0;
    for (let i = 0; i < list.length; i++) {
        acc_score += Number(list[i].rt_score);
    }

    const avg_score = acc_score / total;

    const latest = Math.max(...list.map((movie) => Number(movie.release_date)));

    return {
        acc_score,
        avg_score,
        total,
        latest
    }














}





// const avg_score =
// list.reduce((sum, film) => sum + parseInt(film.rt_score), 0)/ list.length;