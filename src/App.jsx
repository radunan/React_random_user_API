import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 


const App = () => {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRandomUser = async () => {
      try {
        //chytání dat z API, await(asynchronní, čeká na odpověd a program vykonává dál za funkcí)
        const response = await fetch('https://randomuser.me/api/'); 
        //po odpovědi program pokračuje
        if (!response.ok) { //kontrola zda odpověd je v pořádku
          throw new Error('Network response was not ok');
        }
        const data = await response.json(); // výsledkem neni json, ale vezme json jako vstup a pak se převede na javascriptový objekt
        setUserData(data.results[0]); //bere výsledky na první pozici
        setIsLoading(false); //zrušení načítání
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchRandomUser();
  }, []);

  if (isLoading) { //pokud se data ještě nenačetla vypíše následující
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>Random User</h1>
      {userData && (    //pokud data nejsou null vypíše se tato část kódu
        <div>
          <img src={userData.picture.large} alt="User" />
          <p>Name: {userData.name.first} {userData.name.last}</p>
          <p>Gender: {userData.gender}</p>
          <p>Age: {userData.dob.age}</p>
          <p>Email: {userData.email}</p>
          <p>Phone: {userData.phone}</p>
          <p>Location: {userData.location.city}, {userData.location.country}</p>
        </div>
      )}
    </>
  );
};

export default App;
