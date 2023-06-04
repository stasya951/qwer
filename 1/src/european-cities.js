
async function getCapitalCity(countryName) {
    try {
      const response = await axios.get(
        `https://restcountries.com/v2/name/${countryName}`
      );
      const capitalCity = response.data[0].capital;
      return capitalCity;
    } catch (error) {
      console.error(error);
    }
  }
  
  
  async function handleSearch(event) {
    event.preventDefault();
  
    const cityInput = document.getElementById("city-input");
    const city = cityInput.value.trim();
  
    if (city !== "") {
     
      const capitalCity = await getCapitalCity(city);
  
      if (capitalCity) {
       
        getWeather(capitalCity);
      } else {
        alert("City not found. Please enter a valid European city.");
      }
    } else {
      alert("Please enter a city.");
    }
  
    cityInput.value = "";
  }
  
  
  const searchForm = document.getElementById("search-form");
  searchForm.addEventListener("submit", handleSearch);
  