"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { AnalyticsChart } from "@/components/analytics-chart"

export default function Dashboard() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">Analytics</h1>
          <div className="flex flex-col md:flex-row gap-4">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-lg border shadow-sm bg-white"
            />
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">CHECK-IN-COMPLETE</Badge>
              <Badge variant="outline" className="bg-yellow-100 text-yellow-800 border-yellow-200">NOT-UPDATED</Badge>
              <Badge variant="outline" className="bg-red-100 text-red-800 border-red-200">NO-SHOW</Badge>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-sm font-medium text-gray-500">Total</h3>
            <p className="text-2xl font-bold text-gray-900">679</p>
            <span className="text-sm text-gray-500">Today</span>
          </Card>
          <Card className="p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-sm font-medium text-gray-500">This Month</h3>
            <p className="text-2xl font-bold text-gray-900">1030,2401</p>
          </Card>
          <Card className="p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-sm font-medium text-gray-500">Last Month</h3>
            <p className="text-2xl font-bold text-gray-900">35075,49114</p>
          </Card>
        </div>

        <Card className="p-6 mb-8 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Online vs Offline Bookings</h3>
          <AnalyticsChart />
        </Card>

        <Card className="p-6 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Booking Details</h3>
          <Button variant="outline">Export</Button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr className="border-b">
                <th className="px-4 py-2 text-left">Check-in Date</th>
                <th className="px-4 py-2 text-left">Total Bookings</th>
                <th className="px-4 py-2 text-left">Web/Mobile/OTA</th>
                <th className="px-4 py-2 text-left">Online/Offline</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">Commission (INR)</th>
                <th className="px-4 py-2 text-left">Total Sales (INR)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">2025-07-03</td>
                <td className="px-4 py-2">663</td>
                <td className="px-4 py-2">74/40 | 289,219 | 41</td>
                <td className="px-4 py-2">404,259</td>
                <td className="px-4 py-2">
                  <Badge variant="outline" className="bg-green-100">Complete</Badge>
                </td>
                <td className="px-4 py-2">252.05</td>
                <td className="px-4 py-2">1031760</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
