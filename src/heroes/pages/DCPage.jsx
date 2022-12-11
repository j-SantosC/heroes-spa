import { HeroList } from "../components/HeroList";


export const DCPage = () => {
  return (
    <>
      <h1 className="my-4">DCPage</h1>
      <div className="mt-3">
        <HeroList publisher='DC Comics'/>
      </div>
    </>
  )
}
