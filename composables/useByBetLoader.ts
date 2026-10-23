export const useByBetLoader = () => {
  const isLoading = useState<boolean>('bybet-global-loading', () => false)
  const loadingLabel = useState<string>('bybet-global-loading-label', () => '')

  const showLoader = (label = ''): void => {
    loadingLabel.value = label
    isLoading.value = true
  }

  const hideLoader = (): void => {
    isLoading.value = false
    loadingLabel.value = ''
  }

  return {
    isLoading,
    loadingLabel,
    showLoader,
    hideLoader,
  }
}

