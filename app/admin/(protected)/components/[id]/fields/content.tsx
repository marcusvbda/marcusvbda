'use client';

import { ReactNode, useState } from 'react';
import { useBreadcrumb } from '@/store/admin/use-breadcrumb';
import Resource from '@/components/admin/resource';
import { ListIcon } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CardItem } from '@/components/admin/resource/item';

export default function FieldPageContentClient({ component }: any): ReactNode {
    const [language, setLanguage] = useState("en")

    useBreadcrumb([
        { href: '/admin/components', label: 'Components' },
        { label: `Component (${component?.name})` },
        { label: "Fields" },
    ]);

    return (
        <Resource
            entity="Field"
            icon={<ListIcon className='size-10' />}
            label="Field"
            pluralLabel="Fields"
            description={`Define fields in ${language} of "${component?.name}" to consume it in your application.`}
            filterBy="id,name,value"
            itemLabel="name"
            defaultFilter={{
                componentId: Number(component?.id), language
            }}
            beforeList={
                <Tabs defaultValue={language}>
                    <TabsList>
                        <TabsTrigger value="pt" onClick={() => setLanguage('pt')} className='cursor-pointer'>PT</TabsTrigger>
                        <TabsTrigger value="en" onClick={() => setLanguage('en')} className='cursor-pointer'>EN</TabsTrigger>
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
                    type: 'select',
                    label: 'Language',
                    required: true,
                    options: [
                        { label: 'PT', value: 'pt' },
                        { label: 'EN', value: 'en' },
                    ],
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
        />
    );
}
