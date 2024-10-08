import { Config } from 'Config'
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

const httpLink = createHttpLink({
    uri: Config.apiUrl,
})

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('token')

    return {
        headers: {
            ...headers,
            authorization: token ?? '',
        },
    }
})

export const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
})
