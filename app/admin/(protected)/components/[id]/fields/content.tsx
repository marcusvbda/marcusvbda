'use client';

import { ReactNode, useState } from 'react';
import { useBreadcrumb } from '@/store/admin/use-breadcrumb';
import Resource from '@/components/admin/resource';
import { ListIcon } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CardItem } from '@/components/admin/resource/item';
import Link from 'next/link';

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
                    type: 'textarea',
                    rows: 6,
                    label: 'Value',
                    placeholder: 'Field value',
                    required: true,
                },
            }}
            renderItem={(cx: any) => {
                const { row, setVisible } = cx
                return <CardItem row={row} itemLabel="name" onClick={(e: any) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setVisible(true);
                }} >
                    <div className='text-sm text-muted-foreground truncate w-full max-w-full overflow-hidden text-center'>{row?.value}</div>
                </CardItem>
            }}
        />
    );
}
