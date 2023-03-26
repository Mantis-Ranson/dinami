import { useRouter } from "next/router";

function Content() {
  const router = useRouter()
  console.log(router.query.id)
  return (
    <div>
        <div>
            hi {router.query.id}
        </div>
    </div>
  )
}
// get data

export default Content