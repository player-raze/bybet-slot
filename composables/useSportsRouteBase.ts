export function useSportsRouteBase() {
  const route = useRoute()
  return computed(() => route.path.match(/^\/explore\/sports\/(popular|basketball|baseball|soccer|tennis)(?=\/|$)/)?.[0] ?? '')
}
