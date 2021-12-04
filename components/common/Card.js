import CardIcon from "./CardIcon";
export default function Card(props) {
    return (
        <div className="md:w-72 md:h-76 m-6 md:m-6 xl:m-8 bg-white flex flex-col items-center p-6 rounded-3xl filter drop-shadow-2xl	">
            <CardIcon icon={props.icon}/>
            <h1 className="font-bold text-xl py-4">{props.title}</h1>
            <p className="text-center text-sm font-normal font-sans leading-7">{props.paragraph}</p>
        </div>
    )
}