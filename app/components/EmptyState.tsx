'use client'
import React from "react";
import Heading from "./Heading";
import {useRouter} from 'next/navigation'
import Button from "./Button";

interface EmptyState {
    title?:string;
    subtitle?:string;
    showReset?:boolean
}
const EmptyState: React.FC<EmptyState> = ({
    title = 'No exact matches',
    subtitle = 'Try changing or moving some of your filters',
    showReset
}) => {
    const router = useRouter()
    return (
        <div className="h-[60vh] flex flex-col justify-center items-center gap-2">
            <Heading
            title={title}
            subtitle={subtitle}
            />
            <div className="w-48 mt-4" >
                {showReset && (
                    <Button outline label="Remove all filters" onClick={()=>router.push('/')} />
                )}
            </div>
        </div>
    )
}

export default EmptyState