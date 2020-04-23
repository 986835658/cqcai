export default ({ app, store }) => {
  window.addEventListener('beforeunload', () => {
    sessionStorage.setItem('storeCache', JSON.stringify(store.state))

  })
  window.addEventListener('load', () => {
    const storeCache = sessionStorage.getItem('storeCache')
    if (storeCache) {
      store.replaceState(JSON.parse(storeCache))
      
    }
    sessionStorage.clear()
  })

}
