import Frame from '../../../../../../components/frame/Frame'
import Modal from '../../../../../../components/modal/Modal'
import swagPhotos, { Photo } from '../../../../../../photos'

export default async function PhotoModal({ params: { id: photoId } }: { params: { id: string } }) {
  const photos = swagPhotos
  const photo: Photo = photos.find((p) => p.id === photoId)!

  return (
    <Modal>
      <Frame photo={photo} />
    </Modal>
  )
}
