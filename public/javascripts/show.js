let fetchTownData = (townName) => {
  fetch(`/town_json/${townName}`)
  .then((resp) => {
    if(resp.ok){
      return resp.json()
    }
    else {
      throw('Something bad happened')
    }
  }).then((town) => {
    let dataDiv = document.getElementById('town-data')
    dataDiv.innerHTML += `<h1>${town.name}</h1>`
    let popDataString = []
    for(let year in town.population_data){
      popDataString.push(`<dt>${year}</dt><dd>${town.population_data[year]}</dd>`)
    }

    if(town.name === 'Boston'){
      let img = new Image()
      img.onload = () => {
        dataDiv.innerHTML += `<img src="${img.src}" />`
      }
      img.src = 'https://media-cdn.tripadvisor.com/media/photo-s/03/9b/2f/47/boston.jpg'
    }

    dataDiv.innerHTML += popDataString.join("\n")
  })
}
