"use client"

import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'

const data = [
  { month: "Jan", online: 400, offline: 240 },
  { month: "Feb", online: 300, offline: 139 },
  { month: "Mar", online: 500, offline: 380 },
  { month: "Apr", online: 280, offline: 308 },
  { month: "May", online: 600, offline: 400 },
  { month: "Jun", online: 500, offline: 300 },
]

export function AnalyticsChart() {
  return (
    <div className="w-full h-[300px] bg-white p-4 rounded-lg">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis 
            dataKey="month" 
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis 
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${value}`}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #f0f0f0',
              borderRadius: '4px',
              padding: '8px'
            }}
          />
          <Area 
            type="monotone" 
            dataKey="online" 
            stackId="1"
            stroke="#22c55e" 
            fill="#22c55e" 
            fillOpacity={0.2}
            name="Online"
          />
          <Area 
            type="monotone" 
            dataKey="offline" 
            stackId="1"
            stroke="#94a3b8" 
            fill="#94a3b8" 
            fillOpacity={0.2}
            name="Offline"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
