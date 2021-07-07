const newLinkSubscribe = (parent: any, args: any, context: any, info: any) => {
  return context.pubsub.asyncIterator("NEW_LINK");
}

export const newLink = {
  subscribe: newLinkSubscribe,
  resolve: (payload: any) => {
    return payload
  }
}
