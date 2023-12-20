import Frame from '../../../../../../components/frame/Frame'
import Modal from '../../../../../../components/modal/Modal'
import swagPhotos, { Photo } from '../../../../../../photos'

async function getTodos() {
  const result = await fetch('https://jsonplaceholder.typicode.com/todos/1', { next: { tags: ["test"] } })
  return await result.json()
}

export default async function PhotoModal({ params: { id: photoId } }: { params: { id: string } }) {
  const photos = swagPhotos
  const photo: Photo = photos.find((p) => p.id === photoId)!
  const todos = await getTodos()
  console.log(todos)

  return (
    <Modal>
      <Frame photo={photo} />
    </Modal>
  )
}
