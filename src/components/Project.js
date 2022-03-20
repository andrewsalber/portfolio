function Project(props) {
    return (
        <div className="col">
            <a href = {props.url} target="_blank" rel="noreferrer" style={{textDecoration: "none"}}>
                <div className="card card-cover h-100 overflow-hidden text-black bg-white rounded-5 shadow-lg" style={{
                    backgroundImage: `url(${props.photoLocation})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover"}}>
                    <div className="d-flex flex-column h-100 p-5 pb-3 text-black text-shadow-1">
                    <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">{props.name}</h2>
                    </div>
                </div>
            </a>
        </div>
    )
}
export default Project;