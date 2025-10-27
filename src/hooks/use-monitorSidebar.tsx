import { create } from 'zustand'

interface SidebarState {
  sidebarActive: boolean,
  setSideBar: (val: boolean) => void
}
const monitorSidebar = create<SidebarState>()((set) => ({
  sidebarActive: false,
  setSideBar: (val) => set({
    sidebarActive: val
  })
}))

export default monitorSidebar;