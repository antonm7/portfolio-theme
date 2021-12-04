export default function WorkImage(props) {
    const path = `/images/work/${props.fileName}.svg`
    return (
        <div className="relative">
            <img id="workImage" alt="Work Image" src={path} className="mb-6 pr-6 cursor-pointer" />
        </div>
    )
}