export function useSportsRouteBase() {
  const route = useRoute()
  return computed(() => {
    const match = route.path.match(/^\/(?:explore\/)?sports\/(popular|basketball|baseball|soccer|football|tennis)(?=\/|$)/)?.[1]
    return match ? `/sports/${match}` : ''
  })
}
