import { useParams } from "react-router"

const EditMember = () => {
  const {id} = useParams();
  return (
    <div>Edit Member {id}</div>
  )
}

export default EditMember