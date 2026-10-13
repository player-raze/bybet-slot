export const useDemoInteraction = () => {
  const toastMessage = useState<string>('demo-toast-message', () => '')
  let toastTimeout: ReturnType<typeof setTimeout> | undefined

  const showDemoMessage = (label: string): void => {
    toastMessage.value = `${label} is a demo interaction.`

    if (toastTimeout) {
      clearTimeout(toastTimeout)
    }

    toastTimeout = setTimeout(() => {
      toastMessage.value = ''
    }, 2800)
  }

  const clearDemoMessage = (): void => {
    toastMessage.value = ''

    if (toastTimeout) {
      clearTimeout(toastTimeout)
    }
  }

  return {
    clearDemoMessage,
    showDemoMessage,
    toastMessage,
  }
}
