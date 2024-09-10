import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
  CImg,
} from '@coreui/react'


// sidebar nav config
import navigation from './_nav'
import { types } from 'src/types/types'

const TheSidebar = () => {
  const dispatch = useDispatch()
  const show = useSelector(state => state.ui.sidebarShow)

  return (
    <CSidebar
      show={show}
      onShowChange={(val) => dispatch({ type: types.setSidebar, payload: val })}
    >
      <CSidebarBrand className="d-md-down-none" to="/">
        <CImg
          src={"om-logo.png"}
          className="c-sidebar-brand-full"
          alt="admin@bootstrapmaster.com"
          height={40}
        />
        <CImg
          src={"om-logo.png"}
          className="c-sidebar-brand-minimized"
          alt="admin@bootstrapmaster.com"
          height={15}
        />
      </CSidebarBrand>
      <CSidebarNav>

        <CCreateElement
          items={navigation}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle
          }}
        />
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none" />
    </CSidebar>
  )
}

export default React.memo(TheSidebar)
