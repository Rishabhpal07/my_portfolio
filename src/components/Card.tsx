import { Github, Play } from "lucide-react"
//@ts-ignore
function Card({description,imageUrl,link1,link2}) {
  return (
    <div className="flex flex-col h-full w-sm p-5 border-1 rounded-3xl">
        <div className=" h-72 p-2 rounded-3xl">
        <img src={imageUrl} alt="" />
        </div>
        <div className="bg-black p-2 h-full pb-0 rounded-3xl">
         {description}
        </div>
        <div className="p-3 pt-0 flex items-center justify-between">
        <a target="_blank"
          rel="noopener noreferrer" href={link1} className="bg-amber-600 p-2 rounded-2xl flex items-center gap-2">repository<Github/></a>
        <a target="_blank"
          rel="noopener noreferrer" href={link2} className="bg-amber-600 p-2 rounded-2xl flex items-center gap-2">demo<Play/></a>
        </div>
    </div>
  )
}

export default Card
