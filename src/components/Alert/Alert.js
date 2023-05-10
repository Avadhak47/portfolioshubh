import "./Alert.css";
export default function Alert(props) {
    const [name, email] = props.alert;
    return (
        <div className="container" >
            <div className={`alert-success`} role="alert">
                <strong>Sent </strong>: {name}, i will reply you on {email}. Hope Email is correct</div>
        </div>

    );
};
