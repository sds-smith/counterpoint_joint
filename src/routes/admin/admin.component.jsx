
import Editor from "../../components/editor/editor.component";
import OnTap from "../../components/on-tap/on-tap.component";

import './admin.styles.css'

const Admin = () => {
    return (
        <div className="admin-container">
            <Editor />
            <OnTap />
        </div>
    )
}

export default Admin