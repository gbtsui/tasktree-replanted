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

    // @ts-ignore
    const ConfirmationDialog = ({ onClose, onConfirm, title, message }) => {
        return (
            <div>
                <div className={"dialog"}>
                    <h2>{title}</h2>
                    <p>{message}</p>
                    <div className={"dialog-buttons"}>
                        <button onClick={onClose}>Cancel</button>
                        <button onClick={onConfirm}>Confirm</button>
                    </div>
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

    var message: string = "Are you sure you want to delete your project? You can't undo this operation!"

    return (
        <div>
            <button onClick={openDialog} className={"open-button"}>Delete</button>
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