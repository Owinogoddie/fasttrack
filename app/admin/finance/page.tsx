// app/(admin)/admin/financials/page.tsx
import FinancialOverview from "@/components/admin/financials/FinancialOverview";
import FinancialCharts from "@/components/admin/financials/FinancialCharts";
import RevenueBreakdown from "@/components/admin/financials/RevenueBreakdown";
import ExpenseBreakdown from "@/components/admin/financials/ExpenseBreakdown";
import TransactionsTable from "@/components/admin/financials/TransactionsTable";
import CashflowAnalysis from "@/components/admin/financials/CashflowAnalysis";

export default function FinancialsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="heading-2">Financial Management</h1>
          <p className="text-secondary-600 mt-1">
            Track revenue, expenses, and financial performance
          </p>
        </div>
        <div className="flex gap-3">
          <button className="btn btn-outline">
            Download Reports
          </button>
          <button className="btn btn-primary">
            Add Transaction
          </button>
        </div>
      </div>

      <FinancialOverview />
      <FinancialCharts />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RevenueBreakdown />
        <ExpenseBreakdown />
      </div>

      <CashflowAnalysis />
      <TransactionsTable />
    </div>
  )
}