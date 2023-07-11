type People = any
type PeopleDetail = any

type Film = any
type FilmDetail = any

type Starship = any
type StarshipDetail = any

type Planet = any
type PlanetDetail = any

type Species = any
type SpeciesDetail = any

type Vehicle = any
type VehicleDetail = any

type PeopleResponse = People | PeopleDetail 
type FilmsResponse = Film | FilmDetail 
type StarshipResponse = Starship | StarshipDetail 
type PlanetsResponse = Planet | PlanetDetail 
type SpeciesResponse = Species | SpeciesDetail 
type VehiclesResponse = Vehicle | VehicleDetail 

type SwapiResponse = PeopleResponse | FilmsResponse | StarshipResponse | PlanetsResponse | SpeciesResponse | VehiclesResponse

export default SwapiResponse