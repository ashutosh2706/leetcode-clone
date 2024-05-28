import { useParams } from "react-router"
import Toolbar from "../components/Toolbar";
import Workspace from "../components/Workspace";

export default function ProblemDetail() {

    const { problemId } = useParams();


    // process the problemId and other api related stuff here

    return (
        <>
            <div className="overflow-y-hidden h-screen">
                <Toolbar problemPage={true} />
                <Workspace />
            </div>
        </>
    )
}