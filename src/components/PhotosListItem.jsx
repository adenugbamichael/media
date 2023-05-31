/* eslint-disable react/prop-types */
export default function PhotosListItem({ photo }) {
  return (
    <div>
      <img src={photo.url} alt='random photo' className='h-20 w-20' />
    </div>
  )
}
