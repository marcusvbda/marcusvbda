'use client';

import { ReactNode, useState } from 'react';
import { useBreadcrumb } from '@/store/admin/use-breadcrumb';
import { useParams } from 'next/navigation';
import Resource from '@/components/admin/resource';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { ListIcon, PlusIcon } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function FieldPageContentClient({ component }: any): ReactNode {
    const [tab, setTab] = useState("_en")

    useBreadcrumb([
        { href: '/admin', label: 'Home' },
        { label: 'CMS' },
        { href: '/admin/components', label: 'Components' },
        { label: component?.name },
        { label: "Component's fields" },
    ]);

    return (
        <>
            <Resource
                entity="Field"
                icon={<ListIcon className='size-10' />}
                label="Field"
                pluralLabel="Fields"
                description={`Define fields of "${component?.name}" to consume it in your application.`}
                filterBy="id,name,value"
                itemLabel="name"
                defaultFilter={{
                    componentId: Number(component?.id), name: {
                        contains: tab
                    }
                }}
                classNameList="grid-cols-1!"
                beforeList={
                    <Tabs defaultValue={tab}>
                        <TabsList>
                            <TabsTrigger value="_pt" onClick={() => setTab('_pt')}>PT</TabsTrigger>
                            <TabsTrigger value="_en" onClick={() => setTab('_en')}>EN</TabsTrigger>
                        </TabsList>
                    </Tabs>}
                fields={{
                    name: {
                        type: 'text',
                        label: 'Name',
                        placeholder: 'Field name',
                        required: true,
                    },
                    value: {
                        type: 'text',
                        label: 'Value',
                        placeholder: 'Field value',
                        required: true,
                    },
                }}
                renderItem={(row: any) => {
                    const identifier = `#${row?.id && row?.id.toString().padStart(6, '0')}`;
                    return <Card className="relative cursor-pointer transition-all duration-300 hover:border-primary hover:shadow-lg">
                        <CardContent className="h-full items-center p-4 gap-4 grid grid-cols-1 md:grid-cols-3">
                            <span className="text-xs font-mono text-muted-foreground">
                                {identifier}
                            </span>
                            <div>
                                <h4 className="font-semibold gap-4">
                                    {row?.name}
                                </h4>
                            </div>
                            <div>
                                <h4 className="font-semibold gap-4 text-muted-foreground">
                                    {row?.value}
                                </h4>
                            </div>
                        </CardContent>
                    </Card >
                }}
                renderNew={() => {
                    return <Card className="group cursor-pointer border-2 border-dotted bg-transparent shadow-none duration-300 transition-all hover:border-solid">
                        <CardHeader className="flex h-full items-center justify-center py-4">
                            <div className='flex items-center gap-2'>
                                <PlusIcon className="size-4 opacity-30 transition-opacity group-hover:opacity-100" />
                                <h4 className="opacity-30 transition-opacity group-hover:opacity-100">
                                    Create new
                                </h4>
                            </div>
                        </CardHeader>
                    </Card>
                }}
            /></>
    );
}
