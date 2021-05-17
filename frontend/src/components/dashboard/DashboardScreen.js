
import React from 'react'
import { Dashboard } from './Dashboard'
import { Sidebar } from './Sidebar'

export const DashboardScreen = () => {
    return (
        <main className="dashboard__main">

            <Sidebar />

            <Dashboard />
        </main>
    )
}
