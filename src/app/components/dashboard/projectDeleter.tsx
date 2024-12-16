"use client"
import {deleteProject} from "@/app/api/dashboard/deleteProject"
import {useState} from "react"

export default function ProjectDeleter({id}: {id: bigint}) {
    /**
    async function delete_project(){
        "use server"
        await deleteProject(id);
        return "Project Deleted";
    }
        **/
    //@ts-ignore
    const ConfirmationDialog = ({ onClose, onConfirm, title, message }) => {
        return (
            <div className="clear-both justify-center align-center">
                <h2>{title}</h2>
                <p className={"text-lg"}>{message}</p>
                <div className={"text-darkforestgreen"}>
                    <button onClick={onClose} className={"p-3 bg-cream m-2"}>Cancel</button>
                    <button onClick={onConfirm} className={"p-3 bg-cream m-2"}>Confirm</button>
                </div>
            </div>
        )
    }


    const [isOpen, setIsOpen] = useState<boolean>(false);

    const openDialog = () => {
        setIsOpen(true);
    }

    const closeDialog = () => {
        setIsOpen(false);
    }

    const handleConfirm = async () => {
        message = await deleteProject(id);
        setIsOpen(false);
    }

    let message: string = "Are you sure you want to delete your project? You can't undo this operation!"

    return (
        <div>
            {!isOpen && (
                <button onClick={openDialog} className={"open-button"}>Delete</button>
            )}
            {isOpen && (
                <ConfirmationDialog
                    onClose={closeDialog}
                        onConfirm={handleConfirm}
                        title="Delete Project"
                        message={message}
                    />
                )}
        </div>
    )
}