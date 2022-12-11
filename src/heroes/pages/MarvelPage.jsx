import { HeroList } from "../components"

export const MarvelPage = () => {
  return (
    <>
    <h1 className="my-4">Marvel</h1>
    <div className="mt-3">
      <HeroList publisher='Marvel Comics'/>
    </div>
  </>
  )
}
