export function TrackingTimeline({ updates }: { updates: any[] }) {
    return (
      <div className="space-y-8">
        {updates.map((update, index) => (
          <div key={index} className="relative pl-8 pb-8">
            {index !== updates.length - 1 && (
              <div className="absolute left-[15px] top-[24px] bottom-0 w-[2px] bg-primary-100" />
            )}
            <div className="absolute left-0 top-2 w-8 h-8 rounded-full bg-primary-100 border-4 border-white">
              <div className="absolute inset-0 m-1 rounded-full bg-primary-500" />
            </div>
            <div className="pt-1">
              <div className="flex flex-wrap items-baseline gap-x-4">
                <h3 className="font-medium">{update.status}</h3>
                <span className="text-sm text-secondary-500">
                  {update.date} • {update.time}
                </span>
              </div>
              <p className="mt-1 text-secondary-600">{update.location}</p>
              {update.details && (
                <p className="mt-1 text-sm text-secondary-500">{update.details}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    )
  }