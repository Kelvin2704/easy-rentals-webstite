'use client'
import { IconType } from "react-icons"
import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback } from "react";
import qs from 'query-string'
interface CategoryBoxProps {
    label: string,
    icon: IconType
    seleted?: boolean
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
    label,
    icon: Icon
    , seleted
}) => {
    const router = useRouter();
    const params = useSearchParams()

    const handleClick = useCallback(() => {
        let currentQuery = {}
        if (params) {
            currentQuery = qs.parse(params.toString());
            console.log(params)
        }
        const updatedQuery: any = {
            ...currentQuery,
            category: label
        }

        if (params?.get('category') === label) {
            delete updatedQuery.category
        }

        const url = qs.stringifyUrl({
            url: "/",
            query: updatedQuery
        }, { skipNull: true });

        router.push(url)
    }, [router,params,label])
    return (
        <div onClick={handleClick} className={`flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer 
        ${seleted ? 'border-b-neutral-800 text-neutral-800' : 'border-transparent text-neutral-500'}`}

        >
            <Icon size={26} />
            <div className="font-medium text-sm">
                {label}
            </div>
        </div>
    )
}

export default CategoryBox