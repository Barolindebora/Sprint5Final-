

export function renderizarPaises(pais){
    return {
        Nombre: pais.nombrePais,
        Capital: pais.capital, 
        "Paises Limítrofes": pais.limitrofes,
        Area: pais.area, 
        Poblacion: pais.poblacion, 
        gini: pais.gini,
        "Zonas Horarias" : pais.zonaHoraria, 
        Creador: pais.creador
};
}

export function renderizarListaPaises(paises){
    return paises.map(pais => renderizarPaises(pais))
}