import { useParams } from "react-router"

const EditUser = () => {
  const {id} = useParams();
  return (
    <div>Edit User {id}</div>
  )
}

export default EditUser