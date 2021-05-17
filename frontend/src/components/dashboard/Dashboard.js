
import React from 'react'

import { DashboardNavbar } from './DashboardNavbar';
import { DashboardTask } from './DashboardTask';

export const Dashboard = () => {
    return (
        <main>
            <DashboardNavbar />

            <DashboardTask />
        </main>
    )
}
