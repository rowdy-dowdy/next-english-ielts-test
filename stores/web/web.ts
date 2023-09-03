import { create } from "zustand"

type State = {
  showHeader: boolean
}

type Actions = {
  setShowHeader: (data: boolean) => void
}

const useWebStore = create<State & Actions>(set => ({
  showHeader: true,
  setShowHeader: (data) => set({
    showHeader: data
  }),
})
)

export default useWebStore