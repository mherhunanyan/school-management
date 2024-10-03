import React from 'react'
import ReactDOM from 'react-dom/client'
import { apolloClient } from 'Api/apolloClient'
import { ApolloProvider } from '@apollo/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import './Assets/styles/index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <React.StrictMode>
        <ApolloProvider client={apolloClient}>
            <RouterProvider router={router} />
        </ApolloProvider>
    </React.StrictMode>
)
