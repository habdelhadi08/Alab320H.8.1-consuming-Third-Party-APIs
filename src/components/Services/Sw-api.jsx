
 export async function getAllStarShips(){
    try {
 const res= await fetch(`http://swapi.dev/api/starships`);
 const data = await res.json();
 console.log(data.results);
return(data);
} catch (error) {
 console.log(error);
}
};


