import { useParams } from "react-router"

const EditMovie = () => {
  const {id} = useParams();
  return (
    <div>Edit Movie {id}</div>
  )
}

export default EditMovie