// app/(admin)/admin/settings/page.tsx
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@/components/common/Tabs'
import ProfileSettings from '@/components/admin/settings/ProfileSettings'
import CompanySettings from '@/components/admin/settings/CompanySettings'
import NotificationSettings from '@/components/admin/settings/NotificationSettings'
import SecuritySettings from '@/components/admin/settings/SecuritySettings'
// import BillingSettings from '@/components/admin/settings/BillingSettings'
// import IntegrationSettings from '@/components/admin/settings/IntegrationSettings'
// import TeamSettings from '@/components/admin/settings/TeamSettings'

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="heading-2">Settings</h1>
        <p className="text-secondary-600 mt-1">
          Manage your account and application preferences
        </p>
      </div>

      <Tabs defaultValue="profile">
        <TabList className="border-b border-secondary-200 mb-6">
          <Tab value="profile">Profile</Tab>
          <Tab value="company">Company</Tab>
          <Tab value="notifications">Notifications</Tab>
          <Tab value="security">Security</Tab>
          <Tab value="billing">Billing</Tab>
          <Tab value="integrations">Integrations</Tab>
          <Tab value="team">Team</Tab>
        </TabList>

        <TabPanels>
          <TabPanel value="profile">
            <ProfileSettings />
          </TabPanel>
          <TabPanel value="company">
            <CompanySettings />
          </TabPanel>
          <TabPanel value="notifications">
            <NotificationSettings />
          </TabPanel>
          <TabPanel value="security">
            <SecuritySettings />
          </TabPanel>
          {/* <TabPanel value="billing">
            <BillingSettings />
          </TabPanel>
          <TabPanel value="integrations">
            <IntegrationSettings />
          </TabPanel>
          <TabPanel value="team">
            <TeamSettings />
          </TabPanel> */}
        </TabPanels>
      </Tabs>
    </div>
  )
}