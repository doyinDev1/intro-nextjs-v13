
import NewTodoForm from "@/components/NewTodoForm"

const DocsIdPage = ({ params }) => {
//  console.log(params.id)
  return (
    <div>
      doc id{params.id}

      <NewTodoForm/>
    </div>
  )
}

export default DocsIdPage
  