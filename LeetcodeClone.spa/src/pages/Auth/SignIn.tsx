import AuthModal from "../../components/Modals/AuthModal";

export default function SignIn() {
    return (
        <>
            <div className="bg-gray-200 w-screen h-screen">
                <AuthModal ModalType={1}/>
            </div>
        </>
    )
}