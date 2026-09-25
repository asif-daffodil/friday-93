
const MyInfo = ({name, details}) => {
    return (
        <div>
            <h1 className="text-3xl text-blue-600">{name}</h1>
            <p className="italic">
                {details}
            </p>
            <button className="border rounded px-3 py-1">Read more</button>
        </div>
    );
};

export default MyInfo;