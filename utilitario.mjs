import { connectDB } from './config/dbConfig.mjs';
import pais from './model/pais.mjs';
const respuesta = await fetch('https://restcountries.com/v3.1/all');
const paises = await respuesta.json();

const paisesFiltrados = paises.filter(pais=>{
    return pais.languages && Object.keys(pais.languages).includes('spa')
})

paisesFiltrados.forEach(p => {
    delete p.translations
    delete p.tld
    delete p.cca2
    delete p.ccn3
    delete p.cca3
    delete p.cioc
    delete p.idd
    delete p.altSpellings
    delete p.car
    delete p.coatOfArms
    delete p.postalCode
    delete p.demonyms
});

paisesFiltrados.forEach(p => {
    p.creador = "Debora";
});

await connectDB();
for (const p of paisesFiltrados) {
    const nuevoPais = new pais({
      nombrePais: p.name.common,
      capital:  p.capital || [],
      limitrofes: p.borders || [],
      area: p.area || 0,
      poblacion: p.population || 0,
      gini: p.gini ? Object.values(p.gini)[0] : null,
      zonaHoraria: p.timezones || [],
      creador: "Debora"
    });
  
    try {
      await nuevoPais.save();
    } catch (err) {
      console.error(`Error guardando el país ${p.name.common}:`, err.message);
    }
  }

