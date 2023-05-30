/* eslint-disable react/prop-types */
import { useFetchAlbumsQuery } from "../store/apis/albumsApi"

export default function AlbumList({ user }) {
  const { data, error, isLoading } = useFetchAlbumsQuery(user)

  console.log(data, error, isLoading)

  return <div>Albums for {user.name}</div>
}
