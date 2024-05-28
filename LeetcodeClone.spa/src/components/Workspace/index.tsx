import Split from "react-split";
import CodePlayground from "./Playground/CodePlayground";
import TabHeader from "./Tabs";

export default function Workspace() {
    return (
        <Split className="split h-full w-full" minSize={0} sizes={[45, 55]}>
            <TabHeader />
            <CodePlayground />
        </Split>
    )
}