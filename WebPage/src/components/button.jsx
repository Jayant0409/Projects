
export function Button(props){

    return (
    <div className="h-[31px] p-3  bg-[#D01C28] text-white border flex items-center justify-center rounded">
        <button>{props.text}</button>
    </div>
    )

}