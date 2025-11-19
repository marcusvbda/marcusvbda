'use client';

import { ReactNode, useState } from 'react';
import { useBreadcrumb } from '@/store/admin/use-breadcrumb';
import { useParams } from 'next/navigation';
import Resource from '@/components/admin/resource';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { ListIcon, PlusIcon } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CardItem } from '@/components/admin/resource/item';

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
                    language: {
                        type: 'text',
                        label: 'Language',
                        placeholder: 'Field language',
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
                    return <CardItem row={row} itemLabel="name">
                        <div className='text-sm text-muted-foreground'>{row?.value}</div>
                    </CardItem>
                }}
            /></>
    );
}
