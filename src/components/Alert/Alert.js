import "./Alert.css";
export default function Alert({alert, showaltr}) {
    const [name, email] = alert;
    return (
        <div className="container" >
            <div className={`alert-success`} role="alert">
                <strong style={{color:"blueviolet"}}> ***Message Sent*** </strong> <br /> Thanks to approach Me, {name}. <br /> ASAP I'll reply you on {email}.</div>
        </div>

    );
};
