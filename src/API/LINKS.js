export const VALIDATE_USER = "https://localhost:5001/api/refugios/validate"

export const GET_ALL_TIPOSMASCOTAS = "https://localhost:5001/api/tiposMascotas"

export const POST_NEW_MASCOTA = "https://localhost:5001/api/mascotas"

export const GET_MASCOTAS_BY_REFUGIO = (correorefugio) => `https://localhost:5001/api/mascotas/byRefugio/${correorefugio}`