import Vue from 'vue'
import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost'
import VueApollo from 'vue-apollo'
import { setContext } from 'apollo-link-context'
import type { Plugin } from '@nuxt/types'
import type { DollarApollo } from 'vue-apollo/types/vue-apollo'
import type { VueApolloComponentOptions } from 'vue-apollo/types/options'
import fetch from 'node-fetch'

declare module 'vue/types/vue' {
  interface Vue {
    $apollo: DollarApollo<this>
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    apollo?: VueApolloComponentOptions<V>
  }
}

const plugin: Plugin = (ctx, _inject) => {
  const { app } = ctx

  const httpLink = new HttpLink({
    uri: process.env.NUXT_ENV_CONTENTFUL_API_URL,
    fetch: fetch as any,
  })

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${process.env.NUXT_ENV_CONTENTFUL_DELIVERY_TOKEN}`,
      },
    }
  })

  const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  })
  const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
  })

  Vue.use(VueApollo)
  app.apolloProvider = apolloProvider
}

export default plugin
