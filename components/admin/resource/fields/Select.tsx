"use client";

import { ReactNode, useState } from "react";
import { Select as SelectComponent, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

export default function Select({ field, state, pending, index }: { field: any, state: any, pending: boolean, index: string }): ReactNode {
    const [v, setV] = useState(state?.[index]);
    return <>
        <input type="hidden" value={v} name={index} className="hidden" />
        <SelectComponent defaultValue={v} onValueChange={(val: any) => setV(val)}
            disabled={pending}
        >
            <SelectTrigger className="w-full">
                <SelectValue placeholder={field?.placeholder || ''} />
            </SelectTrigger>
            <SelectContent>
                {(field?.options || []).map((op: any, opKey: any) => <SelectItem key={`${opKey}_${op.value}`} value={op.value}>{op.label}</SelectItem>)}
            </SelectContent>
        </SelectComponent>
    </>
}