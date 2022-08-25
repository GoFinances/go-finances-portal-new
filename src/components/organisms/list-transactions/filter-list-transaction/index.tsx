import React, { useCallback } from 'react'

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { useForm } from 'react-hook-form';

import { Button, GridItem } from '../../../atomic'

import FormInput from '../../../molecules/form/input'
import Filter from '../../../molecules/list/paginator/filter';
import FormSelectMulti from '../../../molecules/form/select-multi';
import FormSelect from '../../../molecules/form/select';

import { useTransaction } from '../../../../hooks/use-transacion';
import { Format } from '../../../../utils/format';


interface IFilterListTransaction {}

interface IFormValues {
    search:string
    category_id:string[]
    type:string
    dt_init:string
    dt_end:string
}

const initialMonth = () => Intl.DateTimeFormat('pt-BR').format(new Date(new Date().getFullYear(), new Date().getMonth(), 1)).replaceAll('/','-').split('-').reverse().join('-')
const maxDate = () => Intl.DateTimeFormat('pt-BR').format(new Date()).replaceAll('/','-').split('-').reverse().join('-')

export default function FilterListTransaction({

}: IFilterListTransaction) {
    const { filter, changeFilter } = useTransaction()

    const schema = yup.object({
        search:yup.string(),
        type:yup.string(),
        category_id: yup.array(),
        dt_init:yup.string(),
        dt_end:yup.string()
    }).required();


    const {
        formState: { errors },
        register,
        handleSubmit,
        setValue,
        getValues,
    } = useForm<IFormValues>({
        resolver: yupResolver(schema),
        defaultValues:{
            type :"all",
            dt_init : initialMonth(),
            dt_end : maxDate(),
        }
    })

    const handleCategoryId = useCallback((values: string[] | undefined) => {
        setValue('category_id', values || [])
    },[setValue])

    const handleType = useCallback((value: string | undefined) => {
        setValue('type', value || "")
    },[setValue])

    const onSubmit = async ({ dt_init, dt_end, ...data }: IFormValues) => {
        changeFilter({ 
            ...filter, 
            ...data, 
            dt_init: Format.dateLibToDateSql(dt_init), 
            dt_end: Format.dateLibToDateSql(dt_end),
            page: 1 
        })
    }

    return (
        <Filter>
            <form onSubmit={handleSubmit(onSubmit)} data-testid={"form-filter-list-transaction"} style={{ display: "flex", alignItems: 'baseline' }}>
                <GridItem mb="xxxs" mr="nano">
                    <FormInput 
                        defaultValue={getValues("search")}
                        isDisabled={false}
                        register={register}
                        fieldRegister="search"
                        name="search"
                        label={{ text: "Transação" }} 
                        errors={errors}
                        type="text"
                        placeholder='Digite o nome da transação'
                    />
                </GridItem>
                <GridItem mb="xxxs" mr="nano">
                    <FormSelect 
                        defaultID={getValues("type")}
                        onChange={handleType}
                        isDisabled={false}
                        name="type"
                        label={{ text: "Tipo" }} 
                        errors={errors}
                        placeholder='Selecione um tipo'
                        options={[{ id: "all", description: "Ambos" }, { id: "income", description: "Entrada" }, { id: "outcome", description: "Saída" }]}
                    />
                </GridItem>
                <GridItem mb="xxxs" mr="nano">
                    <FormSelectMulti 
                        isDisabled={false}
                        register={register}
                        fieldRegister="category_id"
                        name="category_id"
                        label={{ text: "Categoria" }} 
                        errors={errors}
                        placeholder='Selecione uma categoria'
                        onChange={handleCategoryId}
                        options={[
                            {id: 'c8785ec6-3396-4119-913c-9da5edee4c10', description: 'Categoria 1'},
                            {id: 'c4cdef3b-76bb-4e23-a287-fe779c7b48b0', description: 'Categoria 2'},
                            {id: 'e05bd6e0-cca3-485b-971c-dda56d211a79', description: 'Categoria 3'},
                            {id: 'b23b6a94-9a0a-447e-bb22-85ec25ed50da', description: 'Categoria 4'}
                        ]}
                    />
                </GridItem>
                <GridItem mb="xxxs" display="flex" mr="nano">
                    <GridItem mr="nano">
                        <FormInput 
                            defaultValue={getValues("dt_init")}
                            isDisabled={false}
                            register={register}
                            fieldRegister="dt_init"
                            name="dt_init"
                            label={{ text: "Data Início" }} 
                            errors={errors}
                            type="date"
                            placeholder='Data de início'
                        />
                    </GridItem>
                    <GridItem>
                        <FormInput 
                            defaultValue={getValues("dt_end")}
                            isDisabled={false}
                            register={register}
                            fieldRegister="dt_end"
                            name="dt_end"
                            label={{ text: "Data Fim" }} 
                            errors={errors}
                            type="date"
                            placeholder='Digite o nome da transação'
                            max={maxDate()}
                            
                        />
                    </GridItem>
                </GridItem>

                <Button type='submit' variant="brand-primary-solid" >Buscar</Button>
            </form>
        </Filter>
    )
}
