import { useFetchPhotosQuery } from "../store/apis/photosApi"

export default function PhotosList({ album }) {
  useFetchPhotosQuery(album)

  return "PhotoList"
}
