import { useState } from 'react'
import SearchBox from './SearchBox'
import Info from './Info'

function App() {
  const [weatherInfo, setWeatherInfo] = useState({
        city : "Delhi",
        temperature : 23.06,
        humidity : 47,
        tempMin : 22,
        tempMax : 27,
        feelslike : 23
  })

  const updateInfo = (res) => {
    setWeatherInfo(res);
  }

  return (
    <>
      <SearchBox updateInfo = {updateInfo}></SearchBox>
      <Info info = {weatherInfo}></Info>
    </>
  )
}

export default App
