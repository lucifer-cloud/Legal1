'use client'

import { fetchIncomeData } from '@/utilities/fetchIncomeData'
import React, { useEffect, useState } from 'react'
import { Button, DatePicker, Modal, useModal } from '@payloadcms/ui'
import { MinimalTemplate } from '@payloadcms/next/templates'

const TABS = ['today', 'month', 'year', 'range']
const INITIAL_DASHBOARD_DATA = {
  revenue: { total: 0, logs: [] },
  patients: { count: 0, logs: [] },
  appointments: { count: 0, logs: [] },
}

const IncomeDashboards = () => {
  const [activeTab, setActiveTab] = useState('today')
  const [dashboardData, setDashboardData] = useState(INITIAL_DASHBOARD_DATA)
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [logs, setLogs] = useState([])
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const { toggleModal } = useModal()
  const modalSlug = 'analysisModal'

  useEffect(() => {
    if (activeTab === 'range') {
      resetRangeData()
    } else {
      fetchData(activeTab)
    }
  }, [activeTab])

  const resetRangeData = () => {
    setStartDate('')
    setEndDate('')
    setDashboardData(INITIAL_DASHBOARD_DATA)
    setLoading(false)
  }

  const fetchData = async (tab, start = '', end = '') => {
    setLoading(true)
    const data = await fetchIncomeData(tab, start, end)
    setDashboardData(data)
    setLoading(false)
  }

  const handleCardClick = (category) => {
    setSelectedCategory(category)
    setLogs(dashboardData?.[category]?.logs || [])
    toggleModal(modalSlug)
  }

  const handleRangeSubmit = () => {
    if (startDate && endDate) {
      fetchData('range', startDate, endDate)
    }
  }

  return (
    <>
      <div className="dashboardTabs">
        <ul className="doc-tabs__tabs">
          {TABS.map((tab) => (
            <li
              key={tab}
              className={`doc-tab ${activeTab === tab ? 'doc-tab--active' : ''}`}
              onClick={() => setActiveTab(tab)}
              style={{ cursor: 'pointer' }}
            >
              <a
                className="doc-tab__link tab_padding"
                tabIndex="-1"
                onClick={(e) => e.preventDefault()}
              >
                <span className="doc-tab__label">{tab.charAt(0).toUpperCase() + tab.slice(1)}</span>
              </a>
            </li>
          ))}
        </ul>

        {activeTab === 'range' && (
          <div className="dateGroup dashboard__group headline__group">
            <ul className="dashboard__card-list" style={{ alignItems: 'center' }}>
              <li>
                <DatePicker onChange={setStartDate} value={startDate} placeholder="Start Date" />
              </li>
              <li>
                <DatePicker onChange={setEndDate} value={endDate} placeholder="End Date" />
              </li>
              <li>
                <Button onClick={handleRangeSubmit} className="marginBlock0">
                  Filter
                </Button>
              </li>
            </ul>
          </div>
        )}

        <div className="dashboard__group headline__group">
          <ul className="dashboard__card-list">
            {['revenue', 'patients', 'appointments'].map((category) => (
              <li key={category}>
                <div
                  className={`card card--has-onclick headlineBlock ${category}`}
                  onClick={() => handleCardClick(category)}
                >
                  <h1>
                    {loading ? (
                      <span style={{ fontSize: '12px', height: 0, lineHeight: '10px' }}>
                        Loading...
                      </span>
                    ) : category === 'revenue' ? (
                      `${dashboardData?.[category]?.total || 0} ₹`
                    ) : (
                      dashboardData?.[category]?.count || 0
                    )}
                  </h1>
                  <p className="card__title headlineSmallText">
                    {category==="patients" ?'New patients': category.charAt(0).toUpperCase() + category.slice(1)}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Modal slug={modalSlug} className="delete-document">
        <MinimalTemplate
          className="confirmation-modal__wrapper delete-document__template delete-document__wrapper"
          width="wide"
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingBottom: '20px',
              height: 0,
            }}
          >
            <h4 style={{ paddingBottom: '10px' }}>
              {selectedCategory
                ? `${selectedCategory.charAt(0).toUpperCase()}${selectedCategory.slice(1).toLowerCase()} Logs`
                : 'Logs'}
            </h4>
            <Button
              onClick={() => toggleModal(modalSlug)}
              icon="x"
              iconPosition="right"
              buttonStyle="icon-label"
              iconStyle="without-border"
            />
          </div>
          <div style={{ height: '80vh', overflowY: 'auto', padding: 0 }}>
            <div className="table" style={{ borderRadius: '5px' }}>
              <table cellPadding="0" cellSpacing="0">
                <thead>
                  <tr>
                    <th style={{ padding: '10px' }}>Patient Name</th>
                    <th style={{ padding: '10px' }}>
                      {selectedCategory === 'patients' ? 'Created date' : 'Appointment Date'}
                    </th>
                    {selectedCategory === 'revenue' && (
                      <th style={{ padding: '10px' }}>Total Amount</th>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {logs.length > 0 ? (
                    logs.map((log, index) => (
                      <tr key={index}>
                        <td style={{ padding: '10px' }}>{log.patientName}</td>
                        <td style={{ padding: '10px' }}>
                          {new Date(log.appointmentDate).toLocaleDateString()}
                        </td>
                        {selectedCategory === 'revenue' && (
                          <td style={{ padding: '10px' }}>{log.totalAmount} ₹</td>
                        )}
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="3" style={{ padding: '10px', textAlign: 'center' }}>
                        No data available
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </MinimalTemplate>
      </Modal>
    </>
  )
}

export default IncomeDashboards
