/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { api } from '@/services/api'

import { createContext, useState, ReactNode, useEffect } from 'react'

interface MyContextType {
  title: string
  userId: number
  token: string
  email: string
  status: string
  name: string
  confirmation: string
  nomeCanal: string
  tipo: string
  planName: string
  selectedPlan: string
  statusPagarme: string
  changeTitle: (param: string) => void
  changeSelectedPlan: (param: string) => void
  changeUserId: (param: number) => void
  changeToken: (param: string) => void
  logoff: () => void
}

interface MyContextProvideProps {
  children: ReactNode
}
export const MyContext = createContext({} as MyContextType)

export function MyContextProvider({ children }: MyContextProvideProps) {
  const [title, setTitle] = useState<string>('')
  const [userId, setUserId] = useState<number>(0)
  const [token, setToken] = useState<string>('0')

  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')
  const [name, setName] = useState('')
  const [confirmation, setConfirmation] = useState('')

  const [nomeCanal, setNomeCanal] = useState('')
  const [tipo, setTipo] = useState('')
  const [planName, setPlanName] = useState('')
  const [selectedPlan, setSelectedPlan] = useState('')
  const [statusPagarme, setStatusPagarme] = useState('')
  

  useEffect(() => {
    const tokenStorage = localStorage.getItem('estudiopetbnu-token')

    if (tokenStorage) {
      api.defaults.headers.common.Authorization = 'Bearer ' + tokenStorage
      getusuarioLogado()
    }
  }, [])

  const changeToken = (param: string) => {
    localStorage.setItem('estudiopetbnu-token', param)
    setToken(param)
    api.defaults.headers.common.Authorization = 'Bearer ' + param
    getusuarioLogado()
  }
  const logoff = () => {
    localStorage.removeItem('estudiopetbnu-token')
    setUserId(0)    
      setEmail('')
      setStatus('')
      setName('')
      setConfirmation('')
      setNomeCanal('')
      setTipo('')
      setPlanName('')
      setStatusPagarme('')
  }
  const changeTitle = (param: string) => {
    setTitle(param)
  }
  
  const changeSelectedPlan = (param: string) => {
    debugger
    setSelectedPlan(param)
  }

  const changeUserId = (param: number) => {
    setUserId(param)
  }
  const getusuarioLogado = () => {
    api.get('perfil/user').then((e) => {
      changeUserId(e?.data?.id_user)
      setEmail(e?.data?.email)
      setStatus(e?.data?.status)
      setName(e?.data?.name)
      setConfirmation(e?.data?.confirmation)
      setNomeCanal(e?.data?.nome_canal)
      setTipo(e?.data?.tipo)
      setPlanName(e?.data?.plan_name)
      setStatusPagarme(e?.data?.statusPagarme)
    })
  }
  return (
    <MyContext.Provider
      value={{
        title,
        userId,
        token,
        email,
        status,
        name,
        confirmation,
        nomeCanal,
        tipo,
        planName,
        selectedPlan,
        statusPagarme,
        changeUserId,
        changeTitle,
        changeSelectedPlan,
        changeToken,
        logoff,
      }}
    >
      {children}
    </MyContext.Provider>
  )
}