import { SwapiCategories } from "@/types/types"
import Button from "./Button"

export function CardDetail({ children, className, onClick, id, type }: 
  { 
    children: React.ReactNode,
    className: {[key: string]: string},
    onClick?: any,
    id: string,
    type: string
  }) {

  const normalizeData = (data: any, type: string) => {
    const {
      // Films
      title, 
      episode_id, 
      director, 
      producer,
      release_date,
      opening_crawl,
      // People
      name,
      height,
      mass,
      gender,
      birth_year,
      hair_color,
      skin_color,
      eye_color,
      // Starships & vehicles
      model,
      manufacturer,
      cost_in_credit,
      length,
      max_atmosphering_speed,
      crew,
      passengers,
      cargo_capacity,
      consumables,
      hyperdrive_rating,
      // Species
      classification,
      designation,
      average_height,
      skin_colors,
      hair_colors,
      eye_colors,
      average_lifespan,
      language,
      // Planets
      rotation_period,
      orbital_period,
      diameter,
      climate,
      gravity,
      terrain,
      surface_water,
      population
    } = data

    switch(type as SwapiCategories) {
      case 'films':
        return (
          <>
            <p>Title: {title}</p>
            <p>Episode: {episode_id}</p>
            <p>Director: {director}</p>
            <p>Producer: {producer}</p>
            <p>Release Date: {release_date}</p>
            <p>Intro: {opening_crawl}</p>
          </>
        )
      case 'people':
        return (
          <>
            <p>Name: {name}</p>
            <p>Height(cm): {height}</p>
            <p>Mass(kg): {mass}</p>
            <p>Gender: {gender}</p>
            <p>Birth Year:{birth_year}</p>
            <p>Hair: {hair_color}</p>
            <p>Skin: {skin_color}</p>
            <p>Eyes: {eye_color}</p>
          </>
        )
      case 'starships':
        return (
          <>
            <p>Name: {name}</p>
            <p>Model: {model}</p>
            <p>Manufacturer: {manufacturer}</p>
            <p>Costs(credit): {cost_in_credit}</p>
            <p>Length{length}</p>
            <p>Max speed: {max_atmosphering_speed}</p>
            <p>Crew: {crew}</p>
            <p>Passengers: {passengers}</p>
            <p>Cargo capacity: {cargo_capacity}</p>
            <p>Consumables for: {consumables}</p>
            <p>Hyperdrive: {hyperdrive_rating}</p>
          </>
        )
      case 'vehicles':
        return (
          <>
            <p>Name: {name}</p>
            <p>Model: {model}</p>
            <p>Manufacturer: {manufacturer}</p>
            <p>Costs(credit): {cost_in_credit}</p>
            <p>Length{length}</p>
            <p>Max speed: {max_atmosphering_speed}</p>
            <p>Crew: {crew}</p>
            <p>Passengers: {passengers}</p>
            <p>Cargo capacity: {cargo_capacity}</p>
            <p>Consumables for: {consumables}</p>
            <p>Hyperdrive: {hyperdrive_rating}</p>
          </>
        )
      case 'species':
        return (
          <>
            <p>Name: {name}</p>
            <p>Classification: {classification}</p>
            <p>Designation: {designation}</p>
            <p>Height(average): {average_height}</p>
            <p>Skin: {skin_colors}</p>
            <p>Hair: {hair_colors}</p>
            <p>Eyes: {eye_colors}</p>
            <p>Lifespan(average): {average_lifespan}</p>
            <p>{language}</p>
          </>
        )
      case 'planets':
        return (
          <>
            <p>Name: {name}</p>
            <p>Rotation period: {rotation_period}</p>
            <p>Orbital period: {orbital_period}</p>
            <p>Diameter: {diameter}</p>
            <p>Climate: {climate}</p>
            <p>Gravity: {gravity}</p>
            <p>Terrain: {terrain}</p>
            <p>Surface water: {surface_water}</p>
            <p>Population:{population}</p>
          </>
        )
    }
  } 

  return (
    <>
      <dialog id={id} className={className.dialog}>
        <div>
          {normalizeData(children, type)}
        </div>
        <Button type='button' className={className.button} onClick={() => onClick(id)}>Close</Button>
      </dialog>
    </>
  )
}